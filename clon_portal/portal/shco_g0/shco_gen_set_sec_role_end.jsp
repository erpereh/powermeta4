<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_set_sec_role_end.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%-- Restore original role for following sessions. Use it after <m4:endpage/> tag --%>
<%-- Use shco_g0/shco_gen_set_sec_role_begin.jsp to read original role --%>

<%-- BEGIN CHANGE ROLE 2 --%>
<m4:setrole m4role="<%=sActualSessionRole%>"/>
<%-- END CHANGE ROLE 2--%>