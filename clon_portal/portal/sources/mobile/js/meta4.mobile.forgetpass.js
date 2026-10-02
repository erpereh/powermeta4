/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: meta4.mobile.forgetpass.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */


/*global jQuery*/

var meta4 = meta4 || {};

meta4.mobile = meta4.mobile || {};

function initPage() {
	'use strict';

	//??
	if (typeof(Storage) !== "undefined" ) {
		sessionStorage.removeItem("m4movilmenu");                    
	}
	
	//data-theme
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

	//set title
	document.title="Meta4";	
	
	//more theme
	jQuery.mobile.initializePage();
	
	//avoid reloads
	meta4.mobile.isPageInitialized = true; 
	
	//jQuery.mobile.hidePageLoadingMsg();
	jQuery.mobile.loading('hide');

	//label
	var textsoc= jQuery('#lblsociedad').text();
	jQuery('#idsociedad').attr('placeholder', textsoc);
	
	//tables
	jQuery('#t1').attr('border', '0');
	jQuery('#t1').attr('width', '100%');
	jQuery('#t2').attr('width', '100%');
	jQuery('#t3').attr('width', '100%');
	jQuery('#t4').attr('width', '100%');
	jQuery('#t5').attr('width', '100%');
	jQuery('#t6').attr('width', '100%');
	
	var formContent = jQuery('#loginBox');

	var goBackDiv = jQuery("<div></div>").attr({
		'id':'goBackDiv',
	});
	var goBackImg = jQuery("<img></img>").attr({
		'src':'/mobile/icons/goBack.svg',
		'onClick':'goPrevPage()',
	});

	//jQuery(formContent).insertAfter( goBackDiv );
	jQuery( formContent ).after( goBackDiv );

	goBackDiv.append(goBackImg);
	
}
function goPrevPage() {
    window.history.back();
}

jQuery(document).ready(function() {
				initPage();
			});
