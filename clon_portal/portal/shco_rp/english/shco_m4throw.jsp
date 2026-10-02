<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_m4throw.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<html>
<head><title></title>
<%@ include file="/shco_rp/shco_m4throw_srp_html_m4def.jsp" %>
<%@ include file="/shco_g0/shco_gen_portal_arg.jsp" %><%@ include file="/shco_g0/shco_gen_bag.jsp" %>
<%@ include file="/shco_g0/shco_gen_css.jsp" %>
<%@ include file="/shco_g0/shco_gen_normal_js.jsp" %>

</head><body>
<%@ include file="/shco_g0/shco_gen_act_body.jsp" %>
<%
  /* READ_PARAM :Crear la cadena con los parámetros */
	String parameter = "";
	String value = "";	
	String zAllParameters = "";
	boolean zReeditionProcess = false;
	boolean zErrorApplyParams = false;
	
	/* Recoger los parámetros que nos interesan */
	String zalias = request.getParameter(zSTR_ALIAS);
	String zm4o = request.getParameter(zSTR_M4OBJECT);
	String znode = request.getParameter(zSTR_NODE);
	String zOpenModeVAL = request.getParameter(zSTR_OPENMODE);
	if (zOpenModeVAL==null){zOpenModeVAL = zSTR_OPENMODE_DEF;}
		
	String sProcessMode = request.getParameter(zSTR_PROCESS_MODE);
	String sReeditionParamValue = request.getParameter(zSTR_REEDITION_PARAM_VALUE);
	if (sReeditionParamValue == null) { sReeditionParamValue ="";}
	if (sProcessMode != null){
	  if(sProcessMode.equals(zSTR_REEDITION)){
	     zReeditionProcess = true;
		 
	  }
	}  
	
	
	Enumeration oEnum = request.getParameterNames();
	while(oEnum.hasMoreElements ()){
		parameter = (String) oEnum.nextElement();
		value =  request.getParameter(parameter);	
		/* Concatenar solo los de la M4Throw */
		if (parameter.equals(zSTR_DYNFILTER)){
		    zAllParameters	+= zSTR_M4O_SERIALIZE_DYNFILTER + "#" + value + "~" ;	
		}else if (!parameter.equals(zSTR_OPENMODE) && !parameter.equals(zSTR_M4OBJECT) && !parameter.equals(zSTR_NODE) && !parameter.equals(zSTR_ALIAS) && !parameter.equals(zSTR_SUBSESION) && !parameter.equals(zSTR_REEDITION_PARAM_VALUE)){
			zAllParameters	+= parameter + "#" + value + "~" ;	
		}		
		
    }  

%>

<m4:startpage m4task="<%=zsubsesionM4ThrowHtml%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zm4object%>" m4name="<%=zsubsesion%>" m4preserve="true"/>

<% if (zm4o == null) { 
    if (zReeditionProcess == true){ %>
	   <m4:exec m4object="<%=zsubsesion%>" node="<%=znodoapi%>" method="<%=zmetodoApplyReeditionParams%>" alias="<%=zmetodoApplyReeditionParams%>">
	   <m4:param name="<%=zArgReeditionParamValueStr%>" value="<%=sReeditionParamValue%>"/>
	   <m4:param name="<%=zArgNewParamValueStr%>" value="<%=zAllParameters%>"/>
	   </m4:exec>
	 <%}else{%>
	 <m4:exec m4object="<%=zsubsesion%>" node="<%=znodoapi%>" method="<%=zmetodoApplyParams%>" alias="<%=zmetodoApplyParams%>">
	 <m4:param name="<%=zArgParamValueStr%>" value="<%=zAllParameters%>"/>
	 </m4:exec>
	 <%}%>
<%}else {
	if (zReeditionProcess == true){ %>
 	   <m4:exec m4object="<%=zsubsesion%>" node="<%=znodoapi%>" method="<%=zmetodoReadAndApplyReeditionParams%>" alias="<%=zmetodoReadAndApplyReeditionParams%>">
	   <m4:param name="<%=zArgAlias%>" value="<%=zalias%>"/>
	   <m4:param name="<%=zArgNode%>" value="<%=znode%>"/>
	   <m4:param name="<%=zArgM4O%>" value="<%=zm4o%>"/>
	   </m4:exec>
	<%}else{%>
       <m4:exec m4object="<%=zsubsesion%>" node="<%=znodoapi%>" method="<%=zmetodoReadAndApplyParams%>" alias="<%=zmetodoReadAndApplyParams%>">
	   <m4:param name="<%=zArgAlias%>" value="<%=zalias%>"/>
  	   <m4:param name="<%=zArgNode%>" value="<%=znode%>"/>
	   <m4:param name="<%=zArgM4O%>" value="<%=zm4o%>"/>
      </m4:exec>
<%}}%>
<m4:outputdef m4alias="<%=znodoapi%>"><m4:param name="m4name0" value="<%=zoutputdefnodoapi%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefnodocom%>"/></m4:outputdef>
<m4:endjob/>

<% if (zm4o == null) { 
   	  if (zReeditionProcess == true){ %>
	  	<m4:outputexec m4alias="<%=zmetodoApplyReeditionParams%>" m4varname="zmetodoApplyReeditionParamsVal"/>
    	<% if ((zmetodoApplyReeditionParamsVal==null)||(zmetodoApplyReeditionParamsVal.equals("-1"))) { 
		   zErrorApplyParams = true;
		}
	}else{%>
    <m4:outputexec m4alias="<%=zmetodoApplyParams%>" m4varname="zmetodoApplyParamsVal"/>
    <% if ((zmetodoApplyParamsVal==null)||(zmetodoApplyParamsVal.equals("-1"))) { 
		zErrorApplyParams = true;
    	}
	}
}
else {
   	  if (zReeditionProcess == true){ %>
	  	<m4:outputexec m4alias="<%=zmetodoReadAndApplyReeditionParams%>" m4varname="zmetodoReadAndApplyReeditionParamsVal"/>
		  	<% if ((zmetodoReadAndApplyReeditionParamsVal==null)||(zmetodoReadAndApplyReeditionParamsVal.equals("-1"))) { 
		   	  zErrorApplyParams = true;
		   }
		}
	else{%>
    <m4:outputexec m4alias="<%=zmetodoReadAndApplyParams%>" m4varname="zmetodoReadAndApplyVal"/>
    <% if ((zmetodoReadAndApplyVal==null)||(zmetodoReadAndApplyVal.equals("-1"))) { 
		zErrorApplyParams = true;
    }
}}%>

<% if (zErrorApplyParams == true) { %>
   <%@ include file="/shco_rp/shco_m4throw_gen_error.jsp" %>
   <script type="text/javascript">
		window.history.go(-1);
   </script>
<%}else{%>
   <m4:item m4name="<%=zIdParamsInstancer%>" m4varname="zID_PARAMS_INSTANCE" m4format="0"/>

   <%--  Comprobar si se requiere pedir filtro dinámico y traer el T3 del report para solicitar filtro dinámico
         sobre dicho m4object
   --%>
   <m4:beginjob/>
   <m4:exec m4object="<%=zsubsesion%>" node="<%=znodoapi%>" method="<%=zmetodoGetParamValue%>" alias="<%=zSTR_ASKDYNFILTER%>">
	<m4:param name="<%=zArgIdParamsInstance%>" value="<%=zID_PARAMS_INSTANCE%>"/>
	<m4:param name="<%=zArgIdParam%>" value="<%=zSTR_ASKDYNFILTER%>"/>
	</m4:exec>
   <m4:exec m4object="<%=zsubsesion%>" node="<%=znodoapi%>" method="<%=zmetodoGetM4Object%>" alias="<%=zmetodoGetM4Object%>">
	<m4:param name="<%=zArgIdParamsInstance%>" value="<%=zID_PARAMS_INSTANCE%>"/>
   </m4:exec>
   <m4:outputdef m4alias="<%=znodoapi%>"><m4:param name="m4name0" value="<%=zoutputdefnodoapi%>"/></m4:outputdef>
   <m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefnodocom%>"/></m4:outputdef>
   <m4:endjob/>
   <m4:outputexec m4alias="<%=zSTR_ASKDYNFILTER%>" m4varname="zAskDynFilterVal"/>
   <m4:outputexec m4alias="<%=zmetodoGetM4Object%>" m4varname="zM4ObjectVal"/>

   <%if(zAskDynFilterVal == null ){zAskDynFilterVal="";}%>   
   <%if (zAskDynFilterVal.equals(zSTR_TRUE)){%>
     <%@ include file="/shco_g0/shco_gen_dynfilter_include.jsp" %> 
     <script type="text/javascript">
		var sURL = "<%=zSTR_CONFIG_PAGE%>?<%=zIdParamsInstance%>=<%=zID_PARAMS_INSTANCE%>";
	    sURL = sURL  + "&<%=zSTR_OPENMODE%>=<%=zOpenModeVAL%>";
	    sURL = sURL  + "&<%=zSTR_SUBSESION%>=<%=zsubsesionM4ThrowHtml%>";
	    
	    m4dynfilter("","<%=zM4ObjectVal%>","","1","4",sURL,"800","350");
	</script>
   <%}else{%>
    <script type="text/javascript">
	    var sURL = "/servlet/CheckSecurity/JSP/<%=zSTR_CONFIG_PAGE%>?<%=zIdParamsInstance%>=<%=zID_PARAMS_INSTANCE%>";
	    sURL = sURL  + "&<%=zSTR_OPENMODE%>=<%=zOpenModeVAL%>";
	    sURL = sURL  + "&<%=zSTR_SUBSESION%>=<%=zsubsesionM4ThrowHtml%>";
		window.location.replace(sURL);
	</script>
<%}}%>

<m4:endpage/>
</body>
</html>

