<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_login_box.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>



  <% 
  // LANG
  String zlang = (String) request.getAttribute("LANG");
  if ((zlang==null)||(zlang.equals(""))){zlang = "2";}

  // M4URL
  String stUrl = (String) request.getAttribute("M4URL");

   // _PROD
  String zProd = (String) request.getAttribute("_PROD");
  %>
  
<%@ include file="shco_gen_lang.jsp" %>
<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="shco_login_box_trans.jsp" %>

	<%
  // URL
  String zurl = (String)request.getAttribute("URL");
  if ((zurl==null)||(zurl.equals(""))){zurl = "";}
  String zsConcatUrlParamCar = "?";
  if (zurl.indexOf("?") >= 0){
      zsConcatUrlParamCar="&";
  } 

  %>
  
<form id="login" name="login" action="/servlet/login" method="post">
<input type="hidden" id="M4_CHANGE_ROLE" name="M4_CHANGE_ROLE"  value=""/>
<input type="hidden" id="M4_CHANGE_ORGANIZATION" name="M4_CHANGE_ORGANIZATION"  value=""/>
<input type="hidden" id="M4_CHANGE_CURRENCY" name="M4_CHANGE_CURRENCY"  value=""/>	
<input type="hidden" name="_LANG" value="<%=zlang%>" />
<input type="hidden" id="_URL" name="_URL"  value="<%=zurl%>" />
<%if (zProd!=null){%>
   <input type="hidden" id="_PROD" name="_PROD"  value="<%=zProd%>" />
<%}%>


<table width="100%" class="tablalink" cellspacing="0" cellpadding="2">
<%if (stUrl!=null && !stUrl.equals("")) {%>
<tr><td><input type="hidden" name = "M4URL"  value="<%=stUrl%>"></td></tr>
<%}%>
<tr><td>
	<table width="100%" cellspacing="0" cellpadding="2">
		<tr><td class="fuentelinkcampo">&nbsp;<%=Tran_shco_login_box.getProperty("login.6")%>:</td></tr>
		<tr><td class="fuentelinkcampo">&nbsp;
		<%

 			String sRequireCaptcha = (String) session.getAttribute(com.meta4.security.SecurityAutomationControl.PARAM_REQUIRE_CAPTCHA);
  			String sRetypeCaptcha = (String) session.getAttribute(com.meta4.security.SecurityAutomationControl.PARAM_RETYPE_CAPTCHA);
			String sLastUserInLockingDanger = (String) session.getAttribute(com.meta4.security.SecurityAutomationControl.ATT_LOCKING_DANGER); 

			session.removeAttribute(com.meta4.security.SecurityAutomationControl.PARAM_REQUIRE_CAPTCHA);
  			session.removeAttribute(com.meta4.security.SecurityAutomationControl.PARAM_RETYPE_CAPTCHA);
  			session.removeAttribute(com.meta4.security.SecurityAutomationControl.ATT_LOCKING_DANGER);

			if ( sRequireCaptcha != null || sRetypeCaptcha != null || sLastUserInLockingDanger != null)
			{
			%>
			<input tabindex="1"title="<%=Tran_shco_login_box.getProperty("login.7")%>" size="14" type="text" id="_USER" name="_USER" value="<%=sLastUserInLockingDanger%>"/></td></tr>
			<% } else { %>
			<input tabindex="1"title="<%=Tran_shco_login_box.getProperty("login.7")%>" size="14" type="text" id="_USER" name="_USER" /></td></tr>
		
			<% } %>

		<tr><td class="fuentelinkcampo">&nbsp;<%=Tran_shco_login_box.getProperty("login.8")%>:</td></tr>
		<tr><td class="fuentelinkcampo">&nbsp;&nbsp;<input tabindex="2"title="<%=Tran_shco_login_box.getProperty("login.9")%>" size="14" type="password" id="_PASSWD" name="_PASSWD" /></td></tr>
		
		<%@ include file="shco_gen_captcha.jsp" %>
		<tr>
		   <td align="center" class="disusupass">
			<%
			session.setAttribute("LANG_TO_CHANGE_PASS",zlang);
			session.setAttribute("LANG_TO_CHANGE_PASS_STYLE","");
			%>	
			<jsp:include page="/tctools/cpaction/tc_login_wz_cp.jsp" flush="false" />

		  </td>
		</tr>

	</table>
	<div id="ADVANCED" style="display:none; position:relative; top=0 left=0 ">
		<table width="100%"  cellspacing="0" cellpadding="2">
			<tr><td class="fuentelinkcampo"><input tabindex="3" type="checkbox" name="CHANGE_ROLE" checked="checked" title="<%=Tran_shco_login_box.getProperty("login.11")%>" onclick="var scam=m4prop('login','CHANGE_ROLE','checked','','get');if (scam==false){m4valor('login','M4_CHANGE_ROLE','1','set');}else{m4valor('login','M4_CHANGE_ROLE','','set');};"/>&nbsp;<%=Tran_shco_login_box.getProperty("login.11")%></td></tr>
			<tr><td class="fuentelinkcampo"><input tabindex="4" type="checkbox" name="CHANGE_ORGANIZATION" checked="checked" title="<%=Tran_shco_login_box.getProperty("login.12")%>" onclick="var scam=m4prop('login','CHANGE_ORGANIZATION','checked','','get');if (scam==false){m4valor('login','M4_CHANGE_ORGANIZATION','1','set');}else{m4valor('login','M4_CHANGE_ORGANIZATION','','set');};"/>&nbsp;<%=Tran_shco_login_box.getProperty("login.12")%></td></tr>
			<tr><td class="fuentelinkcampo"><input tabindex="5" type="checkbox" name="CHANGE_CURRENCY" checked="checked" title="<%=Tran_shco_login_box.getProperty("login.13")%>" onclick="var scam=m4prop('login','CHANGE_CURRENCY','checked','','get');if (scam==false){m4valor('login','M4_CHANGE_CURRENCY','1','set');}else{m4valor('login','M4_CHANGE_CURRENCY','','set');};" />&nbsp;<%=Tran_shco_login_box.getProperty("login.13")%></td></tr>
			<tr><td class="fuentelinkcampo"><input tabindex="5" type="checkbox" name="DEFAULT_DATES" checked="checked" title="<%=Tran_shco_login_box.getProperty("login.13")%>" />&nbsp;<%=Tran_shco_login_box.getProperty("login.14")%></td></tr>
		</table>
	</div>
	<table width="100%"  cellspacing="0" cellpadding="2">
		<tr><td class="fuentelinkcampo" align="center"><input tabindex="6"title="<%=Tran_shco_login_box.getProperty("login.10")%>" type="image" src="/images/ic_log_in_36_36.gif" id="enviar" name="enviar" onclick="var scam=m4prop('login','DEFAULT_DATES','checked','','get');if (scam==false){m4valor('login','_URL','<%=zurl%>' + '<%=zsConcatUrlParamCar%>' +'filterdates=1' ,'set');};" /></td></tr>
	</table>

</td></tr>
</table>
</form>

<script type="text/javascript"language="Javascript1.5">
if (!document.all){
var url = document.forms["login"].elements["_URL"].value + '<%=zsConcatUrlParamCar%>' + "browser=NS";
document.forms["login"].elements["_URL"].value = url;
}
m4tabfocus('login',1);
</script>

<script language="JavaScript">
	<!--	 
	function showHideLayer(ai_sThisId) {
	var thiselement = document.getElementById(ai_sThisId);
	var linkelement = document.getElementById("AdvanceLink");
		thiselement.style.display = (thiselement.style.display == "") ? "none" : "";				
		linkelement.title = (thiselement.style.display == "") ? "<%=Tran_shco_login_box.getProperty("login.ToolTipCloseAdvance")%>" : "<%=Tran_shco_login_box.getProperty("login.ToolTipGoAdvance")%>";				
	}  
	-->		
</script>


