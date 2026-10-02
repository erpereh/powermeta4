<%

   String Preferenciassubsesion = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
   String Preferenciasnodo = "SMCO_PROFS_INFO_PREFERENCES";
   String Preferenciascomun = Preferenciassubsesion + "!" + Preferenciasnodo + "[&VAR.m4lix]" + ".";

   String PreferenciasSCOPREFPRIORITY = Preferenciascomun + "SCO_PREF_PRIORITY";
   String PreferenciasSSMWUINTID = Preferenciascomun + "STD_ID_WORK_UNIT";
   String PreferenciasSSMWUINTNAME = Preferenciascomun + "STD_N_WORK_UNIT";
   String PreferenciasSSMJOBID = Preferenciascomun + "STD_ID_JOB_CODE";
   String PreferenciasSSMJOBNAME = Preferenciascomun + "STD_N_JOB_CODE";
   String PreferenciasSCOCKNATINT = Preferenciascomun + "SCO_CK_NAT_INT";
   String PreferenciasSCOPREFERENCES = Preferenciascomun + "SCO_PREFERENCES";
   String PreferenciasSMCOSITE = Preferenciascomun + "SMCO_SITE";
   String PreferenciasDTSTART = Preferenciascomun + "DT_START";
   String PreferenciasDTEND = Preferenciascomun + "DT_END";

	int  Preferenciascounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    Preferenciascounti = m.getCountInClient("",Preferenciassubsesion,Preferenciasnodo);
	} catch(Exception e) {}

	String	Preferenciascountv = String.valueOf(Preferenciascounti);
	if (Preferenciascounti > 0){

%>
<div class="invisible2" id="<%=Preferenciasnodo%>" name="<%=Preferenciasnodo%>"  style="position: relative; top: 0; left: 0" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};">&nbsp;
<table class="barraregistros"><tr><td width="300">&nbsp;<a style="cursor:hand" onclick="javascript:uncheck('<%=Preferenciasnodo%>');" title='<%=ProfCv.getProperty("prof_cv.Title8")%>'><b><u><%=ProfCv.getProperty("prof_cv.Label12")%></b></u></a></td></tr></table>
<table width="100%" cellspacing="0" class="barraregistros">
	<tr>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PreferenciasSCOPREFPRIORITY%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PreferenciasDTSTART%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PreferenciasDTEND%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PreferenciasSSMWUINTNAME%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PreferenciasSSMJOBNAME%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PreferenciasSMCOSITE%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PreferenciasSCOCKNATINT%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PreferenciasSCOPREFERENCES%>"/></td>
	</tr>
	<%
		String Preferenciasposicions = "0";
		int Preferenciascontrol = 0;
		int Preferenciasposicion =0;
		String  PreferenciasPaint="";
		String  PreferenciasPaintRojo="";
	%>
	<m4:loop from="0" to="<%=new Integer(new Integer(Preferenciascountv).intValue()-1).toString()%>">
	<%
		Preferenciasposicions = m4lix;
		Preferenciasposicion = Integer.valueOf(Preferenciasposicions).intValue();
	 	Preferenciascontrol = Preferenciasposicion%2;
		if (Preferenciascontrol==0){PreferenciasPaint="fuentevalor";}else{PreferenciasPaint="fuentevaloralter";}
		if (Preferenciascontrol==0){PreferenciasPaintRojo="fuentevalorojo";}else{PreferenciasPaintRojo="fuentevaloralterojo";}
	%>
	<m4:item m4varname="movilidad" m4name="<%=PreferenciasSCOCKNATINT%>"/>
	<m4:item m4varname="idwunit" m4name="<%=PreferenciasSSMWUINTID%>"/>
	<m4:item m4varname="idjob" m4name="<%=PreferenciasSSMJOBID%>"/>
	<tr>
		<td class="<%=PreferenciasPaint%>">&nbsp;<m4:item m4name="<%=PreferenciasSCOPREFPRIORITY%>"/></td>
		<td class="<%=PreferenciasPaint%>">&nbsp;<m4:item m4name="<%=PreferenciasDTSTART%>"/></td>
		<td class="<%=PreferenciasPaint%>">&nbsp;<m4:item m4name="<%=PreferenciasDTEND%>"/></td>
		<td class="<%=PreferenciasPaint%>">&nbsp;<m4:item m4name="<%=PreferenciasSSMWUINTNAME%>"/>&nbsp;<%if (idwunit.equals("")){}else{%><b>(<m4:item m4name="<%=PreferenciasSSMWUINTID%>"/>)</b><%}%></td>
		<td class="<%=PreferenciasPaint%>">&nbsp;<m4:item m4name="<%=PreferenciasSSMJOBNAME%>"/>&nbsp;<%if (idjob.equals("")){}else{%><b>(<m4:item m4name="<%=PreferenciasSSMJOBID%>"/>)</b><%}%></td>
		<td class="<%=PreferenciasPaint%>">&nbsp;<m4:item m4name="<%=PreferenciasSMCOSITE%>"/></td>

		<% if(movilidad.equals("1")) { %>
			<td class="<%=PreferenciasPaintRojo%>">&nbsp;<b><%=ProfCv.getProperty("prof_cv.Label2")%></b></td>
		<%}else{%>
			<td class="<%=PreferenciasPaint%>">&nbsp;<%=ProfCv.getProperty("prof_cv.Label3")%></td>
		<%}%>

		<td class="<%=PreferenciasPaint%>"><m4:item m4name="<%=PreferenciasSCOPREFERENCES%>"/></td>
	</tr>
	</m4:loop>	
</table>
</div>
<%}%>