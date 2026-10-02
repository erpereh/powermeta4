<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>

<%
//no cache

response.setHeader("Pragma", "no-cache"); 
response.setHeader("Cache-Control", "no-store"); 
response.setDateHeader("Expires", -1); 
response.setContentType("text/html;charset=ISO-8859-1");
request.setCharacterEncoding("UTF8");

//Recogemos los parámetros de búsqueda    	
String unidad		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"unidad");
String puesto		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto");
String responsable  = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"responsable");
String tipo		    = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tipo");
String busqueda	    = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"busqueda"); 
  
%>

<html xmlns="http://www.w3.org/1999/xhtml">

 <head>
		<title>Organigramas </title>
		
		<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
		
		<script type="text/javascript" src="/library/jquery.js">								</script>		
		<script type="text/javascript" src="/libreria/functions_organigrama.js">				</script>
		<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
		
		<script>
		
			function seleccionarOpcion (valor,desplegable) {

				//alert("Buscamos opcion seleccionada : " + valor);
				var elemento = document.getElementById(desplegable);
				var options = elemento.options;
				for (var i = 0; i < options.length; i++) {
					if (options[i].value == valor) {
						options[i].setAttribute("selected", "selected");
					}
				}

			}
		</script>
		
 </head>
<%
	String zsubsesion 		= "CSP_ORGANIGRAMA";
	String zmeta4object 	= "CSP_ORGANIGRAMA";
	String responsables 	= "CSP_PERSONAS_RESPONSABLES";
	String puestos 			= "CSP_PUESTOS_RESPONSABLES";
	String unidades	 		= "CSP_UNIDADES_RESPONSABLES";	
	
	String ztipocarga = "1";    
	String zmetodocarga 	= zsubsesion + "!CSP_ORGANIGRAMA.CSP_CARGA_BUSQUEDA";
	
	String zoutputdefORO	= zsubsesion + "!" + zsubsesion 	+ "[*]";
	String zmoveORO			= zsubsesion + ":" + zsubsesion 	+ "[FIRST]"; 
	String ziteratorORO 	= zsubsesion 	 + ":" + zsubsesion + "!" + zsubsesion;
	String zlecturaORO 		= zsubsesion + "!" + zsubsesion;
	String zraizORO 		= zsubsesion + "!" + zsubsesion 	+ ".";

	String zcomunORO 		= zsubsesion + ":"  + zsubsesion + "!"  + zsubsesion  + "[&VAR.m4lix]" + ".";
	
	String idUnidadORO 	= zcomunORO + "ID_UNIDAD_RAIZ";
	String unidadORO 	= zcomunORO + "N_UNIDAD_RAIZ";
	String nombreORO 	= zcomunORO + "NOMBRE";
	String apellido2ORO = zcomunORO + "APELLIDO_2";
	String apellido1ORO = zcomunORO + "APELLIDO_1";
	String puestoORO 	= zcomunORO + "N_PUESTO";
	
	String zoutputdefUnidades 	= zsubsesion + "!" + unidades 	+ "[*]";
	String zmoveUnidades		= unidades 	 + ":" + unidades 	+ "[FIRST]";  
	String ziteratorUnidades 	= unidades 	 + ":" + zsubsesion + "!" + unidades;
	String zlecturaUnidades 	= zsubsesion + "!" + unidades;
	String zraizUnidades 		= zsubsesion + "!" + unidades 	+ ".";

	String zcomunUnidades 		= unidades + ":"  + zsubsesion + "!"  + unidades  + "[&VAR.m4lix]" + ".";
	
	String personaUnidad		= zcomunUnidades + "SCO_ID_HR";
	String idUnidad 			= zcomunUnidades + "STD_ID_WORK_UNIT"; 
	String nombreUnidad 		= zcomunUnidades + "STD_N_WORK_UNIT";
	
	String zoutputdefPuestos 	= zsubsesion + "!" + puestos 	+ "[*]";
	String zmovePuestos			= puestos 	 + ":" + unidades 	+ "[FIRST]";  
	String ziteratorPuestos 	= puestos 	 + ":" + zsubsesion + "!" + puestos;
	String zlecturaPuestos 		= zsubsesion + "!" + puestos;
	String zraizPuestos 		= zsubsesion + "!" + puestos 	+ ".";

	String zcomunPuestos 		= puestos + ":"  + zsubsesion + "!"  + puestos  + "[&VAR.m4lix]" + ".";
	
	String personaPuesto		= zcomunPuestos + "SCO_ID_HR";
	String idPuesto 			= zcomunPuestos + "SCO_ID_JOB_CODE";
	String nombrePuesto			= zcomunPuestos + "STD_N_JOB_CODE";
	
		
	String zoutputdefResponsables	= zsubsesion 	+ "!" + responsables 	+ "[*]";
	String zmoveResponsables		= responsables 	+ ":" + responsables 	+ "[FIRST]";  
	String ziteratorResponsables 	= responsables 	+ ":" + zsubsesion 		+ "!" + responsables;
	String zlecturaResponsables 	= zsubsesion 	+ "!" + responsables;
	String zraizResponsables 		= zsubsesion 	+ "!" + responsables 	+ ".";

	String zcomunResponsables 		= responsables + ":"  + zsubsesion + "!"  + responsables  + "[&VAR.m4lix]" + ".";
	
	String personaResponsable		= zcomunResponsables + "STD_ID_PERSON";
	String nombreResponsable 		= zcomunResponsables + "SCO_GB_NAME";

	//Check RRHH
	String esRrhh = "";
 %>

 <m4:startpage m4task="<%=zsubsesion%>"/>

	<m4:beginjob/>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
	
	<%		
			// Cargamos los parámetros de búsqueda en las propiedades del Meta4Objects
			try {
			M4Operations m 	= new M4Operations(request);	
			
				m.setItem(zsubsesion,zsubsesion,"","CSP_P_UNIDAD",unidad);
				m.setItem(zsubsesion,zsubsesion,"","CSP_P_PUESTO",puesto);
				m.setItem(zsubsesion,zsubsesion,"","CSP_P_RESPONSABLE",responsable);				
				m.setItem(zsubsesion,zsubsesion,"","CSP_P_TIPO",tipo);
				
			} catch(Exception e) {}
			
	%>
	
	<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
	
	<m4:outputdef m4alias="<%=zsubsesion%>" > 	<m4:param name="m4name0" value="<%=zoutputdefORO%>"/>  			</m4:outputdef>
	<m4:outputdef m4alias="<%=unidades%>" > 	<m4:param name="m4name0" value="<%=zoutputdefUnidades%>"/>  	</m4:outputdef>
	<m4:outputdef m4alias="<%=puestos%>" > 		<m4:param name="m4name0" value="<%=zoutputdefPuestos%>"/>  		</m4:outputdef>
	<m4:outputdef m4alias="<%=responsables%>" > <m4:param name="m4name0" value="<%=zoutputdefResponsables%>"/>  </m4:outputdef>

<m4:endjob/>

<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveORO%>"/>   		</m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveUnidades%>"/>   	</m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmovePuestos%>"/>   	</m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveResponsables%>"/>	</m4:move>
 
<body>

<script>
	var valores_cabecera = "-- valores recibidos por get pagina --" + "\n";
	valores_cabecera = valores_cabecera +"unidad		:" + '<%=unidad%>' 			+ "\n";
	valores_cabecera = valores_cabecera +"puesto		:" + '<%=puesto%>' 			+ "\n";
	valores_cabecera = valores_cabecera +"responsable	:" + '<%=responsable%>' 	+ "\n";
	valores_cabecera = valores_cabecera +"tipo		  	:" + '<%=tipo%>' 			+ "\n";
	//alert(valores_cabecera);
</script>

<%
int  zcountiUnidades   		= 0;
int zcountiPuestos	   		= 0; 
int zcountiResponsables	   	= 0; 
int  zcountiORO   			= 0;

try {
	M4Operations m 		= new M4Operations(request);
    zcountiUnidades  	= m.getCountInClient(unidades,zsubsesion,unidades);
	zcountiPuestos  	= m.getCountInClient(puestos,zsubsesion,puestos);
	zcountiResponsables = m.getCountInClient(responsables,zsubsesion,responsables);
	zcountiORO 			= m.getCountInClient(zsubsesion,zsubsesion,zsubsesion);
	esRrhh 		  		= m.getItem(zsubsesion,zsubsesion,zsubsesion,"","ES_RRHH");
} catch(Exception e) {}

String  zcountvUnidades  	= String.valueOf(zcountiUnidades);
String  zcountvPuestos   	= String.valueOf(zcountiPuestos);
String  zcountvResponsables = String.valueOf(zcountiResponsables);
String  zcountvORO 			= String.valueOf(zcountiORO);
%>

<!-- INICIO FORMULARIO DE BÚSQUEDA  -->	


<!-- Este formulario se usa para enviar los parámetros de búsqueda seleccionados -->
<form id="filtroBusqueda" name="filtroBusqueda" method="post" action="sse_g0_organigramas.jsp" accept-charset="ISO-8859-1">
	<input type="hidden" id="unidad" 		name="unidad" 		value=""/>
	<input type="hidden" id="puesto" 		name="puesto" 		value=""/>
	<input type="hidden" id="responsable" 	name="responsable" 	value=""/>	
	<input type="hidden" id="tipo" 			name="tipo" 		value=""/>
	<input type="hidden" id="busqueda" 		name="busqueda"		value="1"/>
</form>
	
<table class="tablaestados" width="100%" cellspacing="0">
	<tr class="tablaestadosceldatitulo">
	  <td> Estructura / B&uacute;squeda </td>
	  <td>&nbsp; </td>
	</tr>
	<tr>
	  <td class="fuentevalor"> Unidad Organizativa </td>
	  <td class="fuentevalor"> 	  
			<SELECT name="unidades" id="unidades" style="width: 450px">
				<OPTION VALUE="00" selected> Seleccione Unidad Organizativa </OPTION>
				<% 
					if (zcountiUnidades > 0) {
					String zposicions2 = "0";
					int    zposicion2  = 0;
				%>
					<m4:loop from="0" to="<%=new Integer(new Integer(zcountvUnidades).intValue()-1).toString()%>">
						<%  
							zposicions2 = m4lix;
							zposicion2 = Integer.valueOf(zposicions2).intValue();										
							
						%>						
										
							<OPTION VALUE="<m4:item m4name="<%=personaUnidad%>" htmlsafe="true"/>-<m4:item m4name="<%=idUnidad%>" htmlsafe="true"/>"> <m4:item m4name="<%=nombreUnidad%>" htmlsafe="true"/>  </OPTION>
						
							
					</m4:loop>
				<%}%>
				
				<% if (unidad != null) {%>
					<script>									
						 seleccionarOpcion ('<%=unidad%>','unidades'); 
					</script>
				<%}%>
		</td>
	</tr>
	<tr>
	  <td class="fuentevalor"> Puesto </td>
	  <td class="fuentevalor"> 	  
			<SELECT name="puestos" id="puestos" style="width: 450px">
				<OPTION VALUE="00" selected> Seleccione Puesto</OPTION>
				<% 
					if (zcountiPuestos > 0) {
					String zposicions2 = "0";
					int    zposicion2  = 0;
				%>
					<m4:loop from="0" to="<%=new Integer(new Integer(zcountvPuestos).intValue()-1).toString()%>">
						<%  
							zposicions2 = m4lix;
							zposicion2 = Integer.valueOf(zposicions2).intValue();										
							
						%>						
										
							<OPTION VALUE="<m4:item m4name="<%=personaPuesto%>" htmlsafe="true"/>-<m4:item m4name="<%=idPuesto%>" htmlsafe="true"/>"> <m4:item m4name="<%=nombrePuesto%>" htmlsafe="true"/>  </OPTION>
						
							
					</m4:loop>
				<%}%>
				
				<% if (puesto != null) {%>
					<script>									
						 seleccionarOpcion ('<%=puesto%>','puestos'); 
					</script>
				<%}%>
		</td>
	</tr>
	<tr>
	  <td class="fuentevalor"> Responsable </td>
	  <td class="fuentevalor"> 	  
			<SELECT name="responsables" id="responsables" style="width: 450px">
				<OPTION VALUE="00" selected> Seleccione Responsable</OPTION>
				<% 
					if (zcountiResponsables > 0) {
					String zposicions2 = "0";
					int    zposicion2  = 0;
				%>
					<m4:loop from="0" to="<%=new Integer(new Integer(zcountvResponsables).intValue()-1).toString()%>">
						<%  
							zposicions2 = m4lix;
							zposicion2 = Integer.valueOf(zposicions2).intValue();										
							
						%>						
										
							<OPTION VALUE="<m4:item m4name="<%=personaResponsable%>" htmlsafe="true"/>"> <m4:item m4name="<%=nombreResponsable%>" htmlsafe="true"/>  </OPTION>
					</m4:loop>
				<%}%>
				
				<% if (responsable != null) {%>
					<script>									
						 seleccionarOpcion ('<%=responsable%>','responsables'); 
					</script>
				<%}%>
		</td>
	</tr>
	
	<tr>
	  <td class="fuentevalor"> Tipo </td>
	  <td class="fuentevalor"> 	  
			<SELECT name="tipos" id="tipos" style="width: 450px">
				<OPTION VALUE="1"> Estructura </OPTION>
				<OPTION VALUE="2" selected> Personas y Puestos   </OPTION>
				<% if (esRrhh.equals("S") ) {%>
					<!--<OPTION VALUE="3"> Salarial (RRHH) 		</OPTION>-->
				<%}%>
		</td>
		<% if (tipo != null) {%>
			<script>									
				 seleccionarOpcion ('<%=tipo%>','tipos'); 
			</script>
		<%}%>
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

<% if (zcountiORO > 0) { 
	String zposicions2 = "0";
	int    zposicion2  = 0;
%>

	<table class="tablaestados" width="100%" cellspacing="0" id="tablaresultados">
		<tr class="tablaestadosceldatitulo" id = "resultados">
		  <td>Unidad de Organigrama</td>	  
		  <td>Apellido y Nombre</td>
		  <td>Puesto</td>		  
		</tr>

		<m4:loop from="0" to="<%=new Integer(new Integer(zcountvORO).intValue()-1).toString()%>">
			<%  
				zposicions2 = m4lix;
				zposicion2 = Integer.valueOf(zposicions2).intValue();						 	
			%>
			<form id="datosCargadosFiltro<%=zposicions2%>" name="datosCargadosFiltro<%=zposicions2%>" method="post" action="/servlet/CheckSecurity/JSP/sse_g0/sse_g0_organigrama.jsp" target="blank">
				<input type="hidden" id="unidad"		name="unidad"		value="<m4:item m4name="<%=idUnidadORO%>" htmlsafe="true"/>"/>
				<input type="hidden" id="nombreunidad" 	name="nombreunidad"	value="<m4:item m4name="<%=unidadORO%>" htmlsafe="true"/>"/>
				<input type="hidden" id="tipo"			name="tipo" 		value="<%=tipo%>"/>
				<!--M4GONZALO: Añadimos un nuevo input para pasar la versión del navegador -->
      			 <input type="hidden" id="version"		name="version"      value = "<%=zposicions2%>" />
			</form>
			<tr>
				<td class="fuentevalor" > 
					<a id="organigrama" alt="Ver organigrama <m4:item m4name="<%=unidadORO%>" htmlsafe="true"/>" href="javascript:getVersion('datosCargadosFiltro<%=zposicions2%>');m4submit('datosCargadosFiltro<%=zposicions2%>')" >
						<m4:item m4name="<%=unidadORO%>" htmlsafe="true"/> 
					</a>
				</td>
				<td class="fuentevalor" > 
					<m4:item m4name="<%=apellido1ORO%>" htmlsafe="true"/> &nbsp;
					<m4:item m4name="<%=apellido2ORO%>" htmlsafe="true"/> , &nbsp;					
					<m4:item m4name="<%=nombreORO%>" htmlsafe="true"/>
				</td>
				<td class="fuentevalor" > <m4:item m4name="<%=puestoORO%>" htmlsafe="true"/> </td>
			</tr>
		</m4:loop>

<%}else{
	if (busqueda != null) {%>
	<p><strong>no se encontr&oacute; ninguna correspondencia.</strong></p>
<%	}
}%>
<m4:endpage/>

</body>

</html>

 	

 		
 		 
 	
 		 