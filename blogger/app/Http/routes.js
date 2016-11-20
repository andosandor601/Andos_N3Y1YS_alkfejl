'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

//Route.on('/').render('welcome')
Route.get('/', 'BlogController.index')
Route.get('/blog/new', 'BlogController.writeNewBlog')
Route.post('/blog/new', 'BlogController.saveBlog')
Route.get('/blog/:id', 'BlogController.show')
Route.get('/blog/:id/edit', 'BlogController.edit')
Route.post('/blog/:id/edit', 'BlogController.doEdit')