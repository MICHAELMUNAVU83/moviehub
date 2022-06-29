import { commentCounter } from '../src/modules/__mocks__/commentCounter.js';

describe('Comment counter', () => {
  test('each comment', async () => {
    // arrange

    const data1 = [
      { id: 1, comment: 'hello', username: 'john' },
      { id: 2, comment: 'hello', username: 'john' },
      { id: 3, comment: 'hello', username: 'john' },
      { id: 4, comment: 'hello', username: 'john' },
    ];

    // act
    const data2 = await commentCounter(data1);
    // assert
    expect(data2).toBe(4);
  });
});