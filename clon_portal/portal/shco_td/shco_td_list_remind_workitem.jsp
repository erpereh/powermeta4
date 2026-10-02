<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_td_list_remind_workitem.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="../shco_g0/shco_gen_taglib.jsp" %><html><head><%@ include file="../shco_g0/shco_gen_bag.jsp" %><%@ include file="../shco_g0/shco_gen_css.jsp" %><%@ include file="../shco_g0/shco_gen_list_arg.jsp" %>
<%@ include file="../shco_g0/shco_gen_tec_include.jspf" %>
<%
String zpag = request.getParameter("zpag");
if ((zpag==null)||(zpag.equals(""))){zpag = "0";}
String znw = request.getParameter("znw");
if ((znw==null)||(znw.equals(""))){if ((zpag=="0")||(zpag.equals("0"))){znw = "0";}else{znw = "1";}}
String znew = "shco_td/shco_td_wz_def_personalwkitem.jsp?znw=1";
if (!zpag.equals("0")){znew=zpag;}

//Reescribo el zpag y znew pues los establezco aqui dentro
znw="0";
znew = "shco_td/shco_td_wz_def_personalwkitem.jsp?znw=1";
zpag="shco_td/shco_td_wz_def_personalwkitem.jsp";
String zpag2="shco_td/shco_td_wz_def_personalwkitem.jsp?znw=1";

//Tipo de tarea por defecto

// Parámetros del M4Object:
String zsubsesion = "SHCO_TD_MT_RMD_WKLIST";
String zm4object = zsubsesion;
String znodo = zm4object;

zventanas = "20";													//*MODIFICABLE
zvuelta = 5;															//*MODIFICABLE
String zdireccion = "shco_td/shco_td_list_remind_workitem.jsp";								//*MODIFICABLE

//escribe el nombre  de esta pag. 
String zredireccion = "shco_td/shco_td_list_remind_workitem.jsp";
  
// Items que vamos a utilizar (visualizar o requeridos en una acción):
String zIdWorkItemItem = "ID_WORKITEM";											//*MODIFICABLE
String zProcessNameItem = "N_BPO";
String zInitDateItem = "DT_INSTANTIATION";
String zEndDateItem = "DT_DEADLINE";
String zRemindDateItem = "DT_REMINDER";	
String zDeadLineDateItem = "DT_DEADLINE";
String zIdTaskItem = "ID_TASK";
String zNTaskItem="N_BP";
String zProcessTypeItem="ID_TYPE";
String zReminderTextItem="AUX_VAL_2";
String zLabelExecuteItem="SHCO_LB_EXECUTE";
String zLabelReminderItem="SHCO_LB_REMINDER";




// Indica el campo por el que ordenas en la TI y si es asc o desc
if ((zOrdenCampo==null)||(zOrdenCampo.equals(""))){zOrdenCampo = zRemindDateItem;}
if ((zOrden==null)||(zOrden.equals(""))){zOrden = "1";}
%><%@ include file="../shco_g0/shco_gen_list_preload.jsp" %>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_mt.js"></script>
<script type="text/javascript" language="Javascript1.5">
var sIdPk="<%=zIdWorkItemItem%>";
var sNPk="<%=zProcessNameItem%>";
var scampoant="<%=zOrdenCampo%>";
var sOrd="<%=zOrden%>";

  function execProcess(sIdWorkItem,sIdTask,sProcessType){
    var sURL = "/servlet/CheckSecurity/JSP/shco_td/shco_td_exec_process.jsp";
	sURL = sURL + "?" + '<%=zIdWorkItemItem%>' + "=" +  sIdWorkItem;
    sURL = sURL + "&" + '<%=zIdTaskItem%>' + "=" +  sIdTask;
	sURL = sURL + "&" + '<%=zProcessTypeItem%>' + "=" +  sProcessType;
	var valuesArr=new Array();
	m4window("shco_td_exec_process",sURL,valuesArr,'formexec');
  }
</script>
<%@ include file="../shco_g0/shco_gen_list_js.jsp" %>
<%
   
// campos usados
String zIdWorkItem = zcomun + zIdWorkItemItem;
String zlIdWorkItem = zraiz + zIdWorkItemItem;

String zProcessName = zcomun + zProcessNameItem;
String zlProcessName = zraiz + zProcessNameItem;

String zDeadLineDate = zcomun +  zDeadLineDateItem;
String zlDeadLineDate = zraiz + zDeadLineDateItem;

String zInitDate = zcomun + zInitDateItem;
String zlInitDate= zraiz+  zInitDateItem;

String zEndDate = zcomun +zEndDateItem;
String zlEndDate = zraiz +zEndDateItem;

String zIdTask = zcomun + zIdTaskItem;
String zlIdTask = zraiz + zIdTaskItem;

String zNTask = zcomun + zNTaskItem;
String zlNTask = zraiz + zNTaskItem;

String zRemindDate = zcomun + zRemindDateItem;
String zlRemindDate= zraiz+  zRemindDateItem;

String zIdType = zcomun + zProcessTypeItem;
String zlIdType = zraiz + zProcessTypeItem;
String zlLabelExecute =zraiz +zLabelExecuteItem;

String zReminderText= zcomun + zReminderTextItem;
String zlReminderText= zraiz + zReminderTextItem;
String zlLabelReminder = zraiz + zLabelReminderItem;
     
String zRemindDateFormatted="";
%></head><body>


<%@ include file="../shco_g0/shco_gen_datadef.jsp" %>


<%@ include file="../shco_g0/shco_gen_exec.jsp" %><%@ include file="../shco_g0/shco_gen_list_filter.jsp" %><%@ include file="../shco_g0/shco_gen_list_outputdef.jsp" %><%@ include file="../shco_g0/shco_gen_list_count.jsp" %>
<%@include file="../shco_g0/shco_gen_title.jsp" %>
<%if (zpag.equals("0")== false){%><%@ include file="../shco_g0/shco_gen_menusup.jsp" %><%}%>
<h2><m4:label m4name="<%=zSHCOLBTITLE%>" htmlsafe="true"/></h2>

<%@include file="../shco_g0/shco_gen_list_filt.jsp" %>
<form action="/servlet/CheckSecurity/JSP/<%=zpag%>" method="post" name="oculto2" id="oculto2" >
<input type="hidden" id="<%=zIdWorkItemItem%>" name="<%=zIdWorkItemItem%>" value=""  />
<input type="hidden" id="<%=zProcessNameItem%>" name="<%=zProcessNameItem%>" value=""  />
</form>
<form action="/servlet/CheckSecurity/JSP/<%=zpag2%>" method="post" name="oculto3" id="oculto3" >
<input type="hidden" id="<%=zIdWorkItemItem%>" name="<%=zIdWorkItemItem%>" value=""  />
<input type="hidden" id="<%=zProcessNameItem%>" name="<%=zProcessNameItem%>" value=""  />
</form>

<form action="/servlet/CheckSecurity/JSP/shco_td/shco_td_exec_process.jsp" method="post" name="formexec" id="formexec" >
<input type="hidden" id="<%=zIdWorkItemItem%>" name="<%=zIdWorkItemItem%>" value=""  />
<input type="hidden" id="<%=zIdTaskItem%>" name="<%=zIdTaskItem%>" value=""  />
<input type="hidden" id="<%=zProcessTypeItem%>" name="<%=zProcessTypeItem%>" value=""  />
</form>

<form method="post" name="frmdeletewkitem" action="/servlet/CheckSecurity/JSP/shco_td/shco_td_delete_wkitem.jsp">
		<input type="hidden" id="<%=zIdWorkItemItem%>" name="<%=zIdWorkItemItem%>" value=""/>
		<input type="hidden" id="zsubsesion" name="zsubsesion" value="<%=zsubsesion%>" />
		<input type="hidden" id="zredireccion" name="zredireccion" value="<%=zredireccion%>" />
		<input type="hidden" id="znodowklist" name="znodowklist" value="<%=znodo%>" />
</form>
	
<form action="/servlet/CheckSecurity/JSP/shco_g0/shco_gen_act.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="TAG" name="TAG" value="<%=zsubsesion%>" />
<input type="hidden" id="ACC" name="ACC" value="" />
<input type="hidden" id="zredireccion" name="zredireccion" value="<%=zredireccion%>" />
<input type="hidden" id="X<%=zIdWorkItemItem%>" name="X<%=zIdWorkItemItem%>" value=""  />
<input type="hidden" id="<%=zInitDateItem%>" name="<%=zInitDateItem%>" value=""/>

<table class="datos" width="100%" cellpadding="0" cellspacing="0">
 <thead> <tr class="titulo">
    
    <th><a name="filter"><%if ((zOrdenCampo==zProcessNameItem)||(zOrdenCampo.equals(zProcessNameItem))){if ((zOrden=="1")||(zOrden.equals("1"))){%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlProcessName%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zProcessNameItem%>');" <%@ include file="../files_gif/ic_ord_1.jsp" %>  /><%}else if ((zOrden=="2")||(zOrden.equals("2"))){%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlProcessName%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zProcessNameItem%>');" <%@ include file="../files_gif/ic_ord_2.jsp" %>  /><%}%><%} else{%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlProcessName%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zProcessNameItem%>');" <%@ include file="../files_gif/ic_ord.jsp" %>  /><%}%></a>&nbsp;<m4:label m4name="<%=zlProcessName%>" htmlsafe="true"/></th>
	<th><a name="filter"><%if ((zOrdenCampo==zNTaskItem)||(zOrdenCampo.equals(zNTaskItem))){if ((zOrden=="1")||(zOrden.equals("1"))){%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlNTask%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zNTaskItem%>');" <%@ include file="../files_gif/ic_ord_1.jsp" %>  /><%}else if ((zOrden=="2")||(zOrden.equals("2"))){%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlNTask%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zNTaskItem%>');" <%@ include file="../files_gif/ic_ord_2.jsp" %>  /><%}%><%} else{%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlNTask%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zNTaskItem%>');" <%@ include file="../files_gif/ic_ord.jsp" %>  /><%}%></a>&nbsp;<m4:label m4name="<%=zlNTask%>" htmlsafe="true"/></th>
	<th><a name="filter"><%if ((zOrdenCampo==zReminderTextItem)||(zOrdenCampo.equals(zReminderTextItem))){if ((zOrden=="1")||(zOrden.equals("1"))){%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlReminderText%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zReminderTextItem%>');" <%@ include file="../files_gif/ic_ord_1.jsp" %>  /><%}else if ((zOrden=="2")||(zOrden.equals("2"))){%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlReminderText%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zReminderTextItem%>');" <%@ include file="../files_gif/ic_ord_2.jsp" %>  /><%}%><%} else{%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlReminderText%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zReminderTextItem%>');" <%@ include file="../files_gif/ic_ord.jsp" %>  /><%}%></a>&nbsp;<m4:label m4name="<%=zlReminderText%>" htmlsafe="true"/></th>
	<th><a name="filter"><%if ((zOrdenCampo==zRemindDateItem)||(zOrdenCampo.equals(zRemindDateItem))){if ((zOrden=="1")||(zOrden.equals("1"))){%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlRemindDate%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zRemindDateItem%>');" <%@ include file="../files_gif/ic_ord_1.jsp" %>  /><%}else if ((zOrden=="2")||(zOrden.equals("2"))){%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlRemindDate%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zRemindDateItem%>');" <%@ include file="../files_gif/ic_ord_2.jsp" %>  /><%}%><%} else{%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlRemindDate%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zRemindDateItem%>');" <%@ include file="../files_gif/ic_ord.jsp" %>  /><%}%></a>&nbsp;<m4:label m4name="<%=zlRemindDate%>" htmlsafe="true"/></th>
    <%@ include file="../shco_g0/shco_gen_pest.jsp" %>
    
  </tr></thead>
  <tbody>
  
  
  
<% if (zcount>0){%>


<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>"><%@ include file="../shco_g0/shco_gen_loop.jsp" %>
<m4:item m4name="<%=zIdType%>" m4varname="zProcessType" />
<tr>
<%if ((zpag=="0")||(zpag.equals("0"))){%>
<td class="valor<%=zpos%>">&nbsp;<a tabindex="8+zpos"title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/>" href="" onclick="var aval=new Array();aval[0]='<m4:item m4name="<%=zIdWorkItem%>" jsafe="true" htmlsafe="true"/>';aval[1]='<m4:item m4name="<%=zProcessName%>" jsafe="true" htmlsafe="true"/>';m4returnvalues(aval);return false;"><m4:item m4name="<%=zProcessName%>" htmlsafe="true"/></a></td>
<%}else{%>
  <td class="valor<%=zpos%>">&nbsp;<a tabindex="7+zpos"title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/>" href="" onclick="m4valor('oculto2','<%=zIdWorkItemItem%>','<m4:item m4name="<%=zIdWorkItem%>" jsafe="true" htmlsafe="true"/>','set');m4valor('oculto2','<%=zProcessNameItem%>','<m4:item m4name="<%=zProcessName%>" jsafe="true" htmlsafe="true"/>','set');m4submit('oculto2');return false;"><m4:item m4name="<%=zProcessName%>" htmlsafe="true"/></a></td>
<%}%>
    <m4:item m4name = "<%=zRemindDate%>" typename="date" m4varname="zvarRemindDate"/>
	<m4:item m4name = "<%=zRemindDate%>" m4varname="zvarRemindDateTime"/>
	<% if (zvarRemindDateTime != null){
   	   int iIndex = zvarRemindDateTime.indexOf(" ");
    	   if (iIndex != -1){zRemindDateFormatted = zvarRemindDate + " " + zvarRemindDateTime.substring(iIndex+1);}
	   }
	%>
	<td class="valor<%=zpos%>">&nbsp;<m4:item m4name="<%=zNTask%>" htmlsafe="true"/></td>
	<td class="valor<%=zpos%>">&nbsp;<m4:item m4name="<%=zReminderText%>" htmlsafe="true"/></td>
	<td class="valor<%=zpos%>">&nbsp;<%=zRemindDateFormatted%></td>
	<td class="valor<%=zpos%>">&nbsp;</td>
</tr>
</tr>
</m4:loop>
</tbody></table>

<%@ include file="../shco_g0/shco_gen_vent_post.jsp" %><%}else{%>
<tr><td class="fuentenodatos" colspan="5"><%@ include file="../shco_g0/shco_gen_list_nodata.jsp" %></td></tr>
</tbody></table><%}%>
</form>	
</body><%if (zpag.equals("0")== false){%><%@ include file="../shco_g0/shco_gen_disclaimer.jsp" %><%}else{%><m4:endpage/></div><%}%>
</html>

