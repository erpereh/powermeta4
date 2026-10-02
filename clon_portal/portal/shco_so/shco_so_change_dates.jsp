<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: shco_so_change_dates.jsp
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

<html>
<head>
<link href="/style/<%=sStyleSheet%>" type="text/css" rel="stylesheet" />
<title><%=Tran_shco_so.getProperty("so.UpdatingDates")%></title>
</head>

<!-----------------------  Start: Set Dates  ------------------------------------------>
<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page import="org.apache.log4j.Category" %>
<%
String sDateIni=request.getParameter("DateIni");
String sDateEnd=request.getParameter("DateEnd");
String sDateFormat=request.getParameter("DateFormat");
%>

<%@ page  import="java.util.*, java.text.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.format.*, com.meta4.m4operations.M4Operations" %>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger" %>
<%@ page import="org.apache.log4j.Category" %>


<% 
   M4Logger m_log = M4Logger.getLogger("com.meta4.jsp");
   try{
 
		M4Operations m = new M4Operations(request);
		M4SessionManager m4session = M4Context.getSession(request);
	    M4Format objformat = m4session.getM4Format();
		String sdatei = "";
		String sdatee = "";
	    sdatei = objformat.inFormat(sDateIni, "DATE", sDateFormat);
		sdatee = objformat.inFormat(sDateEnd, "DATE", sDateFormat);		
        m.initTask("SESSION");
        m.beginJob();
		m.createData("SCH_SESSION", "SCH_SESSION", null);
        m.setItem("SCH_SESSION","ROOT_SESSION", "0", "DATA_START_DATE", sdatei);
        m.setItem("SCH_SESSION","ROOT_SESSION", "0", "DATA_END_DATE", sdatee);
        m.endJob();
    } catch(Exception e) {
	  	m_log.trace("Exception while assigning dates to session object, in page change_dates.jsp: " + e.toString());
    } 
%>


<body>
	<table  class="tablanavegacion" cellspacing="2" border="0" align="center">
		<tr><td class="texto2" align="center"></td></tr>
		<tr><td class="texto2" align="center"><%=Tran_shco_so.getProperty("so.UpdatingDates")%></td></tr>
		<tr><td class="texto2" align="center"></td></tr>
		<tr><td class="texto1" align="center">&nbsp;</td></tr>
		<tr><td class="texto1" align="center"><%=Tran_shco_so.getProperty("so.Wait")%></td></tr>
		<tr><td class="texto1" align="center">&nbsp;</td></tr>
	</table>	

	<script language="javascript">
		this.close();
		sUrl = this.opener.location.href;
		sUrlQuitar = "&filterdates=1";
		sUrl=sUrl.substring(0,sUrl.length - sUrlQuitar.length);
		this.opener.location.href = sUrl  ;
	</script>

</body>
</html>
