/*
 @(#)FileVersion: 811.000.025
 @(#)FileDescription: 
 @(#)CompanyName: Meta4 Spain, S.A.
 @(#)LegalCopyright: (c)2014
 @(#)ProductName: PeopleNet KSystem
 @(#)ProductVersion: 8.1SP1
 @(#)InternalName: data.js
 @(#)Date: 01/02/2014
 */
var meta4 = meta4 || {};

//## M4JSAuthorize(SRTC_CONTROL_LANGUAGE,SRTC_CONTROL_LANGUAGE,GET_LANGUAGE)##
//## M4JSAuthorize(SAV_PARAMS,SAV_PARAMS,RET_VALUE)##
//##M4JSAuthorize(SRCO_PORTAL_PARAMS,SRCO_PORTAL_PARAMS,LOAD_PARAMS)##

// the security token
//var secTokenParamApp = "##M4JSSecToken##";

meta4.loadSync = ( function() {'use strict';

		function _loadJs(file) {

			var xhrObj = new XMLHttpRequest();

			// open and send a synchronous request
			xhrObj.open('GET', file, false);
			xhrObj.send('');

			// add the returned content to a newly created script tag
			var se = document.createElement('script');
			//se.language = "javascript";
			se.type = "text/javascript";
			//se.src = file;
			se.text = xhrObj.responseText;
			document.getElementsByTagName('head')[0].appendChild(se);

		}

		function _loadCss(file) {
			
			// add the returned content to a newly created script tag
			if (document.createStyleSheet) {
				document.createStyleSheet(file);
			} else {				
				document.write('<link rel="stylesheet" href="'+file+'">');
			}

		}

		return {
			loadJs : function(nameFile) {
				_loadJs(nameFile);
			},
			loadCss : function(nameFile) {
				_loadCss(nameFile);
			}
		};

	}());

meta4.data = meta4.data || {};

meta4.data = ( function() {

		var wrapData;

		return {
			execute : function(request, onSuccess, onFail) {
			    if (!wrapData){
			        wrapData = new meta4.dataWrap();
			    }
				wrapData.execute(request, onSuccess, onFail);
			},
			loadMetadata : function(meta4ObjectsIds, onSuccess, onFail) {
			    if (!wrapData){
                    wrapData = new meta4.dataWrap();
                }
				wrapData.loadMetadata(meta4ObjectsIds, onSuccess, onFail);
			}
			,
			showPopUpWrapData : function (message){
				wrapData.objLoading.showPopUp(message);
			}

		};

	}());

/**
 *Function to store request and method success and fail
 * @param {Object} request
 * @param {function} onSuccess
 * @param {function} onFail
 */
meta4.data.WrapRequest = function(request, onSuccess, onFail, objLoading) {
	
	this.request = request;
	
	this.onSuccess = function(request) {
	    if (onSuccess !== undefined) {
		  onSuccess(request);
		}
		var retValue = parseInt(request.getResult());
		if (retValue == 0) {
			objLoading.showPopUp(request.textPopUp);
		}
		objLoading.hide();
		meta4.widget.log.showErrors(request);
	};
	
	this.onFail = function(request) {
		if (onFail !== undefined) {
			onFail(request);
		}
		objLoading.hide();
		meta4.widget.log.showErrors(request);
	};
};

meta4.dataWrap = new Class({

	objLoading : null,

	initialize : function(obj) {

		this.objLoading = new meta4.widget.loading(obj);
	},

	/**
	 * Function to wrap execute (m4jsapi)
	 * @param {meta4.M4Request} request
	 * @param {function} onSuccess
	 * @param {function} onFail
	 */
	execute : function(request, onSuccess, onFail) {

		//show layer loading
		this.objLoading.setTextLoading(request.textLoading);
		this.objLoading.show();

		//create object request
		var objReq = new meta4.data.WrapRequest(request, onSuccess, onFail, this.objLoading);

		var executor = new meta4.M4Executor();
		//execute request
		executor.execute(request, objReq.onSuccess, objReq.onFail);
	},

	/**
	 * Function to wrap loadMetadata (m4jsapi)
	 * @param {array string} meta4ObjectsIds
	 * @param {function} onSuccess
	 * @param {function} onFail
	 */
	loadMetadata : function(meta4ObjectsIds, onSuccess, onFail) {

		//show layer loading
		this.objLoading.show();

		//create object request
		var objReq = new meta4.data.WrapRequest(meta4ObjectsIds, onSuccess, onFail, this.objLoading);

		var executor = new meta4.M4Executor();
		executor.loadMetadata(meta4ObjectsIds, objReq.onSuccess, objReq.onFail);
	},

	setLoading : function(obj) {
		this.objLoading = obj;
	}
});

meta4.data.log = ( function() {
		//use strict
		'use strict';

		var _errorMessage = null;
		var _stackError = [];

		var LogMessage = function(severity, description, code) {
			var _description = description;
			var _code = code;
			var _severity = severity;

			this.getDescription = function() {
				return _description;
			};
			this.getCode = function() {
				return _code;
			};
			this.getSeverity = function() {
				return _severity;
			};
		};

		/**
		 * Store an error message
		 * @param {Object} errorMessage
		 */
		function _setErrorMessage(errorMessage) {
			_errorMessage = errorMessage;
		}

		/**
		 * Get an error message
		 */
		function _getErrorMessage() {
			return _errorMessage;
		}

		function _addLogMessage(severity, description, code) {

            if (description){
                var newLogMessage = new LogMessage(severity, description, code);
    
                _stackError.push(newLogMessage);
			}
		}

        function _dumpNode(m4Node){
            
            var nodeData = {},
                oneNode = {},
                itemValue = {},
                value,
                iItem, 
                iPos,
                current;
            
            current = m4Node.getCurrent();
            
            for ( iPos = 0; iPos < m4Node.count(); iPos++){
                
                m4Node.moveTo(iPos);
                
                for ( iItem = 0; iItem < m4Node.getNItems(); iItem++) {
                    
                    var m4Item = m4Node.getItemMetadataByIndex(iItem);
                    
                    var itemId = m4Item.getProperty('Id');
                    
                    value = m4Node.getValue(itemId);
        
                    itemValue[itemId] = value;
                }
                
                oneNode['isDeleted'] = m4Node.isToDelete();
                oneNode['values'] = itemValue;
                
                nodeData['Record: ' + iPos] = oneNode;
            }
    
            m4Node.moveTo(current);
            
            var dataString = JSON.stringify(nodeData);
            
            console.log(dataString );
            
            return nodeData;                
        }
        
		return {
			getErrorMessage : function() {
				return _getErrorMessage();
			},
			setErrorMessage : function(errorMessage) {
				_setErrorMessage(errorMessage);
			},
			getErrorException : function() {
				return null;
			},
			getLogMessage : function(i) {
				return _stackError[(_stackError.length - (i + 1))];
			},
			getLogSize : function() {
				return _stackError.length;
			},
			addLogMessage : function(severity, description, code) {
				_addLogMessage(severity, description, code);
			},
			addErrorMessage : function(description) {
				_addLogMessage('_error_', description);
			},
			resetError : function() {
				_stackError = [];
			},
			dumpNode: function (m4Node){
			    return _dumpNode(m4Node);
			}
		};

	}());

meta4.loadSync.loadJs('/js/data/javascript.js');
meta4.loadSync.loadJs('/js/data/session.js');
meta4.loadSync.loadJs('/js/data/context.js');
meta4.loadSync.loadJs('/js/data/utils.js');

