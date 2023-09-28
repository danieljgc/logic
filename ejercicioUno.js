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