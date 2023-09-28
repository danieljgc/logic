//Realizar una función que nos permita realizar las 4 operaciones aritméticas, es decir, que nos permita sumar, restar, dividir y multiplicar. La función debe recibir 3 parámetros, dos de ellos deben ser los valores (a y b) y uno el nombre de la operación (en minúsculas). Si el parámetro de la operación no es válido que mande un error personalizado a la consola.

function calculator(number1, number2, operator){
    operator = operator.toLowerCase();

    if (operator == "sumar"){
        resultado = number1 + number2;
    } else if (operator == "restar"){
        resultado = number1 - number2;
    } else if (operator == "multiplicar"){
        resultado = number1 * number2;
    } else if (operator == "dividir"){
        resultado = number1 / number2;
    } else{
        return "Operador no válido."
    }
    return resultado
}

console.log(calculator(15, 5, "SumaRr"));