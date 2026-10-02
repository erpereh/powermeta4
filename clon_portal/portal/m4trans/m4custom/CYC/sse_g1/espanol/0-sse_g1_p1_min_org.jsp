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
		
		<link href="/css/estilo_sse.css" 		type="text/css" rel="stylesheet" />
		<link href="/css/style_persdata.css" 	type="text/css" rel="stylesheet"/>			
		
		<script type="text/javascript" 							src="/library/jquery.js">		</script>		
		<script type="text/javascript" language="Javascript1.2"	src="/libreria/funciones_sse.js"></script>
		
		<%
			// Recibimos por cabecera la dirección seleccionada y en base a esta se cargan las áreas dependientes.
			String empleado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado");				
			String uniraiz 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"uniraiz");
			String sociedad	= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad");
			
		%>
	
 </head>
 
 <%

String zsubsesion 		= "CSP_QUIEN_ES_QUIEN";
String zmeta4object 	= "CSP_QUIEN_ES_QUIEN";
String znodoORO 		= "CSP_FICHA";  
String znodoRESP 		= "CSP_RESP";
String znodoMRESP 		= "CSP_MAIL_RESP";
String znodoPuestos   	= "CSP_PUESTOS";

String zoutputdefORO	= zsubsesion + "!" + znodoORO 	+ "[*]";
String zmoveORO			= znodoORO 	 + ":" + znodoORO 	+ "[FIRST]";  
String ziteratorORO 	= znodoORO 	 + ":" + zsubsesion + "!" + znodoORO;
String zlecturaORO 		= zsubsesion + "!" + znodoORO;
String zraizORO 		= zsubsesion + "!" + znodoORO 	+ ".";

String zmetodocarga 	= zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_ORG";

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
String zIdPuesto 		= zcomunORO + "ID_PUESTO";
String zIdUnidadRaiz	= zcomunORO + "ID_UNIDAD_RAIZ";
String zIdUnidadRaizResp= zcomunORO + "ID_UNID_RESPONSABLE";
String zTlfsFicha		= zcomunORO + "CSP_TLFS_FICHA";

//cyc: nombre foto
String zNombreFoto 		= zcomunORO + "CSP_NOMBRE_FOTO";
// Definición y campos del nodo CSP_QUIEN_ES_QUIEN
String zoutputdefQEQ 			= zsubsesion + "!" + zsubsesion 	+ "[*]";
String zmoveQEQ					= zsubsesion + ":" + zsubsesion 	+ "[FIRST]";

//Nodo Nombre Responsable
String zoutputdefRESP 			= zsubsesion + "!" + znodoRESP 	+ "[*]";
String zmoveRESP				= znodoRESP  + ":" + znodoRESP 	+ "[FIRST]";
//Nodo Mail Responsable
String zoutputdefMRESP 			= zsubsesion + "!" + znodoMRESP 	+ "[*]";
String zmoveMRESP				= znodoMRESP + ":" + znodoMRESP 	+ "[FIRST]";

// Definición nodo CSP_PUESTOS
String zoutputdefPuestos 	= zsubsesion + "!" + znodoPuestos + "[*]";
String zmovePuestos  	 	= znodoPuestos + ":" + znodoPuestos + "[FIRST]";

String mostrarDocumento = "";
String matricula 	 	= "";
String matriculaResp 	= "";
String esRrhh 		  	= "";
String esRresponsable 	= "";
String nombreResponsable 	= "";
String mailResponsable 		= "";
String telefonosResponsable = "";
String sexo = "";
String mostrarNDPT = "0";
String auxMatricula ="";

%>

<m4:startpage m4task="<%=zsubsesion%>"/>

	<m4:beginjob/>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
	
	<%		try {
				M4Operations m 	= new M4Operations(request);
		
				if(empleado != null){
					m.setItem(zsubsesion,zsubsesion,"","P_EMPLEADO",empleado);
					m.setItem(zsubsesion,zsubsesion,"","P_UNIDAD_RAIZ",uniraiz);
				}
			} catch(Exception e) {}
	%>
	<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="ARG_SOCIEDAD" value="<%=sociedad%>"/></m4:exec>

	<m4:outputdef m4alias="<%=znodoORO%>" > <m4:param name="m4name0" value="<%=zoutputdefORO%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=zsubsesion%>" > <m4:param name="m4name0" value="<%=zoutputdefQEQ%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoRESP%>" > <m4:param name="m4name0" value="<%=zoutputdefRESP%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoMRESP%>" > <m4:param name="m4name0" value="<%=zoutputdefMRESP%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoPuestos%>"> 		<m4:param name="m4name0" value="<%=zoutputdefPuestos%>"/> 		</m4:outputdef>

<m4:endjob/>

<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveORO%>"/>  </m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zsubsesion%>"/>  </m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveRESP%>"/>  </m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveMRESP%>"/>  </m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmovePuestos%>"/>  	</m4:move>

<body>

<%
int  zcountiORO  = 0;

try {   
	M4Operations m 	= new M4Operations(request);
	zcountiORO 		= m.getCountInClient(znodoORO,zsubsesion,znodoORO); 

//recogemos la foto del empleado.
zFotoEmpleado = m.getItem(znodoORO,zmeta4object,znodoORO,"","SCO_BLOB_PHOTO");
 sexo = m.getItem(znodoORO,zmeta4object,znodoORO,"","STD_ID_GENDER");
	
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
		<!--	<img src="/servlet/download_blob?task=<%=zsubsesion%>&item=CSP_QUIEN_ES_QUIEN!CSP_FICHA[<%=m4lix%>].SCO_BLOB_PHOTO" height="141" width="94" alt="foto_bbdd">-->
					
				
			  <%if (!zFotoEmpleado.equals("")){%>
					<img src="/images/empleados/<m4:item m4name='<%=zNombreFoto%>' htmlsafe="true"/>"  height="141" width="94" alt="foto_bbdd">
					
			   <%} else if(sexo.equals("2")){%>
			   
					<img height="141" width="94" alt="foto_bbdd" src="/images/empleados/Avatar_female.png "></img>
			  <% }else{ %>
					<img height="141" width="94" alt="foto_bbdd" src="/images/empleados/Avatar_male.png "></img>
			   <% } %>
		</td>
		<td>
			<table>
				
					<tr>
						<td align="right" class="fuentecampo"> Puesto:										</td>
						<%
						M4Operations q 	= new M4Operations(request);
						mostrarDocumento = "0";
						//informe DPT
						zIdPuesto = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", q.getItem(znodoORO,zmeta4object,znodoORO,"","ID_PUESTO"));
						 
						 // Recuperamos el Identificador de la persona logada y del responsable para controlar la visualización del DPT y el CV Web
						M4SessionCl zsesionDA = M4Context.getM4SessionCl(request);
						
							   
						matricula 	 = zsesionDA.getBagEntries("zIdPerson");
						matriculaResp = q.getItem(znodoORO,zmeta4object,znodoORO,"","ID_RESPONSABLE");
							   empleado		 = q.getItem(znodoORO,zmeta4object,znodoORO,"","ID_EMPLEADO");
						
						//Recuperamos si el empleado logado tiene el perfil de acceso total de RRHH
						
						esRrhh 		  = q.getItem(zmeta4object,zmeta4object,zmeta4object,"","ES_RRHH");
						esRresponsable = q.getItem(zmeta4object,zmeta4object,zmeta4object,"","ES_RESPONSABLE");
						
						//Si el puesto tiene documento asociado se muestra el documento, si no lo tiene se muestra el informe.
						mostrarDocumento = q.getItem(zmeta4object,zmeta4object,zmeta4object,"","CSP_MOSTRAR_DOC");
						mostrarDocumento = mostrarDocumento.substring(0, 1);

						//Si el puesto tiene documento asociado se muestra el documento, si no lo tiene se muestra el informe.
						mostrarDocumento = q.getItem(zmeta4object,zmeta4object,zmeta4object,"","CSP_MOSTRAR_DOC");
						mostrarDocumento = mostrarDocumento.substring(0, 1);

						//Si el puesto tiene algo en el campo csp_funcines nos trae al nuevo documento.
						int auxNDPT =0;
						try{
							mostrarNDPT = q.getItem(znodoPuestos,zmeta4object,znodoPuestos,"","CSP_FUNCIONES");
							auxNDPT = mostrarNDPT.length();
							
						}catch(NullPointerException e){
							
							auxNDPT=0;
						}		
						
						//Recuperamos el Nombre, el mail y los teléfonos del responsable
						nombreResponsable 	 = q.getItem(znodoRESP,zmeta4object,znodoRESP,"","SCO_GB_NAME");
						mailResponsable 	 = q.getItem(znodoMRESP,zmeta4object,znodoMRESP,"","STD_EMAIL");	
						telefonosResponsable = q.getItem(znodoORO,zmeta4object,znodoORO,"","CSP_TLFS_RESPONSABLE");
						String  puesto = q.getItem(znodoORO,zmeta4object,znodoORO,"","N_PUESTO");

						
						auxMatricula = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", empleado);
						%>
						
						<td align="left" class="fuentevalor">		
                              						
							<%if ((esRresponsable.equals("S")) || (esRrhh.equals("S")) || (matricula.equals(empleado))){%>
								<%if (auxNDPT>0){%>
									<!--<a class="enlacefuncional" title="DPT"  href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=<%=zIdPuesto%>" target="_blank"> <%=puesto%>  </a>-->
									<a class="enlacefuncional" title="DPT"  href="javascript:dpt();" target="_self"> <%=puesto%>  </a>
								<%}else if (mostrarDocumento.equals("1")){%>
									<a class="enlacefuncional" title="DPT" style="text-decoration: underline;"  href="/servlet/download_blob?task=<%=zsubsesion%>&item=CSP_QUIEN_ES_QUIEN!CSP_FICHA[0].CSP_DOC_PUESTO_FICHA" target="_blank"> <%=puesto%> </a>	
								<%} else{%>
									<label><%=puesto%>	</label>
								<%}%>
							<%}else{%>
								<label><%=puesto%>	</label>
							<%}%>
						</td>
					</tr> 						
					<tr><td align="right" class="fuentecampo"> Fecha de Antig&uuml;edad: 					</td><td align="left" class="fuentevalor"><m4:item m4name="<%=zFAntiguedad%>" htmlsafe="true"/></td></tr>
					<tr><td align="right" class="fuentecampo"> Centro de Trabajo: 							</td><td align="left" class="fuentevalor"><m4:item m4name="<%=zNomCentTrabajo%>" htmlsafe="true"/></td></tr>
					<tr><td align="right" class="fuentecampo"> Direcci&oacute;n del Centro de Trabajo: 		</td><td align="left" class="fuentevalor"><m4:item m4name="<%=zDirCentTrabajo%>" htmlsafe="true"/></td></tr>
					<tr><td align="right" class="fuentecampo"> eMail: 										</td><td align="left" class="fuentevalor"><a href="mailto:<m4:item m4name="<%=zMail%>" htmlsafe="true"/>"><m4:item m4name="<%=zMail%>" htmlsafe="true"/></a></td></tr>
					<tr><td align="right" class="fuentecampo"> Tel&eacute;fono / M&oacute;vil de Empresa: 	</td><td align="left" class="fuentevalor"><m4:item m4name="<%=zTlfsFicha%>" htmlsafe="true"/></td></tr>
					<%if ((esRresponsable.equals("S")) || (esRrhh.equals("S")) || (matricula.equals(empleado)) ){%>
					<tr><td align="right" class="fuentecampo"> Acceso datos CV: 							</td><td align="left" class="fuentevalor"><a href="javascript:cv();" target="_self">Informe </a></td></tr>
					<%}else{%>
					<tr><td align="right" class="fuentecampo"> Acceso datos CV: 							</td><td align="left" class="fuentevalor">&nbsp;</td></tr>
					<%}%>
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
		        <tr><td class="fuentecampo">Responsable directo							</td>
					<td class="fuentevalor">
						<script>
							var responsable = '<m4:item m4name="<%=zIdResponsable%>" htmlsafe="true"/>';							
							if (responsable.length > 0) {
								document.write("<a href=" + "javascript:m4submit('fichaempleado<%=m4lix%>')" + ">" + '<%=nombreResponsable%>'  +"</a>");								
							}else{
								document.write('');
							}
						</script>
					</td>
				</tr>
					<form id="fichaempleado<%=m4lix%>" name="fichaempleado<%=m4lix%>" method="post" action="/servlet/CheckSecurity/JSP/sse_generico/actualizar_responsable.jsp" accept-charset="UTF-8">
						<input type="hidden" id="empleado" 		name="empleado" 		value="<m4:item m4name="<%=zIdResponsable%>" 	htmlsafe="true"/>"/>
						<input type="hidden" id="uniraiz" 		name="uniraiz" 			value="<m4:item m4name="<%=zIdUnidadRaizResp%>" htmlsafe="true"/>"/>
					<form>
				
				<tr><td class="fuentecampo">eMail Responsable							</td><td class="fuentevalor"><%=mailResponsable%></td></tr>
		        <tr><td class="fuentecampo">Tfno. / M&oacute;vil de Empresa responsable </td><td class="fuentevalor"><%=telefonosResponsable%></td></tr>
			</table>	
		</td>		
	</tr>
	<%if (esRrhh.equals("S")){
		M4Operations l 	= new M4Operations(request);
		empleado = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", l.getItem(znodoORO,zmeta4object,znodoORO,"","ID_EMPLEADO"));
	%>

		<tr class="tablaestadosceldatitulo">
			<td colspan="2">
				<!-- Si es responsable de RRHH le damos acceso a la ficha completa del empleado -->
				<center><a style="font-weight: bold; background-color: #DC0028;COLOR: #ffffff;FONT-SIZE: 13px;" title="FichaCompleta"  href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_rrhh.jsp?empleado=<%=empleado%>"> Ver ficha completa del empleado </a></center>
			</td>
		<tr>
	<%}%>
</table>



</m4:loop>
<%}%>

<script> 
	var valoresSeguridad = "";
	valoresSeguridad =  valoresSeguridad + ' -- Valores de la visibilidad -- ' 				 + '\n';
	valoresSeguridad =  valoresSeguridad + 'esRresponsable   	:' + '<%=esRresponsable%>' 	 + '\n';
	valoresSeguridad =  valoresSeguridad + 'esRrhh				:' + '<%=esRrhh%>' 			 + '\n';
	valoresSeguridad =  valoresSeguridad + 'matricula			:' + '<%=matricula%>' 		 + '\n';
	valoresSeguridad =  valoresSeguridad + 'empleado			:' + '<%=empleado%>' 		 + '\n';
	valoresSeguridad =  valoresSeguridad + 'mostrarDocumento 	:' + '<%=mostrarDocumento%>' + '\n';
	//alert(valoresSeguridad);
</script>
<%if ((esRresponsable.equals("S")) || (esRrhh.equals("S")) || (matricula.equals(empleado))){%>
<script type="text/javascript">
	function dpt(){
		window.open('/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=<%=zIdPuesto%>&sociedad=<%=sociedad%>','DPT','resizable=yes,tmenubar=no,status=no,scrollbars=yes,width=700,height=1400');
		window.reload();
	}
	function cv(){
    	window.open('/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_cv.jsp?tr=<%=auxMatricula%>','CV','resizable=yes,tmenubar=no,status=no,scrollbars=yes,width=980,height=900');
    	window.reload();
  	}
</script>
<%}%>
</body>

</html>