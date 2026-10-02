<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_td_delete_wkitem.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="../shco_g0/shco_gen_taglib.jsp" %><html><head>
<%@ include file="../shco_g0/shco_gen_bag.jsp" %>
<%@ include file="../shco_g0/shco_gen_css.jsp" %>
<title></title>
<body>


<%!
	
	private static String getStringValue(String sValue) {
		return ((sValue == null) || sValue.equals("") || sValue.equals("null")) ? null : sValue;
	}
%>
<%-- request parameters --%>
<%
	 
	String zIdWorkItem = getStringValue(request.getParameter("ID_WORKITEM"));
	String zsubsesion = getStringValue(request.getParameter("zsubsesion"));
	String zredireccion = getStringValue(request.getParameter("zredireccion"));
	String znodowklist =getStringValue(request.getParameter("znodowklist"));
%>

<%-- variables --%>
<%
String zm4object =  zsubsesion;
String zDeleteWkItemMethod = zsubsesion + "!" + znodowklist + ".DELETE_WKITEM";	
%>

<%@ include file="../shco_g0/shco_gen_normal_js.jsp" %>
<%@ include file="../shco_g0/shco_gen_act_body.jsp" %>
<%-- start application server transactions --%>

<m4:startpage m4task="<%=zsubsesion%>"/>
	<m4:beginjob/>
		<m4:datadef m4o="<%=zm4object%>" m4name="<%=zsubsesion%>"/>
		<m4:exec m4method="<%=zDeleteWkItemMethod%>">
				 <m4:param name="AI_ID_WKITEM" value="<%=zIdWorkItem%>"/>
		</m4:exec>
	<m4:endjob/>
    <script type="text/javascript">
			m4navegar('/servlet/CheckSecurity/JSP/<%=zredireccion%>');
	</script>
<m4:endpage/>

</body>
</html>
