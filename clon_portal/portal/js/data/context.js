/*
 @(#)FileVersion: 811.000.025
 @(#)FileDescription: 
 @(#)CompanyName: Meta4 Spain, S.A.
 @(#)LegalCopyright: (c)2014
 @(#)ProductName: PeopleNet KSystem
 @(#)ProductVersion: 8.1SP1
 @(#)InternalName: context.js
 @(#)Date: 01/02/2014
 */

/*global $$*/

//@ sourceURL=meta4.data.context.js

var meta4 = meta4 || {};
meta4.data = meta4.data || {};

/**
 *This object is only to create common functions to other object that will inherit
 */
meta4.data.context = ( function() {'use strict';

		/**
		 *Object to store idChannel associated idContext
		 */
		var ObjContext = function(idContext, idT3) {
			this.idContext = idContext;
			this.idChannel = idT3;
			this.channel = null;
		};
		/**
		 * Store list of ObjContext
		 */
		var _listContext = [];

		/**
		 *Function to get list context
		 */
		function getListContext() {
			return _listContext;
		}

		/**
		 * Function to parse file HTML and crate ObjContext
		 * This funcion search all  data-m4context, and create ObjContext for each one that finds
		 */
		function _parseContext() {

            function findT3(element, index, object) {
                
                //id context
                var idContext = element.getAttribute('data-m4context');
                //id channel
                var idT3 = element.getAttribute('data-m4t3');
                //create object context
                var objectContext = new ObjContext(idContext, idT3);
                //add list context
                _listContext.push(objectContext);
            }
			$(document.body).getElements('[data-m4context]').each(findT3);
		}

		/**
		 * Function get context given id Context
		 * @param{String} idContext
		 */
		function _getContext(id) {
			var i;
			for ( i = 0; i < _listContext.length; i++) {
				if (id === _listContext[i].idContext) {
					return _listContext[i];
				}
			}
		}

		/**
		 *Function to change channel of context
		 * @param {String} idContext
		 * @param {meta4.M4Object} channel
		 */
		function _setChannelContext(idContext, channel) {
			//get ObjContext
			var objContext = _getContext(idContext);

			if (objContext !== undefined) {
				objContext.channel = channel;
			}
		}

		return {
			parseContext : function() {
				_parseContext();
			},
			getContext : function(id) {
				return _getContext(id);
			},
			setChannelContext : function(idContext, channel) {
				_setChannelContext(idContext, channel);

			},
			getListContext : function() {
				return getListContext();
			}
		};

	}());

