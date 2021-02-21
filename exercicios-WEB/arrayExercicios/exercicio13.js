function filtrarNumeros(array) {
    const result = array.filter(e => typeof e === "number")
    return result
}

console.log(filtrarNumeros([ "3", true, 1, false, "dale", 2, 3 ]))