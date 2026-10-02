<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<!-- Plantilla base del SSE -->
<head>
<title>Titulo</title>
	<!-- Hoja de Estilo general. Obligatorio-->
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<!-- Librerias JavaScript. Obligatorio -->
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<script type="text/javascript" src="/libreria/menu.js"></script>	
	<!-- Librerias Java. Obligatorio -->
	<%@ import="com.meta4.session.*, com.meta4.m4operations.*" %>	

	<!-- Recuperacion de parametros. -->
	<!-- estado:	Determina la barra de localizacion. -->
<%      M4SessionManager  session    = M4Context.getSession(trequest);
        String estado = tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
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
<!-- Encabezado -->
<div id="capa_menu" style="position:absolute; left:1%; top:1%; width:100%; height:20%; z-index:3">
	<!--#include file="generico_menusup.jsp"-->
</div>
<div id="capa_link" style="position:absolute; left:1%; top:26%; width:20%; height:0%; z-index:1">
    <!--#include file="generico_links.jsp"-->
</div>
<!-- **************************************************************************-->
<!-- Carga del Meta4Object. El nombre de la Tarea deberia ser el mismo nombre que el del meta4object que se carga...o si se carga mas de uno el del principal. Antes de nada se insertan las importacion de clases -->

<!-- Definicion del Meta4Object -->
<%
   String zsubsesion = "SSE_ENLACES";
   String zMeta4Object = "SSE_ENLACES";
   String znodo = "SSE_ENLACES";

// Se parametriza el tamano que se desea para la ventana

   String zventanas = "20";

// No se modifica en general.

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + "[" + zregistroinicial + "]";
   String zlectura = zsubsesion + "!" + znodo;
   String zraiz = zsubsesion + "!" + znodo + ".";

// Metodo de carga del Meta4Object generico

   String zMETODOCARGA = "CARGA:" + zsubsesion + "!SSE_ENLACES.SSE_ENLACES_CARGA";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zENLACE = zraiz + "ENLACE";
   String zID_ENLACE = zraiz + "ID_ENLACE";
   String zN_ENLACE = zraiz + "N_ENLACE";
   String zID_HR = zraiz + "ID_HR";
   String zID_COMPANY = zraiz + "ID_COMPANY";
   
%>
<!-- **************************************************************************-->
<!-- Seguridad -->
<startpage m4task="`zsubsesion`"></startpage>
<!-- Comienza la transaccion -->
<beginjob></beginjob>
<datataglet m4name="`zsubsesion`" m4o="`zMeta4Object`"></datataglet>
<exec m4method="`zMETODOCARGA`"></exec>
<outputdef m4name0="`zoutputdef`"></outputdef>
<endjob></endjob>
<!-- Fin de la transaccion. A partir de aqui interactuamos con los registros. -->
<!-- Posicionamiento con varias ventanas. Modifica el NODO. -->
<move m4:NODO="`zmove`"></move>
<!-- **************************************************************************-->
	<!-- Calculo del número de registros. -->
	<!-- zcount:	Número de registros del Nodo. -->
	<!-- zcountv:	Número de registro de la ventana. -->
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

	<!-- Tabla de Descripcion. Obligatoria. Siempre una 3*2: un titulo de la pagina + un icono + una descripcion + opciones -->
	<table border="1" width="100%">
	<tr>
		<!-- Titulo funcional de la pagina -->
		<td class="titulofuncional" colspan="2">
			Titulo
		</td>
		<td>
			<!-- Boton de vuelta atras. Obligatorio -->
			<a href="" onclick="history.back();">
				<img alt="Volver" src="/iconos/noname_volver_52_44.gif" height="44" width="52" 
onmouseover="m4luz(this)" onmouseout="m4oscuridad(this)" />
			</a>
		</td>
	</tr>
	<tr>
		<td>
			<!-- Al insertar el icono no olvides anadir su tamano exacto -->			
			<img alt="Nombre" src="/iconos/*.gif" width="20" height="60" />
		</td>
		<td>
			<!-- Descripcion -->			
			<div class="descripcionfuncional">
				Descripcion funcional de la pagina.
			</div>
			<ul class="enlacefuncional">
				<li>
					<a style="CURSOR: hand" href="">Opcion1</a>
				</li>
			</ul>
		</td>
	</tr>
	</table>
	<!-- Fin de Tabla de descripcion. -->
	<!-- ********************************************************************* -->
	<!-- Inicio de Tabla de Datos. -->	

	<table class = "tablaestados" width="100%" border="1">
	<tr class = "tablaestadosceldatitulo">
		<!-- La suma del colspan de la fila de titulo debe ser igual a la suma de las celdas maximas de la tabla de datos -->
		<td colspan = "4">
			Titulo tabla
		</td>
<!--		<td align="center">
			<a href="">
				<img alt="Insertar/Modificar registros" src="/iconos/flecha_16_7.gif" height="7" width="16" />
			</a>
		</td>			-->
	</tr>
	<tr class = "tablaestadosceldatitulo">
		<td class = "fuentecampo">
			<!-- Se anade el valor del campo -->		
			Nombre link
		</td>
		<td class = "fuentecampo">
			<!-- Se anade el valor del campo -->		
			Link
		</td>
		<td class = "fuentecampo">
			<!-- Se anade el valor del campo -->		
			Orden
		</td>
		<td class = "fuentecampo">
			<!-- Se anade el valor del campo -->
		</td>  
	</tr>
	<!-- Tabla de datos. Parte constituyente de un registro. Dentro de la etiqueta iterator los valores se representan entre dolares: -->
	<iterator
	m4rows="`zcountv`"
	m4item0="`zN_ENLACE`"
	m4item1="`zENLACE`"
	m4item2="`zID_ENLACE`"
	m4count0="`zlectura`"
	m4current0="`zlectura`">
	<tr>
		<td class = "fuentevalor"> 
			<!-- Se anade el valor del item -->
			$M4ITEM0$
		</td>
		<td class = "fuentevalor"> 
			<!-- Se anade el valor del item -->
			$M4ITEM1$
		</td>
		<td class = "fuentevalor"> 
			<!-- Se anade el valor del item -->
			$M4ITEM2$
		</td>
		<td>
			<A title ="Eliminar la petici&oacute;n del curso" STYLE="cursor:hand" href="javascript:var parametros = new Array ('_M4TAGLET','_REGISTRO','_NODOACCION','_NODO');var valores = new Array (SSE_NEC_FORMACION,$M4ITEM3$,BORRAR,SSE_NEC_FORMACION);var URL = '/servlet/CheckSecurity/JSP/generico_sse/actualizar.jsp';m4navegar(URL,parametros,valores);" > 
				<IMG ALIGN="right" ALT="Eliminar la petici&oacute;n" BORDER=0 SRC="/iconos/borrar.gif" HEIGHT="16" WIDTH="16">
			</A>
		</td>
	</tr>
	<tr>
		<td colspan="4">
			<hr/>
		</td>
	</tr>
	</iterator>
	<tr>
		<td colspan="4">
			<hr />
		</td>
	</tr>
	</table>
	<!-- Fin de la tabla de datos. -->
	<!-- ********************************************************************* -->
	<!-- Inicio de la tabla de ventanas. -->
	<table class = "tablaestados" border="1" width=100%>
	<tr>
	<!-- Tras el iterator incluimos el calculo del numero de intervalos. No se modifica -->
<% 
		int zintervalo = zcount/zventana;
		int zresto = zcount%zventana;
		int zcontador = 0;
		if (zresto > 0) {zintervalo = zintervalo + 1;}

// Asi como la iteracion de construccion del contenido de la tabla de intervalos.
// Dentro de la tabla, hay que hacer referencia a la propia pagina
// anadiendo obligatoriamente el parametro zinicios!!!

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
	<!-- Fin de la tabla de ventanas. -->	
</div>
<div id="capa_disclaimer" style="position:relative; left:1%; top:25%; width:100%; height:100%; z-index:3"> 
	<!-- Pie de pagina -->	
	<!--#include file="generico_disclaimer.jsp"-->
</div>
</body>
</html>
