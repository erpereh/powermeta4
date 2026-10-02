<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>

<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<link href="/css/style_eval.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/func_eval.js"></script>
<script type="text/javascript" src="/libreria/mootools.js"></script>
<script type="text/javascript" src="/libreria/functions_eval.js"></script>
<script type="text/javascript" src="/libreria/meta4ajax.js"></script>

<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>  
<%@ include file="/sse_g3/sse_ev_trans.jsp"%>

<title><%=TranEss.getProperty("ev_ess.Res")%></title> 
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>  
</head>
<body>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
String zidfechainicio = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"fecha");
String zidord = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord");
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%String Ver = "";
 Ver = Tran.getProperty("Label.Ver"); 
String pathImgViewComment = "/iconos/lu_hot_info_24.gif";
String zpathVerComentario = "/sse_g3/espanol/ssco_viewcomment.jsp?comment=";
String ViewComment = Tran.getProperty("Button.ViewComment");
 %>
<script type="text/javascript">
function visualizar(t,c,f){
  if (c==1)
  {
  m4valor("oculto","id_cono",t,"set");
  document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod2.jsp?estado=31";
  }
  
  if (c==2)
  {
    m4valor("oculto","id_obj",t,"set");
    m4valor("oculto","id_mag",f,"set");
    document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod3.jsp?estado=31";
  }
    
  if (c==3)
  {
    m4valor("oculto","id_obj",t,"set");
    document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod4.jsp?estado=31";
  }
  
  m4valor("oculto","id_re","1","set");
  m4submit("oculto");
}
</script>
<%
  String zsubsesion = "SSE_H_EVALUATOR_HIST";
  String zmeta4object = "SSE_H_EVALUATOR_HIST";
  String znodo = "M4T_EVALUATOR_HIST";
  String znodo2 = "M4T_EVAL_CAPAB"; 
  String znodo3 = "M4T_EVAL_OBJECT";
  String znodo4 = "M4T_EVAL_OBJECT_CUAL";

  String zoutputdef = zsubsesion + "!" + znodo + "[*]";
  String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
  String zmove = znodo + ":" + znodo + "[FIRST]";
  String zSCO_EMPLOYEE_AGREE = zraiz + "SCO_EMPLOYEE_AGREE"; 
    String zSCO_EMPLOYEE_COMM = zraiz + "SCO_EMPLOYEE_COMM"; 
  String zSCO_EVALUATOR_COMM = zraiz + "SCO_EVALUATOR_COMM"; 
  String zSCO_AREAS_IMP = zraiz + "SCO_AREAS_IMP";  
  String zSCO_STRENGTHS = zraiz + "SCO_STRENGTHS";  
  String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
  String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
  String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
  String zSCONMEXTDKN =zcomun2+"SCO_NM_EXTD_KN";
  String zSCOMEANING = zcomun2+ "SCO_MEANING";
  String zSCOIDCAPABILITY = zcomun2+ "SCO_ID_CAPABILITY";
  String zSCO_VALUE_RAT = zcomun2+ "SCO_VALUE_RAT";
  String zSCO_EXPLANATION = zcomun2+ "SCO_EXPLANATION";
  String zSCO_NM_CRITERIA_TYPE2 = zcomun2+ "SCO_NM_CRITERIA_TYPE";
  String zSCO_DT_START_RAT = zcomun2 + "SCO_DT_START_RAT";
  String zSCO_ID_CAP_RAT_LVL = zcomun2 + "SCO_ID_CAP_RAT_LVL";
  
  String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
  String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
  String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
    String zSCONMOBJECTIVE = zcomun3+ "SCO_NM_OBJECTIVE";
  String zSCOACCOMPDEGREE = zcomun3+"SCO_ACCOMP_DEGREE";
  String zSCONMMAGNITUDE =  zcomun3+"SCO_NM_MAGNITUDE";
  String zSCOIDMAGNITUD =  zcomun3+"SCO_ID_MAGNITUD";
  String zSCOIDOBJECTIVE =  zcomun3+"SCO_ID_OBJECTIVE";
  String zSCO_EXPLANATION3 =  zcomun3+"SCO_EXPLANATION";
  String zSCO_NM_CRITERIA_TYPE3 = zcomun3+ "SCO_NM_CRITERIA_TYPE";
  String zSCO_COMMENT3 = zcomun3+ "SCO_COMMENT";  

  String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
  String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";
  String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&VAR.m4lix]" + ".";
    String zSCONMOBJECTIVECUAL = zcomun4 + "SCO_NM_OBJECTIVE";
  String zSCOMEANINGCUAL = zcomun4 + "SCO_NM_LEVEL_3";
  String zSCOIDOBJECTIVECUAL =  zcomun4 +"SCO_ID_OBJECTIVE";
  String zSCO_EXPLANATION4 =  zcomun4+"SCO_EXPLANATION";
  String zSCO_NM_CRITERIA_TYPE4 = zcomun4+ "SCO_NM_CRITERIA_TYPE";
  String zSCO_COMMENT4 = zcomun4 + "SCO_COMMENT";   
    
  String zAyuda="/iconos/info_12.gif"; 

  
  String zmetodo = "CARGA:" + zsubsesion + "!M4T_EVALUATOR_HIST.CARGA_EVALUATOR_HIST";
    
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
    M4Operations m = new M4Operations(request); 
    m.setItem(zsubsesion,znodo,"","SSE_OR_HR_ROLE",zidord);  
    m.setItem(zsubsesion,znodo,"","SSE_DT_START_EVAL",zidfechainicio);
  } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodo%>"/>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/> </m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/> </m4:move>
<%
  int  zcount2  = 0;
  int  zcounti2  = 0; 
  int  zcount3  = 0;
  int  zcounti3  = 0;
  int  zcount4  = 0;
  int  zcounti4  = 0;
  try {
    M4Operations m = new M4Operations(request);
    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
    zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);
    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
    zcounti3 = m.getCountInClient(znodo3,zsubsesion,znodo3);  
    zcount4 = m.getCount(znodo4,zsubsesion,znodo4);
    zcounti4 = m.getCountInClient(znodo4,zsubsesion,znodo4);    
    
  } catch(Exception e) {}
  String  zcountv2 = String.valueOf(zcounti2);
  String  zcountv3 = String.valueOf(zcounti3);
  String  zcountv4 = String.valueOf(zcounti4);
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=TranEss.getProperty("ev_ess.Res")%></td></tr>
<tr>
  <td><img alt="<%=TranEss.getProperty("ev_ess.LinkHistEv")%>" src="/iconos/noname_historial_evaluaciones_ess_93_100.gif"  width="93" height="100"  /></td>
  <td>
  <div class="descripcionfuncional"><%=TranEss.getProperty("ev_ess.DescrResEv")%></div>
  <ul class="listaenlace">
  <li><a class="enlacefuncional"title ="<%=TranEss.getProperty("ev_ess.LinkHistEv")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=31"><%=TranEss.getProperty("ev_ess.LinkHistEv")%> </a></li>
  </ul>
  </td>
</tr>
</table>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo">
  <td colspan="2">&nbsp;<%=TranEss.getProperty("ev_ess.LblOp")%></td>
  
  
</tr>
<m4:item  m4varname="zid_op" m4name="<%=zSCO_EMPLOYEE_AGREE%>" htmlsafe = "true"/>


<tr >
  <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zSCO_EMPLOYEE_AGREE%>" htmlsafe = "true"/></td>
  <td class="fuentevalor" >&nbsp;
  <%if (zid_op.equals("1")){%> 
  <%=TranEss.getProperty("ev_ess.LblAgree")%>
  <%}else{%> 
  <%=TranEss.getProperty("ev_ess.LblNotAgree")%>
  <%}%> 
  </td>
  
</tr>
<tr class = "tablaestadosceldatitulo">
  <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zSCO_EMPLOYEE_COMM%>" htmlsafe = "true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_EMPLOYEE_COMM%>" htmlsafe = "true"/> </td>
  
</tr>
<tr class = "tablaestadosceldatitulo">
  <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zSCO_EVALUATOR_COMM%>" htmlsafe = "true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_EVALUATOR_COMM%>" htmlsafe = "true"/> </td>
  
</tr>
<tr class = "tablaestadosceldatitulo">
  <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zSCO_STRENGTHS%>" htmlsafe = "true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_STRENGTHS%>" htmlsafe = "true"/> </td>
  
</tr>
<tr class = "tablaestadosceldatitulo">
  <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zSCO_AREAS_IMP%>" htmlsafe = "true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_AREAS_IMP%>" htmlsafe = "true"/> </td>
  
</tr>
</table>
<form action="  " method="post" name="oculto" id="oculto">
<input type="hidden" id="id_cono" name="id_cono"  value="" />
<input type="hidden" id="num_obj" name="num_obj"  value="" />
<input type="hidden" id="id_obj" name="id_obj"  value="" />
<input type="hidden" id="id_mag" name="id_mag"  value="" />
<input type="hidden" id="id_re" name="id_re"  value="" />
</form>
<%if (zcount3 > 0) {
  String zposicions3 = "0";
  int zcontrol3 = 0;
  int zposicion3 =0;%>   
<br />
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo">
  <td>&nbsp;<%=TranEss.getProperty("ev_ess.LblObjCuan")%></td>
  <td >&nbsp;<m4:label m4name="<%=zSCO_NM_CRITERIA_TYPE3%>" htmlsafe = "true"/></td>
  <td colspan="2">&nbsp;<%=TranEss.getProperty("ev_ess.LblRes")%> </td>
  <td >&nbsp;<m4:label m4name="<%=zSCO_EXPLANATION3%>" htmlsafe = "true"/></td>
  <td class="tablamenuright" >
  <a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=31"><img alt="<%=TranEss.getProperty("ev_ess.LinkHistEv")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"   /></a>
  </td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
<%zposicions3 = m4lix;
  zposicion3 = Integer.valueOf(zposicions3).intValue();
  zcontrol3 = zposicion3%2;
%>
<form name="b<%=zposicions3%>" id="b<%=zposicions3%>" action=" "onSubmit="return false">
<input id="zSCO_COMMENT3<%=zposicions3%>" name="zSCO_COMMENT3<%=zposicions3%>" type="hidden" value="<m4:item m4name="<%=zSCO_COMMENT3%>"  htmlsafe = "true"/>" />
<%if (zcontrol3==0){%>
<tr>
  <td class="fuentevalor">
  <a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('zSCO_COMMENT3<%=zposicions3%>','b<%=zposicions3%>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a> 
  <img style='cursor:pointer' IdObjective="<m4:item m4name="<%=zSCOIDOBJECTIVE%>" htmlsafe = "true"/>" IdMagnitud="<m4:item m4name="<%=zSCOIDMAGNITUD%>" htmlsafe = "true"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
  <m4:item m4name="<%=zSCONMOBJECTIVE%>" htmlsafe = "true"/></td>
  </td>
  <td  class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_NM_CRITERIA_TYPE3%>" htmlsafe = "true"/></td>
  <td  class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCOACCOMPDEGREE%>" htmlsafe = "true"/></td>
  <td  class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSCONMMAGNITUDE%>" htmlsafe = "true"/></td >
  <td  colspan="2"class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_EXPLANATION3%>" htmlsafe = "true"/></td >
</tr>
<%}else{%>
<tr>
  <td class="fuentevalor2">
    <a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('zSCO_COMMENT3<%=zposicions3%>','b<%=zposicions3%>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a> 
  <img style='cursor:pointer' IdObjective="<m4:item m4name="<%=zSCOIDOBJECTIVE%>" htmlsafe = "true"/>" IdMagnitud="<m4:item m4name="<%=zSCOIDMAGNITUD%>" htmlsafe = "true"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
  <m4:item m4name="<%=zSCONMOBJECTIVE%>"/></td>
  <td  class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCO_NM_CRITERIA_TYPE3%>" htmlsafe = "true"/></td>
  <td  class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCOACCOMPDEGREE%>" htmlsafe = "true"/></td>
  <td  class = "fuentevalor2">&nbsp;<m4:item m4name="<%=zSCONMMAGNITUDE%>" htmlsafe = "true"/></td >
  <td  colspan="2"class = "fuentevalor2">&nbsp;<m4:item m4name="<%=zSCO_EXPLANATION3%>" htmlsafe = "true"/></td >
</tr>
<%}%>
</form>
</m4:loop>
</table>
<%}%>

<%  
if (zcount4 > 0) {
  String zposicions4 = "0";
  int zcontrol4 = 0;
  int zposicion4 =0;
%>
<br />
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo">
  <td >&nbsp;<%=TranEss.getProperty("ev_ess.LblObjCual")%></td>
  <td >&nbsp;<m4:label m4name="<%=zSCO_NM_CRITERIA_TYPE4%>" htmlsafe = "true"/></td>
  <td >&nbsp;<%=TranEss.getProperty("ev_ess.LblRes")%></td>
  <td>&nbsp;<m4:label m4name="<%=zSCO_EXPLANATION4%>" htmlsafe = "true"/></td>
  <td class="tablamenuright" >
  <a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=31"><img alt="<%=TranEss.getProperty("ev_ess.LinkHistEv")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"   /></a>
  </td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv4).intValue()-1).toString()%>">
<%zposicions4 = m4lix;
  zposicion4 = Integer.valueOf(zposicions4).intValue();
  zcontrol4 = zposicion4%2;
%>
<form name="c<%=zposicions4%>" id="c<%=zposicions4%>" action=" "onSubmit="return false">
<input id="zSCO_COMMENT4<%=zposicions4%>" name="zSCO_COMMENT4<%=zposicions4%>" type="hidden" value="<m4:item m4name="<%=zSCO_COMMENT4%>"  htmlsafe = "true"/>" />
<%if (zcontrol4==0){%>
<tr>
  <td class="fuentevalor">
    <a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('zSCO_COMMENT4<%=zposicions4%>','c<%=zposicions4%>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a> 
  <img style='cursor:pointer' IdObjective="<m4:item m4name="<%=zSCOIDOBJECTIVECUAL%>" htmlsafe = "true"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
  <m4:item m4name="<%=zSCONMOBJECTIVECUAL%>" htmlsafe = "true"/></td >
  <td  class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_NM_CRITERIA_TYPE4%>" htmlsafe = "true"/></td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCOMEANINGCUAL%>" htmlsafe = "true"/></td>
  <td class="fuentevalor" colspan="2">&nbsp;<m4:item m4name="<%=zSCO_EXPLANATION4%>" htmlsafe = "true"/></td>
  
</tr>

 <%}else{%>
 <tr>
  <td class="fuentevalor2">
    <a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('zSCO_COMMENT4<%=zposicions4%>','c<%=zposicions4%>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a> 
  <img style='cursor:pointer' IdObjective="<m4:item m4name="<%=zSCOIDOBJECTIVECUAL%>" htmlsafe = "true"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
  <m4:item m4name="<%=zSCONMOBJECTIVECUAL%>" htmlsafe = "true"/></td >
  <td  class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCO_NM_CRITERIA_TYPE4%>" htmlsafe = "true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCOMEANINGCUAL%>" htmlsafe = "true"/></td>
  <td class="fuentevalor2"colspan="2" >&nbsp;<m4:item m4name="<%=zSCO_EXPLANATION4%>" htmlsafe = "true"/></td>
</tr>
<%}%>
</form>
</m4:loop>
</table>
<%}%>


<%  
if (zcount2 > 0) {
  String zposicions2 = "0";
  int zcontrol2 = 0;
  int zposicion2 =0;
%>
<br />
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo">
  <td >&nbsp;<m4:label m4name="<%=zSCONMEXTDKN%>" htmlsafe = "true"/></td>
  <td >&nbsp;<m4:label m4name="<%=zSCO_NM_CRITERIA_TYPE2%>" htmlsafe = "true"/></td>
  <td >&nbsp;<%=TranEss.getProperty("ev_ess.LblRes")%></td>
  <td >&nbsp;<m4:label m4name="<%=zSCO_VALUE_RAT%>" htmlsafe = "true"/></td>
    <td >&nbsp;<m4:label m4name="<%=zSCO_EXPLANATION%>" htmlsafe = "true"/></td>
  <td class="tablamenuright" >
  <a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=31"><img alt="<%=TranEss.getProperty("ev_ess.LinkHistEv")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"   /></a>
  </td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
<%zposicions2 = m4lix;
  zposicion2 = Integer.valueOf(zposicions2).intValue();
  zcontrol2 = zposicion2%2;
%>
<%if (zcontrol2==0){%>
<tr>
  <td class="fuentevalor">
    <img style='cursor:pointer' DtStart="<m4:item m4name="<%=zSCO_DT_START_RAT%>" htmlsafe = "true"/>" IdExtdKn="<m4:item m4name="<%=zSCOIDCAPABILITY%>" htmlsafe = "true"/>" IdLevel="<m4:item m4name="<%=zSCO_ID_CAP_RAT_LVL%>" htmlsafe = "true"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
  <m4:item m4name="<%=zSCONMEXTDKN%>" htmlsafe = "true"/></td >
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_NM_CRITERIA_TYPE2%>" htmlsafe = "true"/></td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCOMEANING%>" htmlsafe = "true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_VALUE_RAT%>" htmlsafe = "true"/></td>
  <td class="fuentevalor" colspan="2">&nbsp;<m4:item m4name="<%=zSCO_EXPLANATION%>" htmlsafe = "true"/></td>
</tr>

 <%}else{%>
 <tr>
  <td class="fuentevalor2">
    <img style='cursor:pointer' DtStart="<m4:item m4name="<%=zSCO_DT_START_RAT%>" htmlsafe = "true"/>" IdExtdKn="<m4:item m4name="<%=zSCOIDCAPABILITY%>" htmlsafe = "true"/>" IdLevel="<m4:item m4name="<%=zSCO_ID_CAP_RAT_LVL%>" htmlsafe = "true"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
  <m4:item m4name="<%=zSCONMEXTDKN%>" htmlsafe = "true"/></td >
  <td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSCO_NM_CRITERIA_TYPE2%>" htmlsafe = "true"/></td>
  <td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSCOMEANING%>"/></td>
  <td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSCO_VALUE_RAT%>" htmlsafe = "true"/></td>
  <td class="fuentevalor2" colspan="2">&nbsp;<m4:item m4name="<%=zSCO_EXPLANATION%>" htmlsafe = "true"/></td>
</tr>
<%}%>
</m4:loop>
</table>
<%}%>

<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>


