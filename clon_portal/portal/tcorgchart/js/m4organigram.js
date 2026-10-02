/* =========================================================
	@(#) FileVersion: 819.004.016
	@(#) FileDescription: m4organigram.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= */


//variable to known the current browser
var m4Browser;

//variables used by framework to create the orgChart 
var labelType, useGradients, nativeTextSupport, animate, m4CanvasSupport;


(function () {
	var ua = navigator.userAgent, iStuff = ua.match(/iPhone/i)
		|| ua.match(/iPad/i), typeOfCanvas = typeof HTMLCanvasElement, nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'), textSupport = nativeCanvasSupport
		&& (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
	// I'm setting this based on the fact that ExCanvas provides text support
	// for IE
	// and that as of today iPhone/iPad current text support is lame
	labelType = (!nativeCanvasSupport || (textSupport && !iStuff)) ? 'Native'
		: 'HTML';
	nativeTextSupport = labelType == 'Native';
	useGradients = nativeCanvasSupport;
	m4CanvasSupport = nativeCanvasSupport;
	animate = !(iStuff || !nativeCanvasSupport);
})();


// variable to write the log at the top of the screen
var DateOrg = {
	elem: false,
	write: function (text) {
		if (!this.elem)
			this.elem = $jit.id('dateLabel');
		//this.elem2 = $jit.id('dateLabel2');
		this.elem.innerHTML = text;
		//this.elem2.innerHTML = text;
	}
};

// Detectamos el Browser actual
$(document).ready(function() {
	m4Browser = get_browser_info();

	function get_browser_info(){
		var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 

		if (/trident/i.test(M[1])) {
			tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
			return {name:'IE',version:(tem[1]||'')};
		}   

		if(M[1]==='Chrome'){
			tem=ua.match(/\bOPR\/(\d+)/)
			if(tem!=null)   {return {name:'Opera', version:tem[1]};}
		}   
		
		M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
		
		if((tem=ua.match(/version\/(\d+)/i)) !== null) {M.splice(1,1,tem[1]);}
		return {
		  name: M[0],
		  version: M[1]
		};
	}
});

//init panel resizable left
$(document).ready(function() {
	// Detectamos si estamos en �rabe...
	_isRtlLanguaje = $('html').attr('dir');
	if (_isRtlLanguaje !== undefined)
	{
		_isRtlLanguaje  = (_isRtlLanguaje.toLowerCase() == "rtl");
	} else {
		_isRtlLanguaje = false;
	}

//	$("#controlMaps").resizable();    
});


// Bug 0291036
$(document).ready(function() {
	if (_propertyBag.ess_TechJSP_InGeneric === true) {
		_PathTechJSP = "/sse_generico/";
	}
});

/**
* A class that inherits from ST.Plot.EdgeTypes, for paint lines This class lets
* you create the organizational lines as we want
*/
$jit.ST.Plot.EdgeTypes
	.implement({
		'm4line': {
			'render': function (adj, canvas) {
				if (adj.nodeTo.m4ignore === false) {
						var orn = this.getOrientation(adj), 
							nodeFrom = adj.nodeFrom, nodeTo = adj.nodeTo, 
							rel = nodeFrom._depth < nodeTo._depth, 
							begin = this.viz.geom.getEdge(rel ? nodeFrom : nodeTo, 'begin', orn), 
							end = this.viz.geom.getEdge(rel ? nodeTo : nodeFrom, 'end', orn), 
							ctx = canvas.getCtx();

						begin.y = begin.y - nodeFrom.getData('height') / 2 + nodeTo.Config.height;
						end.y = end.y + nodeTo.getData('height') / 2;
	
						// get Id typeStyle of node
						var idType = findIdType(nodeFrom);
						var typeStyle = getTypeStyle(idType);
						var showEmployees = $jit.id('showEmployees');

						if (typeof nodeTo.dependenciFuncional == 'object' && _showDependencies && showEmployees.checked==true) {
							// paint line
							paintLineNormal(typeStyle, ctx, begin.x, begin.y, end.x+nodeTo.getData('width')/2-+_st.graph.Node.width/2 , end.y);
						}else{
							// paint line
							paintLineNormal(typeStyle, ctx, begin.x, begin.y, end.x, end.y);
						}
				}
			}
		}
	});


/**
* A class that inherits from NodeTypes, for paint rectangles This class lets
* you create the organizational rectangles as we want
*/
$jit.ST.Plot.NodeTypes
		.implement({
			'm4rectangle': {
				'render': function (node, canvas) {										
					//Nos quedamos con la Posici�n X del nodo que se pinta m�s a la izquierda
					//if (node.id == 'WU_0001') {
					//	console.log('node.Pos: ' + 'x: ' + node.pos.x + ' y: ' + node.pos.y + ' ' + 'node.startPos: ' + 'x: ' + node.startPos.x + ' y: ' + node.startPos.y + ' '+ 'node.endPos: ' + 'x: ' + node.endPos.x + ' y: ' + node.endPos.y)					
					//}

					if (node.endPos.x < _TopLeftNodePosX)
					{
						_TopLeftNodePosX = node.endPos.x;
					}

					if (node.endPos.x + node.getData('width') > _TopRightPlusWidthNodePosX)
					{
						_TopRightPlusWidthNodePosX = node.endPos.x + node.getData('width');
					}

					if (drawnNode(node.endPos.x, node.endPos.y, node.getData('width'), node.getData('height')) 
						&& node.m4ignore == false) {

						var width = node.getData('width'), 
							height = node.getData('height'),
							pos = this.getAlignedPos(node.pos.getc(true), width, height), 							
							posX = pos.x + width / 2,
							posY = pos.y + height;
						
						var ctx = _st.canvas.getCtx();
						ctx.beginPath();

						var onlyeEmpl = $jit.id('withoutgroupEmployees').checked; 
						// If the node has not dependency functional we paint it
						if (typeof node.dependenciFuncional != 'object'
							|| !_showDependencies|| onlyeEmpl==false ) {
							rectangleRounded('fill', {
								x: posX,
								y: posY
							}, node.Config.width, node.Config.height, canvas);

							// Write text inside the box
							writeText(posX, posY, ctx, node);
						} else {
							
							// If the node has  dependency functional 
							//check if dependency functional is visible
							if (_showDependencies && node.m4ignore == false) {
								// If the option to  show the  associated nodes is
								// checked Paint the parent box of the nodes associated
								rectangleRounded('fill', {
									x: posX + (node.getData('width') - node.Config.width) / 2,
									y: posY - height / 2 + node.Config.height/ 2
								}, node.Config.width, node.Config.height, canvas);

								// Write text of parent nodes associated inside the box
								writeText(posX + (node.getData('width') - node.Config.width) / 2, posY - height / 2 + node.Config.height/ 2, ctx, node);

								if (typeof node.dependenciFuncional == 'object') {
									// change the color of the dependency functional nodes
									// from here not being
									// recognized by the framerowk nodes
									// get Idtype of node
									var idType = findIdType(node.dependenciFuncional);
									// get typeStyle of node
									var typeStyle = getTypeStyle(idType);
									// get color
									var color = getValueAttribute(typeStyle, ATTR_COLOR);
									// change color to context
									ctx.fillStyle = color;
									rectangleRounded(
										'fill',
										{
											x: posX - (node
											.getData('width') - node.Config.width) / 2,
											y: posY
											- height
											/ 2
											+ node.Config.height
											/ 2
											+ node.Config.height
											* 1.2
											}, node.Config.width,
											node.Config.height, canvas);
									// Paint rectangle
									ctx.stroke();

									// get and change style of lines
									var colorLine = getValueAttribute(typeStyle, ATTR_COLOR_LINE_ASSOCIATED);
									ctx.strokeStyle = colorLine;

									// wirte text of node associated
									writeText(posX - (node.getData('width') - node.Config.width) / 2, posY - height / 2+ node.Config.height / 2 + node.Config.height * 1.2, ctx, node.dependenciFuncional);
									// paint lines to associated
									// paint line
									paintLineDependency(
											typeStyle,
											ctx,
											posX + ( node.Config.width / 2),
													posY+node.Config.height- node
													.getData('height')/ 2
													,
													posX +  node.Config.width-node
													.getData('width')/2,
															posY
															- height
															/ 2
															+ node.Config.height
															/ 2
															+ node.Config.height
															* 1.2
									);
								} // END FOR dependenciFuncional								
							} // END If the option to show the associated NOT
							
						} // END IF node has associated nodes
					}
				}
			}
		});

/**
* Function that paint line from node to child node
* @param typeStyle, indicates if the line is continuous or discontinuous
* @param ctx, context of canvas
* @param beginX, point initial X
* @param beginY, point initial Y
* @param endX, point final X
* @param endY, point final Y
*/
function paintLineNormal(typeStyle, ctx, beginX, beginY, endX, endY) {
	
	// if it is even being painted on
	// the left
	var colorline = getValueAttribute(typeStyle, ATTR_COLOR_LINE);

	beginX = parseInt(beginX);
	beginY = parseInt(beginY);
	endX = parseInt(endX);
	endY = parseInt(endY);

	ctx.strokeStyle = colorline;
	if (typeStyle['_typeLineNormal'] == 0) {
		if (beginX == endX) {
			m4LineContinuos(ctx, beginX, beginY, endX, endY);
		} else {
			// stretch 1
			m4LineContinuos(ctx, beginX, beginY, beginX, endY - _st.config.subtreeOffset);
			// stretch 2
			m4LineContinuos(ctx, beginX, endY - _st.config.subtreeOffset, endX, endY - _st.config.subtreeOffset);
			// stretch 3
			m4LineContinuos(ctx, endX, endY - _st.config.subtreeOffset, endX, endY);
		}
	} else {
		// discontinuos
		if (beginX == endX) {
			m4LineDiscontinuos(ctx, beginX, beginY, endX, endY);
		} else {
			// stretch 1
			m4LineDiscontinuos(ctx, beginX, beginY, beginX, endY - _st.config.subtreeOffset);
			// stretch 2
			m4LineDiscontinuos(ctx, beginX, endY - _st.config.subtreeOffset, endX, endY - _st.config.subtreeOffset);
			// stretch 3
			m4LineDiscontinuos(ctx, endX, endY - _st.config.subtreeOffset, endX, endY);
		}
	}
}

/**
* Function that paint line from subordinate to dependency
* @param typeStyle, indicates if the line is continuous or discontinuous
* @param ctx, context of canvas
* @param beginX, point initial X
* @param beginY, point initial Y
* @param endX, point final X
* @param endY, point final Y
*/
function paintLineDependency(typeStyle, ctx, beginX, beginY, endX, endY) {
	// if it is even being painted on
	// the left
	var colorline = getValueAttribute(typeStyle, ATTR_COLOR_LINE_ASSOCIATED);
	ctx.strokeStyle = colorline;
	if (typeStyle['_typeLineAssociated'] == 0) {
		// stretch 1
		m4LineContinuos(ctx, beginX, beginY, beginX, endY);
		// stretch 2
		m4LineContinuos(ctx, beginX, endY, endX, endY);
	} else {
		// discontinuos
		// stretch 1
		m4LineDiscontinuos(ctx, beginX, beginY, beginX, endY);
		// stretch 2
		m4LineDiscontinuos(ctx, beginX, endY, endX, endY);
	}
}

/**
* Function that paint a continuos line between two nodes
* @param ctx, context of canvas
* @param beginX, point initial X
* @param beginY, point initial Y
* @param endX, point final X
* @param endY, point final Y
*/
function m4LineContinuos(ctx, initialX, initialY, finalX, finalY) {
	ctx.beginPath();
	ctx.moveTo(parseInt(initialX)+0.5, parseInt(initialY));
	ctx.lineTo(parseInt(finalX)+0.5, parseInt(finalY));
	ctx.stroke();
}

/**
* Function that paint a discontinuos line between two nodes
* @param ctx, context of canvas
* @param beginX, point initial X
* @param beginY, point initial Y
* @param endX, point final X
* @param endY, point final Y
*/
function m4LineDiscontinuos(ctx, initialX, initialY, finalX, finalY) {
	//if the browser does not have canvas, we paint continuos line
	//to not slow down the development of drawing

	initialX = parseInt(initialX)+0.5;
	initialY = parseInt(initialY);
	finalX = parseInt(finalX)+0.5;
	finalY = parseInt(finalY);

	if (m4CanvasSupport == true) {
		// No Internet explorer navigator
		// rounded image
		if (initialX < finalX) {
			var pointA = initialX;
			var pointB = initialX + 3;
			while (pointB < finalX) {
				ctx.beginPath();
				ctx.moveTo(pointA, initialY);
				ctx.lineTo(pointB, finalY);
				ctx.stroke();
				pointA = pointB + 3;
				pointB = pointB + 6;
			}
		}
		if (initialX > finalX) {
			var pointA = initialX;
			var pointB = initialX - 3;
			while (pointB > finalX) {
				ctx.beginPath();
				ctx.moveTo(pointA, initialY);
				ctx.lineTo(pointB, finalY);
				ctx.stroke();
				pointA = pointB - 3;
				pointB = pointB - 6;
			}
		}
		if (initialY != finalY) {
			var pointA = initialY;
			var pointB = initialY + 3;
			while (pointB < finalY) {
				ctx.beginPath();
				ctx.moveTo(initialX, pointA);
				ctx.lineTo(finalX, pointB);
				ctx.stroke();
				pointA = pointB + 3;
				pointB = pointB + 6;
			}
		}
	} else {
		m4LineContinuos(ctx, initialX, initialY, finalX, finalY);
	}
}


/**
* Function that check if we have that drawn node. Only paint,
*  if node is inside of canvas visible(screen). But if we are scaling, we need to paint always
* @param posX, position node
* @param posY, position node
* @returns, false-> no drawn node true-> drawn node
*/
function drawnNode(posX, posY, width, height) {
	var escalado = $jit.id('escalado');
	if (escalado.checked) {
		return true;
	}
	
	var withdScreeen = _st.canvas.canvases[0].size.width;
	var heightScreeen = _st.canvas.canvases[0].size.height;
	var desplCenterX = _st.canvas.translateOffsetX;
	var desplCenterY = _st.canvas.translateOffsetY;
	var limitTop = posY + desplCenterY + height;
	var limitDown = posY + desplCenterY;
	var limitLeft = posX + desplCenterX + width / 2;
	var limitRigth = posX + desplCenterX - width / 2;

	//check limit top
	if (limitTop < -(heightScreeen / 2)) {
		return false;
	}

	//check limit down
	if (limitDown > (heightScreeen / 2)) {
		return false;
	}

	//check limit left
	if (limitLeft < -(withdScreeen / 2)) {
		return false;
	}

	//check limit right
	if (limitRigth > (withdScreeen / 2)) {
		return false;
	}

	//drawn node!
	return true;
	
}


/**
* Function that paints a rectangle with rounded corners
* 
* @param type,
*            Outline or full paint
* @param pos,
*            position of the rectangle
* @param width,width
*            of the rectangle
* @param height,height
*            of the rectangle
* @param canvas,
*            object canvas
*/
function rectangleRounded(type, pos, width, height, canvas) {

	var ctx = canvas.getCtx();

	ctx.fillRect(pos.x - width / 2,pos.y - height / 2,width,height);

	/**
	ctx.beginPath();
	var radius = 10; // corner radius
	var x = pos.x - width / 2;
	var y = pos.y - height / 2;
	ctx.moveTo(x + radius, y);
	ctx.lineTo(x + width - radius, y);
	ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
	ctx.lineTo(x + width, y + height - radius);
	ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
	ctx.lineTo(x + radius, y + height);
	ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
	ctx.lineTo(x, y + radius);
	ctx.quadraticCurveTo(x, y, x + radius, y);
	ctx.closePath();
	ctx[type]();
	*/
}

/* variable to use most of the white zone of the canvas*/
var _deltaCanvasY = 290; //302;
/* variable to know if the orgchart is loading yet*/
var _initializing_Org = true;
/* variable that stores the orgChart*/
var _st;
/* Size Element*/
var _sizeElementX = 190; //150;
var _sizeElementY = 110; //90;
/*store the action right menu*/
var _actionMenu = false;
/*stores the font size of each text*/
var _sizeText = {};
var _sizeTextTwoLine = {};

///*stores the font height of each text*/
//var _heightFont = {};

/*stores number lines of each text*/
var _numberLineText = {};
/*check if we have show tooltip*/
var _activateTooltip=false;
/** number person to grouped*/
var _numberPersonTogroup;
/** node search*/
var _nodeSearch=null;
var _jsonOriginal;
/** TYPE ZOOM*/
var _typeZoom;
/** count to ZOOM*/
var _countZoom;
/** store if we must show dependencies*/
var _showDependencies;
/** store copy of li root*/
var _copyLiRoot;
/**store if we must show toolbar node*/
var _contextMenu=false;
/**store if we must show toolbar node*/
var _overContextMenu=false;
/**position mouse for zom*/
var _positionMouse={
	posX:false,
	posY:false,
	target:false
};
/** proportion box*/
var _proportionBox={
		oldWidth:false,
		oldHeight:false
};
/**store last item tree checked*/
var _lastTreeChecked=false;

/*default type style. Applies only if the node has an associated type style*/
var _typeStyleDefault = {
	"_idTypeStyle": "m4StyleDefault",
	"_nameTypeStyle": "m4styleDefault",
	"_type": -1,
	"_color": "#FFFFFF",
	"_colorLineNormal": 0,
	"_colorLineAssociated": 2,
	"_colorBorderBox": 0,
	"_shape": 1,
	"_borderWidth": 0.2,
	"_lineWidth": 0.2,
	"_typeLineNormal": 0,
	"_typeLineAssociated": 0,
	"_widthBox": 190,
	"_heightBox": 115,
	"_gropingBox": 0,
	"_showBox": 0,
	"_listItem": []
};


var _listNodesShowEmployees= new Array;

/**Store node with grouped employees */
var controlGroup={
		nodeGroup:null,		
		nodeGroupWithAssistantEmp:null,
		nodeGroupWithAssistantAsis:null,
		nodeGroupVacancy:null,
		listGroupPost:null,
		listGroupPostWithAssistantEmp:null,
		listGroupPostWithAssistantAsis:null
};

/**Store old json to change root*/
var _jsonChangeRoot;

//INIT SLIDER
// An immediately-invoked function expression.
var _sliderX;
var _sliderY;
(function($) {
	// we can now rely on $ within the safety of our �bodyguard� function
	$(document).ready(function() {
		$("#rangeSizeX").slider({
			auto : true,
			continuous : true,
			min : 20,
			max : 350,
			step : 2,
			animate : 'fast',
			value : GetSizeElementXFromOrgChart(),
			change : function(event, ui) {
				var value = ui.value;
				controlSizeX(value);
			}
		});
		_sliderX=$("#rangeSizeX");
		$("#rangeSizeY").slider({
			auto : true,
			continuous : true,
			min : 20,
			max : 350,
			step : 2,
			animate : 'fast',
			value : GetSizeElementYFromOrgChart(),
			change : function(event, ui) {
				var value = ui.value;
				controlSizeY(value);
			}
		});
		_sliderY=$("#rangeSizeY");
	});
})(jQuery);


/**
 * Function to lock a node and all its children. They will not be visible in org chart
 * @param node
 */
function blockExpandNode(node){

	if (node) { 
		// si el nodo esta contraido
		if (!node.collapsed) {
			node.m4lockedNode = true;
			// change properties node	
			// change properties node
			setm4ignore(true, node);
			//change first
			node.m4ignore = false;
			nodeCollapse(_st, node);
		}
	} // END IF is a node
	_st.refresh();
}

/**
 * Function to hide toolbar Node
 */
/*function m4HideToolbarNode(){
	var tool=$jit.id('toolbarNode');
	tool.style.display='none';
}
*/
/**
 * Function to show toolbar Node
 */
/*function m4ShowToolbarNode(){
	$jit.id('toolbarNode').style.display='block';
}
*/

function updateExployChild(){

	var showEmployees = $jit.id('showEmployees');
	if(showEmployees.checked){
		_st.graph.eachNode(function (node) {
			if (node.type==TYPE_WU && node._depth < _st.config.levelsToShow) {
				node.exployChild=true;
			}
		});
	}
}

/**
 * Function to show Context Menu
 * @param posX
 * @param posY
 * @param node
 */
function showContextMenu(posX,posY,node){
	_contextMenu=true;
	var contextMenu= $jit.id('contextMenu');

	// Si tenemos opciones din�micas, tienen prioridad
	if (_DynamicCtxMnuOpt.length > 0){

		//Quitamos la cabecera del menu contextual
		$jit.id('fileHeaderCM').style.display='none';
		$jit.id('fileSeparatorCM').style.display='none';

		hideAllOptionsContextMenu();
		var idHREncrypt=node.data['EncryptedID'];
		var orhr = node.data['OrHr'];

		//MIENTRAS NO RESOLVAMOS ENCRIPTACI�N, PASAMOS SIN ENCRIPTAR
		//idHREncrypt = node.data['Id'];
		//MIENTRAS NO RESOLVAMOS ENCRIPTACI�N, PASAMOS SIN ENCRIPTAR

		// Nota: el orhr lo devolvemos como n�mero..
		if (!isNaN(orhr))
		{
			orhr = parseInt(orhr).toFixed(); //.toString();
		}


		// Reasignamos el evento onclick, para poder pasar a la funci�n callback el idHR
		var index;
		for (index = 0; index < _DynamicCtxMnuOpt.length; index++)
		{
			var optButton = "button" + _DynamicCtxMnuOpt[index];
			var optLabel  = "label"  + _DynamicCtxMnuOpt[index];
			var emptyObject = {};
			var callbackfun = _DynamicCtxMnuOpt_Func[index];

			if (callbackfun != null)
			{
				$jit.id(optButton).onclick=function (argCallback, argEnc, argOhr){
					hideContextMenu();
					argCallback (argEnc, argOhr);
				}.bind(this, callbackfun,idHREncrypt, orhr);

				$jit.id(optLabel).onclick=function (argCallback, argEnc, argOhr){
					hideContextMenu();
					argCallback (argEnc, argOhr);
				}.bind(this, callbackfun,idHREncrypt, orhr);
			}

			if(node.data['Id']){
				$jit.id('TitleContextMenu').innerText=node.data['Name'];
				//firefox textContent
				$jit.id('TitleContextMenu').textContent=node.data['Name'];
			}
		}

	} else {
		// Ejecuci�n normal
		$jit.id('labelExpandWU').onclick=function (){
			var levelsToShowSelect=$jit.id('selectLevel');
			var levels=levelsToShowSelect.value;
			_st.config.levelsToShow = levels;
			
			updateExployChild();
			
			goToNode(node.id);
			var element=$jit.id('ul_'+node.id);
			markTreeWU(node);
			markTreeWURecursive(element,levelsToShowSelect.value);
			//DVBhidetoolbar m4HideToolbarNode();
			hideContextMenu();
		};
		
		
		$jit.id('labelTableEmployees').onclick=function (){
				tableNode(node, 'employee');
				hideContextMenu();
			};
		
		$jit.id('labelTableWU').onclick=function (){
				tableNode(node, 'departament');
				hideContextMenu();
			};
		$jit.id('labelTablePOS').onclick=function (){
			tableNode(node, 'pos');
			hideContextMenu();
		};

		$jit.id('labelStopWU').onclick=function (){
				blockExpandNode(node);
				node.imgLock.style.display='';
				hideContextMenu();

				var ul= $jit.id('ul_'+node.id);
				if(ul!=null){//has child WU
					//hide tree Wu
					$('#ul_'+node.id).hide("slow");
					$jit.id('ul_'+node.id).nodeBlock=true;
				}
			};
			
		$jit.id('labelSelectRoot').onclick=function (){
				changeRoot(node);
				hideContextMenu();
			};
			
		$jit.id('labelDeleteElement').onclick=function (){
				deleteNode(node);
				hideContextMenu();
			};


		if(_propertyBag.essMode == false || (_propertyBag.essMode == true && _propertyBag.disable_ESS_EmpLinks == false))
		{
			$jit.id('labelInfoResponsableWU').onclick=function (){
				sendQViewEmployee(node);
				hideContextMenu();
			};

		}
		
		$jit.id('labelMarkTree').onclick=function (){
				markTreeWU(node);
				hideContextMenu();
		};

		$jit.id('labelAddContact').onclick=function (){
				addContact(node);
				hideContextMenu();
		};

		$jit.id('labelSendMail').onclick=function (){
			sendMail(node);
			hideContextMenu();
		};
			
		//button for img	
			
		$jit.id('buttonTableEmployee').onclick=function (){
				tableNode(node, 'employee');
				hideContextMenu();
			};
		
		$jit.id('buttonTableDepartament').onclick=function (){
				tableNode(node, 'departament');
				hideContextMenu();
			};

		$jit.id('buttonTablePOS').onclick=function (){
			tableNode(node, 'pos');
			hideContextMenu();
		};	

		$jit.id('buttonBlock').onclick=function (){
				blockExpandNode(node);
				node.imgLock.style.display='';
				hideContextMenu();
				
				var ul= $jit.id('ul_'+node.id);
				if(ul!=null){//has child WU
					//hide tree Wu
					$('#ul_'+node.id).hide("slow");
					$jit.id('ul_'+node.id).nodeBlock=true;
				}
			};
			
		$jit.id('buttonRoot').onclick=function (){
				changeRoot(node);
				hideContextMenu();
			};
			
		$jit.id('buttonDeleteNode').onclick=function (){
				deleteNode(node);
				hideContextMenu();
			};

		
		if(_propertyBag.essMode == false || (_propertyBag.essMode == true && _propertyBag.disable_ESS_EmpLinks == false))
		{
			$jit.id('buttonInfoResponsableWU').onclick=function (){
				sendQViewEmployee(node);
				hideContextMenu();
			};
		}	
		
		$jit.id('expandButton').onclick= function (){
			var levelsToShowSelect=$jit.id('selectLevel');
			var levels=levelsToShowSelect.value;
			_st.config.levelsToShow = levels;

			updateExployChild();
			
			goToNode(node.id);
			var element=$jit.id('ul_'+node.id);
			markTreeWU(node);
			markTreeWURecursive(element,levelsToShowSelect.value);
			// DVBhidetoolbar m4HideToolbarNode();
			hideContextMenu();
			
		};

		$jit.id('buttonMarkTree').onclick=function (){
			markTreeWU(node);
			hideContextMenu();
			};

		$jit.id('buttonAddContact').onclick=function (){
			addContact(node);
			hideContextMenu();
		};

		$jit.id('buttonSendMail').onclick=function (){
			sendMail(node);
			hideContextMenu();
		};
		
		//reset title
		$jit.id('TitleContextMenu').innerText='';
		//firefox textContent
		$jit.id('TitleContextMenu').textContent='';
		
		if(node.data['Id']){
			$jit.id('TitleContextMenu').innerText=node.data['Name'];
			//firefox textContent
			$jit.id('TitleContextMenu').textContent=node.data['Name'];
		}
		if(node.data['WUID']){
			$jit.id('TitleContextMenu').innerText=node.data['NameWU'];
			//firefox textContent
			$jit.id('TitleContextMenu').textContent=node.data['NameWU'];
		}
		if(node.data['VacancyName']){
			$jit.id('TitleContextMenu').innerText=node.data['VacancyName'];
			//firefox textContent
			$jit.id('TitleContextMenu').textContent=node.data['VacancyName'];
		}

		if(node.type==TYPE_WU){
			$jit.id('fileExpandWU').style.display='';
			$jit.id('fileInfoResponsableWU').style.display='';
			$jit.id('fileDeleteElement').style.display='';
			$jit.id('fileSelectRoot').style.display='';
			$jit.id('fileStopWU').style.display='';
			$jit.id('fileTableEmployees').style.display='';
			$jit.id('fileTableWU').style.display='';
			$jit.id('fileMarkTree').style.display='';
		}else{
			$jit.id('fileExpandWU').style.display='none';
			$jit.id('fileInfoResponsableWU').style.display='none';
			$jit.id('fileDeleteElement').style.display='';
			$jit.id('fileSelectRoot').style.display='none';
			$jit.id('fileStopWU').style.display='none';
			$jit.id('fileTableEmployees').style.display='none';
			$jit.id('fileTableWU').style.display='none';
			$jit.id('fileSelectRoot').style.display='none';
			$jit.id('fileMarkTree').style.display='none';
		}

		if(_propertyBag.essMode==false ){
			$jit.id('fileAddContact').style.display='none';
			$jit.id('fileSendMail').style.display='none';
		}
		else
		{
			// Si estamos en ESS, se puede ocultar el men� "A�adir contactos"
			if (_propertyBag.disable_ESS_EmpLinks == true)
			{
				$jit.id('fileAddContact').style.display='none';
			}
		}

		//type orgchart position
		if(node.type==TYPE_WU && _configStyle[3]=="3"){
			$jit.id('fileExpandWU').style.display='';
			$jit.id('fileInfoResponsableWU').style.display='none';
			$jit.id('fileDeleteElement').style.display='';
			$jit.id('fileSelectRoot').style.display='';
			$jit.id('fileStopWU').style.display='';
			$jit.id('fileTableEmployees').style.display='';
			$jit.id('fileTableWU').style.display='none';
			$jit.id('fileTablePOS').style.display='';
			$jit.id('fileMarkTree').style.display='';
		}else{
			$jit.id('fileTablePOS').style.display='none'; //dont show table position
		}

		if(node.id==_st.root){
			$jit.id('fileDeleteElement').style.display='none';
			$jit.id('fileSelectRoot').style.display='none';
		}
		
		if(_propertyBag.essMode == true && _propertyBag.disable_ESS_EmpLinks == true)
		{
		$jit.id('fileInfoResponsableWU').style.display='none';
		}
	}

	
	contextMenu.m4Node=node;
	contextMenu.style.display='block';	
	contextMenu.style.position='absolute';
	
	var leftContainer = $jit.id('left-container');

	if (_isRtlLanguaje == false) {
		if(posX + $(contextMenu).width() -  $jit.id('left-container').offsetWidth >_st.canvas.canvases[0].canvas.width){
			contextMenu.style.left=posX-_st.graph.Node.width-$(contextMenu).width()+'px';
		}else{
			contextMenu.style.left=posX+'px';
		}
	} else {
		if(posX -_st.graph.Node.width - $(contextMenu).width() -  $jit.id('left-container').offsetWidth < 0){
			contextMenu.style.left=posX+'px';
		}else{
			contextMenu.style.left=posX-_st.graph.Node.width-$(contextMenu).width()+'px';
		}
	}

	contextMenu.style.top=posY+'px';
	
	if(posY+$(contextMenu).height()>_st.canvas.canvases[0].canvas.height){
		contextMenu.style.top=posY+_st.graph.Node.height-contextMenu.clientHeight+'px';
	}
}


/**
 * Function to hide Context Menu
 */
function hideContextMenu(){
	$jit.id('contextMenu').style.display='none';
	_contextMenu=false;
}

/*
function testShowContextMenu()
{
	var contextMenu= $jit.id('contextMenu');
	contextMenu.style.display='block';	
	contextMenu.style.position='absolute';
	contextMenu.style.left="100"+'px';
	contextMenu.style.top="100"+'px';	
}
*/

//========================================================================
//========================================================================
//		EXECUTION FROM ESS-MYPEOPLE
//========================================================================

// Habr�a que mejorar esta funci�n para que el  bot�n se crease din�micamente y no estuviera en el HTML
function activateButtonBack(image, callbackFunc)
{
	if (!_ESS_New_Organigram)
	{
		return;
	}

	// Ensure we have the parameter and it is a function...
	var bHasCallBackFunc = (callbackFunc && typeof(callbackFunc) === "function");

	var sepMyTeam=$jit.id('sepMyTeam')
	sepMyTeam.style.display = '';


	// Activamos el bot�n de vuelta a MyPeople
	var imgButtonMyPeople =$jit.id('imgButtonMyPeople')
	imgButtonMyPeople.src = image;

	var btnMyTeam =$jit.id('btnMyTeam')
	btnMyTeam.style.display='';
	if (bHasCallBackFunc) {
		btnMyTeam.onclick = function () {
			callbackFunc();
		};
	}
}

function changeTooltipInformation()
{
    if (_ESS_New_Organigram)
	{
		$jit.id('pageHelp').title =_tooltipInformationMyPeopleESS;
	}
}
	

/**
* Function to add a new option to the ContextMenu
*/
function addContextMenuOption(id, optLabel, image, callbackFunc ){

	//NOTA: Si nos invocan a esta funci�n, es que la ejecuci�n del organigrama es la nueva
	//*****************************************
	//*****************************************
	//*****************************************
	_ESS_New_Organigram = true;
	//*****************************************
	//*****************************************
	//*****************************************


	// Ensure we have the parameter and it is a function...
	var bHasCallBackFunc = (callbackFunc && typeof(callbackFunc) === "function");

/*	var onClick="";

	if (bHasCallBackFunc){
		// Get the Name of the function ... no tiene sentido pasar la funci�n... sino el nombre de �sta!!!
		var nameFunction = functionName(callbackFunc) + "()";
		onClick="onclick= " + nameFunction ;
	}



	var newOptMenu = "<TR id=" + "file" + id + ">\r\n" ;
	newOptMenu += "<TD><img id=" + "button" + id + " " + "class=buttonContextMenu" + " " + onClick + " ";
	newOptMenu += "src=\"" + image + "\" ></TD>\r\n";
	newOptMenu += "<TD><LABEL id=" + "label" + id + " " + "class=labelContextMenu" + " " + onClick +" >" + optLabel +"</LABEL></TD>";
	newOptMenu += "<TR>\r\n";
	
	var contextMenuHtml = contextMenu.innerHTML;
	var n = contextMenuHtml.toUpperCase().indexOf("</TBODY></TABLE>");

	contextMenuHtml = contextMenuHtml.substring(0, n) + newOptMenu + contextMenuHtml.substring(n, contextMenuHtml.length);
	contextMenu.innerHTML = contextMenuHtml;
*/
	// Ensure the menu optione doesn't exist
	var menuId = "file" + id; 
	var testoptmenu = $jit.id(menuId);

	if (testoptmenu)
	{
		return;
	}

	var tableContextMenu= $jit.id('tableContextMenu');
	var tableTBody = tableContextMenu.children[0];
		var tr = document.createElement('TR');
		tr.id = menuId;
			var td = document.createElement('TD');
				var img = document.createElement('IMG');
				img.id =  "button" + id;
				img.className = "buttonContextMenu";
				img.src = image;
				/*if (bHasCallBackFunc) {
					img.onclick = function () {
						callbackFunc(id);
					};
				}
				*/
			td.appendChild(img);
			var td2 = document.createElement('TD');
				var lbl = document.createElement('LABEL');
				lbl.id =  "label" + id;
				lbl.className = "labelContextMenu";
				lbl.innerHTML = optLabel;
				lbl.src = image;
				/*
				if (bHasCallBackFunc) {
					lbl.onclick = function () {
						callbackFunc(id);
					};
				}
				*/
			td2.appendChild(lbl);
		tr.appendChild(td);
		tr.appendChild(td2);
	tableTBody.appendChild(tr);

	_DynamicCtxMnuOpt[_DynamicCtxMnuOpt.length] = id;

	if (bHasCallBackFunc)
	{
		_DynamicCtxMnuOpt_Func[_DynamicCtxMnuOpt_Func.length] = callbackFunc;
	} else {
		_DynamicCtxMnuOpt_Func[_DynamicCtxMnuOpt_Func.length] = null;
	}
}

/*
function functionName(fun) {
  var ret = fun.toString();
  ret = ret.substr('function '.length);
  ret = ret.substr(0, ret.indexOf('('));
  return ret;
}
*/

/**
* Function that hides all the static options of the ContexMenu
*/
function hideAllOptionsContextMenu()
{
	$jit.id('fileExpandWU').style.display='none';
	$jit.id('fileTableEmployees').style.display='none';
	$jit.id('fileTableWU').style.display='none';
	$jit.id('fileTablePOS').style.display='none';
	$jit.id('fileStopWU').style.display='none';
	$jit.id('fileSelectRoot').style.display='none';
	$jit.id('fileDeleteElement').style.display='none';
	$jit.id('fileMarkTree').style.display='none';
	$jit.id('fileInfoResponsableWU').style.display='none';
	$jit.id('fileAddContact').style.display='none';
	$jit.id('fileSendMail').style.display='none';
}

/**
* Function that hide an option menu
*/
function hideContextMenuOption(id1){
	var optMenu= $jit.id(id1);

	if (optMenu)
	{
		optMenu.style.display='none';
	}
}
//========================================================================
//========================================================================


//21/09/2017 Función que devuelve la versión del IE
function getInternetExplorerVersion() {

	var rv = -1;
	if (navigator.appName == 'Microsoft Internet Explorer') {
		var ua = navigator.userAgent;
		var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
			rv = parseFloat(RegExp.$1);
	} else if (navigator.appName == 'Netscape') {

		/// in Edge the navigator.appVersion does not say trident
		if (navigator.appVersion.indexOf('Edge') > -1) {
			rv = 12;
		} else {
			var ua = navigator.userAgent;
			var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");

			if (re.exec(ua) != null) {
				rv = parseFloat(RegExp.$1);
			}

		}
	}
	return rv;
}


/**
* function to initiate the menus on accordion and the organizational
*/
function initWeb() {
	//[perfCarga]console.time("initWeb"); 
	document.body.style.cursor = 'wait';

	//21/09/2017 Solución para que en la carga del IE9, no se ejecute FLEX
	document.getElementsByTagName('html')[0].setAttribute('ie-version', 'ie'+getInternetExplorerVersion());
	//--------------------------------

	//[perfCarga]console.time("TimeOutinitWebPause"); 
	setTimeout("initWebPause()", 100);   //2000
	document.body.style.cursor = 'default';
	//[perfCarga]console.timeEnd("initWeb");

	if(_propertyBag.essMode === false || (_propertyBag.essMode === true && _propertyBag.saveStyleByOrg !== true)){
		$jit.id('buttonShowConfig').style.visibility='visible';
	}
}


function initWebPause(){
	//[perfCarga]console.timeEnd("TimeOutinitWebPause"); 
	//[perfCarga]console.time("initWebPause"); 
	document.body.style.cursor = 'wait';
	if(_propertyBag.essMode==true){
		
		window.moveTo(0, 0);
		window.resizeTo(screen.availWidth, screen.availHeight);
		setModeESS_MSS();
	}
	
	if(_configStyle[3]=="3"){//type orgchart pos
		setMode_OrgPos();
	}

	if (_propertyBag.hide_FuncDepCheck == true)
	{
		$jit.id('fileDependencies').style.display='none';
		showDepenFunc.checked = false;
	}

	//set size contentTreeWU	
	var cont=$jit.id('container');
	var tabMap=$jit.id('tabMap');
	$jit.id('divScroll').style.height=cont.clientHeight-250-(tabMap.clientHeight)*2+'px';
	
	
	var  widthPL =$jit.id('left-container').clientWidth;
	var  heightPL =$jit.id('left-container').clientHeight;
	
	//resiable panel left
	
	/* $( "#controlMaps" ).resizable( "option", "minWidth", widthPL );
	 $( "#controlMaps" ).resizable( "option", "maxHeight", heightPL); 
	 $( "#controlMaps" ).resizable( "option", "maxWidth", 500 );*/
	
	var contentWU=$jit.id('contentWU');
	createTree(json,contentWU,5);
	
	$("#tabMap").click(function(){		
		$("#tabMap .expandDown").toggleClass('rotate');
		if($jit.id('contentMap').style.display!='none'){
			$("#contentMap").hide("slow");
			$("#mini_map").hide("slow");
			$("#canvas_Rectangle").hide("slow");
		}else{
			$("#contentMap").show("slow");
			$("#mini_map").show("slow");
			$("#canvas_Rectangle").show("slow");
		}
	});
	
	$("#contentTreeWU .TabsMenu").click(function(){
		$("#contentTreeWU .expandDown").toggleClass('rotate');
		if($jit.id('divTreeWU').style.display!='none'){
			$("#divTreeWU").hide("slow");
		}else{
			$("#divTreeWU").show("slow");
		}
	});

	//DVBhidetoolbar m4HideToolbarNode();
	//DVBhidetoolbar var toolbarNode=$jit.id('toolbarNode');
	//DVBhidetoolbar toolbarNode.style.top='0px';
	//DVBhidetoolbar toolbarNode.style.left='0px';
	
	//init org chart
	//DVB 15/04/2016 
	//Se carga y pinta el organigrama sin la animaci�n de izquierda a derecha
	//Al final de initOrg() se ejecuta as�ncronamente (500ms) el refresco del �rbol (que ya deber�a estar pintado) pero con las fotos.
	_bShowPhotoWhileLoadingOrgChart = false;

	//[perfCarga]console.time("TimeOutinitOrg"); 
	setTimeout("initOrg()", 50); //1000
	
	//init autocomplete
	//[perfCarga]console.time("TimeOutinitAutoComplete"); 
	setTimeout("init()", 70); //1200
	//init minimap
	//[perfCarga]console.time("TimeOutinitMinimap"); 
	setTimeout("initMinimap()", 90); //1500

	// Bug 0295445 Problema de refresco de las fotos
	//    Con 1800 se pierde la animaci�n de entrada del �rbol
	//setTimeout("refreshTreeInitial()", 3000);

	//comunicate that is alive each 3 minutes
	if(_propertyBag.essMode==true){
		window.setInterval("keepAlive()", 180000);
		$(document).click(function(e) { 
			// Check for left button
			if (e.button == 0) {
				_aliveSession=true;
			}
		});
	}

	// Notificamos que se ha cargado...
	// De momento s�lo el OrgDyn de Mis Empleados recoge la notificaci�n
	if(_propertyBag.essMode == true)
	{
		NotifyLoaded();
	}
	document.body.style.cursor = 'default';
	//[perfCarga]console.timeEnd("initWebPause"); 

}

// Metemos el refresco en una funci�n para facilitar la depuraci�n as�ncrona.
function refreshTreeInitial()
{
	//[perfCarga]console.timeEnd("TimoutRefreshTree");
	//[perfCarga]console.time("refreshTree");
		
	_bShowPhotoWhileLoadingOrgChart = true;
	if (positionNodes) {
		//Aprovechamos este refresh para el reposicionamiento de los nodos
		_bRepositionSnapShot = true;		
	}

	_st.refresh();

	_bRepositionSnapShot = false;

	//[perfCarga]console.timeEnd("refreshTree");
	//
	//DEBUG ESCALADO
	if (_ACTIVATE_HOT_ZONES) {
		resaltHotZones()
	}	

	_st.canvas.translate(0,0, false); //Esto borra cualquier foto fantasma!!!
	
}

function resaltHotZones() {
	$("div.box").css( "border", "1px solid red" );
	$("div.divTriangle").css( "border", "1px solid red" );
	//$("div.divTriangle").css( "opacity", "50" );
	$("div.labelId").css( "border", "1px solid blue" );
	//$("div.labelId").css( "opacity", "50" );
	$("div#toolbarNode").css( "border", "1px solid red" );
}

function deactivateHotControls(value) {
		
		//Si deshabilitamos "infovis-label" o  o todos los div.box no podemos mover nodos... por lo que no sirve para nada el escalado
		//$("div.box").css("display", (value ? 'none' : ''));
		//$("div#infovis-label").css("display", (value ? 'none' : ''));  //Si desactivamos esto, no podemos mover nodos individualmente...




		//$("div.labelId").css("display", (value ? 'none' : ''));
		//$("div.divTriangle").css("display", (value ? 'none' : ''));

		//Only toolbar node
		//$("div#toolbarNode").css("disabled", value);
		//$("div#toolbarNode").css("display", (value ? 'none' : ''));

}

//Aplica via CSS escalado y translaci? a un elemento.
function setTransform (element, scaleX, scaleY, translateX, translateY) {
    //var transfromString = ("rotate(" + elTransformArg.rot + "deg ) scale(" + elTransformArg.sca + ")");" skewX(" + elTransformArg.skx + "deg ) skewY(" + elTransformArg.sky + "deg )");
	var transfromString = "";

	if (scaleX && scaleY) {
		transfromString += "scale(" + scaleX + ", " + scaleY + ") "; 
	}

	if (translateX && translateY) {
		transfromString += "translate(" + translateX + ", " + translateY  + ") ";
	}

    // now attach that variable to each prefixed style
    element.style.webkitTransform = transfromString;
    element.style.MozTransform = transfromString;
    element.style.msTransform = transfromString;
    element.style.OTransform = transfromString;
    element.style.transform = transfromString;
}

// Restablece el escalado a la posici? inicial.
function cleanScaling() {

	if (_st.config.Navigation.zooming != false) {
		var scroll = (_countZoomScale >=0 ? -1 : 1); //Zomm ampliamos. Si -1, reducimos
	 	var val = _st.config.Navigation.zooming / 1000,
	 	ans = 1 + scroll * val; 

	 	if (_countZoomScale >= 0) {
		 	for (var i = 0; i < _countZoomScale; i++) {
		 		_st.canvas.scale(ans, ans, true);
		 	}
	 	} else {
			for (var i = _countZoomScale; i <= 0 ; i++) {
		 		_st.canvas.scale(ans, ans, true);
		 	}
	 	}

	 	_countZoomScale = 0;

	 	var divsBox = $("div.box");
		for (var i = 0; i < divsBox.length; i++) {
			setTransform(divsBox[i]);
		}
	 }
}

var _aliveSession=true;

function keepAlive(){
	if(_aliveSession==true){
		//comunicate server keep alive
		refresh_session();
	}
	//reset check onclick
	_aliveSession=false;
}


/**
 * Function to set visibility for field hidden in mode ESS/MSS
 */
function setModeESS_MSS(){
	$jit.id('fileDependencies').style.display='none';
	$jit.id('fileAssistant').style.display='none';
	$jit.id('divGroupVacancies').style.display='none';
	$jit.id('dateLabel').style.display = 'none';
}

/**
 * Function to set visibility for field hidden in mode ESS/MSS
 */
function setMode_OrgPos(){
	$jit.id('fileDependencies').style.display='none';
	$jit.id('fileAssistant').style.display='none';
	$jit.id('divGroupVacancies').style.display='none';
	$jit.id('fileGroupEmployeesByPost').style.display='none';
	$jit.id('pageHelp').title =_tooltipInformationPos;
}

/**
 * Function to change root of org chart.
 * 
 * first get partitial json of orgchart
 * 
 * @param node
 */
function changeRoot(node){
	// DESACTIVAMOS 
	_hasMoveNode = false;
	_positionNodesMovedManually = {};
	_snapShot = {};
	_unDo = [];

	var btnDeshacer = $jit.id('btnDeshacer');
	btnDeshacer.disabled = true;
	$("#btnDeshacer").addClass("disabled");
	////////////////////////////////////////////
		
	//mark to tree WU
	_lastTreeChecked=node;
	
	//search node in Json
	getPartialTree(_st.toJSON('tree'), node.id);
	

	// change root tree
	var contentWU = $jit.id('contentWU');
	var contentLi = $jit.id('li_' + _st.root);
	contentWU.removeChild(contentLi);

	var contentWU = $jit.id('contentWU');
	createTree(_jsonChangeRoot, contentWU, 5);
	

	// load json data
	_st.loadJSON(_jsonChangeRoot);

	// compute node positions and layout
	_st.compute();

	//mark in tree WU
	_lastTreeChecked=_st.graph.getNode(_st.root);

	// apply styles
	applyStyles();    

	// optional: make a translation of the tree
	//_st.geom.translate(new $jit.Complex(-400, 0), "current");

	// emulate a click on the root node.
	goToNode(node.id);
}

/**
 * FUnction to check if nodet have child WU
 * @param element
 * @returns {Boolean}
 */
function hasChildrenWUTree(element){
	
	for(var i in element.children){
		if(element.children[i].type==TYPE_WU){
			return true;
		}
	}
	return false;
}


/**
* Method that initializes and loads the organization and methods of control
*/
function initOrg() {
	//[perfCarga]console.timeEnd("TimeOutinitOrg"); 
	//[perfCarga]console.time("InitOrg"); 
	_initializing_Org = true;

	_typeZoom=TYPE_ZOOM_NORMAL;
	/////////////////////////////////////////////////////////////
	_initial_style_width = GetSizeElementXFromOrgChart();
	_initial_style_height = GetSizeElementYFromOrgChart();

	if (_initial_style_width  > 120 && _initial_style_height > 120) {
		_typeZoom=TYPE_ZOOM_NORMAL;
		/*
	}else if (_initial_style_width  > 80 && _initial_style_height > 80) {
		_typeZoom=TYPE_ZOOM_PORTRAIT;*/
	}else if (_initial_style_width  > 65 && _initial_style_height > 65) {
		_typeZoom=TYPE_ZOOM_HEAD_PHOTO;
	}else if (_initial_style_width  > 40 && _initial_style_height > 40) {
		_typeZoom=TYPE_ZOOM_PHOTO;
	}else if (_initial_style_width  < 40 && _initial_style_height < 40 ) {
		_typeZoom=TYPE_ZOOM_NOTHING;
	}
	_initialTypeZoom = _typeZoom;
	_initialListStyles = JSON.parse(JSON.stringify(listStyles));
	/////////////////////////////////////////////////////////////
	_countZoom=0;

//console.time('InitOrg');
	document.getElementById('cssNormal').href=_AbsolutePathTemplate+'css/mouse_wait.css';
	//$jit.id('buttonShowMap').style.backgroundColor= '#59bce5';


	//m4SetSizetables('static');  BUG 0282595. Esta inicializaci�n no hace nada aqu� porque infovis.clientwidth = 0 en este momento.

	// Fill the select for type style
	fillSelectStyle();

	// Fill the selection level
	InitializeSelectionLevel();

	// Fill Grouping Data
	InitializeGroupingData();

	// Fill Configuration Canvas
	_propertyBag.activated_WysIwyg_print = _propertyBag.activated_WysIwyg_print || false;
	if (_propertyBag.activated_WysIwyg_print) {
		meta4.orgdyn.lienzo.init(M4_INIT_LIENZO_FUNC);
		ShowControlsWysiwyg(true);
		InitializeCanvasConfiguration();
	} else {
		ShowControlsWysiwyg(false);
	}

	// Delete children of subordinates and insert his dependency functional as a property
	deleteDepenFunctional(json);

	//esta linea va antes de las de agrupar empleados
	controlInputPerson();
	// create the json object with employees,assistant and vacancy  grouped        
	createcontrolGroup(json);
	resetcontrolGroup();
	//create group
	createNodeGroup(json);

	//copy json original to reload orgchart
	_jsonOriginal= json;
	// Activate the controls on the web page

	// Paint checkbox associated to type style
	createCheckBoxTypeStyle();

	//activate control dep funcional
	controlshowDepenFunc();
	
	// Activate control table employee
	controlShowTable();
	showTypeStyle();    

	// Activate control change on type style
	controlChangeTypeStyle();

	// Activate control chage level to show
	controlChangeLevel();

	// Activate control for grouped employees,assistant and vacancy
	controlGroupEmployees();
	controlGroupVacancies();  
	controlAssistant();    

	// Activate control for employees,assistant and vacancy
	controlShowEmployees();
	controlShowVacancies();    

	//activate control print
	controTypePrint();
	controlPrintRealPositions();
	controlImagePreview();
	controlPaperSize();
	//activate save style
	controlSaveStyle();
	//activate control change type line
	controlChangeTypeLine();

	// write date
	DateOrg.write(_date);

	var container = $jit.id('container');
	var sizeCanvasY = container.offsetHeight;
	var left = $jit.id('left-container');
	//the size of the canvas is the result of adding the entire screen
	//minus the menu on the left
	var sizeCanvasX = container.offsetWidth - left.offsetWidth;

	// Aunque la confg. y base de datos est� preparada para definir un ancho y alto por cada tipo de estilo
	// la capa visual no lo est�.
	// De momento, asignamos el ancho y alto de uno de los tipos de estilo, pero lo hacemos dependiendo del organigrama.
	_sizeElementX = parseInt(GetSizeElementXFromOrgChart());
	_sizeElementY = parseInt(GetSizeElementYFromOrgChart()) + 0.5;

	// init Spacetree
	// Create a new ST instance
	_st = new $jit.ST(
	{
				// id of viz container element
				injectInto: 'infovis',
				// set duration for the animation
				duration: 800,
				// set animation transition type
				transition: $jit.Trans.Quart.easeInOut,
				// set distance between node and its children
				levelDistance: 50,
				constrained: false,
				levelsToShow: 1,   // Levels to show when plot a node
				subtreeOffset: 20, // distance between nodes
				orientation: "top",

				// size of canvas
				width: sizeCanvasX,
				height: sizeCanvasY,

				background: {	// Necesario para que se cree el segundo Canvas
					/*
				      CanvasStyles: {
				        strokeStyle: '#555',
				        fillStyle: "#eeedee"
				      }
				      */
				},

				// enable panning
				Navigation: {
					enable: true,					
					//panning: true,
					//type: 'Native',  
						
					panning: true, //---> Movemos todo el arbol  
						//panning :true --> para mover todo el arbol
						//panning : 'avoid nodes'  ---> parar mover solo nodos...
					zooming: false
					// zoom is controled by function increaseSize and decreaseSize
				},

				// set node and edge styles
				// set overridable=true for styling individual
				// nodes or edges
				Node: {
					overridable: true,
					height: _sizeElementY,
					width: _sizeElementX,
					type: 'm4rectangle',

					// allows to apply different styles to different nodes
					CanvasStyles: {
						fillStyle: '#ccc',
						strokeStyle: '#FF0000'
					}
				},
				
				// Properties of lines
				Edge: {
					overridable: true,
					type: 'm4line',
					color: '#FFFF00',
					lineWidth: 1
				},
				
				// events created when you click on a node
				Events: {
					enable: true,

					// Nuevo evento para sincronizara zonas calientes con el canvas
					onCanvasScale: function (x, y) {
						
						if (_st.config.Navigation.zooming != false) {					      	
							var divsBox = $("div.box");

					      	//var sectionTranslate = '';
					      	//var xTranslate =  0; //-_st.graph.Node.width / 2;
					      	//var yTranslate =  10 * y * _st.canvas.scaleOffsetY;//-_st.graph.Node.height / 2;
					      	var sTranslate = getTransformFromStyle(divsBox[0], "translate");
					      	//var sTranslate = getTransformFromStyle($("div#infovis-label")[0], "translate");

					      	var xTranslate;
					      	var yTranslate;
					      	if (sTranslate) {
					      		xTranslate = getXValue(sTranslate);
					      		yTranslate = getYValue(sTranslate);
					      		//sectionTranslate = 'translate(' + xTranslate + ', ' + yTranslate + ')';
					      	} 


					      	//var scaleTranslate = {'transform' : 'scale(' + x * _st.canvas.scaleOffsetX  + ', ' + y * _st.canvas.scaleOffsetY + ') ' +  sectionTranslate };
					      	//var transform = 'scale(' + x * _st.canvas.scaleOffsetX  + ', ' + y * _st.canvas.scaleOffsetY + ') ' +  sectionTranslate;

					      	//var scaleTranslate = {'transform' : 'scale(' + _st.canvas.scaleOffsetX  + ', ' + _st.canvas.scaleOffsetY + ') ' +  sectionTranslate };

					      	//Ejemplo de escalado y desplazado simult�neo.. hay que hacerlo en una �nica instrucci�n
					      	//$("div.box").css({transform: 'scale(0.90, 0.90) translate(-3px, 3px)'})
					      	//$("div.box").css("transform" , "scale(0.95, 0.95) translate(3px, 3px)")
					      	
					      	//$("div#infovis-canvaswidget").css(scaleTranslate);
					      	//setTransform($("div#infovis-label")[0], x * _st.canvas.scaleOffsetX,  y * _st.canvas.scaleOffsetY, xTranslate, yTranslate);
					      	
					      	for (var i = 0; i < divsBox.length; i++) {
					      		setTransform(divsBox[i], x * _st.canvas.scaleOffsetX,  y * _st.canvas.scaleOffsetY, xTranslate, yTranslate);
					      	}


					      	
					      	//$("div#infovis-label")[0].style.transform = transform;

					      	//$("div.box").css(scaleTranslate);
					      	//$("div.divTriangle").css(scaleTranslate );
					      	//$("div#toolbarNode").css(scaleTranslate );
					      	//$("div.labelId").css(scaleTranslate );  // Este no lo aplicamos porque es un inner-div y a efectos pr?ticos aplicar? la escala dos veces...
					      	//console.log(new Date().toISOString() + ' [onCanvasScale]: ' + JSON.stringify(transform) );					      	
				      	}				      	
				      	
					},

					// Nuevo evento para sincronizara zonas calientes con el canvas
					onCanvasTranslate: function (x, y) {
						return;
						if (_st.config.Navigation.zooming != false) {
					      	var divsBox = $("div.box");

					      	//var sectionScale = '';
					      	var sScale = getTransformFromStyle(divsBox[0], "scale");
					      	//var sScale = getTransformFromStyle($("div#infovis-label")[0], "scale");					      	
					      	if (sScale) {
					      		var xScale = getXValue(sScale);
					      		var yScale = getYValue(sScale);
					      		//sectionScale = 'scale(' + xScale + ', ' + yScale + ') ';
					      	} 

					      	//var scaleTranslate = {'transform' : '' + sectionScale +  'translate(' + x + 'px, ' + y +'px)'};
					      	//var transform = sectionScale + 'translate(' + x + 'px, ' + y +'px)';
					      	
					      	//Ejemplo de escalado y desplazado simult�neo.. hay que hacerlo en una �nica instrucci�n
					      	//$("div.box").css({transform: 'scale(0.90, 0.90) translate(-3px, 3px)'})
					      	//$("div.box").css("transform" , "scale(0.95, 0.95) translate(3px, 3px)")
					      	//$("div#infovis-canvaswidget").css(scaleTranslate);
							//$("div#infovis-label")[0].style.transform = transform;
							//setTransform($("div#infovis-label")[0], xScale,  yScale, (-1 * x) + 'px', (-1 * y) + 'px');
							
					      	for (var i = 0; i < divsBox.length; i++) {
					      		setTransform(divsBox[i], xScale, yScale, (1 * x) + 'px', (y / _st.canvas.scaleOffsetY ) + 'px');
					      	}

					      	//$("div.box").css(scaleTranslate);
					      	//$("div.divTriangle").css(scaleTranslate );
					      	//$("div#toolbarNode").css(scaleTranslate );
					      	//$("div.labelId").css(scaleTranslate ); // Este no lo aplicamos porque es un inner-div y a efectos pr?ticos aplicar? el translate dos veces...					      	

					      	//console.log(new Date().toISOString() + ' [onCanvasTranslate]: ' + JSON.stringify(transform));						
						}
						
					},

					// event for the mouse wheel
					onMouseWheel: function (delta, e) {
						
						if (_st.config.Navigation.zooming != false) {	
							//if (delta < 0) {
							//	_countZoomScale = _countZoomScale - 1;
							//} else {
							//	_countZoomScale = _countZoomScale  + 1;
							//}
							_countZoomScale = _countZoomScale  + delta;

							//console.log(new Date().toISOString() +"[onMoseWheel-scaling] : " + _countZoomScale);
							return;
						}

						// Nuestro zoom especial
						document.getElementById('cssNormal').href=_AbsolutePathTemplate+'css/mouse_wait.css';
						hideContextMenu();
						_nodeSearch=null;

						//set count
						if (delta < 0) {
							_countZoom=_countZoom-0.2;
						} else {
							_countZoom=_countZoom+0.2;
						}	

						if(_positionMouse.posX==false){
							_positionMouse.posX=e.clientX-left.offsetWidth -(_st.canvas.opt.width/2);
							_positionMouse.posY=e.clientY-44-(_st.canvas.opt.height/2);
							_positionMouse.target = e.target || e.srcElement;      
						}

						clearTimeout($.data(this, 'timer'));
						$.data(this, 'timer', setTimeout(function() {
							var posLabelX=0;
							var posLabelY=0;

							//localize node closet cursor
							var nodeLocalize=	getClosetCursor(_positionMouse.posX,_positionMouse.posY);
							if(nodeLocalize!=false){
								var labelLocalize = _st.labels.getLabel(nodeLocalize.id);
								 	//temporizador
								  	if (_countZoom < 0) {
										if(nodeLocalize!=false){
											posLabelX= parseInt(labelLocalize.style.left, 10);
											posLabelY= parseInt(labelLocalize.style.top, 10);
										}
										
										decreaseSize(_countZoom); 
										if(nodeLocalize!=false){
											//calculate new position after move
											var newPosLabelX= parseInt(labelLocalize.style.left, 10);
											var newPosLabelY=  parseInt(labelLocalize.style.top, 10);
											
											//desplazamiento para que el label siga situado en la misma posicion
											//de la pantalla
											var despX=newPosLabelX-posLabelX;
											var despY=newPosLabelY-posLabelY;
											_st.canvas.translate(-despX,-despY, false);
										}
										
										resetLimitRectangle();
										paintRectangleZoom();
									} else {
										// increase size of orgChart
										if(nodeLocalize!=false){
											posLabelX= parseInt(labelLocalize.style.left, 10);
											posLabelY= parseInt(labelLocalize.style.top, 10);
										}
										
										increaseSize(_countZoom);
										if(nodeLocalize!=false){
											//calculate new position after move
											var newPosLabelX= parseInt(labelLocalize.style.left, 10);
											var newPosLabelY=  parseInt(labelLocalize.style.top, 10);
											
											//desplazamiento para que el label siga situado en la misma posicion
											//de la pantalla
											var despX=newPosLabelX-posLabelX;
											var despY=newPosLabelY-posLabelY;
											_st.canvas.translate(-despX,-despY, false);
										}
										
										resetLimitRectangle();
										paintRectangleZoom();
									}
									_countZoom=0;
									_positionMouse.posX=false;
									_positionMouse.posY=false;
								 //do something
							}
							
						}, 250));
						document.getElementById('cssNormal').href=_AbsolutePathTemplate+'css/mouse.css';
					},
					
					//DVB Nuevos eventos 10/02/2017
					onDragStart: function(node, eventInfo, e) {  
						//console.log(new Date().toISOString() + " [m4org] onDragStart");
				        if (_canMoveNodes) {
				        	//Capturamos la posici�n de los nodos
				        	pushSnapShotMoveNode();
				        }
				    },  
				    
					 //Update node positions when dragged  
				    onDragMove: function(node, eventInfo, e) {  
				    	//Truco para poder mover nodos y tener activos la toolbar de despliegue.
				    	//Con esto cuando activamos el movimiento de los nodos,  podemos tambi�n hacer despliegue/repliegue de nodos				    	
				    	if (e.target) {
				    		if (e.target.id === 'DemandWU' || e.target.id === 'DemandEmp' || e.target.id === 'DemandAll') {
				    	   		return;	
				    		}	
				    	}
				    	///////////////////////////////////////////////////////

						if (_canMoveNodes) {
				        	var pos = eventInfo.getPos();  

				        	// // [02/03/2018] Si está desplegado el minimapa tenemos que ajustar. Si no tenemos un efecto tal que el movimiento del nodo tiene un desplazamiento igual al offsetWidht del 'left-container' respecto a donde
				        	// está la posición del cursor.
				        	if ($jit.id('left-container').offsetWidth > 0) {
				        		pos.x = pos.x - $jit.id('left-container').offsetWidth;
				        	}

				        	node.pos.setc(pos.x, pos.y);  

				        	// Nos guardamos el nodo movido
				        	addPositionNodeMoveManually(node);
				        	//console.log('[org]onDragMove: StartPos: ' + node.startPos.x + ' ; ' + node.startPos.y + " Current pox: " + pos.x + ' ; ' + pos.y + " EndPos: " + + node.endPos.x + ' ; ' + node.endPos.y) ;

				        	//Si arrastramos hijos, entonces controlamos...
							var arrastrarNodosHijos = $jit.id('arrastrarNodosHijos');
				        	if (arrastrarNodosHijos.checked === true || e.shiftKey === true) {
					        	var	deltaX = pos.x - node.startPos.x;
					        	var	deltaY = pos.y - node.startPos.y;					        	

					        	//Recorrido de subarbol a partir del nodo 'node'
	         					(function subn(n) {
						          n.eachSubnode(function(ch) {
						            //ch.setPos(node.getPos('end'), 'end');
						            if (ch.drawn) {
						            	//console.log("Nodo hijos de :" + node.id + " -> "+  ch.id + " - X: " + ch.startPos.x +  "+(" + deltaX + ")" + " Y: " + ch.startPos.y +  "+(" + deltaY + ")");
	          							ch.pos.setc(ch.startPos.x + deltaX, ch.startPos.y + deltaY);		

	          							// Nos guardamos el nodo movido
				        				addPositionNodeMoveManually(ch);
						            	subn(ch);
						        	}
						          });
						        })(node);
				        	}
				        	_st.plot();  
				    	}
				    },  

				    onDragEnd: function(node, eventInfo, e) {
				    	if (_canMoveNodes) {
				    		// Solo gestionamos el nodo que ha sido movido en onDragMove
				    		if (!nodeMovedManually(node)) {
				    			return;
				    		}

							var pos = eventInfo.getPos();

							// [02/03/2018] Si está desplegado el minimapa tenemos que ajustar. Si no tenemos un efecto tal que el movimiento del nodo tiene un desplazamiento igual al offsetWidht del 'left-container' respecto a donde
				        	// está la posición del cursor.				        	
				        	if ($jit.id('left-container').offsetWidth > 0) {
				        		pos.x = pos.x - $jit.id('left-container').offsetWidth;
				        	}
				        
				        	//var pos = node.pos.getc(true);
                        	node.startPos.setc(pos.x, pos.y);
                        	node.endPos.setc(pos.x, pos.y);		

				        	// Nos guardamos el nodo movido
				        	addPositionNodeMoveManually(node);
							//////////////////////////////////////							

							var arrastrarNodosHijos = $jit.id('arrastrarNodosHijos');
				        	
					        //console.log('[End][org]onDragMove: StartPos: ' + node.startPos.x + ' ; ' + node.startPos.y + " Current pox: " + pos.x + ' ; ' + pos.y + " EndPos: " + + node.endPos.x + ' ; ' + node.endPos.y) ;
					        					        					        	
         					(function subn(n) {
					          n.eachSubnode(function(ch) {
					            //ch.setPos(node.getPos('end'), 'end');
					            if (ch.drawn) {
					            	
					            	if (arrastrarNodosHijos.checked === true || e.shiftKey === true) {
          								ch.startPos.setc(ch.pos.x , ch.pos.y );
          								ch.endPos.setc(ch.pos.x , ch.pos.y );
          							}
          							
          							//console.log("[End] Nodo hijos de :" + node.id + " ->  StartPos: " +  ch.startPos.x + ' ; ' + ch.startPos.y + " Current pox: " + ch.pos.x + ' ; ' + ch.pos.y + " EndPos: " + ch.endPos.x + ' ; ' + ch.endPos.y) ;

          							// Nos guardamos el nodo movido
			        				addPositionNodeMoveManually(ch);
			        				////////////////////////////////////

					            	subn(ch);
					        	}
					          });
					        })(node);
				        	
                        	// Marcamos que hemos movido nodos
                        	_hasMoveNode = true;              	                 
                        	//        
                        	
                        	if (_propertyBag.activated_WysIwyg_print) {
                        		meta4.orgdyn.lienzo.paintLienzo(_st);
                        	}
                    	}
				    },

				    //Implement the same handler for touchscreens  
				    onTouchMove: function(node, eventInfo, e) {  
				      $jit.util.event.stop(e); //stop default touchmove event  
				      this.onDragMove(node, eventInfo, e);  
				    }			    
			    	//DVB End nuevos eventos 10/02/2017
			    	
				},
				
				onBeforeCompute: function(){
					document.getElementById('cssNormal').href=_AbsolutePathTemplate+'css/mouse_wait.css';	
				},

				onAfterCompute: function(node){
					//console.time("onAfterCompute"); 

					document.getElementById('cssNormal').href=_AbsolutePathTemplate+'css/mouse_wait.css';	

					//Evitamos reentradas cuando desde un UnDo estamos Expandiendo/Contrayendo nodos
					if (_bExpandingContractingNodes) {
						return;
					}

					// Estamos reposicionando nodos de un snapshot
					if (_bRepositionSnapShot) {
						
						// Si tenemos un snapShot definido
						if (_snapShot['type']) {
							bToDraw = false;
							
							// Estamos posicionando nodos en la carga inicial
							if (_snapShot['type'] === M4SNAPSHOT_INITIAL_POSITION_NODE) {
								var repositionAgain = false;
								_st.graph.Node.width = _snapShot['width'];
								_st.graph.Node.height = _snapShot['height'];								
								_typeZoom = _snapShot['typeZoom'];								

								_st.graph.eachNode(function(n) {   					    			
			                        var node = _snapShot.posNodes[n.id];
			                        if (node) {
			                        	var posX = _snapShot.posNodes[n.id].x
			                        	var posY = _snapShot.posNodes[n.id].y;
			                        	var movedManually = _snapShot.posNodes[n.id].movedManually;

			                        	if (n.drawn) {
			                        		n.pos.setc(posX, posY);
			                        		n.startPos.setc(posX, posY);
			                        		n.endPos.setc(posX, posY);
			                        		bToDraw = true;
		                        		} else {
		                        			// Hay que expandir al padre
		                        			var parents = n.getParents();
											var hasParents = (parents != null && parents.length > 0);	
	                        				if (hasParents) {

	                        					//La expansi�n de los nodos har� que toda la recolocaci�n quede invalidada tras el demandWu_onClick() y habr� que volver a recolocar.
	                        					repositionAgain = true;
	                        					///////////////////////////////////////////////////////////////////////////////////////////////

	                        					_bExpandingContractingNodes = true;
		                        				demandWU_onclick(parents[0]);
		                        				_bExpandingContractingNodes = false;

		                        				n.pos.setc(posX, posY);
			                        			n.startPos.setc(posX, posY);
			                        			n.endPos.setc(posX, posY);
			                        			bToDraw = true;
		                        			}
		                        		}

		                        		// Actualizaci�n para la gesti�n de nodos movidos manualmente
		                        		if (movedManually) {
				        					addPositionNodeMoveManually(n);
				        				}
										//////////////////////////////////////							
			                    	} 
			                    });

								if (repositionAgain) {									
									bToDraw = false;
									setTimeout("refreshTreeInitial()", 100);	
									
									//_st.onClick(_st.root);	//Dado que es carga inicial, hay que reposicionarse en el nodo raiz, sino el arbol quedar�a en la zona de los �ltimos nodos dibujados									
									// Simulacion del _st.onClick() que no causa un reCompute()
									setTimeout(function () {
										_st.onClick(_st.root);
/*
										var rootNode = _st.graph.getNode(_st.root);
										if(rootNode != null) {
											_st.selectPath(rootNode, _st.clickedNode);
											_st.clickedNode = rootNode;

											//_st.canvas.translate(-_st.canvas.translateOffsetX, -_st.canvas.translateOffsetY - _deltaCanvasY, true);
											//var despX = _st.canvas.translateOffsetX;
											//var despY = _st.canvas.translateOffsetY;

											//_st.canvas.translate(-rootNode.pos.x,-rootNode.pos.y, false);

											//_st.canvas.canvases[0].translateOffsetX = despX;
											//_st.canvas.canvases[0].translateOffsetY = despY;
											//_st.canvas.translateOffsetX = despX;
											//_st.canvas.translateOffsetY = despY;

											//paint mini map
											//paintMiniMap();
										}	
										*/
									}, 200);	
									
								}									

							} else {
								//console.time("onAfterComputeRepositioning1"); 
								var despWU_X = 0;
								var despWU_Y = 0;

								if (_snapShot['type'] != M4SNAPSHOT_MOVE_NODE) { //&& _hasMoveNode) {
									var nodeId = _snapShot['id'];

									_bExpandingContractingNodes = true;
									//despWU_X = _snapShot.posNodes[nodeId].x;
									//despWU_Y = _snapShot.posNodes[nodeId].y;

									
									var currentNode = _st.graph.getNode(nodeId);
									if (_snapShot['type'] === M4SNAPSHOT_EXPAND_WU || _snapShot['type'] === M4SNAPSHOT_CONTRACT_WU ) {
										demandWU_onclick(currentNode);

									} else if (_snapShot['type'] === M4SNAPSHOT_EXPAND_EMPWU) {
										// Si se puls?expandir EMP y se expandi?WU + EMP, al deshacer hay que ocultar EMP y WU 
										demandWU_onclick(currentNode);

									} else if (_snapShot['type'] === M4SNAPSHOT_CONTRACT_EMPWU) {
										// Si se puls? replegar EMP y hab? desplegados EMP y WU, hay que volver a desplegarlas
										demandEmp_onclick(currentNode);

									} else if (_snapShot['type'] === M4SNAPSHOT_EXPAND_ONLY_EMP) {
										// Se puls?expandir EMP cuando se visualizaba solo WU, hay que volver a replegar los EMP
										demandEmp_onclick(currentNode);									

									} else if (_snapShot['type'] === M4SNAPSHOT_CONTRACT_ONLY_EMP) {
										// Se puls?replegar EMP cuando se visualizaba WU + EMP. Hay que expandir las EMP
										demandEmp_onclick(currentNode);
										
									} else if (_snapShot['type'] === M4SNAPSHOT_EXPAND_CONTRACT_ALL) {
										demandAll_onclick(currentNode);
									}

									_bExpandingContractingNodes = false;								
								}								

								_st.graph.Node.width = _snapShot['width'];
								_st.graph.Node.height = _snapShot['height'];
								//_sliderX.slider("option", "value", _st.graph.Node.width); 
								//_sliderY.slider("option", "value", _st.graph.Node.height);
								_typeZoom = _snapShot['typeZoom'];								

					    		_st.graph.eachNode(function(n) {   
					    			//console.log("Node " + n.id);
			                        var node = _snapShot.posNodes[n.id];
			                        if (node) {
			                        	posX = _snapShot.posNodes[n.id].x + despWU_X;
			                        	posY = _snapShot.posNodes[n.id].y + despWU_Y;
		                        		n.pos.setc(posX, posY);
		                        		n.startPos.setc(posX, posY);
		                        		n.endPos.setc(posX, posY);
		                        		bToDraw = true;
			                    	} 			                    	
			                    });
			                    //console.timeEnd("onAfterComputeRepositioning1"); 
					    	}
					    	
					    	
							if (bToDraw) {
								_bShowPhotoForAfterComputingEfect = true;
								_st.plot();

								// Esto elimina las fotos fantasmas!!!
								setTimeout("_st.canvas.translate(0,0, false);", 100);								
							}						
						}	
					//--------------------------------------------------------------------------------------------
					//
					// Gesti�n de movimiento de nodos despu�s del Compute
					} else if (_hasMoveNode) {
														
						bToDraw = false;					
						_bShowPhotoForAfterComputingEfect = true; //Ahora s� podemos pintar las fotos
						//console.log(new Date().toISOString() + " zoomingX: " + _zoomingX + " - zoomingY:" + _zoomingY);						

			    		_st.graph.eachNode(function(n) { 
	                                             
	                        var position = _positionNodesMovedManually[n.id];
	                        if (position && !_positionNodesMovedManually[n.id].moved) {	                        	

		                        var deltaParentOriginal = _positionNodesMovedManually[n.id].deltaParent;
		                        var dimOriginal = _positionNodesMovedManually[n.id].dim;		                        					        
						        var deltaHeightY = _st.graph.Node.height - dimOriginal.H;
						        var deltaWidthX = 0; 
								
	                        	// C�lculo de la nueva posici�n del padre, teniendo en cuenta el delta al padre original y desplazamiento por cambios en la dimensi�n (zoom)
	                        	/////////////////////////////////////
	                        	
	                        	var endY = deltaParentOriginal.Y + deltaHeightY;
								var endX = deltaParentOriginal.X + deltaWidthX;

								var parents = n.getParents();
								var hasParents = (parents != null && parents.length > 0);	
	                        	if (hasParents) {
	                        		endY += parents[0].pos.y;
	                        		endX += parents[0].pos.x;
	                        	}		                        	

								// Calculo del delta para los hijos, teniendo en cuenta la nueva posici�n reci�n calculada
	                        	var deltaChildInitialX = endX - n.startPos.x; 
					        	var deltaChildInitialY = endY - n.startPos.y;

	                        	// Reposici�n del padre teniendo en cuenta el delta del padre
	                        	n.pos.setc(      endX, endY);
	                        	n.startPos.setc( endX, endY);
	                        	n.endPos.setc(   endX, endY);
	                        	/////////////////////////////////////

	                        	//Actualizamos la posici�n
	                        	addPositionNodeMoveManually(n, true);	                        	
	                        	/////////////////////////////////////
	                        	
	                        	bToDraw = true;

	                        	var numSubnodes = numChildNodes(n);
	                        	if (numSubnodes > 0) {
	                        		//////////////////////////////
	                        		//Si estamos haciendo zoom
	                        		//////////////////////////////
		                        	if (_countZoom !== 0 || _bControlSizeX || _bControlSizeY) {
								        
		                        		var halfWidth = _st.graph.Node.width / 2;
		                        		var halfHeight = _st.graph.Node.height / 2;
		                        		//var deltaHeightY = _st.graph.Node.height - dimOriginal.H;
		                        		
		                        		var i = 0;
		                        		(function subn(n) {
			                        		n.eachSubnode(function(ch) {
			                        			if (ch.drawn) {

			                        				// Posicionamos en el eje X seg�n el Factor fcXtoMiddleParentX
			                        				// (el cambio es diferente seg�n est� el nodo posicionado a la izquierda o derecha del padre
			                        				
			                        				//C�lculo pos X
			                        				var iniPosX = 0;
			                        				var chF = _positionNodesMovedManually[ch.id].fcToMiddleParent;
			                        				var deltaParentChild = _positionNodesMovedManually[ch.id].deltaParent;

			                        				if ((n.pos.x + deltaParentChild.X) > n.pos.x) {
														iniPosX = Math.abs(halfWidth / chF.X);

													} else {
														iniPosX = Math.abs(halfWidth / chF.X) - halfWidth;
														iniPosX = (chF.X < 0 ? -1 * iniPosX : iniPosX);		                        					
													}
			                        						                        				
									            	var endChX = iniPosX + n.pos.x;
									            	////////////////////////////
									            	

									            	// C�lculo pos Y								            	
									            	//var endChY = endY + deltaParentChild.Y + deltaHeightY;
									            	var iniPosY = 0;
									            	if ((n.pos.y + deltaParentChild.Y) > n.pos.y) {
														iniPosY = Math.abs(halfHeight / chF.Y);

													} else {
														iniPosY = Math.abs(halfHeight / chF.Y) - halfHeight;
														iniPosY = (chF.Y < 0 ? -1 * iniPosY : iniPosY);		                        					
													}

									            	///////var iniPosY = Math.abs(halfHeight / chF.Y);
									            	var endChY = iniPosY + n.pos.y;
									            	////////////////////////////
													
			                        				ch.pos.setc(      endChX, endChY);
			                        				ch.startPos.setc( endChX, endChY);
			                        				ch.endPos.setc(   endChX, endChY);

			                        				i += 1;

			                        				//Actualizamos la posici�n
				          							addPositionNodeMoveManually(ch, true); 			          							
				          							/////////////////////////////////////
				          							
				          							subn(ch); // Recursividad
			                        			}	                        			
			                        		});
		                        		})(n);
		                        		
		                        	} else {	                        	
		                        		//////////////////////////////
		                        		// No estamos haciendo zoom
		                        		//////////////////////////////
			                        	(function subn(n) {

									        n.eachSubnode(function(ch) {									            
									            // Recolocamos hijos si no tenemos informaci�n de ellos
									            if (ch.drawn) { //} && _positionNodesMovedManually[ch.id] === undefined) {
									            	//console.log("Nodo hijos de :" + node.id + " -> "+  ch.id + " - X: " + ch.startPos.x +  "+(" + deltaX + ")" + " Y: " + ch.startPos.y +  "+(" + deltaY + ")");
									            	
									            	var endChX = 0;
									            	var endChY = 0;
									            	var position = _positionNodesMovedManually[ch.id];
				                        			if (position) {	   
				                        				//No hay zoom, y los nodos ya fueron desplegados...por ejemplo cuando se despliegan nodos de un nodo que no ha sido movido (y por supuesto se computeriza)
				                        				//Se dejan los nodos donde estaban...
				                        				
				                        				var deltaParentOriginal = _positionNodesMovedManually[ch.id].deltaParent;
									            		endChX = deltaParentOriginal.X + n.pos.x;
								        				endChY = deltaParentOriginal.Y + n.pos.y;

								        			} else {
								        				// Despligue de los nodos inicial (porque se acaban de desplegar)						                        		
								        				//endChX = ch.startPos.x + deltaChildInitialX + n.pos.x;
									            		//endChY = ch.startPos.y + deltaChildInitialY + n.pos.y;
									            		endChX = ch.startPos.x + n.pos.x;
									            		endChY = ch.startPos.y + n.pos.y;
								        			}

													ch.pos.setc(      endChX, endChY);
				          							ch.startPos.setc( endChX, endChY);
				          							ch.endPos.setc(   endChX, endChY);

				          							//Actualizamos la posici�n
				          							addPositionNodeMoveManually(ch, true);			          							
				          							/////////////////////////////////////
				          											        			
									            	subn(ch); // Recursividad
									        	}
										    });
								        })(n);
								 	}       
								}
	                    	//} else {
	                    	//	if (n.drawn) {
	                    	//		console.log("que hacemos con: " + n.id);
	                    	//	}
	                    	}
	                    });

						if (bToDraw) {
							_st.plot();
						}	

						//Desactivamos el flag de todos los nodos movidos 
						setTreeMoveManually (_st.graph.getNode(_st.root), false);						
					}			

					document.getElementById('cssNormal').href=_AbsolutePathTemplate+'css/mouse.css';
					//console.timeEnd("onAfterCompute"); 
				},
				
				onComplete:function(){
					if(_nodeSearch!=null){
						var ctx=_st.canvas.getCtx();
						ctx.lineWidth=3;
						ctx.strokeStyle='#FFFF00';

						// Set canvas at center screen
						_st.canvas.translate(-_st.canvas.translateOffsetX, -_st.canvas.translateOffsetY - _deltaCanvasY, true);
						_st.canvas.translate(-_nodeSearch.pos.x,-_nodeSearch.pos.y, false);
						ctx.strokeRect(_nodeSearch.pos.x-_nodeSearch.getData('width')/2-5, _nodeSearch.pos.y-5,_nodeSearch.getData('width')+10,_nodeSearch.getData('height')+10);
						_nodeSearch=null;
					};
					
					//paint mini map
					paintMiniMap();
					
					//reset property node miniMap
					_st.graph.eachNode(function (node) {
						node.drawnMiniMap=false;
					});
				},
				
				onPlaceLabel: function (label, node) {
					//var escalado = $jit.id('escalado');
					//if (escalado.checked) {
					//	return true;
					//}

					var labelStyle = label.style;
					label.className = 'box';
					labelStyle.width = node.Config.width + 'px';
					labelStyle.height = node.Config.height + 'px';
					label.onclick=function(){
						markTreeWU(node);
					}
					
					//dependencias funcionales
					if (typeof node.dependenciFuncional == 'object' && _showDependencies) {
						
						var posLabelOld= parseInt(label.style.left, 10);
						//desplazamos el label
						var left= parseInt(label.style.left, 10);
						labelStyle.left = left+node.getData('width')*0.38+ 'px';
						
						if(!node.labelDependency){
							var labelDep = document.createElement('div');
							labelDep.m4Dependency=true;
							labelDep.className = 'box'; 
							labelDep.style.width =  node.Config.width  + 'px';
							labelDep.style.height = node.Config.height   + 'px';
							var container = _st.labels.labelContainer;
							labelDep.style.position='absolute';
							labelDep.style.left=posLabelOld+'px';
							var top= parseInt(label.style.top, 10);
							labelDep.style.top=top+_st.graph.Node.height * 1.2;
							labelDep.style.display='';
							labelDep.m4node=node.dependenciFuncional;
							node.labelDependency=labelDep;
							container.appendChild(labelDep);
						}else{
							//set size and position
							node.labelDependency.style.display='';	
							var top= parseInt(label.style.top, 10);
							node.labelDependency.style.top=top+_st.graph.Node.height * 1.2;
							node.labelDependency.style.left=posLabelOld+'px';
							node.labelDependency.style.width =  node.Config.width  + 'px';
							node.labelDependency.style.height = node.Config.height   + 'px';
						}

						if(!node.linkDF){
							var linkDF = document.createElement("div");
							node.linkDF=linkDF;
						}
 
						// get Id typeStyle of node
						var idType = findIdType(node.dependenciFuncional);
						// get typeStyle of node
						var typeStyle = getTypeStyle(idType);

						var linkDF= node.linkDF;
						linkDF.style.width= _st.graph.Node.width + 'px';

						var curHeight;

						if(getItem('ID',typeStyle._listItem)._check==true && _typeZoom==TYPE_ZOOM_NORMAL){
							curHeight=45;
						}else{
							curHeightt=25;
						}

						linkDF.style.height= curHeight+'px';

						linkDF.style.opacity = (_ACTIVATE_HOT_ZONES ? 50 : 0) ;  // IE9
						//linkDF.style.color = "yellow";
						linkDF.textContent = getDummyText(_st.graph.Node.width, curHeight); //IE9 

						node.linkDF.style.display='';

						if(_propertyBag.essMode == false || (_propertyBag.essMode == true && _propertyBag.disable_ESS_EmpLinks == false)){
	 						 linkDF.className='labelId';
							 linkDF.onclick=function(){sendQViewEmployee(node.dependenciFuncional);};
						}
						node.labelDependency.appendChild(linkDF);
 
						if(!_activateTooltip ){
							if(node.linkDF){
								node.linkDF.style.display='';
							}
						}else{
							if(node.linkDF){
								node.linkDF.style.display='none';
							}
						}
						
					}else{
						//ocultamos la etiqueta de dependencia por si tuviese..
						if(node.labelDependency){
							node.labelDependency.style.display='none';
							node.linkDF.style.display='none';
						}
					}

					//link to head node
					if(!_activateTooltip && (node.type==TYPE_WU && _propertyBag.essMode==false) ||(node.type ==TYPE_SUBORDINATE && !isGroup(node))
							||(node.type ==TYPE_VACANCY && !isGroup(node))){
						if(!node.link){
							var link = document.createElement("div");
							 node.link=link;
						}

						// get Id typeStyle of node
						var idType = findIdType(node);
						// get typeStyle of node
						var typeStyle = getTypeStyle(idType);
						
						var link= node.link;
						link.style.width= _st.graph.Node.width + 'px';

						var curHeight;
						if(getItem('ID',typeStyle._listItem)._check==true && _typeZoom==TYPE_ZOOM_NORMAL){
							curHeight = 45;
						}else{
							curHeight = 25;
						}

						link.style.height=curHeight+'px';
						link.style.opacity = (_ACTIVATE_HOT_ZONES ? 50 : 0) ;  // IE9
						link.textContent = getDummyText(_st.graph.Node.width, curHeight); //IE9 

						node.link.style.display='';

						if(node.type==TYPE_WU){
							if(_configStyle[3]!="3"){
								if (_propertyBag.essMode == true || (_propertyBag.essMode == false && _propertyBag.disable_RW_WULinks == false)){
									link.className='labelId';
								}
							}else{
								link.className='labelId';
							}
						 }else if(node.type==TYPE_VACANCY){
							link.className='labelId';
						 }else{
							if(_propertyBag.essMode == false || (_propertyBag.essMode == true && _propertyBag.disable_ESS_EmpLinks == false)){
								link.className='labelId';
							}
						}

						link.onclick=function(){
							if(node.type==TYPE_WU){
								if(_configStyle[3]!="3"){
									if (_propertyBag.essMode == true || (_propertyBag.essMode == false && _propertyBag.disable_RW_WULinks == false)){
										link.className='labelId';
										sendQViewWU(node.data['WUID']);
									}
								}else{
									link.className='labelId';
									sendQViewVacancy(node.data['VacancyID']);//orgchart position
								}
							}else if(node.type==TYPE_VACANCY){
									link.className='labelId';
									sendQViewVacancy(node.data['VacancyID']);
							}else{
								if(_propertyBag.essMode == false || (_propertyBag.essMode == true && _propertyBag.disable_ESS_EmpLinks == false)){
									link.className='labelId';
									sendQViewEmployee(node);
								}
							}
						};

						 label.appendChild(link);
					}else{
						if(node.link){
							node.link.style.display='none';
						}
					}
					
					//link  for triangle
					if(!node.divTriangle){
						var divTriangle = document.createElement("div");
						 node.divTriangle=divTriangle;
					}

					var cMarginY = 13;
					var heightHeader = getHeighHead(node);
					var divTriangle= node.divTriangle;
					divTriangle.className= 'divTriangle';
					divTriangle.style.position='absolute';
					divTriangle.style.zIndex = "1000";
					divTriangle.style.opacity = (_ACTIVATE_HOT_ZONES ? 50 : 0) ;  // IE9
					//divTriangle.style.color= "yellow";  // IE9

					if (canDrawActions(node))
					{
						var posAction = {
							posXImg : 0,
							posYImg : 0,
							posXLit : 0,
							posYLit : 0,
							bShowImg : true,
							bShowLit: true
						}
						getPosActions(0, 0, _st.graph.Node.width, heightHeader, node, posAction );

						if (!posAction.bShowImg)
						{
							divTriangle.style.height = heightHeader + 'px';
							divTriangle.style.width= _st.graph.Node.width + 'px';
							divTriangle.textContent = getDummyText(_st.graph.Node.width,heightHeader); //IE9 
						} else {
							divTriangle.style.height = M4_SIZE_IMAGEACTION + 'px';
							divTriangle.style.width= divTriangle.style.height;

							divTriangle.textContent = getDummyText(M4_SIZE_IMAGEACTION,M4_SIZE_IMAGEACTION); //IE9 

							if (posAction.bShowLit)
							{
								divTriangle.style.width= M4_SIZE_IMAGEACTION + getSizetext(_actions) + M4_MARGIN_X + 'px';
								divTriangle.textContent = getDummyText(M4_SIZE_IMAGEACTION + getSizetext(_actions) + M4_MARGIN_X, M4_SIZE_IMAGEACTION); //IE9 
							}
						}

						divTriangle.style.top = posAction.posYImg + 'px'; 
						if (_isRtlLanguaje)
						{
							if (posAction.bShowLit)
							{
								divTriangle.style.left = posAction.posXImg - getSizetext(_actions) - M4_MARGIN_X + 'px';
							} else {
								divTriangle.style.left = posAction.posXImg + 'px';
							}
						} else {
							divTriangle.style.left = posAction.posXImg + 'px';
						}

						node.divTriangle.style.display='';
					} else {
						node.divTriangle.style.display='none';
					}


					//console.log("divTriangle.click: ");
					divTriangle.onclick=function(e){
						var escalado = $jit.id('escalado');
						if (!escalado.checked) {
							showContextMenu(label.offsetLeft + $(label).width() + $jit.id('left-container').offsetWidth, label.offsetTop + jQuery('#header').height(), node);
							//STOP EVENTE
							if (!e) var e = e || window.event;
							e.cancelBubble = true;		
						}						 
					};
					
					divTriangle.onmouseover=function(){						
						_overContextMenu=true;
					};
					
					divTriangle.onmouseout=function(){
						_overContextMenu=false;
					};
					
					label.appendChild(divTriangle);

					//IMG LOCK

					 //candado
					if(node.type== TYPE_WU){
						var imgLock; 
						if(!node.imgLock){
							imgLock = document.createElement('img');
							imgLock.src = _AbsolutePathTemplate+'images/lock5.svg';
							imgLock.style.position ='absolute';
							imgLock.title= _msgBlock;
							imgLock.className='lockHover';
							label.appendChild(imgLock);

							//Fade the node and its connections when
							//clicking the close button
							imgLock.onclick = function () {
								imgLock.style.display='none';
								node.m4lockedNode = false;
								node.m4ImgLocked = false;
								
								//show tree Wu
								var ul=$jit.id('ul_'+node.id);
								if(ul!=null){
									ul.nodeBlock=true;
								}
								$('#ul_'+node.id).show("slow");
								
								// change properties node
								setm4ignore(false, node);
								_st.op.expand(node, {
									type: 'animate',
									duration: 600,
									hideLabels: true,
									transition: $jit.Trans.Quart.easeOut
								});
								nodeExpande(_st, node);
							};
							
						}else{
							imgLock = node.imgLock;
						}
						imgLock.style.top =_st.graph.Node.height-22  + 'px';
						if(node.m4lockedNode){
							imgLock.style.display='';
						}else{
							imgLock.style.display='none';
						}
						
						node.imgLock= imgLock;
		
						//A�adimos TOOLBAR
						if(!node.divToolBar){
							var divToolBar = document.createElement("div");
							 node.divToolBar=divToolBar;
							
							divToolBar.id = 'toolbarNode';
							label.appendChild(divToolBar);

							imgDemandAll = document.createElement('img');
							imgDemandAll.id = "DemandAll";
							imgDemandAll.src = _AbsolutePathTemplate+'images/plus-thin-mono-white-box.svg'; 
							//imgDemandAll.style.position ='absolute';
							imgDemandAll.title= _msgShowHideEployee;
							imgDemandAll.className='buttonToolbarNode';
							divToolBar.appendChild(imgDemandAll);

							imgDemandWU = document.createElement('img');
							imgDemandWU.id = "DemandWU";
							imgDemandWU.src = _AbsolutePathTemplate+'images/plus-wu-mono-white-box.svg';  
							imgDemandWU.title= _msgShowHideWU;
							imgDemandWU.className='buttonToolbarNode';
							divToolBar.appendChild(imgDemandWU);

							/*imgSep = document.createElement('img');
							imgSep.id = "separatorVert";
							imgSep.src = _AbsolutePathTemplate+'images/separador_vertical.png';  
							divToolBar.appendChild(imgSep);*/

							imgDemandEmp = document.createElement('img');
							imgDemandEmp.id = "DemandEmp";
							imgDemandEmp.src = _AbsolutePathTemplate+'images/plus-employee-mono-white-box.svg';
							imgDemandEmp.title= _msgShowHideEployee;
							imgDemandEmp.className='buttonToolbarNode';
							divToolBar.appendChild(imgDemandEmp);

							if (_ESS_New_Organigram)
							{
								imgDemandAll.style.display = '';
								imgDemandWU.style.display = 'none';
								//imgSep.style.display = 'none';
								imgDemandEmp.style.display = 'none';
								divToolBar.style.width = imgDemandAll.offsetWidth;
							} else {
								imgDemandAll.style.display = 'none';
								imgDemandWU.style.display = '';
								//imgSep.style.display = '';
								imgDemandEmp.style.display = '';
								divToolBar.style.width = imgDemandWU.offsetWidth + imgDemandEmp.offsetWidth;
							}

							//divToolBar.style.zIndex = '10';
							divToolBar.style.position ='absolute';

							divToolBar.m4Node=node;
						}

						var divToolBar =  node.divToolBar;

						UpdateExpandToolbar(divToolBar, node);

						configuraExpandToolbar(node.divToolBar, node);
					};
					// End onPlaceLabel()

				}, 
				
				Tips: {
					enable: true,
					onShow: function(tip, node,label,e,win) {
						if(_activateTooltip==true){
							var target = e.target || e.srcElement;
							if(!target.m4Dependency){
								//display node info in tooltip
								tip.className = 'tip';
								tip.innerHTML= getTipNode(node);
							}else{
								//display node info in tooltip
								tip.className = 'tip';
								tip.innerHTML= getTipNode(label.m4node);
							}
						}else{
							tip.innerHTML= "";
							tip.className = 'tip_hide';
						}

						//if(node && !_contextMenu &&!_overContextMenu){
							/*
							if(node.type==TYPE_WU){
								//change icon
								var demandAll =  $jit.id('demandAll');
								var demandWU =  $jit.id('demandWU');
								var demandEmp = $jit.id('demandEmp');
								var separatorVert = $jit.id('separatorVert');
								var hide=0;

								if (!_ESS_New_Organigram)
								{
									demandAll.style.display='none';

									//function to show/hide WU
									demandWU.onclick= function (){
										//mark in tree WU
										markTreeWU(node);

										if(hasChildWUVisible(node)){
											//show tree mark 
											$('#ul_'+node.id).hide("slow");
											_st.config.levelsToShow = 0;
											node.selected=false;
											node.eachSubgraph(function (childNode) {
												 if(childNode.id!=node.id){
													childNode.drawn=false;
													childNode.visited=false;
													childNode.exist=false;
													childNode.selected=false;
													childNode.exployChild=false;

													if(childNode.type==TYPE_SUBORDINATE){
														childNode.m4showEmployees = false;
														delete childNode.data['$width'];
														delete childNode.data['$height'];
													}
													//hide tree mark
													if(childNode.type==TYPE_WU){
														$('#ul_'+childNode.id).hide("slow");
													}
												}
											});

											_st.select(node.id); 
											hideContextMenu();
											m4HideToolbarNode();
										}else{
											//mark tree wu
											$('#ul_'+node.id).show("slow");
											_st.config.levelsToShow = 1;
											_st.select(node.id);
											hideContextMenu();
											m4HideToolbarNode();
										}
										_st.canvas.translate(-_st.canvas.translateOffsetX, -_st.canvas.translateOffsetY - _deltaCanvasY, false);
									}; // fin demandWU.onclick

									//function to show/hide employee and WU
									demandEmp.onclick= function (){	
										//mark in tree WU
										markTreeWU(node);

										if(hasChildEmployeeVisible(node)){
											//remove list show employees
											removeElementList(node.id);
											node.exployChild=false;
											node.selected=false;
											node.eachSubnode(function (childNode) {
												if(childNode.id!=node.id){
													 if(childNode.type==TYPE_SUBORDINATE){
														childNode.m4showEmployees = false;
														childNode.visited=false;
														childNode.exist=false;
														childNode.drawn=false;
														childNode.selected=false;
														childNode.exployChild=false;
														delete childNode.data['$width'];
														delete childNode.data['$height'];
													}
												}
											});

											_st.select(node.id);
											hideContextMenu();
											m4HideToolbarNode();
										}else{ 
											_listNodesShowEmployees.push(node.id);
											//mark tree WU
											$('#ul_'+node.id).show("slow");
											
											 node.exployChild=true;
											//show employyes of node
											var type='';
											
											var groupEmployeesByPost = $jit.id('groupEmployeesByPost').checked ;
											if (groupEmployeesByPost) {// if employees is grouped
												var showAssistant= $jit.id('showAssistant').checked;
												if(showAssistant){
													type='groupedPostWithAssistant';
												}else{
													type='byPost';
												}
											}
				
											var groupEmployees = $jit.id('groupEmployees').checked;
											if (groupEmployees) {// if employees is grouped
												var showAssistant= $jit.id('showAssistant').checked;
												if(showAssistant){
													type='groupedWithAssistant';
												}else{
													type='withoutPost';
												}
											}

											var withoutgroupEmployees = $jit.id('withoutgroupEmployees').checked;  
											if(withoutgroupEmployees){
												type='onlyEmployees';
											}

											//show employees of type ='type' 
											showEmployeesOfOneNode(type,node);

											//show WU also
											node.eachSubnode(function (childNode) {
												if(childNode.id!=node.id){
													if(childNode.type==TYPE_WU){
														childNode.exist=true;
														childNode.drawn=true;
													}
												}
											});
										
											_st.config.levelsToShow = 1;
											_st.select(node.id);  
											
											//hide toolbar and context menu
											hideContextMenu();
											m4HideToolbarNode(); 
										}

										_st.canvas.translate(-_st.canvas.translateOffsetX, -_st.canvas.translateOffsetY - _deltaCanvasY, false);

										//change icon  node.divToolBar
										if(hasChildWUVisible(node)){
											demandWU.src= _AbsolutePathTemplate+'images/wu_underneath_minus.png';
										}else{
											demandWU.src= _AbsolutePathTemplate+'images/wu_underneath_plus.png';
										}

										if(hasChildEmployeeVisible(node)){
											demandEmp.src= _AbsolutePathTemplate+'images/persona_minus.png';
										}else{
											demandEmp.src= _AbsolutePathTemplate+'images/persona_plus.png';
										}

										if(hasChildWU(node)){
											demandWU.style.display='';
										}else{
											demandWU.style.display='none';
											hide=hide+1;
										}

										if(hasChildEmp(node)){
											demandEmp.style.display='';
										}else{
											demandEmp.style.display='none';
											hide=hide+1;
										}
									}; // fin demandEmp.onclic

								} else {
									//function to show/hide WU and Employess always.
									demandAll.onclick= function (){
										//mark in tree WU
										markTreeWU(node);

										var bhasChildEmployeeVisible = hasChildEmployeeVisible(node);
										if(hasChildWUVisible(node)){
											//show tree mark 
											$('#ul_'+node.id).hide("slow");
											_st.config.levelsToShow = 0;
											node.selected=false;
											node.eachSubgraph(function (childNode) {
												 if(childNode.id!=node.id){
													childNode.drawn=false;
													childNode.visited=false;
													childNode.exist=false;
													childNode.selected=false;
													childNode.exployChild=false;

													if(childNode.type==TYPE_SUBORDINATE){
														childNode.m4showEmployees = false;
														delete childNode.data['$width'];
														delete childNode.data['$height'];
													}
													//hide tree mark
													if(childNode.type==TYPE_WU){
														$('#ul_'+childNode.id).hide("slow");
													}
												}
											});

											_st.select(node.id); 
											hideContextMenu();
											m4HideToolbarNode();
										}else{
											//mark tree wu
											$('#ul_'+node.id).show("slow");
											_st.config.levelsToShow = 1;
											_st.select(node.id);
											hideContextMenu();
											m4HideToolbarNode();
										}

										if(bhasChildEmployeeVisible){
											//remove list show employees
											removeElementList(node.id);
											node.exployChild=false;
											node.selected=false;
											node.eachSubnode(function (childNode) {
												if(childNode.id!=node.id){
													 if(childNode.type==TYPE_SUBORDINATE){
														childNode.m4showEmployees = false;
														childNode.visited=false;
														childNode.exist=false;
														childNode.drawn=false;
														childNode.selected=false;
														childNode.exployChild=false;
														delete childNode.data['$width'];
														delete childNode.data['$height'];
													}
												}
											});

											_st.select(node.id);
											hideContextMenu();
											m4HideToolbarNode();
										}else{ 
											_listNodesShowEmployees.push(node.id);
											//mark tree WU
											$('#ul_'+node.id).show("slow");
											
											 node.exployChild=true;
											//show employyes of node
											var type='';
											
											var groupEmployeesByPost = $jit.id('groupEmployeesByPost').checked ;
											if (groupEmployeesByPost) {// if employees is grouped
												var showAssistant= $jit.id('showAssistant').checked;
												if(showAssistant){
													type='groupedPostWithAssistant';
												}else{
													type='byPost';
												}
											}
				
											var groupEmployees = $jit.id('groupEmployees').checked;
											if (groupEmployees) {// if employees is grouped
												var showAssistant= $jit.id('showAssistant').checked;
												if(showAssistant){
													type='groupedWithAssistant';
												}else{
													type='withoutPost';
												}
											}

											var withoutgroupEmployees = $jit.id('withoutgroupEmployees').checked;  
											if(withoutgroupEmployees){
												type='onlyEmployees';
											}

											//show employees of type ='type' 
											showEmployeesOfOneNode(type,node);

											_st.config.levelsToShow = 1;
											_st.select(node.id);  
											
											//hide toolbar and context menu
											hideContextMenu();
											m4HideToolbarNode(); 
										}

										_st.canvas.translate(-_st.canvas.translateOffsetX, -_st.canvas.translateOffsetY - _deltaCanvasY, false);
									}; // fin demandAll.onclick

									// Ejecuci�n nuevo organigrama
									demandWU.style.display='none';
									demandEmp.style.display='none';

									if(hasChildWUVisible(node) || hasChildEmployeeVisible(node)){
										demandAll.src= _AbsolutePathTemplate+'images/actions.svg';		//---------->PENDIENTE
										demandAll.style.display='';
									}else{
										demandAll.src= _AbsolutePathTemplate+'images/persona_minus.png';  //---------->PENDIENTE
										demandAll.style.display='none';
									}

									if(hasChildWU(node) || hasChildEmp(node)){
										demandAll.style.display='';
									}else{
										demandAll.style.display='none';
									}
									hide = 1; // Para que no aparezca el separador
								}


								if(hide==2){
									m4HideToolbarNode();
								}else{
									if (hide==1){
										separatorVert.style.display='none';
									}else{
										separatorVert.style.display='';
									}

									//show toolbar node
									var toolbarNode= $jit.id('toolbarNode');
									toolbarNode.m4Node=node;
									toolbarNode.style.display='block';
									toolbarNode.style.top=label.style.top;
									var d=toolbarNode.offsetTop;
									//d=d-40;
									d = d + 12; // Hay un factor de 52px por la nueva toolbar
									toolbarNode.style.top=d+_st.graph.Node.height+37+'px';
									toolbarNode.style.left=label.style.left;
									d=toolbarNode.offsetLeft;
									d=d+(node.getData('width')/2)-(toolbarNode.scrollWidth/2);
									
									// Fast solucion for demo..
									d += $jit.id('left-container').offsetWidth;

									toolbarNode.style.left=d+'px';
								}
							}else{
								var toolbarNode= $jit.id('toolbarNode');
								toolbarNode.style.display='none';
							}
						}
						*/
				}
	}
});           // End construct of st

	//BUG 0282595
	//En IE necesita que se inicialice el ancho del contenedor de las tablas.
	//Hasta este momento no tenemos el infovis.clientWidth..
	m4SetSizetables(); //'all'); 

	// load json data
	_st.loadJSON(json);

	// apply styles
	applyStyles();

	// hide group employees
	//hideEmployees();
	// hide group vacancies
	//hideVacancies();        

	///////////////////////////////////////////////
	// Miramos si tenemos posiciones para reasignar
	///////////////////////////////////////////////
	_jsonPositionOriginal = positionNodes;
	if (positionNodes) {			

		//Estilos
		_snapShot = {};
		_snapShot['type'] = M4SNAPSHOT_INITIAL_POSITION_NODE;
		_snapShot['width'] = _st.graph.Node.width;
		_snapShot['height'] = _st.graph.Node.height;
		_snapShot['typeZoom'] = _typeZoom;

		var newPosNodes = {};

		//El formato del JSON es el de la clase de JAVA 
		//Lo transformamos a nuestro snapShot
		//Posiciones de los nodos		
		for (i = 0; i < positionNodes.length; i++) {
			var n = positionNodes[i];
			var key = n.id;						

			newPosNodes[key] = {
		    	x: n.pos.X,
		    	y: n.pos.Y,
		    	movedManually : n.moved
		    }

		    // Con que un nodo haya fuera movido originalmente, lo marcamos 
		    if (n.moved) {
            	_hasMoveNode = true;
        	}
            //  
		};

		_snapShot['posNodes'] =	newPosNodes;	

		disabledControlAgainstMovingManuallyEffect(true);	

	} else {
		var btnReloadStylePosition = $jit.id('btnReloadStylePosition');
		btnReloadStylePosition = true;
		$("#btnReloadStylePosition").addClass("disabled");
	}

	// compute node positions and layout
	_st.compute();

//console.time('UpdateControl');

	//simulate($jit.id('selectLevel'), "change"); //updateControlEmployee
	updateControlChangeLevel(false);
	updateControlEmployee(false);  // No podemos refrescar si no se lleg� a pintar...
	//updateControlAssistant(false); //Execute almost same code as updateControlEmployee()

	if (_propertyBag.hide_FuncDepCheck  || !existAnyDepFuncNode())
	{
		$jit.id('fileDependencies').style.display='none';
		showDepenFunc.checked = false;
	}

	updateControlDepenFunc(false);
	updateControlVacancies(false); 

//	UpdateShowingAndGrouping(false);
//console.timeEnd('UpdateControl');	


	// optional: make a translation of the tree
	//_st.geom.translate(new $jit.Complex(-400, 0), "current");

	_st.canvas.translate(-_st.canvas.translateOffsetX, -_st.canvas.translateOffsetY - _deltaCanvasY, true);

	// emulate a click on the root node.
	if (!positionNodes) {
		// Esto hace pupita para la recolocaci�n de los nodos
		_st.onClick(_st.root);
	} else {
		// El hecho de no ejecutar _st.onClick() requiere de las siguientes acciones, sino peta el control    	
    	var node = _st.graph.getNode(_st.root);
        if(node != null) {
        	_st.selectPath(node, _st.clickedNode);
           	_st.clickedNode = node;
       	}
	}

	// Add event handlers to switch spacetree orientation.

	clickeBug=_st.root;
	_lastTreeChecked=_st.graph.getNode(_st.root);


	// Paint Lienzo???
	if (_propertyBag.activated_WysIwyg_print) {
		updateLblVerLienzo();
		
		if (parseInt(_configStyle[7]) === 1) {	
			meta4.orgdyn.lienzo.setPositionCanvasSerialized(_st, $jit.id('fijarLienzo'), _configStyle[8]);

			var verLienzo = $jit.id('verLienzo');
			simulate(verLienzo, "click");		
		}
	}


	document.getElementById('cssNormal').href=_AbsolutePathTemplate+'css/mouse.css';
//console.timeEnd('InitOrg');

	_initializing_Org = false;
	

	//[perfCarga]console.time("TimoutRefreshTree");
	setTimeout("refreshTreeInitial()", 500);

	//[perfCarga]console.timeEnd("InitOrg"); 

}

// *********** FUNCTION FOR M4ORGANIGRAMA.JS *************



/**
 * Function to check if node has child WU
 * @param node
 * @returns {Boolean}
 */
function hasChildWU(node){
	var adjacencies= node.adjacencies;
	for(var adj in adjacencies){
		var nodeTo= adjacencies[adj].nodeTo;
		var nodeFrom= adjacencies[adj].nodeFrom;
		if(nodeTo.type==TYPE_WU && nodeTo.id!=node.id){
			if(nodeTo.isDescendantOf(node.id)){
				return true;
			}
		}
		if(nodeFrom.type==TYPE_WU && nodeFrom.id!=node.id ){
			if(nodeFrom.isDescendantOf(node.id)){
				return true;
			}
		}
		
	}
	return false;
}


/**
 * Function to check if node has child Employee
 * @param node
 * @returns {Boolean}
 */
function hasChildEmp(node){
	var adjacencies= node.adjacencies;
	for(var adj in adjacencies){
		var nodeTo= adjacencies[adj].nodeTo;
		var nodeFrom= adjacencies[adj].nodeFrom;
		if(nodeTo.type==TYPE_SUBORDINATE){
			if(nodeTo.isDescendantOf(node.id)){
				return true;
			}
		}
		if(nodeFrom.type==TYPE_SUBORDINATE){
			if(nodeFrom.isDescendantOf(node.id)){
				return true;
			}
		}
		
	}
	return false;
}


/**
 * Function to check if node has child WU visible
 * @param node
 * @returns {Boolean}
 */
function hasChildWUVisible(node){
	var adjacencies= node.adjacencies;
	for(var adj in adjacencies){
		var nodeTo= adjacencies[adj].nodeTo;
		var nodeFrom= adjacencies[adj].nodeFrom;
		if(nodeTo.type==TYPE_WU  && nodeTo.id!=node.id &&nodeTo.drawn==true ){
			if(nodeTo.isDescendantOf(node.id)){
				return true;
			}
		}
		if(nodeFrom.type==TYPE_WU   && nodeFrom.id!=node.id &&nodeFrom.drawn==true ){
			if(nodeFrom.isDescendantOf(node.id)){
				return true;
			}
		}
	}
	return false;
}

/**
 * Function to check if node has child WU visible
 * @param node
 * @returns {Boolean}
 */
function hasChildEmployeeVisible(node){
	var adjacencies= node.adjacencies;
	for(var adj in adjacencies){
		var nodeTo= adjacencies[adj].nodeTo;
		var nodeFrom= adjacencies[adj].nodeFrom;
		if(nodeTo.type== TYPE_SUBORDINATE  &&nodeTo.drawn==true ){
			return true;
		}
		if(nodeFrom.type==TYPE_SUBORDINATE  &&nodeFrom.drawn==true ){
			return true;
		}
	}
	return false;
}


/**
* Function to collapse node
*/
function nodeCollapse(st, collapseNode) {
	collapseNode.collapsed = false;
	
	st.op.contract(collapseNode,{
		type: 'animate',
		duration: 600,
		hideLabels: true,
		transition: $jit.Trans.Quart.easeOut
	});

	collapseNode.anySubnode(function (collapseNode) {
		nodeCollapse(st, collapseNode);
	});
}


/**
* Function to get tree from object json
*/

function getPartialTree(jsonObj, idNode) {   
	var found = false;
	if (jsonObj.id == idNode) {
		found = true;
		_jsonChangeRoot = jsonObj;
	} else {
		for (var i in jsonObj.children) {
			if (found == false) {
				getPartialTree(jsonObj.children[i], idNode);
			}
		}
	}
}

function nodeExpande(st, node) {
	delete node.collapsed;
	if(node.imgLock){
		if (node.imgLock.style.display == '') {        
			node.m4ImgLocked = false;
			node.imgLock.style.display='none';
		}
	}

	node.anySubnode(function (childNode) {
		nodeExpande(st, childNode);
	});
}

function setm4ignore(_boolean, node) {
	node.m4ignore = _boolean;

	node.anySubnode(function (node) {
		setm4ignore(_boolean, node);
	});
}


// **** Functions used to load the json object *********

/**
* function to get the code of color of object JSON. If the color has been
* changed by colorPicker, the object already has color code and go return his
* value
*/
function colorCode(color) {
	switch (color) {
		case M4_BLACK:
			return "#000000";
		case M4_BLUE:
			return "#013ADF";
		case M4_GRAY:
			return "#BDBDBD";
		case M4_GREEN:
			return "#01DF01";
		case M4_ORANGE:
			return "#FF8000";
		case M4_PINK:
			return "#F781D8";
		case M4_RED:
			return "#FF0000";
		default:
			return color;
	}
}


/**
* Method for get attribute given typeStyle
* 
* @param typeStyle
* @param attr
* @returns return value of atribute
*/
function getValueAttribute(typeStyle, attr) {
	switch (attr) {
		case ATTR_COLOR:
			return colorCode(typeStyle._color);
		case ATTR_COLOR_LINE:
			return colorCode(typeStyle._colorLineNormal);
		case ATTR_BORDER_WIDTH:
			return typeStyle._borderWidth;
		case ATTR_LINE_WIDTH:
			return typeStyle._lineWidth;
		case ATTR_TYPE_LYNE:
			return typeStyle._typeLine;
		case ATTR_COLOR_BORDER:
			return colorCode(typeStyle._colorBorderBox);
		case ATTR_COLOR_LINE_ASSOCIATED:
			return colorCode(typeStyle._colorLineAssociated);
		case ATTR_WIDTH_BOX:
			return typeStyle._widthBox;
		case ATTR_HEIGHT_BOX:
			return typeStyle._heightBox;
		case ATTR_GROUPING_BOX:
			return typeStyle._gropingBox;
		case ATTR_SHOW_BOX:
			return typeStyle._showBox;
	}
}

/**
* Method for set attribute to givel style
*/
function SetAttributeStyle(idType, attr, value){
	var typeStyle = getTypeStyle(idType);
	switch (attr) {
		case ATTR_COLOR:
			//colorCode(typeStyle._color);
			break;
		case ATTR_COLOR_LINE:
			//colorCode(typeStyle._colorLineNormal);
			break;
		case ATTR_BORDER_WIDTH:
			typeStyle._borderWidth = value;
			break;
		case ATTR_LINE_WIDTH:
			typeStyle._lineWidth = value;
			break;
		case ATTR_TYPE_LYNE:
			typeStyle._typeLine = value;
			break;
		case ATTR_COLOR_BORDER:
			//colorCode(typeStyle._colorBorderBox);
			break;
		case ATTR_COLOR_LINE_ASSOCIATED:
			//colorCode(typeStyle._colorLineAssociated);
			break;
		case ATTR_WIDTH_BOX:
			typeStyle._widthBox = value;
			break;
		case ATTR_HEIGHT_BOX:
			typeStyle._heightBox = value;
			break;
		case ATTR_GROUPING_BOX:
			typeStyle._gropingBox = value;
			break;
		case ATTR_SHOW_BOX:
			typeStyle._showBox = value;
			break;
	}
}

// **** End Functions used to load the json object *********

// **** Functions for apply type style to nodes and set size *********
/**
* Method to apply different type styles to orgChart
*/
function applyStyles() {

	_st.graph.eachNode(function (node) {
		// get Id type of node
		var idType = findIdType(node);

		// get typeStyle of node
		var typeStyle = getTypeStyle(idType);

		var color = getValueAttribute(typeStyle, ATTR_COLOR);
		node.setCanvasStyle('fillStyle', color);

		var colorBorder = getValueAttribute(typeStyle, ATTR_COLOR_BORDER);
		node.setCanvasStyle('strokeStyle', colorBorder);

		var widthBorder = getValueAttribute(typeStyle, ATTR_BORDER_WIDTH);
		node.setCanvasStyle('lineWidth', widthBorder);

		node.eachAdjacency(function (adj) {
			var colorLine = getValueAttribute(typeStyle, ATTR_COLOR_LINE);
			// var widthLine = getValueAttribute(typeStyle, ATTR_LINE_WIDTH);

			adj.Config.color = colorLine;
			//   adj.Config.lineWidth = widthLine;
		});
	});
}


function m4getParents(nodeClicked,listParents){
	
	var parent = nodeClicked.getParents();
	if(parent.length>0){
		m4getParents(parent[0],listParents);
		listParents.push(parent[0].id);		
	}
	return listParents;
}

/**
* Method for find id TypeStyle of one node First search if node has specif type
* in mapTypeID
* 
*/
function findIdType(node) {
	
	var idNode= node.id; 
	var typeNode=node.type;
	
	// if haven�t style return styleDefault
	var found = 'm4StyleDefault';
	// find style in mapTypeId
	for (var i in mapTypeId) {
		// if idNode is in mapTypeId return his typeStyle
		if (i == idNode) {
			found = mapTypeId[i];
		}
	}

	var showAssistant= $jit.id('showAssistant').checked;
	if(showAssistant){
		if(node.data['assistant']){
			typeNode= TYPE_ASSISTANT;
		}
	}

	if (found == 'm4StyleDefault') {
		// search type associated to his type node
		for (var j in listStyles) {
			if (listStyles[j]._type == typeNode) {
				found = listStyles[j]._idTypeStyle;
			}
		}
	}
	return found;
}

/**
* Method for find typeStyle given idStyle
*/
function getTypeStyle(idType) {
	//search type associated type Node
	var typeFound = null;
	$jit.util.each(listStyles, function (type) {
		if (type._idTypeStyle == idType) {
			typeFound = type;
		}
	});

	if (typeFound == null) {
		//search typeStyle default of BBDD
		$jit.util.each(listStyles, function (type) {
			if (type._type == '-1') {
				typeFound = type;
			}
		});
	}

	if (typeFound != null) {
		return typeFound;
	} else {
		//return typeStyle default of Js
		return _typeStyleDefault;
	}
}


/*
function getTextHeight (font) {

	if (_heightFont[font]) {
		return _heightFont[font];
	} else {
		var text = $('<span>Hg</span>').css({ fontFamily: font });
		var block = $('<div style="display: inline-block; width: 1px; height: 0px;"></div>');

		var div = $('<div></div>');
		div.append(text, block);

		var body = $('body');
		body.append(div);

		try {

			var result = {};

			block.css({ verticalAlign: 'baseline' });
			result.ascent = block.offset().top - text.offset().top;

			block.css({ verticalAlign: 'bottom' });
			result.height = block.offset().top - text.offset().top;

			result.descent = result.height - result.ascent;

		} finally {
			div.remove();
		}
		 _heightFont[font] = result;

		return result;
	}
}
*/

function getLineDummyText(width){
	var text = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
	var sizeText =  getSizetext(text);

	if(sizeText>width){
		var tamChart = sizeText/text.length;
		var pos = parseInt(width/tamChart);
		return text.substring(0, pos);
	}else{
		return text;
	}
}

// Fills with characters the contencontrol depending on the dimensions
function getDummyText(width, height){

	var lineText = getLineDummyText(width);
	var text = lineText;

	//var heightText =  getTextHeight(text.style.font);
	heightText = 10;

	// Redondeo entero hacia abajo
	var nLines = Math.floor(height / heightText);

	for (var i = 1; i < nLines - 1; i++) {
		text = text + "\n" + lineText;
	}

	return text;
}
// **** END Functions for apply type style to nodes and set size *********


function compareStyles (a, b){
	for (var prop in a) {
		if (a.hasOwnProperty(prop)) {
			if (b.hasOwnProperty(prop)) {
			   	if (typeof a[prop] === 'object') {
			    	if (!compareStyles(a[prop], b[prop])) return false;
			    } else {
			    	if (a[prop] !== b[prop]) return false;
			    }
			} else {
				return false;
			}
		}
	}
	return true;
}

function paintTriangle(posX,posY,ctx,color,rtl){	
	ctx.save();
	ctx.fillStyle=color;	
	ctx.strokeStyle=color;	
	ctx.beginPath();
	ctx.moveTo(posX,posY);
	ctx.lineTo(posX+10,posY);
	if (rtl){
		ctx.lineTo(posX,posY-10);
		ctx.lineTo(posX,posY);
	} else {
		ctx.lineTo(posX+10,posY-10);
		ctx.lineTo(posX,posY);
	}

	ctx.fill();
	ctx.stroke();  
	ctx.restore();
}


function isNodeGroupEmployee(node){
	if( !node.data['groupEmployees']
		&& !node.data['groupEmployeesByPost']  && !node.data['groupEmployeesPostWithAssistant']
		&& !node.data['groupEmployeesPostWithAssistant']&& !node.data['groupEmployeesWithAssistant']){
		return false;
	}else{
		return true;
	}
}

function isGroup(node){
	if(isNodeGroupEmployee(node)){
		return true;
	}else if(isNodeGroupVacancy(node)){
		return true;
	}else{
		return false;
	}
}

function isNodeGroupVacancy(node){
	if(!node.data['groupVacancies']){
		return false;
	}else{
		return true;
	}
	
}

// ************ FUNCTION TO WRITE TEXT INSIDE M4RECTANGLE*************

/**
 * Function that return text that inside the box
 */
function getText(text,width){
	if (text == undefined)
	{
		return '';
	}

	var sizeText =  getSizetext(text);

	if(sizeText>width){
		var tamChart = sizeText/text.length;
		var pos = parseInt(width/tamChart);
		return text.substring(0, pos-4)+'...';
	}else{
		return text;
	}
}

/**
 * Function to get text for head
 * @param node
 * @param getId
 * @returns {Array}
 */
function getTextHead(node,getId){
	var arrayText= {};
	//return only name
	if(node.data['Name']){
		arrayText[0]=node.data['Name'];
	}
	if(node.data['VacancyName']){
		arrayText[0]=node.data['VacancyName'];
	}
	if(node.data['ResponsibleName']){
		arrayText[0]=node.data['ResponsibleName'];
	}
	if(getId==true){
		if(node.data['ResponsibleID']){
			arrayText[1]=node.data['ResponsibleID'];
		}
		if(node.data['Id']){
			arrayText[1]=node.data['Id'];
		}
		if(node.data['VacancyID']){
			arrayText[1]=node.data['VacancyID'];
		}
	}
	return arrayText;
}


/* OLD
function getTextHead(node,getId){
	var arrayText= {};
	//return only name
	if(node.data['Name']){
		arrayText[0]=node.data['Name'];
	}
	if(node.data['VacancyName']){
		arrayText[0]=node.data['VacancyName'];
	}
	if(node.data['NameWU']){
		arrayText[0]=node.data['NameWU'];
	}
	if(getId==true){
		//return  name + ID
		if(node.data['WUID']){
			arrayText[1]=node.data['WUID'];
		}
		if(node.data['Id']){
			arrayText[1]=node.data['Id'];
		}
		if(node.data['VacancyID']){
			arrayText[1]=node.data['VacancyID'];
		}
	}
	return arrayText;
}
*/

/**
 * Function that return item 
 */
function getItem(itemSearch,listItem){
	for(var i in listItem){
		if(itemSearch=='ID'){
			if(listItem[i]._item==['WUID'] ||listItem[i]._item==['VacancyID'] ||listItem[i]._item==['Id']){
				return listItem[i];
			}
		}
		if(itemSearch=='ResponsibleID'){
			if(listItem[i]._item==['ResponsibleID'] ||listItem[i]._item==['VacancyID'] ||listItem[i]._item==['Id']){
				return listItem[i];
			}
		}
		if(itemSearch=='ResponsibleName'){
			if(listItem[i]._item==['ResponsibleName'] ||listItem[i]._item==['VacancyName'] ||listItem[i]._item==['Name']){
				return listItem[i];
			}
		}
		if(itemSearch=='Name'){
			if(listItem[i]._item==['NameWU'] ||listItem[i]._item==['VacancyName'] ||listItem[i]._item==['Name']){
				return listItem[i];
			}
		}
		if(itemSearch=='Photo'){
			if(listItem[i]._item==['Photo']){
				return listItem[i];
			}
		}
	}
	return false;
}


/**
 * Function to get color head node
 */
function getColorHead(hexa, factor){
	var rgb= hexToRgb(hexa);
	if (rgb == null && hexa != null)
	{
			var rgb= hexToRgb(hexa);
	}
	var r= rgb.r-factor;
	var g= rgb.g-factor;
	var b= rgb.b-factor;
	if(r<0)r=0;
	if(g<0)g=0;
	if(b<0)b=0;
	return  rgbToHex(r,g,b);
}


function getTypeWritterByItem(item){

	var typeWriter = '';

	if (item['_bold'] == true) {
		typeWriter = 'bold ';
	}
	if (item['_italic'] == true) {
		if (typeWriter == 'bold ') {
			typeWriter = 'italic bold ';
		} else {
			typeWriter = 'italic ';
		}
	}

	return typeWriter;
}


function getTypeWritter(id, typeStyle){

	var item = getItem(id, typeStyle._listItem);
	return getTypeWritterByItem(item);

}

/**
* Function to paint a single attribute
*/
function paitAttribute(posX, posY, id, text, typeStyle, ctx, fontsize)
{
	if (arguments[6] == undefined)
	{
		fontsize = M4_FONT_SIZE;
	}

	var typeWriter = getTypeWritter(id, typeStyle);

	ctx.font = typeWriter + M4_FONT_SIZE + "px " + M4_FONT_LABEL;
	ctx.fillText(text, posX, posY);
}

// Establece d�nde se pinta la imagen de las acciones y el literal (si �ste cabe y dependiendo del zoom)
function getPosActions(posX, posY, width, height, node, posAction)
{
	var sepImgLit = 4;

	// get Id typeStyle of node
	var idType = findIdType(node);

	// get typeStyle of node
	var typeStyle = getTypeStyle(idType);

	// get typeStyle of node
	var typeStyle = getTypeStyle(idType);

	var bpaintPhoto = (getItem('Photo',typeStyle._listItem)._check==true && !isGroup(node));

	var ctx   = _st.canvas.getCtx();
	var cFont = ctx.font;
	ctx.font  = M4_FONT_SIZE + "px " + M4_FONT_LABEL;

	var sizeLitAction = getSizetext(_actions);

	if (_typeZoom == TYPE_ZOOM_NORMAL || _typeZoom == TYPE_ZOOM_HEAD_PHOTO){
		posAction.bShowLit = (checkWithForLiteralAction(width, height, sizeLitAction, bpaintPhoto));
		posAction.bShowImg = true;

		if (_isRtlLanguaje) {
			posAction.posXImg = posX + M4_MARGIN_X;

			if (posAction.bShowLit){
				posAction.posXLit = posX + M4_MARGIN_X + sizeLitAction;
				posAction.posXImg += (sepImgLit + sizeLitAction ); //4 Separaci�n del icono respecto al literal
			}
		} else {
			posAction.posXImg = posX + width - M4_MARGIN_X - M4_SIZE_IMAGEACTION;

			if (posAction.bShowLit){
				posAction.posXLit = posX + width - M4_MARGIN_X - sizeLitAction;
				posAction.posXImg -= (sizeLitAction + sepImgLit); //4 Separaci�n del icono respecto al literal
			}
		}
		// Sobre el l�mite inferior de la cabecera
		posAction.posYLit = posY + height - (M4_MARGIN_X / 2);
		posAction.posYImg = posAction.posYLit - 13;

	/*}else if (_typeZoom == TYPE_ZOOM_PORTRAIT) {
		posAction.bShowLit = checkWithForLiteralAction(width, height, node);
		posAction.bShowImg = true;

		// Alineado a la derecha
		posAction.posXImg = posX + width - M4_MARGIN_X - M4_SIZE_IMAGEACTION;

		if (posAction.bShowLit){
			posAction.posXLit = posX + width - M4_MARGIN_X - sizeLitAction;
			posAction.posXImg -= (sizeLitAction + 4); //4 Separaci�n del icono respecto al literal
		}

		// Bajo el l�mite superior de la cabecera
		posAction.posYLit = posY + M4_SIZE_IMAGEACTION + (M4_MARGIN_X / sepImgLit);
		posAction.posYImg = posAction.posYLit - 13;
	*/
	/*
	}else if (_typeZoom == TYPE_ZOOM_HEAD_PHOTO) {
		//Visualizamos solo la imagen alineada a la esquina superior derecha
		posAction.posXImg = posX + width - M4_SIZE_IMAGEACTION - 1;
		posAction.posYImg = posY + 1;
		posAction.posXLit = posAction.posXImg;
		posAction.posYLit = 0;
		posAction.bShowImg = true;
		posAction.bShowLit = false;
   */
	}else if (_typeZoom == TYPE_ZOOM_PHOTO) {
		/*
		var sizePhoto;
		if(width >height){
			sizePhoto= height*0.75;
		}else{
			sizePhoto= width*0.75;
		}
		posAction.posXImg = posX+(width-sizePhoto)/2;
		posAction.posXLit = posX;
		posAction.posYImg = posY+(height-sizePhoto)/2;
		posAction.posYLit = posY;
		posAction.bShowImg = false;
		posAction.bShowLit = false;
		*/
		posAction.posXLit = posX;
		posAction.posYImg = posY;
		posAction.posYLit = posY;
		posAction.bShowImg = false;
		posAction.bShowLit = false;
	}else if (_typeZoom == TYPE_ZOOM_NOTHING) {
		
		/*
		// Centrado
		var sizeX = M4_SIZE_IMAGEACTION;
		if (bPaintText)
		{
			sizeX += sizeLitAction;
			posAction.posXImg = posX + (width/2) - (sizeX / 2);
			posAction.posXLit = posAction.posXImg + (sizeX / 2) -10;
		} else {
			posAction.posXImg = posX + (width/2) - (sizeX / 2);
		}
		
		// Bajo el l�mite superior de la cabecera
		posAction.posYImg = posY + (height/2) - (M4_SIZE_IMAGEACTION / 2);
		posAction.posYLit = posAction.posYImg + 13;
		*/

		posAction.posXImg = posX;
		posAction.posXLit = posX;
		posAction.posYImg = posY;
		posAction.posYLit = posY;
		posAction.bShowImg = false;
		posAction.bShowLit = false;
	}

	ctx.font = cFont;
}

// Miramos si cabe el icono m�s el literal en el ancho...
function checkWithForLiteralAction(width, height, sizeLitAction, bpaintPhoto) {

	var sizephotoBox = M4_SIZE_FOTO_NORMALZOOM;
	if (!bpaintPhoto){
		sizephotoBox = 0;
	}

	var widthAction = M4_SIZE_IMAGEACTION + 4 + sizeLitAction + M4_MARGIN_X + 4; // Tam(icono) + separador + tam "Acciones" + margen

	if (_typeZoom == TYPE_ZOOM_NORMAL || _typeZoom == TYPE_ZOOM_HEAD_PHOTO){
		var widthPhoto = 2 + sizephotoBox  + M4_MARGIN_X; // 1pixel + foto + 1 pixel + margen
		return (widthPhoto + widthAction <= width); 
	} else {
		return (stestWidth < width);
	}
}

/**
Test if we can draw the icon and literal of Actions
*/
function canDrawActions(node) {
	var result = true;

	if (_showDependencies)
	{
		if (node.type == TYPE_FUNTCIONAL_DEPENDENCY) 
		{
			return false;
		}
	}
	
	if (_ESS_New_Organigram == true && node.type==TYPE_WU)
	{
		// No ejecutan acciones las WU root.
		var parent = node.getParents();
		result = (parent != null && parent.length > 0); // && parent[0].id != _st.root);

		// Tamposo ejecutan acciones las WU que no tienen nodos hijos.
		if (result) {
			result = hasChildWU(node) || hasChildEmp(node)
		}
	}

	return result;
}


function paintActions(posX, posY, width, height, ctx, node, typeStyle, posAction)
{	
/*	var posAction = {
		posXImg : 0,
		posYImg : 0,
		posXLit : 0,
		posYLit : 0,
		bShowImg : true,
		bShowLit: true
	}
*/

	if (canDrawActions(node))
	{
		// Definimos la fuente
		var colorFont = typeStyle._colorFont;
		ctx.fillStyle = colorFont;
		ctx.font = M4_FONT_SIZE + "px " + M4_FONT_LABEL;

		// Text "Acciones"
		getPosActions(posX, posY, width, height, node, posAction);

		if (posAction.bShowLit)
		{
			ctx.fillText(getText(_actions, width), posAction.posXLit, posAction.posYLit);
		}
		
		if (posAction.bShowImg && _bShowPhotoWhileLoadingOrgChart && _bShowPhotoForAfterComputingEfect)
		{
			//Drawn icon actions!
			var imgAction = new Image();
			imgAction.id = _actions;

			//Bug 0323807 IE 11 necesita que la definición del onload esté antes que la asignación de la imagen (no pasa con IE10 o IE9)
			if (m4Browser.name.toUpperCase() !== "IE") {
				imgAction.src= _AbsolutePathTemplate+'images/actions.svg';
			}
			
			imgAction.width  = M4_SIZE_IMAGEACTION; //IE11
			imgAction.height = M4_SIZE_IMAGEACTION; //IE11

			if (imgAction.complete==true || m4CanvasSupport==false){
				ctx.drawImage(imgAction,  parseInt(posAction.posXImg), parseInt(posAction.posYImg)+0.5, M4_SIZE_IMAGEACTION, M4_SIZE_IMAGEACTION);
			}else{
				imgAction.onload = function(){
					// execute drawImage statements here
					ctx.drawImage(imgAction,  parseInt(posAction.posXImg), parseInt(posAction.posYImg)+0.5, M4_SIZE_IMAGEACTION, M4_SIZE_IMAGEACTION);
				};
			}
			
			//Bug 0323807 IE 11 necesita que la definición del onload esté antes que la asignación de la imagen (no pasa con IE10 o IE9)
			if (m4Browser.name.toUpperCase() === "IE") {
				imgAction.src= _AbsolutePathTemplate+'images/actions.svg';
			}
		}
	}

}

/**
 * Functio to paint head to node
 * @param posX
 * @param posY
 * @param width
 * @param height, to head node
 * @param ctx
 * @param node
 * @param typeStyle
 * @param writeID, indicate if we must paint id in head
 */
function paintHead(posX, posY, width, height, ctx, typeStyle, bpaintPhoto, node) {

	var bWriteID = false;
	var bWriteResponsibleName = true;

	if (node.type==TYPE_WU)
	{
		bWriteID = (getItem('ResponsibleID', typeStyle._listItem)._check==true);
		bWriteResponsibleName = (getItem('ResponsibleName', typeStyle._listItem)._check==true);
	} else {
		bWriteID = (getItem('ID', typeStyle._listItem)._check==true);		
	}
	
	var text= getTextHead(node, bWriteID);

	//Change color to head	
	ctx.fillStyle = getColorHead(ctx.fillStyle, 0.07); // old 0.15);
	ctx.fillRect(parseInt(posX), parseInt(posY)-0.5, width, parseInt(height));

	var colorFont = typeStyle._colorFont;
	ctx.fillStyle = colorFont;

	var originalPosY = posY;
	/*
	posX = posX + M4_MARGIN_X;
	var posXText = posX;

	//Adjust position for arabian language
	if (_isRtlLanguaje)
	{
		posXText = posX + width - (2 * M4_MARGIN_X);
	}

	width = width - 15;//10 margen left 5 margen right
	*/

	var posAction = {
		posXImg : 0,
		posYImg : 0,
		posXLit : 0,
		posYLit : 0,
		bShowImg : true,
		bShowLit : true
	}

	//Dibujamos las acciones
	paintActions(posX, posY, width, height, ctx,  node, typeStyle, posAction)

/*
	if (_typeZoom != TYPE_ZOOM_NORMAL)
	{
		posY = posAction.posYImg + (M4_MARGIN_X / 2) + 16;
	}
*/
	if (!bpaintPhoto){
		//Adjust position for arabian language
		if (_isRtlLanguaje)
		{
			posX = posX + width - M4_MARGIN_X;
		} else {
			// Caso normal
			posX = posX + M4_MARGIN_X;
		}

		width = width - 2 * M4_MARGIN_X;
		
	}else{
		var sizePhoto;
		var posXImg;
		var posYImg;

		if (_typeZoom == TYPE_ZOOM_NORMAL || _typeZoom == TYPE_ZOOM_HEAD_PHOTO) {

			sizePhoto = height;

			if (width < height)
			{
				sizePhoto = width - 2;
			}
			
			//Foto alineada TOP E izquierda
			posX = parseInt(posX) + 0.5;
			
			//Adjust position for arabian language
			if (_isRtlLanguaje)
			{
				posXImg = posX + width - sizePhoto - 1.5;
				posX = posXImg - M4_MARGIN_X;
			} else {
				// Caso normal
				posXImg = posX;
				posX = posXImg + sizePhoto + M4_MARGIN_X;
			}

			posYImg = parseInt(posY) + 0.5;
			width = width - sizePhoto - M4_MARGIN_X ; 
		}
		/* else if (_typeZoom == TYPE_ZOOM_PORTRAIT)
		{
			sizePhoto = width;
			posXImg = posX;
			posX = posX + M4_MARGIN_X;
			posYImg = posY + 1;
			posY = posYImg + sizePhoto;
			width = width - 2 * M4_MARGIN_X;
		}
		*/
		/*
		 else if (_typeZoom == TYPE_ZOOM_HEAD_PHOTO) {
			// Foto alineada TOP y centrada
			sizePhoto = height - M4_STEP_Y;  // Dejamos espacio para escribir el Name

			posXImg = posX+(width-sizePhoto)/2;
			posYImg = posY + 1;

			//Lo dejamos preparado para que el texto siguiente sea centrado
			posX = posX + (width / 2) - (getSizetext(getText(text[0],width)) / 2);
			posY = posYImg + sizePhoto - (M4_MARGIN_X / 2);
		}
		*/

		paintPhoto(ctx, posXImg, posYImg, sizePhoto, node);

	}
	
	if (width <= 0)
	{
		return;
	}

	//16/06/2017 Poder quitar nombre de responsable de unidad organizativa
	if (bWriteResponsibleName) {
		paitAttribute(posX, posY + M4_STEP_Y, 'ResponsibleName', getText(text[0], width), typeStyle, ctx);
	}

	//write name
	if(bWriteID){
		//Si cabe imprimimos...
		if ( posY + M4_STEP_Y + M4_STEP_Y > originalPosY + height)
		{
			return;
		}

		paitAttribute(posX, posY+ M4_STEP_Y  + (bWriteResponsibleName && text[0] !== undefined ? M4_STEP_Y : 0), 'ResponsibleID', getText(text[1], width), typeStyle, ctx);
	}
}

/* OLD 
function paintHead(posX, posY,width,height, ctx, typeStyle,writeID,text) {
	var MarginX = 10;

	//Change color to head	
	ctx.fillStyle = getColorHead(ctx.fillStyle);
	ctx.fillRect(posX, posY, width, height);

	var colorFont = typeStyle._colorFont;
	ctx.fillStyle = colorFont;

	posX = posX + MarginX;
	var posXText = posX;

	//Adjust position for arabian language
	if (_isRtlLanguaje)
	{
		posXText = posX + width - (2 * MarginX);
	}

	width = width - 15;//10 margen left 5 margen right

	//write name
	if(writeID==true){
		//write only name
		
		//get item name
		var item = getItem('ID',typeStyle._listItem);
		var typeWriter = '';
		if (item['_bold'] == true) {
			typeWriter = 'bold ';
		}
		if (item['_italic'] == true) {
			if (typeWriter == 'bold ') {
				typeWriter = 'italic bold ';
			} else {
				typeWriter = 'italic ';
			}
		}
		ctx.font = typeWriter + 14 + "px Segoe UI";
		ctx.fillText(getText(text[1], width), posXText, posY+ M4_STEP_Y);
	}
	
	
	//get item name
	var item = getItem('Name',typeStyle._listItem);
	var typeWriter = '';
	if (item['_bold'] == true) {
		typeWriter = 'bold ';
	}
	if (item['_italic'] == true) {
		if (typeWriter == 'bold ') {
			typeWriter = 'italic bold ';
		} else {
			typeWriter = 'italic ';
		}
	}
	ctx.font = typeWriter + 14 + "px Segoe UI";
	if(writeID==true){
		ctx.fillText(getText(text[0],width), posXText, posY+M4_STEP_Y+M4_STEP_Y);
	}else{
		ctx.fillText(getText(text[0],width), posXText, posY+ M4_STEP_Y);
	}
	 
	ctx.lineWidth=0.5;
	ctx.moveTo(posX-9,posY+height);
	ctx.lineTo(posX+5+width,posY+height);
	ctx.strokeStyle = "#000000";
	ctx.stroke();
	ctx.moveTo(posX-9,posY+height+1);
	ctx.lineTo(posX+5+width,posY+height+1);
	ctx.strokeStyle = "#FFFFFF";
	ctx.stroke();
}
*/

/**
 * Function to check if item is part of head
 * @param item
 */
function isItemHead(item){
	if((item == 'WUID')|| (item == 'VacancyID') || (item =='Id')|| (item =='NameWU') || (item == 'ResponsibleID') || (item == 'ResponsibleName')
			|| (item =='VacancyName') || (item =='Name')|| (item =='Photo')){
		return true;
	}else{
		return false;
	}
}

/**
 * Function to check if item is part of head
 * @param item
 */
function isCheckPhoto(listItem){
	for(var item in listItem){
		if(listItem[item]._item=='Photo'){
			if(listItem[item]._check==true){
				return true;
			}else{
				return false;
			}
		}
	}
	return false;
}

/**
 * Function to get text of group nodes
 * @param node
 */
function getTextGroupedNode(node){
	var arrayText= {};
	var pos=0;
	if(node.data['Name:-1']){
		arrayText[pos]=node.data['Name:-1'];
		pos= pos+1;
	}
	for(var item in node.data){
		if(getNameItem(item)=='Name' || getNameItem(item)=='VacancyName'){
			if(item!='Name:-1'){
				arrayText[pos]=node.data[item];
				pos= pos+1;
			}
		}
	}
	return arrayText;
}

function paintFoot(posX, posY, width, height, ctx, typeStyle, node, color) {
	
	// Diagrama de posici�n, luego la caja es de Posiciones, no tiene pie
	if (_configStyle[3]=="3")
	{
		return;
	} 

	//Change color to head	
	ctx.fillStyle = getColorHead(color, 0.13); 
	ctx.fillRect(parseInt(posX), parseInt(posY)+0.5, width, parseInt(height));

	var colorFont = typeStyle._colorFont;
	ctx.fillStyle = colorFont;

	var bWriteID = (getItem('ID',typeStyle._listItem)._check==true);
	
	var sID_wu = "(" + node.data['WUID'] + ") ";
	var sName_wu = node.data['NameWU'];

	// Para centrar el pie, al ancho de �ste le quitamos los m�rgenes izquierdo y derecho M4_MARGIN_X/2
	var newWidth = width - M4_MARGIN_X;

	//write name
	if(bWriteID==true){
		var typeWriter = getTypeWritter('ID', typeStyle);
		ctx.font = typeWriter + M4_FONT_SIZE + "px " + M4_FONT_LABEL;

		// �Entra todo?
		var swholeText = sID_wu + sName_wu;
		var stest = getText(swholeText, newWidth);

		if (stest != swholeText)
		{
			// No entra
			sName_wu = stest.substring(stest.indexOf(")") + 2, stest.length);
		}

		if (_isRtlLanguaje){
			//Ojo centramos sobre el ancho de la caja real..
			posX = posX + (width / 2) + (getSizetext(stest) / 2);
			paitAttribute(posX, posY + 16, 'ID', sID_wu, typeStyle, ctx);
			posX = posX - getSizetext(sID_wu);
		} else {
			//Ojo centramos sobre el ancho de la caja real..
			posX = posX + (width / 2) - (getSizetext(stest) / 2);
			paitAttribute(posX, posY + 16, 'ID', sID_wu, typeStyle, ctx);
			posX = posX + getSizetext(sID_wu);
		}

	} else {
		sName_wu = getText(sName_wu, newWidth);
		if (_isRtlLanguaje){
			posX = posX + (width / 2) + (getSizetext(sName_wu) / 2);
		}
		else {
			posX = posX + (width / 2) - (getSizetext(sName_wu) / 2);
		}
	}
	
	paitAttribute(posX, posY + 16, 'Name', sName_wu, typeStyle, ctx);
}

/**
 * Function to paint body of node
 * @param posX
 * @param posY
 * @param width
 * @param height
 * @param ctx
 * @param typeStyle
 * @param paintPhoto
 * @param node
 * @returns {Number}
 */
function paintBody(posX, posY,width,height, ctx, typeStyle,node, color) {
	var heightFoot = 25;

	if (node.type==TYPE_WU)
	{
		//Pintamos antes el pie
		paintFoot(posX, posY + height - heightFoot , width, heightFoot, ctx, typeStyle, node, color);
		height = height - heightFoot;
	}

	// Recortamos el height, para que los "..." entren dentro de la caja..
	height = height - 25;

	if (height < 0)
	{
		height = 0;
		return;
	}

	//Adjust position for arabian language
	if (_isRtlLanguaje)
	{
		posX = posX + width - M4_MARGIN_X;
	} else {
		// Caso normal
		posX = posX + M4_MARGIN_X;
	}

	width = width - 15; //10 margen left 5 margen right
	
	var colorFont = typeStyle._colorFont;
	ctx.fillStyle = colorFont;
	
	var posTextY= posY+ M4_STEP_Y;
	var listItem= typeStyle._listItem;

	if(isGroup(node)){
		var arrayText= getTextGroupedNode(node);
		var first=true;
		for(var text in arrayText){
			if(posTextY<posY+height){
				if(first==true && $("#groupEmployeesByPost").is(':checked')){
					//ctx.font = 'bold 12' + "px Microsoft Sans Serif";
					ctx.font =  'bold  ' + (M4_FONT_SIZE-1) +  "px " + M4_FONT_LABEL;
					first=false;
				}else{
					//ctx.font = '11' + "px Microsoft Sans Serif";
					ctx.font =   (M4_FONT_SIZE-1) +  "px " + M4_FONT_LABEL;
				}
				ctx.fillText(getText(arrayText[text],width), posX, posTextY);
				posTextY= posTextY + M4_STEP_Y;
			}else{
				ctx.fillText('.......', posX, posTextY);
				return 0;
			}
		}
	}else{
		for(var item in listItem){
			if(!isItemHead(listItem[item]._item)){
				if(listItem[item]._check==true){
					if(posTextY<posY+height){
						if (AllowPaintAttribute(typeStyle, listItem[item]))
						{
							if(node.data[listItem[item]._item]){

								var typeWriter = getTypeWritterByItem(listItem[item]);
								
								//ctx.font = typeWriter + 11 + "px Microsoft Sans Serif";
								ctx.font = typeWriter + (M4_FONT_SIZE-1) +  "px " + M4_FONT_LABEL;
								ctx.fillText(getText(node.data[listItem[item]._item],width), posX, posTextY);
								
								//paitAttribute(posX,posTextY, 'Name', getText(node.data[listItem[item]._item], width), typeStyle, ctx, M4_FONT_SIZE-1);
								posTextY= posTextY + M4_STEP_Y;
							}
						}
					}else{
						ctx.fillText('     ...', posX, posTextY);
						return 0;
					}
				}
			}
		}	
	}
}

/* OLD
function paintBody(posX, posY,width,height, ctx, typeStyle,paintPhoto,node) {
	var MarginX = 10;

	if(paintPhoto==false || isGroup(node)){

		//Adjust position for arabian language
		if (_isRtlLanguaje)
		{
			posX = posX + width - MarginX;
		} else {
			// Caso normal
			posX = posX + MarginX;
		}

		width = width - 15; //10 margen left 5 margen right

	}else{
		var posPhotoInc=8; //14;
		var sizePhoto = width * 0.33;
		if (sizePhoto + 14 > height){
			sizePhoto = height; //-4;
			posPhotoInc = 4;
		}
		
		var posXImg;
		posX = posX + MarginX;

		//Adjust position for arabian language
		if (_isRtlLanguaje)
		{
			posXImg = posX + width - (2 * MarginX) - sizePhoto;
			posX = posXImg - 5;
		} else {
			// Caso normal
			posXImg = posX;
			posX = posXImg + sizePhoto + 5;
		}

		width = width - (2 * MarginX) - sizePhoto; 

		//Drawn photo!
		var img = new Image();
		img.id = node.id;

		if ((node.data['Photo'] == 'unknownPhoto')||!node.data['Photo']) {
			img.src =  _AbsolutePathTemplate+'images/unknown.png';
		} else {
			img.src = node.data['Photo'];
		}

		if(img.complete==true ||m4CanvasSupport==false){
			ctx.drawImage(img, posXImg, posY+posPhotoInc, sizePhoto,sizePhoto);
		}else{
			img.onload = function(){
				// execute drawImage statements here
				ctx.drawImage(img, posXImg, posY+posPhotoInc, sizePhoto,sizePhoto);
			};
		}
	}
	
	var colorFont = typeStyle._colorFont;
	ctx.fillStyle = colorFont;
	
	var posTextY= posY+14;
	var listItem= typeStyle._listItem;

	if(isGroup(node)){
		var arrayText= getTextGroupedNode(node);
		var first=true;
		for(var text in arrayText){
			if(posTextY<posY+height){
				if(first==true && $("#groupEmployeesByPost").is(':checked')){
					ctx.font = 'bold 12' + "px Microsoft Sans Serif";
					first=false;
				}else{
					ctx.font = '11' + "px Microsoft Sans Serif";
				}
				ctx.fillText(getText(arrayText[text],width), posX, posTextY);
				posTextY= posTextY+14;
			}else{
				ctx.fillText('.......', posX, posTextY);
				return 0;
			}
		}
	}else{
		for(var item in listItem){
			if(!isItemHead(listItem[item]._item)){
				if(listItem[item]._check==true){
					if(posTextY<posY+height){
						if(node.data[listItem[item]._item]){
							var typeWriter = '';
							if (listItem[item]._bold == true) {
								typeWriter = 'bold ';
							}
							if (listItem[item]._italic == true) {
								if (typeWriter == 'bold ') {
									typeWriter = 'italic bold ';
								} else {
									typeWriter = 'italic ';
								}
							}
							
							ctx.font = typeWriter + 11 + "px Microsoft Sans Serif";
							ctx.fillText(getText(node.data[listItem[item]._item],width), posX, posTextY);
							posTextY= posTextY+14;
						}
					}else{
						ctx.fillText('     ...', posX, posTextY);
						return 0;
					}
				}
			}
		}	
	}
}

*/

//nota: hay que factorizar esta funci�n con WRITETEXT
function getHeighHead(node) {

	// get Id typeStyle of node
	var idType = findIdType(node);

	// get typeStyle of node
	var typeStyle = getTypeStyle(idType);

	// get typeStyle of node
	var typeStyle = getTypeStyle(idType);

	// get color
	var color = getValueAttribute(typeStyle, ATTR_COLOR);

	var bpaintPhoto = (getItem('Photo',typeStyle._listItem)._check==true && !isGroup(node));
	var bpaintHead = (!isNodeGroupEmployee(node) && !isNodeGroupVacancy(node));

	//var bWriteID = (getItem('ResponsibleID', typeStyle._listItem)._check==true);
	var heightHead = 0;

	if (_typeZoom== TYPE_ZOOM_NORMAL || (isGroup(node) && _typeZoom!= TYPE_ZOOM_NOTHING)) {
		if (bpaintHead) {
			if (bpaintPhoto)
			{
				heightHead = M4_SIZE_FOTO_NORMALZOOM + 2;
			} else {
				heightHead=45; 
			}
		}
	/*
	}else if (_typeZoom == TYPE_ZOOM_PORTRAIT) {
		if (bpaintHead) {
			//Acciones
			heightHead += (M4_MARGIN_X/2) + 16;

			//Photo
			if (bpaintPhoto)
			{
				heightHead += _st.graph.Node.width;
			}

			//Name
			heightHead += M4_STEP_Y;

			//ID
			if (bWriteID)
			{
				heightHead += M4_STEP_Y;
			}

			//Margin inferior
			heightHead += (M4_STEP_Y / 2);
		}
		*/
/*	} else if (_typeZoom == TYPE_ZOOM_HEAD_PHOTO) {
		heightHead = _st.graph.Node.height;
	}else if (_typeZoom== TYPE_ZOOM_PHOTO  && isCheckPhoto(typeStyle._listItem)) {
		heightHead = _st.graph.Node.height;*/

	}else {
		heightHead = _st.graph.Node.height;
	}


	return heightHead;
}

/**
* Paint only the photo
*/
function paintPhoto(ctx, posXImg, posYImg, sizePhoto, node)
{
	if (!_bShowPhotoWhileLoadingOrgChart || !_bShowPhotoForAfterComputingEfect)
	{
		return; 
	}	

	//paint only  photo!
	var img = new Image();
	img.id = node.id;
	var src;

	if(node.data['Photo']){
		if ((node.data['Photo'] == 'unknownPhoto')||!node.data['Photo']) {
			src =  _AbsolutePathTemplate+'images/user.svg';
		} else {
			src = node.data['Photo'];
		}
	} else {
		src =  _AbsolutePathTemplate+'images/user.svg';
	}

	var prefix = '';

	if (_DEBUG_FF) {
		if (src.indexOf(':/', 0) > 0) {
			if (m4Browser.name.toUpperCase() =="FIREFOX") {				
				prefix = 'file://';
			}
		}
	}
	
	//Bug 0323807 IE 11 necesita que la definición del onload esté antes que la asignación de la imagen (no pasa con IE10 o IE9)
	if (m4Browser.name.toUpperCase() !== "IE") {
		img.src = prefix + src;			
	}

	if(img.complete==true || m4CanvasSupport==false){
		ctx.drawImage(img, posXImg, parseInt(posYImg)-0.5 , sizePhoto, sizePhoto);
	}else{
		img.onload = function(){
			// execute drawImage statements here
			ctx.drawImage(img, posXImg, parseInt(posYImg)-0.5, sizePhoto, sizePhoto);
		};
	}

	//Bug 0323807 IE 11 necesita que la definición del onload esté antes que la asignación de la imagen (no pasa con IE10 o IE9)
	if (m4Browser.name.toUpperCase() === "IE") {
		img.src = prefix + src;
	}
}

/**
* Function to write the text of each rectangle
* 
* @param node,
*            rectangle that stores the text to write
* @param posX,
*            position of rectangle
* @param posY,
*            position of rectangle
*/
function writeText(posNodeX, posNodeY, ctx, node) {

	//Empezamos desde la esquina superior izq.
	var posX=posNodeX-_st.graph.Node.width / 2;
	var posY=posNodeY-_st.graph.Node.height / 2;

	// get Id typeStyle of node
	var idType = findIdType(node);

	// get typeStyle of node
	var typeStyle = getTypeStyle(idType);

	// get typeStyle of node
	var typeStyle = getTypeStyle(idType);

	// get color
	var color = getValueAttribute(typeStyle, ATTR_COLOR);

	var bpaintPhoto = (getItem('Photo',typeStyle._listItem)._check==true && !isGroup(node));
	var bpaintHead = (!isNodeGroupEmployee(node) && !isNodeGroupVacancy(node));

	var heightHead = getHeighHead(node);
	var heightBody = _st.graph.Node.height- heightHead; 

	if (_typeZoom== TYPE_ZOOM_NORMAL || (isGroup(node) && _typeZoom!= TYPE_ZOOM_NOTHING)) {
		_activateTooltip=false;

		if (bpaintHead) {
			paintHead(posX,posY,_st.graph.Node.width,heightHead,ctx,typeStyle, bpaintPhoto, node);
		}

		//paint text body
		paintBody(posX,posY+heightHead,_st.graph.Node.width,heightBody,ctx,typeStyle,node, color);
	}
	/*
	else if (_typeZoom == TYPE_ZOOM_PORTRAIT) {
		_activateTooltip=false;

		if (bpaintHead) {
			heightBody = _st.graph.Node.height- heightHead; 
			paintHead(posX,posY,_st.graph.Node.width,heightHead,ctx,typeStyle,bWriteID,text, bpaintPhoto, node);
		}

		//paint text body
		paintBody(posX,posY+heightHead,_st.graph.Node.width,heightBody,ctx,typeStyle,node, color);

	}*/ 
	else if (_typeZoom== TYPE_ZOOM_HEAD_PHOTO) {
		_activateTooltip=false;

		if (bpaintHead) {
			paintHead(posX,posY,_st.graph.Node.width,heightHead,ctx,typeStyle, bpaintPhoto, node);
		}

	}else if (_typeZoom== TYPE_ZOOM_PHOTO  && isCheckPhoto(typeStyle._listItem)) {
		var sizePhoto;
		if(_st.graph.Node.width >_st.graph.Node.height){
			sizePhoto= _st.graph.Node.height*0.85;
		}else{
			sizePhoto= _st.graph.Node.width*0.85;
		}

		//Paint a photo centered in the node
		paintPhoto(ctx, posX+(_st.graph.Node.width-sizePhoto)/2, posY+(_st.graph.Node.height-sizePhoto)/2, sizePhoto, node);
	
		_activateTooltip=true;
	}else{
		/*
		var posAction = {
			posXImg : 0,
			posYImg : 0,
			posXLit : 0,
			posYLit : 0,
			bShowImg : false,
			bShowLit: false
		}
	
		paintActions(posX, posY, _st.graph.Node.width, _st.graph.Node.height, ctx, node,typeStyle, posAction);
		*/
		_activateTooltip=true;
	}

	// deactivateHotControls($jit.id('escalado').checked);
	return 0;
}

/* OLD
function writeText(posNodeX, posNodeY, ctx, node) {

	//Empezamos desde la esquina superior izq.
	var posX=posNodeX-_st.graph.Node.width / 2;
	var posY=posNodeY-_st.graph.Node.height / 2;

	// get Id typeStyle of node
	var idType = findIdType(node);

	// get typeStyle of node
	var typeStyle = getTypeStyle(idType);

	//paint triangle
	if (node.type!= TYPE_FUNTCIONAL_DEPENDENCY){
		if (_isRtlLanguaje)
		{
			paintTriangle(posX+2, posY + _st.graph.Node.height-2,ctx,typeStyle._colorFont, true);
		} else {
			// Normal code
			paintTriangle(posX+_st.graph.Node.width -12 ,posY + _st.graph.Node.height-2,ctx,typeStyle._colorFont, false);
		}
	}

	if (_typeZoom== TYPE_ZOOM_NORMAL || (isGroup(node) && _typeZoom!= TYPE_ZOOM_NOTHING)) {
		_activateTooltip=false;
		var heightHead;
		var heightBody;    
		//height head if check ID = 40 px else 20 px
		if(getItem('ID',typeStyle._listItem)._check==true){
			if (!isNodeGroupEmployee(node) && !isNodeGroupVacancy(node)) {
				heightHead=45;
			}else{
				heightHead=0;
			}
			//rest 15 for zone button
			heightBody= _st.graph.Node.height- heightHead-15;
			var text= getTextHead(node,true);  
			if (!isNodeGroupEmployee(node) && !isNodeGroupVacancy(node)) {
				paintHead(posX,posY,_st.graph.Node.width,heightHead,ctx,typeStyle,true,text);
			};
		}else{
			if (!isNodeGroupEmployee(node) && !isNodeGroupVacancy(node)) {
				heightHead=25;
			}else{
				heightHead=0;
			}
			//rest 15 for zone button
			heightBody= _st.graph.Node.height- heightHead-15;
			var text= getTextHead(node,false);
			if (!isNodeGroupEmployee(node) && !isNodeGroupVacancy(node)) {
				paintHead(posX,posY,_st.graph.Node.width,heightHead,ctx,typeStyle,false,text);
			}
		}

		//paint text body
		if(getItem('Photo',typeStyle._listItem)._check==true){
			paintBody(posX,posY+heightHead,_st.graph.Node.width,heightBody,ctx,typeStyle,true,node);
		}else{
			paintBody(posX,posY+heightHead,_st.graph.Node.width,heightBody,ctx,typeStyle,false,node);
		} 
	} else if (_typeZoom== TYPE_ZOOM_HEAD_PHOTO) {
		_activateTooltip=false;

		//paint photo and head with name
		heightHead=25;
		var text= getTextHead(node,false);
		if (!isNodeGroupEmployee(node) && !isNodeGroupVacancy(node)) {
			  paintHead(posX,posY,_st.graph.Node.width,heightHead,ctx,typeStyle,false,text);
		}
		if(isCheckPhoto(typeStyle._listItem)){
			if(node.data['Photo']){
				//Drawn photo!
				var img = new Image();
				img.id = node.id;
				if ((node.data['Photo'] == 'unknownPhoto')||!node.data['Photo']) {
					img.src =  _AbsolutePathTemplate+'images/unknown.png';
				} else {
					img.src = node.data['Photo'];
				}

				var sizePhoto= _st.graph.Node.height-25-4;  //-4;

				if(img.complete==true ||m4CanvasSupport==false){
					ctx.drawImage(img, posX+(_st.graph.Node.width-sizePhoto)/2,posY+25+2, sizePhoto,sizePhoto);
				}else{
					img.onload = function(){
						// execute drawImage statements here
						ctx.drawImage(img, posX+(_st.graph.Node.width-sizePhoto)/2,posY+25+2, sizePhoto,sizePhoto);
					};
				}
			}else{
				//Drawn photo!
				var img = new Image();
				img.id = node.id;
				img.src =  _AbsolutePathTemplate+'images/unknown.png';
				var sizePhoto= _st.graph.Node.height-25-4;
				if(img.complete==true ||m4CanvasSupport==false){
					ctx.drawImage(img, posX+(_st.graph.Node.width-sizePhoto)/2,posY+25+2, sizePhoto,sizePhoto);
				}else{
					img.onload = function(){
						// execute drawImage statements here
						ctx.drawImage(img, posX+(_st.graph.Node.width-sizePhoto)/2,posY+25+2, sizePhoto,sizePhoto);
					};
				}
			}
		}
	}else if (_typeZoom== TYPE_ZOOM_PHOTO  && isCheckPhoto(typeStyle._listItem)) {
		if(node.data['Photo']){
			//paint only  photo!
			var img = new Image();
			img.id = node.id;
			if ((node.data['Photo'] == 'unknownPhoto')||!node.data['Photo']) {
				img.src =  _AbsolutePathTemplate+'images/unknown.png';
			} else {
				img.src = node.data['Photo'];
			}

			var sizePhoto;
			if(_st.graph.Node.width >_st.graph.Node.height){
				sizePhoto= _st.graph.Node.height*0.75;
			}else{
				sizePhoto= _st.graph.Node.width*0.75;
			}

			if(img.complete==true ||m4CanvasSupport==false){
				ctx.drawImage(img, posX+(_st.graph.Node.width-sizePhoto)/2,posY+(_st.graph.Node.height-sizePhoto)/2, sizePhoto,sizePhoto);
			}else{
				img.onload = function(){
					// execute drawImage statements here
					ctx.drawImage(img, posX+(_st.graph.Node.width-sizePhoto)/2,posY+(_st.graph.Node.height-sizePhoto)/2, sizePhoto,sizePhoto);
				};
			}
			_activateTooltip=true;
		}else{
			//paint only  photo!
			var img = new Image();
			img.id = node.id;
			img.src =  _AbsolutePathTemplate+'images/unknown.png';
		
			var sizePhoto;
			if(_st.graph.Node.width >_st.graph.Node.height){
				sizePhoto= _st.graph.Node.height*0.75;
			}else{
				sizePhoto= _st.graph.Node.width*0.75;
			}

			if(img.complete==true ||m4CanvasSupport==false){
				ctx.drawImage(img, posX+(_st.graph.Node.width-sizePhoto)/2,posY+(_st.graph.Node.height-sizePhoto)/2, sizePhoto,sizePhoto);
			}else{
				img.onload = function(){
					 // execute drawImage statements here
					ctx.drawImage(img, posX+(_st.graph.Node.width-sizePhoto)/2,posY+(_st.graph.Node.height-sizePhoto)/2, sizePhoto,sizePhoto);
				};
			}
			_activateTooltip=true;
		}
	}else{
		_activateTooltip=true;
	}

	return 0;
}

*/
function showPrintMenu(){

	// Si estamos visualizando el Lienzo, pasamos a imprimirlo directamente, sin mostrar opciones de impresión
	if (_propertyBag.activated_WysIwyg_print) {
		var verLienzo = $jit.id('verLienzo');
		if (verLienzo.checked) {
			printOrgChartLienzo();
			return;
		}
	}

	// Impresión mostrando opciones de impresión
		// Si estamos en FFOX, mostramos el warning de impresi�n
		if (m4Browser.name.toUpperCase() =="FIREFOX")
		{
			$jit.id("ffoximpwarning").style.display='inline-block';
		}

		$jit.id('chkPrintRealPositionNodes').style.display = (_hasMoveNode ? '' : 'none');

		doControlPrintRealPositions();
		$jit.id('printMenu').style.display='block';
		$jit.id('fade').style.display='block';
		setImagePreview();
		hideContextMenu();
}

function showSaveMenu(){
	if (_propertyBag.essMode === false){
		if (_propertyBag.saveStyleByOrg === true){
			_bSavingESSDefaultStyle = false;
			_bSavedESSPositionStyle = false;
			$jit.id('textNameStyle').value = "ESS_STYLE_BY_ORG";
			$jit.id('textIdStyle').value = "ESS_STYLE_BY_ORG";
			sendStyle();
		}else{
			$jit.id('saveMenu').style.display='block';
			$jit.id('fade').style.display='block';
			hideContextMenu();
		}
	}else{
		// En Rich, siempre false
		// En ESS, grabamos directamente el Estilo por defecto si no se han movido nodos, sino, se grabar� primero el Estilo para la WU y a continuaci�n se preguntar� si se quiere grabar el estilo del usuario				
		_bSavingESSDefaultStyle = (_propertyBag.essMode ? !_hasMoveNode : false);
		_bSavedESSPositionStyle = false;
		sendStyle();
	}	
}


function closePrintMenu(){
	$jit.id('printMenu').style.display='none';
	$jit.id('fade').style.display='none';
}
function closeSaveMenu(){
	$jit.id('saveMenu').style.display='none';
	$jit.id('fade').style.display='none';
}


function getTipNode(node){
	
	var tip="";
	// get Id typeStyle of node
	var idType = findIdType(node);
	// get typeStyle of node
	var typeStyle = getTypeStyle(idType);
	var listItem = typeStyle._listItem;    

	for (var item in listItem) {
		for (var j in node.data) {
			// Get name item
			var nameItem = getNameItem(j);
			// If item is in listItem
			if (nameItem == listItem[item]['_item']) {
				// Check that is checked item to show
				if (listItem[item]['_check'] == true) {// write text only is
					if(listItem[item]['_item']!='Photo' ) { 
						tip=tip+ "<div>" +"<label style=\"color:#6e6e6e;height:40px;\">"+ listItem[item]['_name']+': </label>'+node.data[j]; + "</div>";
					} else{
						if (node.data[j] == 'unknownPhoto')
						{
							tip=tip+"<br><br><img src=\""+ _AbsolutePathTemplate+'images/user.svg' + "\" >";
						} else 
						{
							tip=tip+"<br><br><img src=\""+ node.data[j]+"\" >";
						}
					}
				}
			}
		}
	}
	return tip;
}


/**
* Function to get size of one text that previous was saved
* 
* @param text
*/
function getSizetext(text) {
	
	if (_sizeText[text]) {
		return _sizeText[text];
	} else {
		var ctx= _st.canvas.getCtx();
		var size= ctx.measureText(text).width;
		_sizeText[text]=size;
		return size;
	}
}

/**
* Function to get name of item. Is used because if children are grouped his
* data.name is 'data.name:X' where X is number of child
*/
function getNameItem(name) {

	// Get position of character ' : '
	var pos = name.indexOf(':', 0);
	var result = '';
	// If postion is -1, don't have this character
	if (pos == -1) {
		result = name;
	} else {
		// return name until character ' : '
		result = name.substring(0, pos);
	}
	return result;
}

/**
* Function used to calculate the number of names that had in a box of grouping
* of employees
*/
function getNumNameEmployees(data) {
	var result = 0;
	for (var i in data) {
		// If data is same that 'Name' is a employee
		if (getNameItem(i) == 'Name' || getNameItem(i) == 'VacancyName') {
			result = result + 1;
		}
	}

	return result;
}

// ************ END FUNCTION TO WRITE TEXT*************

// ********** FUNCTIONS FOR CONTROL THE ELEMENTS OF THE SITE WEB THAT ALLOW YOU
// TO INTERACT

/**
* FUnction to hide/show panel left
*/
function hidePanelLeft() {
	/*
    var panel = $jit.id('left-container');   
    //show/hide botons    
    $jit.id('buttonHidePanelLeft').style.display = 'none';
    panel.style.display = 'none';

    var container = $jit.id('center-container');
	container.style.borderLeftStyle="none";

    var leftContainer = $jit.id('left-container');        
	
    //guardamos desplazamiento
    var despX = _st.canvas.canvases[0].translateOffsetX;
    var despY = _st.canvas.canvases[0].translateOffsetY  - 120;

    leftContainer.style.width = '0%';
    container.style.width = '100%';
    container.style.left = '0%';
    _st.canvas.resize(_st.canvas.canvases[0].size.width * 1.25, _st.canvas.canvases[0].size.height);

    //transalete
    _st.canvas.translate(despX, despY, false);
    
    
    //show map
    $jit.id('controlMaps').style.display='none';
    $jit.id('buttonShowConfig2').style.backgroundColor= '';
    $jit.id('buttonShowMap').style.backgroundColor= '';
    
    $jit.id('controlPanelLeft').style.display='';
    $jit.id('controlPanelLeft2').style.display='block';
    $jit.id('buttonShowMap2').style.left='1%';
    $jit.id('buttonShowConfig2').style.left='1%';
    $jit.id('buttonHidePanelLeft2').style.display='none';
    
    $jit.id('dateLabel2').style.left='1%';
    m4SetSizetables('all');
*/

/** REORDENAMOS LA FUNCI�N */

/*	if (_initializing_Org)
	{
		return;
	}

	var leftContainer = $jit.id('left-container');
	leftContainer.style.display = 'none';
	leftContainer.style.width = '0%';

	$jit.id('controlMaps').style.display='none';
	$jit.id('controlPanelLeft').style.display='';
	
	//show/hide botons    
	$jit.id('buttonHidePanelLeft').style.display = 'none';

	var infovis = $jit.id('infovis');
	infovis.style.width = '100%';
	infovis.style.left = '0%';

	m4SetSizetables('all');

	//guardamos desplazamiento
	var despX = _st.canvas.canvases[0].translateOffsetX;
	var despY = _st.canvas.canvases[0].translateOffsetY; 
	_st.canvas.resize(_st.canvas.canvases[0].size.width * 1.25, _st.canvas.canvases[0].size.height);

	//translate
	_st.canvas.translate(despX , despY, false);   */
}


/**
 * Function to show menu config orgchart
 */
/*function showMenuConfig(){
	if (_initializing_Org)
	{
		return;
	}

	var menu = $jit.id('menu'); 
	var maps = $jit.id('controlMaps'); 

	//if we are see maps
	if( maps.style.display=='block'){
		maps.style.display='none';
		menu.style.display='block';
	}

	if (jQuery('#left-container').css('display') == 'none'){
		var leftContainer = $jit.id('left-container'); 
		leftContainer.style.display='block';
		leftContainer.style.width = '20%';

		//we are with panel left hide
		//show/hide botons
		$jit.id('buttonHidePanelLeft').style.display = 'block';
		menu.style.display = 'block';

		$jit.id('infovis').style.width = '80%';

		//guardamos desplazamiento
		var despX = _st.canvas.canvases[0].translateOffsetX;
		var despY = _st.canvas.canvases[0].translateOffsetY;

		_st.canvas.resize(_st.canvas.canvases[0].size.width / 1.25, _st.canvas.canvases[0].size.height);

		//transalete
		_st.canvas.translate(despX, despY, false);
	}
	
	m4SetSizetables('static');
}*/

/**
 * Function to show miniMap and treeWU
 */
/*
function showMap(){
	if (_initializing_Org)
	{
		return;
	}

	var menu = $jit.id('menu'); 
	var maps = $jit.id('controlMaps'); 

	//if we are see maps
	if( menu.style.display=='block'){
		menu.style.display='none';
		maps.style.display='block';
	}

	if (jQuery('#left-container').css('display') == 'none'){
		var leftContainer = $jit.id('left-container');
		leftContainer.style.display='block';
		leftContainer.style.width = '20%';

		//we are with panel left hide
		//show/hide botons
		$jit.id('buttonHidePanelLeft').style.display = 'block';
		maps.style.display = 'block';

		$jit.id('infovis').style.width = '80%';

		//guardamos desplazamiento
		var despX = _st.canvas.canvases[0].translateOffsetX;
		var despY = _st.canvas.canvases[0].translateOffsetY;

		_st.canvas.resize(_st.canvas.canvases[0].size.width / 1.25, _st.canvas.canvases[0].size.height);

		//transalete
		_st.canvas.translate(despX, despY, false);
	}
	
	m4SetSizetables(); //'dynamic');
}
*/

/**
 * Function to show/hide miniMap and treeWU
 */
function controlPanelLeft(){
	if (_initializing_Org)
	{
		return;
	}

	var menu = $jit.id('menu'); 
	var maps = $jit.id('controlMaps'); 
	

	jQuery('#left-container').toggleClass('m4-closePanelLeft');
	jQuery('#buttonHidePanelLeft').toggleClass('rotate');
	jQuery('#buttonHidePanelRight').toggleClass('rotate');

	if (!jQuery('#left-container').hasClass('m4-closePanelLeft')){

		//we are with panel left hide
		//show/hide botons
		$jit.id('buttonHidePanelLeft').style.display = 'block';
		maps.style.display = 'block';

		$jit.id('infovis').style.width = '81.8%';
/*
		//guardamos desplazamiento
		var despX = _st.canvas.canvases[0].translateOffsetX;
		var despY = _st.canvas.canvases[0].translateOffsetY;

		//_canCompute = !_hasMoveNode;
		_st.canvas.resize(_st.canvas.canvases[0].size.width / 1.25, _st.canvas.canvases[0].size.height);

		//transalete		
		_st.canvas.translate(despX, despY, false, true);		
		//_canCompute = true;
		*/
	}else{

		var infovis = $jit.id('infovis');
		infovis.style.width = '100%';
		infovis.style.left = '0%';

		m4SetSizetables(); //'all');
/*
		//guardamos desplazamiento		
		var despX = _st.canvas.canvases[0].translateOffsetX;
		var despY = _st.canvas.canvases[0].translateOffsetY; 

		//_canCompute = _hasMoveNode;
		_st.canvas.resize(_st.canvas.canvases[0].size.width * 1.25, _st.canvas.canvases[0].size.height);

		//translate		
		_st.canvas.translate(despX , despY, false, true);		
		//_canCompute = true;
		*/
	}
	
	m4SetSizetables(); //'dynamic');
}

/**
 * Function to show menu config orgchart
 */
function showMenuConfig(){
	if (_initializing_Org)
	{
		return;
	}

	var menu = $jit.id('menu');
	var menuConfig = jQuery('#menuConfig');

	// Si estamos ejecutando en SM, la animaci�n en Chromium necesita de 8 segundos.. la eliminamos de momento
	if (_propertyBag.essMode == false)
	{
		if(menuConfig.hasClass('animation')){
			menuConfig.removeClass('animation');
		}
	}

	menu.style.display = "block";
	menuConfig.toggleClass('m4-closePanelRight');

	if(menuConfig.hasClass('m4-closePanelRight')){
		hideColorPicker();
	}

	hideMenuConfig();
	
}


/**
 * Function to hide menuConfig if is open and the target of a click isn't the menuConfig box nor a descendant of it
*/
function hideMenuConfig(){
	$(document).mouseup(function (e){
	    var menuConfig = jQuery('#menuConfig');
	    var colorPicker = jQuery('#The_colorPicker');
	    var configButton = jQuery('#buttonShowConfig');
	    
	    if(!menuConfig.hasClass('m4-closePanelRight')){

	    	if (!menuConfig.is(e.target) && menuConfig.has(e.target).length === 0 
	    		&& !colorPicker.is(e.target) && colorPicker.has(e.target).length === 0
	    		&& !configButton.is(e.target) && configButton.has(e.target).length === 0){
	        	showMenuConfig();
	    	}

	    }
	});
	
}

/**
*  Function to expand TabsSubMenu inside the menuConfig box
*/
function expandOptions(optionID){

	jQuery('#' + optionID).toggleClass('m4-expandOptions');
	jQuery('#' + optionID + 'Arrow').toggleClass('rotate90');

}


/**
* Function to control select that switches to show levels
*/
function controlChangeLevel() {

	var levelsToShowSelect = $jit.id('selectLevel');
	$jit.util.addEvent(levelsToShowSelect, 'change', function () {
		updateControlChangeLevel();
	});
}

function updateControlChangeLevel(bRefresh){
	if (arguments.length == 0) {
		bRefresh = true;
	}

	var levelsToShowSelect=$jit.id('selectLevel');
	var levels=levelsToShowSelect.value;
	var numeros="0123456789";
	var num=true;
	for(var i=0; i<levels.length &&num==true; i++){
		if (numeros.indexOf(levels.charAt(i),0)==-1){
			num=false;
		}
	}
	if(levels.substring(0,1)=='0'){
		num=false;
	}
	if(num==true){
		_st.config.levelsToShow = levels;
	}else{
		levelsToShowSelect.value=_st.config.levelsToShow;
	}

	if (bRefresh){		
		_st.refresh();
	}
}

/**
* Function to control size X of all figures
*/
function controlSizeX(value) {
	_bControlSizeX = true;

	// change the width of the box default
	_st.graph.Node.width = value;

	// Update all styles (of all boxes' types)
	$jit.util.each(listStyles, function (typeStyle) {
		typeStyle._widthBox = value; 
	});

	if (_st.graph.Node.width > 120 && _st.graph.Node.height > 120) {
		_typeZoom=TYPE_ZOOM_NORMAL;
		/*
	}else if (_st.graph.Node.width > 80 && _st.graph.Node.height > 80) {
		_typeZoom=TYPE_ZOOM_PORTRAIT;*/
	}else if (_st.graph.Node.width > 65 && _st.graph.Node.height > 65) {
		_typeZoom=TYPE_ZOOM_HEAD_PHOTO;
	}else if (_st.graph.Node.width > 40 && _st.graph.Node.height > 40) {
		_typeZoom=TYPE_ZOOM_PHOTO;
	}else if (_st.graph.Node.width < 40 && _st.graph.Node.height < 40 ) {
		_typeZoom=TYPE_ZOOM_NOTHING;
	}

	_st.graph.eachNode(function (node) {
		if (_showDependencies) {
			if (typeof node.dependenciFuncional == 'object' && node.drawn) {
				node.setData('width', _st.graph.Node.width + _st.graph.Node.width * 0.6);
			}
		}
	});

	
	// Update label and size of node that have children associated  	
	_st.refresh();		

	// The false translation do not compute but paint photos
	_st.canvas.translate(0,0, false); 

	_bControlSizeX = false;
}

/**
* Function to control size Y of all figures
*/
function controlSizeY(value) {  
	_bControlSizeY = true;

	// change the highth of the box default
	_st.graph.Node.height = value;

	// Actualizamos todos los styles (de todas las cajas)
	$jit.util.each(listStyles, function (typeStyle) {
		typeStyle._heightBox = value; 
	});

	if (_st.graph.Node.width > 120 && _st.graph.Node.height > 120) {  //80
		_typeZoom=TYPE_ZOOM_NORMAL;
		/*
	}else if (_st.graph.Node.width > 80 && _st.graph.Node.height > 80) {
		_typeZoom=TYPE_ZOOM_PORTRAIT;*/
	}else if (_st.graph.Node.width > 65 && _st.graph.Node.height > 65) {
		_typeZoom=TYPE_ZOOM_HEAD_PHOTO;
	}else if (_st.graph.Node.width > 40 && _st.graph.Node.height > 40) {
		_typeZoom=TYPE_ZOOM_PHOTO;
	}else if (_st.graph.Node.width < 40 && _st.graph.Node.height < 40 ) {
		_typeZoom=TYPE_ZOOM_NOTHING;
	}

	_st.graph.eachNode(function (node) {
		if (_showDependencies) {
			if (typeof node.dependenciFuncional == 'object' && node.drawn) {
				node.setData('height', _st.graph.Node.height + _st.graph.Node.height * 1.2);
			}
		}
	});

	
	// Update label and size of node that have children associated  	
	_st.refresh();		

	// The false translation do not compute but paint photos
	_st.canvas.translate(0,0, false); 

	_bControlSizeY = false;
}


/**
* Function to zoom on the graph. Increase size
*/
function increaseSize(countZoom) {
		
	if(_proportionBox.oldWidth!=false &&_proportionBox.oldHeight!=false ){
		_st.graph.Node.width=_proportionBox.oldWidth;
		_st.graph.Node.height=_proportionBox.oldHeight;
		_proportionBox.oldWidth=false;
		_proportionBox.oldHeight=false;
	}
	
	var value= 50*countZoom;
	
	var changeW= _st.graph.Node.width + value;
	var changeH= _st.graph.Node.height + value;
	var increase=0;
	
	if(changeH>350 || changeW>350){
		if(changeH>changeW){
			increase=350-_st.graph.Node.height;
		}else{
			increase=350-_st.graph.Node.width;
		}
	}
	
	if(increase!=0){
		// DVBtoolbar var toolbarNode= $jit.id('toolbarNode');    
		// var top =parseInt(toolbarNode.style.top, 10);
		//toolbarNode.style.top=top+increase+'px';	  
		_st.graph.Node.width = _st.graph.Node.width +increase;
		_st.graph.Node.height = _st.graph.Node.height +increase;
		_sliderX.slider("option", "value", _st.graph.Node.width); 
		_sliderY.slider("option", "value", _st.graph.Node.height);	
		
	}else if (_st.graph.Node.width +value < 350 && _st.graph.Node.height+value < 350) {
		
		//var toolbarNode= $jit.id('toolbarNode');
		//var top =parseInt(toolbarNode.style.top, 10);
		//toolbarNode.style.top=top+value+'px';
		
		_st.graph.Node.width = _st.graph.Node.width +value;
		_st.graph.Node.height = _st.graph.Node.height +value;

		_sliderX.slider("option", "value", _st.graph.Node.width); 
		_sliderY.slider("option", "value", _st.graph.Node.height);	
	}
	
	if (_st.graph.Node.width > 120 && _st.graph.Node.height > 120) {
		_typeZoom=TYPE_ZOOM_NORMAL;		
		/*
	}else if (_st.graph.Node.width > 80 && _st.graph.Node.height > 80) {
		_typeZoom=TYPE_ZOOM_PORTRAIT;*/
	}else if (_st.graph.Node.width > 65 && _st.graph.Node.height > 65) {
		_typeZoom=TYPE_ZOOM_HEAD_PHOTO;
	}else if (_st.graph.Node.width > 40 && _st.graph.Node.height > 40) {
		_typeZoom=TYPE_ZOOM_PHOTO;
	}else if (_st.graph.Node.width < 40 && _st.graph.Node.height < 40 ) {
		_typeZoom=TYPE_ZOOM_NOTHING;
	}

}



/**
* Function to zoom on the graph. Decrease size
*/
function decreaseSize(countZoom) {
	
	var value= 50*countZoom*-1;
	
	var changeW= _st.graph.Node.width - value;
	var changeH= _st.graph.Node.height - value;
	var increase=0;
	
	if(changeH<30 || changeW<30){
		if(changeH<changeW){
			increase=_st.graph.Node.height-30;
		}else{
			increase=_st.graph.Node.width-30;
		}		
	}
	
	if(increase!=0){
		if(_proportionBox.oldWidth==false){
			_proportionBox.oldWidth=_st.graph.Node.width;
			_proportionBox.oldHeight=_st.graph.Node.height;	
		}
		_st.graph.Node.width = _st.graph.Node.width -increase;
		_st.graph.Node.height = _st.graph.Node.height -increase;
		_sliderX.slider("option", "value", _st.graph.Node.width); 
		_sliderY.slider("option", "value", _st.graph.Node.height);

		//var toolbarNode= $jit.id('toolbarNode');
		//var top =parseInt(toolbarNode.style.top, 10);
		//toolbarNode.style.top=top-increase+'px';
	}


	if (_st.graph.Node.width > 120 && _st.graph.Node.height > 120) {
		_typeZoom=TYPE_ZOOM_NORMAL;		 /*
	}else if (_st.graph.Node.width > 80 && _st.graph.Node.height > 80) {  //DVB nuevo
		_typeZoom=TYPE_ZOOM_PORTRAIT;*/
	}else if (_st.graph.Node.width > 65 && _st.graph.Node.height > 65) {
		_typeZoom=TYPE_ZOOM_HEAD_PHOTO;
	}else if (_st.graph.Node.width > 35 || _st.graph.Node.height > 35 && (_typeZoom!=TYPE_ZOOM_PHOTO &&_typeZoom!=TYPE_ZOOM_NOTHING) ) {
		 
		if(_proportionBox.oldWidth==false){
			_proportionBox.oldWidth=_st.graph.Node.width;
			_proportionBox.oldHeight=_st.graph.Node.height;
		}
		_st.graph.Node.width = 64;
		_st.graph.Node.height = 64;
		_typeZoom=TYPE_ZOOM_PHOTO;
	}else if (_st.graph.Node.width < 40 && _st.graph.Node.height < 40 ) {
		if(_proportionBox.oldWidth==false){
			_proportionBox.oldWidth=_st.graph.Node.width;
			_proportionBox.oldHeight=_st.graph.Node.height;
		}
		_typeZoom=TYPE_ZOOM_NOTHING;
	}

	if (_st.graph.Node.width > 30 && _st.graph.Node.height > 30) {
		if(increase==0){
			_st.graph.Node.width = _st.graph.Node.width -value;
			_st.graph.Node.height = _st.graph.Node.height -value;
		}

		_sliderX.slider("option", "value", _st.graph.Node.width); 
		_sliderY.slider("option", "value", _st.graph.Node.height);   

		//var toolbarNode= $jit.id('toolbarNode');
		//var top =parseInt(toolbarNode.style.top, 10);
		//toolbarNode.style.top=top-value+'px';
	}
}


/**
* Method for writing to the selector to select the type of style the different
* kinds of type styles available
*/
function fillSelectStyle() {
	var sel = $jit.id('selectStyleId');
	var selInfo = $jit.id('selectStyleIdInfo');

	// Foreach type style add option
	$jit.util.each(listStyles, function (type) {
		var elOptNew = document.createElement('option');
		elOptNew.text = type._nameTypeStyle;
		elOptNew.value = type._idTypeStyle;
		elOptNew.m4type = type._type;

		var elOptNew2 = document.createElement('option');
		elOptNew2.text = type._nameTypeStyle;
		elOptNew2.value = type._idTypeStyle;
		elOptNew2.m4type = type._type;
		try {
			sel.add(elOptNew, null); // standards compliant; doesn't work in
			selInfo.add(elOptNew2, null); // standards compliant; doesn't work in
		// IE
		} catch (ex) {
			sel.add(elOptNew); // IE only
			selInfo.add(elOptNew2); // IE only
		}
	});
}

/**
* Method to set the selectionLevel to the level of the _configStyle[] array
*/
function InitializeSelectionLevel() {
	var levelsToShowSelect = $jit.id('selectLevel');
	levelsToShowSelect.value = _configStyle[5];
}

/**
*  Show all the controls related to 'What you see its what you get print functionalyty'
*/
function ShowControlsWysiwyg(bValue) {
	// Bloque nuevo de la zona de configuración
	var confTabLienzo = $jit.id('confTabLienzo');

	// Separador de la toolbar general
	var sepShowLienzo = $jit.id('sepShowLienzo');	

	// Bloque nuevo de la toolbar general (checks de Ver Lienzo y Fijar Lienzo)
	var divShowLienzo = $jit.id('divShowLienzo');
	

	if (bValue) {
		confTabLienzo.style.display = '';
		sepShowLienzo.style.display = '';
		divShowLienzo.style.display = '';
	} else {
		confTabLienzo.style.display = 'none';
		sepShowLienzo.style.display = 'none';
		divShowLienzo.style.display = 'none';

		//IE9 tiene estilos que priorizan desde CSS por compatibilidad, desactivamos manualmente
		$jit.id('escalado').style.display = 'none';
		$jit.id('escaladoLabel').style.display = 'none';
		$jit.id('verLienzo').style.display = 'none';
		$jit.id('verLienzoLabel').style.display = 'none';
		$jit.id('fijarLienzo').style.display = 'none';
		$jit.id('fijarLienzoLabel').style.display = 'none';
	}
}

/**
* Method to set the canvas properties configuration
*/
function InitializeCanvasConfiguration() {

	var selectLienzoPaperSize = $jit.id('selectLienzoPaperSize');
	selectLienzoPaperSize.value = _configStyle[9];
	meta4.orgdyn.lienzo.setPaperLienzo(selectLienzoPaperSize.value);
	
	var printLandscapeLienzo = $jit.id('printLandscapeLienzo');
	var printPortraitLienzo = $jit.id('printPortraitLienzo');
	if (parseInt(_configStyle[10]) === m4_landscape) {		
		printLandscapeLienzo.checked = true;
		meta4.orgdyn.lienzo.setPaperOrientation(m4_landscape);
	} else {		
		printPortraitLienzo.checked = true;
		meta4.orgdyn.lienzo.setPaperOrientation(m4_portrait);
	}

	var rowsPagesLienzo = $jit.id('rowsPagesLienzo');
	if (parseInt(_configStyle[11]) > meta4.orgdyn.lienzo.getMaxLienzoDim().rows) {
		rowsPagesLienzo.value = meta4.orgdyn.lienzo.getDefaultLienzoDim().rows;
	} else {
		rowsPagesLienzo.value = _configStyle[11];
	}
			
	meta4.orgdyn.lienzo.setLienzoRows(rowsPagesLienzo.value);

	var colsPagesLienzo = $jit.id('colsPagesLienzo');
	if (parseInt(_configStyle[12]) > meta4.orgdyn.lienzo.getMaxLienzoDim().cols) {
		colsPagesLienzo.value = meta4.orgdyn.lienzo.getDefaultLienzoDim().cols;
	} else {
		colsPagesLienzo.value = _configStyle[12];
	}
			
	meta4.orgdyn.lienzo.setLienzoCols(colsPagesLienzo.value);
}

/**
* Method to set the grouping checkboxes 
*/
function InitializeGroupingData() {
	var inputPerson = $jit.id('numberPerson');
	inputPerson.value = _configStyle[6];

	var showEmployees = $jit.id('showEmployees');
	var showDepenFunc = $jit.id('showDepenFunc');
	var showAssistant = $jit.id('showAssistant');
	var showVacancies = $jit.id('showVacancies');

	//Nos aseguramos...
	showEmployees.checked = false;
	showDepenFunc.checked = false;
	showAssistant.checked = false;
	showVacancies.checked = false;

	if (GetShowBox(STYLE_TYPE_EMPLEADOS) == 1)
	{
		showEmployees.checked = true;
	} 
	
	if (GetShowBox(STYLE_TYPE_DEPENFUNC) == 1)
	{
		showDepenFunc.checked = true;
	} 

	if (GetShowBox(STYLE_TYPE_ASISTENTES) == 1)
	{
		showAssistant.checked = true;
	}

	// ----> OJO! OJO!  El Organigrama din�mico de Posiciones no configura en pantalla las Vacantes, por lo que debe mostrarlas siempre.
	// Independientemente de lo que venga del estilo.
	// Hay posiciones que vienen como vacantes!!!
	if (GetShowBox(STYLE_TYPE_VACANTES) == 1 || _configStyle[3]=="3")  
	{
		showVacancies.checked = true;

		// show submenu
		var controlShowVacancies = $jit.id('controlShowVacancies');
		controlShowVacancies.style.display = '';
	} 

	var groupEmployees = $jit.id('groupEmployees');
	var groupEmployeesByPost = $jit.id('groupEmployeesByPost');
	var withoutgroupEmployees = $jit.id('withoutgroupEmployees');
	var groupVacancies = $jit.id('groupVacancies');
	var withoutgroupVacancies = $jit.id('withoutgroupVacancies');
	
	//Nos aseguramos...
	withoutgroupEmployees.checked = true;
	groupEmployees.checked = false;
	groupEmployeesByPost.checked = false;
	
	withoutgroupVacancies.checked = true;
	groupVacancies.checked = false;

	//Nota: Aunque la agrupaci�n se guarda a nivel de todos los Style_Type, solo utilizamos el valor del tipo
	//"Empleados"...
	var groupingBoxEmpByStyle = GetGroupingBox(STYLE_TYPE_EMPLEADOS);
	if ( groupingBoxEmpByStyle == 1)  // Agrupaci�n normal
	{
		groupEmployees.checked = true;
	} else if (groupingBoxEmpByStyle == 2)  // Agrupaci�n por puesto
	{
		groupEmployeesByPost.checked = true;
	}

	if (GetGroupingBox(STYLE_TYPE_VACANTES) == 1) 
	{
		groupVacancies.checked = true;
	}
}


/**
* Method that changes the color of the type element according. Interacts with
* colorPicker.js
* 
* @param newColor,
*            new color for elements
* @param selector,
*            can be color of the box, line color or line color for associated
*/
function changeColor(newColor, selector) {	

	if (newColor != null && newColor.substr(0, 1) != '#') {
			newColor = rgbConvert(newColor);
	}

	var selectTypeStyle = $jit.id('selectStyleId');    
	for(type in listStyles){
		if (listStyles[type]._idTypeStyle == selectTypeStyle.value) {
			if (selector == 'selectColorBox') {
				// chage color box
				listStyles[type]._color = newColor;
			}
			if (selector == 'selectColorFont') {
				// chage color box
				listStyles[type]._colorFont = newColor;
			}
			if (selector == 'selectColorLine') {
				// chage color line
				listStyles[type]._colorLineNormal = newColor;
			}
			if (selector == 'selectColorLineAssociated') {
				// chage color line associated
				listStyles[type]._colorLineAssociated = newColor;
			}
			// apply new style

			applyStyles();						

			// Update tree
			_st.refresh();
		}
	}
}

/**
* Function to change type line
*/
function controlChangeTypeLine() {
    var lineParentContinuos = $jit.id('lineParentContinuos');
    var lineParentDiscontinuous = $jit.id('lineParentDiscontinuos');
    var lineAssociatedContinuos = $jit.id('lineAssociatedContinuos');
    var lineAssociatedDiscontinuos = $jit.id('lineAssociatedDiscontinuos');

    $jit.util.addEvent(lineParentContinuos, 'click', function () {
        var typeStyle = $jit.id('selectStyleId').value;
        if (lineParentContinuos.checked == true) {
            $jit.util.each(listStyles, function (type) {
                if (type._idTypeStyle == typeStyle) {
                    type._typeLineNormal = 0;
                    // Update tree
                    _st.refresh();
                }
            });
        }
    });

    $jit.util.addEvent(lineParentDiscontinuous, 'click', function () {
        var typeStyle = $jit.id('selectStyleId').value;
        if (lineParentDiscontinuous.checked == true) {
            $jit.util.each(listStyles, function (type) {
                if (type._idTypeStyle == typeStyle) {
                    type._typeLineNormal = 1;
                    // Update tree
                    _st.refresh();
                }
            });
        }
    });

    $jit.util.addEvent(lineAssociatedContinuos, 'click', function () {
        var typeStyle = $jit.id('selectStyleId').value;
        if (lineAssociatedContinuos.checked == true) {
            $jit.util.each(listStyles, function (type) {
                if (type._idTypeStyle == typeStyle) {
                    type._typeLineAssociated = 0;
                    // Update tree
                    _st.refresh();
                }
            });
        }
    });

    $jit.util.addEvent(lineAssociatedDiscontinuos, 'click', function () {
        var typeStyle = $jit.id('selectStyleId').value;
        if (lineAssociatedDiscontinuos.checked == true) {
            $jit.util.each(listStyles, function (type) {
                if (type._idTypeStyle == typeStyle) {
                    type._typeLineAssociated = 1;
                    // Update tree
                    _st.refresh();
                }
            });
        }
    });
}

/**
* Function to clean fields of select color
*/
function controlChangeTypeStyle() {

	var selectTypeStyle = $jit.id('selectStyleId');
	$jit.util.addEvent(selectTypeStyle, 'change', function () {
		changeTypeStyle();		
	});
}

function changeTypeStyle() {
	var selectTypeStyle = $jit.id('selectStyleId');
	var selectColorBox = $jit.id('selectColorBox');
	var selectColorFont = $jit.id('selectColorFont');
	var selectColorLine = $jit.id('selectColorLine');
	var selectColorLineAssociated = $jit.id('selectColorLineAssociated');

	selectColorBox.value = '';
	selectColorBox.style.background = "#fff";
	selectColorFont.value = '';
	selectColorFont.style.background = "#fff";
	selectColorLine.value = '';
	selectColorLine.style.background = "#fff";
	selectColorLineAssociated.value = '';
	selectColorLineAssociated.style.background = "#fff";

	// type line
	$jit.util.each(listStyles, function (type) {
		if (type._idTypeStyle == selectTypeStyle.value) {
			if (type._typeLineNormal == 0) {
				$jit.id('lineParentContinuos').checked = true;
				$jit.id('lineParentDiscontinuos').checked = false;
			} else {
				$jit.id('lineParentContinuos').checked = false;
				$jit.id('lineParentDiscontinuos').checked = true;
			}
			if (type._typeLineAssociated == 0) {
				$jit.id('lineAssociatedContinuos').checked = true;
				$jit.id('lineAssociatedDiscontinuos').checked = false;
			} else {
				$jit.id('lineAssociatedContinuos').checked = false;
				$jit.id('lineAssociatedDiscontinuos').checked = true;
			}

			//change color box
			$jit.id('selectColorBox').style.background=type._color;
			$jit.id('selectColorFont').style.background=type._colorFont;
			$jit.id('selectColorLine').style.background=type._colorLineNormal;
			$jit.id('selectColorLineAssociated').style.background=type._colorLineAssociated;
		}

		var select=$jit.id('selectStyleId');
		var option=selectTypeStyle[select.selectedIndex] ;
		var m4type=option.m4type;
		$jit.id('ColorBoxPicker').style.display='block';
		$jit.id('ColorFontPicker').style.display='block';

		if(parseInt(m4type)==2){//TYPE_WU
			$jit.id('ColorlineParent').style.display='block';
			$jit.id('TypelineParent').style.display='block';
			$jit.id('ColorlineDependency').style.display='none';
			$jit.id('TypelineDependency').style.display='none';
		}else{
			if(parseInt(m4type)==1){//TYPE_FUNTCIONAL_DEPENDENCY
				$jit.id('ColorlineParent').style.display='none';
				$jit.id('TypelineParent').style.display='none';
				$jit.id('ColorlineDependency').style.display='block';
				$jit.id('TypelineDependency').style.display='block';
			}else{
				$jit.id('ColorlineParent').style.display='none';
				$jit.id('TypelineParent').style.display='none';
				$jit.id('ColorlineDependency').style.display='none';
				$jit.id('TypelineDependency').style.display='none';

				if (m4type == undefined)
				{
					$jit.id('ColorBoxPicker').style.display='none';
					$jit.id('ColorFontPicker').style.display='none';
				}
			}
		}
	});
}

/**
* Function that destroy the checkbox foreach item depending on the type style
*/
function destroyCheckBoxTypeStyle() {
	var typeStyle = $jit.id('selectStyleIdInfo');	
	typeStyle[0].selected = true;  //Position at "Seleccione tipo"

	$jit.util.each(listStyles, function (type) {	
		var typeStyleNoSpaces = type._idTypeStyle.replace(" ", "");
		var divTable = $jit.id(typeStyleNoSpaces + 'tableDiv');

		//Bug 0325274 04/06/2018		
		//divTable.remove();  // --------> No en IE11     
		if (divTable) {
			if (divTable.parentNode) {
				divTable.parentNode.removeChild(divTable);
			}
		}
		//----------------------------------------
	});	
}

/**
* Function that creates the checkbox for each item depending on the type style
* chosen
*/
function createCheckBoxTypeStyle() {


    $jit.util.each(listStyles, function (type) {

    	var typeStyle = $jit.id('selectStyleIdInfo').value;

        var divGeneral = $jit.id('listCheckTypeStyle');
        

        var typeStyleNoSpaces = type._idTypeStyle.replace(" ", "");

        var divTable = document.createElement('div');
        divTable.id = typeStyleNoSpaces + 'tableDiv';
        divTable.style.display = 'none';

        var tableEstilo = document.createElement('div');
        tableEstilo.id = typeStyleNoSpaces + 'table';
        tableEstilo.className = 'tableCheckBox';

        divTable.appendChild(tableEstilo);
        divGeneral.appendChild(divTable);
        var listItem = type._listItem;

        // button show config
        var headerTable = document.createElement('div');
        headerTable.className='headerTable headerButton leftSide';

        /*var button = document.createElement("img");
        button.src =  _AbsolutePathTemplate+'images/plus.png';
        button.style.width = '22px';
        button.style.height = '22px';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
		button.title = _tooltipButtonInfo;
        button.id="buttonPlusFont";
        headerTable.appendChild(button);*/
        tableEstilo.appendChild(headerTable);

        var headerDecoration = document.createElement('div');
        //headerDecoration.style.display = 'none';
        //headerDecoration.align = 'center';
        headerDecoration.className = 'headerTable headerDecoration rightSide';

        var divBold = document.createElement('div');
        divBold.className = 'rightSideBold'
        var bold = document.createElement('b');
        bold.innerHTML = 'B';
        //firefox textContent 
        bold.textContent = 'B';
        divBold.appendChild(bold);
        headerDecoration.appendChild(divBold);
        
        var divItalic = document.createElement('div');
        divItalic.className = 'rightSideItalic'
        var italic = document.createElement('i');
        italic.innerHTML = 'I';
        //firefox textContent 
        italic.textContent = 'I';
        divItalic.appendChild(italic);
        headerDecoration.appendChild(divItalic);

        tableEstilo.appendChild(headerDecoration);

        /*button.onclick = function (button) {        	

        	var typeStyleNoSpaces = type._idTypeStyle.replace(" ", "");

            var rightColumn = jQuery('#' + typeStyleNoSpaces + 'table').children('.rightSide');
            
    		if (rightColumn.css('display') == 'none') {
            	rightColumn.css('display', '');
            } else {
            	rightColumn.css('display', 'none');
            }

        };*/

        // Create file foreach item        
        $jit.util.each(listItem, function (item) {

			if (AllowPaintAttribute(type, item))
			{			
				var leftSide = document.createElement('div');
				leftSide.className = 'boxRow leftSide';
				var rightSide = document.createElement('div');
				rightSide.className = 'rightSide';

				//rightSide.style.display = 'none';

				// Create label
				var label = document.createElement('label');
				label.innerText = item['_name'];
				//firefox textContent
				label.textContent = item['_name'];
				label.htmlFor = item['_name'];
				label.text = item['_name'];

				if (item['_item'] == 'Photo') {

					// Create checkbox
					var checkbox = document.createElement('input');
					checkbox.type = 'checkbox';
					checkbox.id = item['_item'] + type._idTypeStyle;
					// Add content of cells                
					leftSide.appendChild(checkbox);
					leftSide.appendChild(label);
					if (item['_check'] == true) {
						checkbox.checked = 'checked';
					}
					checkbox.photo = true;

					// add click event for updating styles
					$jit.util.addEvent(checkbox, 'click', function () {
						if (item['_check'] == true) {
							item['_check'] = false;
						} else {
							item['_check'] = true;   
						}
						
						_st.refresh();
					});

				} else {

					// Create checkbox
					var checkbox = document.createElement('input');
					checkbox.type = 'checkbox';
					checkbox.id = item['_item'] + type._idTypeStyle;
					if(item['_item']== 'Name' || item['_item']== 'NameWU' || item['_item']== 'VacancyName' ){
						checkbox.disabled = true;
					}                
					
					// Create checkbox
					var checkbox2 = document.createElement('input');
					checkbox2.type = 'checkbox';
					checkbox2.id = item['_item'] + 'bold' + type._idTypeStyle;

					// Create checkbox
					var checkbox3 = document.createElement('input');
					checkbox3.type = 'checkbox';
					checkbox3.id = item['_item'] + 'italic' + type._idTypeStyle;

					// Add content of cells
					leftSide.appendChild(checkbox);
					leftSide.appendChild(label);
					
					rightSide.appendChild(checkbox2);
					rightSide.appendChild(checkbox3);

					if (item['_check'] == true) {
						checkbox.checked = 'checked';
					}
					if (item['_bold'] == true) {
						checkbox2.checked = 'checked';
					}
					if (item['_italic'] == true) {
						checkbox3.checked = 'checked';
					}
					
					// add click event for updating styles
					$jit.util.addEvent(checkbox, 'click', function () {					
						if (item['_check'] == true) {
							item['_check'] = false;
							checkbox2.disabled=true;  
							checkbox3.disabled=true;
						} else {
							item['_check'] = true;
							checkbox2.disabled=false;  
							checkbox3.disabled=false;
						}						
						
						_st.refresh();
					});

					// add click event for updating styles
					$jit.util.addEvent(checkbox2, 'click', function () {
						if (item['_bold'] == true) {
							item['_bold'] = false;
						} else {
							item['_bold'] = true;
						}
						
						_st.refresh();
					});

					// add click event for updating styles
					$jit.util.addEvent(checkbox3, 'click', function () {
						if (item['_italic'] == true) {
							item['_italic'] = false;
						} else {
							item['_italic'] = true;
						}
						
						_st.refresh();
					});
				   
				}

				tableEstilo.appendChild(leftSide);
				tableEstilo.appendChild(rightSide);
			}


        }); // END FOR through item
    });
}

/**
* Function to reset checkboxs for each type style
*/
/*
function resetAllCheckBoxTyepeStyle() {
	$jit.util.each(listStyles, function (type) {
		var listItem = type._listItem;

		// Uncheck each item
	    $jit.util.each(listItem, function (item) {
			var chkid = item['_item'] + type._idTypeStyle;
			var chkid2 = item['_item'] + 'bold' + type._idTypeStyle;
			var chkid3 = item['_item'] + 'italic' + type._idTypeStyle;
			
			var chk = $jit.id(chkid);
			if (chk) {
				chk.checked = '';
			}

			var chk2 = $jit.id(chkid2);		
			if (chk2) {
				chk2.checked = '';
			}

			var chk3 = $jit.id(chkid3);
			if (chk3) {
				chk3.checked = '';
			}

			if (item['_check'] == true) {
				chk.checked = 'checked';
			}

			if (item['_bold'] == true) {
				chk2.checked = 'checked';
			}
			
			if (item['_italic'] == true) {
				chk3.checked = 'checked';
			}
			
		});
	});
}
*/

/**
* Function to check whether an item can be painted 
*/
function AllowPaintAttribute(type, item)
{
	if (_propertyBag.hide_DirectResponsible == true && type._idTypeStyle === 'Empleados' && item['_item']=== 'DirectResponsible')
	{
		return false;
	} else {
		return true;
	}
}

/**
* Function to show checkbox for each type style
*/
function showTypeStyle() {

	var selectTypeStyle = $jit.id('selectStyleIdInfo');
	$jit.util.addEvent(selectTypeStyle, 'change', function () {
		// type line
		$jit.util.each(listStyles, function (type) {
			var typeStyleNoSpaces = type._idTypeStyle.replace(" ", "");
			if (type._idTypeStyle == selectTypeStyle.value) {
				var divTable = $jit.id(typeStyleNoSpaces + 'tableDiv');
				divTable.style.display = 'Block';
			} else {
				var divTable = $jit.id(typeStyleNoSpaces + 'tableDiv');
				divTable.style.display = 'none'; 
			}
		});
		if(selectTypeStyle.selectedIndex==0){
			$jit.id('labelListItem').style.display='none'; 
		}else{
			$jit.id('labelListItem').style.display='Block';
		}
	});
}


function showTypeEmployee(type){

	if (type == 'byPost') {
		// hide employees
		_st.graph.eachNode(function (node) {
			// if have this data, hide node, name:-1 is when gropued employees
			if (node.type == TYPE_SUBORDINATE) {
				if (node.data['groupEmployeesByPost']) {// if node type groupEmployees by post
					nodeEmployeeShow(node, true);
				} else {
					nodeEmployeeShow(node, false);
				}
			}
		});
	}else if (type == 'groupedPostWithAssistant') {
		// hide employees
		_st.graph.eachNode(function (node) {
			// if have this data, hide node, name:-1 is when gropued employees
			if (node.type == TYPE_SUBORDINATE) {
				if (node.data['groupEmployeesPostWithAssistant']) {// if node type groupEmployees by post
					nodeEmployeeShow(node, true);
				} else {
					nodeEmployeeShow(node, false);
				}
			}
		});
	}else if (type == 'groupedWithAssistant') {
		// hide employees
		_st.graph.eachNode(function (node) {
			// if have this data, hide node, name:-1 is when gropued employees
			if (node.type == TYPE_SUBORDINATE) {
				if (node.data['groupEmployeesWithAssistant']) {// if node type groupEmployees by post
					nodeEmployeeShow(node, true);
				} else {
					nodeEmployeeShow(node, false);
				}
			}
		});
	} else if(type == 'withoutPost'){
		// hide employees
		_st.graph.eachNode(function (node) {
			// if have this data, hide node, name:-1 is when gropued employees
			if (node.type == TYPE_SUBORDINATE) {
				if (node.data['groupEmployees']) {// if node type groupEmployees
					nodeEmployeeShow(node, true);
				} else {
					nodeEmployeeShow(node, false);
				}
			}
		});
	}else if(type == 'onlyAssistant'){
		// hide employees
		_st.graph.eachNode(function (node) {
			// if have this data, hide node, name:-1 is when gropued employees
			if (node.type == TYPE_SUBORDINATE) {
				if (node.data['assistant']) {// if node type groupEmployees
					nodeEmployeeShow(node, true);
				} else {
					nodeEmployeeShow(node, false);
				}
			}
		});
	}else if(type == 'onlyEmployees'){
		if (showEmployeesWithoutGroup.checked == true) {
			hideGroupEmployees();
		}
	}
}


function controlAssistant(){
	var showAssistant=$jit.id('showAssistant');
	$jit.util.addEvent(showAssistant, 'click', function () {
		updateControlAssistant();
	});
}

/**
* Function to control the showing or not of assistants
*/
function updateControlAssistant(bRefresh){
	if (arguments.length == 0) {
		bRefresh = true;
	}

	var groupEmployees = $jit.id('groupEmployees').checked;
	var groupEmployeesByPost = $jit.id('groupEmployeesByPost').checked;
	var showEmployees = $jit.id('showEmployees').checked;
	var showAssistant = $jit.id('showAssistant').checked; 
 
	if(showEmployees){
		if (groupEmployees||groupEmployeesByPost) {// if employees is grouped
			if(showAssistant){
				if(groupEmployeesByPost){
					showTypeEmployee('groupedPostWithAssistant');
				}else{
					showTypeEmployee('groupedWithAssistant');	
				}
			}else{
				if(groupEmployeesByPost){
					showTypeEmployee('byPost');
				}else{
					showTypeEmployee('withoutPost');	
				}
			}
		}else{
		//only employyes
			hideGroupEmployees();
		}
	}

	applyStyles();

	if (bRefresh){
		
		_st.refresh();
	}

	if(showAssistant){
		SetAttributeStyle(STYLE_TYPE_ASISTENTES, ATTR_SHOW_BOX, 1);
	}
	else
	{
		SetAttributeStyle(STYLE_TYPE_ASISTENTES, ATTR_SHOW_BOX, 0);
	}
}


/**
 * Function to remove element of listElement
 * @param id
 */
function removeElementList(id){
	for(var i=0;i<_listNodesShowEmployees.length;i++){
		if(_listNodesShowEmployees[i]==id){
			_listNodesShowEmployees.splice(i,1);
		}
	}
}

/**
 * Function to check if id belong of listEmployees add by demand
 * @param id
 * @returns {Boolean}
 */
function belongListEmployees(id){
	for(var i=0;i<_listNodesShowEmployees.length;i++){
		if(_listNodesShowEmployees[i]==id){
			return true;
		}
	}
}

/**
* Function that control checkbox for show employees or no apply all orgchart
*/
function controlShowEmployees() {
	var showEmployees = $jit.id('showEmployees');
	$jit.util.addEvent(showEmployees, 'click', function () {
		updateControlEmployee();
	});
}

/**
 * Function to control employees
 */
function updateControlEmployee(bRefresh){
	if (arguments.length == 0) {
		bRefresh = true;
	}

	var showEmployees = $jit.id('showEmployees'); 
	var withoutgroupEmployees = $jit.id('withoutgroupEmployees').checked;
	var groupEmployees = $jit.id('groupEmployees').checked;
	var groupEmployeesByPost = $jit.id('groupEmployeesByPost').checked;
	var showAssistant=$jit.id('showAssistant').checked;

	if (showEmployees.checked == true) {
		SetAttributeStyle(STYLE_TYPE_EMPLEADOS, ATTR_SHOW_BOX, 1);

		// change atr expandChild=true
		_st.graph.eachNode(function (node) {
			if (node.type==TYPE_WU) { // && node.drawn) {
				node.exployChild=true;
			}
		});

		if (withoutgroupEmployees) {
			hideGroupEmployees();
		} else {
			if (groupEmployees) {// if employees is grouped
				if(showAssistant){
					showTypeEmployee('groupedWithAssistant');
				}else{
					showTypeEmployee('withoutPost');
				}
			} else if(groupEmployeesByPost){
				if(showAssistant){
					showTypeEmployee('groupedWithAssistant');
				}else{
					showTypeEmployee('byPost');
				}
			}
		}
	} else {
		SetAttributeStyle(STYLE_TYPE_EMPLEADOS, ATTR_SHOW_BOX, 0);

		// through the tree nodes and disable employees
		_st.graph.eachNode(function (node) {
			// if have this data, hide node, groupEmployees is when gropued
			// employees
			if (node.type == TYPE_SUBORDINATE) {
				node.m4showEmployees = false;
				node.visited=false;
				node.exist=false;
				node.drawn=false;
				node.selected=false;
				delete node.data['$width'];
				delete node.data['$height'];
			}
			if (node.type == TYPE_WU) {
				node.exployChild=false;
			}
		});
	}

	// Update tree
	m4ClearLabel();

	if (bRefresh){
		
		_st.refresh();		
	}
}


/**
* Function that control checkbox for show vacancy or no
*/
function controlShowVacancies() {
	
	var showVacancies = $jit.id('showVacancies');
	$jit.util.addEvent(showVacancies, 'click', function () {
		updateControlVacancies();
	});
}

function updateControlVacancies(bRefresh){
	if (arguments.length == 0) {
		bRefresh = true;
	}

	var showVacancies = $jit.id('showVacancies');
	var withoutgroupVacancies = $jit.id('withoutgroupVacancies');

	if (showVacancies.checked == true) {
		SetAttributeStyle(STYLE_TYPE_VACANTES, ATTR_SHOW_BOX, 1);

		_st.graph.eachNode(function (node) {
			// if have this data, hide node, groupVacancies is when gropued
			// employees
			if (node.data['groupVacancies'] || node.data['VacancyName']) {
				node.m4showVacancies = true;
			}
		});

		if (withoutgroupVacancies.checked == true) {
			hideGroupVacancies();
		}else{
			showGroupVacancies();
		}

		// show submenu
		var controlShowVacancies = $jit.id('controlShowVacancies');
		controlShowVacancies.style.display = '';

	}else{
		SetAttributeStyle(STYLE_TYPE_VACANTES, ATTR_SHOW_BOX, 0);

		// through the tree nodes and disable employees
		_st.graph.eachNode(function (node) {
			// if have this data, hide node, groupVacancies is when gropued
			// employees
			if (node.data['groupVacancies'] || node.data['VacancyName']) {
				node.m4showVacancies = false;
				node.exist = false;
				node.drawn = false;
			}
		});

		// hide submenu
		var controlShowVacancies = $jit.id('controlShowVacancies');
		controlShowVacancies.style.display = 'none';
	}

	if (bRefresh){
		
		_st.refresh();
	}
}

/**
* Function that control checkbox for show employees grouped
*/
function controlGroupEmployees() {

	var groupEmployees = $jit.id('groupEmployees');
	$jit.util.addEvent(groupEmployees, 'click', function () {		

		var showEmployees = $jit.id('showEmployees').checked;
		var showAssistant= $jit.id('showAssistant').checked;

		// Clean autocomplete
		clearOutput();
		setVisible("hidden");

		if(showEmployees){
			if(showAssistant){
				showTypeEmployee('groupedWithAssistant');
			}else{
				showTypeEmployee('withoutPost');
			}
		}else{
			repaintBoxEmployees();
		}

		_st.canvas.translate(-_st.canvas.translateOffsetX, -_st.canvas.translateOffsetY - _deltaCanvasY, false);
		// Update tree
		m4ClearLabel();

		if (!_hasMoveNode) {
			if (_st.clickedNode)
			{
				goToNode(_st.clickedNode.id);
			}else{
				//_st.onClick();
				goToNode(_st.root);
			}
		}
				
		_st.refresh();		
		
		// _canCompute = !_hasMoveNode; 
		 // Hay que esperar que se ejecuten los eventos internos...
        //setTimeout(function(){ _canCompute = true; }, 1000);   

		//Actualizamos el Style
		if (groupEmployees.checked)
		{
			SetAttributeStyle(STYLE_TYPE_EMPLEADOS, ATTR_GROUPING_BOX, 1);
			SetAttributeStyle(STYLE_TYPE_ASISTENTES, ATTR_GROUPING_BOX, 1);
			SetAttributeStyle(STYLE_TYPE_DEPENFUNC, ATTR_GROUPING_BOX, 1);
		}else{
			SetAttributeStyle(STYLE_TYPE_EMPLEADOS, ATTR_GROUPING_BOX, 0);
			SetAttributeStyle(STYLE_TYPE_ASISTENTES, ATTR_GROUPING_BOX, 0);
			SetAttributeStyle(STYLE_TYPE_DEPENFUNC, ATTR_GROUPING_BOX, 0);
		}
	});

	var groupEmployeesByPost = $jit.id('groupEmployeesByPost');
	$jit.util.addEvent(groupEmployeesByPost, 'click', function () {
		//No podemos mostrar la foto cuando estamos expandiendo si alg�n nodo ha sido movido, porque se pintar�a tambi�n en la posici�n original que deja el Compute.
		_bShowPhotoForAfterComputingEfect = !_hasMoveNode;	

		var showEmployees =$jit.id('showEmployees').checked;
		var showAssistant= $jit.id('showAssistant').checked;

		// Clean autocomplete
		clearOutput();
		setVisible("hidden");

		if(showEmployees){
			if(showAssistant){
				showTypeEmployee('groupedPostWithAssistant');
			}else{
				showTypeEmployee('byPost');
			}
		}else{
			repaintBoxEmployees();
		}

		_st.canvas.translate(-_st.canvas.translateOffsetX, -_st.canvas.translateOffsetY - _deltaCanvasY, false);

		// Update tree
		m4ClearLabel();

		if (!_hasMoveNode) {
			if (_st.clickedNode)
			{
				goToNode(_st.clickedNode.id);
			}else{
				//_st.onClick();
				goToNode(_st.root);
			}
		}
				
		_st.refresh();		

		//Actualizamos el Style
		if (groupEmployeesByPost.checked)
		{
			SetAttributeStyle(STYLE_TYPE_EMPLEADOS, ATTR_GROUPING_BOX, 2);
			SetAttributeStyle(STYLE_TYPE_ASISTENTES, ATTR_GROUPING_BOX, 2);
			SetAttributeStyle(STYLE_TYPE_DEPENFUNC, ATTR_GROUPING_BOX, 2);
		}else{
			SetAttributeStyle(STYLE_TYPE_EMPLEADOS, ATTR_GROUPING_BOX, 0);
			SetAttributeStyle(STYLE_TYPE_ASISTENTES, ATTR_GROUPING_BOX, 0);
			SetAttributeStyle(STYLE_TYPE_DEPENFUNC, ATTR_GROUPING_BOX, 0);
		}
	});

	var withoutGroupEmployees = $jit.id('withoutgroupEmployees');
	$jit.util.addEvent(withoutGroupEmployees, 'click', function () {
		//No podemos mostrar la foto cuando estamos expandiendo si alg�n nodo ha sido movido, porque se pintar�a tambi�n en la posici�n original que deja el Compute.
		_bShowPhotoForAfterComputingEfect = !_hasMoveNode;	

		var withoutGroupEmployees = $jit.id('withoutgroupEmployees').checked;
		var showEmployees = $jit.id('showEmployees').checked;
		// Clean autocomplete
		clearOutput();
		setVisible("hidden");

		if(showEmployees){
			if (withoutGroupEmployees == true) {// if employees is grouped
				hideGroupEmployees();
			}
		}else{
			repaintBoxEmployees();
		}

		// Update tree
		_st.canvas.translate(-_st.canvas.translateOffsetX, -_st.canvas.translateOffsetY - _deltaCanvasY, false);
		m4ClearLabel();

		if (!_hasMoveNode) {
			if (_st.clickedNode)
			{
				goToNode(_st.clickedNode.id);
			}else{
				//_st.onClick();
				goToNode(_st.root);
			}
		}
				
		_st.refresh();		

		//Actualizamos el Style
		if (withoutGroupEmployees)
		{
			SetAttributeStyle(STYLE_TYPE_EMPLEADOS, ATTR_GROUPING_BOX, 0);
			SetAttributeStyle(STYLE_TYPE_ASISTENTES, ATTR_GROUPING_BOX, 0);
			SetAttributeStyle(STYLE_TYPE_DEPENFUNC, ATTR_GROUPING_BOX, 0);
		}else{
			SetAttributeStyle(STYLE_TYPE_EMPLEADOS, ATTR_GROUPING_BOX, 1);
			SetAttributeStyle(STYLE_TYPE_ASISTENTES, ATTR_GROUPING_BOX, 1);
			SetAttributeStyle(STYLE_TYPE_DEPENFUNC, ATTR_GROUPING_BOX, 1);
		}
	});
}


/**
 * Function repaint box employees
 */
function repaintBoxEmployees(){
	//No podemos mostrar la foto cuando estamos expandiendo si alg�n nodo ha sido movido, porque se pintar�a tambi�n en la posici�n original que deja el Compute.
	_bShowPhotoForAfterComputingEfect = !_hasMoveNode;	

	// Clean autocomplete
	clearOutput();
	setVisible("hidden");

	_st.graph.eachNode(function (node) {
		if (node.type == TYPE_WU && node.exployChild && node.drawn) {
			var type='';
			var groupEmployeesByPost = $jit.id('groupEmployeesByPost').checked ;

			if (groupEmployeesByPost) {// if employees is grouped 
				var showAssistant= $jit.id('showAssistant').checked;
				if(showAssistant){
					type='groupedPostWithAssistant';
				}else{
					type='byPost';
				}
			}

			var groupEmployees = $jit.id('groupEmployees').checked;
			if (groupEmployees) {// if employees is grouped
				var showAssistant= $jit.id('showAssistant').checked;
				if(showAssistant){
					type='groupedWithAssistant';
				}else{
					type='withoutPost';
				}
			}
			var withoutgroupEmployees = $jit.id('withoutgroupEmployees').checked;  
			if(withoutgroupEmployees){
				type='onlyEmployees';
			}
			
			showEmployeesOfOneNode(type,node);
			
		}
	});

	// Update tree
	m4ClearLabel();
	
	_st.refresh();
}


/**
* Function that control checkbox for show employees grouped
*/
function controlGroupVacancies() {
	//No podemos mostrar la foto cuando estamos expandiendo si alg�n nodo ha sido movido, porque se pintar�a tambi�n en la posici�n original que deja el Compute.
	_bShowPhotoForAfterComputingEfect = !_hasMoveNode;	

	var groupVacancies = $jit.id('groupVacancies');
	$jit.util.addEvent(groupVacancies, 'click', function () {
		// Clean autocomplete
		clearOutput();
		setVisible("hidden");

		if (groupVacancies.checked == true) {// if employees is grouped
			showGroupVacancies();
			SetAttributeStyle(STYLE_TYPE_VACANTES, ATTR_GROUPING_BOX, 1);
		}else{
			SetAttributeStyle(STYLE_TYPE_VACANTES, ATTR_GROUPING_BOX, 0);
		}
		
		_st.refresh();
    });

	var withoutGroupVacancies = $jit.id('withoutgroupVacancies');
	$jit.util.addEvent(withoutGroupVacancies, 'click', function () {
		// Clean autocomplete
		clearOutput();
		setVisible("hidden");

		if (withoutGroupVacancies.checked == true) {// if employees is grouped
			hideGroupVacancies();
			SetAttributeStyle(STYLE_TYPE_VACANTES, ATTR_GROUPING_BOX, 0);
		}else{
			SetAttributeStyle(STYLE_TYPE_VACANTES, ATTR_GROUPING_BOX, 1);
		}
		
		_st.refresh();
	});
}


/**
* Function to hide group employees
*/
function hideGroupVacancies() {
	// hide group vacancies	
	_st.graph.eachNode(function (node) {
		if (node.type == TYPE_VACANCY) {
			// if have this data, hide node, name:-1 is when gropued vacancies
			if (node.data['groupVacancies']) {// if node type groupVacancies
				node.m4showVacancies = false;
				node.drawn = false;
			} else {
				node.m4showVacancies = true;
			}
		}
	});
}

/**
* Function to hide group employees
*/
function hideVacancies() {
	// hide group vacancies	
	_st.graph.eachNode(function (node) {
		if (node.type == TYPE_VACANCY) {
			node.m4showVacancies = false;
			node.drawn = false;
		}
	});
}

/**
* Function to show group vacancies and hide employees
*/
function showGroupVacancies() {
	// hide employees
	_st.graph.eachNode(function (node) {
		if (node.type == TYPE_VACANCY) {
			if (node.data['groupVacancies']) {// if node type groupVacancies
				node.m4showVacancies = true;
			} else {
				node.m4showVacancies = false;
				node.drawn = false;
			}
		}
	});
}


/**
* Function to hide group employees
*/
function hideGroupEmployees() {
	// hide employees
	_st.graph.eachNode(function (node) {
		// if have this data, hide node, name:-1 is when gropued employees
		if (node.type == TYPE_SUBORDINATE) {
			if (isNodeGroupEmployee(node)) {// if node type groupEmployees
				node.m4showEmployees = false;
				node.drawn = false;
				node.exist= false;
			}else{
				node.m4showEmployees = true;
				var parent = node.getParents();
				if(parent[0].exployChild && belongListEmployees(parent[0].id)){
					node.drawn = true;
					node.exist= true;
				}
			}
		}
	});
}

/**
* Function to hide group employees
*/
function hideEmployees() {
	// hide employees
	_st.graph.eachNode(function (node) {
		// if have this data, hide node, name:-1 is when gropued employees
		if (node.type == TYPE_SUBORDINATE) {
			node.m4showEmployees = false;
			node.drawn = false;
		}
	});
}

/**
* function to detect whether exist functional dependencies
*/
function existAnyDepFuncNode() {
	var bResult = false;
	_st.graph.eachNode(function (node) {
		if (typeof node.dependenciFuncional == 'object') {
			bResult = true;
		}
	});

	return bResult;
}

/**
* Function that control checkbox for show associated grouped
*/
function controlshowDepenFunc() {
	var showDepenFunc = $jit.id('showDepenFunc');
	$jit.util.addEvent(showDepenFunc, 'click', function () {
		updateControlDepenFunc();
	});
}

function updateControlDepenFunc(bRefresh){
	if (arguments.length == 0) {
		bRefresh = true;
	}

	var showDepenFunc = $jit.id('showDepenFunc');
	_showDependencies=showDepenFunc.checked;
	
	if (_showDependencies == true)
	{
		SetAttributeStyle(STYLE_TYPE_DEPENFUNC, ATTR_SHOW_BOX, 1);
	}
	else
	{
		SetAttributeStyle(STYLE_TYPE_DEPENFUNC, ATTR_SHOW_BOX, 0);
	}

	_st.graph.eachNode(function (node) {
		if (typeof node.dependenciFuncional == 'object' && node.drawn) {
			if (_showDependencies) {                
				// Aumentando el alto de las cajas funcionales, es el truco para que en la computerizaci�n de los nodos, la distancia entre niveles aumente (para que quepan las dependencias)
				node.setData('width', _st.graph.Node.width + _st.graph.Node.width * 0.6);
				node.setData('height', _st.graph.Node.height+ _st.graph.Node.height * 1.2);
			}else{
				delete node.data['$width'];
				delete node.data['$height'];
			}
		}
	});

	// Update label and set size nodes with child associated
	m4ClearLabel();

	if (bRefresh){		
		_st.refresh();
	}
}

/**
* Function to show employees of one node
*/
function showEmployeesOfOneNode(type,nodeParent) {	  

    if (type == 'byPost') {
        // hide employees
    	nodeParent.eachSubnode(function (node) {
            // if have this data, hide node, name:-1 is when gropued employees
            if (node.type == TYPE_SUBORDINATE) {
                if (node.data['groupEmployeesByPost']) {// if node type groupEmployees by post
                    node.m4showEmployees = true;                                    
                    var parent = node.getParents();		
        			if(parent[0].exployChild && belongListEmployees(parent[0].id)){		                               
                    	node.drawn = true;
                        node.exist= true;	
                   }                                             
                } else {
                    node.m4showEmployees = false;
                    node.drawn = false;
                    node.exist=false;
                }
            }
        });
    }else if (type == 'groupedPostWithAssistant') {
        // hide employees
    	nodeParent.eachSubnode(function (node) {
            // if have this data, hide node, name:-1 is when gropued employees
            if (node.type == TYPE_SUBORDINATE) {
                if (node.data['groupEmployeesPostWithAssistant']) {// if node type groupEmployees by post
                    node.m4showEmployees = true;
                    var parent = node.getParents();		
        			if(parent[0].exployChild && belongListEmployees(parent[0].id)){		                               
                    	node.drawn = true;
                        node.exist= true;	
                   }    
                } else {
                    node.m4showEmployees = false;
                    node.drawn = false;
                    node.exist=false;
                }
            }
        });
    }else if (type == 'groupedWithAssistant') {
        // hide employees
    	nodeParent.eachSubnode(function (node) {
            // if have this data, hide node, name:-1 is when gropued employees
            if (node.type == TYPE_SUBORDINATE) {
                if (node.data['groupEmployeesWithAssistant']) {// if node type groupEmployees by post
                    node.m4showEmployees = true;
                    var parent = node.getParents();		
        			if(parent[0].exployChild && belongListEmployees(parent[0].id)){		                               
                    	node.drawn = true;
                        node.exist= true;	
                   }    
                } else {
                    node.m4showEmployees = false;
                    node.drawn = false;
                    node.exist=false;
                }
            }
        });                          
    } else if(type == 'withoutPost'){
        // hide employees
    	nodeParent.eachSubnode(function (node) {
            // if have this data, hide node, name:-1 is when gropued employees
            if (node.type == TYPE_SUBORDINATE) {
                if (node.data['groupEmployees']) {// if node type groupEmployees
                    node.m4showEmployees = true;
                    var parent = node.getParents();		
        			if(parent[0].exployChild && belongListEmployees(parent[0].id)){		                               
                    	node.drawn = true;
                        node.exist= true;	
                   }    
                } else {
                    node.m4showEmployees = false;
                    node.drawn = false;
                    node.exist=false;
                }
            }
        });
    }else if(type == 'onlyAssistant'){
        // hide employees
    	nodeParent.eachSubnode(function (node) {
            // if have this data, hide node, name:-1 is when gropued employees
            if (node.type == TYPE_SUBORDINATE) {
                if (node.data['assistant']) {// if node type groupEmployees
                    node.m4showEmployees = true;
                    var parent = node.getParents();		
        			if(parent[0].exployChild && belongListEmployees(parent[0].id)){		                               
                    	node.drawn = true;
                        node.exist= true;	
                   }    
                } else {
                    node.m4showEmployees = false;
                    node.drawn = false;
                    node.exist=false;
                }
            }
        });
    }else if(type == 'onlyEmployees'){
    	nodeParent.eachSubnode(function (node) {
            // if have this data, hide node, groupEmployees is when gropued
            // employees
    		  if (node.type == TYPE_SUBORDINATE) {
    	            if (isNodeGroupEmployee(node)) {// if node type groupEmployees
    	                node.m4showEmployees = false;
    	                node.drawn = false;
    	                node.exist=false;
    	            }else {
    	                node.m4showEmployees = true;
    	                var parent = node.getParents();		
            			if(parent[0].exployChild && belongListEmployees(parent[0].id)){		                               
                        	node.drawn = true;
                            node.exist= true;	
                       }    
    	            }
    	        }
        });                      
    }

}


/**
* Function that searches an ID of an employee on the grouped nodes
* 
* @param idNode
*/
function getIdNodeContent(name) {
    var result = '';
    _st.graph.eachNode(function (node) {
        // if have this data, is a grouped node of employees
        if (node.data['Name:-1']) {
            for (var i in node.data) {
                if (node.data[i] == name) {
                    result = node;
                }
            }
        }
    });
    return result;
}

/**
* Function that remove and close employee table
*/
function closeTables() {
    // remove cells
    // delete table person
    // remove cells
    var tbody = $jit.id('tbodyEmployee');
    var rowCount = tbody.rows.length;
    if (tbody.rows.length > 0) {
        for (var i = 0; i < rowCount; i++) {
            tbody.deleteRow(i);
            rowCount--;
            i--;
        }
    }
    var tbody = $jit.id('tbodyDepartament');
    var rowCount = tbody.rows.length;
    if (tbody.rows.length > 0) {
        for (var i = 0; i < rowCount; i++) {
            tbody.deleteRow(i);
            rowCount--;
            i--;
        }
    }

    //guardamos desplazamiento
    //var despX = _st.canvas.canvases[0].translateOffsetX;
    //var despY = _st.canvas.canvases[0].translateOffsetY;
    _serializedPositions = meta4.orgdyn.lienzo.getPositionCanvasSerialized(_st);

    elem = document.getElementById("container-center-button");
    if (elem.style.display == 'block') {
        elem.style.display = 'none';
        _st.canvas.resize(_st.canvas.canvases[0].size.width, _st.canvas.canvases[0].size.height / 0.7);

        //transalete
        //_st.canvas.translate(despX, despY, false, true );
        
		meta4.orgdyn.lienzo.setPositionCanvasSerialized(_st, $jit.id('fijarLienzo'), _serializedPositions);
    }
}


/**
* Function that control checkbox of table employee, that show employees of
* subdepartament
*/
function controlShowTable() {

    var showTableRecursive = $jit.id('showTableRecursive');
    $jit.util.addEvent(showTableRecursive, 'click', function () {

        // Create new table
        var container = document.getElementById("container-center-button");
        if (container.typeTable == 'employee') {
            createTablePerson(container.nodePrimary);
        } else if (container.typeTable == 'departament') {
            createTableDepartament(container.nodePrimary);
        } else if (container.typeTable == 'pos') {
            createTablePos(container.nodePrimary);
        }

    });
}

/**
* Function that control submenu for type print
*/
function controTypePrint() {
    var controlLevel = $jit.id('printByLevel');
    $jit.util.addEvent(controlLevel, 'click', function () {
        if (controlLevel.checked == true) {
            $jit.id('contLevelsToPrint').style.display = 'block';
        }
    });

    var controlComplete = $jit.id('printComplete');
    $jit.util.addEvent(controlComplete, 'click', function () {

        if (controlComplete.checked == true) {
            $jit.id('contLevelsToPrint').style.display = 'none';
        }
    });

}


function controlPrintRealPositions() {
	
	var pRealPositionNodes = $jit.id('printRealPositionNodes');
	$jit.util.addEvent(pRealPositionNodes, 'change', function () {
		doControlPrintRealPositions();        
    });
}

function doControlPrintRealPositions(bCalledInControlPaperSize) {
	var pRealPositionNodes = $jit.id('printRealPositionNodes');
	var controlLevel = $jit.id('printByLevel');
    var controlPVisibles = $jit.id('PrintVisibleNodes');
	var controlComplete = $jit.id('printComplete');

    if (pRealPositionNodes.checked == true && _hasMoveNode) {         
       	
    	controlComplete.checked = true;        
    	$jit.id('contLevelsToPrint').style.display = 'none';

       	controlLevel.disabled = true; 
       	controlPVisibles.disabled = true;
       	controlPVisibles.checked = true;

		setImagePreview();
    } else {
    	controlLevel.disabled = false;  
    	controlPVisibles.disabled = false;

    	//Avoid reentry
    	if (!bCalledInControlPaperSize) {
    	   doControlPaperSize();
        }
    }
}

/**
* Function that control internal logic for "Auto paperSize"
* When select "Auto" papersize, we can only print to "Complete" Tree
*/
function controlPaperSize() {
	var sizePaper = $jit.id('selectPaperSize');

    $jit.util.addEvent(sizePaper, 'change', function () {
    	doControlPaperSize();
    });
}

function doControlPaperSize() {
		var sizePaper = $jit.id('selectPaperSize');
		var portrait = $jit.id('printPortrait');
		var landscape = $jit.id('printLandscape');
		//var sizeFontHead =$jit.id('selectFontHead');
		//var sizeFontBody =$jit.id('selectFontBody');

        var controlLevel = $jit.id('printByLevel');

        if (sizePaper.value === 'Auto') {
        	var controlComplete = $jit.id('printComplete');
        	controlComplete.checked = true;        
        	$jit.id('contLevelsToPrint').style.display = 'none';
        	
        	controlLevel.disabled = true;        	
        	landscape.checked = true;
        	portrait.disabled = true;

        	//sizeFontHead.disabled = true;
        	//sizeFontHead.value = 0;
        	//sizeFontBody.disabled = true;
        	//sizeFontBody.value = 0;

        	setImagePreview();
        } else {        	

        	controlLevel.disabled = false;
        	portrait.disabled = false;
        	//sizeFontHead.disabled = false;
        	//sizeFontBody.disabled = false;        	
        	//
        	doControlPrintRealPositions(true);
        }
}

/**
 * Function to control image preview
 */
function controlImagePreview(){
	var landscape= $jit.id('printLandscape');		
	 $jit.util.addEvent(landscape, 'click', function () {
	        setImagePreview();
	 });
		
	var portrait= $jit.id('printPortrait');
	$jit.util.addEvent(portrait, 'click', function () {
        setImagePreview();
	});
	
	var byLevels= $jit.id('printByLevel');
	$jit.util.addEvent(byLevels, 'click', function () {
        setImagePreview();
	});
	
	var complete= $jit.id('printComplete');	
	$jit.util.addEvent(complete, 'click', function () {
        setImagePreview();
	});
	var printPlume= $jit.id('printPlume');
	$jit.util.addEvent(printPlume, 'click', function () {
        setImagePreview();
	});
	var printHorizontal= $jit.id('printHorizontal');
	$jit.util.addEvent(printHorizontal, 'click', function () {
        setImagePreview();
	});
	var levelsToPrint= $jit.id('levelsToPrint');
	$jit.util.addEvent(levelsToPrint, 'change', function () {
        setImagePreview();        
	});	
	
}

/**
 * Function to set imagen preview 
 */
function setImagePreview(){
	
	var img= $jit.id('imgPreview');
	
	var landscape= $jit.id('printLandscape').checked;	
	var complete= $jit.id('printComplete').checked;
	var printHorizontal= $jit.id('printHorizontal').checked;
	
	
	 var signindex = $jit.id('levelsToPrint').selectedIndex;
     var val = $jit.id('levelsToPrint').options[signindex].value;
	
     if(complete){
    	 if(landscape){
    		 img.src=_AbsolutePathTemplate+'images/horizontal.png';
    	 }else{//portrait
    		 img.src=_AbsolutePathTemplate+'images/vertical.png';
    	 }
     }else{//by levels
    	 if(landscape){
    		if(printHorizontal){
    			 img.src=_AbsolutePathTemplate+'images/niveles_'+val+'_horizontal.png';
    		}else{//plume
    			 img.src=_AbsolutePathTemplate+'images/niveles_'+val+'_horizontal_pluma.png';
    		}
    	 }else{//portrait
    		 if(printHorizontal){
    			 img.src=_AbsolutePathTemplate+'images/niveles_'+val+'_vertical.png';
    		}else{//plume
    			 img.src=_AbsolutePathTemplate+'images/niveles_'+val+'_vertical_pluma.png';
    		}
    	 }
     }	
}

/**
* Function to control save style
*/
function controlSaveStyle() {
		
    // put name style in textfield to save style
    $jit.id('labelIdStyle').innerText = _configStyle[0];
    $jit.id('labelNameStyle').innerText = _configStyle[1];

    //firefox textContent
    $jit.id('labelIdStyle').textContent = _configStyle[0];
    $jit.id('labelNameStyle').textContent = _configStyle[1];

    if (_configStyle[2] == 'public') {
        $jit.id('labelProtectStyle').innerText = "public";
        //firefox textContent
        $jit.id('labelProtectStyle').textContent = "public";
    } else {
        $jit.id('savePrivate').checked = true;
        $jit.id('labelProtectStyle').innerText = "private";
        //firefox textContent        
        $jit.id('labelProtectStyle').textContent = "private";
    }
}

/**
* Function to show table of orgchart. Receive node from where we create the
* table
* 
* @param node
* @param typeTable
*/
function tableNode(node, typeTable) {

    if (typeTable == 'employee') {
        if (node.type==TYPE_WU) {
            var container = document.getElementById("container-center-button");
            container.typeTable = 'employee';
            container.nodePrimary = node;

            var tableDepartament = document
					.getElementById("container-tablePerson");
            tableDepartament.style.display = 'block';

            // Put name departament in tittle for table
            var nameDepTable = document.getElementById("NameDepTableEmployee");
            var nameDepTable2 = document.getElementById("NameDepTableEmployee2");
            
            if(_configStyle[3]!="3"){
            	nameDepTable.innerText = _titleTableDepartament+": ";          
                nameDepTable2.innerText = node.data['NameWU'];
                //firefox textContent
                nameDepTable.textContent = _titleTableDepartament+": ";
                nameDepTable2.textContent = node.data['NameWU'];            	
            }else{//position orgchart
            	nameDepTable.innerText = _titleTableDepartament+": ";          
                nameDepTable2.innerText = node.data['VacancyName'];
                //firefox textContent
                nameDepTable.textContent = _titleTableDepartament+": ";
                nameDepTable2.textContent = node.data['VacancyName'];
            }
            
            

            // Show table
            var elem = document.getElementById("container-center-button");

            // If table is not create.
            if (elem.style.display == '' || elem.style.display == 'none') {


                //guardamos desplazamiento
                //var despX = _st.canvas.canvases[0].translateOffsetX;
                //var despY = _st.canvas.canvases[0].translateOffsetY;

                _serializedPositions = meta4.orgdyn.lienzo.getPositionCanvasSerialized(_st);

                _st.canvas.resize(_st.canvas.canvases[0].size.width, _st.canvas.canvases[0].size.height * 0.7);
              //size div container table
                $jit.id('containerTablesNodes').style.height=_st.canvas.canvases[0].size.height * 0.37+'px';
                
                //transalete
                //_st.canvas.translate(despX, despY, false, true);

                meta4.orgdyn.lienzo.setPositionCanvasSerialized(_st, $jit.id('fijarLienzo'), _serializedPositions);

                elem.style.display = 'block';
                // Create table with person
                createTablePerson(node);
            } else {
                // If table was created. Delete table and create
                // new table
                createTablePerson(node);
            }
            var tableDepartament = document.getElementById("container-tableDepartament");
            tableDepartament.style.display = 'none';
            var tablePos = document.getElementById("container-tablePos");
            tablePos.style.display = 'none';
        }
    }
    if (typeTable == 'departament') {
        if (node.type==TYPE_WU) {
            var container = document.getElementById("container-center-button");
            container.typeTable = 'departament';
            container.nodePrimary = node;

            var tableDepartament = document
					.getElementById("container-tableDepartament");

            tableDepartament.style.display = 'block';

            // Put name departament in tittle for table
            var nameDepTable = document.getElementById("NameDepTableEmployee");
            var nameDepTable2 = document.getElementById("NameDepTableEmployee2");
            nameDepTable.innerText = _titleTableEmployee+": ";
            nameDepTable2.innerText =node.data['NameWU'];
            
            //firefox textContent
            nameDepTable.textContent = _titleTableEmployee+": ";
            nameDepTable2.textContent = node.data['NameWU'];

            // Show table
            var elem = document.getElementById("container-center-button");

            // If table is not create.
            if (elem.style.display == '' || elem.style.display == 'none') {

                //guardamos desplazamiento
                //var despX = _st.canvas.canvases[0].translateOffsetX;
                //var despY = _st.canvas.canvases[0].translateOffsetY;
                _serializedPositions = meta4.orgdyn.lienzo.getPositionCanvasSerialized(_st);

                _st.canvas.resize(_st.canvas.canvases[0].size.width, _st.canvas.canvases[0].size.height * 0.7);
              //size div container table
                $jit.id('containerTablesNodes').style.height=_st.canvas.canvases[0].size.height * 0.37+'px';
                
                //transalete
                //_st.canvas.translate(despX, despY, false, true);
                meta4.orgdyn.lienzo.setPositionCanvasSerialized(_st, $jit.id('fijarLienzo'), _serializedPositions);

                elem.style.display = 'block';
                // Create table with person
                createTableDepartament(node);
            } else {
                // If table was created. Delete table and create
                // new table
                createTableDepartament(node);
            }
            var tablePerson = document.getElementById("container-tablePerson");

            tablePerson.style.display = 'none';
            var tablePos = document.getElementById("container-tablePos");
            tablePos.style.display = 'none';
        }
    }
    if (typeTable == 'pos') {
    	 if (node.type==TYPE_WU) {
             var container = document.getElementById("container-center-button");
             container.typeTable = 'pos';
             container.nodePrimary = node;

             var tablePos = document
 					.getElementById("container-tablePos");

             tablePos.style.display = 'block';

             // Put name position in tittle for table
             var nameDepTable = document.getElementById("NameDepTableEmployee");
             var nameDepTable2 = document.getElementById("NameDepTableEmployee2");
             nameDepTable.innerText = _titleTableEmployee+": ";
             nameDepTable2.innerText =node.data['VacancyName'];
             
             //firefox textContent
             nameDepTable.textContent = _titleTableEmployee+": ";
             nameDepTable2.textContent = node.data['VacancyName'];

             // Show table
             var elem = document.getElementById("container-center-button");

             // If table is not create.
             if (elem.style.display == '' || elem.style.display == 'none') {

                 //guardamos desplazamiento
                 //var despX = _st.canvas.canvases[0].translateOffsetX;
                 //var despY = _st.canvas.canvases[0].translateOffsetY;
                 _serializedPositions = meta4.orgdyn.lienzo.getPositionCanvasSerialized(_st);

                 _st.canvas.resize(_st.canvas.canvases[0].size.width, _st.canvas.canvases[0].size.height * 0.7);
               //size div container table
                 $jit.id('containerTablesNodes').style.height=_st.canvas.canvases[0].size.height * 0.37+'px';
                 
                 //transalete
                 //_st.canvas.translate(despX, despY, false, true);
                 meta4.orgdyn.lienzo.setPositionCanvasSerialized(_st, $jit.id('fijarLienzo'), _serializedPositions);

                 elem.style.display = 'block';
                 // Create table with person
                 createTablePos(node);
             } else {
                 // If table was created. Delete table and create
                 // new table
            	 createTablePos(node);
             }
             var tableDepartament = document.getElementById("container-tablePerson");

             tableDepartament.style.display = 'none';
             var tablePos = document.getElementById("container-tableDepartament");
             tablePos.style.display = 'none';
         }
    }

}

function sendMail(node){
	if(node.type==TYPE_SUBORDINATE){
		document.location.href='mailto:'+node.data['Email'];
	}
	if(node.type==TYPE_WU){
		document.location.href='mailto:'+node.data['ResponsibleEmail'];
	}
}

function addContact(node){
	if(node.type==TYPE_SUBORDINATE){
		addContact_ajax(node.data['Id']);
	}
	if(node.type==TYPE_WU){	
		addContact_ajax(node.data['ResponsibleID']);
	}
}


$(document).ready(function(){
	addContact_ajax = function(in_idHR){
		$.post("/servlet/CheckSecurity/JSP" + _PathTechJSP +  "ssco_mn_contact.jsp",{Action:'Insert',IdHR:in_idHR},function(response){
				var pos = response.indexOf(':', 0);
				var result = '';

				// If postion is -1, don't have this character
				if (pos != -1) {
					result = response.substring(pos+2, pos+4);
					result = result.replace(' ','');
					result = result.replace('"','');
					
					if(result=='0'){
						alert(_addContactOK);
					}

					if(result=='-1'){
						alert(_addContactError);
					}
				}
			});
		};
});

$(document).ready(function(){
	$.ajaxSetup({
		 contentType: "application/x-www-form-urlencoded; charset=UTF-8"
	});
	
	save_typeOrg = function(serialize){
		$.post("/servlet/CheckSecurity/JSP" + _PathTechJSP + "ssco_dyn_save_type_orgchart.jsp", {ParamSerialize:serialize}, function(response){
			
			//var bHaveSavedView = serializa.indexOf('saveStyleAndView', 0) > 0;
			
			//var pos = response.indexOf(':', 0);  // Si se ha serializado las posiciones de los nodos, nos llegan varios results: "{sResult:"0.00000000"}{sResult:"2.00000000"}"
			var pos = response.lastIndexOf(':');

			var result = '';
			// If postion is -1, don't have this character
			if (pos != -1){
				result = response.substring(pos+2, pos+4);
				result = result.replace(' ','');
				result = result.replace('"','');
				result = result.replace('.','');

				if (result == '1') {
					//var msg = (bHaveSavedView ? _msgSaveViewError : _msgSaveError);
					alert (_msgSaveError);
				}

				if (result == '2') {
					//var msg = (bHaveSavedView ? _msgSaveViewCorrect: _msgSaveCorrect);
					alert ( _bSavingESSDefaultStyle ? _msgSaveCorrect : _msgSavePosStyleCorrect);

					// En el momento que se haya grabado las posiciones de los nodos dejamos activada la variable
					if (!_bSavedESSPositionStyle) {
						_bSavedESSPositionStyle = !_bSavingESSDefaultStyle;	
					}					
	
					// Si estamos en ESS, preguntamos si queremos grabar el estilo por defecto
					if(_propertyBag.essMode) {
						// Se preguntar?si se quiere grabar el Estilo por defecto si se lleg?a cambiar el estilo...
						if (!_bSavingESSDefaultStyle && !compareStyles(listStyles, _initialListStyles)) { 
							var ok = confirm(_msgSaveUserStyle);
							if (ok == true) {
								_bSavingESSDefaultStyle = true;
								
								setTimeout(sendStyle(), 50);
							}
						} else if (!_bSavedESSPositionStyle) {
							//Tenemos que borrar el estilo de la WU
							_bSavingESSDefaultStyle = false;
							setTimeout(deleteStyle(), 50);							
						}
					}
				}
			}
		});
	};

	essDeleteStyle = function(serialize){
		$.post("/servlet/CheckSecurity/JSP" + _PathTechJSP + "ssco_dyn_save_type_orgchart.jsp", {ParamSerialize:serialize}, function(response){
						
			var pos = response.lastIndexOf(':');

			var result = '';
			// If postion is -1, don't have this character
			if (pos != -1){
				result = response.substring(pos+2, pos+4);
				result = result.replace(' ','');
				result = result.replace('"','');
				result = result.replace('.','');

				if (result == '3') {		
					alert(_msgDeleteError); //"Error al borrar tipo de organigrama");
				}

				if (result == '4') {
					//alert ("Tipo organigrama no encontrado.");   
				}

				if (result == '5') {
					//alert ("Tipo organigrama borrado correctamente.");   
				}
			}
		});
	};

	refresh_session = function(){
		$.post("/tcorgchart/jsp/ssco_dyn_orgchart_refresh_session.jsp",function(response){	});
	};
});


/**
function save_typeOrg(serialize)
{
    $.ajax({
        url: "/servlet/CheckSecurity/JSP" + _PathTechJSP + "ssco_dyn_save_type_orgchart.jsp",
        type: 'POST',
        contentType: "charset=utf-8", 
        ParamSerialize:serialize,
        success: function(data, textStatus, xhr) {
        	var pos = response.indexOf(':', 0);
		    var result = '';
		    // If postion is -1, don't have this character
		    if (pos != -1) {			        
		        result = response.substring(pos+2, pos+4);
		        result = result.replace(' ','');
		        result = result.replace('"','');
		        result = result.replace('.','');
		        if(result=='1'){
		        	alert(_msgSaveError);
		        }			        
		        if(result=='2'){
		        	alert(_msgSaveCorrect);
		        }

		    }          
        }      
    });
}*/



/**
* Function that writes the employees from a selected node If you selected the
* check look for employees in departments that are child nodes
* 
* @param node,
*            node from where start list of employee
*/
function createTablePerson(node) {

    // remove cells
    var tbody = $jit.id('tbodyEmployee');
    var rowCount = tbody.rows.length;
    if (tbody.rows.length > 0) {
        for (var i = 0; i < rowCount; i++) {
            tbody.deleteRow(i);
            rowCount--;
            i--;
        }
    }

    var count = 1;
    var showRecursive = $jit.id('showTableRecursive');
    
    
   

    if (showRecursive.checked == true) {
        // Create file for each employee
        node.eachSubgraph(function (childNode) {
        	
        	
        	//add responsable info
			/** bug 0268897
        if(childNode.type==TYPE_WU && _configStyle[3]!="3"){
        	
        	   count = count + 1;
               var cell1 = document.createElement("td");
               var cell2 = document.createElement("td");
               var cell3 = document.createElement("td");
               var cell4 = document.createElement("td");
               var cell5 = document.createElement("td");
               var cell6 = document.createElement("td");

               var file = document.createElement("tr");

               if (count % 2 == 0) {
                   cell1.className = 'evenrow';
                   cell2.className = 'evenrow';
                   cell3.className = 'evenrow';
                   cell4.className = 'evenrow';
                   cell5.className = 'evenrow';
                   cell6.className = 'evenrow';
               } else {
               	cell1.className = 'oddrow';
                   cell2.className = 'oddrow';
                   cell3.className = 'oddrow';
                   cell4.className = 'oddrow';
                   cell5.className = 'oddrow';
                   cell6.className = 'oddrow';

               }
        	
        	 // Create label
            var contLabel = document.createElement('label');
            contLabel.innerText = count;
            //firefox textContent
            contLabel.textContent = count;
            contLabel.htmlFor = count;
            contLabel.text = count;

            // Create label
            var idLabel = document.createElement('label');
            if(_propertyBag.essMode == false || (_propertyBag.essMode == true && _propertyBag.disable_ESS_EmpLinks == false))
			{
				idLabel.onclick =  function (){sendQViewEmployee(childNode);};
                idLabel.className='linkQW';
			}
            
            idLabel.innerText = childNode.data['ResponsibleID'];
            //firefox textContent
            idLabel.textContent = childNode.data['ResponsibleID'];
            // Create label
            var nameLabel = document.createElement('label');
            nameLabel.innerText = childNode.data['ResponsibleName'];
            //firefox textContent
            nameLabel.textContent = childNode.data['ResponsibleName'];
            // Create label   
            var depLabel = document.createElement('label');
            depLabel.innerText = childNode.data['WUID'];
            //firefox textContent
            depLabel.textContent = childNode.data['WUID'];

            // Create label
            var postLabel = document.createElement('label');
            postLabel.innerText = childNode.data['ResponsiblePosition'];
            //firefox textContent
            postLabel.textContent = childNode.data['ResponsiblePosition'];
            

            // Create label
            var tlfLabel = document.createElement('label');
            if (node.data['ResponsiblePhone']) {
                tlfLabel.innerText = childNode.data['ResponsiblePhone'];
                //firefox textContent
                tlfLabel.textContent = childNode.data['ResponsiblePhone'];
            }
            // Create label
            var mailLabel = document.createElement('a');
            if (childNode.data['ResponsibleEmail']) {
                mailLabel.innerText = childNode.data['ResponsibleEmail'];
                //firefox textContent
                mailLabel.textContent = childNode.data['ResponsibleEmail'];
                if(_propertyBag.essMode==true){
                	mailLabel.href='mailto:'+node.data['ResponsibleEmail'];
                }                
            }

            // add content to cell
            cell1.appendChild(idLabel);
            cell2.appendChild(nameLabel);
            cell3.appendChild(depLabel);
            cell4.appendChild(postLabel);
            cell5.appendChild(tlfLabel);
            cell6.appendChild(mailLabel);

            // add cells to file
            file.appendChild(cell1);
            file.appendChild(cell2);
            file.appendChild(cell3);
            file.appendChild(cell4);
            file.appendChild(cell5);
            file.appendChild(cell6);

            // Add file to talble
            tbody.appendChild(file);
        	
        	
        }*/
        	
        	        	
        if(childNode.type==TYPE_SUBORDINATE && !isGroup(childNode)){

                count = count + 1;
                var cell1 = document.createElement("td");
                var cell2 = document.createElement("td");
                var cell3 = document.createElement("td");
                var cell4 = document.createElement("td");
                var cell5 = document.createElement("td");
                var cell6 = document.createElement("td");

                var file = document.createElement("tr");

                if (count % 2 == 0) {
                    cell1.className = 'evenrow';
                    cell2.className = 'evenrow';
                    cell3.className = 'evenrow';
                    cell4.className = 'evenrow';
                    cell5.className = 'evenrow';
                    cell6.className = 'evenrow';
                } else {
                	cell1.className = 'oddrow';
                    cell2.className = 'oddrow';
                    cell3.className = 'oddrow';
                    cell4.className = 'oddrow';
                    cell5.className = 'oddrow';
                    cell6.className = 'oddrow';

                }

                // Create label
                var contLabel = document.createElement('label');
                contLabel.innerText = count;
                //firefox textContent
                contLabel.textContent = count;
                contLabel.htmlFor = count;
                contLabel.text = count;

                // Create label
                var idLabel = document.createElement('label');                
                if(_propertyBag.essMode == false || (_propertyBag.essMode == true && _propertyBag.disable_ESS_EmpLinks == false))
                {
                     idLabel.onclick =  function (){sendQViewEmployee(childNode);};
                     idLabel.className='linkQW';
                }
 
                idLabel.innerText = childNode.data['Id'];
                //firefox textContent
                idLabel.textContent = childNode.data['Id'];
                // Create label
                var nameLabel = document.createElement('label');
                nameLabel.innerText = childNode.data['Name'];
                //firefox textContent
                nameLabel.textContent = childNode.data['Name'];
                // Create label
                var parent = childNode.getParents();
                var depLabel = document.createElement('label');
                                             
                if(_configStyle[3]!="3"){
                	if (childNode.id != _st.root) {
                        depLabel.innerText = parent[0].data['NameWU'];
                        //firefox textContent
                        depLabel.textContent = parent[0].data['NameWU'];
                    }	
                	
                }else{
                	//orgchart position
                    depLabel.innerText = parent[0].data['VacancyID'];
                    //firefox textContent
                    depLabel.textContent = parent[0].data['VacancyID'];
                }
                
                

                // Create label
                var postLabel = document.createElement('label');
                if (childNode.data['Post']) {
                    postLabel.innerText = childNode.data['Post'];
                    //firefox textContent
                    postLabel.textContent = childNode.data['Post'];
                }

                // Create label
                var tlfLabel = document.createElement('label');
                if (childNode.data['Phone']) {
                    tlfLabel.innerText = childNode.data['Phone'];
                    //firefox textContent
                    tlfLabel.textContent = childNode.data['Phone'];
                }
                // Create label
                var mailLabel = document.createElement('a');
                if (childNode.data['Email']) {
                    mailLabel.innerText = childNode.data['Email'];
                    //firefox textContent
                    mailLabel.textContent = childNode.data['Email'];
                    if(_propertyBag.essMode==true){
                    	mailLabel.href='mailto:'+childNode.data['Email'];	
                    }                    
                }

                // add content to cell
                cell1.appendChild(idLabel);
                cell2.appendChild(nameLabel);
                cell3.appendChild(depLabel);
                cell4.appendChild(postLabel);
                cell5.appendChild(tlfLabel);
                cell6.appendChild(mailLabel);

                // add cells to file
                file.appendChild(cell1);
                file.appendChild(cell2);
                file.appendChild(cell3);
                file.appendChild(cell4);
                file.appendChild(cell5);
                file.appendChild(cell6);

                // Add file to talble
                tbody.appendChild(file);
            }
        }); // end for eachSubgraph

    } else {// if only show employees child
        // Create file for each employee
    	
    	 //write responsable in table    
    	/** bug 0268897
    	if(_configStyle[3]!="3"){
    	
	        var cell1 = document.createElement("td");
	        var cell2 = document.createElement("td");
	        var cell3 = document.createElement("td");
	        var cell4 = document.createElement("td");
	        var cell5 = document.createElement("td");
	        var cell6 = document.createElement("td");
	
	        var file = document.createElement("tr");
	        
	    	cell1.className = 'oddrow';
	        cell2.className = 'oddrow';
	        cell3.className = 'oddrow';
	        cell4.className = 'oddrow';
	        cell5.className = 'oddrow';
	        cell6.className = 'oddrow';
	
	        
	
	        // Create label
	        var contLabel = document.createElement('label');
	        contLabel.innerText = count;
	        //firefox textContent
	        contLabel.textContent = count;
	        contLabel.htmlFor = count;
	        contLabel.text = count;
	
	        // Create label
	        var idLabel = document.createElement('label');
			if(_propertyBag.essMode == false || (_propertyBag.essMode == true && _propertyBag.disable_ESS_EmpLinks == false))
			{
				idLabel.onclick =  function (){sendQViewEmployee(node);};
                idLabel.className='linkQW';
			}
 
	        idLabel.innerText = node.data['ResponsibleID'];
	        //firefox textContent
	        idLabel.textContent = node.data['ResponsibleID'];
	        // Create label
	        var nameLabel = document.createElement('label');
	        nameLabel.innerText = node.data['ResponsibleName'];
	        //firefox textContent
	        nameLabel.textContent = node.data['ResponsibleName'];
	        // Create label   
	        var depLabel = document.createElement('label');
	        depLabel.innerText = node.data['WUID'];
	        //firefox textContent
	        depLabel.textContent = node.data['WUID'];
	
	        // Create label
	        var postLabel = document.createElement('label');
	        postLabel.innerText = node.data['ResponsiblePosition'];
	        //firefox textContent
	        postLabel.textContent = node.data['ResponsiblePosition'];
	        
	
	        // Create label
	        var tlfLabel = document.createElement('label');
	        if (node.data['ResponsiblePhone']) {
	            tlfLabel.innerText = node.data['ResponsiblePhone'];
	            //firefox textContent
	            tlfLabel.textContent = node.data['ResponsiblePhone'];
	        }
	        // Create label
	        var mailLabel = document.createElement('a');
	        if (node.data['ResponsibleEmail']) {
	            mailLabel.innerText = node.data['ResponsibleEmail'];                
	            //firefox textContent
	            mailLabel.textContent = node.data['ResponsibleEmail'];
	            
	            mailLabel.href='mailto:'+node.data['ResponsibleEmail'];
	        }
	
	        // add content to cell
	        cell1.appendChild(idLabel);
	        cell2.appendChild(nameLabel);
	        cell3.appendChild(depLabel);
	        cell4.appendChild(postLabel);
	        cell5.appendChild(tlfLabel);
	        cell6.appendChild(mailLabel);
	
	        // add cells to file
	        file.appendChild(cell1);
	        file.appendChild(cell2);
	        file.appendChild(cell3);
	        file.appendChild(cell4);
	        file.appendChild(cell5);
	        file.appendChild(cell6);
	
	        // Add file to talble
	        tbody.appendChild(file);
        
    	}*/
        node.eachSubnode(function (childNode) {

            if (childNode.data['Name']) {

                count = count + 1;
                var cell1 = document.createElement("td");
                var cell2 = document.createElement("td");
                var cell3 = document.createElement("td");
                var cell4 = document.createElement("td");
                var cell5 = document.createElement("td");
                var cell6 = document.createElement("td");

                var file = document.createElement("tr");

                if (count % 2 == 0) {
                    cell1.className = 'evenrow';
                    cell2.className = 'evenrow';
                    cell3.className = 'evenrow';
                    cell4.className = 'evenrow';
                    cell5.className = 'evenrow';
                    cell6.className = 'evenrow';
                } else {
                	cell1.className = 'oddrow';
                    cell2.className = 'oddrow';
                    cell3.className = 'oddrow';
                    cell4.className = 'oddrow';
                    cell5.className = 'oddrow';
                    cell6.className = 'oddrow';

                }
                // Create label
                var contLabel = document.createElement('label');
                contLabel.innerText = count;
                //firefox textContent
                contLabel.textContent = count;
                contLabel.htmlFor = count;
                contLabel.text = count;

                // Create label
                var idLabel = document.createElement('label');              
				if(_propertyBag.essMode == false || (_propertyBag.essMode == true && _propertyBag.disable_ESS_EmpLinks == false))
				{
					idLabel.onclick =  function (){sendQViewEmployee(childNode);};
			        idLabel.className='linkQW';
				}
                            
                //firefox textContent
                idLabel.innerText = childNode.data['Id'];
                idLabel.textContent = childNode.data['Id'];

                // Create label
                var nameLabel = document.createElement('label');
                //firefox textContent
                nameLabel.innerText = childNode.data['Name'];
                nameLabel.textContent = childNode.data['Name'];

                // Create label
                var parent = childNode.getParents();
                var depLabel = document.createElement('label');
                
                if(_configStyle[3]!="3"){
                	if (childNode.id != _st.root) {
                        depLabel.innerText = parent[0].data['NameWU'];
                        //firefox textContent
                        depLabel.textContent = parent[0].data['NameWU'];
                    }	
                	
                }else{
                	//orgchart position
                    depLabel.innerText = parent[0].data['VacancyID'];
                    //firefox textContent
                    depLabel.textContent = parent[0].data['VacancyID'];
                }
                
                

                // Create label
                var postLabel = document.createElement('label');
                if (childNode.data['Post']) {
                    //firefox textContent
                    postLabel.innerText = childNode.data['Post'];
                    postLabel.textContent = childNode.data['Post'];
                }

                // Create label
                var tlfLabel = document.createElement('label');
                if (childNode.data['Phone']) {
                    //firefox textContent
                    tlfLabel.innerText = childNode.data['Phone'];
                    tlfLabel.textContent = childNode.data['Phone'];
                }
                // Create label
                var mailLabel = document.createElement('a');
                if (childNode.data['Email']) {
                    mailLabel.innerText = childNode.data['Email'];
                    //firefox textContent
                    mailLabel.textContent = childNode.data['Email'];
                    if(_propertyBag.essMode==true){
                    	mailLabel.href='mailto:'+childNode.data['Email'];
                    }                    
                }

                // add content to cell
                cell1.appendChild(idLabel);
                cell2.appendChild(nameLabel);
                cell3.appendChild(depLabel);
                cell4.appendChild(postLabel);
                cell5.appendChild(tlfLabel);
                cell6.appendChild(mailLabel);

                // add cells to file
                file.appendChild(cell1);
                file.appendChild(cell2);
                file.appendChild(cell3);
                file.appendChild(cell4);
                file.appendChild(cell5);
                file.appendChild(cell6);

                // Add file to table
                tbody.appendChild(file);
            }

        }); // end if eachSubnode
    } // END if only show employees child, no recursive */

    var t = document.getElementById('tablePerson');
    Table.scrape(t);
}



/**
* Function that writes the positions from a selected node If you selected the
* check look for positions that are child nodes
* 
* @param node,
*            node from where start list of position
*/
function createTablePos(node) {

    // remove cells
    var tbody = $jit.id('tbodyPos');
    var rowCount = tbody.rows.length;
    if (tbody.rows.length > 0) {
        for (var i = 0; i < rowCount; i++) {
            tbody.deleteRow(i);
            rowCount--;
            i--;
        }
    }

    var count = 1;
    var showRecursive = $jit.id('showTableRecursive');
    
      

    if (showRecursive.checked == true) {
        // Create file for each position
        node.eachSubgraph(function (childNode) {
        	        	               	        	       
        if(childNode.type==TYPE_WU){

                count = count + 1;
                var cell1 = document.createElement("td");
                var cell2 = document.createElement("td");
                var cell3 = document.createElement("td");
                var cell4 = document.createElement("td");
                var cell5 = document.createElement("td");
                var cell6 = document.createElement("td");

                var file = document.createElement("tr");

                if (count % 2 == 0) {
                    cell1.className = 'evenrow';
                    cell2.className = 'evenrow';
                    cell3.className = 'evenrow';
                    cell4.className = 'evenrow';
                    cell5.className = 'evenrow';
                    cell6.className = 'evenrow';

                } else {
                	cell1.className = 'oddrow';
                    cell2.className = 'oddrow';
                    cell3.className = 'oddrow';
                    cell4.className = 'oddrow';
                    cell5.className = 'oddrow';
                    cell6.className = 'oddrow';
                }

				if (_propertyBag.hide_RW_CostCenterColumn == true)
				{
					cell6.className += " hideColumn";
				}


                // Create label
                var contLabel = document.createElement('label');
                contLabel.innerText = count;
                //firefox textContent
                contLabel.textContent = count;
                contLabel.htmlFor = count;
                contLabel.text = count;

                // Create label
                var idLabel = document.createElement('label');                
                idLabel.onclick = function (){sendQViewVacancy(childNode.data['VacancyID']);};
                idLabel.className='linkQW';

                idLabel.innerText = childNode.data['VacancyID'];
                //firefox textContent
                idLabel.textContent = childNode.data['VacancyID'];
                // Create label
                var nameLabel = document.createElement('label');
                nameLabel.innerText = childNode.data['VacancyName'];
                //firefox textContent
                nameLabel.textContent = childNode.data['VacancyName'];
                                              
                // Create label
                var postLabel = document.createElement('label');
                if (childNode.data['JobName']) {
                    postLabel.innerText = childNode.data['JobName'];
                    //firefox textContent
                    postLabel.textContent = childNode.data['JobName'];
                }

                // Create label
                var WUassociated = document.createElement('label');                
                WUassociated.innerText = childNode.data['NameVacancyWU'];
                    //firefox textContent
                WUassociated.textContent = childNode.data['NameVacancyWU'];
                
                // Create label
                var location = document.createElement('a');
                if (childNode.data['Location']) {
                	location.innerText = childNode.data['Location'];
                    //firefox textContent
                	location.textContent = childNode.data['Location'];                                       
                }
                
             // Create label
                var workCenter = document.createElement('a');
                if (childNode.data['WorkCenter']) {
                	workCenter.innerText = childNode.data['WorkCenter'];
                    //firefox textContent
                	workCenter.textContent = childNode.data['WorkCenter'];                                       
                }
				

                // add content to cell
                cell1.appendChild(idLabel);
                cell2.appendChild(nameLabel);
                cell3.appendChild(postLabel);
                cell4.appendChild(WUassociated);
                cell5.appendChild(location);
                cell6.appendChild(workCenter);

                // add cells to file
                file.appendChild(cell1);
                file.appendChild(cell2);
                file.appendChild(cell3);
                file.appendChild(cell4);
                file.appendChild(cell5);
                file.appendChild(cell6);


                // Add file to talble
                tbody.appendChild(file);
            }
        }); // end for eachSubgraph

    } else {// if only show employees child
        // write position parent 
    	 if(node.type==TYPE_WU){
    		 count = count + 1;
             var cell1 = document.createElement("td");
             var cell2 = document.createElement("td");
             var cell3 = document.createElement("td");
             var cell4 = document.createElement("td");
             var cell5 = document.createElement("td");
             var cell6 = document.createElement("td");

             var file = document.createElement("tr");

             if (count % 2 == 0) {
                 cell1.className = 'evenrow';
                 cell2.className = 'evenrow';
                 cell3.className = 'evenrow';
                 cell4.className = 'evenrow';
                 cell5.className = 'evenrow';
                 cell6.className = 'evenrow';
             } else {
             	cell1.className = 'oddrow';
                 cell2.className = 'oddrow';
                 cell3.className = 'oddrow';
                 cell4.className = 'oddrow';
                 cell5.className = 'oddrow';
                 cell6.className = 'oddrow';
             }

			 if (_propertyBag.hide_RW_CostCenterColumn == true)
			 {
					cell6.className += " hideColumn";
			 }

             // Create label
             var contLabel = document.createElement('label');
             contLabel.innerText = count;
             //firefox textContent
             contLabel.textContent = count;
             contLabel.htmlFor = count;
             contLabel.text = count;

             // Create label
             var idLabel = document.createElement('label');                
             idLabel.onclick = function (){sendQViewVacancy(node.data['VacancyID']);};
             idLabel.className='linkQW';
             idLabel.innerText = node.data['VacancyID'];
             //firefox textContent
             idLabel.textContent = node.data['VacancyID'];
             // Create label
             var nameLabel = document.createElement('label');
             nameLabel.innerText = node.data['VacancyName'];
             //firefox textContent
             nameLabel.textContent = node.data['VacancyName'];
                                           
             // Create label
             var postLabel = document.createElement('label');
             if (node.data['JobName']) {
                 postLabel.innerText = node.data['JobName'];
                 //firefox textContent
                 postLabel.textContent = node.data['JobName'];
             }

             // Create label
             var WUassociated = document.createElement('label');                
             WUassociated.innerText = node.data['NameVacancyWU'];
                 //firefox textContent
             WUassociated.textContent = node.data['NameVacancyWU'];
             
             // Create label
             var location = document.createElement('a');
             if (node.data['Location']) {
             	location.innerText = node.data['Location'];
                 //firefox textContent
             	location.textContent = node.data['Location'];                                       
             }
             
          // Create label
             var workCenter = document.createElement('a');
             if (node.data['WorkCenter']) {
             	workCenter.innerText = node.data['WorkCenter'];
                 //firefox textContent
             	workCenter.textContent = node.data['WorkCenter'];                                       
             }
			 

             // add content to cell
             cell1.appendChild(idLabel);
             cell2.appendChild(nameLabel);
             cell3.appendChild(postLabel);
             cell4.appendChild(WUassociated);
             cell5.appendChild(location);
             cell6.appendChild(workCenter);

             // add cells to file
             file.appendChild(cell1);
             file.appendChild(cell2);
             file.appendChild(cell3);
             file.appendChild(cell4);
             file.appendChild(cell5);
             file.appendChild(cell6);

             // Add file to talble
             tbody.appendChild(file);    		 
    	 }
    	
    	
    	 //write position child         	  
        node.eachSubnode(function (childNode) {

        	 if(childNode.type==TYPE_WU){

                count = count + 1;
                var cell1 = document.createElement("td");
                var cell2 = document.createElement("td");
                var cell3 = document.createElement("td");
                var cell4 = document.createElement("td");
                var cell5 = document.createElement("td");
                var cell6 = document.createElement("td");

                var file = document.createElement("tr");

                if (count % 2 == 0) {
                    cell1.className = 'evenrow';
                    cell2.className = 'evenrow';
                    cell3.className = 'evenrow';
                    cell4.className = 'evenrow';
                    cell5.className = 'evenrow';
                    cell6.className = 'evenrow';
                } else {
                	cell1.className = 'oddrow';
                    cell2.className = 'oddrow';
                    cell3.className = 'oddrow';
                    cell4.className = 'oddrow';
                    cell5.className = 'oddrow';
                    cell6.className = 'oddrow';
                }

				if (_propertyBag.hide_RW_CostCenterColumn == true)
				{
					cell6.className += " hideColumn";
				}

                // Create label
                var contLabel = document.createElement('label');
                contLabel.innerText = count;
                //firefox textContent
                contLabel.textContent = count;
                contLabel.htmlFor = count;
                contLabel.text = count;

                // Create label
                var idLabel = document.createElement('label');                
                idLabel.onclick = function (){sendQViewVacancy(childNode.data['VacancyID']);};
                idLabel.className='linkQW';
                idLabel.innerText = childNode.data['VacancyID'];
                //firefox textContent
                idLabel.textContent = childNode.data['VacancyID'];
                // Create label
                var nameLabel = document.createElement('label');
                nameLabel.innerText = childNode.data['VacancyName'];
                //firefox textContent
                nameLabel.textContent = childNode.data['VacancyName'];
                                              
                // Create label
                var postLabel = document.createElement('label');
                if (childNode.data['JobName']) {
                    postLabel.innerText = childNode.data['JobName'];
                    //firefox textContent
                    postLabel.textContent = childNode.data['JobName'];
                }

                // Create label
                var WUassociated = document.createElement('label');                
                WUassociated.innerText = childNode.data['NameVacancyWU'];
                    //firefox textContent
                WUassociated.textContent = childNode.data['NameVacancyWU'];
                
                // Create label
                var location = document.createElement('a');
                if (childNode.data['Location']) {
                	location.innerText = childNode.data['Location'];
                    //firefox textContent
                	location.textContent = childNode.data['Location'];                                       
                }
                
             // Create label
                var workCenter = document.createElement('a');
                if (childNode.data['WorkCenter']) {
                	workCenter.innerText = childNode.data['WorkCenter'];
                    //firefox textContent
                	workCenter.textContent = childNode.data['WorkCenter'];                                       
                }

                // add content to cell
                cell1.appendChild(idLabel);
                cell2.appendChild(nameLabel);
                cell3.appendChild(postLabel);
                cell4.appendChild(WUassociated);
                cell5.appendChild(location);
                cell6.appendChild(workCenter);

                // add cells to file
                file.appendChild(cell1);
                file.appendChild(cell2);
                file.appendChild(cell3);
                file.appendChild(cell4);
                file.appendChild(cell5);
                file.appendChild(cell6);

                // Add file to talble
                tbody.appendChild(file);
            }

        }); // end if eachSubnode
    } // END if only show employees child, no recursive */

	
    // Hide Work Center Column
	if (_propertyBag.hide_RW_CostCenterColumn == true)
	{
		var thTGCostCenterField = $jit.id('thTGCostCenterField');
		if (thTGCostCenterField.className.indexOf("hideColumn") == -1)
		{
			thTGCostCenterField.className += " hideColumn";
		}

	    var thHeadCostCenterField = $jit.id('thHeadCostCenterField');
		if (thHeadCostCenterField.className.indexOf("hideColumn") == -1)
		{
			thHeadCostCenterField.className += " hideColumn";
		}
	}

    var t = document.getElementById('tablePos');
    Table.scrape(t);
}

/**
* Function that writes the departament from a selected node If you selected the
* check look for employees in departments that are child nodes
* 
* @param node,
*            node from where start list of employee
*/
function createTableDepartament(node) {

    // remove cells
    var tbody = $jit.id('tbodyDepartament');
    var rowCount = tbody.rows.length;
    if (tbody.rows.length > 0) {
        for (var i = 0; i < rowCount; i++) {
            tbody.deleteRow(i);
            rowCount--;
            i--;
        }
    }

    var count = 0;
    var showRecursive = $jit.id('showTableRecursive');

    if (showRecursive.checked == true) {
        // Create file for each departament
        node.eachSubgraph(function (childNode) {

            if (childNode.type == TYPE_WU) {

                count = count + 1;
                var cell1 = document.createElement("td");
                var cell2 = document.createElement("td");

                var file = document.createElement("tr");

                if (count % 2 == 0) {
                    cell1.className = 'evenrow';
                    cell2.className = 'evenrow';
                } else {
                	cell1.className = 'oddrow';
                    cell2.className = 'oddrow';
                }

                // Create label
                var nameLabel = document.createElement('label');
                nameLabel.innerText = childNode.data['NameWU'];
                //firefox textContent
                nameLabel.textContent = childNode.data['NameWU'];

				if(_propertyBag.essMode==true || (_propertyBag.essMode==false && _propertyBag.disable_RW_WULinks == false)){//only rich web
	                nameLabel.onclick = function (){sendQViewWU(childNode.data['WUID']);}; 
				}

				if(_propertyBag.essMode==false && _propertyBag.disable_RW_WULinks == false){//only rich web
                	nameLabel.className='linkQW';
				}               
                
                var responsableLabel = document.createElement('label');
                //firefox textContent
                responsableLabel.innerText = childNode.data['ResponsibleName'];
                responsableLabel.textContent = childNode.data['ResponsibleName'];


                // add content to cell
                cell1.appendChild(nameLabel);
                cell2.appendChild(responsableLabel);

                // add cells to file
                file.appendChild(cell1);
                file.appendChild(cell2);

                // Add file to talble
                tbody.appendChild(file);
            }
        }); // end for eachSubgraph

    } else {// if only show departament child
        // Create file for each departament
        if (node.type == TYPE_WU) {
            count = count + 1;
            var cell1 = document.createElement("td");
            var cell2 = document.createElement("td");

            var file = document.createElement("tr");

            if (count % 2 == 0) {
                cell1.className = 'evenrow';
                cell2.className = 'evenrow';
            } else {
                cell1.className = 'oddrow';
                cell2.className = 'oddrow';
            }

            // Create label
            var nameLabel = document.createElement('label');

			if(_propertyBag.essMode==true || (_propertyBag.essMode==false && _propertyBag.disable_RW_WULinks == false)){//only rich web
				nameLabel.onclick =  function (){sendQViewWU(node.data['WUID']);};
			}

			if(_propertyBag.essMode==false && _propertyBag.disable_RW_WULinks == false){//only rich web
	        	nameLabel.className='linkQW';
			}               

            //firefox textContent
            nameLabel.innerText = node.data['NameWU'];
            nameLabel.textContent = node.data['NameWU'];

            var responsableLabel = document.createElement('label');
            responsableLabel.innerText = node.data['ResponsibleName'];
            //firefox textContent
            responsableLabel.textContent = node.data['ResponsibleName'];

            // add content to cell
            cell1.appendChild(nameLabel);
            cell2.appendChild(responsableLabel);

            // add cells to file
            file.appendChild(cell1);
            file.appendChild(cell2);

            // Add file to talble
            tbody.appendChild(file);
        }
        node.eachSubnode(function (childNode) {

            if (childNode.type == TYPE_WU) {
                count = count + 1;
                var cell1 = document.createElement("td");
                var cell2 = document.createElement("td");

                var file = document.createElement("tr");

                if (count % 2 == 0) {
                    cell1.className = 'evenrow';
                    cell2.className = 'evenrow';
                } else {
                	cell1.className = 'oddrow';
                    cell2.className = 'oddrow';
                }

                // Create label
                var nameLabel = document.createElement('label');

				if(_propertyBag.essMode==true || (_propertyBag.essMode==false && _propertyBag.disable_RW_WULinks == false)){//only rich web
					nameLabel.onclick =  function (){sendQViewWU(childNode.data['WUID']);};
				}
	
				if(_propertyBag.essMode==false && _propertyBag.disable_RW_WULinks == false){//only rich web
	        		nameLabel.className='linkQW';
				}  

                //firefox textContent
                nameLabel.innerText = childNode.data['NameWU'];
                nameLabel.textContent = childNode.data['NameWU'];

                var responsableLabel = document.createElement('label');
                //firefox textContent
                responsableLabel.innerText = childNode.data['ResponsibleName'];
                responsableLabel.textContent = childNode.data['ResponsibleName'];

                // add content to cell
                cell1.appendChild(nameLabel);
                cell2.appendChild(responsableLabel);

                // add cells to file
                file.appendChild(cell1);
                file.appendChild(cell2);

                // Add file to talble
                tbody.appendChild(file);
            }

        }); // end if eachSubnode
    } // END if only show departament child, no recursive */

    var t = document.getElementById('tableDepartament');
    Table.scrape(t);
}

// ********** END FUNCTIONS FOR CONTROL THE ELEMENTS OF THE SITE WEB THAT ALLOW
// YOU TO INTERACT *****

// ********** FUNCTIONS TO MANIPULATE JSON OBJECT *****

/**
* Function that delete associated child, and add associated child to properti
* of node (listAssociated)
*/
function deleteDepenFunctional(element) {

    if (element.children) {
        for (var i = 0, ch = element.children; i < ch.length; i++) {
            if (ch[i].type != TYPE_FUNTCIONAL_DEPENDENCY) {
                // call recursive
                deleteDepenFunctional(ch[i]);
            } else {
                // add element to dependecy functional
                element.dependenciFuncional = ch[i];
                // delete element of array
                ch.splice(i, 1);
                // decrease count
                i = i - 1;
            }
        }
    }
}


/**
 * FUnction to create grouped nodes
 */
function createcontrolGroup(element){

	//reset controlGroup
	controlGroup.nodeGroup=null,
	controlGroup.nodeGroupWithAssistantEmp=null,
	controlGroup.nodeGroupWithAssistantAsis=null,
	controlGroup.nodeGroupVacancy=null,
	controlGroup.listGroupPost={};
	controlGroup.listGroupPostWithAssistantEmp={};
	controlGroup.listGroupPostWithAssistantAsis=null;
}

/**
 * FUnction to reset grouped nodes
 */
function resetcontrolGroup(){
	
	//reset controlGroup
	controlGroup.nodeGroup=null,
	controlGroup.nodeGroupWithAssistantEmp=null,
	controlGroup.nodeGroupWithAssistantAsis=null,
	controlGroup.nodeGroupVacancy=null,
	controlGroup.listGroupPost={};
	controlGroup.listGroupPostWithAssistantEmp={};
	controlGroup.listGroupPostWithAssistantAsis=null;	
}



function isNodeFull(node){
	if(node.data['totalEmployee']){
		if(node.data['totalEmployee']<_numberPersonTogroup){
			return false;
		}else{
			return true;
		}
	}
	
	if(node.data['totalVacancy']){
		if(node.data['totalVacancy']<_numberPersonTogroup){
			return false;
		}else{
			return true;
		}
	}
}

function createNodeGroup(element){
	
	if (element.children) { 
		var numGroup=0;
		var numGroupWithAssistant=0;
		var numGroupPost=0;
		var numGroupPostWithAssistant=0;
		var numGroupVacancy=0;
        for (var i = 0, ch = element.children; i < ch.length; i++) {
            // if node is WU call recursive, if node is employee will be grouped
            if (ch[i].type == TYPE_SUBORDINATE) {
                if (!isGroup(ch[i])) {
                	                	
                	//CREAMOS LAS AGRUPACIONES DE EMPLEADOS AGRUPADOS
                	
                	//si no tenemos un nodo de agrupaciones o esta llena lo creamos
                	if(controlGroup.nodeGroup==null || isNodeFull(controlGroup.nodeGroup)){
                		// Create new grouped node                      	
                        // Create new child or add exist child
                        // Node receive id of employee for caught type style
                        var name = 'SubordinateGroup_' + element.id + '_' + numGroup;
                        var groupEmployee = {
                            "id": name,
                            "type": TYPE_SUBORDINATE,
                            "m4showEmployees": false,
                            "data": {
                                "groupEmployees": true,
                                'Name:0': ch[i].data['Name'],                               
                                'IdAux:0': ch[i].id,
                                'IdPrint:0': ch[i].data['Id'],
                                'totalEmployee':1
                            },
                            "children": {}
                        };                             
                        controlGroup.nodeGroup=groupEmployee;
                        element.children.push(groupEmployee);   
                        numGroup=numGroup+1;
                	}else{
                		  // Add employee to group
                    	var numChild= controlGroup.nodeGroup.data['totalEmployee'] +1;
                    	controlGroup.nodeGroup.data['Name:' + numChild] = ch[i].data['Name'];
                    	controlGroup.nodeGroup.data['IdAux:' + numChild] = ch[i].id;
                    	controlGroup.nodeGroup.data['IdPrint:' + numChild] = ch[i].data['Id'];
                    	controlGroup.nodeGroup.data['totalEmployee']=  numChild;
                	
                	}// end if group employee 
                	
                	
                	//CREAMOS LAS AGRUPACIONES DE EMPLEADOS AGRUPADOS + ASISTENTES
                	
                	//si es de tipo asistente
                	  if(ch[i].data['assistant']){                   		  
                		  if(controlGroup.nodeGroupWithAssistantAsis==null || isNodeFull(controlGroup.nodeGroupWithAssistantAsis)){
                			  
                			  	//si no hay o esta lleno creamos uno nuevo
                			  
                				var name = 'AssistantGroupEmpl_' + element.id + '_' + numGroupWithAssistant;
                              	var nodeGroupWithAssistantAsis = {
                                          "id": name,
                                          "type": TYPE_SUBORDINATE,
                                          "m4showEmployees": false,
                                          "data": {
                                          	"assistant" : "true",
                                              "groupEmployeesWithAssistant": true,                                        
                                              'Name:0': ch[i].data['Name'],
                                              'IdAux:0': ch[i].id,                                        
                                              'IdPrint:0': ch[i].data['Id'],
                                              'totalEmployee': 1
                                          },
                                          "children":{}
                                      };        
                              	
                            	numGroupWithAssistant++;
                                controlGroup.nodeGroupWithAssistantAsis=nodeGroupWithAssistantAsis;
                              	element.children.push(nodeGroupWithAssistantAsis); 
                		  }else{                				
                			  	//Add employee to group
		                      	var numChild= controlGroup.nodeGroupWithAssistantAsis.data['totalEmployee'] +1;
		                      	controlGroup.nodeGroupWithAssistantAsis.data['Name:' + numChild] = ch[i].data['Name'];
		                      	controlGroup.nodeGroupWithAssistantAsis.data['IdAux:' + numChild] = ch[i].id;
		                      	controlGroup.nodeGroupWithAssistantAsis.data['IdPrint:' + numChild] = ch[i].data['Id'];
		                      	controlGroup.nodeGroupWithAssistantAsis.data['totalEmployee']=  numChild;
                		  }
                		                  		                                                     	                         	                                                              
                      }else{ // si no es asistente          
                    	  
                    	  if(controlGroup.nodeGroupWithAssistantEmp==null || isNodeFull(controlGroup.nodeGroupWithAssistantEmp)){
                    	  
		                      	var name = 'SubordinateGroupEmpl_' + element.id + '_' + numGroup;
		                      	var nodeGroupWithAssistantEmp = {
		                                   "id": name,
		                                   "type": TYPE_SUBORDINATE,
		                                   "m4showEmployees": false,
		                                   "data": {
		                                       "groupEmployeesWithAssistant": true,                                         
		                                       'Name:0': ch[i].data['Name'],                                       
		                                       'IdAux:0': ch[i].id,
		                      	 			 	'IdPrint:0': ch[i].data['Id'],
		                      	 			 	'totalEmployee': 1
		                                   },
		                                   "children":{}
		                               };
		                      	numGroupWithAssistant++;
                                controlGroup.nodeGroupWithAssistantEmp=nodeGroupWithAssistantEmp;
                              	element.children.push(nodeGroupWithAssistantEmp);                             	                         	
                    	  }else{
                    		  //Add employee to group
		                      	var numChild= controlGroup.nodeGroupWithAssistantEmp.data['totalEmployee'] +1;
		                      	controlGroup.nodeGroupWithAssistantEmp.data['Name:' + numChild] = ch[i].data['Name'];
		                      	controlGroup.nodeGroupWithAssistantEmp.data['IdAux:' + numChild] = ch[i].id;
		                      	controlGroup.nodeGroupWithAssistantEmp.data['IdPrint:' + numChild] = ch[i].data['Id'];
		                      	controlGroup.nodeGroupWithAssistantEmp.data['totalEmployee']=  numChild;                    	
                    	  }
                      } // end if group employee + assistantat
                	  
                	  
                	  //AGRUPACIONES DE EMPLEADOS POR PUESTO
                	  
                	  
                	  if(!controlGroup.listGroupPost[ch[i].data['Post']] || isNodeFull(controlGroup.listGroupPost[ch[i].data['Post']])){
                	  
                	   // Create new child or add exist child
                      // Node receive id of employee for caught type style                                               
                     	var name = 'SubordinateGroup_' + ch[i].data['Post'] + '_' + element.id + '_' +numGroupPost;
                     	  // Put title at box un titulo a la caja,
                        var titleBox = _etJob+ ch[i].data['Post'];
                     	var groupPost = {
                            "id": name,
                            "type": TYPE_SUBORDINATE,
                            "m4showEmployees": false, 
                            "data": {
                                "groupEmployeesByPost": true,
                                'Name:-1': titleBox,
                                'Name:0': ch[i].data['Name'],
                                'IdAux:0': ch[i].id,
                                'IdPrint:0': ch[i].data['Id'],
                                'totalEmployee':1
                            },
                            "children": {}
                        };
                                                                                                                  
                     	numGroupPost++;
                        controlGroup.listGroupPost[ch[i].data['Post']]=groupPost;
                      	element.children.push(groupPost);                     
	                  } else {
	                  		// 	Add employee to group
	                		var numChild= controlGroup.listGroupPost[ch[i].data['Post']].data['totalEmployee'] +1;
	                      	controlGroup.listGroupPost[ch[i].data['Post']].data['Name:' + numChild] = ch[i].data['Name'];
	                      	controlGroup.listGroupPost[ch[i].data['Post']].data['IdAux:' + numChild] = ch[i].id;
	                      	controlGroup.listGroupPost[ch[i].data['Post']].data['IdPrint:' + numChild] = ch[i].data['Id'];
	                      	controlGroup.listGroupPost[ch[i].data['Post']].data['totalEmployee']=  numChild; 
	                  
	                  }// end group employees by post
                              
                	  
                	  
                	  //AGRUPACIONES DE EMPLEADOS POR PUESTO + asistentes
                	  
                	  //si es asistente
                	  if(ch[i].data['assistant']){        
                		  
                		  if(controlGroup.listGroupPostWithAssistantAsis==null || isNodeFull(controlGroup.listGroupPostWithAssistantAsis)){
                			                    			
                		  
		                		  var name = 'AssistantGroupPostAsis_' + element.id + '_' + numGroupPostWithAssistant;
		                        	 var nodeGroupPostWithAssistantAsis = {
		                                    "id": name,
		                                    "type": TYPE_SUBORDINATE,
		                                    "m4showEmployees": false,
		                                    "data": {
		                                    	"assistant" : "true",
		                                        "groupEmployeesPostWithAssistant": true,                                        
		                                        'Name:0': ch[i].data['Name'],                                        
		                                        'IdAux:0': ch[i].id,
		                                        'IdPrint:0': ch[i].data['Id'],
		                                        'totalEmployee': 1                                        
		                                    },
		                                    "children": {}
		                                };
		                        	 
		                        	 numGroupPostWithAssistant++;
		                             controlGroup.listGroupPostWithAssistantAsis=nodeGroupPostWithAssistantAsis;
		                           	 element.children.push(nodeGroupPostWithAssistantAsis);
                		  }else{
		                			var numChild= controlGroup.listGroupPostWithAssistantAsis.data['totalEmployee'] +1;
		  	                      	controlGroup.listGroupPostWithAssistantAsis.data['Name:' + numChild] = ch[i].data['Name'];
		  	                      	controlGroup.listGroupPostWithAssistantAsis.data['IdAux:' + numChild] = ch[i].id;
		  	                      	controlGroup.listGroupPostWithAssistantAsis.data['IdPrint:' + numChild] = ch[i].data['Id'];
		  	                      	controlGroup.listGroupPostWithAssistantAsis.data['totalEmployee']=  numChild;
                		  }          
                	  }else{
                		  //si no es asistente
                		  
                    	  if(!controlGroup.listGroupPostWithAssistantEmp[ch[i].data['Post']] || isNodeFull(controlGroup.listGroupPostWithAssistantEmp[ch[i].data['Post']])){
                    		  
                    		  	// Put title at box un titulo a la caja,
                    		  	var titleBox = _etJob+ ch[i].data['Post'];
                          		var name = 'SubordinateGroupPostEmpl_' + ch[i].data['Post'] + '_' + element.id + '_' + numGroupPostWithAssistant;
                          		var nodeGroupPostWithAssistantEmp = {
                                       "id": name,
                                       "type": TYPE_SUBORDINATE,
                                       "m4showEmployees": false,
                                       "data": {
                                           "groupEmployeesPostWithAssistant": true,
                                           'Name:-1': titleBox,
                                           'Name:0': ch[i].data['Name'],
                                           'IdAux:0': ch[i].id,
                                           'IdPrint:0':  ch[i].data['Id'],
                                           'totalEmployee': 1    
                                       },
                                       "children": {}
                                   };
                          		numGroupPostWithAssistant++;
                                controlGroup.listGroupPostWithAssistantEmp[ch[i].data['Post']]=nodeGroupPostWithAssistantEmp;
                              	element.children.push(nodeGroupPostWithAssistantEmp);  
                    		
    	                  } else {
    	                		var numChild= controlGroup.listGroupPostWithAssistantEmp[ch[i].data['Post']].data['totalEmployee'] +1;
    	                      	controlGroup.listGroupPostWithAssistantEmp[ch[i].data['Post']].data['Name:' + numChild] = ch[i].data['Name'];
    	                      	controlGroup.listGroupPostWithAssistantEmp[ch[i].data['Post']].data['IdAux:' + numChild] = ch[i].id;
    	                      	controlGroup.listGroupPostWithAssistantEmp[ch[i].data['Post']].data['IdPrint:' + numChild] = ch[i].data['Id'];
    	                      	controlGroup.listGroupPostWithAssistantEmp[ch[i].data['Post']].data['totalEmployee']=  numChild;     	                      	                	 
    	                  }// end group employees by post
                		  
                	  }
                }
            }else if (ch[i].type == TYPE_VACANCY) {
            		if (!isGroup(ch[i])) {
                	                	
                	//CREAMOS LAS AGRUPACIONES DE vacantes
                	
                	//si no tenemos un nodo de agrupaciones o esta llena lo creamos
                	if(controlGroup.nodeGroupVacancy==null || isNodeFull(controlGroup.nodeGroupVacancy)){

                		// Create new child or add exist child
                        // Node receive id of employee for caught type style
                        var name = 'VacancyGroup_' + element.id + '_' + numGroupVacancy;
                        var groupVacancy = {
                            "id": name,
                            "type": TYPE_VACANCY,
                            "data": {
                            	   "groupVacancies": true,
                                   'VacancyName:0': ch[i].data['VacancyName'],
                                   'VacancyIdAux:0': ch[i].id,
                                   'VacancyIdPrint:0':  ch[i].data['WUVacancyID']+'_'+ch[i].data['VacancyID'],
                                   'totalVacancy':1
                            },
                            "children": {}
                        };                             
                                                                                             
                        controlGroup.nodeGroupVacancy=groupVacancy;
                        element.children.push(groupVacancy);   
                        numGroupVacancy=numGroupVacancy+1;
                	}else{
                		  // Add employee to group
                    	var numChild= controlGroup.nodeGroupVacancy.data['totalVacancy'] +1;
                    	controlGroup.nodeGroupVacancy.data['VacancyName:' + numChild] = ch[i].data['VacancyName'];
                    	controlGroup.nodeGroupVacancy.data['VacancyIdAux:' + numChild] = ch[i].id;
                    	controlGroup.nodeGroupVacancy.data['VacancyIdPrint:' + numChild] = ch[i].data['WUVacancyID']+'_'+ch[i].data['VacancyID'];
                    	controlGroup.nodeGroupVacancy.data['totalVacancy']=  numChild;                     	
                	}// end if group vacancy
            		}
                                                 
            } else if (ch[i].type == TYPE_WU) {
                     // Call recursive
            		resetcontrolGroup();
            		createNodeGroup(ch[i]);                 
            }
        }
	}	
}

/**
* Function to get post the grouped node
*/
function getPost(name) {

    // Get position of character ' : '
    var pos = name.indexOf(':', 0);
    var result = '';
    // return name until character ' : '
    result = name.substring(pos + 1, name.lenght);
    return result;
}

/**
* Function to clone object
* 
* @param from,
*            object to clone
* @returns
*/
function clone(obj) {
    if (typeof obj !== 'object' || obj == null) {
        return obj;
    }
    var c = obj instanceof Array ? [] : {};
    for (var i in obj) {
        var prop = obj[i];
        if (typeof prop == 'object') {
            if (prop instanceof Array) {
                c[i] = [];

                for (var j = 0; j < prop.length; j++) {
                    if (typeof prop[j] != 'object') {
                        c[i].push(prop[j]);
                    } else {
                        c[i].push(clone(prop[j]));
                    }
                }
            } else {
                c[i] = clone(prop);
            }
        } else {
            c[i] = prop;
        }
    }
    return c;
}

// ********** END FUNCTIONS TO MANIPULATE JSON OBJECT *****

// ********** FUNCTIONS TO CHANGE SIZE OF LABEL*****

/**
* Function that remove label. When update tree will be repainted with his new
* size
*/
function m4ClearLabel() {
	simulate(document.getElementById("infovis"), "click");
}

/**
 * Function to simulate evente with JS
 * @param element
 * @param eventName
 * @returns
 */
function simulate(element, eventName)
{
	var eventMatchers = {
			'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
			'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
			};
	
	var defaultOptions = {
			pointerX: 0,
			pointerY: 0,
			button: 0,
			ctrlKey: false,
			altKey: false,
			shiftKey: false,
			metaKey: false,
			bubbles: true,
			cancelable: true
			};
	
	var options = extend(defaultOptions, arguments[2] || {});
	var oEvent, eventType = null;

	for (var name in eventMatchers){
		if (eventMatchers[name].test(eventName)) { eventType = name; break; }
	}

	if (!eventType)
		throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

	if (document.createEvent){
		oEvent = document.createEvent(eventType);
		if (eventType == 'HTMLEvents'){
			oEvent.initEvent(eventName, options.bubbles, options.cancelable);
		}else{
			oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
			options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
			options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
		}
		element.dispatchEvent(oEvent);
	}else{
		options.clientX = options.pointerX;
		options.clientY = options.pointerY;
		var evt = document.createEventObject();
		oEvent = extend(evt, options);
		element.fireEvent('on' + eventName, oEvent);
	}
	return element;
}


function extend(destination, source) {
	for (var property in source)
		destination[property] = source[property];

	return destination;
}


// ********** END FUNCTIONS TO CHANGE SIZE OF LABEL*****

// ********** FUNCTIONS TO MANIPULATE ORGCHAR*****
/**
* Function for go to node and move canvas at center
*/
function goToNode(idNode) {
	
	if(_nodeSearch!=null){
		if(_nodeSearch.type==TYPE_SUBORDINATE){
			var parent = _nodeSearch.getParents();
			if(!parent[0].exployChild ){
				_nodeSearch.selected=false;
				_nodeSearch.drawn=false;
				_nodeSearch.exist=false;
				_nodeSearch.m4showEmployees = false;
			}else{
				 var onlyEmpl = $jit.id('withoutgroupEmployees').checked; 
				if(parent[0].exployChild && !onlyEmpl){
					_nodeSearch.selected=false;
					_nodeSearch.drawn=false;
					_nodeSearch.exist=false;
				_nodeSearch.m4showEmployees = false;
				}
			}
		}
	}
	
	_nodeSearch=null;
	clickeBug=idNode; 

	// Set canvas at center screen
	//_st.canvas.translate(-_st.canvas.translateOffsetX, -_st.canvas.translateOffsetY - _deltaCanvasY, false);
	_st.canvas.translate(-_st.canvas.translateOffsetX, -_st.canvas.translateOffsetY - _deltaCanvasY, false, true );

	var verLienzo = $jit.id('verLienzo');
	

	// click at node
	if (!_hasMoveNode && !verLienzo.checked) {
		_st.onClick(idNode);    
	}
}

var clickeBug;

// ********** END FUNCTIONS TO MANIPULATE ORGCHAR*****

// ***** FUNCTION FOR RELOAD PAGE *********

// FUNCION TO RELOAD ORGCHART

/**
* Function to reload orgchart, load all orgchart less predefined styles
*/
function reloadOrgChart(bRepositionNodes) {
	if (arguments.length === 0) {
		bRepositionNodes = false;
	}

	hideContextMenu();
	var ok = confirm(bRepositionNodes ? _msgReloadRepositioning:  _msgReload);

	if (ok == true) {
		// DESACTIVAMOS PARA QUE SE LANCE EL COMPUTE
		_hasMoveNode = false;
		_positionNodesMovedManually = {};
		_snapShot = {};
		_unDo = [];

		var btnDeshacer = $jit.id('btnDeshacer');
		btnDeshacer.disabled = true;
		$("#btnDeshacer").addClass("disabled");
		
		////////////////////////////////////////////
		hideContextMenu();

		//change root tree            
		var contentWU = $jit.id('contentWU');
		var contentLi = $jit.id('li_'+_st.root);   
		contentWU.removeChild(contentLi);

		var contentWU=$jit.id('contentWU');
		createTree(_jsonOriginal,contentWU,5); 

		// load json data
		_st.loadJSON(_jsonOriginal);
		

		// hide group employees
		//hideEmployees();
		// hide group vacancies
		//hideVacancies();     

		///////////////////////////////////////////////
		// Miramos si tenemos posiciones para reasignar
		///////////////////////////////////////////////
		//positionNodes = _jsonPositionOriginal;
		if (bRepositionNodes && positionNodes) {			

			//Estilos
			_snapShot = {};
			_snapShot['type'] = M4SNAPSHOT_INITIAL_POSITION_NODE;
			_snapShot['width'] = _initial_style_width;
			_snapShot['height'] = _initial_style_height;
			_snapShot['typeZoom'] = _initialTypeZoom;


			//setTimeout("increaseSize(0)", 500);	
			setTimeout(function() {
					_sliderX.slider("option", "value", _initial_style_width); 
					_sliderY.slider("option", "value", _initial_style_height);} ,
			 500);

			var posNodes = {};

			//El formato del JSON es el de la clase de JAVA 
			//Lo transformamos a nuestro snapShot
			//Posiciones de los nodos
			for (i = 0; i < positionNodes.length; i++) {
				var n = positionNodes[i];
				var key = n.id;						

				posNodes[key] = {
			    	x: n.pos.X,
			    	y: n.pos.Y,
			    	movedManually : n.moved
			    }

			    // Con que un nodo haya fuera movido originalmente, lo marcamos 
			    if (n.moved) {
	            	_hasMoveNode = true;
	        	}
	            //  
			};

			_snapShot['posNodes'] =	posNodes;		

			//Restauramos el estilo original
			listStyles = JSON.parse(JSON.stringify(_initialListStyles));

			// apply styles
			//applyStyles();

			// Reset checkbox associated to type style
			//resetAllCheckBoxTyepeStyle();			
			destroyCheckBoxTypeStyle();
			createCheckBoxTypeStyle();

			// Activate control change on type style
			changeTypeStyle();

			// Fill the selection level
			InitializeSelectionLevel();

			// Fill Grouping Data
			InitializeGroupingData();

			disabledControlAgainstMovingManuallyEffect(true);
		} else {
			disabledControlAgainstMovingManuallyEffect(false);
		}
   
		// apply styles
		applyStyles();

		// compute node positions and layout
		_st.compute();


//console.time('Reload');
		//simulate($jit.id('selectLevel'), "change"); //Refresh _st.config.levelsToShow
		updateControlChangeLevel(false);
		updateControlEmployee(false); 
		//updateControlAssistant(false);  //Execute almost same code as updateControlEmployee()
		updateControlDepenFunc(false);
		updateControlVacancies(true);  //Refresh at the lastone
//console.timeEnd('Reload');

		//		UpdateShowingAndGrouping() No fuciona;

		//Sincro lienzo canvas
		_st.canvas.canvases[1].translate(_st.canvas.canvases[0].translateOffsetX-_st.canvas.canvases[1].translateOffsetX, _st.canvas.canvases[0].translateOffsetY-_st.canvas.canvases[1].translateOffsetY, false, true);

		_st.canvas.translate(-_st.canvas.translateOffsetX, -_st.canvas.translateOffsetY - _deltaCanvasY, false, true);


		// optional: make a translation of the tree
		//_st.geom.translate(new $jit.Complex(-400, 0), "current");
		
		// emulate a click on the root node.		


		if (!bRepositionNodes) {
			// Esto hace pupita para la recolocaci�n de los nodos
			_st.onClick(_st.root);
		} else {
			//Si estamos reposicionando los nodos, vemos si también tenemos que reposicionar el lienzo
			if (_propertyBag.activated_WysIwyg_print) {
				var verLienzo = $jit.id('verLienzo');
				if (verLienzo.checked) {	
					meta4.orgdyn.lienzo.setPositionCanvasSerialized(_st, $jit.id('fijarLienzo'), _configStyle[8]);
				}
			}

			// El hecho de no ejecutar _st.onClick() requiere de las siguientes acciones, sino peta el control  
			setTimeout("refreshTreeInitial()", 500); 	

	    	var node = _st.graph.getNode(_st.root);
	        if(node != null) {
	        	_st.selectPath(node, _st.clickedNode);
	           	_st.clickedNode = node;
	       	}
		}		

		if (_ACTIVATE_HOT_ZONES) {
			resaltHotZones()
		}

		// Add event handlers to switch spacetree orientation.
		clickeBug=_st.root;
		_lastTreeChecked=_st.graph.getNode(_st.root);
	}
}

/**
* Function to reload orgchart, load all orgchart and the position less predefined styles
*/
function reloadOrgChartPositioning() {
	reloadOrgChart(true);
}

// FUNCTION AUX

/**
* Function that return lenght of object
* 
* @param children
* @returns {Number}
*/
function m4lenght(children) {
	var result = 0;
	for (var i in children) {
		result = result + 1;
	}

	return result;
}


/**
* Function to activate option menu to show table departament
*/
function activePosition() {  
	hideContextMenu();
	goToNode(_st.clickedNode.id);
}

function deleteName(node,atr){	
	// Get position of character ' : '
	var pos = atr.indexOf(':', 0);
	var result = atr.substring(pos+1, atr.lenght);
	var r1='Name:'+result;
	var r2='IdPrint:'+result;

	for(var atrAux in node.data){
		if(atrAux==r1 || atrAux==r2){
			delete node.data[atrAux];
		}
	}
}

function isEmptyNode(node){
	
	for(var j in node.data){
		
		var nameItem = getNameItem(j);
		if(nameItem=='IdAux' || nameItem=='VacancyIdAux'){
			return false;
		}
	}
	
	return true;
}

/**
 * Function to delete name and id and grouped nodes
 * @param nodeParent
 * @param idDelete
 */
function deleteIdOtherNodes(nodeParent,idDelete,originNode){
	for(var adj in nodeParent.adjacencies){
		var node=nodeParent.adjacencies[adj].nodeTo;
		if(node.isDescendantOf(nodeParent.id) && originNode!=node.id ){
			if(node.data['groupVacancies']||node.data['groupEmployeesByPost']||node.data['groupEmployees']
			||node.data['groupEmployeesPostWithAssistant']||node.data['groupEmployeesWithAssistant']){
					for(var atr in node.data){
						if(node.data[atr]==idDelete){
							deleteName(node,atr);
							delete node.data[atr];
							
							if(isEmptyNode(node)){
								_st.removeSubtree(node.id, true, 'replot');
							}
							
						}
					}
			}
		}
	}
}

/**
* Function to delete node
*/
function deleteNode(node) {

	//if is grouped delete individual nodes
	if(node.type==TYPE_SUBORDINATE || node.type== TYPE_VACANCY){
		//is group
		if(node.data['groupVacancies']||node.data['groupEmployeesByPost']||node.data['groupEmployees']
		||node.data['groupEmployeesPostWithAssistant']||node.data['groupEmployeesWithAssistant']){
			for(var i in node.data){
				if(getNameItem(i)=='VacancyIdAux' || getNameItem(i)=='IdAux'){
					var parent = node.getParents();
					var nameDelete=node.data[i];
					deleteIdOtherNodes(parent[0],node.data[i],node.id);
					 _st.removeSubtree(nameDelete, true, 'replot');
				}
			}
		}else{
			var parent = node.getParents();
			deleteIdOtherNodes(parent[0],node.id,node.id);
		}
	}
	
	if (node.id != _st.root) {
		if(node.type==TYPE_WU){
			//delete tree wu 
			var li=$jit.id('li_'+node.id);
			var parent = li.parentNode;
			parent.removeChild(li);
		}

		var found = false;
		// change clicked node
		var parent = _st.clickedNode.getParents();
		if (node.id == _st.clickedNode.id) {
			_st.clickedNode = parent[0];
			clickeBug=parent[0].id;
			found = true;
		}

		if (parent != false) {
			while (parent[0].id != _st.root && found == false) {
				if (parent[0].id == node.id) {
					var n = parent[0].getParents();
					_st.clickedNode = n[0];
					found = true;
				} else {
					parent = parent[0].getParents();
				}
			}
		}		
		
		// delete subtree        
		 _canCompute = !_hasMoveNode; 
		
		_st.removeSubtree(node.id, true, 'animate');

		// Hay que esperar que se ejecuten los eventos internos...
        setTimeout(function(){ _canCompute = true; }, 1000);  

		// clear autocomplete
		clearOutput();
		setVisible("hidden");
	}
}
// END FUNCTION AUX

// SAVE STYLE IN BBDD
/**
* Function to save style in BBDD, first check if style is public if is public,
* don?t allow save style with same name
*/

// FUNTION TO COMUNICATE WITH PEOPLE NET

function saveStyleESS(serialize){
	save_typeOrg(serialize);
	// m4valor("formSaveTypeOrgChart","paramSerialize", serialize, "set");
	 //m4valor("formSaveTypeOrgChart","paramType", "Save", "set");//save style
	 //m4submit("formSaveTypeOrgChart");
	 closeSaveMenu();
}

/**
* Function to send style  to peopleNet. Use m4anchor for comunicate
* with peopleNet
*/
function sendStyle() {
	var style = serializeStyle('saveStyle',TYPE_ZOOM_NORMAL);
	if (style != null) {
		var serialize = '$Arg1=saveStyle#'
			+ style + '$Arg5=' + "" + '$Arg6=' + "" + '$Arg7=' + "" + '$Arg8=' + "" + '$Arg9=' + "" + '$Arg10=' + "" + '$Arg12=' + (_hasMoveNode && !_bSavingESSDefaultStyle ?  JSON.stringify(getPositionNodesForStyle()) : "");
		//dividimos el string en varias partes y lo enviamos por partes, el ultimo argumento indica si debe
		//concatenar o imprimir
		if(_propertyBag.essMode==false){
			closeSaveMenu();
			sentToAnchor('saveStyle', serialize);	
		} else {
			saveStyleESS(serialize);
		}
	}
}

function deleteStyle() {		
	var style = serializeStyle('deleteStyle');
	if (style != null) {
		var serialize = '$Arg1=deleteStyle#' + style + '$Arg5=' + "" + '$Arg6=' + "" + '$Arg7=' + "" + '$Arg8=' + "" + '$Arg9=' + "" + '$Arg10=' + "" + '$Arg12=' + "";
		//dividimos el string en varias partes y lo enviamos por partes, el ultimo argumento indica si debe
		//concatenar o imprimir
		if(_propertyBag.essMode==false){
			closeSaveMenu();
			sentToAnchor('deleteStyle', serialize);	
		} else {
			essDeleteStyle(serialize);
		}	
	}
}

/**
 * Function to send via anchor the serialization
 * @param  {string} serializationType ['SaveStyle'|'PrintOrgChart']
 * @param  {string} serialize         [String with the serialization to send]
 */
function sentToAnchor(serializationType, serialize) {
	var posi = 0;
	var posf = 1800;
	var type = 0;
	var send = '';
	while (posi < serialize.length) {
		if (posf >= serialize.length) {
			type = 1;
			posf = serialize.length;
		}

		//send to peopleNet
		var part = '';
		part = serialize.substring(posi, posf);
		send = 'TypeFunction=' + serializationType + '&ArgType=' + type + '&ArgPart=' + part;
		posi = posi + 1800;
		posf = posf + 1800;

		if(typeof window.M4Anchor_Execute == 'function'){
			window.M4Anchor_Execute('Evanchorclick1', send);
		} else {
			location.href = 'm4anchor:Evanchorclick1?' + send;
		}		
	};
}

function printESS(serialize){
	var frmPrint = document.getElementById('formSaveTypeOrgChart') || null;
	if (frmPrint) {
		frmPrint.action = "/servlet/CheckSecurity/JSP" + _PathTechJSP +  "ssco_dynamic_orgchart.jsp";
	}

	m4valor("formSaveTypeOrgChart","paramSerialize", serialize, "set");
	m4valor("formSaveTypeOrgChart","paramType", "Print", "set");//save style
	m4submit("formSaveTypeOrgChart");
}

/**
* Function to send print  to peopleNet. Use m4anchor for comunicate
* with peopleNet
*/
function sendPrint(typePrint) {

	var nodeRoot = _st.graph.nodes[_st.root];
	var parent="";
	if(_configStyle[3]!="3"){
		parent = nodeRoot.data['WUID'];
	}else{//position orgchart
		parent = nodeRoot.data['VacancyID'];
	}
	
	//size font
	var sizeFontHead = "0"; //Din�mica por defecto siempre.... $jit.id('selectFontHead').value;
	var sizeFontBody = "0"; //Din�mica por defecto siempre.... $jit.id('selectFontBody').value;
	
	var sizePaper    =$jit.id('selectPaperSize').value;
	var serialize = '$Arg1=' + typePrint
		+ serializeStyle('print',_typeZoom) + '$Arg5=' + serializeNodesToPrint() + '$Arg6=' + typesGrouped()
		+ '$Arg7=' + parent+ '$Arg8=' + _numberPersonTogroup+ '$Arg9=' + sizeFontHead+ '$Arg10=' + sizeFontBody + '$Arg11=' + sizePaper + '$Arg12=' + serializePositionNodesForPrintIfNeed();

	if(_propertyBag.essMode==false) {
		sentToAnchor('PrintOrgChart', serialize);		
	}else{
		printESS(serialize);
	}

	closePrintMenu();
}


/**
 * Check that input is number 
 * If is number destroy box with grouped and create new box with new number person group
 */
function controlInputPerson() {

	var inputPerson=$jit.id('numberPerson');
	_numberPersonTogroup=inputPerson.value;
	
	$jit.util.addEvent(inputPerson, 'change', function () { 
		var inputPerson=$jit.id('numberPerson');
		var number=inputPerson.value;
		var numeros="0123456789";
		var num=true;
		for(var i=0; i<number.length &&num==true; i++){
			if (numeros.indexOf(number.charAt(i),0)==-1){
				num=false;
			}
		}
		if(number.substring(0,1)=='0'){
			num=false;
		}
		if(num==true){
			_numberPersonTogroup=inputPerson.value;
			document.getElementById('cssNormal').href=_AbsolutePathTemplate+'css/mouse_wait.css';

			var oldJson=_st.toJSON('tree');
			destroyGroupBoxes(oldJson);
			createNewGroupBoxes(oldJson);
			document.getElementById('cssNormal').href=_AbsolutePathTemplate+'css/mouse.css';
		}else{
			inputPerson.value=_numberPersonTogroup;
		}
	});
}


/**
 * Function to destroy old group boxes and create new group boxes
 */
function destroyGroupBoxes(parent){
	
	var children = parent.children;	
	for (var i = 0 ; i < children.length; i++) {
		if (children[i].type == TYPE_SUBORDINATE) {
			if(children[i].data['groupVacancies']||children[i].data['groupEmployeesByPost']||
				children[i].data['groupEmployees']||children[i].data['groupEmployeesPostWithAssistant']||children[i].data['groupEmployeesWithAssistant']){    			    		
				children.splice(i, 1);
				// decrease count
				i = i - 1;
			}
		}
		if (children[i].type == TYPE_WU) {
			destroyGroupBoxes(children[i]);
		}
	}
}


function createNewGroupBoxes(jsonObj){
	
	//store position of orgchart
	var despX=_st.canvas.translateOffsetX;
	var despY=_st.canvas.translateOffsetY; 
	
	//create new group employees with new number person
	resetcontrolGroup();
	//create group
	createNodeGroup(jsonObj);

	// load json data
	_st.loadJSON(jsonObj);

	// apply styles
	applyStyles(); 

	// compute node positions and layout
	_st.compute();
	//show employees
	updateControlEmployee();    
	// emulate a click on the root node.

	if(_st.clickedNode.data['groupVacancies']||_st.clickedNode.data['groupEmployeesByPost']||
		_st.clickedNode.data['groupEmployees']||_st.clickedNode.data['groupEmployeesPostWithAssistant']||_st.clickedNode.data['groupEmployeesWithAssistant']){
		_st.onClick();
		goToNode(_st.root);
	}else{
		goToNode(_st.clickedNode.id);
	}

	//now show group 
	repaintBoxEmployees();

	//move tree with position old
	_st.canvas.translate(despX,despY, false);
}


/**
 * Send to peopleNet, person to show advanced information
 * @param type
 * @param id
 */
function sendQViewEmployee(node) {
	
	if(_propertyBag.essMode==false){
		if(node.type==TYPE_WU){
			serialize = 'm4anchor:Evanchorclick1?TypeFunction=QViewt&ArgType=emp&ArgPart=' +  node.data['ResponsibleID'];
			location.href = serialize;
		}else{
			serialize = 'm4anchor:Evanchorclick1?TypeFunction=QViewt&ArgType=emp&ArgPart=' +  node.data['Id'];
			location.href = serialize;
		}
	}else{
		//VARIABLES QUE VIENEN DE LA JSP PARA INICIAR LA VISTA DE EMPLEADO		
		//inicialize
		var encr=node.data['EncryptedID'];
		window.open('/servlet/CheckSecurity/JSP' + _PathTechJSP +  'ssco_dyn_infoperson.jsp?arg1='+encr,'',"titlebar=0,toolbar=0,location=0,status=0,menubar=0,width=600px,height=600px,resizable=yes");
	}
}

/**
 * Send to peopleNet, person to show advanced information
 * @param type
 * @param id
 */
function sendQViewWU(idRH) {
	
	if(_propertyBag.essMode==false){
		serialize = 'm4anchor:Evanchorclick1?TypeFunction=QViewt&ArgType=dep&ArgPart=' + idRH;
		location.href = serialize;
	}
}

/**
 * Send to peopleNet, person to show advanced information
 * @param type
 * @param id
 */
function sendQViewVacancy(idRH) {
	
	if(_propertyBag.essMode==false){
		serialize = 'm4anchor:Evanchorclick1?TypeFunction=QViewt&ArgType=pos&ArgPart='+idRH;
		location.href = serialize;
	}
}

/**
* Function to check if print grouped o no grouped
*/
function typesGrouped() {
	var serialize = '';
	if ($jit.id('withoutgroupEmployees').checked == true) {
		var showAssistant=$jit.id('showAssistant').checked;
		if(showAssistant){
			serialize = serialize + 'withoutgroupEmployeesWithAssistant#%#';
		}else{
			serialize = serialize + 'withoutgroupEmployees#%#';
		}
	} else if ($jit.id('groupEmployees').checked == true) {
		var showAssistant=$jit.id('showAssistant').checked;
		if(showAssistant){
			serialize = serialize + 'groupEmployeesWithAssistant#%#';
		}else{
			serialize = serialize + 'groupEmployees#%#';	
		}
	} else if ($jit.id('groupEmployeesByPost').checked == true) {
		var showAssistant=$jit.id('showAssistant').checked;
		if(showAssistant){
			serialize = serialize + 'groupEmployeesByPostWithAssistant#%#';
		}else{
			serialize = serialize + 'groupEmployeesByPost#%#';
		}
	}

	if ($jit.id('withoutgroupVacancies').checked == true) {
		serialize = serialize + 'withoutgroupVacancies#%#';
	} else if ($jit.id('groupVacancies').checked == true) {
		serialize = serialize + 'groupVacancies#%#';
	}

	return serialize;
}

/**
* Function to serialize nodes to print, check if we have to print all orgchart, or only visible nodes 
* 
*/
function serializeNodesToPrint(bOnlyVisibles) {

	if (bOnlyVisibles == undefined) {
		bOnlyVisibles = false;
	}

	var serialize = '#%#';
	var pp = $jit.id('PrintVisibleNodes');	
	if (pp.checked == true || bOnlyVisibles == true) {

		_st.graph.eachNode(function (node) {
			// if node is visible, serialize his id
			// employees
			if (node.drawn == true && node.m4ignore == false) {
				
				//if is node groupEmployeesPostWithAssistant change name
				if(isGroup(node)){
					for(var i in node.data){
						var n=getNameItem(i);
						if(n=='IdPrint' || n=='VacancyIdPrint'){
							serialize = serialize + node.data[i] + '#%#';
						}
					}
				}else{
					serialize = serialize + node.id + '#%#';
				}
				//if node have assistant child
				if (_showDependencies) {
					if (typeof node.dependenciFuncional == 'object') {
						serialize = serialize + node.dependenciFuncional.id
						+ '#%#';
					}
				}
			}
		});
	} else {
		var serialize = 'AllNodes#%#';
	}
	return serialize;
}

// Devuelve un array con las posiciones de los nodos visibles para que se guarde en el estilo
function getPositionNodesForStyle() {
	function PositionNode (id, pos) {
		this.id = id;
		this.pos = new Coordinate(pos.x, pos.y);

		var nodeMoved = _positionNodesMovedManually[id];
		this.moved = (nodeMoved != null);
	}	

	var positionNodes = [];

	_st.graph.eachNode(function (node) {	
		//{"id":"elem1","pos":{"X":0.0,"Y":0.0}}
	
		if (node.drawn  && node.m4ignore == false) {
			//Nota: Hemos intentado la carga inicial, almacenando s�lo los nodos movidos manualmente y no vale.
			//Porque no tenemos seguridad de que el Compute no haya movido los nodos a otras posiciones diferentes de la inicial en su c�lculo (de hecho las cambia con seguridad)			
			positionNodes.push (new PositionNode(node.id, node.pos));			
		}
	});

	return positionNodes;
}

// Devuelve un array con las posiciones de los nodos visibles en una única página y con las posiciones reales de los nodos
function getPositionNodesForPrintWitoutLienzo() {
	function PositionNode (id, pos) {
		this.id = id;
		this.pos = new Coordinate(pos.x, pos.y);

		var nodeMoved = _positionNodesMovedManually[id];
		this.moved = (nodeMoved != null);
	}	


	var nodesInPage = [];

	_st.graph.eachNode(function (node) {	
		//{"id":"elem1","pos":{"X":0.0,"Y":0.0}}
	
		if (node.drawn  && node.m4ignore == false) {
			//Nota: Hemos intentado la carga inicial, almacenando sï¿½lo los nodos movidos manualmente y no vale.
			//Porque no tenemos seguridad de que el Compute no haya movido los nodos a otras posiciones diferentes de la inicial en su cï¿½lculo (de hecho las cambia con seguridad)			
			nodesInPage.push (new PositionNode(node.id, node.pos));			
		}
	});

	var positionNodesPerPaged = [];
	positionNodesPerPaged.push ({"page" : 0, "nodes" : nodesInPage});	

	// Abstracción de nivel superior para indicar que la impresión es sin lienzo
	var positionNodesPerPagedForPrint = {"canvas": 0, "pages": positionNodesPerPaged};
	return positionNodesPerPagedForPrint;
}

/**
* Function to serialize the positions of the nodes in a Json only if nodes were moved
*/
function serializePositionNodesForPrintIfNeed() {

	// Serializamos las posiciones de los nodos si se han movido los nodos y si est? marcada la check "Imprimir posiciones reales de los nodos"
	var pRealPositionNodes = $jit.id('printRealPositionNodes');	
	if (_hasMoveNode === true && pRealPositionNodes.checked === true) {
		//{"id":"elem1","pos":{"X":0.0,"Y":0.0}}			
		return JSON.stringify(getPositionNodesForPrintWitoutLienzo());
	} else {
		return '';
	}
}


/**
* Function to serialize style 
* 
*/
function serializeStyle(type,typeZoom) {
	// order by serialze
	// ARG 0 ->type m4anchor
	// ARG 1 ->style(ID,name,protect,size)
	// ARG 2 ->style serialize
	// ARG 3 ->mapTypedId

	// STYLE
	// NUMBER VERSION +$$
	// ID
	// NAME
	// PROTECT
	// SIZE

	// TYPE STYLE

	// ID type_STYLE +$$
	// TYPE +$$
	// COLOR +$$
	// COLOR LINE NORMAL +$$
	// COLOR LINE ASSOCIATED +$$
	// COLOR BORDER BOX +$$
	//COLOR BORDER FONT +$$
	// SHAPE +$$
	// BORDER WITDH +$$
	// LINE WIDTH +$$
	// TYPE LINE NORMAL +$$
	// TYPE LINE ASSOCIATED +$$
	// name item +$& nameItem +$& check +$$ bold+ +$$ italic +$$
	// %%%

	var serStyle = false;

	if (type == 'print') {
		serStyle = true;
	}

	if (type == 'saveStyle' || type == 'deleteStyle') {
		if(_propertyBag.essMode==false && type == 'saveStyle'){
			if ($jit.id('textIdStyle').value == _configStyle[0]
				&& _configStyle[2] == 'public') {
				alert(_msgSaveSameId);
			} else if ($jit.id('textNameStyle').value == "") {
				alert(_msgSaveName);
			} else if ($jit.id('textIdStyle').value == ""){
			alert(_msgSaveId);
			}
		}
 
		serStyle = true;

		if (type == 'deleteStyle') {
			serStyle = false;
		}

		var t1='';
		var t2='';

		if(_propertyBag.essMode==false) {
			//if (type == 'saveStyleAndView') {
			//	// USuario + id_int_style + wu
			//	t1 = _idUser + '_' + _configStyle[3] + '_' + _st.root;
			//	t2 = t1 + " for internal View";
			//} else {
				t1 = $jit.id('textIdStyle').value;
				t2 = $jit.id('textNameStyle').value;
			//}
		} else {
			//Ess/Mss mode
			t1 = 'ESS_' + _idUser + (!_bSavingESSDefaultStyle ? "_" + _st.root : ""); // variable from jsp
			t2 = 'ESS_' + _idUser + (!_bSavingESSDefaultStyle ? "_" + _st.root : ""); // variable from jsp
		}

		//change/save name style and id
		_configStyle[0] = t1;
		_configStyle[1] = t2;
		_configStyle[2] = 'private';

		if (type == 'saveStyle') {
			controlSaveStyle();
		}

		//change/save type protect style
		//if (type == 'saveStyleAndView') {
		//	_configStyle[2] = 'private';
		//} else {
			if ($jit.id('savePrivate').checked == true) {
				_configStyle[2] = 'private';
			} else {
				_configStyle[2] = 'public';
			}
		//}

		_configStyle[4] = _st.graph.Node.width / 2;

		//Select Level
		var levelsToShowSelect=$jit.id('selectLevel');
		var levels=levelsToShowSelect.value;
		_configStyle[5] = levels;

		//Elements by group
		var inputPerson = $jit.id('numberPerson');
		var _numberPersonTogroup = inputPerson.value;
		_configStyle[6] = _numberPersonTogroup;

		// Lienzo-----------------------------------------------------
		//Show Canvas (lienzo)
		if (_propertyBag.activated_WysIwyg_print) {
			var verLienzo = $jit.id('verLienzo');
			_configStyle[7] = (verLienzo.checked ? 1 : 0);

			//Canvas position
			_configStyle[8] = meta4.orgdyn.lienzo.getPositionCanvasSerialized(_st);

			//Canvas paper size
			_configStyle[9] = meta4.orgdyn.lienzo.getPaperLienzo();

			//Canvas paper orientation
			_configStyle[10] = meta4.orgdyn.lienzo.getPaperOrientation();		

			//Matrix Rowx in Canvas
			_configStyle[11] = meta4.orgdyn.lienzo.getLienzoDim().rows;

			//Matrix Rowx in Canvas
			_configStyle[12] = meta4.orgdyn.lienzo.getLienzoDim().cols; 
		}		
		// Lienzo-----------------------------------------------------
	}

	if (serStyle == true) {
		if(typeZoom==TYPE_ZOOM_NORMAL){
			return serializeZoomNormal();
		}else if(typeZoom==TYPE_ZOOM_HEAD_PHOTO){
			return serializeZoomHeadPhoto();
		}else if(typeZoom==TYPE_ZOOM_PHOTO){
			return serializeZoomOnlyPhoto();
		}else if(typeZoom==TYPE_ZOOM_NOTHING){
			return serializeZoomNothing();
		}
	} else {
		
		var nameStyleAndProtect = "0001" + "$$" + _configStyle[0] + "$$" + _configStyle[1] + "$$" + _configStyle[2] + "$$" + _configStyle[3] + "$$"; 

		// redirige to m4anchor
		var send = '$Arg2=' + nameStyleAndProtect + '$Arg3=' + "" + '$Arg4=' + "";

		return send;
	}
}


/**
 * Serialzie style with all fields
 * @returns {String}
 */
function serializeZoomNormal(){
	// number to indicate type of serialization
	var numVersion = "0001";
	var serialize = "";
	var map = "";
	var nam;
	for (var i in listStyles) {
		if (typeof listStyles[i] == 'object') {
			nam = listStyles[i]['_idTypeStyle'];
			if (nam != 'styleDefault') {
				serialize += listStyles[i]['_idTypeStyle'] + "$$";
				serialize += listStyles[i]['_nameTypeStyle'] + "$$";
				serialize += listStyles[i]['_type'] + "$$";
				serialize += listStyles[i]['_color'] + "$$";
				serialize += listStyles[i]['_colorLineNormal'] + "$$";
				serialize += listStyles[i]['_colorLineAssociated'] + "$$";
				serialize += listStyles[i]['_colorBorderBox'] + "$$";
				serialize += listStyles[i]['_colorFont'] + "$$";
				serialize += listStyles[i]['_shape'] + "$$";
				serialize += listStyles[i]['_borderWidth'] + "$$";
				serialize += listStyles[i]['_lineWidth'] + "$$";
				serialize += listStyles[i]['_typeLineNormal'] + "$$";
				serialize += listStyles[i]['_typeLineAssociated'] + "$$";
				serialize += listStyles[i]['_widthBox'] + "$$"
				serialize += listStyles[i]['_heightBox'] + "$$";
				serialize += listStyles[i]['_gropingBox'] + "$$";
				serialize += listStyles[i]['_showBox'] + "$$";

				// item
				for (k in listStyles[i]['_listItem']) {
					if (typeof  listStyles[i]['_listItem'][k] == 'object') {
						serialize += listStyles[i]['_listItem'][k]['_item'] + "$$";
						serialize += listStyles[i]['_listItem'][k]['_name'] + "$$";
						serialize += listStyles[i]['_listItem'][k]['_check'] + "$$";
						serialize += listStyles[i]['_listItem'][k]['_bold'] + "$$";
						serialize += listStyles[i]['_listItem'][k]['_italic']
						+ "$$";
					}
				}
				serialize += "%%%";
			}
		}
	}

	for (var m in mapTypeId) {
		map = map + m + "$$" + mapTypeId[m] + "$$";
	}

	var nameStyleAndProtect = numVersion + "$$" + _configStyle[0] + "$$"
			+ _configStyle[1] + "$$" + _configStyle[2] + "$$"
			+ _st.graph.Node.width + "$$" + _st.graph.Node.height + "$$"+ _configStyle[3] + "$$"+ _configStyle[5] + "$$" + _configStyle[6] + "$$";

	if (_propertyBag.activated_WysIwyg_print) {
		nameStyleAndProtect +=  _configStyle[7] + "$$" + _configStyle[8] + "$$" + _configStyle[9] + "$$" + _configStyle[10] + "$$" + _configStyle[11] + "$$" + _configStyle[12] + "$$";
	}

	// redirige to m4anchor
	var send = '$Arg2=' + nameStyleAndProtect + '$Arg3=' + serialize + '$Arg4=' + map;
	return send;
}


/**
 * Serialzie style with photo and name
 * @returns {String}
 */
function serializeZoomHeadPhoto(){
	// number to indicate type of serialization
	var numVersion = "0001";
	var serialize = "";
	var map = "";
	var nam;
	for (var i in listStyles) {
		if (typeof listStyles[i] == 'object') {
			nam = listStyles[i]['_idTypeStyle'];
			if (nam != 'styleDefault') {
				serialize += listStyles[i]['_idTypeStyle'] + "$$";
				serialize += listStyles[i]['_nameTypeStyle'] + "$$";
				serialize += listStyles[i]['_type'] + "$$";
				serialize += listStyles[i]['_color'] + "$$";
				serialize += listStyles[i]['_colorLineNormal'] + "$$";
				serialize += listStyles[i]['_colorLineAssociated'] + "$$";
				serialize += listStyles[i]['_colorBorderBox'] + "$$";
				serialize += listStyles[i]['_colorFont'] + "$$";
				serialize += listStyles[i]['_shape'] + "$$";
				serialize += listStyles[i]['_borderWidth'] + "$$";
				serialize += listStyles[i]['_lineWidth'] + "$$";
				serialize += listStyles[i]['_typeLineNormal'] + "$$";
				serialize += listStyles[i]['_typeLineAssociated'] + "$$";
				serialize += listStyles[i]['_widthBox'] + "$$"
				serialize += listStyles[i]['_heightBox'] + "$$";
				serialize += listStyles[i]['_gropingBox'] + "$$";
				serialize += listStyles[i]['_showBox'] + "$$";

				// item
				for (k in listStyles[i]['_listItem']) {
					if (typeof  listStyles[i]['_listItem'][k] == 'object') {
						serialize += listStyles[i]['_listItem'][k]['_item'] + "$$";
						serialize += listStyles[i]['_listItem'][k]['_name'] + "$$";
						if(listStyles[i]['_listItem'][k]['_item']=='Photo'){
							 serialize += listStyles[i]['_listItem'][k]['_check'] + "$$";
						}else if(listStyles[i]['_listItem'][k]['_item']=='Name'
								||listStyles[i]['_listItem'][k]['_item']=='VacancyName'
								||listStyles[i]['_listItem'][k]['_item']=='ResponsibleName'
								||listStyles[i]['_listItem'][k]['_item']=='Id'
								||listStyles[i]['_listItem'][k]['_item']=='VacancyID'
								||listStyles[i]['_listItem'][k]['_item']=='ResponsibleID'){
						/*else if(listStyles[i]['_listItem'][k]['_item']=='Name'
								||listStyles[i]['_listItem'][k]['_item']=='NameVacancyWU'
								||listStyles[i]['_listItem'][k]['_item']=='NameWU'){
									*/
							serialize += 'true' + "$$";
						}else{
							serialize += 'false' + "$$";
						}
						serialize += listStyles[i]['_listItem'][k]['_bold'] + "$$";
						serialize += listStyles[i]['_listItem'][k]['_italic']
						+ "$$";
					}
				}
				serialize += "%%%";
			}
		}
	}

	for (var m in mapTypeId) {
		map = map + m + "$$" + mapTypeId[m] + "$$";
	}

	var nameStyleAndProtect = numVersion + "$$" + _configStyle[0] + "$$"
			+ _configStyle[1] + "$$" + _configStyle[2] + "$$"
			+ _st.graph.Node.width + "$$" + _st.graph.Node.height + "$$"+ _configStyle[3] + "$$"+ _configStyle[5] + "$$" + _configStyle[6] + "$$";

	if (_propertyBag.activated_WysIwyg_print) {
		nameStyleAndProtect +=  _configStyle[7] + "$$" + _configStyle[8] + "$$" + _configStyle[9] + "$$" + _configStyle[10] + "$$" + _configStyle[11] + "$$" + _configStyle[12] + "$$";
	}

	
	// redirige to m4anchor
	var send = '$Arg2=' + nameStyleAndProtect + '$Arg3=' + serialize + '$Arg4=' + map;
	return send;
}


/**
 * Serialzie style with only photo
 * @returns {String}
 */
function serializeZoomOnlyPhoto(){
	// number to indicate type of serialization
	var numVersion = "0001";
	var serialize = "";
	var map = "";
	var nam;
	for (var i in listStyles) {
		if (typeof listStyles[i] == 'object') {
			nam = listStyles[i]['_idTypeStyle'];
			if (nam != 'styleDefault') {
				serialize += listStyles[i]['_idTypeStyle'] + "$$";
				serialize += listStyles[i]['_nameTypeStyle'] + "$$";
				serialize += listStyles[i]['_type'] + "$$";
				serialize += listStyles[i]['_color'] + "$$";
				serialize += listStyles[i]['_colorLineNormal'] + "$$";
				serialize += listStyles[i]['_colorLineAssociated'] + "$$";
				serialize += listStyles[i]['_colorBorderBox'] + "$$";
				serialize += listStyles[i]['_colorFont'] + "$$";
				serialize += listStyles[i]['_shape'] + "$$";
				serialize += listStyles[i]['_borderWidth'] + "$$";
				serialize += listStyles[i]['_lineWidth'] + "$$";
				serialize += listStyles[i]['_typeLineNormal'] + "$$";
				serialize += listStyles[i]['_typeLineAssociated'] + "$$";
				serialize += listStyles[i]['_widthBox'] + "$$"
				serialize += listStyles[i]['_heightBox'] + "$$";
				serialize += listStyles[i]['_gropingBox'] + "$$";
				serialize += listStyles[i]['_showBox'] + "$$";

				// item
				for (k in listStyles[i]['_listItem']) {
					if (typeof  listStyles[i]['_listItem'][k] == 'object') {
						serialize += listStyles[i]['_listItem'][k]['_item'] + "$$";
						serialize += listStyles[i]['_listItem'][k]['_name'] + "$$";
						if(listStyles[i]['_listItem'][k]['_item']=='Photo'){
							serialize += listStyles[i]['_listItem'][k]['_check'] + "$$";
						}else{
							serialize += 'false' + "$$";
						}
						serialize += listStyles[i]['_listItem'][k]['_bold'] + "$$";
						serialize += listStyles[i]['_listItem'][k]['_italic']
						+ "$$";
					}
				}
				serialize += "%%%";
			}
		}
	}

	for (var m in mapTypeId) {
		map = map + m + "$$" + mapTypeId[m] + "$$";
	}

	var nameStyleAndProtect = numVersion + "$$" + _configStyle[0] + "$$"
			+ _configStyle[1] + "$$" + _configStyle[2] + "$$"
			+ _st.graph.Node.width + "$$" + _st.graph.Node.height + "$$"+ _configStyle[3] + "$$"+ _configStyle[5] + "$$" + _configStyle[6] + "$$";

	if (_propertyBag.activated_WysIwyg_print) {
		nameStyleAndProtect +=  _configStyle[7] + "$$" + _configStyle[8] + "$$" + _configStyle[9] + "$$" + _configStyle[10] + "$$" + _configStyle[11] + "$$" + _configStyle[12] + "$$";
	}

	// redirige to m4anchor
	var send = '$Arg2=' + nameStyleAndProtect + '$Arg3=' + serialize + '$Arg4=' + map;
	return send;
}

/**
 * Serialzie style with anything field
 * @returns {String}
 */
function serializeZoomNothing(){
	// number to indicate type of serialization
	var numVersion = "0001";
	var serialize = "";
	var map = "";
	var nam;
	for (var i in listStyles) {
		if (typeof listStyles[i] == 'object') {
			nam = listStyles[i]['_idTypeStyle'];
			if (nam != 'styleDefault') {
				serialize += listStyles[i]['_idTypeStyle'] + "$$";
				serialize += listStyles[i]['_nameTypeStyle'] + "$$";
				serialize += listStyles[i]['_type'] + "$$";
				serialize += listStyles[i]['_color'] + "$$";
				serialize += listStyles[i]['_colorLineNormal'] + "$$";
				serialize += listStyles[i]['_colorLineAssociated'] + "$$";
				serialize += listStyles[i]['_colorBorderBox'] + "$$";
				serialize += listStyles[i]['_colorFont'] + "$$";
				serialize += listStyles[i]['_shape'] + "$$";
				serialize += listStyles[i]['_borderWidth'] + "$$";
				serialize += listStyles[i]['_lineWidth'] + "$$";
				serialize += listStyles[i]['_typeLineNormal'] + "$$";
				serialize += listStyles[i]['_typeLineAssociated'] + "$$";
				serialize += listStyles[i]['_widthBox'] + "$$"
				serialize += listStyles[i]['_heightBox'] + "$$";
				serialize += listStyles[i]['_gropingBox'] + "$$";
				serialize += listStyles[i]['_showBox'] + "$$";

				// item
				for (k in listStyles[i]['_listItem']) {
					if (typeof  listStyles[i]['_listItem'][k] == 'object') {
						serialize += listStyles[i]['_listItem'][k]['_item'] + "$$";
						serialize += listStyles[i]['_listItem'][k]['_name'] + "$$";
						serialize += 'false' + "$$";//always false
						serialize += listStyles[i]['_listItem'][k]['_bold'] + "$$";
						serialize += listStyles[i]['_listItem'][k]['_italic']
						+ "$$";
					}
				}
				serialize += "%%%";
			}
		}
	}

	for (var m in mapTypeId) {
		map = map + m + "$$" + mapTypeId[m] + "$$";
	}

	var nameStyleAndProtect = numVersion + "$$" + _configStyle[0] + "$$"
		+ _configStyle[1] + "$$" + _configStyle[2] + "$$"
		+ _st.graph.Node.width + "$$" + _st.graph.Node.height + "$$"+ _configStyle[3] + "$$"+ _configStyle[5] + "$$" + _configStyle[6] + "$$";

	if (_propertyBag.activated_WysIwyg_print) {
		nameStyleAndProtect +=  _configStyle[7] + "$$" + _configStyle[8] + "$$" + _configStyle[9] + "$$" + _configStyle[10] + "$$" + _configStyle[11] + "$$" + _configStyle[12] + "$$";
	}

	// redirige to m4anchor

	var send = '$Arg2=' + nameStyleAndProtect + '$Arg3=' + serialize + '$Arg4=' + map;
	return send;
}


/**
* Function to print orgchart, with app Java Pdf
*/
function printOrgChart() {
	var orientation = '-1';
	var editablePDF = $jit.id('typePDF');

	if ($jit.id('printLandscape').checked == true) {
		orientation = m4_landscape;
	}

	if ($jit.id('printPortrait').checked == true) {
		orientation = m4_portrait;
	}

	if (orientation == '-1') {		
		alert('You must choose an orientation for the page');		
	} else if ($jit.id('printComplete').checked == false
		&& $jit.id('printByLevel').checked == false) {
		alert('You must choose a type print');
	} else if ($jit.id('printByLevel').checked == true
		&& $jit.id('printHorizontal').checked == false
		&& $jit.id('printPlume').checked == false) {
		alert('you must choose the position of the boxes');
	} else if ($jit.id('printByLevel').checked == true
		&& $jit.id('printHorizontal').checked == true) {
		var signindex = $jit.id('levelsToPrint').selectedIndex;
		var val = $jit.id('levelsToPrint').options[signindex].value;
		sendPrint('printLevels#' + val + '#horizontal#' + orientation + '#'+editablePDF.checked+'#');
		//alert('imprime niveles horizontal: '+val+ " niveles!!!"+orientation);
	} else if ($jit.id('printByLevel').checked == true
		&& $jit.id('printPlume').checked == true) {
		var signindex = $jit.id('levelsToPrint').selectedIndex;
		var val = $jit.id('levelsToPrint').options[signindex].value;
		sendPrint('printLevels#' + val + '#plume#' + orientation + '#'+editablePDF.checked+'#');
		//alert('imprime niveles pluma: '+val+ " niveles!!!"+orientation);
	}
	if ($jit.id('printComplete').checked == true) {
		sendPrint('printComplete#0#horizontal#' + orientation + '#'+editablePDF.checked+'#');
		//alert('imprime completo en horizontal: '+orientation);	
	}
}


/**

// END FUNTION TO COMUNICATE WITH PEOPLE NET


//tree WU


/** 
 * function to create tree
 */
function createTree(json,objectContent,desp){

	if(json.type==TYPE_WU){
	
		var li = document.createElement("li");
		li.style.paddingTop='2px';		
		var a = document.createElement("a");
		a.id= 'a_Tree_'+json.id;
		var label = document.createElement("label");
		label.id='label_'+json.id;
		label.className='tree';
		var img = document.createElement("img");
		var imgWU = document.createElement("img");
		img.className='imgWU';
		imgWU.className='imgWU';
		li.id='li_'+json.id;
		li.style.paddingTop='1px';
		
		label.onclick=function (){
			//set levels to show
			_st.config.levelsToShow=1;

			if(_lastTreeChecked!=false){
				var e =$jit.id('a_Tree_'+_lastTreeChecked.id); 
				if(e!=null){
					e.style.background='';
				}
			}
			
			// _st.onClick launzh  un this.geom.translate(node.endPos.add(offset).$scale(-1), "end");
			// => recalculate node positions but do not syncronice canvas			
			var verLienzo = $jit.id('verLienzo');
			if (!verLienzo.checked) {

				_lastTreeChecked=_st.graph.getNode(json.id);
				
				var parent = _lastTreeChecked.getParents();
				_nodeSearch=_lastTreeChecked;
				if(parent[0]){
					gotoNodeSearch(parent[0].id);
				}else{
					gotoNodeSearch(_lastTreeChecked.id);
				}
				
				a.style.background='#59bce5';
			}
		};
		
		
		img.src=_AbsolutePathTemplate+'css/images/play4.svg';
		imgWU.src=_AbsolutePathTemplate+'css/iconmenu/office-mono-blue.svg';
		
		//type orgchart position 
		if(_configStyle[3]=="3"){
			label.title=json.data['VacancyName'];
			label.innerText=json.data['VacancyName'];
			label.textContent=json.data['VacancyName'];
			
		}else{
			label.title=json.data['NameWU'];
			label.innerText=json.data['NameWU'];
			label.textContent=json.data['NameWU'];	
		}

		a.className='tree';
		a.appendChild(img);
		a.appendChild(imgWU);
		
		li.appendChild(a);
		a.appendChild(label);
		
		img.onclick=function(){
			
			if($jit.id('ul_'+json.id).nodeBlock!=true){
				if($jit.id('ul_'+json.id).style.display!='none'){
					$('#ul_'+json.id).hide("slow");
				}else{
					$('#ul_'+json.id).show("slow");
				}
			}
		};

	
		objectContent.appendChild(li);
		
		if(hasChildrenWUTree(json)){
			li.style.paddingLeft=desp+'px';
			var ul = document.createElement("ul");
			ul.style.paddingTop='1px';
			li.appendChild(ul);
			ul.id='ul_'+json.id;

			if(desp!=5){
				ul.style.display='none';
			}else{
				a.style.background='#59bce5';
			}

			for(var i in json.children){
				createTree(json.children[i],ul,desp+5);
			}
		}else{
			img.style.display='none';
			li.style.paddingLeft=desp+16+'px';
		}
		
	}
	
}

/**
 * FUnction to change background in tree WU
 */
function markTreeWU(node){
		
	if(node.type==TYPE_WU){
		if(_lastTreeChecked!=false){
			var e =$jit.id('a_Tree_'+_lastTreeChecked.id);
			if(e!=null){
				e.style.background='';
			}
		}
		
		var e =$jit.id('a_Tree_'+node.id); 
		e.style.background='#59bce5';
		
		//store last action
		_lastTreeChecked=node;
		
		var parentElement= e.parentElement;
		
		while(parentElement.nodeName=='UL' ||parentElement.nodeName=='LI'){
			if(parentElement.nodeName=='UL'){
				$(parentElement).show("slow");
			}
			parentElement= parentElement.parentElement;
		}
		
		//move scroll
		var offSetTop = e.offsetTop;
		var posScroll=$('#divScroll').scrollTop(); 
		
		//no funciona en IE
		//var cWUoffsetTOp= $('#contentWU')[0].children[0].offsetTop;
		
		//distancia hasta el primer li
		 var dist= $('.TabsMenu').height()*2+250;
		
		offSetTop=offSetTop-dist;
		
		$('#divScroll').animate({scrollTop:offSetTop}, 300);
	}
}

/**
 * FUnction to simulate click en tree WU, when expand tree 'N' levels
 */
function markTreeWURecursive(element,num){
	if(element){
		//show ul in tree WU
		if(num>1){
			for(var i in element.childNodes){
				var n = element.childNodes[i];
				if(n.nodeName=='LI'){
					markTreeWURecursive(n,num);
				}
				if(n.nodeName=='UL'){
					$(n).show("slow");
					markTreeWURecursive(n,num-1);
				}
			}
		}else{
			//hide ul in tree WU
			for(var i in element.childNodes){
				var n = element.childNodes[i];
				if(n.nodeName=='LI'){
					markTreeWURecursive(n,-1);
				}
				if(n.nodeName=='UL'){
			 		$(n).hide("slow");
					markTreeWURecursive(n,-1);
				}
			}
		}
	}
}


/**
 * FUnction to update tree WU
 */
function updateTree(){

	var listParents= {};
	if(_lastTreeChecked!=false){
		//list old
		m4getParents(_lastTreeChecked,listParents);
		listParents.push(_lastTreeChecked.id);
	}

	for(var i in listParents){
		if(listParents[i]!=false){
			simulate(document.getElementById("a_Tree_"+listParents[i]), "click");
		}
	}	
	
}


/**
 * Function to set size tables of departament and employee. 
 * This function is executed after move panel left
 */
/*function m4SetSizetables(type){

	var infovis =$jit.id('infovis');
	var containerTables =$jit.id('containerTablesNodes');
	var panelLeft = jQuery('.m4-panelLeftOpen').width();
	
	// NOTA dvb: 24/04/2015 Revisar esta funci�n.. para qu� el par�metro??
	if (infovis.clientWidth-panelLeft < 0 && (type=='dynamic' || type =='static' || type =='all'))
	{
		containerTables.style.width = infovis.clientWidth-panelLeft+'px';; //'0 px';
	} else {
		if(type=='dynamic'){
			containerTables.style.width=infovis.clientWidth-panelLeft+'px';
		}
		if(type=='static'){
			containerTables.style.width=infovis.clientWidth-panelLeft+'px';
		}
		if(type=='all'){
			containerTables.style.width=infovis.clientWidth-panelLeft+'px';
		}
	}
}
*/

function m4SetSizetables(){

	var infovis = $jit.id('infovis');
	var containerTables = $jit.id('containerTablesNodes');
	var panelLeft = jQuery('.m4-panelLeftOpen').width();

	containerTables.style.width = infovis.clientWidth - panelLeft + 'px';
}

// El tama�o de las cajas se almacena en todos los tipos de elementos: Empleados, Unid Org, etc.
// Pero cuando el Diagrama es de posiciones, no existen las Unidades Organizativas, luego hay que pillar el tama�o de otro tipo de elemento.
function GetSizeElementXFromOrgChart() {

	//Organigrama Din�mico de Posiciones
	if (_configStyle[3] == "3") {
		return GetSizeElementX(STYLE_TYPE_POSITION);
	} else {
		//Organigrama Din�mico 
		return GetSizeElementX(STYLE_TYPE_UNIDORG);
	}
}


// El tama�o de las cajas se almacena en todos los tipos de elementos: Empleados, Unid Org, etc.
// Pero cuando el Diagrama es de posiciones, no existen las Unidades Organizativas, luego hay que pillar el tama�o de otro tipo de elemento.
function GetSizeElementYFromOrgChart() {

	//Organigrama Din�mico de Posiciones
	if (_configStyle[3] == "3") {
		return GetSizeElementY(STYLE_TYPE_POSITION);
	} else {
		//Organigrama Din�mico 
		return GetSizeElementY(STYLE_TYPE_UNIDORG);
	}
}

function GetSizeElementX(idType){
	var result;
	var typeStyle = getTypeStyle(idType);

	var widthBox = getValueAttribute(typeStyle, ATTR_WIDTH_BOX);
	if (widthBox != null) {
		result = widthBox;
	}
	
	if (widthBox == 0)
	{
		result = _typeStyleDefault._widthBox;
	}
	return result;
}

function GetSizeElementY(idType){
	var result;
	var typeStyle = getTypeStyle(idType);

	var heightBox = getValueAttribute(typeStyle, ATTR_HEIGHT_BOX);
	if (heightBox != null) {
		result = heightBox;    
	}

	if (heightBox == 0)
	{
		result = _typeStyleDefault._heightBox;
	}
	return result;
}

function GetGroupingBox(idType){
	var result;
	var typeStyle = getTypeStyle(idType);

	var groupingBox = getValueAttribute(typeStyle, ATTR_GROUPING_BOX);
	if (groupingBox != null) {
		result = groupingBox;    
	}

	//if (groupingBox== 0)
	//{
	//	result = _typeStyleDefault._gropingBox;
	//}
	return result;
}	

function GetShowBox(idType){
	var result;
	var typeStyle = getTypeStyle(idType);

	var showBox = getValueAttribute(typeStyle, ATTR_SHOW_BOX);
	if (showBox != null) {
		result = showBox;    
	}

	//if (showBox == 0)
	//{
	//	result = _typeStyleDefault._showBox;
	//}
	return result;
}	

/**
* Muestra u oculta las cajas del arbol segun la configuraci�n del estilo cargado. 
* Los controles visuales ya deben estar actualizados con lo cargado en el estilo
* Procura optimizar la carga del �rbol reduciendo bucles...
*/
/*
function UpdateShowingAndGrouping(bRefresh){
	if (arguments.length == 0) {
		bRefresh = true;
	}

	var showDepenFunc = $jit.id('showDepenFunc').checked;
	var showVacancies = $jit.id('showVacancies').checked;
	var withoutgroupVacancies = $jit.id('withoutgroupVacancies').checked;
	var groupEmployees = $jit.id('groupEmployees').checked;
	var groupEmployeesByPost = $jit.id('groupEmployeesByPost').checked;
	var showEmployees = $jit.id('showEmployees').checked;
	var showAssistant = $jit.id('showAssistant').checked; 
	var withoutgroupEmployees = $jit.id('withoutgroupEmployees').checked;

	var levelsToShowSelect = $jit.id('selectLevel');

	// Actualizamos el arbol con el n�mero de niveles a mostrar
	 _st.config.levelsToShow =  levelsToShowSelect.value;

	// Bucle principal
	_st.graph.eachNode(function (node) {
		// WorkUnits
		if (node.type == TYPE_WU) {
			if(showEmployees){
				if (node.drawn)
				{
					node.exployChild=true;
				}
			}else{
				node.exployChild = false;
			}
		}

		//Empleados
		if (node.type == TYPE_SUBORDINATE) {
			if(showEmployees){
				if (withoutgroupEmployees) {
					//hideGroupEmployees
					if (isNodeGroupEmployee(node)) {// if node type groupEmployees
						nodeEmployeeShow(node, false);
					}else {
						node.m4showEmployees = true;

						var parent = node.getParents();
						if(parent[0].exployChild && belongListEmployees(parent[0].id)){
							node.drawn = true;
							node.exist= true;
						}
					}
				}else{
					//Pendiente


					if (groupEmployees||groupEmployeesByPost) {// if employees is grouped
						if(showAssistant){
							if(groupEmployeesByPost){
								//showTypeEmployee('groupedPostWithAssistant');

								if (node.data['groupEmployeesPostWithAssistant']) {// if node type groupEmployees by post
									nodeEmployeeShow(node, true);
								} else {
									nodeEmployeeShow(node, false);
								}

							}else{
								//showTypeEmployee('groupedWithAssistant');

								if (node.data['groupEmployeesWithAssistant']) {// if node type groupEmployees by post
									nodeEmployeeShow(node, true);
								} else {
									nodeEmployeeShow(node, false);
								}
							}
						}else{
							if(groupEmployeesByPost){
								//showTypeEmployee('byPost');
	
								if (node.data['groupEmployeesByPost']) {// if node type groupEmployees by post
									nodeEmployeeShow(node, true);
								} else {
									nodeEmployeeShow(node, false);
								}

							}else{
								//showTypeEmployee('withoutPost');

								if (node.data['groupEmployees']) {// if node type groupEmployees
									nodeEmployeeShow(node, true);
								} else {
									nodeEmployeeShow(node, false);
								}
							}
						}
					}
				}
			}else{
				node.m4showEmployees = false;
				node.visited=false;
				node.exist=false;
				node.drawn=false;
				node.selected=false;
				delete node.data['$width'];
				delete node.data['$height'];
			}
		}

		//Vacantes
		if (node.type == TYPE_VACANCY) {   // Ojo que es posible que esta cond haya que bajarla antes del widhoutgroupvacancies
			if (showVacancies) {
				// if have this data, hide node, groupVacancies is when gropued
				// employees
				if (node.data['groupVacancies'] || node.data['VacancyName']) {
					node.m4showVacancies = true;
				}

				if (withoutgroupVacancies) {
					// if have this data, hide node, name:-1 is when gropued vacancies
					if (node.data['groupVacancies']) {
						node.m4showVacancies = false;
						node.drawn = false;
					} else {
						node.m4showVacancies = true;
					}
				}else{
					if (node.data['groupVacancies']) {
						node.m4showVacancies = true;
					} else {
						node.m4showVacancies = false;
						node.drawn = false;
					}
				}
			}else{
				// if have this data, hide node, groupVacancies is when gropued
				// employees
				if (node.data['groupVacancies'] || node.data['VacancyName']) {
					if (showVacancies) {
						node.m4showVacancies = true;
					}else{
						node.m4showVacancies = false;
						node.exist = false;
						node.drawn = false;
					}
				}
			}
		}
		

	});

	//Las dependencias funcionales, dependen de que el nodo est� dibujado, las sacamos del bucle principal
	_st.graph.eachNode(function (node) {
		//Dependencias funcionales
		if (typeof node.dependenciFuncional == 'object' && node.drawn) {
			if (showDepenFunc) {
				node.setData('width', _st.graph.Node.width + _st.graph.Node.width * 0.6);
				node.setData('height', _st.graph.Node.height+ _st.graph.Node.height * 1.2);
			}else{
				delete node.data['$width'];
				delete node.data['$height'];
			}
		}
	});
	

	applyStyles();

	if (showVacancies) {
		// show submenu
		var controlShowVacancies = $jit.id('controlShowVacancies');
		controlShowVacancies.style.display = '';
	}else{
		// hide submenu
		var controlShowVacancies = $jit.id('controlShowVacancies');
		controlShowVacancies.style.display = 'none';
	}

	// Update label and set size nodes with child associated
	m4ClearLabel();

	if (bRefresh)
	{
		_st.refresh();
	}

}
*/

/**
* Internal function to show or not an employee node
*/

function nodeEmployeeShow(node, value)
{
	if (node.type == TYPE_SUBORDINATE) {
		if (value){
			//check if his employees is show
			var parent = node.getParents();
			if (parent[0] && parent[0].exployChild) {
				node.m4showEmployees = true;

				if(parent[0].exployChild && belongListEmployees(parent[0].id)){
					node.drawn = true;
					node.exist = true;
				} 
			}
		}else{
			node.m4showEmployees = false;
			node.drawn = false;
			node.exist= false;
		}
	}
}


/*
* Notify Org Dyn is loaded
*/
function NotifyLoaded(){
	window.parent.postMessage("Loaded", window.parent.location.protocol + '//' + window.parent.location.host); 
}

function UpdateExpandToolbar(divExpandToolBar, node){
	var demandAll = divExpandToolBar.childNodes[0];
	var demandWU = divExpandToolBar.childNodes[1];
	//var separatorVert = divExpandToolBar.childNodes[2];
	var demandEmp = divExpandToolBar.childNodes[2];
	var hide = 0;

	if (!_ESS_New_Organigram)
	{	
		demandAll.style.display='none';

		//change icon toolbarNOde
		if(hasChildWUVisible(node)){
			demandWU.src= _AbsolutePathTemplate+'images/minus-wu-mono-white-box.svg';
		}else{
			demandWU.src= _AbsolutePathTemplate+'images/plus-wu-mono-white-box.svg';
		}

		if(hasChildEmployeeVisible(node)){
			demandEmp.src= _AbsolutePathTemplate+'images/minus-employee-mono-white-box.svg';
		}else{
			demandEmp.src= _AbsolutePathTemplate+'images/plus-employee-mono-white-box.svg';
		}

		hide = 0;
		if(hasChildWU(node)){
			demandWU.style.display='';
		}else{
			demandWU.style.display='none';
			hide=hide+1;
		}

		if(hasChildEmp(node)){
			demandEmp.style.display='';
		}else{
			demandEmp.style.display='none';
			hide=hide+1;
		}
	} else {
		// Ejecuci�n nuevo organigrama
		demandWU.style.display='none';
		demandEmp.style.display='none';

		if(hasChildWUVisible(node) || hasChildEmployeeVisible(node)){
			demandAll.src= _AbsolutePathTemplate+'images/minus-thin-mono-white-box.svg';
			demandAll.style.display='';
		}else{
			demandAll.src= _AbsolutePathTemplate+'images/plus-thin-mono-white-box.svg';
			demandAll.style.display='none';
		}

		if(hasChildWU(node) || hasChildEmp(node)){
			demandAll.style.display='';
		}else{
			demandAll.style.display='none';
		}
		hide = 1; // Para que no aparezca el separador
	}

	if(_typeZoom == TYPE_ZOOM_PHOTO || _typeZoom == TYPE_ZOOM_NOTHING)
	{
		demandAll.className='buttonToolbarNodeReduced';
		demandWU.className='buttonToolbarNodeReduced';
		demandEmp.className='buttonToolbarNodeReduced';
	} else {
		demandAll.className='buttonToolbarNode';
		demandWU.className='buttonToolbarNode';
		demandEmp.className='buttonToolbarNode';
	}

	divExpandToolBar.style.width = 'auto';
	divExpandToolBar.style.height= 'auto';

	
	var escalado = $jit.id('escalado'); //Visualizamos la barra de nodos de expansi�n si no estamos escalando

	if(hide==2){
		divExpandToolBar.style.display='none';
	}else{
		divExpandToolBar.style.top = _st.graph.Node.height - 5 + 'px';
		divExpandToolBar.style.left = (_st.graph.Node.width / 2) - (divExpandToolBar.offsetWidth / 2) + 'px';
		divExpandToolBar.style.display =  (escalado.checked === true ? 'none' : '');
		//divExpandToolBar.style.display = '';
	}


	/*else{
		if (hide==1){
			separatorVert.style.display='none';
		}else{
			separatorVert.style.display='';
		}
		
		// Recolocamos la toolbar
		divExpandToolBar.style.top = _st.graph.Node.height - 5 + 'px';
		divExpandToolBar.style.left = (_st.graph.Node.width / 2) - (divExpandToolBar.offsetWidth / 2) + 'px';
		divExpandToolBar.style.display='';
	}*/
}

// Factorizamos la funci�n para que pueda ser invocada al deshacer una Expansi�n/Contracci�n de nodos de la WU
function demandWU_onclick(node) {	
	//Marcamos para Deshacer y nos quedamos con las posiciones antes de que se aplique el c�digo, para quedarnos con las posiciones de los controles antes de que se desplieguen u oculten
	if (_canMoveNodes && !_bExpandingContractingNodes) {
		
		var typemove;
		if (hasChildEmployeeVisible(node)) {
			typemove = M4SNAPSHOT_CONTRACT_EMPWU;
		} else {
			if (hasChildWUVisible(node)) {
				typemove =  M4SNAPSHOT_CONTRACT_WU;
			} else {
				typemove =  M4SNAPSHOT_EXPAND_WU;
			}			
		}
		
		//console.log(new Date().toISOString() + typemove);
		
		pushSnapShotExpandContractNode(typemove, node);
	}

	_bShowPhotoForAfterComputingEfect = !_hasMoveNode;	

	//mark in tree WU
	markTreeWU(node);

	if(hasChildWUVisible(node)){
		//show tree mark 
		$('#ul_'+node.id).hide("slow");
		_st.config.levelsToShow = 0;
		node.selected=false;
		node.eachSubgraph(function (childNode) {
			 if(childNode.id!=node.id){
				childNode.drawn=false;
				childNode.visited=false;
				childNode.exist=false;
				childNode.selected=false;
				childNode.exployChild=false;

				if(childNode.type==TYPE_SUBORDINATE){
					childNode.m4showEmployees = false;
					delete childNode.data['$width'];
					delete childNode.data['$height'];
				}
				//hide tree mark
				if(childNode.type==TYPE_WU){
					$('#ul_'+childNode.id).hide("slow");
				}
			}
		});

		_st.select(node.id); 
		hideContextMenu();

		////m4HideToolbarNode();
	} else {
		//No podemos mostrar la foto cuando estamos expandiendo si alg�n nodo ha sido movido, porque se pintar�a tambi�n en la posici�n original que deja el Compute.
		_bShowPhotoForAfterComputingEfect = !_hasMoveNode;

		//mark tree wu
		$('#ul_'+node.id).show("slow");
		_st.config.levelsToShow = 1;
		_st.select(node.id);
		hideContextMenu();
		////m4HideToolbarNode();		
	}
		
	_st.canvas.translate(-_st.canvas.translateOffsetX, -_st.canvas.translateOffsetY - _deltaCanvasY, false, true);	

	UpdateExpandToolbar(node.divToolBar, node);	
}

// Factorizamos la funci�n para que pueda ser invocada al deshacer una Expansi�n/Contracci�n de Empleados
function demandEmp_onclick(node) {	

	//Marcamos para Deshacer y nos quedamos con las posiciones antes de que se aplique el c�digo, para quedarnos con las posiciones de los controles antes de que se desplieguen u oculten
	if (_canMoveNodes && !_bExpandingContractingNodes) {
		var typemove;

		if (hasChildEmployeeVisible(node)) {
			/*
			if (hasChildWUVisible(node)) {
				typemove = M4SNAPSHOT_CONTRACT_EMP;	// Si est? visualizadas EMP y WU, ocultamos solo los empleados
			} else {
				typemove = M4SNAPSHOT_CONTRACT_EMP; // Si est? visualizadas EMP y no WU, ocultamos solo los empleados
			}
			*/
			typemove = M4SNAPSHOT_CONTRACT_ONLY_EMP;
		} else {
			if (hasChildWUVisible(node)) {
				typemove = M4SNAPSHOT_EXPAND_ONLY_EMP;	// Si no est? visualizadas EMP, y s?las WU, hay que visualizar EMP y WU
			} else {
				if (hasChildWU(node)) {
					typemove = M4SNAPSHOT_EXPAND_EMPWU;  // Si no est?visualizado EMP ni WU, hay que visualizar EMP y WU	
				} else {
					typemove = M4SNAPSHOT_EXPAND_ONLY_EMP;  // Si no est?visualizado EMP ni WU, hay que visualizar EMP y WU
				}
				
			}
		}
		
		//console.log(new Date().toISOString() + typemove);
		
		pushSnapShotExpandContractNode(typemove, node);
	}
	
	_bShowPhotoForAfterComputingEfect = !_hasMoveNode;	

	//mark in tree WU
	markTreeWU(node);

	if(hasChildEmployeeVisible(node)){
		//remove list show employees
		removeElementList(node.id);
		node.exployChild=false;
		node.selected=false;
		node.eachSubnode(function (childNode) {
			if(childNode.id!=node.id){
				 if(childNode.type==TYPE_SUBORDINATE){
					childNode.m4showEmployees = false;
					childNode.visited=false;
					childNode.exist=false;
					childNode.drawn=false;
					childNode.selected=false;
					childNode.exployChild=false;
					delete childNode.data['$width'];
					delete childNode.data['$height'];
				}
			}
		});

		_st.select(node.id);
		hideContextMenu();
		////m4HideToolbarNode();

	} else { 
		//No podemos mostrar la foto cuando estamos expandiendo si alg�n nodo ha sido movido, porque se pintar�a tambi�n en la posici�n original que deja el Compute.
		_bShowPhotoForAfterComputingEfect = !_hasMoveNode;

		_listNodesShowEmployees.push(node.id);
		//mark tree WU
		$('#ul_'+node.id).show("slow");
		
		 node.exployChild=true;
		//show employyes of node
		var type='';
		
		var groupEmployeesByPost = $jit.id('groupEmployeesByPost').checked ;
		if (groupEmployeesByPost) {// if employees is grouped
			var showAssistant= $jit.id('showAssistant').checked;
			if(showAssistant){
				type='groupedPostWithAssistant';
			}else{
				type='byPost';
			}
		}

		var groupEmployees = $jit.id('groupEmployees').checked;
		if (groupEmployees) {// if employees is grouped
			var showAssistant= $jit.id('showAssistant').checked;
			if(showAssistant){
				type='groupedWithAssistant';
			}else{
				type='withoutPost';
			}
		}

		var withoutgroupEmployees = $jit.id('withoutgroupEmployees').checked;  
		if(withoutgroupEmployees){
			type='onlyEmployees';
		}

		//show employees of type ='type' 
		showEmployeesOfOneNode(type,node);

		//show WU also
		node.eachSubnode(function (childNode) {
			if(childNode.id!=node.id){
				if(childNode.type==TYPE_WU){										
					childNode.exist=true;
					childNode.drawn=true;
				}
			}
		});
	
		_st.config.levelsToShow = 1;
		_st.select(node.id);  
		
		//hide toolbar and context menu
		hideContextMenu();
		////m4HideToolbarNode(); 		
	}
		
	_st.canvas.translate(-_st.canvas.translateOffsetX, -_st.canvas.translateOffsetY - _deltaCanvasY, false, true);	
	//-------------------------

	UpdateExpandToolbar(node.divToolBar, node);	
}


// Factorizamos la funci�n para que pueda ser invocada al deshacer una Expansi�n/Contracci�n de todos los nodos hijos
function demandAll_onclick (node) {
	//Marcamos para Deshacer y nos quedamos con las posiciones antes de que se aplique el c�digo, para quedarnos con las posiciones de los controles antes de que se desplieguen u oculten
	if (_canMoveNodes && !_bExpandingContractingNodes) {
		pushSnapShotExpandContractNode(M4SNAPSHOT_EXPAND_CONTRACT_ALL, node);
	}

	_bShowPhotoForAfterComputingEfect = !_hasMoveNode;	

	//mark in tree WU
	markTreeWU(node);

	var bhasChildEmployeeVisible = hasChildEmployeeVisible(node);
	if(hasChildWUVisible(node)){
		//show tree mark 
		$('#ul_'+node.id).hide("slow");
		_st.config.levelsToShow = 0;
		node.selected=false;
		node.eachSubgraph(function (childNode) {
			 if(childNode.id!=node.id){
				childNode.drawn=false;
				childNode.visited=false;
				childNode.exist=false;
				childNode.selected=false;
				childNode.exployChild=false;

				if(childNode.type==TYPE_SUBORDINATE){
					childNode.m4showEmployees = false;
					delete childNode.data['$width'];
					delete childNode.data['$height'];
				}
				//hide tree mark
				if(childNode.type==TYPE_WU){
					$('#ul_'+childNode.id).hide("slow");
				}
			}
		});

		_st.select(node.id); 
		hideContextMenu();
		////m4HideToolbarNode();

	} else {
		//No podemos mostrar la foto cuando estamos expandiendo si alg�n nodo ha sido movido, porque se pintar�a tambi�n en la posici�n original que deja el Compute.
		_bShowPhotoForAfterComputingEfect = !_hasMoveNode;

		//mark tree wu
		$('#ul_'+node.id).show("slow");
		_st.config.levelsToShow = 1;
		_st.select(node.id);
		hideContextMenu();
		////m4HideToolbarNode();
	}

	if(bhasChildEmployeeVisible){
		//remove list show employees
		removeElementList(node.id);
		node.exployChild=false;
		node.selected=false;
		node.eachSubnode(function (childNode) {
			if(childNode.id!=node.id){
				 if(childNode.type==TYPE_SUBORDINATE){
					childNode.m4showEmployees = false;
					childNode.visited=false;
					childNode.exist=false;
					childNode.drawn=false;
					childNode.selected=false;
					childNode.exployChild=false;
					delete childNode.data['$width'];
					delete childNode.data['$height'];
				}
			}
		});

		_st.select(node.id);
		hideContextMenu();
		///m4HideToolbarNode();
	}else{ 
		_listNodesShowEmployees.push(node.id);
		//mark tree WU
		$('#ul_'+node.id).show("slow");
		
		 node.exployChild=true;
		//show employyes of node
		var type='';
		
		var groupEmployeesByPost = $jit.id('groupEmployeesByPost').checked ;
		if (groupEmployeesByPost) {// if employees is grouped
			var showAssistant= $jit.id('showAssistant').checked;
			if(showAssistant){
				type='groupedPostWithAssistant';
			}else{
				type='byPost';
			}
		}

		var groupEmployees = $jit.id('groupEmployees').checked;
		if (groupEmployees) {// if employees is grouped
			var showAssistant= $jit.id('showAssistant').checked;
			if(showAssistant){
				type='groupedWithAssistant';
			}else{
				type='withoutPost';
			}
		}

		var withoutgroupEmployees = $jit.id('withoutgroupEmployees').checked;  
		if(withoutgroupEmployees){
			type='onlyEmployees';
		}

		//show employees of type ='type' 
		showEmployeesOfOneNode(type,node);

		_st.config.levelsToShow = 1;
		_st.select(node.id);  
		
		//hide toolbar and context menu
		hideContextMenu();
		////m4HideToolbarNode(); 
	}
	
	_st.canvas.translate(-_st.canvas.translateOffsetX, -_st.canvas.translateOffsetY - _deltaCanvasY, false, true);

	UpdateExpandToolbar(node.divToolBar, node);	
}

// Define los eventos de la toolbar de despliegue de cada nodo
function configuraExpandToolbar(divExpandToolBar, node){
		var demandAll = divExpandToolBar.childNodes[0];
		var demandWU = divExpandToolBar.childNodes[1];
		var demandEmp = divExpandToolBar.childNodes[2];

		var hide=0;

		if (!_ESS_New_Organigram)
		{
			demandAll.style.display='none';

			//function to show/hide WU
			demandWU.onclick = function () {		
				demandWU_onclick(node);					
			}; 

			//function to show/hide employee and WU
			demandEmp.onclick = function () {	
				demandEmp_onclick(node);
			}; 

		} else {

			//function to show/hide WU and Employess always.
			demandAll.onclick = function () {
				demandAll_onclick(node);
			}; 
		}
}

//******************************************************************************************
////******************************************************************************************



/*
function savecanvas()
{
  document.getElementById('cssNormal').href=_AbsolutePathTemplate+'css/mouse_wait.css';

  //var canvas = document.getElementById('infovis-canvas');
  var canvas =_st.canvas.canvases[0].canvas;
  //var canvas = _st.canvas.getElement();
  //var ctx=_st.canvas.getCtx();
  //var canvas = _st.canvas.element;
  //var canvas = document.getElementById('mini_map');
   
  //window.open(canvas.toDataURL("image/jpeg"));
  //var imgData = canvas.toDataURL("image/jpeg", 1.0);


  //var imgData = canvas.toDataURL("image/png");
  var sizePaper = $jit.id('selectPaperSizeMenuToolBar').value;
  var dpi_x = document.getElementById('divDPI').offsetWidth;
  var dpi_y = document.getElementById('divDPI').offsetHeight;
      
  
  var doc = new jsPDF('l', 'mm', sizePaper); //[297, 210]);  //landscape
  //var doc = new jsPDF('l', 'mm', 'a3');   //[297, 210]);  //landscape
  var paperWidthMm = doc.internal.pageSize.width;    
  var paperHeightMm = doc.internal.pageSize.height;

  var paperWidthPixels = this.getPixelsByMm(paperWidthMm, dpi_x);
  var paperHeightPixels = this.getPixelsByMm(paperHeightMm, dpi_y);

  var posXBeginToDraw = (canvas.width - paperWidthPixels) / 2;

  //var ratioimg = canvas.height / canvas.width;
  //height = ratioimg * width;
  widthCanvasMm  = canvas.width * 25.4/ dpi_x;
  heightCanvasMm = canvas.height * 25.4/ dpi_y;
  
  var sizeElementX = parseInt(GetSizeElementXFromOrgChart());
  var sizeElementY = parseInt(GetSizeElementYFromOrgChart()) + 0.5;
  
  var organigramWidth = Math.abs(_TopLeftNodePosX) + _TopRightPlusWidthNodePosX
  
 

  //Vamos a hacer un barrido de izquierda a derecha (4 * 1)
  var NumPagesPerRow = 4;
  var NumRows = 1;

  var despX, despY;

  if (paperWidthPixels < canvas.width)
  {
  	despX = paperWidthPixels;
  } else {
  	despX = canvas.width;
  }

  if (paperHeightPixels < canvas.height)
  {
  	despY = paperHeightPixels;
  } else {
  	despY = canvas.height;
  }

  var y = 0;
  var x = despX;  
  var numpage = 1;
  
  // Me coloco en la p�gina 1 X 1
  MoveCanvas(canvas, x, y);

  //setTimeout(SaveSlotCanvas(doc, widthCanvasMm, heightCanvasMm, numpage),0);		 
  //numpage += 1;
  
  for (currentRow = 1; currentRow <= NumRows; currentRow ++)
  {	  
  	if (currentRow > 1) {
		y = -1 * ((currentRow - 1) * despY);		
		MoveCanvas(canvas, (NumPagesPerRow - 1) * despX, y);
	}

  	//setTimeout(SaveSlotCanvas(doc, widthCanvasMm, heightCanvasMm, numpage),100);
  	//setTimeout(function() {
    	SaveSlotCanvas(doc, widthCanvasMm, heightCanvasMm, numpage);
	//}, 10);

	for (currentColumn = 1; currentColumn < NumPagesPerRow; currentColumn ++)
	{	  	 	  	 
		numpage += 1;
		MoveCanvas(canvas, -despX, 0);
		//setTimeout(SaveSlotCanvas(doc, widthCanvasMm, heightCanvasMm, numpage),0);		 		 		 
		//setTimeout(function() {
    		SaveSlotCanvas(doc, widthCanvasMm, heightCanvasMm, numpage);
		//}, 10);
	}  
	
  }

  //Nos quedamos donde est�bamos  
  MoveCanvas(canvas, despX, despY);
  
	

   // Optional - set properties on the document
  doc.setProperties({
	title: 'Title',
	subject: 'This is the subject',		
	author: 'Meta4',
	keywords: 'generated, javascript, web 2.0, ajax',
	creator: 'DVB'
  });

  doc.save("download_1.pdf");

  // Add images
   /*
  x = desp;
  MoveCanvas(canvas, x, y);
  setTimeout(SaveSlotCanvas(doc, widthCanvasMm, heightCanvasMm, numpage),0);		 
  numpage += 1;
  var imgData = canvas.toDataURL("image/png");
  //SavePNG(canvas);

  x = -desp;
  MoveCanvas(canvas, x, y);
  var imgData2 = canvas.toDataURL("image/png");

  //SavePNG(canvas);
  */

  //
  //

  //document.getElementById('cssNormal').href=_AbsolutePathTemplate+'css/mouse.css';
//}*/


/*
function SavePNG(canvas)
{
 //var imageCanvas = new Image();
  //imageCanvas = Canvas2Image.convertToJPEG(canvas);
  //var imgData = imageCanvas.src;
  //Canvas2Image.saveAsPNG(canvas);  
   
  canvas.toBlob(function(blob) {
    saveAs(blob, "pretty image.png");
  });
  
}


function SaveSlotCanvas(doc, widthImage, heightImage, numPage)
{  

  var canvas =_st.canvas.canvases[0].canvas;
 
  if (numPage > 1)
  {
    	doc.addPage();
  }
  
  //IE se queja de png...
  //var imgData = canvas.toDataURL("image/png");
  //doc.addImage( imgData, 'png', 0, 0, widthImage, heightImage, undefined, "slow"); // Si a�adimos ancho y alto se autoreescala.. canvas.width, canvas.height);
  var imgData = canvas.toDataURL("image/jpeg");
  doc.addImage( imgData, 'jpeg', 0, 0, widthImage, heightImage, undefined, "slow"); // Si a�adimos ancho y alto se autoreescala.. canvas.width, canvas.height);
}

function MoveCanvas(canvas, translateX, translateY)
{
  //var ox = _st.canvas.translateOffsetX;
  //var oy = _st.canvas.translateOffsetY;
  var sx = _st.canvas.scaleOffsetX;
  var sy = _st.canvas.scaleOffsetY;
  
  _st.canvas.translate(translateX * 1/sx, translateY * 1/sy);
}

function getImageData (canvas) {
		var w = canvas.width,
			h = canvas.height;
		return canvas.getContext('2d').getImageData(0, 0, w, h);
}
*/
/*
function savecanvas()
{
  var canvas = document.getElementById('infovis-canvas');

    // create BytescoutPDF object instance
    var pdf = new BytescoutPDF();

    // set document properties: Title, subject, keywords, author name and creator name
    pdf.propertiesSet("Sample document title", "Sample subject", "keyword1, keyword 2, keyword3", "Document Author Name", "Document Creator Name");

    // set page size
    pdf.pageSetSize(BytescoutPDF.A4);

    // set page orientation (BytescoutPDF.PORTRAIT = portrait, BytescoutPDF.LANDSCAPE = landscape)
    pdf.pageSetOrientation(BytescoutPDF.PORTRAIT);

    // add new page
    pdf.pageAdd();

     // load image from canvas into BytescoutPDF
    pdf.imageLoadFromCanvas(canvas);

    // place this mage at given X, Y coordinates on the page
    pdf.imagePlace(20, 40);
}
*/

//
function disabledControlAgainstMovingManuallyEffect(value) {
	var groupEmployees = $jit.id('groupEmployees');
	var lblgroupEmployees = $jit.id('lblgroupEmployees');

	var groupEmployeesByPost = $jit.id('groupEmployeesByPost');
	var lblgroupEmployeesByPost = $jit.id('lblgroupEmployeesByPost');
	
	var withoutgroupEmployees = $jit.id('withoutgroupEmployees');
	var lblwithoutgroupEmployees = $jit.id('lblwithoutgroupEmployees');

	var groupVacancies = $jit.id('groupVacancies');
	var lblgroupVacancies = $jit.id('lblgroupVacancies');
	
	var withoutgroupVacancies = $jit.id('withoutgroupVacancies');
	var lblwithoutgroupVacancies = $jit.id('lblwithoutgroupVacancies');

	var levelsToShowSelect = $jit.id('selectLevel');
	var inputPerson = $jit.id('numberPerson');
	
	groupEmployees.disabled = value;	
	groupEmployeesByPost.disabled = value;	
	withoutgroupEmployees.disabled = value;	
	groupVacancies.disabled = value;
	withoutgroupVacancies.disabled = value;	

	if (value) {
		$("#lblgroupEmployees").addClass("disabled");
		$("#lblgroupEmployeesByPost").addClass("disabled");
		$("#lblwithoutgroupEmployees").addClass("disabled");
		$("#lblgroupVacancies").addClass("disabled");
		$("#lblwithoutgroupVacancies").addClass("disabled");
	} else {
		$("#lblgroupEmployees").removeClass("disabled");
		$("#lblgroupEmployeesByPost").removeClass("disabled");
		$("#lblwithoutgroupEmployees").removeClass("disabled");
		$("#lblgroupVacancies").removeClass("disabled");
		$("#lblwithoutgroupVacancies").removeClass("disabled");	
	}

	levelsToShowSelect.disabled = value;
	inputPerson.disabled = value;	
}
 
$(document).ready(function() {

	var moverNodos = $jit.id('moverNodos');
	$jit.util.addEvent(moverNodos, 'click', function () {
				
		if (moverNodos.checked == true)
		{
			//Ocultamos  zonas calientes
			/*$("div.box").css( "display", 'none');
			$("div.divTriangle").css( "display", 'none');
			$("div.labelId").css( "display", 'none');
			$("div#toolbarNode").css( "display", 'none');
*/
			_st.config.Navigation.panning = 'avoid nodes';
			
			_canMoveNodes = true;
			//_st.canvas.translate(0,0, false);

			// Desactivamos el bot�n de configuraci�n
			var buttonShowConfig = $jit.id("buttonShowConfig");
			buttonShowConfig.disabled = true;
			$("#buttonShowConfig").addClass("disabled");

		} else {			
			_st.config.Navigation.panning = true;	
			_canMoveNodes = false;

			//Visualizamos  zonas calientes
/*			$("div.box").css( "display", '');
			$("div.divTriangle").css( "display", '');
			$("div.labelId").css( "display", '');
			$("div#toolbarNode").css( "display", '');
*/			
			//_st.refresh();
			//_st.canvas.translate(0,0, false);

			/// Desactivamos el Deshacer			
			_snapShot = {};
			_unDo = [];

			var btnDeshacer = $jit.id('btnDeshacer');
			btnDeshacer.disabled = true;
			$("#btnDeshacer").addClass("disabled");
			///
			/// Activamos el bot�n de configuraci�n
			var buttonShowConfig = $jit.id("buttonShowConfig");
			buttonShowConfig.disabled = false;
			$("#buttonShowConfig").removeClass("disabled");			
			
			/// Otras opciones de configuraci�n
			// Si se han movido nodos manualmente, no permitimos estas opciones....
			if (_hasMoveNode) {
				disabledControlAgainstMovingManuallyEffect(true);
			}
		}
	});

	/*var arrastrarNodosHijos = $jit.id('arrastrarNodosHijos');
	$jit.util.addEvent(arrastrarNodosHijos, 'click', function () {

	});
	*/
	
	var escalado = $jit.id('escalado');
	$jit.util.addEvent(escalado, 'click', function () {

		if (escalado.checked == true)
		{
			_st.config.Navigation.zooming = M4_ZOOMING_FACTOR;

			deactivateHotControls(true);
		} else {
			//Restauramos tama? del canvas
			cleanScaling();

			_st.config.Navigation.zooming = false;
			deactivateHotControls(false);
		}
	});
	
	
 	var btnDeshacer = $jit.id('btnDeshacer');
 	btnDeshacer.disabled = true;
 	$("#btnDeshacer").addClass("disabled");

	$jit.util.addEvent(btnDeshacer, 'click', function () {		
		popSnapShot();
	});

	/*
	var btnGetPosiciones = $jit.id('btnGetPosiciones');
	$jit.util.addEvent(btnGetPosiciones, 'click', function () {
		_snapShotReposition = {};
		_snapShotReposition = getSnapShot(M4SNAPSHOT_MOVE_NODE);			
	});

	var btnReposiciona = $jit.id('btnReposiciona');	
	$jit.util.addEvent(btnReposiciona, 'click', function () {
		_snapShot = _snapShotReposition;
		reposicionaNodes();
	});
	*/
});




function getTransformFromStyle (element,property) {       
	if (element) {
		if (element.style) {
			var values = element.style.transform.split(")");
		    for (var key in values){
		        var val = values[key];              
		        var prop = val.split("(");          
		        if (prop[0].trim() == property)
		            return prop[1];
		    }
		}
	}
		    
    return false;
}

function getXValue (sValue) {
     sValue  = sValue.replace('(','');
     sValue  = sValue.replace(')','');
     var prop = sValue.split(',');
     return prop[0].trim();
}
  
function getYValue (sValue) {
     sValue  = sValue.replace('(','');
     sValue  = sValue.replace(')','');
     var prop = sValue.split(',');
     return prop[1].trim();
}

function numChildNodes(n) {

	var num = 0;
	
	n.eachSubnode(function(ch) {
	   	if (ch.drawn) {
	   		num += 1;
		}
	});

	return num;
}

function getChildNodeByIndex(n, index) {
	var i = 0;
	var subNode;
	n.eachSubnode(function(ch) {
	   	if (ch.drawn) {
	   		if (i === index) {
				subNode = ch;
			}

	   		i += 1;
		}
	});		

	return subNode;
}

/*
function addPositionSiblingNodeBeforeCompute(node, key) {
	_positionSibling[key] = {
		//id : node.id,
		// A�adimos la posici�n original una sola vez.		
		startPos : new Coordinate (node.pos.x, node.pos.y)
	}	
}

function addPositionSiblingNodeAfterCompute(node, key) {
	var s = _positionSibling[key].startPos;

	_positionSibling[key] = {   		
		// A�adimos la posici�n original una sola vez.		
		//id : node.id,
		startPos : s,
		endPos : new Coordinate (node.pos.x, node.pos.y)
	}	
}

function getFirstDrawnSibling(nodes) {
	for (i = 0; i < nodes.length; i++) {
		if (nodes[i].drawn) {
			return nodes[i];
		}
	}
}

function getNearestDrawnSibling(nodes, me) {
	var nearestNode = nodes[0];
	var nearestX = Infinity;
	var nearestY = Infinity;
	for (i = 0; i < nodes.length; i++) {
		if (nodes[i].drawn && nodes[i].id !== me.id) {
			if (Math.abs(nodes[i].pos.x - me.pos.x) < nearestX) {
				nearestX = Math.abs(nodes[i].pos.x - me.pos.x);
				nearestNode = nodes[i];
			}

			if (Math.abs(nodes[i].pos.y - me.pos.y) < nearestY) {
				nearestY = Math.abs(nodes[i].pos.y - me.pos.y);
				nearestNode = nodes[i];
			}

		}
	}
	return nearestNode;
}
*/

//Funciones auxiliares
function Factor (x, y) {
	this.X = x;
	this.Y = y;
}

function Coordinate (x, y) {
	this.X = x;
	this.Y = y;
}

function Dimension (w, h) {
	this.W  = w;
	this.H = h;
}


//////////////////////////////////////////////
// Posici�n solo de los nodos que se han movido manualmente
/////////////////////////////////////////////////


function addPositionNodeMoveManually(node, moved) {	

	var parents = node.getParents();
	var hasParents = (parents != null && parents.length > 0);
	var deltaParent_x = (hasParents ? node.pos.x - parents[0].pos.x : node.pos.x);
	var deltaParent_y = (hasParents ? node.pos.y - parents[0].pos.y : node.pos.y);    
    
    var factorMiddleParent_x = 1;
    var factorMiddleParent_y = 1;
    
    if (hasParents) {
		var halfWidth  = (node.Node.width  / 2);		
		var halfHeight = (node.Node.height / 2);	

		// El nodo est� a la derecha del padre
		if (node.pos.x > parents[0].pos.x) {
			factorMiddleParent_x = halfWidth / deltaParent_x;  //Factor distancia al medio del nodo padre (% / 100)
		} else {
			// El nodo est� a la izquierda del padre
			factorMiddleParent_x = halfWidth / (halfWidth - deltaParent_x );  //Factor distancia al medio del nodo padre (% / 100)					   	
		   	factorMiddleParent_x *= -1;		   	
		}		

		
		// El nodo est� a arriba del padre
		if (node.pos.y > parents[0].pos.y) {
			factorMiddleParent_y = halfHeight / deltaParent_y;  //Factor distancia al medio del nodo padre (% / 100)
		} else {
			// El nodo est� a la izquierda del padre
			factorMiddleParent_y = halfHeight / (halfHeight - deltaParent_y );  //Factor distancia al medio del nodo padre (% / 100)					   	
		   	factorMiddleParent_y *= -1;		   	
		}		

		//////factorMiddleParent_y = halfHeight / deltaParent_y;
   	}
	
	// Si nos han pasado que ya ha sidi movido manualmente
	var bMoved = false;
	if (arguments.length === 2) {
		bMoved = moved;
	}

	_positionNodesMovedManually[node.id] = {  		
		// A�adimos la posici�n original una sola vez.
		//posOriginal : new Coordinate (node.pos.x, node.pos.y),    	
		deltaParent : new Coordinate (deltaParent_x, deltaParent_y),
		fcToMiddleParent : new Factor (factorMiddleParent_x, factorMiddleParent_y),		
		dim : new Dimension(node.Node.width, node.Node.height),
		moved : bMoved
	}	

	// console.log("addPositionNodeMoveManually: " + JSON.stringify(_positionNodesMovedManually["WU_0001"]));
}

function setNodeMoveManuManually(node, value) {
	if (_positionNodesMovedManually[node.id] !== undefined) {
		
		var d = _positionNodesMovedManually[node.id].dim;
		var delta = _positionNodesMovedManually[node.id].deltaParent;
		var fcMiddleParent = _positionNodesMovedManually[node.id].fcToMiddleParent;		

		_positionNodesMovedManually[node.id] = {  				   	
	    		deltaParent : delta,
	    		fcToMiddleParent : fcMiddleParent,	    		
	    		dim : d,
	    		moved : value
		}
	}
}

function setTreeMoveManually (node, value) {
	
	setNodeMoveManuManually(node, value);	

	//(function subn(node) {
      node.eachSubnode(function(ch) {
        // Recolocamos hijos si no tenemos informaci�n de ellos
        //if (ch.drawn) { 								           
			setNodeMoveManuManually(ch, value);			          											        			
        	//subn(ch);
    	//}
      });
    //})(node);
}

function nodeMovedManually(node) {
	return (_positionNodesMovedManually[node.id] !== undefined);
}

function anyNodeMovedManually() {
	return (Object.keys(_positionNodesMovedManually).length > 0);
}
///////////////////////////////////////////////////
function moveNodesCheck() {
    var checked = document.getElementById("moverNodos").checked;
    if(checked == true){
    	//console.log("checkeado");
    	$("#arrastrarNodosHijos").removeClass("disabled");
    	$("#arrastrarNodosHijosLabel").removeClass("disableText");
    }else{
    	//console.log("descheckeado");
    	$("#arrastrarNodosHijos").addClass("disabled");
    	$("#arrastrarNodosHijosLabel").addClass("disableText");
    	document.getElementById("arrastrarNodosHijos").checked = false;
    }
}


/////////////////////////////////////////////////////////////////////////////////
/// SNAPSHOTS
/// 

function getSnapShot(type, node) {
	var snapShot = {};	

	if (type != M4SNAPSHOT_MOVE_NODE) {	
		snapShot['id'] = node.id;
	}

	//Estilos
	snapShot['type'] = type;
	snapShot['width'] = _st.graph.Node.width;
	snapShot['height'] = _st.graph.Node.height;
	snapShot['typeZoom'] = _typeZoom;
	//snapShot['selectLevel'] = $jit.id('selectLevel').value;
	//snapShot['numberPerson'] = $jit.id('numberPerson').value;
	//var clonLStyles = JSON.parse(JSON.stringify(listStyles)); //deep clone
	//snapShot['listStyles'] = clonLStyles; //clonamos el array para que no se asigne una referencia

	var posNodes = {};

	//Posiciones de los nodos
	_st.graph.eachNode(function (n) {
		var key = n.id;			

		if (n.drawn) {
			
			posNodes[key] = {
		    	x: n.pos.x,
		    	y: n.pos.y		    	
			}
		}
	});

	snapShot['posNodes'] =	posNodes;
	
	// console.log ("Posición WU_0001: " + JSON.stringify(posNodes["WU_0001"]));
	return snapShot;
}

// A�adimos un snapShot con las posiciones de los nodos
function pushSnapShotMoveNode() {
	
	type = M4SNAPSHOT_MOVE_NODE;	

	_unDo.push(getSnapShot(type));
	var btnDeshacer = $jit.id('btnDeshacer');
	if (_unDo.length > 0) {
		btnDeshacer.disabled = false;
		 $("#btnDeshacer").removeClass("disabled");
	}
}

// A�adimos un snapShot con el nodo que se ha contraido/expandido
function pushSnapShotExpandContractNode(type, node) {	
	//Cuando a�adimos un snapshot de este tipo, antes se ha colado uno de movimiento de nodos que no es necesario... por la propia gesti�n del drag&drop de infovis.
	//Entra antes el evento drag que el onclidk del bont�n de expansi�n/contracci�n de nodos
	_unDo.pop();

	// A�adimos el nuevo snapshot
	_unDo.push(getSnapShot(type, node));

	var btnDeshacer = $jit.id('btnDeshacer');
	if (_unDo.length > 0) {
		btnDeshacer.disabled = false;
		$("#btnDeshacer").removeClass("disabled");
	}
}

// Sacamos del array snapshots el ?ltimo y lo utilizamos para reposicionarnos
function popSnapShot() {	
	
	var btnDeshacer = $jit.id('btnDeshacer');
	var old_cursor = $jit.id('infovis').style.cursor ;

	//Si no ejecutamos el cambio del cursor as?cronamente, no llega verse el cambio del cursor en pantalla.
	//setTimeout(function () {		
	//	$jit.id('infovis').style.cursor = 'wait';		
	//	//document.body.style.cursor = 'wait';
	//	//btnDeshacer.style.cursor = 'wait';	
	//}, 100);
	

	//Ejetamos 200ms despu? de la funci? anterior para que d?tiempo a que se cambie el cursor
 	//setTimeout(function () {
        _snapShot = _unDo.pop();	

		if (_snapShot) {			
			//console.time("reposicionaNodes"); 
			reposicionaNodes();
			//console.timeEnd("reposicionaNodes"); 
		}

		if (_unDo.length === 0) {
			
			btnDeshacer.disabled = true;
			$("#btnDeshacer").addClass("disabled");

			// Si hemos deshecho todo, las posiciones manuales que quedaran tambi�n las perdemos.
			_positionNodesMovedManually = {};
		}

	//	$jit.id('infovis').style.cursor = old_cursor;
		//document.body.style.cursor = 'default';
		//btnDeshacer.style.cursor = 'default';
    //}, 300);	
}

//Reposici? de los nodos
function reposicionaNodes() {	
	_bRepositionSnapShot = true;	
	_st.refresh();
	_bRepositionSnapShot = false;	
}

//Deshacer con el Ctrl+Z
$(document).keydown(function(e){	
    var evtobj = window.event? event : e
    if (evtobj.keyCode == 90 && evtobj.ctrlKey)  {
      	if (_unDo.length > 0) {
      		popSnapShot();
      	}
    };	     
});

/*
function delta(y) {
	if (_st.config.Navigation.zooming != false) {
      	
      	var sectionScale = '';
      	var sScale = getTransformFromStyle($("div.box")[0], "scale");
      	if (sScale) {
      		var xScale = getXValue(sScale);
      		var yScale = getYValue(sScale);
      		sectionScale = 'scale(' + xScale + ', ' + yScale + ') ';
      	} 

      	var scaleTranslate = {'transform' : '' + sectionScale +  'translate(' + '0px,' + y +'px)'};
      	

      	//Ejemplo de escalado y desplazado simult�neo.. hay que hacerlo en una �nica instrucci�n
      	//$("div.box").css({transform: 'scale(0.90, 0.90) translate(-3px, 3px)'})
      	//$("div.box").css("transform" , "scale(0.95, 0.95) translate(3px, 3px)")
      	$("div.box").css(scaleTranslate);
      	$("div.divTriangle").css(scaleTranslate );
      	$("div#toolbarNode").css(scaleTranslate );
      	//$("div.labelId").css(scaleTranslate ); // Este no lo aplicamos porque es un inner-div y a efectos pr?ticos aplicar? el translate dos veces...
      	

      	console.log(new Date().toISOString() + ' [deltaY]: ' + JSON.stringify(scaleTranslate));
	}
}
*/

///////////////////////////
//DEBUG
function structureTree() {
	var n = _st.graph.getNode(_st.root);
	console.log(n.id + " - X:" + n.pos.x +  " Y: " + n.pos.y );
	(function subn(n, level) {
		
		level += 1;
	    n.eachSubnode(function(ch) {	
	    	if (ch.drawn) {
	        	console.log("\t".repeat(level) + ch.id + " - X:" + ch.pos.x +  " Y: " + ch.pos.y );

	        	subn(ch, level);
	    	}
        });
	})(_st.graph.getNode(_st.root), 0);
}
///////////////////////////////////////////////////////
///


/// LIENZO


// Suscripción eventos para el WYSISYG si está activada la funcionalidad
$(document).ready(function() {	

	if (_propertyBag.activated_WysIwyg_print) {

		var verLienzo = $jit.id('verLienzo');
		$jit.util.addEvent(verLienzo, 'click', function () {
			
			if (verLienzo.checked === true)
			{
				$("#fijarLienzo").removeClass("disabled");
	    		$("#fijarLienzoLabel").removeClass("disableText");

	    		//Activamos autocomplete
	    		$("#m4-titleBar-search").addClass("disabled");
				meta4.orgdyn.lienzo.paintLienzo(_st);
			} else {
				$("#fijarLienzo").addClass("disabled");
	    		$("#fijarLienzoLabel").addClass("disableText");	    		
	    		document.getElementById("fijarLienzo").checked = false;

	    		//Activamos autocomplete
	    		$("#m4-titleBar-search").removeClass("disabled");

				//Borramos el canvas del lienzo
				_st.canvas.canvases[1].clear();
			}
		});

		var selectLienzoPaperSize = $jit.id('selectLienzoPaperSize');
		$jit.util.addEvent(selectLienzoPaperSize, 'change', function () {
			meta4.orgdyn.lienzo.setPaperLienzo(selectLienzoPaperSize.value);
			meta4.orgdyn.lienzo.paintLienzo(_st);
			updateLblVerLienzo();
		});

	    var printLandscapeLienzo = $jit.id('printLandscapeLienzo');
		$jit.util.addEvent(printLandscapeLienzo, 'click', function () {
			meta4.orgdyn.lienzo.setPaperOrientation(m4_landscape);
			meta4.orgdyn.lienzo.paintLienzo(_st);
			updateLblVerLienzo();
		});

	    var printPortraitLienzo = $jit.id('printPortraitLienzo');
		$jit.util.addEvent(printPortraitLienzo, 'click', function () {
			meta4.orgdyn.lienzo.setPaperOrientation(m4_portrait);		
			meta4.orgdyn.lienzo.paintLienzo(_st);
			updateLblVerLienzo();
		});

		var rowsPagesLienzo = $jit.id('rowsPagesLienzo');
		$jit.util.addEvent(rowsPagesLienzo, 'change', function () {		
			
			var number=rowsPagesLienzo.value;
			var numeros="0123456789";
			var num=true;
			for(var i=0; i<number.length && num==true; i++){
				if (numeros.indexOf(number.charAt(i),0)==-1){
					num=false;
				}
			}
			if(number.substring(0,1)=='0'){
				num=false;
			}

			if(num==true){
				if (rowsPagesLienzo.value > meta4.orgdyn.lienzo.getMaxLienzoDim().rows) {
					rowsPagesLienzo.value = meta4.orgdyn.lienzo.getLienzoDim().rows;
					updateLblVerLienzo();
					return;
				}
				
				meta4.orgdyn.lienzo.setLienzoRows(rowsPagesLienzo.value);
				meta4.orgdyn.lienzo.paintLienzo(_st);
				
			}else{
				rowsPagesLienzo.value= meta4.orgdyn.lienzo.getLienzoDim().rows;
			}

			updateLblVerLienzo();

		});

		var colsPagesLienzo = $jit.id('colsPagesLienzo');
		$jit.util.addEvent(colsPagesLienzo, 'change', function () {

			var number=colsPagesLienzo.value;
			var numeros="0123456789";
			var num=true;
			for(var i=0; i<number.length && num==true; i++){
				if (numeros.indexOf(number.charAt(i),0)==-1){
					num=false;
				}
			}
			if(number.substring(0,1)=='0'){
				num=false;
			}

			if(num==true){
				if (colsPagesLienzo.value > meta4.orgdyn.lienzo.getMaxLienzoDim().cols) {
					colsPagesLienzo.value = meta4.orgdyn.lienzo.getLienzoDim().cols;
					updateLblVerLienzo();
					return;
				}
				
				meta4.orgdyn.lienzo.setLienzoCols(colsPagesLienzo.value);
				meta4.orgdyn.lienzo.paintLienzo(_st);
				
			}else{
				colsPagesLienzo.value= meta4.orgdyn.lienzo.getLienzoDim().cols;
			}

			updateLblVerLienzo();

		});	
	}
});

/** 
 * Function to print orgchart to Java Pdf with nodes per pages
*/
function printOrgChartLienzo() {
	var positionNodesPerPaged = meta4.orgdyn.lienzo.getPosNodesPerPage(_st, _positionNodesMovedManually);

	if (!meta4.orgdyn.lienzo.verifyAllNodesFitInLienzo(positionNodesPerPaged, _st)) {
		alert('You must fit all nodes into the print zone.');	// PENDIENTE TRADUCIR
		return;
	}

	if (!meta4.orgdyn.lienzo.verifyAllNodesFitInUniquePage(positionNodesPerPaged, _st)) {
		alert('You must fit all nodes into a unique page.');	// PENDIENTE TRADUCIR
		return;
	}

	var editablePDF = false;
	var typePrint = 'printComplete#0#horizontal#' + meta4.orgdyn.lienzo.getPaperOrientation() + '#'+ editablePDF +'#';

	var nodeRoot = _st.graph.nodes[_st.root];
	var parent="";
	if(_configStyle[3]!="3"){
		parent = nodeRoot.data['WUID'];
	}else{//position orgchart
		parent = nodeRoot.data['VacancyID'];
	}
	
	//size font
	var sizeFontHead = "0"; //Din�mica por defecto siempre.... $jit.id('selectFontHead').value;
	var sizeFontBody = "0"; //Din�mica por defecto siempre.... $jit.id('selectFontBody').value;
		
	var serialize = '$Arg1=' + typePrint
		+ serializeStyle('print',_typeZoom) + '$Arg5=' + serializeNodesToPrint(true) + '$Arg6=' + typesGrouped()
		+ '$Arg7=' + parent+ '$Arg8=' + _numberPersonTogroup+ '$Arg9=' + sizeFontHead+ '$Arg10=' + sizeFontBody + '$Arg11=' + meta4.orgdyn.lienzo.getPaperLienzo() + '$Arg12=' + JSON.stringify(meta4.orgdyn.lienzo.getPosNodesPerPageForPrint(_st, positionNodesPerPaged));

	if(_propertyBag.essMode==false) {
		sentToAnchor('PrintOrgChart', serialize);		
	}else{
		printESS(serialize);
	}
	
}

// Actualizamos la etiqueta "Mostrar páginas de impresión" de la check de la toolbar principal
// Le añadimos el papel, la orientación y la matríz de filas y columnas
function updateLblVerLienzo() {
	var lblVerLienzo = $jit.id('verLienzoLabel');
	var lblVerLienzoTooltip = $jit.id('verLienzoToolTip');
	
	if (_lblVerLienzo_textBase === undefined || _lblVerLienzo_textBase === null) {
		_lblVerLienzo_textBase = lblVerLienzo.innerText;
	}

	if (_lblVerLienzoTooltip_textBase === undefined || _lblVerLienzoTooltip_textBase === null) {
		_lblVerLienzoTooltip_textBase = lblVerLienzoTooltip.title;
	}

	var paperLienzo = meta4.orgdyn.lienzo.getPaperLienzo();
	var paperOrientation;
	if (meta4.orgdyn.lienzo.getPaperOrientation() === m4_landscape) {		
		paperOrientation = $jit.id('lblPorTrait').innerText;
	} else {
		paperOrientation = $jit.id('lblLandscape').innerText;
	}

	var matrix = meta4.orgdyn.lienzo.getLienzoDim().rows + "x" + meta4.orgdyn.lienzo.getLienzoDim().cols;
	var suffix = " (" + paperLienzo + " - " + paperOrientation +  " - " + matrix +  ")";
	
	lblVerLienzo.innerText = _lblVerLienzo_textBase +  " " + suffix;
	lblVerLienzoTooltip.title = _lblVerLienzoTooltip_textBase + " " + suffix; 
}

///
		
	
//******************************************************************************************
//******************************************************************************************
///
/** Type orientation page*/
var m4_landscape = 90;
var m4_portrait = 0;

/** Type of shape to element */
var RECTANGLE = 0;
var CIRCLE = 1;
var ELLIPSE = 2;

/** Colors M4 */
var M4_BLACK = 0;
var M4_RED = 1;
var M4_BLUE = 2;
var M4_GREEN = 3;
var M4_ORANGE = 4;
var M4_PINK = 5;
var M4_GRAY = 6;

/** nanem style default */
var NAME_TYPE_DEFAULT = "styleDefault";

/** types of attribute of style */
var ATTR_COLOR = 0;
var ATTR_COLOR_LINE = 1;
var ATTR_SHAPE = 2;
var ATTR_BORDER_WIDTH = 3;
var ATTR_LINE_WIDTH = 4;
var ATTR_TYPE_LYNE = 5;
var ATTR_COLOR_BORDER = 6;
var ATTR_COLOR_LINE_ASSOCIATED = 7;
var ATTR_WIDTH_BOX = 8;
var ATTR_HEIGHT_BOX = 9;
var ATTR_GROUPING_BOX = 10;
var ATTR_SHOW_BOX = 11;

var M4_RECTANGLE = 0;
var M4_CIRCLE = 1;
var M4_ELLIPSE = 2;

/** Type */
var TYPE_WU = 2;
var TYPE_ASSISTANT = 4;
var TYPE_SUBORDINATE = 0;
var TYPE_VACANCY = 3;
var TYPE_FUNTCIONAL_DEPENDENCY = 1;

/** Type print*/
var TYPE_ZOOM_NORMAL=0;
//var TYPE_ZOOM_PORTRAIT = 1
var TYPE_ZOOM_HEAD_PHOTO=1;
var TYPE_ZOOM_PHOTO=2;
var TYPE_ZOOM_NOTHING=3;

/** STYLE TYPES*/
var STYLE_TYPE_EMPLEADOS = "Empleados";
var STYLE_TYPE_ASISTENTES = "Asistentes";
var STYLE_TYPE_DEPENFUNC = "Dependencias funcionales";
var STYLE_TYPE_VACANTES = "Vacantes";
var STYLE_TYPE_UNIDORG = "Unidades organizativas";
var STYLE_TYPE_POSITION = "Posiciones";

// Idenfiers of the Dynamic Option Menus
var _DynamicCtxMnuOpt = [];

// Callbackfuncs of the Dynamic Option Menus
var _DynamicCtxMnuOpt_Func = [];

// True for Arabian language
var _isRtlLanguaje;
var M4_FONT_LABEL ="'Open Sans', Verdana, Arial, sans-serif";
var M4_FONT_SIZE = "12";
var M4_MARGIN_X = 10;
var M4_STEP_Y = 20;

var M4_SIZE_IMAGEACTION = 16;
var M4_SIZE_FOTO_NORMALZOOM = 90;

// True si la ejecuci�n es desde el nuevo organigrama
var _ESS_New_Organigram = false;

// Default JSP subdirectory path
var _PathTechJSP = "/sse_g0/";
var _bShowPhotoWhileLoadingOrgChart = false;
var _bShowPhotoForAfterComputingEfect = true;
var _TopLeftNodePosX = 0;     		//Posici�n X del nodo que est� m�s a la izquierda
var _TopRightPlusWidthNodePosX = 0; //Posici�n X del nodo que est� m�s a la derecha m�s su ancho

//var _countImages = 0;
var _bRepositionSnapShot = false;
var _snapShot = {};						//Objeto con las posiciones tomadas de los nodos
var _snapShotReposition = {};						//Objeto con las posiciones tomadas de los nodos
var _snapShotRepositionStyle = [];
var _positionNodesMovedManually = {}; 	//Solo contiene las posiciones de los nodos que vamos moviendo manualmente 
//var _positionSibling = {}; //Posicion de un hermano antes de computar para buscar el vector de movimiento
var _canMoveNodes = false;   		//Habilitar o no el movimiento de los nodos con el rat�n.
var _hasMoveNode = false;			//En el momento que hayasmos movido un nodo se activa y condicionar� el compute en determinadas circunstancias... sino perder�amos las posiciones movidas de los nodos
var _canCompute = true;				//Gestiona que se pueda computerizar las posociones de los nodos o no

// Gesti�n "Deshacer" acciones.... De momento s�lo se controla las siguientes acciones.
var M4SNAPSHOT_MOVE_NODE = 'MOVE_NODE';
var M4SNAPSHOT_INITIAL_POSITION_NODE = 'MOVE_NODE_INITIAL';  //Especial para la carga inicial... donde el �rbol despliegua un n�mero de nodos que por lo general suele ser menor que los nodos a posicionar.
var M4SNAPSHOT_EXPAND_WU = 'EXPAND_WU';							//Se puls?exapandir WU.
var M4SNAPSHOT_CONTRACT_WU = 'CONTRACT_WU';						//Se puls?contraer WU.
var M4SNAPSHOT_EXPAND_ONLY_EMP = 'EXPAND_ONLY_EMP';				//Se puls?expandir EMP. Deber? tener desplegadas las WU, luego s?o es necesario desplegar EMP.
var M4SNAPSHOT_CONTRACT_ONLY_EMP = 'CONTRACT_ONLY_EMP';			//Se puls?contraer EMP. Deber? tener desplegadas las WU, luego s?o es necesario contraer EMP.
var M4SNAPSHOT_EXPAND_EMPWU = 'EXPAND_EMPWU'; 					//Se puls?expandir EMP sin tener desplado nada. La primera vez que se expanden EMP tambien se expanden WU.
var M4SNAPSHOT_CONTRACT_EMPWU = 'CONTRACT_EMPWU'; 				//Cuando ocultamos WU, si hay mostrados EMP tambi? se ocultan.
var M4SNAPSHOT_EXPAND_CONTRACT_ALL = 'EXPAND_CONTRACT_ALL';		// Variaci? para ESS from MyPeople... 

var _unDo = [];						//Objeto con diferentes snapshots de las posiciones de los nodos..
var _bExpandingContractingNodes = false  // Controla reentradas en el OnAfterCompute cuando estamos contrayendo/expandiendo nodos
//----------------------------------

var _jsonPositionOriginal;     //Copia del Json de las posiciones que llegen en el HTML inicialmente
var _initialTypeZoom;		   //_typeZoom original
var _initial_style_width;
var	_initial_style_height;
var _initialListStyles;

var _bSavingESSDefaultStyle = false;	//En ESS hay que diferenciar si estamos grabando el Estilo por defecto para el Usuario o para la WU actual.
var _bSavedESSPositionStyle = false;		//En Ess, para saber si se llegó a grabar el estilo con las posiciones... y no borrarlo..
var _bControlSizeX = false;
var _bControlSizeY = false;
var _ACTIVATE_HOT_ZONES = false;			//depuramos escalado
var _DEBUG_FF = false;					//Activa modo debug. Soluciona carga de fotos en FF e local.
var positionNodes = []; 			//Se redefinir� este array en el HTML si nos llegan las posiciones de los nodos
var _countZoomScale = 0; 
var M4_ZOOMING_FACTOR = 30;			
var M4_INIT_LIENZO_FUNC = "@@ACTIVATED_WYSIWYG@@";
var _serializedPositions;
var _lblVerLienzo_textBase; 		//"Mostrar página de impresión"
var _lblVerLienzoTooltip_textBase;  //"Mostrar página de impresión de fondo"