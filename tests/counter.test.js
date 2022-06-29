import counter from '../src/modules/__mocks__/counter.js';

describe('test for home counter', () => {
  test('home counter', async () => {
    // arrange
    const data = [{
      name: 'udemy',
      id: '1',

    },
    {
      name: 'lap',
      id: '2',
    },
    {
      name: 'bounce',
      id: '3',
    },

    ];
    // act
    const results = await counter(data);
    // assert
    expect(results).toBe(3);
  });
});