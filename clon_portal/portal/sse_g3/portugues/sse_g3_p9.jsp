<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html  
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<title>Plano de carreira</title>
<%
//--------------------------------------------------------  
String empleado = (String)request.getAttribute("empleado");
String periodo = (String)request.getAttribute("periodo");
String role = (String)request.getAttribute("role");
String zVis = (String)request.getAttribute("zVis");

String zSMCO_ID_HR = "";
if ((zVis==null)||(zVis.equals(""))){
  zVis = "1";
} else{
  //Caragmos para un empleado concreto
  zSMCO_ID_HR = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", empleado);
}
if (empleado==null) {empleado = "";}
//--------------------------------------------------------

if (zVis.equals("1")){%>
  <link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<%}else{%>
  <link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<%}%>

<script type="text/javascript"  language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<%@ include file="/sse_g3/sse_g3_trans.jsp"%>
<script type="text/javascript">
function ver_puesto(a){
m4valor("puesto","zSJOB",a,"set");
m4submit("puesto");}
function verGrafico(idjob,vidp) {
idjob= m4urlencode(idjob) ;
vidp= m4urlencode(vidp) ;
var dir="/servlet/CheckSecurity/JSP/sse_g0/sgco_ek_job_hr.jsp?zJob="+idjob+"&zIDhr="+vidp;
window.open(dir,'Vis','width=700;height=400,resizable,scrollbars');
} 

</script>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");    
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
</head>
<body>
<%if (zVis.equals("1")){%>
  <%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
  <%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%}%>
<%
   String zsubsesion = "SSE_CAREER_PLAN";
   String zmeta4object = "SSE_CAREER_PLAN";
   String zmetodocarga = zsubsesion + "!SSE_CR_PLAN_HT.SMCO_MAIN_LOAD_PROCESS";
   String znodo = "SSE_CR_PLAN_HT";
   String znodo2 = "SSE_CR_STEP_PLAN";
   String znodo3 = "SSE_CR_MENTOR";

   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";      
   String zraiz3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + ".";      


   String zventanas = "20";
   int zvuelta = 5;

        // Não se modifica em geral.

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   String ztipocarga = "M4T";
   
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
   
// Itens que vamos carregar. Devem acrecentar-se todos aqueles que se pretenda visualizar 

  String zSPLAN = zraiz + "SCO_NM_CAREER_PLAN";
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
<m4:exec m4method="<%=zmetodocarga%>">
  <m4:param name="SMCO_ARG_HR_TO_LOAD" value="<%=zSMCO_ID_HR%>"/>
  <m4:param name="SMCO_ARG_TIPO_CARGA" value="<%=ztipocarga%>"/>
</m4:exec>  
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
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
    try{
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
<%if (zVis.equals("1")){%>
<tr><td class="titulofuncional" colspan="2">Plano de carreira:&nbsp;<m4:item m4name="<%=zSPLAN%>"/></td></tr>
<tr>
  <td><img alt="Plano de carreira" src="/iconos/noname_plan_carrera_133_100.gif" width="100" height="100" /></td>
  <td>
<div class="descripcionfuncional"><%=sse_g3Ess.getProperty("Label.Plan")%><%=sse_g3Ess.getProperty("Label.Plangap")%></div>
  <ul class="listaenlace">
  <li><a class="enlacefuncional" tabindex="1" title="Ir ao meu posto de trabalho" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3">O meu posto de trabalho</a></li>
  <li><a class="enlacefuncional" tabindex="2" title="<%=sse_g3Ess.getProperty("Label.ssco_g3_p11_pet")%> " href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31estado=3"><%=sse_g3Ess.getProperty("Link.ssco_g3_p11_pet")%> </a></li>
  
  </ul>
  </td>
</tr>
<%}%>
</table>
<%if (zcounti3 > 0) {%> 
<table class = "tablaestados" width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo">&nbsp;Monitor:</td></tr>
<tr><td class="fuentevalor">&nbsp;<m4:item m4name="<%=zNGMENTOR%>"/></td></tr>
</table>
<%}if (zcounti2 > 0) {%>  
<br />
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9_desc.jsp?estado=31" method="post" name="puesto" id="puesto">
  <input type="hidden" id="zSJOB" name="zSJOB"  value="" />
  <%if (zVis.equals("0")){%>
    <input type="hidden" id="empleado" name="empleado" value="<%=empleado%>"/>
    <input type="hidden" id="periodo" name="periodo" value="<%=periodo%>"/>
    <input type="hidden" id="zVis" name="zVis" value="<%=zVis%>"/>
  <%}%>

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
  <td width = "30%" class="fuentevalor">Desde:&nbsp;<m4:item m4name="<%=zDATE%>"/></td>
  <td width = "50%" class="fuentevalor" align="center" ><a class="enlacefuncional" title="Informa&ccedil;&otilde;es sobre o posto" href="javascript:ver_puesto('<m4:item m4name="<%=zIDJOB%>"/>');" ><m4:item m4name="<%=zSJOB%>"/></a>&nbsp;(aprox.:&nbsp;<m4:item m4name="<%=zSTIME%>"/>&nbsp;<m4:item m4name="<%=zSUTIME%>"/>)</td>
  <td width = "20%" class="fuentevalor"><m4:label m4name="<%=zGAP%>" htmlsafe="true"/>&nbsp;:&nbsp;<m4:item m4name="<%=zGAP%>" htmlsafe="true"/>&nbsp;&nbsp;<a title="<%=sse_g3Ess.getProperty("Label.Linkgap")%>" href="javascript:verGrafico('<m4:item m4name="<%=zIDJOB%>" jsafe="true"/>','<%=empleado%>');"><img alt="<%=sse_g3Ess.getProperty("Label.Linkgap")%>" title="<%=sse_g3Ess.getProperty("Label.Linkgap")%>" src="/iconos/ic_compvar_16_16_0.gif" width="16" height="16" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</table>
<% } else{%>
<table class = "tablaplan" width="500" height="25" align="center" cellspacing="0">
<tr>
  <td width = "30%" class="fuentevalor">Desde:&nbsp;<m4:item m4name="<%=zDATE%>"/></td>
  <td width = "50%" class="fuentevalor" align="center" ><a class="enlacefuncional" title="Informa&ccedil;&otilde;es sobre o posto" href="javascript:ver_puesto('<m4:item m4name="<%=zIDJOB%>"/>');" ><m4:item m4name="<%=zSJOB%>"/></a></td>
  <td width = "20%" class="fuentevalor"><m4:label m4name="<%=zGAP%>" htmlsafe="true"/>&nbsp;:&nbsp;<m4:item m4name="<%=zGAP%>" htmlsafe="true"/>&nbsp;&nbsp;<a title="<%=sse_g3Ess.getProperty("Label.Linkgap")%>" href="javascript:verGrafico('<m4:item m4name="<%=zIDJOB%>" jsafe="true"/>','<%=empleado%>');"><img alt="<%=sse_g3Ess.getProperty("Label.Linkgap")%>" title="<%=sse_g3Ess.getProperty("Label.Linkgap")%>" src="/iconos/ic_compvar_16_16_0.gif" width="16" height="16" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</table>
<% }%>
<% if (zposicion != (zcounti2-1)){%>
<table width="300" height="25" border="0" align="center"> 
  <tr><td align="center">|</td></tr>  
</table>
<% } %>
</m4:loop>
<%}else{%>
  <%if (zVis.equals("1")){%>
    <div class="fuentenodatos"><br /></br /></br />N&atilde;o tem nenhum posto no seu plano de carreira.</div>
  <%}else{%>
    <table class = "barraregistros" width="100%" cellspacing="0">
        <tr><td colspan="10" class="tablaestadosceldatitulo">N&atilde;o h&aacute; nenhum posto no plano de carreira do empregado</td></tr>
    </table>
  <%}%>
<%}%> 
<%if (zVis.equals("1")){%>
  <%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
<%}%>

</body>
<m4:endpage/>


