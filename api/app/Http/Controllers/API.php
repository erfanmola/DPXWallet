<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\DPX;

class API extends Controller
{

    public function Generate(Request $request) {

        return $this->Respond(DPX::CreateWallet());

    }

    public function Transfer(Request $request) {

        $amount      = (float)($request->all()['amount'] ?? 0);
        $departure   = $request->all()['departure'] ?? '';
        $destination = $request->all()['destination'] ?? '';
        $secret      = $request->all()['secret'] ?? '';

        return DPX::Transfer($departure, $destination, $amount, $secret);

    }

    public function Verify(Request $request) {

        $wallet   = $request->all()['wallet'] ?? '';
        $secret   = $request->all()['secret'] ?? '';

        $verify = DPX::Verify($wallet, $secret);

        return $verify ? API::Respond(true) : API::Error('invalid-credentials', true, 'Provided credentials are invalid');

    }

    public function Revoke(Request $request) {

        $wallet   = $request->all()['wallet'] ?? '';
        $secret   = $request->all()['secret'] ?? '';

        $revoke = DPX::RevokeSecret($wallet, $secret);

        return $revoke ? API::Respond($revoke) : API::Error('invalid-credentials', true, 'Provided credentials are invalid');

    }

    public function Balance(Request $request) {

        return DPX::GetBalance($request->route('wallet'));

    }

    public function Transactions(Request $request) {

        $offset      = (int)($request->all()['offset'] ?? 0);
        $departure   = $request->all()['departure'] ?? null;
        $destination = $request->all()['destination'] ?? null;

        if ($departure && !(preg_match('/' . config('regex.md5') . '/', $departure))) {
            
            $departure = null;

        }

        if ($destination && !(preg_match('/' . config('regex.md5') . '/', $destination))) {
            
            $destination = null;

        }

        return DPX::GetTransactions($offset, $departure, $destination);

    }

    public function Transaction(Request $request) {

        return DPX::GetTransaction($request->route('id'));

    }

    public function Invalid() {
        
        return $this->Error('unsupported-action', true, 'Method is not allowed');

    }

    public static function Respond($data, $status = 'success', $json_encode = true) {

        $response = [ 'status' => $status, 'result' => $data ];

        return $json_encode ? response()->json($response) : $response;

    }

    public static function Error($error, $info = null) {

        return [ 
            'status' => 'error',
            'error' => $error,
            'info' => $info 
        ];

    }

}