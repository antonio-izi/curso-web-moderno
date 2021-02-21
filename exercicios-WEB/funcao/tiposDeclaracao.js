// function declaration
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}

//named function expression
const mult = function mult(x = 1, y = 1) {
    return x * y
}

console.log(mult(5, 6))