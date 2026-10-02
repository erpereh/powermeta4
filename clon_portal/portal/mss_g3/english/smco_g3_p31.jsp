<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<%@ include file="../../mss_generico/english/menu_mss.jsp" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_filter.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/fun_gen_act.js"></script>

<%
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
  if ((estado==null)||(estado.equals(""))){estado="0";}
  if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
<%@ include file="/mss_g3/smco_iv_trans.jsp"%>
<%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>

<%
int zTabess=0;

String zParametroAct = "";
String zACC = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ACC");
if ((zACC==null)||(zACC.equals(""))){zParametroAct="";
}else{
  zParametroAct +="ACC=" + zACC + "{"; 
  String nombre = "";
  String valor = "";
  String ristraErr = "";
  Enumeration oenum = request.getParameterNames();
  while(oenum.hasMoreElements ()){
    nombre = (String) oenum.nextElement();
    valor =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,nombre);
    if (nombre.equals("ACC")){
      //
    }else {
      zParametroAct += nombre + "=" + valor + "{" ;
    } 
  }
}

String zsubsesion = "SMCO_IV_INTERV_RES";
String zpage = "mss_g3/smco_g3_p31.jsp";  
          
String zm4object = zsubsesion;
String znodo = "M4T_APP_INT_PTE_RES";
String znodo1 = "M4T_APP_INTERV_RES";
String znodo2 = "SSE_MT_GEN";


//Método de carga del m4object
String ztipocarga = "INFO";
String zmetodocarga = zm4object + "!" + znodo2 + ".SSE_ACTION_LOAD";
  
String zventanas = "20";
int zvuelta = 5;
  
int zregistroinicial = Integer.valueOf(zinicios).intValue();          
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;
  
String zoutputdef = zm4object + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";   
String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
String zcomun = znodo + ":" + zm4object + "!" + znodo + "[&VAR.m4lix]" + ".";
String zraiz =  znodo + ":" + zm4object  + "!" + znodo + ".";
              
String zIdInterview="SCO_OR_INTERVIEW";
String zNmInterview="SCO_NM_INTERVIEW";
String zOrInterviewer="SCO_OR_INTERVIEWER";
String zIdApp="SCO_ID_APP";
String zNmApp="SCO_GB_NAME";
String zDtStartApp="SCO_DT_START_APP";
String zDtAppointment="SCO_DT_APPOINTMENT";
String zOrRecruitPr="SCO_OR_RECRUIT_PR";
String zNmRecruitment="SCO_NM_RECRUITMENT";
String zIdInterRes="SCO_ID_INTER_RES";
                        
String zvIdInterview = zcomun + zIdInterview;
String zvNmInterview = zcomun + zNmInterview;
String zvIdApp = zcomun + zIdApp;
String zvNmApp = zcomun + zNmApp;
String zvDtStartApp = zcomun + zDtStartApp;
String zvDtAppointment = zcomun + zDtAppointment;
String zvOrRecruitPr = zcomun + zOrRecruitPr;
String zvNmRecruitment = zcomun + zNmRecruitment;

String zoutputdef1 = zm4object + "!" + znodo1 + "[" + zregistroinicial + "-" + zregistrofinal + "]";   
String zmove1 = znodo1 + ":" + znodo1 + "[" + zregistroinicial + "]";
String zcomun1 = znodo1 + ":" + zm4object + "!" + znodo1 + "[&VAR.m4lix]" + ".";

String zvIdInterview1 = zcomun1 + zIdInterview;
String zvNmInterview1 = zcomun1 + zNmInterview;
String zOrInterviewer1 = zcomun1 + zOrInterviewer;
String zvIdApp1 = zcomun1 + zIdApp;
String zvNmApp1 = zcomun1 + zNmApp;
String zvDtAppointment1 = zcomun1 + zDtAppointment;
String zvDtStartApp1 = zcomun1 + zDtStartApp;
String zvOrRecruitPr1 = zcomun1 + zOrRecruitPr;
String zvNmRecruitment1 = zcomun1 + zNmRecruitment;
String zvIdInterRes1 = zcomun1 + zIdInterRes;

String zoutputdef2 = zm4object + "!" + znodo2 + "[" + zregistroinicial + "-" + zregistrofinal + "]";   
String zmove2 = znodo2 + ":" + znodo2 + "[" + zregistroinicial + "]";
String zcomun2 = znodo2 + ":" + zm4object + "!" + znodo2 + "[&VAR.m4lix]" + ".";

String zvIdInterview2 = zcomun2 + zIdInterview;
String zvIdApp2 = zcomun2 + zIdApp;
String zvDtStartApp2 = zcomun2 + zDtStartApp;
String zOrInterviewer2 = zcomun2 + zOrInterviewer;

%>
</head>
<body>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zm4object%>" m4name="<%=zm4object%>"/>
<m4:exec m4method="<%=zmetodocarga%>">
  <m4:param name="ARG_ACTION" value="<%=zParametroAct%>"/>
  <m4:param name="ARG_LOAD" value="<%=ztipocarga%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>" ><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>" ><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove2%>"/></m4:move>
<%
String vsDtStartApp = "";
String vsIdApp = "";
String vsIdInterview = "";
String vsDtStartApp1 = "";
String vsIdApp1 = "";
String vsIdInterview1 = "";
String vsOrInterviewer1 = "";

int  zcount  = 0;
int  zcounti  = 0;
int  zcount1  = 0;
int  zcount2  = 0;

String zerror = "0";
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zm4object,znodo);
    zcounti = m.getCountInClient(znodo,zm4object,znodo);
  zcount1 = m.getCount(znodo1,zm4object,znodo1);
  zcount2 = m.getCount(znodo1,zm4object,znodo1);

  zerror = m.getItem(znodo,zsubsesion,znodo,"","SSE_SHOW_ERROR");
} catch(Exception e) {}
String  zcountv = String.valueOf(zcounti);
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);

int  zcounti1  = 0;
  try {
      M4Operations m = new M4Operations(request);
      zcounti1 = m.getCountInClient(znodo1,zm4object,znodo1);
  } catch(Exception e) {}
  String  zcountv1 = String.valueOf(zcounti1);
  String ztofin = new Integer(new Integer(zcountv1).intValue()-1).toString();

String zposicions = "0";
int zcontrol = 0;
int zposicion =0;
String zposicions1 = "0";
int zcontrol1 = 0;
int zposicion1 =0;
if(zerror.equals("1") == true){%>
<script type="text/javascript">
  urlLista = "/servlet/CheckSecurity/JSP/sse_g0/sse_gen_informacion_usuario.jsp?zsubsesion="+'<%=zsubsesion%>';
  msgWindow = window.open(urlLista,"Error","width=600;height=200,resizable,scrollbars");
</script>
<%}%>
<script type="text/javascript" language="Javascript1.5">
function load_cv(empleado){
  var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection_cv.jsp?estado=11&cabecera=1&zVis=0&person=" + empleado + "&RET=DAT";
  window.open(dir,'Vis','width=1024;height=600,resizable,scrollbars');
}
function navegarint(DtStartApp,IdApp,IdInt,IdIntviewer){
  m4valor("LinkInt","zDT_START_APP",DtStartApp,"set");
  m4valor("LinkInt","zID_APP",IdApp,"set");
  m4valor("LinkInt","zID_INTERV",IdInt,"set");
  m4valor("LinkInt","zID_INTERVIEWER",IdIntviewer,"set");
  m4submit("LinkInt");
}
function navegarprocrec(IdprocRec){
  m4valor("LinkProcRec","PRO",IdprocRec,"set");
  m4submit("LinkProcRec");
}
</script>
<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2"><%=tranivMSS.getProperty("iv_mss.EntrevApp")%></td></tr>
<tr>
  <td><img src="/iconos/noname_puesto_144_100.gif" width="99" height="100" alt="" ></td>
  <td class="descripcionfuncional"><%=tranivMSS.getProperty("iv_mss.DescFunGen")%></td>
</tr>
</table>

<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p31_det.jsp?estado=31" method="post" name="LinkInt" id="LinkInt">
<input type="hidden" id="zDT_START_APP" name="zDT_START_APP"  value="" />
<input type="hidden" id="zID_APP" name="zID_APP"  value="" />
<input type="hidden" id="zID_INTERV" name="zID_INTERV"  value="" />
<input type="hidden" id="zID_INTERVIEWER" name="zID_INTERVIEWER"  value="" />
</form>

<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_det.jsp?estado=31" method="post" name="LinkProcRec" id="LinkProcRec">
<input type="hidden" id="PRO" name="PRO"  value="" />
</form>



<% if (zcounti > 0) { %>
<table width="100%" cellspacing="0">
<input type="hidden" id="TYPE" name="TYPE"  value="1" />
<tr>
  <td class="fuenteleyenda_med" colspan="4"><%=tranivMSS.getProperty("iv_mss.EntrevPteRes")%></td>
</tr>
<tr>

  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zvNmInterview%>"  htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zvNmApp%>"  htmlsafe = "true"/></td>  
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zvDtAppointment%>"  htmlsafe = "true"/></td>  
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zvNmRecruitment%>"  htmlsafe = "true"/></td>

</tr>
<m4:loop from="0" to="<%=zregistrofinals%>">  

<tr>
  <m4:item item="SCO_ID_APP" htmlsafe="true" outputdef="<%=znodo%>" var="vsIdApp" />
  <%vsIdApp = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", vsIdApp);%>
  <m4:item item="SCO_DT_START_APP" htmlsafe="true" outputdef="<%=znodo%>" var="vsDtStartApp" />
  <%vsDtStartApp = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", vsDtStartApp);%>
  <m4:item item="SCO_OR_INTERVIEW" htmlsafe="true" outputdef="<%=znodo%>" var="vsIdInterview" />
  <%vsIdInterview = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", vsIdInterview);%>
  <td class="fuentevalor" ><a class="enlacefuncional" title="<m4:label m4name="<%=zvNmInterview%>"  htmlsafe = "true"/>" href="javascript:navegarint('<%=vsDtStartApp%>','<%=vsIdApp%>','<%=vsIdInterview%>','')"><m4:item m4name="<%=zvNmInterview%>" htmlsafe = "true"/></a></td>
  <m4:item outputdef="<%=znodo%>" item="SCO_ID_APP" m4varname="sIdApp" htmlsafe="true"/>
  <%sIdApp = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdApp);%>
  <td class="fuentevalor" ><a class="enlacefuncional" title="<m4:label m4name="<%=zvNmApp%>"  htmlsafe = "true"/>" href="javascript:load_cv('<%=sIdApp%>')"><m4:item m4name="<%=zvNmApp%>" htmlsafe = "true"/></a></td>
  <td class="fuentevalor" ><m4:item m4name="<%=zvDtAppointment%>"  htmlsafe = "true"/></td>
  <m4:item m4name="<%=zvOrRecruitPr%>" htmlsafe="true" m4varname="sIdProcSel"/>
  <%sIdProcSel = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdProcSel);%>
  <td class="fuentevalor" ><a class="enlacefuncional" title="<m4:label m4name="<%=zvNmRecruitment%>"  htmlsafe = "true"/>" href="javascript:navegarprocrec('<%=sIdProcSel%>')"><m4:item m4name="<%=zvNmRecruitment%>" htmlsafe = "true"/></a></td>
</tr>
</m4:loop>
</table>
<%}else{%>
<div class="fuentenodatos"><%=tranivMSS.getProperty("iv_mss.NoPteResultentrev")%></div>
<br/> <br/> 
<%}%>
<br> <br/>
<% if (zcounti1 > 0) { %> 
<form action="/servlet/CheckSecurity/JSP/<%=zpage%>" method="post" name="NombreFormulario" id="NombreFormulario">
<table width="100%" cellspacing="0">
<input type="hidden" id="ACC" name="ACC"  value="" />
<input type="hidden" id="TYPE" name="TYPE"  value="2" />
<input type="hidden"  name="XSCO_DT_START_APP" id="XSCO_DT_START_APP" value="<m4:item m4name="<%=zvDtStartApp1%>" htmlsafe="true"/>" />
<input type="hidden" id="XSCO_ID_APP" name="XSCO_ID_APP"  value="<m4:item m4name="<%=zvIdApp1%>" htmlsafe="true"/>" />
<input type="hidden" id="XSCO_OR_INTERVIEW" name="XSCO_OR_INTERVIEW"  value="<m4:item m4name="<%=zvIdInterview1%>" htmlsafe="true"/>" />
<input type="hidden" id="XSCO_OR_INTERVIEWER" name="XSCO_OR_INTERVIEWER"  value="<m4:item m4name="<%=zOrInterviewer1%>" htmlsafe="true"/>" />

<tr>
  <td class="fuenteleyenda_med" colspan="5"><%=tranivMSS.getProperty("iv_mss.EntrevRes")%></td>
</tr>
<tr>
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zvNmInterview1%>"  htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zvNmApp1%>"  htmlsafe = "true"/></td> 
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zvDtAppointment1%>"  htmlsafe = "true"/></td> 
  <td class="tablaestadosceldatitulo" colspan="2"><m4:label m4name="<%=zvNmRecruitment1%>"  htmlsafe = "true"/></td>
</tr> 
<m4:loop from="0" to="<%=ztofin%>"> 
<tr>
    
  <m4:item item="SCO_ID_APP" htmlsafe="true" outputdef="<%=znodo1%>" var="vsIdApp1" />
  <%vsIdApp1 = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", vsIdApp1);%>
  <m4:item item="SCO_DT_START_APP" htmlsafe="true" outputdef="<%=znodo1%>" var="vsDtStartApp1" />
  <%vsDtStartApp1 = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", vsDtStartApp1);%>
  <m4:item item="SCO_OR_INTERVIEW" htmlsafe="true" outputdef="<%=znodo1%>" var="vsIdInterview1" />
  <%vsIdInterview1 = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", vsIdInterview1);%>
  <m4:item item="SCO_OR_INTERVIEWER" htmlsafe="true" outputdef="<%=znodo1%>" var="vsOrInterviewer1" />
  <%vsOrInterviewer1 = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", vsOrInterviewer1);%>
  <td class="fuentevalor" ><a class="enlacefuncional" title="<m4:label m4name="<%=zvNmInterview1%>"  htmlsafe = "true"/>" href="javascript:navegarint('<%=vsDtStartApp1%>','<%=vsIdApp1%>','<%=vsIdInterview1%>','<%=vsOrInterviewer1%>')"><m4:item m4name="<%=zvNmInterview1%>" htmlsafe = "true"/></a></td>
  <m4:item outputdef="<%=znodo1%>" item="SCO_ID_APP" m4varname="sIdApp" htmlsafe="true"/>
  <%sIdApp = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdApp);%>
  <td class="fuentevalor" ><a class="enlacefuncional" title="<m4:label m4name="<%=zvNmApp1%>"  htmlsafe = "true"/>" href="javascript:load_cv('<%=sIdApp%>')"><m4:item m4name="<%=zvNmApp1%>" htmlsafe = "true"/></a></td>
  <td class="fuentevalor" ><m4:item m4name="<%=zvDtAppointment1%>"  htmlsafe = "true"/></td>
  <m4:item m4name="<%=zvOrRecruitPr1%>" htmlsafe="true" m4varname="sIdProcSel1"/>
  <%sIdProcSel1 = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdProcSel1);%>
  <td class="fuentevalor" ><a class="enlacefuncional" title="<m4:label m4name="<%=zvNmRecruitment1%>"  htmlsafe = "true"/>" href="javascript:navegarprocrec('<%=sIdProcSel1%>')"><m4:item m4name="<%=zvNmRecruitment1%>" htmlsafe = "true"/></a></td>
  <td class = "fuentevalor" width="2%"><a <%=(zTabess + 1)%>title="<%=Tran.getProperty("Button.Delete")%>" href="javascript:m4valor('NombreFormulario','XSCO_DT_START_APP','<m4:item m4name="<%=zvDtStartApp1%>" htmlsafe = "true" jsafe = "true"/>','set');m4valor('NombreFormulario','XSCO_ID_APP','<m4:item m4name="<%=zvIdApp1%>" htmlsafe = "true" jsafe = "true"/>','set');m4valor('NombreFormulario','XSCO_OR_INTERVIEW','<m4:item m4name="<%=zvIdInterview1%>" htmlsafe = "true" jsafe = "true"/>','set');m4valor('NombreFormulario','XSCO_OR_INTERVIEWER','<m4:item m4name="<%=zOrInterviewer1%>" htmlsafe = "true" jsafe = "true"/>','set');m4del();"><img  alt="<%=Tran.getProperty("Button.Delete")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="12" width="11"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>  
</tr>
</m4:loop>
</table>
</form>

<%}else{%>
<div class="fuentenodatos"><%=tranivMSS.getProperty("iv_mss.NoResultentrev")%></div>
<br/> <br/> 
<%}%>

<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
</div>

</body>
<m4:endpage/>
</html>