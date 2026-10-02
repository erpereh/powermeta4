<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_wz_asterisc.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%if(zField.equals("") || zField == null){%>&nbsp;<%}else if(zField.charAt(0)=='X'){%>&nbsp;*<%}else if (zField.charAt(0)=='O'){%>&nbsp;*<%zField=zField.substring(1);}else {%>&nbsp;<%}%>

