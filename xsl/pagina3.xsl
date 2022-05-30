<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<!-- Poner la ruta de donde queremos coger la información -->
<xsl:template match="../xml/pagina9_puntosDeventa.xml">
<html><head>
  <title>Nuestros puntos de venta</title>
</head>
<body>
  <xsl:template match="puntoDeVenta">
  <h2><xsl:value-of select="nombre"/></h2>

  <!--Texto de servicios-->
  <div id="cajaPrincipal">
    <ul id="tiendas">
        <li id="Tienda"><a href="../php/puntos_de_venta.php">Tienda 1</a></li>
        <li id="Tienda"><a href="/php/productos_puntos_de_venta.php">Tienda 2</a></li> 
        <li id="Tienda"><a href="/php/productos_puntos_de_venta.php">Tienda 3</a></li> 
        <li id="Tienda"><a href="/php/productos_puntos_de_venta.php">Tienda 4</a></li> 
        <li id="Tienda"><a href="/php/productos_puntos_de_venta.php">Tienda 5</a></li> 
        <li id="Tienda"><a href="/php/productos_puntos_de_venta.php">Tienda 6</a></li>  
    </ul>
  </div>
  </body>
  </html>
  </xsl:template>




<!-- <table id="{nombre}">
   <tr>
     <th colname="id">ID</th>
     <th colname="nombre">Nombre</th>
   </tr>
   <tbody> -->
     <!-- add a row for each pet in this category -->
     <!-- <xsl:for-each select="puntoDeVenta">
       <tr>
         <td colname="nombre"><xsl:value-of select="nombre"/></td>
       </tr>
     </xsl:for-each>
   </tbody>
 </table> -->
</xsl:template>

<!-- ignore the content of other tags because we processed them elsewhere -->
<xsl:template match="*">
<!-- do nothing -->
</xsl:template>

</xsl:stylesheet>