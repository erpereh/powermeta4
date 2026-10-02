<%-- [=====================================================]   
             
	@(#)FileVersion: 500.000.000       
	@(#)FileDescription: Internal page to allow the user changes his/her password.      
	@(#)CompanyName: Meta4 Spain, S.A.                       
	@(#)LegalCopyright: (c) 1998       
	@(#)ProductName: Meta4Mind Set                           
	@(#)ProductVersion: 5.0         
	@(#)InternalName: _change_password_form.jsp      
	@(#)Date: 2001/09/27      

[=====================================================] --%>

<%--
This page is included from {language}/change_password.jsp file, and use
variables declared in that file.
--%>


<%-- User interface. Some of variables used here are declared in the parent page. --%>


<script language="JavaScript">
function CheckAndSubmit()
{
	var bIsError = false;
	var sErrorMessage = "";	
	
	if (ChangePasswordForm.M4_CURRENT_PASSWORD.value == "")
	{
		sErrorMessage += "<%=sError_CurrentPasswordIsNull%>" + "\n";
		bIsError = true;		
	}
	
	if (ChangePasswordForm.M4_NEW_PASSWORD.value == "")
	{
		sErrorMessage += "<%=sError_NewPasswordIsNull%>" + "\n";
		bIsError = true;		
	}
	
	if (ChangePasswordForm.M4_RETYPE_PASSWORD.value == "")
	{
		sErrorMessage += "<%=sError_RetypePasswordIsNull%>" + "\n";
		bIsError = true;		
	}
	
	if (ChangePasswordForm.M4_NEW_PASSWORD.value != ChangePasswordForm.M4_RETYPE_PASSWORD.value)
	{
		sErrorMessage += "<%=sError_NewPasswordDoesNotMatchRetypePassword%>" + "\n";
		bIsError = true;		
	}
	
	if (ChangePasswordForm.M4_NEW_PASSWORD.value == ChangePasswordForm.M4_CURRENT_PASSWORD.value)
	{
		sErrorMessage += "<%=sError_NewPasswordMatchCurrentPassword%>" + "\n";
		bIsError = true;		
	}
		
	if (bIsError == true)
	{
		alert(sErrorMessage);
		return;
	}
	else
	{
		ChangePasswordForm.submit();
	}
}
</script>

<%-- Show error message --%>
<%
	if (sErrorMessage != null)
	{
%>
<tr><td style="padding-top:10px">
	<table border="0" cellspacing="0">
	<tr><td align="left"><span class="password6">Error:</span>&nbsp;<span class="password7"><%=sErrorMessage%></span></td></tr>
	</table>
</td></tr>
<%
	}
%>
<%-- New password form --%>
<!--<tr><td style="padding-top:10px"> -->
    
    <table width = "100%" cellspacing="0" border = "0">
    <tr><td class="titulofuncional" colspan="2">Cambia tu contraseña</td></tr>
    <tr><td class="descripcionfuncional">Introduce tu contraseña actual, la nueva contraseña y confírmala de nuevo.</td></tr>
    </table>
  
	<form method="post" name="ChangePasswordForm" action="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sChangePasswordUrl)%>">
	<table class="tablaestados" cellspacing="0" border="0" width = "100%">
	<tr class="tablaestadosceldatitulo" ><td colspan="2"><%=sPassword%></td></tr>
	<tr><td class="fuentecampo">&nbsp;<%=sUser%>&nbsp;:&nbsp;</td>
		<td class="fuentecampo" ><%=ai_UserName%>&nbsp;</td></tr>
	<tr><td class="fuentecampo" > &nbsp;<%=sCurrentPasswd%>&nbsp;:&nbsp;</td>
		<td class="fuentecampo" ><input class="fuenteformulario" type="password" id="M4_CURRENT_PASSWORD" name="M4_CURRENT_PASSWORD" size="14" maxlength="10" title="<%=sCurrentPasswdTooltip%>" tabindex="1" /></td></tr>
	<tr><td class="fuentecampo">&nbsp;<%=sNewPasswd%>&nbsp;:&nbsp;</td>
		<td class="fuentecampo"><input class="fuenteformulario" type="password" id="M4_NEW_PASSWORD" name="M4_NEW_PASSWORD" size="14" maxlength="10" title="<%=sNewPasswdTooltip%>" tabindex="2" /></td></tr>
	<tr><td class="fuentecampo">&nbsp;<%=sReNewPasswd%>&nbsp;:&nbsp;</td>
		<td class="fuentecampo"><input class="fuenteformulario" type="password" id="M4_RETYPE_PASSWORD" name="M4_RETYPE_PASSWORD" size="14" maxlength="10" title="<%=sReNewPasswdTooltip%>" tabindex="3" /></td></tr>
	<tr><td class="fuenteboton" colspan ="2" align="right"><a title="<%=sSendButton%>" href="javascript:CheckAndSubmit();" tabindex="4">
	    <img alt="Enviar" id="enviar" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/> </a></td></tr>		
	</table>
	</form>
</td></tr>