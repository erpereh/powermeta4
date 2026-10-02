/**
	@(#)FileVersion: 812.000.042
	@(#)FileDescription:File Javascript that lets draw mini map of orgChart
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: M4mini_map.js
	@(#)Date: 20/01/2015
*/


/**
 * 
 * object to control the mini map
 * 
 * canvas -> store object HTML5 canvas canvasRectangle -> store object HTML5
 * canvas where will be painted the rectangle listNodes -> listNodes of org
 * chart listNodesRectangle -> list Nodes of rectangle limitMiniMap -> object
 * that stores the org chart limit limitRectangle -> object that stores the
 * rectangle limits of minimap sizeCanvas -> Size of canvas proportionTree ->
 * Proportion org chart and minimap paintRectangle -> variable that store if we
 * must paint rectangle. DONT paint rectangle if all visible nodes.
 */
var _miniMap = {
	canvas : false,
	canvasRectangle : false,
	listNodes : false,
	listNodesRectangle : false,
	limitMiniMap : {
		limitBottom : 0,
		limitTop : 0,
		limitLeft : 0,
		limitRight : 0
	},
	limitRectangle : {
		limitBottom : 0,
		limitTop : 700,
		limitLeft : 700,
		limitRight : 0
	},
	sizeCanvas : {
		height : 0,
		width : 0
	},
	proportionTree : 0,
	paintRectangle : false
};

/**
 * Init layers of canvas and set size of canvas
 */
function initMinimap() {
	
		
	_miniMap.canvas = document.getElementById("mini_map");
	_miniMap.canvasRectangle = document.getElementById("canvas_Rectangle");

	_miniMap.listNodes = {};
	_miniMap.listNodesRectangle = {};
	var controlMaps = $jit.id('left-container');

	// limit width
	//_miniMap.canvas.style.maxWidth = controlMaps.clientWidth + 'px';
	//_miniMap.canvasRectangle.style.maxWidth = controlMaps.clientWidth + 'px';

	if (m4CanvasSupport == true) {
		// set size canvas
		_miniMap.canvas.width = controlMaps.clientWidth;
	//	_miniMap.canvas.style.width = '';
		_miniMap.sizeCanvas.width = controlMaps.clientWidth;
		_miniMap.canvas.height = 230;//margin to scrollbar
		_miniMap.sizeCanvas.height = 230;//margin to scrollbar

		// canvas rectangle
		_miniMap.canvasRectangle.width = controlMaps.clientWidth;
		_miniMap.canvasRectangle.height = 230;//margin to scrollbar
		//_miniMap.canvasRectangle.style.top = '-'+_miniMap.canvas.height+'px';
		
		// var dist= $('.TabsMenu').height();
	//	 _miniMap.canvasRectangle.style.top = dist+'px';

	} else {
		_miniMap.sizeCanvas.width = controlMaps.clientWidth;
		_miniMap.sizeCanvas.height = 230;//margin to scrollbar
		$jit.id('mini_map').style.width=controlMaps.clientWidth+'px';
		

		_miniMap.canvasRectangle.style.width=_miniMap.sizeCanvas.width+'px';
		_miniMap.canvasRectangle.style.height=_miniMap.sizeCanvas.height+'px';	
		//_miniMap.canvasRectangle.style.top = '-'+_miniMap.canvas.height+'px';
		
		// var dist= $('.TabsMenu').height();
	//	 _miniMap.canvasRectangle.style.top = dist+'px';			
		
	}

	var context = _miniMap.canvas.getContext('2d');
	context.lineWidth = 0.5;

	var contextRect = _miniMap.canvasRectangle.getContext('2d');
	contextRect.lineWidth = 1;
	contextRect.fillStyle = '#d9deea';
	contextRect.globalAlpha = 0.5;// transparency

	// create function for the position of the organization
	createFuncionDesp(_miniMap.canvasRectangle);
	createFuncionDesp(_miniMap.canvas);

}


function setSizeCanvas(){
	
	values=getSizeOrgChart();
	
	var width=values.width;
	var height=values.height;
	
	_miniMap.canvas = document.getElementById("mini_map");
	_miniMap.canvasRectangle = document.getElementById("canvas_Rectangle");	
	// limit width
//	_miniMap.canvas.style.maxWidth = 1500 + 'px';
//	_miniMap.canvasRectangle.style.maxWidth = 1500 + 'px';

	if (m4CanvasSupport == true) {
		// set size canvas
		_miniMap.canvas.width = width;
//		_miniMap.canvas.style.width = '';
		_miniMap.sizeCanvas.width = width;
		_miniMap.canvas.height = height;
		_miniMap.sizeCanvas.height = height;

		// canvas rectangle
		_miniMap.canvasRectangle.width = width;
		_miniMap.canvasRectangle.height = height;
	//	_miniMap.canvasRectangle.style.top = '-'+_miniMap.canvas.height+'px';
	//	 var dist= $('.TabsMenu').height();
	//	 _miniMap.canvasRectangle.style.top = dist+'px';
	} else {
		_miniMap.sizeCanvas.width = width;
		_miniMap.sizeCanvas.height = height;
		_miniMap.canvas.style.width=width+'px';
		_miniMap.canvas.style.height=height+'px';
										
	
		_miniMap.canvasRectangle.style.width=_miniMap.sizeCanvas.width+'px';		
		//_miniMap.canvasRectangle.style.top='-'+_miniMap.sizeCanvas.height+'px';
	//	 var dist= $('.TabsMenu').height();
	//	 _miniMap.canvasRectangle.style.top = dist+'px';
		
		
	}

	var context = _miniMap.canvas.getContext('2d');
	context.lineWidth = 0.5;

	var contextRect = _miniMap.canvasRectangle.getContext('2d');
	contextRect.lineWidth = 1;
	contextRect.fillStyle = '#d9deea';
	contextRect.globalAlpha = 0.5;// transparency

	// create function for the position of the organization
	createFuncionDesp(_miniMap.canvasRectangle);
	createFuncionDesp(_miniMap.canvas);
	
}

function getSizeOrgChart(){
	
	// move to the medium
	var height = 0;
	if (_miniMap.limitMiniMap.limitTop < 0) {
		height = (_miniMap.limitMiniMap.limitTop * -1)
				+ _miniMap.limitMiniMap.limitBottom;
	} else {
		height = _miniMap.limitMiniMap.limitTop
				+ _miniMap.limitMiniMap.limitBottom;
	}
	height = height * _miniMap.proportionTree;	

	var width = 0;
	if (_miniMap.limitMiniMap.limitLeft < 0) {
		width = (_miniMap.limitMiniMap.limitLeft * -1)
				+ _miniMap.limitMiniMap.limitRight;
	} else {
		width = _miniMap.limitMiniMap.limitLeft
				+ _miniMap.limitMiniMap.limitRight;
	}
	width = width * _miniMap.proportionTree;
	
	
	var controlMaps = $jit.id('left-container');

	// limit width
	var controlMapsWidth = controlMaps.clientWidth;
	
	
	//if width is < that "controlMaps" width="controlMaps"
	if(controlMapsWidth>width){		
		width=controlMapsWidth;
	}
	if(230>height){		
		height=230;//margin to scrollbar
	}
	
	
	var result={
			'width':width,
			'height':height			
	};
	return result;
	
}

/**
 * Function to postion scroll according map
 */
function setPositionScroll(){
	
	var left = _miniMap.limitRectangle.limitLeft;
	var right = _miniMap.limitRectangle.limitRight;
	
	var sizeRectangle = (right-left)/2;
	
	
	var sizeContent= $('#contentMap').width();
	var point = left-(sizeContent/2)+sizeRectangle;
	
	 // $('#contentMap').animate({scrollLeft:point},0);		
	
	 $('#contentMap').scrollLeft(point);
	
	
}


/**
 * Create a function that calculates the position of the org chart through the
 * position of the minimap.
 * 
 * After selecting a region the organization moves to the right position
 * 
 * @param canvas
 */
function createFuncionDesp(canvas) {
	canvas.onclick = function(e) {

		if (_st != undefined) {
			var event = e || window.event;

			if(navigator.appName=='Microsoft Internet Explorer') {//IE
				   var l = $('#contentMap').scrollLeft();
				   var t = $('#contentMap').scrollTop();
				 //distancia hasta el primer li
				var dist= $('.TabsMenu').height();
		        mouseX = event.clientX+l;
		        mouseY = event.clientY+t-dist;
		        
		     
		    }else if(event.offsetX) {//chrome
		    	  mouseX = event.offsetX;
			        mouseY = event.offsetY;
		    }
		    else if(event.layerX) {//FF
		        mouseX = event.layerX;
		        mouseY = event.layerY;
		    }
			
			
		
			
			
			// position mouse
			var posY = mouseY;
			var posX = mouseX;

			// calculate limit orgchart
			calculateLimit();

			// CALCULATE POSITION ASSOCIATED TREE
			var height = 0;
			if (_miniMap.limitMiniMap.limitTop < 0) {
				height = (_miniMap.limitMiniMap.limitTop * -1)
						+ _miniMap.limitMiniMap.limitBottom;
			} else {
				height = _miniMap.limitMiniMap.limitTop
						+ _miniMap.limitMiniMap.limitBottom;
			}
			height = height * _miniMap.proportionTree;

			var width = 0;
			if (_miniMap.limitMiniMap.limitLeft < 0) {
				width = (_miniMap.limitMiniMap.limitLeft * -1)
						+ _miniMap.limitMiniMap.limitRight;
			} else {
				width = _miniMap.limitMiniMap.limitLeft
						+ _miniMap.limitMiniMap.limitRight;
			}
			width = width * _miniMap.proportionTree;

			var despY = (_miniMap.sizeCanvas.height - height) / 2;
			var despX = (_miniMap.sizeCanvas.width - width) / 2;

			// position mouse according orgchart
			posY = posY - despY;
			posX = posX - despX;

			posX = posX
					+ (_miniMap.limitMiniMap.limitLeft * _miniMap.proportionTree);

			posY = posY * (1 / _miniMap.proportionTree)
					+ _st.graph.nodes[_st.root].pos.y;
			posX = posX * (1 / _miniMap.proportionTree);

			_st.canvas.translate(-_st.canvas.translateOffsetX,
					-_st.canvas.translateOffsetY);
			_st.canvas.translate(-posX, -posY);

			// paint limit rectangle
			resetLimitRectangle();
			paintRectangleZoom();

		}
	};
}

/*
 * Function to set size canvas
 */
/**
function setSizeCanvas() {
	var leftContainer = $jit.id('left-container');
	_miniMap.canvas.style.width = leftContainer.clientWidth - 2 + 'px';
	_miniMap.canvas.style.height = '200px';

	_miniMap.canvasRectangle.style.width = leftContainer.clientWidth - 2 + 'px';
	_miniMap.canvasRectangle.style.height = '200px';
	_miniMap.canvasRectangle.style.top = '-200px';
}*/

/**
 * Funtion that is executed when left container is resizable
 */
function m4SetSizeMinimap(){	
	//destroy canvas
	_miniMap.canvas=null;
	_miniMap.canvasRectangle=null;
	initMinimap();
	paintMiniMap();
}


/**
 * Function to paint miniMap with all nodes visible of tree
 */
function paintMiniMap() {

	// reset properties mini map
	resetMiniMap();
	// get visible nodes
	getNodesToPaint();
	// calculate limit of org chart
	calculateLimit();	
	// calculate proportion of org chart
	calculateProportion();
	
	//set size canvas
	setSizeCanvas();

	var context = _miniMap.canvas.getContext("2d");
	// paint nodes minimap
	paintNodesMiniMap(context);
	// paint lines minimap
	paintLinesMiniMap(context);
	
	// paint rectangle minimap		
	paintRectangleZoom();

	setPositionScroll();
	
}

/**
 * Function to paint rectangle to limit zoom
 */
function paintRectangleZoom() {

	if (typeof _miniMap.canvasRectangle != 'object')
	{
		return;
	}

	var context = _miniMap.canvasRectangle.getContext("2d");

	// clear canvas rectangle
	context.clearRect(0, 0, _miniMap.sizeCanvas.width + 5,
			_miniMap.sizeCanvas.height + 5);

	
	//reset limit rectangle
	resetLimitRectangle();
	
	//limits calculated with the nodes that appear on the screen
	calculeLimitRectangle();

	if (_miniMap.paintRectangle == true) {

		var width = _miniMap.limitRectangle.limitRight
				- _miniMap.limitRectangle.limitLeft;
		var height = _miniMap.limitRectangle.limitBottom
				- _miniMap.limitRectangle.limitTop;
		var posX;
		var posY;

		//if we don´t old limit
		if (width == -400) {
			width = 10;
			height = 10;

			var centerW = _miniMap.sizeCanvas.width / 2;
			var centerH = _miniMap.sizeCanvas.height / 2;

			posX = -_st.canvas.translateOffsetX * _miniMap.proportionTree
					+ centerW;
			posY = -_st.canvas.translateOffsetY * _miniMap.proportionTree
					+ centerH;

		} else {
			// paint rectangle with visible nodes
			posX = _miniMap.limitRectangle.limitLeft;
			posY = _miniMap.limitRectangle.limitTop;
		}
		
		if (_st.graph.Node.height * _miniMap.proportionTree * 2 > height) {

			// change size
			height = _st.graph.Node.height * _miniMap.proportionTree * 2;
			context.fillRect(posX, posY - height / 2, width, height + 5);
			context.strokeRect(posX, posY - height / 2, width, height + 5);
		} else {
			// paint normal
			context.fillRect(posX, posY - 5, width, height + 5);
			context.strokeRect(posX, posY - 5, width, height + 5);
		}
	}

}

/**
 * function that paints the nodes on the minimap, if the node is also the functional dependence will be painted
 * 
 * @param context
 */
function paintNodesMiniMap(context) {

	//painted each of the nodes
	for ( var n in _miniMap.listNodes) {
		if (typeof _miniMap.listNodes[n] == 'object') {
			var node = _miniMap.listNodes[n];
			context.fillStyle = node.data['$canvas-fillStyle'];
			var posXnode = node.pos.x - _miniMap.limitMiniMap.limitLeft;
			var posYnode = node.pos.y - _miniMap.limitMiniMap.limitTop;
			// center coordenates
			var sizeX = _st.graph.Node.width * _miniMap.proportionTree;
			var sizeY = _st.graph.Node.height * _miniMap.proportionTree;
			var posX = posXnode * _miniMap.proportionTree - (sizeX / 2);
			var posY = posYnode * _miniMap.proportionTree;
	
			// move to the medium
			var height = 0;
			if (_miniMap.limitMiniMap.limitTop < 0) {
				height = (_miniMap.limitMiniMap.limitTop * -1)
						+ _miniMap.limitMiniMap.limitBottom;
			} else {
				height = _miniMap.limitMiniMap.limitTop
						+ _miniMap.limitMiniMap.limitBottom;
			}
			height = height * _miniMap.proportionTree;
			posY = posY + (_miniMap.sizeCanvas.height - height) / 2;
	
			var width = 0;
			if (_miniMap.limitMiniMap.limitLeft < 0) {
				width = (_miniMap.limitMiniMap.limitLeft * -1)
						+ _miniMap.limitMiniMap.limitRight;
			} else {
				width = _miniMap.limitMiniMap.limitLeft
						+ _miniMap.limitMiniMap.limitRight;
			}
			width = width * _miniMap.proportionTree;
			posX = posX + (_miniMap.sizeCanvas.width - width) / 2;
	
			context.fillRect(posX, posY, sizeX, sizeY);
			context.strokeRect(posX, posY, sizeX, sizeY);
	
			// if show dependencies
			if (_showDependencies && typeof node.dependenciFuncional == 'object') {
				
				// get Idtype of node
	            var idType = findIdType(
						node.dependenciFuncional);
	            // get typeStyle of node
	            var typeStyle = getTypeStyle(idType);
	            // get color
	            var color = getValueAttribute(typeStyle,
						ATTR_COLOR);
	            // change color to context
	            context.fillStyle = color;	
				
				// paint box dependency
				context
						.fillRect(posX - sizeX / 2, posY + sizeY * 1.2, sizeX,
								sizeY);
				context.strokeRect(posX - sizeX / 2, posY + sizeY * 1.2, sizeX,
						sizeY);
	
				// paint line dependency
				var posXinitial = posX + sizeX / 2;
				var posYinitial = posY + sizeY;
	
				context.beginPath();
				context.moveTo(posXinitial + sizeX / 4, posYinitial);
				context.lineTo(posXinitial + sizeX / 4, posYinitial + sizeY * 0.2
						+ sizeY / 2);
				context.stroke();
	
				context.beginPath();
				context.moveTo(posXinitial + sizeX / 4, posYinitial + sizeY * 0.2
						+ sizeY / 2);
				context.lineTo(posXinitial, posYinitial + sizeY * 0.2 + sizeY / 2);
				context.stroke();
	
			}
	
			// save pos node miniMap
			node.posMiniMap = {
				x : posX,
				y : posY
			};
		}
	}
}

/**
 * Function to paint lines in minimap
 * 
 * @param context
 */
function paintLinesMiniMap(context) {
	for ( var n in _miniMap.listNodes) {
		paintLineNodeMiniMap(_miniMap.listNodes[n], context);
	}
}

/**
 * Function to paint line of one node
 * @param node
 * @param ctx
 */
function paintLineNodeMiniMap(node, ctx) {
	for ( var n in _miniMap.listNodes) {
		if (node._depth == _miniMap.listNodes[n]._depth - 1) {
			if (_miniMap.listNodes[n].isDescendantOf(node.id)) {
				var sizeY = _st.graph.Node.height * _miniMap.proportionTree;
				var sizeX = _st.graph.Node.width * _miniMap.proportionTree;
				var posXinitial = node.posMiniMap.x + sizeX / 2;
				var posYinitial = node.posMiniMap.y + sizeY;
				var posXfinal = _miniMap.listNodes[n].posMiniMap.x + sizeX / 2;
				var posYfinal = _miniMap.listNodes[n].posMiniMap.y;

				if (posXinitial == posXfinal) {
					ctx.beginPath();
					ctx.moveTo(posXinitial, posYinitial);
					ctx.lineTo(posXfinal, posYfinal);
					ctx.stroke();
				} else {

					ctx.beginPath();
					ctx.moveTo(posXinitial, posYinitial);
					ctx.lineTo(posXinitial, posYinitial
							+ (posYfinal - posYinitial) / 2);
					ctx.stroke();

					ctx.beginPath();
					ctx.moveTo(posXinitial, posYinitial
							+ (posYfinal - posYinitial) / 2);
					ctx.lineTo(posXfinal, posYinitial
							+ (posYfinal - posYinitial) / 2);
					ctx.stroke();

					ctx.beginPath();
					ctx.moveTo(posXfinal, posYinitial
							+ (posYfinal - posYinitial) / 2);
					ctx.lineTo(posXfinal, posYfinal);
					ctx.stroke();

				}
			}
		}
	}
}

/**
 * FUnction to calculate limits of the minimap. this comes from the visible nodes of org chart 
 */
function calculateLimit() {

	var list = _miniMap.listNodes;
	var limits = _miniMap.limitMiniMap;
	for ( var i in list) {
		
		if (typeof list[i] == 'object') {
			// limit left
			if (list[i].pos.x - (list[i].getData('width') / 2) < limits.limitLeft) {
				limits.limitLeft = list[i].pos.x - (list[i].getData('width') / 2);
			}
			// limit right
			if (list[i].pos.x + (list[i].getData('width') / 2) > limits.limitRight) {
				limits.limitRight = list[i].pos.x + (list[i].getData('width') / 2);
			}
			// limit top
			if (list[i].pos.y < limits.limitTop) {
				limits.limitTop = list[i].pos.y;
			}
			// limit bottom
			if (list[i].pos.y + list[i].getData('height') > limits.limitBottom) {
				limits.limitBottom = list[i].pos.y + list[i].getData('height');
			}
		}
	}
}




/**
 * Function to calculate limit of rectangle´s minimap
 */
function calculeLimitRectangle() {

	// reset value paint rectangle
	_miniMap.paintRectangle = false;
	_miniMap.listNodesRectangle = {};

	var list = _miniMap.listNodes;
	var limitRectangle = _miniMap.limitRectangle;
	for ( var i in list) {

		if (typeof list[i] == 'object') {
			var node = list[i];
			// limit rectangle miniMap
			if (drawnNode(node.endPos.x, node.endPos.y, node.getData('width'), node
					.getData('height'))) {
	
				_miniMap.listNodesRectangle[list[i].id] = list[i];
	
				// limit left
				if (node.posMiniMap.x < limitRectangle.limitLeft) {
					if (_showDependencies) {
						limitRectangle.limitLeft = node.posMiniMap.x
								- node.Config.width * _miniMap.proportionTree / 2;
					} else {
						limitRectangle.limitLeft = node.posMiniMap.x;
					}
				}
				// limit right
				if (node.posMiniMap.x + node.getData('width')
						* _miniMap.proportionTree > limitRectangle.limitRight) {
					limitRectangle.limitRight = node.posMiniMap.x
							+ node.getData('width') * _miniMap.proportionTree;
				}
				// limit top
				if (node.posMiniMap.y < limitRectangle.limitTop) {
					limitRectangle.limitTop = node.posMiniMap.y;
				}
				// limit bottom
				if (node.posMiniMap.y + _st.graph.Node.height
						* _miniMap.proportionTree > limitRectangle.limitBottom) {
					limitRectangle.limitBottom = node.posMiniMap.y
							+ node.getData('height') * _miniMap.proportionTree;
				}
			} else {
				_miniMap.paintRectangle = true;
			}
		}
	}

}

/**
 * Function to calculate proportion to drawn miniMap
 */
function calculateProportion() {

	var l;
	var r;
	var t;
	if (_miniMap.limitMiniMap.limitRight < 0) {
		r = _miniMap.limitMiniMap.limitRight * -1;
	} else {
		r = _miniMap.limitMiniMap.limitRight;
	}

	if (_miniMap.limitMiniMap.limitLeft < 0) {
		l = _miniMap.limitMiniMap.limitLeft * -1;
	} else {
		l = _miniMap.limitMiniMap.limitLeft;
	}

	if (_miniMap.limitMiniMap.limitTop < 0) {
		t = _miniMap.limitMiniMap.limitTop * -1;
	} else {
		t = _miniMap.limitMiniMap.limitTop;
	}

	var widthTreeBig = l + r;
	var heightTreeBig = t + _miniMap.limitMiniMap.limitBottom;

	var proportionHeight = _miniMap.sizeCanvas.height / heightTreeBig;
	var proportionWidth = _miniMap.sizeCanvas.width / widthTreeBig;

	// reduce tree with propportion width
	if (proportionWidth < proportionHeight) {
		_miniMap.proportionTree = proportionWidth;
	} else {
		// reduce tree with propportion width
		_miniMap.proportionTree = proportionHeight;
	}

	if (_miniMap.proportionTree > 0.5) {
		_miniMap.proportionTree = 0.5;
	}
	if (_miniMap.proportionTree < 0.2) {
		_miniMap.proportionTree = 0.2;
	}

}

/**
 * FUnction to clear canvas
 */
function resetMiniMap() {
	// clear canvas
	var context = _miniMap.canvas.getContext("2d");
	context.clearRect(0, 0, _miniMap.sizeCanvas.width + 5,
			_miniMap.sizeCanvas.height + 5);

	_miniMap.limitMiniMap.limitBottom = 0;
	_miniMap.limitMiniMap.limitTop = 0;
	_miniMap.limitMiniMap.limitLeft = 0;
	_miniMap.limitMiniMap.limitRight = 0;

	// reset propert minimap
	_miniMap.listNodes = {};
	initMinimap();

}

/**
 * FUnction to reset limit of rectangle
 */
function resetLimitRectangle() {
	_miniMap.limitRectangle.limitBottom = 0;
	_miniMap.limitRectangle.limitTop = 900000000000000000;
	_miniMap.limitRectangle.limitLeft = 9000000000000000000;
	_miniMap.limitRectangle.limitRight = 0;
}

/**
 * Function to get all nodes that we are visualized in the screen
 */
function getNodesToPaint() {

	for ( var n in _st.graph.nodes) {
		if (_st.graph.nodes[n].drawn && _st.graph.nodes[n].m4ignore == false) {
			insertNodeMiniMap(_st.graph.nodes[n]);
		}
	}

}

/**
 * FUnction to insert node in list nodes of miniMap
 * 
 * @param node
 */
function insertNodeMiniMap(node) {
	_miniMap.listNodes[node.id] = node;
}

function getClosetCursor(posX, posY) {

	var dX = false;
	var dY = false;
	var nodeFound = false;
	for ( var i in _miniMap.listNodesRectangle) {
		if (typeof _miniMap.listNodesRectangle[i] == 'object') {
			var node = _miniMap.listNodesRectangle[i];
	
			if (dX == false && dY == false) {
				dX = node.pos.x + _st.canvas.translateOffsetX - posX;
				dY = node.pos.y + _st.canvas.translateOffsetY - posY;
				nodeFound = node;
			}
	
			var totalD = absValue(dX) + absValue(dY);
	
			var nX = node.pos.x + _st.canvas.translateOffsetX - posX;
			var nY = node.pos.y + _st.canvas.translateOffsetY - posY;
			var totalNode = absValue(nX) + absValue(nY);
			if (totalNode < totalD) {
				dX = node.pos.x + _st.canvas.translateOffsetX - posX;
				dY = node.pos.y + _st.canvas.translateOffsetY - posY;
				nodeFound = node;
			}
		}
	}

	return nodeFound;

}

/**
 * FUnction to calculate absolute value
 * @param value
 * @returns absolute value
 */
function absValue(value) {
	if (value < 0) {
		return value * -1;
	} else {
		return value;
	}
}
