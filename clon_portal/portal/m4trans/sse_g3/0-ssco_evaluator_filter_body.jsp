<script type="text/javascript">
function nav_evaluate (id_hr,ord,inicioeval,swhere) {
  m4valor("oculto3","id",id_hr,"set");
  m4valor("oculto3","ord",ord,"set");
  m4valor("oculto3","inicioeval",inicioeval,"set");
  
  if (swhere=="1"){
    document.forms["oculto3"].action="/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator.jsp";
  }
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


String zdireccion = "sse_g3/ssco_evaluator_filter.jsp";
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
  

    

String zmetodocarga = "CARGA:" + zsubsesion + "!SSCO_H_EVALUTE_FILTER.SSCO_LOAD";
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
  <ul class="listaenlace"><li><a class="enlacefuncional" tabindex="1" title="<%=LinkJob%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp"><%=LinkJob%></a></li></ul>
  </td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_filter.jsp" method="post" name="oculto" id="oculto">
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
<form action="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator.jsp" method="post" name="oculto3" id="oculto3">
<input type="hidden" id="id" name="id"  value="" />
<input type="hidden" id="ord" name="ord"  value="" />
<input type="hidden" id="inicioeval" name="inicioeval"  value="" />
</form>

<% 
if (zcount > 0) {
String zSCO_ID_EVAL_PLAN_ANT="";
String zSCO_DT_START_PROC_ANT=""; 
String zNavegation="0";
%>  
<table class = "tablaestadosceldatitulo" width="100%" cellspacing="0" border="0">
<m4:dataloop outputdef="<%=znodo%>">
<m4:item m4varname="zIDPlan" item="SCO_ID_EVAL_PLAN" htmlsafe="true" outputdef="<%=znodo%>"/>
<m4:item m4varname="zDtStarProc" item="SCO_DT_START_PROC" htmlsafe="true" outputdef="<%=znodo%>"/>
<m4:item m4varname="zIDEvalute" item="SCO_ID_HR" htmlsafe="true" outputdef="<%=znodo%>"/>
<%if (!zIDEvalute.equals("")) {zIDEvalute = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIDEvalute);}%>
<m4:item m4varname="sOrHrRol_Encr"  item="SCO_OR_HR_ROLE" jsafe="true" outputdef="<%=znodo%>"/>
<%if (!sOrHrRol_Encr.equals("")) {sOrHrRol_Encr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sOrHrRol_Encr);}%>
<m4:item m4varname="sDtStartEval_Encr" item="SCO_DT_START_EVAL" jsafe="true" outputdef="<%=znodo%>"/>
<%if (!sDtStartEval_Encr.equals("")) {sDtStartEval_Encr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sDtStartEval_Encr);}%>
<m4:item m4varname="zIDEvaluator" item="SCO_ID_EVALUATOR"  htmlsafe="true"  outputdef="<%=znodo%>" />
<%if (!zIDEvaluator.equals("")) {zIDEvaluator = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIDEvaluator);}%>
<m4:item m4varname="zPpal" item="SCO_EVALUATION_DEF"  htmlsafe="true"  outputdef="<%=znodo%>" />
<m4:item m4varname="zNotes" item="SCO_CK_NOTES"  htmlsafe="true"  outputdef="<%=znodo%>" />
<%zNavegation="0";
if (((zIDPlan.equals(zSCO_ID_EVAL_PLAN_ANT)==false) || (zDtStarProc.equals(zSCO_DT_START_PROC_ANT)==false) ) ){
zSCO_ID_EVAL_PLAN_ANT=zIDPlan;zSCO_DT_START_PROC_ANT=zDtStarProc;
%>  
<tr>
  <td class="tablaestadosceldatitulo"><m4:label  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;<m4:item  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="tablaestadosceldatitulo" ><m4:label  item="SCO_DT_ST_EV_PER" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;<m4:item  item="SCO_DT_ST_EV_PER" htmlsafe="true" outputdef="<%=znodo%>"/> - <m4:item  item="SCO_DT_END_EV_PER" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="tablaestadosceldatitulo"><m4:label  item="SCO_DT_END_EV" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;<m4:item  item="SCO_DT_END_EV" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
<tr>
  <td class="tablasubtitulo"><m4:label  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="tablasubtitulo"  ><m4:label  item="SCO_EVALUATION_DEF" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="tablasubtitulo"  ><m4:label  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr> 
<%}%> 
<tr>
<%if (zNotes.equals("1") ){if(zPpal.equals("1")){zNavegation="1";}}%>
<td class="fuentevalor" ><a title="<%=VerDet%>" href="javascript:nav_evaluate('<%=zIDEvalute%>','<%=sOrHrRol_Encr%>','<%=sDtStartEval_Encr%>','<%=zNavegation%>');"><m4:item  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo%>"/></a></td>
<td class="fuentevalor"><% if (zIDEvalute.equals(zIDEvaluator)){%><%=zEvaluatoAuto%><%}else{%><% if (zPpal.equals("1")){%><%=zEvaluatoPpal%><%}else{%><%=zEvaluatoNoPpal%><%}%> <%}%></td>
<td class="fuentevalor" colspan="2"><m4:item  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
 </tr>
</m4:dataloop>
</table>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-ssco_pag.jsp"%> 
<%}else{%>
<div class="fuentenodatos"><%=NoDataFound2%></div>
<br/><br/>
<%}%>   



