<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="html"/>
     <xsl:template match="productos">
     <!--Link del css para el xml/xsl-->
     <link rel="stylesheet" type="text/css" href="../css/tabla_xml/productos.css"/>
     <h1>Productos de la tienda: Lácteos</h1>

     <nav>
            <ul>
                <li><a href="../html/index.html">Inicio</a></li>
                <li id="descripcion_pagina">Puntos de venta y sus prodcutos</li>
             </ul>
         </nav>
         
     <!--Imprime una tabla por cada punto de venta que haya en el xml-->
      <xsl:for-each select="producto[categoria = 'Lacteos']">
            <table border="1">
              <tr>
                   <td width="200" id="nombre">Nombre del producto</td>
                   <td id="nombre"><xsl:value-of select="nombre"/></td>
              </tr>
              <tr>
                   <td width="200">Precio del producto</td>
                   <td><xsl:value-of select="precio"/></td>
              </tr>              
        </table>
        <br></br>
      </xsl:for-each>
  </xsl:template>
</xsl:stylesheet>