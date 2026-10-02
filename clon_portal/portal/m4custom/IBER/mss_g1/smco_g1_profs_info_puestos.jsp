<%

   String Puestossubsesion = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
   String Puestosnodo = "SMCO_PROFS_INFO_JOBS";
   String Puestoscomun = Puestossubsesion + "!" + Puestosnodo + "[&VAR.m4lix]" + ".";

   String PuestosSSMJOBID = Puestoscomun + "SCO_ID_JOB_CODE";
   String PuestosSSMJOBNAME = Puestoscomun + "STD_N_JOB_CODE";
   String PuestosSSMROLENAME = Puestoscomun + "SCO_N_ROLE";
   String PuestosSCODTSTART = Puestoscomun + "SCO_DT_START";
   String PuestosSCODTEND = Puestoscomun + "SCO_DT_END";
   String PuestosSCOMAINROLE = Puestoscomun + "SCO_MAIN_ROLE";

	int  Puestoscounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    Puestoscounti = m.getCountInClient("",Puestossubsesion,Puestosnodo);
	} catch(Exception e) {}

	String	Puestoscountv = String.valueOf(Puestoscounti);
	if (Puestoscounti > 0){

%> 
<div class="invisible2" id="<%=Puestosnodo%>" name="<%=Puestosnodo%>"  style="position: relative; top: 0; left: 0" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};">&nbsp;
<table class="barraregistros"><tr><td width="300">&nbsp;<a  href="javascript:uncheck('<%=Puestosnodo%>');" title='<%=ProfCv.getProperty("prof_cv.Title8")%>'><b><u><%=ProfCv.getProperty("prof_cv.Label14")%></b></u></a></td></tr></table>
<table width="100%" cellspacing="0" class="barraregistros">
	<tr>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PuestosSSMJOBNAME%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PuestosSSMROLENAME%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PuestosSCOMAINROLE%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PuestosSCODTSTART%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PuestosSCODTEND%>"/></td>
	</tr>
	<%
		String Puestosposicions = "0";
		int Puestoscontrol = 0;
		int Puestosposicion =0;
		String  PuestosPaint="";
		String  PuestosPaintRojo="";
	%>
	<m4:loop from="0" to="<%=new Integer(new Integer(Puestoscountv).intValue()-1).toString()%>">
	<%
		Puestosposicions = m4lix;
		Puestosposicion = Integer.valueOf(Puestosposicions).intValue();
	 	Puestoscontrol = Puestosposicion%2;
		if (Puestoscontrol==0){PuestosPaint="fuentevalor";}else{PuestosPaint="fuentevaloralter";}
		if (Puestoscontrol==0){PuestosPaintRojo="fuentevalorojo";}else{PuestosPaintRojo="fuentevaloralterojo";}
	%>
	<m4:item m4varname="main_role" m4name="<%=PuestosSCOMAINROLE%>"/>
	<tr>
		<td class="<%=PuestosPaint%>">&nbsp;<m4:item m4name="<%=PuestosSSMJOBNAME%>"/>&nbsp;<b>(<m4:item m4name="<%=PuestosSSMJOBID%>"/>)</b></td>
		<td class="<%=PuestosPaint%>">&nbsp;<m4:item m4name="<%=PuestosSSMROLENAME%>"/></td>

		<% if(main_role.equals("1")) { %>
			<td class="<%=PuestosPaintRojo%>">&nbsp;<b><%=ProfCv.getProperty("prof_cv.Label2")%></b></td>
		<%}else{%>
			<td class="<%=PuestosPaint%>">&nbsp;<%=ProfCv.getProperty("prof_cv.Label3")%></td>
		<%}%>

		<td class="<%=PuestosPaint%>">&nbsp;<m4:item m4name="<%=PuestosSCODTSTART%>"/></td>
		<td class="<%=PuestosPaint%>">&nbsp;<m4:item m4name="<%=PuestosSCODTEND%>"/></td>
	</tr>
	</m4:loop>	
</table>
</div>
<%}%>