<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>

<title>Absences</title><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/francais/generico_menu_desplegable.jsp" %>
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
<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_REAL_TIME";
   String zmeta4object = "SSE_REAL_TIME";
   String zmetodocarga = zsubsesion + "!SSE_REAL_TIME.CARGA";
   String znodo = "SSE_REAL_TIME";

   String zventanas = "20";
   int zvuelta = 5;
   String zdireccion = "sse_g4/sse_g4_p1.jsp";
   String zestado = "41";

	// No se modifica en general.--->

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;

   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
   String ztipocarga = "SSE";   

// Items que vamos a cargar --->
  
	String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
	String zFSCONMINCIDENCE = zcomun + "SCO_NM_INCIDENCE";
	String zDTSTART = zcomun + "DT_START";
	String zSCONMTIMEUNIT = zcomun + "SCO_NM_TIME_UNIT";
	String zSCOUNITS = zcomun + "SCO_UNITS";

%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"/>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
		int  zcount  = 0;
		int  zcounti  = 0;	
		try {
			M4Operations m = new M4Operations(request);
			zcount = m.getCount(znodo,zsubsesion,znodo);
			zcounti = m.getCountInClient(znodo,zsubsesion,znodo);			
		} catch(Exception e) {}
		String	zcountv = String.valueOf(zcounti);
		
%>
<table width="100%">
<tr>
	<td class="titulofuncional" colspan="2">Absences</td>
</tr>
<tr>
	<td><img alt="Absences" src="/iconos/noname_ausencias_52_100.gif" width="100" height="100" /></td>
	<td>
		<div class="descripcionfuncional">Consultez vos absences au cours de l'ann&eacute;e.</div>
		<ul class="listaenlace"><li><a class="enlacefuncional" title="Revenir &agrave; Votre temps de travail" tabindex="1" href="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4">Votre temps de travail</a></li></ul>
	</td>
</tr>
</table>
<% if (zcounti > 0) { %>
<table class="tablaestados" width="100%" cellspacing="0">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Type d'absence</td>
	<td class="tablaestadosceldatitulo">&nbsp;Date de d&eacute;but</td>
	<td class="tablaestadosceldatitulo">&nbsp;Dur&eacute;e</td>
</tr>
<%
	// Iteracion de una tabla
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
%>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
%>
<%if (zcontrol==0){%>
 <tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zFSCONMINCIDENCE%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zDTSTART%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCOUNITS%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSCONMTIMEUNIT%>" htmlsafe="true"/></td>
</tr>
<%}else{%>
<tr>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zFSCONMINCIDENCE%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zDTSTART%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCOUNITS%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSCONMTIMEUNIT%>" htmlsafe="true"/></td>
</tr>
<%}%>
</m4:loop>
</table>
<%@include file="../../sse_generico/francais/generico_ventanas.jsp"%>	
<%}else{%><div class="fuentenodatos">Vous n'avez aucune absence.</div><%}%>
<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
</div>
</body>


