<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.* " %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
</head>
<body>

<%
 // Recuperamos el Identificador de la persona
M4SessionCl zsesionDA = M4Context.getM4SessionCl(request);
String matricula = zsesionDA.getBagEntries("zIdPerson");%>

<iframe id='iframeUpload' name='iframeUpload' style='display:none'></iframe>
<iframe id='iframeTempUpload' name='iframeTempUpload' style='display:none'></iframe>
<!--<table border="0" width="100%">
<tr>
<td>
	<div class="descripcionfuncional">
		<img alt="Datos personales"title="Datos personales" src="/iconos/noname_mujer_53_100.gif" width="100" height="100" /> Acceso a Aplicaciones Internas Cr&eacute;dito y Cauci&oacute;n</td>  
	</div>
</tr>
</table>-->
<br>
<br>
<table border="0" width="70%">	  
	  <tr>	  	
		<!-- <td><a class="enlacefuncional"title="Hol@ validador"tabindex="6" href="https://smartcyc.creditoycaucion.es/SmartHL/eHL/" target="_blank" ><img alt=""title="" src="/iconos/noname_competencias_mss_82_100.gif"/>Hol@ validador</a></td>	 -->	
		<td><a class="enlacefuncional"title="Mi Evaluación"tabindex="4" href="https://cycerone.creditoycaucion.es/rrhhh/login" target="_blank" ><img alt=""title="" src="/iconos/noname_evaluar_111_125.gif"/>Mi Evaluaci&oacute;n</a></td>
		<!--<td><a class="enlacefuncional"title="Organigrama"tabindex="7" href="https://merlin.creditoycaucion.es:444/Personae/ " target="_blank" ><img alt=""title="" src="/iconos/espanol/noname_organizacion_ess_115_100.gif"/>Mis datos Quien es Quien?</a></td>-->
	  </tr>		
</table>
</body>
<m4:endpage/>
</html>
 
<!--
noname_calendario_123_100.gif Hol@ Kiosco
noname_competencias_puesto_82_100.gif Mi Evaluacion
Hol@ validador
noname_formacion_54_125.gif  Curriculum web
-->