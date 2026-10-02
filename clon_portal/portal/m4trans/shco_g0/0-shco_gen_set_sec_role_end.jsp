<%--
	@(#)FileVersion: 812.000.021
	@(#)FileDescription: First page to be included
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: shco_gen_set_sec_role_end.jsp
	@(#)Date: 8/01/2009
--%>

<%-- Restore original role for following sessions. Use it after <m4:endpage/> tag --%>
<%-- Use shco_g0/shco_gen_set_sec_role_begin.jsp to read original role --%>

<%-- BEGIN CHANGE ROLE 2 --%>
<m4:setrole m4role="<%=sActualSessionRole%>"/>
<%-- END CHANGE ROLE 2--%>
