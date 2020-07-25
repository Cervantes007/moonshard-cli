import { inject } from 'moonshard';

describe('App Controller Test', () => {
  test('Hello World', async () => {
    const response = await inject({
      method: 'GET',
      url: `/`,
    });
    expect(response.statusCode).toBe(200);
    expect(response.payload).toBe(`hello world!`);
  });

  test('Hi', async () => {
    const response = await inject({
      method: 'GET',
      url: `/hi/John`,
    });
    expect(response.statusCode).toBe(200);
    expect(response.payload).toBe(`MoonShard said: Hi, John!`);
  });
});
