function Mostrar()
{
   
     
    var edad;
    edad = parseInt(document.getElementById("edad").value);
    
    if(edad>= 18)
    {
    alert("Usted es mayor de edad");
    }
    else{
        alert("usted es menor de edad");
    }

}