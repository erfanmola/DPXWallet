<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API;

Route::get('/balance/{wallet}', [ API::class, 'Balance'      ])->where([ 'wallet' => config('regex.md5') ]);
Route::get('/transaction/{id}', [ API::class, 'Transaction'  ])->where([ 'id' => config('regex.md5') ]);
Route::any('/transactions',     [ API::class, 'Transactions' ]);
Route::post('/transfer',        [ API::class, 'Transfer'     ]);
Route::post('/verify',          [ API::class, 'Verify'       ])->middleware('throttle:6,1');
Route::post('/revoke',          [ API::class, 'Revoke'       ])->middleware('throttle:6,1');
Route::post('/generate',        [ API::class, 'Generate'     ])->middleware('throttle:6,1');
Route::get('/{any}',            [ API::class, 'Invalid'      ])->where([ 'any' => '.*' ]);