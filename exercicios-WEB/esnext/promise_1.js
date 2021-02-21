function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMin = letra => letra.toLowerCase()

let p = new Promise(function(resolve) {
    resolve(['Antonio', 'Izilvane', 'Barbosa', 'Junior'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMin)
    .then(console.log)