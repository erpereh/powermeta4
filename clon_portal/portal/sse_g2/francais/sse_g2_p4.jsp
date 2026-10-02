<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %><?xml version="1.0" encoding="iso-8859-1" ?><!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd"><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %><html><head><title>Vos derniers bulletins de paie</title><link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" /><script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script><script type="text/javascript" src="/libreria/clase_val_entradas.js"></script><%

String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

String zsubsesion = "SSE_LAST_PAYS";
String zmeta4object = "SSE_LAST_PAYS";
String zmetodocarga = zsubsesion + "!SSE_LAST_PAYS.CARGA";
String znodo = "SSE_LAST_PAYS";

String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";   
 
String zventanas = "20";
int zvuelta = 5;
String zdireccion = "sse_g2/sse_g2_p4.jsp";
String zestado = "21";

// No se modifica en general.

int zregistroinicial = Integer.valueOf(zinicios).intValue();
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;
String ztipocarga = "M4T";
  
String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
String zmove = znodo + ":" + znodo + "[zregistroinicial]";   
String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";

 // Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar 
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zPAGA = zcomun + "SCO_DT_PAYMENT";
String zNMFREQ = zcomun + "SCO_NM_PAY_FREQUENCY";
String zNMPAY = zcomun + "SCO_NM_PAY";
String zNETO = zcomun + "SCO_NET";
String zMONEDA = zcomun + "ID_CURRENCY";
String zPAYFREQ = zcomun + "SCO_PAY_FREQ_PAYM";
String zORPERIOD = zcomun + "SCO_OR_HR_PERIOD";
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/><m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/><m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec><m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef><m4:endjob/><m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
int zcount = 0;
int  zcounti  = 0;	
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
} catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);%><script type="text/javascript">

function recibo(dIdPaga,sRevision,dPayFreq,sNmPay,sOrPeriod){
m4valor("oculto","SCO_DT_ACCRUED_P",dIdPaga,"set");
m4valor("oculto","SCO_SEL_PAY_P",sRevision,"set");
m4valor("oculto","SCO_ID_PAY_FREQ_AC_P",dPayFreq,"set");
m4valor("oculto","SCO_NM_PAY",sNmPay,"set");
m4valor("oculto","SCO_OR_HR_PERIOD",sOrPeriod,"set");

m4submit("oculto");
}

function recibo1(parametros,valores){
var URL = 'sse_g2/sse_g2_rec.jsp';
m4navegar(URL,parametros,valores);
}</script></head><body>

<h1 class="titulofuncional">Vos derniers bulletins de paie</h1>
<table width="100%">
	<tr>
		<td width="100" height="100"><img src="/iconos/noname_recibos_57_100.gif" width="100" height="100"</td>
		<td class="descripcionfuncional">Consultez vos derni&egrave;res paies</td>
	</tr>
</table>

<form action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_rec.jsp" method="post" name="oculto" id="oculto">
<input type="hidden" id="SCO_DT_ACCRUED_P" name="SCO_DT_ACCRUED_P"/>
<input type="hidden" id="SCO_SEL_PAY_P" name="SCO_SEL_PAY_P" />
<input type="hidden" id="SCO_ID_PAY_FREQ_AC_P" name="SCO_ID_PAY_FREQ_AC_P"/>
<input type="hidden" id="SCO_OR_HR_PERIOD" name="SCO_OR_HR_PERIOD"/>
<input type="hidden" id="SCO_NM_PAY" name="SCO_NM_PAY"/>
<input type="hidden" id="NUM_REG" name="NUM_REG" value="1" />
<input type="hidden" id="TYPELOAD" name="TYPELOAD" value="0"/>
</form>

<%
if (zcounti > 0){
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
	String zSSEEXISTENCE = "0";
	String zparidad = "2";%><table class="tablaestados" cellspacing="0" width="100%">
	<tr class="tablaestadosceldatitulo">
	<td>&nbsp;P&eacute;riode de paie</td>
	<td>&nbsp;Nº de p&eacute;riode</td>
	<td>&nbsp;Net pay&eacute;</td>
	<td>&nbsp;R&eacute;troactivit&eacute;</td></tr>
	<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
	<%
zposicions = m4lix;
zposicion = Integer.valueOf(zposicions).intValue();
zcontrol = zposicion%2;
try {
	M4Operations Introduccion = new M4Operations(request);	
	zSSEEXISTENCE = Introduccion.getItem(znodo,zmeta4object,znodo,m4lix,"SSE_EXISTENCE");
} catch(Exception e) {}
if (zcontrol==0){zparidad = "";}else{zparidad = "2";}%>
<tr class="fuentevalor<%=zparidad%>">
<td><a class="enlacefuncional<%=zparidad%>" title="Afficher le bulletin" href="javascript:recibo('<m4:item m4name="<%=zPAGA%>" jsafe="true" htmlsafe="true"/>','1','<m4:item m4name="<%=zPAYFREQ%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zNMPAY%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zORPERIOD%>" jsafe="true" htmlsafe="true"/>'); ">
&nbsp;<m4:item m4name="<%=zPAGA%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zNMFREQ%>" htmlsafe="true"/></a></td><td class="fuentevalor<%=zparidad%>e">&nbsp;<m4:item m4name="<%=zORPERIOD%>" htmlsafe="true"/></td><td class="fuentevalor<%=zparidad%>e">&nbsp;<m4:item m4name="<%=zNETO%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zMONEDA%>" htmlsafe="true"/></td><td>&nbsp;<%if (zSSEEXISTENCE.equals("1") == true){%><a class="enlacefuncional" title="Afficher le bulletin" href="javascript:recibo('<m4:item m4name="<%=zPAGA%>" jsafe="true" htmlsafe="true"/>','2','<m4:item m4name="<%=zPAYFREQ%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zNMPAY%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zORPERIOD%>" jsafe="true" htmlsafe="true"/>');">&nbsp;r&eacute;visions</a><%}%></td></tr></m4:loop></table><%@include file="../../sse_generico/francais/generico_ventanas.jsp"%><%}else{%><div class="fuentenodatos">Aucune paie vous concernant n'a &eacute;t&eacute; trait&eacute;e &agrave; ce jour.</div><%}%><%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %></div></body><m4:endpage/></html>

