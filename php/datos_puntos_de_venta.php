<?php

    /*
    Generamos un nuevo documento DOM con las reglas XSLT y otro con los datos XML
    */

    ini_set('display_errors', '1');
    error_reporting(E_ALL);
    
   $reglas = new DOMDocument();
   $reglas->load("../xsl/pagina9_puntosDeVenta.xsl");

   $datos = new DOMDocument();
   $datos->load("../xml/pagina9_puntosDeVenta.xml");

     /*
    Generamos un "motor" para aplicar esas reglas.
    Le cargamos las reglas de transformación
    Aplicamos dichas reglas al documento
    */

   $proc = new XSLTProcessor();
   $proc->importStylesheet($reglas);
   $proc->setParameter('', 'id_tienda',$_GET['id_tienda']);

   echo $proc->transformToXML($datos);

?>