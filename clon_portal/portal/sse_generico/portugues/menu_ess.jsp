<%
	M4SessionCl zsesionKn = M4Context.getM4SessionCl(request);
	String IsKnownet2 = zsesionKn.getBagEntries("IsKnownet");
	String Total_Server_Knownet2 = zsesionKn.getBagEntries("Total_Server_Knownet");
%>
<%@ include file="../../sse_generico/sgco_gen_inc.jsp" %>
<%@ include file="../../sse_generico/sse_generico_trans.jsp" %>
<script type="text/javascript" language="Javascript1.5">
var sIsKnownet = "<%=IsKnownet2%>";
var sTotal_Server_Knownet = "<%=Total_Server_Knownet2%>";
</script>
<script type="text/javascript" src="/libreria/menu_sse_por.js"></script>

