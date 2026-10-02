<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_treeview_2.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>



			<%
			// Pongo el nombre de mi JSP para las rellamadas
			String sJSPName = "";
			int iPos = -1;
			sJSPName = request.getServletPath();
			if (sJSPName != null) {
			iPos = sJSPName.lastIndexOf("/");
				if (iPos > -1) {
					sJSPName = sJSPName.substring(iPos + 1, sJSPName.length());
				}
			}
			request.setAttribute("JSP_NAME", sJSPName);

			// Pongo el nombre del frame donde muestro el árbol
			request.setAttribute("TREEVIEWFRAME_NAME", sTreeViewFrame);
	
			// Pongo el mensaje de aviso cuando se pasa el nº de nodos permitidos
			request.setAttribute("NUMMAXNODESTOSHOW_MESSAGE", sNumMaxNodesToShowError);
			// Pongo el resto de mensajes
			request.setAttribute("EXPAND_MESSAGE", sExpandMsg);
			request.setAttribute("COLLAPSE_MESSAGE", sCollapseMsg);
			request.setAttribute("ROOT_MESSAGE", sRootMsg);
	
			// Construyo el árbol
			M4Operations oM4Operations = new M4Operations(request);
			OperationsIterator cData = new OperationsIterator(oM4Operations, "KAT_TREENODE_ALIAS", sM4Object_Alias, sM4Node);
			TreeBuilder oTreeBuilder = new TreeBuilder(new DefaultHierarchy(sKey, sParentKey, sNavigatedItem, sRootId));
			cData.resetIterator();
			int iNumNodes = 0;
			try {
				iNumNodes = oTreeBuilder.addAllNodes(cData);
			} catch (TreeBuilderException e){
				out.println(sErrorMsg);
			}
			
			// Si no hay datos no pinto nada
			if (iNumNodes > 0) {
				Node oSearchNode = null;
				// Si me tengo que situar en un nodo
				if (sNodeToSearchKey != null) {
					cData.resetIterator();
					oSearchNode = oTreeBuilder.searchNode(cData, sKey[0], sNodeToSearchKey);
					if (oSearchNode != null) {
						// Pongo donde me tengo que situar
						request.setAttribute("NODE_TO_SEARCH", oSearchNode.getKey());
						// Si vengo de una carga On-Demand intento situarme en el 1º hijo			
						if (iOption == 1 && oSearchNode.getFirstSon() != null) {
							cData.resetIterator();
							oSearchNode = oTreeBuilder.searchNode(cData, sKey[0], oSearchNode.getFirstSon().getId());
						}
					}
				} else {
					// Me situo en el padre
					request.setAttribute("NODE_TO_SEARCH", oTreeBuilder.getRootNode().getKey());
				}	
				
				TreeRender oPintador = new TreeRenderExplorer(new TreeCanvasJSP(sTreeNodePage, request, pageContext));
				// Pinto el árbol
				if (sNodeId == null) {
					if (sNodeKey == null) {
						oPintador.render(oTreeBuilder.getRootNode(), true, iNumMaxNodesToShow, iDeepShow);
					} else {
						oPintador.render(oTreeBuilder.getNode(sNodeKey), false, iNumMaxNodesToShow, iDeepShow);
					}	
				} else {
					cData.resetIterator();
					oSearchNode = oTreeBuilder.getNodeByField(cData, sKey[0], sNodeId);
					if (oSearchNode != null) {
						oPintador.render(oSearchNode, false, iNumMaxNodesToShow, iDeepShow);				
					} else if  (iOption == 0) {
					  	   	   if (sNodeKey == null) {
							   	  oPintador.render(oTreeBuilder.getRootNode(), true, iNumMaxNodesToShow, iDeepShow);
								} else {
								  oPintador.render(oTreeBuilder.getNode(sNodeKey), false, iNumMaxNodesToShow, iDeepShow);
								}	
					} 
				}
			}
			%>