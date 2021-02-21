function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Antonio'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia, meu nome é ${this.nome}!`)
}
obj1.falar()

obj2.nome = 'Izilvane'
obj2.falar()

//mudando a referencia do prototipo de um objeto criado por conotacao literal. a mudanca é da refrerencia Object.prototype para o MeuObjeto.prototype
const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()

//Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ == Object.prototype)
//o atributo existe mas nao aponta para nada, por isso nao pode ser undefined
console.log(Object.prototype.__proto__ === null)