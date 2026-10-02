<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<title>Direcci&oacute;n fiscal</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String zpais = zobjtabla.m4paramvalor("zpais");
String zcom = zobjtabla.m4paramvalor("zcom");
String zpro = zobjtabla.m4paramvalor("zpro");

/*
String zdireccion2 =zobjtabla.m4paramvalor("zdireccion2");
String ztipo = zobjtabla.m4paramvalor("tipo");
String zntipo = zobjtabla.m4paramvalor("ntipo");
String znumero =zobjtabla.m4paramvalor("numero");
String zbloque = zobjtabla.m4paramvalor("bloque");
String zpiso = zobjtabla.m4paramvalor("piso");
String zescalera =zobjtabla.m4paramvalor("escalera");
String zpuerta =zobjtabla.m4paramvalor("puerta");
String zcpostal =zobjtabla.m4paramvalor("cpostal");
*/
String zdireccion2 =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdireccion2");
String ztipo =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tipo");
String zntipo =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ntipo");
String znumero =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"numero");
String zbloque =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bloque");
String zpiso =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"piso");
String zescalera =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"escalera");
String zpuerta =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puerta");
String zcpostal =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"cpostal");



String estado = zobjtabla.m4paramvalor("estado");
String zinicios = zobjtabla.m4paramvalor("zinicios");
if ((zdireccion2==null)){zdireccion2="";}
if ((ztipo==null)){ztipo="CL";}
if ((zntipo==null)||(zntipo.equals(""))){zntipo="Calle";}
if ((znumero==null)){znumero="";}
if ((zbloque==null)){zbloque="";}
if ((zpiso==null)){	zpiso="";}
if ((zescalera==null)){zescalera="";}
if ((zpuerta==null)){zpuerta="";}
if ((zcpostal==null)||(zcpostal.equals(""))){zcpostal="";}
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
<script type="text/javascript">
function filtrar(num){
var valor =m4select(m4objeto("STD_ID_COUNTRY","NombreFormulario"),"value");
m4valor("oculto","zpais",valor,"set");
if ((num=="2")||(num=="3")) {
var valor21 =m4select(m4objeto("STD_ID_GEO_DIV","NombreFormulario"),"value");
m4valor("oculto","zcom",valor21,"set");
}
if (num=="3") {
	var valor22 =m4select(m4objeto("STD_ID_SUB_GEO_DIV","NombreFormulario"),"value");
	m4valor("oculto","zpro",valor22,"set");
}
else{
	m4valor("oculto","zpro","","set");
}	
var zdireccion2=m4valor("NombreFormulario","STD_ADDRESS_LINE_1","","get");
m4valor("oculto","zdireccion2",zdireccion2,"set");
var tipo =m4select(m4objeto("SSP_ID_SIGLA_DOMIC","NombreFormulario"),"value");
m4valor("oculto","tipo",tipo,"set");
var ntipo =m4select(m4objeto("SSP_ID_SIGLA_DOMIC","NombreFormulario"),"text");
m4valor("oculto","ntipo",ntipo,"set");
var nu =m4valor("NombreFormulario","SSP_NUM_VIA","","get");
m4valor("oculto","numero",nu,"set");
var bloque =m4valor("NombreFormulario","SSP_BLOQUE","","get");	
m4valor("oculto","bloque",bloque,"set");
var piso =m4valor("NombreFormulario","SSP_PISO","","get");
m4valor("oculto","piso",piso,"set");	
var escalera = m4valor("NombreFormulario","SSP_ESCALERA","","get");
m4valor("oculto","escalera",escalera,"set");
var puerta =m4valor("NombreFormulario","SSP_PUERTA","","get"); 	
m4valor("oculto","puerta",puerta,"set");
var postal =m4valor("NombreFormulario","SSP_DISTRIT_POSTAL","","get");	
m4valor("oculto","cpostal",postal,"set");
m4valor("oculto","zinicios",<%=zinicios%>,"set");
m4submit("oculto"); 
}
oalfanum = new m4objvalidacion('_alfanum','1','40','','La via publica no puede ser nulo',false);
onum = new m4objvalidacion('_alfanum','1','5','','El numero de via no puede ser nulo',false);
ocp = new m4objvalidacion('_cp','','','','El distrito postal es un campo oligatorio numerico de 5 caracteres',false);
function comprobar(){
var error = 0;
var texto = "Se han encontrado los siguientes errores. Debe corregirlos para enviar su petición:\n";
oalfanum.m4validar(m4objeto("STD_ADDRESS_LINE_1","NombreFormulario"))
if (oalfanum.resultado == false){
texto = texto + "\n     La Via Publica es obligatoria.Modifique el texto.";
error = 1;
}
onum.m4validar(m4objeto("SSP_NUM_VIA","NombreFormulario"))
if (onum.resultado == false){
texto = texto + "\n     El numero de via es obligatorio.";
error = 1;
}
ocp.m4validar(m4objeto("SSP_DISTRIT_POSTAL","NombreFormulario"))
if (ocp.resultado == false){
texto = texto + "\n     El distrito postal es obligatorio. Es un numerico de 5 cifras";
error = 1;
}
var zloc =m4select(m4objeto("STD_ID_GEO_PLACE","NombreFormulario"),"text");
if ((zloc == null)||(zloc=="")){
texto = texto + "\n\n    La poblacion es incorrecta";
error = 1;
}
if (error == 1){
alert(texto);
return;}
else {
m4submit("NombreFormulario");
}
}
function pendientes(ord){
var parametros = new Array("TAG","REC","ACC","NOD");
var valores = new Array("SSE_ADDRESS",ord,"BORRAR","SSE_ADDRESS");
m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
}
</script>
</head>
<body>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_menusup.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_links.jsp" %>
<%
String zsubsesion = "SSE_ADDRESS";
String zmeta4object = "SSE_ADDRESS";
String znodo = "SSE_ADDRESS";
String znodo2 = "M4T_ID_SIGLA_DOMICI";
String znodo3 = "M4T_COUNTRY";
String znodo4 = "M4T_GEO_DIV";
String znodo5 = "M4T_SUB_GEO_DIV";
String znodo6 = "M4T_GEO_PLACE";
		
String ztipocarga = "SSE";   
String zventanas = "4";
int zvuelta = 2;
String zdireccion = "/sse_g1/sse_g1_p1_mod.jsp";
String zestado="11";

int zregistroinicial = Integer.valueOf(zinicios).intValue();
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;

String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
String zmove =znodo + ":" +  znodo + "[" + zregistroinicial + "]";
String zraiz =  znodo + ":" + zsubsesion  + "!"+ znodo+"." ;
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zPAISS = zraiz+ "PAIS";
String zNOMBREPAIS = zraiz+ "NOMBRE_PAIS";
String zNOMBRECOMUNIDAD = zraiz+  "NOMBRE_COMUNIDAD";
String zCOMUNIDAD = zraiz+ "COMUNIDAD";
String zPROVINCIA =  zraiz+ "PROVINCIA";
String zNOMBREPROVINCIA = zraiz+  "NOMBRE_PROVINCIA";
String zPOBLACION = zraiz+ "POBLACION";
String zNOMBREPOBLACION =  zraiz+ "NOMBRE_POBLACION";

String zSTDNGEOPLACE = zcomun+ "STD_N_GEO_PLACE"; 
String zSTDNSUBGEODIV =  zcomun+"STD_N_SUB_GEO_DIV"; 
String zSTDNGEODIV = zcomun+ "STD_N_GEO_DIV";    
String zSTDNCOUNTRY = zcomun+ "STD_N_COUNTRY";
String zORDINAL = zcomun+ "ORDINAL";
String zNACCION = zcomun+ "N_ACCION";   		
String zSSPNSIGLADOMIC = zcomun+ "SSP_N_SIGLA_DOMIC";
String zSTDADDRESSLINE1 = zcomun+ "STD_ADDRESS_LINE_1";
String zSSPNUMVIA =  zcomun+"SSP_NUM_VIA";
String zSSPBLOQUE = zcomun+ "SSP_BLOQUE";
String zSSPPISO = zcomun+ "SSP_PISO";
String zSSPESCALERA = zcomun+ "SSP_ESCALERA";
String zSSPPUERTA = zcomun+ "SSP_PUERTA";   
String zSSPDISTRITPOSTAL = zcomun+ "SSP_DISTRIT_POSTAL"; 
String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";  
String zmove2 =znodo2 + ":" +  znodo2 + "[FIRST]";
String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
String zSSPIDSIGLADOMIC2 =  zcomun2 + "SSP_ID_SIGLA_DOMIC"; 
String zSSPNSIGLADOMIC2 =  zcomun2 + "SSP_N_SIGLA_DOMIC";
String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
String zmove3 =znodo3 + ":" +  znodo3 + "[FIRST]";
String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
String zSTDIDCOUNTRY3 = zcomun3 + "STD_ID_COUNTRY"; 
String zSTDNCOUNTRY3 =  zcomun3 +"STD_N_COUNTRY"; 
String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
String zmove4 =znodo4 + ":" +  znodo4 + "[FIRST]";
String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&VAR.m4lix]" + ".";
String zSTDIDGEODIV4 = zcomun4 + "STD_ID_GEO_DIV"; 
String zSTDNGEODIV4 =  zcomun4 +"STD_N_GEO_DIV"; 
String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
String zmove5 =znodo5 + ":" +  znodo5 + "[FIRST]";
String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&VAR.m4lix]" + ".";
String zSTDNSUBGEODIV5 = zcomun5 +  "STD_N_SUB_GEO_DIV"; 
String zSTDIDSUBGEODIV5 = zcomun5 +  "STD_ID_SUB_GEO_DIV"; 
String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";
String zmove6 =znodo6 + ":" +  znodo6 + "[FIRST]";
String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&VAR.m4lix]" + ".";
String zSTDNGEOPLACE6 = zcomun6 + "STD_N_GEO_PLACE"; 
String zSTDIDGEOPLACE6 =  zcomun6 +"STD_ID_GEO_PLACE"; 		

String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	M4Operations m = new M4Operations(request); 
	m.setItem(zsubsesion,znodo,"","PAIS",zpais);  
	m.setItem(zsubsesion,znodo,"","COMUNIDAD",zcom);  
	m.setItem(zsubsesion,znodo,"","PROVINCIA",zpro);			
} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/>	</m4:exec>
<m4:outputdef m4alias="<%=znodo%>">	<m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo6%>"><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove5%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove6%>"/></m4:move>
<%
int  zcount  = 0;
int  zcounti  = 0;	
int  zcount2  = 0;
int  zcount3  = 0;
int  zcount4  = 0;
int  zcount5  = 0;
int  zcount6  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
    zcount4 = m.getCount(znodo4,zsubsesion,znodo4);
    zcount5 = m.getCount(znodo5,zsubsesion,znodo5);
    zcount6 = m.getCount(znodo6,zsubsesion,znodo6);
} catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);
String	zcountv2 = String.valueOf(zcount2);
String	zcountv3 = String.valueOf(zcount3);
String	zcountv4 = String.valueOf(zcount4);
String	zcountv5 = String.valueOf(zcount5);
String	zcountv6 = String.valueOf(zcount6);
%>
<table width="100%">
<tr><td class="titulofuncional" colspan="2">Direcci&oacute;n fiscal</td></tr>
<tr>
	<td><img alt="Direcci&oacute;n fiscal"title="Direcci&oacute;n fiscal" src="/iconos/noname_edificio_121_100.gif" width="100" height="100" /></td>
	<td>
	<div class="descripcionfuncional">Modifica tu direcci&oacute;n fiscal.</div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" title="Mis datos personales"href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11">Mis datos personales</a></li>
	</ul>
	</td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11" method="post" name="oculto" id="oculto">
<input type="hidden" id="zpais" name="zpais" value="<m4:item m4name="<%=zPAISS%>" htmlsafe="true"/>" />
<input type="hidden" id="zcom" name="zcom" value="<m4:item m4name="<%=zCOMUNIDAD%>" htmlsafe="true"/>" />
<input type="hidden" id="zpro" name="zpro" value="<m4:item m4name="<%=zPROVINCIA%>" htmlsafe="true"/>" />
<input type="hidden" id="zdireccion2" name="zdireccion2"  value="<%=zdireccion2%>" />
<input type="hidden" id="tipo" name="tipo" value="<%=ztipo%>" />
<input type="hidden" id="ntipo" name="ntipo" value="<%=zntipo%>" />
<input type="hidden" id="numero" name="numero" value="<%=znumero%>" />
<input type="hidden" id="bloque" name="bloque" value="<%=zbloque%>" />
<input type="hidden" id="piso" name="piso" value="<%=zpiso%>" />
<input type="hidden" id="escalera" name="escalera" value="<%=zescalera%>" />
<input type="hidden" id="puerta" name="puerta" value="<%=zpuerta%>" />
<input type="hidden" id="cpostal" name="cpostal" value="<%=zcpostal%>" />
<input type="hidden" id="zinicios" name="zinicios" value="" />
</form>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_ADDRESS" />
<input type="hidden" id="REC" name="REC" value="" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_ADDRESS" />		
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
	<td colspan="3">Direcci&oacute;n fiscal</td>
	<td class="tablamenuright"><a title="Mis datos personales"href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11"><img alt="Mis datos personales" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
	<td class="fuentecampo">*&nbsp;Via p&uacute;blica</td>
	<td class="fuentecampo" colspan="3">
	<select id="SSP_ID_SIGLA_DOMIC" class="fuenteformulario150" name="SSP_ID_SIGLA_DOMIC" title="Escoge el tipo de via">				
	<option value="<%=ztipo%>"><%=zntipo%></option>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSSPIDSIGLADOMIC2%>" htmlsafe="true"/>"><m4:item m4name="<%=zSSPNSIGLADOMIC2%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	&nbsp;
	<input class="fuenteformulario" type="text" id="STD_ADDRESS_LINE_1" name="STD_ADDRESS_LINE_1" size="40" maxlength="40" tabindex="1" title="Escribe el nombre de tu via p&uacute;blica" value ="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zdireccion2)%>"  />
	</td>
</tr>
<tr>
	<td class="fuentecampo">*&nbsp;N&uacute;mero</td>
	<td class="fuentevalor"><input class="fuenteformulario" type="text" id="SSP_NUM_VIA" name="SSP_NUM_VIA" size="5" maxlength="5" tabindex="2" title="Escribe el n&uacute;mero de tu calle"  value ="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(znumero)%>"  /></td>
	<td class="fuentecampo" colspan="2">&nbsp;Bloque&nbsp;
	<input class="fuenteformulario" tabindex="3" type="text" id="SSP_BLOQUE" name="SSP_BLOQUE" size="2" maxlength="5" title="Escribe el n&uacute;mero de tu bloque"   value ="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zbloque)%>" />
	&nbsp;Piso&nbsp;
	<input class="fuenteformulario" tabindex="4" type="text" id="SSP_PISO" name="SSP_PISO" size="2" maxlength="10" title="Escribe tu piso"  value ="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zpiso)%>" />
	&nbsp;Escalera&nbsp;	
	<input class="fuenteformulario" tabindex="5" type="text" id="SSP_ESCALERA" name="SSP_ESCALERA" size="2" maxlength="10" title="Escribe tu escalera"  value ="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zescalera)%>" />
	&nbsp;Puerta&nbsp;
	<input class="fuenteformulario" tabindex="6" type="text" id="SSP_PUERTA" name="SSP_PUERTA" size="2" maxlength="10" title="Escribe el n&uacute;mero de tu puerta"  value ="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zpuerta)%>" />
	</td>
</tr>
<tr>
	<td class="fuentecampo">&nbsp;Pa&iacute;s</td>
	<td class="fuentecampo">
	<select id="STD_ID_COUNTRY" class="fuenteformulario100" name="STD_ID_COUNTRY" title="Escoge el pais" onchange="filtrar(1)">
	<option value="<m4:item m4name="<%=zPAISS%>" htmlsafe="true"/>"><m4:item m4name="<%=zNOMBREPAIS%>" htmlsafe="true"/></option>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSTDIDCOUNTRY3%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNCOUNTRY3%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	</td>
		<script type="text/javascript" language="Javascript1.5"><!--
	 m4searchoptioness("NombreFormulario","STD_ID_COUNTRY",'<m4:item m4name="<%=zPAISS%>" jsafe="true" htmlsafe="true"/>');


--></script>
	<td class="fuentecampo">&nbsp;<m4:label item="STD_ID_GEO_DIV" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;
	<select id="STD_ID_GEO_DIV" class="fuenteformulario150" name="STD_ID_GEO_DIV" title="Escoge la comunidad" onchange="filtrar(2)">

	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv4).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSTDIDGEODIV4%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNGEODIV4%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	</td>
			<script type="text/javascript" language="Javascript1.5"><!--
			if ('<m4:item m4name="<%=zCOMUNIDAD%>" htmlsafe="true"/>'!= ""){
	 m4searchoptioness("NombreFormulario","STD_ID_GEO_DIV",'<m4:item m4name="<%=zCOMUNIDAD%>" htmlsafe="true"/>');

  }
--></script>


	<td class="fuentecampo">&nbsp;<m4:label item="STD_ID_SUB_GEO_DIV" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;
	<select id="STD_ID_SUB_GEO_DIV" class="fuenteformulario100" name="STD_ID_SUB_GEO_DIV" title="Escoge la provincia" onchange="filtrar(3)">

	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv5).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSTDIDSUBGEODIV5%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNSUBGEODIV5%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	</td>
			<script type="text/javascript" language="Javascript1.5"><!--
	 m4searchoptioness("NombreFormulario","STD_ID_SUB_GEO_DIV",'<m4:item m4name="<%=zPROVINCIA%>" jsafe="true" htmlsafe="true"/>');


--></script>
</tr>
<tr>
	<td class="fuentecampo">*&nbsp;C&oacute;d. postal</td>

	<td class="fuentevalor"><input class="fuenteformulario" type="text" id="SSP_DISTRIT_POSTAL" name="SSP_DISTRIT_POSTAL" size="5" maxlength="5" tabindex="7" title="Escribe tu c&oacute;digo postal" value ="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zcpostal)%>"  /></td>
	<td class="fuentecampo" colspan="2">*&nbsp;<m4:label item="STD_ID_GEO_PLACE" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;

	<select id="STD_ID_GEO_PLACE" class="fuenteformulario150" name="STD_ID_GEO_PLACE" title="Escoge la poblaci&oacute;n">

	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv6).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSTDIDGEOPLACE6%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNGEOPLACE6%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	</td>
	<script type="text/javascript" language="Javascript1.5"><!--
	 m4searchoptioness("NombreFormulario","STD_ID_GEO_PLACE",'<m4:item m4name="<%=zPOBLACION%>" jsafe="true" htmlsafe="true"/>');


--></script>
</tr>
<tr>
	<td class="fuenteboton" colspan="8">
	<a href="javascript:comprobar();" tabindex="8" title="Enviar">
	<img id="enviar" alt="Enviar" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>
</table>
<script type="text/javascript">m4focus("NombreFormulario","STD_ADDRESS_LINE_1");</script>
</form>
<% 
if (zcount > 0) {
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
%>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo"><td colspan="10">Direcci&oacute;n fiscal</td></tr>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<tr>
	<td class="fuentecampoaccion" colspan="9"><m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>			
	<td class="fuentebotonright"><a title="Eliminar la petici&oacute;n" href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');"><img class="tablamenuright" alt="Eliminar la petici&oacute;n"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
	<td class="fuentecampo" >&nbsp;Via p&uacute;blica</td>
	<td class="fuentevalor" colspan="9"><m4:item m4name="<%=zSSPNSIGLADOMIC%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSTDADDRESSLINE1%>" htmlsafe="true"/></td>
</tr>
<tr>
	<td class="fuentecampo">&nbsp;N&uacute;mero</td><td class="fuentevalor"><m4:item m4name="<%=zSSPNUMVIA%>" htmlsafe="true"/></td>
	<td class="fuentecampo">Bloque</td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSSPBLOQUE%>" htmlsafe="true"/></td>			
	<td class="fuentecampo">Piso</td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSSPPISO%>" htmlsafe="true"/></td>			
	<td class="fuentecampo">Escalera</td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSSPESCALERA%>" htmlsafe="true"/></td>			
	<td class="fuentecampo">Puerta</td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSSPPUERTA%>" htmlsafe="true"/></td>			
</tr>
<tr>
	<td class="fuentecampo">&nbsp;Pa&iacute;s</td><td class="fuentevalor" colspan="2"><m4:item m4name="<%=zSTDNCOUNTRY%>" htmlsafe="true"/></td>
	<td class="fuentecampo"><m4:label item="STD_ID_GEO_DIV" htmlsafe="true" outputdef="<%=znodo%>"/></td><td class="fuentevalor" colspan="2"><m4:item m4name="<%=zSTDNGEODIV%>" htmlsafe="true"/></td>
	<td class="fuentecampo"><m4:label item="STD_ID_SUB_GEO_DIV" htmlsafe="true" outputdef="<%=znodo%>"/></td><td class="fuentevalor" colspan="3"><m4:item m4name="<%=zSTDNSUBGEODIV%>" htmlsafe="true"/></td>				
</tr>
<tr>
	<td class="fuentecampo">&nbsp;C&oacute;d. postal</td><td class="fuentevalor"><m4:item m4name="<%=zSSPDISTRITPOSTAL%>" htmlsafe="true"/></td>
	<td class="fuentecampo"><m4:label item="STD_ID_GEO_PLACE" htmlsafe="true" outputdef="<%=znodo%>"/></td><td class="fuentevalor" colspan="7"><m4:item m4name="<%=zSTDNGEOPLACE%>" htmlsafe="true"/></td>				
</tr>
<tr><td class="separadorlinea" colspan="10"><hr /></td></tr>
 </m4:loop>
</table>
<%@include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_ventanas_post.jsp"%>
<%
}
%>	
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>


