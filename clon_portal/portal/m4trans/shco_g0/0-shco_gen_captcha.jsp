<%--
	@(#)FileVersion: 812.000.021
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: shco_gen_captcha.jsp
	@(#)Date:	
--%>
<tr><td class="fuentelinkcampo">&nbsp;</td></tr> 
<% 
// User has typed the captcha before and been rejected
if (sRetypeCaptcha != null)
{
%>
 <tr><td class="disusupass">&nbsp;<%=Tran_shco_login_box.getProperty("login.RetypeCaptcha")%></td></tr>
 <tr><td class="disusupass">&nbsp;<img src="/images/kaptcha.jpg"></td></tr>
 <tr><td class="disusupass">&nbsp;&nbsp;
	<input tabindex="2" title="<%=Tran_shco_login_box.getProperty("login.RetypeCaptcha")%>" size="20" type="text" id="kaptcha" name="kaptcha" />
 </td></tr>
<%
} 
// User has either not typed in the captcha but is needed, or was in trouble before.
else if (sRequireCaptcha != null)
{ 
%>
 <tr><td class="disusupass">&nbsp;<%=Tran_shco_login_box.getProperty("login.RequireCaptcha")%></td></tr>
 <tr><td class="disusupass">&nbsp;<img src="/images/kaptcha.jpg"></td></tr>
 <tr><td class="disusupass">&nbsp;&nbsp;
	<input tabindex="2" title="<%=Tran_shco_login_box.getProperty("login.RequireCaptcha")%>" size="20" type="text" id="kaptcha" name="kaptcha" />
 </td></tr>
<%
}
else 
{
%>
  	    	
<%
}  
%>
