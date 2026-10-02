//-------------------------------------------------------------------------------------------------
//Compact with e.g. http://closure-compiler.appspot.com/home
//-------------------------------------------------------------------------------------------------
// Use with:
// - mootools.js
// - meta4ajax.js

/*
Definition of parameter object used upon initialisation
- ai_oParam.meta4Object                         : (string) id of list meta4object
- ai_oParam.nodeQBF;                            : (string) id of QBF node of list met4object
- ai_oParam.nodeTR;                             : (string) id of TR node of list meta4object
- ai_oParam.listMethod                          : (string) id of list method in TR node
- ai_oParam.secondaryTI (optional)              : (string) scondary TI - passed as argument ARG_SEC_TI of list method
- ai_oParam.appStart (optional)                 : (string or object) element that contains start date - passed as argument APP_INI to list method
- ai_oParam.appEnd (optional)                   : (string or object) element that contains end date - passed as argument APP_FIN to list method
- ai_oParam.listMethodArguments                 : (string) list of arguments passed to list method (separated by comma) (ARG_SEC_TI, APP_INI, APP_FIN must not be repeated)
- ai_oParam.resultItems                         : (string) list of result items (ids as in TR node, separated by comma), will be added as attributes to main filter element (with prefix 'm4')
- ai_oParam.mainFilterElement                   : (string or object) element that represents the filter and receives the results (normally an input tag)
- ai_oParam.secondaryFilterElements (optional)  : (string) fix values or element..attribute list (separated by comma) that are passed as values to arguments of list method (only one occurence of '..' allowed!)
- ai_oParam.maxRecords (optional)               : (integer) maximum number of records shown in list, default set by list page to 20
- ai_oParam.eventAttributesChanged (optional)   : (string) event fired when attributes change
- ai_oParam.labelHelp                           : (string) text shown when main filter element empty, e.g. "Enter name of xxx"
- ai_oParam.labelLoading                        : (string) text shown when loading, e.g. "Loading..."
- ai_oParam.labelAndMore                        : (string) text shown when more elements in result than shown in list, e.g. "...and more..."
- ai_oParam.labelNoMatch                        : (string) text shown when serch without result, e.g. "No matches found"
The main filter element (MFE) is the reference tag. Upon initialisation, a ul tag is added beneath it with the same size and color values. All result items are
added as attributes with the prefix 'm4' and no value.
When the MFE gets the focus, the ul tag is shown. It shows the help text if there is no filter entered; it the latest result list if there is a filter;
it shows loading if the latest petition was interrupted or if the parent list has changed its value; it shows No Match if the filter does not match any records. The class
is set to scoDynamicListFilter to indicate that the current value represents a filter.
When a key is pressed, the filter is triggered with a slight delay to reduce requests upon typing.
When double-clicked, unless there is a filter, '%' is used as filter to load all records without filter.
When loosing the focus, removes class scoDynamicListFilter if previous selection is still valid.
When the values changed, all child lists are invalidated and the event eventAttributesChanged is fired.

LI: The item is highlighted on mouseover and applied to the MFE upon mousedown (not click because of delay between mousedown and up and blur of MFE conflict).
When an list item is selected, all attributes are passed to the corresponding attributes of the MFE.
*/
var M4List = new Class(function(){
    //Global, static internal variables of class
    var hTimer,                                                                                     //Timer is global => only one petition per page!
        iDelayBlur = 150,                                                                           //Delay in ms when closing box upon loose focus
        iDelayLoad = 300,                                                                           //Delay in ms upon load
        sEventParentListChanged = 'm4parentlistchanged',                                            //Event triggered upon change of values
        sResultAttributePrefix = 'm4',                                                              //Prefix of result items added to main filter element
        sListIndexAttribute = '_m4listindex',                                                       //Attribute added to valid list items to indicate index
        sUrlList = '/servlet/CheckSecurity/JSP/sse_generico/sgco_list.jsp';                         //URL of list page
        sUrlListNext = '/servlet/CheckSecurity/JSP/sse_generico/sgco_list_next.jsp';                //URL of next list page
    //Internal methods
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    function addLI(ai_oMainFilterElement, ai_oComboBox, ai_oAuxValues, ai_sHtml, ai_sId){           //Adds new <li> to oComboBox with style element of oMainFilterElement
        return new Element('li', {
            'id': ai_sId,
            'html': ai_sHtml,
            'styles': {                                                                             //Apply attributes of related filter element
                    'font-size': ai_oMainFilterElement.getStyle('font-size'),
                    'color': ai_oAuxValues.color
            }
        }).inject(ai_oComboBox);                                                                    //Inject li in oComboBox (at the end)
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    function activateLI(ai_oListItem, ai_oComboBox, ai_oAuxValues){
        if(ai_oListItem){
            ai_oListItem.addClass('hover');                                                         //Apply clase "hover"
            ai_oListItem.set('styles', {
                'background-color': ai_oAuxValues.color,                                            //Toggle background-color and color
                'color': ai_oAuxValues.bgcolor
            });
            ai_oComboBox.set(sListIndexAttribute, ai_oListItem.get(sListIndexAttribute));           //Set index of current list element
        }
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    function deactivateLI(ai_oListItem, ai_oComboBox, ai_oAuxValues){
        var oComboBox;
        if(ai_oListItem){
            ai_oListItem.removeClass('hover');                                                      //Remove class "hover"
            ai_oListItem.set('styles', {
                'background-color': ai_oAuxValues.bgcolor,                                          //Reset background-color and color
                'color': ai_oAuxValues.color
            });
            if(ai_oListItem.get(sListIndexAttribute) === ai_oComboBox.get(sListIndexAttribute)){
                ai_oComboBox.set(sListIndexAttribute, '');                                          //Reset index of current list element if set to current list element
            }
        }
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    function selectLI(ai_oListItem, ai_oMainFilterElement, ai_oComboBox, ai_oAuxValues){
        var k;
        if(ai_oListItem){
            ai_oMainFilterElement.set('value', ai_oListItem.get('text'));
            for(k = 0; k < ai_oAuxValues.saResultItems.length; k++){
                ai_oMainFilterElement.set(sResultAttributePrefix + ai_oAuxValues.saResultItems[k], ai_oListItem.get(sResultAttributePrefix + ai_oAuxValues.saResultItems[k]));
            }
            eventUpdateAttributes(ai_oMainFilterElement, ai_oAuxValues.sEventAttributesChanged);    //Fire event when attributes updated
            hideBox(ai_oComboBox);                                                                  //Close list
            ai_oMainFilterElement.removeClass('scoDynamicListFilter');                              //Mark filter test as valid result and not as filter
            ai_oAuxValues.sFilterValue = ai_oListItem.get('text');                                  //Update filter value with value applied to avoid load upon keyup w/o change when again in MFE
        }
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    function loadValues(ai_oMainFilterElement, ai_oComboBox, ai_saParameters, ai_oAuxValues){       //Triggers AJAX petition to load values that match filter
        var i,
            sSecFilterValues = '';
        if(ai_oAuxValues.sFilterValue !== ai_oMainFilterElement.get('value')){                      //Do nothing if filter unchanged (e.d. shift key)
            if(ai_oMainFilterElement.get('value') === ''){                                          //No filter defined
                hTimer = $clear(hTimer);                                                            //Reset timer
                ai_oComboBox.set('html', '');                                                       //Clear combo            
				addLI(ai_oMainFilterElement, ai_oComboBox, ai_oAuxValues, ai_oAuxValues.labelHelp); //LI: Type name of xxx
                showBox(ai_oComboBox, ai_oMainFilterElement);                                       //Show combo box
            }else{                                                                                  //Filter defined
                ai_saParameters[ai_oAuxValues.iIndexMainFilter][1] = ai_oMainFilterElement.get('value');    //Pass filter value to parameter array
                //Include app start and end date if available as object
                if(ai_oAuxValues.hasOwnProperty('oAppStart')){
                    ai_saParameters[ai_oAuxValues.iIndexAppStart][1] = ai_oAuxValues.oAppStart.get('value');
                }
                if(ai_oAuxValues.hasOwnProperty('oAppEnd')){
                    ai_saParameters[ai_oAuxValues.iIndexAppEnd][1] = ai_oAuxValues.oAppEnd.get('value');
                }
                if(!ai_oAuxValues.bAllSecFilterElementsStatic){                                     //Add secondary filter elements if there are dynamic once
                    for(i = 0; i < ai_oAuxValues.oaSecondaryFilterElements.length; i++){            //Loop through all elements and identify value
                        if(i !== 0){
                            sSecFilterValues += ',';                                                //Separate values by ','
                        }
                        if(typeof(ai_oAuxValues.oaSecondaryFilterElements[i]) === 'object'){
                            sSecFilterValues += ai_oAuxValues.oaSecondaryFilterElements[i].getAttribute(ai_oAuxValues.saSecondaryFilterAttributes[i]);
                        }else{
                            sSecFilterValues += ai_oAuxValues.oaSecondaryFilterElements[i];
                        }
                    }
                    ai_saParameters[ai_oAuxValues.iIndexSecFilterElements][1] = sSecFilterValues;
                }
                if(!hTimer){                                                                        //"False" timer indicates no activity
                    ai_oComboBox.set('html', '');                                                   //Clear combo
                    addLI(ai_oMainFilterElement, ai_oComboBox, ai_oAuxValues, ai_oAuxValues.labelLoading);  //LI: Loading...
                    showBox(ai_oComboBox, ai_oMainFilterElement);                                   //Show combo box
                }else{                                                                              //"True" timer indicates loading in progress
                    hTimer = $clear(hTimer);                                                        //Reset current timer
                }
                hTimer = (function(){
				meta4Ajax.ajax.sendAsyncJSON(sUrlList, ai_saParameters, ai_oAuxValues.processResult);}).delay(iDelayLoad); //Trigger AJAX petition with delay (to reduce petitions)
            }
//prompt("url to send ",sUrlList + '?' + ai_saParameters);		
            ai_oAuxValues.sFilterValue = ai_oMainFilterElement.get('value');                        //Store filter
        } else if (ai_oAuxValues.initValue) {
//prompt("url to send ",sUrlList + '?' + ai_saParameters);		
          meta4Ajax.ajax.sendSyncJSON(sUrlList, ai_saParameters);
          processResult(ai_oMainFilterElement, ai_oComboBox, ai_oAuxValues, meta4Ajax.ajax.getResponseJSON());
        }
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    function processResult(ai_oMainFilterElement, ai_oComboBox, ai_oAuxValues, ai_oResultJSON){     //Process result (fill combo with list items)
        var i, k,
            iPos,
            oTagLI,
            sResultString,
            reWildcard = new RegExp('[%,_]'),
            sAuxFilter = ai_oMainFilterElement.get('FilterValue').toLowerCase(),
            bContainsWildcard = sAuxFilter.match(reWildcard);

        hTimer = $clear(hTimer);                                                                    //Reset timer
        if(ai_oResultJSON){                                                                         //Result available => valid
            ai_oComboBox.set('html', '');                                                           //Clear combo
            if(ai_oResultJSON.result.length === 0){                                                 //No items in result
                addLI(ai_oMainFilterElement, ai_oComboBox, ai_oAuxValues, ai_oAuxValues.labelNoMatch);  //LI: No matches found
            }else{                                                                                  //Items in result
                for(i = 0; i < ai_oResultJSON.result.length; i++){                                  //Loop through result items
                    sResultString = ai_oResultJSON.result[i][ai_oAuxValues.saResultItems[0]];       //First item of result items contains visible string
                    oTagLI = addLI(ai_oMainFilterElement, ai_oComboBox, ai_oAuxValues, sResultString, ai_oComboBox.id + '.li' + i);//LI with dummy id and result value with filter highlighted
                    sResultString = oTagLI.get('text');                                             //Identify list item value with special characters resolved
                    if(bContainsWildcard) {                                                         //Check for wildcards
                        sAuxFilter = sAuxFilter.replace(/^[%_]*/, '');                              //Replace leading/trailing wildcards
                        sAuxFilter = sAuxFilter.replace(/[%_]*$/, '');
                        bContainsWildcard = sAuxFilter.match(reWildcard);                           //Test again for wildcards
                    }
                    if(!bContainsWildcard) {                                                        //If no wildcards in the middle of the filter
                        iPos = sResultString.toLowerCase().indexOf(sAuxFilter);                     //Highlight filter (excluding wildcards)
                        sResultString = sResultString.substr(0, iPos) + '<span style="font-weight:bold;">' + sResultString.substr(iPos, sAuxFilter.length) + '</span>' + sResultString.substr(iPos + sAuxFilter.length);
                        oTagLI.set('html', sResultString);                                          //Update list item with filter value in bold
                    }
                    oTagLI.set(sListIndexAttribute, i);                                             //Add index of list item
                    for(k = 0; k < ai_oAuxValues.saResultItems.length; k++){                        //Loop through all result items and assign them to attributes of LI (to be passed upon click to main filter element)
                        oTagLI.set(sResultAttributePrefix + ai_oAuxValues.saResultItems[k], ai_oResultJSON.result[i][ai_oAuxValues.saResultItems[k]]);
                    }
                    oTagLI.set('_m4valid', true);                                                   //Mark list item as a valid filter result
                    oTagLI.addEvent('mouseover', function (ai_oEvent) {                             //Mouseover: highlight li
						//var oListItem = $(ai_oEvent.target.id)||$(ai_oEvent.target.getParent().id); //Event triggered by li or span inside li //**
						var oListItem = $(ai_oEvent.target.id)||$($(ai_oEvent.target).getParent().id); //Event triggered by li or span inside li						
						activateLI(oListItem, ai_oComboBox, ai_oAuxValues);
                    });
                    oTagLI.addEvent('mouseout', function (ai_oEvent) {                              //Mouseout: remove highlighting from li
                        var oListItem = $(ai_oEvent.target.id)||$(ai_oEvent.target.getParent().id); //Event triggered by li or span inside li
                        deactivateLI(oListItem, ai_oComboBox, ai_oAuxValues);
                    });
                    oTagLI.addEvent('mousedown', function (ai_oEvent) {                             //Pass attributes of li to main filter upon click (mosedown used instead of click to avoid porblem caused by slow clicks (blur of input))
                        var oListItem = $(ai_oEvent.target.id)||$(ai_oEvent.target.getParent().id); //Event triggered by li or span inside li
                        selectLI(oListItem, ai_oMainFilterElement, ai_oComboBox, ai_oAuxValues);
                    });
                }
                if(ai_oResultJSON.limited) {
                    var sPrex = ai_oAuxValues.saParametersNext[0][1];
                    ai_oAuxValues.saParametersNext[4][1] = ai_oResultJSON.lTotalRec;
                    ai_oAuxValues.saParametersNext[6][1] = ai_oResultJSON.range;

                    var sHTML = "<div id='#PREX#.dvMoreList' style='height:16px; clear:both; padding:2px 2px'><span id='#PREX#.spnCount' style='margin:2px 0px 0px; float:left'>#COUNT#</span><div style='float:right;margin-top:2px;'><img id='#PREX#.btnFirst' src='/iconos/lu_dis_first_24.png' style='cursor:pointer;height:16px;width:16px'/><img id='#PREX#.btnPrev' src='/iconos/lu_dis_rew_24.png' style='cursor:pointer;height:16px;width:16px;margin-left:3px;'/><img id='#PREX#.btnNext' src='/iconos/lu_nor_for_24.png' style='cursor:pointer;height:16px;width:16px;margin-left:3px;'/><img id='#PREX#.btnLast' src='/iconos/lu_nor_last_24.png' style='cursor:pointer;height:16px;width:16px;margin-left:3px;'/></div></div>";
                    sHTML = sHTML.replace(/#PREX#/g, sPrex);
                    var sCount = '1..' + (ai_oResultJSON.range[1] + 1) +' (' + ai_oResultJSON.lTotalRec + ')';
                    var oTagLI = addLI(ai_oMainFilterElement, ai_oComboBox, ai_oAuxValues, sHTML.replace('#COUNT#', sCount));  //LI: ...and more...
                    oTagLI.setStyles({
                      'display': 'block',
                      'cursor': 'default',
                      'text-align': 'center',
                      'background-color': '#f5f5f5',
                      'color': '#a9a9a9'
                    });
                    oTagLI.addEvent('mousedown', function(ev) {
                      ev.preventDefault();
                      ev.stopPropagation();
                    });
                    oTagLI.addEvent('mouseover', function(ev) {
                      ai_oMainFilterElement.set('m4listnav','1');                           //this 'semaphore' is used into IE because first it launches event input blur before mousedown or click event of this element
                    });
                    oTagLI.addEvent('mouseout', function(ev) {
                      ai_oMainFilterElement.set('m4listnav','');                            //when the cursor keeps out, erase the 'semaphore'
                    });
                    var oImgF = $(sPrex + '.btnFirst');
                    var oImgP = $(sPrex + '.btnPrev');
                    var oImgN = $(sPrex + '.btnNext');
                    var oImgL = $(sPrex + '.btnLast');

                    oImgF.addEvents({
                      'click': function(ev) {
                                      ev.preventDefault();
                                      ev.stopPropagation();
                                      if (this.get('disabled')) {return}
                                      ai_oAuxValues.saParametersNext[5][1] = -2;
                                      meta4Ajax.ajax.sendAsyncJSON(sUrlListNext, ai_oAuxValues.saParametersNext, ai_oAuxValues.processResultNext);
                                    },
                      'mouseover': function(ev) {
                                      if (this.get('disabled')) {return}
                                      this.set('src','/iconos/lu_hot_first_24.png');
                                    },
                      'mouseout': function(ev) {
                                      if (this.get('disabled')) {return}
                                      this.set('src','/iconos/lu_nor_first_24.png');
                                    }
                    });

                    oImgP.addEvents({
                      'click': function(ev) {
                                      ev.preventDefault();
                                      ev.stopPropagation();
                                      if (this.get('disabled')) {return}
                                      ai_oAuxValues.saParametersNext[5][1] = -1;
                                      meta4Ajax.ajax.sendAsyncJSON(sUrlListNext, ai_oAuxValues.saParametersNext, ai_oAuxValues.processResultNext);
                                    },
                      'mouseover': function(ev) {
                                      if (this.get('disabled')) {return}
                                      this.set('src','/iconos/lu_hot_rew_24.png');
                                    },
                      'mouseout': function(ev) {
                                      if (this.get('disabled')) {return}
                                      this.set('src','/iconos/lu_nor_rew_24.png');
                                    }
                    });

                    oImgN.addEvents({
                      'click': function(ev) {
                                      ev.preventDefault();
                                      ev.stopPropagation();
                                      if (this.get('disabled')) {return}
                                      ai_oAuxValues.saParametersNext[5][1] = 1;
                                      meta4Ajax.ajax.sendAsyncJSON(sUrlListNext, ai_oAuxValues.saParametersNext, ai_oAuxValues.processResultNext);
                                    },
                      'mouseover': function(ev) {
                                      if (this.get('disabled')) {return}
                                      this.set('src','/iconos/lu_hot_for_24.png');
                                    },
                      'mouseout': function(ev) {
                                      if (this.get('disabled')) {return}
                                      this.set('src','/iconos/lu_nor_for_24.png');
                                    }
                    });

                    oImgL.addEvents({
                      'click': function(ev) {
                                      ev.preventDefault();
                                      ev.stopPropagation();
                                      if (this.get('disabled')) {return}
                                      ai_oAuxValues.saParametersNext[5][1] = 2;
                                      meta4Ajax.ajax.sendAsyncJSON(sUrlListNext, ai_oAuxValues.saParametersNext, ai_oAuxValues.processResultNext);
                                    },
                      'mouseover': function(ev) {
                                      if (this.get('disabled')) {return}
                                      this.set('src','/iconos/lu_hot_last_24.png');
                                    },
                      'mouseout': function(ev) {
                                      if (this.get('disabled')) {return}
                                      this.set('src','/iconos/lu_nor_last_24.png');
                                    }
                    });

                    oImgF.set('disabled', true);
                    oImgF.setStyle('cursor', '');
                    oImgP.set('disabled', true);
                    oImgP.setStyle('cursor', '');
                    oImgN.set('disabled', false);
                    oImgL.set('disabled', false);

                } else {
                    ai_oAuxValues.saParametersNext[4][1] = 0;
                    ai_oAuxValues.saParametersNext[5][1] = 0;
                    ai_oAuxValues.saParametersNext[6][1].empty();
                }
                ai_oComboBox.set(sListIndexAttribute, '');                                          //Reset index of current list element
            }
        }
        showBox(ai_oComboBox, ai_oMainFilterElement);                                               //Make sure ul is visible
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    function processResultNext(ai_oMainFilterElement, ai_oComboBox, ai_oAuxValues, ai_oResultJSON){                                       //Process result (fill combo with list items)
       if (ai_oResultJSON) {
         var oTagLI = undefined,
             i = 0,
             j = 0,
             iPos = 0,
             sResultString = '',
             sHTML = '',
             sCount = '',
             sPrex = ai_oAuxValues.saParametersNext[0][1];
             reWildcard = new RegExp('[%,_]'),
             sAuxFilter = ai_oMainFilterElement.get('FilterValue').toLowerCase(),
             bContainsWildcard = sAuxFilter.match(reWildcard);
         ai_oAuxValues.saParametersNext[6][1] = ai_oResultJSON.range;
         //replace combobox with new values
         for (i = 0; i < ai_oComboBox.getChildren().length - 1; i++) {
           oTagLI = ai_oComboBox.getChildren()[i];
           if ((-ai_oResultJSON.result.length + i + 1) <= 0) {
             oTagLI.setStyle('display', 'block');
             ai_oComboBox.getChildren()[i].set(sListIndexAttribute, ai_oResultJSON.range[0] + 1 + i);
             for (j = 0; j < ai_oAuxValues.saResultItems.length; j++) {
                oTagLI.set(sResultAttributePrefix + ai_oAuxValues.saResultItems[j], ai_oResultJSON.result[i][ai_oAuxValues.saResultItems[j]]);
             }
             sResultString = ai_oResultJSON.result[i][ai_oAuxValues.saResultItems[0]];
             if(bContainsWildcard) {                                                            //Check for wildcards
                sAuxFilter = sAuxFilter.replace(/^[%_]*/, '');                                  //Replace leading/trailing wildcards
                sAuxFilter = sAuxFilter.replace(/[%_]*$/, '');
                bContainsWildcard = sAuxFilter.match(reWildcard);                               //Test again for wildcards
             }
             if(!bContainsWildcard) {                                                           //If no wildcards in the middle of the filter
                iPos = sResultString.toLowerCase().indexOf(sAuxFilter);                     //Highlight filter (excluding wildcards)
                sResultString = sResultString.substr(0, iPos) + '<span style="font-weight:bold;">' + sResultString.substr(iPos, sAuxFilter.length) + '</span>' + sResultString.substr(iPos + sAuxFilter.length);
             }
             oTagLI.set('html', sResultString);                                                  //Update list item with filter value in bold
             //oTagLI.highlight('#87cefa');
           } else {
             oTagLI.set('html', '');
             oTagLI.setStyle('display', 'none');
           }
         }
         var oImgF = $(sPrex + '.btnFirst');
         var oImgP = $(sPrex + '.btnPrev');
         var oImgN = $(sPrex + '.btnNext');
         var oImgL = $(sPrex + '.btnLast');
         oImgF.set('disabled', false);
         oImgF.setStyle('cursor', 'pointer');
         oImgF.set('src', '/iconos/lu_nor_first_24.png');
         oImgP.set('disabled', false);
         oImgP.setStyle('cursor', 'pointer');
         oImgP.set('src', '/iconos/lu_nor_rew_24.png');
         oImgN.set('disabled', false);
         oImgN.setStyle('cursor', 'pointer');
         oImgN.set('src', '/iconos/lu_nor_for_24.png');
         oImgL.set('disabled', false);
         oImgL.setStyle('cursor', 'pointer');
         oImgL.set('src', '/iconos/lu_nor_last_24.png');
         if (ai_oResultJSON.bLastRec) {
           oImgN.set('disabled', true);
           oImgN.setStyle('cursor', '');
           oImgN.set('src', '/iconos/lu_dis_for_24.png');
           oImgL.set('disabled', true);
           oImgL.setStyle('cursor', '');
           oImgL.set('src', '/iconos/lu_dis_last_24.png');
         }
         if (ai_oResultJSON.bFirstRec) {
           oImgF.set('disabled', true);
           oImgF.setStyle('cursor', '');
           oImgF.set('src', '/iconos/lu_dis_first_24.png');
           oImgP.set('disabled', true);
           oImgP.setStyle('cursor', '');
           oImgP.set('src', '/iconos/lu_dis_rew_24.png');
         }
         sCount = (ai_oResultJSON.range[0] + 1) + '..' + (ai_oResultJSON.range[1] + 1) +' (' + ai_oAuxValues.saParametersNext[4][1] + ')';
         $(sPrex + '.spnCount').set('text',sCount);
       }
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    function boxVisible(ai_oComboBox){                                                              //Combo box visible?
        return(ai_oComboBox.getStyle('display') === 'block')                                        //Visible if style is block
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    function showBox(ai_oComboBox, ai_oMainFilterElement){                                          //Show combo box


		var oBody = $(document.body),
            oPositionMFE = ai_oMainFilterElement.getPosition(),
            oSizeMFE = ai_oMainFilterElement.getSize(),
            oPositionBox,
            oSizeBox,
            oSizeBody;	
			
        if(!boxVisible(ai_oComboBox)){                                                              //Show unless already visible


			ai_oComboBox.setPosition({x: oPositionMFE.x, y: oPositionMFE.y + oSizeMFE.y});          //Position under main filter argument
            ai_oComboBox.set('styles', {
                display: 'block',                                                                   //Show combo box
                width: oSizeMFE.x
            });
            oPositionBox = ai_oComboBox.getPosition();
            oSizeBox = ai_oComboBox.getSize();                                                      //Identify size of combo box
            oSizeBody = oBody.getSize();                                                            //Identify size of body


            if(oSizeBody.y < oPositionBox.y + oSizeBox.y){
                oBody.set('styles', {height: oPositionBox.y + oSizeBox.y});
            }


			
        }
        window.fireEvent('resize');                                                                 //Fire resize anyway in case the size of the box has changed
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    function hideBox(ai_oComboBox){                                                                 //Hide combo box
        if(boxVisible(ai_oComboBox)){                                                               //Hide unless already hidden
            ai_oComboBox.setStyle('display', 'none');
            window.fireEvent('resize');
        }
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    function eventUpdateAttributes(ai_oMainFilterElement, ai_sEvent){                               //Fires given event of main filter element if event valid
        ai_oMainFilterElement.fireEvent(sEventParentListChanged);                                   //Indicates to dependent lists that value updated
        if(ai_sEvent && ai_sEvent !== sEventParentListChanged){                                     //Fire specific event if exists and different to previous event
            ai_oMainFilterElement.fireEvent(ai_sEvent);
        }
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    function invalidateValues(ai_oMainFilterElement, ai_oAuxValues){
        var i;
        ai_oAuxValues.bLoadInterrupted = true;                                                      //Triggers reload upon focus
        ai_oAuxValues.sFilterValue = undefined;                                                     //Reset latest filter value
        for(i = 0; i < ai_oAuxValues.saResultItems.length; i++){
            ai_oMainFilterElement.set(sResultAttributePrefix + ai_oAuxValues.saResultItems[i], ''); //Reset attributes of main filter element
        }
        ai_oMainFilterElement.addClass('scoDynamicListFilter');                                     //Mark value as filter not as valid list value
        eventUpdateAttributes(ai_oMainFilterElement, ai_oAuxValues.sEventAttributesChanged);        //Fire event
    }
    return{
        //------------------------------------------------------------------------------------------------------------------------------------------------------------------
        initialize: function(ai_oParam){
            var aux,
                i,
                oAuxValues = {                                                                      //Object with auxilliar values used to pass these values to private methods
                    sFilterValue: undefined,                                                        //Last used filter
                    initValue: ai_oParam.initValue,
                    iIndexMainFilter: undefined,                                                    //Index of main filter in parameter array
                    saResultItems: undefined,
                    oaSecondaryFilterElements: undefined,                                           //List of objects
                    saSecondaryFilterAttributes: [],                                                //List of attributes, each attribute corresponds to one object
                    iIndexSecFilterElements: undefined,
                    bAllSecFilterElementsStatic: true,
                    color: undefined,                                                               //Color of main filter element
                    bgcolor: undefined,                                                             //Background-color of main filter element
                    sEventAttributesChanged: ai_oParam.eventAttributesChanged,                      //Event fired when attributes changed
                    labelHelp: ai_oParam.labelHelp,
                    labelLoading: ai_oParam.labelLoading,
                    labelAndMore: ai_oParam.labelAndMore,
                    labelNoMatch: ai_oParam.labelNoMatch,
                    saParametersNext: undefined,
                    bLoadInterrupted: false,                                                        //Load interrupted due to lost focus
                    processResult: function(ai_oResultJSON){                                        //Method called by asynchronous request on success to process results
                        processResult(oMainFilterElement, oComboBox, oAuxValues, ai_oResultJSON);   //Pass values available (closure) to private method
                    },
                    processResultNext: function(ai_oResultJSON){                                    //Method called by asynchronous request on success to process next results
                        processResultNext(oMainFilterElement, oComboBox, oAuxValues, ai_oResultJSON);                               //Pass values available (closure) to private method
                    }
                },
                oComboBox,
                oMainFilterElement,
                oParam,
                saParameters,
                sFilterValue;

            if(!window.meta4Ajax){                                                                  //Make sure all required libraries loaded
                alert('Error: Library meta4ajax.js missing!');
            }else if(!window.MooTools){
                alert('Error: Library mootools.js missing!');
            }else{
                oParam = ai_oParam;                                                                 //Store parameter object
                //Build fixed parameter string
                saParameters = [['Meta4Object', ai_oParam.meta4Object], ['NodeQBF', ai_oParam.nodeQBF], ['NodeTR', ai_oParam.nodeTR], ['ListMethod', ai_oParam.listMethod],  ['SecondaryTI', ai_oParam.secondaryTI], ['ListMethodArguments', ai_oParam.listMethodArguments], ['ResultItems', ai_oParam.resultItems], ['MaxRecords', ai_oParam.maxRecords]];
                oAuxValues.saParametersNext = [['Meta4Object', ai_oParam.meta4Object], ['NodeTR', ai_oParam.nodeTR], ['ResultItems', ai_oParam.resultItems], ['MaxRecords', ai_oParam.maxRecords], ['TotalRecords', 0], ['Direction', '0'], ['Range', [0,0]]];
                if(oParam.hasOwnProperty('appStart')){                                              //Process Application Start date if included in parameter object
                    aux = oParam.appStart;                                                          //Unprocessed default value
                    if(typeof(oParam.appStart) === 'undefined'){                                    //If no datatype, set value to empty string
                        oParam.appStart = '';
                        aux = oParam.appStart;
                    }else if(typeof(oParam.appStart) === 'string'){                                 //If string
                        if($(oParam.appStart)){                                                     //Try to convert into object
                            oAuxValues.oAppStart = $(oParam.appStart);                              //Add object to aux values
                            oAuxValues.iIndexAppStart = saParameters.length;
                            aux = undefined;
                        }
                    }else if(typeof(oParam.appStart) === 'object'){                                 //If object
                        oAuxValues.oAppStart = $(oParam.appStart.id);                               //Use ID of object and apply mootools
                        oAuxValues.iIndexAppStart = saParameters.length;
                        aux = undefined;
                    }                                                                               //If type undefined or string, value remains static
                    saParameters[saParameters.length] = ['AppStart', aux];                          //Add to parameter array with value if static
                }
                if(oParam.hasOwnProperty('appEnd')){                                                //Process Application End date if included in parameter object
                    aux = oParam.appEnd;                                                            //Unprocessed default value
                    if(typeof(oParam.appEnd) === 'undefined'){                                      //If no datatype, set value to empty string
                        oParam.appEnd = '';
                        aux = oParam.appEnd;
                    }else if(typeof(oParam.appEnd) === 'string'){                                   //If string
                        if($(oParam.appEnd)){                                                       //Try to convert into object
                            oAuxValues.oAppEnd = $(oParam.appEnd);                                  //Add object to aux values
                            oAuxValues.iIndexAppEnd = saParameters.length;
                            aux = undefined;
                        }
                    }else if(typeof(oParam.appEnd) === 'object'){                                   //If string
                        oAuxValues.oAppEnd = $(oParam.appEnd.id);                                   //Use ID of object and apply mootools
                        oAuxValues.iIndexAppEnd = saParameters.length;
                        aux = undefined;
                    }
                    saParameters[saParameters.length] = ['AppEnd', aux];                            //Add app end to parameter array if available
                }
                //Identify main filter element as object
                if(typeof(ai_oParam.mainFilterElement) === 'string'){
                    //If type is string: indicates ID of element
                    oMainFilterElement = $(ai_oParam.mainFilterElement);
                }else if(typeof(ai_oParam.mainFilterElement) === 'object'){
                    //If type is object: use ID of object and apply mootools
                    oMainFilterElement = $(ai_oParam.mainFilterElement.id);
                }else{
                    alert('Error: mainFilterElement should be of type string or object: ' + ai_oParam.mainFilterElement);
                    return;
                }
                if(!oMainFilterElement){
                    alert('Error: mainFilterElement does not exist in page: ' + ai_oParam.mainFilterElement);
                    return;
                }
                oMainFilterElement.set('FilterValue', oMainFilterElement.get('value'));             //Filter value
                if(ai_oParam.secondaryFilterElements){                                              //Process secondary filter elements
                    oAuxValues.oaSecondaryFilterElements = ai_oParam.secondaryFilterElements.split(',');    //Separate elements
                    for(i = 0; i < oAuxValues.oaSecondaryFilterElements.length; i++){               //Loop through all elements and convert them into objects if required
                        if(oAuxValues.oaSecondaryFilterElements[i].match(new RegExp('[..]'))){      //Element..attribute (otherwise fix value)
                            oAuxValues.bAllSecFilterElementsStatic = false;                         //Set to false if type is different to string
                            aux = oAuxValues.oaSecondaryFilterElements[i].split('..');              //Separate element from attribute
                            oAuxValues.oaSecondaryFilterElements[i] = $(aux[0]);                    //Generate object
                            if(oAuxValues.oaSecondaryFilterElements[i]){                            //Continue if object valid
                                oAuxValues.saSecondaryFilterAttributes[i] = aux[1];                 //Assign attribute to attribute list
                                oAuxValues.oaSecondaryFilterElements[i].addEvent(sEventParentListChanged, function(){
                                    invalidateValues(oMainFilterElement, oAuxValues);               //Reset values
                                });
                            }else{                                                                  //Issue error if element does not exist as object
                                alert('Error: element "' + aux[0] + '" does not refer to an object!');
                                return;
                            }
                        }
                    }
                    oAuxValues.iIndexSecFilterElements = saParameters.length;                       //Identify next empty position in parameter array
                    if(oAuxValues.bAllSecFilterElementsStatic){                                     //All sencodary filter elmenets fixed strings
                        saParameters[oAuxValues.iIndexSecFilterElements] = ['ListMethodValues', oAuxValues.oaSecondaryFilterElements[0]];
                        for(i = 1; i < oAuxValues.oaSecondaryFilterElements.length; i++){
                            saParameters[oAuxValues.iIndexSecFilterElements][1] += (',' + oAuxValues.oaSecondaryFilterElements[i]);
                        }
                    }else{                                                                          //Some of the filter elements are objects
                        saParameters[oAuxValues.iIndexSecFilterElements] = ['ListMethodValues', ''];
                    }
                }
                oAuxValues.color = oMainFilterElement.getStyle('color');                            //Identify color of MFE used to highlight list items
                oAuxValues.bgcolor = oMainFilterElement.getStyle('background-color');               //Identify color of MFE used to highlight list items
                oAuxValues.iIndexMainFilter = saParameters.length;                                  //Add index of main filter element to aux value object
                saParameters[oAuxValues.iIndexMainFilter] = [oMainFilterElement.id, oMainFilterElement.get('value')];//Add main filter element to parameter arry
                oAuxValues.saResultItems = ai_oParam.resultItems.split(',');                        //Split resultItems by ,
                for(i = 0; i < oAuxValues.saResultItems.length; i++){
                    oAuxValues.saResultItems[i] = oAuxValues.saResultItems[i].replace(/^\s+|\s+$/g, '');    //Trim elements
                    oMainFilterElement.set(sResultAttributePrefix + oAuxValues.saResultItems[i], '');//Add 'empty' attributes to main filter element
                }
                eventUpdateAttributes(oMainFilterElement, oAuxValues.sEventAttributesChanged);      //Fire event (attributes initialized)
                //Add <ul> with <li> tag after main filter element
                oComboBox = new Element('ul', {id: oMainFilterElement.id + '.ul'});                 //Create ul tag
                oComboBox.addClass('scoDynamicList');                                               //Set class
                oComboBox.set('styles', {                                                           //Apply attributes of related filter element
                    'background-color': oMainFilterElement.getStyle('background-color'),
                    'border-color': oMainFilterElement.getStyle('border-color')
                });                                                                                 //Position and size are set upon show (in case the main filter element is not visible at the beginning or changes size)
                oComboBox.inject(oMainFilterElement, 'after');                                      //Inject ul after main filter element at same level
                addLI(oMainFilterElement, oComboBox, oAuxValues, ai_oParam.labelHelp);
                if (oAuxValues.initValue) {
                  oAuxValues.sFilterValue = oMainFilterElement.get('value');
                  sFilterValue = oAuxValues.sFilterValue;
                  loadValues(oMainFilterElement, oComboBox, saParameters, oAuxValues);              //Trigger load values
                  oAuxValues.initValue = false;
                };
                hideBox(oComboBox);
                //Add event handlers to main filter element
                oMainFilterElement.addEvent('keyup', function (ai_oEvent) {                         //keyup: method to load values
                    if(oAuxValues.sFilterValue !== oMainFilterElement.get('value')){                //Do nothing if filter unchanged (e.d. shift key)
                        this.set('FilterValue', this.get('value'));                                 //Filter value
                        invalidateValues(oMainFilterElement, oAuxValues);                           //Reset attributes of MFE
                        loadValues(oMainFilterElement, oComboBox, saParameters, oAuxValues);        //Trigger load values
                    }
                });
                oMainFilterElement.addEvent('keydown', function (ai_oEvent) {                       //keydown: move selected list item
                    var aoListItems,
                        bCursorKeys = false,
                        iDirection = 0,
                        sCurrentListIndex,
                        iNextListIndex = 0,
                        iListElements;

                    this.set('FilterValue', this.get('value'));     //Filter value
                    if(boxVisible(oComboBox)){                                                      //Continue if box visible, otherwise show box but do not move highlighted li
                        if(ai_oEvent.key === 'enter'){                                              //Select active list item (if available)
                            sCurrentListIndex = oComboBox.get(sListIndexAttribute);                 //'' (empty) or current index
                            if(sCurrentListIndex){
                                aoListItems = oComboBox.getChildren('li');                          //Identify child elements
                                iListElements = aoListItems.length;
                                if(iListElements > +sCurrentListIndex){                             //Continue only if there are valid child elements
                                    selectLI(aoListItems[+sCurrentListIndex], oMainFilterElement, oComboBox, oAuxValues);
                                }
                            }
                        }else if(ai_oEvent.key === 'down'){                                         //Change active list item (next)
                            iDirection = 1;
                            bCursorKeys = true;
                        }else if(ai_oEvent.key === 'up'){                                           //Change active list item (previous)
                            iDirection = -1;
                            bCursorKeys = true;
                        }
                        if(bCursorKeys){
                            if(iDirection !== 0){                                                   //Up/down
                                aoListItems = oComboBox.getChildren('li');                          //Identify child elements
                                iListElements = aoListItems.length;
                                if(iListElements > 0){                                              //Continue only if there are child elements
                                    if(!aoListItems[iListElements-1].get(sListIndexAttribute)){     //Last list element invalid (... and more ... or only element in list is help text)
                                        iListElements -= 1;
                                    }
                                    sCurrentListIndex = oComboBox.get(sListIndexAttribute);         //'' (empty) or current index
                                    if(sCurrentListIndex){
                                        iNextListIndex = +sCurrentListIndex + iDirection            //Move index according to direction
                                        deactivateLI(aoListItems[+sCurrentListIndex], oComboBox, oAuxValues);   //Deactivate current list item
                                    }
                                    if(iNextListIndex < 0){
                                        iNextListIndex = iListElements - 1;                         //Go to last element
                                    }else if(iNextListIndex >= iListElements){
                                        iNextListIndex = 0;                                         //Go to first element
                                    }
                                    activateLI(aoListItems[iNextListIndex], oComboBox, oAuxValues); //Activate next list item
                                }
                            }
                        }
                    }else{
                        showBox(oComboBox, oMainFilterElement);
                    }
                });
                oMainFilterElement.addEvent('focus', function (ai_oEvent) {                         //FOCUS: select text of main filter element and show ul
                    oMainFilterElement.select();
                    if (oMainFilterElement.hasClass('scoInvalidValue')) {
                      oMainFilterElement.removeClass('scoInvalidValue');
                      oMainFilterElement.set('value',oAuxValues.sFilterValue);
                    }
                    oMainFilterElement.addClass('scoDynamicListFilter');
                    showBox(oComboBox, oMainFilterElement);
                    if(oAuxValues.bLoadInterrupted){
                        oAuxValues.bLoadInterrupted = false;
                        loadValues(oMainFilterElement, oComboBox, saParameters, oAuxValues);
                    }
                });
                oMainFilterElement.addEvent('click', function (ai_oEvent) {                         //CLICK: select text of main filter element and show ul
                    showBox(oComboBox, oMainFilterElement);
                });
                oMainFilterElement.addEvent('dblclick', function (ai_oEvent) {                      //DBLCLICK: if main filter element empty, assign '%' and trigger keyup event
                    showBox(oComboBox, oMainFilterElement);
                    if(oMainFilterElement.get('value')){                                            //Force reload if there is a value
                        oAuxValues.sFilterValue = '';                                               //Remove pervious filter to force relaod
                    }else{
                        oMainFilterElement.set('value', '%')                                        //Set wildcart %
                    }
                    this.set('FilterValue', this.get('value'));                                     //Filter value
                    oMainFilterElement.fireEvent('keyup');                                          //Trigger load
                });
                oMainFilterElement.addEvent('blur', function (ai_oEvent) {                          //BLUR: hide ul (with delay to ensure event "click" of <li> is fired first)
                    if (this.get('m4listnav')) {ai_oEvent.preventDefault(); this.focus(); return;}  //if 'semaphore' is on then it keeps into the input
                    if(hTimer){                                                                     //Currently loading
                        hTimer = $clear(hTimer);                                                    //Reset timer
                        oAuxValues.sFilterValue = '';
                        oComboBox.set('html', '');                                                  //Clear combo
                        addLI(oMainFilterElement, oComboBox, oAuxValues, oAuxValues.labelHelp);     //LI: Type name...
                        oAuxValues.bLoadInterrupted = true;                                         //Continue load on click of this element
                    }else{                                                                          //Apply single filter result on blur (but only if there is one valid item in list)
                        if(oMainFilterElement.get(sResultAttributePrefix + oAuxValues.saResultItems[0])){   //Check if main filter has a valid value
                            oMainFilterElement.removeClass('scoDynamicListFilter');                 //Remove list class and keep value
                        }else{
                            aux = oComboBox.getChildren('li');                                      //Identify lis of combobox
                            if(aux.length === 1){                                                   //Continue if there is only one element in list
                                if(aux[0].get('_m4valid')){                                         //Continue if element is a valid filter result
                                    aux[0].fireEvent('mousedown', {                                 //Apply single valid option
                                        target: {
                                            id: aux[0].id,
                                            parentNode: {
                                                id: aux[0].parentNode.id
                                            }
                                        }
                                    });
                                }
                            }
                        }
                    }
                    (function(){hideBox(oComboBox);}).delay(iDelayBlur);                            //Delay hideBox to give the click event of the LI time to be triggered
                });
            }
        }
    }
}());