const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    const pais = funcionario => funcionario.pais === 'China'
    const genero = funcionario => funcionario.genero === 'F'
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }

    const resultado = funcionarios.filter(pais).filter(genero).reduce(menorSalario)

    console.log(resultado)
})