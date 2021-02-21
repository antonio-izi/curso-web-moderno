const calcularSalario = (horasTrabalhadas, recebePorHora) => `Salário igual a R$ ${(horasTrabalhadas * recebePorHora).toFixed(2)}`

console.log(calcularSalario(150, 40.5))