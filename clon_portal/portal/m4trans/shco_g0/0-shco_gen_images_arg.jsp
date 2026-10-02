<%-- =========================================================
	@(#) FileVersion: 818.000.051
	@(#) FileDescription: shco_gen_images_arg.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2020
	@(#) ProductName: PeopleNet
========================================================= --%>

 
<%@ page  import="com.meta4.savparams.*, com.meta4.session.*, com.meta4.taglib.util.*" %>

<%
   String zcssuser = "100"; 
   try 
   {
   	M4SessionManager m4session = M4Context.getSession(request);
   	SavParamsInterface oSavParams = m4session.getSavParamsInstance();
   	zcssuser = (String) oSavParams.getParameterValue("PORTAL_PARAM", "CSS");   
   }
   catch (Exception e) 
   {
	// the default: 100
   }
%>

<% String zFileName ="";
   String zStdFileContent="";%> 

