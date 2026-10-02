<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_m4throw_gen_error.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<html><head><title></title>

<%
String zerror="";
String zshco_TEXT="";
try {	
	M4Operations m = new M4Operations(request);
	zerror = m.getItem(znodocom,zm4object,znodocom,"","SHCO_ACTIVE_DEBUG");
}catch(Exception e) {}	
%>
</head>	
<body>
<%-- truco pues en gen_error obliga a que la sesion vaya bajo la variable zsubsesion --%>
<%zsubsesion = zsubsesionM4ThrowHtml;%>
<%@ include file="/shco_rp/shco_m4throw_gen_error2.jsp" %>
<%zsubsesion = zm4object;%>
</body>
</html>