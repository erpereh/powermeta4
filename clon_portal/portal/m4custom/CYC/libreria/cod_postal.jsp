<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<%@ page contentType="application/json; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

<%
String zsubsesion = "CSP_CARGA_CP";
String zmeta4object = "CSP_CARGA_CP";
String znodo8 = "CSP_CARGA_CP";
String codPost	    = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSP_DISTRIT_POSTAL"); 
String zmetodocarga4 = zsubsesion + "!"+znodo8+".CARGA";

String zoutputdef8 = zsubsesion + "!" + znodo8 + "[*]";
String zcomun8 = znodo8 + ":" + zsubsesion + "!" + znodo8 + "[&VAR.m4lix]" + ".";
String zmove8		= znodo8 	+ ":" + znodo8 	+ "[FIRST]";  
String zJSON = "";//zcomun8 + "JSON";
response.setContentType("application/json; charset=ISO-8859-1");
response.setCharacterEncoding("ISO-8859-1");
%>

<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<m4:exec m4method="<%=zmetodocarga4%>"><m4:param name="ARG_COD_POS" value="<%=codPost%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo8%>" ><m4:param name="m4name0" value="<%=zoutputdef8%>"/></m4:outputdef>
<m4:endjob/>
<%	
 try {
	M4Operations m3 = new M4Operations(request); 
	zJSON = m3.getItem(znodo8,zmeta4object,znodo8,"","JSON"); 
} catch(Exception e) {}
response.getWriter().write(zJSON);
%>
