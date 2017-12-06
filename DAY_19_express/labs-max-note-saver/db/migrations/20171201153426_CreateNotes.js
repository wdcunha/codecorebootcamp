exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', table => {
    table.increments('id');
    table.string('title');
    table.text('body');
    table.timestamps(false, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes');
};
