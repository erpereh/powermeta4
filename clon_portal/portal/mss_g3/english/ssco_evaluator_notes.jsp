<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd"> 
<html>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<%@ include file="../../sse_generico/sgco_gen_inc.jsp" %>
<%@ include file="/mss_generico/mss_generico_trans.jsp" %>
<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_filter.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/func_eval.js"></script>

<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript">
function returnvalues(ar){
if (typeof(opener.oventana) == "object"){
for (var i=0; i < opener.oventana.m4prop_areturnedValue.length; i++){

  if (typeof(ar[i]) != "undefined"){
   opener.oventana.m4prop_areturnedValue[i].value =  ar[i];
  }
}}
if (typeof(opener.oventana) == "object"){   
   if (opener.oventana.m4prop_afterclosewindowmet != ""){ 
   		eval('opener.'+opener.oventana.m4prop_afterclosewindowmet);
   }
   opener.oventana = "";
}

window.close();
}
</script> 
<%
String zIdHr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid");
String zOrRole = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zor");
String zDtStart = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdt");
String zValues = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zValues");
String nombre = "";
String valor = "";
	
String zparametro = "";
String zsubsesion = "SRCO_HR_IN_OBJECTIVES_SUMMARY";
String zmeta4object = zsubsesion;
String znodo = "SRCO_HR_IN_APPRAISEE";

String zoutputdef = zsubsesion + "!" + znodo + "[*]";   
 
String zmetodo = zsubsesion + "!" + znodo + ".SRCO_CALC_ATT_RATE_APPRAI_ESS";
  
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>">
<m4:param name="ARG_SCO_ID_HR" value="<%=zIdHr%>"/>
<m4:param name="ARG_SCO_OR_HR_ROLE" value="<%=zOrRole%>"/>
<m4:param name="ARG_DT_START_EVAL" value="<%=zDtStart%>"/>
<m4:param name="ARG_VALUES" value="<%=zValues%>"/>
</m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<head><title><%=Tran.getProperty("Title.ssco_act")%></title></head>	
<body>
<br /><br /><br /><br /><br /><br /><br /><br />
<table align="center" cellpadding="0" cellspacing="0">
<tr><td class="fuenteactualizar2"><%= TranMss.getProperty("ev_mss.LblCalcObj")%></td></tr>
</table>
<script type="text/javascript" language="Javascript1.5"><!--
	var vmensaje=m4getmessage("_sl_co_mss_ev_23",'<m4:item item="SRCO_TOTAL_QUANT_ATT_RATE" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true" />');
    if ( confirm(vmensaje) == true){
		var aval=new Array();
		aval[0]='<m4:item item="SRCO_TOTAL_QUANT_ATT_RATE" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true" />';
		
		returnvalues(aval);
		
     }else{
     window.close();
     }

--></script>
<m4:endpage/>
</body>
</html>