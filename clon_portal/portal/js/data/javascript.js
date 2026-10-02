/*
 @(#)FileVersion: 811.000.025
 @(#)FileDescription: 
 @(#)CompanyName: Meta4 Spain, S.A.
 @(#)LegalCopyright: (c)2014
 @(#)ProductName: PeopleNet KSystem
 @(#)ProductVersion: 8.1SP1
 @(#)InternalName: javascript.js
 @(#)Date: 01/01/2014
 */

/*global $, $$, Element, Asset*/

//@ sourceURL=meta4.data.javascript.js

//Empty function to avoid ie error        
if ( ! window.console ) console = { log: function(){} };

/** @const */
var DEBUG = false;

m4console = ( function() {
    //use strict
    'use strict';

    return {
        log : function(message) {
            if (DEBUG) {
                console.log(message);
            }
        }
    };

}());
    
Number.implement({
    /*
     * code.google.com/p/javascript-number-formatter/
     */
    m4format : function(mask){
 
        var v = this;
        if (!mask || isNaN(+v)) {
            return v; //return as it is.
        }
        //convert any string to number according to formation sign.
        var v = mask.charAt(0) == '-'? -v: +v;
        var isNegative = v<0? v= -v: 0; //process only abs(), and turn on flag.
        
        //search for separator for grp & decimal, anything not digit, not +/- sign, not #.
        var result = mask.match(/[^\d\-\+#]/g);
        var Decimal = (result && result[result.length-1]) || '.'; //treat the right most symbol as decimal 
        var Group = (result && result[1] && result[0]) || ',';  //treat the left most symbol as group separator
        
        //split the decimal for the format string if any.
        var mask = mask.split( Decimal);
        //Fix the decimal first, toFixed will auto fill trailing zero.
        v = v.toFixed( mask[1] && mask[1].length);
        v = +(v) + ''; //convert number to string to trim off *all* trailing decimal zero(es)
    
        //fill back any trailing zero according to format
        var pos_trail_zero = mask[1] && mask[1].lastIndexOf('0'); //look for last zero in format
        var part = v.split('.');
        //integer will get !part[1]
        if (!part[1] || part[1] && part[1].length <= pos_trail_zero) {
            v = (+v).toFixed( pos_trail_zero+1);
        }
        var szSep = mask[0].split( Group); //look for separator
        mask[0] = szSep.join(''); //join back without separator for counting the pos of any leading 0.
    
        var pos_lead_zero = mask[0] && mask[0].indexOf('0');
        if (pos_lead_zero > -1 ) {
            while (part[0].length < (mask[0].length - pos_lead_zero)) {
                part[0] = '0' + part[0];
            }
        }
        else if (+part[0] == 0){
            part[0] = '';
        }
        
        v = v.split('.');
        v[0] = part[0];
        
        //process the first group separator from decimal (.) only, the rest ignore.
        //get the length of the last slice of split result.
        var pos_separator = ( szSep[1] && szSep[ szSep.length-1].length);
        if (pos_separator) {
            var i;
            var integer = v[0];
            var str = '';
            var offset = integer.length % pos_separator;
            for (i=0, l=integer.length; i<l; i++) { 
                
                str += integer.charAt(i); //ie6 only support charAt for sz.
                //-pos_separator so that won't trail separator on full length
                if (!((i-offset+1)%pos_separator) && i<l-pos_separator ) {
                    str += Group;
                }
            }
            v[0] = str;
        }
    
        v[1] = (mask[1] && v[1])? Decimal+v[1] : "";
        var value = (isNegative?'-':'') + v[0] + v[1]; //put back any negation and combine integer and fraction.
        
        value = parseFloat(value);
            
        return value;
    }
});

String.implement({
    m4format : function() {

        var args = arguments;
        return this.replace(/%(\d+):([a-z])/g, function(match, number, type, offset, str) {

            if (type == 'i') {
                return typeof args[number - 1] != 'undefined' ? args[number - 1] : match;
            } else if (type == 's') {
                return typeof args[number - 1] != 'undefined' ? args[number - 1] : match;
            } else if (type == 'd') {
                //format date
                return typeof args[number - 1] != 'undefined' ? args[number - 1] : match;
            } else {
                return typeof args[number - 1] != 'undefined' ? args[number - 1] : match;
            }

        });
    }
});

/**
 * Function bind with argument event, overwrite mootools
 */
delete Function.prototype.bind;

Function.implement({

    /*<!ES5-bind>*/
    bind : function(that) {
        var self = this, args = arguments.length > 1 ? Array.slice(arguments, 1) : null, F = function() {
        };

        var bound = function() {
            var context = that, length = arguments.length;
            if (this instanceof bound) {
                F.prototype = self.prototype;
                context = new F;
            }
            var result = (!args && !length) ? self.call(context) : self.apply(context, args && length ? args.concat(Array.slice(arguments)) : args || arguments);
            return context == that ? result : context;
        };
        return bound;
    }
    /*</!ES5-bind>*/

});


//Returns true if it is a DOM node
function m4IsNode(o){
  return (
    typeof Node === "object" ? o instanceof Node : 
    o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
  );
}

//Returns true if it is a DOM element    
function m4IsElement(o){
  return (
    typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
);
}

