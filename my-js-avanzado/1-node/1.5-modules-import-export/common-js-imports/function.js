function sum(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
// exports.sum = sum;
// this.exports.sum = sum;
// exports.substract = substract;
// exports.multiply = multiply;
// exports.divide = divide;
 module.exports = {
    sum, //esto es lo mismo que sum:sum
    substract,
    multiply,
    divideNumbers: divide,
};


//ctrl+} comenta todo un grupito de codigo