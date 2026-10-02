<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>

<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>  
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_doc.js"></script>
<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %>
<%@ include file="/mss_g3/smco_iv_trans.jsp"%>
<%
//--------------------------------------------------------  

String zVis = (String)request.getAttribute("zVis");
String empleado = "";
String zID_HR = "";

String zIdHrEncr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPRP_ID_HR_ENCR");
if (zIdHrEncr == null || zIdHrEncr.equals("")){
  empleado = "";
  zID_HR = "";
}else{
  empleado = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zIdHrEncr);
  zID_HR = empleado;
}

String periodo = "";
String zOR_HR_PERIOD = "";
String zOrHrEncr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPRP_OR_HR_PERIOD_ENCR");
if (zOrHrEncr == null || zOrHrEncr.equals("")){
  periodo="";
  zOR_HR_PERIOD = "";
}else{
  periodo = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zOrHrEncr);
  zOR_HR_PERIOD = periodo;
}

String zDT_REQUEST = "";
String zDtReqEncr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPRP_DT_REQUEST_ENCR");
if (zDtReqEncr == null || zDtReqEncr.equals("")){
  zDT_REQUEST="";
}else{
  zDT_REQUEST = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zDtReqEncr);
}

String zID_INTERVIEW_TYPE = "";
String zIdInTypeEncr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPRP_ID_INTERVIEW_TYPE_ENCR");
if (zIdInTypeEncr == null || zIdInTypeEncr.equals("")){
  zID_INTERVIEW_TYPE="";
}else{
  zID_INTERVIEW_TYPE = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zIdInTypeEncr);
}

zID_HR = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zID_HR);
zOR_HR_PERIOD = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zOR_HR_PERIOD);
zID_INTERVIEW_TYPE = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zID_INTERVIEW_TYPE);

String bDateOk = "0";
String zID_WORKITEM = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKITEM");
zID_WORKITEM = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zID_WORKITEM);
if (zID_WORKITEM==null){zID_WORKITEM="";}
else{
  bDateOk = "1";
}

String zSMCO_ID_HR = "";
if ((zVis==null)||(zVis.equals(""))){zVis = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis");};
if ((zVis==null)||(zVis.equals(""))){
  zVis = "1";
}
else{
  //Caragmos para un empleado concreto
  zSMCO_ID_HR = empleado;
}

String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
String zgoto = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zgoto");
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((zgoto==null)||(zgoto.equals(""))){zgoto = "0";}

//--------------------------------------------------------
%>
<script type="text/javascript" language="Javascript1.5">

function searchoption(sform,sidinput,sidoption)
{
  oselect=document.forms[sform].elements[sidinput];
  for (var ni=0; ni< oselect.options.length; ni++)
    {    
      if (oselect.options[ni].value == sidoption)
        {
          oselect.selectedIndex = ni; 
          break;
        }
    } 
}

function ssco_change_text()
{
  var siddoc = m4valor("frmSaveInterview","SCO_ID_DOC","","get");
  var sError = "";
  
  if (siddoc!="" && siddoc!="0" && siddoc!=null)
    {
      sError = m4getmessage("_s1_co_mss_iv_0");
    }
  else
    {
      sError = m4getmessage("_s1_co_mss_iv_1");
    }
 m4valor("frmSaveInterview","lblDocument",sError,"set");
}

function comprobar()
{
  var error = 0;
  var texto = m4getmessage("_s1_co_mss_iv_2") + "\n";

  var dtend = m4valor("frmSaveInterview","SCO_DT_FINISH","","get");
  var dtendok = m4fechacomprobacion(m4objeto('SCO_DT_FINISH','frmSaveInterview'),"");
  var fechasok = m4compfechas(m4objeto('SCO_DT_REQUEST','frmSaveInterview'),'<=',m4objeto('SCO_DT_FINISH',
  'frmSaveInterview'));
  
  var zDate;
  zDate = m4fechahoy();
  
  m4valor("frmSaveInterview","zDTTODAY",zDate,"set");
  
  var fechashoyok = m4compfechas(m4objeto('SCO_DT_FINISH','frmSaveInterview'),'<=',m4objeto('zDTTODAY',
  'frmSaveInterview'));


  var sresult = m4valor("frmSaveInterview","SCO_INTERVIEW_RESULT","","get");

  var dtnextact = m4valor("frmSaveInterview","SCO_DT_NEXT_ACTION","","get");

  var dtnextactok = m4fechacomprobacion(m4objeto('SCO_DT_NEXT_ACTION','frmSaveInterview'),"");
  var fechasnextactok = m4compfechas(m4objeto('SCO_DT_FINISH','frmSaveInterview'),'<=',m4objeto('SCO_DT_NEXT_ACTION','frmSaveInterview'));

  var dtnextiv = m4valor("frmSaveInterview","SCO_DT_NEXT_INTERVIEW","","get");
  
  var dtnextivok = m4fechacomprobacion(m4objeto('SCO_DT_NEXT_INTERVIEW','frmSaveInterview'),"");
  var fechasnextivok = m4compfechas(m4objeto('SCO_DT_FINISH','frmSaveInterview'),'<=',m4objeto('SCO_DT_NEXT_INTERVIEW','frmSaveInterview'));
  
  if (dtend == null || dtend == "")
    {
  texto = texto + "\n     " + m4getmessage("_s1_co_mss_iv_3");
  error = 1;
    }

  if ((dtend != null && dtend != "") && (dtendok == ""))
    {
  texto = texto + "\n     " + m4getmessage("_s1_co_mss_iv_4");
  error = 1;
    }

  if ((dtend != null && dtend != "") && (dtendok != "") && (fechasok == false))
    {
  texto = texto +"\n     " + m4getmessage("_s1_co_mss_iv_5");
  error = 1;
    }
  
  if ((dtend != null && dtend != "") && (dtendok != "") && (fechashoyok == false))
    {
  texto = texto +"\n     " + m4getmessage("_s1_co_mss_iv_6");
  error = 1;
    }

  if (sresult == null || sresult == "")
    {
      texto = texto + "\n     " + m4getmessage("_s1_co_mss_iv_7");
      error = 1;
    }
  
  if ((dtnextact != null && dtnextact != "") && (dtnextactok == ""))
    {
      texto = texto + "\n     " + m4getmessage("_s1_co_mss_iv_8");
      error = 1;
    }

  if ((dtnextact != null && dtnextact != "") && (dtnextactok != "") && (fechasnextactok == false))
    {
      texto = texto + "\n     " + m4getmessage("_s1_co_mss_iv_13");
      error = 1;
    }

  if ((dtnextiv != null && dtnextiv != "") && (dtnextivok == ""))
    {
      texto = texto + "\n     " + m4getmessage("_s1_co_mss_iv_9"); 
      error = 1;
    }

  if ((dtnextiv != null && dtnextiv != "") && (dtnextivok != "") && (fechasnextivok == false))
    {
      texto = texto + "\n     " + m4getmessage("_s1_co_mss_iv_14"); 
      error = 1;
    }

  if (error == 1)
    {
      alert(texto);
      return;
    }
  else 
    {
      dtrequest = m4valor("frmSaveInterview","SCO_DT_REQUEST","","get");
      m4valor("frmSaveInterview","SCO_DT_REQUEST",m4date_back(dtrequest),"set");
      m4valor("frmSaveInterview","SCO_DT_FINISH",m4date_back(dtend),"set");
      if (dtnextact != "") {
        m4valor("frmSaveInterview","SCO_DT_NEXT_ACTION",m4date_back(dtnextact),"set");
      }
      if (dtnextiv != "") {
        m4valor("frmSaveInterview","SCO_DT_NEXT_INTERVIEW",m4date_back(dtnextiv),"set");
      }

      m4submit("frmSaveInterview");
    }
}

function volver_prof(){
  document.getElementById("cargando").className = ""
  m4submit("volver") ;
  }

</script>




<% String zTitle = tranivMSS.getProperty("iv_mss.LblDetIv"); %>
<title> <%=zTitle%> </title>
</head>
<body>

<% if (zVis.equals("1")){%>
  <%@ include file="../../mss_generico/espanol/mssgenerico_menusup.jsp" %>
  <%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%}%>

<%
   String zsubsesion = "SSM_GN_INTERVIEW";
   String zmeta4object = "SSM_GN_INTERVIEW";
   String znode = "SSM_GN_INTERVIEW";
   String znodorst = "M4T_X_INTERVIEW_RESULT";
   String znodoact = "M4T_X_SUG_ACTION";

// No se modifica en general.
   String zoutputdef = zsubsesion + "!" + znode + "[*]";
   String zmove = znode + ":" + znode + "[FIRST]";
   String zcomun = znode + ":" + zsubsesion + "!" + znode + "[FIRST]" + ".";

// Metodo de carga del Meta4Object generico
   String ztipocarga = "DET";
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zSCOIDHR = zcomun + "SCO_ID_HR";
   String zSCOORHPERIOD = zcomun + "SCO_OR_HR_PERIOD";
   String zSCOIDINTERVIEWTYPE = zcomun + "SCO_ID_INTERVIEW_TYPE";
   String zSCODTREQUEST = zcomun + "SCO_DT_REQUEST";
   String zSCODTFINISH = zcomun + "SCO_DT_FINISH";
   String zSCODTNEXTINTERVIEW = zcomun + "SCO_DT_NEXT_INTERVIEW";
   String zSCODTNEXTACTION = zcomun + "SCO_DT_NEXT_ACTION";
   String zSCOGBNAME = zcomun + "SCO_GB_NAME";
   String zSCOIDINTERVIEWDOC = zcomun + "SCO_ID_INTERVIEW_DOC";
   String zSCOIDIVINTERVIEWRESULT = zcomun + "SCO_ID_INTERVIEW_RESULT";
   String zSCOIDIVACTIONTYPE = zcomun + "SCO_ID_ACTION_TYPE";
   String zSCOINTERVIEWNAME = zcomun + "SCO_INTERVIEW_NAME";
   String zSCOINTERVIEWREASON = zcomun + "SCO_INTERVIEW_REASON";
   String zSCOINTERVIEWRESULT = zcomun + "SCO_INTERVIEW_RESULT";
   String zSCONMINTERVIEWPRIORITY = zcomun + "SCO_NM_INTERVIEW_PRIORITY";
   String zSCONMINTERVIEWTYPE = zcomun + "SCO_NM_INTERVIEW_TYPE";
   String zSCOINTERVIEWERCOMENT = zcomun + "SCO_INTERVIEWER_COMMENT";
   String zSCOIDDOC = zcomun + "SCO_ID_DOC";
   String zSCOORHRDOC = zcomun + "SCO_OR_HR_DOC";

   String zoutputdefrst = zsubsesion + "!" + znodorst + "[*]";
   String zmoverst = znodorst + ":" + znodorst + "[FIRST]";
   String zcomunrst = znodorst + ":" + zsubsesion + "!" + znodorst + "[&VAR.m4lix]" + ".";

   String zSCOIDINTERVIEWRESULT = zcomunrst + "SCO_ID_INTERVIEW_RESULT";
   String zSCONMINTERVIEWRESULT = zcomunrst + "SCO_NM_INTERVIEW_RESULT";

   String zoutputdefact = zsubsesion + "!" + znodoact + "[*]";
   String zmoveact = znodoact + ":" + znodoact + "[FIRST]";
   String zcomunact = znodoact + ":" + zsubsesion + "!" + znodoact + "[&VAR.m4lix]" + ".";

   String zSCOIDACTIONTYPE = zcomunact + "SCO_ID_ACTION_TYPE";
   String zSCONMACTIONTYPE = zcomunact + "SCO_NM_ACTION_TYPE";

%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request); 
      m.setItem(zsubsesion,znode,"","PRP_ID_HR",zID_HR);
      m.setItem(zsubsesion,znode,"","PRP_OR_HR_PERIOD",zOR_HR_PERIOD);
      m.setItem(zsubsesion,znode,"","PRP_DT_REQUEST_AUX",zDT_REQUEST);
      m.setItem(zsubsesion,znode,"","PRP_ID_INTERVIEW_TYPE",zID_INTERVIEW_TYPE);
      m.setItem(zsubsesion,znode,"","PRP_DATE_OK",bDateOk);
  } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znode%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodorst%>"><m4:param name="m4name0" value="<%=zoutputdefrst%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodoact%>"><m4:param name="m4name0" value="<%=zoutputdefact%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoverst%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveact%>"/></m4:move>
<m4:item m4name="<%=zSCOIDINTERVIEWDOC%>" m4varname="zIdDocType" htmlsafe = "true"/>
<%if (!zIdDocType.equals("")) zIdDocType= com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIdDocType);%>
<%
  int  zcountitmpintrst  = 0;
  int  zcountitmpintact  = 0;
  try {
      M4Operations m = new M4Operations(request);
      zcountitmpintrst = m.getCountInClient(znodorst,zsubsesion,znodorst);
      zcountitmpintact = m.getCountInClient(znodoact,zsubsesion,znodoact);
  } catch(Exception e) {}
  String  zcountvtmpintrst = String.valueOf(zcountitmpintrst);
  String ztotmpintrst = new Integer(new Integer(zcountvtmpintrst).intValue()-1).toString();
  String  zcountvtmpintact = String.valueOf(zcountitmpintact);
  String ztotmpintact = new Integer(new Integer(zcountvtmpintact).intValue()-1).toString();
%>
<table width="100%">
  <tr>
    <td class="titulofuncional" colspan="2">
      <m4:item m4name="<%=zSCOINTERVIEWNAME%>" htmlsafe = "true"/>
    </td>
  </tr>
<%if ((zVis==null)||(zVis.equals(""))){%>
  <tr>
    <td>
      <img alt="<%=zTitle%>" src="/iconos/noname_objetivos_ess_103_100.gif" width="103" height="100"/>
    </td>
    <td>
      <div class="descripcionfuncional">
        <%=tranivMSS.getProperty("iv_mss.DetIvTitle")%>
      </div>
      <ul class="enlacefuncional">
        <li>
          <% if (zgoto.equals("LIST")) 
             {
           %>
          <a title="<%=tranivMSS.getProperty("iv_mss.LblGoto")%> <%=tranivMSS.getProperty("iv_mss.EmpInterview")%>" href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_list.jsp?estado=31"><%=tranivMSS.getProperty("iv_mss.EmpInterview")%></a>
      <%
              } else {
           %>
          <a title="<%=tranivMSS.getProperty("iv_mss.LblGoto")%> <%=tranivMSS.getProperty("iv_mss.GestInterview")%>" href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31"><%=tranivMSS.getProperty("iv_mss.GestInterview")%></a>
             <%
              }
           %>
        </li>
      </ul>
    </td>
  </tr>
<%}%>
  </table>
  <table class = "tablaestados" cellspacing="0" width="100%">
  <tr class = "tablaestadosceldatitulo">
    <td>
        <%=tranivMSS.getProperty("iv_mss.LblDetIv")%>
    </td>
                <td class="tablamenuright">
                    <% if (zgoto.equals("LIST")) 
                         {
                    %>
              <% if (zVis.equals("1")){%>
                     <a title="<%=tranivMSS.getProperty("iv_mss.EmpInterview")%>" href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_list.jsp?estado=31">
                        <img alt="<%=tranivMSS.getProperty("iv_mss.EmpInterview")%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />                            
                    </a>
              <%}%>
                    <%
                         } 
                       else 
                         {
                    %>
              <% if (zVis.equals("1")){%>
                            <a title="<%=tranivMSS.getProperty("iv_mss.GestInterview")%>" href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31">
                              <img alt="<%=tranivMSS.getProperty("iv_mss.GestInterview")%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />                            
                              </a>
              <%}%>
                    <%
                         }
                    %>
          </td>
  </tr>
  <tr>
    <td class = "fuentevalor" width="20%">
      <m4:label m4name="<%=zSCODTREQUEST%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentevalor">
      <m4:item m4name="<%=zSCODTREQUEST%>" htmlsafe = "true"/>
    </td>
  </tr>
  <tr>
          <td class = "fuentevalor">
      <m4:label m4name="<%=zSCOGBNAME%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentevalor">
      <m4:item m4name="<%=zSCOGBNAME%>" htmlsafe = "true"/>
    </td>
  </tr>
  <tr>
    <td class = "fuentevalor">
      <m4:label m4name="<%=zSCONMINTERVIEWTYPE%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentevalor">
<form action="" name="frmivtype" id="frmivtype">
   <input type="hidden" name="SCO_ID_DOC" id="SCO_ID_DOC" value="<%=zIdDocType%>">
      <% if (!zIdDocType.equals("")) {%>
        <a title="<%=tranivMSS.getProperty("iv_mss.LblViewDoc")%>" href="javascript:ssco_manage_document('view','frmivtype','SCO_ID_DOC');"><m4:item m4name="<%=zSCONMINTERVIEWTYPE%>" htmlsafe = "true"/></a>
      <%} else {%>
        <m4:item m4name="<%=zSCONMINTERVIEWTYPE%>" htmlsafe = "true"/>
      <%}%>
    </td>
</form>
  </tr>
  <tr>
    <td class = "fuentevalor">
      <m4:label m4name="<%=zSCONMINTERVIEWPRIORITY%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentevalor">
      <m4:item m4name="<%=zSCONMINTERVIEWPRIORITY%>" htmlsafe = "true"/>
    </td>
  </tr>
  <tr>
    <td class = "fuentevalor">
      <m4:label m4name="<%=zSCOINTERVIEWREASON%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentevalor">
      <m4:item m4name="<%=zSCOINTERVIEWREASON%>" htmlsafe = "true"/>
    </td>
  </tr>
  <tr>
      <td>&nbsp;
      </td>
  </tr>
<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_send.jsp" method="post" name="frmSaveInterview" id="frmSaveInterview" onsubmit="javascript:comprobar();">

  <m4:item m4name="<%=zSCOIDHR%>" htmlsafe = "true" m4varname="sIdHr_Encr"/>
  <%sIdHr_Encr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdHr_Encr);%>
  <input class="fuenteformulario" type="hidden" name="SCO_ID_HR" id="SCO_ID_HR" value="<%=sIdHr_Encr%>"/>
  <m4:item m4name="<%=zSCOORHPERIOD%>" htmlsafe = "true" m4varname="sOrHr_Encr"/>
  <%sOrHr_Encr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sOrHr_Encr);%>
  <input class="fuenteformulario" type="hidden" name="SCO_OR_HR_PERIOD" id="SCO_OR_HR_PERIOD" value="<%=sOrHr_Encr%>"/>
  <input class="fuenteformulario" type="hidden" name="SCO_DT_REQUEST" id="SCO_DT_REQUEST" value="<m4:item m4name="<%=zSCODTREQUEST%>" htmlsafe = "true"/>"/>
  <input class="fuenteformulario" type="hidden" name="SCO_ID_INTERVIEW_TYPE" id="SCO_ID_INTERVIEW_TYPE" value= "<m4:item m4name="<%=zSCOIDINTERVIEWTYPE%>" htmlsafe = "true"/>"/>
  <input class="fuenteformulario" type="hidden" name="zDTTODAY" id="zDTTODAY" value=""/>
  <m4:item m4name="<%=zSCOIDDOC%>" htmlsafe = "true" m4varname="zIdDoc"/>
  <%if (!zIdDoc.equals("")) zIdDoc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIdDoc);%>
  <input class="fuenteformulario" type="hidden" onchange="javascript:ssco_set_status();" name="SCO_ID_DOC" id="SCO_ID_DOC" value="<%=zIdDoc%>"/>
  <input class="fuenteformulario" type="hidden" name="SCO_OR_HR_DOC" id="SCO_OR_HR_DOC" value="<m4:item m4name="<%=zSCOORHRDOC%>" htmlsafe = "true"/>"/>
  <input class="fuenteformulario" type="hidden" name="ID_WORKITEM" id="ID_WORKITEM" value="<%=zID_WORKITEM%>"/>

  <tr class = "tablaestadosceldatitulo">
    <td colspan="3">
      <%=tranivMSS.getProperty("iv_mss.LblResultIv")%>
    </td>
  </tr>

  <tr>
    <td class="fuentevalor">*&nbsp;<m4:label m4name="<%=zSCODTFINISH%>" htmlsafe="true"/></td>
    <td class="fuentevalor" colspan="2">
       <input <% if (zVis.equals("0")){%> disabled="disabled" <%}%>
       type="text" name="SCO_DT_FINISH" id="SCO_DT_FINISH" title="<%=tranivMSS.getProperty("iv_mss.LblWriteDtRelease")%>" maxlength="10" size="10" value="<m4:item m4name="<%=zSCODTFINISH%>" htmlsafe="true"/>" tabindex="1"/> 
      <% if (zVis.equals("1")){%>
      <a  href="javascript:m4calendario(m4objeto('SCO_DT_FINISH','frmSaveInterview'))"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=tranivMSS.getProperty("iv_mss.LblChooseDtRelease")%>" title="<%=tranivMSS.getProperty("iv_mss.LblChooseDtRelease")%>"/></a>
      <%}%>
    </td>
  </tr>

  <tr>
    <td class="fuentevalor">*&nbsp;<m4:label m4name="<%=zSCONMINTERVIEWRESULT%>" htmlsafe="true"/></td>
    <td class="fuentevalor" colspan="2">
      <select 
      <% if (zVis.equals("0")){%>   disabled="disabled" <%}%>
      id="SCO_ID_INTERVIEW_RESULT" class="fuenteformulario150" name="SCO_ID_INTERVIEW_RESULT" title="<%=tranivMSS.getProperty("iv_mss.LblChooseTypeReasonIv")%>" tabindex="2">
      <m4:loop from="0" to="<%=ztotmpintrst%>">
         <option value="<m4:item m4name="<%=zSCOIDINTERVIEWRESULT%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCONMINTERVIEWRESULT%>" htmlsafe="true"/></option>
      </m4:loop>
      </select>
    </td>
  </tr>
<script type="text/javascript" language="Javascript1.5">
<!--
 if ('<m4:item m4name="<%=zSCOIDIVINTERVIEWRESULT%>" jsafe = "true"/>'!= ""){

    searchoption('frmSaveInterview','SCO_ID_INTERVIEW_RESULT','<m4:item m4name="<%=zSCOIDIVINTERVIEWRESULT%>" jsafe = "true"/>');
  }
-->
</script>
  <tr>
    <td class="fuentevalor">*&nbsp;<m4:label m4name="<%=zSCOINTERVIEWRESULT%>" htmlsafe="true"/></td>
    <td class="fuentevalor" colspan="2">
       <table>
          <tr>
            <td class="fuentevalor">
    <textarea 
    <% if (zVis.equals("0")){%>   disabled="disabled" <%}%>
    class="fuentetextarea"  name="SCO_INTERVIEW_RESULT" id="SCO_INTERVIEW_RESULT" title="<%=tranivMSS.getProperty("iv_mss.LblWriteResultIv")%>" cols="100" rows="5" tabindex="3"><m4:item m4name="<%=zSCOINTERVIEWRESULT%>" htmlsafe="true"/></textarea>
            </td>
          </tr>
       </table> 
    </td>
  </tr>

  <tr>
    <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zSCONMACTIONTYPE%>" htmlsafe="true"/></td>
    <td class="fuentevalor" colspan="2">
      <select 
      <% if (zVis.equals("0")){%>   disabled="disabled" <%}%>


      id="SCO_ID_ACTION_TYPE" class="fuenteformulario150" name="SCO_ID_ACTION_TYPE" title="<%=tranivMSS.getProperty("iv_mss.LblChooseTypeactionIv")%>" tabindex="4">
         <option value=""></option>
      <m4:loop from="0" to="<%=ztotmpintrst%>">
         <option value="<m4:item m4name="<%=zSCOIDACTIONTYPE%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCONMACTIONTYPE%>" htmlsafe="true"/></option>
      </m4:loop>
      </select>
    </td>
  </tr>
<script type="text/javascript" language="Javascript1.5">
<!--
 if ('<m4:item m4name="<%=zSCOIDIVACTIONTYPE%>" jsafe = "true"/>'!= ""){

    searchoption('frmSaveInterview','SCO_ID_ACTION_TYPE','<m4:item m4name="<%=zSCOIDIVACTIONTYPE%>" jsafe = "true"/>');
  }
-->
</script>
  <tr>
    <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zSCODTNEXTACTION%>" htmlsafe="true"/></td>
    <td class="fuentevalor" colspan="2"> 
        <input 
      <% if (zVis.equals("0")){%>   disabled="disabled" <%}%>
      class="fuenteformulario" type="text" name="SCO_DT_NEXT_ACTION" id="SCO_DT_NEXT_ACTION" title="<%=tranivMSS.getProperty("iv_mss.LblWriteDtNextActIv")%>" maxlength="10" size="10" value="<m4:item m4name="<%=zSCODTNEXTACTION%>" htmlsafe="true"/>" tabindex="5" />
      <% if (zVis.equals("1")){%>
      <a href="javascript:m4calendario(m4objeto('SCO_DT_NEXT_ACTION','frmSaveInterview'))"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=tranivMSS.getProperty("iv_mss.LblChooseDtNextActIv")%>" title="<%=tranivMSS.getProperty("iv_mss.LblChooseDtNextActIv")%>" /></a>
      <%}%>
    </td>
  </tr>
  <tr>
    <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zSCODTNEXTINTERVIEW%>" htmlsafe="true"/></td>
    <td class="fuentevalor" colspan="2">
        <input 
      <% if (zVis.equals("0")){%>   disabled="disabled" <%}%>
      class="fuenteformulario" type="text" name="SCO_DT_NEXT_INTERVIEW" id="SCO_DT_NEXT_INTERVIEW" title="<%=tranivMSS.getProperty("iv_mss.LblWriteDtNextIv")%>" maxlength="10" size="10" value="<m4:item m4name="<%=zSCODTNEXTINTERVIEW%>" htmlsafe="true"/>" tabindex="6" />
      <% if (zVis.equals("1")){%>
      <a href="javascript:m4calendario(m4objeto('SCO_DT_NEXT_INTERVIEW','frmSaveInterview'))"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=tranivMSS.getProperty("iv_mss.LblChooseDtNextIv")%>" title="<%=tranivMSS.getProperty("iv_mss.LblChooseDtNextIv")%>"/></a>
      <%}%>
    </td>
  </tr>
  <tr>
    <td class="fuentevalor">&nbsp;<m4:label m4name="<%=zSCOINTERVIEWERCOMENT%>" htmlsafe="true"/></td>
    <td class="fuentevalor" colspan="2">
       <table>
          <tr>
            <td class="fuentevalor">
          <textarea 
          <% if (zVis.equals("0")){%>   disabled="disabled" <%}%>
          class="fuentetextarea"  name="SCO_INTERVIEWER_COMENT" id="SCO_INTERVIEWER_COMENT" title="<%=tranivMSS.getProperty("iv_mss.LblWriteComentIv")%>" cols="100" rows="5" tabindex="7"><m4:item m4name="<%=zSCOINTERVIEWERCOMENT%>" htmlsafe="true"/></textarea>
            </td>
          </tr>
       </table> 
    </td>
  </tr>
  <tr align="center">
          <td class="fuentecamponombre" colspan="3">
              <input class="fuentelabel" readonly name="lblDocument" id="lblDocument" value="" size=50 /><br>
              <button  class="fuentebotondoc" id="btnAsig" name="btnAsig" type="button" 
        <% if (zVis.equals("1")){%>
          title="<%=tranivMSS.getProperty("iv_mss.LblModDoc")%>" onclick="javascript:ssco_manage_document('asig');"
        <%}%>
         tabindex="8"><%=tranivMSS.getProperty("iv_mss.LblGetDoc")%></button> &nbsp; &nbsp;
              <button title="<%=tranivMSS.getProperty("iv_mss.LblViewDoc")%>" class="fuentebotondoc" id="btnView" name="btnView" type="button" onclick="javascript:ssco_manage_document('view');" tabindex="9"><%=tranivMSS.getProperty("iv_mss.LblVwDoc")%></button> &nbsp; &nbsp;
              <button class="fuentebotondoc" id="btnDel" name="btnDel" type="button"
        <% if (zVis.equals("1")){%>
          title="<%=tranivMSS.getProperty("iv_mss.LblDelDoc")%>" onclick="javascript:ssco_manage_document('del');"
        <%}%>
         tabindex="10"><%=tranivMSS.getProperty("iv_mss.LblDlDoc")%></button>
          </td>
  </tr>
        <script type="text/javascript" language="Javascript1.2">
            ssco_set_inputs('frmSaveInterview','SCO_ID_DOC','btnAsig','btnView','btnDel');
        </script>
</form>

  <tr>
    <td class="fuenteboton" colspan="3">

  <% if (zVis.equals("1")){%>
         <a href="javascript:comprobar();" ><img alt="<%=tranivMSS.getProperty("iv_mss.Send")%>" title="<%=tranivMSS.getProperty("iv_mss.Send")%>" src="/iconos/icono_enviar_mss_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" tabindex="12"/></a>
  <%}else{%>
      <a title="<%=tranivMSS.getProperty("iv_mss.LblProfData")%>" href="javascript:volver_prof();" tabindex="6"><img alt="<%=tranivMSS.getProperty("iv_mss.LblProfData")%>" src="/iconos/icono_entrar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
  <%}%>
    </td>
  </tr>

   </table>
<br><br/>

<% if (zVis.equals("0")){%>
  <form action="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp" method="post" name="volver" id="volver">
    <%empleado = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", empleado);%>
    <input type="hidden" id="person" name="person" value="<%=empleado%>" />
    <input type="hidden" id="person_ord" name="person_ord" value="<%=periodo%>" />
  </form>

  <div id="cargando" name="cargando" class="invisible2"  style="position: relative; top: 0; left: 0">&nbsp;
  <table  class ="cargando">
    <tr><td>&nbsp;<img src="/iconos/cargando.gif" alt='<%=Tran.getProperty("Button.Volver")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></td>
    <td>&nbsp;&nbsp;&nbsp;<%=Tran.getProperty("Button.Volver")%>&nbsp;&nbsp;</td></tr></table> 
  </div>

<%}%>
<% if (zVis.equals("1")){%>
  <%@ include file="../../mss_generico/espanol/mssgenerico_disclaimer.jsp" %>
<%}%>

</body>
</html>