/*
 @(#)FileVersion: 811.000.025
 @(#)FileDescription: 
 @(#)CompanyName: Meta4 Spain, S.A.
 @(#)LegalCopyright: (c)2014
 @(#)ProductName: PeopleNet KSystem
 @(#)ProductVersion: 8.1SP1
 @(#)InternalName: titlebar.js
 @(#)Date: 01/01/2014
 */

/*global $, $$, Element,Class, Options, Events*/

var meta4 = meta4 || {};

meta4.widget = meta4.widget || {};

meta4.widget.titlebar = new Class({

	//implements class Options and Evento (mootools)
	Implements : [Options, Events],
	_channel : null,
	_element : null,

	options : {},

	lock : function() {'use strict';
		var elements = $$('.m4-titleBar div, .m4-titleBar img, .m4-titleBar select, .m4-titleBar button, .m4-titleBar label, .m4-titleBar input');

		Array.each(elements, function(element, index) {
		    element.addClass('noHover');
			element.removeClass('imgAction');
			element.removeEvents();
		});
		//$('divNoData').setStyle('display','block');
	},

	/* title: identificador del div donde queremos construir la barra */
	/* channel: identificador del canal, solo para elementos de tipo SELECT y SHOWINFO */
	/* options: array de opciones para construir la barra */
	initialize : function(titlebar, options) {'use strict';

		this._channel = options.meta4object;
		this._element = $(titlebar);
		this._element.addClass('m4-titleBar');
		delete options.meta4object;

		this.setOptions(options);

		this.options = options;

		/* contiene la barra */
		var divContent = new Element('div', {
			'class' : 'm4-titleBar-content'
		});

		/* contiene el panel de información */
		var divInfo = new Element('div', {
			'id' : 'panelInfo',
			'class' : 'm4-titleBar-panelInfo'
		});

		var imgClose = new Element('img', {
			'id' : 'closeInfo',
			'class' : 'm4-titleBar-closeInfo',
			'src' : meta4.widget.icons.close_panel
		});

		divInfo.grab(imgClose);

		this._element.adopt(divContent, divInfo);
		//this._element.adopt(divContent);
		//divInfo.inject(this._element,'after');

		var count;
		for ( count = 0; count < this.options.elements.length; count++) {

			/* elementos de tipo HELP */
			if (this.options.elements[count].type == 'help') {
				var imgHelp = new Element('img', {
					'id' : 'pageHelp',
					'class' : 'm4tooltip',
					'src' : meta4.widget.icons.info,
					'title' : this.options.elements[count].tooltip
				});
				divContent.adopt(new Element('div', {
					'class' : 'verticalCenter'
				}).grab(imgHelp));
			}
			/* elementos de tipo TITLE */
			if (this.options.elements[count].type == 'title') {
				var lblTitle = new Element('label', {
					'id' : 'pageTitle',
					'html' : this.options.elements[count].text
				});
				divContent.adopt(new Element('div', {
					'class' : 'verticalCenter'
				}).grab(lblTitle));
			}
			/* elementos de tipo ICON */
			if (this.options.elements[count].type == 'icon') {
				var img = new Element('img', {
					'id' : this.options.elements[count].id,
					'class' : 'imgIcon imgAction',
					'src' : this.options.elements[count].img,
					'title' : this.options.elements[count].tooltip
				});
				img.addEvent('click', this.options.elements[count].onClick);
				divContent.adopt(new Element('div', {
					'class' : 'verticalCenter'
				}).grab(img));
			}
			/* elementos de tipo BUTTON */
			if (this.options.elements[count].type == 'button') {

				var button;
				if (this.options.elements[count].options) {
					button = new Element('button', this.options.elements[count].options);
					button.addClass('button-fast-lane');
				} else {
					button = new Element('button', {
						'id' : this.options.elements[count].id,
						'class' : 'button-fast-lane',
						'text' : this.options.elements[count].text
					});
					button.addEvent('click', this.options.elements[count].onClick);
				}

				divContent.adopt(new Element('div', {
					'class' : 'verticalCenter'
				}).grab(button));

			}
			/* elementos de tipo SELECT */
			if (this.options.elements[count].type == 'select') {

				/* la colección de opciones de este elemento se corresonden con las opciones del meta4.widget.select */
				var optionselect = this.options.elements[count].options;
				var comboSelect;
				if (optionselect.id) {
					comboSelect = new Element('select', {
						'id' : optionselect.id
					});
				} else {
					comboSelect = new Element('select');
				}

				divContent.adopt(new Element('div', {
					'class' : 'verticalCenter'
				}).grab(comboSelect));

				var combo = new meta4.widget.TRSelect(comboSelect, optionselect);
				combo.draw(this._channel, this.options.elements[count].nodeId);
			}
			/* elementos de tipo SHOWINFO */
			if (this.options.elements[count].type == 'showInfo') {

				//this._element.set('data-m4context', 'context-m4-titlebar');
				//this._element.set('data-m4t3', this._channel.getId());
				divInfo.set('data-m4context', 'context-m4-titlebar');
				divInfo.set('data-m4t3', this._channel.getId());
				divInfo.set('data-m4node', this.options.elements[count].nodeId);

				var panelHide = true;

				/* la colección de opciones de este elemento se corresonden con las opciones del meta4.widget.button */
				var optionbutton = {
					'pressed' : true,
					'textPressed' : meta4.widget.translate.getTranslate('_g3_hideInfo'),
					'imgPressed' : meta4.widget.icons.minus_green,
					'functionClick' : function() {
						if (panelHide) {
							myFx.reveal();
							panelHide = false;
						} else {
							myFx.dissolve();
							panelHide = true;
						}
					}
				};

				var divButton = new meta4.widget.Button(meta4.widget.translate.getTranslate('_g3_showInfo'), meta4.widget.icons.plus, optionbutton);
				divContent.adopt(new Element('div', {
					'class' : 'verticalCenter'
				}).grab(divButton.container));

				var animationTime = meta4.session.Animation.getAnimationTime();

				var myFx = new Fx.Reveal($('panelInfo'), {
					duration : animationTime,
					link : 'cancel',
					transition : Fx.Transitions.Pow.easeOut,
					onComplete:function(){
						var heightHeader = $('header').getSize().y;						
						$('content').setStyle('height',document.body.getSize().y -heightHeader);
					}
				});

				$('closeInfo').addEvent('click', function() {
					this.container.fireEvent('click');
				}.bind(divButton));

				if (this.options.elements[count].info !== undefined) {
				    
					var i;
					
					var currentElement = this.options.elements[count];
					
					for ( i = 0; i < currentElement.info.length; i++) {

						var pInfo = new Element('p', {
							'data-m4item' : currentElement.info[i].item,
							'class' : currentElement.info[i]['class']
						});
						divInfo.adopt(pInfo);
					}
				}
			}
			/* elementos de tipo SEPARATOR */
			if (this.options.elements[count].type == 'separator') {
				divContent.adopt(new Element('div', {
					'class' : 'sepVertical'
				}));
			}
			/* elementos de tipo SEARCH */
			if (this.options.elements[count].type == 'search') {
				var searchBox = new Element('input', {
					'id' : 'm4-titleBar-search',
					'class' : 'm4-placeHolder-icon m4-placeHolder m4-titleBar-search',
					'title' : this.options.elements[count].tooltip
				});
				searchBox.m4PlaceHolder(this.options.elements[count].hint, {
					'search' : true
				});
				searchBox.addEvent('keyup', this.options.elements[count].onKey);
				divContent.adopt(new Element('div', {
					'class' : 'verticalCenter'
				}).grab(searchBox));
			}
			/* elementos de tipo WIDGETBUTTON */
			if (this.options.elements[count].type == 'widgetbutton') {

				/* la colección de opciones de este elemento se corresonden con las opciones del meta4.widget.button */
				var optionbutton = this.options.elements[count].options;

				var textButton = this.options.elements[count].text;
				if (!textButton) {
					textButton = '';
				}
				var divButton = new meta4.widget.Button(textButton, this.options.elements[count].img, optionbutton);
				divContent.adopt(new Element('div', {
					'class' : 'verticalCenter'
				}).grab(divButton.container));
			}
			/* elementos de tipo Anchor */
			if (this.options.elements[count].type == 'anchor') {

				var anchorOptions = this.options.elements[count].options;

				var anchor = new Element('a', anchorOptions);

				divContent.adopt(new Element('div', {
					'class' : 'verticalCenter'
				}).grab(anchor));
			}
			/* elementos de tipo object */
			if (this.options.elements[count].type == 'object') {
				var object = this.options.elements[count].object;

				divContent.grab(object);
			}			
		}

		/* para los elementos SHOWINFO se genera dinámicamente un contexto, aqui hacemos el parse y el update */
		meta4.data.context.parseContext();
		meta4.data.context.setChannelContext('context-m4-titlebar', this._channel);
		meta4.widget.binding.update('context-m4-titlebar');

		/* panel para cuando no hay datos*/
		/*
		 var divNoData = new Element('div', {
		 'id' : 'divNoData',
		 styles : {
		 id: 'divNoData',
		 position : 'absolute',
		 top : '40px',
		 bottom : '0px',
		 left : '0px',
		 right : '0px',
		 zIndex : '9999999',
		 display : 'none',
		 textAlign : 'center',
		 backgroundColor : 'white'
		 }
		 });
		 var divNoData2 = new Element('div', {
		 'id' : 'divNoData2',
		 styles : {
		 padding: '30% 0'
		 }
		 });
		 var noData = new Element('label',{
		 text: meta4.widget.translate.getTranslate('_gen_no_data_available')
		 });
		 divNoData.grab(divNoData2);
		 divNoData2.grab(noData);

		 $(document.body).grab(divNoData);
		 */
	}
});

//@ sourceURL=meta4.widget.titlebar.js
