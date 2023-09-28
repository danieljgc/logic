//Hacer una función que filtre todos los números que sean múltiplos del 3 de un arreglo que contenga los números del 1 al 100.

function multiplos(){
    var numeros = []
    for (var i = 0; i <= 100; i++) {
        
        if (i % 3 === 0){
            numeros.push(i)
        }
    }
    return numeros
}

console.log(multiplos())