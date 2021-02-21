//factory eh uma funcao que retorna um objeto (fabricar a instancia de um objeto)
//factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Caroline'
    }
}

console.log(criarPessoa())