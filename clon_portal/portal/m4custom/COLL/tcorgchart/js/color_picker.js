/**
	@(#)FileVersion: 812.000.042
	@(#)FileDescription:File Javascript that show palette of colors
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: color_picker.js
	@(#)Date: 08/09/2012
*/


// A few configuration settings
var CROSSHAIRS_LOCATION =  _AbsolutePathTemplate+'images/crosshairs.png';
var HUE_SLIDER_LOCATION =  _AbsolutePathTemplate+'images/h.png';
var HUE_SLIDER_ARROWS_LOCATION =  _AbsolutePathTemplate+'images/position.png';
var SAT_VAL_SQUARE_LOCATION =  _AbsolutePathTemplate+'images/sv.png';
var BUTON_CLOSE_LOCATION =  _AbsolutePathTemplate+'images/close-panel.svg';
var BUTON_UNDO_LOCATION =  _AbsolutePathTemplate+'images/undo.svg';
var HEIGHT_OF_OBJ = 25;//manualy move the the color picker top or botom
var WIDTH_OF_OBJ = 150; //manualy move the color picker left or right


//Here are some boring utility functions. The real code comes later.
var is_div_init = false;
function hexToRgb(hex_string, default_) {
	if (default_ == undefined) {
		default_ = null;
	}

	if (hex_string.substr(0, 1) == '#') {
		hex_string = hex_string.substr(1);
	}

	var r;
	var g;
	var b;
	if (hex_string.length == 3) {
		r = hex_string.substr(0, 1);
		r += r;
		g = hex_string.substr(1, 1);
		g += g;
		b = hex_string.substr(2, 1);
		b += b;
	} else if (hex_string.length == 6) {
		r = hex_string.substr(0, 2);
		g = hex_string.substr(2, 2);
		b = hex_string.substr(4, 2);
	} else {
		return default_;
	}

	r = parseInt(r, 16);
	g = parseInt(g, 16);
	b = parseInt(b, 16);
	if (isNaN(r) || isNaN(g) || isNaN(b)) {
		return default_;
	} else {
		return {
			r : r / 255,
			g : g / 255,
			b : b / 255
		};
	}
}

function rgbConvert(str) {
	   str = str.replace(/rgb\(|\)/g, "").split(",");
	   str[0] = parseInt(str[0], 10).toString(16).toLowerCase();
	   str[1] = parseInt(str[1], 10).toString(16).toLowerCase();
	   str[2] = parseInt(str[2], 10).toString(16).toLowerCase();
	   str[0] = (str[0].length == 1) ? '0' + str[0] : str[0];
	   str[1] = (str[1].length == 1) ? '0' + str[1] : str[1];
	   str[2] = (str[2].length == 1) ? '0' + str[2] : str[2];
	   return ('#' + str.join(""));
	}

function rgbToHex(r, g, b, includeHash) {
	r = Math.round(r * 255);
	g = Math.round(g * 255);
	b = Math.round(b * 255);
	if (includeHash == undefined) {
		includeHash = true;
	}

	r = r.toString(16);
	if (r.length == 1) {
		r = '0' + r;
	}
	g = g.toString(16);
	if (g.length == 1) {
		g = '0' + g;
	}
	b = b.toString(16);
	if (b.length == 1) {
		b = '0' + b;
	}
	return ((includeHash ? '#' : '') + r + g + b).toUpperCase();
}

var arVersion = navigator.appVersion.split("MSIE");
var version = parseFloat(arVersion[1]);

function fixPNG(myImage) {
	if ((version >= 5.5) && (version < 7) && (document.body.filters)) {
		var node = document.createElement('span');
		node.id = myImage.id;
		node.className = myImage.className;
		node.title = myImage.title;
		node.style.cssText = myImage.style.cssText;
		node.style
				.setAttribute('filter',
						"progid:DXImageTransform.Microsoft.AlphaImageLoader"
								+ "(src=\'" + myImage.src
								+ "\', sizingMethod='scale')");
		node.style.fontSize = '0';
		node.style.width = myImage.width.toString() + 'px';
		node.style.height = myImage.height.toString() + 'px';
		node.style.display = 'inline-block';
		return node;
	} else {
		return myImage.cloneNode(false);
	}
}

function trackDrag(node, handler) {
	function fixCoords(x, y) {
		var nodePageCoords = pageCoords(node);
		x = (x - nodePageCoords.x)
				+ (document.documentElement.scrollLeft || document.body.scrollLeft);
		y = (y - nodePageCoords.y)
				+ (document.documentElement.scrollTop || document.body.scrollTop);
		if (x < 0)
			x = 0;
		if (y < 0)
			y = 0;
		if (x > node.offsetWidth - 1)
			x = node.offsetWidth - 1;
		if (y > node.offsetHeight - 1)
			y = node.offsetHeight - 1;
		return {
			x : x,
			y : y
		};
	}
	function mouseDown(ev) {
		var coords = fixCoords(ev.clientX, ev.clientY);
		var lastX = coords.x;
		var lastY = coords.y;
		handler(coords.x, coords.y);

		function moveHandler(ev) {
			var coords = fixCoords(ev.clientX, ev.clientY);
			if (coords.x != lastX || coords.y != lastY) {
				lastX = coords.x;
				lastY = coords.y;
				handler(coords.x, coords.y);
			}
		}
		function upHandler(ev) {
			myRemoveEventListener(document, 'mouseup', upHandler);
			myRemoveEventListener(document, 'mousemove', moveHandler);
			myAddEventListener(node, 'mousedown', mouseDown);
		}
		myAddEventListener(document, 'mouseup', upHandler);
		myAddEventListener(document, 'mousemove', moveHandler);
		myRemoveEventListener(node, 'mousedown', mouseDown);
		if (ev.preventDefault)
			ev.preventDefault();
	}
	myAddEventListener(node, 'mousedown', mouseDown);
	node.onmousedown = function(e) {
		return false;
	};
	node.onselectstart = function(e) {
		return false;
	};
	node.ondragstart = function(e) {
		return false;
	};
}

var eventListeners = [];

function findEventListener(node, event, handler) {
	var i;
	for (i in eventListeners) {
		if (eventListeners[i].node == node && eventListeners[i].event == event
				&& eventListeners[i].handler == handler) {
			return i;
		}
	}
	return null;
}
function myAddEventListener(node, event, handler) {
	if (findEventListener(node, event, handler) != null) {
		return;
	}

	if (!node.addEventListener) {
		node.attachEvent('on' + event, handler);
	} else {
		node.addEventListener(event, handler, false);
	}
	eventListeners.push({
		node : node,
		event : event,
		handler : handler
	});
}

function removeEventListenerIndex(index) {
	var eventListener = eventListeners[index];
	delete eventListeners[index];

	if (!eventListener.node.removeEventListener) {
		eventListener.node.detachEvent('on' + eventListener.event,
				eventListener.handler);
	} else {
		eventListener.node.removeEventListener(eventListener.event,
				eventListener.handler, false);
	}
}

function myRemoveEventListener(node, event, handler) {
	removeEventListenerIndex(findEventListener(node, event, handler));
}

function cleanupEventListeners() {
	var i;
	for (i = eventListeners.length; i > 0; i--) {
		if (eventListeners[i] != undefined) {
			removeEventListenerIndex(i);
		}
	}
}
myAddEventListener(window, 'unload', cleanupEventListeners);

//This copyright statement applies to the following two functions,
//which are taken from MochiKit.
//
//Copyright 2005 Bob Ippolito <bob@redivi.com>
//
//Permission is hereby granted, free of charge, to any person obtaining
//a copy of this software and associated documentation files (the
//"Software"), to deal in the Software without restriction, including
//without limitation the rights to use, copy, modify, merge, publish,
//distribute, sublicense, and/or sell copies of the Software, and to
//permit persons to whom the Software is furnished to do so, subject
//to the following conditions:
//
//The above copyright notice and this permission notice shall be
//included in all copies or substantial portions of the Software.
//
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
//BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
//ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
//CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

function hsvToRgb(hue, saturation, value) {
	var red;
	var green;
	var blue;
	if (value == 0.0) {
		red = 0;
		green = 0;
		blue = 0;
	} else {
		var i = Math.floor(hue * 6);
		var f = (hue * 6) - i;
		var p = value * (1 - saturation);
		var q = value * (1 - (saturation * f));
		var t = value * (1 - (saturation * (1 - f)));
		switch (i) {
		case 1:
			red = q;
			green = value;
			blue = p;
			break;
		case 2:
			red = p;
			green = value;
			blue = t;
			break;
		case 3:
			red = p;
			green = q;
			blue = value;
			break;
		case 4:
			red = t;
			green = p;
			blue = value;
			break;
		case 5:
			red = value;
			green = p;
			blue = q;
			break;
		case 6: // fall through
		case 0:
			red = value;
			green = t;
			blue = p;
			break;
		}
	}
	return {
		r : red,
		g : green,
		b : blue
	};
}

function rgbToHsv(red, green, blue) {
	var max = Math.max(Math.max(red, green), blue);
	var min = Math.min(Math.min(red, green), blue);
	var hue;
	var saturation;
	var value = max;
	if (min == max) {
		hue = 0;
		saturation = 0;
	} else {
		var delta = (max - min);
		saturation = delta / max;
		if (red == max) {
			hue = (green - blue) / delta;
		} else if (green == max) {
			hue = 2 + ((blue - red) / delta);
		} else {
			hue = 4 + ((red - green) / delta);
		}
		hue /= 6;
		if (hue < 0) {
			hue += 1;
		}
		if (hue > 1) {
			hue -= 1;
		}
	}
	return {
		h : hue,
		s : saturation,
		v : value
	};
}

function pageCoords(node) {
	var x = node.offsetLeft;
	var y = node.offsetTop;
	var parent = node.offsetParent;
	while (parent != null) {
		x += parent.offsetLeft;
		y += parent.offsetTop;
		parent = parent.offsetParent;
	}
	return {
		x : x,
		y : y
	};
}

//The real code begins here.
var huePositionImg = document.createElement('img');
huePositionImg.galleryImg = false;
huePositionImg.width = 35;
huePositionImg.height = 11;
huePositionImg.src = HUE_SLIDER_ARROWS_LOCATION;
huePositionImg.style.position = 'absolute';
huePositionImg.style.left = '0px';


var hueSelectorImg = document.createElement('img');
hueSelectorImg.galleryImg = false;
hueSelectorImg.width = 35;
hueSelectorImg.height = 200;
hueSelectorImg.src = HUE_SLIDER_LOCATION;
hueSelectorImg.style.display = 'block';

var satValImg = document.createElement('img');
satValImg.galleryImg = false;
satValImg.width = 200;
satValImg.height = 200;
satValImg.src = SAT_VAL_SQUARE_LOCATION;
satValImg.style.display = 'block';

var crossHairsImg = document.createElement('img');
crossHairsImg.galleryImg = false;
crossHairsImg.width = 21;
crossHairsImg.height = 21;
crossHairsImg.src = CROSSHAIRS_LOCATION;
crossHairsImg.style.position = 'absolute';
var buttonCloseImg = document.createElement('img');
buttonCloseImg.galleryImg = false;
buttonCloseImg.src = BUTON_CLOSE_LOCATION;
buttonCloseImg.style.cursor = 'pointer';
buttonCloseImg.onclick = hideColorPicker;
buttonCloseImg.style.width = '17px';
buttonCloseImg.style.height = '22px';
buttonCloseImg.style.position = 'absolute';
buttonCloseImg.style.left = '10px';
buttonCloseImg.style.top = '0px';
buttonCloseImg.title= _msgCloseColor;




function makeUndoSelector(inputBox,selectorDiv,colorOld) {	
			
	var buttonUndoImg = document.createElement('img');
	buttonUndoImg.galleryImg = false;
	buttonUndoImg.src = BUTON_UNDO_LOCATION;
	buttonUndoImg.style.cursor = 'pointer';
	buttonUndoImg.style.width = '14px';
	buttonUndoImg.style.height = '22px';
	buttonUndoImg.title= _msgReloadColor;
	buttonUndoImg.onclick = undoColor;
	buttonUndoImg.style.position = 'absolute';
	(_isRtlLanguaje) ? buttonUndoImg.style.right = '200px' : buttonUndoImg.style.left = '200px';
	buttonUndoImg.style.top = '0px';
	
	selectorDiv.appendChild(buttonUndoImg);
	
	function undoColor() {
		
		changeColor(colorOld, inputBox.id);
		inputBox.style.background = colorOld;
		hideColorPicker();
		
	}
	return buttonUndoImg;
}

function makeColorSelector(inputBox) {
	var rgb, hsv
	
	
	function colorChanged() {
		is_div_init = false;
		var hex = rgbToHex(rgb.r, rgb.g, rgb.b);

		var hueRgb = hsvToRgb(hsv.h, 1, 1);
		var hueHex = rgbToHex(hueRgb.r, hueRgb.g, hueRgb.b);
		//alert(hex);
		inputBox.style.background = hex;
		// inputBox.value =hex;
		// popox ideea
		if (((rgb.r * 100 + rgb.g * 100 + rgb.b * 100) / 3) < 65) //change text color to white if the background color is to dark
			inputBox.style.color = "#fff";
		else
			inputBox.style.color = "#000";

		satValDiv.style.background = hueHex;
		crossHairs.style.left = ((hsv.v * 199) - 10).toString() + 'px';
		crossHairs.style.top = (((1 - hsv.s) * 199) - 10).toString() + 'px';
		huePos.style.top = ((hsv.h * 199) - 5).toString() + 'px';
		is_div_init = true;
		changeColor(hex, inputBox.id);
	}
	function rgbChanged() {
		hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
		colorChanged();
	}
	function hsvChanged() {
		rgb = hsvToRgb(hsv.h, hsv.s, hsv.v);
		colorChanged();
	}

	var colorSelectorDiv = document.createElement('div');
	colorSelectorDiv.id='colorSelectorDiv';
	colorSelectorDiv.style.paddingLeft = '5px';

	colorSelectorDiv.style.paddingRight = '5px';
	colorSelectorDiv.style.paddingBottom = '5px';
	colorSelectorDiv.style.position = 'relative';
	colorSelectorDiv.style.height = '220px';
	colorSelectorDiv.style.width = '210px';

	var butonclose = document.createElement('div');

	butonclose.style.position = 'relative';	
	butonclose.style.height = '10px';
	butonclose.style.width = '22px';
	(_isRtlLanguaje) ? butonclose.style.right = "225px" : butonclose.style.left = "210px";
	
	butonclose.appendChild(buttonCloseImg);	

	colorSelectorDiv.appendChild(butonclose);

	var satValDiv = document.createElement('div');
	satValDiv.style.position = 'relative';
	satValDiv.style.diplay = "inline";
	satValDiv.style.top = '15px';
	satValDiv.style.width = '200px';
	satValDiv.style.height = '200px';
	var newSatValImg = fixPNG(satValImg);
	satValDiv.appendChild(newSatValImg);
	var crossHairs = crossHairsImg.cloneNode(false);
	satValDiv.appendChild(crossHairs);
	function satValDragged(x, y) {
		hsv.s = 1 - (y / 199);
		hsv.v = (x / 199);
		hsvChanged();
	}
	trackDrag(satValDiv, satValDragged)

	colorSelectorDiv.appendChild(satValDiv);

	var hueDiv = document.createElement('div');
	hueDiv.style.position = 'absolute';
	hueDiv.style.diplay = "inline";
	(_isRtlLanguaje) ? hueDiv.style.right = '210px' : hueDiv.style.left = '210px';
	hueDiv.style.top = '25px';
	hueDiv.style.width = '35px';
	hueDiv.style.height = '200px';
	var huePos = fixPNG(huePositionImg);
	hueDiv.appendChild(hueSelectorImg.cloneNode(false));
	hueDiv.appendChild(huePos);
	function hueDragged(x, y) {
		is_div_init = false;
		hsv.h = y / 199;
		hsvChanged();
	}
	trackDrag(hueDiv, hueDragged);
	colorSelectorDiv.appendChild(hueDiv);

	function inputBoxChanged() {
		cod=inputBox.style.backgroundColor;
		if(cod==""){
			//Bug I.E 8
			cod="#FFFFFF";
		}
		
		if (cod.substr(0, 1) != '#') {
			cod = rgbConvert(cod);
		}		
		rgb = hexToRgb(cod, cod);
		rgbChanged();
	}
	myAddEventListener(inputBox, 'change', inputBoxChanged);
	
	inputBoxChanged();
	return colorSelectorDiv;
}

function colorPickerGetTopPos(inputObj) {

	var returnValue = inputObj.offsetTop;
	while ((inputObj = inputObj.offsetParent) != null) {
		returnValue += inputObj.offsetTop;
	}
	return returnValue;
}

function colorPickerGetLeftPos(inputObj) {
	var returnValue = inputObj.offsetLeft;
	while ((inputObj = inputObj.offsetParent) != null)
		returnValue += inputObj.offsetLeft;
	return returnValue;
}
function startColorPicker(inputObj) {	
	hideColorPicker();
	var colorOld=inputObj.style.backgroundColor;
	var color_picker_div = document.createElement('DIV');
	
	color_picker_div.style.position = 'absolute';
	(_isRtlLanguaje) ? color_picker_div.style.left = '45px' : color_picker_div.style.right = '45px';
	color_picker_div.style.top = colorPickerGetTopPos(inputObj)+ 32 + 'px';
	color_picker_div.id = 'The_colorPicker';
	color_picker_div.style.display = 'block';
	color_picker_div.style.zIndex = '20000';
	color_picker_div.style.width = '250px';
	color_picker_div.style.height = '230px';
	color_picker_div.style.backgroundColor = '#ffffff';
	color_picker_div.appendChild(makeColorSelector(inputObj));		
	color_picker_div.appendChild(makeUndoSelector(inputObj,color_picker_div,colorOld));		
	
	document.body.appendChild(color_picker_div);
	is_div_init = true;
}
function hideColorPicker() {

	if (is_div_init) {
		is_div_init = false;
		document.body.removeChild(document.getElementById('The_colorPicker'));
	}
}


function maskedHex(input) {
	var mask = '#[0-9a-fA-F]{7}';
	input.value = input.value.replace(mask, "");
}


//Copyright 2008 Sebo Zoltan <iamzoli@yahoo.com>
//
//Permission is hereby granted, free of charge, to any person obtaining
//a copy of this software and associated documentation files (the
//"Software"), to deal in the Software without restriction, including
//without limitation the rights to use, copy, modify, merge, publish,
//distribute, sublicense, and/or sell copies of the Software, and to
//permit persons to whom the Software is furnished to do so, subject
//to the following conditions:
//
//The above copyright notice and this permission notice shall be
//included in all copies or substantial portions of the Software.
//
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
//BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
//ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
//CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
