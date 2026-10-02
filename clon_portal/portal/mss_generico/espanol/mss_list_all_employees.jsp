<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/mss_cr_trans.jsp" %>
<title><%=Mss_cr.getProperty("msscr.Tabla79")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />

<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="01";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
<script type="text/javascript">

function load_prof(empleado){
  var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&person=" + empleado;
  window.open(dir,'Vis','width=1015;height=600,left=0,top=50,resizable,scrollbars');
}
</script>
</head>
</head>
<body>

<%
    String id_wunits = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"wunits");
   String[] saIdWU = null;
   if (id_wunits != null) {
     saIdWU = id_wunits.split("\\.");
     id_wunits = "";
     for (int i=0;i<saIdWU.length;i++) {
       id_wunits += com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", saIdWU[i]) + "||";
     }
   } else {
     id_wunits = "";
   }

   String zsubsesion = "SSM_SET_WORK_UNIT_TO_SEE";
   String zmeta4object = "SSM_SET_WORK_UNIT_TO_SEE";
   String zmetodocarga = zsubsesion + "!SSM_SET_WORK_UNIT_TO_SEE.SSM_VIEW_ALL_EMPLOYEES";
   String znodo = "SSM_EMPLOYEES_4_WUNIT";
   String znodo_managers = "SMCO_VIEW_ALL_MANAGERS";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   String zcomun_managers = znodo_managers + ":" + zsubsesion + "!" + znodo_managers + "[&VAR.m4lix]" + ".";

   String zventanas = "50";
   int zvuelta = 5;
   String zdireccion = "/mss_generico/mss_list_all_employees.jsp";
   
   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   String zmove = znodo + ":" + znodo + "["+zregistroinicial+"]";   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String ztipocarga = "ALL";

   String zmove_managers = znodo_managers + ":" + znodo_managers + "[FIRST]";   
   String zoutputdef_managers = zsubsesion + "!" + znodo_managers + "[*]";
  
   String zHR = zcomun + "SCO_ID_HR";
   String zNAME = zcomun + "SCO_GB_NAME";
   String zJOBCODE = zcomun + "SCO_ID_JOB_CODE";
   String zROLE = zcomun + "SCO_N_ROLE";
   String zORDROLE = zcomun + "SCO_OR_HR_ROLE";
   String zBIRTH = zcomun + "STD_DT_BIRTH";
   String zJOBNAME = zcomun + "STD_N_JOB_CODE";

%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="ARG_ALL_WUNITS" value="<%=id_wunits%>"/></m4:exec>  
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo_managers%>"><m4:param name="m4name0" value="<%=zoutputdef_managers%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove_managers%>"/></m4:move>
<%
    int  zcount  = 0;
    int  zcounti  = 0;  
    try {
      M4Operations m = new M4Operations(request);
      zcount = m.getCount(znodo,zsubsesion,znodo);
      zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    } catch(Exception e) {}
    String  zcountv = String.valueOf(zcounti);

    int  zcount_managers  = 0;
    int  zcounti_managers  = 0; 
    try {
      M4Operations m = new M4Operations(request);
      zcount_managers = m.getCount(znodo_managers,zsubsesion,znodo_managers);
      zcounti_managers = m.getCountInClient(znodo_managers,zsubsesion,znodo_managers);
    } catch(Exception e) {}
    String  zcountv_managers = String.valueOf(zcounti_managers);


%>
<table width="100%">
<tr><td class="titulofuncional" colspan="2" align="center"><b><%=Mss_cr.getProperty("msscr.Tabla79")%></b></td></tr>
<tr>
  <td><img src="/iconos/noname_mujer_53_100.gif" width="100" height="100" /></td>
  <td><div class="descripcionfuncional"><%=Mss_cr.getProperty("msscr.Tabla80")%></div></td>
</tr>
</table>


<%if (zcounti > 0) {
  String zregistroinicials = String.valueOf(zregistroinicial);
  String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
  String zposicions = "0";
  int zcontrol = 0;
  int zposicion =0;%>
<form action="/servlet/CheckSecurity/JSP/mss_generico/mss_list_all_employees.jsp?estado=11" method="post" name="oculto" id="oculto"><input type="hidden" id="zinicios" name="zinicios" value="" /></form>
<div>
<table class="tablaestados" width="100%"  cellspacing="0">
  <tr><td class="tablaestadosceldatitulo" colspan="4" align="left"><b><u><%=Mss_cr.getProperty("msscr.Tabla1265")%></b></u></td></tr>

</table>
</div>

<table class="tablaestados" width="100%" cellspacing="0">
<tr>

  <td class="tablaestadosceldatitulo">&nbsp;<%=Mss_cr.getProperty("msscr.ID6-3")%></td>
  <td class="tablaestadosceldatitulo">&nbsp;<%=Mss_cr.getProperty("msscr.Tabla73")%></td>
  <td class="tablaestadosceldatitulo">&nbsp;<%=Mss_cr.getProperty("msscr.Tabla74")%></td>
</tr>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<tr>
  <td class="fuentevalor">
  <m4:item m4name="<%=zHR%>" htmlsafe="true" m4varname="sIdHREnc"/>
  <%sIdHREnc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdHREnc);%>
   &nbsp;<a class="enlacefuncional" title="<%=Mss_cr.getProperty("msscr.Tabla1268")%>" href="javascript:load_prof('<%=sIdHREnc%>')"><m4:item m4name="<%=zHR%>"/>&nbsp;-&nbsp;<m4:item m4name="<%=zNAME%>"/></a></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zORDROLE%>"/>&nbsp;-&nbsp;<m4:item m4name="<%=zROLE%>"/></a></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zJOBCODE%>"/>&nbsp;-&nbsp;<m4:item m4name="<%=zJOBNAME%>"/></a></td>
</tr>
</m4:loop>
</table>
<%@include file="../../sse_generico/espanol/generico_ventanas_post.jsp"%>
<%}else{%>
<div class="fuentenodatos"><%=Mss_cr.getProperty("msscr.Negar")%></div>
<%}%> 

</div>


<div id="this_closed" name="this_closed">
<table class="tablaestados" width="100%"  cellspacing="0">
  <tr><td class="tablaestadosceldatitulo" colspan="4" align="left"><b><u><%=Mss_cr.getProperty("msscr.Tabla1264")%></b></u>
    <a href="javascript:allManagerscollapse.slideit();thisChange('1')" title="<%=Mss_cr.getProperty("msscr.Tabla1261")%>"><img src="/iconos/doble_flecha_20.png" alt="<%=Mss_cr.getProperty("msscr.Tabla1261")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a></td></tr>
</table>
</div>

<div id="this_opend" name="this_opend" class="invisible2">
<table class="tablaestados" width="100%"  cellspacing="0">
  <tr><td class="tablaestadosceldatitulo" colspan="4" align="left"><b><u><%=Mss_cr.getProperty("msscr.Tabla1264")%></b></u>
    <a href="javascript:allManagerscollapse.slideit();thisChange('2')" title="<%=Mss_cr.getProperty("msscr.Tabla1262")%>"><img src="/iconos/doble_flecha_20.png" alt="<%=Mss_cr.getProperty("msscr.Tabla1262")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a></td></tr></table>
</div>


<div id="allManagers" name="allManagers" class="invisible2">
  <table class="tablaestados" width="100%" cellspacing="0">
    <tr>
      <td class="tablaestadosceldatitulo">&nbsp;<%=Mss_cr.getProperty("msscr.Tabla1263")%></td>
      <td class="tablaestadosceldatitulo">&nbsp;<%=Mss_cr.getProperty("msscr.Tabla6")%></td>
      <td class="tablaestadosceldatitulo">&nbsp;<%=Mss_cr.getProperty("msscr.ID3-3")%></td>
    </tr>
      <m4:dataloop outputdef="<%=znodo_managers%>">
      <tr>
          <td class="fuentevalor">&nbsp;<m4:item  item="SMCO_MANAGER_WHOLE_NAME" htmlsafe="true" outputdef="<%=znodo_managers%>"/></td>
          <td class="fuentevalor">&nbsp;<m4:item  item="SMCO_MANAGER_4_THIS_WUNIT" htmlsafe="true" outputdef="<%=znodo_managers%>"/></td>
          <td class="fuentevalor">&nbsp;<m4:item  item="SMCO_MANAGER_4_THIS_WUNIT_NM" htmlsafe="true" outputdef="<%=znodo_managers%>"/></td>
      </tr>
    </m4:dataloop>
  </table>
</div>

  <script type="text/javascript" language="Javascript1.5">document.getElementById('allManagers').className="";</script>


  <script type="text/javascript">
    var allManagerscollapse=new animatedcollapse("allManagers", 800,0)
  function thisChange(tipo)
  {
    if (tipo=='1')
    {
      document.getElementById('this_opend').className=""
      document.getElementById('this_closed').className="invisible2";
    }

    if (tipo=='2')
    {
      document.getElementById('this_opend').className="invisible2"
      document.getElementById('this_closed').className="";
    }

  }
  </script>


<table width="100%" cellspacing="0" border="0">
  <tr>
    <td align="center">&nbsp;
    </td>
  </tr>

  <tr>
    <td align="center">
    <a href="javascript:window.close()" title="<%=Mss_cr.getProperty("msscr.Pop1-12")%>"><img src="/iconos/entrar_blanco.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop1-12")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a>
    </td>
  </tr>
</table>

</body>
<m4:endpage/>


