/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: meta4.mobile.task.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */

/*
@(#)FileVersion: 815.001.007
@(#)FileDescription: js used m4task.html
@(#)CompanyName: Meta4 Spain, S.A.
@(#)LegalCopyright: (c)2018
@(#)ProductName: PeopleNet
@(#)ProductVersion: 8.1SP5
@(#)InternalName: meta4.mobile.task.js
@(#)Date: 01/02/2013
*/
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	$("a[data-icon='m4home']").click(function() {
		document.location.href = '/mobile/m4home.html';
	});
	document.addEventListener("backbutton", function(e) {
		e.preventDefault();
		document.location.href = '/mobile/m4home.html';
	}, false);
	meta4.mobile.initSatusBar('#196988');
}
var meta4 = meta4 || {};
meta4.mobile = meta4.mobile || {};
var numNotificaciones = 0;
var numValidaciones = 0;
meta4.mobile.tasksTools = function(_channel_view) {
	var homeInfoJSON, homeInfo;

	function _getHomeTaskNumber() {
		homeInfoJSON = homeInfoJSON || meta4.mobile.getSessionStorage('m4movilmenu');
		homeInfo = homeInfo || jQuery.parseJSON(homeInfoJSON);
		var homeTaskNumber;
		if (homeInfo) {
			homeTaskNumber = homeInfo.taskNumber;
		}
		return homeTaskNumber;
	}

	function _setHomeTaskNumber(number) {
		homeInfoJSON = homeInfoJSON || meta4.mobile.getSessionStorage('m4movilmenu');
		homeInfo = homeInfo || jQuery.parseJSON(homeInfoJSON);
		if (homeInfo) {
			homeInfo.taskNumber = number;
			var homeInfoJSON = JSON.stringify(homeInfo);
			meta4.mobile.setSessionStorage('m4movilmenu', homeInfoJSON);
		}
	}

	function _getClassicTaskNumber() {
		homeInfoJSON = homeInfoJSON || meta4.mobile.getSessionStorage('m4movilmenu');
		homeInfo = homeInfo || jQuery.parseJSON(homeInfoJSON);
		if (homeInfo) {
			return homeInfo.classicTaskNumber;
		}
	}

	function _setClassicTaskNumber(number) {
		homeInfoJSON = homeInfoJSON || meta4.mobile.getSessionStorage('m4movilmenu');
		homeInfo = homeInfo || jQuery.parseJSON(homeInfoJSON);
		if (homeInfo) {
			homeInfo.classicTaskNumber = number;
			var homeInfoJSON = JSON.stringify(homeInfo);
			meta4.mobile.setSessionStorage('m4movilmenu', homeInfoJSON);
		}
	}
	return {
		getHomeTaskNumber: function() {
			return _getHomeTaskNumber();
		},
		setHomeTaskNumber: function(number) {
			return _setHomeTaskNumber(number);
		},
		getClassicTaskNumber: function() {
			return _getClassicTaskNumber();
		},
		setClassicTaskNumber: function(number) {
			_setClassicTaskNumber(number);
		}
	};
}();
meta4.mobile.initTask = function(_channel_view) {
	'use strict';
	var t3_data_call = [];
	var node_view_task = _channel_view.getNode('SRTC_DATA_MOBILE_TASK');
	var view_task_count = node_view_task.count();
	var channel_Data = [];
	var force_reload = '1';
	for (var i = 0; i < view_task_count; i++) {
		node_view_task.moveTo(i);
		t3_data_call.push(node_view_task.getValue('T3_TASK'));
	}

	function successMethod(request) {
		//When all the data of data channels are loaded, we call meta4.mobile.task but first we need to get each data objects 
		for (var j = 0; j < t3_data_call.length; j++) {
			channel_Data[channel_Data.length] = request.getReferenceByAlias(t3_data_call[j]);
		}
		//and save the total number of task if needed
		if (meta4.mobile.tasksTools.getHomeTaskNumber() == null) {
			meta4.mobile.tasksTools.setHomeTaskNumber(parseInt(request.getResult(), 10));
		}
		//finally we call to the m4object to propague the elimination of read notifications        
		meta4.mobile.task(_channel_view, channel_Data);
		meta4.mobile.spinner.hide();
		//Clear notifications only for ios devices
		if (meta4.mobile.deviceFrom() == 'ios') {
			removeNotifications();
		}
	}

	function onMetadataSuccess_call(ref) {
		//Load the data of all the data channels when is loaded metadatas, we can execute channel to get decicions/notifications/validations
		//We do only one transaction to view channel and view channel will load the data M4Os
		var args = new Array;
		var takNum = meta4.mobile.tasksTools.getHomeTaskNumber();
		if (takNum !== null) {
			takNum = takNum.toString();
		}
		args.push(force_reload, takNum);
		var request = new meta4.M4Request(_channel_view, 'SRTC_DATA_MOBILE_TASK', 'LOAD_ALL_DATAS', args);
		for (var j = 0; j < t3_data_call.length; j++) {
			meta4.log.time('new ' + t3_data_call[j]);
			var channel_data = new meta4.M4Object(t3_data_call[j]);
			meta4.log.timeEnd('new ' + t3_data_call[j]);
			//We add a reference to the data M4Os in order to take them to client
			request.addReference(t3_data_call[j], channel_data);
		}
		meta4.mobile.data.execute(request, successMethod);
	}
	meta4.mobile.spinner.show();
	//Load the metadata of all data channels
	meta4.mobile.data.loadMetadata(t3_data_call, onMetadataSuccess_call);
};
meta4.mobile.task = function(_channel_view, _channel_data) {
	'use strict';
	var homeInfo;
	var _list_channels_loaded = [];
	_list_channels_loaded.push(_channel_view);
	for (var jj = 0; jj < _channel_data.length; jj++) {
		_list_channels_loaded.push(_channel_data[jj]);
	}
	var idList = jQuery("#ul_tasklist");

	function getChannelLoad(idChannel) {
		var i;
		var channel;
		for (i = 0; i < _list_channels_loaded.length; i++) {
			channel = _list_channels_loaded[i];
			if (idChannel == channel.getId() || idChannel == channel.getMetaIdentifier()) {
				return channel;
			}
		}
		return -1;
	}

	function getValueSentence(sentence) {
		//get channel
		var part1 = sentence.split("!");
		var id_channel = part1[0];
		var aux = part1[1];
		//get node and item
		var part2 = aux.split(".");
		var id_node = part2[0];
		var id_item = part2[1];
		var channel = getChannelLoad(id_channel);
		var node = channel.getNode(id_node);
		return node.getValue(id_item);
	}

	function executeSentence(sentence, args, succesMethod, failMethod) {
		//get channel
		var part1 = sentence.split("!");
		var id_channel = part1[0];
		var aux = part1[1];
		//get node and item
		var part2 = aux.split(".");
		var id_node = part2[0];
		var id_item = part2[1];
		var channel = getChannelLoad(id_channel);
		var request = new meta4.M4Request(channel, id_node, id_item, args);
		meta4.mobile.data.execute(request, succesMethod, failMethod);
	}

	function updateHomeTaskNumberAfterChg(sDiff) {
		homeInfoJSON = homeInfoJSON || meta4.mobile.getSessionStorage('m4movilmenu');
		homeInfo = homeInfo || jQuery.parseJSON(homeInfoJSON);
		if (homeInfo) {
			homeInfo.taskNumber += parseInt(sDiff, 10);
			var homeInfoJSON = JSON.stringify(homeInfo);
			meta4.mobile.setSessionStorage('m4movilmenu', homeInfoJSON);
		}
	}

	function fill_task_page() {
		idList.empty();
		var node_view_task = _channel_view.getNode('SRTC_VIEW_TASK_SINGLE_PAGE');
		//Loop to get all task types
		var indexView;
		for (indexView = 0; indexView < node_view_task.count(); indexView++) {
			node_view_task.moveTo(indexView);
			var id_type = node_view_task.getValue('ID_TYPE_TASK');
			sessionStorage.ParameterTaskType = id_type;
			var num_buttons = node_view_task.getValue('NUM_BUTTONS');
			var nameChannelData = _channel_view.getNode('SRTC_VIEW_TASK_SINGLE_PAGE').getValue('T3');
			var nameNodeData = _channel_view.getNode('SRTC_VIEW_TASK_SINGLE_PAGE').getValue('NODE');
			var nameNodeComments = _channel_view.getNode('SRTC_VIEW_TASK_SINGLE_PAGE').getValue('NODE_COMMENTS');
			var channel_data = getChannelLoad(nameChannelData);
			var node_data = channel_data.getNode(nameNodeData);
			//Loop to get the task list for each type of task
			var indexData;
			for (indexData = 0; indexData < node_data.count(); indexData++) {
				node_data.moveTo(indexData);
				//Get title, date and description
				var task_title = node_view_task.getValue('SENTENCE_N_BPO');
				var titleText = getValueSentence(task_title);
				var task_date = node_view_task.getValue('SENTENCE_DT');
				var dateText = getValueSentence(task_date);
				var task_desc = node_view_task.getValue('SENTENCE_DESC_TASK');
				var descText = getValueSentence(task_desc);
				//Draw task block
				drawTask(num_buttons, titleText, dateText, descText, node_view_task, indexView, node_data, indexData, sessionStorage.ParameterTaskType);
			}
		}
		if (jQuery('#ul_tasklist li').length == 0) {
			var emptyTaskDiv = jQuery('<div id="emptyTaskDiv">');
			var emptyTaskImg = jQuery('<img id="emptyTaskImg" src="/mobile/icons/task-empty.svg">');
			var emptyTaskP = jQuery('<p id="emptyTaskP">');
			emptyTaskP.text(meta4.ui.translate.getTranslate('_emptyTask'));
			emptyTaskDiv.append(emptyTaskImg, emptyTaskP);
			idList.append(emptyTaskDiv);
		}
	}

	function drawTask(num_buttons, title, date, description, nodeView, nodeViewPos, nodeData, nodeDataPos, taskType) {
		var li = jQuery('<li></li>');
		//Task tittle
		var task_title_text = jQuery('<h4>' + title + '</h4>');
		//Task date
		var task_date_text = jQuery('<h5>' + date + '</h5>');
		//Task description
		var task_description_text = jQuery('<p class="taskDescription">' + description + '</p>');
		task_description_text.click(function() {
			showMoreDesc(li)
		});
		var task_show_more = jQuery('<div class="showMore"><img src="/mobile/icons/selectArrowDark.svg"></div>');
		task_show_more.click(function() {
			showMoreDesc(li)
		});
		//Task buttons
		var task_buttons_container = jQuery('<div class="areaButton"></div>');
		var buttonConfirmClass = 'fullWidthButton';
		if (num_buttons === 2) {
			var task_deny_button = jQuery('<div class="areaButtonDenny"></div>');
			var task_deny_link = jQuery('<a data-role="button" data-m4trans="_label_denny">' + meta4.ui.translate.getTranslate('_label_denny') + '</a>');
			task_deny_button.append(task_deny_link);
			task_buttons_container.append(task_deny_button);
			buttonConfirmClass = '';
			task_deny_button.click(function() {
				denny_Task(nodeView, nodeViewPos, nodeData, nodeDataPos, taskType);
			});
		}
		var task_confirm_button = jQuery('<div class="areaButtonConfirm ' + buttonConfirmClass + '"></div>');
		var task_confirm_link = jQuery('<a data-role="button" data-m4trans="_label_confirm">' + meta4.ui.translate.getTranslate('_label_confirm') + '</a>');
		task_confirm_button.append(task_confirm_link);
		task_confirm_button.click(function() {
			confirm_Task(nodeView, nodeViewPos, nodeData, nodeDataPos, taskType);
		});
		task_buttons_container.append(task_confirm_button);
		//Append all elements 
		li.append(task_title_text, task_date_text, task_description_text, task_show_more, task_buttons_container);
		jQuery(idList).append(li);
	}
	//Show collapse/uncollapse task description
	function showMoreDesc(li) {
		li[0].toggleAttribute('showMore');
		var descriptionElement = li[0].getElementsByClassName('taskDescription')[0];
		var hasCollapsed = li[0].getAttribute('showmore');
		if (hasCollapsed !== null) {
			descriptionElement.setAttribute("style", 'height:' + descriptionElement.scrollHeight + 'px;');
		} else {
			descriptionElement.setAttribute("style", 'height: 48px;');
		}
	}
	//Function to confirm task by clicking the confirm button
	function confirm_Task(node_view, node_view_pos, node_data, node_data_pos, taskType) {
		function fail_confirm_action(request) {
			meta4.mobile.spinner.hide();
		}

		function success_confirm_action(request) {
			updateHomeTaskNumberAfterChg(request.getResult());
			meta4.mobile.toast.show(meta4.ui.translate.getTranslate('_aceptedTask'));
			fill_task_page();
			meta4.mobile.spinner.hide();
		}
		//console.log("Nodo vista: " + node_view + " (pos:" + node_view_pos + ")");
		//console.log("Nodo datos: " + node_data + " (pos:" + node_data_pos + ")");
		node_view.moveTo(node_view_pos);
		node_data.moveTo(node_data_pos);
		var sentence_HTML = node_view.getValue('SENTENCE_URL');
		var type_task_view = node_view.getValue('ID_TYPE_TASK');
		if (!sentence_HTML && (taskType == type_task_view)) {
			meta4.mobile.spinner.show();
			var sentence_action = node_view.getValue('ACTION_OK');
			executeSentence(sentence_action, null, success_confirm_action, fail_confirm_action);
		} else {
			var htmlLink = getValueSentence(sentence_HTML);
			if (htmlLink) {
				window.location.assign(htmlLink);
			}
		}
	}
	//Function to cancel task by clicking the cancel button
	function denny_Task(node_view, node_view_pos, node_data, node_data_pos, taskType) {
		function fail_deny_action(request) {
			meta4.mobile.spinner.hide();
		}

		function success_deny_action(request) {
			updateHomeTaskNumberAfterChg(request.getResult());
			meta4.mobile.toast.show(meta4.ui.translate.getTranslate('_denyTask'));
			fill_task_page();
			meta4.mobile.spinner.hide();
			jQuery('#page_text_Area').removeClass('showCancelComment');
		}
		var commentElement = jQuery('#page_text_Area #textarea_comments');
		jQuery('#page_text_Area').addClass('showCancelComment');
		commentElement.on('keyup', function() {
			var textarea_value = commentElement.val();
			if (textarea_value != '' && textarea_value != null && textarea_value != undefined) {
				jQuery('#page_text_Area #sendComment').removeClass('ui-disabled');
				jQuery('#page_text_Area #sendComment').attr('disabled', false);
			} else {
				jQuery('#page_text_Area #sendComment').addClass('ui-disabled');
				jQuery('#page_text_Area #sendComment').attr('disabled', true);
			}
		});
		//Add comment and cancel action
		jQuery('#sendComment').click(function() {
			if (commentElement.val().length != 0) {
				//console.log("Nodo vista: " + node_view + " (pos:" + node_view_pos + ")");
				//console.log("Nodo datos: " + node_data + " (pos:" + node_data_pos + ")");
				node_view.moveTo(node_view_pos);
				node_data.moveTo(node_data_pos);
				var type_task_view = node_view.getValue('ID_TYPE_TASK');
				if (taskType == type_task_view) {
					meta4.mobile.spinner.show();
					var sentence_action = node_view.getValue('SENTENCE_ADD_COMMENT');
					var args = [];
					args.push(commentElement.val());
					executeSentence(sentence_action, args, success_deny_action, fail_deny_action);
				}
			}
		});
		//Cancel comment action
		jQuery('#cancelComment').click(function() {
			jQuery('#page_text_Area #textarea_comments').empty();
			jQuery('#page_text_Area #textarea_comments').html('');
			jQuery('#page_text_Area #sendComment').addClass('ui-disabled');
			jQuery('#page_text_Area #sendComment').attr('disabled', true);
			jQuery('#page_text_Area').removeClass('showCancelComment');
		});
	};
	fill_task_page();
};

function initPage() {
	'use strict';
	if (meta4.mobile.deviceFrom() == 'android' || meta4.mobile.deviceFrom() == 'ios') {
		meta4.mobile.loadCordova();
	}
	//Function that is executed when method is success
	function onLoadProcesses(request) {
		try {
			//comprobamos en que pagina iniciamos
			var hash = window.location.hash;
			if (hash == "") {
				//get object that request
				var channel_view = request.getObject();
				meta4.mobile.initTask(channel_view);
			} else {
				//if refresh in second page, redirect to one page
				window.location.href = "m4task.html";
			}
		} catch (e) {
			alert(e.toString() + '\n' + e.stack);
		} finally {}
	}
	//Function that is after executed load metadata
	function onMetadataSuccess(ref) {
		//When is loaded metadatas, we can execute channel to get decicions/notifications
		meta4.log.time('new SRTC_VIEW_MOBILE_TASK');
		var channel_view = new meta4.M4Object('SRTC_VIEW_MOBILE_TASK');
		meta4.log.timeEnd('new SRTC_VIEW_MOBILE_TASK');
		var request = new meta4.M4Request(channel_view, 'SRTC_DATA_MOBILE_TASK', 'INITIALIZE_TASK_SINGLE', null);
		meta4.mobile.data.execute(request, onLoadProcesses);
	}

	function onMetadataFail(ref) {
		meta4.mobile.spinner.hide();
	}
	meta4.mobile.spinner.show();
	var meta4ObjectIds = [];
	meta4ObjectIds.push('SRTC_VIEW_MOBILE_TASK');
	meta4.mobile.data.loadMetadata(meta4ObjectIds, onMetadataSuccess, onMetadataFail);
}
//When ready translation init page
jQuery(document).bind('meta4Ready', initPage);

function removeNotifications() {
	var ids = [];
	ids.push("SRTC_PUSH_NOTIFICATIONS");
	var executor = new meta4.M4Executor();
	var channel;
	executor.loadMetadata(ids, onMetadataSuccess, onMetadataFail);

	function onMetadataSuccess(name) {
		channel = new meta4.M4Object('SRTC_PUSH_NOTIFICATIONS', 'push');
		channel.setContextId('mobile_push');
		var args = [];

		function onMetadataSuccessName(request) {}
		var meta4Objects = [];
		meta4Objects.push('SRTC_VIEW_MOBILE_TASK');
		var homeInfoJSON = homeInfoJSON || meta4.mobile.getSessionStorage('m4movilmenu');
		if (homeInfoJSON === null) {
			meta4.mobile.data.loadMetadata(meta4Objects, onMetadataSuccessName);
		} else {
			var homeInfo = jQuery.parseJSON(homeInfoJSON);
		}
		if (homeInfo) {
			args.push(homeInfo['idUser']);
			var request = new meta4.M4Request(channel, 'SRTC_PUSH_NOTIFICATIONS', 'CLEAR_NOTIFICATION', args);
			var executor = new meta4.M4Executor();
			executor.execute(request, finishMethod, finishMethod);
		}

		function finishMethod(request) {}
	}

	function onMetadataFail(name) {}
}