'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')
const Maha = use('App/Models/Mahasiswa')

Route.on('/').render('welcome')

Route.get('/data', 'HomeController.kamving');
Route.get('/edit/:nim', 'HomeController.edit');
Route.post('/edit/:nim', 'HomeController.editData');
Route.get('/hapus/:nim', 'HomeController.hapus');
Route.get('/add', ({view}) => {
    return view.render('add/edit', {status:'add'});
});

Route.post('/add', 'HomeController.add');