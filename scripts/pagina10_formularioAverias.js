/*

SCRIPT PARA COMPROBAR EL FORMATO DE LO DATOS INTRODUCIDOS
EN EL FORMULARIO Y MOSTRAR MENSAJES DE ERROR. TAMBIÉN
PERMITE BORRAR TODOS LOS CAMPOS CUANDO SE PULSA EL BOTÓN "RESTAURAR"

*/

window.onload = function () {

    /* Comprueba los datos y los envía si son correctos */
    document.getElementById("enviar").onclick = comprobar;

    /* Restaura el formulario poniendo todos los campos en blanco */
    document.getElementById("restaurar").onclick = borrar;

}

/* Función para borrar todos los campos del formulario  (OK) */
function borrar() {
    /* Pone en blanco el campo "nombre" */
    document.getElementById("nombre").value = "";

    /* Pone en blanco el campo "apellidos" */
    document.getElementById("apellidos").value = "";

    /* Pone en blanco el campo "telefono" */
   // document.getElementById("telefono").value = "";

    /* Pone en blanco el campo "nombre" */
  //  document.getElementById("email").value = "";

    /* Pone en blanco el campo "problema" */
    document.getElementById("problemaText").value = "";

    var i;
    for (i = 0; i < formularioContacto.tipoProblema.length; i++) {
        formularioContacto.tipoProblema[i].checked = false;
    }
}

/* Comprueba si algún elemento del radiobutton ha sido seleccionado  (OK) */
function validarRadioButton() {
    var seleccionado = false;
    for (var i = 0; i < formularioContacto.tipoProblema.length; i++) {
        if (formularioContacto.tipoProblema[i].checked == true) {
            seleccionado = true;
            break;
        }
    }

    return seleccionado;
}

/* Función para comprobar los datos y enviarlos */
function comprobar() {

    /* Declaración de variable de control */
    var formularioCorrecto = true;

    /*******************************************************************************************
     * RECOGIDA
     *******************************************************************************************/

    /* Recoge el contenido del campo "Nombre" */
    var nombre = document.getElementById("nombre").value;

    /* Recoge el contenido del campo "Apellidos" */
    var apellidos = document.getElementById("apellidos").value;

    /* Recoge el contenido del campo "Teléfono" */
  /*   var telefono = document.getElementById("telefono").value; */

    /* Recoge el contenido del campo "Email" */
   /*  var email = document.getElementById("email").value; */

    /* Recoge el contenido del campo "Avería" */
    var problema = document.getElementById("problemaText").value;

    /******************************************************************************************
    *   COMPROBACIÓN
    *******************************************************************************************/
    /* Declaración de expresiones regulares */
    var expRegNomApe = /^[a-z A-Z ÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    /* var expRegTlfno = /^([0-9]{9})$/; */
    /* var expRegEmail = /^\w+@(\w+\.)+\w{2,4}$/; */
    var expRegText = /^[a-z A-Z 0-1 ÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    /* Pone la variable de control en true */
    formularioCorrecto = true;

    /* Oculta todas las etiquetas de error */
    document.getElementById("errorNombre").style.display = "none";
    document.getElementById("errorApellidos").style.display = "none";
   /*  document.getElementById("errorEmail").style.display = "none";
    document.getElementById("errorTlfno").style.display = "none"; */
    document.getElementById("errorRadio").style.display = "none";
    document.getElementById("errorProblema").style.display = "none";

    /* Pone los bordes de los cammpos en negro */
    document.getElementById("nombre").style.border = "1px solid black";
    document.getElementById("apellidos").style.border = "1px solid black";
   /*  document.getElementById("telefono").style.border = "1px solid black";
    document.getElementById("email").style.border = "1px solid black"; */
    document.getElementById("problemaText").style.border = "1px solid black";

    /*******************************************
     *  CAMPO: NOMBRE (OK)
     *******************************************/

    /* Comprueba el formato mediante una expresión regular */
    if (!expRegNomApe.test(nombre)) {
        /* Si el campo está vacío */
        if (nombre.length == 0) {
            /* Escribe mensaje de error */
            document.getElementById('errorNombre').innerText = 'El campo está vacío. Debe introducir un nombre';
            /* Si no está vacío */
        } else {
            /* Escribe mensaje de error */
            document.getElementById('errorNombre').innerText = 'El nombre introducido no es válido';
        }

        /* Hace visible la etiqueta de error */
        document.getElementById("errorNombre").style.display = "block";
        /* Pone el borde el campo en rojo */
        document.getElementById("nombre").style.border = "3px solid red";

        /* pone la variable booleana en false*/
        formularioCorrecto = false;
    }

    /*******************************************
     *  CAMPO: APELLIDOS  (OK)
     *******************************************/

    /* Comprueba el formato mediante una expresión regular */
    if (!expRegNomApe.test(apellidos)) {
        /* Si el campo está vacío */
        if (apellidos.length == 0) {
            /* Escribe mensaje de error */
            document.getElementById('errorApellidos').innerText = 'El campo está vacío. Debe introducir sus apellidos';
            /* Si no está vacío */
        } else {
            /* Escribe mensaje de error */
            document.getElementById('errorApellidos').innerText = 'Los apellidos introducidos no son válidos';
        }

        /* Hace visible la etiqueta de error */
        document.getElementById("errorApellidos").style.display = "block";
        /* Pone el borde el campo en rojo */
        document.getElementById("apellidos").style.border = "3px solid red";

        /* pone la variable booleana en false*/
        formularioCorrecto = false;
    }

    /*******************************************
    *  CAMPO: TELÉFONO  (OK)
    *******************************************/

    /* Comprueba el formato mediante una expresión regular */
  //  if (!expRegTlfno.test(telefono)) {
        /* Si el campo está vacío */
   //     if (telefono.length == 0) {
            /* Escribe mensaje de error */
  //          document.getElementById('errorTlfno').innerText = 'El campo está vacío. Debe introducir su número de teléfono';
            /* Si no está vacío */
   //     } else {
            /* Escribe mensaje de error */
  //          document.getElementById('errorTlfno').innerText = 'El número introducido no es válido';
  //      }

        /* Hace visible la etiqueta de error */
  //      document.getElementById("errorTlfno").style.display = "block";
        /* Pone el borde el campo en rojo */
  //      document.getElementById("telefono").style.border = "3px solid red";

        /* pone la variable booleana en false*/
  //      formularioCorrecto = false;
  //  }

    /*******************************************
     *  CAMPO: EMAIL  (OK)
     *******************************************/

    /* Comprueba el formato mediante una expresión regular */
 //   if (!expRegEmail.test(email)) {
        /* Si el campo está vacío */
  //      if (email.length == 0) {
            /* Escribe mensaje de error */
  //          document.getElementById('errorEmail').innerText = 'El campo está vacío. Debe introducir su email';
            /* Si no está vacío */
  //      } else {
            /* Escribe mensaje de error */
  //          document.getElementById('errorEmail').innerText = 'El email introducido no es válido';
  //      }

        /* Hace visible la etiqueta de error */
 //       document.getElementById("errorEmail").style.display = "block";
        /* Pone el borde el campo en rojo */
 //       document.getElementById("email").style.border = "3px solid red";

        /* pone la variable booleana en false*/
 //       formularioCorrecto = false;
 //   }

    /*******************************************
     *  RADIOBUTTON  (OK)
     *******************************************/
    var radioBu = false;
    radioBu = validarRadioButton();

    if (radioBu == false) {
        /* Escribe mensaje de error */
        document.getElementById('errorRadio').innerText = 'Por favor, seleccione alguna opción';

        /* Hace visible la etiqueta de error */
        document.getElementById("errorRadio").style.display = "block";

        /* pone la variable booleana en false*/
        formularioCorrecto = false;
    }

    /*******************************************
     *  CAMPO: TEXTAREA (PROBLEMA)   (NO FUNCIONA: REVISAR)
     *******************************************/

    /* Comprueba el formato mediante una expresión regular */

//    if (!expRegText.test(problemaText)) {
        /* Escribe mensaje de error */
//        document.getElementById('errorProblema').innerText = 'Debe indicarnos su problema';

        /* Hace visible la etiqueta de error */
//        document.getElementById("errorProblema").style.display = "block";

        /* Pone el borde el campo en rojo */
//        document.getElementById("problemaText").style.border = "3px solid red";

        /* pone la variable booleana en false*/
//        formularioCorrecto = false;
//    }

    /********************************************************************************************
     * ENVIAR FORMULARIO  (OK)
     ********************************************************************************************/

    /* Envía el formulario de ser correcto */
    if (formularioCorrecto == true) {
        /* Muestra mensaje de confirmación */
        alert("Formulario enviado correctamente");
        /* Envía el formulario */
        document.formularioContacto.submit();
    }
}