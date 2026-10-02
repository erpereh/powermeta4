<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Os meus dados pessoais</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/mootools.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/functions_persdata.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/meta4ajax.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/functions_validate.js"></script>
<link href="/css/style_persdata.css" type="text/css" rel="stylesheet"/>
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>
<%@ include file="../../sse_g1/sse_g1_trans.jsp" %>
<script type="text/javascript" language="Javascript1.2"src="/library/openwin.js"></script>
<%
  M4SessionManager m4Session = M4Context.getSession(request);
  String sPathTempMap = m4Session.getPathTempMapping();
  String sPathTempURI = m4Session.getUserTempURI() + '/';
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
</head>
<body>
<iframe id='iframeUpload' name='iframeUpload' style='display:none'></iframe>
<iframe id='iframeTempUpload' name='iframeTempUpload' style='display:none'></iframe>
<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_ADDRESS";
   String zmeta4object = "SSE_ADDRESS";
   String znodo = "M4T_ADDRESS";
   String znodo2 = "M4T_PHONE_FAX";
   String znodo3 = "M4T_E_MAIL";
   String znodo4 = "M4T_ADDRESS_OTROS";
   String znodo5 = "M4T_HT_MAR_STAT";
   String znodo6 = "M4T_HOME_PAGE";
   String znodo7 = "M4T_OTH_CONTACT_FORMS";   
   
   String ztipocarga = "M4T";   
  
  // No se modifica en general.
   
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";

   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";  
   String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;
   
   String zlectura = zsubsesion + "!" + znodo2;
   String zraiz2 = zsubsesion + "!" + znodo2 + ".";

   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zmove3 =znodo3 + ":" + znodo3 + "[FIRST]"; 
   String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3; 
   
   String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
   String zmove4 = znodo4 + ":" +znodo4 + "[FIRST]"; 
   String ziterator4 = znodo4 + ":" + zsubsesion + "!" + znodo4; 
   
   String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
   String zmove5 = znodo5 + ":" +znodo5 + "[FIRST]"; 
   String ziterator5 = znodo5 + ":" + zsubsesion + "!" + znodo5; 

   String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";
   String zmove6 = znodo6 + ":" +znodo6 + "[FIRST]"; 
   String ziterator6 = znodo6 + ":" + zsubsesion + "!" + znodo6; 
   String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";
   String zmove7 = znodo7 + ":" +znodo7 + "[FIRST]"; 
   String ziterator7 = znodo7 + ":" + zsubsesion + "!" + znodo7;   

// Metodo de carga del Meta4Object generico
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
 
   String zSTDADDRESSLINE1 = zraiz + "STD_ADDRESS_LINE_1";
   String zSTDADDRESSLINE2 = zraiz + "STD_ADDRESS_LINE_2";
   String zSTDADDRESSLINE3 = zraiz + "STD_ADDRESS_LINE_3";
   String zSTDADDRESSLINE4 = zraiz + "STD_ADDRESS_LINE_4";
  
   String zSSPDISTRITPOSTAL = zraiz + "SSP_DISTRIT_POSTAL"; 
   String zSTDZIPCODE = zraiz + "STD_ZIP_CODE"; 
   String zSTDNGEOPLACE = zraiz + "STD_N_GEO_PLACE"; 
   String zSTDNSUBGEODIV = zraiz + "STD_N_SUB_GEO_DIV"; 
   String zSTDNGEODIV = zraiz + "STD_N_GEO_DIV";    
   String zSTDNCOUNTRY = zraiz + "STD_N_COUNTRY";
   
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   String zSTDPHONE =zcomun2 + "STD_PHONE";
   String zSTDNLINETYPE =zcomun2 +  "STD_N_LINE_TYPE";   
   String zSTDNLOCATIONTYPE = zcomun2 + "STD_N_LOCATION_TYPE";
   String zSTDIDLOCATIONTYPE = zcomun2 + "STD_ID_LOCATION_TYPE";
   String zSTDIDLINETYPE = zcomun2 + "STD_ID_LINE_TYPE"; 
   String zSTDINTCOUNTRYCODE = zcomun2 + "STD_INT_COUNTRY_CODE";
   String zSTDINTREGIONCODE = zcomun2 + "STD_INT_REGION_CODE";
   String zSTDNATREGIONCODE = zcomun2 + "STD_NAT_REGION_CODE"; 

       
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
   String zSTDEMAIL =  zcomun3 +"STD_EMAIL";
   String zSTDNLOCATIONTYPE3 = zcomun3 +"STD_N_LOCATION_TYPE";
   String zSTDIDLOCATIONTYPE3 = zcomun3 +"STD_ID_LOCATION_TYPE"; 
   
   String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&VAR.m4lix]" + ".";

   String zSTDADDRESSLINE14 =  zcomun4  +"STD_ADDRESS_LINE_1";
   String zSTDADDRESSLINE24 =  zcomun4  +"STD_ADDRESS_LINE_2"; 
   String zSTDADDRESSLINE34 =  zcomun4  +"STD_ADDRESS_LINE_3"; 
   String zSTDADDRESSLINE44 =  zcomun4  +"STD_ADDRESS_LINE_4";  

   String zSSPDISTRITPOSTAL4 =  zcomun4  + "SSP_DISTRIT_POSTAL"; 
   String zSTDZIPCODE4 =  zcomun4  + "STD_ZIP_CODE"; 
   String zSTDNGEOPLACE4 =  zcomun4  + "STD_N_GEO_PLACE"; 
   String zSTDNSUBGEODIV4 =  zcomun4  +"STD_N_SUB_GEO_DIV"; 
   String zSTDNGEODIV4 =  zcomun4  + "STD_N_GEO_DIV";    
   String zSTDNCOUNTRY4 = zcomun4  + "STD_N_COUNTRY";
   String zSTDIDCOUNTRY4 = zcomun4  + "STD_ID_COUNTRY";
   String zSTDIDGEODIV4 = zcomun4  + "STD_ID_GEO_DIV";
   String zSTDIDGEOPLACE4 = zcomun4  + "STD_ID_GEO_PLACE";
   String zSTDIDSUBGEODIV4 = zcomun4  + "STD_ID_SUB_GEO_DIV";
   String zSTDNLOCATIONTYPE4 =  zcomun4  +"STD_N_LOCATION_TYPE";
   String zSTDIDLOCATIONTYPE4 = zcomun4 +"STD_ID_LOCATION_TYPE";                

   String znamenodo5  = znodo5 + ":" + zsubsesion  + "!" + znodo5;
   String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&VAR.m4lix]" + ".";
   String zSTDIDMARITALSTAT =  zcomun5 + "STD_ID_MARITAL_STAT";
   String zSTDNMARITALSTAT =  zcomun5 + "STD_N_MARITAL_STAT";
   String zSTDDTSTART = zcomun5 + "STD_DT_START";
   String zSTDDTEND = zcomun5 + "STD_DT_END";

   String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&VAR.m4lix]" + ".";
   String zSCOHOMEPAGE =  zcomun6 + "SCO_HOME_PAGE";
   String znamenodo7  = znodo7 + ":" + zsubsesion  + "!" + znodo7;
   String zcomun7 = znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&VAR.m4lix]" + ".";
   String zSCOCONTACTO =  zcomun7 +"SCO_CONTACTO";
   String zSCONCONTACTTYPE = zcomun7 +"SCO_N_CONTACT_TYPE";
   String zSCOIDCONTACTTYPE = zcomun7 +"SCO_ID_CONTACT_TYPE";    
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request); 
      m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");

    } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo6%>"><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo7%>"><m4:param name="m4name0" value="<%=zoutputdef7%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove5%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove6%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove7%>"/></m4:move>
<%
int  zcounti2  = 0; 
int  zcounti3  = 0;
int  zcounti4  = 0;
int  zcounti5  = 0;
int  zcounti6  = 0;
int  zcounti7  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);
    zcounti3 = m.getCountInClient(znodo3,zsubsesion,znodo3);
    zcounti4 = m.getCountInClient(znodo4,zsubsesion,znodo4);
    zcounti5 = m.getCountInClient(znodo5,zsubsesion,znodo5);
    zcounti6 = m.getCountInClient(znodo6,zsubsesion,znodo6);
    zcounti7 = m.getCountInClient(znodo7,zsubsesion,znodo7);  
} catch(Exception e) {}
String  zcountv2 = String.valueOf(zcounti2);
String  zcountv3 = String.valueOf(zcounti3);
String  zcountv4 = String.valueOf(zcounti4);
String  zcountv5 = String.valueOf(zcounti5);
String  zcountv6 = String.valueOf(zcounti6);
String  zcountv7 = String.valueOf(zcounti7);
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="3">Os meus dados pessoais</td></tr>
<tr>
  <td><img alt="Dados pessoais"title="Dados pessoais" src="/iconos/noname_mujer_53_100.gif" width="100" height="100" /></td>
  <td>
  <div class="descripcionfuncional">Consultar ou modificar os seus dados pessoais.</div>
  <ul class="listaenlace">
  <li><a class="enlacefuncional"title="Morada fiscal"tabindex="1" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11">Morada fiscal</a></li>
  <li><a class="enlacefuncional"title="N&uacute;meros de telefone" tabindex="2" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod3.jsp?estado=11">N&uacute;meros de telefone</a></li>
  <li><a class="enlacefuncional"title="E-mail"tabindex="3" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod2.jsp?estado=11">E-mail</a></li>
  <li><a class="enlacefuncional"title="Outras moradas"tabindex="4"href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11">Outras moradas</a></li>
  <li><a class="enlacefuncional" tabindex="5" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod5Des")%>" href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod5.jsp?estado=11"><%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod5Des")%></a></li>
  <li><a class="enlacefuncional" tabindex="6" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod6Des")%>" href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod6.jsp?estado=11"><%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod6Des")%></a></li>
  <li><a class="enlacefuncional" tabindex="7" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod7Des")%>" href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod7.jsp?estado=11"><%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod7Des")%></a></li>  
  </ul>
  </td>
  <td id='tdPhoto' m4path='<%=sPathTempMap%>' m4pathURI='<%=sPathTempURI%>'>
    <div style='float:right; width:160px; margin: 0px 10px 0px 0px;'>
      <div style='float:left; margin:0px 10px 0px 0px;'>
        <img id='imgPhoto' style='width:0px; height:0px;' src="">
      </div>   
      <div style='margin:0px 0px 5px 0px; cursor:pointer;'>
        <img id='modPhoto' style='width:0px; height:0px;' src="">
      </div>   
      <div style='float:left; cursor:pointer;'>
        <img id='delPhoto' style='width:0px; height:0px;' src="">
      </div>
    </div> 
  </td>
</tr>
</table>
<table class="tablaestados" width="100%" cellspacing="0" border="0">
<tr class="tablaestadosceldatitulo">
  <td colspan="5">Morada fiscal</td>
  <td class="tablamenuright"><a tabindex="7" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11" title="Morada fiscal"><img alt="Morada fiscal" src="/iconos/icono_flecha_azul1_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>

<tr>

  <td class="fuentecampo">&nbsp;Morada</td>
  <td class="fuentevalor"colspan="2">&nbsp;<m4:item m4name="<%=zSTDADDRESSLINE1%>" htmlsafe="true"/></td>

  <td class="fuentecampo">&nbsp;Linha morada 2</td>
  <td class="fuentevalor" colspan="2">&nbsp;<m4:item m4name="<%=zSTDADDRESSLINE2%>" htmlsafe="true"/></td>

</tr>
<tr>

  <td class="fuentecampo">&nbsp;Linha morada 3</td>
  <td class="fuentevalor"colspan="2"> &nbsp;<m4:item m4name="<%=zSTDADDRESSLINE3%>" htmlsafe="true"/></td>

  <td class="fuentecampo">&nbsp;Linha morada 4</td>
  <td class="fuentevalor"colspan="2"> &nbsp;<m4:item m4name="<%=zSTDADDRESSLINE4%>" htmlsafe="true"/></td>

</tr>

<tr>

  <td class="fuentecampo">&nbsp;Pa&iacute;s</td><td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSTDNCOUNTRY%>" htmlsafe="true"/></td>
  <td class="fuentecampo">Distrito</td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNGEODIV%>" htmlsafe="true"/></td>
  <td class="fuentecampo">Concelho</td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNSUBGEODIV%>" htmlsafe="true"/></td>

</tr>
<tr>

  <td class="fuentecampo">&nbsp;C&oacute;d. postal</td><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDZIPCODE%>" htmlsafe="true"/></td>
  <td class="fuentecampo">Freguesia</td><td class="fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSTDNGEOPLACE%>" htmlsafe="true"/></td>

</tr>
</table>
<br />
<% 
if (zcounti2 > 0) {
  String zposicions2 = "0";
  int zcontrol2 = 0;
  int zposicion2 =0;
%>
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
  <td>&nbsp;<m4:label m4name="<%=zSTDINTCOUNTRYCODE%>" htmlsafe="true"/>&nbsp;</td><td>&nbsp;<m4:label m4name="<%=zSTDINTREGIONCODE%>" htmlsafe="true"/>&nbsp;</td><td>&nbsp;<m4:label m4name="<%=zSTDNATREGIONCODE%>" htmlsafe="true"/>&nbsp;</td><td>&nbsp;N&uacute;mero de telefone</td><td>&nbsp;Tipo de linha</td><td>&nbsp;Local</td>
  <td class="tablamenuright"><a tabindex="8" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod3.jsp?estado=11" title="N&uacute;mero de telefone"><img alt="N&uacute;mero de telefone" src="/iconos/icono_flecha_azul1_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
<%  zposicions2 = m4lix;
  zposicion2 = Integer.valueOf(zposicions2).intValue();
  zcontrol2 = zposicion2%2;
  %>
<tr>
<%if (zcontrol2==0){%>

  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDINTCOUNTRYCODE%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDINTREGIONCODE%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNATREGIONCODE%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDPHONE%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNLINETYPE%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNLOCATIONTYPE%>" htmlsafe="true"/></td>
  <td class="fuentebotonright">
  <a title="Cancelar o registo" href="javascript:m4submit('formtel<%=zposicions2%>');">
  <img class="tablamenuright" alt="Cancelar o registo"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
  </a>

<% } else { %>

  <td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSTDINTCOUNTRYCODE%>" htmlsafe="true"/></td>
  <td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSTDINTREGIONCODE%>" htmlsafe="true"/></td>
  <td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSTDNATREGIONCODE%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDPHONE%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDNLINETYPE%>" htmlsafe="true"/></td>
  <td class="fuentevalor2" >&nbsp;<m4:item m4name="<%=zSTDNLOCATIONTYPE%>" htmlsafe="true"/></td>
  <td class="fuentebotonright2">
  <a title="Cancelar o registo" href="javascript:m4submit('formtel<%=zposicions2%>');">
  <img class="tablamenuright" alt="Cancelar o registo"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
  </a>

<%}%>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="formtel<%=zposicions2%>" id="formtel<%=zposicions2%>">
<input type="hidden" id="TELTAG<%=zposicions2%>" name="TAG" value="SSE_PHONE_FAX" />
<input type="hidden" id="TELACC<%=zposicions2%>" name="ACC" value="ANULAR" />
<input type="hidden" id="TELNOD<%=zposicions2%>" name="NOD" value="SSE_PHONE_FAX" />
<input type="hidden" id="TELSTD_INT_COUNTRY_CODE<%=zposicions2%>" name="STD_INT_COUNTRY_CODE" value="<m4:item m4name="<%=zSTDINTCOUNTRYCODE%>" htmlsafe="true"/>" />
<input type="hidden" id="TELSTD_INT_REGION_CODE<%=zposicions2%>" name="STD_INT_REGION_CODE" value="<m4:item m4name="<%=zSTDINTREGIONCODE%>" htmlsafe="true"/>" />
<input type="hidden" id="TELSTD_NAT_REGION_CODE<%=zposicions2%>" name="STD_NAT_REGION_CODE" value="<m4:item m4name="<%=zSTDNATREGIONCODE%>" htmlsafe="true"/>" />
<input type="hidden" id="TELSTD_PHONE<%=zposicions2%>" name="STD_PHONE" value="<m4:item m4name="<%=zSTDPHONE%>" htmlsafe="true"/>" />
<input type="hidden" id="TELSTD_ID_LOCATION_TYPE<%=zposicions2%>" name="STD_ID_LOCATION_TYPE" value="<m4:item m4name="<%=zSTDIDLOCATIONTYPE%>" htmlsafe="true"/>" />
<input type="hidden" id="TELSTD_ID_LINE_TYPE<%=zposicions2%>" name="STD_ID_LINE_TYPE" value="<m4:item m4name="<%=zSTDIDLINETYPE%>" htmlsafe="true"/>" />
</form>
</td>
</tr>
</m4:loop>
</table>
<br />
<%}if (zcounti3 > 0) {
  String zposicions3 = "0";
  int zcontrol3 = 0;
  int zposicion3 =0;
%>  
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
  <td>&nbsp;E-mail</td>
  <td>&nbsp;Local</td>
  <td class="tablamenuright"><a tabindex="9" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod2.jsp?estado=11" title="E-mail"><img alt="E-mail" src="/iconos/icono_flecha_azul1_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
<tr>
<%  zposicions3 = m4lix;
  zposicion3 = Integer.valueOf(zposicions3).intValue();
  zcontrol3 = zposicion3%2;
if (zcontrol3==0){%>

  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDEMAIL%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNLOCATIONTYPE3%>" htmlsafe="true"/></td>
  <td class="fuentebotonright">
  <a  title="Cancelar o registo"href="javascript:m4submit('formail<%=zposicions3%>');">
  <img class="fuentebotonright" alt="Cancelar o registo"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
  </a>

<% } else { %>

  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDEMAIL%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDNLOCATIONTYPE3%>" htmlsafe="true"/></td>
  <td class="fuentebotonright2">
  <a title="Cancelar o registo" href="javascript:m4submit('formail<%=zposicions3%>');">
  <img class="tablamenuright" alt="Cancelar o registo"src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
  </a>

 <%}%>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="formail<%=zposicions3%>" id="formail<%=zposicions3%>"> 
<input type="hidden" id="MAILTAG<%=zposicions3%>" name="TAG" value="SSE_E_MAIL" />
<input type="hidden" id="MAILACC<%=zposicions3%>" name="ACC" value="ANULAR" />
<input type="hidden" id="MAILNOD<%=zposicions3%>" name="NOD" value="SSE_E_MAIL" />
<input type="hidden" id="MAILSTD_EMAIL<%=zposicions3%>" name="STD_EMAIL" value="<m4:item m4name="<%=zSTDEMAIL%>" htmlsafe="true"/>" />
<input type="hidden" id="MAILSTD_ID_LOCATION_TYPE<%=zposicions3%>" name="STD_ID_LOCATION_TYPE" value="<m4:item m4name="<%=zSTDIDLOCATIONTYPE3%>" htmlsafe="true"/>" />
</form>
</td>
</tr>
</m4:loop>
</table>
<br />
<%}if (zcounti4 > 0) {
String zposicions = "0";%>
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr class = "tablaestadosceldatitulo">
  <td colspan="5">&nbsp;Outras moradas</td>
  <td class="tablamenuright"><a tabindex="10" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11" title="Outras moradas"><img alt="Outras moradas" src="/iconos/icono_flecha_azul1_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv4).intValue()-1).toString()%>">
<%zposicions = m4lix;%>

<tr>

  <td class = "fuentecampoaccion" colspan="5" >&nbsp;<m4:item m4name="<%=zSTDNLOCATIONTYPE4%>" htmlsafe="true"/></td>

  <td class="fuentebotonright">
  <a title="Cancelar o registo" href="javascript:m4submit('a<%=zposicions%>');">
  <img class="fuentebotonright" alt="Cancelar o registo"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
  </a>
  </td>
</tr>
<tr>

  <td class="fuentecampo">&nbsp;Morada</td>
  <td class="fuentevalor" colspan="2">&nbsp;<m4:item m4name="<%=zSTDADDRESSLINE14%>" htmlsafe="true"/></td>
  <td class="fuentecampo">&nbsp;Linha morada 2</td>
  <td class="fuentevalor" colspan="2">&nbsp;<m4:item m4name="<%=zSTDADDRESSLINE24%>" htmlsafe="true"/></td>

</tr>
<tr>

  <td class="fuentecampo">&nbsp;Linha morada 3</td>
  <td class="fuentevalor" colspan="2">&nbsp;<m4:item m4name="<%=zSTDADDRESSLINE34%>" htmlsafe="true"/></td>
    <td class="fuentecampo">&nbsp;Linha morada 4</td>
  <td class="fuentevalor" colspan="2">&nbsp;<m4:item m4name="<%=zSTDADDRESSLINE44%>" htmlsafe="true"/></td>

</tr>
<tr>

  <td class="fuentecampo">&nbsp;Pa&iacute;s</td><td class="fuentevalor" ><m4:item m4name="<%=zSTDNCOUNTRY4%>" htmlsafe="true"/></td>
  <td class="fuentecampo">Distrito</td>
  <td class="fuentevalor" ><m4:item m4name="<%=zSTDNGEODIV4%>" htmlsafe="true"/></td>
  <td class="fuentecampo">Concelho</td>
  <td class="fuentevalor" ><m4:item m4name="<%=zSTDNSUBGEODIV4%>" htmlsafe="true"/></td>

</tr>
<tr>

  <td class="fuentecampo">&nbsp;C&oacute;d. postal</td><td class="fuentevalor"><m4:item m4name="<%=zSTDZIPCODE4%>" htmlsafe="true"/></td>
  <td class="fuentecampo">Freguesia</td><td class="fuentevalor" colspan="3"><m4:item m4name="<%=zSTDNGEOPLACE4%>" htmlsafe="true"/></td>

</tr>
<tr>
<td class="fuentecampo"colspan="6">
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="a<%=zposicions%>" id="a<%=zposicions%>">
<input type="hidden" id="TAG<%=zposicions%>" name="TAG" value="SSE_ADDRESS_OTROS" />
<input type="hidden" id="ACC<%=zposicions%>" name="ACC" value="ANULAR" />
<input type="hidden" id="NOD<%=zposicions%>" name="NOD" value="SSE_ADDRESS_OTROS" />

<input type="hidden" id="STD_ID_LOCATION_TYPE<%=zposicions%>" name="STD_ID_LOCATION_TYPE" value="<m4:item m4name="<%=zSTDIDLOCATIONTYPE4%>" htmlsafe="true"/>" />
<input type="hidden" id="STD_ADDRESS_LINE_1<%=zposicions%>" name="STD_ADDRESS_LINE_1" value="<m4:item m4name="<%=zSTDADDRESSLINE14%>" htmlsafe="true"/>" />
<input type="hidden" id="STD_ADDRESS_LINE_2<%=zposicions%>" name="STD_ADDRESS_LINE_2" value="<m4:item m4name="<%=zSTDADDRESSLINE24%>" htmlsafe="true"/>" />
<input type="hidden" id="STD_ADDRESS_LINE_3<%=zposicions%>" name="STD_ADDRESS_LINE_3" value="<m4:item m4name="<%=zSTDADDRESSLINE34%>" htmlsafe="true"/>" />
<input type="hidden" id="STD_ADDRESS_LINE_4<%=zposicions%>" name="STD_ADDRESS_LINE_4" value="<m4:item m4name="<%=zSTDADDRESSLINE44%>" htmlsafe="true"/>" />
<input type="hidden" id="SSP_DISTRIT_POSTAL<%=zposicions%>" name="STD_ZIP_CODE" value="<m4:item m4name="<%=zSTDZIPCODE4%>" htmlsafe="true"/>" />
<input type="hidden" id="STD_ID_COUNTRY<%=zposicions%>" name="STD_ID_COUNTRY" value="<m4:item m4name="<%=zSTDIDCOUNTRY4%>" htmlsafe="true"/>" />
<input type="hidden" id="STD_ID_GEO_DIV<%=zposicions%>" name="STD_ID_GEO_DIV" value="<m4:item m4name="<%=zSTDIDGEODIV4%>" htmlsafe="true"/>" />
<input type="hidden" id="STD_ID_GEO_PLACE<%=zposicions%>" name="STD_ID_GEO_PLACE" value="<m4:item m4name="<%=zSTDIDGEOPLACE4%>" htmlsafe="true"/>" />
<input type="hidden" id="STD_ID_SUB_GEO_DIV<%=zposicions%>" name="STD_ID_SUB_GEO_DIV" value="<m4:item m4name="<%=zSTDIDSUBGEODIV4%>" htmlsafe="true"/>" />

</form>
</td>
</tr>
<tr><td class="separadorlinea" colspan="6"><hr /></td></tr>
</m4:loop>
</table>
<br/>
<%}if (zcounti5 > 0) {
  int zcontrol5 = 0;
  int zposicion5 = 0;
  String zposicions5 = "";
  %>  
  <table class="tablaestados" width="100%" cellspacing="0">
    <tr class="tablaestadosceldatitulo">
      <td>&nbsp;<m4:label m4name="<%=zSTDNMARITALSTAT%>" htmlsafe="true"/> </td>
      <td>&nbsp;<m4:label m4name="<%=zSTDDTSTART%>" htmlsafe="true"/></td>
      <td>&nbsp;<m4:label m4name="<%=zSTDDTEND%>" htmlsafe="true"/></td>
      <td class="tablamenuright"><a tabindex="11" href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod5.jsp?estado=11" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod5Des")%>"><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod5Des")%>" src="/iconos/icono_flecha_azul1_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
    </tr>
    <m4:dataloop outputdef="<%=znodo5%>">
      <m4:current m4varname="current" outputdef="<%=znodo5%>"/>
      <%  zposicion5 = Integer.valueOf(current).intValue();
      zcontrol5 = zposicion5%2;
      if (zcontrol5==0){zposicions5="";}else{zposicions5="2";}%>
      <tr>
        <td class="fuentevalor<%=zposicions5%>">&nbsp;<m4:item item="STD_N_MARITAL_STAT" htmlsafe="true" outputdef="<%=znodo5%>"/></td>
        <td class="fuentevalor<%=zposicions5%>">&nbsp;<m4:item item="STD_DT_START" htmlsafe="true" outputdef="<%=znodo5%>"/></td>
        <td class="fuentevalor<%=zposicions5%>">&nbsp;<m4:item item="STD_DT_END" htmlsafe="true" outputdef="<%=znodo5%>"/></td>
      <%if (zposicion5!=0){%>
          <td class="fuentevalor<%=zposicions5%>"></td>   
        <%}else{%>
          <td class="fuentebotonright<%=zposicions5%>">
            <form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="formestciv" id="formestciv">
              <input type="hidden" id="TAG" name="TAG" value="SSE_HT_MAR_STAT" />
              <input type="hidden" id="ACC" name="ACC" value="ANULAR" />
              <input type="hidden" id="NOD" name="NOD" value="SSE_HT_MAR_STAT" />
              
              <input type="hidden" id="STD_ID_MARITAL_STAT" name="STD_ID_MARITAL_STAT" value="<m4:item item="STD_ID_MARITAL_STAT" htmlsafe="true" outputdef="<%=znodo5%>"/>" />
              <input type="hidden" id="STD_DT_START" name="STD_DT_START" value="<m4:item item="STD_DT_START" htmlsafe="true" outputdef="<%=znodo5%>"/>" />
              <input type="hidden" id="STD_DT_END" name="STD_DT_END" value="<m4:item item="STD_DT_END" htmlsafe="true" outputdef="<%=znodo5%>"/>" />
            </form>
            <a  title="Cancelar o registo"href="javascript:m4submit('formestciv');">
            <img class="fuentebotonright<%=zposicion5%>" alt="Cancelar o registo"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
            </a>
          </td>
      <%}%>
      </tr>
    </m4:dataloop>
  </table>
  <br/>
<%}if (zcounti6 > 0) {%>  
  <table class="tablaestados" width="100%" cellspacing="0">
    <tr class="tablaestadosceldatitulo">
      <td>&nbsp;<m4:label m4name="<%=zSCOHOMEPAGE%>" htmlsafe="true"/></td>
      <td class="tablamenuright"><a tabindex="12" href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod6.jsp?estado=11" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod6Des")%>"><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod6Des")%>" src="/iconos/icono_flecha_azul1_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
    </tr>
    <tr>
      <td class="fuentevalor"><a title="<%=Tran.getProperty("Link.WebSite")%>"  target = "_blank" href="<m4:item item="SCO_HOME_PAGE" htmlsafe="true" outputdef="<%=znodo6%>"/>" >&nbsp;<m4:item item="SCO_HOME_PAGE" htmlsafe="true" outputdef="<%=znodo6%>"/></a></td>
      <td class="fuentebotonright">
        <form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="formweb" id="formweb">
          <input type="hidden" id="TAG" name="TAG" value="SSE_HOME_PAGE" />
          <input type="hidden" id="ACC" name="ACC" value="ANULAR" />
          <input type="hidden" id="NOD" name="NOD" value="SSE_HOME_PAGE" />
          
          <input type="hidden" id="SCO_HOME_PAGE" name="SCO_HOME_PAGE" value="<m4:item m4name="<%=zSCOHOMEPAGE%>" htmlsafe="true"/>" />
        </form>
        <a  title="Cancelar o registo"href="javascript:m4submit('formweb');">
        <img class="fuentebotonright" alt="Cancelar o registo"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
        </a>
      </td>
    </tr>
  </table>
  <br/>
<%}if (zcounti7 > 0) {
  String zposicions7 = "0";
  int zcontrol7 = 0;
  int zposicion7 =0;
%>  
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
  <td>&nbsp;<m4:label m4name="<%=zSCOCONTACTO%>" htmlsafe="true"/> </td>
    <td>&nbsp;<m4:label m4name="<%=zSCONCONTACTTYPE%>" htmlsafe="true"/></td>
    <td class="tablamenuright"><a tabindex="11" href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod7.jsp?estado=11" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod7Des")%>"><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod7Des")%>" src="/iconos/icono_flecha_azul1_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv7).intValue()-1).toString()%>">
<tr>
<%  zposicions7 = m4lix;
  zposicion7 = Integer.valueOf(zposicions7).intValue();
  zcontrol7 = zposicion7%2;
if (zcontrol7==0){%>

  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCOCONTACTO%>" htmlsafe="true"/></td>
 <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCONCONTACTTYPE%>" htmlsafe="true"/></td>

  <td class="fuentebotonright">
  <a  title="Cancelar el registro"href="javascript:m4submit('forformcont<%=zposicions7%>');">
  <img class="fuentebotonright" alt="Cancelar el registro"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
  </a>

<%}else{%>

  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCOCONTACTO%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCONCONTACTTYPE%>" htmlsafe="true"/></td>  
  <td class="fuentebotonright2">
  <a title="Cancelar el registro" href="javascript:m4submit('forformcont<%=zposicions7%>');">
  <img class="tablamenuright" alt="Cancelar el registro"src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
  </a>

 <%}%>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="forformcont<%=zposicions7%>" id="forformcont<%=zposicions7%>"> 
<input type="hidden" id="TAG<%=zposicions7%>" name="TAG" value="SSE_OTH_CONTACT_FORMS" />
<input type="hidden" id="ACC<%=zposicions7%>" name="ACC" value="ANULAR" />
<input type="hidden" id="NOD<%=zposicions7%>" name="NOD" value="SSE_OTH_CONTACT_FORMS" />

<input type="hidden" id="SCO_CONTACTO<%=zposicions7%>" name="SCO_CONTACTO" value="<m4:item m4name="<%=zSCOCONTACTO%>" htmlsafe="true"/>" />
<input type="hidden" id="SCO_ID_CONTACT_TYPE<%=zposicions7%>" name="SCO_ID_CONTACT_TYPE" value="<m4:item m4name="<%=zSCOIDCONTACTTYPE%>" htmlsafe="true"/>" />

</form>
</td>
</tr>
</m4:loop>
</table>
<br/>
<%}%> 
<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>


