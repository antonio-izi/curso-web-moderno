function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Occorreu um erro')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.9)
    .then(v => console.log(v))
    .catch(e => console.log(e))