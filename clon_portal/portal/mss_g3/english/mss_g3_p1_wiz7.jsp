<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<!-- ESS Base Template -->
<head>
	<title>Vacancy Extended Knowledge</title>
	<!-- General Style Sheet. Required-->
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	<!-- JavaScript libraries. Required-->
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../mss_generico/english/menu_mss.jsp" %>
	<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
	

	<!-- Add all of the checks that you want when executing the Submit on the Form -->
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
		var mensaje = "The following errors were found: " + "\n";
		var falta_valor=0;
		var peso = m4objeto("SCO_WEIGHT","NombreFormulario");
		v1 = new m4objvalidacion('_num',1,3,'','',false);
		v1.m4validar(m4objeto("SCO_TIME_NEEDED","NombreFormulario"));
		if ((null==val_extdkn) || ('0'==val_extdkn)){
			mensaje+=" * Extended Knowledge, required field" + "\n";
			falta_valor=1;
		}
		if ((null==val_idlevel) || (''==val_idlevel)){
			mensaje+=" * Level, required field" + "\n";
			falta_valor=1;
		}
		if (peso.value!="" )
		{
			if (v1.resultado == false){
			mensaje+=" * Weight, maximum 3 numerical characters" + "\n";
			falta_valor=1;
			}
			if (parseInt(peso.value)>100){
			mensaje+=" * The weight cannot exceed 100%" + "\n";
			falta_valor=1;
			}
		}
		if (1==falta_valor) alert(mensaje);
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
	<!-- Java libraries. Required-->
	<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	

	<!-- Parameter retrieval. -->
	<%
	
		
	String ncomp=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NM_Comp");
	if ((ncomp==null)||(ncomp.equals(""))) ncomp=" ";
		
	
	%>
	
	<!-- status:	Determine the location bar. -->	
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
	
	<!-- Determine the active source of the wizard -->
	<%
	int OpcionActiva=7;
	%>

</head>
<body>
	<!-- Header -->
<div id="capa_link" style="position:absolute; left:1%; top:3%; width:20%; height:0%; z-index:1">
	<%@ include file="../../mss_g3/english/mss_g3_links_wizzard.jsp" %>
	</div>
	<%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
<div id="capa_cuerpo" style="position:relative; left:21%; top:1%; width:78%; z-index:2">

<!-- **************************************************************************-->
<!-- Meta4Object load. The name of the Task should be the same as the name of the Meta4Object that is loaded; or the primary one, if more than one is loaded. Insert the class imports before anything else -->

<!-- Meta4Object definition -->
	<%
		String zsubsesion = "SSM_VACANT";
		String zmeta4object = "SSM_VACANT";
		String znodo1 = "SSM_NOW_LEVEL_V";
		String znodo2 = "SSM_SCALE_LEVEL_V";
		String znodo3 = "SSM_R_JOB_POST_COMP";
		String ztipocarga = "wiz7";       

/// Configure the desired window size.

		String zventanas = "10";
		int zvuelta = 5;

// Normally not modified.

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
		String zraiz3a = zsubsesion + "!" + znodo3 + ".";
		String zraiz3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
		String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
		String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;
		
// Generic Meta4Object load method

		String zmetodocarga = zsubsesion + "!SSM_VACANT.CARGA";
		String zmetodopersist = zsubsesion + "!SSM_VACANT.GRABAR";
   
// Items to be loaded. You must add all of the ones that you want to view.

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
	<!-- Security -->
	<m4:startpage m4task="<%=zsubsesion%>"/>
	<!-- Start Transaction -->
	<m4:beginjob/>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
	<%@ include file="../../mss_g3/english/persist.jsp" %>
	
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
		// 2 outputdef are required
		
		int zcount3 = 0;
		int zcounti3 = 0;	
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
	<!-- Description table. Required. Always 3*2: a page title + an icon + a description + options -->
	<table border="0" width="100%">
		<tr>
		<!-- Functional Page Title -->
			<td class="titulofuncional" colspan="4">
				Vacancy Extended Knowledge
			</td>
		</tr>
		<tr>
		    <td><img alt="Request a Vacancy" src="/iconos/noname_solicitar_vacantes_210_100.gif" width="100" height="100" /></td>
			<td><div class="descripcionfuncional">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add the required Extended Knowledge to this vacancy.</div></td>
		</tr>
	</table>
	<!-- End Description Table. -->
	
	<!-- Form Table -->
	<form action="javascript:comprobar()" method="get" name="NombreFormulario" id="NombreFormulario">
		<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
			<tr class = "tablaestadosceldatitulo">
				<td colspan="3">
				Vacancy Extended Knowledge	
				</td>
			</tr>
			<tr>
				<td class = "fuentecampo" colspan="1" >&nbsp;*&nbsp;Extended Knowledge</td>
				<td class = "fuentecampo" colspan="2" >
					<select id="SCO_ID_EXTD_KN" class="fuenteformulario200" name="SCO_ID_EXTD_KN" title="Select Competente" onchange="javascript:cargarEscala()" >
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
				<td class = "fuentecampo" colspan="1">&nbsp;*&nbsp;Level</td>
				<td  class="fuentevalor" colspan="2">
					<select id="SCO_ID_LEVEL" class="fuenteformulario200" name="SCO_ID_LEVEL" title="Select Level" >
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
				<td class="fuentecampo">&nbsp;Weight</td>
				<td class="fuentecampo"><input class="fuenteformulario" type="text" id="SCO_WEIGHT" name="SCO_TIME_NEEDED" size="3" maxlength="3" title="Enter Time Dedicated to the Duty"  value ="" />&nbsp;%</td>
			</tr>
			<tr>
				<td align="center" colspan="4" class="fuenteboton">
				<!-- Add the Send button to the right of the form -->
					<a href="javascript:navegar(6,'mss_g3/mss_g3_p1_wiz6.jsp');" ><img alt="Previous" title="Previous" src="/iconos/icono_anterior_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
					<a href="javascript:comprobar(7,'mss_g3/mss_g3_p1_wiz7.jsp');" ><img alt="Add Extended Knowledge to Vacancy" title="Add Extended Knowledge to Vacancy" src="/iconos/icono_aceptar_mss_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
					<a href="javascript:navegar(1,'mss_g3/mss_g3_persist_wiz1.jsp');" ><img alt="Approve Vacancy" title="Approve Vacancy" src="/iconos/icono_guardar_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
				</td>
			</tr>
			</table>
			<%
			if (zcount3 > 0){
			%>
			<table class="tablaestados" width="100%" cellspacing="0">
			<tr class = "tablaestadosceldatitulo">
				<td  colspan="1">Extended Knowledge
				</td>
				<td  colspan="1">Level
				</td>
				<td  colspan="2">Weight
				</td>
			</tr>
<%
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
%>

<m4:loop from="0" to="<%=new Integer(new Integer(zcounti3).intValue()-1).toString()%>">
<%  zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;

if (zcontrol==0){%>
 <tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zCONOCIMIENTO%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zNIVEL%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zPESO%>" htmlsafe="true"/>%</td>
	<td class="fuentevalor"><a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz7.jsp?id_enl=<m4:item m4name="<%=zIDCONOCIMIENTO%>" htmlsafe="true"/>"><img align="right" title="Delete Record" alt="Delete Record" border="0" src="/iconos/icono_borrar_16_16.gif" height="16" width="16" onmouseover="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<% } else { %>
<tr>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zCONOCIMIENTO%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zNIVEL%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zPESO%>" htmlsafe="true"/></td>
	<td class="fuentevalor2"><a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz7.jsp?id_enl=<m4:item m4name="<%=zIDCONOCIMIENTO%>" htmlsafe="true"/>"><img align="right" title="Delete Record" alt="Delete Record" border="0" src="/iconos/icono_borrar_16_16.gif" height="16" width="16" onmouseover="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>	
</tr>
 <%}%>
</m4:loop>
</table>
<%}	%>
</form>
	<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>
