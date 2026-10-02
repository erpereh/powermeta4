<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<title>Inscripci&oacute;n en multimedia</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>	
<script type="text/javascript"></script>

<script type="text/javascript">
function solicitar_sesion(nombre,idtrtb){
m4valor("FormularioSesion","SCO_NM_TRAINING",nombre,"set");
m4valor("FormularioSesion","SCO_ID_TRTBREQ",idtrtb,"set");
m4submit("FormularioSesion");

}
</script>

<script type="text/javascript">
function comprobar(){

if ((m4valor("NombreFormulario","SCO_ED_PREF","","get")== "") && (m4valor("NombreFormulario","SCO_SD_PREF","","get")== ""))
	{	m4submit("NombreFormulario");
		return;}
if ((m4valor("NombreFormulario","SCO_ED_PREF","","get")== "") && (m4fechacomprobacion(m4objeto('SCO_SD_PREF','NombreFormulario'),"")))
{	m4submit("NombreFormulario");
		return;}
if (m4fechacomprobacion((m4objeto('SCO_SD_PREF','NombreFormulario')),"")&& 	(m4fechacomprobacion((m4objeto('SCO_SD_PREF','NombreFormulario')),""))&& (m4compfechas(m4objeto('SCO_SD_PREF','NombreFormulario'),'<=',m4objeto('SCO_ED_PREF','NombreFormulario'))))
{	m4submit("NombreFormulario");
		return;}
alert ("No se ha realizado la solicitud.Compruebe que la fecha de fin es posterior a la de inicio y que los formatos son correctos.");
}
</script>

<%
    Generatablaparametros zobjtabla = new Generatablaparametros(request);
	String estado = zobjtabla.m4paramvalor("estado");
	String znombre = zobjtabla.m4paramvalor("znombre");
	String zntipo = zobjtabla.m4paramvalor("zntipo");
	String znmul = zobjtabla.m4paramvalor("znmu");
	String zid = zobjtabla.m4paramvalor("zid");
	String zinicios = zobjtabla.m4paramvalor("zinicios");
	String zidtrtb = zobjtabla.m4paramvalor("zidtrtb");
	if ((estado==null)||(estado.equals(""))){
		estado = "0";
	}
%>
</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
String zsubsesion = "SSE_TRAINING_REQUEST";
String zMeta4Object = "SSE_TRAINING_REQUEST";  

String znodo2 = "M4T_DESC_MULTIMEDIA";
String znodo3 = "M4T_LENGUAJES";
String znodo6 = "M4T_SESIONES";
			
String ztipocarga = "DM";
String zventanas = "20";

int zregistroinicial = 0;
//zregistroinicial = zregistroinicial - 1;
int zventana  = 0;
int zregistrofinal = zregistroinicial + zventana - 1;
		
// No se modifica en general.
			
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + ":" + znodo2 + "[" + zregistroinicial + "]";
   String zlectura2 = zsubsesion + "!" + znodo2;
   String zraiz2 = zsubsesion + "!" + znodo2 + ".";
   String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;			

   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
   
   String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";
   String zmove6 = znodo6 + ":" + znodo6 + "[" + zregistroinicial + "]";
   String zlectura6 = zsubsesion + "!" + znodo6;
   String zraiz6 = zsubsesion + "!" + znodo6 + ".";
   String ziterator6 = znodo6 + ":" + zsubsesion + "!" + znodo6;	
		// Metodo de carga del Meta4Object generico

	String zMETODOCARGA = zsubsesion + "!SSE_PRINCIPAL.CARGA";

   		// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
						
	String zAUTHOR = zraiz2 + "SCO_AUTHOR";
	String zCDDATE = zraiz2 + "SCO_CD_DATE";
	String zESTIMATEDDAYS = zraiz2 + "SCO_ESTIMATED_DAYS";
	String zESTIMATEDHOURS = zraiz2 + "SCO_ESTIMATED_HOURS";
	String zNUMBER = zraiz2 + "STD_NUMBER_OF_UNITS";
						
	String zSTDNMLENGUAGE = zcomun3 + "STD_N_LANGUAGE";
	String zSTDIDLENGUAGE = zcomun3 + "STD_ID_LANGUAGE";
		
	String zNMSESION = zraiz6 + "SCO_NM_SESSION";
	String zIDTRTBEVENTO = zraiz6 + "SCO_ID_TRTBREQ";
	String zDATE = zraiz6 + "SCO_DATE";
	String zDATE1 = zraiz6 + "SCO_DATE_1";

%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%= zMeta4Object %>" m4name="<%=zsubsesion%>"/>
<% 
try {
	M4Operations m = new M4Operations(request);
	m.setItem(zsubsesion,znodo2,"","SSE_ID",zid);
	}
	catch(Exception e){}
%>
<m4:exec m4method="<%=zMETODOCARGA%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo6%>"><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove6%>"/></m4:move>
<%
	int  zcount3  = 0;
	int  zcount3i  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
	    zcount3i = m.getCountInClient(znodo3,zsubsesion,znodo3);
	} catch(Exception e) {}
	String	zcount3v = String.valueOf(zcount3i);
	

	int  zcountsesiones_aux1  = 0;
	int  zcountsesiones_aux  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcountsesiones_aux1 = m.getCount(znodo6,zsubsesion,znodo6);
	} catch(Exception e) {}
	try {
	    M4Operations m = new M4Operations(request);
	    zcountsesiones_aux = m.getCountInClient(znodo6,zsubsesion,znodo6);
	} catch(Exception e) {}
	String	zcountsesiones = String.valueOf(zcountsesiones_aux);
%>

	<table width="100%">
	<tr>
			<td class="titulofuncional" colspan="2">Inscripci&oacute;n en multimedia</td>
	</tr>
		<tr>
			<td><img src="/iconos/noname_incripciones_formacion_99_100.gif" width="99"  height="100" alt="Inscripci&oacute;n en multimedia" /></td>
			<td>
			<div class="descripcionfuncional">Solicita una multimedia</div>
			<ul class="listaenlace"><li><a class="enlacefuncional" title = "Cat&aacute;logo de formaci&oacute;n" href="sse_g3_p3.jsp?estado=31">Cat&aacute;logo de formaci&oacute;n</a></li></ul>
			</td>
		</tr>
	</table>
	<table class="TablaEstados" cellspacing="0" width="100%">
	<tr class = "tablaestadosceldatitulo">
	<td colspan="3" align="center">	Descripci&oacute;n de la multimedia de formaci&oacute;n	</td>
	<td class="tablaestadosceldatitulo" align="right"><a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31"><img alt="Cat&aacute;logo de formaci&oacute;n" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
	</tr>				
	<tr class = "tablaestadosceldatitulo">	</tr>
	<tr>
	<td class = "fuentecampo" colspan="2">Tipo de formaci&oacute;n:</td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_NM_PRODUCT_TYPE" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;</td>
	</tr>
	<tr>
	<td class = "fuentecampo" colspan="2">Producto:</td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_NM_DEV_PRODUCT" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;</td>
	</tr>
	<tr>
	<td class = "fuentecampo" colspan="2">Multimedia:	</td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_NM_MULTIMEDIA" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;</td>
	</tr>
	</table>
	<table class = "TablaEstados" cellspacing = "0" width="100%">
	<tr>
	<td class = "fuentecampo" colspan="2">Autor:</td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_AUTHOR" htmlsafe="true"/></td>
	<td class = "fuentecampo" colspan="2">Fecha del cd: </td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_CD_DATE" htmlsafe="true"/></td>
	</tr>
	</table>
	<table class = "TablaEstados" cellspacing = "0" width="100%">
	<tr>	
	<td class = "fuentecampo" colspan="2">D&iacute;as estimados: </td>
	<td class = "fuentevalor" align="right">&nbsp;<m4:item m4name="SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_ESTIMATED_DAYS" htmlsafe="true"/></td>
	<td class = "fuentecampo" colspan="2" >Horas estimadas: </td>
	<td class = "fuentevalor" align="right">&nbsp;<m4:item m4name="SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_ESTIMATED_HOURS" htmlsafe="true"/></td>
	<td class = "fuentecampo" colspan="2">Unidades disponibles: </td>
	<td class = "fuentevalor" align="right">&nbsp;<m4:item m4name="SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_NUMBER_OF_UNITS" htmlsafe="true"/></td>
	</tr>
	</table>
	<table class = "TablaEstados" cellspacing = "0" width="100%">
	<tr>	
	<td class = "fuentecampo" width="25%">Objetivo formativo : </td>
	<td class = "fuentevalor" width="75%">&nbsp;<m4:item m4name="SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_EDUCAT_OBJ" htmlsafe="true"/></td>
	</tr>
	<tr>	
	<td class = "fuentecampo" width="25%">Ruta internet : </td>
	<td class = "fuentevalor" width="75%"><a href ="<m4:item m4name="SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_HTTP_PATH" htmlsafe="true"/>" ><m4:item m4name="SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_HTTP_PATH" htmlsafe="true"/></td>
	</tr>
		<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
		<input type="hidden" id="TAG" name="TAG" value="SSE_TRAINING_REQUEST" />
		<input type="hidden" id="REC" name="REC" value="" />
		<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
		<input type="hidden" id="NOD" name="NOD" value="SSE_TRAINING_REQUEST" />
		<input type="hidden" id="SCO_ID_TRTBREQ" name="SCO_ID_TRTBREQ" value="<%=zidtrtb%>" />
		<input type="hidden" id="SCO_NM_TRAINING" name="SCO_NM_TRAINING" value = "<m4:item m4name="SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_NM_MULTIMEDIA" htmlsafe="true"/>"/>
		<input type="hidden" id="SCO_NM_TYPE" name="SCO_NM_TYPE" value="Multimedia" />
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
				 <input class="fuenteformulario" type="text" name="SCO_SD_PREF" id="SCO_SD_PREF" title="Escribe la fecha de inicio" maxlength="10" size="10">
						<a href="javascript:m4calendario(m4objeto('SCO_SD_PREF','NombreFormulario'))">
						<img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="Selecciona la fecha de inicio"></img></input>
						<script type="text/javascript">
						var valorfec = m4fechahoy();
						m4valor("NombreFormulario","SCO_SD_PREF",valorfec,"set");
						</script>
				</td>
				<td class="fuentecampo">
				Fin preferido
				</td>    
				<td class="fuentecampo">
				 <input class="fuenteformulario" type="text" name="SCO_ED_PREF" id="SCO_ED_PREF" title="Escribe la fecha de fin" maxlength="10" size="10">
				        <a href="javascript:m4calendario(m4objeto('SCO_ED_PREF','NombreFormulario'))">
						<img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="Selecciona la fecha de fin"></img></input>

				</td>
				</tr>
				<tr>
				<td class="fuentecampo" colspan="1">Lenguaje</td>
				<td class="fuentevalor" colspan="3" >
					<select id="STD_ID_LANGUAGE" class="Fuenteformulario" name="STD_ID_LANGUAGE">
						<option value="01">Español</option>
							<m4:loop from="0" to="<%=new Integer(new Integer(zcount3v).intValue()-1).toString()%>">
						<option value="<m4:item m4name="<%=zSTDIDLENGUAGE%>" htmlsafe="true"/>">
							<m4:item m4name="<%=zSTDNMLENGUAGE%>" htmlsafe="true"/>
						</option>
					</m4:loop>
					</select>
				</td>
				</tr>
	</table>
	<table class = "tablaestados" width="100%" cellspacing="0" border="0">	
	<tr class = "tablaestadosceldatitulo">
	<td align="center" colspan="4" class = "fuenteboton">
	<a style="cursor:hand" href="javascript:comprobar()" title="Enviar">	
		<img alt="Enviar" title="Enviar" border="0" src="/iconos/icono_enviar_ess_36_36.gif" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
	</a>
	</td>					
	</table>
	</form>	

		<% 
		if (zcountsesiones_aux != 0 ) { 
		%>
		<div class="descripcionfuncional">
		Si quieres apuntarte a una sesi&oacute;n ya programada, seleccionala.<br />
		</div>
		<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="FormularioSesion" id="FormularioSesion">
		<input type="hidden" id="TAG" name="TAG" value="SSE_TRAINING_REQUEST" />
		<input type="hidden" id="REC" name="REC" value="" />
		<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
		<input type="hidden" id="NOD" name="NOD" value="SSE_TRAINING_REQUEST" />
		<input type="hidden" id="SCO_NM_TYPE" name="SCO_NM_TYPE" value="Sesión" />
		<input type="hidden" id="SCO_ID_TRTBREQ" name="SCO_ID_TRTBREQ"  />
		<input type="hidden" id="SCO_NM_TRAINING" name="SCO_NM_TRAINING" />
		<table class="TablaEstados" cellspacing="0" width="100%" >
		<tr>
		<td class = "tablaestadosceldatitulo" colspan="10" align="center">Sesiones programadas</td>
		</tr>
		<tr>
		<td  nowrap height=5></td>
		</tr>
		</table>
			<m4:iterator m4rows="<%=zcountsesiones%>" m4node="<%=ziterator6%>">
			<table class = "tablaestados" cellspacing="0" width="100%">
			<tr>
				<m4:param name="m4item0" value="<%=zNMSESION%>"/>
				<m4:param name="m4item1" value="<%=zIDTRTBEVENTO%>"/>
				<m4:param name="m4item2" value="<%=zDATE%>"/>
				<m4:param name="m4item3" value="<%=zDATE1%>"/>
				<tr>
				<td class = "fuentecampo" width=10%>Nombre:</td>
				<td class="fuentevalor" nowrap align=left width=33%>&nbsp;$M4ITEM0$</td>
				<td class = "fuentecampo" width=16%>Inicio:</td>
				<td class = "fuentevalor" width=15%>&nbsp;$M4ITEM2$ </td>
				<td class = "fuentecampo" width=13%>Fin:</td>
				<td class = "fuentevalor" width=15%>&nbsp;$M4ITEM3$</td>
				<td align="center" colspan="6" width=5% class = "fuenteboton">
					<a style="cursor:hand" href="javascript:solicitar_sesion('$M4ITEM0$','$M4ITEM1$')" title="Enviar">	
					<img alt="Enviar" title="Enviar" border="0" src="/iconos/icono_seleccionar_11_12.gif" />
					</a>
				</td>
				</tr>
				<table class = "tablaestados" cellspacing="0" width="100%">
				<tr>
			</tr>
			</table>	
			</m4:iterator>
			</table>
<% 
}
%>
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
	<m4:endpage/>
	</body>
</html>


