'use strict'

const Database = use('Database')
const Category = use('App/Model/Category')
const Blog = use('App/Model/Blog')
const Comment = use('App/Model/Comment')
const Follow = use('App/Model/Follow')
const User = use('App/Model/User')

class BlogController {

    * index(req, res){
        const categories = yield Category.all()

        for(let category of categories){
            const topBlogs = yield category.blogs().limit(3).fetch()
            category.topBlogs = topBlogs.toJSON()
        }

        yield res.sendView('main', {
            categories: categories.toJSON()
        })
    }

}

module.exports = BlogController
