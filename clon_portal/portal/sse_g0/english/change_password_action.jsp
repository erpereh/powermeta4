<%-- [=====================================================]   
             
	@(#)FileVersion: 500.000.000       
	@(#)FileDescription: Page to allow the user to change his/her password.      
	@(#)CompanyName: Meta4 Spain, S.A.                       
	@(#)LegalCopyright: (c)1998
	@(#)ProductName: Meta4Mind Set
	@(#)ProductVersion: 5.0         
	@(#)InternalName: change_password_action.jsp      
	@(#)Date: 2001/09/27      

[=====================================================] --%>

<%-- [=====================================================]     
# Meta4 tag library (m4taglib.jar) and Java interfaces.
[=====================================================] --%>
<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.configuration.*, com.meta4.common.utils.logsystem.*" %>

<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">

<html>
<head>
	<title>Change Password</title>
</head>

<body><center>	


<h1>Password Change Page</h1>
<br>Updating data....	

<%-- Include common definitions and interfaces. --%>
<%@ include file="_change_password_action.jsp" %>
<%
	// In the above file, we execute the operations needed to get the new
	// url.
	response.sendRedirect(sNewUrl);
%>
</center></body>
</html>

