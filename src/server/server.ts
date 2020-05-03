import 'reflect-metadata'
import { createConnection, ConnectionOptions } from 'typeorm'
import bunyan from 'bunyan'
import { ApolloServer } from 'apollo-server'
import typeDefs from '../graphql/typeDefs'
import resolvers from '../graphql/resolvers'

import { SampleModel } from '../db/entity/SampleModel'
import { LoggingPlugin } from './plugins/loggingPlugin'

const connection: ConnectionOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT || '5432', 10),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  ssl: process.env.NODE_ENV === 'production',
  synchronize: false,
  logging: process.env.NODE_ENV !== 'production',
  entities: ['dist/db/entity/**/*.js'],
  migrations: ['dist/db/migration/**/*.js'],
  subscribers: ['dist/db/subscriber/**/*.js'],
}
;(async (): Promise<void> => {
  const logger = bunyan.createLogger({
    name: 'typescript-service-template',
  })

  const dbConnection = await createConnection(connection)
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    logger,
    context: {
      dbConnection,
      SampleModel,
    },
    plugins: [LoggingPlugin],
  })

  const port = process.env.port || 3000

  await server.listen(port)
  logger.info({
    message: `typescript-service-template listening on port ${port}`,
  })
})()
