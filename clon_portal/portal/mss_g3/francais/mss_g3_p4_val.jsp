<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>	
<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
<title><%=TranMss.getProperty("ev_mss.Valida")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>	

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado = zobjtabla.m4paramvalor("estado");
String zfiltro =zobjtabla.m4paramvalor("zfiltro");
String zinicios =zobjtabla.m4paramvalor("zinicios");	
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zfiltro==null)|| (""==zfiltro)){zfiltro = "Todos";} 
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

String znivel =zobjtabla.m4paramvalor("znivel");

if ((znivel==null)||(znivel.equals(""))){
znivel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znivel");

if ((znivel==null)||(znivel.equals(""))) znivel = "1";
}

%>
<script type="text/javascript">
function filtrar(){
var valor =m4select("filtro","prueba","value");
var nivel =m4select("nivel","prueba","value");
m4valor("oculto","zfiltro",valor,"set");
m4valor("oculto","znivel",nivel,"set");
m4submit("oculto");
}

function navegar(ord){
	var parametros = new Array("estado","ordinal");
	var valores = new Array("31",ord);
	m4navegar('mss_g3/mss_g3_p4_mod1.jsp',parametros,valores);
}
</script>
<script type="text/javascript">
function m4enviar(){
var cadena="";
var URL = "{TAG=SSE_EVALUATOR_E";
if (typeof(document.forms['a0']) != "undefined"){
	var numregistros = parseInt(document.forms['a0'].elements[1].name);
	cadena = cadena + URL;
	for (var i = 0; i < numregistros; i++){
		var formulario = "b" + i;
		if (document.forms[formulario].elements[0].checked == true){
			var formulario1 = "a" + i;
			cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=ACEPTAR";
			cadena = cadena + document.forms[formulario1].elements[0].value;
		}
		if (document.forms[formulario].elements[1].checked == true){
			var formulario1 = "a" + i;
			cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=CANCELAR";
			cadena = cadena + document.forms[formulario1].elements[0].value;
			var formulario2 = "c" + i;
			cadena = cadena + "{" +document.forms[formulario1].elements[1].value + "*" + "MOTIVO_ACCION=" + document.forms[formulario2].elements[0].value;
		}
	}
	document.forms["envio"].elements["param"].value=cadena;
	document.forms["envio"].elements["TAG"].value="SSE_EVALUATOR_E";
	document.forms["envio"].submit();
}
}	
</script>
</head>
<body>
<%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_EVALUATOR_E";
   String zmeta4object = "SSE_EVALUATOR_E";
   String znodo = "SSE_EVALUATOR_E";
   String ztipocarga = "SSE";
   String zventanas = "4";
   int zvuelta = 2;
   String zdireccion = "/mss_g3/mss_g3_p4_val.jsp";
   String zestado="31";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove =znodo + ":" +  znodo + "[" + zregistroinicial + "]";
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   
	 

   String znodolista = znodo + "_VAL";
   String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";
   String zmovelista = znodolista + ":" + znodolista + "[FIRST]";
   String ziteratorlista = znodolista + ":" + zsubsesion + "!" + znodolista;
   String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&VAR.m4lix]" + ".";
   
      
   String znodocom = "SSE_COMUNICACION";
   String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";
   String zmovecom = znodocom + ":" + znodocom + "[FIRST]";
   String ziteratorcom = znodocom + ":" + zsubsesion + "!" + znodocom;


   String znodoprincipal = "SSE_PRINCIPAL";
   String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";
   
   String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";	
   String zSCONMEVALPROC = zcomun+ "SCO_NM_EVAL_PROC"; 
   String zORDINAL =zcomun+ "ORDINAL";
   String zNACCION = zcomun+ "N_ACCION";
   String zNOMBREEMPLEADO = zcomun+ "NOMBRE_EMPLEADO";
   String zSCO_GB_NAME_1 = zcomun+ "SCO_GB_NAME_1";
   String zSCO_EMPLOYEE_AGREE = zcomun+ "SCO_EMPLOYEE_AGREE";
   String zSCO_EMPLOYEE_COMM = zcomun+ "SCO_EMPLOYEE_COMM";
 String zSCO_EVALUATOR_COMM = zcomun+ "SCO_EVALUATOR_COMM";
   String zNOMBREEMPLEADOlista = zcomunlista+ "NOMBRE_EMPLEADO";
   String zSTDIDPERSON = zcomunlista+"STD_ID_PERSON";  
   
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,znodoprincipal,"","NIVEL",znivel);
	    m.setItem(zsubsesion,znodo,"","ID_PERSON",zfiltro);  
		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodolista%>"><m4:param name="m4name0" value="<%=zoutputdeflista%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefcom%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovelista%>"/></m4:move>
<%
	int  zcounti  = 0;
	int  zcountilista  = 0;
	int  zcount  = 0;	
	try {
		M4Operations m = new M4Operations(request);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		zcountilista = m.getCountInClient(znodolista,zsubsesion,znodolista);
		zcount = m.getCount(znodo,zsubsesion,znodo);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcountvlista = String.valueOf(zcountilista);
%>
<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2"><%=TranMss.getProperty("ev_mss.Valida")%></td></tr>
<tr>
	<td><img alt="<%=TranMss.getProperty("ev_mss.Valida")%>" title="<%=TranMss.getProperty("ev_mss.Valida")%>"src="/iconos/noname_valida_evaluaciones_ 71_100.gif" width="71" height="100" /></td>
	<td><div class="descripcionfuncional"><%=TranMss.getProperty("ev_mss.DescrValidaProc")%></div></td>
</tr>
</table>
<%@ include file="../../mss_generico/francais/mssgenerico_filtro_val.jsp" %>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p4_val.jsp?estado=31" method="post" name="oculto" id="oculto">
<input type="hidden" id="zfiltro" name="zfiltro"  value="<%=zfiltro%>" />
<input type="hidden" id="zfiltroemp" name="znivel"  value="<%=znivel%>" />
<input type="hidden" id="zinicios" name="zinicios"  value="" />
</form>
<% if (zcounti > 0) { 
String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);%>	
<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo" colspan="2"><%=Tran.getProperty("Label.TableVal")%></td></tr>
<%
int zposicion = 0;
String zposicions = "0";
String zposicion2= "0";
%>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%  zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zposicion = zposicion - zregistroinicial;
 	zposicion2 = String.valueOf(zposicion);
%>
<tr>
	<td class="fuentecampo">
	<table cellspacing="0" width="100%">
	<tr><td class="fuentecamponombre" colspan="4"><m4:item m4name="<%=zNOMBREEMPLEADO%>" htmlsafe="true"/>&nbsp;<%=Tran.getProperty("Label.solicita")%>&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/>&nbsp;<%=Tran.getProperty("Label.ParaElEmpleado")%>&nbsp;<m4:item m4name="<%=zSCO_GB_NAME_1%>" htmlsafe="true"/></td></tr>	
	<tr><td class="fuentecamponombre" colspan="4"><br /></td></tr>
	<tr>
		<td class="fuentecampo" width="25%"><m4:label m4name="<%=zSCONMEVALPROC%>" htmlsafe = "true"/></td>
		<td class = "fuentevalor"><a title = "<%=Tran.getProperty("Label.VerDet")%>" href="Javascript:navegar(<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>);"><m4:item m4name="<%=zSCONMEVALPROC%>" htmlsafe="true"/></a>
		</td>
	</tr>
		<tr>
		<td class="fuentecampo"><m4:label m4name="<%=zSCO_EVALUATOR_COMM%>" htmlsafe = "true"/></td>
		<td class="fuentevalor" rowspan="1"><div><m4:item m4name="<%=zSCO_EVALUATOR_COMM%>" htmlsafe = "true"/></div></td>
	</tr>
	<tr>
		<td class="fuentecampo"><m4:label m4name="<%=zSCO_EMPLOYEE_AGREE%>" htmlsafe = "true"/></td>
<%
String zSCOEMPLOYEEAGREE="";
String zSCOEMPLOYEE="";
String zSSEPOS="";
String zSCOEMPLOYEECOMM="";
try {
	M4Operations t = new M4Operations(request);

	t.moveData(znodo,zmeta4object,znodo,zposicion2);
	zSCOEMPLOYEEAGREE = t.getItem(znodo,zmeta4object,znodo,"","SCO_EMPLOYEE_AGREE"); 
	zSCOEMPLOYEECOMM = t.getItem(znodo,zmeta4object,znodo,"","SCO_EMPLOYEE_COMM"); 
	} catch(Exception e) {}

	if (zSCOEMPLOYEEAGREE.equals("1"))
	{
		zSCOEMPLOYEE= Tran.getProperty("Label.Agree");
	 }
	else
	{
		zSCOEMPLOYEE= Tran.getProperty("Label.NotAgree");

	}
%>
	<td class="fuentevalor"><%=zSCOEMPLOYEE%></td>
	</tr>
	<tr>
		<td class="fuentecampo"><m4:label m4name="<%=zSCO_EMPLOYEE_COMM%>" htmlsafe = "true"/></td>
		<td class="fuentevalor" rowspan="1"><div><%=zSCOEMPLOYEECOMM%></div></td>
	</tr>
	<tr>
		<td class="fuentecampo">&nbsp;</td>
	</tr>
	<tr><td class="fuentecampo"><form name="a<%=zposicion%>" id="a<%=zposicion%>" action=" "><input id="ocultos<%=zposicion%>" name="ocultos<%=zposicion%>" type="hidden" value="{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*REC=<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NOD=SSE_EVALUATOR_E{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NIVEL_ACEPTADO=<%=znivel%>" /><input id="ocul<%=zposicion%>" name="<%=zcountv%>" type="hidden" value="<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>" /></form></td></tr>
	</table>
	</td>
	<td class="fuentecampo"><form name="b<%=zposicion%>" id="b<%=zposicion%>" action=" "><table cellspacing="0" class="fuentecampo"><tr><td class="fuentecampo"><input title="<%=Tran.getProperty("Button.Accept")%>" id="ac<%=zposicion%>" name="ac<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ca<%=zposicion%>)" /><%=Tran.getProperty("Label.Aceptar")%></td></tr><tr><td class="fuentecampo"><input title="<%=Tran.getProperty("Button.Cancel2")%>" id="ca<%=zposicion%>" name="ca<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ac<%=zposicion%>)" /><%=Tran.getProperty("Label.Cancelar")%></td></tr></table></form></td>
</tr>
<tr><td class="fuentecampo" colspan="2"><form name="c<%=zposicion%>" id="c<%=zposicion%>" action=" "><%=Tran.getProperty("Label.MotivoCancelacion")%>&nbsp;<input size="48" title="<%=Tran.getProperty("Button.CancelReasonLarge")%>" id="mo<%=zposicion%>" name="mo<%=zposicion%>" type="text" maxlength="60" /></form></td></tr>
<tr><td class="separadorlinea" colspan="2"><hr /></td></tr>
</m4:loop>	
<tr><td>
<form id="envio" name="envio" action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp" method="post">
<input type="hidden" id="param" name="param" value="" />
<input type="hidden" id="TAG" name="TAG" value="" />
</form>
</td></tr>
</table>
<%@include file="../../sse_generico/francais/generico_ventanas_post.jsp"%>
<%}else{%>
<div class="fuentenodatos"><%=Tran.getProperty("Label.NoDataFound7")%></div><br/><br/>
<%}	%>		
<m4:endpage/>
</body>
<%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>
</div>
</html>


