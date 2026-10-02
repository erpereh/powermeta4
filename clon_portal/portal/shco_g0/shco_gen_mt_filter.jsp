<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_mt_filter.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%if ((zOrdenCampo !="NO")||(!zOrdenCampo.equals("NO"))){if ((zOrden=="1")||(zOrden.equals("1"))){%><m4:sortitems m4name="<%=zsortitems%>"><m4:param name="<%=zOrdenCampo%>" value="ASC"/></m4:sortitems><%}else if ((zOrden=="2")||(zOrden.equals("2"))){%><m4:sortitems m4name="<%=zsortitems%>"><m4:param name="<%=zOrdenCampo%>" value="DESC"/></m4:sortitems><%}}%>