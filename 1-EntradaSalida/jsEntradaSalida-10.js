/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
    var importe;
    var descuento;
    var preciofinal;
    
importe = parseFloat(document.getElementById("importe").value);

descuento = importe * 25 / 100;
preciofinal = importe - descuento;

document.getElementById("resultado").value = preciofinal;
alert("su descuento es" + descuento);
//tambien puedo escribir document.getElementById = preciofinal(tofixed 2) para agregarle el numero de 0.000 que querramos tener
}
