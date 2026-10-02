//-------------------------------------------------------------------------------------------------
//Compact with e.g. http://fmarcia.info/jsmin/test.html
//-------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------
//Methods related to get a photo with Ajax.
//Use with meta4Ajax.js, mootools.js
//-------------------------------------------------------------------------------------------------

var meta4Photo = {}

meta4Photo.Photo = function() {
  //private vars
  var l_sUrlData = '../sse_generico/sgco_mn_photo.jsp';                 //load photo jsp page
  var l_sPathNoPhoto = '/iconos/lu_anonimus_128.png';                   //no photo
  var l_objResponse = null;
  var l_objImg = null;
  var l_sCurIdHR = '';
  //private functions
  function _init(sPath, sPathURI, objImg) {

    var saParams = new Array;
    var oObjPhoto = null;

    l_objResponse = null;
    l_objImg = objImg;
    l_objImg.fade('hide');                                              //hide photo
    l_objImg.className = 'photo';                                       //class with css properties

    saParams[0] = ['Action', 'Set'];
    saParams[1] = ['Path', sPath];
    saParams[2] = ['PathURI', sPathURI];

    meta4Ajax.ajax.sendSync(l_sUrlData, saParams);                     //set path to meta4Object
  }

  function _showPhoto(id) {
    var saParams = new Array;
    var oObjPhoto = null;
    
    l_sCurIdHR = id;
    l_objImg.disabled = false;
    
    saParams[0] = ['Action', 'Load'];
    saParams[1] = ['IdHR', id];
    meta4Ajax.ajax.sendAsyncJSON(l_sUrlData, saParams, _loadPhotoEnd);  //load Async Photo using Ajax
  }

  function _hidePhoto() {
    l_objImg.fade('out');                                              //efect to hide photo
    l_objImg.disabled = true;
  }
  
  function _loadPhotoEnd(response) {
    var sPath = l_sPathNoPhoto;
    if (!l_objImg.disabled && response.sIdHR == l_sCurIdHR) {
      if (!response.sPathPhoto == "") {sPath = response.sPathPhoto;}   //show photo into container
      l_objImg.className = 'photo';                                    //class with css properties
      l_objImg.fade('in');                                             //efect to show photo
      l_objImg.src = sPath;
    }
  }

  return {
    //public methods
    init: function(sPath, sPathURI, objImg) {
      _init(sPath, sPathURI, objImg);                                  //init temp path to unload photo and functional object containts photo
    },

    showPhoto: function(sIDHR) {
      _showPhoto(sIDHR);                                               //show photo into container
    },
    
    hidePhoto: function() {
      _hidePhoto();
    }

  };

} ();
