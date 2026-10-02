<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
<title>Selection List</title>
	<!-- General Style Sheet. Required-->
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<!-- JavaScript libraries. Required-->
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<script type="text/javascript" src="/libreria/menu.js"></script>	
	<!-- Java libraries. Required-->
	<%@ import="com.meta4.session.*, com.meta4.m4operations.*" %>

	<!-- Parameter retrieval. -->
	<!-- status:	Determine the location bar. -->
<%      M4SessionManager  session    = M4Context.getSession(trequest);
		String estado     = trequest.getParameter ("estado");
		String zsubsesion = tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"subsesion");
		String zmeta4object = tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"idm4o");
		String znodo = tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo");
		String znfilas = tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"nfilas");
		String zitemvalor = tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"itemvalor");
		String zitemid = tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"itemid");
		String ztitulo = tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"titulo");
		if ((estado==null)||(estado.equals(""))){
			estado="0";
		}
		
		zsubsesion = "SSE_PLANTILLA";
		zmeta4object = "SSE_PLANTILLA";
		znodo = "SSE_LISTA_GENERICO";
		znfilas = "50";
		zitemvalor = "STD_N_COUNTRY";
		zitemid = "STD_ID_COUNTRY";
		ztitulo = "EJEMPLO";
		String ztipocarga = "ALL";
%>
</head>
<body>
<!-- **************************************************************************-->
<!-- Meta4Object load. The name of the Task should be the same as the name of the Meta4Object that is loaded; or the primary one, if more than one is loaded. Insert the class imports before anything else -->
<!-- Meta4Object definition -->
<%
// Normally not modified.

	String zoutputdef = zsubsesion + "!" + znodo + "[*]";	
	String zraiz = zsubsesion + "!" + znodo + ".";
	znodo = zmeta4object + "!" + znodo;	

// Generic Meta4Object load method

   String zmetodo = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
   
// Items to be loaded. You must add all of the ones that you want to view.

	zitemvalor = zraiz + zitemvalor;
	zitemid = zraiz + zitemid;
%>
<!-- **************************************************************************-->
<!-- Security -->
<startpage m4task="<%=zsubsesion%>"></startpage>
<!-- Start Transaction -->
<beginjob></beginjob>
<datataglet m4name="<%=zsubsesion%>" m4o="<%=zmeta4object%>"></datataglet>
<exec m4method="<%=zmetodo%>" m4:CARGA="<%=ztipocarga%>"></exec>		
<outputdef m4name0="<%=zoutputdef%>"></outputdef>
<endjob></endjob>
<!-- End Transaction. Starting here you interact with the records. -->
<!-- **************************************************************************-->
<div id="capa_cuerpo" style="position:relative; left:20%; top:22%; width:80%; height:0%; z-index:2">
	<table>
	<form id="lista" onsubmit="m4seleccionlista();">
	<tr>
		<!-- Functional Page Title -->
		<td align="center">
			<img src="/iconos/noname_listado_63_80.gif" width="63" height="80" />		
		</td>
		<td class="titulofuncional" colspan="2" align="center">
			<%= ztitulo %>
		</td>
	</tr>
	<tr>
		<td align="center" colspan="2">
			&nbsp;&nbsp;<input type="text" name="filtro" id="filtro" size="20" onkeyup="m4listafiltrado()" />
		</td>
	</tr>
	<tr>
		<td align="center" colspan="2">
			<select id="itemlist" size="10" ondblclick="m4listaseleccion()" />
			<ITERATOR
				M4ROWS="<%=znfilas%>"
				M4ITEM0="<%=zitemvalor%>"
				M4ITEM1="<%=zitemid%>"
				M4COUNT0="<%=znodo%>"
				M4CURRENT0="<%=znodo%>">
			<option value="$M4ITEM1$">&nbsp;$M4ITEM0$</option>
			</ITERATOR>
			</select>	
		</td>
	</tr>
	<tr>
		<td align="center" colspan="2">
			<img alt="OK" src="/iconos/english/boton_aceptar_85_20.gif" HEIGHT="20" WIDTH="85" />
		</td>
	</tr>
	</form>
	</table>
</div>
<ENDPAGE></ENDPAGE>
</body>
</html>
