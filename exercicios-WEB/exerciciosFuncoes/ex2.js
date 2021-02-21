function tipoDoTriangulo(lado1 = 0, lado2 = 0, lado3 = 0) {

    if(lado1 <= 0 || lado2 <= 0 || lado3 <= 0)
        return 'Error: Invalid Paramter!'

    if(lado1 === lado2 && lado1 === lado3)
        return 'Equilatero'
    else if((lado1 === lado2 && lado1 != lado3) || (lado2 === lado3 && lado3 != lado1) || (lado1 === lado3 && lado1 != lado2))
        return 'Isosceles'
    else if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3)
        return 'Escaleno'
}

console.log(tipoDoTriangulo(5, 3))