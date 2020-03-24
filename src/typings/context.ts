import { Connection } from 'typeorm'
import { SampleModel } from '../db/entity/SampleModel'

export interface Context {
  dbConnection: Connection
  SampleModel: typeof SampleModel
}
