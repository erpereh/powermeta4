<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_td_wklist_f_block2.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<form action="/servlet/CheckSecurity/JSP/shco_td/shco_td_wz_def_personalwkitem.jsp" method="post" name="oculto2" id="oculto2" >
<input type="hidden" id="<%=zIdWorkItemItem%>" name="<%=zIdWorkItemItem%>" value=""  />
<input type="hidden" id="<%=zProcessNameItem%>" name="<%=zProcessNameItem%>" value=""  />
</form>

<form method="post" id="frmdeletewkitem" name="frmdeletewkitem" action="/servlet/CheckSecurity/JSP/shco_td/shco_td_delete_wkitem.jsp">
		<input type="hidden" id="<%=zIdWorkItemItem%>" name="<%=zIdWorkItemItem%>" value=""/>
		<input type="hidden" id="zsubsesion" name="zsubsesion" value="<%=zsubsesion%>" />
		<input type="hidden" id="zredireccion" name="zredireccion" value="<%=zredireccion%>" />
   	    <input type="hidden" id="znodowklist" name="znodowklist" value="<%=znodo2%>" />
		
</form>
<table class="datos" width="100%" cellspacing="0" border="1">
<thead>

<tr class="titulo"><th colspan="6">&nbsp;
      <m4:label m4name="<%=znamenodo2%>" htmlsafe="true"/>
</th></tr>

 <%if (z_portal_f.equals("0")){%>
  <tr class="titulo2">
  <th>&nbsp;</th>
  <th>&nbsp;<m4:label m4name="<%=zlProcessName2%>" htmlsafe="true"/></th>
  <th>&nbsp;<m4:label m4name="<%=zlNTask2%>" htmlsafe="true"/></th>
  <th>&nbsp;<m4:label m4name="<%=zlReminderText2%>" htmlsafe="true"/></th>
  <th>&nbsp;<m4:label m4name="<%=zlRemindDate2%>" htmlsafe="true"/></th>
  <th>&nbsp;</th>
  </tr>
  <%}%>

</thead>
<tbody>
<%
   String zsloopLimit2 = String.valueOf(zLocalCount2-1);
%>


<%if (zcount2==0){%>
       <tr class="valor"><td colspan="6"><m4:label m4name="<%=zlLabelNoPersTask%>" htmlsafe="true"/></td></tr>
<%}else{%>
  <m4:loop from="0" to="<%=zsloopLimit2%>">
  <m4:item m4name="<%=zIdType2%>" m4varname="zProcessType2"/>
  <m4:item m4name="<%=zReminderText2%>" m4varname="zDescripcion2"/>
  <tr class="valor">
    <td width="2%">
        <%if ((zProcessType2.equals("2"))||(zProcessType2=="2")){%>
        <a title="<m4:label m4name="<%=zlLabelExecute%>" htmlsafe="true"/>" href="" 
         onclick="execProcess('<m4:item m4name="<%=zIdWorkItem2%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zIdTask2%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zIdType2%>" jsafe="true" htmlsafe="true"/>','<%=znodo2%>');return false;">
  	   <img alt="<m4:label m4name="<%=zlLabelExecute%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_executed_task.jsp" %>/>
  	  </a>
   	  	<%}else{%>
  	    &nbsp;&nbsp;&nbsp;&nbsp;
  	   <%}%>	
    </td>
	
	<%if (z_portal_f.equals("1")){%>
    <td colspan="4">
  	<%}else{%>
	  <td>
	<%}%>
    <a tabindex="" title="<m4:label m4name="<%=zSHCOLBEDIT%>" htmlsafe="true"/>" href="" onclick="m4valor('oculto2','<%=zIdWorkItemItem%>','<m4:item m4name="<%=zIdWorkItem2%>" jsafe="true" htmlsafe="true"/>','set');m4valor('oculto2','<%=zProcessNameItem%>','<m4:item m4name="<%=zProcessName2%>" jsafe="true" htmlsafe="true"/>','set');m4submit('oculto2');return false;">
         &nbsp;<m4:item m4name="<%=zProcessName2%>" htmlsafe="true"/>
    </a></td>
    <%if (z_portal_f.equals("0")){%>
 	 <td>&nbsp;<m4:item m4name="<%=zNTask2%>" htmlsafe="true"/></td>
     <td>&nbsp;<m4:item m4name="<%=zReminderText2%>" htmlsafe="true"/></td>
     <td>&nbsp;<m4:item m4name="<%=zRemindDate2%>" htmlsafe="true"/></td>
    <%}%>
  
     <td class="boton1" width="2%"><a title="<m4:label m4name="<%=zSHCOLBDEL%>" htmlsafe="true"/>" href="" onclick="m4valor('frmdeletewkitem','<%=zIdWorkItemItem%>','<m4:item m4name="<%=zIdWorkItem2%>" jsafe="true" htmlsafe="true"/>','set');m4submit('frmdeletewkitem');return false;"><img alt="<m4:label m4name="<%=zSHCOLBDEL%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_bor.jsp" %> /></a>
     </td>
  </tr>
  </m4:loop>
  <%if (z_portal_f.equals("1") && (zcount2 > zLocalCount2)){%>
     <tr class="valor"><td colspan="6">
       <a title="<m4:label m4name="<%=zlLabelSeeMore%>" htmlsafe="true"/>" href="" 
		 onclick="m4navegar('/servlet/CheckSecurity/JSP/<%=zWklistPag%>');return false;">
        <m4:label m4name="<%=zlLabelSeeMore%>" htmlsafe="true"/>
  	  </a>
  	</td></tr> 
  <%}%>
<%}%>
</tbody></table><br />
