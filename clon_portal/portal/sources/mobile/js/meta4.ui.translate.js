/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: meta4.ui.translate.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */


/*global jQuery*/

var meta4 = meta4 || {};

meta4.ui = meta4.ui || {};

meta4.ui.translate = meta4.ui.translate || {};

meta4.getCachedScript = function(url, options) {
 
  // allow user to set any option except for dataType, cache, and url
  options = jQuery.extend(options || {}, {
    dataType: "script",
    cache: true,
    url: url
  });
 
  // Use $.ajax() since it is more flexible than $.getScript
  // Return the jqXHR object so we can chain callbacks
  return jQuery.ajax(options);
};


    
function onExecutorFail(request) {
    
    var codeLanguage = getCookie ('M4Language_tc');
    if (codeLanguage === null){
        codeLanguage = 2;
    }
    meta4.ui.language.setCodeLanguage(codeLanguage);
    
    var prefixLanguage = getCookie ('m4LanguagePrefix');  
    if (prefixLanguage === null){
        prefixLanguage = '_en';
    }
    
    meta4.ui.language.setPrefixLanguage(prefixLanguage);
    
    meta4.getCachedScript('/mobile/translation/m4mobile' + prefixLanguage + '.js').done(function(script, textStatus) {
        meta4.ui.log.showErrors(request);
    }).fail(function(jqxhr, settings, exception) {
        meta4.ui.log.showErrors(request);    
    });
    
    
}

/*
 * Function to get text
 *
 * @param: id of variable
 */
meta4.ui.translate.getTranslate = function(id, defaultTrans) {'use strict';
    
    var translation = window[id];
    
    if (translation === undefined){
        translation = defaultTrans;
        if (translation === undefined){
            translation = "The error message '" + id + "' is not defined.";
        }
    }
	return translation;

};

/*
 * Function to get text
 *
 * @param: id of variable
 */
meta4.ui.translate.setText = function() {

	//use strict
	'use strict';

	jQuery(document).find('[data-m4trans]').each(function() {

		var nameVar = (jQuery(this).data('m4trans'));
		var textTranslate = meta4.ui.translate.getTranslate(nameVar);
		jQuery(this).text(textTranslate);
	});

	jQuery(document).find('[data-m4title]').each(function() {

		var nameVar = (jQuery(this).data('m4title'));
		var textTranslate = meta4.ui.translate.getTranslate(nameVar);
		jQuery(this).attr('Title', textTranslate);
	});

	jQuery(document).find('[data-m4placeholder]').each(function() {

		var nameVar = (jQuery(this).data('m4placeholder'));
		var textTranslate = meta4.ui.translate.getTranslate(nameVar);
		jQuery(this).attr('placeholder', textTranslate);
	});

};

meta4.ui.language = ( function(channelControlLanguage) {
		//use strict
		'use strict';

		// channel to control language of session
		var _channelControlLanguage = channelControlLanguage;

		var _codeLanguage = null;
		var _prefixLanguage = null;

		function _setCodeLanguage(val) {
		    
		    //set the variable
			_codeLanguage = val;
			
			//set the cookie
			var date = new Date();
			date.setDate(date.getDate() + 30);
			setCookie ('M4Language_tc', val, date, '/');
            			
		}

		function _setPrefixLanguage(val) {
		    //setCookie ('m4LanguagePrefix', val)
			_prefixLanguage = val;
		}

		function _getCodeLanguage() {
			return _codeLanguage;
		}

		function _getPrefixLanguage() {
			return _prefixLanguage;
		}

		function _getChannelControlLanguage() {
			return _channelControlLanguage;
		}

		/*
		 * Function to get name javascript file with translation
		 *
		 */
		function getNameFile(language) {

			//get name html
			var path = window.location.pathname;
			var nameFile = path.match(/.*\/([^/]+)\.([^?]+)/i)[1];

            //put the language
            //we must to take into account the "nonce" and "renhash"
            var noncePos = nameFile.indexOf("_nonce");
            var renhashPos = nameFile.indexOf("_renhash");
            if (noncePos != -1){
                var nameFile1 = nameFile.substr(0,noncePos);
                var nameFile2 = nameFile.substr(noncePos); 
                nameFile = nameFile1 + language + nameFile2 + '.js';
            }else if (renhashPos != -1){
                var nameFile1 = nameFile.substr(0,renhashPos);
                var nameFile2 = nameFile.substr(renhashPos); 
                nameFile = nameFile1 + language + nameFile2 + '.js';
            }else{
                nameFile = nameFile + language + '.js';            
            }
            return nameFile;               
		}

        function _init(){
            var i;
                
            jQuery.get('/translations/languages.xml', function(data) {
              
                var prefixLanguage = null;
                var codeLanguage = getCookie ('M4Language_tc');
                if (codeLanguage === null){
                    codeLanguage = 2;
                }
                meta4.ui.language.setCodeLanguage(codeLanguage);
                
                var objLang = data.lastChild;
                if (objLang) {
                    for (i=0; i<objLang.childNodes.length; i++) {
                        if (objLang.childNodes[i].nodeType === 1) {
                            var asLang = objLang.childNodes[i].text || objLang.childNodes[i].textContent;
                            asLang = asLang.split(':');
                            
                            if (asLang[2] === codeLanguage){
                                prefixLanguage = '_' + asLang[1]; 
                                break;
                            }
                        }
                    } 
                }else {
                    if (prefixLanguage === null){
                        prefixLanguage = '_en';
                    }
                }
                
                meta4.ui.language.setPrefixLanguage(prefixLanguage);

                //load common js translate file
                meta4.getCachedScript('/mobile/translation/m4mobile' + prefixLanguage + '.js');
                
                //get name js file
                var nameFile = getNameFile(prefixLanguage);
                //load current page js translate file
                meta4.ui.translate.loadJs(nameFile);

            });
        }

		return {
			setCodeLanguage : function(val) {
				_setCodeLanguage(val);
			},
			setPrefixLanguage : function(val) {
				_setPrefixLanguage(val);
			},
			getCodeLanguage : function() {
				return _getCodeLanguage();
			},
			getPrefixLanguage : function() {
				return _getPrefixLanguage();
			},
			getChannelControlLanguage : function() {
				return _getChannelControlLanguage();
			},
			init : function() {
				_init();
			}
		};
	}());

/**
 *Function to load file js
 * @param: nameFile
 */
meta4.ui.translate.loadJs = function(nameFile) {

	//use strict
	'use strict';
	//meta4.log.time('loadJs: ' +  nameFile);
	
	meta4.getCachedScript("translation/" + nameFile).done(function(script, textStatus) {
		var oHead = document.getElementsByTagName('HEAD').item(0);
		var oScript = document.createElement("script");
		oScript.language = "javascript";
		oScript.type = "text/javascript";
		oScript.text = script;
		oHead.appendChild(oScript);
		
		meta4.ui.translate.setText();
		
		//meta4.log.timeEnd('loadJs: ' +  nameFile);
		
		//create event translation ready
		jQuery(document).trigger('meta4Ready');

		/**if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

			jQuery(document).live('pageinit', function(event, ui) {
				meta4.ui.translate.setText();
				//create event translation ready
				jQuery(document).trigger('meta4Ready');
			});
		} else {
			jQuery(document).ready(function() {
				meta4.ui.translate.setText();
				//create event translation ready
				jQuery(document).trigger('meta4Ready');
			});
		}*/
	
	}).fail(function(jqxhr, settings, exception) {
		
		//load language default
		
		//create event translation ready
		var nameDefault = nameFile.substring(0, nameFile.length - 5);
		nameDefault = nameDefault + 'es.js';

		meta4.getCachedScript("translation/" + nameDefault).done(function(script, textStatus) {
			var oHead = document.getElementsByTagName('HEAD').item(0);
			var oScript = document.createElement("script");
			oScript.language = "javascript";
			oScript.type = "text/javascript";
			oScript.text = script;
			oHead.appendChild(oScript);
			
			meta4.ui.translate.setText();
			//create event translation ready
			jQuery(document).trigger('meta4Ready');

			/**if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
				jQuery(document).live('pageinit', function(event, ui) {
					meta4.ui.translate.setText();
					//create event translation ready
					jQuery(document).trigger('meta4Ready');
				});
			} else {
				jQuery(document).ready(function() {
					meta4.ui.translate.setText();
					//create event translation ready
					jQuery(document).trigger('meta4Ready');
				});
			}*/			

		}).fail(function(jqxhr, settings, exception) {
			//dont found language default
			jQuery(document).trigger('meta4Ready');
		});
	});

};


function meta4OnLoad() {'use strict';
	
	meta4.log.timeEnd('meta4OnLoad');
	
	meta4.ui.language.init();
    
}

