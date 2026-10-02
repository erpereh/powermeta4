<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="/m4trans/sse_generico/0-sse_generico_taglib_2.jsp" %>

<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-menu_ess.jsp" %> 
<%@ include file="/m4trans/sse_g3/0-sse_train_trans.jsp"%>

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

<title><%=TrainEss.getProperty("Label.HistTrain")%></title>

<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>

<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>

</head>
<body>

<%if (zVis.equals("1")){%>
  <%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_menusup.jsp" %>
  <%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_links.jsp" %>
<%}%>

<%
  String zsubsesion = "SSE_H_HR_COURSE";
  String zmeta4object = "SSE_H_HR_COURSE";
  String znodo = "SSE_H_HR_COURSE";

    String zmetodocarga = zsubsesion + "!SSE_H_HR_COURSE.SMCO_MAIN_LOAD_PROCESS";
  
  String zventanas = "";
  if (zVis.equals("1")){
    zventanas = "20";
  }else{
    zventanas = "2000";
  }
  int zvuelta = 5;
  String zdireccion = "sse_g3/sse_g3_p21.jsp";
  String zestado = "21";
  
  int zregistroinicial = Integer.valueOf(zinicios).intValue();
  zregistroinicial = zregistroinicial - 1;
  int zventana  = Integer.valueOf(zventanas).intValue();
  int zregistrofinal = zregistroinicial + zventana - 1;

  
  String zoutputdef = zsubsesion + "!" + znodo + "[*]";
  String zmove = znodo + ":" + znodo + "[FIRST]";
  String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";


  
   String zSCO_DT_START = zcomun + "SCO_DT_START";
   String zSCO_DT_END = zcomun + "SCO_DT_END";
   String zSCO_NM_DEV_SUBPRODUCT = zcomun + "SCO_NM_DEV_SUBPRODUCT";
   String zSCO_NM_DEV_PRO_TYPE = zcomun + "SCO_NM_DEV_PRO_TYPE";
   String zSCO_NM_STATE = zcomun + "SCO_NM_STATE";
   String zSCO_NM_DEV_SUBACTION = zcomun + "SCO_NM_DEV_SUBACTION";

  String sSortNode = zmeta4object + "!" + znodo + ".Sort";
  
  
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="SMCO_ARG_HR_TO_LOAD" value="<%=zSMCO_ID_HR%>"/> </m4:exec>

<m4:sortitems m4name="<%=sSortNode%>">
  <m4:param name="SCO_DT_START" value="DESC"/>
</m4:sortitems>

<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
  int  zcount  = 0;
  int  zcounti  = 0;  
  try {
      M4Operations m = new M4Operations(request);
      zcount = m.getCount(znodo,zsubsesion,znodo);
      zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
%>

<%if (zVis.equals("1")){%>
<table width="100%">
<tr>
  <td class="titulofuncional" colspan="2"><%=TrainEss.getProperty("Label.HistTrain")%></td>
</tr>
  <tr>
    <td valign="top"><img alt="<%=TrainEss.getProperty("Label.HistTrain")%>" title="<%=TrainEss.getProperty("Label.HistTrain")%>"   src="/iconos/noname_evalua_cursos_74_100.gif" width="100" height="100" /></td>
    <td>
      <div class="descripcionfuncional"><%=TrainEss.getProperty("Label.HistTrainDesc")%></div>
    </td>
  </tr>
</table>
<%}%>

<%if (zVis.equals("1")){%>
  <table class = "tablaestados" width="100%" cellspacing="0">
<%}else{%>
  <table class = "barraregistros" width="100%" cellspacing="0">
<%}%>

<%if (zcount > 0) {
  String zposicions = "0";
  int zcontrol = 0;
  int zposicion =0;
  String zPaint = "";
%>

<tr class = "tablaestadosceldatitulo " >
<td><m4:label m4name="<%=zSCO_NM_DEV_SUBPRODUCT%>" htmlsafe = "true"/></td>
<td><m4:label m4name="<%=zSCO_NM_DEV_PRO_TYPE%>" htmlsafe = "true"/></td>
<td><m4:label m4name="<%=zSCO_NM_STATE%>" htmlsafe = "true"/></td>
<td><m4:label m4name="<%=zSCO_DT_START%>" htmlsafe = "true"/></td>
<td><m4:label m4name="<%=zSCO_DT_END%>" htmlsafe = "true"/></td>
<td><m4:label m4name="<%=zSCO_NM_DEV_SUBACTION%>" htmlsafe = "true"/></td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
<%zposicions = m4lix;
  zposicion = Integer.valueOf(zposicions).intValue();
  zcontrol = zposicion%2;
  if (zcontrol==0){zPaint="";}else{zPaint="2";}
%>

<tr>
  
    <td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCO_NM_DEV_SUBPRODUCT%>" htmlsafe = "true"/></td>   
    <td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCO_NM_DEV_PRO_TYPE%>" htmlsafe = "true"/></td>
    <td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCO_NM_STATE%>" htmlsafe = "true"/></td>    
    <td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCO_DT_START%>" htmlsafe = "true"/></td>
    <td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCO_DT_END%>" htmlsafe = "true"/></td>
    <td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCO_NM_DEV_SUBACTION%>" htmlsafe = "true"/></td>
  
  </tr> 
</m4:loop>
<%}else{%>
  <%if (zVis.equals("1")){%>
    <tr><td colspan="10" class="tablaestadosceldatitulo"><%=Tran.getProperty("Label.NoDataFound9")%></td></tr>
  <%}else{%>
    <tr><td colspan="10" class="tablaestadosceldatitulo"><%=TrainEss.getProperty("Label.NoData")%></td></tr>
  <%}%>
<%}%>
</table>

<%if (zVis.equals("1")){%>
  <%@include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_ventanas.jsp"%>
<%}%>
  
<%if (zVis.equals("1")){%>
  <%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_disclaimer.jsp" %>
<%}%>

<m4:endpage/>
</body>
</html>



