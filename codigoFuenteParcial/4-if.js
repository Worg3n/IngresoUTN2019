//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var numero1 = parseInt(prompt("Introduzca un numero"));
    var numero2 = parseInt(prompt("Introduzca un numero"));

    if (numero1 == numero2) {
        numero1 = numero1 * numero2;
        alert(numero1);
    }
    else if (numero1 > numero2) {
        numero1 = numero1 - numero2;
        alert(numero1);
    }
    else {
        numero1 = numero1 + numero2
        alert(numero1);
    }



}

