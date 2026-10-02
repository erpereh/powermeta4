<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>

<html xmlns="http://www.w3.org/1999/xhtml">

 <head>
		<title>Qui&eacute;n es Qui&eacute;n - Datos Empleado</title>
		
		<link href="/css/estilo_sse.css" 	 type="text/css" rel="stylesheet" />
		<link href="/css/style_persdata.css" type="text/css" rel="stylesheet" />			
		
		<script type="text/javascript" 							src="/library/jquery.js"		></script>
		<script type="text/javascript" language="Javascript1.2"	src="/libreria/funciones_sse.js"></script>		
		
		<%
			 // Recuperamos el Identificador de la persona
			M4SessionCl zsesionDA = M4Context.getM4SessionCl(request);
			String empleado = zsesionDA.getBagEntries("zIdPerson");
		
		%>						

		<script>
			function formatoFecha (fecha) {
				//1968-12-29 00:00:00 
				
				var flocal = "";
				flocal = fecha;
				var anio = flocal.substring(0,flocal.indexOf("-"));
				flocal = flocal.substring(flocal.indexOf("-") + 1,flocal.length);
				var mes  = flocal.substring(0,flocal.indexOf("-"));
				flocal = flocal.substring(flocal.indexOf("-") + 1,flocal.length);
				var dia  = flocal.substring(0,flocal.indexOf(" "));								
				if ((dia=='01') && (mes=='01')&&(anio=='1800')){
					document.write(' ');
				}else{
					document.write(dia + '/' + mes + '/' + anio);
				}
				
			}
			
			function guion (cadena) {
				return cadena.replace('?','-');
			}
			
			function OpenReport(URL) {
				  var sOptions;
				  var wOpen;
				  
				  sOptions = "toolbar=yes,scrollbars=yes,directories=no,status=yes,menubar=yes,resizable=yes";
				  sOptions = sOptions + ",width=" + (screen.availWidth - 10).toString();
				  sOptions = sOptions + ",height=" + (screen.availHeight - 122).toString();
				  sOptions = sOptions + ",screenX=0,screenY=0,left=0,top=0";
				  
				  wOpen = window.open(URL,"report",sOptions);
				  wOpen.focus();
				  wOpen.moveTo(0,0);
				  wOpen.resizeTo(screen.availWidth,screen.availHeight);
			}


			
		</script>
		
 </head>
 
 <%

String zsubsesion 		= "CSP_QUIEN_ES_QUIEN";
String zmeta4object 	= "CSP_QUIEN_ES_QUIEN";
String znodoORO 		= "CSP_FICHA_DETALLADA";  
String znodoCde			= "CSP_DATOS_PAGO_EMPLEADO";
String znodoCbe			= "CSP_CUENTA_BANCARIA_EMPLEADO";
String znodoCbb			= "CSP_CUENTA_BENEFICIARIO";
String znodoDir			= "CSP_DIRECCION_EMPLEADO";
String znodoMail    	= "CSP_MAIL_PERSONAL";
String znodoMailResp	= "CSP_MAIL_RESPONSABLE";
String znodoTelef  	    = "CSP_TELEFONO_PERSONAL";
String znodoFamIRPF    	= "CSP_FAM_IRPF";
String znodoTelefEmp   	= "CSP_TELEFONO_EMPRESA";
String znodoTelefResp  	= "CSP_TELEFONO_RESPONSABLE";
String znodoGrupNivel 	= "CSP_GRUPO_NIVEL";
String znodoResponsable = "CSP_RESPONSABLE";
String znodoPuestos   	= "CSP_PUESTOS";

// Definición nodo CSP_QUIEN_ES_QUIEN
String zoutputdefQEQ	= zsubsesion + "!" + zsubsesion 	+ "[*]";
String zmoveQEQ			= zsubsesion + ":" + zsubsesion 	+ "[FIRST]"; 

// Definición nodo CSP_FICHA_DETALLADA
String zoutputdefORO	= zsubsesion + "!" + znodoORO 	+ "[*]";
String zmoveORO			= znodoORO 	 + ":" + znodoORO 	+ "[FIRST]";  

// Definición nodo CSP_DATOS_PAGO_EMPLEADO
String zoutputdefCde    = zsubsesion + "!" + znodoCde 	+ "[*]";
String zmoveCde			= znodoCde 	 + ":" + znodoCde 	+ "[FIRST]"; 

// Definición nodo CSP_CUENTA_BANCARIA_EMPLEADO
String zoutputdefCbe	= zsubsesion + "!" + znodoCbe 	+ "[*]";
String zmoveCbe			= znodoCbe 	 + ":" + znodoCbe 	+ "[FIRST]";  

// Definición nodo CSP_DIRECCION_EMPLEADO
String zoutputdefDir	= zsubsesion + "!" + znodoDir 	+ "[*]";
String zmoveDir			= znodoDir 	 + ":" + znodoDir 	+ "[FIRST]";

// Definición nodo CSP_CUENTA_BENEFICIARIO
String zoutputdefCbb	= zsubsesion + "!" + znodoCbb 	+ "[*]";
String zmoveCbb			= znodoCbb 	 + ":" + znodoCbb 	+ "[LAST]";

// Definición nodo CSP_MAIL_PERSONAL
String zoutputdefMail	= zsubsesion + "!" + znodoMail 	+ "[*]";
String zmoveMail   	    = znodoMail  + ":" + znodoMail 	+ "[LAST]";

// Definición nodo CSP_MAIL_RESPONSABLE
String zoutputdefMailResp	= zsubsesion 	+ "!" + znodoMailResp 	+ "[*]";
String zmoveMailResp   	    = znodoMailResp + ":" + znodoMailResp 	+ "[FIRST]";

// Definición nodo CSP_TELEFONO_PERSONAL
String zoutputdefTelef	= zsubsesion + "!" + znodoTelef + "[*]";
String zmoveTelef   	= znodoTelef + ":" + znodoTelef + "[FIRST]";

// Definición nodo CSP_FAM_IRPF
String zoutputdefFamIRPF = zsubsesion + "!" + znodoFamIRPF + "[*]";
String zmoveFamIRPF   	 = znodoFamIRPF + ":" + znodoFamIRPF + "[FIRST]";

// Definición nodo CSP_TELEFONO_EMPRESA
String zoutputdefTelefEmp = zsubsesion + "!" + znodoTelefEmp + "[*]";
String zmoveTelefEmp   	 = znodoTelefEmp + ":" + znodoTelefEmp + "[FIRST]";

// Definición nodo CSP_TELEFONO_RESPONSABLE
String zoutputdefTelefResp = zsubsesion + "!" + znodoTelefResp + "[*]";
String zmoveTelefResp   	 = znodoTelefResp + ":" + znodoTelefResp + "[FIRST]";

// Definición nodo CSP_GRUPO_NIVEL
String zoutputdefGrupNivel = zsubsesion + "!" + znodoGrupNivel + "[*]";
String zmoveGrupNivel   	 = znodoGrupNivel + ":" + znodoGrupNivel + "[FIRST]";

// Definición nodo CSP_RESPONSABLE
String zoutputdefResponsable 	= zsubsesion + "!" + znodoResponsable + "[*]";
String zmoveResponsable  	 	= znodoResponsable + ":" + znodoResponsable + "[FIRST]";

// Definición nodo CSP_PUESTOS
String zoutputdefPuestos 	= zsubsesion + "!" + znodoPuestos + "[*]";
String zmovePuestos  	 	= znodoPuestos + ":" + znodoPuestos + "[FIRST]";

String zmetodocarga 	= zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO_DETALLE";

// Campos que se muestran como resultado

String nombreCompleto			=  "";
String puesto    				=  "";
String idPuesto 				=  "";
String antiguedad				=  "";
String centroTrabajo			=  "";
String direccionCentrotrabajo 	=  "";
String eMail 					=  "";
String telefonoEmpresa   		=  "";
String unidadDireccion			=  "";
String unidadArea				=  "";
String nombreUnidad				=  "";
String responsable				=  "";
String emailResponsable			=  "";
String telefonoResponsable		=  "";
String matricula				=  "";
String grupoNivel				=  "";
String dni						=  "";
String numeroSS					=  "";
String domicilio				=  "";
String telefonoPersonal			=  "";
String emailPersonal			=  "";
String cuentaPrincipal			=  "";
String cuentaBeneficiario		=  "";
String fechaNacimiento			=  "";
String nombreIRPF				=  "";
String fechaNacimientoIRPF		=  "";
String tipoRelacionIRPF			=  "";
String mostrarNDPT = "0";


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

	<m4:outputdef m4alias="<%=zsubsesion%>">		<m4:param name="m4name0" value="<%=zoutputdefQEQ%>"/> 		</m4:outputdef>
	<m4:outputdef m4alias="<%=znodoORO%>"> 			<m4:param name="m4name0" value="<%=zoutputdefORO%>"/> 		</m4:outputdef>
	<m4:outputdef m4alias="<%=znodoCde%>"> 			<m4:param name="m4name0" value="<%=zoutputdefCde%>"/> 		</m4:outputdef>
	<m4:outputdef m4alias="<%=znodoCbe%>"> 			<m4:param name="m4name0" value="<%=zoutputdefCbe%>"/> 		</m4:outputdef>
	<m4:outputdef m4alias="<%=znodoCbb%>"> 			<m4:param name="m4name0" value="<%=zoutputdefCbb%>"/> 		</m4:outputdef>
	<m4:outputdef m4alias="<%=znodoDir%>"> 			<m4:param name="m4name0" value="<%=zoutputdefDir%>"/> 		</m4:outputdef>
	<m4:outputdef m4alias="<%=znodoMail%>"> 		<m4:param name="m4name0" value="<%=zoutputdefMail%>"/> 		</m4:outputdef>
	<m4:outputdef m4alias="<%=znodoMailResp%>"> 	<m4:param name="m4name0" value="<%=zoutputdefMailResp%>"/> 	</m4:outputdef>
	<m4:outputdef m4alias="<%=znodoTelefResp%>"> 	<m4:param name="m4name0" value="<%=zoutputdefTelefResp%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoTelefEmp%>"> 	<m4:param name="m4name0" value="<%=zoutputdefTelefEmp%>"/> 	</m4:outputdef>
	<m4:outputdef m4alias="<%=znodoGrupNivel%>"> 	<m4:param name="m4name0" value="<%=zoutputdefGrupNivel%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoFamIRPF%>"> 		<m4:param name="m4name0" value="<%=zoutputdefFamIRPF%>"/> 	</m4:outputdef>
	<m4:outputdef m4alias="<%=znodoTelef%>"> 		<m4:param name="m4name0" value="<%=zoutputdefTelef%>"/> 	</m4:outputdef>
	<m4:outputdef m4alias="<%=znodoResponsable%>"> 		<m4:param name="m4name0" value="<%=zoutputdefResponsable%>"/> 	</m4:outputdef>
	<m4:outputdef m4alias="<%=znodoPuestos%>"> 		<m4:param name="m4name0" value="<%=zoutputdefPuestos%>"/> 		</m4:outputdef>
<m4:endjob/>

<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveQEQ%>"/>  		</m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveORO%>"/>  		</m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveCde%>"/>  		</m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveCbe%>"/>  		</m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveCbb%>"/>  		</m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveDir%>"/>  		</m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveMail%>"/>  		</m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveMailResp%>"/>  	</m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveTelefResp%>"/>  	</m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveTelefEmp%>"/>  	</m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveGrupNivel%>"/>  	</m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveFamIRPF%>"/>  	</m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveTelef%>"/>  		</m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveResponsable%>"/>  		</m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmovePuestos%>"/>  	</m4:move>

<body>

<%

M4Operations q 	= new M4Operations(request);

// Cargamos los datos de cabecera y de proceso del informe

int	numfichas	    = 0; // Contador ficha
int numcuentas		= 0; // Contador cuenta bancaria   
int numBenef		= 0; // Contador cuenta Beneficiaria
int numDirecciones	= 0; // Contador direcciones
int numMail			= 0; // Contador mail personal
int numMailResp		= 0; // Contador mail responsable
int numTelefonoPer	= 0; // Contador telefono personal
int numTelefEmp		= 0; // Contador teléfono de empresa
int numTelefResp	= 0; // Contador teléfono responsable
int numGrupNiv		= 0; // Contador Grupo Nivel
int numFam			= 0; // Contador familiares para el IRPF
int numResponsable	= 0; // Contador para el resposable

numfichas	    = q.getCountInClient(znodoORO,zsubsesion,znodoORO);
numcuentas		= q.getCountInClient(znodoCbe,zsubsesion,znodoCbe);
numBenef		= q.getCountInClient(znodoCbb,zsubsesion,znodoCbb);
numDirecciones	= q.getCountInClient(znodoDir,zsubsesion,znodoDir);
numMail			= q.getCountInClient(znodoMail,zsubsesion,znodoMail);
numMailResp		= q.getCountInClient(znodoMailResp,zsubsesion,znodoMailResp);
numTelefonoPer	= q.getCountInClient(znodoTelef,zsubsesion,znodoTelef);
numTelefEmp		= q.getCountInClient(znodoTelefEmp,zsubsesion,znodoTelefEmp);
numTelefResp	= q.getCountInClient(znodoTelefResp,zsubsesion,znodoTelefResp);
numGrupNiv		= q.getCountInClient(znodoGrupNivel,zsubsesion,znodoGrupNivel);
numFam			= q.getCountInClient(znodoFamIRPF,zsubsesion,znodoFamIRPF);	 
numResponsable  = q.getCountInClient(znodoResponsable,zsubsesion,znodoResponsable);

%>

<% 
	if (numfichas>0) {
%>
<table class="tablaestados" width="50%">
	<tr class="tablaestadosceldatitulo"> 
		<td colspan="2">
			<!-- Nombre del empleado -->
			<% 
			 nombreCompleto = q.getItem(znodoORO,zmeta4object,znodoORO,"","NOMBRECOMPLETO");
			%>
			<%=nombreCompleto%>
		</td>		
	<tr>
	<tr> 
		<td>
			<!-- Foto del empleado -->
			<img src="/servlet/download_blob?task=<%=zsubsesion%>&item=CSP_QUIEN_ES_QUIEN!CSP_FICHA_DETALLADA[0].SCO_BLOB_PHOTO" height="141" width="94" alt="foto_bbdd">
		</td>
		<td>
			<table width="100%" height="100%" >
					<% 
						puesto    				= q.getItem(znodoORO,zmeta4object,znodoORO,"","N_PUESTO");
						antiguedad				= q.getItem(znodoORO,zmeta4object,znodoORO,"","FEC_ANTIGUEDAD");
						centroTrabajo			= q.getItem(znodoORO,zmeta4object,znodoORO,"","N_CENTRO_TRABAJO");
						direccionCentrotrabajo 	= q.getItem(znodoORO,zmeta4object,znodoORO,"","DIR_CENTRO_TRABAJO");
						eMail 					= q.getItem(znodoORO,zmeta4object,znodoORO,"","CORREO");
						
						//informe DPT
						idPuesto = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", q.getItem(znodoORO,zmeta4object,znodoORO,"","ID_PUESTO"));					
							   
						if (numTelefEmp>0){						
							//telefonoEmpresa   	= q.getItem(znodoTelefEmp,zmeta4object,znodoTelefEmp,"","STD_PHONE");
							telefonoEmpresa   	= q.getItem(znodoORO,zmeta4object,znodoORO,"","CSP_TLFS_EMPLEADO");
						}
						
						//Si el puesto tiene documento asociado se muestra el documento, si no lo tiene se muestra el informe.
						String mostrarDocumento = q.getItem(zmeta4object,zmeta4object,zmeta4object,"","CSP_MOSTRAR_DOC");
						//trocemos el número que nos trae
						mostrarDocumento = mostrarDocumento.substring(0, 1);	
						//Si el puesto tiene algo en el campo csp_funcines nos trae al nuevo documento.
						int auxNDPT =0;
						try{
							mostrarNDPT = q.getItem(znodoPuestos,zmeta4object,znodoPuestos,"","CSP_FUNCIONES");
							auxNDPT = mostrarNDPT.length();
						}catch(NullPointerException e){
							auxNDPT=0;
						}					
					%>
				
					<tr>
						<td align="right" class="fuentecampo"> Puesto:</td>
						<td align="left" class="fuentevalor">
							<%if (auxNDPT>0){ %>	
								<a class="enlacefuncional" title="DPT"  href="javascript:dpt();" target="_self"> <%=puesto%>  </a>
							<%}else if (mostrarDocumento.equals("1")){%>
								<a class="enlacefuncional" title="DPT" style="text-decoration: underline;"  href="/servlet/download_blob?task=<%=zsubsesion%>&item=CSP_QUIEN_ES_QUIEN!CSP_FICHA[0].CSP_DOC_PUESTO_FICHA" target="_blank"> <%=puesto%></a>	
							<%} else{%>
								<label><%=puesto%>	</label>
							<%}%>
								
						</td>
					</tr> 						
					<tr><td align="right" class="fuentecampo"> Fecha de Antig&uuml;edad: </td><td align="left" class="fuentevalor">
						<script> 
							formatoFecha('<%=antiguedad%>'); 
						</script>	
						</td>
					</tr>
					<tr><td align="right" class="fuentecampo"> Centro de Trabajo: 							</td><td align="left" class="fuentevalor"><%=centroTrabajo%>				</td></tr>
					<tr><td align="right" class="fuentecampo"> Direcci&oacute;n del Centro de Trabajo: 		</td><td align="left" class="fuentevalor"><%=direccionCentrotrabajo%> 	</td></tr>
					<tr><td align="right" class="fuentecampo"> eMail: 										</td><td align="left" class="fuentevalor"><a href="mailto:<%=eMail%>"><%=eMail%></a> 					</td></tr>
					<tr><td align="right" class="fuentecampo"> Tel&eacute;fono / M&oacute;vil de Empresa: 	</td><td align="left" class="fuentevalor"><%=telefonoEmpresa%>  		</td></tr>
			</table>
		</td>
	<tr>
	<tr class="tablaestadosceldatitulo"> 
		<td colspan="2"> Localizaci&oacute;n</td>
		
	<tr>
	<tr> 
		<td colspan="2">		
			<table width="100%">
				<%
					
					unidadDireccion			= q.getItem(znodoORO,zmeta4object,znodoORO,"","N_DIRECCION");
					unidadArea				= q.getItem(znodoORO,zmeta4object,znodoORO,"","N_AREA");
					nombreUnidad			= q.getItem(znodoORO,zmeta4object,znodoORO,"","N_UNIDAD_RAIZ");
					if (numResponsable>0){
						responsable			= q.getItem(znodoResponsable,zmeta4object,znodoResponsable,"","NOMBRECOMPLETO");
					}
					if (numMailResp>0){
						emailResponsable	= q.getItem(znodoMailResp,zmeta4object,znodoMailResp,"","STD_EMAIL");
					}
					if(numTelefResp>0){
						//telefonoResponsable	= q.getItem(znodoTelefResp,zmeta4object,znodoTelefResp,"","STD_PHONE");
						telefonoResponsable	= q.getItem(znodoORO,zmeta4object,znodoORO,"","CSP_TLFS_RESPONSABLE");
					}
				
				%>
			
				<tr><td class="fuentecampo">Direcci&oacute;n							</td><td class="fuentevalor"><%=unidadDireccion%>		</td></tr>
		        <tr><td class="fuentecampo">&Aacute;rea / Sucursal						</td><td class="fuentevalor"><%=unidadArea%>			</td></tr>
		        <tr><td class="fuentecampo">Nombre de la Unidad							</td><td class="fuentevalor"><%=nombreUnidad%>			</td></tr>  
		        <tr><td class="fuentecampo">Responsable directo							</td><td class="fuentevalor"><%=responsable%>			</td></tr>
		        <tr><td class="fuentecampo">eMail Responsable							</td><td class="fuentevalor"><a href="mailto:<%=emailResponsable%>"><%=emailResponsable%> </a>	</td></tr>
		        <tr><td class="fuentecampo">Tfno. / M&oacute;vil de Empresa responsable </td><td class="fuentevalor"><%=telefonoResponsable%>	</td></tr>
			</table>	
		</td>		
	<tr>
	<tr class="tablaestadosceldatitulo"> 
		<td colspan="2"> Datos Personales</td>
	<tr>
	<tr> 
		<td colspan="2">
			<%
			
				matricula				=  empleado;
				if(numGrupNiv>0) {
					grupoNivel			=  q.getItem(znodoGrupNivel,zmeta4object,znodoGrupNivel,"","SSP_NM_CATEGORIA");	
				}
				dni						=  q.getItem(znodoORO,zmeta4object,znodoORO,"","STD_SSN");	
				numeroSS				=  q.getItem(znodoORO,zmeta4object,znodoORO,"","NUM_AFILIACION_SS");	
				if(numDirecciones>0){
					domicilio			=  q.getItem(znodoDir,zmeta4object,znodoDir,"","SCO_GB_ADDRESS");	
				}
				if(numTelefonoPer>0){
					//telefonoPersonal	=  q.getItem(znodoTelef,zmeta4object,znodoTelef,"","STD_PHONE");	

					for(int e=0; e<numTelefonoPer; e++){
						telefonoPersonal +=  q.getItem(znodoTelef,zmeta4object,znodoTelef,Integer.toString(e),"STD_PHONE");
						if(e<numTelefonoPer-1){
							telefonoPersonal += " / ";
						}
					}


				}
				//emailPersonal			=  q.getItem(znodoORO,zmeta4object,znodoORO,"","CORREO");	
				emailPersonal			=  q.getItem(znodoMail,zmeta4object,znodoMail,"","STD_EMAIL");	
				
				if(numcuentas>0) {
					//cuentaPrincipal		=  q.getItem(znodoCbe,zmeta4object,znodoCbe,"","SCO_GB_BANK");
					cuentaPrincipal	    =  q.getItem(znodoCbe,zmeta4object,znodoCbe,"","SCO_GB_IBAN");
				}
				if(numBenef>0){
					//cuentaBeneficiario	=  q.getItem(znodoCbb,zmeta4object,znodoCbb,"","SCO_GB_BANK");	
					cuentaBeneficiario	=  q.getItem(znodoCbb,zmeta4object,znodoCbb,"","SCO_GB_IBAN");
				}
				fechaNacimiento			=  q.getItem(znodoORO,zmeta4object,znodoORO,"","STD_DT_BIRTH");	
				String estadoCivil 			=  q.getItem(znodoORO,zmeta4object,znodoORO,"","STD_N_MARITAL_STAT");	
				//String estadoCivil 			=  q.getItem(znodoORO,zmeta4object,znodoORO,"","ID_ESTADO_CIVIL");	
			
			%>
			
			<table width="100%">
				<tr><td class="fuentecampo">Num. de Matricula					</td><td class="fuentevalor"><%=matricula%>				</td></tr>
		        <tr><td class="fuentecampo">Grupo / Nivel						</td><td class="fuentevalor"><script> document.write(guion('<%=grupoNivel%>')); </script> </td></tr>
		        <tr><td class="fuentecampo">DNI									</td><td class="fuentevalor"><%=dni%>					</td></tr>  
		        <tr><td class="fuentecampo">Num. Afiliaci&oacute;n a SS:		</td><td class="fuentevalor"><%=numeroSS%>				</td></tr>
		        <tr><td class="fuentecampo">Domicilio:							</td><td class="fuentevalor"><%=domicilio%>				</td></tr>
		        <tr><td class="fuentecampo">Tel&eacute;fono Personal 			</td><td class="fuentevalor"><%=telefonoPersonal%>		</td></tr>
				<tr><td class="fuentecampo">eMail Personal						</td><td class="fuentevalor"><a href="mailto:<%=emailPersonal%>"><%=emailPersonal%>	</a>		</td></tr>
				<tr><td class="fuentecampo">Cuenta Bancaria Principal			</td><td class="fuentevalor"><%=cuentaPrincipal%>		</td></tr>
				<tr><td class="fuentecampo">Cuenta Bancaria Beneficiaria		</td><td class="fuentevalor"><%=cuentaBeneficiario%>	</td></tr>
				<tr><td class="fuentecampo">Estado Civil 						</td><td class="fuentevalor"><%=estadoCivil%>	</td></tr>
				<tr><td class="fuentecampo">Fecha de Nacimiento					</td><td class="fuentevalor"> 
					<script> 
						formatoFecha('<%=fechaNacimiento%>'); 
					</script>					
					</td>
				</tr>
			</table>	
		</td>		
	<tr>
	<% if (numFam > 0) {%>
	<tr class="tablaestadosceldatitulo"> 
		<td colspan="2"> Familiares </td>
	<tr>
	<tr> 
		<td colspan="2">		
			<table>
				<tr>
					<td class="fuentecampo">Apellidos y Nombre</td>					
					<td class="fuentecampo">Tipo Relaci&oacute;n</td>
					<td class="fuentecampo">Fecha de Nacimiento</td>
				</tr>
				<%
				
						String id = "";
						int i = 0;
																		
						for (i = 0; i < numFam; i++){
						
						id 		= String.valueOf(i);
						
						q.moveData(znodoFamIRPF,zmeta4object,znodoFamIRPF,id);
							
						nombreIRPF			    = q.getItem(znodoFamIRPF,zmeta4object,znodoFamIRPF,"","NOMBRECOMPLETO");
						fechaNacimientoIRPF	    = q.getItem(znodoFamIRPF,zmeta4object,znodoFamIRPF,"","STD_DT_BIRTH");
						tipoRelacionIRPF		= q.getItem(znodoFamIRPF,zmeta4object,znodoFamIRPF,"","STD_N_ACT_DEP_TYPE");
					
						
				%>
		        <tr>
					<td class="fuentevalor"><%=nombreIRPF%></td>
					<td class="fuentevalor"><%=tipoRelacionIRPF%></td>
					<td class="fuentevalor">
						<script> 
							formatoFecha('<%=fechaNacimientoIRPF%>'); 
						</script>
					</td>
				</tr>
				<%}%>
			</table>	
		</td>		
	<tr>
	<%}%>
</table>
<% 
	}else{
%>
<div>
	<h1> Tus datos todav&iacute;a no est&aacute;n cargados en el sistema, por favor ponte en contacto con Recursos Humanos </h1>
</div>
<% 
}
String sociedad = q.getItem(znodoORO,zmeta4object,znodoORO,"","ID_ORGANIZATION");
%>
<script type="text/javascript">
	function dpt(){
		window.open('/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_dpt.jsp?idPuesto=<%=idPuesto%>&sociedad=<%=sociedad%>','DPT','resizable=yes,tmenubar=no,status=no,scrollbars=yes,width=700,height=1400');
		window.reload();
	}
</script>
</body>

</html>