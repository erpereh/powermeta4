<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: htmlfilterjob.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>





<%!
	
	private static String getStringValue(String sValue) {
		return ((sValue == null) || sValue.equals("") || sValue.equals("null")) ? null : sValue;
	}
%>



<%!	
        // Identificadores de las Operaciones
        static final String sAPI_GET_FILTER = "API_GET_FILTER";
        static final String sAPI_SET_FILTER = "API_SET_FILTER";
        static final String sAPI_GET_DETAIL = "API_GET_DETAIL";
        static final String sAPI_SET_DETAIL = "API_SET_DETAIL";
        static final String sAPI_DELETE_DETAIL = "API_DELETE_DETAIL";
        static final String sAPI_GET_TABLE_FIELDS = "API_GET_TABLE_FIELDS";
        static final String sAPI_PERSIST_FILTERS = "API_PERSIST_FILTERS";
        static final String sAPI_REMOVE_FILTER = "API_REMOVE_FILTER";


    	//Nombre de los outputdef , items
    	static final String sSubsession = "HtmlFilter";
	    //David, recoger del request y si no viene establecer este:

        static final String sM4HtmlFilterCL="API_FILTER_HTML_CL";
        static final String sM4HtmlFilterCLAlias = "HtmlFilterCL";

    	static final String sNodeAPI_FILTER_HTML= "API_FILTER_HTML";
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

        // Items del nodo API_FILTER_HTML
        static final String sItemAPI_GET_FILTER = "API_GET_FILTER";
        static final String sItemAPI_SET_FILTER = "API_SET_FILTER";
        static final String sItemAPI_GET_DETAIL = "API_GET_DETAIL";
        static final String sItemAPI_SET_DETAIL = "API_SET_DETAIL";
        static final String sItemAPI_DELETE_DETAIL = "API_DELETE_DETAIL";
        static final String sItemAPI_GET_TABLE_FIELDS = "API_GET_TABLE_FIELDS";
        static final String sItemAPI_PERSIST_FILTERS = "API_PERSIST_FILTERS";
         static final String sItemAPI_REMOVE_FILTER = "API_REMOVE_FILTER";
        
        
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
        static final String sItemPROP_VALUE = "PROP_VALUE";
        
        
        //Items del nodo sNodeFLT_DIC_TABLES  
        static final String sItemID_TRANSLATED_OBJ = "ID_TRANSLATED_OBJ";    
        static final String sItemTABLE_INFO = "TABLE_INFO";
        
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

%>

<%
 
	//Recogida de valores
        String sIdOperation = getStringValue(request.getParameter("zidoperation"));
      	String sIdSentence = getStringValue(request.getParameter("zidsentence"));         
       	String sIdEscenario = getStringValue(request.getParameter("zidescenario"));      
       	String sIdTable = getStringValue(request.getParameter("zidtable"));  
        String sDireccion = getStringValue(request.getParameter("zreturnpage"));  
        String sIdRelationType = getStringValue(request.getParameter("zidrelationtype"));
        String zhtmlfilterinstance = getStringValue(request.getParameter("zhtmlfilterinstance"));

        String zcancel = getStringValue(request.getParameter("zcancel"));

      	String sIdDetail = getStringValue(request.getParameter("txtIdDetail"));  
  		String sFilterDetailGenInfo = getStringValue(request.getParameter("txtDetailGenInfo"));   
       	String sFilterDetailRightInfo = getStringValue(request.getParameter("txtDetailRightInfo"));   
       	String sFilterDetailLeftInfo = getStringValue(request.getParameter("txtDetailLeftInfo"));      
	
        String sRigthLeftTable= getStringValue(request.getParameter("RigthLeftTable"));          
        String sLastIdDetailSelected= getStringValue(request.getParameter("lastIdDetailSelected"));          
        String sLastUsingExist = getStringValue(request.getParameter("lastUsingExist"));          
        String sLastSelAgrupOpOpenSelected = getStringValue(request.getParameter("lastAgrupOpOpenSelected"));  
        String sLastRelOpSelected = getStringValue(request.getParameter("lastRelOpSelected"));  
        String sLastLogicOpSelected = getStringValue(request.getParameter("lastLogicOpSelected"));  
        String sLastAgrupOpCloseSelected = getStringValue(request.getParameter("lastAgrupOpCloseSelected"));  
        String sLastLeftTableSelected = getStringValue(request.getParameter("lastLeftTableSelected"));  
        String sLastLeftTableFieldSelected = getStringValue(request.getParameter("lastLeftTableFieldSelected"));  
        String sLastRigthTableSelected = getStringValue(request.getParameter("lastRigthTableSelected"));  
        String sLastRigthTableFieldSelected = getStringValue(request.getParameter("lastRigthTableFieldSelected"));  
        String sLastRigthValueSelected = getStringValue(request.getParameter("lastRigthValueSelected"));  
        String slastRadRightFieldValueIndex = getStringValue(request.getParameter("lastRadRightFieldValueIndex"));  
        String zdynfilteralias = getStringValue(request.getParameter("zdynfilteralias")); 

        
%>


<m4:beginjob/>

  <%--------------------------------------------------------------------------------------------%>
  <%------------------------ EJECUCION DEL METODO CORRESPONDIENTE-------------------------------%>
  <%--------------------------------------------------------------------------------------------%>


     <% if (sIdOperation.equals(sAPI_GET_FILTER)){ 
           if (zhtmlfilterinstance == null){%>      

                  
              <m4:datadef m4o="<%=sM4HtmlFilterCL%>" m4name="<%=sM4HtmlFilterCLAlias%>"/>
           <%}else{%>
              <m4:datadef m4o="<%=zhtmlfilterinstance%>" m4name="<%=sM4HtmlFilterCLAlias%>" m4find="TRUE"/>
           <%}%>

	    <m4:exec alias="<%=sItemAPI_GET_FILTER%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeAPI_FILTER_HTML%>" method="<%=sItemAPI_GET_FILTER%>">
		<m4:param name="P_SID_SENTENCE" value="<%=sIdSentence%>"/> 
		<m4:param name="P_SID_ESCENARIO" value="<%=sIdEscenario%>"/>
		<m4:param name="P_SID_TABLE" value="<%=sIdTable%>"/>
		<m4:param name="P_RELATION_TYPE" value="<%=sIdRelationType%>"/>
	 </m4:exec>
     <%}%>


     <% if (sIdOperation.equals(sAPI_SET_FILTER) ){ %>

	 <m4:exec alias="<%=sItemAPI_SET_FILTER%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeAPI_FILTER_HTML%>" method="<%=sItemAPI_SET_FILTER%>">
		<m4:param name="P_SID_SENTENCE" value="<%=sIdSentence%>"/> 
		<m4:param name="ARG_SENTENCE" value="<%=zcancel%>"/>
	 </m4:exec>
	
     <%}%>


     <% if (sIdOperation.equals(sAPI_GET_DETAIL) ){ %>
         

	 <m4:exec alias="<%=sItemAPI_GET_DETAIL%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeAPI_FILTER_HTML%>" method="<%=sItemAPI_GET_DETAIL%>">
		<m4:param name="P_SID_SENTENCE" value="<%=sIdSentence%>"/> 
		<m4:param name="P_IID_DETAIL" value="<%=sIdDetail%>"/>
	 </m4:exec>
     <%}%>


     
     <% if (sIdOperation.equals(sAPI_SET_DETAIL) ){ %>
        

	 <m4:exec alias="<%=sItemAPI_SET_DETAIL%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeAPI_FILTER_HTML%>" method="<%=sItemAPI_SET_DETAIL%>">
		<m4:param name="P_SID_SENTENCE" value="<%=sIdSentence%>"/> 
		<m4:param name="P_IID_DETAIL" value="<%=sIdDetail%>"/>
		<m4:param name="P_SDETAIL_GEN_INFO" value="<%=sFilterDetailGenInfo%>"/>
		<m4:param name="P_SDETAIL_RIGHT_TUPLA" value="<%=sFilterDetailRightInfo%>"/>
		<m4:param name="P_SDETAIL_LEFT_TUPLA" value="<%=sFilterDetailLeftInfo%>"/>

		
	 </m4:exec>
     <%}%>


     <% if (sIdOperation.equals(sAPI_DELETE_DETAIL) ){ %>
         
	 <m4:exec alias="<%=sItemAPI_DELETE_DETAIL%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeAPI_FILTER_HTML%>" method="<%=sItemAPI_DELETE_DETAIL%>">
		<m4:param name="P_SID_SENTENCE" value="<%=sIdSentence%>"/> 
		<m4:param name="P_IID_DETAIL" value="<%=sIdDetail%>"/>
	 </m4:exec>
     <%}%>

     <% if (sIdOperation.equals(sAPI_GET_TABLE_FIELDS) ){ %>
          
	 <m4:exec alias="<%=sItemAPI_GET_TABLE_FIELDS%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeAPI_FILTER_HTML%>" method="<%=sItemAPI_GET_TABLE_FIELDS%>">
		<m4:param name="P_STABLE_INFO" value="<%=sIdTable%>"/>
                <m4:param name="P_IWHICH_TABLE" value="<%=sRigthLeftTable%>"/>
	 </m4:exec>
     <%}%>
     
     <% if (sIdOperation.equals(sAPI_PERSIST_FILTERS) ){ %>

	 <m4:exec alias="<%=sItemAPI_PERSIST_FILTERS%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeAPI_FILTER_HTML%>" method="<%=sItemAPI_PERSIST_FILTERS%>">
	 </m4:exec>
	
     <%}%>

 <% if (sIdOperation.equals(sAPI_REMOVE_FILTER) ){ %>
         
	 <m4:exec alias="<%=sItemAPI_REMOVE_FILTER%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeAPI_FILTER_HTML%>" method="<%=sItemAPI_REMOVE_FILTER%>">
		<m4:param name="P_SID_SENTENCE" value="<%=sIdSentence%>"/> 
	 </m4:exec>
     <%}%>




	
  <%--------------------------------------------------------------------------------------------%>
  <%------------------------  INFORMACION DE VUELTA---------------------------------------------%>
  <%--------------------------------------------------------------------------------------------%>

	<%--------------------------------------------------------------------------------------------------%>
    <%------Información de operadores disponibles ------------------------------------------------------%>
	<%--------------------------------------------------------------------------------------------------%>
        <m4:outputdef m4alias="<%=sOutputAdvancedOperators%>"   m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_OP_ADVANCED%>" records="*"/>		
	<m4:outputdef m4alias="<%=sOutputGroupCloseOperators%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_OP_AGR_CLOSE%>" records="*"/>		
	<m4:outputdef m4alias="<%=sOutputGroupOpenOperators%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_OP_AGR_OPEN%>" records="*"/>		
	<m4:outputdef m4alias="<%=sOutputLogicOperators%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_OP_LOG%>" records="*"/>		
        <m4:outputdef m4alias="<%=sOutputRelationalOperators%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_OP_REL%>" records="*"/>	

    <%--------------------------------------------------------------------------------------------------%>
    <%------Información de tabla/s disponibles y sus campos---------------------------------------------%>
	<%--------------------------------------------------------------------------------------------------%>
        <m4:outputdef m4alias="<%=sOutputFilterTables%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_DIC_TABLES%>" records="*"/>		
	<m4:outputdef m4alias="<%=sOutputFilterLeftTableFields%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_DETAIL_LEFT_FIELDS%>" records="*"/>		
	<m4:outputdef m4alias="<%=sOutputFilterRigthTableFields%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_DETAIL_RIGHT_FIELDS%>" records="*"/>		

    <%--------------------------------------------------------------------------------------------------%>
    <%------Información del detalle solicitado  -------------------------------------------------------%>
	<%--------------------------------------------------------------------------------------------------%>
	<m4:outputdef m4alias="<%=sOutputFilterDetailInfo%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_DETAIL_INFO%>" records="*"/>		
	<m4:outputdef m4alias="<%=sOutputFilterDetailRightInfo%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_RIGHT_DETAIL%>" records="*"/>		
	<m4:outputdef m4alias="<%=sOutputFilterDetailLeftInfo%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_LEFT_DETAIL%>" records="*"/>		


    <%--------------------------------------------------------------------------------------------------%>
    <%------Información de todos los detalles  -------------------------------------------------------%>
	<%--------------------------------------------------------------------------------------------------%>
        <m4:outputdef m4alias="<%=sOutputFilterAllDetails%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_DETAIL_LIST_R%>" records="*"/>		

    <%--------------------------------------------------------------------------------------------------%>
    <%------Información del lenguaje natural  ----------------------------------------------------------%>
	<%--------------------------------------------------------------------------------------------------%>
        <m4:outputdef m4alias= "<%=sOutputFilterNatLanguage%>" m4object="<%=sM4HtmlFilterCLAlias%>" node="<%=sNodeFLT_FILTER_INFO%>" records="*"/>		


<m4:endjob/>