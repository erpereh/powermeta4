//define a namespace
m4migrate = {};

m4migrate.Ajax = function () {

 //local variables
 var oRequest = '';
 var oXMLDOM = '';
 
 return {
   //public methods
   init: function() {
     //initialite Ajax
     if (oRequest == '') oRequest = createXMLHttpReqObj();
     if (oXMLDOM == '') oXMLDOM = createXMLDOMObj();
   },

   send: function (url, params, responseHnd, bsync) {
     var sParams = "";

     oRequest.onreadystatechange = responseHnd;
     oRequest.open("POST", url, bsync);

     if (params != null && params.length != 0) 
      {
        oRequest.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        for(var i = 0; i < params.length; i++) 
         {
           var p = params[i];
           if(sParams != "") sParams += "&";
           sParams += p[0] + "=" + encodeURIComponent(p[1]);
         }
      }
     oRequest.send(encodeURI(sParams));
   },
   
   getResponse: function() {
     return oRequest;
   },

   getXMLDOM: function() {
     return oXMLDOM;
   }
  
 }

}();

m4migrate.translate = function () {
    
   // private vars
   var oRequest = '';
   var oXMLData = '';
   var sXMLSec = '';
   var sXMLSecTitle = 'subtitle';
   var sXMLSecError = 'error';
   var sXMLSecWarning = 'warning';
   var sXMLSecLabel = 'label';
   
   return {
     
     page: function(url,sec,secErr,secWar,secLbl) {

       sXMLSec = sec;
       if (secErr) 
        {
          sXMLSecError = secErr;
        }

       if (secWar) 
        {
          sXMLSecWarning = secWar;
        }

       if (secWar) 
        {
          sXMLSecLabel = secLbl;
        }
        
       oRequest = m4migrate.Ajax.getResponse();
       oRequest.abort();
       m4migrate.Ajax.send(url, null, m4migrate.translate.getXMLData, true);
      
     },
     
     getXMLData: function() {
       if (oRequest.readyState == 4) 
        {
          if (oRequest.status == 200)
           {
             m4migrate.translate.translateDoc();    
           }
          else
           {
             // have a problem with the response
             alert('The page can not translate. Press F5 to try it again.');
           }
        }
     },

     translateDoc: function() {
       
       oXMLData = oRequest.responseXML;
       var elements = document.getElementsByTagName('*');
       var sData = '';
       
       document.title = m4migrate.translate.getXMLValue('title');

       for (var i=0;i<elements.length;i++)
        {
          if (elements[i].id != '') 
           {
            sData = m4migrate.translate.getXMLValue(elements[i].id);
            if (sData) 
            {
              if (elements[i].value && elements[i].nodeName != 'OPTION') 
               {
                 elements[i].value = sData;
               }
              else 
               {
                 elements[i].innerText = sData;
               }
            }

            sData = m4migrate.translate.getXMLSubTitle(elements[i].id);
            if (sData) 
            {
              elements[i].title = sData;
            }
            
           }
        }
       
       //load other sections
       m4migrate.translate.loadsection(m4migrate.errors, sXMLSecError);
       m4migrate.translate.loadsection(m4migrate.warnings, sXMLSecWarning);
       m4migrate.translate.loadsection(m4migrate.labels, sXMLSecLabel);
       
       m4migrate.translate.endTranslateDoc();

     },


     getXMLValue: function(lbl) {
       
       var saux = '';
       var section = oXMLData.getElementsByTagName(sXMLSec);
       var e = '';
       if (section.length>0) 
        {
          section = section[0];
          //get the label for this section
          e = section.getElementsByTagName(lbl);
          if (e.length>0) 
           {
             saux = e[0].nodeValue || e[0].nodeTypedValue;
           }
        }
       
       return saux;
     },

     getXMLSubTitle: function(lbl) {
       
       var saux = '';
       var section = oXMLData.getElementsByTagName(sXMLSecTitle);
       var e = '';
       if (section.length>0) 
        {
          section = section[0];
          //get the label for this section
          e = section.getElementsByTagName(lbl);
          if (e.length>0) 
           {
             saux = e[0].text || e[0].textContent;
           }
        }
       
       return saux;
     },

     loadsection: function(objSec,XMLSec) {
       oXMLData = oRequest.responseXML;
       var e = '';
       
       var section = oXMLData.getElementsByTagName(XMLSec);
       if (section.length>0) 
        {
          section = section[0];
          for (var i = 0; i<section.childNodes.length;i++)
           {
             objSec.set(section.childNodes[i].nodeName, section.childNodes[i].nodeValue || section.childNodes[i].nodeTypedValue);
           }
          
        }
     },

     endTranslateDoc: function() {
       //overwrite
     }

   }
    
}();

m4migrate.errors = function () {
  
   // private vars
   var aError = new Array();
   
   return {
     
     getError: function(n) {
       return aError[n] || 'n.a.';
     },
     
     set: function(n,e) {
       aError[n] = e;
     }
   }

}();

m4migrate.warnings = function () {
  
   // private vars
   var aWarning = new Array();
   
   return {
     
     getWarning: function(n) {
       return aWarning[n] || 'n.a.';
     },
     
     set: function(n,e) {
       aWarning[n] = e;
     }
   }

}();

m4migrate.labels = function () {
  
   // private vars
   var aLabel = new Array();
   
   return {
     
     getLabel: function(n) {
       return aLabel[n] || 'n.a.';
     },
     
     set: function(n,e) {
       aLabel[n] = e;
     }
   }

}();

function createXMLHttpReqObj() {
  var req = false;

  if(window.XMLHttpRequest && !(window.ActiveXObject)) {
     try {req = new XMLHttpRequest();}
     catch(e) {req = false;}
    }
  else if(window.ActiveXObject) {
     try {req = new ActiveXObject("Msxml2.XMLHTTP");}
     catch(e) {
       try {req = new ActiveXObject("Microsoft.XMLHTTP");}
       catch(e) {req = false;}
      }
   }
   return req;
}

function createXMLDOMObj() {

 var oXMLObj = '';
 
 // code for IE
 if (window.ActiveXObject)
   {
     //setup active x object
     oXMLObj = new ActiveXObject("Microsoft.XMLDOM");
     //tell browser that its not an asynchronous call
     oXMLObj.async=false;
   }
 // code for Mozilla, Firefox, Opera, etc.
 else if (document.implementation && document.implementation.createDocument)
   {
     //set up document variable
     oXMLData = document.implementation.createDocument("", "", null);
   }

 return oXMLObj;

}

