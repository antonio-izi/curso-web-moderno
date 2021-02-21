// let e const
// let tem escopo de bloco
// var tem escopo de funcao ou global
{
    var a = 2
    let b = 3

    console.log(b)
}

console.log(a)
// console.log(b)

// Template String
const produto = 'papada'
console.log(`${produto} nao é nada!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)