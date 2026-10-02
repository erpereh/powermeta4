<%@ include file="../sse_generico/sse_generico_taglib.jsp" %>
<html>
<head>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
  
<%@ include file="../sse_generico/sse_generico_taglib_2.jsp" %>
<%@ include file="../mss_generico/mss_delegation_trans.jsp" %>  

<title><%=mssDelegation.getProperty("Label.delInfo")%></title>

</head> 
<body>
<%
   String zsubsesion = "MSS_DELEGATION";
   String zmeta4object = zsubsesion;
   String znodo2 = "MSS_ERROR_COMUNICATION";
   String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";   
   String zraiz = zsubsesion + "!" + znodo2 + ".";
   String zTEXTOERRORES = znodo2 + ":" + zraiz + "TEXTO_ERRORES_USUARIO";
 %>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<div id="capa_cuerpo" style="position:relative; left:1%; top:1%; width:100%; height:0%; z-index:2">
<table width="100%" cellspacing="0">
<tr>
  <td class="titulofuncional" colspan="2"><%=mssDelegation.getProperty("Label.delInfo")%> </td>
  <td><a href="" onclick="window.close();"><img title="<%=mssDelegation.getProperty("Label.delClose")%>" alt="<%=mssDelegation.getProperty("Label.delClose")%>" src="/iconos/noname_volver_52_44.gif" height="44" width="52" onmouseover=" m4sombra(this)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
  <td><a href=""><img alt="<%=mssDelegation.getProperty("Label.Herramientas")%>" src="/iconos/noname_configuracion_98_125.gif" width="98" height="125" onmouseover="m4luznoname(this)" onmouseout="m4oscuridad(this)" /></a></td>
  <td><div class="fuentedescripcion"><m4:item m4name="<%=zTEXTOERRORES%>" htmlsafe="true"/></div></td>
</tr>
</table>
</div>
<m4:endpage/>
</body>