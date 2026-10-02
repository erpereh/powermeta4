<%@ page import="java.util.*, java.net.*" %>

<%

  String sRoot = "";
  String sBody = "";
  String sName = "";
  String sParams = "";
  String sURL = "";
  String sFilter = "";
  String sLevel = "";
  String sIDWORKITEM = "";
  int iPos = 0;

  //sRoot = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_A");
  sRoot = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_A");
          
  if (sRoot == null) {sRoot = "";}

  if (!sRoot.equals(""))
   {
     //sBody = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_B");
	 sBody = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_B");
     if (sBody == null) {sBody = "";}

     //sURL = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_C");
	 sURL = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_C");

     //sFilter = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro");
	 sFilter = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro");

     if (sFilter == null) {sFilter = "";}
     else {sFilter = "&zfiltro=" + URLEncoder.encode(sFilter);}
     
     //sLevel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znivel");
	 sLevel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znivel");

     if (sLevel == null) {sLevel = "";}
     else {sLevel = "&znivel=" + URLEncoder.encode(sLevel);}
     
     Enumeration oParams = request.getParameterNames();
     while (oParams.hasMoreElements ())
     {
       sName = (String) oParams.nextElement();
       if (!sName.equals("_A") && !sName.equals("_B") && !sName.equals("_C") && !sName.equals("zfiltro") && !sName.equals("znivel"))
        {
          sURL += "&" + sName + "=" + URLEncoder.encode(com.meta4.taglib.util.M4SafeRequest.getParameter(request,sName));
        }
     }
/*
     iPos = sURL.lastIndexOf("ID_WORKITEM");
     if (iPos > 0)
      {
       sIDWORKITEM = sURL.substring(iPos);
       iPos = sIDWORKITEM.indexOf("&");
       if (iPos > 0)
        {
          sIDWORKITEM = sIDWORKITEM.substring(0,iPos);
        }
       
       iPos = sIDWORKITEM.indexOf("=");
       if (iPos > 0)
        {
          sIDWORKITEM = sIDWORKITEM.substring(iPos+1);
        }

       session.setAttribute("ID_WORKITEM", sIDWORKITEM); 

      }
*/
     if (!sLevel.equals("")) {sURL += sLevel;}
     if (!sFilter.equals("")) {sURL += sFilter;}
     
     sURL = java.net.URLEncoder.encode(sRoot + sURL);
     sRoot += sBody + "?_URL=";
   }
   
  sParams = sRoot + sURL;

%>
