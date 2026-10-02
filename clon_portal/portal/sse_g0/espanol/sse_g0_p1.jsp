<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Mis contactos</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<%     
    String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
  if ((estado==null)||(estado.equals(""))){
    estado="0";
  }
  if ((zinicios==null)||(zinicios.equals(""))){
     zinicios = "1";
  }
%>
</head>
<body>
<%@include file="../../sse_generico/espanol/generico_menusup.jsp"%>
<%@include file="../../sse_generico/espanol/generico_links.jsp"%>
<%

   String zsubsesion = "SSE_INVENTARIO";
   String zmeta4object = "SSE_INVENTARIO";
   String zmetodocarga = zsubsesion + "!SSE_INVENTARIO.CARGA";
   String znodo = "SSE_INVENTARIO_FAVORITOS";
   String znodo2 = "SSE_INVENTARIO";   
   String ztipocarga = "FAV";

// Se parametriza el tamano que se desea para la ventana

   String zventanas = "20";
   int zvuelta = 5;
   String zdireccion = "sse_g0/sse_g0_p1.jsp";
   String zestado = "01";   

// No se modifica en general.

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   String zSTDEMAIL = zcomun + "STD_EMAIL";
   String zSTDNFAMNAME1 = zcomun + "STD_N_FAM_NAME_1";
   String zSTDNFIRSTNAME = zcomun + "STD_N_FIRST_NAME";
   String zSTDNWORKUNIT = zcomun + "STD_N_WORK_UNIT";
   String zSTDGBPHONE = zcomun + "STD_GB_PHONE";
   String zORDINAL = zcomun + "ORDINAL";
   String zSTDIDPERSON = zcomun + "STD_ID_PERSON";   
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<%
try {
  M4Operations m = new M4Operations(request);
  m.setItem(zsubsesion,znodo2,"","ID_HR",zIdPerson);
} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/><m4:param name="ARG_PATH_TEMP" value=""/></m4:exec>  
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
    int  zcount  = 0;
    int  zcounti  = 0;  
    try {
      M4Operations m = new M4Operations(request);
      zcount = m.getCount(znodo,zsubsesion,znodo);
    } catch(Exception e) {}
    try {
      M4Operations m = new M4Operations(request);
      zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    } catch(Exception e) {}
    String  zcountv = String.valueOf(zcounti);
    
%>
<table width="100%">
<tr>
  <td class="titulofuncional" colspan="2">Mis contactos</td>
</tr>
<tr>
  <td><div class="descripcionfuncional">En esta pantalla tienes los datos personales de las personas que quieres mantener en tu agenda.</div></td>
</tr>
</table>
<% 
if (zcount > 0) {
  String zregistroinicials = String.valueOf(zregistroinicial);
  String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
  String zposicions = "0";
  int zcontrol = 0;
  int zposicion =0;
%>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
  <td colspan="2">&nbsp;Nombre</td>
  <td>&nbsp;E-Mail</td>
  <td>&nbsp;Tel&eacute;fono</td>
  <td colspan="2">&nbsp;Departamento</td>
</tr>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%zposicions = m4lix;
  zposicion = Integer.valueOf(zposicions).intValue();
  zcontrol = zposicion%2;
if (zcontrol==0){%>
<tr class="fuentevalor">
  <td colspan="2">&nbsp;<m4:item m4name="<%=zSTDNFAMNAME1%>" htmlsafe="true"/>,&nbsp;<m4:item m4name="<%=zSTDNFIRSTNAME%>" htmlsafe="true"/></td>
  <td><a href="mailto:<m4:item m4name="<%=zSTDEMAIL%>" htmlsafe="true"/>" title="Enviar un E-mail">&nbsp;<m4:item m4name="<%=zSTDEMAIL%>" htmlsafe="true"/></a></td>
  <td>&nbsp;<m4:item m4name="<%=zSTDGBPHONE%>" htmlsafe="true"/></td>
  <td>&nbsp;<m4:item m4name="<%=zSTDNWORKUNIT%>" htmlsafe="true"/></td>
  <td><a href="javascript:var parametros = new Array('REC'); var valores = new Array('<m4:item m4name="<%=zSTDIDPERSON%>" jsafe="true" htmlsafe="true"/>'); var URL = 'sse_g0/sse_g0_actualizar_g0_p1.jsp'; m4navegar(URL,parametros,valores);"><img align="right" alt="Eliminar la petici&oacute;n"  src="/iconos/icono_borrar_16_16.gif" height="16" width="16" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<%}else{%>
<tr class="fuentevalor2">
  <td colspan="2">&nbsp;<m4:item m4name="<%=zSTDNFAMNAME1%>" htmlsafe="true"/>,&nbsp;<m4:item m4name="<%=zSTDNFIRSTNAME%>" htmlsafe="true"/></td>
  <td><a href="mailto:<m4:item m4name="<%=zSTDEMAIL%>" htmlsafe="true"/>" title="Enviar un E-mail">&nbsp;<m4:item m4name="<%=zSTDEMAIL%>" htmlsafe="true"/></a></td>
  <td>&nbsp;<m4:item m4name="<%=zSTDGBPHONE%>" htmlsafe="true"/></td>
  <td>&nbsp;<m4:item m4name="<%=zSTDNWORKUNIT%>" htmlsafe="true"/></td>
  <td><a href="javascript:var parametros = new Array('REC'); var valores = new Array('<m4:item m4name="<%=zSTDIDPERSON%>" jsafe="true" htmlsafe="true"/>'); var URL = 'sse_g0/sse_g0_actualizar_g0_p1.jsp'; m4navegar(URL,parametros,valores);"><img align="right" alt="Eliminar la petici&oacute;n"  src="/iconos/icono_borrar_16_16.gif" height="16" width="16" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr><%}%>
</m4:loop>
</table>
<%@include file="../../sse_generico/espanol/generico_ventanas.jsp"%>
<%}else{%>
<div class="fuentenodatos">Actualmente no tienes ning&uacute;n contacto.</div>
<%}%>
<%@include file="../../sse_generico/espanol/generico_disclaimer.jsp"%>
</div>
</body>
<m4:endpage/>


