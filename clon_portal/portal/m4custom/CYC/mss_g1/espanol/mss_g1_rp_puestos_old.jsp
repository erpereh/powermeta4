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
	<title>Filtro : Informe Puestos Unidad </title>	
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/library/jquery.js"></script>
	
</head>
<%
	String zsubsesion 			= "CSP_RP_ORO_MSS";
	String zmeta4object 		= "CSP_RP_ORO_MSS";
	String znodePuestos			= "CSP_PUESTOS_DIRECCION";
	
	String zmetodocarga 		= zsubsesion +"!CSP_RP_ORO_MSS.CSP_CARGA";

	// Definición y campos del nodo CSP_PUESTOS_DIRECCION
	String zoutputdefPuestos	= zsubsesion + "!" + znodePuestos 	+ "[*]";
	String zmovePuestos   		= znodePuestos 	 + ":" + znodePuestos 	+ "[FIRST]"; 
	
	// Variables Valores Desplegable
	String idPuesto 			= "";
	String nPuesto				= "";
	
%>
<body width="100%">

<m4:startpage m4task="<%=zsubsesion%>"/>

	<m4:beginjob/>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
	
	<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>

	<m4:outputdef m4alias="<%=znodePuestos%>" > <m4:param name="m4name0" value="<%=zoutputdefPuestos%>"/> </m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovePuestos%>"/></m4:move>

<%

// Cargamos los datos de cabecera y de proceso del informe

M4Operations m 	= new M4Operations(request);

int i 					 = 0; // Contador bucles
int zposicionPuestos    = 0; // Contador nodo unidades

try {   
	
    zposicionPuestos = m.getCountInClient(znodePuestos,zsubsesion,znodePuestos);

	
} catch(Exception e) {}

String id = "";

%>

	<h3> Seleccione un Puesto </h3>
	
	<select id="puestos">
		<option value="" selected> Seleccione Puesto </option>
			<%
				for (i = 0; i < zposicionPuestos; i++){
						
						id 		= String.valueOf(i);						
						m.moveData(znodePuestos,zmeta4object,znodePuestos,id);
						idPuesto  = m.getItem(znodePuestos,zmeta4object,znodePuestos,"","ID_PUESTO");
						nPuesto	 = m.getItem(znodePuestos,zmeta4object,znodePuestos,"","N_PUESTO");
						
						
			%>
				<option value="<%=idPuesto%>"><%=nPuesto%></option>
			<%}%>
	</select>
	
	<!-- Este formulario oculto se usa para enviar el filtro a la página que muestra el informe -->
	<form id="filtroInforme" name="filtroInforme" method="post" action="/servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp">
		<input type="hidden" id="informe" 	name="informe" 		value="PUESTOS"/>
		<input type="hidden" id="puesto" 	name="puesto"		value=""/>
		<input type="hidden" id="pagina" 	name="pagina"		value="mss_g1_rp_puestos.jsp"/>		
	</form>
	
	<script>
	
		$(document).ready(function(){			
			$("#puestos").change(function () {					
				var seleccionado = $("#puestos option:selected").val();
				$("#puesto").val(seleccionado);
				$("#filtroInforme").submit(); 
			});
		});
	</script>
</body>

</html>