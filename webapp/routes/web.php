<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

//dd(shell_exec('cd /var/darknet && ./darknet detector test cfg/coco.data cfg/yolov3.cfg weights/yolov3.weights data/3.jpg'));
    return view('welcome');
});
