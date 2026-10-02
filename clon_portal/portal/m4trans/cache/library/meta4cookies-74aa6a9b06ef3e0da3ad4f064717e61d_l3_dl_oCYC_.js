/*
	@(#)FileVersion: 811.000.008
	@(#)FileDescription: Functions to increase the event counter and write into a cookie
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: meta4cookies_renhash_716a1fca54a6494a40283f3a052564cd_l3_dl_oCYC_v1.js
	@(#)Date: 17/03/2011 
*/

// Cookie M4_EVT_N
// ---------------

var meta4Cookie = {}; 
meta4Cookie.Cookie = function() {
  //private functions
  function _readCookie(name) {

    var sNameEQ = name + "=";
    var objCo = document.cookie.split(';');
    for(var i=0;i < objCo.length;i++) {
      var c = objCo[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(sNameEQ) == 0) return c.substring(sNameEQ.length,c.length);
    }
    return null;

  }

  function _setEventCookie() {

    var currentCookie = _readCookie("M4_EVT_N");
    var currentValue = 0;
    if (currentCookie != null)
    {
      currentValue = parseInt(currentCookie);
    }

    var newCookie = "M4_EVT_N=" + escape(currentValue + 1) + "; path=/";

    document.cookie = newCookie;
  }

  return {
    setEventCookie: function() {
      _setEventCookie();
    }
  };
} ();


// Cookie COOKIE_GMT_OFFSET
// --------------------------
function setGMTOffsetCookie () 
{
var today = new Date(); 
var offset = -(today.getTimezoneOffset()/60); 
var newCookie = "COOKIE_GMT_OFFSET" + '=' + escape(offset) + "; path=/";
document.cookie = newCookie; 
}
