<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Experi&ecirc;ncia profissional</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<script type="text/javascript">
var vOpcionActiva;
function controlFiltro()
{
	var Ftext = m4select(m4objeto("STD_ID_JOB_INT_FAM","NombreFormulario"),"text");
	var Fval = m4select(m4objeto("STD_ID_JOB_INT_FAM","NombreFormulario"),"value");
	var parametros = new Array("estado","Fval","Ftext","OpcAct","ztipopersist");
	var valores    = new Array("31",Fval,Ftext,"2","wixz");
	m4navegar("mss_g3/mss_g3_p1_wiz2.jsp", parametros, valores);
	
}
function navegar(_valor,_url){
	var parametros = new Array("estado","OpcAct","ztipopersist");
	var valores = new Array("31",_valor,"wizx");
	m4navegar(_url, parametros, valores);
}
function comprobar(_valor,_url){
	var ztipopersist="wiz2";
	var falta_tiempo=0;
	var vRequerido="0";
	var mensaje = "Foram detectados os seguintes erros: " + "\n"
	var falta_valor=0;
	var scocheck = m4objeto("SCO_CHECK","NombreFormulario");
	v1 = new m4objvalidacion('_num',1,2,'','',false);
	v1.m4validar(m4objeto("SCO_MIN_PERIOD","NombreFormulario"));
	var temp = m4objeto("SCO_MIN_PERIOD","NombreFormulario")
	if (v1.resultado==false && temp.value != ''){
		mensaje+="* Período mínimo de tempo um limite de 2 caracteres numéricos";
		falta_valor=1;
	}
	if (scocheck.checked){
		vRequerido="1";	
	}
	if (falta_valor ==1) {alert(mensaje);}
	if (0==falta_valor){
		var vOpcionActiva;
		var URL;
		vOpcionActiva=_valor;
		URL=_url;
		vPuesto= m4select(m4objeto("STD_ID_JOB_CODE","NombreFormulario"),"value");
		vFamilia= m4select(m4objeto("STD_ID_JOB_INT_FAM","NombreFormulario"),"value");
		vSector= m4select(m4objeto("STD_ID_SECTOR","NombreFormulario"),"value");
		vUnitTime= m4select(m4objeto("SCO_ID_TIME_UNIT","NombreFormulario"),"value");
		vMinPeriodTime= m4valor("NombreFormulario","SCO_MIN_PERIOD","","get");
		vPais= m4select(m4objeto("STD_ID_COUNTRY","NombreFormulario"),"value");
		var parametros = new Array("estado","Job","Fam","Sec","UTime","PMTime","Pais","Req","OpcAct","ztipopersist");
		var valores = new Array("31",vPuesto,vFamilia,vSector,vUnitTime,vMinPeriodTime,vPais,vRequerido,vOpcionActiva,ztipopersist);
		m4navegar(URL, parametros, valores);
	}
}
</script>
<%
	
	// estado:	Determina la barra de localizacion.

	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
	String zfiltroval = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Fval");
	String zfiltrotext = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Ftext");
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
	if ((zinicios==null)||(zinicios.equals(""))){
		zinicios = "1";
	}
	if ((zfiltroval==null)||(zfiltroval.equals(""))){
		zfiltroval = "ALL";
	}
	if ((zfiltrotext==null)||(zfiltrotext.equals(""))){
		zfiltrotext = "Todos os postos";
	}
	
	
	int OpcionActiva=2;
	
	
%>
</head>
<body>
<div id="capa_link" style="position:absolute; left:1%; top:3%; width:20%; height:0%; z-index:1">
	<%@ include file="../../mss_g3/portugues/mss_g3_links_wizzard.jsp" %>
</div>
<%@ include file="../../mss_generico/portugues/mssgenerico_menusup.jsp" %>
<div id="capa_cuerpo" style="position:relative; left:21%; top:1%; width:78%; z-index:2">

<%
		String zsubsesion = "SSM_VACANT";
		String zmeta4object = "SSM_VACANT";
		String znodo1 = "SSM_JOB";
		String znodo2 = "SSM_X_TIME_UNIT";
		String znodo3 = "SSM_LU_JOB_INTERNAL_FAMILY";
		String znodo4 = "SSM_LU_JOB_SECTOR";
		String znodo5 = "SSM_COUNTRY";
		String znodo6 = "SSM_JOB_POST_PREV_JOBS";
		
		String ztipocarga = "wiz2";
				   

/// Se parametriza el tamano que se desea para la ventana

		String zventanas = "10";
		int zvuelta = 5;

// No se modifica en general.

		String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
		String zlectura1 = zsubsesion + "!" + znodo1;
		String zraiz1 = zsubsesion + "!" + znodo1 + ".";
		String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";
		String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;
		
		String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
		String zlectura2 = zsubsesion + "!" + znodo2;
		String zraiz2 = zsubsesion + "!" + znodo2 + ".";
		String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";   
		String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;
		
		String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
		String zlectura3 = zsubsesion + "!" + znodo3;
		String zraiz3 = zsubsesion + "!" + znodo3 + ".";
		String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
		String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;
		
		String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
		String zlectura4 = zsubsesion + "!" + znodo4;
		String zraiz4 = zsubsesion + "!" + znodo4 + ".";
		String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";
		String ziterator4 = znodo4 + ":" + zsubsesion + "!" + znodo4;
		
		String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
		String zlectura5 = zsubsesion + "!" + znodo5;
		String zraiz5 = zsubsesion + "!" + znodo5 + ".";
		String zmove5 = znodo5 + ":" + znodo5 + "[FIRST]";
		String ziterator5 = znodo5 + ":" + zsubsesion + "!" + znodo5;
		
		String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";
		String zlectura6 = zsubsesion + "!" + znodo6;
		String zraiz6a= zsubsesion + "!" + znodo6 + ".";
		String zraiz6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&VAR.m4lix]" + ".";
		String zmove6 = znodo6 + ":" + znodo6 + "[FIRST]";
		String ziterator6 = znodo6 + ":" + zsubsesion + "!" + znodo6;
		
// Metodo de carga del Meta4Object generico

		String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_VACANT.CARGA";
		String zmetodopersist = "GRABAR:" + zsubsesion + "!SSM_VACANT.GRABAR";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

		String zSTDIDJOBCODE = zraiz1 + "STD_ID_JOB_CODE";
		String zSTDNJOBCODE = zraiz1 + "STD_N_JOB_CODE";
		
		String zSCOIDTIMEUNIT = zraiz2 + "SCO_ID_TIME_UNIT";
		String zSCONMTIMEUNIT = zraiz2 + "SCO_NM_TIME_UNIT";
		
		String zSTDIDJOBINTFAM = zraiz3 + "STD_ID_JOB_INT_FAM";
		String zSTDNJOBINTFAM = zraiz3 + "STD_N_JOB_INT_FAM";
		
		String zSTDIDSECTOR = zraiz4 + "STD_ID_SECTOR";
		String zSTDNSECTOR = zraiz4 + "STD_N_SECTOR";
		
		String zSTDIDCOUNTRY = zraiz5 + "STD_ID_COUNTRY";
		String zSTDNCOUNTRY = zraiz5 + "STD_N_COUNTRY";
		
		String zFAMILIA = zraiz6 + "FAMILIA";
		String zSECTOR = zraiz6 + "SECTOR";
		String zUNIDADTIEMPO = zraiz6 + "UNIDAD_TIEMPO";
		String zPUESTO = zraiz6 + "PUESTO";
		String zREQUERIDO = zraiz6 + "REQUERIDO";
		String zPAIS = zraiz6 + "PAIS";
		String zSCOMINPERIOD = zraiz6 + "SCO_MIN_PERIOD";
		String zSTDORPROFBACKG = zraiz6 + "STD_OR_PROF_BACKG";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<%@ include file="../../mss_g3/portugues/persist.jsp" %>
<m4:exec m4method="<%=zmetodopersist%>"><m4:param name="TIPO_GRABAR" value="<%=ztipopersist%>"/></m4:exec>

<% try {
		M4Operations m = new M4Operations(request);
		m.setItem(zsubsesion,znodo1,"","FILTRO_FAM",zfiltroval);
} catch(Exception e) {} %>

<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo6%>"><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove5%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove6%>"/></m4:move>
<%
	int  zcount6 = 0;
	int  zcounti6 = 0;	
	try {
		M4Operations m = new M4Operations(request);
		zcount6 = m.getCount(znodo6,zsubsesion,znodo6);
	} catch(Exception e) {}
	try {
		M4Operations m = new M4Operations(request);
		zcounti6 = m.getCountInClient(znodo6,zsubsesion,znodo6);
	} catch(Exception e) {}
	String	zcountv6 = String.valueOf(zcounti6);

%>
<table width="100%">
<tr>
	<td class="titulofuncional" colspan="3">&nbsp;Experi&ecirc;ncia profissional</td>
</tr>
<tr>
     <td><img alt="Solicitar uma vaga" src="/iconos/noname_solicitar_vacantes_210_100.gif" width="100" height="100" /></td>
	<td>&nbsp;</td>
	<td><div class="descripcionfuncional">Adicionar a experi&ecirc;ncia profissional necess&aacute;ria para a vaga. Certifique-se de que adiciona os dados antes de concluir o preenchimento do formul&aacute;rio.</div></td>
</tr>
</table>
<form action="javascript:comprobar()" method="get" name="NombreFormulario" id="NombreFormulario">
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
	<td colspan="3">&nbsp;Experi&ecirc;ncia profissional</td>
</tr>
<tr>
	<td class="fuentecampo">&nbsp;Grupo</td>
	<td class="fuentecampo">
		<select id="STD_ID_JOB_INT_FAM" class="fuenteformulario200" name="STD_ID_JOB_INT_FAM" title="Seleccionar grupo" onchange="javascript:controlFiltro()" >				
			<option value="<%=zfiltroval%>"><%=zfiltrotext%></option>
			<option value="ALL">Todos os postos</option>
			<m4:iterator m4rows="*" m4node="<%=ziterator3%>">
			<m4:param name="m4item0" value="<%=zSTDIDJOBINTFAM%>"/>
			<m4:param name="m4item1" value="<%=zSTDNJOBINTFAM%>"/>
			<option value="$M4ITEM0$">$M4ITEM1$</option>
			</m4:iterator>
	   	</select>
	</td>
	<td class="fuentecampo"><input id="SCO_CHECK" type="checkbox" name="SCO_CHECK" />&nbsp;Obrigat&oacute;rio</td>
</tr>
<tr>
	<td class="fuentecampo">&nbsp;Sector</td>
	<td class="fuentecampo" colspan="2">
		<select id="STD_ID_SECTOR" class="fuenteformulario200" name="STD_ID_SECTOR" title="Seleccionar sector" >
			<option></option>
			<m4:iterator m4rows="*" m4node="<%=ziterator4%>">
			<m4:param name="m4item0" value="<%=zSTDIDSECTOR%>"/>
			<m4:param name="m4item1" value="<%=zSTDNSECTOR%>"/>
			<option value="$M4ITEM0$">$M4ITEM1$</option>
			</m4:iterator>
	   	</select>
	</td>
</tr>
<tr>
	<td class="fuentecampo">&nbsp;Posto</td>
	<td class="fuentecampo" colspan="2">
		<select id="STD_ID_JOB_CODE" class="fuenteformulario200" name="STD_ID_JOB_CODE" title="Seleccionar posto">
			<option></option>
			<m4:iterator m4rows="*" m4node="<%=ziterator1%>">
			<m4:param name="m4item0" value="<%=zSTDIDJOBCODE%>"/>
			<m4:param name="m4item1" value="<%=zSTDNJOBCODE%>"/>
			<option value="$M4ITEM0$">$M4ITEM1$</option>
			</m4:iterator>
	   	</select>
	</td>
</tr>
<tr>
	<td class="fuentecampo">&nbsp;Pa&iacute;s</td>
	<td class="fuentecampo" colspan="2">
		<select id="STD_ID_COUNTRY" class="fuenteformulario200" name="STD_ID_COUNTRY" title="Seleccionar pa&iacute;s">
			<option></option>
			<m4:iterator m4rows="*" m4node="<%=ziterator5%>">
			<m4:param name="m4item0" value="<%=zSTDIDCOUNTRY%>"/>
			<m4:param name="m4item1" value="<%=zSTDNCOUNTRY%>"/>
			<option value="$M4ITEM0$">$M4ITEM1$</option>
			</m4:iterator>
	   	</select>
	</td>
</tr>

<tr>
	<td class="fuentecampo">&nbsp;Per&iacute;odo m&iacute;nimo</td>
	<td class="fuentecampo" colspan="2">
		<input class="fuenteformulario" type="text" id="SCO_MIN_PERIOD" name="SCO_MIN_PERIOD" size="3" maxlength="2" title="Escrever o per&iacute;odo m&iacute;nimo"  />
		<select id="SCO_ID_TIME_UNIT" class="fuenteformulario100" name="SCO_ID_TIME_UNIT" title="Unidade de tempo">
			<option value="02">meses</option>
			<m4:iterator m4rows="*" m4node="<%=ziterator2%>">
			<m4:param name="m4item0" value="<%=zSCOIDTIMEUNIT%>"/>
			<m4:param name="m4item1" value="<%=zSCONMTIMEUNIT%>"/>
			<option value="$M4ITEM0$">$M4ITEM1$</option>
			</m4:iterator>
	   	</select>
	</td>
</tr>
<tr>
	<td class="fuenteboton" align="center" colspan="3">
		<a href="javascript:navegar(1,'mss_g3/mss_g3_p1_wiz1.jsp');" ><img alt="Anterior" title="Anterior" src="/iconos/icono_anterior_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
		<a href="javascript:comprobar(2,'mss_g3/mss_g3_p1_wiz2.jsp');" ><img alt="Adicionar experi&ecirc;ncia profissional &agrave; vaga" title="Adicionar experi&ecirc;ncia profissional &agrave; vaga" src="/iconos/icono_aceptar_mss_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
		<a href="javascript:navegar(3,'mss_g3/mss_g3_p1_wiz3.jsp');" ><img alt="Seguinte" title="Seguinte" src="/iconos/icono_siguiente_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>			
	</td>
</tr>
</table>
<%	 
if (zcount6 > 0) {
%>
<table class="tablaestados" width="100%" cellspacing="0">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Grupo</td>
	<td class="tablaestadosceldatitulo">&nbsp;Sector</td>
	<td class="tablaestadosceldatitulo">&nbsp;Posto</td>
	<td class="tablaestadosceldatitulo">&nbsp;Per&iacute;odo m&iacute;n.</td>
	<td class="tablaestadosceldatitulo">&nbsp;Pa&iacute;s</td>
	<td class="tablaestadosceldatitulo" colspan="2">&nbsp;Obrigat&oacute;rio</td>
</tr>

<%
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
%>

<m4:loop from="0" to="<%=new Integer(new Integer(zcounti6).intValue()-1).toString()%>">
<%  zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;

if (zcontrol==0){%>
 <tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zFAMILIA%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSECTOR%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zPUESTO%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCOMINPERIOD%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zUNIDADTIEMPO%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zPAIS%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zREQUERIDO%>" htmlsafe="true"/></td>
	<td class="fuentevalor"><a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz2.jsp?id_enl=<m4:item m4name="<%=zSTDORPROFBACKG%>" htmlsafe="true"/>"><img alt="Eliminar registo" title="Eliminar registo" align="right" src="/iconos/icono_borrar_16_16.gif" height="16" width="16" onmouseover="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
 
 <% } else { %>
 <tr>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zFAMILIA%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSECTOR%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zPUESTO%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCOMINPERIOD%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zUNIDADTIEMPO%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zPAIS%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zREQUERIDO%>" htmlsafe="true"/></td>
	<td class="fuentevalor2"><a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz2.jsp?id_enl=<m4:item m4name="<%=zSTDORPROFBACKG%>" htmlsafe="true"/>"><img alt="Eliminar registo" title="Eliminar registo" align="right" src="/iconos/icono_borrar_16_16.gif" height="16" width="16" onmouseover="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
 <%}%>
</m4:loop>
</table>
<%
}
%>
</form>
<%@ include file="../../mss_generico/portugues/mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>


