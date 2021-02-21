const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.99, fragil: true },
    { nome: 'Copo de PLastico', preco: 18.99, fragil: false },
]

console.log((produtos.filter(p => {
    return p.fragil === false
})))

function filtrarFragilCaro(items) {
    return items.filter(item => {
        return (item.fragil && item.preco > 500)
    })
}

console.log(filtrarFragilCaro(produtos))

//metodos do curso
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))