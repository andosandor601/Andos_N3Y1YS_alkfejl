'use strict'

//const Validator = use('Validator')

class BlogController {

    * index(req, res){
        yield res.sendView('welcome')
    }

}

module.exports = BlogController
