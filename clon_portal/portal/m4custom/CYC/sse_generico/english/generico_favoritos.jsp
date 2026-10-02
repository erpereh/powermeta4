<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<!-- ESS Base Template -->
<head>
<title>Title</title>
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
		String zinicios = tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
	if ((zinicios==null)||(zinicios.equals(""))){
	   zinicios = "1";
	}
%>
</head>
<body>
<!-- Header -->
<div id="capa_menu" style="position:absolute; left:1%; top:1%; width:100%; height:20%; z-index:3">
	<!--#include file="generico_menusup.jsp"-->
</div>
<div id="capa_link" style="position:absolute; left:1%; top:26%; width:20%; height:0%; z-index:1">
    <!--#include file="generico_links.jsp"-->
</div>
<!-- **************************************************************************-->
<!-- Meta4Object load. The name of the Task should be the same as the name of the Meta4Object that is loaded; or the primary one, if more than one is loaded. Insert the class imports before anything else -->

<!-- Meta4Object definition -->
<%
   String zsubsesion = "SSE_ENLACES";
   String zMeta4Object = "SSE_ENLACES";
   String znodo = "SSE_ENLACES";

// Parametrise the desired window size.

   String zventanas = "20";

// Normally not modified.

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + "[" + zregistroinicial + "]";
   String zlectura = zsubsesion + "!" + znodo;
   String zraiz = zsubsesion + "!" + znodo + ".";

// Generic Meta4Object load method

   String zMETODOCARGA = "CARGA:" + zsubsesion + "!SSE_ENLACES.SSE_ENLACES_CARGA";
   
// Items to be loaded. You must add all of the ones that you want to view.

   String zENLACE = zraiz + "ENLACE";
   String zID_ENLACE = zraiz + "ID_ENLACE";
   String zN_ENLACE = zraiz + "N_ENLACE";
   String zID_HR = zraiz + "ID_HR";
   String zID_COMPANY = zraiz + "ID_COMPANY";
   
%>
<!-- **************************************************************************-->
<!-- Security -->
<startpage m4task="`zsubsesion`"></startpage>
<!-- Start Transaction -->
<beginjob></beginjob>
<datataglet m4name="`zsubsesion`" m4o="`zMeta4Object`"></datataglet>
<exec m4method="`zMETODOCARGA`"></exec>
<outputdef m4name0="`zoutputdef`"></outputdef>
<endjob></endjob>
<!-- End Transaction. Starting here you interact with the records. -->
<!-- Positioning with several windows. Modify the NODE. -->
<move m4:NODO="`zmove`"></move>
<!-- **************************************************************************-->
	<!-- Calculate the number of records. -->
	<!-- zcount:	Number of records in the Node. -->
	<!-- zcountv:	Number of records in the window. -->
<%
	int  zcount  = 0;
	int  zcounti  = 0;	
	try {
	    M4Operations m = new M4Operations(trequest);
	    zcount = m.getCount("",zsubsesion,znodo);
	} catch(Exception e) {}
	try {
	    M4Operations m = new M4Operations(trequest);
	    zcounti = m.getCountInClient("",zsubsesion,znodo);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
%>

<div id="capa_cuerpo" style="position:relative; left:20%; top:22%; width:80%; height:0%; z-index:2">

	<!-- Description table. Required. Always 3*2: a page title + an icon + a description + options -->
	<table border="1" width="100%">
	<tr>
		<!-- Functional Page Title -->
		<td class="titulofuncional" colspan="2">
			Title
		</td>
		<td>
			<!-- Back button. Required-->
			<a href="" onclick="history.back();">
				<img alt="Back" src="/iconos/noname_volver_52_44.gif" height="44" width="52" 
onmouseover="m4luz(this)" onmouseout="m4oscuridad(this)" />
			</a>
		</td>
	</tr>
	<tr>
		<td>
			<!-- When you insert the icon, do not forget to indicate its exact size. -->			
			<img alt="Name" src="/iconos/*.gif" width="20" height="60" />
		</td>
		<td>
			<!-- Description -->			
			<div class="descripcionfuncional">
				Functional description of the page.
			</div>
			<ul class="enlacefuncional">
				<li>
					<a style="CURSOR: hand" href="">Option1</a>
				</li>
			</ul>
		</td>
	</tr>
	</table>
	<!-- End Description Table. -->
	<!-- ********************************************************************* -->
	<!-- Start of the Data Table. -->	

	<table class = "tablaestados" width="100%" border="1">
	<tr class = "tablaestadosceldatitulo">
		<!-- The sum of the colspan of the title row must be equal to the sum of the largest cells in the data table. -->
		<td colspan = "4">
			Table Title
		</td>
<!--		<td align="center">
			<a href="">
				<img alt="Insert/Modify Records" src="/iconos/flecha_16_7.gif" height="7" width="16" />
			</a>
		</td>			-->
	</tr>
	<tr class = "tablaestadosceldatitulo">
		<td class = "fuentecampo">
			<!-- Add the field value. -->		
			Link Name
		</td>
		<td class = "fuentecampo">
			<!-- Add the field value. -->		
			Link
		</td>
		<td class = "fuentecampo">
			<!-- Add the field value. -->		
			Order
		</td>
		<td class = "fuentecampo">
			<!-- Add the field value. -->
		</td>
	</tr>
	<!-- Data table. Part that makes up a record. Within the iterator tag the values are represented between dollar signs: -->
	<iterator
	m4rows="`zcountv`"
	m4item0="`zN_ENLACE`"
	m4item1="`zENLACE`"
	m4item2="`zID_ENLACE`"
	m4count0="`zlectura`"
	m4current0="`zlectura`">
	<tr>
		<td class = "fuentevalor">
			<!-- Add the item value. -->
			$M4ITEM0$
		</td>
		<td class = "fuentevalor">
			<!-- Add the item value. -->
			$M4ITEM1$
		</td>
		<td class = "fuentevalor">
			<!-- Add the item value. -->
			$M4ITEM2$
		</td>
		<td>
			<A title ="Delete Course Request" STYLE="cursor:hand" href="javascript:var parametros = new Array ('_M4TAGLET','_REGISTRO','_NODOACCION','_NODO');var valores = new Array (SSE_NEC_FORMACION,$M4ITEM3$,BORRAR,SSE_NEC_FORMACION);var URL = '/servlet/CheckSecurity/JSP/generico_sse/actualizar.jsp';m4navegar(URL,parametros,valores);" > 
				<IMG ALIGN="right" ALT="Delete Request" BORDER=0 SRC="/iconos/borrar.gif" HEIGHT="16" WIDTH="16">
			</A>
		</td>
	</tr>
	<tr>
		<td colspan="4">
			<hr />
		</td>
	</tr>
	</iterator>
	<tr>
		<td colspan="4">
			<hr />
		</td>
	</tr>
	</table>
	<!-- End Data Table. -->
	<!-- ********************************************************************* -->
	<!-- Start Window Table. -->
	<table class = "tablaestados" border="1" width=100%>
	<tr>
	<!-- After the iterator, include the calculation of the number of intervals. Not modified. -->
<% 
		int zintervalo = zcount/zventana;
		int zresto = zcount%zventana;
		int zcontador = 0;
		if (zresto > 0) {zintervalo = zintervalo + 1;}

// As for the interation to build the content of the interval table.
// Within the table, you must reference the page itself
// adding the required zinicios parameter!!!

	    for (zcontador=0; zcontador < zintervalo; zcontador++) {
			String	ziniciointervalo = String.valueOf(1 + zcontador*zventana);
			int zfinintervalo2 = zcontador*zventana + zventana;
			String zfinintervalo = String.valueOf(zcontador*zventana + zventana);
     		if (zfinintervalo2 > zcount) {
			zfinintervalo = String.valueOf(zcontador*zventana + zresto);
			}
%>
			<script>
			document.write("<td align='center'><a href='/servlet/CheckSecurity/JSP/grupo/pantalla.jsp?zinicios=`ziniciointervalo`'>`ziniciointervalo`&nbsp;-&nbsp;`zfinintervalo`</a></td>");
			</script>
<% 			
			}
%>
	
	</tr>
	</table>
	<!-- End Window Table. -->	
</div>
<div id="capa_disclaimer" style="position:relative; left:1%; top:25%; width:100%; height:100%; z-index:3"> 
	<!-- Page Footer -->	
	<!--#include file="generico_disclaimer.jsp"-->
</div>
</body>
</html>
