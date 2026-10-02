<%@ page  import="com.meta4.session.*" %>
<%
	M4SessionCl zsesionKn = M4Context.getM4SessionCl(request);
	String IsKnownet2 = zsesionKn.getBagEntries("IsKnownet");
	String Total_Server_Knownet2 = zsesionKn.getBagEntries("Total_Server_Knownet");
%>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sgco_gen_inc.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_trans.jsp" %>
<script type="text/javascript" language="Javascript1.5">
var sIsKnownet = "<%=IsKnownet2%>";
var sTotal_Server_Knownet = "<%=Total_Server_Knownet2%>";
</script>

<script type="text/javascript" src="/libreria/menu_sse_esp.js"></script>
