<%

   String WUnitsubsesion = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
   String WUnitnodo = "SMCO_PROFS_INFO_WORK_UNITS";
   String WUnitcomun = WUnitsubsesion + "!" + WUnitnodo + "[&VAR.m4lix]" + ".";

   String WUnitSSMWORKUNITID = WUnitcomun + "SCO_ID_WORK_UNIT";
   String WUnitSSMWORKUNITNAME = WUnitcomun + "STD_N_WORK_UNIT";
   String WUnitSSMROLEINFO = WUnitcomun + "SCO_N_ROLE";
   String WUnitSCODTSTART = WUnitcomun + "SCO_DT_START";
   String WUnitSCODTEND = WUnitcomun + "SCO_DT_END";
   String WUnitSCONMREASONCHANGE = WUnitcomun + "SCO_NM_REASON_CHANGE";
   String WUnitSCOMAINROLE = WUnitcomun + "SCO_MAIN_ROLE";

	int  WUnitcounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    WUnitcounti = m.getCountInClient("",WUnitsubsesion,WUnitnodo);
	} catch(Exception e) {}

	String	WUnitcountv = String.valueOf(WUnitcounti);
	if (WUnitcounti > 0){

%>
<div class="invisible2" id="<%=WUnitnodo%>" name="<%=WUnitnodo%>"  style="position: relative; top: 0; left: 0" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};">&nbsp;
<table class="barraregistros"><tr><td width="300">&nbsp;<a style="cursor:hand" onclick="javascript:uncheck('<%=WUnitnodo%>');" title='<%=ProfCv.getProperty("prof_cv.Title8")%>'><b><u><%=ProfCv.getProperty("prof_cv.Label19")%></b></u></a></td></tr></table>
<table width="100%" cellspacing="0" class="barraregistros">
	<tr>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=WUnitSSMWORKUNITNAME%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=WUnitSSMROLEINFO%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=WUnitSCOMAINROLE%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=WUnitSCODTSTART%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=WUnitSCODTEND%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=WUnitSCONMREASONCHANGE%>"/></td>
	</tr>
	<%
		String WUnitposicions = "0";
		int WUnitcontrol = 0;
		int WUnitposicion =0;
		String  WUnitPaint="";
		String  WUnitPaintRojo="";
	%>
	<m4:loop from="0" to="<%=new Integer(new Integer(WUnitcountv).intValue()-1).toString()%>">
	<%
		WUnitposicions = m4lix;
		WUnitposicion = Integer.valueOf(WUnitposicions).intValue();
	 	WUnitcontrol = WUnitposicion%2;
		if (WUnitcontrol==0){WUnitPaint="fuentevalor";}else{WUnitPaint="fuentevaloralter";}
		if (WUnitcontrol==0){WUnitPaintRojo="fuentevalorojo";}else{WUnitPaintRojo="fuentevaloralterojo";}
	%>
	<m4:item m4varname="main_role" m4name="<%=WUnitSCOMAINROLE%>"/>
	<tr>
		<td class="<%=WUnitPaint%>">&nbsp;<m4:item m4name="<%=WUnitSSMWORKUNITNAME%>"/>&nbsp;<b>(<m4:item m4name="<%=WUnitSSMWORKUNITID%>"/>)</b></td>
		<td class="<%=WUnitPaint%>">&nbsp;<m4:item m4name="<%=WUnitSSMROLEINFO%>"/></td>

		<% if(main_role.equals("1")) { %>
			<td class="<%=WUnitPaintRojo%>">&nbsp;<b><%=ProfCv.getProperty("prof_cv.Label2")%></b></td>
		<%}else{%>
			<td class="<%=WUnitPaint%>">&nbsp;<%=ProfCv.getProperty("prof_cv.Label3")%></td>
		<%}%>

		<td class="<%=WUnitPaint%>">&nbsp;<m4:item m4name="<%=WUnitSCODTSTART%>"/></td>
		<td class="<%=WUnitPaint%>">&nbsp;<m4:item m4name="<%=WUnitSCODTEND%>"/></td>
		<td class="<%=WUnitPaint%>">&nbsp;<m4:item m4name="<%=WUnitSCONMREASONCHANGE%>"/></td>
	</tr>
	</m4:loop>	
</table>
</div>
<%}%>