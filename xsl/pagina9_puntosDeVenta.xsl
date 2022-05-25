<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="html"/>
     <xsl:template match="/">
              <tr>
                   <td width="200">Nombre</td>
                   <td><xsl:value-of select="../xml/pagina9_puntosDeventa/puntosDeVenta/puntodeVenta/nombre"/></td>
              </tr>
              <tr>
                   <td width="200">Dirección</td>
                   <td><xsl:value-of select="../xml/pagina9_puntosDeventa/puntosDeVenta/puntodeVenta/direccion"/></td>
              </tr>
              <tr>
                   <td width="50">Código postal</td>
                   <td><xsl:value-of select="../xml/pagina9_puntosDeventa/puntosDeVenta/puntodeVenta/codPostal"/></td>
              </tr>
              <tr>
                <td width="50">Localidad</td>
                <td><xsl:value-of select="../xml/pagina9_puntosDeventa/puntosDeVenta/puntodeVenta/localidad"/></td>
              </tr>
              <tr>
                <td width="50">Teléfono</td>
                <td><xsl:value-of select="../xml/pagina9_puntosDeventa/puntosDeVenta/puntodeVenta/telefono"/></td>
              </tr>
              <tr>
                <td width="50">Email</td>
                <td><xsl:value-of select="../xml/pagina9_puntosDeventa/puntosDeVenta/puntodeVenta/email"/></td>
              </tr>
              <tr>
                <td width="50">Imágen</td>
                <td><xsl:value-of select="../xml/pagina9_puntosDeventa/puntosDeVenta/puntodeVenta/imagen"/></td>
              </tr>
              <tr>
                <td width="50">Google Maps</td>
                <td><xsl:value-of select="../xml/pagina9_puntosDeventa/puntosDeVenta/puntodeVenta/googleMaps"/></td>
              </tr>
  </xsl:template>
</xsl:stylesheet>