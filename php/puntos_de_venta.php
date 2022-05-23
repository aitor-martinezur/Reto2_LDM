<?php

     /*
    Generamos un nuevo documento DOM con las reglas XSLT y otro con los datos XML
    */
    ini_set('display_errors', '1');
    error_reporting(E_ALL);
    
   $reglas = new DOMDocument();
   $reglas->load("puntos_de_venta.xsl");

   $datos = new DOMDocument();
   $datos->load("datos.xml");
   /*
    Generamos un "motor" para aplicar esas reglas.
    Le cargamos las reglas de transformación
    Aplicamos dichas reglas al documento
    */
   $proc = new XSLTProcessor();
   $proc->importStylesheet($reglas);
   
   echo $proc->transformToXML($datos);

?>