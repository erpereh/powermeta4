<%@ include file="../../mss_g1/smco_prof_cv_trans.jsp" %>
<%

   String zsubsesion = "SSE_EMP_CV";
   String znodo = "SMCO_PERSONAL_ASSOCIATION_CV";
   String zcomun = zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   String zSCODTEND = zcomun + "SCO_DT_END";
   String zSCODTSTART = zcomun + "SCO_DT_START";
   String zSCONACTIVITY = zcomun + "SCO_N_ACTIVITY";
   String zSCONASSOCIATION = zcomun + "SCO_N_ASSOCIATION";
   String zSCONMPOSITION = zcomun + "SCO_NM_POSITION";
   String zSTDNASSOCTYPE = zcomun + "STD_N_ASSOC_TYPE";

	int  zcounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcounti = m.getCountInClient("",zsubsesion,znodo);
	} catch(Exception e) {}

	String	zcountv = String.valueOf(zcounti);
	if (zcounti > 0){


%>

<div id="<%=znodo%>" name="<%=znodo%>">
<table class="barraregistros"><tr><td width="300">&nbsp;<b><u><%=ProfCv.getProperty("prof_cv.Label30")%></b></u></td></tr></table>
<table width="100%" cellspacing="0" class="barraregistros">
	<tr>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCODTSTART%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCODTEND%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSTDNASSOCTYPE%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCONASSOCIATION%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCONACTIVITY%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCONMPOSITION%>"/></td>
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
		<td class="<%=zPaint%>" width ="10%">&nbsp;<m4:item m4name="<%=zSCODTSTART%>"/></td>
		<td class="<%=zPaint%>" width ="10%">&nbsp;<m4:item m4name="<%=zSCODTEND%>"/></td>
		<td class="<%=zPaint%>" width ="20%">&nbsp;<m4:item m4name="<%=zSTDNASSOCTYPE%>"/></td>
		<td class="<%=zPaint%>" width ="20%">&nbsp;<m4:item m4name="<%=zSCONASSOCIATION%>"/></td>
		<td class="<%=zPaint%>" width ="20%">&nbsp;<m4:item m4name="<%=zSCONACTIVITY%>"/></td>
		<td class="<%=zPaint%>" width ="20%">&nbsp;<m4:item m4name="<%=zSCONMPOSITION%>"/></td>
	</tr>
	</m4:loop>	
</table>
<br/>
</div>
<%}%>