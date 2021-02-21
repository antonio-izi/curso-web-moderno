// __dirname é uma constante que esta presente em todos os arquivos do node, em todos os modulos que representa o diretorio atual

const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sicrono... ou seja, se for arquivo grande ele vai esperar a leitura completa do arquivo para depois seguir para o proximo passo
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('conteudo da pasta...')
    console.log(arquivos)
})