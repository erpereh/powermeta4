<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%
	
	 Generatablaparametros zobjtabla = new Generatablaparametros(request);
	
	String zdireccionvuelta =  zobjtabla.m4paramvalor("param1");
	String zPARAMETRO_VAL = zobjtabla.m4paramvalor("param2");
	String zMES_VAL =  zobjtabla.m4paramvalor("mes");
	String zANO_VAL =  zobjtabla.m4paramvalor("ano");
   
   
   
   String zsubsesion = "SSE_HOLYDAYS";
   String znodo = "SSE_PRINCIPAL";
   String znodo1 = "SSE_REAL_TIME_PRD";
   String znodo2 = "SSE_COMUNICACION";
   String zoutputdef = zsubsesion + "!" + znodo1 + "[*]"; 
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";   
   String zmetodo = zsubsesion + "!" + znodo + ".GESTION_VAL_HOLYDAYS";
   String zraiz = zsubsesion + "!" + znodo2 + ".";
   
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zsubsesion%>" m4name="<%=zsubsesion%>"/>
<% try {
	     M4Operations m = new M4Operations(request); 
	     m.setItem(zsubsesion,"SSE_REAL_TIME_PRD","","MES_VAL",zMES_VAL); 
		 m.setItem(zsubsesion,"SSE_REAL_TIME_PRD","","ANO_VAL",zANO_VAL);
		 m.setItem(zsubsesion,"SSE_REAL_TIME_PRD","","PARAMETRO_VAL",zPARAMETRO_VAL);
		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodo%>"></m4:exec>
<m4:outputdef m4alias="<%=znodo1%>">
	<m4:param name="m4name0" value="<%=zoutputdef%>"/>
</m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>">
	<m4:param name="m4name0" value="<%=zoutputdef2%>"/>
</m4:outputdef>
<m4:endjob/>

<%
	String zerror = "0";
	String zredireccion = "";
	String zv1 ="";
	String zv2 ="";
	String zv3 ="";
	try {
	    M4Operations m = new M4Operations(request);
	    zerror = m.getItem(znodo2,zsubsesion,znodo2,"","TIPO_DEBUG");
	    zredireccion = m.getItem(znodo2,zsubsesion,znodo2,"","JSP_REDIRECCION");	    
	    zv1 = m.getItem(znodo1,zsubsesion,"SSE_REAL_TIME_PRD","","MES_VAL");
	    zv2 = m.getItem(znodo1,zsubsesion,"SSE_REAL_TIME_PRD","","ANO_VAL");
	    zv3 = m.getItem(znodo1,zsubsesion,"SSE_REAL_TIME_PRD","","PARAMETRO_VAL");
	} catch(Exception e) {}

	if ((zredireccion==null)){
	   zredireccion = "ERROR";
	}else{
%>
<%
}
%>
<head>
<title>Actualizacion</title>
	<!-- Hoja de Estilo general. Obligatorio-->
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<!-- Librerias JavaScript. Obligatorio -->
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
</head>	
<body>
	<meta http-equiv='refresh' content="2; URL=<%=zredireccion%>">
	<!---<=zANO_VAL%>;<=zMES_VAL%>;
	</br>
	<=zv1%>  ;  <=zv2%>  ;  <=zv3%>-->
	<%@ include file="../../sse_generico/espanol/generico_actualizar_cuerpo.jsp" %>
<m4:endpage/>	 
</body>
</html>
