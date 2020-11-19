
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('character').del()
    .then(function () {
      // Inserts seed entries
      return knex('character').insert([
      ]);
    });
};
