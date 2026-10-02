//-------------------------------------------------------------------------------------------------
//Compact with e.g. http://closure-compiler.appspot.com/home
//
//This file has a little problem with compression method: once compressed, it's necessary modify the file
//to change in Sort method following instruction:
//      eval(me.getAttribute('m4sortFnt'))
//      eval(me.getAttribute('m4sortFnt').replace('me','d'))
//-------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------
//Methods related to manage a table object. 
//Use with meta4Ajax.js, mootools.js, meta4Table.css
//-------------------------------------------------------------------------------------------------

/*
  <table id='table' class='m4table'>
  <caption id='tblEmpCaption'>Title of the table</caption>
  <thead id='m4tableHead'>
    <tr>
      <td class='m4tableHead' width=36%><div id='theadTbltd1' m4column='Name' m4sort='ASC' m4sortFnt='sortMe(me)'>Column1</div></td>
      <td class='m4tableHead' width=18%><div id='theadTbltd2'>Column2</div></td>
      <td class='m4tableHead' width=18%><div id='theadTbltd3'>Column3</div></td>
      <td class='m4tableHead' width=24%><div id='theadTbltd4' m4column='WLoc' m4sort='' m4sortFnt='sortMe(me)'>Column4</div></td>
      <td class='m4tableHead' width=2%><div id='theadTbltd5'></div></td>
    </tr>
  </thead>
  <tbody>
  </tbody>  
  <tfoot id='m4tableFoot' class='m4tableFoot'>
    <tr>
      <td colspan='5'>
        <div class='m4tableFootPage'>
          <span>Page <span id='spanCurPage' m4page='current' class='spanPage'>0</span> of <span id='spanTotalPage' m4page='total' class='spanPage'>0</span><span m4page='showing' class='spanPage'></span></span>
        </div>  
        <div class='m4tableFootGoto'>
          <img id='imgFirstPage' m4action='first' title='Go to first page'>
          <img id='imgPrevPage' m4action='prev' title='Go to previous page'>
          <input id='inputPage' type='text' maxlength=3 title='Go to page'/>
          <img id='imgNextPage' m4action='next' title='Go to next page'>
          <img id='imgLastPage' m4action='last' title='Go to last page'>
        </div>  
      </td>
    </tr>
  </tfoot>  
  </table>

*/
var meta4Table = {}

meta4Table.functions = function () {
  
  var l_sLinkCont = '/servlet/CheckSecurity/JSP/sse_g0/ssco_mn_contact.jsp';
  
  return {
    
    InsertContact: function(ev) {

      var me = ev.target || ev.srcElement;
      var aParams = new Array;
      var objResp = null;
      var sResult = '';
      
      me.idHR = me.getAttribute('idHR');
      while ((!me.idHR) && (me)) {
        me = me.childNodes[0];
      }
      
      if (me.idHR) {
        //insert new contact
        aParams[0] = ['Action','Insert'];
        aParams[1] = ['IdHR',me.idHR];
        meta4Ajax.ajax.sendSyncJSON(l_sLinkCont,aParams);

        objResp = meta4Ajax.ajax.getResponseJSON();
        sResult = objResp.sResult;
        
        while (!(me.nodeName == 'TD') && (me)) {
          me = me.parentNode;
        }
        if (me.idRow) {
          meta4Table.functions.Highlight(me.idRow);
          sIdTable = $(me.idRow).idTable;
        }
      }
      
      return {'sResult':sResult,'sIdTable':sIdTable};

    },

    DeleteContact: function(ev) {

      var me = ev.target || ev.srcElement;
      var aParams = new Array;
      var objResp = null;
      var sResult = '';
      var sIdTable = '';
      var sIndexRow = '';
      
      me.idHR = me.getAttribute('idHR');
      while ((!me.idHR) && (me)) {
        me = me.childNodes[0];
      }

      if (me.idHR) {
        //delete new contact
        aParams[0] = ['Action','Delete'];
        aParams[1] = ['IdHR',me.idHR];
        meta4Ajax.ajax.sendSyncJSON(l_sLinkCont,aParams);

        objResp = meta4Ajax.ajax.getResponseJSON();
        sResult = objResp.sResult;
        
        while (!(me.nodeName == 'TD') && (me)) {
          me = me.parentNode;
        }
        if (me.idRow) {
          sIdTable = $(me.idRow).idTable;
          sIndexRow = $(me.idRow).rowIndex;
        }
      }

      return {'sResult':sResult,'sIdTable':sIdTable,'sIndexRow':sIndexRow};

    },
    
    SetTempCaption: function(self, sText) {
      self.objCaption.caption = self.objCaption.get('text');
      self.objCaption.set('text', sText);
      self.objCaption.highlight('#b4d2fa');
      self.objCaption.Transition.start({
        'color': '#b4d2fa'
      });
    },
    
    EndTempCaption: function() {
      this.element.set('text',this.element.caption);
      this.element.setStyle('color', this.element.myColor);
    },

    Highlight: function(sIdRow) {
      $(sIdRow).highlight('#a1a1a1');
    },
    
    GotoPage: function(self, sPage) {

      var iPage = 0;
      var iLimMin = 0;
      var iLimMax = 0;
      var iRowsInPage = 0;
      var iNRows = 0;
      var oRow = null;
      var oCell = null;
      
      switch (sPage) 
      {
        case 'first': 
           iPage = 1; 
           break;
        case 'prev': 
           iPage = self.curPage - 1;
           break;
        case 'next':
           iPage = self.curPage + 1;
           break;
        case 'last':
           iPage = self.maxPages;
           break;
        default:
           iPage = sPage.toInt();
      }

      if (iPage > self.maxPages) {iPage = self.maxPages;}
      self.inputGoto.value = iPage;
      self.curPage = iPage;

      if (self.objCount['current']) {
        self.objCount['current'].set('text', self.curPage);
      };

      iLimMin = ((iPage - 1)*self.options.maxRows) + 1;
      iLimMax = iPage*self.options.maxRows;
      if (iLimMax > self.rows.length) {
        iLimMax = self.rows.length;
      }

      if (self.objCount['showing']) {
        self.objCount['showing'].set('text', ' (' + iLimMin + '...' + iLimMax + ')');
      };

      iRowsInPage = iLimMax - iLimMin + 1;

      iNRows = self.objBody.rows.length;
      if (iNRows > iRowsInPage) {
        for (var i=iNRows-1; i>=iRowsInPage; i--) {
          self.objBody.deleteRow(i);
        }
      }

      iNRows = self.objBody.rows.length;
      for (var i=0; i<iNRows; i++) {
        oRow = self.objBody.rows[i];
        for (var j=0; j<self.objBody.Cols; j++) {
          oCell = oRow.cells[j];
          oCell.innerHTML = self.rows[i+iLimMin-1][j];
          oCell.className = '';
          if (j == self.curColOrder) {
            oCell.className = self.classes.col.order;
          }
        }
      }
      
      for (var i=iNRows; i<iRowsInPage; i++) {
        oRow = self.objBody.insertRow(i);
        oRow.idTable = self.id;
        oRow.id = self.id + '_row_' + oRow.rowIndex;
        if ((Math.floor(i/2)*2) == i) {
          oRow.className = self.classes.row.even;
        } else {
          oRow.className = self.classes.row.odd;
        }
        for (var j=0; j<self.objBody.Cols; j++) {
          oCell = oRow.insertCell(j);
          oCell.id = self.id + '_cell_' + j + '_' + (i+iLimMin-1);
          oCell.idRow = oRow.id;
          oCell.innerHTML = self.rows[i+iLimMin-1][j];
          oCell.className = '';
          if (j == self.curColOrder) {
            oCell.className = self.classes.col.order;
          }
        }
      }

      self.objImgGoto.each(
        function(item, index) {
          item.m4action = item.getAttribute('m4action');
          switch (item.m4action)
          {
            case 'first':
            case 'prev':
              if (self.curPage == 1) {
                item.disabled = true;
                item.src = item.srcDis;
              } else {
                item.disabled = false;
                item.src = item.srcNor;
              }
              break;
            case 'next':  
            case 'last':
              if (self.curPage == self.maxPages) {
                item.disabled = true;
                item.src = item.srcDis;
              } else {
                item.disabled = false;
                item.src = item.srcNor;
              }
          }
        }
      );
      
      window.fireEvent('resize');      

    },
    
    Sort: function(self, me) {
      var objTable = $(me.idTable);
      if (objTable.tBodies[0].rows.length > 0) {                                     //if body has rows: launch sort specific function
        eval(me.getAttribute('m4sortFnt'));
      }
    }
  }
} ();

meta4Table.Table = new Class ({
  
  Implements: Options,

  options: {
    maxRows: 15,
    orderAsc: '',
    orderDesc: '',
    orderNo: ''
  },
  
  classes: {
    order: {
      asc: 'm4tableOrderAsc',
      desc: 'm4tableOrderDesc',
      no: 'm4tableNoOrder'
    },
    row: {
      odd: 'm4tablebodytrodd',
      even: 'm4tablebodytreven'
    },
    col: {
      order: 'tdOrder'
    }
  },

  initialize: function(sIdTable, options) {

    var self = this;

    this.setOptions(options);
    this.rows = new Array;                                                           //Array of data
    this.curPage = 0;

    this.id = sIdTable;
    var objTable = $(sIdTable);                                                      //Object table
    this.objCaption = $(objTable.caption.id);                                        //Original caption
    this.objCaption.caption = $(objTable.caption.id).get('text');
    this.objCaption.style.padding = '';
    this.objCaption.style.backgroundImage = '';
    this.objCaption.style.backgroundPosition = 'left center';
    this.objCaption.style.backgroundRepeat = 'no-repeat';
    this.objCaption.Transition = new Fx.Morph(this.objCaption);
    this.objCaption.Transition.addEvent('complete', meta4Table.functions.EndTempCaption);
    this.objCaption.myColor = this.objCaption.getStyle('color');

    this.caption = $(objTable.caption.id).get('text');                               //Original text caption

    this.objSortHeaders = new Array;                                                 //Sort column headers
    this.colDefOrder = -1;
    var nCols = 0;
    
    $(objTable.tHead.rows[0]).getElements('.m4tableHead').each(
      function(item, index) {
        item.childNodes[0].m4column = item.childNodes[0].getAttribute('m4column');
        if (item.childNodes[0].m4column) {                                           //if column is sortable
          var objDivCol = $(item.childNodes[0].id);
          objDivCol.index = index;
          if (objDivCol.getAttribute('m4sort')) {
            objDivCol.m4sort = objDivCol.getAttribute('m4sort')
            self.colDefOrder = index;
          }
          objDivCol.idTable = sIdTable;
          objDivCol.title = '';
          objDivCol.className = self.classes.order.no;                               //add class noOrder by default
          objDivCol.addEvent('click', function(e) {                                  //event click
            e.stopPropagation();
            var me = e.target;
            self.objSortHeaders.each(
              function(item,index) {
                if (item == me) {
                  if (me.m4sort == 'ASC') {
                    me.m4sort = 'DESC';
                  } else {
                    me.m4sort = 'ASC';
                  }
                } else {
                  item.m4sort = '';
                }
              }
            );
            
            meta4Table.functions.Sort(self, e.target);                               //call to sort function
          });
          self.objSortHeaders[self.objSortHeaders.length] = objDivCol;
        }
        nCols += 1;
      }
    );
    
    this.curColOrder = 0;                                                            //current column order

    this.objBody = $(objTable.tBodies[0]);                                           //Object body
    this.objBody.Cols = nCols;
    
    var objFoot = $(objTable.tFoot.rows[0].cells[0]);                                //Footer

    this.objCount = new Array;                                                       //Counters array
    objFoot.getElements('.spanPage').each(
      function(item, index) {
        item.set('text', '0');
        item.m4page = item.getAttribute('m4page');
        if (item.m4page == 'current') {
          self.objCount['current'] = item;
        } else if (item.m4page == 'total') {
          self.objCount['total'] = item;
        } else if (item.m4page == 'showing') {
          self.objCount['showing'] = item;
          item.set('text', '');
          item.style.fontWeight= 'normal';
        }
      }
    );

    this.inputGoto = objFoot.getElement('input');                                    //Object input
    this.inputGoto.idTable = sIdTable;
    this.inputGoto.m4action = 'go';
    this.inputGoto.addEvent('keyup', function(e) {                                   //event press any key: controlled if is number 
      e.stopPropagation(); 
      e.target.value = e.target.value.replace (/\D+/, '');
    });
    this.inputGoto.addEvent('keypress', function(e) {                                //event press enter: goto page
      if (e.key == 'enter' && e.target.value > 0) {
        meta4Table.functions.GotoPage(self, e.target.value);                         //call gotoPage function
      }
    });
    this.inputGoto.value = '';
    this.inputGoto.disabled = true;                                                  //by default input disabled
    
    var sImgFirstPageNor = '/iconos/lu_nor_first_24.png';                            //images used for navigate
    var sImgFirstPageHot = '/iconos/lu_hot_first_24.png';
    var sImgFirstPageDis = '/iconos/lu_dis_first_24.png';

    var sImgPrevPageNor = '/iconos/lu_nor_rew_24.png';
    var sImgPrevPageHot = '/iconos/lu_hot_rew_24.png';
    var sImgPrevPageDis = '/iconos/lu_dis_rew_24.png';

    var sImgNextPageNor = '/iconos/lu_nor_for_24.png';
    var sImgNextPageHot = '/iconos/lu_hot_for_24.png';
    var sImgNextPageDis = '/iconos/lu_dis_for_24.png';

    var sImgLastPageNor = '/iconos/lu_nor_last_24.png';
    var sImgLastPageHot = '/iconos/lu_hot_last_24.png';
    var sImgLastPageDis = '/iconos/lu_dis_last_24.png';

    this.objImgGoto = objFoot.getElements('img');                                    //image object goto
    this.objImgGoto.each(
      function(item, index) {
        item.disabled = true;                                                        //by default disabled
        item.idTable = sIdTable;
        item.m4action = item.getAttribute('m4action');
        switch (item.m4action)
        {
          case 'first':
            item.srcNor = sImgFirstPageNor;                                          //source normal image
            item.srcHot = sImgFirstPageHot;                                          //source hot image
            item.srcDis = sImgFirstPageDis;                                          //source disabled image
            item.src = item.srcNor;
            break;
          case 'prev':
            item.srcNor = sImgPrevPageNor;                                           //source normal image
            item.srcHot = sImgPrevPageHot;                                           //source hot image
            item.srcDis = sImgPrevPageDis;                                           //source disabled image
            break;
          case 'next':
            item.srcNor = sImgNextPageNor;                                           //source normal image
            item.srcHot = sImgNextPageHot;                                           //source hot image
            item.srcDis = sImgNextPageDis;                                           //source disabled image
            break;
          case 'last':
            item.srcNor = sImgLastPageNor;                                           //source normal image
            item.srcHot = sImgLastPageHot;                                           //source hot image
            item.srcDis = sImgLastPageDis;                                           //source disabled image
        }
        item.src = item.srcDis;                                                      //by default image disabled
        item.addEvents({
          'mouseleave':                                                              //event mouse leave
            function(e) {
              e.stopPropagation(); 
              if (!e.target.disabled) {                                              //if is not disabled: change image to normal
                e.target.src = e.target.srcNor;
              }
            },
          'mouseenter':                                                              //event mouse leave
            function(e) {
              e.stopPropagation(); 
              if (!e.target.disabled) {                                              //if is not disabled: change image to hot
                e.target.src = e.target.srcHot;
              }
            },
          'click':
            function(e) {                                                            //event click
              if (!e.target.disabled) {
                meta4Table.functions.GotoPage(self, e.target.m4action);              //call gotoPage function
              }
            }
        });
      }
    );
  },

  load: function(objRows) {
    
    var self = this;

    this.rows.empty();                                                               //clear array of data
    this.rows = $A(objRows);                                                         //copy array of data
    objRows.empty();                                                                 //clear array of data
    this.objCaption.style.padding = '';
    this.objCaption.style.backgroundImage = '';
    this.objCaption.set('text', this.caption + ' (' + this.rows.length + ') ' );

    if (this.rows.length > 0) {
      
      this.maxPages = Math.floor(this.rows.length/this.options.maxRows);             //calculate new max pages
      if (this.rows.length > (this.maxPages * this.options.maxRows)) {
        this.maxPages += 1;
      }
      
      this.objSortHeaders.each(
        function (item, index) {
          if (item.m4sort == 'ASC') {
            item.title = self.options.orderAsc;
            item.className = self.classes.order.asc;
            self.curColOrder = item.index;
          } else if (item.m4sort == 'DESC') {
            item.title = self.options.orderDesc;
            item.className = self.classes.order.desc;
            self.curColOrder = item.index;
          } else {
            item.title = self.options.orderNo;
            item.className = self.classes.order.no;
          }
        }
      );
      
      if (this.objCount['total']) {                                                  //put counters to max pages
        this.objCount['total'].set('text', this.maxPages);
      };

      if (this.objCount['showing']) {
        this.objCount['showing'].set('text', '');
      };

      this.inputGoto.value = '';
      this.inputGoto.disabled = false;                                               //by default input disabled

      meta4Table.functions.GotoPage(this, 'first');                                  //goto to show first page

    } else {

      this.reset();                                                                  //no data: reset table

    }

  },
  
  reset: function() {
    
    var self = this;

    this.curPage = 0;
    this.curColOrder = 0;
    this.rows.empty();                                                               //clear array of data 
    this.objCaption.style.padding = '';
    this.objCaption.style.backgroundImage = '';
    
    $(this.id).caption.set('text',this.caption);                                      //reset caption
    
    this.objSortHeaders.each(
      function(item, index) {
        item.title = '';
        if (item.index == self.colDefOrder) {
          item.m4sort = 'ASC';
        } else {
          item.m4sort = '';
        }
        item.className = self.classes.order.no;                                      //put class m4tableNoOrder 
      }
    );
    
    var iNRows = this.objBody.rows.length;                                           //delete all rows of body
    for (var i=iNRows-1; i>=0; i--) {
      this.objBody.deleteRow(i);
    };
    
    if (this.objCount['total']) {                                                    //put counters to 0
      this.objCount['total'].set('text', '0');
    };
    
    if (this.objCount['current']) {
      this.objCount['current'].set('text', '0');
    };

    if (this.objCount['showing']) {
      this.objCount['showing'].set('text', '');
    };
    
    this.inputGoto.value = '';
    this.inputGoto.disabled = true;                                                  //clear input and disabled

    this.objImgGoto.each(                                                            //disable all images goto
      function(item, index) {
        item.disabled = true;
        item.src = item.srcDis;
      }
    );

    window.fireEvent('resize');
    
  },
  
  setTempCaption: function(sText) {
    meta4Table.functions.SetTempCaption(this, sText);
  },
  
  setAction: function(sText) {
    this.objCaption.set('text', sText);
    this.objCaption.highlight('#b4d2fa');
    this.objCaption.style.padding = '0px 0px 0px 20px';
    this.objCaption.style.backgroundImage = 'url(/iconos/spinner.gif)';
  },
  
  resetAction: function() {
    this.objCaption.style.padding = '';
    this.objCaption.style.backgroundImage = '';
    this.objCaption.set('text', this.caption + ' (' + this.rows.length + ') ' );
  },

  gotoPage: function(sPage) {
    meta4Table.functions.GotoPage(this,sPage);
  },

  highlight: function(sIdRow) {
    meta4Table.functions.Highlight(sIdRow);
  },
  
  deleteRow: function(sIndexRow) {
    var iRow = (this.curPage - 1)*this.options.maxRows + parseInt(sIndexRow) - 1;
    this.rows.splice(iRow,1);
    if (this.rows.length > 0) {
      this.objCaption.set('text', this.caption + ' (' + this.rows.length + ') ' );
      this.maxPages = Math.floor(this.rows.length/this.options.maxRows);             //calculate new max pages
      if (this.rows.length > (this.maxPages * this.options.maxRows)) {
        this.maxPages += 1;
      }
      meta4Table.functions.GotoPage(this,this.curPage);
    } else {
      this.reset();
    }
  }
});