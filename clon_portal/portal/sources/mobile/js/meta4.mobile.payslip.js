/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: meta4.mobile.payslip.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    jQuery("a[data-icon='m4home']").click(function() {
        document.location.href = '/mobile/m4home.html';
    });
    document.addEventListener("backbutton", function(e) {
        e.preventDefault();
        document.location.href = '/mobile/m4home.html';
    }, false);

    meta4.mobile.initSatusBar('#196988');
}
var meta4 = meta4 || {};
meta4.mobile = meta4.mobile || {};
meta4.mobile.payslip = function() 
{
    var _iframe;
    var _channel;
    var _node;

    // on error
    function noPayslips()
    {
        var emptyPayslipList = meta4.ui.translate.getTranslate('_emptyPayslipList');
            jQuery('.content-primary').text(emptyPayslipList);
            jQuery('.m4-status-bar').css('display', 'none');
            var idList1 = jQuery("#contentRoot");
            idList1.empty();
            var emptyPayslipDiv = jQuery('<div id="emptyPayslipDiv">');
            var emptyPayslipImg = jQuery('<img id="emptyPayslipImg" src="/mobile/icons/payslip-empty.svg">');
            var emptyPayslipP = jQuery('<p id="emptyPayslipP">');
            emptyPayslipP.text(emptyPayslipList);
            emptyPayslipDiv.append(emptyPayslipImg, emptyPayslipP);
            idList1.append(emptyPayslipDiv);
    }


    // fill the list page
    function _showPays(channel, nodename, isLocal, idSystem) {
        _channel = channel;
        _node = _channel.getNode(nodename);

        // calculate the prefix 
        var langcode = meta4.ui.language.getPrefixLanguage().substr(1);
      
        jQuery("#list_payslip_page").css('display', 'block');
        var ul = jQuery("#listPayslip"); // container list
        for (var i = 0; i < _node.count(); i++) {
            _node.moveTo(i);
            var blobfile = null;
            var date = _node.getValue('DATE');
            var amount = _node.getValue('AMOUNT');
            var id_m4type = _node.getValue('_ID_M4_TYPE');
            var id_currency = _node.getValue('_ID_CURRENCY');
            var description = _node.getValue('DESCRIPTION');
    
            var li = jQuery('<li class="payslipLi"></li>');
            li.data('m4IndexData', i); 
            // payslip Title
            var titleDiv = jQuery('<div></div>');
            titleDiv.attr('class', 'titleDiv');
            var detailDiv = jQuery('<div></div>');
            detailDiv.attr('class', 'detailDiv');
            titleDiv.append(detailDiv);
            li.append(titleDiv);
            var pDate = jQuery('<p></p>');
            pDate.attr('class', 'pDate');
            
            try 
            {
                var formattedDate = new Date(date);
                options = {year: 'numeric', month: 'short', day: 'numeric'};                       
                var fmt = new Intl.DateTimeFormat(langcode, options);
                pDate.text(fmt.format(formattedDate));
            } catch (e) {
                pDate.text(date.toLocaleDateString()); 
                console.log("Exception" + e);
            }

            detailDiv.append(pDate);
            if (description != null) {
                var h5 = jQuery('<h5></h5>');
                h5.text(description);
                titleDiv.append(h5);
            }
            if (amount != null) {
                var amountInfo = amount.toLocaleString(); // tofixed
                if (id_m4type == 8 && id_currency != null) {
                    amountInfo = amountInfo + ' ' + id_currency;
                }
                var pAmount = jQuery('<p></p>');
                pAmount.attr('class', 'pAmount');
                pAmount.text(amountInfo);
                titleDiv.append(pAmount);
            }
            // payslip arrow
            var listArrow = jQuery('<img></img>');
            listArrow.attr('src', '/mobile/icons/goToArrow.svg');
            listArrow.attr('class', 'listArrow');
            li.append(listArrow);
            li[0].onclick = function(event) {
                var methodname = 'LOAD_DOC_CONTENT';
                var index = jQuery(event.currentTarget).data('m4IndexData');               
                _node.moveTo(index); 
               
                function onMethodFailure(request) {
                    var errorMessage = meta4.ui.translate.getTranslate('_methodError');
                    console.log("Method cannot be executed: " + request.getErrorCode());
                    meta4.ui.log.showErrors(request);
                }

                function onMethodSuccess(request) {
                    blobfile = _node.getValue("DOCUMENT");
                    if (blobfile != null && blobfile.getExtension().toLowerCase() === 'pdf') {
                        meta4.mobile.spinner.show();
                        if (!_iframe) {
                            _iframe = jQuery('<iframe></iframe>');
                            _iframe.attr('class', 'pdf');
                            _iframe.attr('webkitallowfullscreen', '');
                            _iframe.attr('mozallowfullscreen', '');
                            _iframe.attr('allowfullscreen', '');
                            _iframe.attr('frameborder', 'no');
                            _iframe.attr('style', 'position: absolute; top: 52px; height: 100%; width: 100%; border: none');
                            jQuery("#payslipPage").append(_iframe);
                        }

                        // show the document
                        var waitToLoadJsEvents = 1;
                        if (!m4jseventsInitialized) {
                            console.log("m4jsevents loaded");
                            waitToLoadJsEvents = 200;
                        }
                        setTimeout(function() {
                            // from tech distribution
                            var viewerRoot = "/library/3rd-party"; 
                            var systemId = _node.getObject().getExternalSystemId(); 
                            if (systemId != null)
                            {
                                var baseExternalURL = meta4.M4Executor.getExternalSystemManager().getEntryById(systemId).getUrl();
                                viewerRoot = baseExternalURL + "/library/3rd-party";
                            }
                 
                            var frameToView = viewerRoot + "/pdf/web/viewer.html?file=" + encodeURIComponent(blobfile.getURI()) + "#page=0?mobile=1";
                            _iframe.attr('src', frameToView);
                           
                            // show doc viewer page and hide list page
                            jQuery('#list_payslip_page').css('display', 'none');
                            jQuery('#detail_payslip_page').css('display', 'block');

                            meta4.mobile.spinner.hide(); // el del pdf

                        }, waitToLoadJsEvents);
                   
                    }
                    else
                    {             
                        // the document is null or not a pdf          
                        console.log("Payslip not available or not in a valid format");
                        var errorMessage = meta4.ui.translate.getTranslate('_methodError');
                        meta4.mobile.toast.show(errorMessage);                     
                    }
                }

                var ref = isLocal ? meta4 : meta4.external[idSystem];
                var executor = new ref.M4Executor();
                var request = new ref.M4Request(channel, nodename, methodname, null);
                executor.execute(request, onMethodSuccess, onMethodFailure);
            };
            // put into a "li"
            jQuery(ul).append(li);
            
            jQuery("#emptyPayslipDiv").css('display', 'none');

        }
        if (_node.count() == 0) {
            noPayslips(); 
        } else {
            ul.listview("refresh");
        }
        meta4.log.showLog();
        meta4.mobile.spinner.hide(); 
    }
    //------------------------------------------------------------------------------------------------------------
    //events
    jQuery(document).on('pagebeforeshow', '#list_payslip_page', function(event, ui) {
        jQuery("#listPayslip").empty();
        if (_node) {
            _showPays(_channel, nodename, isLocal, idSystem);
        }
    });
    //------------------------------------------------------------------------------------------------------------
    //public methods
    return {
        showPays: function(channel, nodename, isLocal, idSystem) {
            _showPays(channel, nodename, isLocal, idSystem);
        }
    };
}();

function initPage() {
    'use strict';
    if (meta4.mobile.deviceFrom() == 'android' || meta4.mobile.deviceFrom() == 'ios') {
        meta4.mobile.loadCordova();
    }
    // register the double authentication callback
    if (meta4.M4Executor != null) {
        meta4.M4Executor.setAuthPasswordRequestCallback(meta4.mobile.levelTwoPwd.openRedirect);
    }

    meta4.mobile.spinner.show();

    function initHTMLElements(paramMenuOption) {
        if (paramMenuOption) {
            var element = document.getElementById("back-detail");
            if (element) {
                element.href = "m4payslip.html?id=" + paramMenuOption;
            }
        }
    }

    function payslipResolution() {
        var objectname = 'SRTC_SYSTEM_RESOLUTION';
        var nodename = 'SRTC_SYSTEM_RESOLUTION';
        var methodname = 'IS_LOCAL';
        var menuoption = 'SSCO_MOBILE_PAYSLIP';
        
        // enhancement 0327981 
        var paramMenuOption = meta4.mobile.getURLParameter('id');
        if (paramMenuOption != null) menuoption = paramMenuOption; 

        initHTMLElements(paramMenuOption);
        
        var object;

        function onMetadataFailure(request) {
            console.log('Meta4Object ' + objectname + ' metadata load error with code: ' + request.getErrorCode());
            meta4.mobile.spinner.hide();
            meta4.ui.log.showErrors(request);
        }

        function onMetadataSuccess(request) {
            function onMethodFailure(request) {
                meta4.ui.log.showErrors(request);
                console.log("Method cannot be executed with code: " + request.getErrorCode());
                meta4.mobile.spinner.hide();
            }

            function onMethodSuccess(request) {
                var intIsLocal = request.getResult();
                var isLocal = (intIsLocal == 1);
                var idSystem = "external";
                // uncomment to make remote 
                // isLocal = false; 
                loadPayslips(isLocal, idSystem);

            }
            object = new meta4.M4Object(objectname, objectname + meta4.ui.language.getCodeLanguage());
            var args = new Array();
            args.push(menuoption);
            var request = new meta4.M4Request(object, nodename, methodname, args);
            executor.execute(request, onMethodSuccess, onMethodFailure);
        }

        var executor = new meta4.M4Executor();
        executor.loadMetadata([objectname], onMetadataSuccess, onMetadataFailure);
    }


    function loadPayslips(isLocal, idSystem) {
        var objectname = 'SRTC_MOBILE_PAYSLIP';
        var nodename = 'SRTC_MOBILE_DOCUMENTS';
        var methodname = 'LOAD_DOC_INFO';
        var object;

        function onExternalSystemLoadFailure(request) {
            var errorCode = request.getErrorCode(); 
            if (errorCode == 401)
            {
                var errorMessage = meta4.ui.translate.getTranslate('_metadataError'); // all payslips failed
                meta4.mobile.toast.show(errorMessage);   
                console.log('Authentication failed in external system: ');
            }
            else
            {
                meta4.ui.log.showErrors(request);
            }
            meta4.mobile.spinner.hide();            
        }

        function onExternalSystemLoadSuccess(idSystem) {
            var executor = new meta4.external[idSystem].M4Executor();
            executor.loadMetadata([objectname], onMetadataSuccess, onMetadataFailure);
        }

        function onMetadataFailure(request) {
            meta4.mobile.spinner.hide();
            meta4.ui.log.showErrors(request);
            console.log('Meta4Object ' + objectname + ' metadata load error: ' + request.getErrorCode());
        }

        function onMetadataSuccess(request) {
            function onMethodFailure(request) {
                var errorMessage = meta4.ui.translate.getTranslate('_methodError');
                meta4.mobile.spinner.hide();
                meta4.ui.log.showErrors(request);
                console.log("Method cannot be executed: " + request.getErrorCode());
            }

            function onMethodSuccess(request) {
                meta4.mobile.payslip.showPays(object, nodename, isLocal, idSystem);
            }

            var ref = isLocal ? meta4 : meta4.external[idSystem];
            var executor = new ref.M4Executor();
            object = new ref.M4Object(objectname, objectname + meta4.ui.language.getCodeLanguage());
            var request = new ref.M4Request(object, nodename, methodname, null);
            executor.execute(request, onMethodSuccess, onMethodFailure);
        }
        if (isLocal) 
        {
            var executor = new meta4.M4Executor();
            executor.loadMetadata([objectname], onMetadataSuccess, onMetadataFailure);  }
        else 
        {
             meta4.M4ExternalSystemManager.initExternalSystem(idSystem, onExternalSystemLoadSuccess, onExternalSystemLoadFailure);          
        }
    }
    payslipResolution();
}
jQuery(document).bind('meta4Ready', initPage);