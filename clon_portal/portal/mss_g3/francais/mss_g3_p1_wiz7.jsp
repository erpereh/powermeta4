<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<!--- Plantilla base del ESS -->
<head>
	<title>Comp&eacute;tences</title>
	<!-- Hoja de Estilo general. Obligatorio -->
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	<!-- Librerias JavaScript. Obligatorio -->
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>
	<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
	

	<!-- Hay que anadir todas las comprobaciones que se deseen al ejecutar el Submit del Formulario -->
	<script type="text/javascript">
	var vOpcionActiva;
	
	function navegar(_valor,_url){
	var parametros = new Array("estado","OpcAct","ztipopersist");
			var valores = new Array("31",_valor,"wizx");
			m4navegar(_url, parametros, valores);
	}
	function cargarEscala()
	{
	    var val_extdkn = m4select("SCO_ID_EXTD_KN","NombreFormulario","value");
	    var txt_extdkn = m4select("SCO_ID_EXTD_KN","NombreFormulario","text");
	    if ((null==val_extdkn) || (''==val_extdkn)) return;		
			var competencia=val_extdkn;
			var NM_Comp = txt_extdkn;
			var URL="mss_g3/mss_g3_p1_wiz7.jsp";
			var parametros = new Array("NM_Comp","Compet","OpcAct","ztipopersist");
			var valores = new Array(NM_Comp,competencia,"7","wizx");
			m4navegar(URL, parametros, valores);		
	}
	
	function comprobar(_valor,_url)
	   {
	    var val_extdkn = m4select("SCO_ID_EXTD_KN","NombreFormulario","value");
	    var val_idlevel = m4select("SCO_ID_LEVEL","NombreFormulario","value");
		var ztipopersist="wiz7";
		var mensaje = "Les erreurs suivantes ont été détectées : " + "\n";
		var falta_valor=0;
		var peso = m4objeto("SCO_WEIGHT","NombreFormulario");
		v1 = new m4objvalidacion('_num',1,3,'','',false);
		v1.m4validar(m4objeto("SCO_TIME_NEEDED","NombreFormulario"));
		if ((null==val_extdkn) || ('0'==val_extdkn)){
			mensaje+=" * Compétence : champ obligatoire" + "\n";
			falta_valor=1;
		}
		if ((null==val_idlevel) || (''==val_idlevel)){
			mensaje+=" * Niveau : champ obligatoire" + "\n";
			falta_valor=1;
		}
		if (peso.value!="" )
		{
			if (v1.resultado == false){
			mensaje+=" * Importance relative : 3 caractères numériques au maximum" + "\n";
			falta_valor=1;
			}
			if (parseInt(peso.value)>100){
			mensaje+=" * L'importance relative ne peut pas excéder 100%" + "\n";
			falta_valor=1;
			}
		}
		if (1==falta_valor)alert(mensaje);
		if (0==falta_valor)
		{
			var vOpcionActiva;vOpcionActiva=_valor;
			var URL;URL=_url;
			var competencia= m4select("SCO_ID_EXTD_KN","NombreFormulario","value");
			var nivel= m4select("SCO_ID_LEVEL","NombreFormulario","value");
			
			var parametros = new Array("estado","Comp","Nivel","Peso","OpcAct","ztipopersist");
			var valores = new Array("31",competencia,nivel,peso.value,vOpcionActiva,ztipopersist);
			m4navegar(URL, parametros, valores);
		}}
	</script>
	<!-- Librerias Java. Obligatorio -->
	<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	

	<!-- Recuperacion de parametros. -->
	<%
	
		
	String ncomp=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NM_Comp");
	if ((ncomp==null)||(ncomp.equals(""))) ncomp=" ";
		
	
	%>
	
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
	
	<!-- Determina la fuente activa del wizard -->
	<%
	int OpcionActiva=7;
	%>

</head>
<body>
	<!-- Encabezado -->
<div id="capa_link" style="position:absolute; left:1%; top:3%; width:20%; height:0%; z-index:1">
	<%@ include file="../../mss_g3/francais/mss_g3_links_wizzard.jsp" %>
	</div>
	<%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
<div id="capa_cuerpo" style="position:relative; left:21%; top:1%; width:78%; z-index:2">

<!-- **************************************************************************-->
<!-- Carga del Meta4Object. El nombre de la Tarea deberia ser el mismo nombre que el del meta4object que se carga...o si se carga mas de uno el del principal. Antes de nada se insertan las importacion de clases -->

<!-- Definicion del Meta4Object -->
	<%
		String zsubsesion = "SSM_VACANT";
		String zmeta4object = "SSM_VACANT";
		String znodo1 = "SSM_NOW_LEVEL_V";
		String znodo2 = "SSM_SCALE_LEVEL_V";
		String znodo3 = "SSM_R_JOB_POST_COMP";
		String ztipocarga = "wiz7";       

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

		String zmetodocarga = zsubsesion + "!SSM_VACANT.CARGA";
		String zmetodopersist = zsubsesion + "!SSM_VACANT.GRABAR";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

		String zSCOIDEXTDKN = zraiz1 + "SCO_ID_EXTD_KN";
		String zSCONMEXTDKN = zraiz1 + "SCO_NM_EXTD_KN";
		
		String zSCOIDLEVEL = zraiz2 + "SCO_ID_LEVEL";
		String zSCONMLEVEL = zraiz2 + "SCO_NM_LEVEL";    
		
		String zCONOCIMIENTO = zraiz3 + "CONOCIMIENTO";
		String zIDCONOCIMIENTO = zraiz3 + "SCO_ID_COMPETENCY";
		String zNIVEL = zraiz3 + "NIVEL";
		String zPESO = zraiz3 + "PESO";
		
		
		
	%>
	
	<!-- **************************************************************************-->
	<!-- Seguridad -->
	<m4:startpage m4task="<%=zsubsesion%>"/>
	<!-- Comienza la transaccion -->
	<m4:beginjob/>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
	<%@ include file="../../mss_g3/francais/persist.jsp" %>
	
	<m4:exec m4method="<%=zmetodopersist%>"><m4:param name="TIPO_GRABAR" value="<%=ztipopersist%>"/></m4:exec>
	
	<%
	
	String wpeso=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Peso");
	if ((wpeso==null)||(wpeso.equals(""))) wpeso="";
	String competencia=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Compet");
	if ((competencia==null)||(competencia.equals(""))) competencia="0";
		
		try {
	    
			M4Operations m = new M4Operations(request);
			m.setItem(zsubsesion,znodo2,"","COMPETENCIA",competencia);
			} catch(Exception e) {}
	%>		
		
	
	<% ztipocarga="wiz7"; %>
	<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
	
	<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
	<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
	<%
	String zFilterKnEss="If SCO_CHK_NO_VIS_MSS = 0 then return(1)";
	%>
	<m4:filter m4name="SSM_VACANT!SSM_NOW_LEVEL_V.Filter1"  m4filter="<%=zFilterKnEss%>" />
	
	<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
	<m4:endjob/>
	
	<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
	<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
	<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
		
	
	<%
		// Son necesarios los 2 outputdef
		
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
	<!-- Tabla de Descripcion. Obligatoria. Siempre una 3*2: un titulo de la pagina + un icono + una descripcion + opciones -->
	<table border="0" width="100%">
		<tr>
		<!-- Titulo funcional de la pagina -->
			<td class="titulofuncional" colspan="4">
				Comp&eacute;tences
			</td>
		</tr>
		<tr>
		    <td><img alt="Demandez une offre d'emploi" src="/iconos/noname_solicitar_vacantes_210_100.gif" width="100" height="100" /></td>
			<td><div class="descripcionfuncional">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ajoutez les comp&eacute;tences requises pour l'offre.</div></td>
		</tr>
	</table>
	<!-- Fin de Tabla de descripcion. -->
	
	<!-- Tabla de Formulario -->
	<form action="javascript:comprobar()" method="get" name="NombreFormulario" id="NombreFormulario">
		<table class = "tablaestados" width="100%" cellspacing="0" border="0">
			<tr class = "tablaestadosceldatitulo">
				<td colspan="3">
				Comp&eacute;tences	
				</td>
			</tr>
			<tr>
				<td class = "fuentecampo" colspan="1" >&nbsp;*&nbsp; Comp&eacute;tence</td>
				<td class = "fuentecampo" colspan="2">
					<select id="SCO_ID_EXTD_KN" class="fuenteformulario200" name="SCO_ID_EXTD_KN" title="S&eacute;lectionnez une comp&eacute;tence" onchange="javascript:cargarEscala()" >
	   				<option value="<%=competencia%>"><%=ncomp%></option>
	   				<m4:iterator m4rows="*" m4node="<%=ziterator1%>">
							<m4:param name="m4item0" value="<%=zSCOIDEXTDKN%>"/>
							<m4:param name="m4item1" value="<%=zSCONMEXTDKN%>"/>
						<option value="$M4ITEM0$">
							$M4ITEM1$
						</option>
					</m4:iterator>
	   				</select>
	   			</td>
		
			</tr>
			<tr>
				<td class = "fuentecampo" colspan="1">&nbsp;*&nbsp;Niveau</td>
				<td class="fuentevalor" colspan="2">
					<select id="SCO_ID_LEVEL" class="fuenteformulario200" name="SCO_ID_LEVEL" title="S&eacute;lectionnez un niveau" >
					<% if (zcount2==0) {%> 
					<option></option>
					<%}%>
					<m4:iterator m4rows="*" m4node="<%=ziterator2%>">
							<m4:param name="m4item0" value="<%=zSCOIDLEVEL%>"/>
							<m4:param name="m4item1" value="<%=zSCONMLEVEL%>"/>
						<option value="$M4ITEM0$">
							$M4ITEM1$
						</option>
					</m4:iterator>
					</select>
				</td>
			</tr>
			<tr>
				<td class="fuentecampo">&nbsp;Importance relative</td>
				<td class="fuentecampo"><input class="fuenteformulario" type="text" id="SCO_WEIGHT" name="SCO_TIME_NEEDED" size="3" maxlength="3" title="Indiquez la dur&eacute;e relative consacr&eacute;e &agrave; la t&acirc;che"  value ="" />&nbsp;%</td>
			</tr>
			<tr>
				<td align="center" colspan="4" class="fuenteboton">
				<!-- Y se anade el boton de envio a la derecha del formulario -->
					<a href="javascript:navegar(6,'mss_g3/mss_g3_p1_wiz6.jsp');" ><img alt="Pr&eacute;c&eacute;dente" title="Pr&eacute;c&eacute;dente" src="/iconos/icono_anterior_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
					<a href="javascript:comprobar(7,'mss_g3/mss_g3_p1_wiz7.jsp');" ><img alt="Ajouter la comp&eacute;tence &agrave; l'offre" title="Ajouter la comp&eacute;tence &agrave; l'offre" src="/iconos/icono_aceptar_mss_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
					<a href="javascript:navegar(1,'mss_g3/mss_g3_persist_wiz1.jsp');" ><img alt="Accepter l'offre" title="Accepter l'offre" src="/iconos/icono_guardar_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
				</td>
			</tr>
			</table>
			<%
			if (zcount3 > 0){
			%>
			<table class="tablaestados" width="100%" cellspacing="0">
			<tr class = "tablaestadosceldatitulo">
				<td  colspan="1">Comp&eacute;tence
				</td>
				<td  colspan="1">Niveau
				</td>
				<td  colspan="1">Importance relative
				</td>
			</tr>
<%
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
%>

<m4:loop from="0" to="<%=new Integer(new Integer(zcounti3).intValue()-1).toString()%>">
<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;

if (zcontrol==0){%>
 <tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zCONOCIMIENTO%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zNIVEL%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zPESO%>" htmlsafe="true"/>%</td>
	<td class="fuentevalor"><a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz7.jsp?id_enl=<m4:item m4name="<%=zIDCONOCIMIENTO%>" htmlsafe="true"/>"><img align="right" title="Supprimer l'enregistrement" alt="Supprimer l'enregistrement" border="0" src="/iconos/icono_borrar_16_16.gif" height="16" width="16" onmouseover="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<%}else{%>
<tr>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zCONOCIMIENTO%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zNIVEL%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zPESO%>" htmlsafe="true"/></td>
	<td class="fuentevalor2"><a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz7.jsp?id_enl=<m4:item m4name="<%=zIDCONOCIMIENTO%>" htmlsafe="true"/>"><img align="right" title="Supprimer l'enregistrement" alt="Supprimer l'enregistrement" border="0" src="/iconos/icono_borrar_16_16.gif" height="16" width="16" onmouseover="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>	
</tr>
 <%}%>
</m4:loop>
</table>
<%}	%>
</form>
	<%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>


