const maiorOuIgual = (numero1, numero2) => {
    if(numero1 > numero2) {
        return 'primeiro numero é maior'
    } else if (numero1 < numero2) {
        return 'segundo numero é maior'
    } else {
        return 'Os numeros sao iguais'
    }
}

console.log(maiorOuIgual(2,2))