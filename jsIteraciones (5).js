function Mostrar() {

    var sexo = prompt("ingrese f ó m .");

    while (!(sexo == "f" || sexo == "m")) {
        sexo = prompt("Ingrese una opcion valida (f) o (m)");
    }
    if (sexo == "f") {
        document.getElementById("Sexo").value = "Femenino";
    }
    else 
    {
        document.getElementById('Sexo').value = "Masculino";
    }

}