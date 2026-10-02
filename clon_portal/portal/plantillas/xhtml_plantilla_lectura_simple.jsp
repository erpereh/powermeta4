<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<!-- Plantilla base del SSE -->
<head>
<title>Titulo</title>
	<!-- Hoja de Estilo general. Obligatorio-->
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<!-- Librerias JavaScript. Obligatorio -->
	<script type="text/javascript" src="\libreria\funciones_sse.js"></script>
	<!-- Librerias Java. Obligatorio -->
	<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>

	<!-- Recuperacion de parametros. -->
	<!-- estado:	Determina la barra de localizacion. -->
<%      M4SessionManager  session    = M4Context.getSession(trequest);
        String estado = tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
%>
</head>
<body>
<!-- Encabezado -->
<div id="capa_menu" style="position:absolute; left:1%; top:1%; width:100%; height:20%; z-index:3">
	<!--#include file="..\sse_generico\espanol\generico_menusup.jsp"-->
</div>
<div id="capa_link" style="position:absolute; left:1%; top:26%; width:20%; height:0%; z-index:1">
	<!--#include file="..\sse_generico\espanol\generico_links.jsp"-->
</div>
<!-- **************************************************************************-->
<!-- Carga del Meta4Object. El nombre de la Tarea deberia ser el mismo nombre que el del meta4object que se carga...o si se carga mas de uno el del principal. Antes de nada se insertan las importacion de clases -->

<!-- Definicion del Meta4Object -->
<%
   String zsubsesion = "SSE_DOMIC_EMPLEADO";
   String zMeta4Object = "SSE_DOMIC_EMPLEADO";
   String znodo = "M4T_DOMIC_EMPLEADO";

// No se modifica en general.

   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zraiz = zsubsesion + "!" + znodo + ".";

// Metodo de carga del Meta4Object generico

   String zMETODOCARGA = "CARGA:" + zsubsesion + "!ESS_COM_ROOT.CARGA";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zIDITEM = zraiz + "ID_ITEM";
   String zVIAPUBLICA = zraiz + "VIA_PUBLICA";   
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
<!-- **************************************************************************-->
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
				<img alt="Volver" src="/iconos/volver_52_44.gif" height="44" width="52" 
onmouseover="m4luz(this)" onmouseout="m4oscuridad(this)" />
			</a>
		</td>
	</tr>
	<tr>
		<td>
			<!-- Al insertar el icono no olvides anadir su tamano exacto -->			
			<img alt="Nombre" src="\iconos\*.gif" width="20" height="60" />
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

	<table class = "tablaestados">
	<tr class = "tablaestadosceldatitulo">
		<!-- La suma del colspan de la fila de titulo debe ser igual a la suma de las celdas maximas de la tabla de datos -->
		<td colspan="1">
			Titulo tabla
		</td>
		<td align="center">
			<a href="">
				<img alt="Insertar/Modificar registros" src="/iconos/flecha_16_7.gif" height="7" width="16" />
			</a>
		</td>			
	</tr>
	<!-- Tabla de datos. Parte constituyente de un registro. Aparecen items del registro sobre el que estamos posicionados. -->
	<tr>
		<td class = "fuentecampo">
			<!-- Se anade el nombre del item -->
			Nombre del campo:
		</td>
		<td class = "fuentevalor"> 
			<!-- Se anade el valor del item -->
			a<item m4name="`zVIAPUBLICA`"></item>b
		</td>
	</tr>
	</table>
</div>
<div id="capa_disclaimer" style="position:relative; left:1%; top:25%; width:100%; height:100%; z-index:3"> 
	<!-- Pie de pagina -->	
	<!--#include file="generico_disclaimer.jsp"-->
</div>
</body>
</html>
