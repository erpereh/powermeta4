<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>

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
		
		<script type="text/javascript" src="/library/jquery-2.1.3.min.js"></script>			
		
 </head>

<%

 M4SessionManager m4Session = M4Context.getSession(request);
 String sPathTempMap 		= m4Session.getPathTempMapping();
 String sPathTempURI 		= m4Session.getUserTempURI() + '/';

String zsubsesion 		= "CSP_WHO_IS_WHO";
String zmeta4object 	= "CSP_WHO_IS_WHO";
String znodoWU 			= "CSP_UNID_WIW";  
String znodoWL 			= "CSP_WL_WIW";  
String znodoORO 		= "CSP_DATOS_ORO";  
String znodoJOB 		= "CSP_JOB_WIW";  

String zmetodocarga 	= zsubsesion + "!CSP_WHO_IS_WHO.CSP_BUSQUEDA";

String zoutputdefWU 	= zsubsesion + "!" + znodoWU 	+ "[*]";
String zmoveWU			= znodoWU 	 + ":" + znodoWU 	+ "[FIRST]";  
String ziteratorWU 		= znodoWU 	 + ":" + zsubsesion + "!" + znodoWU;
String zlecturaWU 		= zsubsesion + "!" + znodoWU;
String zraizWU 			= zsubsesion + "!" + znodoWU 	+ ".";

String zcomunWU 		= znodoWU + ":"  + zsubsesion + "!"  + znodoWU  + "[&VAR.m4lix]" + ".";

String zIdWunit    		=  zcomunWU +"STD_ID_WORK_UNIT";
String zNWunit     		=  zcomunWU +"STD_N_WORK_UNIT";
String zTypeWunit  		=  zcomunWU +"STD_ID_WORK_UNIT_TYPE";
String zIdParentWunit	=  zcomunWU +"STD_ID_WORK_UNIT_PARENT";

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
String zNommbreCompleto =  zcomunORO + "NOMBRE_COMPLETO";
String zNomCentTrabajo  =  zcomunORO + "N_CENTRO_TRABAJO";
String zDirCentTrabajo  =  zcomunORO + "DIR_CENTRO_TRABAJO";
String zNomDireccion 	=  zcomunORO + "N_DIRECCION";
String zNomPuesto 		=  zcomunORO + "N_PUESTO";
String zIdCentroTrab	=  zcomunORO + "ID_CENTRO_TRABAJO";

//Campos que se usan para filtar la búsqueda

String zIdDireccion 	=  zcomunORO + "ID_DIRECCION";
String zIdArea 			=  zcomunORO + "ID_AREA";
String zIdPuesto 		=  zcomunORO + "ID_PUESTO";

String zoutputdefJOB	= zsubsesion + "!" + znodoJOB 	+ "[*]";
String zmoveJOB			= znodoJOB 	 + ":" + znodoJOB 	+ "[FIRST]";  
String ziteratorJOB 	= znodoJOB 	 + ":" + zsubsesion + "!" + znodoJOB;
String zlecturaJOB 		= zsubsesion + "!" + znodoJOB;
String zraizJOB 		= zsubsesion + "!" + znodoJOB 	+ ".";

String zcomunJOB 		= znodoJOB + ":"  + zsubsesion + "!"  + znodoJOB  + "[&VAR.m4lix]" + ".";

// Campos que se muestran como resultado
String zIdJob =  zcomunJOB + "STD_ID_JOB_CODE";
String zNJob  =  zcomunJOB + "STD_N_JOB_CODE";



%>

<m4:startpage m4task="<%=zsubsesion%>"/>

	<m4:beginjob/>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
	<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>

	<m4:outputdef m4alias="<%=znodoWU%>" > <m4:param name="m4name0" value="<%=zoutputdefWU%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoWL%>" > <m4:param name="m4name0" value="<%=zoutputdefWL%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoORO%>" > <m4:param name="m4name0" value="<%=zoutputdefORO%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoJOB%>" > <m4:param name="m4name0" value="<%=zoutputdefJOB%>"/> </m4:outputdef>

<m4:endjob/>

<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveWU%>"/>  </m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveWL%>"/>  </m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveORO%>"/>  </m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveJOB%>"/>  </m4:move>

<body>

<%
int  zcountiWU   = 0; 
int  zcountiWL   = 0;
int  zcountiORO  = 0;
int  zcountiJOB  = 0;

try {

    M4Operations m 	= new M4Operations(request);
    zcountiWU 		= m.getCount(znodoWU,zsubsesion,znodoWU);
	zcountiWL 		= m.getCount(znodoWL,zsubsesion,znodoWL);
	zcountiORO 		= m.getCount(znodoORO,zsubsesion,znodoORO);
	zcountiJOB 		= m.getCount(znodoJOB,zsubsesion,znodoJOB);
  
} catch(Exception e) {}

String  zcountvWU  = String.valueOf(zcountiWU);
String  zcountvWL  = String.valueOf(zcountiWL);
String  zcountvORO = String.valueOf(zcountiORO);
String  zcountvJOB = String.valueOf(zcountiJOB);


%>

<!-- CARGA DE LOS DESPLEGABLES -->

<!-- FIN CARGA DE LOS DESPLEGABLES-->
	
	
<!-- INICIO FORMULARIO DE BÚSQUEDA  -->	

<form method="POST" action="/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp">
	<table class="tablaestados" width="100%" cellspacing="0">
		<tr class="tablaestadosceldatitulo">
		  <td> <img src="/iconos/infos.gif"> Empleados </td>
		  <td>&nbsp;</td>
		</tr>
		<!--
		<tr >
		  <td class="fuentevalor">1er Apellido </td>
		  <td class="fuentevalor"> <input type="text" name="apellido_1" id= "apellido_1" /> </td>
		</tr>	
		<tr >
		  <td class="fuentevalor"> 2º Apellido </td>
		  <td class="fuentevalor"> <input type="text" name="apellido_2" id="apellido_2" /> </td>
		</tr>
		-->
		<tr >
		  <td class="fuentevalor"> Nombre </td>
		  <td class="fuentevalor"> 
		  
			  <!--<input type="text" name="nombre" id="nombre" /> -->
			  <SELECT name="Empleados" id="Empleados">
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
		  
		  
		  </td>
		</tr>
		<tr >
		  <td class="fuentevalor"> Direcci&oacute;n / D. Territorial </td>
		  <td class="fuentevalor"> 	  
			    <SELECT name="Direcciones" id="Direcciones">
					<OPTION VALUE="00"> Seleccione Direcci&oacute;n </OPTION>
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
							<OPTION VALUE="<m4:item m4name="<%=zTypeWunit%>" htmlsafe="true"/>-<m4:item m4name="<%=zIdWunit%>" htmlsafe="true"/>"> <m4:item m4name="<%=zNWunit%>" htmlsafe="true"/> </OPTION>												
					</m4:loop>
				<%}%>		
					
						
		  </td>
		</tr>	
		<tr >
		  <td class="fuentevalor"> Centro de Trabajo </td>
		  <td class="fuentevalor"> 
			<% 
				if (zcountiWL > 0) {
				String zposicions2 = "0";
				int    zposicion2  = 0;
			%>
				<SELECT NAME="CentrosTrabajo" id="CentrosTrabajo">
					<OPTION VALUE="00"> Seleccione Centro </OPTION> 
					<m4:loop from="0" to="<%=new Integer(new Integer(zcountvWL).intValue()-1).toString()%>">
					<%  
						zposicions2 = m4lix;
						zposicion2 = Integer.valueOf(zposicions2).intValue();				
					%>								
					
						<OPTION VALUE="<m4:item m4name="<%=zIdTypeWlocat%>" htmlsafe="true"/>-<m4:item m4name="<%=zIdWlocat%>" htmlsafe="true"/>"> <m4:item m4name="<%=zIdNWlocat%>" htmlsafe="true"/> </OPTION>
					
					</m4:loop>
			<%}%>	 
		</td>
		</tr>		 
		<tr >
		  <td class="fuentevalor"> &Aacute;rea / Sucursal </td>
		  <td class="fuentevalor"> 
		  
		  <% 
				if (zcountiWU > 0) {
				String zposicions2 = "0";
				int    zposicion2  = 0;
			%>
				<SELECT NAME="Areas" id="Areas">
					<OPTION VALUE=""> Seleccione &Aacute;rea/Sucursal </OPTION> 
					<m4:loop from="0" to="<%=new Integer(new Integer(zcountvWU).intValue()-1).toString()%>">
					<%  
						zposicions2 = m4lix;
						zposicion2 = Integer.valueOf(zposicions2).intValue();
						 	
					%>					
						
						<OPTION VALUE="<m4:item m4name="<%=zTypeWunit%>" htmlsafe="true"/>-<m4:item m4name="<%=zIdParentWunit%>" htmlsafe="true"/>"> <m4:item m4name="<%=zNWunit%>" htmlsafe="true"/> </OPTION>
						
					</m4:loop>
			<%}%>
		  
		  </td>
		</tr>
		<tr >
		  <td class="fuentevalor"> Puesto </td>
		  <td class="fuentevalor"> 
		  
			<SELECT name="puestos" id="puestos">
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
				value		="B&uacute;queda"/>
		  </center>
		  </td>		  
		</tr>	
	</table>	

</form>

<!-- FIN FORMULARIO DE BÚSQUEDA  -->	

<!-- INICIO RESULTADO DE LA BÚSQUEDA -->	
</BR>
</BR>
<table class="tablaestados" width="100%" cellspacing="0" id="tablaresultados">
	<tr class="tablaestadosceldatitulo" id = "resultados">
	  <td><m4:label m4name="<%=zNommbreCompleto%>" htmlsafe="true"/></td>	  
	  <td><m4:label m4name="<%=zNomCentTrabajo%>" htmlsafe="true"/></td>
	  <td><m4:label m4name="<%=zDirCentTrabajo%>" htmlsafe="true"/></td>
	  <td><m4:label m4name="<%=zNomDireccion%>" htmlsafe="true"/></td>
	  <td><m4:label m4name="<%=zNomPuesto%>" htmlsafe="true"/></td>
	</tr>
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
			
			<tr id="@<m4:item m4name="<%=zIdDireccion%>" htmlsafe="true"/>#<m4:item m4name="<%=zIdArea%>" htmlsafe="true"/>#<m4:item m4name="<%=zIdPuesto%>" htmlsafe="true"/>#<m4:item m4name="<%=zNommbreCompleto%>" htmlsafe="true"/>#<m4:item m4name="<%=zIdCentroTrab%>" htmlsafe="true"/>">					 
			  <td class="fuentevalor"><m4:item m4name="<%=zNommbreCompleto%>" htmlsafe="true"/></td>	  
			  <td class="fuentevalor"><m4:item m4name="<%=zNomCentTrabajo%>" htmlsafe="true"/></td>
			  <td class="fuentevalor"><m4:item m4name="<%=zDirCentTrabajo%>" htmlsafe="true"/></td>
			  <td class="fuentevalor"><m4:item m4name="<%=zNomDireccion%>" htmlsafe="true"/></td>
			  <td class="fuentevalor"><m4:item m4name="<%=zNomPuesto%>" htmlsafe="true"/></td>
			</tr>
		</m4:loop>
	<%}%>
</table>
<div id="sinresultados">
	<p> <strong> La b&uacute;squeda no obtuvo resultados. </strong> </p>
</div>

<div id="busqueda">
	
</div>

<script type="text/javascript">

$(document).ready(function(){ 
	// Ocultamos ciertos elementos en la carga inicial
	$(function() {
		
		$("#Direcciones option").each(function(i){
			//En el select de direcciones ocultamos todas las unidades que no sean direcciones
			if($(this).val().substring(2,3) != "D")  {						
				$(this).hide();
			}		
			if($(this).val()=="00")  {						
				$(this).show();
			}
		});
		$("#Areas option").each(function(i){
			//En la select de Areas ocultamos todas las unidades en la carga inicial, cambia al cambiar de dirección.		
			if($(this).val() != "") {$(this).hide();}
		});

		$("#CentrosTrabajo option").each(function(i){
			if($(this).val().indexOf("1") > 0) {$(this).hide();}
		});
		
		//Ocultamos los resultados, solo mostramos los que se elija en los filtros
		 $("#resultados").hide();
		
		$("table#tablaresultados tr").each(function(i){
			$(this).hide();
		}); 
		
		$("#sinresultados").hide();
		
		$( "#Direcciones" ).change(function () {
			// Cuando se selecciona un dirección
			var str = "";
			var largo = 0;
			
			$( "#Direcciones option:selected" ).each(function() {
				//Mostramos las áreas que tienen como unidad padre a esa dirección
				largo 	= $( this ).val().length;
				str 	= $( this ).val().substring(5,largo);
				$("#Areas option").each(function(i){
					//Ocultamos todas antes de mostrar las de la seleccion
					if($(this).val() != "") {
						$(this).hide();
					}else{
						$(this).show();
						$(this).attr("selected", "selected");
					}
				});
				$("#Areas option").each(function(i){										
						if($(this).val().substring(5,largo) == str) {						
							$(this).show();
						}
					});
			});   
		}); 	
		
		
		$( "#btnbusqueda" ).click(function() {
		
		   //Ocultamos los resultados, solo mostramos los que se elija en los filtros
		   $("#resultados").hide();
			
		   $("table#tablaresultados tr").each(function(i){
				$(this).hide();
		   }); 
		  
		  //var nombre 			= $( "#nombre").val();
		  //var apellido  		= $( "#apellido_1").val();
		  //var segundoApellido = $( "#apellido_2").val();
		  var nombre 			= $( "#Empleados      option:selected" ).val();
		  var direccion 		= $( "#Direcciones 	  option:selected" ).val();
		  var centro			= $( "#CentrosTrabajo option:selected" ).val();
		  var area 				= $( "#Areas 		  option:selected" ).val();
		  var puesto			= $( "#puestos 		  option:selected" ).val();
		  var direccionbusqueda = direccion.substring(direccion.indexOf('-')+1,direccion.length);
		  var centrobusqueda    = centro.substring(centro.indexOf('-')+1,centro.length);
		  
		  
		  
		  var parametrosBusqueda = ""
		  
		  parametrosBusqueda =  parametrosBusqueda + "Nombre 	: " 		+ nombre 			+ "\n"; 
		  parametrosBusqueda =  parametrosBusqueda + "Direccion : " 		+ direccion 		+ "\n";
		  parametrosBusqueda =  parametrosBusqueda + "Centro	: " 		+ centro			+ "\n";
		  parametrosBusqueda =  parametrosBusqueda + "Area		: " 		+ area				+ "\n";
		  parametrosBusqueda =  parametrosBusqueda + "Puesto	: " 		+ puesto			+ "\n"; 
		  parametrosBusqueda =  parametrosBusqueda + "direccionbusqueda	: " + direccionbusqueda	+ "\n"; 
		  parametrosBusqueda =  parametrosBusqueda + "centrobusqueda	: " + centrobusqueda	+ "\n"; 
		  
		  //alert(parametrosBusqueda);	  
		  
				function filtrarColumna(nombre){
					var visibles = $("table#tablaresultados tr:visible").length;
					var id 		 =  "";	
					
					if ((nombre) && (nombre!="00")){
						
						if(visibles){
							
							$('table#tablaresultados tr:visible').each(function(){			
							
								id = $(this).attr('id');
								
								if (id.indexOf(nombre) > 0){							
									$(this).show();					
								} else {
									$(this).hide();							
								}
								
							});	
						}else{
							
							$('table#tablaresultados tr').each(function(){			
							
								id = $(this).attr('id');
							
								if (id.indexOf(nombre) > 0){													
									$(this).show();														
								}else {
									$(this).hide();							
								}
							});
						}
					}
					
					
					visibles = $("table#tablaresultados tr:visible").length;
					
					if(visibles > 0) {
						
						$("#resultados").show();
						$("#sinresultados").hide();
						
					} else {
						
						$("#sinresultados").show();
					}			
				
				}
		  
		  //alert(direccionbusqueda);
		  //aplicamos los filtros que se hayan metido

		  if(nombre){filtrarColumna(nombre);}
		  //if(apellido){filtrarColumna(apellido);}
		  //if(segundoApellido){filtrarColumna(segundoApellido);}
		  if(direccion){filtrarColumna(direccion.substring(direccion.indexOf('-')+1,direccion.length));}
		  if(centro){filtrarColumna(centrobusqueda);}
		  if(area){filtrarColumna(area);}
		  if(puesto){filtrarColumna(puesto);}
		  
		});
	  
	});
});

// Ocultamos todas las unidades que no sean areas en el select "Areas"

/* $(function() {
    $("#Areas option").each(function(i){
        //alert($(this).text() + " : " + $(this).val());
		if(($(this).val().substring(2,3) != "A") || ($(this).val().substring(2,3) != "S") ) {						
			$(this).hide();
		}		
    });
}); */

 /* $(function() {
    $("#Prueba option").each(function(i){
        alert($(this).text() + " : " + $(this).val());
		if($(this).val() == "0030") {			
			alert($(this).val().substring(2,3));
			$(this).hide();
		}		
    });
});   */
 
</script>

<!-- FIN RESULTADO DE LA BÚSQUEDA -->	

<m4:endpage/>	

 </body>
	
</html>

<%
  
%>