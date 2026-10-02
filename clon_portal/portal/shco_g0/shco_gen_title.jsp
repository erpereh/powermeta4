<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_title.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<script type="text/javascript" language="Javascript1.5">
if (<%=zsco%>==null){
m4settitle( "<m4:label m4name="<%=zSHCOLBTITLE%>" jsafe="true"/>")
}else{
var vsoc=m4getmessage("_setlog_soc");
m4settitle(vsoc+' <%=zsco%> - '+ "<m4:label m4name="<%=zSHCOLBTITLE%>" jsafe="true"/>");
}
</script>
