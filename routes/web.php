<?php

use Illuminate\Support\Facades\Route;


use Inertia\Inertia;
use App\Http\Controllers\ItemsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminAddController;
use App\Http\Controllers\SellingController;

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

Route::get('/', [ItemsController::class, 'latest5'])->name('welcome');


Route::get('/supplies', [ItemsController::class, 'index'])->name('supplies');

// reoute dev return inertia render
Route::get('/dev', function () {
    return Inertia::render('Dev');
})->name('dev');


Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])
    ->name('dashboard')
    ->middleware('can:isSuperAdmin');

    // Product
    Route::get('/product', [ProductController::class, 'index'])->name('product')
    ->middleware('can:isSuperAdmin');
    Route::post('/product', [ProductController::class, 'store'])->name('product.store');
    Route::patch('/product/{id}', [ProductController::class, 'update'])->name('product.update')
    ->middleware('can:isSuperAdmin');
    Route::delete('/product/{id}', [ProductController::class, 'destroy'])->name('product.destroy')
    ->middleware('can:isSuperAdmin');

    // Report 
    Route::get('/report', [ReportController::class, 'index'])->name('report');

    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');

    // AdminAdd
    Route::get('/adminadd', [AdminAddController::class, 'index'])->name('adminadd')
    ->middleware('can:isSuperAdmin');
    Route::post('/adminadd', [AdminAddController::class, 'store'])->name('adminadd.store')
    ->middleware('can:isSuperAdmin');
    Route::delete('/adminadd/{id}', [AdminAddController::class, 'destroy'])->name('adminadd.destroy')
    ->middleware('can:isSuperAdmin');
    Route::patch('/adminadd/{id}', [AdminAddController::class, 'update'])->name('adminadd.update')
    ->middleware('can:isSuperAdmin');

    // Selling
    Route::get('/selling', [SellingController::class, 'index'])->name('selling');
    Route::post('/selling', [SellingController::class, 'store'])->name('selling.store');
    

    
});

require __DIR__.'/auth.php';