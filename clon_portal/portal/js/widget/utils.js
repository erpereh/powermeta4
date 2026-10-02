/*
 @(#)FileVersion: 811.000.025
 @(#)FileDescription: 
 @(#)CompanyName: Meta4 Spain, S.A.
 @(#)LegalCopyright: (c)2014
 @(#)ProductName: PeopleNet KSystem
 @(#)ProductVersion: 8.1SP1
 @(#)InternalName: utils.js
 @(#)Date: 01/01/2014
 */

/*global $, $$, Element, Asset*/

//@ sourceURL=meta4.widget.utils.js

var meta4 = meta4 || {};

meta4.widget = meta4.widget || {};

/**
 *This object is only to create common functions to other object that will inherit
 */
meta4.widget.utils = ( function() {'use strict';

		var M4DataType = {
			Null : "0",
			FixedString : "1",
			VariableString : "2",
			Long : "3",
			Date : "4",
			DateTime : "5",
			Number : "6",
			Variant : "7",
			Currency : "8",
			NumberVariant : "9",
			Blob : "10",
			BinaryString : "11",
			Hour : "12",
			UnicodeVariableString : "13",
			UnicodeLong : "14",
			UnicodeVariant : "15",
			UnicodeFixedString : "16",
			HourInterval : "17"
		};

		var _loadFile = function(pathFile, onLoad) {

			var i, max;
			var fileReference;

			var isCss = pathFile.match(/.+\.css$/i);
			var isJs = pathFile.match(/.+\.js$/i);

			if (isJs) {//if filename is a external JavaScript file

				//Check js is alredy in the dom
				if ($$("script[src='" + pathFile + "']").length) {

					if (onLoad) {
						onLoad();
					}
					return;
				}

				fileReference = Asset.javascript(pathFile, {
					onLoad : onLoad
				});

				return 0;

			}

			if (isCss) {//if filename is an external CSS file

				//Check css is alredy in the dom
				if ($$("link[href='" + pathFile + "']").length) {
					return;
				}

				fileReference = document.createElement("link");

				fileReference.rel = 'stylesheet';
				fileReference.href = pathFile;

				//fileReference.setAttribute("rel", "stylesheet");
				//fileReference.setAttribute("href", pathFile);
			}

			if ( typeof fileReference !== "undefined") {
				document.getElementsByTagName("head")[0].appendChild(fileReference);
			}

		};

		function _getWidthWithoutRounded(element) {
			var percentage = convertPxToPercentage(element);
			return percentage;
		}

		function convertPxToPercentage(element) {

			var widthString = element.getStyle('width');

			if (widthString.substring(widthString.length - 2, widthString.length) == 'px') {
				var width = parseFloat(element.getStyle('width'));
				var widthParent = parseFloat(element.parentNode.getStyle('width'));
				return (width / widthParent) * 100;
			} else {
				return parseFloat(widthString);
			}
		}

		function moveDivRounded(divHandler, incrHandler, divAux, incrAux) {

			if (navigator.appName === 'Microsoft Internet Explorer') {
				var sizeTotal = Math.round(meta4.widget.utils.getWidthWithoutRounded(divHandler) + meta4.widget.utils.getWidthWithoutRounded(divAux));
				var sizeHandler = Math.round(meta4.widget.utils.getWidthWithoutRounded(divHandler) + incrHandler);
				var sizeAux = Math.round(meta4.widget.utils.getWidthWithoutRounded(divAux) + incrAux);
			} else {
				var sizeTotal = meta4.widget.utils.getWidthWithoutRounded(divHandler) + meta4.widget.utils.getWidthWithoutRounded(divAux);
				var sizeHandler = meta4.widget.utils.getWidthWithoutRounded(divHandler) + incrHandler;
				var sizeAux = meta4.widget.utils.getWidthWithoutRounded(divAux) + incrAux;
			}

			if (sizeTotal != sizeHandler + sizeAux) {
				var incr = sizeTotal - (sizeHandler + sizeAux);
				meta4.widget.utils.setWidthWithoutRounded(divHandler, sizeHandler + incr);
				meta4.widget.utils.setWidthWithoutRounded(divAux, sizeAux);
			} else {
				meta4.widget.utils.setWidthWithoutRounded(divHandler, sizeHandler);
				meta4.widget.utils.setWidthWithoutRounded(divAux, sizeAux);
			}
		}

		function _setWidthWithoutRounded(element, width) {
			element.style.width = width + '%';
		}

		/**
		 *Function to create div to wrap popup
		 * @param div: div to wrap
		 */
		function _makePopUp(div,eventClosed) {
			//div container
			var divContainer = new Element('div', {
				'class' : 'containertPopUp',
				'id' : 'containerPopUp',
				'styles' : {
					'opacity' : '0'
				}
			});

			var divMove = new Element('div', {
				'styles' : {
					'position' : 'relative',
					'height' : '100%',
					'width' : '100%'
				}
			});
			divContainer.grab(divMove);

			var imgClose = new Element('img', {
				'src' : meta4.widget.icons.close_panel_dark,
				'class' : 'imgAction',
				styles : {
					'float' : 'right',
					'margin' : '4px'
				}
			});

			div.grab(imgClose, 'top');

			divMove.grab(div);

			$(document.body).grab(divContainer);

			var myFx = new Fx.Elements(divContainer, {
				onComplete : function(div) {
					//set focus
					var elements = div.getElements('*');
					var i;
					var found = false;
					for ( i = 0; i < elements.length && found == false; i++) {
						if ((elements[i].nodeName == 'INPUT' || elements[i].nodeName == 'SELECT' || elements[i].nodeName == 'TEXTAREA') && elements[i].disabled != true) {
							found = true;
							elements[i].focus();
						}
					}
				}
			}).start({
				0 : {
					opacity : [0, 1]
				},
				1 : {
					opacity : [1, 0]
				}
			});

			myFx.start();

			new Drag.Move(div, {
				'onBeforeStart' : function() {
					//lost focus
					var activeElement = document.activeElement;

					//HTMLElement crash on ie8
					//only fire event when the click is not on input bug 0260037
					if (m4IsElement(activeElement)) {

						if (document.activeElement.hasBlur() === true) {
							document.activeElement.blur();
						}
					}
				},
				'container' : divMove,
				'preventDefault' : true
			});

			imgClose.addEvent('click', function(object) {
				if (Browser.ie7 || Browser.ie8) {
					//destroy popup
					divContainer.destroy();
				} else {
					divContainer.set("tween", {
						onComplete : function() {
							//destroy popup
							divContainer.destroy();
						}
					}).fade('toggle');
				}
				if(eventClosed !== undefined){
					document.fireEvent(eventClosed);	
				}				
			});

			div.destroyPopUp = function() {
				divContainer.destroy();
			};

			return divContainer;
		}

		/**
		 *  Return a color from a scale level, in hex format
		 * @param level: level of the scale.
		 * @param levelsNumber: Number of levels in the scale.
		 */
		function _getScoreColor(level, levelsNumber) {

			function interpolate(start, end, steps, value) {
				var s = start, e = end, finalColor = s + (((e - s) / steps) * value);

				return Math.floor(finalColor);
			}

			var ghostDiv = new Element('div', {
				'class' : 'startColor'
			});

			$(document.body).adopt(ghostDiv);

			//start color in hsv mode
			var startColor = ghostDiv.getStyle('backgroundColor').hexToRgb(true).rgbToHsb();

			ghostDiv.removeClass('startColor');
			ghostDiv.addClass('endColor');

			//end color in hsv mode
			var endColor = ghostDiv.getStyle('backgroundColor').hexToRgb(true).rgbToHsb();

			ghostDiv.dispose();

			var h = interpolate(startColor[0], endColor[0], levelsNumber, level);
			var s = interpolate(startColor[1], endColor[1], levelsNumber, level);
			var v = interpolate(startColor[2], endColor[2], levelsNumber, level);

			var hsb = [h, s, v];

			return hsb.hsbToRgb().rgbToHex();
		}

		function _m4confirm(message, callback) {

			//div containertdivButton
			var div = new Element('div', {
				'class' : 'div-m4confirm'
			});
			//div to title
			var divTitle = new Element('div', {
				'class' : 'div-m4confirm-title'
			});
			var labelTitle = new Element('label', {
				'text' : meta4.widget.translate.getTranslate('_label_confirmWindowTitle')
			});
			divTitle.grab(labelTitle);

			//div to msg
			var divMsg = new Element('div', {
				'class' : 'div-m4confirm-msg'
			});
			var labelMsg = new Element('label', {
				'text' : message
			});
			divMsg.grab(labelMsg);

			//div to button
			var divButton = new Element('div', {
				'class' : 'div-m4confirm-button'
			});

			var buttonConfirm = new Element('button', {
				'class' : 'div-m4confirm-button-confirm',
				'text' : meta4.widget.translate.getTranslate('_gen_buttonConfirm'),
				'events' : {
					'click' : function() {
						div.set("tween", {
							onComplete : function(object) {
								//destroy popup
								div.destroyPopUp();
							}
						}).fade('toggle');
						callback(true);
					}
				}
			});

			var buttonCancel = new Element('button', {
				'class' : 'div-m4confirm-button-confirm',
				'text' : meta4.widget.translate.getTranslate('_gen_buttonCancel'),
				'events' : {
					'click' : function(object) {
						div.set("tween", {
							onComplete : function() {
								//destroy popup
								div.destroyPopUp();
							}
						}).fade('toggle');
						callback(false);
					}
				}
			});

			divButton.adopt(buttonConfirm, buttonCancel);

			div.adopt(divTitle, divMsg, divButton);

			_makePopUp(div);
		}

		function _darkenColor(color, cant) {
			//voy a extraer las tres partes del color
			var rojo = color.substr(1, 2);
			var verd = color.substr(3, 2);
			var azul = color.substr(5, 2);

			//voy a convertir a enteros los string, que tengo en hexadecimal
			var introjo = parseInt(rojo, 16);
			var intverd = parseInt(verd, 16);
			var intazul = parseInt(azul, 16);

			//ahora verifico que no quede como negativo y resto
			if (introjo - cant >= 0)
				introjo = introjo - cant;
			if (intverd - cant >= 0)
				intverd = intverd - cant;
			if (intazul - cant >= 0)
				intazul = intazul - cant;

			//voy a convertir a hexadecimal, lo que tengo en enteros
			rojo = introjo.toString(16);
			verd = intverd.toString(16);
			azul = intazul.toString(16);

			//voy a validar que los string hexadecimales tengan dos caracteres
			if (rojo.length < 2)
				rojo = "0" + rojo;
			if (verd.length < 2)
				verd = "0" + verd;
			if (azul.length < 2)
				azul = "0" + azul;

			//voy a construir el color hexadecimal
			var oscuridad = "#" + rojo + verd + azul;

			//la función devuelve el valor del color hexadecimal resultante
			return oscuridad;
		}

		function _makeSplitHorizontal(divHandler, divAux, limitX, buttonCollapse) {

			if (divHandler.getChildren('.m4-resizablePanel').length > 0) {
				divHandler.getChildren('.m4-resizablePanel').destroy();
			}

			//get dirCollapse
			var dirCollapse = 'left';

			var positionHandler;

			if (divHandler.getOffsets().x > divAux.getOffsets().x) {
				dirCollapse = 'left';
				positionHandler = '-13px';
			} else {
				dirCollapse = 'right';
			}

			var srcImg;
			var stylesHandler;
			var classHandler;

			if (dirCollapse == 'left') {
				srcImg = meta4.widget.icons.unfold;
				stylesHandler = {
					'left' : '-13px'
				};
				classHandler = 'm4-resizablePanel m4-resizablePanel-left';
			} else {
				srcImg = meta4.widget.icons.fold;
				stylesHandler = {
					'right' : '-14px'
				};
				classHandler = 'm4-resizablePanel m4-resizablePanel-right';

			}

			//set position to divHandler
			divHandler.setStyle('position', 'relative');

			//create handler
			var handler = new Element('div', {
				'styles' : stylesHandler,
				'class' : classHandler
			});

			var lastSizeHandler = null;
			/** 1 collapsed 0 extended */

			var drag;

			if (buttonCollapse) {

				var img = new Element('img', {
					'src' : srcImg,
					'class' : 'imgPlegar',
					'events' : {
						'click' : function(object) {

							//store last size handler
							if (divHandler.getStyle('width') != '0px') {
								lastSizeHandler = meta4.widget.utils.getWidthWithoutRounded(divHandler);
							}

							//hide div inside divhandler
							var divs = divHandler.getChildren('div');
							var i;
							for ( i = 0; i < divs.length; i++) {
								if (!divs[i].hasClass('m4-resizablePanel')) {
									if (divHandler.getStyle('width') != '0px') {
										divs[i].setStyle('display', 'none');
									} else {
										divs[i].setStyle('display', '');
									}
								}
							}

							//change size divhandler and div aux
							if (divHandler.getStyle('width') != '0px') {
								divHandler.setStyle('width', '0px');

								moveDivRounded(divHandler, -lastSizeHandler, divAux, lastSizeHandler);
								/*IE9*/

								//set div aux
								//meta4.widget.utils.setWidthWithoutRounded(divAux, meta4.widget.utils.getWidthWithoutRounded(divAux) + lastSizeHandler);

								//detach drag
								drag.detach();
								drag.element.style.cursor = 'default';

								//change icon
								if (dirCollapse == 'left') {
									object.target.src = meta4.widget.icons.fold;
								} else {
									object.target.src = meta4.widget.icons.unfold;
								}

							} else {

								moveDivRounded(divHandler, lastSizeHandler, divAux, -lastSizeHandler);
								/*IE9*/

								//set div handler
								//meta4.widget.utils.setWidthWithoutRounded(divHandler, lastSizeHandler);

								//set div aux
								//meta4.widget.utils.setWidthWithoutRounded(divAux, meta4.widget.utils.getWidthWithoutRounded(divAux) - lastSizeHandler);

								drag.attach();
								drag.element.style.cursor = 'e-resize';

								//change icon
								if (dirCollapse == 'left') {
									object.target.src = meta4.widget.icons.unfold;
								} else {
									object.target.src = meta4.widget.icons.fold;
								}
								
							}
						}
					}
				});
				handler.grab(img);
			}

			divHandler.grab(handler);

			//vars to handle starting offsets of resizableDiv
			var initialPosHandler = 0;
			var posHandler = 0;
			var finishMove = 0;

			//left handling.. to be improved
			drag = handler.makeDraggable({
				snap : 0,
				style : false,
				limit : {
					x : limitX,
					y : [0, divHandler.getSize().y]
				},
				onStart : function() {
					//store position when start
					initialPosHandler = this.mouse.start.x;
					posHandler = this.mouse.start.x;
				},
				onDrag : function(el) {

					var move;

					if (dirCollapse == 'left') {
						move = posHandler - this.mouse.now.x;
					} else {
						move = (posHandler - this.mouse.now.x) * (-1);
					}

					//calculate percent
					var percent = (move / document.getSize().x) * 100;
					if (percent < 0) {
						if (meta4.widget.utils.getWidthWithoutRounded(divHandler) + percent < this.options.limit.x[0]) {
							percent = this.options.limit.x[0] - meta4.widget.utils.getWidthWithoutRounded(divHandler);
						}
					} else {
						if (meta4.widget.utils.getWidthWithoutRounded(divHandler) + percent > this.options.limit.x[1]) {
							percent = this.options.limit.x[1] - meta4.widget.utils.getWidthWithoutRounded(divHandler);
						}
					}

					moveDivRounded(divHandler, percent, divAux, -percent);
					/*IE9*/

					//var sizeHandler = meta4.widget.utils.getWidthWithoutRounded(divHandler) + percent;
					//var sizeAux = meta4.widget.utils.getWidthWithoutRounded(divAux) - percent;

					//meta4.widget.utils.setWidthWithoutRounded(divAux, sizeAux);
					//meta4.widget.utils.setWidthWithoutRounded(divHandler, sizeHandler);

					//update posHandler
					posHandler = this.mouse.now.x;
				}
			});
			handler.dragObject = drag;
		}

		return {

			/**
			 * load dinamically a css or a js file
			 *
			 * @param {Object} pathFile: path to load de file
			 * @param {Object} fileType: js or css
			 */
			loadFile : function(pathFile, onLoad) {
				return _loadFile(pathFile, onLoad);
			},

			makePopUp : function(div,eventClosed) {
				return _makePopUp(div,eventClosed);
			},
			getScoreColor : function(level, levelsNumber) {
				return _getScoreColor(level, levelsNumber);
			},
			m4Confirm : function(msg, callback) {
				return _m4confirm(msg, callback);
			},
			makeSplitHorizontal : function(divHandler, divAux, limit, buttonCollapse) {
				_makeSplitHorizontal(divHandler, divAux, limit, buttonCollapse);
			},
			getWidthWithoutRounded : function(element) {
				return _getWidthWithoutRounded(element);
			},
			setWidthWithoutRounded : function(element, width) {
				_setWidthWithoutRounded(element, width);
			},
			setPercentage : function(element) {
				_setPercentage(element);
			},
			darkenColor : function(color, cant) {
				return _darkenColor(color, cant);
			}
		};

	}());

Element.NativeEvents.paste = 2;
Element.NativeEvents.input = 2;

Element.implement({

	/**
	 * Takes your first element and them iterates over its own parent
	 * until it finds the element you're looking for, returning it.
	 *
	 * Function similar to the closest of jQuery
	 */
	closest : function(selector) {
		var matches = $$(selector);
		var cur = this;
		while (cur && !matches.contains(cur)) {
			cur = cur.getParent();
		}
		return cur;
	},

	m4PlaceHolder : function(text, opt) {
		if (this.get('tag') == 'input' || this.get('tag') == 'textarea') {

			//overwritte get
			this.get = function(prop) {
				var property = Element.Properties[prop];
				if (this.m4placeHolder && prop == 'value') {
					if (this.value == this.m4placeHolder) {
						return '';
					}
				}
				return (property && property.get) ? property.get.apply(this) : this.getProperty(prop);
			}.overloadGetter();

			this.m4placeHolder = text;

			//options default
			var options = {
				search : false
			};

			//merge options
			options = Object.merge(options, opt);

			if (options.search == true) {
				this.style.background = '#FFFFFF url(/icons/search.png) right no-repeat';
				this.style.backgroundPosition = '99% 50%';
				//ie8
				//this.style.backgroundRepeat = 'No repeat';
				this.style['background-repeat'] = 'no repeat';
				this.addClass('m4-placeHolder-icon');
			}

			if (options.value) {
				this.set('value', options.value);
			} else {
				this.addClass('m4-placeHolder');
				this.set('value', text);
			}

			this.addEvents({
				'focus' : function(event) {
					if (this.value == this.m4placeHolder) {
						this.set('value', '');
						this.removeClass('m4-placeHolder');
					}
				}.bind(this),
				'blur' : function() {
					if (this.get('value') == "") {
						this.addClass('m4-placeHolder');
						this.set('value', text);
					}
				}.bind(this, text)
			});
		}
	},

	makeFixedHead : function(height, width) {

		function resizeTh(original, copy) {
			var thOrigin = original.getElements('th');
			var thCopy = copyTable.getElements('th');

			var i;
			for ( i = 0; i < thOrigin.length; i++) {
				var width = thOrigin[i].getStyle('width');
				//bug IE8
				if (parseFloat(width) != -1) {
					thCopy[i].setStyle('minWidth', width);
					thCopy[i].setStyle('maxWidth', width);

					//delete content and set size
					thOrigin[i].getChildren('label').destroy();
					thOrigin[i].setStyle('minWidth', width);
					thOrigin[i].setStyle('maxWidth', width);

				}
			}
		}

		if (this.get('tag') == 'table') {

			//if no receive rguments apply the value 100%
			height = height || '100%';

			width = width || '100%';

			//this div contain
			//	1- Div to thead
			//	2- div to table
			var divMain = new Element('div', {
				'styles' : {
					'position' : 'relative'
					//	'width' : width
				}
			});
			//div to store thead table
			var divHead = new Element('div', {
				styles : {
					//	'position' : 'absolute',
					'overflow' : 'hidden'
					//	'width' : width
				}
			});
			//div to store table with thead empty but width fixed
			var divTable = new Element('div', {
				'styles' : {
					//	'position' : 'absolute',
					//	'top' : this.getElement('th').getStyle('height'),
					'overflow' : 'auto',
					'height' : height
					//	'width' : width
				}
			});

			//wrap table inside divTable
			divTable.wraps(this);
			//wrap table with divMain
			divMain.wraps(divTable);
			//add divHead to divMain
			divMain.grab(divHead, 'top');

			//copy table to copy only thead
			var copyTable = this.clone();
			//delete tbody
			copyTable.getElements('tbody').destroy();
			//resize th of thead (divHead) with th thead of table (divTable-> original table)
			//and empty thead original and set width fixed
			resizeTh(this, copyTable);

			//hide
			this.getElement('thead').setStyle('visibility', 'hidden');

			//add copy table(only thead) to divHead
			divHead.grab(copyTable);

			//hide div
			var animationTime = meta4.session.Animation.getAnimationTime();

			var fxTable = new Fx.Reveal(divMain, {
				duration : animationTime,
				resetHeight : 'true',
				transition : Fx.Transitions.Pow.easeOut
			});

			this.fx = fxTable;

			//when move scroll divtable, move dicHead
			divTable.addEvent('scroll', function() {
				divHead.scrollLeft = divTable.scrollLeft;
			});
		}
	},

	hasBlur : function() {
		if (this !== undefined) {
			var nodeName = this.nodeName;
			if (nodeName === 'INPUT' || nodeName === 'SELECT' || nodeName === 'TEXTAREA') {
				return true;
			}
		}
		return false;
	}
});

/**
 * Function bind with argument event, overwrite mootools
 */
delete Function.prototype.bind;

Function.implement({

	/*<!ES5-bind>*/
	bind : function(that) {
		var self = this, args = arguments.length > 1 ? Array.slice(arguments, 1) : null, F = function() {
		};

		var bound = function() {
			var context = that, length = arguments.length;
			if (this instanceof bound) {
				F.prototype = self.prototype;
				context = new F;
			}
			var result = (!args && !length) ? self.call(context) : self.apply(context, args && length ? args.concat(Array.slice(arguments)) : args || arguments);
			return context == that ? result : context;
		};
		return bound;
	}
	/*</!ES5-bind>*/

});

meta4.widget.TypeElement = ( function() {'use strict';

		return {
			inputPlaceHolder : 'inputPlaceHolder',
			textAreaPlaceHolder : 'textAreaPlaceHolder',
			textArea : 'textArea',
			input : 'input',
			image : 'image',
			m4RadioButton : 'm4RadioButton',
			m4Select : 'm4select',
			m4Slider : 'm4Slider',
			m4Calendar : 'm4Calendar',
			m4List : 'm4List',
			m4ProgressBar : 'm4ProgressBar',
			m4DocManage : 'm4DocManage'
		};

	}());

meta4.widget.element = ( function() {'use strict';

		/**
		 * Function to set properties of html element
		 * @param element: element to set properties
		 * @param properties: properties of new element
		 */
		function setProperties(elem, properties) {
			var classOld = null;
			if (elem.className) {
				classOld = elem.className;
			}
			elem.set(properties);

			if (classOld != null) {
				elem.addClass(classOld);
			}

			return elem;
		}

		/**
		 *Function to bind element-node
		 * @param {Object} elem
		 * @param {Object} node
		 * @param {Object} item
		 * @param {Object} index
		 */
		function addEventChange(elem, node, item, index) {

			function setValueNode(element, node, item, index, event) {

				//check if value is valid
				//reset value with node value
				node.moveTo(index);

				//	console.log('Index evaluado'+node.getObject().getNode(node.getParentId()).getCurrent());

				//	console.log('Index cono'+node.getCurrent());

				//	console.log('Item'+item);

				var checkValue = meta4.data.utils.checkInputValue(node, item, element.get('value'));

				if (checkValue == false) {
					element.addClass('invalidValue');
				} else {
					meta4.data.utils.setValue(node, item, element.get('value'));
					element.removeClass('invalidValue');
				}

				return true;
			}
			
			if(elem.m4RadioButton === true){
				//eventos gestionados en el objeto mootools meta4.widget.m4RadioButton 
				return 0;
			}

			if (elem.nodeName == 'input' || elem.nodeName == 'INPUT' || elem.nodeName == 'textarea' || elem.nodeName == 'TEXTAREA' || elem.nodeName =='m4ProgressBar') {

				elem.addEvents({
					'paste' : function(node, item, index, event) {
						setValueNode(this, node, item, index, event);
					}.bind(elem, node, item, index),
					'keydown' : function(node, item, index, object) {
						var check = meta4.data.utils.checkLongItem(node, item, object);
						if (check == false) {
							object.event.preventDefault();
						}
					}.bind(elem, node, item, index),
					'keyup' : function(node, item, index, object) {
						//only check if value is valid, set item when event change
						var checkValue = meta4.data.utils.checkInputValue(node, item, this.get('value'));
						if (checkValue == false) {
							this.addClass('invalidValue');
						} else {
							this.removeClass('invalidValue');
						}
					}.bind(elem, node, item, index),
					'change' : function(node, item, index, event) {
						setValueNode(this, node, item, index, event);
					}.bind(elem, node, item, index)
				});

			} else {
				elem.addEvent('change', function(node, item, index, event) {
					setValueNode(this, node, item, index, event);
				}.bind(elem, node, item, index));
			}
		}

		/**
		 *Function to create element
		 * @param {Object} properties
		 * @param {Object} channel
		 * @param {Object} idNode
		 * @param {Object} item
		 * @param {Object} container
		 */
		function _create(properties, channel, idNode, item, container, bind) {

			var typeElement = properties.nodeName;

			//convert value if element have m4converter property
			var value = meta4.data.utils.getValue(channel.getNode(idNode), item);
			if (properties.m4converter) {
				value = properties.m4converter(channel.getNode(idNode), item);
			}

			var newElement;
			if (typeElement == meta4.widget.TypeElement.inputPlaceHolder) {
				newElement = createInputPlaceHolder(properties, channel, idNode, item, value);
			} else if (typeElement == meta4.widget.TypeElement.textAreaPlaceHolder) {
				newElement = createTextAreaPlaceHolder(properties, channel, idNode, item, value);
			} else if (typeElement == meta4.widget.TypeElement.input) {
				newElement = createInput(properties, channel, idNode, item, value);
			} else if (typeElement == meta4.widget.TypeElement.image) {
				newElement = createImage(properties, channel, idNode, item, value);
			} else if (typeElement == meta4.widget.TypeElement.m4Select) {
				newElement = createM4Select(properties, channel, idNode, item, value);
			} else if (typeElement == meta4.widget.TypeElement.m4Calendar) {
				newElement = createM4Calendar(properties, channel, idNode, item, value);
			} else if (typeElement == meta4.widget.TypeElement.m4List) {
				newElement = createM4List(properties, channel, idNode, item, value);
			} else if (typeElement == meta4.widget.TypeElement.m4Slider) {											
				newElement = createM4Slider(properties, channel, idNode, item, value);
			} else if (typeElement == meta4.widget.TypeElement.m4ProgressBar) {
				newElement = createM4ProgressBar(properties, channel, idNode, item, value, container);
				container = null;
			} else if (typeElement == meta4.widget.TypeElement.m4RadioButton) {
				newElement = createM4RadioButton(properties, channel, idNode, item, value, container);
			//} else if (typeElement == meta4.widget.TypeElement.m4DocManage) {
			//	newElement = createM4DocManage(properties, channel, idNode, item, value, container);
			} else {
				if (properties.functionalcomponent) {
					newElement = meta4.widget.functionalcomponents.add(properties, channel, idNode, item, value, container);
				} else { 
					newElement = createGenericElement(properties, channel, idNode, item, value);
				}
			}

			if (bind == true) {
				//add event change
				addEventChange(newElement, channel.getNode(idNode), item, channel.getNode(idNode).getCurrent());
			}

			//set properties
			newElement = setProperties(newElement, properties);

			//if receibe container add nuevoElemento
			if (container !== null && container !== undefined) {
				container.grab(newElement);
			}

			//if m4Calendar create object m4calendar after add container
			if (properties['nodeName'] === meta4.widget.TypeElement.m4Calendar) {
				if (container !== null && container !== undefined) {

					var object = new Object;
					object[newElement.id] = sformatofechas;
					var calendar = new meta4Calendar(object, {
						//title : 'calendar'
						isElement : newElement
					});

					if (properties['disabled']) {
						calendar.setDisabled(true);
					}
				} else {
					throw 'Error: method meta4.widget.createElement neeed argument container to  create m4Calendar';
				}
			} else if (properties['nodeName'] === meta4.widget.TypeElement.m4List) {
				var m4List = new M4List(properties);
				//restauramos la propiedad mainFilterElement porque se sobreescribe con el setProperties
				properties.mainFilterElement = newElement.mainFilterElementStore;

			} else if (properties['nodeName'] === meta4.widget.TypeElement.m4Slider) {

				var properSelect = null;

				properSelect = Object.clone(properties);

				var knob = newElement.getElement('div');

				//get node aux
				var nodeAux = channel.getNode(properSelect.idNodeAux);

				//store node, etc
				newElement.nodeAux = nodeAux;
				newElement.node = channel.getNode(idNode);
				newElement.item = item;
				newElement.m4Index = channel.getNode(idNode).getCurrent();
				newElement.idItemNameAux = properSelect.idItemNameAux;
				newElement.idItemValueAux = properSelect.idItemValueAux;
				if (properties.events && properSelect.events.onChange) {
					newElement.onChange = properSelect.events.onChange;
				}

				// True if you want the knob to snap to the nearest value
				properSelect.snap = true;

				//get steps
				properSelect.steps = nodeAux.count();
				//enable wheel
				properSelect.wheel = true;

				//get initial pos
				var i;
				properSelect.initialStep = 0;
				for ( i = 0; i < nodeAux.count(); i++) {
					nodeAux.moveTo(i);
					if (nodeAux.getValue(properSelect.idItemValueAux) == value) {
						properSelect.initialStep = i + 1;
					}
				}

				//function onComplete
				properSelect.onChange = function(step) {

					var nodeAux = this.element.nodeAux;
					var node = this.element.node;
					var item = this.element.item;
					var index = this.element.m4Index;
					var idItemNameAux = this.element.idItemNameAux;
					var idItemValueAux = this.element.idItemValueAux;

					step = step - 1;

					//move node
					node.moveTo(index);

					if (step === -1) {
						idValue = null;
						nameValue = properSelect.labelNotValue;
					} else {
						nodeAux.moveTo(step);
						var idValue = meta4.data.utils.getValue(nodeAux, idItemValueAux);
						var nameValue = meta4.data.utils.getValue(nodeAux, idItemNameAux);
					}

					node.setValue(item, idValue);

					if (this.element.getNext() == null) {
						var label = new Element('label', {
							'class' : 'labelSlider',
							text : nameValue
						});
						this.element.labelSlider = label;
						this.element.parentNode.grab(label);
					} else {
						this.element.labelSlider.set('text', nameValue);
					}

					//aux callback
					if (this.element.onChange) {
						this.element.onChange(step, index, nodeAux, node);
					}

				};

				var mySlider = new Slider(newElement, knob, properSelect);

				if (properSelect.disabled == true) {
					mySlider.detach();
					mySlider.knob.setStyle('cursor', 'default');
				}
			}

			if (properties.m4setElement) {
				properties.m4setElement(newElement, channel.getNode(idNode), item);
			}

			return newElement;
		}

		function _createWithBind(properties, channel, idNode, item, container) {
			var element = _create(properties, channel, idNode, item, container, true);
			return element;
		}

		function createM4RadioButton(properties, channel, idNode, item, container) {

			var m4radioButton = new meta4.widget.m4RadioButton(properties, channel, idNode, item);

			return m4radioButton._divContainer;

		}

		function createM4Calendar(properties, channel, idNode, item, value) {
			var newElement = new Element('input', {
				'value' : value,
				'events' : {
					'm4checkdate' : function() {
						this.fireEvent('change');
					}
				}

			});

			var idCalendar = idNode + item + channel.getNode(idNode).getCurrent();
			newElement.id = idCalendar;

			return newElement;
		}

		function createM4List(properties, channel, idNode, item, value) {
			var newElement = new Element('input', {
				'value' : value
			});

			/**
			 * @param:arrayIdItemGet: array con los id donde se va a extraer la información
			 * *@param:arrayIdItemSet: array con los id donde se va a guardar la información
			 */
			newElement.addEvent('m4changeList', function(channel, idNode, index, m4jsapiItems, object) {

				if ( typeof object === "undefined") {
					var i, node;
					node = channel.getNode(idNode);
					node.moveTo(index);
					for ( i = 0; i < m4jsapiItems.length; i++) {
						var value = this.get('m4' + m4jsapiItems[i].itemQBF);
						meta4.data.utils.setValue(node, m4jsapiItems[i].item, value);
					}
				} else {
					if (object.firstExecution === false) {
						//evento lanzado en la iniacializacion, no hacemos nada
						var i, node;
						node = channel.getNode(idNode);
						node.moveTo(index);
						for ( i = 0; i < m4jsapiItems.length; i++) {
							var value = this.get('m4' + m4jsapiItems[i].itemQBF);
							meta4.data.utils.setValue(node, m4jsapiItems[i].item, value);
						}
					}
				}
			}.bind(newElement, channel, idNode, channel.getNode(idNode).getCurrent(), properties.m4jsapiItems));

			if (properties.title === undefined) {
				properties.title = meta4.widget.translate.getTranslate('_m4listHelp');
			}

			if (properties.labelLoading === undefined) {
				properties.labelLoading = meta4.widget.translate.getTranslate('_m4listLoaging');
			}

			if (properties.labelAndMore === undefined) {
				properties.labelAndMore = meta4.widget.translate.getTranslate('_m4listMore');
			}

			if (properties.labelNoMatch === undefined) {
				properties.labelNoMatch = meta4.widget.translate.getTranslate('_m4listNoResult');
			}

			//se usa en lugar de usar el id
			newElement.mainFilterElement = properties.mainFilterElement;

			//lo guardo porque si no
			newElement.mainFilterElementStore = properties.mainFilterElement;

			properties.mainFilterElementIsElement = true;
			//store element
			properties.mainFilterElement = newElement;
			properties.eventAttributesChanged = 'm4changeList';
			properties.node = channel.getNode(idNode);
			properties.indexRegister = channel.getNode(idNode).getCurrent();
			return newElement;
		}

		function createGenericElement(properties, channel, idNode, item, value) {
			var newElement = new Element(properties.nodeName, {
				html : value
			});

			return newElement;
		}

		/**
		 *Function to show title in elements that is bigger that his parent
		 * @param {Object} event
		 */
		function autoTooltip(event) {
			var element = event.target;

			//store in element property m4autoTooltip
			//ie8 crash
			if (Object.prototype.hasOwnProperty.call(element, 'm4autoTooltip') === false) {
				//if (element.hasOwnProperty('m4autoTooltip') == false) {
				if (element.title == '') {
					element.m4autoTooltip = true;
				} else {
					//if element has title do nothing
					element.m4autoTooltip = false;
				}
			}

			if (element.m4autoTooltip == true) {

				var parent;

				//firefox no soporta parentElement
				if (Browser.firefox && Browser.version < 9) {
					parent = $(element.parentNode);
				} else {
					//ie8 crash element.parentElement.getSize()
					parent = $(element.parentElement);
				}

				var elementX = element.getSize().x;
				if (element.getScrollSize().x > elementX || elementX > parent.getSize().x) {
					element.set('title', element.get('text'));
				} else {
					element.set('title', null);
				}
			}

		}

		function createM4ProgressBar(properties, channel, idNode, item, value, container) {

			properties.step = value;
			var progressBar = new meta4.widget.ProgressBar(container, properties);

			//return progressBar.getContainer();
			return progressBar;
		}

		function createM4DocManage(properties, channel, idNode, item, value, container) {

			var docManage = new meta4.widget.docmanage(container, channel, idNode, item, properties);

			return docManage.getContainer();
		}
		
		function createM4Slider(properties, channel, idNode, item, value) {

			var slider = new Element('div', {
				'class' : 'slider'
			});
			var knob = new Element('div', {
				'class' : 'knob'
			});
			slider.grab(knob);

			return slider;
		}

		function createM4Select(properties, channel, idNode, item, value) {

			var newElement = new Element('select');

			var i;
			try {//bug m4jsapi
				var idSelected = value;
			} catch(eer) {
				idSelected = null;
			}

			var nodeChild = channel.getNode(properties.idNodeAux);

			if (properties.nullValue != false) {
				//no selection, default option
				var options = {
					'text' : '',
					'h' : null
				};
				var newOption = new Element('option', options);
				newElement.grab(newOption);
			}

			for ( i = 0; i < nodeChild.count(); i++) {
				nodeChild.moveTo(i);
				var value = nodeChild.getValue(properties.idItemValueAux);
				var text = nodeChild.getValue(properties.idItemNameAux);

				var options = {
					'html' : nodeChild.getValue(properties.idItemNameAux),
					'value' : nodeChild.getValue(properties.idItemValueAux)
				};
				if (idSelected == value) {
					options.selected = 'selected';
				}
				var newOption = new Element('option', options);

				newElement.grab(newOption);
			}

			return newElement;
		}

		function createInput(properties, channel, idNode, item, value) {
			var newElement = new Element('input', {
				value : value
			});
			return newElement;
		}

		function createInputPlaceHolder(properties, channel, idNode, item, value) {
			var newElement = new Element('input');
			newElement.m4PlaceHolder(channel.getNode(idNode).getItemMetadata(item).getProperty('Name'));
			return newElement;
		}
		
		function createUploadFile(properties, container) {
			
			// Crea el file uploader
			var upload = new Form.Upload(container, properties);
			// Usando un iFrameFormRequest, en caso de un navegador antiguo
			if (!upload.isModern()) {
				new iFrameFormRequest('uploadForm', properties);
			}

			return upload;

		}

		function createTextAreaPlaceHolder(properties, channel, idNode, item, value) {
			var newElement = new Element('textarea');
			newElement.m4PlaceHolder(channel.getNode(idNode).getItemMetadata(item).getProperty('Name'), {
				'html' : value
			});
			return newElement;
		}

		function createImage(properties, channel, idNode, item, value) {
			var newElement = new Element('img', {
				src : value
			});
			return newElement;
		}

		return {
			create : function(properties, channel, idNode, item, container) {
				return _create(properties, channel, idNode, item, container, false);
			},
			createWithBind : function(properties, channel, idNode, item, container) {
				return _createWithBind(properties, channel, idNode, item, container);
			},
			createUploadFile:createUploadFile,
			autoTooltip : autoTooltip
		};

	}());

window.addEvent('domready', function() {
	$(document.body).addEvent('mouseover:relay(label,p, span , h1, h2, h3)', meta4.widget.element.autoTooltip);
});

