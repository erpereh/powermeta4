<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
	<title>Mis tareas </title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-menu_ess.jsp" %>		
	<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
	<%
	Generatablaparametros zobjtabla = new Generatablaparametros(request);
	String estado = zobjtabla.m4paramvalor("estado");
	String zinicios = zobjtabla.m4paramvalor("zinicios");
	if ((estado==null)||(estado.equals(""))){estado="0";}
	if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
	%>

</head>
  <%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_menusup.jsp" %>
  <%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_links.jsp" %>
<%
    String zsubsesion = "SSM_NEWS";
	String zmeta4object = "SSM_NEWS";  
	String znodo = "SSM_ALL_NEWS";
	String znodo1 = "SWF_WORKLIST";
	String znodo2 = "SSM_EMPLOYEE_NEWS";
	String zventanas = "20";
	int zvuelta = 5;
	int zregistroinicial = Integer.valueOf(zinicios).intValue();
	zregistroinicial = zregistroinicial - 1;
	int zventana  = Integer.valueOf(zventanas).intValue();
	int zregistrofinal = zregistroinicial + zventana - 1;
	
    String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
    String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
    String zlectura = zsubsesion + "!" + znodo;
    String zraiz = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
    String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   
   
    String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
    String zmove1 = znodo1 + ":" + znodo1 + "[0]";
    String zraiz1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
	String znamenodo1  = znodo1 + ":" + zsubsesion  + "!" + znodo1;
	String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
	String znamenodo2  = znodo2 + ":" + zsubsesion  + "!" + znodo2;
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL_NEWS.SSM_NEWS_CARGA";		
			
	// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
	
   String zJSPVALIDACION = zraiz + "JSP_VALIDACION";
   String zNIVELACEPTADO = zraiz + "NIVEL_ACEPTADO";
   String zORDINAL = zraiz + "ORDINAL";
   String zDESCLINK = zraiz + "DESC_LINK";

   String zNREG = zraiz1 + "N_REG";
   String zJSP = zraiz1 + "JSP";
   String zNMLINK = zraiz1 + "NM_LINK";
   String zDTDEADLINE = zraiz1 + "DT_DEADLINE";
   	
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:endjob/>

<%
	int  zcounti  = 0;	
	int  zcount  = 0;
	int  zcounti1  = 0;	
	int  zcount1  = 0;
	int  zcount2  = 0;
	try {
		M4Operations m = new M4Operations(request);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		zcount = m.getCount(znodo,zsubsesion,znodo);
				zcounti1 = m.getCountInClient(znodo1,zsubsesion,znodo1);
		zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
		zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
		} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcountv1 = String.valueOf(zcounti1);
	String	zcountv2 = String.valueOf(zcount2);
%>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2">Mis tareas</td></tr>
<tr>
	<td><img src="/iconos/noname_catalogo_99_100.gif" width="99" height="100" alt="" ></td>
	<td class="descripcionfuncional">Consulta los procesos que tienes pendientes. Puedes obtener m&aacute;s informaci&oacute;n a trav&eacute;s del nombre de la tarea.</td>
</tr>
</table>
<form name="formfiltro" id="formfiltro" action="">

<% if (zcounti > 0) { %>

 <table width="100%" cellspacing="0">
<tr><td class="descripcionfuncional" >Peticiones pendientes de validaci&oacute;n</td></tr>
</table>
<table width="100%" cellspacing="0">
<tr>
	<td class="tablaestadosceldatitulo" colspan="2">P&aacute;gina de validaci&oacute;n</td>
	<td class="tablaestadosceldatitulo" colspan="2">Peticiones</td>
	<td class="tablaestadosceldatitulo" colspan="2">Nivel</td>
</tr>
<%
	String zposicions2 = "0";
	int zcontrol2 = 0;
	int zposicion2 =0;
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
	
%>

<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%zposicions2 = m4lix;
	zposicion2 = Integer.valueOf(zposicions2).intValue();
 	zcontrol2 = zposicion2%2;

if (zcontrol2==0){%>
 <tr>
	<td class="fuentevalor" colspan="2">&nbsp;<a href="/servlet/CheckSecurity/JSP<m4:item m4name="<%=zJSPVALIDACION%>" htmlsafe="true"/>"><m4:item m4name="<%=zDESCLINK%>" htmlsafe="true"/></a></td>
	<td class="fuentevalor" colspan="2">&nbsp;<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/></td>
	<td class="fuentevalor" colspan="2">&nbsp;<m4:item m4name="<%=zNIVELACEPTADO%>" htmlsafe="true"/></td>
</tr>
 
 <%}else{%>
 <tr>
	<td class="fuentevalor2" colspan="2">&nbsp;<a href="/servlet/CheckSecurity/JSP<m4:item m4name="<%=zJSPVALIDACION%>" htmlsafe="true"/>"><m4:item m4name="<%=zDESCLINK%>" htmlsafe="true"/></a></td>
	<td class="fuentevalor2" colspan="2">&nbsp;<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/></td>
	<td class="fuentevalor2" colspan="2">&nbsp;<m4:item m4name="<%=zNIVELACEPTADO%>" htmlsafe="true"/></td>
</tr>
 <%}%>
</m4:loop>
</table>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_ventanas_post.jsp" %>
<br></br>
<% } %>
<% if (zcounti1 > 0) { %>
 <table width="100%" cellspacing="0">
<tr><td class="descripcionfuncional" ><m4:label m4name="<%=znamenodo1%>" htmlsafe="true"/></td></tr>
</table>
<table width="100%" cellspacing="0">
<tr>
	<td class="tablaestadosceldatitulo" colspan="2"><m4:label m4name="<%=zNMLINK%>" htmlsafe="true"/></td>
	<td class="tablaestadosceldatitulo" colspan="2"><m4:label m4name="<%=zNREG%>" htmlsafe="true"/></td>
	<td class="tablaestadosceldatitulo" colspan="2"><m4:label m4name="<%=zDTDEADLINE%>" htmlsafe="true"/></td>
</tr>
<%
	String zposicions2 = "0";
	int zcontrol2 = 0;
	int zposicion2 =0;
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti1 - 1);
	
%>

<m4:loop from="0" to="<%=zregistrofinals%>">
<%zposicions2 = m4lix;
	zposicion2 = Integer.valueOf(zposicions2).intValue();
 	zcontrol2 = zposicion2%2;%>
<m4:item m4varname="sNLin" m4name="<%=zNMLINK%>" htmlsafe="true"/>
<m4:item m4varname="sJSP" m4name="<%=zJSP%>" htmlsafe="true"/>
<%
  //Decrypt data received. These data were encrypted with LN4 code and need encrypt this with java.
  String[] sElemEncr={"0_zPRP_ID_HR_ENCR_0","0_zPRP_OR_HR_PERIOD_ENCR_0","0_zPRP_DT_REQUEST_ENCR_0","0_zPRP_ID_INTERVIEW_TYPE_ENCR_0"};
  Arrays.sort(sElemEncr); 
  com.meta4.common.cipher.M4CipherUtil oDecrypt = new com.meta4.common.cipher.M4CipherUtil();
  String sKey = ""; String sKeyEncr = ""; String sKeyAux = ""; String sValue = ""; String sValueAux = ""; String sValueEncr = ""; String sValueKey = ""; String sRedirection = "";
  int contador = 0; int nPos = 0;
  //If the link contains a parameter security should be checked
  if ((sJSP.indexOf("?") != -1)&&(sJSP.indexOf("=") != -1)){
    try{
      StringTokenizer tokens = new StringTokenizer(sJSP,"=&");
      while (tokens.hasMoreTokens ()){
        sKey = tokens.nextToken();	
        sKeyAux = sKey;
        sKeyAux = sKeyAux.replace("#38;","");
        sKeyAux="0_"+sKeyAux+"_0";
        sValueAux = tokens.nextToken();
        nPos = Arrays.binarySearch(sElemEncr, sKeyAux);
        if (nPos >= 0){
          Hashtable zhash = oDecrypt.dehashToken(sValueAux);
          Enumeration enumhash = zhash.keys();
          sKeyEncr = (String) enumhash.nextElement();
          sValueKey = (String) zhash.get(sKeyEncr);
          sValueEncr = (String) zhash.get(sKeyEncr); 
          sValueEncr = sValueEncr.substring(0,sValueEncr.length()-4);
          sValue = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sValueEncr);
          zhash.remove(sValueKey);
        }else{
          sValue = sValueAux;
        }		
        if (contador == 0){
          sRedirection += sKey + "=" + sValue;
        }else{
          sRedirection += "&"+sKey + "=" + sValue;
        }
        contador++;
	  }
    }catch(Exception e){
      sRedirection = "ERROR";
    }
  }else{
    sRedirection = sJSP;
  }
if (zcontrol2==0){%>
 <tr>
	<td class="fuentevalor" colspan="2">&nbsp;<a href="/servlet/CheckSecurity/JSP<%=sRedirection%>"><%=sNLin%></a></td>
	<td class="fuentevalor" colspan="2">&nbsp;<m4:item m4name="<%=zNREG%>" htmlsafe="true"/></td>
	<td class="fuentevalor" colspan="2">&nbsp;<m4:item m4name="<%=zDTDEADLINE%>" htmlsafe="true"/></td>
</tr>
 <%}else{%>
 <tr>
	<td class="fuentevalor2" colspan="2">&nbsp;<a href="/servlet/CheckSecurity/JSP<%=sRedirection%>"><%=sNLin%></a></td>
	<td class="fuentevalor2" colspan="2">&nbsp;<m4:item m4name="<%=zNREG%>" htmlsafe="true"/></td>
	<td class="fuentevalor2" colspan="2">&nbsp;<m4:item m4name="<%=zDTDEADLINE%>" htmlsafe="true"/></td>
</tr>
 <%}%>
</m4:loop>
</table><br></br>
<% } %>
<% if (zcount2 > 0) { %>
 <table width="100%" cellspacing="0">
<tr><td class="descripcionfuncional" ><m4:label m4name="<%=znamenodo2%>" htmlsafe="true"/></td></tr>
</table>
<table width="100%" cellspacing="0">
<tr>

	<td class="tablaestadosceldatitulo">&nbsp;<m4:label  item="NM_LINK" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
</tr>
<%

	String zposicions2 = "0";
	int zcontrol2 = 0;
	int zposicion2 =0;
	String zPaint2="";
	String zregistrofinals2 = String.valueOf(zregistroinicial + zcount2 - 1);
	
%>
<m4:dataloop outputdef="<%=znodo2%>">
<m4:current m4varname="zp2" outputdef="<%=znodo2%>"/>
<%	zposicions2 =zp2;
	zposicion2 = Integer.valueOf(zposicions2).intValue();
	zcontrol2 = zposicion2%2;
%><%if (zcontrol2==0){zPaint2="";}else{zPaint2="2";}%>

 <tr>
 		
	<td class="fuentevalor<%=zPaint2%>" colspan="2">&nbsp;<a href="/servlet/CheckSecurity/JSP<m4:item  item="JSP" htmlsafe="true" outputdef="<%=znodo2%>"/>"><m4:item  item="NM_LINK" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
	</tr>
 

	</m4:dataloop>
</table><br></br>
<% } %>
<% if (zcounti1==0) { %>
<div class="fuentenodatos">Actualmente no hay tareas pendientes</div><br></br>
<% } %>

<% if (zcount2 == 0) { %>
<div class="fuentenodatos">Actualmente no hay valoraciones pendientes</div><br></br>
<% } %>

<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_disclaimer.jsp" %>

</div>
</body>
<m4:endpage/>
</html>


