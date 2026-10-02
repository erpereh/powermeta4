/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: meta4.mobile.who_is_who_home.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */

 
meta4.mobile.whoIsWho = function() {

	//last id employee information: we use it to store the chain of managers showed 
	var _lastIdsEmployee = [];
	var _channel_page_information = null; //channel for the page information. Two cases:

	var employeeDataItems = null;


	/*
	 * Function to load a single employee. 
	 * @param: idHR of employee. If null, it is the login person
	 */	
	function loadSingleEmployee(idHR) {

		jQuery("#addContact").css("display","none");
	
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

			jQuery('[data-role=page]').css("visibility", "visible");

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
			jQuery('[data-role=page]').css("visibility", "hidden");
			
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

		var divContainer = jQuery('#employeeData');
		var divName = jQuery('#divName').empty();
		jQuery('#employeeManager').empty();

		var emp_id_person = node_emp.getValue('STD_ID_PERSON');
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
			console.log('foto desconocida --');
		}

		photImg.attr('src',  photo);
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

	return {
		init : function() {
			_init_who_is_who();
		},
		loadSingleEmployee : function() {
			_prepareLoadSingleEmployee(null);
		}
	};
}();




//INIT PAGE
function initPage() {
	meta4.mobile.whoIsWho.loadSingleEmployee();
}


//When ready translation init page
jQuery(document).bind('meta4Ready', initPage);

