<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: pubexecutereportpage.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>



<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>
<%@ page import="com.meta4.taglib.util.M4PresentationUtilTaglib.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger"%>
<html>
	
	<%!
	
	private static String getStringValue(String sValue) {
		return ((sValue == null) || sValue.equals("") || sValue.equals("null")) ? null : sValue;
	}
	%>

	<%
	String zsubsesion = getStringValue(request.getParameter("zsubsesion"));
	String zNReport = getStringValue(request.getParameter("txtNReport"));
	String sID_T3 = getStringValue(request.getParameter("txtIdT3"));
	String sID_REPORT = getStringValue(request.getParameter("txtIdReport"));
	String sID_OUTPUT = getStringValue(request.getParameter("txtIdOutput"));
	String sREPORTPARAM = getStringValue(request.getParameter("txtReportParam"));		
	String sAllPARAM = getStringValue(request.getParameter("txtAllParam"));
	String sID_REPORT_TYPE  = getStringValue(request.getParameter("txtIdReportType"));
    String sN_REPORT = getStringValue(request.getParameter("txtNReport"));
	String sLetterOnlyView = getStringValue(request.getParameter("txtLetterOnlyView"));
	%>

<head><title><%=zNReport%></title>	
<!-- Css -->
	<link rel="stylesheet" type="text/css" href="/shco_rp/css/m4reset.css" />
	<link rel="stylesheet" type="text/css" href="/shco_rp/css/portal_fastlane.css" />
	<link rel="stylesheet" type="text/css" href="/shco_rp/css/meta4.widget.css" />
	
	<!--  Only if needed -->
	<style type="text/css">
		
		#main {
			visibility: visible;
		}

	</style>
	<!-- Always last one css -->
	<link rel="stylesheet" type="text/css" href="/shco_rp/css/client_customization.css">
</head>
<body>
<%@ include file="../shco_g0/shco_gen_arg.jsp" %>
<%@ include file="../shco_g0/shco_gen_bag.jsp" %>
<%@ include file="../shco_g0/shco_gen_js.jsp" %>
<%@ include file="/shco_rp/shco_rp_trans.jsp" %>

<m4:startpage m4task='<%=zsubsesion%>'/>
<m4:beginjob/>
	<m4:exec alias="Prepare" m4object="<%=zsubsesion%>" node="SHCO_RP_PUB_REPORTS" method="API_GET_PARAM_STRING">		 
	<m4:param name="P_PARAM_STRING" value="<%=sAllPARAM%>" />
	</m4:exec>
	<m4:outputdef m4alias="DataPrepare" m4object="<%=zsubsesion%>" node="SRP_PARAM_LIST" records="*"/>
<m4:endjob/>
<m4:item outputdef="DataPrepare" item="PARAM_STRING" m4varname="sParametros" />


<!--**********************************************************************-->
<!-- Ejecución de report usando el engine                                 -->
<!--**********************************************************************-->
<%
    // Establecemos el tipo de salida de la ejecución     
    String sOutputType; 
	switch (Integer.parseInt(sID_OUTPUT))
	{
		case 1:
			sOutputType = "HTML";
			break ;
		case 2:
			sOutputType = "PDF";
			break;
		case 3:
			sOutputType = "TXT";
			break;
		case 5:
			sOutputType = "EXCEL";
			break;
   	    case 6:
			sOutputType = "TXT";
			break;
		case 7:
			sOutputType = "NEW_LETTER";
			break;
		default:
			sOutputType = "HTML";
	}
%>
   
<% if (sOutputType.equals("HTML")){ %>
<script type="text/javascript">
	var sReportURL = "";
	var sType = "";
	var sAux = "";	
	var sReportOutput ='<%=sOutputType%>';

	// Ejecutamos el informe y recogemos la salida generada
	// ----------------------------------------------------
        sReportURL = "<m4:executereport 	
		idreport='<%=sID_REPORT%>'
		syssentence='<%=sParametros%>'
		outputtype= '<%=sOutputType%>'
	    otherparams='<%=sREPORTPARAM%>'/>"         	
	
	    location.href =sReportURL;
</script>

<%}else{%>

	<div id="main" class="onlyCenterPanel">
	<!-- Header -->
		<div id="header">
			<div id="m4-titleBar" class="m4-titleBar">
				<div class="m4-titleBar-content">
					<h2><%=zNReport%></h2>
				</div>
			</div>
		</div>
	<%
	String sReportFileName="";
	String Result="";
	String ResultLetter="";
	int iResult = -1;
	int iResultLetter = -1;
	String sErrorsText ="";
	String sLogMsgsText = "";
	M4Operations m;
	try {
			m = new M4Operations(request);
			m.beginJob();
			m.createData("RPT_HTML","SRP_HTML",null);
			m.load("RPT_HTML");
			m.moveData("HTML_QUERY", "RPT_HTML", "HTML_RPT", "0");
			Hashtable htArgs=new Hashtable();
			sID_REPORT = sID_REPORT;
			htArgs.put("0", sID_REPORT);
			htArgs.put("1", sParametros);
			htArgs.put("2", sOutputType);
			htArgs.put("3", sREPORTPARAM);
			htArgs.put("4", sLetterOnlyView);
			m.method("HTML_QUERY", "RPT_HTML", "HTML_RPT", "HTML_QUERY",  htArgs);
			m.outputDef("", "RPT_HTML!HTML_RPT[FIRST]");
			m.endJob();
			
			sReportFileName = m.getItem("", "RPT_HTML", "HTML_RPT", "0", "OUTPUT");
			Result = m.getItem("", "RPT_HTML", "HTML_RPT", "0", "RESULT");
			iResult = Float.valueOf (Result).intValue();
			ResultLetter = m.getItem("", "RPT_HTML", "HTML_RPT", "0", "LETTER_RESULT");
			iResultLetter = Float.valueOf (ResultLetter).intValue();
			sErrorsText = m.getItem("", "RPT_HTML", "HTML_RPT", "0", "ERROR_TEXT");
			
		} catch(Exception e) {
			// m_log.error("Exception in ", e);
		}
	%>		  

	<%if (iResult == -1) {%>
	
		<div class="m4-flex columns center vCenter m4-xxlMarginTop">
			<h3><%=Tran_shco_rp.getProperty("Literal.ErrorExecuting")%></h3>
		<%	

		//Vector <LogMessage> vLogMsgs1 = new Vector<LogMessage>();
		//M4Operations m1 = new M4Operations(request);
		//if ( m1.checkError(M4Operations.ON_EVENT, vLogMsgs1) )
		//{
		//	Iterator<LogMessage> itLogMsgsIterator = vLogMsgs1.iterator();
		//	while ( itLogMsgsIterator.hasNext()) 
		//	{
		//		LogMessage logmessage = (LogMessage) itLogMsgsIterator.next();
		//		sLogMsgsText = M4PresentationUtil.cookHTML(logmessage.getDescription());
		//		%><h4><%=sLogMsgsText%></h4> <%
		//	}
		//}

		%>

		</div>
		<!--Botón de cerrar  ******************************************************** -->
		<div class="m4-flex columns center vCenter m4-xxlMarginTop">
			<a class="m4-flex center m4-minMarginLeft m4-minMarginRight" title="<%=Tran_shco_rp.getProperty("Literal.Close")%>"  href="javascript:window.close();">
				<img class="imgIcon" src="/shco_rp/iconos/close3.svg" alt="<%=Tran_shco_rp.getProperty("Literal.Close")%>">
				<p><%=Tran_shco_rp.getProperty("Literal.Close")%></p>
			</a>
		</div>
		


	<%}else{%>
	
		<form action="" method="post" name="frmfichero" id="frmfichero">
		<input type="hidden" id="task" name="task" value="SHCO_RP_PUB_REPORTS"/>
		<input type="hidden" id="item" name="item" value="RPT_HTML!HTML_RPT[FIRST].HTTP_DATA_FILE"/>
		<input type="hidden" id="filename" name="filename" value=""/>
		<input type="hidden" id="no-cache" name="no-cache" value="true"/>
		<input type="hidden" id="savetodisk" name="savetodisk" value="true"/>
		</form>

		<!--Botón de cerrar  ******************************************************** -->
		<div class="m4-flex columns center vCenter m4-xxlMarginTop">
			<h3><%=Tran_shco_rp.getProperty("Literal.QueryExecuted")%></h3>
			<% if (sOutputType.equals("NEW_LETTER")){ 
				if (iResultLetter == 0) {%>
					<h4><%=Tran_shco_rp.getProperty("Literal.LetterGenerated")%></h4>
				<%}else if (iResultLetter == 1) {%>
					<h4><%=Tran_shco_rp.getProperty("Literal.LetterGeneratedAndSent")%></h4>
				<%}else if (iResultLetter == 2) {%>
					<h4><%=Tran_shco_rp.getProperty("Literal.LetterNotGeneratedQueryNoData")%></h4>
				<%}else if (iResultLetter == -2) {%>
					<h4><%=Tran_shco_rp.getProperty("Literal.LetterGeneratedButNotSent")%></h4>					
				<%}%>
			<%}%>
		</div>
		<div class="m4-flex columns center vCenter m4-xxlMarginTop">
			<a class="m4-flex center m4-minMarginLeft m4-minMarginRight" title="<%=Tran_shco_rp.getProperty("Literal.Close")%>"  href="javascript:window.close();">
				<img class="imgIcon" src="/shco_rp/iconos/close3.svg" alt="<%=Tran_shco_rp.getProperty("Literal.Close")%>">
				<p><%=Tran_shco_rp.getProperty("Literal.Close")%></p>
			</a>
		</div>

		<script type="text/javascript">
			function showResultFile(sFileName)
			{
				m4valor("frmfichero","filename",sFileName,"set");
				document.forms["frmfichero"].action = "/servlet/getfile/" + sFileName;
				/*if (sFileName.indexOf(".zip") != -1)
				{
					m4valor("frmfichero","savetodisk","true","set");
				}
				<% if (sOutputType.equals("EXCEL")){ %>
					m4valor("frmfichero","savetodisk","true","set");
				<%}%>
				*/

				m4submit("frmfichero");
				//alert(sFileName);
			}
			<%if (sReportFileName != null && sReportFileName.length() > 0) {%>
				showResultFile('<%=sReportFileName%>');  
			<%}%>
		</script>
	<%}%>
	

 </div>  
<%}%>

<m4:endpage/>
</body>
</html>
