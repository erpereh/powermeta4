<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_m4throw_server_execution.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<m4:beginjob/>
<m4:datadef m4o="<%=zm4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4object="<%=zsubsesion%>" node="<%=znodoexe%>" method="<%=zmetodoExecuteReport%>" alias="<%=zmetodoExecuteReport%>">
	<m4:param name="<%=zArgIdParamsInstance%>" value="<%=zIdParamsInstanceVal%>"/>	
</m4:exec>
<m4:outputdef m4alias="<%=znodoexe%>"><m4:param name="m4name0" value="<%=zoutputdefnodoexe%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefnodocom%>"/></m4:outputdef>
<m4:endjob/>

<m4:outputexec m4alias="<%=zmetodoExecuteReport%>" m4varname="zmetodoExecuteReportVal" typename="NUMBER"/>

<% 
if (zmetodoExecuteReportVal == null){ zmetodoExecuteReportVal = "";}
if (zmetodoExecuteReportVal.equals(zSTR_M4_ERROR)) { %>
   <%@ include file="/shco_rp/shco_m4throw_gen_error.jsp" %>   
<%}else {
  String zReportExecutionMessage = Tran_shco_rp.getProperty("Literal.ReportOk") + "</br></br>";%> 
  <%if (zOutputTypeVal.equals(zSTR_OUTPUT_TYPE_FS)){
	zReportExecutionMessage = zReportExecutionMessage + Tran_shco_rp.getProperty("Literal.FilesGeneratedInServer");
  }else{
	zReportExecutionMessage = zReportExecutionMessage + Tran_shco_rp.getProperty("Literal.FilesPrintedInServer");
  } %>

   <%@include file="/shco_rp/shco_m4throw_open_gen_message.jsp"%>
   <%@include file="/shco_rp/shco_m4throw_close_gen_message.jsp"%>
    
<%}%>

