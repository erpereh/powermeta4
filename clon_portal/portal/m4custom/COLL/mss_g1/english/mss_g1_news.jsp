<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<title>Pending Appraisals</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/english/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
if ((estado==null)||(estado.equals(""))){estado="0";}
%>
</head>
<body>
<%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%
String zsubsesion = "SSM_NEWS";
String zmeta4object = "SSM_NEWS";
String znodo = "SSM_NEWS";
String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmetodocarga = zsubsesion + "!" + znodo + ".SSM_NEWS_RECOLECTOR";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
<m4:outputdef m4alias="<%=znodo%>">	<m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<%
	String zADDRESS_1 = "";
	String zADDRESS_2 = "";
	String zBACKGROUND_1 = "";
	String zBACKGROUND_2 = "";
	String zEMAIL_1 = "";
	String zEMAIL_2 = "";
	String zEVALUATOR_1 = "";
	String zEVALUATOR_2 = "";
	String zINT_MOVILITY_1 = "";
	String zINT_MOVILITY_2 = "";
	String zLANG_1 = "";
	String zLANG_2 = "";
	String zPAYMENT_DATA_1 = "";
	String zPAYMENT_DATA_2 = "";
	String zPHONE_1 = "";
	String zPHONE_2 = "";
	String zPREV_JOBS_1 = "";
	String zPREV_JOBS_2 = "";		
	String zREAL_TIME_1 = "";
	String zREAL_TIME_2 = "";
	String zTRAINING_1 = "";
	String zTRAINING_2 = "";		

	int ziADDRESS_1 = 0;
	int ziADDRESS_2 = 0;
	int ziBACKGROUND_1 = 0;
	int ziBACKGROUND_2 = 0;
	int ziEMAIL_1 = 0;
	int ziEMAIL_2 = 0;
	int ziEVALUATOR_1 = 0;
	int ziEVALUATOR_2 = 0;
	int ziINT_MOVILITY_1 = 0;
	int ziINT_MOVILITY_2 = 0;
	int ziLANG_1 = 0;
	int ziLANG_2 = 0;
	int ziPAYMENT_DATA_1 = 0;
	int ziPAYMENT_DATA_2 = 0;
	int ziPHONE_1 = 0;
	int ziPHONE_2 = 0;
	int ziPREV_JOBS_1 = 0;
	int ziPREV_JOBS_2 = 0;
	int ziREAL_TIME_1 = 0;
	int ziREAL_TIME_2 = 0;
	int ziTRAINING_1 = 0;
	int ziTRAINING_2 = 0;
	
	try {
		M4Operations Introduccion = new M4Operations(request);	
		zADDRESS_1 = Introduccion.getItem(znodo,zmeta4object,znodo,"","ADDRESS_1");
		zADDRESS_2 = Introduccion.getItem(znodo,zmeta4object,znodo,"","ADDRESS_2");
		zBACKGROUND_1 = Introduccion.getItem(znodo,zmeta4object,znodo,"","BACKGROUND_1");
		zBACKGROUND_2 = Introduccion.getItem(znodo,zmeta4object,znodo,"","BACKGROUND_2");
		zEMAIL_1 = Introduccion.getItem(znodo,zmeta4object,znodo,"","EMAIL_1");
		zEMAIL_2 = Introduccion.getItem(znodo,zmeta4object,znodo,"","EMAIL_2");
		zEVALUATOR_1 = Introduccion.getItem(znodo,zmeta4object,znodo,"","EVALUATOR_1");
		zEVALUATOR_2 = Introduccion.getItem(znodo,zmeta4object,znodo,"","EVALUATOR_2");
		zINT_MOVILITY_1 = Introduccion.getItem(znodo,zmeta4object,znodo,"","INT_MOVILITY_1");
		zINT_MOVILITY_2 = Introduccion.getItem(znodo,zmeta4object,znodo,"","INT_MOVILITY_2");
		zLANG_1 = Introduccion.getItem(znodo,zmeta4object,znodo,"","LANG_1");
		zLANG_2 = Introduccion.getItem(znodo,zmeta4object,znodo,"","LANG_2");
		zPAYMENT_DATA_1 = Introduccion.getItem(znodo,zmeta4object,znodo,"","PAYMENT_DATA_1");
		zPAYMENT_DATA_2 = Introduccion.getItem(znodo,zmeta4object,znodo,"","PAYMENT_DATA_2");
		zPHONE_1 = Introduccion.getItem(znodo,zmeta4object,znodo,"","PHONE_1");
		zPHONE_2 = Introduccion.getItem(znodo,zmeta4object,znodo,"","PHONE_2");
		zPREV_JOBS_1 = Introduccion.getItem(znodo,zmeta4object,znodo,"","PREV_JOBS_1");
		zPREV_JOBS_2 = Introduccion.getItem(znodo,zmeta4object,znodo,"","PREV_JOBS_2");
		zREAL_TIME_1 = Introduccion.getItem(znodo,zmeta4object,znodo,"","REAL_TIME_1");
		zREAL_TIME_2 = Introduccion.getItem(znodo,zmeta4object,znodo,"","REAL_TIME_2");
		zTRAINING_1 = Introduccion.getItem(znodo,zmeta4object,znodo,"","TRAINING_1");
		zTRAINING_2 = Introduccion.getItem(znodo,zmeta4object,znodo,"","TRAINING_2");
	} catch(Exception e) {}

	ziADDRESS_1 = Integer.valueOf(zADDRESS_1).intValue();
	ziADDRESS_2 = Integer.valueOf(zADDRESS_2).intValue();
	ziBACKGROUND_1 = Integer.valueOf(zBACKGROUND_1).intValue();
	ziBACKGROUND_2 = Integer.valueOf(zBACKGROUND_2).intValue();
	ziEMAIL_1 = Integer.valueOf(zEMAIL_1).intValue();
	ziEMAIL_2 = Integer.valueOf(zEMAIL_2).intValue();
	ziEVALUATOR_1 = Integer.valueOf(zEVALUATOR_1).intValue();
	ziEVALUATOR_2 = Integer.valueOf(zEVALUATOR_2).intValue();
	ziINT_MOVILITY_1 = Integer.valueOf(zINT_MOVILITY_1).intValue();
	ziINT_MOVILITY_2 = Integer.valueOf(zINT_MOVILITY_2).intValue();
	ziLANG_1 = Integer.valueOf(zLANG_1).intValue();
	ziLANG_2 = Integer.valueOf(zLANG_2).intValue();
	ziPAYMENT_DATA_1 = Integer.valueOf(zPAYMENT_DATA_1).intValue();
	ziPAYMENT_DATA_2 = Integer.valueOf(zPAYMENT_DATA_2).intValue();
	ziPHONE_1 = Integer.valueOf(zPHONE_1).intValue();
	ziPHONE_2 = Integer.valueOf(zPHONE_2).intValue();
	ziPREV_JOBS_1 = Integer.valueOf(zPREV_JOBS_1).intValue();
	ziPREV_JOBS_2 = Integer.valueOf(zPREV_JOBS_2).intValue();
	ziREAL_TIME_1 = Integer.valueOf(zREAL_TIME_1).intValue();
	ziREAL_TIME_2 = Integer.valueOf(zREAL_TIME_2).intValue();
	ziTRAINING_1 = Integer.valueOf(zTRAINING_1).intValue();
	ziTRAINING_2 = Integer.valueOf(zTRAINING_2).intValue();
	
%>
<table width="100%">
<tr><td class="titulofuncional" colspan="2">Legal Address</td></tr>
<tr>
	<td><img alt="Legal Address"title="Legal Address" src="/iconos/noname_edificio_121_100.gif" width="100" height="100" /></td>
	<td>
	<div class="descripcionfuncional">I know, Carlota, I'm still working on this page. And no, it does not require another icon.</div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" title="My Person Information"href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11">My Person Information</a></li>
	</ul>
	</td>
</tr>
</table>
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo"><td>&nbsp;Requests</td></tr>
<%if (ziADDRESS_1 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val.jsp?estado=11" title="Shortcut to Validation">&nbsp;Home Address Change Requests. Level 1. Number of Requests: <%=ziADDRESS_1%></a></td></tr>
<%}%>
<%if (ziADDRESS_2 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val.jsp?estado=11&znivel=2" title="Shortcut to Validation">&nbsp;Home Address Change Requests. Level 2. Number of Requests: <%=ziADDRESS_2%></a></td></tr>
<%}%>
<%if (ziEMAIL_1 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val2.jsp?estado=11" title="Shortcut to Validation">&nbsp;E-mail Address Change Requests. Level 1. Number of Requests: <%=ziEMAIL_1%></a></td></tr>
<%}%>
<%if (ziEMAIL_2 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val2.jsp?estado=11&znivel=2" title="Shortcut to Validation">&nbsp;E-mail Address Change Requests. Level 2. Number of Requests: <%=ziEMAIL_2%></a></td></tr>
<%}%>
<%if (ziBACKGROUND_1 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val.jsp?estado=11" title="Shortcut to Validation">&nbsp;Qualification Change Requests. Level 1. Number of Requests: <%=ziBACKGROUND_1%></a></td></tr>
<%}%>
<%if (ziBACKGROUND_2 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val.jsp?estado=11&znivel=2" title="Shortcut to Validation">&nbsp;Qualification Change Requests. Level 2. Number of Requests: <%=ziBACKGROUND_2%></a></td></tr>
<%}%>
<%if (ziEVALUATOR_1 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p4_val.jsp?estado=31" title="Shortcut to Validation">&nbsp;Appraisal Requests. Level 1. Number of Requests: <%=ziEVALUATOR_1%></a></td></tr>
<%}%>
<%if (ziEVALUATOR_2 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p4_val.jsp?estado=31&znivel=2" title="Shortcut to Validation">&nbsp;Appraisal Requests. Level 2. Number of Requests: <%=ziEVALUATOR_2%></a></td></tr>
<%}%>
<%if (ziINT_MOVILITY_1 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p2_val.jsp?estado=31" title="Shortcut to Validation">&nbsp;Internal Mobility Requests. Level 1. Number of Requests: <%=ziINT_MOVILITY_1%></a></td></tr>
<%}%>
<%if (ziINT_MOVILITY_2 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p2_val.jsp?estado=31&znivel=2" title="Shortcut to Validation">&nbsp;Internal Mobility Requests. Level 2. Number of Requests: <%=ziINT_MOVILITY_2%></a></td></tr>
<%}%>
<%if (ziLANG_1 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val2.jsp?estado=11" title="Shortcut to Validation">&nbsp;Language Knowledge Change Requests. Level 1. Number of Requests: <%=ziLANG_1%></a></td></tr>
<%}%>
<%if (ziLANG_2 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val2.jsp?estado=11&znivel=2" title="Shortcut to Validation">&nbsp;Language Knowledge Change Requests. Level 2. Number of Requests: <%=ziLANG_2%></a></td></tr>
<%}%>
<%if (ziPAYMENT_DATA_1 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p1_val.jsp?estado=21" title="Shortcut to Validation">&nbsp;Bank Data Change Requests. Level 1. Number of Requests: <%=ziPAYMENT_DATA_1%></a></td></tr>
<%}%>
<%if (ziPAYMENT_DATA_2 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p1_val.jsp?estado=21&znivel=2" title="Shortcut to Validation">&nbsp;Bank Data Change Requests. Level 2. Number of Requests: <%=ziPAYMENT_DATA_2%></a></td></tr>
<%}%>
<%if (ziPHONE_1 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val3.jsp?estado=11" title="Shortcut to Validation">&nbsp;Phone Number Change Requests. Level 1. Number of Requests: <%=ziPHONE_1%></a></td></tr>
<%}%>
<%if (ziPHONE_2 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val3.jsp?estado=11&znivel=2" title="Shortcut to Validation">&nbsp;Phone Number Change Requests. Level 2. Number of Requests: <%=ziPHONE_2%></a></td></tr>
<%}%>
<%if (ziPREV_JOBS_1 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val3.jsp?estado=11" title="Shortcut to Validation">&nbsp;Previous Employment Change Requests. Level 1. Number of Requests: <%=ziPREV_JOBS_1%></a></td></tr>
<%}%>
<%if (ziPREV_JOBS_2 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val3.jsp?estado=11&znivel=2" title="Shortcut to Validation">&nbsp;Previous Employment Change Requests. Level 2. Number of Requests: <%=ziPREV_JOBS_2%></a></td></tr>
<%}%>
<%if (ziREAL_TIME_1 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p1_val.jsp?estado=41" title="Shortcut to Validation">&nbsp;Holiday Requests. Level 1. Number of Requests: <%=ziREAL_TIME_1%></a></td></tr>
<%}%>
<%if (ziREAL_TIME_2 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p1_val.jsp?estado=41&znivel=2" title="Shortcut to Validation">&nbsp;Holiday Requests. Level 2. Number of Requests: <%=ziREAL_TIME_2%></a></td></tr>
<%}%>
<%if (ziTRAINING_1 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p3_val.jsp?estado=31" title="Shortcut to Validation">&nbsp;Training Requests. Level 1. Number of Requests: <%=ziTRAINING_1%></a></td></tr>
<%}%>
<%if (ziTRAINING_2 > 0){%>
<tr class="fuentecampoaccion"><td><a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p3_val.jsp?estado=31&znivel=2" title="Shortcut to Validation">&nbsp;Training Requests. Level 2. Number of Requests: <%=ziTRAINING_2%></a></td></tr>
<%}%>
</table>
<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>
