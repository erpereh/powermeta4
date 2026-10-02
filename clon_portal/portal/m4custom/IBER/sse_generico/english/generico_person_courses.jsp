<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>ESS Portal</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<!-- Retrieve the KnowNet task to be run with its parameters -->
<%
	M4SessionCl zsesion = M4Context.getM4SessionCl(request); 
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	
%>

<%
String aux_provider = zsesion.getBagEntries("aux_provider");
String Knownet_task = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Knownet_task");
Knownet_task= "/servlet/CheckSecurity/JSP/" + Knownet_task;
%>

<m4:startpage m4task="COURSES"/>
<m4:beginjob/>
<m4:datadef m4o="SSE_PERSON_COURSES" m4name="COURSES"/>
<m4:exec m4method="COURSES!SSE_PERSON_COURSES.INIT_LOAD"/>
<m4:outputdef m4alias="DATA1"><m4:param name="M4NAME0" value="COURSES!SSE_PERSON_COURSES[*]"/></m4:outputdef>
<m4:endjob/>

<!-- Retrieve the language and the person ID from the session Meta4Object -->

<%
		  String Courses_string = "";
		  try {
			M4Operations ns = new M4Operations(request);
			Courses_string = ns.getItem("DATA1","COURSES","SSE_PERSON_COURSES","","COURSES_STRING");
  		      } catch(Exception e) {};

%>

</head>
<body  onload="goto_generico_call_knownetlight()">
<%
Courses_string = URLEncoder.encode("" + Courses_string);
Courses_string = URLEncoder.encode("" + Courses_string);
Courses_string = URLEncoder.encode("" + Courses_string);
Knownet_task = Knownet_task + "&Courses_string="+ Courses_string;
Knownet_task = URLEncoder.encode("" + Knownet_task);
%>

<script language="JavaScript">
function goto_generico_call_knownetlight(){
document.forms.call_knownetlight.Knownet_task.value="<%=Knownet_task%>";
document.forms.call_knownetlight.From_mail.value="0";
document.forms.call_knownetlight.action='<m4:crosslink uri="<%=Knownet_task%>" idprovider="<%=aux_provider%>"/>';
document.forms.call_knownetlight.submit();
}
</script>
<form name="call_knownetlight" method="POST">
<input type="hidden" name = "Knownet_task"  value="">
<input type="hidden" name = "_URL"  value="">
<input type="hidden" name = "From_mail"  value="">
</form>
</body>
<m4:endpage/>
</html>
