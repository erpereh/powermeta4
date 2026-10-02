<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %> 

<%@ include file="/mss_g3/smco_dev_plan_trans.jsp"%>
<title><%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_title")%></title>
</head>
<%
String zidhr_param = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid_hr");
zidhr_param = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zidhr_param);
String zorperiod = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zper");
zorperiod = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zorperiod);
String zidhr_name = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidhr_name");
if ((zidhr_param==null)||(zidhr_param.equals(""))){zidhr_param = "";}
if ((zorperiod==null)||(zorperiod.equals(""))){zorperiod = "";}
String zSMCO_EK = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_EK");
if ((zSMCO_EK==null)||(zSMCO_EK.equals(""))){zSMCO_EK = "";}
%>
<script type="text/javascript">

function  b_level(){
if (document.NombreFormulario.ztype_filter[2].checked){
   var val_ek = m4select("EK_SEL","NombreFormulario","value");

   if (val_ek.length==0){
   
          m4searchoptioness("NombreFormulario","LEVEL_TYPE","");
     return;
   }else{
     m4valor("oculto2","SMCO_EK",val_ek,"set");
     m4submit("oculto2");

   }
}
}
function control_ra(){
for (i=0;i<document.NombreFormulario.ztype_filter.length;i++){ 
  if (document.NombreFormulario.ztype_filter[i].checked) {
        ztype_filter =document.NombreFormulario.ztype_filter[i].value ;
      break; 
  }  
} 

var x=document.getElementById("JOB_SEL");
var y=document.getElementById("EK_SEL");
var z=document.getElementById("LEVEL_TYPE");
if (ztype_filter=="1"){
   document.NombreFormulario.zjob[0].disabled = false;
   document.NombreFormulario.zjob[1].disabled = false;
   x.disabled=false;
   y.disabled=true;
 z.disabled=true;

   m4searchoptioness("NombreFormulario","EK_SEL","");
   m4searchoptioness("NombreFormulario","LEVEL_TYPE","");
}
if (ztype_filter=="2"){
document.NombreFormulario.zjob[0].disabled = true;
document.NombreFormulario.zjob[1].disabled = true;
x.disabled=true;
y.disabled=true;
z.disabled=true;
m4searchoptioness("NombreFormulario","JOB_SEL","");
m4searchoptioness("NombreFormulario","EK_SEL","");
m4searchoptioness("NombreFormulario","LEVEL_TYPE",""); 
}
if (ztype_filter=="3"){
   document.NombreFormulario.zjob[0].disabled = true;
   document.NombreFormulario.zjob[1].disabled = true;
   x.disabled=true;
   y.disabled=false;
   z.disabled=false;
    m4searchoptioness("NombreFormulario","JOB_SEL","");
}
}
function filtrar(){
var error = 0;
var texto =m4getmessage("_sl_smco_gn_1");
for (i=0;i<document.NombreFormulario.ztype_filter.length;i++){ 
  if (document.NombreFormulario.ztype_filter[i].checked) {
        ztype_filter =document.NombreFormulario.ztype_filter[i].value ;
      break; 
  }  
} 
if (ztype_filter=="1"){
  var zjobType=""
  for (i=0;i<document.NombreFormulario.zjob.length;i++){ 
  if (document.NombreFormulario.zjob[i].checked) {
        zjobType =document.NombreFormulario.zjob[i].value ;
      break; 
  }
  }
    if (zjobType=="3"){
      var val_job = m4select("JOB_SEL","NombreFormulario","value");
    if (val_job.length==0){
       texto=texto+"\n"+m4getmessage("_sl_smco_dev_plan_15");
       error=1;
       alert(texto);
     return;
    }
   }else if (zjobType=="1"){
      var val_job =m4valor("NombreFormulario","JOB_ACT","","get"); 
  
   }else if (zjobType=="2"){
      var val_job =m4valor("NombreFormulario","JOB_NEXT","","get");  
  
   }
   m4valor("oculto","SMCO_TYPE_FILTER","1","set");
  m4valor("oculto","SMCO_JOB_FILTER",val_job,"set");

  m4submit("oculto");
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
m4valor("oculto","SMCO_TYPE_FILTER","2","set");
 m4valor("oculto","SMCO_ID_PLAN_FILTER",id_plan,"set");
  m4valor("oculto","SMCO_DT_PLAN_FILTER",id_dt,"set");

 m4submit("oculto");
}
if (ztype_filter=="3"){
   var val_ek = m4select("EK_SEL","NombreFormulario","value");
   if (val_ek.length==0){
      texto=texto+"\n"+m4getmessage("_sl_smco_dev_plan_17");
    error=1;
    alert(texto);
    return;
   }
   m4valor("oculto","SMCO_TYPE_FILTER","3","set");
   m4valor("oculto","SMCO_ID_EK_FILTER",val_ek,"set");
   var val_id_level = m4select("LEVEL_TYPE","NombreFormulario","value");
   var val_dt = m4select("LEVEL_TYPE","NombreFormulario","id"); 
   m4valor("oculto","SMCO_ID_LEVEL_FILTER",val_id_level,"set");
   m4valor("oculto","SMCO_DT_LEVEL_FILTER",val_dt,"set");
   m4submit("oculto");
}
}
</script>
<%
String zsubsesion = "SMCO_DEV_PLAN_ACCION";
String zmeta4object = "SMCO_DEV_PLAN_ACCION";
String znodo = "SMCO_DEV_PLAN_ACCION";
String znodo1 = "SMCO_EMPLOYEE_DATA";
String znodo2 = "SMCO_DEV_JOBS";
String znodo3 = "SMCO_EMPLOYEE_EVAL";
String znodo4 = "SMCO_DEV_EK";
String znodo5 = "SMCO_EK_LEVEL";
String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
 String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
String zmove = znodo + ":" + znodo + "[FIRST]";
String znamenodo  = znodo + ":" + zsubsesion  + "!" + znodo;
String znamenodo5  = znodo5 + ":" + zsubsesion  + "!" + znodo5;
String zmetodocarga ="";
zmetodocarga = "CARGA:" + zsubsesion + "!SMCO_DEV_PLAN_ACCION.SMCO_LOAD_EMPLOYEE_DATA";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
    M4Operations m = new M4Operations(request); 
    m.setItem(zsubsesion,"SMCO_EMPLOYEE_DATA","","SMCO_EK_FILTER",zSMCO_EK);
} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
int  zcounti3  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcounti3 = m.getCount(znodo3,zsubsesion,znodo3);
} catch(Exception e) {}
%>
<table border="0" width="100%">
<tr><td class="titulofuncional"   colspan= "3" ><%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_title")%></td></tr>
<tr><td colspan= "2"><div class="descripcionfuncional"><%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_title_desc")%> </div></td></tr>
</table>
<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp_rec.jsp" method="post" name="oculto2" id="oculto2" >
<input type="hidden" id="SMCO_EK" name="SMCO_EK" value="" />
</form>
<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp_rec_filter.jsp" method="post" name="oculto" id="oculto" >
<input type="hidden" id="SMCO_TYPE_FILTER" name="SMCO_TYPE_FILTER" value="" />
<input type="hidden" id="SMCO_JOB_FILTER" name="SMCO_JOB_FILTER" value="" />
<input type="hidden" id="SMCO_ID_PLAN_FILTER" name="SMCO_ID_PLAN_FILTER" value="" />
<input type="hidden" id="SMCO_DT_PLAN_FILTER" name="SMCO_DT_PLAN_FILTER" value="" />
<input type="hidden" id="SMCO_ID_EK_FILTER" name="SMCO_ID_EK_FILTER" value="" />
<input type="hidden" id="SMCO_ID_LEVEL_FILTER" name="SMCO_ID_LEVEL_FILTER" value="" />
<input type="hidden" id="SMCO_DT_LEVEL_FILTER" name="SMCO_DT_LEVEL_FILTER" value="" />
</form>
<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_act.jsp" method="post" name="NombreFormulario" id="NombreFormulario" >
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr class = "tablaestadosceldatitulo"><td colspan="4"><%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_filter")%></td></tr>
<tr>
<td class="fuentecampo" ><input onclick="javascript:control_ra();" type="radio" id="ztype_filter" checked="checked" name ="ztype_filter" value="1" /></td>
<td class="fuentecampo" colspan="2"><%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_job")%></td>
<tr>
<td class="fuentecampo"></td>
<td class="fuentecampo"colspan="2">
<input  type="radio" id="zjob" checked="checked" name ="zjob" value="1" />
<m4:label  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo1%>"/> :<m4:item  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo1%>"/>
</td>
</tr>
<input type="hidden" id="JOB_ACT" name="JOB_ACT" value="<m4:item  item="SCO_ID_JOB_CODE" htmlsafe="true" outputdef="<%=znodo1%>"/>" />
<m4:item m4varname="zSMCO_ID_NEXT_JOB" item="SMCO_ID_NEXT_JOB" htmlsafe="true" outputdef="<%=znodo1%>" />
<%if (!(zSMCO_ID_NEXT_JOB.equals(""))){%>
<tr>
<td class="fuentecampo"></td>
<td class="fuentecampo" colspan="2">
<input type="radio" id="zjob" name ="zjob" value="2" />
<m4:label  item="SMCO_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo1%>"/> :<m4:item  item="SMCO_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
<input type="hidden" id="JOB_NEXT" name="JOB_NEXT" value="<m4:item  item="SMCO_ID_NEXT_JOB" htmlsafe="true" outputdef="<%=znodo1%>"/>" />
</tr>
<%}%>
<tr>
<td class="fuentecampo"></td>
<td class="fuentecampo" colspan="2">
<input  type="radio" id="zjob" name ="zjob" value="3" />
<m4:label  item="STD_ID_JOB_CODE" htmlsafe="true" outputdef="<%=znodo2%>"/>
  <select id="JOB_SEL" class="fuenteformulario" name="JOB_SEL" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label  item="STD_ID_JOB_CODE" htmlsafe="true" outputdef="<%=znodo2%>"/>">
      <option value=""></option>
      <m4:dataloop outputdef="<%=znodo2%>">
      <option value="<m4:item  item="STD_ID_JOB_CODE" htmlsafe="true" outputdef="<%=znodo2%>"/>"><m4:item  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo2%>"/></option>
      </m4:dataloop>
  </select>
</td>
</tr>
<tr>
<td class="fuentecampo">
<%String zeval="";zeval="disabled=\"disabled\"";if (zcounti3 > 0){zeval="";}%>
<input <%=zeval%> onclick="javascript:control_ra();" type="radio" id="ztype_filter" name ="ztype_filter" value="2" />
</td>
<td class="fuentecampo" colspan="2">
<%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_eval")%>
<% if (zcounti3 > 0){%>

<input type="hidden" id="SCO_ID_EVAL_PLAN" name="SCO_ID_EVAL_PLAN" value="<m4:item  item="SCO_ID_EVAL_PLAN" htmlsafe="true" outputdef="<%=znodo3%>"/>" />
<input type="hidden" id="SCO_DT_START_PROC" name="SCO_DT_START_PROC" value="<m4:item  item="SCO_DT_START_PROC" htmlsafe="true" outputdef="<%=znodo3%>"/>" />
<select id="EVAL_SEL" class="fuenteformulario" name="EVAL_SEL" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label  item="SMCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo3%>"/>">
      <option value=""></option>
      <m4:dataloop outputdef="<%=znodo3%>">
      <option id= "<m4:item  item="SMCO_ID_EVAL_PLAN" htmlsafe="true" outputdef="<%=znodo3%>"/>"value="<m4:item  item="SMCO_DT_START_PROC" htmlsafe="true" outputdef="<%=znodo3%>"/>"><m4:item  item="SMCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo3%>"/></option>
      </m4:dataloop>
</select>
<%}else{%>
<%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_evalnodata")%>
<%}%>
</td>
</tr>
<tr>
<td class="fuentecampo">
<input type="radio" id="ztype_filter" name ="ztype_filter" value="3" onclick="javascript:control_ra();" />
</td>
<td class="fuentecampo" colspan="2">
<%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_ek")%>

    <select onchange="javascript:b_level();" id="EK_SEL" class="fuenteformulario" name="EK_SEL" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label  item="SCO_NM_EXTD_KN" htmlsafe="true" outputdef="<%=znodo4%>"/>">
      <option value=""></option>
      <m4:dataloop outputdef="<%=znodo4%>">
      <option  value="<m4:item  item="SCO_ID_EXTD_KN" htmlsafe="true" outputdef="<%=znodo4%>"/>"><m4:item  item="SCO_NM_EXTD_KN" htmlsafe="true" outputdef="<%=znodo4%>"/></option>
      </m4:dataloop>
  </select>


<script type="text/javascript" language="Javascript1.5"><!--
if ('<%=zSMCO_EK%>'!= ""){

  m4searchoptioness("NombreFormulario","EK_SEL",'<%=zSMCO_EK%>');
  document.NombreFormulario.ztype_filter[2].checked =true;
}
--></script>

</tr>
<tr>
<td class="fuentecampo"></td>
<td class="fuentecampo"colspan="2"><m4:label  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodo5%>"/>
  <select id="LEVEL_TYPE" class="fuenteformulario" name="LEVEL_TYPE" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodo5%>"/>">
      <option id="" value=""></option>
      <m4:dataloop outputdef="<%=znodo5%>">
      <option id="<m4:item  item="SCO_DT_START" htmlsafe="true" outputdef="<%=znodo5%>"/>" value="<m4:item  item="SCO_ID_LEVEL" htmlsafe="true" outputdef="<%=znodo5%>"/>"><m4:item  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodo5%>"/></option>
      </m4:dataloop>
  </select>


</td>
</tr>
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



