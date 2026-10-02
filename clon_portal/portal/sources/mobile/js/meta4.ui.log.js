/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: meta4.ui.log.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */


/*global jQuery*/

var meta4 = meta4 || {};

meta4.ui = meta4.ui || {};

meta4.ui.log = meta4.ui.log || {};

meta4.ui.log = ( function() {'use strict';

	function _showPopUp(message) {
		if (message !== null) {
			var errorPopup = jQuery('#errorPopup');
			var pError;

			if (errorPopup.length === 0) {

				errorPopup = jQuery('<div></div>');
				errorPopup.attr('data-role', 'popup');
				errorPopup.attr('class', 'ui-content');
				 
				errorPopup.attr('id', 'errorPopup');

                var anchor = jQuery('<a></a>');
                anchor.attr('href', '#');
                anchor.attr('data-rel', 'back');
                anchor.attr('data-role', 'button');
                anchor.attr('data-icon', 'delete');
                anchor.attr('data-iconpos', 'notext');
                anchor.attr('class', 'ui-btn-right');
                
                pError = jQuery('<p></p>');

				errorPopup.append(anchor, pError);

				jQuery('body').append(errorPopup);
				
				errorPopup.trigger("create");
			}

			pError = jQuery('#errorPopup p');

			pError.text(message);

            if (meta4.mobile.isPageInitialized === false){
                jQuery.mobile.initializePage();                    
            }

            var curTheme = jQuery.mobile.page.prototype.options.theme;
            var popupTheme;
            if (curTheme == "b") {popupTheme = "a";} else {popupTheme = "b";};

			errorPopup.popup();
			errorPopup.popup({
				corners : false,
                overlayTheme: popupTheme
			});
			
            errorPopup.popup("open");
            
		}
	}

	function _getFirstMessage(request) {

		//1. Get message from request
		var errorMessage = request.getErrorMessage();
		var message = errorMessage;
		
		if (errorMessage === null) {
			//2. if null get first message from error stack
			var logMessage = request.getLogMessage(0);
			if (logMessage !== null) {
				message = logMessage.getDescription();
			}
			
		}else{
		    
		    var goHome = false;
		    
            var errorType = request.getErrorType();
            if (errorType !== null){
                
                goHome = true;
                
                //var ordinal = errorType.getAsIndex();
                var type = errorType.getAsString();
                
                //NONE, DEFAULT, NO_SESSION, SESSION_TIMEOUT;
                    
                if (type === 'SESSION_TIMEOUT'){
                    
                    var defaultError = 'Your session has expired because you have disconnected or been inactive for some time.';
                    message = meta4.ui.translate.getTranslate('_sessionTimeout', defaultError);
                }
            }
            
            var errorCode = request.getErrorCode(); 
            if ( errorCode > 0 ){
                
                goHome = true;
                
                if (errorCode === 401 || errorCode === 500 ){
                    var defaultError = 'Your session has expired because you have disconnected or been inactive for some time.';
                    //'Your session has expired because you have disconnected or been inactive for some time.';
                    message = meta4.ui.translate.getTranslate('_sessionTimeout', defaultError);
                }
            }
            
            if (goHome){
                setTimeout(function() {
				//0262779
				//alert("goHome");
				//window.location.href = '../shco_g0/shco_gen_logout'+'.'+'j'+'sp';
				window.location.href = '/mobile/index'+'.'+'j'+'sp';
                }, 4000);
            }  
		}

		return message;
	}

	//Private
	//show Errors from a m4executor request
	function _showErrors(request) {

		//for mobile app just show the first message
        var message = _getFirstMessage(request);
            
		_showPopUp(message);
		
		  
	}

    function _showUnknownError(error, url, line) {
        
        //Los errores de jquery mobile no los sacamos a pantalla
        if (url.indexOf("jquery.mobile.js") === -1 ){

            var message = "Error:";
            message += error + "\n";
            //message += "(URL: " + url + ". Línea " + line + ")";
    
            _showPopUp(message);
        }

        return true;
    }
    
	

	//Public
	return {

		showErrors : function(response) {
			_showErrors(response);
		},
		showUnknownError : function(message, url, line) {
			_showUnknownError(message, url, line);
		},
		showMsg : function(msg) {
			_showPopUp(msg);
		}
	};
}());

meta4.data = {};
meta4.widget = {};
meta4.data.log = {};
meta4.widget.log = {};
meta4.widget.log.showErrors = function(){};
meta4.data.log.addErrorMessage = meta4.ui.log.showMsg;

//error manage
window.onerror = meta4.ui.log.showUnknownError;
