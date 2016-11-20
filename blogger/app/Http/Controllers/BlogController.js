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

    * show (req, res){
        const id = req.param('id')
        const blog = yield Blog.find(id)
        if (!blog) {
            res.notFound('Nem létezik ilyen blogbejegyzés')
            return
        }
        yield blog.related('category').load()
        yield res.sendView('showBlog', {
            blog: blog.toJSON()
        })
    }

    * edit (req, res){
        const id = req.param('id')
        const blog = yield Blog.find(id)
        /*if (req.currentUser.id !== blog.user_id) {
            res.unauthorized('Nincs jog')
            return
        }majd autentikáció után */

        const categories = yield Category.all();

        yield res.sendView('editBlog',{
            categories: categories.toJSON(),
            blog: blog.toJSON()
        })
    }
    
    * doEdit (req, res){
        const blogData = req.except('_csrf');
        const rules = {
            title: 'required',
            text: 'required',
            category_id: 'required'
        }
        const validation = yield Validator.validateAll(blogData, rules);
        if (validation.fails()){
            yield req.withAll
              .andWith({errors: validation.messages()})
              .flash()

            res.redirect('back')
            return  
        }

        const id = req.param('id')
        const blog = yield Blog.find(id)

        /*if (req.currentUser.id !== blog.user_id) {
            res.unauthorized()
            return
        } authentikáció utána*/

        blog.title = blogData.title
        blog.text = blogData.text
        blog.category_id = blogData.category_id

        yield blog.save()

        res.redirect('/')
    }

    * doDelete (req, res) {
        const id = req.param('id')
        const blog = yield Blog.find(id)
        if (!blog) {
            res.notFound('A blog nem létezik')
            return
        }
        yield blog.delete()
        res.redirect('/');
    }

}

module.exports = BlogController
