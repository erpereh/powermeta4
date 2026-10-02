//-------------------------------------------------------------------------------------------------
//Compact with e.g. http://fmarcia.info/jsmin/test.html
//-------------------------------------------------------------------------------------------------

m4Eval = {};

//-------------------------------------------------------------------------------------------------
//Methods related to get parameters
m4Eval.evalDetail = function () {

  var l_sIdObjective = "";                                  //Objective Id parameter
  var l_sIdExtdKn = "";                                     //Extended Knowledge Id parameter
  var l_sIdLevel = "";                                      //Level Id parameter
  var l_sIdMagnitud = "";                                   //Magnitud Id parameter
  var l_sDtStart = "";                                      //Date Start parameter
  var l_bFollowup = false;                                  //Is Follow-up?
  var l_iNode = 0;                                          //Node number for JSON

  var l_iTemplate = -1;                                     //Template number to create
  var l_lObjTop = -1;                                       //Object top

  var l_sUrlData = '../sse_generico/sgco_eval_data.jsp';    //jsp page to get data

  function _show(objParams) {

    _getObjTop(objParams);

   m4Eval.templates.init();

   //copy variables from object to private variables
   l_sIdObjective = objParams.getAttribute('IdObjective');
   l_sIdExtdKn = objParams.getAttribute('IdExtdKn');
   l_sIdMagnitud = objParams.getAttribute('IdMagnitud');
   l_sIdLevel = objParams.getAttribute('IdLevel');
   l_sDtStart = objParams.getAttribute('DtStart');
   l_bFollowup = objParams.getAttribute('bFollowup');
   l_iNode = -1;

   //calculate node and template to use
   if (l_sIdLevel) {        //Cualitative Objectives -> template 1
     l_iNode = 1;
     if (l_sIdExtdKn) {
       l_iNode = 4;
     }
     if (l_bFollowup) {
       l_iNode = 2;
       if (l_sIdExtdKn) {
         l_iNode = 5;
       }
     }
     l_iTemplate = 1;
   } 

   if (l_sIdMagnitud) {     //Quantitative Objectives -> template 2
     l_iNode = 3;
     l_iTemplate = 2;
   }

   if (l_iNode == -1 && (l_sIdObjective)) {
     l_iTemplate = 1;
     l_iNode = 6;
   }

   m4Eval.templates.showBack(l_iTemplate);                   //Show skin before get data

  }

  function _getData() {

    //get data from .jsp page
    var saParams = new Array;
    var objResponse = null;

    saParams[0] = ['Node', l_iNode];
    saParams[1] = ['IdObjective', l_sIdObjective];
    saParams[2] = ['IdExtdKn', l_sIdExtdKn];
    saParams[3] = ['IdMagnitud', l_sIdMagnitud];
    saParams[4] = ['DtStart', _format2ISO(l_sDtStart)];

    meta4Ajax.ajax.sendSyncJSON(l_sUrlData, saParams);
    // get Response
    objResponse = meta4Ajax.ajax.getResponseJSON();
    if (objResponse) {
      objResponse.lObjectTop = l_lObjTop;
      objResponse.sIdLevel = l_sIdLevel;

      m4Eval.templates.fillTemplate(objResponse);

    } else {
      //an error has ocurred with data
    }
  }

  function _getObjTop(obj) {
    var objParent = null;

    l_lObjTop = obj.offsetTop + (obj.offsetHeight/2);
    objParent = obj.offsetParent;
    while (objParent) {
      l_lObjTop += objParent.offsetTop;
      objParent = objParent.offsetParent;
    }
  }

  function _format2ISO(sDate) {
    if (sDate) {
      return  m4date_back(sDate);
    }
    return '';
  }

  return {

    show: function (objLink) {
      _show(objLink);
    },

    getData: function() {
      _getData();
    }

  };

} ();

m4Eval.templates = function () {

  var l_dvBackCon = null;
  var l_dvHeader = null;
  var l_spHeaderTl = null;
  var l_btnClose = null;
  var l_dvBody = null;
  var l_dvBdTitle = null;
  var l_dvTableEval = null;
  var l_dvBdSubTitle = null;

  var l_iTemplate = -1;
  var l_sPathImgClose = '/iconos/lu_close_1_24.png';
  var l_sIDTr = null;

  function _init() {
    //Start common objects//
    
    if (l_dvBackCon) {return}

    //divBackContent
    l_dvBackCon = _createElement('div', 'divBackContent', null, 200, null, null);

    //divHeaderEval
    l_dvHeader = _createElement('div', 'divHeaderEval', 'dvHeaderEval', 250, null, null);

    //spanHdTitleTmpl
    l_spHeaderTl = _createElement('span', 'spanHDTitleEval', 'spnHDTitleEval', 250, l_dvHeader.id, null);

    //imgClose
    l_btnClose = _createElement('img', 'imgClose', 'imgEnabled', 300, null, null);
    l_btnClose.addEvent('click', function(e) {_btnCloseEv(e)});

    //divBodyTmpl
    l_dvBody = _createElement('div', 'divBodyTmpl', 'dvBodyEval', 250, null, null);
    
    //when body resize, div object to disabled body resize too
    document.body.onresize = _resizeContent;
  }
  
  function _showBack(iTemplate) {
    l_dvBackCon.setStyle('width', '100%');
    l_dvBackCon.setStyle('height', '100%');
    l_dvBackCon.Transition.start({
     'backgroundColor': '#000',
     'opacity': 0.4
    }).chain(
      function() {
        l_dvBackCon.hide = !l_dvBackCon.hide;
        _buildTemplate(iTemplate);
      }
    );
  }
  
  function _buildTemplate(iTemplate) {
    //build objects to show template
    var objLocal = null;
    var objTH = null;
    var objRow = null;
    var objCol = null;
    
    //Common elements
    if (!l_dvBdTitle) {
      //Create div to main title
      l_dvBdTitle = _createElement('div', 'divBdTitle', 'dvBdTitle', 250, l_dvBody.id, null);

      //span to show lable title
      objLocal = _createElement('span', 'spanBdTitleEval', 'spnBdTitleEval', 250, l_dvBdTitle.id, null);

      //span to show text title
      objLocal = _createElement('span', 'spanBdTitleEvalTxt', 'spnBdTitleEvalTxt', 250, l_dvBdTitle.id, null);

      //div to show description title
      objLocal = _createElement('div', 'divBdDesc', 'dvBdDesc', 250, l_dvBdTitle.id, null);

      //span
      objLocal = _createElement('span', 'spanBdDesc', null, 250, objLocal.id, null);
    }

    if (iTemplate == 1) {
      if (!l_dvTableEval) {
        //Create div container of table
        l_dvTableEval = _createElement('div', 'divTableEval', 'dvtblEval', 250, l_dvBody.id, null);

        //Create table
        objLocal = _createElement('table', 'tableEval', 'tblEval', 250, l_dvTableEval.id, null);

        //Create body
        objLocal = _createElement('tbody', 'tbodyTableEval', null, 250, objLocal.id, null);
        objLocal.setStyles({
          zIndex: null,
          position: null,
          top: null,
          left: null
        });

        objLocal = $('tableEval');

        //Create a head of table
        objTH = objLocal.createTHead();
        objTH.id = 'theadTableEval';
        $('theadTableEval').setStyle('opacity', 0);
        objTH.hide = true;

        //Insert a row into head of table
        objRow = objTH.insertRow(-1);
        objRow.id = 'trtheadTableEval';

        //Insert first column into row
        objCol = objRow.insertCell(-1);
        objCol.id = 'tdtheadTableEval1';
        objCol = $(objCol.id);
        objCol.addClass('tdthead1');
        objCol.styleName = 'tdthead1';

        //Insert second column into row
        objCol = objRow.insertCell(-1);
        objCol.id = 'tdtheadTableEval2';
        objCol = $(objCol.id);
        objCol.addClass('tdthead2');
        objCol.styleName = 'tdthead2';

      }

    } else if (iTemplate == 2) {

      if (!l_dvBdSubTitle) {
        //Create div to secondary title
        l_dvBdSubTitle = _createElement('div', 'divBdSubTitle', 'dvBdSubTitle', 250, l_dvBody.id, null);

        //span to show label title
        objLocal = _createElement('span', 'spanBdSubTitleEval', 'spnBdTitleEval', 250, l_dvBdSubTitle.id, null);

        //span to show text title
        objLocal = _createElement('span', 'spanBdSubTitleEvalTxt', 'spnBdTitleEvalTxt', 250, l_dvBdSubTitle.id, null);

        //div to show description title
        objLocal = _createElement('div', 'divBdSubDesc', 'dvBdDesc', 250, l_dvBdSubTitle.id, null);

        //span
        objLocal = _createElement('span', 'spanBdSubDesc', null, 250, objLocal.id, null);

      }
    }
    
    l_iTemplate = iTemplate;
    
    m4Eval.evalDetail.getData();
    
  }
  
  function _fillTemplate(objData) {

    var objSecondary = null;
    
    l_sIDTr = null;

    l_dvBdTitle.addClass(l_dvBdTitle.styleName);
    l_dvBdTitle.setStyles({
      top: null,
      left: null,
      width: null,
      height: null
    });
    
    //Set title
    l_spHeaderTl.addClass(l_spHeaderTl.styleName);
    l_spHeaderTl.set('html', objData.sTitle);
    l_spHeaderTl.setStyle('opacity', 1);
    l_spHeaderTl.hide = !l_spHeaderTl.hide;
    l_spHeaderTl.setStyles({
      top: null,
      left: null,
      width: null,
      height: null
    });
    
    l_dvHeader.addClass(l_dvHeader.styleName);
    l_dvHeader.setStyles({
      top: null,
      height: null,
      left: 50,
      width: 280
    });

    l_dvBody.addClass(l_dvBody.styleName);
    l_dvBody.setStyles({
      top: null,
      height: null,
      left: 50,
      width: 600
    });

    l_btnClose.set('title', objData.sClosed);
    l_btnClose.addClass(l_btnClose.styleName);
    l_btnClose.setStyles({
      cursor: 'pointer',
      top: null,
      left: 670,
      width: 24,
      height: 24
    });
    l_btnClose.src = l_sPathImgClose;

    if (l_iTemplate == 1) {
      if (objData.saIdLevel.length == 1 && objData.saIdLevel[0] == "") {objData.saIdLevel.empty();}
      if (objData.saNmLevel.length == 1 && objData.saNmLevel[0] == "") {objData.saNmLevel.empty();}
      if (objData.saNmMeaning.length == 1 && objData.saNmMeaning[0] == "") {objData.saNmMeaning.empty();}

      _fillObject($('spanBdTitleEval'), objData.sSubTitle1 + ':', 180);
      _fillObject($('spanBdTitleEvalTxt'), objData.sNmObjective);
      if (objData.sDescObjective) {
        _fillObject($('divBdDesc'), null);
        _fillObject($('spanBdDesc'), objData.sDescObjective);
      }
      l_dvTableEval.addClass(l_dvTableEval.styleName);
      l_dvTableEval.setStyles({
        top: null,
        left: null,
        width: null,
        height: null
      });
      objSecondary = l_dvTableEval;
      
      _fillTable(objData);

      
    } else if (l_iTemplate == 2) {
      
      _fillObject($('spanBdTitleEval'), objData.sSubTitle1 + ':', 180);
      _fillObject($('spanBdTitleEvalTxt'), objData.sNmObjective);
      _fillObject($('divBdDesc'), null);
      _fillObject($('spanBdDesc'), objData.sDescObjective);
      
      l_dvBdSubTitle.addClass(l_dvBdSubTitle.styleName);
      l_dvBdSubTitle.setStyles({
        top: null,
        left: null,
        width: null,
        height: null
      });
      objSecondary = l_dvBdSubTitle;

      _fillObject($('spanBdSubTitleEval'), objData.sSubTitle2 + ':', 180);
      _fillObject($('spanBdSubTitleEvalTxt'), objData.sNmMagnitude);
      _fillObject($('divBdSubDesc'), null);
      _fillObject($('spanBdSubDesc'), objData.sDescMagnitude);
    }


    //Put new top values
    l_dvHeader.setStyle('top', _calculateTop(objData.lObjectTop));
    l_dvBody.setStyle('top', l_dvHeader.offsetTop + l_dvHeader.offsetHeight);
    l_btnClose.setStyle('top', l_dvBody.offsetTop - 10);

    l_dvHeader.Transition.start({'opacity': 1}).chain(
      function() {
        l_dvHeader.hide = !l_dvHeader.hide;
      }
    );
    l_dvBody.Transition.start({'opacity': 1}).chain(
      function() {
        l_dvBody.hide = !l_dvBody.hide;
        l_btnClose.Transition.start({'opacity': 1}).chain(
          function() {
            l_btnClose.hide = !l_btnClose.hide;
          }
        );
        l_dvBdTitle.Transition.start({'opacity': 1}).chain(
          function() {
            l_dvBdTitle.hide = !l_dvBdTitle.hide;
          }
        );
        objSecondary.Transition.start({'opacity': 1}).chain(
          function() {
            objSecondary.hide = !objSecondary.hide;
            if (l_sIDTr) {
              var myFX = new Fx.Morph($(l_sIDTr));
              myFX.start('.trchoose');
            }
          }
        );
      }
    );
  }
  
  function _btnCloseEv(ev) {
    //close (hide) and clear all elements
    //close and clear elements depending what are created 
    if (l_dvTableEval) {
     if (!l_dvTableEval.hide) {
       l_dvTableEval.Transition.start({'opacity': 0}).chain(
         function() {
           _clearObject(l_dvTableEval);

           _clearObject($('theadTableEval'));
           
           _clearSpan($('tdtheadTableEval1'));
           _clearSpan($('tdtheadTableEval2'));

           _clearObject($('tbodyTableEval'));

           //delete table rows
           objTable = $('tableEval');
           for (i=(objTable.rows.length - 1);i>0;i--) {
             objTable.deleteRow(i);
           }

           _clearObject(objTable);

         }
       );
     }
    }

    if (l_dvBdSubTitle) {
     if (!l_dvBdSubTitle.hide) {
       l_dvBdSubTitle.Transition.start({'opacity': 0}).chain(
         function() {
           _clearObject(l_dvBdSubTitle);
           
           _clearSpan($('spanBdSubTitleEval'));
           _clearSpan($('spanBdSubTitleEvalTxt'));

           _clearObject($('divBdSubDesc'));
           _clearSpan($('spanBdSubDesc'));
         }
       );
     }
    }

    //close and clear elements of common title
    l_dvBdTitle.Transition.start({'opacity': 0}).chain(
     function() {
       _clearObject(l_dvBdTitle);

       _clearSpan($('spanBdTitleEval'));
       _clearSpan($('spanBdTitleEvalTxt'));
       
       _clearObject($('divBdDesc'));
       _clearSpan($('spanBdDesc'));
     }
    );
    
    //close body
    l_dvBody.Transition.start({'opacity': 0}).chain(
      function() {
        _clearObject(l_dvBody);
      }
    );
    
    //close and clear image
    l_btnClose.Transition.start({'opacity': 0}).chain(
      function() {
        l_btnClose.hide = !l_btnClose.hide;
        l_btnClose.set('title', '');
        l_btnClose.src = null;
        l_btnClose.removeClass(l_btnClose.className);
        l_btnClose.setStyles({
          cursor: 'default',
          top: 0,
          left: 0,
          width: 0,
          height: 0
        });
      }
    );
    
    //close and clear main title
    l_dvHeader.Transition.start({'opacity': 0}).chain(
      function() {
        _clearObject(l_dvHeader);
        _clearSpan(l_spHeaderTl);
      }
    );
    
    //close back div
    l_dvBackCon.Transition.start({'opacity': 0}).chain(
      function() {
        l_dvBackCon.hide = !l_dvBackCon.hide;
        l_dvBackCon.setStyles({
          backgroundColor: '#000',
          top: 0,
          left: 0,
          width: 0,
          height: 0
        });
      }
    );

  }

  function _fillTable(objData) {

    var objLocal = null;
    var iRows = -1;
    var objBody = $('tbodyTableEval');
    var objTr = null;
    var objTd = null;

    _fillObject($('theadTableEval'));
    _fillObject($('tdtheadTableEval1'), objData.sSubTitle2, 80);
    _fillObject($('tdtheadTableEval2'), objData.sSubTitle3, 470);

    _fillObject(objBody);
    
    objLocal = $('tableEval');
    objLocal.addClass(objLocal.styleName);
    objLocal.setStyles({
      width: null,
      height: null
    });
    
    //get data to table
    iRows = objData.saNmLevel.length;
    if (iRows > 0) {
      for (i=0;i<iRows;i++) {
        objTr = objBody.insertRow(-1);
        objTr.id = 'trBdEval.' + i;
        objTr = $(objTr.id);
        if (!(i % 2)) {
          objTr.addClass('trodd');              //class from odd row
        } else {
          objTr.addClass('treven');             //class from even row
        }

        objTd = objTr.insertCell(-1);
        objTd.id = objTr.id + '.1';
        objTd = $(objTd.id);
        objTd.addClass('tdtbody1');
        objTd.set('html', objData.saNmLevel[i])

        objTd = objTr.insertCell(-1);
        objTd.id = objTr.id + '.2';
        objTd = $(objTd.id);
        objTd.addClass('tdtbody2');
        objTd.set('html', objData.saNmMeaning[i])

        if (objData.sIdLevel == objData.saIdLevel[i]) {
          l_sIDTr = objTr.id;
        }

      }
    }
    
    objLocal.Transition.start({'opacity': 1}).chain(
      function () {
        objLocal.hide = !objLocal.hide;
      }
    );
  }

  function _fillObject(objSpn, sValue, iWidth) {
    objSpn.setStyles({
      width: null,
      height: null
    });
    if (objSpn.styleName) {
      objSpn.addClass(objSpn.styleName);
    }
    if (sValue) {
      objSpn.set('html', sValue);
    }
    if (iWidth) {
      objSpn.setStyle('width', iWidth);
    }
    objSpn.setStyle('opacity', 1);
    objSpn.hide = !objSpn.hide;
  }

  function _clearSpan(objSpn) {
    objSpn.set('html', '');
    objSpn.setStyles({
      opacity: 0,
      width: 0,
      height: 0
    });
    objSpn.hide = !objSpn.hide;
    if (objSpn.className) {
      objSpn.removeClass(objSpn.className);
    }
  }
  
  function _clearObject(objLocal) {
    objLocal.setStyles({
      opacity: 0,
      top: 0,
      left: 0,
      width: 0,
      height: 0
    });
    objLocal.hide = !objLocal.hide;
    objLocal.removeClass(objLocal.className);
  }

  function _calculateTop(lTop) {
    var lNewTop = lTop;
    
    //max bottom
    var lHeight = l_dvHeader.offsetHeight + l_dvBody.offsetHeight; 
    lNewTop += (lHeight / 2);
    if (lNewTop > document.body.offsetHeight) {
      lNewTop -= 5;
      while (lNewTop > document.body.offsetHeight) {
        lNewTop -= 5;
      }
    }

    lNewTop -= lHeight;
    if (lNewTop < 0) {lNewTop = 0;}
    
    return lNewTop;
  }

  function _createElement(sType, sName, sStyleName, iIndex, sParentName, thefntComplete) {     //create element with transition 
    /* create div: asign classname and minimum properties style */
    if ($(sName)) {
      return $(sName);
    }

    var oEle = null;
    if (sType == 'file') {
      oEle = document.createElement('input');
      oEle.type = 'file';
    } else {
      oEle = document.createElement(sType);
    }
    
    oEle.hide = true;
    oEle.id = sName;
    if (!sParentName) {
      document.body.appendChild(oEle);
    } else {
      document.getElementById(sParentName).appendChild(oEle);
    }

    var oNewObj = $(sName);
    if (sStyleName) {
      oNewObj.addClass(sStyleName);
      oNewObj.styleName = sStyleName;
    }

    var sPosition = 'relative';
    if (!sParentName) {
      sPosition = 'absolute';
    }
    oNewObj.setStyles({
      position: sPosition,
      top: 0,
      left: 0,
      zIndex: iIndex,
      opacity: 0
    });

    oNewObj.Transition = new Fx.Morph(oNewObj);
    if (thefntComplete) {
      oNewObj.Transition.addEvent('complete', thefntComplete);
    }
    
    return oNewObj;
  }

  function _resizeContent() {
    if (!l_dvBackCon.hide) {
      l_dvBackCon.setStyle('width', '100%');
      l_dvBackCon.setStyle('height', '100%');
    }
  }

  return {
    init: function () {
      _init();
    },
    
    showBack: function(iTemplate) {
      _showBack(iTemplate);
    },
    
    fillTemplate: function (objData) {
      _fillTemplate(objData);
    }
  }

} ();

function ViewComent(objeto,ruta){
  var vcom=escape(objeto.value);
  var path = ruta + vcom;
  comentario = showModalDialog(path, objeto.value,'dialogWidth=300pt;dialogHeight=92pt;maximize=no;minimize=no;border=thin;center=yes;help=no;');
  objeto.value = comentario;
}
