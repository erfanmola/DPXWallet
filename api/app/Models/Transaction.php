<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $table = 'transactions';

    protected $fillable = [
        'transaction', 'departure', 'destination', 'amount', 'fee', 'timestamp'
    ];

}
