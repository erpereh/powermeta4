/*
 @(#)FileVersion: 811.000.025
 @(#)FileDescription: 
 @(#)CompanyName: Meta4 Spain, S.A.
 @(#)LegalCopyright: (c)2014
 @(#)ProductName: PeopleNet KSystem
 @(#)ProductVersion: 8.1SP1
 @(#)InternalName: widget.js
 @(#)Date: 01/01/2014
 */

meta4.widget = meta4.widget || {};

meta4.widget.icons = ( function() {'use strict';

    var iconsRoot = '/icons/';

    return {    
        alert : iconsRoot + 'alert.png',
        arrow_downIcon : iconsRoot + 'arrow_down.png',
        arrow_left : iconsRoot + 'arrow_left.png',
        arrow_up : iconsRoot + 'arrow_up.png',
    
        circleon: iconsRoot + 'circleon.svg',
        circleoff: iconsRoot + 'circleoff.svg',
        close : iconsRoot + 'close.png',
        close_panel : iconsRoot + 'close_panel.png',
        close_panel_dark : iconsRoot + 'close_panel_dark.png',
        
        del : iconsRoot + 'del.png',
        data_organization: iconsRoot + 'data_organization.png',
        unfold : iconsRoot + 'unfold.png',
        
        fold_horizontal : iconsRoot + 'fold_horizontal.png',
        
        info : iconsRoot + 'info.png',
        
        minus_green : iconsRoot + 'minus_green.png',
        
        plus : iconsRoot + 'plus.png',
        plus_blue : iconsRoot + 'plus_blue.png',
        fold : iconsRoot + 'fold.png',
        
        search : iconsRoot + 'search.png'
        
    };

}());

/**
 * Clase que extiendo de la clase Options de mootools
 * Pertite realziar la llamada setOptions con objetos m4object en su interior.
 */
meta4.widget.Options = new Class({
	Extends : Options,
	setOptions : function(options) {

		var arrayChannel = [];
        
		function getChannels(path, object) {
			for (prop in object) {
			    
                var property = object[prop]  
			   
                if (property ){			       
			       
                    if ( typeof object[prop].getObjectMetadata === 'function') {
                        var clone = Array.clone(path);
                        clone.push(prop);
                        var obj = new storageChannel(object[prop], clone);
                        arrayChannel.push(obj);
                        delete object[prop];
                        
                    }else if ( typeof object[prop] === 'object' && m4IsElement(property) === false) {
                        var clone = Array.clone(path);
                        clone.push(prop);										
                        getChannels(clone, object[prop]);
                    }
				}  
			}
		}

		function storageChannel(channel, path) {
			this.channel = channel;
			this.path = path;
		}

		var path = [];

		getChannels(path, options);
		
		this.parent(options);
		
		var i;
		for ( i = 0; i < arrayChannel.length; i++) {
			var path = arrayChannel[i].path;
			var channel = arrayChannel[i].channel;
			var j;
			var relative = this.options;
			var relative_aux = options;
			for(j=0;j<path.length;j++){				
				if(j ===  path.length -1){
					relative[path[j]] = channel;
					relative_aux[path[j]] = channel;
				}else{
					relative = relative[path[j]];
					relative_aux = relative_aux[path[j]];
				}
			}
		}		
	}
});

meta4.loadSync.loadJs('/js/widget/translate.js');
meta4.loadSync.loadJs('/js/widget/log.js');
meta4.loadSync.loadJs('/js/widget/table.js');

//document.write('<script src:"../js/widget/table.js"></script>');
//document.write('<script src="../js/widget/utils.js"></script>');
//document.write('<script src="../js/widget/log.js"></script>');

meta4.loadSync.loadJs('/js/widget/form.js');
meta4.loadSync.loadJs('/js/widget/loading.js');
meta4.loadSync.loadJs('/js/widget/utils.js');
meta4.loadSync.loadJs('/js/widget/select.js');
meta4.loadSync.loadJs('/js/widget/binding.js');
meta4.loadSync.loadJs('/js/widget/titlebar.js');
meta4.loadSync.loadJs('/js/widget/blind.js');

document.addEvent('meta4Ready', function() {
	meta4.loadSync.loadJs('/translations/meta4.widget' + meta4.session.language.getPrefixLanguage() + '.js');
});
//language widget

//meta4.loadSync.loadCss('/css/meta4.widget.utils.css'); ESTO YA NO EXISTE
meta4.loadSync.loadCss('/style/meta4.widget.css');

meta4.widget.portal = ( function() {
        
    window.addEvent('resize', function() {      
        if (self == top) {
            document.getElement('html').setStyle('height', '100%');
        } else {
            if (parent.document.getElementById('pageHeader') != null) {
                var sizeDoc = parent.document.getSize().y;

                var sizeHTML = sizeDoc - (parent.document.getElement('#pageHeader').getSize().y + parent.document.getElement('.pageFooter').getSize().y + parseInt(parent.document.getElement('.pageFooter').getStyle('marginTop')) + 18);

                document.getElement('html').setStyle('height', sizeHTML);
            } else {
                document.getElement('html').setStyle('height', '1024px');
            }

        }
    });

}());

meta4.widget.documentProvider = ( function() {'use strict';

		function _openDocument(uuID) {

			//read java server page
			var l_URLuniqueParams = meta4.widget.javaserverpages.uniqueParams;
			
			var loading = new meta4.widget.loading();

			loading.show();

			//the AJAX callback function
			function _getRespJSON(oResponse) {

				meta4.widget.utils.loadFile('/library/m4doc_include.js', function() {
					loading.hide();
					if (oResponse) {//if response doesn't exist, create the form object
						var encryptID = oResponse.encryptID;
						//meta4DMSDoc.Doc.read(encryptID);
						m4opendocument_tech(encryptID);
					}
				});
			}

			var aParams = [];
			aParams[0] = ["uuID", uuID];

			meta4Ajax.ajax.sendAsyncJSON(l_URLuniqueParams, aParams, _getRespJSON);

		}

		function _openFile(meta4Object, nodeId, itemId) {

			var loading = new meta4.widget.loading();

			loading.show();

			var alias = meta4Object.getAlias();
			var meta4ObjectId = meta4Object.getId();

			function openFile(request) {

				var launchReportPage = meta4.widget.javaserverpages.launchReport;

				var uuID = meta4Object.getNode(nodeId).getValue('UUID');

				var aParams = [];

				aParams[0] = ['UUID', uuID];

				//the AJAX callback function
				function _getRespJSON(oResponse) {

					if (oResponse) {//if response doesn't exist, create the form object

						if (oResponse.sPathFile) {
							var sPathFile = oResponse.sPathFile;

							//window.open(sPathFile);

							meta4.widget.utils.loadFile('/library/m4doc_include.js', function() {

								loading.hide();
								mywindowdoc(null, sPathFile, sPathFile);
							});
						}
					}
				}


				meta4Ajax.ajax.sendAsyncJSON(launchReportPage, aParams, _getRespJSON);

			}

			//Sincronizamos el Meta4Object
			var request = new meta4.M4Request(meta4Object, nodeId, itemId, null);
			meta4.data.execute(request, openFile);
		}

		return {
			openDocument : function(uuID) {
				return _openDocument(uuID);
			},
			openFile : function(meta4Object, nodeId, itemId) {
				return _openFile(meta4Object, nodeId, itemId);
			}
		};

	}());

meta4.widget.ProgressBar = new Class({

	//implements class Options and Evento (mootools)

	Implements : [Options, Events],

	//Contenedor del progress bar y la caja de texto
	_progressBarContainer : null,
	//Progres bar
	_progressBar : null,
	//Barra de estado
	_sliderBar : null,
	//Caja de texto
	_text : null,
	_percentage : null,
	
	nodeName:'m4ProgressBar',

	options : {

		maximun : 100,
		step : null,
		editable : null,
		optionClass : ''

	},

	initialize : function(container, options) {'use strict';

		var styleProgressBar = null;
		if (options) {
			this.setOptions(options);
		}

		//.getSize().y

		var editable = this.options.editable;
		if (editable !== null) {
			if (editable === true) {
				this._text = new Element('input', options);
				this._text.addClass('m4ProgressBar-input');
			} else {
				this._text = new Element('label', options);
				this._text.addClass('m4ProgressBar-text');
			}

		} else {
			styleProgressBar = 'width:100%;';
		}

		//Contenedro de progress bar y caja de texto
		this._progressBarContainer = new Element('div', {
			'class' : this.options.optionClass + ' m4ProgressBar-container'
		});

		//Contenedro de progress bar y caja de texto
		this._progressBarAlign = new Element('div', {
			'class' : this.options.optionClass + ' m4ProgressBar-container-align'
		});
		this._progressBar = new Element('div', {
			'class' : 'm4progressBar',
			style : styleProgressBar
		});
		this._sliderBar = new Element('div', {
			'class' : 'm4progressBar-stepBar'
		});

		this._progressBar.grab(this._sliderBar);

		this._progressBarContainer.grab(this._progressBarAlign);
		this._progressBarAlign.grab(this._progressBar);

		$(container).grab(this._progressBarContainer);

		if (this._text) {
			this._progressBarContainer.grab(this._text);
			this._text.addEvents({
				'paste' : function(object) {
					//this.fireEvent('onDrawRow', [td, this._node]);
					this.fireEvent('paste');
					this._setValue(this._text.get('value'));
				}.bind(this),
				'keydown' : function(object) {

					var currentValue = this._text.get('value');
					if (currentValue <= this.options.maximun) {
						//    object.event.preventDefault();
						this.fireEvent('keydown');

						this._setValue(currentValue);
					} else {
						//object.event.preventDefault();
					}

				}.bind(this),
				'keyup' : function(object) {
					this.fireEvent('keyup');
					this._setValue(this._text.get('value'));
				}.bind(this),
				'change' : function(object) {
					this.fireEvent('change');
					this._setValue(this._text.get('value'));
				}.bind(this)
			});
		}

		if (this.options.step) {
			this.setValue(this.options.step);
		}

	},

	_setValue : function(step) {

		step = parseFloat(step);

		if (isNaN(step)) {
			step = 0;
		}
		if (!step) {
			step = step + (this.options.maximun / 100);
		}
		if (step > this.options.maximun) {
			step = 0;
		}

		this.step = step;

		var percentage = Math.round((step * 100) / this.options.maximun);

		this._sliderBar.style.width = percentage + '%';

		return percentage;
	},

	setValue : function(step) {

		var percentage = this._setValue(step);

		if (this._text) {
			if (this._text.nodeName === 'INPUT') {
				this._text.set('value', percentage);
			} else {
				this._text.set('text', percentage);
			}
		}
	},

	getContainer : function() {
		return this._progressBarContainer;
	},

	get : function(argument) {
		return this._text.get(argument);
	},
    set : function(arg, opc) {
        this._progressBarContainer.set(arg, opc); 
    },
	addClass : function(classId) {
		this._text.addClass(classId);
	},
	removeClass : function(classId) {
		this._text.removeClass(classId);
	}
});

meta4.widget.Button = new Class({

	//implements class Options and Evento (mootools)
	Implements : [Options, Events],

	container : null,
	isPressed : false,
	divImg : null,
	img : null,
	label : null,
	text : null,
	srcImg : null,
	options : {
		'nodeName' : 'label',
		'classButton' : null,
		'classButtonPressed' : null,
		'textPressed' : null,
		'imgPressed' : null,
		'functionClick' : null,
		'positionIcon' : 'left',
		'imgAction' : true,
		'pressed' : false
	},

	initialize : function(text, srcImg, options) {

		this.setOptions(options);

		this.text = text;
		this.srcImg = srcImg;

		this.container = new Element('div', {
			'class' : 'm4-widgetButton'
		});
		
		if(text === '' || text === null){
			this.container.addClass('m4-widgetButton-only-img');
		}

		this.container.set(options);

		if (this.options.imgAction === true) {
			this.container.addClass('imgAction');
		}

		if (this.options.classButton !== null) {
			this.container.addClass(this.options.classButton);
		}

		if (this.options.functionClick !== null) {
			this.addEventClick();
		}

		var divText = new Element('div', {
			'class' : 'm4-widgetButton-text'
		});

		this.label = new Element(this.options.nodeName, {
			'text' : text
		});

		if (text) {
			divText.grab(this.label);
		}

		this.divImg = new Element('div', {
			'class' : 'm4-widgetButton-img'
		});

		if (srcImg !== undefined && srcImg !== null) {
			this.img = new Element('img', {
				'src' : srcImg
			});

			this.divImg.grab(this.img);
		}

		if (this.options.positionIcon === 'left') {
			this.container.adopt(this.divImg, divText);
		} else {
			this.container.adopt(divText, this.divImg);
		}
	},

	setFunctionClick : function(functionClick) {
		this.options.functionClick = functionClick;
		this.addEventClick();
	},

	addEventClick : function() {
		this.container.addEvent('click', function(object) {

			if (this.options.pressed === true) {
				if (this.isPressed === true) {
					this.isPressed = false;
				} else {
					this.isPressed = true;
				}

				if (this.options.classButtonPressed !== null) {
					this.container.toggleClass(this.options.classButtonPressed);
				}

				if (this.options.textPressed !== null) {
					if (this.isPressed === false) {
						this.label.set('text', this.text);
					} else {
						this.label.set('text', this.options.textPressed);
					}
				}

				if (this.options.imgPressed !== null) {
					if (this.isPressed === false) {
						this.img.set('src', this.srcImg);
					} else {
						this.img.set('src', this.options.imgPressed);
					}
				}

			}
			this.options.functionClick.call(this);
		}.bind(this));
	}
});

Fx.m4ReplaceElement = new Class({

	//status = 1 nomal, status = 2 replace
	status : 1,
	primaryElement : null,
	secundaryElement : null,

	initialize : function(primaryElement, secundaryElement, options) {

		this.primaryElement = primaryElement;
		this.secundaryElement = secundaryElement;

		//contenedor para los dos div absolutos
		this.container = new Element('div', {
			styles : {
				'position' : 'relative',
				'overflow' : 'hidden',
				'width' : primaryElement.getSize().x,
				'height' : primaryElement.getSize().y
			}
		});

		//contenedor para el elemento actual
		this.primaryContainer = new Element('div', {
			styles : {
				'position' : 'absolute',
				'width' : primaryElement.getSize().x
			}
		});

		//contenedor para el elemento secundario
		this.secundaryContainer = new Element('div', {
			styles : {
				'position' : 'absolute',
				'width' : primaryElement.getSize().x
			}
		});

		//fx primary
		this.fxPrimary = new Fx.Morph(this.primaryContainer, options);

		//fx secundary
		this.fxSecundary = new Fx.Morph(this.secundaryContainer, {
			duration : meta4.session.Animation.getAnimationTime(),
			transition : Fx.Transitions.Sine.easeOut,
			onComplete : function(secundaryContainer) {
				if (this.status === 1) {
					this.status = 2;
				} else {
					this.status = 1;
				}

				if (this.status === 2) {
					this.secundaryElement.replaces(this.container);
				} else {
					this.primaryElement.replaces(this.container);
				}

			}.bind(this)
		});
	},

	replaceElement : function() {

		if (this.status === 1) {

			this.primaryContainer.wraps(this.primaryElement);

			this.container.wraps(this.primaryContainer);

			this.secundaryContainer.grab(this.secundaryElement);

			this.container.grab(this.secundaryContainer);

			//set position
			this.primaryContainer.setStyle('left', '0px');
			this.secundaryContainer.setStyle('left', this.primaryElement.getSize().x);
		} else {

			this.secundaryContainer.wraps(this.secundaryElement);

			this.container.wraps(this.secundaryContainer);

			this.primaryContainer.grab(this.primaryElement);

			this.container.grab(this.primaryContainer);

			//set position
			this.primaryContainer.setStyle('left', -this.primaryElement.getSize().x);
			this.secundaryContainer.setStyle('left', '0px');
		}

		var properties = {};
		var propertiesAux = {};
		var w = this.primaryContainer.getSize().x;
		if (this.status === 1) {

			properties.left = [0, -w];
			properties.opacity = [100, 0];

			propertiesAux.left = [w, 0];
			propertiesAux.opacity = [0, 100];
		} else {

			properties.left = [-w, 0];
			properties.opacity = [0, 100];
			propertiesAux.left = [0, w];
			propertiesAux.opacity = [100, 0];

		}

		this.fxPrimary.start(properties);
		this.fxSecundary.start(propertiesAux);
	}
});

meta4.widget.m4RadioButton = new Class({

	//implements class Options and Evento (mootools)
	Implements : [Events],

	Implements : [Options, Events],

	options : {

		//disabled control box
		disabled : false,

		//allow clear the selected option
		allowUnChecked : false,
		//type of representation
		mode : 'horizontal',
		svg : true,
		//event when change input,object{element,item,node}
		onChange : function(object) {

		},
		radioBox : 'fill',
		checkBox : 'checkmark'
	},

	_divContainer : null,

	initialize : function(options, channel, idNode, item) {

		this.setOptions(options);

		if (!document.createElement('svg').getAttributeNS) {
			this.options.svg = false;
			console.log('Your browser does not support SVG!');
		}

		this._divContainer = new Element('div', options);
		this._divContainer.set('class', 'm4RadioButton');
		this._divContainer.addClass('m4RadioButtonDiv');

		var table;
		if (this.options.mode === 'vertical') {
			table = new Element('table');
			this._divContainer.grab(table);
		}

		this._divContainer.m4RadioButton = true;

		this._divContainer.m4RadioButtons = true;
		var i;

		var name = 'radio_' + idNode + '_' + item + channel.getNode(idNode).getCurrent();

		for (i in this.options.itemTypes) {

			var val = meta4.data.utils.getValue(channel.getNode(idNode), i);
            
            if (val === null){
            	meta4.data.utils.setValue(channel.getNode(idNode), i, 0);
            }
                
			var element;
			if (this.options.svg) {
				if (this.options.itemTypes[i].type === 'radio') {
					element = meta4.widget.createSvgRadioBox.controlRadiobox(this, i, name, val);
				} else if (this.options.itemTypes[i].type === 'checkBox') {
					element = meta4.widget.createSvgRadioBox.controlCheckbox(this, i, val);
				}

			} else {
				element = new Element('input', this.options.itemTypes[i]);

				element.set('name', name);

				if (val === 1) {
					element.set('checked', true);
				}

				element.addEvent('click', function(element, node, item, index, event) {
					if (this.options.allowUnChecked) {
						if (meta4.data.utils.getValue(node, item) === 1 && element.get('checked') === true) {
							//unchecked
							element.set('checked', false);
						}
					}

					if (element.type === 'radio') {
						var radios = document.getElements('input[type="radio"][name="' + element.get('name') + '"]');

						radios.forEach(function(el) {
							el.fireEvent('reset');
						});
					}

				}.bind(this, element, channel.getNode(idNode), i, channel.getNode(idNode).getCurrent()));
			}

			if (this.options.itemTypes[i].type === 'radio') {
				//event to check = false
				element.addEvent('reset', function(node, item, index) {
					node.moveTo(index);
					meta4.data.utils.setValue(node, item, 0);
				}.bind(this, channel.getNode(idNode), i, channel.getNode(idNode).getCurrent()));
			}

			//event click element
			element.addEvent('click', function(element, node, item, index, event) {

				if (this.options.itemTypes[item].disabled !== true) {
					var value;
					if (element.get('checked') === true) {
						value = 1;
					} else {
						value = 0;
					}
					meta4.data.utils.setValue(node, item, value);
					var obj = {
						element : element,
						node : node,
						item : item
					};
					this.fireEvent('changeRadio', obj);
				}

			}.bind(this, element, channel.getNode(idNode), i, channel.getNode(idNode).getCurrent()));

			var label = new Element('label', options.itemTypes[i]);
			label.set('text', channel.getNode(idNode).getItemMetadata(i).getProperty('Name'));
			label.addClass('m4RadioButton-label');

			if (this.options.svg) {
				if (this.options.itemTypes[i].type === 'radio') {
					label.addEvent('click', function(i, element) {
						meta4.widget.createSvgRadioBox.clickRadioBox(this, i, element);
					}.bind(this, i, element));
				} else if (this.options.itemTypes[i].type === 'checkBox') {
					label.addEvent('click', function(i, element) {
						meta4.widget.createSvgRadioBox.clickCheckBox(this, i, element);
					}.bind(this, i, element));
				}
			} else {
				label.addEvent('click', function(element) {					
					if(element.get('checked')=== false){
						element.set('checked',true);
					}else{
						element.set('checked',false);
					}					
					element.fireEvent('click');
				}.bind(this, element));
			}

			var parentBox = new Element('div');
			if (this.options.itemTypes[i].disabled === true) {
				parentBox.addClass('m4RadioButton-disabled');
			}

			if (this.options.mode === 'vertical') {
				var tr = new Element('tr');
				var tdBox = new Element('td');
				var tdLabel = new Element('td');
				parentBox.grab(element);
				tdBox.grab(parentBox);
				tdLabel.grab(label);
				tr.adopt(tdBox, tdLabel);
				table.grab(tr);
			} else {
				parentBox.adopt(element, label);
				this._divContainer.grab(parentBox);
			}

		}
	}
});

meta4.widget.createSvgRadioBox = (function() {

	var pathDefs = {
		cross : ['M 10 10 L 90 90', 'M 90 10 L 10 90'],
		fill : ['M15.833,24.334c2.179-0.443,4.766-3.995,6.545-5.359 c1.76-1.35,4.144-3.732,6.256-4.339c-3.983,3.844-6.504,9.556-10.047,13.827c-2.325,2.802-5.387,6.153-6.068,9.866 c2.081-0.474,4.484-2.502,6.425-3.488c5.708-2.897,11.316-6.804,16.608-10.418c4.812-3.287,11.13-7.53,13.935-12.905 c-0.759,3.059-3.364,6.421-4.943,9.203c-2.728,4.806-6.064,8.417-9.781,12.446c-6.895,7.477-15.107,14.109-20.779,22.608 c3.515-0.784,7.103-2.996,10.263-4.628c6.455-3.335,12.235-8.381,17.684-13.15c5.495-4.81,10.848-9.68,15.866-14.988 c1.905-2.016,4.178-4.42,5.556-6.838c0.051,1.256-0.604,2.542-1.03,3.672c-1.424,3.767-3.011,7.432-4.723,11.076 c-2.772,5.904-6.312,11.342-9.921,16.763c-3.167,4.757-7.082,8.94-10.854,13.205c-2.456,2.777-4.876,5.977-7.627,8.448 c9.341-7.52,18.965-14.629,27.924-22.656c4.995-4.474,9.557-9.075,13.586-14.446c1.443-1.924,2.427-4.939,3.74-6.56 c-0.446,3.322-2.183,6.878-3.312,10.032c-2.261,6.309-5.352,12.53-8.418,18.482c-3.46,6.719-8.134,12.698-11.954,19.203 c-0.725,1.234-1.833,2.451-2.265,3.77c2.347-0.48,4.812-3.199,7.028-4.286c4.144-2.033,7.787-4.938,11.184-8.072 c3.142-2.9,5.344-6.758,7.925-10.141c1.483-1.944,3.306-4.056,4.341-6.283c0.041,1.102-0.507,2.345-0.876,3.388 c-1.456,4.114-3.369,8.184-5.059,12.212c-1.503,3.583-3.421,7.001-5.277,10.411c-0.967,1.775-2.471,3.528-3.287,5.298 c2.49-1.163,5.229-3.906,7.212-5.828c2.094-2.028,5.027-4.716,6.33-7.335c-0.256,1.47-2.07,3.577-3.02,4.809'],
		checkmark : ['M16.667,62.167c3.109,5.55,7.217,10.591,10.926,15.75 c2.614,3.636,5.149,7.519,8.161,10.853c-0.046-0.051,1.959,2.414,2.692,2.343c0.895-0.088,6.958-8.511,6.014-7.3 c5.997-7.695,11.68-15.463,16.931-23.696c6.393-10.025,12.235-20.373,18.104-30.707C82.004,24.988,84.802,20.601,87,16'],
		circle : ['M34.745,7.183C25.078,12.703,13.516,26.359,8.797,37.13 c-13.652,31.134,9.219,54.785,34.77,55.99c15.826,0.742,31.804-2.607,42.207-17.52c6.641-9.52,12.918-27.789,7.396-39.713 C85.873,20.155,69.828-5.347,41.802,13.379'],
		boxfill : ['M6.987,4.774c15.308,2.213,30.731,1.398,46.101,1.398 c9.74,0,19.484,0.084,29.225,0.001c2.152-0.018,4.358-0.626,6.229,1.201c-5.443,1.284-10.857,2.58-16.398,2.524 c-9.586-0.096-18.983,2.331-28.597,2.326c-7.43-0.003-14.988-0.423-22.364,1.041c-4.099,0.811-7.216,3.958-10.759,6.81 c8.981-0.104,17.952,1.972,26.97,1.94c8.365-0.029,16.557-1.168,24.872-1.847c2.436-0.2,24.209-4.854,24.632,2.223 c-14.265,5.396-29.483,0.959-43.871,0.525c-12.163-0.368-24.866,2.739-36.677,6.863c14.93,4.236,30.265,2.061,45.365,2.425 c7.82,0.187,15.486,1.928,23.337,1.903c2.602-0.008,6.644-0.984,9,0.468c-2.584,1.794-8.164,0.984-10.809,1.165 c-13.329,0.899-26.632,2.315-39.939,3.953c-6.761,0.834-13.413,0.95-20.204,0.938c-1.429-0.001-2.938-0.155-4.142,0.436 c5.065,4.68,15.128,2.853,20.742,2.904c11.342,0.104,22.689-0.081,34.035-0.081c9.067,0,20.104-2.412,29.014,0.643 c-4.061,4.239-12.383,3.389-17.056,4.292c-11.054,2.132-21.575,5.041-32.725,5.289c-5.591,0.124-11.278,1.001-16.824,2.088 c-4.515,0.885-9.461,0.823-13.881,2.301c2.302,3.186,7.315,2.59,10.13,2.694c15.753,0.588,31.413-0.231,47.097-2.172 c7.904-0.979,15.06,1.748,22.549,4.877c-12.278,4.992-25.996,4.737-38.58,5.989c-8.467,0.839-16.773,1.041-25.267,0.984 c-4.727-0.031-10.214-0.851-14.782,1.551c12.157,4.923,26.295,2.283,38.739,2.182c7.176-0.06,14.323,1.151,21.326,3.07 c-2.391,2.98-7.512,3.388-10.368,4.143c-8.208,2.165-16.487,3.686-24.71,5.709c-6.854,1.685-13.604,3.616-20.507,4.714 c-1.707,0.273-3.337,0.483-4.923,1.366c2.023,0.749,3.73,0.558,5.95,0.597c9.749,0.165,19.555,0.31,29.304-0.027 c15.334-0.528,30.422-4.721,45.782-4.653'],
		swirl : ['M49.346,46.341c-3.79-2.005,3.698-10.294,7.984-8.89 c8.713,2.852,4.352,20.922-4.901,20.269c-4.684-0.33-12.616-7.405-14.38-11.818c-2.375-5.938,7.208-11.688,11.624-13.837 c9.078-4.42,18.403-3.503,22.784,6.651c4.049,9.378,6.206,28.09-1.462,36.276c-7.091,7.567-24.673,2.277-32.357-1.079 c-11.474-5.01-24.54-19.124-21.738-32.758c3.958-19.263,28.856-28.248,46.044-23.244c20.693,6.025,22.012,36.268,16.246,52.826 c-5.267,15.118-17.03,26.26-33.603,21.938c-11.054-2.883-20.984-10.949-28.809-18.908C9.236,66.096,2.704,57.597,6.01,46.371 c3.059-10.385,12.719-20.155,20.892-26.604C40.809,8.788,58.615,1.851,75.058,12.031c9.289,5.749,16.787,16.361,18.284,27.262 c0.643,4.698,0.646,10.775-3.811,13.746'],
		diagonal : ['M16.053,91.059c0.435,0,0.739-0.256,0.914-0.768 c3.101-2.85,5.914-6.734,8.655-9.865C41.371,62.438,56.817,44.11,70.826,24.721c3.729-5.16,6.914-10.603,10.475-15.835 c0.389-0.572,0.785-1.131,1.377-1.521'],
		list : ['M1.986,8.91c41.704,4.081,83.952,5.822,125.737,2.867 c17.086-1.208,34.157-0.601,51.257-0.778c21.354-0.223,42.706-1.024,64.056-1.33c18.188-0.261,36.436,0.571,54.609,0.571', 'M3.954,25.923c9.888,0.045,19.725-0.905,29.602-1.432 c16.87-0.897,33.825-0.171,50.658-2.273c14.924-1.866,29.906-1.407,44.874-1.936c19.9-0.705,39.692-0.887,59.586,0.45 c35.896,2.407,71.665-1.062,107.539-1.188']
	}, animDefs = {
		cross : {
			speed : .2,
			easing : 'ease-in-out'
		},
		fill : {
			speed : .8,
			easing : 'ease-in-out'
		},
		checkmark : {
			speed : .2,
			easing : 'ease-in-out'
		},
		circle : {
			speed : .2,
			easing : 'ease-in-out'
		},
		boxfill : {
			speed : .8,
			easing : 'ease-in'
		},
		swirl : {
			speed : .8,
			easing : 'ease-in'
		},
		diagonal : {
			speed : .2,
			easing : 'ease-in-out'
		},
		list : {
			speed : .3,
			easing : 'ease-in-out'
		}
	};

	function createSVGEl(def) {
		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		if (def) {

			svg.setAttributeNS(null, 'viewBox', def.viewBox);
			svg.setAttributeNS(null, 'preserveAspectRatio', def.preserveAspectRatio);
		} else {
			svg.setAttributeNS(null, 'viewBox', '0 0 100 100');
		}
		svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
		return svg;
	}

	function clickCheckBox(objM4RadioButton, idItem, svg) {
		if (objM4RadioButton.options.itemTypes[idItem].disabled !== true) {
			if (svg.checked === false) {
				draw(svg, objM4RadioButton.options.checkBox);
			} else {
				reset(svg);
			}
		}
	}

	function controlCheckbox(objM4RadioButton, idItem, checked) {

		var svg = new Element('svg', {
			viewBox : '0 0 100 100'
		});

		svg.set('name', name);
		svg.set('typebox', 'checkBox');

		var rect = new Element('rect', {
			width : '100%',
			height : '100%'
		});

		svg.grab(rect);

		svg.addEventListener('click', function(idItem, svg) {
			clickCheckBox(objM4RadioButton, idItem, svg);
		}.bind(objM4RadioButton, idItem, svg));

		//initialize true
		if (checked === 1) {
			draw(svg, objM4RadioButton.options.checkBox);
		} else {
			svg.checked = false;
		}

		return svg;

	}

	function clickRadioBox(objM4RadioButton, idItem, svg) {
		if (objM4RadioButton.options.itemTypes[idItem].disabled !== true) {
			if (svg.checked === true) {
				if (objM4RadioButton.options.allowUnChecked === true) {
					resetRadio(svg);
				}
			} else {
				resetRadio(svg);
				draw(svg, objM4RadioButton.options.radioBox);
			}
		}
	}

	function controlRadiobox(objM4RadioButton, idItem, name, checked) {

		var svg = new Element('svg', {
			viewBox : '0 0 100 100'
		});

		svg.set('name', name);
		svg.set('typebox', 'radio');

		var circle = new Element('circle', {
			r : '45%',
			cx : '50%',
			cy : '50%'
		});

		svg.grab(circle);

		svg.addEvent('click', function(idItem, svg) {
			clickRadioBox(objM4RadioButton, idItem, svg);
		}.bind(objM4RadioButton, idItem, svg));

		//initialize true
		if (checked === 1) {
			resetRadio(svg);
			draw(svg, objM4RadioButton.options.radioBox);
		} else {
			svg.checked = false;
		}

		return svg;
	}

	function draw(svg, type) {

		svg.checked = true;

		var paths = [], pathDef, animDef;

		switch( type ) {
			case 'cross':
				pathDef = pathDefs.cross;
				animDef = animDefs.cross;
				break;
			case 'fill':
				pathDef = pathDefs.fill;
				animDef = animDefs.fill;
				break;
			case 'checkmark':
				pathDef = pathDefs.checkmark;
				animDef = animDefs.checkmark;
				break;
			case 'circle':
				pathDef = pathDefs.circle;
				animDef = animDefs.circle;
				break;
			case 'boxfill':
				pathDef = pathDefs.boxfill;
				animDef = animDefs.boxfill;
				break;
			case 'swirl':
				pathDef = pathDefs.swirl;
				animDef = animDefs.swirl;
				break;
			case 'diagonal':
				pathDef = pathDefs.diagonal;
				animDef = animDefs.diagonal;
				break;
			case 'list':
				pathDef = pathDefs.list;
				animDef = animDefs.list;
				break;
		};

		paths.push(new Element('path'));

		if (type === 'cross' || type === 'list') {
			paths.push(new Element('path'));
		}

		for (var i = 0, len = paths.length; i < len; ++i) {
			var path = paths[i];
			svg.grab(path);

			path.set('d', pathDef[i]);

			var length = path.getTotalLength();
			// Clear any previous transition
			//path.style.transition = path.style.WebkitTransition = path.style.MozTransition = 'none';
			// Set up the starting positions
			path.style.strokeDasharray = length + ' ' + length;
			if (i === 0) {
				path.style.strokeDashoffset = Math.floor(length) - 1;
			} else
				path.style.strokeDashoffset = length;
			// Trigger a layout so styles are calculated & the browser
			// picks up the starting position before animating
			path.getBoundingClientRect();
			// Define our transition
			path.style.transition = path.style.WebkitTransition = path.style.MozTransition = 'stroke-dashoffset ' + animDef.speed + 's ' + animDef.easing + ' ' + i * animDef.speed + 's';
			// Go!
			path.style.strokeDashoffset = '0';
		}
	}

	function reset(el) {
		el.checked = false;
		el.getElements('path').forEach(function(path) {
			path.destroy();
		});
	}

	function resetRadio(svg) {

		var svgRadio = document.getElements('svg[typebox="radio"][name="' + svg.get('name') + '"]');

		svgRadio.forEach(function(el) {
			el.checked = false;
			el.fireEvent('reset');
			el.getElements('path').forEach(function(path) {
				path.destroy();
			});
		});

	}

	return {
		controlCheckbox : controlCheckbox,
		controlRadiobox : controlRadiobox,
		clickRadioBox : clickRadioBox,
		clickCheckBox : clickCheckBox
	};

})();

// extension
(function(svgtags) {
	var ns = 'http://www.w3.org/2000/svg', methods = (function(proto, cls) {
		var hash = {};
		for (var f in proto) {
			if (cls.hasOwnProperty(f)) {
				hash[f] = proto[f];
			}
		}
		return hash;
	})(Element.prototype, Element);

	svgtags.each(function(tag) {
		Element.Constructors[tag] = function(props) {
			return (Object.append(document.createElementNS(ns, tag), methods).set(props));
		};
	});

})(['svg', 'path', 'circle', 'rect']);


