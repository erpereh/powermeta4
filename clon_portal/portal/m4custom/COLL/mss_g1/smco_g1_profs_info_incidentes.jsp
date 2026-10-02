<%

   String Incidentessubsesion = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
   String Incidentesnodo = "SMCO_PROFS_INFO_INCIDENT_ACCNS";
   String Incidentescomun = Incidentessubsesion + "!" + Incidentesnodo + "[&VAR.m4lix]" + ".";

   String IncidentesSTDDTINCIDENT = Incidentescomun + "STD_DT_INCIDENT";
   String IncidentesSTDNINCIDENT_TYPE = Incidentescomun + "STD_N_INCIDENT_TYPE";
   String IncidentesSCOGBNAME_IMPLIEDID = Incidentescomun + "STD_ID_HR_IMPLIED";
   String IncidentesSCOGBNAME_IMPLIEDNAME = Incidentescomun + "SCO_GB_NAME";
   String IncidentesSTDDTEND = Incidentescomun + "STD_DT_END";
   String IncidentesSTDDTREPORTED = Incidentescomun + "STD_DT_REPORTED";
   String IncidentesSTDCOMMENT = Incidentescomun + "STD_COMMENT";
   String IncidentesSSMINCIDENTORACTION = Incidentescomun + "SMCO_INCIDENT_OR_ACTION";
   String IncidentesSTDNACTIONTYPE = Incidentescomun + "SMCO_N_ACTION_TYPE";
   String IncidentesSTDNACTENDTYPE = Incidentescomun + "SMCO_N_ACT_END_TYPE";
   String IncidentesSTDDTSTARTACTION = Incidentescomun + "SMCO_DT_START_ACTION";
   String IncidentesSTDDTENDACTION = Incidentescomun + "SMCO_DT_END_ACTION";
   String IncidentesSCONMACTCHGREAS = Incidentescomun + "SMCO_NM_ACT_CHG_REAS";

	int  Incidentescounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    Incidentescounti = m.getCountInClient("",Incidentessubsesion,Incidentesnodo);
	} catch(Exception e) {}

	String	Incidentescountv = String.valueOf(Incidentescounti);
	if (Incidentescounti > 0){

%>
<div class="invisible2" id="<%=Incidentesnodo%>" name="<%=Incidentesnodo%>"  style="position: relative; top: 0; left: 0" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};">&nbsp;
<table class="barraregistros"><tr><td width="300">&nbsp;<a href="javascript:uncheck('<%=Incidentesnodo%>');" title='<%=ProfCv.getProperty("prof_cv.Title8")%>'><b><u><%=ProfCv.getProperty("prof_cv.Label11")%></b></u></a></td></tr></table>
<table width="100%" cellspacing="0" class="barraregistros">
	<tr>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=IncidentesSTDDTINCIDENT%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=IncidentesSTDNINCIDENT_TYPE%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=IncidentesSCOGBNAME_IMPLIEDNAME%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=IncidentesSTDDTEND%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=IncidentesSTDDTREPORTED%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=IncidentesSTDCOMMENT%>"/></td>
	</tr>


	<%
		String Incidentesposicions = "0";
		String Incidentesfirst = "1";
		String acciones = "N";
		int Incidentescontrol = 0;
		int Incidentesposicion =0;
	%>
	<m4:loop from="0" to="<%=new Integer(new Integer(Incidentescountv).intValue()-1).toString()%>">

	<%
		Incidentesposicions = m4lix;
		Incidentesposicion = Integer.valueOf(Incidentesposicions).intValue();
	 	Incidentescontrol = Incidentesposicion%2;
	%>

	<m4:item m4varname="incidence_or_action" m4name="<%=IncidentesSSMINCIDENTORACTION%>"/>
	<m4:item m4varname="implied_person" m4name="<%=IncidentesSCOGBNAME_IMPLIEDID%>"/>

	<% if (incidence_or_action.equals("1")){ 
		Incidentesfirst = "1";
		if (acciones.equals("S")){%>
		<tr><td colspan="6"><hr width="100%"></td></tr>
		<%}acciones="N";%>

		<%if (Incidentescontrol==0){%>
			<tr>
				<td class="fuentevalor">&nbsp;<m4:item m4name="<%=IncidentesSTDDTINCIDENT%>"/></td>
				<td class="fuentevalor">&nbsp;<m4:item m4name="<%=IncidentesSTDNINCIDENT_TYPE%>"/></td>
				<%if (implied_person.equals("")){%>
					<td class="fuentevalor">&nbsp;<m4:item m4name="<%=IncidentesSCOGBNAME_IMPLIEDNAME%>"/>&nbsp;</td>
				<%}else{%>
					<td class="fuentevalor">&nbsp;<m4:item m4name="<%=IncidentesSCOGBNAME_IMPLIEDNAME%>"/>&nbsp;<b>(<m4:item m4name="<%=IncidentesSCOGBNAME_IMPLIEDID%>"/>)</b></td>
				<%}%>
				<td class="fuentevalor">&nbsp;<m4:item m4name="<%=IncidentesSTDDTEND%>"/></td>
				<td class="fuentevalor">&nbsp;<m4:item m4name="<%=IncidentesSTDDTREPORTED%>"/></td>
				<td class="fuentevalor" width="20%"><m4:item m4name="<%=IncidentesSTDCOMMENT%>"/></td>

			</tr>
		<%}else{%>
			<tr>
				<td class="fuentevaloralter">&nbsp;<m4:item m4name="<%=IncidentesSTDDTINCIDENT%>"/></td>
				<td class="fuentevaloralter">&nbsp;<m4:item m4name="<%=IncidentesSTDNINCIDENT_TYPE%>"/></td>
				<%if (implied_person.equals("")){%>
					<td class="fuentevaloralter">&nbsp;<m4:item m4name="<%=IncidentesSCOGBNAME_IMPLIEDNAME%>"/>&nbsp;</td>
				<%}else{%>
					<td class="fuentevaloralter">&nbsp;<m4:item m4name="<%=IncidentesSCOGBNAME_IMPLIEDNAME%>"/>&nbsp;<b>(<m4:item m4name="<%=IncidentesSCOGBNAME_IMPLIEDID%>"/>)</b></td>
				<%}%>
				<td class="fuentevaloralter">&nbsp;<m4:item m4name="<%=IncidentesSTDDTEND%>"/></td>
				<td class="fuentevaloralter">&nbsp;<m4:item m4name="<%=IncidentesSTDDTREPORTED%>"/></td>
				<td class="fuentevaloralter" width="20%"><m4:item m4name="<%=IncidentesSTDCOMMENT%>"/></td>
			</tr>
		<%}%>

	<%}else{ acciones="S";%>
		<% if (Incidentesfirst.equals("1")){%>
			<tr>
				<td class="tablaestadosceldatitulo">&nbsp;</td>
				<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=IncidentesSTDNACTIONTYPE%>"/></td>
				<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=IncidentesSTDNACTENDTYPE%>"/></td>
				<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=IncidentesSTDDTSTARTACTION%>"/></td>
				<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=IncidentesSTDDTENDACTION%>"/></td>
				<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=IncidentesSCONMACTCHGREAS%>"/></td>
			</tr>
		<%Incidentesfirst="2";}else{ Incidentesfirst="2";}%>

		<%if (Incidentescontrol==0){%>
			<tr>
				<td class="fuentevalor">&nbsp;</td>
				<td class="fuentevalor">&nbsp;<m4:item m4name="<%=IncidentesSTDNACTIONTYPE%>"/></td>
				<td class="fuentevalor">&nbsp;<m4:item m4name="<%=IncidentesSTDNACTENDTYPE%>"/></td>
				<td class="fuentevalor">&nbsp;<m4:item m4name="<%=IncidentesSTDDTSTARTACTION%>"/></td>
				<td class="fuentevalor">&nbsp;<m4:item m4name="<%=IncidentesSTDDTENDACTION%>"/></td>
				<td class="fuentevalor">&nbsp;<m4:item m4name="<%=IncidentesSCONMACTCHGREAS%>"/></td>
			</tr>
		<%}else{%>
			<tr>
				<td class="fuentevalor">&nbsp;</td>
				<td class="fuentevaloralter">&nbsp;<m4:item m4name="<%=IncidentesSTDNACTIONTYPE%>"/></td>
				<td class="fuentevaloralter">&nbsp;<m4:item m4name="<%=IncidentesSTDNACTENDTYPE%>"/></td>
				<td class="fuentevaloralter">&nbsp;<m4:item m4name="<%=IncidentesSTDDTSTARTACTION%>"/></td>
				<td class="fuentevaloralter">&nbsp;<m4:item m4name="<%=IncidentesSTDDTENDACTION%>"/></td>
				<td class="fuentevaloralter">&nbsp;<m4:item m4name="<%=IncidentesSCONMACTCHGREAS%>"/></td>
			</tr>
		<%}%>
	<%}%>
	</m4:loop>	
</table>
</div>
<%}%>