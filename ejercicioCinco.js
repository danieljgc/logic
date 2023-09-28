//Hacer una función que haga de forma aleatoria un número entre 1 y 1000, y que a ese número le saqué su mitad, el doble y su raíz cuadrada.


function calculatorTwo(){
    var minimo = 1;
    var maximo = 100;
    var numeroAleatorio = Math.round(Math.random() * (maximo - minimo)) + minimo;
    console.log("El número aleatorio es: " + numeroAleatorio);

    mitad = numeroAleatorio / 2;
    console.log("La mitad de " + numeroAleatorio + " es: " + mitad);

    //Se va a utilizar la función Math.sqrt() para hallar la raíz cuadrada

    var raiz = Math.sqrt(numeroAleatorio);
    console.log("La raíz cuadrada de " + numeroAleatorio + " es: " + raiz);
}
    
calculatorTwo()

