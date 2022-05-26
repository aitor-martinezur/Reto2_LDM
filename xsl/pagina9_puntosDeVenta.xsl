<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="html"/>
     <xsl:template match="puntosDeVenta">
     <!--Link del css para el xml/xsl-->
     <link rel="stylesheet" type="text/css" href="../css/tabla_xml/tablaxml.css"/>
     <h1>Información puntos de venta</h1>
     <!--Imprime una tabla por cada punto de venta que haya en el xml-->
      <xsl:for-each select="puntoDeVenta">
            <table border="1">
              <tr>
                   <td width="200" id="nombre">Nombre</td>
                   <td id="nombre"><xsl:value-of select="nombre"/></td>
              </tr>
              <tr>
                   <td width="200">Dirección</td>
                   <td><xsl:value-of select="direccion"/></td>
              </tr>
              <tr>
                   <td width="50">Código postal</td>
                   <td><xsl:value-of select="codPostal"/></td>
              </tr>
              <tr>
                <td width="50">Localidad</td>
                <td><xsl:value-of select="localidad"/></td>
              </tr>
              <tr>
                <td width="50">Teléfono</td>
                <td><xsl:value-of select="telefono"/></td>
              </tr>
              <tr>
                <td width="50">Email</td>
                <td><xsl:value-of select="email"/></td>
              </tr>
              <tr>
                <td width="200">Imágen</td>
                <td><a><xsl:attribute name="href"><xsl:value-of select="imagen"/></xsl:attribute>Imagen</a></td>
              </tr>
              <tr>
                <td width="200">Google Maps</td>
                <td><a><xsl:attribute name="href"><xsl:value-of select="googleMaps"/></xsl:attribute>Google Maps</a></td>
              </tr>
        </table>
        <br></br>
      </xsl:for-each>
  </xsl:template>
</xsl:stylesheet>