
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cats').insert({id: 1, name: 'Katy Purry', story: 'Loves fireworks, sometimes feels like a plastic bag', lives: 100}),
        knex('cats').insert({id: 2, name: 'The Great Catsby', story: 'Catamine is my shit', lives: 100}),
        knex('cats').insert({id: 3, name: 'Elvis Catsley', story: 'IM DEAD', lives: 100})
      ]);
    });
};
