<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<!-- Plantilla base del SSE -->
<head>
<title>Altera&ccedil;&otilde;es pessoais</title>
	<!-- Hoja de Estilo general. Obligatorio-->
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<!-- Librerias JavaScript. Obligatorio-->
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>	
	<!-- Librerias Java. Obligatorio-->
	<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	

	<!-- Recuperacion de parametros. -->
	<!-- estado:	Determina la barra de localizacion. -->
<%      M4SessionManager  m4Session    = M4Context.getSession(request);
        String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
%>
</head>
<body>
<!-- Encabezado -->
<div id="capa_menu" style="position:absolute; left:1%; top:1%; width:100%; height:20%; z-index:3">
	<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
</div>
<div id="capa_link" style="position:absolute; left:1%; top:26%; width:20%; height:0%; z-index:1">	
	<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
</div>
<div id="capa_cuerpo" style="position:relative; left:20%; top:22%; width:80%; height:0%; z-index:2">



	<!-- Tabla de Descripcion. Obligatoria. Siempre una 3*2: un titulo de la pagina + un icono + una descripcion + opciones -->
	<table border="0" width="100%">
	<tr>
		<!-- Titulo funcional de la pagina -->
		<td class="titulofuncional" colspan="2">
			Altera&ccedil;&otilde;es pessoais
		</td>
		<td>
			<!-- Boton de vuelta atras. Obligatorio-->
			
			<a href="" onclick="history.back();">
	           <img alt="Voltar" src="/iconos/noname_volver_52_44.gif" width="52" height="44"  onmouseover="m4sombra(this)" onmouseout="m4oscuridad(this)" align="right" />
				
			</a>
		</td>
	</tr>
	<tr>
		<td colspan="2">
			<div class="descripcionfuncional" align="left">
Mudou de casa? Se lhe 			 <br />
			 <br />
			 Tamb&eacute;m colocamos &agrave; sua disposi&ccedil;&atilde;o um assitente detalhado que pode ajud&aacute;-lo em todas as p&aacute;ginas afectadas por essa altera&ccedil;&atilde;o.
			</div>
		</td>
	</tr>
	</table>
	<table>
	<tr>
		<td align="left">
			<table>
			<tr>
				<td>
				<a tabindex="1" style="cursor:hand" href="sse_g1_p1_mod.jsp?estado=11&WizMode=1">		
					<img alt="Dados pessoais" src="/iconos/noname_familia_157_125.gif" width="100" height="100"  onmouseover = "m4luztotal (this)" onmouseout="m4oscuridad(this)"  style="cursor:hand" href="sse_g1_p1_mod.jsp"/>
				  </a>
				</td>
				<td>
					<div class="fuentedescripcion">
Nesta sec&ccedil;&atilde;o pode ser guiado ...						
					</div>
					
				</td>
			</tr>
			</table>
		</td>
	</tr>
	
	<!-- Fin de la Parte Izquierda -->
<div id="capadisclaimer" style="position:relative; left:1%; top:22%; width:100%; height:0%; z-index:3">
	<!-- Pie de pagina -->	
	<!--include file="../../sse_generico/portugues/generico_disclaimer.jsp"-->
</div>

		<div id="capa_disclaimer" style="position:relative; left:1%; top:25%; width:100%; height:100%; z-index:3">
			<!-- Pie de pagina -->	
			<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
		</div>
</body>
</html>
