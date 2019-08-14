import * as Sequelize from 'sequelize'

export interface IDatabase {
  sequelize: Sequelize.Sequelize
  Sequelize: Sequelize.SequelizeStatic
}
