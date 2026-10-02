<%String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
if ((estado==null)||(estado.equals(""))){estado="0";}
%>

<%@ page  import="com.meta4.session.*" %>
<%@ include file="mssgenerico_menusup.jsp" %>