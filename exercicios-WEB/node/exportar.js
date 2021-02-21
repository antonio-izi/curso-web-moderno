//module.exports é o que retorna o valor quando importado em algum lugar, os outros dois sao apenas duas referencias para um mesmo objeto que module.exports aponta

console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null

console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true }