<%@ taglib uri="M4Tags" prefix="m4"%><%@ page import="java.io.*, java.util.*, java.net.*"%>
<!DOCTYPE html>
<%@ page  contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"  import="com.meta4.session.*, com.meta4.m4operations.*"%>
<html>

<head>
	<title>Filtro : Informe Puestos Unidad </title>	
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/combos.js" charset="UTF-8"></script>
	<script type="text/javascript" src="/library/jquery.js"></script>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<%
	String zsubsesion 			= "CSP_RP_ORO_MSS";
	String zmeta4object 		= "CSP_RP_ORO_MSS";
	String znodeUnidades		= "CSP_UNIDADES_DIRECCION";
	String combos				= "CSP_JSON_SELECT_DEPEN";
	
	String zmetodocarga 		= zsubsesion +"!CSP_RP_ORO_MSS.CSP_CARGA";

	// Definición y campos del nodo CSP_UNIDADES_DIRECCION
	String zoutputdefUnidades	= zsubsesion + "!" + znodeUnidades 	+ "[*]";
	String zmoveUnidades   		= znodeUnidades 	 + ":" + znodeUnidades 	+ "[FIRST]"; 
	
	// Variables Valores Desplegable
	String idUnidad = "";
	String nUnidad	= "";

	// Combos
	String zmetodocarga2 		= zsubsesion +"!"+combos+".CREAR_JSON";
	String zoutputdefcombos	= zsubsesion 	+ "!" + combos 	+ "[*]";
	String zmovecombos		= combos 	+ ":" + combos 	+ "[FIRST]";  
	String ziteratorcombos 	= combos 	+ ":" + zsubsesion 		+ "!" + combos;
	String zlecturacombos 	= zsubsesion 	+ "!" + combos;
	String zraizcombos 		= zsubsesion 	+ "!" + combos 	+ ".";

	String zcomuncombos 		= combos + ":"  + zsubsesion + "!"  + combos  + "[1]" + ".";
	
	String jSociedad		= zcomuncombos + "P_JSON_SOC";
	String jDireccion		= zcomuncombos + "P_JSON_DIR";
	String jAreas	 		= zcomuncombos + "P_JSON_AREA";
	String jServicios 		= zcomuncombos + "P_JSON_SERVICIO";
	String jUnidades 		= zcomuncombos + "P_JSON_UNIDAD";
	
%>
<!-- <body width="100%"  onload="cargaInicial('0','0','0','0','0');"> -->
<body width="100%">

<m4:startpage m4task="<%=zsubsesion%>"/>

	<m4:beginjob/>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
	
	<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
	<m4:exec m4method="<%=zmetodocarga2%>"></m4:exec>

	<m4:outputdef m4alias="<%=znodeUnidades%>" > <m4:param name="m4name0" value="<%=zoutputdefUnidades%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=combos%>" >		<m4:param name="m4name0" value="<%=zoutputdefcombos%>"/>  		</m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveUnidades%>"/></m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmovecombos%>"/>		</m4:move>

<%

// Cargamos los datos de cabecera y de proceso del informe

M4Operations m 	= new M4Operations(request);

int i 					 = 0; // Contador bucles
int zposicionUnidades    = 0; // Contador nodo unidades

try {   
	
    zposicionUnidades = m.getCountInClient(znodeUnidades,zsubsesion,znodeUnidades);

	
} catch(Exception e) {}

String id = "";

%>
	<!-- <div class="container">
		<div class="row">
			<div class="col-md-12">
				<table class="tablaestados" width="100%" cellspacing="0">
					<tr class="tablaestadosceldatitulo">
					  <td  colspan="3" ><strong> Estructura / B&uacute;squeda </strong></td>
					</tr>
					<tr>
						<td class="fuentevalor pl-20" width="350">Sociedad</td>
						<td class="fuentevalor pl-20" width="650">	
							<select name="sociedad" id="sociedad23" style="width: 450px" onchange="eliminarNoSelSoc()">
								
							</select>

						</td>
						<td  class="fuentevalor"> 
							<button onclick="location.href=location.href" class	="enterlogin" style	="	background-color: #DC0028;
											background-repeat: no-repeat;
											border: 1px solid #DC0028;
											border-radius: 4px;
											color: #FFFFFF;
											margin: 10px;
											max-width: 150px;
											min-height: 20px;
											min-width: 110px;">
								Limpiar filtros</button>
								 
						</td>
					</tr>

					<tr>
					  <td class="fuentevalor pl-20"> Direcci&oacute;n / D. Territorial</td>
					  <td class="fuentevalor pl-20" colspan="2" > 	  
							<SELECT name="DIR" id="DIR" style="width: 450px" onchange="eliminarNoSelDir()" >
								
							</SELECT>	
										


						</td>
					</tr>
			
					
					<tr >
					  <td class="fuentevalor" colspan="3" align="center">  
					  <center>
						<input 	name	="button" 
								type	="button" 
								class	="enterlogin" 
								id	 	="btnbusqueda" 
								style	="	background-color: #DC0028;
											background-repeat: no-repeat;
											border: 1px solid #DC0028;
											border-radius: 4px;
											color: #FFFFFF;
											margin: 10px;
											max-width: 150px;
											min-height: 30px;
											min-width: 110px;" 
							value		="B&uacute;squeda"
							onclick="enviar()" />
					  </center>
					  </td>		  
					</tr>
				</table>
			</div>				
		</div>
	</div> -->


	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<table class="tablaestados" width="100%" cellspacing="0">		
					<tr >
					  <td class="fuentevalor" colspan="3" align="center">  
					  	<div>					  		
					  		Retribucion de <b><span id="dii"></span></b>
					  		<b><a onclick="$('#filtroInforme').submit()" style="cursor: pointer; margin :10px; color: rgba(216, 0, 31, 1)">Ver</a></b>
					  	</div>
					  </td>	
					</tr>
				</table>
			</div>				
		</div>
	</div>

	<!-- Este formulario oculto se usa para enviar el filtro a la página que muestra el informe -->
	<form id="filtroInforme" name="filtroInforme" method="post" action="/servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp">
		<input type="hidden" id="informe" 	name="informe" 		value="RETUNIDADES"/>
		<input type="hidden" id="direccion" name="direccion"	value=""/>
		<input type="hidden" id="pagina" 	name="pagina"		value="mss_g1_rp_saluni.jsp"/>
	</form>
	
	<div style="display: none">
		<select id = "ARE"></select>
		<select id = "UNI"></select>
		<select id = "SER"></select>
	</div>
	<script>
	
		/*function enviar() {
			var seleccionado = $("#DIR option:selected").val();
			if (seleccionado!="00") {
				$("#direccion").val(seleccionado);
				$("#filtroInforme").submit();
			}else{
				alert("Seleccione una dirección");
			}			
		}*/


		var soc 	= '<m4:item m4name="<%=jSociedad%>" htmlsafe="false"/>';
		var dir 	= '<m4:item m4name="<%=jDireccion%>" htmlsafe="false"/>';
		var area 	= '<m4:item m4name="<%=jAreas%>" htmlsafe="false"/>';
		var uni 	= '<m4:item m4name="<%=jUnidades%>" htmlsafe="false"/>';
		var ser 	= '<m4:item m4name="<%=jServicios%>" htmlsafe="false"/>';
		
		parsear(soc,dir,area,uni,ser);

		$("#direccion").val(zdir.direccion[0].ID);
		$("#dii").html(zdir.direccion[0].VALOR);

		

	</script>
	
</body>

</html>