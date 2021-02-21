// Funcao em JS é First-Class Object (Citizens)
// Hifher-order function

//criar de forma literal
function fun1() { }

// Armazenar em uma variavel
const fun2 = function () { }

// Armazenar em um array
const array = [function (a,b) { return a + b }, fun1, fun2]

console.log(array[0](2, 3))

// Armazenar em yn atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }

console.log(obj.falar())

// Passar funcao com param
function run (fun) {
    fun()
}

run(function () { console.log('Executando...') })

//Uma funcao pode retornar/conter uma funcao
function soma(a,b) {
    return function (c) {
        console.log(a+b+c)
    }
}

soma(2,3)(4)
somaMaisC = soma(2,3)
somaMaisC(4)