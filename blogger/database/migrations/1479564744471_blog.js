'use strict'

const Schema = use('Schema')

class BlogTableSchema extends Schema {

  up () {
    this.create('blog', (table) => {
      table.increments()
      table.text('text').notNullable()
      table.integer('likes')
      table.integer('dislikes')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.timestamps()
    })
  }

  down () {
    this.drop('blog')
  }

}

module.exports = BlogTableSchema
