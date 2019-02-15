function Mostrar()
{
var nota
nota = Math.floor(Math.random() * 10 + 1);

if(nota > 8){
alert("Nota: " + nota + " Excelente");
}
else if (nota >= 4){
	alert("Nota: " + nota + " Aprobo");
}	
else 
{
	alert("Nota:" + nota + " Suerta para la proxima");
}

}