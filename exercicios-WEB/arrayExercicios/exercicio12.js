function removerPropriedade(objeto, propriedade) {
    let obj = { ...objeto }
    delete obj[propriedade]

    return obj
}

console.log(
    removerPropriedade({
        nome: 'Antonio',
        idade: 24
    }, 'idade')
)

console.log(
    removerPropriedade({
        nome: 'Antonio',
        idade: 24,
        altura: 'Indefinido'
    }, 'altura')
)