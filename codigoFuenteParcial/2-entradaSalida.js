//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var producto
    var Iva;
    var importefinal;
    producto = parseFloat(prompt("Introduzca el importe del producto"));
    while(producto < 0 || isNaN(producto)){
        producto = parseFloat(prompt("Error. Introduzca el importe del producto")); 
    }
    Iva = producto * 21 / 100;
    importefinal = producto + Iva;

    parseFloat(document.getElementById("importe").value = importefinal);

}

