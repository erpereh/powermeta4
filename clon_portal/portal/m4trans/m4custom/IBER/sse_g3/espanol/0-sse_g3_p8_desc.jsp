<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<title>Cuestionario de evaluaci&oacute;n</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>		
<script type="text/javascript" src="/library/jquery.js"></script>
<script type="text/javascript">
function enviar(){

	var conrespuesta = true;
	/*var r = confirm("Advertencia: es necesario contestar todas las preguntas del formulario para que éste sea enviado, en caso contrario esta evaluación seguirá pendiente.¿Desea continuar?.");
	if (r == true) {
		//m4submit("Formulario");
	} */

	$(document).ready(function(){
		$("select > option:selected").each(function(i){
			if ($(this).val()=='R00') {
				conrespuesta = false;
			}
			//alert($(this).text() + " : " + $(this).val());			
		});
		if (conrespuesta) {m4submit("Formulario");} else {alert('Advertencia: es necesario contestar todas las preguntas del formulario para que éste sea enviado, en caso contrario esta evaluación seguirá pendiente.');}
	})
	
}
</script>
<%	
	Generatablaparametros Parametros = new Generatablaparametros (request);
	
	String zpk1 = Parametros.m4paramvalor ("PK1");
	String zpk2 = Parametros.m4paramvalor ("PK2");
	String zpk3 = Parametros.m4paramvalor ("PK3");
	String zpk4 = Parametros.m4paramvalor ("PK4");
	String zpk5 = Parametros.m4paramvalor ("PK5");
	//String zSCOURSE = Parametros.m4paramvalor ("COU");
    String zSCOURSE = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"COU");
	String estado = Parametros.m4paramvalor ("EST");
	

	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
	String ztipo = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"1");
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
	if ((zinicios==null)||(zinicios.equals(""))){
		zinicios = "1";
	}
		
%>
</head>
<body>


	<%@ include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_menusup.jsp" %>
	<%@ include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_links.jsp" %>
<%
	String zsubsesion = "CSP_TRAINING_EVAL"; 	// Meta4Object heredado
	String zmeta4object = "CSP_TRAINING_EVAL";  // Meta4Object heredado
	String znodo = "SSE_FORM_QUESTIONS";
	String znodoeva = "SSE_EVEN_EVAL_SHEET";
	String znodoans = "SSE_ANSWER_VALUE";
 
	// No se modifica en general.

	String zoutputdef = zsubsesion + "!" + znodo + "[*]";
	String zmove = znodo + ":" + znodo + "[FIRST]";

	String zoutputdefans = zsubsesion + "!" + znodoans + "[*]";
	String zmoveans = znodoans + ":" + znodoans + "[FIRST]";
	String zcomunans = znodoans + ":" + zsubsesion + "!" + znodoans + "[&VAR.m4lix]" + ".";

	// Método de carga.

	String ztipocarga = "DET";
	String zmetodocarga = zsubsesion + "!SSE_EVEN_EVAL_SHEET.CARGA";

	// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar 

	String zidrespuesta = zcomunans + "SCO_ID_ANSWER_VALUE";
	String zrespuesta = zcomunans +  "SCO_NM_ANSWER_VALUE";
	//Se añade el tipo de respuesta en los valores
	String zTipoRespuesta = zcomunans +  "SCO_ID_ANSWER_TYPE";

%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 

   	    m.setItem(zsubsesion,znodoeva,"","SCO_ID_DEV_ACTION_ARG",zpk2);
	    m.setItem(zsubsesion,znodoeva,"","SCO_ID_FORM_ARG",zpk3);
	    m.setItem(zsubsesion,znodoeva,"","SCO_OR_STUDENT_ARG",zpk4);

		} catch(Exception e) {}		
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodoans%>"><m4:param name="m4name0" value="<%=zoutputdefans%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
	int  zcounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);

	int  zcountians  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcountians = m.getCountInClient(znodoans,zsubsesion,znodoans);
	} catch(Exception e) {}
	String	zcountvans = String.valueOf(zcountians);
	String ztoans = new Integer(new Integer(zcountvans).intValue()-1).toString();
%>
<table width="100%">
<tr><td class="titulofuncional" colspan="2">Cuestionario de evaluaci&oacute;n</td></tr>
<tr>
	<td><img alt="Cuestionario de evaluaci&oacute;n" src="/iconos/noname_evalua_cursos_74_100.gif" width="100" height="100" /></td>
	<td>
		<div class="descripcionfuncional">
		Para evaluar un curso, completa el siguiente formulario.
		</div>
		<ul class="listaenlace">
		<li><a class="enlacefuncional" title = "Evaluaci&oacute;n de cursos" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31">Evaluaci&oacute;n de cursos</a></li>
	    </ul>
	</td>
</tr>
</table>
<form action="sse_g3_p8_act.jsp" method="post" id="Formulario">
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo"><td colspan="2">Curso:&nbsp;<%=zSCOURSE%></td></tr>
<% 
	try {	
		M4Operations m = new M4Operations(request);
		int i = 0;
		String zSQUESTION = "";
		String zIDQUESTION = "";
		String zSCOIDANSWERTYPE = "";
		for (i = 0; i < zcounti; i++){
			String id = String.valueOf(i);
			m.moveData(znodo,zmeta4object,znodo,id);
			zSQUESTION = m.getItem(znodo,zmeta4object,znodo,"","SCO_NM_L_QUESTION");
			zIDQUESTION = m.getItem(znodo,zmeta4object,znodo,"","SCO_ID_QUESTION");
			zSCOIDANSWERTYPE = m.getItem(znodo,zmeta4object,znodo,"","SCO_ID_ANSWER_TYPE");
%>
<tr>
	<td class = "fuentevalor">&nbsp;*&nbsp;<%=zSQUESTION%></td>
	<td class = "fuentecampo">
	
	<% if (zSCOIDANSWERTYPE.equals("02")){%>		
		<input id="I<%=zIDQUESTION%>" name="I<%=zIDQUESTION%>" size="48"></input>
	<% }else {%>	
	<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveans%>"/></m4:move>
	
	<select id="P<%=zIDQUESTION%>" class = "fuenteformulario" name="P<%=zIDQUESTION%>" title="Escoge la respuesta">
	<option value="R00">Sin respuesta</option>
	<script> 
		var tipoRespuestaForm = '<%=zSCOIDANSWERTYPE%>';
		//alert(tipoRespuestaForm);
	</script>
	<m4:loop from="0" to="<%=ztoans%>">
	<script>
			// Solo cargamos los valores correspondientes al tipo de la respuesta del formulario
			var tipoRespuestaValue = '<m4:item m4name="<%=zTipoRespuesta%>" htmlsafe="true"/>';
			if (tipoRespuestaForm == tipoRespuestaValue) {
				document.write('<option value="R<m4:item m4name="<%=zidrespuesta%>" htmlsafe="true"/>"><m4:item m4name="<%=zrespuesta%>" htmlsafe="true"/></option>');
			}
		</script>
		<!--<option value="R<m4:item m4name="<%=zidrespuesta%>" htmlsafe="true"/>"><m4:item m4name="<%=zrespuesta%>" htmlsafe="true"/></option>-->
	</m4:loop>
	</select>
	
	<% } %>
	</td>			
</tr>
<%
		}
	} catch(Exception e) {}
	if (zcounti > 0) {
%>
<tr>
	<td class="fuenteboton"colspan="2">&nbsp;
	<a href="javascript:enviar();" >	
	<img alt="Enviar" src="/iconos/icono_enviar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>
<%	}else {%>
<tr>
	<td class="fuentenodatos" align="center">
	<br /> No tienes preguntas en este cuestionario.<br /><br />
	</td>
</tr>
<% } %>
</table>
</form>
<%@ include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_disclaimer.jsp" %>
</div>
<script>



</script>
</body>
<m4:endpage/>


