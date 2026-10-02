<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_dynfilter_m4def.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%!
	
	private static String getStringValue(String sValue) {
		return ((sValue == null) || sValue.equals("") || sValue.equals("null")) ? "" : sValue;
	}
	
	String zSAVE_FILTER_OP = "01";
	String zDELETE_FILTER_OP = "02";	
	String zAPPLY_DYN_FILTER_OP = "03";
	String zDELETE_SENTENCE_OP = "04";
	String zPARAM_SUB = "zdf_sub";
	String zPARAM_M4O = "zdf_m4o";
	String zPARAM_M4OALIAS = "zdf_m4oalias";
	String zPARAM_RETPAGE = "zdf_retpage";
	String zPARAM_RETPAGEWIDTH = "zdf_retpagewidth";
	String zPARAM_RETPAGEWIDTH_DEF="800";
	String zPARAM_RETPAGEHEIGHT = "zdf_retpageheight";
	String zPARAM_RETPAGEHEIGHT_DEF="600";
	String zPARAM_APPLYMODE = "zdf_applymode";
	String zAPPLY_MODE_DEF ="1";
	String zPARAM_DYNFILTER = "zdynfiltersinfo";
	String zPARAM_RETMODE = "zdf_retmode";
	String zRET_MODE_SUBMIT ="1";
	String zRET_MODE_RETURNVALUES ="2";
	String zRET_MODE_RETURNVALUES_CALLBACK ="3";
	String zRET_MODE_SUBMIT_WITHOUT_OPENWINDOW ="4";

	String zm4object  = "SHCO_GN_DYNFILTER";
	String znodoraiz  = "SHCO_GN_ROOT";  
	String znodolabel = "SHCO_GN_LABEL";
	String znodocom = "SHCO_GN_COMUNICATION";
	String znodoapi = "SHCO_DYNFILTER_API";
	String znododynfilterlist = "SHCO_DYNFILTER_LIST";
	
	String zmetodolist = "API_LIST_DYN_FILTERS";
	String zmetodoapply = "API_APPLY_DYN_FILTERS";
	String zmetodosetparams = "API_SET_DYN_FILTERS_PARAMS";
	String zmetodosave = "API_SAVE_DYN_FILTER";
	String zmetodosavedynfilter = "API_SAVE_DYN_FILTER";
	String zmetodoremovefilter = "API_REMOVE_FILTER";
		
	String zIdNodeItem = "ARG_ID_NODE";
	String zNNodeItem = "ARG_N_NODE";
	String zIdReadObjetItem ="ARG_ID_READ_OBJECT";
	String zIdScenarioItem = "ARG_ID_SCENARIO";
	String zFilterLangItem = "ARG_LANGUAGE";
	String zIdSentenceItem = "ARG_ID_SENTENCE";
	String zApiSqlItem= "ARG_API_SQL";
	String zListOfScenario ="ARG_SCENARIO_LIST";
	
	String zNodeSubsessionItem = "ARG_SUBSESSION_ID";
	
	String zDynInfoItem ="DYN_INFO";
	String zIdT3 = "PAR_ID_T3";
	String zNT3 = "PAR_N_T3";
	String zIdT3Alias = "PAR_ID_T3_ALIAS";
	String zReturnPageItem = "PAR_RETURN_PAGE";
	String zReturnPageWidthItem = "PAR_RETURN_PAGE_WIDTH";
	String zReturnPageHeightItem = "PAR_RETURN_PAGE_HEIGHT";
%>

<%    
    String zm4oalias = zm4object;  // Si se cambia cuidado con shco_gen_p_wz_error.jsp
	if ((zsubsesion == null)||(zsubsesion.equals(""))) zsubsesion =  zm4object + "_SUB";	
		
	String zcomunnodolist = znododynfilterlist + ":" + zm4object + "!" + znododynfilterlist + "[&VAR.m4lix]" + ".";
	String zraiznodoapi =  znodoapi + ":" + zm4object  + "!" + znodoapi + ".";
	String zraizlabel =  znodolabel + ":" + zm4object  + "!" + znodolabel + ".";
	String zmovelab = znodolabel + ":" + znodolabel + "[0]";
	

	String zlIdNodeItem = zcomunnodolist + zIdNodeItem;								
	String zlNNodeItem = zcomunnodolist + zNNodeItem;
	String zlIdReadObjetItem = zcomunnodolist + zIdReadObjetItem;
	String zlIdScenarioItem =  zcomunnodolist + zIdScenarioItem;
	String zlFilterLangItem =   zcomunnodolist +  zFilterLangItem;
	String zlIdSentenceItem = zcomunnodolist + zIdSentenceItem;	
	String zlApiSqlItem = zcomunnodolist + zApiSqlItem;
	String zlListOfScenario = zcomunnodolist + zListOfScenario;
	String zlNodeSubsessionItem = zcomunnodolist + zNodeSubsessionItem;
	String zlDynInfoItem = zraiznodoapi + zDynInfoItem;
	String zlIdT3Item = zraiznodoapi + zIdT3;
	String zlNT3Item = zraiznodoapi + zNT3;	
	String zlIdT3Alias = zraiznodoapi + zIdT3Alias;
	String zlReturnPageItem = zraiznodoapi + zReturnPageItem;
	String zlReturnPageWidthItem = zraiznodoapi + zReturnPageWidthItem;
	String zlReturnPageHeightItem = zraiznodoapi + zReturnPageHeightItem;
	
%>

	<%@ include file="../shco_g0/shco_gen_label.jsp" %>
<%
	String zSHCO_LB_APPLY_FILTER = zraizlabel + "SHCO_LB_APPLY_FILTER";
	String zSHCO_LB_SCENARIO = zraizlabel + "SHCO_LB_SCENARIO";
	String zSHCOLBCANCEL= zraizlabel + "SHCO_LB_CANCEL";
	String zSHCOLBFILTER= zraizlabel + "SHCO_LB_FILTER";
	String zSHCOLBALLFILTERS = zraizlabel + "SHCO_LB_ALLFILTERS";
	String zSHCOLBINSTEM  = zraizlabel + "SHCO_LB_INSERT";
	String zSHCOLBEDITFILTER  = zraizlabel + "SHCO_LB_EDIT_FILTER";
	String zSHCOLBAPPLY  = zraizlabel + "SHCO_LB_APPLY";
	String zSHCOLBPREDFILTER = zraizlabel + "SHCO_LB_PRED_FILTER";
	int zTab = 0;
	int zCol = 0; 
%>