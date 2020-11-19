
exports.seed = function(knex) {
  // Deletes ALL existing entries
  const empty = table =>
    () => knex(table).del()

  return empty('character')
};
