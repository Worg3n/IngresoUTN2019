function Mostrar()
{
var edad
var EstadoCivil

edad = parseFloat(document.getElementById("edad").value);
EstadoCivil = document.getElementById("estadoCivil").value;
if(edad < 18 && Estadocivil != "Soltero")
{

}
else if (edad >= 18 && EstadoCivil == "Soltero"){
    alert("Es soltero y no es menor");
}
	


}//FIN DE LA FUNCIÓN