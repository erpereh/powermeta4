<script type="text/javascript">
function AddComent(objeto){
  var vcom=escape(objeto.value);
  var path = "/mss_g3/espanol/comentario.jsp?comment=" + vcom;
  comentario = showModalDialog(path, objeto.value,'dialogWidth=330pt;dialogHeight=212pt;maximize=no;minimize=no;border=thin;center=yes;help=no;');
  objeto.value = comentario;
}

</script>
<%
String pathImgAddComment = "/iconos/ic_next_edit_16_16_0.gif"; 
String zOrg="/iconos/wunits_visibility_36_36.gif";
String zPersonal="/iconos/add.gif";   
String zAyuda="/iconos/info_12.gif";   
String zlabelOrg=TranEss.getProperty("ev_ess.zlabelOrg");
String zlabelPersonal=TranEss.getProperty("ev_ess.zlabelPersonal");
String Description =  TranEss.getProperty("ev_ess.DescrEv");
String LinkJob = TranEss.getProperty("ev_ess.LinkJob");
String LblJob =  TranEss.getProperty("ev_ess.LblJob");
String lblEvalExcel= TranEss.getProperty("ev_ess.LblEvalExcel");
String AddComment = Tran.getProperty("Button.AddComment");
String lblQuesti=TranEss.getProperty("ev_ess.BtbQuestion");
String pathImgViewComment = "/iconos/lu_hot_info_24.gif"; 
String ViewComment = Tran.getProperty("Button.ViewComment");

String zLabelConocimiento = TranEss.getProperty("ev_ess.LabelCapab");
String zLabelObj = TranEss.getProperty("ev_ess.LabelObj");
String zLabelForm = TranEss.getProperty("ev_ess.LabelForm");

String zEpendiente= TranEss.getProperty("ev_ess.smco_pendiente");
String zEpendiente1= TranEss.getProperty("ev_ess.smco_pendiente1");
String zEpendiente2= TranEss.getProperty("ev_ess.smco_pendiente2");

String NoDataFound2 =Tran.getProperty("Label.NoDataFound2");
String NoDataFound3 =  Tran.getProperty("Label.NoDataFound3");

String Save = Tran.getProperty("Button.SaveTemp");
String Send =  Tran.getProperty("Button.Send");
String Selec = Tran.getProperty("Link.Selec");
String Ver =  Tran.getProperty("Label.Ver");
String lblNotAssess = Tran.getProperty("Label.NotAssess");

String zidhr_param = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id");
String zOr_param = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord");
String zDtStartEval_param = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"inicioeval");
if ((zidhr_param==null)||(zidhr_param.equals(""))){
  zidhr_param="";
} else {
  zidhr_param = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zidhr_param);
}

if ((zOr_param==null)||(zOr_param.equals(""))){zOr_param="";}
if ((zDtStartEval_param==null)||(zDtStartEval_param.equals(""))){zDtStartEval_param="";}
String zsubsesion = "SSCO_H_EVALUATE_SEG";
String zmeta4object = "SSCO_H_EVALUATE_SEG";
String zn1 = "SSCO_H_EVALUATE_SEG";

String znodo = "SSCO_EVALUATOR_SEG";
String znodo1 = "SSCO_EVAL_CAPAB_SEG";
String znodo3 = "SSCO_EVAL_OBJECT_SEG";  
String znodo4 = "SSCO_EVAL_OBJECT_CUAL_SEG";  
String znodo5 = "SSCO_EVALUATOR_SEG_TEMP";  

String zSCOIDTYPEtemp="";  
String znodoaux="";
String zmoveaux="";
String znodoaux4="";
String zmoveaux4="";

String zo1 = zsubsesion + "!" + zn1 + "[*]";
String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
String zoutputdef3 = zsubsesion + "!" + znodo3+ "[*]";
String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";

String znamenodo  = znodo + ":" + zsubsesion  + "!" + znodo;
String znamenodo1  = znodo1 + ":" + zsubsesion  + "!" + znodo1;
String znamenodo3  = znodo3 + ":" + zsubsesion  + "!" + znodo3;
String znamenodo4  = znodo4 + ":" + zsubsesion  + "!" + znodo4;

String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";
String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";

String zmetodocarga = zsubsesion + "!SSCO_H_EVALUATE_SEG.SSCO_LOAD_SEG";
%>  
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/><m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% 
String scount="";
String scounto="";
%>
<m4:exec m4method="<%=zmetodocarga%>">
<m4:param name="ARG_LOAD_TYPE" value=""/>
<m4:param name="ARG_ID_HR" value="<%=zidhr_param%>"/>
<m4:param name="ARG_OR_ROLE" value="<%=zOr_param%>"/>
<m4:param name="ARG_DT_START" value="<%=zDtStartEval_param%>"/>
<m4:param name="ARG_ID_EVALUATOR" value=""/>
</m4:exec>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:exec node="<%=znodo1%>" alias="counteval" method="COUNT" m4object="<%=zsubsesion%>"/>
<m4:exec node="<%=znodo4%>" alias="countObjc" method="COUNT" m4object="<%=zsubsesion%>"/>
<m4:endjob/>
<m4:beginjob/>  
<m4:outputexec var="scount" alias="counteval"/>
<m4:outputexec var="scounto" alias="countObjc"/>
<m4:outputdef m4alias="<%=zn1%>"><m4:param name="m4name0" value="<%=zo1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<%
int iEvalObj=0;
String zmoveso=znodo4 + ":" + znodo4 ;
String zalias4="";
int hb = 0;
  try {
    iEvalObj = Integer.parseInt(scounto); 
    for (hb = 0; hb < iEvalObj; hb++){
      zmoveso=znodo4 + ":" + znodo4 +"["+String.valueOf(hb)+"]";
      zalias4="SSCO_O_LEVEL_SEG"+String.valueOf(hb);
    %>
      <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveso%>"/></m4:move>
      <m4:outputdef m4alias="<%=zalias4%>"><m4:param name="m4name0" value="SSCO_H_EVALUATE_SEG!SSCO_O_LEVEL_SEG[*]"/></m4:outputdef>
      <%
    }
  } catch(Exception e) {}
%>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<% 
int iEvalCapab=0;
String zmoves=znodo1 + ":" + znodo1 ;
String zalias="";
int h = 0;
  try {
    iEvalCapab = Integer.parseInt(scount); 
    for (h = 0; h < iEvalCapab; h++){
      zmoves=znodo1 + ":" + znodo1 +"["+String.valueOf(h)+"]";
      zalias="SSCO_K_LEVEL_SEG"+String.valueOf(h);
    %>
      <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoves%>"/></m4:move>
      <m4:outputdef m4alias="<%=zalias%>"><m4:param name="m4name0" value="SSCO_H_EVALUATE_SEG!SSCO_K_LEVEL_SEG[*]"/></m4:outputdef>
      <%
    }
  } catch(Exception e) {}
%>
<m4:endjob/>
<%
  int  zcount  = 0;int  zcounti  = 0;int  zcount1  = 0;int  zcount3  = 0;int  zcount4  = 0;int  zcount5  = 0; 
  int  zcountsum  = 0;
  try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
    zcount4 = m.getCount(znodo4,zsubsesion,znodo4);
    zcount5 = m.getCount(znodo5,zsubsesion,znodo5);
          
  } catch(Exception e) {}
  String  zcountv3 = String.valueOf(zcount3);
  zcountsum  = zcount1+zcount3+zcount4;
%>
<m4:item m4varname="zAuto" item="SSCO_AUTO" htmlsafe="true" outputdef="<%=zn1%>"/>
<m4:item m4varname="zAutoSeg" item="SSCO_AUTO_SEG" htmlsafe="true" outputdef="<%=zn1%>"/>
<m4:item m4varname="zEvaluate" item="SCO_GB_NAME"  htmlsafe="true"  outputdef="<%=zn1%>" />
<m4:item m4varname="zIdHh" item="SSCO_ID_HR"  htmlsafe="true"  outputdef="<%=zn1%>" />
<m4:item m4varname="zOrRole" item="SSCO_OR_HR_ROLE"  htmlsafe="true"  outputdef="<%=zn1%>" />
<m4:item m4varname="zDtStart" item="SSCO_DT_START_EVAL"  htmlsafe="true"  outputdef="<%=zn1%>" />
<m4:item m4varname="zIdPlanEval" item="SCO_ID_EVAL_PLAN"  htmlsafe="true"  outputdef="<%=zn1%>" />
<m4:item m4varname="zNmProc" item="SCO_NM_EVAL_PROC"  htmlsafe="true"  outputdef="<%=zn1%>" />
<m4:item m4varname="zDtStarProc" item="SCO_DT_START_PROC"  htmlsafe="true"  outputdef="<%=zn1%>" />

<%
if (zAuto.equals("1")){Description=TranEss.getProperty("ev_ess.LabelAutoDesc");}else{Description=TranEss.getProperty("ev_ess.LabelDesc")+ "&nbsp; "+zEvaluate+"&nbsp; "+TranEss.getProperty("ev_ess.LabelDesc1");}%>
<table width="100%">
<tr><td class="titulofuncional" colspan= "2" ><m4:label  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=zn1%>"/> &nbsp;:&nbsp;<%=zNmProc%></td></tr>
<tr>
  <td><img alt="<%=ztitle%>"title="<%=ztitle%>" src="/iconos/noname_procesos_evaluacion_ess_114_100.gif"  width="114" height="100" /></td>
  <td>
  <div class="descripcionfuncional"><%=Description%> &nbsp;<m4:item  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=zn1%>"/></div>
  <div class="descripcionfuncional"><m4:label  item="SCO_DT_ST_EV_PER" htmlsafe="true" outputdef="<%=zn1%>"/>&nbsp;:<m4:item  item="SCO_DT_ST_EV_PER" htmlsafe="true" outputdef="<%=zn1%>"/>&nbsp;
  
  <m4:label  item="SCO_DT_END_EV_PER" htmlsafe="true" outputdef="<%=zn1%>"/>&nbsp;:<m4:item  item="SCO_DT_END_EV_PER" htmlsafe="true" outputdef="<%=zn1%>"/></div>
  <ul class="listaenlace">
  <li><a  class="enlacefuncional" title ="<%=Selec%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_seg_filter.jsp"><%=Selec%></a></li>
  </ul>
  </td>
</tr>
</table>
<%if (zcountsum>0){%>
<table class="eval_q" width="100%"><tr class="title"><td colspan="2" ><%=zLabelForm%></td>  </tr></table>
<%@ include file="ssco_evaluator_body_c_seg.jsp"%>  
<%@ include file="ssco_evaluator_body_o_seg.jsp"%>  
<%@ include file="ssco_evaluator_body_o_cual_seg.jsp"%> 
<form name="zcomevaluator" id="zcomevaluator" action=" ">
<table  class="eval_form" width="100%" cellspacing="0">

<tr>
  <td class="label" ><m4:label  item="SCO_EVALUATOR_COMM" htmlsafe="true" outputdef="<%=znodo%>" /></td>
  <td  colspan="3"><textarea rows="3" cols="40" id="SCO_EVALUATOR_COMM2" name="SCO_EVALUATOR_COMM2" title="<m4:label  item="SCO_EVALUATOR_COMM" htmlsafe="true" outputdef="<%=znodo%>" />" ><m4:item  item="SCO_EVALUATOR_COMM_TEMP" htmlsafe="true" outputdef="<%=znodo%>"/></textarea></td>
</tr>
<tr class="bbto">
  <td  colspan="4">
    <a title="<%=Send%>" href="javascript:comprobar_seg(<%=zcount3%>,<%=zcount1%>,<%=zcount4%>,0);"><img alt="<%=Send%>"  src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  /></a>
    <a title="<%=Save%>" href="javascript:comprobar_seg(<%=zcount3%>,<%=zcount1%>,<%=zcount4%>,1);"><img alt="<%=Save%>"  src="/iconos/icono_guardar_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  /></a>
  </td> 
</tr>
</table>
</form>
<form action="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_seg_act.jsp" method="post" name="nombreformulario" id="nombreformulario">
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="SSE_TEMPORAL" name="SSE_TEMPORAL" value="" />
<input type="hidden" id="SSCO_CONOCIMIENTOS" name="SSCO_CONOCIMIENTOS" value="" />
<input type="hidden" id="SSCO_OBJETIVOS" name="SSCO_OBJETIVOS" value="" />
<input type="hidden" id="SSCO_OBJETIVOS_CUAL" name="SSCO_OBJETIVOS_CUAL" value="" />
<input type="hidden" id="SCO_EVALUATOR_COMM" name="SCO_EVALUATOR_COMM" value="" />
<input type="hidden" id="SCO_AREAS_IMP" name="SCO_AREAS_IMP" value="" />
<input type="hidden" id="SCO_STRENGTHS" name="SCO_STRENGTHS" value="" />
<input type="hidden" id="SCO_ID_EMMITED_CAP" name="SCO_ID_EMMITED_CAP" value="" />
<input type="hidden" id="SCO_ID_LEVEL_CAP" name="SCO_ID_LEVEL_CAP" value="" />
<input type="hidden" id="SCO_CALCUL_CAP" name="SCO_CALCUL_CAP" value="" />
<input type="hidden" id="SCO_VALUE_OBJ_QUANT" name="SCO_VALUE_OBJ_QUANT" value="" />
<input type="hidden" id="SCO_ID_EMMITED_OBJ" name="SCO_ID_EMMITED_OBJ" value="" />
<input type="hidden" id="SCO_ID_LEVEL_OBJ" name="SCO_ID_LEVEL_OBJ" value="" />
<input type="hidden" id="SCO_CALCUL_OBJ" name="SCO_CALCUL_OBJ" value="" />
</form>

<%}else{%>
<div class="fuentenodatos"><%=NoDataFound3%></div>

<%}%>
