<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%
// cadenas para traducir

String titulo = "Idiomas";
String tfuncional = "Idiomas";
String dfuncional = "Indica cu&aacute;l es tu conocimiento de un idioma.";
String efuncional = "Mis datos profesionales";
String etiqueta = "Idioma";
String etiqueta2 = "Nivel de comprensi&oacute;n";
String etiqueta3 = "Nivel de conversaci&oacute;n";
String etiqueta4 = "Nivel escrito";
String etiqueta5 = "Enviar";
String etiqueta6 = "Petici&oacute;n pendiente";
String etiqueta7 = "Eliminar la petici&oacute;n";
%>
<title><%=titulo%></title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<script type="text/javascript">
function comprobar(){
var error = 0;
var idlanguage = "";
var mensaje = "Se han encontrado los siguientes errores. Debe corregirlos para enviar su petición:\n";
var mensaje_idioma = "\n     El idioma es obligatorio.";
var texto = mensaje;
idlanguage = m4select(m4objeto("STD_ID_LANGUAGE","NombreFormulario"),"value")
if (idlanguage == null || idlanguage == ""){
	texto = texto + mensaje_idioma;
	error = 1;
	}
if (error == 1){
	alert(texto);
	return;
}else {
	m4submit("NombreFormulario");
	}
}
function borrar(reg){
	m4valor("Formulario","REC",reg,"set");
	m4submit("Formulario");
}
</script>
<%     
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado = zobjtabla.m4paramvalor("estado");
String zinicios = zobjtabla.m4paramvalor("zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_EMP_LANGUAGES";
   String zmeta4object = "SSE_EMP_LANGUAGES";
   String znodo = "SSE_EMP_LANGUAGES";
   String znodo2 = "M4T_LU_LANGUAGES";
   String znodo3 = "M4T_LU_LANG_LEVEL";
   
   String zventanas = "6";
   int zvuelta = 2;
   String zdireccion = "sse_g1/sse_g1_p3_mod2.jsp";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;

   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   
   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";

   // Metodo de carga del Meta4Object generico

   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
   String ztipocarga = "SSE";   


// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zSTDNLANGUAGE = zcomun + "STD_N_LANGUAGE";
   String zSTDNLISTENLEVEL = zcomun + "STD_N_LISTEN_LEVEL";
   String zSTDNSPEAKLEVEL = zcomun + "STD_N_SPEAK_LEVEL";
   String zSTDNWRITELEVEL = zcomun + "STD_N_WRITE_LEVEL";
   String zORDINAL = zcomun + "ORDINAL";
   String zNACCION = zcomun + "N_ACCION";
   
   String zSTDIDLANGUAGE = zcomun2 + "STD_ID_LANGUAGE";
   String zSTDNLANGUAGE2 = zcomun2 + "STD_N_LANGUAGE";
   
   String zSTDIDLISTENLEVEL = zcomun3 + "STD_ID_LANG_LEVEL";
   String zSTDNLISTENLEVEL2 = zcomun3 + "STD_N_LANG_LEVEL";

   String zSTDIDSPEAKLEVEL = zcomun3 + "STD_ID_LANG_LEVEL";
   String zSTDNSPEAKLEVEL2 = zcomun3 + "STD_N_LANG_LEVEL";

   String zSTDIDWRITELEVEL = zcomun3 + "STD_ID_LANG_LEVEL";
   String zSTDNWRITELEVEL2 = zcomun3 + "STD_N_LANG_LEVEL";
   
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");

		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<%
	int  zcount  = 0;
	int  zcounti  = 0;	
	int  zcount2i  = 0;	
	int  zcount3i  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	    zcount2i = m.getCountInClient(znodo2,zsubsesion,znodo2);
	    zcount3i = m.getCountInClient(znodo3,zsubsesion,znodo3);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcount2v = String.valueOf(zcount2i);
	String	zcount3v = String.valueOf(zcount3i);
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=tfuncional%></td></tr>
<tr>
	<td><img alt="<%=tfuncional%>"title="<%=tfuncional%>" src="/iconos/noname_idiomas_ess_100_100.gif"  width="100" height="100"/></td>
	<td>
		<div class="descripcionfuncional"><%=dfuncional%></div>
		<ul class="listaenlace"><li><a class="enlacefuncional" title = "<%=efuncional%>" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11"><%=efuncional%></a></li></ul>
	</td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_EMP_LANGUAGES" />
<input type="hidden" id="REC" name="REC" value="" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_EMP_LANGUAGES" />
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo">
	<td>&nbsp;Idiomas</td>
	<td class="tablaestadosceldatitulo" align="right"><a title="Mis datos profesionales"href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11"><img alt="Mis datos profesionales" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
	<td class="fuentecampo">&nbsp;*&nbsp;<%=etiqueta%></td>
	<td class="fuentevalor">
	<select id="STD_ID_LANGUAGE" class="fuenteformulario" name="STD_ID_LANGUAGE" tabindex="1"title="Escoge el idioma">
	<option value=""></option>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcount2v).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSTDIDLANGUAGE%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNLANGUAGE2%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	</td>
</tr>
<tr>
	<td class="fuentecampo">&nbsp;<%=etiqueta2%></td>
	<td class="fuentevalor">
	<select id="STD_ID_LISTEN_LEVEL" class="fuenteformulario" name="STD_ID_LISTEN_LEVEL" title="Escoge el nivel de comprensi&oacute;n">
	<m4:loop from="0" to="<%=new Integer(new Integer(zcount3v).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSTDIDLISTENLEVEL%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNLISTENLEVEL2%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	</td>
</tr>
<tr>
	<td class="fuentecampo" >&nbsp;<%=etiqueta3%></td>
	<td class="fuentevalor">
	<select id="STD_ID_SPEAK_LEVEL" class="fuenteformulario" name="STD_ID_SPEAK_LEVEL" title="Escoge el nivel de conversaci&oacute;n">
	<m4:loop from="0" to="<%=new Integer(new Integer(zcount3v).intValue()-1).toString()%>">
			<m4:param name="m4item0" value="<%=zSTDNSPEAKLEVEL2%>"/>
			<m4:param name="m4item1" value="<%=zSTDIDSPEAKLEVEL%>"/>
			<option value="<m4:item m4name="<%=zSTDIDSPEAKLEVEL%>" htmlsafe="true"/>">
			<m4:item m4name="<%=zSTDNSPEAKLEVEL2%>" htmlsafe="true"/>
			</option>
	</m4:loop>
	</select>
	</td>
</tr>
<tr>
	<td class="fuentecampo">&nbsp;<%=etiqueta4%></td>
	<td class="fuentevalor">
	<select id="STD_ID_WRITE_LEVEL" class="fuenteformulario" name="STD_ID_WRITE_LEVEL" title="Escoge el nivel escrito">
	<m4:loop from="0" to="<%=new Integer(new Integer(zcount3v).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSTDIDWRITELEVEL%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNWRITELEVEL2%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	</td>
</tr>
<tr>
	<td colspan="2" class = "fuenteboton">&nbsp;
	<a title="<%=etiqueta5%>"href="javascript:comprobar()">
	<img alt="<%=etiqueta5%>" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  />
	</a>
	</td>
</tr>
</table>
</form>
<% if (zcounti > 0) {
String zregistroinicials = String.valueOf(zregistroinicial);
		String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
		String zposicions = "0";
		int zcontrol = 0;
		int zposicion =0;
%>
<form action="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod2.jsp?estado=11" method="post" name="oculto" id="oculto">
	<input type="hidden" id="zinicios" name="zinicios"  value="" />
</form>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="Formulario" id="Formulario">
	<input type="hidden" id="TAG" name="TAG" value="SSE_EMP_LANGUAGES" />
	<input type="hidden" id="ACC" name="ACC" value="BORRAR" />
	<input type="hidden" id="NOD" name="NOD" value="SSE_EMP_LANGUAGES" />
	<input type="hidden" id="REC" name="REC" />
</form>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo">
	<td>&nbsp;<%=etiqueta6%></td>
	<td>&nbsp;<%=etiqueta%></td>
	<td>&nbsp;<%=etiqueta2%></td>
	<td>&nbsp;<%=etiqueta3%></td>
	<td>&nbsp;<%=etiqueta4%></td>
	<td></td>	
</tr>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%
	zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
if (zcontrol==0){%>
<tr>
	<td class = "fuentecampoaccion">&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNLANGUAGE%>" htmlsafe="true"/></td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNLISTENLEVEL%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNSPEAKLEVEL%>" htmlsafe="true"/></td>
	<td class = "fuentevalor" >&nbsp;<m4:item m4name="<%=zSTDNWRITELEVEL%>" htmlsafe="true"/></td>
	<td class = "fuentevalor"><a title="<%=etiqueta7%>"href="javascript:borrar('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');"><img align="right" alt="<%=etiqueta7%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="12" width="11"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<%}else{%>
<tr>
	<td class = "fuentecampoaccion2">&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
	<td class = "fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDNLANGUAGE%>" htmlsafe="true"/></td>
	<td class = "fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDNLISTENLEVEL%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDNSPEAKLEVEL%>" htmlsafe="true"/></td>
	<td class = "fuentevalor2" >&nbsp;<m4:item m4name="<%=zSTDNWRITELEVEL%>" htmlsafe="true"/></td>
	<td class = "fuentevalor2"><a title="<%=etiqueta7%>"href="javascript:borrar('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');"><img align="right" alt="<%=etiqueta7%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="12" width="11"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<%}%>
</m4:loop>
</table>
<%@include file="../../sse_generico/espanol/generico_ventanas_post.jsp"%>
<%}%>	
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
<script type="text/javascript">	m4focus("NombreFormulario","STD_ID_LANGUAGE");</script>


