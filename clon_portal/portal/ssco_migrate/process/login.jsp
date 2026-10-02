<%@ taglib uri="M4Tags" prefix="m4" %>
<m4:logout/>

<%
  String lang = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"lang");
  if (lang==null) {lang = "en";}

  //no cache
  response.setHeader("Pragma", "no-cache"); 
  response.setHeader("Cache-Control", "no-store"); 
  response.setDateHeader("Expires", -1); 
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

<head>

   <script type="text/javascript" src="javascript/mootools.js"></script>
   <script type="text/javascript" src="javascript/m4ajax.js"></script>
   <script type="text/javascript" src="javascript/login.js"></script>
   <link href="css/m4migration.css" rel="stylesheet" type="text/css" />

 <title></title>

</head>

<body>

   <div class="body-content">
     <div id="loginheader" class="loginheader">
        <div class="logintittle">
           <span id="employeetittle"></span>
           <span id="employeesubtittle"></span>
        </div>
     </div>

     <div id="allloginbody" class="allbody">
       <div id="frmlogin" class="frmlogin">
            <form onkeypress="keyenter();" id="loginEMSS" name="login" action="/servlet/login" method="post">
              <fieldset class="borderlogin">
                 <legend id="leyendhead"></legend>
                 <div id="datadiv" class="datadiv">
                    <label id="labeluser" class="labelnofocus" for="userlogin"></label>
                    <input class="inputnofocus" id="userlogin" name="_USER" type="text" value="" onactivate="activate(this);" ondeactivate="deactivate(this);"/>
                    <div id="userwrong" class="divrigth">
                    </div>
                    <label id="labelpwd" class="labelnofocus" for="pwdlogin"></label>
                    <input class="inputnofocus" id="pwdlogin" name="_PASSWD" type="password" value="" onactivate="activate(this);" ondeactivate="deactivate(this);"/>
                    <div id="pwdwrong" class="divrigth">
                    </div>
                    <div style='display:none; height:0px;'>
                    </div>
                    <label id="labellang" class="labelnofocus" for="selectlang"></label>
                    <select id="selectlang" class="selectfocus" onchange="loadXMLDoc(this);" onactivate="activate(this);" ondeactivate="deactivate(this);">
                       <option value="en">English</option>
                       <option value="es">Espa&ntilde;ol</option>
                       <option value="fr">Fran&ccedil;ais</option>
                       <option value="pt">Portug&ecirc;s</option>
                    </select>
                    <input id="urllogin" name="_URL" type="hidden"/>
                    <input id="langlogin" name="_LANG" type="hidden"/>
                    <input id="initlang" type="hidden" value="<%=lang%>"/>
                 </div>
                 <div id="enterdiv" class="enterdiv">
                   <input name="Button" type="button" class="enterloginnofocus" id="buttonenter" onactivate="activate(this);" ondeactivate="deactivate(this);" value=""/>
                 </div>
              </fieldset>
            </form>
       </div>
     </div>
   </div>

   <br class="body-clearfloat"/>

   <div class="footer-disclaimer">
      &copy; 2009 <a title="Meta4 Spain S.A." href="http://www.meta4.com/">Meta4 Spain S.A.</a> <span id='copyright'></span>
   </div>

</body>

</html>
