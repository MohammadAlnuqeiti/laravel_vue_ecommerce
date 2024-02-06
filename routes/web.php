<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('app');
});

// لحتى اعطي الامكانية للفيو هندلة الراوت

Route::any('/{any}' , function(){
    return view('app');
})->where('any' , '.*');


// use App\Http\Controllers\CookieController;
// Route::get('/set-cookie', [CookieController::class, 'setCookie']);
// Route::get('/get-cookie', [CookieController::class, 'getCookie']);
