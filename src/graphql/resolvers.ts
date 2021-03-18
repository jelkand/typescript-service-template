import { QueryResolvers, Maybe, MutationResolvers } from '../typings/graphql'
import { SampleModel as dbSampleModel } from '../db/entity/SampleModel'

const Query: QueryResolvers = {
  sample: async (
    obj,
    { id },
    { SampleModel },
  ): Promise<Maybe<dbSampleModel>> => {
    const result = await SampleModel.findOne({ id })
    return Promise.resolve(result || null)
  },
}

const Mutation: MutationResolvers = {
  createSample: async (
    obj,
    args,
    { SampleModel },
  ): Promise<Maybe<dbSampleModel>> => {
    const result = await SampleModel.create().save()
    return Promise.resolve(result || null)
  },
  updateSample: async (
    obj,
    { id, attribute },
    { SampleModel },
  ): Promise<Maybe<number>> => {
    const { affected } = await SampleModel.update(
      { id },
      { attribute: attribute || undefined },
    )
    return Promise.resolve(affected || null)
  },
  deleteSample: async (
    obj,
    { id },
    { SampleModel },
  ): Promise<Maybe<number>> => {
    const { affected } = await SampleModel.delete({ id })
    return Promise.resolve(affected || null)
  },
}

export default {
  Query,
  Mutation,
}
