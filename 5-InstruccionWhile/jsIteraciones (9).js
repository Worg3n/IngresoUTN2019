function Mostrar() {
	var numero;
	var maximo;
	var minimo;
	var contador = 0;
	var respuesta
	var contador;
	do {
		numero = parseInt(prompt("introduzca un numero"));
		if (contador == 0) {
			maximo = numero;
			minimo = numero;
		}
		if (numero > maximo) {
			maximo = numero;
		} else if (numero < minimo) {
			minimo = numero
		}

		contador = contador + 1;
		respuesta = prompt("Quiere repetir el proceso?");
	}
	while (respuesta == "si");

parseInt(document.getElementById("maximo").value = maximo);
parseInt(document.getElementById("minimo").value = minimo);

}//FIN DE LA FUNCIÓN