function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor((valor))
}

const a = 9
let b = getInteiroAleatorioEntre(0, 10)
let cont = 0

// while(a != b) {
//     cont++
//     console.log(`b: ${b}`)
//     b = getInteiroAleatorioEntre(0, 10)
// }

setInterval(() => {
    cont++
    console.log(`b: ${b}`)
    b = getInteiroAleatorioEntre(0, 10)
    
    if(b == 9) {
        clearInterval()
        console.log(`b == ${b}`)
        console.log('contador: ', cont)
    }
}, 1000)