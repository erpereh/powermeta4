/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: meta4.mobile.login.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */

//# sourceURL= meta4.mobile.login.js

/*global jQuery*/
//alert("weee!");

// marks to delay m4jsevents
window._m4LoadM4JSEvents = false;

document.addEventListener("deviceready", onDeviceReady, false);

function viewPassword() {
	var pwdInput = jQuery('#pwdlogin');
	var showpwdInput = jQuery('#pwdstatus');
		
	if (pwdInput.prop('type')=='password'){
		 jQuery('#pwdlogin').attr('type','text');
	}
	else
	{
		jQuery('#pwdlogin').attr('type','password');
	}
}
function viewPassword2() {
	var pwdInput = jQuery('#pwdlogin');
	var showpwdInput = jQuery('#pwdstatus');
		
	if (pwdInput.prop('type')=='password'){
		 jQuery('#pwdlogin').attr('type','text');
		 jQuery('#pwdstatus').prop('checked', true);
	}
	else
	{
		jQuery('#pwdlogin').attr('type','password');
		jQuery('#pwdstatus').prop('checked', false);
	}
}

function onDeviceReady(){

	meta4.mobile.initSatusBar('#737373');
	
	navigator.meta4localpreferencesplugin.load(onLoadStorageSuccess,onLoadStorageFail,"serverpreference");
	function onLoadStorageSuccess(serverpreference) {

		if(serverpreference==""){
			document.addEventListener("backbutton", function(e){
			e.preventDefault();			
			
			document.location.href = '/mobile/m4select_platform.html';
	}, false);
		}else{
			document.addEventListener("backbutton", function(e){
			e.preventDefault();
			navigator.app.exitApp();
	}, false);
		}
	}

	function onLoadStorageFail() {
		console.log("fail on loading push notification reg ID");
	}
}

var meta4 = meta4 || {};
meta4.mobile = meta4.mobile || {};
meta4.mobile.login = meta4.mobile.login || {};
meta4.mobile.login = ( function() {'use strict';
	
	jQuery(document).ready(function ()
	 {
		console.log( "ready");
	
		var deviceFrom = (RegExp('deviceFrom' + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1];
		if(deviceFrom == 'android' || deviceFrom == 'ios')
		{
			meta4.mobile.setLocalStorage('deviceFrom', deviceFrom);
		}
		
		if(meta4.mobile.deviceFrom() == 'android' || meta4.mobile.deviceFrom() == 'ios')
		{			
			meta4.mobile.loadCordova();
		}
		    
		jQuery.mobile.loader.prototype.options.theme = 'a';
		jQuery.mobile.page.prototype.options.theme = 'a';
		if ( typeof (Storage) !== "undefined") {
			if (localStorage.m4ThemeMobile) {
				jQuery.mobile.page.prototype.options.theme = localStorage.m4ThemeMobile;
				jQuery.mobile.loader.prototype.options.theme = localStorage.m4ThemeMobile;
			}
		}
	
		var elements = jQuery('body').find('*');
		var i;			
		for ( i = 0; i < elements.length; i++) {
			elements.attr('data-theme', jQuery.mobile.page.prototype.options.theme);
		}
	});
	
	function _setMobileLogin() {
	
		//set title login
		document.title="Meta4";

		//add label mode classic
		var textuser = jQuery('#labeluser').text();
		var textPwd = jQuery('#labelpwd').text();
		jQuery('#userlogin').attr('placeholder', textuser);
		jQuery('#pwdlogin').attr('placeholder', textPwd);

        var txt = m4xml.translate.getXMLValue('modeClassic');
		//delete old label
		var oldLabel = jQuery('#modeClassic');
		
		if (oldLabel.length > 0 ) {
		    
		    //0251503
			//oldLabel.remove();
			oldLabel.text(txt);
			
		} else{

            var body = jQuery('body');              
        }

		var dataDiv = jQuery('#datadiv');

		//delete old input
		var oldInput = jQuery('#prodLogin');
		if (oldInput != undefined) {
			oldInput.remove();
		}

		var input = jQuery('<input></input>').attr({
			'id' : 'prodLogin',
			'name' : '_PROD',
			'type' : 'hidden',
			'value' : 'mobile'
		});
		dataDiv.append(input);
		
		var showPassText =  m4xml.translate.getXMLValue('showpassword');
		var showpwdtextLabel = jQuery('#showpwdtextlabel');
		//Whether the show password label already exists the text is updated.
		if(showpwdtextLabel.length > 0)
		{
			var showPassChk= jQuery("<input></input>").attr({
				'id':'pwdstatus',
				'type':'checkbox',
				'class':'showPasswordCheck',
				'onClick':'viewPassword();'
			});
			var showPassSpan= jQuery("<span></span>").attr({
				'class':'checkmark',
				'onClick':'viewPassword();'
			});

			showpwdtextLabel.html(showPassText);
			showpwdtextLabel.append(showPassChk);
			showpwdtextLabel.append(showPassSpan);
			
		}else{
			//Adds the show password checkbox
			var rootElement = jQuery("#pwdwrong");
			var div = jQuery("<div></div>").attr({
				'id':'showpwdcontainer',
			});
			var showPasslabel= jQuery("<label></label>").attr({
				'id':'showpwdtextlabel',
				'class':'showPasswordLabel',
				'onClick':'viewPassword2();',
			});

			var showPassChk= jQuery("<input></input>").attr({
				'id':'pwdstatus',
				'type':'checkbox',
				'class':'showPasswordCheck',
				'onClick':'viewPassword();'
			});
			var showPassSpan= jQuery("<span></span>").attr({
				'class':'checkmark',
				'onClick':'viewPassword();'
			});

			showPasslabel.html(showPassText);
		
			div.append(showPasslabel);
			showPasslabel.append(showPassChk);
			showPasslabel.append(showPassSpan);
			div.insertBefore(rootElement);
		}

		var platformText =  m4xml.translate.getXMLValue('changePlatform');
		var linkTitle = m4xml.translate.getXMLValue('changePlatformTooltip');
		var platformLink = jQuery('#selectPlatform');

		jQuery('.loginRow.forgotPwd .key').attr({
			'src':'/mobile/icons/key-mono-white.svg',
		});

		if (platformLink.length<=0)
		{
			var loginEMSSDiv = jQuery('#loginEMSS');
			var goSelectPlatformDiv = jQuery("<div></div>").attr({
				'class':'loginRow changePlatform',
				'data-theme':'a'
			});
			var selectPlatformImg = jQuery("<img></img>").attr({
				'class':'key m4-minMarginRight',
				'src':'/mobile/icons/change_platform_id_white.svg',
				'data-theme':'a'

			});
			platformLink = jQuery("<a></a>").attr({
					'id':'selectPlatform',
					'style':'opacity: 1;',
					'title': linkTitle,
					'onClick':'meta4.mobile.resetCompanyID()',
					'data-theme':'a'
				});
			goSelectPlatformDiv.append(selectPlatformImg);
			goSelectPlatformDiv.append(platformLink);
			loginEMSSDiv.append(goSelectPlatformDiv);
		}

		platformLink.html(platformText);

		//remove margin kaptcha
		jQuery('#divCaptcha').find('div').css('margin', '0');
		
		jQuery.mobile.initializePage();

		//refresh to change text
		jQuery("#buttonenter").button("refresh");
		jQuery.mobile.loading('hide');
		
		// loads the m4jsevents
		if (window.m4loadjsevents) {
			window._m4LoadM4JSEvents = true;
			m4loadjsevents();
		}
	}
	
	return {
		setMobileLogin : function() {
			_setMobileLogin();
		},
		initPageShowError : function() {
			jQuery(document).ready(function() {
				jQuery.mobile.initializePage();
			});
		}
	};

}());
