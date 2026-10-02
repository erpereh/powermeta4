/*global $, $$, Element,Class, Options, Events*/

//@ sourceURL=meta4.widget.blind.js

var meta4 = meta4 || {};

meta4.widget = meta4.widget || {};

meta4.widget.blind = new Class({

	//implements class Options and Evento (mootools)
	Implements : [Options, Events],
	_channel : null,
	_element : null,
	_fx : null,
	_sortable : null,
	_openedOrClosed : null,	
	_lastOrder : null,
	_mainUl : null,
	_allowClick : true,

	options : {},

	createli : function(li, options) {

		var isThisSectionVisible = options.isVisible;

		if ((isThisSectionVisible != 0) && (isThisSectionVisible != 1)) {
			isThisSectionVisible = 1;
		}

		if (isThisSectionVisible == 1) {
			li.set('hide', 0);
		} else {
			li.set('hide', 1);
		}

		var div1 = new Element('div', {
			'class' : 'm4-blind-div1'
		});
		var div2 = new Element('div', {
			'class' : 'm4-blind-div2'
		});

		var img = new Element('img', {
			'class' : 'm4-blind-img',
			'src' : options.icon

		});
		var lbl = new Element('label', {
			'html' : options.text,
			'class' : 'm4-blind-lbl'
		});

		if (isThisSectionVisible == 1) {
			var imgadd = new Element('img', {
				'src' : '/iconos/circleOn.svg',
				'class' : 'imgAction imgActionDashBoard'
			});
		} else {
			var imgadd = new Element('img', {
				'src' : '/iconos/circleOff.svg',
				'class' : 'imgAction imgActionDashBoard'
			});
		}
		imgadd.setStyle('float', 'right');

		var buttonadd = new Element('button', {
			'class' : 'm4-blind-buttonadd'
		});

		imgadd.addEvent('click', function(options, event) {

			event.stop();

			$(options.parentpanel).setStyle('visibility', 'hidden');

			var visibilityToSet = li.get('hide');

			if (li.get('hide') === '1') {

				//$(options.panel).setStyle('height', $(options.panel).getStyle('heightOriginal'));
				$(options.panel).setStyle('height', 'auto');

				li.set('hide', 0);
				imgadd.set('src', '/iconos/circleOn.svg');
			} else {
				li.set('hide', 1);
				imgadd.set('src', '/iconos/circleOff.svg');
			}

			this.fireEvent('changeVisibility', {
				element : li,
				visibility: visibilityToSet,
				blind : this
			});
			
			var collapseHeaderEffect = new Fx.Reveal($(options.panel), {
				duration : meta4.session.Animation.getAnimationTime(),
				link : 'cancel',
				transition : Fx.Transitions.Pow.easeOut
			});

			//collapseHeaderEffect.toggle();

			if (li.get('hide') === '1') {
				collapseHeaderEffect.dissolve();
			} else {
				collapseHeaderEffect.reveal();
			}

			$(options.parentpanel).setStyle('visibility', 'visible');

		}.bind(this, options));

		div1.grab(img);
		div2.grab(lbl);
		div2.grab(imgadd);

		li.adopt(div1, div2);

		if (options.onclick) {
			li.addEvent('click', function(onclick) {
				//this.fireEvent(onclick);
				if (this._allowClick) {
					onclick();
				}
				this._allowClick = true;
			}.bind(this, options.onclick));
		}
	},

	getOrder : function(ul) {
		var lis = ul.getElements('li');
		var i = 0;
		var order = [];
		for ( i = 0; i < lis.length; i++) {
			order.push(lis[i].get('m4-start-pos'));
		}
		return order;
	},

	isChangedOrder : function(newOrder) {
		var i;
		for ( i = 0; i < newOrder.length; i++) {
			if (newOrder[i] !== this._lastOrder[i]) {
				return true;
			}
		}
		return false;
	},

	createBlind : function() {

		this._mainUl = new Element('ul', {
			'class' : 'm4-blind-ul ' + this.options['class']
		});

		// option menu
		var count;
		for ( count = 0; count < this.options.rows.length; count++) {

			var li = new Element('li', {
				'id' : '_' + this.options.rows[count].panel,
				'class' : 'm4-blind-li csort ' + this.options.rows[count].class,
				'hide' : '0',
				'index' : count				
			});

			this.createli(li, {
				'text' : this._channel.getNode(this.options.rows[count].nodeId).getNodeMetadata().getProperty("Name"),
				'icon' : this.options.rows[count].icon,
				'onclick' : this.options.rows[count].onclick,
				'parentpanel' : this.options.panel,
				'panel' : this.options.rows[count].panel,
				'isVisible' : this.options.rows[count].isVisible				
			});

			li.set('m4-start-pos', count);

			this._mainUl.grab(li);
			var ul = this._mainUl;
			if (this.options.rows[count].submenu) {

				var subul = new Element('ul', {
					'class' : 'm4-blind-ul ' + this.options.rows[count].submenu.class
				});

				// options submenu
				for ( i = 0; i < this.options.rows[count].submenu.rows.length; i++) {

					var subli = new Element('li', {
						'class' : 'm4-blind-li ' + this.options.rows[count].submenu.rows[i].class
					});

					this.createli(subli, {
						'text' : this._channel.getNode(this.options.rows[count].nodeId).getElementMetadataById(this.options.rows[count].submenu.rows[i].item).getProperty('Name'),
						'icon' : this.options.rows[count].submenu.rows[i].icon,
						'onclick' : this.options.rows[count].submenu.rows[i].onclick,
						'panel' : this.options.rows[count].submenu.rows[i].panel
					});

					subul.grab(subli);
				}

				// option back
				var subli = new Element('li', {
					'class' : 'm4-blind-li ' + this.options.rows[count].submenu.rows[i - 1].class
				});
				this.createli(subli, {
					'text' : 'Volver a la principal',
					'icon' : '/iconos/flecha_azul2_ess_11_9.png'
				});

				subul.grab(subli);

				subli.addEvent('click', function() {
					//$('ulmenu').setStyle('display', 'block');
					ul.setStyle('display', 'block');
					subul.setStyle('display', 'none');
				});

				li.addEvent('click', function() {
					//$('ulmenu').setStyle('display', 'none');
					ul.setStyle('display', 'none');
					subul.setStyle('display', 'block');
				});

				subul.setStyle('display', 'none');
				this._element.adopt(subul);
			}
		}
		this._element.adopt(this._mainUl);

		// div que contiene todos los panelsdiv intercambiables
		var panelsdiv = $(this.options.panel).getChildren('div');

		// guardo el height original de cada panelsdiv para restaurarlo cuando se hace visible
		//for (index=0;index<panelsdiv.length;index++){
		//	var element = panelsdiv[index];
		//	element.setStyle('heightOriginal', element.getStyle('height'));
		//}

		// effect sort
		var efecto = new Fx.Sort(panelsdiv, {
			duration : meta4.session.Animation.getAnimationTime(),
			mode : "vertical",
			transition : "linear"
		});

		// sortable list
		var channel = this._channel;
		var that = this;
		_sortable = new Sortables(this._mainUl, {
			'dragOptions' : {
				'onDrop' : function(a, b) {
					if (this.mouse.start.x !== this.mouse.now.x || this.mouse.start.y !== this.mouse.now.y) {
						that._allowClick = false;
					} else {
						that._allowClick = true;
					}
				},
			},			
			'clone' : true,
			'opacity' : 0.7,
			'onComplete' : function(e, object) {

				var newOrder = that.getOrder(that._mainUl);
				if (that.isChangedOrder(newOrder) === true) {
					that._lastOrder = newOrder;
					var elementsBlind = null;
					var index = 0;

					var divSectionConfiguredId = e.getProperty('id');

					// obtengo el nuevo orden después de arrastrar un elemento del blind
					elementsBlind = this.serialize(0);
					var orden = new Array();
					var newOrder;
					for ( index = 0; index < elementsBlind.length; index++) {
						var element = $(elementsBlind[index]);
						var thisElementId = elementsBlind[index];
						if (thisElementId == divSectionConfiguredId) {
							newOrder = index + "";
						}
						orden[index] = parseInt(element.get('index'));
					}

					// con display a none fuerzo el height de cada panelsdiv a 0px
					for ( index = 0; index < panelsdiv.length; index++) {
						var element = panelsdiv[index];
						if (element.getStyle('display') === 'none') {
							element.setStyle('height', '0px');
						}
					}

					// provoco el efecto y a continuación cambio los divs dentro del DOM
					efecto.sort(orden).chain(function() {
						efecto.rearrangeDOM(orden);
					});

					// asi no provoco efecto y solo cambio los divs dentro del DOM
					//efecto.rearrangeDOM(orden);

					// reordeno la propiedad index de los elementos del blind con el nuevo orden
					elementsBlind = that._mainUl.getChildren('li');
					for ( index = 0; index < elementsBlind.length; index++) {
					var element = $(elementsBlind[index]);
						element.set('index', index);
					}

					that.fireEvent('sort', {
						element : e,
						blind : that
					});

				}
			}
		});
	},

	open : function() {
		//if (this.options.floating){
		//	var top = window.pageYOffset || document.documentElement.scrollTop;
		//	this._element.setStyle('top', top);
		//}
		this._fx.toggle();
		this._openedOrClosed = 1;
	},

	close : function() {
		this._fx.toggle();
		this._openedOrClosed = 0;
	},

	initialize : function(channel, options) {'use strict';

		
		this._channel = channel;
		this._openedOrClosed = 0;

		this.setOptions(options);

		this._element = new Element('div');
		this._element.addClass('m4-blind-box');

		this.createBlind();

		this._lastOrder = this.getOrder(this._mainUl);

		// arrow close
		var divclose = new Element('div', {
			'class' : 'm4-blind-divclose'
		});
		var imgClose = new Element('img', {
			'src' : '/iconos/arrow_up.png',
			'class' : 'imgAction m4-blind-imgclose'
		});
		imgClose.addEvent('click', function() {
			this.close();
		}.bind(this));
		divclose.grab(imgClose);
		this._element.grab(divclose);

		// effect box
		this._fx = new Fx.Reveal(this._element, {
			duration : meta4.session.Animation.getAnimationTime(),
			transition : Fx.Transitions.Quad.easeInOut,
			mode : 'vertical'
		});
		this._element.setStyle('display', 'none');

		// Esta sección de configuración se va a insertar en el DOM, dentro de la sección parent que ha entrado como parámetro al componente
		var pageBody = document.getElementById(this.options.panel);
		pageBody.grab(this._element);

		$$('label').addEvent('mouseover', function(event) {
			var element = event.target;
			if (element.offsetWidth < element.scrollWidth)
				element.set('title', element.get('text'));
			else
				element.set('title', '');
		});

		//if (this.options.floating){
		//	window.addEvent('scroll',function(e) {
		//		var top = window.pageYOffset || document.documentElement.scrollTop;
		//		this._element.setStyle('top', top);
		//	}.bind(this));
		//}
	}
});
