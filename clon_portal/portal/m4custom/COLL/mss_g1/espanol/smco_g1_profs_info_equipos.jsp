<%

   String Equiposubsesion = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
   String Equiponodo = "SMCO_PROFS_INFO_WORK_TEAMS";
   String Equipocomun = Equiposubsesion + "!" + Equiponodo + "[&VAR.m4lix]" + ".";

   String EquipoSSMTEAMINFO = Equipocomun + "SCO_NM_TEAM";
   String EquipoSSMROLETEAMINFO = Equipocomun + "SCO_NM_TEAM_ROLE";
   String EquipoSSMROLEINFO = Equipocomun + "SCO_N_ROLE";
   String EquipoSCODTSTART = Equipocomun + "SCO_DT_START";
   String EquipoSCODTEND = Equipocomun + "SCO_DT_END";
   String EquipoSCOMAINROLE = Equipocomun + "SCO_MAIN_ROLE";

	int  Equipocounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    Equipocounti = m.getCountInClient("",Equiposubsesion,Equiponodo);
	} catch(Exception e) {}

	String	Equipocountv = String.valueOf(Equipocounti);
	if (Equipocounti > 0){


%>
<div class="invisible2" id="<%=Equiponodo%>" name="<%=Equiponodo%>"  style="position: relative; top: 0; left: 0" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};">&nbsp;
<table class="barraregistros"><tr><td width="300">&nbsp;<a style="cursor:hand" onclick="javascript:uncheck('<%=Equiponodo%>');" title='<%=ProfCv.getProperty("prof_cv.Title8")%>'><b><u><%=ProfCv.getProperty("prof_cv.Label10")%></b></u></a></td></tr></table>
<table width="100%" cellspacing="0" class="barraregistros">
	<tr>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=EquipoSSMTEAMINFO%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=EquipoSSMROLEINFO%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=EquipoSCOMAINROLE%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=EquipoSSMROLETEAMINFO%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=EquipoSCODTSTART%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=EquipoSCODTEND%>"/></td>
	</tr>
	<%
		String Equipoposicions = "0";
		int Equipocontrol = 0;
		int Equipoposicion =0;
		String  EquipoPaint="";
		String  EquipoPaintRojo="";
	%>
	<m4:loop from="0" to="<%=new Integer(new Integer(Equipocountv).intValue()-1).toString()%>">
	<%
		Equipoposicions = m4lix;
		Equipoposicion = Integer.valueOf(Equipoposicions).intValue();
	 	Equipocontrol = Equipoposicion%2;
		if (Equipocontrol==0){EquipoPaint="fuentevalor";}else{EquipoPaint="fuentevaloralter";}
		if (Equipocontrol==0){EquipoPaintRojo="fuentevalorojo";}else{EquipoPaintRojo="fuentevaloralterojo";}
	%>

	<m4:item m4varname="main_role" m4name="<%=EquipoSCOMAINROLE%>"/>
	<tr>
		<td class="<%=EquipoPaint%>">&nbsp;<m4:item m4name="<%=EquipoSSMTEAMINFO%>"/></td>
		<td class="<%=EquipoPaint%>">&nbsp;<m4:item m4name="<%=EquipoSSMROLEINFO%>"/></td>

		<% if(main_role.equals("1")) { %>
			<td class="<%=EquipoPaintRojo%>">&nbsp;<b><%=ProfCv.getProperty("prof_cv.Label2")%></b></td>
		<%}else{%>
			<td class="<%=EquipoPaint%>">&nbsp;<%=ProfCv.getProperty("prof_cv.Label3")%></td>
		<%}%>

		<td class="<%=EquipoPaint%>">&nbsp;<m4:item m4name="<%=EquipoSSMROLETEAMINFO%>"/></td>
		<td class="<%=EquipoPaint%>">&nbsp;<m4:item m4name="<%=EquipoSCODTSTART%>"/></td>
		<td class="<%=EquipoPaint%>">&nbsp;<m4:item m4name="<%=EquipoSCODTEND%>"/></td>
	</tr>
	</m4:loop>	
</table>
</div>
<%}%>