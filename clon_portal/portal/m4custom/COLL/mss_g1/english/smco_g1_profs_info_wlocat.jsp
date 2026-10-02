<%

   String WLocatsubsesion = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
   String WLocatnodo = "SMCO_PROFS_INFO_WORK_LOCATION";
   String WLocatcomun = WLocatsubsesion + "!" + WLocatnodo + "[&VAR.m4lix]" + ".";

   String WLocatSSMWORKLOCATIONID = WLocatcomun + "SCO_ID_WORK_LOCATION";
   String WLocatSSMWORKLOCATIONAME = WLocatcomun + "STD_N_WORK_LOCATION";
   String WLocatSSMROLEINFO = WLocatcomun + "SCO_N_ROLE";
   String WLocatSCODTSTART = WLocatcomun + "SCO_DT_START";
   String WLocatSCODTEND = WLocatcomun + "SCO_DT_END";
   String WLocatSCONMREASONCHANGE = WLocatcomun + "SCO_NM_REASON_CHANGE";
   String WLocatSCOMAINROLE = WLocatcomun + "SCO_MAIN_ROLE";

	int  WLocatcounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    WLocatcounti = m.getCountInClient("",WLocatsubsesion,WLocatnodo);
	} catch(Exception e) {}

	String	WLocatcountv = String.valueOf(WLocatcounti);
	if (WLocatcounti > 0){

%>
<div class="invisible2" id="<%=WLocatnodo%>" name="<%=WLocatnodo%>"  style="position: relative; top: 0; left: 0" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};">&nbsp;
<table class="barraregistros"><tr><td width="300">&nbsp;<a style="cursor:hand" onclick="javascript:uncheck('<%=WLocatnodo%>');" title='<%=ProfCv.getProperty("prof_cv.Title8")%>'><b><u><%=ProfCv.getProperty("prof_cv.Label18")%></b></u></a></td></tr></table>
<table width="100%" cellspacing="0" class="barraregistros">
	<tr>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=WLocatSSMWORKLOCATIONAME%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=WLocatSSMROLEINFO%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=WLocatSCOMAINROLE%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=WLocatSCODTSTART%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=WLocatSCODTEND%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=WLocatSCONMREASONCHANGE%>"/></td>
	</tr>
	<%
		String WLocatposicions = "0";
		int WLocatcontrol = 0;
		int WLocatposicion =0;
		String  WLocatPaint="";
		String  WLocatPaintRojo="";
	%>
	<m4:loop from="0" to="<%=new Integer(new Integer(WLocatcountv).intValue()-1).toString()%>">
	<%
		WLocatposicions = m4lix;
		WLocatposicion = Integer.valueOf(WLocatposicions).intValue();
	 	WLocatcontrol = WLocatposicion%2;
		if (WLocatcontrol==0){WLocatPaint="fuentevalor";}else{WLocatPaint="fuentevaloralter";}
		if (WLocatcontrol==0){WLocatPaintRojo="fuentevalorojo";}else{WLocatPaintRojo="fuentevaloralterojo";}
	%>
	<m4:item m4varname="main_role" m4name="<%=WLocatSCOMAINROLE%>"/>
	<tr>
		<td class="<%=WLocatPaint%>">&nbsp;<m4:item m4name="<%=WLocatSSMWORKLOCATIONAME%>"/>&nbsp;<b>(<m4:item m4name="<%=WLocatSSMWORKLOCATIONID%>"/>)</b></td>
		<td class="<%=WLocatPaint%>">&nbsp;<m4:item m4name="<%=WLocatSSMROLEINFO%>"/></td>
		<% if(main_role.equals("1")) { %>
			<td class="<%=WLocatPaintRojo%>">&nbsp;<b><%=ProfCv.getProperty("prof_cv.Label2")%></b></td>
		<%}else{%>
			<td class="<%=WLocatPaint%>">&nbsp;<%=ProfCv.getProperty("prof_cv.Label3")%></td>
		<%}%>

		<td class="<%=WLocatPaint%>">&nbsp;<m4:item m4name="<%=WLocatSCODTSTART%>"/></td>
		<td class="<%=WLocatPaint%>">&nbsp;<m4:item m4name="<%=WLocatSCODTEND%>"/></td>
		<td class="<%=WLocatPaint%>">&nbsp;<m4:item m4name="<%=WLocatSCONMREASONCHANGE%>"/></td>
	</tr>
	</m4:loop>	
</table>
</div>
<%}%>