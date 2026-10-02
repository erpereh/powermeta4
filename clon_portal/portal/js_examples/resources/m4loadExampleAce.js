var controlExamples = (function() {
	var m4Examples = [];

	function paintExample(element, id, code) {
		ace.config.set("basePath", "/js_examples/resources/ace_master/src-min-noconflict");
		var editor = ace.edit(element);
		ace.require("ace/ext/language_tools");
		editor.setTheme("ace/theme/chrome");
		editor.session.setMode("ace/mode/javascript");

		editor.setOptions({
			maxLines : Infinity,
			enableBasicAutocompletion : true,
			enableSnippets : true
		});

		var code2 = code.toString();

		code2 = code2.substring(code2.indexOf('\n') + 2, code2.lastIndexOf('}'));

		//format code
		var numbertab = 0;
		var found = false;
		var repl = '';
		while (found === false) {
			if (code2.charCodeAt(numbertab) === 9) {
				numbertab++;
				repl = repl + '	';
			} else {
				found = true;
			}
		}

		code2 = code2.replace(new RegExp(repl, "g"), '');
		//end format code

		editor.setValue(code2, -1);

		editor.getSession().on('change', function(change, data) {

			var sCode = id.split('.');
			var i;
			var parent = null;
			if (sCode.length >= 2) {
				for ( i = 0; i < sCode.length - 1; i++) {
					if (parent === null) {
						var parent = eval(sCode[i]);
					} else {
						var parent = parent[sCode[i]];
					}
				}
			}
			try {
				//parent[sCode[i]] = new Function("", "return "+data.getValue());
				if (sCode.length >= 2) {
					parent[sCode[i]] = eval("(function(){" + data.getValue() + "})");
				} else {
					window[id] = eval("(function(){" + data.getValue() + "})");
				}

			} catch (err) {

				if (sCode.length >= 2) {
					parent[sCode[i]] = eval("(function(){alert('función no válida')})");
				} else {
					window[id] = eval("(function(){alert('función no válida')})");
				}

				console.log('Function no valida: ' + data.getValue());
			}

		});

	}

	function addExample(example) {
		m4Examples.push(example);
	}


	window.addEvent('domready', function() {
		var i;
		for ( i = 0; i < m4Examples.length; i++) {
			paintExample(m4Examples[i].element, m4Examples[i].id, m4Examples[i].code);
		}
	});

	return {
		addExample : addExample
	};

})();

function M4Example(element, id) {
	this.element = element;
	this.id = id;

	var sCode = id.split('.');

	var i;
	var parent = null;
	for ( i = 0; i < sCode.length; i++) {
		if (parent === null) {
			var parent = eval(sCode[i]);
		} else {
			var parent = parent[sCode[i]];
		}
	}

	this.code = parent;
}

function m4loadExample(idCode) {

	//var div = document.createElement("div");
	var div = new Element('div');
	
	var scripts = document.getElementsByTagName("script");
	var i;
	for(i=0;i<scripts.length;i++){
		if(scripts[i].text.indexOf(idCode) !== -1){
			div.inject(scripts[i], 'after');
		}
	}

	var example = new M4Example(div, idCode);

	controlExamples.addExample(example);

}
