<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Historial de puestos</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<script type="text/javaScript">
function detalle(job){
	window.open('/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0_desc.jsp?id_job='+job+'&soc=CYC','DPT','resizable=yes,tmenubar=no,status=no,scrollbars=yes,width=700,height=1400');
   	window.reload();
}
</script>
<%		
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_JOB";
   String zmeta4object = "SSE_JOB";
   String znodo = "SSE_JOB_PRINCIPAL";
   String zjob = null;

// No se modifica en general.
   
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zmove = znodo + ":" + znodo + "[FIRST]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   
// Metodo de carga del Meta4Object generico

   String zmetodocarga = zsubsesion + "!SSE_JOB_PRINCIPAL.CARGA";

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
 
   String zfechainicio = zcomun + "SCO_DT_START";
   String zfechafin = zcomun + "SCO_DT_END";
   String zpuesto = zcomun + "SCO_ID_JOB_CODE";
   String znombrepuesto = zcomun + "STD_N_JOB_CODE";
   String zfunciones = zcomun + "CSP_FUNCIONES";
   String zMostrar = zcomun + "CSP_MOSTRAR_DOC";

%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="JOB_ARG" value="null"/></m4:exec>
<m4:sortitems m4name="SSE_JOB!SSE_JOB_PRINCIPAL.CARGA">
	<m4:param name="SCO_DT_START" value="DESC"/>
</m4:sortitems>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
	int  zcounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String zto = new Integer(new Integer(zcountv).intValue()-1).toString();
%>

<table width="100%">
<tr><td class="titulofuncional" colspan="2">Historial de puestos</td></tr>
<tr>
	<td><img src="/iconos/noname_puesto_181_125.gif" width="115" height="100" alt="Historial de puestos" title="Historial de puestos" /></td>
	<td>
	<div class="fuentedescripcion">Consulta tu historial de puestos, para ver la descripci&oacute;n de cada puesto sit&uacute;ate sobre el nombre del mismo.</div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" tabindex="1" title="Ir a mi puesto de trabajo" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3">Mi puesto de trabajo</a></li>
	</ul>
	</td>
</tr>
</table>
<%if (zcounti > 0) {
	String zposicions = "0";	
	int zposicion =0;%>	
<table class="tablaestados" cellspacing="0" width="100%">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Puesto</td>
	<td class="tablaestadosceldatitulo">&nbsp;Inicio</td>
	<td class="tablaestadosceldatitulo">&nbsp;Fin</td>
</tr>
<m4:loop from="0" to="<%=zto%>">
<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
//Si el puesto tiene algo en el campo csp_funcines nos trae al nuevo documento.
	int auxNDPT =0;
		
	try{
		
		auxNDPT = zfunciones.length();
		
	}catch(NullPointerException e){
		
		auxNDPT=0;
	}
	//trocemos el número que nos trae
	String mostrarDocumento = zMostrar.substring(0, 1);
		%>
<tr>
	
	<td class="fuentevalor">
	<%if (auxNDPT>0){%>			
		
		<a class="enlacefuncional" title="Detalle del puesto" href="javascript:detalle ('<m4:item m4name="<%=zpuesto%>" jsafe="true" htmlsafe="true"/>');">&nbsp;<m4:item m4name="<%=znombrepuesto%>" htmlsafe="true"/></a>

	<%}else if(mostrarDocumento.equals("1")){%>
	<!--  Falta la carga del M4O CSP_QUIEN_ES_QUIEN  -->
	<!--  Mirar sse_g3_p0_desc_old y mirar como hacia la llamada  -->
		<a class="enlacefuncional" title="DPT" style="text-decoration: underline;"  href="/servlet/download_blob?task=CSP_QUIEN_ES_QUIEN%>&item=CSP_QUIEN_ES_QUIEN!CSP_FICHA_DETALLADA[0].CSP_DOC_PUESTO_FICHA" target="_blank"> <m4:item m4name="<%=znombrepuesto%>" htmlsafe="true"/> </a>	

	<%}else{%>
		<span><m4:item m4name="<%=znombrepuesto%>" htmlsafe="true"/></span>
	<%}%>
	</td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zfechainicio%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zfechafin%>" htmlsafe="true"/></td>


</tr>
</m4:loop>
</table>	
<%} else {%>	
<div class="fuentenodatos">Actualmente no tienes ning&uacute;n dato de tu historial de puestos.</div>
<%}%>
<div> 
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
</div>
<m4:endpage/>
</body>
</html>



