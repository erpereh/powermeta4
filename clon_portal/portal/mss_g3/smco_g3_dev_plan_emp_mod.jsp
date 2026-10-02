<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "0";}
String zidhr_param = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_HR");
zidhr_param = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zidhr_param);
String zorperiod = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_OR_HR_PERIOD");
zorperiod = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zorperiod);
String zidhr_name = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidhr_name");
if ((zidhr_param==null)||(zidhr_param.equals(""))){zidhr_param = "";}
if ((zorperiod==null)||(zorperiod.equals(""))){zorperiod = "";}
if ((zidhr_name==null)||(zidhr_name.equals(""))){zidhr_name = "";}
String zpos = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zpos");
if ((zpos==null)||(zpos.equals(""))){zpos = "0";}
String zACC = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ACC");
if ((zACC==null)||(zACC.equals(""))){zACC = "";}
String zOrdAction = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ORD_ACTION");
if ((zOrdAction==null)||(zOrdAction.equals(""))){zOrdAction = "";}
String zIDActionType = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_ACTION_TYPE");
if ((zIDActionType==null)||(zIDActionType.equals(""))){zIDActionType = "";}
%>
<%
  String ztitle=smco_dev_plan.getProperty("dev_plan.emp_mod_title");
  String zDescripcion=smco_dev_plan.getProperty("dev_plan.emp_mod_desc");
  String ztitle_t=smco_dev_plan.getProperty("dev_plan.emp_mod_t_tablw");
  String zOEmpleado =Tran.getProperty("Link.Selec");
  String profData = Tran.getProperty("Labelmss.ProfsData");
  String zLinNew=smco_dev_plan.getProperty("dev_plan.emp_link_new");
  String zLinkPlan =smco_dev_plan.getProperty("dev_plan.filter_emp_link");
  String zAyuda="/iconos/info_12.gif";    
  String Ver = Tran.getProperty("Label.Ver");
%>

<script type="text/javascript">
function load(empleado)
{
var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&person=" + empleado;
window.open(dir,'Vis','width=1015;height=600,left=0,top=50,resizable,scrollbars');
}


function borrar(nor,idtype)
{
m4valor("oculto","SCO_ORD_ACTION",nor,"set");
m4valor("oculto","SCO_ID_ACTION_TYPE",idtype,"set");
m4submit("oculto");
}

function comprobar(){
var error = 0;
var texto =m4getmessage("_sl_smco_gn_1");
var val_namea = m4valor("NombreFormulario","SCO_NM_ACTION","","get");
if ((val_namea == null) || (val_namea == "")){
  texto=texto+"\n"+m4getmessage("_sl_smco_dev_plan_3");
    error=1;
}
var dtstart = m4valor("NombreFormulario","SCO_DT_START","","get");
if (dtstart == null || dtstart == ""){
  texto = texto +"\n"+ m4getmessage("_sl_smco_dev_plan_1");
  error = 1;
}else{
  var dtstartok =  m4fechacomprobacion(m4objeto('SCO_DT_START','NombreFormulario'),"");
  if (dtstartok == ""){
    texto=texto+"\n"+m4getmessage("_sl_smco_dev_plan_2");
    error=1;
  }
}
var dtend = m4valor("NombreFormulario","SCO_DT_END","","get");
if (dtend == null || dtend == ""){

}else{
  var dtendok = m4fechacomprobacion(m4objeto('SCO_DT_END','NombreFormulario'),"");
  if (dtendok == ""){
    texto=texto+"\n"+m4getmessage("_sl_smco_dev_plan_5");
      error=1;
  }else{
    var fechasok = m4compfechas(m4objeto("SCO_DT_START","NombreFormulario"),"<=",m4objeto("SCO_DT_END","NombreFormulario"));  
      if (fechasok == false){
        mensaje_fechas=m4getmessage("_sl_smco_dev_plan_6");
      texto=texto+"\n"+mensaje_fechas;
        error=1;
        }
  }
}
var val_time = m4valor("NombreFormulario","SCO_APROX_DURATION","","get");
var val_id_unit = m4select("SCO_ID_TIME_UNIT","NombreFormulario","value");  
if (val_time == null || val_time == ""){
   if (val_id_unit.length>0){
    texto=texto+"\n"+m4getmessage("_sl_smco_dev_plan_9");
    error=1;
    }
}else{
  var napp = new m4objvalidacion('_num','1','9999','','',false);
  napp.m4validar(m4objeto("SCO_APROX_DURATION","NombreFormulario"));
  if (napp.resultado == false){
    texto = texto +"\n"+ m4getmessage("_sl_smco_dev_plan_7");
    error = 1;
  }else{
      if (val_id_unit == null || val_id_unit == ""){
         texto = texto +"\n"+ m4getmessage("_sl_smco_dev_plan_8");
       error = 1;
      }
  }

}
var dtLIMIT = m4valor("NombreFormulario","SCO_ACTION_WHEN","","get");
if (dtLIMIT.length>0){

  var dtendok = m4fechacomprobacion(m4objeto('SCO_ACTION_WHEN','NombreFormulario'),"");
  if (dtendok == ""){
    texto=texto+"\n"+m4getmessage("_sl_smco_dev_plan_10");
      error=1;
  }
} 
var dtF = m4valor("NombreFormulario","SCO_DT_FINISH","","get");
var vvalorF1= document.NombreFormulario.SCO_IS_FINISHEDCK.checked;
var coFi= m4valor("NombreFormulario","SCO_FINISH_DESC","","get");
if (dtF.length>0){

  var dtendok = m4fechacomprobacion(m4objeto('SCO_DT_FINISH','NombreFormulario'),"");
  if (dtendok == ""){
    texto=texto+"\n"+m4getmessage("_sl_smco_dev_plan_11");
      error=1;
  }
  if (vvalorF1 == false){
     texto=texto+"\n"+m4getmessage("_sl_smco_dev_plan_13");
     error=1;
  }
}else{
  if (vvalorF1 == true){
     texto=texto+"\n"+m4getmessage("_sl_smco_dev_plan_12");
     error=1;
  }else{
    if (coFi.length>0){
      texto=texto+"\n"+m4getmessage("_sl_smco_dev_plan_14");
     error=1;
    }
  }
}
if (error == 1){
  alert(texto);
  return;
}else {
var vvalorvis= document.NombreFormulario.SCO_IS_VISIBLECK.checked;
if (vvalorvis== false){ m4valor("NombreFormulario","SCO_IS_VISIBLE","0","set");}else{m4valor("NombreFormulario","SCO_IS_VISIBLE","1","set");}
var vvalorMan= document.NombreFormulario.SCO_IS_MANDATORYCK.checked;
if (vvalorvis== false){ m4valor("NombreFormulario","SCO_IS_MANDATORY","0","set");}else{m4valor("NombreFormulario","SCO_IS_MANDATORY","1","set");}

var vvalorff= document.NombreFormulario.SCO_IS_FINISHEDCK.checked;
if (vvalorff== false){ m4valor("NombreFormulario","SCO_IS_FINISHED","0","set");}else{m4valor("NombreFormulario","SCO_IS_FINISHED","1","set");}



m4submit("NombreFormulario") ;
}
}
</script>
<%
String zsubsesion = "SMCO_DEV_PLAN_ACCION";
String zmeta4object = "SMCO_DEV_PLAN_ACCION";
String znodo = "SMCO_DEV_PLAN_ACCION";
String znodo2 = "SMCO_ACCION_TIMES";
String zoutputdef = zsubsesion + "!" + znodo + "["+zpos+"]";
String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
String zmove = znodo + ":" + znodo + "[FIRST]";
String znamenodo  = znodo + ":" + zsubsesion  + "!" + znodo;
String zmetodocarga = "CARGA:" + zsubsesion + "!SMCO_DEV_PLAN_ACCION.SMCO_LOAD_NEW";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
int  zcounti  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcounti = m.getCount(znodo,zsubsesion,znodo);
} catch(Exception e) {}String zcountv = String.valueOf(zcounti);int zTabess=0;%>
</head>
<body>
<%
  zidhr_param = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zidhr_param);
  zorperiod = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zorperiod);
%>
<table border="0" width="100%">
<tr><td class="titulofuncional"  width="25%" colspan= "3" ><%=ztitle%></td></tr>
<tr>
  <td><img alt="<%=ztitle%>"title="<%=ztitle%>" src="/iconos/noname_procesos_evaluacion_ess_114_100.gif"  width="114" height="100" /></td>
  <td colspan= "2">
  <div class="descripcionfuncional"><%=zDescripcion%> <a title="<%=profData%>" href="javascript:load('<%=zidhr_param%>')"><%=zidhr_name%></a> </div>
  <ul class="listaenlace">
  <li><a  tabindex="<%=(zTabess + 1)%>" class="enlacefuncional" title ="<%=zOEmpleado%>" href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_filter.jsp"><%=zOEmpleado%></a></li>
  <li><a  tabindex="<%=(zTabess + 1)%>" class="enlacefuncional" title ="<%=zLinkPlan%>" href="javascript:m4submit('oculto');"><%=zLinkPlan%></a></li>
  </ul>
  </td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_act.jsp" method="post" name="NombreFormulario" id="NombreFormulario" onsubmit="javascript:comprobar();">
<input type="hidden" id="ACC" name="ACC" value="UPD" />
<input type="hidden" id="SCO_ID_HR" name="SCO_ID_HR"  value="<%=zidhr_param%>" />
<input type="hidden" id="SCO_OR_HR_PERIOD" name="SCO_OR_HR_PERIOD"  value="<%=zorperiod%>" />
<input type="hidden" id="SCO_ORD_ACTION" name="SCO_ORD_ACTION"  value="<m4:item  item="SCO_ORD_ACTION" htmlsafe="true" outputdef="<%=znodo%>"/>" />
<input type="hidden" id="SCO_ID_ACTION_TYPE" name="SCO_ID_ACTION_TYPE"  value="<m4:item  item="SCO_ID_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/>" />
<input type="hidden" id="zidhr_name" name="zidhr_name"  value="<%=zidhr_name%>" />
<input type="hidden" id="SCO_DT_START" name="SCO_DT_START" value="<m4:item  item="SCO_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/>" />
<m4:item  m4varname="zCkVis" item="SCO_IS_VISIBLE" htmlsafe="true" outputdef="<%=znodo%>"/>
<m4:item  m4varname="zCkMand" item="SCO_IS_MANDATORY" htmlsafe="true" outputdef="<%=znodo%>"/>
<m4:item  m4varname="zCkfinish" item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo%>"/>


<input type="hidden" id="SCO_IS_VISIBLE" name="SCO_IS_VISIBLE"  value="<%=zCkVis%>" />
<input type="hidden" id="SCO_IS_MANDATORY" name="SCO_IS_MANDATORY"  value="<%=zCkMand%>" />
<input type="hidden" id="SCO_IS_FINISHED" name="SCO_IS_FINISHED"  value="<%=zCkfinish%>" />


<m4:item m4varname="zSCO_ID_ORIGIN" item="SCO_ID_ORIGIN" htmlsafe="true" outputdef="<%=znodo%>" />
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr class = "tablaestadosceldatitulo">
<td colspan="3"><%=ztitle_t%></td>
<td class="tablamenuright"><a title="<%=ztitle_t%>"href="javascript:m4submit('oculto');"><img alt="<%=zLinkPlan%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr >
<td class="fuentecampo" ><m4:label  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class="fuentecampo"colspan="4"><input value ="<m4:item  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo%>"/>"class="fuenteformulario" type="text" id="SCO_NM_ACTION" name="SCO_NM_ACTION" size="62" maxlength="62" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo%>"/>"tabindex="<%=(zTabess + 1)%>"  value=""/></td>

</tr>

<tr>
  <td colspan="2"class="fuentecampo" >&nbsp;<m4:label  item="SCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;<m4:item  item="SCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td colspan="2"class="fuentecampo">&nbsp;<m4:label  item="SCO_ID_ORIGIN" htmlsafe="true" outputdef="<%=znodo%>"/>       

  <%if (zSCO_ID_ORIGIN.equals("1")){%>&nbsp;:&nbsp;<%=smco_dev_plan.getProperty("dev_plan.emp_acc_job")%>
  (<m4:item  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo%>"/>)
  <%}%>
  <%if (zSCO_ID_ORIGIN.equals("2")){%>&nbsp;:&nbsp;<%=smco_dev_plan.getProperty("dev_plan.emp_acc_eval")%> 
  (<m4:label  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;<m4:item  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>"/>)
  <%}%>
  <%if (zSCO_ID_ORIGIN.equals("3")){%>&nbsp;:&nbsp;<%=smco_dev_plan.getProperty("dev_plan.emp_acc_other")%><%}%>
  </td>
</tr>
<tr>
  <td class="fuentecampo" colspan="4">&nbsp;<m4:label  item="SCO_NM_DEV_SUBPRODUCT" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp; <m4:item  item="SCO_NM_DEV_SUBPRODUCT" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
<tr>
  <td  colspan="2"class="fuentecampo" >&nbsp;<m4:label  item="SCO_NM_EXTD_KN" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;<m4:item  item="SCO_NM_EXTD_KN" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td  colspan="2"class="fuentecampo" >&nbsp;<m4:label  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;<m4:item  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>


<tr>
  <td class="fuentecampo">&nbsp;<m4:label  item="SCO_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/></td>        
  <td class="fuentecampo"><m4:item  item="SCO_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="fuentecampo">&nbsp;<m4:label  item="SCO_DT_END" htmlsafe="true" outputdef="<%=znodo%>"/></td>        
  <td class="fuentecampo"><input value="<m4:item  item="SCO_DT_END" htmlsafe="true" outputdef="<%=znodo%>"/>"class="fuenteformulario" value=""type="text" name="SCO_DT_END" id="SCO_DT_END" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SCO_DT_END" htmlsafe="true" outputdef="<%=znodo%>"/>" maxlength="10" size="10" tabindex="<%=(zTabess + 1)%>" />&nbsp;<a tabindex="<%=(zTabess + 1)%>" href="javascript:m4calendario(m4objeto('SCO_DT_END','NombreFormulario'))"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SCO_DT_END" htmlsafe="true" outputdef="<%=znodo%>"/>" /></a></td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;<m4:label  item="SCO_ACTION_DESC" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="fuentecampo" colspan="3"><textarea id="SCO_ACTION_DESC" name="SCO_ACTION_DESC"cols="40" rows="6" maxlength="1000" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SCO_ACTION_DESC" htmlsafe="true" outputdef="<%=znodo%>"/>"tabindex="<%=(zTabess + 1)%>"><m4:item  item="SCO_ACTION_DESC" htmlsafe="true" outputdef="<%=znodo%>"/></textarea></td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;<m4:label  item="SCO_OBJECTIVES" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="fuentecampo"colspan="3"><textarea id="SCO_OBJECTIVES" name="SCO_OBJECTIVES"cols="40" rows="6" maxlength="1000"title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SCO_OBJECTIVES" htmlsafe="true" outputdef="<%=znodo%>"/>"tabindex="<%=(zTabess + 1)%>"><m4:item  item="SCO_OBJECTIVES" htmlsafe="true" outputdef="<%=znodo%>"/></textarea></td>
</tr>
<tr>  
  <td class="fuentecampo">&nbsp;<m4:label  item="SCO_ACTION_HOW" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="fuentecampo"colspan="3"><textarea id="SCO_ACTION_HOW" name="SCO_ACTION_HOW"cols="40" rows="6" maxlength="1000"title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SCO_ACTION_HOW" htmlsafe="true" outputdef="<%=znodo%>"/>"tabindex="<%=(zTabess + 1)%>"><m4:item  item="SCO_ACTION_HOW" htmlsafe="true" outputdef="<%=znodo%>"/></textarea></td>
</tr>

<tr>  
  <td class="fuentecampo">&nbsp;<m4:label  item="SCO_IS_VISIBLE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="fuentecampo"><input type="checkbox" name="SCO_IS_VISIBLECK" id= "SCO_IS_VISIBLECK" value="1" tabindex="<%=zTabess++%>"<%if (zCkVis.equals("1")){%>checked="checked"<%}%>></td>
  <td class="fuentecampo">&nbsp;<m4:label  item="SCO_IS_MANDATORY" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="fuentecampo"><input type="checkbox" name="SCO_IS_MANDATORYCK" id= "SCO_IS_MANDATORYCK" value="1" tabindex="<%=zTabess++%>"<%if (zCkMand.equals("1")){%>checked="checked"<%}%>></td>
  
</tr>
<tr>
  
  <td class="fuentecampo">&nbsp;<m4:label  item="SCO_APROX_DURATION" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="fuentecampo" ><input class="fuenteformulario" type="text" id="SCO_APROX_DURATION" name="SCO_APROX_DURATION" size="4" maxlength="4" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SCO_APROX_DURATION" htmlsafe="true" outputdef="<%=znodo%>"/>"tabindex="<%=(zTabess + 1)%>"  value="<m4:item  item="SCO_APROX_DURATION" htmlsafe="true" outputdef="<%=znodo%>"/>"/>

  <select tabindex="<%=(zTabess + 1)%>"id="SCO_ID_TIME_UNIT" class="fuenteformulario" name="SCO_ID_TIME_UNIT" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label  item="SCO_ID_TIME_UNIT" htmlsafe="true" outputdef="<%=znodo%>"/>">
      <option value=""></option>
      <m4:dataloop outputdef="<%=znodo2%>">
      <option value="<m4:item  item="SCO_ID_TIME_UNIT" htmlsafe="true" outputdef="<%=znodo2%>"/>"><m4:item  item="SCO_NM_TIME_UNIT" htmlsafe="true" outputdef="<%=znodo2%>"/></option>
      </m4:dataloop>
  </select>
  </td>
<script type="text/javascript" language="Javascript1.5"><!--
    if ('<m4:item  item="SCO_ID_TIME_UNIT" htmlsafe="true" outputdef="<%=znodo%>"  jsafe="true"/>'!= ""){
      m4searchoptioness('NombreFormulario','SCO_ID_TIME_UNIT','<m4:item  item="SCO_ID_TIME_UNIT" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true"/>');
    }
    --></script>
  
  <td class="fuentecampo" >&nbsp;<m4:label  item="SCO_ACTION_WHEN" htmlsafe="true" outputdef="<%=znodo%>"/></td>
   <td class="fuentecampo" ><input value="<m4:item  item="SCO_ACTION_WHEN" htmlsafe="true" outputdef="<%=znodo%>"/>"class="fuenteformulario" value=""type="text" name="SCO_ACTION_WHEN" id="SCO_ACTION_WHEN" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SCO_ACTION_WHEN" htmlsafe="true" outputdef="<%=znodo%>"/>" maxlength="10" size="10" tabindex="<%=(zTabess + 1)%>" />&nbsp;<a tabindex="<%=(zTabess + 1)%>" href="javascript:m4calendario(m4objeto('SCO_ACTION_WHEN','NombreFormulario'))"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SCO_ACTION_WHEN" htmlsafe="true" outputdef="<%=znodo%>"/>" /></a></td>

</tr>

<tr>  
  <td class="fuentecampo">&nbsp;<m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="fuentecampo"><input type="checkbox" name="SCO_IS_FINISHEDCK" id= "SCO_IS_FINISHEDCK" value="1" tabindex="<%=zTabess++%>" <%if (zCkfinish.equals("1")){%>checked="checked"<%}%>></td>
  <td class="fuentecampo" >&nbsp;<m4:label  item="SCO_DT_FINISH" htmlsafe="true" outputdef="<%=znodo%>"/></td>        
  <td class="fuentecampo"><input value="<m4:item  item="SCO_DT_FINISH" htmlsafe="true" outputdef="<%=znodo%>"/>"class="fuenteformulario" value=""type="text" name="SCO_DT_FINISH" id="SCO_DT_FINISH" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SCO_DT_FINISH" htmlsafe="true" outputdef="<%=znodo%>"/>" maxlength="10" size="10" tabindex="<%=(zTabess + 1)%>" />&nbsp;<a tabindex="<%=(zTabess + 1)%>" href="javascript:m4calendario(m4objeto('SCO_DT_FINISH','NombreFormulario'))"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SCO_DT_FINISH" htmlsafe="true" outputdef="<%=znodo%>"/>" /></a></td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;<m4:label  item="SCO_FINISH_DESC" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="fuentecampo" colspan="3"><textarea id="SCO_FINISH_DESC" name="SCO_FINISH_DESC"cols="40" rows="6" maxlength="1000" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SCO_FINISH_DESC" htmlsafe="true" outputdef="<%=znodo%>"/>"tabindex="<%=(zTabess + 1)%>"><m4:item  item="SCO_FINISH_DESC" htmlsafe="true" outputdef="<%=znodo%>"/></textarea></td>
</tr>
<tr><td class="fuenteboton" colspan="4"><a title="<%=Tran.getProperty("Button.Send")%>"href="javascript:comprobar();" tabindex="4"><img alt="<%=Tran.getProperty("Button.Send")%>" src="/iconos/icono_enviar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td></tr>
</table>
</form>
<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp.jsp" method="post" name="oculto" id="oculto">
<input type="hidden" id="SCO_ID_HR" name="SCO_ID_HR"  value="<%=zidhr_param%>" />
<input type="hidden" id="SCO_OR_HR_PERIOD" name="SCO_OR_HR_PERIOD"  value="<%=zorperiod%>" />
<input type="hidden" id="zidhr_name" name="zidhr_name"  value="<%=zidhr_name%>" />
</form>