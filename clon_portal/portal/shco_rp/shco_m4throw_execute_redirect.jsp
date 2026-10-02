<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_m4throw_execute_redirect.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<% String zEXE_MODE = request.getParameter(zM4ThrowExecute);
  
if ((zEXE_MODE!=null)&&(!(zEXE_MODE.equals(""))) && (zEXE_MODE.equals("1"))){ %>
  <m4:item m4name="<%=zIdParamsInstancer%>" m4varname="zInstanceVal"/> 
  <%String zM4throwExePage = zReturnPage + "?" + zAskConfigParamFalse+ "&" + zIdParamsInstance + "=" + zInstanceVal;
   zM4throwExePage = zM4throwExePage  + "&zopenmode=0" + "&zsubsesion="+ zsubsesion;
  %>
  <script type="text/javascript">
	window.location.replace("/servlet/CheckSecurity/JSP/<%=zM4throwExePage%>" ) ;
  </script>
<%}%>