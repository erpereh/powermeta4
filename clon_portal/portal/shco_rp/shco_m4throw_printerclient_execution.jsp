<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_m4throw_printerclient_execution.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

	<m4:beginjob/>
	<m4:datadef m4o="<%=zm4object%>" m4name="<%=zsubsesion%>"/>
	<m4:exec m4object="<%=zsubsesion%>" node="<%=znodoexe%>" method="<%=zmetodoExecuteReportAndNotifyFiles%>" alias="<%=zmetodoExecuteReportAndNotifyFiles%>">
		<m4:param name="<%=zArgIdParamsInstance%>" value="<%=zIdParamsInstanceVal%>"/>
		<m4:param name="<%=zArgPathTempMapping%>" value="<%=zArgPathTempMappingVal%>"/>		
		<m4:param name="<%=zArgUserTempUri%>" value="<%=zArgUserTempUriVal%>"/>
		<m4:param name="<%=zArgUserTempURL%>" value="<%=zArgUserTempURLVal%>"/>		

	</m4:exec>
	<m4:outputdef m4alias="<%=znodoexe%>"><m4:param name="m4name0" value="<%=zoutputdefnodoexe%>"/></m4:outputdef>
	<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefnodocom%>"/></m4:outputdef>
	<m4:endjob/>
	<m4:outputexec m4alias="<%=zmetodoExecuteReportAndNotifyFiles%>" m4varname="zmetodoExecuteReportAndNotifyFilesVal"  typename="NUMBER"/>

	<%if (zmetodoExecuteReportAndNotifyFilesVal == null){ zmetodoExecuteReportAndNotifyFilesVal = "";}
	  if (zmetodoExecuteReportAndNotifyFilesVal.equals(zSTR_M4_ERROR)) { %>
	    <%@ include file="/shco_rp/shco_m4throw_gen_error.jsp" %>      
	<%}else{%>
	    <m4:item m4name="<%=zFilesURLr%>" m4varname="zFilesURLVal"/>
        <m4:item m4name="<%=zFilesListr%>" m4varname="zFilesListVal"/>

        <%if (zFilesURLVal == null){ zFilesURLVal = "";}
          if (zFilesListVal == null){ zFilesListVal = "";}%>
	    
        <%String zReportExecutionMessage =  Tran_shco_rp.getProperty("Literal.ReportOk");%>
		<%@include file="/shco_rp/shco_m4throw_open_gen_message.jsp"%>
		<%@include file="/shco_rp/shco_m4throw_close_gen_message.jsp"%>    
		<OBJECT ID="M4Printer"
			CLASSID="CLSID:6E04F0A0-BCF6-11D7-83B9-00C04F62D87D"		
			 codebase="/shco_rp/M4Printer.CAB#version=1,0,0,0">
		    <PARAM NAME="FilesURL" VALUE="<%=zFilesURLVal%>">
	        <PARAM NAME="FilesList" VALUE="<%=zFilesListVal%>">	    
		</OBJECT>
		<OBJECT ID="Security"
		      CLASSID="CLSID:6E04F0A3-BCF6-11D7-83B9-00C04F62D87D"
		      codebase="M4Printer.CAB#version=1,0,0,0">
		</OBJECT>
</BODY>
</HTML>
    
	<%}%> 
