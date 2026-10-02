<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<!-- ESS Base Template -->
<head>
<%
  String label_01 = "Available Training";
  String label_02 = "Description of the courses (both classes and multimedia) available for the selected Extended Knowledge and level.";
  String label_03 = "Type";
  String label_04 = "Name";
  String label_05 = "Days";
  String label_06 = "Provider";
  String label_07 = "Multimedia";
  String label_08 = "Course Details";
  String label_09 = "This Extended Knowledge has no associated course.";
  String label_10 = "Author";
  String label_13 = "Request Training Needs";
  String label_11 = "Back to Employee Professional Data";
%>
  <title><%=label_13%></title>
  <!-- General Style Sheet. Required-->
  <link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
  <!-- JavaScript libraries. Required-->
  <script type="text/javascript" src="/libreria/funciones_sse.js"></script>
  <%@ include file="../../mss_generico/english/menu_mss.jsp" %>   

<%
//--------------------------------------------------------  
  String empleado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado");   
  String periodo = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo");   
  String nombre_empleado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado");   
  String zVis = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis");   

  if ((zVis==null)||(zVis.equals(""))){
    zVis = "1";
  }

//--------------------------------------------------------

%>

  
<script type="text/javascript">

function volver_prof(){
  document.getElementById("cargando").className = ""
  m4submit("volver") ;
  }

function solicitar_curso(idtrtb,id){
m4valor("oculto","zidtrtb",idtrtb,"set");
m4valor("oculto","zid",id,"set");
m4submit("oculto");}

</script>
<!-- Java libraries. Required-->
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<!-- Parameter retrieval. -->
<!-- status:  Determine the location bar. -->
<%
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
  String zextd = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zextd");
  String zlevel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zlevel");

  if ((estado==null)||(estado.equals(""))){
    estado = "0";}
  if ((zinicios==null)||(zinicios.equals(""))){
    zinicios = "1"; }     
  %>
</head>
<body>
<!-- Header -->
<% if (zVis.equals("1")){%>
   <%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
   <%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%}%>
<!-- **************************************************************************-->
<!-- Meta4Object load. The name of the Task should be the same as the name of the Meta4Object that is loaded; or the primary one, if more than one is loaded. Insert the class imports before anything else -->

<!-- Meta4Object definition -->

<%
    String zsubsesion = "SSM_EXT_KN_TRAINING";
  String zMeta4Object = "SSM_EXT_KN_TRAINING";
  String znodo = "M4T_CURSOS";

    
  String ztipocarga = "CME";

  // Parametrise the desired window size.

  String zventanas = "";
   if (zVis.equals("1")){
     zventanas = "50";
   }else{
       zventanas = "5000";
   }


  // Normally not modified.
  
  int zregistroinicial = Integer.valueOf(zinicios).intValue();
  zregistroinicial = zregistroinicial - 1;
  int zventana  = Integer.valueOf(zventanas).intValue();
  int zregistrofinal = zregistroinicial + zventana - 1;
  
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + "[" + zregistroinicial + "]";
   String zlectura = zsubsesion + "!" + znodo;
   String zraiz = zsubsesion + "!" + znodo + ".";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   

    
  String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";   
      
  // Items to be loaded. You must add all of the ones that you want to view.
  
  String znmcursos =  zcomun + "SCO_NM_DEV_SUBPRODUCT";
  String znmtipo =  zcomun + "SCO_NM_DEV_PRO_TYPE";
  String zidcurso =  zcomun + "SCO_ID_DEV_SUBPRODUCT";
  String zidtrtb1 =  zcomun + "SCO_ID_TRTBREQ";
  String zdias = zcomun + "SCO_DAYS";     
  String zproveedor = zcomun + "SCO_NM_TRAINING_PROV";
      
            
      
  
%>


<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zMeta4Object%>" m4name="<%=zsubsesion%>"/>
<% try {
    M4Operations m = new M4Operations(request);
    m.setItem(zsubsesion,znodo,"","EXTD_KN",zextd);
    m.setItem(zsubsesion,znodo,"","ID_LEVEL",zlevel);
    }
  catch(Exception e){}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
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

  <table width="100%" cellspacing="0">
  <tr>
    <td class="titulofuncional" width ="80%"> <%=label_01%>&nbsp;</td>
    <td class="titulofuncional" width ="20%">&nbsp;</td>
  </tr>
      </table>
<% if (zVis.equals("1")){%>
  <table width="100%" cellspacing="0">
  <tr>
    <td><img src="/iconos/noname_puesto_144_100.gif" width="99" height="100" alt="Courses by Extended Knowledge" ></td>
    <td><div class="descripcionfuncional"><%=label_02%></div><ul class="listaenlace"><li><a class="enlacefuncional" title="<%=label_13%>" tabindex="1" href="mss_g3_p6.jsp?estado=31"><%=label_13%></a></li></ul></td>
  </tr>
  </table>
<%}%>
<% 
if (zcounti == 0  ) {
%>
<div class="fuentenodatos" align="center"><%=label_09%></div>
<%
}
if (zcounti != 0) {
%>
  
  <table class="TablaEstados" cellspacing="0" width="100%">
  <tr>
    <td class="tablaestadosceldatitulo">&nbsp;<%=label_04%></td>
    <td class="tablaestadosceldatitulo">&nbsp;<%=label_03%></td>
    <td class="tablaestadosceldatitulo">&nbsp;<%=label_05%></td>
    <td class="tablaestadosceldatitulo">&nbsp;<%=label_06%></td>
  </tr>
  <%
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;%>
<%if (zcontrol==0){%>
 <tr>
  <td class="fuentevalor"><a href="javascript:solicitar_curso('<m4:item m4name="<%=zidtrtb1%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zidcurso%>" jsafe="true" htmlsafe="true"/>');" title="Course Details"><m4:item m4name="<%=znmcursos%>" htmlsafe="true"/></a></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=znmtipo%>" htmlsafe="true"/></td>
    <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zdias%>" htmlsafe="true"/></td>
    <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zproveedor%>" htmlsafe="true"/></td>
</tr>
 
 <% } else { %>
 <tr>
  <td class="fuentevalor2"><a href="javascript:solicitar_curso('<m4:item m4name="<%=zidtrtb1%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zidcurso%>" jsafe="true" htmlsafe="true"/>');" title="Course Details"><m4:item m4name="<%=znmcursos%>" htmlsafe="true"/></a></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=znmtipo%>" htmlsafe="true"/></td>
    <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zdias%>" htmlsafe="true"/></td>
    <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zproveedor%>" htmlsafe="true"/></td>
   </tr>
 <%}%>
</m4:loop>
</table>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_mod1.jsp?estado=31" method="post" name="oculto" id="oculto">
  <input type="hidden" id="zidtrtb" name="zidtrtb"/>
  <input type="hidden" id="zid" name="zid"   />

  <% if (zVis.equals("0")){%>
    <input type="hidden" id="empleado" name="empleado" value="<%=empleado%>"/>
    <input type="hidden" id="periodo" name="periodo" value="<%=periodo%>"/>
    <input type="hidden" id="nombre_empleado" name="nombre_empleado" value="<%=nombre_empleado%>"/>
    <input type="hidden" id="zVis" name="zVis" value="<%=zVis%>"/>
  <%}%>


</form>       
<% 
} 

%>

<% if (zVis.equals("0")){%>
  <form action="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp" method="post" name="volver" id="volver">
    <input type="hidden" id="person" name="person" value="<%=empleado%>" />
    <input type="hidden" id="person_ord" name="person_ord" value="<%=periodo%>" />
    <input type="hidden" id="nombre_empleado" name="nombre_empleado" value="<%=nombre_empleado%>"/>
      <a title="<%=label_11%>" href="javascript:volver_prof();" tabindex="6"><img alt="<%=label_11%>" src="/iconos/icono_entrar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
  </form>
<div id="cargando" name="cargando" class="invisible2"  style="position: relative; top: 0; left: 0">&nbsp;
<table  class ="cargando">
  <tr><td>&nbsp;<img src="/iconos/cargando.gif" alt='<%=Tran.getProperty("Button.Volver")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></td>
  <td>&nbsp;&nbsp;&nbsp;<%=Tran.getProperty("Button.Volver")%>&nbsp;&nbsp;</td></tr></table> 
</div>
<%}%>

<% if (zVis.equals("1")){%>
  <%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
<%}%>

</div>
</body>
<m4:endpage/>
</html>



