
m4migrate.bInitLoad = true;

m4migrate.translate.endTranslateDoc = function() {

  if ($('userwrong').style.height != '12px' ) 
   {
     $('userwrong').innerText = '';
   }

  if ($('pwdwrong').style.height != '12px') 
   {
     $('pwdwrong').innerText = '';
   }

  if (!m4migrate.bInitLoad) {
    $('frmlogin').tween('opacity', 0 ,1);
  }

  m4migrate.bInitLoad = false;
  
}

window.addEvent('domready', function()
{

   m4migrate.Ajax.init();
   
   $('buttonenter').addEvents({
      'click': function() {
        m4migratesubmit();
      }
   });

   $('userlogin').addEvents({
      'keyup': function() {
        if (window.event.keyCode!=32 && this.value.length>0) 
         {
          $('userwrong').morph('.divrigth');
          $('userwrong').innerText = '';
         }
      }
   });

   $('pwdlogin').addEvents({
      'keyup': function() {
        if (window.event.keyCode!=32 && this.value.length>0) 
         {
           $('pwdwrong').morph('.divrigth');
           $('pwdwrong').innerText = '';
         }
      }
   });
   
   $('urllogin').value='/servlet/CheckSecurity/JSP/ssco_migrate/ssco_migrate_config.jsp';

   $('userlogin').focus();

   loadbody();

});

function loadbody() 
{
   //initialize the form in language
   m4migrate.lang = $('initlang').value;
   var oSelect = $('selectlang');
   //choose the language in select
   for (var i=0; i<oSelect.options.length; i++) {
     if (oSelect.options[i].value == m4migrate.lang) {
       oSelect.selectedIndex = i;
       break;
       }
   };

   m4migrate.translate.page('xml/'+ m4migrate.lang + '.xml', 'login', 'error');
   $('userwrong').innerText = '';
   $('pwdwrong').innerText = '';

}

// invoked by "language" select element change;
// loads chosen XML document and change labels
function loadXMLDoc(elem) {
    
  if (elem.selectedIndex > -1) {

    if (!m4migrate.bInitLoad) {
      $('frmlogin').setOpacity(0);
    }  

    m4migrate.translate.page('xml/'+ elem.options[elem.selectedIndex].value + '.xml', 'login', 'error');

  }
}

function activate(e) {
  
  var classfocus = '';
  
  if (e.id=="buttonenter") {classfocus='#enterdiv .enterloginfocus';}
  else if (e.id=="selectlang") {classfocus='';}
  else {classfocus='#frmlogin .inputfocus';}
  
  if (classfocus != '') {$(e.id).morph(classfocus);}
  
  if (e.id=="userlogin") {$('labeluser').morph('#frmlogin .labelfocus');}
  else if (e.id=="pwdlogin") {$('labelpwd').morph('#frmlogin .labelfocus');}
  else if (e.id=="selectlang") {$('labellang').morph('#frmlogin .labelfocus');}
  
}

function deactivate(e) {

  var classnofocus = '';

  if (e.id == "buttonenter") {classnofocus='#enterdiv .enterloginnofocus';}
  else if (e.id=="selectlang") {classnofocus='';}
  else {classnofocus='#frmlogin .inputnofocus';}
  
  if (classnofocus != '') { $(e.id).morph(classnofocus);}

  if (e.id=="userlogin") {$('labeluser').morph('#frmlogin .labelnofocus');}
  else if (e.id=="pwdlogin") {$('labelpwd').morph('#frmlogin .labelnofocus');}
  else if (e.id=="selectlang") {$('labellang').morph('#frmlogin .labelnofocus');}

}

function keyenter(e) {
 //if keypressed is enter then try to connect
 if (window.event && window.event.keyCode == 13) {
   $('buttonenter').focus();
   m4migratesubmit();
 }
}

function m4migratesubmit() {
   var berror=false;
   if ($('userlogin').value == "") 
    {
      $('userwrong').innerText = m4migrate.errors.getError('_1'); 
      $('userwrong').morph('.divwrong');
      berror=true;
    }
   if ($('pwdlogin').value == "") 
    {
      $('pwdwrong').innerText = m4migrate.errors.getError('_2'); 
      $('pwdwrong').morph('.divwrong');
      berror=true;
    }
   if (berror==true) 
    {
     return;
    }

   $('langlogin').value = 2;

   switch ($('selectlang').value)
    {
     case 'en':
      {
        $('langlogin').value = 2;
        break;
      }
     case 'es':
      {
        $('langlogin').value = 3;
        break;
      }
     case 'fr':
      {
        $('langlogin').value = 4;
        break;
      }
     case 'pt':
      {
        $('langlogin').value = 5;
        break;
      }
    }

   loginEMSS.submit();
}
