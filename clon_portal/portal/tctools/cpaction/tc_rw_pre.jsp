<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: tc_rw_pre.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<html>
<head><title>....</title></head>
<% 

    // 1) Page that asks the fields
    String sRecoveryPage = "/tctools/cpaction/tc_login_wz_cp_action.jsp";
    String sProcComplete = "/tctools/cpaction/tc_rw_complete.jsp";

    // 2) Language
    String sLangToChangePass = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "langid");
    if (sLangToChangePass != null && !sLangToChangePass.equals("")) 
    {
	session.setAttribute("LANG_TO_CHANGE_PASS", sLangToChangePass);
    }
    else
    {
	session.setAttribute("LANG_TO_CHANGE_PASS", "2");
    }

    // 3) Style
    String sStyle = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "style");
    if (sStyle != null && !sStyle.equals("")) 
    {
	session.setAttribute("LANG_TO_CHANGE_PASS_STYLE", sStyle);
    }
    else
    {
	session.setAttribute("LANG_TO_CHANGE_PASS_STYLE", "rich");
    }

    // 3) Page where you go after the fields are asked
    String sUrlLoginComplete 	= com.meta4.taglib.util.M4SafeRequest.getParameter(request, "pageonend");
    if (sUrlLoginComplete != null && !sUrlLoginComplete.equals("")) 
    {
	session.setAttribute("URL_COMPLETE", sUrlLoginComplete);
    }
    else
    {
	session.setAttribute("URL_COMPLETE", sProcComplete);
    }


    %>
    <script type="text/javascript">		
    document.location.href="<%=sRecoveryPage%>";
    </script>
</html>