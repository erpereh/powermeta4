<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_m4throw_fileclient_execution.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

	<m4:beginjob/>
	<m4:datadef m4o="<%=zm4object%>" m4name="<%=zsubsesion%>"/>
	<m4:exec m4object="<%=zsubsesion%>" node="<%=znodoexe%>" method="<%=zmetodoExecuteReportFilesBlob%>" alias="<%=zmetodoExecuteReportFilesBlob%>">
		<m4:param name="<%=zArgIdParamsInstance%>" value="<%=zIdParamsInstanceVal%>"/>
		<m4:param name="<%=zArgPathTempMapping%>" value="<%=zArgPathTempMappingVal%>"/>		
		<m4:param name="<%=zArgUserTempUri%>" value="<%=zArgUserTempUriVal%>"/>
		<m4:param name="<%=zArgUserTempURL%>" value="<%=zArgUserTempURLVal%>"/>		
	</m4:exec>
	<m4:outputdef m4alias="<%=znodoreportlist%>"><m4:param name="m4name0" value="<%=zoutputdefreportlist%>"/></m4:outputdef>
	<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefnodocom%>"/></m4:outputdef>
	<m4:endjob/>
	<m4:outputexec m4alias="<%=zmetodoExecuteReportFilesBlob%>" m4varname="zmetodoExecuteReportFilesBlobVal" typename="NUMBER"/>
	<%if (zmetodoExecuteReportFilesBlobVal == null){ zmetodoExecuteReportFilesBlobVal = "";}%>
	<% if (zmetodoExecuteReportFilesBlobVal.equals(zSTR_M4_ERROR)) { %>
		<%@ include file="/shco_rp/shco_m4throw_gen_error.jsp" %>      
	<%}else{
	  int  zcount  = 0;	
      try {
         M4Operations m = new M4Operations(request);
         zcount = m.getCount(znodoreportlist,zsubsesion,znodoreportlist);    
       } catch(Exception e) {}
       String zregistroinicials = String.valueOf(0);
       String zregistrofinals = String.valueOf(zcount - 1);
       String zposicions = "0";
       int zposicion =0;
       int zcontrol =0;
       String sFileURL = "/servlet/download_blob?task="+zsubsesionM4ThrowHtml+"&no-cache=true&savetodisk=true";				
	   String sFileContent = "";
	   String zReportExecutionMessage =  Tran_shco_rp.getProperty("Literal.ReportOk");
	   String sFileNameFIRSTRecord = znodoreportlist + ":" + zsubsesion + "!" + znodoreportlist + "[FIRST]" + "." + zFileName;
	%>					
	   <%   if (zcount==1){%>	   			   		
			<m4:item m4name="<%=sFileNameFIRSTRecord%>" m4varname="sFileNameVAL"/>			
			<%
			sFileContent = zsubsesion + "!" + znodoreportlist + "[FIRST]" + "." + zContent; %>			      
			<%@include file="/shco_rp/shco_m4throw_open_gen_message.jsp"%>
			<%@include file="/shco_rp/shco_m4throw_close_gen_message.jsp"%>
			<script type="text/javascript">						   
				window.location.replace ('<%=sFileURL + "&filename=" + sFileNameVAL + "&item=" + sFileContent%>');
			</script>
		<%}else if (zcount>1){%>		 				
		    <%zReportExecutionMessage = zReportExecutionMessage+ "</br></br>" + Tran_shco_rp.getProperty("Literal.MultipleFiles");
		    zReportExecutionMessage = zReportExecutionMessage+ "</br>" + Tran_shco_rp.getProperty("Literal.FilesInClient");%>
			<%@include file="/shco_rp/shco_m4throw_open_gen_message.jsp"%>
			<table class="datos" width="80%" cellpadding="0" cellspacing="2">
				<thead><tr class="titulo"> <th colspan ="3">&nbsp; <%=Tran_shco_rp.getProperty("Literal.File")%></th></tr>
				</thead>								
				<tbody>  		    
				<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">				
				<%@ include file="/shco_g0/shco_gen_loop.jsp" %>			        
				<%sFileContent = zsubsesion + "!" + znodoreportlist + "["+m4lix+"]" + "." + zContent;%>							  
					<tr><td class="valor<%=zpos%>">&nbsp;										   	      
					  <a title="Bajar fichero" href="<%=sFileURL +"&filename="%><m4:item m4name="<%=zFileNamer%>" htmlsafe="true"/><%="&item=" + sFileContent%>" onclick=""> <m4:item m4name="<%=zFileNamer%>" htmlsafe="true"/></a >
					</td></tr>					  
				</m4:loop>
		       </tbody>
            </table>
             <br></br> 
            <%@include file="/shco_rp/shco_m4throw_close_gen_message.jsp"%>
    <%}}%>