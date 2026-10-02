<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>

<%
//no cache
response.setHeader("Pragma", "no-cache"); 
response.setHeader("Cache-Control", "no-store"); 
response.setDateHeader("Expires", -1); 

%>

<html xmlns="http://www.w3.org/1999/xhtml">

 <head>
		<title>Qui&eacute;n es Qui&eacute;n - Datos Empleado</title>
		
		<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
		<link href="/css/style_persdata.css" type="text/css" rel="stylesheet"/>			
		<script type="text/javascript" src="/library/jquery.js"></script>		
		<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
		
		<%
			// Recibimos por cabecera la dirección seleccionada y en base a esta se cargan las áreas dependientes.
			String empleado 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado");				
			String dirbusqueda 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direcsele");
			String nombreCompleto 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombresele");
			String area 			= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"areasele");
			String puesto 		 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puestosele");
			String idcentro 		= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idcentrosele");
			String centro 		 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"centrosele");
									
			if (dirbusqueda.equals(" ") ) 		{dirbusqueda 	 = "";}
			if (nombreCompleto.equals(" ") ) 	{nombreCompleto  = "";}
			if (area.equals(" ") ) 				{area 		     = "";}
			if (puesto.equals(" ") ) 			{puesto 		 = "";} 
			if (idcentro.equals(" ") ) 			{idcentro 	     = "";}
			if (centro.equals(" ") ) 			{centro 		 = "";} 
			
		%>
 </head>
 
 <%

String zsubsesion 		= "CSP_QUIEN_ES_QUIEN";
String zmeta4object 	= "CSP_QUIEN_ES_QUIEN";
String znodoORO 		= "CSP_FICHA";  

String zoutputdefORO	= zsubsesion + "!" + znodoORO 	+ "[*]";
String zmoveORO			= znodoORO 	 + ":" + znodoORO 	+ "[FIRST]";  
String ziteratorORO 	= znodoORO 	 + ":" + zsubsesion + "!" + znodoORO;
String zlecturaORO 		= zsubsesion + "!" + znodoORO;
String zraizORO 		= zsubsesion + "!" + znodoORO 	+ ".";

String zmetodocarga 	= zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO";

String zcomunORO 		= znodoORO + ":"  + zsubsesion + "!"  + znodoORO  + "[&VAR.m4lix]" + ".";

// Campos que se muestran como resultado
String zNommbreCompleto = zcomunORO + "NOMBRE_COMPLETO";
String zIdEmpleado 		= zcomunORO + "ID_EMPLEADO";
String zNomCentTrabajo  = zcomunORO + "N_CENTRO_TRABAJO";
String zDirCentTrabajo  = zcomunORO + "DIR_CENTRO_TRABAJO";
String zNomDireccion 	= zcomunORO + "N_DIRECCION";
String zNomPuesto 		= zcomunORO + "N_PUESTO";
String zIdCentroTrab	= zcomunORO + "ID_CENTRO_TRABAJO";
String zFotoEmpleado	= zcomunORO + "SCO_BLOB_PHOTO";
String zMail 			= zcomunORO + "CORREO";
String zFAntiguedad 	= zcomunORO + "FEC_ANTIGUEDAD";
String zNArea 			= zcomunORO + "N_AREA";
String zNCentroTrabajo 	= zcomunORO + "N_CENTRO_TRABAJO";
String zNDireccion 		= zcomunORO + "N_DIRECCION";
String zNPuesto 		= zcomunORO + "N_PUESTO";
String zNServicio 		= zcomunORO + "N_SERVICIO";
String zNTipoPuesto 	= zcomunORO + "N_TIPO_PUESTO";
String zNUnidad 		= zcomunORO + "N_UNIDAD";
String zNUnidadRaiz 	= zcomunORO + "N_UNIDAD_RAIZ";
String zIdResponsable 	= zcomunORO + "ID_RESPONSABLE";

%>

<m4:startpage m4task="<%=zsubsesion%>"/>

	<m4:beginjob/>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
	
	<%		
			M4Operations m 	= new M4Operations(request);
	
			if(empleado != null){
				m.setItem(zsubsesion,zsubsesion,"","P_EMPLEADO",empleado);
			}
	%>
	<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>

	<m4:outputdef m4alias="<%=znodoORO%>" > <m4:param name="m4name0" value="<%=zoutputdefORO%>"/> </m4:outputdef>

<m4:endjob/>

<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveORO%>"/>  </m4:move>

<body>

<%
int  zcountiORO  = 0;

try {   
	
	zcountiORO 		= m.getCountInClient(znodoORO,zsubsesion,znodoORO); 
	
} catch(Exception e) {}

String  zcountvORO = String.valueOf(zcountiORO);


%>

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

<table class="tablaestados">
	<tr class="tablaestadosceldatitulo"> 
		<td colspan="2">
			<!-- Nombre del empleado -->
			<m4:item m4name="<%=zNommbreCompleto%>" htmlsafe="true"/>
		</td>		
	<tr>
	<tr> 
		<td>
			<!-- Foto del empleado -->
			<img src="/servlet/download_blob?task=<%=zsubsesion%>&item=CSP_QUIEN_ES_QUIEN!CSP_ORO[<%=m4lix%>].SCO_BLOB_PHOTO" height="141" width="94" alt="foto_bbdd">
		</td>
		<td>
			<table>
				
					<tr><td align="right" class="fuentecampo"> Puesto:										</td><td align="left" class="fuentevalor"><m4:item m4name="<%=zNPuesto%>" htmlsafe="true"/></td></tr> 						
					<tr><td align="right" class="fuentecampo"> Fecha de Antig&uuml;edad: 					</td><td align="left" class="fuentevalor"><m4:item m4name="<%=zFAntiguedad%>" htmlsafe="true"/></td></tr>
					<tr><td align="right" class="fuentecampo"> Centro de Trabajo: 							</td><td align="left" class="fuentevalor"><m4:item m4name="<%=zNomCentTrabajo%>" htmlsafe="true"/></td></tr>
					<tr><td align="right" class="fuentecampo"> Direcci&oacute;n del Centro de Trabajo: 		</td><td align="left" class="fuentevalor"><m4:item m4name="<%=zDirCentTrabajo%>" htmlsafe="true"/></td></tr>
					<tr><td align="right" class="fuentecampo"> eMail: 										</td><td align="left" class="fuentevalor"><m4:item m4name="<%=zMail%>" htmlsafe="true"/></td></tr>
					<tr><td align="right" class="fuentecampo"> Tel&eacute;fono / M&oacute;vil de Empresa: 	</td><td align="left" class="fuentevalor">9999999999</td></tr>
					<tr><td align="right" class="fuentecampo"> Acceso datos CV: 							</td><td align="left" class="fuentevalor"><a href="https://merlin.creditoycaucion.es:444/CurriculumVitaeWeb/DescargaCV?matricula=<m4:item m4name="<%=zIdEmpleado%>" htmlsafe="true"/>" target="_blank" > Informe </a></td></tr>
				
			</table>
		</td>
	<tr>
	<tr class="tablaestadosceldatitulo"> 
		<td colspan="2"> Localizaci&oacute;n</td>
		
	<tr>
	<tr> 
		<td colspan="2">		
			<table width="100%">
				<tr><td class="fuentecampo">Direcci&oacute;n							</td><td class="fuentevalor"><m4:item m4name="<%=zNDireccion%>" htmlsafe="true"/></td></tr>
		        <tr><td class="fuentecampo">&Aacute;rea / Sucursal						</td><td class="fuentevalor"><m4:item m4name="<%=zNArea%>" htmlsafe="true"/></td></tr>
		        <tr><td class="fuentecampo">Nombre de la Unidad							</td><td class="fuentevalor"><m4:item m4name="<%=zNUnidad%>" htmlsafe="true"/></td></tr>  
		        <tr><td class="fuentecampo">Responsable directo							</td><td class="fuentevalor"><a href="javascript:m4submit('fichaempleado<%=m4lix%>')"> Responsable </a></td></tr>
		        <form id="fichaempleado<%=m4lix%>" name="fichaempleado<%=m4lix%>" method="post" action="/servlet/CheckSecurity/JSP/sse_g0/ssco_engine_who.jsp" accept-charset="UTF-8">
					<input type="hidden" id="empleado" 		name="empleado" 		value="<m4:item m4name="<%=zIdResponsable%>" htmlsafe="true"/>"/>
				<form>
				<tr><td class="fuentecampo">eMail Responsable							</td><td class="fuentevalor"></td></tr>
		        <tr><td class="fuentecampo">Tfno. / M&oacute;vil de Empresa responsable </td><td class="fuentevalor"></td></tr>
			</table>	
		</td>		
	<tr>
	<tr> 
		<td colspan="2">		
			<form id="filtroBusqueda<%=m4lix%>" name="filtroBusqueda<%=m4lix%>" method="post" action="ssco_g0_who_is_who.jsp" accept-charset="UTF-8">
				<input type="hidden" id="direccion" 		name="direccion" 		value="<%=dirbusqueda%>"/>
				<input type="hidden" id="nombreCompleto" 	name="nombreCompleto" 	value="<%=nombreCompleto%>"/>
				<input type="hidden" id="area" 				name="area" 			value="<%=area%>"/>
				<input type="hidden" id="puesto" 			name="puesto" 			value="<%=puesto%>"/>
				<input type="hidden" id="idcentro" 			name="idcentro" 		value="<%=idcentro%>"/>
				<input type="hidden" id="centro" 			name="centro" 			value="<%=centro%>"/>
				<input type="hidden" id="busqueda" 			name="busqueda" 		value="1"/>
			</form>

			<center>
					<a id="volver<%=m4lix%>" alt="Volver a los resultados de la búsqueda" href="javascript:m4submit('filtroBusqueda<%=m4lix%>')"> <img src="/iconos/icono_deshacer_mss_36_36.gif"></a>
			</center>
			
		</td>
		
	<tr>
	
</table>



</m4:loop>
<%}%>
</body>

</html>

 	

 		
 		 
 	
 		 