/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    
var sueldo;
var aumento;

sueldo = parseInt(document.getElementById("sueldo").value);

alert(sueldo * 10 / 100);
aumento = sueldo * 10

document.getElementById("resultado").value = aumento;


}