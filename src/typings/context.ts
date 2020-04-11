import { Connection } from 'typeorm'
import Logger from 'bunyan'

import { SampleModel } from '../db/entity/SampleModel'

export interface Context {
  dbConnection: Connection
  SampleModel: typeof SampleModel
  logger: Logger
}
