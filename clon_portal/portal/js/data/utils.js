/*
 @(#)FileVersion: 811.000.025
 @(#)FileDescription: 
 @(#)CompanyName: Meta4 Spain, S.A.
 @(#)LegalCopyright: (c)2014
 @(#)ProductName: PeopleNet KSystem
 @(#)ProductVersion: 8.1SP1
 @(#)InternalName: utils.js
 @(#)Date: 01/01/2014
 */

/*global $, $$, Element,Class, Options, Events*/

//@ sourceURL=meta4.data.utils.js

var meta4 = meta4 || {};

meta4.data = meta4.data || {};

/**
 *This object is only to create common functions to other object that will inherit
 */
meta4.data.utils = ( function() {'use strict';

		var M4DataType = {
			Null : "0",
			FixedString : "1",
			VariableString : "2",
			Long : "3",
			Date : "4",
			DateTime : "5",
			Number : "6",
			Variant : "7",
			Currency : "8",
			NumberVariant : "9",
			Blob : "10",
			BinaryString : "11",
			Hour : "12",
			UnicodeVariableString : "13",
			UnicodeLong : "14",
			UnicodeVariant : "15",
			UnicodeFixedString : "16",
			HourInterval : "17"
		};

		/**
		 *function to get the date according to the configuration
		 */
		var getDateFormat = function(date, format) {

			function replaceAll(text, search, newstring) {
				var out = text.replace(new RegExp(search, 'g'), newstring);
				return out;
			}

			var numberDay = ("0" + date.getDate()).slice(-2);
			var numberDayWeek = date.getDay();
			var numberMonth = ("0" + (date.getMonth() + 1)).slice(-2);
			var numberYear = date.getFullYear();

			format = format.replace('dd', numberDay);
			format = format.replace('MM', numberMonth);
			format = format.replace('yyyy', numberYear);

			format = replaceAll(format, "'", '');

			return format;
		};

		

		function maxValue(precision) {
			var i;
			var number = '';
			for ( i = 0; i < precision; i++) {
				number = number + '9';
			}

			return number;
		}

		/**
		 *Function to compare tow date. Convert date in ISO and compare
		 */
		function compareDate(date1, date2, argCompare) {

			if ( date1 instanceof Date) {
				date1 = date1.getTime();
			} else {
				//delete string, dont work IE
				var strgDate1 = setDateToIso(date1).replace(' 00:00:00', '');
				date1 = new Date(strgDate1).getTime();
			}

			if ( date2 instanceof Date) {
				date2 = date2.getTime();
			} else {
				//delete string, dont work IE
				var strgDate2 = setDateToIso(date2).replace(' 00:00:00', '');
				date2 = new Date(strgDate2).getTime();
			}

			if (argCompare === '>') {
				if (date1 > date2 === true) {
					return true;
				} else {
					return false;
				}
			}

			if (argCompare === '<') {
				if (date1 < date2 === true) {
					return true;
				} else {
					return false;
				}
			}

			if (argCompare === '>=') {
				if (date1 >= date2 === true) {
					return true;
				} else {
					return false;
				}
			}

			if (argCompare === '<=') {
				if (date1 <= date2 === true) {
					return true;
				} else {
					return false;
				}
			}

			if (argCompare === '=') {
				if (date1 == date2 === true) {
					return true;
				} else {
					return false;
				}
			}
		}

		function setDateToIso(date) {
		    
		    if (meta4.session.paramApp){
    			var separator = meta4.session.paramApp.getDateSeparator();
    			var format = meta4.session.paramApp.getDate();
    
    			var arrayFormat = format.split(separator);
    			var arrayDate = date.split(separator);
    			var i;
    			var dateISo;
    			var day;
    			var month;
    			var year;
    
    			for ( i = 0; i < arrayFormat.length; i++) {
    				if (arrayFormat[i] == 'dd') {
    					day = arrayDate[i];
    				}
    				if (arrayFormat[i] == 'MM') {
    					month = arrayDate[i];
    				}
    				if (arrayFormat[i] == 'yyyy') {
    					year = arrayDate[i];
    				}
    			}
    
    			return year + '-' + month + '-' + day + ' 00:00:00';
            }else{
                //format by default is iso.
                return date;
            }		
        }

        function getNumberValue(itemValue){
            
            if (itemValue == 'null' || itemValue == null || itemValue === '') {
                //devolvemos vacio para que no pinte nada...
                return '';
            }

            //if is not number return value
            if (isNaN(itemValue)) {
                return itemValue;
            }

            if (meta4.session.paramApp){
                var numberFormat = meta4.session.paramApp.getNumber();
                itemValue = parseFloat(itemValue);
                itemValue = itemValue.m4format(numberFormat);
            }else{
                //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
                //ie 9 - 10 not supported
                //new Intl.NumberFormat().format(itemValue)
                //parseFloat(itemValue,10).toLocaleString()
            }
            /*
            var precision = parseInt(item.getProperty("Precision"), 10);
            var scale = parseInt(item.getProperty("Scale"), 10);

            var value = parseFloat(itemValue);

            value = value.toFixed(scale);

            value = parseFloat(value);*/

            //convert to string
            return itemValue;
        }
        
        function getDateValue(itemValue){
            
            var format;
            
            if (itemValue !== null) {
                
                //itemValue = Date.parse(itemValue);
                //itemValue = itemValue.substring(0, 10).replace(/-/g, "/");
                //var date = new Date(itemValue);

                if (isFinite(itemValue)) {
                    if ((itemValue.getFullYear() == '1800' && itemValue.getMonth() == '0' && itemValue.getDate() == '1' ) || (itemValue.getFullYear() == '4000' && itemValue.getMonth() == '0' && itemValue.getDate() == '1')) {
                        return '';
                    }

                    if (meta4.session.paramApp){
                        
                        format = meta4.session.paramApp.getDate();
                        
                    }else{
                        
                        format = 'yyyy-MM-dd';
                        
                        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
                        //new Intl.DateTimeFormat().format(new Date(itemValue))
                        
                        //return (new Date(Date.parse(itemValue))).toLocaleDateString();
                        //return itemValue;
                    }
                    
                    return getDateFormat(itemValue, format);
                }
            }
            return '';
        }
        
        function getStringValue(itemValue){
            if (itemValue === null) {
                return '';
            }
            
            return itemValue;
        }
        
		function getValue(node, itemId) {
			
			var item = node.getItemMetadata(itemId);

			var itemValue = node.getValuePlain(itemId);

			var itemM4DataType = item.getProperty("M4Type");

			/*if (!itemValue) {
			 console.log(node.getId() + " " + itemId);
			 }*/
			if (itemM4DataType === M4DataType.Number) {
				return getNumberValue(itemValue);
			}

			if (itemM4DataType === M4DataType.Date) {
                return getDateValue(itemValue);
			}

			if (itemM4DataType === M4DataType.VariableString || itemM4DataType === M4DataType.FixedString) {
				return getStringValue(itemValue)
			}

			return itemValue;

		}

		function setValue(node, itemId, value) {

			if (value === '') {
				value = null;
			}

			var item = node.getItemMetadata(itemId);
			//get item type
			var itemM4DataType = item.getProperty("M4Type");

			if (itemM4DataType === M4DataType.Date) {

				if (value !== null) {
					var dateIso = setDateToIso(value);

					node.setValue(itemId, dateIso);
					return dateIso;
				} else {
					node.setValue(itemId, value);
				}
			} else {

				//number string, ...
				node.setValue(itemId, value);
				return value;
			}
		}

		/**
		 * Function to check if item is inside the list.
		 *
		 * @param listItem: list of item
		 * @param item:
		 */
		var isAppendItem = function(listItem, item) {
			var i;

			for ( i = 0; i < listItem.length; i++) {
				if (listItem[i] === item) {
					return true;
				}
			}
			return false;
		};

		/**
		 * Get visible items from a node sorted by Order item property
		 * FUNCTION PRIVILEAGED
		 * @param node: node to represents
		 */
		function getVisibleItems(m4Node) {

			var i, j;
			//add list item
			var visibleItems = [];

			var SortableItem = function(itemId, itemPos) {
				this.id = itemId;
				this.position = itemPos;
			};

			for ( i = 0; i < m4Node.getNItems(); i++) {
				var item = m4Node.getItemMetadataByIndex(i);

				var idItem = item.getProperty("Id");
				var orderItem = item.getProperty("Order");
				var visibility = item.getProperty("IsVisible");

				if (visibility === "1") {
					var visibleItem = new SortableItem(idItem, orderItem);
					visibleItems.push(visibleItem);
				}
			}

			//order list
			visibleItems = visibleItems.sort(function(x, y) {
				return x.position - y.position;
			});

			var items = [];

			for ( i = 0, j = visibleItems.length; i < j; i++) {
				items.push(visibleItems[i].id);
			}

			return items;

		}

		/**
		 * Get pk items from a node sorted by Order item property
		 * @param node: node to represents
		 */
		function getPkItems(node) {

			//add list item
			var i, j;
			var pkItems = [];
			var pk = [];

			var SortableItem = function(itemId, itemPos) {
				this.id = itemId;
				this.position = itemPos;
			};

			for ( i = 0; i < node.getNItems(); i++) {

				var item = node.getItemMetadataByIndex(i);

				var idItem = item.getProperty("Id");
				var orderItem = item.getProperty("Order");
				var isPk = item.getProperty("IsPK");

				if (isPk === "1") {
					var pkItem = new SortableItem(idItem, orderItem);
					pkItems.push(pkItem);
				}
			}

			//order list
			pkItems = pkItems.sort(function(x, y) {
				return x.position - y.position;
			});

			for ( i = 0, j = pkItems.length; i < j; i++) {
				pk.push(pkItems[i].id);
			}

			return pk;

		}

		/**
		 * Return an objet with pk and visible items and their values
		 * @param position: record index
		 */
		function getCurrentData(position, node, visibleItems) {
			var i;
			var data = {};
			var pkValues = [];

			node.moveTo(position);

			var pkItems = getPkItems(node);
			for ( i = 0; i < pkItems.length; i++) {
				var pkValue = node.getValue(pkItems[i]);

				var pkObj = {};
				pkObj[pkItems[i]] = pkValue;
				pkValues.push(pkObj);
			}

			var values = [];
			for ( i = 0; i < visibleItems.length; i++) {
				var value = node.getValue(visibleItems[i]);

				values.push(value);
			}

			//data.pks = pkItems;
			data.pkValues = pkValues;
			data.values = values;

			return data;
		}

		/**
		 *Function to check if long item is valid.
		 * if the length of the item is less than the length of the text event is not propagate.
		 */
		function checkLongItem(node, idItem, event) {

			var TYPE_STRING = "2";
			var TYPE_NUMBER = "6";
			var TYPE_DATE = "4";

			var item = node.getItemMetadata(idItem);

			var precision = parseInt(item.getProperty("Precision"), 10);
			var itemType = item.getProperty("M4Type");

			if (itemType == TYPE_NUMBER) {
				return true;
			} else if (itemType == TYPE_STRING) {
				// character number, string
				if (event.code >= 48 && event.code <= 126) {
					if (precision <= event.target.get('value').length) {
						return false;
					} else {
						return true;
					}
				} else {
					return true;
				}
			}
		}

		/**
		 * function to check if the value introdudced is valid
		 * if item is mandatory and value is null return false
		 */
		function checkInputValue(node, idItem, value) {

			var TYPE_STRING = "2";
			var TYPE_NUMBER = "6";
			var TYPE_DATE = "4";
			var TYPE_CURRENCY = "8";

			var item = node.getItemMetadata(idItem);
			var itemType = item.getProperty("M4Type");

			if (itemType === TYPE_NUMBER || itemType === TYPE_CURRENCY) {

				//comprobamos que es un numero
				if (isNaN(value)) {
					return false;
				}

				//parte entera
				var precision = parseInt(item.getProperty("Precision"), 10);
				//decimal
				var scale = parseInt(item.getProperty("Scale"), 10);

				var integer = precision - scale;

				//char separador decimal
				var decimalSeparator = getSepDecimal();
				
				var value = value + '';
				var indexSep = value.indexOf(decimalSeparator);
				if (indexSep !== -1) {
					//check integer and scale

					var parteEntera = value.substring(0, indexSep);
					if (parteEntera.length > integer) {
						return false;
					}

					var parteDecimal = value.substring(indexSep + 1, value.length);
					if (parteDecimal.length > scale) {
						return false;
					}

				} else {
					//check only integer, no decimal
					var parteEntera = value;
					if (parteEntera.length > integer) {
						return false;
					}
				}

				return true;

			}

			if (itemType == TYPE_STRING) {
				return true;
			}

			if (itemType == TYPE_DATE) {
				//comprobación de fechas sin hacer
				return true;
			}

			return false;
		}

        function getSepDecimal(){
            if (meta4.session.paramApp){
                return meta4.session.paramApp.getSepDecimal();
            }else{
                //Iso mientras no formateemos a locale
                return '.';
            }
        }
        
		/**
		 *Function to check if value is valid to item node
		 * if item is mandatory and value is null return false
		 */
		function checkValidValue(node, idItem) {

			var TYPE_STRING = "2";
			var TYPE_NUMBER = "6";
			var TYPE_DATE = "4";

			var item = node.getItemMetadata(idItem);
			var itemType = item.getProperty("M4Type");

			var value = meta4.data.utils.getValue(node, idItem);

			var notNull = item.getProperty("ClientNotNull");
			if (notNull == '1') {
				if (value == null || value === '') {
					return false;
				}
			} else {
				if (value == null || value === '') {
					return true;
				}
			}

			if (itemType == TYPE_NUMBER) {

				//comprobamos que es un numero
				if (isNaN(value)) {
					return false;
				}

				//parte entera
				var precision = parseInt(item.getProperty("Precision"), 10);
				//decimal
				var scale = parseInt(item.getProperty("Scale"), 10);

				var integer = precision - scale;

				//char separador decimal
				var decimalSeparator = getSepDecimal();

				var value = value + '';
				var indexSep = value.indexOf(decimalSeparator);
				if (indexSep !== -1) {
					//check integer and scale

					var parteEntera = value.substring(0, indexSep);
					if (parteEntera.length > integer) {
						return false;
					}

					var parteDecimal = value.substring(indexSep + 1, value.length);
					if (parteDecimal.length > scale) {
						return false;
					}

				} else {
					//check only integer, no decimal
					var parteEntera = value;
					if (parteEntera.length > integer) {
						return false;
					}
				}

				return true;

			}

			if (itemType == TYPE_STRING) {
				return true;
			}

			if (itemType == TYPE_DATE) {
				//comprobación de fechas sin hacer
				return true;
			}

			return false;
		}

		/**
		 * Search an error
		 */
		function searchError(errors, idItem, index) {
			var i;
			for ( i = 0; i < errors.length; i++) {
				if (errors[i].idItem == idItem && errors[i].index == index) {
					return errors[i];
				}
			}
			return null;
		}

		/**
		 * Function to check if node have value null, in item that don´t allow
		 * @param node: node to check if have null value
		 * @return: true if all item have value, false if at least one have null value
		 */
		function checkCurrentNullValues(node) {

			//store ids item that dont allow null
			var itemsNotNull = [];
			//store errors

			var errorsList = [];

			var listItems = getVisibleItems(node);
			var i;
			for ( i = 0; i < listItems.length; i++) {
				//object item
				var item = node.getItemMetadata(listItems[i]);
				//type item
				var itemType = item.getProperty("ItemType");

				//only fields
				var notNull = item.getProperty("ClientNotNull");
				if (notNull == '1') {
					//add item to list
					itemsNotNull.push(item.getProperty("Id"));
				}

			}

			var j;
			//check null values

			if (node.isToDelete() == false) {
				//check list items not null
				for ( j = 0; j < itemsNotNull.length; j++) {
					var value = node.getValue(itemsNotNull[j]);
					if (value == null || value == '') {
						var error = new ValidationError(node.getId(), itemsNotNull[j], node.getCurrent(), 'isNull');
						errorsList.push(error);
					} else {
						//if is not null, check if value is valid
						var checkValid = checkValidValue(node, itemsNotNull[j]);
						if (checkValid == false) {
							var error = new ValidationError(node.getId(), itemsNotNull[j], node.getCurrent(), 'invalidValue');
							errorsList.push(error);
						}
					}
				}
			}
			return errorsList;
		}

		/**
		 * Function to check if node have value null, in item that don´t allow, This function use checkCurrentNullValues
		 * @param node: node to check if have null value
		 * @return: true if all item have value, false if at least one have null value
		 */
		function checkNullValues(node) {

			//store ids item that dont allow null
			var itemsNotNull = [];
			//store errors

			var errorsList = [];

			meta4.widget.binding.offBinding();
			var initialPos = node.getCurrent();

			var iNode;
			for ( iNode = 0; iNode < node.count(); iNode++) {
				//move
				node.moveTo(iNode);
				//check error current
				var err = checkCurrentNullValues(node);
				errorsList = errorsList.concat(err);
			}
			node.moveTo(initialPos);
			//off binding
			meta4.widget.binding.onBinding();

			return errorsList;
		}

		/**
		 * Function to check the values ​​of the node. only checks the registry in which is positioned
		 * 1º check if value is null
		 * 2º check if value is valid
		 * 3º check the value with funtion passed as parameter
		 * @param node of meta4object
		 * @param options [ValidationItem]
		 * return [ValidationError]
		 */
		function checkCurrentNodeValues(node, options) {

			var errorsList = [];
			//store errors

			if (options === undefined || options === null) {
				var options = [];
			}

			var objectError = function(idNode, item, index, idValidation) {
				this.idNode = idNode;
				this.item = item;
				this.index = index;
				this.idValidation = idValidation;
			};

			//get errors if value is invalid or is null
			errorsList = checkCurrentNullValues(node);

			var indexOpt;

			for ( indexOpt = 0; indexOpt < options.length; indexOpt++) {

				var objValidation = options[indexOpt];

				if (node.isToDelete() == false) {
					//buscamos que no tenga ya un error
					//buscamos si ya hay un error con el item
					if (searchError(errorsList, objValidation.idItem, node.getCurrent()) == null) {
						var value = meta4.data.utils.getValue(node, objValidation.idItem);
						var checkFuncValue = objValidation.functionValidation.call(this, value, node, objValidation.idItem);
						if (checkFuncValue == false) {
							var error = new ValidationError(node.getId(), objValidation.idItem, node.getCurrent(), objValidation.idValidation);
							errorsList.push(error);
						}
					}
				}
			}
			return errorsList;
		}

		/**
		 * Function that checks all the values ​​of a node, use the function checkCurrentNodeValues
		 * 1º check if value is null
		 * 2ª check if value is valid
		 * 3ª check the value with funtion passed as parameter
		 * @param node of meta4object
		 * @param options [ValidationItem]
		 * return [ValidationError]
		 */
		function checkNodeValues(node, options) {

			var errorsList = [];
			//store errors

			if (options === undefined || options === null) {
				var options = [];
			}

			//off binding
			meta4.widget.binding.offBinding();
			var initialPos = node.getCurrent();

			var iNode;

			for ( iNode = 0; iNode < node.count(); iNode++) {
				//move
				node.moveTo(iNode);
				var err = checkCurrentNodeValues(node, options);
				errorsList = errorsList.concat(err);
			}

			node.moveTo(initialPos);
			//off binding
			meta4.widget.binding.onBinding();
			return errorsList;
		}

		function findRegister(node, item, value) {
			var i;
			var oldPos = node.getCurrent();
			for ( i = 0; i < node.count(); i++) {
				node.moveTo(i);
				var auxValue = meta4.data.utils.getValue(node, item);
				if (value === auxValue) {
					node.moveTo(oldPos);
					return i;
				}
			}
			node.moveTo(oldPos);
			return -1;
		}

		/**
		 *Object error to control node
		 */
		function ValidationError(idNode, idItem, index, idValidation) {
			this.idNode = idNode;
			this.idItem = idItem;
			this.index = index;
			this.idValidation = idValidation;
		}

		/**
		 *Object validation item
		 */
		function ValidationItem(idValidation, idItem, functionValidation) {
			this.idValidation = idValidation;
			this.idItem = idItem;
			this.functionValidation = functionValidation;
		}

		return {
			getValue : getValue,
			setValue : setValue,
			findRegister : findRegister,
			getVisibleItems : getVisibleItems,
			getPkItems : getPkItems,
			getCurrentData : getCurrentData,
			checkInputValue : checkInputValue,
			checkValidValue : checkValidValue,
			checkLongItem : checkLongItem,
			checkCurrentNullValues : checkNullValues,
			checkNullValues : checkNullValues,
			checkCurrentNodeValues : checkCurrentNodeValues,
			checkNodeValues : checkNodeValues,
			compareDate : compareDate,
			ValidationError : ValidationError,
			ValidationItem : ValidationItem
		};

	}());

