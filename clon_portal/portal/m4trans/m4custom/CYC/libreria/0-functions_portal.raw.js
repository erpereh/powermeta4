//-------------------------------------------------------------------------------------------------
//Compact with e.g. http://closure-compiler.appspot.com/home
//-------------------------------------------------------------------------------------------------
var Meta4 = {};
/*Meta4: Object for global vars and methods
  Contains the following objects:
  - portal
    - init
    - initEss
    - initMss
    - changePortal
    - getEss
    - offsetChanged
    - setMinWidth
    - setMaxWidth
    - showLogin
    - toggleMenu
  - menu
    - init
    - interceptEvent
    - activateAccordion
    - validateUrl
    - setUrlEss
    - setUrlMss
    - navigate
    - getNavigate
    - addFavourite
    - modifyFavourite
    - deleteFavourite
  - menu.search
    - init
    - clear
    - restore
    - search
    - getCriterion
  - header
    - init
    - home
    - whoIsWho
    - addFavourite
    - iconHot
    - iconNormal
    - beforeLoad
    - afterLoad
    - changePortal
    - logout
  - frameBody
    - setLoadMode
    - resetLoadMode
    - getLocation
    - getTitle
    - getSrc
    - updateSrc
    - afterLoad
    - resize
    - refresh
    - setEventTakenCareOf
  - ajax
    - sendSync
    - sendAsync
    - getResponse
    - sendSyncJSON
    - sendAsyncJSON
    - getResponseJSON
*/

//-------------------------------------------------------------------------------------------------
//Methods related to portal
Meta4.portal = function () {
    //private vars
    var bEss = true,                                                                                //ess if true otherwise mss
        bMenuBlocked = false,                                                                       //indicates that menu is toggled
        iMenuWrapperWidth,
        iContentWrapperLeft,
        iOffsetHeigth = 0,
        iOffsetWidth = 0,
        oContentWrapper,
        oMenuWrapper,
        oPortal,
        sUrlLogin,
        sUrlPortalEss = '../sse_generico/ssco_portal.jsp',
        sUrlPortalMss = '../mss_generico/smco_portal.jsp',
        sUrlPutObject = '../sse_generico/sgco_put_object.jsp';
    //private methods
    function updateOffset() {
        try {
            iOffsetHeigth = document.body.offsetHeigth;
            iOffsetWidth = document.body.offsetWidth;
        } catch (e) {
            iOffsetHeigth = 0;
            iOffsetWidth = 0;
        }
    }
    function init(ai_oPortal, ai_oMenuWrapper, ai_oMenu, ai_oContentWrapper, ai_sUrlLogin, ai_bEss) {
        oPortal = ai_oPortal;
        oMenuWrapper = ai_oMenuWrapper;
        oMenu = ai_oMenu;
        oContentWrapper = ai_oContentWrapper;
        sUrlLogin = ai_sUrlLogin;
        bEss = ai_bEss;
        updateOffset();
        iMenuWrapperWidth = oMenuWrapper.offsetWidth;
        iContentWrapperLeft = +oContentWrapper.getStyle('m4marginLeftMenu');
    }
    return {
        //public methods
        init: function (ai_oPortal, ai_oMenuWrapper, ai_oMenu, ai_oContentWrapper, ai_sUrlLogin, ai_bEss) {
            init(ai_oPortal, ai_oMenuWrapper, ai_oMenu, ai_oContentWrapper, ai_sUrlLogin, ai_bEss);
        },
        initEss: function (ai_oPortal, ai_sUrlLogin) {
            init(ai_oPortal, ai_sUrlLogin, true);
        },
        initMss: function (ai_oPortal, ai_sUrlLogin) {
            init(ai_oPortal, ai_sUrlLogin, false);
        },
        changePortal: function () {
            Meta4.frameBody.setEventTakenCareOf();
            var sNewsURL = (bEss) ? sUrlPortalMss : sUrlPortalEss;
            if (Meta4.IE6) {window.location = sNewsURL;}
            else {window.location.href = sNewsURL;}
        },
        getEss: function () {
            return bEss;
        },
        offsetChanged: function () {
            var bResult = false;
            try {
                if (iOffsetHeigth !== document.body.offsetHeigth || iOffsetWidth !== document.body.offsetWidth) {
                    bResult = true;
                    updateOffset();
                }
            } catch (e) {
                iOffsetHeigth = 0;
                iOffsetWidth = 0;
            }
            return bResult;
        },
        setMinWidth: function (ai_iWidth) {
            var iCurrentWidth = 0;

            iCurrentWidth = oPortal.scrollWidth + oPortal.offsetWidth - oPortal.clientWidth;
            if (iCurrentWidth < ai_iWidth) {
                oPortal.setStyle('width', ai_iWidth);
            }
        },
        setMaxWidth: function () {
            oPortal.setStyle('width', '100%');
        },
        showLogin: function () {
            if (sUrlLogin) {
                window.location.pathname = sUrlLogin;
            }
        },
        toggleMenu: function(ev) {
            var bMenuVisible = (oMenuWrapper.clientHeight !== 0),
                fxWrapper = new Fx.Tween(oMenuWrapper, {duration: 750}),
                fxElement = new Fx.Tween(oMenu, {duration: 750}),
                fxContent = new Fx.Tween(oContentWrapper);

            if (ev) {
                ev.preventDefault();                                                                //stop event from bubbeling
            }
            if (!bMenuBlocked) {
                bMenuBlocked = true;                                                                //lock menu (transitions no reentrant)
                Meta4.ajax.sendAsync(sUrlPutObject, [['sId', 'SGCO_IND_SHOW_MENU'], ['sValue', !bMenuVisible]]);
                if (bMenuVisible) {                                                                 //hide menu (and expand content)
                    fxWrapper.start('height', 0);                                                   //collapse menu wrapper
                    fxElement.start('margin-top', -oMenuWrapper.clientHeight);                      //shift menu to the top
                    fxWrapper.addEvent('complete', function(){
                        fxContent.start('margin-left', 5);                                        //move content wrapper to the left (-10 to compensate margin of content document)
                        fxContent.addEvent('complete', function(){
                            bMenuBlocked = false;                                                   //unlock menu (last transition finished)
                            $('hideMenu').addClass('hidden');
                            $('showMenu').removeClass('hidden');
                        });
                    });
                } else {                                                                            //show menu (and make content smaller)
                    oMenu.setStyle('margin-top', -oMenu.clientHeight);                              //shift menu to the top (could have changed in between or menu invisible at start)
                    fxContent.start('margin-left', 220);                                            //move content wrapper to original x-position
                    fxContent.addEvent('complete', function(){
                        fxWrapper.start('height', null);                                            //open menu wrapper w/o limitation (dynamic heigth)
                        fxElement.start('margin-top', 0);                                           //shift menu to the bottom
                        fxWrapper.addEvent('complete', function(){
                            bMenuBlocked = false;                                                   //unlock menu (last transition finished)
                            $('showMenu').addClass('hidden');
                            $('hideMenu').removeClass('hidden');
                        });
                    });
                }
                bMenuVisible = !bMenuVisible;                                                       //toggle value of flag
            }
        }
    };
} ();

//-------------------------------------------------------------------------------------------------
//Methods related to menu
Meta4.menu = function () {
    //private vars
    var bEss = true,                    //Ess if true otherwise mss
        bNavigate = false,
        oAccordion = [],                //Each array represents a level! E.g. oAccordion[1].display(2) shows the 3rd option of the 2nd menu level
        oDivWait,
        oLastResponse,                  //Result of last url validation
        sDeleteOperation = 'Delete',    //Operation to delete favourite
        sLastUrl,                       //Last validated url
        sPathFavourites,
        sUrlCheckLink = '/servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp',
        sUrlDeleteFavourite = '/servlet/CheckSecurity/JSP/sse_generico/sgco_favourite_back.jsp';
    //private methods
    function addAccordion(ai_oAccordion) {
        oAccordion[oAccordion.length] = ai_oAccordion;
    }
    function activateAccordion(ai_sPath) {
        var i,
            saPath;
        //oAccordion[0].display(0);
        //oAccordion[1].display(2);
        //oAccordion[2].display(1);
        if (ai_sPath && ai_sPath !== '') {
            saPath = ai_sPath.split(/;/g).filter(function(item, index) {                                   //filter array to ensure that all elements have a valid data
              return (item);
            });
            for (i = 0; i < saPath.length; i++) {
                if (oAccordion[i].elements[+saPath[i]].offsetHeight === 0) {                               //Call display function only if section closed
                    oAccordion[i].display(+saPath[i]);
                }
            }
        }
    }
    function showFavourites() {
        activateAccordion(sPathFavourites);
    }
    function destroyObject(ai_oObject) {
        ai_oObject.destroy();
    }
    return {
        //public methods
        init: function (ai_oDivWait, ai_bUseFirstMenuOption) {
            var heightValue = (window.ie6) ? '100%' : '',                                              //adaptation for IE6
                togglerName = 'div.scoMenuLeft div.divHeader',                                         //selektors of containers for switchs and content
                togglerSubName = 'div.scoMenuLeft div.divContentSubmenuImg_',
                contentName = 'div.scoMenuLeft div.divContent',
                contentSubName = 'div.scoMenuLeft div.divContentSubtitle_';
                counter = 1,
                togglers = $$(togglerName),
                contents = $$(contentName);
                if (Browser.ie7) {
                  contents.addClass('divContentNone');                                                 //this behaviour is only for IE7: in this browser the elements always have sized a 1px of height, thus, we add a class to put the display property to 'none'
                }

            //Init private variables
            oDivWait = ai_oDivWait;
            bEss = Meta4.portal.getEss();
            sPathFavourites = (togglers.length >= 2) ? String(togglers.length - 2) + ';' : '';      //identify path of favourites (last but one)
            togglers.each(function (ai_oToggler) {
                //remember the original color
                ai_oToggler.addClass('m4activeColor');
                ai_oToggler.activeColor = ai_oToggler.getStyle('color');
                ai_oToggler.removeClass('m4activeColor');
                ai_oToggler.origColor = ai_oToggler.getStyle('color');
                //set the effect
                ai_oToggler.fx = new Fx.Tween(ai_oToggler, 'color');
            });
            while (togglers.length > 0) {                       //Apply accordion, one iteration per level!
                addAccordion(new Accordion(togglers, contents, {
                    opacity: false,
                    alwaysHide: (counter !== 1),                //false for first level (second click does not fold section)
                    start : 'all-opened',
                    onComplete: function () {
                        var element = $(this.elements[this.previous]);
                        if (element && element.offsetHeight > 0) {
                            element.setStyle('height', heightValue);
                        };
                        if (Browser.ie7) {
                          var objHeight = this.to;
                          this.elements.each(function(objCont, index) {
                            if (objCont.hasClass('divContent')) {
                              if ((objHeight[index].height[0].value == 0) && !objCont.hasClass('divContentNone')) {
                                objCont.addClass('divContentNone');
                              }
                            }
                          });
                        }
                    },
                    onActive: function (toggler, content) {
                        if (Browser.ie7) {                      
                          if (content.hasClass('divContentNone')) {
                            content.removeClass('divContentNone');
                          }
                        }
                        if (toggler.fx != null) {
                            toggler.fx.start('color', toggler.activeColor);
                        }
                        toggler.removeClass('divImgClosed');
                        toggler.addClass('divImgOpen');
                    },
                    onBackground: function (toggler, content) {
                        if (toggler.fx != null) {
                            toggler.fx.start('color', toggler.origColor);
                        }
                        toggler.removeClass('divImgOpen');
                        toggler.addClass('divImgClosed');
                    }
                }));
                // Set selectors for next level
                counter++;
                togglers = $$(togglerSubName + (counter - 1));
                contents = $$(contentSubName + (counter - 1));
            }
        },
        //Intercepts event click of menu options
        interceptEvent: function (ev) {
            var sUrl,
                oResponse;
            if (ev.type === 'click' && ev.target.tagName === 'A') {                       //intercept event click of A tag
                if (ev.target.protocol === 'mailto:') {
                    //Ignore "mailto:"
                } else if (ev.target.protocol === 'javascript:') {
                    //Ignore "javascript:"
                } else {
                    sUrl = '';
                    if (Browser.ie && (!Browser.ie10)) {sUrl = '/';}
                    sUrl = sUrl + ev.target.pathname + ev.target.search;
                    oResponse = Meta4.menu.validateUrl(sUrl);
                        //- '1' : item found in current tree (get path and update accordion)
                        //- '-1': item found but in oposite tree (change from ESS to MSS or vice versa)
                        //- ''  : item not found (can't do much in this case, continue w/o intervention)
                        //- '0' : error
                    if (oResponse) {
                        switch (oResponse.result) { 
                            case '1':                                                               //item found in current tree
                                Meta4.frameBody.setLoadMode(sUrl);                                  //update source of frame
                                break;
                            case '-1':                                                              //item found but in oposite tree (change from ESS to MSS or vice versa)
                                Meta4.portal.changePortal();
                                break;
                            case '':                                                                //item not found, continue in current portal
                                Meta4.frameBody.setLoadMode(sUrl);                                  //update source of frame
                                break;
                            case '0':                                                               //error
                                //oResponse.error;
                                break;
                            default:                                                                //item not found (can't do much in this case, continue w/o intervention)
                        }
                        ev.preventDefault();                                                        //cancel further processing of event
                    }
                }
            }
        },
        //Activates (opens) accordion at given position
        activateAccordion: function (ai_sPath) {                                                     //ai_sPath: '0;2;1'
            activateAccordion(ai_sPath);
        },
        //Validates given url if different to last validated url
        validateUrl: function (ai_sUrl) {
            if (sLastUrl !== ai_sUrl) {
                sLastUrl = ai_sUrl;
                Meta4.ajax.sendSyncJSON(sUrlCheckLink, [['sUrl', ai_sUrl], ['bEss', bEss]]);
                oLastResponse = Meta4.ajax.getResponseJSON();                                       //retrieve object with result
            }
            return oLastResponse;
        },
        //Compares given url to last validated url, validates url again to update session variable and to get path if unequal
        compareToLastValidatedUrl: function (ai_sUrl) {
            var oResponse;
            if (ai_sUrl !== sLastUrl && sLastUrl !== undefined) {
                oResponse = this.validateUrl(ai_sUrl);
                    //- '1' : item found in current tree (get path and update accordion)
                    //- '-1': item found but in oposite tree (change from ESS to MSS or vice versa)
                    //- ''  : item not found (can't do much in this case, continue w/o intervention)
                    //- '0' : error
                if (oResponse) {
                    switch (oResponse.result) { 
                        case '1':                                                                   //item found in current tree (get path and update accordion)
                            this.activateAccordion(oResponse.path);
                            break;
                        case '-1':                                                                  //item found but in oposite tree (change from ESS to MSS or vice versa)
                            Meta4.portal.changePortal();
                            break;
                        case '0':                                                                   //error
                            //oResponse.error;
                            break;
                        default:                                                                    //item not found (can't do much in this case, continue w/o intervention)
                    }
                }
            }
        },
        //Attatchs given url to session to be used upon next change of portal or refresh in ESS
        setUrlEss: function (ai_sUrl) {
            Meta4.ajax.sendSync(sUrlCheckLink, [['sNextUrl', ai_sUrl], ['bEss', true]]);
        },
        //Attatchs given url to session to be used upon next change of portal or refresh in MSS
        setUrlMss: function (ai_sUrl) {
            Meta4.ajax.sendSync(sUrlCheckLink, [['sNextUrl', ai_sUrl], ['bEss', false]]);
        },
        //Navigates frame to given url
        navigate: function (ai_sUrl) {
            Meta4.frameBody.setEventTakenCareOf();
            Meta4.frameBody.setLoadMode(ai_sUrl);
        },
        getNavigate: function () {
            return bNavigate;
        },
        addFavourite: function (ai_iOrdinal, ai_sTitle, ai_sUrl) {
            var oTemplateLI = $('favouriteLiTemplate'),
                oFavouriteUL = $('menuLeftFavourites'),
                oFavouriteLI,
                oFavouriteLiDiv,
                oFx;

            if (oTemplateLI) {
                //Content div:
                //<div class='divContentFav' id='favouritesOrdinal'>
                //  <div class='divSep'></div>
                //  <div class='divContentTitle'>
                //    <span><a title='sTitle' href='sUrl'>sTitle</a></span>
                //  </div>
                //  <div class='divContentImg' onclick='Meta4.menu.deleteFavourite(sOrdinal);' title='sGenericToolTip'>
                //  </div>
                //</div>
                try {
                    oFavouriteLI = oTemplateLI.clone();
                    oFavouriteLI.id = 'favourite' + String(ai_iOrdinal);
                    oFavouriteLiDiv = oFavouriteLI.childNodes[0].childNodes[0];
                    oFavouriteLiDiv.childNodes[0].title = ai_sTitle;
                    oFavouriteLiDiv.childNodes[0].href = ai_sUrl;
                    oFavouriteLiDiv.childNodes[0].childNodes[0].data = ai_sTitle;
                    oFavouriteUL.appendChild(oFavouriteLI);
                    oFavouriteLI.getElement('.divContentImg').addEvent('click', function () {       //attach event click to span (delete favourite)
                            Meta4.menu.deleteFavourite(ai_iOrdinal);
                        });
                    oFx = new Fx.Morph(oFavouriteLI, {
                        duration: 1000,
                        link: 'chain'
                    });
                    oFx.set({'opacity':0});                                                         //hide new item (immediately)
                    oFx.start.pass({'opacity':1}, oFx).delay(500);                                  //show new item (with transition)
                } catch (e) {}
            showFavourites();                                                                       //open menu section: favourites
            }
        },
        modifyFavourite: function (ai_iOrdinal, ai_sTitle) {
            var oLI = $('favourite' + String(ai_iOrdinal)),
                oFx;

            if (oLI) {
                try {
                    oLI.childNodes[0].childNodes[0].childNodes[0].title = ai_sTitle;
                    oLI.childNodes[0].childNodes[0].childNodes[0].childNodes[0].data = ai_sTitle;
                    showFavourites();
                    oFx = new Fx.Tween(oLI, {
                        property: 'opacity',
                        duration: 500,
                        link: 'chain'
                    });
                    oFx.start.pass(0.2, oFx).delay(500);                                            //fade item slightly in and out to highlight
                    oFx.start.pass(1, oFx).delay(600);
                } catch (e) {}
            }
        },
        deleteFavourite: function (ai_iOrdinal) {
            var oLI = $('favourite' + String(ai_iOrdinal)),
                oResponse = null,
                oFx;

            if (oLI) {
                Meta4.ajax.sendSyncJSON(sUrlDeleteFavourite, [['sOperation', sDeleteOperation], ['sOrdinal', String(ai_iOrdinal)]]);
                oResponse = Meta4.ajax.getResponseJSON();
                // 0: item deleted
                // -1: error on persist_tree
                // -2: ordinal does not exist
                if (oResponse && oResponse.result === 0) {
                    oFx = new Fx.Morph(oLI, {
                        duration: 400
                    }).start({'opacity':0});                                                        //fade item out
                    destroyObject.pass(oLI).delay(400);                                             //and delete with delay (to see transition)
                }
            }
        }
    };
} ();

//-------------------------------------------------------------------------------------------------
//Methods related to search
Meta4.menu.search = function () {
    //private vars
    var bUpdateSession = false,         //criterion attached to session should be updated (cleaned or updated if below minimum length)
        bClearOnly = false,             //do not use response of search
        htmlMinLength,                  //html that indicates minimum length of search criterion (shown instead of serch result)
        htmlNoSearch,                   //html that indicates that there is no active serach (shown instead of serch result)
        minLength = 2,                  //minimum length of serch riterion (after trim)
        oForm = undefined,              //form to make request
        oInput = undefined,             //input tag that contains search criterion
        oResult = undefined,            //div to show search results
        previousCriterion,              //last search criterion (w/o white spaces) to avoid identical requests
        textInitialString;              //initial string of input
    //private methods
    //Clears search criterion attached to session
    function clearServer() {
        if (bUpdateSession) {
            bUpdateSession = false;
            if (oInput.value === textInitialString || oInput.value.length < minLength) {            //all other cases updated session implicitely
                bClearOnly = true;
                oForm.send();                                                                       //send request
            }
        }
    }
    return {
        //public methods
        init: function (ai_oForm, ai_oInput, ai_oResult, ai_sInitialString, ai_htmlMinLength, ai_htmlNoSearch, ai_sCriterion) {
            oForm = ai_oForm;
            oInput = ai_oInput;
            oResult = ai_oResult;
            textInitialString = ai_sInitialString;
            htmlMinLength = ai_htmlMinLength;
            htmlNoSearch = ai_htmlNoSearch;
            oInput.value = ai_sCriterion || ai_sInitialString;
            bUpdateSession = (ai_sCriterion) ? true : false;
            //Init form that performs menu-search
            if (oForm) {
                oForm.addEvent('submit', function (ev) {
                    ev.preventDefault();                                                            //stop event from bubbeling otherwise form would be send upon [enter]
                });
                oForm.set('send', {onComplete: function (response) {
                    if (bClearOnly) {
                        bClearOnly = false;                                                         //request was used to clear server
                    } else {
                        oResult.removeClass('scoSpinner').set('html', response);
                        oResult.setStyle('height', '');
                    }
                }});
            }
        },
        //Clears input (text box) upon click
        clear: function () {
            if (oInput.value === textInitialString) {
                oInput.value = '';
                oResult.empty().set('html', htmlMinLength);                                         //serach criterion below minimum length
                oResult.setStyle('height', '');
            } else {
                oInput.select();
                this.search();                                                                      //invoke search for current content
            }
            oInput.removeClass('inactive');
        },
        //Restores input (text box) after leaving
        restore: function () {
            clearServer();                                                                          //clear criterion attached to session
            if (oInput.value === '' || oInput.value === textInitialString) {
                oInput.value = textInitialString;
                oInput.addClass('inactive');
                oResult.empty().set('html', htmlNoSearch);
                oResult.setStyle('height', '');
            }
        },
        //Invokes search
        search: function () {
            var criterion = oInput.value.replace(/^\s\s*/, '').replace(/\s\s*$/, '');               //trim value
            if (criterion.length >= minLength) {                                                    //only proceed if search criterion has minimum length
                if (criterion !== previousCriterion) {                                              //only proceed if search criterion has changed
                    previousCriterion = criterion;
                    oResult.empty().addClass('scoSpinner');                                         //empty result area and add spinner
                    bUpdateSession = true;
                    oForm.send();                                                                   //send request
                }
            }
            else {
                bUpdateSession = true;
                oResult.empty().removeClass('scoSpinner').set('html', htmlMinLength);               //serach criterion below minimum length
                oResult.setStyle('height', '');
                previousCriterion = criterion;
            }
        },
        //Returns search criterion
        getCriterion: function () {
            return (oInput.value !== textInitialString) ? oInput.value : null;
        }
    };
} ();                                                                                               //assign result of function

//-------------------------------------------------------------------------------------------------
//Methods related to frame that contains page body
Meta4.header = function () {
    //private vars
    var oButtonAddFavourite,
        sOperationAdd = 'Add',
        sUrlHome,
        sUrlAddFavourite = '/servlet/CheckSecurity/JSP/sse_generico/sgco_favourite_back.jsp',
        sUrlLogout = '/servlet/CheckSecurity/JSP/sse_generico/sse_logout.jsp',
        sUrlWhoIsWho = '/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp';
        sUrlMyQueries = '/servlet/CheckSecurity/JSP/shco_rp/shco_rp_list_pub_reports.jsp';
    //private methods
        //none
    return {
        //public methods
        init: function (ai_sUrlHome, ai_oButtonAddFavourite) {
            sUrlHome = ai_sUrlHome;
            oButtonAddFavourite = ai_oButtonAddFavourite;
        },
        home: function () {
            if (sUrlHome) {
                Meta4.frameBody.setLoadMode(sUrlHome);                                              //update scr of frame
            }
        },
        whoIsWho: function () {
            Meta4.menu.setUrlEss(sUrlWhoIsWho);
            //Only available in ESS, therefore change portal if required and update src of frame
            if (Meta4.portal.getEss()) {
                Meta4.frameBody.setLoadMode(sUrlWhoIsWho);                                          //update scr of frame
                Meta4.frameBody.updateSrc(sUrlWhoIsWho);                                            
            } else {                                                                                //change to portal ESS
                //Meta4.frameBody.setLoadMode('whoIsWho::MSS');
                Meta4.portal.changePortal();
            }
        },
        myQueries: function () {
            if (sUrlHome) {
                Meta4.frameBody.setLoadMode(sUrlMyQueries);                                                //update scr of frame
            }
        },
        //Adds current page to favourites
        addFavourite: function () {
            var sTitle = Meta4.frameBody.getTitle(),                                                //identify current page's title
                sUrl = Meta4.frameBody.getLocation(),                                               //identify current page's location
                oResponse = null,
                oFx;

            if (sTitle && sUrl) {
                sTitle = sTitle.substr(0,25);
                Meta4.ajax.sendSyncJSON(sUrlAddFavourite, [['sOperation', sOperationAdd], ['sUrl', sUrl], ['sName', sTitle]]);
                oResponse = Meta4.ajax.getResponseJSON();
                // negative ordinal: if item already exists and name changed
                // positive ordinal: new item
                if (oResponse) {
                    if (oResponse.result < 0) {                                                     //name updated
                        Meta4.menu.modifyFavourite(-1 * oResponse.result, sTitle);
                    } else if (oResponse.result > 0) {                                              //item added
                        Meta4.menu.addFavourite(oResponse.result, sTitle, sUrl);
                    }
                }
                oFx = new Fx.Morph(oButtonAddFavourite, {
                    duration: 500,
                    link: 'chain'
                });
                oFx.start({'opacity': 0.2}).start({'opacity': 1});                                  //fade button in and out
            }
            //Only items that are in menu should be added, items with parameters post should not be added under any condition
            //Question: should parameters (get) be included or should only the URL w/o paramters be added?
        },
        //Changes icon (src) to _hot
        iconHot: function (ai_oImgTag) {
            if (ai_oImgTag.getAttribute('m4SrcHot')) {
                ai_oImgTag.src = ai_oImgTag.getAttribute('m4SrcHot'); //ai_oImgTag.m4SrcHot;
            }
        },
        //Changes icon (src) back to normal (w/o _hot)
        iconNormal: function (ai_oImgTag) {
            if (ai_oImgTag.getAttribute('m4SrcNormal')) {
                ai_oImgTag.src = ai_oImgTag.getAttribute('m4SrcNormal'); //ai_oImgTag.m4SrcNormal;
            }
        },
        beforeLoad: function () {
            //use to disable e.g. addFavourite button
        },
        afterLoad: function () {
            //use to enable e.g. addFavourite button
        },
        changePortal: function () {
            Meta4.portal.changePortal();
        },
        logout: function () {
            Meta4.frameBody.setEventTakenCareOf();
            if (Meta4.IE6) {window.location = sUrlLogout;}
            else {window.location.href = sUrlLogout;}
        }
    };
} ();                                                                                               //assign result of function


//-------------------------------------------------------------------------------------------------
//Methods related to frame that contains page body
Meta4.frameBody = function () {
    //private vars
    var bEss = true,
        bEventTakenCareOf = false,
        bExternalSystem = false,
        iContentScrollHeigth = 0,
        iContentScrollWidth = 0,
        oDivWait,
        oFrame,
        sCurrentPathname,
        sDefaultHeight = '600px',
        sDefaultHeightEs,
        sParamEsMinHeight = 'M4_MIN_HEIGHT',
        sParamEss = 'sgcoPortalEss',
        sParamUrl = 'sgcoPortalDestinationUrl',
        sUrlExternalSystem = '/servlet/CheckSecurity/JSP/sse_generico/plco_external_system.jsp',
        sUrlGenericUpdate = '/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp',
        sUrlLogin = '/sse_generico/generico_login.jsp',
        sUrlPortalEss = '/servlet/CheckSecurity/JSP/sse_generico/ssco_portal.jsp',
        sUrlPortalMss = '/servlet/CheckSecurity/JSP/mss_generico/smco_portal.jsp',
        sUrlRestoreRequest = '/servlet/CheckSecurity/JSP/sse_generico/sgco_restore_request.jsp',
        sUrlStoreRequest = '/servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp';
    //private methods
    function setLoadMode(sWhere) {
        var oFx;

        oFx = new Fx.Morph(oFrame, {duration: 100}).start({'opacity': 0.1}).chain(function() {if (sWhere) {Meta4.frameBody.updateSrc(sWhere)}});                        //hide frame
        oDivWait.removeClass('displayNone');                                                        //show spinner
        bEventTakenCareOf = true;
        Meta4.header.beforeLoad();                                                                  //inform header about upcomming load
    }
    function reverseLoadMode() {
        oDivWait.addClass('scoSpinnerRev');                                                         //show reverse spinner
        bEventTakenCareOf = true;
    }
    function resetLoadMode() {
        var oFx;

        oDivWait.addClass('displayNone');                                                           //hide spinner
        oDivWait.removeClass('scoSpinnerRev');                                                      //remove reverse spinner
        Meta4.frameBody.resize();
        oFx = new Fx.Morph(oFrame, {duration: 100}).start({'opacity': 1}).chain(function() {Meta4.header.afterLoad()});                          //show frame
                                                                           //inform header about finished load
    }
    function formSubmit(ai_oForm) {
        var bSubmitForm = true,
            oForm,
            sUrl,
            sPathName;

        if (!ai_oForm.target) {                                                                     //do not intercept submit if target is true (result not displayed in entire current window - other window or frame inside window)
            sUrl = (ai_oForm.action);
            sPathName = sUrl.toLowerCase().substring(0, sUrl.toLowerCase().indexOf('.jsp')) + '.jsp';
            setLoadMode();
            if ((oFrame.contentWindow.location.pathname).toLowerCase() !== sPathName) {             //do not intercept submit if forms action same as current windows location (likely to be a filter)
                oForm = new Element(ai_oForm);                                                      //duplicate form
                /* inject fails in IE7, therfore the parameters are added to the url and passed in the oForm.send()
                oInput = new Element('input', {                                                     //Parameter with action of original form
                    id: sParamEss,
                    name: sParamEss,
                    type: 'hidden',
                    value: bEss
                }).inject(oForm);
                oInput = new Element('input', {                                                     //parameter with action of original form
                    id: sParamUrl,
                    name: sParamUrl,
                    type: 'hidden',
                    value: sUrl
                }).inject(oForm);
                */
                oForm.set('send', {                                                                 //add send
                    url: sUrlStoreRequest,
                    async: false,
                    onComplete: function (response) { 
                        var oResponse = JSON.decode(response, true);
                            //- '1' : item found in current tree (get path and update accordion)
                            //- '-1': item found but in oposite tree (change from ESS to MSS or vice versa)
                            //- ''  : item not found (can't do much in this case, continue w/o intervention)
                            //- '0' : error
                        if (oResponse) {
                            switch (oResponse.result) { 
                                case '1':                                                           //item found in current tree (get path and update accordion)
                                    Meta4.menu.activateAccordion(oResponse.path);
                                    break;
                                case '-1':                                                          //item found but in oposite tree (change from ESS to MSS or vice versa)
                                    Meta4.portal.changePortal();
                                    bSubmitForm = false;
                                    break;
                                case '0':                                                           //error
                                    //oResponse.error;
                                    break;
                                default:                                                            //item not found (can't do much in this case, continue w/o intervention)
                            }
                        }
                    }
                });
                oForm.send(sUrlStoreRequest + '?' + sParamEss + '=' + bEss + '&' + sParamUrl + '=' + encodeURIComponent(sUrl));                                           //send form (syncronous)
            }
        }
        return bSubmitForm;
    }
    return {
        //public methods
        init: function (ai_oDivWait, ai_oFrame) {
            oDivWait = ai_oDivWait;
            oFrame = ai_oFrame;
            oFrame.addEvent('cancelAjax', function() {
              var oDocument = (this.contentDocument) ? this.contentDocument : this.contentWindow.document;
              try {
                oDocument.fireEvent('cancelAjax');
              } catch(e) {}
            });
            bEss = Meta4.portal.getEss();
        },
        setLoadMode: function (sWhere) {
            setLoadMode(sWhere);
        },
        resetLoadMode: function () {
            resetLoadMode();
        },
        getLocation: function () {   //Similar to getSrc but returns the location of the content window which is more reliable (in case of back or forward).
            var sLocation = null;
            try {
                sLocation = oFrame.contentWindow.location.pathname + oFrame.contentWindow.location.search;
            } catch (e) {}
            return sLocation;
        },
        getTitle: function () {
            return oFrame.contentWindow.document.title;
        },
        getSrc: function () {
            return oFrame.src || null;
        },
        updateSrc: function (ai_sUrl) {
            if (ai_sUrl) {
                oFrame.src = ai_sUrl;
            }
        },
        afterLoad: function () {
            var aoChildNodes,
                aoForms,
                bKeepGoing,
                i,
        oParameters,
                oResponse,
                sLocation = this.getLocation();

            try {
                oFrame.contentWindow.bNullHeight = (oFrame.contentWindow.document.body.scrollHeight + oFrame.contentWindow.document.body.offsetHeight - oFrame.contentWindow.document.body.clientHeight == 0);
                oFrame.contentWindow.bLoaded = true;
                if (sLocation === sUrlPortalEss || sLocation === sUrlPortalMss) {                   //if frame contains portal
                    this.setLoadMode(oFrame.contentWindow.m4frameContent);                          //identify content of portal (which is inside frame) and navigate frame to it
                } else if (sLocation === sUrlLogin) {                                               //if frame contains login
                    Meta4.portal.showLogin();                                                       //navigate to login
                } else if (sLocation !== sUrlRestoreRequest) {                                      //ignore restore request page because diverts to another page immediately
                    window.m4frameContent = sLocation;                                              //assign current content to attribute that is accessible from outside the frame
                    oResponse = Meta4.menu.validateUrl(sLocation);
                        //- '1' : item found in current tree (get path and update accordion)
                        //- '-1': item found but in oposite tree (change from ESS to MSS or vice versa)
                        //- ''  : item not found (can't do much in this case, continue w/o intervention)
                        //- '0' : error
                    if (oResponse) {
                        switch (oResponse.result) { 
                            case '1':                                                               //item found in current tree (get path and update accordion)
                                Meta4.menu.activateAccordion(oResponse.path);
                                break;
                            case '-1':                                                              //item found but in oposite tree (change from ESS to MSS or vice versa)
                                Meta4.portal.changePortal();
                                break;
                            case '0':                                                               //error
                                //oResponse.error;
                                break;
                            default:                                                                //item not found (can't do much in this case, continue w/o intervention)
                        }
                    }
                    try {
                        bEventTakenCareOf = false;
                        sCurrentPathname = oFrame.contentWindow.location.pathname;
                        bExternalSystem = (sCurrentPathname === sUrlExternalSystem);
                        if (bExternalSystem) {                                          //Handle calls to external system
                            sDefaultHeightEs = undefined;
                            if (oFrame.contentWindow.location.search) {               //Split paramter string
                                oParameters = oFrame.contentWindow.location.search.split('&').filter(function(item, index) {    //filter height parameter from rest
                                    var bResult = false;
                                    if (item.indexOf(sParamEsMinHeight) !== -1){
                                        bResult = true;
                                    }
                                    return (bResult);
                                });
                                if (oParameters.length > 0) {
                                    oParameters = oParameters[0].split('=').filter(function(item, index) {    //filter numeric value
                                        return (item == +item);                                     //only return numeric value
                                     });
                                }
                                if (oParameters.length > 0) {
                                    sDefaultHeightEs = oParameters[0] + 'px';                       //identify height for iframe
                                }
                            }
                        }
                        if (oFrame.contentWindow.document) {
                            //Add event handler to catch click event of A and IMG tags that occur inside frame (image tags inside a tags only)
                            oFrame.contentWindow.document.addEvent('click', function (ev) {         //or addEventListener for Safari/Firefor 3
                                var oEventElement,
                                    sUrl;
                                if (ev.type === 'click' && ev.target) {
                                    if (ev.target.tagName === 'IMG') {                              //image does not contain location, use parent element instead
                                        oEventElement = ev.target.parentNode;                       //use parent element to get location
                                    } else {
                                        oEventElement = ev.target;
                                    }
                                    if ((oEventElement) && (oEventElement.tagName === 'A')) {
                                        if (oEventElement.protocol === 'mailto:') {                 //ignore "mailto:"
                                            bEventTakenCareOf = true;
                                        } else if (oEventElement.protocol === 'javascript:') {      //ignore "javascript:"
                                            bEventTakenCareOf = true;
                                        } else {
                                            if (oEventElement.pathname !== undefined) {             //make sure attribute exists before validating it
                                                bEventTakenCareOf = true;
                                                //Validate pathname, must contain .jsp to be valid
                                                //Note: URL w/o .jsp: A-tag with empty href but onclick
                                                if (oEventElement.pathname.toLowerCase().indexOf('.jsp') !== -1) {
                                                    sUrl = '';
                                                    if (Browser.ie) {sUrl = '/';}
                                                    sUrl = sUrl + oEventElement.pathname + oEventElement.search;
                                                    setLoadMode();
                                                    //Validate url (identify tree and path within accordion)
                                                    oResponse = Meta4.menu.validateUrl(sUrl);
                                                        //- '1' : item found in current tree (get path and update accordion)
                                                        //- '-1': item found but in oposite tree (change from ESS to MSS or vice versa)
                                                        //- ''  : item not found (can't do much in this case, continue w/o intervention)
                                                        //- '0' : error
                                                    if (oResponse) {
                                                        switch (oResponse.result) { 
                                                            case '1':                               //item found in current tree (get path and update accordion)
                                                                Meta4.menu.activateAccordion(oResponse.path);
                                                                break;
                                                            case '-1':                              //item found but in oposite tree (change from ESS to MSS or vice versa)
                                                                ev.preventDefault();                //cancel further processing of event
                                                                Meta4.portal.changePortal();
                                                                break;
                                                            case '0':                               //error
                                                                //oResponse.error;
                                                                break;
                                                            default:                                //item not found (can't do much in this case, continue w/o intervention)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            });
                            //Add event handler to catch unload event of window inside frame
                            oFrame.contentWindow.addEvent('unload', function (ev) {                 //or addEventListener for Safari/Firefor 3
                                var oLocation,
                                    sUrl;
                                if (!bEventTakenCareOf) {                                           //only enter if event unprocessed
                                    oLocation = oFrame.contentWindow.location;
                                    if (oLocation.protocol === 'mailto:') {
                                        //ignore "mailto:"
                                    } else if (oLocation.protocol === 'javascript:') {
                                        //ignore "javascript:"
                                    } else {
                                        switch (oLocation.pathname) {
                                            case sUrlGenericUpdate:                                 //generic update page
                                                break;                                              //=> ignore
                                            case sCurrentPathname:                                  //currenly loaded page
                                                setLoadMode();
                                                break;                                              //no validation required because no change
                                            default:
                                                //Validate pathname, must contain .jsp to be valid
                                                //Note: URL w/o .jsp: A-tag with empty href but onclick
                                                if (oLocation.pathname.toLowerCase().indexOf('.jsp') !== -1) {
                                                    sUrl = '';
                                                    if (Browser.ie) {sUrl = '/';}
                                                    sUrl = sUrl + oLocation.pathname + oLocation.search;
                                                    setLoadMode();
                                                    //Validate url (identify tree and path within accordion)
                                                    oResponse = Meta4.menu.validateUrl(sUrl);
                                                        //- '1' : item found in current tree (get path and update accordion)
                                                        //- '-1': item found but in oposite tree (change from ESS to MSS or vice versa)
                                                        //- ''  : item not found (can't do much in this case, continue w/o intervention)
                                                        //- '0' : error
                                                    if (oResponse) {
                                                        switch (oResponse.result) { 
                                                            case '1':                               //item found in current tree (get path and update accordion)
                                                                Meta4.menu.activateAccordion(oResponse.path);
                                                                break;
                                                            case '-1':                              //item found but in oposite tree (change from ESS to MSS or vice versa)
                                                                Meta4.portal.changePortal();        //note: change portal "takes care of event" so there shouldn't be a loop
                                                                break;
                                                            case '0':                               //error
                                                                //oResponse.error;
                                                                break;
                                                            default:                                //item not found (can't do much in this case, continue w/o intervention)
                                                        }
                                                    }
                                                }
                                        }
                                    }
                                }
                            });
                            //Add event handler to catch resize event of frame content (same pages change their size dynamically)
                            oFrame.contentWindow.addEvent('resize', function (ev) {                 //or addEventListener for Safari/Firefor 3
                                Meta4.frameBody.resize();
                            });
                            //Override submit method of forms
                            aoForms = oFrame.contentWindow.document.forms;                          //identify forms inside frame
                            if (aoForms.length) {
                                //Override submit method of each form tag inside frame to control navigation
                                for (i = 0; i < aoForms.length; i++) {
                                    //Process all forms because action might be modified in run-time;
                                    //otherwise forms could be excluded, e.g. forms with action = current location.
                                    if (aoForms[i].submit.tagname === undefined) {                  //make sure sumbit is not overridden by tag
                                        aoForms[i].nativeSubmit = aoForms[i].submit;                //restore native method
                                        aoForms[i].submit = function () {                           //override native method
                                            var bResult = formSubmit(this);
                                            bEventTakenCareOf = true;
                                            if (bResult) {  
                                                this.nativeSubmit();
                                            }
                                        };
                                    }
                                }
                            }
/* Not required unless IFrame has "name" attribute assigned!!!
                            //Override open method of window
                            //Note: window.open does not open a new window if the new window has the same name as the current window (name must be different or "").
                            //      If the window.open in invoked from inside the frame, the window inherits the name attribute of the iframe and all window open that use this.name as name for the new window fail.
                            //      Uncomment this code if you have to assign a name attribute to the iframe!!!
                            oWindow = oFrame.contentWindow;
                            if (oWindow.open) {
                                oWindow.nativeOpen = oWindow.open;                                      //restore native method
                                oWindow.open = function (ai_sUrl, ai_sName, ai_oFeatures, ai_sReplace) { //override native method
                                    if (ai_sName === oWindow.name) {                                    //if name of new window is identical to current window name
                                        ai_sName += "X";                                                //add an 'X' to the name
                                    }
                                    //Note: change to add all arguments passed dynamically (arguments.length)
                                    this.nativeOpen(ai_sUrl, ai_sName, ai_oFeatures, ai_sReplace);      //call native open to open window
                                }
                            }
*/
                            //Reposition DIVs
                            //Sets top position to 0 of all divs at root level that have position absolute or relative and are before any other element in the body (except scripts).
                            //E.g. a DIV after a TABLE is not repositioned.
                            //To avoid this correction add attribute m4top="nochange"
                            if (oFrame.contentWindow.document.body) {
                                aoChildNodes = oFrame.contentWindow.document.body.childNodes;
                                bKeepGoing = true;
                                for (i = 0; i < aoChildNodes.length && bKeepGoing; i++) {
                                    if (aoChildNodes[i].tagName !== 'SCRIPT' && aoChildNodes[i].tagName !== '!') {  //ignore script and comment tags
                                        if (aoChildNodes[i].tagName !== 'DIV') {
                                            bKeepGoing = false;                                     //stop loop
                                        } else {
                                            if (!(aoChildNodes[i].m4top && aoChildNodes[i].m4top.toLowerCase() === 'nochange')) {   //ignore div if indicated
                                                if (aoChildNodes[i].getStyle('position') !== 'static' && aoChildNodes[i].getStyle('top').toInt() !== 0) {   //ignore if position = static and top = 0
                                                    aoChildNodes[i].setStyle('top', 0);             //correct top position to 0
                                                    if (aoChildNodes[i].getStyle('position') === 'absolute') {
                                                        aoChildNodes[i].setStyle('position', 'relative');
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } catch (e) {}
                    resetLoadMode();                                                                //hide spinner and show frame
                } else {
                    reverseLoadMode();                                                              //show reverse spinner
                }
            } catch (e) {
                //Cross domain problem, most likely caused by error in functional page
                Meta4.frameBody.resize();
                resetLoadMode();                                                                    //hide spinner and show frame
            }
        },
        resize: function () {                                                                       //resize frame depending on content
            var bWindowSizeChanged = Meta4.portal.offsetChanged(),
                bContentHeighChanged = false,
                bContentWidthChanged = false,
                iDiffWidth = 0,
                iNewHeight = 0,
                iNewWidth = 0,
                i = 0,
                iMaxHeight = 0,
                iMaxWidth = 0,
                oContentBody;

            try
            {
                oContentBody = oFrame.contentWindow.document.body;
                if (oFrame.contentWindow.bNullHeight) {
                  if (bWindowSizeChanged || oFrame.contentWindow.bLoaded) {
                    for (i=0;i<oContentBody.childNodes.length -1;i++) {
                      if (oContentBody.childNodes(i).getStyle('display') != 'none') {
                        iNewHeight = oContentBody.childNodes(i).offsetTop + oContentBody.childNodes(i).scrollHeight + oContentBody.childNodes(i).offsetHeight - oContentBody.childNodes(i).clientHeight;
                        if (iMaxHeight < iNewHeight) {iMaxHeight = iNewHeight;}
                        iNewWidth = oContentBody.childNodes(i).offsetLeft + oContentBody.childNodes(i).scrollWidth + oContentBody.childNodes(i).offsetWidth - oContentBody.childNodes(i).clientWidth;
                        if (iMaxWidth < iNewWidth) {iMaxWidth = iNewWidth;}
                      }
                    }
                    iMaxWidth += oFrame.offsetLeft - (+oContentBody.leftMargin);
                    oFrame.setStyle('height', iMaxHeight);
                    oFrame.setStyle('width', '100%');
                    Meta4.portal.setMinWidth(iMaxWidth);
                    oFrame.contentWindow.bLoaded = false;
                  }
                } else {
                  var objContentScroll = (oFrame.contentDocument) ? oFrame.contentDocument : oFrame.contentWindow.document;             //choose object to get scrollHeigth: use 'contentDocument' to modern navigators and 'contentWindow' to the rest
                  var curScrollHeight = Math.min(objContentScroll.documentElement.scrollHeight, objContentScroll.body.scrollHeight);    //get min between scrollHeight of documentElement (valid to 'trident' & 'gecko' based engine browsers) and body.scrollHeight (valid to 'webkit' based engine browsers)
                  if (iContentScrollHeigth !== curScrollHeight) {                                   //identify if content heigth different
                      iContentScrollHeigth = curScrollHeight;
                      bContentHeighChanged = true;
                  }
                  if (iContentScrollWidth !== oContentBody.scrollWidth) {                           //identify if content width different
                      iContentScrollWidth = oContentBody.scrollWidth;
                      bContentWidthChanged = true;
                  }
                  if (bWindowSizeChanged || bContentWidthChanged) {                                 //update width if window size or content width different
                      Meta4.portal.setMaxWidth();                                                   //set portal size to 100% to have a base line
                      iDiffWidth = oContentBody.scrollWidth - oContentBody.clientWidth;             //if positive means content does not fit
                      if (iDiffWidth > 0) {                                                         //content does not fit (if it does not fit by 1px, size already updated (marker to avoid reentrant code))
                          iNewWidth = oFrame.offsetLeft;
                          iNewWidth += oContentBody.scrollWidth + oContentBody.offsetWidth - oContentBody.clientWidth;
                          iNewWidth += oContentBody.offsetLeft;
                          iNewWidth -= 1;                                                           //remove 1 to make sure difference exists for next iteration (otherwise it only works each second time)
                          Meta4.portal.setMinWidth(iNewWidth);
                      }
                  }
                  if (bWindowSizeChanged || bContentHeighChanged || bContentWidthChanged) {         //update heigh if window or content size different (change in width likely to imply change in heigh)
                      oContentBody.setStyle('marginBottom', 0);
                      oContentBody.setStyle('marginLeft', 0);
                      oContentBody.setStyle('marginRight', 0);
                      curScrollHeight = (parseInt(oContentBody.getStyle('minHeight').toInt()) > curScrollHeight) ? parseInt(oContentBody.getStyle('minHeight').toInt()) : curScrollHeight;
                      oFrame.setStyle('height', curScrollHeight + 15);
                  }
                }
            }
            catch (e) //an error is raised if the frame domain != its container's domain
            {
                if (bExternalSystem && sDefaultHeightEs) {
                    oFrame.setStyle('height', sDefaultHeightEs);                                    //height defined by parameter of link to external system
                } else {
                    oFrame.setStyle('height', sDefaultHeight);                                      //default height
                }
            }
        },
        refresh: function () {
            if (oFrame.contentWindow) {
                this.setLoadMode();
        try
        {
                  oFrame.contentWindow.location.reload(true);
        } catch(e){}
            }
        },
        setEventTakenCareOf: function () {
            try {
              oFrame.fireEvent('cancelAjax');
            } catch(e) {}
            bEventTakenCareOf = true;
        }
     };
} ();                                                                                               //assign result of function

//-------------------------------------------------------------------------------------------------
//Methods related to frame that contains page body
Meta4.ajax = function () {
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
            onSuccess: getResponse
        });
    }
    function createRequestJSON(ai_bAsync) {
        return new Request.JSON({
            link: 'cancel',
            async: ai_bAsync,
            onSuccess: getResponseJSON
        });
    }
    function send(ai_bJSON, ai_bAsync, ai_sUrl, ai_saParams) {
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
            if (!oRequestSyncJSON) {
                oRequestSyncJSON = createRequestJSON(ai_bAsync);                                    //create request if required (only first time)
            }
            oRequestSyncJSON.send({
                url: ai_sUrl,
                data: sParams
            });
        } else {
            if (!oRequestSync) {
                oRequestSync = createRequest(ai_bAsync);                                            //create request if required (only first time)
            }
            oRequestSync.send({
                url: ai_sUrl,
                data: sParams
            });
        }
    }
    return {
        //public methods
        sendSync: function (ai_sUrl, ai_saParams) {
            //JSON, async, url, pramters
            send(false, false, ai_sUrl, ai_saParams);
        },
        sendAsync: function (ai_sUrl, ai_saParams) {
            //JSON, async, url, pramters
            send(false, true, ai_sUrl, ai_saParams);
        },
        getResponse: function () {
            return sResponse;
        },
        sendSyncJSON: function (ai_sUrl, ai_saParams) {
            //JSON, async, url, pramters
            send(true, false, ai_sUrl, ai_saParams);
        },
        sendAsyncJSON: function (ai_sUrl, ai_saParams) {
            //JSON, async, url, pramters
            send(true, true, ai_sUrl, ai_saParams);
        },
        getResponseJSON: function () {
            return oResponseJSON;
        }
    };
} ();                                                                                               //assign result of function

//-------------------------------------------------------------------------------------------------
Meta4.IE6 = (Browser.ie6);                   //detect navigator version for IE

//-------------------------------------------------------------------------------------------------
//Generic methods invoked upon load of .js file
window.addEvent('domready', function () {
    var oBody = $('allbody');
    if (oBody) {
        //Add event onkeydown handler to body to capture F5 key (refresh)
        oBody.addEvents({
          'keydown': function (ev) {
            if (ev.key == 'f5' && (!ev.control)) {                                                  //catch F5 key w/o Ctrl key
                ev.preventDefault();                                                                //prevent event from bubbeling
                Meta4.frameBody.refresh();                                                          //refresh content of IFrame
             }
           },
           'click': function(ev) {
             Meta4.menu.interceptEvent(ev);
           }
        });
    }

    $('showMenu').addEvent(
      'click', function(ev) {
        Meta4.portal.toggleMenu(ev);
      }
    );

    $('hideMenu').addEvent(
      'click', function(ev) {
        Meta4.portal.toggleMenu(ev);
      }
    );

    //Add event handler to catch unload event of window
    window.addEvent('unload', function (ev) {
        Meta4.frameBody.setEventTakenCareOf();                                                      //unload of portal implies unload of frame, no additional event handling required
    });
    
    //Add event manually to these objects to controll the counter of clicks
    if ($('idChangePortal')) {
      $('idChangePortal').addEvent(
        'click', function(ev) {
          ev.stopPropagation();
          ev.preventDefault();
          Meta4.header.changePortal();
        }
      );
    };

    $('idHome').addEvent(
      'click', function(ev) {
        ev.stopPropagation(); 
        ev.preventDefault();
        Meta4.header.home();
      }
    );

    /*$('idWhoIsWho').addEvent(
      'click', function(ev) {
        ev.stopPropagation(); 
        ev.preventDefault();
        Meta4.header.whoIsWho();
      }
    );*/


    $('headerButtonAddFavourite').addEvent(
      'click', function(ev) {
        ev.stopPropagation(); 
        ev.preventDefault();
        Meta4.header.addFavourite();
      }
    );

    if ($('idLogout')) {
      $('idLogout').addEvent(
        'click', function(ev) {
          ev.stopPropagation(); 
          ev.preventDefault();
          Meta4.header.logout()
        }
      );
    }

/*
    //Add event handler to catch beforeunload event of window (not implemented in all browsers)
    if (typeof(window.onbeforeunload)) {
        window.attachEvent('onbeforeunload', function (event) {
            if (!Meta4.menu.getNavigate()) {
                event.returnValue = 'All unsafed data will be lost!';
            }
        });
    }
*/

});

function isIE6() {
  if (Meta4.IE6) {
    var oColimgs = $$('img');
    var i = 0;
    for (i=0; i<oColimgs.length; i++) {
      if (oColimgs[i].src && oColimgs[i].src.substring(oColimgs[i].src.length-3)=='png') {oColimgs[i].src = oColimgs[i].src.substring(0,oColimgs[i].src.length-3) + 'gif'};
      if (oColimgs[i].m4SrcHot && oColimgs[i].m4SrcHot.substring(oColimgs[i].m4SrcHot.length-3)=='png') {oColimgs[i].m4SrcHot = oColimgs[i].m4SrcHot.substring(0,oColimgs[i].m4SrcHot.length-3) + 'gif'};
      if (oColimgs[i].m4SrcNormal && oColimgs[i].m4SrcNormal.substring(oColimgs[i].m4SrcNormal.length-3)=='png') {oColimgs[i].m4SrcNormal = oColimgs[i].m4SrcNormal.substring(0,oColimgs[i].m4SrcNormal.length-3) + 'gif'};
    }
  }
} 