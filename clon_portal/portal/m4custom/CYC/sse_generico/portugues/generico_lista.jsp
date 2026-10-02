<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
<title>Lista de selec&ccedil;&atilde;o</title>
	<!-- Hoja de Estilo general. Obligatorio-->
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<!-- Librerias JavaScript. Obligatorio-->
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<script type="text/javascript" src="/libreria/menu.js"></script>	
	<!-- Librerias Java. Obligatorio-->
	<%@ import="com.meta4.session.*, com.meta4.m4operations.*" %>

	<!-- Recuperacion de parametros. -->
	<!-- estado:	Determina la barra de localizacion. -->
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
<!-- Carga del Meta4Object. El nombre de la Tarea deberia ser el mismo nombre que el del meta4object que se carga...o si se carga mas de uno el del principal. Antes de nada se insertan las importacion de clases -->
<!-- Definicion del Meta4Object -->
<%
// No se modifica en general.

	String zoutputdef = zsubsesion + "!" + znodo + "[*]";	
	String zraiz = zsubsesion + "!" + znodo + ".";
	znodo = zmeta4object + "!" + znodo;	

// Metodo de carga del Meta4Object generico

   String zmetodo = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

	zitemvalor = zraiz + zitemvalor;
	zitemid = zraiz + zitemid;
%>
<!-- **************************************************************************-->
<!-- Seguridad -->
<startpage m4task="<%=zsubsesion%>"></startpage>
<!-- Comienza la transaccion -->
<beginjob></beginjob>
<datataglet m4name="<%=zsubsesion%>" m4o="<%=zmeta4object%>"></datataglet>
<exec m4method="<%=zmetodo%>" m4:CARGA="<%=ztipocarga%>"></exec>		
<outputdef m4name0="<%=zoutputdef%>"></outputdef>
<endjob></endjob>
<!-- Fin de la transaccion. A partir de aqui interactuamos con los registros. -->
<!-- **************************************************************************-->
<div id="capa_cuerpo" style="position:relative; left:20%; top:22%; width:80%; height:0%; z-index:2">
	<table>
	<form id="lista" onsubmit="m4seleccionlista();">
	<tr>
		<!-- Titulo funcional de la pagina -->
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
			<img alt="Aceitar" src="/iconos/portugues/boton_aceptar_85_20.gif" HEIGHT="20" WIDTH="85" />
		</td>
	</tr>
	</form>
	</table>
</div>
<ENDPAGE></ENDPAGE>
</body>
</html>
