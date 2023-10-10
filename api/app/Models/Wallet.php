<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
    protected $table = 'wallets';

    protected $fillable = [
        'wallet', 'secret', 'balance', 'bonus', 'locked'
    ];

}
