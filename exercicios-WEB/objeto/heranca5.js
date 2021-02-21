console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//nao tem o metodo reverse na API mas como adicionamos no prototype de string
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

//e o que esta entre as aspas é um objeto criado dentro de string
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())

String.prototype.toString = function() {
    return 'Lascou Tudo'
}

console.log('Escola Cod3r'.reverse())