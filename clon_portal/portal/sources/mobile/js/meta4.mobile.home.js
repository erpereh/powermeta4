/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: meta4.mobile.home.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */

var cordovaLoaded = false;
var m4loaded = false;
var tasksNumber = 0;
var newsNumber =0 ;

document.addEventListener("deviceready", onDeviceReady, false);


/*global jQuery*/
var meta4 = meta4 || {};
meta4.mobile = meta4.mobile || {};

/* single sign on */
var deviceFrom = meta4.mobile.getURLParameter('deviceFrom');

if(deviceFrom && (deviceFrom == 'android' || deviceFrom == 'ios')) meta4.mobile.setLocalStorage('deviceFrom', deviceFrom);

meta4.mobile.home = (function() {
	'use strict';
	var channelHome = {};

	function setAuditoryInfo(menuHttp, menuId){
		function onMetadataSuccess(request) {
			console.log('M4object created and loaded successfully');
			var channel = new meta4.M4Object('SRTC_MOB_SESSION');
	    	channel.setContextId('Recovery_Ping');
			var requestAuditory = new meta4.M4Request(channel);
										
			if (requestAuditory.setClientInfo) {
				requestAuditory.setClientInfo(menuHttp);
			}

			if (requestAuditory.setClientDebugInfo) {						
				var homeInfoJSON = meta4.mobile.getSessionStorage('m4movilmenu');
				var homeInfo = jQuery.parseJSON(homeInfoJSON);	

				// audit menu option
				var idMenu = "";
				if (menuId != null){
					idMenu = menuId;
				}
				else{
					idMenu = "GENERIC_MOBILE_MENU_OPTION";
				}

	            console.log('Clicked ' + menuHttp + '---' + idMenu);
				requestAuditory.setClientDebugInfo(idMenu);									
			}
										
			//execute request
			console.log('Set auditory info');
			executor.execute(requestAuditory, null, null);						
		}

		function onMetadataFail(request) {
			console.log('Error in Meta4Object load metadata');
		}

		var ids = [];
		ids.push("SRTC_MOB_SESSION");
		var executor = new meta4.M4Executor();
		executor.loadMetadata(ids, onMetadataSuccess, onMetadataFail);

	}

	function checkVersion()
	{
		// Miro las versiones para avisar si no es la última
		var checkversion = meta4.mobile.getSessionStorage('checkversion');
		if (checkversion === null) {
			var hasMobileDevice = typeof device != 'undefined';
			meta4.mobile.setSessionStorage('checkversion', true);

			// Información
			var info = "\n";
			info += "-------------------------------------------" + "\n";
			info += "Browser CodeName: " + navigator.appCodeName + "\n";
			info += "Browser Name: " + navigator.appName + "\n";
			info += "Browser Version: " + navigator.appVersion + "\n";
			info += "Cookies Enabled: " + navigator.cookieEnabled + "\n";
			info += "Browser Language: " + navigator.language + "\n";
			info += "Browser Online: " + navigator.onLine + "\n";
			info += "Platform: " + navigator.platform + "\n";
			info += "User-agent header: " + navigator.userAgent + "\n";
			info += "-------------------------------------------" + "\n";

			if (hasMobileDevice) {
				info += "Device Name: " + device.name + "\n";
				info += "Cordova: " + device.cordova + "\n";
				info += "Device Platform: " + device.platform + "\n";
				info += "Device uuid: " + device.uuid + "\n";
				info += "Device Version: " + device.version + "\n";
				info += "Device Model: " + device.model + "\n";
				info += "-------------------------------------------" + "\n\n";
			}
			console.log(info);
			
			if (hasMobileDevice) {
				// Leo la Versión del movil
				if (cordova.getAppVersion && cordova.getAppVersion.getVersionNumber) {
					cordova.getAppVersion.getVersionNumber(function (version) {
						var firstAppVersionAndroid = '813.000.072';
						var firstAppVersionIos = '812.002.072';
						var urlGetMobileVersion = meta4.mobile.m4JavaServerPages().mobileVersion;

						// Leo la Versión del serviodr de m4
						$.getJSON(urlGetMobileVersion, function (appVersions) {
							var appVersionAndroid = null;
							var appVersionIos = null;
							if (appVersions) {
								appVersionAndroid =  appVersions.APP_VERSION_IOS;
								appVersionIos =  appVersions.APP_VERSION_ANDROID;
							}

							if (meta4.mobile.deviceFrom() === 'android') {
								console.log("La versión de la aplicación es '" + version + "' y la última versión publicada es '" + appVersionAndroid + "'");
							}
							else if (meta4.mobile.deviceFrom() === 'ios') {
								console.log("La versión de la aplicación es '" + version + "' y la última versión publicada es '" + appVersionIos + "'");
							}

							if ((meta4.mobile.deviceFrom() === 'android' && appVersionAndroid !== '000.000.000' && appVersionAndroid !== firstAppVersionAndroid && version !== appVersionAndroid) || (meta4.mobile.deviceFrom() === 'ios' && appVersionIos !== '000.000.000' && appVersionIos !== firstAppVersionIos && version !== appVersionIos)) {
								var msg1 = meta4.ui.translate.getTranslate('_home_version_not_update');
								var msg2 = meta4.ui.translate.getTranslate('_home_versions_info');
								msg2 = msg2.replace("&%0&", version);

								if (meta4.mobile.deviceFrom() === 'android') {
									msg2 = msg2.replace("&%1&", appVersionAndroid);
								}
								else if (meta4.mobile.deviceFrom() === 'ios') {
									msg2 = msg2.replace("&%1&", appVersionIos);
								}

								//meta4.ui.log.showMsg(msg1 + "\n\n" + msg2);
								meta4.mobile.toast.showDelay(msg1 + "\n\n" + msg2, 10000);
							}
						});
					});
				}
			}
		}
	}

	//leemos el nombre del usuario conectado . boton de logout en el myprofile.
	function readLogonInfo(request) {

		var channelMenu = request.getObject();
		var channelMenuNode = channelMenu.getNode('SRTC_MOBILE_HOME');
		channelMenuNode.moveTo(0);
		var nUser = channelMenuNode.getValue('N_APP_USER');
		jQuery('.loginName').html(nUser);

		//añadimos la foto
		var photoSRC = loadEmployeePhoto(request);
		var photoContainer = jQuery('#photoPerson img');
		if (photoSRC == 'unknownPhoto' || photoSRC == null) {
			photoSRC = '/mobile/icons/unknownHome.png';
		}
		photoContainer.attr('src',  photoSRC);
		m4loaded = true;
		checkAllLoaded();
		return nUser;
	}

	function readIDLogonInfo(request) {
		//user
		var channelMenu = request.getObject();
		var channelMenuNode = channelMenu.getNode('SRTC_MOBILE_HOME');
		channelMenuNode.moveTo(0);
		var idUser = channelMenuNode.getValue('ID_APP_USER');
		return idUser;
	}

	//performance: avoid redirection in login
	function processMenuPath(menuHttp) {
		var relativeToHerePath = (menuHttp.substr(0, 1) != "/" && menuHttp.substr(0, 1) != ".") ? true : false;
		var relativeToParentPath = (menuHttp.indexOf("../") == 0) ? true : false;
		if (relativeToParentPath) {
			menuHttp = menuHttp.substr(2, menuHttp.length);
		} else if (relativeToHerePath) {
			menuHttp = "/mobile/" + menuHttp;
		}
		return menuHttp;
	}

	//performance: avoid redirection in login
	function processIconPath(menuIcon) {
		var backSlash = String.fromCharCode(92);
		var relativeToHerePath = (menuIcon.substr(0, 1) != backSlash && menuIcon.substr(0, 1) != ".") ? true : false;
		var relativeToParentPath = (menuIcon.indexOf(".." + backSlash) == 0) ? true : false;
		if (relativeToParentPath) {
			menuIcon = menuIcon.substr(2, menuIcon.length);
		} else if (relativeToHerePath) {
			menuIcon = backSlash + "mobile" + backSlash + menuIcon;
		}
		return menuIcon;
	}

	//opciones de menu en modo lista
	function addListMenu(menuOption) {
		var menuName = menuOption[0];
		var menuHttp = menuOption[1];
		var menuIcon = menuOption[2];
		var menuId   = menuOption[3];

		if (menuHttp != null)
		{
			var listContainer = jQuery('#listContainer');
			var liElement = jQuery('<li></li>');
			var anchorMenu = jQuery('<a></a>');
			var header1 = jQuery('<h1></h1>');
			
			anchorMenu.attr('data-ajax', 'false');
			anchorMenu.click(function() {setAuditoryInfo(menuHttp,menuId);});
			liElement.attr('id',menuId);
			header1.html(menuName);

			var spanCounter = jQuery('<span></span>');
			
			if (menuId === "SSCO_MOBILE_TO_DO_LIST")
			{
				spanCounter.attr('class', 'ui-li-count');
				spanCounter.attr('class', 'ui-li-count pendingTask');
			} 
			else if (menuId ==="SSCO_MOBILE_NEWS")
			{
				spanCounter.attr('class', 'ui-li-count');
				spanCounter.attr('class', 'ui-li-count newsCount');
			}
			else if (menuId==="SSCO_MOBILE_SETTINGS")
			{
				var settingsButton = jQuery('#settingsButton');
				settingsButton.attr('href', processMenuPath(menuHttp));
				settingsButton.click(function() { });
			} 
			if (menuId != "SSCO_MOBILE_SETTINGS") 
			{
				var icon = jQuery('<img></img>');
				var iconPath = processIconPath(menuIcon).replace('png', 'svg');
				icon.attr('src', iconPath);
				icon.attr('class', 'ui-li-icon');
				anchorMenu.attr('href', processMenuPath(menuHttp));
				anchorMenu.append(icon, header1, spanCounter);
				liElement.append(anchorMenu);
				listContainer.append(liElement);
			}
		}
	}

	function drawMenus(updateMode,homeInfo) {
	
	  if (updateMode===true){
			jQuery('#listContainer').empty();
		}
		var menuOptions = homeInfo.menuOptions;
	
		for (var i = 0; i < menuOptions.length; i++) {

			//add to list
			var menuOption = menuOptions[i];
			addListMenu(menuOption);
		}
		jQuery('#listContainer').trigger("create");
		try {
			jQuery('#listContainer').listview("refresh");
		} catch (e) {}

		console.log('drawn menus');
		
		meta4.log.showLog();
	}

	//Dibujamos las opciones de menu
	function onLoadMenus(updateMode,request) {
		console.log('prepare to draw menus');

		var channelMenu = request.getObject();
		var menusNode = channelMenu.getNode('SRTC_MOBILE_HOME');
		var menuOptions = [];
		
		for (var i = 0; i < menusNode.count(); i++) {
			menusNode.moveTo(i);
			//Opciones de menu hijas de la raiz SSCO_MOBILE_MENU
			if (menusNode.getValue('ID_PARENT_MENU') === 'SSCO_MOBILE_MENU') {
				var menuName = menusNode.getValue('TRANSLATED_MENU');
				var menuHttp = menusNode.getValue('N_HTTP');
				var menuIcon = menusNode.getValue('ICON');
				var menuIDMenu = menusNode.getValue('ID_MENU_1');
				var menuOption = [];
				menuOption.push(menuName);
				menuOption.push(menuHttp);
				menuOption.push(menuIcon);
				menuOption.push(menuIDMenu);
				menuOptions.push(menuOption);
			}
		}

		var homeInfo = {};
		homeInfo.menuOptions = menuOptions;
		homeInfo.taskNumber = 0;
		homeInfo.newsNumber = 0;
		homeInfo.nUser =  readLogonInfo(request);
		homeInfo.idUser =  readIDLogonInfo(request);
		homeInfo.photoSRC = loadEmployeePhoto(request);
		meta4.mobile.setSessionStorage('m4movilmenu', JSON.stringify(homeInfo));

		drawMenus(updateMode,homeInfo);
	}

	function processNumberOfTasksAndNews(request)
	{
		var channelMenu = request.getObject();
		var menusNode = channelMenu.getNode('SRTC_MOBILE_HOME');
		tasksNumber = parseInt(menusNode.getValue('TOTAL_TASK'), 10);
		newsNumber = parseInt(menusNode.getValue('TOTAL_NEWS'), 10);

		paintNumberOfTasksAndNews(tasksNumber,newsNumber);
		storeNumberOfTasksAndNews(tasksNumber,newsNumber);
		console.log('tasks number and news number assigned from DB');
	}

	function paintNumberOfTasksAndNews(tasks, news)
	{
		jQuery('.pendingTask').text('' + tasks + '');
		if (tasks == 0){
			jQuery('.pendingTask').addClass('hideHomeBall');
		}else{
			jQuery('.pendingTask').removeClass('hideHomeBall');
		}
		jQuery('.newsCount').text('' + news + '');
		if (news == 0){
			jQuery('.newsCount').addClass('hideHomeBall');
		}else{
			jQuery('.newsCount').removeClass('hideHomeBall');
		}
	}

	function storeNumberOfTasksAndNews(tasksNumber,newsNumber)
	{
		var homeInfo = meta4.mobile.getSessionStorage('m4movilmenu');
		homeInfo = jQuery.parseJSON(homeInfo);
		homeInfo.taskNumber = tasksNumber;
		homeInfo.newsNumber = newsNumber;
		var homeInfoJSON = JSON.stringify(homeInfo);
		meta4.mobile.setSessionStorage('m4movilmenu', homeInfoJSON);	
	}

	function fillJavaServerPages(request)
	{
		console.log('Begin fill jsp paths...');
		var channelMenu = request.getObject();
		var menusNode = channelMenu.getNode('SRTC_MOBILE_HOME');

		var javaServerPages = {};
		javaServerPages.login =  menusNode.getValue('LOGIN_PATH');
		javaServerPages.logout =  menusNode.getValue('LOGOUT_PATH');
		javaServerPages.index =  menusNode.getValue('INDEX_PATH');
		javaServerPages.uniqueParams =  menusNode.getValue('UNIQUE_PARAMS_PATH');
		javaServerPages.mobileVersion =  menusNode.getValue('MOBILE_VERSION_PATH');
		meta4.mobile.setSessionStorage('m4JavaServerPages', JSON.stringify(javaServerPages));
		console.log('end fill jsp paths...');
	}

	function initHome(updateMode)
	{
		
		function succesInitialize(updateMode,request) 
		{
			fillJavaServerPages(request);

			// Restauro el showErrors
			meta4.ui.log.showErrors = oldShowErrors;
			
			//Pintamos los menús
			onLoadMenus(updateMode,request); 
			meta4.log.showLog();

			//we must storage if the persistent session is allowed by the client
			var bPersistentSessionAllowed = meta4.M4Executor.isEnabledKeepSession();
			meta4.mobile.setSessionStorage('m4bPersistentSessionAllowed', bPersistentSessionAllowed);
			
			if (updateMode===false)
			{
				//Quitamos el spinner. Cuando se actualiza no se pone el spinner.
				meta4.mobile.spinner.hide();
				
				// El entorno ya está disponible. Avisamos a Edu para que pare el crono
				meta4.M4JSEvents.resetTimeToInteractive(); 
			}	
			
			console.log('End loading menu data');

			loadNumberOfTasksAndNews();
		}

		function errorInitialize(request) 
		{
			fillJavaServerPages(request);
			// Se ha producido un error por no tener permisos y me voy
			console.log('Security Error on load');
			// Escondo la busqueda		 		
			
			// Muestro el error No tienes permisos para ejecutar la aplicación
			// A los pocos segundo voy a login
			var logoutCountdownTime = 15;
			var counter = self.setInterval(SecurityErrorLogOut, 1000);
	
			function SecurityErrorLogOut() 
			{
				meta4.mobile.spinner.hide();
				logoutCountdownTime = logoutCountdownTime - 1;
				// Muestro el error con el contador
				var literal = meta4.ui.translate.getTranslate('_home_security_error_logout');
				literal = literal.replace("&%0&", logoutCountdownTime);
				meta4.ui.log.showMsg(literal);
				if (logoutCountdownTime == 0) 
				{
					// Voy al login
					window.location.href = meta4.mobile.logoutJavaserverpage;
				}
			}
		}

		console.log('Begin loading menu data...');
		meta4.log.time('new SRTC_MOBILE_HOME');
		var instanceId = 'SRTC_MOBILE_HOME' + meta4.ui.language.getCodeLanguage(); //we add the language code to the instance, in order to ensure that we will use other instance in case of change of language without logout
		channelHome = new meta4.M4Object('SRTC_MOBILE_HOME', instanceId, true); 
		meta4.log.timeEnd('new SRTC_MOBILE_HOME');
		var request = new meta4.M4Request(channelHome, 'SRTC_MOBILE_HOME', 'INITIALIZE_HOME', null);
		// nota: impacto
		request.setServerParseMode("ALL");
		// Guardo el showErrors
		var oldShowErrors = meta4.ui.log.showErrors;
		meta4.ui.log.showErrors = function() {};

		if (updateMode===false)
		{
			meta4.mobile.spinner.show();
		}
	
		meta4.mobile.data.execute(request, succesInitialize.bind(null,updateMode), errorInitialize);
		
	}

	function loadNumberOfTasksAndNews()
	{
   	function errorInitialize(){	}
		meta4.log.time('new SRTC_MOBILE_HOME');
		var instanceId = 'SRTC_MOBILE_HOME' + meta4.ui.language.getCodeLanguage(); //we add the language code to the instance, in order to ensure that we will use other instance in case of change of language without logout
		channelHome = new meta4.M4Object('SRTC_MOBILE_HOME', instanceId, true);
		meta4.log.timeEnd('new SRTC_MOBILE_HOME');
		var request = new meta4.M4Request(channelHome,'SRTC_MOBILE_HOME', 'INITIALIZE_TASKS', null);
		meta4.mobile.data.execute(request, processNumberOfTasksAndNews, errorInitialize);
	}

	function launchInitHome()
	{
		var meta4Objects = [];
		meta4Objects.push('SRTC_MOBILE_HOME');
		var homeInfoJSON = meta4.mobile.getSessionStorage('m4movilmenu');
		
		var updateMode = true;
		if (homeInfoJSON == null) 
		{
			checkVersion();
			updateMode = false;

			meta4.mobile.data.loadMetadata(meta4Objects,initHome.bind(null,updateMode));	
		} 
		else 
		{
			//Por defecto el spinner está activo para evitar el efecto de que salga 
			//la pantalla en blanco mientras se carga el html y a continuación el spinner
			//Como en este caso no lo queremos poner, llamamos al hide para que se 
			//oculte y se muestre la pantalla normalmente.
			meta4.mobile.spinner.hide();

			var homeInfo = jQuery.parseJSON(homeInfoJSON);
			
			//pintamos el menú cacheado
			drawMenus(updateMode,homeInfo);

			// El entorno ya está disponible. Avisamos a Edu para que pare el crono
			meta4.M4JSEvents.resetTimeToInteractive(); 

			//pintamos el número de tareas y noticias cacheadas
			paintNumberOfTasksAndNews(homeInfo.taskNumber,homeInfo.newsNumber);
			console.log('tasks number and news number readed from cache');

			//añadimos el nombre del usuario
			jQuery('.loginName').html(homeInfo.nUser);
			
			//añadimos la foto
			var photoContainer = jQuery('#photoPerson img');
			if (homeInfo.photoSRC == 'unknownPhoto' || homeInfo.photoSRC == null) {
				homeInfo.photoSRC = '/mobile/icons/unknownHome.png';
			}
			photoContainer.attr('src',  homeInfo.photoSRC);

			//Obtenemos el número real de tareas y noticias
			meta4.mobile.data.loadMetadata(meta4Objects,initHome.bind(null,updateMode));
		
			m4loaded = true;
			checkAllLoaded();
		}
		//Navegar a la primera pagina
		var firstPage = "#tilePage";
		if (meta4.mobile.getLocalStorage("m4firstPage")) 
		{
			firstPage = '#' + meta4.mobile.getLocalStorage("m4firstPage");
		}
		jQuery.mobile.changePage(firstPage, {
			showLoadMsg: "true"
		});
	}

	function deprecateVersion(appVersionInfo)
	{
        //var mgsDeprecated = meta4.ui.translate.getTranslate('_home_version_deprecated');
		//var deprecatedText = "La aplicación que estás utilizando ha quedado obsoleta. Meta4 ha desarrollado una nueva que puedes descargarte desde la tienda de aplicaciones de tu dispositivo"
		var deprecatedText = meta4.ui.translate.getTranslate('_home_deprecated_version'); //"La aplicación que estás utilizando ha quedado obsoleta. Meta4 ha desarrollado una nueva que puedes descargar desde la tienda de aplicaciones de tu dispositivo.";
		var installNewAppText = meta4.ui.translate.getTranslate('_home_install_new_app');//"Por favor, desinstala esta aplicación y empieza a utilizar la nueva.";
		meta4.mobile.spinner.hide();
		
		jQuery("#listPage").remove();
		jQuery("#deprecatedText").html(deprecatedText + "<br><br>" + installNewAppText);
		jQuery("#deprecatedVersion").css('display','flex');
		jQuery("html").addClass('deprecated');

		//Cerramos sesión sin decir nada ni redirigir
		meta4.mobile.silentLogout();

		var deprecatedLinkText = meta4.ui.translate.getTranslate('_home_download_new_app')
		
        setTimeout(function(){
			
            if(meta4.mobile.deviceFrom() === 'ios'){
				var urlIos = "itms-apps://apps.apple.com/us/app/" + appVersionInfo.MARKET_APP_ID_IOS;
				jQuery("#deprecatedLink").text(deprecatedLinkText);
				jQuery("#deprecatedLink").attr("href",urlIos);

				window.location.href = urlIos;
			}
			else if (meta4.mobile.deviceFrom() === 'android')
			{
				var urlAndroid = "market://details?id=" + appVersionInfo.MARKET_APP_ID_ANDROID;
				jQuery("#deprecatedLink").text(deprecatedLinkText);
				jQuery("#deprecatedLink").attr("href",urlAndroid);

				window.location.href= urlAndroid;	
            }
		}, 8000);   
	}

	function extractDomain(url) {
		var hostname;
		//find & remove protocol (http, ftp, etc.) and get domain
		if (url.indexOf("//") > -1) {
			hostname = url.split('/')[2];
		}
		else {
			hostname = url.split('/')[0];
		}

		//find and extract domain
		const domains = hostname.split('.');
		return domains[domains.length -2];	
	}

	function _init() {
		
		var domain = extractDomain(window.location.origin);

		// Checks if is an url from the global platform and if exists the new mobile app
		// in the market. If true then show the deprecation message
		if (domain && domain.toLowerCase() ==='meta4globalhr')
		{
			const urlMobileVersionInfo = window.location.origin + "/mobile/mobile_version" + "." + "j" + "sp";
		
			$.getJSON(urlMobileVersionInfo, function (appVersionInfo) {
				if (appVersionInfo) {
					if (appVersionInfo.MARKET_APP_ID_IOS && appVersionInfo.MARKET_APP_ID_ANDROID)
					{
						deprecateVersion(appVersionInfo);
					}
					else
					{
						launchInitHome();
					}
				}
			}).fail(function() {
				console.log("Unable to get version info");
				launchInitHome();
			});
		}
		else
		{
			launchInitHome();
		}
	}
	return {
		init: function() {
			_init();
		}
	};
}());

function getCookie(cname) 
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}

function initPage() 
{
	if (meta4.mobile.deviceFrom() == 'android' || meta4.mobile.deviceFrom() == 'ios') 
	{
		meta4.mobile.loadCordova(function(data, textStatus, jqxhr) {
			meta4.mobile.loadCordovaSuccessFunction();
			document.addEventListener("backbutton", function(e) 
			{
				e.preventDefault();
				navigator.app.exitApp();
			}, false);
		});
	}
	//we must store the last page showed

	jQuery(document).on('pageshow', 'div', function(event, ui) 
	{
		if (event.target.id != 'loginPage') 
		{
			//localStorage.m4firstPage = event.target.id;
			meta4.mobile.setLocalStorage("m4firstPage", event.target.id);
		}
	});
	//persistent session
	var userWantPersistentSession = meta4.mobile.getLocalStorage("m4mobileUserWantPersistentSession");
	if (userWantPersistentSession == null || userWantPersistentSession == "true") {
		console.log("setKeepSession home -> true");
		meta4.M4Executor.setKeepSession(true);
	} else {
		console.log("setKeepSession home -> false");
		meta4.M4Executor.setKeepSession(false);
	}
	//set the product id. this is used in the case of recovery of the persistent session
	meta4.M4Executor.setProductId("mobile");
	//init
	meta4.mobile.home.init();
}

jQuery(document).bind('meta4Ready', initPage);

function onDeviceReady() 
{
	document.addEventListener("backbutton", function(e) 
	{
		e.preventDefault();
		navigator.app.exitApp();
	}, false);
	cordovaLoaded = true;
	checkAllLoaded();
}

function checkAllLoaded() 
{
	console.log("cordovaLoaded: " + cordovaLoaded );
	console.log("m4loaded: " +m4loaded);
	if (cordovaLoaded && m4loaded) 
	{
		//checkWkWebview();
		meta4.mobile.initSatusBar('#737373');

		savePreferences();
		var isRegistered = meta4.mobile.getSessionStorage('isRegistered');
		if (isRegistered==null)
		{
			pushNotificationRegister();
		}
	}
}

function checkWkWebview()
{
	if (navigator.platform.substr(0,2) === 'iP'){
		//iOS (iPhone, iPod or iPad)
		var lte9 = /constructor/i.test(window.HTMLElement);
		var nav = window.navigator, ua = nav.userAgent, idb = !!window.indexedDB;
		if (ua.indexOf('Safari') !== -1 && ua.indexOf('Version') !== -1 && !nav.standalone){      
		  //Safari (WKWebView/Nitro since 6+)
		  console.log('Browser is Safari (WKWebView/Nitro since 6+)');
		} else if ((!idb && lte9) || !window.statusbar.visible) {
		  console.log('Browser is UIWebView');
		} else if ((window.webkit && window.webkit.messageHandlers) || !lte9 || idb){
		  console.log('Browser is WKWebView');
		}
	  }
}

function onSaveStorageSuccess() {
	console.log("success on save to mobile app");
}

function onSaveStorageFail() {
	console.log("fail on save to mobile app");
}

function savePreferences()
{
	//store preferences
	navigator.meta4localpreferencesplugin.save(onSaveStorageSuccess,onSaveStorageFail,"mobileapplanguage",getCookie("M4Language_tc"));
	navigator.meta4localpreferencesplugin.save(onSaveStorageSuccess,onSaveStorageFail,"serverpreference",document.location.origin);	
}

function getFirebaseTokenAndSave(currentSavedToken)
{
	cordova.plugins.firebase.messaging.requestPermission().then(function() {
		console.log("Push messaging is allowed. Getting token");
		cordova.plugins.firebase.messaging.getToken().then(function(token) {
			console.log("registered token:"  +  token);
			if (token && token != currentSavedToken)
			{
				saveDeviceToken(token);
			}
		});
	});
}

function doTokenRegister(registration_id)
{
	if(meta4.mobile.deviceFrom()=='android')
	{
		getFirebaseTokenAndSave(registration_id);
	}
	else if (meta4.mobile.deviceFrom()=='ios')
	{
		saveDeviceToken(registration_id);
	}
}

function pushNotificationRegister()
{
	document.addEventListener("backbutton", function(e){
				e.preventDefault();
				navigator.app.exitApp();
	}, false);

	function onLoadStorageSuccess(registration_id) {
		doTokenRegister(registration_id);
		console.log("success on loading push notification reg ID");
	}

	function onLoadStorageFail() {
			
		console.log("fail on loading push notification reg ID");
	}
	navigator.meta4localpreferencesplugin.load(onLoadStorageSuccess,onLoadStorageFail,"registration_id");
}

function saveDeviceToken(token)
{
	    var ids = [];
		ids.push("SRTC_DEVICE_USER");
		
		var executor = new meta4.M4Executor();
		var channel;
		executor.loadMetadata(ids, onMetadataSuccess,onMetadataFail);	

		function onMetadataSuccess(name)
		{
			channel = new meta4.M4Object('SRTC_DEVICE_USER');
			console.log('Success in M4object creation');
			
			var args = [];			
					
			var homeInfoJSON = meta4.mobile.getSessionStorage('m4movilmenu');

			if (homeInfoJSON !== null)
			{		                
				var homeInfo = jQuery.parseJSON(homeInfoJSON);          

				var hasMobileDevice =   typeof device != 'undefined'; 
				if(hasMobileDevice){
					console.log("Parameters regid-device: " + token + " - " + homeInfo.idUser + " - " + device.platform);
				}
				args.push(homeInfo.idUser, token, device.platform);
				var request = new meta4.M4Request(channel, 'SRTC_DEVICE_USER', 'REGISTER_DEVICE', args);
				new meta4.M4Executor().execute(request, onExecuteMethodSuccess, onExecuteMethodFail);
			}

			function onExecuteMethodSuccess(request)
			{
				meta4.mobile.setSessionStorage('isRegistered',true);

				if (meta4.mobile.deviceFrom()=='android')
				{
					navigator.meta4localpreferencesplugin.save(onSaveStorageSuccess,onSaveStorageFail,"registration_id",token);
				}
				console.log('method successfully executed');
			}

			function onExecuteMethodFail(request)
			{
				console.log('method failed');
			}
		}
						
		function onMetadataFail(name)
		{
			console.log('Fail in M4object creation');
			console.log(name.getErrorMessage());
		}
}

function loadEmployeePhoto(request){
	
	var channelEmpInfo = request.getObject();
	var channelEmpInfoNode = channelEmpInfo.getNode('SRTC_MOBILE_HOME');
	var nPhoto = channelEmpInfoNode.getValue('SRCO_PHOTO_TOKEN');
	return nPhoto;
}

