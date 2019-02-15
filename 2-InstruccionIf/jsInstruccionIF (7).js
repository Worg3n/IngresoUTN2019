function Mostrar() {
   
    var edad
    
    var Estado_Civil
    
    Estado_Civil = document.getElementById("estadoCivil").value;
    
    edad = parseFloat(document.getElementById("edad").value);

 if(edad < 18 && Estado_Civil != "Soltero"){
     alert("Es muy pequeño para NO estar soltero");
 }




}