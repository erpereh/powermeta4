/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: meta4cookies.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */


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

    // document.cookie = newCookie;
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
