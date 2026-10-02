<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<link href="/css/style_eval.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/mootools.js"></script>
<script type="text/javascript" src="/libreria/functions_eval.js"></script>
<script type="text/javascript" src="/libreria/meta4ajax.js"></script>

<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "0";}
String zidhr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidhr");
String zorrole = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zorrole");
if ((zidhr==null)||(zidhr.equals(""))){zidhr = "";}
else {zidhr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zidhr);}
if ((zorrole==null)||(zorrole.equals(""))){zorrole = "";}
else {zorrole = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zorrole);}
%>
<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %> 
<%@ include file="/mss_g3/mss_ev_trans.jsp"%> 

<%
    String zAyuda="/iconos/info_12.gif";   
  String Ver = Tran.getProperty("Label.Ver");

  String zsubsesion = "SMCO_OBJETIVES";
  String zmeta4object = "SMCO_OBJETIVES";
  String znodo = "SMCO_OBJETIVES";

  
  String zoutputdef = zsubsesion + "!" + znodo + "[*]";

  
  String zmove = znodo + ":" + znodo + "[FIRST]";
String znamenodo  = znodo + ":" + zsubsesion  + "!" + znodo;
String zSMCO_GB_NAME= znodo + ":" + zsubsesion  + "!" + znodo+ "."+"SMCO_GB_NAME";

String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

String zSMCO_TP_ORIGEN = zcomun + "SMCO_TP_ORIGEN"; 
String zSMCO_ID_OBJECTIVE = zcomun + "SMCO_ID_OBJECTIVE"; 
String zSMCO_NM_LEVEL = zcomun + "SMCO_NM_LEVEL";
String zSMCO_NM_OBJECTIVE = zcomun + "SMCO_NM_OBJECTIVE";
String zSMCO_NM_MAGNITUDE = zcomun + "SMCO_NM_MAGNITUDE";
String zSMCO_PERCENT= zcomun + "SMCO_PERCENT";
String zSMCO_FIABILITY= zcomun + "SMCO_FIABILITY";
String zSMCO_ID_ORIGEN_AUX= zcomun + "SMCO_ID_ORIGEN_AUX";
String zSMCO_ID_ORIGEN= zcomun + "SMCO_ID_ORIGEN";
String zSMCO_N_ORIGEN= zcomun + "SMCO_N_ORIGEN";
String zmetodocarga = "CARGA:" + zsubsesion + "!SMCO_OBJETIVES.SMCO_LOAD";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request); 
      m.setItem(zsubsesion,"SMCO_OBJETIVES","","ARG_ID_HR",zidhr);
       m.setItem(zsubsesion,"SMCO_OBJETIVES","","ARG_OR_ROLE",zorrole);
    } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
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
<title><m4:label m4name="<%=znamenodo%>" htmlsafe="true"/></title>
</head>
<body >
<table  width="100%"><tr><td class="titulofuncional" colspan="2" ><m4:label m4name="<%=znamenodo%>" htmlsafe="true"/>&nbsp;:&nbsp;<m4:item m4name="<%=zSMCO_GB_NAME%>" htmlsafe="true"/></td></tr></table>
<%if (zcount > 0) {
String zid_typeAnt="";String zid_typeAuxAnt="";
String zposicions1 = "0";int zcontrol1 = 0;int zposicion1 =0;String  zPaint1="";%>

<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo " >
<td>&nbsp;<m4:label m4name="<%=zSMCO_TP_ORIGEN%>" htmlsafe = "true"/></td>
<td >&nbsp;</td>
<td>&nbsp;<m4:label m4name="<%=zSMCO_NM_OBJECTIVE%>" htmlsafe = "true"/></td>
<td>&nbsp;<m4:label m4name="<%=zSMCO_NM_LEVEL%>" htmlsafe = "true"/></td>
<td>&nbsp;<m4:label m4name="<%=zSMCO_PERCENT%>" htmlsafe = "true"/></td>
<td>&nbsp;<m4:label m4name="<%=zSMCO_FIABILITY%>" htmlsafe = "true"/></td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
<%zposicions1 = m4lix;zposicion1 = Integer.valueOf(zposicions1).intValue();zcontrol1 = zposicion1%2;if (zcontrol1==0){zPaint1="";}else{zPaint1="2";}%>

  <m4:item  m4varname="zid_type" m4name="<%=zSMCO_ID_ORIGEN%>" htmlsafe = "true"/>
  <m4:item  m4varname="zid_typeaux" m4name="<%=zSMCO_ID_ORIGEN_AUX%>" htmlsafe = "true"/>
  
<tr>

<%if (zid_typeAnt.equals(zid_type)){%>
<td class="fuentevalor<%=zPaint1%>">&nbsp;</td>
  <%if (zid_typeAuxAnt.equals(zid_typeaux)){%>
  <td class="fuentevalor<%=zPaint1%>">&nbsp;</td>
  <%}else{%>
  <td class="fuentevalor<%=zPaint1%>"><m4:item m4name="<%=zSMCO_N_ORIGEN%>" htmlsafe = "true"/></td>
  <%}%>
<%}else{%>
<td class="fuentevalor<%=zPaint1%>"><m4:item m4name="<%=zSMCO_TP_ORIGEN%>" htmlsafe = "true"/></td>
<td class="fuentevalor<%=zPaint1%>"><m4:item m4name="<%=zSMCO_N_ORIGEN%>" htmlsafe = "true"/></td>
<%}
zid_typeAnt=zid_type;
zid_typeAuxAnt=zid_typeaux;
%>

  <td class="fuentevalor<%=zPaint1%>"><img style='cursor:pointer' IdObjective="<m4:item item="SMCO_ID_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo%>"/>" IdMagnitud="<m4:item item="SMCO_ID_MAGNITUD" htmlsafe="true" outputdef="<%=znodo%>"/>" IdLevel="<m4:item item="SMCO_ID_LEVEL" htmlsafe="true" outputdef="<%=znodo%>"/>" onclick='javascript:m4Eval.evalDetail.show(this);' title="<%=Ver%>" src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /><m4:item m4name="<%=zSMCO_NM_OBJECTIVE%>" htmlsafe = "true"/></td>
    <td class="fuentevalor<%=zPaint1%>"><m4:item m4name="<%=zSMCO_NM_LEVEL%>" htmlsafe = "true"/></td>
  
  <td class="fuentevalor<%=zPaint1%>"><m4:item m4name="<%=zSMCO_PERCENT%>"  htmlsafe = "true"/>&nbsp;( <m4:item m4name="<%=zSMCO_NM_MAGNITUDE%>"  htmlsafe = "true"/>)</td>
  </td>
  <td class="fuentevalor<%=zPaint1%>"><m4:item m4name="<%=zSMCO_FIABILITY%>" htmlsafe = "true"/></td>
</tr> 
</m4:loop>
<tr>
  <td class="fuenteboton"colspan="6">
  <a href="javascript:window.close();;">                      
  <img alt="<%=Tran.getProperty("Button.Close")%>"  src="/iconos/entrar_blanco.gif" height="36" width="36" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" >
  </a>
  </td>
  </tr>
  </table>
<%}else{%>
<div class="fuentenodatos"><%=Tran.getProperty("Label.NoDataFound")%></div>
<table>
  <td class="fuenteboton" >
  <a href="javascript:window.close();;">                      
  <img alt="<%=Tran.getProperty("Button.Close")%>"  src="/iconos/entrar_blanco.gif" height="36" width="36" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" >
  </a>
  </td>
  </table>
<br/> <br/><br/> <br/>
<%}%>


  </body>
</html>



