<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>

<%    
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
String zcon = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"contador");
String mss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss");
String IDRH = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH");
String sIdHRDes = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", IDRH);
String RHRole = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RHRole");
String sOrHrDesc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", RHRole);
String DTStartEval = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval");
String sDtStartDesc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", DTStartEval);
String NombreEmpleado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreEmpleado");
String NombreProceso = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreProceso");
String zIDASSTEC = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tecnica"); 
String id_re = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_re");
NombreEmpleado = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(NombreEmpleado);
NombreProceso = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(NombreProceso);
String zlink = "/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16_mod.jsp?estado=31&mss=" + mss + "&IDRH=" +  IDRH + "&RHRole=" +  RHRole + "&DTStartEval=" +  DTStartEval + "&NombreEmpleado=" + NombreEmpleado + "&NombreProceso=" + NombreProceso;
String pathImgViewComment = "/iconos/lu_hot_info_24.gif";
String zpathVerComentario = "/mss_g3/espanol/smco_viewcomment.jsp?comment=";

if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((mss==null)||(mss.equals(""))){ mss = "0";}
if ((id_re==null)||(id_re.equals(""))){ id_re = "0";}
String zmss="'"+mss+"'";
String ztitle ="";
String Datos ="";
String DescrCritEv ="";
String NewRecordObj = "";
String NewRecordKno = "";
String Delete = "";
String ObjEmp = "";
String ConoEmp = "";
String Selec = "";
String Ver = "";
String EvSeg = "";
String Ev = "";
String Mod = "";
String Cerrar = "";
String profData = "";
String ViewComment = "";
%>   
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<link href="/css/style_eval.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/func_eval.js"></script>
<script type="text/javascript" src="/libreria/mootools.js"></script>
<script type="text/javascript" src="/libreria/functions_eval.js"></script>
<script type="text/javascript" src="/libreria/meta4ajax.js"></script>

<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %>
<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
  <% ztitle = TranMss.getProperty("ev_mss.Criterio"); %>
    <% Datos = TranMss.getProperty("ev_mss.LinkDatos"); %>  
  <% DescrCritEv = TranMss.getProperty("ev_mss.DescrCritEvdet"); %> 
  <% NewRecordObj = Tran.getProperty("Button.NewRecordObj"); %> 
  <% NewRecordKno = Tran.getProperty("Button.NewRecordKno"); %> 
  <% Delete = Tran.getProperty("Button.Delete"); %>   
  <% ObjEmp = TranMss.getProperty("ev_mss.ObjEmp"); %>  
  <% ConoEmp = TranMss.getProperty("ev_mss.ConoEmp"); %>  
  <% Selec = Tran.getProperty("Link.Selec"); %> 
  <% Ver = Tran.getProperty("Label.Ver"); %>    
  <% EvSeg = TranMss.getProperty("ev_mss.LinkEvSeg"); %>    
  <% Ev = TranMss.getProperty("ev_mss.LinkEv"); %>    
  <% Mod = Tran.getProperty("Button.Modify"); %>  
  <% Cerrar = TranMss.getProperty("ev_mss.LblCerrarFijaCrit"); %>   
  <% profData = Tran.getProperty("Labelmss.ProfsData"); %>
    <% ViewComment = Tran.getProperty("Button.ViewComment");%>
    
<title><%=ztitle%></title>  

<script type="text/javascript">


function borrarObj(obective){
  m4valor("FormularioObj","SCO_ID_OBJECTIVE",obective,"set");
  m4submit("FormularioObj");
}

function borrarComp(capability){
  m4valor("FormularioComp","SCO_ID_CAPABILITY",capability,"set");
  m4submit("FormularioComp");
}

function NewRecordObj(){
  var acc= "NEW"
  m4valor("Objective","ACC",acc,"set");
  m4submit("Objective");
}

function Cerrar (){

  m4submit("Cerrar")

}

function ModifyRecordObj(zORDINAL){
  m4valor("Objective","ACC","MOD","set");
  m4valor("Objective","zORDINAL",zORDINAL,"set");
  m4submit("Objective");
}

function ModifyRecordComp(zORDINAL){
  m4valor("Competencia","ACC","MOD","set");
  m4valor("Competencia","zORDINAL",zORDINAL,"set");
  m4submit("Competencia");
}

function NewRecordKnw(){
  var acc= "NEW"
  m4valor("Competencia","ACC",acc,"set");
  m4submit("Competencia");
}

function load(empleado)
{
  var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&person=" + empleado;
  window.open(dir,'Vis','width=1015;height=600,left=0,top=50,resizable,scrollbars');
}

function navegar1 () 
{
  m4submit("Ev"); 
}
function navegar2 () 
{
  m4submit("EvSeg");  
}
function cri_capab (empleado,ordinal,fec) 
{
var spage="mss_g3/smco_eval_cirteria_capab.jsp"
var sfil = "/servlet/CheckSecurity/JSP/mss_g3/smco_eval_criteria_capab.jsp";


sfil=sfil+"?zid="+empleado+"&zor="+ordinal+"&zdt="+fec+"&idType=2"; 
window.open(sfil,'Vis','width=400;height=200,left=0,top=50,resizable,scrollbars');

}
function cri_percent (empleado,ordinal,fec,type,org,personal) 
{
var error=0;

if (org=="0" ){
error=1;
}
if (personal=="0" ){
error=1;
}
if (error=="1" ){

var texto=m4getmessage("_sl_co_mss_crit_4");

    alert(texto);
    return ;

}
var spage="mss_g3/smco_eval_cirteria_capab.jsp"
var sfil = "/servlet/CheckSecurity/JSP/mss_g3/smco_eval_criteria.jsp";


sfil=sfil+"?zid="+empleado+"&zor="+ordinal+"&zdt="+fec+"&idType="+type; 
window.open(sfil,'Vis','width=400;height=200,left=0,top=50,resizable,scrollbars');

}

</script>
</head>

<body>
  <%@ include file="../../mss_generico/espanol/mssgenerico_menusup.jsp" %>
  <%@ include file="../../sse_generico/espanol/generico_links.jsp" %>

<%
String zsubsesion = "SSM_DEFINE_CRITERIA";
String zmeta4object = "SSM_DEFINE_CRITERIA";
String znodo = "M4T_H_EVALUATE";
String znodo1 = "M4T_EVAL_CAPAB";
String znodo3 = "M4T_EVAL_OBJECT";  

String zdireccion = "sse_g3/mss_g3_p16_mod.jsp";
String zventanas = "6";
int zvuelta = 3;
String zestado = "31";
zestado=zestado+"&contador="+zcon+"&mss="+mss;
int zregistroinicial = Integer.valueOf(zinicios).intValue();
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;

String zAyuda="/iconos/info_12.gif"; 

String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zSCODTACTUAL = zcomun + "SCO_DT_ACTUAL";
String zSCONMEVALPROC = zcomun + "SCO_NM_EVAL_PROC";

String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
String zraiz3 =  znodo3 + ":" + zsubsesion  + "!"+ znodo3+"." ;

String zSCONMOBJECTIVE = zcomun3 + "SCO_NM_OBJECTIVE";
String zSCOIDOBJECTIVE = zcomun3 + "SCO_ID_OBJECTIVE";
String zSCOWEIGHT = zcomun3 + "SCO_WEIGHT";
String zSCOIDMAGNITUD = zcomun3 + "SCO_ID_MAGNITUD";
String zSCONMMAGNITUD = zcomun3 + "SCO_NM_MAGNITUDE";
String zSCOSCHEDVALUE = zcomun3 + "SCO_SCHED_VALUE";
String zSCOIDOBJREQLVL = zcomun3 + "SCO_ID_OBJ_REQ_LVL";
String SCO_NM_LEVEL = zcomun3 + "SCO_NM_LEVEL";
String zSCODTSTARTREQ = zcomun3 + "SCO_DT_START_REQ";
String zORDINAL = zcomun3 + "ORDINAL";
String zSCOIDCRITERIATYPE = zcomun3 + "SCO_ID_CRITERIA_TYPE";
String zSCONMCRITERIATYPE = zcomun3 + "SCO_NM_CRITERIA_TYPE";
String zSMCO_ID_TYPE = zcomun3 + "SMCO_ID_TYPE";
String zSMCO_ORG0 = zraiz3 + "SMCO_ORG";
String zSMCO_PERSONAL0 = zraiz3 + "SMCO_PERSONAL";
String zSMCO_ORG1 = zraiz3 + "SMCO_ORG_1";
String zSMCO_PERSONAL1 = zraiz3 + "SMCO_PERSONAL_1";
String zSCOCOMMENT = zraiz3 + "SCO_COMMENT";
String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";
String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
String zrai1 =  znodo1 + ":" + zsubsesion  + "!"+ znodo1+"." ;

String zSMCO_ORG = zrai1 + "SMCO_ORG";
String zSMCO_PERSONAL = zrai1 + "SMCO_PERSONAL";
String zSCO_ID_CAPABILITY = zcomun1 + "SCO_ID_CAPABILITY";
String zSCO_NM_EXTD_KN = zcomun1 + "SCO_NM_EXTD_KN";
String zSCO_WEIGHT = zcomun1 + "SCO_WEIGHT";
String zSCO_ID_CAP_REQ_LVL = zcomun1 + "SCO_ID_CAP_REQ_LVL";
String zSCO_NM_LEVEL = zcomun1 + "SSE_NIVEL_CONO";
String zSCO_DT_START_REQ = zcomun1 + "SCO_DT_START_REQ";
String zSCO_MEANING = zcomun1 + "SCO_MEANING";
String zORDINAL_KN = zcomun1 + "ORDINAL";
String zSCOIDCRITERIATYPE1 = zcomun1 + "SCO_ID_CRITERIA_TYPE";
String zSCONMCRITERIATYPE1 = zcomun1 + "SCO_NM_CRITERIA_TYPE";

String zmetodocarga = zsubsesion + "!" + znodo + "." + "SSM_CARGA";
String zmetodocerrar = zsubsesion + "!" + znodo + "." + "SSM_CLOSE_WF";
%>  
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/><m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="POS" value="<%=zcon%>"/>
<m4:param name="ARG_ID_RH" value="<%=sIdHRDes%>"/><m4:param name="ARG_OR_HR_ROLE" value="<%=sOrHrDesc%>"/><m4:param name="ARG_DT_START_EVAL" value="<%=sDtStartDesc%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<%
  int  zcount  = 0;
  int  zcounti  = 0;
  int  zcount1  = 0;
  int  zcounti1  = 0;
  int  zcount3  = 0;
  int  zcounti3  = 0;
  try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
    zcounti1 = m.getCountInClient(znodo1,zsubsesion,znodo1);
    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
    zcounti3 = m.getCountInClient(znodo3,zsubsesion,znodo3);
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
  String  zcountv1 = String.valueOf(zcounti1-1);
  String  zcountv3 = String.valueOf(zcounti3-1);
%>


<table border="0" width="100%">
<tr><td class="titulofuncional"  width="25%" colspan= "3" ><%=ztitle%> </td>
</tr>

<tr>
  <td><img alt="<%=ztitle%>"title="<%=ztitle%>" src="/iconos/noname_procesos_evaluacion_ess_114_100.gif"  width="114" height="100" /></td>
  <td colspan= "2">
  <div class="descripcionfuncional"><%=DescrCritEv%></div>
  <%if (id_re.equals("0")==true)
  {%>
    <ul class="listaenlace"><li><a  class="enlacefuncional" title ="<%=Selec%>" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16.jsp?estado=31&mss=1"><%=Selec%></a></li></ul>
  <%}%>
  <%if (id_re.equals("1")==true)
  {%>
    <ul class="listaenlace"><li><a  class="enlacefuncional" title ="<%=Ev%>" href="javascript:navegar1();"><%=Ev%></a></li></ul>
  <%}%>
  <%if (id_re.equals("2")==true)
  {%>
    <ul class="listaenlace"><li><a  class="enlacefuncional" title ="<%=EvSeg%>" href="javascript:navegar2();"><%=EvSeg%></a></li></ul>
  <%}%> 

  </td>
</tr>
</table>
<table border="0" width="100%">
<tr>
<td class="fuenteleyenda_big"  width="25%" colspan= "3" >
<a class="fuenteleyenda_big" title="<%=profData%>" href="javascript:load('<%=IDRH%>')"><%=NombreEmpleado%></a> - <%=NombreProceso%> </td>
<td class = "fuentevalor" width="3%">
<a title="<%=Cerrar%>"  href="javascript:Cerrar();">
<img align="right" alt="<%=Cerrar%>"  src="/iconos/icono_aceptar_todas_36_36.gif" height="30" width="29"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>
</td>
</tr>
<table class = "tablaestadosceldatitulo" width="100%" cellspacing="0" border="0" >
<%String zposicions3 = "0";String zTypeAnt="";%>
<tr class="tablaestadosceldatitulo">
  <td colspan="5"><%=ObjEmp%></td>
  <td class="tablamenuright">
  <%if (id_re.equals("0")==true){%><a title="<%=Selec%>"href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16.jsp?estado=31&mss=1" > <img alt="<%=Selec%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a><%}%>
  <%if (id_re.equals("1")==true){%><a title="<%=Ev%>"href="javascript:navegar1();" ><img alt="<%=Ev%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a><%}%>
  <%if (id_re.equals("2")==true){%><a title="<%=EvSeg%>"href="javascript:navegar2();" ><img alt="<%=EvSeg%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a><%}%>
  </td>
</tr>
<m4:loop from="0" to="<%=zcountv3%>">

<form name="b<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>" id="b<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>" action=" "onSubmit="return false">
<input id="SCO_COMMENT<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>" name="SCO_COMMENT<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>" type="hidden" value="<m4:item  item="SCO_COMMENT" htmlsafe="true" outputdef="<%=znodo3%>" />" />

<%zposicions3 = m4lix;%>
<m4:item m4varname="zTypeAct"  m4name="<%=zSMCO_ID_TYPE%>" htmlsafe="true"   />
<%if (zTypeAnt.equals(zTypeAct)){%>
<%}else{%>
<%if (zTypeAct.equals("0")){%>
<tr class="tablaestadosceldatitulo">
  <td ><%=TranMss.getProperty("ev_mss.LblObjCual")%></td>
  <td colspan="2"><m4:label m4name="<%=zSMCO_ORG0%>" htmlsafe = "true"/>&nbsp;:&nbsp; <m4:item m4name="<%=zSMCO_ORG0%>" htmlsafe = "true"/></td>
  <td  colspan="2"><m4:label m4name="<%=zSMCO_PERSONAL0%>" htmlsafe = "true"/>&nbsp;:&nbsp;<m4:item m4name="<%=zSMCO_PERSONAL0%>" htmlsafe = "true"/></td>  
  <td  class="tablamenuright"><a title="<%=Mod%>" href="javascript:cri_percent('<%=IDRH%>','<%=RHRole%>','<%=DTStartEval%>','0',<m4:item m4name="<%=zSMCO_ORG0%>" jsafe = "true"/>,<m4:item m4name="<%=zSMCO_PERSONAL0%>" jsafe = "true"/>)");"><img  alt="<%=Mod%>"  src="/iconos/icono_editar_mss_11_9.gif" height="12" width="11"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
  <td class="fuentecampo"><m4:label m4name="<%=zSCONMOBJECTIVE%>" htmlsafe = "true"/></td>
  <td class="fuentecampo"><m4:label m4name="<%=zSCONMCRITERIATYPE%>" htmlsafe = "true"/></td>
  <td class="fuentecampo"><m4:label m4name="<%=zSCOWEIGHT%>" htmlsafe = "true"/></td>
  <td class="fuentecampo"><m4:label m4name="<%=SCO_NM_LEVEL%>" htmlsafe = "true"/></td>
  <td class="fuentecampo"colspan="2"></td>
</tr>
<%}else{%>
<tr class="tablaestadosceldatitulo">
  <td ><%=TranMss.getProperty("ev_mss.LblObjCuan")%></td>
  <td colspan="2"><m4:label m4name="<%=zSMCO_ORG1%>" htmlsafe = "true"/>&nbsp;:&nbsp; <m4:item m4name="<%=zSMCO_ORG1%>" htmlsafe = "true"/></td>
  <td colspan="2"><m4:label m4name="<%=zSMCO_PERSONAL1%>" htmlsafe = "true"/>&nbsp;:&nbsp;<m4:item m4name="<%=zSMCO_PERSONAL1%>" htmlsafe = "true"/></td> 
  <td class="tablamenuright"><a title="<%=Mod%>" href="javascript: cri_percent('<%=IDRH%>','<%=RHRole%>','<%=DTStartEval%>','1','<m4:item m4name="<%=zSMCO_ORG1%>" jsafe = "true"/>','<m4:item m4name="<%=zSMCO_PERSONAL1%>" jsafe = "true"/>')");"><img  alt="<%=Mod%>"  src="/iconos/icono_editar_mss_11_9.gif" height="12" width="11"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
  <td class="fuentecampo"><m4:label m4name="<%=zSCONMOBJECTIVE%>" htmlsafe = "true"/></td>
  <td class="fuentecampo"><m4:label m4name="<%=zSCONMCRITERIATYPE%>" htmlsafe = "true"/></td>
  <td class="fuentecampo"><m4:label m4name="<%=zSCOWEIGHT%>" htmlsafe = "true"/></td>
  <td class="fuentecampo"><m4:label m4name="<%=zSCOSCHEDVALUE%>" htmlsafe = "true"/></td>
  <td class="fuentecampo" colspan="2" ></td>  
</tr>
  <%}%>
<%}%>
<%zTypeAnt=zTypeAct;%>
<tr>
    <td class="fuentevalor">  

    <a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('SCO_COMMENT<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>','b<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>   

  <%if (zTypeAct.equals("0")){%>
  <img style='cursor:pointer' IdObjective="<m4:item m4name="<%=zSCOIDOBJECTIVE%>" htmlsafe = "true"/>" IdLevel="<m4:item m4name="<%=zSCOIDOBJREQLVL%>" htmlsafe = "true"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
  <%}else{%>
  <img style='cursor:pointer' IdObjective="<m4:item m4name="<%=zSCOIDOBJECTIVE%>" htmlsafe = "true"/>" IdMagnitud="<m4:item m4name="<%=zSCOIDMAGNITUD%>" htmlsafe = "true"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
  <%}%>
  <m4:item m4name="<%=zSCONMOBJECTIVE%>" htmlsafe = "true"/></td>
  <td class = "fuentevalor"><m4:item m4name="<%=zSCONMCRITERIATYPE%>" htmlsafe = "true"/></td>
  <td class="fuentevalor"><m4:item m4name="<%=zSCOWEIGHT%>" htmlsafe = "true"/></td>
<%if (zTypeAct.equals("1")){%>
  <td class="fuentevalor"><m4:item m4name="<%=zSCOSCHEDVALUE%>" htmlsafe = "true"/> - <m4:item m4name="<%=zSCONMMAGNITUD%>" htmlsafe = "true"/></td>
<%}else{%>
  <td class="fuentevalor"><m4:item m4name="<%=SCO_NM_LEVEL%>" htmlsafe = "true"/></td>
<%}%>
  <td class = "fuentevalor"><a title="<%=Mod%>"  href="javascript:ModifyRecordObj('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>');"><img align="right" alt="<%=Mod%>"  src="/iconos/icono_editar_mss_11_9.gif" height="12" width="11"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
  <td class = "fuentevalor"><a title="<%=Delete%>" href="javascript:borrarObj('<m4:item m4name="<%=zSCOIDOBJECTIVE%>" jsafe="true" htmlsafe = "true"/>');"><img align="right" alt="<%=Delete%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="12" width="11"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</form> 
</m4:loop>

<tr><td class="fuentevalor" colspan="6">&nbsp;&nbsp;</td></tr>
<tr><td class = "fuentemapa" colspan="6" align="center"><a href="javascript:NewRecordObj();"><%=NewRecordObj%></a></td></tr>
</table>
<br>
<table class = "tablaestadosceldatitulo" width="100%" cellspacing="0" border="0" >
<tr class="tablaestadosceldatitulo">
<%if (zcount1>0)  {%>
  <td><%=ConoEmp%></td>
  <td ><m4:label m4name="<%=zSMCO_ORG%>" htmlsafe = "true"/>&nbsp;:&nbsp;<m4:item m4name="<%=zSMCO_ORG%>" htmlsafe = "true"/></td>
  <td colspan="2"><m4:label m4name="<%=zSMCO_PERSONAL%>" htmlsafe = "true"/>&nbsp;:&nbsp;<m4:item m4name="<%=zSMCO_PERSONAL%>" htmlsafe = "true"/></td> 
  <td  class="tablamenuright"><a title="<%=Mod%>"href="javascript: cri_percent('<%=IDRH%>','<%=RHRole%>','<%=DTStartEval%>','2','<m4:item m4name="<%=zSMCO_ORG%>" jsafe = "true"/>','<m4:item m4name="<%=zSMCO_PERSONAL%>" jsafe = "true"/>')");"><img  alt="<%=Mod%>"  src="/iconos/icono_editar_mss_11_9.gif" height="12" width="11"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />"></a></td>
<%}else{%>
  <td colspan="4"><%=ConoEmp%></td>
  
<%}%>
  <td class="tablamenuright">
  <%if (id_re.equals("0")==true){%><a title="<%=Selec%>"href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16.jsp?estado=31&mss=1" ><img alt="<%=Selec%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a><%}%>
  <%if (id_re.equals("1")==true){%><a title="<%=Ev%>"href="javascript:navegar1();" ><img alt="<%=Ev%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a><%}%>
  <%if (id_re.equals("2")==true){%><a title="<%=EvSeg%>"href="javascript:navegar2();" ><img alt="<%=EvSeg%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a><%}%>   
  </td>
</tr>

<tr>
  <td class="fuentecampo"><m4:label m4name="<%=zSCO_NM_EXTD_KN%>" htmlsafe = "true"/></td>
  <td class = "fuentecampo"><m4:label m4name="<%=zSCONMCRITERIATYPE1%>" htmlsafe = "true"/></a></td>
  <td class="fuentecampo"><m4:label m4name="<%=zSCO_WEIGHT%>" htmlsafe = "true"/></td>
  <td class="fuentecampo"><m4:label m4name="<%=zSCO_NM_LEVEL%>" htmlsafe = "true"/></td>
  <td colspan="2"class="fuentecampo"/>
</tr>

<m4:loop from="0" to="<%=zcountv1%>">

<tr>
  <td class = "fuentevalor">
    <img style='cursor:pointer' DtStart="<m4:item m4name="<%=zSCO_DT_START_REQ%>" htmlsafe = "true"/>" IdExtdKn="<m4:item m4name="<%=zSCO_ID_CAPABILITY%>" htmlsafe = "true"/>" IdLevel="<m4:item m4name="<%=zSCO_ID_CAP_REQ_LVL%>" htmlsafe = "true"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
  <m4:item m4name="<%=zSCO_NM_EXTD_KN%>" htmlsafe = "true"/></td>
  <td class = "fuentevalor"><m4:item m4name="<%=zSCONMCRITERIATYPE1%>" htmlsafe = "true"/></td>
  <td class="fuentevalor"><m4:item m4name="<%=zSCO_WEIGHT%>" htmlsafe = "true"/></td>
  <td class="fuentevalor"><m4:item m4name="<%=zSCO_NM_LEVEL%>" htmlsafe = "true"/></td>
  <td class = "fuentevalor"><a title="<%=Mod%>"   href="javascript:ModifyRecordComp('<m4:item m4name="<%=zORDINAL_KN%>" jsafe="true" htmlsafe = "true"/>');"><img align="right" alt="<%=Mod%>"  src="/iconos/icono_editar_mss_11_9.gif" height="12" width="11"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
  <td class = "fuentevalor"><a title="<%=Delete%>" href="javascript:borrarComp('<m4:item m4name="<%=zSCO_ID_CAPABILITY%>" jsafe="true" htmlsafe = "true"/>');"><img align="right" alt="<%=Delete%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="12" width="11"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</m4:loop>

<tr><td class="fuentevalor" colspan="6">&nbsp;&nbsp;</td></tr>
<tr>
  <td class = "fuentemapa" colspan="6" align="center"><a href="javascript:NewRecordKnw();"><%=NewRecordKno%></a></td>
</tr>
</table>

<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16_close.jsp" method="post" name="Cerrar" id="Cerrar">
  <input type="hidden" id="IDRH" name="IDRH" value="<%=IDRH%>"/>
  <input type="hidden" id="RHRole" name="RHRole" value="<%=RHRole%>"/>
  <input type="hidden" id="DTStartEval" name="DTStartEval" value="<%=DTStartEval%>"/>
</form>

<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="FormularioObj" id="FormularioObj">
  <input type="hidden" id="TAG" name="TAG" value="SSM_DEFINE_CRITERIA" />
  <input type="hidden" id="ACC" name="ACC" value="ANULAR" />
  <input type="hidden" id="NOD" name="NOD" value="SSE_EVAL_OBJECT" />
  <input type="hidden" id="SCO_ID_OBJECTIVE" name="SCO_ID_OBJECTIVE" value="" />
  <input type="hidden" id="REC" name="REC" />
  <input type="hidden" id="JSP_REDIRECCION" name="JSP_REDIRECCION" value="<%=zlink%>" />
  <input type="hidden" id="IDRH" name="IDRH" value="<%=IDRH%>"/>
  <input type="hidden" id="RHRole" name="RHRole" value="<%=RHRole%>"/>
  <input type="hidden" id="DTStartEval" name="DTStartEval" value="<%=DTStartEval%>"/>
  <input type="hidden" id="NombreEmpleado" name="NombreEmpleado" value="<%=NombreEmpleado%>"/>
  <input type="hidden" id="NombreProceso" name="NombreProceso" value="<%=NombreProceso%>"/>
</form>

<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="FormularioComp" id="FormularioComp">
  <input type="hidden" id="TAG" name="TAG" value="SSM_DEFINE_CRITERIA" />
  <input type="hidden" id="ACC" name="ACC" value="ANULAR" />
  <input type="hidden" id="NOD" name="NOD" value="SSE_EVAL_CAPAB" />
  <input type="hidden" id="SCO_ID_CAPABILITY" name="SCO_ID_CAPABILITY" value="" />
  <input type="hidden" id="REC" name="REC" />
  <input type="hidden" id="JSP_REDIRECCION" name="JSP_REDIRECCION" value="<%=zlink%>" />
  <input type="hidden" id="IDRH" name="IDRH" value="<%=IDRH%>"/>
  <input type="hidden" id="RHRole" name="RHRole" value="<%=RHRole%>"/>
  <input type="hidden" id="DTStartEval" name="DTStartEval" value="<%=DTStartEval%>"/>
  <input type="hidden" id="NombreEmpleado" name="NombreEmpleado" value="<%=NombreEmpleado%>"/>
  <input type="hidden" id="NombreProceso" name="NombreProceso" value="<%=NombreProceso%>"/>
</form>

<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16_obj.jsp?estado=31&mss=1" method="post" name="Objective" id="Objective">
  <input type="hidden" id="TAG" name="TAG" value="SSM_DEFINE_CRITERIA" />
  <input type="hidden" id="ACC" name="ACC" />
  <input type="hidden" id="NOD" name="NOD" value="M4T_EVAL_OBJECT" />
  <input type="hidden" id="REC" name="REC" />
  <input type="hidden" id="mss" name="mss" value="<%=mss%>"/>
  <input type="hidden" id="zSCOIDOBJECTIVE" name="zSCOIDOBJECTIVE" value=""/>
  <input type="hidden" id="zSCOWEIGHT" name="zSCOWEIGHT" value=""/>
  <input type="hidden" id="zSCOIDMAGNITUD" name="zSCOIDMAGNITUD" value="" />
  <input type="hidden" id="zSCOSCHEDVALUE" name="zSCOSCHEDVALUE" value=""/>
  <input type="hidden" id="zSCOIDOBJREQLVL" name="zSCOIDOBJREQLVL" value=""/>
  <input type="hidden" id="zSCODTSTARTREQ" name="zSCODTSTARTREQ" value=""/>
  <input type="hidden" id="zORDINAL" name="zORDINAL" value="" />
  <input type="hidden" id="JSP_REDIRECCION" name="JSP_REDIRECCION" value="<%=zlink%>" />
  <input type="hidden" id="IDRH" name="IDRH" value="<%=IDRH%>"/>
  <input type="hidden" id="RHRole" name="RHRole" value="<%=RHRole%>"/>
  <input type="hidden" id="DTStartEval" name="DTStartEval" value="<%=DTStartEval%>"/>
  <input type="hidden" id="NombreEmpleado" name="NombreEmpleado" value="<%=NombreEmpleado%>"/>
  <input type="hidden" id="NombreProceso" name="NombreProceso" value="<%=NombreProceso%>"/>
</form>

<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16_comp.jsp?estado=31&mss=1" method="post" name="Competencia" id="Competencia">
  <input type="hidden" id="TAG" name="TAG" value="SSM_DEFINE_CRITERIA" />
  <input type="hidden" id="ACC" name="ACC" />
  <input type="hidden" id="NOD" name="NOD" value="M4T_EVAL_CAPAB" />
  <input type="hidden" id="REC" name="REC" />
  <input type="hidden" id="mss" name="mss" value="<%=mss%>"/>
  <input type="hidden" id="zORDINAL" name="zORDINAL" value="" />
  <input type="hidden" id="JSP_REDIRECCION" name="JSP_REDIRECCION" value="<%=zlink%>" />
  <input type="hidden" id="IDRH" name="IDRH" value="<%=IDRH%>"/>
  <input type="hidden" id="RHRole" name="RHRole" value="<%=RHRole%>"/>
  <input type="hidden" id="DTStartEval" name="DTStartEval" value="<%=DTStartEval%>"/>
  <input type="hidden" id="NombreEmpleado" name="NombreEmpleado" value="<%=NombreEmpleado%>"/>
  <input type="hidden" id="NombreProceso" name="NombreProceso" value="<%=NombreProceso%>"/>
</form>

<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_seg.jsp" method="post" name="EvSeg" id="EvSeg">
  <input type="hidden" id="id" name="id" value="<%=IDRH%>"/>
  <input type="hidden" id="ord" name="ord" value="<%=RHRole%>"/>
  <input type="hidden" id="inicioeval" name="inicioeval" value="<%=DTStartEval%>"/>
</form>

<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator.jsp?estado=31" method="post" name="Ev" id="Ev">
  <input type="hidden" id="id" name="id" value="<%=IDRH%>"/>
  <input type="hidden" id="ord" name="ord" value="<%=RHRole%>"/>
  <input type="hidden" id="inicioeval" name="inicioeval" value="<%=DTStartEval%>"/>
</form>

<%@ include file="../../mss_generico/espanol/mssgenerico_disclaimer.jsp" %>

</div>
</body>
<m4:endpage/> 
</html>
