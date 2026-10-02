/*
 ---

 name: Form.Upload
 description: Create a multiple file upload form
 license: MIT-style license.
 authors: Arian Stolwijk
 requires: [Form.MultipleFileInput, Request.File]
 provides: Form.Upload

 ...
 */

if (!this.Form)
	this.Form = {};

Form.Upload = new Class({

	Implements : [Options, Events],

	options : {
		dropMsg : meta4.widget.translate.getTranslate('_dragDropUpload'),
		dragDrop : true,
		method : 'post',
		action : '/servlet/CheckSecurity/JSP/sse_g3_val_fl/upload_file.jsp',
		enctype : 'multipart/form-data'
	},

	initialize : function(container, options) {

		this.setOptions(options);

		var form = new Element('form', this.options);

		container.adopt(form);

		var img = new Element('img', {
			'src' : '/iconos/ic_attach_16_16_100.png'
		});

		var input = new Element('input', {
			'type' : 'file',
			'name' : 'DOCREQUEST[]'
		});
		this.input = input;

		var divInput = new Element('div', {
			'class' : 'm4UploadFile-container-input'
		});

		divInput.adopt(img, input);

		form.grab(divInput);

		// Our modern file upload requires FormData to upload
		if ('FormData' in window)
			this.modernUpload(input);
		else
			this.legacyUpload(input);
	},

	modernUpload : function(input) {

		this.modern = true;

		var form = input.getParent('form');
		this.form = form;
		if (!form)
			return;

		var self = this, drop = new Element('div', {
			'class' : 'm4UploadFile-droppable',
			text : this.options.dropMsg
		}).inject(input, 'after'), list = new Element('ul.m4UploadFile-uploadList').inject(drop, 'after');
		var inputFiles = new Form.MultipleFileInput(input, list, drop, {
			onDragenter : drop.addClass.pass('m4UploadFile-drag-hover', drop),
			onDragleave : drop.removeClass.pass('m4UploadFile-drag-hover', drop),
			onDrop : drop.removeClass.pass('m4UploadFile-drag-hover', drop),
			onAdd : function(object) {
				var file = object.file;
				var li = object.li;
				var deleteImg = object.deleteImg;

				var divParentProgress = new Element('div.m4UploadFile-container-progress');

				var progress = new Element('div.m4UploadFile-progress').setStyle('display', 'none');
				divParentProgress.grab(progress);
				li.grab(divParentProgress);

				var uploadReq = new Request.File({
					url : form.get('action'),
					onRequest : progress.setStyles.pass({
						display : 'block',
						width : 0
					}, progress),
					onProgress : function(event) {
						var loaded = event.loaded, total = event.total;
						progress.setStyle('width', parseInt(loaded / total * 100, 10).limit(0, 100) + '%');
					},
					onComplete : function(e) {
						progress.setStyle('width', '100%');

						self.fireEvent('complete', JSON.parse(this.response.text));
						this.reset();
					}
				});

				deleteImg.addEvent('cancelRequest', function(e) {
					if (this.isRunning()) {
						this.cancel();
					}
				}.bind(uploadReq));

				uploadReq.append(inputname, file);

				uploadReq.send();

			}
		}), inputname = input.get('name');

		if (this.options.dragDrop === false) {
			drop.setStyle('display', 'none');
		}

	},

	legacyUpload : function(input) {

		var row = input.getParent('.m4-uploadFile');
		rowClone = row.clone(true, true), add = function(event) {
			event.preventDefault();

			var newRow = rowClone.clone(true, true), inputID = String.uniqueID(), label = newRow.getElement('label');

			newRow.getElement('input').set('id', inputID).grab(new Element('a.m4UploadFile-delInputRow', {
				text : 'x',
				events : {
					click : function(event) {
						event.preventDefault();
						newRow.destroy();
					}
				}
			}), 'after');

			if (label)
				label.set('for', inputID);
			newRow.inject(row, 'after');
		};

		new Element('a.m4UploadFile-addInputRow', {
			text : '+',
			events : {
				click : add
			}
		}).inject(input, 'after');

	},

	isModern : function() {
		return !!this.modern;
	}
});

/*
 ---

 name: Form.MultipleFileInput
 description: Create a list of files that has to be uploaded
 license: MIT-style license.
 authors: Arian Stolwijk
 requires: [Element.Event, Class, Options, Events]
 provides: Form.MultipleFileInput

 ...
 */

Object.append(Element.NativeEvents, {
	dragenter : 2,
	dragleave : 2,
	dragover : 2,
	dragend : 2,
	drop : 2
});

if (!this.Form)
	this.Form = {};

Form.MultipleFileInput = new Class({

	Implements : [Options, Events],

	options : {
		itemClass : 'm4UploadFile-uploadItem'/*,
		 onAdd: function(file){},
		 onRemove: function(file){},
		 onEmpty: function(){},
		 onDragenter: function(event){},
		 onDragleave: function(event){},
		 onDragover: function(event){},
		 onDrop: function(event){}*/
	},

	_files : [],

	initialize : function(input, list, drop, options) {
		input = this.element = document.id(input);
		list = this.list = document.id(list);
		drop = this.drop = document.id(drop);

		this.setOptions(options);

		var name = input.get('name');
		if (name.slice(-2) != '[]')
			input.set('name', name + '[]');
		input.set('multiple', true);

		this.inputEvents = {
			change : function() {
				Array.each(input.files, this.add, this);
			}.bind(this)
		};

		this.dragEvents = drop && ( typeof document.body.draggable != 'undefined') ? {
			dragenter : this.fireEvent.bind(this, 'dragenter'),
			dragleave : this.fireEvent.bind(this, 'dragleave'),
			dragend : this.fireEvent.bind(this, 'dragend'),
			dragover : function(event) {
				event.preventDefault();
				this.fireEvent('dragover', event);
			}.bind(this),
			drop : function(event) {
				event.preventDefault();
				var dataTransfer = event.event.dataTransfer;
				if (dataTransfer)
					Array.each(dataTransfer.files, this.add, this);
				this.fireEvent('drop', event);
			}.bind(this)
		} : null;

		this.attach();
	},

	attach : function() {
		this.element.addEvents(this.inputEvents);
		if (this.dragEvents)
			this.drop.addEvents(this.dragEvents);
	},

	detach : function() {
		this.input.removeEvents(this.inputEvents);
		if (this.dragEvents)
			this.drop.removeEvents(this.dragEvents);
	},

	add : function(file) {
		this._files.push(file);
		var self = this;
		var li = new Element('li', {
			'class' : this.options.itemClass
		});

		var span = new Element('span', {
			text : file.name
		});

		li.grab(span);

		var deleteImg = new Element('a', {
			text : 'x',
			href : '#',
			events : {
				click : function(e) {
					e.preventDefault();
					e.target.fireEvent('cancelRequest');
					self.remove(file);
				}
			}
		});

		li.grab(deleteImg);

		this.list.grab(li);

		var obj = {
			file : file,
			li : li,
			deleteImg : deleteImg
		};
		this.fireEvent('add', obj);
		return this;
	},

	remove : function(file) {
		var index = this._files.indexOf(file);
		if (index == -1)
			return this;
		this._files.splice(index, 1);
		this.list.childNodes[index].destroy();
		this.fireEvent('remove', file);
		if (!this._files.length)
			this.fireEvent('empty');
		return this;
	},

	getFiles : function() {
		return this._files;
	}
});

/*
 ---

 name: Request.File
 description: Uploading files with FormData
 license: MIT-style license.
 authors: [Arian Stolwijk, Djamil Legato]
 requires: [Request]
 provides: Request.File
 credits: https://gist.github.com/a77b537e729aff97429c

 ...
 */

(function() {

	var progressSupport = ('onprogress' in new Browser.Request);

	Request.File = new Class({

		Extends : Request,

		options : {
			emulation : false,
			urlEncoded : false
		},

		initialize : function(options) {
			this.xhr = new Browser.Request();
			this.formData = new FormData();
			this.setOptions(options);
			this.headers = this.options.headers;
		},

		append : function(key, value) {
			this.formData.append(key, value);
			return this.formData;
		},

		reset : function() {
			this.formData = new FormData();
		},

		send : function(options) {
			if (!this.check(options))
				return this;

			this.options.isSuccess = this.options.isSuccess || this.isSuccess;
			this.running = true;

			var xhr = this.xhr;
			if (progressSupport) {
				xhr.onloadstart = this.loadstart.bind(this);
				xhr.onprogress = this.progress.bind(this);
				xhr.upload.onprogress = this.progress.bind(this);
			}

			xhr.open('POST', this.options.url, true);
			xhr.onreadystatechange = this.onStateChange.bind(this);

			Object.each(this.headers, function(value, key) {
				try {
					xhr.setRequestHeader(key, value);
				} catch (e) {
					this.fireEvent('exception', [key, value]);
				}
			}, this);

			this.fireEvent('request');
			xhr.send(this.formData);

			if (!this.options.async)
				this.onStateChange();
			if (this.options.timeout)
				this.timer = this.timeout.delay(this.options.timeout, this);
			return this;
		}
	});

})();


/*
---
description: This class gives you a method to upload files 'the ajax way'

license: MIT-style

authors:
- Arian Stolwijk

requires: [Core/Class.Extras, Core/Element, Core/Element.Event, Core/Element.Style]

provides: [Element.iFrameFormRequest, iFrameFormRequest]

...
*/

/**
 * @author Arian Stolwijk
 * Idea taken from http://www.webtoolkit.info/ajax-file-upload.html
 */

var iFrameFormRequest = new Class({

	Implements: [Options, Events],

	options: { /*
		onRequest: function(){},
		onComplete: function(data){},
		onFailure: function(){}, */
		eventName: 'submit'
	},

	initialize: function(form, options){
		this.setOptions(options);
		var frameId = this.frameId = String.uniqueID();
		var loading = false;

		this.form = document.id(form);

		this.formEvent = function(){
			loading = true;
			this.fireEvent('request');
		}.bind(this);

		this.iframe = new IFrame({
			name: frameId,
			styles: {
				display: 'none'
			},
			src: 'about:blank',
			events: {
				load: function(){
					if (loading){
						var doc = this.iframe.contentWindow.document;
						if (doc && doc.location.href != 'about:blank'){
							this.complete(doc.body.innerHTML);
						} else {
							this.fireEvent('failure');
						}
						loading = false;
					}
				}.bind(this)
			}
		}).inject(document.body);

		this.attach();
	},

	complete: function(response){
		this.fireEvent('complete', response);
	},

	send: function(){
		this.form.submit();
		this.formEvent();
	},

	attach: function(){
		this.target = this.form.get('target');
		this.form.set('target', this.frameId)
			.addEvent(this.options.eventName, this.formEvent);
	},

	detach: function(){
		this.form.set('target', this.target)
			.removeEvent(this.options.eventName, this.formEvent);
	},

	toElement: function(){
		return this.iframe;
	}

});

Element.implement('iFrameFormRequest', function(options){
	this.store('iFrameFormRequest', new iFrameFormRequest(this, options));
	return this;
});
