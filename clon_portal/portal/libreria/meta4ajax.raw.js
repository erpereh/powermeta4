//-------------------------------------------------------------------------------------------------
//Compact with e.g. http://fmarcia.info/jsmin/test.html
//-------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------
//Methods related to get a data with Ajax (based in JSON). 
//Use with mootools.js
//-------------------------------------------------------------------------------------------------

var meta4Ajax = {};

//Methods related to frame that contains page body
meta4Ajax.ajax = function () {
  //private vars
  var oRequestSync,
      oRequestSyncJSON,
      oResponseJSON,
      sResponse,
      getResponse = function (responseText, responseXML) {
          sResponse = responseText;
      };
      getResponseJSON = function (responseJSON, responseText) {
          oResponseJSON = responseJSON;
      };
  //private methods
  function createRequest(ai_bAsync) {
    return new Request({
        link: 'cancel',
        async: ai_bAsync,
        encoding: '',
        onSuccess: getResponse
    });
  }
  function createRequestJSON(ai_bAsync) {
    return new Request.JSON({
        link: 'cancel',
        async: ai_bAsync,
        encoding: '',
        onSuccess: getResponseJSON
    });
  }
  function send(ai_bJSON, ai_bAsync, ai_sUrl, ai_saParams, ai_function) {
    var i,
        sParams = '';

    //Encode parameters
    if (ai_saParams && ai_saParams.length !== 0) {
      for (i = 0; i < ai_saParams.length; i++) {
        if (sParams !== '') {
          sParams += '&';
        }
        sParams += ai_saParams[i][0] + '=' + encodeURIComponent(ai_saParams[i][1]);
      }
    }
    if (ai_bJSON) {
      if (oRequestSyncJSON) {oRequestSyncJSON.cancel();}
      oRequestSyncJSON = null;
      oRequestSyncJSON = createRequestJSON(ai_bAsync);
      if (ai_bAsync && (ai_function)) {oRequestSyncJSON.onSuccess = ai_function;}
      oRequestSyncJSON.send({
        url: ai_sUrl,
        data: sParams
      });
    } else {
      if (oRequestSync) {oRequestSync.cancel();}
      oRequestSync = null;
      oRequestSync = createRequest(ai_bAsync);
      if (ai_bAsync && (ai_function)) {oRequestSync.onSuccess = ai_function;}
      oRequestSync.send({
        url: ai_sUrl,
        data: sParams
      });
    }
  }
  function _cancelRequest() {
    if (oRequestSyncJSON) {oRequestSyncJSON.cancel();}
    if (oRequestSync) {oRequestSync.cancel();}
  }
  return {
    //public methods
    sendSync: function (ai_sUrl, ai_saParams) {
      //JSON, async, url, pramters
      send(false, false, ai_sUrl, ai_saParams);
    },
    sendAsync: function (ai_sUrl, ai_saParams, ai_function) {
      //JSON, async, url, pramters
      send(false, true, ai_sUrl, ai_saParams, ai_function);
    },
    getResponse: function () {
      return sResponse;
    },
    sendSyncJSON: function (ai_sUrl, ai_saParams) {
      //JSON, async, url, pramters
      send(true, false, ai_sUrl, ai_saParams);
    },
    sendAsyncJSON: function (ai_sUrl, ai_saParams, ai_function) {
      //JSON, async, url, pramters
      send(true, true, ai_sUrl, ai_saParams, ai_function);
    },
    getResponseJSON: function () {
      return oResponseJSON;
    },
    cancelRequest: function() {
      _cancelRequest();
    }
  };
} (); 

window.addEvent('domready', function() {
  document.addEvent('cancelAjax', function() {
    meta4Ajax.ajax.cancelRequest();
  });
});
