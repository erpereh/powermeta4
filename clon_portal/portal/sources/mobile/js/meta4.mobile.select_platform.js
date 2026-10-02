/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: meta4.mobile.select_platform.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
{ 
	function loadlanguage()
	{			
	}
	
	navigator.globalization.getPreferredLanguage
	(
		function (language)
		{
			meta4.ui.translate.loadJs('select_platform_' + language.value.substring(0,2) + '.js', loadlanguage);
			console.log('select_platform_' + language.value.substring(0,2) + '.js');
		},
		function ()
		{
			console.log('Error getting language\n');
		}
	);
	
	console.log('device ready');
	
	console.log("hide");
	
	document.addEventListener("backbutton", function(e)
	{
		e.preventDefault();
		navigator.app.exitApp();
	}, false);

}

$(document).ready(loadCordova);

meta4.ui.translate.loadJs('select_platform_' + 'en' + '.js', null);

function deployhelp()
{
	if($('#divcodehelp').attr('class')=='deployed'){
		$( "#divcodehelp" ).removeClass( 'deployed' );
	} else {
		$( "#divcodehelp" ).addClass( 'deployed' );
	}
	return false;
}

function loadCordova()
{	
	var deviceFrom = (RegExp('deviceFrom' + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1];

	if(deviceFrom == 'android' || deviceFrom == 'ios')
	{
		var cordovaOsPath="";
		var cordovaOsPathLog="";
		if(deviceFrom == 'android')
		{
			cordovaOsPath="/mobile/cordova/android/cordova.js";
			var cordovaOsPathLog="Loaded cordova android.";
		}
		else if(deviceFrom == 'ios')
		{
			cordovaOsPath="/mobile/cordova/ios/cordova.js";
			var cordovaOsPathLog="Loaded cordova ios.";
		}
		
		jQuery.getScript(cordovaOsPath, function( data, textStatus, jqxhr )
		{
			console.log(cordovaOsPathLog);
			//pushNotificationRegister();
			document.addEventListener("backbutton", function(e)
			{
				e.preventDefault();
				navigator.app.exitApp();
			}, false);
		});
	}	
	
	$('#connect').click(function()
	{
		var value = $("#clientcode").val();
		window.location = "/mobile/welcome_action.jsp?clientkey=" + value + "&deviceFrom=" + deviceFrom;
	});
	
}

jQuery(document).ready(function() {
	var formContent = jQuery('#divcodehelp');

	var goBackDiv = jQuery("<div></div>").attr({
		'id':'goBackDiv',
	});
	var goBackImg = jQuery("<img></img>").attr({
		'src':'/mobile/icons/goBack.svg',
		'onClick':'goPrevPage()',
	});

	jQuery( formContent ).after( goBackDiv );

	goBackDiv.append(goBackImg);

	//Ocultamos el botón de volver cuando no hay pagina previa (bug 0326608)
	var prevPageCount = history.length;
	console.log(prevPageCount);
	if (prevPageCount <= 1){
		goBackImg.css('display','none');
	}
});

function goPrevPage() {
    window.history.back();
}


