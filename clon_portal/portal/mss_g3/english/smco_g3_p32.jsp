<%@ include file="../../sse_generico/ssco_report_cab.jsp" %>
<%@ include file="../../mss_g3/mss_g3_trans.jsp" %>
<%
String estado ="21";
String zredireccion = "mss_g3/smco_g3_p32.jsp";
//Nombre del canal 
String zm4object  = "SSCO_RP_TRAINC_WU_BUDG";
//Nodo de visualización
String znodoview  = "SSCO_RP_TRAINC_WU_BUDG";
String znodoL ="SSCO_WORK_UNITS";

String zSCO_FLT_CK_WU_LVL="";
String zxwu="";
String zSCO_P_PRINT_SOLIC = "1";
String zxps="";


%>

<%if (zSCO_P_PRINT_SOLIC.equals("1")){zxps="checked=\"checked\"";}%>
<%if (zSCO_FLT_CK_WU_LVL.equals("1")){zxwu="checked=\"checked\"";}%>

<%@ include file="../../sse_generico/ssco_report_exec.jsp" %>

<m4:outputdef m4alias="<%=znodoL%>" m4object="<%=zm4object%>" node="SSCO_WORK_UNITS" records="*"/>

<%@ include file="../../sse_generico/ssco_report_exec2.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%@ include file="../../sse_generico/ssco_report_error.jsp" %>

<script type="text/javascript" language="Javascript1.5">
function val(){
var error = 0;
var texto =m4getmessage("_sl_ssco_gn_1");

var dcut = m4valor("NombreFormulario","SCO_P_CUT_DATE","","get");
if (dcut == null || dcut == ""){
   texto = texto + "\n" +  m4getmessage("_sl_co_payment_data_2");
   error = 1;
}else{
	var dcutok = m4fechacomprobacion(m4objeto('SCO_P_CUT_DATE','NombreFormulario'),"");
	if (dcutok == ""){
		texto=texto+"\n"+m4getmessage("_sl_smco_2");
			error=1;
	}
}
var sworkunit = m4valor("NombreFormulario","STD_P_ID_WORK_UNIT","","get");

var sckwu = document.forms["NombreFormulario"].elements["SCO_FLT_CK_WU_LVL1"];
if (sckwu.checked == true){
	sValue="1";
}else{
	sValue="0";
}
m4valor("NombreFormulario","SCO_FLT_CK_WU_LVL",sValue,"set");

var sckps = document.forms["NombreFormulario"].elements["SCO_P_PRINT_SOLIC1"];
if (sckps.checked == true){
	sValue="1";
}else{
	sValue="0";
}
m4valor("NombreFormulario","SCO_P_PRINT_SOLIC",sValue,"set");

if (error == 1){
	alert(texto);
	return;
}else {
m4submit("NombreFormulario") ;
}

}

function agrpcur(){
sValue="1";
m4valor("NombreFormulario","SCO_AGRUP_CURSO",sValue,"set");
}



function agrppf(){
sValue="0";
m4valor("NombreFormulario","SCO_AGRUP_CURSO",sValue,"set");
}

function Today(){
dcutdate=m4valor("NombreFormulario","SCO_P_CUT_DATE","","get");
if (dcutdate == null || dcutdate ==""){
   Today = m4fechahoy();
   m4valor("NombreFormulario","SCO_P_CUT_DATE",Today,"set");
}
}


</script>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="4"><%=mss_g3.getProperty("Title.mss_g3_p32")%></td></tr>
<tr>
<td><img alt="<%=mss_g3.getProperty("Title.mss_g3_p32")%>"title="<%=mss_g3.getProperty("Title.mss_g3_p32")%>" src="/iconos/noname_puesto_144_100.gif" width="100" height="100" /></td>
<td><div class="descripcionfuncional"><%=mss_g3.getProperty("Desc.mss_g3_p32")%></div>
</td>
</tr>
</table>
<%@ include file="../../sse_generico/ssco_report_form.jsp" %>
<% String sSHCO_P_EXEC_PROCESS = "STD_P_ID_WORK_UNIT";
sSHCO_P_EXEC_PROCESS = M4PresentationUtilTaglib.secureEncrypt(request, "shco_rp", sSHCO_P_EXEC_PROCESS);%>
<input type="hidden"id="SHCO_P_EXEC_PROCESS"name="SHCO_P_EXEC_PROCESS"value="<%=sSHCO_P_EXEC_PROCESS%>"/>
<table class="form" width="100%" >
<thead><tr class="titulo">
<th colspan="4">&nbsp;<%=mss_g3.getProperty("Cab.mss_g3_p32")%></th>
</tr></thead>
<tbody>
<tr>
<td class="fuentecampo" >&nbsp;<m4:label  item="STD_P_ID_WORK_UNIT" htmlsafe="true" outputdef="<%=znodoview%>"/> </td> 
<td>	<select tabindex="1"id="STD_P_ID_WORK_UNIT" class="fuenteformulario" name="STD_P_ID_WORK_UNIT" title=" <m4:label  item="STD_P_ID_WORK_UNIT" htmlsafe="true" outputdef="<%=znodoview%>"/>">
			<option value=""></option>
			<m4:dataloop outputdef="<%=znodoL%>">
              <m4:item m4varname="sSCO_ID_WORK_UNIT" item="SCO_ID_WORK_UNIT" htmlsafe="true" outputdef="<%=znodoL%>"/>
              <%String sSCO_ID_WORK_UNIT_Encr = M4PresentationUtilTaglib.secureEncrypt(request, "shco_rp", sSCO_ID_WORK_UNIT); %>
              <option value="<%=sSCO_ID_WORK_UNIT_Encr%>"><m4:item  item="STD_N_WORK_UNIT" htmlsafe="true" outputdef="<%=znodoL%>"/></option>
			</m4:dataloop>
	</select>		
	<input  tabindex="2" type="checkbox" id="SCO_FLT_CK_WU_LVL1"  name="SCO_FLT_CK_WU_LVL1"  title=" <m4:label  item="SCO_FLT_CK_WU_LVL" htmlsafe="true" outputdef="<%=znodoview%>"/>" <%=zxwu%> />&nbsp;<m4:label  item="SCO_FLT_CK_WU_LVL"  htmlsafe="true" outputdef="<%=znodoview%>"/>
	<input type="hidden" id="SCO_FLT_CK_WU_LVL" name="SCO_FLT_CK_WU_LVL"  value="" /> 
</td>
</tr>

<tr>
<td class="fuentecampo" >*&nbsp;<m4:label  item="SCO_P_CUT_DATE" htmlsafe="true" outputdef="<%=znodoview%>"/></td> 
<td><input tabindex="4"class="fuenteformulario" value=""type="text" name="SCO_P_CUT_DATE" id="SCO_P_CUT_DATE" title="<m4:label  item="SCO_P_CUT_DATE" htmlsafe="true" outputdef="<%=znodoview%>"/>" maxlength="10" size="10" />&nbsp;<a tabindex="4" href="javascript:m4calendario(m4objeto('SCO_P_CUT_DATE','NombreFormulario'))"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt=" <m4:label  item="SCO_P_CUT_DATE" htmlsafe="true" outputdef="<%=znodoview%>"/>" /></a>
</td>
</tr>

<script type="text/javascript" language="Javascript1.5"><!--
Today();
--></script>

<tr>
<td>
</td>
<td>	
	<input  tabindex="3" type="checkbox" id="SCO_P_PRINT_SOLIC1"  name="SCO_P_PRINT_SOLIC1"  title=" <m4:label  item="SCO_P_PRINT_SOLIC" htmlsafe="true" outputdef="<%=znodoview%>"/>" <%=zxps%> />&nbsp;<m4:label  item="SCO_P_PRINT_SOLIC"  htmlsafe="true" outputdef="<%=znodoview%>"/>
	<input type="hidden" id="SCO_P_PRINT_SOLIC" name="SCO_P_PRINT_SOLIC"  value="" />
</td>
<tr>
<td>
</td>
<td><a>&nbsp;<%=mss_g3.getProperty("Label.mss_g3_p32_agrp")%></a>
<a class="fuentevalor"><input tabindex="5" id="SCO_AGRUP_CURSO1" name="SCO_AGRUP_CURSO1" class="fuentevalor1" type="radio"  value="1" onclick="javascript:agrpcur()" checked="checked" title="<%=mss_g3.getProperty("Label.mss_g3_p32_agrp_c2")%>"/>&nbsp;<%=mss_g3.getProperty("Label.mss_g3_p32_agrp_c")%></a>
<a class="fuentevalor"><input id="SCO_AGRUP_CURSO1" name="SCO_AGRUP_CURSO1" class="fuentevalor1" type="radio" value="0"  onclick="javascript:agrppf()" title="<%=mss_g3.getProperty("Label.mss_g3_p32_agrp_pf2")%>"/>&nbsp;<%=mss_g3.getProperty("Label.mss_g3_p32_agrp_pf")%></a>
<input type="hidden" id="SCO_AGRUP_CURSO" name="SCO_AGRUP_CURSO"  value="1" />
</td>
<tr>
</tr>

<tr><td class="fuenteboton"  colspan="3"><a href="javascript:val();"tabindex="5" ><img alt="<m4:label m4name="<%=zSHCOLBEXEC%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBEXEC%>" htmlsafe="true"/>" src="/iconos/icono_crear_mss_36_36.gif" /></a>&nbsp;</td></tr>

</tbody>

</table>
</form>
<script type="text/javascript" language="Javascript1.5">m4tabfocus('NombreFormulario',1);</script>
<%@ include file="../../sse_generico/ssco_report_end.jsp" %>
</body></html>
