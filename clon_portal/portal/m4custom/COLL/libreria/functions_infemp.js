//Original code file: function_infemp.raw.js
//Use the above mentioned file for modifications or debugging.

var m4InfEmp={}
m4InfEmp.Data=function(){var l_sIconMore='/iconos/menu_closed.png';var l_sIconLess='/iconos/menu_open.png';var l_oAction=null;function _init(){document.title=$('sHeadTitle').get('text');l_oAction=$('spnName');l_sgbName=l_oAction.innerHTML;l_oAction.Transition=new Fx.Morph(l_oAction);l_oAction.Transition.addEvent('complete',_endAction)}
function _action(sAction){l_oAction.style.color='#000';if(sAction=="0"){sAction=l_oAction.OK;}else{sAction=l_oAction.KO;}
_setHTML(l_oAction,sAction);l_oAction.Transition.start({'color':['#000','#555555']});}
function _endAction(){_setHTML(l_oAction,l_sgbName);l_oAction.style.color='#07346b';}
function _showMoreData(ev){var me=null;var oDiv=null;var i=0;me=ev.target;if(me.id=='imgPhone'){oDiv=$('divMorePhone');}else if(me.id=='imgEmail'){oDiv=$('divMoreEmail');}else if(me.id=='imgResp'){oDiv=$('divMoreResp');}
if(oDiv.Transition.open){me.src=l_sIconMore;}else{me.src=l_sIconLess;}
oDiv.Transition.toggle();}
function _addMoreObj(oObj){var oSpan=null;oObj.className='divVisible';oObj.Transition=new Fx.Slide(oObj);oObj.Transition.hide();}
function _setHTML(e,vvalue)
{e.innerHTML=vvalue;}
return{init:function(){_init();},addMoreObj:function(oObj){_addMoreObj(oObj);},showMoreData:function(ev){_showMoreData(ev);},action:function(sAction){_action(sAction);}};}();window.addEvent('domready',function(){var objDiv=null;var sLinkAddCont='/servlet/CheckSecurity/JSP/sse_g0/ssco_mn_contact.jsp';m4InfEmp.Data.init();meta4Photo.Photo.init(document.body.path,document.body.pathURI,$('imgPhoto'));meta4Photo.Photo.showPhoto(document.body.idHR);objDiv=$('divMorePhone');if(objDiv){m4InfEmp.Data.addMoreObj(objDiv);$('imgPhone').addEvent('click',function(e){e.stop();m4InfEmp.Data.showMoreData(e);});}
objDiv=$('divMoreEmail');if(objDiv){m4InfEmp.Data.addMoreObj(objDiv);$('imgEmail').addEvent('click',function(e){e.stop();m4InfEmp.Data.showMoreData(e);});}
objDiv=$('divMoreResp');if(objDiv){m4InfEmp.Data.addMoreObj(objDiv);$('imgResp').addEvent('click',function(e){e.stop();m4InfEmp.Data.showMoreData(e);});}
$('imgAddContact').addEvent('click',function(e){var aParams=new Array;var objResp=null;aParams[0]=['Action','Insert'];aParams[1]=['IdHR',e.target.idHR];meta4Ajax.ajax.sendSyncJSON(sLinkAddCont,aParams);objResp=meta4Ajax.ajax.getResponseJSON();if(objResp){m4InfEmp.Data.action(objResp.sResult);$('spnName').highlight('#a1a1a1');}});$('body').addEvent('resize',function(e){$('divInfoEmp').style.width='100%';$('divInfoEmp').style.height='100%'})});