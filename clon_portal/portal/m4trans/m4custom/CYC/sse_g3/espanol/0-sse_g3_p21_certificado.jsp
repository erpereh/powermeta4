<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>

<html xmlns="http://www.w3.org/1999/xhtml">

 <head>
		<title>Certificado</title>
		
		<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
		<link href="/css/style_persdata.css" type="text/css" rel="stylesheet"/>

		<%
			 // Recuperamos el Identificador de la persona
			M4SessionCl zsesionDA = M4Context.getM4SessionCl(request);
			String idEmpleado = zsesionDA.getBagEntries("zIdPerson");
			String idSesion = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tr");
			idSesion = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", idSesion);
			String zmetodocarga = "CSP_MNG_DIPLOMAS_PORTAL!CSP_NODO_RAIZ_PORTAL.CSP_ASIGNA_VALORES";
			//String zmetodocarga 	= "load_alias:geo_alias!CSP_SESION_PORTAL.CSP_ASIGNA_VALORES";
			String zoutputdef = "CSP_MNG_DIPLOMAS_PORTAL!CSP_SESION_PORTAL[0]";
		%>
 </head>
 <body onload="javascript:frame('Local');">
 <m4:startpage m4task="CSP_MNG_DIPLOMAS_PORTAL"/>
 	<m4:beginjob/>
		<m4:datadef m4o="CSP_MNG_DIPLOMAS_PORTAL" m4name="CSP_MNG_DIPLOMAS_PORTAL"/>
	
		<m4:exec m4method="<%=zmetodocarga%>">
			<m4:param name="ARG_SESION" value="<%=idSesion%>"/>
			<m4:param name="ARG_PERSONA" value="<%=idEmpleado%>"/>
			<m4:param name="ARG_SOCIEDAD" value="CYC"/>
		</m4:exec>
		<m4:outputdef m4alias="CSP_SESION_PORTAL"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
	<m4:endjob/>

<script type="text/javascript">
	function frame(iframeOBj) {
		var ruta = "fichero/"
		var aux="<m4:item  item='P_NM_DIPLOMA' htmlsafe='true' outputdef='CSP_SESION_PORTAL'/>";
		ruta = ruta + aux;
		document.getElementById(iframeOBj).src = ruta;
	}

</script>

<iframe id="Local" scrolling="yes" frameborder="0" vspace="0" hspace="0" width="100%" height="800" >
</iframe>



<m4:endpage/>	
</body>
</html>