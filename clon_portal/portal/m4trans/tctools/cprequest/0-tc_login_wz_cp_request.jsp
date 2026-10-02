<%-- [=====================================================]   
             
	@(#)FileVersion: 813.002.104
	@(#)FileDescription: Forgotten User/password. Change password  
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2016
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP3
	@(#)InternalName: tc_login_wz_cp_action.jsp     
	@(#)Date: 15/09/2015

[=====================================================] --%>

<%@ page import="java.lang.*"%>
<%@ page import="com.meta4.session.*"%>
<%@ page import="com.meta4.taglib.util.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory"%>

<% // 1 - headers: no cache, no clickjacking 
   response.setHeader("Pragma", "no-cache"); 
   response.setHeader("Cache-Control", "no-store"); 
   response.setDateHeader("Expires", -1); 
   response.setHeader("X-Frame-Options", "SAMEORIGIN"); 
   
   M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
%>

<%  // 2 - configurable values (must have been set in the including page: tc_login.jsp/shco_gen_login_box.jsp or the functional equivalent)
    String zlang = (String)session.getAttribute("LANG_TO_CHANGE_PASS"); 
    String sUrlLoginComplete = (String)session.getAttribute("URL_COMPLETE"); 
    
    if (zlang == null || zlang.equals("")) zlang = "2"; 
    if (sUrlLoginComplete == null || sUrlLoginComplete.equals("")) sUrlLoginComplete =  "/";    
%>

<%  // 3 - definition of the flow
    // before we start we remove organization value from previous runs
    session.removeAttribute("SOC_C_PASS"); 
    session.removeAttribute("SOC_DNS"); 
	
    StringBuffer sbOrganization = new StringBuffer (); 
    boolean ismultiEnvironment  = M4BootstrapSession.isMultiEnvironment();
    boolean unknownOrganization = M4BootstrapSession.displayOrganizationBox ( request , sbOrganization ); 
    String sOrganization = sbOrganization.toString();

    // company agnostic environment: ask directly about the personal data
    if ( !ismultiEnvironment )
    {%>
    	<jsp:include page="/m4trans/tctools/cprequest/0-tc_login_wz_person_data.jsp"/> 
    <%}
    else
    {
     	request.setAttribute("IS_MULTI_ENVIRONMENT", true);
    	if (ismultiEnvironment) session.setAttribute("SOC_DNS", sOrganization); 
    	if (!unknownOrganization && sOrganization != null) 
    	{
    		// company is known...pass it through SOC_DNS
    		%><jsp:include page="/m4trans/tctools/cprequest/0-tc_login_wz_person_data.jsp"/><%
    	}
    	else    	
    	{
    		// company is not known, ask about the e-mail
    		%><jsp:include page="/m4trans/tctools/cprequest/0-tc_login_wz_hotc_email.jsp"/><%
    		}
    }
 
 %>
<%@ include file="/m4trans/shco_g0/0-shco_gen_taglib.jsp" %>
<%@ include file="/m4trans/shco_g0/0-shco_gen_lang.jsp" %>


<%-- JavaScript user interface --%>
<script type="text/javascript" language="Javascript1.5" src="/translations/tc_login_<%=zlanguser%>.js"></script>
<script type="text/javascript">
  function userrequest()
  {
  	var sOrg = "<%=sOrganization%>";
  	var bUnknownOrg = true; 
	var bIsMultiOrg = true; 
  	
  	<% if (!unknownOrganization) {%> bUnknownOrg = false; <%}%>
	<% if (!ismultiEnvironment) {%> bIsMultiOrg = false; <%}%>
  	
  	if ( !bIsMultiOrg || !bUnknownOrg )
  	{
		document.location.href="/tctools/cprequest/tc_login_wz_person_data.jsp";			
	}
	else
	{
		document.location.href="/tctools/cprequest/tc_login_wz_hotc_email.jsp";		
	}
  }
</script>
<html>
<head>
</head>		     	
<body>
</body>	
</html>


