// console.log("Ctrl + Alt + N")

// {
//     const peso1 = Number('1.0')
//     const peso2 = 2.0

//     console.log(peso1)
//     console.log(Number.isInteger(peso1))

//     const avaliacao1 = 9.871
//     const avaliacao2 = 6.871

//     const total = avaliacao1 * peso1 + avaliacao2 * peso2
//     const media = total / (peso1 + peso2)

//     console.log(media.toFixed(2))
//     console.log(media.toString(2)) // em binário
//     console.log(typeof media)
// }

// {
//     console.log(7 / 0)
//     console.log("10" / 2)
// }

// {
//     const raio = 5.6
//     const area = Math.PI * Math.pow(raio, 2)

//     console.log(area.toFixed(2))
// }

// {
//     const escola = "Cod3r"

//     console.log(escola.charAt(4))
//     console.log(escola.charCodeAt(3))
//     console.log(escola.indexOf('3'))
//     console.log(escola.substring(1))
//     console.log(escola.substring(0,3))
//     console.log('escola '.concat(escola).concat("!"))
//     console.log(escola.replace(3, 'e'))
//     console.log(escola.replace(/\d/, 'e'))
//     console.log(escola.replace(/\w/g, 'e'))

//     console.log('Ana,Maria,Pedro'.split(','))
// }

// {
//     const name = 'Junior'
//     const concatenacao = 'Olá' + name + '!'
//     const template = `Olá ${name}!`

//     const up = texto => texto.toUpperCase()
//     console.log(`Ei... ${up('cuidado')}!`)
// }

// {
//     let tamanho = 5
//     var matriz = Array(tamanho).fill(0)
//     for(let n in matriz) {
//         matriz[n] = Array(tamanho).fill(0)
//     }

//     for(let cont = 0; cont < tamanho; cont ++) {
//         for (let cont2 = 0; cont2 < tamanho; cont2++) {
//             if(cont >= cont2)
//                 matriz[cont][cont2] = 1
//         }
//     }

//     console.log(matriz)
// }

// {
//     let quantPosition = 5
//     var matriz2 = Array(quantPosition).fill(0)
//     for(let n in matriz2) {
//         matriz2[n] = Array(quantPosition).fill(0)
//     }

//     for(let cont = 0; cont < quantPosition; cont++) {
//         for(let cont2 = 0; cont2 < quantPosition; cont2++) {
//             if(cont <= cont2)
//                 matriz2[cont][cont2] = 1
//         }
//     }

//     console.log(matriz2)
// }

// let n = 0
// let temp
// for(let q = 0; q < 10; q++) {
//     temp = n
//     n = temp + 1
// }
// console.log(n)

// function somar(a, b) {
//     console.log(a + b)
// }

// somar(250, 350)

// soma = (a, b) => {
//     return a+b
// }

// const resultSoma = soma(2, 6)
// console.log(resultSoma)
 

// {
//     let teste = { a : 'a' }
//     let teste2 = teste
//     teste.a = 'b'

//     console.log(teste, teste2)
//  }


// let numero = 1
// {
//     let numero = 2
//     console.log(numero)
// }
// console.log(numero)

// const pessoa = {
//     nome: 'Antonio',
//     idade: 23,
//     endereco: {
//         rua: "Miguel Angelo Reina",
//         numero: 13
//     }
// }

// const { nome, idade } = pessoa
// const { endereco: { rua, numero } } = pessoa

// console.log(nome, idade)
// console.log(rua, numero)

// function rand({ min = 0, max = 1000 }) {
//     const valor = Math.random() * (max - min + 1) + min
//     return Math.floor(valor)
// }


//constantes e variaveis criadas com let e const nao vao para o escopo global (this e window)