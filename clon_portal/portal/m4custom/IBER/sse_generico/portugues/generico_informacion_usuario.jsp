<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Informa&ccedil;&atilde;o</title>
  <link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
  <script type="text/javascript" src="/libreria/funciones_sse.js"></script>
  <script type="text/javascript" src="/libreria/menu.js"></script>
</head> 
<body>
<%
   String zsubsesion = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_M4TAGLET");
   String zmeta4object = zsubsesion;
   String znodo2 = "SSE_COMUNICACION";
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
  <td class="titulofuncional" colspan="2">Mensagem de erro</td>
</tr>
<tr>
  <td colspan="2"></td>
  <td><a href="" onclick="window.close();"><img alt="Voltar" title="Voltar" src="/iconos/noname_volver_52_44.gif" height="44" width="52" onmouseover=" m4sombra(this)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
  <td><a href="history.back();"><img alt="Ferramentas" title="Ferramentas" src="/iconos/noname_configuracion_98_125.gif" width="98" height="125" onmouseover="m4luznoname(this)" onmouseout="m4oscuridad(this)" /></a></td>
  <td><div class="fuentedescripcion"><m4:item m4name="<%=zTEXTOERRORES%>"/></div></td>
</tr>
</table>
</div>
<m4:endpage/>
</body>
</html>