<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_wz_def.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%
String znodoraiz  = "SHCO_GN_ROOT";  
String znodolabel = "SHCO_GN_LABEL";
String znodocom = "SHCO_GN_COMUNICATION";

String zoutputdefcom = zm4object + "!" + znodocom + "[*]";
String zoutputdeflab = zm4object + "!" + znodolabel + "[0]";


String zcomun = znodoview + ":" + zm4object + "!" + znodoview + "[&VAR.m4lix]" + ".";
String zraiz =  znodoview + ":" + zm4object  + "!" + znodoview + ".";
String zraizlabel =  znodolabel + ":" + zm4object  + "!" + znodolabel + ".";

int zregistroinicial = Integer.valueOf(zinicio).intValue();					//COMUN VENTANAS
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;

String zmovelab = znodolabel + ":" + znodolabel + "[0]";

//Identificadores etiquetas N1/N2
%>
<%@ include file="../shco_g0/shco_gen_label.jsp" %>
<%
String zSHCOLBADD = zraizlabel + "SHCO_LB_INSERT";
String zSHCOLBACEPT = zraizlabel + "SHCO_LB_ACEPT";
String zSHCOLBCANCEL = zraizlabel + "SHCO_LB_ANUL";
String zSHCOLBREM2 = zraizlabel + "SHCO_LB_REM";
String zSHCOLBSTEPS = zraizlabel + "SHCO_LB_STEPS";
String zSHCOLBOSTEPS = zraizlabel + "SHCO_LB_OSTEPS";
String zSHCOLBACTIONS = zraizlabel + "SHCO_LB_ACTIONS";
String zSHCOLBBACKINS = zraizlabel + "SHCO_LB_BACK_INS";
String zSHCOLBNEXTINS = zraizlabel + "SHCO_LB_NEXT_INS";
String zSHCOLBNEXTNAV = zraizlabel + "SHCO_LB_NEXT_NAV";
String zSHCOLBBACKNAV = zraizlabel + "SHCO_LB_BACK_NAV";

String zSHCOLBBACKNAVTEM = zraizlabel + "SHCO_LB_BACK_NAV_TEM";
String zSHCOLBBACKINSTEM = zraizlabel + "SHCO_LB_BACK_INS_TEM";
String zSHCOLBINSTEM = zraizlabel + "SHCO_LB_INS_TEM";
String zSHCOLBNEXTNAVTEM = zraizlabel + "SHCO_LB_NEXT_NAV_TEM";
String zSHCOLBNEXTINSTEM = zraizlabel + "SHCO_LB_NEXT_INS_TEM";

int zTab = 0;
int zCol = 0; 
String zNivelWizzard="0";  
%>
<m4:getapplparam section="PORTAL_PARAM" key="DEBUG_WIZARD" output="jsp"/>
<% zNivelWizzard = (String)pageContext.getAttribute("DEBUG_WIZARD"); %>
<script type="text/javascript" language="Javascript1.5">var snivelwizzard = "<%=zNivelWizzard%>";var stit="";var vnum="";</script>