<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Otras direcciones</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<% 
Generatablaparametros zobjtabla = new Generatablaparametros(request);
	String zpais = zobjtabla.m4paramvalor("zpais");
	String zcom = zobjtabla.m4paramvalor("zcom");
	String zpro = zobjtabla.m4paramvalor("zpro");
	String zpar = zobjtabla.m4paramvalor("zpar");		
	String ztipo = zobjtabla.m4paramvalor("ztipo");
	String zdirec = zobjtabla.m4paramvalor("direc");
	String znumero = zobjtabla.m4paramvalor("numero");
	String zbloque = zobjtabla.m4paramvalor("bloque");
	String zpiso = zobjtabla.m4paramvalor("piso");
	String zescalera = zobjtabla.m4paramvalor("escalera");
	String zpuerta = zobjtabla.m4paramvalor("puerta");
	String zcpostal = zobjtabla.m4paramvalor("cpostal");
	String zntipo = zobjtabla.m4paramvalor("ntipo");
	String zclase = zobjtabla.m4paramvalor("clase");
	String znclase = zobjtabla.m4paramvalor("nclase");
	String estado = zobjtabla.m4paramvalor("estado");      
	String zinicios = zobjtabla.m4paramvalor("zinicios");
	if ((ztipo==null)){ztipo="CL";}
	if ((zdirec==null)){zdirec="";}
	if ((znumero==null)){znumero="";}
	if ((zbloque==null)){zbloque="";}
	if ((zpiso==null)){zpiso="";}
	if ((zescalera==null)){zescalera="";}
	if ((zpuerta==null)){zpuerta="";}
	if ((zcpostal==null)){zcpostal="";}
	if ((zclase==null)){zclase="";}
	if ((znclase==null)){znclase="";}
	if ((zntipo==null)){zntipo="Calle";}
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
var tipo =m4select(m4objeto("SSP_ID_SIGLA_DOMIC","NombreFormulario"),"value");
m4valor("oculto","tipo",tipo,"set");
var ntipo =m4select(m4objeto("SSP_ID_SIGLA_DOMIC","NombreFormulario"),"text");
m4valor("oculto","ntipo",ntipo,"set");
var direc=m4valor("NombreFormulario","STD_ADDRESS_LINE_1","","get");
m4valor("oculto","direc",direc,"set");
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
var clase =m4select(m4objeto("STD_ID_LOCATION_TYPE","NombreFormulario"),"value");
m4valor("oculto","clase",clase,"set");
var nclase =m4select(m4objeto("STD_ID_LOCATION_TYPE","NombreFormulario"),"text");
m4valor("oculto","nclase",nclase,"set");
m4valor("oculto","zinicios",<%=zinicios%>,"set");
m4submit("oculto"); 
}
oalfanum = new m4objvalidacion('_alfanum','1','40','','La via publica no puede ser nulo',false);
onum = new m4objvalidacion('_alfanum','1','10','','El numero de via no puede ser nulo',false);
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
var valores = new Array("SSE_ADDRESS_OTROS",ord,"BORRAR","SSE_ADDRESS_OTROS");
m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
}		
</script>
</head>
<body>
<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_ADDRESS_OTROS";
   String zmeta4object = "SSE_ADDRESS_OTROS";
   String znodo = "SSE_ADDRESS_OTROS";  
   String znodo2 = "M4T_LU_LOCATION_TYPE";
   String znodo3 = "M4T_ID_SIGLA_DOMICI";
   String znodo4 = "M4T_COUNTRY";
   String znodo7 = "M4T_GEO_DIV";
   String znodo5 = "M4T_SUB_GEO_DIV";
   String znodo6 = "M4T_GEO_PLACE";
   String ztipocarga = "SSE";
   String zventanas = "4";
   int zvuelta = 2;
   String zdireccion = "sse_g1/sse_g1_p1_mod4.jsp";
   String zestado = "11";
   
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   String zPAISS = zraiz + "PAIS";
   String zNOMBREPAIS = zraiz + "NOMBRE_PAIS";
   String zNOMBRECOMUNIDAD = zraiz + "NOMBRE_COMUNIDAD";
   String zCOMUNIDAD = zraiz + "COMUNIDAD";
   String zPROVINCIA = zraiz + "PROVINCIA";
   String zNOMBREPROVINCIA = zraiz + "NOMBRE_PROVINCIA";
   String zPOBLACION = zraiz + "POBLACION";
   String zNOMBREPOBLACION = zraiz + "NOMBRE_POBLACION";
   
   String zSTDNGEOPLACE = zcomun+ "STD_N_GEO_PLACE"; 
   String zSTDNSUBGEODIV =zcomun+ "STD_N_SUB_GEO_DIV"; 
   String zSTDNGEODIV =zcomun+"STD_N_GEO_DIV";    
   String zSTDNCOUNTRY =zcomun+ "STD_N_COUNTRY";
   String zORDINAL = zcomun+ "ORDINAL";
   String zNACCION = zcomun+ "N_ACCION";
   String zSTDNLOCATIONTYPE =zcomun+ "STD_N_LOCATION_TYPE";
   String zSSPNSIGLADOMIC = zcomun+"SSP_N_SIGLA_DOMIC";
   String zSTDADDRESSLINE1 = zcomun+"STD_ADDRESS_LINE_1";
   String zSSPNUMVIA = zcomun+"SSP_NUM_VIA";
   String zSSPBLOQUE = zcomun+ "SSP_BLOQUE";
   String zSSPPISO =zcomun+"SSP_PISO";
   String zSSPESCALERA =  zcomun+"SSP_ESCALERA";
   String zSSPPUERTA =zcomun+"SSP_PUERTA";   
   String zSSPDISTRITPOSTAL =zcomun+ "SSP_DISTRIT_POSTAL";	
   
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 =znodo2 + ":" +  znodo2 + "[FIRST]";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   String zSTDNLOCATIONTYPE2 = zcomun2+ "STD_N_LOCATION_TYPE";
   String zSTDIDLOCATIONTYPE2 = zcomun2+ "STD_ID_LOCATION_TYPE";   
   
   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zmove3 = znodo3 + ":" +  znodo3 + "[FIRST]";
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
   String zSSPIDSIGLADOMIC3 = zcomun3+ "SSP_ID_SIGLA_DOMIC"; 
   String zSSPNSIGLADOMIC3 =  zcomun3+"SSP_N_SIGLA_DOMIC"; 
  
   String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
   String zmove4 = znodo4 + ":" +  znodo4+ "[FIRST]";   
   String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&VAR.m4lix]" + ".";
   String zSTDIDCOUNTRY4 = zcomun4+ "STD_ID_COUNTRY"; 
   String zSTDNCOUNTRY4 = zcomun4+"STD_N_COUNTRY";

   String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
   String zmove5 = znodo5 + ":" +  znodo5+ "[FIRST]";
   String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&VAR.m4lix]" + ".";
   String zSTDNSUBGEODIV5 =zcomun5+ "STD_N_SUB_GEO_DIV";
   String zSTDIDSUBGEODIV5 = zcomun5+"STD_ID_SUB_GEO_DIV"; 
   
   String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";
   String zmove6 = znodo6 + ":" +  znodo6+ "[FIRST]";
   String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&VAR.m4lix]" + ".";
    
   String zSTDNGEOPLACE6 = zcomun6+ "STD_N_GEO_PLACE"; 
   String zSTDIDGEOPLACE6 = zcomun6+"STD_ID_GEO_PLACE"; 

   String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";
   String zmove7 = znodo7 + ":" +  znodo7+ "[FIRST]";   
   String zcomun7 = znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&VAR.m4lix]" + ".";
   String zSTDIDGEODIV7 =zcomun7+"STD_ID_GEO_DIV"; 
   String zSTDNGEODIV7 = zcomun7+"STD_N_GEO_DIV";

   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/><m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
M4Operations m = new M4Operations(request); 
	m.setItem(zsubsesion,znodo,"","PAIS",zpais);  
	m.setItem(zsubsesion,znodo,"","COMUNIDAD",zcom);  
	m.setItem(zsubsesion,znodo,"","PROVINCIA",zpro);			
} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo6%>"><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo7%>"><m4:param name="m4name0" value="<%=zoutputdef7%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove5%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove6%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove7%>"/></m4:move>
<%
	int  zcount  = 0;
	int  zcounti  = 0;	
	int  zcount2  = 0;
	int  zcount3  = 0;
	int  zcount4  = 0;
	int  zcount5  = 0;
	int  zcount6  = 0;
	int  zcount7  = 0;
	try {
		M4Operations m = new M4Operations(request);
		zcount = m.getCount(znodo,zsubsesion,znodo);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
		zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
		zcount4 = m.getCount(znodo4,zsubsesion,znodo4);
		zcount5 = m.getCount(znodo5,zsubsesion,znodo5);
		zcount6 = m.getCount(znodo6,zsubsesion,znodo6);
		zcount7 = m.getCount(znodo7,zsubsesion,znodo7);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcountv2 = String.valueOf(zcount2);
	String	zcountv3 = String.valueOf(zcount3);
	String	zcountv4 = String.valueOf(zcount4);
	String	zcountv5 = String.valueOf(zcount5);
	String	zcountv6 = String.valueOf(zcount6);
	String	zcountv7 = String.valueOf(zcount7);
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2">Otras direcciones</td></tr>
<tr>
	<td><img alt="Otras direcciones"title="Otras direcciones" src="/iconos/noname_otras_direcciones_116_100.gif" width="116" height="100"  /></td>
	<td>
	<div class="descripcionfuncional">Da de alta o modifica tus otras direcciones.</div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" title="Mis datos personales"href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11">Mis datos personales</a></li>
	</ul>
	</td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11" method="post" name="oculto" id="oculto">
	<input type="hidden" id="zpais" name="zpais"  value="<m4:item m4name="<%=zPAISS%>" htmlsafe="true"/>" />
	<input type="hidden" id="zcom" name="zcom"  value="<m4:item m4name="<%=zCOMUNIDAD%>" htmlsafe="true"/>" />
	<input type="hidden" id="zpro" name="zpro"  value="<m4:item m4name="<%=zPROVINCIA%>" htmlsafe="true"/>" />
	<input type="hidden" id="tipo" name="tipo"  value="<%=ztipo%>" />
	<input type="hidden" id="ntipo" name="ntipo"  value="<%=zntipo%>" />
	<input type="hidden" id="direc" name="direc"  value="<%=zdirec%>" />
	<input type="hidden" id="numero" name="numero"  value="<%=znumero%>" />
	<input type="hidden" id="bloque" name="bloque"  value="<%=zbloque%>" />
	<input type="hidden" id="piso" name="piso"  value="<%=zpiso%>" />
	<input type="hidden" id="escalera" name="escalera"  value="<%=zescalera%>" />
	<input type="hidden" id="puerta" name="puerta"  value="<%=zpuerta%>" />
	<input type="hidden" id="cpostal" name="cpostal"  value="<%=zcpostal%>" />
	<input type="hidden" id="clase" name="clase"  value="<%=zclase%>" />
	<input type="hidden" id="nclase" name="nclase"  value="<%=znclase%>" />
	<input type="hidden" id="zinicios" name="zinicios"  value="" />
</form>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_ADDRESS_OTROS" />
<input type="hidden" id="REC" name="REC" value="" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_ADDRESS_OTROS" />
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo">
	<td colspan="3">Direcci&oacute;n</td>
	<td class="tablamenuright"><a title="Mis datos personales" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11">
	<img alt="Mis datos personales" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	</a></td>
</tr>
<tr>
	<td class="fuentecampo" >&nbsp;Tipo de direcci&oacute;n</td>
	<td class="fuentevalor" colspan="3">
	<select id="STD_ID_LOCATION_TYPE" class="fuenteformulario150" name="STD_ID_LOCATION_TYPE"title="Escoge el tipo de direcci&oacute;n">
	<% if ((zclase == null)||(zclase.equals(""))){}else{ %>
	<option value="<%=zclase%>"><%=znclase%></option>
	<%}%>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSTDIDLOCATIONTYPE2%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNLOCATIONTYPE2%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	</td>
</tr>
<tr>
	<td class="fuentecampo">*&nbsp;Via p&uacute;blica</td>
	<td class="fuentecampo" colspan="3">
	<select id="SSP_ID_SIGLA_DOMIC"class="fuenteformulario150" name="SSP_ID_SIGLA_DOMIC" title="Escoge el tipo de via">
	<option value="<%=ztipo%>">	<%=zntipo%>	</option>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSSPIDSIGLADOMIC3%>" htmlsafe="true"/>"><m4:item m4name="<%=zSSPNSIGLADOMIC3%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	&nbsp;<input type="text"class="fuenteformulario"id="STD_ADDRESS_LINE_1" name="STD_ADDRESS_LINE_1" size="40" maxlength="40" title="Escribe el nombre de tu calle"tabindex="1" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zdirec)%>" />
	</td>
</tr>
<tr>
	<td class="fuentecampo">*&nbsp;N&uacute;mero </td>
	<td class="fuentevalor">
	<input type="text" class="fuenteformulario" id="SSP_NUM_VIA" name="SSP_NUM_VIA" size="5" maxlength="5" title="Escribe el n&uacute;mero de tu calle"tabindex="2" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(znumero)%>" />
	</td>
	<td class="fuentecampo" colspan="2">Bloque&nbsp;
	<input type="text" class = "fuenteformulario" id="SSP_BLOQUE" name="SSP_BLOQUE" size="2" maxlength="5" title="Escribe el n&uacute;mero de tu bloque" value ="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zbloque)%>"tabindex="3" />
	&nbsp;	Piso&nbsp;<input type="text" class = "fuenteformulario" id="SSP_PISO" name="SSP_PISO" size="2" maxlength="10" title="Escribe tu piso" value ="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zpiso)%>" tabindex="4"/>
	&nbsp;Escalera&nbsp;<input type="text" class = "fuenteformulario" id="SSP_ESCALERA" name="SSP_ESCALERA" size="2" maxlength="10" title="Escribe tu escalera" value ="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zescalera)%>"tabindex="5" />
	&nbsp;Puerta&nbsp;<input type="text" class = "fuenteformulario" id="SSP_PUERTA" name="SSP_PUERTA" size="2" maxlength="10" title="Escribe el n&uacute;mero de tu puerta "  value ="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zpuerta)%>"  tabindex="6"/>
	</td>
</tr>
<tr>
<td class="fuentecampo">&nbsp;Pa&iacute;s</td>
	<td class= "fuentecampo">
	<select id="STD_ID_COUNTRY" class = "fuenteformulario100" name="STD_ID_COUNTRY" title="Escoge el pais" onchange="filtrar(1)"tabindex="7">

	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv4).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSTDIDCOUNTRY4%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNCOUNTRY4%>" htmlsafe="true"/></option>
	</m4:loop>
   	</select>
	</td>
		<script type="text/javascript" language="Javascript1.5"><!--
	 m4searchoptioness("NombreFormulario","STD_ID_COUNTRY",'<m4:item m4name="<%=zPAISS%>" jsafe="true" htmlsafe="true"/>');


--></script>
	<td class="fuentecampo">&nbsp;Comunidad&nbsp;
	<select id="STD_ID_GEO_DIV" class = "fuenteformulario150" name="STD_ID_GEO_DIV" title="Escoge la comunidad" onchange="filtrar(2)"tabindex="8" >

	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv7).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSTDIDGEODIV7%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNGEODIV7%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	</td>
		<script type="text/javascript" language="Javascript1.5"><!--
			if ('<m4:item m4name="<%=zCOMUNIDAD%>" htmlsafe="true"/>'!= ""){
	 m4searchoptioness("NombreFormulario","STD_ID_GEO_DIV",'<m4:item m4name="<%=zCOMUNIDAD%>" htmlsafe="true"/>');

  }
--></script>
	<td class="fuentecampo">&nbsp;Provincia&nbsp;
	<select id="STD_ID_SUB_GEO_DIV" class = "fuenteformulario100" name="STD_ID_SUB_GEO_DIV" title="Escoge la provincia" onchange="filtrar(3)"tabindex="9">

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
	<td class="fuentecampo">*&nbsp;Cod. postal</td>
	<td class="fuentevalor">
	<input type="text" class="fuenteformulario" id="SSP_DISTRIT_POSTAL" name="SSP_DISTRIT_POSTAL" size="5" maxlength= "5" title="Escribe tu c&oacute;digo postal" tabindex="10" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zcpostal)%>" />
	</td>
	<td class="fuentecampo" colspan="2">*&nbsp;Poblaci&oacute;n&nbsp;
	<select id="STD_ID_GEO_PLACE" class="fuenteformulario150" name="STD_ID_GEO_PLACE" title="Escoge la poblaci&oacute;n"tabindex="11">

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
	<td class="fuenteboton"  colspan="10">
	<a title="Enviar" href="javascript:comprobar();" tabindex="12">	
	<img id="enviar"alt="Enviar" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36"  onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>
</table>
</form>
<% 
if (zcount > 0) {
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
%>
<table class="tabladatos" width="100%" cellspacing="0" border="0">
<tr class="tablaestadosceldatitulo"><td colspan="10">Otros domicilos</td></tr>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">

<tr>
	<td class="fuentecampoaccion">&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>			
	<td class="fuentecampo" colspan="8">&nbsp;<m4:item m4name="<%=zSTDNLOCATIONTYPE%>" htmlsafe="true"/></td>
	<td class="fuentebotonright">
	<a title="Eliminar la petici&oacute;n"class="tablamenuright" href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');">
	<img alt="Eliminar la petici&oacute;n"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>
<tr>
	<td class="fuentecampo">Via p&uacute;blica</td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSSPNSIGLADOMIC%>" htmlsafe="true"/></td><td class = "fuentevalor" colspan="8">&nbsp;<m4:item m4name="<%=zSTDADDRESSLINE1%>" htmlsafe="true"/></td>
</tr>
<tr>
	<td class="fuentecampo">N&uacute;mero</td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSSPNUMVIA%>" htmlsafe="true"/></td>
	<td class="fuentecampo">Bloque</td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSSPBLOQUE%>" htmlsafe="true"/></td>
	<td class="fuentecampo">Piso</td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSSPPISO%>" htmlsafe="true"/></td>
	<td class="fuentecampo">Escalera</td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSSPESCALERA%>" htmlsafe="true"/></td>
	<td class="fuentecampo">Puerta</td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSSPPUERTA%>" htmlsafe="true"/></td>
</tr>
<tr>
	<td class="fuentecampo">Cod. postal</td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSSPDISTRITPOSTAL%>" htmlsafe="true"/></td>
	<td class="fuentecampo">Poblaci&oacute;n</td><td class = "fuentevalor" colspan="7">&nbsp;<m4:item m4name="<%=zSTDNGEOPLACE%>" htmlsafe="true"/></td>
</tr>
<tr>
	<td class="fuentecampo">Provincia</td><td class = "fuentevalor" colspan="2">&nbsp;<m4:item m4name="<%=zSTDNSUBGEODIV%>" htmlsafe="true"/></td>
	<td class="fuentecampo">Comunidad</td><td class = "fuentevalor" colspan="2">&nbsp;<m4:item m4name="<%=zSTDNGEODIV%>" htmlsafe="true"/></td>
	<td class="fuentecampo">Pa&iacute;s</td><td class = "fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSTDNCOUNTRY%>" htmlsafe="true"/></td>
</tr>
<tr><td class="separadorlinea" colspan="10"><hr /></td></tr>
</m4:loop>
</table>
<%@include file="../../sse_generico/francais/generico_ventanas_post.jsp"%>
<%}%>	
<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
</div>
<script type="text/javascript">m4focus("NombreFormulario","STD_ADDRESS_LINE_1");</script>
</body>
<m4:endpage/>
</html>



