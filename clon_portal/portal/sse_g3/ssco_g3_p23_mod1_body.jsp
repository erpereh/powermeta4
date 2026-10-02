<% 
	
	String zDtStart= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDtStart"); 
	zDtStart = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zDtStart);
	String zPrefPrior= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPrefPrior"); 
	zPrefPrior = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zPrefPrior);
	String zNacInt= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNacInt"); 
	zNacInt = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zNacInt);
	
	//String zpais = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zpais");
	String zpais = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zpais");
	zpais = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zpais);
	
	//String zpro = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zpro");
	String zpro = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zpro");
	zpro = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zpro);
	
	
	String zwu = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zwu");
	zwu = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zwu);
	String zjob = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zjob");
	zjob = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zjob);
	String zOPref = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zOPref");
	zOPref = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zOPref);
	String zCom = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zCom");
	zCom = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zCom);

	if ((zDtStart==null) || (zDtStart.equals(""))) {zDtStart="";}
	if ((zPrefPrior==null) || (zPrefPrior.equals(""))) {zPrefPrior="";}
	if ((zNacInt==null) || (zNacInt.equals(""))) {zNacInt="0";}
	if ((zpais==null) || (zpais.equals(""))) {zpais="";}
	if ((zpro==null) || (zpro.equals(""))) {zpro="";}
	if ((zwu==null) || (zwu.equals(""))) {zwu="";}
	if ((zjob==null) || (zjob.equals(""))) {zjob="";}
	if ((zOPref==null) || (zOPref.equals(""))) {zOPref="";}
	if ((zCom==null) || (zCom.equals(""))) {zCom="";}

%>
<script type="text/javascript">

	function pendientes(ord){
		
		var parametros = new Array("TAG","REC","ACC","NOD");
		var valores = new Array("SSE_CR_PREFERENC",ord,"BORRAR","SSE_CR_PREFERENC");
		m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
		
	}
	function filtrar(num){
		

		var valor1 =m4valor("NombreFormulario","DT_START","","get");
		m4valor("oculto","zDtStart",valor1,"set");

		var valor2 = m4valor("NombreFormulario","SCO_PREF_PRIORITY","","get");
		m4valor("oculto","zPrefPrior",valor2,"set");

		var valor3 = m4valor("NombreFormulario","zNacInt2","","get");
		m4valor("oculto","zNacInt",valor3,"set");

		var valor4 =m4select(m4objeto("STD_ID_COUNTRY","NombreFormulario"),"value");
		m4valor("oculto","zpais",valor4,"set");

		if (num=="2") {
			var valor5 =m4select(m4objeto("STD_ID_GEO_DIV","NombreFormulario"),"value");
			m4valor("oculto","zpro",valor5,"set");
		}

		var valor7 =m4select(m4objeto("STD_ID_WORK_UNIT","NombreFormulario"),"value");
		m4valor("oculto","zwu",valor7,"set");

		var valor8 =m4select(m4objeto("STD_ID_JOB_CODE","NombreFormulario"),"value");
		m4valor("oculto","zjob",valor8,"set");

		var valor9 = m4valor("NombreFormulario","SCO_COMMENT","","get");
		m4valor("oculto","zCom",valor9,"set");

		var valor10 = m4valor("NombreFormulario","SCO_PREFERENCES","","get");
		m4valor("oculto","zOPref",valor10,"set");

		if ((document.NombreFormulario.SCO_CK_NAT_INT1.checked) & (valor4!=""))
		{
			m4submit("oculto");
		}

	}

	function filtrarNacInter(num)
	{
		
		if (num=="1")
		{
			document.NombreFormulario.STD_ID_COUNTRY.disabled = false;
			document.NombreFormulario.SCO_CK_NAT_INT1.checked = true;
			m4valor("oculto","zNacInt","1","set");
			m4valor("NombreFormulario","zNacInt2","1","set");
			filtrar(1);
		}
		if (num=="2")
		{
			document.NombreFormulario.STD_ID_COUNTRY.disabled = false;
			document.NombreFormulario.STD_ID_SUB_GEO_DIV.disabled = true;
			document.NombreFormulario.STD_ID_SUB_GEO_DIV.value = "";
			document.NombreFormulario.STD_ID_GEO_DIV.disabled = true;
			document.NombreFormulario.STD_ID_GEO_DIV.value = "";
			document.NombreFormulario.SCO_CK_NAT_INT2.checked = true;
			m4valor("oculto","zNacInt","2","set");
			m4valor("NombreFormulario","zNacInt2","2","set");
		}
		if (num=="0")
		{
			document.NombreFormulario.STD_ID_COUNTRY.disabled = true;
			document.NombreFormulario.STD_ID_COUNTRY.value = "";
			document.NombreFormulario.STD_ID_SUB_GEO_DIV.disabled = true;
			document.NombreFormulario.STD_ID_SUB_GEO_DIV.value = "";
			document.NombreFormulario.STD_ID_GEO_DIV.disabled = true;
			document.NombreFormulario.STD_ID_GEO_DIV.value = "";
			document.NombreFormulario.SCO_CK_NAT_INT0.checked = true;
			m4valor("oculto","zNacInt","0","set");
			m4valor("NombreFormulario","zNacInt2","0","set");
		}
	}

	function comprobar()
		{
			var error = 0;
			var dtstart = "";
			var texto = m4getmessage("_sl_co_ess_pp_0") + "\n";
			var valorfec = m4fechahoy();
			dtstart = m4valor("NombreFormulario","DT_START","","get");
			dtstartok = m4fechacomprobacion(m4objeto('DT_START','NombreFormulario'),"");
			if (dtstart == null || dtstart == "")
				{
				texto = texto + "\n     " + m4getmessage("_sl_co_ess_pp_1");
				error = 1;
				}
			if ((dtstart != null && dtstart !="") && (dtstartok == ""))
				{
				texto = texto + "\n     " + m4getmessage("_sl_co_ess_pp_2");
				error = 1;
				}
			if (error == 1)
				{
				alert(texto);
				return;
				}					
			else 
				{
				m4submit("NombreFormulario");
				}
		}

</script>
<%

String zsubsesion = "SSE_CR_PREFERENC";
String zmeta4object = "SSE_CR_PREFERENC";
String znodo = "SSE_CR_PREFERENC";
String znodo2 = "M4T_COUNTRY";
String znodo3 = "M4T_GEO_DIV";
String znodo4 = "M4T_SUB_GEO_DIV";
String znodo5 = "M4T_WORK_UNIT";
String znodo6 = "M4T_JOB";
String ztipocarga = "SSE";
	   
String zventanas = "10";
int zvuelta = 5;
String zdireccion = "sse_g3/ssco_g3_p23_mod1.jsp";
String zestado = "31";

int zregistroinicial = Integer.valueOf(zinicios).intValue();
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;

String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" + znodo + "[FIRST]";
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String znamenodo  = znodo + ":" + zsubsesion  + "!" + znodo;
String zDT_START = zcomun + "DT_START"; 
String zSTD_OR_HR_PERIOD = zcomun + "STD_OR_HR_PERIOD"; 
String zSCO_OR_PREFER = zcomun + "SCO_OR_PREFER"; 
String zSCO_PREF_PRIORITY = zcomun + "SCO_PREF_PRIORITY"; 
String zSCO_CK_NAT_INT = zcomun + "SCO_CK_NAT_INT"; 
String zSTD_ID_SUB_GEO_DIV = zcomun + "STD_ID_SUB_GEO_DIV"; 
String zSTD_N_SUB_GEO_DIV = zcomun + "STD_N_SUB_GEO_DIV"; 
String zSTD_ID_GEO_DIV = zcomun + "STD_ID_GEO_DIV"; 
String zSTD_N_GEO_DIV = zcomun + "STD_N_GEO_DIV"; 
String zSTD_ID_COUNTRY = zcomun + "STD_ID_COUNTRY"; 
String zSTD_N_COUNTRY = zcomun + "STD_N_COUNTRY"; 
String zSTD_ID_WORK_UNIT = zcomun + "STD_ID_WORK_UNIT"; 
String zSTD_N_WORK_UNIT = zcomun + "STD_N_WORK_UNIT"; 
String zSTD_ID_JOB_CODE = zcomun + "STD_ID_JOB_CODE"; 
String zSTD_N_JOB_CODE = zcomun + "STD_N_JOB_CODE"; 
String zSCO_PREFERENCES = zcomun + "SCO_PREFERENCES"; 
String zSCO_COMMENT = zcomun + "SCO_COMMENT"; 
String zPAIS = zcomun + "PAIS";
String zPROVINCIA = zcomun + "PROVINCIA";

String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
String zmove2 = znodo2 + ":" +  znodo2+ "[FIRST]";   
String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
String znamenodo2  = znodo2 + ":" + zsubsesion  + "!" + znodo2;
String zSTD_ID_COUNTRY2 = zcomun2+ "STD_ID_COUNTRY"; 
String zSTD_N_COUNTRY2 = zcomun2+"STD_N_COUNTRY";

String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
String zmove3 = znodo3 + ":" +  znodo3+ "[FIRST]";   
String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
String zSTD_ID_GEO_DIV3 = zcomun3 + "STD_ID_GEO_DIV"; 
String zSTD_N_GEO_DIV3 = zcomun3 + "STD_N_GEO_DIV";

String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
String zmove4 = znodo4 + ":" +  znodo4+ "[FIRST]";   
String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&VAR.m4lix]" + ".";
String zSTD_ID_SUB_GEO_DIV4 = zcomun4 + "STD_ID_SUB_GEO_DIV"; 
String zSTD_N_SUB_GEO_DIV4 = zcomun4 + "STD_N_SUB_GEO_DIV"; 

String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
String zmove5 = znodo5 + ":" +  znodo5+ "[FIRST]";
String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&VAR.m4lix]" + ".";
String zSTD_ID_WORK_UNIT5 = zcomun5 + "STD_ID_WORK_UNIT"; 
String zSTD_N_WORK_UNIT5 = zcomun5 + "STD_N_WORK_UNIT"; 

String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";
String zmove6 = znodo6 + ":" +  znodo6+ "[FIRST]";
String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&VAR.m4lix]" + ".";
String zSTD_ID_JOB_CODE6 = zcomun6 + "STD_ID_JOB_CODE"; 
String zSTD_N_JOB_CODE6 = zcomun6 + "STD_N_JOB_CODE"; 
    

String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";

int zTab=1;
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
	<% try {
		    M4Operations m = new M4Operations(request); 
			m.setItem(zsubsesion,znodo,"","PAIS",zpais);  
			m.setItem(zsubsesion,znodo,"","PROVINCIA",zpro);			
			m.setItem(zsubsesion,znodo,"","CHECK_NAT_INT",zNacInt);			
			} catch(Exception e) {}
	%>
	<% try {
		    M4Operations m = new M4Operations(request); 
		    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
			} catch(Exception e) {}
	%>
	<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
	<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
	<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
	<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
	<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
	<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
	<m4:outputdef m4alias="<%=znodo6%>"><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove5%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove6%>"/></m4:move>
<%
int  zcount  = 0;
int  zcount2  = 0;
int  zcount3  = 0;
int  zcount4  = 0;
int  zcount5  = 0;
int  zcount6  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
	zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
	zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
	zcount4 = m.getCount(znodo4,zsubsesion,znodo4);
	zcount5 = m.getCount(znodo5,zsubsesion,znodo5);
	zcount6 = m.getCount(znodo6,zsubsesion,znodo6);
} catch(Exception e) {}
String	zcountv = String.valueOf(zcount);
String	zcountv2 = String.valueOf(zcount2);
String	zcountv3 = String.valueOf(zcount3);
String	zcountv4 = String.valueOf(zcount4);
String	zcountv5 = String.valueOf(zcount5);
String	zcountv6 = String.valueOf(zcount6);
%>

<table border="0" width="100%">
	<tr><td class="titulofuncional" colspan="2"><%=sse_g3Ess.getProperty("Title.ssco_g3_p23_mod1Des")%></td></tr>
	<tr>
		<td><img alt="<%=sse_g3Ess.getProperty("ev_ess.LinkHistEvOpen")%>" src="/iconos/noname_historial_evaluaciones_ess_93_100.gif" width="93" height="100"  /></td>
		<td>
			<div class="descripcionfuncional"><%=sse_g3Ess.getProperty("Label.ssco_g3_p23_mod1Des")%></div>
			<ul class="listaenlace">
				<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=sse_g3Ess.getProperty("Label.sse_g3_ppal")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3"><%=sse_g3Ess.getProperty("Link.sse_g3_ppal")%></a></li>
			</ul>
		</td>
	</tr>
</table>

<form action="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p23_mod1.jsp?estado=31" method="post" name="oculto" id="oculto">

	<input type="hidden" id="zDtStart" name="zDtStart"  value="" />
	<input type="hidden" id="zPrefPrior" name="zPrefPrior"  value="" />
	<input type="hidden" id="zNacInt" name="zNacInt"  value="" />
	<input type="hidden" id="zpais" name="zpais"  value="" />
	<input type="hidden" id="zpro" name="zpro"  value="" />
	<input type="hidden" id="zwu" name="zwu"  value="" />
	<input type="hidden" id="zjob" name="zjob"  value="" />
	<input type="hidden" id="zOPref" name="zOPref"  value="" />
	<input type="hidden" id="zCom" name="zCom"  value="" />

</form>

<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario" onsubmit="javascript:comprobar();">
<input type="hidden" id="TAG" name="TAG" value="SSE_CR_PREFERENC" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_CR_PREFERENC" />
<input type="hidden" id="zNacInt2" name="zNacInt2"  value="<%=zNacInt%>" />

<table class="tablaestados" width="100%" cellspacing="0" border="0" >
	<tr class="tablaestadosceldatitulo" >
		<td colspan= "5">&nbsp;<%=sse_g3Ess.getProperty("Title.ssco_g3_p23_mod1Des")%></td>
		<td class="tablamenuright"><a title="<%=sse_g3Ess.getProperty("Title.ssco_g3_p23_mod1")%>"href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p23.jsp?estado=11"><img alt="<%=sse_g3Ess.getProperty("Title.ssco_g3_p23_mod1")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td></tr>
	<tr>

		<td class="fuentecampo" colspan= "3">&nbsp;*&nbsp;<m4:label m4name="<%=zDT_START%>" htmlsafe="true"/> &nbsp;<input class="fuenteformulario" type="text" name="DT_START" id="DT_START" title="<%=Tran.getProperty("Label.LblWriteDate")%>&nbsp;<m4:label m4name="<%=zDT_START%>" htmlsafe="true"/>" value="<%=zDtStart%>" maxlength="10" size="10" tabindex="<%=zTab++%>" />&nbsp;<a href="javascript:m4calendario(m4objeto('DT_START','NombreFormulario'))" title="<%=Tran.getProperty("Label.LblSelectDate")%>&nbsp;<m4:label m4name="<%=zDT_START%>" htmlsafe="true"/>"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Tran.getProperty("Label.LblSelectDate")%>&nbsp;<m4:label m4name="<%=zDT_START%>" htmlsafe="true"/>" /></a></td>

		<td class="fuentecampo" colspan= "3"><m4:label m4name="<%=zSCO_PREF_PRIORITY%>" htmlsafe="true"/> &nbsp;<input class="fuenteformulario" type="text" name="SCO_PREF_PRIORITY" id="SCO_PREF_PRIORITY" title="&nbsp;<m4:label m4name="<%=zSCO_PREF_PRIORITY%>" htmlsafe="true"/>" value="<%=zPrefPrior%>" maxlength="10" size="10" tabindex="<%=zTab++%>"/>

	</tr>
	<tr>

		<td class= "fuentevalor" colspan= "2"><input type="radio" name="SCO_CK_NAT_INT" id= "SCO_CK_NAT_INT1" value="1" onclick="filtrarNacInter(1)" <%if (zNacInt.equals("1")){%>checked<%}%> tabindex="<%=zTab++%>"><%=sse_g3Ess.getProperty("Label.ssco_g3_p23_mod1Nac")%><br></td>
		<td class= "fuentevalor" colspan= "2"><input type="radio" name="SCO_CK_NAT_INT" id= "SCO_CK_NAT_INT2" value="2" onclick="filtrarNacInter(2)" <%if (zNacInt.equals("2")){%>checked<%}%> tabindex="<%=zTab++%>"><%=sse_g3Ess.getProperty("Label.ssco_g3_p23_mod1Int")%><br></td>
		<td class= "fuentevalor" colspan= "2"><input type="radio" name="SCO_CK_NAT_INT" id= "SCO_CK_NAT_INT0" value="0" onclick="filtrarNacInter(0)" <%if (zNacInt.equals("0")){%>checked<%}%> tabindex="<%=zTab++%>"><%=sse_g3Ess.getProperty("Label.ssco_g3_p23_mod1NoDef")%><br></td>

	</tr>
	<tr>
		<td class="fuentecampo"><m4:label item="STD_N_COUNTRY" htmlsafe="true" outputdef="<%=znodo%>"/> &nbsp;</td>
		<td class= "fuentevalor">

		<select id="STD_ID_COUNTRY" class = "fuenteformulario100" name="STD_ID_COUNTRY" title="<%=Tran.getProperty("Label.LblSelect")%>&nbsp;<m4:label m4name="<%=zSTD_N_COUNTRY2%>" htmlsafe="true"/>" onchange="filtrar(1)" tabindex="<%=zTab++%>" <%if (zNacInt == "0"){%> disabled<%}%>>
			<option value=""/></option>
			<m4:dataloop outputdef="<%=znodo2%>">
				<option value="<m4:item item="STD_ID_COUNTRY" htmlsafe="true" outputdef="<%=znodo2%>"/>"><m4:item item="STD_N_COUNTRY" htmlsafe="true" outputdef="<%=znodo2%>"/></option>
			</m4:dataloop>
	   	</select>

		<script type="text/javascript" language="Javascript1.5">
			<!--
				if ('<%=zpais%>'!= ""){m4searchoptioness("NombreFormulario","STD_ID_COUNTRY",'<%=zpais%>');}
			-->
		</script>

		</td>
		<td class="fuentecampo"><m4:label item="STD_N_GEO_DIV" htmlsafe="true" outputdef="<%=znodo%>"/> &nbsp;</td>
		<td class= "fuentevalor">

		<select id="STD_ID_GEO_DIV" class = "fuenteformulario100" name="STD_ID_GEO_DIV" title="<%=Tran.getProperty("Label.LblSelect")%>&nbsp;<m4:label m4name="<%=zSTD_N_GEO_DIV3%>" htmlsafe="true"/>" onchange="filtrar(2)" tabindex="<%=zTab++%>" <%if (zpais == ""){%> disabled<%}%>>
			<option value=""/></option>
			<m4:dataloop outputdef="<%=znodo3%>">
				<option value="<m4:item item="STD_ID_GEO_DIV" htmlsafe="true" outputdef="<%=znodo3%>"/>"><m4:item item="STD_N_GEO_DIV" htmlsafe="true" outputdef="<%=znodo3%>"/></option>
			</m4:dataloop>
	   	</select>

		<script type="text/javascript" language="Javascript1.5">
			<!--
				if ('<%=zpro%>'!= ""){m4searchoptioness("NombreFormulario","STD_ID_GEO_DIV",'<%=zpro%>');}
			-->
		</script>
		</td>
		<td class="fuentecampo"><m4:label item="STD_N_SUB_GEO_DIV" htmlsafe="true" outputdef="<%=znodo%>"/> &nbsp;</td>
		<td class= "fuentevalor">
		<select id="STD_ID_SUB_GEO_DIV" class = "fuenteformulario100" name="STD_ID_SUB_GEO_DIV" title="<%=Tran.getProperty("Label.LblSelect")%>&nbsp;<m4:label m4name="<%=zSTD_N_SUB_GEO_DIV4%>" htmlsafe="true"/>" tabindex="<%=zTab++%>"  <%if (zpro == ""){%> disabled<%}%>>
			<option value=""/></option>
			<m4:dataloop outputdef="<%=znodo4%>">
				<option value="<m4:item item="STD_ID_SUB_GEO_DIV" htmlsafe="true" outputdef="<%=znodo4%>"/>"><m4:item item="STD_N_SUB_GEO_DIV" htmlsafe="true" outputdef="<%=znodo4%>"/></option>
			</m4:dataloop>
	   	</select>

		</td>


	</tr>
	<tr>
		<td class="fuentecampo"><m4:label item="STD_N_WORK_UNIT" htmlsafe="true" outputdef="<%=znodo%>"/> &nbsp;</td>
		<td class= "fuentevalor" colspan= "2">
		<select id="STD_ID_WORK_UNIT" class = "fuenteformulario200" name="STD_ID_WORK_UNIT" title="<%=Tran.getProperty("Label.Uo")%>" tabindex="<%=zTab++%>">
			<option value=""></option>
			<m4:dataloop outputdef="<%=znodo5%>">
				<option id="<m4:item item="STD_ID_WORK_UNIT" htmlsafe="true" outputdef="<%=znodo5%>"/>"value="<m4:item item="STD_ID_WORK_UNIT" htmlsafe="true" outputdef="<%=znodo5%>"/>"><m4:item item="STD_N_WORK_UNIT" htmlsafe="true" outputdef="<%=znodo5%>"/></option>
			</m4:dataloop>
	   	</select>
		</td>

		<script type="text/javascript" language="Javascript1.5">
			<!--
				if ('<%=zwu%>'!= ""){m4searchoptioness("NombreFormulario","STD_ID_WORK_UNIT",'<%=zwu%>');}
			-->
		</script>

		<td class="fuentecampo"><m4:label item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo%>"/> &nbsp;</td>
		<td class= "fuentevalor" colspan= "2">
		<select id="STD_ID_JOB_CODE" class = "fuenteformulario200" name="STD_ID_JOB_CODE" title="<%=Tran.getProperty("Label.Job")%>" tabindex="<%=zTab++%>">
			<option value="" ></option>
			<m4:dataloop outputdef="<%=znodo6%>">
				<option id="<m4:item item="STD_ID_JOB_CODE" htmlsafe="true" outputdef="<%=znodo6%>"/>" value="<m4:item item="STD_ID_JOB_CODE" htmlsafe="true" outputdef="<%=znodo6%>"/>"><m4:item item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo6%>"/></option>
			</m4:dataloop>
	   	</select>
		</td>
		<script type="text/javascript" language="Javascript1.5">
			<!--
				if ('<%=zjob%>'!= ""){m4searchoptioness("NombreFormulario","STD_ID_JOB_CODE",'<%=zjob%>');}
			-->
		</script>

	<tr>
		<td class="fuentecampo"><m4:label m4name="<%=zSCO_PREFERENCES%>" htmlsafe="true"/></td>
		<td class= "fuentevalor" colspan= "5"><input class="fuenteformulario" type="text" name="SCO_PREFERENCES" id="SCO_PREFERENCES" title="<%=Tran.getProperty("Label.OtrasPreferencias")%>" maxlength="254" size="130" tabindex="<%=zTab++%>" value="<%=zOPref%>" />&nbsp;</td>
	</tr>
	<tr>
		<td class="fuentecampo"><m4:label m4name="<%=zSCO_COMMENT%>" htmlsafe="true"/></td>
		<td class= "fuentevalor" colspan= "5"><input class="fuenteformulario" type="text" name="SCO_COMMENT" id="SCO_COMMENT" title="<%=Tran.getProperty("Label.Comment2")%>" maxlength="254" size="130" tabindex="<%=zTab++%>" value="<%=zCom%>" />&nbsp;</td>
	</tr>
	<tr>
		<td class="fuenteboton" colspan="6">&nbsp;<a title="<%=Tran.getProperty("Button.Send")%>"href="javascript:comprobar();" tabindex="<%=zTab++%>"><img alt="<%=Tran.getProperty("Button.Send")%>"src="/iconos/icono_enviar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
	</tr>
</table>
</form>
<% if (zcount > 0){%>
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
	<tr>
				<td class="tablaestadosceldatitulo" colspan="7">&nbsp;<%=Tran.getProperty("Label.TableValPen")%></td>
	</tr>
<m4:dataloop outputdef="<%=znodo%>">
	<m4:current m4varname="current" outputdef="<%=znodo%>"/>
	<tr>
		<td class="fuentecampoaccion">&nbsp;<m4:item  item="N_ACCION" htmlsafe="true" outputdef="<%=znodo%>"/></td>
		<td class="fuentecampo"><m4:label item="SCO_PREF_PRIORITY" htmlsafe="true" outputdef="<%=znodo%>"/></td>
		<td class="fuentevalor">&nbsp;<m4:item item="SCO_PREF_PRIORITY" htmlsafe = "true" outputdef="<%=znodo%>"/></td>
		<td class="fuentecampo"><m4:label item="DT_START" htmlsafe="true" outputdef="<%=znodo%>"/></td>
		<td class="fuentevalor"colspan="2">&nbsp;<m4:item item="DT_START" htmlsafe = "true" outputdef="<%=znodo%>"/></td>
		<td class="fuentebotonright"><a title="<%=Tran.getProperty("Button.Delete2")%>"href="javascript:pendientes('<m4:item  item="ORDINAL" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true"/>');" tabindex="<%=zTab++%>"><img class="tablamenuright" alt="<%=Tran.getProperty("Button.Delete2")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)"  /></a></td>
	</tr>
	<tr>
		<td class="fuentecampo"><m4:label item="STD_N_WORK_UNIT" htmlsafe="true" outputdef="<%=znodo%>"/></td>
		<td class="fuentevalor" colspan="2">&nbsp;<m4:item item="STD_N_WORK_UNIT" htmlsafe = "true" outputdef="<%=znodo%>"/></td>
		<td class="fuentecampo"><m4:label item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
		<td class="fuentevalor" colspan="2">&nbsp;<m4:item item="STD_N_JOB_CODE" htmlsafe = "true" outputdef="<%=znodo%>"/></td>
		<td class="fuentevalor" rowspan="4">&nbsp;</td>
	</tr>
	<tr>
		<td class="fuentecampo"><m4:label item="STD_N_COUNTRY" htmlsafe="true" outputdef="<%=znodo%>"/></td>
		<td class="fuentevalor">&nbsp;<m4:item item="STD_N_COUNTRY" htmlsafe = "true" outputdef="<%=znodo%>"/></td>
		<td class="fuentecampo"><m4:label item="STD_N_GEO_DIV" htmlsafe="true" outputdef="<%=znodo%>"/></td>
		<td class="fuentevalor">&nbsp;<m4:item item="STD_N_GEO_DIV" htmlsafe = "true" outputdef="<%=znodo%>"/></td>
		<td class="fuentecampo"><m4:label item="STD_N_SUB_GEO_DIV" htmlsafe="true" outputdef="<%=znodo%>"/></td>
		<td class="fuentevalor">&nbsp;<m4:item item="STD_N_SUB_GEO_DIV" htmlsafe = "true" outputdef="<%=znodo%>"/></td>
	</tr>	
	<tr>
		<td class="fuentecampo"><m4:label item="SCO_PREFERENCES" htmlsafe="true" outputdef="<%=znodo%>"/></td>
		<td class="fuentevalor" colspan="5">&nbsp;<m4:item item="SCO_PREFERENCES" htmlsafe = "true" outputdef="<%=znodo%>"/></td>
	</tr>	
	<tr>
		<td class="fuentecampo"><m4:label item="SCO_COMMENT" htmlsafe="true" outputdef="<%=znodo%>"/></td>
		<td class="fuentevalor" colspan="5">&nbsp;<m4:item item="SCO_COMMENT" htmlsafe = "true" outputdef="<%=znodo%>"/></td>
	</tr>	
	<%if ((zcount > 1) & (current != zcountv)){%><tr><td class="separadorlinea" colspan="7"><hr /></td></tr><%}%>	
</m4:dataloop>
</table>
<%@include file="../sse_generico/espanol/generico_ventanas.jsp"%>
<br/><br/>
<%}else{%>	
	<div class="fuentenodatos"><%=sse_g3Ess.getProperty("Label.ssco_g3_p23_mod1NoData")%></div>
	<br/> <br/>
<%}%>
<script type="text/javascript">	m4focus("NombreFormulario","DT_START");</script>
