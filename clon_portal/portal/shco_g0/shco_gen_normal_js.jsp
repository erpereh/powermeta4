<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_normal_js.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="shco_gen_js.jsp" %>
<%if (zNavrc.equals("0")){%>
<%if (request.getAttribute("menus_Loaded")== null){
      request.setAttribute("menus_Loaded","1");%>
	  <script type="text/javascript" language="Javascript1.5" src="<%=zusertempuri%>/shco_menu_<%=znivelmenu%>.js"></script>
<%}%>
<%}%>
