<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_filter.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/fun_gen_act.js"></script>
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_doc.js"></script>
<%@ include file="/mss_g3/smco_iv_trans.jsp"%>
<%
  String zDtStartApp = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDT_START_APP");
  //desencrypt zDT_START_APP
  zDtStartApp = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zDtStartApp);
  
  String zIdAppl = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zID_APP");
  //desencrypt zID_APP
  zIdAppl = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zIdAppl);
  
  String zIdInterview = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zID_INTERV");
  //desencrypt zID_INTERV
  zIdInterview = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zIdInterview);
  
  String zIdInterviewer = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zID_INTERVIEWER");
  //desencrypt zID_INTERVIEWER
  zIdInterviewer = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zIdInterviewer);

  String zInfo = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "INFO");
  if ((zDtStartApp==null)||(zDtStartApp.equals(""))){zDtStartApp="";}
  if ((zIdAppl==null)||(zIdAppl.equals(""))){zIdAppl="";}
  if ((zIdInterview==null)||(zIdInterview.equals(""))){zIdInterview="";}
  if ((zIdInterviewer==null)||(zIdInterviewer.equals(""))){zIdInterviewer="";}
  if ((zInfo==null)||(zInfo.equals(""))){zInfo="";}

  M4SessionCl zsession = M4Context.getM4SessionCl(request);
  String zNmInterviewer = zsession.getBagEntries("minombre");

  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "estado");
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zinicios");
  if ((estado==null)||(estado.equals(""))){estado="0";}
  if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
<title><%=tranivMSS.getProperty("iv_mss.Resultentrev")%></title></head><body>
<%@ include file="../../mss_generico/espanol/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
String zsubsesion = "SMCO_IV_INTERV_RES";   
String zpage = "mss_g3/smco_g3_p31_det.jsp";  
%>
<%
int zTabess=0;
String zParametroAct = "";
String zACC = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "ACC");
if ((zACC==null)||(zACC.equals(""))){zParametroAct="";
}else{
  zParametroAct +="ACC=" + zACC + "{"; 
  String nombre = "";
  String valor = "";
  String ristraErr = "";
  Enumeration oenum = request.getParameterNames();
  while(oenum.hasMoreElements ()){
    nombre = (String) oenum.nextElement();
    valor =  com.meta4.taglib.util.M4SafeRequest.getParameter(request, nombre);
    if (nombre.equals("ACC")){
      //
    }else {
      if (nombre.equals("SCO_ID_DOC")) {valor = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", valor);}
      zParametroAct += nombre + "=" + valor + "{" ;
    } 
  }
}
String zm4object = zsubsesion;
String znodo = "SSE_MT_GEN";
String znodo1 = "M4T_X_APP_RESULT";
String znodo2 = "M4T_X_INTER_RES";
String znodo3 = "M4T_APP_INT_PTE_RES";

String ztipocarga = "RESULT";
String zmetodocarga = zm4object + "!" + znodo + ".SSE_ACTION_LOAD";   
String zmetodotp = zm4object + "!" + znodo + ".SMCO_LOAD_APP_TYPE_FEEDBACK";    
String zventanas = "20";
int zvuelta = 5;
  
int zregistroinicial = Integer.valueOf(zinicios).intValue();          
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;
  
String zoutputdef = zm4object + "!" + znodo + "[*]";   
String zmove = znodo + ":" + znodo + "[FIRST]";
String zcomun = znodo + ":" + zm4object  + "!" + znodo + ".";
String zraiz =  znodo + ":" + zm4object  + "!" + znodo + ".";

String zoutputdef1 = zm4object + "!" + znodo1 + "[*]";   
String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";
String zcomun1 = znodo1 + ":" + zm4object + "!" + znodo1 + "[&VAR.m4lix]" + ".";

String zoutputdef2 = zm4object + "!" + znodo2 + "[*]";   
String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
String zcomun2 = znodo2 + ":" + zm4object + "!" + znodo2 + "[&VAR.m4lix]" + ".";

String zoutputdef3 = zm4object + "!" + znodo3 + "[*]";   
String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
String zcomun3 = znodo3 + ":" + zm4object + "!" + znodo3 + ".";
                      
String zDtStart="SCO_DT_START_APP";
String zIdApp="SCO_ID_APP";
String zNmApp="SCO_GB_NAME";
String zOrInterv="SCO_OR_INTERVIEW";
String zNmInterv="SCO_NM_INTERVIEW";
String zOrIntviewer="SCO_OR_INTERVIEWER";
String zIdIntviewer="SCO_ID_HR_INTERV";
String zOrRecPr="SCO_OR_RECRUIT_PR";
String zNmRecPr="SCO_NM_RECRUITMENT";
String zInterRes="SCO_ID_INTER_RES";
String zNmInterRes="SCO_NM_INTER_RES";
String zIdDoc="SCO_ID_DOC";
String zOrHrDoc="SCO_OR_HR_DOC";
String zAppResult="SCO_APP_RESULT";
String zComment="SCO_COMMENT";
String ztpApplicant="SMCO_APPLICANT_TYPE_FEEDBACK";
String zthereAreProc="SMCO_THERE_ARE_REC_PR_FEEDBACK";

String zvDtStart = zcomun + zDtStart;
String zvIdApp = zcomun + zIdApp;
String zvNmApp = zcomun + zNmApp;
String zvOrInterv = zcomun + zOrInterv;
String zvNmInterv = zcomun + zNmInterv;
String zvIdIntviewer = zcomun + zIdIntviewer;
String zvOrIntviewer = zcomun + zOrIntviewer;
String zvOrRecPr = zcomun + zOrRecPr;
String zvNmRecPr = zcomun + zNmRecPr;
String zvInterRes = zcomun + zInterRes;
String zvNmInterRes = zcomun + zNmInterRes;
String zvIdDoc = zcomun + zIdDoc;
String zvOrHrDoc = zcomun + zOrHrDoc;
String zvAppResult = zcomun + zAppResult;
String zvComment = zcomun + zComment;
String zvtpApplicant = zcomun + ztpApplicant;
String zvthereAreProc=zcomun + zthereAreProc;

String zvIdAppResult1 = zcomun1 + "SCO_ID_APP_RESULT";
String zvAppResult1 = zcomun1 + "SCO_NM_APP_RESULT";
String zvIdInterRes2 = zcomun2 + "SCO_ID_INTER_RES";
String zvNmInterRes2 = zcomun2 + "SCO_NM_INTER_RES";

String zvDtStart3 = zcomun3 + "SCO_DT_START_APP";
String zvIdApp3 = zcomun3 + "SCO_ID_APP";
String zvNmApp3 = zcomun3 + "SCO_GB_NAME";
String zvOrInterv3 = zcomun3 + "SCO_OR_INTERVIEW";
String zvNmInterv3 = zcomun3 + "SCO_NM_INTERVIEW";
String zvOrIntviewer3 = zcomun3 + "SCO_OR_INTERVIEWER";
String zvOrRecPr3 = zcomun3 + zOrRecPr;
String zvNmRecPr3 = zcomun3 + zNmRecPr;
%>
</head><body>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zm4object%>" m4name="<%=zm4object%>"/>
<% try {
      M4Operations m = new M4Operations(request);
      m.setItem(zsubsesion,znodo,"","SMCO_ID_APP",zIdAppl);
    m.setItem(zsubsesion,znodo,"","SMCO_DT_START",zDtStartApp);
    m.setItem(zsubsesion,znodo,"","SMCO_ID_INT",zIdInterview);
    m.setItem(zsubsesion,znodo,"","SMCO_OR_INTER",zIdInterviewer);
  } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>">
  <m4:param name="ARG_ACTION" value="<%=zParametroAct%>"/>
  <m4:param name="ARG_LOAD" value="<%=ztipocarga%>"/>
</m4:exec>
<m4:exec m4method="<%=zmetodotp%>"/>

<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>" ><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>" ><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>" ><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove3%>"/></m4:move>
<%int  zcount  = 0;
int  zcounti  = 0;
int  zcounti1  = 0;
int  zcounti2  = 0;
int  zcounti3  = 0;
String zerror = "0";
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zm4object,znodo);
    zcounti = m.getCountInClient(znodo,zm4object,znodo);
  zcounti1 = m.getCountInClient(znodo1,zm4object,znodo1);
  zcounti2 = m.getCountInClient(znodo2,zm4object,znodo2);
  zcounti3 = m.getCountInClient(znodo3,zm4object,znodo3);
  zerror = m.getItem(znodo,zsubsesion,znodo,"","SSE_SHOW_ERROR");
} catch(Exception e) {}
String  zcountv = String.valueOf(zcounti);
String  zcountv1 = String.valueOf(zcounti1 -1);
String  zcountv2 = String.valueOf(zcounti2-1);
String  zcountv3 = String.valueOf(zcounti3);
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
String zposicions = "0";
int zcontrol = 0;
int zposicion =0;

if(zerror.equals("1") == true){%>
<script type="text/javascript">
  urlLista = "/servlet/CheckSecurity/JSP/sse_g0/sse_gen_informacion_usuario.jsp?zsubsesion="+'<%=zsubsesion%>';
  msgWindow = window.open(urlLista,"Error","width=600,height=200,top=300,left=300,resizable,scrollbars,fullscreen=no");
</script>
<%}

if((zInfo.equals("1") == true)&&(zerror.equals("0") == true)){%>
<script type="text/javascript">
  urlLista = "/servlet/CheckSecurity/JSP/mss_g3/smco_iv_info_usuario.jsp?zsubsesion="+'<%=zsubsesion%>';
  msgWindow = window.open(urlLista,"Error","width=400,height=200,top=300,left=300,resizable,scrollbars,fullscreen=no");
</script>
<%}%>

<script type="text/javascript" language="Javascript1.5">
function searchoption(sform,sidinput,sidoption){
  oselect=document.forms[sform].elements[sidinput];
  for(var ni=0; ni< oselect.options.length; ni++){    
    if (oselect.options[ni].value == sidoption){
    oselect.selectedIndex = ni; 
    break;
    }
  } 

}
function enviar(){
var error = 0;
var dtstart = m4valor("NombreFormulario","XSCO_DT_START_APP","","get");
dtstartok = m4fechacomprobacion(m4objeto('XSCO_DT_START_APP','NombreFormulario'),"");
if (( dtstart =="") || (dtstartok == "")){
  error = 1
  m4setlog("_date_oblig",'<m4:label m4name="<%=zvDtStart%>" jsafe="true"/>','dd-mm-yyyy');
  return;
}
var IdApp = m4valor("NombreFormulario","XSCO_ID_APP","","get");
if (IdApp == "") {
  error = 1
  m4setlog("_oblig",'<m4:label m4name="<%=zvIdApp%>" jsafe="true"/>');
  return;
}
var OrInterv = m4valor("NombreFormulario","XSCO_OR_INTERVIEW","","get");
if (OrInterv == "") {
  error = 1
  m4setlog("_oblig",'<m4:label m4name="<%=zvOrInterv%>" jsafe="true"/>');
  return;
}
m4valor("NombreFormulario","INFO","1","set");
m4submit("NombreFormulario");
}

function ssco_change_text()
{
  var siddoc = m4valor("NombreFormulario","SCO_ID_DOC","","get");
  var sError = "";
  if (siddoc!="" && siddoc!="0" && siddoc!=null)
    {
     sError = m4getmessage("_s1_co_mss_iv_0");
    }
  else
    {
     sError = m4getmessage("_s1_co_mss_iv_1");
    }
 m4valor("NombreFormulario","lblDocument",sError,"set");
}

</script>

<m4:item m4varname="tp_applicant" m4name="<%=zvtpApplicant%>"/>
<m4:item m4varname="no_there_are_pro" m4name="<%=zvthereAreProc%>"/>

<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2"><%=tranivMSS.getProperty("iv_mss.Resultentrev")%></td></tr>
<tr>
  <td><img src="/iconos/noname_puesto_144_100.gif" width="99" height="100" alt="" ></td>
  <td class="descripcionfuncional"><%=tranivMSS.getProperty("iv_mss.DescFunResultInt")%></td>
</tr>
</table>

<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p31_feedback.jsp" method="post" name="SendFeedback" id="SendFeedback">
<input type="hidden" id="start_applicant" name="start_applicant" value="<%=zDtStartApp%>" />
<input type="hidden" id="applicant" name="applicant" value="<%=zIdAppl%>" />
<input type="hidden" id="interview" name="interview" value="<%=zIdInterview%>" />
</form>

<form action="/servlet/CheckSecurity/JSP/<%=zpage%>" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="ACC" name="ACC" value="INS" />
<%zDtStartApp = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zDtStartApp);%>
<input type="hidden" id="zDT_START_APP" name="zDT_START_APP" value="<%=zDtStartApp%>" />
<%zIdAppl = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIdAppl);%>
<input type="hidden" id="zID_APP" name="zID_APP" value="<%=zIdAppl%>" />
<%zIdInterview = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIdInterview);%>
<input type="hidden" id="zID_INTERV" name="zID_INTERV" value="<%=zIdInterview%>" />
<%zIdInterviewer = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIdInterviewer);%>
<input type="hidden" id="zID_INTERVIEWER" name="zID_INTERVIEWER" value="<%=zIdInterviewer%>" />
<m4:item m4name="<%=zvIdDoc%>" htmlsafe="true" m4varname="sIdDoc"/>
<%if (!sIdDoc.equals("")) sIdDoc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdDoc);%>
<input type="hidden" id="SCO_ID_DOC" name="SCO_ID_DOC"  onchange="javascript:ssco_set_status();" value="<%=sIdDoc%>" />
<input type="hidden" id="INFO" name="INFO" value="<%=zInfo%>" />

<table class = "table_gen" width="100%" cellspacing="0">
<thead><tr class="tit"><th  id="m4tit" colspan="2" ></th><th class="tablamenuright">&nbsp;</th><td align="right"><a title="<%=tranivMSS.getProperty("iv_mss.SelecInt")%>"href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p31.jsp?estado=31" ><img alt="<%=tranivMSS.getProperty("iv_mss.SelecInt")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td></tr></thead> 
<tbody>
<tr>  <% if (zcounti > 0) { %>
  <td class="lin">&nbsp;<m4:label m4name="<%=zvDtStart%>" htmlsafe="true"/></td>
  <td class="lin">&nbsp;<m4:item m4name="<%=zvDtStart%>" htmlsafe="true"/></td>
  <input type="hidden"  name="XSCO_DT_START_APP" id="XSCO_DT_START_APP" value="<m4:item m4name="<%=zvDtStart%>" htmlsafe="true"/>" />
  
  <%}else{%>
  <td class="lin">&nbsp;<m4:label m4name="<%=zvDtStart%>" htmlsafe="true"/></td>
  <td class="lin">&nbsp;<m4:item m4name="<%=zvDtStart3%>" htmlsafe="true"/></td>
  <input type="hidden"  name="XSCO_DT_START_APP" id="XSCO_DT_START_APP" value="<m4:item m4name="<%=zvDtStart3%>" htmlsafe="true"/>" />
  <%}%>
  <%if (tp_applicant.equals("02")){%>
    <%if (no_there_are_pro.equals("0")){%>
      <td rowspan="4"><a href="javascript:m4submit('SendFeedback');"><img alt="<%=tranivMSS.getProperty("iv_mss.FeedBackTitle")%>" src="/iconos/alta_usu.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a></td>
    <%}else{%>
      <td rowspan="4"><a href="javascript:m4submit('SendFeedback');"><img alt="<%=tranivMSS.getProperty("iv_mss.FeedBackTitle")%>" src="/iconos/admiracion_azul.gif" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  /><%=tranivMSS.getProperty("iv_mss.Aviso")%></a></td>


    <%}%>
  <%}else{%>
    <td rowspan="4">&nbsp;</td>
  <%}%>

</tr>
<tr>
  <td class="lin">&nbsp;<m4:label m4name="<%=zvNmApp%>" htmlsafe="true"/></td>
  <% if (zcounti > 0) { %>
  <td class="lin" colspan="3">&nbsp;<m4:item m4name="<%=zvNmApp%>" htmlsafe="true"/></td>
  <input type="hidden" id="XSCO_ID_APP" name="XSCO_ID_APP"  value="<m4:item m4name="<%=zvIdApp%>" htmlsafe="true"/>" />
  <%}else{%>
  <td class="lin" colspan="3">&nbsp;<m4:item m4name="<%=zvNmApp3%>" htmlsafe="true"/></td>
  <input type="hidden" id="XSCO_ID_APP" name="XSCO_ID_APP"  value="<m4:item m4name="<%=zvIdApp3%>" htmlsafe="true"/>" />
  <%}%>
</tr>
<tr>
  <td class="lin">&nbsp;<m4:label m4name="<%=zvNmInterv%>" htmlsafe="true"/></a></td>
  <% if (zcounti > 0) { %>
  <td class="lin" colspan="3">&nbsp;<m4:item m4name="<%=zvNmInterv%>" htmlsafe="true"/></td>
  <input type="hidden" id="XSCO_OR_INTERVIEW" name="XSCO_OR_INTERVIEW"  value="<m4:item m4name="<%=zvOrInterv%>" htmlsafe="true"/>" />
  <%}else{%>
  <td class="lin" colspan="3">&nbsp;<m4:item m4name="<%=zvNmInterv3%>" htmlsafe="true"/></td>
  <input type="hidden" id="XSCO_OR_INTERVIEW" name="XSCO_OR_INTERVIEW"  value="<m4:item m4name="<%=zvOrInterv3%>" htmlsafe="true"/>" />
  <%}%>
</tr>
<tr>
  <td class="lin">&nbsp;<m4:label m4name="<%=zvIdIntviewer%>" htmlsafe="true"/></a></td>
  <% if (zcounti > 0) { %>
  <td class="lin" colspan="3">&nbsp;<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zNmInterviewer)%></td>
  <input type="hidden" id="XSCO_OR_INTERVIEWER" name="XSCO_OR_INTERVIEWER"  value="<m4:item m4name="<%=zvOrIntviewer%>" htmlsafe="true"/>" />
  <%}else{%>
  <td class="lin" colspan="3">&nbsp;<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zNmInterviewer)%></td>
  <%}%>
  <input type="hidden" id="XSCO_OR_INTERVIEWER" name="XSCO_OR_INTERVIEWER"  value="<m4:item m4name="<%=zvOrIntviewer3%>" htmlsafe="true"/>" />
</tr>
<tr>
  <td class="lin">&nbsp;<m4:label m4name="<%=zvNmRecPr%>" htmlsafe="true"/></a></td>
  <% if (zcounti > 0) { %>
  <td class="lin" colspan="3">&nbsp;<m4:item m4name="<%=zvNmRecPr%>" htmlsafe="true"/></td>
  <%}else{%>
  <td class="lin" colspan="3">&nbsp;<m4:item m4name="<%=zvNmRecPr3%>" htmlsafe="true"/></td>
  <%}%>
</tr>
<tr><td><br></br></td></tr>
<tr>
  <td class="lin" >&nbsp;<m4:label m4name="<%=zvInterRes%>" htmlsafe="true"/></td>
  <td class="lin">&nbsp;<select class="i_select"id="SCO_ID_INTER_RES"  name="SCO_ID_INTER_RES" title="<%=tranivMSS.getProperty("iv_mss.AppResult")%>">  
  <option value=""></option>
  <m4:loop from="0" to="<%=zcountv2%>">
  <option value="<m4:item m4name="<%=zvIdInterRes2%>" htmlsafe = "true"/>"><m4:item m4name="<%=zvNmInterRes2%>" htmlsafe = "true"/></option>
  </m4:loop>
  </select></td>

  
</tr>
<script type="text/javascript" language="Javascript1.5"><!--
 if ('<m4:item m4name="<%=zvInterRes%>" jsafe = "true"/>'!= ""){

    searchoption('NombreFormulario','SCO_ID_INTER_RES','<m4:item m4name="<%=zvInterRes%>" jsafe = "true"/>');
  }
--></script>    
<tr>
  <td class="lin" >&nbsp;<m4:label m4name="<%=zvAppResult%>" htmlsafe="true"/></td>
  <td class="lin">&nbsp;<select class="i_select"id="SCO_APP_RESULT"name="SCO_APP_RESULT" title="<%=tranivMSS.getProperty("iv_mss.AppResult")%>">  
  <option value=""></option>
  <m4:loop from="0" to="<%=zcountv1%>">
  <option value="<m4:item m4name="<%=zvIdAppResult1%>" htmlsafe = "true"/>"><m4:item m4name="<%=zvAppResult1%>" htmlsafe = "true"/></option>
  </m4:loop>
  </select>
  </td>
</tr>   
<script type="text/javascript" language="Javascript1.5"><!--
 if ('<m4:item m4name="<%=zvAppResult%>" jsafe = "true"/>'!= ""){

     searchoption('NombreFormulario','SCO_APP_RESULT','<m4:item m4name="<%=zvAppResult%>" jsafe = "true"/>');
  }
--></script>
<tr>
  <td class="lin">&nbsp;<m4:label m4name="<%=zvComment%>" htmlsafe="true"/></td>
  <td class="fuentecampo">&nbsp;<textarea rows="3" cols="40" class="i_normal" id="SCO_COMMENT" name="SCO_COMMENT"  title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zvComment%>" htmlsafe="true"/>" ><m4:item m4name="<%=zvComment%>" htmlsafe = "true"/></textarea></td>
</tr>
  <tr align="center">
            <td class="fuentecamponombre" colspan="3">
                 <input class="fuentelabel" readonly name="lblDocument" id="lblDocument" ssco_change_text() value="" size=50 /><br>
                 <button title="<%=tranivMSS.getProperty("iv_mss.LblModDoc")%>" class="fuentebotondoc" id="btnAsig" name="btnAsig" type="button" onclick="javascript:ssco_manage_document('asig');" tabindex="8"><%=tranivMSS.getProperty("iv_mss.LblGetDoc")%></button> &nbsp; &nbsp;
                 <button title="<%=tranivMSS.getProperty("iv_mss.LblViewDoc")%>" class="fuentebotondoc" id="btnView" name="btnView" type="button" onclick="javascript:ssco_manage_document('view');" tabindex="9"><%=tranivMSS.getProperty("iv_mss.LblVwDoc")%></button> &nbsp; &nbsp;
                 <button title="<%=tranivMSS.getProperty("iv_mss.LblDelDoc")%>" class="fuentebotondoc" id="btnDel" name="btnDel" type="button" onclick="javascript:ssco_manage_document('del');" tabindex="10"><%=tranivMSS.getProperty("iv_mss.LblDlDoc")%></button>
            </td>
    </tr>
  <script type="text/javascript" language="Javascript1.2">
       ssco_set_inputs('NombreFormulario','SCO_ID_DOC','btnAsig','btnView','btnDel','lblDocument');
    </script>   
<tr><td colspan="4" class="boton">&nbsp;<a <%=(zTabess + 1)%>title="<%=Tran.getProperty("Button.Send")%>"href="javascript:enviar();"><img alt="<%=Tran.getProperty("Button.Send")%>" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  /></a></td></tr>
</tbody></table>
</form>
<script type="text/javascript" language="Javascript1.5">m4tit();
 if ('<%=zcounti%>'>0){
m4act();
  }
</script>
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>