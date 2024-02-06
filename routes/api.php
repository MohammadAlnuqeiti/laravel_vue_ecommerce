<?php

use App\Http\Controllers\Api\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\User\CartController;
use App\Http\Controllers\Api\UserController;
use App\Models\Category;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::get('/user', [\App\Http\Controllers\Api\AuthController::class, 'getUser']);
    Route::post('/logout', [\App\Http\Controllers\Api\AuthController::class, 'logout']);
    Route::put('/editProfile/{id}', [\App\Http\Controllers\Api\EditProfileAdminController::class, 'editProfile']);
    Route::put('/changePassword/{id}', [\App\Http\Controllers\Api\EditProfileAdminController::class, 'changePassword']);
    Route::apiResource('/products', ProductController::class);
    Route::apiResource('/categories', CategoryController::class);
    Route::apiResource('/users', UserController::class);
    Route::get('category', function () {

        $categories =  Category::all();
        return response()->json($categories);
    });
});
Route::post('/login', [\App\Http\Controllers\Api\AuthController::class, 'login']);
Route::post('/login-user', [\App\Http\Controllers\Api\User\AuthUserController::class, 'login']);
Route::post('/signup-user', [\App\Http\Controllers\Api\User\AuthUserController::class, 'signup']);
Route::post('/logout-user', [\App\Http\Controllers\Api\User\AuthUserController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/products-home', [\App\Http\Controllers\Api\User\ProductUserController::class, 'productsHome']);
Route::middleware(['auth:sanctum'])->prefix('/cart')->group(function () {
    Route::get('/', [CartController::class, 'index']);
    Route::post('/add/{product:id}', [CartController::class, 'add']);
    Route::post('/remove/{product:id}', [CartController::class, 'remove']);
    Route::post('/update-quantity/{product:id}', [CartController::class, 'updateQuantity']);
    Route::post('/count', [CartController::class, 'cartItemsCount']);
    Route::post('/moveDb', [CartController::class, 'moveCartItemsIntoDb']);
});
// Route::get('/cart/products', [CartController::class, 'productsCart']);
Route::prefix('/cart')->group(function () {
    Route::post('/products', [CartController::class, 'productsCart']);
});
