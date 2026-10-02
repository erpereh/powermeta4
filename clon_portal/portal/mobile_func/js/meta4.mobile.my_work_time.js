/*
 @(#)FileVersion: 770.000.001
 @(#)FileDescription: js used my_work_time.html
 @(#)CompanyName: Meta4 Spain, S.A.
 @(#)LegalCopyright: (c)2013
 @(#)ProductName: PeopleNet
 @(#)ProductVersion: 7.1SP7
 @(#)InternalName: meta4.mobile.my_work_time.js
 @(#)Date: 01/02/2013
 */

/*global jQuery*/

// Authorizes, with format: ## M4JSAuthorize(M4O,Node,Item)##
// ##M4JSAuthorize(SRCO_WEB_CALENDAR,SRTC_LAYER_DATA,LOAD_LAYER_DATA)##
// ##M4JSAuthorize(SRCO_WEB_CALENDAR,SRTC_LAYER_DATA,DELETE_INC_PENDING)##
// ##M4JSAuthorize(SRCO_WEB_CALENDAR,SRTC_LAYER_DATA,LOAD_INFO_DAY)##
// ##M4JSAuthorize(SRCO_WEB_CALENDAR,SRTC_LAYER_DATA,LOAD_LIMIT_DAY)##
// ##M4JSAuthorize(SRCO_WEB_CALENDAR,SRTC_LAYER_DATA,LOAD_LAYER_LOCKED)##
// ##M4JSAuthorize(SRCO_WEB_CALENDAR,SRTC_LAYER_DATA,INSERT_INC_PENDING )##
// ##M4JSAuthorize(SRCO_WEB_CALENDAR,SRTC_LAYER_DATA,DELETE_INC_APPROVED)##

// Security group, with format: ## M4JSFunctionalGroupId(ID Group, no spaces)##
// ##M4JSFunctionalGroupId(SRTC_MOBILE)##

var meta4 = meta4 || {};
meta4.mobile = meta4.mobile || {};
meta4.mobile.myWorkTime = meta4.mobile.myWorkTime || {};

meta4.mobile.myWorkTime.modeCalendar = {

	//type of mode calendar
	MODE_RESUME : "RESUME",
	MODE_REQUEST : "REQUEST",
	MODE_REQUEST_FLOATING : "REQUEST_FLOATING",

	//TYPE ONE DAY
	MODE_HOURS : "MODE_HOURS",
	MODE_MORNING : "MODE_MORNING",
	MODE_AFTERNOON : "MODE_AFTERNOON",
	MODE_ALL_HOURS : "MODE_ALL_HOURS",

	//TYPE SELECT SOME DAYS
	MODE_START_HALF : "MODE_START_HALF",
	MODE_END_HALF : "MODE_END_HALF"

};

meta4.mobile.myWorkTime.engine = ( function() {"use strict";

		/** START CONSTANT VARIABLES*/

		//types of layer, defined in node SRTC_LAYER_DEFINITION
		var LAYER_WORKING_DAY = "WORKING_DAY";
		var LAYER_NON_WORKING_DAY = "NON_WORKING_DAY";
		var LAYER_FESTIVE_DAY = "FESTIVE_DAY";
		var LAYER_REQUEST_DAY = "REQUEST_DAY";
		var LAYER_CONFIRM_DAY = "CONFIRM_DAY";
		var LAYER_SELECT_DAY = "SELECT_DAY";
		var LAYER_NO_SELECTABLE = "LAYER_NO_SELECTABLE";
		var LAYER_SELECT_HOURS = "LAYER_SELECT_HOURS";
		var LAYER_HOURS = "LAYER_HOURS";

		/** END CONSTANT VARIABLES*/

		//store mode calendar, (resume || request)
		var _modeCalendar = meta4.mobile.myWorkTime.modeCalendar.MODE_RESUME;

		//store tech calendar
		var _calendar = null;

		//store ObjDay where clicked
		var _leftSelect = null;
		//store ObjDay where clicked
		var _rightSelect = null;

		//store if start half
		var _startHalf = false;
		var _endHalf = false;

		//store last date checked in calendar
		var _lastDateLeft = null;
		var _lastDateRight = null;

		//store last half day
		var _lastStarHalf = false;
		var _lastEndHalf = false;

		//store list of confirm request
		var _listOfLocked = [];

		//store floating holiday
		var _floatingHoliday = [];

		//store layer dont selectables
		var _layerNoSelectable = [];
		_layerNoSelectable.push(LAYER_NO_SELECTABLE);

		// limit select right, given by channel
		var _limitDateRight = null;
		// end half day given by channel
		var _limitEndHalf = null;
		// limit select right, given by channel
		var _limitDateLeft = null;
		// end half day given by channel
		var _limitStartHalf = null;
		//store if allow full day
		var _allowFullDay;
		//Alamcena si permite medios días, cuando en la seleccion de un dia ya tiene horas confirmadas
		var _overHalfDay;

		//store if allow half day
		var _allowHalfDay;
		//store if allow hours
		var _allowHours;

		//store number unit selected
		var _numberUnitSelected = 0;

		/**
		 * Object to store floating holiday
		 * @param id, id of floating holiday
		 * @param name, name of floating holiday
		 * @param remaining, remaining of floating holiday
		 */
		var FloatingHoliday = function(id, name, remaining, idUnits,nameUnits,typeIncidence) {
			this.id = id;
			this.name = name;
			this.remaining = remaining;
			this.idUnits = idUnits;
			this.nameUnits = nameUnits;
			this.typeIncidence = typeIncidence;
		};

		//store last info day
		var _lastInfoDay = null;

		/**
		 *Function to get if layer is selectable
		 */
		function isSelectableLayer(idLayer) {
			var res;
			if (_layerNoSelectable.indexOf(idLayer) == -1) {
				res = true;
			} else {
				res = false;
			}
			return res;
		}

		/**
		 * Function to get if fieldset hour is check
		 */
		function isHourChecked() {
			var val = false;
			if (_leftSelect == _rightSelect) {
				if (jQuery('#radioHours').is(':checked')) {
					val = true;
				}
			}
			return val;
		}

		/**
		 * Function to get if fieldset morning is check
		 */
		function isMorningChecked() {
			var val = false;
			if (_leftSelect == _rightSelect) {
				if (jQuery('#radioMorning').is(':checked')) {
					val = true;
				}
			}
			return val;
		}

		/**
		 * Function to get if fieldset radio afternoon is check
		 */
		function isAfternoonChecked() {
			var val = false;
			if (_leftSelect == _rightSelect) {
				if (jQuery('#radioAfternoon').is(':checked')) {
					val = true;
				}
			}
			return val;
		}

		/**
		 * Function to get if fieldset radio afternoon is check
		 */
		function isFullDayChecked() {
			var val = false;
			if (_leftSelect == _rightSelect) {
				if (jQuery('#radioFullDay').is(':checked')) {
					val = true;
				}
			}
			return val;
		}

		/**
		 * Function to get value switch start half day
		 */
		function isStartHalfDay() {
			return jQuery.parseJSON((jQuery('#switchStartHalfDay').val()));
		}

		/**
		 * Function to get value switch end half day
		 */
		function isEndHalfDay() {
			return jQuery.parseJSON((jQuery('#switchEndHalfDay').val()));
		}

		function _showHideButtonCollapse(argBoolean) {
			_calendar.showHideButtonCollapse(argBoolean);
		}

		/**
		 * Function to create Date in format UTC
		 */
		function createDateAsUTC(date) {
			return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
		}

		/**
		 *Function to get if layer is selectable
		 */
		function isSelectable(objDay) {
			var i;
			var res = true;
			for ( i = 0; i < objDay.listPeriodLayers.length; i++) {
				if (isSelectableLayer(objDay.listPeriodLayers[i].idLayer) == false) {
					res = false;
				}
			}
			return res;
		}

		/**
		 *function to get the date according to the configuration
		 */
		function getDateFormat(date) {

			function replaceAll(text, search, newstring) {
				var out = text && text.replace(new RegExp(search, 'g'), newstring);
				return out;
			}

			var nodeConfigCalendar = _calendar.getChannelWebCalendar().getNode('SRTC_CONFIG_CALENDAR');
			var format = nodeConfigCalendar.getValue('FORMAT_DATE');

			var numberDay = ("0" + date.getDate()).slice(-2);
			var numberMonth = ("0" + (date.getMonth() + 1)).slice(-2);

			var numberYear = date.getFullYear();

			format = format && format.replace('dd', numberDay);
			format = format && format.replace('MM', numberMonth);
			format = format && format.replace('yyyy', numberYear);

			format = replaceAll(format, "'", '');

			return format;
		}

		/**
		 *function to get the date according to the configuration
		 */
		function getDateFormatLong(date) {

			function replaceAll(text, search, newstring) {
				var out = text.replace(new RegExp(search, 'g'), newstring);
				return out;
			}

			var nodeConfigCalendar = _calendar.getChannelWebCalendar().getNode('SRTC_CONFIG_CALENDAR');
			var format = nodeConfigCalendar.getValuePlain('FORMAT_DATE_TEXT');

			var numberDay = date.getDate();
			var numberDayWeek = date.getDay();
			var numberMonth = date.getMonth();
			var numberYear = date.getFullYear();

			var textDay = _calendar.getNameDay(numberDayWeek);
			var textMonth = _calendar.getNameMonth(numberMonth);

			format = format.replace('d', numberDay);
			format = format.replace('dd', numberDay);

			format = format.replace('EEEE', textDay);
			format = format.replace('dddd', textDay);
			format = format.replace('ddd', textDay.substring(0, 3));

			format = format.replace('MMMM', textMonth);

			format = format.replace('yyyy', numberYear);

			format = replaceAll(format, "'", '');

			return format;

		}

		/**
		 *Function to format number hours
		 */
		function formatNumberHours(string) {
			return parseFloat(string, 10);
		}

		/**
		 *Function to fill type absence request, create dinamyc fieldset with floating absence
		 */
		function fillAbsenceRequest() {
			var contentFieldSet = jQuery('#fieldsetTypeAbsence');
			var i;
			var html = '<fieldset id="listPlayers" data-role="controlgroup" data-iconpos="right"><legend></legend>';
			for ( i = 0; i < _floatingHoliday.length; i++) {

				var checked = "";
				if (i == 0) {
					checked = 'checked="checked"';
				}
				if (_floatingHoliday[i].typeIncidence == 2) {
					if (_floatingHoliday[i].remaining == 0) {
						//if days = 0, input led
						html += '<input type="radio" name="fieldSetRequestAbsence" disabled=true' + checked + ' id="' + _floatingHoliday[i].id + '" class="custom" /><label for="' + _floatingHoliday[i].id + '">' + _floatingHoliday[i].name + ': ' + '<span class="numberDaysFloating">' + _floatingHoliday[i].remaining + ' ' + _floatingHoliday[i].nameUnits + '</span></label>';
					} else {
						html += '<input type="radio" name="fieldSetRequestAbsence"' + checked + ' id="' + _floatingHoliday[i].id + '" class="custom" /><label for="' + _floatingHoliday[i].id + '">' + _floatingHoliday[i].name + ': ' + '<span class="numberDaysFloating">' + _floatingHoliday[i].remaining + ' ' + _floatingHoliday[i].nameUnits + '</span></label>';
					}
				} else {
					html += '<input type="radio" name="fieldSetRequestAbsence"' + checked + ' id="' + _floatingHoliday[i].id + '" class="custom" /><label for="' + _floatingHoliday[i].id + '">' + _floatingHoliday[i].name + '</label>';
				}

			}
			html += '</fieldset>';
			contentFieldSet.html(html);
			jQuery("input[type='radio']").checkboxradio();

		}

		/**
		 *Function to fill summary
		 */
		function fillSummary() {

			var channel = _calendar.getChannelWebCalendar();
			var nodeEntitlementSummary = channel.getNode('SRCO_ENTITLEMENT_SUMMARY');

			//get labels resume
			var nodeLabel = channel.getNode('SRCO_WEB_CALENDAR_LABEL');
			var txtAvailable = nodeLabel.getItemMetadata('SCO_PRP_LBL_ABS_REM').getProperty('Name');
			var txtaccruedToDate = nodeLabel.getItemMetadata('SCO_PRP_LBL_ABS_ACC_CUR').getProperty('Name');
			var txtExpiry = nodeLabel.getItemMetadata('SCO_PRP_LBL_ABS_WARN_TITLE').getProperty('Name');
			var txtExpiryPast = nodeLabel.getItemMetadata('SCO_PRP_LBL_ABS_WARN_PAST').getProperty('Name');
			txtExpiry = txtExpiry.replace('%1', '');
			txtExpiry = txtExpiry.replace('%2', '');
			txtExpiryPast = txtExpiry.replace('%1', '');
			txtExpiryPast = txtExpiry.replace('%2', '');

			//get labels detail
			var txtTime = nodeLabel.getItemMetadata('SCO_PRP_LBL_ABS_TIME').getProperty('Name');
			txtTime = txtTime.substring(0, txtTime.length - 1);
			var txtScheme = nodeLabel.getItemMetadata('SCO_PRP_LBL_ABS_SCHEME').getProperty('Name');
			txtScheme = txtScheme.substring(0, txtScheme.length - 1);
			var txtSchemeCurrent = nodeLabel.getItemMetadata('SCO_PRP_LBL_ABS_CUR_YEAR').getProperty('Name');
			var txtSchemePrevious = nodeLabel.getItemMetadata('SCO_PRP_LBL_ABS_PRE_YEAR').getProperty('Name');
			var txtUsed = nodeLabel.getItemMetadata('SCO_PRP_LBL_ABS_USED').getProperty('Name');

			function showHideResume(event) {

				var obj = event.data.elements;
				obj.divInfoResume.toggle();
				obj.divInfoDetail.toggle();

				var nameICon = obj.button.attr('src');
				var pos = nameICon.indexOf('/') + 1;
				nameICon = nameICon.substring(pos, nameICon.length - 6);

				if (nameICon != 'contract') {
					obj.button.attr('src', meta4.mobile.getPathIconByTheme('contract'));
				} else {
					obj.button.attr('src', meta4.mobile.getPathIconByTheme('expand'));
				}
			}

			/**
			 *Function to get text if date expiry
			 */
			function getTextExpiry(date) {
				var today = new Date();
				var txt;
				if (today > date) {
					txt = txtExpiryPast;
				} else {
					txt = txtExpiry;
				}
				return txt;
			}


			jQuery('#labTittleSummary').text(meta4.ui.translate.getTranslate('_tittleSummary'));

			var divContent = jQuery('#contentResume');

			var i;
			//get info of summary
			for ( i = 0; i < nodeEntitlementSummary.count(); i++) {
				nodeEntitlementSummary.moveTo(i);

				var typeIncidence = parseInt(nodeEntitlementSummary.getValue('SCO_INCIDENCE_TYPE'), 10);
				var idIncidence = nodeEntitlementSummary.getValue('SCO_ID_INCIDENCE');

				//info resume
				var name = nodeEntitlementSummary.getValue('SCO_NM_INCIDENCE');

				var nameWorking = nodeEntitlementSummary.getValue('SCO_NM_WORKING');
				//name units
				var nameUnits = nodeEntitlementSummary.getValue('SCO_NM_TIME_UNIT');
				var idUnits = nodeEntitlementSummary.getValue('SCO_ID_TIME_UNIT');

				//units remaining
				var remaining = formatNumberHours(nodeEntitlementSummary.getValue('SCO_NUM_REMAINING'));
				//units accrued
				var accrued = formatNumberHours(nodeEntitlementSummary.getValue('SCO_NUM_ACCRUED_TOTAL'));
				//unit expiry
				var expiry = formatNumberHours(nodeEntitlementSummary.getValue('SCO_NUM_EXPIRY_TOTAL'));
				//date expiry
				var dateExpiry = nodeEntitlementSummary.getValue('SCO_DT_EXPIRY_TOTAL');

				//DETAIL

				//current year
				var availableCurrent = formatNumberHours(nodeEntitlementSummary.getValue('SCO_NUM_AVAILABLE'));
				//used
				var usedCurrent = formatNumberHours(nodeEntitlementSummary.getValue('SCO_NUM_USED'));
				//accrued
				var accruedCurrent = formatNumberHours(nodeEntitlementSummary.getValue('SCO_NUM_ACCRUED'));
				//total unit that expiry
				var expiryCurrent = formatNumberHours(nodeEntitlementSummary.getValue('SCO_NUM_EXPIRY'));
				//date expiry
				var dateExpiryCurrent = nodeEntitlementSummary.getValue('SCO_DT_EXPIRY');

				//previous year
				var initialPrevious = formatNumberHours(nodeEntitlementSummary.getValue('SCO_NUM_AVAILABLE_N1'));
				var usedPrevious = formatNumberHours(nodeEntitlementSummary.getValue('SCO_NUM_USED_N1'));
				//total unit that expiry
				var expiryPrevious = formatNumberHours(nodeEntitlementSummary.getValue('SCO_NUM_EXPIRY_N1'));
				//date expiry
				var dateExpiryPrevious = nodeEntitlementSummary.getValue('SCO_DT_EXPIRY_N1');

				//detailed information
				var statDate = nodeEntitlementSummary.getValue('SCO_DT_START');
				if (statDate != null) {
					statDate = statDate.substring(0, 10).replace(/-/g, "/");
				}

				var endDate = nodeEntitlementSummary.getValue('SCO_DT_END');
				if (endDate != null) {
					endDate = endDate.substring(0, 10).replace(/-/g, "/");
				}

				//date expiry
				if (dateExpiryCurrent != null) {
					dateExpiryCurrent = dateExpiryCurrent.substring(0, 10).replace(/-/g, "/");
				}

				//unit to validate
				var validate = formatNumberHours(nodeEntitlementSummary.getValue('SCO_NUM_VALIDATE'));

				//store floting holiday in array
				var floatingHoliday = new FloatingHoliday(idIncidence, name, remaining,idUnits, nameUnits,typeIncidence);
				_floatingHoliday.push(floatingHoliday);

				if (typeIncidence == 2) {
					//only if have type incidence =2

					var divBoth = jQuery('<div></div>');
					divBoth.attr('class', 'divInfoSummary');

					var divIcon = jQuery('<div></div>');
					divIcon.addClass('divIconSummary');
					var divInfo = jQuery('<div></div>');
					divInfo.addClass('divContentSummary');
					var divInfoNumUnits = jQuery('<div></div>');
					divInfoNumUnits.addClass('divResumeSummary');
					var divInfoResume = jQuery('<div></div>');
					divInfoResume.addClass('divResumeSummary2');
					var divInfoDetail = jQuery('<div></div>');
					divInfoDetail.addClass('divDetailSummary');

					divInfo.append(divInfoNumUnits, divInfoResume, divInfoDetail);
					divBoth.append(divIcon, divInfo);
					divContent.append(divBoth);

					//name floating holiday
					var button = jQuery('<img></img>');
					button.attr('src', meta4.mobile.getPathIconByTheme('expand'));

					var paramFunc = {
						'button' : button,
						'divInfoResume' : divInfoResume,
						'divInfoDetail' : divInfoDetail
					};
					button.click({
						elements : paramFunc
					}, showHideResume);
					divIcon.append(button);

					var labelInfNumDay1 = jQuery('<span></span>');
					labelInfNumDay1.addClass('textResume1');
					labelInfNumDay1.append(name + ': ');

					var labelAvailable = jQuery('<span></span>');
					labelAvailable.addClass('textResumeAvailable');
					labelAvailable.html(remaining + ' ' + nameUnits);

					divInfoNumUnits.append(labelInfNumDay1, labelAvailable);

					if (accrued != 0) {
						var labelAccruedDate1 = jQuery('<label></label>');
						labelAccruedDate1.addClass('textResume1');
						labelAccruedDate1.text(txtaccruedToDate);

						var labelAccruedDate2 = jQuery('<label></label>');
						labelAccruedDate2.addClass('textResume2');
						labelAccruedDate2.html(' ' + accrued + ' ' + nameUnits);
						divInfoResume.append(labelAccruedDate1, labelAccruedDate2);
					}

					if (expiry != 0) {

						//add image
						var imgWarning = jQuery('<img></img>');
						imgWarning.attr('class', 'imgWarning');
						imgWarning.attr('src', 'icons/warning.png');

						var labelResumeWar = jQuery('<span></span>');
						labelResumeWar.append(imgWarning);

						labelResumeWar.addClass('textResume2 textWarning');
						dateExpiry = dateExpiry.replace(/-/g, "/");
						if (dateExpiry != null) {
							labelResumeWar.append(' ' + expiry + ' ' + nameUnits + ' ' + getTextExpiry(new Date(dateExpiry)) + ' ' + getDateFormat(new Date(dateExpiry)));
						} else {
							labelResumeWar.append(' ' + expiry + ' ' + nameUnits);
						}

						divInfoResume.append(labelResumeWar);
					}

					//get time
					var labelNameUnit = jQuery('<label></label>');
					labelNameUnit.addClass('textDetail1');
					labelNameUnit.append(txtTime);

					var labelValueUnit = jQuery('<label></label>');
					labelValueUnit.addClass('textDetail2');

					//upper case firs character
					var firstChar = nameWorking.substring(0, 1).toUpperCase();
					var rest = nameWorking.substring(1, nameWorking.length);

					labelValueUnit.append(firstChar + rest);

					//get scheme
					var labelSchemePeriod = jQuery('<label></label>');
					labelSchemePeriod.addClass('textDetail1');
					labelSchemePeriod.append(txtScheme);

					var labelSchemePeriodValue = jQuery('<label></label>');
					labelSchemePeriodValue.addClass('textDetail2');
					labelSchemePeriodValue.append(getDateFormat(new Date(statDate)) + ' - ' + getDateFormat(new Date(endDate)));

					//get scheme current
					var labelCurrent = jQuery('<label></label>');
					labelCurrent.addClass('textDetail1');
					labelCurrent.append(txtSchemeCurrent);

					var labelCurrentValue = jQuery('<label></label>');
					labelCurrentValue.addClass('textDetail2');
					if (accruedCurrent != 0) {
						labelCurrentValue.append(txtAvailable + ' ' + availableCurrent + ', ' + txtaccruedToDate + ' ' + accruedCurrent + ', ' + txtUsed + ' ' + usedCurrent);
					} else {
						labelCurrentValue.append(txtAvailable + ' ' + availableCurrent + ', ' + txtUsed + ' ' + usedCurrent);
					}

					divInfoDetail.append(labelNameUnit, labelValueUnit, labelSchemePeriod, labelSchemePeriodValue, labelCurrent, labelCurrentValue);
					if (expiryCurrent != 0) {
						var labelExpCurrent = jQuery('<label></label>');
						labelExpCurrent.append(expiryCurrent + getTextExpiry(new Date(dateExpiryCurrent)) + ' ' + getDateFormat(new Date(dateExpiryCurrent)));
						labelExpCurrent.addClass('textDetail2');
						divInfoDetail.append(labelExpCurrent);
					}

					var labelPrevious = jQuery('<label></label>');
					labelPrevious.addClass('textDetail1');
					labelPrevious.append(txtSchemePrevious);

					var labelPreviousValue = jQuery('<label></label>');
					labelPreviousValue.addClass('textDetail2');

					labelPreviousValue.append(txtAvailable + ' ' + initialPrevious + ', ' + txtUsed + ' ' + usedPrevious);
					divInfoDetail.append(labelPrevious, labelPreviousValue);

					if (expiryPrevious != 0) {
						dateExpiryPrevious = dateExpiryPrevious.substring(0, 10).replace(/-/g, "/");
						var labelExpiryPrevious = jQuery('<label></label>');
						labelExpiryPrevious.addClass('textDetail2');
						labelExpiryPrevious.append(expiryPrevious + getTextExpiry(new Date(dateExpiryPrevious)) + ' ' + getDateFormat(new Date(dateExpiryPrevious)));
						divInfoDetail.append(labelExpiryPrevious);
					}
				}
			}

			//create menu select floating holiday
			fillAbsenceRequest();

		}

		/*
		 * Function to hide info daily
		 */
		function _clearInfoDay() {
			//hide resume
			jQuery('#contentResume').show();
			//hide request absence button
			jQuery('#divButtonRequestAbsence').show();

			jQuery('#contentDailyDetail').empty();
			jQuery('#buttonClose').hide();
			_lastInfoDay = null;
		}

		/**
		 *Function to fill daily detail
		 * @param objDay, receive object day
		 */
		function fillDailyDetail(objDay) {

			jQuery('#buttonClose').show();
			jQuery('#contentDailyDetail').show();
			

			/*
			 * Function that is executed when click button cancel/request
			 */
			function funcIncidence(event) {
				var param = event.data.paramFuncInc;

				function succesFuncInc() {
					//reset calendar
					_calendar.resetCalendar();
					_clearInfoDay();
				}

				var request;
				var args = [];

				if (param.paramStatus == 0 || param.paramStatus == 1) {
					//if incidence request is remove request
					args.push(param.paramOrdinal);
					request = new meta4.M4Request(_calendar.getChannelWebCalendar(), 'SRTC_LAYER_DATA', 'DELETE_INC_PENDING', args);
				} else {
					//if incidence approved
					args.push(param.paramIdIncidence, param.paramDtStart.substring(0, 10), param.paramDtEnd.substring(0, 10), param.paramPartTime);
					request = new meta4.M4Request(_calendar.getChannelWebCalendar(), 'SRTC_LAYER_DATA', 'DELETE_INC_APPROVED', args);
				}
				meta4.M4Executor.setSecurityToken('##M4JSSecToken##');
				meta4.mobile.data.execute(request, succesFuncInc);
			}

			/**
			 *Function that is exwecuted when load info daily
			 */
			function succesInfoDaily() {

				//clear content
				var divContent = jQuery('#contentDailyDetail');
				divContent.empty();

				var labelTittle = jQuery('<label></label>');
				labelTittle.attr('class', 'titleDaily');
				var textDay = getDateFormatLong(objDay.date);
				labelTittle.html(textDay);

				divContent.append(labelTittle);

				var nodeInfoDay = _calendar.getChannelWebCalendar().getNode('SRCO_INFO_DAY');
				var nodeLabel = _calendar.getChannelWebCalendar().getNode('SRCO_WEB_CALENDAR_LABEL');
				var i;

				//item type node
				//Write type day and hours
				var dayType = parseInt(nodeInfoDay.getValue('DAY_TYPE'), 10);
				var msgTypeDay = "";
				if (dayType == 0) {
					msgTypeDay = meta4.ui.translate.getTranslate('_workingDay');
				} else if (dayType == 1) {
					msgTypeDay = meta4.ui.translate.getTranslate('_nonWorkingDay');
				} else if (dayType == 2) {
					msgTypeDay = meta4.ui.translate.getTranslate('_festiveDay');
				}

				var divDay = jQuery('<div></div>');
				var labelTypeDay = jQuery('<label></label>');
				labelTypeDay.attr('class', 'infoDayTypeDay');
				if (formatNumberHours(nodeInfoDay.getValue('DAY_HOURS')) != 0) {
					labelTypeDay.text(msgTypeDay + ', ' + formatNumberHours(nodeInfoDay.getValue('DAY_HOURS')) + ' ' + meta4.ui.translate.getTranslate('_hours'));
				} else {
					//if number hours == 0 dont show number
					labelTypeDay.text(msgTypeDay);
				}
				divDay.append(labelTypeDay);
				divContent.append(divDay);

				//store if buttons status == 2 is disable
				var disableButtonsConfirm = false;

				for ( i = 0; i < nodeInfoDay.count(); i++) {

					nodeInfoDay.moveTo(i);
					var ordinal = nodeInfoDay.getValue('ORDINAL');

					var idIncidence = nodeInfoDay.getValue('ID_INCIDENCE');
					var dtStart = nodeInfoDay.getValue('DT_START').replace(/-/g, "/");
					var dtEnd = nodeInfoDay.getValue('DT_END').replace(/-/g, "/");
					var partTime = nodeInfoDay.getValue('PART_TIME');

					var startHalf = parseInt(nodeInfoDay.getValue('START_HALF'), 10);
					var endHalf = parseInt(nodeInfoDay.getValue('END_HALF'), 10);
					
					startHalf = (startHalf == 1) ? true : false;
					endHalf = (endHalf == 1) ? true : false;

					var divIncidence = jQuery('<div></div>');
					divIncidence.attr('class', 'divInc');
					var labelNameIncidence = jQuery('<label></label>');
					labelNameIncidence.attr('class', 'infoDayNameInc');
					labelNameIncidence.html(nodeInfoDay.getValue('NAME_INCIDENCE') + ': ');

					var labelHoursIncidence = jQuery('<label></label>');
					labelHoursIncidence.attr('class', 'infoDayHoursInc');
					labelHoursIncidence.html(formatNumberHours(nodeInfoDay.getValue('UNITS')) + ' ' + nodeInfoDay.getValue('NM_TIME_UNIT'));

					var status = parseInt(nodeInfoDay.getValue('STATUS'), 10);
					var enabledButton = parseInt(nodeInfoDay.getValue('ENABLED_BUTTON'), 10);

					var buttonIncidence = jQuery('<button></button>');

					var msgButton = "";
					var msgStatus = "";
					if (status == 0) {
						msgStatus = meta4.ui.translate.getTranslate('_statusPending');
						msgButton = meta4.ui.translate.getTranslate('_deleteRequest');
					} else if (status == 1) {
						msgStatus = meta4.ui.translate.getTranslate('_statusPendingCancellation');
						msgButton = meta4.ui.translate.getTranslate('_deleteRequestCancellation');
					} else if (status == 2) {
						msgStatus = meta4.ui.translate.getTranslate('_statusApproved');
						msgButton = meta4.ui.translate.getTranslate('_calcelRequest');
						if (enabledButton == 0) {
							buttonIncidence.addClass('ui-disabled');
						}
					}

					var divStatus = jQuery('<div></div>');
					divStatus.attr('class', 'divStatus');
					var labelStatus = jQuery('<label></label>');
					labelStatus.text(meta4.ui.translate.getTranslate('_status') + ' ');
					var labelValueStatus = jQuery('<label></label>');
					labelValueStatus.attr('class', 'infoDayStatusInc');
					labelValueStatus.text(msgStatus);

					var divPeriod = jQuery('<div></div>');
					divPeriod.attr('class', 'divStatus');
					var labelPeriod = jQuery('<label></label>');
					labelPeriod.text(meta4.ui.translate.getTranslate('_schemePeriod2'));
					var labelValuePeriod = jQuery('<label></label>');
					labelValuePeriod.attr('class', 'infoDayStatusInc');

					var d1 = getDateFormat(new Date(dtStart));
					var d2 = getDateFormat(new Date(dtEnd));
					var txt = " ";
					if (d1 != d2) {
						if (startHalf && endHalf) {
							txt = txt + nodeLabel.getItemMetadata('SCO_PRP_LBL_ABS_BEGIN_END').getProperty('Name');
						} else if (startHalf) {
							txt = txt + nodeLabel.getItemMetadata('SCO_PRP_LBL_ABS_BEGIN').getProperty('Name');
						} else if (endHalf) {
							txt = txt + nodeLabel.getItemMetadata('SCO_PRP_LBL_ABS_END').getProperty('Name');
						}
						labelValuePeriod.html(d1 + ' - ' + d2 + txt);
					} else {
						if (startHalf) {
							txt = txt + nodeLabel.getItemMetadata('SCO_PRP_LBL_ABS_AFTERNOON').getProperty('Name');
						} else if (endHalf) {
							txt = txt + nodeLabel.getItemMetadata('SCO_PRP_LBL_ABS_MORNING').getProperty('Name');
						} else {
							labelValuePeriod.text(d1);
						}
						labelValuePeriod.html(d1 + txt);
					}

					var divButton = jQuery('<div></div>');
					divButton.attr('class', 'divButtonInc');
					//buttonIncidence.button();
					var paramFunc = {
						'paramStatus' : status,
						'paramOrdinal' : ordinal,
						'paramIdIncidence' : idIncidence,
						'paramDtStart' : dtStart,
						'paramDtEnd' : dtEnd,
						'paramPartTime' : partTime
					};

					buttonIncidence.click({
						'paramFuncInc' : paramFunc
					}, funcIncidence);
					buttonIncidence.text(msgButton);

					divIncidence.append(labelNameIncidence, labelHoursIncidence);
					divStatus.append(labelStatus, labelValueStatus);
					divPeriod.append(labelPeriod, labelValuePeriod);

					divButton.append(buttonIncidence);
					divContent.append(divIncidence, divStatus, divPeriod, divButton);

				}
                var br = jQuery('</br>');
                var br2 = jQuery('</br>');
                divContent.append(br,br2);
			}

			if (_lastInfoDay != objDay) {

				_lastInfoDay = objDay;

				//hide resume
				jQuery('#contentResume').hide();
				//hide request absence button
				////jQuery('#divButtonRequestAbsence').hide();

				var args = [];
				args.push(objDay.date.toISOString().substring(0, 10));
				var executor = new meta4.M4Executor();
				var request = new meta4.M4Request(_calendar.getChannelWebCalendar(), 'SRTC_LAYER_DATA', 'LOAD_INFO_DAY', args);
				meta4.M4Executor.setSecurityToken('##M4JSSecToken##');
				meta4.mobile.data.execute(request, succesInfoDaily);

			} else {
				_clearInfoDay();
			}

		}

		/**
		 *Function to control panels
		 */
		function controlPanels() {

			if (_leftSelect == null && _rightSelect == null) {
				jQuery('#divControlOneDay').hide();
				jQuery('#divControlSomeDays').hide();
				//show help
				//jQuery('#divHelp').show();
			} else {
				//hide help
				//jQuery('#divHelp').hide();
				if (_leftSelect.date == _rightSelect.date) {
					jQuery('#divControlOneDay').show();
					jQuery('#divControlSomeDays').hide();

					//reset
					jQuery("#radioMorning").checkboxradio('enable');
					jQuery("#radioAfternoon").checkboxradio('enable');
					jQuery("#radioHours").checkboxradio('enable');

					if (dayAllowFullDay(_leftSelect, _rightSelect) == false) {
						jQuery("#radioFullDay").checkboxradio('disable');
					} else {
						jQuery("#radioFullDay").checkboxradio('enable');
					}

					if (dayAllowHours(_leftSelect, _rightSelect) == false) {
						jQuery("#radioHours").checkboxradio('disable');
					}

					if (dayAllowMorning(_leftSelect, _rightSelect) == false) {
						jQuery("#radioMorning").checkboxradio('disable');
					}

					if (dayAllowAfternoon(_leftSelect, _rightSelect) == false) {
						jQuery("#radioAfternoon").checkboxradio('disable');
					}

				} else {
					jQuery('#divControlOneDay').hide();
					jQuery('#divControlSomeDays').show();

					if (dayAllowMorning(_leftSelect, _rightSelect) == false) {
						//if start haff day
						jQuery('#switchStartHalfDay').slider('disable');
					} else {
						jQuery('#switchStartHalfDay').slider('enable');
					}
					if (dayAllowAfternoon(_leftSelect, _rightSelect) == false) {
						//if end haff day
						jQuery('#switchEndHalfDay').slider('disable');
					} else {
						jQuery('#switchEndHalfDay').slider('enable');
					}
				}
			}
		}

		/**
		 *Function to check if day if selectable all day
		 */
		function dayAllowFullDay(leftDay, rightDay) {
			var bool;
			if (_allowFullDay == true) {
				bool = true;
			} else {
				bool = false;
			}
			return bool;
		}

		/**
		 *Function to check if day if selectable moorning
		 */
		function dayAllowMorning(leftDay, rightDay) {
			var bool;

			//comprobamos si la incidencia lo permite
			if (_allowHalfDay == true) {
				//si la incidencia lo permite comprobamos que los limites nos dejen
				//comprobamos por los limites

				if (leftDay == rightDay) {
					//indicencia de un solo dia
					if (leftDay.date.getTime() == _limitDateLeft.getTime() && _limitStartHalf) {
						bool = false;
					} else {
						//por ultimo comprobamos si las horas solicitadas para ese dia no son superior al medio dia
						if (_overHalfDay == true) {
							bool = false;
						} else {
							bool = true;
						}					
					}
				} else {
					if (leftDay.date.getTime() == _limitDateLeft.getTime() && _limitStartHalf) {
						bool = false;						
					} else {
						//por ultimo comprobamos si las horas solicitadas para ese dia no son superior al medio dia
						if (_overHalfDay == true) {
							bool = false;
						} else {
							bool = true;
						}	
					}
				}
			} else {
				bool = false;
			}
			return bool;
		}
		
		/**
		 *Function to check if day must be moorning
		 */
		function dayMustBeMorning(leftDay, rightDay) {
			var bool;

			//comprobamos si la incidencia lo permite
			if (_allowHalfDay == true) {
				//si la incidencia lo permite comprobamos que los limites nos dejen
				//comprobamos por los limites				
				if (rightDay.date.getTime() == _limitDateRight.getTime() && _limitEndHalf) {
					bool = true;
				}else{
					bool = false;
				}				
			} else {
				bool = false;
			}
			return bool;			
		}
		
	
		/**
		 *Function to check if day if selectable afternoon
		 */
		function dayAllowAfternoon(leftDay, rightDay) {
			var bool;

			//comprobamos si la incidencia lo permite
			if (_allowHalfDay == true) {
				//si la incidencia lo permite comprobamos que los limites nos dejen
				//comprobamos por los limites

				if (leftDay == rightDay) {
					//indicencia de un solo dia
					if (rightDay.date.getTime() == _limitDateRight.getTime() && _limitEndHalf) {
						//por ultimo comprobamos si las horas solicitadas para ese dia no son superior al medio dia
						bool = false;
					} else {
						if (_overHalfDay == true) {
							bool = false;
						} else {
							bool = true;
						}					
					}
				} else {
					if (rightDay.date.getTime() == _limitDateRight.getTime() && _limitEndHalf) {						
						bool = false;
					} else {
						//por ultimo comprobamos si las horas solicitadas para ese dia no son superior al medio dia
						if (_overHalfDay == true) {
							bool = false;
						} else {
							bool = true;
						}	
					}
				}
			} else {
				bool = false;
			}
			return bool;
		}
		
		/**
		 *Function to check if day must be moorning
		 */
		function dayMustBeAfternoon(leftDay, rightDay) {
			var bool;

			//comprobamos si la incidencia lo permite
			if (_allowHalfDay == true) {
				//si la incidencia lo permite comprobamos que los limites nos dejen
				//comprobamos por los limites				
				if (leftDay.date.getTime() == _limitDateLeft.getTime() && _limitStartHalf) {
					bool = true;
				}else{
					bool = false;
				}				
			} else {
				bool = false;
			}
			return bool;			
		}


		/**
		 *Function to check if day if selectable hours
		 */
		function dayAllowHours(leftDay, rightDay) {
			var bool;
			if (_allowHours == true) {
				bool = true;
			} else {
				bool = false;
			}
			return bool;
		}

		/*
		 * Function to change select radio input when can not select all day
		 * @param mode, store if change is to start half or end half
		 */
		function autoControlButton() {

			if (_leftSelect == _rightSelect) {

				if (dayAllowFullDay(_leftSelect,_rightSelect) == false  && isFullDayChecked()) {
					//si el dia no permite el dia completo seleccionamos medio dia o horas
					if (dayAllowMorning(_leftSelect, _rightSelect)) {											
						//reset
						jQuery('[name="radio-choice-1"]').attr("checked", false).checkboxradio("refresh");
						//select morning
						jQuery('#radioMorning').attr("checked", true).checkboxradio("refresh");

					} else if (dayAllowAfternoon(_leftSelect, _rightSelect)) {
						//reset
						jQuery('[name="radio-choice-1"]').attr("checked", false).checkboxradio("refresh");
						//select afternoon
						jQuery('#radioAfternoon').attr("checked", true).checkboxradio("refresh");

					} else if (dayAllowHours(_leftSelect, _rightSelect)) {
						//reset
						jQuery('[name="radio-choice-1"]').attr("checked", false).checkboxradio("refresh");
						//select hours
						jQuery('#radioHours').attr("checked", true).checkboxradio("refresh");
						jQuery('#divNumberHours').show();
					}
				}
			} else {
				//if select period
				if (dayAllowMorning(_leftSelect, _rightSelect) == false && dayMustBeAfternoon(_leftSelect, _rightSelect)==true) {
					//check if start half day
					jQuery('#switchStartHalfDay').val('true').slider("refresh");
				}
				if (dayAllowAfternoon(_leftSelect, _rightSelect) == false && dayMustBeMorning(_leftSelect, _rightSelect)==true) {
					//check if end half day
					jQuery('#switchEndHalfDay').val('true').slider("refresh");
				}
			}

		}

		/**
		 *Function to validate dates selected with limits y auto control buttons
		 */
		function validateDates(startDate, endDate) {
			if (_limitDateLeft != null && _limitDateRight != null) {
				if (startDate.getTime() < _limitDateLeft.getTime()) {
					//change left unitl left limit
					_leftSelect = _calendar.getObjDay(_limitDateLeft);
				}

				if (endDate.getTime() > _limitDateRight.getTime()) {
					//change right unitl right limit
					_rightSelect = _calendar.getObjDay(_limitDateRight);
				}
			}
		}

		/**
		 * Function to set selects days
		 *
		 * @param objStart, object to start select calendar
		 * @param objEnd, object to end select calendar
		 */
		function setSelectDays(objStart, objEnd) {

			var startHalf = false;
			var endHalf = false;

			if (objStart != objEnd) {
				//select a period
				startHalf = isStartHalfDay();
				endHalf = isEndHalfDay();
			} else {
				//select only one day
				if (isMorningChecked() == true) {
					//selct only one day
					endHalf = true;
				} else if (isAfternoonChecked() == true) {
					startHalf = true;
				}
			}

			//remove layer last select
			if (_lastDateLeft != null && _lastDateRight != null) {
				_calendar.removeLayer(_lastDateLeft.date, _lastDateRight.date, LAYER_SELECT_DAY, _lastStarHalf, _lastEndHalf);
				_calendar.removeLayer(_lastDateLeft.date, _lastDateRight.date, LAYER_SELECT_HOURS, _lastStarHalf, _lastEndHalf);
			}

			//add layer select
			if (objStart != null && objEnd != null) {
				if (isHourChecked() == true) {
					_calendar.paintLayer(objStart.date, objEnd.date, LAYER_SELECT_HOURS, startHalf, endHalf);
				} else {
					_calendar.paintLayer(objStart.date, objEnd.date, LAYER_SELECT_DAY, startHalf, endHalf);
				}
			}

			//store last select
			_lastDateLeft = objStart;
			_lastDateRight = objEnd;

			_lastStarHalf = startHalf;
			_lastEndHalf = endHalf;
		}

		/*
		 * Function to check if is possible select day of next or previous month
		 */
		function checkSelectableNextPreviousMonth() {
			if (_limitStartHalf != null && _limitEndHalf != null) {

				var fisrtDay = _calendar.getDateFirstDay();
				var lastDay = _calendar.getDateLastDay();

				if (fisrtDay.getTime() < _limitDateLeft.getTime()) {
					_calendar.setNavigateBackMonth(false);
				} else {
					_calendar.setNavigateBackMonth(true);
				}

				if (lastDay.getTime() < _limitDateRight.getTime()) {
					_calendar.setNavigateNextMonth(true);
				} else {
					_calendar.setNavigateNextMonth(false);
				}

				//check if we move month
				var currentMonth = _calendar.getCurrentMonth();

				if (_rightSelect.date.getFullYear() >= currentMonth.year) {
					if (_rightSelect.date.getMonth() > currentMonth.month) {
						_calendar.setNavigateNextMonth(true);
					}
				}

				if (_leftSelect.date.getFullYear() >= currentMonth.year) {
					if (_leftSelect.date.getMonth() < currentMonth.month) {
						_calendar.setNavigateBackMonth(true);
					}
				}
			} else {
				_calendar.setNavigateBackMonth(true);
				_calendar.setNavigateNextMonth(true);
			}
		}

		/**
		 * Function to initialice controls, reset control to initial values
		 */
		function initializeControls() {
			//change switch to false
			jQuery('#switchStartHalfDay').val('false').slider("refresh");
			jQuery('#switchEndHalfDay').val('false').slider("refresh");
			//select all hours
			jQuery('[name="radio-choice-1"]').attr("checked", false).checkboxradio("refresh");
			jQuery('#radioFullDay').attr("checked", true).checkboxradio("refresh");
			//hide input number hours
			jQuery('#divNumberHours').hide();
		}

		/**
		 *Functio to remove last layer painted
		 */
		function removeSelectedLayer() {
			if (_leftSelect != null && _rightSelect != null) {
				_calendar.removeLayer(_leftSelect.date, _rightSelect.date, LAYER_SELECT_DAY, _lastStarHalf, _lastEndHalf);
				_calendar.removeLayer(_leftSelect.date, _rightSelect.date, LAYER_SELECT_HOURS, _lastStarHalf, _lastEndHalf);
			}

			jQuery('#divButtonSendRequestAbsence').hide();
			//reset variable that store selected days
			_leftSelect = null;
			_rightSelect = null;
			_lastStarHalf = null;
			_lastEndHalf = null;
			_limitDateLeft = null;
			_limitDateRight = null;
			_limitStartHalf = null;
			_limitEndHalf = null;
			_overHalfDay = false;
			_allowFullDay = true;
			_numberUnitSelected = 0;
			checkSelectableNextPreviousMonth();

			//set default mode
			var _modeCalendar = meta4.mobile.myWorkTime.modeCalendar.MODE_RESUME;

			//hide panels
			jQuery('#divControlOneDay').hide();
			jQuery('#divControlSomeDays').hide();
			initializeControls();

		}

		/**
		 * Function to write resume request
		 */
		function paintResumeRequest() {

			//write type absence
			var id = jQuery("input[name=fieldSetRequestAbsence]:checked").attr('id');
			var i;
			var nodeLabel = _calendar.getChannelWebCalendar().getNode('SRCO_WEB_CALENDAR_LABEL');
			var txt = " ";

			var numberUnit = _numberUnitSelected;

			if (isHourChecked() == true) {
				//if mode is hour get number hour
				numberUnit = jQuery('#inputNumHours').val();
			}

			for ( i = 0; i < _floatingHoliday.length; i++) {
				if (_floatingHoliday[i].id == id) {

					var remaining = _floatingHoliday[i].remaining;
					var nameUnits = _floatingHoliday[i].nameUnits;
					var idUnits = _floatingHoliday[i].idUnits;

					if (idUnits == null) {
						if (_leftSelect == _rightSelect) {
							nameUnits = meta4.ui.translate.getTranslate('_hours');
						} else {
							nameUnits = meta4.ui.translate.getTranslate('_nameDay');
						}
					}

					if (remaining != 0) {
						jQuery('#numberDaysRequest').html((numberUnit + ' ' + meta4.ui.translate.getTranslate('_requestResumeOut1') + meta4.ui.translate.getTranslate('_requestResumeOut2') + remaining + ' ' + nameUnits) + ' ' + meta4.ui.translate.getTranslate('_txtAvailable'));
					} else {
						//second text
						jQuery('#numberDaysRequest').html((numberUnit + ' ' + nameUnits + ' ' + meta4.ui.translate.getTranslate('_requestResumeOut1')));
					}
					jQuery('#typeRequest').html(_floatingHoliday[i].name);
				}
			}
			if (_leftSelect != null && _rightSelect != null) {
				if (_leftSelect == _rightSelect) {
					if (isAfternoonChecked()) {
						txt = txt + nodeLabel.getItemMetadata('SCO_PRP_LBL_ABS_AFTERNOON').getProperty('Name');
					} else if (isMorningChecked()) {
						txt = txt + nodeLabel.getItemMetadata('SCO_PRP_LBL_ABS_MORNING').getProperty('Name');
					}
					jQuery('#preiodRequest').text(getDateFormat(_leftSelect.date) + txt);
				} else {

					if (isStartHalfDay() && isEndHalfDay()) {
						txt = txt + nodeLabel.getItemMetadata('SCO_PRP_LBL_ABS_BEGIN_END').getProperty('Name');
					} else if (isStartHalfDay()) {
						txt = txt + nodeLabel.getItemMetadata('SCO_PRP_LBL_ABS_BEGIN').getProperty('Name');
					} else if (isEndHalfDay()) {
						txt = txt + nodeLabel.getItemMetadata('SCO_PRP_LBL_ABS_END').getProperty('Name');
					}
					jQuery('#preiodRequest').text(getDateFormat(_leftSelect.date) + ' - ' + getDateFormat(_rightSelect.date) + txt);
				}
			} else {
				jQuery('#preiodRequest').text('');
			}

		}

		/**
		 *Function to get argument to funcion LOAD_LIMIT_DAY
		 */
		function getArgsLoadLimitDay() {

			var args = [];

			var initHalf;
			var endHalf;
			if (_leftSelect == _rightSelect) {
				//select only one day

				if (isFullDayChecked() == true) {
					initHalf = '0';
					endHalf = '0';
				} else if (isMorningChecked() == true) {
					initHalf = '1';
					endHalf = '0';
				} else if (isAfternoonChecked() == true) {
					initHalf = '0';
					endHalf = '1';
				} else if (isHourChecked() == true) {
					initHalf = '0';
					endHalf = '0';
				}
			} else {
				//select a period
				var init = isStartHalfDay();
				var end = isEndHalfDay();

				initHalf = (init == false) ? '0' : '1';
				endHalf = (end == false) ? '0' : '1';
			}

			args.push(_leftSelect.date.toISOString().substring(0, 10), _rightSelect.date.toISOString().substring(0, 10));
			args.push(initHalf, endHalf);

			return args;
		}

		/**
		 * Function to update limits
		 */
		function succesGetLimits() {
			var nodeLayerData = _calendar.getChannelWebCalendar().getNode('SRTC_LAYER_DATA');

			//update limit hours
			var hours = formatNumberHours(nodeLayerData.getValue('LIMIT_HOURS_DAY'));
			if (hours == 0) {
				//set max hours
				jQuery('#inputNumHours').attr('max', 0);
				jQuery('#inputNumHours').attr('value', 0);
			} else {
				//set max hours
				jQuery('#inputNumHours').attr('max', hours);
			}

			//get number units
			_numberUnitSelected = formatNumberHours(nodeLayerData.getValue('LIMIT_SELECTED_UNITS'));

			//store limits
			_limitDateLeft = createDateAsUTC(new Date(nodeLayerData.getValue('LIMIT_DATE_LEFT').replace(/-/g, "/")));
			_limitDateRight = createDateAsUTC(new Date(nodeLayerData.getValue('LIMIT_DATE_RIGHT').replace(/-/g, "/")));

			var startHalf = parseInt(nodeLayerData.getValue('LIMIT_START_HALF'), 10);
			var endHalf = parseInt(nodeLayerData.getValue('LIMIT_END_HALF'), 10);

			_limitStartHalf = (startHalf == 1) ? true : false;
			_limitEndHalf = (endHalf == 1) ? true : false;

			//solo se usan cuando la peticion es de un dia
			//almacena si se ha superado la mitad del dia en otras peticiones
			var overHalfDay = parseInt(nodeLayerData.getValue('OVER_HALF_DAY'),10);
			//almacena si se permite pedir el dia completo
			var allowFullDay = parseInt(nodeLayerData.getValue('ALLOW_FULL_DAY'),10);

			_overHalfDay = (overHalfDay == 1) ? true : false;
			_allowFullDay = (allowFullDay == 1) ? true : false;

			autoControlButton();

			//check select next/back month
			checkSelectableNextPreviousMonth();
			//paint period selected
			setSelectDays(_leftSelect, _rightSelect);

			//control panel
			controlPanels();

			paintResumeRequest();

		}

		/**
		 *Function to update the limits that control until the day you can select
		 */
		function updateLimits() {

			//validate dates to avoid conflicts with confirm request
			validateDates(_leftSelect.date, _rightSelect.date);
			autoControlButton();
			//check select next/back month
			checkSelectableNextPreviousMonth();
			//paint period selected
			setSelectDays(_leftSelect, _rightSelect);

			//control panel
			controlPanels();

			//get limits
			var args = getArgsLoadLimitDay();

			var executor = new meta4.M4Executor();
			var request = new meta4.M4Request(_calendar.getChannelWebCalendar(), 'SRTC_LAYER_DATA', 'LOAD_LIMIT_DAY', args);
			meta4.M4Executor.setSecurityToken('##M4JSSecToken##');
			meta4.mobile.data.execute(request, succesGetLimits);
		}

		/**
		 * Function that control calendar when is in mode request
		 * @param objDay, object day of callback
		 */
		function controlModeRequest(objDay) {

			/**
			 * Function to update limits when only selected one day
			 */
			function succesGetLimitsFirstValidation() {
				succesGetLimits();
				//validate dates to avoid conflicts with confirm request
				validateDates(_leftSelect.date, _rightSelect.date);
				autoControlButton();

				//check select next/back month
				checkSelectableNextPreviousMonth();
				//paint period selected
				setSelectDays(_leftSelect, _rightSelect);

				//control panel
				controlPanels();
			}

			//check whether it is located more to the left
			if (_leftSelect == null && _rightSelect == null) {
				//if havent previous select
				if (isSelectable(objDay) == true) {

					//select only one day
					_leftSelect = objDay;
					_rightSelect = objDay;

					//show button
					jQuery('#divButtonSendRequestAbsence').show();

					//first validation
					//get limits
					var args = getArgsLoadLimitDay();

					var executor = new meta4.M4Executor();
					var request = new meta4.M4Request(_calendar.getChannelWebCalendar(), 'SRTC_LAYER_DATA', 'LOAD_LIMIT_DAY', args);
					meta4.M4Executor.setSecurityToken('##M4JSSecToken##');
					meta4.mobile.data.execute(request, succesGetLimitsFirstValidation);
				}
			} else {
				if (_leftSelect.date.getTime() == _rightSelect.date.getTime() && _leftSelect.date.getTime() == objDay.date.getTime()) {
					//if have period of only day and select this day
					//DELETE SELECT
					removeSelectedLayer();

					//control panel
					controlPanels();
					//paint resume request
					paintResumeRequest();

				} else {
					//if click above day select, select only one day
					if (objDay.date.getTime() == _leftSelect.date.getTime() || objDay.date.getTime() == _rightSelect.date.getTime()) {
						if (objDay.date.getTime() == _leftSelect.date.getTime()) {
							_leftSelect = _rightSelect;
						} else {
							_rightSelect = _leftSelect;
						}
					} else {
						//check the date on the right is larger than the left,otherwise the exchange
						if (objDay.date.getTime() < _leftSelect.date.getTime()) {
							_leftSelect = objDay;
						} else if (objDay.date.getTime() > _leftSelect.date.getTime() && objDay.date.getTime() < _rightSelect.date.getTime()) {
							//if day is between left and right
							var l = objDay.date - _leftSelect.date;
							var r = _rightSelect.date - objDay.date;
							if (l > r) {
								_rightSelect = objDay;
							} else {
								_leftSelect = objDay;
							}
						} else {
							_rightSelect = objDay;
						}
					}
					//update and control
					updateLimits();
				}
			}
		}

		/**
		 * Function that is executed when click day
		 *
		 * @param objDay, object that store info above day and TD element
		 */
		function onClickDay(objDay) {
			if (_modeCalendar == meta4.mobile.myWorkTime.modeCalendar.MODE_RESUME) {
				fillDailyDetail(objDay);
			} else if (_modeCalendar == meta4.mobile.myWorkTime.modeCalendar.MODE_REQUEST) {
				controlModeRequest(objDay);
			}
		}

		/**
		 *Function to paint layer locked
		 */
		function removeLayerLocked() {
			var i;
			for ( i = 0; i < _listOfLocked.length; i++) {
				//remove layer no selectable
				_calendar.removeLayer(_listOfLocked[i].startDate, _listOfLocked[i].endDate, LAYER_NO_SELECTABLE, _listOfLocked[i].startHalf, _listOfLocked[i].endHalf);
			}
		}

		/**
		 * Function to show/hide buttons control half day
		 *
		 * @param mode, mode of calendar (resume || request)
		 */
		function _setModeCalendar(mode) {

			//set mode calendar
			_modeCalendar = mode;

			if (_modeCalendar == meta4.mobile.myWorkTime.modeCalendar.MODE_REQUEST) {
				var nodeEntitlementSumamry = _calendar.getChannelWebCalendar().getNode('SRCO_ENTITLEMENT_SUMMARY');

				//store type incidence
				var typeIncidence;

				var i;
				var idIncidence = jQuery("input[name=fieldSetRequestAbsence]:checked").attr('id');

				//we move to the corresponding incidence
				for ( i = 0; i < nodeEntitlementSumamry.count(); i++) {
					nodeEntitlementSumamry.moveTo(i);
					if (nodeEntitlementSumamry.getValue('SCO_ID_INCIDENCE') == idIncidence) {
						_allowHalfDay = parseInt(nodeEntitlementSumamry.getValue('SCO_CK_HALFDAYS'), 10);
						typeIncidence = nodeEntitlementSumamry.getValue('SCO_ID_TIME_UNIT');
					}
				}

				_allowHalfDay = (_allowHalfDay == 1) ? true : false;

				//reset
				jQuery('#labelRadioHours').show();
				jQuery('#radioHours').show();

				jQuery('#labelRadioFullDay').show();
				jQuery('#radioFullDay').show();

				jQuery('#labelRadioAfternoon').show();
				jQuery('#radioAfternoon').show();

				jQuery('#labelRadioMorning').show();
				jQuery('#radioMorning').show();

				jQuery('#divSwitchStart').show();
				jQuery('#divSwitchEnd').show();
				
				jQuery('#switchStartHalfDay').val('false').slider("refresh");
				jQuery('#switchEndHalfDay').val('false').slider("refresh");
				
				jQuery('[name="radio-choice-1"]').attr("checked", false).checkboxradio("refresh");
				jQuery('#radioFullDay').attr("checked", true).checkboxradio("refresh");
				

				_allowHours = false;

				if (typeIncidence == '05') {
					//if incicende type hours
					//si la incidencia es de horas no se permite seleccion de medios dias
					_allowHours = true;

					jQuery('#labelRadioAfternoon').hide();
					jQuery('#radioAfternoon').hide();

					jQuery('#labelRadioMorning').hide();
					jQuery('#radioMorning').hide();

					jQuery('#divSwitchStart').hide();
					jQuery('#divSwitchEnd').hide();
				} else if (typeIncidence == '04') {
					//if incicende type days

					if (_allowHalfDay == true) {

						//si la incidencia es de  dias, y permite medios dias
						jQuery('#labelRadioHours').hide();
						jQuery('#radioHours').hide();

					} else {
						//hide button controls half day
						//si la incidencia es de  dias, y NO permite medios dias ni horas

						jQuery('#labelRadioHours').hide();
						jQuery('#radioHours').hide();

						jQuery('#labelRadioAfternoon').hide();
						jQuery('#radioAfternoon').hide();

						jQuery('#labelRadioMorning').hide();
						jQuery('#radioMorning').hide();

						jQuery('#labelRadioFullDay').hide();
						jQuery('#radioFullDay').hide();

						jQuery('#divSwitchStart').hide();
						jQuery('#divSwitchEnd').hide();
					}
				} else if (typeIncidence == null) {
					//if incidence type days/hours
					// si es de tipo dias/horas se permite tanto seleccion por horas como medios dias
					//no ocultamos ningun control
					_allowHours = true;
				}

			} else {
				//remove select layer
				removeSelectedLayer();
				//remove layer locked
				removeLayerLocked();
			}
		}

		/**
		 * Function to control half day
		 * @param mode, store type of mode ( constant of meta4.mobile.myWorkTime.modeCalendar)
		 */
		function _controlHalfDay(mode) {

			if (_leftSelect != null && _rightSelect != null) {
				var value;
				//show input number hours if is necesary
				if (isHourChecked()) {
					jQuery('#divNumberHours').show();
				} else {
					jQuery('#divNumberHours').hide();
				}

				//remove last layer select and paint new selected
				setSelectDays(_leftSelect, _rightSelect);
				updateLimits();
			}
		}

		/**
		 *Function to paint last layer selected
		 */
		function paintLayerSelected() {
			//remove layer no selectable
			if (_leftSelect != null && _rightSelect != null) {
				if (isHourChecked() == true) {
					_calendar.paintLayer(_leftSelect.date, _rightSelect.date, LAYER_SELECT_HOURS, _lastStarHalf, _lastEndHalf);
				} else {
					_calendar.paintLayer(_leftSelect.date, _rightSelect.date, LAYER_SELECT_DAY, _lastStarHalf, _lastEndHalf);
				}

				checkSelectableNextPreviousMonth();
			}
		}

		/**
		 *Function to paint layer locked
		 */
		function paintLayerLocked() {

			_listOfLocked = [];

			/**
			 * Objecto to request
			 */
			var PeriodLocked = function(start, end, startHalf, endHalf) {
				this.startDate = start;
				this.endDate = end;
				this.startHalf = startHalf;
				this.endHalf = endHalf;
			};

			/**
			 * Function to create Date in format UTC
			 */
			function createDateAsUTC(date) {
				return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
			}

			function successLoadLocked() {

				//UPDATE LIMITS
				var nodeLayerData = _calendar.getChannelWebCalendar().getNode('SRTC_LAYER_DATA');
				//store limits
				if (nodeLayerData.getValue('LIMIT_DATE_LEFT') != null) {
					_limitDateLeft = createDateAsUTC(new Date(nodeLayerData.getValue('LIMIT_DATE_LEFT').replace(/-/g, "/")));
					_limitDateRight = createDateAsUTC(new Date(nodeLayerData.getValue('LIMIT_DATE_RIGHT').replace(/-/g, "/")));

					var limStartHalf = parseInt(nodeLayerData.getValue('LIMIT_START_HALF'), 10);
					var limEndHalf = parseInt(nodeLayerData.getValue('LIMIT_END_HALF'), 10);

					_limitStartHalf = (limStartHalf == 1) ? true : false;
					_limitEndHalf = (limEndHalf == 1) ? true : false;
				}

				var nodeLayerLocked = _calendar.getChannelWebCalendar().getNode('SRCO_LAYER_LOCKED');
				var i;
				for ( i = 0; i < nodeLayerLocked.count(); i++) {
					//move current node
					nodeLayerLocked.moveTo(i);

					//id layer of period
					var idLayer = nodeLayerLocked.getValue('ID_LAYER');

					var startDate = createDateAsUTC(new Date(nodeLayerLocked.getValue('DATE_START').replace(/-/g, "/")));
					var endDate = createDateAsUTC(new Date(nodeLayerLocked.getValue('DATE_END').replace(/-/g, "/")));

					var startHalf = parseInt(nodeLayerLocked.getValue('START_HALF'), 10);
					var endHalf = parseInt(nodeLayerLocked.getValue('END_HALF'), 10);

					startHalf = (startHalf == 1) ? true : false;
					endHalf = (endHalf == 1) ? true : false;

					var req = new PeriodLocked(startDate, endDate, startHalf, endHalf);
					_listOfLocked.push(req);

					//PAINT LAYER
					_calendar.paintLayer(startDate, endDate, LAYER_NO_SELECTABLE, startHalf, endHalf);
				}

			}

			//add locked
			var value = jQuery("input[name=fieldSetRequestAbsence]:checked").attr('id');
			var nodeLayerLocked = _calendar.getChannelWebCalendar();

			var args = [];
			args.push(value);

			var executor = new meta4.M4Executor();
			var request = new meta4.M4Request(_calendar.getChannelWebCalendar(), 'SRTC_LAYER_DATA', 'LOAD_LAYER_LOCKED', args);
			meta4.M4Executor.setSecurityToken('##M4JSSecToken##');
			meta4.mobile.data.execute(request, successLoadLocked);

		}

		function _screenresume() {
			jQuery('#contentResume').show();
			jQuery('#divControlOneDay').hide();
			jQuery('#divControlSomeDays').hide();
			//jQuery('#divAbsenceRequest').hide();
			jQuery('#popupAbsenceRequest').popup("close");

			jQuery('#divButtonRequestAbsence').show();
			jQuery('#divButtonContinueRequestAbsence').hide();
			jQuery('#divButtonSendRequestAbsence').hide();

			jQuery('#buttonBack').hide();
			jQuery('#contentResumeRequest').hide();
			jQuery('#buttonClose').hide();
			jQuery('#divHelp').hide();

			//set mode
			_setModeCalendar(meta4.mobile.myWorkTime.modeCalendar.MODE_RESUME);

			//show button collapse calendar
			_showHideButtonCollapse(true);

			//clear panels
			_clearInfoDay();
			
            //hide status bar
            jQuery(".m4-status-bar").hide();//css("display","none");
		}

		/*
		 * Function to send request
		 */
		function _sendRequest() {

			function succesRequestIncidence(respone) {

				//if  method runs successfully
				if (parseInt(respone.getResult(), 10) == '0') {
					_calendar.resetCalendar();
					removeSelectedLayer();
					_leftSelect = null;
					_rightSelect = null;
					_screenresume();
					//reset value
					jQuery('#inputNumHours').val('0');
				}
			}

			//SRTC_LAYER_DATA.INSERT_INC_PENDING
			//AI_ID_INCIDENCE: Identificador de la incidencia
			//AI_DT_START: Fecha de inicio
			//AI_DT_END: Fecha de fin
			//AI_CK_BEGIN: Comienza con medio día
			//AI_CK_END: Termina con medio día
			//AI_ID_TIME: Identificador de unidad de tiempo (04 dias, 05 horas)
			//AI_UNITS: Unidades
			//AI_ID_REASON: Motivo de la incidencia
			//AI_COMMENT: Comentario

			//get value fieldset absence request
			var idIncidence = jQuery("input[name=fieldSetRequestAbsence]:checked").attr('id');

			var dtStart = _leftSelect.date.toISOString().substring(0, 10);
			var dtEnd = _rightSelect.date.toISOString().substring(0, 10);
			var begin = (_lastStarHalf == false) ? '0' : '1';
			var end = (_lastEndHalf == false) ? '0' : '1';

			var idTime;
			var units = '0';
			if (isHourChecked() == true) {
				idTime = '05';
				//get number hours
				units = jQuery('#inputNumHours').val().toString();
			} else {
				idTime = '04';
			}
			var reason = '';
			var comment = '';

			var request;
			var args = [];
			args.push(idIncidence, dtStart, dtEnd, begin, end, idTime, units, reason, comment);
			var executor = new meta4.M4Executor();
			request = new meta4.M4Request(_calendar.getChannelWebCalendar(), 'SRTC_LAYER_DATA', 'INSERT_INC_PENDING', args);
			meta4.M4Executor.setSecurityToken('##M4JSSecToken##');
			meta4.mobile.data.execute(request, succesRequestIncidence);

		}

		/**
		 * Funtion to init tech calendar
		 */
		function _init() {

			/**
			 * Options to calendar
			 */
			var options = {

				//function callback that is executed when finish meta4.mobile.calendar
				onLoadChannel : function() {
					fillSummary();
				},
				onComplete : function() {
					//paint layer locked
					if (_modeCalendar == meta4.mobile.myWorkTime.modeCalendar.MODE_REQUEST) {
						paintLayerLocked();
						paintLayerSelected();
					}
				},
				//function callback that is executed when clicked day
				onClickDay : function(objDay) {
					onClickDay(objDay);
				}
			};
			//store tech calendar
			meta4.M4Executor.setSecurityToken('##M4JSSecToken##');
			_calendar = new meta4.mobile.calendar('contentCalendar', 'SRCO_WEB_CALENDAR', options);
			
			//hide status bar
			jQuery(".m4-status-bar").hide();

		}


        /**
         *Function to show popupAbsenceRequest
         */
        var tpPopup;
        function showPopupAbsenceRequest() {
            //we show the list of incidences, in popup form
            tpPopup = jQuery('#popupAbsenceRequest');
            
            //Events:
            //evitamos que al pulsar fuera se cierre el popup
            tpPopup.on({
                popupbeforeposition: function () {
                    $('.ui-popup-screen').off();
                }
            });            
            
            //we put the oposite theme
            var curTheme = jQuery.mobile.page.prototype.options.theme;
            var popupTheme;
            if (curTheme == "b") {popupTheme = "a";} else {popupTheme = "b";};            
            
            tpPopup.popup();
            tpPopup.popup({
                    corners : false, 
                    positionTo : "#divFooter",
                    overlayTheme: popupTheme,
                    transition : "slideup"
                });             
            tpPopup.popup("open");  
        }

		/**
		 *Function to show screen select request
		 */
		function _screenSelectRequest() {
		    
		    //When the user click over "Request an absence button", we must show the incidences list
		    
			jQuery('#contentResume').hide();
			jQuery('#divControlOneDay').hide();
			jQuery('#divControlSomeDays').hide();
			jQuery('#contentDailyDetail').hide();
			//jQuery('#divAbsenceRequest').show();
			showPopupAbsenceRequest();		
			
			jQuery('#divButtonRequestAbsence').hide();
			jQuery('#divButtonContinueRequestAbsence').show();
			jQuery('#divButtonSendRequestAbsence').hide();

			jQuery('#buttonBack').hide();

			jQuery('#contentResumeRequest').hide();
			jQuery('#buttonClose').hide();

			//show calendar
			jQuery('#contentCalendar').find('tbody').show('slow');
			jQuery('#contentCalendar').find('thead').show('slow');
			var thead = jQuery('#contentCalendar').find('thead')[0];

			jQuery(thead).find('img').css('display', 'inline-block');
			jQuery(thead).find('label').css('display', 'inline-block');
			//end show calendar

			//set mode
			_setModeCalendar(meta4.mobile.myWorkTime.modeCalendar.MODE_REQUEST_FLOATING);

			//hide button collapse calendar
			_showHideButtonCollapse(false);
			
			//show status bar in the first step
			jQuery(".m4-status-bar").show();//css("display","block");
            jQuery("#status-bar-left").addClass("m4-status-bar-task-selected");
            jQuery("#status-bar-right").removeClass("m4-status-bar-task-selected");			
		}

		/**
		 *Function to show screen select days
		 */
		function _screenSelectDays() {

            //Second step in Request absence: the user must select start and end dates
			jQuery('#contentResume').hide();
			jQuery('#divControlOneDay').hide();
			jQuery('#divControlSomeDays').hide();
			//jQuery('#divAbsenceRequest').hide();
			tpPopup.popup("close");
			

			jQuery('#divButtonRequestAbsence').hide();
			jQuery('#divButtonContinueRequestAbsence').hide();
			jQuery('#divButtonSendRequestAbsence').hide();

			jQuery('#buttonBack').show();
			jQuery('#divHelp').show();
			jQuery('#contentResumeRequest').show();
			jQuery('#buttonClose').show();

			paintLayerLocked();

			_setModeCalendar(meta4.mobile.myWorkTime.modeCalendar.MODE_REQUEST);
			//paint layer locked

			paintResumeRequest();
			
            //put status bar in second step 
            jQuery("#status-bar-left").removeClass("m4-status-bar-task-selected");
            jQuery("#status-bar-right").addClass("m4-status-bar-task-selected");

		}

		/**
		 *Event when change input number hour
		 */
		jQuery('#page_my_work_time').live('pagebeforeshow', function(event, ui) {
			jQuery('#inputNumHours').change(function() {

				var stringVal = jQuery(this).val();
				stringVal = stringVal.replace(",", ".");
				jQuery(this).val(stringVal);
				//validate number
				if (jQuery(this).val() > jQuery(this).attr('max')) {
					jQuery(this).val(jQuery(this).attr('max'));
				} else if (jQuery(this).val() < jQuery(this).attr('min')) {
					jQuery(this).val(jQuery(this).attr('min'));
				}

				paintResumeRequest();
			});
		});

		return {
			init : function() {
				_init();
			},
			setModeCalendar : function(mode) {
				_setModeCalendar(mode);
			},
			controlHalfDay : function(target) {
				_controlHalfDay(target);
			},
			sendRequest : function() {
				_sendRequest();
			},
			showHideButtonCollapse : function(argBool) {
				_showHideButtonCollapse(argBool);
			},
			screenResume : function() {
				_screenresume();
			},
			screenSelectRequest : function() {
				_screenSelectRequest();
			},
			screenSelectDays : function() {
				_screenSelectDays();
			}
		};

	}());

jQuery(document).delegate("#page_my_work_time", "pageinit", function() {

	//strict mode
	"use strict";
	/**
	 *Event to show resume summary
	 */
	jQuery('#buttonClose').click(function() {
		meta4.mobile.myWorkTime.engine.screenResume();
	});
	
    /**
     *Event to show resume summary
     */
    jQuery('#closePopupAbsenceRequest').click(function() {
        meta4.mobile.myWorkTime.engine.screenResume();
    });		

	/**
	 *Add event of button request absence
	 */
	jQuery('#divButtonRequestAbsence').click(function(target) {
		meta4.mobile.myWorkTime.engine.screenSelectRequest();
	});

	/**
	 *Add event of button continue request absence
	 */
	jQuery('#divButtonContinueRequestAbsence').click(function(target) {
		meta4.mobile.myWorkTime.engine.screenSelectDays();
	});

	/**
	 *Add event of button send request absence
	 */
	jQuery('#divButtonSendRequestAbsence').click(function(target) {
		meta4.mobile.myWorkTime.engine.sendRequest();
	});

	/**
	 *Add event of back button
	 */
	jQuery('#buttonBack').click(function(target) {

		//var contentResume = jQuery('#contentResume');
		//var divAbsenceRequest = jQuery('#divAbsenceRequest');
		//var divAbsenceRequest = jQuery('#popupAbsenceRequest');
		

		//if is in select period
		//if (!divAbsenceRequest.is(':visible') && !contentResume.is(':visible')) {
			meta4.mobile.myWorkTime.engine.screenSelectRequest();
		//} else if (divAbsenceRequest.is(':visible')) {
		//	meta4.mobile.myWorkTime.engine.screenResume();
		//}
	});

/*
    jQuery("#popupAbsenceRequest").on({
        popupbeforeposition: function() {
            var h = jQuery(window).width();
    
            $("#popupAbsenceRequest").css("width",h);
        }
    });
*/

});

jQuery(document).bind('meta4Ready', meta4.mobile.myWorkTime.engine.init);

