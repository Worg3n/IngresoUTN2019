function Mostrar() {

	var contador = 0;
	var numero;
	var acumuladorNeg = 0;
	var acumuladorPos = 0;
	var contadorNeg = 0;
	var contadorPos = 0;
	var cantCeros = 0;
	var cantPares = 0;
	var PromPos;
	var PromNeg;
	var diferencia;
	var respuesta

	do {
		numero = parseInt(prompt("Introduzca un numero"));
		if (numero > 0) {
			acumuladorPos = acumuladorPos + numero;
			contadorPos = contadorPos + 1;
		} else if (numero < 0) {

			acumuladorNeg = acumuladorNeg + numero;
			contadorNeg = contadorNeg + 1;
		} else {
			cantCeros + 1;
		}
		if (numero %2 == 0) {
			cantPares = cantPares + 1;
		}
		respuesta = prompt("Quiere repetir el proceso").toLowerCase();
	}
	while (respuesta == "y");

	promedioNeg = acumuladorNeg / contadorNeg;
	promedioPos = acumuladorPos / contadorPos;
	diferencia = contadorPos - contadorNeg;
	document.write("Suma de los negativos " + acumuladorPos + "<br>");
	document.write("Suma de los negativos " + acumuladorNeg + "<br>");
	document.write("Cantidad de positivos " + contadorPos + "<br>");
	document.write("Cantidad de negativos " + contadorNeg + "<br>");
	document.write("Cantidad de ceros " + cantCeros + "<br>");
	document.write("Cantidad de Pares " + cantPares + "<br>");
	document.write("Promedios de negativos " + promedioNeg + "<br>");
	document.write("Promedio de positivos " + promedioPos + "<br>");
	document.write("Diferencia entre positivos y negativos " + diferencia + "<br>");


}//FIN DE LA FUNCIÓN