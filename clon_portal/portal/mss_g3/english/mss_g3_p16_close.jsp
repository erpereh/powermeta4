<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd"> 
<html>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<%@ include file="../../sse_generico/sgco_gen_inc.jsp" %>
<%@ include file="../../sse_generico/sse_generico_trans.jsp" %>


<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
<%
String IDRH = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH");
IDRH = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", IDRH);
String RHRole = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RHRole");
RHRole = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", RHRole);
String DTStartEval = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval");
DTStartEval = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", DTStartEval);
String zsubsesion = "SSM_DEFINE_CRITERIA";
String zmeta4object = zsubsesion;
String znodo = "M4T_H_EVALUATE";
String zoutputdef = zsubsesion + "!" + znodo + "[*]";   
String zmetodocerrar = zsubsesion + "!" + znodo + "." + "SSM_CLOSE_WF";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/><m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocerrar%>">
<m4:param name="ARG_ID_EVALUADO" value="<%=IDRH%>"/>

<m4:param name="ARG_ROL_EVALUADO" value="<%=RHRole%>"/>
<m4:param name="ARG_INICIO_EV" value="<%=DTStartEval%>"/>
</m4:exec>
<m4:endjob/>

<%
  String zerror = "";
  String zredireccion = "/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16.jsp";
%>

<meta http-equiv='refresh' content="2; url=<%=zredireccion%>">

<head><title><%=Tran.getProperty("Title.ssco_act")%></title></head> 
<body>
<br /><br /><br /><br /><br /><br /><br /><br />
<table align="center" cellpadding="0" cellspacing="0">
<tr><td class="fuenteactualizar"><%=Tran.getProperty("Label.ssco_pro")%></td></tr>
<tr><td class="fuenteactualizar2"><%=Tran.getProperty("Label.ssco_wait")%></td></tr>
</table>
<m4:endpage/>
</body>
</html>