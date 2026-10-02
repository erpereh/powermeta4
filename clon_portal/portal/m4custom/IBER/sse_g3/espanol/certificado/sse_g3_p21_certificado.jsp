<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>

<html xmlns="http://www.w3.org/1999/xhtml">

 <head>

		<title>Certificado</title>
		<meta charset="UTF-8">
		
		<%
			 // Recuperamos el Identificador de la persona CSP_NODO_RAIZ_PORTAL P_SESION \""+idSesion+"\" ;CSP_NODO_RAIZ_PORTAL P_PERSONA \""+idEmpleado+"\" ;CSP_NODO_RAIZ_PORTAL P_SOCIEDAD \"CYC\"$";
			M4SessionCl zsesionDA = M4Context.getM4SessionCl(request);
			String idEmpleado = zsesionDA.getBagEntries("zIdPerson");
			String idSesion = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tr");
			String stSysSentence 	= "CSP_MNG_DIPLOMAS_PORTAL;CSP_NODO_RAIZ_PORTAL$CSP_NODO_RAIZ_PORTAL P_SESION \""+idSesion+"\" ;CSP_NODO_RAIZ_PORTAL P_PERSONA \""+idEmpleado+"\" ;CSP_NODO_RAIZ_PORTAL P_SOCIEDAD \"IBER\"$";			

		%>
 </head>
 <body>
 <m4:startpage m4task="CSP_MNG_DIPLOMAS_PORTAL"/>

	<iframe id="Local" src="<m4:executereport idreport='CSP_CERTIFICADO_FORMACION_IBER' syssentence='<%=stSysSentence%>' outputtype='PDF' otherparams='#/AUTOLOAD:DESIGN:OFF# #/NSEARCH#' />" scrolling="yes" frameborder="0" vspace="0" hspace="0" width="100%" height="950" >
	</iframe>

<m4:endpage/>
</body>
</html>