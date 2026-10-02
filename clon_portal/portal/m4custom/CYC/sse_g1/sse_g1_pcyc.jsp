<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Aplicaciones Internas</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/mootools.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/functions_persdata.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/meta4ajax.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/functions_validate.js"></script>
<link href="/css/style_persdata.css" type="text/css" rel="stylesheet"/>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<script type="text/javascript" language="Javascript1.2"src="/library/openwin.js"></script>
<%

  M4SessionManager m4Session = M4Context.getSession(request);
  String sPathTempMap = m4Session.getPathTempMapping();
  String sPathTempURI = m4Session.getUserTempURI() + '/';

%>
</head>
<body>
<iframe id='iframeUpload' name='iframeUpload' style='display:none'></iframe>
<iframe id='iframeTempUpload' name='iframeTempUpload' style='display:none'></iframe>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>

<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="3">Acceso a Aplicaciones Internas</td></tr>
<tr>
  <td><img alt="Datos personales"title="Datos personales" src="/iconos/noname_mujer_53_100.gif" width="100" height="100" /></td>
  <td>
  <div class="descripcionfuncional">Accede a tus aplicaciones internas</div>
	  <ul class="listaenlace">
		<li><a class="enlacefuncional"title="Direcci&oacute;n fiscal"tabindex="1" href="http://www.gooogle.es">Buscador</a></li>
	  </ul>
  </td>  
</tr>
</table>

<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</body>
<m4:endpage/>
</html>


