<html>
<head>
<title>Error</title>
</head>
<body bgcolor="#ffffff">

<% String returnPage = trequest.getParameter ("returnPage"); 
   String links      = trequest.getParameter ("links"); 
   String estado     = trequest.getParameter ("estado");
   String url	     = returnPage+".jsp?links="+links+"&estado="+estado;
%>

<STARTPAGE M4TASK="PERSON"></STARTPAGE>
<center>
<table border="0">
<tr><td>
<center>
	<table border="0" cellspacing="0" cellpadding="0" width="450" background="/images/b_error.jpg">
	<tr><td><br><img src="/images/logo.gif" alt="logo"></td></tr>
	<tr><td width="100%" align="left" valign="bottom"><hr size="1" width="80%" color="#087aa8"></td></tr>
	<tr><td width="100%" align="left" valign="top"><hr size="1" width="75%" color="#087aa8"></td></tr>
	<tr><td width="100%"><font size="3" face="verdana" color="#8b0007">&nbsp;&nbsp;<b>E</b>rror:</td></tr>
	
	<tr><td width="100%" height="280" align="left" valign="top"><font size="2" color="#004065" face="verdana"><br><br>
		    <GETBAGVALUE M4KEY="ERROR_LOG">
		    </GETBAGVALUE>
	</font></td></tr>
	<tr><td align="right"><a href="`url`">
	<font face="verdana" color="#8B0007" size="1">Volver</font><img alt="volver" src="/images/noname_volver.gif" border="0" align=middle></a></td></tr>
	</table>
</center>
</td></tr>

</table>
</center>
<CLEARBAGVALUE M4KEY="ERROR_LOG">
</CLEARBAGVALUE>
<ENDPAGE></ENDPAGE>
</body>
</html>
