function mostrar() {
    var nombre1 = prompt("Introduzca su nombre y apellido");
    var nombre2 = prompt("Introduzca su nombre y apellido");
    var peso1 = parseInt(prompt("Introduzca su peso"));
    var peso2 = parseInt(prompt("Introduzca su peso"));
    var sumaDePeso;
    var promedioDePeso;

    sumaDePeso = peso1 + peso2;
    promedioDePeso = sumaDePeso / 2;
    alert("Ustedes se llaman " + nombre1 + " y " + nombre2 + " pesan " + peso1 + "KG y " + peso2 + "KG ambos pesos sumados son: " + sumaDePeso + "KG y el promedio de ambos pesos es " + promedioDePeso + "KG");
}
