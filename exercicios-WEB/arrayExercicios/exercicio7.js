const estaEntre= function(num = 0, minimo = 0, maximo = 0, inclusivo = false) {
    let min = minimo
    let max = maximo

    if(minimo > maximo) {
        max = minimo
        min = maximo
    }

    if(inclusivo) {
        if(num >= min && num <= max)
            return true
        else return false
    } else {
        if(num > min && num < max)
            return true
        else return false
    }
}

console.log(estaEntre(10, 100, 50))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 150, 3))
console.log(estaEntre(3, 150, 3, true))
console.log(estaEntre(3, 7, 1))
