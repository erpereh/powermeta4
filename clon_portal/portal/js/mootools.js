/*
 @(#)FileVersion: 811.000.025
 @(#)FileDescription: 3rd party mootools
 @(#)CompanyName: Meta4 Spain, S.A.
 @(#)LegalCopyright: (c)2014
 @(#)ProductName: PeopleNet KSystem
 @(#)ProductVersion: 8.1SP1
 @(#)InternalName: mootools.js
 @(#)Date: 01/02/2014
 */

function m4loadjs(file) {

     var xhrObj = new XMLHttpRequest();

     // open and send a synchronous request
     xhrObj.open('GET', file, false);
     xhrObj.send('');

     // add the returned content to a newly created script tag
     var se = document.createElement('script');
     se.type = "text/javascript";
     se.text = xhrObj.responseText;
     document.getElementsByTagName('head')[0].appendChild(se);
}

m4loadjs("/js/mootools-1.4.5.meta4v1.0.min.js");
