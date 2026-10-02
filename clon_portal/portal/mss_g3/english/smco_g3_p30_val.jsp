<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<title>Valida las entrevistas</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/english/menu_mss.jsp" %>
<%@ include file="/mss_g3/smco_iv_trans.jsp"%>
<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado = zobjtabla.m4paramvalor("estado");
String zfiltro = zobjtabla.m4paramvalor("zfiltro");
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
	oculto.submit();}
function m4enviar(){
	var cadena="";
	var URL = "{TAG=SSE_GN_INTERVIEW";
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
		document.forms["envio"].elements["TAG"].value="SSE_GN_INTERVIEW";
		document.forms["envio"].submit();
	}
}
</script>
</head>
<body>
<%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_GN_INTERVIEW";
   String zmeta4object = "SSE_GN_INTERVIEW";
   String znodo = "SSE_GN_INTERVIEW";
   String ztipocarga = "SSE";
   String zventanas = "4";
   int zvuelta = 2;
   String zdireccion = "/mss_g3/mss_g3_p30_val.jsp";
   String zestado="11";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove =znodo + ":" +  znodo + "[" + zregistroinicial + "]";
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
   String zlectura = zsubsesion + "!" + znodo;
   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   String znodolista = znodo + "_VAL";
   String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";
   String zmovelista = znodolista + ":" + znodolista + "[FIRST]";
   String zraizlista = znodolista + ":" + zsubsesion + "!" + znodolista + ".";
   String ziteratorlista = znodolista + ":" + zsubsesion + "!" + znodolista;
   String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&VAR.m4lix]" + ".";
   
   String znodocom = "SSE_COMUNICACION";
   String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";
   
   String znodoprincipal = "SSE_PRINCIPAL";
   String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";
   
   String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";	
	
   String zORDINAL =  zcomun + "ORDINAL";
   String zNACCION =  zcomun + "ACCION_ACEPTADO";
   String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";
     String zN_ACCION = zcomun + "N_ACCION";
   
   String zSCO_DT_REQUEST = zcomun + "SCO_DT_REQUEST";
   String zSCO_INTERVIEW_NAME = zcomun + "SCO_INTERVIEW_NAME";
   String zSCO_NM_INTERVIEW_TYPE = zcomun + "SCO_NM_INTERVIEW_TYPE";
   String zSCO_NM_INTERVIEW_PRIORITY = zcomun + "SCO_NM_INTERVIEW_PRIORITY";
   String zSCO_INTERVIEW_REASON = zcomun + "SCO_INTERVIEW_REASON";
   
   String zNOMBREEMPLEADOlista =  zcomunlista + "NOMBRE_EMPLEADO";
   String zSTDIDPERSON = zcomunlista + "STD_ID_PERSON";     
  
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    
	    m.setItem(zsubsesion,znodoprincipal,"","NIVEL",znivel);
	    m.setItem(zsubsesion,znodo,"","ID_PERSON",zfiltro);
	      
		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodolista%>"><m4:param name="m4name0" value="<%=zoutputdeflista%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefcom%>"/></m4:outputdef >
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovelista%>"/></m4:move>
<%
	int  zcounti  = 0;
	int  zcount  = 0;	
	try {
		M4Operations m = new M4Operations(request);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		zcount = m.getCount(znodo,zsubsesion,znodo);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);

	int  zcountlista  = 0;
	try {
	    M4Operations m = new M4Operations(request);
	    zcountlista = m.getCountInClient(znodolista,zsubsesion,znodolista);
	} catch(Exception e) {}
	String	zcountvlista = String.valueOf(zcountlista);
%>
	<table width="100%" cellspacing="0">
	<tr>
		<td class="titulofuncional" colspan="2"><%=tranivMSS.getProperty("iv_mss.Validaiv")%></td>
	</tr>
	<tr>
		<td>
			<img alt="<%=tranivMSS.getProperty("iv_mss.Validaiv")%>" src="/iconos/noname_objetivos_ess_103_100.gif" width="103" height="100" />
		</td>
		<td>
			<div class="descripcionfuncional"><%=tranivMSS.getProperty("iv_mss.ValIvTitle")%></div>
	   </td>
	</tr>
	</table>
<%@ include file="../../mss_generico/english/mssgenerico_filtro_val.jsp" %>
<br />
	<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_val.jsp?estado=31" method="post" name="oculto" id="oculto">
		<input type="hidden" id="zfiltro" name="zfiltro"  value="<%=zfiltro%>" />
		<input type="hidden" id="zfiltroemp" name="znivel"  value="<%=znivel%>" />
		<input type="hidden" id="zinicios" name="zinicios"  value="" />
	</form>
	<% if (zcounti > 0) { %>
	<table width="100%" cellspacing="0" >
		<tr>
			<td class = "tablaestadosceldatitulo" colspan="2">Petitions</td>
		</tr>
		<%
			String zregistroinicials = String.valueOf(zregistroinicial);
			String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
			String zposicions = "0";
			int zcontrol = 0;
			int zposicion =0;
		%>
		<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
		<%
		zposicions = m4lix;
		zposicion = Integer.valueOf(zposicions).intValue();
		zposicion = zposicion - zregistroinicial;
		%>
		<!-- Tabla de datos. Parte constituyente de un registro.-->
		<tr>
			<td class="fuentecampo">
				<table cellspacing="0" width="100%">
					<tr>
					        <td class="fuentecamponombre" colspan="6">&nbsp;<m4:item m4name="<%=zNOMBREEMPLEADO%>" htmlsafe="true"/>&nbsp;<%=tranivMSS.getProperty("iv_mss.LblSolcita")%>&nbsp;<m4:item m4name="<%=zN_ACCION%>" htmlsafe="true"/></td>
					</tr>
					<tr>
						<td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zSCO_INTERVIEW_NAME%>" htmlsafe="true"/>&nbsp;</td>
						<td class="fuentevalor"><m4:item m4name="<%=zSCO_INTERVIEW_NAME%>" htmlsafe="true"/></td>
				                <td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zSCO_NM_INTERVIEW_TYPE%>" htmlsafe="true"/>&nbsp;</td>
						<td class = "fuentevalor" ><m4:item m4name="<%=zSCO_NM_INTERVIEW_TYPE%>" htmlsafe="true"/></td>
						<td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zSCO_NM_INTERVIEW_PRIORITY%>" htmlsafe="true"/>&nbsp;</td>
						<td class = "fuentevalor" ><m4:item m4name="<%=zSCO_NM_INTERVIEW_PRIORITY%>" htmlsafe="true"/></td>
						
					</tr>
					<tr>
						<td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSCO_INTERVIEW_REASON%>" htmlsafe="true"/>&nbsp;</td>
						<td class = "fuentevalor" colspan="5" ><m4:item m4name="<%=zSCO_INTERVIEW_REASON%>" htmlsafe="true"/></td>
					</tr>
					<tr>
						<td class="fuentecampo" >
						   <form name="a<%=zposicion%>" id="a<%=zposicion%>">
					 	      <input id="ocultos" name="ocultos" type="hidden" value="{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*REC=<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NOD=SSE_GN_INTERVIEW{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NIVEL_ACEPTADO=<%=znivel%>" />
						      <input name="<%=zcountv%>" type="hidden" value="<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>" />
						   </form>
						</td>	
					</tr>
				</table>
			</td>
			<td class="fuentecampo">
			<form name="b<%=zposicion%>" id="b<%=zposicion%>">
				<table cellspacing="0">
					<tr>
						<td class = "fuentecampo"><input title="<%=tranivMSS.getProperty("iv_mss.LblOKIv")%>" id="ac<%=zposicion%>" name="ac<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ca<%=zposicion%>)" /><%=tranivMSS.getProperty("iv_mss.LblOK")%></td>
					</tr>
					<tr>
						<td class = "fuentecampo"><input title="<%=tranivMSS.getProperty("iv_mss.LblCancelIv")%>" id="ca<%=zposicion%>" name="ca<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ac<%=zposicion%>)" /><%=tranivMSS.getProperty("iv_mss.LblCancel")%></td>
					</tr>
				</table>
			</form>
			</td>
		</tr>
		<form name="c<%=zposicion%>" id="c<%=zposicion%>">
		<tr>
			<td class="fuentecampo" colspan="2"><%=tranivMSS.getProperty("iv_mss.LblReasonCancel")%>
				<input size="48" title="<%=tranivMSS.getProperty("iv_mss.LblChooseReasonCancel")%>" id="mo<%=zposicion%>" name="mo<%=zposicion%>" type="text" maxlength="60" />
				
			</td>
		</tr>
		</form>
		<tr>
			<td class="separadorlinea" colspan="2"><hr /></td>
		</tr>
		</m4:loop>
		<form id="envio" name="envio" action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp" method="post">
		<input type="hidden" id="param" name="param" value="" />
		<input type="hidden" id="TAG" name="TAG" value="" />
		</form>
	</table>
	<%@include file="../../sse_generico/english/generico_ventanas_post.jsp"%>

	<%
	}else{%>	
	<div class="fuentenodatos" align="center"><%=tranivMSS.getProperty("iv_mss.LblNoValidate")%></div>
	<%
	}
	%>
<m4:endpage/>
<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>

</body>
</html>