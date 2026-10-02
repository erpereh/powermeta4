<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_menu.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<title><%=Tran_shco_portal.getProperty("portal."+znivelmenu)%></title>
<%@ include file="../shco_g0/shco_gen_normal_js.jsp" %></head>
<body><%@ include file="../shco_g0/shco_gen_menusup.jsp" %>

<table width="100%" cellspacing="0">

<tr>
	<td class="titulofuncional" colspan="2"><%=Tran_shco_portal.getProperty("portal."+znivelmenu)%></td>
	
</tr>
	<tr>
		<td><hr class="barramenu" /></td>
		<td></td>
	</tr>
<tr>
	<td class="descripcionfuncional" ><div ><%=Tran_shco_portal.getProperty("portal."+znivelmenu+".h")%></div ></td>
	<td><img alt="<%=Tran_shco_portal.getProperty("portal."+znivelmenu)%>"title="<%=Tran_shco_portal.getProperty("portal."+znivelmenu)%>" <%@ include file="../files_gif/ic_memu_mod.jsp" %> /></td>
</tr>
</table><br />
<script type="text/javascript" language="Javascript1.5">var strgenerarsubmenus = m4gen_menus(mlinks,mnames,mhassubmenu);</script>
