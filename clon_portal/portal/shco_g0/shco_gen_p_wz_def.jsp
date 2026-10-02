<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_p_wz_def.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%
String zCLEAN_PARAM = request.getParameter("CLEAN_PARAM");
String zsubsesion = zm4object+"_SUB";
int zLoadTypeStep = 1;         // Tipo de carga 
int zIndexWizard  = 0;         // Indice de control


String znodoraiz  = "SHCO_GN_ROOT";  
String znodolabel = "SHCO_GN_LABEL";
String znodocom = "SHCO_GN_COMUNICATION";


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
String zSHCOLBSTEPS = zraizlabel + "SHCO_LB_STEPS";
String zSHCOLBCANCELACC = zraizlabel + "SHCO_LB_CANCEL_ACC";
String zSHCOLBACTIONS = zraizlabel + "SHCO_LB_ACTIONS";
String zSHCOLBEXEC = zraizlabel + "SHCO_LB_EXEC";
String zSHCOLBAPP = zraizlabel + "SHCO_LB_APP";
String zSHCOLBBACKAPP = zraizlabel + "SHCO_LB_BACK_APP";
String zSHCOLBNEXTAPP = zraizlabel + "SHCO_LB_NEXT_APP";


String zSHCOLBADD = zraizlabel + "SHCO_LB_INSERT";
String zSHCOLBACEPT = zraizlabel + "SHCO_LB_ACEPT";
String zSHCOLBCANCEL = zraizlabel + "SHCO_LB_ANUL";
String zSHCOLBREM2 = zraizlabel + "SHCO_LB_REM";

String zSHCOLBOSTEPS = zraizlabel + "SHCO_LB_OSTEPS";

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
%>

