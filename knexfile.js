module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/foothills_animal_shelter',
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
};
