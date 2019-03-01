//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var Mesdelaño;

    Mesdelaño = prompt("Introduzca un mes del año");

    switch (Mesdelaño) {
        case "Enero":
        case "Febrero":
            alert("veranito");
            break;
        default:
            alert("extraño febrero y enero");

    }


}

