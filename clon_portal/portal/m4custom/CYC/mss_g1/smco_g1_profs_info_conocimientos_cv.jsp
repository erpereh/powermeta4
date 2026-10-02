<%@ include file="/mss_g1/smco_prof_cv_trans.jsp" %>
<%

   String zsubsesion = "SSE_EMP_CV";
   String znodo = "SMCO_PERSONAL_KNC_LEVEL_CV";
   String zcomun = zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   String zSCOEXPIRATIONDATE = zcomun + "SCO_EXPIRATION_DATE";
   String zSCONMEXTDKN = zcomun + "SCO_NM_EXTD_KN";
   String zSCONMEXTDKNTYP = zcomun + "SCO_NM_EXTD_KN_TYP";
   String zSCONMLEVEL = zcomun + "SCO_NM_LEVEL";
   String zSCOPERCENT = zcomun + "SCO_PERCENT";
   String zSCOWEIGHT = zcomun + "SCO_WEIGHT";
   String zSCODTSTART1 = zcomun + "SCO_DT_START";
   
	int  zcounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcounti = m.getCountInClient("",zsubsesion,znodo);
	} catch(Exception e) {}

	String	zcountv = String.valueOf(zcounti);
	if (zcounti > 0){


%>

<div id="<%=znodo%>" name="<%=znodo%>">
<table class="barraregistros"><tr><td  width="300">&nbsp;<b><u><%=ProfCv.getProperty("prof_cv.Label32")%></b></u></td></tr></table>
<table width="100%" cellspacing="0" class="barraregistros">
	<tr>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCONMEXTDKN%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCONMEXTDKNTYP%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCONMLEVEL%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCODTSTART1%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCOPERCENT%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCOWEIGHT%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zSCOEXPIRATIONDATE%>"/></td>
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
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCONMEXTDKN%>"/></td>
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCONMEXTDKNTYP%>"/></td>
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCONMLEVEL%>"/></td>
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCODTSTART1%>"/></td>
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCOPERCENT%>"/></td>
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCOWEIGHT%>"/></td>
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCOEXPIRATIONDATE%>"/></td>
	</tr>
	</m4:loop>	
</table>
<br/>
</div>
<%}%>