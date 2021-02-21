function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            // console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

// esperarPor()
//     .then(esperarPor)
//     .then(esperarPor)

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar() {
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async/Await 1 ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await 2 ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await 3 ${valor + 2}...`)

    return valor + 3
}

executar().then(console.log)