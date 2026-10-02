<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_mt_preload.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%
String zmetodocarga = zm4object + "!" + znodoraiz + ".SHCO_LOAD";			// COMUN TODOS
  
String zredireccion = zdireccion;						// MT
 
String zaccion = "/servlet/CheckSecurity/JSP/" + zdireccion+ "#filter";

int zregistroinicial = Integer.valueOf(zinicio).intValue();					//COMUN VENTANAS
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;
  
String zoutputdef = zm4object + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";   //COMUN VENTANAS
String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
String zcomun = znodo + ":" + zm4object + "!" + znodo + "[&VAR.m4lix]" + ".";
String zraiz =  znodo + ":" + zm4object  + "!" + znodo + ".";

String znodolabel = "SHCO_GN_LABEL";
String zoutputdeflabel = zm4object + "!" + znodolabel + "[*]";
String zmovelabel = znodolabel + ":" + znodolabel + "[FIRST]";
String zraizlabel = znodolabel + ":" + zm4object + "!" + znodolabel + ".";
   
String zoutputdef2 = zm4object + "!" + znodo2 + "[*]";						//COMUN MT
String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";

String zsortitems = zm4object + "!" + znodo + "."+ zOrdenCampo;				//COMUN MT

//Items de labels	
String zSHCOLBREM = zraizlabel + "SHCO_LB_REM";
%><%@ include file="shco_gen_label.jsp" %>
