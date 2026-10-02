<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: change_password_action.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>



<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<%@ page import="com.meta4.common.utils.logsystem.*" %>
<%@ include file="/tctools/tc_login_bag.jsp" %>
<%@ include file="/shco_g0/shco_gen_css.jsp" %>
<%@ include file="/tctools/tc_login_trans.jsp" %>

<html>
<head>
	<title><%=Tran_tc_login.getProperty("ChangePwd.Title")%></title>
</head>

<body><center>	

<div id="capa_cuerpo" style="position:absolute; left:10%; top:10%; width:76%; z-index:2">
   <br /><br /><br /><br /><br /><br /><br /><br />
   <table align="center" cellspacing="0" border = "0">
    <tr><td class="fuenteactualizar"><%=Tran_tc_login.getProperty("ChangePwd.Working")%></td></tr>
	<tr><td class="fuenteactualizar2"><%=Tran_tc_login.getProperty("ChangePwd.PleaseWait")%></td></tr>	
	</table>
	</br>
</div>


<%-- Include to change password. --%>

<%String sErrorMessage ="";%>
<%@ include file="/tctools/_change_password_action.jsp" %>
</center>


<%-- Open window with the change password result message. --%>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen.js"></script>
<script language="JavaScript"> 
   //Abrir la ventana con el mensaje de cambio de password
   var sidwindow = "wndChangePasswordMessage";
   var sUrlWindow = "/tctools/" + "<%=zLangFolder%>" + "/change_password_message.jsp?M4_ERROR_MESSAGE=" + "<%=sErrorMessage%>" + "&M4_OPCODE=" + "<%=ai_sOpCode%>"+"&zcssuser=" + "<%=zcssuser%>" + "&zappprod=" + "<%=zappprod%>"+ "&zlanguser=" + "<%=zlanguser%>";  
   //var oWindow= m4window(sidwindow,sUrlWindow,new Array,"","450","250","no","no",true);  
   //We do a window.open to be firefox 1.5+ compatible 
   var oWindow = window.open(sUrlWindow, '..', 'width=450, height=250, resizable=no, scrollbars=no, toolbar=no, titlebar=no, location=no');

   
</script>

<%-- Redirect to the correct page --%>
<script language="JavaScript">
window.location.href="<%=sNewUrl%>";
</script>  

<%-- LogOut if the password is expired and user has already change to a new password --%>
<%if (ai_sOpCode.equals("PASSWORD_EXPIRED") && sErrorMessage.equals("CHANGE_PASSWORD_OK")){%>
	<m4:logout/>
<%}%>

</body>
</html>
