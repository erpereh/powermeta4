<%
  String aAgee=Tran.getProperty("Label.ssco_1");
  String aNAgee=Tran.getProperty("Label.ssco_0");
  String zEvalResp1=TranMss.getProperty("ev_mss.zEvalResp1");
  String zNoeval2=TranMss.getProperty("ev_mss.zNoeval2");
  String zNextResp=TranMss.getProperty("ev_mss.zNextResp");
  String zAyuda ="/iconos/info_12.gif";   
  String Description =  TranMss.getProperty("ev_ess.DescrEv");
  String AddComment =  Tran.getProperty("Label.Comment");
  String LinkGraficos = TranMss.getProperty("ev_mss.LinkGraficos");
  String LinkHistEval = TranMss.getProperty("ev_mss.LinkHist");
  String zLblGraphGauss = TranMss.getProperty("ev_mss.LblGraphGaussPro");
  String zLblGraphGaussEvalutor = TranMss.getProperty("ev_mss.LblGraphevaluator");
  String Send = Tran.getProperty("Button.Send");
  String Ver =   TranMss.getProperty("ev_mss.LblCom");
  String pathImgAddComment =  "/iconos/ic_next_edit_16_16_0.gif"; 
  String lblEvalExcel= TranMss.getProperty("ev_mss.LblEvalExcel");
  String znombreAll=Tran.getProperty("Label.All");
  String zfiltroevaluator = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltroevaluator");
  if ((zfiltroevaluator==null)|| (""==zfiltroevaluator)){zfiltroevaluator = "";} 
  String zfiltroevaluate = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltroevaluate");
  if ((zfiltroevaluate==null)|| (""==zfiltroevaluate)){zfiltroevaluate = "";} 
%>  
<script type="text/javascript">
function AddComent(objeto) {
  var vcom=escape(objeto.value);
  var path = "/mss_g3/espanol/comentario.jsp?comment=" + vcom;
  comentario = showModalDialog(path, objeto.value,'dialogWidth=330pt;dialogHeight=212pt;maximize=no;minimize=no;border=thin;center=yes;help=no;');
  objeto.value = comentario;
}

function abrirexcel(empleado,ordinal,fec,eval) {
  var hoy = new Date(); 
  var sNewWindow = "Wnd" + hoy.getDay() + hoy.getHours() + hoy.getMinutes() + hoy.getSeconds();
  m4valor("open_v","zidevaluator",eval,"set");
  m4valor("open_v","zidhr",empleado,"set");
  m4valor("open_v","zorrole",ordinal,"set");
  m4valor("open_v","zdtstart",fec,"set");
  window.open("",sNewWindow,"top=20,left=20,toolbar=no,scrollbars=yes,directories=no,status=yes,menubar=no,resizable=yes,width=850,height=560");
  document.forms["open_v"].target = sNewWindow ;
  m4submit("open_v");
}

function filtrar(){
  m4submit("oculto");
}

function c_check(v,vtype){
  var vform="a"+v;
  if (vtype=="0"){
    var vkk="ac"+v;
    var vnokk="ca"+v;
  }else{
    var vkk="ac"+v;
    var vnokk="ac"+v;
  }
  var objectoc= m4objeto(vkk,vform);
  if (objectoc.checked ==true){
    var objectonc= m4objeto(vnokk,vform);
    objectonc.checked = false;
  }
}

function m4gestion(n_reg){
  var cadena="";
  var vmensa="";
  if (n_reg=="0") {
    vmensa =m4getmessage("_no_select_ck")+"\n";
    alert(vmensa);
    return;
  }
  for (var v = 0; v < n_reg; v++){
    var vform="a"+v;
    var vkk="ac"+v;
    var vnokk="ca"+v;
    var vOrd="zOrd"+v;
    var vmo="mo"+v;
    zOrdVal=m4valor(vform,vOrd,"","get");
    vmoVal=m4valor(vform,vmo,"","get");
    var objectoc= m4objeto(vkk,vform);
    if (objectoc.checked ==true){
      cadena=cadena+ "ORDINAL="+zOrdVal+"{ACC=ACEPTAR{MOTIVO_ACCION="+vmoVal+"{"+"*";
    } else {
      var objectocb= m4objeto(vnokk,vform);
      if (objectocb.checked ==true) {
        cadena=cadena+"ORDINAL="+zOrdVal+"{ACC=DENEGAR{MOTIVO_ACCION="+vmoVal+"{"+"*";
      }
    }
  }

  if (cadena==""){
    vmensa =m4getmessage("_no_select_ck")+"\n";
    alert(vmensa);
    return;
  }

  m4valor("envio","param",cadena,"set");
  m4submit("envio");
} 

function acept_all(n_reg,i){
  for (var v = 0; v < n_reg; v++){
    var vform="a"+v;
    var vkk="ac"+v;
    var vkc="ca"+v;
    var objectoc= m4objeto(vkk,vform);
    var objectocan= m4objeto(vkc,vform);
    if (i=="1") {
      objectoc.checked =true;
    } else {
      objectoc.checked =false;
    }
    if (i=="2") {
      objectocan.checked =true;
    } else {
      objectocan.checked =false;
    }
  }
}
function sincro(n_reg){
  var gen=m4valor("oculto","motivog","","get");
  for (var v = 0; v < n_reg; v++){
    var vform="a"+v;
    var vkk="mo"+v;
    m4valor(vform,vkk,gen,"set");
  }
}

function verGrafico(id,idplan,inicioproc) {
  idplan= m4urlencode(idplan) ;
  var dir="/servlet/CheckSecurity/JSP/mss_g3/smco_ev_gauss.jsp?IDPlan="+idplan+"&DTStartProc="+inicioproc+"&zNivel=1";
  if (id!=''){
    dir=dir+"&IDEvaluator="+id;
  }
  window.open(dir,'Vis','width=700;height=400,resizable,scrollbars');
}
</script>
</head>
<body>

<%
  String zsubsesion = "SSCO_H_EVALUTE";
  String zmeta4object = "SSCO_H_EVALUTE";
  String znodo = "SSCO_EVALUATOR_TEMP";
  String znodo1 = "SMCO_EVALUATOR_TEMP_FILTER";
  String znodo2 = "SMCO_EVALUATE_TEMP_FILTER";

  String zventanas = "50";
  int zvuelta = 5;
  String zestado="31";
  int zregistroinicial = Integer.valueOf(zinicios).intValue();
  zregistroinicial = zregistroinicial - 1;
  int zventana  = Integer.valueOf(zventanas).intValue();
  int zregistrofinal = zregistroinicial + zventana - 1;

  String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
  String zmove =znodo + ":" +  znodo + "[" + zregistroinicial + "]";

  String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
  String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
  
  String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodo + ".SSCO_LOAD_VAL";
 
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
    M4Operations m = new M4Operations(request); 
    m.setItem(zsubsesion,"SSCO_EVALUATOR_TEMP","","SMCO_EVALUATE_FILTER",zfiltroevaluate);
    m.setItem(zsubsesion,"SSCO_EVALUATOR_TEMP","","SMCO_EVALUATOR_FILTER",zfiltroevaluator);    
  } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>

<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_eval_ex.jsp" method="post" name="open_v" id="open_v">
  <input type="hidden" id="zidevaluator" name="zidevaluator" value="" />
  <input type="hidden" id="zidhr" name="zidhr" value="" />
  <input type="hidden" id="zorrole" name="zorrole" value="" />
  <input type="hidden" id="zdtstart" name="zdtstart"  value="" />
</form>
<%
  int  zcounti  = 0;
  int  zcount  = 0; 
  try {
    M4Operations m = new M4Operations(request);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zcount = m.getCount(znodo,zsubsesion,znodo);
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
%>
<table width="100%" cellspacing="0">
  <tr>
    <td class="titulofuncional" colspan="2"><%=TranMss.getProperty("ev_mss.Valida")%></td>
  </tr>
  <tr>
    <td><img alt="<%=TranMss.getProperty("ev_mss.Valida")%>" title="<%=TranMss.getProperty("ev_mss.Valida")%>"src="/iconos/noname_valida_evaluaciones_ 71_100.gif" width="100" height="100" /></td>
    <td><div class="descripcionfuncional"><%=TranMss.getProperty("ev_mss.DescrValidaProc")%></div></td>
  </tr>
</table>
<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_val.jsp" method="post" name="oculto" id="oculto">
  <input type="hidden" id="zinicios" name="zinicios"  value="" />
<table width="100%" cellspacing="0">
  <tr>
    <td class="tablaestadosceldatitulo" colspan="6"><%=Tran.getProperty("Label.Filter")%></td>
  </tr>
  <tr>
    <td class="fuentecampofiltro">&nbsp;<%= TranMss.getProperty("ev_mss.LblEvaluatorFilter")%></td>
    <td class="fuentecampofiltro">
      <select title="<%=Tran.getProperty("Label.Job")%>"id="zfiltroevaluator" name="zfiltroevaluator" class="fuenteformulario200" onchange="javascript:filtrar();">
        <option value=""><%=znombreAll%></option>
      <m4:dataloop outputdef="<%=znodo1%>">
        <option id ="<m4:item  item="STD_ID_PERSON" htmlsafe="true" outputdef="<%=znodo1%>"/>" value="<m4:item  item="STD_ID_PERSON" htmlsafe="true" outputdef="<%=znodo1%>"/>"><m4:item  item="NOMBRE_EMPLEADO" htmlsafe="true" outputdef="<%=znodo1%>"/></option>
      </m4:dataloop>
      </select>
      <script type="text/javascript" language="Javascript1.5"><!--
        if ('<%=zfiltroevaluator%>'!= ""){
          m4searchoptioness('oculto','zfiltroevaluator','<%=zfiltroevaluator%>');
        }
      --></script>
    </td>
    <td class="fuenteboton"><a href="javascript:acept_all('<%=zcounti%>','1');" title="<%=Tran.getProperty("Label.AceptarReg")%>"><img src="/iconos/icono_aceptar_todas_36_36.gif" width="36" height="36" alt="<%=Tran.getProperty("Label.AceptarReg")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
    <td class="fuenteboton"><a href="javascript:acept_all('<%=zcounti%>','2');" title="<%=Tran.getProperty("Label.CancelarReg")%>"><img src="/iconos/icono_cancelar_todas_mss_36_36.gif" width="36" height="36" alt="<%=Tran.getProperty("Label.CancelarReg")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
    <td class="fuenteboton"><a href="javascript:acept_all('<%=zcounti%>','3');" title="<%=Tran.getProperty("Label.Deshacer")%>"><img src="/iconos/icono_deshacer_mss_36_36.gif" width="36" height="36" alt="<%=Tran.getProperty("Label.Deshacer")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
  </tr>
  <tr>
    <td class="fuentecampofiltro" >&nbsp;<%= TranMss.getProperty("ev_mss.LblEvaluateFilter")%></td>
    <td class="fuentecampofiltro" colspan="4">
      <select title="<%=Tran.getProperty("Label.Job")%>"id="zfiltroevaluate" name="zfiltroevaluate" class="fuenteformulario200" onchange="javascript:filtrar();" >
        <option value=""><%=znombreAll%></option>
      <m4:dataloop outputdef="<%=znodo2%>">
        <option id ="<m4:item  item="SCO_ID_HR" htmlsafe="true" outputdef="<%=znodo2%>"/>" value="<m4:item  item="SCO_ID_HR" htmlsafe="true" outputdef="<%=znodo2%>"/>"><m4:item  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo2%>"/></option>
      </m4:dataloop>
        </select>
        <script type="text/javascript" language="Javascript1.5"><!--
          if ('<%=zfiltroevaluate%>'!= ""){
            m4searchoptioness('oculto','zfiltroevaluate','<%=zfiltroevaluate%>');
          }
        --></script>
    </td>
  </tr>
  <tr>
    <td class="fuentecampo">&nbsp;<%=Tran.getProperty("Label.ComentarioReasonlabel")%></td>
    <td class="fuentecampo" colspan="5">
      <input title="<%=Tran.getProperty("Label.ComentarioReasonlabel")%>" size="30" id="motivog" name="motivog" type="text" maxlength="40" onkeyup="sincro('<%=zcounti%>')" />
    </td>
  </tr>
  <tr>
  <td class="fuenteboton" colspan="6"><a href="javascript:m4gestion('<%=zcounti%>');" title="<%=Send%>"><img src="/iconos/icono_enviar_mss_36_36.gif" width="36" height="36" alt="<%=Send%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
  </tr>
</table>
</form>

<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_val_act.jsp" method="post" name="envio" id="envio">
  <input type="hidden" id="param" name="param"  value="" />
</form>
<%if (zcounti > 0) { String zIDplanAnt="";String zIDEvaluarAnt="";String zSCO_DT_START_PROC_ANT="";%>  
<table class="eval_form" width="100%" cellspacing="0">
  <tr>
    <td style="background-color:#fff" colspan="8"><br/></td>
  </tr>
<m4:dataloop outputdef="<%=znodo%>">
<m4:current m4varname="zcurrent" outputdef="<%=znodo%>"/>
<m4:item m4varname="zIdPlan" item="SCO_ID_EVAL_PLAN" htmlsafe="true" outputdef="<%=znodo%>"/>
<%zIdPlan = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIdPlan);%>
<m4:item m4varname="zDtStarProc" item="SCO_DT_START_PROC"  htmlsafe="true"  outputdef="<%=znodo%>" />
<%zDtStarProc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zDtStarProc);%>
<m4:item m4varname="zEvaluator" item="STD_ID_PERSON" htmlsafe="true" outputdef="<%=znodo%>"/>
<%zEvaluator = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zEvaluator);%>
<m4:item m4varname="zResp1" item="STD_ID_PERSON_RESP" htmlsafe="true" outputdef="<%=znodo%>"/>
<m4:item m4varname="zResp2" item="STD_ID_PERSON_RESP2" htmlsafe="true" outputdef="<%=znodo%>"/>
<m4:item m4varname="zIdHR" item="SCO_ID_HR" htmlsafe="true" outputdef="<%=znodo%>"/>
<%zIdHR = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIdHR);%>
<m4:item m4varname="zNiv" item="NIVEL_ACEPTADO" htmlsafe="true" outputdef="<%=znodo%>"/>
<m4:item m4varname="zOrRole" item="SCO_OR_HR_ROLE" htmlsafe="true" outputdef="<%=znodo%>"/>
<%zOrRole = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zOrRole);%>
<m4:item m4varname="zDtStart" item="SCO_DT_START_EVAL" htmlsafe="true" outputdef="<%=znodo%>"/>
<%zDtStart = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zDtStart);%>
<m4:item m4varname="zAeva" item="SCO_EMPLOYEE_AGREE" htmlsafe="true" outputdef="<%=znodo%>"/>
<m4:item m4varname="zEmployeComm" item="SCO_EMPLOYEE_COMM" htmlsafe="true" outputdef="<%=znodo%>"/>
<m4:item m4varname="zDtStartProc" item="SCO_DT_START_PROC" htmlsafe="true" outputdef="<%=znodo%>"/>
<%zDtStartProc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zDtStartProc);%>
<m4:item m4varname="zOrd" item="ORDINAL" htmlsafe="true" outputdef="<%=znodo%>"/>
<form name="a<%=zcurrent%>" id="a<%=zcurrent%>" action=" ">
<input type="hidden" id="zOrd<%=zcurrent%>" name="zOrd<%=zcurrent%>"  value="<%=zOrd%>" />
<%if (!zIdPlan.equals(zIDplanAnt) || (zDtStarProc.equals(zSCO_DT_START_PROC_ANT)==false)){zIDplanAnt=zIdPlan;zIDEvaluarAnt="";zSCO_DT_START_PROC_ANT=zDtStarProc;%>
<tr class="title">
  <td class="labeli"colspan="2">&nbsp;<m4:label  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>" /></td>
  <td class="labeli"colspan="4"> &nbsp;<m4:item  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>" /></td>
  <td class="i_r"><a title="<%=zLblGraphGauss%>" href="javascript:verGrafico('','<%=zIdPlan%>','<%=zDtStartProc%>');"><img alt="<%=zLblGraphGauss%>" title="<%=zLblGraphGauss%>" src="/iconos/ic_compvar_16_16_0.gif" width="16" height="16" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<%}%>
<%if (!zEvaluator.equals(zIDEvaluarAnt)){zIDEvaluarAnt=zEvaluator;%>
<tr class="title">
<td >&nbsp;<m4:label  item="NOMBRE_EMPLEADO" htmlsafe="true" outputdef="<%=znodo%>" /></td>
<td colspan="2">&nbsp;<m4:item  item="NOMBRE_EMPLEADO" htmlsafe="true" outputdef="<%=znodo%>" /><a title="<%=zLblGraphGaussEvalutor%>" href="javascript:verGrafico('<%=zEvaluator%>','<%=zIdPlan%>','<%=zDtStartProc%>');"><img alt="<%=zLblGraphGauss%>" title="<%=zLblGraphGaussEvalutor%>" src="/iconos/ic_compvar_16_16_0.gif" width="16" height="16" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a></td>
<td colspan="2">&nbsp;<%=zNextResp%></td>
<td colspan="2"><%if ((zNiv.equals("1"))||(zResp2.equals(""))){%><%=zNoeval2%><%}else{%><m4:item  item="STD_ID_PERSON_RESP2" htmlsafe="true" outputdef="<%=znodo%>" /><%}%></td>
</tr>
<tr class="title">  
<td class="label" > <m4:label  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo%>" /></td>
<td class="label"> <m4:label  item="SCO_VALUE_OBJ_QUANT" htmlsafe="true" outputdef="<%=znodo%>" /></td>
<td class="label"> <m4:label  item="SCO_CALCUL_CAP" htmlsafe="true" outputdef="<%=znodo%>" /></td>
<td class="label"> <m4:label  item="SCO_CALCUL_OBJ" htmlsafe="true" outputdef="<%=znodo%>" /></td>
<td class="label"> <m4:label  item="SCO_EMPLOYEE_AGREE" htmlsafe="true" outputdef="<%=znodo%>" /></td>
<td class="label"> <m4:label  item="ACCION_ACEPTADO" htmlsafe="true" outputdef="<%=znodo%>" /></td>
<td>&nbsp;</td>
</tr>
<%}%>
<tr>
<td class="label"><a title="<%=lblEvalExcel%>" href="javascript:abrirexcel ('<%=zIdHR%>','<%=zOrRole%>','<%=zDtStart%>','<%=zEvaluator%>');"><img alt="<%=lblEvalExcel%>" src="/iconos/icono_hacia_excel_32_16.gif"  width="32" height="16" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a>&nbsp;&nbsp;<m4:item  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo%>" /></td>
<td class="label"><m4:item  item="SCO_VALUE_OBJ_QUANT" htmlsafe="true" outputdef="<%=znodo%>" /></td>
<td class="label"><m4:item  item="SCO_CALCUL_CAP" htmlsafe="true" outputdef="<%=znodo%>" /></td>
<td class="label"><m4:item  item="SCO_CALCUL_OBJ" htmlsafe="true" outputdef="<%=znodo%>" /></td>
<td class="label"><%if (zAeva.equals("1")){%><%=aAgee%><%}else{%><%=aNAgee%><%}%>
<%if (!zEmployeComm.equals("")){%>
<a class="labelc" href="#"  title="<%=Ver%>" onmouseover="javascript:muestra('cono<%=zcurrent%>', event);"onmouseout="javascript:oculta('cono<%=zcurrent%>');"><img  src="<%=zAyuda%>"  width="16" height="16" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a>
    <div id="cono<%=zcurrent%>"class="no_vis">
    <table width="100%" class = "eval_div" cellspacing="0">
    <tr class = "title"><td  colspan="2">&nbsp;</td></tr>
    <tr class = "tr_div"><td  colspan="2">&nbsp;</td></tr>
    <tr class="tr_div">
      <td><m4:label  item="SCO_EMPLOYEE_COMM" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;</td>
      <td  >&nbsp;<m4:item  item="SCO_EMPLOYEE_COMM" htmlsafe="true" outputdef="<%=znodo%>"/></td>
    </tr>
    <tr class = "tr_div"><td  colspan="2">&nbsp;</td>
    <tr class = "title"><td  colspan="2">&nbsp;</td></tr>
    </table>
    </div>
<%}%>
</td>
<td class="label"><input  class="finput" title="<%=Tran.getProperty("Button.Accept")%>" id="ac<%=zcurrent%>" name="ac<%=zcurrent%>" type="checkbox" value="1"  onclick="javascript:c_check('<%=zcurrent%>','0');"/><%=Tran.getProperty("Label.Aceptar")%><input class="finput" title="<%=Tran.getProperty("Button.Cancel2")%>" id="ca<%=zcurrent%>" name="ca<%=zcurrent%>" type="checkbox" value="1" onclick="javascript:c_check('<%=zcurrent%>','1');" /><%=Tran.getProperty("Label.Cancelar")%></td>
<td class="i_r"  ><a title="<%=AddComment%>" href="javascript:AddComent(m4objeto('mo<%=zcurrent%>','a<%=zcurrent%>'));"><img  alt="<%=AddComment%>"  src="<%=pathImgAddComment%>" height="20" width="20"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<input id="mo<%=zcurrent%>" name="mo<%=zcurrent%>" type="hidden" value="" />
</form>
</m4:dataloop>
</table>
<%@ include file="/m4trans/mss_generico/0-smco_pag.jsp"%> 
<%}else{%>
  <div class="fuentenodatos"><%=Tran.getProperty("Label.NoDataFound7")%></div><br/><br/>
<%}%>
