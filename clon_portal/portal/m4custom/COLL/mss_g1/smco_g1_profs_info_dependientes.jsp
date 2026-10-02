<%

   String Dependientessubsesion = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
   String Dependientesnodo = "SMCO_PROFS_INFO_FAMILY";
   String Dependientescomun = Dependientessubsesion + "!" + Dependientesnodo + "[&VAR.m4lix]" + ".";

   String DependientesSCOGBNAME = Dependientescomun + "SCO_GB_NAME";
   String DependientesSTDNDEPTYPE = Dependientescomun + "STD_N_DEP_TYPE";
   String DependientesSTDDTSTART = Dependientescomun + "STD_DT_START";
   String DependientesSTDDTEND = Dependientescomun + "STD_DT_END";
   String DependientesSTDINCHARGE = Dependientescomun + "STD_IN_CHARGE";
   String DependientesSCOSTUDENT = Dependientescomun + "SCO_STUDENT";
   String DependientesSTDHANDICAP = Dependientescomun + "STD_HANDICAP";

	int  Dependientescounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    Dependientescounti = m.getCountInClient("",Dependientessubsesion,Dependientesnodo);
	} catch(Exception e) {}

	String	Dependientescountv = String.valueOf(Dependientescounti);
	if (Dependientescounti > 0){

%>
<div class="invisible2" id="<%=Dependientesnodo%>" name="<%=Dependientesnodo%>"  style="position: relative; top: 0; left: 0" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};">&nbsp;
<table class="barraregistros"><tr><td width="300">&nbsp;<a  href="javascript:uncheck('<%=Dependientesnodo%>');" title='<%=ProfCv.getProperty("prof_cv.Title8")%>'><b><u><%=ProfCv.getProperty("prof_cv.Label8")%></b></u></a></td></tr></table>
<table width="100%" cellspacing="0" class="barraregistros">
	<tr>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=DependientesSCOGBNAME%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=DependientesSTDNDEPTYPE%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=DependientesSTDDTSTART%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=DependientesSCOSTUDENT%>"/></td>
	</tr>

	<%
		String Dependientesposicions = "0";
		int Dependientescontrol = 0;
		int Dependientesposicion =0;
		String  DependientesPaint="";
		String  DependientesPaintRojo="";
	%>
	<m4:loop from="0" to="<%=new Integer(new Integer(Dependientescountv).intValue()-1).toString()%>">

	<m4:item m4varname="a_cargo" m4name="<%=DependientesSTDINCHARGE%>"/>
	<m4:item m4varname="estudiante" m4name="<%=DependientesSCOSTUDENT%>"/>
	<m4:item m4varname="minusvalia" m4name="<%=DependientesSTDHANDICAP%>"/>
	<%
		Dependientesposicions = m4lix;
		Dependientesposicion = Integer.valueOf(Dependientesposicions).intValue();
	 	Dependientescontrol = Dependientesposicion%2;
		if (Dependientescontrol==0){DependientesPaint="fuentevalor";}else{DependientesPaint="fuentevaloralter";}
		if (Dependientescontrol==0){DependientesPaintRojo="fuentevalorojo";}else{DependientesPaintRojo="fuentevaloralterojo";}

	%>
	<tr>
		<td class="<%=DependientesPaint%>">&nbsp;<m4:item m4name="<%=DependientesSCOGBNAME%>"/></td>
		<td class="<%=DependientesPaint%>">&nbsp;<m4:item m4name="<%=DependientesSTDNDEPTYPE%>"/></td>
		<td class="<%=DependientesPaint%>">&nbsp;<m4:item m4name="<%=DependientesSTDDTSTART%>"/></td>
		<% if(estudiante.equals("1")) { %>
			<td class="<%=DependientesPaintRojo%>">&nbsp;<b><%=ProfCv.getProperty("prof_cv.Label2")%></b></td>
		<%}else{%>
			<td class="<%=DependientesPaint%>">&nbsp;<%=ProfCv.getProperty("prof_cv.Label3")%></td>
		<%}%>
	</tr>
	</m4:loop>	
</table>
</div>
<%}%>