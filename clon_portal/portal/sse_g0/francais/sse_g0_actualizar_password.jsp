<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>


<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<% 
String zredireccion = "/servlet/CheckSecurity/JSP/sse_g0/sse_g0_password.jsp";
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String stOldPassword = zobjtabla.m4paramvalor("OLD");
String stNewPassword = zobjtabla.m4paramvalor("NEW");

int iReturn=0;

try { 		
	M4Operations m4opr=new M4Operations(request);
	iReturn = m4opr.changePassword(stOldPassword,stNewPassword);
 } catch(Exception e) {}

if (iReturn==0){
	//todo ok
}else{
	if (iReturn==1){
		//es igual al usuario
	}else{
		//es -1
	}
}

%>

<meta http-equiv='refresh' content="2; URL=<%=zredireccion%>">
<head><title>Mise &agrave; jour</title></head>	
<body>

 <m4:endpage/>
</body>
