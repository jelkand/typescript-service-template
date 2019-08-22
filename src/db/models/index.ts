import { Sequelize } from 'sequelize-typescript'
import { IDatabase } from 'typings/IDatabase'

export const createModels = () => {
  const sequelize = new Sequelize({
    database: process.env.POSTGRES_DB,
    dialect: 'postgres',
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    modelPaths: [`${__dirname}/models`],
    host: process.env.POSTGRES_HOST,
  })

  const db: IDatabase = {
    sequelize,
    Sequelize,
  }

  // Object.keys(db).forEach(modelName => {
  //   if (db[modelName].associate) {
  //     db[modelName].associate(db)
  //   }
  // })

  return db
}
