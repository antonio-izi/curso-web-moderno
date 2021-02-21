function receberSomenteOsParesDeIndicesPares(array) {
    return array.filter((e, i) => {
        if(e % 2 === 0 && i % 2 === 0)
            return e
    })
}

console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))
console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))