/*
 @(#)FileVersion: 811.000.025
 @(#)FileDescription:
 @(#)CompanyName: Meta4 Spain, S.A.
 @(#)LegalCopyright: (c)2014
 @(#)ProductName: PeopleNet KSystem
 @(#)ProductVersion: 8.1SP1
 @(#)InternalName: form.js
 @(#)Date: 01/01/2014
 */

/*global $, $$, Element,Class, Options, Events*/

var meta4 = meta4 || {};

meta4.widget = meta4.widget || {};

meta4.widget.Form = new Class({

	//implements class Options and Evento (mootools)
	Implements : [meta4.widget.Options, Events],
	_channel : null,
	_node : null,
	_element : null,
	_visibleItems : null,
	_dataValidations : null,
	_dataEvents : null,
	_optionsValidation : null,

	options : {

		//Action button
		actionbutton : null,

		//Validations
		validations : null,

		//items of columns, default null
		//if itemsColumns != null _visibleItems == itemsColumns
		visibleItems : null,

		//html element type that will be painted in each item
		itemTypes : [],

		//title of form
		title : null,

		//text of description form
		description : null,

		//show title
		showTitle : true,

		//makePopUp
		makePopUp : true,

		//add register to node
		addRegister : true,

		//Class that applies to normal tables
		classDiv : '',

		//columns number of form
		columnsNumber : 1,

		//event to paint form
		onFormDraw : function() {
			this.defaultFormDraw();
		}
	},

	getElement : function() {
		return this._element;
	},

	getVisibleItemsForm : function() {
		var i;
		var items = [];
		for (i in this.options.itemTypes) {
			items.push(i);
		}
		return items;
	},

	defaultFormDraw : function() {

		this._visibleItems = this.getVisibleItemsForm();

		var table = new Element('table', {
			'class' : 'm4-form-table'
		});

		this.divFormRegister.grab(table);

		var auxColumnNumber = 0;
		var tr;

		for ( j = 0; j < this._visibleItems.length; j++) {

			if (auxColumnNumber == 0) {
				tr = new Element('tr');
			}
			//new row
			auxColumnNumber = auxColumnNumber + 1;
			if (this.options.columnsNumber === auxColumnNumber) {
				auxColumnNumber = 0;
			}

			var tdLabel = new Element('td');
			var tdInput = new Element('td');

			table.grab(tr.adopt(tdLabel, tdInput));

			var elementProperties = null;

			var item = this._node.getItemMetadata(this._visibleItems[j]);
			var value = item.getProperty("Name");

			var label = new Element('label', {
				'html' : item.getProperty("Name")
			});

			var isPk = item.getProperty("ClientNotNull");
			if (isPk === "1") {
				label.addClass('m4-form-labelBold');
			}

			tdLabel.grab(label);

			if (this.options.itemTypes[this._visibleItems[j]]) {
				elementProperties = this.options.itemTypes[this._visibleItems[j]];
			}

			var elementForm;

			if (elementProperties !== null && elementProperties.nodeName) {
				elementForm = meta4.widget.element.createWithBind(elementProperties, this._channel, this._node.getId(), this._visibleItems[j], tdInput);
			} else if (elementProperties !== null && elementProperties.multipleItem) {
				//if item is multiple
				var i;
				tdInput.addClass('m4-form-multipleItem');

				if (elementProperties.text) {
					//change text label
					label.set('text', elementProperties.text);
				}
				for (multipleId in elementProperties.multipleItem) {
					if (elementProperties.multipleItem[multipleId].nodeName) {
						elementForm = meta4.widget.element.createWithBind(elementProperties.multipleItem[multipleId], this._channel, this._node.getId(), multipleId, tdInput);
						var item = this._node.getItemMetadata(multipleId);
						var nameItem = item.getProperty("Name");
						elementForm.set('title', nameItem);
						this.addClassElementForm(item, elementForm);
					}
				}
			} else {
				//default
				if (elementProperties === null) {
					elementProperties = new Object();
				}
				elementProperties.nodeName = meta4.widget.TypeElement.input;
				elementForm = meta4.widget.element.createWithBind(elementProperties, this._channel, this._node.getId(), this._visibleItems[j], tdInput);
			}

			//add classLabel
			if (elementProperties['class'] !== undefined) {
				label.addClass('m4-form-label-' + elementProperties['class']);
			}

			this.addClassElementForm(item, elementForm);
		}
	},

	createFields : function() {
		var j;

		if (this.options.addRegister == true) {
			this._node.addRecord();
		}

		this.divFormRegister = new Element('div');
		this.divParentForm.grab(this.divFormRegister);

		var obj = {
			m4Form : this,
			container : this.divFormRegister
		};
		this.fireEvent('formDraw', obj);

	},

	/**
	 *Function to add class element, according precision
	 */
	addClassElementForm : function(item, elementForm) {
		if (elementForm.tagName !== 'DIV' && elementForm.tagName !== 'SELECT') {
			var precision = parseInt(item.getProperty("Precision"));
			if (precision <= 5) {
				elementForm.addClass('m4-form-labelIput5');
			} else if (precision <= 10) {
				elementForm.addClass('m4-form-labelIput10');
			} else if (precision <= 25) {
				elementForm.addClass('m4-form-labelIput25');
			} else {
				elementForm.addClass('m4-form-labelIput100');
			}
		}
	},

	/**
	 *Function to add element to popUp
	 */
	addElement : function(element, pos) {
		if (pos == null || pos == undefined) {
			pos = 'bottom';
		}
		this._element.grab(element, pos);
	},

	destroyPopUp : function() {
		this.containerPopUp.destroy();
	},

	destroyElement : function() {
		this._element.destroy();
	},

	//Añadimos las validaciones necesarias
	setValidations : function() {
		if (this._dataValidations.length > 0) {
			var objValidation;
			var optionsValidationAux = [];

			var a = this._dataValidations;
			// Con el objeto this no se puede iterar
			a.forEach(function(entryVal) {
				objValidation = new meta4.data.utils.ValidationItem(entryVal[0], entryVal[1], entryVal[2]);
				optionsValidationAux.push(objValidation);

			});
		}
		return optionsValidationAux;
	},

	//Miramos las validaciones y las añadimos
	AddErrorsValidation : function(idValidation) {
		var a = this._dataValidations;
		// Con el objeto this no se puede iterar
		a.forEach(function(entryVal) {
			var posDataValidation = entryVal.indexOf(idValidation);

			if (posDataValidation === 0) {
				meta4.data.log.addErrorMessage(entryVal[3]);
			}
		});
	},

	//Gestionamos los errores y validaciones del evento del formulario
	checkErrors : function(eventButton) {
		var errors = meta4.data.utils.checkCurrentNodeValues(this._channel.getNode(this._node.getId()), this._optionsValidation);

		//Gestionamos los mensajes de error de las validaciones
		for (var err = 0; err < errors.length; err++) {
			if (errors[err].idValidation !== 'isNull' && errors[err].idValidation !== 'invalidValue') {
				if (eventButton != null) {
					var a = this._dataEvents;
					// Con el objeto this no se puede iterar
					a.forEach( function(entryEv) {
						var posDataEv = entryEv.indexOf(eventButton);

						if (posDataEv === 0) {
							//Validaciones
							this._dataValidations = entryEv[1];
							this.AddErrorsValidation(errors[err].idValidation);
						}
					}.bind(this));
				} else {
					//Validaciones
					this.AddErrorsValidation(errors[err].idValidation);
				}
			} else {
				var message = meta4.widget.translate.getTranslate('_gen_specData').m4format(this._channel.getNode(this._node.getId()).getItemMetadata(errors[err].idItem).getProperty('Name'));

				meta4.data.log.addErrorMessage(message);
			}
		}

		if (errors.length === 0) {
			if (this.options.actionbutton !== null) {
				this.destroyPopUp();
			}
			return false;
		} else {
			meta4.data.log.addErrorMessage(meta4.widget.translate.getTranslate('_gen_mandatoryData'));
			meta4.widget.log.showErrors(meta4.data.log);
			return true;
		}
	},

	showErrors : function() {
		return this.checkErrors(null);
	},

	initialize : function(channel, idNode, options) {'use strict';

		this._channel = channel;
		this.containerPopUp
		this._node = this._channel.getNode(idNode);

		this.setOptions(options);

		this._element = new Element('div', options);
		//default class
		this._element.addClass('m4-form ' + this.options.classDiv);

		if (this.options.showTitle === true) {

			if (this.options.title === null) {
				var titleForm = this._node.getNodeMetadata().getProperty('Name');
			} else {
				var titleForm = this.options.title;
			}

			//title popUp
			var h2 = new Element('h2', {
				'class' : 'm4-form-title',
				'html' : titleForm
			});
			this._element.grab(h2);
		}

		if (this.options.description !== null) {

			//label description
			var labelDesc = new Element('label', {
				'class' : 'm4-form-description',
				'html' : this.options.description
			});
			this._element.grab(labelDesc);
		}

		this.divParentForm = new Element('div', {
			'class' : 'm4-form-div'
		});

		this._element.grab(this.divParentForm);

		this.createFields();

		if (this.options.makePopUp === true) {
			this.containerPopUp = meta4.widget.utils.makePopUp(this._element);
		}

		//Se han definido las validaciones sin la creación de boton.
		if (this.options.validations !== null) {
			this._dataValidations = this.options.validations;
			this._optionsValidation = this.setValidations();
		}
		//Se ha definido la estructura del botón, etc..
		else if (this.options.actionbutton !== null) {
			var button = new Element('button', {
				'class' : 'popupbutton',
				text : typeof this.options.actionbutton['text'] === 'undefined' ? '' : this.options.actionbutton['text']
			});

			this._dataEvents = this.options.actionbutton['events'];
			//Miramos todos los eventos definidos
			if ( typeof this._dataEvents !== 'undefined') {
				var a = this._dataEvents;
				// Con el objeto this no se puede iterar
				a.forEach( function(entryEv) {
					var eventButton = typeof entryEv[0] === 'undefined' ? 'click' : entryEv[0];

					this._dataValidations = entryEv[1];
					this._optionsValidation = this.setValidations();

					//Si tenemos validaciones las añadimos
					if (this._optionsValidation.length > 0) {
						//Añadimos el evento
						button.addEvent(eventButton, function(object) {
							this.checkErrors(object.type);
						}.bind(this));
					}
				}.bind(this));
				//Añadimos el boton
				this._element.grab(button);
			}
		}
	},
	addRegister : function() {
		this.divFormRegister.destroy();
		this.createFields();

	}
});

//@ sourceURL=meta4.widget.form.js
