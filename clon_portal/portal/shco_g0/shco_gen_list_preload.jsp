<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_list_preload.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%

//Si se llama a la lista en modo carril renombramos la subsessión
// de esta manera esta forma de llamar a las listas siempre estará identificada
if (!(zpag.equals("0"))){
   zsubsesion+= "KEEPDATA";
}

String znodo2 ="SHCO_GN_MT_FILTER_KEY";
String znodo3 ="SHCO_GN_MT_FILT";
String znodoroot = "SHCO_GN_ROOT";
String zmetodocarga = zm4object + "!SHCO_GN_ROOT.SHCO_LOAD_FILTER";
String zhasdynfilter = "SHCO_GN_ROOT:" + zm4object + "!SHCO_GN_ROOT.SHCO_HAS_DYN_FILTER";

int zregistroinicial = Integer.valueOf(zinicio).intValue();					//COMUN VENTANAS
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;

String zoutputdef = zm4object + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";   //COMUN VENTANAS
String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
String zcomun = znodo + ":" + zm4object + "!" + znodo + "[&VAR.m4lix]" + ".";
String zraiz =  znodo + ":" + zm4object  + "!" + znodo + ".";
   
String zoutputdefroot = zm4object + "!" + znodoroot + "[*]";

String zoutputdef2 = zm4object + "!" + znodo2 + "[*]";						//COMUN MT
String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";
String zcomun2 = znodo2 + ":" + zm4object + "!" + znodo2 + "[&VAR.m4lix]" + ".";
      
String zoutputdef3 = zm4object + "!" + znodo3 + "[*]";
String zmove3 =znodo3 + ":" +znodo3 + "[FIRST]"; 
String zcomun3 = znodo3 + ":" + zm4object + "!" + znodo3 + "[&VAR.m4lix]" + ".";
   
String zsortitems = zm4object + "!" + znodo + "."+ zOrdenCampo;;				//COMUN MT

String znodolabel = "SHCO_GN_LABEL";
String zoutputdeflabel = zm4object + "!" + znodolabel + "[*]";
String zmovelabel = znodolabel + ":" + znodolabel + "[FIRST]";
String zraizlabel = znodolabel + ":" + zm4object + "!" + znodolabel + ".";

String zurl = zdireccion + "#filter"; 
String zaccion = "/servlet/CheckSecurity/JSP/" + zurl;
String zIDVALUE = zcomun2 + "SCO_ID_KEY";
String zIDTYPE2 = zcomun2 +  "SCO_ID_TYPE";
String zNVALUE = zcomun2 +  "SCO_NM_KEY";
   
String zIDFIELD = zcomun3 + "SCO_ID_FIELD";
String zIDTYPE = zcomun3 +  "SCO_ID_TYPE";
String zNFIELD = zcomun3 +  "SCO_NM_FIELD";
//Items de labels	

String zSHCOLBNEW = zraizlabel + "SHCO_LB_NEW";
String zSHCOLBFILTER = zraizlabel + "SHCO_LB_FILTER";
String zSHCOLBFILT = zraizlabel + "SHCO_LB_FILT";
String zSHCOLBCLOSE= zraizlabel + "SHCO_LB_CLOSE";
String zSCHOLBCKALL= zraizlabel + "SCHO_LB_CK_ALL";
String zSCHOLBDCKALL= zraizlabel + "SCHO_LB_DCK_ALL";
String zSHCOLBACEPT= zraizlabel + "SHCO_LB_ACEPT";

String zSHCOLBADVANCEFIL= zraizlabel + "SHCO_LB_ADVANCED_FILTER";
String zSHCOLBEASYFILT= zraizlabel + "SHCO_LB_EASY_FILTER";

%><m4:outputcache checkexpired="<%=zm4object%>"/>
<%@ include file="shco_gen_label.jsp" %>


