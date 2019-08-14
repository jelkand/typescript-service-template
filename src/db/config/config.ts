export default {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    database: process.env.POSTGRES_DB,
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    database: process.env.POSTGRES_DB,
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    database: process.env.POSTGRES_DB,
    host: 'who knows lol',
    dialect: 'postgres',
    operatorsAliases: false,
  },
}
