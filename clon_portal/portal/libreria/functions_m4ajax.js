//define a namespace
m4xml = {};

m4xml.navigator = navigator;

m4xml.Ajax = function () {

 //local variables
 var oRequest = '';
 
 return {
   //public methods
   init: function() {
     //initialite Ajax
     if (oRequest == '') {oRequest = createXMLHttpReqObj();}
   },

   send: function (url, params, responseHnd, bsync, itype) {
     var sParams = "";
     var sType = "";

     if (itype == null) {itype = 1;}
     if (itype == 1) {
       sType = "GET";
     } else {
       sType = "POST";
     }

     oRequest.onreadystatechange = responseHnd;

     oRequest.open(sType, url, bsync);

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
   }
 }

}();

m4xml.translate = function () {
    
   // private vars
   var oRequest = '';
   var oXMLData = '';
   var sXMLSec = '';
   var sXMLSecTitle = 'subtitle';
   var sXMLSecError = 'error';
   var sXMLSecWarning = 'warning';
   var sXMLSecLabel = 'label';
   
   return {
     
     page: function(url,sec,secErr,secWar,secLbl,secTlt) {

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

       if (secTlt) 
        {
          sXMLSecTitle = secTlt;
        }
        
       oRequest = m4xml.Ajax.getResponse();
       oRequest.abort();
       m4xml.Ajax.send(url, null, m4xml.translate.getXMLData, true);
      
     },
     
     getXMLData: function() {
       if (oRequest.readyState == 4) 
        {
          if (oRequest.status == 200)
           {
             m4xml.translate.translateDoc();    
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
       
       document.title = m4xml.translate.getXMLValue('title');

       for (var i=0;i<elements.length;i++)
        {
          if (elements[i].id != '') 
           {
            sData = m4xml.translate.getXMLValue(elements[i].id);
            if (sData) 
            {
              if (elements[i].nodeName == 'INPUT')
               {
                 elements[i].value = sData;
               }
              else 
               {
                 if (m4xml.navigator.appName == 'Netscape')
                  {
                    elements[i].textContent = sData;
                  }
                 else    
                  {
                    elements[i].innerText = sData;
                  }
               }
            }

            sData = m4xml.translate.getXMLSubTitle(elements[i].id);
            if (sData) 
            {
              elements[i].title = sData;
            }
           }

        }
       
       //load other sections
       m4xml.translate.loadsection(m4xml.errors, sXMLSecError);
       m4xml.translate.loadsection(m4xml.warnings, sXMLSecWarning);
       m4xml.translate.loadsection(m4xml.labels, sXMLSecLabel);
       
       m4xml.translate.endTranslateDoc();

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
             saux = e[0].text || e[0].textContent;
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
             objSec.set(section.childNodes[i].nodeName, section.childNodes[i].nodeValue || section.childNodes[i].nodeTypedValue || section.childNodes[i].textContent);
           }
          
        }
     },

     endTranslateDoc: function() {
       //overwrite
     }

   }
    
}();

m4xml.errors = function () {
  
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

m4xml.warnings = function () {
  
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

m4xml.labels = function () {
  
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

  if (window.XMLHttpRequest) 
   {
     try {req = new XMLHttpRequest();}
     catch(e) {req = false;}
   }
  else if(window.ActiveXObject) 
   {
     try {req = new ActiveXObject("Msxml2.XMLHTTP");}
     catch(e) {
       try {req = new ActiveXObject("Microsoft.XMLHTTP");}
       catch(e) {req = false;}
      }
   }
   return req;
}
