<%@ include file="../sse_generico/sse_generico_taglib.jsp" %>
<html>
<head>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
  
<%@ include file="../sse_generico/sse_generico_taglib_2.jsp" %>
<%@ include file="../sse_generico/sse_generico_lang.jsp" %>
<%@ include file="/mss_g3/smco_iv_trans.jsp"%>  

<title><%=tranivMSS.getProperty("iv_mss.LblInfo")%></title>

</head> 
<body>

<%
   String zsubsesion = "SMCO_IV_INTERV_RES";
   String zmeta4object = zsubsesion;
   String znodo = "SSE_MT_GEN";
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";   
   String zraiz = zsubsesion + "!" + znodo + ".";
 %>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>

<div id="capa_cuerpo" style="position:relative; left:1%; top:1%; width:100%; height:0%; z-index:2">
<table width="100%" cellspacing="0">
<tr>
  <td class="titulofuncional" colspan="2"><%=tranivMSS.getProperty("iv_mss.LblInfo")%> </td>
  <td><a href="" onclick="window.close();"><img title="<%=tranivMSS.getProperty("iv_mss.LblClose")%>" alt="<%=tranivMSS.getProperty("iv_mss.LblClose")%>" src="/iconos/lu_close_1_24.gif" onmouseover=" m4sombra(this)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
  <td><img alt="<%=tranivMSS.getProperty("iv_mss.LblTools")%>" src="/iconos/noname_configuracion_98_125.gif" width="98" height="125" onmouseover="m4luznoname(this)" onmouseout="m4oscuridad(this)" /></td>
  <td><div class="fuentedescripcion"><%=tranivMSS.getProperty("iv_mss.LblGrabar")%></div></td>
</tr>
</table>
</div>
<m4:endpage/>
</body>