function Mostrar() {

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

	//while(numero < 0 || numero > 10 || isNaN(numero))
	while (!(numero >= 0 && numero <= 10))
{
		numero = parseInt(prompt("su numero es incorrecto, ingreselo de nuevo"));
	}

	document.getElementById("Numero").value = numero;


}
