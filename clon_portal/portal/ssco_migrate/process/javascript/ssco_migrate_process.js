
window.addEvent('domready', function()
{

  $('divbodymain').setOpacity(0);
  m4migrate.Ajax.init();

  m4migrate.sArraynames = 'mnombres';
  m4migrate.sArraylinks = 'mlinks';
 
  loadBody();

});

function loadBody () {

  switch (m4migrate.lang) {
    case 'en': {m4migrate.langfile='eng'; break;}
    case 'es': {m4migrate.langfile='esp'; break;}
    case 'fr': {m4migrate.langfile='fra'; break;}
    case 'pt': {m4migrate.langfile='por'; break;}
    case true: {m4migrate.langfile='eng'; break;}
  }

  m4migrate.translate.page('xml/'+ m4migrate.lang + '.xml', 'process', 'error');

}

m4migrate.translate.endTranslateDoc = function() {

  //split the string
  var aIDGroup = m4migrate.setGrps.split('{#}');
  var berror = false;

  for (var i=0; i<aIDGroup.length;i++) {
    if (aIDGroup[i] != '') {
      var aInfoGroup = aIDGroup[i].split('{|}');
  
      //Check if group exists
      try {
        if (eval(m4migrate.sArraynames + aInfoGroup[0] + '.length')) {
          berror = false;
        }
       }
      catch(e)
       {
         //this group has a problem
          berror = true;
       }
      addTable(aInfoGroup[0],aInfoGroup[1],aInfoGroup[2],aInfoGroup[3],berror);
    }
  }

  $('divspinner').setOpacity(0);
  $('divspinner').style.height = 0;
  $('divbodymain').tween('opacity', 0 ,1);

}

m4migrate.ID = function() {
  var maID = new Array();
  var miCounter = 0;
  var maDuplicates = new Array();
  
  function newID(sID) {
    maID[maID.length] = sID;
    return (maID.length - 1);
  }
  
  function modID(sID, i) {
    maID[i] = sID;
  }
  
  function checkID(sID, iIndex) {
    
    var i = maID.indexOf(sID);
    var bFound = false;
    while (i > -1) {
      if (i != iIndex) {
        bFound = true;
        i = -1;
      } else {
        i = maID.indexOf(sID, i+1);
      }
    }

    return bFound;
  }
  
  function getNewID(sID) {
    var iIndex = 0;
    if (sID.length < 27) {
      if (miCounter == 0) {
        sID = sID + '_' + (miCounter++);
      } else {
        iIndex = sID.lastIndexOf('_');
        sID = sID.substring(0,iIndex) + '_' + (miCounter++);
      }
    } else {
      iIndex = sID.lastIndexOf('_');
      sID = sID.substring(0,iIndex -1);
      iIndex = sID.lastIndexOf('_');
      sID = sID.substring(0,iIndex -1) + '_' + (miCounter++);
    }
    if (checkID(sID)) {sID = getNewID(sID);}
    return sID;
  }

  function getCalcID(sPrfx, slnk) {
    var sID = '';
    var aux = slnk;
    var alink = slnk.split('?');
    if (alink.length > 0) {
      aux = alink[0];
    }

    alink = aux.split('/');
    if (alink.length > 0) {
      aux = alink[alink.length-1];
    }

    alink = aux.split('.');
    if (alink.length > 0) {
      aux = alink[0];
    }

    var iIndex = aux.indexOf('_');
    if (iIndex > 0) {
      aux = aux.substring(iIndex+1);
    }

    sID = sPrfx + '_' + aux.toUpperCase();
    miCounter = 0;
    if (checkID(sID)) {sID = getNewID(sID);}
    return sID;
  }
  
  function addDup(sPk) {
    if (maDuplicates.indexOf(sPk)<0) {maDuplicates[maDuplicates.length] = sPk;}
  } 

  function removeDup(sPk) {
    maDuplicates.splice(maDuplicates.indexOf(sPk),1);
  }
  
  function getNDup() {
    return maDuplicates.length;
  }

  function getDup(i) {
    return maDuplicates[i];
  }
  
  return {
    setID: function(sID, i) {
      if (i) {modID(sID, i);}
      else {return newID(sID);}
    },
    
    checkDuplicity: function(sID, iIndex) {
      return checkID(sID, iIndex);
    },
    
    calculateID: function(sPrfx,slnk) {
      return getCalcID(sPrfx,slnk);
    },
    
    addDuplicate: function(sPk) {
      addDup(sPk);
    },
    
    removeDuplicate: function(sPk) {
      removeDup(sPk);
    },

    getDuplicate: function(i) {
      return getDup(i);
    },

    getDupCount: function() {
      return getNDup();
    }

  }
}();

m4migrate.row = function() {
  
  var oRequest = '';
  var oCurRow = '';
  var oCurTable = '';
  var oCurBody = '';
  var iCurTable = 0;
  var iCurRow = 0;
  
  return {
    
    checkRow: function(oRow) {
      
      oCurRow = oRow;
      
      oRequest = m4migrate.Ajax.getResponse();
      oRequest.abort();

      var Url = oCurRow.childNodes[4].id;
      var UrlNew = oCurRow.childNodes[4].idnew;
      var parameters = new Array();
      parameters[0] = new Array("sUrl", Url);
      parameters[1] = new Array("sUrlNew", UrlNew);
      
      m4migrate.Ajax.send('ssco_search_menu.jsp', parameters, m4migrate.row.getXMLData, false);
      
    },

    saveTable: function (iTable) {
      
      if (!iTable) {iTable = iCurTable;}

      if (iTable < m4migrate.tables.length()) 
       {
         iCurTable = iTable;
         oCurTable = document.getElementById(m4migrate.tables.getTable(iCurTable));

         if (oCurTable.childNodes.length > 1) 
          {
            oCurBody = oCurTable.tBodies[0];
            //process first row
            iCurRow = 0;
            m4migrate.row.saveRow();
          }

         else 
          {
            //save next table
            iCurTable ++;
            m4migrate.row.saveTable();
          }
       }
      else
       {
         $('btnStart').disabled = false;
         $('btnBack').disabled = false;
       }
    },
    
    saveRow: function() {

      if (iCurRow < oCurBody.childNodes.length) 
       {
         oCurRow = oCurBody.childNodes[iCurRow];
         if (oCurRow.childNodes[0].childNodes[0].checked) 
          {
            
            var oComent = $(oCurRow.childNodes[5].id);
            oComent.removeClass(oComent.getProperty('className'));

            var sIDMenu = oCurRow.childNodes[1].childNodes[0].value;
            var sIDParentMenu = oCurRow.childNodes[2].childNodes[0].value;
            var sName = oCurRow.childNodes[3].innerText;
            var sUrl = oCurRow.childNodes[4].idnew;

            oRequest = m4migrate.Ajax.getResponse();
            oRequest.abort();

            var parameters = new Array();
            parameters[0] = new Array("sIdEMMS", m4migrate.OptEMSS);
            parameters[1] = new Array("sIDMenu", sIDMenu);
            parameters[2] = new Array("sIDParentMenu", sIDParentMenu);
            parameters[3] = new Array("sName", sName);
            parameters[4] = new Array("sUrl", sUrl);

            m4migrate.Ajax.send('ssco_add_menu.jsp', parameters, m4migrate.row.getXMLSave, true);
          }
         else
          {
            //save next row
            iCurRow ++;
            m4migrate.row.saveRow();
          }
       }
      else 
       {
         //save next table
         iCurTable ++;
         m4migrate.row.saveTable();
       }
      
    },
    
    checkMenu: function() {

      var oXMLDOM = m4migrate.Ajax.getXMLDOM();
      var sIDMenu = '';
      var sIDParentMenu = '';
      var snmMenu = '';
      var sIDGrp = '';

      //parse result as XML
      oXMLDOM.loadXML(oRequest.responseText);

      //get result
      var menu = oXMLDOM.getElementsByTagName('menu');

      if (menu.length)
       {
        if (menu.length == 1) 
         {
           menu = menu[0];

           oCurRow.childNodes[1].childNodes[0].disabled = true;
           oCurRow.childNodes[5].innerText = m4migrate.warnings.getWarning('_0');
           oCurRow.childNodes[5].className = 'green';

           sIDMenu = m4migrate.row.getXMLDOMData(menu,'idmenu');
           if (sIDMenu != oCurRow.pk) 
            {
              //change ID by DDBB
              oCurRow.pk = sIDMenu;
              oCurRow.childNodes[1].childNodes[0].value = oCurRow.pk;
              oCurRow.childNodes[5].innerText =  m4migrate.warnings.getWarning('_1'); //' Cambiado el ID por el de BBDD.';
              oCurRow.childNodes[5].className = 'blue';
            }
           sIDParentMenu = m4migrate.row.getXMLDOMData(menu,'idparentmenu');
           snmMenu = m4migrate.row.getXMLDOMData(menu,'nmmenu');
           if (sIDParentMenu != oCurRow.pkfather)
            {
              oCurRow.pkfather = sIDParentMenu;
              oCurRow.childNodes[2].childNodes[0].value = oCurRow.pkfather;
              oCurRow.childNodes[5].innerText =  m4migrate.warnings.getWarning('_2');// ' Este submenú tiene un padre distinto en BBDD.';
              oCurRow.childNodes[5].className = 'blue';
            }
           else if (snmMenu != oCurRow.childNodes[3].innerText)
            {
              oCurRow.childNodes[5].innerText = m4migrate.warnings.getWarning('_3') + ': ' + snmMenu; //' El nombre del submenú no coincide: '
              oCurRow.childNodes[5].className = 'blue';
            }
         }
        else
         {
           // warning: we get two or more menu options with same URL
           oCurRow.childNodes[0].childNodes[0].disabled = true;
           oCurRow.childNodes[0].childNodes[0].checked = false;
           oCurRow.childNodes[5].innerText = m4migrate.warnings.getWarning('_4'); //'´La dirección URL ha sido encontrado más de una vez.';
           oCurRow.childNodes[5].className = 'red';
         }
       }
      else
       {
         oCurRow.childNodes[5].innerText =  m4migrate.warnings.getWarning('_5'); // New menu
       }
       
       oXMLDOM.abort();
      
    },
    
    
    checkSave: function() {

      var bSaveOK = true;
      var oXMLDOM = m4migrate.Ajax.getXMLDOM();
      //parse result as XML
      oXMLDOM.loadXML(oRequest.responseText);

      //get code error: 
      var sResult = '';
      try {sResult = oXMLDOM.getElementsByTagName('result')[0].text;}
      catch(e) {sResult = 'n.a.'}
      var sColor = '#619c69';
      
      if (sResult < 0) 
       {
         bSaveOK = false;
         sColor = '#CC0033'; //red
       }
      
      switch (sResult)
       { 
        case "-1": 
         {
           //fatal error
           sResult = m4migrate.errors.getError('_7');
           break;
         }
        case "-2": 
         {
           //parent not found
           sResult = m4migrate.errors.getError('_8');
           break;
         }
        case "-3": 
         {
           //URL empty
           sResult = m4migrate.errors.getError('_9');
           break;
         }
        case "-4": 
         {
           //ID Menu exists
           sResult = m4migrate.errors.getError('_13');
           break;
         }
        case "-5": 
         {
           //Problem to persist
           sResult = m4migrate.errors.getError('_14');
           break;
         }
        case "0": 
         {
           //OK
           sResult = m4migrate.errors.getError('_10');
           break;
         }
        case "1": 
         {
           //Success: menu add OK
           sResult = m4migrate.errors.getError('_10');
           break;
         }
        case "2": 
         {
           //Success: no menu added
           sResult = m4migrate.errors.getError('_11');
           sColor = '#0066CC';
           break;
         }
        case "3": 
         {
           //Success: menu name updated
           sResult = m4migrate.errors.getError('_12');
           break;
         }
       }

      var oComent = $(oCurRow.childNodes[5].id);
      var morph = new Fx.Morph(oCurRow.childNodes[5].id);
      
      oComent.innerText = sResult;
      morph.start({color: sColor});
      
      // if all OK then uncheked
      oCurRow.childNodes[0].childNodes[0].checked = !bSaveOK;

      oXMLDOM.abort();
      
      //check next row
      iCurRow ++;
      m4migrate.row.saveRow();

    },
    
    getXMLData: function() {
      if (oRequest.readyState == 4) 
       {
         if (oRequest.status == 200)
          {
            m4migrate.row.checkMenu();    
          }
         else
          {
            // have a problem with the response
            alert('The page can not load. Press F5 to try it again.');
          }
       }
    },

    getXMLSave: function() {
      if (oRequest.readyState == 4) 
       {
         if (oRequest.status == 200)
          {
            m4migrate.row.checkSave();    
          }
         else
          {
            // have a problem with the response
            alert('The page can not load. Press F5 to try it again.');
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

m4migrate.tables = function () {
  
   // private vars
   var aTable = new Array();
   
   return {
     
     getTable: function(n) {
       return aTable[n] || 'n.a.';
     },
     
     setTable: function(e) {
       aTable[aTable.length] = e;
     },
     
     length: function() {
       return aTable.length;
     },
     
     saveTables: function () {
      //process first table
      m4migrate.row.saveTable(0);
     }
   }

}();


function addTable(sIdGrp, snGrp, sNameGrp, sPortal, bError) {
  
  var sdivmain = document.getElementById('divtable');
  var otable = document.createElement('table');
  
  otable.id = sIdGrp;
  m4migrate.tables.setTable(sIdGrp,sIdGrp);
  
  var oCap = otable.createCaption();
  oCap.innerText = 'Grupo ';

  var oSpan = document.createElement('span');
  oSpan.innerText = '\'' + snGrp + '\'';
  oCap.appendChild(oSpan);
  
  oSpan = document.createElement('span');
  oSpan.className='cpitalic';
  oSpan.innerText = ': \'' + sNameGrp + ' - ' + sPortal + '\'' ;
  oCap.appendChild(oSpan);
  
  if (bError) 
   {
     oCap.innerHTML = m4migrate.warnings.getWarning('_6').replace('%1','<span>\'' + snGrp + '\'</span>: <span class=cpitalic>\'' + sNameGrp + '\'</span>'); //'La definición del grupo \' + snGrp + ': ' + sNameGrp + '\' no ha sido encontrada.' ; 
     oCap.className = 'nofound';
   }
  else 
   {
     var mygroup = '';
     var mylink = '';
     var ilength = 0;
     var aIDfather = '';
     var i = 0;
     var sNameSubmenu = '';
     var slinkSubmenu = '';
     var sidSubmenu = '';
     var j = 0;
     var ilevel = '';
     var sidfather = '';
     var oRow = '';
     
     createHeader(otable);
     
     var oBody = otable.tBodies[0];
     
     insertHeaderBody(oBody, sIdGrp, snGrp, sNameGrp, sPortal);

     mygroup = m4migrate.sArraynames + sIdGrp;
     mylink = m4migrate.sArraylinks + sIdGrp;
    
     ilength = eval(mygroup + '.length');
     
     aIDfather = new Array;
     aIDfather[0] = snGrp;
     
     var oPar = document.createElement('p');
    
     for (i=0;i<ilength;i++) 
      {
        sNameSubmenu = eval(mygroup + '[' + i + ']');
        if (sNameSubmenu != '') 
         {
           slinkSubmenu = eval(mylink + '[' + i + ']');
           sidSubmenu = m4migrate.ID.calculateID(m4migrate.IDPrefix, slinkSubmenu);

           oPar.innerHTML = sNameSubmenu;
           
           //count the number of blanks
           j = 0;
           while (oPar.innerText.charAt(j) == ' ') 
            {
              j++;
            }
           ilevel = j/2;
           sIDFather = aIDfather[ilevel];
           oPar.innerHTML = oPar.innerText;
           sNameSubmenu = oPar.innerText;

           oRow = insertRow(oBody, sIdGrp, sidSubmenu, sIDFather, sNameSubmenu, slinkSubmenu);

           //check URL
           m4migrate.row.checkRow(oRow);

           aIDfather[ilevel+1] = oRow.childNodes[1].childNodes[0].value;
         }      
      }
   }

  sdivmain.appendChild(otable);

}

function createHeader(otable) 
{

  var oHead = otable.createTHead();
  var oRow = oHead.insertRow(0);

  var oCell = oRow.insertCell(-1)
  oCell.id='lblcheck';

  oCell = oRow.insertCell(-1);
  oCell.innerText = m4migrate.labels.getLabel('_2'); // 'ID Menú';
  oCell.id='lblidmenu';

  oCell = oRow.insertCell(-1);
  oCell.innerText = m4migrate.labels.getLabel('_3'); // 'ID Menú padre';
  oCell.id='lblidparentmenu';

  oCell = oRow.insertCell(-1);
  oCell.innerText = m4migrate.labels.getLabel('_4'); // 'Nombre Menú';
  oCell.id='lblmenuname';
  
  oCell = oRow.insertCell(-1);
  oCell.innerText = m4migrate.labels.getLabel('_5'); // 'Página';  
  oCell.id='lblsite';

  oCell = oRow.insertCell(-1);
  oCell.innerText = m4migrate.labels.getLabel('_6'); // 'Comentario';  
  oCell.id='lblcoment';

}

function insertHeaderBody(oBody, sIdGrp, snGrp, sNameGrp, slink) 
{
  var oRow = '';
  var oCell = '';
  var oInput = '';
  
  // insert new file
  oRow = oBody.insertRow(-1);

  // insert the check cell
  oCell = oRow.insertCell(-1);
  // create check
  oInput = document.createElement('input');
  oInput.type = 'checkbox';
  oInput.name = sIdGrp + '_0_0';
  oInput.defaultChecked = true;
  oInput.disabled = true;
  oInput.className='idcheck';
  oCell.appendChild(oInput);

  // insert the ID Menu cell
  oCell = oRow.insertCell(-1);
  // add input for ID menu
  oInput = document.createElement('input');
  oInput.type = 'text';
  oInput.name = sIdGrp + '_0_1';
  oInput.value = snGrp;
  oInput.disabled = true;
  oCell.appendChild(oInput);

  // insert the ID Parent Menu cell
  oCell = oRow.insertCell(-1);
  // add input for ID Menu Parent
  oInput = document.createElement('input');
  oInput.type = 'text';
  oInput.name = sIdGrp + '_0_2';
  oInput.disabled = true;
  oInput.value = 'SSCO_MENU';
  if (m4migrate.OptEMSS == 0) {oInput.value = 'SMCO_MENU';}
  oCell.appendChild(oInput);

  // insert the menu name cell
  oCell = oRow.insertCell(-1);
  oCell.innerHTML = sNameGrp;

  // insert the URL cell
  oCell = oRow.insertCell(-1);
  oCell.innerHTML = removeEstado(showURL(slink));
  oCell.id = slink;
  oCell.idnew = removeEstado(slink);

  // insert the comment cell
  oCell = oRow.insertCell(-1);
  oCell.style.backgroundColor='whitesmoke';
  oCell.id = sIdGrp + '_0_5';
  oCell.innerText = m4migrate.labels.getLabel('_7');

  oRow.pk = oRow.childNodes[1].childNodes[0].value;
  oRow.pkfather = oRow.childNodes[2].childNodes[0].value;
  
  m4migrate.ID.setID(snGrp);

}

function insertRow(oBody, sIdGrp, sidSubmenu, sIDParent, sNameSubmenu, slinkSubmenu)
{
  var ilength = 0;
  var oCell = '';
  
  // insert new file
  var oRow = oBody.insertRow(-1);
  
  ilength = oBody.childNodes.length;
  
  // insert the check cell
  oCell = oRow.insertCell(-1);
  // create check
  oInput = document.createElement('input');
  oInput.type = 'checkbox';
  oInput.name = sIdGrp + '_' + ilength + '_0';
  oInput.defaultChecked = true;
  oInput.className='idcheck';
  oCell.appendChild(oInput);

  // insert the ID Menu cell
  oCell = oRow.insertCell(-1);
  // add input for ID menu
  oInput = document.createElement('input');
  oInput.id = sidSubmenu;
  oInput.type = 'text';
  oInput.name = sIdGrp + '_' + ilength + '_1';
  oInput.value = sidSubmenu;
  oInput.oldvalue = sidSubmenu;
  oInput.onkeyup = changeID;
  oInput.onkeypress = changeUPPER;
  oCell.appendChild(oInput);

  // insert the ID Parent Menu cell
  oCell = oRow.insertCell(-1);
  // add input for ID Menu Parent
  oInput = document.createElement('input');
  oInput.type = 'text';
  oInput.name = sIdGrp + '_' + ilength + '_2';
  oInput.value = sIDParent;
  oInput.disabled = true;
  oCell.appendChild(oInput);
        
  // insert the menu name cell
  oCell = oRow.insertCell(-1);
  oCell.innerHTML = sNameSubmenu;

  // insert the URL cell
  oCell = oRow.insertCell(-1);
  oCell.innerHTML = removeEstado(showURL(slinkSubmenu));
  oCell.id = slinkSubmenu;
  oCell.idnew = removeEstado(slinkSubmenu);

  // insert the comment cell
  oCell = oRow.insertCell(-1);
  oCell.style.backgroundColor='whitesmoke';
  oCell.id = sIdGrp + '_' + ilength + '_5';
  
  oRow.pk = oRow.childNodes[1].childNodes[0].value;
  oRow.indexid = m4migrate.ID.setID(oRow.pk);
  oRow.pkfather = oRow.childNodes[2].childNodes[0].value;

  return oRow;

}

function showURL(sURL) {

  var sAuxL = '';
  var sAuxR = '';
  var sAuxURL = sURL;
  var iPos = 0;
  
  iPos = sURL.indexOf('.');
  if (iPos > 0) {
    sAuxR = sURL.substr(iPos);
    sAuxL = sURL.substr(0, iPos);
    iPos = sAuxL.lastIndexOf('/');
    if (iPos > 0) {
      sAuxR = sAuxL.substr(iPos) + sAuxR;
      sAuxL = sURL.substr(0, iPos);
      iPos = sAuxL.lastIndexOf('/');
      if (iPos > 0) {
        sAuxL = sAuxL.substr(iPos+1);
      }
    }
    sAuxURL = sAuxL + sAuxR;
  }
  
  return sAuxURL;
}

function removeEstado(sURL) {
  
  var sAuxURL = sURL;
  var sAuxParams = "";
  var iPar = 0;
  
  var aParams = sURL.split('?');
  
  if (aParams.length > 1)
   {
     sAuxURL = aParams[0]; 
     sAuxParams = aParams[1];
     aParams = sAuxParams.split('&');
     sAuxParams = "";
     for (iPar=0; iPar<aParams.length; iPar++)
      {
        if (aParams[iPar].indexOf('estado') == -1)
         {
           sAuxParams += aParams[iPar] + "&";
         }
        else
         {
           var aParamsPar = aParams[iPar].split('=');
           if (aParamsPar[0] != 'estado') 
            {
              sAuxParams += aParams[iPar] + "&";
            }
         }
      }
     
     if (sAuxParams != "")
      {
        sAuxParams = '?' + sAuxParams.substr(0,sAuxParams.length - 1);
        sAuxURL = sAuxURL + sAuxParams;
      }
   }

  return sAuxURL;
}

function changeUPPER() {
  if ((window.event.keyCode>96 && window.event.keyCode<123) || (window.event.keyCode==231) || (window.event.keyCode==241)) {
    window.event.keyCode = String.fromCharCode(window.event.keyCode).toUpperCase().charCodeAt(0);
  }  
}

function changeID() {
  if (this.value == this.oldvalue) {return;}
  //get pk and pkfather row
  var spk = this.parentNode.parentNode.pk;
  var iIndex = this.parentNode.parentNode.indexid;
  //check duplicity ID
  m4migrate.ID.setID(this.value,iIndex);
  if (m4migrate.ID.checkDuplicity(this.value, iIndex)) {
    //can not continue process: ID duplicate
    $('btnStart').disabled = true;
    this.style.backgroundColor = '#e3e3e3';
    m4migrate.ID.addDuplicate(spk);
  } else if (this.style.backgroundColor == '#e3e3e3') {
    this.style.backgroundColor = '';
    m4migrate.ID.removeDuplicate(spk);
  }
  
  if (m4migrate.ID.getDupCount() == 0) {
    $('btnStart').disabled = false;
  } else {
    //check again all duplicates (only)
    checkDuplicates(this.oldvalue);
  }

  //get rows container
  var oBody = this.parentNode.parentNode.parentNode;
  
  for (var i=0;i<oBody.childNodes.length;i++) {
    if (oBody.childNodes[i].pkfather == spk){
      oBody.childNodes[i].childNodes[2].childNodes[0].value = this.value;
    }
  }
  this.oldvalue = this.value;
}

function checkDuplicates(sValue) {
  for (var i=m4migrate.ID.getDupCount()-1;i>-1;i--) {
    if ($(m4migrate.ID.getDuplicate(i)).value == sValue) {
      $(m4migrate.ID.getDuplicate(i)).style.backgroundColor = '';
      m4migrate.ID.removeDuplicate(sValue);
    }
  }
}

function back() {

 $('idPrefix').value = m4migrate.IDPrefix;
 $('idSetEMSS').value = m4migrate.OptEMSS;
 $('idPageProc').value = m4migrate.pageProc;
 frmBack.submit();

}

function processRows() {

 $('btnStart').disabled = true;
 $('btnBack').disabled = true;

 //process first table
 m4migrate.tables.saveTables();
 
}

function whatdo() {

  if ($('btnStart').disabled) {return;}
 
  if (window.event && window.event.keyCode == 13) 
   {
     //press enter -> processRows
     processRows();
   }
  else if (window.event && window.event.keyCode == 27) 
   {
     //press escape -> back
     back();
   }
}