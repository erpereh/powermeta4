<%-- =========================================================
	@(#) FileVersion: 821.001.038
	@(#) FileDescription: tc_login_wz_cp_request.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2024
	@(#) ProductName: Peoplenet
========================================================= --%>

<%@ page import="java.lang.*"%>
<%@ page import="com.meta4.session.*"%>
<%@ page import="com.meta4.taglib.util.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger"%>

<% // 1 - headers: no cache, no clickjacking 
	response.setHeader("Pragma", "no-cache"); 
	response.setHeader("Cache-Control", "no-store"); 
	response.setDateHeader("Expires", -1); 

	M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");
%>

<%@ include file="/tctools/tc_frame_options.jsp" %>

<%  
	
	// 2 - configurable values (must have been set in the including page: tc_login.jsp/shco_gen_login_box.jsp or the functional equivalent)
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
	boolean forgetPwdBasedOnEmail = false;
	String sforgetPwdBasedOnEmail = GlobalSavParams.getParameterValue("ADMINISTRATION", "FORGET_PWD_EMAIL_BASED");
	oM4Log.trace("sforgetPwdBasedOnEmail : " + sforgetPwdBasedOnEmail); 
	if (sforgetPwdBasedOnEmail != null && sforgetPwdBasedOnEmail.equals("1")) 
	{
	  forgetPwdBasedOnEmail = true; 
	}


	// calculate organization
	boolean unknownOrganization = M4BootstrapSession.displayOrganizationBox ( request , sbOrganization ); 
	String sOrganization = sbOrganization.toString();


	// company agnostic environment: ask directly about the personal data
	if (!ismultiEnvironment)
	{
	  if (forgetPwdBasedOnEmail) { %><jsp:include page="/tctools/cprequest/tc_login_wz_hotc_email.vue.jsp"/><% }
	  else { %><jsp:include page="/tctools/cprequest/tc_login_wz_person_data.jsp"/><% }
	}
	else
	{
		// multicompany environment: leave in session.
		request.setAttribute("IS_MULTI_ENVIRONMENT", true);
		if (ismultiEnvironment) session.setAttribute("SOC_DNS", sOrganization); 
		if (!unknownOrganization && sOrganization != null) 
		{
			// company is known, you can ask about the e-mail if they want
			if (forgetPwdBasedOnEmail) { %><jsp:include page="/tctools/cprequest/tc_login_wz_hotc_email.vue.jsp"/><% }
			else { %><jsp:include page="/tctools/cprequest/tc_login_wz_person_data.jsp"/><% }
		} 
		else
		{
			// company is not known, ask about the e-mail
			 %><jsp:include page="/tctools/cprequest/tc_login_wz_hotc_email.vue.jsp"/><%
		}
	}
%>
<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="/shco_g0/shco_gen_lang.jsp" %>



