'use strict'

const Database = use('Database')
const Category = use('App/Model/Category')
const Blog = use('App/Model/Blog')
const Comment = use('App/Model/Comment')
const Follow = use('App/Model/Follow')
const User = use('App/Model/User')
const Validator = use('Validator')

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

    * writeNewBlog(req, res){
        const categories = yield Category.all();

        yield res.sendView('writeNewBlog', {
            categories: categories.toJSON()
        })
    }

    * saveBlog(req, res){
        const blogData=req.except('_csrf');
        const rules={
            title: 'required',
            text: 'required',
            category_id: 'required'
        }
        const validation=yield Validator.validateAll(blogData, rules);
        if (validation.fails()) {
            yield req.withAll()
              .andWith({errors: validation.messages() })
              .flash()

            res.redirect('back')
            return
        }

        blogData.user_id = 1 //ideiglenesen, aztán req.currentUser.id
        yield Blog.create(blogData);

        res.redirect('/');
    }

}

module.exports = BlogController
