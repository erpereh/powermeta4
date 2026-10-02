<%@ taglib uri="M4Tags" prefix="m4"%>
<%@ page import="com.meta4.taglib.util.*"%>
<m4:getapplparam section="FORMAT" key="DATE" output="jsp"/>
<%
String zsgcoParamDate = (String)pageContext.getAttribute("DATE");

if ((zsgcoParamDate==null)||(zsgcoParamDate.equals(""))){zsgcoParamDate="dd-MM-yyyy";}
String zsgcoSepFechas = M4FormatUtils.extractDateSeparator(zsgcoParamDate);
%>
<script type="text/javascript" language="Javascript1.5">
var sformatofechas = "<%=zsgcoParamDate%>";
var g_ssepfechas = "<%=zsgcoSepFechas%>";
var g_ssepdecimal = ".";
var g_ssepdig = "";
var g_strailingzeros = ""; 
</script>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_excep.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/library/m4val.js"></script>