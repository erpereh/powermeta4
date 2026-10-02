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


<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">

<html>
<head>
  <title>Cambio de contrase&ntilde;a</title>
  <link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />  
 <%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>  
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>  
</head>

<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
  
<%String zUrlPage ="/sse_g0/ssco_change_password.jsp";%>
<%@ include file="/tctools/_change_password_include.jsp" %>

</body>
</html>

