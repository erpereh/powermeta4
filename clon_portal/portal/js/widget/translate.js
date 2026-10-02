/*
 @(#)FileVersion: 811.000.025
 @(#)FileDescription: 
 @(#)CompanyName: Meta4 Spain, S.A.
 @(#)LegalCopyright: (c)2014
 @(#)ProductName: PeopleNet KSystem
 @(#)ProductVersion: 8.1SP1
 @(#)InternalName: translate.js
 @(#)Date: 01/01/2014
 */

/*global $, $$, Element,Class, Options, Events*/

//@ sourceURL=meta4.widget.translate.js

var meta4 = meta4 || {};

meta4.widget = meta4.widget || {};

meta4.widget.translate = ( function() {'use strict';

        /*
         * Function to get text
         *
         * @param: id of variable
         */
        var _getTranslate = function(id, defaultTrans) {

            var translation = window[id];

            if (translation === undefined) {
                translation = defaultTrans;
                if (translation === undefined) {
                    translation = "The error message '" + id + "'is not defined.";
                }
            }
            return translation;

        };
      

        function translatePage(context) {

            if (context && context.channel) {

                $(document.body).getElements('[data-m4trans-item]').each(function(element, index) {
                    var itemId = element.getAttribute('data-m4trans-item');
                    var nodeId = element.closest('[data-m4node]').get('data-m4node');
                    if (nodeId) {
                        var node = context.channel.getNode(nodeId);
                        var textTranslate = node.getItemMetadata(itemId).getProperty('Name');
                        element.innerHTML=textTranslate;
                    }
                });

                $(document.body).getElements('[data-m4title-item]').each(function(element, index) {
                    var itemId = element.getAttribute('data-m4title-item');
                    var nodeId = element.closest('[data-m4node]').get('data-m4node');
                    if (nodeId) {
                        var node = context.channel.getNode(nodeId);
                        var textTranslate = node.getItemMetadata(itemId).getProperty('Name');
                        element.set('title', textTranslate);
                    }
                });

            } else {

                $(document.body).getElements('[data-m4trans]').each(function(element, index) {
                    var nameVar = element.getAttribute('data-m4trans');
                    var textTranslate = _getTranslate(nameVar);
                    element.innerHTML=textTranslate;
                });

                $(document.body).getElements('[data-m4placeholder]').each(function(element, index) {
                    var nameVar = element.getAttribute('data-m4placeholder');
                    var textTranslate = _getTranslate(nameVar);
                    element.set('placeholder', textTranslate);

                });

                $(document.body).getElements('[data-m4title]').each(function(element, index) {
                    var nameVar = element.getAttribute('data-m4title');
                    var textTranslate = _getTranslate(nameVar);
                    element.set('title', textTranslate);

                });

            }

        }

        function _loadLanguageFile(arrayNameFile, onLoad) {

            var i;

            var numFileLoad = 0;

            function fileOnLoad() {
                numFileLoad = numFileLoad + 1;
                if (numFileLoad === arrayNameFile.length) {
                    translatePage();
                    onLoad();
                }
            }

            var prefixLanguage = meta4.session.language.getPrefixLanguage();
            for ( i = 0; i < arrayNameFile.length; i++) {
                meta4.widget.utils.loadFile('/translations/' + arrayNameFile[i] + prefixLanguage + '.js', fileOnLoad);
            }
        }

        return {
            loadLanguageFile : function(arrayNameFile, onLoad) {
                _loadLanguageFile(arrayNameFile, onLoad);
            },
            getTranslate : function(nameVar) {
                return _getTranslate(nameVar);
            },
            translateContext : function(context) {
                return translatePage(context);
            }
        };

    }());

