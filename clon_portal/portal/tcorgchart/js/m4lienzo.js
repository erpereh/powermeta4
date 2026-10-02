/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: m4lienzo.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */

'use strict';

var meta4 = meta4 || {};

meta4.orgdyn = meta4.orgdyn || {};


meta4.orgdyn.lienzo = ( function() {	
	
	var _paperSizePixels = {
		"width"  : 0,
		"height" : 0
	};

	var M4_MAX_DIMMATRIX = {
		"rows" : 10,
		"cols" : 20
	};

	var M4_DEF_DIMMATRIX = {
		"rows" : 2,
		"cols" : 3
	};	

	var M4_INIT = "@@ACTIVATED_WYSIWYG@@";
	var _initialized_func;

	var M4_DEF_PAPERSIZE = "A4";

	var M4_SEP_SERIALIZE = "#-#";
	var _lienzo_rows = M4_DEF_DIMMATRIX.rows;
	var _lienzo_cols = M4_DEF_DIMMATRIX.cols;

	var _paperSizeLienzo = M4_DEF_PAPERSIZE;

	//Distancia Y del root hasta el borde superior del papel (margen superior)
	//Es la distancia inicial hasta el nodo root desde el borde superior del lienzo
	var _inicialRootYMargin = 80; 
	
	/** Type orientation page*/
	var m4_landscape = 90;
	var m4_portrait = 0;

	var _orientatioPaperLienzo = m4_landscape; //Orientación del papel del Lienzo

	var M4PaperSizes = {      
		  C10 : { width: 28,  height: 40  },      	
		  C9  : { width: 40,  height: 57  },
		  C8  : { width: 57,  height: 81  },
		  C7  : { width: 81,  height: 114 },
		  C6  : { width: 114, height: 162 },
		  C5  : { width: 162, height: 229 },
		  C4  : { width: 229, height: 324 },     	  
		  C3  : { width: 324, height: 458 }, 
		  C2  : { width: 458, height: 648 }, 
		  C1  : { width: 648, height: 917 }, 
		  C0  : { width: 917, height: 1297 },

		  B10 : { width: 31,  height: 44  },      	
		  B9  : { width: 44,  height: 62  },
		  B8  : { width: 62,  height: 88  },
		  B7  : { width: 88,  height: 125 },
		  B6  : { width: 125, height: 176 },
		  B5  : { width: 176, height: 250 },
		  B4  : { width: 250, height: 353 },     	  
		  B3  : { width: 353, height: 500 }, 
		  B2  : { width: 500, height: 707 }, 
		  B1  : { width: 707, height: 1000 }, 
		  B0  : { width: 1000, height: 1414 },

		  A10 : { width: 26,  height: 37  },      	
		  A9  : { width: 37,  height: 52  },
		  A8  : { width: 52,  height: 74  },
		  A7  : { width: 74,  height: 105 },
		  A6  : { width: 105, height: 148 },
		  A5  : { width: 148, height: 210 },
		  A4  : { width: 210, height: 297 },     	  
		  A3  : { width: 297, height: 420 }, 
		  A2  : { width: 420, height: 594 }, 
		  A1  : { width: 594, height: 841 }, 
		  A0  : { width: 841, height: 1189 }
	};

	var M4_JSON_ROUND_DECIMAL = 3;

	//Matriz de posición de las páginas
	var _positionPages;

	function Coordinate (x, y) {
		this.X = x;
		this.Y = y;
	}

	function round(value, decimals) {
 		return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
	}

	function init(value) {
		_initialized_func = (value === M4_INIT);
	}

	//Pinta todo el lienzo (matriz de papeles)
	function paintLienzo(st, ctx) {
		
		//Paint a paper
		function paintPaper (ctx, initialPosX, initialPosY, width, height) {      
		 	  var innerMargin = 3;

		 	  // Dibujamos los límites del papel con línea discontínua
		 	  ctx.strokeStyle ="#8E8E8E";
		      ctx.setLineDash([4, 3]);
		      ctx.beginPath();         
		      ctx.rect(0 + initialPosX, 0 + initialPosY, width, height);

		      // Dibujamos el papel en gris suave
		      ctx.fillStyle="#eeedee";
		      
		      ctx.fillRect(0 + innerMargin + initialPosX, 0 + innerMargin + initialPosY, width - 2 * innerMargin, height - 2 * innerMargin);       
		      ctx.stroke();
		}

		// Construct a bidimensional array with the upper-left corner position of the pages
		function calculatePositionPages(paperWidthPixels, paperHeightPixels) {
	/*
			function calculateMatrixLienzo(paperWidthPixels, paperHeightPixels) {	
				function getExtremeNodes() {
					var mostLeftPosX = Number.MAX_SAFE_INTEGER;
					var mostTopPosY = Number.MAX_SAFE_INTEGER;
					var mostRightPosX = Number.MIN_SAFE_INTEGER;
					var mostDownPosY = Number.MIN_SAFE_INTEGER;

					st.graph.eachNode( function (node) {			
					
						if (node.drawn  && node.m4ignore == false) {

							if (node.pos.x < mostLeftPosX) {
								mostLeftPosX = node.pos.x;
							}

							if (node.pos.y < mostTopPosY) {
								mostTopPosY = node.pos.y;
							}

							if (node.pos.x > mostRightPosX) {
								mostRightPosX = node.pos.x;
							}

							if (node.pos.y > mostDownPosY) {
								mostDownPosY = node.pos.y;
							}
						}
					});

					var dimension = {mostLeftPosX: mostLeftPosX, mostTopPosY:mostTopPosY, mostRightPosX:mostRightPosX, mostDownPosY:mostDownPosY };
					return dimension;
				}

				var posNodes = getExtremeNodes();

				// Añadimos la dimensión del nodo
				posNodes.mostRightPosX += st.graph.Node.width;
				posNodes.mostDownPosY += (st.graph.Node.height + _inicialRootYMargin);

				width =  Math.abs(posNodes.mostLeftPosX) + Math.abs(posNodes.mostRightPosX);
				height = Math.abs(posNodes.mostTopPosY) + Math.abs(posNodes.mostDownPosY);

				var dimTree = {width: width, height:height};

				_lienzo_cols = Math.ceil (dimTree.width/paperWidthPixels);
				_lienzo_rows = Math.ceil (dimTree.height/paperHeightPixels);

				return posNodes;	
			}
	*/

			// Auxiliar Func to create a bi-dimensional array
			function matrix( rows, cols, defaultValue){

			  var arr = [];

			  // Creates all lines:
			  for(var i=0; i < rows; i++){

			      // Creates an empty line
			      arr.push([]);

			      // Adds cols to the empty line:
			      arr[i].push( new Array(cols));

			      for(var j=0; j < cols; j++){
			        // Initializes:
			        //var a = new Object();        
			        var a = {};
			        a = defaultValue;
			        arr[i][j] =  a;		        
			      }
			  }

			  return arr;
			}

			// Calculamos las posiciones superior izquierda de cada página en la matriz del lienzo, para poder pintar las páginas
			function calculatePositions() {
				var positionPages = matrix(_lienzo_rows, _lienzo_cols, 0);

				var iCol = -1;

				if (_lienzo_cols % 2 === 0) {
					//par
					iCol = _lienzo_cols / 2;

					//Al ser par podemos querer que el arbol quede centrado entre dos páginas
					//rootNodePosX = 2 * rootNodePosX;

					//... el root alineado a la derecha de la página por la izquierda más cercana al centro
					rootNodePosX = 2 * rootNodePosX + (st.graph.Node.width / 2);

				} else {
					//impar
					// IE11 NotDefined:     iCol = Math.trunc(_lienzo_cols / 2) + 1;
					iCol = _lienzo_cols / 2;
					iCol = parseInt(iCol.toString()) + 1;
				}

				//Buscamos la posición de la página [0,0] para empezar a rellenar toda la matriz
				var i00PosX = rootNodePosX - ((iCol - 1) * paperWidthPixels);
				var i00PosY = rootNodePosY;
				for (var r = 0; r < _lienzo_rows; r++) {
					for (var c = 0; c < _lienzo_cols; c++) {
						var posX = i00PosX + (c * paperWidthPixels);
						var posY = i00PosY + (r * paperHeightPixels);

						positionPages[r][c] = {
							x: posX,
							y: posY
						};
					}
				}

				return positionPages;
			}

			//initialPosX e initialPosY se corresponde con la página donde está el nodo ROOT.
			//Dibujamos el papel inicial centrado sobre el root y desplazado hacia arriba
			var rootNodePosX = -paperWidthPixels / 2;
			var rootNodePosY = -_inicialRootYMargin;	

			// Hay que averiguar qué posición ocupa la página del root en la matriz

			// Establecemos de forma automática el número de filas y columnas de la matriz según la dimensión del árbol visualizado
			//var posNodes = calculateMatrixLienzo(paperWidthPixels, paperHeightPixels);			
			return calculatePositions();
		}

		//function getMmByPixel (pixels, dpi) {
		//    return pixels * 25.4 / dpi;
		//}

		function getPixelsByMm (mm, dpi) {
		    return mm * dpi / 25.4;
		}

		//Seguridad
		if (!_initialized_func) {
			return;
		}

		var verLienzo = document.getElementById('verLienzo');
	    if (!verLienzo.checked) {
	    	return;
	  	}

	  	//Borramos el canvas del lienzo
		st.canvas.canvases[1].clear();

		if (ctx === undefined) {
			ctx = st.canvas.canvases[1].getCtx();
		}

		var dpi_x = document.getElementById('divDPI').offsetWidth;
		var dpi_y = document.getElementById('divDPI').offsetHeight;		

		//Por defecto la orientación es horizontal
		var paperWidthMm = M4PaperSizes[_paperSizeLienzo].height;
		var paperHeightMm =  M4PaperSizes[_paperSizeLienzo].width;      
			
		if (_orientatioPaperLienzo == m4_portrait) {
			paperWidthMm = M4PaperSizes[_paperSizeLienzo].width;
			paperHeightMm =  M4PaperSizes[_paperSizeLienzo].height;      
		}
	     
		_paperSizePixels.width  = round(getPixelsByMm(paperWidthMm,  dpi_x), 2);
		_paperSizePixels.height = round(getPixelsByMm(paperHeightMm, dpi_y), 2);

		// Recalculamos si se cambió de papel o de orientación	
		_positionPages = calculatePositionPages(_paperSizePixels.width, _paperSizePixels.height);
		
		//Paint matrix of papers
		for (var r = 0; r < _lienzo_rows; r++) {
	  		for (var c = 0; c < _lienzo_cols; c++) {
	  			paintPaper(ctx, _positionPages[r][c].x, _positionPages[r][c].y, _paperSizePixels.width, _paperSizePixels.height);				
	  		}
	  	}

	}

	//Devuelve true si el nodo es virtual
	function isVirtual(vnode) {
		return (vnode.id.substring(0, 3) == "*V*");
	}

	/**
	* Postproceso que añade nodos virtuales para que JAVA pueda pintar los links
	* Los nodos virtuales marcan una posición hacia la cual JAVA pintará un link desde el propio nodo
	*/
	function addVirtualNodesForLinks(positionNodesPerPaged, st) {

		// Devuelve el nodo padre [0] del nodo real dado
		function getParentNode(n) {
			var parents = n.getParents();
			var hasParents = (parents !== null && parents.length > 0);	
	    	if (hasParents) {
		   		return parents[0];	    
	    	}	
	    	return null;
		}

		// Devuelve el nodo real a partir de su id
		function getNode(id) {
			return st.graph.getNode(id);
		}

		//Busca el nodo en el array de nodos posicionados
		function searchNodeById(positionNodesPerPaged, id) {
			for (var iPage = 0; iPage < positionNodesPerPaged.length; iPage++) {
				for (var iNode = 0; iNode < positionNodesPerPaged[iPage].nodes.length; iNode++) {		
					if (id == positionNodesPerPaged[iPage].nodes[iNode].id)
					{
						return {"oPage" : positionNodesPerPaged[iPage], "oNode": positionNodesPerPaged[iPage].nodes[iNode]};
					}
				}
			}

			return null;
		}

		//Buscamos si ya tenemos en los nodos de la página añadido un nodo virtual en la misma posición
		function searchVirtualNodeByPosition(nodes, posVNode) {
			
			for (var iNode = 0; iNode < nodes.length; iNode++) {		
				if (isVirtual(nodes[iNode])) { 
					if (round(posVNode.X, M4_JSON_ROUND_DECIMAL) === round(nodes[iNode].pos.X, M4_JSON_ROUND_DECIMAL) && round(posVNode.Y, M4_JSON_ROUND_DECIMAL) === round(nodes[iNode].pos.Y, M4_JSON_ROUND_DECIMAL)) {
						return iNode;
					}
				}
			}
			
			return -1;
		}

		// Buscamos si ya tenemos en los nodos de la página añadido un nodo virtual con el mismo Id
		function searchVirtualNodeById(nodes, id) {
			
			for (var iNode = 0; iNode < nodes.length; iNode++) {		
				if (isVirtual(nodes[iNode])) { 
					if (id == nodes[iNode].id) {
						return iNode;
					}
				}
			}
			
			return -1;
		}

		//Comparamos las posiciones reales de los nodos
		function getPositionVNode(childRealPos, parentRealPos, childNodeInPage, parentNodeInPage, childNodeMatrix, parentNodeMatrix) {
			var iZone;
			var newPosX;
			var newPosY;
			var subtreeOffset_pending; //Parte del subtreeOffset que queda en la otra página

			if (childNodeMatrix.col == parentNodeMatrix.col) {			
				//PADRE EN MISMA COLUMNA DE PÁGINAS ( le pilla en alguna página superior)

				// PADRE EN POSICIÓN SUPERIOR (CASO NORMAL)
				if (parentRealPos.y < childRealPos.y) {

					// Si la distancia del nodo hijo al borde superior es menor que el _st.config.subtreeOffset (está  muy cerca), el VNode corta al borde superior sin buscar el centro del padre
					if ( childNodeInPage.Y - st.config.subtreeOffset > 0) {
						// El nodo virtual debe quedar en el borde superior del papel y centrado con el padre						
						iZone = 1;	//Zone 1: El Padre arriba del hijo (en otra página)
						newPosX = round(parentNodeInPage.X + (st.graph.Node.width/2), M4_JSON_ROUND_DECIMAL);
						newPosY = 0;
					} else {
						// El nodo virtual debe quedar en el borde superior del papel y centrado con el hijo						
						iZone = 11;	//Zone 11: El Padre arriba del hijo (en otra página), pero el hijo muy cerca del borde superior		
						subtreeOffset_pending = Math.abs(childNodeInPage.Y - st.config.subtreeOffset);
						newPosX = round(childNodeInPage.X + (st.graph.Node.width/2), M4_JSON_ROUND_DECIMAL);
						newPosY = 0;
					}

				} else {
					if ( childNodeInPage.Y - st.config.subtreeOffset > 0) {
						// El nodo virtual debe quedar en el borde inferior del papel y centrado con el padre					
						iZone = 2; //Zone 2: El Padre debajo del hijo (en otra página)(Casp muy raro!!!!)
						newPosX = round(parentNodeInPage.X + (st.graph.Node.width/2), M4_JSON_ROUND_DECIMAL);
						newPosY = _paperSizePixels.height;
					} else {
						iZone = 21; //Zone 21: El Padre debajo del hijo (en otra página)(Casp muy raro!!!!)
						subtreeOffset_pending = Math.abs(childNodeInPage.Y - st.config.subtreeOffset);
						newPosX = round(childNodeInPage.X + (st.graph.Node.width/2), M4_JSON_ROUND_DECIMAL);
						newPosY = 0;
					}
				}

			} else {
				//PADRE EN OTRA COLUMNA DE PÁGINAS ( le pilla en alguna página a la izquierda o derecha)
				// Si la distancia del nodo hijo al borde superior es mayor que el _st.config.subtreeOffset (no está tan cerca), el VNode corta por el borde derecho o izquierdo
				if ( childNodeInPage.Y - st.config.subtreeOffset > 0) {
					if (parentRealPos.x  + (st.graph.Node.width/2) > childRealPos.x) {
						//PADRE A LA DERECHA DEL HIJO 
						//Nodo virtual se coloca en borde derecho de la página					
						iZone = 4;  //Zone 0: El Padre está a la derecha del hijo
						newPosX = round (_paperSizePixels.width, M4_JSON_ROUND_DECIMAL);
						newPosY = round (childNodeInPage.Y - st.config.subtreeOffset, M4_JSON_ROUND_DECIMAL);
					} else {
						//PADRE A LA IZQUIERDA DEL HIJO 
						//Nodo virtual se coloca en borde izquierdo de la página						
						iZone = 3;	//Zone 3: El Padre está a la izquierda del hijo
						newPosX = 0;
						newPosY = round(childNodeInPage.Y - st.config.subtreeOffset, M4_JSON_ROUND_DECIMAL);
					}
				} else {
					// Si la distancia del nodo hijo al borde superior es menor que el _st.config.subtreeOffset (está  muy cerca), el VNode corta al borde superior sin buscar el centro del padre
					if (parentRealPos.x  + (st.graph.Node.width/2) > childRealPos.x) {
						//PADRE A LA DERECHA DEL HIJO 
						//Nodo virtual se coloca en borde derecho de la página					
						iZone = 41;  //Zone 0: El Padre está a la derecha del hijo
						subtreeOffset_pending = Math.abs(childNodeInPage.Y - st.config.subtreeOffset);
						newPosX = round(childNodeInPage.X + (st.graph.Node.width/2), M4_JSON_ROUND_DECIMAL);
						newPosY = 0;
					} else {
						//PADRE A LA IZQUIERDA DEL HIJO 
						//Nodo virtual se coloca en borde izquierdo de la página						
						iZone = 31;	//Zone 3: El Padre está a la izquierda del hijo
						subtreeOffset_pending = Math.abs(childNodeInPage.Y - st.config.subtreeOffset);
						newPosX = round(childNodeInPage.X + (st.graph.Node.width/2), M4_JSON_ROUND_DECIMAL);
						newPosY = 0;
					}
				}
			}

			return {"Zone": iZone, "pos": {"X": newPosX, "Y": newPosY}, "subtreeOffset_pending" : subtreeOffset_pending};
		}

		//Devuelve el índice de la siguiente página según la zona en la que nos encontremos
		function getNextPageByZone(iZone, iPage) {
			if (iZone === 4) {
				return iPage + 1;
			} else if (iZone === 3) {
				return iPage - 1;
			} else if (iZone === 1 || iZone === 11 || iZone === 21 || iZone === 31 || iZone === 41) {
				return iPage - parseInt(lienzo_cols);
			} else if (iZone === 2) {
				return  iPage + parseInt(lienzo_cols);
			}
		}

		// Change position depending on the zone in next page
		function getPositionVNodeInNextPage(posVNode) {
			if (posVNode.Zone === 4){
				//En la página siguiente también hay que añadir el mismo nodo virtual
				//El nodo virtual ahora se coloca en el borde izquierdo de la página
				posVNode.pos.X = 0;			
			} else if (posVNode.Zone === 3) {
				//En la página anterior también hay que añadir el mismo nodo virtual								
				//El nodo virtual ahora se coloca en el borde derecho de la página
				posVNode.pos.X = round(_paperSizePixels.width, M4_JSON_ROUND_DECIMAL);
			} else if (posVNode.Zone === 1 || posVNode.Zone === 11 || posVNode.Zone === 21 || posVNode.Zone === 41 || posVNode.Zone === 31) {
				//En la página por arriba de la actual hay que añadir el VNode en el borde inferior
				posVNode.pos.Y = round( _paperSizePixels.height, M4_JSON_ROUND_DECIMAL);
				//if (posVNode.subtreeOffset_pending !== undefined && posVNode.subtreeOffset_pending > 0) {
				//	posVNode.pos.Y = posVNode.pos.Y - posVNode.subtreeOffset_pending;
				//	posVNode.subtreeOffset_pending = undefined;
				//} 
			} else if (posVNode.Zone === 2) {
				//En la página debajo de la actual hay que añadir el VNode en el borde superior
				posVNode.pos.Y = 0;
			}

			return posVNode;
		}

		function getPositionVNodeInCurrentPage(posVNode, parentNodeInPage) {
			if (posVNode.Zone === 4 || posVNode.Zone === 41) {
					//En la página siguiente también hay que añadir el mismo nodo virtual
					//El nodo virtual ahora se coloca en el borde izquierdo de la página
					//posVNode.pos.X = 0;
					posVNode.pos.X =round(_paperSizePixels.width, M4_JSON_ROUND_DECIMAL);
					if (posVNode.subtreeOffset_pending !== undefined && posVNode.subtreeOffset_pending > 0) {
						posVNode.pos.Y = posVNode.pos.Y - posVNode.subtreeOffset_pending;
						posVNode.subtreeOffset_pending = undefined;
					}

			} else if (posVNode.Zone === 3 || posVNode.Zone === 31) {
					//En la página anterior también hay que añadir el mismo nodo virtual								
					//El nodo virtual ahora se coloca en el borde derecho de la página
					//posVNode.pos.X = round(_paperSizePixels.width, M4_JSON_ROUND_DECIMAL);
					posVNode.pos.X = 0;
					if (posVNode.subtreeOffset_pending !== undefined && posVNode.subtreeOffset_pending > 0) {
						posVNode.pos.Y = posVNode.pos.Y - posVNode.subtreeOffset_pending;
						posVNode.subtreeOffset_pending = undefined;
					}
			} else if (posVNode.Zone === 1 || posVNode.Zone === 11) {
					//En la página por arriba de la actual hay que añadir el VNode en el borde inferior
					posVNode.pos.X = round(parentNodeInPage.X + (st.graph.Node.width/2), M4_JSON_ROUND_DECIMAL);
					posVNode.pos.Y = 0;
			} else if (posVNode.Zone === 2 || posVNode.Zone === 21) {
					//En la página debajo de la actual hay que añadir el VNode en el borde superior
					posVNode.pos.X = round(parentNodeInPage.X + (st.graph.Node.width/2), M4_JSON_ROUND_DECIMAL);
					posVNode.pos.Y = round( _paperSizePixels.height, M4_JSON_ROUND_DECIMAL);					
			}

			return posVNode;
		}

		function updateZone(posVNode, iPageNodeParent, iCurrentPage) {			
			var iColPageParent = (iPageNodeParent % _lienzo_cols);
			var iColPageCurrent = (iCurrentPage % _lienzo_cols);

			// El padre está en la misma columna
			if (iColPageParent === iColPageCurrent) {
				if (iPageNodeParent < iCurrentPage) {
					posVNode.Zone = 1;
					// El padre está en la misma columna y mayor  fila
				} else if (iPageNodeParent > iCurrentPage) {
					posVNode.Zone = 2;
				}
			} else {
			// El padre está en otra columna
				// El padre está por la derecha
				if (iColPageParent > iColPageCurrent) {
					posVNode.Zone = 4;
				// El padre está por la izquierda
				} else {
					posVNode.Zone = 3;				
				}
			}

			
			return posVNode;
		}

		// Monta el nombre del nodo virtual a partir del valor pasado
		function getNewVNodeId(index) {
			return "*V*" + index;
		}

		//Seguridad
		if (!_initialized_func) {
			return;
		}

		//var lienzo_rows = meta4.orgdyn.lienzo.getLienzoDim().rows;
		var lienzo_cols = meta4.orgdyn.lienzo.getLienzoDim().cols;
		var totVirtualNodes = 0;

		for (var iPage = 0; iPage < positionNodesPerPaged.length; iPage++) {
			for (var iNode = 0; iNode < positionNodesPerPaged[iPage].nodes.length; iNode++) {
				var nodeId = positionNodesPerPaged[iPage].nodes[iNode].id;					
				
				if (!isVirtual(positionNodesPerPaged[iPage].nodes[iNode])) { //Excluimos los virtuales que se vayan metiendo
					var node = getNode(nodeId);

					var nParent = getParentNode(node);
					if (nParent !== null) {
						// Si el padre está en una página distinta, hay que añadir un nodo Virtual
						var oParent = searchNodeById(positionNodesPerPaged, nParent.id);
						if (oParent !== null) {					
							var iPageNodeParent = oParent.oPage.page;
							// Si el padre está en otra página, o si está en la misma pero el hijo está por arriba y muy cerca del borde superior de la página (a una distancia menor del subtreeOffset)
							if (iPage !== iPageNodeParent ||  (positionNodesPerPaged[iPage].nodes[iNode].pos.Y - st.config.subtreeOffset < 0)) {					

								var posVNode = getPositionVNode(node.pos, nParent.pos, positionNodesPerPaged[iPage].nodes[iNode].pos, oParent.oNode.pos,positionNodesPerPaged[iPage].matrix, oParent.oPage.matrix);
								var idVNode;
								var iCurrentPage = iPage;
								var iNextpage;
								var newPosVNode;

								// En la misma página sólo se añade el nodo una única vez
								var iVNode = searchVirtualNodeByPosition(positionNodesPerPaged[iPage].nodes, posVNode.pos);
								if ( iVNode === -1) {  //No se encontró									
									do {
										idVNode = getNewVNodeId(++totVirtualNodes);

										var iVNode2 = searchVirtualNodeByPosition(positionNodesPerPaged[iCurrentPage].nodes, posVNode.pos);
										if ( iVNode2 === -1) {

											//Añadimos el nodo virtual
											positionNodesPerPaged[iCurrentPage].nodes.push({"id": idVNode, "pos": {"X" : posVNode.pos.X, "Y" : posVNode.pos.Y}, "moved" : false, "from": [nodeId], "to": nParent.id});											
										
										    iNextpage = getNextPageByZone(posVNode.Zone, iCurrentPage);
										    newPosVNode = JSON.parse(JSON.stringify(posVNode));  //Deep copy									    
										    //Pintamos el mismo nodo pero en la página consecutiva
										    newPosVNode = getPositionVNodeInNextPage(newPosVNode);

										    positionNodesPerPaged[iNextpage].nodes.push({"id": idVNode, "pos": {"X" : newPosVNode.pos.X, "Y" : newPosVNode.pos.Y}, "moved" : false,"from": [nodeId], "to": nParent.id});										    
										} else {
											//Se actualiza el 'from'
											if (positionNodesPerPaged[iCurrentPage].nodes[iVNode2].from.indexOf(nodeId) < 0) {
												positionNodesPerPaged[iCurrentPage].nodes[iVNode2].from.push(nodeId);	
											}
											
											iNextpage = getNextPageByZone(posVNode.Zone, iCurrentPage);
											iVNode2 = searchVirtualNodeById(positionNodesPerPaged[iNextpage].nodes, positionNodesPerPaged[iCurrentPage].nodes[iVNode2].id);
											if ( iVNode2 === -1) {  //No se encontró

											} else {
												// se actualiza el 'from' en el nodo actual
												if (positionNodesPerPaged[iNextpage].nodes[iVNode2].from.indexOf(nodeId) < 0) {
													positionNodesPerPaged[iNextpage].nodes[iVNode2].from.push(nodeId);
												}
											}
										}

										iCurrentPage = iNextpage;			
										posVNode = updateZone(newPosVNode, iPageNodeParent, iCurrentPage);	
										posVNode = getPositionVNodeInCurrentPage(posVNode, oParent.oNode.pos);
									} while (iPageNodeParent !== iCurrentPage);

									///////////////////////////////////////
								} else {	
									//Se actualiza el 'from'
									if (positionNodesPerPaged[iPage].nodes[iVNode].from.indexOf(nodeId) < 0){
										positionNodesPerPaged[iPage].nodes[iVNode].from.push(nodeId);	
									}									

									iNextpage = getNextPageByZone(posVNode.Zone, iPage);
									iVNode = searchVirtualNodeById(positionNodesPerPaged[iNextpage].nodes, positionNodesPerPaged[iPage].nodes[iVNode].id);
									if ( iVNode === -1) {  //No se encontró

									} else {
										// se actualiza el 'from' en el nodo actual
										if (positionNodesPerPaged[iNextpage].nodes[iVNode].from.indexOf(nodeId) < 0) {
											positionNodesPerPaged[iNextpage].nodes[iVNode].from.push(nodeId);
										}
									}
								}
							}
						}
					}
				}
				
			}
		}

		return positionNodesPerPaged;
	}

	/**
	* Create an array of Pages with its nodes and positions
	*/
	function getPosNodesPerPage(st, positionNodesMovedManually, addVNodes) {


		// Asociamos la página al nodo
		function PositionNode1 (id, idPrint, pos, page, posInPage) {
			this.id = id;
			this.idPrint = idPrint; //Bug 0327199
			this.pos = new Coordinate(pos.X, pos.Y);
			this.page = page;
			this.matrix = posInPage;

			var nodeMoved = positionNodesMovedManually[id];
			this.moved = (nodeMoved !== null && nodeMoved !== undefined);
		}
		
		// Devolvemos las coordenadas de la matriz de páginas a la que pertenece el nodo
		function getPosNodeInLienzo(node) {
			var mostLeftCol;
			var mostTopRow ;
			var deltaCanvasX = st.canvas.canvases[0].translateOffsetX - st.canvas.canvases[1].translateOffsetX;
			var deltaCanvasY = st.canvas.canvases[0].translateOffsetY - st.canvas.canvases[1].translateOffsetY;
			var lienzo_rows = meta4.orgdyn.lienzo.getLienzoDim().rows;
			var lienzo_cols = meta4.orgdyn.lienzo.getLienzoDim().cols;

			for (var r = 0; r <= lienzo_rows; r++) {
		  		for (var c = 0; c <= lienzo_cols; c++) {
		  		
					if (r < lienzo_rows && c < lienzo_cols ) {
			  			if (node.pos.x + deltaCanvasX - (st.graph.Node.width/2) > _positionPages[r][c].x) {
							mostLeftCol = c;
						} 

						if (node.pos.y + deltaCanvasY > _positionPages[r][c].y) {
							mostTopRow = r;
						}	 			

					} else {
						//Se pasa del límite de páginas definidas
						if (node.pos.x + deltaCanvasX - (st.graph.Node.width/2) > _positionPages[lienzo_rows - 1][lienzo_cols - 1].x + _paperSizePixels.width) {
							mostLeftCol = undefined;
						} 

						if (node.pos.y + deltaCanvasY >  _positionPages[lienzo_rows - 1][lienzo_cols - 1].y + _paperSizePixels.height) {
							mostTopRow = undefined;
						}
					}				

		  		}
	  		}

	  		var posNodeInLienzo = {row : mostTopRow, col: mostLeftCol};
	  		return posNodeInLienzo;
		}

		//La posición del nodo es respecto al canvas global... hay que transformarla a la posición relativa de la página.
		function transformPositionToLocalPage(node, posNodeInLienzo) {						

			var deltaCanvasX = st.canvas.canvases[0].translateOffsetX - st.canvas.canvases[1].translateOffsetX;
			var deltaCanvasY = st.canvas.canvases[0].translateOffsetY - st.canvas.canvases[1].translateOffsetY;

			var posPageX = _positionPages[posNodeInLienzo.row][posNodeInLienzo.col].x;
			var posPageY = _positionPages[posNodeInLienzo.row][posNodeInLienzo.col].y;

			//Asumimos que la coordenada (0,0) está en la esquina superior izquierda.
			var newPosX = node.pos.x + deltaCanvasX - (st.graph.Node.width / 2) - posPageX ;
			var newPosY = node.pos.y + deltaCanvasY - posPageY ;

			// Devolvemos pero redondeando a 3 decimales
			return new Coordinate(round(newPosX, M4_JSON_ROUND_DECIMAL), round(newPosY, M4_JSON_ROUND_DECIMAL)) ;
		}

		//Seguridad
		if (!_initialized_func) {
			return '';
		}

		addVNodes = (addVNodes === undefined ? true : false);
				
		//Recorremos todos los nodos visibles del árbol y:
		// 1.- Le transformamos si posición a la relativa a la página
		// 2.- Le transformamos las coordenadas de la página a la que pertenece a un índice de Página.
		var positionNodesInMatrix = [];
		st.graph.eachNode( function (node) {			
				
			if (node.drawn  && node.m4ignore === false) {
				var posNodeInLienzo = getPosNodeInLienzo(node);

				if (posNodeInLienzo.row !== undefined && posNodeInLienzo.col !== undefined) {
					var newPos = transformPositionToLocalPage(node, posNodeInLienzo);
					var newPage =transformPosNodeInLienzoToPage(posNodeInLienzo);
					var idPrint = node.data['IdPrint:0'] !== undefined ? node.data['IdPrint:0'] : null; //Bug 0327199
					
					var idPrint = null;  
					if (node.data['IdPrint:0']) {
						idPrint = node.data['IdPrint:0'];  //Tomamos el primer elemento del grupo
					} else if (node.data['VacancyIdPrint:0']) {
						idPrint = node.data['VacancyIdPrint:0']; //Tomamos el primer elemento del grupo
					}
					
					positionNodesInMatrix.push (new PositionNode1(node.id, idPrint, newPos, newPage, posNodeInLienzo));
				}
					
				//console.log("Node: " + node.id + " row: " + posNodeInLienzo.row + " col: " + posNodeInLienzo.col + " Pag: " + newPage);
			}
		});

		//En este momento tenemos un array con los nodos, sus posiciones, y en la página en la que está cada nodo.
		//Ahora hay que ordenar este array por páginas.
		var positionNodesPerPaged = [];
		var maxPages = transformPosNodeInLienzoToPage({row: meta4.orgdyn.lienzo.getLienzoDim().rows -1, col: meta4.orgdyn.lienzo.getLienzoDim().cols -1}) + 1;

		for (var iPage = 0; iPage < maxPages; iPage++) {
			var nodesInPage = [];
			var matrix=undefined;
			for (var i = 0; i < positionNodesInMatrix.length; i++) {
				if (positionNodesInMatrix[i].page == iPage) {
					//nodesInPage.push (new PositionNode(positionNodesInMatrix[i].id, positionNodesInMatrix[i].pos, positionNodesInMatrix[i].moved));
					nodesInPage.push ({"id": positionNodesInMatrix[i].id, "idPrint": positionNodesInMatrix[i].idPrint, "pos": positionNodesInMatrix[i].pos, "moved" : positionNodesInMatrix[i].moved});
					matrix = positionNodesInMatrix[i].matrix; //Deben ser todas iguales en el bucle
				}			
			}

			if (matrix === undefined) {
				// Si matrix no está definido, es que en esa página no hay ningún nodo.
				// Aun así le pasamos las coordenadas...pq el array de nodos estará vacío y se controla por ahí.
				matrix = translateIndexPageToMatrix (iPage); 
			}

			positionNodesPerPaged.push ({"page" : iPage, "matrix":matrix, "nodes" : nodesInPage});		
		}

		//Todavía falta por añadir los nodos virtuales para los links que no es poco
		if (addVNodes) {
			positionNodesPerPaged = addVirtualNodesForLinks(positionNodesPerPaged, st);
		}

		return positionNodesPerPaged;
	}

	/**
	* Borra el atributo .matrix en el array pasado
	* Borra columnas y filas vacías  (para evitar imprimir columnas y/o filas de páginas vacías)
	*/
	function getPosNodesPerPageForPrint(st, positionNodesPerPaged) {
		
		/**
		* If a full row or col in the matrix do not have any node, just delete them
		*/
		/*
		function cleanEmptyRowsAndCols(positionNodesPerPaged) {

			// Reset the iPage index
			function reSetPages(positionNodesPerPaged) {
				//Actualizamos la página dentro de cada elemento
				for (var iPage = 0; iPage < positionNodesPerPaged.length; iPage ++) {		
					positionNodesPerPaged[iPage].page = iPage;			
				}
				return positionNodesPerPaged;
			}

			//Nota: En este momento ya no debemos tener el attibuto Matrix, por lo que lo ignoramos

			//1º Buscamos las filas a borrar
			var rowsToDelete = [];
			var lienzo_rows = meta4.orgdyn.lienzo.getLienzoDim().rows;
			var lienzo_cols = meta4.orgdyn.lienzo.getLienzoDim().cols;

			for (var iRow = 0; iRow < lienzo_rows; iRow++) {
				var bRowEmpty = true;

				for (var iCol = 0; iCol < lienzo_cols; iCol++) {
					var iPage = (iRow * lienzo_cols) + iCol;

					if (positionNodesPerPaged[iPage].nodes.length > 0) {
						bRowEmpty = false;
						break;
					} 
				}

				if (bRowEmpty) {
					rowsToDelete.push(iRow);
				}
			}

			//2º Borramos las filas	
			for (iPage = positionNodesPerPaged.length - 1; iPage >= 0; iPage--) {
				for (var irowToDelete = rowsToDelete.length - 1; irowToDelete >= 0 ; irowToDelete--) {
					if (translateIndexPageToMatrix(iPage).row == rowsToDelete[irowToDelete]) {				
						positionNodesPerPaged.splice(iPage, 1);
					}
				}
			}

			positionNodesPerPaged = reSetPages(positionNodesPerPaged);			
			/////////////////

			//3º Buscamos las Columnas a borrar
			var colsToDelete = [];
			
			for (var iCol = 0; iCol < lienzo_cols; iCol++) {
				var bColEmpty = true;
				for (var iRow = 0; iRow < (lienzo_rows - rowsToDelete.length) ; iRow++) {
				
					var iPage = (iRow * lienzo_cols) + iCol;

					if (positionNodesPerPaged[iPage].nodes.length > 0) {
						bColEmpty = false;
						break;
					} 
				}

				if (bColEmpty) {
					colsToDelete.push(iCol);
				}
			}

			//4º Borramos las Columnas
			for (var iPage = positionNodesPerPaged.length - 1; iPage >= 0; iPage--) {
				for (var iColToDelete = colsToDelete.length - 1; iColToDelete >= 0; iColToDelete--) {		
					if (translateIndexPageToMatrix(iPage).col === colsToDelete[iColToDelete]) {
						positionNodesPerPaged.splice(iPage, 1);
					}
				}
			}
			
			positionNodesPerPaged = reSetPages(positionNodesPerPaged);	
			//---------------

			return positionNodesPerPaged;
		}	
		*/

		/**
		* If a page do not have any node or virtual node, we delete it
		*/
		function cleanEmptyPages(positionNodesPerPaged) {

			// Reset the iPage index
			function reSetPages(positionNodesPerPaged) {
				//Actualizamos la página dentro de cada elemento
				for (var iPage = 0; iPage < positionNodesPerPaged.length; iPage ++) {		
					positionNodesPerPaged[iPage].page = iPage;			
				}
				return positionNodesPerPaged;
			}

			//Nota: En este momento ya no debemos tener el attibuto Matrix, por lo que lo ignoramos
			//Borramos todas las páginas que no tengan nodo o nodos virtuales
			for (var iPage = positionNodesPerPaged.length - 1; iPage >= 0; iPage--) {
				if (positionNodesPerPaged[iPage].nodes === undefined || positionNodesPerPaged[iPage].nodes.length === 0) {
					positionNodesPerPaged.splice(iPage, 1);
				}
			}

			positionNodesPerPaged = reSetPages(positionNodesPerPaged);	
			//---------------

			return positionNodesPerPaged;
		}

		/**
		 * If a is a node group, then it has a idPrint that replace the id		 
		 */
		function changeIdForGroupNodes(positionNodesPerPaged) {
			//Si el nodo es de agrupación, el id del nodo debe ser el del primer elemento que contenga.
			for (var iPage = positionNodesPerPaged.length - 1; iPage >= 0; iPage--) {
				for (var iNode = 0; iNode < positionNodesPerPaged[iPage].nodes.length; iNode++) {
					var idPrint = positionNodesPerPaged[iPage].nodes[iNode].idPrint;
					var id = positionNodesPerPaged[iPage].nodes[iNode].id;

					if (positionNodesPerPaged[iPage].nodes[iNode].idPrint) {
						//Actualizamos el From de los nodos virtuales
						for (var iNode2 = 0; iNode2 < positionNodesPerPaged[iPage].nodes.length; iNode2++) {
							if (isVirtual(positionNodesPerPaged[iPage].nodes[iNode2])) {
								for (var i = 0; i < positionNodesPerPaged[iPage].nodes[iNode2].from.length; i++) {
									if (positionNodesPerPaged[iPage].nodes[iNode2].from[i] === id) {
										positionNodesPerPaged[iPage].nodes[iNode2].from[i] = idPrint;
									}
								}
							}
						}

						positionNodesPerPaged[iPage].nodes[iNode].id = idPrint;
						delete positionNodesPerPaged[iPage].nodes[iNode].idPrint;
					} else {
						delete positionNodesPerPaged[iPage].nodes[iNode].idPrint;
					}
				}				
			}					

			return positionNodesPerPaged;
		}

		//Seguridad
		if (!_initialized_func) {
			return '';
		}			
		
		for (var iPage = 0; iPage < positionNodesPerPaged.length; iPage++) {
			delete positionNodesPerPaged[iPage].matrix;
		}	

		positionNodesPerPaged = cleanEmptyPages(positionNodesPerPaged);
		positionNodesPerPaged = changeIdForGroupNodes(positionNodesPerPaged);

		// creamos una nueva abstracción de nivel superior para informar de que la impresión es con Lienzo
		// Pasamos también el tamaño de la caja en pixels y el de la página en pixles		
		var nodeSize = {
			"width"  : st.graph.Node.width,
			"height" : st.graph.Node.height
		};

		var positionNodesPerPagedForPrint = {"canvas": 1, "nodeSize": nodeSize, "pageSize": _paperSizePixels, "subtreeOffset": st.config.subtreeOffset, "pages": positionNodesPerPaged};

		return positionNodesPerPagedForPrint;
	}


	/** 
	* Si algún nodo está a caballo entre varias páginas, no podemos imprimir
	*/
	function verifyAllNodesFitInUniquePage(positionNodesPerPaged, st) {	

		//Seguridad
		if (!_initialized_func) {
			return true;
		}

		//Guardamos los nodos erroneos en un array por si podemos más adelante marcarlos de rojo.
		var nodesNotFit = [];

		for (var iPage = 0; iPage < positionNodesPerPaged.length; iPage++) {
			if (positionNodesPerPaged[iPage].matrix !== undefined) {
				//var posPageX = _positionPages[positionNodesPerPaged[iPage].matrix.row][positionNodesPerPaged[iPage].matrix.col].x;
				//var posPageY = _positionPages[positionNodesPerPaged[iPage].matrix.row][positionNodesPerPaged[iPage].matrix.col].y;		

				for (var iNode = 0; iNode < positionNodesPerPaged[iPage].nodes.length; iNode++) {
					var node = positionNodesPerPaged[iPage].nodes[iNode];
					var nodeId = node.id;									

					if (!isVirtual(node)) {
						if ((node.pos.X + st.graph.Node.width > _paperSizePixels.width) || (node.pos.Y + st.graph.Node.height > _paperSizePixels.height)) {
							nodesNotFit.push (nodeId);
						}
					}
				}
			}	
		}

		return (nodesNotFit.length === 0);
	}

	/**
	* Si algún nodo está fuera del lienzo (total o parcialmente) no podemos imprimir
	*/
	function verifyAllNodesFitInLienzo(positionNodesPerPaged, st) {
		//Seguridad
		if (!_initialized_func) {
			return true;
		}

		var nodesNotFit = [];
		st.graph.eachNode( function (node) {			
				
			if (node.drawn  && node.m4ignore === false) {
				var bFound = false;

				for (var iPage = 0; iPage < positionNodesPerPaged.length; iPage++) {
					if (positionNodesPerPaged[iPage].matrix !== undefined) {

						for (var iNode = 0; iNode < positionNodesPerPaged[iPage].nodes.length; iNode++) {
							var nodeId = positionNodesPerPaged[iPage].nodes[iNode].id;
							
							if (node.id == nodeId) {
								bFound = true;
								break;
							}
						}
					}	
					if (bFound) {
						break;
					}
				}

				if (!bFound)  {
					nodesNotFit.push (node.id);
				}
			}
		});

		return (nodesNotFit.length === 0);
	}

	/**
	* Posicionamos los dos canvas
	*/ 
	function setPositionCanvasSerialized(st, fijarLienzo, posCanvasSerialized) {
		//Seguridad
		if (!_initialized_func) {
			return;
		}

		if (posCanvasSerialized === null || posCanvasSerialized === undefined || posCanvasSerialized === "") {
			return;
		}
		
		var auxfijarLienzo = fijarLienzo.checked;

		fijarLienzo.checked = false;

		var res = posCanvasSerialized.split(M4_SEP_SERIALIZE);

		//var wuid = res[0];
		var cnv0X = res[1]; 
		var cnv0Y = res[2]; 
		
		// Movemos árbol y Lienzo
		st.canvas.translate(cnv0X - st.canvas.translateOffsetX, cnv0Y - st.canvas.translateOffsetY, false);

		// Movemos solo arbol
		var cnv1X = res[3]; 
		var cnv1Y = res[4]; 

		fijarLienzo.checked = true;
		st.canvas.translate(cnv1X - st.canvas.translateOffsetX, cnv1Y - st.canvas.translateOffsetY, false);

		//Restauramos
		fijarLienzo.checked = auxfijarLienzo;
	}

	/**
	* Serializamos la posición de los dos canvas en un único token
	*/
	function getPositionCanvasSerialized(st) {
		//Seguridad
		if (!_initialized_func) {
			return "";
		}

		var cnv0X = st.canvas.canvases[0].translateOffsetX;
		var cnv0Y = st.canvas.canvases[0].translateOffsetY;
		var cnv1X = st.canvas.canvases[1].translateOffsetX;
		var cnv1Y = st.canvas.canvases[1].translateOffsetY;

		// Pasamos también el WUID del root para que JAVA pueda validar en la carga si estamos en la misma WU.
		return "" + st.root + M4_SEP_SERIALIZE + cnv1X + M4_SEP_SERIALIZE + cnv1Y + M4_SEP_SERIALIZE + cnv0X + M4_SEP_SERIALIZE + cnv0Y + M4_SEP_SERIALIZE;
	}

	/** 
	* Dada unas coordenadas de la matriz del lienzo, devolvemos a qué página pertenece dentro de la matriz (0-order)
	*/
	function transformPosNodeInLienzoToPage(posNodeInLienzo) {
		//Seguridad
		if (!_initialized_func) {
			return;
		}

		return (posNodeInLienzo.row * _lienzo_cols) + posNodeInLienzo.col;
	}

	/**
	* Dado un número de página, devolvemos los índices a la que pertenece en la Matriz
	*/
	function translateIndexPageToMatrix(iPage) {
		//Seguridad
		if (!_initialized_func) {
			return;
		}

		var iRow = Math.floor(iPage / _lienzo_cols);
		var iCol = iPage % _lienzo_cols;
		return {"row" : iRow, "col": iCol};
	}

	/** 
	* Establece el número de filas para la matriz del lienzo
	*/
	function setLienzoRows (rows) {
		//Seguridad
		if (!_initialized_func) {
			return;
		}

		_lienzo_rows = rows;		
	}

	/**
	* Establece el número de columnas para la matriz del lienzo
	*/
	function setLienzoCols (cols) {		
		//Seguridad
		if (!_initialized_func) {
			return;
		}

		_lienzo_cols = cols;
	}

	/**
	* Establece el nombre del tamaño del papel (A4, A3, etc)
	*/
	function setPaperLienzo(paper) {
		//Seguridad
		if (!_initialized_func) {
			return;
		}

		if (paper === null || paper === undefined || paper === "") {			
			paper = M4_DEF_PAPERSIZE;
		}

		_paperSizeLienzo = paper;
	}

	/** 
	* Obtiene el nombre del tamaño del papel
	*/
	function getPaperLienzo() {
		return _paperSizeLienzo;
	}
	
	/**
	 * Obtiene las dimensiones en pixels del papel
	 * @return objeto: {width: 1122.52, height: 793.7} (A4)
	 */
	function getPaperLienzoDim() {
		return _paperSizePixels;	
	}

	/**
	* Obtiene las dimensiones del lienzo en filas y columnas
	*/
	function getLienzoDim () {	
		return {"rows" : _lienzo_rows, "cols": _lienzo_cols};
	}

	/**
	* Obtiene las dimensiones del lienzo por defecto
	*/
	function getDefaultLienzoDim () {
		return M4_DEF_DIMMATRIX;
	}

	/**
	* Obtiene las máximas dimensiones máximas del lienzo
	*/
	function getMaxLienzoDim() {
		return M4_MAX_DIMMATRIX;
	}

	/**
	*  Establece la orientación del papel del lienzo
	*/
	function setPaperOrientation(orientation) {
		//Seguridad
		if (!_initialized_func) {
			return;
		}

		if (orientation === null || orientation === undefined || orientation === "") {
			orientation = m4_landscape;
		}

		_orientatioPaperLienzo = orientation;
	}

	/** 
	* Obtiene la orientación del papel del lienzo
	*/
	function getPaperOrientation() {		
		return _orientatioPaperLienzo;
	}

	return {
		init : init,
		setLienzoRows : setLienzoRows,
		setLienzoCols : setLienzoCols,
		getLienzoDim : getLienzoDim,
		getDefaultLienzoDim : getDefaultLienzoDim,
		getMaxLienzoDim : getMaxLienzoDim,
		setPaperLienzo : setPaperLienzo,
		getPaperLienzo : getPaperLienzo,	
		getPaperLienzoDim : getPaperLienzoDim,		
		setPaperOrientation : setPaperOrientation,
		getPaperOrientation : getPaperOrientation,
		verifyAllNodesFitInUniquePage : verifyAllNodesFitInUniquePage,
		verifyAllNodesFitInLienzo : verifyAllNodesFitInLienzo,
		getPosNodesPerPage : getPosNodesPerPage,
		getPosNodesPerPageForPrint : getPosNodesPerPageForPrint,
		setPositionCanvasSerialized : setPositionCanvasSerialized,
		getPositionCanvasSerialized : getPositionCanvasSerialized,
		paintLienzo : paintLienzo
	};

}());
