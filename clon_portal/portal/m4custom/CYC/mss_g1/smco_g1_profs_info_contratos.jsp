<%

   String Contratosubsesion = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
   String Contratonodo = "SMCO_PROFS_INFO_CONTRACT";
   String Contratocomun = Contratosubsesion + "!" + Contratonodo + "[&VAR.m4lix]" + ".";

   String ContratoSCODTEND = Contratocomun + "SCO_DT_END";
   String ContratoSCODTEXPECTEDEND = Contratocomun + "SCO_DT_EXPECTED_END";
   String ContratoSCODTPROBATIONEND = Contratocomun + "SCO_DT_PROBATION_END";
   String ContratoSCODTSTART = Contratocomun + "SCO_DT_START";
   String ContratoSCONMREASONCHANGE = Contratocomun + "SCO_NM_REASON_CHANGE";
   String ContratoSSMCONTRACTID = Contratocomun + "SCO_ID_CONTRACT";
   String ContratoSSMCONTRACTNAME = Contratocomun + "SCO_NM_CONTRACT";

	int  Contratocounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    Contratocounti = m.getCountInClient("",Contratosubsesion,Contratonodo);
	} catch(Exception e) {}

	String	Contratocountv = String.valueOf(Contratocounti);
	if (Contratocounti > 0){

%>
<div class="invisible2" id="<%=Contratonodo%>" name="<%=Contratonodo%>"  style="position: relative; top: 0; left: 0" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};">&nbsp;
<table class="barraregistros"><tr><td width="300">&nbsp;<a  href="javascript:uncheck('<%=Contratonodo%>');" title='<%=ProfCv.getProperty("prof_cv.Title8")%>'><b><u><%=ProfCv.getProperty("prof_cv.Label7")%></b></u></a></td></tr></table>
<table width="100%" cellspacing="0" class="barraregistros">
	<tr>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=ContratoSSMCONTRACTNAME%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=ContratoSCODTSTART%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=ContratoSCODTEND%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=ContratoSCODTEXPECTEDEND%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=ContratoSCODTPROBATIONEND%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=ContratoSCONMREASONCHANGE%>"/></td>
	</tr>
	<%
		String Contratoposicions = "0";
		int Contratocontrol = 0;
		int Contratoposicion =0;
		String  ContratoPaint="";
	%>
	<m4:loop from="0" to="<%=new Integer(new Integer(Contratocountv).intValue()-1).toString()%>">
	<%
		Contratoposicions = m4lix;
		Contratoposicion = Integer.valueOf(Contratoposicions).intValue();
	 	Contratocontrol = Contratoposicion%2;
		if (Contratocontrol==0){ContratoPaint="fuentevalor";}else{ContratoPaint="fuentevaloralter";}
	%>
	<tr>
		<td class="<%=ContratoPaint%>">&nbsp;<m4:item m4name="<%=ContratoSSMCONTRACTNAME%>"/>&nbsp;<b>(<m4:item m4name="<%=ContratoSSMCONTRACTID%>"/>)</b></td>
		<td class="<%=ContratoPaint%>">&nbsp;<m4:item m4name="<%=ContratoSCODTSTART%>"/></td>
		<td class="<%=ContratoPaint%>">&nbsp;<m4:item m4name="<%=ContratoSCODTEND%>"/></td>
		<td class="<%=ContratoPaint%>">&nbsp;<m4:item m4name="<%=ContratoSCODTEXPECTEDEND%>"/></td>
		<td class="<%=ContratoPaint%>">&nbsp;<m4:item m4name="<%=ContratoSCODTPROBATIONEND%>"/></td>
		<td class="<%=ContratoPaint%>">&nbsp;<m4:item m4name="<%=ContratoSCONMREASONCHANGE%>"/></td>
	</tr>
	</m4:loop>	
</table>
</div>
<%}%>