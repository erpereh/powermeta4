<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_treeview_1.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>



	<%-- inicio del job --%>
	<m4:beginjob/>
	
		<m4:datadef m4o="<%=sM4Object%>" m4name="<%=sM4Object_Alias%>"/>
		<%
		// Acciones posibles que vienen en el parametro 'Option'
		// 0.- Carga inicial
		// 1.- Carga On-Demand
		// 2.- Zoom
		// 3.- Busqueda
		// 4.- Posicionamiento
		// 5.- Carga despues de la busqueda

		switch (iOption) {
			case 0: {
				// Carga inicial
				%>
				<m4:exec m4method="<%=sExec_InitialLoad%>">	
					<m4:param name="<%=sM4Item_InitialLoad_Param_DeepLoad%>" value="<%=sDeepLoad%>"/>
					<m4:param name="<%=sM4Item_InitialLoad_Param_RootNode%>" value="<%=sIdRootNode%>"/>
					<m4:param name="<%=sM4Item_InitialLoad_Param_DateStart%>" value=""/>
					<m4:param name="<%=sM4Item_InitialLoad_Param_DateEnd%>" value=""/>
				</m4:exec>
				<%
				break;
			}
			case 1: {
				// Carga On-Demand
				%>
				<m4:exec m4method="<%=sExec_OnDemandLoad%>">
					<m4:param name="<%=sM4Item_OnDemandLoad_Param_Child%>" value="<%=sIdNode%>"/>
					<m4:param name="<%=sM4Item_OnDemandLoad_Param_Parent%>" value="<%=sIdParentNode%>"/>
					<m4:param name="<%=sM4Item_OnDemandLoad_Param_DeepLoad%>" value="<%=sDeepLoad%>"/>
				</m4:exec>
				<%
				break;
			}
			case 2: {
				break;
			}
			case 3: {
				// Busqueda
				%>
				<m4:exec m4method="<%=sExec_Search%>">
					<m4:param name="<%=sM4Item_Search_Param_Condition%>" value="<%=sSearchCondition%>"/>
					<m4:param name="<%=sM4Item_Search_Param_Value%>" value="<%=sSearchValue%>"/>
					<m4:param name="<%=sM4Item_Search_Param_Field%>" value="<%=sSearchField%>"/>
				</m4:exec>
				<%
				break;
			}
			case 4: {
				break;
			}
			case 5: {
				// Carga de un nodo despues de la búsqueda
				%>
				<m4:exec m4method="<%=sExec_SearchLoad%>">
					<m4:param name="<%=sM4Item_SearchLoad_Param_Node%>" value="<%=sIdNodeToSearchLoad%>"/>
				</m4:exec>
				<%
				break;
			}
		}	
		%>
		<%-- Pongo un filtro para ordenar los datos --%>
		<m4:sortitems m4name="<%=sSortItems%>">
			<m4:param name="<%=sKey[0]%>" value="ASC"/>
		</m4:sortitems>
		<%-- Defino el conjunto de datos a devolver --%>
		<m4:outputdef m4alias="KAT_TREENODE_ALIAS">
			<m4:param name="M4NAME0" value="<%=sOutPutDef%>"/>
		</m4:outputdef>
		<m4:outputdef m4alias="<%=znodocom%>">
			<m4:param name="m4name0" value="<%=zoutputdefcom%>"/>		
		</m4:outputdef>				
		<%-- Quito el filtro para ordenar los datos --%>
		<m4:removefilter m4name="<%=sSortItems%>"/>

	<%-- fin del job --%>
	<m4:endjob/>

	<%
	// Si vengo de una busqueda cojo el nº de registros que ha econtrado para ver lo que hago
	if (iOption == 3) {
		M4Operations m4O = new M4Operations(request);
		StringBuffer sbNumber = new StringBuffer();
		m4O.execMethod("Search", sbNumber);
		int iResult;
		try {
			iResult = new Float(sbNumber.toString()).intValue();
		} catch (Exception e) {
			iResult = 0; 
		}
		if (iResult > 0) {
			// Muestro los resultados
			%>
			<script type="text/javascript" language="Javascript1.5">
				<!-- 
				document.location.href="<%=sTreeSearchResultsPage%>"
				-->
			</script>
			<%
		}
	}
	%>

	