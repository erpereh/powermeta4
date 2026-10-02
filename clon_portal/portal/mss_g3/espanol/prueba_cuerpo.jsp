<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<title>Gr&aacute;ficos</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>	
<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %>	
<%     
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
</head>
<body>
<%@ include file="../../mss_generico/espanol/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>

<body>
<script type="text/javascript"> 
 
function Eliminar(RecNumber) {
	window.open("DeleteCurrency.jsp?RecNumber=" + RecNumber);
}

</script>
<%
String zsubsesion = "SSM_H_KNC_LVL";
String zmeta4object = "SSM_H_KNC_LVL";
String znodo = "SSM_H_KNC_LVL";
String zoutputdef = zsubsesion + "!" + znodo + "[*]"; 
String zmove =znodo + ":" +  znodo + "[FIRST]";
String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_H_KNC_LVL.CARGA";
String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zsubsesion%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"/> 			

<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>	

<not_m4:graphicdefinition
	idreport="SSM_H_KNC_LVL"
	graphicoutputdef ="defi"
/>

<m4:endjob/>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2">Gr&aacute;fico</td></tr>
<tr>
	<td><img alt="Gr&aacute;fico"title="Gr&aacute;fico" src="/iconos/noname_mujer_53_100.gif" width="53" height="100" /></td>
	<td>
	<div class="descripcionfuncional">Gr&aacute;fico.</div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional"title="Gr&aacute;fico"tabindex="1" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p9.jsp?estado=31">Direcci&oacute;n fiscal</a></li>
	</ul>
	</td>
</tr>
</table>

<not_m4:graphic
	idreport="&REQUEST.idreport"
	width="&REQUEST.width"
	height="&REQUEST.height"
	backgroundcolor="&REQUEST.backcolor"
	depth="&REQUEST.depth"
	viewtype="&REQUEST.typeview"
	showseriesleyend="&REQUEST.showSeriesleyend"
	leyendtype="&REQUEST.typeLeyend"
	leyendlength="&REQUEST.leyendLength"
	textforecolor="&REQUEST.forecolor"
	dataoutputdefalias="SSM_H_KNC_LVL"
	datachannelalias="SSM_H_KNC_LVL"
	graphicoutputdef="defi"
/>

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

<table><%=zcountv%>
	<m4:iterator m4node="<%=ziterator%>" m4rows="*">
	<m4:param name="m4item0" value="SCO_PERCENT"/>
	<m4:param name="m4item1" value="SCO_DT_START"/>
		<tr>
			<td> $M4ITEM0$ </td>
			<td> $M4ITEM1$ </td>
		</tr>
	</m4:iterator>
</table>
	
<%@ include file="../../mss_generico/espanol/mssgenerico_disclaimer.jsp" %>
</div>
<m4:endpage/>

</body>
</html>
