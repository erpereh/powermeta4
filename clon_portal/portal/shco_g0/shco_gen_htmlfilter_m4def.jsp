<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_htmlfilter_m4def.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>



<%
	// Parámetros del M4Object:
    String sHTML_FILTER_PAGE = "shco_gen_htmlfilter.jsp";
    String sTXT_RIGHT_FIELD_VALUE = "txtRightFieldValue";  
%>

<%!	
        // Identificadores de las Operaciones
        static final String sAPI_GET_FILTER = "API_GET_FILTER";
        static final String sAPI_GET_FILTER_EX = "API_GET_FILTER_EX";
        static final String sAPI_SET_FILTER = "API_SET_FILTER";
        static final String sAPI_GET_DETAIL = "API_GET_DETAIL";
        static final String sAPI_SET_DETAIL = "API_SET_DETAIL";
        static final String sAPI_DELETE_DETAIL = "API_DELETE_DETAIL";
        static final String sAPI_GET_TABLE_FIELDS = "API_GET_TABLE_FIELDS";
        static final String sAPI_PERSIST_FILTERS = "API_PERSIST_FILTERS";
        static final String sAPI_REMOVE_FILTER = "API_REMOVE_FILTER";
		static final String sAPI_SAVE_PRED_FILTER = "API_SAVE_PRED_FILTER";
		static final String sAPI_DELETE_PRED_FILTER = "API_DELETE_PRED_FILTER";
		

    	//Nombre de los outputdef , items
    	static final String sSubsession = "HtmlFilter";
	    //David, recoger del request y si no viene establecer este:

        static final String sM4HtmlFilterCL="SHCO_FILTER_HTML";
        static final String sM4HtmlFilterCLAlias = "HtmlFilterCL";

    	static final String sNodeAPI_FILTER_HTML= "SHCO_FILTER_API";
    	static final String sNodeFLT_FILTER_INFO ="FLT_FILTER_INFO";
    	static final String sNodeFLT_DETAIL_LIST_R = "FLT_DETAIL_LIST_R";
    	static final String sNodeFLT_DETAIL_INFO ="FLT_DETAIL_INFO";
    	static final String sNodeFLT_LEFT_DETAIL ="FLT_LEFT_DETAIL";
    	static final String sNodeFLT_RIGHT_DETAIL ="FLT_RIGHT_DETAIL";
    	static final String sNodeFLT_DIC_TABLES ="FLT_DIC_TABLES";
    	static final String sNodeFLT_DETAIL_LEFT_FIELDS ="FLT_DETAIL_LEFT_FIELDS";
    	static final String sNodeFLT_DETAIL_RIGHT_FIELDS ="FLT_DETAIL_RIGHT_FIELDS";
    	static final String sNodeFLT_OP_ADVANCED ="FLT_OP_ADVANCED";		
	    static final String sNodeFLT_OP_AGR_CLOSE ="FLT_OP_AGR_CLOSE";		
	    static final String sNodeFLT_OP_AGR_OPEN ="FLT_OP_AGR_OPEN";	
	    static final String sNodeFLT_OP_LOG ="FLT_OP_LOG";	
    	static final String sNodeFLT_OP_REL ="FLT_OP_REL";
    	static final String sNodeSHCO_GN_LABEL ="SHCO_GN_LABEL";
		static final String sNodeSHCO_GN_COMUNICATION ="SHCO_GN_COMUNICATION";
		

        // Items del nodo API_FILTER_HTML
        static final String sItemAPI_GET_FILTER = "API_GET_FILTER";
        static final String sItemAPI_GET_FILTER_EX = "API_GET_FILTER_EX";
        static final String sItemAPI_SET_FILTER = "API_SET_FILTER";
        static final String sItemAPI_GET_DETAIL = "API_GET_DETAIL";
        static final String sItemAPI_SET_DETAIL = "API_SET_DETAIL";
        static final String sItemAPI_DELETE_DETAIL = "API_DELETE_DETAIL";
        static final String sItemAPI_GET_TABLE_FIELDS = "API_GET_TABLE_FIELDS";
        static final String sItemAPI_PERSIST_FILTERS = "API_PERSIST_FILTERS";
        static final String sItemAPI_REMOVE_FILTER = "API_REMOVE_FILTER";
        static final String sItemAPI_SAVE_PRED_FILTER = "API_SAVE_PRED_FILTER";
		static final String sItemAPI_DELETE_PRED_FILTER = "API_DELETE_PRED_FILTER";
 
		
        
        
        //Items de los nodos de operadores
        static final String sItemOPERATOR = "OPERATOR";
        static final String sItemOPERATORDESC = "DESCRIPTION";
        static final String sItemID_OPERATOR = "ID_OPERATOR";
        static final String sItemOPERATOR_TYPE = "OPERATOR_TYPE";
        static final String sItemOP_REL_GEN_TYPE = "PROP_GEN_TYPE";
        
        //Items del nodo sNodeFLT_DETAIL_INFO  
        static final String sItemPROP_OP_AGR_OPEN = "PROP_OP_AGR_OPEN"; 
        static final String sItemPROP_OP_ADV = "PROP_OP_ADV"; 
        static final String sItemPROP_ID_DETAIL_IN_EDITION = "PROP_ID_DETAIL_IN_EDITION"; 
        static final String sItemPROP_OP_REL = "PROP_OP_REL";
        static final String sItemPROP_OP_AGR_CLOSE = "PROP_OP_AGR_CLOSE";
        static final String sItemPROP_OP_LOG = "PROP_OP_LOG";
		                      
        //Items del nodo sNodeFLT_LEFT_DETAIL ,sNodeFLT_RIGHT_DETAI  
        static final String sItemPROP_ID_TABLE_TRANSLATED = "PROP_ID_TABLE_TRANSLATED"; 
        static final String sItemPROP_FIELD_TRANSLATED = "PROP_FIELD_TRANSLATED";
        static final String sItemPROP_ID_FIELD = "PROP_ID_FIELD";		
        static final String sItemPROP_VALUE = "PROP_VALUE";
        static final String sItemPROP_ID_TABLE = "PROP_ID_TABLE";
        static final String sItemPROP_ID_TABLE_PATH = "PROP_ID_TABLE_PATH";		
		
        
        
        //Items del nodo sNodeFLT_DIC_TABLES  
        static final String sItemID_TRANSLATED_OBJ = "ID_TRANSLATED_OBJ";    
        static final String sItemTABLE_INFO = "TABLE_INFO";
		static final String sItemLIST_OF_FIELDS = "LIST_OF_FIELDS";
		static final String sItemLIST_IS_TABLEBASE = "IS_BASIS";
        
        //Items del nodo sNodeFLT_DETAIL_LEFT_FIELDS, sNodeFLT_DETAIL_RIGHT_FIELDS
        static final String sItemID_TRANSLATED_FLD = "ID_TRANSLATED_FLD";
        static final String sItemID_FIELD = "ID_FIELD";
        static final String sItemPROP_GEN_TYPE = "PROP_GEN_TYPE";
               

        //Items del nodo sNodeFLT_DETAIL_LIST_R
        static final String sItemPROP_ID_DETAIL = "PROP_ID_DETAIL";
        static final String sItemPROP_NAT_LANG = "PROP_NAT_LANG";
        
        //Items del nodo sNodeFLT_FILTER_INFO
        static final String sItemPROP_NATURAL_LANG = "PROP_NATURAL_LANG";
        static final String sItemPROP_APISQL = "PROP_APISQL_HTML";
        static final String sItemPROP_ID_SENTENCE = "PROP_ID_SENTENCE";
        static final String sItemPROP_IS_SYNTAX_OK = "PROP_IS_SYNTAX_OK";
        static final String sItemPROP_IS_SENTENCE_SAVED = "PROP_IS_SENTENCE_SAVED";
		                                                      
        static final String sOutputFilterNatLanguage = "FilterNatLanguage";
		static final String sOutputFilterAllDetails = "FilterAllDetails";
		static final String sOutputFilterDetailInfo = "FilterDetailInfo";	
		static final String sOutputFilterDetailRightInfo = "FilterDetailRightInfo";	
		static final String sOutputFilterDetailLeftInfo = "FilterDetailLeftInfo";
		static final String sOutputAdvancedOperators = "AdvancedOperators";
		static final String sOutputGroupOpenOperators = "GroupOpenOperators";
		static final String sOutputGroupCloseOperators = "GroupCloseOperators";
		static final String sOutputLogicOperators = "LogicOperators";
		static final String sOutputRelationalOperators = "RelationalOperators";
		static final String sOutputFilterTables = "FilterTables";
		static final String sOutputFilterLeftTableFields = "FilterLeftTableFields";
		static final String sOutputFilterRigthTableFields = "FilterRigthTableFields";
		static final String zoutputdeflabel = "OutputDefLabels";
		

%>






