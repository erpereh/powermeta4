<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
	<head>
		<title>Resultados de evaluaciones</title>

		<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />

		<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
		<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %>	

		<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	

	</head>
	<body>
	<%
		String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
		String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
		if ((estado==null)||(estado.equals(""))){
			estado="0";
		}
		if ((zinicios==null)||(zinicios.equals(""))){
			zinicios = "1";
		}
		String zidfechainicio = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"fecha");
		String zidord = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord");
		String zid = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idhr");
		String zidordeva = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"oreval");
	
	%>
	<div id="capa_menu" style="position:absolute; left:1%; top:1%; width:100%; height:20%; z-index:3">
         <%@ include file="../../mss_generico/espanol/mssgenerico_menusup.jsp" %>
	</div>
	<div id="capa_link" style="position:absolute; left:1%; top:26%; width:20%; height:0%; z-index:1">
		<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
	</div>
	<%
		String zsubsesion = "SSE_H_EVALUATOR_HIST";
		String zmeta4object = "SSE_H_EVALUATOR_HIST";
		String znodo = "M4T_EVALUATOR_HIST";
		String znodo2 = "M4T_EVAL_CAPAB";	
		String znodo3 = "M4T_EVAL_OBJECT";
  
  		String zoutputdef = zsubsesion + "!" + znodo + "[*]";
		String zmove = znodo + ":" + znodo + "[FIRST]";
		String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   
		String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
		String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";  
		String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;
		
		String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
		String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]"; 
		String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;
	
  
		String zmetodo = "CARGA:" + zsubsesion + "!M4T_EVALUATOR_HIST.CARGA_EVALUATOR_HIST";
   
	   
		String zSCONMOBJECTIVE =  "SCO_NM_OBJECTIVE";
		String zSCOACCOMPDEGREE =  "SCO_ACCOMP_DEGREE";
		String zSCONMMAGNITUDE =  "SCO_NM_MAGNITUDE";
   
		String zSCONMEXTDKN =  "SCO_NM_EXTD_KN";
		String zSCOMEANING =  "SCO_MEANING";
   
	%>
<!-- **************************************************************************-->
<!-- Seguridad -->
	<m4:startpage m4task="<%=zsubsesion%>"/>
<!-- Comienza la transaccion -->
	<m4:beginjob/>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
	<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,znodo,"","SSE_OR_HR_ROLE",zidord);  
	    m.setItem(zsubsesion,znodo,"","SSE_DT_START_EVAL",zidfechainicio);
	    m.setItem(zsubsesion,znodo,"","SSE_ID_ROLE",zid);
	    m.setItem(zsubsesion,znodo,"","SSE_OR_HE_EVALUTOR",zidordeva);
		} catch(Exception e) {}

	%>
	<m4:exec m4method="<%=zmetodo%>"/>
	<m4:outputdef m4alias="<%=znodo%>">
		<m4:param name="m4name0" value="<%=zoutputdef%>"/>
	</m4:outputdef>
	<m4:outputdef m4alias="<%=znodo3%>">
		<m4:param name="m4name0" value="<%=zoutputdef3%>"/>
	</m4:outputdef>
	<m4:outputdef m4alias="<%=znodo2%>">
		<m4:param name="m4name0" value="<%=zoutputdef2%>"/>
	</m4:outputdef>
	<m4:endjob/>

	<m4:move>
		<m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/>
	</m4:move>
	<%
		int  zcount2  = 0;
		int  zcounti2  = 0;	
		try {
			M4Operations m = new M4Operations(request);
			zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
		} catch(Exception e) {}
		try {
			M4Operations m = new M4Operations(request);
			zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);
		} catch(Exception e) {}
		String	zcountv2 = String.valueOf(zcounti2);
	%>

	<m4:move>
		<m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/>
	</m4:move>
	<%
		int  zcount3  = 0;
		int  zcounti3  = 0;	
		try {
		    M4Operations m = new M4Operations(request);
		    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
		} catch(Exception e) {}
		try {
		    M4Operations m = new M4Operations(request);
		    zcounti3 = m.getCountInClient(znodo3,zsubsesion,znodo3);
		} catch(Exception e) {}
		String	zcountv3 = String.valueOf(zcounti3);
	%>

	<div id="capa_cuerpo" style="position:relative; left:20%; top:22%; width:80%; height:0%; z-index:2">
		<table border="0" width="100%">
			<tr>
				<td class="titulofuncional" colspan="2">
					Resultados de evaluaciones		
				</td>
			</tr>
			<tr>
				<td>
					<!-- Al insertar el icono no olvides anadir su tamano exacto -->			
					<img alt="Resultado" src="/iconos/"  width="94" height="100"  />
				</td>
				<td>
					<!-- Descripcion -->			
					<div class="descripcionfuncional">
						En esta pantalla puedes ver los resultados de tus evaluados.
					</div>
					<ul class="listaenlace">
						<li>
							<a class="enlacefuncional" title =" Historiales de evaluaci&oacute;n " style="CURSOR: hand" href="mss_g3_p5.jsp?estado=35"> Historiales de evaluaci&oacute;n </a>
						</li>	
					</ul>
				</td>
			</tr>
		</table>
		
	
		
		<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
		<%	
			if (zcounti2 > 0) {
		%>
				<tr class = "tablaestadosceldatitulo">
					<td  colspan="3">
						Conocimientos			
					</td>
					<td  colspan="1" align="right" >
						<a href="mss_g3_p5.jsp">
							<img alt="Historiales de evaluaci&oacute;n" src="/iconos/icono_flecha2_16_7.gif" width="16" height="7"  />
						</a>
					</td>			
				</tr>
				<m4:iterator m4rows="<%=zcountv2%>" m4node="<%=ziterator2%>">
					<m4:param name="m4item0" value="<%=zSCONMEXTDKN%>"/>
					<m4:param name="m4item1" value="<%=zSCOMEANING%>"/>
					<tr>
						<td  class = "fuentevalor" colspan="1"  >
							$M4ITEM0$
						</td>
						<td class="fuentecampo" colspan="1" >
							Resultado
						</td>
						<td  class = "fuentevalor" colspan="2"  >
							$M4ITEM1$
						</td>				
					</tr>
					<tr>
						<td colspan="4">
							<hr />
						</td>
					</tr>
			</m4:iterator>
		
		<%
			}
			if (zcounti3 > 0) {
		%>	 
		
				<tr class = "tablaestadosceldatitulo">
					<td  colspan="3">
						Objetivos
					</td>
					<td  colspan="1" align="right" >
						<a href="mss_g3_p5.jsp">
							<img alt="Historiales de evaluaci&oacute;n" src="/iconos/icono_flecha2_16_7.gif" width="16" height="7"  />
						</a>
					</td>		
				</tr>
	
				<m4:iterator m4rows="<%=zcountv3%>" m4node="<%=ziterator3%>">
					<m4:param name="m4item0" value="<%=zSCONMOBJECTIVE%>"/>
					<m4:param name="m4item1" value="<%=zSCONMMAGNITUDE%>"/>
					<m4:param name="m4item2" value="<%=zSCOACCOMPDEGREE%>"/>
					<tr>			
						<td  class = "fuentevalor" colspan="4"  >
							$M4ITEM0$
						</td >		
					</tr>
					<tr>
						<td class="fuentecampo">
							Magnitud
						</td>
						<td  class = "fuentevalor" colspan="1"  >
							$M4ITEM1$		
						</td >		
						<td class="fuentecampo">
							Puntuaci&oacute;n
						</td>
						<td  class = "fuentevalor" colspan="1"  >
							$M4ITEM2$		
						</td >
					</tr>
					<tr>
						<td colspan="4">
							<hr />
						</td>
					</tr>
				</m4:iterator>
					
		<%
		}
		%>
		</table>
		
	</div>		
	<div id="capa_disclaimer" style="position:relative; left:1%; top:25%; width:100%; height:100%; z-index:0"> 
		<!-- Pie de pagina -->	
		<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
	</div>
</body>
<m4:endpage/>

</html>
