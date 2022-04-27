/*

SCRIPT PARA COMPROBAR EL FORMATO DE LO DATOS INTRODUCIDOS
EN EL FORMULARIO Y MOSTRAR MENSAJES DE ERROR. TAMBIÉN
PERMITE BORRAR TODOS LOS CAMPOS CUANDO SE PULSA EL BOTÓN "RESTAURAR"

*/

window.onload=function(){

    /* Comprueba los datos y los envía si son correctos */
    document.getElementById("Enviar").onclick=comprobar;

    /* Restaura el formulario poniendo todos los campos en blanco */
    document.getElementById("Restaurar").onclick=borrar;

}

/* Función para comprobar los datos y enviarlos */
function comprobar () {
    /* Comprueba el campo "Nombre" */
    var nombre = document.getElementById("nombre").value;

    /* Comprueba el campo "Apellidos" */
    var nombre = document.getElementById("apellidos").value;

    /* Comprueba el campo "Teléfono" */
    var nombre = document.getElementById("telefono").value;

    /* Comprueba el campo "Email" */
    var nombre = document.getElementById("email").value;

    /* Comprueba si algún elemanto del radiobutton ha sido seleccionado */
    var seleccionado = false;
    var elementos = document.getElementByName("tipoProblema");
    for (var i=0; i<elementos.length; i++) {
        if (elementos[i].checked) {
            seleccionado = true;
            break;
        }
    }

    /* Muestra los mensajes de error en la pantalla */


}

/* Función para borrar todos los campos del formulario */
function borrar () {
    var i;
     for(i=0;i<formulario.opciones.length;i++)
           formulario.opciones[i].checked=false; 
   }