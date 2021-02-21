const inverso = e => {
    if(typeof e === typeof true) {
        return !e
    } else if(typeof e === typeof 1) {
        return (e * -1)
    } else {
        return 'booleano ou número esperados, mas o parâmetro é do tipo string'
    }
}

console.log(inverso(8))