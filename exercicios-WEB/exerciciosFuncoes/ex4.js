function divisao(dividendo = 0, divisor = 1) {
    return result = {
        resultado: dividendo / divisor,
        resto: (((dividendo) * 100) % divisor) / 100
    }
}

console.log(divisao(10, 3))