<%

   String Propiedadessubsesion = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
   String Propiedadesnodo = "SMCO_PROFS_INFO_COM_PROPERTIES";
   String Propiedadescomun = Propiedadessubsesion + "!" + Propiedadesnodo + "[&VAR.m4lix]" + ".";

   String PropiedadesSTDNPROPERTYTYPE = Propiedadescomun + "STD_N_PROPERTY_TYPE";
   String PropiedadesSTDNUMBERPROPERTY = Propiedadescomun + "STD_NUMBER_PROPERTY";
   String PropiedadesSTDDTSTART = Propiedadescomun + "STD_DT_START";
   String PropiedadesSTDDTRETURNED = Propiedadescomun + "STD_DT_RETURNED";
   String PropiedadesSTDDTEXPECTEDRE = Propiedadescomun + "STD_DT_EXPECTED_RE";

	int  Propiedadescounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    Propiedadescounti = m.getCountInClient("",Propiedadessubsesion,Propiedadesnodo);
	} catch(Exception e) {}

	String	Propiedadescountv = String.valueOf(Propiedadescounti);
	if (Propiedadescounti > 0){

%>
<div class="invisible2" id="<%=Propiedadesnodo%>" name="<%=Propiedadesnodo%>"  style="position: relative; top: 0; left: 0" onmousedown="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){dragOBJ(this,event)}; return false;" onmouseover="javascript:if (document.forms['isDrag'].elements['drag'].value=='1'){className='dragActivado'};">&nbsp;
<table class="barraregistros"><tr><td width="300">&nbsp;<a style="cursor:hand" onclick="javascript:uncheck('<%=Propiedadesnodo%>');" title='<%=ProfCv.getProperty("prof_cv.Title8")%>'><b><u><%=ProfCv.getProperty("prof_cv.Label13")%></b></u></a></td></tr></table>
<table width="100%" cellspacing="0" class="barraregistros">
	<tr>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PropiedadesSTDNPROPERTYTYPE%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PropiedadesSTDNUMBERPROPERTY%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PropiedadesSTDDTSTART%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PropiedadesSTDDTRETURNED%>"/></td>
		<td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=PropiedadesSTDDTEXPECTEDRE%>"/></td>
	</tr>

	<%
		String Propiedadesposicions = "0";
		int Propiedadescontrol = 0;
		int Propiedadesposicion =0;
		String  PropiedadesPaint="";
	%>
	<m4:loop from="0" to="<%=new Integer(new Integer(Propiedadescountv).intValue()-1).toString()%>">
	<%
		Propiedadesposicions = m4lix;
		Propiedadesposicion = Integer.valueOf(Propiedadesposicions).intValue();
	 	Propiedadescontrol = Propiedadesposicion%2;
		if (Propiedadescontrol==0){PropiedadesPaint="fuentevalor";}else{PropiedadesPaint="fuentevaloralter";}
	%>
	<tr>
		<td class="<%=PropiedadesPaint%>">&nbsp;<m4:item m4name="<%=PropiedadesSTDNPROPERTYTYPE%>"/></td>
		<td class="<%=PropiedadesPaint%>">&nbsp;<m4:item m4name="<%=PropiedadesSTDNUMBERPROPERTY%>"/></td>
		<td class="<%=PropiedadesPaint%>">&nbsp;<m4:item m4name="<%=PropiedadesSTDDTSTART%>"/></td>
		<td class="<%=PropiedadesPaint%>">&nbsp;<m4:item m4name="<%=PropiedadesSTDDTRETURNED%>"/></td>
		<td class="<%=PropiedadesPaint%>">&nbsp;<m4:item m4name="<%=PropiedadesSTDDTEXPECTEDRE%>"/></td>
	</tr>
	</m4:loop>	
</table>
</div>
<%}%>