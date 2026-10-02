/*global $, $$, Element,Class, Options, Events*/

var meta4 = meta4 || {};

meta4.widget = meta4.widget || {};

meta4.widget.docmanage = new Class({

	//implements class Options and Evento (mootools)
	Implements : [meta4.widget.Options, Events],
	_channel : null,
	_idNode : null,
	_item : null,
	_documentM4 : null,
	_element : null,
	_container : null,
	options : {
		'readOnly' : null,
		'nodeId' : null,
		'itemId' : null,
		'documentM4' : null
	},

	/* docmanage: identificador del div donde queremos construir la barra */
	/* options: array de opciones para construir la barra */
	initialize : function(docmanage, channel, idNode, item, options) {'use strict';

		this._channel = channel;
		this._idNode = idNode;
		this._item = item;
		this._documentM4 = options.documentM4;
		this._element = $(docmanage);
        
        this.setOptions(options);
        //this.options = options;

		this.drawDoc();
	},
	drawDoc : function(){
		
		var _docAdd = '*Adjuntar el documento'
		var _docAddTitle = '*Adjuntar el documento'
		var _docAddDes = '*Selecciona el documento que deseas y pulsa enviar para adjuntarlo.'
		var _docView = '*Ver el documento'
		var _docDelete = '*Quitar el documento'
		var _docDeleteSure = '*¿Estás seguro de retirar el documento?'
		var _docEdit = '*Acceder a otros datos'
		var _docEditTitle = '*Información del documento'
		var _docEditDes = '*En esta pantalla puede consultar los datos de un documento.'
		var _docOK = '*Aceptar'
 		
 		var checkButtons = function(){
		
			//var iddoc = meta4.data.utils.getValue(node, 'ID_DOC');

			if (iddocFUN > 0){	
				if (this.options.onlyRead){
					imgAdd.setStyle('opacity','0.2');
					imgView.setStyle('opacity','1');
					imgDelete.setStyle('opacity','0.2');
					imgEdit.setStyle('opacity','1');
				} 
				else
				{
			 		imgAdd.setStyle('opacity','0.2');
					imgView.setStyle('opacity','1');
					imgDelete.setStyle('opacity','1');
					imgEdit.setStyle('opacity','1');
				}	
			}
			if (iddocFUN < 0){
				if (this.options.onlyRead){
			 		imgAdd.setStyle('opacity','0,2');
					imgView.setStyle('opacity','0.2');
					imgDelete.setStyle('opacity','0,2');
					imgEdit.setStyle('opacity','0.2');
				} 
				else
				{
			 		imgAdd.setStyle('opacity','1');
					imgView.setStyle('opacity','0.2');
					imgDelete.setStyle('opacity','1');
					imgEdit.setStyle('opacity','0.2');
				}
			}
			if (!(iddocFUN > 0 || iddocFUN < 0)){
				if (this.options.onlyRead){
					imgAdd.setStyle('opacity','0.2');
					imgView.setStyle('opacity','0.2');
					imgDelete.setStyle('opacity','0.2');
					imgEdit.setStyle('opacity','0.2');
				} 
				else
				{
			 		imgAdd.setStyle('opacity','1');
					imgView.setStyle('opacity','0.2');
					imgDelete.setStyle('opacity','0.2');
					imgEdit.setStyle('opacity','0.2');
				}
			}
		}.bind(this)

		// recupero la posición y el iddoc del nodo funcional
		var nodeFUN = this._channel.getNode(this._idNode);
		var index = nodeFUN.getCurrent();
		var iddocFUN = meta4.data.utils.getValue(nodeFUN, this._item);
		
		// recupero la posición y el iddoc del nodo gestor documental		
		var node = this._documentM4.getNode('SRTC_FL_DOCUMENT_MANAGEMENT');
		if (index >= node.count()){
			node.addRecord();
		}else{
			node.moveTo(index);
		}
		var iddoc = meta4.data.utils.getValue(node, 'ID_DOC');
		
		var count =  1 * (-1);
		
		// y empiezo a pintar la botonera
		this._element.empty();
		
		var divContent = new Element('div', {
			'class' : 'm4-docmanage-content'
		});
		var inputTitle = new Element('input', {
			'type' : 'text',
			'disabled' : 'true'
		});
		var imgAdd = new Element('img', {
			'src' : '/iconos/ic_attach_16_16_100.png',
			'title' : _docAdd,
			'class' : 'm4-docmanage-img',
			events: {
        		click: function(index){     			
            		if (!(iddocFUN > 0)){
	            		var options = {
	            			addRegister : false,
	            			title : _docAddTitle,
							description : _docAddDes,
							itemTypes : {
								'TITLE' : {
									'events' : {
										'keyup' : function(event){
											var title = meta4.data.utils.getValue(node, 'TITLE');
											var uuid_upload = meta4.data.utils.getValue(node, 'UUID_UPLOAD');
											if (this.get('value') !== null && this.get('value') !== '' && uuid_upload !== 'null' && uuid_upload !== null && uuid_upload !== ''){
												$$('.m4-docmanage-add-ok').removeClass('noHover');
											}else{
												$$('.m4-docmanage-add-ok').addClass('noHover');
											}
										}
									}
								}
	                        }
	                    }
	                    
	                    nodeFUN.moveTo(index);
	                    node.moveTo(index);
	                    
	                    meta4.data.utils.setValue(node,'TITLE', meta4.data.utils.getValue(node,'TITLE'));
						var form = new meta4.widget.Form(this._documentM4, 'SRTC_FL_DOCUMENT_MANAGEMENT', options);
						
						var divUploadFile = new Element('div',{'class' : 'm4-docmanage-upload-file'});
						var properties = {			
							'onComplete' : function(uuid){
								meta4.data.utils.setValue(node, 'UUID_UPLOAD', uuid.UUID);
								var title = meta4.data.utils.getValue(node, 'TITLE');
								var uuid_upload = meta4.data.utils.getValue(node, 'UUID_UPLOAD');
								if (title !== null && title !== '' && uuid_upload !== 'null' && uuid_upload !== null && uuid_upload !== ''){
									$$('.m4-docmanage-add-ok').removeClass('noHover');
								}else{
									$$('.m4-docmanage-add-ok').addClass('noHover');
								}
							}		
						};
						
						var uploadFile = meta4.widget.element.createUploadFile(properties, divUploadFile);
						
						var button = new Element('button', {
							'class' : 'popupbutton noHover m4-docmanage-add-ok',
							text : _docOK
						});
	
						button.addEvent('click', function(form, object) {
							inputTitle.set('value', meta4.data.utils.getValue(node, 'TITLE'));
							
							meta4.data.utils.setValue(node, 'ID_DOC', count);
							meta4.data.utils.setValue(node, 'IS_NEW', 1);
							iddoc = meta4.data.utils.getValue(node, 'ID_DOC');
							
							meta4.data.utils.setValue(nodeFUN, this._item, count);
							iddocFUN = meta4.data.utils.getValue(nodeFUN, this._item);		
							
							checkButtons();
							
							count --;
											
							form.destroyPopUp();
							
						}.bind(this, form));
	
						form.addElement(divUploadFile);
						form.addElement(button);
					}
        		}.bind(this, index)
        	}
		});
		var imgView = new Element('img', {
			'src' : '/iconos/ic_compvar_16_16_0.png',
			'title' : _docView,
			'class' : 'm4-docmanage-img',
			events: {
        		click: function(index){  
        			nodeFUN.moveTo(index);
        			node.moveTo(index);
					if (iddocFUN > 0){
						var uuID = meta4.data.utils.getValue(node, 'UUID_VIEW');
						if (uuID !== null) {
							 meta4.widget.documentProvider.openDocument(uuID);
						}
					}
        		}.bind(this, index)
        	}
		});
		var imgDelete = new Element('img', {
			'src' : '/iconos/ic_del_16_16_100.png',
			'title' : _docDelete,
			'class' : 'm4-docmanage-img',
			events: {
        		click: function(index){  
        			nodeFUN.moveTo(index);
        			node.moveTo(index);
					if (iddocFUN > 0 || iddocFUN < 0){
						meta4.widget.utils.m4Confirm(_docDeleteSure, function(result){
							if (result == true) {
								inputTitle.set('value', null);
						
								meta4.data.utils.setValue(node, 'ID_DOC', null);
								meta4.data.utils.setValue(node, 'TITLE', '');
								meta4.data.utils.setValue(node, 'UUID_VIEW', '');
								meta4.data.utils.setValue(node, 'UUID_UPLOAD', '');
								meta4.data.utils.setValue(node, 'IS_NEW', 0);
								meta4.data.utils.setValue(node, 'IS_DELETE', iddoc);
								iddoc = meta4.data.utils.getValue(node, 'ID_DOC');
		
								meta4.data.utils.setValue(nodeFUN, this._item, null);
								iddocFUN = meta4.data.utils.getValue(nodeFUN, this._item);
								
								checkButtons();
							}
						}.bind(this));
					}
        		}.bind(this, index)
        	}
		});
		var imgEdit = new Element('img', {
			'src' : '/iconos/ic_info_16_16_100.png',
			'title' : _docEdit,
			'class' : 'm4-docmanage-img',
			events: {
        		click: function(index){  
        			nodeFUN.moveTo(index);
        			node.moveTo(index);
	            	if (iddocFUN > 0){
	            		var options = {
	            			addRegister : false,
	            			title : _docEditTitle,
							description : _docEditDes,
							itemTypes : {
								'ID_DOC' : {
									'disabled' : true
								},
	                            'TITLE':{
	                            	'disabled' : true
	                            },
	                            'CLASS':{
		                            'multipleItem' : {
		                            	'CLASS':{
		                            		'nodeName' : meta4.widget.TypeElement.input,
		                            		'disabled' : true
		                            	},
		                            	'CLASS_DESC':{
		                            		'nodeName' : meta4.widget.TypeElement.input,
		                            		'disabled' : true
		                            	}
		                            }
		                        },
	                            'ABSTRACT':{
	                            	'nodeName' : 'textarea',
	                            	'disabled' : true
	                            }	
	                        }
	                    }
						
						var form = new meta4.widget.Form(this._documentM4, 'SRTC_FL_DOCUMENT_MANAGEMENT', options);
						var button = new Element('button', {
							'class' : 'popupbutton',
							text : _docOK
						});
	
						button.addEvent('click', function(popUp, object) {
							form.destroyPopUp();
						}.bind(this, form));
	
						form.addElement(button);
					}
        		}.bind(this, index)
        	}
		});

		checkButtons();

		divContent.adopt(inputTitle, imgAdd, imgView, imgDelete, imgEdit);

		this._element.grab(divContent);
		
		this._container = divContent;
		
		inputTitle.set('value', meta4.data.utils.getValue(node,'TITLE'));
	},
	getContainer : function() {
		return this._container;
	},
	generateTrace : function() {
		var node = this._documentM4.getNode('SRTC_FL_DOCUMENT_MANAGEMENT');
		var trace = '';
		trace = trace + meta4.data.utils.getValue(node, 'ID_DOC') + ' - ';
		trace = trace + meta4.data.utils.getValue(node, 'TITLE') + ' - ';
		trace = trace + meta4.data.utils.getValue(node, 'UUID_VIEW') + ' - ';
		trace = trace + meta4.data.utils.getValue(node, 'UUID_UPLOAD') + ' - ';
		trace = trace + meta4.data.utils.getValue(node, 'IS_NEW') + ' - ';
		trace = trace + meta4.data.utils.getValue(node, 'IS_DELETE') + ' - ';
		meta4.data.utils.setValue(node, 'TRACE', trace);
		return trace;
	}
	
});
