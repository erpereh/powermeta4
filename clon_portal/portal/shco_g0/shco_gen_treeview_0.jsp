<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_treeview_0.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


	<%
	// Configuración del árbol
	final String sDeepLoad = (String)pageContext.getAttribute("DEEP_LOAD"); // "1";
	final int iDeepShow = 1;
	final int iNumMaxNodesToShow = 100;
	final String sNavigatedItem = "SHCO_NAVIGATED";
	final String sTreeViewFrame = "_parent"; // "treeview" o "_parent"	
	
	// Mensajes para las traducciones
	M4Operations oM4Op = new M4Operations(request);
	final String sErrorMsg = oM4Op.getLabel(znodolabel, zm4object, znodolabel, "SHCO_LB_ERRORMSG"); // "ERROR, Clave duplicada.";
	final String sNumMaxNodesToShowError = com.meta4.taglib.util.M4PresentationUtilTaglib.escape(oM4Op.getLabel(znodolabel, zm4object, znodolabel, "SHCO_LB_MAXNODESMSG")); // "Se ha excedido el número máximo de nodos del árbol a mostrar.";
	final String sExpandMsg = oM4Op.getLabel(znodolabel, zm4object, znodolabel, "SHCO_LB_EXPANDMSG");
	final String sCollapseMsg = oM4Op.getLabel(znodolabel, zm4object, znodolabel, "SHCO_LB_COLLAPSEMSG");
	final String sRootMsg = oM4Op.getLabel(znodolabel, zm4object, znodolabel, "SHCO_LB_ROOTMSG");
	
	// Objetos	
	final String sM4Node = "SHCO_GN_TREE";
	final String sM4Item_InitialLoad = "SHCO_INIT_LOAD";
	final String sM4Item_InitialLoad_Param_DeepLoad = "ARG_DEEP_LEVEL";
	final String sM4Item_InitialLoad_Param_RootNode = "ARG_ROOT_NODE";
	final String sM4Item_InitialLoad_Param_DateStart = "ARG_DATE_START";
	final String sM4Item_InitialLoad_Param_DateEnd = "ARG_DATE_END";	
	final String sM4Item_OnDemandLoad = "SHCO_ONDEMAND_LOAD";
	final String sM4Item_OnDemandLoad_Param_Child = "ARG_ID_CHILD";
	final String sM4Item_OnDemandLoad_Param_Parent = "ARG_ID_PARENT";
	final String sM4Item_OnDemandLoad_Param_DeepLoad = "ARG_DEEP_LEVEL";	
	final String sM4Item_Search = "SHCO_SEARCH";
	final String sM4Item_Search_Param_Condition = "ARG_SEARCH_CRITERIA";
	final String sM4Item_Search_Param_Value = "ARG_SEARCH_VALUE";
	final String sM4Item_Search_Param_Field = "ARG_SEARCH_FIELD";
	final String sM4Item_SearchLoad = "SHCO_SEARCH_LOAD";
	final String sM4Item_SearchLoad_Param_Node = "ARG_ID_WORK_UNIT";
	
	// Tags
	final String sM4Object_Alias = sM4Object;
	final String sExec_InitialLoad = "LoadRoot:" + sM4Object_Alias + "!" + sM4Node + "." + sM4Item_InitialLoad;
	final String sExec_OnDemandLoad = "LoadOnDemand:" + sM4Object_Alias + "!" + sM4Node + "." + sM4Item_OnDemandLoad;	
	final String sExec_Search = "Search:" + sM4Object_Alias + "!" + sM4Node + "." + sM4Item_Search;
	final String sExec_SearchLoad = "LoadSearch:" + sM4Object_Alias + "!" + sM4Node + "." + sM4Item_SearchLoad;
	final String sOutPutDef = sM4Object_Alias + "!" + sM4Node + "[*]";
	final String sSortItems = sM4Object_Alias + "!" + sM4Node + ".SORTFILTER_ALIAS";
	
	// Parametros
	int iOption = 0;
	try {
		iOption = Integer.parseInt(request.getParameter("Option"));
	} catch (Exception e) {}
	String sNodeKey = request.getParameter("NodeKey");
	if (sNodeKey != null && sNodeKey.equals("null")) {
		sNodeKey = null;
	}
	String sNodeId = request.getParameter("NodeId");	
	if (sNodeId != null && sNodeId.equals("null")) {
		sNodeId = null;
	}
	String sSearchCondition = request.getParameter("SearchCondition");
	if (sSearchCondition != null && sSearchCondition.equals("null")) {
		sSearchCondition = null;
	}			
	String sSearchValue = request.getParameter("SearchValue");
	if (sSearchValue != null && sSearchValue.equals("null")) {
		sSearchValue = null;
	}
	String sSearchField = request.getParameter("SearchField");
	if (sSearchField != null && sSearchField.equals("null")) {
		sSearchField = null;
	}
	String sNodeToSearchKey = request.getParameter("NodeToSearchKey");
	if (sNodeToSearchKey != null && sNodeToSearchKey.equals("null")) {
		sNodeToSearchKey = null;
	}
	String sIdNode = request.getParameter("IdNode");
	if (sIdNode != null && sIdNode.equals("null")) {
		sIdNode = null;
	}
	String sIdParentNode = request.getParameter("IdParentNode");
	if (sIdParentNode != null && sIdParentNode.equals("null")) {
		sIdParentNode = null;
	}
	String sIdNodeToSearchLoad = request.getParameter("IdNodeToSearchLoad");
	if (sIdNodeToSearchLoad != null && sIdNodeToSearchLoad.equals("null")) {
		sIdNodeToSearchLoad = null;
	}
	String sIdRootNode = request.getParameter("IdRootNode");
	if (sIdRootNode == null || sIdRootNode.equals("")) {
		sIdRootNode = sRootId;
	}
	
	%>
