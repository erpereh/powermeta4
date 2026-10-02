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
<%String zidhr_param = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid_hr");
String zorperiod = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zper");
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
function aplicar(nreg){
var error = 1;
var texto =m4getmessage("_sl_smco_gn_1");
for (i=0;i<nreg;i++){ 

	var obj="SRCO_SELECTED"+i;
	var vobjeto = document.forms["NombreFormulario"].elements[obj];
	if (vobjeto.checked==true){
		 error=0;
		 i = nreg;
	}

}
if 	( error==1){

  	 texto=texto+"\n"+m4getmessage("_sl_smco_dev_plan_16");
	  	 error=1;
	  	 alert(texto);
}else{
		 m4submit("NombreFormulario") ;
}




}

function sel_all(nreg){
for (i=0;i<nreg;i++){                       
var obj="SRCO_SELECTED"+i;
var vobjeto = document.forms["NombreFormulario"].elements[obj];
vobjeto.checked=true;
}
}

function dessel_all(nreg){
for (i=0;i<nreg;i++){                       
var obj="SRCO_SELECTED"+i;
var vobjeto = document.forms["NombreFormulario"].elements[obj];
vobjeto.checked=false;
}
}

</script>
<%
String zsubsesion = "SMCO_DEV_PLAN_ACCION";
String zmeta4object = "SMCO_DEV_PLAN_ACCION";
String znodo = "SMCO_DEV_PLAN_ACCION";
String znodo1 = "SMCO_CR_ACT";


String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";

 
String zmove = znodo + ":" + znodo + "[FIRST]";
String znamenodo1  = znodo1 + ":" + zsubsesion  + "!" + znodo1;
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zmetodocarga = "CARGA:" + zsubsesion + "!SMCO_EMPLOYEE_DATA.SMCO_LOAD_ACTIONS";

%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
    M4Operations m = new M4Operations(request); 
    m.setItem(zsubsesion,"SMCO_EMPLOYEE_DATA","","SMCO_TYPE_FILTER",zfilter_type);
	m.setItem(zsubsesion,"SMCO_EMPLOYEE_DATA","","SMCO_JOB_FILTER",zfilter_job);
	m.setItem(zsubsesion,"SMCO_EMPLOYEE_DATA","","SMCO_ID_PLAN_FILTER",zfilter_id_eval);
	m.setItem(zsubsesion,"SMCO_EMPLOYEE_DATA","","SMCO_DT_PLAN_FILTER",zfilter_dt_eval);
	m.setItem(zsubsesion,"SMCO_EMPLOYEE_DATA","","SMCO_ID_EK_FILTER",zfilter_id_ek_filter);
	m.setItem(zsubsesion,"SMCO_EMPLOYEE_DATA","","SMCO_ID_LEVEL_FILTER",zfilter_id_level_filter);
	m.setItem(zsubsesion,"SMCO_EMPLOYEE_DATA","","SMCO_DT_LEVEL_FILTER",zfilter_dt_level_filter);
} catch(Exception e) {}
%>




<m4:exec m4method="<%=zmetodocarga%>">
 
</m4:exec>

<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>

<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
int  zcounti  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcounti = m.getCount(znodo1,zsubsesion,znodo1);
	
} catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);
%>


<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr><td class="titulofuncional" colspan="4" >
<m4:label m4name="<%=znamenodo1%>" htmlsafe="true"/></td></tr>
<% if (zcounti > 0){String zposicions = "0";int zcontrol = 0;	String zPaint="";int zposicion =0; %>
<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp_rec_act.jsp" method="post" name="NombreFormulario" id="NombreFormulario" >
<tr class="tablaestadosceldatitulo">
<td class = "tablaestadosceldatitulo"><m4:label  item="SRCO_SELECTED" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
<td class = "tablaestadosceldatitulo"><m4:label  item="SRCO_TYPE" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
<td class = "tablaestadosceldatitulo"><m4:label  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo1%>"/></td> 
<td class = "tablaestadosceldatitulo"><m4:label  item="SCO_ID_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo1%>"/></td> 
</tr>
<m4:dataloop outputdef="<%=znodo1%>">
<m4:current m4varname="current" outputdef="<%=znodo1%>"/>
<m4:item m4varname="zSRCO_TYPE" item="SRCO_TYPE" htmlsafe="true" outputdef="<%=znodo1%>" />
<%zposicion = Integer.valueOf(current).intValue();zcontrol = zposicion%2;%>
<%if (zcontrol==0){zPaint="";}else{zPaint="2";}%>
<tr>
<td  class="fuentevalor<%=zPaint%>"><input title="<m4:label  item="SRCO_SELECTED" htmlsafe="true" outputdef="<%=znodo1%>"/>" id="SRCO_SELECTED<%=current%>" name="SRCO_SELECTED<%=current%>" type="checkbox" value="1"  /></td>
<td  class="fuentevalor<%=zPaint%>">
<%if (zSRCO_TYPE.equals("1")){%>
<img alt="<m4:label  item="SRCO_TYPE" htmlsafe="true" outputdef="<%=znodo1%>"/>"  src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" />
<%}else{%>
&nbsp;
<%}%>
</td>
<td  class="fuentevalor<%=zPaint%>"><m4:item  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
<td  class="fuentevalor<%=zPaint%>"><m4:item  item="SMCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo1%>"/>
</td>
</tr> 
</m4:dataloop>

    <tr><td colspan="4" class="fuenteboton">
		<a title="<%=smco_dev_plan.getProperty("dev_plan.pdevSelAll")%>" href="javascript:sel_all('<%=zcounti%>');" tabindex="8"><img alt="<%=smco_dev_plan.getProperty("dev_plan.pdevSelAll")%>" src="/iconos/icono_aceptar_todas_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
		<a title="<%=smco_dev_plan.getProperty("dev_plan.pdevdesAll")%>" href="javascript:dessel_all('<%=zcounti%>');" tabindex="9"><img alt="<%=smco_dev_plan.getProperty("dev_plan.pdevdesAll")%>" src="/iconos/icono_cancelar_todas_mss_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>	
        <a title="<%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_apply")%>" href="javascript:aplicar('<%=zcounti%>');" tabindex="10"><img alt="<%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_apply")%>" src="/iconos/icono_enviar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
        <a title="<%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_close")%>" href="javascript:window.close();"><img alt="<%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_close")%>" src="/iconos/entrar_blanco.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this) " /></a>
    </td></tr>
<%}else{%>
   <tr><td colspan="2"  class="fuentevalor"><%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_nodata")%>
        
    </td></tr>
   <tr><td colspan="4" class="fuenteboton">
        
        <a title="<%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_close")%>" tabindex="9"href="javascript:window.close();"><img alt="<%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_close")%>" src="/iconos/entrar_blanco.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this) " /></a>
    </td></tr>
<%}%>
</table>
</form>
</div>
<m4:endpage/>
</html>



