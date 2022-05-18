//Asigna la función al botón
window.onload = function() {
    for (var index = 1; index <= 3; index++) {
        document.getElementById("mostrar"+(index)).onclick = mostrarContenido;   
    }
}

//Muestra o esconde la información adicional de un punto
//de venta cuando pulsa el botón
function mostrarContenido(){
    const cont = ["","",""];
    for (let index = 0; index < cont.length; index++) {
        cont[index] = document.getElementById("punto"+(index+1)+"_mostrar");
    }
    for (var index = 0; index < cont.length; index++) {
        if (cont[index].style.visibility == "hidden" && this == document.getElementById("mostrar"+(index+1))){
            cont[index].style.visibility = "visible";
            document.getElementById("mostrar"+(index+1)).innerText = "(mostrar menos)";
        }
        else if (cont[index].style.visibility == "visible"){
            cont[index].style.visibility = "hidden";
            document.getElementById("mostrar"+(index+1)).innerText = "(mostrar más)";
        }
    }
}