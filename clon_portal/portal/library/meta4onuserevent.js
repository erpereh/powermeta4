/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: meta4onuserevent.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */

function meta4EventsOnLoad() 
{
    // uncomment to disable the event recording 
    // meta4.M4JSEvents.setEnableUserEvents(false);
    
    // uncomment to override the app param value (ms)
    // meta4.M4JSEvents.setMinimumUserEventTime(100);
}

function meta4OnUserEvent(param, sender, location) {

		    // calculate the sender container info (the page location)
		    var debugToConsole = true;
		    var indexNonce = location.indexOf("_nonce_");
		    var indexRenhash = location.indexOf("_renhash_");
		    var indexLastDot = location.lastIndexOf(".");
		    if (indexNonce > 0) location = location.substring(0, indexNonce) + location.substr(indexLastDot);
		    if (indexRenhash > 0) location = location.substring(0, indexRenhash) + location.substr(indexLastDot);
		
		    // applies regexp in case the location has extra URL
		    location = location.replace(/^(?:\/\/|[^\/]+)*\//, "/") 
			 
		    // sets the value
		    param.setSenderContainerInfo(location);
		
		    // calculate the sender info (the result of data-m4event-id|xpath)
		    var xpath = getDomXPath(sender);
		    param.setSenderInfo(xpath);
		
		    // trace to identify the senders
		    var indexpath = xpath.indexOf("|");
		    if (indexpath > 0) xpath = xpath.substring(indexpath+1, xpath.length);
		    if (debugToConsole == true) {
		    	console.log(' $x(\'' + xpath + '\')');
		    }
		}
		
		function getDomXPath(elm) {
		
		    var path = '';
		    var semipath = '';
		    try 
		    {
		        var allNodes = document.getElementsByTagName('*');
		        for (var segs = []; elm && elm.nodeType == 1; elm = elm.parentNode) {
		            if (elm.hasAttribute('data-m4event-id') && elm.children.length === 0) {
		                semipath = elm.getAttribute('data-m4event-id');        
		                semipath = semipath + '|'                
		            }

		            if (elm.hasAttribute('id')) {
		                var uniqueIdCount = 0;
		                for (var n = 0; n < allNodes.length; n++) {
		                    if (allNodes[n].hasAttribute('id') && allNodes[n].id == elm.id) uniqueIdCount++;
		                    if (uniqueIdCount > 1) break;
		                };
		                if (uniqueIdCount == 1) {
		                    segs.unshift('id("' + elm.getAttribute('id') + '")');
		                    path = segs.join('/');
		                    return semipath + path;
		                } else {
		                    segs.unshift(elm.localName.toLowerCase() + '[@id="' + elm.getAttribute('id') + '"]');
		                }		           
		            } else { 
		                // when elements have no id attribute
		                for (i = 1, sib = elm.previousSibling; sib; sib = sib.previousSibling) {
		                    if (sib.localName == elm.localName) i++;
		                };
		                segs.unshift(elm.localName.toLowerCase());
		            };
		        }
		        path = segs.length ? '/' + segs.join('/') : null;
		        return semipath + path;
		
		    } catch (e) {
		    	console.log('meta4OnUserEvent: ' + e);
		    }
		    return path;
};
