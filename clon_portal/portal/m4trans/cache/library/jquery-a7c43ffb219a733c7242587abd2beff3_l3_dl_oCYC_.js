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

m4loadjs("/library/jquery-1.8.2.min_renhash_488dc8c8da341dc866ac9d310e74f9e9_l3_dl_oCYC_v1.js");