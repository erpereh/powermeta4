<%--
	@(#)FileVersion: 812.000.021
	@(#)FileDescription: ordenacion en las listas filtradas
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: shco_gen_list_filter.jsp
	@(#)Date: 21/02/2002
--%>
<%if ((zOrdenCampo !="NO")||(!zOrdenCampo.equals("NO"))){if ((zOrden=="1")||(zOrden.equals("1"))){	%><m4:sortitems m4name="<%=zsortitems%>"><m4:param name="<%=zOrdenCampo%>" value="ASC"/></m4:sortitems><%}else if ((zOrden=="2")||(zOrden.equals("2"))){%><m4:sortitems m4name="<%=zsortitems%>"><m4:param name="<%=zOrdenCampo%>" value="DESC"/></m4:sortitems><%}}%>
