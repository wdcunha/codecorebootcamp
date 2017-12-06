
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tasks', table => {
    table.increments('id');
    table.text('title');
    table.timestamps(false,true);
    table.string('picture_path');
  });
};

exports.down = function(knex, Promise){
  return knex.schema.dropTable('tasks');
};
