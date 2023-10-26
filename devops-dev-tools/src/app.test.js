const {sum, filterNamesWithoutX} = require('./app');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

let string = "";

test('array containing no name with a x', () => {
  const array = ['Momo', 'Hadjil', 'Leo'];
  expect(filterNamesWithoutX(array)).toStrictEqual(['Momo', 'Hadjil', 'Leo']);
});

test('array containing two names with a x', () => {
  const array = ['DMX', 'Xzibit', 'JeanKevin'];
  expect(filterNamesWithoutX(array)).toStrictEqual(['JeanKevin']);
});

test('array containing one name with a x', () => {
  const array = ['JC', 'Leo', 'xena'];
  expect(filterNamesWithoutX(array)).toStrictEqual(['JC', 'Leo']);
});