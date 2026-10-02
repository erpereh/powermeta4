m4Login = {};
m4Login.IE6 = (Browser.ie6);
m4Login.IE = (Browser.Engine.name == 'trident');
m4Login.bInitLoad = true;
m4Login.userLogin = null;
m4Login.pwdLogin = null;
m4Login.buttonEnter = null;
m4Login.userWrong = null;
m4Login.pwdWrong = null;
m4Login.labelUser = null;
m4Login.labelPwd = null;
m4Login.labelLang = null;
m4Login.Employee = null;
m4Login.loginIntro = null;
m4Login.loginHead = null;
m4Login.lnkLost = null;
//m4Login.lnkCondition=null;
//m4Login.lnkSecurity=null;
m4Login.lnkPrivacy=null;
m4Login.footerDisclaimer = null;
m4Login.selectLang = null;
m4Login.langLogin = null;
m4Login.labelRequireCaptcha = null;
m4Login.labelRetypeCaptcha = null;
m4Login.kaptcha = null;
m4Login.retypekaptcha = null;

m4xml.translate.endTranslateDoc = function() {

  if (m4Login.userWrong.style.height != '12px' ) 
   {
     setText(m4Login.userWrong,'');
   }

  if (m4Login.pwdWrong.style.height != '12px') 
   {
     setText(m4Login.pwdWrong,'');
   }
  if(typeof(meta4) != "undefined" && typeof(meta4.mobile.login) != "undefined"){    
      meta4.mobile.login.setMobileLogin();    
  }

  changeOpacity(1);

  m4Login.bInitLoad = false;

  putLanguage();
  
}

window.addEvent('domready', function()
{

   m4Login.userLogin = $('userlogin');
   m4Login.userLogin.addEvents({
      'keyup': function(e) {
        var evtobj = window.event ? event : e
        if (evtobj.keyCode!=32 && this.value.length>0) 
         {
          m4Login.userWrong.morph('.divrigth');
          setText(m4Login.userWrong,'');
         }
      }

   });

   m4Login.pwdLogin = $('pwdlogin');
   m4Login.pwdLogin.addEvents({
      'keyup': function(e) {
        var evtobj = window.event ? event : e
        if (evtobj.keyCode!=32 && this.value.length>0) 
         {
           m4Login.pwdWrong.morph('.divrigth');
           setText(m4Login.pwdWrong,'');
         }
      }
   });

   m4Login.buttonEnter = $('buttonenter');
   m4Login.buttonEnter.addEvents({
      'click': function(e) {
        m4xmlsubmit();
      }
   });
   
   $('loginEMSS').addEvents({
     'keypress': function(e) {keyenter(e);}
   });

   m4Login.initLang = $('initlang');
   m4Login.userWrong = $('userwrong');
   m4Login.pwdWrong = $('pwdwrong');
   
   m4Login.labelUser = $('labeluser');
   m4Login.labelPwd = $('labelpwd');
   m4Login.labelLang = $('labellang');
   m4Login.Employee = $('employee');
   m4Login.loginIntro = $('loginintro');
   m4Login.loginHead = $('loginhead');
   m4Login.lnkLost = $('lnklost');
   //m4Login.lnkCondition = $('lnkCondition');
   //m4Login.lnkSecurity = $('lnkSecurity');
   m4Login.lnkPrivacy = $('lnkPrivacy');
   m4Login.footerDisclaimer = $('footer-disclaimer');
   m4Login.selectLang = $('selectlang');
   m4Login.langLogin = $('langlogin');
   m4Login.labelRequireCaptcha = $('labelRequireCaptcha');
   m4Login.labelRetypeCaptcha = $('labelRetypeCaptcha');
   m4Login.kaptcha = $('kaptcha');
   m4Login.retypekaptcha = $('retypekaptcha');
   
   if (!m4Login.lang) {m4Login.lang = 'en';loadHTMLDoc(m4Login.lang);}
   m4Login.initLang.value = m4Login.lang;
   
   if (m4Login.params) {$('urllogin').value = m4Login.params;}
   
   m4xml.Ajax.init();
   
   loadbody();

   m4Login.userLogin.focus();

});

function loadbody() 
{

   changeOpacity(0);

   //initialize the form in language
   var oSelect = m4Login.selectLang;
   //choose the language in select
   for (var i=0; i<oSelect.options.length; i++) {
     if (oSelect.options[i].value == m4Login.lang) {
       oSelect.selectedIndex = i;
       break;
       }
   };

   m4xml.translate.page('/translations/'+ m4Login.lang + '.xml', 'login');

   setText(m4Login.userWrong,'');
   setText(m4Login.pwdWrong,'');

}

// invoked by "language" select element change;
// loads chosen XML document and change labels
function loadXMLDoc(elem) {
    
  if (elem.selectedIndex > -1) {

    if (!m4Login.bInitLoad) {
      changeOpacity(0);
    }  

    m4xml.translate.page('/translations/'+ elem.options[elem.selectedIndex].value + '.xml', 'login', 'error');
    loadHTMLDoc(elem.options[elem.selectedIndex].value);
  }
}
function loadHTMLDoc(elem) {
  //$('lnkConditionLang').href='/translations/condition_'+elem+'.html';
  //$('lnkSecurityLang').href='/translations/security_'+elem+'.html';
  $('lnkPrivacyLang').href='/translations/privacy_'+elem+'.html';
}
function activate(e) {
  
  if (!m4Login.labelUser || !m4Login.labelPwd || !m4Login.labelLang) {return;}

  var classfocus = '';
  
  if (e.id=="buttonenter") {classfocus='#enterdiv .enterloginfocus';}
  else if (e.id=="selectlang") {classfocus='';}
  else {classfocus='#frmlogin .inputfocus';}
  
  if (classfocus != '') {$(e.id).morph(classfocus);}
  
  if (e.id=="userlogin") {m4Login.labelUser.morph('#frmlogin .labelfocus');}
  else if (e.id=="pwdlogin") {m4Login.labelPwd.morph('#frmlogin .labelfocus');}
  else if (e.id=="selectlang") {m4Login.labelLang.morph('#frmlogin .labelfocus');}
  
}

function deactivate(e) {

  if (!m4Login.labelUser || !m4Login.labelPwd || !m4Login.labelLang) {return;}

  var classnofocus = '';

  if (e.id == "buttonenter") {classnofocus='#enterdiv .enterloginnofocus';}
  else if (e.id=="selectlang") {classnofocus='';}
  else {classnofocus='#frmlogin .inputnofocus';}
  
  if (classnofocus != '') { $(e.id).morph(classnofocus);}

  if (e.id=="userlogin") {m4Login.labelUser.morph('#frmlogin .labelnofocus');}
  else if (e.id=="pwdlogin") {m4Login.labelPwd.morph('#frmlogin .labelnofocus');}
  else if (e.id=="selectlang") {m4Login.labelLang.morph('#frmlogin .labelnofocus');}

}

function keyenter(e) {
 //if keypressed is enter then try to connect
 if (e.key == 'enter') {
   e.preventDefault();
   m4Login.buttonEnter.focus();
   m4xmlsubmit();
 }
}

function m4xmlsubmit() {
   var berror=false;
   if (m4Login.userLogin.value == "") 
    {
      setText(m4Login.userWrong,m4xml.errors.getError('_1'))
      m4Login.userWrong.morph('.divwrong');
      berror=true;
    }
   if (m4Login.pwdLogin.value == "") 
    {
      setText(m4Login.pwdWrong,m4xml.errors.getError('_2'))
      m4Login.pwdWrong.morph('.divwrong');
      berror=true;
    }
   if (berror==true) 
    {
     return false;
    }
   
   document.forms.loginEMSS.submit();
}

function putLanguage() {

 switch (m4Login.selectLang.value)
  {
   case 'en':
    {
      m4Login.langLogin.value = 2;
      break;
    }
   case 'es':
    {
      m4Login.langLogin.value = 3;
      break;
    }
   case 'fr':
    {
      m4Login.langLogin.value = 4;
      break;
    }
   case 'pt':
    {
      m4Login.langLogin.value = 5;
      break;
    }
  }
 
 var params = new Array();
 params[0] = new Array("lang", m4Login.langLogin.value);
 
 //put the language and others variables into session to forget user or password process
 m4xml.Ajax.send('../sse_generico/sgco_putsession.jsp',params, sendLanguage, false, 2);
 
}

function sendLanguage() {
  // null function
  return;
}

function forgetUserPwd() {
  document.location.href="/tctools/cpaction/tc_login_wz_cp_action.jsp";
}

function changeOpacity(iOpc) {
  
  if (iOpc == 0) 
   {
     m4Login.Employee.setOpacity(0);
     m4Login.loginIntro.setOpacity(0);
     m4Login.loginHead.setOpacity(0);
     m4Login.labelUser.setOpacity(0);
     m4Login.labelPwd.setOpacity(0);
     m4Login.labelLang.setOpacity(0);
     m4Login.lnkLost.setOpacity(0);
     //m4Login.lnkCondition.setOpacity(0);
     //m4Login.lnkSecurity.setOpacity(0);
     m4Login.lnkPrivacy.setOpacity(0);
     m4Login.footerDisclaimer.setOpacity(0);
     m4Login.labelRequireCaptcha.setOpacity(0);
     m4Login.labelRetypeCaptcha.setOpacity(0);
   }
  else
   {
     m4Login.Employee.tween('opacity', 0 ,1);
     m4Login.loginIntro.tween('opacity', 0 ,1);
     m4Login.loginHead.tween('opacity', 0 ,1);
     m4Login.labelUser.tween('opacity', 0 ,1);
     m4Login.labelPwd.tween('opacity', 0 ,1);
     m4Login.labelLang.tween('opacity', 0 ,1);
     m4Login.lnkLost.tween('opacity', 0 ,1);
     //m4Login.lnkCondition.tween('opacity', 0 ,1);
     //m4Login.lnkSecurity.tween('opacity', 0 ,1);
     m4Login.lnkPrivacy.tween('opacity', 0 ,1);
     m4Login.footerDisclaimer.tween('opacity', 0 ,1);
     m4Login.labelRequireCaptcha.tween('opacity', 0 ,1);
     m4Login.labelRetypeCaptcha.tween('opacity', 0 ,1);
   }
}

function setText(e,vvalue)
{
  if (m4Login.IE)
   { 
     e.innerText = vvalue;
   }
  else
   {
     e.textContent = vvalue;
   }
}