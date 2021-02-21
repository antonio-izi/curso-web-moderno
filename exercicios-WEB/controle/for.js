let contador = 1

while(contador <= 10) {
    console.log(`contador While -> ${contador}`)
    contador++
}

for(let i = 1; i <= 10; i++) {
    console.log(`contador For -> ${i}`)
}

const notas = [1, 2, 3, 4, 5, 6]

for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}