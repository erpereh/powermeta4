<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: shco_so_change_currency.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>

<%
	String zlanguser = request.getParameter("lang");
	if ((zlanguser==null)||(zlanguser.equals(""))){zlanguser = "en";}
%>
<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="shco_so_trans.jsp" %>

<%@ include file="shco_gen_so_include.jspf" %>

<%@ page  import="com.meta4.session.*, com.meta4.format.*, com.meta4.m4operations.M4Operations" %>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger" %>
<%@ page import="org.apache.log4j.Category" %>
<html>
<head>
<link href="/style/<%=sStyleSheet%>" type="text/css" rel="stylesheet" />
<title><%=Tran_shco_so.getProperty("so.UpdatingData")%></title>
</head>

<!-----------------------  Start: Set Currency ------------------------------------------>
<%
	M4Logger m_log = M4Logger.getLogger("com.meta4.jsp");
	try{
		String stIdCurrency = request.getParameter("m4_currency_id");
		String stDtchange = request.getParameter("m4_date_exchange");
		String stExType = request.getParameter("m4_type_id");
		String sDateFormat=request.getParameter("DateFormat");
		M4Operations m=new M4Operations(request);
		M4SessionManager m4session = M4Context.getSession(request);
	    M4Format objformat = m4session.getM4Format();
		String stISODtchange = "";
	    stISODtchange = objformat.inFormat(stDtchange, "DATE", sDateFormat);
		m_log.trace("change_currency.jsp: Change request for currency ID "+stIdCurrency+" exchange date "+stISODtchange+" and exchange type "+stExType);	
		m.changeCurrency(stIdCurrency,stISODtchange,stExType);
	} catch(Exception e) {
		m_log.trace("Exception in page change_currency.jsp: " +e.toString());	
	}
%>
<!-----------------------  End: Set Currency ------------------------------------------>

<!-----------------------  Start: Background message ------------------------------------------>
<body>
	<table  class="tablanavegacion" cellspacing="2" border="0" align="center">
		<tr><td class="texto2" align="center"></td></tr>
		<tr><td class="texto2" align="center"><%=Tran_shco_so.getProperty("so.UpdatingCurr")%></td></tr>
		<tr><td class="texto2" align="center"></td></tr>
		<tr><td class="texto1" align="center">&nbsp;</td></tr>
		<tr><td class="texto1" align="center"><%=Tran_shco_so.getProperty("so.Wait")%></td></tr>
		<tr><td class="texto1" align="center">&nbsp;</td></tr>
	</table>
	<!-----------------------  End: Background message ------------------------------------------>

	<!-----------------------  Start: Cancellation method ------------------------------------------>
	<script language="javascript">
		this.close();
		this.opener.location = this.opener.location;
	</script>
	<!-----------------------  End: Cancellation method ------------------------------------------>
</body>
</html>
