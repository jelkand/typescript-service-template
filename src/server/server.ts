import 'reflect-metadata'
import { createConnection } from 'typeorm'
import bunyan from 'bunyan'
import { ApolloServer } from 'apollo-server'
import typeDefs from '../graphql/typeDefs'
import resolvers from '../graphql/resolvers'

import { SampleModel } from '../db/entity/SampleModel'
import { LoggingPlugin } from './plugins/loggingPlugin'
;(async (): Promise<void> => {
  const logger = bunyan.createLogger({
    name: 'typescript-service-template',
  })

  const dbConnection = await createConnection('default')
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
