<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html><head><%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>	
<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
<title><%=TranMss.getProperty("ev_mss.g3_p4_1_val_title")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>	
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zfiltro = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
String znivel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znivel");
if ((estado==null)||(estado.equals(""))){estado="31";}
if ((zfiltro==null)|| (""==zfiltro)){zfiltro = "Todos";} 
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((znivel==null)||(znivel.equals(""))){ znivel = "1";}
%>
<script type="text/javascript">
function filtrar(){
var valor =m4select("filtro","prueba","value");
var nivel =m4select("nivel","prueba","value");
m4valor("oculto","zfiltro",valor,"set");
m4valor("oculto","znivel",nivel,"set");
m4submit("oculto");
}

function open_vis(var_person,var_or_role,var_dt){

	var dir="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_1_vis.jsp?ID_HR="+var_person+"&OR_HR_ROLE="+var_or_role+"&DT_START="+var_dt;
	var dir=dir+"&zc=1";
	window.open(dir,'Vis','width=700;height=400,resizable,scrollbars');
}

function m4enviar(){
var cadena="";
var URL = "{TAG=SSE_EVAL360";
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
	document.forms["envio"].elements["TAG"].value="SSE_EVAL360";
	document.forms["envio"].submit();
}
}	
</script>
</head>
<body>
<%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_EVAL360";
   String zmeta4object = "SSE_EVAL360";
   String znodo = "SSE_EVAL360";
   String ztipocarga = "SSE";
   String zventanas = "4";
   int zvuelta = 2;
   String zdireccion = "/mss_g3/mss_g3_p4_1_val.jsp";
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
   
   String zORDINAL =zcomun+ "ORDINAL";
   String zNACCION = zcomun+ "N_ACCION";
   
   String zNOMBREEMPLEADO = zcomun+ "NOMBRE_EMPLEADO";
   
   String zSCO_GB_NAME = zcomun+ "SCO_GB_NAME";
   String zSCO_NM_EVAL_PROC = zcomun+ "SCO_NM_EVAL_PROC";
   
     String zSTD_ID_PERSON = zcomun+ "STD_ID_PERSON";
String zSCO_OR_HR_ROLE = zcomun+ "SCO_OR_HR_ROLE";
 String zSCO_DT_START_EVAL = zcomun+ "SCO_DT_START_EVAL";
 
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
<tr><td class="titulofuncional" colspan="2"><%=TranMss.getProperty("ev_mss.g3_p4_1_val_Dtitle")%></td></tr>
<tr>
	<td><img alt="<%=TranMss.getProperty("ev_mss.Valida")%>" title="<%=TranMss.getProperty("ev_mss.g3_p4_1_val_Dtitle")%>"src="/iconos/noname_valida_evaluaciones_ 71_100.gif" width="100" height="100" /></td>
	<td><div class="descripcionfuncional"><%=TranMss.getProperty("ev_mss.g3_p4_1_val_D")%></div></td>
</tr>
</table>
<%@ include file="../../mss_generico/francais/mssgenerico_filtro_val.jsp" %>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p4_1_val.jsp?estado=31" method="post" name="oculto" id="oculto">
<input type="hidden" id="zfiltro" name="zfiltro"  value="<%=zfiltro%>" />
<input type="hidden" id="zfiltroemp" name="znivel"  value="<%=znivel%>" />
<input type="hidden" id="zinicios" name="zinicios"  value="" />
</form>
<% if (zcounti > 0) { 
String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
	int zposicion = 0;
String zposicions = "0";
String zposicion2= "0";
	%>	
<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo" colspan="2"><%=Tran.getProperty("Label.TableVal")%></td></tr>

<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%  zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zposicion = zposicion - zregistroinicial;
 	zposicion2 = String.valueOf(zposicion);
%>
<tr>
	<td class="fuentecampo">
	<table cellspacing="0" width="100%">
	<tr><td class="fuentecamponombre" colspan="4"><m4:item m4name="<%=zNOMBREEMPLEADO%>"/>&nbsp;<%=Tran.getProperty("Label.solicita")%>&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td></tr>
	
	<tr><td class="fuentecampo" colspan="4">&nbsp; <%=TranMss.getProperty("ev_mss.g3_p4_1_val_litpre")%>&nbsp;<m4:item m4name="<%=zSCO_GB_NAME%>" htmlsafe="true" /> <%=TranMss.getProperty("ev_mss.g3_p4_1_val_lit")%> 

	   

	<a class="enlacefuncional" title= "<%=TranMss.getProperty("ev_mss.g3_p4_1_val_link")%>"  href="javascript:open_vis('<m4:item m4name="<%=zSTD_ID_PERSON%>" jsafe="true"/>','<m4:item m4name="<%=zSCO_OR_HR_ROLE%>" jsafe="true"/>','<m4:item m4name="<%=zSCO_DT_START_EVAL%>" jsafe="true"/>');">
	<m4:item m4name="<%=zSCO_NM_EVAL_PROC%>" htmlsafe="true"/>
	


	</a></td></tr>	
	<tr><td class="fuentecampo"><form name="a<%=zposicion%>" id="a<%=zposicion%>" action=" "><input id="ocultos<%=zposicion%>" name="ocultos<%=zposicion%>" type="hidden" value="{<m4:item m4name="<%=zORDINAL%>"/>*REC=<m4:item m4name="<%=zORDINAL%>"/>{<m4:item m4name="<%=zORDINAL%>"/>*NOD=SSE_EVAL360{<m4:item m4name="<%=zORDINAL%>"/>*NIVEL_ACEPTADO=<%=znivel%>" /><input id="ocul<%=zposicion%>" name="<%=zcountv%>" type="hidden" value="<m4:item m4name="<%=zORDINAL%>"/>" /></form></td></tr>
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


