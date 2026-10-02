<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_list_nodata.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


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
