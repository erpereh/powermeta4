/*
 @(#)FileVersion: 811.000.025
 @(#)FileDescription:
 @(#)CompanyName: Meta4 Spain, S.A.
 @(#)LegalCopyright: (c)2014
 @(#)ProductName: PeopleNet KSystem
 @(#)ProductVersion: 8.1SP1
 @(#)InternalName: console.js
 @(#)Date: 01/01/2014
 */

/*global $, $$, Element,Class, Options, Events*/
var meta4 = meta4 || {};

meta4.widget = meta4.widget || {};

/**
 *This object is only to create common functions to other object that will inherit
 */
meta4.widget.console = (function() {

	var ul;

	var divParent;

	function init() {
		divParent = new Element('div', {
			'styles' : {
				'width' : '300px',
				'min-width' : '280px',
				'height' : '300px',
				'min-height' : '200px',
				'textAlign' : 'center',
				'border' : '1px solid #93a8c3',
				'boxSizing' : 'border-box',
				'top' : '20px',
				'right' : '20px',
				'backgroundColor' : 'white',
				'fontFamily' : 'Microsoft Sans Serif',
				'position' : 'fixed',
				'z-index' : 9999
			},

		});

		var divTitle = new Element('div', {
			'styles' : {
				'background-color' : '#7B93AF',
				'border-bottom' : '2px solid blue',
				'cursor' : 'move',
				'width' : '100%',
				'height' : '30px',
				'color' : 'white',
				'fontFamily' : 'Microsoft Sans Serif'
			}
		});

		var label = new Element('label', {
			'text' : 'm4Console'
		});

		divTitle.grab(label);

		var divConsole = new Element('div', {
			'styles' : {
				'width' : '100%',
				'height' : '100%',
				'margin-bottom' : '50px solid',
				'overflow' : 'auto'
			}
		});

		var divConsoleUl = new Element('div', {
			'styles' : {
				'width' : '100%',
				'position' : 'absolute',
				'top' : '30px',
				'bottom' : '50px',
				'left' : '0px',
				'right' : '0px',
				'overflow' : 'auto'
			}
		});

		var divInput = new Element('div', {
			'styles' : {
				'width' : '100%',
				'height' : '50px',
				'position' : 'absolute',
				'bottom' : '0px',
				'border-bottom' : '50px',
				'border-top' : '1px solid #93a8c3'
			},

		});

		var divResizer = new Element('div', {
			'styles' : {
				'background-color' : '#d7d8e0',
				'width' : '25px',
				'height' : '100%',
				'cursor' : 'nw-resize',
				'float' : 'right'
			}
		});

		var input = new Element('input', {
			'styles' : {
				float : 'left',
				'width' : '80%',
				'height' : '80%',
				'margin-left' : '2px',
				'margin-top' : '2px'
			}
		});

		ul = new Element('ul', {
			'styles' : {
				'list-style-type' : 'none',
				'-webkit-padding-start' : '5px'
			}
		});

		input.addEvent('keydown', function(event) {
			if (event.code == 13) {
				var text = event.target.get('value');
				event.target.set('value', '');
				var result = eval(text);
				addInputLine(text, result);
			}
		});

		divConsoleUl.grab(ul);

		divInput.adopt(input, divResizer);

		divParent.grab(divConsole);

		divConsole.adopt(divTitle, divConsoleUl, divInput);

		$(document.body).grab(divParent);

		divParent.makeDraggable({
			handle : divTitle
		});

		divParent.makeResizable({
			handle : divResizer
		});

	}

	function showConsole() {
		divParent.show();
	}

	function hideConsole() {
		divParent.hide();
	}

	function addOutpuLine(text) {
		var li = new Element('li', {
			'styles' : {
				'textAlign' : 'left'
			}
		});
		var span = new Element('span', {
			'styles' : {
				'margin-left' : '0px'
			}
		});

		var spanMark = new Element('span', {
			'styles' : {
				'margin-left' : '0px',
				'color' : 'blue'
			},
			'text' : '> '
		});

		var spanText = new Element('span', {
			'styles' : {
				'margin-left' : '0px',
				'color' : 'blue'
			},
			'text' : text
		});

		span.adopt(spanMark, spanText);

		li.grab(span);

		ul.grab(li);

	}

	function addInputLine(text, result) {
		var li = new Element('li', {
			'styles' : {
				'textAlign' : 'left'
			}
		});

		var liResult = new Element('li', {
			'styles' : {
				'textAlign' : 'left'
			}
		});

		var span = new Element('span', {
			'styles' : {
				'margin-left' : '0px'
			}
		});

		var spanMark = new Element('span', {
			'styles' : {
				'margin-left' : '0px',
				'color' : 'blue'
			},
			'text' : '> '
		});

		var spanText = new Element('span', {
			'styles' : {
				'margin-left' : '0px',
			},
			'text' : text
		});

		var spanResult = new Element('span', {
			'styles' : {
				'margin-left' : '0px'
			}
		});

		var spanResultText = new Element('span', {
			'styles' : {
				'margin-left' : '15px',
			},
			'text' : result
		});

		span.adopt(spanMark, spanText);

		spanResult.grab(spanResultText);

		li.grab(span);
		liResult.grab(spanResult);

		ul.adopt(li, liResult);

	}

	//create console
	window.addEvent('domready', function() {
		init();
	});

	return {
		addOutpuLine : addOutpuLine,
		showConsole : showConsole,
		hideConsole : hideConsole
	};

})();

var oldconsolelog = console.log;
var oldconsole = console;
var console = {};
console.log = function(txt) {
	meta4.widget.console.addOutpuLine(txt);
	oldconsolelog.apply(oldconsole, arguments);
};

console.showConsole = function() {
	meta4.widget.console.showConsole();
};

console.hideConsole = function() {
	meta4.widget.console.hideConsole();
}; 
