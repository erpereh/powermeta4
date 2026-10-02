

<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<%@ include file="../../mss_generico/english/menu_mss.jsp" %> 
<%@ include file="/mss_g3/mss_g3_trans.jsp"%>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<title><%=mss_g3.getProperty("Label.mss_g3_p6_mod1_Cost")%></title>

<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String start = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDT_START");
String end = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDT_END");
String num = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNUM_PLACES");
String type_f = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTYPE");
String id_dev = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zID_DEV_SUB");
String id_devSA = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zID_DEV_SUBA");
if ((estado==null)||(estado.equals(""))){estado="0";}
%>

<%
  String zsubsesion = "SCO_SUBPRODUCT_SUBACTION_COSTS";
  String zmeta4object = "SCO_SUBPRODUCT_SUBACTION_COSTS";
  String znodo = "SCO_REQUEST_DET";
  String zoutputdef = zsubsesion + "!" + znodo + "[*]"; 
  String zmove = znodo + ":" + znodo + "[FIRST]";
  String znamenodo  = znodo + ":" + zsubsesion  + "!" + znodo;   
  String zcomun = znodo + ":" + zsubsesion + "!" + znodo  + ".";

  String zSCO_BUGET_AMT_S = zcomun + "SCO_BUGET_AMT_S"; 
  String zSCO_DEDUCTIBLE_AMT_S = zcomun + "SCO_DEDUCTIBLE_AMT_S"; 
  String zSCO_IND_BUGET_AMT_S = zcomun + "SCO_IND_BUGET_AMT_S";
  String zSCO_IND_DEDUCTIBLE_AMT_S = zcomun + "SCO_IND_DEDUCTIBLE_AMT_S";
  String zSCO_BUGET_AMT_S_N = zcomun + "SCO_BUGET_AMT_S_N"; 
  String zSCO_DEDUCTIBLE_AMT_S_N = zcomun + "SCO_DEDUCTIBLE_AMT_S_N"; 
  String zSCO_IND_BUGET_AMT_S_N = zcomun + "SCO_IND_BUGET_AMT_S_N";
  String zSCO_IND_DEDUCTIBLE_AMT_S_N = zcomun + "SCO_IND_DEDUCTIBLE_AMT_S_N";
  String zSESSION_CUR =  zcomun + "SESSION_CUR";
  String zmetodoCOST = "COST:" + zsubsesion + "!SCO_REQUEST_DET.SCO_CALC_MSS";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodoCOST%>">
  <m4:param name="ARG_DT_START" value="<%=start%>"/>
  <m4:param name="ARG_DT_END" value="<%=end%>"/>
  <m4:param name="ARG_ID_TYPE" value="<%=type_f%>"/>
  <m4:param name="ARG_NUM_PLACES" value="<%=num%>"/>
  <m4:param name="ARG_ID_DEV_SUB" value="<%=id_dev%>"/>
  <m4:param name="ARG_ID_DEV_SUBA" value="<%=id_devSA%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
int  zcount  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
  
} catch(Exception e) {}
String  zcountv = String.valueOf(zcount);
%>

</head>

<body >
<table  width="100%">
  <tr>
    <td class="titulofuncional" colspan="2" ><%=mss_g3.getProperty("Label.mss_g3_p6_mod1_Cost")%></td>
  </tr>
</table>

<table class = "tablaestados" width="100%" cellspacing="0">
 
  <tr>
    <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zSCO_BUGET_AMT_S_N%>" htmlsafe = "true"/> </td>
    <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_BUGET_AMT_S%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSESSION_CUR%>" htmlsafe = "true"/></td>
  </tr>
  <tr>
    <td class="fuentevalor2">&nbsp;<m4:label m4name="<%=zSCO_DEDUCTIBLE_AMT_S_N%>" htmlsafe = "true"/></td>
    <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCO_DEDUCTIBLE_AMT_S%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSESSION_CUR%>" htmlsafe = "true"/></td>
  </tr>
  <tr>
    <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zSCO_IND_BUGET_AMT_S_N%>" htmlsafe = "true"/></td>
    <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_IND_BUGET_AMT_S%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSESSION_CUR%>" htmlsafe = "true"/></td>
  </tr>
  <tr>
    <td class="fuentevalor2">&nbsp;<m4:label m4name="<%=zSCO_IND_DEDUCTIBLE_AMT_S_N%>" htmlsafe = "true"/></td>
    <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCO_IND_DEDUCTIBLE_AMT_S%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSESSION_CUR%>" htmlsafe = "true"/></td>
  </tr>

   <tr>
    <td class="fuenteboton"colspan="6">
      <a href="javascript:window.close();;">                      
      <img alt="<%=Tran.getProperty("Button.Close")%>" title="<%=Tran.getProperty("Button.Close")%>" img="<%=Tran.getProperty("Button.Close")%>" src="/iconos/entrar_blanco.gif" height="36" width="36" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" >
      </a>
    </td>
  </tr>
</table>

</body>
</html>



