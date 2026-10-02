<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %> 
<%@ include file="/sse_g3/sse_ev_trans.jsp"%>
<title><%=TranEss.getProperty("ev_ess.LinkHistEv")%></title>

<%
//--------------------------------------------------------  
String empleado = (String)request.getAttribute("empleado");
String periodo = (String)request.getAttribute("periodo");
String role = (String)request.getAttribute("role");
String zVis = (String)request.getAttribute("zVis");

String zSMCO_ID_HR = "";
if ((zVis==null)||(zVis.equals(""))){
  zVis = "1";
}
else{
  //Caragmos para un empleado concreto
  empleado = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", empleado);
  zSMCO_ID_HR = empleado;
}
//--------------------------------------------------------

if (zVis.equals("1")){%>
  <link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<%}else{%>
  <link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<%}%>

<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_doc.js"></script> 

<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
<script type="text/javascript">
function navegar (ord,fecha) {
var parametros = new Array("estado","ord","fecha");
var valores = new Array(31,ord,fecha);
m4navegar("sse_g3/sse_g3_p5_mod.jsp",parametros,valores);
}

function abrirexcel(empleado,ordinal,fec)
{
 var hoy = new Date(); 
var sNewWindow = "Wnd" + hoy.getDay() + hoy.getHours() + hoy.getMinutes() + hoy.getSeconds();
m4valor("open_v","zidType","02","set");
m4valor("open_v","zidhr",empleado,"set");
m4valor("open_v","zorrole",ordinal,"set");
m4valor("open_v","zdtstart",fec,"set");
window.open("",sNewWindow,"top=20,left=20,toolbar=no,scrollbars=yes,directories=no,status=yes,menubar=no,resizable=yes,width=850,height=560");
document.forms["open_v"].target = sNewWindow ;
m4submit("open_v");
}
</script>
</head>
<body>
<%if (zVis.equals("1")){%>
  <%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
  <%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%}%>
<%
  String zsubsesion = "SSE_H_EVALUATOR_HIST";
  String zmeta4object = "SSE_H_EVALUATOR_HIST";
  String znodo = "M4T_H_EVALUATE_NORMAL";
  String znodo1 = "M4T_H_EVAL_PROC";

  String zoutputdef = zsubsesion + "!" + znodo + "[*]";
  String zmove = znodo + ":" + znodo + "[FIRST]";
  String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

  String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
  String zmove1 = znodo1 + ":" + znodo1 + "[0]";
  String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[0]" + ".";

  
  String zSCONMEVALPROC = zcomun + "SCO_NM_EVAL_PROC"; 
  String zSCODTSTARTEVAL = zcomun + "SCO_DT_START_EVAL"; 
  String zSCOORHRROLE = zcomun + "SCO_OR_HR_ROLE";
  String zSCOIDHR = zcomun + "SCO_ID_HR";
  String zSCOIDMEASURETP =zcomun+ "SCO_ID_MEASURE_TP";
  String zSCODTSTARTPROC =zcomun+ "SCO_DT_START_PROC";
  String zNIVELC =zcomun+ "SCO_NM_LEVEL";
  String zNIVELOBJ =zcomun+ "SCO_NM_LEVEL_1";
  String zRATEOBJ = zcomun+ "SCO_VALUE_OBJ_QUANT";
  String zSCOEVALUATIONDEF = zcomun+ "SCO_EVALUATION_DEF";
  String zIDDOCAPP =zcomun+ "SCO_ID_DOC_APP";
  String zSCO_DT_END_EV_PER =zcomun+ "SCO_DT_END_EV_PER";
  String zSCO_DT_ST_EV_PER =zcomun+ "SCO_DT_ST_EV_PER";
  String zSCO_DT_END =zcomun+ "SCO_DT_END";


  String zmetodocarga = "";
  if (zVis.equals("1")){
    zmetodocarga = "CARGA:" + zsubsesion + "!M4T_H_EVALUATE_NORMAL.CARGA_HISTORICO";
  }else{
    zmetodocarga = "CARGA:" + zsubsesion + "!M4T_H_EVALUATE_NORMAL.SMCO_LOAD_FORM_PROFS_INFO";
  }
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
    M4Operations m = new M4Operations(request); 
    m.setItem(zsubsesion,znodo,"","NIVEL","0");  
  } catch(Exception e) {}
%>
<%if (zVis.equals("1")){%>
  <m4:exec m4method="<%=zmetodocarga%>"/>
<%}else{%>
  <m4:exec m4method="<%=zmetodocarga%>"><m4:param name="SMCO_ARG_HR_TO_LOAD" value="<%=zSMCO_ID_HR%>"/> </m4:exec>
<%}%>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
  int  zcount  = 0;
  int  zcounti  = 0;  
  try {
      M4Operations m = new M4Operations(request);
      zcount = m.getCount(znodo,zsubsesion,znodo);
      zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
%>

<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_eval_ex.jsp" method="post" name="open_v" id="open_v">
<input type="hidden" id="zidType" name="zidType" value="" />
<input type="hidden" id="zidhr" name="zidhr" value="" />
<input type="hidden" id="zorrole" name="zorrole" value="" />
<input type="hidden" id="zdtstart" name="zdtstart"  value="" />
</form>

<%if (zVis.equals("1")){%>
  <table border="0" width="100%">
  <tr><td class="titulofuncional" colspan="2"><%=TranEss.getProperty("ev_ess.LinkHistEv")%></td></tr>
  <tr>
    <td><img alt="<%=TranEss.getProperty("ev_ess.LinkHistEv")%>" src="/iconos/noname_puesto_181_125.gif" width="93" height="100"  /></td>
    <td>
    <div class="descripcionfuncional"><%=TranEss.getProperty("ev_ess.DescrHistEv")%></div>
    <ul class="listaenlace">
    <li><a class="enlacefuncional" tabindex="1" title="<%=TranEss.getProperty("ev_ess.LblJob")%>"   href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3"><%=TranEss.getProperty("ev_ess.LinkJob")%></a></li>
    <li><a class="enlacefuncional" tabindex="2" title="<%=TranEss.getProperty("ev_ess.LblHistOpen")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5_open.jsp?estado=3"><%=TranEss.getProperty("ev_ess.LinkHistEv2")%></a></li>
    </ul>
    </td>
  </tr>
  </table>
<%}%>

<%if (zVis.equals("1")){%>
<table class = "tablaestados" width="100%" cellspacing="0">
<%}else{%>
<table class = "barraregistros" width="100%" cellspacing="0">
<%}%>
<tr class = "tablaestadosceldatitulo " >

<%if (zcount > 0) {
  String zposicions = "0";
  int zcontrol = 0;
  int zposicion =0;
  String zPaint = "";
%>

<form action=" " method="post" name="oculto" id="oculto">
<input type="hidden" id="SCO_ID_DOC_APP" name="SCO_ID_DOC_APP" value="" />
</form>

<td ><%=TranEss.getProperty("ev_ess.Res")%> </td>
<td><m4:label m4name="<%=zSCO_DT_ST_EV_PER%>" htmlsafe = "true"/></td>
<td><m4:label m4name="<%=zSCO_DT_END%>" htmlsafe = "true"/></td>
<td><m4:label m4name="<%=zNIVELC%>" htmlsafe = "true"/></td>
<td><m4:label m4name="<%=zNIVELOBJ%>" htmlsafe = "true"/></td>
<td><m4:label m4name="<%=zRATEOBJ%>" htmlsafe = "true"/></td>
<td></td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
<%zposicions = m4lix;
  zposicion = Integer.valueOf(zposicions).intValue();
  zcontrol = zposicion%2;
  if (zcontrol==0){zPaint="";}else{zPaint="2";}
%>

<m4:item m4name="<%=zSCOEVALUATIONDEF%>" htmlsafe = "true" m4varname="zEVALUATIONDEF"/>
<m4:item m4name="<%=zIDDOCAPP%>" htmlsafe = "true" m4varname="zIDDOC"/>
<%if (!zIDDOC.equals("")) {zIDDOC = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIDDOC);}%>

<tr>
  <%if(zEVALUATIONDEF.equals("1")==true)
    {%>
      <td class="fuentevalor<%=zPaint%>">
        <%if (zVis.equals("1")){%>
          <a title="<%=Tran.getProperty("Label.VerDet")%>"  href="javascript:navegar ('<m4:item m4name="<%=zSCOORHRROLE%>" htmlsafe = "true" jsafe = "true"/>','<m4:item  m4name="<%=zSCODTSTARTEVAL%>" htmlsafe = "true" jsafe = "true"/>');"><m4:item m4name="<%=zSCONMEVALPROC%>" htmlsafe = "true" /></a>&nbsp;&nbsp 
          <%if (!zIDDOC.equals("")) {%>
             <a href="javascript:m4valor('oculto','SCO_ID_DOC_APP','<%=zIDDOC%>','set');ssco_manage_document('view','oculto','SCO_ID_DOC_APP');"> <img alt="<%=Tran.getProperty("Label.VerDoc")%>" src="/iconos/book_16.gif" width="14" height="14" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
          <%}%>
        <%}else{%>
          <m4:item m4name="<%=zSCONMEVALPROC%>" htmlsafe = "true" />&nbsp;&nbsp  
          <%if (!zIDDOC.equals("")) {%>
             <a href="javascript:m4valor('oculto','SCO_ID_DOC_APP','<%=zIDDOC%>','set');ssco_manage_document('view','oculto','SCO_ID_DOC_APP');"> <img alt="<%=Tran.getProperty("Label.VerDoc")%>" src="/iconos/book_16.gif" width="14" height="14" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
          <%}%>
        <%}%>
      </td>
    <%}else{%>
    <td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCONMEVALPROC%>" htmlsafe = "true"/>&nbsp;&nbsp
    <%   if (zIDDOC!=null && zIDDOC!="") {%>
      <a href="javascript:var iddoc= '<m4:item m4name="<%=zIDDOCAPP%>" jsafe = "true"/>';m4valor('oculto','SCO_ID_DOC_APP',iddoc,'set');ssco_manage_document('view','oculto','SCO_ID_DOC_APP');"> <img alt="<%=Tran.getProperty("Label.VerDoc")%>" src="/iconos/book_16.gif" width="14" height="14" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
    <%}%>
  <%}%>
    <td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCO_DT_ST_EV_PER%>" htmlsafe = "true"/>&nbsp;-&nbsp;<m4:item m4name="<%=zSCO_DT_END_EV_PER%>" htmlsafe = "true"/></td>
    <td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCO_DT_END%>" htmlsafe = "true"/></td>
    <td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zNIVELC%>" htmlsafe = "true"/></td>
    <td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zNIVELOBJ%>" htmlsafe = "true"/></td>
    <td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zRATEOBJ%>" htmlsafe = "true"/></td>
  <%if(zEVALUATIONDEF.equals("1")==true){%>
    <m4:item m4name="<%=zSCOIDHR%>" htmlsafe = "true" m4varname="sIdHrEnc"/>
    <%sIdHrEnc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdHrEnc);%>
    <m4:item m4name="<%=zSCOORHRROLE%>" htmlsafe = "true" m4varname="sOrHrEnc"/>
    <%sOrHrEnc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sOrHrEnc);%>
    <m4:item  m4name="<%=zSCODTSTARTEVAL%>" htmlsafe = "true" m4varname="sdtStartEnc"/>
    <%sdtStartEnc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sdtStartEnc);%>
    <td class="fuentevalor<%=zPaint%>"> <a title="<%=TranEss.getProperty("ev_ess.LblEvalExcel")%>" href="javascript:abrirexcel ('<%=sIdHrEnc%>','<%=sOrHrEnc%>','<%=sdtStartEnc%>');"><img alt="<%=TranEss.getProperty("ev_ess.LblEvalExcel")%>" src="/iconos/icono_hacia_excel_32_16.gif"  width="32" height="16" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
  <%} else{%>
    <td class="fuentevalor<%=zPaint%>"></td>
  <%}%>

  </tr> 
 </m4:loop>

<%}if ((zcount == 0)){%>
  <tr><td colspan="10" class="tablaestadosceldatitulo"><%=Tran.getProperty("Label.NoDataFound9")%></td></tr>
<%}%>

</table>
<%if (zVis.equals("1")){%>
  <%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
<%}%>

<m4:endpage/>
</body>
</html>



