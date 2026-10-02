<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Tel&eacute;fono</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<%@ include file="../../sse_g1/sse_g1_trans.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<script type="text/javascript">
oalfanum = new m4objvalidacion('_alfanum','1','11','El numero de telefono no puede ser nulo',false);		
function comprobar(){
var error = 0;
var texto = "Se han encontrado los siguientes errores. Debe corregirlos para enviar su petición:\n";
oalfanum.m4validar(m4objeto("STD_PHONE","NombreFormulario"))
if (oalfanum.resultado == false){
	texto = texto + "\n     El Telefono es obligatorio.";
	error = 1;
	}
if (error == 1){
	alert(texto);
	return;}
else {
	m4submit("NombreFormulario") ;
}
}
function pendientes(ord){
var parametros = new Array("TAG","REC","ACC","NOD");
var valores = new Array("SSE_PHONE_FAX",ord,"BORRAR","M4T_PHONE_FAX");
m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
}
</script>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	
<%
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
	if ((estado==null)||(estado.equals(""))){estado="0";}
	if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_PHONE_FAX";
   String zmeta4object = "SSE_PHONE_FAX";
   //String znodo = "SSE_PHONE_FAX";
   String znodo = "M4T_PHONE_FAX";
   String znodo2 = "M4T_LU_LOCATION_TYPE";
   String znodo3 = "M4T_LU_LINE_TYPE";
   //String ztipocarga = "SSE";
   //String ztipocarga = "ALL";
   String ztipocarga = "M4T";
   
   String zventanas = "10";
   int zvuelta = 5;
   String zdireccion = "sse_g1/sse_g1_p1_mod3.jsp";
   String zestado = "11";

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   
   //String zORDINAL = zcomun + "ORDINAL";
   String zORDINAL = zcomun + "STD_OR_PHONE";

   String zSTDPHONE = zcomun + "STD_PHONE";
   String zSTDNLINETYPE = zcomun + "STD_N_LINE_TYPE";
   String zSTDNLOCATIONTYPE = zcomun + "STD_N_LOCATION_TYPE";
   String zSTDINTCOUNTRYCODE = zcomun + "STD_INT_COUNTRY_CODE";
   String zSTDINTREGIONCODE = zcomun + "STD_INT_REGION_CODE";
   String zSTDNATREGIONCODE = zcomun + "STD_NAT_REGION_CODE"; 
   
   String zNACCION = zcomun + "N_ACCION";
   
   String zoutputdef2 = zsubsesion + "!" + znodo2 +"[*]";
   String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   String zSTDNLOCATIONTYPE2 = zcomun2 + "STD_N_LOCATION_TYPE";
   String zSTDIDLOCATIONTYPE2 = zcomun2 + "STD_ID_LOCATION_TYPE";
   
   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";  
   String zmove3 = znodo3 + ":" +znodo3 + "[FIRST]";
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
   String zSTDNLINETYPE3 = zcomun3 + "STD_N_LINE_TYPE";
   String zSTDIDLINETYPE3 = zcomun3 + "STD_ID_LINE_TYPE";
   
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV";
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
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>"  value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>"  value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>"  value="<%=zmove3%>"/></m4:move>
<%
	int  zcount  = 0;
	int  zcounti  = 0;
	int  zcount2  = 0;
	int  zcount3  = 0;
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
	    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcountv2 = String.valueOf(zcount2);
	String	zcountv3 = String.valueOf(zcount3);
	
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2">Tel&eacute;fono</td></tr>
<tr>
	<td><img alt="Teléfono" title="Teléfono"src="/iconos/noname_telefono_ess_107_100.gif" width="107" height="100" /></td>
	<td>
	<div class="descripcionfuncional">Da de alta o modifica tus tel&eacute;fonos.</div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" title="Mis datos personales" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11">Mis datos personales</a></li>
	</ul>
	</td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario" onsubmit="javascript:comprobar();">
<input type="hidden" id="TAG" name="TAG" value="SSE_PHONE_FAX" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_PHONE_FAX" />
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr class = "tablaestadosceldatitulo">
	<td colspan="3">N&uacute;mero de tel&eacute;fono</td>
	<td class="tablamenuright">
	<a title="Mis datos personales"href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11">
	<img alt="Mis datos personales" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	</a>
	</td>			
</tr>
<tr>
	<td class="fuentecampo" colspan="2">*&nbsp;Tel&eacute;fono&nbsp;
	<input class="fuenteformulario" type="text" id="STD_PHONE" name="STD_PHONE" size="15" maxlength="11" title="Escribe tu n&uacute;mero de tel&eacute;fono"tabindex="4" />
	</td>
	<td class="fuentecampo" colspan="2">Tipo&nbsp;
	<select id="STD_ID_LINE_TYPE" class="fuenteformulario150" name="STD_ID_LINE_TYPE" title="Selecciona el tipo de l&iacute;nea" tabindex="5">

	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSTDIDLINETYPE3%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNLINETYPE3%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	</td>	
		<script type="text/javascript" language="Javascript1.5"><!--
	 m4searchoptioness("NombreFormulario","STD_ID_LINE_TYPE","001");


--></script>
	
	<input type="hidden" name="STD_ID_LOCATION_TYPE" value="1"> 
</tr>
		<script type="text/javascript" language="Javascript1.5"><!--
	 //m4searchoptioness("NombreFormulario","STD_ID_LOCATION_TYPE","1");


--></script>
<tr>
	<td class="fuenteboton" colspan="4">	&nbsp;
	<a title="Enviar"href="javascript:comprobar();" tabindex="7"><img alt="Enviar"border="0" src="/iconos/icono_enviar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
	</td>
</tr>
</table>
</form>
<% 
if (zcount > 0) {
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
%>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;</td>
	<!--td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSTDINTCOUNTRYCODE%>"/></td>
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSTDINTREGIONCODE%>"/></td>
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSTDNATREGIONCODE%>"/></td-->
	<td class="tablaestadosceldatitulo">&nbsp;Tel&eacute;fono</td>
	<td class="tablaestadosceldatitulo">&nbsp;Tipo de l&iacute;nea</td>
	<td class="tablaestadosceldatitulo" colspan="2">&nbsp;Lugar</td>
	
</tr>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
if (zcontrol==0){%>
<tr>
	<td class="fuentecampoaccion">&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
	<!--td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDINTCOUNTRYCODE%>" htmlsafe="true"/></td>		
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDINTREGIONCODE%>" htmlsafe="true"/></td>		
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNATREGIONCODE%>" htmlsafe="true"/></td-->	
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDPHONE%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNLINETYPE%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNLOCATIONTYPE%>" htmlsafe="true"/></td>

	<% //if(zORDINAL.isEmpty()){ %>

	<td class="fuentebotonright">
	<a title="Eliminar la petici&oacute;n"href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');">
	<img class="tablamenuright" alt="Eliminar la petici&oacute;n"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)"  />
	</a>
	</td>

	<% //} %>

</tr>
<%}else{%>
<tr>
	<td class="fuentecampoaccion2">&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
	<!--td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSTDINTCOUNTRYCODE%>" htmlsafe="true"/></td>		
	<td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSTDINTREGIONCODE%>" htmlsafe="true"/></td>		
	<td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSTDNATREGIONCODE%>" htmlsafe="true"/></td-->	
	<td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSTDPHONE%>" htmlsafe="true"/></td>
	<td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSTDNLINETYPE%>" htmlsafe="true"/></td>
	<td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSTDNLOCATIONTYPE%>" htmlsafe="true"/></td>

	<% //if(zORDINAL.isEmpty()){ %>

	<td class="fuentebotonright2">
	<a title="Eliminar la petici&oacute;n"href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');">
	<img class="tablamenuright" alt="Eliminar la petici&oacute;n"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)"  />
	</a>
	</td>

	<% //} %>
	
</tr>
 <%}%>
</m4:loop>
</table>
<%@include file="../../sse_generico/espanol/generico_ventanas.jsp"%>
<%}%>	
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
<script type="text/javascript">	//m4focus("NombreFormulario","STD_INT_COUNTRY_CODE");</script>
<m4:endpage/>
</body>
</html>


