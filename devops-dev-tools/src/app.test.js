const {sum, filterNamesWithoutX} = require('./app');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('array containing no name with a x', () => {
  const array = ['Momo', 'Hadjil', 'Leo'];
  expect(filterNamesWithoutX(array)).toStrictEqual(['Momo', 'Hadjil', 'Leo']);
});