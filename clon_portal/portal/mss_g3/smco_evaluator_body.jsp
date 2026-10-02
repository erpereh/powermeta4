<%
String zOrg="/iconos/wunits_visibility_36_36.gif";
String zlabelOrg=TranMss.getProperty("ev_mss.zlabelOrg");
String zPersonal="/iconos/add.gif";   
String zlabelPersonal=TranMss.getProperty("ev_mss.zlabelPersonal");
String zAyuda="/iconos/info_12.gif";   
String pathImgAddComment = "/iconos/ic_next_edit_16_16_0.gif"; 
String pathImgViewComment = "/iconos/lu_hot_info_24.gif"; 
 
String LinkJob =TranMss.getProperty("ev_ess.LblJob");
String LblJob =  TranMss.getProperty("ev_ess.LinkJob");
String lblEvalExcel= TranMss.getProperty("ev_mss.LblEvalExcel");

String lblQuesti= TranMss.getProperty("ev_ess.BtbQuestion");
String lblNoVal= TranMss.getProperty("ev_mss.noVal");

String Description = TranMss.getProperty("ev_ess.DescrEv");
String LinkFijCrit = TranMss.getProperty("ev_mss.LinkFijCrit");
String LinkDelegar = TranMss.getProperty("ev_mss.LinkDelegar");
String LinkGraficos =TranMss.getProperty("ev_mss.LinkGraficos");
String LinkHistEval = TranMss.getProperty("ev_mss.LinkHist");
String LinkActionPlan = TranMss.getProperty("ev_mss.LinkActionPlan");
String zEpendiente= TranMss.getProperty("ev_mss.smco_pendiente");
String zEpendiente1= TranMss.getProperty("ev_mss.smco_pendiente1");
String zEpendiente2= TranMss.getProperty("ev_mss.smco_pendiente2");
String AddComment = Tran.getProperty("Button.AddComment");
String ViewComment = Tran.getProperty("Button.ViewComment");
String NoDataFound2 = Tran.getProperty("Label.NoDataFound2");
String NoDataFound3 = Tran.getProperty("Label.NoDataFound3");
String Save =  Tran.getProperty("Button.SaveTemp");
String Send = Tran.getProperty("Button.Send");
String Selec =  Tran.getProperty("Link.Selec");
String Ver = Tran.getProperty("Label.Ver");
String Datos = TranMss.getProperty("ev_ess.LinkDatos");
String lblNotAssess = Tran.getProperty("Label.NotAssess"); 
String zLabelConocimiento = TranMss.getProperty("ev_mss.LabelCapab");
String zLabelObj = TranMss.getProperty("ev_mss.LabelObj");
String zLabelForm = TranMss.getProperty("ev_mss.LabelForm");
String zCalck=TranMss.getProperty("ev_mss.zCalck");  
String zCalcO=TranMss.getProperty("ev_mss.zCalcO");   
String zCalcOc=TranMss.getProperty("ev_mss.zCalcOc");     
%>

<script type="text/javascript">

function AddComent(objeto){
  var vcom=escape(objeto.value);
  var path = "/mss_g3/espanol/comentario.jsp?comment=" + vcom;
  comentario = showModalDialog(path, objeto.value,'dialogWidth=330pt;dialogHeight=212pt;maximize=no;minimize=no;border=thin;center=yes;help=no;');
  objeto.value = comentario;
}

function navegarGrafico(id,ordinal1,inicioev,idplan,inicioproc,nombre)
{
  var dir="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p18_mod.jsp?IDRH="+ id+"&RHRole="+ordinal1+"&DTStartEval="+inicioev+"&IDPlan="+idplan+"&DTStartProc="+inicioproc+"&nombre="+nombre+"&Principal=1";
  window.open(dir,'Vis','width=700;height=400,resizable,scrollbars');
}
function navegarGrafico2(id,ord,inicioev)
{
  var dir="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_oeval_g.jsp?IDRH="+ id+"&RHRole="+ord+"&DTStartEval="+inicioev;
  window.open(dir,'Vis','width=700;height=400,resizable,scrollbars');
}

function abrirexcel(empleado,ordinal,fec)
{
 var hoy = new Date(); 
  var sNewWindow = "Wnd" + hoy.getDay() + hoy.getHours() + hoy.getMinutes() + hoy.getSeconds();
  m4valor("open_v","zidhr",empleado,"set");
  m4valor("open_v","zorrole",ordinal,"set");
  m4valor("open_v","zdtstart",fec,"set");
  window.open("",sNewWindow,"top=20,left=20,toolbar=no,scrollbars=yes,directories=no,status=yes,menubar=no,resizable=yes,width=850,height=560");
  document.forms["open_v"].target = sNewWindow ;
  m4submit("open_v");
}

function abrirFicha(empleado,ordinal,evaluate)
{
  var dir="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p20.jsp?estado=31&SSM_ID_HR="+empleado+"&SSM_OR_HR_ROLE="+ordinal+"&SSM_NM_EVALUTE="+evaluate;
  window.open(dir,'Vis','width=700;height=400,resizable,scrollbars');
}
</script>
<%
String zidhr_param = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id");
if ((zidhr_param==null)||(zidhr_param.equals(""))){
  zidhr_param="";
} else {
  //desencrypt id
  zidhr_param = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zidhr_param);
}
String zOr_param = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord");
if ((zOr_param==null)||(zOr_param.equals(""))){
  zOr_param="";
} else {
  //desencrypt ord
  zOr_param = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zOr_param);
}

String zDtStartEval_param = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"inicioeval");
if ((zDtStartEval_param==null)||(zDtStartEval_param.equals(""))){
  zDtStartEval_param="";
} else {
  //desencrypt inicioeval
  zDtStartEval_param = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zDtStartEval_param);
}

String zsubsesion = "SSCO_H_EVALUTE";
String zmeta4object = "SSCO_H_EVALUTE";
String zn1 = "SSCO_H_EVALUATE";

String znodo = "SSCO_EVALUATOR";
String znodo1 = "SSCO_EVAL_CAPAB";
String znodo3 = "SSCO_EVAL_OBJECT";  
String znodo4 = "SSCO_EVAL_OBJECT_CUAL";  
String znodo5 = "SSCO_EVALUATOR_TEMP";  

String znodo6 = "SSCO_SCALE_LEVEL_NOTES";  

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
String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";
 
String znamenodo  = znodo + ":" + zsubsesion  + "!" + znodo;
String znamenodo1  = znodo1 + ":" + zsubsesion  + "!" + znodo1;
String znamenodo3  = znodo3 + ":" + zsubsesion  + "!" + znodo3;
String znamenodo4  = znodo4 + ":" + zsubsesion  + "!" + znodo4;

String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";
String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";

String zmetodocarga = zsubsesion + "!SSCO_H_EVALUATE.SSCO_LOAD";
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
<m4:outputdef m4alias="<%=znodo6%>"><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>
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
            zalias4="SSCO_O_LEVEL"+String.valueOf(hb);
        %>
            <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveso%>"/></m4:move>
            <m4:outputdef m4alias="<%=zalias4%>"><m4:param name="m4name0" value="SSCO_H_EVALUTE!SSCO_O_LEVEL[*]"/></m4:outputdef>
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
            zalias="SSCO_K_LEVEL"+String.valueOf(h);
        %>
            <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoves%>"/></m4:move>
            <m4:outputdef m4alias="<%=zalias%>"><m4:param name="m4name0" value="SSCO_H_EVALUTE!SSCO_K_LEVEL[*]"/></m4:outputdef>
            <%
        }
    } catch(Exception e) {}
%>
<m4:endjob/>
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_eval_ex.jsp" method="post" name="open_v" id="open_v">
  <input type="hidden" id="zidType" name="zidType" value="" />
  <input type="hidden" id="zidhr" name="zidhr" value="" />
  <input type="hidden" id="zorrole" name="zorrole" value="" />
  <input type="hidden" id="zdtstart" name="zdtstart"  value="" />
</form>
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
<m4:item m4varname="zEvaluate" item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=zn1%>"/>
<m4:item m4varname="zIdHh" item="SSCO_ID_HR" htmlsafe="true" outputdef="<%=zn1%>"/>
<%zIdHh = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIdHh);%>
<m4:item m4varname="zOrRole" item="SSCO_OR_HR_ROLE" htmlsafe="true" outputdef="<%=zn1%>"/>
<%zOrRole = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zOrRole);%>   
<m4:item m4varname="zOrPer" item="SCO_OR_HR_PERIOD" htmlsafe="true" outputdef="<%=zn1%>"/>
<%zOrPer = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zOrPer);%>   
<m4:item m4varname="zDtStart" item="SSCO_DT_START_EVAL" htmlsafe="true" outputdef="<%=zn1%>"/>
<%zDtStart = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zDtStart);%>   
<m4:item m4varname="zIdPlanEval" item="SCO_ID_EVAL_PLAN" htmlsafe="true" outputdef="<%=zn1%>"/>
<m4:item m4varname="zNmProc" item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=zn1%>"/>
<m4:item m4varname="zDtStarProc" item="SCO_DT_START_PROC" htmlsafe="true" outputdef="<%=zn1%>"/>
<m4:item m4varname="zDtChekCrit" item="SSCO_CHECK_CRITERIA" htmlsafe="true" outputdef="<%=zn1%>"/>
<%String zTemp="0";
String zAcc="";
%>
<%if (zcount5>0){%>
<m4:item  m4varname="zNivelActual" item="NIVEL_ACEPTADO" htmlsafe="true" outputdef="<%=znodo5%>"/>
<m4:item  m4varname="zIdEstReg" item="ID_ESTADO_REG" htmlsafe="true" outputdef="<%=znodo5%>"/>
<m4:item  var="zAcc" item="ACCION_ACEPTADO" htmlsafe="true" outputdef="<%=znodo5%>"/>
<%if (zAcc.equals("TEMPORAL")){zTemp="0";}else{zTemp="1";}%><%}%>
<%
if (zAuto.equals("1")){Description=TranMss.getProperty("ev_mss.LabelAutoDesc");}else{Description=TranMss.getProperty("ev_mss.LabelDesc")+"&nbsp;"+ zEvaluate+"&nbsp;" +TranMss.getProperty("ev_mss.LabelDesc1");}%>
<table width="100%">
<tr><td class="titulofuncional" colspan= "2" ><m4:label  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=zn1%>"/> &nbsp;:&nbsp;<%=zNmProc%></td></tr>
<tr>
    <td><img alt="<%=ztitle%>"title="<%=ztitle%>" src="/iconos/noname_procesos_evaluacion_ess_114_100.gif"  width="114" height="100" /></td>
    <td>
    <div class="descripcionfuncional"><%=Description%> &nbsp;<m4:item  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=zn1%>"/></div>
    <div class="descripcionfuncional"><m4:label  item="SCO_DT_ST_EV_PER" htmlsafe="true" outputdef="<%=zn1%>"/>&nbsp;:<m4:item  item="SCO_DT_ST_EV_PER" htmlsafe="true" outputdef="<%=zn1%>"/>&nbsp;&nbsp;<m4:item  item="SCO_DT_END_EV_PER" htmlsafe="true" outputdef="<%=zn1%>"/></div>
    <ul class="listaenlace">
    <li><a  class="enlacefuncional" title ="<%=Selec%>" href="/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_filter.jsp"><%=Selec%></a></li>
    <%if (zTemp.equals("0")){%>
    <li><a  class="enlacefuncional" title ="<%=LinkDelegar%>" href="javascript:m4submit('oculto3');"><%=LinkDelegar%></a></li>
    <%if (zDtChekCrit.equals("0")){%>   <li><a  class="enlacefuncional" title ="<%=LinkFijCrit%>" href="javascript:m4submit('oculto4');"><%=LinkFijCrit%></a></li>  <%}%>
    <%}%>
    <li><a  class="enlacefuncional" title ="<%=LinkGraficos%>" href="javascript:navegarGrafico2('<%=zIdHh%>','<%=zOrRole %>','<%=zDtStart%>');">    <%=LinkGraficos%></a></li>
    <li><a  class="enlacefuncional" title ="<%=LinkHistEval%>" href="javascript:abrirFicha('<%=zIdHh%>','<%=zOrRole %>','<%=zEvaluate%>');"><%=LinkHistEval%></a></li>
    <li><a  class="enlacefuncional" title ="<%=lblEvalExcel%>" href="javascript:abrirexcel('<%=zIdHh%>','<%=zOrRole %>','<%=zDtStart%>');"><%=lblEvalExcel%></a></li>   
    <li><a  class="enlacefuncional" title ="<%=LinkActionPlan%>" href="javascript:m4submit('oculto5');"><%=LinkActionPlan%></a></li> 
    </ul>
    </td>
</tr>
</table>
<%if (zTemp.equals("1")){if (zAcc.equals("PROCESO")){zEpendiente=zEpendiente + " " +zEpendiente1 ;}else{zEpendiente=zEpendiente+ " " + zEpendiente2;}%>
<div class="fuentenodatos"><%=zEpendiente%></div><%}%>
<%if (zTemp.equals("0")){%>
<%if (zcountsum>0){%>
<m4:item  m4varname="zCkSeg" item="SCO_CK_FASE_SEG" htmlsafe="true" outputdef="<%=zn1%>"/>
<m4:item  m4varname="zCkNotes" item="SCO_CK_NOTES" htmlsafe="true" outputdef="<%=znodo%>"/>
<table class="eval_q" width="100%"><tr class="title"><td colspan="2" ><%=zLabelForm%></td>  </tr></table>
<%@ include file="smco_evaluator_body_c.jsp"%>  
<%@ include file="smco_evaluator_body_o.jsp"%>  
<%@ include file="smco_evaluator_body_o_cual.jsp"%> 
<%if (zcountsum> 0)  {  %>
<form name="zcomevaluator" id="zcomevaluator" action=" ">
<table  class="eval_form" width="100%" cellspacing="0">
<tr class="title"><td  colspan="4"><m4:label m4name="<%=znamenodo%>" htmlsafe="true"/></td></tr>
<tr>
    <td class="label" ><m4:label  item="SCO_EVALUATOR_COMM" htmlsafe="true" outputdef="<%=znodo%>" /></td>
    <td  colspan="3"><textarea rows="3" cols="40" id="SCO_EVALUATOR_COMM2" name="SCO_EVALUATOR_COMM2" title="<m4:label  item="SCO_EVALUATOR_COMM" htmlsafe="true" outputdef="<%=znodo%>" />" ><m4:item  item="SCO_EVALUATOR_COMM_TEMP" htmlsafe="true" outputdef="<%=znodo%>"/></textarea></td>
</tr>
<tr>
    <td class="label" ><m4:label  item="SCO_STRENGTHS" htmlsafe="true" outputdef="<%=znodo%>" /></td>
    <td colspan="3"><textarea rows="3" cols="40" id="SCO_STRENGTHS2" name="SCO_STRENGTHS2" title="<m4:label  item="SCO_STRENGTHS" htmlsafe="true" outputdef="<%=znodo%>" />" ><m4:item  item="SCO_STRENGTHS_TEMP" htmlsafe="true" outputdef="<%=znodo%>"/></textarea></td>
</tr>
<tr>
    <td class="label" ><m4:label  item="SCO_AREAS_IMP" htmlsafe="true" outputdef="<%=znodo%>" /></td>
    <td colspan="3"><textarea rows="3" cols="40" id="SSCO_AREAS_IMP2" name="SCO_AREAS_IMP2" title="<m4:label  item="SCO_AREAS_IMP" htmlsafe="true" outputdef="<%=znodo%>" />" ><m4:item  item="SCO_AREAS_IMP_TEMP" htmlsafe="true" outputdef="<%=znodo%>"/></textarea></td>
</tr>
<tr class="bbto">
    <td  colspan="4">
        <a title="<%=Send%>" href="javascript:comprobar(<%=zcount3%>,<%=zcount1%>,<%=zcount4%>,0,<%=zCkNotes%>);"><img alt="<%=Send%>"  src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  /></a>
        <a title="<%=Save%>" href="javascript:comprobar(<%=zcount3%>,<%=zcount1%>,<%=zcount4%>,1,<%=zCkNotes%>);"><img alt="<%=Save%>"  src="/iconos/icono_guardar_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  /></a>
    </td>   
</tr>
</table>
</form>
<form action="/servlet/CheckSecurity/JSP/mss_g3/ssco_evaluator_act.jsp" method="post" name="nombreformulario" id="nombreformulario">
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
<%}%>
<%}else{%>
<div class="fuentenodatos"><%=NoDataFound3%></div>
<%}%>
<%}%>

<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p18.jsp?mss=1" method="post" name="oculto3" id="oculto3">
<input type="hidden" id="estado" name="estado"  value="31" />
<input type="hidden" id="id_re" name="id_re"  value="1" />
<input type="hidden" id="id" name="id"  value="<%=zIdHh%>" />
<input type="hidden" id="ordinal1" name="ordinal1"  value="<%=zOrRole %>" />
<input type="hidden" id="inicioev" name="inicioev"  value="<%=zDtStart %>" />
<input type="hidden" id="mss" name="mss"  value="1" />
<input type="hidden" id="tecnica" name="tecnica"  value="<m4:item  item="SCO_ID_ASSESSM_TEC" htmlsafe="true" outputdef="<%=zn1%>"/>" />
<input type="hidden" id="nombreper" name="nombreper"  value="<%=zEvaluate%>" />
<input type="hidden" id="NombreProceso" name="NombreProceso"  value="<m4:item  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=zn1%>"/>" />
</form>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16_mod.jsp" method="post" name="oculto4" id="oculto4">
<input type="hidden" id="estado" name="estado"  value="31" />
<input type="hidden" id="mss" name="mss"  value="1" />
<input type="hidden" id="id_re" name="id_re"  value="1" />
<input type="hidden" id="IDRH" name="IDRH"  value="<%=zIdHh%>" />
<input type="hidden" id="RHRole" name="RHRole"  value="<%=zOrRole %>" />
<input type="hidden" id="DTStartEval" name="DTStartEval"  value="<%=zDtStart %>" />
<input type="hidden" id="NombreEmpleado" name="NombreEmpleado"  value="<%=zEvaluate%>" />
<input type="hidden" id="NombreProceso" name="NombreProceso"  value="<m4:item  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=zn1%>"/>" />
</form>

<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp.jsp" method="post" name="oculto5" id="oculto5">
<input type="hidden" id="estado" name="estado"  value="31" />
<input type="hidden" id="SCO_ID_HR" name="SCO_ID_HR"  value="<%=zIdHh%>" />
<input type="hidden" id="zidhr_name" name="zidhr_name"  value="<%=zEvaluate%>" />
<input type="hidden" id="SCO_OR_HR_PERIOD" name="SCO_OR_HR_PERIOD"  value="<%=zOrPer%>" />
</form>