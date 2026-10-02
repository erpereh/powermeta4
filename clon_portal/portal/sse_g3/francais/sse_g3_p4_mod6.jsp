<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<%    
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
	String zcon = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"contador"); 
	String IDEvaluator = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDEvaluator"); 
	String OREvaluator = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"OREvaluator"); 
	String DTStartEval = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval"); 
	String IDPlan = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDPlan");
	String DTStartProc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartProc");
	
	if ((estado==null)||(estado.equals(""))){estado="0";}
	if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>

<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
<% String ztitle = TranMss.getProperty("ev_mss.GrafGauss");
   String zlevel = TranMss.getProperty("ev_mss.LblLevel");
      String zdesc= TranMss.getProperty("ev_mss.GrafGaussDesc");
%>

<title><%=ztitle%></title>
</head>
<body>
<%
String zmeta4object = "SCO_GR_EV_RESULTADOS_GRAF";
String zsubsesion = "EV_RESULTADOS_GRAF";
String znodo = "SCO_GR_EV_ESCALA_PROC";
String znodo1 = "SCO_GR_EV_EVALUADOR_PROC";
String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove1 = znodo1 + ":" + znodo1 + "[0]";
String zmove = znodo + ":" + znodo + "[0]";

String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[0]" + ".";

String zSCO_PRC_REF = zcomun + "SCO_PRC_REF";
String zSCO_PRC_ACT = zcomun + "SCO_PRC_ACT";
String zSCO_NM_LEVEL = zcomun + "SCO_NM_LEVEL";
String zSCO_PROC_POSITION = zcomun1 + "SCO_PROC_POSITION";

String zmetodoinitrw = "INIT_RW:" + zsubsesion + "!SCO_GR_EV_EVALUADOR_PROC.SCO_INIT_GRAPH_RW";
%>	
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodoinitrw%>">
	<m4:param name="ARG_ID_EVALUATOR" value="<%=IDEvaluator%>"/>
	<m4:param name="ARG_OR_EVALUATOR" value="<%=OREvaluator%>"/>
	<m4:param name="ARG_ID_PLAN" value="<%=IDPlan%>"/>
	<m4:param name="ARG_DT_START_PROC" value="<%=DTStartProc%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="M4NAME0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="M4NAME0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<not_m4:chartdef chartid="SCO_GR_EV_GAUSS_PUNTAJE" chartoutputdef ="defi"/>
<m4:endjob/>

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
<table width="100%" cellspacing="0">
<tr>
<td class="titulofuncional"><%=ztitle%>&nbsp;&nbsp;</td>
<td class="titulofuncional"><m4:item m4name="NOMBRE" htmlsafe="true"/></td>
</tr>
<tr><td colspan="2"><div class="descripcionfuncional"><%=zdesc%><br/><br/></div></td></tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="centralpage">
<td width="600" align="left" valign="top">
	<table border="0" cellpadding="0" cellspacing="0" width="490">
	<tr><td width="600" class="color2" valign="top" align="center">
	<div id="tabgraph" style="width:600px; visibility:visible;">
		<not_m4:chart width="600" height="280"
			chartid="SCO_GR_EV_GAUSS_PUNTAJE"
			backgroundcolor="256,256,256"
			depth="20"
			charttype="BAR_CHART"
			showlegend="TRUE"
			legendtype="4"
			legendlength="10"
			textforecolor="0,0,0"
			dataoutputdefalias="SCO_GR_EV_ESCALA_PROC"
			dataobjectalias="EV_RESULTADOS_GRAF"
			chartoutputdef="defi"
			dataobject="SCO_GR_EV_RESULTADOS_GRAF"/>
	
	</div>
	</td></tr>
	
	
	</table>
</td>
</table>
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr class="tablaestadosceldatitulo">	
	<td><%=zlevel%></td>
	<td><m4:label m4name="<%=zSCO_PRC_REF%>" htmlsafe="true"/></td>
	<td><m4:label m4name="<%=zSCO_PRC_ACT%>" htmlsafe="true"/></td>
</tr>
<m4:loop from="0" to="<%=zcountv%>">
<tr>
	<td class = "fuentevalor"><m4:item m4name="<%=zSCO_NM_LEVEL%>" htmlsafe="true"/></td>
	<td class="fuentevalor"><m4:item m4name="<%=zSCO_PRC_REF%>" htmlsafe="true"/></td>
	<td class="fuentevalor"><m4:item m4name="<%=zSCO_PRC_ACT%>" htmlsafe="true"/></td>
</tr>
</m4:loop>
</table>
</body>
</html>

