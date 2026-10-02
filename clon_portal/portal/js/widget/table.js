/*
 @(#)FileVersion: 811.000.025
 @(#)FileDescription: 
 @(#)CompanyName: Meta4 Spain, S.A.
 @(#)LegalCopyright: (c)2014
 @(#)ProductName: PeopleNet KSystem
 @(#)ProductVersion: 8.1SP1
 @(#)InternalName: table.js
 @(#)Date: 01/01/2014
 */

/*global $, $$, Element,Class, Options, Events*/

var meta4 = meta4 || {};

meta4.widget = meta4.widget || {};

function m4sortBy(field, reverse, primer) {

	var key = primer ? function(x) {
		return primer(x[field]);
	} : function(x) {
		return x[field];
	};

	reverse = [-1, 1][+!!reverse];

	return function(a, b) {
		return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
	};
	// Sort by price high to low
	//homes.sort(sort_by('price', true, parseInt));

	// Sort by city, case-insensitive, A-Z
	//homes.sort(sort_by('city', false, function(a){return a.toUpperCase()}));

}

meta4.widget.TableBase = new Class({

	//implements class Options and Evento (mootools)
	Implements : [meta4.widget.Options, Events],

	_idContainer : null,
	_channel : null,
	_node : null,
	_element : null,
	_divTable : null,
	_elementTable : null,
	_elementSearch : null,
	_elementHeader : null,
	_elementSubHeader : null,
	_elementFooter : null,
	_oneColumn : false,
	_objDataWrap : null,

	//visible items
	_visibleItems : [],

	//visible items only tr
	_visibleItemsTr : [],

	//storage number columns of table
	_numberColumns : 0,

	//en fín.. Nodo padre y su indice.
	_parentNode : null,
	_parentIndex : null,

	//Altura de la tabla que contiene los datos
	_heightTable : null,

	//Array con todos los datos del nodo para ordenar
	_nodeData : null,

	//storage pluginHead {object: html element, alwaysVisible: (true/false)}
	listPluginHead : [],

	//storage pluginSubHead {object: html element, alwaysVisible: (true/false)}
	listPluginSubHead : [],

	//storage pluginFooter {object: html element, alwaysVisible: (true/false)}
	listPluginFooter : [],

	_listFxSpecialtr : [],

	_createTHDelete : false,

	//items QBF
	itemsQBF : [],

	options : {

		//head fixed
		fixedHead : false,

		//Title
		header : true,

		//element thead
		paintElementThead : true,

		//store if table allow collapsable
		collapsableHeader : true,

		//only table writable
		allowDelete : true,

		//position icon of head
		positionIcon : 'left',

		//message displayed when no data
		txtNoDataAvailable : '',

		//iconos
		iconHide : meta4.widget.icons.arrow_up,
		iconShow : meta4.widget.icons.arrow_down,

		//sizeTitle
		sizeTitle : 'h2',

		width : 'auto',
		height : 'auto',
		heightPercent : 'auto',

		//store item column to group table
		groupBy : null,
		//store item to store id of group
		groupId : null,

		//add sort icons to headers, no sense on one-column table
		sortable : false,

		allowSelection : false,

		//If multiselect available
		multiselect : false,

		//store id nodeQBF
		nodeSearch : null,
		//show input search
		searchVisible : true,

		//Can create new record
		onNewRow : Class.empty,

		//html element type that will be painted in each item
		itemTypes : null,

		//html element type that will be painted in each TR
		itemTypesTr : null,

		//Class that applies to normal tables
		classTable : '',

		//check if table is preinicialize
		preload : false,

		//function that is executed when click row
		onRowClick : null,

		//function executed when all data has been drawn
		onDataDraw : null,

		//function to filter records
		recordFilter : null,

		//show spinner in the search container
		spinnerDefault : true,

		//DragAndDrop
		dragDrop : {
			//Elements to do drop
			droppables : null,
			//function executed when enter dropable
			onEnter : null,
			//function executed when leave dropable
			onLeave : null,
			//function executed when drop in area droppable
			onDrop : null,
			//function that is executed Executed when the user has dragged. Receives the dragged element as an argument.
			onSnap : null
		},

		//fire when draw one column
		onDrawRow : function(td, node) {'use strict';
			var i;

			var div = new Element('div');

			for ( i = 0; i < this._visibleItems.length; i++) {

				var text = new Element('p');

				if (i === 0) {
					text = new Element('h4');
				}

				text.appendText(this._node.getValue(this._visibleItems[i]));
				div.grab(text);
			}
			td.grab(div);
		},

		/**
		 *Function that is executed when delete row
		 */
		functionDeleteRow : function(tr) {
			this.defaultFunctionDeleteRow(tr);
		},

		//Properties to filter de Meta4Object
		filteredM4 : {
			pkItems : [],
			meta4Object : null,
			rootNode : null,
			onMoveM4 : null
		}
	},

	/**
	 * Function to create head
	 */
	createHeader : function() {'use strict';

		this._elementHeader = new Element('div', {
			'class' : this.options.classTable + ' ' + 'm4-table-header'
		});

		/**		var divTitleTable = new Element('div',{
		 'class' : 'm4-table-header-divTitle'
		 });

		 var divLabel = new Element('div', {
		 'class' : 'm4-table-header-divLabel'
		 });
		 var divIcon = new Element('div', {
		 'class' : 'm4-table-header-divIcon'
		 });

		 var labelTitle = new Element('label');

		 divLabel.grab(labelTitle);

		 labelTitle.appendText(this._node.getNodeMetadata().getProperty('Name'));*/
		this._elementHeader.addClass(this.options.classTable);

		/**		this._elementHeader.grab(divTitleTable);

		 divTitleTable.grab(divLabel);

		 if (this.options.positionIcon === 'left') {
		 divTitleTable.grab(divIcon, 'top');
		 } else if (this.options.positionIcon === 'right') {
		 divTitleTable.grab(divIcon, 'bottom');
		 }*/

		//collapsable header
		if (this.options.collapsableHeader) {

			var that = this;

			//action hide show table
			var action = function() {
				this._elementTable.fx.toggle();
				if (this._elementSearch != null) {
					this._elementSearch.fx.toggle();
				}
			};

			var options = {
				'nodeName' : this.options.sizeTitle,
				'positionIcon' : this.options.positionIcon
			};

			var button = new meta4.widget.Button(this._node.getNodeMetadata().getProperty('Name'), this.options.iconHide, options);
			this._elementHeader.grab(button.container);

			var animationTime = meta4.session.Animation.getAnimationTime();

			var fxTable = new Fx.Reveal(this._divTable, {
				duration : animationTime,
				resetHeight : 'true',
				link : 'ignore',
				transition : Fx.Transitions.Pow.easeOut,
				onStart : function(event) {
					var i;
					for ( i = 0; i < this.listPluginHead.length; i++) {
						if (this.listPluginHead[i].alwaysVisible == false) {
							if (this._divTable.getStyle('height') === '0px') {
								this.listPluginHead[i].element.setStyle('display', '');
							} else {
								this.listPluginHead[i].element.setStyle('display', 'none');
							}
						}
					}

					for ( i = 0; i < this.listPluginSubHead.length; i++) {
						if (this.listPluginSubHead[i].alwaysVisible == false) {
							if (this._divTable.getStyle('height') === '0px') {
								this.listPluginSubHead[i].element.setStyle('display', '');
							} else {
								this.listPluginSubHead[i].element.setStyle('display', 'none');
							}
						}
					}

					for ( i = 0; i < this.listPluginFooter.length; i++) {
						if (this.listPluginFooter[i].alwaysVisible == false) {
							if (this._divTable.getStyle('height') === '0px') {
								this.listPluginFooter[i].element.setStyle('display', '');
							} else {
								this.listPluginFooter[i].element.setStyle('display', 'none');
							}
						}
					}

				}.bind(this),
				onComplete : function(button, obj) {
					if (button.img.get('src') == that.options.iconHide) {
						button.img.set('src', that.options.iconShow);
					} else {
						button.img.set('src', that.options.iconHide);
					}
				}.bind(this, button)
			});

			//store func fx
			this._elementTable.fx = fxTable;

			//toggle to search
			if (this._elementSearch != null) {

				var animationTime = meta4.session.Animation.getAnimationTime();

				var fxSearch = new Fx.Reveal(this._elementSearch, {
					duration : animationTime,
					link : 'ignore',
					button : button,
					resetHeight : 'true',
					transition : Fx.Transitions.Pow.easeOut,
					onComplete : function() {
						if (button.img.get('src') == that.options.iconHide) {
							button.img.set('src', that.options.iconShow);
						} else {
							button.img.set('src', that.options.iconHide);
						}
					}
				});

				//store func fx
				this._elementSearch.fx = fxSearch;

			}
			button.setFunctionClick(action.bind(this));

		} else {
			var opt = {
				'nodeName' : this.options.sizeTitle,
				'imgAction' : false
			};
			var button = new meta4.widget.Button(this._node.getNodeMetadata().getProperty('Name'), null, opt);
			this._elementHeader.grab(button.container);
		}

		this._element.grab(this._elementHeader, 'top');

	},

	ObjectPlugin : function(element, alwaysVisible) {
		this.element = element;
		this.alwaysVisible = alwaysVisible;
	},

	addPluginHead : function(element, alwaysVisible) {
		var obj = new this.ObjectPlugin(element, alwaysVisible);
		this.listPluginHead.push(obj);
		this._elementHeader.grab(element);
	},

	addPluginSubHead : function(element, alwaysVisible) {
		var obj = new this.ObjectPlugin(element, alwaysVisible);
		this.listPluginSubHead.push(obj);
		this._elementSubHeader.grab(element);
	},

	addPluginFooter : function(element, alwaysVisible) {
		var obj = new this.ObjectPlugin(element, alwaysVisible);
		this.listPluginFooter.push(obj);
		this._elementFooter.grab(element);
	},

	/**
	 * Function to get tooltip search
	 */
	getTooltipSearch : function() {
		this.getItemsQBF();

		this.itemsQBF.toString = function(a, b, c) {
			var i;
			var str = '';
			for ( i = 0; i < this.length; i++) {
				if (i < this.length - 1) {
					str = str + ', ' + this[i];
				} else {
					str = str + ' ' + meta4.widget.translate.getTranslate('_gen_searchAnd') + ' ' + this[i] + '.';
				}
			}
			return str;
		};

		var itemsSearch = this.itemsQBF.toString();

		return meta4.widget.translate.getTranslate('_gen_3charsNeeded') + ' ' + meta4.widget.translate.getTranslate('_gen_search_items') + ' ' + itemsSearch;
	},

	/**
	 * Function to get items of node QBF
	 */
	getItemsQBF : function() {
		var nodeQBF = this._channel.getNode(this.options.nodeSearch);
		this.itemsQBF = [];

		//falta el metadato auxiliar item
		/**var listItems = {};
		 var itemsAux = [];

		 var i;
		 for ( i = 0; i < nodeQBF.getNItems(); i++) {
		 var item = nodeQBF.getItemMetadataByIndex(i);
		 var idItem = item.getProperty("Id");
		 var NameItem = item.getProperty("Name");

		 listItems[idItem] = NameItem;

		 var auxItem = item.getProperty("AuxiliarItem");
		 if (auxItem !== null && auxItem !== undefined) {
		 itemsAux.push(auxItem);
		 }
		 }

		 for(i=0; i<itemsAux.length; i++){
		 var nameItem = listItems[itemsAux[i]];
		 this.itemsQBF.push(nameItem);
		 }*/

		for ( i = 0; i < nodeQBF.getNItems(); i++) {
			var item = nodeQBF.getItemMetadataByIndex(i);

			var nameItem = item.getProperty("Name");
			var visibility = item.getProperty("IsVisible");

			if (visibility === "1") {
				this.itemsQBF.push(nameItem);
			}
		}

	},

	isTableWritable : function() {
		return false;
	},

	/**
	 * Function to create div to search
	 */
	createSearch : function() {'use strict';

		this._elementSearch = new Element('div', {
			'class' : this.options.classTable + ' ' + 'm4-table-search'
		});

		var input = new Element('input', {
			title : this.getTooltipSearch()
		});
		input.m4PlaceHolder(meta4.widget.translate.getTranslate('_gen_search'), {
			'search' : true
		});

		input.addEvent('keyup', function(input, event) {
			//delay 0.8 sg
			this._search.delay(800, this, input.value);
		}.bind(this, input));

		this._elementSearch.grab(input);
		this._element.grab(this._elementSearch, 'top');

		if (!this.options.searchVisible) {
			this._elementSearch.setStyle('display', 'none');
		}
	},
	_search : function(txt) {'use strict';

		//check delay
		if (this._elementSearch.getElement('input').value === txt) {
			if (txt === "") {
				txt = '%';
			}

			if (txt.length > 2 || txt === '%') {

				var args = [];
				args.push(this._node.getId());
				args.push(txt);

				var request = new meta4.M4Request(this._channel, this.options.nodeSearch, 'APPLY_FILTER_LOAD', args);

				//show layer loading
				this._objDataWrap.execute(request, this.onApplyFilterLoad.bind(this));
			}
		}
	},
	search : function(searchValue) {'use strict';

		var searchInput = this._elementSearch.getElement('input');
		searchInput.set('value', searchValue);
		searchInput.fireEvent('keyup');
	},
	constructHeadTable : function() {'use strict';

		if (this.options.paintElementThead === true) {

			var thead = new Element('tHead');

			var tr = new Element('tr');
			thead.grab(tr);
			var i;
			for ( i = 0; i < this._visibleItems.length; i++) {

				var th = new Element('th');
				var itemId = this._visibleItems[i];

				if (this.options.itemTypes[itemId]) {
					if (this.options.itemTypes[itemId].th) {
						th.set(this.options.itemTypes[itemId].th);
					}
				}

				var labelTh = new Element('label');
				var item = this._node.getItemMetadata(itemId);
				var nameItem = item.getProperty("Name");
				labelTh.appendText(nameItem);

				//0258035
				var clientNotNull = item.getProperty("ClientNotNull");
				if (clientNotNull === "1") {
					labelTh.setStyle('font-weight', 'bold');
				}

				th.setProperty('m4SortItem', itemId);

				th.grab(labelTh);
				tr.grab(th);
			}

			this._elementTable.grab(thead);
		}
	},

	addRowOneColumn : function(tr) {'use strict';
		var j;

		var td = new Element('td');
		tr.grab(td);

		this.fireEvent('onDrawRow', [td, this._node]);

	},

	/**
	 *Function to hide tr given id item
	 * @param items, string or [string]
	 */
	toggleSpecialTr : function(items) {

		/**
		 *Search if id belong list items
		 */
		function belongs(id) {
			//if is string
			if ( typeof items === 'string') {
				if (items === id) {
					return true;
				} else {
					return false;
				}
			} else {
				var i;
				for ( i = 0; i < items.length; i++) {
					if (items[i] === id) {
						return true;
					}
				}
				return false;
			}
		}

		var i;
		var listFx = [];

		for ( i = 0; i < items.length; i++) {
			//set itemTypesTr
			var confItem = this.options.itemTypesTr[items[i]];
			if (confItem !== undefined) {
				if (confItem.styles !== undefined) {
					if (confItem.styles.display === 'none') {
						confItem.styles.display = '';
					} else {
						confItem.styles.display = 'none';
					}
				} else {
					confItem.styles = {};
					confItem.styles.display = 'none';
				}
			}
		}

		for ( i = 0; i < this._listFxSpecialtr.length; i++) {
			if (belongs(this._listFxSpecialtr[i].item) === true) {
				listFx.push(this._listFxSpecialtr[i]);
			}
		}

		for ( i = 0; i < listFx.length; i++) {
			listFx[i].toggle();
		}
	},

	createCell : function(elementProperties, value, idItem, td) {

		var element = null;
		if (elementProperties.callbackCreate) {
			element = elementProperties.callbackCreate(elementProperties, this._channel, this._node.getId(), idItem, td);
		} else if (elementProperties.nodeName) {
			element = meta4.widget.element.createWithBind(elementProperties, this._channel, this._node.getId(), idItem, td);
		} else if (elementProperties.nodeName === 'formattedText') {
			td.set('html', value);
		} else {
			//add only text content
			var element = new Element('label', {
				'html' : value
			});
			td.grab(element);
		}

		return element;
	},

	addRow : function(tr) {'use strict';
		var j;

		tr.listSpecialTr = [];

		for ( j = 0; j < this._visibleItems.length; j++) {

			var value = meta4.data.utils.getValue(this._node, this._visibleItems[j]);

			var elementProperties = this.options.itemTypes[this._visibleItems[j]];

			var td = new Element('td',this.options.itemTypes[this._visibleItems[j]].td);
			tr.grab(td);

			this.createCell(elementProperties, value, this._visibleItems[j], td);
		}

		for ( j = 0; j < this._visibleItemsTr.length; j++) {

			var value = meta4.data.utils.getValue(this._node, this._visibleItemsTr[j]);

			var elementProperties = this.options.itemTypesTr[this._visibleItemsTr[j]];

			if (elementProperties.tr) {
				var trBlock = new Element('tr', elementProperties.tr);
			} else {
				var trBlock = new Element('tr');
			}

			trBlock.addClass('m4-table-tr-special');

			trBlock.store('m4-index-special', this._node.getCurrent());

			var tdBlock = new Element('td', {
				'colspan' : this._numberColumns
			});

			var element = this.createCell(elementProperties, value, this._visibleItemsTr[j], tdBlock);

			//puede ser que no se haya añadido ningun elemento si se usa callbackCreate en ese caso no añadimos nada
			if (element !== null) {

				var fxTrBlock = new Fx.Reveal(element, {
					duration : meta4.session.Animation.getAnimationTime(),
					transition : Fx.Transitions.Pow.easeOut,
					//onComplete y onStart se usa para ocultar los bordes de la tabla.
					onComplete:function(){
						if(this.hidden === true){
							this.element.getParent('tr').setStyle('display','none');	
						}
					},
					onStart:function(){						
						if(this.showing === true){
							this.element.getParent('tr').setStyle('display','');	
						}
					},
				});
				
				if(element.getStyle('display')==='none'){
					trBlock.setStyle('display','none');	
				}

				fxTrBlock.item = this._visibleItemsTr[j];

				this._listFxSpecialtr.push(fxTrBlock);

				tr.parentElement.grab(trBlock);

				trBlock.grab(tdBlock);
				tr.listSpecialTr.push(trBlock);
			}

		}

	},

	/**
	 *Function to add new row
	 */
	addNewRow : function() {

		this._node.addRecord();
		var tr = new Element('tr');

		tr.store('m4-index', this._node.getCurrent());

		if (this.options.dragDrop.onDrop != null) {
			tr.addEvent('mousedown', function(index, event) {
				this.funcDragDrop(this._node, index, event);
			}.bind(this, this._node.getCurrent()));

		} else {
			tr.addEvent('mousedown', function(index, event) {
				this.funcMultiSelect(index, event);
				this.funcMoveNode(index, event);
			}.bind(this, this._node.getCurrent()));
		}

		//add tr
		this._elementTable.getElement('tbody').grab(tr, 'bottom');

		if (this._oneColumn == true) {
			this.addRowOneColumn(tr);
		} else {
			this.addRow(tr);
		}

		if (this.options.allowDelete == true) {
			this.addTDDeleteRow(tr);
		}
	},

	disabledTr : function(tr) {
		var elements = [];
		var typeElements = ['select', 'input', 'button', 'img', 'textarea'];
		var j, i, k;

		var arrayTr = [tr];

		if (tr.listSpecialTr && tr.listSpecialTr.length > 0) {
			arrayTr = arrayTr.concat(tr.listSpecialTr);
		}

		for ( k = 0; k < arrayTr.length; k++) {

			var trDisabled = arrayTr[k];

			for ( i = 0; i < typeElements.length; i++) {

				var elements = trDisabled.getElements(typeElements[i]);
				//disabled select, input, and button
				for ( j = 0; j < elements.length; j++) {
					elements[j].set('disabled', true);
					elements[j].removeEvents();
					elements[j].setStyle('cursor', 'default');
				}
			}
		}
	},

	defaultFunctionDeleteRow : function(tr) {
		var index = tr.retrieve('m4-index');
		this._node.moveTo(index);

		var countBeforeDelete = this._node.count();
		this._node.setToDelete();
		var countAfterDelete = this._node.count();

		if (countBeforeDelete > countAfterDelete) {
			this.reDraw();
		} else {
			tr.addClass('m4-table-delete-register');
			this.disabledTr(tr);
			//remove events
			tr.removeEvents();
		}
	},

	addTDDeleteRow : function(tr) {

		var newTd = new Element('td', {
			'class' : 'm4-table-td-icon'
		});
		var img = new Element('img', {
			'src' : meta4.widget.icons.del,
			'class' : 'm4-table-imgAction',
			'title' : meta4.widget.translate.getTranslate('_ger_deleteRegister'),
			styles : {
				'visibility' : 'hidden'
			}
		});
		newTd.grab(img);
		tr.grab(newTd);

		//event to delete register
		img.addEvent('click', function(tr) {
			this.options.functionDeleteRow.call(this, tr);
		}.bind(this, tr));

		//event to show or hide
		tr.addEvents({
			mouseenter : function() {
				this.setStyle('visibility', 'visible');
			}.bind(img),
			mouseleave : function() {
				this.setStyle('visibility', 'hidden');
			}.bind(img)
		});
	},

	addIconDeleteRow : function(redraw) {

		if (this._createTHDelete === false) {

			this._createTHDelete = true;
			var newTH = new Element('th', {
				'class' : 'm4-table-thDeleteRow'
			});
			//create new TH
			if (this._elementTable.getElement('thead') !== null) {
				this._elementTable.getElement('thead').getElement('tr').grab(newTH);
			}

		}

		if (this._node.count() === 0) {
			return 0;
		}
		var tbodys = this._elementTable.getElements('tbody');

		var i, trs;
		for ( j = 0; j < tbodys.length; j++) {
			if (tbodys[j].hasClass('m4-table-group') === true) {
				var oldColdSpan = tbodys[j].getElement('td').get('colspan');
				tbodys[j].getElement('td').set('colspan', parseInt(oldColdSpan) + 1);
			} else {
				var trs = tbodys[j].getElements('tr');

				for ( i = 0; i < trs.length; i++) {
					if (trs[i].hasClass('m4-table-group') == false && trs[i].hasClass('m4-table-tr-special') == false && trs[i].hasClass('m4-table-addRegister') == false) {
						//add icon
						this.addTDDeleteRow(trs[i]);
					} else {
						var td = trs[i].getElement('td');
						td.set('colspan', this._numberColumns);
					}
				}

			}
		}
	},

	createNewLink : function() {'use strict';

		if (this.$events.newRow != null) {

			var tr = new Element('tr', {
				'class' : 'm4-table-addRegister'
			});
			var td = new Element('td', {
				'colspan' : this._numberColumns
			});

			var options = {
				functionClick : function(td,object) {
					var obj = {
						m4Table:this,
						td:td
					};
					this.fireEvent('newRow',obj);
				}.bind(this, td)
			};

			var button = new meta4.widget.Button(meta4.widget.translate.getTranslate('_gen_addRegister'), meta4.widget.icons.plus_blue, options);

			td.grab(button.container);
			tr.grab(td);
			this._elementTable.getElement('tbody').grab(tr);

		}
	},
	funcMultiSelect : function(index, object) {

		var event = object.event;
		var tbody = object.target.closest('tbody');
		//tr selected
		var tr = object.target.closest('tr');

		if (this.options.multiselect) {

			//get last selected (use if shift key == true)
			var trLast = tbody.getElement('tr.m4SelectLast');

			//index last row
			if (trLast == null) {
				trLast = tr;
			}

			//delete last selected
			tbody.getElements('tr').removeClass('m4SelectLast');

			if (event.shiftKey == true) {

				//get last index
				var lastRowIndex = trLast.retrieve('m4-index');

				//remove m4selected
				tbody.getElements('tr').removeClass('m4Selected');

				tr.addClass('m4SelectLast');

				//index seleceted row
				var rowIndex = tr.retrieve('m4-index');

				var top = 0;
				var bottom = 0;

				//calculate limits
				if (lastRowIndex < rowIndex) {
					top = rowIndex;
					bottom = lastRowIndex;
				} else {
					bottom = rowIndex;
					top = lastRowIndex;
				}

				tbody.getElements('tr').each(function(element, index, array) {
					var rIndex = element.retrieve('m4-index');
					if (rIndex >= bottom && rIndex <= top) {
						//add class selected if is between top and bottom
						element.addClass('m4Selected');
					}
				});

			} else {
				//select normal mode
				if (event.ctrlKey == true) {
					//delete selected
					if (tr.hasClass('m4Selected') == true) {
						tr.removeClass('m4Selected');
					} else {
						tr.addClass('m4Selected m4SelectLast');
					}
				} else {
					if (tr.hasClass('m4Selected') == true) {
						tbody.getElements('tr').removeClass('m4Selected');
					} else {
						tbody.getElements('tr').removeClass('m4Selected');
						tr.addClass('m4Selected m4SelectLast');
					}
				}
			}
		} else {

			if (this.options.allowSelection) {
				tbody.getElements('tr').removeClass('m4Selected');
				tr.addClass('m4Selected m4SelectLast');
			}
		}

	},

	//Nos posicionamos en el canal
	moveChannel : function() {

		//Si hay padre
		if (this._parentNode) {
			//Si está desposicionado
			if (this._parentNode.getCurrent() != this._parentIndex) {
				this._parentNode.moveTo(this._parentIndex);
				//Si nos hemos movido en el padre desposicionamos el actual
				this._node.moveToEOF();
			}
		}
	}.protect(),

	funcMoveNode : function(index, object) {

		this.moveChannel();

		if (this._node.getCurrent() != index) {

			var activeElement = document.activeElement;

			//HTMLElement crash on ie8
			//only fire event when the click is not on input bug 0260037
			if (m4IsElement(activeElement)) {
				if (document.activeElement.hasBlur() === true) {
					if (object.target.nodeName !== 'INPUT' && object.target.nodeName !== 'TEXTAREA') {
						//lost focus in element activate bug 0258964
						document.activeElement.blur();
					}
				}
			}
			this._node.moveTo(index);
		}

		this.fireEvent('onRowClick');

	},

	moveToRegister : function(index) {
		//delete last selected
		this._elementTable.getElements('tr').removeClass('m4SelectLast');
		this._elementTable.getElements('tr').removeClass('m4Selected');

		this._node.moveTo(index);

		var trs = this._elementTable.getElements('tr');
		var i;
		var found = false;
		for ( i = 0; i < trs.length && found == false; i++) {
			var indexTR = trs[i].retrieve('m4-index');
			if (indexTR == index) {
				trs[i].addClass('m4Selected m4SelectLast');
				found = true;
			}
		}
	},

	funcDragDrop : function(node, index, object) {

		if (this.options.dragDrop.droppables != null) {
			var element = object.target.closest('tr');

			var table = object.target.closest('table');
			var trSelected = table.getElements('.m4Selected');

			var dragElement = new Element('div', {
				'html' : meta4.widget.translate.getTranslate('_gen_selectedItems') + ' ',
				'class' : 'm4-div-drag'
			}).setStyles(element.getCoordinates()).setStyles({
				position : 'absolute'
			}).inject(document.body);
			dragElement.setStyle('display', 'none');

			var that = this;

			var drag = new Drag.Move(dragElement, {

				span : 10,
				droppables : this.options.dragDrop.droppables,

				onDrop : function(dragging, box) {

					dragging.destroy();

					var indexSelected = [];

					//get index of element selected
					trSelected.each(function(element, index) {
						indexSelected.push(element.retrieve('m4-index'));
					});
					if (that.options.dragDrop.onDrop) {
						that.options.dragDrop.onDrop(dragging, box, node, indexSelected);
					} else {
						console.log('m4-table drop undefined');
					}

					if (box != null) {
						box.highlight('#7389AE', '#FFF');
					}
				},
				onEnter : function(dragging, box) {
					if (that.options.dragDrop.onEnter) {
						that.options.dragDrop.onEnter(dragging, box);
					} else {
						console.log('m4-table onEnter undefined');
					}
				},
				onLeave : function(dragging, box) {
					if (that.options.dragDrop.onLeave) {
						that.options.dragDrop.onLeave(dragging, box);
					} else {
						console.log('m4-table onLeave undefined');
					}
				},

				//default function
				onSnap : function(el) {
					el.setStyle('display', 'block');
					if (that.options.dragDrop.onSnap) {
						that.options.dragDrop.onSnap(el);
					} else {
						//console.log('m4-table onSnap undefined');
					}
				}.bind(this),

				//start move
				onStart : function() {
					if (element.hasClass('m4Selected') == false) {
						this.funcMultiSelect(index, object);
						this.funcMoveNode(index, object);
					}

					trSelected = table.getElements('.m4Selected');
					var numberSelected = trSelected.length;

					dragElement.appendText(numberSelected);

				}.bind(this),
				//cancel drag only click
				onCancel : function(dragging) {

					//if no move, event multiselect and move node
					this.funcMultiSelect(index, object);
					this.funcMoveNode(index, object);

					dragging.destroy();
				}.bind(this)
			});
			drag.start(object);

		}
	},

	constructNormalTable : function() {

		var i;

		var tbody = this._elementTable.getElements('tbody');

		if (tbody.length == 0) {
			tbody = new Element('tbody');
			this._elementTable.grab(tbody);
		} else {
			//ie8 Crash
			//tbody.destroy();
			tbody[0].destroy();
			tbody = new Element('tbody');
			this._elementTable.grab(tbody);
		}

		if (this._node.count() === 0) {

			//add tr
			var tr = new Element('tr', {
				'class' : 'm4-table-no-data-available'
			});
			var td = new Element('td', {
				'colspan' : this._numberColumns,
				'text' : this.options.txtNoDataAvailable
			});
			tr.grab(td);
			tbody.grab(tr);
		} else {
			for ( i = 0; i < this._node.count(); i++) {

				var m4index = i;
				if (this._nodeData) {
					m4index = this._nodeData[i]['index'];
				}
				this._node.moveTo(m4index);
				if (this.options.recordFilter === null || this.options.recordFilter(this._node)) {

					var tr = new Element('tr');
					if (this._node.isToDelete()) {
						tr.addClass('m4-table-delete-register');
						this.disabledTr(tr);
						//remove events
						tr.removeEvents();
					}

					if (i === 0 && this.options.allowSelection) {
						tr.addClass('m4Selected');
					}

					tr.store('m4-index', m4index);

					if (this.options.dragDrop.onDrop != null) {
						tr.addEvent('mousedown', function(index, event) {
							this.funcDragDrop(this._node, index, event);
						}.bind(this, m4index));

					} else {
						tr.addEvent('mousedown', function(index, event) {
							this.funcMultiSelect(index, event);
							this.funcMoveNode(index, event);
						}.bind(this, m4index));
					}

					//add tr
					tbody.grab(tr);

					if (this._oneColumn == true) {
						this.addRowOneColumn(tr);
					} else {
						this.addRow(tr);
					}
				}
			}
		}
	},

	constructGroupTable : function() {

		var i;
		var lastValue = null;

		if (this._node.count() === 0) {
			var tbody = new Element('tbody');
			this._elementTable.grab(tbody);
			var tr = new Element('tr', {
				'class' : 'm4-table-no-data-available'
			});
			var td = new Element('td', {
				'colspan' : this._numberColumns,
				'text' : meta4.widget.translate.getTranslate('_gen_no_data_available')
			});
			tr.grab(td);
			tbody.grab(tr);
		} else {

			for ( i = 0; i < this._node.count(); i++) {
				this._node.moveTo(i);
				if (this.options.recordFilter === null || this.options.recordFilter(this._node)) {

					if (i == 0 || lastValue != this._node.getValue(this.options.groupBy)) {

						var tBodyGroup = new Element('tbody').addClass('m4-table-group ' + this.options.classTable);
						this._elementTable.grab(tBodyGroup);
						var trBodyGroup = new Element('tr').addClass('m4-table-group ' + this.options.classTable);
						tBodyGroup.grab(trBodyGroup);

						//body data
						var tBodyGroupData = new Element('tbody');
						this._elementTable.grab(tBodyGroupData);

						trBodyGroup.addEvent('click', function(event) {

							if (this.style.display == 'none') {
								this.style.display = '';
							} else {
								this.style.display = 'none';
							}

						}.bind(tBodyGroupData));

						var tdGroup = new Element('td', {
							'colspan' : this._visibleItems.length
						});

						if (this.options.groupId != null) {
							trBodyGroup.store('m4-idGropup', this._node.getValue(this.options.groupId));
						}

						var groupText = this._node.getItemMetadata(this.options.groupBy).getProperty('Name') + ': ' + this._node.getValue(this.options.groupBy);

						var label = new Element('label');
						label.appendText(groupText);

						tdGroup.grab(label);
						trBodyGroup.grab(tdGroup);
						tBodyGroup.grab(trBodyGroup);
					}
					lastValue = this._node.getValue(this.options.groupBy);

					var tr = new Element('tr');
					if (this._node.isToDelete() == true) {
						tr.addClass('m4-table-delete-register');
						this.disabledTr(tr);
						//remove events
						tr.removeEvents();
					}

					tr.store('m4-index', i);

					if (this.options.dragDrop.onDrop != null) {
						tr.addEvent('mousedown', function(index, event) {
							this.funcDragDrop(this._node, index, event);
						}.bind(this, i));

					} else {
						tr.addEvent('mousedown', function(index, event) {
							this.funcMultiSelect(index, event);
							this.funcMoveNode(index, event);
						}.bind(this, i));
					}

					//add tr
					tBodyGroupData.grab(tr);

					if (this._oneColumn == true) {
						this.addRowOneColumn(tr);
					} else {
						this.addRow(tr);
					}
				}
			}
		}
	},

	constructTable : function() {

		//off binding while painting records
		meta4.widget.binding.offBinding();

		if (this.options.groupBy == null) {
			this.constructNormalTable();
		} else {
			this.constructGroupTable();
		}

		//Creamos el enlace para crear nuevo registro
		this.createNewLink();

		//on binding, on move to 0...
		meta4.widget.binding.onBinding();

		if (this._node.count() > 0) {
			//Se han pintado los datos del nodo
			//Nos movemos al primer resgistro (hay que mover a eof para q se dispare el evento.)
			this._node.moveToEOF();
			this._node.moveTo(0);
		}

		if (this.options.allowDelete == true) {
			this.addIconDeleteRow(true);
		}

		//Notificamos aunque no haya registros
		this.fireEvent('onDataDraw');

	},

	onApplyFilterLoad : function(request) {
		this.constructTable();
	},

	getDataTable : function() {'use strict';

		var request = new meta4.M4Request(this._channel, this._node.getId(), 'LOAD_BLK', null);
		this._objDataWrap.execute(request, this.onApplyFilterLoad.bind(this));
	},

	orderItemsColumn : function() {
		var objItem = function(node, id) {
			this.id = id;
			this.order = node.getItemMetadata(id).getProperty('Order');
		};
		var listObj = [];
		var i;
		for ( i = 0; i < this.options.visibleItems.length; i++) {
			var obj = new objItem(this._node, this.options.visibleItems[i]);
			listObj.push(obj);
		}

		listObj.sort(function(a, b) {
			return a.order - b.order;
		});
		var listOrder = [];
		for ( i = 0; i < listObj.length; i++) {
			listOrder.push(listObj[i].id);
		}

		return listOrder;
	},

	getNumberColumns : function() {
		if (this.options.allowDelete === true) {
			this._numberColumns = this._visibleItems.length + 1;
		} else {
			this._numberColumns = this._visibleItems.length;
			// ie9> 0263856, para el colspan no se puede pasar 0.
			if (this._numberColumns === 0){
                this._numberColumns = 1;
            }
		}
	},

	getVisibleItemsTable : function() {
		var i;
		var items = [];
		for (i in this.options.itemTypes) {
			items.push(i);
		}
		return items;
	},

	getVisibleItemsTr : function() {
		var i;
		var items = [];
		for (i in this.options.itemTypesTr) {
			items.push(i);
		}
		return items;
	},

	initializeM4Table : function(channel, idNode, options) {'use strict';
		this._channel = channel;
		this._node = this._channel.getNode(idNode);

		this.options.txtNoDataAvailable = meta4.widget.translate.getTranslate('_gen_no_data_available');
		this.setOptions(options);

		var parentNodeId = this._node.getParentId();
		if (parentNodeId) {
			this._parentNode = this._channel.getNode(parentNodeId);
			this._parentIndex = this._parentNode.getCurrent();
		}

		if (this.options.spinnerDefault === true) {
			this._objDataWrap = new meta4.dataWrap(this._divTable);
		} else {
			this._objDataWrap = new meta4.dataWrap();
		}

		//default class
		this._elementTable.addClass('m4-table ' + this.options.classTable);

		//get visible items
		this._visibleItems = this.getVisibleItemsTable();

		//get visible items
		this._visibleItemsTr = this.getVisibleItemsTr();

		this.getNumberColumns();

		if (this.options.groupBy) {
			//remove element to group
			this._visibleItems.erase(this.options.groupBy);
		}

		//create div to search
		if (this.options.nodeSearch != null) {
			this.createSearch();

			//26px
			this._heightTable = Math.max((this._heightTable - this._elementSearch.getSize().y), 0);
		}

		//create title of table
		if (this.options.header === true) {
			this.createHeader();

			//26px
			this._heightTable = Math.max((this._heightTable - this._elementHeader.getSize().y), 0);

			if (this.options.collapsableHeader === true && this.options.positionIcon === 'left') {
				this._divTable.addClass('m4-table-marginLeft');
			}
		}

		//create tHead table
		if (this._oneColumn == false) {
			this.constructHeadTable();
			if (this.options.sortable === true) {
				this.addSort();
			}
		}

		//create table
		if (this.options.preload === true) {
			this.getDataTable();
		} else {
			this.constructTable();
		}

	},
	draw : function(channel, idNode, options) {'use strict';
		this.initializeM4Table(channel, idNode, options);
	},
	drawOneColumn : function(channel, idNode, options) {'use strict';
		this._oneColumn = true;
		this.initializeM4Table(channel, idNode, options);

		if (this._heightTable > 0) {
			this._divTable.setStyle('height', this._heightTable + 'px');
		}
		this._divTable.setStyle('overflow', 'auto');
	},
	drawGroupByColumn : function(channel, idNode, options) {
		this.initializeM4Table(channel, idNode, options);
	},

	/*
	 * Dada la cabecera de la tabla buscamos el atributo m4SortItem
	 * añadimos los iconos de ordenación y la funcionalidad.
	 */
	addSort : function() {

		var thead = this._elementTable.getElement('thead');
		var headers = thead.getElements('th');

		//dejamos los iconos de ordenación sin estado
		var resetSortIcons = function(th) {

			Array.each(headers, function(element, index) {

				if (element !== th) {
					element.removeClass('ascending');
					element.removeClass('descending');
				}
			});
		};

		Array.each(headers, function(element, index) {

			var itemId = element.getProperty('m4SortItem');
			if (itemId) {

				element.addClass('sortable');

				//Añadimos funcion de ordenación
				element.addEvent('click', function(th) {

					resetSortIcons(th);

					if (th.hasClass('ascending')) {
						this.sort(itemId, false);
						th.removeClass('ascending');
						th.addClass('descending');

					} else {
						this.sort(itemId, true);
						th.removeClass('descending');
						th.addClass('ascending');
					}
				}.bind(this, element));

			}
		}.bind(this));
	},
	sort : function(itemIdToSort, reverse) {
		var j;
		var index;
		var itemId;
		var recordData;

		if (!this._nodeData) {
			this._nodeData = [];
			for ( index = 0; index < this._node.count(); index++) {
				recordData = {};
				this._node.moveTo(index);
				for ( j = 0; j < this._visibleItems.length; j++) {

					itemId = this._visibleItems[j];
					var value = meta4.data.utils.getValue(this._node, itemId);
					recordData[itemId] = value;

				}
				//Posición del registro
				recordData['index'] = index;

				this._nodeData.push(recordData);
			}
		}
		//do sort
		this._nodeData.sort(m4sortBy(itemIdToSort, reverse));

		this.reDraw();

	},
	findTR : function(indexSearch) {
		var tbodys = this._elementTable.getElements('tbody');
		var i;
		for ( i = 0; i < tbodys.length; i++) {
			var trs = tbodys[i].getElements('tr');
			for ( j = 0; j < trs.length; j++) {
				var index = trs[j].retrieve('m4-index');
				if (index == indexSearch) {
					return trs[j];
				}
			}
		}
	},

	reDraw : function() {
		
		if(this._parentNode !== null){
			this._parentIndex = this._parentNode.getCurrent();	
		}		

		var theads;
		var i;
		var tbodys;
		var indexOld = this._node.getCurrent();

		this._listFxSpecialtr = [];

		/*theads = this._elementTable.getElements('thead');
		 for ( i = 0; i < theads.length; i++) {
		 theads[i].destroy();
		 }*/

		tbodys = this._elementTable.getElements('tbody');
		for ( i = 0; i < tbodys.length; i++) {
			tbodys[i].destroy();
		}

		this.constructTable();

		//Nos movemos al -1 por un bug de m4jsapi, que descoloca los hijos si nos movemos al mismo registro en el que estamos
		this._node.moveToEOF();
		this._node.moveTo(indexOld);

	},

	/**
	 * Function to update row
	 * @param index register
	 */
	update : function(index) {

		if (index != this._node.getCurrent()) {
			this._node.moveTo(index);
		}
		var tr = this.findTR(index);

		if (tr != null) {

			tr.empty();

			//destroy tr special
			var i;
			for ( i = 0; this._listFxSpecialtr.length; i++) {
				if (this._listFxSpecialtr[i].retrieve('m4-index-special') === index) {
					this._listFxSpecialtr[i].target.destroy();
				}
			}

			if (this._oneColumn == true) {
				this.addRowOneColumn(tr);
			} else {
				this.addRow(tr);
			}
		}
	},

	initialize : function(idElement) {'use strict';

		this._idContainer = idElement;

		this._element = new Element('div', {
			'class' : 'm4-container-table'
		});

		$(idElement).grab(this._element);

		//create table
		this._elementTable = new Element('table');
		this._divTable = new Element('div', {
			'styles' : {
				'position' : 'relative'
			}
		});

		this._divTable = new Element('div', {
			'styles' : {
				'position' : 'relative'
			}
		});

		//Div bottom header
		this._elementSubHeader = new Element('div', {
			'class' : 'm4-table-subHedaer'
		});

		//div bottom table
		this._elementFooter = new Element('div', {
			'class' : 'm4-table-footer'
		});

		this._divTable.adopt(this._elementSubHeader, this._elementTable, this._elementFooter);
		this._element.grab(this._divTable);

		//load resources table
		//meta4.widget.utils.loadResourcesTable();
		//meta4.widget.utils.loadFile('/css/meta4.widget.table.css');

		this._heightTable = Math.max(($(idElement).getSize().y), 0);

	}
});

meta4.widget.Table = new Class({

	Extends : meta4.widget.TableBase,
	initialize : function(idElement) {
		this.parent(idElement);
	},

	options : {
		//default false
		allowDelete : false
	},

	createCell : function(elementProperties, value, idItem, td) {

		var element = null;
		if (elementProperties != null && elementProperties.callbackCreate) {
			element = elementProperties.callbackCreate(elementProperties, this._channel, this._node.getId(), idItem, td);
		} else if (elementProperties !== null && elementProperties.nodeName) {
			//only img
			if (elementProperties.nodeName == meta4.widget.TypeElement.image || elementProperties.nodeName == meta4.widget.TypeElement.m4DocManage) {
				element = meta4.widget.element.createWithBind(elementProperties, this._channel, this._node.getId(), idItem, td);
			} else if (elementProperties.nodeName == meta4.widget.TypeElement.m4Select || elementProperties.nodeName == meta4.widget.TypeElement.m4Slider) {
				//if m4select or m4slider search value of node aux

				var value = meta4.data.utils.getValue(this._node, idItem);

				var indexReg = meta4.data.utils.findRegister(this._channel.getNode(elementProperties.idNodeAux), elementProperties.idItemValueAux, value);
				if (indexReg != -1) {
					this._channel.getNode(elementProperties.idNodeAux).moveTo(indexReg);

					var text = meta4.data.utils.getValue(this._channel.getNode(elementProperties.idNodeAux), elementProperties.idItemNameAux);

					var element = new Element('label', elementProperties);
					element.set('html', text);

					td.grab(element);
				}

			} else if (elementProperties.nodeName === meta4.widget.TypeElement.m4ProgressBar) {
				elementProperties.editable = false;
				element = meta4.widget.element.createWithBind(elementProperties, this._channel, this._node.getId(), idItem, td);
			} else if (elementProperties.nodeName === 'textArea' || elementProperties.nodeName === 'textarea') {
				elementProperties.editable = false;
				element = meta4.widget.element.createWithBind(elementProperties, this._channel, this._node.getId(), idItem, td);
			} else if (elementProperties.nodeName === 'formattedText') {
				td.set('html', value);
			} else {
				//add only text content
				elementProperties.nodeName = 'label';
				element = meta4.widget.element.createWithBind(elementProperties, this._channel, this._node.getId(), idItem, td);
			}
		} else {
			//add only text content
			elementProperties = {};
			elementProperties.nodeName = 'label';
			element = meta4.widget.element.createWithBind(elementProperties, this._channel, this._node.getId(), idItem, td);
		}
		return element;
	},

	draw : function(channel, idNode, options) {

		//default no delete row
		this.options.allowDelete = false;
		this.parent(channel, idNode, options);
		//set table fixed head

		if (this._oneColumn == false && this.options.fixedHead) {

			//Para IE no funciona el metodo que se calcula de forma dinamica
			var browserUserAgent = navigator.userAgent;
			
			if(browserUserAgent.indexOf("MSIE") === -1)
			{
				//Calculamos la altura que tienen estos objetos			
				var heightSearchHeader = this._elementSearch.getSize().y + this._elementHeader.getSize().y;
				var heightpercent = 'calc(' + this.options.heightPercent + ' - ' + heightSearchHeader + 'px)';
				
				this._elementTable.makeFixedHead(heightpercent, this.options.width);
			}
			else
			{
				this._elementTable.makeFixedHead(this.options.height, this.options.width);
			}
		}
	}
});

meta4.widget.TableWritable = new Class({

	Extends : meta4.widget.TableBase,
	initialize : function(idElement) {
		this.parent(idElement);
	},

	isTableWritable : function() {
		return true;
	},

	draw : function(channel, idNode, options) {

		//call draw parent
		this.parent(channel, idNode, options);

		//set table fixed head
		if (this._oneColumn == false && this.options.fixedHead) {
			this._elementTable.makeFixedHead(this.options.height, this.options.width);
		}
	}
});

meta4.widget.PersonsList = new Class({

	Extends : meta4.widget.Table,
	initialize : function(idElement) {
		this.parent(idElement);
	},

	onDrawRowPersonList : function(td, node) {

		//painting each of the rows in the table on the left
		var div = new Element('div', {
			'class' : 'm4-table-listPerson-div'
		});

		td.grab(div);

		var divImage = new Element('div');
		divImage.addClass('m4-table-listPerson-divImg');

		var img = new Element('img', {
			'src' : meta4.data.utils.getValue(node, this.options.idItemImg)
		});

		var divData = new Element('div');
		divData.addClass('m4-table-listPerson-divData');

		var iItems;
		for ( iItems = 0; iItems < this.options.idsItems.length; iItems++) {

			var className = '';
			if (iItems === 0) {
				className = 'm4-table-listPerson-first';
			}

			var label = new Element('label', {
				'class' : className,
				'html' : meta4.data.utils.getValue(node, this.options.idsItems[iItems])
			});

			divData.adopt(label);

		}

		divImage.grab(img);
		div.adopt(divImage, divData);

	},

	drawPersonsList : function(channel, idNode, options) {'use strict';
		this._oneColumn = true;

		this.options.onDrawRow = this.onDrawRowPersonList.bind(this);

		this.initializeM4Table(channel, idNode, options);

		if (this._heightTable > 0) {
			var browserUserAgent = navigator.userAgent;
	
			//Para IE no funciona el metodo que se calcula de forma dinamica
			if(browserUserAgent.indexOf("MSIE") === -1)
			{
				var heightSearchHeader = this._elementSearch.getSize().y + this._elementHeader.getSize().y;
				
				this._divTable.setStyle('height', 'calc(100% - ' + heightSearchHeader + 'px)');
			}
			else
			{
				this._divTable.setStyle('height', this._heightTable + 'px');
			}
		}
		this._divTable.setStyle('overflow', 'auto');
	}
});

//@ sourceURL=meta4.widget.table.js
