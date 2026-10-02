<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %> 
<%@ include file="/mss_g3/mss_g3_trans.jsp"%>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<title><%=mss_g3.getProperty("Label.mss_g3_p3_val_Cost")%></title>

<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String id_dev = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zID_DEV_SUB");
String id_person = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zID_PERSON");
String or_person = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zOR_PERSON");
String hours = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zHOURS");
String hours_otw = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zHOURS_OTW");
if ((estado==null)||(estado.equals(""))){estado="0";}
%>

<%
  String zsubsesion = "SCO_TRAINING_REQ_COSTS";
  String zmeta4object = "SCO_TRAINING_REQ_COSTS";


  String znodo = "SCO_MT_REQUEST";
  String zoutputdef = zsubsesion + "!" + znodo + "[*]"; 
  String zmove = znodo + ":" + znodo + "[FIRST]";
  String znamenodo  = znodo + ":" + zsubsesion  + "!" + znodo;   
  String zcomun = znodo + ":" + zsubsesion + "!" + znodo  + ".";


  String znodoC = "SCO_REQ_SUB_COST";
  String zoutputdefC = zsubsesion + "!" + znodoC + "[*]"; 
  String zmoveC = znodoC + ":" + znodoC + "[FIRST]";
  String znamenodoC  = znodoC + ":" + zsubsesion  + "!" + znodoC;  
  String zcomunC = znodoC + ":" + zsubsesion + "!" + znodoC  + ".";


  String zSCO_BUGET_AMT_S = zcomunC + "SCO_BUGET_AMT_S"; 
  String zSCO_DEDUCTIBLE_AMT_S = zcomunC + "SCO_DEDUCTIBLE_AMT_S";  
  String zSCO_IND_BUGET_AMT_S = zcomunC + "SCO_IND_BUGET_AMT_S";
  String zSCO_IND_DEDUCTIBLE_AMT_S = zcomunC + "SCO_IND_DEDUCTIBLE_AMT_S";


  String zSCO_BUGET_AMT_S_N = zcomunC + "SCO_BUGET_AMT_S_N"; 
  String zSCO_DEDUCTIBLE_AMT_S_N = zcomunC + "SCO_DEDUCTIBLE_AMT_S_N";  
  String zSCO_IND_BUGET_AMT_S_N = zcomunC + "SCO_IND_BUGET_AMT_S_N";
  String zSCO_IND_DEDUCTIBLE_AMT_S_N = zcomunC + "SCO_IND_DEDUCTIBLE_AMT_S_N";


  String zSCO_EMPEE_HOUR_RATEl = zcomunC + "SSCO_EMPEE_HOUR_RATE";
  String zSCO_EMPEE_HOUR_RATE = zcomunC + "SCO_EMPEE_HOUR_RATE";
  
  String zSCO_DEDUCT_HOUR_RATE = zcomunC + "SCO_DEDUCT_HOUR_RATE";
  
  String zSCO_NET_HOURLY_RATEl = zcomunC + "SSCO_NET_HOURLY_RATE";
  String zSCO_NET_HOURLY_RATE = zcomunC + "SCO_NET_HOURLY_RATE";
  String zSCO_DEDUCT_NET_HOUR_RATE = zcomunC + "SCO_DEDUCT_NET_HOUR_RATE";

  String zSESSION_CUR =  zcomunC + "ID_CUR_BUGET_AMT_S";
  
  String zlabelDEduc =  zcomunC + "SSCO_DEDUC";

  String zmetodoCOST = "COST:" + zsubsesion + "!SCO_MT_REQUEST.SCO_CALC_COSTS_MSS";
  
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodoCOST%>">
  <m4:param name="ARG_ID_DEV_SUB" value="<%=id_dev%>"/>
  <m4:param name="ARG_ID_PERSON" value="<%=id_person%>"/>
  <m4:param name="ARG_OR_HR" value="<%=or_person%>"/>
  <m4:param name="ARG_HOURS" value="<%=hours%>"/>
  <m4:param name="ARG_HOURS_OTW" value="<%=hours_otw%>"/> 
</m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodoC%>"><m4:param name="m4name0" value="<%=zoutputdefC%>"/></m4:outputdef>
<m4:endjob/>
 

<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveC%>"/></m4:move>

 
</head>

<body >
<table  width="100%"><tr><td class="titulofuncional" colspan="2" ><%=mss_g3.getProperty("Label.mss_g3_p3_val_Cost")%></td></tr></table>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr>
  <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zSCO_BUGET_AMT_S_N%>" htmlsafe = "true"/> </td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_BUGET_AMT_S%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSESSION_CUR%>" htmlsafe = "true"/></td>
</tr>
<!--
<tr>
  <td class="fuentevalor2">&nbsp;<m4:label m4name="<%=zlabelDEduc%>" htmlsafe = "true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCO_DEDUCTIBLE_AMT_S%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSESSION_CUR%>" htmlsafe = "true"/></td>
</tr>
-->
<tr>
  <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zSCO_IND_BUGET_AMT_S_N%>" htmlsafe = "true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_IND_BUGET_AMT_S%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSESSION_CUR%>" htmlsafe = "true"/></td>
</tr>
<!--
<tr>
  <td class="fuentevalor2">&nbsp;<m4:label m4name="<%=zlabelDEduc%>" htmlsafe = "true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCO_IND_DEDUCTIBLE_AMT_S%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSESSION_CUR%>" htmlsafe = "true"/></td>
</tr>
-->
<tr>
  <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zSCO_EMPEE_HOUR_RATEl%>" htmlsafe = "true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_EMPEE_HOUR_RATE%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSESSION_CUR%>" htmlsafe = "true"/></td>
</tr>
<!--
<tr>
  <td class="fuentevalor2">&nbsp;<m4:label m4name="<%=zlabelDEduc%>" htmlsafe = "true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCO_DEDUCT_HOUR_RATE%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSESSION_CUR%>" htmlsafe = "true"/></td>
</tr>
-->
<tr>
  <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zSCO_NET_HOURLY_RATEl%>" htmlsafe = "true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_NET_HOURLY_RATE%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSESSION_CUR%>" htmlsafe = "true"/></td>
</tr>
<!--
<tr>
  <td class="fuentevalor2">&nbsp;<m4:label m4name="<%=zlabelDEduc%>" htmlsafe = "true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCO_DEDUCT_NET_HOUR_RATE%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSESSION_CUR%>" htmlsafe = "true"/></td>
</tr>
-->
 <tr><td class="fuenteboton"colspan="2"><a href="javascript:window.close();"><img alt="<%=Tran.getProperty("Button.Close")%>" title="<%=Tran.getProperty("Button.Close")%>" src="/iconos/entrar_blanco.gif" height="36" width="36" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" ></a></td></tr>
</table>

</body>
</html>



