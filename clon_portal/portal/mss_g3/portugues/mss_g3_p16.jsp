<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html><head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
if ((estado==null)||(estado.equals(""))){estado="31";}

String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

String zfiltrojob = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltrojob");
if ((zfiltrojob==null)|| (""==zfiltrojob)){zfiltrojob = "";} 



%>

<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %> 
<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
<%String ztitle = TranMss.getProperty("ev_mss.Criterio");%>
<title><%=TranMss.getProperty("ev_mss.Criterio")%></title>
</head>
<body>
<%@ include file="../../mss_generico/portugues/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%
String Description = TranMss.getProperty("ev_mss.DescrCritEv");
String LblJob =   TranMss.getProperty("ev_mss.LblJob");
String LinkJob =  TranMss.getProperty("ev_mss.LinkJob");
String zEvaluatoAuto = TranMss.getProperty("ev_mss.LabelAuto");
String zEvaluatoPpal = zEvaluatoPpal = TranMss.getProperty("ev_mss.Labelppal");
String zEvaluatoNoPpal = TranMss.getProperty("ev_mss.LabelNoppal");
String NoDataFound2 = Tran.getProperty("Label.NoDataFound2");
String znombrepuesto=Tran.getProperty("Label.All");
String VerDet =Tran.getProperty("Label.VerDet");
%>


<script type="text/javascript">
function nav_evaluate (id_hr,ord,inicioeval,emp,pro) {
m4valor("oculto3","IDRH",id_hr,"set");
m4valor("oculto3","RHRole",ord,"set");
m4valor("oculto3","DTStartEval",inicioeval,"set");
m4valor("oculto3","NombreEmpleado",emp,"set");
m4valor("oculto3","NombreProceso",pro,"set");
m4submit("oculto3");  
}
function filtrar(){
m4submit("oculto");
}
</script>
</head>
<body>
<%
String zsubsesion = "SSCO_H_EVALUTE_FILTER";
String zmeta4object = "SSCO_H_EVALUTE_FILTER";
String znodo = "SSCO_H_EVALUTE_FILTER";



String zdireccion = "mss_g3/smco_evaluator_filter.jsp";
String zventanas = "40";
int zvuelta = 5;
String zestado = "31";

int zregistroinicial = Integer.valueOf(zinicios).intValue();
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;
String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
String znodojob = "SSCO_JOB";
String zoutputdefjob = zsubsesion + "!" + znodojob + "[*]";
String zmovejob = znodojob + ":" + znodojob + "[FIRST]";
String zmetodocarga = "CARGA:" + zsubsesion + "!SSCO_H_EVALUTE_FILTER.SSCO_LOAD_CRI";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request); 
      m.setItem(zsubsesion,"SSCO_H_EVALUTE_FILTER","","JOB_FILTER",zfiltrojob);
        
    } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodojob%>" ><m4:param name="m4name0" value="<%=zoutputdefjob%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovejob%>"/></m4:move>
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
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=ztitle%></td></tr>
<tr>
  <td><img alt="<%=ztitle%>" title="<%=ztitle%>" src="/iconos/noname_procesos_evaluacion_ess_114_100.gif" width="114" height="100"/></td>
  <td><div class="descripcionfuncional"><%=Description%><br/><br/></div>
  <ul class="listaenlace"><li><a class="enlacefuncional" tabindex="1" title="<%=LinkJob%>" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?.jsp?estado=3"><%=LinkJob%></a></li></ul>
  </td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16.jsp" method="post" name="oculto" id="oculto">
<input type="hidden" id="zinicios" name="zinicios"  value="" />
<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo" colspan="6"><%=Tran.getProperty("Label.Filter")%></td></tr>
<tr>
<td class="fuentecampofiltro" ><m4:label  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodojob%>"/>
  <select title="<%=Tran.getProperty("Label.Job")%>"id="zfiltrojob" name="zfiltrojob" class="fuenteformulario200" onchange="javascript:filtrar();" >
  <option value=""><%=znombrepuesto%></option>
  <m4:dataloop outputdef="<%=znodojob%>">
  <option id ="<m4:item  item="STD_ID_JOB_CODE" htmlsafe="true" outputdef="<%=znodojob%>"/>"value="<m4:item  item="STD_ID_JOB_CODE" htmlsafe="true" outputdef="<%=znodojob%>"/>"><m4:item  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodojob%>"/></option>
  </m4:dataloop>
  </select>
  <script type="text/javascript" language="Javascript1.5"><!--
    if ('<%=zfiltrojob%>'!= ""){
      m4searchoptioness('oculto','zfiltrojob','<%=zfiltrojob%>');
    }
  --></script>
</td>
</tr> 
</table>
</form>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16_mod.jsp" method="post" name="oculto3" id="oculto3">
<input type="hidden" id="IDRH" name="IDRH"  value="" />
<input type="hidden" id="RHRole" name="RHRole"  value="" />
<input type="hidden" id="DTStartEval" name="DTStartEval"  value="" />
  <input type="hidden" id="NombreEmpleado" name="NombreEmpleado" value=""/>
  <input type="hidden" id="NombreProceso" name="NombreProceso" value=""/>
</form>




<% 
if (zcount > 0) {
String zSCO_ID_EVAL_PLAN_ANT="";
String zSCO_DT_START_PROC_ANT=""; 
%>  
<table class = "tablaestadosceldatitulo" width="100%" cellspacing="0" border="0">
<m4:dataloop outputdef="<%=znodo%>">
<m4:item   m4varname="zIDPlan" item="SCO_ID_EVAL_PLAN"  htmlsafe="true"  outputdef="<%=znodo%>" />
<m4:item   m4varname="zDtStarProc" item="SCO_DT_START_PROC"  htmlsafe="true"  outputdef="<%=znodo%>" />
<m4:item   m4varname="zIDEvalute" item="SCO_ID_HR"  htmlsafe="true"  outputdef="<%=znodo%>" />
<m4:item   m4varname="zIDEvaluator" item="SCO_ID_EVALUATOR"  htmlsafe="true"  outputdef="<%=znodo%>" />
<m4:item   m4varname="zPpal" item="SCO_EVALUATION_DEF"  htmlsafe="true"  outputdef="<%=znodo%>" />

<%if (((zIDPlan.equals(zSCO_ID_EVAL_PLAN_ANT)==false) || (zDtStarProc.equals(zSCO_DT_START_PROC_ANT)==false) ) ){
zSCO_ID_EVAL_PLAN_ANT=zIDPlan;zSCO_DT_START_PROC_ANT=zDtStarProc;
%>  
<tr>
  <td class="tablaestadosceldatitulo"><m4:label  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;<m4:item  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;&nbsp;
  
  </td>
  <td class="tablaestadosceldatitulo"><m4:label  item="SCO_DT_ST_EV_PER" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;<m4:item  item="SCO_DT_ST_EV_PER" htmlsafe="true" outputdef="<%=znodo%>"/> - <m4:item  item="SCO_DT_END_EV_PER" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class="tablaestadosceldatitulo"><m4:label  item="SCO_DT_END_CRI" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;<m4:item  item="SCO_DT_END_CRI" htmlsafe="true" outputdef="<%=znodo%>"/></td>

</tr>
<tr>
  <td class="tablasubtitulo"><m4:label  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="tablasubtitulo"  ><m4:label  item="SCO_EVALUATION_DEF" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="tablasubtitulo"  colspan="2" ><m4:label  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr> 
<%}%> 
  <tr>
  <m4:item item="SCO_ID_HR" outputdef="<%=znodo%>" htmlsafe="true" m4varname="sIdHrEnc"/>
  <%sIdHrEnc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdHrEnc);%>
  <m4:item item="SCO_OR_HR_ROLE" htmlsafe="true" outputdef="<%=znodo%>" m4varname="sOrHrEnc"/>
  <%sOrHrEnc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sOrHrEnc);%>
  <m4:item item="SCO_DT_START_EVAL" htmlsafe="true" outputdef="<%=znodo%>" m4varname="sDtStart"/>
  <%sDtStart = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sDtStart);%>
  <td class="fuentevalor" ><a title="<%=VerDet%>" href="javascript:nav_evaluate('<%=sIdHrEnc%>','<%=sOrHrEnc%>','<%=sDtStart%>','<m4:item item="SCO_GB_NAME" jsafe="true" outputdef="<%=znodo%>"/>','<m4:item item="SCO_NM_EVAL_PROC" jsafe="true" outputdef="<%=znodo%>"/>');"><m4:item  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo%>"/></a></td>
  <td class="fuentevalor"><% if (zIDEvalute.equals(zIDEvaluator)){%><%=zEvaluatoAuto%><%}else{%><% if (zPpal.equals("1")){%><%=zEvaluatoPpal%><%}else{%><%=zEvaluatoNoPpal%><%}%><%}%></td>
  <td class="fuentevalor" colspan="2"><m4:item  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  </tr>
</m4:dataloop>
</table>
<%@ include file="/mss_generico/smco_pag.jsp"%> 
<%}else{%>
<div class="fuentenodatos"><%=NoDataFound2%></div>
<br/><br/>
<%}%>   
<%@ include file="../../mss_generico/portugues/mssgenerico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>
