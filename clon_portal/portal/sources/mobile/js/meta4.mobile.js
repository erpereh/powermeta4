/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: meta4.mobile.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */

document.addEventListener("deviceready", onDeviceReady, false);

/* 
 ***********************************************************
 ******** meta4 ********************************************
 ***********************************************************
 */
var meta4 = meta4 || {}; 

meta4.getCachedScript = function (url, options) {

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

/* 
 ***********************************************************
 ****** meta4.mobile ***************************************
 ***********************************************************
 */

meta4.mobile = meta4.mobile || {};

meta4.mobile.m4JavaServerPages = ( function(){
    var javaServerPages = meta4.mobile.getSessionStorage('m4JavaServerPages');
    if (!javaServerPages){
        javaServerPages = {};
        javaServerPages.login =  null;
		javaServerPages.logout =   null;
		javaServerPages.index =   null;
		javaServerPages.uniqueParams =   null;
        javaServerPages.mobileVersion = null;
        return javaServerPages;

    }
    else {
        return jQuery.parseJSON(javaServerPages);
    }
    
});

meta4.mobile.isPageInitialized = false;
meta4.mobile.showRecoveryMessage = true;

/* select platform page.*/
meta4.mobile.selectPlatform = 'http://meta4.meta4globalhr.com/mobile/m4select_platform.html';

meta4.mobile.setSessionStorage = (function (key, value) {
    if (typeof (Storage) !== "undefined") {
        try {
            sessionStorage.setItem(key, value);
        } catch (e) {}
    }
});

meta4.mobile.removeSessionStorage = (function (key) {
    if (typeof (Storage) !== "undefined") {
        try {
            sessionStorage.removeItem(key);
        } catch (e) {}
    }
});

meta4.mobile.getSessionStorage = (function (key) {
    if (typeof (Storage) !== "undefined") {
        return sessionStorage.getItem(key);
    }
    return null;
});

meta4.mobile.setLocalStorage = (function (key, value) {
    if (typeof (Storage) !== "undefined") {
        try {
            localStorage.setItem(key, value);
        } catch (e) {}
    }
});

meta4.mobile.getLocalStorage = (function (key) {
    if (typeof (Storage) !== "undefined") {
        return localStorage.getItem(key);
    }
    return null;
});

meta4.mobile.loadCordovaSuccessFunction = (function (data, textStatus, jqxhr) {
    var cordovaOsPathLog = "";
    if (meta4.mobile.deviceFrom() == 'android') {
        cordovaOsPathLog = "Loaded cordova android.";
    } else if (meta4.mobile.deviceFrom() == 'ios') {
        cordovaOsPathLog = "Loaded cordova ios.";
    }

    console.log(cordovaOsPathLog);
});

meta4.mobile.loadCordova = (function (successFunction) {
    var cordovaOsPath = "";
    if (meta4.mobile.deviceFrom() == 'android') {
        cordovaOsPath = "/mobile/cordova/android/cordova.js";
    } else if (meta4.mobile.deviceFrom() == 'ios') {
        cordovaOsPath = "/mobile/cordova/ios/cordova.js";
    }

    if (successFunction == null || successFunction == "") {
        jQuery.getScript(cordovaOsPath, meta4.mobile.loadCordovaSuccessFunction());
    } else {
        jQuery.getScript(cordovaOsPath, successFunction);
    }
});

meta4.mobile.deviceFrom = (function () {
    return meta4.mobile.getLocalStorage('deviceFrom');
});

meta4.mobile.deleteCookie =(function(realname) {
    // this only deletes cookies with a path of /
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
       var cookie = cookies[i];
       var eqPos = cookie.indexOf("=");
       var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
       var echtname = name.trim(); 
       if (echtname == realname) 
       {
           document.cookie = echtname + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
       }
    }   
});

meta4.mobile.getURLParameter = (function (name){
    var toReturn = null; 
    try {            
        var url = new URL(window.location.href); 
        var value = url.searchParams.get(name);
        if (value != null && value != "") toReturn = value.replace(/[^a-zA-Z0-9.-_]/);

    } catch (e) {
        console.log("Exception: " + e);
    }
   return toReturn; 
 });

 meta4.mobile.initSatusBar = (function (backColor){
    if(window.StatusBar) {
		window.StatusBar.overlaysWebView(false);
		window.StatusBar.backgroundColorByHexString(backColor);
	}
});

meta4.mobile.resetCompanyID = (function () {
    var deviceFrom = meta4.mobile.deviceFrom();
    if (deviceFrom == 'android' || deviceFrom == 'ios') {
       navigator.meta4localpreferencesplugin.save(onSaveStorageSuccess, onSaveStorageFail, 'serverpreference', '');
       navigator.meta4localpreferencesplugin.save(onSaveStorageSuccess, onSaveStorageFail, 'name', '');
    }

    function onSaveStorageSuccess(value) {
        console.log("success on save preference to mobile app");
    }

    function onSaveStorageFail() {
        console.log("fail on save preference to mobile app");
    }
   
    // delete the breadcrumb cookie
    meta4.mobile.deleteCookie("authrelaybreadcrumb");

    // redirect.
    window.location.href = meta4.mobile.selectPlatform + '?deviceFrom=' + deviceFrom;
});

meta4.log = (function () {
    'use strict';

    var timeCounters = {};
    var timeMessages = {};
    var _enable = false;

    function _time(name, reset) {

        if (!name && !_enable) {
            return;
        }
        var time = new Date().getTime();

        var key = "KEY" + name.toString();

        if (!reset && timeCounters[key]) {
            return;
        }
        timeCounters[key] = time;
    }

    _time('total');

    function _timeEnd(name) {

        if (!_enable) {
            return;
        }

        var diff = 0;
        var time = new Date().getTime();

        var key = "KEY" + name.toString();
        var timeCounter = timeCounters[key];

        if (timeCounter) {
            diff = time - timeCounter;
            var label = name + ": " + diff + "ms";
            console.log(label);
            delete timeCounters[key];

            timeMessages[key] = label;
        }
        return diff;
    }

    function _showPopUp() {

        if (!_enable) {
            return;
        }

        _timeEnd('total');
        var errorPopup = jQuery('#errorPopup');
        var pError;

        if (errorPopup.length === 0) {

            errorPopup = jQuery('<div></div>');
            errorPopup.attr('data-role', 'popup');
            errorPopup.attr('id', 'errorPopup');

            errorPopup.append(pError);

            jQuery('body').append(errorPopup);
        }

        var propName;

        for (propName in timeMessages) {
            if (typeof (timeMessages[propName]) !== "undefined") {

                pError = jQuery('<p></p>');
                pError.text(timeMessages[propName]);

                errorPopup.append(pError);
            }

        }


        if (meta4.mobile.isPageInitialized === false) {
            jQuery.mobile.initializePage();
        }

        errorPopup.popup();
        errorPopup.popup({
            corners: false
        });

        errorPopup.popup("open");

    }

    return {
        time: function (name, reset) {
            _time(name, reset);
        },
        timeEnd: function (name) {
            _timeEnd(name);
        },
        showLog: function () {
            _showPopUp();
        },
        enable: function (isEnable) {
            _enable = isEnable;
        }
    };
}());

meta4.mobile.init = (function () {
    'use strict';

    meta4.log.time('mobile.init');

    function initJQM() {

        //add attribute data theme all items
        jQuery('body').find('*').attr("data-theme", jQuery.mobile.page.prototype.options.theme);
        jQuery('body').find('[data-filter-theme]').attr("data-filter-theme", jQuery.mobile.page.prototype.options.theme);

        //we set the function to be called in case of persistent session functionality need to request the password, one time per page
        meta4.M4Executor.setAuthPasswordRequestCallback(meta4.mobile.levelTwoPwd.open);

        //config spinner loading
        meta4.mobile.windowLoading.configLoading();
        //disable all transactions
        jQuery.mobile.defaultPageTransition = 'none';

        jQuery.mobile.initializePage();
        meta4.mobile.isPageInitialized = true;

        meta4.log.timeEnd('mobile.init');
    }


    //Subscribe event translation ready
    jQuery(document).bind('meta4Ready', initJQM);

    jQuery(document).bind('mobileinit', function () {

        jQuery.mobile.autoInitializePage = false;

        jQuery.mobile.loader.prototype.options.theme = 'a';
        jQuery.mobile.page.prototype.options.theme = 'a';
        if (typeof (Storage) !== "undefined") {
            if (localStorage.m4ThemeMobile) {
                jQuery.mobile.page.prototype.options.theme = localStorage.m4ThemeMobile;
                jQuery.mobile.loader.prototype.options.theme = localStorage.m4ThemeMobile;
            }
        }
    });
}());

meta4.mobile.windowLoading = (function () {
    //strict mode
    'use strict';

    var _enable = true;
    var isShowing = false;

    function _configLoading() {
        var loadingText = meta4.ui.translate.getTranslate('_gen_loadingMsg');
        if (loadingText.indexOf("_gen_loadingMsg") == -1) {
            //config msg
            jQuery.mobile.loader.prototype.options.text = loadingText;
            //text visible
            jQuery.mobile.loader.prototype.options.textVisible = true;
        }
    }

    function createLayerLock() {
        var modalDiv = jQuery('<div id="m4windowLoading"/>');
        modalDiv.css({
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            zIndex: '150000000',
            opacity: 0.7,
            display: 'none'
        });
        jQuery("body").append(modalDiv);
    }

    function _show() {
        if (meta4.mobile.isPageInitialized && _enable) {
            jQuery("#m4windowLoading").show();
            //jQuery.mobile.showPageLoadingMsg();
            jQuery.mobile.loading('show');
            isShowing = true;
        }
    }

    function _hide() {
        if (meta4.mobile.isPageInitialized) {
            jQuery("#m4windowLoading").hide();
            //jQuery.mobile.hidePageLoadingMsg();
            jQuery.mobile.loading('hide');
            isShowing = false;
        }
    }

    jQuery(document).ready(function () {
        createLayerLock();
    });


    return {
        show: function () {
            _show();
        },
        hide: function () {
            _hide();
        },
        configLoading: function () {
            _configLoading();
        },
        enable: function (isEnable) {
            _enable = isEnable;
        },
        isShowing: function () {
            return (isShowing);
        }
    };
}());

meta4.mobile.spinner = (function () {
    'use strict';

    var _spinnerContainer = null;
    var _spinnerHeader = null;
    var _spinner = null;
    var _spinnerImg = null;


    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var _keys = {
        32: 1,
        33: 1,
        34: 1,
        35: 1,
        36: 1,
        37: 1,
        38: 1,
        39: 1,
        40: 1
    };

    function _preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    function _preventDefaultForScrollKeys(e) {
        if (_keys[e.keyCode]) {
            _preventDefault(e);
            return false;
        }
    }

    function _disableScroll() {
        if (window.addEventListener) // older FF
            window.addEventListener('DOMMouseScroll', _preventDefault, false);
        window.onwheel = _preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = _preventDefault; // older browsers, IE
        window.ontouchmove = _preventDefault; // mobile
        window.onscroll = _preventDefault;
        document.onkeydown = _preventDefaultForScrollKeys;
    }

    function _enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', _preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }
  
    return {
       
        show: function () {
            _disableScroll();
            jQuery("#spinnerContainer").css("display", "flex");
            jQuery("#spinnerContainer").css("opacity", "1");
        },
        hide: function () {
            setTimeout(function () {
                jQuery("#spinnerContainer").css("opacity", "0");
                setTimeout(function () {
                    jQuery("#spinnerContainer").css("display", "none");
                    _enableScroll();
                });
                jQuery("[data-role=page]").css("visibility", "visible");
            });
            
        }
    };

}());

meta4.mobile.toast = (function () {
    'use strict';

    var _layerLock = null;
    var _labelText = null;
    var _textContainer = null;
    var _layerToast = null;
    var _labelToast = null;
    var _generalLayerToast = null;
    var _delay = null;
    function _initialize() {

        _layerToast = jQuery('<div></div>');
        _layerToast.attr('id', 'toast');
        _layerToast.attr('class', 'show');

        //create toast layer 
        _generalLayerToast = jQuery('<div></div>');
        _generalLayerToast.attr('id', 'toastGeneralLayer');
        jQuery(_generalLayerToast).append(_layerToast);
        jQuery("body").prepend(_generalLayerToast);

        _generalLayerToast.hide();
    }

    /**
     * Adds one message to the toast
     * 
     */
    function _add(message) {
         //Mostramos el mensaje y animamos la entrada y salida del toast 
         _textContainer = jQuery('<div></div>');
        
         _labelToast = jQuery('<label></label>');
         _labelToast.attr('id', 'labelToast');
         _labelToast.html(message);
         jQuery(_textContainer).append(_labelToast);
         jQuery(_layerToast).prepend(_textContainer);

        _generalLayerToast.show(); 
    }

    /**
     * Hides the toast
     * 
     */
    function _remove() {
        jQuery("#toast").empty();
        _generalLayerToast.hide();
    }

    /**
     * Shows the toast with the given message 
     * 
     */
    function _showDelay(message, time) {

        var showToastDelay = 0;
        //Si ya tenemos un toast visible ponemos el contador a 0 y a continuación añadimos otro mensaje
        if (_delay > 0) {
            clearTimeout(_delay);
        }

         //Mostramos el mensaje y animamos la entrada y salida del toast 
         _add(message);

        //Esperamos a que pase el tiempo indicado para quitar el toast
        _delay = setTimeout(function () {_remove();}, time);
    }

    jQuery(document).ready(function () {
        _initialize();
    });

    return {
        show: function (message) {
            _showDelay(message, 4000);
        },
        showDelay: function (message, time) {
            _showDelay(message, time);
        },
        hide: function () {
            _remove();
        }

    };
}());

meta4.mobile.levelTwoPwd = (function () {
    //strict mode
    'use strict';

    //The popup to request the password in case of persistent session
    //it will be call by jsapi when needed
    var tpPopup;
    var myM4ExecutionContext;
    var redirectToHome = false;

    function _createPopup() {
        //create the div popup
        tpPopup = jQuery('#m4LevelTwoPwdPopup');

        if (tpPopup.length === 0) {

            tpPopup = jQuery('<div></div>');
            tpPopup.attr('data-role', 'popup');
            tpPopup.attr('id', 'm4LevelTwoPwdPopup');
            tpPopup.attr('class', 'ui-content');

            //translations
            var labelText = meta4.ui.translate.getTranslate('_levelTwoPwdPopupLabel'); //"Para realizar esta acción debe introducir su contraseña"; 
            var userText = meta4.ui.translate.getTranslate('_levelTwoPwdPopupUser'); //"Usuario : "; 
            var pwdText = meta4.ui.translate.getTranslate('_levelTwoPwdPopupPwd'); //"Contraseña"; 
            var pwdRequiredText = meta4.ui.translate.getTranslate('_levelTwoPwdPopupPwdReq'); //"The password is required";
            var pwdWrongText = meta4.ui.translate.getTranslate('_levelTwoPwdPopupPwdWrong'); //"The password is incorrect";
            var submitText = meta4.ui.translate.getTranslate('_levelTwoPwdPopupSend'); //"Enviar";
            var cancelText = meta4.ui.translate.getTranslate('_levelTwoPwdPopupCancel'); //"Cancelar";
            var mustFillPwdText = meta4.ui.translate.getTranslate('_levelTwoPwdPopupMustFillPwd'); //"Debe rellenar la contraseña";

            //get user name
            var homeInfoJSON = meta4.mobile.getSessionStorage('m4movilmenu');
            if (homeInfoJSON) {
                var homeInfo = jQuery.parseJSON(homeInfoJSON);
                userText += " " + homeInfo.nUser;
            }

            var sHtml = '<div><h1>' + labelText + '</h1></div>';
            sHtml += '<div><h1>' + userText + '</h1></div>';
            sHtml += '<div data-role="content" ><input type="password" name="passwordLTP" id="passwordLTP" placeholder="' + pwdText + '"></input></div>';
            sHtml += '<div id="pwdRequiredLTP" style="display:none">' + pwdRequiredText + '</div>';
            sHtml += '<div id="pwdWrongLTP" style="display:none">' + pwdWrongText + '</div>';
            sHtml += '<div class="ui-grid-a">';
            sHtml += '   <div id="sendLTP" class="ui-block-a ui-mini" ><input type="button" id="a_sendLTP" value="' + submitText + '"></input></div>';
            sHtml += '   <div id="cancelLTP" class="ui-block-b ui-mini"><input type="button" id="a_cancelLTP" value="' + cancelText + '"></input></div>';
            sHtml += '</div>';
            tpPopup.append(sHtml);

            //jQuery("body").append(tpPopup);
            tpPopup.appendTo("body").trigger("create"); //we append and refresh the jQuery mobyle styles!!!

            //Events:
            //when click the send button: if the password is change, we continue, if not show an error
            jQuery('#a_sendLTP').off('click').on('click', function () {
                var sPwd = jQuery("#passwordLTP").val();
                if (sPwd) {
                    myM4ExecutionContext.executeWithPassword(sPwd);
                    tpPopup.popup("close");
                } else {
                    jQuery("#pwdRequiredLTP").css('display', 'block');
                }
                
            });
            //when click the cancel button: close the popup                
            jQuery('#a_cancelLTP').off('click').on('click', function () {
                jQuery("#pwdRequiredLTP").css('display', 'none');
                jQuery("#pwdWrongLTP").css('display', 'none');
                tpPopup.popup("close");
                meta4.mobile.spinner.hide();
                if (redirectToHome){
                    document.location.href = '/mobile/m4home.html';
                    redirectToHome = false;
                }
            });
            //when change the password; if the password is filled we hide the error  
            jQuery('#passwordLTP').on('change keypress paste focus textInput input', function () {
                if (jQuery("#passwordLTP").val()) {
                    jQuery("#pwdRequiredLTP").css('display', 'none');
                    jQuery("#pwdWrongLTP").css('display', 'none');
                }
            });
            //when the popup is opened:
            tpPopup.bind({
                popupafteropen: function (event, ui) {
                    if (myM4ExecutionContext.isRetry()) {
                        jQuery("#pwdWrongLTP").css('display', 'block');
                    }
                }
            });
        } else {
            if (myM4ExecutionContext.isRetry()) {
                jQuery("#pwdWrongLTP").css('display', 'block');
            }
        }
    }

    function _open(m4ExecutionContext) {

        myM4ExecutionContext = m4ExecutionContext; //set the argument to the object level var 

        _createPopup(); //create the popup if not exist

        //if (m4ExecutionContext){
        meta4.mobile.windowLoading.hide(); //hide the loading message
        tpPopup.popup(); //open the popup

        //we put the oposite theme
        var curTheme = jQuery.mobile.page.prototype.options.theme;
        var popupTheme;
        if (curTheme == "b") {
            popupTheme = "a";
        } else {
            popupTheme = "b";
        }
        tpPopup.popup({
            corners: false,
            overlayTheme: popupTheme
        });
        tpPopup.popup("open");
        //}
    }
    return {
        open: function (request) {
            redirectToHome = false;
            _open(request);
        },
        openRedirect: function (request) {
            redirectToHome = true;
            _open(request);
        },
        createPopup: function () {
            _createPopup();
        }
    };
}());

meta4.mobile.data = (function () {
    //use strict
    'use strict';

    var _countExecuteMethod = 0;

    /**
     *Function to store request and method success and fail
     * @param {Object} request
     * @param {function} onSuccess
     * @param {function} onFail
     */
    var WrapRequest = function (request, onSuccess, onFail) {
        this.request = request;
        this.onSuccess = function (request) {

            meta4.log.timeEnd('_execute: ' + request.getNodeId() + '.' + request.getMethodId());

            _countExecuteMethod = _countExecuteMethod - 1;
            if (_countExecuteMethod === 0) {
                meta4.mobile.windowLoading.hide();
            }
            onSuccess(request);
            meta4.ui.log.showErrors(request);
        };
        this.onFail = function (request) {
            if (onFail !== undefined) {
                onFail(request);
            }
            _countExecuteMethod = _countExecuteMethod - 1;
            if (_countExecuteMethod === 0) {
                meta4.mobile.windowLoading.hide();
            }
            meta4.ui.log.showErrors(request);
        };
    };

    /**
     *Function to store request and method success and fail
     * @param {Object} request
     * @param {function} onSuccess
     * @param {function} onFail
     */
    var WrapRequestMetaData = function (request, onSuccess, onFail) {
        this.request = request;
        this.onSuccess = function (request) {
            meta4.log.timeEnd('_loadMetadata');

            meta4.mobile.windowLoading.hide();
            onSuccess(request);
            meta4.ui.log.showErrors(request);

        };
        this.onFail = function (request) {
            meta4.mobile.windowLoading.hide();
            if (onFail !== undefined) {
                onFail(request);
            }
            meta4.ui.log.showErrors(request);
        };
    };

    /**
     * Function to wrap execute (m4jsapi)
     * @param {meta4.M4Request} request
     * @param {function} onSuccess
     * @param {function} onFail
     */
    function _execute(request, onSuccess, onFail) {

        meta4.log.time('_execute: ' + request.getNodeId() + '.' + request.getMethodId());


        _countExecuteMethod = _countExecuteMethod + 1;

        //show layer loading
        meta4.mobile.windowLoading.show();

        //create object request
        var objReq = new WrapRequest(request, onSuccess, onFail);

        var executor = new meta4.M4Executor();
        //execute request
        executor.execute(request, objReq.onSuccess, objReq.onFail);
    }

    /**
     * Function to wrap loadMetadata (m4jsapi)
     * @param {array string} meta4ObjectsIds
     * @param {function} onSuccess
     * @param {function} onFail
     */
    function _loadMetadata(meta4ObjectsIds, onSuccess, onFail) {

        meta4.log.time('_loadMetadata');

        //jQuery('[data-role=page]').css('visibility', 'hidden');

        //show layer loading
        meta4.mobile.windowLoading.show();

        //create object request
        var objReq = new WrapRequestMetaData(meta4ObjectsIds, onSuccess, onFail);

        var executor = new meta4.M4Executor();
        executor.loadMetadata(meta4ObjectsIds, objReq.onSuccess, objReq.onFail);
    }

    return {
        execute: function (request, onSuccess, onFail) {
            _execute(request, onSuccess, onFail);
        },
        loadMetadata: function (meta4ObjectsIds, onSuccess, onFail) {
            _loadMetadata(meta4ObjectsIds, onSuccess, onFail);
        }
    };
}());

meta4.mobile.silentLogout = (function (){
    //Cerramos sesión
	jQuery.ajax("/servlet/login",{
		data:{'_LOGOUT':'_LOGOUT',
		success:null
	}});

	//Cerramos sesión en el sistema externo si aplica
	try 
	{ 
		var systemManager = meta4.M4Executor.getExternalSystemManager();
		systemManager.closeAllSessions(null,null); 
	} 
	catch (ex) 
	{
		console.log("Error while disconnecting from external system: " + ex);
	}
});


meta4.mobile.callLogout = function() {

    function onLogoutSuccess() 
    {
        console.log("Reattempting disconnection in the current system."); 
        window.location.href = meta4.mobile.m4JavaServerPages().logout; 
    }

    function onLogoutError() 
    {
        console.log("Error in disconnection from external system."); 
        window.location.href = meta4.mobile.m4JavaServerPages().logout; 
    }
    
    // begin new disconnection technology 
     
    try 
    { 
        var systemManager = meta4.M4Executor.getExternalSystemManager();
        systemManager.closeAllSessions(onLogoutSuccess,onLogoutError); 
    } 
    catch (ex) 
    {
        console.log("Error while disconnecting from external system: " + ex);
        window.location.href = meta4.mobile.m4JavaServerPages().logout; 
    }
};


meta4.mobile.logout = (function () {
    'use strict';
   
    //If the user clicks over the logout icon we will show a popup with a countdown to allow him to cancel the logout

    var tpPopup;
    var logoutCountdownTimeDefault = 15;
    var logoutCountdownTime = logoutCountdownTimeDefault;
    var logoutSetIntervalID;

    function logoutPopupCountdown() {

        logoutCountdownTime = logoutCountdownTime - 1;
        jQuery("#logoutCountdown").text(logoutCountdownTime);

        if (logoutCountdownTime == 0) {
            clearInterval(logoutSetIntervalID);
            meta4.mobile.callLogout();
        }
    }

    function createPopup(callbackCancel) {

        //create the div popup
        tpPopup = jQuery('#popupLogout');

        if (tpPopup.length === 0) {

            tpPopup = jQuery('<div></div>');
            tpPopup.attr('data-role', 'popup');
            tpPopup.attr('id', 'popupLogout');
            tpPopup.attr('class', 'ui-content');

            //translations
            var label1Text = meta4.ui.translate.getTranslate('_popupLogoutLabel1'); //"Se desconectará en";
            var label2Text = meta4.ui.translate.getTranslate('_popupLogoutLabel2'); //"segundos...";
            var submitText = meta4.ui.translate.getTranslate('_popupContinue'); //"Desconectar";
            var cancelText = meta4.ui.translate.getTranslate('_popupCancel'); //"Cancelar";


            var sHtml = '<div><p>' + label1Text + ' ';
            sHtml += '<span id="logoutCountdown">' + logoutCountdownTime + '</span>';
            sHtml += ' ' + label2Text + '</p></div>';
            sHtml += '<div class="ui-grid-a">';
            sHtml += '   <div id="continueLogout" class="ui-block-a ui-mini" ><input type="button" id="a_continueLogout" value="' + submitText + '"></input></div>';
            sHtml += '   <div id="cancelLogout" class="ui-block-b ui-mini"><input type="button" id="a_cancelLogout" value="' + cancelText + '"></input></div>';
            sHtml += '</div>';
            tpPopup.append(sHtml);

            tpPopup.appendTo("body").trigger("create"); //we append and refresh the jQuery mobyle styles!!!                

            //Events:
            //evitamos que al pulsar fuera se cierre el popup
            jQuery("#popupLogout").on({
                popupbeforeposition: function () {
                    $('.ui-popup-screen').off();
                }
            });

            //when click the cancel button: close the popup                
            jQuery('#cancelLogout').off('click').on('click', function () {

                jQuery("#logoutTile").removeClass('ui-btn-active');

                window.clearInterval(logoutSetIntervalID);
                logoutCountdownTime = logoutCountdownTimeDefault;
                jQuery("#logoutCountdown").text(logoutCountdownTime);
                jQuery("#popupLogout").popup("close");
                callbackCancel();
            });

            //when click the OK button: logout                
            jQuery('#continueLogout').off('click').on('click', function () {
                meta4.mobile.callLogout();
            });

            //when open: start the countdown
            jQuery("#popupLogout").bind({
                popupafteropen: function (event, ui) {
                    logoutSetIntervalID = self.setInterval(logoutPopupCountdown, 1000);
                }
            });

        }
    }

    function _open(callbackCancel) {
        createPopup(callbackCancel); //create the popup if not exist

        tpPopup.popup(); //open the popup

        //we put the oposite theme
        var curTheme = jQuery.mobile.page.prototype.options.theme;
        var popupTheme;
        if (curTheme == "b") {
            popupTheme = "a";
        } else {
            popupTheme = "b";
        }
        tpPopup.popup({
            corners: true,
            overlayTheme: popupTheme
        });
        tpPopup.popup("open");
    }


    return {

        open: function (callbackCancel) {
            _open(callbackCancel);
        }
    };
}());

meta4.mobile.getPathIconByTheme = function (nameIcon) {
    //use strict
    'use strict';

    var theme = jQuery.mobile.loader.prototype.options.theme;
    var path = 'icons/';
    var extension = '';

    if (theme == 'a') {
        extension = '_a.png';
    } else if (theme == 'b') {
        extension = '_b.png';
    }
    return path + nameIcon + extension;
};

meta4.mobile.downloadAndShowMobileDocument = function (uriM4) {
    'use strict';

    function Opensuccess() {
        console.log('Success');
      }
       
      function OpenError(code) {
        meta4.ui.log.showMsg(meta4.ui.translate.getTranslate('_document_open_error'));
        if (code === 1) {
          console.log('No file handler found');
        } else {
          console.log('Undefined error');
        }
      }

    function showMobileDocument(uriMobile, fileExtension) {
        //cordova.plugins.disusered.open(uriMobile, Opensuccess, OpenError, null, true);
        cordova.plugins.fileOpener2.open(uriMobile, getMimeType(fileExtension),OpenError,Opensuccess);
    }

    function getMimeType(fileExtension) {
        var mimeType;

        switch (fileExtension) {
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'tiff':
            case 'gif':
            case 'bmp':
            case 'ico':
            case 'sgv':
                mimeType = 'image/*';
                break;

            case 'wav':
            case 'mp3':
                mimeType = 'audio/*';
                break;

            case 'mp4':
            case 'mpeg':
            case 'mov':
            case 'avi':
                mimeType = 'video/*';
                break;

            case 'csv':
            case 'rtf':
            case 'xml':
                mimeType = 'application/*';
                break;

            case 'xlsx':
            case 'xls':
                mimeType = 'application/vnd.ms-excel';
                break;

            case 'txt':
                mimeType = 'text/*';
                break;

            case 'doc':
            case 'docx':
                mimeType = 'application/msword';
                break;

            case 'ppt':
            case 'pps':
                mimeType = 'application/vnd.ms-powerpoint';
                break;

            case 'pdf':
                mimeType = 'application/pdf';
                break;

            case 'htm':
            case 'html':
                mimeType = 'text/web';
                break;

            case 'rar':
            case 'zip':
                mimeType = 'application/zip';
                break;

            default:
                mimeType = '*/*';
                break;
        }

        //console.log("mimeType (" + fileExtension +") = " + mimeType);  

        return mimeType;
    }

    //console.log("showDocumentMobile uriM4= " + uriM4);            

    var fileExtension = null;

    // Me quedo con la extensión del fichero a descargar
    var pos = uriM4.lastIndexOf("=");
    if (pos > -1) {
        var fileName = uriM4.substring(pos + 1);

        //console.log("showDocumentMobile fileName= " + fileName);              
        pos = fileName.lastIndexOf(".");
        if (pos > -1) {
            fileExtension = fileName.substring(pos + 1).toLowerCase();
            //console.log("showDocumentMobile fileExtension= " + fileExtension);            
        }
    }

    if (fileExtension != null) {
        // Creo el nombre y el path del fichero que se va a descargar en el movil
        var uriMobile;
        if (meta4.mobile.deviceFrom() == 'android') {
            uriMobile = cordova.file.externalDataDirectory;
        } else if (meta4.mobile.deviceFrom() == 'ios') {
            uriMobile = cordova.file.documentsDirectory;
        }
        uriMobile += "tempdoc." + fileExtension;

        // Hago una uri absoulta de la relativa que me llega
        uriM4 = location.protocol + "//" + window.location.host + uriM4;

        // Descargo
        var fileTransfer = new FileTransfer();
        fileTransfer.download(encodeURI(uriM4), encodeURI(uriMobile),
            function (file) {
                //console.log("download complete: " + file.toURI());  

                showMobileDocument(uriMobile, fileExtension);
            },
            function (error) {
                //console.log("download error source " + error.source);  
                //console.log("download error target " + error.target);  
                //console.log("upload error code: " + error.code);  
            }
        );
    }
};


meta4.log.time('meta4OnLoad');

/* 
 ***********************************************************
 ****** meta4.ui.translate *********************************
 ***********************************************************
 */
meta4.ui = meta4.ui || {};

meta4.ui.translate = meta4.ui.translate || {};

/*
 * Function to get text
 *
 * @param: id of variable
 */
meta4.ui.translate.getTranslate = function (id, defaultTrans) {
    'use strict';

    var translation = window[id];

    if (translation === undefined) {
        translation = defaultTrans;
        if (translation === undefined) {
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
meta4.ui.translate.setText = function () {

    //use strict
    'use strict';

    jQuery(document).find('[data-m4trans]').each(function () {

        var nameVar = (jQuery(this).data('m4trans'));
        var textTranslate = meta4.ui.translate.getTranslate(nameVar);
        jQuery(this).text(textTranslate);
    });

    jQuery(document).find('[data-m4title]').each(function () {

        var nameVar = (jQuery(this).data('m4title'));
        var textTranslate = meta4.ui.translate.getTranslate(nameVar);
        jQuery(this).attr('Title', textTranslate);
    });

    jQuery(document).find('[data-m4placeholder]').each(function () {

        var nameVar = (jQuery(this).data('m4placeholder'));
        var textTranslate = meta4.ui.translate.getTranslate(nameVar);
        jQuery(this).attr('placeholder', textTranslate);
    });
};

/**
 *Function to load file js
 * @param: nameFile
 */
meta4.ui.translate.loadJs = function (nameFile) {

    //use strict
    'use strict';

    //performance: avoid redirection in login
    var path = "translation/";
    if (nameFile.indexOf("m4home") != -1) {
        path = "/mobile/" + path;
    }

    meta4.getCachedScript(path + nameFile).done(function (script, textStatus) {
        var oHead = document.getElementsByTagName('HEAD').item(0);
        var oScript = document.createElement("script");
        oScript.language = "javascript";
        oScript.type = "text/javascript";
        oScript.text = script;
        oHead.appendChild(oScript);

        meta4.ui.translate.setText();

        //create event translation ready
        jQuery(document).trigger('meta4Ready');

    }).fail(function (jqxhr, settings, exception) {

        //load language default      
        var nameDefault = nameFile.substring(0, nameFile.length - 5);
        nameDefault = nameDefault + 'es.js';

        meta4.getCachedScript("translation/" + nameDefault).done(function (script, textStatus) {
            var oHead = document.getElementsByTagName('HEAD').item(0);
            var oScript = document.createElement("script");
            oScript.language = "javascript";
            oScript.type = "text/javascript";
            oScript.text = script;
            oHead.appendChild(oScript);

            meta4.ui.translate.setText();
            //create event translation ready
            jQuery(document).trigger('meta4Ready');

        }).fail(function (jqxhr, settings, exception) {
            //dont found language default
            jQuery(document).trigger('meta4Ready');
        });

    });
};

/*
 ***********************************************************
 ****** meta4.ui.language **********************************
 ***********************************************************
 */
meta4.ui.language = (function (channelControlLanguage) {
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
        setCookie('M4Language_tc', val, date, '/');

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
        var nameFile;
        if (path.indexOf('servlet/login') < 0) {
            nameFile = path.match(/.*\/([^/]+)\.([^?]+)/i)[1];
        } else {
            nameFile = 'm4home';
        }

        //put the language
        //we must to take into account the "n_once" and "ren_hash"
        var n_oncePos = nameFile.indexOf("_n" + "once");
        var ren_hashPos = nameFile.indexOf("_ren" + "hash");
        if (n_oncePos != -1) {
            var nameFile1 = nameFile.substr(0, n_oncePos);
            if (nameFile1 == "generico_invisible") {
                nameFile1 = "m4home";
            } //performance: avoid redirection in login
            var nameFile2 = nameFile.substr(n_oncePos);
            nameFile = nameFile1 + language + nameFile2 + '.js';
        } else if (ren_hashPos != -1) {
            var nameFile1 = nameFile.substr(0, ren_hashPos);
            if (nameFile1 == "generico_invisible") {
                nameFile1 = "m4home";
            } //performance: avoid redirection in login
            var nameFile2 = nameFile.substr(ren_hashPos);
            nameFile = nameFile1 + language + nameFile2 + '.js';
        } else {
            if (nameFile == "generico_invisible") {
                nameFile1 = "m4home"; //performance: avoid redirection in login
            } else {
                nameFile1 = nameFile;
            }
            nameFile = nameFile1 + language + '.js';
        }
        return nameFile;
    }

    function _init() {
        var i;
        jQuery.get('/translations/languages.xml', function (data) {

            var prefixLanguage = null;
            var codeLanguage = getCookie('M4Language_tc');
            if (codeLanguage === null) {
                codeLanguage = 2;
            }
            meta4.ui.language.setCodeLanguage(codeLanguage);

            var objLang = data.lastChild;
            if (objLang) {
                for (i = 0; i < objLang.childNodes.length; i++) {
                    if (objLang.childNodes[i].nodeType === 1) {
                        var asLang = objLang.childNodes[i].text || objLang.childNodes[i].textContent;
                        asLang = asLang.split(':');

                        if (asLang[2] === codeLanguage) {
                            prefixLanguage = '_' + asLang[1];
                            break;
                        }
                    }
                }
            } else {
                if (prefixLanguage === null) {
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
        setCodeLanguage: function (val) {
            _setCodeLanguage(val);
        },
        setPrefixLanguage: function (val) {
            _setPrefixLanguage(val);
        },
        getCodeLanguage: function () {
            return _getCodeLanguage();
        },
        getPrefixLanguage: function () {
            return _getPrefixLanguage();
        },
        getChannelControlLanguage: function () {
            return _getChannelControlLanguage();
        },
        init: function () {
            _init();
        }
    };
}());

/*
 ***********************************************************
 ****** meta4.ui.log ***************************************
 ***********************************************************
 */
meta4.ui.log = meta4.ui.log || {};

meta4.ui.log = (function () {
    'use strict';
    var _goHome = false;
    var _showPopupWindow = false;
    
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
                anchor.html(meta4.ui.translate.getTranslate('_popupCancel'));
                pError = jQuery('<p></p>');
                anchor.click(function() {
                    jQuery('#errorPopup-popup').remove();
                   // jQuery('#errorPopup-popup').removeClass('show');
                });

                errorPopup.append(pError, anchor);

                jQuery('body').append(errorPopup);

                errorPopup.trigger("create");
            }

            pError = jQuery('#errorPopup p');

            pError.text(message);

            if (meta4.mobile.isPageInitialized === false) {
                jQuery.mobile.initializePage();
            }

            var curTheme = jQuery.mobile.page.prototype.options.theme;
            var popupTheme;
            if (curTheme == "b") {
                popupTheme = "a";
            } else {
                popupTheme = "b";
            }

            errorPopup.popup();
            errorPopup.popup({
                corners: false,
                overlayTheme: popupTheme
            });

            errorPopup.popup("open");
            jQuery('#errorPopup-popup').attr('class', 'show');

        }
    }

    /* Private */
    function _processRequest(request) {

        //1. Get message from m4jsapi request
        var errorMessage = request.getErrorMessage();
        var message = errorMessage;
        _goHome = false;
        
        //2. If errorMessage from m4jsapi request is null, get first message from log stack.
    	//   This happens when not an error, this is just information. 
        if (errorMessage === null) {
        	var logMessage = request.getLogMessage(0);
            if (logMessage !== null) {
                message = logMessage.getDescription();
                _showPopupWindow=true;
            }
        } else {
            //3. If errorType from m4jsapi request is not null, it is an expected m4jsapi message
            var errorType = request.getErrorType();
            if (errorType!=null){
            	// Error Types: NONE=0, DEFAULT=1, NO_SESSION=2, SESSION_TIMEOUT=3, HTTP_REQUEST=4;
                var errorIndex = errorType.getAsIndex();
                
                console.log(" >>> m4jsapi expected error: " + errorType + " with index " + errorIndex);
                
                // current behaviour 
                _goHome = true;
                _showPopupWindow=false;
                
                if (errorIndex == 3) 
                {
                    _showPopupWindow=true;
                    message = meta4.ui.translate.getTranslate('_sessionTimeout');
                }           
                else if (errorIndex == 4)
                {
                    _showPopupWindow=true;
                    _goHome = true;
                    message = meta4.ui.translate.getTranslate('_m4requestError');
                }
            }
            else 
            {            
                var errorCode = request.getErrorCode();
                console.log(" >>> external error with error code " + errorCode);
                if (errorCode > 0 ) {
                    _showPopupWindow=true;
                    _goHome = true;
                    if (errorCode === 401 || errorCode === 500) {
                        message = meta4.ui.translate.getTranslate('_m4untypedError');
                    }
                }
            }  
        }

        return message;
    }

    /* Private */
    function _showErrors(request) {

    	_showPopupWindow = false;
    	var message = _processRequest(request);
    	if (_showPopupWindow==true) {
    		_showPopUp(message);
    	}
    	if (_goHome==true){
    		_goHome = false;
    		var time = 4000;
    		if (_showPopupWindow==false){
    			time = 1;
    		}  
    		setTimeout(function () {
    			var deviceFrom = meta4.mobile.deviceFrom();
    			if (deviceFrom != null)
    			{ 
                    window.location.href = meta4.mobile.m4JavaServerPages().index + '?deviceFrom=' + deviceFrom;
    			}
    			else
    			{
    				window.location.href = meta4.mobile.m4JavaServerPages().index; 
    			}
    		}, time);
    	}
    }

    function _showUnknownError(error, url, line) {

        //Los errores de jquery mobile o los de cordova no los sacamos a pantalla
        if (url.indexOf("jquery.mobile.js") === -1 && error.indexOf("cordova") === -1) {
            var message = "Error:";
            message += error + "\n";
            //message += "(URL: " + url + ". Línea " + line + ")";

            _showPopUp(message);
        }

        return true;
    }

    //Public
    return {

        showErrors: function (response) {
         
            _showErrors(response);
        },
        showUnknownError: function (message, url, line) {
            _showUnknownError(message, url, line);
        },
        showMsg: function (msg) {
          
            _showPopUp(msg);
        }
    };
}());

//error manage
window.onerror = meta4.ui.log.showUnknownError;

/* 
 ***********************************************************
 ****** functions ******************************************
 ***********************************************************
 */
function onDeviceReady() {
    //console.log("mobile.js --> onDeviceReady");
    if (meta4.mobile.getSessionStorage('fromNewExecution') !== '1') {
        meta4.mobile.setSessionStorage('fromNewExecution', '1');

        meta4.mobile.showRecoveryMessage = false;
    } else {
        meta4.mobile.showRecoveryMessage = true;
    }

    document.addEventListener("resume", onResume, false);
}

function onResume() {
    //console.log("mobile.js --> onResume");
    function onMetadataSuccess() {
        var channel = new meta4.M4Object('SRTC_MOB_SESSION');
        channel.setContextId('Recovery_Ping');

        var request = new meta4.M4Request(channel);
        new meta4.M4Executor().execute(request);
    }

    meta4.mobile.showRecoveryMessage = true;

    if (meta4.M4Executor) {
        new meta4.M4Executor().loadMetadata(['SRTC_MOB_SESSION'], onMetadataSuccess);
    }
}

function meta4OnRecoveryCallback() {
    console.log("mobile.js --> meta4OnRecoveryCallback");
    //console.log("meta4.mobile.showRecoveryMessage = " + meta4.mobile.showRecoveryMessage);
    //console.log("pathname = " + window.location.pathname);
    //console.log("href = " + window.location.href);

    meta4.mobile.windowLoading.hide();

    if (meta4.mobile.showRecoveryMessage) {
        // show the message and redirect home                   
        var msg = meta4.ui.translate.getTranslate('_sessionTimeout');
        meta4.mobile.toast.show(msg);

        setTimeout(function () {
            document.location.href = '/mobile/m4home.html';
        }.bind(this), 4000);
    } else {
        // stay where you are, but reloading.  
        document.location.href = window.location.href;
    }

    return false;
}

function setCookie(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/.test(sKey)) {
        return;
    }
    var sExpires = "";
    if (vEnd) {
        switch (typeof vEnd) {
            case "number":
                sExpires = "; max-age=" + vEnd;
                break;
            case "string":
                sExpires = "; expires=" + vEnd;
                break;
            case "object":
                sExpires = "; expires=" + vEnd.toGMTString();
                break;
        }
    }

    document.cookie = escape(sKey) + "=" + escape(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
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
        if (endPos == -1) {
            endPos = value.length;
        }
        value = unescape(value.substring(startPos, endPos));
    }
    return value;
}

function onExecutorFail(request) {

    var codeLanguage = getCookie('M4Language_tc');
    if (codeLanguage === null) {
        codeLanguage = 2;
    }
    meta4.ui.language.setCodeLanguage(codeLanguage);

    var prefixLanguage = getCookie('m4LanguagePrefix');
    if (prefixLanguage === null) {
        prefixLanguage = '_en';
    }

    meta4.ui.language.setPrefixLanguage(prefixLanguage);

    meta4.getCachedScript('/mobile/translation/m4mobile' + prefixLanguage + '.js').done(function (script, textStatus) {
        meta4.ui.log.showErrors(request);
    }).fail(function (jqxhr, settings, exception) {
        meta4.ui.log.showErrors(request);
    });
}

function meta4OnLoad() {
    'use strict';

    meta4.log.timeEnd('meta4OnLoad');

    meta4.ui.language.init();
}

//this script is to mode standalone
jQuery(document).on("click", "a", function (event) {
    'use strict';
    // Stop the default behavior of the browser, which
    // is to change the URL of the page.
    var url = jQuery(event.target).closest('[href]').attr("href");
    if (url != undefined && url != "") {
        // Manually change the location of the page to stay in
        // "Standalone" mode and change the URL at the same time.
        event.preventDefault();
        location.href = url;
    }
});

//hide addres bar for android
jQuery(document).ready(function () {
    'use strict';
    if (navigator.userAgent.match(/Android/i)) {
        window.scrollTo(0, 0);
        // reset in case prev not scrolled
        var nPageH = jQuery(document).height();
        var nViewH = window.outerHeight;
        if (nViewH > nPageH) {
            nViewH = nViewH / window.devicePixelRatio;
            jQuery('BODY').css('height', nViewH + 'px');
        }
        window.scrollTo(0, 1);
    }
});

//Function to show prevent app rotation
jQuery(document).ready(function () {

    if (jQuery().jquery != "2.1.4")	{
        meta4.mobile.resetCompanyID();
    }

    _layerNoRotate = jQuery('<div></div>');
    _layerNoRotate.attr('class', 'turnDeviceNotification');

    jQuery("body").prepend(_layerNoRotate);

    if (jQuery(".turnDeviceNotification")) {

        jQuery(window).bind('orientationchange', function (e) {
            switch (window.orientation) {
                case 0:
                    jQuery('.turnDeviceNotification').css('display', 'none');
                    // The device is in portrait mode now
                    break;

                case 180:
                    jQuery('.turnDeviceNotification').css('display', 'none');
                    // The device is in portrait mode now
                    break;

                case 90:
                    // The device is in landscape now
                    jQuery('.turnDeviceNotification').css('display', 'block');
                    break;

                case -90:
                    // The device is in landscape now
                    jQuery('.turnDeviceNotification').css('display', 'block');
                    break;
            }
        });
    }
});
