<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



Route::get('/preferences', function () {
    return Inertia::render('Preferences');
})->middleware(['auth', 'verified'])->name('preferences');

Route::post('/set_preferences', action: [UserController::class, 'storePreferences'])->middleware(['auth', 'verified'])->name('set_preferences');



Route::middleware('auth')->group(function () {
    Route::get('/profile', action: [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});







Route::post('/submit-course', [CourseController::class, 'submitCourse']);





//Teacher-dashboard

Route::get('/teacherdashboard', function () {
    return Inertia::render('Teacher');
})->middleware(['auth', 'verified'])->name('teacherdashboard');


Route::post('/submit_course', [CourseController::class, 'submitCourse'])->name('submit_course');



//Admin-dashboard

Route::get('/admindashboard', function () {
    return Inertia::render('Admin');
})->middleware(['auth', 'verified'])->name('admindashboard');



require __DIR__ . '/auth.php';
