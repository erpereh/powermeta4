<%@ include file="/m4trans/mss_g1/0-smco_prof_cv_trans.jsp" %>
<%

   String zsubsesion = "SSE_EMP_CV";
   String znodo = "SMCO_PERSON_COM_INFORMATION_CV";
   String zcomun = zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   String zSCOCKMOVINTER = zcomun + "SCO_CK_MOV_INTER";
   String zSCOCKMOVNAC = zcomun + "SCO_CK_MOV_NAC";
   String zSCOCKTRAVELDISPO = zcomun + "SCO_CK_TRAVEL_DISPO";
   String zSCOHOBBIES = zcomun + "SCO_HOBBIES";
   String zSCOMINSALARY = zcomun + "SMCO_MIN_SALARY";
   String zSCONAREA = zcomun + "SCO_N_AREA";
   String zSCOOTHERS = zcomun + "SCO_OTHERS";

	int  zcounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcounti = m.getCountInClient("",zsubsesion,znodo);
	} catch(Exception e) {}

	String	zcountv = String.valueOf(zcounti);
	if (zcounti > 0){


%>

<div id="<%=znodo%>" name="<%=znodo%>">
<table class="barraregistros"><tr><td width="300">&nbsp;<b><u><%=ProfCv.getProperty("prof_cv.Label31")%></b></u></td></tr></table>
<table width="100%" cellspacing="0" class="barraregistros">
	<tr>
		<td class="tablaestadosceldatitulo" width="8%"><m4:label m4name="<%=zSCOCKTRAVELDISPO%>"/></td>
		<td class="tablaestadosceldatitulo" width="7%"><m4:label m4name="<%=zSCOCKMOVNAC%>"/></td>
		<td class="tablaestadosceldatitulo" width="7%"><m4:label m4name="<%=zSCOCKMOVINTER%>"/></td>
		<td class="tablaestadosceldatitulo" width="15%"><m4:label m4name="<%=zSCOMINSALARY%>"/></td>
		<td class="tablaestadosceldatitulo" width="15%">&nbsp;<m4:label m4name="<%=zSCONAREA%>"/></td>
		<td class="tablaestadosceldatitulo" width="23%">&nbsp;<m4:label m4name="<%=zSCOOTHERS%>"/></td>
		<td class="tablaestadosceldatitulo" width="23%">&nbsp;<m4:label m4name="<%=zSCOHOBBIES%>"/></td>
	</tr>
	<%
		String zposicions = "0";
		int zcontrol = 0;
		int zposicion =0;
		String  zPaint="";
		String  zPaintRojo="";
	%>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
	<%
		zposicions = m4lix;
		zposicion = Integer.valueOf(zposicions).intValue();
	 	zcontrol = zposicion%2;
		if (zcontrol==0){zPaint="fuentevalor";}else{zPaint="fuentevaloralter";}
		if (zcontrol==0){zPaintRojo="fuentevalorojo";}else{zPaintRojo="fuentevaloralterojo";}
	%>

	<m4:item m4varname="viajar" m4name="<%=zSCOCKTRAVELDISPO%>"/>
	<m4:item m4varname="nacional" m4name="<%=zSCOCKMOVNAC%>"/>
	<m4:item m4varname="internacional" m4name="<%=zSCOCKMOVINTER%>"/>

	<tr>
		<% if(viajar.equals("1")) { %>
			<td class="<%=zPaintRojo%>">&nbsp;<b><%=ProfCv.getProperty("prof_cv.Label2")%></b></td>
		<%}else{%>
			<td class="<%=zPaint%>">&nbsp;<%=ProfCv.getProperty("prof_cv.Label3")%></td>
		<%}%>
		<% if(nacional.equals("1")) { %>
			<td class="<%=zPaintRojo%>">&nbsp;<b><%=ProfCv.getProperty("prof_cv.Label2")%></b></td>
		<%}else{%>
			<td class="<%=zPaint%>">&nbsp;<%=ProfCv.getProperty("prof_cv.Label3")%></td>
		<%}%>
		<% if(internacional.equals("1")) { %>
			<td class="<%=zPaintRojo%>">&nbsp;<b><%=ProfCv.getProperty("prof_cv.Label2")%></b></td>
		<%}else{%>
			<td class="<%=zPaint%>">&nbsp;<%=ProfCv.getProperty("prof_cv.Label3")%></td>
		<%}%>
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCOMINSALARY%>"/></td>
		<td class="<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCONAREA%>"/></td>
		<td class="<%=zPaint%>"><m4:item m4name="<%=zSCOOTHERS%>"/></td>
		<td class="<%=zPaint%>"><m4:item m4name="<%=zSCOHOBBIES%>"/></td>
	</tr>
	</m4:loop>	
</table>
<br/>
</div>
<%}%>