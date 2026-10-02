<%--
	@(#)FileVersion: 812.000.021
	@(#)FileDescription: include de menus
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: shco_gen_normal_js.jsp
	@(#)Date: 21/02/2002
--%>
<%@ include file="/m4trans/shco_g0/0-shco_gen_js.jsp" %>
<%if (zNavrc.equals("0")){%>
<%if (request.getAttribute("menus_Loaded")== null){
      request.setAttribute("menus_Loaded","1");%>
	  <script type="text/javascript" language="Javascript1.5" src="<%=zusertempuri%>/shco_menu_<%=znivelmenu%>.js"></script>
<%}%>
<%}%>
