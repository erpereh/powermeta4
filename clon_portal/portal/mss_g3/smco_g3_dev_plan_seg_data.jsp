

<title><%=smco_dev_plan.getProperty("dev_plan.emp_title_follow")%></title>
</head>
<%String zidhr_param = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid_hr");
String zorperiod = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zper");
String zidhr_name = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidhr_name");
if ((zidhr_param==null)||(zidhr_param.equals(""))){zidhr_param = "";}
if ((zorperiod==null)||(zorperiod.equals(""))){zorperiod = "";}

String zARG_TYPE = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_TYPE");
if ((zARG_TYPE==null)||(zARG_TYPE.equals(""))){zARG_TYPE = "0";}
String zfilter_job = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_ID_JOB_PARAM");
if ((zfilter_job==null)||(zfilter_job.equals(""))){zfilter_job = "";}
String zfilter_cp = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_CR_PATH_ACT_PARAM");
if ((zfilter_cp==null)||(zfilter_cp.equals(""))){zfilter_cp = "";}
String zdt_start = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_START_FILTER");
String zdt_end = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_END_FILTER");
if ((zdt_start==null)||(zdt_start.equals(""))){zdt_start = "";}
if ((zdt_end==null)||(zdt_end.equals(""))){zdt_end = "";}
String zid_eval_plan= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_ID_PLAN_FILTER");
String zdt_eval_plan= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_DT_PLAN_FILTER");
if ((zid_eval_plan==null)||(zid_eval_plan.equals(""))){zid_eval_plan = "";}
if ((zdt_eval_plan==null)||(zdt_eval_plan.equals(""))){zdt_eval_plan = "";}
String z1=Tran.getProperty("Label.ssco_1");
String z0=Tran.getProperty("Label.ssco_0");
%>

<%
String zsubsesion = "SMCO_DEV_PLAN_ACCION_SEG";
String zmeta4object = "SMCO_DEV_PLAN_ACCION_SEG";
String znodo = "SMCO_DEV_PLAN_ACCION_SEG";
String znodo1 = "SMCO_DEV_ACCION_SEG_JOB";
String znodo2 = "SMCO_DEV_ACCION_SEG_JOB";
String znodo3 = "SMCO_DEV_ACCION_SEG_EVAL_V";
String znodo4 = "SMCO_EMPLOYEE_EVAL";

String znodo5 = "SMCO_DEV_PLAN_JOB";
String znodo6 = "SMCO_DEV_PLAN_EVAL";
String znodo7 = "SMCO_DEV_PLAN_OTHERS";

String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";

 
String zmove = znodo + ":" + znodo + "[FIRST]";
 
String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";
String znamenodo1  = znodo1 + ":" + zsubsesion  + "!" + znodo1;

String zmetodocarga = "CARGA:" + zsubsesion + "!SMCO_DEV_PLAN_ACCION_SEG.SMCO_LOAD_ACTIONS";

String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";
String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";
String znamenodo7  = znodo7 + ":" + zsubsesion  + "!" + znodo7;
String scount1="";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
    M4Operations m = new M4Operations(request); 
    m.setItem(zsubsesion,"SMCO_DEV_PLAN_ACCION_SEG","","SMCO_ID_JOB_PARAM",zfilter_job);
	m.setItem(zsubsesion,"SMCO_DEV_PLAN_ACCION_SEG","","SCO_ID_CR_PATH_ACT_PARAM",zfilter_cp);
	m.setItem(zsubsesion,"SMCO_DEV_PLAN_ACCION_SEG","","SMCO_DT_START",zdt_start);
	m.setItem(zsubsesion,"SMCO_DEV_PLAN_ACCION_SEG","","SMCO_DT_END",zdt_end);
	
	m.setItem(zsubsesion,"SMCO_DEV_PLAN_ACCION_SEG","","SMCO_DT_START_PROC_PARAM",zdt_eval_plan);
	m.setItem(zsubsesion,"SMCO_DEV_PLAN_ACCION_SEG","","SMCO_ID_EVAL_PLAN",zid_eval_plan);

} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="ARG_TYPE" value="<%=zARG_TYPE%>"/></m4:exec>
<m4:exec node="<%=znodo1%>" alias="countjob" method="COUNT" m4object="<%=zsubsesion%>"/>
<m4:endjob/>
<m4:beginjob/>
<m4:outputexec var="scount1" alias="countjob"/>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo6%>"><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo7%>"><m4:param name="m4name0" value="<%=zoutputdef7%>"/></m4:outputdef>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<%
int itipoJob=0;
String zmoveso=znodo2 + ":" + znodo2 ;
String zalias2="";
int hb = 0;
	try {
		itipoJob = Integer.parseInt(scount1); 
		for (hb = 0; hb < itipoJob; hb++){
			zmoveso=znodo2 + ":" + znodo2 +"["+String.valueOf(hb)+"]";
			zalias2="SMCO_DEV_ACCION_SEG_JOB_V"+String.valueOf(hb);
		%>
			<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveso%>"/></m4:move>
			<m4:outputdef m4alias="<%=zalias2%>"><m4:param name="m4name0" value="SMCO_DEV_PLAN_ACCION_SEG!SMCO_DEV_ACCION_SEG_JOB_V[*]"/></m4:outputdef>
			<%
		}
	} catch(Exception e) {}
%>
<m4:endjob/>
<%
int  zcounti1  = 0;
int zcounti3  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcounti1 = m.getCount(znodo1,zsubsesion,znodo1);
	 zcounti3 = m.getCount(znodo3,zsubsesion,znodo3);
} catch(Exception e) {}
%>
<%if (zARG_TYPE.equals("0")){String zIdJobAnt="";%>
<%int  zcounti5  = 0;int zcounti6  = 0;int zcounti7  = 0;int zcountOtotal  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcounti5 = m.getCount(znodo5,zsubsesion,znodo5);
	zcounti6 = m.getCount(znodo6,zsubsesion,znodo6);
	zcounti7 = m.getCount(znodo7,zsubsesion,znodo7);
} catch(Exception e) {}
zcountOtotal =zcounti5+zcounti6+zcounti7;
%>
<%if (zcountOtotal>0){%>
<table class = "tablaestadosceldatitulo" width="100%" cellspacing="0" border="0" >
<m4:dataloop outputdef="<%=znodo5%>">
<m4:item m4varname="zSCO_ID_JOB_CODE" item="SCO_ID_JOB_CODE" htmlsafe="true" outputdef="<%=znodo5%>" />
<m4:item m4varname="zSCO_IS_FINISHED" item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo5%>" />
<m4:item m4varname="zSCO_IS_MANDATORY" item="SCO_IS_MANDATORY" htmlsafe="true" outputdef="<%=znodo5%>" />
<%if (zIdJobAnt.equals(zSCO_ID_JOB_CODE)){%>
<tr>
<td  class="fuentevalor"><m4:item  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo5%>"/></td>
<td  class="fuentevalor"><m4:item  item="SCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo5%>"/></td>
<td  class="fuentevalor"><%if (zSCO_IS_MANDATORY.equals("0")){%><%=z0%><%}else{%><%=z1%><%}%></td>
<td  class="fuentevalor"><%if (zSCO_IS_FINISHED.equals("0")){%><img alt="<m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo5%>"/>"  src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /><%}else{%><img alt="<m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo5%>"/>"  src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /><%}%></td>
</tr>
<%}else{zIdJobAnt=zSCO_ID_JOB_CODE;%>
<tr >
<td class="titulofuncional" ><m4:label  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo5%>"/> :<m4:item  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo5%>"/></td>
<td class="titulofuncional"><m4:label  item="SMCO_GAP" htmlsafe="true" outputdef="<%=znodo5%>"/> :<m4:item  item="SMCO_GAP" htmlsafe="true" outputdef="<%=znodo5%>"/></td>
<td class="titulofuncional" colspan="2"><m4:label  item="SMCO_PERC" htmlsafe="true" outputdef="<%=znodo5%>"/> :<m4:item  item="SMCO_PERC" htmlsafe="true" outputdef="<%=znodo5%>"/></td>
</tr>
<tr class="tablaestadosceldatitulo">
<td ><m4:label  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo5%>"/></td>
<td ><m4:label  item="SCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo5%>"/></td> 
<td ><m4:label  item="SCO_IS_MANDATORY" htmlsafe="true" outputdef="<%=znodo5%>"/></td> 
<td ><m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo5%>"/></td> 
</tr>
<tr>
<td  class="fuentevalor"><m4:item  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo5%>"/></td>
<td  class="fuentevalor"><m4:item  item="SCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo5%>"/></td>
<td  class="fuentevalor"><%if (zSCO_IS_MANDATORY.equals("0")){%><%=z0%><%}else{%><%=z1%><%}%></td>
<td  class="fuentevalor"><%if (zSCO_IS_FINISHED.equals("0")){%><img alt="<m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo5%>"/>"  src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /><%}else{%><img alt="<m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo5%>"/>"  src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /><%}%></td>
</tr>
<%}%>
</m4:dataloop>
<table>

<table class = "tablaestadosceldatitulo" width="100%" cellspacing="0" border="0" >
<m4:dataloop outputdef="<%=znodo6%>">
<m4:item m4varname="zSMCO_PERC" item="SMCO_PERC" htmlsafe="true" outputdef="<%=znodo6%>" />
<m4:item m4varname="zSCO_IS_FINISHED" item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo6%>" />
<m4:item m4varname="zSCO_IS_MANDATORY" item="SCO_IS_MANDATORY" htmlsafe="true" outputdef="<%=znodo6%>" />
<%if (zSMCO_PERC.equals("")){%>
<tr>
<td  class="fuentevalor"><m4:item  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo6%>"/></td>
<td  class="fuentevalor"><m4:item  item="SCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo6%>"/></td>
<td  class="fuentevalor"><%if (zSCO_IS_MANDATORY.equals("0")){%><%=z0%><%}else{%><%=z1%><%}%></td>
<td  class="fuentevalor"><%if (zSCO_IS_FINISHED.equals("0")){%><img alt="<m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo6%>"/>"  src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /><%}else{%><img alt="<m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo6%>"/>"  src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /><%}%></td>
</tr>
<%}else{%>
<tr><td  class="fuentevalor" colspan="4">&nbsp;</td></tr>
<tr >
<td class="titulofuncional" colspan="3"><m4:label  item="SMCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>"/> :<m4:item  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo6%>"/></td>
<td class="titulofuncional"><m4:label  item="SMCO_PERC" htmlsafe="true" outputdef="<%=znodo6%>"/> :<m4:item  item="SMCO_PERC" htmlsafe="true" outputdef="<%=znodo6%>"/></td>
</tr>
<tr class="tablaestadosceldatitulo">
<td ><m4:label  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo6%>"/></td>
<td ><m4:label  item="SCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo6%>"/></td> 
<td ><m4:label  item="SCO_IS_MANDATORY" htmlsafe="true" outputdef="<%=znodo6%>"/></td> 
<td ><m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo6%>"/></td> 
</tr>
<tr>
<td  class="fuentevalor"><m4:item  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo6%>"/></td>
<td  class="fuentevalor"><m4:item  item="SCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo6%>"/></td>
<td  class="fuentevalor"><%if (zSCO_IS_MANDATORY.equals("0")){%><%=z0%><%}else{%><%=z1%><%}%></td>
<td  class="fuentevalor"><%if (zSCO_IS_FINISHED.equals("0")){%><img alt="<m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo6%>"/>"  src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /><%}else{%><img alt="<m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo6%>"/>"  src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /><%}%></td>
</tr>
<%}%>

</m4:dataloop>
<table>

<%if (zcounti7>0){%>
</br></br>
<table class = "tablaestadosceldatitulo" width="100%" cellspacing="0" border="0" >

<tr class="titulofuncional"><td  colspan="3"><m4:label m4name="<%=znamenodo7%>" htmlsafe="true"/></td>
<td class="titulofuncional"><m4:label  item="SMCO_PERC" htmlsafe="true" outputdef="<%=znodo7%>"/> :<m4:item  item="SMCO_PERC" htmlsafe="true" outputdef="<%=znodo7%>"/></td>
</tr>
<tr class="tablaestadosceldatitulo">
<td ><m4:label  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo7%>"/></td>
<td ><m4:label  item="SCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo7%>"/></td> 
<td ><m4:label  item="SCO_IS_MANDATORY" htmlsafe="true" outputdef="<%=znodo7%>"/></td> 
<td ><m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo7%>"/></td> 
</tr>
<m4:dataloop outputdef="<%=znodo7%>">

<m4:item m4varname="zSCO_IS_FINISHED" item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo7%>" />
<m4:item m4varname="zSCO_IS_MANDATORY" item="SCO_IS_MANDATORY" htmlsafe="true" outputdef="<%=znodo7%>" />
<tr>
<td  class="fuentevalor"><m4:item  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo7%>"/></td>
<td  class="fuentevalor"><m4:item  item="SCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo7%>"/></td>
<td  class="fuentevalor"><%if (zSCO_IS_MANDATORY.equals("0")){%><%=z0%><%}else{%><%=z1%><%}%></td>
<td  class="fuentevalor"><%if (zSCO_IS_FINISHED.equals("0")){%><img alt="<m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo7%>"/>"  src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /><%}else{%><img alt="<m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo7%>"/>"  src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /><%}%></td>
</tr>
</m4:dataloop>
</table>

<%}%>
<%}else{%>

<div class="fuentenodatos"><%=Tran.getProperty("Label.NoDataFound")%></div>
<%}%>
<%}%>

<%if (zARG_TYPE.equals("2")){%>
<table class = "tablaestadosceldatitulo" width="100%" cellspacing="0" border="0" >
<tr >
<td class="titulofuncional" colspan="3">
<m4:label  item="SMCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>"/> :<m4:item  item="SMCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<%if (zcounti3>0){%>
<td class="titulofuncional"><m4:label  item="SMCO_PERC" htmlsafe="true" outputdef="<%=znodo3%>"/> :<m4:item  item="SMCO_PERC" htmlsafe="true" outputdef="<%=znodo3%>"/></td>
</tr>




<tr class="tablaestadosceldatitulo">
<td ><m4:label  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo3%>"/></td>
<td ><m4:label  item="SCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo3%>"/></td> 
<td ><m4:label  item="SCO_IS_MANDATORY" htmlsafe="true" outputdef="<%=znodo3%>"/></td> 
<td ><m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo3%>"/></td> 
</tr>

<m4:dataloop outputdef="<%=znodo3%>">
<m4:item m4varname="zSCO_IS_FINISHED" item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo3%>" />
<m4:item m4varname="zSCO_IS_MANDATORY" item="SCO_IS_MANDATORY" htmlsafe="true" outputdef="<%=znodo3%>" />
<tr>
<td  class="fuentevalor"><m4:item  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo3%>"/></td>
<td  class="fuentevalor"><m4:item  item="SCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo3%>"/></td>
<td  class="fuentevalor"><%if (zSCO_IS_MANDATORY.equals("0")){%><%=z0%><%}else{%><%=z1%><%}%></td>
<td  class="fuentevalor"><%if (zSCO_IS_FINISHED.equals("0")){%><img alt="<m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo3%>"/>"  src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /><%}else{%><img alt="<m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo3%>"/>"  src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /><%}%></td>
</tr>
</m4:dataloop>

<%}else{%>
<td class="titulofuncional" ><m4:label  item="SMCO_PERC" htmlsafe="true" outputdef="<%=znodo3%>"/> : 0</td>
</tr>
<tr><td class="fuentevalor" colspan="4"><%=smco_dev_plan.getProperty("dev_plan.filter_follow_eval_nodata")%></td></tr>
<%}%>

</table>
<%}%>
<%if (zARG_TYPE.equals("1")||zARG_TYPE.equals("3")){
String znodoaux="";String zmoveaux="";
%>
<m4:dataloop outputdef="<%=znodo1%>">
<table class = "tablaestadosceldatitulo" width="100%" cellspacing="0" border="0" >
<tr >
<td class="titulofuncional" colspan="2"><m4:label  item="SMCO_MN_JOB" htmlsafe="true" outputdef="<%=znodo1%>"/> :<m4:item  item="SMCO_MN_JOB" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
<td class="titulofuncional"><m4:label  item="SMCO_GAP" htmlsafe="true" outputdef="<%=znodo1%>"/> :<m4:item  item="SMCO_GAP" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
<td class="titulofuncional"><m4:label  item="SMCO_PERC" htmlsafe="true" outputdef="<%=znodo1%>"/> :<m4:item  item="SMCO_PERC" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
</tr>
<m4:current m4varname="current" outputdef="<%=znodo1%>"/>
<%znodoaux="SMCO_DEV_ACCION_SEG_JOB_V"+current; zmoveaux =znodoaux+ ":" + "SMCO_DEV_ACCION_SEG_JOB_V" + "[FIRST]";%>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveaux%>"/></m4:move>
<m4:count m4varname="zcountAux" m4place="remote" outputdef="<%=znodoaux%>"/>
<%if (zcountAux.equals("0")){%>
<tr><td class="fuentevalor" colspan="4"><%=smco_dev_plan.getProperty("dev_plan.filter_follow_job_nodata")%></td></tr>
<%}else{%>
<tr class="tablaestadosceldatitulo">
<td ><m4:label  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodoaux%>"/></td>
<td ><m4:label  item="SCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodoaux%>"/></td> 
<td ><m4:label  item="SCO_IS_MANDATORY" htmlsafe="true" outputdef="<%=znodoaux%>"/></td> 
<td ><m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodoaux%>"/></td> 
</tr>
<m4:dataloop outputdef="<%=znodoaux%>">
<m4:current m4varname="currentaux" outputdef="<%=znodoaux%>"/>
	<m4:item m4varname="zSCO_IS_FINISHED" item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodoaux%>" />
	<m4:item m4varname="zSCO_IS_MANDATORY" item="SCO_IS_MANDATORY" htmlsafe="true" outputdef="<%=znodoaux%>" />
<tr>
<td  class="fuentevalor"><m4:item  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodoaux%>"/></td>
<td  class="fuentevalor"><m4:item  item="SCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodoaux%>"/></td>

<td  class="fuentevalor"><%if (zSCO_IS_MANDATORY.equals("0")){%><%=z0%><%}else{%><%=z1%><%}%></td>

<td  class="fuentevalor"><%if (zSCO_IS_FINISHED.equals("0")){%><img alt="<m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodoaux%>"/>"  src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /><%}else{%><img alt="<m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodoaux%>"/>"  src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /><%}%></td>


</tr>
</m4:dataloop>
<%}%>
</table>

</m4:dataloop>
<%}%>
<br><br>
<table  width="100%" cellspacing="0" border="0" ><tr><td >
 <a title="<%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_close")%>" tabindex="9"href="javascript:window.close();"><img alt="<%=smco_dev_plan.getProperty("dev_plan.emp_link_rec_close")%>" src="/iconos/entrar_blanco.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this) " /></a>
     </td></tr>
 </table>
</div>
<m4:endpage/>
</html>



