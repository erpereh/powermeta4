<%@ taglib uri="M4Tags" prefix="m4"%><%@ page import="java.io.*, java.util.*, java.net.*"%>
<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page  contentType="text/html; charset=UTF-8" pageEncoding="ISO-8859-1"  import="com.meta4.session.*, com.meta4.m4operations.*"%>

<%
//no cache
  response.setHeader("Pragma","no-cache"); 
  response.setHeader("Cache-Control","no-store"); 
  response.setDateHeader("Expires", -1);   
  response.setContentType("text/html;charset=ISO-8859-1");
  request.setCharacterEncoding("UTF8");

%>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<title> </title>	
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/library/jquery.js"></script>
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	
<%
	// Recibimos por cabecera la dirección o el puesto seleccionado y el informe a ejecutar
	String direccion 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion");
	String puesto 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto");
	String informe 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"informe");
	String pagina 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pagina");
	
	String zredireccion = "/servlet/CheckSecurity/JSP/mss_g1/" + pagina ;

	
	
	String zsubsesion 			= "CSP_RP_ORO_MSS";
	String zmeta4object 		= "CSP_RP_ORO_MSS";
	String zmetodocarga 		= zsubsesion +"!CSP_RP_ORO_MSS.CSP_GENERAR_INFORME";
		
%>
	
</head>

<body width="100%">

<m4:startpage m4task="<%=zsubsesion%>"/>

	<m4:beginjob/>
		<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
		<%		
			// Cargamos los parámetros del informe
			
			M4Operations m 	= new M4Operations(request);	
			
			m.setItem(zsubsesion,zsubsesion,"","CSP_PR_INFORME",informe);		
			m.setItem(zsubsesion,zsubsesion,"","CSP_PR_UNIDAD",direccion);				
			m.setItem(zsubsesion,zsubsesion,"","CSP_RP_PUESTO",puesto);
		%>
		
	
		
		<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>	
	<m4:endjob/>

	<form action="/servlet/download_blob" method="post" name="oFormDownloadBlob" id="oFormDownloadBlob">
	<input type="hidden" id="task" name="task" value="<%=zsubsesion%>" />
	<input type="hidden" id="item" name="item" value="CSP_RP_ORO_MSS!CSP_RP_ORO_MSS[0].CSP_INFORME_HTML" />
	<input type="hidden" id="no-cache" name="no-cache" value="true" />
	</form>		
	
	<script> 
		
		window.open("/servlet/download_blob?task=<%=zsubsesion%>&item=<%=zsubsesion%>!<%=zsubsesion%>[0].CSP_INFORME_HTML",'XXXXX','resizable=1, menubar=1, toolbar=1, directories=1, location=1, scrollbars=1, status=0');
	</script>
	
	<meta http-equiv='refresh' content="2; URL=<%=zredireccion%>">
	
</body>

</html>