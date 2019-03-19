<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function($router) {
	Route::post('/register', 'AuthController@register')->name('auth-register');
	Route::post('/login', 'AuthController@login')->name('auth-login');
	Route::post('/logout', 'AuthController@logout')->name('auth-logout');
});

Route::group(['middleware' => 'api', 'prefix' => 'customers'], function($router) {
	Route::get('/', 'CustomersController@index')->name('customers-list');
	Route::post('/', 'CustomersController@store')->name('customers-create');
	Route::get('/{id}', 'CustomersController@edit')->name('customers-edit');
	Route::put('/{id}', 'CustomersController@update')->name('customers-update');
	Route::delete('/{id}', 'CustomersController@destroy')->name('customers-delete');
});

Route::group(['middleware' => 'api', 'prefix' => 'agents'], function($router) {
	Route::get('/', 'AgentsController@index')->name('agents-list');
	Route::post('/', 'AgentsController@store')->name('agents-create');
	Route::get('/{id}', 'AgentsController@edit')->name('agents-edit');
	Route::put('/{id}', 'AgentsController@update')->name('agents-update');
	Route::delete('/{id}', 'AgentsController@destroy')->name('agents-delete');
});

Route::group(['middleware' => 'api', 'prefix' => 'subscribtions'], function($router) {
	Route::get('/', 'SubscribtionsController@index')->name('subscribtions-list');
	Route::get('/get-types', 'SubscribtionsController@types')->name('get-subscribtion-types');
	Route::get('/get-servers', 'SubscribtionsController@servers')->name('get-subscribtion-servers');
	Route::post('/', 'SubscribtionsController@store')->name('subscribtions-create');
	Route::patch('/{id}/set-paused', 'SubscribtionsController@pause')->name('subscribtions-pause');
	Route::patch('/{id}/set-cancelled', 'SubscribtionsController@cancel')->name('subscribtions-cancel');
	Route::get('/{id}', 'SubscribtionsController@edit')->name('subscribtions-edit');
	Route::put('/{id}', 'SubscribtionsController@update')->name('subscribtions-update');
	Route::delete('/{id}', 'SubscribtionsController@destroy')->name('subscribtions-delete');
});

Route::group(['middleware' => 'api', 'prefix' => 'subscribtion-cycles'], function($router) {
    Route::get('/{subscribtionId}', 'SubscribtionCyclesController@index')->name('subscribtion-cycles-list');
    Route::post('/{subscribtionId}', 'SubscribtionCyclesController@store')->name('subscribtion-cycles-create');
    Route::get('/{subscribtionId}/{id}', 'SubscribtionCyclesController@edit')->name('subscribtion-cycles-edit');
    Route::put('/{subscribtionId}/{id}', 'SubscribtionCyclesController@update')->name('subscribtion-cycles-update');
    Route::delete('/{subscribtionId}/{id}', 'SubscribtionCyclesController@destroy')->name('subscribtion-cycles-delete');
});

Route::group(['middleware' => 'api', 'prefix' => 'servers'], function($router) {
    Route::get('/', 'ServersController@index')->name('servers-list');
    Route::post('/', 'ServersController@store')->name('servers-create');
    Route::get('/{id}', 'ServersController@edit')->name('servers-edit');
    Route::put('/{id}', 'ServersController@update')->name('servers-update');
    Route::delete('/{id}', 'ServersController@destroy')->name('servers-delete');
});

Route::group(['middleware' => 'api', 'prefix' => 'applications'], function($router) {
    Route::get('/', 'ApplicationsController@index')->name('applications-list');
    Route::post('/', 'ApplicationsController@store')->name('applications-create');
    Route::get('/{id}', 'ApplicationsController@edit')->name('applications-edit');
    Route::put('/{id}', 'ApplicationsController@update')->name('applications-update');
    Route::delete('/{id}', 'ApplicationsController@destroy')->name('applications-delete');
});




