function Mostrar() {
	var positivo = 0;
	var negativo = 1;
	var numero;
	var respuesta;

	do {
		numero = parseInt(prompt("Que numero desea introducr?"));
		if (numero >= 0) {
			positivo = positivo + numero;
		}
		else {
			negativo = negativo * numero;
		}
		respuesta = prompt("Quiere repetir el proceso?");
	}
	while(repuesta == "y");


	document.getElementById("suma").value = positivo;
	document.getElementById("producto").value = negativo;

}//FIN DE LA FUNCIÓN