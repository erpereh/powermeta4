<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_dynfilter_act.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<% if (zdf_returnpage.equals("")){zdf_returnpage=zdireccion;}

if (zoperation.equals("")){%>

    <m4:exec m4object="<%=zm4oalias%>" node="<%=znodoapi%>" method="<%=zmetodosetparams%>" alias="<%=zmetodosetparams%>">
		<m4:param name="ARG_ID_T3" value="<%=zdf_m4o%>"/>
		<m4:param name="ARG_APPLY_MODE" value="<%=zdf_applymode%>"/>
        <m4:param name="ARG_ID_T3_ALIAS" value="<%=zdf_m4oalias%>"/>
        <m4:param name="ARG_RETURN_PAGE" value="<%=zdf_returnpage%>"/>
        <m4:param name="ARG_ID_T3_SESSION" value="<%=zsubsesion%>"/>
		<m4:param name="ARG_RETURN_PAGE_WIDTH" value="<%=zdf_returnpagewidth%>"/>
		<m4:param name="ARG_RETURN_PAGE_HEIGHT" value="<%=zdf_returnpageheight%>"/>
    </m4:exec> 
	<m4:exec m4object="<%=zm4oalias%>" node="<%=znodoapi%>" method="<%=zmetodolist%>" alias="<%=zmetodolist%>">
	</m4:exec>
	
<%}else if (zoperation.equals(zSAVE_FILTER_OP)){%>
   <m4:exec  m4object="<%=zm4oalias%>" node="<%=znodoapi%>" method="<%=zmetodosavedynfilter%>" alias="<%=zmetodosavedynfilter%>">
        <m4:param name="ARG_ID_NODE" value="<%=zidnode%>"/>
	    <m4:param name="ARG_ID_SENTENCE" value="<%=zidsentence%>"/> 
		<m4:param name="ARG_LANGUAGE" value="<%=znatlanguage%>"/> 
		<m4:param name="ARG_API_SQL" value="<%=zapisql%>"/>
		<m4:param name="ARG_ID_SCENARIO" value="<%=zidscenario%>"/>  				
   </m4:exec>
   
<%}else if (zoperation.equals(zDELETE_FILTER_OP) || zoperation.equals(zDELETE_SENTENCE_OP)){
   if (zoperation.equals(zDELETE_FILTER_OP)){zidscenario="";} %>
   <m4:exec  m4object="<%=zm4oalias%>" node="<%=znodoapi%>" method="<%=zmetodosavedynfilter%>" alias="<%=zmetodosavedynfilter%>">
        <m4:param name="ARG_ID_NODE" value="<%=zidnode%>"/>
	    <m4:param name="ARG_ID_SENTENCE" value=""/> 
		<m4:param name="ARG_LANGUAGE" value=""/> 
		<m4:param name="ARG_API_SQL" value=""/>
		<m4:param name="ARG_ID_SCENARIO" value="<%=zidscenario%>"/>  				
   </m4:exec>
   <m4:exec  m4object="<%=zm4oalias%>" node="<%=znodoapi%>" method="<%=zmetodoremovefilter%>" alias="<%=zmetodoremovefilter%>">
	    <m4:param name="ARG_ID_SENTENCE" value="<%=zidsentence%>"/> 				
   </m4:exec>
<%}else if (zoperation.equals(zAPPLY_DYN_FILTER_OP)){%>
   <m4:exec  m4object="<%=zm4oalias%>" node="<%=znodoapi%>" method="<%=zmetodosavedynfilter%>" alias="<%=zmetodosavedynfilter%>">
        <m4:param name="ARG_ID_NODE" value="<%=zidnode%>"/>
	    <m4:param name="ARG_ID_SENTENCE" value="<%=zidsentence%>"/> 
		<m4:param name="ARG_LANGUAGE" value="<%=znatlanguage%>"/> 
		<m4:param name="ARG_API_SQL" value="<%=zapisql%>"/>
		<m4:param name="ARG_ID_SCENARIO" value="<%=zidscenario%>"/>  				
   </m4:exec>
   <m4:exec  m4object="<%=zm4oalias%>" node="<%=znodoapi%>" method="<%=zmetodoapply%>" alias="<%=zmetodoapply%>">		
   </m4:exec>   

<%}%>

    <m4:outputdef m4alias="<%=znododynfilterlist%>" m4object="<%=zm4oalias%>" node="<%=znododynfilterlist%>" records="*"/>
    <m4:outputdef m4alias="<%=znodoapi%>" m4object="<%=zm4oalias%>" node="<%=znodoapi%>" records="*"/>
    <m4:outputdef m4alias="<%=znodolabel%>" m4object="<%=zm4oalias%>" node="<%=znodolabel%>" records="*"/>
	<m4:outputdef m4alias="<%=znodocom%>" m4object="<%=zm4oalias%>" node="<%=znodocom%>" records="*"/>