carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//fazer um map e retornar um arrau apenas copm os precos

const carrinhoPrecos = carrinho.map( item => {
    return JSON.parse(item).preco
})

console.log(carrinhoPrecos)