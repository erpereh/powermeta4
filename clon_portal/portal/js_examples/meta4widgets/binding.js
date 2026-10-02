function initExample() {

	function executeExample(request) {
				
		meta4.data.context.setChannelContext('contextId', channelTR);
		meta4.widget.binding.update('contextId');
		channelTR.getNode('EXJSAPI_WIDGET_BINDING').moveTo(0);
				
	}
      
	var binding = 'on';
	
	var channelTR = new meta4.M4Object('EXJSAPI_COMPONENT');
	var requestTR = new meta4.M4Request(channelTR, 'EXJSAPI_WIDGET_BINDING', 'LOAD_BLK', null);

	meta4.data.execute(requestTR, executeExample);
	
	var node = channelTR.getNode('EXJSAPI_WIDGET_BINDING');
	
	$('first').addEvent('click', function() {
		node.moveTo(0);
	});
	
	$('previous').addEvent('click', function() {
		current = node.getCurrent();
		if(current > 0){
			node.moveTo(current - 1);
		}
	});
	
	$('next').addEvent('click', function() {
		current = node.getCurrent();
		if(current < (node.count() - 1)){
			node.moveTo(current + 1);
		}
	});
	
	$('last').addEvent('click', function() {
		node.moveTo(node.count() - 1);
	});
	
	$('binding').addEvent('click', function() {
		if (binding === 'on'){
			meta4.widget.binding.offBinding();
			binding = 'off'
			$('binding').setStyle('background-color','#DC143C');
			$('binding').set('html','BINDING: ON');
		}
		else{
			meta4.widget.binding.onBinding();
			binding = 'on'
			$('binding').setStyle('background-color','#006400');
			$('binding').set('html','BINDING: OFF');
		}
			
	});	
}

//event to inicialice program
document.addEvent('meta4Ready', initExample);
