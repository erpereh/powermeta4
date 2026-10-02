
<%
int iMaxAsc = 6;
int iMaxDesc = 12;
%>

<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<%@ include file="../../sse_g1/sse_g1_trans.jsp" %>
<title><%=sse_g1Ess.getProperty("Title.sssp_g1_p6_002")%></title>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="11";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>

</head>

<script type="text/javascript" src="/libreria/digitocontrol.js"></script>

<script type="text/javascript">

function CheckComputoEnero(iPos){
	//Miramos el valor de la check
	HayCambios();
	var vobjetoc = document.forms["NombreFormulario"].elements["SSP_COMPUTO_ENTERO_CK_D" + iPos];
		if (vobjetoc.checked == true){
		sValue = "1";
	}else{
		sValue = "0";
	}
	m4valor("NombreFormulario","SSP_COMPUTO_ENTERO_D"+iPos,sValue,"set");
}

function MostrarNuevoDependiente(iTipoDependiente){

	//Marcamos un cambio
	HayCambios();
	
	var maxiDep = 0;
	var iNumDep = 0;
	var msgMaxDep = "";
	var idCapa = "";
	var sPrefix = "";

	if (iTipoDependiente=="2"){
		maxiDep = <%=iMaxDesc%>;
		msgMaxDep = m4getmessage("_sl_es_g1_sitirpf_002");
		idCapa = "descendientes";
		sPrefix = "D";
	}
	if (iTipoDependiente=="3"){
		maxiDep = <%=iMaxAsc%>;
		msgMaxDep = m4getmessage("_sl_es_g1_sitirpf_001");
		idCapa = "ascendientes";
		sPrefix = "A";
	}
	iNumDep = m4valor("NombreFormulario","SSP_NUM_DEP_TP_"+iTipoDependiente,"","get");
	
	//Miramos si está cumplimentado el anterior (en el caso en que haya)
	if (iNumDep=="0"){
		//Es el primero, no hay control
	}else{
		//Ya hay uno, miramos que el año valga algo
		iNumDepNum = parseInt( parseInt(iNumDep) - (parseInt(1)) );
		sValueData = m4valor("NombreFormulario","SSP_YEAR_BIRTH_"+sPrefix+iNumDepNum,"","get");
		if (sValueData==""){
			alert(m4getmessage("_sl_es_g1_sitirpf_016"));
			return;
		}
	}

	if (iNumDep >= maxiDep){
		//Hemos llegado al tope
		alert(msgMaxDep + maxiDep);
	}else{
		//Insertamos descendiente
		divx = document.getElementById(idCapa+iNumDep);
		divx.style.display = '';

		//Modificamos el número de dependientes
		iNumDepNew = parseInt( parseInt(iNumDep) + (parseInt(1)) );
		m4valor("NombreFormulario",'SSP_NUM_DEP_TP_'+iTipoDependiente,iNumDepNew,"set");
		parent.$('pageBodyFrame').style.height = parent.$('pageBodyFrame').contentWindow.document.body.scrollHeight + 'px';
		if (iTipoDependiente=="2") {ModificarContadorRealDescendientes(1)};
	}
}

function ModificarContadorRealDescendientes(iIncremento){
	//Sumamos o restamos el contador real de descendiente, para el control de la situación 1
	iNumDepTemp = m4valor("NombreFormulario","SSP_NUM_DEP_TP_2_COUNT","","get");
	iNumDepTemp = parseInt( parseInt(iNumDepTemp) + (parseInt(iIncremento)) );
	m4valor("NombreFormulario","SSP_NUM_DEP_TP_2_COUNT",iNumDepTemp,"set");
}

function EliminarDependiente(iPos,iTipoDependiente){

	HayCambios();

	//Miramos la check para ver el estado
	sValid = "1"
	bDisabled = false;

	if (iTipoDependiente=="2"){sPrefix = "D";}
	if (iTipoDependiente=="3"){sPrefix = "A";}

	var vobjetoc = document.forms["NombreFormulario"].elements["SSP_ELIMINAR_" + sPrefix + iPos];
	if (vobjetoc.checked == true){
		if (iTipoDependiente=="2") {ModificarContadorRealDescendientes(-1)};
		sValid = "0";
		bDisabled = true;
	}else{
		if (iTipoDependiente=="2") {ModificarContadorRealDescendientes(1)};
	}

	m4valor("NombreFormulario","SSP_DEPEND_VALID_"+sPrefix+iPos,sValid,"set");

	if (iTipoDependiente == "2"){
   		document.getElementById("SSP_YEAR_BIRTH_D"+iPos).disabled=bDisabled;
	   	document.getElementById("SSP_IRPF_FECHA_ADOPCION_D"+iPos).disabled=bDisabled;
   		document.getElementById("SSP_ID_MINUSVALIA_D"+iPos).disabled=bDisabled;
		iNumDepNew = m4valor("NombreFormulario","SSP_NUM_DEP_TP_"+iTipoDependiente,"","get");
	}

	if (iTipoDependiente == "3"){
   		document.getElementById("SSP_CONV_DESCENDIENTES_A"+iPos).disabled=bDisabled;
	   	document.getElementById("SSP_YEAR_BIRTH_A"+iPos).disabled=bDisabled;
   		document.getElementById("SSP_ID_MINUSVALIA_A"+iPos).disabled=bDisabled;
	}

}

function HayCambios(){

	//Marcamos un cambio, aunque luego se deshaga
	m4valor("NombreFormulario","SSP_HAY_CAMBIOS","1","set");
}

function comprobar(){

	//Miramos si ha habido algún cambio
	bHayCambios = m4valor("NombreFormulario","SSP_HAY_CAMBIOS","","get");
	if (bHayCambios=="0"){
		alert(m4getmessage("_sl_es_g1_sitirpf_017"));
		return;
	}

	var val_id_type = "";
	var sValue = "";
	var sTpIRPF = "";
	var sValueData = "";
	var error = 0;
	var texto =m4getmessage("_sl_co_gn_1");

	var iNumDepTp1 = "";
	var iNumDepTp2 = "";
	var iNumDepTp2Count = "";
	var iNumDepTp3 = "";

	iNumDepTp1 = m4valor("NombreFormulario","SSP_NUM_DEP_TP_1","","get");
	iNumDepTp2 = m4valor("NombreFormulario","SSP_NUM_DEP_TP_2","","get");
	iNumDepTp2Count = m4valor("NombreFormulario","SSP_NUM_DEP_TP_2_COUNT","","get");
	iNumDepTp3 = m4valor("NombreFormulario","SSP_NUM_DEP_TP_3","","get");

	
	//Tipo de IRPF
	sTpIRPF = m4valor("NombreFormulario","SSP_ID_TP_IRPF","","get");
	if (sTpIRPF == 'NAC'){

	//Situaciones IRPF
	val_IdEstIRPF = m4select("SSP_ID_EST_IRPF","NombreFormulario","value");
	if (val_IdEstIRPF == '1'){
		if (iNumDepTp2Count < 1){
			texto = texto +"\n"+ " * " + m4getmessage("_sl_es_g1_sitirpf_005");
			error=1;
		}
	}
	if (val_IdEstIRPF == '2'){
		sValueData = m4valor("NombreFormulario","SSP_NIF_CONYUGE","","get");
		sValueData2 = m4valor("NombreFormulario","STD_SSN","","get");
		if (sValueData == ""){
			texto = texto +"\n"+ " * " + m4getmessage("_sl_es_g1_sitirpf_006");
			error=1;
		}else{
			//Control de igual al del empleado			
			if (sValueData2==sValueData){
				texto = texto +"\n"+ " * " + m4getmessage("_sl_es_g1_sitirpf_007");
				error=1;
			}else{
				//Formato del NIF
				if (comprobarnifNoInfo(sValueData)==0){
					return;
				}
			}
		}
	}
	if (val_IdEstIRPF != '2'){
		sValueData = m4valor("NombreFormulario","SSP_NIF_CONYUGE","","get");
		if (sValueData != ""){
			texto = texto +"\n"+ " * " + m4getmessage("_sl_es_g1_sitirpf_008");
			error=1;
		}
	}


	//Año Vivienda
	sValueData = m4valor("NombreFormulario","SSP_CON_RED_VIVIENDA","","get");
	if (sValueData != ""){
		if ((isNaN(parseInt(sValueData))) || (parseInt(sValueData)<1800) || (parseInt(sValueData)>4000)){
			texto = texto +"\n"+ " * " + m4getmessage("_sl_es_g1_sitirpf_015");
			error=1;
		}
	}

	//Bucles
	//Descendientes
	var i;
	for (i=0;i<iNumDepTp2;i++) {

		iPosReal = parseInt(parseInt(i) + parseInt(1))
		//Miramos si está marcado para eliminar
		sValueData = m4valor("NombreFormulario","SSP_DEPEND_VALID_D"+i,"","get");

		if (sValueData=="1"){
			sValueData = m4valor("NombreFormulario","STD_OR_DEP_NB_D"+i,"","get");
			if (sValueData=="0"){
				//Es nuevo
			}else{
				//Es existente
			}

			//Control de obligatoriedad del año de nacimiento
			sValueData = m4valor("NombreFormulario","SSP_YEAR_BIRTH_D"+i,"","get");
			if (sValueData==""){
				texto = texto +"\n"+ " * " + m4getmessage("_sl_es_g1_sitirpf_009") + iPosReal + m4getmessage("_sl_es_g1_sitirpf_010");
				error=1;
			}else{
				if ((isNaN(parseInt(sValueData))) || (parseInt(sValueData)<1800) || (parseInt(sValueData)>4000)){
					texto = texto +"\n"+ " * " + m4getmessage("_sl_es_g1_sitirpf_009") + iPosReal + m4getmessage("_sl_es_g1_sitirpf_010");
					error=1;
				}
			}

			//Control de validez del año de adopcion
			sValueData = m4valor("NombreFormulario","SSP_IRPF_FECHA_ADOPCION_D"+i,"","get");
			if (sValueData != ""){
				if ((isNaN(parseInt(sValueData))) || (parseInt(sValueData)<1800) || (parseInt(sValueData)>4000)){
					texto = texto +"\n"+ " * " + m4getmessage("_sl_es_g1_sitirpf_009") + iPosReal + m4getmessage("_sl_es_g1_sitirpf_011");
					error=1;
				}
			}
	
		}else{
			// Marcado para eliminar
		}
	}

	//Bucles
	//Ascendientes
	var i;
	for (i=0;i<iNumDepTp3;i++) {

		iPosReal = parseInt(parseInt(i) + parseInt(1))
		//Miramos si está marcado para eliminar
		sValueData = m4valor("NombreFormulario","SSP_DEPEND_VALID_A"+i,"","get");

		if (sValueData=="1"){
			sValueData = m4valor("NombreFormulario","STD_OR_DEP_NB_A"+i,"","get");
			if (sValueData=="0"){
				//Es nuevo
			}else{
				//Es existente
			}

			//Control de obligatoriedad del año de nacimiento
			sValueData = m4valor("NombreFormulario","SSP_YEAR_BIRTH_A"+i,"","get");
			if (sValueData==""){
				texto = texto +"\n"+ " * " + m4getmessage("_sl_es_g1_sitirpf_012") + iPosReal + " no tiene un año de nacimiento válido";
				error=1;
			}else{
				if ((isNaN(parseInt(sValueData))) || (parseInt(sValueData)<1800) || (parseInt(sValueData)>4000)){
					texto = texto +"\n"+ " * " + m4getmessage("_sl_es_g1_sitirpf_012") + iPosReal + m4getmessage("_sl_es_g1_sitirpf_010");
					error=1;
				}
			}
	
			//Control de convivencia descencientes
			sValueData = m4valor("NombreFormulario","SSP_CONV_DESCENDIENTES_A"+i,"","get");
			if ( (sValueData=="") || (isNaN(parseInt(sValueData))) || (parseInt(sValueData)<1) || (parseInt(sValueData)>9) ){
				texto = texto +"\n"+ " * " + m4getmessage("_sl_es_g1_sitirpf_012") + iPosReal + m4getmessage("_sl_es_g1_sitirpf_013");
				error=1;
			}
		}else{
			// Marcado para eliminar
		}
	} 

	}


	//Tipo IRPF Foral
	if (sTpIRPF != 'NAC'){
		//Control de número de hijos
		sValueData = m4valor("NombreFormulario","SSP_NUM_HIJOS_IRPF","","get");
		if ( (sValueData=="") || (isNaN(parseInt(sValueData))) || (parseInt(sValueData)<0) || (parseInt(sValueData)>9) ){
			texto = texto +"\n"+ " * " + m4getmessage("_sl_es_g1_sitirpf_014");
			error=1;
		}
	}

	
	if (error == 1){
		alert(texto);
		return;
	}else{
		m4submit("NombreFormulario");
	}

}
</script>


<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_MOD_SITIRPF";
   String zmeta4object = "SSE_MOD_SITIRPF";
   String znodo = "SSE_DATA_DATOS_PERCEPTOR";
   String znodo2 = "SSE_DATA_LIST_EST_CIV_IRPF";
   String znodo3 = "SSE_DATA_LIST_TIPO_MINUSV";
   String znodo4 = "SSE_DATA_DATOS_DESCENDIENTES";
   String znodo5 = "SSE_DATA_DATOS_ASCENDIENTES";

   String ztipocarga = "DATOS_MODIFICAR";     
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
   String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
   String zmove = znodo + ":" + znodo + "[0]";
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_MOD_SITIRPF.SSE_CARGA_DATOS";      				
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>" ><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>" ><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>" ><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>" ><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<%
String zSSP_ID_TP_IRPF = "";
int  zcount  = 0;int  zcounti  = 0;	
String zSSP_NUM_DEP_TP_3 = "";
int zSSP_NUM_DEP_TP_3i = 0;
String zSSP_NUM_DEP_TP_2 = "";
int zSSP_NUM_DEP_TP_2i = 0;
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zSSP_ID_TP_IRPF = m.getItem(znodo,zmeta4object,znodo,"","SSP_ID_TP_IRPF");
    zSSP_NUM_DEP_TP_3 = m.getItem(znodo,zmeta4object,znodo,"","SSP_NUM_DEP_TP_3");
    zSSP_NUM_DEP_TP_3i = Integer.parseInt(zSSP_NUM_DEP_TP_3);
    zSSP_NUM_DEP_TP_2 = m.getItem(znodo,zmeta4object,znodo,"","SSP_NUM_DEP_TP_2");
    zSSP_NUM_DEP_TP_2i = Integer.parseInt(zSSP_NUM_DEP_TP_2);
} catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Title.sssp_g1_p6_002")%></td></tr>

<tr>
<td><img alt="<%=sse_g1Ess.getProperty("Title.sssp_g1_p6_002")%> "title="<%=sse_g1Ess.getProperty("Title.sssp_g1_p6_002")%>" src="/iconos/family_123_100.gif" width="100" height="100" /></td>
<td>
	<div class="descripcionfuncional"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_002_001")%></div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional"title="<%=sse_g1Ess.getProperty("Link.sssp_g1_p6_001_l001")%>"tabindex="1" href="/servlet/CheckSecurity/JSP/sse_g1/sssp_g1_p6_sit.jsp?estado=11"><%=sse_g1Ess.getProperty("Link.sssp_g1_p6_001_l001")%></a></li>
	</td>
</tr>
</table>

<% if (zcounti > 0){String zposicions = "0";int zcontrol = 0;	String zPaint="";int zposicion =0; %>

<%int zTabess=0;%>

<table class = "tablaestados" cellspacing="0" width="100%">
<tr><td colspan="2" class ="tablaestadosceldatitulo"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_001_002")%></td></tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_FEC_EFECTO" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor"><B><m4:item  item="SSP_FEC_EFECTO" htmlsafe="true" outputdef="<%=znodo%>"/></B></td>
</tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_ID_TP_IRPF" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor"><m4:item  item="SSP_N_TP_IRPF" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>

<tr><td colspan="2">
<form action="/servlet/CheckSecurity/JSP/sse_g1/sssp_g1_p6_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">

<input type="hidden" name="SSP_HAY_CAMBIOS" id="SSP_HAY_CAMBIOS" value="0" />

<input type="hidden" name="SSP_ORIGEN" id="SSP_ORIGEN" value="ESS" />

<input type="hidden" name="SSP_ID_TP_IRPF" id="SSP_ID_TP_IRPF" value="<m4:item  item="SSP_ID_TP_IRPF" htmlsafe="true" outputdef="<%=znodo%>"/>" />

<input type="hidden" name="SSP_NUM_DEP_TP_1" id="SSP_NUM_DEP_TP_1" maxlength="2" size="2" value="<m4:item  item="SSP_NUM_DEP_TP_1" htmlsafe="true" outputdef="<%=znodo%>"/>" />
<input type="hidden" name="SSP_NUM_DEP_TP_2" id="SSP_NUM_DEP_TP_2" maxlength="2" size="2" value="<m4:item  item="SSP_NUM_DEP_TP_2" htmlsafe="true" outputdef="<%=znodo%>"/>" />
<input type="hidden" name="SSP_NUM_DEP_TP_2_COUNT" id="SSP_NUM_DEP_TP_2_COUNT" maxlength="2" size="2" value="<m4:item  item="SSP_NUM_DEP_TP_2" htmlsafe="true" outputdef="<%=znodo%>"/>" />
<input type="hidden" name="SSP_NUM_DEP_TP_3" id="SSP_NUM_DEP_TP_3" maxlength="2" size="2" value="<m4:item  item="SSP_NUM_DEP_TP_3" htmlsafe="true" outputdef="<%=znodo%>"/>" />

</table>

<table class = "tablaestados" cellspacing="0" width="100%">
<tr><td colspan="2">&nbsp;</td></tr>
<tr><td colspan="2" class ="tablaestadosceldatitulo"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_001_003")%></td></tr>

<%if (zSSP_ID_TP_IRPF.equals("NAC")){%>

<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_ID_EST_IRPF" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor">
		<select onchange="javascript:HayCambios();" id="SSP_ID_EST_IRPF" class="fuenteformulario" name="SSP_ID_EST_IRPF">
			<option value="<m4:item item="SSP_ID_EST_IRPF" htmlsafe="true" outputdef="<%=znodo%>"/>"><m4:item item="SSP_ID_EST_IRPF" htmlsafe="true" outputdef="<%=znodo%>"/>-<m4:item item="SSP_N_EST_IRPF" htmlsafe="true" outputdef="<%=znodo%>"/></option>
			<m4:dataloop outputdef="<%=znodo2%>">
			<m4:current m4varname="current" outputdef="<%=znodo2%>"/>
				<option value="<m4:item item="SSP_ID_EST_IRPF" htmlsafe="true" outputdef="<%=znodo2%>"/>"><m4:item item="SSP_ID_EST_IRPF" htmlsafe="true" outputdef="<%=znodo2%>"/>-<m4:item item="SSP_N_EST_IRPF" htmlsafe="true" outputdef="<%=znodo2%>"/></option>
			</m4:dataloop>
		</select>
	</td>
</tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_NIF_CONYUGE_UPD" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor">
		<input onchange="javascript:HayCambios();" class="fuenteformulario" type="text" name="SSP_NIF_CONYUGE" id="SSP_NIF_CONYUGE" maxlength="9" size="9" value="<m4:item  item="SSP_NIF_CONYUGE_UPD" htmlsafe="true" outputdef="<%=znodo%>"/>" />
		<input class="fuenteformulario" type="hidden" name="STD_SSN" id="STD_SSN" maxlength="9" size="9" value="<m4:item  item="STD_SSN" htmlsafe="true" outputdef="<%=znodo%>"/>" />
	</td>
</tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_ID_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor">
		<select onchange="javascript:HayCambios();" d="SSP_ID_MINUSVALIA" class="fuenteformulario" name="SSP_ID_MINUSVALIA">
			<option value="<m4:item item="SSP_ID_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo%>"/>"><m4:item item="SSP_N_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo%>"/></option>
			<m4:dataloop outputdef="<%=znodo3%>">
			<m4:current m4varname="current" outputdef="<%=znodo3%>"/>
				<option value="<m4:item item="SSP_ID_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo3%>"/>"><m4:item item="SSP_N_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo3%>"/></option>
			</m4:dataloop>
			<option value=""></option>
		</select>
	</td>
</tr>
</table>

<!-- Bloque de descendientes -->
<table border="0" class = "tablaestados" cellpadding="0" cellspacing="0" width="100%">
<tr><td colspan="5">&nbsp;</td></tr>
<tr>
	<td colspan="4" class ="tablaestadosceldatitulo"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_001_004")%></td>
	<td class ="tablaestadosceldatitulo" align="right" ><a href="javascript:MostrarNuevoDependiente(2)";>
	<img alt="Nuevo ascendiente" title="Nuevo descendiente" src="/iconos/lu_nor_more_12.png" width="12" height="12" /></a></td>
</tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_YEAR_BIRTH" htmlsafe="true" outputdef="<%=znodo4%>"/></td>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_IRPF_FECHA_ADOPCION" htmlsafe="true" outputdef="<%=znodo4%>"/></td>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_N_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo4%>"/></td>
	<td width="15%" class="fuentecampo"><m4:label item="SSP_COMPUTO_ENTERO" htmlsafe="true" outputdef="<%=znodo4%>"/></td>
	<td width="10%" class="fuentecampo"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_002_002")%></td>
</tr> 

<m4:dataloop outputdef="<%=znodo4%>">
<m4:current m4varname="current" outputdef="<%=znodo4%>"/>
	<tr>
		<td width="25%" class="fuentevalor">
			<input type="hidden" class="fuenteformulario" name="SSP_DEPEND_VALID_D<%=current%>" id="SSP_DEPEND_VALID_D<%=current%>" maxlength="1" size="1" value="1" />
			<input type="hidden" class="fuenteformulario" name="STD_OR_DEP_NB_D<%=current%>" id="STD_OR_DEP_NB_D<%=current%>" maxlength="2" size="2" value="<m4:item  item="STD_OR_DEP_NB" htmlsafe="true" outputdef="<%=znodo4%>"/>" />
			<input type="text" onchange="javascript:HayCambios();" class="fuenteformulario" name="SSP_YEAR_BIRTH_D<%=current%>" id="SSP_YEAR_BIRTH_D<%=current%>" maxlength="4" size="4" value="<m4:item  item="SSP_YEAR_BIRTH" htmlsafe="true" outputdef="<%=znodo4%>"/>" />
		</td>
		<td width="25%" class="fuentevalor">
			<input type="text"  onchange="javascript:HayCambios();" class="fuenteformulario" name="SSP_IRPF_FECHA_ADOPCION_D<%=current%>" id="SSP_IRPF_FECHA_ADOPCION_D<%=current%>" maxlength="4" size="4" value="<m4:item  item="SSP_IRPF_FECHA_ADOPCION" htmlsafe="true" outputdef="<%=znodo4%>"/>" />
		</td>
		<td width="25%" class="fuentevalor">
			<select onchange="javascript:HayCambios();" id="SSP_ID_MINUSVALIA_D<%=current%>" class="fuenteformulario" name="SSP_ID_MINUSVALIA_D<%=current%>">
				<option value="<m4:item item="SSP_ID_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo4%>"/>"><m4:item item="SSP_N_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo4%>"/></option>
				<m4:dataloop outputdef="<%=znodo3%>">
				<m4:current m4varname="current3" outputdef="<%=znodo3%>"/>
					<option value="<m4:item item="SSP_ID_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo3%>"/>"><m4:item item="SSP_N_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo3%>"/></option>
				</m4:dataloop>
				<option value=""></option>
			</select>
		</td>
		<td width="15%" class="fuentevalor">
			<input type="hidden" class="fuenteformulario" name="SSP_COMPUTO_ENTERO_D<%=current%>" id="SSP_COMPUTO_ENTERO_D<%=current%>" maxlength="1" size="1" value="<m4:item  item="SSP_COMPUTO_ENTERO" htmlsafe="true" outputdef="<%=znodo4%>"/>" />
			<input type="checkbox" onclick="javascript:CheckComputoEnero(<%=current%>);" id="SSP_COMPUTO_ENTERO_CK_D<%=current%>" name="SSP_COMPUTO_ENTERO_CK_D<%=current%>" checked="checked">
		</td>
		<td width="10%" class="fuentevalor">
			<input type="checkbox" onclick="javascript:EliminarDependiente(<%=current%>,'2');" id="SSP_ELIMINAR_D<%=current%>" name="SSP_ELIMINAR_D<%=current%>" >
		</td>
	</tr>
</m4:dataloop>
<!-- Bloque de descendientes -->


<!-- Bloque de descendientes dinámico -->
<%
	int maxiDesc = iMaxDesc + 1;
	maxiDesc = iMaxDesc;
	for (int iDesc=zSSP_NUM_DEP_TP_2i;iDesc < maxiDesc; iDesc++){
%>
<tr><td class="fuentecampo" colspan="5">
<div id="descendientes<%=iDesc%>" position:absolute">
<table border="0" width="100%" cellspacing="0" cellpadding="0">
	<tr>
		<td width="25%" class="fuentevalor">
			<input type="hidden" class="fuenteformulario" name="SSP_DEPEND_VALID_D<%=iDesc%>" id="SSP_DEPEND_VALID_D<%=iDesc%>" maxlength="1" size="1" value="1" />
			<input type="hidden" class="fuenteformulario" name="STD_OR_DEP_NB_D<%=iDesc%>" id="STD_OR_DEP_NB_D<%=iDesc%>" maxlength="2" size="2" value="0" />
			<input type="text" onchange="javascript:HayCambios();" class="fuenteformulario" name="SSP_YEAR_BIRTH_D<%=iDesc%>" id="SSP_YEAR_BIRTH_D<%=iDesc%>" maxlength="4" size="4" value="" />
		</td>
		<td width="25%" class="fuentevalor">
			<input type="text" onchange="javascript:HayCambios();" class="fuenteformulario" name="SSP_IRPF_FECHA_ADOPCION_D<%=iDesc%>" id="SSP_IRPF_FECHA_ADOPCION_D<%=iDesc%>" maxlength="4" size="4" value="" />
		</td>
		<td width="25%" class="fuentevalor">
			<select onchange="javascript:HayCambios();" id="SSP_ID_MINUSVALIA_D<%=iDesc%>" class="fuenteformulario" name="SSP_ID_MINUSVALIA_D<%=iDesc%>">
				<option value=""></option>
				<m4:dataloop outputdef="<%=znodo3%>">
				<m4:current m4varname="current3" outputdef="<%=znodo3%>"/>
					<option value="<m4:item item="SSP_ID_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo3%>"/>"><m4:item item="SSP_N_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo3%>"/></option>
				</m4:dataloop>
			</select>
		</td>
		<td width="15%" class="fuentevalor">
			<input type="hidden" class="fuenteformulario" name="SSP_COMPUTO_ENTERO_D<%=iDesc%>" id="SSP_COMPUTO_ENTERO_D<%=iDesc%>" maxlength="1" size="1" value="1" />
			<input type="checkbox" onclick="javascript:CheckComputoEnero(<%=iDesc%>);" id="SSP_COMPUTO_ENTERO_CK_D<%=iDesc%>" name="SSP_COMPUTO_ENTERO_CK_D<%=iDesc%>" checked="checked">
		</td>
		<td width="10%" class="fuentevalor">
			<input type="checkbox" onclick="javascript:EliminarDependiente(<%=iDesc%>,'2');" id="SSP_ELIMINAR_D<%=iDesc%>" name="SSP_ELIMINAR_D<%=iDesc%>" >
		</td>
	</tr>
</table>
</div>
</td></tr>

<%
	}
%>
<!-- Bloque de descendientes dinámico -->
</table>



<!-- Bloque de ascendientes -->
<table border="0" class = "tablaestados" cellpadding="0" cellspacing="0" width="100%">
<tr><td colspan="5">&nbsp;</td></tr>
<tr>
	<td colspan="4" class ="tablaestadosceldatitulo"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_001_005")%></td>
	<td class ="tablaestadosceldatitulo" align="right" ><a href="javascript:MostrarNuevoDependiente(3)";>
	<img alt="Nuevo ascendiente" title="Nuevo ascendiente" src="/iconos/lu_nor_more_12.png" width="12" height="12" /></td></a></td>
</tr>
<tr>
	<td width="50%" colspan="2" class="fuentecampo"><m4:label item="SSP_YEAR_BIRTH" htmlsafe="true" outputdef="<%=znodo5%>"/></td>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_N_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo5%>"/></td>
	<td width="15%" class="fuentecampo"><m4:label item="SSP_CONV_DESCENDIENTES" htmlsafe="true" outputdef="<%=znodo5%>"/></td>
	<td width="10%" class="fuentecampo"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_002_002")%></td>
</tr> 

<m4:dataloop outputdef="<%=znodo5%>">
<m4:current m4varname="current" outputdef="<%=znodo5%>"/>
	<tr>
		<td width="50%" colspan="2" class="fuentevalor">
			<input type="hidden" class="fuenteformulario" name="SSP_DEPEND_VALID_A<%=current%>" id="SSP_DEPEND_VALID_A<%=current%>" maxlength="1" size="1" value="1" />
			<input type="hidden" class="fuenteformulario" name="STD_OR_DEP_NB_A<%=current%>" id="STD_OR_DEP_NB_A<%=current%>" maxlength="2" size="2" value="<m4:item  item="STD_OR_DEP_NB" htmlsafe="true" outputdef="<%=znodo5%>"/>" />
			<input type="text" onchange="javascript:HayCambios();" class="fuenteformulario" name="SSP_YEAR_BIRTH_A<%=current%>" id="SSP_YEAR_BIRTH_A<%=current%>" maxlength="4" size="4" value="<m4:item  item="SSP_YEAR_BIRTH" htmlsafe="true" outputdef="<%=znodo5%>"/>" />
		</td>
		<td width="25%" class="fuentevalor">
			<select onchange="javascript:HayCambios();" id="SSP_ID_MINUSVALIA_A<%=current%>" class="fuenteformulario" name="SSP_ID_MINUSVALIA_A<%=current%>">
				<option value="<m4:item item="SSP_ID_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo5%>"/>"><m4:item item="SSP_N_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo5%>"/></option>
				<m4:dataloop outputdef="<%=znodo3%>">
				<m4:current m4varname="current2" outputdef="<%=znodo3%>"/>
					<option value="<m4:item item="SSP_ID_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo3%>"/>"><m4:item item="SSP_N_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo3%>"/></option>
				</m4:dataloop>
				<option value=""></option>
			</select>
		</td>
		<td width="15%" class="fuentevalor">
			<input type="text" onchange="javascript:HayCambios();" class="fuenteformulario" name="SSP_CONV_DESCENDIENTES_A<%=current%>" id="SSP_CONV_DESCENDIENTES_A<%=current%>" maxlength="1" size="1" value="<m4:item  item="SSP_CONV_DESCENDIENTES" htmlsafe="true" outputdef="<%=znodo5%>"/>" />
		</td>
		<td width="10%" class="fuentevalor">
			<input type="checkbox" onclick="javascript:EliminarDependiente(<%=current%>,'3');" id="SSP_ELIMINAR_A<%=current%>" name="SSP_ELIMINAR_A<%=current%>" >
		</td>
	</tr>
</m4:dataloop>
<!-- Bloque de ascendientes -->

<!-- Bloque de ascendientes dinámico -->
<%
	int maxiAsc = iMaxAsc + 1;
	maxiAsc = iMaxAsc;
	for (int iAsc=zSSP_NUM_DEP_TP_3i;iAsc < maxiAsc; iAsc++){
%>
<tr><td class="fuentecampo" colspan="5">
<div id="ascendientes<%=iAsc%>" position:absolute">
<table border="0" width="100%" cellspacing="0" cellpadding="0">
	<tr>
		<td width="50%" colspan="2" class="fuentevalor">
			<input type="hidden" class="fuenteformulario" name="SSP_DEPEND_VALID_A<%=iAsc%>" id="SSP_DEPEND_VALID_A<%=iAsc%>" maxlength="1" size="1" value="1" />
			<input type="hidden" class="fuenteformulario" name="STD_OR_DEP_NB_A<%=iAsc%>" id="STD_OR_DEP_NB_A<%=iAsc%>" maxlength="2" size="2" value="0" />
			<input type="text" onchange="javascript:HayCambios();" class="fuenteformulario" name="SSP_YEAR_BIRTH_A<%=iAsc%>" id="SSP_YEAR_BIRTH_A<%=iAsc%>" maxlength="4" size="4" value="" />
		</td>
		<td width="25%" class="fuentevalor">
			<select onchange="javascript:HayCambios();" id="SSP_ID_MINUSVALIA_A<%=iAsc%>" class="fuenteformulario" name="SSP_ID_MINUSVALIA_A<%=iAsc%>">
				<option value=""></option>
				<m4:dataloop outputdef="<%=znodo3%>">
				<m4:current m4varname="current2" outputdef="<%=znodo3%>"/>
					<option value="<m4:item item="SSP_ID_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo3%>"/>"><m4:item item="SSP_N_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo3%>"/></option>
				</m4:dataloop>
			</select>
		</td>
		<td width="15%" class="fuentevalor">
			<input type="text" onchange="javascript:HayCambios();" class="fuenteformulario" name="SSP_CONV_DESCENDIENTES_A<%=iAsc%>" id="SSP_CONV_DESCENDIENTES_A<%=iAsc%>" maxlength="1" size="1" value="1" />
		</td>
		<td width="10%" class="fuentevalor">
			<input type="checkbox" onclick="javascript:EliminarDependiente(<%=iAsc%>,'3');" id="SSP_ELIMINAR_A<%=iAsc%>" name="SSP_ELIMINAR_A<%=iAsc%>" >
		</td>
	</tr>
</table>
</div>
</td></tr>

<%
	}
%>
<!-- Bloque de ascendientes dinámico -->
</table>

<!-- Bloque de pensiones -->
<table class = "tablaestados" cellspacing="0" width="100%">
<tr><td colspan="2">&nbsp;</td></tr>
<tr><td colspan="2" class ="tablaestadosceldatitulo"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_001_006")%></td></tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_PENSION_CONYUGE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor">
		<input type="text" style="text-align:right" onchange="javascript:HayCambios();" class="fuenteformulario" name="SSP_PENSION_CONYUGE" id="SSP_PENSION_CONYUGE" maxlength="10" size="10" value="<m4:item  item="SSP_PENSION_CONYUGE" htmlsafe="true" outputdef="<%=znodo%>"/>" /> euros
	</td>
</tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_PENSION_HIJO" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor">
		<input type="text" style="text-align:right" onchange="javascript:HayCambios();" class="fuenteformulario" name="SSP_PENSION_HIJO" id="SSP_PENSION_HIJO" maxlength="10" size="10" value="<m4:item  item="SSP_PENSION_HIJO" htmlsafe="true" outputdef="<%=znodo%>"/>" /> euros
	</td>
</tr>
<!-- Bloque de pensiones -->

<!-- Bloque de pagos vivienda -->
<table class = "tablaestados" cellspacing="0" width="100%">
<tr><td colspan="2">&nbsp;</td></tr>
<tr><td colspan="2" class ="tablaestadosceldatitulo"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_001_007")%></td></tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_CON_RED_VIVIENDA_UPD" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor">
		<input type="text" style="text-align:right" onchange="javascript:HayCambios();" class="fuenteformulario" name="SSP_CON_RED_VIVIENDA" id="SSP_CON_RED_VIVIENDA" maxlength="4" size="4" value="<m4:item  item="SSP_CON_RED_VIVIENDA_UPD" htmlsafe="true" outputdef="<%=znodo%>"/>" />
	</td>
</tr>
</table>
<!-- Bloque de pagos vivienda -->

<%}else{%>

<input type="hidden" class="fuenteformulario" name="SSP_ID_EST_IRPF" id="SSP_ID_EST_IRPF" maxlength="2" size="2" value="<m4:item  item="SSP_ID_EST_IRPF" htmlsafe="true" outputdef="<%=znodo%>"/>" />
		
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_ID_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor">
		<select onchange="javascript:HayCambios();" id="SSP_ID_MINUSVALIA" class="fuenteformulario" name="SSP_ID_MINUSVALIA">
			<option value="<m4:item item="SSP_ID_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo%>"/>"><m4:item item="SSP_N_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo%>"/></option>
			<m4:dataloop outputdef="<%=znodo3%>">
			<m4:current m4varname="current" outputdef="<%=znodo3%>"/>
				<option value="<m4:item item="SSP_ID_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo3%>"/>"><m4:item item="SSP_N_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo3%>"/></option>
			</m4:dataloop>
			<option value=""></option>
		</select>
	</td>
</tr>

<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_NUM_HIJOS_IRPF" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor">
		<input type="text" onchange="javascript:HayCambios();" class="fuenteformulario" name="SSP_NUM_HIJOS_IRPF" id="SSP_NUM_HIJOS_IRPF" maxlength="2" size="2" value="<m4:item  item="SSP_NUM_HIJOS_IRPF" htmlsafe="true" outputdef="<%=znodo%>"/>" />
	</td>
</tr>

<%}%>

</form>
</td></tr>

<table class = "tablaestados" cellspacing="0" width="100%">
<tr><td class="fuenteboton" colspan="4"><a title="<%=Tran.getProperty("Button.Send")%>"href="javascript:comprobar();"><img alt="<%=Tran.getProperty("Button.Send")%>" src="/iconos/icono_enviar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td></tr>

<tr><td class="fuenteboton" colspan="4">
</td></tr>

</table>

<br />
<%} else {%>	
<div class="fuentenodatos"><%=sse_g1Ess.getProperty("Label.sse_g1_p5NoData")%></div>
<%}	%>		
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>

<script type="text/javascript">
	function OcultarAscendientes(){
		var maxiAsc = <%=iMaxAsc + 1%>;
		maxiAsc = <%=iMaxAsc%>;
		for (i = <%=zSSP_NUM_DEP_TP_3i%>;i < maxiAsc;i++) { 
			divx = document.getElementById('ascendientes'+i);
			divx.style.display = 'none';
		} 
	}
	function OcultarDescendientes(){
		var maxiDesc = <%=iMaxDesc + 1%>;
		maxiDesc = <%=iMaxDesc%>;
		for (i = <%=zSSP_NUM_DEP_TP_2i%>;i < maxiDesc;i++) { 
			divx = document.getElementById('descendientes'+i);
			divx.style.display = 'none';
		} 
	}
	function CoherenciaCheckComputoEntero(){
		//Numero de descendientes válido
		iNumDepDesc = m4valor("NombreFormulario","SSP_NUM_DEP_TP_2","","get");
		for (i = 0;i < iNumDepDesc;i++) { 
			iComputaEntero = m4valor("NombreFormulario","SSP_COMPUTO_ENTERO_D"+i,"","get");
			bChecked = false
			if(iComputaEntero=="1"){bChecked = true;}
   			document.getElementById("SSP_COMPUTO_ENTERO_CK_D"+i).checked=bChecked;
		} 
	}
	function EventosLoad(){
		//Tipo de IRPF
		sTpIRPF = m4valor("NombreFormulario","SSP_ID_TP_IRPF","","get");
		if (sTpIRPF == 'NAC'){
			OcultarAscendientes();
			OcultarDescendientes();
			CoherenciaCheckComputoEntero();
		}
	}
	EventosLoad();

</script>

</body>
</html>

