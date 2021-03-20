import {
  makeSchema,
  nonNull,
  objectType,
  stringArg,
  asNexusMethod,
  idArg,
} from 'nexus'
import { GraphQLDateTime } from 'graphql-iso-date'
import { Context } from '../server/context'

export const DateTime = asNexusMethod(GraphQLDateTime, 'date')

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.nonNull.list.field('allSamples', {
      type: 'Sample',
      resolve: (_, __, { prisma }: Context) => prisma.sampleModel.findMany(),
    })
    //
    t.nullable.field('sample', {
      type: 'Sample',
      args: {
        id: nonNull(idArg()),
      },
      resolve: (_, { id }: { id: string }, { prisma }: Context) =>
        prisma.sampleModel.findUnique({ where: { id } }),
    })
  },
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.nonNull.field('createSample', {
      type: 'Sample',
      args: {
        attribute: stringArg(),
      },
      resolve: (
        _,
        { attribute },
        { prisma },
      ) =>
        prisma.sampleModel.create({
          data: { attribute },
        }),
    })
    t.field('updateSample', {
      type: 'Sample',
      args: {
        id: nonNull(idArg()),
        attribute: stringArg(),
      },
      resolve: (
        _,
        { id, attribute },
        { prisma },
      ) => prisma.sampleModel.update({ where: { id }, data: { attribute } }),
    })
    t.field('deleteSample', {
      type: 'Sample',
      args: {
        id: nonNull(idArg()),
      },
      resolve: (_, { id }: { id: string }, { prisma }: Context) =>
        prisma.sampleModel.delete({ where: { id } }),
    })
  },
})

const Sample = objectType({
  name: 'Sample',
  definition(t) {
    t.nonNull.id('id')
    t.string('attribute')
    t.field('createdAt', {
      type: 'DateTime',
    })
    t.field('updatedAt', {
      type: 'DateTime',
    })
  },
})

export const schema = makeSchema({
  types: [Query, Mutation, Sample, DateTime],
  outputs: {
    schema: `${__dirname}/../schema.graphql`,
    typegen: `${__dirname}/../nexus-typegen.ts`,
  },
  contextType: {
    module: require.resolve('../server/context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})
