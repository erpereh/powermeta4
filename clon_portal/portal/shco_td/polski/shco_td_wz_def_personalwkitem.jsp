<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_td_wz_def_personalwkitem.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="../../shco_g0/shco_gen_taglib.jsp" %>
<html><head><title></title>
<%@ include file="../../shco_g0/shco_gen_arg.jsp" %>
<%@ include file="../../shco_g0/shco_gen_bag.jsp" %>
<%@ include file="../../shco_g0/shco_gen_css.jsp" %>
<%@ include file="../../shco_g0/shco_gen_tec_include.jspf" %>
<%@ include file="../../shco_td/shco_td_wz_def_personal_wkitem_m4def.jsp" %>
<%// Parámetros del M4Object:
	zcarril="/servlet/CheckSecurity/JSP/shco_td/shco_td_list_remind_workitem.jsp?zpag=shco_td/shco_td_wz_def_personalwkitem.jsp&znw=0";

//Recuperacion del parámetro enviado por la lista
String zSHCO_ID_WORKITEM = request.getParameter("ID_WORKITEM");
//Recoge si es nuevo, para habilitar o no la Pk
String znw	= request.getParameter("znw");
if ((znw==null)||(znw.equals(""))){znw = "0";}
 
//****************************************************************
// *MODIFICABLE
zventanas = "10";													    
zvuelta = 5;															
String zdireccion = "shco_td_wz_def_remindworkitem.jsp";	   					
String zredireccion = "shco_td/shco_td_wz_def_personalwkitem.jsp";	


/******************************************************************************************/
// *NO MODIFICABLE
int zLoadTypeStep = 1;         // Tipo de carga 
int zIndexWizard  = 0;         // Indice de control
/******************************************************************************************/                                                     

//*****************************************************************************************/
// *MODIFICABLE
String znodoview  = "SHCO_TD_WZ_REMIND_WORKITEM";
/*************
******************************************************************************/%>

		  
<%@ include file="../../shco_g0/shco_gen_wz_def.jsp" %>
<%@ include file="../../shco_g0/shco_gen_wz_js.jsp" %>
<%@ include file="../../shco_g0/shco_gen_datadef.jsp" %>
<%try {	
	 M4Operations m = new M4Operations(request);
	 //Si no hay dato por el que filtrar es que venimos y no es nuevo es que venimos del otro
	 // paso del wizard con lo cual no hay que hacer setItem pq ya lo tenemos y sino lo machacamos
	 if (znw.equals("0") && (zSHCO_ID_WORKITEM != null) && (!zSHCO_ID_WORKITEM.equals(""))){	 
   	    m.setItem(zsubsesion,znodoraiz,"","SHCO_ID_WORKITEM",zSHCO_ID_WORKITEM);
	 }else if (znw.equals("1")){
	 	m.setItem(zsubsesion,znodoraiz,"","SHCO_ID_WORKITEM",null);   
	 }
}catch(Exception e) {}
%>
<%//guardar el valor de los parametros si corresponde %>
<%@ include file="../../shco_td/shco_td_save_wkitemparams.jsp" %>
<%@ include file="../../shco_g0/shco_gen_wz_act.jsp" %>
<%@ include file="../../shco_td/shco_td_wz_outputdef_personal_workitems.jsp" %>
<%

String zIdWorkItemItem = "ID_WORKITEM";								
String zProcessNameItem = "N_BPO";
String zInitDateItem = "DT_INSTANTIATION";
String zRemindDateItem = "DT_REMINDER";	
String zProcessTypeItem="ID_TYPE";
String zReminderTextItem="AUX_VAL_2";
String zLabelRemindInfoItem = "SHCO_LB_REMIND_INFO";
String zRemindHourItem="SHCO_DT_REMINDER_HOUR";
String zInitHourItem="SHCO_DT_INSTANTIATION_HOUR";
String zTaskNameItem = "N_BP";
String zIdTaskItem = "ID_TASK";

//Identificadores items
String zIdWorkItemItemr = zraiz + zIdWorkItemItem;								
String zProcessNameItemr = zraiz + zProcessNameItem;
String zInitDateItemr = zraiz + zInitDateItem;
String zRemindDateItemr = zraiz + zRemindDateItem;
String zRemindDateItemc = zcomun + zRemindDateItem;	
String zProcessTypeItemr= zraiz + zProcessTypeItem;
String zReminderTextItemr= zraiz + zReminderTextItem;
String zRemindHourItemr = zraiz + zRemindHourItem;
String zInitHourItemr = zraiz+zInitHourItem;
String zLabelRemindInfoItemr = zraizlabel + zLabelRemindInfoItem;
String zTaskNameItemr = zraiz + zTaskNameItem;
String zIdTaskItemr = zraiz + zIdTaskItem;

String zREMINDER_WITHOUT_BP ="4";
String zREMINDER_WITH_BP ="2";


%>
<%@ include file="../../shco_g0/shco_gen_wz_nav.jsp" %>
<script type="text/javascript" src="/library/m4valdata.js"></script>
<script type="text/javascript" language="Javascript1.5">
function val(){
	var sfunciones ="";
	sfunciones = "m4valinput('_alfanum_oblig','NombreFormulario','<%=zProcessNameItem%>',1,'<m4:label m4name="<%=zProcessNameItemr%>" jsafe="true"/>')";
	sfunciones = sfunciones+"*"+"m4valinput('_alfanum','NombreFormulario','<%=zTaskNameItem%>',1,'<m4:label m4name="<%=zTaskNameItemr%>" jsafe="true"/>')";
	sfunciones = sfunciones+"*"+"m4valinput('_date_oblig','NombreFormulario','<%=zRemindDateItem%>',1,'<m4:label m4name="<%=zRemindDateItemr%>" jsafe="true"/>',sformatofechas)";
	sfunciones = sfunciones+"*"+"m4valinput('_time_sec_oblig','NombreFormulario','<%=zRemindHourItem%>',1,'<m4:label m4name="<%=zRemindHourItemr%>" jsafe="true"/>')";
	sfunciones = sfunciones+"*"+"m4valinput('_comentario','NombreFormulario','<%=zReminderTextItem%>',256,'<m4:label m4name="<%=zReminderTextItemr%>" jsafe="true"/>')";
	
	
	
	var verr=m4valform(sfunciones);
	if (verr == 1) {
	    //si es nuevo establecemos la fecha de instanciacion
		var sznw = '<%=znw%>';
		if (sznw =="1"){
	 			m4valor('NombreFormulario','<%=zInitDateItem%>',m4today(),'set');
	 			m4valor('NombreFormulario','<%=zInitHourItem%>',m4now(),'set');
		}
		

		
		m4submit('NombreFormulario');
	}
}


function m4nothing(){}
</script>
</head><body>
<%@include file="../../shco_g0/shco_gen_title.jsp" %>
<%@ include file="../../shco_g0/shco_gen_menusup.jsp" %><%@include file="../../shco_g0/shco_gen_wz_error.jsp" %>
<div id="capa_link" style="position:absolute; left:0%; top:0%; width:20%; height:0%; z-index:1">
<%@ include file="../../shco_g0/shco_gen_wz_menu.jsp" %>
</td></tr></table>
<!------------------------------------ -->
</div>
<div id="capa_cuerpo" style="position:relative; left:21%; top:0%; width:78%; z-index:2">
<%
String zvalue = "";
String zhelp="SHCO_TD_WZ_DEF_PERSONALWKITEM.htm";
zCol =5;
%>
<%@ include file="../../shco_g0/shco_gen_cab.jsp" %>
<form action="<%=path%><%=links[zIndexWizard]%>" method="post" name="NombreFormulario" id="NombreFormulario" >
<input type="hidden" id="TAG" name="TAG" value="<%=zsubsesion%>" />
<input type="hidden" id="ACC" name="ACC" value="01" /> 
<input type="hidden" id="NOD" name="NOD" value="<%=znodoview%>" />
<input type="hidden" id="WZINDEX" name="WZINDEX" value="<%=zIndexWizard%>" />
<input type="hidden" id="LOADTYPE" name="LOADTYPE" value="<%=loadtype[zIndexWizard]%>" />
<input type="hidden" id="zredireccion" name="zredireccion" value="<%=zredireccion%>" />
<input type="hidden" id="SHCO_ORDINAL" name="SHCO_ORDINAL" value="-1" />
<input type="hidden" id="SHCO_STATE" name="SHCO_STATE" value="N" />
<input type="hidden" id="<%=zInitDateItem%>" name="<%=zInitDateItem%>" value="<m4:item m4name="<%=zInitDateItemr%>" typename="date" htmlsafe="true"/>" />
<input type="hidden" id="<%=zInitHourItem%>" name="<%=zInitHourItem%>" value="<m4:item m4name="<%=zInitHourItemr%>" htmlsafe="true"/>" />

   
   
<table class="form" width="100%" cellspacing="2" border="2">
<thead>
 <tr class="titulo">
  <%if (zcount>0){%>
  <th colspan="7" id="m4tit" >&nbsp;<%=steps[zIndexWizard]%></th>
  <th colspan="1">&nbsp;<a title="<m4:label m4name="<%=zSHCOLBDEL%>" htmlsafe="true"/> <%=steps[zIndexWizard]%>" 	href="javascript:m4wzeliminar();"> <img alt="<m4:label m4name="<%=zSHCOLBDEL%>" htmlsafe="true"/>" <%@ include file="../../files_gif/ic_bor.jsp" %> /> </a></th>
  <%}else{%>
  <th colspan="8" id="m4tit" >&nbsp;<%=steps[zIndexWizard]%></th>
  <%}%>
  </tr>

</thead>
<tbody>
<tr>
	<td colspan="1" class="campo">&nbsp;*&nbsp;<m4:label m4name="<%=zProcessNameItemr%>" htmlsafe="true"/></td>
	<td class="valor" colspan="7">
	<input type="hidden" class="form" name="X<%=zIdWorkItemItem%>" id="X<%=zIdWorkItemItem%>" value="<m4:item m4name="<%=zIdWorkItemItemr%>" htmlsafe="true"/>" />
	<input tabindex="<%=(zTab + 1)%>"class="form" type="text" name="<%=zProcessNameItem%>" id="<%=zProcessNameItem%>" title="<m4:label m4name="<%=zProcessNameItemr%>" htmlsafe="true"/>" maxlength="50" size="40" value="<m4:item m4name="<%=zProcessNameItemr%>" htmlsafe="true"/>" />&nbsp;
	</td>
</tr>
<tr>	
	<td colspan="1" class="campo">&nbsp;&nbsp;&nbsp;<m4:label m4name="<%=zTaskNameItemr%>" htmlsafe="true"/></td>
	<td class="valor" colspan="7">
	<input tabindex="<%=(zTab + 1)%>" readonly="readonly" class="form" type="text" name="<%=zIdTaskItem%>" id="<%=zIdTaskItem%>" size="30" maxlength="30" 
          onblur="m4translatelist('shco_td/shco_td_xml_th_task.jsp','shco_td/shco_td_list_th_task.jsp',
                new Array('<%=zIdTaskItem%>'),
                new Array('<%=zTaskNameItem%>'));"      
          value="<m4:item m4name="<%=zIdTaskItemr%>" htmlsafe="true"/>" />
	<input class="disabled" type="text" name="<%=zTaskNameItem%>" id="<%=zTaskNameItem%>" size="30" maxlength="50" title="<m4:label m4name="<%=zTaskNameItemr%>" htmlsafe="true"/>" disabled="disabled"         
        value="<m4:item m4name="<%=zTaskNameItemr%>" htmlsafe="true"/>" />&nbsp;
	<a tabindex="<%=(zTab + 1)%>" title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/><m4:label m4name="<%=zTaskNameItemr%>" htmlsafe="true"/>"
		href="javascript:m4filtro('shco_td/shco_td_list_th_task.jsp','<%=zIdTaskItem%>','<%=zTaskNameItem%>')">
		<img alt="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/> <m4:label m4name="<%=zTaskNameItemr%>" htmlsafe="true"/>" <%@ include file="../../files_gif/ic_list.jsp"%>  />
	</a>
	</td>
</tr>
<tr>
	<td colspan="1" >&nbsp;*&nbsp;<m4:label m4name="<%=zRemindDateItemr%>" htmlsafe="true"/></td>
	<td colspan="7"" class="valor"><input tabindex="<%=(zTab + 1)%>"class="form" type="text" name="<%=zRemindDateItem%>" id="<%=zRemindDateItem%>" title="<m4:label m4name="<%=zRemindDateItemr%>" htmlsafe="true"/>" maxlength="10" size="10" value="<m4:item m4name="<%=zRemindDateItemr%>" typename="date" htmlsafe="true"/>" /><a tabindex="<%=(zTab + 1)%>"href="javascript:m4calendar(m4objeto('NombreFormulario','<%=zRemindDateItem%>'));" ><img <%@ include file="../../files_gif/ic_cal.jsp" %> alt="<m4:label m4name="<%=zRemindDateItemr%>" htmlsafe="true"/>" /></a>
	 <% if (znw.equals("1")){ %>
      <script type="text/javascript">
	  		  m4valor('NombreFormulario','<%=zRemindDateItem%>',m4today(),'set');
	  </script>
	<%}%>	
</tr>
<tr> 		
	<td colspan="1" >&nbsp;*&nbsp;<m4:label m4name="<%=zRemindHourItemr%>" htmlsafe="true"/></td>
	<td colspan="7" class="valor"><input tabindex="<%=(zTab + 1)%>"class="form" type="text" name="<%=zRemindHourItem%>" id="<%=zRemindHourItem%>" title="<m4:label m4name="<%=zRemindHourItemr%>" htmlsafe="true"/>" maxlength="10" size="10" value="<m4:item m4name="<%=zRemindHourItemr%>" htmlsafe="true"/>" /></td>
    <% if (znw.equals("1")){ %>
      <script type="text/javascript">
	  		  m4valor('NombreFormulario','<%=zRemindHourItem%>',m4now(),'set');
	  </script>
	<%}%>	
</tr>
<tr>
	<td colspan="8" >&nbsp;&nbsp;<m4:label m4name="<%=zLabelRemindInfoItemr%>" htmlsafe="true"/></td>
</tr>
<tr>
	<td colspan="8" >&nbsp;<textarea tabindex="<%=(zTab + 1)%>"  class="form"type="text" id="<%=zReminderTextItem%>" name="<%=zReminderTextItem%>" size="70" maxlength="62"> <m4:item m4name="<%=zReminderTextItemr%>" htmlsafe="true"/></textarea></td>
</tr>

<%@ include file="../../shco_g0/shco_gen_wz_btt.jsp" %>
</tbody></table></form>
<script type="text/javascript" language="Javascript1.5">
m4tabfocus('NombreFormulario',1);m4setstatus();
</script>
<%@ include file="../../shco_g0/shco_gen_error.jsp" %>
<%}%>
<%@ include file="../../shco_g0/shco_gen_disclaimer.jsp" %>
</body></html>