<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>T&acirc;ches</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<script type="text/javascript">
var vOpcionActiva;
function navegar(_valor,_url){
	var parametros = new Array("estado","OpcAct","ztipopersist");
			var valores = new Array("31",_valor,"wizx");
			m4navegar(_url, parametros, valores);
	}
function comprobar(_valor,_url){
	var ztipopersist="wiz5";
	var mensaje = "Les erreurs suivantes ont été détectées : " + "\n"
	var falta_valor = 0;
	var val_duty = m4select(m4objeto("SCO_ID_DUTY","NombreFormulario"),"value");
	var val_jobfrec = m4select(m4objeto("SCO_ID_JOB_FREQUENCY","NombreFormulario"),"value");
	
	tiempo = m4objeto("SCO_TIME_NEEDED","NombreFormulario")

	if (parseInt(tiempo.value)>100){
		mensaje+=" * La durée consacrée ne peut pas excéder 100%" + "\n";
		falta_valor=1;
	}
	
	if ((null==val_duty) || (''==val_duty)){
		mensaje+=" * Tâche : champ obligatoire" + "\n";
		falta_valor=1;
	}
	if (falta_valor==1){
		alert(mensaje);
		falta_valor=0;
		return}
	if (0==falta_valor){
		var vOpcionActiva;
		var URL;
		vOpcionActiva=_valor;
		URL=_url;
		vObligacion = m4select(m4objeto("SCO_ID_DUTY","NombreFormulario"),"value");
		vTiempoN = m4valor("NombreFormulario","SCO_TIME_NEEDED","","get");
		vFrecuencia = m4select(m4objeto("SCO_ID_JOB_FREQUENCY","NombreFormulario"),"value");
		var parametros = new Array("estado","Obligacion","TimeNeed","Freq","OpcAct","ztipopersist");
		var valores = new Array("31",vObligacion,vTiempoN,vFrecuencia,vOpcionActiva,ztipopersist);
		m4navegar(URL, parametros, valores);
	}
}
</script>
<%

	
	// estado:	Determina la barra de localizacion.
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
	if ((zinicios==null)||(zinicios.equals(""))){
		zinicios = "1";
	}
	
	// Determina la fuente activa del wizard
	int OpcionActiva=5;

%>
</head>
<body>
<div id="capa_link" style="position:absolute; left:1%; top:3%; width:20%; height:0%; z-index:1">
	<%@ include file="../../mss_g3/francais/mss_g3_links_wizzard.jsp" %>
</div>
<%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
<div id="capa_cuerpo" style="position:relative; left:21%; top:1%; width:78%; z-index:2">
<%
		String zsubsesion = "SSM_VACANT";
		String zmeta4object = "SSM_VACANT";
		String znodo1 = "SSM_DUTIES";
		String znodo2 = "SSM_X_FRECUENCY";
		String znodo3 = "SSM_R_JOB_POST_DUT";
		String ztipocarga = "wiz5";    

/// Se parametriza el tamano que se desea para la ventana

		String zventanas = "10";
		int zvuelta = 5;

// No se modifica en general.

		String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
		String zlectura1 = zsubsesion + "!" + znodo1;
		String zraiz1 = zsubsesion + "!" + znodo1 + ".";
		String zmove1 =znodo1 + ":" +  znodo1 + "[FIRST]";
		String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;
		
		String zoutputdef2= zsubsesion + "!" + znodo2 + "[*]";
		String zlectura2 = zsubsesion + "!" + znodo2;
		String zraiz2 = zsubsesion + "!" + znodo2 + ".";
		String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
		String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;
		
		String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
		String zlectura3 = zsubsesion + "!" + znodo3;
		String zraiz3a = zsubsesion + "!" + znodo3 + ".";
		String zraiz3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
		String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
		String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;
		
// Metodo de carga del Meta4Object generico

		String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_VACANT.CARGA";
		String zmetodopersist = "GRABAR:" + zsubsesion + "!SSM_VACANT.GRABAR";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

		String zSCOIDDUTY = zraiz1 + "SCO_ID_DUTY";
		String zSCONMDUTY = zraiz1 + "SCO_NM_DUTY";
		
		String zSCOIDJOBFREQUENCY = zraiz2 + "SCO_ID_JOB_FREQUENCY";
		String zSCONFREQUENCY = zraiz2 + "SCO_N_FREQUENCY";
		
		String zFRECUENCIA = zraiz3 + "FRECUENCIA";
		String zOBLIGACION = zraiz3 + "OBLIGACION";
		String zTIEMPOHORAS = zraiz3 + "TIEMPO_HORAS";
		String zSTDIDDUTY = zraiz3 + "STD_ID_DUTY";
		
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<%@ include file="../../mss_g3/francais/persist.jsp" %>
<m4:exec m4method="<%=zmetodopersist%>"><m4:param name="TIPO_GRABAR" value="<%=ztipopersist%>"/></m4:exec>	
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
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
<table width="100%">
<tr>
	<td class="titulofuncional" colspan="3">&nbsp;T&acirc;ches</td>
</tr>
<tr>
    <td><img alt="Demandez une offre d'emploi" src="/iconos/noname_solicitar_vacantes_210_100.gif" width="100" height="100" /></td>
	<td><div class="descripcionfuncional">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indiquez les t&acirc;ches concern&eacute;ées par
l'emploi offert. N'oubliez pas d'ajouter les informations &agrave; la description de l'offre (bouton du m&ecirc;me nom) avant de changer de page.</div></td>
</tr>
</table>
<form action="javascript:comprobar()" method="get" name="NombreFormulario" id="NombreFormulario">
<table class="tablaestados" width="100%" cellspacing="0">
<tr>
	<td class="tablaestadosceldatitulo" colspan="2">&nbsp;T&acirc;ches</td>
</tr>
<tr>
	<td class="fuentecampo">&nbsp;*&nbsp; T&acirc;che</td>
	<td class="fuentecampo">
		<select id="SCO_ID_DUTY" name="SCO_ID_DUTY" title="S&eacute;lectionnez une t&acirc;che" class="fuenteformulario">
			<option value=""></option>
			<m4:iterator m4rows="*" m4node="<%=ziterator1%>">
			<m4:param name="m4item0" value="<%=zSCOIDDUTY%>"/>
			<m4:param name="m4item1" value="<%=zSCONMDUTY%>"/>
			<option value="$M4ITEM0$">$M4ITEM1$</option>
			</m4:iterator>
	   	</select>
	</td>
</tr>
<tr>
	<td class="fuentecampo">&nbsp;Dur&eacute;e consacr&eacute;e</td>
	<td class="fuentecampo"><input class="fuenteformulario" type="text" id="SCO_TIME_NEEDED" name="SCO_TIME_NEEDED" size="3" maxlength="3" title="Indiquez la dur&eacute;e relative consacr&eacute;e &agrave; la t&acirc;che"  value ="" /></td>
</tr>
<tr>
	<td class="fuentecampo">&nbsp;P&eacute;riodicit&eacute;</td>
	<td class="fuentecampo">
		<select id="SCO_ID_JOB_FREQUENCY" name="SCO_ID_JOB_FREQUENCY" title="S&eacute;lectionnez une p&eacute;riodicit&eacute;" class="fuenteformulario" >
		<option value=""></option>
		<m4:iterator m4rows="*" m4node="<%=ziterator2%>">
		<m4:param name="m4item0" value="<%=zSCOIDJOBFREQUENCY%>"/>
		<m4:param name="m4item1" value="<%=zSCONFREQUENCY%>"/>
		<option value="$M4ITEM0$">$M4ITEM1$</option>
		</m4:iterator>
		</select>
	</td>
</tr>
<tr>
	<td align="center" class="fuenteboton" colspan="2">
		<a href="javascript:navegar(4,'mss_g3/mss_g3_p1_wiz4.jsp');" ><img alt="Pr&eacute;c&eacute;dente" title="Pr&eacute;c&eacute;dente" src="/iconos/icono_anterior_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
		<a href="javascript:comprobar(5,'mss_g3/mss_g3_p1_wiz5.jsp');" ><img alt="Ajouter la t&acirc;che &agrave; l'offre" title="Ajouter la t&acirc;che &agrave; l'offre" src="/iconos/icono_aceptar_mss_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
		<a href="javascript:navegar(6,'mss_g3/mss_g3_p1_wiz6.jsp');" ><img alt="Suivante" title="Suivante" src="/iconos/icono_siguiente_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
	</td>
</tr>
</table>

<%	 
if (zcount3 > 0){
%>
<table class="tablaestados" width="100%" cellspacing="0">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;T&acirc;che</td>
	<td class="tablaestadosceldatitulo">&nbsp;Dur&eacute;e</td>
	<td class="tablaestadosceldatitulo" colspan="2">&nbsp;P&eacute;riodicit&eacute;</td>
</tr>
<%
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
%>

<m4:loop from="0" to="<%=new Integer(new Integer(zcounti3).intValue()-1).toString()%>">
<%	zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;

if (zcontrol==0){%>
<tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zOBLIGACION%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zTIEMPOHORAS%>" htmlsafe="true"/>&nbsp;%</td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zFRECUENCIA%>" htmlsafe="true"/></td>
	<td class="fuentevalor"><a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz5.jsp?id_enl=<m4:item m4name="<%=zSTDIDDUTY%>" htmlsafe="true"/>"><img align="right" title="Supprimer l'enregistrement" alt="Supprimer l'enregistrement" src="/iconos/icono_borrar_16_16.gif" height="16" width="16" onmouseover="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<%}else{%>
<tr>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zOBLIGACION%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zTIEMPOHORAS%>" htmlsafe="true"/>&nbsp;%</td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zFRECUENCIA%>" htmlsafe="true"/></td>
	<td class="fuentevalor2"><a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz5.jsp?id_enl=<m4:item m4name="<%=zSTDIDDUTY%>" htmlsafe="true"/>"><img align="right" title="Supprimer l'enregistrement" alt="Supprimer l'enregistrement" src="/iconos/icono_borrar_16_16.gif" height="16" width="16" onmouseover="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
 <%}%>
</m4:loop>
<%
}
%>
</table>
</form>
<%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>


