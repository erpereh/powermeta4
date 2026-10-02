<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_td_list_assign_workitem.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="../shco_g0/shco_gen_taglib.jsp" %><html><head><%@ include file="../shco_g0/shco_gen_bag.jsp" %><%@ include file="../shco_g0/shco_gen_css.jsp" %><%@ include file="../shco_g0/shco_gen_list_arg.jsp" %>
<%@ include file="../shco_g0/shco_gen_tec_include.jspf" %>
<%
String zpag = request.getParameter("zpag");
if ((zpag==null)||(zpag.equals(""))){zpag = "0";}//
String znw = request.getParameter("znw");
if ((znw==null)||(znw.equals(""))){if ((zpag=="0")||(zpag.equals("0"))){znw = "0";}else{znw = "1";}}
String znew = "shco_td/shco_td_wz_wkitem.jsp";
if (!zpag.equals("0")){znew=zpag;}
znw="1";

// Parámetros del M4Object:
String zsubsesion = "SHCO_TD_MT_ASG_WKLIST";
String zm4object = zsubsesion;
String znodo = zm4object;

zventanas = "20";													//*MODIFICABLE
zvuelta = 5;															//*MODIFICABLE
String zdireccion = "shco_td/shco_td_list_assign_workitem.jsp";								//*MODIFICABLE

//escribe el nombre  de esta pag. 
String zredireccion = "shco_td_list_assign_workitem.jsp";
  
// Items que vamos a utilizar (visualizar o requeridos en una acción):
String zIdWorkItemItem = "ID_WORKITEM";											//*MODIFICABLE
String zProcessNameItem = "N_BPO";
String zInitDateItem = "DT_INSTANTIATION";
String zEndDateItem = "DT_DEADLINE";
String zDeadLineDateItem = "DT_DEADLINE";
String zIdTaskItem = "ID_TASK";
String zNTaskItem="N_BP";
String zProcessTypeItem="ID_TYPE";
String zLabelExecuteItem="SHCO_LB_EXECUTE";

// Indica el campo por el que ordenas en la TI y si es asc o desc
if ((zOrdenCampo==null)||(zOrdenCampo.equals(""))){zOrdenCampo = zInitDateItem;}
if ((zOrden==null)||(zOrden.equals(""))){zOrden = "1";}
%><%@ include file="../shco_g0/shco_gen_list_preload.jsp" %>
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

String zIdType = zcomun + zProcessTypeItem;
String zlIdType = zraiz + zProcessTypeItem;
String zlLabelExecute =zraiz +zLabelExecuteItem;



   
   
      
%></head><body>
<%@ include file="../shco_g0/shco_gen_datadef.jsp" %>
<%@ include file="../shco_g0/shco_gen_exec.jsp" %><%@ include file="../shco_g0/shco_gen_list_filter.jsp" %><%@ include file="../shco_g0/shco_gen_list_outputdef.jsp" %><%@ include file="../shco_g0/shco_gen_list_count.jsp" %>
<%@include file="../shco_g0/shco_gen_title.jsp" %>
<%if (zpag.equals("0")== false){%><%@ include file="../shco_g0/shco_gen_menusup.jsp" %><%}%>
<h2><m4:label m4name="<%=zSHCOLBTITLE%>" htmlsafe="true"/></h2>

<%@include file="../shco_g0/shco_gen_list_filt.jsp" %>

<form action="/servlet/CheckSecurity/JSP/shco_td/shco_td_exec_process.jsp" method="post" name="formexec" id="formexec" >
<input type="hidden" id="<%=zIdWorkItemItem%>" name="<%=zIdWorkItemItem%>" value=""  />
<input type="hidden" id="<%=zIdTaskItem%>" name="<%=zIdTaskItem%>" value=""  />
<input type="hidden" id="<%=zProcessTypeItem%>" name="<%=zProcessTypeItem%>" value=""  />
</form>

<form action="/servlet/CheckSecurity/JSP/<%=zpag%>" method="post" name="oculto2" id="oculto2" >
<input type="hidden" id="<%=zIdWorkItem%>" name="<%=zIdWorkItem%>" value=""  />
<input type="hidden" id="<%=zProcessName%>" name="<%=zProcessName%>" value=""  />
</form>
<table class="datos" width="100%" cellpadding="0" cellspacing="0">
 <thead> <tr class="titulo">
    <th>&nbsp;</th>
    <th><a name="filter"><%if ((zOrdenCampo==zProcessNameItem)||(zOrdenCampo.equals(zProcessNameItem))){if ((zOrden=="1")||(zOrden.equals("1"))){%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlProcessName%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zProcessNameItem%>');" <%@ include file="../files_gif/ic_ord_1.jsp" %>  /><%}else if ((zOrden=="2")||(zOrden.equals("2"))){%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlProcessName%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zProcessNameItem%>');" <%@ include file="../files_gif/ic_ord_2.jsp" %>  /><%}%><%} else{%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlProcessName%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zProcessNameItem%>');" <%@ include file="../files_gif/ic_ord.jsp" %>  /><%}%></a>&nbsp;<m4:label m4name="<%=zlProcessName%>" htmlsafe="true"/></th>
	<th><a name="filter"><%if ((zOrdenCampo==zNTaskItem)||(zOrdenCampo.equals(zNTaskItem))){if ((zOrden=="1")||(zOrden.equals("1"))){%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlNTask%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zNTaskItem%>');" <%@ include file="../files_gif/ic_ord_1.jsp" %>  /><%}else if ((zOrden=="2")||(zOrden.equals("2"))){%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlNTask%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zNTaskItem%>');" <%@ include file="../files_gif/ic_ord_2.jsp" %>  /><%}%><%} else{%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlNTask%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zNTaskItem%>');" <%@ include file="../files_gif/ic_ord.jsp" %>  /><%}%></a>&nbsp;<m4:label m4name="<%=zlNTask%>" htmlsafe="true"/></th>
    <th><a name="filter"><%if ((zOrdenCampo==zInitDateItem)||(zOrdenCampo.equals(zInitDateItem))){if ((zOrden=="1")||(zOrden.equals("1"))){%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlInitDate%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zInitDateItem%>');" <%@ include file="../files_gif/ic_ord_1.jsp" %>  /><%}else if ((zOrden=="2")||(zOrden.equals("2"))){%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlInitDate%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zInitDateItem%>');" <%@ include file="../files_gif/ic_ord_2.jsp" %>  /><%}%><%} else{%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlInitDate%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zInitDateItem%>');" <%@ include file="../files_gif/ic_ord.jsp" %>  /><%}%></a>&nbsp;<m4:label m4name="<%=zlInitDate%>" htmlsafe="true"/></th>
    <th><a name="filter"><%if ((zOrdenCampo==zEndDateItem)||(zOrdenCampo.equals(zEndDateItem))){if ((zOrden=="1")||(zOrden.equals("1"))){%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlDeadLineDate%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zEndDateItem%>');" <%@ include file="../files_gif/ic_ord_1.jsp" %>  /><%}else if ((zOrden=="2")||(zOrden.equals("2"))){%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlDeadLineDate%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zEndDateItem%>');" <%@ include file="../files_gif/ic_ord_2.jsp" %>  /><%}%><%} else{%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlDeadLineDate%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zEndDateItem%>');" <%@ include file="../files_gif/ic_ord.jsp" %>  /><%}%></a>&nbsp;<m4:label m4name="<%=zlDeadLineDate%>" htmlsafe="true"/></th>
    <%@ include file="../shco_g0/shco_gen_pest.jsp" %>
    
  </tr></thead>
  <tbody>
  
  
  
<% if (zcount>0){%>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>"><%@ include file="../shco_g0/shco_gen_loop.jsp" %>
<tr>
   <td class="boton<%=zpos%>"><a title="<m4:label m4name="<%=zlLabelExecute%>" htmlsafe="true"/>" href="" 
      onclick="execProcess('<m4:item m4name="<%=zIdWorkItem%>" jsafe="true" htmlsafe="true"/>',
	             '<m4:item m4name="<%=zIdTask%>" jsafe="true" htmlsafe="true"/>',
				 '<m4:item m4name="<%=zIdType%>" jsafe="true" htmlsafe="true"/>');return false;"/>
				 <img alt="<m4:label m4name="<%=zlLabelExecute%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_executed_task.jsp" %>/></a>
    </td>

<%if ((zpag=="0")||(zpag.equals("0"))){%>
<td class="valor<%=zpos%>">&nbsp;<a tabindex="8+zpos"title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/>" href="" onclick="var aval=new Array();aval[0]='<m4:item m4name="<%=zIdWorkItem %>" jsafe="true" htmlsafe="true"/>';aval[1]='<m4:item m4name="<%=zProcessName%>" jsafe="true" htmlsafe="true"/>';m4returnvalues(aval);return false;"><m4:item m4name="<%=zProcessName%>" htmlsafe="true"/></a></td>
<%}else{%>
<td class="valor<%=zpos%>">&nbsp;<m4:item m4name="<%=zProcessName%>" htmlsafe="true"/></td>
<%}%>
      <td class="valor<%=zpos%>">&nbsp;<m4:item m4name="<%=zNTask%>" htmlsafe="true"/></td>
	  <td class="valor<%=zpos%>">&nbsp;<m4:item m4name="<%=zInitDate%>" htmlsafe="true"/></td>
	  <td class="valor<%=zpos%>"colspan="3">&nbsp;<m4:item m4name="<%=zDeadLineDate%>" htmlsafe="true"/></td>
</tr>
</tr>
</m4:loop>
</tbody></table>
<%@ include file="../shco_g0/shco_gen_vent_post.jsp" %><%}else{%>
<tr><td class="fuentenodatos" colspan="5"><%@ include file="../shco_g0/shco_gen_list_nodata.jsp" %></td></tr>
</tbody></table><%}%>	
</body><%if (zpag.equals("0")== false){%><%@ include file="../shco_g0/shco_gen_disclaimer.jsp" %><%}else{%><m4:endpage/></div><%}%>
</html>

