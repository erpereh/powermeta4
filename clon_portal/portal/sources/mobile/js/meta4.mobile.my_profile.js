/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: meta4.mobile.my_profile.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */


/*global jQuery*/

var deviceReady = false;
var domReady = false;

domReady = true;
checkShowButtonServer();

document.addEventListener("deviceready", onDeviceReady, false);

var meta4 = meta4 || {};
meta4.mobile = meta4.mobile || {};
meta4.mobile.my_profile = (function() {
	'use strict';

	/**
	 * Function to save selected theme in localStorage
	 * @param {Object} theme
	 */
	function _saveTheme(theme) {
		//Navegar a la primera página
		meta4.mobile.setLocalStorage("m4ThemeMobile",theme);
		window.location.href = "/mobile/m4my_profile.html";
	}

	/**
	 *Function to set language in channel session
	 */
	function setLanguage(language) {

        function onLoadProcesses(request){
            window.location.href = "/mobile/m4my_profile.html"; 
        }

        function onMetadataSuccess(){
            //to change the session channel

            //When is loaded metadatas, we can execute channel to set language
            meta4.log.time('new SRTC_MOB_SESSION');
            var channel_view = new meta4.M4Object('SRTC_MOB_SESSION');
            meta4.log.timeEnd('new SRTC_MOB_SESSION');
    
            var request = new meta4.M4Request(channel_view, 'SRTC_MOB_SESSION', 'SET_LANGUAGE', language);
            meta4.mobile.data.execute(request,onLoadProcesses);
        }

        meta4.ui.language.setCodeLanguage(language);
		
        //change the session channel
        var meta4Objects = [];
        meta4Objects.push('SRTC_MOB_SESSION');
        meta4.mobile.data.loadMetadata(meta4Objects, onMetadataSuccess);
	}


	/**
	 * Function to calculate if we display logout
	 */

	function checkDisplayLogout( )
	{
        function onMetadataSuccess(){
         
			var instanceId = 'SRTC_MOBILE_HOME' + meta4.ui.language.getCodeLanguage(); //we add the language code to the instance, 
			// in order to ensure that we will use other instance in case of change of language without logout
			var channelHome = new meta4.M4Object('SRTC_MOBILE_HOME', instanceId, true); //false);
		
			var authRelayBreadcrumb = 0; 
			if (document.cookie.indexOf("authrelaybreadcrumb=") >= 0) {
				authRelayBreadcrumb = 1; 
			}
		
			// one more argument for DISPLAY_LOGOUT in the Meta4Object
			var args = new Array();
			args.push(authRelayBreadcrumb);
			var anotherRequest = new meta4.M4Request(channelHome, 'SRTC_MOBILE_HOME', 'DISPLAY_LOGOUT', args);
			meta4.mobile.data.execute(anotherRequest, successInitialize, errorInitialize);
			
        }

		function successInitialize(request)
		{
			var channelMenu = request.getObject();
			var rootNode = channelMenu.getNode('SRTC_MOBILE_HOME');
			var nDisplayLogout = request.getResult(); 

			console.log("checkDisplayLogout: Result of method DISPLAY_LOGOUT is: " + nDisplayLogout); 
		
        	if (nDisplayLogout == 0) 
        	{
                jQuery('#logoutList').css('display', 'none');
                console.log("Logout button not allowed due to nDisplayLogout: " + nDisplayLogout);
                
				// Should not appear if single sign on and no URL.
				jQuery("#switchSesstionLi").css('display','none');
			}	
		}
		function errorInitialize(request)
		{
			console.log('checkDisplayLogout: Cannot calculate display logout --> Check the security.');
		}

		var meta4Objects = [];
        meta4Objects.push('SRTC_MOBILE_HOME');
		meta4.mobile.data.loadMetadata(meta4Objects, onMetadataSuccess);
	}
	


	/**
	 * Function to init the page
	 */
	function _init() {
		meta4.mobile.spinner.show();
		if(meta4.mobile.deviceFrom()=='android' || meta4.mobile.deviceFrom()=='ios')
		{
			meta4.mobile.loadCordova();
		}

		//$("#deleteDefaultserver").css("visibility", "visible");
		$("#deleteDefaultserver").css("display", "block");

		//Theme
		var trans = meta4.ui.translate.getTranslate('_colourBlack');
		jQuery("#skinSelect").append('<option value="a">' + trans + '</option>');

		trans = meta4.ui.translate.getTranslate('_colourWhite');
		jQuery("#skinSelect").append('<option value="b">' + trans + '   </option>');

		var theme = jQuery.mobile.page.prototype.options.theme;
		jQuery("#skinSelect option[value=" + theme + "]").attr("selected", true);
		jQuery("#skinSelect").selectmenu('refresh', true);

		//Language
		var codeLanguage = meta4.ui.language.getCodeLanguage();
		jQuery("#languageSelect option[value=" + codeLanguage + "]").attr("selected", true);
		jQuery("#languageSelect").selectmenu('refresh', true);

		jQuery("#skinSelect").bind('change', function() {
			var theme = jQuery('#skinSelect option:selected').val();

			_saveTheme(theme);
		});

		jQuery("#languageSelect").bind('change', function() {
			var language = jQuery('#languageSelect option:selected').val();
			setLanguage(language);
		});

		// Calculate the display logout. Call m4jsapi.	
		checkDisplayLogout();
		

        // Persistent session: in case of SSO of disabled by the company we don't show anything
        var bPersistentSessionAllowed = meta4.mobile.getSessionStorage("m4bPersistentSessionAllowed");
        if (bPersistentSessionAllowed == null){ bPersistentSessionAllowed = "false";};
        


        if (bPersistentSessionAllowed == "false"){
            
            // we must hide the maintain session slider
            jQuery("#switchSesstionLi").css('display','none');
            console.log("Not allowed persistent session");
            
        }else{
            
            //we must show the maintain session slider
                    jQuery('#switchSesstionLi').css('display', 'block');
            var userWantPersistentSession = meta4.mobile.getLocalStorage("m4mobileUserWantPersistentSession");
            if (userWantPersistentSession == null || userWantPersistentSession == "true"){
                jQuery("#mantainSession").val('true').attr('selected', true);
                console.log("my_profile.js _init --> User wanted persistent session");
            }else{
                jQuery("#mantainSession").val('false').attr('selected', true);
                console.log("my_profile.js _init --> User did not want persistent session");
            }       
            
            // event change value: if want a change in persistent session we notify m4jsapi and store the value
            jQuery("#mantainSession").bind('slidestop', function() {
                var userWantPersistentSession = jQuery('#mantainSession option:selected').val();
                if (userWantPersistentSession == "false"){
                    // Asked by UX
                    // javascript:meta4.mobile.logout.open(callbackCancelLogout);
                    console.log("my_profile.js _init --> setKeepSession false");
                    meta4.M4Executor.setKeepSession(false);
                    meta4.mobile.setLocalStorage("m4mobileUserWantPersistentSession", false);

                }else{
                    console.log("my_profile.js _init --> setKeepSession true");
                    meta4.M4Executor.setKeepSession(true);
                    meta4.mobile.setLocalStorage("m4mobileUserWantPersistentSession", true);
                }
            });

            jQuery("#mantainSession").slider('refresh'); 
        }
        
        $('#labelServerInfo').text(location.protocol + '//' + location.host);			

        //General
        jQuery('#contentMyProfile').css('display', 'block');

		jQuery('#logoutButton').css('display', 'block');
		meta4.mobile.spinner.hide();
	}

	return {
		init:function(){
			_init();
		}
	};
}());

$( document ).ready(function() {
	domReady = true;
	checkShowButtonServer();
});


jQuery(document).bind('meta4Ready', meta4.mobile.my_profile.init);

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
    	var cookie = cookies[i];
    	var eqPos = cookie.indexOf("=");
    	var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    	document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function checkShowButtonServer(){
	
	$('#deletedefault').click(
		function() {			
			var trans = meta4.ui.translate.getTranslate('_confirmChangeClientID');
			if (confirm(trans) == true) {

				jQuery.ajax("/servlet/login",{
					data:{'_LOGOUT':'_LOGOUT',
					success:meta4.mobile.resetCompanyID()	
				}});	
			}
	});

	if(deviceReady && domReady){
		$( "a[data-icon='m4home']" ).click(
			function() {	
				document.location.href = '/mobile/m4home.html';
		});
	}
}

function onDeviceReady(){
	deviceReady = true;
	document.addEventListener("backbutton", function(e){
		e.preventDefault();
		document.location.href = '/mobile/m4home.html';
	}, false);	

	meta4.mobile.initSatusBar('#196988');
}
function onSaveStorageFail(){
	console.log("Fail on save storage");
}

function onSaveStorageSuccess(){
	console.log("Success on save storage");
}
