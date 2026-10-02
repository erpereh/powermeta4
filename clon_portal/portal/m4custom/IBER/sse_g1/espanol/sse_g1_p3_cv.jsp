<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

 <head>
		<title>CV</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
		<link href="/css/style_persdata.css" type="text/css" rel="stylesheet"/>
		<link href="/css/bootstrap/css/bootstrap.min.css" type="text/css" rel="stylesheet"/>

		<%
			 // Recuperamos el Identificador del puesto de la persona
			String matricula		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tr");
			matricula = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", matricula);
			String zmetodocarga 	= "CSP_CV!CSP_CV.CARGA_CV";
			
			//PROP_STD_ID_JOB_CODE = idPuesto    zsubsesion + "!" + znodo1 + "["+spos+"]";
		%>
 </head>
 <body onload="javascript:frame('Local');">
 <m4:startpage m4task="CSP_CV"/>
 	<m4:beginjob/>
		<m4:datadef m4o="CSP_CV" m4name="CSP_CV"/>
	
		<m4:setitems>
			<m4:param name="CSP_CV!CSP_CV.P_ID_HR" value="<%=matricula%>"/>
			<m4:param name="CSP_CV!CSP_CV.CSP_PORTAL" value="1"/>
		</m4:setitems>

		<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
		<m4:outputdef m4alias="CSP_CV"><m4:param name="m4name0" value="CSP_CV!CSP_CV[0]"/></m4:outputdef>
	<m4:endjob/>

<script type="text/javascript">
	function frame(iframeOBj) {
		var ruta ="ficheros/";
		var aux="<m4:item  item='CSP_CV_PORTAL' htmlsafe='true' outputdef='CSP_CV'/>";
		if(aux=="1.00000000"){
			ruta = "nodatos.html"
		}else{
			ruta = ruta + aux;
		}
		var miIframe=document.getElementById(iframeOBj);
		miIframe.src = ruta;
	}
</script>

<div class="row">
	<div class="col-md-12">
		<iframe id="Local" scrolling="yes" frameborder="0" vspace="0" hspace="0" align="middle" width="100%" height="1750"></iframe>
	</div>
</div>

<m4:endpage/>	
</body>
</html> 