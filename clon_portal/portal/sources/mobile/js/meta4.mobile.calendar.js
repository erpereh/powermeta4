/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: meta4.mobile.calendar.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */

 

	'use strict';

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){

	jQuery("a[data-icon='m4home']" ).click(
		function() {	
			document.location.href = '/mobile/m4home.html';
	});

	document.addEventListener("backbutton", function(e){
			e.preventDefault();
			document.location.href = '/mobile/m4home.html';
	}, false);	
} 
	
	if(meta4.mobile.deviceFrom()=='android' || meta4.mobile.deviceFrom()=='ios')
	{			
		meta4.mobile.loadCordova();
	}

/*global jQuery, loadPeriods*/

var meta4 = meta4 || {};
meta4.mobile = meta4.mobile || {};

/**
 * Function to create object Calendar
 *
 * @param container, id of element container
 * @param id_channel, id of channel to generate calendar
 * @param opt, options to calendar
 */
meta4.mobile.calendar = function(container, id_channel, opt) {

	/* use strict */'use strict';

	//store width of border cell
	var _sizeBorder = 0;

	/** START DEFINITION OBJECTS*/

	/**
	 * Objecto to store Period to paint with Layer
	 *
	 * @param idLayer, Id layer to paint
	 * @param top, check if must paint border top
	 * @param bottom, check if must paint border bottom
	 * @param left, check if must paint border left
	 * @param right, check if must paint border right
	 * @param startHalf, check if we must paint start half day
	 * @param endHalf, check if we must end start half day
	 */
	var PeriodLayer = function(idLayer, top, bottom, left, right, startHalf, endHalf) {
		this.idLayer = idLayer;
		this.top = top;
		this.bottom = bottom;
		this.left = left;
		this.right = right;
		this.startHalf = startHalf;
		this.endHalf = endHalf;
	};

	/**
	 * Object to store date associated with tag td
	 * @param td, Tag TD of element HTML
	 * @param date, Date associated of object
	 */
	var ObjDay = function(td, date) {
		this.date = date;
		this.td = td;
		//div that content all
		this.divCell = jQuery('<div></div>');
		
		
		this.divCell.addClass('m4-calendar-total-div');
		
		//div to diagonal line 
		this.divStart = jQuery('<div></div>');
		this.divEnd = jQuery('<div></div>');
		this.divCell.css({
			width:_sizeBorder,
			height:_sizeBorder
		});	
		this.divStart.css('border', _sizeBorder + 'px solid transparent');
		this.divStart.css('position', 'absolute');
		this.divStart.addClass('m4-div-diagonal');
		
		this.divEnd.css('border', _sizeBorder + 'px solid transparent');
		this.divEnd.css('position', 'absolute');
		this.divEnd.addClass('m4-div-diagonal');
						
		//div to special tag
		this.divSpecial = jQuery('<div></div>');
		this.divSpecial.addClass('m4-calendar-special-div');
		
		//label with number day
		this.label = jQuery('<span></span>');
		this.label.attr('class', 'calendarDay');
						
		this.divCell.append(this.divStart,this.divEnd,this.divSpecial);		
		this.divCell.append(this.label);
		
		this.td.append(this.divCell);
		this.listPeriodLayers = [];
		//default layer
		var periodDefault = new PeriodLayer('M4-DEFAULT', true, true, true, true, false, false);
		this.listPeriodLayers.push(periodDefault);
	};

	/**
	 * Function to create Layer to paint a period
	 * @param id, id of layer
	 * @param colorValue, color of text
	 * @param colorPriority, priority of color
	 * @param borderValue, value of border cell of table
	 * @param borderPriority, priority of border color
	 * @param backgroundColorValue, color of background to cell of table
	 * @param backgroundColorPriority, priority of background color to cell of table
	 * @param backgroundImageValue, image of background to cell of table
	 * @param backgroundImagePriority, priority of background image to cell of table
	 * @param backgroundImageValueHalf, image of background to cell of table, when is first or last and start half day or end half day.
	 * @param backgroundImagePriorityHalf, priority of background image to half day
	 */
	var Layer = function(id, colorValue, colorPriority, borderValue, borderPriority, backgroundColorValue, backgroundColorPriority, backgroundImageValue, backgroundImagePriority, backgroundImageValueHalf, backgroundImagePriorityHalf, specialTagValue, specialTagPriority) {
		this.id = id;
		this.properties = {
			color : {
				value : colorValue,
				priority : parseInt(colorPriority, 10)
			},
			border : {
				value : borderValue,
				priority : parseInt(borderPriority, 10)
			},
			backgroundColor : {
				value : backgroundColorValue,
				priority : parseInt(backgroundColorPriority, 10)
			},
			backgroundImage : {
				value : backgroundImageValue,
				priority : parseInt(backgroundImagePriority, 10)
			},
			backgroundImageHalf : {
				value : backgroundImageValueHalf,
				priority : parseInt(backgroundImagePriorityHalf, 10)
			},
			specialTag : {
				value : specialTagValue,
				priority : parseInt(specialTagPriority, 10)
			}
		};
	};

	/** END DEFINITION OBJECTS*/
	
	//day of start calendar
	var _startCalendar = 1;
	//array to store name of days week
	var _days = [];
	//array to store name of months
	var _months = [];

	//container of calendar
	var _divContainer = container;

	//store id_channel
	var _id_channel = id_channel;

	//options default
	var _options = {
		//function that is executed when channel is loaded
		onLoadChannel : function() {
		},
		//function that is executed when mobth is painted
		onComplete : function() {
		},
		//function that is executed when click above day
		clickedDay : function() {
		}
	};

	//extend default options
	jQuery.extend(true, _options, opt);

	//channel to get name calendar and day of start
	var _channelWebCalendar = null;

	//tag label to store name calendar
	var _labelCalendar = jQuery('<label></label>');
	_labelCalendar.attr('class', 'm4-tittleCalendar');

	//store today
	var _today = new Date();

	//store month that is showed in calendar
	var _currentMonth = _today.getMonth();
	//store year that is showed in calendar
	var _currentYear = _today.getFullYear();

	//store list of objDay
	var _listOfObjDay = [];

	// store disable layers
	var _offLayer = [];

	//store definition layers
	var _layersDefinition = [];

	//create default layer
	var defaultLayer = new Layer('M4-DEFAULT', 'white', 0, '1px solid #6c6b6b', 0, 'none', 0, 'none', 0, 'none', 0, null, 0);
	_layersDefinition.push(defaultLayer);

	/**
	 * Function to get name of months,Order to insert in array is important
	 * @param node, node to get translates
	 */
	function getNameMonths(node) {
		_months.push(node.getItemMetadata('LABEL_JANUARY').getProperty('Name'));
		_months.push(node.getItemMetadata('LABEL_FEBRUARY').getProperty('Name'));
		_months.push(node.getItemMetadata('LABEL_MARCH').getProperty('Name'));
		_months.push(node.getItemMetadata('LABEL_APRIL').getProperty('Name'));
		_months.push(node.getItemMetadata('LABEL_MAY').getProperty('Name'));
		_months.push(node.getItemMetadata('LABEL_JUNE').getProperty('Name'));
		_months.push(node.getItemMetadata('LABEL_JULY').getProperty('Name'));
		_months.push(node.getItemMetadata('LABEL_AUGUST').getProperty('Name'));
		_months.push(node.getItemMetadata('LABEL_SEPTEMBER').getProperty('Name'));
		_months.push(node.getItemMetadata('LABEL_OCTOBER').getProperty('Name'));
		_months.push(node.getItemMetadata('LABEL_NOVEMBER').getProperty('Name'));
		_months.push(node.getItemMetadata('LABEL_DECEMBER').getProperty('Name'));
	}

	/**
	 * Function to get name of days,Order to insert in array is important
	 * @param node, node to get translates
	 */
	function getNameDays(node) {
		//get label days of week
		//order of insert is important!! [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
		_days.push(node.getItemMetadata('LABEL_SUNDAY').getProperty('Name'));
		_days.push(node.getItemMetadata('LABEL_MONDAY').getProperty('Name'));
		_days.push(node.getItemMetadata('LABEL_TUESDAY').getProperty('Name'));
		_days.push(node.getItemMetadata('LABEL_WEDNESDAY').getProperty('Name'));
		_days.push(node.getItemMetadata('LABEL_THURSDAY').getProperty('Name'));
		_days.push(node.getItemMetadata('LABEL_FRIDAY').getProperty('Name'));
		_days.push(node.getItemMetadata('LABEL_SATURDAY').getProperty('Name'));
	}

	/*
	 * Function to format date to ISO
	 * @param year, year of date
	 * @param month, month of date
	 * @param day, day of date
	 */
	function formatDateISO(year, month, day) {

		//convert month to format ISO
		var res_month = parseInt(month, 10) + 1;
		//if month if <10 concat 0
		if (res_month < 10) {
			res_month = '0' + res_month;
		}
		//if day if <10 concat 0
		if (day < 10) {
			day = '0' + day;
		}
		return year + "-" + res_month + "-" + day;
	}

	/*
	 * Function to return days of month
	 * @param year, year to get days of month
	 * @param month, month to get days of month
	 */
	function getDaysInMonth(year, month) {
		var d = new Date(year, month + 1, 0);
		return d.getDate();
	}

	/**
	 * Function to create Definition layers, get layers of node SRTC_LAYER_DEFINITION
	 */
	function createDefinitionLayer() {

		//add definition stored in node SRTC_LAYER_DEFINITION
		var node = _channelWebCalendar.getNode('SRTC_LAYER_DEFINITION');
		var i;
		for ( i = 0; i < node.count(); i++) {
			node.moveTo(i);

			//create layer
			var layer = new Layer(node.getValue('ID_LAYER'), node.getValue('VALUE_COLOR'), node.getValue('PRIORITY_COLOR'), node.getValue('VALUE_BORDER'), node.getValue('PRIORITY_BORDER'), node.getValue('VALUE_BACKGROUNDCOLOR'), node.getValue('PRIORITY_BACKGROUNDCOLOR'), node.getValue('VALUE_BACKGROUNDIMAGE'), node.getValue('PRIORITY_BACKGROUNDIMAGE'), node.getValue('VALUE_BACKGROUNDIMAGE_HALF'), node.getValue('PRIORITY_BACKGROUNDIMAGE_HALF'), node.getValuePlain('VALUE_SPECIAL_TAG'), node.getValue('PRIORITY_SPECIAL_TAG'));

			//add layer
			_layersDefinition.push(layer);
		}
	}

	/**
	 * Function to get days between startDate and endDate
	 * @ return, return number of days
	 */
	function getListDays(startDate, endDate) {
		var listDays = [];

		var init = false;
		var end = false;
		var i;
		for ( i = 0; i < _listOfObjDay.length && end == false; i++) {
			if (endDate.getTime() == _listOfObjDay[i].date.getTime()) {
				listDays.push(_listOfObjDay[i].date);
				//if is only day
				end = true;
			} else if (_listOfObjDay[i].date.getTime() >= startDate.getTime() && _listOfObjDay[i].date.getTime() < endDate.getTime()) {
				listDays.push(_listOfObjDay[i].date);
			}
		}
		return listDays;
	}

	/**
	 *Function to search one date
	 * @param: date Receive a date in format ISO
	 * @return : object day
	 */
	function _getObjDay(date) {
		var i;
		for ( i = 0; i < _listOfObjDay.length; i++) {
			if (_listOfObjDay[i].date.getTime() == date.getTime()) {
				return _listOfObjDay[i];
			}
		}
		return null;
	}

	/**
	 * Function to paint property in object TD
	 *
	 * @param obj, TD element of table
	 * @param listLayer, list of layer to TD
	 * @param prop, property to paint
	 */
	function paintProperty(objDay, listLayer, prop) {

		/**
		 * Function to search periodLayer of a day,  give a ID of layer
		 *  @param: id, id of Layer
		 */
		function findPeriodsOfLayer(id) {
			var i;
			var list = [];
			for ( i = 0; i < objDay.listPeriodLayers.length; i++) {
				if (objDay.listPeriodLayers[i].idLayer == id) {
					list.push(objDay.listPeriodLayers[i]);
				}
			}
			return list;
		}

		var i;
		for ( i = 0; i < listLayer.length; i++) {

			//get period layer
			var listPeriodsLayer = findPeriodsOfLayer(listLayer[i].id);

			var k;
			for ( k = 0; k < listPeriodsLayer.length; k++) {
				var periodLayer = listPeriodsLayer[k];

				var top = periodLayer.top;
				var bottom = periodLayer.bottom;
				var left = periodLayer.left;
				var right = periodLayer.right;
				var startHalf = periodLayer.startHalf;
				var endHalf = periodLayer.endHalf;

				var posStart = false;
				var posEnd = false;

				if (top && left && startHalf) {
					posStart = true;
				}
				if (bottom && right && endHalf) {
					posEnd = true;
				}

				//if layer no disable
				if (listLayer[i].properties[prop]) {
					if (prop == 'border') {

						if (top && !posStart) {
							objDay.td.css('border-top', listLayer[i].properties[prop].value);
						}
						if (bottom && !posEnd) {
							objDay.td.css('border-bottom', listLayer[i].properties[prop].value);
						}
						if (left && !posStart) {
							objDay.td.css('border-left', listLayer[i].properties[prop].value);
						}
						if (right && !posEnd) {
							objDay.td.css('border-right', listLayer[i].properties[prop].value);
						}
					} else if (prop == 'backgroundImageHalf') {
						if (posStart || posEnd) {
							objDay.td.css('backgroundImage', listLayer[i].properties[prop].value);
						}
					} else if (prop == 'backgroundColor') {
						if (!posStart && !posEnd) {
							objDay.td.css(prop, listLayer[i].properties[prop].value);
						}

						if (posStart) {							
							objDay.divEnd.css('border-right', _sizeBorder + 'px solid ' + listLayer[i].properties['backgroundColor'].value);
							objDay.divEnd.css('border-top', _sizeBorder + 'px solid transparent');
							
						}
						if (posEnd) {							
							objDay.divStart.css('border-left', _sizeBorder + 'px solid ' + listLayer[i].properties['backgroundColor'].value);
							objDay.divStart.css('border-bottom', _sizeBorder + 'px solid transparent');
							
						}
						if (posStart == false && posEnd == false) {
							objDay.divStart.css('border', 'none');
							objDay.divEnd.css('border', 'none');									
						}
					} else {
						objDay.td.css(prop, listLayer[i].properties[prop].value);
					}
				}
			}

		}
	}

	/**
	 * Function to paint property in object TD
	 *
	 * @param obj, TD element of table
	 * @param listLayer, list of layer to TD
	 * @param prop, property to paint
	 */
	function paintSpecialTag(objDay, listLayer, prop) {

		/**
		 * Function to search periodLayer of a day,  give a ID of layer
		 *  @param: id, id of Layer
		 */
		function findPeriodsOfLayer(id) {
			var i;
			var list = [];
			for ( i = 0; i < objDay.listPeriodLayers.length; i++) {
				if (objDay.listPeriodLayers[i].idLayer == id) {
					list.push(objDay.listPeriodLayers[i]);
				}
			}
			return list;
		}

		var i;
		//reset content
		objDay.divSpecial.empty();
		for ( i = 0; i < listLayer.length; i++) {

			//get period layer
			var listPeriodsLayer = findPeriodsOfLayer(listLayer[i].id);

			var k;
			for ( k = 0; k < listPeriodsLayer.length; k++) {
				var periodLayer = listPeriodsLayer[k];
				/**
				 var top = periodLayer.top;
				 var bottom = periodLayer.bottom;
				 var left = periodLayer.left;
				 var right = periodLayer.right;
				 var startHalf = periodLayer.startHalf;
				 var endHalf = periodLayer.endHalf;

				 var posStart = false;
				 var posEnd = false;

				 if (top && left && startHalf) {
				 posStart = true;
				 }
				 if (bottom && right && endHalf) {
				 posEnd = true;
				 }*/
				if (listLayer[i].properties['specialTag'].value != null) {
					var tag = listLayer[i].properties['specialTag'].value;
					objDay.divSpecial.append(tag);
				}
			}

		}
	}

	/**
	 * Function to paint day
	 * @param top, stores if need to share edges with top adjacent element
	 * @param bottom, stores if need to share edges with bottom adjacent element
	 * @param left, stores if need to share edges with left adjacent element
	 * @param right, stores if need to share edges with right adjacent element
	 *
	 */
	function paintDay(objDay) {

		/**
		 *Function to get index of Layer in array with object Layer
		 * @param array, array to store object Layer
		 *  @param id, id of object Layer
		 */
		function myIndexOf(array, id) {
			var i;
			for ( i = 0; i < array.length; ++i) {
				if (id == (array[i].idLayer)) {
					return i;
				}
			}
			return -1;
		}

		/**
		 *Function to sort Layer by property
		 * @param prop, property to order
		 */
		function sortFunction(prop) {
			return function(a, b) {
				//check both have property
				var valReturn = 0;
				if (a.properties[prop] && b.properties[prop]) {

					if (a.properties[prop].priority < b.properties[prop].priority) {
						valReturn = -1;
					} else if (a.properties[prop].priority > b.properties[prop].priority) {
						valReturn = 1;
					} else {
						valReturn = 0;
					}
				} else {
					if (a.properties[prop]) {
						valReturn = 1;
					} else {
						valReturn = -1;
					}
				}
				return valReturn;
			};
		}

		//paint background color
		var layersObj = [];
		var i;
		for ( i = 0; i < _layersDefinition.length; i++) {
			if (myIndexOf(objDay.listPeriodLayers, _layersDefinition[i].id) != -1) {
				layersObj.push(_layersDefinition[i]);
			}
		}

		//order by priority color
		var orderByColor = layersObj.sort(sortFunction('color'));
		paintProperty(objDay, orderByColor, 'color');

		//order by priority border
		var orderByBorder = layersObj.sort(sortFunction('border'));
		paintProperty(objDay, orderByBorder, 'border');

		//order by priority background
		var orderByBackground = layersObj.sort(sortFunction('backgroundColor'));
		paintProperty(objDay, orderByBackground, 'backgroundColor');

		//order by priority background image
		var orderBybackgroundImage = layersObj.sort(sortFunction('backgroundImage'));
		paintProperty(objDay, orderBybackgroundImage, 'backgroundImage');

		//order by priority background image half
		var orderBybackgroundImageStart = layersObj.sort(sortFunction('backgroundImageHalf'));
		paintProperty(objDay, orderBybackgroundImageStart, 'backgroundImageHalf');

		//paint special tag
		var orderBySpecialTag = layersObj.sort(sortFunction('specialTag'));
		paintSpecialTag(objDay, orderBySpecialTag, 'specialTag');
	}

	/**
	 * Function to paint layer, paint all layer stores in object day
	 *
	 * @param startDate, date of begin
	 * @param endDate, date of end
	 * @param idLayer, id of layer to paint
	 * @param startHalf, check if layer begin in half day
	 * @param endHalf, check if layer end in half day
	 */
	function _paintLayer(startDate, endDate, idLayer, startHalf, endHalf) {

		var listDays = getListDays(startDate, endDate);
		var i;
		for ( i = 0; i < listDays.length; i++) {
			var obj = _getObjDay(listDays[i]);

			//stores if need to share edges with adjacent element
			var left = true, right = true, top = true, bottom = true;
			if (i - 7 >= 0) {
				top = false;
			}
			if (i + 7 < listDays.length) {
				bottom = false;
			}
			if (i + 1 < listDays.length || endDate.getTime() > listDays[listDays.length - 1].getTime()) {
				right = false;
			}
			if (i - 1 >= 0 || startDate.getTime() < listDays[0].getTime()) {
				left = false;
			}

			var periodLayer = new PeriodLayer(idLayer, top, bottom, left, right, startHalf, endHalf);
			obj.listPeriodLayers.push(periodLayer);

			paintDay(obj);
		}

	}

	/**
	 * Function to paint periods store in node SRTC_LAYER_DATA
	 */
	function paintPeriods() {

		//add definition stored in node SRTC_LAYER_DEFINITION
		var node = _channelWebCalendar.getNode('SRTC_LAYER_DATA');
		var i;
		for ( i = 0; i < node.count(); i++) {
			node.moveTo(i);
			var idLayer = node.getValue('ID_LAYER');
            var startDate = node.getValue('DATE_START');
            var endDate = node.getValue('DATE_END');

			var startHalf = parseInt(node.getValue('START_HALF'), 10);
			var endHalf = parseInt(node.getValue('END_HALF'), 10);

			startHalf = (startHalf == 1) ? true : false;
			endHalf = (endHalf == 1) ? true : false;

			//paint layer
			_paintLayer(startDate, endDate, idLayer, startHalf, endHalf);
		}
	}

	/**
	 *Function to search list of dates
	 * @param: arrayDates Receive a array with all dates in format ISO
	 * @return return array with object days
	 */
	function _getDays(arrayDates) {
		var listToReturn = [];
		var i;
		for ( i = 0; i < arrayDates.length; i++) {
			var searchDay = _getObjDay(arrayDates[i]);
			if (searchDay != null) {
				listToReturn.push(searchDay);
			}
		}

		return listToReturn;
	}

	/**
	 * Function to disable layer
	 * @param id, id of layer
	 */
	function _disableLayer(idLayer) {
		_offLayer.push(idLayer);
	}

	/**
	 * Function to activate layer
	 * @param id, id of layer
	 */
	function _activateLayer(idLayer) {

		Array.prototype.remove = function() {
			var what, a = arguments, L = a.length, ax;
			while (L && this.length) {
				what = a[--L];
				while (( ax = this.indexOf(what)) !== -1) {
					this.splice(ax, 1);
				}
			}
			return this;
		};

		_offLayer.remove(idLayer);
	}

	/**
	 *Function to remove Period layer of array
	 * @param array, array with Period Layer
	 *  @param idLayer, idLayer to remove of array
	 */
	function removePeriodLayer(array, idLayer) {
		var i;
		for ( i = 0; i < array.length; i++) {
			if (array[i].idLayer == idLayer) {
				array.splice(i, 1);
			}
		}
	}

	/**
	 * Function ro remove layer of period
	 *
	 * @param startDate, date of begin period
	 * @param endDate, date of end period
	 * @param idLayer, id of layer to period
	 */
	function _removeLayer(startDate, endDate, idLayer, startHalf, endHalf) {

		var listDays = getListDays(startDate, endDate);
		var i;
		for ( i = 0; i < listDays.length; i++) {

			var objDay = _getObjDay(listDays[i]);
			//remove layer
			removePeriodLayer(objDay.listPeriodLayers, idLayer);

			//stores if need to share edges with adjacent element
			var left = true, right = true, top = true, bottom = true;
			if (i - 7 >= 0) {
				top = false;
			}
			if (i + 7 < listDays.length) {
				bottom = false;
			}
			if (i + 1 < listDays.length || endDate.getTime() > listDays[listDays.length - 1].getTime()) {
				right = false;
			}
			if (i - 1 >= 0 || startDate.getTime < listDays[0].getTime()) {
				left = false;
			}

			paintDay(objDay);
		}

	}

	/**
	 * Function to get the first day of the calendar painted
	 */
	function _getDateFirstDay() {
		return _listOfObjDay[0].date;
	}

	/**
	 * Function to get the last day of the calendar painted
	 */
	function _getDateLastDay() {
		return _listOfObjDay[_listOfObjDay.length - 1].date;
	}

    /**
     * Function to show next/back month
     */
    function moveMonth() {
        //load the periods only if is not loaded yet
        var nodeData = _channelWebCalendar.getNode('SRTC_LAYER_DATA');
        var loadStartDate = nodeData.getValue("LOAD_DATE_START");
        var loadEndDate = nodeData.getValue("LOAD_DATE_END");
        var startDate = new Date(formatDateISO(_currentYear, _currentMonth, 1));
        var endDate = new Date(formatDateISO(_currentYear, _currentMonth, getDaysInMonth(_currentYear, _currentMonth)));        
                    
        if (loadStartDate && loadEndDate && startDate >= loadStartDate && endDate <= loadEndDate){
            paintCalendar();
        }else{
            loadPeriods();
        }        
    }


	/**
	 * Function to show back month
	 */
	function backMonth() {

		//set value _currentMonth
		_currentMonth = (_currentMonth - 1 == -1) ? 11 : _currentMonth - 1;
		//year of month before
		_currentYear = (_currentMonth == 11) ? _currentYear - 1 : _currentYear;
		
		moveMonth();
	}

	/**
	 * Function to show next month
	 */
	function nextMonth() {

		//set value _currentMonth
		_currentMonth = (_currentMonth + 1 == 12) ? 0 : _currentMonth + 1;
		//year of month before
		_currentYear = (_currentMonth == 0) ? _currentYear + 1 : _currentYear;	
		
		moveMonth();			
	}

	/**
	 *Function set to _allowNavigateNextMonth
	 */
	function _setNavigateNextMonth(bool) {
		var tds = jQuery('#' + container).find('table thead tr th');
		if (bool == false) {
			jQuery(tds[2]).addClass('ui-disabled');
		} else {
			jQuery(tds[2]).removeClass('ui-disabled');
		}
	}

	/**
	 *Function set to _allowNavigateBackMonth
	 */
	function _setNavigateBackMonth(bool) {
		var tds = jQuery('#' + container).find('table thead tr th');
		if (bool == false) {
			jQuery(tds[0]).addClass('ui-disabled');
		} else {
			jQuery(tds[0]).removeClass('ui-disabled');
		}
	}

	/**
	 *Function set to _allowNavigateNextMonth
	 */
	function _showHideButtonCollapse(bool) {
		var tds = jQuery('#' + container).find('table thead tr th');
		if (bool == false) {
			jQuery(tds[3]).addClass('ui-disabled');
			jQuery(tds[3]).find('img').css('display', 'none');
		} else {
			jQuery(tds[3]).removeClass('ui-disabled');
			jQuery(tds[3]).find('img').css('display', 'inline-block');
		}
	}

	/*
	 * Function to create tbody of calendar, This method is executed every time one month shows
	 *
	 * @param: year, year to show in calendar
	 * @param: month, month to show in calendar
	 */
	function createTbodyCalendar(year, month) {

		var BACK = "BACK";
		var NEXT = "NEXT";

		function functionTD(event) {

			var obj = event.data.paramObj;
			var action = event.data.action;

			//return callback
			_options.onClickDay(obj);

			/**if (action == BACK) {
			 backMonth();
			 } else if (action == NEXT) {
			 nextMonth();
			 }*/
		}

		//clear array days
		_listOfObjDay = [];

		//empty tbody
		var tbody = jQuery('#' + _divContainer).find('tbody').empty();

		//set title calendar
		_labelCalendar.html(_months[_currentMonth] + " " + _currentYear);

		//days of month
		var daysOfMonth = getDaysInMonth(year, month);
		//day of week start month
		var dayStartMonth = new Date(year, month, 1).getDay();
		//special case: week start on Monday and month in Sunday
		dayStartMonth = (_startCalendar==1 && dayStartMonth==0) ? 7 : dayStartMonth;
		//month before
		var monthBefore = (month - 1 == -1) ? 11 : month - 1;
		//month after
		var monthAfter = (month + 1 == 12) ? 0 : month + 1;
		//year of month before
		var yearBefore = (monthBefore == 11) ? year - 1 : year;
		//year of month after
		var yearAfter = (monthAfter == 0) ? year + 1 : year;
		//days of month before
		var daysOfMonthBefore = getDaysInMonth(yearBefore, monthBefore);

		var day = 0;
		var dayAfter = 0;
		var endMonth = false;
		var auxStratCalendar = _startCalendar;
		var iRow;
		for ( iRow = 1; iRow < 7 && endMonth == false; iRow++) {
			var tr = jQuery('<tr></tr>');
			var iColumn;
			for ( iColumn = 1; iColumn <= 7; iColumn++) {
				var td = jQuery('<td></td>');
				//td.addClass('calendarDayTD');
				var obj;
				var date;
				if (auxStratCalendar < dayStartMonth) {

					//create object day 
					date = new Date(yearBefore, monthBefore, (daysOfMonthBefore - dayStartMonth + _startCalendar + iColumn));

					obj = new ObjDay(td, date);
					//write days previous month
					obj.label.text(daysOfMonthBefore - dayStartMonth + _startCalendar + iColumn);

					//function click TD
					td.click({
						paramObj : obj,
						action : BACK
					}, functionTD);

					td.addClass('m4-previousNextMonth');
					_listOfObjDay.push(obj);
					auxStratCalendar = auxStratCalendar + 1;

				} else {
					if (day < daysOfMonth) {
						//write days of month
						day = day + 1;

						//create object day
						date = new Date(year, month, day);

						obj = new ObjDay(td, date);
						obj.label.text(day);

						_listOfObjDay.push(obj);

						//function click TD
						td.click({
							paramObj : obj,
							action : ''
						}, functionTD);

						//if end month
						if (day == daysOfMonth) {
							endMonth = true;
						}
					} else {
						//days month after
						//write days of month
						dayAfter = dayAfter + 1;
						//create object day
						date = new Date(yearAfter, monthAfter, dayAfter);
						obj = new ObjDay(td, date);
						obj.label.text(dayAfter);

						_listOfObjDay.push(obj);
						td.addClass('m4-previousNextMonth');
						//function click TD
						td.click({
							paramObj : obj,
							action : NEXT
						}, functionTD);

					}
				}
				tr.append(td);
			}
			tbody.append(tr);
		}
	}

	/**
	 * Function to paint body calendar with periods,
	 * finally callback to onComplete function
	 */
	function paintCalendar() {
		//create body calendar with current fate
		createTbodyCalendar(_currentYear, _currentMonth);

		//paint stored periods
		var tbody = jQuery('#' + _divContainer).find('tbody');
		//paint periods loaded of server
		paintPeriods();
		tbody.show('slow');

		//callback function
		_options.onComplete();

		//jQuery.mobile.hidePageLoadingMsg();
		jQuery.mobile.loading('hide');
	}

	/**
	 * Function to load Periods of layer
	 */
	function loadPeriods() {
		var args = [];
		var startDate = formatDateISO(_currentYear, _currentMonth, 1);
		var endDate = formatDateISO(_currentYear, _currentMonth, getDaysInMonth(_currentYear, _currentMonth));
		args.push(startDate, endDate);

		//jQuery.mobile.showPageLoadingMsg();
		jQuery.mobile.loading('show');
		var request = new meta4.M4Request(_channelWebCalendar, 'SRTC_LAYER_DATA', 'LOAD_LAYER_DATA', args);
		meta4.mobile.data.execute(request, paintCalendar);
	}

	/*
	 * Function to create structure of calendar, this method is executed only one time
	 */
	function createStructureCalendar() {

		var divTableData = jQuery('<div></div>');
		divTableData.addClass('divTableCalendar');		
		var table = jQuery('<table></table>');
		table.attr('class', 'm4calendar');
		
		var tableControl = jQuery('<table></table>');
		tableControl.attr('class', 'm4calendarControl');					

		var theadTitle = jQuery('<thead></thead>');

		var theadDaysWeek = jQuery('<thead></thead>');

		//hide tbody to show only when periods is loaded
		//   var tbody = jQuery('<tbody></tbody>').css('display', 'none');
		var tbody = jQuery('<tbody></tbody>');

		var tr = jQuery('<tr></tr>');

		//create button back month
		var thBack = jQuery('<th></th>');
		thBack.css('width', _sizeBorder + 'px');
		var back = jQuery('<img></img>');
		thBack.click(function() {
			backMonth();
		});
		back.attr('src', meta4.mobile.getPathIconByTheme('previous'));
		tr.append(thBack.append(back));

		//create label calendar
		var thLabel = jQuery('<th></th>');
		thLabel.append(_labelCalendar);
		thLabel.css('width', _sizeBorder * 4 + 'px');		
		tr.append(thLabel);

		//create button next month
		var thNext = jQuery('<th></th>');
		thNext.css('width', _sizeBorder + 'px');
		var next = jQuery('<img></img>');
		next.attr('src', meta4.mobile.getPathIconByTheme('next'));
		thNext.click(function() {
			nextMonth();
		});
		tr.append(thNext.append(next));

		//create button next month
		var thHide = jQuery('<th></th>');
		thHide.css('width', _sizeBorder + 'px');
		var hide = jQuery('<img></img>');
		hide.attr('src', meta4.mobile.getPathIconByTheme('collapse_calendar'));

		thHide.click(function() {
			jQuery(divTableData).closest('div').slideToggle('10000000000');
			
			var nameICon = hide.attr('src');
			var pos = nameICon.indexOf('/') + 1;
			nameICon = nameICon.substring(pos, nameICon.length - 6);

			if (nameICon != 'expand_calendar') {
				hide.attr('src', meta4.mobile.getPathIconByTheme('expand_calendar'));
				back.css('display', 'none');
				next.css('display', 'none');
				_labelCalendar.css('display', 'none');
			} else {
				hide.attr('src', meta4.mobile.getPathIconByTheme('collapse_calendar'));
				back.css('display', 'inline-block');
				next.css('display', 'inline-block');
				_labelCalendar.css('display', 'inline-block');
			}
		});
		tr.append(thHide.append(hide));

		theadTitle.append(tr);

		tr = jQuery('<tr></tr>');
		var j;
		for ( j = 0; j < 7; j++) {
			var th = jQuery('<th></th>');
			th.css('width', _sizeBorder+ 'px');
			var aux = _startCalendar + j;
			aux = aux % 7;
			th.text(_days[aux].substring(0, 1));
			tr.append(th);
		}

		theadDaysWeek.append(tr);
		tableControl.append(theadTitle);
		table.append(theadDaysWeek, tbody);
		divTableData.append(table);
		jQuery('#' + _divContainer).append(tableControl,divTableData);
	}

	/**
	 *Function to reset layer calendar
	 */
	function _resetCalendar() {
		paintCalendar();
	}

	/**
	 *Function to get curretn month view in calendar
	 */
	function _getCurrentMonth() {
		return {
			year : _currentYear,
			month : _currentMonth
		};
	}

	/**
	 * Function to init calendar
	 */
	function initCalendar() {

		function successInit() {

			_options.onLoadChannel();

			var node = _channelWebCalendar.getNode('SRTC_CONFIG_CALENDAR');

			//get day star calendar
			_startCalendar = parseInt(node.getValue('DAY_START_CALENDAR'), 10);

			//get name days of week
			getNameDays(node);
			//get name of months
			getNameMonths(node);

			//init structure calendar
			createStructureCalendar();

			//get definitions layers
			createDefinitionLayer();

			//paint calendar
			paintCalendar();
			
			//visibily
			jQuery('[data-role=page]').css("visibility", "visible");
		}

		var widthCell = parseInt((jQuery('#' + _divContainer).width()-20) / 7, 10);		
		_sizeBorder = parseInt((widthCell), 10);

		jQuery("#" + _divContainer).swiperight(function(){
			jQuery.mobile.loading( 'show');
			backMonth();
		});

		jQuery("#" + _divContainer).swipeleft(function(){
			jQuery.mobile.loading( 'show');
			nextMonth();
		});

		//get channel web calendar
		meta4.log.time('new ' + _id_channel);
		var instanceId = _id_channel+meta4.ui.language.getCodeLanguage(); //we add the language code to the instance, in order to ensure that we will use other instance in case of change of language without logout
		_channelWebCalendar = new meta4.M4Object(_id_channel,instanceId);
		meta4.log.timeEnd('new ' + _id_channel);

		var args = [];
		var startDate = formatDateISO(_currentYear, _currentMonth, 1);
		var endDate = formatDateISO(_currentYear, _currentMonth, getDaysInMonth(_currentYear, _currentMonth));
		args.push(startDate, endDate);

		
		//get curretn month
		var request = new meta4.M4Request(_channelWebCalendar, 'SRTC_LAYER_DATA', 'LOAD_LAYER_DATA', args);
		meta4.mobile.data.execute(request, successInit);

	}

	/**
	 * Function to load channel metadata of calendar and init when this is loaded
	 */
	function loadMetadataCalendar() {

		/*
		 * Function that is after executed load metadata
		 */
		function onMetadataSuccess(ref) {
			initCalendar();
		}
	
		//load all channels
		var meta4ObjectIds = [];
		meta4ObjectIds.push(_id_channel);

		meta4.mobile.data.loadMetadata(meta4ObjectIds, onMetadataSuccess);

	}

	//create event to change size when change orientation
	jQuery(window).on("orientationchange", function(event) {		
		var widthCell = parseInt((jQuery('#' + _divContainer).width()-20) / 7, 10);		
		_sizeBorder = parseInt((widthCell), 10);
		_resetCalendar();
	});

	//init calendar when load metadata
	loadMetadataCalendar();

	return {
		getObjDay : function(date) {
			return _getObjDay(date);
		},
		paintLayer : function(startDate, endDate, idLayer, startHalf, endHalf) {
			_paintLayer(startDate, endDate, idLayer, startHalf, endHalf);
		},
		removeLayer : function(startDate, endDate, idLayer, startHalf, endHalf) {
			_removeLayer(startDate, endDate, idLayer, startHalf, endHalf);
		},
		disableLayer : function(idLayer) {
			_disableLayer(idLayer);
		},
		activateLayer : function(idLayer) {
			_activateLayer(idLayer);
		},
		getDateFirstDay : function() {
			return _getDateFirstDay();
		},
		getDateLastDay : function() {
			return _getDateLastDay();
		},
		getCurrentMonth : function() {
			return _getCurrentMonth();
		},
		getChannelWebCalendar : function() {
			return _channelWebCalendar;
		},
		setNavigateBackMonth : function(argBoolean) {
			_setNavigateBackMonth(argBoolean);
		},
		setNavigateNextMonth : function(argBoolean) {
			_setNavigateNextMonth(argBoolean);
		},
		showHideButtonCollapse : function(argBoolean) {
			_showHideButtonCollapse(argBoolean);
		},
		resetCalendar : function() {
			_resetCalendar();
		},
		getNameDay : function(pos) {
			return _days[pos];
		},
		getNameMonth : function(pos) {
			return _months[pos];
		}
	};

};

