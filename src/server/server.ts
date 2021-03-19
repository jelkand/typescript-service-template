import bunyan from 'bunyan'
import { ApolloServer } from 'apollo-server'
import typeDefs from '../graphql/typeDefs'
import resolvers from '../graphql/resolvers'

import { LoggingPlugin } from './plugins/loggingPlugin'
import { context } from './context'
;(async (): Promise<void> => {
  const logger = bunyan.createLogger({
    name: 'typescript-service-template',
  })

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    logger,
    context,
    plugins: [LoggingPlugin],
  })

  const port = process.env.port || 3000

  await server.listen(port)
  logger.info({
    message: `typescript-service-template listening on port ${port}`,
  })
})()
