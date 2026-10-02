<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_param_page_maker_act.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>



<m4:beginjob/>
   <m4:datadef m4o="<%=zm4object%>" m4name="<%=zm4object%>"/>   
   	 <m4:exec alias="GET_PARAMS" m4object='<%=zm4object%>' node="TC_RP_PARAM_API" method="LOAD_PAGE_DATA">
		<m4:param name="ARG_XML_FILE" value='<%=zIdPageXML%>'/>
	 </m4:exec>
	<m4:outputdef m4alias="<%=znodoPageData%>" m4object='<%=zm4object%>' node="<%=znodoPageData%>" records="*"></m4:outputdef>
	<m4:outputdef m4alias="<%=znodolabel%>" m4object='<%=zm4object%>' node="<%=znodolabel%>" records="*"></m4:outputdef>
    <m4:outputdef m4alias="<%=znodocom%>" m4object='<%=zm4object%>' node="<%=znodocom%>" records="*"></m4:outputdef>					
<m4:endjob/>

<%
  String zerror="";
  String zshco_TEXT="";
  try {	
	M4Operations m = new M4Operations(request);
	zerror = m.getItem(znodocom,zm4object,znodocom,"","SHCO_ACTIVE_DEBUG");
   }catch(Exception e) {}	
 %>
<%@ include file="../shco_g0/shco_gen_error.jsp" %>

