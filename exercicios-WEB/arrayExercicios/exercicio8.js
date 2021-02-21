const multiplicar = function (number1, number2) {
    if(Math.sign(number1) === -1 || Math.sign(number2) === -1)
        return 'Ambos os numeros devem ser positivos'

    let resultado = 0

    for(let i = 0; i < number1; i++) {
        resultado += number2
    }

    return resultado
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))
console.log(multiplicar(0, -7))