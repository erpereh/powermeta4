function m4loadjs(file) {

     var xhrObj = new XMLHttpRequest();

     // open and send a synchronous request
     xhrObj.open('GET', file, false);
     xhrObj.send('');

     // add the returned content to a newly created script tag
     var se = document.createElement('script');
     se.type = "text/javascript";
     se.text = xhrObj.responseText;
     
     se.text = se.text +'//# sourceURL='+file; 	
     document.getElementsByTagName('head')[0].appendChild(se);
}

m4loadjs("/library/mootools-1.4.5.meta4v1.0.min.js");
