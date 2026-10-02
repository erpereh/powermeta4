<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_htmlfilter_act.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
  <%--------------------------------------------------------------------------------------------%>
  <%------------------------ EXECUTE METHOD DEPENDING ON THE OPERATION ID -----------------------%>
  <%--------------------------------------------------------------------------------------------%>
  
     <% if (sIdOperation.equals(sAPI_GET_FILTER)|| sIdOperation.equals(sAPI_GET_FILTER_EX)){ 
         if (zhtmlfilterinstance == null){%> 
           <m4:datadef m4o="<%=sM4HtmlFilterCL%>" m4name="<%=sM4HtmlFilterCLAlias%>"/>
       <%}else{%>
           <m4:datadef m4o="<%=sM4HtmlFilterCL%>" m4name="<%=sM4HtmlFilterCLAlias%>" m4find="TRUE"/>		   
       <%}%>
       <%String zMethodGetFilter = sItemAPI_GET_FILTER;
	   if (sIdOperation.equals(sAPI_GET_FILTER_EX)){
	       zMethodGetFilter =  sItemAPI_GET_FILTER_EX;
	   }%>  
	   	<m4:exec alias="<%=sItemAPI_GET_FILTER%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeAPI_FILTER_HTML%>" method="<%=zMethodGetFilter%>">
		<m4:param name="P_SID_SENTENCE" value="<%=sIdSentence%>"/> 
		<m4:param name="P_SID_ESCENARIO" value="<%=sIdEscenario%>"/>
		<m4:param name="P_SID_TABLE" value="<%=sIdTable%>"/>
		<m4:param name="P_RELATION_TYPE" value="<%=sIdRelationType%>"/>
		<%if (sIdOperation.equals(sAPI_GET_FILTER_EX)){%>
		 <m4:param name="P_RELOAD_SENTENCE" value="<%=sReloadSentence%>"/>
		<%}%>
		
	 </m4:exec>
     <%}%>
     <% if (sIdOperation.equals(sAPI_SET_FILTER) ){ %>
	 <m4:exec alias="<%=sItemAPI_SET_FILTER%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeAPI_FILTER_HTML%>" method="<%=sItemAPI_SET_FILTER%>">
		<m4:param name="P_SID_SENTENCE" value="<%=sIdSentence%>"/> 
		<m4:param name="ARG_CANCEL" value="<%=zcancel%>"/>
	 </m4:exec>	
	 <%}else if (sIdOperation.equals(sAPI_SAVE_PRED_FILTER) ){ %>
	  <m4:exec alias="<%=sItemAPI_SAVE_PRED_FILTER%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeAPI_FILTER_HTML%>" method="<%=sItemAPI_SAVE_PRED_FILTER%>">
		<m4:param name="P_SID_SENTENCE" value="<%=sIdSentence%>"/>
		<m4:param name="P_SN_SENTENCE" value="<%=sNSentence%>"/>  
		<m4:param name="ARG_CANCEL" value="<%=zcancel%>"/>
	 </m4:exec>	 
	  <%}else if (sIdOperation.equals(sAPI_DELETE_PRED_FILTER) ){ %>
	  <m4:exec alias="<%=sItemAPI_DELETE_PRED_FILTER%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeAPI_FILTER_HTML%>" method="<%=sItemAPI_DELETE_PRED_FILTER%>">
		<m4:param name="P_SID_SENTENCE" value="<%=sIdSentence%>"/>
	 </m4:exec>	
     <%}else if (sIdOperation.equals(sAPI_GET_DETAIL) ){ %>
	 <m4:exec alias="<%=sItemAPI_GET_DETAIL%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeAPI_FILTER_HTML%>" method="<%=sItemAPI_GET_DETAIL%>">
		<m4:param name="P_SID_SENTENCE" value="<%=sIdSentence%>"/> 
		<m4:param name="P_IID_DETAIL" value="<%=sIdDetail%>"/>
	 </m4:exec>
     <%}else if (sIdOperation.equals(sAPI_SET_DETAIL) ){ %>       
	 <m4:exec alias="<%=sItemAPI_SET_DETAIL%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeAPI_FILTER_HTML%>" method="<%=sItemAPI_SET_DETAIL%>">
		<m4:param name="P_SID_SENTENCE" value="<%=sIdSentence%>"/> 
		<m4:param name="P_IID_DETAIL" value="<%=sIdDetail%>"/>
		<m4:param name="P_SDETAIL_GEN_INFO" value="<%=sFilterDetailGenInfo%>"/>
		<m4:param name="P_SDETAIL_RIGHT_TUPLA" value="<%=sFilterDetailRightInfo%>"/>
		<m4:param name="P_SDETAIL_LEFT_TUPLA" value="<%=sFilterDetailLeftInfo%>"/>
	 </m4:exec>
     <%}else if (sIdOperation.equals(sAPI_DELETE_DETAIL) ){ %>         
	 <m4:exec alias="<%=sItemAPI_DELETE_DETAIL%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeAPI_FILTER_HTML%>" method="<%=sItemAPI_DELETE_DETAIL%>">
		<m4:param name="P_SID_SENTENCE" value="<%=sIdSentence%>"/> 
		<m4:param name="P_IID_DETAIL" value="<%=sIdDetail%>"/>
	 </m4:exec>
     <%}else if (sIdOperation.equals(sAPI_GET_TABLE_FIELDS) ){ %>          
	 <m4:exec alias="<%=sItemAPI_GET_TABLE_FIELDS%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeAPI_FILTER_HTML%>" method="<%=sItemAPI_GET_TABLE_FIELDS%>">
		<m4:param name="P_STABLE_INFO" value="<%=sIdTable%>"/>
        <m4:param name="P_IWHICH_TABLE" value="<%=sRigthLeftTable%>"/>
	 </m4:exec>
     <%}else if (sIdOperation.equals(sAPI_PERSIST_FILTERS) ){ %>
	 <m4:exec alias="<%=sItemAPI_PERSIST_FILTERS%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeAPI_FILTER_HTML%>" method="<%=sItemAPI_PERSIST_FILTERS%>">
	 </m4:exec>
     <%}else if (sIdOperation.equals(sAPI_REMOVE_FILTER) ){ %>         
	 <m4:exec alias="<%=sItemAPI_REMOVE_FILTER%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeAPI_FILTER_HTML%>" method="<%=sItemAPI_REMOVE_FILTER%>">
		<m4:param name="P_SID_SENTENCE" value="<%=sIdSentence%>"/> 
	 </m4:exec>
     <%}%>
	
	 <%------Avalaible operators  ------------------------------------------------------%>	
    <m4:outputdef m4alias="<%=sOutputAdvancedOperators%>"   m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_OP_ADVANCED%>" records="*"/>		
	<m4:outputdef m4alias="<%=sOutputGroupCloseOperators%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_OP_AGR_CLOSE%>" records="*"/>		
	<m4:outputdef m4alias="<%=sOutputGroupOpenOperators%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_OP_AGR_OPEN%>" records="*"/>		
	<m4:outputdef m4alias="<%=sOutputLogicOperators%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_OP_LOG%>" records="*"/>		
    <m4:outputdef m4alias="<%=sOutputRelationalOperators%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_OP_REL%>" records="*"/>	    
    <%------ table and fields avalaible info ---------------------------------------------%>	
    <m4:outputdef m4alias="<%=sOutputFilterTables%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_DIC_TABLES%>" records="*"/>		
	
	<%------Request detail info  -------------------------------------------------------%>
	<m4:outputdef m4alias="<%=sOutputFilterDetailInfo%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_DETAIL_INFO%>" records="*"/>		
	<m4:outputdef m4alias="<%=sOutputFilterDetailRightInfo%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_RIGHT_DETAIL%>" records="*"/>		
	<m4:outputdef m4alias="<%=sOutputFilterDetailLeftInfo%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_LEFT_DETAIL%>" records="*"/>		 
    <%------All detail info  -------------------------------------------------------%>
	<m4:outputdef m4alias="<%=sOutputFilterAllDetails%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_DETAIL_LIST_R%>" records="*"/>		
    <%------natural language info  ----------------------------------------------------------%>
	<m4:outputdef m4alias= "<%=sOutputFilterNatLanguage%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_FILTER_INFO%>" records="*"/>
	<m4:outputdef m4alias="<%=sNodeSHCO_GN_LABEL%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeSHCO_GN_LABEL%>" records="*"/>
	<m4:outputdef m4alias="<%=sNodeSHCO_GN_COMUNICATION%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeSHCO_GN_COMUNICATION%>" records="*"/>
<m4:endjob/>
