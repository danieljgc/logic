//Realizar una función que almacene en un arreglo todos los números pares desde a hasta b.

function pares(a, b){
    var numPares = [];
    for (var i = a; i <= b; i++) {
        if (i % 2 === 0) {
            numPares.push(i);
        }
    }
    return numPares
}

console.log(pares(1, 200))
