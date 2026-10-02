<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<link href="/css/style_eval.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_doc.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/func_eval.js"></script>
<script type="text/javascript" src="/libreria/mootools.js"></script>
<script type="text/javascript" src="/libreria/functions_eval.js"></script>
<script type="text/javascript" src="/libreria/meta4ajax.js"></script>

<%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-menu_mss.jsp" %> 
<%@ include file="/m4trans/mss_g3/0-mss_ev_trans.jsp"%> 
<%
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String ztipocarga = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ztipocarga");
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
  String zVis = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis");
   
  String zSSM_ID_HR = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSM_ID_HR");
  //desencrypt SSM_ID_HR
  zSSM_ID_HR = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zSSM_ID_HR);
  if (zSSM_ID_HR == null) {zSSM_ID_HR="";}
 
  String zSSM_OR_HR_ROLE = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSM_OR_HR_ROLE");
  //desencrypt SSM_OR_HR_ROLE
  zSSM_OR_HR_ROLE = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zSSM_OR_HR_ROLE);
  if (zSSM_OR_HR_ROLE == null) {zSSM_OR_HR_ROLE="";}
  
  String zSSM_NM_EVALUTE = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSM_NM_EVALUTE");
  if (zSSM_NM_EVALUTE == null) {zSSM_NM_EVALUTE="";}  
  
  String zSSM_ID_EVAL_PLAN = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSM_ID_EVAL_PLAN");
  String zSSM_DT_START_PROC = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSM_DT_START_PROC");
  //desencrypt SSM_DT_START_PROC
  zSSM_DT_START_PROC = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zSSM_DT_START_PROC);

  String zTiTleVar =TranMss.getProperty("ev_mss.LinkHist");
  String zNodata =Tran.getProperty("Label.NoDataFound");
  String Ver = "";
  Ver = Tran.getProperty("Label.Ver");
  String zAyuda="/iconos/info_12.gif";
  String pathImgViewComment = "/iconos/lu_hot_info_24.gif";
  String zpathVerComentario = "/mss_g3/espanol/smco_viewcomment.jsp?comment=";
  String ViewComment = Tran.getProperty("Button.ViewComment");
  
  if ((estado==null)||(estado.equals(""))){estado="0";}
  if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
  if ((zVis==null)||(zVis.equals(""))){zVis = "0";}
  if ((ztipocarga==null)||(ztipocarga.equals(""))){ztipocarga = "CLOSED";}
  if ((zSSM_ID_EVAL_PLAN==null)||(zSSM_ID_EVAL_PLAN.equals(""))){zSSM_ID_EVAL_PLAN = "";}else{ztipocarga = "PROC";zTiTleVar =TranMss.getProperty("ev_mss.LinkResult");}
  if ((zSSM_DT_START_PROC==null)||(zSSM_DT_START_PROC.equals(""))){zSSM_DT_START_PROC = "";}
%>
<title><%=zTiTleVar%></title>
<script type="text/javascript">
function abrirexcel(empleado,ordinal,fec)
{
 var hoy = new Date(); 
var sNewWindow = "Wnd" + hoy.getDay() + hoy.getHours() + hoy.getMinutes() + hoy.getSeconds();
m4valor("open_v","zidType","03","set");
m4valor("open_v","zidhr",empleado,"set");
m4valor("open_v","zorrole",ordinal,"set");
m4valor("open_v","zdtstart",fec,"set");
window.open("",sNewWindow,"top=20,left=20,toolbar=no,scrollbars=yes,directories=no,status=yes,menubar=no,resizable=yes,width=850,height=560");
document.forms["open_v"].target = sNewWindow ;
m4submit("open_v");
}
</script>
</head>
<body>
<%if (zVis.equals("1")){%>
<%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-mssgenerico_menusup.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_links.jsp" %>
<%}%>
<%
    String zsubsesion = "SSM_PRA_IN_H_EVAL_CLOSED";
  String zmeta4object = "SSM_PRA_IN_H_EVAL_CLOSED";  
  String znodo = "SSM_PRA_IN_H_EVAL_CLOSED";
  String znodo1 = "SSM_PRA_IN_EVAL_CAPAB";
  String znodo2 = "SSM_PRA_IN_EVALUATOR";
  String znodo3 = "SSM_PRA_IN_EVAL_OBJECT";
  String znodo4 = "SSM_PRA_IN_EVAL_OBJECT_CUAL";
  
  
    String zoutputdef = zsubsesion + "!" + znodo + "[*]";
    String zmove = znodo + ":" + znodo + "[FIRST]";
  String zcomun = znodo + ":" + zmeta4object + "!" + znodo + "[&VAR.m4lix]" + ".";
  String zraiz =  znodo + ":" + zmeta4object  + "!" + znodo + ".";
   
  String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
    String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";
  String zcomun1 = znodo1 + ":" + zmeta4object + "!" + znodo1 + "[&VAR.m4lix]" + ".";
  String zraiz1 =  znodo1 + ":" + zmeta4object  + "!" + znodo1 + ".";
   
  String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";

  String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
    String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
  String zcomun3 = znodo3 + ":" + zmeta4object + "!" + znodo3 + "[&VAR.m4lix]" + ".";
  String zraiz3 =  znodo3 + ":" + zmeta4object  + "!" + znodo3 + ".";

  String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
    String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";
  String zcomun4 = znodo4 + ":" + zmeta4object + "!" + znodo4 + "[&VAR.m4lix]" + ".";
  String zraiz4 =  znodo4 + ":" + zmeta4object  + "!" + znodo4 + ".";
  
  
    String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRA_IN_H_EVAL_CLOSED.SSM_CARGA";    
    
  // Items que vamos a cargar
  
  String znamenodo  = znodo + ":" + zsubsesion  + "!" + znodo;
  String zSCO_NM_EVAL_PLANlb = zraiz + "SCO_NM_EVAL_PLAN";
  String zSCO_NM_EVAL_PROClb = zraiz + "SCO_NM_EVAL_PROC";
  String zSCO_NM_LEVELlb = zraiz + "SCO_NM_LEVEL";
  String zSCO_NM_LEVEL_1lb = zraiz + "SCO_NM_LEVEL_1";
  String zRATEOBJ = zraiz + "SCO_VALUE_OBJ_QUANT";
  String zSTD_N_JOB_CODElb = zraiz + "STD_N_JOB_CODE";
    String zSTD_N_WORK_UNITlb = zraiz + "STD_N_WORK_UNIT";
   
  String zSCO_NM_EVAL_PROC = zcomun + "SCO_NM_EVAL_PROC";
  String zSCO_NM_EVAL_PLAN = zcomun + "SCO_NM_EVAL_PLAN";
  String zSCO_DT_START_PROC = zcomun + "SCO_DT_START_PROC";
  String zSCO_DT_END = zcomun + "SCO_DT_END";
  String zSCO_NM_LEVEL = zcomun + "SCO_NM_LEVEL"; 
  String zSCO_NM_LEVEL_1 = zcomun + "SCO_NM_LEVEL_1";
  String zSTD_N_JOB_CODE = zcomun + "STD_N_JOB_CODE"; 
  String zSTD_N_WORK_UNIT = zcomun + "STD_N_WORK_UNIT";  
  String zSCO_ID_HR = zcomun + "SCO_ID_HR";  
  String zSCO_OR_HR_ROLE = zcomun + "SCO_OR_HR_ROLE";  
  String zSCO_DT_START_EVAL = zcomun + "SCO_DT_START_EVAL";
  String zSCO_ID_DOC_APPL = zcomun + "SCO_ID_DOC_APPL";     
  
  String zSCO_NM_EXTD_KNlb = zraiz1 + "SCO_NM_EXTD_KN";
  String zSCO_GB_NAMElb = zraiz1 + "SCO_GB_NAME";
  String zSCO_WEIGHTlb = zraiz1 + "SCO_WEIGHT"; 
  String zSCO_NM_LEVELlb1 = zraiz1 + "SCO_NM_LEVEL"; 
  String zSCO_NM_LEVEL_1lb1 = zraiz1 + "SCO_NM_LEVEL_1"; 
  String zSCO_GAP = zraiz1 + "SCO_GAP"; 
  String zSCO_GB_NAMEp = zraiz + "SCO_GB_NAME";
   
  String zSCO_GB_NAME = zcomun1 + "SCO_GB_NAME";
  String zSCO_NM_EXTD_KN = zcomun1 + "SCO_NM_EXTD_KN"; 
  String zSCO_WEIGHT = zcomun1 + "SCO_WEIGHT"; 
  String zSCO_NM_LEVEL1 = zcomun1 + "SCO_NM_LEVEL"; 
  String zSCO_NM_LEVEL_11 = zcomun1 + "SCO_NM_LEVEL_1"; 
  String zSCO_GAP_CAP = zcomun1 + "SCO_GAP_CAP";
  String zSCO_EXPLANATION = zcomun1 + "SCO_EXPLANATION";
  String zSCO_NM_CRITERIA_TYPE1 = zcomun1 + "SCO_NM_CRITERIA_TYPE";
  String zSCO_ID_CAPABILITY = zcomun1 + "SCO_ID_CAPABILITY";
  String zSCO_DT_START_REQ = zcomun1 + "SCO_DT_START_REQ";
  String zSCO_ID_CAP_REQ_LVL = zcomun1 + "SCO_ID_CAP_REQ_LVL";
  
  String znamenodo3  = znodo3 + ":" + zsubsesion  + "!" + znodo3;
  String zSCO_NM_OBJECTIVElb = zraiz3 + "SCO_NM_OBJECTIVE"; 
  String zSCO_WEIGHT3lb = zraiz3 + "SCO_WEIGHT"; 
  String zSCO_SCHED_VALUElb = zraiz3 + "SCO_SCHED_VALUE"; 
  String zSCO_ACCOMP_DEGREElb = zraiz3 + "SCO_ACCOMP_DEGREE"; 
  String zSCO_NM_MAGNITUDElb = zraiz3 + "SCO_NM_MAGNITUDE";
  
  String zSCO_NM_OBJECTIVE = zcomun3 + "SCO_NM_OBJECTIVE";
  String zSCO_WEIGHT3 = zcomun3 + "SCO_WEIGHT";
  String zSCO_ID_OBJECTIVE = zcomun3 + "SCO_ID_OBJECTIVE";
  String zSCO_ID_MAGNITUD = zcomun3 + "SCO_ID_MAGNITUD";
  
    String zSCO_SCHED_VALUE = zcomun3 + "SCO_SCHED_VALUE";
    String zSCO_ACCOMP_DEGREE = zcomun3 + "SCO_ACCOMP_DEGREE";
    String zSCO_GB_NAME3 = zcomun3 + "SCO_GB_NAME";
    String zSCO_NM_MAGNITUDE = zcomun3 + "SCO_NM_MAGNITUDE";
    String zSCO_EXPLANATION3 = zcomun3 + "SCO_EXPLANATION";
    String zSCO_NM_CRITERIA_TYPE3 = zcomun3 + "SCO_NM_CRITERIA_TYPE";
    String zSCO_COMMENT3 = zcomun3 + "SCO_COMMENT"; 
    String znamenodo4  = znodo4 + ":" + zsubsesion  + "!" + znodo4;
    
    String zSCO_NM_OBJECTIVE4lb = zraiz4 + "SCO_NM_OBJECTIVE";
  String zSCO_WEIGHT4lb = zraiz4 + "SCO_WEIGHT";
  String zSCO_NM_LEVEL4lb = zraiz4 + "SCO_NM_LEVEL";
  String zSCO_NM_LEVEL_14lb = zraiz4 + "SCO_NM_LEVEL_1";
  String zSCO_GAP4lb = zraiz4 + "SCO_GAP";
  
 
  String zSCO_ID_OBJECTIVE4 = zcomun4 + "SCO_ID_OBJECTIVE";
  String zSCO_NM_OBJECTIVE4 = zcomun4 + "SCO_NM_OBJECTIVE";   
  String zSCO_GB_NAME4 = zcomun4 + "SCO_GB_NAME";  
  String zSCO_WEIGHT4 = zcomun4 + "SCO_WEIGHT";
  String zSCO_NM_LEVEL4 = zcomun4 + "SCO_NM_LEVEL";
  String zSCO_NM_LEVEL_14 = zcomun4 + "SCO_NM_LEVEL_1";  
  String zSCO_GAP4 = zcomun4 + "SCO_GAP";   
  String zSCO_GAP_EVAL = zcomun4 + "SCO_GAP_EVAL"; 
  String zSCO_COMMENT4 = zcomun4 + "SCO_COMMENT"; 
  String zSCO_EXPLANATION4 = zcomun4 + "SCO_EXPLANATION"; 
  String zSCO_NM_CRITERIA_TYPE4 = zcomun4 + "SCO_NM_CRITERIA_TYPE";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request); 
      m.setItem(zsubsesion,znodo,"","SSM_ID_HR",zSSM_ID_HR);
      m.setItem(zsubsesion,znodo,"","SSM_OR_HR_ROLE",zSSM_OR_HR_ROLE);
      m.setItem(zsubsesion,znodo,"","SSM_ID_EVAL_PLAN",zSSM_ID_EVAL_PLAN);
      m.setItem(zsubsesion,znodo,"","SSM_DT_START_PROC_S",zSSM_DT_START_PROC);
    } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/> </m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:endjob/>
<%
  int  zcounti  = 0;  
  int  zcount  = 0;
  int  zcount1  = 0;
  int  zcount1i  = 0;
  int  zcount2  = 0;
  int  zcount3  = 0;
  int  zcount4  = 0;
  try {
    M4Operations m = new M4Operations(request);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
    zcount4 = m.getCount(znodo4,zsubsesion,znodo4);
    } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
  String  zcountv1 = String.valueOf(zcount1);
  String  zcountv2 = String.valueOf(zcount2);
  String  zcountv3 = String.valueOf(zcount3);
  String  zcountv4 = String.valueOf(zcount4);
%>

<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_eval_ex.jsp" method="post" name="open_v" id="open_v">
<input type="hidden" id="zidType" name="zidType" value="" />
<input type="hidden" id="zidhr" name="zidhr" value="" />
<input type="hidden" id="zorrole" name="zorrole" value="" />
<input type="hidden" id="zdtstart" name="zdtstart"  value="" />
</form>
<form action=" " method="post" name="oculto" id="oculto">
<input type="hidden" id="SCO_ID_DOC_APP" name="SCO_ID_DOC_APP" value="" />
</form>
<table width="100%" cellspacing="0" >
<tr>
<td class="titulofuncional" colspan="2"><%=zTiTleVar%>&nbsp;:&nbsp;<%=zSSM_NM_EVALUTE%></td>
</tr>
<%if (zVis.equals("1")){%>
<tr>
  
  <td><img alt="<%=TranMss.getProperty("ev_mss.DescrHistEvmss2")%>" title="<%=TranMss.getProperty("ev_mss.DescrHistEvmss2")%>"src="/iconos/noname_procesos_evaluacion_ess_114_100.gif" width="114" height="100" /></td>
  <td>
    <div class="descripcionfuncional"><%=TranMss.getProperty("ev_mss.DescrHistEvmss2")%></div>
  

  <ul class="listaenlace">
  <li><a class="enlacefuncional" tabindex="1" title="<%=TranMss.getProperty("ev_mss.LinkJob")%>" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?estado=3"><%=TranMss.getProperty("ev_mss.LinkJob")%></a></li>

  <li><a class="enlacefuncional" tabindex="2" title="<%=TranMss.getProperty("ev_mss.HistEvmss")%>" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p23.jsp?estado=3"><%=TranMss.getProperty("ev_mss.HistEvmss")%></a></li>
  </ul>
  </td>
  </tr>
<%}else{%>
  <div class="descripcionfuncional"><%=TranMss.getProperty("ev_mss.DescrHistEvmss2")%></div>
<%}%>
</table>
<% if (zcounti > 0) { %>
<table width="100%" cellspacing="0"><tr><td class="descripcionfuncional" ><m4:label m4name="<%=znamenodo%>" htmlsafe="true"/></td></tr></table>
<table width="100%" cellspacing="0">
<tr>
<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCO_NM_EVAL_PLANlb%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCO_NM_EVAL_PROClb%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_NM_LEVELlb%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_NM_LEVEL_1lb%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zRATEOBJ%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSTD_N_JOB_CODElb%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSTD_N_WORK_UNITlb%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo" >&nbsp;</td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
<tr>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_NM_EVAL_PLAN%>" htmlsafe="true"/></td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_NM_EVAL_PROC%>" htmlsafe="true"/>&nbsp;(&nbsp;<m4:item m4name="<%=zSCO_DT_START_PROC%>" htmlsafe="true"/> &nbsp;-&nbsp;<m4:item m4name="<%=zSCO_DT_END%>" htmlsafe="true"/>&nbsp;)&nbsp;
  <m4:item m4name="<%=zSCO_ID_DOC_APPL%>" htmlsafe = "true" m4varname="zIdDoc"/>
  <%if (!zIdDoc.equals("")) {
    zIdDoc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIdDoc);%>
     <a href="javascript:m4valor('oculto','SCO_ID_DOC_APP','<%=zIdDoc%>','set');ssco_manage_document('view','oculto','SCO_ID_DOC_APP');"> <img alt="<%=Tran.getProperty("Label.VerDoc")%>" src="/iconos/book_16.gif" width="14" height="14" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
  <%}%>
  </td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_NM_LEVEL%>" htmlsafe="true"/></td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_NM_LEVEL_1%>" htmlsafe="true"/></td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zRATEOBJ%>" htmlsafe="true"/></td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSTD_N_JOB_CODE%>" htmlsafe="true"/></td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSTD_N_WORK_UNIT%>" htmlsafe="true"/></td>
  <m4:item m4name="<%=zSCO_ID_HR%>" htmlsafe = "true" m4varname="sIdHrEnc"/>
  <%sIdHrEnc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdHrEnc);%>
  <m4:item m4name="<%=zSCO_OR_HR_ROLE%>" htmlsafe = "true" m4varname="sOrRoleEnc"/>
  <%sOrRoleEnc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sOrRoleEnc);%>
  <m4:item m4name="<%=zSCO_DT_START_EVAL%>" htmlsafe = "true" m4varname="sdtStart"/>
  <%sdtStart = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sdtStart);%>
  <td class="fuentevalor"><a title="<%=TranMss.getProperty("ev_mss.LblEvalExcel")%>" href="javascript:abrirexcel ('<%=sIdHrEnc%>', '<%=sOrRoleEnc%>', '<%=sdtStart%>');">
    <img alt="<%=TranMss.getProperty("ev_mss.LblEvalExcel")%>" src="/iconos/icono_hacia_excel_32_16.gif"  width="32" height="16" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
    </a>
  </td>
</tr>
</m4:loop>
</table><br/>
<% if (zcount1 > 0){%>
<table width="100%" cellspacing="0">
<tr>
<td class="tablaestadosceldatitulo" colspan="2"><m4:label m4name="<%=zSCO_NM_EXTD_KNlb%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCO_NM_CRITERIA_TYPE1%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_WEIGHTlb%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_NM_LEVELlb1%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_NM_LEVEL_1lb1%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_GAP%>" htmlsafe="true"/>&nbsp;:&nbsp;<m4:item m4name="<%=zSCO_GAP%>" htmlsafe="true"/>&nbsp;%</td>
<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_EXPLANATION%>" htmlsafe="true"/></td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv1).intValue()-1).toString()%>">
<% if (zcount2 > 1) { %>
<m4:item m4varname="sFiltroName" m4name="<%=zSCO_GAP_CAP%>"/>
<%  if ((sFiltroName==null)||(sFiltroName.equals(""))){%>
<tr>
  <td class="fuentevalor" >&nbsp;</td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_GB_NAME%>" htmlsafe="true"/></td>
<%} else {%>
<tr><td class="fuentevalor"  colspan="8">
<img style='cursor:pointer' DtStart="<m4:item m4name="<%=zSCO_DT_START_REQ%>" htmlsafe = "true"/>" IdExtdKn="<m4:item m4name="<%=zSCO_ID_CAPABILITY%>" htmlsafe = "true"/>" IdLevel="<m4:item m4name="<%=zSCO_ID_CAP_REQ_LVL%>" htmlsafe = "true"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
<m4:item m4name="<%=zSCO_NM_EXTD_KN%>" htmlsafe="true"/></td></tr>
<tr>
  <td class="fuentevalor" >&nbsp;</td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_GB_NAME%>" htmlsafe="true"/></td>
 
  <%}%>
 <%} else {%>
<tr> 
  <td class="fuentevalor"  colspan="2">
  <img style='cursor:pointer' DtStart="<m4:item m4name="<%=zSCO_DT_START_REQ%>" htmlsafe = "true"/>" IdExtdKn="<m4:item m4name="<%=zSCO_ID_CAPABILITY%>" htmlsafe = "true"/>" IdLevel="<m4:item m4name="<%=zSCO_ID_CAP_REQ_LVL%>" htmlsafe = "true"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
  <m4:item m4name="<%=zSCO_NM_EXTD_KN%>" htmlsafe="true"/></td> 
 <%}%>  
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_NM_CRITERIA_TYPE1%>" htmlsafe="true"/></td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_WEIGHT%>" htmlsafe="true"/></td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_NM_LEVEL_11%>" htmlsafe="true"/></td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_NM_LEVEL1%>" htmlsafe="true"/></td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_GAP_CAP%>" htmlsafe="true"/></td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_EXPLANATION%>" htmlsafe="true"/></td>
  
</tr>
</m4:loop>
</table>
<br/>
 <%}%>
 <% if (zcount3 > 0) { 
 String sIdObjetivoAnt="";
 String sPintar="0";
 String zposicions3 = "0";  
 %>
<table width="100%" cellspacing="0"><tr><td class="descripcionfuncional" ><m4:label m4name="<%=znamenodo3%>" htmlsafe="true"/></td></tr></table>
<table width="100%" cellspacing="0">
<tr>
<td class="tablaestadosceldatitulo"colspan="2">&nbsp;<m4:label m4name="<%=zSCO_NM_OBJECTIVElb%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCO_NM_CRITERIA_TYPE3%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCO_WEIGHT3lb%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCO_NM_MAGNITUDElb%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCO_ACCOMP_DEGREElb%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCO_SCHED_VALUElb%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCO_EXPLANATION3%>" htmlsafe="true"/></td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
<%
  zposicions3 = m4lix;
  try {
    M4Operations m = new M4Operations(request); 
    m.moveData(znodo3,zmeta4object,znodo3,zposicions3);
  } catch(Exception e) {} 

%>
<form name="b<%=zposicions3%>" id="b<%=zposicions3%>" action=" "onSubmit="return false">
<input id="SCO_COMMENT3<%=zposicions3%>" name="SCO_COMMENT3<%=zposicions3%>" type="hidden" value="<m4:item m4name="<%=zSCO_COMMENT3%>"  htmlsafe = "true"/>" />
<% if (zcount2 > 1) { %>
  <m4:item m4varname="sIdObjetivo" m4name="<%=zSCO_ID_OBJECTIVE%>"/>
<%if ((sIdObjetivoAnt==null)||(sIdObjetivoAnt.equals(""))){sPintar="1";sIdObjetivoAnt=sIdObjetivo;}else if (sIdObjetivoAnt.equals(sIdObjetivo)){sPintar="0";}else{sPintar="1";sIdObjetivoAnt=sIdObjetivo;}%>
<%if (sPintar.equals("1")){sPintar="0";%>
<tr><td class="fuentevalor" colspan="8" >
<a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('SCO_COMMENT3<%=zposicions3%>','b<%=zposicions3%>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>
<img style='cursor:pointer' IdObjective="<m4:item m4name="<%=zSCO_ID_OBJECTIVE%>" htmlsafe = "true"/>" IdMagnitud="<m4:item m4name="<%=zSCO_ID_MAGNITUD%>" htmlsafe = "true"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
<m4:item m4name="<%=zSCO_NM_OBJECTIVE%>" htmlsafe="true"/></td></tr>
<%}%>
<tr><td class="fuentevalor">&nbsp;</td><td class="fuentevalor"  >&nbsp;<m4:item m4name="<%=zSCO_GB_NAME3%>" htmlsafe="true"/></td>
<%}else{ %>
<tr><td class="fuentevalor" colspan="2">
<a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('SCO_COMMENT3<%=zposicions3%>','b<%=zposicions3%>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>
<img style='cursor:pointer' IdObjective="<m4:item m4name="<%=zSCO_ID_OBJECTIVE%>" htmlsafe = "true"/>" IdMagnitud="<m4:item m4name="<%=zSCO_ID_MAGNITUD%>" htmlsafe = "true"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
<m4:item m4name="<%=zSCO_NM_OBJECTIVE%>" htmlsafe="true"/></td>
<%}%>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_NM_CRITERIA_TYPE3%>" htmlsafe="true"/></td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_WEIGHT3%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_NM_MAGNITUDE%>" htmlsafe="true"/></td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_ACCOMP_DEGREE%>" htmlsafe="true"/></td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_SCHED_VALUE%>" htmlsafe="true"/></td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_EXPLANATION3%>" htmlsafe="true"/></td>
</tr>
</form>
</m4:loop>
</table>
<br/>
<%}%>

 <% if (zcount4 > 0) {
  String sIdObjetivoAnt1="";
 String sPintar1="0";
 String zposicions4 = "0";  
 %>
 <br/>
 <table width="100%" cellspacing="0">
<tr><td class="descripcionfuncional" ><m4:label m4name="<%=znamenodo4%>" htmlsafe="true"/></td>
</tr>
</table>
<table width="100%" cellspacing="0">
<tr>
<td class="tablaestadosceldatitulo"colspan="2">&nbsp;<m4:label m4name="<%=zSCO_NM_OBJECTIVE4lb%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCO_NM_CRITERIA_TYPE4%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCO_WEIGHT4lb%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCO_NM_LEVEL4lb%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCO_NM_LEVEL_14lb%>" htmlsafe="true"/></td>
<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCO_GAP4lb%>" htmlsafe="true"/>&nbsp;:&nbsp;<m4:item m4name="<%=zSCO_GAP4%>" htmlsafe="true"/></td>
 <td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCO_EXPLANATION4%>" htmlsafe="true"/></td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv4).intValue()-1).toString()%>">
<%
  zposicions4 = m4lix;
  try {
    M4Operations m = new M4Operations(request); 
    m.moveData(znodo4,zmeta4object,znodo4,zposicions4);
  } catch(Exception e) {} 

%>
<form name="c<%=zposicions4%>" id="c<%=zposicions4%>" action=" "onSubmit="return false">
<input id="SCO_COMMENT4<%=zposicions4%>" name="SCO_COMMENT4<%=zposicions4%>" type="hidden" value="<m4:item m4name="<%=zSCO_COMMENT4%>"  htmlsafe = "true"/>" />
<% if (zcount2 > 1) { %>
  <m4:item m4varname="sIdObjetivo4" m4name="<%=zSCO_ID_OBJECTIVE4%>"/>
<%if ((sIdObjetivoAnt1==null)||(sIdObjetivoAnt1.equals(""))){sPintar1="1";sIdObjetivoAnt1=sIdObjetivo4;}else if (sIdObjetivoAnt1.equals(sIdObjetivo4)){sPintar1="0";}else{sPintar1="1";sIdObjetivoAnt1=sIdObjetivo4;}%>
<%if (sPintar1.equals("1")){sPintar1="0";%>
<tr><td class="fuentevalor" colspan="8">
<a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('SCO_COMMENT4<%=zposicions4%>','c<%=zposicions4%>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>
<img style='cursor:pointer' IdObjective="<m4:item m4name="<%=zSCO_ID_OBJECTIVE4%>" htmlsafe = "true"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
<m4:item m4name="<%=zSCO_NM_OBJECTIVE4%>" htmlsafe="true"/></td></tr>
<%}%>
<tr>
<td class="fuentevalor" >&nbsp;</td>
<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_GB_NAME4%>" htmlsafe="true"/></td>
<%}else{ %>
<tr><td class="fuentevalor" colspan="2">
<a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('SCO_COMMENT4<%=zposicions4%>','c<%=zposicions4%>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>
<img style='cursor:pointer' IdObjective="<m4:item m4name="<%=zSCO_ID_OBJECTIVE4%>" htmlsafe = "true"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
<m4:item m4name="<%=zSCO_NM_OBJECTIVE4%>" htmlsafe="true"/></td>
<%}%>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_NM_CRITERIA_TYPE4%>" htmlsafe="true"/></td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_WEIGHT4%>" htmlsafe="true"/></td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_NM_LEVEL4%>" htmlsafe="true"/></td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_NM_LEVEL_14%>" htmlsafe="true"/></td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_GAP_EVAL%>" htmlsafe="true"/></td>
    <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_EXPLANATION4%>" htmlsafe="true"/></td>
</tr>
</form>
</m4:loop>
</table>
 <%}%>
<% if (zcount2 > 0) { %>
<br/>
<table width="100%" cellspacing="0">

<m4:dataloop outputdef="<%=znodo2%>">
<m4:item m4varname="zemplSays" item="SCO_EMPLOYEE_AGREE" htmlsafe="true" outputdef="<%=znodo2%>"/>
<tr>
<td class="tablaestadosceldatitulo">&nbsp;<m4:label  item="SCO_ID_EVALUATOR" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
<td class="tablaestadosceldatitulo" >&nbsp;<m4:item  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
</tr>
<tr>

<td class="fuentevalor">&nbsp;<m4:label  item="SCO_EMPLOYEE_AGREE" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
<td class="fuentevalor" >&nbsp;<%if (zemplSays.equals("1")){%><%=TranMss.getProperty("ev_mss.LinkAfirm")%><%} else {%><%=TranMss.getProperty("ev_mss.LinkNoAfirm")%> <%}%></td>
</tr>
<tr>
<td class="fuentevalor">&nbsp;<m4:label  item="SCO_EMPLOYEE_COMM" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
<td class="fuentevalor">&nbsp;<m4:item  item="SCO_EMPLOYEE_COMM" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
</tr>
<tr>
<td class="fuentevalor">&nbsp;<m4:label  item="SCO_EVALUATOR_COMM" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
<td class="fuentevalor">&nbsp;<m4:item  item="SCO_EVALUATOR_COMM" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
</tr>
<tr>
<td class="fuentevalor">&nbsp;<m4:label  item="SCO_STRENGTHS" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
<td class="fuentevalor">&nbsp;<m4:item  item="SCO_STRENGTHS" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
</tr>
<tr>
<td class="fuentevalor">&nbsp;<m4:label  item="SCO_AREAS_IMP" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
<td class="fuentevalor">&nbsp;<m4:item  item="SCO_AREAS_IMP" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
</tr>
</m4:dataloop>
</table><br/>
  <%}%>
 <%} else {%>
<div class="fuentenodatos"><%=zNodata%></div>
 <%}%>
<%if (zVis.equals("1")){%>
<%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-mssgenerico_disclaimer.jsp" %>
<%}%>
</div>
</body>
<m4:endpage/>
</html>