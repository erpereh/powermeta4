<%--
	@(#)FileVersion: 812.000.021
	@(#)FileDescription: loop
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: shco_gen_loop.jsp
	@(#)Date: 21/02/2002
--%>
<%
zposicions = m4lix;
zposicion = Integer.valueOf(zposicions).intValue();
zcontrol = zposicion%2;
String zpos="";
if (zcontrol==0){
zpos="2";
}%>
