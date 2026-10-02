<%@ page contentType="text/html; charset=utf-8" %>
<%@ page language="java" pageEncoding="utf-8"%>

<%@ taglib uri="M4Tags" prefix="m4" %>

<%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>

<%
String zsubsesion = "CSP_PROYECCIONES_JSON";
String zmeta4object = "CSP_PROYECCIONES_JSON";
String znodo8 = "CSP_PROYECCIONES_JSON";
String anio = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ANIO"); 
String zmetodocarga4 = zsubsesion + "!"+znodo8+".CARGA";
String zoutputdef8 = zsubsesion + "!" + znodo8 + "[*]";
//String zcomun8 = znodo8 + ":" + zsubsesion + "!" + znodo8 + "[&VAR.m4lix]" + ".";
//String zmove8		= znodo8 	+ ":" + znodo8 	+ "[FIRST]";  
String zJSON = "";
%>

<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga4%>"><m4:param name="VALUE_ARG" value="<%=anio%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo8%>" ><m4:param name="m4name0" value="<%=zoutputdef8%>"/></m4:outputdef>
<m4:endjob/>

<%	
 try {
	M4Operations m3 = new M4Operations(request); 
	zJSON = m3.getItem(znodo8,zmeta4object,znodo8,"","JSON"); 
} catch(Exception e) {}

response.setContentType("application/json");

%>
<%=zJSON%>