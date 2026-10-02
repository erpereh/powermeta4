<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<%@ page  contentType="text/html; charset=UTF-8" pageEncoding="ISO-8859-1"  import="com.meta4.session.*, com.meta4.m4operations.*" %>

<%
//no cache
  response.setHeader("Pragma", "no-cache"); 
  response.setHeader("Cache-Control", "no-store"); 
  response.setDateHeader("Expires", -1); 
  response.setContentType("text/html;charset=ISO-8859-1");
  request.setCharacterEncoding("UTF8");

%>
<html xmlns="http://www.w3.org/1999/xhtml">
<!--

Esta página permite a los usuarios de Crédito y Caución realizar búsquedas sobre los datos
públicos de los empleados. Se basa en la búsqueda del anterior portal ORO. La página se compone de: 

1 - Un formulario de búsqueda con los campos:
	- 1er Apellido  
	- 2º Apellido   
	- Nombre   
	- Centro de Trabajo  
	- Dirección / D. Territorial  
	- Área / Sucursal   
	- Puesto  
2 - Una tabla de resultados con los siguientes datos:
	- Apellidos y Nombre  
	- Centro de Trabajo 
	- Dirección (del centro de trabajo)
	- Unidad Organizativa 
	- Puesto  
3 - Una tabla con la ficha completa del empleado. (Se creará otra página que muestre esta información)


-->

 <head>
		<title>Qui&eacute;n es Qui&eacute;n</title>
		
		<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
		<link href="/css/style_persdata.css" type="text/css" rel="stylesheet"/>	
		
		<script type="text/javascript" src="/library/jquery.js"></script>		
		<script type="text/javascript" src="/libreria/functions_quien_es_quien.js"></script>
		<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
		
		<script> 
		
			function AddKeyPress(e) { 
				// look for window.event in case event isn't passed in
				e = e || window.event;
				if (e.keyCode == 13) {
					document.getElementById('btnbusqueda').click();
					return false;
				}
				return true;
			}
		
		
			function seleccionarDireccion (idDireccion) {

				//alert("Buscamos direccion seleccionada : " + idDireccion);
				var elDireccion = document.getElementById("Direcciones");
				var options = elDireccion.options;
				for (var i = 0; i < options.length; i++) {
					if (options[i].value == idDireccion) {
						options[i].setAttribute("selected", "selected");
					}
				}

			}
			
			function seleccionarOpcion (valor,desplegable) {

				//alert("Buscamos opcion seleccionada : " + valor);
				var elDireccion = document.getElementById(desplegable);
				var options = elDireccion.options;
				for (var i = 0; i < options.length; i++) {
					if (options[i].value == valor) {
						options[i].setAttribute("selected", "selected");
					}
				}

			}		
		</script>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		
		<%
			// Recibimos por cabecera la dirección seleccionada y en base a esta se cargan las áreas dependientes.
			String direccion 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccionArea");
			String dirbusqueda 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion");
			String nombreCompleto 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombreCompleto");
			String area 			= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"area");
			String puesto 		 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto");
			String idcentro 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idcentro");
			String centro 		 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"centro");			
			String busqueda 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"busqueda");
			
			if (nombreCompleto == null) {nombreCompleto="";}			
	
		%>
		
 </head>

<%

String zsubsesion 		= "CSP_QUIEN_ES_QUIEN";
String zmeta4object 	= "CSP_QUIEN_ES_QUIEN";
String znodoWU 			= "CSP_UNID_AREA";  
String znodoWL 			= "CSP_CENTROS";  
String znodoORO 		= "CSP_ORO";  
String znodoJOB 		= "CSP_PUESTOS";
String znodoWUD  		= "CSP_UNID_DIRE";

String zmetodocarga 	= zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_BUSQUEDA";

String zoutputdefWU 	= zsubsesion + "!" + znodoWU 	+ "[*]";
String zmoveWU			= znodoWU 	 + ":" + znodoWU 	+ "[FIRST]";  
String ziteratorWU 		= znodoWU 	 + ":" + zsubsesion + "!" + znodoWU;
String zlecturaWU 		= zsubsesion + "!" + znodoWU;
String zraizWU 			= zsubsesion + "!" + znodoWU 	+ ".";

String zcomunWU 		= znodoWU + ":"  + zsubsesion + "!"  + znodoWU  + "[&VAR.m4lix]" + ".";

String zIdWunit    		=  zcomunWU + "STD_ID_WORK_UNIT_CHILD";
String zNWunit     		=  zcomunWU + "STD_N_WORK_UNIT";
String zTypeWunit  		=  zcomunWU + "STD_ID_WORK_UNIT_TYPE";
String zIdParentWunit	=  zcomunWU + "STD_ID_WORK_UNIT_PARENT";

String zoutputdefWL		= zsubsesion + "!" + znodoWL 	+ "[*]";
String zmoveWL			= znodoWL 	 + ":" + znodoWL 	+ "[FIRST]";  
String ziteratorWL 		= znodoWL 	 + ":" + zsubsesion + "!" + znodoWL;
String zlecturaWL 		= zsubsesion + "!" + znodoWL;
String zraizWL 			= zsubsesion + "!" + znodoWL 	+ ".";

String zcomunWL 		= znodoWL + ":"  + zsubsesion + "!"  + znodoWL  + "[&VAR.m4lix]" + ".";

String zIdWlocat     	=  zcomunWL + "STD_ID_WORK_LOCATION";
String zIdNWlocat    	=  zcomunWL + "STD_N_WORK_LOCATION";
String zIdTypeWlocat 	=  zcomunWL + "STD_ID_WL_TYPE";

String zoutputdefORO	= zsubsesion + "!" + znodoORO 	+ "[*]";
String zmoveORO			= znodoORO 	 + ":" + znodoORO 	+ "[FIRST]";  
String ziteratorORO 	= znodoORO 	 + ":" + zsubsesion + "!" + znodoORO;
String zlecturaORO 		= zsubsesion + "!" + znodoORO;
String zraizORO 		= zsubsesion + "!" + znodoORO 	+ ".";

String zcomunORO 		= znodoORO + ":"  + zsubsesion + "!"  + znodoORO  + "[&VAR.m4lix]" + ".";

// Campos que se muestran como resultado
String zNommbreCompleto =  zcomunORO + "SCO_GB_NAME";
String zNomCentTrabajo  =  zcomunORO + "N_CENTRO_TRABAJO";
String zDirCentTrabajo  =  zcomunORO + "DIR_CENTRO_TRABAJO";
String zNomDireccion 	=  zcomunORO + "N_DIRECCION";
String zNomArea 		=  zcomunORO + "N_AREA";
String zNomPuesto 		=  zcomunORO + "N_PUESTO";
String zIdCentroTrab	=  zcomunORO + "ID_CENTRO_TRABAJO";
String zFotoEmpleado	=  zcomunORO + "SCO_BLOB_PHOTO";
String zIdUnidadRaiz	=  zcomunORO + "ID_UNIDAD_RAIZ";

//M4GONZALOCG:
String zNUnidadRaiz =  zcomunORO + "N_UNIDAD_RAIZ";
//Campos que se usan para filtar la búsqueda

String zIdDireccion 	=  zcomunORO + "ID_DIRECCION";
String zIdArea 			=  zcomunORO + "ID_AREA";
String zIdPuesto 		=  zcomunORO + "ID_PUESTO";
String zIdEmpleado 		=  zcomunORO + "ID_EMPLEADO";

String zoutputdefJOB	= zsubsesion + "!" + znodoJOB 	+ "[*]";
String zmoveJOB			= znodoJOB 	 + ":" + znodoJOB 	+ "[FIRST]";  
String ziteratorJOB 	= znodoJOB 	 + ":" + zsubsesion + "!" + znodoJOB;
String zlecturaJOB 		= zsubsesion + "!" + znodoJOB;
String zraizJOB 		= zsubsesion + "!" + znodoJOB 	+ ".";

String zcomunJOB 		= znodoJOB   + ":"  + zsubsesion + "!"  + znodoJOB  + "[&VAR.m4lix]" + ".";

// Campos que se muestran como resultado
String zIdJob =  zcomunJOB + "STD_ID_JOB_CODE";
String zNJob  =  zcomunJOB + "STD_N_JOB_CODE";


String zoutputdefWUD 	= zsubsesion + "!" + znodoWUD 	+ "[*]";
String zmoveWUD			= znodoWUD 	 + ":" + znodoWUD 	+ "[FIRST]";  
String ziteratorWUD 	= znodoWUD 	 + ":" + zsubsesion + "!" + znodoWUD;
String zlecturaWUD 		= zsubsesion + "!" + znodoWUD;
String zraizWUD 		= zsubsesion + "!" + znodoWUD 	+ ".";

String zcomunWUD 		= znodoWUD   + ":" + zsubsesion + "!"  + znodoWUD  + "[&VAR.m4lix]" + ".";

String zIdWDunit    	=  zcomunWUD + "STD_ID_WORK_UNIT";
String zNWDunit     	=  zcomunWUD + "STD_N_WORK_UNIT";

// Definición nodo CSP_QUIEN_ES_QUIEN
String zoutputdefQEQ	= zsubsesion + "!" + zsubsesion 	+ "[*]";
String zmoveQEQ			= zsubsesion + ":" + zsubsesion 	+ "[FIRST]"; 

%>
<script> 
	//alert( 'Busqueda :' + '<%=busqueda%>');
	//alert( 'Direccion :' + '<%=direccion%>'); 
</script>
<m4:startpage m4task="<%=zsubsesion%>"/>

	<m4:beginjob/>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
	
	<%		
			// Cargamos los parámetros de búsqueda en las propiedades del Meta4Objects
			
			M4Operations m 	= new M4Operations(request);	
			
			m.setItem(zsubsesion,zsubsesion,"","P_BUSQUEDA",busqueda);		
			m.setItem(zsubsesion,zsubsesion,"","P_DIRECCIONB",dirbusqueda);
			m.setItem(zsubsesion,zsubsesion,"","P_DIRECCION",direccion);
			m.setItem(zsubsesion,zsubsesion,"","P_AREA",area);
			m.setItem(zsubsesion,zsubsesion,"","P_NOMBRE",nombreCompleto);
			m.setItem(zsubsesion,zsubsesion,"","P_PUESTO",puesto);
			m.setItem(zsubsesion,zsubsesion,"","P_CENTRO",centro);						
			
			
	%>

	<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
	
	<m4:outputdef m4alias="<%=zsubsesion%>">	<m4:param name="m4name0" value="<%=zoutputdefQEQ%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoWU%>" > 		<m4:param name="m4name0" value="<%=zoutputdefWU%>"/>  </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoWL%>" > 		<m4:param name="m4name0" value="<%=zoutputdefWL%>"/>  </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoORO%>" > 	<m4:param name="m4name0" value="<%=zoutputdefORO%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoJOB%>" > 	<m4:param name="m4name0" value="<%=zoutputdefJOB%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoWUD%>" > 	<m4:param name="m4name0" value="<%=zoutputdefWUD%>"/> </m4:outputdef>

<m4:endjob/>

<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveQEQ%>"/>	</m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveWU%>"/>   </m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveWL%>"/>   </m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveORO%>"/>  </m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveJOB%>"/>  </m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveWUD%>"/>  </m4:move>

<body>
<%
//if(busqueda != null){
%>				
<script>
	  var parametros = ""
	  
	  parametros =  parametros + "-- PARAMETROS RECOGIDOS POR REQUEST --" + "\n";
	  parametros =  parametros + "Busqueda:" 			+ '<%=busqueda%>' + "\n";
	  parametros =  parametros + "Nombre:" 				+ '<%=nombreCompleto%>' + "\n"; 
	  parametros =  parametros + "Direccion:" 			+ '<%=direccion%>' 	+ "\n";
	  parametros =  parametros + "Direccion Busqueda:" 	+ '<%=dirbusqueda%>' 	+ "\n";
	  parametros =  parametros + "IdCentro:" 			+ '<%=idcentro%>'		+ "\n";
	  parametros =  parametros + "Centro:" 				+ '<%=centro%>'			+ "\n";
	  parametros =  parametros + "Area:" 				+ '<%=area%>'			+ "\n";
	  parametros =  parametros + "Puesto:" 				+ '<%=puesto%>'			+ "\n"; 
	  
	//alert(parametros);
</script>

<%//}%>

<%
int  zcountiWU   = 0; 
int  zcountiWL   = 0;
int  zcountiORO  = 0;
int  zcountiJOB  = 0;
int  zcountiWUD  = 0;

try {
   
    zcountiWU 		= m.getCountInClient(znodoWU,zsubsesion,znodoWU);
	zcountiWL 		= m.getCountInClient(znodoWL,zsubsesion,znodoWL);
	zcountiORO 		= m.getCountInClient(znodoORO,zsubsesion,znodoORO);
	zcountiJOB 		= m.getCountInClient(znodoJOB,zsubsesion,znodoJOB);
	zcountiWUD 		= m.getCountInClient(znodoWUD,zsubsesion,znodoWUD);
  
} catch(Exception e) {}

String  zcountvWU  = String.valueOf(zcountiWU);
String  zcountvWL  = String.valueOf(zcountiWL);
String  zcountvORO = String.valueOf(zcountiORO);
String  zcountvJOB = String.valueOf(zcountiJOB);
String  zcountvWUD = String.valueOf(zcountiWUD);

//Indica si la carga es de un territorio, si es así se muestra el territorio en la columna de la unidad
String esTerritorio = m.getItem(zsubsesion,zsubsesion,zsubsesion,"","ES_TERRITORIO");

%>

<%
if(direccion != null){
%>				
<script>
	  var parametros = "" 
	  
	  parametros =  parametros + "Direccion : " 	+ '<%=direccion%>' 	+ "\n";	   
	  parametros =  parametros + "Nº Areas : " 		+ '<%=zcountiWU%>' 	+ "\n";	
	  
	  //alert(parametros);
</script>

<%}%>

<!-- INICIO FORMULARIO DE BÚSQUEDA  -->	

<!-- Este formulario oculto se usa para cargar el desplegable de areas en función de la dirección que se seleccione -->
<form id="filtroAreas" name="filtroAreas" method="post" action="ssco_g0_who_is_who.jsp">
	<input type="hidden" id="direccionArea" 		name="direccionArea" 		value=""/>	
</form>

<!-- Este formulario se usa para enviar los parámetros de búsqueda seleccionados -->
<form id="filtroBusqueda" name="filtroBusqueda" method="post" action="ssco_g0_who_is_who.jsp" accept-charset="ISO-8859-1">
	<input type="hidden" id="direccion" 		name="direccion" 		value=""/>
	<input type="hidden" id="nombreCompleto" 	name="nombreCompleto" 	value=""/>
	<input type="hidden" id="area" 				name="area" 			value=""/>
	<input type="hidden" id="puesto" 			name="puesto" 			value=""/>
	<input type="hidden" id="idcentro" 			name="idcentro" 		value=""/>
	<input type="hidden" id="centro" 			name="centro" 			value=""/>
	<input type="hidden" id="busqueda" 			name="busqueda" 		value="1"/>
</form>
	
<table class="tablaestados" width="100%" cellspacing="0">
	<tr class="tablaestadosceldatitulo">
	  <td> <img src="/iconos/infos.gif"> Empleados </td>
	  <td>&nbsp;</td>
	</tr>		
	<tr >
	  <td class="fuentevalor"> Nombre </td>
	  <td class="fuentevalor"> 
	  
		  <input type="text" name="nombre" id="nombre" value="<%=nombreCompleto%>" onkeypress="return AddKeyPress(event);" style="width: 450px"/> 
		  <!--<SELECT name="Empleados" id="Empleados">
			  <OPTION VALUE="00"> Seleccione Nombre </OPTION>
			  <% 
				if (zcountiORO > 0) {
				String zposicions2 = "0";
				int    zposicion2  = 0;
			  %>
				<m4:loop from="0" to="<%=new Integer(new Integer(zcountvORO).intValue()-1).toString()%>">
					<%  
						zposicions2 = m4lix;
						zposicion2 = Integer.valueOf(zposicions2).intValue();						 	
					%>
					
					<OPTION VALUE="<m4:item m4name="<%=zNommbreCompleto%>" htmlsafe="true"/>"> <m4:item m4name="<%=zNommbreCompleto%>" htmlsafe="true"/> </OPTION> 
						
				</m4:loop>
			  <%}%>  
			  -->
		</td>
	</tr>
	<tr >
	  <td class="fuentevalor"> Direcci&oacute;n / D. Territorial </td>
	  <td class="fuentevalor"> 	  
			<SELECT name="Direcciones" id="Direcciones" style="width: 450px">
				<OPTION VALUE="00" selected> Seleccione Direcci&oacute;n </OPTION>
				<% 
					if (zcountiWUD > 0) {
					String zposicions2 = "0";
					int    zposicion2  = 0;
				%>
					<m4:loop from="0" to="<%=new Integer(new Integer(zcountvWUD).intValue()-1).toString()%>">
						<%  
							zposicions2 = m4lix;
							zposicion2 = Integer.valueOf(zposicions2).intValue();										
							
						%>						
										
							<OPTION VALUE="<m4:item m4name="<%=zIdWDunit%>" htmlsafe="true"/>"> <m4:item m4name="<%=zNWDunit%>" htmlsafe="true"/>  </OPTION>
						
							
					</m4:loop>
				<%}%>
				<!-- Si recogemos una direccion por post la seleccionamos en el desplegable -->
				<% if (direccion != null) {%>
					<script>									
						 seleccionarOpcion ('<%=direccion%>','Direcciones'); 
					</script>
				<%}%>
				
				<% //if (dirbusqueda != null) {%>
					<script>									
						seleccionarOpcion ('<%=dirbusqueda%>','Direcciones');
					</script>
				<%//}%>
				
	  </td>
	</tr>	
	<tr >
	  <td class="fuentevalor"> Centro de Trabajo </td>
	  <td class="fuentevalor"> 
		<SELECT NAME="CentrosTrabajo" id="CentrosTrabajo" style="width: 450px">
				<OPTION VALUE="00"> Seleccione Centro </OPTION>
		<% 
			if (zcountiWL > 0) {
			String zposicions2 = "0";
			int    zposicion2  = 0;
		%>			 
				<m4:loop from="0" to="<%=new Integer(new Integer(zcountvWL).intValue()-1).toString()%>">
				<%  
					zposicions2 = m4lix;
					zposicion2 = Integer.valueOf(zposicions2).intValue();				
				%>								
				
					<OPTION VALUE="<m4:item m4name="<%=zIdTypeWlocat%>" htmlsafe="true"/>-<m4:item m4name="<%=zIdWlocat%>" htmlsafe="true"/>"> <m4:item m4name="<%=zIdNWlocat%>" htmlsafe="true"/> </OPTION>
				
				</m4:loop>
		<%}%>	 
		<script> seleccionarOpcion ('<%=idcentro%>','CentrosTrabajo'); </script>
	</td>
	</tr>		 
	<tr >
		<td class="fuentevalor"> &Aacute;rea / Sucursal </td>
		<td class="fuentevalor"> 		 
			<SELECT NAME="Areas" id="Areas" style="width: 450px">
				<OPTION VALUE=""> Seleccione &Aacute;rea/Sucursal </OPTION>
				<% 
					if (zcountiWU > 0) {
					String zposicions2 = "0";
					int    zposicion2  = 0;
				%>
					<m4:loop from="0" to="<%=new Integer(new Integer(zcountvWU).intValue()-1).toString()%>">
						<%  
							zposicions2 = m4lix;
							zposicion2 = Integer.valueOf(zposicions2).intValue();										
						
						%>				 
						
							<OPTION VALUE="<m4:item m4name="<%=zIdWunit%>" htmlsafe="true"/>"> <m4:item m4name="<%=zNWunit%>" htmlsafe="true"/>  </OPTION>
							
							
					</m4:loop>
				<%}%>
				<script> seleccionarOpcion ('<%=area%>','Areas'); </script>
		</td>
	</tr>
	<tr >
	  <td class="fuentevalor"> Puesto </td>
	  <td class="fuentevalor"> 
	  
		<SELECT name="puestos" id="puestos" style="width: 450px">
				<OPTION VALUE="00"> Seleccione Puesto </OPTION>
			<% 
				if (zcountiJOB > 0) {
				String zposicions2 = "0";
				int    zposicion2  = 0;
			%>
				<m4:loop from="0" to="<%=new Integer(new Integer(zcountvJOB).intValue()-1).toString()%>">
					<%  
						zposicions2 = m4lix;
						zposicion2 = Integer.valueOf(zposicions2).intValue();
							
					%>		
					
					<OPTION VALUE="<m4:item m4name="<%=zIdJob%>" htmlsafe="true"/>"> <m4:item m4name="<%=zNJob%>" htmlsafe="true"/> </OPTION>												
					
				</m4:loop>
			<%}%>
			<script> seleccionarOpcion ('<%=puesto%>','puestos'); </script>
	  
	  </td>
	</tr>
	<tr >
	  <td class="fuentevalor" colspan="2" align="center">  
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
			value		="B&uacute;squeda"/>
	  </center>
	  </td>		  
	</tr>	
</table>	



<!-- FIN FORMULARIO DE BÚSQUEDA  -->	

<!-- INICIO RESULTADO DE LA BÚSQUEDA -->	
</BR>
</BR>
<!-- En este formulario oculto se encarga de mantener la información cargada -->

<% 
if (zcountiORO > 0) {
String zposicions2 = "0";
int    zposicion2  = 0;
%>
	<table class="tablaestados" width="100%" cellspacing="0" id="tablaresultados">
		<tr class="tablaestadosceldatitulo" id = "resultados">
		  <td>Apellidos y Nombre</td>	  
		  <td>Centro de trabajo</td>
		  <td>Direcci&oacute;n</td>
		  <td>Unidad Organizativa</td>
		  <td>Puesto</td>
		</tr>
		
			<m4:loop from="0" to="<%=new Integer(new Integer(zcountvORO).intValue()-1).toString()%>">
				<%  
					zposicions2 = m4lix;
					zposicion2 = Integer.valueOf(zposicions2).intValue();						 	
				
				%>		
		       	
       			
				<tr id="@<m4:item m4name="<%=zIdDireccion%>" htmlsafe="true"/>#<m4:item m4name="<%=zIdArea%>" htmlsafe="true"/>#<m4:item m4name="<%=zIdPuesto%>" htmlsafe="true"/>#<m4:item m4name="<%=zNommbreCompleto%>" htmlsafe="true"/>#<m4:item m4name="<%=zIdCentroTrab%>" htmlsafe="true"/>">					 
				  <td id="ficha" class="fuentevalor">
					
					<form id="datosCargadosFiltro<%=zposicions2%>" name="datosCargadosFiltro<%=zposicions2%>" method="post"  target = "_blank" action="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp">
						<!-- Enviamos los datos del filtro seleccionado por el empleado -->
						<input type="hidden" id="empleado" 		name="empleado" 	value="<m4:item m4name="<%=zIdEmpleado%>" htmlsafe="true"/>"/> <!-- Con el empleado y la unidad raiz realiza la carga de la ficha -->
						<input type="hidden" id="empleado" 		name="uniraiz" 		value="<m4:item m4name="<%=zIdUnidadRaiz%>" htmlsafe="true"/>"/>						
						<input type="hidden" id="nombresele" 	name="nombresele" 	value="<%=nombreCompleto%>"/> <!-- Con el resto de datos solo mantenemos el filtro seleccionado -->
						<input type="hidden" id="direcsele" 	name="direcsele" 	value="<%=dirbusqueda%> "/>
						<input type="hidden" id="idcentrosele"	name="idcentrosele" value="<%=idcentro%> "/>
						<input type="hidden" id="centrosele"	name="centrosele" 	value="<%=centro%> "/>
						<input type="hidden" id="areasele" 		name="areasele" 	value="<%=area%> "/>
						<input type="hidden" id="puestosele" 	name="puestosele" 	value="<%=puesto%>"/>
					</form>					
					
					<a id="ficha"  alt="Consultar ficha del empleado" href="javascript:m4submit('datosCargadosFiltro<%=zposicions2%>')" ><m4:item m4name="<%=zNommbreCompleto%>" htmlsafe="true"/></a>
				  	
				   
				  </td>	  
				<!-- Centro de trabajo-->
				  <td class="fuentevalor"><m4:item m4name="<%=zNomCentTrabajo%>" htmlsafe="true"/></td>
				 			  
				  <!-- nombre de direccion-->
				  <td class="fuentevalor">				  
					
					<%if (esTerritorio.equals("0")) {%>
						<m4:item m4name="<%=zNomDireccion%>" htmlsafe="true"/>
					<%}%>
					<%if (esTerritorio.equals("1")) {%> <!-- Si es un territorio se muestra el área como dirección -->
						<m4:item m4name="<%=zNomArea%>" htmlsafe="true"/>
					<%}%>
				  </td>
				  <!--Unidad Organizativa -->
				  <td class="fuentevalor"><m4:item m4name="<%=zNUnidadRaiz%>" htmlsafe="true"/></td>
				  <td class="fuentevalor"><m4:item m4name="<%=zNomPuesto%>" htmlsafe="true"/></td>
				</tr>
			</m4:loop>
		
	</table>
<%} else {
		if (busqueda != null) {
%>
		<div id="sinresultados">
			<p> <strong> La b&uacute;squeda no obtuvo resultados. </strong> </p>
		</div>
	
	<%}%>

<%}%>
<div id="busqueda">
	
</div>

<!-- FIN RESULTADO DE LA BÚSQUEDA -->	

<m4:endpage/>	

 </body>
	
</html>

<%
  
%>