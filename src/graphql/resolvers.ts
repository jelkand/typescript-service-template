import { Context } from '../server/context'
import { QueryResolvers, MutationResolvers } from '../typings/graphql'

const Query: QueryResolvers = {
  sample: async (_, { id }, { prisma }: Context) =>
    prisma.sampleModel.findUnique({ where: { id } }),
}

const Mutation: MutationResolvers = {
  createSample: async (obj, { attribute }, { prisma }) =>
    prisma.sampleModel.create({ data: { attribute } }),
  updateSample: async (obj, { id, attribute }, { prisma }) =>
    prisma.sampleModel.update({ where: { id }, data: { attribute } }),
  deleteSample: async (obj, { id }, { prisma }) =>
    prisma.sampleModel.delete({ where: { id } }),
}

export default {
  Query,
  Mutation,
}
