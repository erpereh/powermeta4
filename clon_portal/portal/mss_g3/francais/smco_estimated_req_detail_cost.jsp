

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
String zindbugetamts = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zindbugetamts");
String zinddeductamts = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinddeductamts");
String zbugetamts = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zbugetamts");
String zdeductibleamts = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdeductibleamts");
String zbugetamtrequest = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zbugetamtrequest");
String zdeductamtrequest = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdeductamtrequest");
String zempeehour = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zempeehour");
String zdeducthour = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdeducthour");
String znethour = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znethour");
String zdeductnethour = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdeductnethour");
String zcurrency = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zcurrency");

 
if ((estado==null)||(estado.equals(""))){estado="0";}
%>

<%
    String zsubsesion = "SSM_SOLICITUDES_PENDIENTES";
  String zmeta4object = "SSM_SOLICITUDES_PENDIENTES";  
  String znodo = "SSM_LISTA_DETALLE_CURSO";

  String zraiz = znodo + ":" + zsubsesion + "!" + znodo + "[0]" + ".";

 
  
  String zbugetamtrequestn = zraiz  + "SCO_BUGET_AMT_REQUEST"; 
  String zbugetamtsn = zraiz  + "SCO_BUGET_AMT_S";
  String zdeductamtrequestn = zraiz  + "SCO_DEDUCT_AMT_REQUEST";
  String zdeducthourn = zraiz  + "SCO_DEDUCT_HOUR_RATE";
  String zdeductnethourn = zraiz  + "SCO_DEDUCT_NET_HOUR_RATE"; 
  String zdeductibleamtsn = zraiz  + "SCO_DEDUCTIBLE_AMT_S"; 
  String zempeehourn = zraiz  + "SCO_EMPEE_HOUR_RATE";
  String zindbugetamtsn = zraiz  + "SCO_IND_BUGET_AMT_S"; 
  String zinddeductamtsn = zraiz  + "SCO_IND_DEDUCTIBLE_AMT_S"; 
  String znethourn = zraiz  + "SCO_NET_HOURLY_RATE"; 
  
  String zoutputdef = zsubsesion + "!" + znodo + "[" + 0 + "-" + 0 + "]";
    
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
 
 <m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>

<m4:endjob/>
 
 
 
</head>

<body >
<table  width="100%">
  <tr>
    <td class="titulofuncional" colspan="2" ><%=mss_g3.getProperty("Label.mss_g3_p3_val_Cost")%></td>
  </tr>
</table>

<table class = "tablaestados" width="100%" cellspacing="0">
 
  <tr>
 
    <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zindbugetamtsn%>" htmlsafe = "true"/></td>
    <td class="fuentevalor">&nbsp;<%=zindbugetamts%>&nbsp;<%=zcurrency%> </td>
  </tr>
  <tr>
     
    <td class="fuentevalor2">&nbsp;<m4:label m4name="<%=zinddeductamtsn%>" htmlsafe = "true"/></td>
    <td class="fuentevalor2">&nbsp;<%=zinddeductamts%>&nbsp;<%=zcurrency%></td>
  </tr>
  <tr>
     
    <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zbugetamtsn%>" htmlsafe = "true"/></td>
    <td class="fuentevalor">&nbsp;<%=zbugetamts%>&nbsp;<%=zcurrency%></td>
  </tr>
  <tr>
   
    <td class="fuentevalor2">&nbsp;<m4:label m4name="<%=zdeductibleamtsn%>" htmlsafe = "true"/></td>
    <td class="fuentevalor2">&nbsp;<%=zdeductibleamts%>&nbsp;<%=zcurrency%></td>
  </tr>




  <tr>
   
    <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zbugetamtrequestn%>" htmlsafe = "true"/></td>
    <td class="fuentevalor">&nbsp;<%=zbugetamtrequest%>&nbsp;<%=zcurrency%></td>
  </tr>
  <tr>
     
    <td class="fuentevalor2">&nbsp;<m4:label m4name="<%=zdeductamtrequestn%>" htmlsafe = "true"/></td>
    <td class="fuentevalor2">&nbsp;<%=zdeductamtrequest%>&nbsp;<%=zcurrency%></td>
  </tr>
  <tr>
     <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zempeehourn%>" htmlsafe = "true"/></td>
    <td class="fuentevalor">&nbsp;<%=zempeehour%>&nbsp;<%=zcurrency%></td>
  </tr>
  <tr>
   
    <td class="fuentevalor2">&nbsp;<m4:label m4name="<%=zdeducthourn%>" htmlsafe = "true"/></td>
    <td class="fuentevalor2">&nbsp;<%=zdeducthour%>&nbsp;<%=zcurrency%></td>
  </tr>

  <tr>
   
    <td class="fuentevalor">&nbsp;<m4:label m4name="<%=znethourn%>" htmlsafe = "true"/></td>
    <td class="fuentevalor">&nbsp;<%=znethour%>&nbsp;<%=zcurrency%></td>
  </tr>
  <tr>
   
    <td class="fuentevalor2">&nbsp;<m4:label m4name="<%=zdeductnethourn%>" htmlsafe = "true"/></td>
    <td class="fuentevalor2">&nbsp;<%=zdeductnethour%>&nbsp;<%=zcurrency%></td>
  </tr>



   <tr>
    <td class="fuenteboton"colspan="6">
      <a href="javascript:window.close();;">                      
      <img alt="<%=Tran.getProperty("Button.Close")%>" title="<%=Tran.getProperty("Button.Close")%>" src="/iconos/entrar_blanco.gif" height="36" width="36" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" >
      </a>
    </td>
  </tr>
 
</table>

</body>
</html>



