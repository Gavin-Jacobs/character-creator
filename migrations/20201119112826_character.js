
exports.up = function(knex) {
  return knex.schema.createTable('character', function (table){
    table.increments('id').primary()
    table.string('name')
    table.increments('str')
    table.increments('con')
    table.increments('dex')
    table.increments('int')
    table.increments('wis')
    table.increments('cha')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('character')
};
