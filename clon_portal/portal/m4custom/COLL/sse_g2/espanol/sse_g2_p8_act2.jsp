<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Strict//EN""DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %> 
<%@ include file="/sse_g2/sse_bft_trans.jsp"%>
<%
  String clase = "";
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String vDtStart = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SUS_DT_START_M");  
  String vDtEnd = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SUS_DT_END_M");  
  String vCkDiscounted = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_CK_DISCOUNTED_M");  
  String vPosition = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"vPosition");
  if ((estado==null)||(estado.equals(""))){
    estado="0";
  }
%>
<title><%=TranEss.getProperty("bft_ess.Benefits")%></title>

</head>
<body>
<%
  String zsubsesion = "SSE_BFT_DEP_BENE_COV";
  String zmeta4object = "SSE_BFT_DEP_BENE_COV";
  String znodo = "M4T_DEP_BENE_COV";
  String znodo2 = "SSE_COMUNICACION"; 
  String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";   
  String zoutputdef2 = zsubsesion + "!" + znodo + "[" + vPosition + "]";
  String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[" + vPosition + "]" + ".";
  String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodo + ".SSE_UPDATE_DATE";
%>

<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>">
  <m4:param name="ARG_POSITION" value="<%=vPosition%>"/>
  <m4:param name="ARG_DT_START" value="<%=vDtStart%>"/>
  <m4:param name="ARG_DT_END" value="<%=vDtEnd%>"/>
  <m4:param name="ARG_CK_DISCOUNTED" value="<%=vCkDiscounted%>"/> 
</m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef> 
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef> 
<m4:endjob/>

<%
  String zerror = "0";
  String zredireccion = "";
  try {
      M4Operations m = new M4Operations(request);
      zerror = m.getItem(znodo,zsubsesion,znodo2,"","TIPO_DEBUG");
      zredireccion = m.getItem(znodo,zsubsesion,znodo2,"","JSP_REDIRECCION");
  } catch(Exception e) {}

  if ((zredireccion==null)){
     zredireccion = "ERROR";
  }else{
}

%>


<title><%=TranEss.getProperty("bft_ess.BenefitsDep")%></title>
  <link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
  <script type="text/javascript" src="/libreria/funciones_sse.js"></script>
</head> 
<body>
<meta http-equiv='refresh' content="2; URL=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6.jsp?estado=21">
<%@include file="../../sse_generico/espanol/generico_actualizar_cuerpo.jsp"%>
 <script type="text/javascript" language="Javascript1.5"><!--

--></script>
<m4:endpage/>
</body>
</html>
