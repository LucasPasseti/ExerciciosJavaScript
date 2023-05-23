function funcao(operador, acumulador, ...numeros){

    for (let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador)
}

funcao('+', 0, 0, 20, 30, 40, 50);