<?php

namespace App\Http\Controllers;

use App\Http\Controllers\API;
use App\Models\Wallet;
use App\Models\Transaction;
use Illuminate\Support\Facades\Hash;

class DPX extends Controller
{
    
    public static function CreateWallet(null|string $wallet = null) {

        if (!($wallet)) {

            $wallet = DPX::GenerateRandomHash();

        }

        $secret = DPX::GenerateRandomHash();

        Wallet::insert([ 'wallet' => $wallet, 'secret' => Hash::make($secret) ]);

        return [ 'wallet' => $wallet, 'secret' => $secret ];

    }

    public static function Transfer(string $departure, string $destination, float $amount, string $secret, float $fee = null) {

        if (!(preg_match('/' . config('regex.md5') . '/', $departure))) {

            return API::Error('invalid-departure', 'Departure wallet is invalid');

        }

        if (!(preg_match('/' . config('regex.md5') . '/', $destination))) {

            return API::Error('invalid-destination', 'Destination wallet is invalid');

        }

        if (!(preg_match('/' . config('regex.md5') . '/', $secret))) {

            return API::Error('invalid-secret-format', 'Secret phrase format is invalid');

        }

        if (!(preg_match('/' . config('regex.amount') . '/', $amount))) {

            return API::Error('invalid-amount', 'Amount is invalid');

        }

        if ($departure === $destination) {

            return API::Error('same-departure-destination', 'Departure and Destination are same');

        }

        $amount = round($amount, 1);

        if ($amount < env('FEE', 0.1)) {

            return API::Error('invalid-amount', 'Entered value is less than its fee');

        }

        $data = Wallet::where([ 'wallet' => $departure ])->orwhere([ 'wallet' => $destination ])->get()->toArray();

        foreach ($data as $key => $value) {

            $data[$value['wallet']] = json_decode(json_encode($value), true);
            unset($data[$key]);

        }

        foreach ([$departure, $destination] as $wallet) {

            if (isset($data[$wallet])) {

                if ((bool)$data[$wallet]['locked']) {

                    return API::Error('locked-' . ($wallet === $departure ? 'departure' : 'destination') . '-wallet', 'Departure/Destination wallet is locked');

                }

            }else{
                
                return API::Error('invalid-wallet', 'Wallet is invalid');

            }

        }

        if (!(Hash::check($secret, $data[$departure]['secret']))) {

            return API::Error('invalid-secret', 'Secret is invalid');

        }

        $destinationtalBalance = $data[$departure]['balance'] + $data[$departure]['bonus'];

        if (is_null($fee)) {

            $fee = env('FEE', 0.1);
            
        }

        if ($destinationtalBalance < ($amount + $fee)) {

            return API::Error('insufficient-balance', 'Balance is not sufficent');

        }

        if ($fee > 0) {

            if (preg_match('/' . config('regex.md5') . '/', (string)env('FEE_WALLET', ''))) {
                
                DPX::Transfer($departure, env('FEE_WALLET'), $fee, $secret, 0);

            }

            $data = Wallet::where([ 'wallet' => $departure ])->orwhere([ 'wallet' => $destination ])->get()->toArray();

            foreach ($data as $key => $value) {
    
                $data[$value['wallet']] = json_decode(json_encode($value), true);
                unset($data[$key]);
    
            }

            $transaction = [
                'transaction' => DPX::GenerateRandomHash(),
                'departure'   => $departure,
                'destination' => $destination,
                'amount'      => $amount,
                'fee'         => $fee,
                'timestamp'   => time(),
            ];
    
            Transaction::insert($transaction);

        }

        $bonusRemaining   = $data[$departure]['bonus'] - $amount;
        $balanceRemaining = $data[$departure]['balance'];

        if ($bonusRemaining < 0) {

            $balanceRemaining -= abs($bonusRemaining);

        }
        
        Wallet::where([ 'wallet' => $departure ])->update([ 
            'bonus' => max(0, $bonusRemaining),
            'balance' => $balanceRemaining
        ]);

        Wallet::where([ 'wallet' => $destination ])->update([
            'balance' => $data[$destination]['balance'] + $amount
        ]);

        return API::Respond($transaction ?? []);

    }

    public static function Verify(string $wallet, string $secret) {

        $wallet = Wallet::where('wallet', $wallet)->first();

        if ($wallet) {

            return Hash::check($secret, $wallet->secret);

        }

        return false;

    }

    public static function RevokeSecret(string $wallet, string $secret) {

        if (Wallet::where([ 'wallet' => $wallet, 'secret' => $secret ])->count() > 0) {

            $new_secret = DPX::GenerateRandomHash();

            Wallet::where([ 'wallet' => $wallet, 'secret' => $secret ])->update([ 'secret' => $new_secret ]);

            return $new_secret;

        }else{
         
            return false;

        }

    }

    public static function GetBalance(string $wallet) {

        $balance = Wallet::where([ 'wallet' => $wallet ])->first([ 'balance' ])->balance ?? null;

        return $balance ? API::Respond($balance) : API::Error('invalid-wallet', 'Wallet is invalid');

    }

    public static function GetTransaction(string $transaction) {

        $transaction = Transaction::where([ 'transaction' => $transaction ])->first([ 'transaction', 'departure', 'destination', 'amount', 'fee', 'timestamp' ]);

        return $transaction ? API::Respond($transaction) : API::Error('invalid-transaction', 'Transaction is invalid');

    }

    public static function GetTransactions(int $offset = 0, string|null $departure = null, string|null $destination = null) {

        if ($departure && $destination) {

            if ($departure === $destination) {

                $transactions = Transaction::where([ 'departure' => $departure ])
                                ->orWhere([ 'destination' => $destination ])
                                ->orderby('id', 'DESC')
                                ->limit(env('TRANSACTIONS_PER_FETCH', 250))
                                ->offset($offset)
                                ->get([ 'transaction', 'departure', 'destination', 'amount', 'fee', 'timestamp' ]);

            }else{
                
                $transactions = Transaction::where([ 'departure' => $departure, 'destination' => $destination ])
                                ->orderby('id', 'DESC')
                                ->limit(env('TRANSACTIONS_PER_FETCH', 250))
                                ->offset($offset)
                                ->get([ 'transaction', 'departure', 'destination', 'amount', 'fee', 'timestamp' ]);

            }

        }else if ($departure) {

            $transactions = Transaction::where([ 'departure' => $departure ])
                            ->orderby('id', 'DESC')
                            ->limit(env('TRANSACTIONS_PER_FETCH', 250))
                            ->offset($offset)
                            ->get([ 'transaction', 'departure', 'destination', 'amount', 'fee', 'timestamp' ]);

        }else if ($destination) {

            $transactions = Transaction::where([ 'destination' => $destination ])
                            ->orderby('id', 'DESC')
                            ->limit(env('TRANSACTIONS_PER_FETCH', 250))
                            ->offset($offset)
                            ->get([ 'transaction', 'departure', 'destination', 'amount', 'fee', 'timestamp' ]);

        }else{

            $transactions = Transaction::orderby('id', 'DESC')
                            ->limit(env('TRANSACTIONS_PER_FETCH', 250))
                            ->offset($offset)
                            ->get([ 'transaction', 'departure', 'destination', 'amount', 'fee', 'timestamp' ]);

        }

        $transactions = json_decode(json_encode($transactions), true);

        return API::Respond($transactions, json_encode: false);

    }

    public static function GenerateRandomHash() {

        return md5(random_bytes(32) . microtime(true));

    }

}