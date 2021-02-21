const { set } = require("lodash")

// nao aceita repeticao e nao é indexado
const times = new Set()
times.add('Vasco')
times.add('Flamengo').add('Sao Paulo')
times.add('Palmeiras')
times.add('Palmeiras')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Vasco')
console.log(times.has('Vasco'))

const nomes = ['Ana', 'Ana', 'Junior']
const nomeSet = new Set(nomes)
console.log(nomeSet)