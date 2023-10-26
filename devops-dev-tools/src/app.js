function checkNames(array) {
    array = array.filter( x => !x.toLowerCase().includes('x'))
    return array;
}

module.exports = {
    checkNames
};