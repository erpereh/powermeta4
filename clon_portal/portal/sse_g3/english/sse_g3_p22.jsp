<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp"%>
<%@ include file="../../sse_generico/english/menu_ess.jsp" %> 
<%@ include file="/sse_g3/sse_g3_trans.jsp"%>
<title><%=sse_g3Ess.getProperty("Title.sse_g3_p22")%></title>

<%
//--------------------------------------------------------  
String empleado = (String)request.getAttribute("empleado");
String periodo = (String)request.getAttribute("periodo");
String role = (String)request.getAttribute("role");
String zVis = (String)request.getAttribute("zVis");

String zSMCO_ID_HR = "";
if ((zVis==null)||(zVis.equals(""))){
  zVis = "1";
}
else{
  //Caragmos para un empleado concreto
  empleado = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", empleado);
  zSMCO_ID_HR = empleado;
}
//--------------------------------------------------------
if (zVis.equals("1")){%>
  <link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<%}else{%>
  <link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<%}%>

<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
estado="31";
%>

</head>
<body>
<%if (zVis.equals("1")){%>
  <%@ include file="../../sse_generico/english/generico_menusup.jsp" %>
  <%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%}%>
<%@ include file="../sse_g3_p22_body.jsp" %>
<%if (zVis.equals("1")){%>
  <%@ include file="../../sse_generico/english/generico_disclaimer.jsp" %>
<%}%>
<m4:endpage/>
</body>
</html>



