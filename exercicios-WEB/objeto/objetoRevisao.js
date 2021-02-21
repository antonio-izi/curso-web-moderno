//colecao dinamica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'Caravan Diplomata',
    valor: 10000,
    proprietario: {
        nome: 'Antonio',
        idade: 24,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 13
        }
    },
    condutores: [{
        nome: 'Antonio',
        idade: 24
    }, {
        nome: 'Ana Caroline',
        idade: 23
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)