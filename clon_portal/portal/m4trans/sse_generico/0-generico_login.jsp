<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory" %>
<m4:logout/>

<%

  M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");

  //String sLang = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"lang");
  String sLang = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"lang");
  if (sLang == null) {sLang = "";}
  
  if (sLang.length() > 2) {
    sLang = sLang.substring(0,2);
  }

  //String sParams = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"params");
  String sParams = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"params");
  if (sParams == null) {sParams = "";}
  sParams = sParams.replaceAll("\"", "");

  //no cache
  response.setHeader("Pragma", "no-cache"); 
  response.setHeader("Cache-Control", "no-store, no-cache");
  response.setDateHeader("Expires", -1); 

  // Captcha functionality from the session instead
  String sRequireCaptcha = (String) session.getAttribute(com.meta4.security.SecurityAutomationControl.PARAM_REQUIRE_CAPTCHA);
  String sRetypeCaptcha = (String) session.getAttribute(com.meta4.security.SecurityAutomationControl.PARAM_RETYPE_CAPTCHA);								  
  String sLastUserInLockingDanger = (String) session.getAttribute(com.meta4.security.SecurityAutomationControl.ATT_LOCKING_DANGER);
  String bRequireCaptcha = "false";
  String bRetypeCaptcha = "false";
  String sLastUserType = sLastUserInLockingDanger;
  
  session.removeAttribute(com.meta4.security.SecurityAutomationControl.PARAM_REQUIRE_CAPTCHA);
  session.removeAttribute(com.meta4.security.SecurityAutomationControl.PARAM_RETYPE_CAPTCHA);
  session.removeAttribute(com.meta4.security.SecurityAutomationControl.ATT_LOCKING_DANGER);
  
  if (sRequireCaptcha != null){  // todo: on user change this should be recalculated
    bRequireCaptcha = "true";
  }else if (sRetypeCaptcha != null){
    bRequireCaptcha = "true";
    bRetypeCaptcha = "true";
  }else{}
  
  if (sLastUserType == null) {sLastUserType = "";}

%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

<head>
     
	<script type="text/javascript" src="/libreria/mootools.js"></script>
	<script type="text/javascript" src="/libreria/functions_m4ajax.js"></script>
	<script type="text/javascript" src="/libreria/functions_login.js"></script>
	<%@ include file="/m4trans/mobile/0-include_mobile.jsp" %>
     
   <script type="text/javascript">
   if (window.parent != window) {
     if (!window.parent.m4frameContent || (window.parent.location.host != window.location.host)) {
       top.location = self.document.location;
     } else {
       window.parent.fireEvent('m4showlogin');
     }
   }
      m4Login.lang = '<%=sLang%>';
  if(typeof(meta4) != "undefined" && typeof(meta4.mobile.login) != "undefined"){
		document.write("<link rel='stylesheet' type='text/css' href='/css/style_login_mobile.css'/>");	
   }else{
		if (m4Login.IE6) {
			document.write("<link rel='stylesheet' type='text/css' href='/css/style_loginIE6.css'/>");
		}else{
			document.write("<link rel='stylesheet' type='text/css' href='/css/style_login.css'/>");
		}
   }
   window.addEvent('domready', function() {
   	loadHTMLDoc(m4Login.lang);
	 
	CheckCaptchaVisibility(<%=bRequireCaptcha%>,<%=bRetypeCaptcha%>);
	
	$('userlogin').addEvents({'keyup': function(e) {
	        var sNewUser = $('userlogin').get('value');
	        var sOldUser = '<%=sLastUserType%>';
		    var bRequireCaptcha = <%=bRequireCaptcha%>;
			var bRetypeCaptcha = <%=bRetypeCaptcha%>;
	        if (bRequireCaptcha){
	          if (sNewUser.length > 2){
	            if (sNewUser.toUpperCase() != sOldUser.toUpperCase()){
	              //is a new user so hidden the captcha
				  bRequireCaptcha = false;
				  bRetypeCaptcha = false;
	            }
	            CheckCaptchaVisibility(bRequireCaptcha,bRetypeCaptcha);			
	          }
		}
	  }
     });
   });

   function CheckCaptchaVisibility(bRequireCaptcha,bRetypeCaptcha) {
     var frmlogin = $('frmlogin');
	 var allloginbody = $('allloginbody');
	 var iMyHeigth1 = 0;
	 var iMyHeigth2 = 0;
	 var SlideDivRequireCaptcha = new Fx.Slide('divRequireCaptcha');
     var SlideDivRetypeCaptcha = new Fx.Slide('divRetypeCaptcha');
	 var divRequireCaptcha = $('divRequireCaptcha');
     var divRetypeCaptcha = $('divRetypeCaptcha');	   
	 if (bRequireCaptcha){
	   if (bRetypeCaptcha){  //Retype Captcha
	     iMyHeigth1 = 335;   //Heigth for frmlogin
	     iMyHeigth2 = 490;   //Heigth for allloginbody
		 divRetypeCaptcha.style.display='block';
		 SlideDivRetypeCaptcha.slideIn();
	   }else{                //Type Captcha
         iMyHeigth1 = 320;   //Heigth for frmlogin
         iMyHeigth2 = 475;   //Heigth for allloginbody
		 divRequireCaptcha.style.display='block';
		 SlideDivRequireCaptcha.slideIn();
	   }
	 }else{                //No requiere Captcha
	   iMyHeigth1 = 200;   //Heigth for frmlogin
	   iMyHeigth2 = 385;   //Heigth for allloginbody
	   SlideDivRequireCaptcha.slideOut();
	   SlideDivRetypeCaptcha.slideOut();
	 }
     frmlogin.morph({
       'background-color': '#FFFFFF',
       'height': iMyHeigth1
     });
     allloginbody.morph({'height': iMyHeigth2});
   }
   
   function InitializeObj() {
     var bRequireCaptcha = <%=bRequireCaptcha%>;
     var bRetypeCaptcha = <%=bRetypeCaptcha%>;
	 if (bRequireCaptcha){
	   $('userlogin').set('value',$('lastUserType').get('value'));       //Assign common labels
	   if (bRetypeCaptcha){  //Retype Captcha
         $('kaptcha').set('title',$('titleRetypeCaptcha').get('value')); //Assign specific labels
	   }else{                //Type Captcha
         $('kaptcha').set('title',$('titleRequireCaptcha').get('value'));//Assign specific labels
	   }
	 }
   }
   
   function ChangeLanguage(){
     InitializeObj();
   }
 </script>
 <title></title>

</head>

<body onload="InitializeObj();">

   <div class="body-content">
     <div class="loginheaderleft">
        <div id="employee" class="logintittle">
           <span id="employeetittle"></span>
           <span id="employeesubtittle"></span>
        </div>
     </div>

     <div class="loginheadercenter">
       <div class="loginheaderight">
       </div>
     </div>

     <div class="loginseparator">
     </div>

     <div class="loginmain">
       <div id="loginintro" class="loginintro">
         <p id="welcome" class="loginintrobold"></p>
         <p><span id="description1"></span>&nbsp;<span id="descriptionemployee" class="loginintrobold"></span>&nbsp;<span id="description2"></span>&nbsp;<span id="descriptionmanager" class="loginintrobold"></span>&nbsp;<span id="description3"></span></p>
         <p><span id="remember"></span>&nbsp;<span id="rememberidentify" class="loginintrobold"></span></p>
       </div>

       <div id="allloginbody" class="allbody">
         <div id="frmlogin" class="frmlogin">
            <form autocomplete="off" id="loginEMSS" name="login" action="/servlet/login" method="post">
              <div class="loginhead">
                <span id="loginhead"></span>
              </div>
              <div id="datadiv" class="datadiv">
                 <label id="labeluser" class="labelnofocus" for="userlogin"></label>
                 <input class="inputnofocus" id="userlogin" name="_USER" type="text" value="" onactivate="activate(this);" onfocus="activate(this);" ondeactivate="deactivate(this);" onblur="deactivate(this);"/>
                 <div id="userwrong" class="divrigth"></div>
                 <label id="labelpwd" class="labelnofocus" for="pwdlogin"></label>
                 <input class="inputnofocus" id="pwdlogin" name="_PASSWD" type="password" value="" onactivate="activate(this);" onfocus="activate(this);" ondeactivate="deactivate(this);" onblur="deactivate(this);"/>
                 <div id="pwdwrong" class="divrigth"></div>
                 <div style='display:none; height:0px;'></div>
                 <label id="labellang" class="labelnofocus" for="selectlang"></label>
                 <select id="selectlang" class="selectfocus" onchange="loadXMLDoc(this);" onactivate="activate(this);" onfocus="activate(this);" ondeactivate="deactivate(this);" onblur="deactivate(this);"/>
                    <option value="en">English</option>
                    <option value="es">Espa&ntilde;ol</option>
                    <option value="fr">Fran&ccedil;ais</option>
                    <option value="pt">Portugu&ecirc;s</option>                  
                 </select>
                 <input id="urllogin" name="_URL" type="hidden" value="<%=sParams%>"/>
                 <input id="langlogin" name="_LANG" type="hidden"/>
                 <input id="initlang" type="hidden" value=""/>
               </div>
			   <span id="divCaptcha">
                 <input id="titleRequireCaptcha" type="hidden" value=""/>
				 <input id="titleRetypeCaptcha" type="hidden" value=""/>
				 <input id="lastUserType" type="hidden" value="<%=sLastUserType%>"/>
                 <div id="divRequireCaptcha" style="display:none; margin: 2px 0 5px 30px; height:110px;">
                   <label id="labelRequireCaptcha" style="margin: 3px 5px 5px 0px; width: 295px; color: #07346b;font-family: Verdana;font-weight: bold;font-size: 11px;font-style: normal"></label> 
                   <img src="/images/kaptcha.jpg">
                   <%if(bRequireCaptcha == "true" && bRetypeCaptcha == "false"){%>
                     <input id="kaptcha" type="text" size="20" name="kaptcha" value="" title="" onmouseover="ChangeLanguage();">
                   <%}%>
                 </div>
                 <div id="divRetypeCaptcha" style="display:none; margin: 2px 0 5px 30px; height:110px;">
                   <label id="labelRetypeCaptcha" style="margin: 3px 5px 5px 0px; width: 295px; color: #07346b;font-family: Verdana;font-weight: bold;font-size: 11px;font-style: normal"></label> 
                   <img src="/images/kaptcha.jpg">
                   <%if(bRequireCaptcha == "true" && bRetypeCaptcha == "true"){%>
                     <input id="kaptcha" type="text" size="20" name="kaptcha" value="" title="" onmouseover="ChangeLanguage();">
                   <%}%>
                 </div>
               </span>
               <div class="forgetdiv">
                 <a id="lnklost" href="javascript:forgetUserPwd()"></a>
               </div>
               <div id="enterdiv" class="enterdiv">
                 <input name="button" type="button" class="enterlogin" id="buttonenter" value="" onactivate="activate(this);" onfocus="activate(this);" ondeactivate="deactivate(this);" onblur="deactivate(this);"/>
               </div>
            </form>
         </div>
         <div class="frmloginbottom"></div>
       </div>
     </div>
   </div>

   <br class="body-clearfloat"/>
	<table id="tablePrivacy" align="center">
		<tr >
			<td ><a id="lnkPrivacyLang" href="" style="cursor: pointer;"><span id="lnkPrivacy"></span></a></td>
		</tr>
	</table>
	
	<br class="body-clearfloat"/>
	
   <div id="footer-disclaimer" class="footer-disclaimer">
      &copy; 2013 <a title="Meta4 Spain S.A." href="http://www.meta4.com/">Meta4 Spain S.A.</a> <span id='copyright'></span>
   </div>

</body>

</html>
