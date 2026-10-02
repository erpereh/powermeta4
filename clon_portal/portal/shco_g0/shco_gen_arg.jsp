<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_arg.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%! 
// getRequestValueBlack: avoids null references and does simple blacklisting of ", ', and \ as characters 
String getRequestValueBlack(HttpServletRequest request, String paramName, String defaultValue) 
{
   String value = M4SafeRequest.getParameter(request, paramName);
   if (defaultValue == null) defaultValue = ""; 
   if (value == null || value.equals("") || value.equals("null")
      || value.contains("\"") || value.contains("\\") || value.contains("\'")) {
         return defaultValue; 
   }
   else 
   {
      return value; 
   }
}
%>

<%
String zinicio = getRequestValueBlack(request, "zinicio", "1");
String ztipocarga = getRequestValueBlack(request, "ztipocarga", "NORMAL");
String zcarril = getRequestValueBlack(request, "zcarril", "");	
%>
