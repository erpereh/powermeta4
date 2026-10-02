<%@ taglib uri="M4Tags" prefix="m4"%><%@ page import="java.io.*, java.util.*, java.net.*"%>
<!DOCTYPE html>
<%@ page  contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"  import="com.meta4.session.*, com.meta4.m4operations.*"%>

<%
//no cache
 /* response.setHeader("Pragma","no-cache"); 
  response.setHeader("Cache-Control","no-store"); 
  response.setDateHeader("Expires", -1);   
  response.setContentType("text/html;charset=ISO-8859-1");
  request.setCharacterEncoding("UTF8");*/

	// Recibimos por cabecera la dirección seleccionada y en base a esta se cargan las áreas dependientes.
	String direccion 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion");
	String area 			= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"area");


%>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<title>Filtro : Informe Puestos Unidad </title>	
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<link href="/css/bootstrap/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/library/jquery.js"></script>
	<script	src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<meta charset="UTF-8">
</head>
<%
	String zsubsesion 			= "CSP_RP_ORO_MSS";
	String zmeta4object 		= "CSP_RP_ORO_MSS";
	String znodePuestos			= "CSP_PUESTOS_DIRECCION";
	String znodeDireccion		= "CSP_LISTA_DIR";
	String znodeArea			= "CSP_LISTAR_ARE";
	
	String zmetodocarga 		= zsubsesion +"!CSP_RP_ORO_MSS.CSP_CARGA_FILTRO";

	// Definición y campos del nodo CSP_PUESTOS_DIRECCION
	String zoutputdefPuestos	= zsubsesion + "!" + znodePuestos 	+ "[*]";
	String zmovePuestos   		= znodePuestos 	 + ":" + znodePuestos 	+ "[FIRST]"; 
	
	// Definición y campos del nodo CSP_PUESTOS_DIRECCION
	String zoutputdefDireccion	= zsubsesion + "!" + znodeDireccion 	+ "[*]";
	String zmoveDireccion   		= znodeDireccion 	 + ":" + znodeDireccion 	+ "[FIRST]"; 

	// Definición y campos del nodo CSP_PUESTOS_DIRECCION
	String zoutputdefArea	= zsubsesion + "!" + znodeArea 	+ "[*]";
	String zmoveArea   		= znodeArea 	 + ":" + znodeArea 	+ "[FIRST]"; 

	// Variables Valores Desplegable
	String idPuesto 			= "";
	String nPuesto				= "";
	String idDireccion 			= "";
	String nDireccion			= "";
	String idArea 				= "";
	String nArea				= "";



	if (direccion==null){
		direccion = "0";
	}
	if(area == null){
		area = "0";
	}
%>
<body width="100%">

<m4:startpage m4task="<%=zsubsesion%>"/>

	<m4:beginjob/>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
	
	<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="ARG_DIRECCION" value="<%=direccion%>"/><m4:param name="ARG_AREA" value="<%=area%>"/></m4:exec>

	<m4:outputdef m4alias="<%=znodePuestos%>" > <m4:param name="m4name0" value="<%=zoutputdefPuestos%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodeDireccion%>" > <m4:param name="m4name0" value="<%=zoutputdefDireccion%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodeArea%>" > <m4:param name="m4name0" value="<%=zoutputdefArea%>"/> </m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovePuestos%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveDireccion%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveArea%>"/></m4:move>

<%

// Cargamos los datos de cabecera y de proceso del informe

M4Operations m 	= new M4Operations(request);

int i 					 = 0; // Contador bucles
int zposicionPuestos    = 0; // Contador nodo unidades
int zposicionDireccion    = 0; // Contador nodo unidades
int zposicionArea    = 0; // Contador nodo unidades

try {   
	
    zposicionPuestos = m.getCountInClient(znodePuestos,zsubsesion,znodePuestos);
    zposicionDireccion = m.getCountInClient(znodeDireccion,zsubsesion,znodeDireccion);
    zposicionArea = m.getCountInClient(znodeArea,zsubsesion,znodeArea);

	
} catch(Exception e) {}

String id = "";

%>
<script>
	function cargar() {
		var selected = $('#direcciones').val();
		window.location.href = "./mss_g1_rp_puestos.jsp?direccion="+selected;
	}
	function cargarA() {
		var selected = $('#direcciones').val();
		var selected2 = $('#areas').val();
		window.location.href = "./mss_g1_rp_puestos.jsp?direccion="+selected+"&area="+selected2;
	}
	function seleccionarOpcion (valor,desplegable) {
		var elDireccion = document.getElementById(desplegable);
		var options = elDireccion.options;
		for (var i = 0; i < options.length; i++) {
			if (options[i].value == valor) {
				options[i].setAttribute("selected", "selected");
			}
		}

	}
</script>
<div class="container">
<div class="row"><div class="col-md-12">

<% if (zposicionDireccion!=0){%>

	<h3> Seleccione un Direccion </h3>
	
	<select style="margin-left: 20px;" id="direcciones" onchange="cargar()">
		<option value=""> Seleccione Direccion </option>
			<%
				for (i = 0; i < zposicionDireccion; i++){
						
						id 		= String.valueOf(i);						
						m.moveData(znodeDireccion,zmeta4object,znodeDireccion,id);
						idDireccion  = m.getItem(znodeDireccion,zmeta4object,znodeDireccion,"","ID_DIRECCION");
						nDireccion	 = m.getItem(znodeDireccion,zmeta4object,znodeDireccion,"","N_DIRECCION");
						
						
			%>
				<option value="<%=idDireccion%>"><%=nDireccion%></option>
			<%}%>
	</select>
	<% if (direccion != null) {%>
		<script>									
			 seleccionarOpcion ('<%=direccion%>','direcciones'); 
		</script>
	<%}%>
	<h3> Seleccione un &Aacute;rea </h3>
	
	<select style="margin-left: 20px;" id="areas" onchange="cargarA()">
		<option value=""> Seleccione &Aacute;rea </option>
			<%
				for (i = 0; i < zposicionArea; i++){
						
						id 		= String.valueOf(i);						
						m.moveData(znodeArea,zmeta4object,znodeArea,id);
						idArea  = m.getItem(znodeArea,zmeta4object,znodeArea,"","ID_AREA");
						nArea	 = m.getItem(znodeArea,zmeta4object,znodeArea,"","N_AREA");
						
						
			%>
				<option value="<%=idArea%>"><%=nArea%></option>
			<%}%>
	</select>
	<% if (area != null) {%>
		<script>									
			 seleccionarOpcion ('<%=area%>','areas'); 
		</script>
	<%}%>
<%}%>
	<h3> Seleccione un Puesto </h3>
	
	<select style="margin-left: 20px;" id="puestos">
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
</div></div></div>
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