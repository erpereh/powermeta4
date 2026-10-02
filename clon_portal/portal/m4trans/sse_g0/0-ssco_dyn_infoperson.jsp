<%@ page import="com.meta4.m4operations.*, java.util.*, com.meta4.session.*, java.io.*" %>
<%@ page import="com.meta4.taglib.util.M4PresentationUtilTaglib.*" %>
<%@ page import="com.meta4.common.cipher.*" %>
<%@ page import="com.meta4.utilities.*" %>
<html>

  <%
	   //no cache
  response.setHeader("Pragma", "no-cache"); 
  response.setHeader("Cache-Control", "no-store, no-cache");
  response.setDateHeader("Expires", -1); 	%>

<head>
<script type="text/javascript" src="/libreria/mootools.js"></script>
<script type="text/javascript" src="/libreria/meta4ajax.js"></script>
<script type="text/javascript" src="/libreria/meta4photo.js"></script>
<script type="text/javascript" src="/libreria/meta4infpers.js"></script>
 
<title>Info person</title>
 
</head>
<body>
	<div class='divPhoto'>
          <img class='nophoto' id='imgPhoto' src=''/>
    </div>
	   
<%
	//no cache
	response.setHeader("Pragma", "no-cache"); 
	response.setHeader("Cache-Control", "no-store, no-cache");
	response.setDateHeader("Expires", -1); 	
	   
	   
	M4SessionManager m4session = M4Context.getSession(request);	
	//get argument to meta4Photo
	String sPathTempMap = m4session.getPathTempMapping();
	String sPathTempURI = m4session.getUserTempURI() + '/';
	
	//get argument received from jsp
	String encripted = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "arg1");			
	
	//generate the seed to decode
	String idseed = M4PresentationEncodeUtil.generateSeed(m4session);
				
	//decode arrayList
	ArrayList<String>arrayList = M4CipherUtil.decryptSecretsWithKey(encripted, idseed);
	
	//get idRH en first position of arrayList
	String decripted_idHR=arrayList.get(0);		
		
%>

<script>
	//init meta4Photo
	meta4Photo.Photo.init("<%=sPathTempMap%>", "<%=sPathTempURI%>", $('imgPhoto'));
	//init meta4InfPers
	meta4InfPers.Info.init(null);
	//show information of idRH
	meta4InfPers.Info.show("<%=decripted_idHR%>");

</script>

</body>

</html>



