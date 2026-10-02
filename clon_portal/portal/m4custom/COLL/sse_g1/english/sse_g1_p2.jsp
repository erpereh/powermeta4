<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<!-- ESS Base Template -->
<head>
<title>Life Events</title>
	<!-- General Style Sheet. Required-->
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<!-- JavaScript libraries. Required-->
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/english/menu_ess.jsp" %>	
	<!-- Java libraries. Required-->
	<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	

	<!-- Parameter retrieval. -->
	<!-- status:	Determine the location bar. -->
<%      M4SessionManager  m4Session    = M4Context.getSession(request);
        String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
%>
</head>
<body>
<!-- Header -->
<div id="capa_menu" style="position:absolute; left:1%; top:1%; width:100%; height:20%; z-index:3">
	<%@ include file="../../sse_generico/english/generico_menusup.jsp" %>
</div>
<div id="capa_link" style="position:absolute; left:1%; top:26%; width:20%; height:0%; z-index:1">	
	<%@ include file="../../sse_generico/english/generico_links.jsp" %>
</div>
<div id="capa_cuerpo" style="position:relative; left:20%; top:22%; width:80%; height:0%; z-index:2">



	<!-- Description table. Required. Always 3*2: a page title + an icon + a description + options -->
	<table border="0" width="100%">
	<tr>
		<!-- Functional Page Title -->
		<td class="titulofuncional" colspan="2">
			Life Events
		</td>
		<td>
			<!-- Back button. Required-->
			
			<a href="" onclick="history.back();">
	           <img alt="Back" src="/iconos/noname_volver_52_44.gif" width="52" height="44"  onmouseover="m4sombra(this)" onmouseout="m4oscuridad(this)" align="right" />
				
			</a>
		</td>
	</tr>
	<tr>
		<td colspan="2">
			<div class="descripcionfuncional" align="left">
Have you moved? Have you 			 <br />
			 <br />
			 There is also a complete wizard that will guide you through all of the pages that may be affected by the change.
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
					<img alt="Person Information" src="/iconos/noname_familia_157_125.gif" width="100" height="100"  onmouseover = "m4luztotal (this)" onmouseout="m4oscuridad(this)"  style="cursor:hand" href="sse_g1_p1_mod.jsp"/>
				  </a>
				</td>
				<td>
					<div class="fuentedescripcion">
This section will guide you...						
					</div>
					
				</td>
			</tr>
			</table>
		</td>
	</tr>
	
	<!-- End Left Part -->
<div id="capadisclaimer" style="position:relative; left:1%; top:22%; width:100%; height:0%; z-index:3"> 
	<!-- Page Footer -->	
	<!--include file="../../sse_generico/english/generico_disclaimer.jsp"-->
</div>

		<div id="capa_disclaimer" style="position:relative; left:1%; top:25%; width:100%; height:100%; z-index:3"> 
			<!-- Page Footer -->	
			<%@ include file="../../sse_generico/english/generico_disclaimer.jsp" %>
		</div>
</body>
</html>
