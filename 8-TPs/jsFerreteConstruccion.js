/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var perimetro;
var alambre;
largo = parseInt(document.getElementById("Largo").value);
ancho = parseInt(document.getElementById("Ancho").value);
perimetro = (largo + ancho) * 2;
alambre = perimetro * 3;
alert("Tiene que comprar " + alambre + " CM de alambre");

}

function Circulo () 
{
    var radio;
    var alambre;
    var cacularRadio;
    radio = parseInt(document.getElementById("Radio").value);
calcularRadio = Math.PI * (radio * radio);
alambre = calcularRadio * 3;
alert("la cantidad de alambre que tiene que comprar es " + alambre + " cm");
}
function Materiales () 
{
var largo;
var ancho;
var area;
var cemento;
var cal;

largo = parseInt(document.getElementById("Largo").value);
ancho = parseInt(document.getElementById("Ancho").value);
area = largo * ancho;
cal = area * 3;
cemento = area * 2;
alert("si su area es " + area + " entonces la cantidad de cementro que tiene que comprar es " + cemento + " y la cantidad de cal es " + cal);
}