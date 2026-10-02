/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: meta4.mobile.chgpass.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */

var meta4 = meta4 || {};
meta4.mobile = meta4.mobile || {};

function initPage() {
	'use strict';
	if (typeof(Storage) !== "undefined") {
		sessionStorage.removeItem("m4movilmenu");
	}
	//change image for a button
	var button_value = jQuery('#button_send_a').attr('title');
	var button_onclick = jQuery('#button_send_a').attr('href');
	jQuery('#button_send_a').remove();
	jQuery('#button_send_img').remove();
	if (button_value) {
		if (button_onclick.indexOf('javascript:') == -1) {
			button_onclick = "javascript:window.location.href='" + button_onclick + "'"
		}
		var input = jQuery('<input></input>').attr({
			'id': 'button_send',
			'type': 'button',
			'value': button_value,
			'onclick': button_onclick
		});
		var body = jQuery('body');
		body.append(input);
	}
	//data-theme
	jQuery.mobile.loader.prototype.options.theme = 'a';
	jQuery.mobile.page.prototype.options.theme = 'a';
	if (typeof(Storage) !== "undefined") {
		if (localStorage.m4ThemeMobile) {
			jQuery.mobile.page.prototype.options.theme = localStorage.m4ThemeMobile;
			jQuery.mobile.loader.prototype.options.theme = localStorage.m4ThemeMobile;
		}
	}
	var elements = jQuery('body').find('*');
	var i;
	for (i = 0; i < elements.length; i++) {
		elements.attr('data-theme', jQuery.mobile.page.prototype.options.theme);
	}
	//set title
	document.title = "Meta4";
	//more theme
	jQuery.mobile.initializePage();
	//labels
	var text;
	text = jQuery('#tdlblM4_CURRENT_PASSWORD').text();
	jQuery('#M4_CURRENT_PASSWORD').attr('placeholder', text);
	text = jQuery('#tdlblM4_NEW_PASSWORD').text();
	jQuery('#M4_NEW_PASSWORD').attr('placeholder', text);
	text = jQuery('#tdlblM4_RETYPE_PASSWORD').text();
	jQuery('#M4_RETYPE_PASSWORD').attr('placeholder', text);
	text = jQuery('#tdlblM4_USER').text();
	var text1 = jQuery('#tdM4_USER').text();
	if (text1.indexOf(text) == -1) {
		jQuery('#tdM4_USER').text(text + text1);
	}
	if (document.getElementById("M4_CURRENT_PASSWORD")){
		if (document.getElementById("M4_CURRENT_PASSWORD").getAttribute("placeholder") == ""){
			var currentPwdTitle = document.getElementById("M4_CURRENT_PASSWORD").getAttribute("title");
			document.getElementById("M4_CURRENT_PASSWORD").setAttribute("placeholder", currentPwdTitle);
		}
	}
	if (document.getElementById("M4_NEW_PASSWORD")){
		if (document.getElementById("M4_NEW_PASSWORD").getAttribute("placeholder") == ""){
			var currentPwdTitle = document.getElementById("M4_NEW_PASSWORD").getAttribute("title");
			document.getElementById("M4_NEW_PASSWORD").setAttribute("placeholder", currentPwdTitle);
		}
	}
	if (document.getElementById("M4_RETYPE_PASSWORD")){
		if (document.getElementById("M4_RETYPE_PASSWORD").getAttribute("placeholder") == ""){
			var currentPwdTitle = document.getElementById("M4_RETYPE_PASSWORD").getAttribute("title");
			document.getElementById("M4_RETYPE_PASSWORD").setAttribute("placeholder", currentPwdTitle);
		}
	}
	

	var goBackDiv = jQuery("<div></div>").attr({
		'id':'goBackDiv',
	});
	var goBackImg = jQuery("<img></img>").attr({
		'src':'/mobile/icons/goBack.svg',
		'onClick':'goPrevPage()',
	});
	goBackDiv.append(goBackImg);

	var formContent = jQuery('#loginBox');
	jQuery( formContent ).after( goBackDiv );

	//Ocultamos el botón de volver cuando no hay pagina previa (bug 0326608)
	var prevPageCount = history.length;
	console.log(prevPageCount);
	if (prevPageCount <= 1){
		goBackImg.css('display','none');
	}
}

function goPrevPage() {
	var currentLocation = window.location;
	var currentLocation = window.location.href;
    var isChangePwd = currentLocation.includes("change_password");
	if (isChangePwd == true){
		//console.log('vengo del popup');	
		window.history.go(-3);	
	}else{
		//console.log('vengo del cambio de contra');	
		window.history.back();
	}
}

jQuery(document).ready(function() {
	initPage();
});