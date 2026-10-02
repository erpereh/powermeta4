<%@ include file="/m4trans/mss_g1/0-smco_prof_cv_trans.jsp" %>
<%

   String zsubsesion = "SSE_EMP_CV";
   String znodo = "SMCO_PERSON_CERTIF_LICENSE_CV";
   String zcomun = zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   String zSCOCERTNUMBER = zcomun + "SCO_CERT_NUMBER";
   String zSCODTEXPIRED = zcomun + "SCO_DT_EXPIRED";
   String zSCODTISSUE = zcomun + "SCO_DT_ISSUE";
   String zSCONCERTIF = zcomun + "SCO_N_CERTIF";
   String zSCONISSUEENTIT = zcomun + "SCO_N_ISSUE_ENTIT";
   String zSTDNCERTIFICATIONTYPE = zcomun + "STD_N_CERTIFICATION_TYPE";
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
<table class="barraregistros"><tr><td width="300">&nbsp;<b><u><%=ProfCv.getProperty("prof_cv.Label28")%></b></u></td></tr></table>
<table width="100%" cellspacing="0" class="barraregistros">
	<tr>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCODTISSUE%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCODTEXPIRED%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCONCERTIF%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSTDNCERTIFICATIONTYPE%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCOCERTNUMBER%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCONISSUEENTIT%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSTDNCOUNTRY%>"/></td>
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
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCODTISSUE%>"/></td>
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCODTEXPIRED%>"/></td>
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCONCERTIF%>"/></td>
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSTDNCERTIFICATIONTYPE%>"/></td>
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCOCERTNUMBER%>"/></td>
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCONISSUEENTIT%>"/></td>
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSTDNCOUNTRY%>"/></td>
	</tr>
	</m4:loop>	
</table>
<br/>
</div>
<%}%>