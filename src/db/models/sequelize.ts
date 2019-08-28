import { Sequelize } from 'sequelize-typescript'

export const sequelize = new Sequelize({
  database: process.env.POSTGRES_DB,
  dialect: 'postgres',
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  models: [`${__dirname}/models`],
  host: process.env.POSTGRES_HOST,
})
