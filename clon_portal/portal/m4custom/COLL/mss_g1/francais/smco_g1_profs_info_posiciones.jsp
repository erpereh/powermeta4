<%

   String Posicionsubsesion = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
   String Posicionnodo = "SMCO_PROFS_INFO_POSITION";
   String Posicioncomun = Posicionsubsesion + "!" + Posicionnodo + "[&VAR.m4lix]" + ".";

   String PosicionSCOIDPOSITION = Posicioncomun + "SCO_ID_POSITION";
   String PosicionSCONMPOSITION = Posicioncomun + "SCO_NM_POSITION";
   String PosicionSCONMCOMPL = Posicioncomun + "SMCO_TP_OCUPATION";
   String PosicionSMCONUMWEEKLYHOURS = Posicioncomun + "SMCO_NUM_WEEKLY_HOURS";
   String PosicionSTDNWORKLOCATION = Posicioncomun + "STD_N_WORK_LOCATION";
   String PosicionSTDNWORKUNIT = Posicioncomun + "STD_N_WORK_UNIT";
   String PosicionSSMROLENAME = Posicioncomun + "SCO_N_ROLE";
   String PosicionSCODTSTART = Posicioncomun + "SCO_DT_START";
   String PosicionSCODTEND = Posicioncomun + "SCO_DT_END";
   String PosicionSCOMAINROLE = Posicioncomun + "SCO_MAIN_ROLE";

	int  Posicioncounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    Posicioncounti = m.getCountInClient("",Posicionsubsesion,Posicionnodo);
	} catch(Exception e) {}

	String	Posicioncountv = String.valueOf(Posicioncounti);
	if (Posicioncounti > 0){

%> 
<div class="invisible2" id="<%=Posicionnodo%>" name="<%=Posicionnodo%>"  style="position: relative; top: 0; left: 0" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};">&nbsp;
<table class="barraregistros"><tr><td width="300">&nbsp;<a style="cursor:hand" onclick="javascript:uncheck('<%=Posicionnodo%>');" title='<%=ProfCv.getProperty("prof_cv.Title8")%>'><b><u><%=ProfCv.getProperty("prof_cv.Label35")%></b></u></a></td></tr></table>
<table width="100%" cellspacing="0" class="barraregistros">
	<tr>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PosicionSCONMPOSITION%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PosicionSCONMCOMPL%>"/></td>

		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PosicionSSMROLENAME%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PosicionSCOMAINROLE%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PosicionSCODTSTART%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PosicionSCODTEND%>"/></td>
	</tr>
	<%
		String Posicionposicions = "0";
		int Posicioncontrol = 0;
		int Posicionposicion =0;
		String  PosicionPaint="";
		String  PosicionPaintRojo="";
	%>
	<m4:loop from="0" to="<%=new Integer(new Integer(Posicioncountv).intValue()-1).toString()%>">
	<%
		Posicionposicions = m4lix;
		Posicionposicion = Integer.valueOf(Posicionposicions).intValue();
	 	Posicioncontrol = Posicionposicion%2;
		if (Posicioncontrol==0){PosicionPaint="fuentevalor";}else{PosicionPaint="fuentevaloralter";}
		if (Posicioncontrol==0){PosicionPaintRojo="fuentevalorojo";}else{PosicionPaintRojo="fuentevaloralterojo";}
	%>
	<m4:item m4varname="main_role" m4name="<%=PosicionSCOMAINROLE%>"/>

	<tr>
		<td class="<%=PosicionPaint%>">&nbsp;<m4:item m4name="<%=PosicionSCONMPOSITION%>"/>&nbsp;<b>(<m4:item m4name="<%=PosicionSCOIDPOSITION%>"/>)</b></td>
		<td class="<%=PosicionPaint%>">&nbsp;<m4:item m4name="<%=PosicionSCONMCOMPL%>"/></td>

		<td class="<%=PosicionPaint%>">&nbsp;<m4:item m4name="<%=PosicionSSMROLENAME%>"/></td>

		<% if(main_role.equals("1")) { %>
			<td class="<%=PosicionPaintRojo%>">&nbsp;<b><%=ProfCv.getProperty("prof_cv.Label2")%></b></td>
		<%}else{%>
			<td class="<%=PosicionPaint%>">&nbsp;<%=ProfCv.getProperty("prof_cv.Label3")%></td>
		<%}%>

		<td class="<%=PosicionPaint%>">&nbsp;<m4:item m4name="<%=PosicionSCODTSTART%>"/></td>
		<td class="<%=PosicionPaint%>">&nbsp;<m4:item m4name="<%=PosicionSCODTEND%>"/></td>
	</tr>
	</m4:loop>	
</table>
</div>
<%}%>