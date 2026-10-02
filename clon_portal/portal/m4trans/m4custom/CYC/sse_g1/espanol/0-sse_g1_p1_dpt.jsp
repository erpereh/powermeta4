<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>

<html xmlns="http://www.w3.org/1999/xhtml">

 <head>
		<title>DPT</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
		<link href="/css/style_persdata.css" type="text/css" rel="stylesheet"/>
		<link href="/css/bootstrap/css/bootstrap.min.css" type="text/css" rel="stylesheet"/>

		<%
			 // Recuperamos el Identificador del puesto de la persona
			String idPuesto 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idPuesto");
			String sociedad 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad");
			idPuesto = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", idPuesto);
			String zmetodocarga 	= "CSP_RP_JOB_DESCR!STD_JOB.LANZAR_LOADS";
			
			//PROP_STD_ID_JOB_CODE = idPuesto    zsubsesion + "!" + znodo1 + "["+spos+"]";
		%>
 </head>
 <body onload="javascript:frame('Local');">
 <m4:startpage m4task="CSP_RP_JOB_DESCR"/>
 	<m4:beginjob/>
		<m4:datadef m4o="CSP_RP_JOB_DESCR" m4name="CSP_RP_JOB_DESCR"/>
	
		<m4:setitems>
			<m4:param name="CSP_RP_JOB_DESCR!STD_JOB.PROP_STD_ID_JOB_CODE" value="<%=idPuesto%>"/>
			<m4:param name="CSP_RP_JOB_DESCR!STD_JOB.P_SOCIEDAD" value="<%=sociedad%>"/>
			<m4:param name="CSP_RP_JOB_DESCR!STD_JOB.CSP_PORTAL" value="1"/>
		</m4:setitems>

		<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
		<m4:outputdef m4alias="STD_JOB"><m4:param name="m4name0" value="CSP_RP_JOB_DESCR!STD_JOB[0]"/></m4:outputdef>
	<m4:endjob/>

<script type="text/javascript">
	function frame(iframeOBj) {
		var ruta ="ficheros/";
		var aux="<m4:item  item='P_NOMBRE_FICHERO' htmlsafe='true' outputdef='STD_JOB'/>";
		ruta = ruta + aux;
		var miIframe=document.getElementById(iframeOBj);
		miIframe.src = ruta;
	}
</script>

<div class="row">
	<div class="col-md-offset-3 col-md-9 col-sm-offset-1 col-sd-10">
		<iframe id="Local" scrolling="yes" frameborder="0" vspace="0" hspace="0" align="middle" width="100%" height="1750"></iframe>
	</div>
</div>

<m4:endpage/>	
</body>
</html> 