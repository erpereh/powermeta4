<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_p_wz_end.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="../shco_g0/shco_gen_portal_arg.jsp" %>
<%@ include file="../shco_g0/shco_gen_bag.jsp" %>
<html><head><title></title>
<%@ include file="../shco_g0/shco_gen_normal_js.jsp" %>
<%
//**********************************************************  
//* Datos que no van al canal 
//**********************************************************
String zm4object = request.getParameter("TAG");
String zsubsesion  = zm4object+"_SUB";
String zRedireccionAct=request.getParameter("zredireccion");
//************************************************************
String znodoraiz = "SHCO_GN_ROOT";
String zMetodoEnd = zm4object + "!" + znodoraiz + ".SHCO_P_WZ_CANCEL_PROCESS";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zm4object%>" m4name="<%=zm4object%>"/>
<m4:exec m4method="<%=zMetodoEnd%>"></m4:exec>
<m4:endjob/>
</head>	
<body><%@ include file="/shco_g0/shco_gen_act_body.jsp" %>
<script type="text/javascript">m4navegar('/servlet/CheckSecurity/JSP/<%=zRedireccionAct%>');</script>
<m4:endpage/>
</body>
</html>
