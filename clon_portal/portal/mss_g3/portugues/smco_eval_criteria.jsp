<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd"> 
<html>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<%@ include file="../../sse_generico/sgco_gen_inc.jsp" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<%@ include file="/mss_generico/mss_generico_trans.jsp" %>
<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_filter.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/func_eval.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<script type="text/javascript">
function m4_con(){
	var error = 0;
	var texto = m4getmessage("_sl_co_mss_cri");
	var Org= m4valor("NombreFormulario","SMCO_ORG","","get");
	var Org_c = new m4objvalidacion('_decimal2','2','','','',false);
	if (Org==''){m4valor("NombreFormulario","SMCO_ORG",0,"set");Org=0;}
	Org_c.m4validar(m4objeto("SMCO_ORG","NombreFormulario"));
	if (Org!=0){
		if (Org_c.resultado == false){
	   texto = texto + "\n" + m4getmessage("_sl_co_mss_crit_1");
	   error = 1;
	   }
	 }
	var personal = m4valor("NombreFormulario","SMCO_PERSONAL","","get");
	if (personal==''){m4valor("NombreFormulario","SMCO_PERSONAL","0","set");personal=0;}
	var personal_c = new m4objvalidacion('_decimal2','2','','','',false);
	personal_c.m4validar(m4objeto("SMCO_PERSONAL","NombreFormulario"));
	if (personal!=0){
		if (personal_c.resultado == false){
		   texto = texto + "\n" + m4getmessage("_sl_co_mss_crit_2");
		   error = 1;
		}
	 }
	if ( error ==1){
		alert(texto);
		return false;
	 }
	var total =parseFloat(Org)+parseFloat(personal);
	if (total ==parseFloat(100) ){
		m4submit("NombreFormulario");
	}else{
		texto = texto + "\n" + m4getmessage("_sl_co_mss_crit_3");
		alert(texto);
		return false;
	}
}
</script> 
<%
String zIdHr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid");
String zOrRole = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zor");
String zDtStart = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdt");
String zValues = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zValues");
String zidType= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idType");

String ACC =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ACC");
if ((ACC==null)||(ACC.equals(""))){ACC="LOAD";}
String zOrg =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_ORG");
String zPersonal =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_PERSONAL");
if ((zOrg==null)||(zOrg.equals(""))){zOrg="0";}
if ((zPersonal==null)||(zPersonal.equals(""))){zPersonal="0";}

String zsubsesion = "SMCO_EVAL_CRITERIA";
String zmeta4object = zsubsesion;
String znodo = "SMCO_EVAL_CRITERIA_E";
String zoutputdef = zsubsesion + "!" + znodo + "[*]";   
 
String zmetodo = zsubsesion + "!" + znodo + ".SMCO_LOAD";
String zmetodo2 = zsubsesion + "!" + znodo + ".SMCO_CHANGE_CAPAB";
String zliteral=TranMss.getProperty("ev_mss.TCriCapab");
if (zidType.equals("0")){
 zmetodo2 = zsubsesion + "!" + znodo + ".SMCO_CHANGE_O";
zliteral=TranMss.getProperty("ev_mss.TCriObj");
}else if (zidType.equals("1")){
 zmetodo2 = zsubsesion + "!" + znodo + ".SMCO_CHANGE_OC";
zliteral=TranMss.getProperty("ev_mss.TCriObj0");
}
 
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<%if (ACC=="LOAD"){%>
<m4:exec m4method="<%=zmetodo%>">
<m4:param name="ARG_ID_HR" value="<%=zIdHr%>"/>
<m4:param name="ARG_OR_ROLE" value="<%=zOrRole%>"/>
<m4:param name="ARG_DT_START" value="<%=zDtStart%>"/>
</m4:exec>
<%}else{%>
<m4:exec m4method="<%=zmetodo2%>">
<m4:param name="ARG_PERSONAL" value="<%=zPersonal%>"/>
<m4:param name="ARG_ORG" value="<%=zOrg%>"/>
<m4:param name="ARG_TYPE" value="<%=zidType%>"/>
</m4:exec>
<%}%>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<%if (ACC=="LOAD"){%>
<head><title><%=TranMss.getProperty("ev_mss.TCriCapab")%></title></head>	
<body>
<form id="NombreFormulario" name="NombreFormulario" action="/servlet/CheckSecurity/JSP/mss_g3/smco_eval_criteria.jsp">
<input id="idType" name="idType" type="hidden" value="<%=zidType%>" />
<input id="ACC" name="ACC" type="hidden" value="LOAD" />
<table  width="100%" cellspacing="0" border="0" >
<tr class="tablaestadosceldatitulo">
<td colspan="2" ><%=zliteral%></td></tr>
<tr><td class="fuentecampo"colspan="2"><%= TranMss.getProperty("ev_mss.LblCri")%>&nbsp;<m4:item item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo%>"  />&nbsp;<%= TranMss.getProperty("ev_mss.LblCri1")%>&nbsp;<m4:item item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>"  /></td></tr>
<tr><td class="fuentecampo">&nbsp;<%=TranMss.getProperty("ev_mss.zlabelOrg")%>&nbsp;</td><td class="fuentecampo"><input class="fuenteformulario" type="text" id="SMCO_ORG" name="SMCO_ORG" size="5" maxlength="5" tabindex="1" title="<%=TranMss.getProperty("ev_mss.zlabelOrg")%>" value =""  /></td></tr>
<tr><td class="fuentecampo">&nbsp;<%=TranMss.getProperty("ev_mss.zlabelPersonal")%>&nbsp;</td><td class="fuentecampo"><input class="fuenteformulario" type="text" id="SMCO_PERSONAL" name="SMCO_PERSONAL" size="5" maxlength="5" tabindex="2" title="<%=TranMss.getProperty("ev_mss.zlabelPersonal")%>" value =""  /></td></tr>
<tr><td class="fuenteboton"colspan="2"><a onclick="javascript:m4_con();"><img alt="<%=Tran.getProperty("Button.Ok")%>" src="/iconos/icono_enviar_ess_36_36.gif" height="36" width="36"></img></a></td></tr>
</table>
</form>
<%}else{%>
<head><title><%=Tran.getProperty("Title.ssco_act")%></title></head>	
<body>
<br /><br /><br /><br /><br /><br /><br /><br />
<table align="center" cellpadding="0" cellspacing="0">
<tr><td class="fuenteactualizar2"><%= TranMss.getProperty("Title.ssco_act")%></td></tr>
</table>
<script type="text/javascript" language="Javascript1.5"><!--
if(typeof(opener.window)=='object'){
window.opener.location.reload();
}
window.close()
--></script>
<%}%>		
<m4:endpage/>
</body>
</html>