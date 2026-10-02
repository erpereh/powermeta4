/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: meta4.mobile.news.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */


document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
{
    jQuery("a[data-icon='m4home']" ).click(
        function() {    
            document.location.href = '/mobile/m4home.html';
    });

    document.addEventListener("backbutton", function(e){
            e.preventDefault();
            document.location.href = '/mobile/m4home.html';
    }, false); 
    
    meta4.mobile.initSatusBar('#196988');
} 
 
var meta4 = meta4 || {};
meta4.mobile = meta4.mobile || {};
meta4.mobile.news = function() {

    var _channel, _nodeNews;

    //------------------------------------------------------------------------------------------------------------
    //Fill the News list page
    function _fill_list_news_page(channel) {

        _channel = channel;
        _nodeNews = _channel.getNode('SRCO_MOB_NEWS');
        //jQuery("#list_news_page").attr('style', 'display:block;');
        //jQuery("#detail_news_page").attr('style', 'display:none;');
        jQuery("#list_news_page").css('display','block');
        jQuery("#detail_news_page").css('display','none');
        var ul = jQuery("#listNews"); // container list

        for (var i = 0; i < _nodeNews.count(); i++) {
            _nodeNews.moveTo(i);        
            
            //we get photo, title, date
            var photo = _nodeNews.getValue('SRCO_PHOTO_TOKEN');
            var title = _nodeNews.getValue('SCO_TITLE');
            var date = _nodeNews.getValue('SCO_START_DATE_FORMATED');
            
            //we paint photo, title, date  like img,"h4","h5"
            var imgDiv = jQuery('<div class="newsImg"></div>');
            var img = jQuery('<img></img>');
            imgDiv.append(img);
            var imgGradient = jQuery('<div class="newsOverlay"></div>');
            var h4Div = jQuery('<div class="newsTitle"></div>');
            var h4 = jQuery('<h4></h4>');
            h4Div.append(h4);
            var descriptionText = _nodeNews.getValue('SCO_DESCRIPTION');
            var pDiv = jQuery('<div class="newsDesc"></div>');
            var p = jQuery('<h5></h5>');
            console.log(descriptionText);
            p.html(descriptionText);
            pDiv.append(p);
            var h5Div = jQuery('<div class="newsDate"></div>');
            var h5 = jQuery('<h5></h5>');
            h5Div.append(h5);
            //var p = jQuery('<div class="newsDesc2"><p></p></div>');
            if (photo == "unknownPhoto") {
                img.attr('src', '/mobile/icons/image2-noimage-semitransparent.svg');
            } else {
                img.attr('src', photo);
            }
            h4.html(title);
            h5.text(date);    

            //we create and "a" with the photo,title, date
            var a = jQuery('<a></a>');  
            var aDiv = jQuery('<div class="linkContent"></div>'); 
            if (photo == "unknownPhoto") {
                //aDiv.attr('style', 'background-image: url(/mobile/icons/noImage.svg);background-repeat: no-repeat; background-size: cover; background-position: center;');
                aDiv.css('background-image','url(/mobile/icons/noImage.svg)');
                aDiv.css('background-repeat','no-repeat');
                aDiv.css('background-size','cover');
                aDiv.css('background-position','center');
            } else {
                //aDiv.attr('style', 'background-image: url('+photo+');background-repeat: no-repeat; background-size: cover; background-position: center;');
                aDiv.css('background-image','url('+photo+')');
                aDiv.css('background-repeat','no-repeat');
                aDiv.css('background-size','cover');
                aDiv.css('background-position','center');
            }
            a.append(h5Div,aDiv);         
            a.attr('href', '#detail_news_page');
            a.attr('data-transition', 'none');
            a.data('m4IndexData', i);            
            a[0].onclick = function(event) {
                //jQuery("#list_news_page").attr('style', 'display:none;');
                //jQuery("#detail_news_page").attr('style', 'display:block;');
                jQuery("#list_news_page").css('display','none');
                jQuery("#detail_news_page").css('display','block');

                var index = jQuery(event.currentTarget).data('m4IndexData');
                _nodeNews.moveTo(index);
            };            
            aDiv.append(imgGradient, h4Div, pDiv);            
            
            //we put in into and "li"
            var li = jQuery('<li class="newsLi"></li>');
            li.append(a);
            jQuery(ul).append(li);
            
        }

        if (_nodeNews.count()==0) {
            jQuery('.content-primary').text(meta4.ui.translate.getTranslate('_emptyNews'));
            jQuery('.m4-status-bar').css('display', 'none');

            var idList1 = jQuery("#contentRoot");
            idList1.empty();
            var emptyNewsDiv = jQuery('<div id="emptyNewsDiv">');   
            var emptyNewsImg = jQuery('<img id="emptyNewsImg" src="/mobile/icons/news-empty.svg">');    
            var emptyNewsP = jQuery('<p id="emptyNewsP">'); 
            emptyNewsP.text(meta4.ui.translate.getTranslate('_emptyNews'));
            emptyNewsDiv.append(emptyNewsImg, emptyNewsP);
            idList1.append(emptyNewsDiv);

        } else {
            ul.listview("refresh");
        }

        meta4.log.showLog();        
        
    }
    
    
    //------------------------------------------------------------------------------------------------------------
    //Fill the News detail page
    function _fill_detail_news_page() {
        
        if (_nodeNews){
            //Title date and description
            jQuery("#title_detail_news_page").html(_nodeNews.getValue('SCO_TITLE'));
            jQuery("#date_detail_news_page").text(_nodeNews.getValue('SCO_START_DATE_FORMATED'));

           var theme = jQuery.mobile.loader.prototype.options.theme;
            var descriptionText = _nodeNews.getValue('SCO_DESCRIPTION');
            
            var posIni = -1;
            var posFin = 0;           
            do
            {
                posIni = descriptionText.indexOf("color:#", posFin);
                if (posIni > -1)
                {
                    posFin = descriptionText.indexOf(";", posIni);
                    if (posFin > -1)
                    {
                        var stringBefore = descriptionText.substring(0, posIni);
                        var stringAfter = descriptionText.substring(posFin);
                        if (theme == 'a')
                         {
                            descriptionText = stringBefore + "color:#FFFFFF" + stringAfter;
                        }
                         else if (theme == 'b')
                          {
                            descriptionText = stringBefore + "color:#000000" + stringAfter;
                        }   
                    }
                }
            }
            while (posIni > -1);
            
            jQuery("#desc_detail_news_page").html(descriptionText);
            
            //Document
            //var sIdDoc = _nodeNews.getValue('SCO_ID_DOC');
            
            //If we come from a mobile devide we prevent application from allowing file downloads.
            
//          if(meta4.mobile.deviceFrom()=='android' || meta4.mobile.deviceFrom()=='ios'){
//              jQuery("#doc_detail_news_page").empty();                
//          }else{
                var uuID = _nodeNews.getValue('UUID_DOC');            
                if (uuID){
                    jQuery("#doc_detail_news_page").html(_nodeNews.getItemMetadata('SCO_LBL_DOC').getProperty('Name'));
                    //jQuery("#doc_detail_news_page").attr('href', 'javascript:meta4DMSDoc.Doc.read('+sIdDoc+')');
                    
                    if(meta4.mobile.deviceFrom() == 'android' || meta4.mobile.deviceFrom() == 'ios')
                    {           
                        jQuery("#doc_detail_news_page").attr('href', 'javascript:meta4.mobile.openMobileDocument("'+uuID+'");');
                    }   
                    else
                    {
                        jQuery("#doc_detail_news_page").attr('href', 'javascript:meta4.mobile.openDocument("'+uuID+'");');
                    }
                }else{
                    jQuery("#doc_detail_news_page").empty();           
                }
//          }
            
            //Photo
            var photoContainer = jQuery('#photoNews');    
            var photImg = jQuery('<img></img>');
            photImg.attr('class', 'news-photo');
            var photo = _nodeNews.getValue('SRCO_PHOTO_TOKEN');
            if (photo == 'unknownPhoto' || photo == null) {
                photo = '/mobile/icons/noImage.svg';
            }    
            photImg.attr('src', photo);    
            //photoContainer.append(photImg);   
            //photoContainer.attr('style', 'background-image: url("'+photo+'"); background-repeat: no-repeat; background-size: cover; background-position: center;'); 
            photoContainer.css('background-image','url("'+photo+'")');   
            photoContainer.css('background-repeat','no-repeat');
            photoContainer.css('background-size','cover');
            photoContainer.css('background-position','center');      
            
            //Next and previous button: enable and disable
            if (_nodeNews.getCurrent() == 0) {
                jQuery('#previousNews').addClass('disabled-button');
            } else {
                jQuery('#previousNews').removeClass('disabled-button');
            }

            if (_nodeNews.getCurrent() == _nodeNews.count() - 1) {
                jQuery('#nextNews').addClass('disabled-button');
            } else {
                jQuery('#nextNews').removeClass('disabled-button');
            }            
                    
        }
    }
    
    //------------------------------------------------------------------------------------------------------------
    //Previous and Next News    
    function nextNews() {
        
        var index = _nodeNews.getCurrent();        
        if (index < _nodeNews.count() - 1) {
            _nodeNews.moveTo(index + 1);
            jQuery.mobile.changePage("#detail_news_page", {
                transition : "none",
                allowSamePageTransition : true
            });
        }
    }
    
    function previousNews() {
        
        var index = _nodeNews.getCurrent();        
        if (index != 0) {
            _nodeNews.moveTo(index - 1);
            jQuery.mobile.changePage("#detail_news_page", {
                transition : "none",
                allowSamePageTransition : true
            });
        }
    }    

    meta4.mobile.openMobileDocument = function(uuID)        
    {    
        'use strict';

        //console.log("openDocumentMobile uuID= " + uuID);  
    
        function successMethodGetBlob(request)
        {
            if (request.getResult() === 0)
            {
                var blobfile = _nodeNews.getValue('BLOB_FILE'); 
                if (blobfile != null)
                {
                    var uri = null;

                    var blobRequestConfig = new meta4.M4BlobRequestConfig();
                    blobRequestConfig.setFileName(uuID + '.' + blobfile.getExtension());

                    uri = blobfile.getURI(blobRequestConfig);
                   
                    //downloadAndShowDocumentMobile(uri, blobRequestConfig.getFileName(), blobfile.getExtension().toLowerCase());
                    meta4.mobile.downloadAndShowMobileDocument(uri);
                }
            }   
        }

        var arg = new Array;
        arg.push(_nodeNews.getValue('SCO_ID_DOC'));
    
        var request = new meta4.M4Request(_channel, _nodeNews.getId(), "SRCO_GET_DOCUMENT", arg);
        meta4.mobile.data.execute(request, successMethodGetBlob);
    };   

    //------------------------------------------------------------------------------------------------------------
    //events
    //jQuery('#list_news_page').live('pagebeforeshow', function(event, ui)
    jQuery(document).on('pagebeforeshow', '#list_news_page', function(event, ui)
    {
        jQuery("#listNews").empty();
        if (_nodeNews){
            _fill_list_news_page(_channel);
        }
    });    
    
    //jQuery('#detail_news_page').live('pagebeforeshow', function(event, ui)
    jQuery(document).on('pagebeforeshow', '#detail_news_page', function(event, ui)
    {
        //clear text
        jQuery("#title_detail_news_page").empty();
        jQuery("#date_detail_news_page").empty();
        jQuery("#desc_detail_news_page").empty();
        jQuery("#doc_detail_news_page").empty();
        jQuery("#photoNews").empty();        

        jQuery("#detail_news_page").off('swipeleft').on( 'swipeleft', function() {
            nextNews();
        });
    
        jQuery("#detail_news_page").off('swiperight').on('swiperight', function() {
            previousNews();
        });
        
        jQuery('#previousNews').off('click').on('click', function() {
            previousNews();
        });
        
        jQuery('#nextNews').off('click').on('click', function() {
            nextNews();
        });    

         _fill_detail_news_page();
    });       
    

        

    //------------------------------------------------------------------------------------------------------------
    //public methods
    return {
        fill_list_news_page : function(channel) {
            _fill_list_news_page(channel);
        }
    };

}();


meta4.mobile.openDocument = function(uuID) {
    //This function will open a document for Document management
    //The uuID must be a unique identify stored in SCO_UNIQUE_PARAMS M4O with the ID of the document, so the ID of the document will not be show in client
    
    'use strict';

    //read java server page
    var l_URLuniqueParams ='/servlet/CheckSecurity/JSP/tc_docs/tc_doc_get_unique_param.jsp';
    meta4.mobile.windowLoading.show();
    
    //the AJAX callback function
    function _getRespJSON(oResponse) {

        
        meta4.getCachedScript('/library/m4doc_include.js').done(function(){
            meta4.mobile.windowLoading.hide();
            if (oResponse) {//if response doesn't exist, create the form object
                var encryptID = oResponse.encryptID;
                m4opendocument_tech (encryptID);
            }    
        });
    }      

    var aParams = { uuID: uuID};

    jQuery.getJSON(l_URLuniqueParams, aParams, _getRespJSON);
};

function initPage() {
    'use strict';
    
    if(meta4.mobile.deviceFrom() == 'android' || meta4.mobile.deviceFrom() == 'ios')
    {           
        meta4.mobile.loadCordova();
    }   
    
    /**
     *Function that is executed when method is success
     *
     */
    function onLoadProcesses(request) {
        try {
           
            //comprobamos en que pagina iniciamos
            var hash = window.location.hash;
            if (hash == "") {
                //get object that request
                var channel = request.getObject();
                meta4.mobile.news.fill_list_news_page(channel);
            } else {
                //if refresh in second page, redirect to first page
                window.location.href = "m4news.html";
            }
        } catch (e) {
            alert(e.toString() + '\n' + e.stack);
        }
        finally{
            meta4.mobile.spinner.hide();
           
        }
    }

    /*
     *Function that is after executed load metadata
     *
     */
    function onMetadataSuccess(ref) {

        //When is loaded metadatas, we can execute channel to get news
        meta4.log.time('new SRCO_MOB_NEWS');
        var instanceId = 'SRCO_MOB_NEWS'+meta4.ui.language.getCodeLanguage(); //we add the language code to the instance, in order to ensure that we will use other instance in case of change of language without logout
        var channel_view = new meta4.M4Object('SRCO_MOB_NEWS',instanceId);
        meta4.log.timeEnd('new SRCO_MOB_NEWS');

        var request = new meta4.M4Request(channel_view, 'SRCO_MOB_NEWS', 'SRCO_LOAD', null);
        meta4.mobile.data.execute(request, onLoadProcesses);
    }
    
    //load all channels
    meta4.mobile.spinner.show();
    var meta4ObjectIds = [];
    meta4ObjectIds.push('SRCO_MOB_NEWS');
    meta4.mobile.data.loadMetadata(meta4ObjectIds, onMetadataSuccess);  

}


//When ready translation init page
jQuery(document).bind('meta4Ready', initPage);
