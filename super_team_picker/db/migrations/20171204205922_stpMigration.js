
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', table => {
    table.increments('id');
    table.text('name');
    table.text('members')
    table.timestamps(false,true);
    table.string('logo_url');
  });
};

exports.down = function(knex, Promise){
  return knex.schema.dropTable('cohorts');
};
