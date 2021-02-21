// pessoa aponta para um endereco de memoria
// o que nao pode mudar é a referencia da constante, que é o endereco pra onde ela aponta. O dado, objeto que esta no enredero pode ser alterado
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// se eu tentar criar um novo objeto e tentar atribuir a pessoa, estarei passando um novo endereco de memoria. E isso nao é possivel por ser uma CONSTANTE
//pessoa = { nome: 'Ana' }

// tranforma o objeto em si em constante
Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)
pessoa.end = 'Rua Xesque Dele'
delete pessoa.nome

console.log(pessoa)