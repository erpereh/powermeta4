/*
 @(#)FileVersion: 811.000.025
 @(#)FileDescription: 
 @(#)CompanyName: Meta4 Spain, S.A.
 @(#)LegalCopyright: (c)2014
 @(#)ProductName: PeopleNet KSystem
 @(#)ProductVersion: 8.1SP1
 @(#)InternalName: select.js
 @(#)Date: 01/01/2014
 */

//@ sourceURL=meta4.widget.select.js
/*global $, $$, Element*/
/*
 ---
 description: A non-obtrusive image dropdown menu that extends and replaces a standard HTML Select control.

 license: MIT-style

 authors:
 - Lorenzo Stanco

 requires:
 - core/1.4.1: '*'

 provides: [FancySelect]

 ...
 */
var meta4 = meta4 || {};

meta4.widget = meta4.widget || {};

var FancySelect = new Class({

	Implements : [Options, Events],

	options : {
		legacyEvents : false,		
		showText : true,
		showImages : true,
		className : '',
		offset : {
			x : 0,
			y : 0
		},
		autoHide : true,
		autoScrollWindow : false,
		animateFade : true,
		animateSlide : true,
		fx : {
			'duration' : 'short'
		},
		onRenderOption : function(that, o, option, value) {
			var li = new Element('li', {
				'data-value' : value
			});
			if (option.disabled)
				li.addClass('disabled');
			if (o.showImages && option.image)
				li.adopt(new Element('img.image', {
					'src' : option.image,
					'alt' : option.alt
				}));
			if (o.showText && option.text)
				li.adopt(new Element('span.text', {
					'html' : option.text
				}));
			li.addEvent('click', function() {
				if (li.hasClass('disabled'))
					return;
				that.select(li.getProperty('data-value'));
				that.hide();
			}.bind(that));
			that.ul.adopt(li);
		}
	},

	initialize : function(element, options) {'use strict';

		this.setOptions(options);
		this.options.className = this.options.className + ' ' + 'meta4-widget-select';
		/*if (!Fx.Slide)*/
		this.options.animateSlide = false;
		// Need review
		this.element = document.id(element);
		this.element.store('fancyselect_object', this);
		this._create();
		this.attach();

		// Auto-scroll when FancySelect is out of viewport
		if (this.options.autoScrollWindow)
			this.addEvent('show', function() {
				var windowScroll = window.getScroll();
				var overflow = this.ul.getPosition().y + this.ul.getSize().y - window.getSize().y - windowScroll.y;
				if (overflow > 0)
					window.scrollTo(windowScroll.x, windowScroll.y + overflow + 10);
			});

		// Auto-hide the dropdown menu when user clicks outside
		if (this.options.autoHide)
			document.addEvent('click', function(e) {
				if (!this.shown)
					return;
				var target = document.id(e.target);
				var parents = target.getParents().include(target);
				if (!parents.contains(this.ul) && !parents.contains(this.div))
					this.hide();
			}.bind(this));

		return this;

	},

	attach : function() {'use strict';

		this.element.setStyle('display', 'none');

		var currentValue = this.element.get('value');
		if (currentValue) {
			this.select(currentValue);
			// Select current item

			if (Browser.ie)
				window.addEvent('load', function() {
					this.select(currentValue);
				}.bind(this));
			// IE refresh fix
		}

		this.ul.fade('hide').inject(document.id(document.body));
		this.div.inject(this.element, 'after');
		this.attached = true;
		this.fireEvent('attach');
		return this;
	},

	detach : function() {'use strict';
		if (this.ul)
			this.ul.dispose();
		if (this.div)
			this.div.dispose();
		this.element.setStyle('display', '');
		this.attached = false;
		this.fireEvent('detach');
		return this;
	},

	select : function(value) {'use strict';

		// Update hidden <select>
		if (this.element.get('value') != value) {
			this.element.set('value', value);

			// Throw "change" event
			if (this.options.legacyEvents) {
				this.element.fireEvent('change');
				this.element.getParents().fireEvent('change');
			}

		}

		if (this.options.showText)
			this.div.getElement('span.text').set('html', this.selectOptions[value].text);
		if (this.options.showImages)
			this.div.getElement('img.image').setProperties({
				'src' : this.selectOptions[value].image,
				'alt' : this.selectOptions[value].alt
			});
		if (this.ul) {
			this.ul.getElements('li').each(function(li) {
				if (li.getProperty('data-value') == value)
					li.addClass('selected');
				else
					li.removeClass('selected');
			});
		}
		return this;
	},

	update : function() {'use strict';
		var attached = this.attached;
		this.detach();
		this._create();
		// Re-create
		if (attached)
			this.attach();
		// Re-attach if needed
		return this;
	},

	show : function() {'use strict';
		var offset = this.options.offset;
		var position = this.div.getCoordinates();
		this.ul.setStyles({
			'top' : position.top + position.height + offset.y,
			'left' : position.left + offset.x - 10
		});
		this._animate(false);
		this.shown = true;
		this.fireEvent('show');
		return this;
	},

	hide : function() {'use strict';
		this._animate(true);
		this.shown = false;
		this.fireEvent('hide');
		return this;
	},

	toggle : function() {'use strict';
		if (this.shown)
			return this.hide();
		else
			return this.show();
	},

	_create : function() {'use strict';

		var o = this.options;

		if (this.ul)
			this.ul.destroy();
		if (this.div)
			this.div.destroy();

		// Create options array
		this.selectOptions = {};
		this.element.getElements('option').each( function(option) {
			var value = option.getProperty('value');
			this.selectOptions[value] = {};
			if (option.get('disabled'))
				this.selectOptions[value].disabled = true;
			if (o.showText)
				this.selectOptions[value].text = option.get('html');
			if (o.showImages) {
				this.selectOptions[value].image = option.getProperty('data-image');
				this.selectOptions[value].alt = option.getProperty('data-alt');
			}
		}.bind(this));

		// Create <li> elements
		this.ul = new Element('ul').addClass(o.className);
		Object.each(this.selectOptions, function(option, value) {

			this.fireEvent('onRenderOption', [this, o, option, value]);

		}.bind(this));

		// Force <ul> custom positioning
		this.ul.setStyles({
			position : 'absolute',
			top : 0,
			left : 0
		});
		if (o.animateFade)
			this.ul.set('tween', o.fx);
		if (o.animateSlide)
			this.ul.set('slide', o.fx);

		// Create <div> replacement for select
		this.div = new Element('div').addClass(o.className);
		if (o.showImages)
			this.div.adopt(new Element('img.image'));
		if (o.showText)
			this.div.adopt(new Element('span.text'));
		this.div.adopt(new Element('span.arrow'));
		this.div.addEvent('click', function() {
			this.toggle();
		}.bind(this));

		/**		var onMouseOut = function(event) {

		 var relatedTarget = event.relatedTarget;
		 if (!relatedTarget) {
		 relatedTarget = event.toElement;
		 }

		 if (!relatedTarget){
		 this.hide();
		 }else if (!relatedTarget.closest(this.ul) && !relatedTarget.closest(this.div)){
		 this.hide();
		 }
		 };

		 //0256278
		 this.div.addEvent('mouseout', onMouseOut.bind(this));

		 this.ul.addEvent('mouseout', onMouseOut.bind(this));*/

		if (this.options.showText) {
			this.div.getElement('span.text').set('html', '');
			//this.div.getElement('span.text').set('html', meta4.widget.translate.getTranslate('_gen_no_data_available'));
		}

		return this;

	},

	_animate : function(out) {'use strict';
		var o = this.options;
		if (o.animateFade)
			this.ul.fade( out ? 'out' : 'in');
		if (o.animateSlide)
			this.ul.slide( out ? 'out' : 'in');
		if (!o.animateFade && !o.animateSlide)
			this.ul.fade( out ? 'hide' : 'show');
		return this;
	}
});

Elements.implement({

	fancySelect : function(options) {
		this.each(function(el) {
			new FancySelect(el, options);
		});
		return this;
	}
});

Element.implement({

	fancySelect : function(options) {
		this.objectFancySelect = new FancySelect(document.id(this), options);
		return this;
	}
	/*
	 fancySelectShow: function() {
	 var fs = this.retrieve('fancyselect_object');
	 if (fs) fs.show(this);
	 return this;
	 },

	 fancySelectHide: function() {
	 var fs = this.retrieve('fancyselect_object');
	 if (fs) fs.hide(this);
	 return this;
	 },

	 fancySelectToggle: function() {
	 var fs = this.retrieve('fancyselect_object');
	 if (fs) fs.toggle(this);
	 return this;
	 }*/

});

Element.Properties.fancySelect = {

	get : function() {
		return this.retrieve('fancyselect_object');
	}
};

meta4.widget.TRSelect = new Class({

	Implements : [Options, Events],

	//original select
	_select : null,

    //Node Id
	_trNodeId : null,

	//Objetos canal y nodo
	_trMeta4Object : null,
	_trNode : null,

    //Items de los que sacar los datos
    _visibleItems: null,
    
	//Default options
	options : {

		className : null,
		optionRender : Class.empty,
		onRowClick : Class.empty,
		onDraw : Class.empty,
		preload : true,
		optionsSelect : null, // son los valores del select que va a pintar
        
        itemTypes :null, //Array de elementos por opción [ITEMID1, ITEMID2,...]
		//Properties to filter de Meta4Object
		filteredM4 : {
			pkItems : [],
			meta4Object : null,
			rootNode : null,
			onMoveM4 : null
		}
	},

	initialize : function(element, options) {'use strict';

		//extiendo las opciones que no tenga
		this.setOptions(options);

		this._select = $(element);

		this._select.setStyle('display', 'none');

	},

	/**
	 *    Call the ZOOM method of the root node of the document meta4object,
	 * filtered by pkItems values.
	 *
	 */
	doCallZoom : function() {'use strict';

		/*
		 var onDocumentFiltered = function(request) {

		 var ipos = parseInt(request.getResult(), 10);
		 this.options.filteredM4.meta4Object.getNode(this.options.filteredM4.rootNode).moveTo(ipos);

		 if (this.options.filteredM4.onMoveM4 != null) {
		 this.options.filteredM4.onMoveM4();
		 }

		 };

		 var zoomArguments = [];

		 var pkItems = this.options.filteredM4.pkItems;

		 //ARG_SEC_TI = null, firt argument for zoom method.
		 zoomArguments.push('');
		 var i;
		 for ( i = 0; i < pkItems.length; i++) {
		 var pkValue = _trNode.getValue(pkItems[i]);
		 zoomArguments.push(pkValue);
		 }
		 var request = new meta4.M4Request(this.options.filteredM4.meta4Object, this.options.filteredM4.rootNode, 'ZOOM', zoomArguments);
		 meta4.data.execute(request, onDocumentFiltered);
		 */
	},

	getCurrentData : function() {'use strict';
		var data = {};

		var values = {};
		var value;
		var i;
		
        for ( i = 0; i < this._visibleItems.length; i++) {
            value = this._trNode.getValue(this._visibleItems[i]);

            values[this._visibleItems[i]] = value;
        }
        
		data.values = values;

		return data;
	},

	_fireEventsOnReady : function() {

		this.fireEvent('onDraw', this._select.getElement(':selected'));

		this._select.addEvent('change', function() {

			//Raise onRowClick
			this.fireEvent('onRowClick', this._select.getElement(':selected'));

		}.bind(this));
	},

	_dofancy : function() {'use strict';

		if (this.options.optionRender === Class.empty) {
			this._select.fancySelect({
				showText : true,
				showImages : false,
				legacyEvents : true,
				className : this.options.className
			});
		} else {
			this._select.fancySelect({
				showText : true,
				showImages : false,
				legacyEvents : true,
				className : this.options.className,
				onRenderOption : this.options.optionRender
			});
		}
	}.protect(),

	_drawSelect : function() {'use strict';

		var i, j;
		var option;

		this._select.empty();

		if (this._trNode.count() !== 0) {
			var current = this._trNode.getCurrent();

			for ( i = 0, j = this._trNode.count(); i < j; i++) {

				this._trNode.moveTo(i);

				//Obtenemos los datos de los items visibles del registro actual
				var data = this.getCurrentData();
				var dataString = JSON.stringify(data);

				//Este es el valor del primer item visible
				var key = Object.keys(data.values)[0];
				var optionText = data.values[key];

				option = new Element('option', {
					'value' : i,
					'm4Data' : dataString,
					'data-m4pos' : i,
					'html' : optionText
				});

				if (i === 0) {
					option.set('selected', 'selected');
				}

				this._select.grab(option);

			}
		} else {
			//No hay registros
			/*option = new Element('option', {
			 'value': 0,
			 'm4Data': '',
			 'data-m4pos': 0,
			 text: 'No data'
			 });

			 option.set('selected', 'selected');

			 this._select.grab(option);*/

		}

		//Fancy selects: http://tutorialzine.com/2011/02/converting-jquery-code-plugin/
		//jQuery('select.makeMeFancy')

		//this._dofancy();

		var selectOptions = {};

		if (this.options.className !== null) {

			selectOptions.className = this.options.className;
			if (this.options.optionRender !== null) {
				selectOptions.render = this.options.optionRender;
			}
		}

		if (this.options.optionRender === Class.empty) {
			this._select.fancySelect({
				showText : true,
				showImages : false,
				legacyEvents : true,
				className : this.options.className
			});
		} else {
			this._select.fancySelect({
				showText : true,
				showImages : false,
				legacyEvents : true,
				className : this.options.className,
				onRenderOption : this.options.optionRender
			});
		}

		if (this._trNode.count() > 0) {
			if (current === -1) {
				this._trNode.moveTo(0);
				this._select.set('selectedIndex', '0');
			} else {
				this._trNode.moveTo(current);
				this._select.set('selectedIndex', current);
				this._select.objectFancySelect.select(current);
			}
		}

		this.fireEvent('onDraw', this._trMeta4Object);

		this._select.addEvent('change', function() {

			if (this._trNode !== undefined && this._trNode.count() > 0) {

				var position = this._select.getElement(':selected').get('data-m4pos');
				this._trNode.moveTo(parseInt(position, 10));

				//Raise onRowClick
				this.fireEvent('onRowClick', this._trMeta4Object);

				if (this.options.filteredM4.meta4Object !== undefined) {
					this.doCallZoom();
				}
			}
		}.bind(this));

	},

	onLoadTr : function(request) {'use strict';

		this._drawSelect();
	},

	trMeta4Object : function() {'use strict';
		return this._trMeta4Object;
	},

	draw : function(trMeta4Object, nodeId) {'use strict';

		if (this.options.optionsSelect !== null) {
			//si queremos pintar el select con los datos que ya tiene y no obtenerlos del canal
			this.drawOptions();
		} else {
		    
			this._trMeta4Object = trMeta4Object;
			this._trNodeId = nodeId;
			this._trNode = trMeta4Object.getNode(nodeId);
			
			if (this.options.itemTypes){
                this._visibleItems = this.options.itemTypes;
            }else{
                this._visibleItems = meta4.data.utils.getVisibleItems(this._trNode);
            }

			if (this.options.preload === true) {
				var requestTr = new meta4.M4Request(trMeta4Object, nodeId, 'LOAD_BLK', null);
				meta4.data.execute(requestTr, this.onLoadTr.bind(this));
			} else {
				this._drawSelect();
			}
		}

	},

	drawOptions : function() {'use strict';

        var i;
        var option;
		var selectOptions = this.options.optionsSelect;

		this._select.empty();
		for (i = 0; i < selectOptions.length; i++) {					
			this._select.grab(selectOptions[i]);
		}

		this._dofancy();

		this._fireEventsOnReady();
	}
});

/*meta4.widget.Option = function(value, text,selected) {'use strict';
	this.value = value;
	this.text = text;
};*/

