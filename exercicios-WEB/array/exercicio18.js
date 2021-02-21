function despesasTotais(objeto) {
    return objeto.map(e => e.preco).reduce((acumulador, atual) => acumulador + atual)
}

console.log(despesasTotais([
    { nome: "Jornal online", categoria: "Informacao", preco: 89.99 },
    { nome: "Cinema", categoria: "Entreterimento", preco: 150 }
]))

console.log(
    despesasTotais([
        {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
        {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ])
)