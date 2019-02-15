function Mostrar()
{
 var edad;
edad = parseFloat(document.getElementById("edad").value);

if(!(edad >= 13 && edad <=17) )
{
    alert("no es un adolescente");
}


}