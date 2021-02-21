// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }

//     falar() {
//         console.log(`Meu nome eh ${this.nome}`)
//     }
// }

// const p1 = new Pessoa('Antonio')
// p1.falar()

function Pessoa(nome) {
    this.falar = () => console.log(`Meu nome é ${nome}`)
}

const pessoa = new Pessoa('Antonio')
pessoa.falar()