<%-- [=====================================================]   
             
  @(#)FileVersion: 500.000.000       
  @(#)FileDescription: Page to allow the user to change his/her password.      
  @(#)CompanyName: Meta4 Spain, S.A.                       
  @(#)LegalCopyright: (c)1998
  @(#)ProductName: Meta4Mind Set
  @(#)ProductVersion: 5.0         
  @(#)InternalName: change_password.jsp      
  @(#)Date: 2001/09/13      

[=====================================================] --%>

<%-- [=====================================================]     
# Meta4 tag library (m4taglib.jar) and Java interfaces.
[=====================================================] --%>
<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.configuration.*, com.meta4.common.utils.logsystem.*" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

  <head>
    <%@ include file="/sse_generico/sse_generico_trans.jsp" %>  
    <title><%=Tran.getProperty("Label.pwd.title")%></title>
	
	<% String prodFunc = (String) session.getAttribute("_PROD");
	   if(prodFunc!=null && prodFunc.equals("mobile")){		%>
			<link rel="stylesheet" href="/css/style_login_mobile.css" type="text/css" />
	<% }else{%>
			<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />  
	<% }%>
	<%@ include file="/mobile/include_mobile_chgpass.jsp" %>

    <script type="text/javascript" src="/libreria/funciones_sse.js"></script>
    <%
      String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
      String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
      if ((estado==null)||(estado.equals(""))){estado="0";}
      if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
    %>  
  </head>
  
  <body>
	<div id="capa_cuerpo">
    <%String zUrlPage ="/sse_g0/change_password.jsp";%>
    <%@ include file="/tctools/_change_password_include.jsp" %>
	</div>
  </body>
</html>
