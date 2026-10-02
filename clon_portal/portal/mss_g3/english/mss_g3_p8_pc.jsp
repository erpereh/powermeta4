<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<title>Career Plan</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/english/menu_mss.jsp" %>
<%@ include file="/mss_g3/mss_g3_trans.jsp"%>
<script type="text/javascript">
function ver_puesto(a){
  m4valor("puesto","zSJOB",a,"set");
  m4submit("puesto");
}
function verGrafico(idjob,IdHR) {
  var dir="/servlet/CheckSecurity/JSP/sse_g0/sgco_ek_job_hr.jsp?zJob="+idjob+"&zIDhr="+IdHR;
  window.open(dir,'Vis','width=700;height=400,resizable,scrollbars');
} 
</script>
<%
  Generatablaparametros zobjtabla = new Generatablaparametros(request);
  String estado = zobjtabla.m4paramvalor("estado");
  if ((estado==null)||(estado.equals(""))){estado="0";}
  String zinicios = zobjtabla.m4paramvalor("zinicios");  
  if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
  String zpk0 = zobjtabla.m4paramvalor("pk0");
  String sIdHR = "";
  if (zpk0 == null || zpk0.equals("")) {zpk0="";}
  else {sIdHR = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zpk0);}

  String zpk1 = zobjtabla.m4paramvalor("pk1");
  String sOrPrHR = "";
  if (zpk1 == null || zpk1.equals("")) {zpk1="";}
  else {sOrPrHR = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zpk1);}

  String zpk2 = zobjtabla.m4paramvalor("pk2");
  String sDtStart = "";
  if (zpk2 == null || zpk2.equals("")) {zpk2="";}
  else {sDtStart = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zpk2);}
%>
</head>
<body>
<%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%
   String zsubsesion = "SSM_CAREER_PLAN";
   String zmeta4object = "SSM_CAREER_PLAN";
   String zmetodocarga = zsubsesion + "!SSM_CAREER_PLAN.CARGA";
   String znodo = "SSM_CAREER_PLAN";
   String znodo2 = "SSM_CR_STEP_PLAN";
   String znodo3 = "SSM_MENTOR";

   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
   String zraiz3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + ".";

   String zventanas = "20";
   int zvuelta = 5;

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   String ztipocarga = "DET";
   
   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   String zmove = znodo + ":" + znodo + "[zregistroinicial]";
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";

   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove2 = znodo2 + "[" + zregistroinicial + "]";
   String zlectura2 = zsubsesion + "!" + znodo2;
   String zraiz2 = zsubsesion + "!" + znodo2 + ".";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
    
   String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;
   String zmove3 = znodo3 + ":" + znodo3 + "[zregistroinicial]";
   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   
  String zSPLAN = zraiz + "SCO_NM_CAREER_PLAN";
    String zemple = zraiz + "SCO_GB_NAME";
  String zSJOB = zcomun2 + "STD_N_JOB_CODE";
  String zIDJOB = zcomun2 + "STD_ID_JOB_CODE";
  String zSTIME = zcomun2 + "SCO_TIME";
  String zSUTIME = zcomun2 + "SCO_NM_TIME_UNIT";
  String zDATE = zcomun2 + "SCO_DT_START_STEP";
  String zGAP = zcomun2 + "GAP";
  String zNMENTOR = zraiz3 + "STD_N_FIRST_NAME";
  String zAMENTOR = zraiz3 + "STD_N_FAMILY_NAME_1";
  String zNGMENTOR = zraiz3 + "SCO_GB_NAME";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<%
try {
   M4Operations m = new M4Operations(request);
   m.setItem(zsubsesion,znodo,"","SCO_ID_HR_ARG",sIdHR);
   m.setItem(zsubsesion,znodo,"","SCO_OR_HR_PERIOD_ARG",sOrPrHR);
   m.setItem(zsubsesion,znodo,"","DT_START_ARG",sDtStart);
   } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec> 
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
<%
 String z1="";
 String z2="";
 String z3="";
try {
    M4Operations m = new M4Operations(request); 
    z1 = m.getItem(znodo,zmeta4object,znodo,"","SCO_ID_HR_ARG");
    z2 = m.getItem(znodo,zmeta4object,znodo,"","SCO_OR_HR_PERIOD_ARG");
    z3 = m.getItem(znodo,zmeta4object,znodo,"","DT_START_ARG");
  } 
  catch(Exception e){}
%>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<%
int  zcount  = 0;
int  zcounti  = 0;
int  zcount2  = 0;
int  zcounti2  = 0;
int zcount3 = 0;
int zcounti3 = 0; 
try {
  M4Operations m = new M4Operations(request);
  zcount = m.getCount(znodo,zsubsesion,znodo);
  zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
  zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
  zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);
  zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
  zcounti3 = m.getCountInClient(znodo3,zsubsesion,znodo3);
} catch(Exception e) {}
String  zcountv = String.valueOf(zcounti);
String  zcountv2 = String.valueOf(zcounti2);
String  zcountv3 = String.valueOf(zcounti3);
%>
<table width="100%">
<tr><td class="titulofuncional" colspan="2"><%=mss_g3.getProperty("Label.mss_g3_p8_pc")%>&nbsp; <m4:item m4name="<%=zemple%>" htmlsafe="true"/>:&nbsp;<m4:item m4name="<%=zSPLAN%>" htmlsafe="true"/></td></tr>
<tr>
  <td><img alt="My Career Plan" src="/iconos/noname_plan_carrera_133_100.gif" width="100" height="100" /></td>
  <td><div class="descripcionfuncional"><%=mss_g3.getProperty("Label.Plan")%><%=mss_g3.getProperty("Label.Plangap")%></div>
  <ul class="listaenlace">
  <li><a class="enlacefuncional" title ="Return to Career Plans" tabindex="1" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8.jsp?estado=31">Career Plans</a></li>
  <li><a class="enlacefuncional" tabindex="2" title="<%=mss_g3.getProperty("Label.smco_g3_p30_pet")%> " href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_pet.jsp"><%=mss_g3.getProperty("Link.smco_g3_p30_pet")%> </a></li>

  </ul>
  </td>
</tr>
</table>
<%if (zcounti3 > 0) {%> 
<table class = "tablaestados" width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo">&nbsp;Mentor:</td></tr>
<tr><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zNGMENTOR%>" htmlsafe="true"/></td></tr>
</table>
<%}if (zcounti2 > 0) {%>  
<br />
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8_desc.jsp?estado=31" method="post" name="puesto" id="puesto">
<input type="hidden" id="zSJOB" name="zSJOB"  value="" />
</form>
<%
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcounti2).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();%>
<% if (zposicion != (zcounti2-1)){%>
<table class = "tablaplan" width="500" height="25" align="center" cellspacing="0">
<tr>
  <td width = "30%" class="fuentevalor">From:&nbsp;<m4:item m4name="<%=zDATE%>" htmlsafe="true"/>&nbsp;&nbsp;&nbsp;&nbsp;
  <td width = "50%" class="fuentevalor" align="center" ><a class="enlacefuncional" title="Job Details" href="javascript:ver_puesto('<m4:item m4name="<%=zIDJOB%>" jsafe="true" htmlsafe="true"/>');" ><m4:item m4name="<%=zSJOB%>" htmlsafe="true"/></a>&nbsp;(aprox.:&nbsp;<m4:item m4name="<%=zSTIME%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSUTIME%>" htmlsafe="true"/>)</td>
  <td width = "20%" class="fuentevalor"><m4:label m4name="<%=zGAP%>" htmlsafe="true"/>&nbsp;:&nbsp;<m4:item m4name="<%=zGAP%>" htmlsafe="true"/>&nbsp;&nbsp;<a title="<%=mss_g3.getProperty("Label.Linkgap")%>" href="javascript:verGrafico('<m4:item m4name="<%=zIDJOB%>" jsafe="true"/>','<%=zpk0%>');"><img alt="<%=mss_g3.getProperty("Label.Linkgap")%>" title="<%=mss_g3.getProperty("Label.Linkgap")%>" src="/iconos/ic_compvar_16_16_0.gif" width="16" height="16" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</table>
<% } else { %>
<table class = "tablaplan" width="500" height="25" align="center" cellspacing="0">
<tr>
  <td width = "30%" class="fuentevalor">From:&nbsp;<m4:item m4name="<%=zDATE%>" htmlsafe="true"/>&nbsp;&nbsp;&nbsp;&nbsp;
  <td width = "50%" class="fuentevalor" align="center" ><a class="enlacefuncional" title="Job Details" href="javascript:ver_puesto('<m4:item m4name="<%=zIDJOB%>" jsafe="true" htmlsafe="true"/>');" ><m4:item m4name="<%=zSJOB%>" htmlsafe="true"/></a></td>
  <td width = "20%" class="fuentevalor"><m4:label m4name="<%=zGAP%>" htmlsafe="true"/>&nbsp;:&nbsp;<m4:item m4name="<%=zGAP%>" htmlsafe="true"/>&nbsp;&nbsp;<a title="<%=mss_g3.getProperty("Label.Linkgap")%>" href="javascript:verGrafico('<m4:item m4name="<%=zIDJOB%>" jsafe="true"/>','<%=zpk0%>');"><img alt="<%=mss_g3.getProperty("Label.Linkgap")%>" title="<%=mss_g3.getProperty("Label.Linkgap")%>" src="/iconos/ic_compvar_16_16_0.gif" width="16" height="16" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</table>
<% }%>
<% if (zposicion != (zcounti2-1)){%>
<table width="300" height="25" border="0" align="center"> 
  <tr><td align="center">|</td></tr>  
</table>
<% } %>
</m4:loop>
<% } else { %>
<div class="fuentenodatos"><br /></br /></br />There are no jobs in your career plan.</div>
<%}%> 
<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>