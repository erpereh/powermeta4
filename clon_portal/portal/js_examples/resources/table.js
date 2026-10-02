/*global $, $$*/

var meta4 = meta4 || {};

var examplesTable = {

	example10 : function() {

		var channel = new meta4.M4Object('EXJSAPI_COMPONENT');

		$('example10').empty();

		var table10 = new meta4.widget.Table('example10');
		var options = {
			//carga previa de la tabla
			preload : true,
			//permite multiselecci�n
			multiselect : true,
			//add sort icons to headers, no sense on one-column table
			sortable : true,
			itemTypes : {
				'VALUE_COUNTRY' : {
					noneName : 'label'
				},
				'VALUE_ADDRESS' : {
					noneName : 'label'
				},
				'VALUE_PHONE' : {
					noneName : 'label'
				}
			}
		};
		table10.draw(channel, 'EXJSAPI_WIDGET_FORM', options);
	},

	example20 : function() {

		$('example20').empty();

		var channel = new meta4.M4Object('EXJSAPI_COMPONENT');

		var table20 = new meta4.widget.Table('example20');
		var options = {
			//carga previa de la tabla
			preload : true,
			//cabecera oculta
			header : false,
			allowSelection : true,
			//funci�n que se ejecuta cuando se hace click sobre una fila
			onRowClick : function() {
				var row = channel.getNode('EXJSAPI_WIDGET_FORM').getCurrent() + 1;
				alert("Ha pulsado la fila " + row);
			},
			//agrupamiento por ciudad
			groupBy : 'VALUE_COUNTRY',
			itemTypes : {
				'VALUE_COUNTRY' : {
					noneName : 'label'
				},
				'VALUE_ADDRESS' : {
					noneName : 'label'
				},
				'VALUE_PHONE' : {
					noneName : 'label'
				}
			}
		};
		table20.draw(channel, 'EXJSAPI_WIDGET_FORM', options);
	},

	example30 : function() {

		$('example30').empty();

		var channel = new meta4.M4Object('EXJSAPI_COMPONENT');

		var table30 = new meta4.widget.Table('example30', options);
		var options = {
			slider : true,
			//carga previa de la tabla
			preload : true,
			//funci�n que se ejecuta cuando se hace click sobre una fila
			onRowClick : function(target) {
				alert($(target).text());
			},
			//Código para pintar cada fila
			onDrawRow : function(td, node) {
				var name = node.getValue('VALUE_NAME');
				var address = node.getValue('VALUE_ADDRESS');
				var country = node.getValue('VALUE_COUNTRY');
				var phone = node.getValue('VALUE_PHONE');
				var email = node.getValue('VALUE_EMAIL');
				var div = new Element('div');
				div.appendText(name + ' ' + address + ' - (' + country + ') - Phone: ' + phone + ' - Email: ' + email);
				td.grab(div);
			}
		};
		table30.drawOneColumn(channel, 'EXJSAPI_WIDGET_FORM', options);
	},

	example40 : function(_channel) {

		$('example40').empty();

		var _executor = new meta4.M4Executor();
		var _channel = new meta4.M4Object('EXJSAPI_COMPONENT');

		function execute2(request) {
			var tableWritable = new meta4.widget.TableWritable('example40');

			var options = {
				itemTypes : {
					'VALUE_NAME' : {
						'nodeName' : 'input'
					},
					'VALUE_COUNTRY' : {
						'nodeName' : 'm4select',
						'idNodeAux' : 'EXJSAPI_WIDGET_FORM_AUX',
						'idItemNameAux' : 'N_COUNTRY',
						'idItemValueAux' : 'N_COUNTRY'
					},
					'STATUS' : {
						'nodeName' : 'm4ProgressBar',
						'maximun' : 100,
						'editable' : true
					}
				}
			};

			tableWritable.draw(_channel, 'EXJSAPI_WIDGET_FORM', options);

		}

		function execute1(request) {
			var request = new meta4.M4Request(_channel, 'EXJSAPI_WIDGET_FORM_AUX', 'LOAD_BLK', null);
			meta4.data.execute(request, execute2);
		}

		var request = new meta4.M4Request(_channel, 'EXJSAPI_WIDGET_FORM', 'LOAD_BLK', null);
		meta4.data.execute(request, execute1);

	},

	example50 : function() {

		$('example50').empty();

		var channel = new meta4.M4Object('EXJSAPI_COMPONENT');
		var table50 = new meta4.widget.TableWritable('example50', options);
		var options = {
			//carga previa de la tabla
			preload : true,
			onDataDraw : function() {
				if (this._listFxSpecialtr.length > 0) {

					var optionsButton = {
						'pressed' : true,
						'functionClick' : function() {
							this.toggleSpecialTr(['VALUE_ADDRESS']);
						}.bind(this),
						'textPressed' : 'ocultar filas'
					};

					var widgetButton = new meta4.widget.Button('mostrar filas', '/iconos/comment_global.png', optionsButton);
					this.addPluginHead(widgetButton.container, false);
				}
			}.bind(table50),
			//permite multiselecci�n
			itemTypes : {
				'VALUE_COUNTRY' : {
					noneName : 'label'
				},
				'VALUE_PHONE' : {
					noneName : 'label'
				}
			},
			itemTypesTr : {
				'VALUE_ADDRESS' : {
					'nodeName' : 'textarea',
					'resize' : 'none',
					styles : {
						display : 'none'
					}
				}
			}
		};
		table50.draw(channel, 'EXJSAPI_WIDGET_FORM', options);

	},

	example60 : function() {

		$('example60').empty();

		var channel = new meta4.M4Object('EXJSAPI_COMPONENT');
		var table60 = new meta4.widget.TableWritable('example60', options);
		var options = {
			//carga previa de la tabla
			preload : true,
			//permite multiseleccion
			itemTypes : {
				'VALUE_COUNTRY' : {
					noneName : 'label'
				},
				'VALUE_PHONE' : {
					noneName : 'label'
				}
			},
			onNewRow : function(object) {
				var m4Table = object.m4Table;
				var td = object.td;

				var label = new Element('label', {
					'text' : 'Has pulsado nuevo registro'
				});

				td.grab(label);
			}
		};
		table60.draw(channel, 'EXJSAPI_WIDGET_FORM', options);

	}
};

function initExample() {'use strict';

	examplesTable.example10();
	examplesTable.example20();
	examplesTable.example30();
	examplesTable.example40();
	examplesTable.example50();

}

//event to inicialice program
document.addEvent('meta4Ready', initExample);
