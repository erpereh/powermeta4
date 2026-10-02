<%--
	@(#)FileVersion: 814.000.014
	@(#)FileDescription: argumentos generales
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2017
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP4
	@(#)InternalName: shco_gen_arg.jsp
	@(#)Date: 16/01/2017
--%>

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
