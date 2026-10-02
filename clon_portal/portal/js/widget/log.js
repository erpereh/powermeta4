/*
 @(#)FileVersion: 811.000.025
 @(#)FileDescription: 
 @(#)CompanyName: Meta4 Spain, S.A.
 @(#)LegalCopyright: (c)2014
 @(#)ProductName: PeopleNet KSystem
 @(#)ProductVersion: 8.1SP1
 @(#)InternalName: log.js
 @(#)Date: 01/01/2014
 */

/*global $, $$, Element, Event, Fx */

//@ sourceURL=meta4.widget.log.js

//dependencies:
//  meta4.data.js

var meta4 = meta4 || {};

meta4.widget = meta4.widget || {};

meta4.widget.log = ( function() {'use strict';

		//Efecto de ocultación del listado de errores.
		var _slideEffect;

        //Cte. separación del título
        var TITLE_SEP = '\n' + " " + "\n";
        var m4Translate = meta4.widget.translate;

		var windowCaptionError;
		var windowCaptionWarning;
		var typeError;
		var typeWarning;
		var typeDebug;
		var typeTrace;
        var systemErrorMessage = null;
        var sessionExpiredMessage = null;
        var errorMethodExecute = null;

		//Copiamos al portapapeles todos los errores
		function copyErrors(){
			var ValueMessage = $('copyMessage').get('value');
			
			$('copyMessage').focus();
			$('copyMessage').select();
			
			//Para los que tengan IE y funcione
			if (window.clipboardData && clipboardData.setData) {
    			clipboardData.setData('text', ValueMessage);
    			meta4.data.showPopUpWrapData(m4Translate.getTranslate ('_copied_errors'));
			}				
			else
			{
				//Como esto no es muy elegante y no hay forma a priori, no mostramos el mensaje
				//Se queda como algo interno, aunque hay que hacer control + c
				//alert ('Presione control + C para copiar los mensajes de error');
			}			
		}
		
		
		// Needs meta4.ui.log.css style
		//document.write('<link rel="stylesheet" href="/css/meta4.ui.log.css" />');  ESTO YA NO EXISTE

		function generateErrorWindow() {

			//capa contenedora de todo
			var divShowErrorModalWindow = new Element('div', {
				id : 'containerDivErrorlog',
				'class' : 'm4ErrorModalDiv',
				'style' : 'cursor:move'
			});

			meta4.widget.utils.makePopUp(divShowErrorModalWindow,'closedLog');
			var windowCaption;

			//Contenedor de cabecera error
			var divCopyMessage = new Element('div', {
				id : 'divCaptionErrorWarning'
			});
			
			//Título de la ventana
			var label = new Element('label', {
				text : windowCaptionError,
				id : 'windowCaptionErrorWarning'
			});
			divCopyMessage.grab(label);

			//Copiar texto de error
			var labelErrorCopy = new Element('label', {
				text : m4Translate.getTranslate ('_copy_errors'), 
				id : 'labelErrorCopy',
				styles: {marginLeft: '5px', float: 'right'}
			});

			//Copiamos al portapapeles los errores			
			label.onclick=function(){
				//Cuando queramos pedir se descomenta esta linea
				copyErrors();
			};			


			//tabla contenedora de los mensajes
			var table = new Element('table');
			var tbody = new Element('tbody', {
				id : 'maintbodyErrorlog',
				'style' : 'cursor:default'
			});
			table.grab(tbody);

			//Primer mensaje
			var divFirstMessage = new Element('div', {
				id : 'firstMessage'
			});

			//Div de Detalles con imagen.
			var divImgDetails = new Element('img', {
				id : 'logImgDetails',
				src : meta4.widget.icons.fold_horizontal
			});

			var divDetails = new Element('div', {
				'class' : 'm4expander'
			});

			divDetails.grab(divImgDetails);

			//Capa contenedora de los mensajes
			var divTableContainer = new Element('div', {
				id : 'containerMessages',
				'style' : 'cursor:default'
			});
			divTableContainer.grab(table);

			divShowErrorModalWindow.adopt(divCopyMessage, divFirstMessage, divTableContainer, divDetails);
			_slideEffect = new Fx.Slide('containerMessages');

			divImgDetails.addEvent('click', function(e) {
				e = new Event(e);
				_slideEffect.toggle();
				e.stop();
			});

			_slideEffect.hide();

			tbody = $('maintbodyErrorlog');
			tbody.empty();

			divFirstMessage = $('firstMessage');
			divFirstMessage.empty();

			divShowErrorModalWindow.style.display = 'block';
		}

		function getValuesSeverity(severity) {

			var oseverity = {};

			switch (severity) {
				case '_error_':
					oseverity.type = typeError;
					oseverity.image = meta4.widget.icons.close;
					break;
				case '_warning_':
					oseverity.type = typeWarning;
					oseverity.image = meta4.widget.icons.alert;
					break;
				case '_debugInfo_':
					oseverity.type = typeDebug;
					oseverity.image = meta4.widget.icons.data_organization;
					break;
				default:
					oseverity.type = typeTrace;
					oseverity.image = meta4.widget.icons.data_organization;
					break;
			}
			return oseverity;

		}

		function addError(message, code, severity, ul, addlabel, addtitle) {

			var errorTitle = '';

			var li1 = new Element('li');
			var li2 = new Element('li');
			ul.adopt(li1, li2);

			var labelTitle = new Element('pre', {
				'class' : 'm4ErrorTitle'
			});

			var labelMessage = new Element('pre', {
				'class' : 'm4ErrorMessage'
			});

			var imgtype = new Element('img');

			var iPosTitle = parseInt(message.indexOf(TITLE_SEP), 10);

			if (iPosTitle !== -1) {
				errorTitle = message.substring(0, iPosTitle);
				message = message.substring(iPosTitle + parseInt(TITLE_SEP.length, 10), message.length);
			} else {
				errorTitle = message;
			}

			imgtype.set('src', severity.image);

			if (addtitle)
			{
				labelTitle.set('text', errorTitle);
				li1.adopt(imgtype, labelTitle);
			}

            //Hemos metido el codigo para cuando no hay descripcion saber que el mensaje es de canal
            //|| code !== null
			if (iPosTitle !== -1 ) {
			    
			    if (code){
				    message = severity.type + ' ' + code + ". " + message;
				}   
				
				if (addlabel)
				{
					labelMessage.set('text',  message);
					li2.grab(labelMessage);
				}
			}
		}

		function getTransErrorCode(errorCode) {
		    
		    if (errorCode){
                // Se calcula módulo, submódulo y número de error
                var number = errorCode >> 24;
                var module = parseInt(number, 10);
                errorCode -= number << 24;
    
                number = errorCode >> 16;
                var subModule = parseInt(number, 10);
                errorCode -= number << 16;
    
                return module + '-' + subModule + '-' + errorCode;
			}
			return null;
		}


		function _checkJavaMessage(request) {

			var goHome = false;
			var errorType = request.getErrorType();

			var message = request.getErrorMessage();

			if (errorType !== null) {

				//NONE, DEFAULT, NO_SESSION, SESSION_TIMEOUT, HTTP_REQUEST;
				var type = errorType.getAsString();

                if (type === 'NO_SESSION' || type === 'SESSION_TIMEOUT' || type === 'HTTP_REQUEST' ) {
                    goHome = true;    
                }
				if (type === 'SESSION_TIMEOUT') {

					message = sessionExpiredMessage;
				}
			}

			var errorCode = request.getErrorCode();
			if (errorCode > 0) {

				goHome = true;

				//Por borrar cookies, o server down
				if (errorCode === 401 || errorCode === 500) {
					message = sessionExpiredMessage;
				}
			}
			
			if (goHome) {
				setTimeout(function() {
					window.location.href = meta4.widget.javaserverpages.logout;
				}, 4000);
			}

			return message;
		}

        function _getJavaStackMessage(request){
            
            var errorMessage;
            var severityValue;
            
            if (request.getErrorException() !== null) {
    
                errorMessage = request.getErrorException().stack;

                if (errorMessage) {
                    
                    return errorMessage;
                }
            }
        }		
		
		
		function _showErrorWindow(request) {

			var i;
			var logMessage, message, code;

			var errorMessage = request.getErrorMessage();

			if (request.getLogSize() === 0 && errorMessage === null) {
				return;
			}

            if($('containerDivErrorlog') == null){
                generateErrorWindow();    
            }
			
			var divShowError = $('overlayDivErrorlog');
			var divShowErrorModalWindow = $('containerDivErrorlog');

			var tbody = $('maintbodyErrorlog');
			tbody.empty();
			var divFirstMessage = $('firstMessage');

			//Pintamos el primer mensaje.
			var ul = new Element('ul');

			var severityValue = {};

            //Primer mensaje
			logMessage = request.getLogMessage(0);
			message = logMessage.getDescription();
			code = getTransErrorCode(logMessage.getCode());

			severityValue = getValuesSeverity(logMessage.getSeverity());
			
			if (severityValue.type != typeError)
			{
				$('windowCaptionErrorWarning').set('text', windowCaptionWarning);
			}
			
			addError(message, code, severityValue, ul, false, true);

            //No estamos controlando reentradas¡¡
            divFirstMessage.empty();
			
			//Caja de texto donde se añaden los mensajes a copiar
			var inputError = new Element('textarea ', {
										id : 'copyMessage',
										styles: {color: 'transparent', background:'transparent',height: '1px', 
												 width: '1px', zIndex: '-1', position: 'relative', top: '18px', left: '8px'}
									});

			inputError.onkeydown =function(e){
				//Pulsamos control c
	    		if ( e.ctrlKey && (e.which == 67) ) {
	      			meta4.data.showPopUpWrapData(m4Translate.getTranslate ('_copied_errors'));
	   			}
			};
				
			//Ponemos el mensaje oculto donde el boton
			divFirstMessage.grab(inputError);
            
			divFirstMessage.grab(ul);

			$('logImgDetails').set('styles', {
				display : 'none'
			});

			var tr1;

			//create list of selected item
			if (request.getLogSize() > 0) {
				var copymessage = "";
				
				for ( i = 0; i < request.getLogSize(); i++) {

					logMessage = request.getLogMessage(i);
					message = logMessage.getDescription();
					code = getTransErrorCode(logMessage.getCode());

					severityValue = {};

					severityValue = getValuesSeverity(logMessage.getSeverity());

					ul = new Element('ul');
					
					addError(message, code, severityValue, ul, true, i===0 ? false : true);
					
					if (code != null)
					{
						copymessage = copymessage + code + " " + message + TITLE_SEP;
					}
					else
					{
						copymessage = copymessage + message + TITLE_SEP;
					}
					
					tr1 = new Element('tr');

					tr1.grab(ul);
					tbody.grab(tr1);
				}
				//Poenmos los mensajes de error aqui para poder copiarlos
				$('copyMessage').set('value', copymessage);
				
				var showButton = true;
				//Si sólo hay un mensaje y no tiene descripicion no se muestra el boton de expandir detalle
				if (request.getLogSize() === 1){ 
					for (var i=0; i<tbody.childNodes.length; i++){
					    
						var item = tbody.childNodes[i];
						if (item != undefined){
						    
							var itemUl = item.childNodes[0];
							if (itemUl != undefined){
							    
								var itemDes = itemUl.childNodes[1];
								if (itemDes != undefined){
								    
								    //textContent is not supported by IE7/8. 264430
								    var text  = itemDes.get('text');
								    
									if (text.length === 0){
										showButton = false;
										break;
									}
								}
							}
						}
					}
				}
				//Mostramos el boton
				if (showButton)
				{
					$('logImgDetails').set('style', '');
				}
			}

			request.resetError();
		}

        function _getTraslations(){
            if (!systemErrorMessage){
                
                if (window['_err_system'] === undefined){
                    meta4.loadSync.loadJs('/translations/meta4.widget_en.js');
                } 
                
                errorMethodExecute = m4Translate.getTranslate ('_err_requestExecute');//"Error ejecutando método: %1:s!%2:s.%3:s";
                systemErrorMessage = m4Translate.getTranslate ('_err_system');//"** Se ha producido un error del sistema.\n \nConsulte con el administrador.";
                sessionExpiredMessage = m4Translate.getTranslate ('_err_inactivity');//'Your session has expired because you have disconnected or been inactive for some time.';
                
                windowCaptionError = m4Translate.getTranslate ('_label_errorWindowTitle');
                windowCaptionWarning = m4Translate.getTranslate ('_label_warningWindowTitle');
                typeError = m4Translate.getTranslate ('_label_error');
                typeWarning = m4Translate.getTranslate ('_label_warning');
                typeDebug = m4Translate.getTranslate ('_label_debug');
                typeTrace = m4Translate.getTranslate ('_label_trace');
                
            }
        }
        
        //show Errors from a request object
        function _showErrors(request) {
            
            var i;
            var errorMessage = request.getErrorMessage();

            if (request.getLogSize() === 0 && errorMessage === null) {
                return;
            }
            
            _getTraslations();
            
            //Si es request movemos los errores a la pila meta4.data.log
            if (request.getObject !== undefined){
                var logSize = request.getLogSize();
                for ( i = 0; i < logSize ; i++) {
    
                    var logMessage = request.getLogMessage(i);
                    
                    var message = logMessage.getDescription();
                    var code = logMessage.getCode();
                    var severity = logMessage.getSeverity();
                    
                    meta4.data.log.addLogMessage(severity , message, code);
                }
            }
            
            
            if (errorMessage !== null){
                
                //Error de la pila
                if (request.getObject()){
                    errorMessage = errorMethodExecute.m4format(request.getObject().getId(), request.getNodeId(), request.getMethodId());
                    //errorMessage = "Error ejecutando método: " + request.getObject().getId() + '!' + request.getNodeId() + '.' + request.getMethodId();
                
                    meta4.data.log.addErrorMessage(errorMessage);
                }

                //Error de la pila
                errorMessage = _getJavaStackMessage (request);
                
                meta4.data.log.addErrorMessage(errorMessage);

                //Error de java
                errorMessage = _checkJavaMessage(request);
                meta4.data.log.addErrorMessage(errorMessage);
            
                //Error genérico de sistema para que sea el primero bonito
                meta4.data.log.addErrorMessage(systemErrorMessage);

            }
            
            _showErrorWindow(meta4.data.log);
            
        }
        
        function _showUnknownError(message, url, line) {

            _getTraslations();
            
            meta4.data.log.addErrorMessage(message + ' (line: ' + line + ')' + ' (url: ' + url + ')');
            
            meta4.data.log.addErrorMessage(systemErrorMessage);
            _showErrorWindow(meta4.data.log);

        }
        
		//Public
		return {

			showErrors : function(request) {
				_showErrors(request);
			},
			showUnknownError : function(message, url, line) {
				_showUnknownError(message, url, line);
			}
		};
	}());

//error management
window.onerror = meta4.widget.log.showUnknownError;

