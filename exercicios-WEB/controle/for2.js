const notas = [6.5, 7.7, 3.2]

for(let i in notas) {
    console.log(`nota = ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Caroline',
    idade: 23,
    peso: 58
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}