//Original code file: meta4photo.raw_renhash_bebeea2b0f7c610c883d562cea0a8180_l3_dl_o_v1.js
//Use the above mentioned file for modifications or debugging.

var meta4Photo={}
meta4Photo.Photo=function(){var l_sUrlData='../sse_generico/sgco_mn_photo.jsp';var l_sPathNoPhoto='/iconos/lu_anonimus_128_renhash_9546b4423ba9b117df169d393decc739_l3_dl_o_v1.png';var l_objResponse=null;var l_objImg=null;var l_sCurIdHR='';function _init(sPath,sPathURI,objImg){var saParams=new Array;var oObjPhoto=null;l_objResponse=null;l_objImg=objImg;l_objImg.fade('hide');l_objImg.className='photo';saParams[0]=['Action','Set'];saParams[1]=['Path',sPath];saParams[2]=['PathURI',sPathURI];meta4Ajax.ajax.sendSync(l_sUrlData,saParams);}
function _showPhoto(id){var saParams=new Array;var oObjPhoto=null;l_sCurIdHR=id;l_objImg.disabled=false;saParams[0]=['Action','Load'];saParams[1]=['IdHR',id];meta4Ajax.ajax.sendAsyncJSON(l_sUrlData,saParams,_loadPhotoEnd);}
function _hidePhoto(){l_objImg.fade('out');l_objImg.disabled=true;}
function _loadPhotoEnd(response){var sPath=l_sPathNoPhoto;if(!l_objImg.disabled&&response.sIdHR==l_sCurIdHR){if(!response.sPathPhoto==""){sPath=response.sPathPhoto;}
l_objImg.className='photo';l_objImg.fade('in');l_objImg.src=sPath;}}
return{init:function(sPath,sPathURI,objImg){_init(sPath,sPathURI,objImg);},showPhoto:function(sIDHR){_showPhoto(sIDHR);},hidePhoto:function(){_hidePhoto();}};}();