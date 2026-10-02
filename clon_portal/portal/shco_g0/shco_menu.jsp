<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_menu.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<table id = "tablemenu"  border="1" class="menu" width="100%">
<tr><td id="tdmenu">
<script type="text/javascript" language="Javascript1.5">
	var strgenerarsubmenus = generarcapa_menus(mlinks,mnames,mhassubmenu);
</script>
</td>
</tr></table>
<script type="text/javascript" language="Javascript1.5">
eval (strgenerarsubmenus);
</script>
