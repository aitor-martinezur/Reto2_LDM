<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
   <html>
   <body>
   <hs>Productos</hs>
   <table>
   <tr> <th>Producto </th><th>Precio</th></tr>
  <xsl.for-each select="//producto">
  <tr>
   <td><xsl.value-of select="nombre"/></td>
   <td><xsl.value-of select="precio"/></td>
  </tr>
  </xsl.for-each>
  </table>
   </body>
   </html>
  </xsl:template>
</xsl:stylesheet>