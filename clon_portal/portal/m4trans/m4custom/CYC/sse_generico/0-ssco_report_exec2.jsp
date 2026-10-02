<m4:outputdef m4alias="<%=znodocom%>" m4object="<%=zm4object%>" node="<%=znodocom%>" records="*"/>
<m4:outputdef m4alias="<%=znodolabel%>" m4object="<%=zm4object%>" node="<%=znodolabel%>" records="*"/>
<m4:endjob/>
<%
String zerror="";
try {	
	M4Operations m = new M4Operations(request);
	zerror = m.getItem(znodocom,zm4object,znodocom,"","SHCO_ACTIVE_DEBUG"); 
} catch(Exception e) {}
%>

</head><body>

<%@include file="/m4trans/shco_g0/0-shco_gen_title.jsp" %>
<%@ include file="/m4trans/shco_g0/0-shco_gen_menusup.jsp" %>