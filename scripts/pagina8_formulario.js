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
    var formularioCorrecto = true;

    /***********
     * RECOGIDA
     ***********/

    /* Recoge el contenido del campo "Nombre" */
    var nombre = document.getElementById("nombre").value;

    /* Recoge el contenido del campo "Apellidos" */
    var apellidos = document.getElementById("apellidos").value;

    /* Recoge el contenido del campo "Teléfono" */
    var telefono = document.getElementById("telefono").value;

    /* Recoge el contenido del campo "Email" */
    var email = document.getElementById("email").value;

    /****************
    *   COMPROBACIÓN
    *****************/   

    /* Comprueba el campo "nombre" */    
     if(nombre.length == 0 || !input.value) {
        /* Muestra el mensaje de error */ 
        document.getElementById("nombre").style.display = "inline";
        document.querySelector('nombre').innerText = 'Debe introducir un nombre de usuario';
        /* pone la variable booleana en false*/
        formularioCorrecto = false;        
        //return;
      }

    /* Comprueba el campo "apellidos" */    
     if(apellidos.length == 0) {
        /* Muestra el mensaje de error */ 
        document.getElementById("nombre").style.display = "inline";
        /* pone la variable booleana en false*/
        formularioCorrecto = false;        
        //return;
      }
    
    /* Comprueba si algún elemento del radiobutton ha sido seleccionado */
    var seleccionado = false;
    var elementos = document.getElementByName("tipoProblema");
    for (var i=0; i<elementos.length; i++) {
        if (elementos[i].checked) {
            seleccionado = true;
            break;
        }
    }

    /* Si ninguna opición seleccionada*/
    if (seleccionado = false) {
        formularioCorrecto = false;
    }

    /********************
     * ENVIAR FORMULARIO
     ********************/

    /* Envía el formulario de ser correcto */
    if (correcto == true) {
        document.formularioContacto.submit();

    /* Si es incorrecto */    
    }else {

   
    }
}

/* Función para borrar todos los campos del formulario */
function borrar () {
    var i;
     for(i=0;i<formulario.opciones.length;i++)
           formulario.opciones[i].checked=false; 
   }