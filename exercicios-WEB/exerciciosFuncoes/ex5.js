const arredondar = (valor) => `R$${valor.toFixed(2)}`.replace('.', ',')

console.log(arredondar(0.30000000000000004))