//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {

    var numero;
    var seguir;
    var acumulador = 0;
    var contador = 0;
    var promedio;
    var maximo;
    var minimo;
    var flag = 0;
    var contadorPares;

    do {


        while (numero <= 0 || isNaN(numero)) {
            numero = parseInt(prompt("ingrese numero"));
        }

        acumulador = acumulador + numero;
        contador++;
        if (numero % 2 == 0) {
            contadorPares++;
        }
        if (numero > maximo || flag == 0) {
            maximo = numero;
        }
        if (numero < minimo || flag == 0) {
            minimo = numero;
            flag = 1;
        }
        seguir = confirm("Quiere continuar ?");
    } while (seguir);

    document.write("Cantidad de pares:" + contadorPares + "<br>");
    document.write("Promedio: " + promedio + "<br>");
    document.write("Suma de todos los numeros:" + acumulador + "<br>");
    document.write("Maximo: " + maximo + " Minimo " + minimo);
}

