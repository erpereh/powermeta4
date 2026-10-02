<%

   String Empresassubsesion = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
   String Empresasnodo = "SMCO_PROFS_INFO_LEGAL_ENTITY";
   String Empresascomun = Empresassubsesion + "!" + Empresasnodo + "[&VAR.m4lix]" + ".";

   String EmpresasSSMLEGALENTITYIID = Empresascomun + "SCO_ID_LEG_ENT";
   String EmpresasSSMLEGALENTITYINAME = Empresascomun + "STD_N_LEG_ENT";
   String EmpresasDTSTART = Empresascomun + "DT_START";
   String EmpresasDTEND = Empresascomun + "DT_END";
   String EmpresasSCONMREASONCHANGE = Empresascomun + "SCO_NM_REASON_CHANGE";

	int  Empresascounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    Empresascounti = m.getCountInClient("",Empresassubsesion,Empresasnodo);
	} catch(Exception e) {}

	String	Empresascountv = String.valueOf(Empresascounti);
	if (Empresascounti > 0){


%>
<div class="invisible2" id="<%=Empresasnodo%>" name="<%=Empresasnodo%>"  style="position: relative; top: 0; left: 0;" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};">&nbsp;
<table class="barraregistros"><tr><td width="300">&nbsp;<a  href="javascript:uncheck('<%=Empresasnodo%>');" title='<%=ProfCv.getProperty("prof_cv.Title8")%>'><b><u><%=ProfCv.getProperty("prof_cv.Label9")%></b></u></a></td></tr></table>
<table width="100%" cellspacing="0" class="barraregistros">
	<tr>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=EmpresasSSMLEGALENTITYINAME%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=EmpresasDTSTART%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=EmpresasDTEND%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=EmpresasSCONMREASONCHANGE%>"/></td>
	</tr>
	<%
		String Empresasposicions = "0";
		int Empresascontrol = 0;
		int Empresasposicion =0;
		String  EmpresasPaint="";
	%>
	<m4:loop from="0" to="<%=new Integer(new Integer(Empresascountv).intValue()-1).toString()%>">
	<%
		Empresasposicions = m4lix;
		Empresasposicion = Integer.valueOf(Empresasposicions).intValue();
	 	Empresascontrol = Empresasposicion%2;
		if (Empresascontrol==0){EmpresasPaint="fuentevalor";}else{EmpresasPaint="fuentevaloralter";}
	%>
	<tr>
		<td class="<%=EmpresasPaint%>">&nbsp;<m4:item m4name="<%=EmpresasSSMLEGALENTITYINAME%>"/>&nbsp;<b>(<m4:item m4name="<%=EmpresasSSMLEGALENTITYIID%>"/>)</b></td>
		<td class="<%=EmpresasPaint%>">&nbsp;<m4:item m4name="<%=EmpresasDTSTART%>"/></td>
		<td class="<%=EmpresasPaint%>">&nbsp;<m4:item m4name="<%=EmpresasDTEND%>"/></td>
		<td class="<%=EmpresasPaint%>">&nbsp;<m4:item m4name="<%=EmpresasSCONMREASONCHANGE%>"/></td>
	</tr>
	</m4:loop>	
</table>
</div>
<%}%>