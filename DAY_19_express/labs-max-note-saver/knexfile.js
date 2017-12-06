// Update with your config settings.

const sharedConfig = {
  client: 'postgresql',
  migrations: {
    tableName: 'knex_migrations',
    directory: './db/migrations'
  }
}

module.exports = {

  development: {
    ...sharedConfig,
    connection: {
      database: "note_saver_dev"
    }

  },

  staging: {
    ...sharedConfig,
    connection: {
      database: "note_saver_staging"
    }

  },

  production: {
    ...sharedConfig,
    connection: {
      database: "note_saver_prod"
    }
  }
};
