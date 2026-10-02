<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
 <!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<title>Inscripci&oacute;n en cursos</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<script type="text/javascript">
function borrar(reg){
m4valor("Formulario","REC",reg,"set");
m4submit("Formulario");}

function verdesc(id,zdescription){
m4valor("Formulario2","zidtrtb",id,"set");
m4valor("Formulario2","zdescription",zdescription,"set");																		
m4submit("Formulario2");}

function verdesc2(id){
m4valor("Formulario3","zidtrtb",id,"set");
m4submit("Formulario3");}
</script>
<%      
String estado =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
String zproducto = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto");
String znmproducto = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto");

if ((estado==null)||(estado.equals(""))){
	estado = "0";}
if ((zinicios==null)||(zinicios.equals(""))){
	zinicios = "1";	}			
if ((zproducto==null)||(zproducto.equals(""))){
	zproducto = "All";znmproducto = "todos los productos";}			
%>
</head>
<body>
<%@ include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_menusup.jsp" %>
<%@ include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_links.jsp" %>
<%
String zsubsesion = "CSP_SSE_TRAINING_REQUEST";
String zMeta4Object = "CSP_SSE_TRAINING_REQUEST";  
String znodo = "SSE_TRAINING_REQUEST";
String znodo1 = "M4T_SOLICITUDES_ACEPTADAS";
String znodo2 = "M4T_ENROLLMENT_REQUEST";
String ztipocarga = "SSE";
String zventanas = "50";
int zregistroinicial = Integer.valueOf(zinicios).intValue();
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;
String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
String zmove = znodo + "[" + zregistroinicial + "]";
String zlectura = zsubsesion + "!" + znodo;  
String zraiz = zsubsesion + "!" + znodo + ".";
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zoutputdef1 = zsubsesion + "!" + znodo1 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
String zmove1 = znodo1 + "[" + zregistroinicial + "]";
String zlectura1 = zsubsesion + "!" + znodo1;  
String zraiz1 = zsubsesion + "!" + znodo1 + ".";
String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
String zoutputdef2 = zsubsesion + "!" + znodo2 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
String zmove2 = znodo2 + "[" + zregistroinicial + "]";
String zlectura2 = zsubsesion + "!" + znodo2;  
String zraiz2 = zsubsesion + "!" + znodo2 + ".";
String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
String zidtrtb = zcomun + "SCO_ID_TRTBREQ";
String zestado = zcomun + "ID_ESTADO_REG";
String ztipo = zcomun + "SCO_ID_TYPE";
String zSCO_NM_DEV_PRO_TYPE = zcomun + "SCO_NM_DEV_PRO_TYPE";
String zSCO_NM_DEV_SUBPRODUCT0 = zcomun + "SCO_NM_DEV_SUBPRODUCT";
String zordinal = zcomun + "ORDINAL";
String znombre = zcomun + "SCO_NM_TRAINING";
String zdescription = "";
String zSCO_DESCRIPTION = zcomun + "SCO_DESCRIPTION";

String zidtrtb1 = zcomun1 + "SCO_ID_TRTBREQ";
String zSCO_ID_TYPE = zcomun1 + "SCO_ID_TYPE";
String zSCO_NM_DEV_SUBACTION1 = zcomun1 + "SCO_NM_DEV_SUBACTION";
String zSCO_NM_DEV_SUBPRODUCT1 = zcomun1 + "SCO_NM_DEV_SUBPRODUCT";
String zSCO_NM_DEV_PRO_TYPE1 = zcomun1 + "SCO_NM_DEV_PRO_TYPE";
String zSCO_DESCRIPTION1 = zcomun1 + "SCO_DESCRIPTION";

String zidtrtb2 = zcomun2 + "SCO_ID_TRTBREQ";
String zSCO_NM_DEV_SUBACTION = zcomun2 + "SCO_NM_DEV_SUBACTION";
String zSCO_NM_DEV_ACT_TYPE = zcomun2 + "SCO_NM_DEV_ACT_TYPE";
//M4GONZALO: Cambiamos las fechas para que el inicio y fin no se coja del calendario, sino de la sesión.
String zinicio = zcomun2 + "DT_START";
String zfin = zcomun2 + "DT_END";
//


String zptipo = zcomun2 + "SCO_NM_PRODUCT_TYPE";
String zSCO_NM_DEV_SUBPRODUCT = zcomun2 + "SCO_NM_DEV_SUBPRODUCT";
String zpos="";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zMeta4Object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    
	    m.setItem(zsubsesion,zsubsesion,"","NIVEL","0");

	      
		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>

<%
	int  zcount  = 0;	int  zcounti  = 0;	
	int  zcount1  = 0;	int  zcount1i  = 0;	
	int  zcount2  = 0;	int  zcount2i  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	    zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
	    zcount1i = m.getCountInClient(znodo1,zsubsesion,znodo1);
	    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
	    zcount2i = m.getCountInClient(znodo2,zsubsesion,znodo2);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcount1v = String.valueOf(zcount1i);
	String	zcount2v = String.valueOf(zcount2i);
	int zcounttot = zcount + zcount1 + zcount2;
%>
<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2">Inscripci&oacute;n en cursos</td></tr>
<tr>
	<td><img src="/iconos/noname_incripciones_formacion_99_100.gif" width="99" height="100" alt="Inscripci&oacute;n de cursos"></td>
	<td><div class="descripcionfuncional">Consulta las solicitudes de formaci&oacute;n pendientes de ser aprobadas y las ya aceptadas.</div><ul class="listaenlace"><li><a class="enlacefuncional" title="Cat&aacute;logo de formaci&oacute;n" tabindex="1" href="sse_g3_p3.jsp?estado=31">Cat&aacute;logo de formaci&oacute;n</a></li></ul></td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc3.jsp?estado=31" method="post" name="Formulario2" id="Formulario2">
<input type="hidden" id="zidtrtb" name="zidtrtb"  />
<input type="hidden" id="zdescription" name="zdescription"/>
</form>	
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc2.jsp?estado=31" method="post" name="Formulario3" id="Formulario3">
<input type="hidden" id="zidtrtb" name="zidtrtb"  />
</form>
<% if (zcount > 0) {%>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="Formulario" id="Formulario">
<input type="hidden" id="TAG" name="TAG" value="CSP_SSE_TRAINING_REQUEST" />
<input type="hidden" id="ACC" name="ACC" value="BORRAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_TRAINING_REQUEST" />
<input type="hidden" id="REC" name="REC" />
<div class="descripcionfuncional">&nbsp;Solicitudes pendientes</div>
<table class="TablaEstados" cellspacing="0" width="100%">
<tr><td class="tablaestadosceldatitulo" >&nbsp;Curso</td><td class="tablaestadosceldatitulo" >&nbsp;Tipo</td><td class="tablaestadosceldatitulo" colspan="2">&nbsp;Programado</td>
</tr>
<%
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;
%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}
%>
<m4:item m4varname="ztipoaux" m4name="<%=ztipo%>"/>
<tr>

<!--<td class="fuentevalor<%=zpos%>">&nbsp;<a href="javascript:verdesc('<m4:item m4name="<%=zidtrtb%>" jsafe="true" htmlsafe="true"/>');" title="Detalle del curso"><m4:item m4name="<%=zSCO_NM_DEV_SUBPRODUCT0%>" htmlsafe="true"/></a></td>-->

<% 
	String zid = "";
	String zd = "";
	try {
		M4Operations m1 = new M4Operations(request);
		zid = m1.getItem(znodo,zsubsesion,znodo,"","SCO_ID_DEV_PRODUCT");
		zd = m1.getItem(znodo,zsubsesion,znodo,"","SCO_DESCRIPTION");			     
		}catch(Exception e){}
	
	if  (zid.equals("99")) {zdescription = zd;}
	else {zdescription = "";}
%>

<td class="fuentevalor<%=zpos%>">&nbsp;<a href="javascript:verdesc('<m4:item m4name="<%=zidtrtb%>" jsafe="true" htmlsafe="true"/>','<%=zdescription%>');" title="Detalle del curso"><m4:item m4name="<%=zSCO_NM_DEV_SUBPRODUCT0%>" htmlsafe="true"/></a></td>


    <td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_PRO_TYPE%>" htmlsafe="true"/></td>
<%if (ztipoaux.equals("11")){%>
  <td class="fuentevalor<%=zpos%>">&nbsp;No</td>
<%}else{%>
  <td class="fuentevalor<%=zpos%>">&nbsp;Si&nbsp;(&nbsp;<a href="javascript:verdesc2('<m4:item m4name="<%=zidtrtb%>" jsafe="true" htmlsafe="true"/>');" title="Detalle del curso"><m4:item m4name="<%=znombre%>" htmlsafe="true"/></a>&nbsp;)&nbsp;</td>
  
 <%}%>
	<td class="fuentebotonright<%=zpos%>"><a title="Eliminar la petici&oacute;n" href="javascript:borrar('<m4:item m4name="<%=zordinal%>" jsafe="true" htmlsafe="true"/>');"><img src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</m4:loop>
</table>
</form>
<%}if (zcount1 > 0) {%>
<div class="descripcionfuncional">&nbsp;Solicitudes aceptadas</div>
<table class="TablaEstados" cellspacing="0" width="100%">
<tr>
<td class="tablaestadosceldatitulo" >&nbsp;Curso</td>
<td class="tablaestadosceldatitulo" >&nbsp;Tipo</td>
<td class="tablaestadosceldatitulo" >&nbsp;Programado</td>
</tr>
<%
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcount1v).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%>
<m4:item m4varname="zType" m4name="<%=zSCO_ID_TYPE%>"/>
<tr>
<!-- <td class="fuentevalor<%=zpos%>">&nbsp;<a href="javascript:verdesc('<m4:item m4name="<%=zidtrtb1%>" jsafe="true" htmlsafe="true"/>');" title="Detalle del curso"><m4:item m4name="<%=zSCO_NM_DEV_SUBPRODUCT1%>" htmlsafe="true"/></a></td>-->

 <% 
	String zid1 = "";
	String zd1 = "";
	try {
		M4Operations m2 = new M4Operations(request);
		zid1 = m2.getItem(znodo1,zsubsesion,znodo1,"","SCO_ID_DEV_PRODUCT");
		zd1 = m2.getItem(znodo1,zsubsesion,znodo1,"","SCO_DESCRIPTION");		     
		}catch(Exception e){}
	
	if  (zid1.equals("99")) {zdescription = zd1;}
	else {zdescription = "";}
%>

 <td class="fuentevalor<%=zpos%>">&nbsp;<a href="javascript:verdesc('<m4:item m4name="<%=zidtrtb1%>" jsafe="true" htmlsafe="true"/>','<%=zdescription%>');" title="Detalle del curso"><m4:item m4name="<%=zSCO_NM_DEV_SUBPRODUCT1%>" htmlsafe="true"/></a></td>

 <td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_PRO_TYPE1%>" htmlsafe="true"/></td> 


<%if (zType.equals("11")){%>
  <td class="fuentevalor<%=zpos%>">&nbsp;No</td>
<%}else{%>
  <td class="fuentevalor<%=zpos%>">&nbsp;Si&nbsp;(&nbsp;<a href="javascript:verdesc2('<m4:item m4name="<%=zidtrtb1%>" jsafe="true" htmlsafe="true"/>');" title="Detalle del curso"><m4:item m4name="<%=zSCO_NM_DEV_SUBACTION1%>" htmlsafe="true"/></a>&nbsp;)&nbsp;</td>
<%}%>
</tr>
</m4:loop>
</table>
<%}if (zcount2 > 0) {
%>
<br />
<div class="descripcionfuncional">&nbsp;Inscripciones</div>
<table class="TablaEstados" cellspacing="0" width="100%">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Curso</td>
	<td class="tablaestadosceldatitulo">&nbsp;Tipo</td>
	<td class="tablaestadosceldatitulo">&nbsp;Sesión</td>
	<td class="tablaestadosceldatitulo">&nbsp;Inicio</td>
	<td class="tablaestadosceldatitulo">&nbsp;Fin</td>
</tr>
<%
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcount2v).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%>

 <tr>

	<td class="fuentevalor<%=zpos%>">&nbsp;<a href="javascript:verdesc('<m4:item m4name="<%=zidtrtb2%>" jsafe="true" htmlsafe="true"/>');" title="Detalle del curso"><m4:item m4name="<%=zSCO_NM_DEV_SUBPRODUCT%>" htmlsafe="true"/></a></td>
	<td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_ACT_TYPE%>" htmlsafe="true"/></td>
	<td class="fuentevalor<%=zpos%>">&nbsp;<a href="javascript:verdesc2('<m4:item m4name="<%=zidtrtb2%>" jsafe="true" htmlsafe="true"/>');" title="Detalle del curso"><m4:item m4name="<%=zSCO_NM_DEV_SUBACTION%>" htmlsafe="true"/></a></td>
	<td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zinicio%>" htmlsafe="true"/></td>
	<td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zfin%>" htmlsafe="true"/></td>
</tr>

</m4:loop>
</table>
<%}if (zcounttot == 0) {%>
<div class="fuentenodatos">No est&aacute;s inscrito en ninguna formaci&oacute;n.</div>
<%}%>
<%@ include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>


