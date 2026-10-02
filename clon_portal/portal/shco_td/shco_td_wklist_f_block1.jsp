<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_td_wklist_f_block1.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<table class="datos" width="100%" cellspacing="0" border="1">
<thead><tr class="titulo"><th colspan="7">&nbsp;
     <m4:label m4name="<%=znamenodo1%>" htmlsafe="true"/>
</th></tr>
<%if (z_portal_f.equals("0")){%>
   <tr class="titulo2">
   <th>&nbsp;</th>
   <th>&nbsp;<m4:label m4name="<%=zlNTask1%>" htmlsafe="true"/></th>
   <th>&nbsp;<m4:label m4name="<%=zlStateDesc%>" htmlsafe="true"/></th>
   <th>&nbsp;<m4:label m4name="<%=zlInitDate1%>" htmlsafe="true"/></th>
   <th>&nbsp;<m4:label m4name="<%=zlDeadLineDate1%>" htmlsafe="true"/></th>
   </tr>
<%}%>
</thead>
<tbody>
<% String zsloopLimit1 = String.valueOf(zLocalCount1-1);%>
<%if (zcount1==0){%>
       <tr class="valor"><td colspan="7"><m4:label m4name="<%=zlLabelNoAsignTask%>" htmlsafe="true"/></td></tr>
<%}else{%>
  <m4:loop from="0" to="<%=zsloopLimit1%>">  
  <tr class="valor"> <td width="2%">
        <a title="<m4:label m4name="<%=zlLabelExecute%>" htmlsafe="true"/>" href="" 
          onclick="execProcess('<m4:item m4name="<%=zIdWorkItem1%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zIdTask1%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zIdType1%>" jsafe="true" htmlsafe="true"/>','<%=znodo1%>');return false;">
  	   <img alt="<m4:label m4name="<%=zlLabelExecute%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_executed_task.jsp" %>/></a>
   </td>
    <%if (z_portal_f.equals("1")){%>
    <td colspan="5"> &nbsp;<m4:item m4name="<%=zNTask1%>" htmlsafe="true"/></td>
    <%}else{%>
    <td>&nbsp;<m4:item m4name="<%=zNTask1%>" htmlsafe="true"/></td><td>&nbsp;<m4:item m4name="<%=zStateDesc%>" htmlsafe="true"/></td>
    <td>&nbsp;<m4:item m4name="<%=zInitDate1%>" htmlsafe="true"/></td><td>&nbsp;<m4:item m4name="<%=zDeadLineDate1%>" htmlsafe="true"/></td>
    <%}%>  		   
  </tr>
  </m4:loop>  
  <%if (z_portal_f.equals("1") && (zcount1 > zLocalCount1)){%>
     <tr class="valor"><td colspan="6">
       <a title="<m4:label m4name="<%=zlLabelSeeMore%>" htmlsafe="true"/>" href="" 
		 onclick="m4navegar('/servlet/CheckSecurity/JSP/<%=zWklistPag%>');return false;">
        <m4:label m4name="<%=zlLabelSeeMore%>" htmlsafe="true"/></a>
  	</td></tr> 
  <%}%>
<%}%>
</tbody></table><br/>
