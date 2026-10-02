<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.* " %>
<%    
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  

  if ((estado==null)||(estado.equals(""))){estado="0";}
  if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

  String IDRH = (String)request.getAttribute("empleado");
  IDRH = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", IDRH);
  String RHRole = (String)request.getAttribute("role");
  String RHPeriod = (String)request.getAttribute("periodo");
%>

<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>  
<%@ include file="../../sse_generico/english/menu_ess.jsp" %>
<%@ include file="/mss_g3/mss_ev_trans.jsp"%>

<%
  String zNodata =Tran.getProperty("Label.NoDataFound");
  String z1=Tran.getProperty("Label.ssco_1");
  String z0=Tran.getProperty("Label.ssco_0");
%>

<title> <%=TranMss.getProperty("ev_mss.Plan")%></title>

</head>
<body>

<%
  String zsubsesion = "SMCO_PLAN_ACTION_PROFS";
  String zmeta4object = "SMCO_PLAN_ACTION_PROFS";  
  String znodo = "SMCO_PLAN_ACTION_PROFS";
  String zmetodocarga = "CARGA:" + zsubsesion + "!SMCO_PLAN_ACTION_PROFS.SMCO_LOAD_ALL_PLANS_PROFS";

  String zventanas = "20";

  String zoutputdef = zsubsesion + "!" + znodo + "[*]";
  String zmove = znodo + ":" + znodo + "[FIRST]"; 
  String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

  int zregistroinicial = Integer.valueOf(zinicios).intValue();
  zregistroinicial = zregistroinicial - 1;
  int zventana  = Integer.valueOf(zventanas).intValue();
  int zregistrofinal = zregistroinicial + zventana - 1;
  // String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_H_SAL_DATA.CARGA";

  // Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
  String zSCONMACTION = zcomun + "SCO_NM_ACTION";
  String zSCO_NM_ACTION_TYPE = zcomun + "SCO_NM_ACTION_TYPE";
  String zSCO_APROX_DURATION = zcomun + "SCO_APROX_DURATION";
  String zSCO_NM_TIME_UNIT = zcomun + "SCO_NM_TIME_UNIT";

  String zSCOACTIONHOW = zcomun + "SCO_ACTION_HOW";
  String zSCOACTIONWHEN = zcomun + "SCO_ACTION_WHEN";
  String zSCOACTIONDESC = zcomun + "SCO_ACTION_DESC";
  String zSCOOBJECTIVES = zcomun + "SCO_OBJECTIVES";
  String zSCOPRIORITY = zcomun + "SCO_PRIORITY";

  String zLSCO_IS_FINISHED = zcomun + "SCO_IS_FINISHED";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<%    
  try {
    M4Operations m = new M4Operations(request); 
    m.setItem(zsubsesion,znodo,"","FILTRO_SCO_ID_HR",IDRH);  
    m.setItem(zsubsesion,znodo,"","FILTRO_SCO_OR_HR_PERIOD",RHPeriod); 
  } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/>
</m4:outputdef>
<m4:endjob/><m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
  int  zcounti  = 0;  
  try {
    M4Operations m = new M4Operations(request);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
%>
  <table class="barraregistros" cellspacing="0" width="100%">
<% if (zcounti > 0) { %>  
    <tr><td colspan="9" class="tablaestadosceldatitulo">&nbsp;</td></tr>
    <tr>
      <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCONMACTION%>" htmlsafe = "true"/>&nbsp;&nbsp;</td>
      <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCO_NM_ACTION_TYPE%>" htmlsafe = "true"/>&nbsp;&nbsp;</td>
      <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCO_APROX_DURATION%>" htmlsafe = "true"/>&nbsp;&nbsp;</td>
      <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCOACTIONWHEN%>" htmlsafe = "true"/>&nbsp;&nbsp;</td>
      <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zLSCO_IS_FINISHED%>" htmlsafe = "true"/>&nbsp;&nbsp;</td>
    </tr>
    <m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
      <m4:item m4varname="zSCO_IS_FINISHED" item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo%>" />
    <tr>
      <td class = "fuentevalor"><m4:item m4name="<%=zSCONMACTION%>" htmlsafe = "true" /></td>
      <td class = "fuentevalor"><m4:item m4name="<%=zSCO_NM_ACTION_TYPE%>" htmlsafe = "true" /></td>
      <td class = "fuentevalor"><m4:item m4name="<%=zSCO_APROX_DURATION%>" htmlsafe = "true" />&nbsp;-&nbsp;<m4:item m4name="<%=zSCO_NM_TIME_UNIT%>" htmlsafe = "true" /></td>
      <td class = "fuentevalor"><m4:item m4name="<%=zSCOACTIONWHEN%>" htmlsafe = "true" /></td>
      <td  class="fuentevalor">
      <%if (zSCO_IS_FINISHED.equals("0")){%>
        <%=z0%>
      <%}else{%>
        <%=z1%>
      <%}%>
      </td>
      </td>
    </tr>
    </m4:loop>
<%}else{%>
    <tr><td colspan="10" class="tablaestadosceldatitulo"><%=zNodata%></td></tr>
<%}%>
  </table>  
</body>
</html>
