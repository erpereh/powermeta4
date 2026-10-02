/*
 @(#)FileVersion: 811.000.025
 @(#)FileDescription: 
 @(#)CompanyName: Meta4 Spain, S.A.
 @(#)LegalCopyright: (c)2014
 @(#)ProductName: PeopleNet KSystem
 @(#)ProductVersion: 8.1SP1
 @(#)InternalName: session.js
 @(#)Date: 01/01/2014
 */

/*global $$, ActiveXObject, unescape*/

//@ sourceURL=meta4.data.session.js

var meta4 = meta4 || {};

//meta4.session = meta4.session || {};

meta4.session = ( function() {'use strict';

    //M4Os to load metadata
    var _meta4Objects = [];

    function _addMeta4Object(meta4ObjectId) {
        _meta4Objects.push(meta4ObjectId);
    }

    var  _delayObjects = [];
        
    function DelayObject(objectName) {
        this.objectName = objectName;
        this.isReady = false
    }
    
    function _addDelayObject(objectName){
        
        var delayObj = new DelayObject(objectName);
        
        _delayObjects.push(delayObj);
    }

    function _ready(objectName) {
        
        var i;
        var firemeta4Ready = true;
        
        //Set isReady for current object
        for (i = 0; i < _delayObjects.length; i++) {
            if (_delayObjects[i].objectName === objectName){
                
                _delayObjects[i].isReady = true;
                break;
            }
            
        }
        
        //check if all objects are ready
        for (i = 0; i < _delayObjects.length; i++) {
            if (_delayObjects[i].isReady === false){
                firemeta4Ready = false;
                break;
            }
        }

        if (firemeta4Ready === true){
            m4console.log('fire meta4Ready event.');
            /*//storage in iframe
            if (self !== top) {
                window.parent.meta4 = {}; 
                window.parent.meta4.session = meta4.session;
            }*/
            document.fireEvent('meta4Ready');
        }
       
    }

    return {
        addMeta4Object : function(meta4ObjectId) {
            return _addMeta4Object(meta4ObjectId);
        },
        meta4Objects : _meta4Objects,
        
        ready : function(arg) {
            _ready(arg);
        },
        addDelayObject: function(objectName){
            _addDelayObject(objectName)
        }
    };
}());
    
meta4.session.Animation = ( function() {'use strict';
		var _animationTime = null;

		function _getAnimationTime() {
			return _animationTime;
		}

		function _init() {
			_animationTime = 1000;
		}

		return {
			getAnimationTime : function() {
				return _getAnimationTime();
			},
			init : function() {
				_init();
			}
		};
	}());

meta4.session.language = ( function() {'use strict';

	var _codeLanguage = null;
	var _prefixLanguage = null;

    meta4.session.addDelayObject('Language');
    
	function _getCodeLanguage() {
		return _codeLanguage;
	}

	function _getPrefixLanguage() {
		return _prefixLanguage;
	}

	function getCookie(cookieName) {
		var value = document.cookie;
		var startPos = value.indexOf(" " + cookieName + "=");
		if (startPos === -1) {
			startPos = value.indexOf(cookieName + "=");
		}
		if (startPos === -1) {
			value = null;
		} else {
			startPos = value.indexOf("=", startPos) + 1;
			var endPos = value.indexOf(";", startPos);
			if (endPos === -1) {
				endPos = value.length;
			}
			value = unescape(value.substring(startPos, endPos));
		}
		return value;
	}

	function loadXMLDoc(dname) {
		var xhttp = null;

		if (window.XMLHttpRequest) {
			xhttp = new XMLHttpRequest();
		} else {
			xhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xhttp.open("GET", dname, false);
		xhttp.send();
		return xhttp.responseXML;
	}

	function _init() {

		var i;
		/*************************static languages.xml -START- *************************/
		_codeLanguage = getCookie('M4Language_tc');
		
		switch(_codeLanguage) {
			case "2":
				_prefixLanguage = '_en';
				break;
			case "3":
				_prefixLanguage = '_es';
				break;
			case "4":
				_prefixLanguage = '_fr';
				break;
			case "5":
				_prefixLanguage = '_pt';
				break;
			case "6":
				_prefixLanguage = '_de';
				break;
			case "7":
				_prefixLanguage = '_it';
				break;
			case "8":
				_prefixLanguage = '_pl';
				break;
			default:
				_prefixLanguage = '_en';
		}
		
		/*************************static languages.xml -END- *************************/
		
/*var data = loadXMLDoc("/translations/languages.xml");

		_codeLanguage = getCookie('M4Language_tc');
		if (_codeLanguage === null) {
			_codeLanguage = 2;
		}

		var objLang = data.lastChild;
		if (objLang) {
			for ( i = 0; i < objLang.childNodes.length; i++) {
				if (objLang.childNodes[i].nodeType === 1) {
					var asLang = objLang.childNodes[i].text || objLang.childNodes[i].textContent;
					asLang = asLang.split(':');

					if (asLang[2] === _codeLanguage) {
						_prefixLanguage = '_' + asLang[1];
						break;
					}
				}
			}
			if (_prefixLanguage === null) {
				_prefixLanguage = '_en';
			}

		} else {
			if (_prefixLanguage === null) {
				_prefixLanguage = '_en';
			}
		}
*/
		meta4.session.ready('Language');
	}

	return {
		getCodeLanguage : function() {
			return _getCodeLanguage();
		},
		getPrefixLanguage : function() {
			return _getPrefixLanguage();
		},
		init : function() {
			_init();
		}
	};
}());

meta4.session.paramApp = ( function() {'use strict';

    var channelPortalParams;
    
    var _currency = null;
    var _date = "MM-dd-yyyy";
    var _dateSeparator = null;
    var _dateText = null;
    var _hour = null;
    var _number = null;
    var _sepDecimal = null;

    var _isLoaded = false;

    function _setCurrency(val) {
        _currency = val;
    }

    function _setDate(val) {
        _date = val;
    }

    function _setDateSeparator(val) {
        _dateSeparator = val;
    }

    function _setDateText(val) {
        _dateText = val;
    }

    function _setHour(val) {
        _hour = val;
    }

    function _setNumber(val) {
        _number = val;
    }

    function _setSepDecimal(val) {
        _sepDecimal = val;
    }


    function _getSepDecimal() {
        return _sepDecimal;
    }

    function _getCurrency() {
        return _currency;
    }

    function _getDate() {
        return _date;
    }

    function _getDateSeparator() {
        return _dateSeparator;
    }

    function _getDateText() {
        return _dateText;
    }

    function _getHour() {
        return _hour;
    }

    function _getNumber() {
        //return '0.##';
        return _number;
    }


    function onLoadParams(request) {
        
        var indexParam;
        var nodePortalParams = channelPortalParams.getNode('SRTC_THIN_CLIENT_PARAMS');
        
        for ( indexParam = 0; indexParam < nodePortalParams.count(); indexParam++) {

            nodePortalParams.moveTo(indexParam);
            
            //FORMAT SECTION
            if (nodePortalParams.getValue('ID_SECTION') === 'FORMAT') {
                if (nodePortalParams.getValue('ID_KEY') === 'CURRENCY') {
                    _setCurrency(nodePortalParams.getValue('APP_VALUE'));
                }

                if (nodePortalParams.getValue('ID_KEY') === 'DATE') {
                    _setDate(nodePortalParams.getValue('APP_VALUE'));
                }

                if (nodePortalParams.getValue('ID_KEY') === 'DATETEXT') {
                    _setDateText(nodePortalParams.getValue('APP_VALUE'));
                }

                if (nodePortalParams.getValue('ID_KEY') === 'HOUR') {
                    _setHour(nodePortalParams.getValue('APP_VALUE'));
                }

                if (nodePortalParams.getValue('ID_KEY') === 'NUMBER') {
                    _setNumber(nodePortalParams.getValue('APP_VALUE'));
                }
                if (nodePortalParams.getValue('ID_KEY') === 'DECIMAL_SEPARATOR') {
                    _setSepDecimal(nodePortalParams.getValue('APP_VALUE'));
                }
            }
        }

        //analyze format date to get the separator
        if (_getDate() !== null) {
            var formatDate = _getDate();
            var i;

            for ( i = 0; i < formatDate.length; i++) {
                var chartA = formatDate.charAt(i);
                //check if is letter
                var bool = /^[a-zA-Z]*$/.test(chartA);
                if (!bool) {
                    //set date separator
                    _setDateSeparator(chartA);
                    //exit for
                    i = formatDate.length;
                }
            }
        }

        meta4.session.ready('ThinClientParams');
    }

    function _getParam(sectionId, keyId) {
        
        var indexParam;
        var nodePortalParams = channelPortalParams.getNode('SRTC_THIN_CLIENT_PARAMS');
        
        for ( indexParam = 0; indexParam < nodePortalParams.count(); indexParam++) {

            nodePortalParams.moveTo(indexParam);
            
            //FORMAT SECTION
            if (nodePortalParams.getValue('ID_SECTION') === sectionId) {
                if (nodePortalParams.getValue('ID_KEY') === keyId) {
                    return nodePortalParams.getValue('APP_VALUE');
                }
            }
        }
    }
    
    function _init() {
        
        meta4.session.addDelayObject('ThinClientParams');
        
        if (_isLoaded === true){
            //get of iframe
            meta4.session.paramApp = window.top.meta4.session.paramApp;
            meta4.session.ready('ThinClientParams');
                
        }else{
            
            channelPortalParams = new meta4.M4Object('SRTC_THIN_CLIENT_PARAMS', 'REUSE_PARAMS');
    
            var request = new meta4.M4Request(channelPortalParams, 'SRTC_THIN_CLIENT_PARAMS', 'LOAD_PARAMS', null);
    
            if (request.setSecurityToken){
                request.setSecurityToken(sessionToken);
            }
    
            meta4.data.execute(request, onLoadParams);
        }
    }

    //Comprobamos si está el obj paramApp en el padre, 
    if (window.top.meta4 && window.top.meta4.session && window.top.meta4.session.paramApp ){
        _isLoaded = true;
    }
        
    if (_isLoaded === false){
        meta4.session.addMeta4Object('SRTC_THIN_CLIENT_PARAMS');
    } 

    return {
        getDate : function() {
            return _getDate();
        },
        getDateSeparator : function() {
            return _getDateSeparator();
        },
        getDateText : function() {
            return _getDateText();
        },
        getHour : function() {
            return _getHour();
        },
        getNumber : function() {
            return _getNumber();
        },
        getSepDecimal : function() {
            return _getSepDecimal();
        },
        getParam: function(sectionId, keyId){
            return _getParam(sectionId, keyId)
        },
        init : function() {
            _init();
        }
    };
}());

function loadMetaData() {'use strict';

	function onMetadataSuccess() {

		meta4.session.paramApp.init();
		meta4.session.language.init();
        meta4.session.Animation.init();
        
        if (meta4.session.initializeProvider){
            meta4.session.initializeProvider.init();
        }
           
	}

	var meta4ObjectIds = [];	

    //Other Meta4Object        
    meta4ObjectIds = meta4.session.meta4Objects;
    
	//analyze the html file to load metadata
	meta4.data.context.parseContext();
	//get list context
	var listContext = meta4.data.context.getListContext();
	var i;
	for ( i = 0; i < listContext.length; i++) {
		if (listContext[i].idChannel !== null) {
			//load metada data if context have channel
			meta4ObjectIds.push(listContext[i].idChannel);
		}
	}

    //var meta4ObjectIds = [];    
    
    if (meta4ObjectIds.length != 0){
        meta4.data.loadMetadata(meta4ObjectIds, onMetadataSuccess);
	}else{
	    onMetadataSuccess();
	}

}

function meta4OnLoad() {'use strict';

	//secToken defined in html
	if (meta4.M4Executor.setSecurityToken){
	   meta4.M4Executor.setSecurityToken(secToken);
	}

	window.addEvent('domready', function() {
		loadMetaData();
	});
}

document.addEvent('meta4Ready', function() {'use strict';

    //storage in iframe
       if (self !== top) {
             try {
                    if (window.top.meta4 === undefined) {
                           //only classic portal no fastlane portal
                           if (window.top.meta4 === undefined) {
                                  window.top.meta4 = {} || meta4;
                           }
                    }
                    if (window.top.meta4.session === undefined) {
                           window.top.meta4.session = meta4.session;
                    }
             } catch (err) {
                    console.log('meta4 session, other domain' + err);
             }
       }
});
