function realizarOperaciones(num1, num2) {
    let resultados = {};
    resultados.suma = num1 + num2;
    resultados.resta = num1 - num2;
    resultados.multiplicacion = num1 * num2;
    resultados.division = num1 / num2;
    console.log(resultados);
  }
  realizarOperaciones(5, 3);
