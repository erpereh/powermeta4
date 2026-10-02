
window.addEvent('domready', function()
{
  $('divbodymain').setOpacity(0); 
  m4migrate.Ajax.init();
  m4migrate.langfile = '';
  m4migrate.bInitLoad = true;
  m4migrate.IDRoot = ''

  loadBody();

});

function loadBody() 
{

  switch (m4migrate.lang) {
    case 'en': {m4migrate.langfile='eng'; break;}
    case 'es': {m4migrate.langfile='esp'; break;}
    case 'fr': {m4migrate.langfile='fra'; break;}
    case 'pt': {m4migrate.langfile='por'; break;}
    case true: {m4migrate.langfile='eng'; break;}
  }
 
  m4migrate.translate.page('xml/'+ m4migrate.lang + '.xml', 'config', 'error');

  var bChange = true;
  
  if ((m4migrate.prefix) && (m4migrate.pageproc) && (m4migrate.emss))
   {
     m4migrate.IDRoot = 'SSCO_MENU';
     $('idPrefix').value = m4migrate.prefix;
     $('idPageProc').value = m4migrate.pageproc;
     $('idSetEMSS').value = m4migrate.emss;
     if (m4migrate.emss == 0)
      {
        $('selOptions').selectedIndex = 1;
        m4migrate.IDRoot = 'SMCO_MENU';
      }
     bChange = false;
   }

  if (bChange)
   {
     changeOpt($('selOptions'));
   }

  m4migrate.bInitLoad = false;
 
}

m4migrate.translate.endTranslateDoc = function() {

  m4migrate.menus.load(m4migrate.IDRoot);

}

m4migrate.menus = function() {

  var oRequest = '';
  
  return {
    //public methods
    load: function(idRoot) {

      if ($('divbodymain').getOpacity() != 0) 
       {
        $('divtable').setOpacity(0);
       }
      //load menus from page using Ajax
      var parameters = new Array();
      parameters[0] = new Array("idRoot", idRoot);
      
      oRequest = m4migrate.Ajax.getResponse();
      oRequest.abort();
      
      m4migrate.Ajax.send('ssco_load_menu.jsp', parameters, m4migrate.menus.getXMLData, true);
    },

    showMenus: function() {

      var oXMLDOM = m4migrate.Ajax.getXMLDOM();
      var sIDmenu = '';
      var sNmenu = '';
      var sHTTP = '';
      var iNSubmenu = 0;
      var iIndex = 0;
      var sAux = '';

      deleteRows();
  
      //parse result as XML
      oXMLDOM.loadXML(oRequest.responseText);

      var omenus = oXMLDOM.getElementsByTagName('menu');
  
      for (i=0;i<omenus.length;i++) 
       {
        sIDmenu = m4migrate.menus.getXMLDOMData(omenus[i], 'idmenu');
        sAux = sIDmenu.substr(sIDmenu.lastIndexOf('_') + 1);
        if ((sAux.length > 1) && (sAux.substring(0,1) == 'G')) {
           sAux = sAux.substr(1);
        }
        else {continue;}
     
        sNmenu = m4migrate.menus.getXMLDOMData(omenus[i], 'nmmenu');
        sHTTP = m4migrate.menus.getXMLDOMData(omenus[i], 'nmHTTP');
        iNSubmenu = m4migrate.menus.getXMLDOMData(omenus[i], 'nsubmenu');
     
        addNewRow(sIDmenu, sAux, sNmenu, sHTTP, iNSubmenu, true);

      }
      
      oXMLDOM.abort();
      
      if ($('divbodymain').getOpacity() == 0) 
       {
        $('divspinner').setOpacity(0);
        $('divspinner').style.height=0;
        $('divbodymain').tween('opacity', 0 ,1);
       }
      else {
        $('divtable').tween('opacity', 0 ,1);
      }
    },
    
    getXMLData: function() {
      if (oRequest.readyState == 4) 
       {
         if (oRequest.status == 200)
          {
            m4migrate.menus.showMenus();    
          }
         else
          {
            // have a problem with the response
            alert('The page can not load. Press F5 to try it again.');
            $('divbodymain').tween('opacity', 0 ,1);
          }
       }
    },

    getXMLDOMData: function (element, attr) {

      var stext = '';
      try {stext = element.getElementsByTagName(attr)[0].text;}
      catch(e) {stext = 'n.a.'}
      return stext;

    }
 }

}();

function onlynumber() {
  var skey = (document.all) ? window.event.keyCode : null;
  if (skey < 48 || skey > 57) return false;
}

function disconnect() {

 document.location.href="/servlet/CheckSecurity/jsp/ssco_migrate/ssco_logout.jsp";

}

function changeOpt(objSel) {

  var oOpt = objSel.options[objSel.selectedIndex].value;

  $('idPageProc').value = '/libreria/menu_' + oOpt + '_' + m4migrate.langfile + '.js'
  if (oOpt=='sse') {
    $('idPrefix').value ='CSCO';
    $('idSetEMSS').value = 1;
    m4migrate.IDRoot = 'SSCO_MENU';
   }
  else if (oOpt=='mss') {
    $('idPrefix').value ='CMCO';
    $('idSetEMSS').value = 0;
    m4migrate.IDRoot = 'SMCO_MENU';
   }
   
  if (!m4migrate.bInitLoad)
   {
     m4migrate.menus.load(m4migrate.IDRoot);
   }
  
}

function addNewRow(idGroup, idNGroup, nmGroup, nmSiteGroup, nSubmenu, isBBDD) {

  var otBody = '';
  var oRow = '';
  var oCell = '';
  var oInput = '';
  var oDiv = '';
  var iLength = 0;
  
  // get table body
  otBody = tblShowGroups.tBodies[0];
  iLength = otBody.childNodes.length;
  
  // insert new row
  var iPos = -1;
  if (isBBDD) {iPos = 0}
  oRow = otBody.insertRow(iPos);
  oRow.pk = idNGroup;
  oRow.id = idGroup;
  oRow.isBBDD = isBBDD;
  
  // insert id cell
  oCell = oRow.insertCell(-1);
  oDiv = document.createElement('div');
  oInput = document.createElement('input');
  oInput.className = 'idgroup';
  oInput.type = 'text';
  oInput.name = 'ID_' + iLength + idGroup;
  oInput.maxLength = 2;
  oInput.size = oInput.maxLength;
  oInput.value = idNGroup;
  oInput.onkeypress = onlynumber;
  oInput.onkeyup = validatecheck;
  if (idGroup != '') 
   {
     oInput.disabled = true;
   }
  oDiv.name = 'div' + oInput.name
  oDiv.appendChild(oInput);
  oCell.appendChild(oDiv);
  
  // insert name cell
  oCell = oRow.insertCell(-1);
  oDiv = document.createElement('div');
  oInput = document.createElement('input');
  oInput.className = 'idnamegroup';
  oInput.type = 'text';
  oInput.name = 'NM_' + iLength + idGroup;
  oInput.maxLength = 50;
  oInput.size = oInput.maxLength;
  oInput.value = nmGroup;
  oInput.onkeyup = validatecheck;
  oDiv.name = 'div' + oInput.name
  oDiv.appendChild(oInput);
  oCell.appendChild(oDiv);
  
  // insert site cell
  oCell = oRow.insertCell(-1);
  oDiv = document.createElement('div');
  oInput = document.createElement('input');
  oInput.className = 'idsitegroup';
  oInput.type = 'text';
  oInput.maxLength = 100;
  oInput.size = oInput.maxLength;
  oInput.name = 'ST_' + iLength + idGroup;
  oInput.value = nmSiteGroup;
  oInput.onkeyup = validatecheck;
  if (idGroup != '') 
   {
     oInput.disabled = true;
   }
  oDiv.name = 'div' + oInput.name
  oDiv.appendChild(oInput);
  oCell.appendChild(oDiv);

  // insert site cell
  oCell = oRow.insertCell(-1);
  oCell.innerText = nSubmenu;
  
  // insert check cell
  oCell = oRow.insertCell(-1);
  oDiv = document.createElement('div');
  oInput = document.createElement('input');
  oInput.className = 'idchecked';
  oInput.type = 'checkbox';
  oInput.name = 'ST_' + iLength + idGroup;
  oInput.defaultChecked = (idGroup != '');
  oInput.onclick = validateRow;
  oDiv.name = 'div' + oInput.name
  oDiv.appendChild(oInput);
  oCell.appendChild(oDiv);

}

function deleteRows() {
  
  var oRow = '';
  
  // get table body
  var otBody = tblShowGroups.tBodies[0];
  
  for (var i=otBody.childNodes.length-1; i>=0; i--) {
    oRow = otBody.childNodes[i];
    if (oRow.isBBDD) {
      otBody.deleteRow(i);
    }
  }

}

function validateRow() {

  var oRow = this.parentNode.parentNode.parentNode;
  var bChecked = true;
  var vValue = '';
  
  if (this.checked && oRow.isBBDD && (oRow.childNodes[1].childNodes[0].childNodes[0].value == '')) 
   {
     alert(m4migrate.errors.getError('_3'));
     //alert('El nombre del grupo no puede ser nulo.');
     this.checked = false;
   }
  else if (this.checked && !oRow.isBBDD) {
    //check all parameters
    vValue = oRow.childNodes[0].childNodes[0].childNodes[0].value;
    if (vValue== '' || isNaN(vValue)) {
      oRow.childNodes[0].childNodes[0].childNodes[0].focus();
      alert(m4migrate.errors.getError('_1'));
      //alert('El identificador del grupo es obligatorio y debe ser un número.');
      bChecked = false;
     }
    else if (!validateID(vValue, oRow.pk)) {
      oRow.childNodes[0].childNodes[0].childNodes[0].focus();
      alert(m4migrate.errors.getError('_2'));
      //alert('El identificador del grupo está repetido.');
      bChecked = false;
     } 
    else if (oRow.childNodes[1].childNodes[0].childNodes[0].value == '') {
      oRow.childNodes[1].childNodes[0].childNodes[0].focus();
      alert(m4migrate.errors.getError('_3'));
      //alert('El nombre del grupo no puede ser nulo.');
      bChecked = false;
     } 
    else if (oRow.childNodes[2].childNodes[0].childNodes[0].value == '') {
      oRow.childNodes[2].childNodes[0].childNodes[0].focus();
      alert(m4migrate.errors.getError('_4'));
      //alert('La dirección del portal no puede ser nulo.');
      bChecked = false;
     } 
    
    if (!bChecked) {
      this.checked = bChecked;
     }
    else {
      oRow.pk = vValue;
     }
  }

}

function validateID(idGrp, rowPk) {

  // get table body
  var otBody = tblShowGroups.tBodies[0];
  var oRow = '';

  for (var i=0; i<otBody.childNodes.length; i++) {
    oRow = otBody.childNodes[i];
    if ((oRow.pk != rowPk) && (oRow.childNodes[0].childNodes[0].childNodes[0].value == idGrp)) 
     {
       return false;
     }
  }  
  
  return true;
}

function validatecheck() {

  if (this.value == '') {
    var oRow = this.parentNode.parentNode.parentNode;
    oRow.childNodes[4].childNodes[0].childNodes[0].checked=false;
    if (!oRow.isBBDD) {oRow.pk = '';}
  }
}

function valPrefix() {
 
  if (event.keyCode == 32) return event.keyCode='';
  if ((window.event.keyCode>96 && window.event.keyCode<123) || (window.event.keyCode==231) || (window.event.keyCode==241)) {
    window.event.keyCode = String.fromCharCode(window.event.keyCode).toUpperCase().charCodeAt(0);
  }  

}

function validate() {
 
 var iNCheked = 0;

 if ($('idPageProc').value == '') {
   alert(m4migrate.errors.getError('_5'));
   //alert('La página de proceso es obligatoria.'); 
   $('idPageProc').focus();
   return;
 }

 if ($('idPrefix').value == '' || $('idPrefix').length<4) {
   alert(m4migrate.errors.getError('_6'));
   //alert('El prefijo del ID es obligatorio y debe contener 4 caracteres.'); 
   $('idPrefix').focus();
   return;
 }
 
 //Fill the input group with the idSetGrps defined
 var sidSetGrps = $('idSetGrps');
 sidSetGrps.value = '';
 var oRow = '';

 var otBody = tblShowGroups.tBodies[0];

 for (var i=0; i<otBody.childNodes.length; i++) {
   oRow = otBody.childNodes[i];
   if (oRow.childNodes[4].childNodes[0].childNodes[0].checked) {
     if (oRow.id == '') {oRow.id = $('idPrefix').value + '_G' + oRow.pk;}
     sidSetGrps.value = sidSetGrps.value + oRow.pk;
     sidSetGrps.value = sidSetGrps.value + '{|}' + oRow.id;
     sidSetGrps.value = sidSetGrps.value + '{|}' + oRow.childNodes[1].childNodes[0].childNodes[0].value;
     sidSetGrps.value = sidSetGrps.value + '{|}' + oRow.childNodes[2].childNodes[0].childNodes[0].value + '{#}';
     iNCheked ++;
   }
 }

 if (iNCheked == 0) 
  {
    alert(m4migrate.warnings.getWarning('_7')); 
    return;
  }
 
 //If all OK then submit the form
 document.frmprocess.submit();

}

function whatdo() {

  if (window.event && window.event.keyCode == 13) 
   {
     //press enter -> processRows
     validate();
   }
  else if (window.event && window.event.keyCode == 27) 
   {
     //press escape -> back
     disconnect();
   }
}

function activate(e) {
  
  var classfocus = '';
  
  if (e.id=='selOptions') {classfocus='';}
  else {classfocus='.frmprocess .inputfocus';}
  
  if (classfocus != '') {$(e.id).morph(classfocus);}
  
  if (e.id=="selOptions") {$('lblOptions').morph('.frmprocess .labelfocus');}
  else if (e.id=="idPrefix") {$('lblidPrefix').morph('.frmprocess .labelfocus');}
  else if (e.id=="idPageProc") {$('lblidPageProc').morph('.frmprocess .labelfocus');}
  
}

function deactivate(e) {

  var classfocus = '';
  
  if (e.id=='selOptions') {classfocus='';}
  else {classfocus='.frmprocess .inputnofocus';}
  
  if (classfocus != '') {$(e.id).morph(classfocus);}
  
  if (e.id=="selOptions") {$('lblOptions').morph('.frmprocess .labelnofocus');}
  else if (e.id=="idPrefix") {$('lblidPrefix').morph('.frmprocess .labelnofocus');}
  else if (e.id=="idPageProc") {$('lblidPageProc').morph('.frmprocess .labelnofocus');}

}
