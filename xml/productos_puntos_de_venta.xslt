<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<!-- handle the root XML element -->
<xsl:template match="/">
<html><head>
  <title>Puntos de venta y sus productos</title>
</head>
<body>
  <xsl:apply-templates/>
</body>
</html>
</xsl:template>

<xsl:template match="productos_puntos_venta">
<xsl:apply-templates/>
</xsl:template>

<xsl:template match="tienda">
<h2><xsl:value-of select="@nombre"/></h2>
<table id="{@nombre}">
   <tr>
     <th colname="id">ID</th>
     <th colname="nombre">Nombre</th>
   </tr>
   <tbody>
     <!-- add a row for each pet in this category -->
     <xsl:for-each select="pet">
       <tr>
         <td colname="id"><xsl:value-of select="@id"/></td>
         <td colname="name"><xsl:value-of select="@nombre"/></td>
         <td colname="vaccinated"><xsl:value-of select="@vaccineStatus"/></td>
         <td colname="health"><xsl:value-of select="@healthStatus"/></td>
       </tr>
     </xsl:for-each>
   </tbody>
 </table>
</xsl:template>

<!-- ignore the content of other tags because we processed them elsewhere -->
<xsl:template match="*">
<!-- do nothing -->
</xsl:template>

</xsl:stylesheet>