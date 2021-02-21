function calcularMedia (array) {
    return array.reduce((acumulado, atual) => acumulado + atual) / array.length
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))