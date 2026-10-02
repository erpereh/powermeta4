<%--
	@(#)FileVersion: 812.000.021
	@(#)FileDescription: First page to be included
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: shco_gen_set_sec_role_begin.jsp
	@(#)Date: 8/01/2009
--%>
<%--                    --%>
<%-- Set security role to actual session. Use it before <m4:startpage> tag --%>
<%-- Use shco_gen_set_sec_role_end.jsp to restore original role for next sessions --%>

<%-- BEGIN CHANGE ROLE 1 --%>
<%  StringBuffer sbRole = new StringBuffer("");
    try {
        M4Operations oM4Operations = new M4Operations(request);
        if (!oM4Operations.equals(null))
        {
          oM4Operations.getInfoSessionM4Object(new StringBuffer(),new StringBuffer(),new StringBuffer(), sbRole);
        }
    } 
    catch (OperationException e) 
    {
/*      m_log.error("Problem with M4Operations: "+e);*/
    }
    String sActualSessionRole = sbRole.toString(); 
%>  

<m4:getapplparam section="PORTAL_PARAM" key="SECURITY_ROLE" output="jsp"/>
<% String sSECURITY_ROLE = (String)pageContext.getAttribute("SECURITY_ROLE"); %>
<% 	if (sSECURITY_ROLE != null && !(sSECURITY_ROLE.equals(""))) {%>
	<m4:setrole m4role="<%=sSECURITY_ROLE%>"/>
<% } %>

<%-- END CHANGE ROLE 1 --%>
