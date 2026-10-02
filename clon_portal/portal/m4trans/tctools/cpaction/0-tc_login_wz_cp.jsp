<%-- [=====================================================]   
             
	@(#)FileVersion: 814.002.013
	@(#)FileDescription: Forgotten User/password   
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2017
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP4
	@(#)InternalName: tc_login_wz_cp.jsp     
	@(#)Date: 19/01/2009

[=====================================================] --%>
<%
  String sUrlLoginComplete;
  String sLangToChangePass = (String)session.getAttribute("LANG_TO_CHANGE_PASS");
  if ((sLangToChangePass==null)||(sLangToChangePass.equals(""))){sLangToChangePass = "2";}

  String zlang = sLangToChangePass;
  String sUrlLogin = request.getRequestURI();
  String sUrlLoginPar = request.getQueryString();

  if (sUrlLoginPar!=null && !sUrlLoginPar.equals("")) 
  {
   sUrlLoginComplete = sUrlLogin + "?" + sUrlLoginPar;
  } 
  else
  {
   sUrlLoginComplete = sUrlLogin;
  }

  session.setAttribute("URL_COMPLETE",sUrlLoginComplete);
%>

<%@ include file="/m4trans/shco_g0/0-shco_gen_taglib.jsp" %>
<%@ include file="/m4trans/shco_g0/0-shco_gen_lang.jsp" %>
<%@ include file="/m4trans/shco_g0/0-shco_login_box_trans.jsp" %>

<script type="text/javascript">
  function userrequest()
  {
	document.location.href="/tctools/cpaction/tc_login_wz_cp_action.jsp";
  }
</script>

<a id="LinkChPass" class="disusupass" title="<%=Tran_shco_login_box.getProperty("login.ToolTip")%>" href="javascript:userrequest();"><%=Tran_shco_login_box.getProperty("login.NotReUsuPass")%></a>

