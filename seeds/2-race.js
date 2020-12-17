
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('race').del()
    .then(function () {
      // Inserts seed entries
      return knex('race').insert([
        {id: 1, name: 'human', str:1, con:1, dex:1, int:1, wis:1, cha:1, feature1:'you speak common and one extra language', feature2:'pick one extra skill', feature3:'You can replace all the proficiencies granted by the Skills trait to another proficiency of your choice', feature4:'pick one feat', notes:''},
        {id: 2, name: 'dragonborn',  str:2, con:0, dex:0, int:0, wis:0, cha:1, feature1:'You have draconic ancestry', feature2:'Breath Weapon based on your draconic ancestry and level', feature3:'Damage Resistance based on your draconic anestry', feature4:'Languages. You can speak, read, and write Common and Draconic', notes:''},
        {id: 3, name: 'elf',  str:1, con:1, dex:1, int:1, wis:1, cha:1, feature1:'placeholder', feature2:'placeholder', feature3:'placeholder', feature4:'placeholder', notes:''}
      ])
    })
}
