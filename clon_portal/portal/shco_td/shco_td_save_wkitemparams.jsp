<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_td_save_wkitemparams.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%!
	private static String getStringValue(String sValue) {
		return ((sValue == null) || sValue.equals("") || sValue.equals("null")) ? null : sValue;
	}
%>
<%
	String zParamValues =getStringValue(request.getParameter("zWkitemParamValues"));
	String zSaveWkItemParamsMethod = zsubsesion + "!SHCO_TD_WZ_REMIND_WORKITEM.SHCO_SAVE_WKITEM_PARAM_VALUES";	
%>
<% if (zParamValues != null){
  if (zParamValues.equals(zEMPTY_PARAMS)){
     //Grabar una cadena vacia
  	 zParamValues = "";
  }
%>       
	<m4:exec m4method="<%=zSaveWkItemParamsMethod%>">
			<m4:param name="AI_PARAM_VALUES" value="<%=zParamValues%>"/>
	</m4:exec>
<%}%>
