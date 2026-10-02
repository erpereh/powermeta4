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

String zACC = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ACC");
if ((zACC==null)||(zACC.equals(""))){zACC = "";}

String zOrdAction = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ORD_ACTION");
if ((zOrdAction==null)||(zOrdAction.equals(""))){zOrdAction = "";}
String zIDActionType = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_ACTION_TYPE");
if ((zIDActionType==null)||(zIDActionType.equals(""))){zIDActionType = "";}
%>
<%
  String ztitle=smco_dev_plan.getProperty("dev_plan.emp_title");
  String zDescripcion=smco_dev_plan.getProperty("dev_plan.emp_desc");
  String zOEmpleado =Tran.getProperty("Link.Selec");
  String profData = Tran.getProperty("Labelmss.ProfsData");
  String zLinNew=smco_dev_plan.getProperty("dev_plan.emp_link_new");
  String zLinRec=smco_dev_plan.getProperty("dev_plan.emp_link_rec");
  String zLinkInter=smco_dev_plan.getProperty("dev_plan.emp_link_inter");
  String zLinktraining=smco_dev_plan.getProperty("dev_plan.emp_link_tra");
  String zLinkSeg=smco_dev_plan.getProperty("dev_plan.emp_link_follow");
  String LinkPref =  smco_dev_plan.getProperty("dev_plan.LinkPref");
  String zAyuda="/iconos/info_12.gif";   
  String Ver = Tran.getProperty("Label.Ver");
%>

<script type="text/javascript">

function load(empleado)
{
  var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&person=" + empleado;
  window.open(dir,'Vis','width=1015;height=600,left=0,top=50,resizable,scrollbars');
}

function view_re(empleado,or_p)
{
  var dir="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp_rec.jsp?zid_hr=" + empleado+"&zper="+or_p;
  window.open(dir,'Vis','width=450;height=50,top=50,resizable,scrollbars');
}

function seg_re(empleado,or_p)
{
  var dir="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_seg.jsp?zid_hr=" + empleado+"&zper="+or_p;
  window.open(dir,'Vis','width=450;height=50,top=50,resizable,scrollbars');
}
function borrar(nor,idtype)
{
  m4valor("oculto","SCO_ORD_ACTION",nor,"set");
  m4valor("oculto","SCO_ID_ACTION_TYPE",idtype,"set");
  m4submit("oculto");
}

function mod(vpos)
{
  m4valor("oculto3","zpos",vpos,"set");
  m4submit("oculto3");
}
function ver_form(vCurso){
  m4valor("oculto4","zid",vCurso,"set");
  m4submit("oculto4");
}
</script>

<%
String zsubsesion = "SMCO_DEV_PLAN_ACCION";
String zmeta4object = "SMCO_DEV_PLAN_ACCION";
String znodo = "SMCO_DEV_PLAN_ACCION";
String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" + znodo + "[FIRST]";
String znamenodo  = znodo + ":" + zsubsesion  + "!" + znodo;
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zmetodocarga = "CARGA:" + zsubsesion + "!SMCO_DEV_PLAN_ACCION.SMCO_LOAD";
String zmetodocargadel = "CARGA:" + zsubsesion + "!SMCO_DEV_PLAN_ACCION.SMCO_DEL";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<%if (zACC.equals("DEL")){%>
<m4:exec m4method="<%=zmetodocargadel%>">
 <m4:param name="ARG_ORD_ACC" value="<%=zOrdAction%>"/>
 <m4:param name="ARG_ID_TYPE_ACC" value="<%=zIDActionType%>"/>
</m4:exec>
<%}%>

<m4:exec m4method="<%=zmetodocarga%>">
 <m4:param name="ARG_ID_HR" value="<%=zidhr_param%>"/>
 <m4:param name="ARG_OR_PERIOD" value="<%=zorperiod%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%if (zidhr_param.equals("")){%>
<m4:item var="zidhr_param" item="PAR_ID_HR" htmlsafe="true" outputdef="<%=znodo%>" />
<m4:item var="zorperiod" item="PAR_OR_HR_PERIOD" htmlsafe="true" outputdef="<%=znodo%>" />
<m4:item var="zidhr_name" item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo%>" />
<%}%>
<%
int  zcounti  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcounti = m.getCount(znodo,zsubsesion,znodo);
  
} catch(Exception e) {}
String  zcountv = String.valueOf(zcounti);
%>
</head>
<body>
<%
  zidhr_param = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zidhr_param);
  zorperiod = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zorperiod);
%>
<table border="0" width="100%">
<tr><td class="titulofuncional"  width="25%" colspan= "3" ><%=ztitle%></td>
</tr>
<tr>
  <td width="15%"><img alt="<%=ztitle%>"title="<%=ztitle%>" src="/iconos/noname_procesos_evaluacion_ess_114_100.gif"  width="114" height="100" /></td>
  <td colspan= "2" width="85%">
  <div class="descripcionfuncional"><%=zDescripcion%> <a title="<%=profData%>" href="javascript:load('<%=zidhr_param%>')"><%=zidhr_name%></a> </div>
  <ul class="listaenlace">
  <li><a  class="enlacefuncional" title ="<%=zOEmpleado%>" href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_filter.jsp"><%=zOEmpleado%></a></li>
  <li><a  class="enlacefuncional" title ="<%=zLinNew%>" href="javascript:m4submit('oculto2');"><%=zLinNew%></a></li>
  <li><a  class="enlacefuncional" title ="<%=zLinRec%>" href="javascript:view_re('<%=zidhr_param%>','<%=zorperiod%>');"><%=zLinRec%></a></li>
  <li><a class="enlacefuncional"title="<%=zLinkSeg%>" href="javascript:seg_re('<%=zidhr_param%>','<%=zorperiod%>');"><%=zLinkSeg%></a></li>
  <li><a class="enlacefuncional"title="<%=zLinkInter%>" href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_pet.jsp"><%=zLinkInter%></a></li>
  <li><a class="enlacefuncional" title="<%=LinkPref%>" href="javascript:m4submit('plan');" ><%=LinkPref%></a></li>
   </ul>
  </td>
</tr>
</table>

<table  width="100%"><tr><td class="titulofuncional" colspan="2" ><m4:label m4name="<%=znamenodo%>" htmlsafe="true"/></td></tr></table>
<% if (zcounti > 0){String zposicions = "0";int zcontrol = 0; String zPaint="";int zposicion =0; %>
<table class = "tablaestados"  cellspacing="0" width="100%">
<tr class="tablaestadosceldatitulo">
<td class = "tablaestadosceldatitulo"><m4:label item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class = "tablaestadosceldatitulo"><m4:label item="SCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/></td> 
<td class = "tablaestadosceldatitulo"><m4:label item="SCO_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class = "tablaestadosceldatitulo"><m4:label item="SCO_IS_MANDATORY" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class = "tablaestadosceldatitulo"><m4:label item="SCO_ACTION_WHEN" htmlsafe="true" outputdef="<%=znodo%>"/></td> 
<td class = "tablaestadosceldatitulo"colspan="2"><m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo%>"/></td> 
<td class = "tablaestadosceldatitulo" ></td>

</tr>
<m4:dataloop outputdef="<%=znodo%>">
<m4:current m4varname="current" outputdef="<%=znodo%>"/>
<m4:item m4varname="zSCO_IS_FINISHED" item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo%>" />
<m4:item m4varname="zIdCurso" item="SCO_ID_DEV_SUBPRODUCT" htmlsafe="true" outputdef="<%=znodo%>" />
<m4:item m4varname="zMandatory" item="SCO_IS_MANDATORY" htmlsafe="true" outputdef="<%=znodo%>" />
<%zposicion = Integer.valueOf(current).intValue();zcontrol = zposicion%2;%>
<%if (zcontrol==0){zPaint="";}else{zPaint="2";}%>
<tr>
<td  class="fuentevalor<%=zPaint%>"><a  title="<%=Tran.getProperty("Button.Modify")%>"alt="<%=Tran.getProperty("Button.Modify")%>" href="javascript:mod('<%=current%>');"><m4:item  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo%>"/></a></td>
<td  class="fuentevalor<%=zPaint%>"><m4:item  item="SCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td  class="fuentevalor<%=zPaint%>"><m4:item  item="SCO_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/></td>

<%if (zMandatory.equals("0")){%>
<td  class="fuentevalor<%=zPaint%>" ><img  title ="<%=smco_dev_plan.getProperty("dev_plan.pdevNo")%>" alt="<%=smco_dev_plan.getProperty("dev_plan.pdevNo")%>"  src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /></td>
<%}else{%>
<td  class="fuentevalor<%=zPaint%>" ><img title ="<%=smco_dev_plan.getProperty("dev_plan.pdevYes")%>" alt="<%=smco_dev_plan.getProperty("dev_plan.pdevYes")%>"  src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /></td>
<%}%>
<td  class="fuentevalor<%=zPaint%>"><m4:item  item="SCO_ACTION_WHEN" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<%if (zSCO_IS_FINISHED.equals("0")){%>
<td  class="fuentevalorcenter<%=zPaint%>" ><img  title ="<%=smco_dev_plan.getProperty("dev_plan.pdevNo")%>" alt="<%=smco_dev_plan.getProperty("dev_plan.pdevNo")%>"  src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /></td>
<td  class="fuentevalorcenter<%=zPaint%>" ><%if( !(zIdCurso.equals(""))){%><a href="javascript:ver_form('<%=zIdCurso%>');" title="<%=zLinktraining%>"><img alt="<%=zLinktraining%>" title="<%=zLinktraining%>"src="/iconos/ic_next_edit_16_16_0.gif" /></a><%}%></td>
<%}else{%>
<td  class="fuentevalorcenter<%=zPaint%>" ><img title ="<%=smco_dev_plan.getProperty("dev_plan.pdevYes")%>" alt="<%=smco_dev_plan.getProperty("dev_plan.pdevYes")%>"  src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /></td>
<td  class="fuentevalorcenter<%=zPaint%>" ></td>
<%}%>
<td class="fuentevalor<%=zPaint%>"><a title = "<%=Tran.getProperty("Button.Delete")%>"href="javascript:borrar('<m4:item  item="SCO_ORD_ACTION" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true"/>','<m4:item  item="SCO_ID_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true"/>');"><img alt="<%=Tran.getProperty("Button.Delete")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" /></a></td>
</tr> 
</m4:dataloop>
</table>
<br />
<%}else{%>
<div class="fuentenodatos"><%=Tran.getProperty("Label.NoDataFound")%></div>
<%}%>
<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp.jsp" method="post" name="oculto" id="oculto">
<input type="hidden" id="ACC" name="ACC"  value="DEL" />
<input type="hidden" id="SCO_ID_HR" name="SCO_ID_HR"  value="<%=zidhr_param%>" />
<input type="hidden" id="SCO_OR_HR_PERIOD" name="SCO_OR_HR_PERIOD"  value="<%=zorperiod%>" />
<input type="hidden" id="zidhr_name" name="zidhr_name"  value="<%=zidhr_name%>" />
<input type="hidden" id="SCO_ORD_ACTION" name="SCO_ORD_ACTION"  value="" />
<input type="hidden" id="SCO_ID_ACTION_TYPE" name="SCO_ID_ACTION_TYPE"  value="" />
</form>

<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp_new.jsp" method="post" name="oculto2" id="oculto2">
<input type="hidden" id="SCO_ID_HR" name="SCO_ID_HR"  value="<%=zidhr_param%>" />
<input type="hidden" id="SCO_OR_HR_PERIOD" name="SCO_OR_HR_PERIOD"  value="<%=zorperiod%>" />
<input type="hidden" id="zidhr_name" name="zidhr_name"  value="<%=zidhr_name%>" />
</form>
<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp_mod.jsp" method="post" name="oculto3" id="oculto3">
<input type="hidden" id="SCO_ID_HR" name="SCO_ID_HR"  value="<%=zidhr_param%>" />
<input type="hidden" id="SCO_OR_HR_PERIOD" name="SCO_OR_HR_PERIOD"  value="<%=zorperiod%>" />
<input type="hidden" id="zidhr_name" name="zidhr_name"  value="<%=zidhr_name%>" />
<input type="hidden" id="zpos" name="zpos"  value="" />
</form>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_mod1.jsp" method="post" name="oculto4" id="oculto4">
<input type="hidden" id="empleado" name="empleado"  value="<%=zidhr_param%>" />
<input type="hidden" id="nombre_empleado" name="nombre_empleado"  value="<%=zidhr_name%>" />
<input type="hidden" id="zid" name="zid"  value="" />
</form>

<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p21.jsp?estado=31" method="post" name="plan" id="plan">
<input type="hidden" id="IDRH" name="IDRH" value="<%=zidhr_param%>" />
<input type="hidden" id="PERIODO" name="PERIODO" value="<%=zorperiod%>" />
<input type="hidden" id="znombreemp" name="znombreemp" value="<%=zidhr_name%>" />
</form>

