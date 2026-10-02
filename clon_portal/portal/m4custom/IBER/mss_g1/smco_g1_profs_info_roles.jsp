<%

   String Rolessubsesion = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
   String Rolesnodo = "SMCO_PROFS_INFO_ROLES";
   String Rolescomun = Rolessubsesion + "!" + Rolesnodo + "[&VAR.m4lix]" + ".";

   String RolesSSMROLEID = Rolescomun + "SCO_OR_HR_ROLE";
   String RolesSSMROLENAME = Rolescomun + "SCO_N_ROLE";
   String RolesSCODTSTART = Rolescomun + "SCO_DT_START";
   String RolesSCODTEND = Rolescomun + "SCO_DT_END";
   String RolesSCOMAINROLE = Rolescomun + "SCO_MAIN_ROLE";
   String RolesSCONMINTROLETYPEID = Rolescomun + "SCO_ID_INT_ROLE_TYPE";
   String RolesSCONMINTROLETYPENAME = Rolescomun + "SCO_NM_INT_ROLE_TYPE";
   String RolesSCONMREASONCHANGE = Rolescomun + "SCO_NM_REASON_CHANGE";

	int  Rolescounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    Rolescounti = m.getCountInClient("",Rolessubsesion,Rolesnodo);
	} catch(Exception e) {}

	String	Rolescountv = String.valueOf(Rolescounti);
	if (Rolescounti > 0){

%>
<div class="invisible2" id="<%=Rolesnodo%>" name="<%=Rolesnodo%>"  style="position: relative; top: 0; left: 0" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};">&nbsp;
<table class="barraregistros"><tr><td width="300">&nbsp;<a href="javascript:uncheck('<%=Rolesnodo%>');" title='<%=ProfCv.getProperty("prof_cv.Title8")%>'><b><u><%=ProfCv.getProperty("prof_cv.Label15")%></b></u></a></td></tr></table>
<table width="100%" cellspacing="0" class="barraregistros">
	<tr>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=RolesSSMROLENAME%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=RolesSCODTSTART%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=RolesSCODTEND%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=RolesSCOMAINROLE%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=RolesSCONMINTROLETYPENAME%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=RolesSCONMREASONCHANGE%>"/></td>
	</tr>
	<%
		String Rolesposicions = "0";
		int Rolescontrol = 0;
		int Rolesposicion =0;
		String  RolesPaint="";
		String  RolesPaintRojo="";

	%>
	<m4:loop from="0" to="<%=new Integer(new Integer(Rolescountv).intValue()-1).toString()%>">
	<%
		Rolesposicions = m4lix;
		Rolesposicion = Integer.valueOf(Rolesposicions).intValue();
	 	Rolescontrol = Rolesposicion%2;
		if (Rolescontrol==0){RolesPaint="fuentevalor";}else{RolesPaint="fuentevaloralter";}
		if (Rolescontrol==0){RolesPaintRojo="fuentevalorojo";}else{RolesPaintRojo="fuentevaloralterojo";}

	%>
	<m4:item m4varname="main_role" m4name="<%=RolesSCOMAINROLE%>"/>
	<tr>
		<td class="<%=RolesPaint%>">&nbsp;<m4:item m4name="<%=RolesSSMROLENAME%>"/></td>
		<td class="<%=RolesPaint%>">&nbsp;<m4:item m4name="<%=RolesSCODTSTART%>"/></td>
		<td class="<%=RolesPaint%>">&nbsp;<m4:item m4name="<%=RolesSCODTEND%>"/></td>

		<% if(main_role.equals("1")) { %>
			<td class="<%=RolesPaintRojo%>">&nbsp;<b><%=ProfCv.getProperty("prof_cv.Label2")%></b></td>
		<%}else{%>
			<td class="<%=RolesPaint%>">&nbsp;<%=ProfCv.getProperty("prof_cv.Label3")%></td>
		<%}%>

		<td class="<%=RolesPaint%>">&nbsp;<m4:item m4name="<%=RolesSCONMINTROLETYPENAME%>"/></td>
		<td class="<%=RolesPaint%>">&nbsp;<m4:item m4name="<%=RolesSCONMREASONCHANGE%>"/></td>
	</tr>
	</m4:loop>	
</table>
</div>
<%}%>