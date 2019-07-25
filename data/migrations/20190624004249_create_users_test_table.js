
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('users', table => {
            table.increments()
    
            table
                .string('email', 128)
                .notNullable()
                .unique()
                
            table
                .string('password', 128)
                .notNullable()
        })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('users')
  }
  