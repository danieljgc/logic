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