<%
String Description = TranMss.getProperty("ev_mss.DescrConsEv");
String LblJob =   TranMss.getProperty("ev_mss.LblJob");
String LinkJob =  TranMss.getProperty("ev_mss.LinkJob");
String zLblGraphGauss =  TranMss.getProperty("ev_mss.LblGraphGauss");
String zEvaluatoAuto = TranMss.getProperty("ev_mss.LabelAuto");
String zEvaluatoPpal = zEvaluatoPpal = TranMss.getProperty("ev_mss.Labelppal");
String zEvaluatoNoPpal = TranMss.getProperty("ev_mss.LabelNoppal");

String NoDataFound2 = Tran.getProperty("Label.NoDataFound2");
String znombrepuesto=Tran.getProperty("Label.All");
String VerDet =Tran.getProperty("Label.VerDet");
%>
<script type="text/javascript">
function nav_evaluate (id_hr,ord,inicioeval) {
  m4valor("oculto3","id",id_hr,"set");
  m4valor("oculto3","ord",ord,"set");
  m4valor("oculto3","inicioeval",inicioeval,"set");
  m4submit("oculto3");  
}
function filtrar(){
  m4submit("oculto");
}
function verGrafico(idEvaluator,dtStartEval,idPlan,dtStartProc) {
  var dir="/servlet/CheckSecurity/JSP/mss_g3/smco_ev_gauss.jsp?IDEvaluator="+ idEvaluator+"&DTStartEval="+dtStartEval+"&IDPlan="+idPlan+"&DTStartProc="+dtStartProc;
  window.open(dir,'Vis','width=700;height=400,resizable,scrollbars');
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
  <ul class="listaenlace"><li><a class="enlacefuncional" tabindex="1" title="<%=LinkJob%>" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?estado=3"><%=LinkJob%></a></li></ul>
  </td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_filter.jsp" method="post" name="oculto" id="oculto">
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
<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator.jsp" method="post" name="oculto3" id="oculto3">
<input type="hidden" id="id" name="id"  value="" />
<input type="hidden" id="ord" name="ord"  value="" />
<input type="hidden" id="inicioeval" name="inicioeval" value="" />
</form>

<form action="" method="post" name="oculto4" id="oculto4">
  <input type="hidden" id="SCO_ID_DOC_APPL" name="SCO_ID_DOC_APPL" value="" />
</form>

<% 
if (zcount > 0) {
String zSCO_ID_EVAL_PLAN_ANT="";
String zSCO_DT_START_PROC_ANT=""; 
%>  
<table class = "tablaestadosceldatitulo" width="100%" cellspacing="0" border="0">
<m4:dataloop outputdef="<%=znodo%>">
  <m4:item m4varname="zIDPlan" item="SCO_ID_EVAL_PLAN" htmlsafe="true" outputdef="<%=znodo%>"/>
  <%zIDPlan = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIDPlan);%>
  <m4:item m4varname="zDtStarProc" item="SCO_DT_START_PROC" htmlsafe="true" outputdef="<%=znodo%>"/>
  <%zDtStarProc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zDtStarProc);%>
  <m4:item m4varname="zDtStarEval" item="SCO_DT_START_EVAL" htmlsafe="true"  outputdef="<%=znodo%>"/>
  <%zDtStarEval = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zDtStarEval);%>
  <m4:item m4varname="zIDEvalute" item="SCO_ID_HR" htmlsafe="true" outputdef="<%=znodo%>"/>
  <%zIDEvalute = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIDEvalute);%>
  <m4:item m4varname="zIDEvaluator" item="SCO_ID_EVALUATOR" htmlsafe="true" outputdef="<%=znodo%>"/>
  <%zIDEvaluator = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIDEvaluator);%>
  <m4:item m4varname="zOrEvaluator" item="SCO_OR_EVALUATOR" htmlsafe="true" outputdef="<%=znodo%>"/>
  <m4:item m4varname="zPpal" item="SCO_EVALUATION_DEF" htmlsafe="true" outputdef="<%=znodo%>"/>
  <m4:item m4varname="zIDDOC" item="SCO_ID_DOC_APPL" htmlsafe="true" outputdef="<%=znodo%>"/>
  <%if (!zIDDOC.equals("")) {zIDDOC = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIDDOC);}%>
  <m4:item m4varname="zNotes" item="SCO_CK_NOTES" htmlsafe="true" outputdef="<%=znodo%>"/>
<%if (((zIDPlan.equals(zSCO_ID_EVAL_PLAN_ANT)==false) || (zDtStarProc.equals(zSCO_DT_START_PROC_ANT)==false) ) ){
    zSCO_ID_EVAL_PLAN_ANT=zIDPlan;zSCO_DT_START_PROC_ANT=zDtStarProc;
%>  
<tr>
  <td class="tablaestadosceldatitulo"><m4:label item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;<m4:item  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;&nbsp;<%if (!zIDDOC.equals("")) {%><a href="javascript:m4valor('oculto4','SCO_ID_DOC_APPL','<%=zIDDOC%>','set');ssco_manage_document('view','oculto4','SCO_ID_DOC_APPL');"> <img alt="<%=Tran.getProperty("Label.VerDoc")%>" src="/iconos/book_16.gif" width="16" height="16" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a><%}%></td>
  <td class="tablaestadosceldatitulo"><m4:label item="SCO_DT_ST_EV_PER" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;<m4:item  item="SCO_DT_ST_EV_PER" htmlsafe="true" outputdef="<%=znodo%>"/> - <m4:item  item="SCO_DT_END_EV_PER" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="tablaestadosceldatitulo"><m4:label item="SCO_DT_END_EV" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;<m4:item  item="SCO_DT_END_EV" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="tablaestadosceldatitulo">  <%if (zNotes.equals("1")){%><a title="<%=zLblGraphGauss%>" href="javascript:verGrafico('<%=zIDEvaluator%>','<%=zDtStarEval%>','<%=zIDPlan%>','<%=zDtStarProc%>');"><img alt="<%=zLblGraphGauss%>" title="<%=zLblGraphGauss%>" src="/iconos/ic_compvar_16_16_0.gif" width="16" height="16" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a><%}%></td>
</tr>
<tr>
  <td class="tablasubtitulo"><m4:label  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="tablasubtitulo"  ><m4:label  item="SCO_EVALUATION_DEF" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="tablasubtitulo"  colspan="2" ><m4:label  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr> 
<%}%> 
  <tr>
    <m4:item item="SCO_ID_HR" outputdef="<%=znodo%>" htmlsafe="true" m4varname="sIdHREnc"/>
    <%sIdHREnc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdHREnc);%>
    <m4:item item="SCO_OR_HR_ROLE" outputdef="<%=znodo%>" htmlsafe="true" m4varname="sIdOrHREnc"/>
    <%sIdOrHREnc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdOrHREnc);%>
    <m4:item item="SCO_DT_START_EVAL" outputdef="<%=znodo%>" htmlsafe="true" m4varname="sDtStartEnc"/>
    <%sDtStartEnc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sDtStartEnc);%>

    <td class="fuentevalor" ><a title="<%=VerDet%>" href="javascript:nav_evaluate('<%=sIdHREnc%>','<%=sIdOrHREnc%>','<%=sDtStartEnc%>');"><m4:item  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo%>"/></a></td>
    <td class="fuentevalor"><% if (zIDEvalute.equals(zIDEvaluator)){%><%=zEvaluatoAuto%><%}else{%><% if (zPpal.equals("1")){%><%=zEvaluatoPpal%><%}else{%><%=zEvaluatoNoPpal%><%}%><%}%></td>
    <td class="fuentevalor" colspan="2"><m4:item  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  </tr>
</m4:dataloop>
</table>
<%@ include file="/m4trans/mss_generico/0-smco_pag.jsp"%> 
<%}else{%>
<div class="fuentenodatos"><%=NoDataFound2%></div>
<br/><br/>
<%}%>