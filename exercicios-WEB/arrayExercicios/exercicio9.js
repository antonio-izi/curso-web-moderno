const repetir = function(e, num) {
    let resultado = []
    for(let i = 0; i < num; i++) {
        resultado.push(e)
    }

    return resultado
}

const repetir2 = function(e, num) {
    return Array(num).fill(e)
}

console.log(repetir("codigo", 2))
console.log(repetir(7, 3))

console.log(repetir2("codigo", 2))
console.log(repetir2(7, 3))