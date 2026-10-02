/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: meta4.mobile.who_is_who.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */

 
	//if(deviceFrom='mobile'){
		
document.addEventListener("deviceready", onDeviceReady, false);
var pageLoaded = "";
var addContactVisible = false;

function onDeviceReady(){

	$( "a[data-icon='m4home']" ).click(
		function() {	
			document.location.href = '/mobile/m4home.html';
	});

	document.addEventListener("backbutton", function(e){
		e.preventDefault();
		document.location.href = '/mobile/m4home.html';
	}, false);

	meta4.mobile.initSatusBar('#196988');
}			
		
		function contactCreatedSuccess()
		{
			console.timeEnd('showAddConctactPopup');				

			meta4.mobile.windowLoading.hide();

			meta4.mobile.toast.show(meta4.ui.translate.getTranslate('_contact_add_success'));
		}

		function contactCreatedFaillure()
		{
			console.timeEnd('showAddConctactPopup');				

			meta4.mobile.windowLoading.hide();

			meta4.mobile.toast.show(meta4.ui.translate.getTranslate('_contact_add_failure'));
			meta4.mobile.spinner.hide();
		}
		
		
		$(document).on('pageinit', function() {
		// $("#showAddConctactPopup").css("visibility", "visible");
		// $("#showAddConctactPopup").css("display", "block");
		if(meta4.mobile.deviceFrom() == 'android' || meta4.mobile.deviceFrom() == 'ios')
		{	
			meta4.mobile.loadCordova();

			$("#showAddConctactPopup").unbind();

			$("#showAddConctactPopup").bind( "click", function(event, ui)
			{
				console.time('showAddConctactPopup');

				meta4.mobile.windowLoading.show();

				event.stopPropagation();
				event.preventDefault();

				var contact = navigator.contacts.create();
				var contactNameInfo= new ContactName();
				contactNameInfo.givenName = jQuery("#displayname").val();
				
				var phoneNumbers = [];
				phoneNumbers[0] = new ContactField('mobile', jQuery("#phonenumber").val(), true);

				var contactPhoto = [];
				contactPhoto [0] = new ContactField('url', $('.person-photo').prop('src'), true);

				var contactEmails = [];
				contactEmails [0] = new ContactField('work', jQuery("#email").val(), true);

				var contactOrganizations = [];
				contactOrganizations[0] = new ContactOrganization(true, 'work', jQuery("#organization").val(), '', '');

                contact.name = contactNameInfo;
				contact.photos = contactPhoto;				
				contact.phoneNumbers = phoneNumbers;
				contact.emails = contactEmails;
				contact.organizations = contactOrganizations;							
				contact.save(contactCreatedSuccess, contactCreatedFaillure);		
			
			});
			
			$("#showAddConctactPopup").css("visibility", "visible");
			$("#showAddConctactPopup").css("display", "block");
		}else{
				$('#showAddConctactPopup').closest('.ui-btn').hide();
		}
	});	
		

jQuery.fn.highlight = function(pat) {
	function innerHighlight(node, pat) {
		var skip = 0;
		if (node.nodeType == 3) {
			var arrayElementPatt = pat.split(" ");
			arrayElementPatt.forEach(function(elementPatt) {

				var pos = node.data.toUpperCase().indexOf(elementPatt);
				if (pos >= 0) {
					var spannode = document.createElement('span');
					spannode.className = 'highlight';
					var middlebit = node.splitText(pos);
					var endbit = middlebit.splitText(elementPatt.length);
					var middleclone = middlebit.cloneNode(true);
					spannode.appendChild(middleclone);
					middlebit.parentNode.replaceChild(spannode, middlebit);
					skip = 1;
				}
			});
		} else if (node.nodeType == 1 && node.childNodes) {
			for (var i = 0; i < node.childNodes.length; ++i) {
				i += innerHighlight(node.childNodes[i], pat);
			}
		}
		return skip;
	}

	return this.each(function() {
		if (pat != null)
			innerHighlight(this, pat.toUpperCase());
	});
};

jQuery.fn.removeHighlight = function() {
	return this.find("span.highlight").each(function() {
		this.parentNode.firstChild.nodeName;
		with (this.parentNode) {
			replaceChild(this.firstChild, this);
			normalize();
		}
	}).end();
};

var meta4 = meta4 || {};
meta4.mobile = meta4.mobile || {};

meta4.mobile.whoIsWho = function() {

	//- ARG_TYPE_SEARCH: number that discriminates the way to search the employees
	var searchByName = '1';
	var searchByWU = '2';
	var searchByWL = '3';
	var searchByJob = '4';
	var searchByAll = '5';

	//Default search by all
	var _typeSearch = searchByAll;

	//store page back
	var _pageBack = "";
	var _comeFromFavorites = "";

	//last id employee information: we use it to store the chain of managers showed 
	var _lastIdsEmployee = [];

	//*** Instances of the M4O SRCO_WHO_IS_WHO ***
	var _channel_who_is_who = null; //channel for search
	var _channel_contacts = null; //channel for contacts
	var _channel_page_information = null; //channel for the page information. Two cases:
		//a) it will be a copy of the previous channels, for employees detail coming from search or contact
		//b) it will be new, only if we came from My information or for search or contact, when we display the managers info
	//so, normally we will have more than one instances of the M4O at a time: one for search, one for contacts and one more when we display the managers info
	
	var _from_who_is_who = true; //will be false if we came from contacts

	var employeeDataItems = null;
	var phoneDataItems = null;
	var mailDataItems = null;
	var otherDataItems = null;
	var searchText = null;

	customSearch = function(text, searchString) {

		text = text.toLowerCase();
		searchString = searchString.toLowerCase();

		var arrayText = text.split('$#$');

		var arrayInput = searchString.split(' ');
		var j;
		for ( j = 0; j < arrayInput.length; j++) {
			var i;
			for ( i = 0; i < arrayText.length; i++) {
				if (arrayText[i].indexOf(arrayInput[j]) != -1) {
					return false;
				}
			}
			return true;
		}

	};

	/**
	 *Function to search employees, this function is called from m4home.html
	 */
	function _searchEmployees(text) {

		//load favorites
		prepareSearch(text);
		//jQuery('[data-role=page]').css("visibility", "visible");
	}

	/**
	 * Function to load favorites contact, this contact will be
	 * storage in _channel_contacts
	 */
	function _loadFavoritesContact() {

		/**
		 *Function that is executed when load favorites
		 */
		function successLoadContact(request) {

			meta4.log.showLog();
			fillPageFavorites();
			meta4.mobile.spinner.hide();
			//jQuery('[data-role=page]').css("visibility", "visible");

		}

		function onMetadataSuccess(request) {
		    
		    meta4.log.time('new SRCO_WHO_IS_WHO1');
            var instanceId = 'WHO_IS_WHO_CONTACT'+meta4.ui.language.getCodeLanguage(); //we add the language code to the instance, in order to ensure that we will use other instance in case of change of language without logout
			_channel_contacts = new meta4.M4Object('SRCO_WHO_IS_WHO',instanceId,false); //we reuse the instance of the M4O in the server, if exists
			meta4.log.timeEnd('new SRCO_WHO_IS_WHO1');
			
			var request = new meta4.M4Request(_channel_contacts, 'SRCO_CONTACT_FAVORITES', 'LOAD_INFO_CONTACT', null);
			meta4.mobile.data.execute(request, successLoadContact);
		}

		if (_channel_contacts == null) {
			meta4.mobile.spinner.show();
			//load channel
			var meta4ObjectIds = new Array();
			meta4ObjectIds.push('SRCO_WHO_IS_WHO');

			meta4.mobile.data.loadMetadata(meta4ObjectIds, onMetadataSuccess);

		}
	}

	/**
	 * Function to check if idRh is in listContact
	 * @param: idRH of contact
	 */
	function isContact(id) {
		var node_employees = _channel_contacts.getNode('SRCO_WHO_IS_WHO_EMPLOYEES');
		var i;
		for ( i = 0; i < node_employees.count(); i++) {
			node_employees.moveTo(i);
			if (id == node_employees.getValue('STD_ID_PERSON')) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Function to show menu type search
	 */
	function showTypeSearch() {

		var panel = jQuery('.menuTypeSearch');
		panel.css('display', 'Block');

		panel = jQuery('.fade');
		panel.css('display', 'Block');
	}

	/**
	 * Function to hide menu type search
	 */
	function hideTypeSearch() {

		var panel = jQuery('.menuTypeSearch');
		panel.css('display', 'none');

		var fade = jQuery('.fade');
		fade.css('display', 'none');
	}

	/**
	 * Function to search person in server
	 * @param: text to search
	 */
	function prepareSearch(text) {

		meta4.mobile.spinner.show();

		if (_channel_who_is_who == null) {

			function onMetadataSuccess() {

				//create channel
				meta4.log.time('new SRCO_WHO_IS_WHO2');
                var instanceId = 'SRCO_WHO_IS_WHO'+meta4.ui.language.getCodeLanguage(); //we add the language code to the instance, in order to ensure that we will use other instance in case of change of language without logout				
				_channel_who_is_who = new meta4.M4Object('SRCO_WHO_IS_WHO',instanceId,false);//we reuse the instance of the M4O in the server, if exists
				meta4.log.timeEnd('new SRCO_WHO_IS_WHO2');
				
				search(text);
			}

			//load channel
			var meta4ObjectIds = new Array();
			meta4ObjectIds.push('SRCO_WHO_IS_WHO');

			meta4.mobile.data.loadMetadata(meta4ObjectIds, onMetadataSuccess);

		} else {
			search(text);
		}
	}

	function search(text) {

		/*
		 *Function that is executed when success search
		 */
		function successSearch(request) {

			//dibujamos la lista
			drawListEmployees();
			//jQuery('[data-role=page]').css('visibility', 'visible');
		}

		var args = new Array;
		args.push(text, _typeSearch);
		var request = new meta4.M4Request(_channel_who_is_who, 'SRCO_WHO_IS_WHO_EMPLOYEES', 'SRCO_MTD_LOAD_EMPLOYEES', args);

		if (_channel_contacts == null) {
		    
		    meta4.log.time('new SRCO_WHO_IS_WHO2');
            var instanceId = 'WHO_IS_WHO_CONTACT'+meta4.ui.language.getCodeLanguage(); //we add the language code to the instance, in order to ensure that we will use other instance in case of change of language without logout
			_channel_contacts = new meta4.M4Object('SRCO_WHO_IS_WHO',instanceId,false); //we reuse the instance of the M4O in the server, if exists
			meta4.log.timeEnd('new SRCO_WHO_IS_WHO2');
		}

        request.addReference("WHO_IS_WHO_CONTACT", _channel_contacts);		
		meta4.mobile.data.execute(request, successSearch);
	}

	/**
	 *Function to add contact
	 * @param: idRh of contact
	 * @param: imgStar element of img
	 */
	function addRemoveContact(idHR, imgStar) {

		/**
		 * Function that is executed when add contact sucesfully
		 */
		function successOperationContact(request) {
			_channel_contacts = request.getObject();

		}

		//add contact
		var arg = new Array();
		arg.push(idHR);

		var method = '';
		if (isContact(idHR) == true) {
			method = 'DELETE_CONTACT';
			jQuery(imgStar).attr('src', 'icons/star-disabled.svg');
		} else {
			method = 'INSERT_CONTACT';
			jQuery(imgStar).attr('src', 'icons/star-enabled.svg');
		}

		var request = new meta4.M4Request(_channel_contacts, 'SRCO_CONTACT_FAVORITES', method, arg);
		meta4.mobile.data.execute(request, successOperationContact);

		jQuery("#contentListEmployees").listview("refresh");
		jQuery("#ulContentFavorites").listview("refresh");

	}

	/**
	 * Function to drawn list employees
	 *
	 */
	function drawListEmployees(text) {
		var searchPattern = jQuery("#searchPerson").val().toString().trim().replace(/\s+/gi, " ");
		if (_channel_who_is_who != null && searchPattern.length>0) {
			// container list
			var ul = jQuery("#contentListEmployees").empty();

			var node_emp = _channel_who_is_who.getNode('SRCO_WHO_IS_WHO_EMPLOYEES');
			var indexEmp;
			for ( indexEmp = 0; indexEmp < node_emp.count(); indexEmp++) {

				//nos posicionamos en el registro
				node_emp.moveTo(indexEmp);

				var idHr = node_emp.getValue('STD_ID_PERSON');
				var name = node_emp.getValue('SCO_GB_NAME');
				var wu = node_emp.getValue('STD_N_WORK_UNIT');
				var wLocation = node_emp.getValue('STD_N_WORK_LOCATION');
				var wJob = node_emp.getValue('STD_N_JOB_CODE');
				var wPosition = node_emp.getValue('SCO_NM_POSITION');
				var photoToken = node_emp.getValue('SRCO_PHOTO_TOKEN');
				var isfavorite = node_emp.getValue('IS_FAVORITE');

				var li = jQuery("<li></li>");

				var a = jQuery("<a class='personLi'></a>");

				var div = jQuery("<div></div>");
				div.attr('class', 'divSearchInfo');

				//div.bind("click", {
				a.bind("click", { //the employee photo and the "arrow" must be clickables
					paramIdHr : idHr,
					paramIndex : indexEmp
				}, function(event) {
					_channel_page_information = _channel_who_is_who;
					_from_who_is_who = true;
					//sessionStorage.indexSearch = event.data.paramIndex;
					var employeesNode = _channel_page_information.getNode('SRCO_WHO_IS_WHO_EMPLOYEES');
					if (event.data.paramIndex < employeesNode.count() && event.data.paramIndex >=0){
						employeesNode.moveTo(event.data.paramIndex);
					}
					jQuery('.loginName').empty();
					jQuery('#employeePosition').empty();
					jQuery('#employeeWL').empty();
					_loadInfoEmployeeByDemand(event.data.paramIdHr,true);
					jQuery.mobile.changePage("#pageInformation");

					jQuery('#page_whoIsWho').css('display', 'none');
					jQuery('#pageFavorites').css('display', 'none');
					jQuery('#pageInformation').css('display', 'block');
					jQuery('.m4-mobileHeaderHome').css('display','block');
					jQuery('.personHeader').css('display', 'none');
				});

				//add photo
				var img = jQuery("<img></img>");
				if (photoToken == "unknownPhoto") {
					img.attr('src', 'icons/unknown.png');
				} else {
					img.attr('src', photoToken);
				}

				img.attr('class', 'photoSearch');

				//add star
				var imgStar = jQuery("<img></img>");

				if (isContact(idHr) == true) {
					//if (isfavorite == 1){
					imgStar.attr('src', 'icons/star-enabled.svg');
				} else {
					imgStar.attr('src', 'icons/star-disabled.svg');
				}

				imgStar.attr('class', 'imgStar');

				var idHr = node_emp.getValue('STD_ID_PERSON');
				//add contact
				imgStar.click({
					paramIdHr : idHr
				}, function(event) {
				    event.stopPropagation();
					addRemoveContact(event.data.paramIdHr, event.currentTarget);
				});

				//add info
				var h4 = jQuery("<h4></h4>");
				h4.html(name);

				var h5 = jQuery("<h5></h5>");
				h5.html(wu);

				var h6 = jQuery("<h6></h6>");
				h6.html(wLocation);

				var h7 = jQuery("<h6></h6>");
				if (wJob != null) {
					h7.html(wJob);
				} else if (wPosition != null) {
					h7.html(wPosition);
				}

				div.append(h4, h5, h7);

				a.append(img, div, imgStar);

				li.append(a);
				ul.append(li);
			}
			meta4.mobile.spinner.hide();

			if( node_emp.count()==0){
				var p = jQuery("<div></div>");
				var notFoundMsg =  meta4.ui.translate.getTranslate('_notFoundSearch');
				p.attr('class', 'divSearchNotFound');
				var noFindImg = jQuery('<img id="notFoundImg" src="/mobile/icons/find-empty.svg">');	
				var pText = jQuery("<p></p>");
				pText.attr('class', 'notFoundText');
				pText.html(notFoundMsg);
				p.append(noFindImg, pText);
				ul.append(p);
			}

			jQuery("#contentListEmployees").listview("refresh");

			if (node_emp.getValue('SRCO_LOADED_PLUS') == 1){
				var text = meta4.ui.translate.getTranslate('_redefineSearch');
				var nNumreg = parseInt(node_emp.getValue('SRCO_REGS_LOADED'));
				text = text.replace('XXX',nNumreg);
				jQuery("#redefineSearchText").text(text);
				jQuery("#redefineSearchText").css('display', 'block');
			}else{
				jQuery("#redefineSearchText").css('display', 'none');
			}
		}

	}

	/**
	 * Function that is executed before show page Favorites
	 */
	jQuery(document).on('pagebeforeshow', '#pageFavorites', function(event, ui)
	{
		fillPageFavorites();
	});

	/**
	 *Function to fill page favorites
	 */
	function fillPageFavorites() {

		if (_channel_contacts == null) {
			_loadFavoritesContact();
		} else {
			var node_employees = _channel_contacts.getNode('SRCO_WHO_IS_WHO_EMPLOYEES');

			// container list
			var ul = jQuery("#ulContentFavorites").empty();
			var indexEmp;
			var numFavourites = node_employees.count();
			if (numFavourites > 0){
				for ( indexEmp = 0; indexEmp < node_employees.count(); indexEmp++) {

					node_employees.moveTo(indexEmp);

					var idHr = node_employees.getValue('STD_ID_PERSON');
					var name = node_employees.getValue('SCO_GB_NAME');
					var wu = node_employees.getValue('STD_N_WORK_UNIT');
					var wLocation = node_employees.getValue('STD_N_WORK_LOCATION');
					var wJob = node_employees.getValue('STD_N_JOB_CODE');
					var wPosition = node_employees.getValue('SCO_NM_POSITION');
					var photoToken = node_employees.getValue('SRCO_PHOTO_TOKEN');

					var li = jQuery("<li></li>");

					var charSep = '$#$';

					li.attr('data-filtertext', name + charSep + wu + charSep + wLocation + charSep + wJob + charSep + wPosition + charSep);

					var a = jQuery('<a class="personLi"></a>');

					var div = jQuery("<div></div>");
					div.attr('class', 'divSearchInfo');

					a.bind("click", {
						paramIdHr : idHr,
						paramIndex : indexEmp
					}, function(event) {

						_channel_page_information = _channel_contacts;
						_from_who_is_who = false;
						//sessionStorage.indexSearch = event.data.paramIndex;
						var employeesNode = _channel_page_information.getNode('SRCO_WHO_IS_WHO_EMPLOYEES');
						if (event.data.paramIndex < employeesNode.count() && event.data.paramIndex >=0){
							employeesNode.moveTo(event.data.paramIndex);
						}	
						jQuery('.loginName').empty();
						jQuery('#employeePosition').empty();
						jQuery('#employeeWL').empty();				
						_loadInfoEmployeeByDemand(event.data.paramIdHr,true);
						jQuery.mobile.changePage("#pageInformation");
						jQuery('#page_whoIsWho').css('display', 'none');
						jQuery('#pageFavorites').css('display', 'none');
						jQuery('#pageInformation').css('display', 'block');
						jQuery('.m4-mobileHeaderHome').css('display','block');
						jQuery('.personHeader').css('display', 'none');
					});

					//add photo
					var img = jQuery("<img></img>");
					if (photoToken == "unknownPhoto") {
						img.attr('src', 'icons/unknown.png');
					} else {
						img.attr('src', photoToken);
					}

					img.attr('class', 'photoSearch');

					//add star
					var imgStar = jQuery("<img></img>");
					imgStar.attr('src', 'icons/star-enabled.svg');
					imgStar.attr('class', 'imgStar');

					//add contact
					imgStar.click({
						paramIdHr : idHr
					}, function(event) {
						addRemoveContact(event.data.paramIdHr, event.currentTarget);
						var parent = event.currentTarget.parentElement;
						while (parent.nodeName != 'LI') {
							parent = parent.parentElement;
						}

						jQuery(parent).remove();
						meta4.mobile.toast.show(meta4.ui.translate.getTranslate('_favorite_contact_deleted'));

						var numFavourites2 = node_employees.count() - 1;
						if (numFavourites2 == 0){
							var idList1 = jQuery("#ulContentFavorites");
				            idList1.empty();
				            var emptyNewsDiv = jQuery('<div id="emptyNewsDiv">');   
				            var emptyNewsImg = jQuery('<img id="emptyNewsImg" src="/mobile/icons/empty-favorites.svg">');    
				            var emptyNewsP = jQuery('<p id="emptyNewsP">'); 
				            emptyNewsP.text(meta4.ui.translate.getTranslate('_empty_favorites'));
				            emptyNewsDiv.append(emptyNewsImg, emptyNewsP);
				            idList1.append(emptyNewsDiv);
						}
					});

					//add info
					var h4 = jQuery("<h4></h4>");
					h4.html(name);

					var h5 = jQuery("<h5></h5>");
					h5.html(wu);

					var h6 = jQuery("<h6></h6>");
					h6.html(wLocation);

					var h7 = jQuery("<h6></h6>");
					if (wJob != null) {
						h7.html(wJob);
					} else if (wPosition != null) {
						h7.html(wPosition);
					}

					div.append(h4, h5, h7);

					a.append(img, div, imgStar);

					li.append(a);
					ul.append(li);
				}
			}else{
				var idList1 = jQuery("#ulContentFavorites");
	            idList1.empty();
	            var emptyNewsDiv = jQuery('<div id="emptyNewsDiv">');   
	            var emptyNewsImg = jQuery('<img id="emptyNewsImg" src="/mobile/icons/empty-favorites.svg">');    
	            var emptyNewsP = jQuery('<p id="emptyNewsP">'); 
	            emptyNewsP.text(meta4.ui.translate.getTranslate('_empty_favorites'));
	            emptyNewsDiv.append(emptyNewsImg, emptyNewsP);
	            idList1.append(emptyNewsDiv);
			}
			jQuery("#ulContentFavorites").listview("refresh");
		}
	}


	//jQuery("#pageFavorites").live('pageinit', function()
	jQuery(document).on('pageinit', '#pageFavorites', function()
	{
		function highlightFavorites() {

			var text = jQuery("#contentFavorites").find('input').val().toString().trim().replace(/\s+/gi, " ");
			if (text.length > 0) {
				jQuery("#ulContentFavorites").removeHighlight().highlight(text);
			} else {
				jQuery("#ulContentFavorites").removeHighlight();
			}
		}

		/*
		 *Change function to filter
		 */
		jQuery('#ulContentFavorites').listview('option', 'filterCallback', customSearch);
		//change text placeHolder
		//jQuery('#contentFavorites').find('input').attr('placeHolder', meta4.ui.translate.getTranslate('_favourite_search'));
		//highlight
		//jQuery('#contentFavorites').find('input').keyup(highlightFavorites);

		/**
		 * Event to remove highlight when click in remove search
		 */
		//0251851
		jQuery('#contentFavorites').find('form').find('a').attr('href', '');

		jQuery('#contentFavorites').find('form').find('span').bind("click", function(event) {
			jQuery("#ulContentFavorites").removeHighlight();
		});

	});

	jQuery(document).on('pageinit', '#pageInformation', function()
	{
		
		jQuery("#pageInformation").swipeleft(function() {
			var employeesNode = _channel_page_information.getNode('SRCO_WHO_IS_WHO_EMPLOYEES');
			var index = employeesNode.getCurrent();
			index = index + 1;
			if (index < employeesNode.count()) {
				employeesNode.moveTo(index);
				//sessionStorage.indexSearch = index;
				_loadInfoEmployeeByDemand(employeesNode.getValue('STD_ID_PERSON'));
			}
		});

		jQuery("#pageInformation").swiperight(function() {
			var employeesNode = _channel_page_information.getNode('SRCO_WHO_IS_WHO_EMPLOYEES');
			var index = employeesNode.getCurrent();
			index = index - 1;
			if (index >= 0) {
				employeesNode.moveTo(index);
				//sessionStorage.indexSearch = index;
				_loadInfoEmployeeByDemand(employeesNode.getValue('STD_ID_PERSON'));
			}
		});

		/**
		 * Function to show next task
		 */
		jQuery('#nextPerson').off('click').on('click', function() {
			var employeesNode = _channel_page_information.getNode('SRCO_WHO_IS_WHO_EMPLOYEES');
			var index = employeesNode.getCurrent();
			index = index + 1;
			if (index < employeesNode.count()) {
				employeesNode.moveTo(index);
				//sessionStorage.indexSearch = index;
				_loadInfoEmployeeByDemand(employeesNode.getValue('STD_ID_PERSON'));
			}
		});

		/**
		 * Function to show previous notifications
		 */
		jQuery('#previousPerson').off('click').on('click', function() {
			var employeesNode = _channel_page_information.getNode('SRCO_WHO_IS_WHO_EMPLOYEES');
			var index = employeesNode.getCurrent();
			index = index - 1;
			if (index >= 0) {
				employeesNode.moveTo(index);
				//sessionStorage.indexSearch = index;
				_loadInfoEmployeeByDemand(employeesNode.getValue('STD_ID_PERSON'));
			}
		});

	});

	/**
	 * Create touch events when page is initialice
	 */
	jQuery(document).on('pageinit', '#page_whoIsWho', function()
	{
		/**
		 * Dispara el evento cada vez que se pulsa una tecla
		 */
		var delay;
		jQuery("#searchPerson").keyup(function(event) {	

			var text = jQuery("#searchPerson").val().toString().trim().replace(/\s+/gi, " ");
			clearTimeout(delay);
			if (text.length > 2 && searchText != text) {
				delay = setTimeout(function() {
					searchText = text;
					prepareSearch(text);
				}, 800);
			} else if (text.length == 0) {

				searchText ='';
				jQuery("#contentListEmployees").empty();
			}
		});


		/**
		 * Add event button, to searhc menu
		 */
		jQuery('.buttomTypeSearch').bind("click", function(event) {
			showTypeSearch();
		});

		/**
		 * Add evento when click in list type search
		 */
		jQuery(".listTypeSearch").find('li').on('click', function(event) {

			//ocultamos todas la imagenes de estar seleccionado
			jQuery('.listTypeSearch').find('img').removeClass('imgSelectTypeSearchSelect');

			var target = event.currentTarget;

			//mostramos la imagen correspondiente
			jQuery(target).find('img').addClass('imgSelectTypeSearchSelect');

			//save type search
			_typeSearch = jQuery(target).attr('data-m4value');

			//hide panel
			hideTypeSearch();
		});

		/**
		 * Evento to button show favorites
		 */
		jQuery('.divToolFavories').bind("click", function(event) {
			//REDIRECT PAGE
			hideTypeSearch();
			jQuery.mobile.changePage("#pageFavorites", {changeHash: false});
			meta4.mobile.whoIsWho.comeFromFavorites(true);
		});

		/**
		 * Evento to button show person
		 */
		jQuery('.divToolPerson').bind("click", function(event) {
			drawListEmployees();
			meta4.mobile.whoIsWho.comeFromFavorites(false);
			jQuery.mobile.changePage("#page_whoIsWho", {changeHash: false});
		});

		/**
		 * Event to delete listView of search
		 */
		jQuery('#divSearchPerson').find('span').bind("click", function(event) {
			searchText = '';
			jQuery("#contentListEmployees").empty();
			jQuery("#redefineSearchText").css('display', 'none');
		});

	});

	/*
	 * Function to load advanced info of employees when select employee. Executed from:
	 *  a) click over employee in search or contact
	 *  b) click over next or previous in Personal info
	 *  c) click in back button in Manager info, when it is the last manager
	 * @param: idHR of employee
	 */
	function _loadInfoEmployeeByDemand(idHR,isFirst) {

		meta4.mobile.spinner.show();
		if(isFirst == true){
			_lastIdsEmployee.push(idHR);
		}else{
			_lastIdsEmployee[0] = idHR;
		}
		

		jQuery("#phoneInfo").empty();
		jQuery("#emailInfo").empty();
		jQuery("#otherContactInfo").empty();
		jQuery('#employeeData').empty();
		jQuery('#photoPerson').empty();
		jQuery('#divName').empty();

		jQuery("#displayname").val("");
		jQuery("#usrname").val("");
		jQuery("#nickname").val("");
		jQuery("#phonenumber").val("");
		jQuery("#email").val("");

		
		var title = meta4.ui.translate.getTranslate('_dataPerson');
		jQuery('#mainTitle').text(title);

		//traducciones
		var node_emp = _channel_page_information.getNode('SRCO_WHO_IS_WHO_EMPLOYEES');

		employeeDataItems = _getVisibleItems(node_emp);

		jQuery('#previousPerson').css("display", "block");
		jQuery('#nextPerson').css("display", "block");

		function succesLoadAdvancedInfo(request) {

			var channel = request.getObject();
			showPersonInfo(channel);
			meta4.mobile.spinner.hide();
		}

		
		//if we get the info, we dont need to do the transaction
		//if (node_emp.getValue('SRCO_EMP_MANAGER') != null) {
		if (node_emp.getValue('SRCO_ADVANCED_INF_LOADED') == 1) {

			showPersonInfo(_channel_page_information);
			meta4.mobile.spinner.hide();
		} else {
			//var id_empl = idHR;
			//var args = new Array;
			//args.push(id_empl);
			var request = new meta4.M4Request(_channel_page_information, 'SRCO_WHO_IS_WHO_EMPLOYEES', 'SRCO_MTD_LOAD_ADVANCED_INF', null);
			meta4.mobile.data.execute(request, succesLoadAdvancedInfo);
		}
	}

	/*
	 * Function to load a single employee. Executed from:
	 *  a) My information menu
	 *  b) click over next or previous in Personal info
	 *  c) when navigate in the managers (from all the cases)
	 * @param: idHR of employee. If null, it is the login person
	 */	
	function loadSingleEmployee(idHR) {
	
		meta4.mobile.spinner.show();
		jQuery("#phoneInfo").empty();
		jQuery("#emailInfo").empty();
		jQuery("#otherContactInfo").empty();
		jQuery('#employeeData').empty();
		jQuery('#photoPerson').empty();

		jQuery('.loginName').empty();
		jQuery('#employeePosition').empty();
		jQuery('#employeeWL').empty();

		_lastIdsEmployee.push(idHR);

		function succesLoadPersonInfo(request) {

			//traducciones
			var node_emp = _channel_page_information.getNode('SRCO_WHO_IS_WHO_EMPLOYEES');
			employeeDataItems = _getVisibleItems(node_emp);

			showPersonInfo(_channel_page_information);

			//jQuery('[data-role=page]').css("visibility", "visible");
			meta4.mobile.spinner.hide();
			meta4.log.showLog();
		}

		var args = new Array;

		if (idHR == null) {
			//si la persona es null, se cargan los datos de la persona que se corresponde con el usuario de aplicación
			args.push("");
		} else {
			//si la persona no es null, se cargan los datos de esta persona
			args.push(idHR);
		}
		
		meta4.log.time('new SRCO_WHO_IS_WHO5');
		var instanceId = 'WHO_IS_WHO_PAGE_INFORM'+meta4.ui.language.getCodeLanguage(); //we add the language code to the instance, in order to ensure that we will use other instance in case of change of language without logout
		_channel_page_information = new meta4.M4Object('SRCO_WHO_IS_WHO',instanceId,false); //we reuse the instance of the M4O in the server, if exists
		meta4.log.timeEnd('new SRCO_WHO_IS_WHO5');
		
		var request = new meta4.M4Request(_channel_page_information, 'SRCO_WHO_IS_WHO_EMPLOYEES', 'SRCO_MTD_LOAD_SINGLE_EMPLOYEE', args);
		meta4.mobile.data.execute(request, succesLoadPersonInfo);
	}

	/*
	 * Function to load advanced info of personal information
	 * * @param: idHR of employee
	 */
	function _prepareLoadSingleEmployee(idHR) {

		function onMetadataSuccess(request) {
			//jQuery('[data-role=page]').css("visibility", "hidden");
			
			meta4.log.time('new SRCO_WHO_IS_WHO4');
			var instanceId = 'WHO_IS_WHO_PAGE_INFORM'+meta4.ui.language.getCodeLanguage(); //we add the language code to the instance, in order to ensure that we will use other instance in case of change of language without logout
			_channel_page_information = new meta4.M4Object('SRCO_WHO_IS_WHO',instanceId,false); //we reuse the instance of the M4O in the server, if exists
			meta4.log.timeEnd('new SRCO_WHO_IS_WHO4');

			loadSingleEmployee(idHR);
		}

		if (_channel_page_information == null) {
			//load channel
			var meta4ObjectIds = new Array();
			meta4ObjectIds.push('SRCO_WHO_IS_WHO');

			meta4.mobile.data.loadMetadata(meta4ObjectIds, onMetadataSuccess);
		} else {
			loadSingleEmployee(idHR);
		}

	}

	//mostramos los datos de la persona
	function showPersonInfo(channel) {
		var node_emp = channel.getNode('SRCO_WHO_IS_WHO_EMPLOYEES');

		//quitar cuando se actualize la m4jsapi!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		//node_emp.moveTo(parseInt(sessionStorage.indexSearch));
		var nReg = node_emp.getCurrent();

		if (nReg == 0) {
			jQuery('#previousPerson').addClass('ui-disabled');
		} else {
			jQuery('#previousPerson').removeClass('ui-disabled');
		}

		if (nReg == node_emp.count() - 1) {
			jQuery('#nextPerson').addClass('ui-disabled');
		} else {
			jQuery('#nextPerson').removeClass('ui-disabled');
		}

		//var idPerson = employeesNode.getValue('STD_ID_PERSON');

		showEmployeesData(channel);

		//Información de los telefonos
		var phoneDataNode = channel.getNode('SRCO_WHO_IS_WHO_PHONE');
		showContactData(phoneDataNode, '#phoneInfo', 'STD_N_LINE_TYPE', 'SCO_PRP_PHONE', 'tel:');

		//Correos electronicos
		var emailDataNode = channel.getNode('SRCO_WHO_IS_WHO_EMAIL');
		showContactData(emailDataNode, '#emailInfo', 'STD_N_LOCATION_TYPE', 'STD_EMAIL', 'mailto:');

		//Otras formas de contacto
		var otherContactDataNode = channel.getNode('SRCO_WHO_IS_WHO_OTH_CONTACT_F');
		showContactData(otherContactDataNode, '#otherContactInfo', 'SCO_N_CONTACT_TYPE', 'SCO_CONTACTO', null);
	}

	function showEmployeesData(channel) {

		var itemsConfiguration = {
			"STD_N_WORK_UNIT" : {
				"icon" : "m4-workunit"
			},
			"STD_N_WORK_LOCATION" : {
				"icon" : "m4-location"
			},
			"SCO_N_ROLE" : {
				"icon" : "m4-profile"
			},
			"SRCO_EMP_MANAGER" : {
				"icon" : "m4-person"
			}
		};

		var node_emp = channel.getNode('SRCO_WHO_IS_WHO_EMPLOYEES');
		//node_emp.moveTo(0);

		var divContainer = jQuery('#employeeData');
		var divName = jQuery('#divName').empty();
		jQuery('#employeeManager').empty();

		var emp_id_person = node_emp.getValue('STD_ID_PERSON');
		//if(idHR==emp_id_person){
			//console.log("es el mismo");
		//}
		var emp_id_manager = node_emp.getValue('SRCO_EMP_ID_MANAGER');
		var i;
		for ( i = 0; i < employeeDataItems.length; i++) {

			var itemValue = node_emp.getValue(employeeDataItems[i].id);

			//El GB_NAME
			if (i == 0) {
				var label = jQuery('<h2 class="loginName"></h2>');

				label.append(itemValue);

				divName.append(label);
				//fill add contact information
				jQuery("#displayname").val(itemValue);
			
			} else {

				var label = jQuery('<div></div>');
				label.attr('class', 'employeeInfo');

				if (employeeDataItems[i].id == 'SRCO_EMP_MANAGER' && emp_id_person != emp_id_manager) {
					divContainer = jQuery('#employeeManager');
					var label1 = jQuery('<a></a>');
					var label1Img = jQuery('<img class="managerIcon" src="./icons/manager.svg">');
					label1.attr('class', 'm4HyperlinkClass2');
					label1.attr('href', '');
					label1.append(label1Img);
					label1.append(itemValue);
					divContainer.append(label1);
					//span.append(label1);
				} else if(employeeDataItems[i].id == 'STD_N_WORK_UNIT') {
					divContainer = jQuery('#employeeWL');
					divContainer.append(itemValue);
				}else if (employeeDataItems[i].id == 'SCO_N_ROLE'){
					divContainer = jQuery('#employeePosition');
					divContainer.append(itemValue);
				}
				
			}
		}

		jQuery('.m4HyperlinkClass2').click({
			paramIdHr : emp_id_manager
		}, function(event) {
			_prepareLoadSingleEmployee(event.data.paramIdHr);
			jQuery('#previousPerson').css("display", "none");
			jQuery('#nextPerson').css("display", "none");
			jQuery('#buttonBack').css('display', 'block');
			jQuery('#mainTitle').text(meta4.ui.translate.getTranslate('_InfoResponsible'));
			jQuery.mobile.changePage("#pageInformation");
		});

		var photoContainer = jQuery('#photoPerson');

		var photImg = jQuery('<img></img>');
		photImg.attr('class', 'person-photo');

		var photo = node_emp.getValue('SRCO_PHOTO_TOKEN');

		if (photo == 'unknownPhoto' || photo == null) {
			photo = 'icons/unknown.png';
		}

		photImg.attr('src', photo);

		photoContainer.append(photImg);
	}

	function showContactData(dataNode, container, itemLabel, itemData, protocol) {

		var recordsCount = (dataNode.count());

		var divContainer = jQuery(container);

		if (recordsCount > 0) {
			var iPos;
			var h4 = jQuery('<h4></h4>');
			h4.html(dataNode.getNodeMetadata().getProperty('Name'));
			divContainer.append(h4);
			for ( iPos = recordsCount; iPos > 0; iPos--) {

				dataNode.moveTo(iPos - 1);
				var labelValue = dataNode.getValue(itemLabel) + ': ';
				var dataValue = dataNode.getValue(itemData);
				if(itemData == 'SCO_PRP_PHONE'){
					jQuery("#phonenumber").val(dataValue);
				}else if(itemData == 'STD_EMAIL'){
					jQuery("#email").val(dataValue);							
				}
				var paragraph = jQuery('<p></p>');
				var label = jQuery('<a></a>');
				label.attr('class', 'm4LabelClass1');

				if (protocol != null) {
					label.attr('href', protocol + dataValue);
				}

				var spanValue = jQuery('<span></span>');
				if (iPos == 1) {
					spanValue.attr('class', 'm4DataClass1');
				} else {
					spanValue.attr('class', 'm4DataClass2');
				}

				spanValue.append(dataValue);

				label.append(labelValue, spanValue);

				paragraph.append(label);
				divContainer.append(paragraph);

			}
		}

	}

	//Devuelve un array con los items visibles de un nodo ordenados por posición
	function _getVisibleItems(node) {

		var nItems = node.getNItems();
		var visibleItems = new Array();
		var i;
		for ( i = 0; i < nItems; i++) {

			var itemMD = node.getItemMetadataByIndex(i);

			if (itemMD.getProperty('IsVisible') == '1') {

				var item = new Object();
				item.order = itemMD.getProperty('Order');
				item.id = itemMD.getProperty('Id');

				visibleItems.push(item);
			}

		}

		visibleItems.sort(function(a, b) {
			return a.order - b.order;
		});

		return visibleItems;
	}

	function _back() {
		//Back button in Person and Manager Information
		
		if (_lastIdsEmployee.length == 1) {
			//This is the employee, so we want to return to the search or contacts list
			_lastIdsEmployee.pop();
			if(_comeFromFavorites){
				jQuery.mobile.changePage("#pageFavorites", {changeHash: false});
			}else{
				jQuery.mobile.changePage(_pageBack);
			}

		}else if (_lastIdsEmployee.length == 2) {
			//This is the last manager, so we want to return to the employee or My information
						
			if (_pageBack == "#pageInformation") {
				var title = meta4.ui.translate.getTranslate('_InfoPerson');
				jQuery('#mainTitle').html(title);
				jQuery('#buttonBack').css('display', 'none');
				
                var idCurrent = _lastIdsEmployee.pop();
                var idLast = _lastIdsEmployee.pop();
    
                loadSingleEmployee(idLast);				
				
			}else{
				var title = meta4.ui.translate.getTranslate('_dataPerson');
				jQuery('#mainTitle').html(title);
                var idCurrent = _lastIdsEmployee.pop();
                var idLast = _lastIdsEmployee.pop();
    
                if (_from_who_is_who){
                    _channel_page_information = _channel_who_is_who;
                }else{
                    _channel_page_information = _channel_contacts;          
                }
            
                _loadInfoEmployeeByDemand(idLast);		
    				
			}
	
			
		} else {
			//This is one of the managers and we want to return to other manager
			var idCurrent = _lastIdsEmployee.pop();
			var idLast = _lastIdsEmployee.pop();
			loadSingleEmployee(idLast);

		}

	}

	return {
		init : function() {
			_init_who_is_who();
		},
		loadFavoritesContact : function() {
			_loadFavoritesContact();
		},
		searchEmployees : function(text) {
			_searchEmployees(text);
		},
		loadSingleEmployee : function() {
			_prepareLoadSingleEmployee(null);
		},
		back : function() {
			_back();
		},
		setBack : function(back) {
			_pageBack = back;
		},
		comeFromFavorites : function(comeFrom) {
			_comeFromFavorites = comeFrom;
		}
	};
}();

jQuery("#page_whoIsWho").on("pageshow", onPageShow);

function onPageShow(e, data) {
	var url = jQuery.url(document.location);

	var param1 = url.param("param1");
}

function showSearch() {
	var title = meta4.ui.translate.getTranslate('_task_title_who_is_who');
	jQuery('#mainTitle').text(title);
	pageLoaded = "search";
	jQuery('#pageFavorites').css('display', 'none');
	jQuery('#page_whoIsWho').css('display','block');

	jQuery('#searchTab').addClass("borderBottomActive");
	jQuery('#searchTab').removeClass("borderBottomNonActive");
	jQuery('#favouritesTab').removeClass("borderBottomActive");
	jQuery('#favouritesTab').addClass("borderBottomNonActive");
	jQuery.mobile.changePage("#page_whoIsWho");

	jQuery('#contentListEmployees').listview("refresh");
};

function showFavorites() {
	jQuery.mobile.changePage("#pageFavorites");
	meta4.mobile.whoIsWho.comeFromFavorites(true);
	var title = meta4.ui.translate.getTranslate('_task_title_who_is_who');
	jQuery('#mainTitle').text(title);
	pageLoaded = "favorites";
	jQuery('#page_whoIsWho').css('display', 'none');
	jQuery('#pageFavorites').css('display', 'block');

	jQuery('#searchTab').removeClass("borderBottomActive");
	jQuery('#searchTab').addClass("borderBottomNonActive");
	jQuery('#favouritesTab').addClass("borderBottomActive");
	jQuery('#favouritesTab').removeClass("borderBottomNonActive");
	jQuery("#ulContentFavorites").listview("refresh");
};
function backToPage(){
	if (pageLoaded == "search"){
		jQuery('#pageInformation').css('display', 'none');
		showSearch();
	}else if (pageLoaded == "favorites"){
		jQuery('#pageInformation').css('display', 'none');
		showFavorites();
	}
}

//INIT PAGE
function initPage() {
	//comprobamos en que pagina iniciamos
	var hash = window.location.hash;

	meta4.mobile.whoIsWho.setBack('#page_whoIsWho');
	var search = window.location.search;
	search = search.replace("?paramSearch=", "");

	if (search != "") {
		//init who is who

		search = decodeURI(search);

		jQuery('#searchPerson').val(search);
		meta4.mobile.whoIsWho.searchEmployees(search);

	} else {
		if (hash == "#pageInformation") {
			meta4.mobile.whoIsWho.setBack('#pageInformation');
			
			var title = meta4.ui.translate.getTranslate('_InfoPerson');
		    jQuery('#mainTitle').text(title);
		    jQuery('.spinner-header h2').text(title);
			
			//sessionStorage.indexSearch = 0;
			//hide buttons
			//jQuery('#buttonBack').css('display', 'none');
			//jQuery('#previousPerson').css("display", "none");
			//jQuery('#nextPerson').css("display", "none");
			//hide status bar
			//jQuery('.m4-status-bar').css("display", "none");

			jQuery('.m4-mobileHeaderHome').css('display','block');
			jQuery('#page_whoIsWho').css('display', 'none');
			jQuery('#pageFavorites').css('display', 'none');
			jQuery('#employeeManager').css('display', 'none');
			jQuery('.divContact').css('padding-top', '0px');
			jQuery("#addContact").css("display","none");
			//jQuery('#pageInformation').css('visibility', 'visible');

			meta4.mobile.whoIsWho.loadSingleEmployee();
		}else if (hash == "#home"){
			meta4.mobile.whoIsWho.loadSingleEmployee();
		}else{
			var title = meta4.ui.translate.getTranslate('_task_title_who_is_who');
		    jQuery('#mainTitle').text(title);
		    jQuery('.spinner-header h2').text(title);
		    jQuery('#pageInformation').css('display', 'none');
		    jQuery('#pageFavorites').css('display', 'none');
		    //jQuery('#page_whoIsWho').css('visibility', 'visible');
			//jQuery('#pageFavorites').css('visibility', 'visible');
			jQuery("#addContact").css("display","block");
			pageLoaded = "search";
			meta4.mobile.spinner.hide();
		}
	}

	/*jQuery('[data-role=page]').css('visibility', 'visible');
	jQuery('#page_whoIsWho').css('visibility', 'visible');
	jQuery('#pageFavorites').css('visibility', 'visible');
	jQuery('#pageInformation').css('visibility', 'visible');*/
}

/**
 * Detect when usser press enter to lost focus
 */
jQuery(document).keypress(function(e) {
	if (e.which == 13) {
		jQuery('input').focusout();
	}
});

//When ready translation init page
jQuery(document).bind('meta4Ready', initPage);

