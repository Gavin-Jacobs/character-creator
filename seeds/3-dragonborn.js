
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dragonborn').del()
    .then(function () {
      // Inserts seed entries
      return knex('dragonborn').insert([
        {id: 1, colour: 'black', damage_type:'acid', breath_weapon:'5 by 30 ft. line (Dex. save)'},
        {id: 2, colour: 'blue', damage_type:'lighting', breath_weapon:'5 by 30 ft. line (Dex. save)'},
        {id: 3, colour: 'brass', damage_type:'fire', breath_weapon:'5 by 30 ft. line (Dex. save)'},
        {id: 4, colour: 'bronze', damage_type:'lighting', breath_weapon:'5 by 30 ft. line (Dex. save)'},
        {id: 5, colour: 'copper', damage_type:'acid', breath_weapon:'5 by 30 ft. line (Dex. save)'},
        {id: 6, colour: 'gold', damage_type:'fire', breath_weapon:'15 ft. cone (Con. save)'},
        {id: 7, colour: 'green', damage_type:'poison', breath_weapon:'15 ft. cone (Con. save)'},
        {id: 8, colour: 'red', damage_type:'fire', breath_weapon:'15 ft. cone (Con. save)'},
        {id: 9, colour: 'silver', damage_type:'cold', breath_weapon:'15 ft. cone (Con. save)'},
        {id: 10, colour: 'white', damage_type:'cold', breath_weapon:'15 ft. cone (Con. save)'}
      ]);
    });
};
