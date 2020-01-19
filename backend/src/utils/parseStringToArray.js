module.exports = function paseStringToArray(arrayAsString) {
    return arrayAsString.split(',').map(word => word.trim())
}