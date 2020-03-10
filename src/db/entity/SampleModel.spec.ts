import { createConnection, Connection } from 'typeorm'
import { SampleModel } from './SampleModel'

describe('SampleModel', (): void => {
  beforeAll((): Promise<Connection> => createConnection('test'))
  it('Should create and read the model', async function(): Promise<void> {
    const sm = new SampleModel()
    sm.attribute = 'hello world'
    await sm.save()

    const found = await SampleModel.findOne({ id: sm.id })
    expect(found!.attribute).toBe('hello world')
  })
})
