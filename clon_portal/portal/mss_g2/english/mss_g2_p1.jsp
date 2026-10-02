<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Salary Information</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/english/menu_mss.jsp" %>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
</head>
<body>
<%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%
   String zsubsesion = "SSM_SALARY";
   String zmeta4object = "SSM_SALARY";
   String zmetodocarga = zsubsesion + "!SSM_PRINCIPAL.CARGA";
   String znodo = "SSM_SALARY";

   String zventanas = "20";
   int zvuelta = 5;
   String zdireccion = "mss_g2/mss_g2_p1.jsp";
   String zestado = "21";
   
   // Normally not modified.

   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   String zmove = znodo + ":" + znodo + "["+zregistroinicial+"]";   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String ztipocarga = "M4T";
  
// Items to be loaded. You must add all of the ones that you want to view.
    String zSNOMBREGLOBAL = "SCO_GB_NAME";   
  String zSNOMBRE = "STD_N_FIRST_NAME";
  String zSAPELLIDOS = "STD_N_FAMILY_NAME_1";
  String zSBRUTO = "SCO_PAY_RATE";
  String zSFECHA = "DT_START";
  String zSMONEDA = "SCO_ID_CURRENCY";
  String zSCOMPBASIS = "STD_N_COMP_BASIS";
  
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
    int  zcount  = 0;
    int  zcounti  = 0;  
    try {
      M4Operations m = new M4Operations(request);
      zcount = m.getCount(znodo,zsubsesion,znodo);
    } catch(Exception e) {}
    try {
      M4Operations m = new M4Operations(request);
      zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    } catch(Exception e) {}
    String  zcountv = String.valueOf(zcounti);
    
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2">Salary Information</td></tr>
<tr>
  <td><img alt="Salary Information" src="/iconos/noname_salariales_mss_58_100.gif" width="100" height="100" /></td>
  <td><div class="descripcionfuncional">View the compensation information for your employees.</div></td>
</tr>
</table>
<% if (zcounti > 0) { %>
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo"><td colspan="4">Compensation Basis</td></tr>
<m4:iterator m4rows="*" m4node="<%=ziterator%>">
<m4:param name="m4item6" value="<%=zSNOMBREGLOBAL%>"/>
<m4:param name="m4item1" value="<%=zSNOMBRE%>"/>
<m4:param name="m4item2" value="<%=zSAPELLIDOS%>"/>
<m4:param name="m4item3" value="<%=zSBRUTO%>"/>
<m4:param name="m4item4" value="<%=zSMONEDA%>"/>
<m4:param name="m4item5" value="<%=zSCOMPBASIS%>"/>
<tr>
  <td class="fuentevalor">&nbsp;$M4ITEM6$</td>
  <td class="fuentevalor">&nbsp;$M4ITEM3$&nbsp;$M4ITEM4$</td>
  <td class="fuentevalor">&nbsp;$M4ITEM5$</td>
</tr>
</m4:iterator>      
</table>
<%@include file="../../sse_generico/english/generico_ventanas.jsp"%>
<%
}else{%>
<div class="fuentenodatos">There is no available information.</div>
<%}%> 
<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
