
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cats', function(table){
    table.increments('id')
    table.string('name')
    table.text('story')
    table.integer('lives')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cats')
};
