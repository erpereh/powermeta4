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



<div id="carga" style="width: 99%; background: #efefef70; height: 98%; position: absolute; overflow: hidden; display: none;">
	<div style="background: url(/iconos/spinner_renhash_67379f1…_l3_dl_oCYC_v1.gif) no-repeat center 50%; height: 18px;"></div>
</div>

<script type="text/javascript">
	document.onclick= function(event) {
	    if (event===undefined) event= window.event;
	    var target= 'target' in event? event.target : event.srcElement;
	    if(target.tagName=="a" || target.tagName=="A"){
	    	document.getElementById("carga").style.display = "block";
	    }	    
	}
</script>



<%
 // Recuperamos el Identificador de la persona
M4SessionCl zsesionDA = M4Context.getM4SessionCl(request);
String matricula = zsesionDA.getBagEntries("zIdPerson");
String matriculaEnc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", matricula);

String[] puedenver = { "1038", "1351", "0952", "0867", "1194", "1437", "1403", "0998", "1430", "1467" };

%>

<%!

public static boolean useSet(String[] arr, String targetValue) {
	Set<String> set = new HashSet<String>(Arrays.asList(arr));
	return set.contains(targetValue);
}

%>

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
<table border="0" width="100%">
<tr>
  <td>  
  <table border="0" width="100%">
	  <tr>
		<td><a class="enlacefuncional"title="N&oacute;mina"tabindex="2" href="/servlet/CheckSecurity/JSP/sse_g2/ssco_g2_p12.jsp"><img alt=""title="" src="/iconos/espanol/noname_recibo_57_100.gif"/>Nomina</a></td>		
		<td><a class="enlacefuncional"title="Certificado de Haberes"tabindex="1" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_cert_hab_cyc.jsp"><img alt=""title="" src="/iconos/espanol/noname_evalua_cursos_74_100.gif"/>Certificado de Haberes</a></td>
		<td><a class="enlacefuncional"title="Informe de proyecciones"tabindex="1" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_proyecciones.jsp"><img alt=""title="" src="/iconos/espanol/noname_recibos_57_100.gif"/>Informe de Compensaci&oacute;n Total</a></td>
		<td><a class="enlacefuncional"title="Organigrama"				tabindex="4" href="/servlet/CheckSecurity/JSP/sse_g0/sse_g0_organigramas.jsp" 								    ><img alt=""title="" src="/iconos/espanol/noname_organizacion_ess_115_100.gif"/> Organigrama </a></td>
		<td>&nbsp;</td>	
	  </tr>
	  <tr>	  			
		<td><a class="enlacefuncional"title="Curriculum Web"tabindex="3" href="javascript:cv();" ><img alt=""title="" src="/iconos/noname_eventos_mss_99_100.gif"/>Curriculum Web</a></td>
	    <td><a class="enlacefuncional"title="Mi Evaluación"tabindex="6" href="https://cycerone.creditoycaucion.es/rrhhh/login" target="_blank" ><img alt=""title="" src="/iconos/noname_evaluar_111_125.gif"/>Mi Evaluaci&oacute;n</a></td>
		<!-- <td><a class="enlacefuncional"title="Hol@ Kiosco"tabindex="4" href="https://smartiber.creditoycaucion.es/SmartHL/eTouchKiosk/logon_keypad.aspx" target="_blank" ><img alt=""title="" src="/iconos/espanol/noname_resultados_evaluacion_ess_100_100.gif"/>Hol@ Kiosco</a></td>	 -->	
		<td><a class="enlacefuncional"title="Hol@ Kiosco"tabindex="4" href="https://wevalospro.creditocaucion.es/Digitek/EvalosEmpleados/Account/Login.aspx" target="_blank" ><img alt=""title="" src="/iconos/espanol/noname_resultados_evaluacion_ess_100_100.gif"/>Hol@ Kiosco</a></td>	

		<!-- <td><a class="enlacefuncional"title="Hol@ validador"tabindex="6" href="https://smartiber.creditoycaucion.es/SmartHL/eHL/logon/logon.aspx" target="_blank" ><img alt=""title="" src="/iconos/noname_competencias_mss_82_100.gif"/>Hol@ validador</a></td>	 -->
		
		<td colspan="4" style="text-align: center;"><a class="enlacefuncional" title="CYC-learning" tabindex="5" href="https://formacion.avanzo.com/CREDITOYCAUCION/" target="_blank" ><img alt="" title="" src="/iconos/noname_hombre_conocimiento_66_100.gif"/>CyC e-learning</a></td>	
	  </tr>		

	  <%
	  	/*if(useSet(puedenver, matricula)){*/
	  %>
	  <tr>	  			
		<!-- <td colspan="4" style="text-align: center;"><a class="enlacefuncional" title="CYC-learning" tabindex="5" href="https://formacion.avanzo.com/CREDITOYCAUCION/" target="_blank" ><img alt="" title="" src="/iconos/noname_hombre_conocimiento_66_100.gif"/>CyC e-learning</a></td>	 -->
	  </tr>		
	  <%
		/*}*/
	  %>

	</table>
  </td>  
</tr>
</table>
</body>
<script type="text/javascript">
  function cv(){
    window.open('/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=<%=matriculaEnc%>','CV','resizable=yes,tmenubar=no,status=no,scrollbars=yes,width=980,height=900');
    window.reload();
  }
</script>
<m4:endpage/>
</html>
 
<!--
noname_calendario_123_100.gif Hol@ Kiosco
noname_competencias_puesto_82_100.gif Mi Evaluacion
Hol@ validador
noname_formacion_54_125.gif  Curriculum web
-->