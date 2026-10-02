<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>

<%
// cadenas para traducir

String titulo = "Vos donn&eacute;es professionnelles";
String tfuncional = "Vos donn&eacute;es professionnelles";
String dfuncional = "Modifiez vos donn&eacute;es professionnelles.";
String efuncional = "Dipl&ocirc;mes";
String efuncional2 = "Langues";
String efuncional3 = "Exp&eacute;rience professionnelle";
String efuncional4 = "Permis et attestations";

String etiqueta = "Niveau de dipl&ocirc;me";
String etiqueta2 = "Dipl&ocirc;me";
String etiqueta3 = "&Eacute;tablissement";
String etiqueta4 = "Modifiez vos dipl&ocirc;mes";
String etiqueta5 = "D&eacute;tail de l'&eacute;tablissement (nom)";
String etiqueta6 = "Supprimer le dipl&ocirc;me";
String etiqueta7 = "Langue";
String etiqueta8 = "Niveau de compr&eacute;hension orale";
String etiqueta9 = "Niveau parl&eacute;";
String etiqueta10 = "Niveau &eacute;crit";
String etiqueta11 = "Modifiez vos connaissances";
String etiqueta12 = "Supprimer la langue";
String etiqueta13 = "Date de d&eacute;but";
String etiqueta14 = "Date de fin";
String etiqueta15 = "Entit&eacute; juridique";
String etiqueta16 = "Domaine professionnel";
String etiqueta17 = "Fonctions";
String etiqueta18 = "Modifiez votre exp&eacute;rience professionnelle";
String etiqueta19 = "Supprimer l'exp&eacute;rience professionnelle";


%>
<title><%=titulo%></title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>  
<%@ include file="../../sse_g1/sse_g1_trans.jsp" %>
<script type="text/javascript" src="/libreria/functions_eval.js"></script>
<script type="text/javascript" src="/libreria/meta4ajax.js"></script>
<script type="text/javascript">
function borrar_titulacion(ord, dip, esp, typ, cen, ini, fin){
m4valor("Titulaciones","STD_ORD_ACD_BACK",ord,"set");
m4valor("Titulaciones","STD_ID_DIPLOMA",dip,"set");
m4valor("Titulaciones","STD_ID_EDU_SP",esp,"set");
m4valor("Titulaciones","STD_ID_EDU_TYPE",typ,"set");
m4valor("Titulaciones","STD_ID_EDU_CENTER",cen,"set");
m4valor("Titulaciones","STD_DT_START",ini,"set");
m4valor("Titulaciones","STD_DT_EARNED_EXPE",fin,"set");
m4submit("Titulaciones");
}
</script>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
if ((estado==null)||(estado.equals(""))){estado="0";}
String pathImgViewComment = "/iconos/lu_hot_info_24.gif";
String zpathVerComentario = "/sse_g1/francais/ssco_g1_p3_duties.jsp?comment=";
String ViewComment = sse_g1Ess.getProperty("Button.ViewDevAct");
%>
</head>
<body>
<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_EMP_BACKGROUND";
   String zmeta4object = "SSE_EMP_BACKGROUND";
   String znodo = "M4T_EMP_BACKGROUND";
   String znodo2 = "M4T_EMP_LANGUAGES";
   String znodo3 = "M4T_EMP_PREV_JOBS";
   String znodo4 = "M4T_CERTIFICATION_LICEN";
   String znodo5 = "M4T_HR_COMP_BACKGROUND";   
   String znodo6 = "M4T_ASSOCIATION_ME";
   String znodo7 = "M4T_HR_COMP_INFORMATION";   


   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zmove = znodo + "[FIRST]";
   String zlectura = zsubsesion + "!" + znodo;
   String zcomun = zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   String zcontrolpath ="";
   String zvalSTDNDIPLEVEL = "";
   String zvalSTDIDEDUCENTER = "";
   
   String zoutputdef2= zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + "[FIRST]";
   String zlectura2 = zsubsesion + "!" + znodo2;
   String zcomun2 = zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";

   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zmove3 = znodo3 + "[FIRST]";
   String zlectura3 = zsubsesion + "!" + znodo3;
   String zcomun3 = zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
   
   String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
   String zmove4 = znodo4 + "[FIRST]";
   String zlectura4 = zsubsesion + "!" + znodo4;
   String zcomun4 = zsubsesion + "!" + znodo4 + "[&VAR.m4lix]" + ".";
   
   String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
   String zmove5 = znodo5 + "[FIRST]";
   String zlectura5 = zsubsesion + "!" + znodo5;
   String zcomun5 = zsubsesion + "!" + znodo5 + "[&VAR.m4lix]" + ".";
   
   String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";
   String zmove6 = znodo6 + "[FIRST]";
   String zlectura6 = zsubsesion + "!" + znodo6;
   String zcomun6 = zsubsesion + "!" + znodo6 + "[&VAR.m4lix]" + ".";

   String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";
   String zmove7 = znodo7 + "[FIRST]";
   String zlectura7 = zsubsesion + "!" + znodo7;
   String zcomun7 = zsubsesion + "!" + znodo7 + "[&VAR.m4lix]" + ".";


// Metodo de carga del Meta4Object generico

   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
   String ztipocarga = "M4T";   
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zSTDNDIPLOMA = zcomun + "STD_N_DIPLOMA";
   String zSTDNDIPLEVEL = zcomun + "STD_N_DIP_LEVEL";
   String zSTDNEDUSP = zcomun + "STD_N_EDU_SP";
   String zSTDNEDUTYPE = zcomun + "STD_N_EDU_TYPE";
   String zSTDNEXTORG = zcomun + "STD_N_EXT_ORG";
   String zSCOHTTPPATH = zcomun + "SCO_HTTP_PATH";
   String zSTDDESCEDUCENTER = zcomun + "STD_DESC_EDU_CENTER";
   
   String zSTDORDACDBACK = zcomun + "STD_ORD_ACD_BACK";
   String zSTDIDDIPLOMA = zcomun + "STD_ID_DIPLOMA";
   String zSTDIDEDUSP = zcomun + "STD_ID_EDU_SP";
   String zSTDIDEDUTYPE = zcomun + "STD_ID_EDU_TYPE";         
   String zSTDIDEDUCENTER = zcomun + "STD_ID_EDU_CENTER";
   String zSTDDTSTARTACAD = zcomun + "STD_DT_START";
   String zSTDDTEARNEDEXPE = zcomun + "STD_DT_EARNED_EXPE";

   String zSTDNLANGUAGE = zcomun2 + "STD_N_LANGUAGE";
   String zSTDNLISTENLEVEL = zcomun2 + "STD_N_LISTEN_LEVEL";
   String zSTDNSPEAKLEVEL = zcomun2 + "STD_N_SPEAK_LEVEL";
   String zSTDNWRITELEVEL = zcomun2 + "STD_N_WRITE_LEVEL";
   String zSTDIDLISTENLEVEL = zcomun2 + "STD_ID_LISTEN_LEVEL";
   String zSTDIDSPEAKLEVEL = zcomun2 + "STD_ID_SPEAK_LEVEL";
   String zSTDIDWRITELEVEL = zcomun2 + "STD_ID_WRITE_LEVEL";
   String zSTDIDLANGUAGE = zcomun2 + "STD_ID_LANGUAGE";
   
   String zSTDEMPLOYER = zcomun3 + "STD_EMPLOYER";
   String zSTDNSECTOR = zcomun3 + "STD_N_SECTOR";
   String zSTDIDSECTOR = zcomun3 + "STD_ID_SECTOR";
   String zSTDFINALJOB = zcomun3 + "STD_FINAL_JOB";
   String zSTDDEVELOPEDACTIVITIES = zcomun3 + "STD_DEVELOPED_ACTIVITIES";
   String zSTDDTSTART = zcomun3 + "STD_DT_START";
   String zSTDDTEND = zcomun3 + "STD_DT_END";
   String zSTDDTENDAUX = zcomun3 + "STD_DT_END_AUX";
   String zSTDORPROFBACKG = zcomun3 + "STD_OR_PROF_BACKG";
   
  
   String zSCONCERTIF = zcomun4 + "SCO_N_CERTIF"; 
   String zSCODTISSUE = zcomun4 + "SCO_DT_ISSUE";   
   String zSCODTEXPIRED = zcomun4 + "SCO_DT_EXPIRED";
   String zSCOIDISSUEENTIT = zcomun4 + "SCO_ID_ISSUE_ENTIT";
   String zSCONISSUEENTIT = zcomun4 + "SCO_N_ISSUE_ENTIT";  
   String zSCOORCERTIFLIC = zcomun4 + "SCO_OR_CERTIF_LIC"; 
   String zSCOIDCERTIFTYPE = zcomun4 + "SCO_ID_CERTIF_TYPE";
   
   String zSCONCOURSE = zcomun5 + "SCO_N_COURSE"; 
   String zSCODTSTARTC = zcomun5 + "SCO_DT_START";   
   String zSCODTENDC = zcomun5 + "SCO_DT_END";
   String zSCONUMBERHOURS = zcomun5 + "SCO_NUMBER_HOURS";
   String zSCONCENTER = zcomun5 + "SCO_N_CENTER";  
   String zSCOORCOMPBG = zcomun5 + "SCO_OR_COMP_BG"; 
      
  
   String zSCOIDASSOCIATION = zcomun6 + "SCO_ID_ASSOCIATION";
   String zSCONASSOCIATION = zcomun6 + "SCO_N_ASSOCIATION";
   String zSCOIDASSOCTYPE = zcomun6 + "SCO_ID_ASSOC_TYPE";
   String zSTDNASSOCTYPE = zcomun6 + "STD_N_ASSOC_TYPE";   
   String zSCONACTIVITY = zcomun6 + "SCO_N_ACTIVITY";
   String zSCONMPOSITION = zcomun6 + "SCO_NM_POSITION";
   String zSCODTSTART = zcomun6 + "SCO_DT_START";
   String zSCODTEND = zcomun6 + "SCO_DT_END";
   String zSCODTENDAUX = zcomun6 + "SCO_DT_END_AUX";
   String zSCOORASSOCMEMB = zcomun6 + "SCO_OR_ASSOC_MEMB";   
   
   String zSCOCKMOVINTER = zcomun7 + "SCO_CK_MOV_INTER";
   String zSCOCKMOVNAC = zcomun7 + "SCO_CK_MOV_NAC";
   String zSCOCKTRAVELDISPO = zcomun7 + "SCO_CK_TRAVEL_DISPO";
   
   String zSCOCKMOVINTERVAR = zcomun7 + "SCO_CK_MOV_INTER_VAR";
   String zSCOCKMOVNACVAR = zcomun7 + "SCO_CK_MOV_NAC_VAR";
   String zSCOCKTRAVELDISPOVAR = zcomun7 + "SCO_CK_TRAVEL_DISPO_VAR";
   
   String zSCOHOBBIES = zcomun7 + "SCO_HOBBIES";   
   String zSCOOTHERS = zcomun7 + "SCO_OTHERS";
   
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request); 
      m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
    } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef7%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zmeta4object%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zmeta4object%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zmeta4object%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zmeta4object%>" value="<%=zmove4%>"/></m4:move>
<m4:move><m4:param name="<%=zmeta4object%>" value="<%=zmove5%>"/></m4:move>
<m4:move><m4:param name="<%=zmeta4object%>" value="<%=zmove6%>"/></m4:move>
<m4:move><m4:param name="<%=zmeta4object%>" value="<%=zmove7%>"/></m4:move>
<%
// averiguo si tienen registros los nodos de Titulaciones (M4T_EMP_BACKGROUND), Idiomas (M4T_EMP_LANGUAGES) y Experiencia profesional (M4T_EMP_PREV_JOBS)

  int  zcounti  = 0;  
  int  zcount2i  = 0;
  int  zcount3i  = 0;
  int  zcount4i  = 0;
  int  zcount5i  = 0;
  int  zcount6i  = 0;
  int  zcount7i  = 0;     
  try {
      M4Operations m = new M4Operations(request);
      zcounti = m.getCountInClient("",zsubsesion,znodo);
      zcount2i = m.getCountInClient("",zsubsesion,znodo2);
      zcount3i = m.getCountInClient("",zsubsesion,znodo3);
      zcount4i = m.getCountInClient("",zsubsesion,znodo4);
      zcount5i = m.getCountInClient("",zsubsesion,znodo5);
      zcount6i = m.getCountInClient("",zsubsesion,znodo6);
      zcount7i = m.getCountInClient("",zsubsesion,znodo7);        
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
  String  zcount2v = String.valueOf(zcount2i);
  String  zcount3v = String.valueOf(zcount3i);
  String  zcount4v = String.valueOf(zcount4i);
  String  zcount5v = String.valueOf(zcount5i);
  String  zcount6v = String.valueOf(zcount6i);
  String  zcount7v = String.valueOf(zcount7i);      
%>
<table width="100%">
<tr>
  <td class="titulofuncional" colspan="2"><%=tfuncional%></td>
</tr>
<tr>
  <td><img alt="Vos donn&eacute;es professionnelles" src="/iconos/noname_mujer_profesional_ess_50_100.gif" width="100" height="100" /></td>
  <td><div class="fuentedescripcion"><%=dfuncional%></div>
  <ul class="listaenlace">
  <li><a class="enlacefuncional" title="<%=efuncional%>" href="sse_g1_p3_mod.jsp?estado=11"><%=efuncional%></a></li>
  <li><a class="enlacefuncional" title="<%=efuncional2%>" href="sse_g1_p3_mod2.jsp?estado=11"><%=efuncional2%></a></li>
  <li><a class="enlacefuncional" title="<%=efuncional3%>"  href="sse_g1_p3_mod3.jsp?estado=11"><%=efuncional3%></a></li>
  <li><a class="enlacefuncional" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod4Des")%>"  href="ssco_g1_p3_mod4.jsp?estado=11"><%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod4Des")%></a></li>
  <li><a class="enlacefuncional" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod5Des")%>"  href="ssco_g1_p3_mod5.jsp?estado=11"><%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod5Des")%></a></li>
  <li><a class="enlacefuncional" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod6Des")%>"  href="ssco_g1_p3_mod6.jsp?estado=11"><%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod6Des")%></a></li> 
  <li><a class="enlacefuncional" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod7Des")%>"  href="ssco_g1_p3_mod7.jsp?estado=11"><%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod7Des")%></a></li>
  </ul>
  </td>
</tr>
</table>
<%if (zcounti > 0) {
  String zposicions = "0";
  int zcontrol = 0;
  int zposicion =0;
%>
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
  <td>&nbsp;<%=etiqueta%></td><td>&nbsp;<%=etiqueta2%></td><td>&nbsp;<%=etiqueta3%></td>
  <td colspan="2" class="tablamenuright"><a href="sse_g1_p3_mod.jsp?estado=11" title="<%=etiqueta4%>"><img alt="<%=etiqueta4%>" src="/iconos/icono_flecha_azul1_ess_11_9.gif" width="11" height="9" onmouseover="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
<tr>
<%
  zposicions = m4lix;
  zposicion = Integer.valueOf(zposicions).intValue();
  zcontrol = zposicion%2;
  try {
    M4Operations m = new M4Operations(request);
    zcontrolpath = m.getItem("",zsubsesion,znodo,zposicions,"SCO_HTTP_PATH");
    zvalSTDNDIPLEVEL = m.getItem("",zsubsesion,znodo,zposicions,"STD_N_DIP_LEVEL");
    zvalSTDIDEDUCENTER =  m.getItem("",zsubsesion,znodo,zposicions,"STD_ID_EDU_CENTER");
    } catch(Exception e) {}
  if (zcontrol==0){%>
<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNDIPLOMA%>" htmlsafe="true"/>
<%if ((zvalSTDNDIPLEVEL==null)||(zvalSTDNDIPLEVEL.equals(""))){ %>  
</td>
<%}else{%>
&nbsp;(<m4:item m4name="<%=zSTDNDIPLEVEL%>" htmlsafe="true"/>)</td>
<%}%>
<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNEDUTYPE%>" htmlsafe="true"/>
<%if (zcontrolpath != "") { %>
  <td class="fuentevalor" colspan="2">&nbsp;<a href="<m4:item m4name="<%=zSCOHTTPPATH%>" htmlsafe="true"/>" title="<%=etiqueta5%>">
<%}else{%>
  <td class="fuentevalor" colspan="2">&nbsp;
<%}%>
<%if (zvalSTDIDEDUCENTER.equals("000")) { %>
  <m4:item m4name="<%=zSTDDESCEDUCENTER%>" htmlsafe="true"/></td>
<%}else{%>
  <m4:item m4name="<%=zSTDNEXTORG%>" htmlsafe="true"/></td>
<%}%>
<td class="fuentevalor" >
<a title ="<%=etiqueta6%>" href="javascript:m4submit('Titulaciones<%=zposicions%>');">
<img  alt="<%=etiqueta6%>" src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" align="right" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" />
</a></td>
<%}else{%>
<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDNDIPLOMA%>" htmlsafe="true"/>
<%if ((zvalSTDNDIPLEVEL==null)||(zvalSTDNDIPLEVEL.equals(""))){ %>  
</td>
<%}else{%>
&nbsp;(<m4:item m4name="<%=zSTDNDIPLEVEL%>" htmlsafe="true"/>)</td>
<%}%>
<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDNEDUTYPE%>" htmlsafe="true"/>
<%if (zcontrolpath != "") { %>
  <td class="fuentevalor2" colspan="2">&nbsp;<a href="<m4:item m4name="<%=zSCOHTTPPATH%>" htmlsafe="true"/>" title="<%=etiqueta5%>">
<%}else{%>
  <td class="fuentevalor2" colspan="2">&nbsp;
<%}%>
<%if (zvalSTDIDEDUCENTER.equals("000")) { %>
  <m4:item m4name="<%=zSTDDESCEDUCENTER%>" htmlsafe="true"/></td>
<%}else{%>
  <m4:item m4name="<%=zSTDNEXTORG%>" htmlsafe="true"/></td>
<%}%>
<td  class="fuentevalor2"><a title ="<%=etiqueta6%>" href="javascript:m4submit('Titulaciones<%=zposicions%>');">
<img  alt="Supprimer le dipl&ocirc;me" src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" align="right" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
<%}%>
<td>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="Titulaciones<%=zposicions%>" id="Titulaciones<%=zposicions%>">
<input type="hidden" id="TAG<%=zposicions%>" name="TAG" value="SSE_EMP_BACKGROUND" />
<input type="hidden" id="ACC<%=zposicions%>" name="ACC" value="ANULAR" />
<input type="hidden" id="NOD<%=zposicions%>" name="NOD" value="SSE_EMP_BACKGROUND" />
<input type="hidden" id="STD_ORD_ACD_BACK<%=zposicions%>" name="STD_ORD_ACD_BACK" value="<m4:item m4name="<%=zSTDORDACDBACK%>" htmlsafe="true"/>" />  
<input type="hidden" id="STD_ID_DIPLOMA<%=zposicions%>" name="STD_ID_DIPLOMA" value="<m4:item m4name="<%=zSTDIDDIPLOMA%>" htmlsafe="true"/>" /> 
<input type="hidden" id="STD_ID_EDU_SP<%=zposicions%>" name="STD_ID_EDU_SP" value="<m4:item m4name="<%=zSTDIDEDUSP%>" htmlsafe="true"/>" /> 
<input type="hidden" id="STD_ID_EDU_TYPE<%=zposicions%>" name="STD_ID_EDU_TYPE" value="<m4:item m4name="<%=zSTDIDEDUTYPE%>" htmlsafe="true"/>" /> 
<input type="hidden" id="STD_ID_EDU_CENTER<%=zposicions%>" name="STD_ID_EDU_CENTER" value="<m4:item m4name="<%=zSTDIDEDUCENTER%>" htmlsafe="true"/>" />
<input type="hidden" id="STD_DT_START<%=zposicions%>" name="STD_DT_START" value="<m4:item m4name="<%=zSTDDTSTARTACAD%>" htmlsafe="true"/>" />
<input type="hidden" id="STD_DT_EARNED_EXPE<%=zposicions%>" name="STD_DT_EARNED_EXPE" value="<m4:item m4name="<%=zSTDDTEARNEDEXPE%>" htmlsafe="true"/>" />
</form>
</td>
</tr>
</m4:loop>
</table>
<%}if (zcount2i > 0) {
  String zposicions2 = "0";
  int zcontrol2 = 0;
  int zposicion2 =0;
%>
<br/>
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
  <td>&nbsp;<%=etiqueta7%></td><td>&nbsp;<%=etiqueta8%></td>
  <td>&nbsp;<%=etiqueta9%></td><td>&nbsp;<%=etiqueta10%></td>
  <td colspan="2"class="tablamenuright"><a href="sse_g1_p3_mod2.jsp?estado=11" title="<%=etiqueta11%>"><img alt="<%=etiqueta11%>" src="/iconos/icono_flecha_azul1_ess_11_9.gif" width="11" height="9" onmouseover="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcount2v).intValue()-1).toString()%>">
<tr>
<%
  zposicions2 = m4lix;
  zposicion2 = Integer.valueOf(zposicions2).intValue();
  zcontrol2 = zposicion2%2;
if (zcontrol2==0){%>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNLANGUAGE%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNLISTENLEVEL%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNSPEAKLEVEL%>" htmlsafe="true"/></td>
  <td class="fuentevalor" colspan="2">&nbsp;<m4:item m4name="<%=zSTDNWRITELEVEL%>" htmlsafe="true"/></td>
  <td class="fuentevalor"><a title ="<%=etiqueta12%>" href="javascript:m4submit('Idiomas<%=zposicions2%>');">
  <img alt="<%=etiqueta12%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" align="right" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>
  </td>
<%}else{%>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDNLANGUAGE%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDNLISTENLEVEL%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDNSPEAKLEVEL%>" htmlsafe="true"/></td>
  <td class="fuentevalor2" colspan="2">&nbsp;<m4:item m4name="<%=zSTDNWRITELEVEL%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">
  <a title ="<%=etiqueta12%>" href="javascript:m4submit('Idiomas<%=zposicions2%>');">
  <img alt="<%=etiqueta12%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" align="right" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
<%}%>
<td>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="Idiomas<%=zposicions2%>" id="Idiomas<%=zposicions2%>">
<input type="hidden" id="TAGIDI<%=zposicions2%>" name="TAG" value="SSE_EMP_LANGUAGES" />
<input type="hidden" id="ACCIDI<%=zposicions2%>" name="ACC" value="ANULAR" />
<input type="hidden" id="NODIDI<%=zposicions2%>" name="NOD" value="SSE_EMP_LANGUAGES"  />
<input type="hidden" id="STD_ORD_ACD_BACKIDI<%=zposicions2%>" name="STD_ID_LANGUAGE" value="<m4:item m4name="<%=zSTDIDLANGUAGE%>" htmlsafe="true"/>" /> 
<input type="hidden" id="STD_ID_DIPLOMAIDI<%=zposicions2%>" name="STD_ID_LISTEN_LEVEL" value="<m4:item m4name="<%=zSTDIDLISTENLEVEL%>" htmlsafe="true"/>" />  
<input type="hidden" id="STD_ID_EDU_SPIDI<%=zposicions2%>" name="STD_ID_SPEAK_LEVEL" value="<m4:item m4name="<%=zSTDIDSPEAKLEVEL%>" htmlsafe="true"/>" /> 
<input type="hidden" id="STD_ID_EDU_TYPEIDI<%=zposicions2%>" name="STD_ID_WRITE_LEVEL" value="<m4:item m4name="<%=zSTDIDWRITELEVEL%>" htmlsafe="true"/>" /> 
</form>
</td>
</tr>
</m4:loop>

</table>
<%}if (zcount3i > 0) {
String zposicions3 = "0";
int zcontrol3 = 0;
int zposicion3 =0;
%>
<br/>
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
  <td>&nbsp;&nbsp;&nbsp;&nbsp;<%=etiqueta13%></td>
  <td>&nbsp;<%=etiqueta14%></td>
  <td>&nbsp;<%=etiqueta15%></td>
  <td>&nbsp;<%=etiqueta16%></td>
  <td>&nbsp;<m4:label m4name="<%=zSTDFINALJOB%>"/></td> 

  <td colspan="2"class="tablamenuright"><a href="sse_g1_p3_mod3.jsp?estado=11" title="<%=etiqueta18%>"><img alt="<%=etiqueta18%>" src="/iconos/icono_flecha_azul1_ess_11_9.gif" width="11" height="9" onmouseover="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcount3v).intValue()-1).toString()%>">
<tr>
<%
  zposicions3 = m4lix;
  zposicion3 = Integer.valueOf(zposicions3).intValue();
  zcontrol3 = zposicion3%2;
if (zcontrol3==0){%>
  <td class="fuentevalor">  
    <a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('STD_DEVELOPED_ACTIVITIESEXP<%=zposicions3%>','Experiencia<%=zposicions3%>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>   
    &nbsp;<m4:item m4name="<%=zSTDDTSTART%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDDTENDAUX%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDEMPLOYER%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNSECTOR%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDFINALJOB%>" htmlsafe="true"/></td>       
  <td class="fuentebotonright">
  <a title="<%=etiqueta19%>" href="javascript:m4submit('Experiencia<%=zposicions3%>');">
  
  <img alt="<%=etiqueta19%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
  </a></td>
<%}else{%>

  <td class="fuentevalor2">
    <a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('STD_DEVELOPED_ACTIVITIESEXP<%=zposicions3%>','Experiencia<%=zposicions3%>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>   
    &nbsp;<m4:item m4name="<%=zSTDDTSTART%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDDTENDAUX%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDEMPLOYER%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDNSECTOR%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDFINALJOB%>" htmlsafe="true"/></td> 
  <td class="fuentebotonright2">
  <a title="<%=etiqueta19%>" href="javascript:m4submit('Experiencia<%=zposicions3%>');">
  <img alt="<%=etiqueta19%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
  </a></td>

<%}%>
<td>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="Experiencia<%=zposicions3%>" id="Experiencia<%=zposicions3%>">
<input type="hidden" id="TAGEXP<%=zposicions3%>" name="TAG" value="SSE_EMP_PREV_JOBS" />
<input type="hidden" id="ACCEXP<%=zposicions3%>" name="ACC" value="ANULAR" />
<input type="hidden" id="NODEXP<%=zposicions3%>" name="NOD" value="SSE_EMP_PREV_JOBS"  />
<input type="hidden" id="STD_EMPLOYEREXP<%=zposicions3%>" name="STD_EMPLOYER" value="<m4:item m4name="<%=zSTDEMPLOYER%>" htmlsafe="true"/>" />  
<input type="hidden" id="STD_DEVELOPED_ACTIVITIESEXP<%=zposicions3%>" name="STD_DEVELOPED_ACTIVITIES" value="<m4:item m4name="<%=zSTDDEVELOPEDACTIVITIES%>" htmlsafe="true"/>" /> 
<input type="hidden" id="STD_DT_STARTEXP<%=zposicions3%>" name="STD_DT_START" value="<m4:item m4name="<%=zSTDDTSTART%>" htmlsafe="true"/>" /> 
<input type="hidden" id="STD_ID_SECTOREXP<%=zposicions3%>" name="STD_ID_SECTOR" value="<m4:item m4name="<%=zSTDIDSECTOR%>" htmlsafe="true"/>" />  
<input type="hidden" id="STD_DT_ENDEXP<%=zposicions3%>" name="STD_DT_END" value="<m4:item m4name="<%=zSTDDTEND%>" htmlsafe="true"/>" /> 
<input type="hidden" id="STD_OR_PROF_BACKGEXP<%=zposicions3%>" name="STD_OR_PROF_BACKG" value="<m4:item m4name="<%=zSTDORPROFBACKG%>" htmlsafe="true"/>" /> 
</form>
</td>
</tr>
</m4:loop>
</table>


<%}if (zcount4i > 0) {
String zposicions4 = "0";
int zcontrol4 = 0;
int zposicion4 =0;
%>
<br/>

<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
  <td>&nbsp;<m4:label m4name="<%=zSCONCERTIF%>" htmlsafe="true"/></td>
  <td>&nbsp;<m4:label m4name="<%=zSCODTISSUE%>" htmlsafe="true"/></td>
  <td>&nbsp;<m4:label m4name="<%=zSCODTEXPIRED%>" htmlsafe="true"/></td>
  <td>&nbsp;<m4:label m4name="<%=zSCONISSUEENTIT%>" htmlsafe="true"/></td>
  <td colspan="1"class="tablamenuright"><a href="sse_g1_p3_mod4.jsp?estado=11" title="<%=Tran.getProperty("Button.Modify")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod4Des")%>"><img alt="<%=Tran.getProperty("Button.Modify")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod4Des")%>" src="/iconos/icono_flecha_azul1_ess_11_9.gif" width="11" height="9" onmouseover="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcount4v).intValue()-1).toString()%>">
<tr>
<%
  zposicions4 = m4lix;
  zposicion4 = Integer.valueOf(zposicions4).intValue();
  zcontrol4 = zposicion4%2;
if (zcontrol4==0){%>


  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCONCERTIF%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCODTISSUE%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCODTEXPIRED%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCONISSUEENTIT%>" htmlsafe="true"/></td> 
  <td class="fuentebotonright">
  <a title="<%=Tran.getProperty("Button.Borrar")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod4Des")%>" href="javascript:m4submit('Certificados<%=zposicions4%>');">  
  <img alt="<%=Tran.getProperty("Button.Borrar")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod4Des")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
  </a></td>
<%}else{%>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCONCERTIF%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCODTISSUE%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCODTEXPIRED%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCONISSUEENTIT%>" htmlsafe="true"/></td>  
  <td class="fuentebotonright2">
  <a title="<%=Tran.getProperty("Button.Borrar")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod4Des")%>" href="javascript:m4submit('Certificados<%=zposicions4%>');">
  <img alt="<%=Tran.getProperty("Button.Borrar")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod4Des")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
  </a></td>
<%}%>
<td>
  
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="get" name="Certificados<%=zposicions4%>" id="Certificados<%=zposicions4%>">
<input type="hidden" id="TAGCER<%=zposicions4%>" name="TAG" value="SSE_CERTIFICATION_LICEN" />
<input type="hidden" id="ACCCER<%=zposicions4%>" name="ACC" value="ANULAR" />
<input type="hidden" id="NODCER<%=zposicions4%>" name="NOD" value="SSE_CERTIFICATION_LICEN"  />
<input type="hidden" id="SCO_N_CERTIFCER<%=zposicions4%>" name="SCO_N_CERTIF" value="<m4:item m4name="<%=zSCONCERTIF%>" htmlsafe="true"/>" /> 
<input type="hidden" id="SCO_DT_ISSUECER<%=zposicions4%>" name="SCO_DT_ISSUE" value="<m4:item m4name="<%=zSCODTISSUE%>" htmlsafe="true"/>" /> 
<input type="hidden" id="SCO_DT_EXPIREDCER<%=zposicions4%>" name="SCO_DT_EXPIRED" value="<m4:item m4name="<%=zSCODTEXPIRED%>" htmlsafe="true"/>" /> 
<input type="hidden" id="SCO_ID_ISSUE_ENTITCER<%=zposicions4%>" name="SCO_ID_ISSUE_ENTIT" value="<m4:item m4name="<%=zSCOIDISSUEENTIT%>" htmlsafe="true"/>" />
<input type="hidden" id="SCO_OR_CERTIF_LICCER<%=zposicions4%>" name="SCO_OR_CERTIF_LIC" value="<m4:item m4name="<%=zSCOORCERTIFLIC%>" htmlsafe="true"/>" />
<input type="hidden" id="SCO_ID_CERTIF_TYPECER<%=zposicions4%>" name="SCO_ID_CERTIF_TYPE" value="<m4:item m4name="<%=zSCOIDCERTIFTYPE%>" htmlsafe="true"/>" />

</form>
</td>
</tr>
</m4:loop>
</table>




<%}if (zcount5i > 0) {
String zposicions5 = "0";
int zcontrol5 = 0;
int zposicion5 = 0;
%>
<br/>
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
  <td>&nbsp;<m4:label m4name="<%=zSCONCOURSE%>" htmlsafe="true"/></td>
  <td>&nbsp;<m4:label m4name="<%=zSCODTSTARTC%>" htmlsafe="true"/></td>
  <td>&nbsp;<m4:label m4name="<%=zSCODTENDC%>" htmlsafe="true"/></td>
  <td>&nbsp;<m4:label m4name="<%=zSCONUMBERHOURS%>" htmlsafe="true"/></td>
  <td>&nbsp;<m4:label m4name="<%=zSCONCENTER%>" htmlsafe="true"/></td>
  <td colspan="1"class="tablamenuright"><a href="sse_g1_p3_mod5.jsp?estado=11" title="<%=Tran.getProperty("Button.Modify")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod5Des")%>"><img alt="<%=Tran.getProperty("Button.Modify")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod5Des")%>" src="/iconos/icono_flecha_azul1_ess_11_9.gif" width="11" height="9" onmouseover="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcount5v).intValue()-1).toString()%>">
<tr>
<%
  zposicions5 = m4lix;
  zposicion5 = Integer.valueOf(zposicions5).intValue();
  zcontrol5 = zposicion5%2;
if (zcontrol5==0){%>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCONCOURSE%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCODTSTARTC%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCODTENDC%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCONUMBERHOURS%>" htmlsafe="true"/></td> 
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCONCENTER%>" htmlsafe="true"/></td>
  <td class="fuentebotonright">
  <a title="<%=Tran.getProperty("Button.Borrar")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod5Des")%>" href="javascript:m4submit('Otros cursos<%=zposicions5%>');">  
  <img alt="<%=Tran.getProperty("Button.Borrar")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod5Des")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
  </a></td>
<%}else{%>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCONCOURSE%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCODTSTARTC%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCODTENDC%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCONUMBERHOURS%>" htmlsafe="true"/></td>  
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCONCENTER%>" htmlsafe="true"/></td>
  <td class="fuentebotonright2">
  <a title="<%=Tran.getProperty("Button.Borrar")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod5Des")%>" href="javascript:m4submit('Otros cursos<%=zposicions5%>');">
  <img alt="<%=Tran.getProperty("Button.Borrar")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod5Des")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
  </a></td>
<%}%>
<td>
  
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="Otros cursos<%=zposicions5%>" id="Otros cursos<%=zposicions5%>">
<input type="hidden" id="TAGCER<%=zposicions5%>" name="TAG" value="SSE_HR_COMP_BACKGROUND" />
<input type="hidden" id="ACCCER<%=zposicions5%>" name="ACC" value="ANULAR" />
<input type="hidden" id="NODCER<%=zposicions5%>" name="NOD" value="SSE_HR_COMP_BACKGROUND"  />
<input type="hidden" id="SCO_N_COURSECUR<%=zposicions5%>" name="SCO_N_COURSE" value="<m4:item m4name="<%=zSCONCOURSE%>" htmlsafe="true"/>" /> 
<input type="hidden" id="SCO_DT_STARTCUR<%=zposicions5%>" name="SCO_DT_START" value="<m4:item m4name="<%=zSCODTSTARTC%>" htmlsafe="true"/>" />  
<input type="hidden" id="SCO_DT_ENDCUR<%=zposicions5%>" name="SCO_DT_END" value="<m4:item m4name="<%=zSCODTENDC%>" htmlsafe="true"/>" />  
<input type="hidden" id="SCO_NUMBER_HOURSCUR<%=zposicions5%>" name="SCO_NUMBER_HOURS" value="<m4:item m4name="<%=zSCONUMBERHOURS%>" htmlsafe="true"/>" />
<input type="hidden" id="SCO_N_CENTERCUR<%=zposicions5%>" name="SCO_N_CENTER" value="<m4:item m4name="<%=zSCONCENTER%>" htmlsafe="true"/>" />

</form>
</td>
</tr>
</m4:loop>
</table>






<%}if (zcount6i > 0) {
String zposicions6 = "0";
int zcontrol6 = 0;
int zposicion6 =0;
%>
<br/>
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
  <td>&nbsp;<m4:label m4name="<%=zSCONASSOCIATION%>" htmlsafe="true"/></td>
  <td>&nbsp;<m4:label m4name="<%=zSCODTSTART%>" htmlsafe="true"/></td>
  <td>&nbsp;<m4:label m4name="<%=zSCODTEND%>" htmlsafe="true"/></td>
  <td>&nbsp;<m4:label m4name="<%=zSTDNASSOCTYPE%>" htmlsafe="true"/></td>
  <td>&nbsp;<m4:label m4name="<%=zSCONACTIVITY%>" htmlsafe="true"/></td>
  <td>&nbsp;<m4:label m4name="<%=zSCONMPOSITION%>" htmlsafe="true"/></td>   
  <td colspan="1"class="tablamenuright"><a href="ssco_g1_p3_mod6.jsp?estado=11" title="<%=Tran.getProperty("Button.Modify")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod6Des")%>"><img alt="<%=Tran.getProperty("Button.Modify")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod6Des")%>" src="/iconos/icono_flecha_azul1_ess_11_9.gif" width="11" height="9" onmouseover="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"/></a></td>  
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcount6v).intValue()-1).toString()%>">
<tr>
<%
  zposicions6 = m4lix;
  zposicion6 = Integer.valueOf(zposicions6).intValue();
  zcontrol6 = zposicion6%2; 
if (zcontrol6==0){%>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCONASSOCIATION%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCODTSTART%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCODTEND%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNASSOCTYPE%>" htmlsafe="true"/></td>  
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCONACTIVITY%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCONMPOSITION%>" htmlsafe="true"/></td>  
  <td class="fuentebotonright">
  <a title="<%=Tran.getProperty("Button.Borrar")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod6Des")%>" href="javascript:m4submit('Asociaciones<%=zposicions6%>');">  
  <img alt="<%=Tran.getProperty("Button.Borrar")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod6Des")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
  </a></td>
<%}else{%>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCONASSOCIATION%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCODTSTART%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCODTEND%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDNASSOCTYPE%>" htmlsafe="true"/></td> 
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCONACTIVITY%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCONMPOSITION%>" htmlsafe="true"/></td> 
  <td class="fuentebotonright2">
  <a title="<%=Tran.getProperty("Button.Borrar")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod6Des")%>" href="javascript:m4submit('Asociaciones<%=zposicions6%>');">
  <img alt="<%=Tran.getProperty("Button.Borrar")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod6Des")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
  </a></td>
<%}%>
<td>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="Asociaciones<%=zposicions6%>" id="Asociaciones<%=zposicions6%>">
<input type="hidden" id="TAGEXP<%=zposicions6%>" name="TAG" value="SSE_ASSOCIATION_ME" />
<input type="hidden" id="ACCEXP<%=zposicions6%>" name="ACC" value="ANULAR" />
<input type="hidden" id="NODEXP<%=zposicions6%>" name="NOD" value="SSE_ASSOCIATION_ME"  />
<input type="hidden" id="SCO_ID_ASSOCIATIONEXP<%=zposicions6%>" name="SCO_ID_ASSOCIATION" value="<m4:item m4name="<%=zSCOIDASSOCIATION%>" htmlsafe="true"/>" /> 
<input type="hidden" id="SCO_ID_ASSOC_TYPEEXP<%=zposicions6%>" name="SCO_ID_ASSOC_TYPE" value="<m4:item m4name="<%=zSCOIDASSOCTYPE%>" htmlsafe="true"/>" /> 
<input type="hidden" id="SCO_DT_STARTEXP<%=zposicions6%>" name="SCO_DT_START" value="<m4:item m4name="<%=zSCODTSTART%>" htmlsafe="true"/>" /> 
<input type="hidden" id="SCO_N_ACTIVITYEXP<%=zposicions6%>" name="SCO_N_ACTIVITY" value="<m4:item m4name="<%=zSCONACTIVITY%>" htmlsafe="true"/>" /> 
<input type="hidden" id="SCO_NM_POSITION<%=zposicions6%>" name="SCO_NM_POSITION" value="<m4:item m4name="<%=zSCONMPOSITION%>" htmlsafe="true"/>" />
<input type="hidden" id="SCO_DT_ENDEXP<%=zposicions6%>" name="SCO_DT_END" value="<m4:item m4name="<%=zSCODTEND%>" htmlsafe="true"/>" />
<input type="hidden" id="SCO_OR_ASSOC_MEMBEXP<%=zposicions6%>" name="SCO_OR_ASSOC_MEMB" value="<m4:item m4name="<%=zSCOORASSOCMEMB%>" htmlsafe="true"/>" />   
</form>
</td>
</tr>
</m4:loop>
</table>


<%}if (zcount7i > 0) {
String zposicions7 = "0";
int zcontrol7 = 0;
int zposicion7 =0;
%>
<br/>
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">   
  <td colspan="8">&nbsp<%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod7Des")%></td>               
  <td colspan="1"class="tablamenuright"><a href="ssco_g1_p3_mod7.jsp?estado=11" title="<%=Tran.getProperty("Button.Modify")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod7Des")%>"><img alt="<%=Tran.getProperty("Button.Modify")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod7Des")%>" src="/iconos/icono_flecha_azul1_ess_11_9.gif" width="11" height="9" onmouseover="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"/></a></td>  
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcount7v).intValue()-1).toString()%>">
<%
  zposicions7 = m4lix;
  zposicion7 = Integer.valueOf(zposicions7).intValue();
  zcontrol7 = zposicion7%2;%>   
<tr>
  <td class="fuentevalor" >&nbsp;<m4:label m4name="<%=zSCOCKMOVINTER%>" htmlsafe="true"/></td>  
  <td class="fuentevalor" colspan="8">&nbsp;<m4:item m4name="<%=zSCOCKMOVINTERVAR%>" htmlsafe="true"/></td>

</tr>
<tr>  
  <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zSCOCKMOVNAC%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCOCKMOVNACVAR%>" htmlsafe="true"/></td>

  <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zSCOOTHERS%>" htmlsafe="true"/></td>
  <td class="fuentevalor" colspan="8">&nbsp;<m4:item m4name="<%=zSCOOTHERS%>" htmlsafe="true"/></td>
</tr>
<tr>
  <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zSCOCKTRAVELDISPO%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCOCKTRAVELDISPOVAR%>" htmlsafe="true"/></td>

  <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zSCOHOBBIES%>" htmlsafe="true"/></td>
  <td class="fuentevalor" colspan="8">&nbsp;<m4:item m4name="<%=zSCOHOBBIES%>" htmlsafe="true"/></td> 
</tr>
<tr>
      
  <td class="fuentebotonright" colspan="9">
  <a title="<%=Tran.getProperty("Button.Borrar")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod7Des")%> "  href="javascript:m4submit('infocomp<%=zposicions7%>');">  
  <img alt="<%=Tran.getProperty("Button.Borrar")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod7Des")%> "   src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
  </a></td>
</tr> 
<td>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="infocomp<%=zposicions7%>" id="infocomp<%=zposicions7%>">
<input type="hidden" id="TAGEXP<%=zposicions7%>" name="TAG" value="SSE_HR_COMP_INFORMATION" />
<input type="hidden" id="ACCEXP<%=zposicions7%>" name="ACC" value="ANULAR" />
<input type="hidden" id="NODEXP<%=zposicions7%>" name="NOD" value="SSE_HR_COMP_INFORMATION"  />
<input type="hidden" id="SCO_CK_MOV_INTEREXP<%=zposicions7%>" name="SCO_CK_MOV_INTER" value="<m4:item m4name="<%=zSCOCKMOVINTER%>" htmlsafe="true"/>" />  
<input type="hidden" id="SCO_CK_MOV_NACEXP<%=zposicions7%>" name="SCO_CK_MOV_NAC" value="<m4:item m4name="<%=zSCOCKMOVNAC%>" htmlsafe="true"/>" />  
<input type="hidden" id="SCO_CK_TRAVEL_DISPOEXP<%=zposicions7%>" name="SCO_CK_TRAVEL_DISPO" value="<m4:item m4name="<%=zSCOCKTRAVELDISPO%>" htmlsafe="true"/>" /> 
<input type="hidden" id="SCO_HOBBIESEXP<%=zposicions7%>" name="SCO_HOBBIES" value="<m4:item m4name="<%=zSCOHOBBIES%>" htmlsafe="true"/>" /> 
<input type="hidden" id="SCO_OTHERS<%=zposicions7%>" name="SCO_OTHERS" value="<m4:item m4name="<%=zSCOOTHERS%>" htmlsafe="true"/>" />   
</form>
</td>
</tr>
</m4:loop>
</table>


<%}%> 
<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>

