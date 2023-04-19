<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\GroupController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\{
    UserResource,
};
use App\Models\User;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\InstrumentController;
use App\Http\Controllers\Api\MusicianroleController;
use App\Http\Controllers\Api\SectionController;
use App\Http\Controllers\Api\StyleController;
use App\Http\Controllers\Api\TimeframeController;
use App\Http\Controllers\Api\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', AuthController::class)->name('api.login');

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return UserResource::make($request->user());
});

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('posts', PostController::class);
    Route::apiResource('instruments', InstrumentController::class);
    Route::apiResource('musicianroles', MusicianroleController::class);
    Route::apiResource('groups', GroupController::class);
    Route::apiResource('sections', SectionController::class);
    Route::apiResource('styles', StyleController::class);
    Route::apiResource('comments', CommentController::class);
    Route::apiResource('timeframes', TimeframeController::class);
    Route::apiResource('users', UserController::class);
});
