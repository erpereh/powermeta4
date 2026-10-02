<%

   String Tiemposubsesion = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
   String Tiemponodo = "SMCO_PROFS_INFO_ROLE_WORK_TIME";
   String Tiempocomun = Tiemposubsesion + "!" + Tiemponodo + "[&VAR.m4lix]" + ".";


   String TiempoSCOROLEWEEKLYHOURS = Tiempocomun + "SMCO_NUM_HOURS";
   String TiempoSCOPERCENTPERIOD = Tiempocomun + "SCO_PERCENT_PERIOD";
   String TiempoSSMROLENAME = Tiempocomun + "SCO_N_ROLE";
   String TiempoSCODTSTART = Tiempocomun + "SCO_DT_START";
   String TiempoSCODTEND = Tiempocomun + "SCO_DT_END";
   String TiempoSCOFULLTIME = Tiempocomun + "SCO_FULL_TIME";
   String TiempoSCONMREASONCHANGE = Tiempocomun + "SCO_NM_REASON_CHANGE";
   String TiempoSCONAINROLE = Tiempocomun + "SCO_MAIN_ROLE";

	int  Tiempocounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    Tiempocounti = m.getCountInClient("",Tiemposubsesion,Tiemponodo);
	} catch(Exception e) {}

	String	Tiempocountv = String.valueOf(Tiempocounti);
	if (Tiempocounti > 0){

%>
<div class="invisible2" id="<%=Tiemponodo%>" name="<%=Tiemponodo%>"  style="position: relative; top: 0; left: 0" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};">&nbsp;
<table class="barraregistros"><tr><td width="300">&nbsp;<a  href="javascript:uncheck('<%=Tiemponodo%>');" title='<%=ProfCv.getProperty("prof_cv.Title8")%>'><b><u><%=ProfCv.getProperty("prof_cv.Label16")%></b></u></a></td></tr></table>
<table width="100%" cellspacing="0" class="barraregistros">
	<tr>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=TiempoSCOROLEWEEKLYHOURS%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=TiempoSSMROLENAME%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=TiempoSCONAINROLE%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=TiempoSCODTSTART%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=TiempoSCODTEND%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=TiempoSCOFULLTIME%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=TiempoSCONMREASONCHANGE%>"/></td>
	</tr>
	<%
		String Tiempoposicions = "0";
		int Tiempocontrol = 0;
		int Tiempoposicion =0;
		String  TiempoPaint="";
		String  TiempoPaintRojo="";
	%>
	<m4:loop from="0" to="<%=new Integer(new Integer(Tiempocountv).intValue()-1).toString()%>">
	<%
		Tiempoposicions = m4lix;
		Tiempoposicion = Integer.valueOf(Tiempoposicions).intValue();
	 	Tiempocontrol = Tiempoposicion%2;
		if (Tiempocontrol==0){TiempoPaint="fuentevalor";}else{TiempoPaint="fuentevaloralter";}
		if (Tiempocontrol==0){TiempoPaintRojo="fuentevalorojo";}else{TiempoPaintRojo="fuentevaloralterojo";}
	%>
	<m4:item m4varname="main_role" m4name="<%=TiempoSCONAINROLE%>"/>
	<m4:item m4varname="full_time" m4name="<%=TiempoSCOFULLTIME%>"/>
	<tr>
		<td class="<%=TiempoPaint%>">&nbsp;<m4:item m4name="<%=TiempoSCOROLEWEEKLYHOURS%>"/></td>
		<td class="<%=TiempoPaint%>">&nbsp;<m4:item m4name="<%=TiempoSSMROLENAME%>"/></td>

		<% if(main_role.equals("1")) { %>
			<td class="<%=TiempoPaintRojo%>">&nbsp;<b><%=ProfCv.getProperty("prof_cv.Label2")%></b></td>
		<%}else{%>
			<td class="<%=TiempoPaint%>">&nbsp;<%=ProfCv.getProperty("prof_cv.Label3")%></td>
		<%}%>

		<td class="<%=TiempoPaint%>">&nbsp;<m4:item m4name="<%=TiempoSCODTSTART%>"/></td>
		<td class="<%=TiempoPaint%>">&nbsp;<m4:item m4name="<%=TiempoSCODTEND%>"/></td>

		<% if(full_time.equals("1")) { %>
			<td class="<%=TiempoPaintRojo%>">&nbsp;<b><%=ProfCv.getProperty("prof_cv.Label2")%></b></td>
		<%}else{%>
			<td class="<%=TiempoPaint%>">&nbsp;<%=ProfCv.getProperty("prof_cv.Label3")%></td>
		<%}%>

		<td class="<%=TiempoPaint%>">&nbsp;<m4:item m4name="<%=TiempoSCONMREASONCHANGE%>"/></td>
	</tr>
	</m4:loop>	
</table>
</div>
<%}%>