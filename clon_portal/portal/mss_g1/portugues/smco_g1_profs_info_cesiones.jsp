<%

   String Cesionessubsesion = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
   String Cesionesnodo = "SMCO_PROFS_INFO_TRANSFER";
   String Cesionescomun = Cesionessubsesion + "!" + Cesionesnodo + "[&VAR.m4lix]" + ".";

   String CesionesSSMTRANSFERINFO = Cesionescomun + "STD_N_EXT_ORG";
   String CesionesSCODTSTART = Cesionescomun + "SCO_DT_START";
   String CesionesSCODTEND = Cesionescomun + "SCO_DT_END";
   String CesionesSCONMLUTRANSFER = Cesionescomun + "SCO_NM_LU_TRANSFER";

   	int  Cesionescounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    Cesionescounti = m.getCountInClient("",Cesionessubsesion,Cesionesnodo);
	} catch(Exception e) {}

	String	Cesionescountv = String.valueOf(Cesionescounti);
	if (Cesionescounti > 0){

%>
<div class="invisible2" id="<%=Cesionesnodo%>" name="<%=Cesionesnodo%>"  style="position: relative; top: 0; left: 0" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};">&nbsp;
<table class="barraregistros"><tr><td width="300">&nbsp;<a style="cursor:hand" onclick="javascript:uncheck('<%=Cesionesnodo%>');" title='<%=ProfCv.getProperty("prof_cv.Title8")%>'><b><u><%=ProfCv.getProperty("prof_cv.Label6")%></b></u></a></td></tr></table>
<table width="100%" cellspacing="0" class="barraregistros">
	<tr>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=CesionesSSMTRANSFERINFO%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=CesionesSCONMLUTRANSFER%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=CesionesSCODTSTART%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=CesionesSCODTEND%>"/></td>
	</tr>
	<%
		String Cesionesposicions = "0";
		int Cesionescontrol = 0;
		int Cesionesposicion =0;
		String  CesionesPaint="";
	%>
	<m4:loop from="0" to="<%=new Integer(new Integer(Cesionescountv).intValue()-1).toString()%>">
	<%
		Cesionesposicions = m4lix;
		Cesionesposicion = Integer.valueOf(Cesionesposicions).intValue();
	 	Cesionescontrol = Cesionesposicion%2;
		if (Cesionescontrol==0){CesionesPaint="fuentevalor";}else{CesionesPaint="fuentevaloralter";}
	%>
	<tr>
		<td class="<%=CesionesPaint%>">&nbsp;<m4:item m4name="<%=CesionesSSMTRANSFERINFO%>"/></td>
		<td class="<%=CesionesPaint%>">&nbsp;<m4:item m4name="<%=CesionesSCONMLUTRANSFER%>"/></td>
		<td class="<%=CesionesPaint%>">&nbsp;<m4:item m4name="<%=CesionesSCODTSTART%>"/></td>
		<td class="<%=CesionesPaint%>">&nbsp;<m4:item m4name="<%=CesionesSCODTEND%>"/></td>
	</tr>
	</m4:loop>	
</table>
</div>
<%}%>