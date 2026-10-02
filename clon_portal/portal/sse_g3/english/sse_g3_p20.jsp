<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>


<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/english/menu_ess.jsp" %>	
<%@ include file="/sse_g3/sse_ev_trans.jsp"%>	

<title><%=TranEss.getProperty("ev_ess.ValSeg")%></title>

<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
if ((estado==null)||(estado.equals(""))){estado="0";}
%>
<script type="text/javascript">
function navegar (ord,proceso,nombre) {
var parametros = new Array("estado","ordinal","Proceso","Evaluador");
var valores = new Array(31,ord,proceso,nombre);
m4navegar("sse_g3/sse_g3_p20_mod.jsp",parametros,valores);
}
</script>
</head>
<body>
<%@ include file="../../sse_generico/english/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%
	String zsubsesion = "SSE_EVALUATOR_E_SEG";
	String zmeta4object = "SSE_EVALUATOR_E_SEG";
	String znodo = "SSE_EVALUATOR_E";

	String ztipocarga = "NOR";   

	String zoutputdef = zsubsesion + "!" + znodo + "[*]";
	String zmove = znodo + ":" + znodo + "[FIRST]";
	String ziterator = znodo + ":" + zsubsesion + "!" + znodo;

	String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
   	String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
	String zSCONMEVALPROC = zcomun+ "SCO_NM_EVAL_PROC"; 
	String zORDINAL =zcomun+ "ORDINAL"; 
	String zSCO_GB_NAME = zcomun+ "SCO_GB_NAME"; 
	String zSCO_DT_END_SEG = zcomun+ "SCO_DT_END_SEG"; 

	//String zSCO_GB_NAME =zcomun+ "SCO_GB_NAME"; 	
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
	int  zcount  = 0;
	int  zcounti  = 0;	
	try {
			M4Operations m = new M4Operations(request);
			zcount = m.getCount(znodo,zsubsesion,znodo);
			zcounti = m.getCountInClient(znodo,zsubsesion,znodo);			
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
%>
<table width="100%">
<tr><td class="titulofuncional" colspan="2"><%=TranEss.getProperty("ev_ess.ValSeg")%></td></tr>
<tr>
	<td><a><img alt="<%=TranEss.getProperty("ev_ess.ValSeg")%>"title="<%=TranEss.getProperty("ev_ess.ValSeg")%>" src="/iconos/noname_resultados_evaluacion_ess_100_100.gif" width="100" height="100" /></a></td>
	<td>
		<div class="descripcionfuncional"><%=TranEss.getProperty("ev_ess.DescrValEvSeg")%></div>
		<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="1" title="<%=TranEss.getProperty("ev_ess.LblJob")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3"><%=TranEss.getProperty("ev_ess.LinkJob")%></a></li>
		</ul>
	</td>
</tr>
</table>

<%if (zcount> 0) 
{
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;%>	
<table class="tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo">
	<td><%=TranEss.getProperty("ev_ess.ProcEv")%></td>
	<td><%=TranEss.getProperty("ev_ess.LblEvaldr")%></td>	
	<td><m4:label m4name="<%=zSCO_DT_END_SEG%>" htmlsafe = "true"/></td>	
</tr>
<% String clase = "" ; %>

<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;

if (zcontrol==0){
	 clase = "fuentevalor" ; 
}else{
	 clase = "fuentevalor2" ; 
	 }
%>

<tr>
	<td class="<%=clase%>"><a title="<%=Tran.getProperty("Label.VerDet")%>"href="javascript:navegar('<m4:item m4name="<%=zORDINAL%>" jsafe = "true"  htmlsafe="true"/>','<m4:item m4name="<%=zSCONMEVALPROC%>" jsafe = "true" htmlsafe = "true" />','<m4:item m4name="<%=zSCO_GB_NAME%>"  jsafe = "true" htmlsafe = "true"/>');"><m4:item m4name="<%=zSCONMEVALPROC%>" htmlsafe = "true"/></a></td>
	<td class="<%=clase%>"><m4:item m4name="<%=zSCO_GB_NAME%>" htmlsafe = "true"/></td>
	<td class="<%=clase%>"><m4:item m4name="<%=zSCO_DT_END_SEG%>" htmlsafe = "true"/></td>
</tr>
	</m4:loop>
	</table>
<%}else{%>
	<div class="fuentenodatos"><%=TranEss.getProperty("ev_ess.DescNoDataFound3")%></div>
	<br/> <br/>
<%}%>
<%@ include file="../../sse_generico/english/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>


