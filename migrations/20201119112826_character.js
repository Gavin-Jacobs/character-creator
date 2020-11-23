
exports.up = function(knex) {
  return knex.schema.createTable('character', function (table){
    table.increments('id').primary()
    table.string('name')
    table.integer('str')
    table.integer('con')
    table.integer('dex')
    table.integer('int')
    table.integer('wis')
    table.integer('cha')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('character')
};
