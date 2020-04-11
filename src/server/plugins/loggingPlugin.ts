import {
  ApolloServerPlugin,
  GraphQLRequestContext,
  GraphQLRequestListener,
  ValueOrPromise,
} from 'apollo-server-plugin-base'
import { Maybe } from '../../typings/utility'

export const LoggingPlugin: ApolloServerPlugin = {
  requestDidStart<Context>({
    logger,
  }: GraphQLRequestContext<Context>): GraphQLRequestListener<Context> {
    logger.info({
      message: 'Request received',
    })
    const start = Date.now()
    let operation: Maybe<string>

    return {
      didResolveOperation({
        operationName,
      }: GraphQLRequestContext<Context>): ValueOrPromise<void> {
        operation = operationName
      },
      didEncounterErrors({
        errors,
      }: GraphQLRequestContext<Context>): ValueOrPromise<void> {
        logger.error({
          message: 'Encountered error processing GraphQL request',
          errors,
        })
      },
      willSendResponse(): ValueOrPromise<void> {
        const stop = Date.now()
        const elapsedMs = stop - start

        logger.info({
          message: 'Responded to request',
          operation,
          elapsedMs,
        })
      },
    }
  },
}
