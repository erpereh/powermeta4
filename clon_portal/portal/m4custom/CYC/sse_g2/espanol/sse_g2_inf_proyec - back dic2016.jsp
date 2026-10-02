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
  
  String anio = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"anio");
  if ((anio==null)||(anio.equals(""))){anio = "0";}

%>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<title>PROYECCION TE&Oacute;RICA DE HABERES </title>	
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<link href="/css/tabla.css" type="text/css" rel="stylesheet" />
	<link href="/css/style_persdata.css" type="text/css" rel="stylesheet"/>	
	<script type="text/javascript" src="/library/jquery.js"></script>
	<script type="text/javascript" src="/libreria/functions_proyecciones.js"></script>
	
	<STYLE type="text/css">		
		#contenedor {
			display: table;
			border: 1px solid #000;			
			margin: 0 auto;
			vertical-align: middle;		
			background-color: #e2ebef;			
		}		
		
	</STYLE>

	<script> 
	
		// Variables JS para pintar la estructura del informe
		var concepto 			= "";
		var valores  			= "";
		var total 	 			= "";
		var contador 			= 0;
		var pagas 	 			= "";
		var NumPagasReales      = "";
		var NumColtotales 		= "";
		var pagaamostrar 		= "";
		var totalCol1			= 0;
		var totalCol2			= 0;	
		var concepto2 			= "";		//JOSEAM
		var valores2  			= "";		//JOSEAM
		var total2 	 			= "";		//JOSEAM
		var importe 	 			= "";		//JOSEAM
		var valorestotales		= "";		//JOSEAM
		function guion (cadena) {
				return cadena.replace('?','-');
		}
		
	</script>
	
	
</head>
<%

String zsubsesion 		= "CSP_RP_PROYECCIONES";
String zmeta4object 	= "CSP_RP_PROYECCIONES";
String znodoDP 			= "SSE_DATOS_PROYECCION";
String znodoSC 			= "CSP_SALARIO_CONVENIO";
String znodoCC 			= "CSP_COMP_ORG";
String znodoCF 			= "CSP_COMP_FUNCIONAL";
String znodoTF 			= "CSP_TOTAL_RET_FIJA";
String znodoRV 			= "CSP_RET_VAR";
String znodoTV 			= "CSP_TOT_RET_VAR";
String znodoBV 			= "CSP_BASE_RET_VAR";
String znodoSS 			= "CSP_SEG_SOC";

//Retribucion Indirecta
String znodoVE 			= "CSP_VAL_ESPECIE";
String znodoCS 			= "CSP_CONTRATO_SEGUROS";
String znodoCJ 			= "CSP_COMPRO_JUB";
String znodoPE			= "CSP_PLAN_PREV_EMP";
String znodoIF			= "CSP_INV_FORMACION";
String znodoAY			= "CSP_AYUDAS";
String znodoDK			= "CSP_DIET_KM";
String znodoCM			= "CSP_COMIDAS";
String znodoRF			= "CSP_RET_FLEX";

String zmetodocarga 	= zsubsesion +"!CSP_RP_PROYECCIONES.CSP_CARGA";

// Definición y campos del nodo SSE_DATOS_PROYECCION
String zoutputdefDP 			= zsubsesion + "!" + znodoDP 	+ "[*]";
String zmoveDP					= znodoDP 	 + ":" + znodoDP 	+ "[FIRST]";  

// Definición y campos del nodo CSP_SALARIO_CONVENIO

String zoutputdefSC 	= zsubsesion + "!" + znodoSC 	+ "[*]";
String zmoveSC			= znodoSC 	 + ":" + znodoSC 	+ "[FIRST]";  

// Definición y campos del nodo CSP_COMP_ORG

String zoutputdefCC 	= zsubsesion + "!" + znodoCC 	+ "[*]";
String zmoveCC			= znodoCC 	 + ":" + znodoCC 	+ "[FIRST]";  

// Definición y campos del nodo CSP_COMP_ORG

String zoutputdefCF 	= zsubsesion + "!" + znodoCF 	+ "[*]";
String zmoveCF			= znodoCF 	 + ":" + znodoCF 	+ "[FIRST]";  

// Definición y campos del nodo CSP_TOTAL_RET_FIJA

String zoutputdefTF 	= zsubsesion + "!" + znodoTF 	+ "[*]";
String zmoveTF			= znodoTF 	 + ":" + znodoTF 	+ "[FIRST]";  

// Definición y campos del nodo CSP_RET_VAR

String zoutputdefRV 	= zsubsesion + "!" + znodoRV 	+ "[*]";
String zmoveRV			= znodoRV 	 + ":" + znodoRV 	+ "[FIRST]";  

// Definición y campos del nodo CSP_TOTAL_RET_FIJA

String zoutputdefTV 	= zsubsesion + "!" + znodoTV 	+ "[*]";
String zmoveTV			= znodoTV 	 + ":" + znodoTV 	+ "[FIRST]";  

// Definición y campos del nodo CSP_BASE_RET_VAR

String zoutputdefBV 	= zsubsesion + "!" + znodoBV 	+ "[*]";
String zmoveBV			= znodoBV 	 + ":" + znodoBV 	+ "[FIRST]";  

// Definición y campos del nodo CSP_SEG_SOC

String zoutputdefSS 	= zsubsesion + "!" + znodoSS 	+ "[*]";
String zmoveSS			= znodoSS 	 + ":" + znodoSS 	+ "[FIRST]";  

// Definición y campos del nodo CSP_VAL_ESPECIE

String zoutputdefVE 	= zsubsesion + "!" + znodoVE 	+ "[*]";
String zmoveVE			= znodoVE 	 + ":" + znodoVE 	+ "[FIRST]";  

// Definición y campos del nodo CSP_CONTRATO_SEGUROS

String zoutputdefCS 	= zsubsesion + "!" + znodoCS 	+ "[*]";
String zmoveCS			= znodoCS 	 + ":" + znodoCS 	+ "[FIRST]";  

// Definición y campos del nodo CSP_COMPRO_JUB

String zoutputdefCJ 	= zsubsesion + "!" + znodoCJ 	+ "[*]";
String zmoveCJ			= znodoCJ 	 + ":" + znodoCJ 	+ "[FIRST]";  

// Definición y campos del nodo CSP_PLAN_PREV_EMP

String zoutputdefPE 	= zsubsesion + "!" + znodoPE 	+ "[*]";
String zmovePE			= znodoPE 	 + ":" + znodoPE 	+ "[FIRST]";  

// Definición y campos del nodo CSP_INV_FORMACION

String zoutputdefIF 	= zsubsesion + "!" + znodoIF	+ "[*]";
String zmoveIF			= znodoIF 	 + ":" + znodoIF 	+ "[FIRST]"; 

// Definición y campos del nodo CSP_AYUDAS
String zoutputdefAY 	= zsubsesion + "!" + znodoAY 	+ "[*]";
String zmoveAY			= znodoAY 	 + ":" + znodoAY 	+ "[FIRST]";  

// Definición y campos del nodo CSP_DIET_KM

String zoutputdefDK 	= zsubsesion + "!" + znodoDK 	+ "[*]";
String zmoveDK			= znodoDK 	 + ":" + znodoDK 	+ "[FIRST]";  

// Definición y campos del nodo CSP_COMIDAS 

String zoutputdefCM 	= zsubsesion + "!" + znodoCM 	+ "[*]";
String zmoveCM			= znodoCM 	 + ":" + znodoCM 	+ "[FIRST]"; 

// Definición y campos del nodo CSP_RET_FLEX 

String zoutputdefRF 	= zsubsesion + "!" + znodoRF 	+ "[*]";
String zmoveRF			= znodoRF 	 + ":" + znodoRF 	+ "[FIRST]"; 

// Variables para cargar datos de los diferentes nodos
		
String zCSP_REAL                = "";
String zPAGA_TOT                = "";
String zPAGA01                  = "";
String zPAGA02                  = "";
String zPAGA03                  = "";
String zPAGA04                  = "";
String zPAGA05                  = "";
String zPAGA06                  = "";
String zPAGA07                  = "";
String zPAGA08                  = "";
String zPAGA09                  = "";
String zPAGA10                  = "";
String zPAGA11                  = "";
String zPAGA12                  = "";
String zPAGA13                  = "";
String zPAGA14                  = "";
String zPAGA15                  = "";
String zPAGA16                  = "";
String zPAGA17                  = "";
String zPAGA18                  = "";
String zPAGA19                  = "";
String zPAGA20                  = "";
String zSCO_N_WORK_LOCATION     = "";
String zSSP_NM_CATEGORIA        = "";
String zSTD_ID_HR               = "";
String zSTD_N_FAMILY_NAME_1     = "";
String zSTD_N_FIRST_NAME        = "";
String zSTD_OR_HR_PERIOD        = "";
String zCSP_COUNT_COL			= "";
String zID_ITEM 				= "";
//JOSEAM
String zID_ITEM_2 				= "";
//JOSEAM
String zTOTAL					= "";

%>

<body width="100%">

<m4:startpage m4task="<%=zsubsesion%>"/>

	<m4:beginjob/>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
	
	<%		
		try { 
			M4Operations q 	= new M4Operations(request);		
			q.setItem(zsubsesion,zsubsesion,"","ANIO",anio);
		} catch(Exception e) {}	
	%>
	
	<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>

	<m4:outputdef m4alias="<%=znodoDP%>" > <m4:param name="m4name0" value="<%=zoutputdefDP%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoSC%>" > <m4:param name="m4name0" value="<%=zoutputdefSC%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoCC%>" > <m4:param name="m4name0" value="<%=zoutputdefCC%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoCF%>" > <m4:param name="m4name0" value="<%=zoutputdefCF%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoTF%>" > <m4:param name="m4name0" value="<%=zoutputdefTF%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoRV%>" > <m4:param name="m4name0" value="<%=zoutputdefRV%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoBV%>" > <m4:param name="m4name0" value="<%=zoutputdefBV%>"/> </m4:outputdef>	
	<m4:outputdef m4alias="<%=znodoTV%>" > <m4:param name="m4name0" value="<%=zoutputdefTV%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoSS%>" > <m4:param name="m4name0" value="<%=zoutputdefSS%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoVE%>" > <m4:param name="m4name0" value="<%=zoutputdefVE%>"/> </m4:outputdef>	
	<m4:outputdef m4alias="<%=znodoCS%>" > <m4:param name="m4name0" value="<%=zoutputdefCS%>"/> </m4:outputdef>		
	<m4:outputdef m4alias="<%=znodoCJ%>" > <m4:param name="m4name0" value="<%=zoutputdefCJ%>"/> </m4:outputdef>		
	<m4:outputdef m4alias="<%=znodoPE%>" > <m4:param name="m4name0" value="<%=zoutputdefPE%>"/> </m4:outputdef>			
	<m4:outputdef m4alias="<%=znodoIF%>" > <m4:param name="m4name0" value="<%=zoutputdefIF%>"/> </m4:outputdef>		
	<m4:outputdef m4alias="<%=znodoAY%>" > <m4:param name="m4name0" value="<%=zoutputdefAY%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoDK%>" > <m4:param name="m4name0" value="<%=zoutputdefDK%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoCM%>" > <m4:param name="m4name0" value="<%=zoutputdefCM%>"/> </m4:outputdef>
	<m4:outputdef m4alias="<%=znodoRF%>" > <m4:param name="m4name0" value="<%=zoutputdefRF%>"/> </m4:outputdef>
	
<m4:endjob/>

<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveSC%>"/></m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveSC%>"/></m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveCC%>"/></m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveCF%>"/></m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveTF%>"/></m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveRV%>"/></m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveTV%>"/></m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveBV%>"/></m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveSS%>"/></m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveVE%>"/></m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveCS%>"/></m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveCJ%>"/></m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmovePE%>"/></m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveIF%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=znodoDP%>"/></m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveAY%>"/></m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveDK%>"/></m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveCM%>"/></m4:move>
<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveRF%>"/></m4:move>

<%

// Cargamos los datos de cabecera y de proceso del informe

M4Operations m 	= new M4Operations(request);

int 	zposiciondp	    = 0; // Contador nodo datos informe
int 	zposicionsc 	= 0; // Contador nodo datos salario convenio
int 	zposicioncc 	= 0; // Contador nodo datos complementos compañia
int 	zposicioncf 	= 0; // Contador nodo datos complementos funcionales
int 	zposiciontf 	= 0; // Contador nodo datos totales fijos
int 	zposicionrv 	= 0; // Contador nodo datos retribución variable
int 	zposiciontv 	= 0; // Contador nodo datos totales variable
int 	zposicionbv 	= 0; // Contador nodo datos base variable
int 	zposicionss 	= 0; // Contador nodo seguridad social
int 	zposicionve 	= 0; // Contador nodo valoracion especia
int 	zposicioncs 	= 0; // Contador nodo contratos seguro

int 	zposicioncj 	= 0; // Contador nodo compromiso de jubilacion
int 	zposicionpe		= 0; // Contador nodo plan prevision empresarial
int 	zposicionif		= 0; // Contador nodo inversion en formación
int 	zposicionay		= 0; // Contador nodo Ayudas
int 	zposiciondk		= 0; // Contador nodo Dietas y Kilometrajes
int 	zposicioncm		= 0; // Contador nodo Comidas
int 	zposicionrf		= 0; // Contador nodo Retribución flexible

int 	i = 0;

try {   
	
    zposiciondp = m.getCountInClient(znodoDP,zsubsesion,znodoDP);
	zposicionsc	= m.getCountInClient(znodoSC,zsubsesion,znodoSC);
	zposicioncc	= m.getCountInClient(znodoCC,zsubsesion,znodoCC);
	zposicioncf	= m.getCountInClient(znodoCF,zsubsesion,znodoCF);
	zposiciontf	= m.getCountInClient(znodoTF,zsubsesion,znodoTF);
	zposicionrv	= m.getCountInClient(znodoRV,zsubsesion,znodoRV);
    zposiciontv	= m.getCountInClient(znodoTV,zsubsesion,znodoTV);
	zposicionbv	= m.getCountInClient(znodoBV,zsubsesion,znodoBV);
	zposicionss	= m.getCountInClient(znodoSS,zsubsesion,znodoSS);
	zposicionve	= m.getCountInClient(znodoVE,zsubsesion,znodoVE);
	zposicioncs	= m.getCountInClient(znodoCS,zsubsesion,znodoCS);	
	
	zposicioncj	= m.getCountInClient(znodoCJ,zsubsesion,znodoCJ);		
	zposicionpe	= m.getCountInClient(znodoPE,zsubsesion,znodoPE);
	zposicionif	= m.getCountInClient(znodoIF,zsubsesion,znodoIF);
	zposicionay	= m.getCountInClient(znodoAY,zsubsesion,znodoAY);
	zposiciondk	= m.getCountInClient(znodoDK,zsubsesion,znodoDK);
	zposicioncm	= m.getCountInClient(znodoCM,zsubsesion,znodoCM);
	zposicionrf	= m.getCountInClient(znodoRF,zsubsesion,znodoRF);
	
} catch(Exception e) {}

String id = String.valueOf(zposiciondp - 1);

%>
<% if(zposicionsc > 0) { %>
<!-- CABECERA INFORME : INICIO -->

<div id="cabecera" title="Logo" style="width:100%;left:0px;">
	<table border="0" width="100%" align="left" >
			<thead>
				<tr>
					<td align="left" style="width:10%;left:0px;"><img border="0" src="/iconos/logo_cyc.jpg"></td>
					<td align="center" width="90%"><h1> PROYECCI&Oacute;N TE&Oacute;RICA HABERES A&Ntilde;O <%=anio%> </h1></td>
		 
				</tr>
			</thead>
	</table>
</div>

</br>

<!-- CABECERA INFORME : FIN -->
<!-- RETRIBUCIONES DIRECTAS : INICIO -->

<%

// Cargamos los datos del nodo de datos del informe.

try {    
    	m.moveData(znodoDP,zmeta4object,znodoDP,id);

		zCSP_REAL                = m.getItem(znodoDP,zmeta4object,znodoDP,"","CSP_REAL");
		zPAGA_TOT                = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA_TOT");
		zPAGA01                  = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA01");
		zPAGA02                  = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA02");
		zPAGA03                  = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA03");
		zPAGA04                  = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA04");
		zPAGA05                  = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA05");
		zPAGA06                  = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA06");
		zPAGA07                  = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA07");
		zPAGA08                  = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA08");
		zPAGA09                  = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA09");
		zPAGA10                  = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA10");
		zPAGA11                  = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA11");
		zPAGA12                  = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA12");
		zPAGA13                  = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA13");
		zPAGA14                  = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA14");
		zPAGA15                  = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA15");
		zPAGA16                  = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA16");
		zPAGA17                  = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA17");
		zPAGA18                  = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA18");
		zPAGA19                  = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA19");
		zPAGA20                  = m.getItem(znodoDP,zmeta4object,znodoDP,"","PAGA20");
		zSCO_N_WORK_LOCATION     = m.getItem(znodoDP,zmeta4object,znodoDP,"","SCO_N_WORK_LOCATION");
		zSSP_NM_CATEGORIA        = m.getItem(znodoDP,zmeta4object,znodoDP,"","SSP_NM_CATEGORIA");
		zSTD_ID_HR               = m.getItem(znodoDP,zmeta4object,znodoDP,"","STD_ID_HR");
		zSTD_N_FAMILY_NAME_1     = m.getItem(znodoDP,zmeta4object,znodoDP,"","STD_N_FAMILY_NAME_1");
		zSTD_N_FIRST_NAME        = m.getItem(znodoDP,zmeta4object,znodoDP,"","STD_N_FIRST_NAME");
		zSTD_OR_HR_PERIOD        = m.getItem(znodoDP,zmeta4object,znodoDP,"","STD_OR_HR_PERIOD");
		zCSP_COUNT_COL			 = m.getItem(znodoDP,zmeta4object,znodoDP,"","CSP_COUNT_COL");
			
	
} catch(Exception e) {}

%>

<script>
	//Variables globales js para pintar estructura de las tablas
	NumPagasReales  = '<%=zCSP_REAL%>';
	NumColtotales 	= '<%=zCSP_COUNT_COL%>';
	NumColtotales 	= parseFloat(NumColtotales);	
</script>	

<div id="contenedor" style="width:100%;left:24px;">
	<table border="0" cellpadding="0" cellspacing="0" width="100%" align="center" class="tabla">
		<thead>
			<tr class="modo1">
				<td> 
					<%=zSTD_ID_HR%>&nbsp;&nbsp;
					<%=zSTD_N_FIRST_NAME%>&nbsp;
					<%=zSTD_N_FAMILY_NAME_1%>								
				</td>
				<td>&nbsp;</td>
				<td align="left"><script>document.write(guion('<%=zSSP_NM_CATEGORIA%>'));</script></td>
				<td>CENTRO DE TRABAJO	</td>
				<td align="left"><%=zSCO_N_WORK_LOCATION%></td>
			</tr>
		</thead>
	</table>
</div>
<br>
<br>

<!-- DATOS CONVENIO -->

<h3> <i> RETRIBUCI&Oacute;N DIRECTA </i> </h3> 
		
<table style="width:1280px;left:0px;text-align: center;vertical-align: middle;" cellspacing="0" cellpadding="0" class="tabla">
	<thead>		
		<tr>			
			<script>								
				CabeceraRetDir(NumPagasReales,NumColtotales,'Salario Convenio'); 
			</script>			
		</tr>						
		<tr class="modo1">
			<script> 
				// Rellenamos un array JS con las pagas cargadas
				pagas = new Array('<%=zPAGA01%>','<%=zPAGA02%>','<%=zPAGA03%>','<%=zPAGA04%>','<%=zPAGA05%>','<%=zPAGA06%>','<%=zPAGA07%>','<%=zPAGA08%>','<%=zPAGA09%>','<%=zPAGA10%>','<%=zPAGA11%>','<%=zPAGA12%>','<%=zPAGA13%>','<%=zPAGA14%>','<%=zPAGA15%>','<%=zPAGA16%>','<%=zPAGA17%>','<%=zPAGA18%>','<%=zPAGA19%>','<%=zPAGA20%>');						
				CabeceraPagasRetDir (NumPagasReales,NumColtotales,pagas);				
			</script>
		</tr>
	</thead>
	<tbody>
	
		
		
			<%

			// Cargamos los datos del nodo de salario convenio

			try {    
									
					zPAGA01  	= ""; zPAGA02  	= ""; zPAGA03  	= ""; zPAGA04  	= ""; zPAGA05  	= "";
					zPAGA06  	= ""; zPAGA07  	= ""; zPAGA08  	= ""; zPAGA09  	= ""; zPAGA10  	= "";
					zPAGA11  	= ""; zPAGA12  	= ""; zPAGA13  	= ""; zPAGA14  	= ""; zPAGA15  	= "";
					zPAGA16  	= ""; zPAGA17  	= ""; zPAGA18  	= ""; zPAGA19  	= ""; zPAGA20  	= "";
					zID_ITEM 	= "";			
					zTOTAL		= "";
					
					for (i = 0; i < zposicionsc; i++){
						
						id 		= String.valueOf(i);
						
						m.moveData(znodoSC,zmeta4object,znodoSC,id);
						
						zTOTAL = m.getItem(znodoSC,zmeta4object,znodoSC,"","TOTAL");
						zID_ITEM = m.getItem(znodoSC,zmeta4object,znodoSC,"","ID_ITEM");
						zPAGA01   = m.getItem(znodoSC,zmeta4object,znodoSC,"","PAGA01");
						zPAGA02   = m.getItem(znodoSC,zmeta4object,znodoSC,"","PAGA02");
						zPAGA03   = m.getItem(znodoSC,zmeta4object,znodoSC,"","PAGA03");
						zPAGA04   = m.getItem(znodoSC,zmeta4object,znodoSC,"","PAGA04");
						zPAGA05   = m.getItem(znodoSC,zmeta4object,znodoSC,"","PAGA05");
						zPAGA06   = m.getItem(znodoSC,zmeta4object,znodoSC,"","PAGA06");
						zPAGA07   = m.getItem(znodoSC,zmeta4object,znodoSC,"","PAGA07");
						zPAGA08   = m.getItem(znodoSC,zmeta4object,znodoSC,"","PAGA08");
						zPAGA09   = m.getItem(znodoSC,zmeta4object,znodoSC,"","PAGA09");
						zPAGA10   = m.getItem(znodoSC,zmeta4object,znodoSC,"","PAGA10");
						zPAGA11   = m.getItem(znodoSC,zmeta4object,znodoSC,"","PAGA11");
						zPAGA12   = m.getItem(znodoSC,zmeta4object,znodoSC,"","PAGA12");
						zPAGA13   = m.getItem(znodoSC,zmeta4object,znodoSC,"","PAGA13");
						zPAGA14   = m.getItem(znodoSC,zmeta4object,znodoSC,"","PAGA14");
						zPAGA15   = m.getItem(znodoSC,zmeta4object,znodoSC,"","PAGA15");
						zPAGA16   = m.getItem(znodoSC,zmeta4object,znodoSC,"","PAGA16");
						zPAGA17   = m.getItem(znodoSC,zmeta4object,znodoSC,"","PAGA17");
						zPAGA18   = m.getItem(znodoSC,zmeta4object,znodoSC,"","PAGA18");
						zPAGA19   = m.getItem(znodoSC,zmeta4object,znodoSC,"","PAGA19");
						zPAGA20   = m.getItem(znodoSC,zmeta4object,znodoSC,"","PAGA20");
					
			%>
			
			<tr class="modo2">				
				<script>
					// Variables con los valores de la fila
					concepto 			= '<%=zID_ITEM%>';					
					valores  			= new Array('<%=zPAGA01%>','<%=zPAGA02%>',	'<%=zPAGA03%>','<%=zPAGA04%>','<%=zPAGA05%>','<%=zPAGA06%>','<%=zPAGA07%>','<%=zPAGA08%>','<%=zPAGA09%>','<%=zPAGA10%>','<%=zPAGA11%>','<%=zPAGA12%>','<%=zPAGA13%>','<%=zPAGA14%>','<%=zPAGA15%>','<%=zPAGA16%>','<%=zPAGA17%>','<%=zPAGA18%>','<%=zPAGA19%>','<%=zPAGA20%>');
					totalesSinNulos 	= new Array('<%=zTOTAL%>');
					totalesSinNulos		= quitarNulos(totalesSinNulos);
					total 	 			= totalesSinNulos[0];
					ultimaFila 			= false;
					
					// Contador para controlar la última fila
					contador 	+= 1;
					
					if(contador == '<%=zposicionsc%>' ) {ultimaFila = true;}
					
					// Pintamos la fila con los valores recogidos
					//alert(valores);
					valores = quitarNulos(valores);
					//alert(valores);
					conceptoFila (concepto,ultimaFila);
					valoresFila (NumPagasReales, NumColtotales,valores,ultimaFila);
					totalFila (total,ultimaFila);
					
				</script>
			</tr>
			<%		}
				} catch(Exception e) {}

			%>
			
		<%} //Fin condición nodoSC %>
		
		<% if(zposicioncc > 0) { %>
		
			<tr>
				<script> 
					
					concepto = "";
					valores  = "";
					total 	 = "";
					contador = 0;
					
					cabeceraComplementos (NumColtotales,'Complementos Compa&ntilde;&iacute;a')
					
				</script>		
			</tr>
			
			<%

			// Cargamos los datos del nodo de complementos compañia

			try {    
									
					zPAGA01  	= ""; zPAGA02  	= ""; zPAGA03  	= ""; zPAGA04  	= ""; zPAGA05  	= "";
					zPAGA06  	= ""; zPAGA07  	= ""; zPAGA08  	= ""; zPAGA09  	= ""; zPAGA10  	= "";
					zPAGA11  	= ""; zPAGA12  	= ""; zPAGA13  	= ""; zPAGA14  	= ""; zPAGA15  	= "";
					zPAGA16  	= ""; zPAGA17  	= ""; zPAGA18  	= ""; zPAGA19  	= ""; zPAGA20  	= "";
					zID_ITEM 	= "";			
					zTOTAL		= "";
					
					for (i = 0; i < zposicioncc; i++){
						
						id 		= String.valueOf(i);
						
						m.moveData(znodoCC,zmeta4object,znodoCC,id);
						
						zTOTAL    = m.getItem(znodoCC,zmeta4object,znodoCC,"","TOTAL");
						zID_ITEM  = m.getItem(znodoCC,zmeta4object,znodoCC,"","ID_ITEM");
						zPAGA01   = m.getItem(znodoCC,zmeta4object,znodoCC,"","PAGA01");
						zPAGA02   = m.getItem(znodoCC,zmeta4object,znodoCC,"","PAGA02");
						zPAGA03   = m.getItem(znodoCC,zmeta4object,znodoCC,"","PAGA03");
						zPAGA04   = m.getItem(znodoCC,zmeta4object,znodoCC,"","PAGA04");
						zPAGA05   = m.getItem(znodoCC,zmeta4object,znodoCC,"","PAGA05");
						zPAGA06   = m.getItem(znodoCC,zmeta4object,znodoCC,"","PAGA06");
						zPAGA07   = m.getItem(znodoCC,zmeta4object,znodoCC,"","PAGA07");
						zPAGA08   = m.getItem(znodoCC,zmeta4object,znodoCC,"","PAGA08");
						zPAGA09   = m.getItem(znodoCC,zmeta4object,znodoCC,"","PAGA09");
						zPAGA10   = m.getItem(znodoCC,zmeta4object,znodoCC,"","PAGA10");
						zPAGA11   = m.getItem(znodoCC,zmeta4object,znodoCC,"","PAGA11");
						zPAGA12   = m.getItem(znodoCC,zmeta4object,znodoCC,"","PAGA12");
						zPAGA13   = m.getItem(znodoCC,zmeta4object,znodoCC,"","PAGA13");
						zPAGA14   = m.getItem(znodoCC,zmeta4object,znodoCC,"","PAGA14");
						zPAGA15   = m.getItem(znodoCC,zmeta4object,znodoCC,"","PAGA15");
						zPAGA16   = m.getItem(znodoCC,zmeta4object,znodoCC,"","PAGA16");
						zPAGA17   = m.getItem(znodoCC,zmeta4object,znodoCC,"","PAGA17");
						zPAGA18   = m.getItem(znodoCC,zmeta4object,znodoCC,"","PAGA18");
						zPAGA19   = m.getItem(znodoCC,zmeta4object,znodoCC,"","PAGA19");
						zPAGA20   = m.getItem(znodoCC,zmeta4object,znodoCC,"","PAGA20");
					
			%>
			<tr class="modo2">
				<script>
					// Variables con los valores de la fila
					concepto 	= '<%=zID_ITEM%>';				
					totalesSinNulos 	= new Array('<%=zTOTAL%>');
					totalesSinNulos		= quitarNulos(totalesSinNulos);
					total 	 			= totalesSinNulos[0];
					valores  	= new Array('<%=zID_ITEM%>','<%=zPAGA01%>','<%=zPAGA02%>','<%=zPAGA03%>','<%=zPAGA04%>','<%=zPAGA05%>','<%=zPAGA06%>','<%=zPAGA07%>','<%=zPAGA08%>','<%=zPAGA09%>','<%=zPAGA10%>','<%=zPAGA11%>','<%=zPAGA12%>','<%=zPAGA13%>','<%=zPAGA14%>','<%=zPAGA15%>','<%=zPAGA16%>','<%=zPAGA17%>','<%=zPAGA18%>','<%=zPAGA19%>','<%=zPAGA20%>','<%=zTOTAL%>');								
					ultimaFila 	= false;
					
					// Contador para controlar la última fila
					contador 	+= 1;
					
					if(contador == '<%=zposicionsc%>' ) {ultimaFila = true;}
					
					// Pintamos la fila con los valores recogidos
					
					valores = quitarNulos(valores);					
					complementos(NumPagasReales, NumColtotales,valores,'<%=zposicioncc%>', '<%=i%>');
					
				</script>
			</tr>
			<%		} // Final For complementos Compañia
				} catch(Exception e) {}

			%>
	
		<%} //Fin condición nodoCC %>
	
		<% if(zposicioncf > 0) { %>
		
			<tr>
				<script> 
					
					concepto = "";
					valores  = "";
					total 	 = "";
					contador = 0;
					
					cabeceraComplementos (NumColtotales,'Complemento funcional')
					
				</script>		
			</tr>
			
			<%

			// Cargamos los datos del nodo de complementos compañia

			try {    
									
					zPAGA01  	= ""; zPAGA02  	= ""; zPAGA03  	= ""; zPAGA04  	= ""; zPAGA05  	= "";
					zPAGA06  	= ""; zPAGA07  	= ""; zPAGA08  	= ""; zPAGA09  	= ""; zPAGA10  	= "";
					zPAGA11  	= ""; zPAGA12  	= ""; zPAGA13  	= ""; zPAGA14  	= ""; zPAGA15  	= "";
					zPAGA16  	= ""; zPAGA17  	= ""; zPAGA18  	= ""; zPAGA19  	= ""; zPAGA20  	= "";
					zID_ITEM 	= "";			
					zTOTAL		= "";
					
					for (i = 0; i < zposicioncf; i++){
						
						id 		= String.valueOf(i);
						
						m.moveData(znodoCF,zmeta4object,znodoCF,id);
						
						zTOTAL    = m.getItem(znodoCF,zmeta4object,znodoCF,"","TOTAL");
						zID_ITEM  = m.getItem(znodoCF,zmeta4object,znodoCF,"","ID_ITEM");
						zPAGA01   = m.getItem(znodoCF,zmeta4object,znodoCF,"","PAGA01");
						zPAGA02   = m.getItem(znodoCF,zmeta4object,znodoCF,"","PAGA02");
						zPAGA03   = m.getItem(znodoCF,zmeta4object,znodoCF,"","PAGA03");
						zPAGA04   = m.getItem(znodoCF,zmeta4object,znodoCF,"","PAGA04");
						zPAGA05   = m.getItem(znodoCF,zmeta4object,znodoCF,"","PAGA05");
						zPAGA06   = m.getItem(znodoCF,zmeta4object,znodoCF,"","PAGA06");
						zPAGA07   = m.getItem(znodoCF,zmeta4object,znodoCF,"","PAGA07");
						zPAGA08   = m.getItem(znodoCF,zmeta4object,znodoCF,"","PAGA08");
						zPAGA09   = m.getItem(znodoCF,zmeta4object,znodoCF,"","PAGA09");
						zPAGA10   = m.getItem(znodoCF,zmeta4object,znodoCF,"","PAGA10");
						zPAGA11   = m.getItem(znodoCF,zmeta4object,znodoCF,"","PAGA11");
						zPAGA12   = m.getItem(znodoCF,zmeta4object,znodoCF,"","PAGA12");
						zPAGA13   = m.getItem(znodoCF,zmeta4object,znodoCF,"","PAGA13");
						zPAGA14   = m.getItem(znodoCF,zmeta4object,znodoCF,"","PAGA14");
						zPAGA15   = m.getItem(znodoCF,zmeta4object,znodoCF,"","PAGA15");
						zPAGA16   = m.getItem(znodoCF,zmeta4object,znodoCF,"","PAGA16");
						zPAGA17   = m.getItem(znodoCF,zmeta4object,znodoCF,"","PAGA17");
						zPAGA18   = m.getItem(znodoCF,zmeta4object,znodoCF,"","PAGA18");
						zPAGA19   = m.getItem(znodoCF,zmeta4object,znodoCF,"","PAGA19");
						zPAGA20   = m.getItem(znodoCF,zmeta4object,znodoCF,"","PAGA20");
					
			%>
			<tr class="modo2">
				<script>
					// Variables con los valores de la fila
					concepto 	= '<%=zID_ITEM%>';				
					totalesSinNulos 	= new Array('<%=zTOTAL%>');
					totalesSinNulos		= quitarNulos(totalesSinNulos);
					total 	 			= totalesSinNulos[0];
					valores  	= new Array('<%=zID_ITEM%>','<%=zPAGA01%>','<%=zPAGA02%>','<%=zPAGA03%>','<%=zPAGA04%>','<%=zPAGA05%>','<%=zPAGA06%>','<%=zPAGA07%>','<%=zPAGA08%>','<%=zPAGA09%>','<%=zPAGA10%>','<%=zPAGA11%>','<%=zPAGA12%>','<%=zPAGA13%>','<%=zPAGA14%>','<%=zPAGA15%>','<%=zPAGA16%>','<%=zPAGA17%>','<%=zPAGA18%>','<%=zPAGA19%>','<%=zPAGA20%>','<%=zTOTAL%>');								
					ultimaFila 	= false;
					
					// Contador para controlar la última fila
					contador 	+= 1;
					
					if(contador == '<%=zposicionsc%>' ) {ultimaFila = true;}
					
					// Pintamos la fila con los valores recogidos
					
					valores = quitarNulos(valores);					
					complementos(NumPagasReales, NumColtotales,valores,'<%=zposicioncc%>', '<%=i%>');
					
				</script>
			</tr>
			<%		} // Final For complementos Compañia
				} catch(Exception e) {}

			%>
	
		<%} //Fin condición nodoCF %>
	
		<% if(zposiciontf > 0) { %>		
			
			<%

			// Cargamos los datos del nodo de complementos compañia

			try {    
									
					zPAGA01  	= ""; zPAGA02  	= ""; zPAGA03  	= ""; zPAGA04  	= ""; zPAGA05  	= "";
					zPAGA06  	= ""; zPAGA07  	= ""; zPAGA08  	= ""; zPAGA09  	= ""; zPAGA10  	= "";
					zPAGA11  	= ""; zPAGA12  	= ""; zPAGA13  	= ""; zPAGA14  	= ""; zPAGA15  	= "";
					zPAGA16  	= ""; zPAGA17  	= ""; zPAGA18  	= ""; zPAGA19  	= ""; zPAGA20  	= "";
					zID_ITEM 	= "";			
					zTOTAL		= "";
					
					for (i = 0; i < zposiciontf; i++){
						
						id 		= String.valueOf(i);
						
						m.moveData(znodoTF,zmeta4object,znodoTF,id);
						
						zTOTAL    = m.getItem(znodoTF,zmeta4object,znodoTF,"","TOTAL");
						zID_ITEM  = m.getItem(znodoTF,zmeta4object,znodoTF,"","ID_ITEM");
						zPAGA01   = m.getItem(znodoTF,zmeta4object,znodoTF,"","PAGA01");
						zPAGA02   = m.getItem(znodoTF,zmeta4object,znodoTF,"","PAGA02");
						zPAGA03   = m.getItem(znodoTF,zmeta4object,znodoTF,"","PAGA03");
						zPAGA04   = m.getItem(znodoTF,zmeta4object,znodoTF,"","PAGA04");
						zPAGA05   = m.getItem(znodoTF,zmeta4object,znodoTF,"","PAGA05");
						zPAGA06   = m.getItem(znodoTF,zmeta4object,znodoTF,"","PAGA06");
						zPAGA07   = m.getItem(znodoTF,zmeta4object,znodoTF,"","PAGA07");
						zPAGA08   = m.getItem(znodoTF,zmeta4object,znodoTF,"","PAGA08");
						zPAGA09   = m.getItem(znodoTF,zmeta4object,znodoTF,"","PAGA09");
						zPAGA10   = m.getItem(znodoTF,zmeta4object,znodoTF,"","PAGA10");
						zPAGA11   = m.getItem(znodoTF,zmeta4object,znodoTF,"","PAGA11");
						zPAGA12   = m.getItem(znodoTF,zmeta4object,znodoTF,"","PAGA12");
						zPAGA13   = m.getItem(znodoTF,zmeta4object,znodoTF,"","PAGA13");
						zPAGA14   = m.getItem(znodoTF,zmeta4object,znodoTF,"","PAGA14");
						zPAGA15   = m.getItem(znodoTF,zmeta4object,znodoTF,"","PAGA15");
						zPAGA16   = m.getItem(znodoTF,zmeta4object,znodoTF,"","PAGA16");
						zPAGA17   = m.getItem(znodoTF,zmeta4object,znodoTF,"","PAGA17");
						zPAGA18   = m.getItem(znodoTF,zmeta4object,znodoTF,"","PAGA18");
						zPAGA19   = m.getItem(znodoTF,zmeta4object,znodoTF,"","PAGA19");
						zPAGA20   = m.getItem(znodoTF,zmeta4object,znodoTF,"","PAGA20");
					
			%>
			<tr class="modo1">
				<script>
					// Variables con los valores de la fila
					valores  	= new Array('Total Retribuci&oacute;n fija','<%=zPAGA01%>','<%=zPAGA02%>','<%=zPAGA03%>','<%=zPAGA04%>','<%=zPAGA05%>','<%=zPAGA06%>','<%=zPAGA07%>','<%=zPAGA08%>','<%=zPAGA09%>','<%=zPAGA10%>','<%=zPAGA11%>','<%=zPAGA12%>','<%=zPAGA13%>','<%=zPAGA14%>','<%=zPAGA15%>','<%=zPAGA16%>','<%=zPAGA17%>','<%=zPAGA18%>','<%=zPAGA19%>','<%=zPAGA20%>','<%=zTOTAL%>');								
									
					// Pintamos la fila con los valores recogidos
					
					valores = quitarNulos(valores);					
					totales (NumPagasReales, NumColtotales,valores);
					
				</script>
			</tr>
			<%		} // Final For complementos Compañia
				} catch(Exception e) {}

			%>
	
		<%} //Fin condición nodoTF %>
		
		<tr>
			<td>
				&nbsp;				
			</td>
		</tr>		
		
		<% if(zposicionrv > 0) { %>
		
		<tr>			
			<script>								
				CabeceraRetDir(NumPagasReales,NumColtotales,'Retribuci&oacute;n variable'); 
			</script>			
		</tr>						
		<tr class="modo1">
			<script> 
				concepto = "";
				valores  = "";
				total 	 = "";
				contador = 0;
				CabeceraPagasRetDir (NumPagasReales,NumColtotales,pagas);				
			</script>
		</tr>
		
		
			<%

			// Cargamos los datos del nodo de retricución variable

			try {    
									
					zPAGA01  	= ""; zPAGA02  	= ""; zPAGA03  	= ""; zPAGA04  	= ""; zPAGA05  	= "";
					zPAGA06  	= ""; zPAGA07  	= ""; zPAGA08  	= ""; zPAGA09  	= ""; zPAGA10  	= "";
					zPAGA11  	= ""; zPAGA12  	= ""; zPAGA13  	= ""; zPAGA14  	= ""; zPAGA15  	= "";
					zPAGA16  	= ""; zPAGA17  	= ""; zPAGA18  	= ""; zPAGA19  	= ""; zPAGA20  	= "";
					zID_ITEM 	= "";			
					zTOTAL		= "";
					
					for (i = 0; i < zposicionsc; i++){
						
						id 		= String.valueOf(i);
						
						m.moveData(znodoRV,zmeta4object,znodoRV,id);
						
						zTOTAL    = m.getItem(znodoRV,zmeta4object,znodoRV,"","TOTAL");
						zID_ITEM  = m.getItem(znodoRV,zmeta4object,znodoRV,"","ID_ITEM");
						zPAGA01   = m.getItem(znodoRV,zmeta4object,znodoRV,"","PAGA01");
						zPAGA02   = m.getItem(znodoRV,zmeta4object,znodoRV,"","PAGA02");
						zPAGA03   = m.getItem(znodoRV,zmeta4object,znodoRV,"","PAGA03");
						zPAGA04   = m.getItem(znodoRV,zmeta4object,znodoRV,"","PAGA04");
						zPAGA05   = m.getItem(znodoRV,zmeta4object,znodoRV,"","PAGA05");
						zPAGA06   = m.getItem(znodoRV,zmeta4object,znodoRV,"","PAGA06");
						zPAGA07   = m.getItem(znodoRV,zmeta4object,znodoRV,"","PAGA07");
						zPAGA08   = m.getItem(znodoRV,zmeta4object,znodoRV,"","PAGA08");
						zPAGA09   = m.getItem(znodoRV,zmeta4object,znodoRV,"","PAGA09");
						zPAGA10   = m.getItem(znodoRV,zmeta4object,znodoRV,"","PAGA10");
						zPAGA11   = m.getItem(znodoRV,zmeta4object,znodoRV,"","PAGA11");
						zPAGA12   = m.getItem(znodoRV,zmeta4object,znodoRV,"","PAGA12");
						zPAGA13   = m.getItem(znodoRV,zmeta4object,znodoRV,"","PAGA13");
						zPAGA14   = m.getItem(znodoRV,zmeta4object,znodoRV,"","PAGA14");
						zPAGA15   = m.getItem(znodoRV,zmeta4object,znodoRV,"","PAGA15");
						zPAGA16   = m.getItem(znodoRV,zmeta4object,znodoRV,"","PAGA16");
						zPAGA17   = m.getItem(znodoRV,zmeta4object,znodoRV,"","PAGA17");
						zPAGA18   = m.getItem(znodoRV,zmeta4object,znodoRV,"","PAGA18");
						zPAGA19   = m.getItem(znodoRV,zmeta4object,znodoRV,"","PAGA19");
						zPAGA20   = m.getItem(znodoRV,zmeta4object,znodoRV,"","PAGA20");
					
			%>
			
			<tr class="modo2">				
				<script>
					// Variables con los valores de la fila
					concepto 	= '<%=zID_ITEM%>';					
					valores  	= new Array('<%=zPAGA01%>','<%=zPAGA02%>',	'<%=zPAGA03%>','<%=zPAGA04%>','<%=zPAGA05%>','<%=zPAGA06%>','<%=zPAGA07%>','<%=zPAGA08%>','<%=zPAGA09%>','<%=zPAGA10%>','<%=zPAGA11%>','<%=zPAGA12%>','<%=zPAGA13%>','<%=zPAGA14%>','<%=zPAGA15%>','<%=zPAGA16%>','<%=zPAGA17%>','<%=zPAGA18%>','<%=zPAGA19%>','<%=zPAGA20%>');
					totalesSinNulos 	= new Array('<%=zTOTAL%>');
					totalesSinNulos		= quitarNulos(totalesSinNulos);
					total 	 			= totalesSinNulos[0];
					ultimaFila 	= false;
					
					// Contador para controlar la última fila
					contador 	+= 1;
					
					if(contador == '<%=zposicionrv%>' ) {ultimaFila = true;}
					
					// Pintamos la fila con los valores recogidos
					
					valores = quitarNulos(valores);
					conceptoFila (concepto,ultimaFila);
					valoresFila (NumPagasReales, NumColtotales,valores,ultimaFila);
					totalFila (total,ultimaFila);
					
					
				</script>
			</tr>
			<%		}
				} catch(Exception e) {}

			%>
			
		<%} //Fin condición nodoRV %>
		
		<% if(zposiciontv > 0) { %>
		
			<script> 						
				concepto = "";
				valores  = "";				
				contador = 0;						
			</script>
		
			<%

			// Cargamos los datos del nodo de total variable

			try {    
									
					zPAGA01  	= ""; zPAGA02  	= ""; zPAGA03  	= ""; zPAGA04  	= ""; zPAGA05  	= "";
					zPAGA06  	= ""; zPAGA07  	= ""; zPAGA08  	= ""; zPAGA09  	= ""; zPAGA10  	= "";
					zPAGA11  	= ""; zPAGA12  	= ""; zPAGA13  	= ""; zPAGA14  	= ""; zPAGA15  	= "";
					zPAGA16  	= ""; zPAGA17  	= ""; zPAGA18  	= ""; zPAGA19  	= ""; zPAGA20  	= "";
					zID_ITEM 	= "";			
					zTOTAL		= "";
					
					for (i = 0; i < zposicionsc; i++){
						
						id 		= String.valueOf(i);
						
						m.moveData(znodoTV,zmeta4object,znodoTV,id);
						
						zTOTAL    = m.getItem(znodoTV,zmeta4object,znodoTV,"","TOTAL");
						zID_ITEM  = m.getItem(znodoTV,zmeta4object,znodoTV,"","ID_ITEM");
						zPAGA01   = m.getItem(znodoTV,zmeta4object,znodoTV,"","PAGA01");
						zPAGA02   = m.getItem(znodoTV,zmeta4object,znodoTV,"","PAGA02");
						zPAGA03   = m.getItem(znodoTV,zmeta4object,znodoTV,"","PAGA03");
						zPAGA04   = m.getItem(znodoTV,zmeta4object,znodoTV,"","PAGA04");
						zPAGA05   = m.getItem(znodoTV,zmeta4object,znodoTV,"","PAGA05");
						zPAGA06   = m.getItem(znodoTV,zmeta4object,znodoTV,"","PAGA06");
						zPAGA07   = m.getItem(znodoTV,zmeta4object,znodoTV,"","PAGA07");
						zPAGA08   = m.getItem(znodoTV,zmeta4object,znodoTV,"","PAGA08");
						zPAGA09   = m.getItem(znodoTV,zmeta4object,znodoTV,"","PAGA09");
						zPAGA10   = m.getItem(znodoTV,zmeta4object,znodoTV,"","PAGA10");
						zPAGA11   = m.getItem(znodoTV,zmeta4object,znodoTV,"","PAGA11");
						zPAGA12   = m.getItem(znodoTV,zmeta4object,znodoTV,"","PAGA12");
						zPAGA13   = m.getItem(znodoTV,zmeta4object,znodoTV,"","PAGA13");
						zPAGA14   = m.getItem(znodoTV,zmeta4object,znodoTV,"","PAGA14");
						zPAGA15   = m.getItem(znodoTV,zmeta4object,znodoTV,"","PAGA15");
						zPAGA16   = m.getItem(znodoTV,zmeta4object,znodoTV,"","PAGA16");
						zPAGA17   = m.getItem(znodoTV,zmeta4object,znodoTV,"","PAGA17");
						zPAGA18   = m.getItem(znodoTV,zmeta4object,znodoTV,"","PAGA18");
						zPAGA19   = m.getItem(znodoTV,zmeta4object,znodoTV,"","PAGA19");
						zPAGA20   = m.getItem(znodoTV,zmeta4object,znodoTV,"","PAGA20");
					
			%>
			
			<tr class="modo1">		
			
				<script>
					
					// Variables con los valores de la fila
					valores  	= new Array('Total Retribuci&oacute;n variable','<%=zPAGA01%>','<%=zPAGA02%>','<%=zPAGA03%>','<%=zPAGA04%>','<%=zPAGA05%>','<%=zPAGA06%>','<%=zPAGA07%>','<%=zPAGA08%>','<%=zPAGA09%>','<%=zPAGA10%>','<%=zPAGA11%>','<%=zPAGA12%>','<%=zPAGA13%>','<%=zPAGA14%>','<%=zPAGA15%>','<%=zPAGA16%>','<%=zPAGA17%>','<%=zPAGA18%>','<%=zPAGA19%>','<%=zPAGA20%>','<%=zTOTAL%>');								
									
					// Pintamos la fila con los valores recogidos
					
					valores = quitarNulos(valores);					
					totales (NumPagasReales, NumColtotales,valores);
					
				</script>
				
			</tr>
			<%		}
				} catch(Exception e) {}

			%>
			
		<%} //Fin condición nodoTV %>
		
		<tr>
			<td>
				&nbsp;
				<script> 
		
					concepto = "";
					valores  = "";
					total 	 = "";
					contador = 0;
		
				</script>
			</td>
		</tr>
		
		<% if(zposicionbv > 0) { %>		
		
			<%

			// Cargamos los datos del nodo de base variable

			try {    
									
					zPAGA01  	= ""; zPAGA02  	= ""; zPAGA03  	= ""; zPAGA04  	= ""; zPAGA05  	= "";
					zPAGA06  	= ""; zPAGA07  	= ""; zPAGA08  	= ""; zPAGA09  	= ""; zPAGA10  	= "";
					zPAGA11  	= ""; zPAGA12  	= ""; zPAGA13  	= ""; zPAGA14  	= ""; zPAGA15  	= "";
					zPAGA16  	= ""; zPAGA17  	= ""; zPAGA18  	= ""; zPAGA19  	= ""; zPAGA20  	= ""; 
					zID_ITEM 	= "";										
					
					id 			= String.valueOf(zposicionbv -1); 
					for (i = 0; i < zposicionbv; i++){
						id 		= String.valueOf(i);
						m.moveData(znodoBV,zmeta4object,znodoBV,id);
						
						zID_ITEM  	= m.getItem(znodoBV,zmeta4object,znodoBV,"","ID_ITEM");
						zPAGA01   	= m.getItem(znodoBV,zmeta4object,znodoBV,"","PAGA01");
						zPAGA02   	= m.getItem(znodoBV,zmeta4object,znodoBV,"","PAGA02");
						zPAGA03   	= m.getItem(znodoBV,zmeta4object,znodoBV,"","PAGA03");
						zPAGA04   	= m.getItem(znodoBV,zmeta4object,znodoBV,"","PAGA04");
						zPAGA05   	= m.getItem(znodoBV,zmeta4object,znodoBV,"","PAGA05");
						zPAGA06   	= m.getItem(znodoBV,zmeta4object,znodoBV,"","PAGA06");
						zPAGA07   	= m.getItem(znodoBV,zmeta4object,znodoBV,"","PAGA07");
						zPAGA08   	= m.getItem(znodoBV,zmeta4object,znodoBV,"","PAGA08");
						zPAGA09   	= m.getItem(znodoBV,zmeta4object,znodoBV,"","PAGA09");
						zPAGA10   	= m.getItem(znodoBV,zmeta4object,znodoBV,"","PAGA10");
						zPAGA11   	= m.getItem(znodoBV,zmeta4object,znodoBV,"","PAGA11");
						zPAGA12   	= m.getItem(znodoBV,zmeta4object,znodoBV,"","PAGA12");
						zPAGA13   	= m.getItem(znodoBV,zmeta4object,znodoBV,"","PAGA13");
						zPAGA14   	= m.getItem(znodoBV,zmeta4object,znodoBV,"","PAGA14");
						zPAGA15   	= m.getItem(znodoBV,zmeta4object,znodoBV,"","PAGA15");
						zPAGA16   	= m.getItem(znodoBV,zmeta4object,znodoBV,"","PAGA16");
						zPAGA17   	= m.getItem(znodoBV,zmeta4object,znodoBV,"","PAGA17");
						zPAGA18   	= m.getItem(znodoBV,zmeta4object,znodoBV,"","PAGA18");
						zPAGA19   	= m.getItem(znodoBV,zmeta4object,znodoBV,"","PAGA19");
						zPAGA20   	= m.getItem(znodoBV,zmeta4object,znodoBV,"","PAGA20");
							
					
			%>
		
		<tr class="modo1">				
		
			<td colspan="2" style="border: solid black; border-top-width: 1px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 1px; vertical-align: bottom;text-align:left;font-weight: bold;"> <%=zID_ITEM%></td>					
			<td colspan="1" style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px;text-align:right;color:red;">
				<script>
					// Variables con los valores de la fila
					valores  	= new Array('<%=zPAGA01%>','<%=zPAGA02%>','<%=zPAGA03%>','<%=zPAGA04%>','<%=zPAGA05%>','<%=zPAGA06%>','<%=zPAGA07%>','<%=zPAGA08%>','<%=zPAGA09%>','<%=zPAGA10%>','<%=zPAGA11%>','<%=zPAGA12%>','<%=zPAGA13%>','<%=zPAGA14%>','<%=zPAGA15%>','<%=zPAGA16%>','<%=zPAGA17%>','<%=zPAGA18%>','<%=zPAGA19%>','<%=zPAGA20%>');								
									
					// Pintamos la fila con los valores recogidos
					
					valores 	 = quitarNulos(valores);
					pagaamostrar = buscarUltimoValor(valores);					
					//document.write(parseFloat('<%=zPAGA01%>'));
					 document.write(valores[pagaamostrar]);
				</script>
			
			</td>
		</tr>
		
		<%		}
			} catch(Exception e) {}
			} // Fin condición nodoBV

		%>
		
		<tr>
			<td>
				&nbsp;				
			</td>
		</tr>		
		
		<% if(zposicionss > 0) { %>
		
		<tr>			
			<script>								
				CabeceraRetDir(NumPagasReales,NumColtotales,'Seguridad Social'); 
			</script>			
		</tr>						
		<tr class="modo1">
			<script> 
				concepto = "";
				valores  = "";
				total 	 = "";
				contador = 0;
				CabeceraPagasRetDir (NumPagasReales,NumColtotales,pagas);				
			</script>
		</tr>
		
		
			<%

			// Cargamos los datos del nodo de salario convenio

			try {    
									
					zPAGA01  	= ""; zPAGA02  	= ""; zPAGA03  	= ""; zPAGA04  	= ""; zPAGA05  	= "";
					zPAGA06  	= ""; zPAGA07  	= ""; zPAGA08  	= ""; zPAGA09  	= ""; zPAGA10  	= "";
					zPAGA11  	= ""; zPAGA12  	= ""; zPAGA13  	= ""; zPAGA14  	= ""; zPAGA15  	= "";
					zPAGA16  	= ""; zPAGA17  	= ""; zPAGA18  	= ""; zPAGA19  	= ""; zPAGA20  	= "";
					zID_ITEM 	= "";			
					zTOTAL		= "";
					
					for (i = 0; i < zposicionsc; i++){
						
						id 		= String.valueOf(i);
						
						m.moveData(znodoSS,zmeta4object,znodoSS,id);
						
						zTOTAL    = m.getItem(znodoSS,zmeta4object,znodoSS,"","TOTAL");
						zID_ITEM  = m.getItem(znodoSS,zmeta4object,znodoSS,"","ID_ITEM");
						zPAGA01   = m.getItem(znodoSS,zmeta4object,znodoSS,"","PAGA01");
						zPAGA02   = m.getItem(znodoSS,zmeta4object,znodoSS,"","PAGA02");
						zPAGA03   = m.getItem(znodoSS,zmeta4object,znodoSS,"","PAGA03");
						zPAGA04   = m.getItem(znodoSS,zmeta4object,znodoSS,"","PAGA04");
						zPAGA05   = m.getItem(znodoSS,zmeta4object,znodoSS,"","PAGA05");
						zPAGA06   = m.getItem(znodoSS,zmeta4object,znodoSS,"","PAGA06");
						zPAGA07   = m.getItem(znodoSS,zmeta4object,znodoSS,"","PAGA07");
						zPAGA08   = m.getItem(znodoSS,zmeta4object,znodoSS,"","PAGA08");
						zPAGA09   = m.getItem(znodoSS,zmeta4object,znodoSS,"","PAGA09");
						zPAGA10   = m.getItem(znodoSS,zmeta4object,znodoSS,"","PAGA10");
						zPAGA11   = m.getItem(znodoSS,zmeta4object,znodoSS,"","PAGA11");
						zPAGA12   = m.getItem(znodoSS,zmeta4object,znodoSS,"","PAGA12");
						zPAGA13   = m.getItem(znodoSS,zmeta4object,znodoSS,"","PAGA13");
						zPAGA14   = m.getItem(znodoSS,zmeta4object,znodoSS,"","PAGA14");
						zPAGA15   = m.getItem(znodoSS,zmeta4object,znodoSS,"","PAGA15");
						zPAGA16   = m.getItem(znodoSS,zmeta4object,znodoSS,"","PAGA16");
						zPAGA17   = m.getItem(znodoSS,zmeta4object,znodoSS,"","PAGA17");
						zPAGA18   = m.getItem(znodoSS,zmeta4object,znodoSS,"","PAGA18");
						zPAGA19   = m.getItem(znodoSS,zmeta4object,znodoSS,"","PAGA19");
						zPAGA20   = m.getItem(znodoSS,zmeta4object,znodoSS,"","PAGA20");
					
			%>
			
			<tr class="modo2">				
				<script>
					// Variables con los valores de la fila
					concepto 	= '<%=zID_ITEM%>';					
					valores  	= new Array('<%=zPAGA01%>','<%=zPAGA02%>',	'<%=zPAGA03%>','<%=zPAGA04%>','<%=zPAGA05%>','<%=zPAGA06%>','<%=zPAGA07%>','<%=zPAGA08%>','<%=zPAGA09%>','<%=zPAGA10%>','<%=zPAGA11%>','<%=zPAGA12%>','<%=zPAGA13%>','<%=zPAGA14%>','<%=zPAGA15%>','<%=zPAGA16%>','<%=zPAGA17%>','<%=zPAGA18%>','<%=zPAGA19%>','<%=zPAGA20%>');
					totalesSinNulos 	= new Array('<%=zTOTAL%>');
					totalesSinNulos		= quitarNulos(totalesSinNulos);
					total 	 			= totalesSinNulos[0];
					ultimaFila 	= false;
					
					// Contador para controlar la última fila
					contador 	+= 1;
					
					if(contador == '<%=zposicionss%>') {ultimaFila = true;}
					
					// Pintamos la fila con los valores recogidos
					
					valores = quitarNulos(valores);
					conceptoFila (concepto,ultimaFila);
					valoresFila (NumPagasReales, NumColtotales,valores,ultimaFila);
					totalFila (total,ultimaFila);
					
					
				</script>
			</tr>
			<%		}
				} catch(Exception e) {}

			%>
			
		<%} //Fin condición nodoSS %>

<!-- RETRIBUCIONES DIRECTAS : FIN -->

<!-- RETRIBUCIONES INDIRECTAS : INICIO -->
		
		<tr>
			<td>
				&nbsp;				
			</td>
		</tr>
		<% if(zposicionve > 0) { %>
		<tr>
			<td colspan = "6" style="text-align:left;">
				<h3> <i> RETRIBUCI&Oacute;N INDIRECTA. Beneficios Sociales. </i> </h3>				
			</td>
		</tr>
		
		<tr>
			<td>
				&nbsp;				
			</td>
		</tr>
										
		
		<%

			// Cargamos los datos del nodo de salario convenio

			try {    
									
					zPAGA01  	= ""; zPAGA02  	= ""; zPAGA03  	= ""; zPAGA04  	= ""; zPAGA05  	= "";
					zPAGA06  	= ""; zPAGA07  	= ""; zPAGA08  	= ""; zPAGA09  	= ""; zPAGA10  	= "";
					zPAGA11  	= ""; zPAGA12  	= ""; zPAGA13  	= ""; zPAGA14  	= ""; zPAGA15  	= "";
					zPAGA16  	= ""; zPAGA17  	= ""; zPAGA18  	= ""; zPAGA19  	= ""; zPAGA20  	= "";
					zID_ITEM 	= "";			
					zTOTAL		= "";
					
					for (i = 0; i < zposicionve; i++){
						
						id 		= String.valueOf(i);
						
						m.moveData(znodoVE,zmeta4object,znodoVE,id);
						
						zTOTAL    = m.getItem(znodoVE,zmeta4object,znodoVE,"","TOTAL");
						zID_ITEM  = m.getItem(znodoVE,zmeta4object,znodoVE,"","ID_ITEM");
						zPAGA01   = m.getItem(znodoVE,zmeta4object,znodoVE,"","PAGA01");
						zPAGA02   = m.getItem(znodoVE,zmeta4object,znodoVE,"","PAGA02");
						zPAGA03   = m.getItem(znodoVE,zmeta4object,znodoVE,"","PAGA03");
						zPAGA04   = m.getItem(znodoVE,zmeta4object,znodoVE,"","PAGA04");
						zPAGA05   = m.getItem(znodoVE,zmeta4object,znodoVE,"","PAGA05");
						zPAGA06   = m.getItem(znodoVE,zmeta4object,znodoVE,"","PAGA06");
						zPAGA07   = m.getItem(znodoVE,zmeta4object,znodoVE,"","PAGA07");
						zPAGA08   = m.getItem(znodoVE,zmeta4object,znodoVE,"","PAGA08");
						zPAGA09   = m.getItem(znodoVE,zmeta4object,znodoVE,"","PAGA09");
						zPAGA10   = m.getItem(znodoVE,zmeta4object,znodoVE,"","PAGA10");
						zPAGA11   = m.getItem(znodoVE,zmeta4object,znodoVE,"","PAGA11");
						zPAGA12   = m.getItem(znodoVE,zmeta4object,znodoVE,"","PAGA12");
						zPAGA13   = m.getItem(znodoVE,zmeta4object,znodoVE,"","PAGA13");
						zPAGA14   = m.getItem(znodoVE,zmeta4object,znodoVE,"","PAGA14");
						zPAGA15   = m.getItem(znodoVE,zmeta4object,znodoVE,"","PAGA15");
						zPAGA16   = m.getItem(znodoVE,zmeta4object,znodoVE,"","PAGA16");
						zPAGA17   = m.getItem(znodoVE,zmeta4object,znodoVE,"","PAGA17");
						zPAGA18   = m.getItem(znodoVE,zmeta4object,znodoVE,"","PAGA18");
						zPAGA19   = m.getItem(znodoVE,zmeta4object,znodoVE,"","PAGA19");
						zPAGA20   = m.getItem(znodoVE,zmeta4object,znodoVE,"","PAGA20");
			%>
			
			<%			
						if (i==0) {			%>
							<tr>
								<script>
									totalCol1			= 0;
									totalCol2			= 0;
									
									valores  	 = new Array('<%=zID_ITEM%>','<%=zPAGA01%>','<%=zPAGA02%>',	'<%=zPAGA03%>','<%=zPAGA04%>','<%=zPAGA05%>','<%=zPAGA06%>','<%=zPAGA07%>','<%=zPAGA08%>','<%=zPAGA09%>','<%=zPAGA10%>','<%=zPAGA11%>','<%=zPAGA12%>','<%=zPAGA13%>','<%=zPAGA14%>','<%=zPAGA15%>','<%=zPAGA16%>','<%=zPAGA17%>','<%=zPAGA18%>','<%=zPAGA19%>','<%=zPAGA20%>','<%=zTOTAL%>');
									pagaamostrar = buscarPaga(valores);							
									
									CabeceraRetInDir('0','1','Retribuci&oacute;n en Especie',pagaamostrar);			    
									
												
								</script>
							</tr>
							<tr class="modo1">
								<script>
									//document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;color:red;">' + pagas[pagaamostrar] + '</td>')					
								</script>
							</tr>
							<tr class="modo2">
								<script>
									ultimaFila 	= false;
							
									// Contador para controlar la última fila
									contador += '<%=i%>';
									
									if(contador == '<%=zposicionve%>' ) {ultimaFila = true;}
									valores		 = quitarNulos(valores);
									cuerpoRetInd(NumPagasReales, NumColtotales,valores,pagaamostrar,ultimaFila);
									
									totalCol1 			+= parseFloat(valores[pagaamostrar + 1].replace(".","").replace(",",".")); // ATOS - LLM 02/06/2016 MODIFICACION PARA CORREGIR LA SUMA CUANDO LA CANTIDAD ES SUPERIOR A 1000 Y TIENE PUNTO DE MILLAR Y COMA DECIMAL
									totalCol2			+= parseFloat(valores[valores.length - 1].replace(".","").replace(",",".")); // ATOS - 02/06/2016 LLM MODIFICACION PARA CORREGIR LA SUMA CUANDO LA CANTIDAD ES SUPERIOR A 1000 Y TIENE PUNTO DE MILLAR Y COMA DECIMAL
									
								</script>
							</tr>
			<%			}else{%>

							<tr class="modo2">
								<script>
									
									valores  	 = new Array('<%=zID_ITEM%>','<%=zPAGA01%>','<%=zPAGA02%>',	'<%=zPAGA03%>','<%=zPAGA04%>','<%=zPAGA05%>','<%=zPAGA06%>','<%=zPAGA07%>','<%=zPAGA08%>','<%=zPAGA09%>','<%=zPAGA10%>','<%=zPAGA11%>','<%=zPAGA12%>','<%=zPAGA13%>','<%=zPAGA14%>','<%=zPAGA15%>','<%=zPAGA16%>','<%=zPAGA17%>','<%=zPAGA18%>','<%=zPAGA19%>','<%=zPAGA20%>','<%=zTOTAL%>');
									valores		 = quitarNulos(valores);								
									
									ultimaFila 	= false;
							
									// Contador para controlar la última fila
									
									contador = '<%=i%>';					
									
									if(contador == parseFloat('<%=zposicionve%>') - 1 ) {ultimaFila = true;}
									valores		 = quitarNulos(valores);
									cuerpoRetInd(NumPagasReales, NumColtotales,valores,pagaamostrar,ultimaFila);
									
									totalCol1	 		+= parseFloat(valores[pagaamostrar + 1].replace(".","").replace(",",".")); // ATOS - 02/06/2016 LLM MODIFICACION PARA CORREGIR LA SUMA CUANDO LA CANTIDAD ES SUPERIOR A 1000 Y TIENE PUNTO DE MILLAR Y COMA DECIMAL
									totalCol2	 		+= parseFloat(valores[valores.length - 1].replace(".","").replace(",",".")); // ATOS - 02/06/2016 LLM MODIFICACION PARA CORREGIR LA SUMA CUANDO LA CANTIDAD ES SUPERIOR A 1000 Y TIENE PUNTO DE MILLAR Y COMA DECIMAL
								
								</script>
							</tr>
		
		<%}
				}
			} catch(Exception e) {}

		%>
		<tr class="modo1">
			<td style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; text-align:right;text-align: left;vertical-align: left;font-weight:bolder;">Total</td>
			<script>				
				PintaTablaVE (totalCol1.toFixed(2),totalCol1.toFixed(2));
			</script>
		</tr>
		
		
		<%} //Fin condición nodoVE %>
		
		<tr>
			<td>
				&nbsp;				
			</td>
		</tr>
		
		<% if(zposicioncs > 0) { %>								
		
		<%

			// Cargamos los datos del nodo de retribución en especie

			try {    
									
					zPAGA01  	= ""; zPAGA02  	= ""; zPAGA03  	= ""; zPAGA04  	= ""; zPAGA05  	= "";
					zPAGA06  	= ""; zPAGA07  	= ""; zPAGA08  	= ""; zPAGA09  	= ""; zPAGA10  	= "";
					zPAGA11  	= ""; zPAGA12  	= ""; zPAGA13  	= ""; zPAGA14  	= ""; zPAGA15  	= "";
					zPAGA16  	= ""; zPAGA17  	= ""; zPAGA18  	= ""; zPAGA19  	= ""; zPAGA20  	= "";
					zID_ITEM 	= "";			
					zTOTAL		= "";
					
					for (i = 0; i < zposicioncs; i++){
						
						id 		= String.valueOf(i);
						
						m.moveData(znodoCS,zmeta4object,znodoCS,id);
						
						zTOTAL    = m.getItem(znodoCS,zmeta4object,znodoCS,"","TOTAL");
						zID_ITEM  = m.getItem(znodoCS,zmeta4object,znodoCS,"","ID_ITEM");
						zPAGA01   = m.getItem(znodoCS,zmeta4object,znodoCS,"","PAGA01");
						zPAGA02   = m.getItem(znodoCS,zmeta4object,znodoCS,"","PAGA02");
						zPAGA03   = m.getItem(znodoCS,zmeta4object,znodoCS,"","PAGA03");
						zPAGA04   = m.getItem(znodoCS,zmeta4object,znodoCS,"","PAGA04");
						zPAGA05   = m.getItem(znodoCS,zmeta4object,znodoCS,"","PAGA05");
						zPAGA06   = m.getItem(znodoCS,zmeta4object,znodoCS,"","PAGA06");
						zPAGA07   = m.getItem(znodoCS,zmeta4object,znodoCS,"","PAGA07");
						zPAGA08   = m.getItem(znodoCS,zmeta4object,znodoCS,"","PAGA08");
						zPAGA09   = m.getItem(znodoCS,zmeta4object,znodoCS,"","PAGA09");
						zPAGA10   = m.getItem(znodoCS,zmeta4object,znodoCS,"","PAGA10");
						zPAGA11   = m.getItem(znodoCS,zmeta4object,znodoCS,"","PAGA11");
						zPAGA12   = m.getItem(znodoCS,zmeta4object,znodoCS,"","PAGA12");
						zPAGA13   = m.getItem(znodoCS,zmeta4object,znodoCS,"","PAGA13");
						zPAGA14   = m.getItem(znodoCS,zmeta4object,znodoCS,"","PAGA14");
						zPAGA15   = m.getItem(znodoCS,zmeta4object,znodoCS,"","PAGA15");
						zPAGA16   = m.getItem(znodoCS,zmeta4object,znodoCS,"","PAGA16");
						zPAGA17   = m.getItem(znodoCS,zmeta4object,znodoCS,"","PAGA17");
						zPAGA18   = m.getItem(znodoCS,zmeta4object,znodoCS,"","PAGA18");
						zPAGA19   = m.getItem(znodoCS,zmeta4object,znodoCS,"","PAGA19");
						zPAGA20   = m.getItem(znodoCS,zmeta4object,znodoCS,"","PAGA20");
			%>
			
			<%			
						if (i==0) {			%>
							<tr>
								<script>
									totalCol1			= 0;
									totalCol2			= 0;
									
									valores  	 = new Array('<%=zID_ITEM%>','<%=zPAGA01%>','<%=zPAGA02%>',	'<%=zPAGA03%>','<%=zPAGA04%>','<%=zPAGA05%>','<%=zPAGA06%>','<%=zPAGA07%>','<%=zPAGA08%>','<%=zPAGA09%>','<%=zPAGA10%>','<%=zPAGA11%>','<%=zPAGA12%>','<%=zPAGA13%>','<%=zPAGA14%>','<%=zPAGA15%>','<%=zPAGA16%>','<%=zPAGA17%>','<%=zPAGA18%>','<%=zPAGA19%>','<%=zPAGA20%>','<%=zTOTAL%>');
									pagaamostrar = buscarPaga(valores);							
									
									CabeceraRetInDir('0','1','Valoraci&oacute;n R. Especie',pagaamostrar);			    
									
												
								</script>
							</tr>
							<tr class="modo1">
								<script>
									//document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;color:red;">' + pagas[pagaamostrar] + '</td>')					
								</script>
							</tr>
							<tr class="modo2">
								<script>
									ultimaFila 	= false;
							
									// Contador para controlar la última fila
									contador += '<%=i%>';
									
									if(contador == '<%=zposicioncs%>' ) {ultimaFila = true;}
									valores		 = quitarNulos(valores);
									cuerpoRetInd(NumPagasReales, NumColtotales,valores,pagaamostrar,ultimaFila);
									
									//totalCol1	 	+= parseFloat(valores[pagaamostrar + 1]);
									//totalCol2		+= parseFloat(valores[valores.length - 1]);									
									totalCol1 			+= parseFloat(valores[pagaamostrar + 1].replace(".","").replace(",",".")); // ATOS - JAM 13/10/2016 MODIFICACION PARA CORREGIR LA SUMA CUANDO LA CANTIDAD ES SUPERIOR A 1000 Y TIENE PUNTO DE MILLAR Y COMA DECIMAL
									totalCol2			+= parseFloat(valores[valores.length - 1].replace(".","").replace(",",".")); // ATOS - JAM 13/10/2016 MODIFICACION PARA CORREGIR LA SUMA CUANDO LA CANTIDAD ES SUPERIOR A 1000 Y TIENE PUNTO DE MILLAR Y COMA DECIMAL									
							
								</script>
							</tr>
			<%			}else{%>

							<tr class="modo2">
								<script>
									
									valores  	 = new Array('<%=zID_ITEM%>','<%=zPAGA01%>','<%=zPAGA02%>',	'<%=zPAGA03%>','<%=zPAGA04%>','<%=zPAGA05%>','<%=zPAGA06%>','<%=zPAGA07%>','<%=zPAGA08%>','<%=zPAGA09%>','<%=zPAGA10%>','<%=zPAGA11%>','<%=zPAGA12%>','<%=zPAGA13%>','<%=zPAGA14%>','<%=zPAGA15%>','<%=zPAGA16%>','<%=zPAGA17%>','<%=zPAGA18%>','<%=zPAGA19%>','<%=zPAGA20%>','<%=zTOTAL%>');
									
									ultimaFila 	= false;
							
									// Contador para controlar la última fila
									
									contador = '<%=i%>';					
									
									if(contador == parseFloat('<%=zposicioncs%>') - 1 ) {ultimaFila = true;}
									valores		 = quitarNulos(valores);
									cuerpoRetInd(NumPagasReales, NumColtotales,valores,pagaamostrar,ultimaFila);
									
									//totalCol1	 	+= parseFloat(valores[pagaamostrar + 1]);
									//totalCol2		+= parseFloat(valores[valores.length - 1]);
									totalCol1 			+= parseFloat(valores[pagaamostrar + 1].replace(".","").replace(",",".")); // ATOS - JAM 13/10/2016 MODIFICACION PARA CORREGIR LA SUMA CUANDO LA CANTIDAD ES SUPERIOR A 1000 Y TIENE PUNTO DE MILLAR Y COMA DECIMAL
									totalCol2			+= parseFloat(valores[valores.length - 1].replace(".","").replace(",",".")); // ATOS - JAM 13/10/2016 MODIFICACION PARA CORREGIR LA SUMA CUANDO LA CANTIDAD ES SUPERIOR A 1000 Y TIENE PUNTO DE MILLAR Y COMA DECIMAL									
																	
									
								</script>
							</tr>
		
		<%}
				}
			} catch(Exception e) {}

		%>
		<tr class="modo2">
			<td style="border: 1px solid black;text-align: left;vertical-align: left;font-weight:bolder;">Total</td>
			<script>
				PintaTablaVE (totalCol1,totalCol1);
			</script>
		</tr>
		
		
		<%} //Fin condición nodoCS %>
		
		<tr>
			<td>
				&nbsp; 				
			</td>
		</tr>
		
		<% if(zposicionay > 0) { %>								
		
		<%

			// Cargamos los datos del nodo de salario convenio

			try {    
									
					zPAGA01  	= ""; zPAGA02  	= ""; zPAGA03  	= ""; zPAGA04  	= ""; zPAGA05  	= "";
					zPAGA06  	= ""; zPAGA07  	= ""; zPAGA08  	= ""; zPAGA09  	= ""; zPAGA10  	= "";
					zPAGA11  	= ""; zPAGA12  	= ""; zPAGA13  	= ""; zPAGA14  	= ""; zPAGA15  	= "";
					zPAGA16  	= ""; zPAGA17  	= ""; zPAGA18  	= ""; zPAGA19  	= ""; zPAGA20  	= "";
					zID_ITEM 	= "";			
					zTOTAL		= "";
					
					for (i = 0; i < zposicionay; i++){
						
						id 		= String.valueOf(i);
						
						m.moveData(znodoAY,zmeta4object,znodoAY,id);
						
						zTOTAL    = m.getItem(znodoAY,zmeta4object,znodoAY,"","TOTAL");
						zID_ITEM  = m.getItem(znodoAY,zmeta4object,znodoAY,"","ID_ITEM");
						zPAGA01   = m.getItem(znodoAY,zmeta4object,znodoAY,"","PAGA01");
						zPAGA02   = m.getItem(znodoAY,zmeta4object,znodoAY,"","PAGA02");
						zPAGA03   = m.getItem(znodoAY,zmeta4object,znodoAY,"","PAGA03");
						zPAGA04   = m.getItem(znodoAY,zmeta4object,znodoAY,"","PAGA04");
						zPAGA05   = m.getItem(znodoAY,zmeta4object,znodoAY,"","PAGA05");
						zPAGA06   = m.getItem(znodoAY,zmeta4object,znodoAY,"","PAGA06");
						zPAGA07   = m.getItem(znodoAY,zmeta4object,znodoAY,"","PAGA07");
						zPAGA08   = m.getItem(znodoAY,zmeta4object,znodoAY,"","PAGA08");
						zPAGA09   = m.getItem(znodoAY,zmeta4object,znodoAY,"","PAGA09");
						zPAGA10   = m.getItem(znodoAY,zmeta4object,znodoAY,"","PAGA10");
						zPAGA11   = m.getItem(znodoAY,zmeta4object,znodoAY,"","PAGA11");
						zPAGA12   = m.getItem(znodoAY,zmeta4object,znodoAY,"","PAGA12");
						zPAGA13   = m.getItem(znodoAY,zmeta4object,znodoAY,"","PAGA13");
						zPAGA14   = m.getItem(znodoAY,zmeta4object,znodoAY,"","PAGA14");
						zPAGA15   = m.getItem(znodoAY,zmeta4object,znodoAY,"","PAGA15");
						zPAGA16   = m.getItem(znodoAY,zmeta4object,znodoAY,"","PAGA16");
						zPAGA17   = m.getItem(znodoAY,zmeta4object,znodoAY,"","PAGA17");
						zPAGA18   = m.getItem(znodoAY,zmeta4object,znodoAY,"","PAGA18");
						zPAGA19   = m.getItem(znodoAY,zmeta4object,znodoAY,"","PAGA19");
						zPAGA20   = m.getItem(znodoAY,zmeta4object,znodoAY,"","PAGA20");
			%>
			
			<%			
						if (i==0) {			%>
							<tr>
								<script>
									totalCol1			= 0;
									totalCol2			= 0;
									
									valores  	 = new Array('<%=zID_ITEM%>','<%=zPAGA01%>','<%=zPAGA02%>',	'<%=zPAGA03%>','<%=zPAGA04%>','<%=zPAGA05%>','<%=zPAGA06%>','<%=zPAGA07%>','<%=zPAGA08%>','<%=zPAGA09%>','<%=zPAGA10%>','<%=zPAGA11%>','<%=zPAGA12%>','<%=zPAGA13%>','<%=zPAGA14%>','<%=zPAGA15%>','<%=zPAGA16%>','<%=zPAGA17%>','<%=zPAGA18%>','<%=zPAGA19%>','<%=zPAGA20%>','<%=zTOTAL%>');
									pagaamostrar = buscarPaga(valores);							
									
									CabeceraRetInDir('0','1','Ayudas',pagaamostrar);			    
									
												
								</script>
							</tr>
							<tr class="modo1">
								<!--<script>									
									if (parseFloat(NumPagasReales) < pagaamostrar) {
										document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;color:red;">' + pagas[pagaamostrar] + '</td>')					
									}else{
										document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;color:green;">' + pagas[pagaamostrar] + '</td>')
									}
								</script>-->
							</tr>
							<tr class="modo2">
								<script>
									ultimaFila 	= false;
							
									// Contador para controlar la última fila
									contador += '<%=i%>';
									
									if(contador == '<%=zposicionay%>' ) {ultimaFila = true;}
																		
									totalCol1			+= parseFloat(valores[pagaamostrar + 1]);
									totalCol2			+= parseFloat(valores[valores.length - 1]);
									
									valores = quitarNulos(valores);
									cuerpoRetInd(NumPagasReales, NumColtotales,valores,pagaamostrar,ultimaFila);
									
								</script>
							</tr>
			<%			}else{%>

							<tr class="modo2">
								<script>
									
									valores  	 = new Array('<%=zID_ITEM%>','<%=zPAGA01%>','<%=zPAGA02%>',	'<%=zPAGA03%>','<%=zPAGA04%>','<%=zPAGA05%>','<%=zPAGA06%>','<%=zPAGA07%>','<%=zPAGA08%>','<%=zPAGA09%>','<%=zPAGA10%>','<%=zPAGA11%>','<%=zPAGA12%>','<%=zPAGA13%>','<%=zPAGA14%>','<%=zPAGA15%>','<%=zPAGA16%>','<%=zPAGA17%>','<%=zPAGA18%>','<%=zPAGA19%>','<%=zPAGA20%>','<%=zTOTAL%>');
									
									ultimaFila 	= false;
							
									// Contador para controlar la última fila
									
									contador = '<%=i%>';					
									
									if(contador == parseFloat('<%=zposicionay%>') - 1 ) {ultimaFila = true;}
																		
									totalCol1			+= parseFloat(valores[pagaamostrar + 1]);
									totalCol2			+= parseFloat(valores[valores.length - 1]);
									
									valores = quitarNulos(valores);
									cuerpoRetInd(NumPagasReales, NumColtotales,valores,pagaamostrar,ultimaFila);
									
								</script>
							</tr>
		
		<%}
				}
			} catch(Exception e) {}

		%>
		<tr class="modo1">
			<td style="border: 1px solid black;text-align: left;vertical-align: left;font-weight:bolder;">Total</td>
			<script>
				PintaTablaVE (totalCol1,totalCol1);
			</script>
		</tr>
		
		
		<%} //Fin condición nodoAY %>
		
		<tr>
			<td>
				&nbsp;				
			</td>
		</tr>		
		
		<% if(zposicioncm > 0) { %>
		
		<tr>			
			<script>								
				CabeceraRetDir(NumPagasReales,NumColtotales,'Manutenci&oacute;n por Jornada Partida'); 
			</script>			
		</tr>						
		<tr class="modo1">
			<script> 
				concepto = "";
				valores  = "";
				total 	 = "";
				contador = 0;
				CabeceraPagasRetDir (NumPagasReales,NumColtotales,pagas);				
			</script>
		</tr>
		
		
			<%

			// Cargamos los datos del nodo de salario convenio

			try {    
									
					zPAGA01  	= ""; zPAGA02  	= ""; zPAGA03  	= ""; zPAGA04  	= ""; zPAGA05  	= "";
					zPAGA06  	= ""; zPAGA07  	= ""; zPAGA08  	= ""; zPAGA09  	= ""; zPAGA10  	= "";
					zPAGA11  	= ""; zPAGA12  	= ""; zPAGA13  	= ""; zPAGA14  	= ""; zPAGA15  	= "";
					zPAGA16  	= ""; zPAGA17  	= ""; zPAGA18  	= ""; zPAGA19  	= ""; zPAGA20  	= "";
					zID_ITEM 	= "";			
					zTOTAL		= "";
					
					for (i = 0; i < zposicioncm; i++){
						
						id 		= String.valueOf(i);
						
						m.moveData(znodoCM,zmeta4object,znodoCM,id);
						
						zTOTAL    = m.getItem(znodoCM,zmeta4object,znodoCM,"","TOTAL");
						zID_ITEM  = m.getItem(znodoCM,zmeta4object,znodoCM,"","ID_ITEM");
						zPAGA01   = m.getItem(znodoCM,zmeta4object,znodoCM,"","PAGA01");
						zPAGA02   = m.getItem(znodoCM,zmeta4object,znodoCM,"","PAGA02");
						zPAGA03   = m.getItem(znodoCM,zmeta4object,znodoCM,"","PAGA03");
						zPAGA04   = m.getItem(znodoCM,zmeta4object,znodoCM,"","PAGA04");
						zPAGA05   = m.getItem(znodoCM,zmeta4object,znodoCM,"","PAGA05");
						zPAGA06   = m.getItem(znodoCM,zmeta4object,znodoCM,"","PAGA06");
						zPAGA07   = m.getItem(znodoCM,zmeta4object,znodoCM,"","PAGA07");
						zPAGA08   = m.getItem(znodoCM,zmeta4object,znodoCM,"","PAGA08");
						zPAGA09   = m.getItem(znodoCM,zmeta4object,znodoCM,"","PAGA09");
						zPAGA10   = m.getItem(znodoCM,zmeta4object,znodoCM,"","PAGA10");
						zPAGA11   = m.getItem(znodoCM,zmeta4object,znodoCM,"","PAGA11");
						zPAGA12   = m.getItem(znodoCM,zmeta4object,znodoCM,"","PAGA12");
						zPAGA13   = m.getItem(znodoCM,zmeta4object,znodoCM,"","PAGA13");
						zPAGA14   = m.getItem(znodoCM,zmeta4object,znodoCM,"","PAGA14");
						zPAGA15   = m.getItem(znodoCM,zmeta4object,znodoCM,"","PAGA15");
						zPAGA16   = m.getItem(znodoCM,zmeta4object,znodoCM,"","PAGA16");
						zPAGA17   = m.getItem(znodoCM,zmeta4object,znodoCM,"","PAGA17");
						zPAGA18   = m.getItem(znodoCM,zmeta4object,znodoCM,"","PAGA18");
						zPAGA19   = m.getItem(znodoCM,zmeta4object,znodoCM,"","PAGA19");
						zPAGA20   = m.getItem(znodoCM,zmeta4object,znodoCM,"","PAGA20");
					
			%>
			
			<tr class="modo2">				
				<script>
					// Variables con los valores de la fila
					concepto 	= '<%=zID_ITEM%>';					
					valores  	= new Array('<%=zPAGA01%>','<%=zPAGA02%>',	'<%=zPAGA03%>','<%=zPAGA04%>','<%=zPAGA05%>','<%=zPAGA06%>','<%=zPAGA07%>','<%=zPAGA08%>','<%=zPAGA09%>','<%=zPAGA10%>','<%=zPAGA11%>','<%=zPAGA12%>','<%=zPAGA13%>','<%=zPAGA14%>','<%=zPAGA15%>','<%=zPAGA16%>','<%=zPAGA17%>','<%=zPAGA18%>','<%=zPAGA19%>','<%=zPAGA20%>');
					totalesSinNulos 	= new Array('<%=zTOTAL%>');
					totalesSinNulos		= quitarNulos(totalesSinNulos);
					total 	 			= totalesSinNulos[0];
					ultimaFila 	= false;
					
					// Contador para controlar la última fila
					contador 	+= 1;
					
					if(contador == '<%=zposicioncm%>' ) {ultimaFila = true;}
					
					// Pintamos la fila con los valores recogidos
					
					valores = quitarNulos(valores);
					conceptoFila (concepto,ultimaFila);
					valoresFila (NumPagasReales, NumColtotales,valores,ultimaFila);
					totalFila (total,ultimaFila);
					
					
				</script>
			</tr>
			<%		}
				} catch(Exception e) {}

			%>
			
		<%} //Fin condición nodoCM %>
		
		<tr>
			<td>
				&nbsp;				
			</td>
		</tr>		
		
		<% if(zposiciondk > 0) { %>
		
		<tr>			
			<script>								
				CabeceraRetDir(NumPagasReales,NumColtotales,'Dietas y Kilometrajes'); 
			</script>			
		</tr>						
		<tr class="modo1">
			<script> 
				concepto = "";
				valores  = "";
				total 	 = "";
				contador = 0;
				CabeceraPagasRetDir (NumPagasReales,NumColtotales,pagas);				
			</script>
		</tr>
		
		
			<%

			// Cargamos los datos del nodo de salario convenio

			try {    
									
					zPAGA01  	= ""; zPAGA02  	= ""; zPAGA03  	= ""; zPAGA04  	= ""; zPAGA05  	= "";
					zPAGA06  	= ""; zPAGA07  	= ""; zPAGA08  	= ""; zPAGA09  	= ""; zPAGA10  	= "";
					zPAGA11  	= ""; zPAGA12  	= ""; zPAGA13  	= ""; zPAGA14  	= ""; zPAGA15  	= "";
					zPAGA16  	= ""; zPAGA17  	= ""; zPAGA18  	= ""; zPAGA19  	= ""; zPAGA20  	= "";
					zID_ITEM 	= "";			
					zTOTAL		= "";
					
					for (i = 0; i < zposiciondk; i++){
						
						id 		= String.valueOf(i);
						
						m.moveData(znodoDK,zmeta4object,znodoDK,id);
						
						zTOTAL    = m.getItem(znodoDK,zmeta4object,znodoDK,"","TOTAL");
						zID_ITEM  = m.getItem(znodoDK,zmeta4object,znodoDK,"","ID_ITEM");
						zPAGA01   = m.getItem(znodoDK,zmeta4object,znodoDK,"","PAGA01");
						zPAGA02   = m.getItem(znodoDK,zmeta4object,znodoDK,"","PAGA02");
						zPAGA03   = m.getItem(znodoDK,zmeta4object,znodoDK,"","PAGA03");
						zPAGA04   = m.getItem(znodoDK,zmeta4object,znodoDK,"","PAGA04");
						zPAGA05   = m.getItem(znodoDK,zmeta4object,znodoDK,"","PAGA05");
						zPAGA06   = m.getItem(znodoDK,zmeta4object,znodoDK,"","PAGA06");
						zPAGA07   = m.getItem(znodoDK,zmeta4object,znodoDK,"","PAGA07");
						zPAGA08   = m.getItem(znodoDK,zmeta4object,znodoDK,"","PAGA08");
						zPAGA09   = m.getItem(znodoDK,zmeta4object,znodoDK,"","PAGA09");
						zPAGA10   = m.getItem(znodoDK,zmeta4object,znodoDK,"","PAGA10");
						zPAGA11   = m.getItem(znodoDK,zmeta4object,znodoDK,"","PAGA11");
						zPAGA12   = m.getItem(znodoDK,zmeta4object,znodoDK,"","PAGA12");
						zPAGA13   = m.getItem(znodoDK,zmeta4object,znodoDK,"","PAGA13");
						zPAGA14   = m.getItem(znodoDK,zmeta4object,znodoDK,"","PAGA14");
						zPAGA15   = m.getItem(znodoDK,zmeta4object,znodoDK,"","PAGA15");
						zPAGA16   = m.getItem(znodoDK,zmeta4object,znodoDK,"","PAGA16");
						zPAGA17   = m.getItem(znodoDK,zmeta4object,znodoDK,"","PAGA17");
						zPAGA18   = m.getItem(znodoDK,zmeta4object,znodoDK,"","PAGA18");
						zPAGA19   = m.getItem(znodoDK,zmeta4object,znodoDK,"","PAGA19");
						zPAGA20   = m.getItem(znodoDK,zmeta4object,znodoDK,"","PAGA20");
					
			%>
			
			<tr class="modo2">				
				<script>
					// Variables con los valores de la fila
					concepto 	= '<%=zID_ITEM%>';					
					valores  	= new Array('<%=zPAGA01%>','<%=zPAGA02%>',	'<%=zPAGA03%>','<%=zPAGA04%>','<%=zPAGA05%>','<%=zPAGA06%>','<%=zPAGA07%>','<%=zPAGA08%>','<%=zPAGA09%>','<%=zPAGA10%>','<%=zPAGA11%>','<%=zPAGA12%>','<%=zPAGA13%>','<%=zPAGA14%>','<%=zPAGA15%>','<%=zPAGA16%>','<%=zPAGA17%>','<%=zPAGA18%>','<%=zPAGA19%>','<%=zPAGA20%>');
					totalesSinNulos 	= new Array('<%=zTOTAL%>');
					totalesSinNulos		= quitarNulos(totalesSinNulos);
					total 	 			= totalesSinNulos[0];
					ultimaFila 	= false;
					
					// Contador para controlar la última fila
					contador 	+= 1;
					
					if(contador == '<%=zposiciondk%>' ) {ultimaFila = true;}
					
					// Pintamos la fila con los valores recogidos
					
					valores = quitarNulos(valores);
					
					conceptoFila (concepto,ultimaFila);
					valoresFila (NumPagasReales, NumColtotales,valores,ultimaFila);
					totalFila (total,ultimaFila);
					
					
				</script>
			</tr>
			<%		}
				} catch(Exception e) {}

			%>
			
		<%} //Fin condición nodoDK %>
		
		<tr>
			<td>
				&nbsp;				
			</td>
		</tr>		
		
		<% if(zposicionrf > 0) { %>
		
		<tr>			
			<script>								
				CabeceraRetDir(NumPagasReales,NumColtotales,'Retribuci&oacute;n Flexible'); 
			</script>			
		</tr>						
		<tr class="modo1">
			<script> 
				concepto = "";
				valores  = "";
				total 	 = "";
				contador = 0;
				CabeceraPagasRetDir (NumPagasReales,NumColtotales,pagas);				
			</script>
		</tr>
		
		
			<%

			// Cargamos los datos del nodo de salario convenio

			try {    
									
					zPAGA01  	= ""; zPAGA02  	= ""; zPAGA03  	= ""; zPAGA04  	= ""; zPAGA05  	= "";
					zPAGA06  	= ""; zPAGA07  	= ""; zPAGA08  	= ""; zPAGA09  	= ""; zPAGA10  	= "";
					zPAGA11  	= ""; zPAGA12  	= ""; zPAGA13  	= ""; zPAGA14  	= ""; zPAGA15  	= "";
					zPAGA16  	= ""; zPAGA17  	= ""; zPAGA18  	= ""; zPAGA19  	= ""; zPAGA20  	= "";
					zID_ITEM 	= "";			
					zTOTAL		= "";
					
					for (i = 0; i < zposicionrf; i++){
						
						id 		= String.valueOf(i);
						
						m.moveData(znodoRF,zmeta4object,znodoRF,id);
						
						zTOTAL    = m.getItem(znodoRF,zmeta4object,znodoRF,"","TOTAL");
						zID_ITEM  = m.getItem(znodoRF,zmeta4object,znodoRF,"","ID_ITEM");
						zPAGA01   = m.getItem(znodoRF,zmeta4object,znodoRF,"","PAGA01");
						zPAGA02   = m.getItem(znodoRF,zmeta4object,znodoRF,"","PAGA02");
						zPAGA03   = m.getItem(znodoRF,zmeta4object,znodoRF,"","PAGA03");
						zPAGA04   = m.getItem(znodoRF,zmeta4object,znodoRF,"","PAGA04");
						zPAGA05   = m.getItem(znodoRF,zmeta4object,znodoRF,"","PAGA05");
						zPAGA06   = m.getItem(znodoRF,zmeta4object,znodoRF,"","PAGA06");
						zPAGA07   = m.getItem(znodoRF,zmeta4object,znodoRF,"","PAGA07");
						zPAGA08   = m.getItem(znodoRF,zmeta4object,znodoRF,"","PAGA08");
						zPAGA09   = m.getItem(znodoRF,zmeta4object,znodoRF,"","PAGA09");
						zPAGA10   = m.getItem(znodoRF,zmeta4object,znodoRF,"","PAGA10");
						zPAGA11   = m.getItem(znodoRF,zmeta4object,znodoRF,"","PAGA11");
						zPAGA12   = m.getItem(znodoRF,zmeta4object,znodoRF,"","PAGA12");
						zPAGA13   = m.getItem(znodoRF,zmeta4object,znodoRF,"","PAGA13");
						zPAGA14   = m.getItem(znodoRF,zmeta4object,znodoRF,"","PAGA14");
						zPAGA15   = m.getItem(znodoRF,zmeta4object,znodoRF,"","PAGA15");
						zPAGA16   = m.getItem(znodoRF,zmeta4object,znodoRF,"","PAGA16");
						zPAGA17   = m.getItem(znodoRF,zmeta4object,znodoRF,"","PAGA17");
						zPAGA18   = m.getItem(znodoRF,zmeta4object,znodoRF,"","PAGA18");
						zPAGA19   = m.getItem(znodoRF,zmeta4object,znodoRF,"","PAGA19");
						zPAGA20   = m.getItem(znodoRF,zmeta4object,znodoRF,"","PAGA20");
					
			%>
			
			<tr class="modo2">				
				<script>
					// Variables con los valores de la fila
					concepto 	= '<%=zID_ITEM%>';					
					valores  	= new Array('<%=zPAGA01%>','<%=zPAGA02%>',	'<%=zPAGA03%>','<%=zPAGA04%>','<%=zPAGA05%>','<%=zPAGA06%>','<%=zPAGA07%>','<%=zPAGA08%>','<%=zPAGA09%>','<%=zPAGA10%>','<%=zPAGA11%>','<%=zPAGA12%>','<%=zPAGA13%>','<%=zPAGA14%>','<%=zPAGA15%>','<%=zPAGA16%>','<%=zPAGA17%>','<%=zPAGA18%>','<%=zPAGA19%>','<%=zPAGA20%>');
					totalesSinNulos 	= new Array('<%=zTOTAL%>');
					totalesSinNulos		= quitarNulos(totalesSinNulos);
					total 	 			= totalesSinNulos[0];
					ultimaFila 	= false;
					
					// Contador para controlar la última fila
					contador 	+= 1;
					
					if(contador == '<%=zposicionrf%>' ) {ultimaFila = true;}
					
					// Pintamos la fila con los valores recogidos
					
					valores = quitarNulos(valores);					
					conceptoFila (concepto,ultimaFila);
					valoresFila (NumPagasReales, NumColtotales,valores,ultimaFila);
					totalFila (total,ultimaFila);
					
					
				</script>
			</tr>
			<%		}
				} catch(Exception e) {}

			%>
			
		<%} //Fin condición nodoRF %>
		<% if(zposicioncj > 0) { %>
		<tr>
			<td>
				&nbsp;
				<script> 
		
					concepto = "";
					valores  = "";
					total 	 = "";
					contador = 0;
		
				</script>
			</td>
		</tr>
		<tr>
			<td colspan = "10" style="text-align:left;">
				<h3> <i> COMPROMISOS A LA JUBILACI&Oacute;N (&Uacute;ltimo estudio actuarial ejercicio anterior) </i> </h3>				
			</td>
		</tr>
		
		<tr>
			<td>
				&nbsp;				
			</td>
		</tr>		
				
		
			<%

			// Cargamos los datos del nodo de compromiso jubilacion

			try {    
									
					zPAGA01  	= "";  zTOTAL  = "";
					zID_ITEM 	= "";										
					
					id 			= String.valueOf(zposicioncj - 1); 
					
					m.moveData(znodoCJ,zmeta4object,znodoCJ,id);
					
					zID_ITEM  	= m.getItem(znodoCJ,zmeta4object,znodoCJ,"","ID_ITEM");
					zPAGA01   	= m.getItem(znodoCJ,zmeta4object,znodoCJ,"","PAGA01");
					zTOTAL   	= m.getItem(znodoCJ,zmeta4object,znodoCJ,"","TOTAL");
						
					
			%>
		
			<tr>				
				<script>CabeceraRetJubDir('0','1','Compromiso a la Jubilación'); </script>
			</tr>
			<tr class="modo2">											
									
				<script>
					// Variables con los valores de la fila
					concepto 	= '<%=zID_ITEM%>';
					valores  	= new Array('<%=zTOTAL%>');
					totalesSinNulos 	= new Array('<%=zTOTAL%>');
					totalesSinNulos		= quitarNulos(totalesSinNulos);
					total 	 			= totalesSinNulos[0];
					ultimaFila 	= false;
					
					// Contador para controlar la última fila
					contador += 1;
					
					if(contador == '<%=zposicioncj%>' ) {ultimaFila = true;}
					
					// Pintamos la fila con los valores recogidos
					
					valores = quitarNulos(valores);
					conceptoFilaIn(concepto,ultimaFila);
					valoresFilaIn (NumPagasReales, 1,valores,ultimaFila);
					//totalFilaIn (total,ultimaFila);
					
				</script>
			
			</tr>
			<tr class="modo1">
				<td style="border: solid black; border-top-width: 1px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 1px;text-align: left;vertical-align: left;font-weight:bolder;">Total</td>
				<script>
					valores = quitarNulos(valores);													
					totalTablaJub (NumPagasReales, 1,valores);
				</script>
			</tr>
		
		<%		} catch(Exception e) {}
			} // Fin condición nodoCJ

		%>
	
		<% if(zposicionpe > 0) { %>	
		<tr>
			<td>
				&nbsp;
				<script> 
		
					concepto = "";
					valores  = "";
					total 	 = "";
					concepto2	= "";
					valores2  = "";
					total2 	 = "";
					contador = 0;

					
				</script>
			</td>
		</tr>
		<tr>
			<td colspan = "10" style="text-align:left;">
				<h3> <i> PLAN PREVISI&Oacute;N SOCIAL EMPRESARIAL</i> </h3>				
			</td>
		</tr>
		
		<tr>
			<td>
				&nbsp;				
			</td>
		</tr>
		
			<%

			// Cargamos los datos del nodo de plan de pensiones

			try {    
									
					zTOTAL   	= "";
					zID_ITEM 	= "";										
			%>			
			<script>
					var vOrdinaria 	= 0;	//Aportación Ordinaria PPSE
					var vExtraordinaria	 	= 0;	//Aportacion Personal al PPSE									
					var vOrdinariaAcum 	= 0;	//Aportación PPSE Ordinaria Acumulada									
					var vExtraordinariaAcum 	= 0;	//Aportación PPSE Extraordinaria Acumulada									
					var total = 0;
					var totalAcum = 0;
					var totalOrdinario = 0;
					var totalExtraOrdinario = 0;
					var totaldetotales = 0;
					var literal1 = "";
					var literal2 = "";
			</script>					
			<%

					for (i = 0; i < zposicionpe; i++){
						
						id 		= String.valueOf(i);					
						m.moveData(znodoPE,zmeta4object,znodoPE,id);				
						zID_ITEM  	= m.getItem(znodoPE,zmeta4object,znodoPE,"","ID_ITEM");				
						zTOTAL   	= m.getItem(znodoPE,zmeta4object,znodoPE,"","TOTAL");
						
						
			%>	
					
											
							<script>
								// Variables con los valores de la fila
								literal1 = "Aportación último año";
								literal2 = "Aportación Acumulada";
								concepto 	= '<%=zID_ITEM%>';
								importe = parseFloat('<%=zTOTAL%>');

								//no tenemos forma de saber qué concepto es el que nos viene en el nodo. Pueden venirnos de 0 a 4 registros, con lo que los cotejamos
								if (concepto == "Aportación Ordinaria PPSE") {vOrdinaria = importe;}
								if (concepto == "Aportacion Personal al PPSE") {vExtraordinaria = importe;}							
								if (concepto == "Aportación PPSE Ordinaria Acumulada") {vOrdinariaAcum = importe;}
								if (concepto == "Aportación PPSE Extraordinaria Acumulada") {vExtraordinariaAcum = importe;}																				
								//alert (vOrdinaria + '  ' + vExtraordinaria + '  ' + vOrdinariaAcum + '  ' + vExtraordinariaAcum + '  ' + valores[3] )
								
								//22/11/2016. La extraordinaria anual, no puede superar la ordinaria. Por eso este control
								if (vExtraordinaria > vOrdinaria) {vExtraordinaria = vOrdinaria;}
								
								valores = new Array(vOrdinaria,vExtraordinaria,vOrdinariaAcum,vExtraordinariaAcum)
								
								//calculamos los valores a pintar
								total = vOrdinaria + vExtraordinaria;
								totalAcum = vOrdinariaAcum + vExtraordinariaAcum;
								totalOrdinario = vOrdinaria + vOrdinariaAcum;
								totalExtraOrdinario = vExtraordinaria + vExtraordinariaAcum;
								totaldetotales = totalOrdinario + totalExtraOrdinario;	
									
								valorestotales = new Array(total,totalAcum,totalOrdinario,totalExtraOrdinario,totaldetotales)
							</script>
						
		
		<%			}%>
			<tr>				
				<script>
					CabeceraRetPlanDir('0','1','PPSE'); 
					//y les damos el formato de Cyc a los importes a pintar
					valores = quitarNulos(valores)
					valorestotales = quitarNulos(valorestotales)
				</script>
			</tr>			
			
			<tr class="modo2">													
				<script>							
					//alert (valores[0] + '  ' + valores[1] + '  ' + valores[2] + '  ' + valores[3] )
					document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1">' + literal1 + '</td>');
					document.write('<td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1">' + valores[0] + '</td>');
					document.write('<td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1">' + valores[1] +'</td>');
					document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;color:green;" colspan="1">' + valorestotales[0] + '</td>');
				</script>
			</tr>
			<tr class="modo2">													
				<script>
					//alert (valorestotales[0] + '  ' + valorestotales[1] + '  ' + valorestotales[2] + '  ' + valorestotales[3] + '  ' + valorestotales[4] )
					document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1">' + literal2 + '</td>');
					document.write('<td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1">' + valores[2] + '</td>');
					document.write('<td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1">' + valores[3] +'</td>');
					document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;color:green;" colspan="1">' + valorestotales[1] + '</td>');
				</script>							
			</tr>	
						
		<tr class="modo1">
			<td style="border: solid black; border-top-width: 1px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 1px; text-align:left;vertical-align: left;font-weight:bolder;">Total</td>
			<td style="border: solid black; border-top-width: 1px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px; text-align:right;" ><script> document.write(valorestotales[2]); </script></td>
			<td style="border: solid black; border-top-width: 1px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px; text-align:right;" ><script> document.write(valorestotales[3]); </script></td>
			<td style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px;" ><script> document.write(valorestotales[4]); </script></td>		 		
		</tr>		
		<%
				} catch(Exception e) {}
			} // Fin condición nodoPE

		%>


		<% if(zposicionif > 0) { %>	
		<tr>
			<td>
				&nbsp;
				<script> 
		
					concepto 	= "";
					valores  	= "";
					total 	 	= "";
					contador 	= 0;
					totalCol1	= 0;

				</script>
			</td>
		</tr>
		<tr>
			<td colspan = "10" style="text-align:left;">
				<h3> <i> INVERSI&Oacute;N en FORMACI&Oacute;N </i> </h3>				
			</td>
		</tr>
		
		<tr>
			<td>
				&nbsp;				
			</td>
		</tr>
		<tr> <script> TotalDePrueba = 0; </script>			
			<th colspan="2" style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; vertical-align: bottom;text-align:left;font-weight:bold;">Inversion Individual en Formacion</th>
		</tr>		
		
			<%

			// Cargamos los datos del nodo de inversión en formación

			try {    
									
					zTOTAL   	= "";
					zID_ITEM 	= "";										
						
					for (i = 0; i < zposicionif; i++){
						
						id 		= String.valueOf(i);					
						m.moveData(znodoIF,zmeta4object,znodoIF,id);				
						zID_ITEM  	= m.getItem(znodoIF,zmeta4object,znodoIF,"","ID_ITEM");				
						zTOTAL   	= m.getItem(znodoIF,zmeta4object,znodoIF,"","TOTAL");
						
						
			%>	
						
						<tr class="modo2">											
												
							<script>
								// Variables con los valores de la fila
								concepto 	= '<%=zID_ITEM%>';
								valores  	= new Array('<%=zTOTAL%>');
								//lalala = '<%=zTOTAL%>';
								//alert(lalala.replace("00000",""));
								//alert('<%=zTOTAL%>');
								totalAsumar = '<%=zTOTAL%>';
								//alert(totalAsumar);
								totalAsumar = parseFloat(totalAsumar.replace("0000",""));
								//alert(totalAsumar);
								TotalDePrueba += totalAsumar;
								//totalCol1 += parseFloat('<%=zTOTAL%>');
								//totalCol1 += parseFloat(totalAsumar.replace("00000",""));
								//alert(TotalDePrueba);
								ultimaFila 	= false;
								
								// Contador para controlar la última fila
								contador += 1;
								
								if(contador == '<%=zposicionif%>' ) {ultimaFila = true;}
								
								// Pintamos la fila con los valores recogidos
								
								valores = quitarNulos(valores);
								conceptoFilaIn(concepto,ultimaFila);
								valoresFilaIn (NumPagasReales, 1,valores,ultimaFila);
								
							</script>
						
						</tr>						
		
		<%			}%>
		
						<tr class="modo1">
							<td style="border: solid black; border-top-width: 1px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 1px;text-align: left;vertical-align: left;font-weight:bolder;">Total</td>
							<script>
								//alert(TotalDePrueba);
								//TotalDePrueba = TotalDePrueba.toString();
								//TotalDePrueba = TotalDePrueba.replace("99999999999","");
								//alert(TotalDePrueba);
								//TotalDePrueba = parseFloat(TotalDePrueba)
								//alert(TotalDePrueba);
								PintaTablaIn (parseFloat(TotalDePrueba));
							</script>
						</tr>
		
		<%
				} catch(Exception e) {}
			} // Fin condición nodoIF

		%>
		
<!-- RETRIBUCIONES INDIRECTAS : FIN -->
			
		
	</tbody>	



</table>

</body>

</html>