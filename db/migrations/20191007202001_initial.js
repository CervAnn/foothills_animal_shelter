exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('pets', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('type');

      table.timestamps(true, true);
    }),
    knex.schema.createTable('toys', function(table) {
      table.increments('id').primary();
      table.string('brand');
      table.string('type');
      table.integer('pet_id').unsigned();
      table.foreign('pet_id').references('pets.id');

      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('pets'),
    knex.schema.dropTable('toys')
  ])
};

