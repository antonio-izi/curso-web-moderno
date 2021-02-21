function somarNumeros(array) {
    return array.reduce((acumulador, atual) => acumulador + atual)
}

console.log(somarNumeros([1, 2, 3, 4, 5, 6]))
console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))