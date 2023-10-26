console.log('Hello world');

function sum(a, b) {
    return a + b;
}

function filterNamesWithoutX(array) {
    array = array.filter( x => !x.toLowerCase().includes('x'))
    return array;
}

module.exports = {
    sum,
    filterNamesWithoutX
};