<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 TranMsssitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>

<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
<%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-menu_mss.jsp" %> 
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<%@ include file="/m4trans/mss_g3/0-smco_iv_trans.jsp"%>

<%
//--------------------------------------------------------  
String empleado = (String)request.getAttribute("empleado");
String zVis = (String)request.getAttribute("zVis");

String zSMCO_ID_HR = "";
if ((zVis==null)||(zVis.equals(""))){
  zVis = "1";
}
else{
  //Cargamos para un empleado concreto
  empleado = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", empleado);
  zSMCO_ID_HR = empleado;
}
//--------------------------------------------------------

%>

<head>
<%
String ztitle = "";
if ((zVis==null)||(zVis.equals(""))){
    ztitle = tranivMSS.getProperty("iv_mss.EmpInterview");
}else{
    ztitle = tranivMSS.getProperty("iv_mss.Interview");
}

String zproc = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "proc");   
%>

<title><%=ztitle%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<%  
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "estado");
String zinicios =com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zinicios");

String zfiltroresp = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltroresp");
String znombreresp = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "znombreresp");
String zfiltroemp = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltroemp");
String znombreemp = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "znombreemp");
String zfiltrotp = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltrotp");
String znombretp = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "znombretp");

if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((zfiltroresp==null)|| (""==zfiltroresp)){
  zfiltroresp = "XXX01";
} else {
  if ( zfiltroresp.equals("XXX01")){
  	   zfiltroresp=zfiltroresp;
  }else{
  		zfiltroresp = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zfiltroresp);
  }
}

if (zVis.equals("1")){
  if ((zfiltroemp==null)|| (""==zfiltroemp)){
    zfiltroemp = "XXX01";
  } else {
  	  if ( zfiltroemp.equals("XXX01")){
  	   zfiltroemp=zfiltroemp;
  }else{
    zfiltroemp = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zfiltroemp);
	}
  }
}else{
  zfiltroemp = zSMCO_ID_HR;
}
if ((zfiltrotp==null)|| (""==zfiltrotp)){zfiltrotp = "XXX01";} 
if ((znombreresp==null)|| (""==znombreresp)){znombreresp = tranivMSS.getProperty("iv_mss.LblAll");} 
if ((znombreemp==null)|| (""==znombreemp)){znombreemp =  tranivMSS.getProperty("iv_mss.LblAll");}
if ((znombretp==null)|| (""==znombretp)){znombretp = tranivMSS.getProperty("iv_mss.LblAll");} 

%>
<script type="text/javascript">

function filtrar(num){

var valorresp =m4select("filtroresp","formfiltro","value");
var nombreresp =m4select("filtroresp","formfiltro","text");
var valoremp =m4select("filtroemployee","formfiltro","value");
var nombreemp =m4select("filtroemployee","formfiltro","text");
var valortp =m4select("filtrotypeint","formfiltro","value");
var nombretp =m4select("filtrotypeint","formfiltro","text");

m4valor("oculto","zfiltroresp",valorresp,"set");
m4valor("oculto","znombreresp",nombreresp,"set");
m4valor("oculto","zfiltroemp",valoremp,"set");
m4valor("oculto","znombreemp",nombreemp,"set");
m4valor("oculto","zfiltrotp",valortp,"set");
m4valor("oculto","znombretp",nombretp,"set");

m4submit("oculto");
}

function interview_det(IdHR,IdHRPer,DtRequest,IdTpIV){
m4valor("detinterview","zPRP_ID_HR_ENCR",IdHR,"set");
m4valor("detinterview","zPRP_OR_HR_PERIOD_ENCR",IdHRPer,"set");

m4valor("detinterview","zPRP_DT_REQUEST_ENCR",DtRequest,"set");
m4valor("detinterview","zPRP_ID_INTERVIEW_TYPE_ENCR",IdTpIV,"set");

var visble_profs_data = <%=zVis%>
m4valor("detinterview","zVis",visble_profs_data,"set");
m4submit("detinterview");
}


</script>
</head>
<body>

<% if (zVis.equals("1")){%>
  <%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-mssgenerico_menusup.jsp" %>
  <%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_links.jsp" %>
<%}%>


<%
   String zsubsesion = "SSM_GN_INTERVIEW";
   String zmeta4object = "SSM_GN_INTERVIEW";
   String znodo = "SSM_GN_INTERVIEW_LIST";
   String znodolistresp = "SSM_IV_FILT_INTV_LIST";
   String znodolistemp = "SSM_IV_FILT_EMP_LIST";
   String znodolisttpiv = "SSM_IV_FILT_IV_TP_LIST";

   String ztipocarga = "LIST";
   String zventanas = "";
   if (zVis.equals("1")){
     zventanas = "20";
   }else{
     zventanas = "2000";
   }
   int zvuelta = 5;
   String zdireccion = "/mss_g3/smco_g3_p30_list.jsp";
   String zlink = "/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_list.jsp?estado=31";
   String zestado="31";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove =znodo + ":" +  znodo + "[" + zregistroinicial + "]";
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   
   String zSCO_ID_HR = zraiz + "SCO_ID_HR";
   String zSCO_OR_HR_PERIOD = zraiz + "SCO_OR_HR_PERIOD";
   String zSCO_DT_REQUEST = zraiz + "SCO_DT_REQUEST";
   String zSCO_DT_FINISH= zraiz + "SCO_DT_FINISH";
   String zSCO_GB_NAME_RESP = zraiz + "SCO_GB_NAME_RESP";
   String zSCO_GB_NAME_EMP = zraiz + "SCO_GB_NAME_EMP";
   String zSCO_NM_INTERVIEW_TYPE = zraiz + "SCO_NM_INTERVIEW_TYPE";
   String zSCO_INTERVIEW_NAME = zraiz + "SCO_INTERVIEW_NAME";
   String zSCO_ID_INTERVIEW_TYPE = zraiz + "SCO_ID_INTERVIEW_TYPE";
   
   String zoutputdeflistresp= zsubsesion + "!" + znodolistresp + "[*]";
   String zmovelistresp = znodolistresp + ":" + znodolistresp + "[FIRST]";
   String zcomuniv = znodolistresp + ":" + zsubsesion + "!" + znodolistresp + "[&VAR.m4lix]" + ".";
   String zSTD_ID_PERSON_RESP = zcomuniv + "STD_ID_PERSON";
   String zSCO_GB_NAME_RESP_FLT = zcomuniv + "SCO_GB_NAME";
   
   String zoutputdeflistemp = zsubsesion + "!" + znodolistemp + "[*]";
   String zmovelistemp = znodolistemp + ":" + znodolistemp + "[FIRST]";
   String zcomunemp = znodolistemp + ":" + zsubsesion + "!" + znodolistemp + "[&VAR.m4lix]" + ".";
   String zSTD_ID_PERSON_EMP = zcomunemp + "STD_ID_PERSON";
   String zSCO_GB_NAME_EMP_FLT = zcomunemp + "SCO_GB_NAME";

   String zoutputdeflisttpiv = zsubsesion + "!" + znodolisttpiv + "[*]";
   String zmovelisttpiv = znodolisttpiv + ":" + znodolisttpiv + "[FIRST]";
   String zcomuntpiv = znodolisttpiv + ":" + zsubsesion + "!" + znodolisttpiv + "[&VAR.m4lix]" + ".";
   String zSCO_ID_INTERVIEW_TYPE_FLT = zcomuntpiv + "SCO_ID_INTERVIEW_TYPE";
   String zSCO_NM_INTERVIEW_TYPE_FLT = zcomuntpiv + "SCO_NM_INTERVIEW_TYPE";

   String znodoprincipal = "SSM_PRINCIPAL";
   String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";
   String sIdHR = "";
   String sOrHrPeriod = "";
   String sDtRequest = "";
   String sIdInterviewType = "";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request);
      m.setItem(zsubsesion,znodo,"","PRP_FILTER_RESP",zfiltroresp);
      m.setItem(zsubsesion,znodo,"","PRP_FILTER_EMP",zfiltroemp);
      m.setItem(zsubsesion,znodo,"","PRP_FILTER_TYPEIV",zfiltrotp);
  } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodolistemp%>"><m4:param name="m4name0" value="<%=zoutputdeflistemp%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodolistresp%>" ><m4:param name="m4name0" value="<%=zoutputdeflistresp%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodolisttpiv%>" ><m4:param name="m4name0" value="<%=zoutputdeflisttpiv%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovelistemp%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovelistresp%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovelisttpiv%>"/></m4:move>
<%
  int  zcounti  = 0;  
  int  zcount  = 0;
  int  zcountiresp  = 0;  
  int  zcountresp  = 0;
  int  zcountiemp  = 0; 
  int  zcountemp  = 0;
  int  zcountitp  = 0;
  int  zcounttp  = 0; 
  int  zcounti2  = 0; 
  int  zcount2  = 0;
  
  try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zcountresp = m.getCount(znodolistresp,zsubsesion,znodolistresp);
    zcountiresp = m.getCountInClient(znodolistresp,zsubsesion,znodolistresp);
    zcountemp = m.getCount(znodolistemp,zsubsesion,znodolistemp);
    zcountiemp = m.getCountInClient(znodolistemp,zsubsesion,znodolistemp);
    zcounttp = m.getCount(znodolisttpiv,zsubsesion,znodolisttpiv);
    zcountitp = m.getCountInClient(znodolisttpiv,zsubsesion,znodolisttpiv);
    
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
  String  zcountvresp = String.valueOf(zcountiresp);
  String  zcountvemp = String.valueOf(zcountiemp);
  String  zcountvtp = String.valueOf(zcountitp);
%>
<%
String sFiltroNameL=tranivMSS.getProperty("iv_mss.LblAll");
String sFiltroNameL2=tranivMSS.getProperty("iv_mss.LblAll");
String sFiltroNameL3=tranivMSS.getProperty("iv_mss.LblAll");


if (zfiltroresp.equals("XXX01"))
{
 znombreresp =sFiltroNameL;
}

if (zfiltroemp.equals("XXX01"))
{
 znombreemp =sFiltroNameL2; 
}

if (zfiltrotp.equals("XXX01"))
{
 znombretp =sFiltroNameL3; 
}
%>
<% if (zVis.equals("1")){%>
<table width="100%" cellspacing="0"> 
<tr><td class="titulofuncional" colspan="2"><%=ztitle%></td></tr>
<tr>
  <td><img alt="<%=ztitle%>" title="<%=ztitle%>" src="/iconos/noname_objetivos_ess_103_100.gif" width="103" height="100" /></td>
  <td>
    <div class="descripcionfuncional"><%=tranivMSS.getProperty("iv_mss.DescrIvMyEmp")%></div>
  
  </td>   

</tr>
</table>
<%}%>
<% if (zVis.equals("1")){%>
  <form name="formfiltro" id="formfiltro" action=" ">

  <table width="100%" cellspacing="0">
  <tr><td class="tablaestadosceldatitulo" ><%=tranivMSS.getProperty("iv_mss.LblFilter")%></td></tr>
  <tr>
    <td class="fuentecampofiltro" ><m4:label m4name="<%=zSCO_GB_NAME_RESP_FLT%>"/>&nbsp;
      <%zfiltroresp = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zfiltroresp);%>
      <select id="filtroresp" class="fuenteapartados" onchange="filtrar(2)" title="<%=tranivMSS.getProperty("iv_mss.LblChooseIvwer")%>">  
        <option value="XXX01"><%=sFiltroNameL%></option>
      <m4:loop from="0" to="<%=new Integer(new Integer(zcountvresp).intValue()-1).toString()%>">
        <m4:item m4name="<%=zSTD_ID_PERSON_RESP%>" htmlsafe = "true" m4varname="sIdResp"/>
        <%sIdResp = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdResp);%>
        <option value="<%=sIdResp%>"><m4:item m4name="<%=zSCO_GB_NAME_RESP_FLT%>"/></option>
      </m4:loop>
      </select>
    </td>
    <script type="text/javascript" language="Javascript1.5">
      if ('<%=zfiltroresp%>'!= "XXX01"){
        m4searchoptioness('formfiltro','filtroresp','<%=zfiltroresp%>');
      }
    </script>  
  </tr>   
  <tr>
    <td class="fuentecampofiltro" ><m4:label m4name="<%=zSCO_GB_NAME_EMP_FLT%>"/>&nbsp;
      <%zfiltroemp = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zfiltroemp);%>
      <select id="filtroemployee" class="fuenteapartados" onchange="filtrar(3)"title="<%=tranivMSS.getProperty("iv_mss.LblChooseIvemp")%>"> 
        <option value="XXX01"><%=sFiltroNameL2%></option>
      <m4:loop from="0" to="<%=new Integer(new Integer(zcountvemp).intValue()-1).toString()%>">
        <m4:item m4name="<%=zSTD_ID_PERSON_EMP%>" htmlsafe = "true" m4varname="sIdEmp"/>
        <%sIdEmp = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdEmp);%>
        <option value="<%=sIdEmp%>"><m4:item m4name="<%=zSCO_GB_NAME_EMP_FLT%>" htmlsafe = "true"/></option>
      </m4:loop>
      </select>
    </td>
    <script type="text/javascript" language="Javascript1.5">
      if ('<%=zfiltroemp%>'!= "XXX01"){
        m4searchoptioness('formfiltro','filtroemployee','<%=zfiltroemp%>');
      }
    </script>  
  </tr>   
  <tr>
    <td class="fuentecampofiltro" ><m4:label m4name="<%=zSCO_NM_INTERVIEW_TYPE_FLT%>"/>&nbsp;
      <select id="filtrotypeint" class="fuenteapartados" onchange="filtrar(4)"title="<%=tranivMSS.getProperty("iv_mss.LblChooseIvType")%>"> 
        <option value="XXX01"><%=sFiltroNameL3%></option>
      <m4:loop from="0" to="<%=new Integer(new Integer(zcountvtp).intValue()-1).toString()%>">
        <option value="<m4:item m4name="<%=zSCO_ID_INTERVIEW_TYPE_FLT%>" htmlsafe = "true"/>"><m4:item m4name="<%=zSCO_NM_INTERVIEW_TYPE_FLT%>" htmlsafe = "true"/></option>
      </m4:loop>
      </select>
    </td>
    <script type="text/javascript" language="Javascript1.5">
      if ('<%=zfiltrotp%>'!= "XXX01"){
        m4searchoptioness('formfiltro','filtrotypeint','<%=zfiltrotp%>');
      }
    </script>  
  </tr>   
  </table>
  </form>
  <form action="<%=zlink%>" method="post" name="oculto" id="oculto">
  <input type="hidden" id="zfiltroresp" name="zfiltroresp"  value="<%=zfiltroresp%>" />
  <input type="hidden" id="znombreresp" name="znombreresp"  value="<%=znombreresp%>" />
  <input type="hidden" id="zfiltroemp" name="zfiltroemp"  value="<%=zfiltroemp%>" />
  <input type="hidden" id="znombreemp" name="znombreemp"  value="<%=znombreemp%>" />
  <input type="hidden" id="zfiltrotp" name="zfiltrotp"  value="<%=zfiltrotp%>" />
  <input type="hidden" id="znombretp" name="znombretp"  value="<%=znombretp%>" />
  <input type="hidden" id="zinicios" name="zinicios"  value="" />
  <input type="hidden" id="proc" name="proc" value="<%=zproc%>"  />
  </form>
<%}%>
  <form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_det.jsp?estado=31" method="post" name="detinterview" id="detinterview">
  <input type="hidden" id="zPRP_ID_HR_ENCR" name="zPRP_ID_HR_ENCR" value="" />
  <input type="hidden" id="zPRP_OR_HR_PERIOD_ENCR" name="zPRP_OR_HR_PERIOD_ENCR" value="" />
  <input type="hidden" id="zPRP_DT_REQUEST_ENCR" name="zPRP_DT_REQUEST_ENCR" value="" />
  <input type="hidden" id="zPRP_ID_INTERVIEW_TYPE_ENCR" name="zPRP_ID_INTERVIEW_TYPE_ENCR" value="" />
  <input type="hidden" id="zVis" name="zVis" value="" />
  <input type="hidden" id="zgoto" name="zgoto" value="LIST" />
  </form>
<form name="NombreFormulario" id="NombreFormulario" action=" ">
 <% if (zVis.equals("1")){%>
  <table width="100%" cellspacing="0">
<%}else{%>
  <table class="barraregistros" width="100%" cellspacing="0">
<%}%>

<% if (zcounti > 0) {
   int zcontrol = 0;
   String zPaint="";
 %> 

<tr>
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_INTERVIEW_NAME%>"  htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_DT_REQUEST%>"  htmlsafe = "true"/></td>  
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_NM_INTERVIEW_TYPE%>"  htmlsafe = "true"/></td> 
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_DT_FINISH%>"  htmlsafe = "true"/></td> 
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_GB_NAME_EMP%>"  htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_GB_NAME_RESP%>"  htmlsafe = "true"/></td>
</tr> 
<%  
  try {
    M4Operations t = new M4Operations(request);
    int i = 0;
    for (i =zregistroinicial; i < zregistrofinal+1; i++){
        String id = String.valueOf(i);
        t.moveData(znodo,zmeta4object,znodo,id);
          zcontrol = i%2;
   if (zcontrol==0){zPaint="";}else{zPaint="2";}
%>
  <tr>
  <m4:item item="SCO_ID_HR" htmlsafe="true" outputdef="<%=znodo%>" var="sIdHR" />
  <%sIdHR = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdHR);%>
  <m4:item item="SCO_OR_HR_PERIOD" htmlsafe="true" outputdef="<%=znodo%>" var="sOrHrPeriod" />
  <%sOrHrPeriod = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sOrHrPeriod);%>
  <m4:item item="SCO_DT_REQUEST" htmlsafe="true" outputdef="<%=znodo%>" var="sDtRequest" />
  <%sDtRequest = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sDtRequest);%>
  <m4:item item="SCO_ID_INTERVIEW_TYPE" htmlsafe="true" outputdef="<%=znodo%>" var="sIdInterviewType" />
  <%sIdInterviewType = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdInterviewType);%>

  <td class="fuentevalor<%=zPaint%>" >
  <a class="enlacefuncional" title="<m4:label m4name="<%=zSCO_INTERVIEW_NAME%>" htmlsafe = "true"/>" href="javascript:interview_det('<%=sIdHR%>','<%=sOrHrPeriod%>','<%=sDtRequest%>','<%=sIdInterviewType%>')"><m4:item m4name="<%=zSCO_INTERVIEW_NAME%>" htmlsafe = "true"/></a></td>

  <td class="fuentevalor<%=zPaint%>" ><m4:item m4name="<%=zSCO_DT_REQUEST%>"  htmlsafe = "true"/></td>
  <td class="fuentevalor<%=zPaint%>" ><m4:item m4name="<%=zSCO_NM_INTERVIEW_TYPE%>"  htmlsafe="true"/></td>
  <td class="fuentevalor<%=zPaint%>" ><m4:item m4name="<%=zSCO_DT_FINISH%>"  htmlsafe="true"/></td>
  <td class="fuentevalor<%=zPaint%>" ><m4:item m4name="<%=zSCO_GB_NAME_EMP%>"  htmlsafe = "true"/></td>
  <td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCO_GB_NAME_RESP%>"  htmlsafe = "true"/></td>
  </tr>
  <%}%>

<%
  } catch(Exception e) {}
%>   

<%}else{%>
  <tr><td colspan="10" class="tablaestadosceldatitulo"><%=tranivMSS.getProperty("iv_mss.NoIvEmp")%></td></tr>
<%}%>

</table>
<% if (zVis.equals("1")){%>
<%@include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_ventanas_post.jsp"%>
<%}%>
<% if (zVis.equals("1")){%>
  <%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-mssgenerico_disclaimer.jsp" %>
<%}%>

</form>

<m4:endpage/>
</body>
</html>