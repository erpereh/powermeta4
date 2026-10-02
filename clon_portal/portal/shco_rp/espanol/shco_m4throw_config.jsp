<%-- =========================================================
	@(#) FileVersion: 823.001.002
	@(#) FileDescription: shco_m4throw_config.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2025
	@(#) ProductName: Peoplenet
========================================================= --%>

<%@ include file="../../shco_g0/shco_gen_taglib.jsp" %>
<html><head><title></title>
<%@ include file="/shco_g0/shco_gen_arg.jsp" %><%@ include file="/shco_g0/shco_gen_bag.jsp" %>
<%@ include file="/shco_rp/shco_m4throw_srp_html_m4def.jsp" %>
<%@ include file="/shco_g0/shco_gen_css.jsp" %>
<%@ include file="/shco_g0/shco_gen_normal_js.jsp" %>
<%@ include file="/shco_g0/shco_gen_tec_include.jspf" %>
</head><body onclick="meta4Cookie.Cookie.setEventCookie();" onkeypress="meta4Cookie.Cookie.setEventCookie();">
<%@ include file="/shco_g0/shco_gen_act_body.jsp" %>

<%
  String zID_PARAMS_INSTANCE = request.getParameter(zIdParamsInstance); // Instancia a editar

// Sanitizar y obligar a que sea alfanumerico y si no lo es, se queda el valor por defecto
if (!java.util.regex.Pattern.matches(sPattern, zID_PARAMS_INSTANCE)) {
   zID_PARAMS_INSTANCE = null;
}
if (zID_PARAMS_INSTANCE == null || zID_PARAMS_INSTANCE.equals("")) {
   zID_PARAMS_INSTANCE = "ID_PARAMS_INSTANCE";
}


  // Ver si venimos ya de la pantalla configuración en cuyo caso debe venir el parámetro con valor a false
  String zAskConfigParamRequestVal = request.getParameter(zSTR_ASKCONFIGPARAM); 
  String zOpenModeRequestVal = request.getParameter(zSTR_OPENMODE);
  String zdynfiltersinfo = request.getParameter("zdynfiltersinfo");
  if (zdynfiltersinfo == null){zdynfiltersinfo = "";} 
%>

<m4:startpage m4task="<%=zsubsesionM4ThrowHtml%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zm4object%>" m4name="<%=zsubsesion%>" m4preserve="true"/>
<m4:exec m4object="<%=zsubsesion%>" node="<%=znodoapi%>" method="<%=zmetodoGetParamValue%>" alias="<%=zSTR_PROCESS_MODE%>">
	<m4:param name="<%=zArgIdParamsInstance%>" value="<%=zID_PARAMS_INSTANCE%>"/>
	<m4:param name="<%=zArgIdParam%>" value="<%=zSTR_PROCESS_MODE%>"/>
</m4:exec>
<m4:exec m4object="<%=zsubsesion%>" node="<%=znodoapi%>" method="<%=zmetodoGetParamValue%>" alias="<%=zSTR_ASKCONFIGPARAM%>">
	<m4:param name="<%=zArgIdParamsInstance%>" value="<%=zID_PARAMS_INSTANCE%>"/>
	<m4:param name="<%=zArgIdParam%>" value="<%=zSTR_ASKCONFIGPARAM%>"/>
</m4:exec>
<m4:exec m4object="<%=zsubsesion%>" node="<%=znodoapi%>" method="<%=zmetodoSetParamValue%>" alias="<%=zmetodoSetParamValue%>">
	<m4:param name="<%=zArgIdParamsInstance%>" value="<%=zID_PARAMS_INSTANCE%>"/>
	<m4:param name="<%=zArgIdParam%>" value="<%=zSTR_M4O_SERIALIZE_DYNFILTER%>"/>
	<m4:param name="<%=zArgParamValue%>" value="<%=zdynfiltersinfo%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodoapi%>"><m4:param name="m4name0" value="<%=zoutputdefnodoapi%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefnodocom%>"/></m4:outputdef>
<m4:endjob/>

<m4:outputexec m4alias="<%=zSTR_PROCESS_MODE%>" m4varname="zProcessModeVal"/>
<m4:outputexec m4alias="<%=zSTR_ASKCONFIGPARAM%>" m4varname="zAskConfigParamVal"/>
<m4:outputexec m4alias="<%=zmetodoSetParamValue%>" m4varname="zmetodoSetParamValueResult"/>

<%
// The default value is the error page-container
String zM4throwRedirectionPage = "/shco_g0/shco_show_error.jsp";

if (zAskConfigParamRequestVal ==null) {zAskConfigParamRequestVal="";}
if (zProcessModeVal == null ){zProcessModeVal="";}
if (zAskConfigParamVal == null ){zAskConfigParamVal="";}
if (zOpenModeRequestVal == null ){zOpenModeRequestVal=zSTR_OPENMODE_DEF;}


// Si no vienen datos en el request tomamos los que vengan del M4O
if (zAskConfigParamRequestVal.equals("")){
	zAskConfigParamRequestVal = zAskConfigParamVal;
}
if (zAskConfigParamRequestVal.equals(zSTR_TRUE)){
	zM4throwRedirectionPage = zSTR_ASKCONFIGPARAM_PAGE;
}else if (zProcessModeVal.equals(zSTR_ONLINE_EXECUTION)){
    zM4throwRedirectionPage = zSTR_ONLINE_EXECUTION_PAGE;
}else if (zProcessModeVal.equals(zSTR_JS_EXECUTION)){
	zM4throwRedirectionPage = zSTR_JS_EXECUTION_PAGE;
}else if (zProcessModeVal.equals(zSTR_EDITION)){
	zM4throwRedirectionPage = zSTR_EDITION_PAGE;
}else if (zProcessModeVal.equals(zSTR_REEDITION)){
	zM4throwRedirectionPage = zSTR_REEDITION_PAGE;	
}%>

<% if (zProcessModeVal.equals(zSTR_M4_ERROR) || zAskConfigParamVal.equals(zSTR_M4_ERROR)|| zmetodoSetParamValueResult.equals(zSTR_M4_ERROR)) { %>
   <%@ include file="/shco_rp/shco_m4throw_gen_error.jsp" %>
  
<%}else 
   zM4throwRedirectionPage = zM4throwRedirectionPage + "?" +zIdParamsInstance + "=" + zID_PARAMS_INSTANCE;
   zM4throwRedirectionPage = zM4throwRedirectionPage + "&" + zSTR_SUBSESION + "=" + zsubsesionM4ThrowHtml;
if (zProcessModeVal.equals(zSTR_REEDITION)){%>	
     <script type="text/javascript">
		m4navegar('/servlet/CheckSecurity/JSP/<%=zM4throwRedirectionPage%>'); 
    </script>
<%}else if (zOpenModeRequestVal.equals(zSTR_OPENMODE_DEF)){%>
	<script type="text/javascript">		
		window.history.go(-1);
		window.open("/servlet/CheckSecurity/JSP/<%=zM4throwRedirectionPage%>","<%=zID_PARAMS_INSTANCE%>","toolbar=no,scrollbars=yes,directories=no,status=yes,menubar=no,resizable=yes,width=800,height=500");   	  	  			
	</script>
<%}else{ %>
	 <script type="text/javascript">
		window.location.replace ("/servlet/CheckSecurity/JSP/<%=zM4throwRedirectionPage%>");   	  	  	
	</script>
<%}%>
  

<m4:endpage/>
</body></html>
