<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="com.meta4.m4operations.*" %>
<HTML>
<HEAD>
<title>Valoraci&oacute;n Eficacia del Responsable</title>
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<script type="text/javascript" src="/library/jquery.js"></script>
	<script type="text/javascript" src="/libreria/functions_val_eficacia.js"></script>
<%
//no cache
  response.setHeader("Pragma", "no-cache"); 
  response.setHeader("Cache-Control", "no-store"); 
  response.setDateHeader("Expires", -1); 
  response.setContentType("text/html;charset=ISO-8859-1");
  request.setCharacterEncoding("UTF8");

%>
</HEAD>
<BODY BGCOLOR="#FFFFFF">
	<m4:startpage m4task="CSP_MNG_VALORA_EFICA"/>
	<m4:beginjob/>
		<m4:datadef m4o="CSP_MNG_VALORA_EFICA" m4name="CSP_MNG_VALORA_EFICA"/>
		<m4:exec m4method="CSP_MNG_VALORA_EFICA!CSP_MNG_VALORA_EFICA.CSP_M_CARGA_ESS"/>
		<m4:outputdef m4alias="CSP_FREE_VAL_EFI_ESS"><m4:param name="m4name0" value="CSP_MNG_VALORA_EFICA!CSP_FREE_VAL_EFI_ESS[*]"/></m4:outputdef>
		<m4:outputdef m4alias="CSP_OPCIONES_DESPLEGABLE" > <m4:param name="m4name0" value="CSP_MNG_VALORA_EFICA!CSP_OPCIONES_DESPLEGABLE[*]"/> </m4:outputdef>
	<m4:endjob/>

<div id="chkrespuestas" style="display:none">
	
</div>	

<table width="100%" cellspacing="0">

<%
int i				  	= 0;
int j				  	= 0;
int zCountPendientes 	= 0; // Contador Valoraciones pendientes
int zCountRespuestas 	= 0; // Contador valores respuesta desplegable

try{
	
	M4Operations mm  = new M4Operations(request);
	zCountPendientes = mm.getCount("CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS");
	zCountRespuestas = mm.getCount("CSP_OPCIONES_DESPLEGABLE","CSP_MNG_VALORA_EFICA","CSP_OPCIONES_DESPLEGABLE");

}
catch(Exception e){}

//out.println("N&umber of records (CSP_FREE_VAL_EFI_ESS): " + zCountPendientes);
//out.println("N&umber of records (CSP_OPCIONES_DESPLEGABLE): " + zCountRespuestas);

String NumRegistrosServer 			= "";
String CSP_ASISTENTES               = "";
String CSP_HORAS_PLANIFICADAS       = "";
String CSP_HORAS_REALIZADAS         = "";
String CSP_ID_DEV_SUBPRODUCT        = "";
String CSP_LISTA_ASISTENTES         = "";
String CSP_NM_DEV_SUBPRODUCT        = "";
String CSP_PARTICIPANTES_PREVISTOS  = "";
String CSP_VALORA_MEDIA_ASISTENTES  = "";
String DT_START                     = "";
String DT_END                       = "";
String SCO_EDUCAT_OBJ				= "";
String STD_ID_PERSON_RESP			= "";

String SCO_NM_ANSWER_VALUE			= "";
String SCO_ID_ANSWER_VALUE			= "";

String NumRegistro 					= "";

try{
		M4Operations qq  = new M4Operations(request);
		for (i = 0; i < zCountPendientes; i++){
							
			NumRegistro  = String.valueOf(i);
			qq.moveData("CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS",NumRegistro);
	
			NumRegistrosServer 			 = qq.getItem("CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","CSP_COUNT");				
			CSP_ASISTENTES               = qq.getItem("CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","CSP_ASISTENTES");
			CSP_HORAS_PLANIFICADAS       = qq.getItem("CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","CSP_HORAS_PLANIFICADAS");
			CSP_HORAS_REALIZADAS         = qq.getItem("CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","CSP_HORAS_REALIZADAS");
			CSP_ID_DEV_SUBPRODUCT        = qq.getItem("CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","CSP_ID_DEV_SUBPRODUCT");
			CSP_LISTA_ASISTENTES         = qq.getItem("CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","CSP_LISTA_ASISTENTES");
			CSP_NM_DEV_SUBPRODUCT        = qq.getItem("CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","CSP_NM_DEV_SUBPRODUCT");
			CSP_PARTICIPANTES_PREVISTOS  = qq.getItem("CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","CSP_PARTICIPANTES_PREVISTOS");
			CSP_VALORA_MEDIA_ASISTENTES  = qq.getItem("CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","CSP_VALORA_MEDIA_ASISTENTES");
			DT_START                     = qq.getItem("CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","DT_START");
			DT_END                       = qq.getItem("CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","DT_END");
			SCO_EDUCAT_OBJ				 = qq.getItem("CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","SCO_EDUCAT_OBJ");
			STD_ID_PERSON_RESP			 = qq.getItem("CSP_FREE_VAL_EFI_ESS","CSP_MNG_VALORA_EFICA","CSP_FREE_VAL_EFI_ESS","","STD_ID_PERSON_RESP");

%>
		<form id="envio<%=i%>" name="envio<%=i%>" action="/servlet/CheckSecurity/JSP/sse_generico/actualizar_valoracion_eficacia.jsp" method="post">
		<tr>
			<td class = "tablaestadosceldatitulo" colspan="2">Detalles Curso</td>
		</tr>
		<tr>
			<td class="fuentecampo" > Curso :</td>
			<td class = "fuentevalor" ><%=CSP_NM_DEV_SUBPRODUCT%> (<%=CSP_ID_DEV_SUBPRODUCT%>)</td>
			
			<input type="hidden" id="CSP_ID_DEV_SUBPRODUCT" name="CSP_ID_DEV_SUBPRODUCT" value="<%=CSP_ID_DEV_SUBPRODUCT%>"/>
			<input type="hidden" id="STD_ID_PERSON_RESP" 	name="STD_ID_PERSON_RESP" 	value="<%=STD_ID_PERSON_RESP%>"/>
			
		</tr>	
			<td class="fuentecampo" > Fecha de Inicio :</td>
			<td class = "fuentevalor" id="fecha"><%=DT_START%> </td>
		<tr>	
			<td class="fuentecampo" > Fecha de Fin :</td>
			<td class = "fuentevalor" id="fecha"><%=DT_END%></td>
		</tr>	
		<tr>	
			<td class="fuentecampo" > Objetivo:</td>
			<td class = "fuentevalor" ><%=SCO_EDUCAT_OBJ%>	</td>
		</tr>
		<tr>	
			<td class="fuentecampo" > Horas Planificadas: </td>
			<td class = "fuentevalor" id="horas"><%=CSP_HORAS_PLANIFICADAS%> </td>
		</tr>
		<tr>	
			<td class="fuentecampo" > Horas Realizadas:</td>
			<td class = "fuentevalor" id="horas"><%=CSP_HORAS_REALIZADAS%></td>
		</tr>
			<td class="fuentecampo" > N&uacute;mero Asistentes Previstos:</td>
			<td class = "fuentevalor" id="numero"><%=CSP_PARTICIPANTES_PREVISTOS%> </td>
		</tr>
		
		<tr>
			<td class="fuentecampo" > N&uacute;mero Asistentes:</td>
			<td class = "fuentevalor" id="numero"><%=CSP_ASISTENTES%> </td>
		</tr>
		<tr>	
			<td class="fuentecampo" > Valoraci&oacute;n media de los asistentes: </td>
			<td class = "fuentevalor" id="horas"><%=CSP_VALORA_MEDIA_ASISTENTES%> </td>
		</tr>
		<tr>
			<td class="fuentecampo" > Listado de Asistentes:</td>
			<td class = "fuentevalor" id="listado"> <%=CSP_LISTA_ASISTENTES%> </td>
		</tr>
		<tr>
			<td class = "tablaestadosceldatitulo" colspan="2">Valoraci&oacute;n curso : <%=CSP_NM_DEV_SUBPRODUCT%> </td>
		</tr>
		<tr>
			<td class="fuentecampo" > Acciones Desempe&ntilde;adas : </td>
			<td class = "fuentecampo"><input type="textarea" id="CSP_ACCIONES_DESEMPENADAS"name="CSP_ACCIONES_DESEMPENADAS" style="width: 450px" value="" /></td>
		</tr>
		<tr>
			<td class="fuentecampo" > Observaciones : </td>
			<td class = "fuentecampo"><input type="textarea" id="CSP_OBSERVACIONES" name="CSP_OBSERVACIONES" style="width: 450px" value="" /></td>
		</tr>
		<tr>
			<td class="fuentecampo" > Valoraci&oacute;n Responsable : </td>
			<td class = "fuentecampo">
				
				<input type="hidden" id="CSP_ID_ANSWER_VALUE" name="CSP_ID_ANSWER_VALUE" value=""/>
				
				<SELECT name="valoracion<%=i%>" id="valoracion<%=i%>" style="width: 450px">
				<%
				
					for (j = 0; j < zCountRespuestas; j++){
						
						NumRegistro  = String.valueOf(j);
						qq.moveData("CSP_OPCIONES_DESPLEGABLE","CSP_MNG_VALORA_EFICA","CSP_OPCIONES_DESPLEGABLE",NumRegistro);
						
						SCO_NM_ANSWER_VALUE = qq.getItem("CSP_OPCIONES_DESPLEGABLE","CSP_MNG_VALORA_EFICA","CSP_OPCIONES_DESPLEGABLE","","SCO_NM_ANSWER_VALUE");
						SCO_ID_ANSWER_VALUE = qq.getItem("CSP_OPCIONES_DESPLEGABLE","CSP_MNG_VALORA_EFICA","CSP_OPCIONES_DESPLEGABLE","","SCO_ID_ANSWER_VALUE");
						
				%>
						<OPTION id="<%=SCO_ID_ANSWER_VALUE%>"> <%=SCO_NM_ANSWER_VALUE%> </OPTION>
				<%}%>
			</td>
		</tr>
		<tr >
	  <td class="fuentevalor" colspan="2" align="center">  
	  <center>
		<input 	name	="btnForm<%=i%>" 
				type	="button" 
				class	="enterlogin" 
				id	 	="btnForm<%=i%>" 
				style	="	background-color: #DC0028;
							background-repeat: no-repeat;
							border: 1px solid #DC0028;
							border-radius: 4px;
							color: #FFFFFF;
							margin: 10px;
							max-width: 150px;
							min-height: 30px;
							min-width: 110px;" 
			value		="Enviar Valoraci&oacute;n"/>
	  </center>
	  </td>		  
	</tr>
	</form>	
<%	}
}catch(Exception e){}%>

</table>
<% if (zCountPendientes>0) {%>
	<center>
		<input 	name	="btnTodos" 
				type	="button" 
				class	="enterlogin" 
				id	 	="btnTodos" 
				style	="	background-color: #DC0028;
							background-repeat: no-repeat;
							border: 1px solid #DC0028;
							border-radius: 4px;
							color: #FFFFFF;
							margin: 10px;
							max-width: 300px;
							min-height: 30px;
							min-width: 110px;" 
			value		="Enviar Todas las Valoraciones"/>
	  </center>

<% }else{%>

<div class="fuentenodatos">Actualmente no tienes ninguna Valoraci&oacute;n de Eficacia del Responsable Pendiente de ning&uacute;n Curso.</div>
<br/> <br/> 

<%}%>	  
<!-- Formulario para el envío mútiple -->

<form id="datos" name="datos" action="/servlet/CheckSecurity/JSP/sse_generico/actualizar_valoracion_eficacia.jsp" method="post">
	<input type="hidden" 	id="valoraciones" 	   	name="valoraciones" 	   value=""/>	
</form>

<m4:endpage/>

</BODY>
</HTML>