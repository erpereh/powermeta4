<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
<title>Edit Favourites</title><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/english/menu_ess.jsp" %>	
<%  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
%>
</head>
<body>
<%@include file="../../sse_generico/english/generico_menusup.jsp"%>
<%@include file="../../sse_generico/english/generico_links.jsp"%>
<%
   String zsubsesion = "SSE_ENLACES";
   String zmeta4object = "SSE_ENLACES";
   String znodo = "SSE_ENLACES";

// Normally not modified.

   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zraiz = zsubsesion + "!" + znodo + ".";
   String zmove = znodo + ":" + znodo + "[FIRST]";   
   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;

// Generic Meta4Object load method

   String zMETODOCARGA = zsubsesion + "!SSE_ENLACES.CARGA";
   
// Items to be loaded. You must add all of the ones that you want to view.

   String zENLACE = "ENLACE";
   String zORDINAL = "ORDINAL";
   String zNENLACE = "N_ENLACE";

%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zMETODOCARGA%>"></m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
	<%
		int  zcounti  = 0;	
		try {
			M4Operations m = new M4Operations(request);
			zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		} catch(Exception e) {}
	%>
<table width="100%">
<tr>
	<td class="titulofuncional" colspan="2">Edit Favourites</td>
</tr>
<tr>
	<td><div class="descripcionfuncional">List of your favourite links. Delete the ones you do not use. Changes will be reflected the next time you visit.</div></td>
</tr>
</table>
<% 
if (zcounti > 0) {
%>		
<table width="100%" cellspacing="0">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Name</td>
	<td colspan="2" class="tablaestadosceldatitulo">&nbsp;URL</td>
</tr>
<m4:iterator m4rows="*" m4node="<%=ziterator%>">
<m4:param name="m4item0" value="<%=zNENLACE%>"/>
<m4:param name="m4item1" value="<%=zENLACE%>"/>
<m4:param name="m4item2" value="<%=zORDINAL%>"/>
<tr>
	<td class="fuentecampo">&nbsp;$M4ITEM0$</td>
	<td class="fuentevalor">&nbsp;$M4ITEM1$</td>
	<td class="fuentevalor"><a href="/servlet/CheckSecurity/JSP/sse_g0/sse_g0_eliminar_links.jsp?id_enl=$M4ITEM2$"><img align="right" alt="Delete Link" border="0" src="/iconos/icono_borrar_16_16.gif" height="16" width="16" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</m4:iterator>
</table>
<% } else { %>
<div class="fuentenodatos">You currently have no links.</div>
<%}%>		
<%@include file="../../sse_generico/english/generico_disclaimer.jsp"%>
</div>
<m4:endpage/>
</body>
