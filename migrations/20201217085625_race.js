exports.up = function(knex) {
    return knex.schema.createTable('race', function (table){
      table.increments('id').primary()
      table.string('name')
      table.integer('str')
      table.integer('con')
      table.integer('dex')
      table.integer('int')
      table.integer('wis')
      table.integer('cha')
      table.string('feature1')
      table.string('feature2')
      table.string('feature3')
      table.string('feature4')
      table.string('notes')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('race')
  };
  