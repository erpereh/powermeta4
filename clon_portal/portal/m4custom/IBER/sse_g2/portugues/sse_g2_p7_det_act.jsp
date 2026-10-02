<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Strict//EN""DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>

<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %> 
<%@ include file="/sse_g2/sse_bft_trans.jsp"%>
<%
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String vPosition = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"vPosition");
  String zSUS_TAX = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSUS_TAX");
  String zSUS_COMMENT = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSUS_COMMENT"); 
  if ((estado==null)||(estado.equals(""))){
    estado="0";
  }
%>
<title><%=TranEss.getProperty("bft_ess.Benefits")%></title>

</head>
<body>
<%
  String zsubsesion = "SSE_BFT_EE_BNFT_ELEC";
  String zmeta4object = "SSE_BFT_EE_BNFT_ELEC";
  String znodo = "M4T_EE_BNFT_ELEC";
  String zoutputdef = zsubsesion + "!" + znodo + "[" + vPosition + "]";
  String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[" + vPosition + "]" + ".";
  String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodo + ".SSE_UPDATE_CK_TAX";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>">
  <m4:param name="ARG_POSITION" value="<%=vPosition%>"/>
  <m4:param name="ARG_CK_TAX" value="<%=zSUS_TAX%>"/>
  <m4:param name="ARG_COMMENT" value="<%=zSUS_COMMENT%>"/>
</m4:exec>
<m4:endjob/>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<table width="100%" cellspacing="0">
  <tr>
    <td class="fuenteactualizar"><%=Tran.getProperty("Label.LblProcData")%></td>
  </tr>
  <tr>
    <td class="fuenteactualizar2"><%=Tran.getProperty("Label.LblWait")%></td>
  </tr>
</table>
<meta http-equiv='refresh' content="2; URL=javascript:history.back(-1);">
<m4:endpage/>
</body>
</html>
