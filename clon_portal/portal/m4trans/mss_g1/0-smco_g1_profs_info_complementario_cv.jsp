<%@ include file="/m4trans/mss_g1/0-smco_prof_cv_trans.jsp" %>
<%

   String zsubsesion = "SSE_EMP_CV";
   String znodo = "SMCO_PERSON_COMP_BACKGROUND_CV";
   String zcomun = zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   String zSCODTEND = zcomun + "SCO_DT_END";
   String zSCODTSTART = zcomun + "SCO_DT_START";
   String zSCOGRANTS = zcomun + "SCO_GRANTS";
   String zSCONCENTER = zcomun + "SCO_N_CENTER";
   String zSCONCOURSE = zcomun + "SCO_N_COURSE";
   String zSCONUMBERHOURS = zcomun + "SCO_NUMBER_HOURS";
   String zSTDNCOUNTRY = zcomun + "STD_N_COUNTRY";

	int  zcounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcounti = m.getCountInClient("",zsubsesion,znodo);
	} catch(Exception e) {}

	String	zcountv = String.valueOf(zcounti);
	if (zcounti > 0){


%>

<div id="<%=znodo%>" name="<%=znodo%>">
<table class="barraregistros"><tr><td width="300">&nbsp;<b><u><%=ProfCv.getProperty("prof_cv.Label29")%></b></u></td></tr></table>
<table width="100%" cellspacing="0" class="barraregistros">
	<tr>
		<td class="tablaestadosceldatitulo" width="15%">&nbsp;<m4:label m4name="<%=zSCONCOURSE%>"/></td>
		<td class="tablaestadosceldatitulo" width="10%">&nbsp;<m4:label m4name="<%=zSCONUMBERHOURS%>"/></td>
		<td class="tablaestadosceldatitulo" width="10%">&nbsp;<m4:label m4name="<%=zSCODTSTART%>"/></td>
		<td class="tablaestadosceldatitulo" width="10%">&nbsp;<m4:label m4name="<%=zSCODTEND%>"/></td>
		<td class="tablaestadosceldatitulo" width="15%">&nbsp;<m4:label m4name="<%=zSCONCENTER%>"/></td>
		<td class="tablaestadosceldatitulo" width="10%">&nbsp;<m4:label m4name="<%=zSTDNCOUNTRY%>"/></td>
		<td class="tablaestadosceldatitulo" width="30%">&nbsp;<m4:label m4name="<%=zSCOGRANTS%>"/></td>
	</tr>
	<%
		String zposicions = "0";
		int zcontrol = 0;
		int zposicion =0;
		String  zPaint="";
	%>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
	<%
		zposicions = m4lix;
		zposicion = Integer.valueOf(zposicions).intValue();
	 	zcontrol = zposicion%2;
		if (zcontrol==0){zPaint="fuentevalor";}else{zPaint="fuentevaloralter";}
	%>

	<tr>
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCONCOURSE%>"/></td>
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCONUMBERHOURS%>"/></td>
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCODTSTART%>"/></td>
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCODTEND%>"/></td>
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCONCENTER%>"/></td>
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSTDNCOUNTRY%>"/></td>
		<td class="<%=zPaint%>"><m4:item m4name="<%=zSCOGRANTS%>"/></td>
	</tr>
	</m4:loop>	
</table>
<br/>
</div>
<%}%>