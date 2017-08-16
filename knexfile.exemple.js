// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'user',
      password: 'pass',
      database: 'database'
    },
    migrations: {
      directory: './server/migrations/'
    },
    seeds: {
      directory: './server/seeds/'
    }
  }

};
