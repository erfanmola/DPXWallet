<?php

use Illuminate\Support\Facades\Route;

Route::any('/{any}', function () {

    return response()->json([ 
        'status' => 'error',
        'error' => 'not-allowed',
        'info' => 'Method is not allowed'
    ], 405);

})->where([ 'any' => '.*' ]);