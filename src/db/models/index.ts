import { Sequelize, Config } from 'sequelize'
import { IDatabase } from 'typings/IDatabase'

export const createModels = (sequelizeConfig: Config): IDatabase => {
  const { database, username, password } = sequelizeConfig
  const sequelize = new Sequelize(database, username, password || undefined)

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
