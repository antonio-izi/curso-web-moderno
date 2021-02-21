const fs = require('fs')
const caminho = __dirname + '/dados.txt'

const getArquivo = caminho => {

    return new Promise((resolve, reject) => {
        fs.readFile(caminho, (err, conteudo) => {
            resolve(conteudo.toString())
        })
    })
}

getArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo.replace(/\r/g, ' ')}`)
    .then(console.log)