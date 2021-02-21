function objetoParaArray2(obj) {
    const resultado = []

    for(let chave in obj)
        resultado.push([ chave, obj[chave] ])

    return resultado
}

function objetoParaArray3(obj) {
    const chaves = Object.keys(obj)
    const resultado = chaves.map( chave => [chave, objeto[chave]] )

    return resultado
}

function objetoParaArray(obj) {
    return Object.entries(obj)
}

console.log(
    objetoParaArray({
        nome: "Maria",
        profissao: "Desenvolvedora de software"
    })
)