const receberPrimeiroEUltimoElemento = array => {
    const tamanho = array.length
    const resultado = []
    resultado.push(array[0])
    resultado.push(array[tamanho-1])

    return resultado
}

console.log(receberPrimeiroEUltimoElemento([1, 2, 3, 4, 5, 6]))