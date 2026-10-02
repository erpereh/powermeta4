/*
 @(#)FileVersion: 811.000.025
 @(#)FileDescription: 
 @(#)CompanyName: Meta4 Spain, S.A.
 @(#)LegalCopyright: (c)2014
 @(#)ProductName: PeopleNet KSystem
 @(#)ProductVersion: 8.1SP1
 @(#)InternalName: binding.js
 @(#)Date: 01/01/2014
 */

/*global $, $$, Element*/

var meta4 = meta4 || {};
meta4.widget = meta4.widget || {};

/**
 *This object is only to create common functions to other object that will inherit
 */
meta4.widget.binding = ( function() {'use strict';

	//variable to on/off binding
	var _onBinding = true;

	/**
	 * Function to set tag of html with context
	 * @param {meta4.data.context} context
	 */
	function setTag(context) {

        var contextContainers = $$('[data-m4context=' + context.idContext + ']');
        
        Array.each (contextContainers, function(item, index){

            var dataItemElements = item.getElements('[data-m4item]');
            
            Array.each (dataItemElements, function(item, index){

				var currentContext = item.closest('[data-m4context]').get('data-m4context');

				if (currentContext === context.idContext) {

					var channel = context.channel;

					var element = item;
					var itemId = element.get('data-m4item');
					var nodeId = element.closest('[data-m4node]').get('data-m4node');
					var node = channel.getNode(nodeId);
					//var t3Id = element.closest('[data-m4t3]').attr('data-m4t3');
					var converterStr = element.get('data-m4converter');

					//var itemValue = node.getValue(itemId);
					if (node.getCurrent() !== -1) {
						var itemValue = meta4.data.utils.getValue(node, itemId);

						if (converterStr === undefined || converterStr === null) {
							if (element.get('tag') === 'input') {
								element.set('val', itemValue);
							} else {
								element.set('html', itemValue);
							}
						} else {

							var reval = function(str) {
								var obj = window;
								str = str.split(".");
								var i;
								for ( i = 0; i < str.length; i++) {
									obj = obj[str[i]];
								}
								return obj;
							};

							var converter = reval(converterStr);

							if (converter !== undefined && converter !== null) {
								converter(element, channel, nodeId, itemId);
							}
						}
					}
				}
			});

		});
	}

	/**
	 * Function that is executed when node change current
	 * @param {meta4.data.context} receive ObjContext
	 */
	function nodeCurrentChangedFired(context) {
		if(_onBinding){
			var objContext = context.getContext();
			setTag(objContext);	
		}		
	}

	/**
	 * Function to do binding above HTML file. This function changes a node with 
	 * a new one within the context
	 * @param {string} idContext
	 * @param {string} oldIdNode
	 * @param {string} newIdNode
	 */
	function _changeNode(idContext, oldIdNode, newIdNode) {

		//search context
		var contextContainers = $$('[data-m4context=' + idContext + ']');
		
		Array.each (contextContainers, function(item, index) {

            //get object context
            var objContext = meta4.data.context.getContext(idContext);

            var dataNodeElements = item.getElements('[data-m4node]');
            
            Array.each(dataNodeElements, function(item, index) {
                
                var idNode = item.get('data-m4node');
                var currentContext = item.closest('[data-m4context]').get('data-m4context');

                if (currentContext === idContext) {

                    if (item.get('data-m4node') === oldIdNode)
                    {
                    	item.set('data-m4node', newIdNode);
                    }
                }
            });
        });
				
	}

	/**
	 * Function to do binding above HTML file. This function search all items  "data-m4context"
	 * and replaces its elements data-m4item. This function also associated with the
	 * event change current of node, and execute function setTag when  this occurs
	 * @param {string} idContext
	 */
	function _update(idContext) {
		//object m4eventType
		var eventTypes = meta4.M4EventTypes;

		//search context
		var contextContainers = $$('[data-m4context=' + idContext + ']');
		
		Array.each (contextContainers, function(item, index) {

            //get object context
            var objContext = meta4.data.context.getContext(idContext);

            var dataNodeElements = item.getElements('[data-m4node]');
            
            //buscamos también en el item que tiene data-m4context
            if(item.match('[data-m4node]') === true){
            	dataNodeElements = dataNodeElements.concat(item)	
            }
                       
            Array.each(dataNodeElements, function(item, index) {
                
                var idNode = item.get('data-m4node');
                var currentContext = item.closest('[data-m4context]').get('data-m4context');

                if (currentContext === idContext) {

                    var node = objContext.channel.getNode(idNode);
                    node.register(eventTypes.getNodeCurrentChanged(), nodeCurrentChangedFired, objContext);

                    //replace value context to data-m4item
                    setTag(objContext);
                }
            });
        });
				
	}

	/**
	 * Funtion to set src to element <img>
	 * @param {Object} element
	 * @param {Object} meta4Object
	 * @param {Object} nodeId
	 * @param {Object} itemId
	 */
	function _converterPhoto(element, meta4Object, nodeId, itemId) {
		var node = meta4Object.getNode(nodeId);
		var itemValue = node.getValue(itemId);
		element.setAttribute('src', itemValue);
	}

	return {
		//changeNode : function(idElement, oldIdNode, newIdNode) {
		//	_changeNode(idElement, oldIdNode, newIdNode);
		//},
		update : function(idElement) {
			_update(idElement);
		},
		converterPhoto : function(element, meta4Object, nodeId, itemId) {
			_converterPhoto(element, meta4Object, nodeId, itemId);
		},
		onBinding : function(){
			_onBinding = true;
		},
		offBinding : function(){
			_onBinding = false;
		}
	};

}());

//@ sourceURL=meta4.widget.binding.js
