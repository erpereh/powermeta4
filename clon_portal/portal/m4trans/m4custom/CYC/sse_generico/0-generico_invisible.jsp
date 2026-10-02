<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page import="com.meta4.configuration.*, com.meta4.session.*, com.meta4.m4operations.*, com.meta4.menu.*" %>
<%@ page import="com.meta4.request.*" %>
<%@ page import="com.meta4.common.utils.logsystem.M4i18nCategory" %>

<%
  //no cache
  response.setHeader("Pragma", "no-cache"); 
  response.setHeader("Cache-Control", "no-store"); 
  response.setDateHeader("Expires", -1); 

  M4i18nCategory oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
%>

<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-generico_formats.jsp" %>
<%
  M4SessionManager m4Session = M4Context.getSession(request);
  M4SessionCl m4SessionCl = M4Context.getM4SessionCl(request);

  String sName = "";
  String sNameAux = "";  
  String vValue = "";
  String vValueEncr = "";
  String vValueAux = "";
  String key =""; 
  String vValueKey ="";
  String sError = null;
  String sResultSearch = null;
      //- path if item found
      //- "-1": item found but in oposite tree
      //- ""  : item not found
  String sResult = null;
      //- "-1": item found but in oposite tree
      //- ""  : item not found
      //- "1" : item found
      //- "0" : error
      
  String slinkURL = "";
  int iPos = 0;
  int nPos = 0;
  String slinkURLLeft = "";
  String slinkURLRigth = "";
  String slinkaux = "";
  
  String sADB = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_ADB");
  if (sADB == null) {sADB = "";}
  
  String sRedirection = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_URL");
  if (sRedirection == null) {sRedirection = "";}
  
  if (sRedirection.equals("")) 
   {
	 if(isMobile(request)){
	  sRedirection = "/mobile/m4home.html";
	 } else {
	  sRedirection = "/servlet/CheckSecurity/JSP/sse_generico/ssco_portal.jsp";
	 }	 
   }
  else if (sADB.equals(""))
   { 
     String[] sElemEncr={"0_zPRP_ID_HR_ENCR_0","0_zPRP_OR_HR_PERIOD_ENCR_0","0_zPRP_DT_REQUEST_ENCR_0","0_zPRP_ID_INTERVIEW_TYPE_ENCR_0"};
     Arrays.sort(sElemEncr); 
     Enumeration aParams = request.getParameterNames();
	 com.meta4.common.cipher.M4CipherUtil oDecrypt = new com.meta4.common.cipher.M4CipherUtil();
	 
     while (aParams.hasMoreElements ())
      {
        sName = (String) aParams.nextElement();
		vValueAux = com.meta4.taglib.util.M4SafeRequest.getParameter(request,sName);
		sNameAux = "0_" + sName + "_0";
	    nPos = Arrays.binarySearch(sElemEncr, sNameAux);
	    if (nPos >= 0){
		  Hashtable zhash = oDecrypt.dehashToken(vValueAux);
		  Enumeration enumhash = zhash.keys();
		  key = (String) enumhash.nextElement();
		  vValueKey = (String) zhash.get(key);
		  vValueEncr = (String) zhash.get(key); 
		  vValueEncr = vValueEncr.substring(0,vValueEncr.length()-4);
		  vValue = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", vValueEncr);
		  zhash.remove(vValueKey);
	    }else{
	      vValue = vValueAux;
	    }		
        if ((sName.equals("lang"))||(sName.equals("_URL")))
         {
           //In this case do nothing
         }
        else
         {
          sRedirection += "&"+sName + "=" + vValue;
         }
      }
     
     slinkURL = URLDecoder.decode(sRedirection, "UTF-8");   //decode url
     //we have a problem with character '+' (%252B o %2B) because the function URLDecoder.decode transforms this expression 
     //as ' ' (blank) character and we need parser the decode string to convert ' ' to '+' only in parameter ID_WORKITEM
     iPos = slinkURL.indexOf("ID_WORKITEM");
     if (iPos > 0)
      {
        slinkURLLeft = slinkURL.substring(0,iPos);
        slinkURLRigth = slinkURL.substring(iPos);
        iPos = slinkURLRigth.indexOf("&");
        if (iPos > 0)
         {
           slinkaux = slinkURLRigth.substring(iPos);
           slinkURLRigth = slinkURLRigth.substring(0,iPos);
         }
        slinkURLRigth = slinkURLRigth.replaceAll(" ", "%2B") + slinkaux; 
        slinkURL = slinkURLLeft + slinkURLRigth;
      }
     
     oM4Log.debug("link value -> " + slinkURL);
     
     sRedirection = "/servlet/CheckSecurity/JSP/sse_generico/ssco_portal.jsp";

     //Retrieve menu object
     M4Menu oM4Menu = (M4Menu)m4SessionCl.getObject("SCO_MENU");
     if (oM4Menu == null)                                       //object not attached to session
      {                                      
        oM4Menu = new M4Menu(m4Session);                        //create new object
        m4SessionCl.putObject("SCO_MENU", oM4Menu);             //attatch object to session
      }
     try 
      {
        sResultSearch = oM4Menu.searchItemEss(slinkURL);
        if (sResultSearch.equals("")) 
         {
           //item not found
           m4SessionCl.putObject("SCO_CURRENT_URL_ESS", slinkURL);
         } 
        else if (sResultSearch.equals("-1")) 
         {
           //item found in MSS
           sResult = "-1";
           //Attach url to session (to be used when loading portal) after decoding of url
           m4SessionCl.putObject("SCO_CURRENT_URL_MSS", slinkURL);
           sRedirection = "/servlet/CheckSecurity/JSP/mss_generico/smco_portal.jsp";
         } 
        else 
         {
           //item found in ESS
           sResult = "1";
           //Attach url to session (to be used when loading portal) after decoding of url
           m4SessionCl.putObject("SCO_CURRENT_URL_ESS", slinkURL);
         }
      } 
     catch (Exception oMenuException) 
      {
        sError = oMenuException.getMessage();
        sResult = "0";
      }
   }

  if (slinkURL.equals("") && sADB.equals("")) 
   { 
     //control password expires
     String sExpireDates = "";
     String sLoginError = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"M4_LOGIN_ERROR");
     if (sLoginError == null) {sLoginError = "";}

     if (sLoginError.equals("PASSWORD_ABOUT_TO_EXPIRE"))
      {
        //sExpireDates = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"M4_EXPIRES_IN");
		sExpireDates = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_EXPIRES_IN");
        if (sExpireDates == null) {sExpireDates = "0";}

        String sPwdURL = "/servlet/CheckSecurity/JSP/sse_g0/change_password.jsp?M4_OPCODE=PASSWORD_ABOUT_TO_EXPIRE&M4_EXPIRES_IN=" + sExpireDates;
        m4SessionCl.putObject("SCO_CURRENT_URL_ESS", sPwdURL);

      }
   }

  String sLang = "";
  //Identify language id from session and formats current date of client occording language
  // 2 = English
  // 3 = Spanish
  // 4 = French
  // 5 = Portugese
  int iLanguageId = (int)M4Context.getSession(request).getLanguageID();
  
  if (iLanguageId==2) {sLang = "in";}
  if (iLanguageId==3) {sLang = "es";}
  if (iLanguageId==4) {sLang = "fr";}
  if (iLanguageId==5) {sLang = "pt";}

  //String sLang = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"lang");
  //if (sLang!=null)
  // {
  //   m4SessionCl.putBagEntries("lang",sLang);
  // }

  m4SessionCl.putBagEntries("lang",sLang);
  
  String sSubSession = "SSE_INICIO";
  String sM4Object = "SSE_INICIO";
  String sNode = "SSE_INICIO";

// Normally not modified.

  String sOutPutDef = sSubSession + "!" + sNode + "[*]";
  String sMove = sNode + ":" + sNode + "[FIRST]";   

// Generic Meta4Object load method

  String sMethodLoad = sSubSession + "!SSE_INICIO.CARGA";
   
// Items to be loaded. You must add all of the ones that you want to view.

  String sItem_Name = "";
  String sItem_MailWebMaster = "";
  String sItem_MailHR = "";
  String sItem_IDPerson = "";
  String sIsKnowNet = "";
  String sItem_MSSVisibility = "";
  String sItem_Org = "";

%>

<m4:startpage m4task="<%=sSubSession%>"/><m4:beginjob/>
<m4:datadef m4o="<%=sM4Object%>" m4name="<%=sSubSession%>"/>
<m4:exec m4method="<%=sMethodLoad%>"></m4:exec>
<m4:outputdef m4alias="<%=sNode%>"><m4:param name="m4name0" value="<%=sOutPutDef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=sSubSession%>" value="<%=sMove%>"/></m4:move>
<m4:getapplparam section="CONFIG_CW" key="SERVER_KNOWNET" output="jsp"/>

<%
  String sAuxProvider = (String)pageContext.getAttribute("SERVER_KNOWNET");
  if(sAuxProvider.equals("-1")||sAuxProvider.equals("NULL"))
   {
     sIsKnowNet="1";
   }
  else
   {
     sIsKnowNet="0";
   }

  String Server_Peoplenet = M4ConfigClient.getElement("M4Client.SERVERWEB");
  String Port_Peoplenet = M4ConfigClient.getElement("M4Client.WEBSERVERPORT");
  String Servlet_local =  M4ConfigClient.getElement("M4Client.ThinClient.ExternalContentProvider.Local");
  String secure = String.valueOf(request.isSecure());
  String protocolo = "";

  if(secure.equals("false"))
   {
     protocolo="http://";
   }
  else
   {
     protocolo="https://";
   }

  String Total_Server_Knownet = protocolo+Server_Peoplenet+":"+Port_Peoplenet+Servlet_local+"?_PROVIDER="+sAuxProvider;
  try 
   {
      M4Operations Introduccion2 = new M4Operations(request);
      sItem_Name = Introduccion2.getItem(sNode,sM4Object,sNode,"","NOMBRE");
      sItem_MailWebMaster = Introduccion2.getItem(sNode,sM4Object,sNode,"","MAIL_WEBMASTER");
      sItem_MailHR = Introduccion2.getItem(sNode,sM4Object,sNode,"","MAIL_RRHH");
      sItem_IDPerson = Introduccion2.getItem(sNode,sM4Object,sNode,"","STD_ID_PERSON");
      sItem_MSSVisibility = Introduccion2.getItem(sNode,sM4Object,sNode,"","MANAGER_VISIBILITY");
      sItem_Org = Introduccion2.getItem(sNode,sM4Object,sNode,"","SSE_PRP_ID_ORGANIZATION");
      m4SessionCl.putBagEntries("minombre",sItem_Name);
      m4SessionCl.putBagEntries("mailrrhh",sItem_MailHR);
      m4SessionCl.putBagEntries("zIdPerson",sItem_IDPerson);
      m4SessionCl.putBagEntries("mailwebmaster",sItem_MailWebMaster);
      m4SessionCl.putBagEntries("IsKnownet",sIsKnowNet);
      m4SessionCl.putBagEntries("Total_Server_Knownet",Total_Server_Knownet);
      m4SessionCl.putBagEntries("sAuxProvider",sAuxProvider);
      m4SessionCl.putBagEntries("manager_visibility",sItem_MSSVisibility);
      m4SessionCl.putBagEntries("zIdOrganization",sItem_Org);

   } 
  catch(Exception e) {}

  String strcuentareg = "";
  String zitem = "";
  String zURL = "";
  String nombremio = "";
  try 
   {
     int cuentareg = 0;
     int i = 0;
     M4Operations Introduccion = new M4Operations(request);
     cuentareg = Introduccion.getCountInClient(sNode,sM4Object,sNode);
     for (i = 0; i < cuentareg; i++)
      {
        String stri =String.valueOf(i);
        zitem = Introduccion.getItem(sNode,sM4Object,sNode,stri,"N_ENLACE");
        zURL = Introduccion.getItem(sNode,sM4Object,sNode,stri,"ENLACE");
        String s = zitem + "{|&|}" + zURL;
        m4SessionCl.putBagEntries("key" + stri,s);
      }
     strcuentareg = String.valueOf(cuentareg);
     m4SessionCl.putBagEntries("totalfavoritos",strcuentareg);
   } 
  catch(Exception e) {}
  
  //redirect to 'sRedirection' to avoid 304 error of images 
  response.sendRedirect(sRedirection);

%>



<m4:endpage/>

<%! // isMobile: this function returns true if mobile, false otherwise    
boolean isMobile (HttpServletRequest request)
{       
	M4i18nCategory _oM4Log = (M4i18nCategory) M4i18nCategory.getInstance("com.meta4.jsp");
  
	boolean bIsMobile = false; 
	String sProductID = M4ProductByThreadUpdater.getProductIDFromRequest(request);
	
	if (sProductID.equalsIgnoreCase("mobile"))
	{
	  bIsMobile = true;
	}
	_oM4Log.trace(" [generico_invisible.jsp] isMobile = "+bIsMobile);								
	return bIsMobile;       
}
%>

