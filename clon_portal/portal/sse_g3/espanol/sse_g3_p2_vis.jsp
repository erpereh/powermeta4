<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<title>Peticiones de movilidad</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
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
<script type="text/javascript">
function pendientes(ord){
var parametros = new Array("TAG","REC","ACC","NOD");
var valores = new Array("SSE_INT_MOVILITY",ord,"BORRAR","SSE_INT_MOVILITY");
m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
}
</script>
<%
   String zsubsesion = "SSE_INT_MOVILITY";
   String zmeta4object = "SSE_INT_MOVILITY";
   String znodo = "SSE_INT_MOVILITY";
   String znodo2 = "M4T_INT_MOVILITY";
   
   String ztipocarga = "ALL";   
   String zventanas = "10";
   int zvuelta = 5;
   String zdireccion = "sse_g3/sse_g3_p2_vis.jsp";
   String zestado = "31";
   
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;

   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   String zSTDNJOBCODE=zcomun+"STD_N_JOB_CODE";
   String zSSESOLICDATE=zcomun+"SSE_SOLIC_DATE";
   String zORDINAL=zcomun+"ORDINAL";
   String zNACCION=zcomun+"N_ACCION";

   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
   String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2; 
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   String zSTDNJOBCODE2=zcomun2+"STD_N_JOB_CODE";
   String zSSESOLICDATE2=zcomun2+"SSE_SOLIC_DATE";
   
   String zmetodocarga = zsubsesion + "!SSE_PRINCIPAL.CARGA";			
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>" ><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<%
int  zcount  = 0;
int  zcounti  = 0;
int  zcount2  = 0;
int  zcounti2  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
    zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);
} catch(Exception e) {}
String	zcountv2 = String.valueOf(zcounti2);
%>
<table width="100%">
<tr><td class="titulofuncional" colspan="2">Peticiones de movilidad</td></tr>
<tr>
	<td><img alt="Movilidad interna" title="Movilidad interna"src="/iconos/noname_movilidad_interna_derecha_100_100.gif" width="100" height="100" /></td>
	<td>
	<div class="descripcionfuncional">Consulta tus peticiones de movilidad.</div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional"title="Movilidad interna"tabindex="1" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31">Movilidad interna</a></li>
	</ul>
	</td>
</tr>
</table>
<% 
if (zcount2 > 0) {
	String zposicions2 = "0";
	int zcontrol2 = 0;
	int zposicion2 =0;
%>
<table class="tablaestados" width="100%" cellspacing="0">
<tr><td colspan="4"><div class="descripcionfuncional"><br/>Peticiones aceptadas de movilidad interna ya incluidas o por incluir en un proceso de selecci&oacute;n. El Departamento de Selecci&oacute;n se pondr&aacute; en contacto contigo.<br/><br/></div></td></tr>
<tr class="tablaestadosceldatitulo">
	<td>&nbsp;Puesto</td>
	<td>&nbsp;Fecha de solicitud</td>
	<td colspan="2" align="right">
	<a title="Movilidad interna"href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31" >
	<img alt="Movilidad interna" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
<%zposicions2 = m4lix;
	zposicion2 = Integer.valueOf(zposicions2).intValue();
 	zcontrol2 = zposicion2%2;
%>
<%if (zcontrol2==0){%>
<tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNJOBCODE2%>" htmlsafe="true"/></td>
	<td class="fuentevalor"colspan="3">&nbsp;<m4:item m4name="<%=zSSESOLICDATE2%>" htmlsafe="true"/></td>
</tr> 
 <%}else{%>
<tr>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDNJOBCODE2%>" htmlsafe="true"/></td>
	<td class="fuentevalor2"colspan="3">&nbsp;<m4:item m4name="<%=zSSESOLICDATE2%>" htmlsafe="true"/></td>
</tr> 
 <%}%>
</m4:loop>
</table>
<%}if (zcount>0){
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
%>
<br />
<table class="tablaestados" width="100%" cellspacing="0" border="0">
<tr><td colspan="4"><div class="descripcionfuncional">&nbsp;Peticiones pendientes de movilidad interna.</div></td></tr>
<tr class="tablaestadosceldatitulo">
	<td>&nbsp;</td>
	<td>&nbsp;Puesto</td>
	<td>&nbsp;Fecha de solicitud</td>
	<td class="tablamenuright" >
	<a title="Movilidad interna"href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31" >
	<img alt="Movilidad interna" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
if (zcontrol==0){%>
<tr>
	<td class = "fuentecampoaccion">&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNJOBCODE%>" htmlsafe="true"/></td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSSESOLICDATE%>" htmlsafe="true"/></td>
	<td class="fuentebotonright">
	<a title="Eliminar la petici&oacute;n"href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');"><img alt="Eliminar la petici&oacute;n"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>
	</td>
</tr>	
 <%}else{%>
 <tr>
	<td class = "fuentecampoaccion2">&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
	<td class = "fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDNJOBCODE%>" htmlsafe="true"/></td>
	<td class = "fuentevalor2">&nbsp;<m4:item m4name="<%=zSSESOLICDATE%>" htmlsafe="true"/></td>
	<td class="fuentebotonright2">
	<a href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');"><img alt="Eliminar la petici&oacute;n"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>
	</td>
</tr>	
 <%}%>
</m4:loop>
</table>
<%@include file="../../sse_generico/espanol/generico_ventanas.jsp"%>
<%}if ((zcount == 0)&& (zcount2 == 0)){%>
 <div class="fuentenodatos">No hay ninguna movilidad pendiente.</div>
 <br/> <br/> <br/> <br/>
 <%
 }
 %>
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>


