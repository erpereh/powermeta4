<%///////////////////////////////////////PLANNING GTA : MSS Init Part///////////////////////////////////////%>
<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
     "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html id="htmlGTA" xmlns:v="urn:schemas-microsoft-com:vml" xmlns="http://www.w3.org/TR/REC-html40">
<head>
<!-- No Cache -->
<META http-equiv="Cache-Control" content="no-cache">
<META http-equiv="Pragma" content="no-cache">
<META http-equiv="Cache" content="no store">
<META http-equiv="Expires" content="0">
<!-- Import -->
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%@ page import="com.meta4.configuration.*" %>
<%//@ page import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.savparams.*" %>
<%//@ page import="com.meta4.valuetables.basic.*, com.meta4.utilities.*,com.meta4.configuration.*,com.meta4.taglib.util.*" %>

<!-- Css -->
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<link href="/css/autocompleter.css" type="text/css" rel="stylesheet" />
<link href="/css/gta_planning.css" type="text/css" rel="stylesheet" />
<!-- Javascripts -->
<script src="/libreria/mootools-core-1.3.2.js" type="text/javascript"></script>
<script src="/libreria/mootools-more-1.3.2.1.js" type="text/javascript"></script>
<script src="/javascripts/Autocompleter.js" type="text/javascript"></script>
<script src="/javascripts/Autocompleter.Request.js" type="text/javascript"></script>
<script src="/javascripts/Observer.js" type="text/javascript"></script>
<script src="/javascripts/floatingtips.js" type="text/javascript"></script>
<script src="/javascripts/gta.js" type="text/javascript"></script>
<script type="text/javascript" src="/library/m4gen.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<script type="text/javascript" src="/libreria/sco_incidences_link.js"></script>
<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>

<!-- Tests Resolution -->
<script type="text/javascript">
if ((screen.width<=1024) && (screen.height<=768)){
	var showMLeft = parent.$('showMenu').className;
	if (showMLeft == "menuSwitchShow hidden")
	{
		parent.Meta4.portal.toggleMenu();
	}
}
</script>

<!-- Portal Side / GTA -->
<%String mss = "1";%>
<!-- Portal Side / GTA -->
<%@ include file="../../sse_g4/francais/sse_g4_gta_planning_body.jsp" %>
</html>