<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: pubbeforeexecutereport.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>
<html>
	<head>
		<title></title> 
		<%
			String zm4object = "SHCO_RP_PUB_REPORTS";
			String zsubsesion = zm4object;
		%>

		<m4:startpage m4task='<%=zsubsesion%>'/>

			<%!
			private static String getStringValue(String sValue) {
				return ((sValue == null) || sValue.equals("") || sValue.equals("null")) ? null : sValue;
			}
		%>

	   <% 
		String zsRepIdReport = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "txtIdReport"));
		String zsRepIdT3 = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "txtIdT3"));
		String zsRepIdOutput = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "txtIdOutput"));
		String zsRepParam = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "txtReportParam"));
		String zsRepDataParam = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "txtAllParam"));
		String zsRepIdRepType = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "txtIdReportType"));		
		String zsRepNReport = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "txtNReport"));		
		String zsLetterOnlyView =  getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "txtLetterOnlyView"));		
		%>
		<%@ include file="../shco_g0/shco_gen_bag.jsp" %>	
		<%@ include file="../shco_g0/shco_gen_js.jsp" %>
		<%@ include file="/shco_rp/shco_rp_trans.jsp" %>
		<%@ include file="../shco_g0/shco_gen_tec_include.jspf" %>

		<!-- Css -->
		<link rel="stylesheet" type="text/css" href="/shco_rp/css/m4reset.css" />
		<link rel="stylesheet" type="text/css" href="/shco_rp/css/portal_fastlane.css" />
		<link rel="stylesheet" type="text/css" href="/shco_rp/css/meta4.widget.css" />
		<!-- Always last one css -->
		<link rel="stylesheet" type="text/css" href="/shco_rp/css/client_customization.css">
	</head>

	<body>
		<div class="divLoading" style="position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px; z-index: 9999999; text-align: center; opacity: 0.55; background: url('/shco_rp/iconos/spinner.gif') center 10px no-repeat rgb(243, 243, 246);">
			<label style="position: relative; top: 50px;"><%=Tran_shco_rp.getProperty("Literal.Executing")%></label>
		</div>
			
		<!-- ****************************************************************************** -->
		<!--   Ejecutar el informe                                                -->
		<!-- ****************************************************************************** -->
		<form name="frmrunreport" id="frmrunreport" action="/servlet/CheckSecurity/JSP/shco_rp/pubexecutereport.jsp" method="post" >

		   <input type="hidden" id="txtIdReport" name="txtIdReport" value="<%=zsRepIdReport%>"/>
		   <input type="hidden" id="txtIdT3" name="txtIdT3" value="<%=zsRepIdT3%>"/>
		   <input type="hidden" id="txtIdOutput" name="txtIdOutput" value="<%=zsRepIdOutput%>"/>
		   <input type="hidden" id="txtReportParam" name="txtReportParam" value="<%=zsRepParam%>"/>
		   <input type="hidden" id="txtAllParam" name="txtAllParam" value="<%=zsRepDataParam%>"/>
		   <input type="hidden" id="txtIdReportType" name="txtIdReportType" value="<%=zsRepIdRepType%>"/>
		   <input type="hidden" id="txtNReport" name="txtNReport" value="<%=zsRepNReport%>"/>  
		   <input type="hidden" id="txtLetterOnlyView" name="txtLetterOnlyView" value="<%=zsLetterOnlyView%>"/>  
		   <input type="hidden" id="zsubsesion" name="zsubsesion" value = '<%=zsubsesion%>' />
		</form>
		
		<script type="text/JavaScript"> 
			m4submit("frmrunreport");
		</script>
	</body>
</html>
<m4:endpage/>
















