<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="html"/>
     <xsl:template match="puntosDeVenta">

     <html>
     <head>
      <title>Puntos de venta y sus productos</title>
     <!--Link del css para el xml/xsl-->
     <link rel="stylesheet" type="text/css" href="../css/tiendas.css"/>
     <h1>Seleccione el punto de venta en el que desea hacer la compra</h1>
       </head>     
      <body>

      <nav>
            <ul>
                <li><a href="../html/index.html">Inicio</a></li>
                <li id="descripcion_pagina">Puntos de venta y sus prodcutos</li>
             </ul>
         </nav>

      <div id="principal">
      <!--Imprime una caja con una tabla por cada punto de venta que haya en el xml-->
      <xsl:for-each select="puntoDeVenta">
        <div>
             <p width="200" id="nombre"><xsl:value-of select="nombre"/></p>         
             <p><xsl:value-of select="direccion"/></p>
             <p><xsl:value-of select="localidad"/></p>
                
             <a><xsl:attribute name="href"><xsl:value-of select="productos"/></xsl:attribute>Ver productos</a>
            
             <background-image>         
               <xsl:attribute name="src"><xsl:value-of select="imagen"/></xsl:attribute>
             </background-image> 
        
        </div>  
        <br></br>
      </xsl:for-each>
      </div>
      </body>
      </html>
  </xsl:template>
</xsl:stylesheet>