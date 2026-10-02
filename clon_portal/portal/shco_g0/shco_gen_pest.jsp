<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_pest.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<th class="tituloleft" colspan="2">&nbsp;<%
if (zcount>0){
	int ziniciosum = Integer.parseInt(zinicio) + zventana -1;
	if(ziniciosum > zcount){ziniciosum = zcount;}
	%>&nbsp;<%=zinicio%>-<%=ziniciosum%>&nbsp;<%=Tran_shco_g0.getProperty("Literal.Of")%>&nbsp;<%=zcount%><%}%></th>