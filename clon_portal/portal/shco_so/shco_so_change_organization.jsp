<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: shco_so_change_organization.jsp
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
<title><%=Tran_shco_so.getProperty("so.UpdatingData")%></title>
</head>


<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger" %>
<%@ page import="org.apache.log4j.Category" %>
<%
String stOrganization=request.getParameter("organizationid");
%>
<m4:setorganization m4organization="<%=stOrganization%>"/>
<body>
	<table  class="tablanavegacion" cellspacing="2" border="0" align="center">
		<tr><td class="texto2" align="center"></td></tr>
		<tr><td class="texto2" align="center"><%=Tran_shco_so.getProperty("so.UpdatingOrg")%></td></tr>
		<tr><td class="texto2" align="center"></td></tr>
		<tr><td class="texto1" align="center">&nbsp;</td></tr>
		<tr><td class="texto1" align="center"><%=Tran_shco_so.getProperty("so.Wait")%></td></tr>
		<tr><td class="texto1" align="center">&nbsp;</td></tr>
	</table>	
	<script language="javascript">
		this.close();
		this.opener.location = this.opener.location;
	</script>
	
</body>
</html>
