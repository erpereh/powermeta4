<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%
   String zparametro = "0";
   String zsubsesion = "SSE_HOLYDAYS";
   String znodo = "SSE_PRINCIPAL";
   String znodo1 = "SSE_REAL_TIME_PRD";
   String znodo2 = "SSE_COMUNICACION";
   String zoutputdef = zsubsesion + "!" + znodo1 + "[*]";
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zmetodo = "SHOWACTION:"+ zsubsesion + "!" + znodo + ".GESTION";
   String zraiz = zsubsesion + "!" + znodo2 + ".";
   
   Generatablaparametros ztabla = new Generatablaparametros(request);

   String zBSE = ztabla.m4paramvalor("bSE");
   String zISE = ztabla.m4paramvalor("iSE");
   String zBM4 = ztabla.m4paramvalor("bM4");
 
 %>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zsubsesion%>" m4name="<%=zsubsesion%>"/>
<% try {
	     M4Operations m = new M4Operations(request);
	     m.setItem(zsubsesion,"SSE_REAL_TIME_PRD","","BSE",zBSE);
		 m.setItem(zsubsesion,"SSE_REAL_TIME_PRD","","ISE",zISE);
		 m.setItem(zsubsesion,"SSE_REAL_TIME_PRD","","BM4",zBM4);
		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodo%>">
	<m4:param name="GESTION_ARG" value="<%=zparametro%>"/>
</m4:exec>
<m4:outputdef>
	<m4:param name="m4name0" value="<%=zoutputdef%>"/>
</m4:outputdef>
<m4:outputdef>
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
	    zerror = m.getItem("",zsubsesion,znodo2,"","TIPO_DEBUG");
	    zredireccion = m.getItem("",zsubsesion,znodo2,"","JSP_REDIRECCION");	    
	    zv1 = m.getItem("",zsubsesion,"SSE_REAL_TIME_PRD","","ISE");
	    zv2 = m.getItem("",zsubsesion,"SSE_REAL_TIME_PRD","","BSE");
	    zv3 = m.getItem("",zsubsesion,"SSE_REAL_TIME_PRD","","BM4");
	} catch(Exception e) {}

	if ((zredireccion==null)){
	   zredireccion = "ERROR";
	}
%>

<head>
<title>Actualiza&ccedil;&atilde;o</title>
<meta http-equiv='refresh' content="2; URL=<%=zredireccion%>">
	<!-- Hoja de Estilo general. Obligatorio-->
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<!-- Librerias JavaScript. Obligatorio-->
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
</head>	
<body>
	 <!-- <=zv1%>  ;  =zv2%>  ;  =zv3%>  -->
	<%@ include file="../../sse_generico/portugues/generico_actualizar_cuerpo.jsp" %>
<m4:endpage/>
</body>
</html>






