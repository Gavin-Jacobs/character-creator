exports.up = function(knex) {
    return knex.schema.createTable('dragonborn', function (table){
      table.increments('id').primary()
      table.string('colour')
      table.string('damage_type')
      table.string('breath_weapon')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('dragonborn')
  };
  