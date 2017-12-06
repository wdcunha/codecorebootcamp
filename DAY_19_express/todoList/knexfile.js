// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations'
    },
    connection : {
      database: "todo_dev"
    }
  },
};
