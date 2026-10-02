<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>	
<%@ include file="/sse_g3/sse_ev_trans.jsp"%>

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<% String zTitle = TranEss.getProperty("ev_ess.TitValObj"); %>
<title> <%=zTitle%> </title>

<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
if ((estado==null)||(estado.equals(""))){estado="0";}
%>
<script type="text/javascript">
function navegar (ord,zposicion) {
var parametros = new Array("estado","ordinal","zposicion");
var valores = new Array(31,ord,zposicion);
m4navegar("sse_g3/sse_g3_p17_mod.jsp",parametros,valores);
}
</script>
</head>
<body>
<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
	String zsubsesion = "SSM_EV_ROL_LV_OBJ";
	String zmeta4object = "SSM_EV_ROL_LV_OBJ";
	String znodo = "SSE_EV_ROL_LV_OBJ";

	String ztipocarga = "EVA";   

	String zoutputdef = zsubsesion + "!" + znodo + "[*]";
	String zmove = znodo + ":" + znodo + "[FIRST]";
	String ziterator = znodo + ":" + zsubsesion + "!" + znodo;

	String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
   	String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

    String zSCO_ID_OBJECTIVE = zcomun + "SCO_ID_OBJECTIVE";
    String zSCO_NM_OBJECTIVE = zcomun + "SCO_NM_OBJECTIVE";
    String zSCO_DT_START = zcomun + "SCO_DT_START";	
    String zSCO_DT_END = zcomun + "SCO_DT_END";		
	String zORDINAL =zcomun+ "ORDINAL"; 
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
<tr><td class="titulofuncional" colspan="2"> <%=zTitle%> </td></tr>
<tr>
	<td><a><img alt="<%=zTitle%>"title="<%=zTitle%>" src="/iconos/noname_resultados_evaluacion_ess_100_100.gif" width="100" height="100" /></a></td>
	<td>
		<div class="descripcionfuncional"> <%=TranEss.getProperty("ev_ess.DescrValObj")%></div>
	</td>
</tr>
</table>
<%if (zcount> 0) {
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
	String sClass = "";
%>	
	<table class="tablaestados" width="100%" cellspacing="0">
	<tr class = "tablaestadosceldatitulo"><td> <%=zTitle%> </td>
	<td>  <m4:label m4name="<%=zSCO_DT_START%>" htmlsafe = "true"/> </td>
	<td>  <m4:label m4name="<%=zSCO_DT_END%>" htmlsafe = "true"/></td>
	</tr>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
	<%zposicions = m4lix;
		zposicion = Integer.valueOf(zposicions).intValue();
		zcontrol = zposicion%2;
	if (zcontrol==0){
		sClass = "fuentevalor" ;
	}else{
		sClass = "fuentevalor2" ;
		}
	%>
		<tr>
		<td class="<%=sClass%>"><a title="<%=Tran.getProperty("Label.VerDet")%>"href="javascript:navegar('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>',<%=zposicion%>);"><m4:item m4name="<%=zSCO_NM_OBJECTIVE%>" htmlsafe = "true"/></a></td>
		<td class="<%=sClass%>">&nbsp;<m4:item m4name="<%=zSCO_DT_START%>" htmlsafe = "true"/></td>
		<td class="<%=sClass%>">&nbsp;<m4:item m4name="<%=zSCO_DT_END%>" htmlsafe = "true"/></td></li>
		</tr>
	</m4:loop>
	</table>
<%}else{%>
	<div class="fuentenodatos"><%=Tran.getProperty("Label.NoDataFound")%></div>
	<br/> <br/>
<%}%>

<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>


