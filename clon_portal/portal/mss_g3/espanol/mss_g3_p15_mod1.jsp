<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>

<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>	
<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %>	
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>

<%@ include file="/mss_g3/mss_ev_trans.jsp"%>

<% 
String ztitle = TranMss.getProperty("ev_mss.ValObj");
%>
<head>
<title><%=ztitle%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />

<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
String zposicion = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zposicion");  
String zordinal = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal");
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
  
%>
<script type="text/javascript">
function visualizar(t,c,f){
	if (c==1)
	{
		m4valor("oculto","id_cono",t,"set");
		document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod2.jsp?estado=31";
	}
	
	if (c==2)
	{
		m4valor("oculto","id_obj",t,"set");
		m4valor("oculto","id_mag",f,"set");
		document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod3.jsp?estado=31";
	}
	
	if (c==3)
	{
		m4valor("oculto","id_obj",t,"set");
		document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod4.jsp?estado=31";
	}
		
	m4valor("oculto","id_re","1","set");
	m4submit("oculto");
}
</script>
</head>
<body>
<%@ include file="../../mss_generico/espanol/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
	String zsubsesion = "SSM_EV_ROL_LV_OBJ";
	String zmeta4object = "SSM_EV_ROL_LV_OBJ";
	String znodo = "SSE_EV_ROL_LV_OBJ";
	String zraiz = zsubsesion + "!" + znodo + ".";

	String zoutputdef = zsubsesion + "!" + znodo + "[*]";
	String zmove = znodo + ":" + znodo + "[" + zposicion + "]";	
	String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
	
	String ztipocarga = "EVA";   
	String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
	String zmetodo = "CARGA:" + zraiz + "SSE_MOSTRAR" ;		
	
	String zSCO_ID_OBJECTIVE = "";
    String zSCO_NM_OBJECTIVE = "";
    String zSCO_N_OBJECTIVE = "";
	String zSCO_ID_LEVEL = "";
	String zSCO_NM_LEVEL = "";
	String zSCO_N_LEVEL = "";	
	String zSCO_ID_MAGNITUD = "";
    String zSCO_NM_MAGNITUDE = "";
    String zSCO_N_MAGNITUDE = "";
	String zSCO_SCHED_VALUE = "";
    String zSCO_WEIGHT = "";
	String zSCO_N_WEIGHT ="";
	String zSCO_DT_START = "";
	String zSCO_DT_END= "";

	
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="CONT" value="<%=zordinal%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<% 
try {
	M4Operations t = new M4Operations(request);
	String zSCOIDASSESSMTEC="";
	String zSCOEMPLOYEEAGREE="";
	String zSCOEMPLOYEE="";
	String zSCOEMPLOYEECOMM="";
	String zSCO_N_SCHED_VALUE="";	
	String zSCO_NAME = "";		
    String zSCO_N_NAME = "";	
	String zSCO_DESCRIPTION = "";		
    String zSCO_N_DESCRIPTION = "";
    String zSCO_N_DT_START= "";
    String zSCO_N_DT_END= "";
	String dd = "";
	String mm = "";
	String yyyy = "";	
	String zSSEPOS="";
	int dValor=0;
	int dPeso=0;
	zSSEPOS = t.getItem(znodo,zmeta4object,znodo,"","ORDEN"); 
	t.moveData(znodo,zmeta4object,znodo,zSSEPOS);
	zSCOIDASSESSMTEC = t.getItem(znodo,zmeta4object,znodo,"","SCO_ID_ASSESSM_TEC"); 
	zSCO_ID_OBJECTIVE = t.getItem(znodo,zmeta4object,znodo,"","SCO_ID_OBJECTIVE"); 
	zSCO_N_OBJECTIVE = t.getLabel(znodo,zmeta4object,znodo,"SCO_NM_OBJECTIVE"); 
	zSCOEMPLOYEEAGREE = t.getItem(znodo,zmeta4object,znodo,"","SCO_EMPLOYEE_AGREE"); 
	zSCOEMPLOYEECOMM = t.getItem(znodo,zmeta4object,znodo,"","SCO_EMPLOYEE_COMM"); 
	zSCO_NM_OBJECTIVE = t.getItem(znodo,zmeta4object,znodo,"","SCO_NM_OBJECTIVE"); 
	zSCO_ID_LEVEL = t.getItem(znodo,zmeta4object,znodo,"","SCO_ID_LEVEL");  
	zSCO_NM_LEVEL = t.getItem(znodo,zmeta4object,znodo,"","SCO_NM_LEVEL"); 
	zSCO_N_LEVEL = t.getLabel(znodo,zmeta4object,znodo,"SCO_NM_LEVEL"); 	
    zSCO_ID_MAGNITUD = t.getItem(znodo,zmeta4object,znodo,"","SCO_ID_MAGNITUD");  
    zSCO_NM_MAGNITUDE = t.getItem(znodo,zmeta4object,znodo,"","SCO_NM_MAGNITUDE"); 
	zSCO_N_MAGNITUDE = t.getLabel(znodo,zmeta4object,znodo,"SCO_NM_MAGNITUDE"); 	
	zSCO_SCHED_VALUE = t.getItem(znodo,zmeta4object,znodo,"","SCO_SCHED_VALUE");  
	zSCO_N_SCHED_VALUE= t.getLabel(znodo,zmeta4object,znodo,"SCO_SCHED_VALUE");	
    zSCO_WEIGHT = t.getItem(znodo,zmeta4object,znodo,"","SCO_WEIGHT");	
	zSCO_N_WEIGHT = t.getLabel(znodo,zmeta4object,znodo,"SCO_WEIGHT");
    zSCO_NAME = t.getItem(znodo,zmeta4object,znodo,"","SCO_NAME"); 
    zSCO_N_NAME = t.getLabel(znodo,zmeta4object,znodo,"SCO_NAME"); 
    zSCO_DESCRIPTION = t.getItem(znodo,zmeta4object,znodo,"","SCO_DESCRIPTION"); 
    zSCO_DT_START = t.getItem(znodo,zmeta4object,znodo,"","SCO_DT_START"); 
	yyyy = zSCO_DT_START .substring(0,4);
	mm = zSCO_DT_START .substring(5,7);
	dd = zSCO_DT_START .substring(8,10);
	zSCO_DT_START 	= dd + "-" + mm + "-" + yyyy;
    zSCO_N_DT_START= t.getLabel(znodo,zmeta4object,znodo,"SCO_DT_START");
    zSCO_DT_END = t.getItem(znodo,zmeta4object,znodo,"","SCO_DT_END"); 
	yyyy = zSCO_DT_END .substring(0,4);
	mm = zSCO_DT_END .substring(5,7);
	dd = zSCO_DT_END .substring(8,10);
	zSCO_DT_END 	= dd + "-" + mm + "-" + yyyy;
    zSCO_N_DT_END = t.getLabel(znodo,zmeta4object,znodo,"SCO_DT_END");
    zSCO_N_DESCRIPTION = t.getLabel(znodo,zmeta4object,znodo,"SCO_DESCRIPTION"); 		
	if (zSCOEMPLOYEEAGREE.equals("1"))
	{
		zSCOEMPLOYEE=TranMss.getProperty("ev_mss.LblAgree");
	 }
	else
	{
		zSCOEMPLOYEE=TranMss.getProperty("ev_mss.LblNotAgree");
	}
dPeso = Double.valueOf(zSCO_WEIGHT).intValue();	
if (zSCO_ID_MAGNITUD.equals("")==false){
	dValor = Double.valueOf(zSCO_SCHED_VALUE).intValue();
}	
%>

<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=ztitle%></td></tr>
<tr><td><img alt="<%=ztitle%>" title="<%=ztitle%>"src="/iconos/noname_planes_evaluacion_114_100.gif" width="114" height="100" /></td>
	<td>
	<div class="descripcionfuncional"><%=TranMss.getProperty("ev_mss.DescrValObj")%></div>
	<ul class="listaenlace"><li>
	<a title="<%=TranMss.getProperty("ev_mss.ValObj")%>" class="enlacefuncional"href="javascript:history.back();"> <%=TranMss.getProperty("ev_mss.ValObj")%> </a>
	</li></ul>
	</td>
</tr>
</table>
<form action="  " method="post" name="oculto" id="oculto">
<input type="hidden" id="mss" name="mss"  value="1" />
<input type="hidden" id="id_cono" name="id_cono"  value="" />
<input type="hidden" id="num_obj" name="num_obj"  value="" />
<input type="hidden" id="id_obj" name="id_obj"  value="" />
<input type="hidden" id="id_mag" name="id_mag"  value="" />
<input type="hidden" id="id_re" name="id_re"  value="" />
</form>

<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
	<td colspan="2"><%=TranMss.getProperty("ev_mss.LblObj")%></td>
	<td class="tablamenuright" ><a title="<%=TranMss.getProperty("ev_mss.ValObj")%>"href="javascript:history.back();"><img alt="<%=TranMss.getProperty("ev_mss.ValObj")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9"/></a></td>
</tr>

 
<%
if (zSCO_ID_MAGNITUD.equals("")==false){%>
<tr>
	<td class="fuentevalor" colspan="1"><%=zSCO_N_OBJECTIVE%></td><td class="fuentevalor" colspan="2"><a title="<%=Tran.getProperty("Label.Ver")%>"href="javascript:visualizar('<%=zSCO_ID_OBJECTIVE%>',2,'<%=zSCO_ID_MAGNITUD%>')"><%=zSCO_NM_OBJECTIVE%></a></td>
</tr>
<tr>
	<td class="fuentevalor" colspan="1"><%=zSCO_N_DT_START%></td>
	<td class="fuentevalor" colspan="2"><%=zSCO_DT_START%></td>
</tr>
<tr>
	<td class="fuentevalor" colspan="1"><%=zSCO_N_DT_END%></td>
	<td class="fuentevalor" colspan="2"><%=zSCO_DT_END%></td>
</tr>
<tr>
	<td class="fuentevalor" colspan="1"><%=zSCO_N_SCHED_VALUE%></td>
	<td class="fuentevalor" colspan="2"><%=dValor%> - <%=zSCO_NM_MAGNITUDE%></td>
</tr>

<%}else{%>
<tr>
	<td class="fuentevalor" colspan="1"><%=zSCO_N_OBJECTIVE%></td><td class="fuentevalor" colspan="2"><a title="<%=Tran.getProperty("Label.Ver")%>" href="javascript:visualizar('<%=zSCO_ID_OBJECTIVE%>',3)"><%=zSCO_NM_OBJECTIVE%></a></td>
</tr>
<tr>
	<td class="fuentevalor" colspan="1"><%=zSCO_N_LEVEL%></td>
	<td class="fuentevalor" colspan="2"><%=zSCO_NM_LEVEL%></td>
</tr>
<%}%>
<%
if (zSCO_NAME.equals("")==false){%>

<tr>
	<td class="fuentecampo" colspan="1"><%=zSCO_N_DESCRIPTION%></td>
	<td class="fuentecampo" colspan="2"><%=zSCO_DESCRIPTION%></td>
</tr>

<%}%>
<tr>
	<td class="fuentecampo" colspan="1"><%=zSCO_N_WEIGHT%></td>
	<td class="fuentecampo" colspan="2"><%=dPeso%></td>
</tr


<table class="tablaestados" width="100%" cellspacing="0" border="0">
<tr class="tablaestadosceldatitulo">
	<td colspan="3"><%=TranMss.getProperty("ev_mss.LblEval")%></td>

</tr>

<tr><td class="fuentecampo"><%=TranMss.getProperty("ev_mss.LblOp")%></td><td class="fuentevalor" colspan="2">&nbsp;<%=zSCOEMPLOYEE%></td ></tr>
<tr><td class="fuentecampo"><%=TranMss.getProperty("ev_mss.LblComentario")%></td><td class="fuentevalor" colspan="2">&nbsp;<%=zSCOEMPLOYEECOMM%></td ></tr>
</table>
<%		
	} catch(Exception e) {}
%>	

<m4:endpage/>
</body>
<%@ include file="../../mss_generico/espanol/mssgenerico_disclaimer.jsp" %>
</div>
</html>