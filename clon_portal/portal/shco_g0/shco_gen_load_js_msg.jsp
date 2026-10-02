<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_load_js_msg.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%String zlanguser = (String) request.getAttribute("zlanguser");%>
  
<script type="text/javascript" src="/translations/m4err_co_<%=zlanguser%>.js"></script>
<script type="text/javascript" src="/translations/m4err_uk_<%=zlanguser%>.js"></script>
<script type="text/javascript" src="/translations/m4err_fr_<%=zlanguser%>.js"></script>
<script type="text/javascript" src="/translations/m4err_sp_<%=zlanguser%>.js"></script>
<script type="text/javascript" src="/translations/m4err_cl_<%=zlanguser%>.js"></script>