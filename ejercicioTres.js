//Realizar una tabla de multiplicación de un número (a) desde 0 hasta x, pero que no se muestre la multiplicación de a * 5.

function multiplicacion(a, x){
    for (let i = 0; i <= x ; i++) {
        if (i === 5){
        continue;
        }
    resultado = a * i;
    console.log(a + " x " + i + " = " + resultado)
    }
}

console.log(multiplicacion(2, 12))