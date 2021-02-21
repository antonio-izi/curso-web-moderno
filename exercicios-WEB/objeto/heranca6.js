function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

//simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    //f.apply vai executar a funcao f passando como objheto de contexto que sera o this, de execucao dessa funcao o objeto criado na linha 12
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)