function mostrar() {
    var precio = parseInt(prompt("Introduzca el valor del precio"));
    var descuento = parseInt(prompt("Introduzca el descuento del precio"));
    var preciofinal;
    preciofinal = precio * descuento / 100;

    document.getElementById("elPrecioFinal").value = preciofinal;
}
