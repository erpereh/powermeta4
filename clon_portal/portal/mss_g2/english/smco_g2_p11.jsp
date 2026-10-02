<%@ include file="../../sse_generico/ssco_report_cab.jsp" %>
<%@ include file="../../mss_g2/smco_g2_trans.jsp" %>
<%
String estado ="21";
String zredireccion = "mss_g2/smco_g2_p11.jsp";
//Nombre del canal 
String zm4object  = "SSCO_OR_RP_BUDGET_SAL_WU";
//Nodo de visualización
String znodoview  = "SSCO_OR_RP_BUDGET_SAL_WU";
String znodoL ="SSCO_WORK_UNITS";
String zSCO_FLT_CK_WU_LVL="";
String zxwu="";
%>

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

var dcut = m4valor("NombreFormulario","SCO_CUT_DATE","","get");
if (dcut == null || dcut == ""){
   Today = m4fechahoy();
   m4valor("NombreFormulario","SCO_CUT_DATE",Today,"set");
}else{
	var dcutok = m4fechacomprobacion(m4objeto('SCO_CUT_DATE','NombreFormulario'),"");
	if (dcutok == ""){
		texto=texto+"\n"+m4getmessage("_sl_smco_2");
			error=1;
	}
}
var sworkunit = m4valor("NombreFormulario","STD_ID_WORK_UNIT_PARAM","","get");
if (sworkunit == null || sworkunit == ""){
	texto=texto+"\n"+m4getmessage("_sl_smco_1");
			error=1;
}

var sckwu = document.forms["NombreFormulario"].elements["SCO_FLT_CK_WU_LVL1"];
if (sckwu.checked == true){
	sValue="1";
}else{
	sValue="0";
}
m4valor("NombreFormulario","SCO_FLT_CK_WU_LVL",sValue,"set");

if (error == 1){
	alert(texto);
	return;
}else {
m4submit("NombreFormulario") ;
}

}

function Today(){
dcutdate=m4valor("NombreFormulario","SCO_CUT_DATE","","get");
if (dcutdate == null || dcutdate ==""){
   Today = m4fechahoy();
   m4valor("NombreFormulario","SCO_CUT_DATE",Today,"set");
}
}

</script>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=Transg2.getProperty("Title.smco_g2_p11")%></td></tr>
<tr>
<td><img alt="<%=Transg2.getProperty("Title.smco_g2_p11")%>"title="<%=Transg2.getProperty("Title.smco_g2_p11")%>" src="/iconos/noname_banco_79_100.gif" width="100" height="100" /></td>
<td><div class="descripcionfuncional"><%=Transg2.getProperty("Desc.smco_g2_p11")%></div>
</td>
</tr>
</table>
<%@ include file="../../sse_generico/ssco_report_form.jsp" %>
<% String sSHCO_P_EXEC_PROCESS = "STD_ID_WORK_UNIT_PARAM";
sSHCO_P_EXEC_PROCESS = M4PresentationUtilTaglib.secureEncrypt(request, "shco_rp", sSHCO_P_EXEC_PROCESS);%>
<input type="hidden"id="SHCO_P_EXEC_PROCESS"name="SHCO_P_EXEC_PROCESS"value="<%=sSHCO_P_EXEC_PROCESS%>"/>
<table class="form" width="100%">
<thead><tr class="titulo">
<th colspan="2">&nbsp;<%=Transg2.getProperty("Cab.smco_g2_p11")%></th>
</tr></thead>
<tbody>
<tr>
<td class="fuentecampo" >&nbsp;*&nbsp;<m4:label  item="STD_ID_WORK_UNIT_PARAM" htmlsafe="true" outputdef="<%=znodoview%>"/></td> 
<td class="fuentecampo" >
	<select tabindex="1"id="STD_ID_WORK_UNIT_PARAM" class="fuenteformulario" name="STD_ID_WORK_UNIT_PARAM" title=" <m4:label  item="STD_ID_WORK_UNIT_PARAM" htmlsafe="true" outputdef="<%=znodoview%>"/>">
			<option value=""></option>
			<m4:dataloop outputdef="<%=znodoL%>">
              <m4:item m4varname="sSCO_ID_WORK_UNIT" item="SCO_ID_WORK_UNIT" htmlsafe="true" outputdef="<%=znodoL%>"/>
              <%String sSCO_ID_WORK_UNIT_Encr = M4PresentationUtilTaglib.secureEncrypt(request, "shco_rp", sSCO_ID_WORK_UNIT); %>
              <option value="<%=sSCO_ID_WORK_UNIT_Encr%>"><m4:item item="STD_N_WORK_UNIT" htmlsafe="true" outputdef="<%=znodoL%>"/></option>
			</m4:dataloop>
	</select>
	&nbsp;&nbsp;&nbsp;&nbsp;<input  tabindex="2" type="checkbox" id="SCO_FLT_CK_WU_LVL1"  name="SCO_FLT_CK_WU_LVL1"  title=" <m4:label  item="SCO_FLT_CK_WU_LVL" htmlsafe="true" outputdef="<%=znodoview%>"/>" <%=zxwu%> />&nbsp;<m4:label  item="SCO_FLT_CK_WU_LVL"  htmlsafe="true" outputdef="<%=znodoview%>"/>
	<input type="hidden" id="SCO_FLT_CK_WU_LVL" name="SCO_FLT_CK_WU_LVL"  value="" />
	</td>
</tr>
<tr>
<td class="fuentecampo">&nbsp;<m4:label  item="SCO_CUT_DATE" htmlsafe="true" outputdef="<%=znodoview%>"/></td> 
<td class="fuentevalor"><input tabindex="3" class="fuenteformulario" value=""type="text" name="SCO_CUT_DATE" id="SCO_CUT_DATE" title="<m4:label  item="SCO_CUT_DATE" htmlsafe="true" outputdef="<%=znodoview%>"/>" maxlength="10" size="10" />&nbsp;<a tabindex="3" href="javascript:m4calendario(m4objeto('SCO_CUT_DATE','NombreFormulario'))"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt=" <m4:label  item="SCO_CUT_DATE" htmlsafe="true" outputdef="<%=znodoview%>"/>" /></a></td>
</tr>
<script type="text/javascript" language="Javascript1.5"><!--
Today();
--></script>
<tr><td class="fuenteboton"  colspan="2"><a href="javascript:val();"tabindex="4" ><img alt="<m4:label m4name="<%=zSHCOLBEXEC%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBEXEC%>" htmlsafe="true"/>" src="/iconos/icono_crear_mss_36_36.gif" /></a>&nbsp;</td></tr>
</tbody>
</table>
</form>
<script type="text/javascript" language="Javascript1.5">m4tabfocus('NombreFormulario',1);</script>
<%@ include file="../../sse_generico/ssco_report_end.jsp" %>
</body></html>

