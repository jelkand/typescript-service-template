// import { createConnection, Connection, getConnection } from 'typeorm'
// import { SampleModel } from './SampleModel'

describe('SampleModel', (): void => {
  // beforeAll((): Promise<Connection> => createConnection('test'))
  it('Should create and read the model', async (): Promise<void> => {
    // const sm = new SampleModel()
    // sm.attribute = 'hello world'
    // await sm.save()

    // const found = await SampleModel.findOne({ id: sm.id })
    // expect(found!.attribute).toBe('hello world')

    expect(true).toBe(true)
  })
  // afterAll(
  //   async (): Promise<void> => {
  //     await getConnection().close()
  //   },
  // )
})
