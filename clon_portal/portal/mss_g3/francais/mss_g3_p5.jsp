<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<!--- Plantilla base del ESS -->
<head>
	<title>&Eacute;valuations individuelles successives</title>
	<!-- Hoja de Estilo general. Obligatorio -->
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	<!-- Librerias JavaScript. Obligatorio -->
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>		
	
	
	<!-- Librerias Java. Obligatorio -->
	<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	

	<!-- Recuperacion de parametros. -->
	<!-- estado:	Determina la barra de localizacion. -->
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
	<script type="text/javascript">
		function navegar (ord,fecha,idhr,oreval) {
			var parametros = new Array("estado","ord","fecha","idhr","oreval");
			var valores = new Array(35,ord,fecha,idhr,oreval);
			m4navegar("mss_g3/mss_g3_p5_mod.jsp",parametros,valores);
	}
</script>

</head>
<body>
<!-- Encabezado -->
	<div id="capa_menu" style="position:absolute; left:1%; top:1%; width:100%; height:20%; z-index:3">
         <%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
	</div>
	<div id="capa_link" style="position:absolute; left:1%; top:26%; width:20%; height:0%; z-index:1">
	  <%@ include file="../../sse_generico/francais/generico_links.jsp" %>
	</div>
<!-- **************************************************************************-->
<!-- Carga del Meta4Object. El nombre de la Tarea deberia ser el mismo nombre que el del meta4object que se carga...o si se carga mas de uno el del principal. Antes de nada se insertan las importacion de clases -->

<!-- Definicion del Meta4Object -->
	<%
		String zsubsesion = "SSE_H_EVALUATOR_HIST";
		String zmeta4object = "SSE_H_EVALUATOR_HIST";
		String znodo = "M4T_H_EVALUATE";
		String znodocarga = "M4T_H_EVALUATE_NORMAL";

			
		String zoutputdef = zsubsesion + "!" + znodo + "[*]";
		String zmove = znodo + ":" + znodo + "[FIRST]";
		String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
	
		String zmetodocarga = "CARGA:" + zsubsesion + "!M4T_H_EVALUATE_NORMAL.CARGA_HISTORICO";
   
		String zSCONMEVALPROC = "SCO_NM_EVAL_PROC"; 
		String zSCODTSTARTEVAL = "SCO_DT_START_EVAL"; 
		String zSCOORHRROLE =  "SCO_OR_HR_ROLE";
		String zSCOIDHR =  "SCO_ID_HR";
		String zSCOOREVALUATOR =  "SCO_OR_EVALUATOR";
	
   	%>

	<m4:startpage m4task="<%=zsubsesion%>"/>
	<m4:beginjob/>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
	<% try {
	    M4Operations m = new M4Operations(request);
	    m.setItem(zsubsesion,znodocarga,"","NIVEL","1");  
		} catch(Exception e) {}
	%>
	<m4:exec m4method="<%=zmetodocarga%>"/>
	<m4:outputdef m4alias="<%=znodo%>">
		<m4:param name="m4name0" value="<%=zoutputdef%>"/>
	</m4:outputdef>
	<m4:endjob/>
	<m4:move>
		<m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/>
	</m4:move>
	
	<%
		int zcount = 0;
		int  zcounti  = 0;	
		try {
		    M4Operations m = new M4Operations(request);
		    zcount = m.getCount(znodo,zsubsesion,znodo);
		} catch(Exception e) {}
		try {
		    M4Operations m = new M4Operations(request);
		    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		} catch(Exception e) {}
		String	zcountv = String.valueOf(zcounti);
	%>


	<div id="capa_cuerpo" style="position:relative; left:20%; top:22%; width:80%; height:0%; z-index:2">
		<table border="0" width="100%">
			<tr>
				<td class="titulofuncional" colspan="2">
					&Eacute;valuations individuelles successives
				</td>
				<td>
					<a href="" onclick="history.back();">
						<img alt="Pr&eacute;c&eacute;dente" src="/iconos/noname_volver_52_44.gif" height="44" width="52" onmouseover=" m4sombra(this)" onmouseout="m4oscuridad(this)" />				
					</a>
				</td>
			</tr>
			<tr>
				<td>			
					<a href="">
						<img alt="&Eacute;valuations individuelles successives" src="/iconos/" width="63" height="100" />
					</a>	
				</td>
				<td>
					<!-- Descripcion -->			
					<div class="descripcionfuncional">
						Vous pouvez consulter les r&eacute;sultats des &eacute;valuations ferm&eacute;es auxquelles vous avez particip&eacute; en tant qu'&eacute;valuateur.
					</div>
				</td>
			</tr>
		</table>
	
		<% 
			if (zcounti > 0){
		%>	
			<table class = "tablaestados" width="100%" cellspacing="0" border="0">
				<tr class = "tablaestadosceldatitulo">
					<!-- La suma del colspan de la fila de titulo debe ser igual a la suma de las celdas maximas de la tabla de datos -->
					<td colspan="1"  >
						R&eacute;sultats d'&eacute;valuation
					</td>		
				</tr>
				<!-- Tabla de datos. Parte constituyente de un registro. Aparecen items del registro sobre el que estamos posicionados. -->
				<m4:iterator m4rows="<%=zcountv%>" m4node="<%=ziterator%>">
					<m4:param name="m4item0" value="<%=zSCONMEVALPROC%>"/>
					<m4:param name="m4item1" value="<%=zSCODTSTARTEVAL%>"/>
					<m4:param name="m4item2" value="<%=zSCOORHRROLE%>"/>
					<m4:param name="m4item3" value="<%=zSCOIDHR%>"/>
					<m4:param name="m4item4" value="<%=zSCOOREVALUATOR%>"/>

					<tr>
						<td class = "fuentevalor" colspan="1">
							<a title = "Afficher le d&eacute;tail des r&eacute;sultats d'&eacute;valuation" style="CURSOR: hand" href="Javascript:navegar('$M4ITEM2$','$M4ITEM1$','$M4ITEM3$','$M4ITEM4$');">$M4ITEM0$</a>
						</td>	
					</tr>
				</m4:iterator>			
			</table>
		<%
			
		}else{
		%>
			<div class="fuentenodatos">
				Vous n'avez actuellement aucun historique de vos &eacute;valuations individuelles.
			</div>
			<br/> <br/> <br/> <br/>
			
		<%
			}
		%>	

	
			
	</div>
	<div id="capa_disclaimer" style="position:relative; left:1%; top:25%; width:100%; height:100%; z-index:0">
		<!-- Pie de pagina -->
		<br /><br />	
		<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
	</div>
</body>
<m4:endpage/>
</html>
