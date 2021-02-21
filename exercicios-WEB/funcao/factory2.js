function criarProduto(nome, preco) {
    return {
        nome,
        preco
    }
}

const produtos = []
produtos.push(criarProduto('PS5', 'R$ 4999,99'))
console.log(produtos[0])