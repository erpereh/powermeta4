<%

   String TpEmpleadosubsesion = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
   String TpEmpleadonodo = "SMCO_PROFS_INFO_EMPLOYEE_TYPE";
   String TpEmpleadocomun = TpEmpleadosubsesion + "!" + TpEmpleadonodo + "[&VAR.m4lix]" + ".";

   String TpEmpleadoSCODTEND = TpEmpleadocomun + "SCO_DT_END";
   String TpEmpleadoSCODTSTART = TpEmpleadocomun + "SCO_DT_START";
   String TpEmpleadoSCONMREASONCHANGE = TpEmpleadocomun + "SCO_NM_REASON_CHANGE";
   String TpEmpleadoSSMHRTYPEID = TpEmpleadocomun + "SCO_ID_EMPLOYEE_TYPE";
   String TpEmpleadoSSMHRTYPENAME = TpEmpleadocomun + "SCO_NM_EMPLOYEE_TYPE";

	int  TpEmpleadocounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    TpEmpleadocounti = m.getCountInClient("",TpEmpleadosubsesion,TpEmpleadonodo);
	} catch(Exception e) {}

	String	TpEmpleadocountv = String.valueOf(TpEmpleadocounti);
	if (TpEmpleadocounti > 0){


%>
<div class="invisible2" id="<%=TpEmpleadonodo%>" name="<%=TpEmpleadonodo%>"  style="position: relative; top: 0; left: 0" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};">&nbsp;
<table class="barraregistros"><tr><td width="300">&nbsp;<a style="cursor:hand" onclick="javascript:uncheck('<%=TpEmpleadonodo%>');" title='<%=ProfCv.getProperty("prof_cv.Title8")%>'><b><u><%=ProfCv.getProperty("prof_cv.Label17")%></b></u></a></td></tr></table>
<table width="100%" cellspacing="0" class="barraregistros">
	<tr>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=TpEmpleadoSSMHRTYPENAME%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=TpEmpleadoSCODTSTART%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=TpEmpleadoSCODTEND%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=TpEmpleadoSCONMREASONCHANGE%>"/></td>
	</tr>
	<%
		String TpEmpleadoposicions = "0";
		int TpEmpleadocontrol = 0;
		int TpEmpleadoposicion =0;
		String  TpEmpleadoPaint="";
	%>
	<m4:loop from="0" to="<%=new Integer(new Integer(TpEmpleadocountv).intValue()-1).toString()%>">
	<%
		TpEmpleadoposicions = m4lix;
		TpEmpleadoposicion = Integer.valueOf(TpEmpleadoposicions).intValue();
	 	TpEmpleadocontrol = TpEmpleadoposicion%2;
		if (TpEmpleadocontrol==0){TpEmpleadoPaint="fuentevalor";}else{TpEmpleadoPaint="fuentevaloralter";}
	%>
	<tr>
		<td class="<%=TpEmpleadoPaint%>">&nbsp;<m4:item m4name="<%=TpEmpleadoSSMHRTYPENAME%>"/>&nbsp;<b>(<m4:item m4name="<%=TpEmpleadoSSMHRTYPEID%>"/>)</b></td>
		<td class="<%=TpEmpleadoPaint%>">&nbsp;<m4:item m4name="<%=TpEmpleadoSCODTSTART%>"/></td>
		<td class="<%=TpEmpleadoPaint%>">&nbsp;<m4:item m4name="<%=TpEmpleadoSCODTEND%>"/></td>
		<td class="<%=TpEmpleadoPaint%>">&nbsp;<m4:item m4name="<%=TpEmpleadoSCONMREASONCHANGE%>"/></td>
	</tr>
	</m4:loop>	
</table>
</div>
<%}%>