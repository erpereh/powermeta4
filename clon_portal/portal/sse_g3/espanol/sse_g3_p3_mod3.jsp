<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
<title>	Descripci&oacute;n del producto de formaci&oacute;n	</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>	
<script type="text/javascript">
</script>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
		
		<%      M4SessionManager m4Session = M4Context.getSession(request);
			    String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
				String znmproducto = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto");
				String znmpt = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmpt");
				String zpath = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zpath");
				String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
				String zidtrtb = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb");
				String zid = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid");
				
				if ((estado==null)||(estado.equals(""))){
					estado = "0";
				}
		%>
	</head>
	<body>
 <%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
			 <%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
		<table>
		<td class="titulofuncional" colspan="2">
			<%=znmpt%><%=zid%>
		</td>
		</table>
		<%
			//datos del m4object
			
		   String zsubsesion = "SSE_TRAINING_REQUEST";
		   String zMeta4Object = "SSE_TRAINING_REQUEST";  

			String znodo3 = "M4T_LENGUAJES";
			String znodo5 = "M4T_DESC_PRODUCTO";
			
			String ztipocarga = "DP";
			String zventanas = "20";
	        int zregistroinicial = 0;
			//zregistroinicial = zregistroinicial - 1;
			int zventana  = 0;
		    int zregistrofinal = zregistroinicial + zventana - 1;
		
		// No se modifica en general.
			
	
   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zmove3 = znodo3 + ":" + znodo3 + "[" + zregistroinicial + "]";
   String zlectura3 = zsubsesion + "!" + znodo3;
   String zraiz3 = zsubsesion + "!" + znodo3 + ".";
   String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;

   String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
   String zmove5 = znodo5 + ":" + znodo5 + "[" + zregistroinicial + "]";
   String zlectura5 = zsubsesion + "!" + znodo5;
   String zraiz5 = zsubsesion + "!" + znodo5 + ".";
   String ziterator5 = znodo5 + ":" + zsubsesion + "!" + znodo5;
		
		// Metodo de carga del Meta4Object generico

	String zMETODOCARGA = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
   	
   		// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
					
	String zSTDNMLENGUAGE = zraiz3 + "STD_N_LANGUAGE";
	String zSTDIDLENGUAGE = zraiz3 + "STD_ID_LENGUAGE";
	
	String zNCERTIFICATION = zraiz5 + "STD_N_CERTIFICATION_TYPE";
	String zHTTP = zraiz5 + "SCO_HTTP_PATH";
				
		%>
		
		<!-- **************************************************************************-->
		<!-- Seguridad -->
		<m4:startpage m4task="<%=zsubsesion%>"/>
		<!-- Comienza la transaccion -->
		<m4:beginjob/>
		<m4:datadef m4o="<%= zMeta4Object %>" m4name="<%=zsubsesion%>"/>
		<% 
			try {
			M4Operations m = new M4Operations(request);
			m.setItem(zsubsesion,znodo5,"","SSE_ID",zid);
			
			}
			catch(Exception e){}
		%>
<m4:exec m4method="<%=zMETODOCARGA%>">
<m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:endjob/>
		<!-- Fin de la transaccion. A partir de aqui interactuamos con los registros. -->
<%
	int  zcount3  = 0;
	int  zcount3i  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
	} catch(Exception e) {}
	try {
	    M4Operations m = new M4Operations(request);
	    zcount3i = m.getCountInClient(znodo3,zsubsesion,znodo3);
	} catch(Exception e) {}
	String	zcount3v = String.valueOf(zcount3i);
	
%>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<table border="0" width="100%" cellspacing = "0">
<tr>
<td class="titulofuncional" colspan="2">Selecci&oacute;n del producto de formaci&oacute;n</td>
</tr>
<tr>
<td>
<img src="/iconos/noname_inscripciones_124_125.gif" width="100"  height="100" alt="Descripci&oacute;n del curso" border="0">
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</td>
<td>
	<div class="descripcionfuncional">
	Desde esta p&aacute;gina puede solicitar el producto seleccionado.
	</div>						
</td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
		<input type="hidden" id="TAG" name="TAG" value="SSE_TRAINING_REQUEST" />
		<input type="hidden" id="REC" name="REC" value="" />
		<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
		<input type="hidden" id="NOD" name="NOD" value="SSE_TRAINING_REQUEST" />
		<input type="hidden" id="SCO_ID_TRTBREQ" name="SCO_ID_TRTBREQ" value="<%=zidtrtb%>" />
		<input type="hidden" id="SCO_NM_TRAINING" name="SCO_NM_TRAINING" value="<m4:item m4name="SSE_TRAINING_REQUEST!M4T_DESC_PRODUCTO.SCO_NM_DEV_PRODUCT" htmlsafe="true"/>" />
		<input type="hidden" id="SCO_NM_TYPE" name="SCO_NM_TYPE" value="Producto" />

	<table class = "TablaEstados" cellspacing = "0" width="100%">
	<tr class = "tablaestadosceldatitulo">
	<td colspan="3" align="center">Descripci&oacute;n del producto de formaci&oacute;n</td>
				</tr>				
	<tr class = "tablaestadosceldatitulo"></tr>
	<tr>
	<td class = "fuentecampo" colspan="2">Producto tipo de formaci&oacute;n:	</td>
	<td class = "fuentevalor"><%=znmpt%></td>
	</tr>
	<tr>
	<td class = "fuentecampo" colspan="2">Producto de formaci&oacute;n:	</td>
	<td class = "fuentevalor"><%=znmproducto%></td>
	</tr>
	</table>
	<table class = "TablaEstados" cellspacing = "0" width="100%">
	<tr>
	<td class = "fuentecampo" colspan="2" width= "20%">Certificado:</td>
	<td class = "fuentevalor" width= "30%"><m4:item m4name="SSE_TRAINING_REQUEST!M4T_DESC_PRODUCTO.SCO_N_CERTIFICATION" htmlsafe="true"/></td>
	<td class = "fuentecampo" colspan="2" width= "20%">Pagina WEB: </td>
	<td class = "fuentevalor" width= "30%"><%=zpath%></td>
	</tr>
	</table>
	
		<table class = "tablaestados" width="100%" cellspacing="0" border="0">	
				<tr class = "tablaestadosceldatitulo">
					<!-- La suma del colspan de la fila de titulo debe ser igual a la suma de las celdas maximas de la tabla de datos -->
					<td colspan="4" align="center" width="100%">
						Informaci&oacute;n adicional
					</td>
				</tr>				

				<tr>
				<td class="fuentecampo">
		       Inicio preferido 
				</td>    
				<td class="fuentecampo">
				 <input class="fuenteformulario" type="text" name="SCO_SD_PREF" id="SCO_SD_PREF" title="Escribe la fecha inicial" maxlength="10" size="10">
						<a href="javascript:m4calendario(m4objeto('SCO_SD_PREF','NombreFormulario'))">
						<img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="Selecciona la fecha de incio"></img></input>
						<script type="text/javascript">
						
						//document.all["SCO_SD_PREF"].value = m4fechahoy();
						var valorfec = m4fechahoy();
						m4valor("NombreFormulario","SCO_SD_PREF",valorfec,"set");
						
						</script>
				</td>
				<td class="fuentecampo">
				Fin preferido 
				</td>    
				<td class="fuentecampo">
				 <input class="fuenteformulario" type="text" name="SCO_ED_PREF" id="SCO_ED_PREF" title="Escribe la fecha inicial" maxlength="10" size="10">
						<a href="javascript:m4calendario(m4objeto('SCO_ED_PREF','NombreFormulario'))">
						<img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="Selecciona la fecha de incio"></img></input>
				</td>
				</tr>
				<tr>
				<td class="fuentecampo" colspan="1">
					Lenguaje
				</td>
				<td class="fuentevalor" colspan="3" >
					<select id="STD_ID_LANGUAGE" class="Fuenteformulario" name="STD_ID_LANGUAGE">
						<m4:iterator m4rows="<%=zcount3v%>" m4node="<%=ziterator3%>">
							<m4:param name="m4item2" value="SSE_TRAINING_REQUEST!M4T_LENGUAJES.STD_N_LANGUAGE"/>
							<m4:param name="m4item3" value="SSE_TRAINING_REQUEST!M4T_LENGUAJES.STD_ID_LANGUAGE"/>
							<option value="$M4ITEM3$">
								$M4ITEM2$
							</option>
						</m4:iterator>
					</select>
				</td>
				</tr>
	</table>



	
		<table class = "tablaestados" width="100%" cellspacing="0" border="0">	
		<td align="center" colspan="4" class = "fuenteboton">
		<!-- Y se anade el boton de envio a la derecha del formulario -->				
		<a style="cursor:hand" href="javascript:NombreFormulario.submit()"  title="Enviar">	
			<img alt="Enviar" title="Enviar" border="0" src="/iconos/icono_enviar_ess_36_36.gif" onmouseover=" m4sombra(this)" onmouseout="m4oscuridad(this)" />
		</a>
		</td>
	</table>
	</form>	
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
		</div>
	<m4:endpage/>
	</body>
</html>
