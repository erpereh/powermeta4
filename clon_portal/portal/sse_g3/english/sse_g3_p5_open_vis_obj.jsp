<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp"%>
<%@ include file="../../sse_generico/english/menu_ess.jsp" %>	
<%@ include file="/sse_g3/sse_ev_trans.jsp"%>
<title><%=TranEss.getProperty("ev_ess.Obj")%></title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

%>
</head><body>
<%@ include file="../../sse_generico/english/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%@ include file="../sse_g3_p5_open_vis_obj_body.jsp" %>
<%@ include file="../../sse_generico/english/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>



