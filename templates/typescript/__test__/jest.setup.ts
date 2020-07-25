import { start, close } from 'moonshard';

beforeAll(async () => {
  await start(9000, { logger: false });
});

afterAll(async () => {
  await close();
});
