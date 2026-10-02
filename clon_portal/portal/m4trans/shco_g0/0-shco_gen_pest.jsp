<%--
	@(#)FileVersion: 812.000.021
	@(#)FileDescription: 
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: shco_gen_pest.jsp
	@(#)Date: 21/02/2002
--%>
<th class="tituloleft" colspan="2">&nbsp;<%
if (zcount>0){
	int ziniciosum = Integer.parseInt(zinicio) + zventana -1;
	if(ziniciosum > zcount){ziniciosum = zcount;}
	%>&nbsp;<%=zinicio%>-<%=ziniciosum%>&nbsp;<%=Tran_shco_g0.getProperty("Literal.Of")%>&nbsp;<%=zcount%><%}%></th>
