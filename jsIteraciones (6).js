function Mostrar() {

	var contador = 0;
	var acumulador = 0;
	var suma;
	var promedio;

	while (contador < 5) {
		suma = parseFloat(prompt("Ingrese un numero"));
		acumulador = acumulador + suma
		contador = contador + 1
	}
	promedio = acumulador / 5
	parseFloat(document.getElementById("suma").value = acumulador);

	parseFloat(document.getElementById("promedio").value = promedio);
}