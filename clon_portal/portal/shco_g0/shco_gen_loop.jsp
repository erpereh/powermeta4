<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_loop.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%
zposicions = m4lix;
zposicion = Integer.valueOf(zposicions).intValue();
zcontrol = zposicion%2;
String zpos="";
if (zcontrol==0){
zpos="2";
}%>