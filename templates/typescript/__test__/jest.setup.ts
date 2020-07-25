import { start, close } from 'moonshard'

beforeAll(async () => {
  await start()
})

afterAll(async () => {
  await close()
})
