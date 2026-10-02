<%--
	@(#)FileVersion: 812.000.021
	@(#)FileDescription: Establecer el titulo de la página
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: shco_gen_title.jsp
	@(#)Date: 21/02/2002
--%>
<script type="text/javascript" language="Javascript1.5">
if (<%=zsco%>==null){
m4settitle( "<m4:label m4name="<%=zSHCOLBTITLE%>" jsafe="true"/>")
}else{
var vsoc=m4getmessage("_setlog_soc");
m4settitle(vsoc+' <%=zsco%> - '+ "<m4:label m4name="<%=zSHCOLBTITLE%>" jsafe="true"/>");
}
</script>
