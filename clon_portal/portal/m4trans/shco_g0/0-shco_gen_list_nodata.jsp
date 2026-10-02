<%--
	@(#)FileVersion: 812.000.021
	@(#)FileDescription: Filtro sin datos
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: shco_gen_list_nodata.jsp
	@(#)Date: 21/02/2002
--%>

<%
String zFirstLoad = "";
try {
	M4Operations t = new M4Operations(request);
	zFirstLoad = t.getItem("SHCO_GN_ROOT",zm4object,"SHCO_GN_ROOT","","SHCO_FIRST_LOAD");
	} catch(Exception e) {}
if ((zFirstLoad.equals("0"))&&((ztipocarga=="NORMAL") || ("KEEPDATA".equals(ztipocarga)))){%>
    <%=Tran_shco_g0.getProperty("Msg.FirstLoadList")%>
<%}else{%>
    <%=Tran_shco_g0.getProperty("Msg.FilterWithoutData")%>
<%}%>
<br /><br />
