<title><%=smco_dev_plan.getProperty("dev_plan.emp_title_follow")%></title>
</head>
<%
String zidhr_param = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid_hr");
zidhr_param = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zidhr_param);
String zorperiod = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zper");
zorperiod = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zorperiod);
String zidhr_name = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidhr_name");
if ((zidhr_param==null)||(zidhr_param.equals(""))){zidhr_param = "";}
if ((zorperiod==null)||(zorperiod.equals(""))){zorperiod = "";}
String zfilter_type = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_TYPE_FILTER");
if ((zfilter_type==null)||(zfilter_type.equals(""))){zfilter_type = "1";}
String zfilter_job = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_JOB_FILTER");
if ((zfilter_job==null)||(zfilter_job.equals(""))){zfilter_job = "";}
String zfilter_dt_eval = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_DT_PLAN_FILTER");
if ((zfilter_dt_eval==null)||(zfilter_dt_eval.equals(""))){zfilter_dt_eval = "";}
String zfilter_id_eval = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_ID_PLAN_FILTER");
if ((zfilter_id_eval==null)||(zfilter_id_eval.equals(""))){zfilter_id_eval = "";}
String zfilter_id_ek_filter = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_ID_EK_FILTER");
String zfilter_id_level_filter = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_ID_LEVEL_FILTER");
String zfilter_dt_level_filter = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_DT_LEVEL_FILTER");
if ((zfilter_id_ek_filter==null)||(zfilter_id_ek_filter.equals(""))){zfilter_id_ek_filter = "";}
if ((zfilter_id_level_filter==null)||(zfilter_id_level_filter.equals(""))){zfilter_id_level_filter = "";}
if ((zfilter_dt_level_filter==null)||(zfilter_dt_level_filter.equals(""))){zfilter_dt_level_filter = "";}
%>
<script type="text/javascript">
function control_ra_cp(){
   if (typeof(document.forms["NombreFormulario"].elements["zcplan"]) != "undefined"){
      document.NombreFormulario.zcplan[0].disabled = true;
      document.NombreFormulario.zcplan[1].disabled = true;
   }

   if (typeof(document.forms["NombreFormulario"].elements["CARR_P"]) != "undefined"){
      var y=document.getElementById("CARR_P");
      y.disabled=true;
      m4searchoptioness("NombreFormulario","CARR_P","");
    }
}
function control_ra_cp_c(){
   if (typeof(document.forms["NombreFormulario"].elements["zcplan"]) != "undefined"){
      document.NombreFormulario.zcplan[0].disabled = false;
      document.NombreFormulario.zcplan[1].disabled = false;
   }
   var y=document.getElementById("CARR_P");
   y.disabled=false;
}
function control_ra(){
for (i=0;i<document.NombreFormulario.ztype_filter.length;i++){ 
  if (document.NombreFormulario.ztype_filter[i].checked) {
        ztype_filter =document.NombreFormulario.ztype_filter[i].value ;
      break; 
  }  
} 
var x=document.getElementById("JOB_SEL");

if (ztype_filter=="0"){
   document.NombreFormulario.zjob[0].disabled = true;
   document.NombreFormulario.zjob[1].disabled = true;
   x.disabled=false;
   m4searchoptioness("NombreFormulario","JOB_SEL","");
   control_ra_cp();
}

if (ztype_filter=="1"){
   document.NombreFormulario.zjob[0].disabled = false;
   document.NombreFormulario.zjob[1].disabled = false;
   x.disabled=false;
   m4valor("NombreFormulario","SMCO_DT_START","","set");
   m4valor("NombreFormulario","SMCO_DT_END","","set");

 control_ra_cp();

}
if (ztype_filter=="2"){
document.NombreFormulario.zjob[0].disabled = true;
document.NombreFormulario.zjob[1].disabled = true;
x.disabled=true;

m4searchoptioness("NombreFormulario","JOB_SEL","");
   m4valor("NombreFormulario","SMCO_DT_START","","set");
   m4valor("NombreFormulario","SMCO_DT_END","","set");
control_ra_cp();
}

if (ztype_filter=="3"){
document.NombreFormulario.zjob[0].disabled = true;
document.NombreFormulario.zjob[1].disabled = true;
x.disabled=true;
   m4valor("NombreFormulario","SMCO_DT_START","","set");
   m4valor("NombreFormulario","SMCO_DT_END","","set");
m4searchoptioness("NombreFormulario","JOB_SEL","");
control_ra_cp_c();
}

}


function filtrar(){
var error = 0; var texto =m4getmessage("_sl_smco_gn_1");
for (i=0;i<document.NombreFormulario.ztype_filter.length;i++){ 
  if (document.NombreFormulario.ztype_filter[i].checked) {
       ztype_filter =document.NombreFormulario.ztype_filter[i].value ;
      break; 
    }  
} 

if (ztype_filter=="1"){
   for (i=0;i<document.NombreFormulario.zjob.length;i++){ 
  if (document.NombreFormulario.zjob[i].checked) {
        ztype_job =document.NombreFormulario.zjob[i].value ;
      break; 
  }
   }
  if (ztype_job=="3"){sIdJob= m4valor("NombreFormulario","JOB_SEL","","get");}
  if (ztype_job=="2"){sIdJob= m4valor("NombreFormulario","JOB_NEXT","","get");}
  if (ztype_job=="1"){ sIdJob= m4valor("NombreFormulario","JOB_ACT","","get");} 

  if ((''== sIdJob)){
  error=1; 
  texto=texto+"\n"+m4getmessage("_sl_smco_dev_plan_15");
  }else{
  m4valor("oculto","ARG_TYPE","1","set");
  m4valor("oculto","SMCO_ID_JOB_PARAM",sIdJob,"set");
  } 
}
if (ztype_filter=="3"){
if (typeof(document.forms["NombreFormulario"].elements["zcplan"]) == "undefined"){
sIdCp= m4valor("NombreFormulario","CARR_P","","get")
}else{

  for (i=0;i<document.NombreFormulario.zcplan.length;i++){ 
  if (document.NombreFormulario.zcplan[i].checked) {
        ztype_cp =document.NombreFormulario.zcplan[i].value ;
      break; 
  }
   }
 if (ztype_cp=="1"){sIdCp= m4valor("NombreFormulario","CP_ACT","","get");}
 if (ztype_cp=="2"){sIdCp= m4valor("NombreFormulario","CARR_P","","get");}
 if ((''== sIdCp)){
  error=1; 
  texto=texto+"\n"+m4getmessage("_sl_smco_dev_plan_18");
  }else{
  m4valor("oculto","ARG_TYPE","3","set");
  m4valor("oculto","SCO_ID_CR_PATH_ACT_PARAM",sIdCp,"set");
  } 
 
}
 

}

if (ztype_filter=="2"){


   var id_plan=m4select("EVAL_SEL","NombreFormulario","id");
    if (id_plan.length==0){
       texto=texto+"\n"+m4getmessage("_sl_smco_dev_plan_22");
       error=1;
       alert(texto);
     return;
    }
  var id_dt=m4select("EVAL_SEL","NombreFormulario","value");
  var id_dt=m4select("EVAL_SEL","NombreFormulario","value");
  m4valor("oculto","ARG_TYPE","2","set");
  m4valor("oculto","SMCO_ID_PLAN_FILTER",id_plan,"set");
  m4valor("oculto","SMCO_DT_PLAN_FILTER",id_dt,"set");

}

if (ztype_filter=="0"){
  var val_start = m4valor("NombreFormulario","SMCO_DT_START","","get");
  var val_end = m4valor("NombreFormulario","SMCO_DT_END","","get");
  if ((null==val_start) || (''== val_start)){
        texto=texto+"\n"+m4getmessage("_sl_smco_dev_plan_19");
      error=1;
  }else{

      var dtstartok = m4fechacomprobacion(m4objeto('SMCO_DT_START','NombreFormulario'),"");
    var dtendok = m4fechacomprobacion(m4objeto('SMCO_DT_END','NombreFormulario'),"");
    if ((dtstartok == "")){
       texto=texto+"\n"+m4getmessage("_sl_smco_dev_plan_20");
     error=1;
    }else{
        
       if ((null==val_end) || (''== val_end)){
        m4valor("oculto","ARG_TYPE","0","set");
        m4valor("oculto","SCO_DT_START_FILTER",val_start,"set");
        m4valor("oculto","SCO_DT_END_FILTER",val_end,"set");
        }else{
            var fechasok = m4compfechas(m4objeto('SMCO_DT_START','NombreFormulario'),'<=',m4objeto('SMCO_DT_END','NombreFormulario'));
          if (fechasok == false){
               texto=texto+"\n"+m4getmessage("_sl_smco_dev_plan_21");
               error=1;
             }else{
              m4valor("oculto","ARG_TYPE","0","set");
                    m4valor("oculto","SCO_DT_START_FILTER",val_start,"set");
                            m4valor("oculto","SCO_DT_END_FILTER",val_end,"set");
      }                     }
    }
  } 




}
if  ( error==1){

 
       alert(texto);
}else{
m4submit("oculto") ;
}




}
</script>
<%
String zsubsesion = "SMCO_DEV_PLAN_ACCION_SEG";
String zmeta4object = "SMCO_DEV_PLAN_ACCION_SEG";
String znodo = "SMCO_DEV_PLAN_ACCION_SEG";
String znodo1 = "SMCO_CR_ACT";
String znodo2 = "SMCO_DEV_JOBS";
String znodo3 = "SMCO_EMPLOYEE_EVAL";
String znodo4 = "SMCO_CR_PATH";

String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";

 
String zmove = znodo + ":" + znodo + "[FIRST]";
String znamenodo1  = znodo1 + ":" + zsubsesion  + "!" + znodo1;
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zmetodocarga = "CARGA:" + zsubsesion + "!SMCO_DEV_PLAN_ACCION_SEG.SMCO_LOAD_PARAMS";
String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
  M4Operations m = new M4Operations(request); 
  m.setItem(zsubsesion,"SMCO_DEV_PLAN_ACCION_SEG","","SMCO_ID_HR",zidhr_param);
  m.setItem(zsubsesion,"SMCO_DEV_PLAN_ACCION_SEG","","SMCO_PERIOD",zorperiod);
} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<table border="0" width="100%">
<tr><td class="titulofuncional"   colspan= "3" ><%=smco_dev_plan.getProperty("dev_plan.emp_title_follow")%></td>
</tr>
<tr>
<td colspan= "2"><div class="descripcionfuncional"><%=smco_dev_plan.getProperty("dev_plan.filter_desc_follow")%> </div></td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_seg_data.jsp" method="post" name="oculto" id="oculto" >
<input type="hidden" id="ARG_TYPE" name="ARG_TYPE" value="" />
<input type="hidden" id="SMCO_ID_JOB_PARAM" name="SMCO_ID_JOB_PARAM" value="" />
<input type="hidden" id="SCO_ID_CR_PATH_ACT_PARAM" name="SCO_ID_CR_PATH_ACT_PARAM" value="" />
<input type="hidden" id="SCO_DT_START_FILTER" name="SCO_DT_START_FILTER" value="" />
<input type="hidden" id="SCO_DT_END_FILTER" name="SCO_DT_END_FILTER" value="" />
<input type="hidden" id="SMCO_ID_PLAN_FILTER" name="SMCO_ID_PLAN_FILTER" value="" />
<input type="hidden" id="SMCO_DT_PLAN_FILTER" name="SMCO_DT_PLAN_FILTER" value="" />

</form>
<form action="  " method="post" name="NombreFormulario" id="NombreFormulario" >
<input type="hidden" id="JOB_ACT" name="JOB_ACT" value="<m4:item  item="SMCO_ACT_JOB" htmlsafe="true" outputdef="<%=znodo%>"/>" />
<input type="hidden" id="JOB_NEXT" name="JOB_NEXT" value="<m4:item  item="SMCO_ID_NEXT_JOB" htmlsafe="true" outputdef="<%=znodo%>"/>" />
<input type="hidden" id="CP_ACT" name="CP_ACT" value="<m4:item  item="SCO_ID_CR_PATH_ACT" htmlsafe="true" outputdef="<%=znodo%>"/>" />
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr class = "tablaestadosceldatitulo"><td colspan="3"><%=smco_dev_plan.getProperty("dev_plan.filter_desc_follow_f")%></td></tr>
<tr>
<td class="fuentecampo" colspan="3"><input onclick="javascript:control_ra();" type="radio" id="ztype_filter" checked="checked" name ="ztype_filter" value="0" /><%=smco_dev_plan.getProperty("dev_plan.filter_follow_dates")%></td>
<tr>
<td class="fuentecampo"></td>
<td class="fuentecampo">&nbsp;<m4:label  item="SMCO_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/> &nbsp;     <input class="fuenteformulario" value="<m4:item  item="SMCO_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/>"type="text" name="SMCO_DT_START" id="SMCO_DT_START" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SMCO_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/>" maxlength="10" size="10" tabindex="1>" />&nbsp;<a tabindex="2" href="javascript:m4calendario(m4objeto('SMCO_DT_START','NombreFormulario'))"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SMCO_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/>" /></a></td>
<td class="fuentecampo">&nbsp;<m4:label  item="SMCO_DT_END" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;<input class="fuenteformulario" value=""type="text" name="SMCO_DT_END" id="SMCO_DT_ENDT_END" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SMCO_DT_END" htmlsafe="true" outputdef="<%=znodo%>"/>" maxlength="10" size="10" tabindex="3" />&nbsp;<a tabindex="4" href="javascript:m4calendario(m4objeto('SMCO_DT_END','NombreFormulario'))"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SMCO_DT_END" htmlsafe="true" outputdef="<%=znodo%>"/>" /></a></td>
</tr>
<tr>
<td class="fuentecampo" colspan="3"><input onclick="javascript:control_ra();" type="radio" id="ztype_filter"  name ="ztype_filter" value="1" /><%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_job")%></td>
<tr>
  <td class="fuentecampo"></td>
  <td class="fuentecampo" colspan="2"><input  type="radio" id="zjob" checked="checked" name ="zjob" value="1" /><m4:label  item="SMCO_ACT_JOB" htmlsafe="true" outputdef="<%=znodo%>"/> :<m4:item  item="SMCO_ACT_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
<m4:item m4varname="zSMCO_ID_NEXT_JOB" item="SMCO_ID_NEXT_JOB" htmlsafe="true" outputdef="<%=znodo%>" />
<%if (!(zSMCO_ID_NEXT_JOB.equals(""))){%>
<tr>
<td class="fuentecampo"></td>
<td class="fuentecampo" colspan="2">
<input type="radio" id="zjob" name ="zjob" value="2" />
<m4:label  item="SMCO_NM_NEXT_JOB" htmlsafe="true" outputdef="<%=znodo%>"/> :<m4:item  item="SMCO_NM_NEXT_JOB" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
<%}%>
<tr>
<td class="fuentecampo"></td>
<td class="fuentecampo" colspan="2" ><input  type="radio" id="zjob" name ="zjob" value="3" /><m4:label  item="STD_ID_JOB_CODE" htmlsafe="true" outputdef="<%=znodo2%>"/>
  <select id="JOB_SEL" class="fuenteformulario" name="JOB_SEL" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label  item="STD_ID_JOB_CODE" htmlsafe="true" outputdef="<%=znodo2%>"/>">
      <option value=""></option>
      <m4:dataloop outputdef="<%=znodo2%>">
      <option value="<m4:item  item="STD_ID_JOB_CODE" htmlsafe="true" outputdef="<%=znodo2%>"/>"><m4:item  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo2%>"/></option>
      </m4:dataloop>
  </select>
  </td>
</tr>
<%String zeval="";zeval="disabled=\"disabled\"";
int  zcounti3  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcounti3 = m.getCount(znodo3,zsubsesion,znodo3);
} catch(Exception e) {}if (zcounti3 > 0){zeval="";}
%>
<tr>
<td class="fuentecampo"><input <%=zeval%> onclick="javascript:control_ra();" type="radio" id="ztype_filter" name ="ztype_filter" value="2" /><%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_eval")%></td>
<td class="fuentecampo" colspan="3">
<% if (zcounti3 > 0){%>

<select id="EVAL_SEL" class="fuenteformulario" name="EVAL_SEL" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label  item="SMCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo3%>"/>">
      <option id="" value=""></option>
      <m4:dataloop outputdef="<%=znodo3%>">
      <option
      id= "<m4:item  item="SMCO_ID_EVAL_PLAN" htmlsafe="true" outputdef="<%=znodo3%>"/>"
      value="<m4:item  item="SMCO_DT_START_PROC" htmlsafe="true" outputdef="<%=znodo3%>"/>"
      ><m4:item  item="SMCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo3%>"/></option>
      </m4:dataloop>
</select>
<%}else{%>

<%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_evalnodata")%>

<%}%>
</td>
</tr>
<%
int  zcounti4  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcounti4 = m.getCount(znodo4,zsubsesion,znodo4);
} catch(Exception e) {}if (zcounti4 > 0){
%>
<m4:item m4varname="zSCO_ID_CR_PATH_ACT" item="SCO_ID_CR_PATH_ACT" htmlsafe="true" outputdef="<%=znodo%>" />
<tr>
<td class="fuentecampo" colspan="3"><input onclick="javascript:control_ra();" type="radio" id="ztype_filter" name ="ztype_filter" value="3" /><%=smco_dev_plan.getProperty("dev_plan.filter_follow_cplan")%></td><tr>
<td class="fuentecampo"></td>
<%if (!(zSCO_ID_CR_PATH_ACT.equals(""))){%>
<td class="fuentecampo" colspan="2">
<input type="radio" id="zcplan" checked="checked"  name ="zcplan" value="1" />
<m4:label  item="SCO_ID_CR_PATH_ACT" htmlsafe="true" outputdef="<%=znodo%>"/> :<m4:item  item="SCO_NM_CR_PATH_ACT" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
<tr>
<td class="fuentecampo"></td>
<td class="fuentecampo" colspan="2">
<input type="radio" id="zcplan" name ="zcplan" value="2" />
<%}else{%>
<td class="fuentecampo" colspan="2" >
<%}%><%=smco_dev_plan.getProperty("dev_plan.filter_follow_cplan")%>
  <select id="CARR_P" class="fuenteformulario" name="CARR_P" title="<%=Tran.getProperty("Label.LblSelect")%> <%=smco_dev_plan.getProperty("dev_plan.filter_follow_cplan")%>">
      <option value=""></option>
      <m4:dataloop outputdef="<%=znodo4%>">
      <option value="<m4:item  item="SCO_ID_CR_PATH" htmlsafe="true" outputdef="<%=znodo4%>"/>"><m4:item  item="SCO_NM_CR_PATH" htmlsafe="true" outputdef="<%=znodo4%>"/></option>
      </m4:dataloop>
  </select>
  </td>
</tr>
<%}%>

<tr><td colspan="3" class="fuenteboton">
        <a title="<%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_filter")%>" href="javascript:filtrar();" tabindex="8"><img alt="<%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_filter")%>" src="/iconos/icono_filtrar_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
        <a title="<%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_close")%>" tabindex="9"href="javascript:window.close();"><img alt="<%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_close")%>" src="/iconos/entrar_blanco.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this) " /></a>
    </td></tr>
</table>
</form>
<script type="text/javascript" language="Javascript1.5"><!--
control_ra();
--></script>
</div>
<m4:endpage/>
</html>



