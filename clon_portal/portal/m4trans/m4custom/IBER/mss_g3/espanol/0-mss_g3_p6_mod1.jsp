<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
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
  String label_11 = "Volver a Datos Profesionales del Empleado";  

%>
<title>Solicita necesidades de formaci&oacute;n</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="/m4trans/m4custom/IBER/mss_generico/espanol/0-menu_mss.jsp" %>   
<script type="text/javascript" src="/libreria/menuintercambio.js"></script>   
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>  
<script type="text/javascript">


<%@ include file="/m4trans/mss_g3/0-mss_g3_trans.jsp"%>
<% String zDateFormat = ""; %>
<%zDateFormat = Tran.getProperty("Label.DateFormat");%>

  

function calc_costs(zNUM_PLACES,zTYPE,zID_DEV_SUB,zID_DEV_SUBA){
  var zDT_START = m4valor("Formulario","zfechaini","","get");
  var zDT_END = m4valor("Formulario","zfechafin","","get");
  var sMessage = new String(eval("_gen_error_msg"));
  var error = 0;

  if ((zDT_END==null)||(zDT_END=="")){zDT_END = "01-01-4000";}
  if ((zTYPE==null)||(zTYPE=="")){zTYPE= "11";}

  if (m4fechacomprobacion(m4objeto('zfechaini','Formulario'),false)=="" )  
  {
    sMessage = sMessage + "\n" + m4getmessage("_date",zDT_START,"<%=zDateFormat%>");   
    error = 1;
  }
 
  if (zDT_END != "01-01-4000" && (m4fechacomprobacion(m4objeto('zfechafin','Formulario'),false)=="" ) )
  {
    sMessage = sMessage + "\n" + m4getmessage("_date",zDT_END,"<%=zDateFormat%>"); 
    error = 1;
  }

  if (error == 1)
  {   
    alert(sMessage);
    return;
  }
  else
  {
    var dir="/servlet/CheckSecurity/JSP/mss_g3/smco_estimated_req_cost.jsp?estado=31&zDT_START="+zDT_START+"&zDT_END="+zDT_END+"&zNUM_PLACES="+zNUM_PLACES+"&zTYPE="+zTYPE+"&zID_DEV_SUB="+zID_DEV_SUB+"&zID_DEV_SUBA="+zID_DEV_SUBA;  
    window.open(dir,'Vis','width=400,height=160,left=0,top=50,resizable,scrollbars');
  }
}
 

function volver_prof(){
  document.getElementById("cargando").className = ""
  m4submit("volver") ;
  }

function solicitar(i2,zid2){
var empleados = "";
var m = 0;
var a = true;
var n = 0;
var x = 0;
var plazas = m4valor("Formulario","znplazas","","get");
var trtb = m4valor("Formulario","zidtrtb","","get");
var id = i2;

/*var zDescription = m4valor("Formulario","zDescription","","get");
var zDescriptionName = document.getElementById("zDescription").title;

if ((zDescription == null || zDescription == "" ) && zid2 == "99") {
  var sMessage = new String;
  sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_tr_0"); 
  alert(sMessage);
  return;
}
else
  { // controlamos que la longitud no exceda de 1000 caracteres
  if ( zDescription.length  > 1000) 
    {
      var sMessage = new String;
      sMessage = sMessage + "\n" + m4getmessage("_comentario",zDescriptionName); 
      alert(sMessage);
      return;
    }
  }


m4valor("Formulario","zDescription",zDescription,"set");*/


m = document.forms["Formulario"].elements["list2"].options.length;
n = m -1;
if (plazas == 0 && m== 0){alert ("Debe de introducir número de plazas o elegir algún empleado");return;}
v1 = new m4objvalidacion('_num',1,2,'','',false);
v1.m4validar(m4objeto("znplazas","Formulario"));
if (v1.resultado == false && m == 0){
  alert ("No se ha realizado la solicitud.Compruebe que el número de plazas es correcto.");
  return;}
if (a == false){return;}
var oobjeto = document.forms["Formulario"].elements["zidtrtb"];
for (i=0; i<oobjeto.length; i++) {
            if (oobjeto[i].checked == true){
              oobjeto = oobjeto[i];
              trtb= oobjeto.value;
            }
          }  
if (id==trtb){m4valor("Formulario","zTipo","1","set");}else{m4valor("Formulario","zTipo","2","set");}

if (plazas < m) {m4valor("Formulario","znplazas",m,"set");plazas = m;}
for (i=x ; i < n+1 ; i++){
  if (i == n) {empleados += document.forms["Formulario"].elements["list2"].options [i].value;}
  else    {empleados += document.forms["Formulario"].elements["list2"].options [i].value + ",";}
  }
if ((m4valor("Formulario","zfechafin","","get")== "") && (m4valor("Formulario","zfechaini","","get")== ""))
  {m4valor("Formulario","zempleados",empleados,"set");
   m4submit("Formulario");
   return;}
if ((m4valor("Formulario","zfechafin","","get")== "") && (m4fechacomprobacion(m4objeto('zfechaini','Formulario'),"")))
  {m4valor("Formulario","zempleados",empleados,"set");
   m4submit("Formulario");
   return;}
if (m4fechacomprobacion((m4objeto('zfechaini','Formulario')),"")&&  (m4fechacomprobacion((m4objeto('zfechaini','Formulario')),""))&& (m4compfechas(m4objeto('zfechaini','Formulario'),'<=',m4objeto('zfechafin','Formulario'))))
  {m4valor("Formulario","zempleados",empleados,"set");
  m4submit("Formulario");
  return;}
alert ("No se ha realizado la solicitud.Compruebe que la fecha de fin es posterior a la de inicio y que los formatos son correctos.");

// m4submit("Formulario");

}
</script>
<%      

  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String zid = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid");
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios"); 
  String zidtrtb = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb");
  String zinfosubprod = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinfosubp");  

  if ((estado==null)||(estado.equals(""))){
    estado = "0";
    }
    if ((zidtrtb==null)||(zidtrtb.equals(""))){
    zidtrtb = "";
    }
  if ((zinfosubprod==null)||(zinfosubprod.equals(""))){zinfosubprod = "0";} 
%>

</head>
<body>
<% if (zVis.equals("1")){%>
  <%@ include file="/m4trans/m4custom/IBER/mss_generico/espanol/0-mssgenerico_menusup.jsp" %>
  <%@ include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_links.jsp" %>
<%}%>
<%
  String zsubsesion = "CSP_SSM_TRAINING_REQUEST";
  String zMeta4Object = "CSP_SSM_TRAINING_REQUEST";  
  
  String znodo1 = "M4T_DESC_CURSO";
  String znodo11 = "M4T_CATG";
  String znodo12 = "M4T_NATURE";
  String znodo13 = "M4T_TRAINING_DEV";    
      
      
      String znodo2 = "SSM_EMPLEADOS";
      String znodo3 = "M4T_LENGUAJES";
      String znodo6 = "M4T_EVENTOS";
      
  
      String ztipocarga = "DC";
      String zventanas = "20";
    
          int zregistroinicial = 0;
          //zregistroinicial = zregistroinicial - 1;
      int zventana  = 0;
        int zregistrofinal = zregistroinicial + zventana - 1;
    // No se modifica en general.
      
   String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
   String zmove1 = znodo1 + ":" + znodo1 + "[" + zregistroinicial + "]";
   String zlectura1 = zsubsesion + "!" + znodo1;
   String zraiz1 = zsubsesion + "!" + znodo1 + ".";
   String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;
       
      
   String zoutputdef11 = zsubsesion + "!" + znodo11 + "[*]";
   String zraiz11 = zsubsesion + "!" + znodo11 + ".";   
   String zmove11 = znodo11 + ":" + znodo11 + "[" + zregistroinicial + "]";
     
   String zoutputdef12 = zsubsesion + "!" + znodo12+ "[*]";
   String zraiz12 = zsubsesion + "!" + znodo12 + ".";    
      
   String zoutputdef13 = zsubsesion + "!" + znodo13+ "[*]";
   String zcomun13 = znodo13 + ":" + zsubsesion + "!" + znodo13 + "[&VAR.m4lix]" + ".";  
   String zmove13 = znodo13 + ":" + znodo13 + "[" + zregistroinicial + "]";    
       
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + ":" + znodo2 + "[" + zregistroinicial + "]";
   String zraiz2 = zsubsesion + "!" + znodo2 + ".";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";

   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
        
   String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";
   String zmove6 = znodo6 + ":" + znodo6 + "[" + zregistroinicial + "]";
   String zraiz6 = zsubsesion + "!" + znodo6 + ".";
   String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&VAR.m4lix]" + ".";

  // Metodo de carga del Meta4Object generico

  String zMETODOCARGA = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";   
  
  String zSCO_DAYS = zraiz1 + "SCO_DAYS";
  String zSCO_HOURS = zraiz1 + "SCO_HOURS";
  String zSCO_HOURS_OTW = zraiz1 + "SCO_HOURS_OTW";
  String zSCO_NB_MAX = zraiz1 + "SCO_NB_MAX";
  String zSCO_NB_MIN = zraiz1 + "SCO_NB_MIN";
  String zSCO_NM_DEV_SUBPRODUCT =  zraiz1 + "SCO_NM_DEV_SUBPRODUCT";
  String zSCO_NM_DEV_PRO_TYPE =  zraiz1 + "SCO_NM_DEV_PRO_TYPE";
  String zSCO_NM_DEV_PRODUCT =  zraiz1 + "SCO_NM_DEV_PRODUCT";
  String zSCO_NM_PRODUCT_TYPE =  zraiz1 + "SCO_NM_PRODUCT_TYPE";
  String zSCO_EDUCAT_OBJ =  zraiz1 + "SCO_EDUCAT_OBJ";
  String zSCO_HTTP_PATH =  zraiz1 + "SCO_HTTP_PATH";
  String zIDtipo =  zraiz1 + "SCO_ID_DEV_PRO_TYPE";
  
  String zSCO_AUTHOR =  zraiz1 + "SCO_AUTHOR";
  String zSCO_CD_DATE =  zraiz1 + "SCO_CD_DATE";
  String zSCO_ESTIMATED_DAYS =  zraiz1 + "SCO_ESTIMATED_DAYS";
  String zSCO_ESTIMATED_HOURS =  zraiz1 + "SCO_ESTIMATED_HOURS";
  String zSCO_NUMBER_OF_UNITS =  zraiz1 + "SCO_NUMBER_OF_UNITS";
  String zSCO_NM_TRAINING_LOCATION_TYPE =  zraiz1 + "SCO_NM_TRAINING_LOCATION_TYPE";
  String zSFR_CK_DEDUCTIBLE =  zraiz1 + "SFR_CK_DEDUCTIBLE";
  String zSCO_ID_DEV_PRODUCT =  zraiz1 + "SCO_ID_DEV_PRODUCT";
  
  

  String zSCO_ID_TRAINING_CATG =  zraiz11 + "SCO_ID_TRAINING_CATG";
  String zSCO_NM_TRAINING_CATG =  zraiz11 + "SCO_NM_TRAINING_CATG";
  
  String zSCO_NM_TRAINING_NAT =  zraiz12 + "SCO_NM_TRAINING_NAT";
  String zSCO_ID_TRAINING_NAT =  zraiz12 + "SCO_ID_TRAINING_NAT";
  
  String zSSCO_ID_TRAINING_DEV = zcomun13 + "SCO_ID_TRAINING_DEV";
  String zSCO_NM_TRAINING_DEV = zcomun13 + "SCO_NM_TRAINING_DEV";
  
          
  String zNFAMILYNAME = zraiz2 + "STD_N_FAMILY_NAME_1";
  String zFIRSTNAME = zraiz2 + "STD_N_FIRST_NAME";
  String zIDPERSON = zcomun2 + "STD_ID_PERSON";
  String zSCO_GB_NAME = zcomun2 + "SCO_GB_NAME";
  
  String zSTDNMLENGUAGE = zcomun3 + "STD_N_LANGUAGE";
  String zSTDIDLENGUAGE = zcomun3 + "STD_ID_LANGUAGE";
      
  String zNMEVENTO = zcomun6 + "SCO_NM_DEV_SUBACTION";
  String zIDTRTBEVENTO = zcomun6 + "SCO_ID_TRTBREQ";
  String zDATE = zcomun6 + "SCO_DATE";
  String zDATE1 = zcomun6 + "SCO_DATE_1";
  String zSCO_DAYS6= zcomun6 + "SCO_DAYS";
  String zSCO_HOURS6= zcomun6 + "SCO_HOURS";
  String zSCO_HOURS_OTW6= zcomun6 + "SCO_HOURS_OTW";

  String zSCO_ID_TYPE = zcomun6 + "SCO_ID_TYPE";
  String zSCO_ID_DEV_SUBACTION = zcomun6 + "SCO_ID_DEV_SUBACTION";
  String zSCO_ID_DEV_SUBPRODUCT =  zraiz1 + "SCO_ID_DEV_SUBPRODUCT";
  
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%= zMeta4Object %>" m4name="<%=zsubsesion%>"/>
<% 
    try {
      M4Operations m = new M4Operations(request);
      m.setItem(zsubsesion,znodo1,"","SSE_ID",zid);
    }catch(Exception e){}
%>
<m4:exec m4method="<%=zMETODOCARGA%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef11%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef12%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo6%>"><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo13%>"><m4:param name="m4name0" value="<%=zoutputdef13%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove11%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove13%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove6%>"/></m4:move>
<%
  int  zcount3  = 0;
  int  zcount3i  = 0; 
  int  zcount2i  = 0;
  int  zcount13  = 0;
  int  zcounteventos_aux  = 0;  
  try {
      M4Operations m = new M4Operations(request);
      zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
      zcount3i = m.getCountInClient(znodo3,zsubsesion,znodo3);
      zcount2i = m.getCountInClient(znodo2,zsubsesion,znodo2);
      zcount13 = m.getCount(znodo13,zsubsesion,znodo13);
      zcounteventos_aux = m.getCountInClient(znodo6,zsubsesion,znodo6);
  } catch(Exception e) {}
  String  zcount2v = String.valueOf(zcount2i);
  String  zcount3v = String.valueOf(zcount3i);
  String  zcount6v = String.valueOf(zcounteventos_aux);
  String  zcount13v = String.valueOf(zcount13);
%>
<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2">Solicita necesidades de formaci&oacute;n</td></tr>
<tr><td><img src="/iconos/noname_incripciones_formacion_99_100.gif" width="99" height="100" alt="Solicita necesidades de formaci&oacute;n"></td>
  <td><div class="descripcionfuncional">Solicita cursos de formaci&oacute;n indicando las plazas y las personas que necesitas.</div>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_insert.jsp" method="post" name="Formulario" id="Formulario">
<input id="zempleados" name="zempleados" type="hidden" value="" />  
<input id="zTipo" name="zTipo" type="hidden" value="1" /> 
<% if (zVis.equals("0")){%>
  <input type="hidden" id="empleado" name="empleado" value="<%=empleado%>" />
  <input type="hidden" id="periodo" name="periodo" value="<%=periodo%>" />
  <input type="hidden" id="zVis" name="zVis" value="<%=zVis%>" />
<%}%>

<table cellspacing="0" width="100%">
<tr class="tablaestadosceldatitulo">
<td colspan="3">Curso:&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_SUBPRODUCT%>" htmlsafe="true"/>&nbsp;(&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_PRO_TYPE%>" htmlsafe="true"/>&nbsp;)&nbsp;</td>
<td class="tablaestadosceldatitulo" align="right">
<% if (zVis.equals("1")){%>
  <a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31"><img alt="Solicita necesidades de formaci&oacute;n" src="/iconos/flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a>
<%}%>
</td>
</tr>
<tr>
  <td class="fuentecampo">Producto tipo</td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_NM_PRODUCT_TYPE%>" htmlsafe="true"/></td>
  <td class="fuentecampo">Producto</td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_PRODUCT%>" htmlsafe="true"/></td>
</tr>
<m4:item m4varname="zIdTypeC" m4name="<%=zIDtipo%>"/>
<m4:item m4varname="zCHDedcu" m4name="<%=zSFR_CK_DEDUCTIBLE%>"/>
<tr>
  <td class="fuentecampo">Lugar</td>
  <td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_NM_TRAINING_LOCATION_TYPE%>" htmlsafe="true"/></td>
	<td class="fuentecampo">Bonificable Fundación Tripartita</td>
  <%if (zCHDedcu.equals("0")){%>
  <td class="fuentevalor" >&nbsp;No</td>
  <%}else{%>
  <td class="fuentevalor" >&nbsp;Si</td>
  <%}%>
</tr> 
  <m4:item m4varname="zDays" m4name="<%=zSCO_DAYS%>"/>
  <%if (!zDays.equals("1")){%>
  <tr>
    <td class = "fuentecampo" >D&iacute;as  </td>
    <td class = "fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSCO_DAYS%>" htmlsafe="true"/></td>
  </tr>
  <%}%>

<tr>
  <td class="fuentecampo">Nº horas</td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_HOURS%>" htmlsafe="true"/></td>
  <td class="fuentecampo">&nbsp;<!--Nº horas extras--></td>
  <td class="fuentevalor">&nbsp;<!--&nbsp;<m4:item m4name="<%=zSCO_HOURS_OTW%>" htmlsafe="true"/>--></td>
</tr>
<tr>  
  <td class="fuentecampo">Nº de asistentes (min/max)</td>
  <td class="fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSCO_NB_MIN%>" htmlsafe="true"/>/<m4:item m4name="<%=zSCO_NB_MAX%>" htmlsafe="true"/></td>
</tr>
<tr>
  <td class="fuentecampo">Nivel</td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_NM_TRAINING_CATG%>" htmlsafe="true"/></td>
  <td class="fuentecampo">&nbsp;<!--Objetivos--></td>
  <td class="fuentevalor">&nbsp;<!--&nbsp;<m4:item m4name="<%=zSCO_NM_TRAINING_NAT%>" htmlsafe="true"/>--></td>
</tr>
<%if (zIdTypeC.equals("02")){%>
<tr>
  <td class = "fuentecampo">Autor</td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_AUTHOR%>" htmlsafe="true"/></td>
  <td class = "fuentecampo">Fecha actualizaci&oacute;n</td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_CD_DATE%>" htmlsafe="true"/></td>
</tr>
<tr>
  <td class="fuentecampo">Nº unidades</td>
  <td class="fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSCO_NUMBER_OF_UNITS%>" htmlsafe="true"/></td>
</tr>
<%}%>
<tr>  
  <td class="fuentecampo">Objetivo formativo</td>
  <td class="fuentevalor" colspan="2">&nbsp;<m4:item m4name="<%=zSCO_EDUCAT_OBJ%>" htmlsafe="true"/></td>


  <!--  <%  String DescrBotonCostes = ""; %>
    <% DescrBotonCostes = mss_g3.getProperty("Label.mss_g3_p6_mod1_Cost");%>

  <td class="fuentecampo"  >&nbsp;<a href="javascript:calc_costs('<m4:item m4name='<%=zSCO_NB_MAX%>' htmlsafe='true'/>','<m4:item m4name='<%=zSCO_ID_TYPE%>' htmlsafe='true'/>','<m4:item m4name='<%=zSCO_ID_DEV_SUBPRODUCT%>' htmlsafe='true'/>','<m4:item m4name='<%=zSCO_ID_DEV_SUBACTION%>' htmlsafe='true'/>')" title="<%=DescrBotonCostes%>"><img alt="<%=DescrBotonCostes%>" title="<%=DescrBotonCostes%>" src="/iconos/icono_revision_colectiva_32_16.gif" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /><%=DescrBotonCostes%></a></td>-->
<td class="fuentecampo"  >&nbsp;</TD>

</tr>
<!--<tr>
  <td class="fuentecampo">Proveedor</td>
  <td class="fuentevalor" colspan="3">&nbsp;<a href ="<m4:item m4name="<%=zSCO_HTTP_PATH%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCO_HTTP_PATH%>" htmlsafe="true"/></td>
</tr>-->
</table>
<div id="oculto" style="display:none">
<table width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
  <td colspan="4" width="100%">Informaci&oacute;n adicional</td>
</tr>
<tr>
  <td class="fuentecampo">Inicio preferido</td>
  <td class="fuentecampo"><input class="fuenteformulario" type="text" name="zfechaini" id="zfechaini" title="Escribe la fecha de inicio" maxlength="10" size="10" /><a href="javascript:m4calendario(m4objeto('zfechaini','Formulario'))"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="Selecciona la fecha de inicio" /></a></td>
  <script type="text/javascript">document.all["zfechaini"].value = m4fechahoy();</script>
  <td class="fuentecampo">Fin preferido</td>
  <td class="fuentecampo">&nbsp;<input class="fuenteformulario" type="text" name="zfechafin" id="zfechafin" title="Escribe la fecha de fin" maxlength="10" size="10" /><a href="javascript:m4calendario(m4objeto('zfechafin','Formulario'))"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="Selecciona la fecha de fin" /></a></td>
</tr>
<tr>
  <td class="fuentecampo">Idioma</td>
  <td class="fuentevalor" >
    <select id="zidioma" class="Fuenteformulario" name="zidioma" alt ="Idioma">
      <option value="01">Español</option>
      <m4:loop from="0" to="<%=new Integer(new Integer(zcount3v).intValue()-1).toString()%>">
      <option value="<m4:item m4name="<%=zSTDIDLENGUAGE%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNMLENGUAGE%>" htmlsafe="true"/></option>
      </m4:loop>
    </select>
  </td>
  <td class="fuentecampo">Bonificaci&oacute;n</td>
  <td class="fuentevalor" >
    <select id="zDev" class="Fuenteformulario" name="zDev" alt ="Bonificaci&oacute;n">
      <option value=""></option>
      <m4:loop from="0" to="<%=new Integer(new Integer(zcount13v).intValue()-1).toString()%>">
      <option value="<m4:item m4name="<%=zSSCO_ID_TRAINING_DEV%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCO_NM_TRAINING_DEV%>" htmlsafe="true"/></option>
      </m4:loop>
    </select>
  </td>
</tr>

 
<tr>
  <td class="fuentecampo"><%= mss_g3.getProperty("Label.mss_g3_p6_mod1_Desc")%></td>
  <td class="fuentecampo" colspan = "3"><textarea class="fuenteformulario"  title=<%=mss_g3.getProperty("Label.mss_g3_p6_mod1_Desc")%> id="zDescription" name="zDescription" cols="40" rows="4" maxlength="1000"  /></textarea></td>
</tr>
</table>
</div>
<% if (zcounteventos_aux != 0 ) { %>
<div class="descripcionfuncional">Si quieres solicitar un curso ya programado selecciona el que desees.<br></div>
<table cellspacing="0" width="100%" >
<tr><td class = "tablaestadosceldatitulo" colspan="10" align="center">  Cursos programados</td></tr>
<tr>
<td class="fuentecampo" >Nombre</td>
<td class="fuentecampo" >Inicio</td>
<td class="fuentecampo" >Fin</td>
<td class="fuentecampo" >D&iacute;as</td>
<td class="fuentecampo" >N&uacute;m. de horas</td>
<td class="fuentecampo" >N&uacute;m. de horas extras</td>
<td class="fuentecampo" ></td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcount6v).intValue()-1).toString()%>">
<tr>
  <td class="fuentevalor"><m4:item m4name="<%=zNMEVENTO%>" htmlsafe="true"/></td>
  <td class="fuentevalor" ><m4:item m4name="<%=zDATE1%>" htmlsafe="true"/> </td>
  <td class="fuentevalor" ><m4:item m4name="<%=zDATE%>" htmlsafe="true"/></td>
  <td class="fuentevalor" ><m4:item m4name="<%=zSCO_DAYS6%>" htmlsafe="true"/></td>
  <td class="fuentevalor" ><m4:item m4name="<%=zSCO_HOURS6%>" htmlsafe="true"/></td>
  <td class="fuentevalor" ><m4:item m4name="<%=zSCO_HOURS_OTW6%>" htmlsafe="true"/></td>
  <td class="fuentecampo" width ="4%">
    <%if(zinfosubprod.equals("0")){%>
    <input id="zidtrtb" name="zidtrtb" type="radio" value="<m4:item m4name="<%=zIDTRTBEVENTO%>" htmlsafe="true"/>" />
    <% }else{%>
    <input id="zidtrtb" name="zidtrtb" type="radio" checked value="<m4:item m4name="<%=zIDTRTBEVENTO%>" htmlsafe="true"/>" />
    <% }%>

  </td>
</tr>
</m4:loop>
</table>
<table cellspacing="0" width="100%" >
  <tr>
  <td class="fuentecampo" width ="56%"></td>
  <%if(zinfosubprod.equals("0")){%>
  <td class="fuentecampo" width ="40%"align ="left">No quiero ning&uacute;n curso programado</td>
  <td class="fuentecampo" width ="4%" ><input id="zidtrtb" name="zidtrtb" type="radio" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zidtrtb)%>" checked /></td>
  <% }%>
  </tr>
  <tr><td colspan="8" ></td></tr>
  <tr><td colspan="8" ></td></tr>
</table>
<% }else{%>
<input id="zidtrtb" name="zidtrtb" type="hidden" value="<%=zidtrtb%>" />  
<% }%>
<table cellspacing="0" width="100%">
<tr class="tablaestadosceldatitulo" >
  <td colspan="7">&nbsp;Solicitud de plazas</td>
</tr>
<tr><td class="fuentecampo" colspan="7">&nbsp;N&uacute;mero de plazas:&nbsp;<input maxlength= "3"  class="fuenteformulario" type="text" name="znplazas" id="znplazas" title="Número de plazas" maxlength="10" size="10"></td></tr>
<tr>
  <td class="fuentevalor" colspan="3">
    <select class="fuenteformulario200" multiple="multiple" name="list1" id="list1" size="10" class="fuenteformulario" align="center" ondblclick="mover(m4objeto('list1','Formulario'),m4objeto('list2','Formulario'),false)">

      <m4:loop from="0" to="<%=new Integer(new Integer(zcount2v).intValue()-1).toString()%>">

      <option value="<m4:item m4name="<%=zIDPERSON%>" htmlsafe="true"/>">&nbsp;<m4:item m4name="<%=zSCO_GB_NAME%>" htmlsafe="true"/></option>
      </m4:loop>
      <option></option>
    </select>
  </td>
  <td class="fuentevalor" >
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img alt="Enviar" title="" src="/iconos/icono_move_left_31_19.gif" onclick="mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),false)" name="b2" id="b2" align="center"/>&nbsp;&nbsp;&nbsp;<img alt="Enviar" title="" src="/iconos/icono_move_right_31_19.gif" onclick="mover(m4objeto('list1','Formulario'),m4objeto('list2','Formulario'),false)" name="b1" id="b1" align="center"/><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img alt="Enviar" title="" src="/iconos/icono_moveall_left_31_19.gif" onclick="mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),true)" name="b4" id="b4" align="center"/>&nbsp;&nbsp;&nbsp;<img alt="Enviar" title="" src="/iconos/icono_moveall_right_31_19.gif" onclick="mover(m4objeto('list1','Formulario'),m4objeto('list2','Formulario'),true)" name="b3" id="b3"align="center"/>
  </td>
  <td class="fuentevalor" colspan="3">
  <% if (zVis.equals("0")){%>
    <select class="fuenteformulario200" multiple="multiple" name="list2" id="list2" size = "10" class="fuenteformulario" align="center" ondblclick="mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),false)">
      <option value="<%=empleado%>">&nbsp;<%=nombre_empleado%></option>
    </select>
  <%}else{%>
    <select class="fuenteformulario200" multiple="multiple" name="list2" id="list2" size = "10" class="fuenteformulario" align="center" ondblclick="mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),false)"></select>
      <option></option>
    </select>
  <%}%> 
  </td>
</tr>
<tr>
  <td colspan="7" class="fuenteboton">
    <a href="javascript:solicitar('<%=zidtrtb%>','<m4:item m4name='<%=zSCO_ID_DEV_PRODUCT%>' htmlsafe='true'/>')" title="Enviar la nueva peticion"><img alt="Enviar" title="Enviar" src="/iconos/icono_enviar_mss_36_36.gif" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
    <% if (zVis.equals("0")){%>
        <a title="<%=label_11%>" href="javascript:volver_prof();" tabindex="6"><img alt="<%=label_11%>" src="/iconos/icono_entrar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
    <%}%>
  </td>
</tr>
</table>
</form>
<% if (zVis.equals("0")){%>
  <form action="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp" method="post" name="volver" id="volver">
    <input type="hidden" id="person" name="person" value="<%=empleado%>" />
    <%periodo = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", periodo);%>
    <input type="hidden" id="person_ord" name="person_ord" value="<%=periodo%>" />
  </form>

<div id="cargando" name="cargando" class="invisible2"  style="position: relative; top: 0; left: 0">&nbsp;
<table  class ="cargando">
  <tr><td>&nbsp;<img src="/iconos/cargando.gif" alt='<%=Tran.getProperty("Button.Volver")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></td>
  <td>&nbsp;&nbsp;&nbsp;<%=Tran.getProperty("Button.Volver")%>&nbsp;&nbsp;</td></tr></table> 
</div>
<%}%>

<% if (zVis.equals("1")){%>
  <%@ include file="/m4trans/m4custom/IBER/mss_generico/espanol/0-mssgenerico_disclaimer.jsp" %>
<%}%>
</body>
<m4:endpage/>


