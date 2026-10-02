<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%@ include file="../../mss_generico/mss_cr_trans.jsp" %>
<title><%=Mss_cr.getProperty("msscr.Tabla114")%></title>
  <link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
  <script type="text/javascript" src="/libreria/funciones_sse.js"></script>
  <%@ include file="../../mss_generico/espanol/menu_mss.jsp" %>
<%     
    String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
  if ((estado==null)||(estado.equals(""))){estado="0";}
  if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
  String zfiltro = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro");
  String zfiltro2 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro2");
  String zfiltro3 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro3");
  String zfiltro4 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro4");
  String zfiltro5 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro5");

  String WUn = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUt");
  String JOBn = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"JOBt");
  String LOCn = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"LOCt");

  if ((zfiltro2==null||zfiltro2.equals(""))  &&  (zfiltro3==null||zfiltro3.equals("")) &&  (zfiltro==null||zfiltro.equals("")) ) {zfiltro2 = "ALL";}
  if ((zfiltro==null)||(zfiltro.equals(""))){zfiltro = "ALL";}  
  if ((zfiltro3==null)||(zfiltro3.equals(""))){zfiltro3 = "ALL";}
  if ((zfiltro4==null)||(zfiltro4.equals(""))){zfiltro4 = "ALL";}
  if ((zfiltro5==null)||(zfiltro5.equals(""))){zfiltro5 = "ALL";}

  if ((WUn==null)||(WUn.equals(""))){WUn = "Todos";}
  if ((JOBn==null)||(JOBn.equals(""))){JOBn = "Todos";}
  if ((LOCn==null)||(LOCn.equals(""))){LOCn = "Todos";}

  String profData = Tran.getProperty("Labelmss.ProfsData");
%>  
</head>
<body>
<%

   String zsubsesion = "SSE_INVENTARIO";
   String zmeta4object = "SSE_INVENTARIO";
   String zmetodocarga = zsubsesion + "!SSE_INVENTARIO.CARGA";
   String znodo = "SSE_INVENTARIO";
   String znodo2 = "SSE_WORK_UNIT";
   String znodo3 = "SSE_JOB_CODES";
   String znodo4 = "SSE_WORK_LOCATION";
   String ztipocarga = "VIS";

// Se parametriza el tamano que se desea para la ventana

   String zventanas = "50";
   int zvuelta = 5;
   String zdireccion = "mss_g1/smco_g1_profs_info_select_employee.jsp";
   String zestado = "01";


// No se modifica en general.

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
   String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;

   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
   String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;

   String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
   String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";
   String ziterator4 = znodo4 + ":" + zsubsesion + "!" + znodo4;

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   String zcomun2= znodo2+ ":" + zsubsesion + "!" + znodo2+ "[&VAR.m4lix]" + ".";
   String zcomun3= znodo3+ ":" + zsubsesion + "!" + znodo3+ "[&VAR.m4lix]" + ".";
   String zcomun4= znodo4+ ":" + zsubsesion + "!" + znodo4+ "[&VAR.m4lix]" + ".";
   
   
   String zSTDNFAMILYNAME1 = zcomun + "STD_N_FAMILY_NAME_1";
   String zSTDNFIRSTNAME = zcomun + "STD_N_FIRST_NAME";
   String zSTDIDPERSON = zcomun + "STD_ID_PERSON";
   String zSTDEMAIL = zcomun + "STD_EMAIL";
   String zSTDNWORKUNIT = zcomun + "STD_N_WORK_UNIT";
   String zSTDIDWORKUNIT = zcomun + "STD_ID_WORK_UNIT";

   String zSTDPHONE = zcomun + "STD_PHONE";
   String zSTDJOB = zcomun + "STD_N_JOB";
   String zSTDIDJOB = zcomun + "STD_ID_JOB";

   String zSTDLOCATION = zcomun + "STD_N_LOCATION";
   String zSTDIDLOCATION = zcomun + "STD_ID_LOCATION";
   
   String zSTDNWORKUNIT2 = zcomun2 + "STD_N_WORK_UNIT";
   String zSTDIDWORKUNIT2 = zcomun2 + "STD_ID_WORK_UNIT";
   String zSCOGBNAME = zcomun + "SCO_GB_NAME";

   String zidjob = zcomun3 + "SCO_ID_JOB";
   String znjob = zcomun3 + "SCO_N_JOB";

   String zidloc = zcomun4 + "SCO_ID_WORK_LOCATION";
   String znloc = zcomun4 + "SCO_N_WORK_LOCATION";

%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<%
try {
  M4Operations m = new M4Operations(request);
  m.setItem(zsubsesion,znodo,"","STD_N_FIRST_NAME_PAR",zfiltro);
  m.setItem(zsubsesion,znodo,"","STD_N_FAMILY_NAME_1_PAR",zfiltro2);
  m.setItem(zsubsesion,znodo,"","STD_ID_WORK_UNIT_PAR",zfiltro3);

  m.setItem(zsubsesion,znodo,"","STD_ID_JOB_PAR",zfiltro4);
  m.setItem(zsubsesion,znodo,"","STD_ID_LOC_PAR",zfiltro5);


  m.setItem(zsubsesion,znodo,"","VENTANA_PAR",zventanas);
  m.setItem(zsubsesion,znodo,"","INICIO_PAR",zinicios);
} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>  
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<%
    int  zcount  = 0;
    int  zcounti  = 0;
    
    int  zcount2  = 0;
    int  zcounti2  = 0;
        
    int  zcount3  = 0;
    int  zcounti3  = 0;

    int  zcount4  = 0;
    int  zcounti4  = 0;

    
    try {
      M4Operations m = new M4Operations(request);
      zcount = m.getCount(znodo,zsubsesion,znodo);
      zcounti = m.getCountInClient(znodo,zsubsesion,znodo);


      zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
      zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);            

      zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
      zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);            

      zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
      zcounti3 = m.getCountInClient(znodo3,zsubsesion,znodo3);            

      zcount4 = m.getCount(znodo4,zsubsesion,znodo4);
      zcounti4 = m.getCountInClient(znodo4,zsubsesion,znodo4);            


    } catch(Exception e) {}
    String  zcountv = String.valueOf(zcounti);
    String  zcountv2= String.valueOf(zcounti2);
    String  zcountv3= String.valueOf(zcounti3);
    String  zcountv4= String.valueOf(zcounti4);
    
%>
<script type="text/javascript">

function filtrar_direct(id_campo,nombre_campo,campo){
var nombre = m4valor("Filtro","Nombre","","get");
var apellido = m4valor("Filtro","Apellido","","get");

if (campo=="WORK_UNIT")
  {
  var WUvalue = id_campo;
  var WUtext = nombre_campo;

  var LOCvalue = m4select(m4objeto("filtro_loc","Filtro"),"value");
  var LOCtext = m4select(m4objeto("filtro_loc","Filtro"),"text");

  var JOBvalue = m4select(m4objeto("filtro_job","Filtro"),"value");
  var JOBtext = m4select(m4objeto("filtro_job","Filtro"),"text");

  }

if (campo=="JOB")
  {
  var JOBvalue = id_campo;
  var JOBtext = nombre_campo;

  var LOCvalue = m4select(m4objeto("filtro_loc","Filtro"),"value");
  var LOCtext = m4select(m4objeto("filtro_loc","Filtro"),"text");

  var WUvalue = m4select(m4objeto("WU","Filtro"),"value");
  var WUtext = m4select(m4objeto("WU","Filtro"),"text");

  }


if (campo=="LOCATION")
  {
  var LOCvalue = id_campo;
  var LOCtext = nombre_campo;

  var JOBvalue = m4select(m4objeto("filtro_job","Filtro"),"value");
  var JOBtext = m4select(m4objeto("filtro_job","Filtro"),"text");

  var WUvalue = m4select(m4objeto("WU","Filtro"),"value");
  var WUtext = m4select(m4objeto("WU","Filtro"),"text");

  }


var parametros = new Array("estado","zfiltro","zfiltro2","zfiltro3","WUt","zfiltro4","JOBt","zfiltro5","LOCt");
var valores = new Array(<%=zestado%>,nombre,apellido,WUvalue,WUtext,JOBvalue,JOBtext,LOCvalue,LOCtext);
m4navegar("mss_g1/smco_g1_profs_info_select_employee.jsp?",parametros,valores);
}


function filtrar(){
var nombre = m4valor("Filtro","Nombre","","get");
var apellido = m4valor("Filtro","Apellido","","get");

var WUvalue = m4select(m4objeto("WU","Filtro"),"value");
var WUtext = m4select(m4objeto("WU","Filtro"),"text");

var JOBvalue = m4select(m4objeto("filtro_job","Filtro"),"value");
var JOBtext = m4select(m4objeto("filtro_job","Filtro"),"text");

var LOCvalue = m4select(m4objeto("filtro_loc","Filtro"),"value");
var LOCtext = m4select(m4objeto("filtro_loc","Filtro"),"text");

var parametros = new Array("estado","zfiltro","zfiltro2","zfiltro3","WUt","zfiltro4","JOBt","zfiltro5","LOCt");
var valores = new Array(<%=zestado%>,nombre,apellido,WUvalue,WUtext,JOBvalue,JOBtext,LOCvalue,LOCtext);
m4navegar("mss_g1/smco_g1_profs_info_select_employee.jsp?",parametros,valores);
}

function borrar_filtro(){
var nombre = "";
var apellido = "";

//nombre = nombre.toUpperCase();
//apellido = apellido.toUpperCase();

var WUvalue = "";
var WUtext = "";

var JOBvalue = "";
var JOBtext = "";

var LOCvalue = "";
var LOCtext = "";

var parametros = new Array("estado","zfiltro","zfiltro2","zfiltro3","WUt","zfiltro4","JOBt","zfiltro5","LOCt");
var valores = new Array(<%=zestado%>,nombre,apellido,WUvalue,WUtext,JOBvalue,JOBtext,LOCvalue,LOCtext);
m4navegar("mss_g1/smco_g1_profs_info_select_employee.jsp?",parametros,valores);
}

function load_cv(empleado){
  var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp?estado=11&person=" + empleado;
  window.open(dir,'Vis','width=800;height=600,resizable,scrollbars');
}

</script>

<form id="Filtro" name="Filtro">

<table class="tablaestados" cellspacing="0" width="100%">
<tr><td class="tablaestadosceldatitulo" colspan="5">&nbsp;<%=Mss_cr.getProperty("msscr.Tabla95")%></td></tr>


</tr>
<td class="fuentevalor" colspan="5">&nbsp;</td>
<tr>

<tr>
<%
  if ((zfiltro=="ALL")){
     zfiltro = "";
  }
  if ((zfiltro2=="ALL")){
     zfiltro2 = "";
  } 
  if ((zfiltro3=="ALL")){
     zfiltro3 = "";
  } 
%>
  <td class="fuentevalor" colspan="2" nowrap>&nbsp;<%=Mss_cr.getProperty("msscr.Titulo5-5")%>&nbsp;<input title="<%=Mss_cr.getProperty("msscr.Tabla96")%>" type="text" id="Nombre" class="fuenteformulario" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zfiltro)%>" />
  &nbsp;&nbsp;<%=Mss_cr.getProperty("msscr.Tabla97")%>&nbsp;<input title="<%=Mss_cr.getProperty("msscr.Tabla98")%>" type="text" id="Apellido" class="fuenteformulario" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zfiltro2)%>" />
  &nbsp;&nbsp;</td>

</tr>

<tr><td class="fuentevalor">&nbsp;&nbsp;</td></tr>

<tr>
<%
  if ((zfiltro4=="ALL")){
     zfiltro4 = "";
  } 
  if ((zfiltro5=="ALL")){
     zfiltro5 = "";
  } 
%>
  <td class="fuentevalor" colspan="2" nowrap>

  &nbsp;&nbsp;<%=Mss_cr.getProperty("msscr.Tabla6")%>&nbsp;
  <select id="WU" class="fuenteformulario150" name="WU" title="<%=Mss_cr.getProperty("msscr.Tabla99")%>" >
  <option value="<%=zfiltro3%>"><%=WUn%></option>
  <option value="ALL"><%=Mss_cr.getProperty("msscr.Tabla100")%></option> 
  <m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
  <option value="<m4:item m4name="<%=zSTDIDWORKUNIT2%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNWORKUNIT2%>" htmlsafe="true"/></option>
  </m4:loop>
  </select>


  &nbsp;<%=Mss_cr.getProperty("msscr.ID9-3")%>&nbsp;
  <select id="filtro_job" class="fuenteformulario150" name="filtro_job" title="<%=Mss_cr.getProperty("msscr.Tabla121")%>" >
  <option value="<%=zfiltro4%>"><%=JOBn%></option>
  <option value="ALL"><%=Mss_cr.getProperty("msscr.Tabla100")%></option> 
  <m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
  <option value="<m4:item m4name="<%=zidjob%>" htmlsafe="true"/>"><m4:item m4name="<%=znjob%>" htmlsafe="true"/></option>
  </m4:loop>
  </select>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<%=Mss_cr.getProperty("msscr.Tabla110")%>&nbsp;
  <select id="filtro_loc" class="fuenteformulario150" name="filtro_loc" title="<%=Mss_cr.getProperty("msscr.Tabla122")%>" >
  <option value="<%=zfiltro5%>"><%=LOCn%></option>
  <option value="ALL"><%=Mss_cr.getProperty("msscr.Tabla100")%></option> 
  <m4:loop from="0" to="<%=new Integer(new Integer(zcountv4).intValue()-1).toString()%>">
  <option value="<m4:item m4name="<%=zidloc%>" htmlsafe="true"/>"><m4:item m4name="<%=znloc%>" htmlsafe="true"/></option>
  </m4:loop>
  </select>

  &nbsp;&nbsp;</td>

</tr>

<tr align="center">
  <td class="fuentevalor" colspan="2">&nbsp;&nbsp;<a href="javascript:filtrar();" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>"><img alt="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>" src="/iconos/js_filtrar.gif" height="36" width="36" style="cursor:hand" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>

  &nbsp;&nbsp;<a href="javascript:borrar_filtro();" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-3")%>"><img alt="<%=Mss_cr.getProperty("msscr.Confirm_ad10-3")%>" src="/iconos/js_deshacer_filtro.gif" height="36" width="36" style="cursor:hand" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>

  </td>
</tr>
</table>
</form>
<% 
if (zcount > 0) {
  String zregistroinicials = String.valueOf(zregistroinicial);
  String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
  String zposicions = "0";
  int zcontrol = 0;
  int zposicion =0;
%>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
  <td>&nbsp;<%=Mss_cr.getProperty("msscr.Titulo5-5")%></td>
  <td>&nbsp;<%=Mss_cr.getProperty("msscr.Tabla6")%></td>
  <td>&nbsp;<%=Mss_cr.getProperty("msscr.ID9-3")%></td>
  <td>&nbsp;<%=Mss_cr.getProperty("msscr.Tabla110")%></td>
  <td>&nbsp;<%=Mss_cr.getProperty("msscr.Tabla111")%></td>
  <td>&nbsp;<%=Mss_cr.getProperty("msscr.Tabla101")%></td>
  <td colspan="2">&nbsp;<%=Mss_cr.getProperty("msscr.Tabla102")%></td>
</tr>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">

<m4:item m4varname="is_key_employee" item="STD_KEY_EMPLOYEE" htmlsafe="true" outputdef="<%=znodo%>"/>

<%zposicions = m4lix;
  zposicion = Integer.valueOf(zposicions).intValue();
  zcontrol = zposicion%2;
if (zcontrol==0){%>
<tr class="fuentevalor">
  <td>&nbsp;
  <m4:item m4name="<%=zSTDIDPERSON%>" htmlsafe="true" m4varname="sIdHrEnc"/>
  <%sIdHrEnc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdHrEnc);%>
  <a class="enlacefuncional" title="<%=profData%>" href="javascript:load_cv('<%=sIdHrEnc%>')"><m4:item m4name="<%=zSCOGBNAME%>" htmlsafe="true"/></a></td>

  <td>&nbsp;<a href="javascript:filtrar_direct('<m4:item m4name="<%=zSTDIDWORKUNIT%>" htmlsafe="true"/>','<m4:item m4name="<%=zSTDNWORKUNIT%>" htmlsafe="true"/>','WORK_UNIT');" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>"><m4:item m4name="<%=zSTDNWORKUNIT%>" htmlsafe="true"/></a></td>

  <td>&nbsp;<a href="javascript:filtrar_direct('<m4:item m4name="<%=zSTDIDJOB%>" htmlsafe="true"/>','<m4:item m4name="<%=zSTDJOB%>" htmlsafe="true"/>','JOB');" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>"><m4:item m4name="<%=zSTDJOB%>" htmlsafe="true"/></a></td>


  <td>&nbsp;<a href="javascript:filtrar_direct('<m4:item m4name="<%=zSTDIDLOCATION%>" htmlsafe="true"/>','<m4:item m4name="<%=zSTDLOCATION%>" htmlsafe="true"/>','LOCATION');" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>"><m4:item m4name="<%=zSTDLOCATION%>" htmlsafe="true"/></a></td>



<% if(is_key_employee.equals("1")) { %>

  <td class="textorojo">&nbsp;<b><%=Mss_cr.getProperty("msscr.Tabla112")%></b></td>
<%}else{%>

  <td>&nbsp;<%=Mss_cr.getProperty("msscr.Tabla113")%></td>

<%}%>

  <td>&nbsp;<m4:item m4name="<%=zSTDPHONE%>" htmlsafe="true"/></td>
  <td>&nbsp;<m4:item m4name="<%=zSTDEMAIL%>" htmlsafe="true"/></td>
  <td>&nbsp;</td>
</tr>

<%}else{%>
<tr class="fuentevalor2">
  <td>&nbsp;
    <m4:item m4name="<%=zSTDIDPERSON%>" htmlsafe="true" m4varname="sIdHrEnc"/>
    <%sIdHrEnc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdHrEnc);%>
    <a class="enlacefuncional" title="<%=profData%>" href="javascript:load_cv('<%=sIdHrEnc%>')"><m4:item m4name="<%=zSCOGBNAME%>" htmlsafe="true"/></a></td>

  <td>&nbsp;<a href="javascript:filtrar_direct('<m4:item m4name="<%=zSTDIDWORKUNIT%>" htmlsafe="true"/>','<m4:item m4name="<%=zSTDNWORKUNIT%>" htmlsafe="true"/>','WORK_UNIT');" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>"><m4:item m4name="<%=zSTDNWORKUNIT%>" htmlsafe="true"/></a></td>

  <td>&nbsp;<a href="javascript:filtrar_direct('<m4:item m4name="<%=zSTDIDJOB%>" htmlsafe="true"/>','<m4:item m4name="<%=zSTDJOB%>" htmlsafe="true"/>','JOB');" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>"><m4:item m4name="<%=zSTDJOB%>" htmlsafe="true"/></a></td>


  <td>&nbsp;<a href="javascript:filtrar_direct('<m4:item m4name="<%=zSTDIDLOCATION%>" htmlsafe="true"/>','<m4:item m4name="<%=zSTDLOCATION%>" htmlsafe="true"/>','LOCATION');" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>"><m4:item m4name="<%=zSTDLOCATION%>" htmlsafe="true"/></a></td>


<% if(is_key_employee.equals("1")) { %>

  <td class="textorojo">&nbsp;<b><%=Mss_cr.getProperty("msscr.Tabla112")%></b></td>
<%}else{%>

  <td>&nbsp;<%=Mss_cr.getProperty("msscr.Tabla113")%></td>

<%}%>

  <td>&nbsp;<m4:item m4name="<%=zSTDPHONE%>" htmlsafe="true"/></td>
  <td>&nbsp;<m4:item m4name="<%=zSTDEMAIL%>" htmlsafe="true"/></td>
  <td>&nbsp;</td>
</tr>
<%}%>
</m4:loop>

</table>
<table class = "tablanavegacion" border="1" width="100%" cellspacing="0">
<tr>
<%
  int zintervalo = zcount/zventana;
  int zresto = zcount%zventana;
  int zcontador = 0;
  int zsalto = 0;
  if (zresto > 0) {zintervalo = zintervalo + 1;}
    // Asi como la iteracion de construccion del contenido de la tabla de intervalos.
    // Dentro de la tabla, hay que hacer referencia a la propia pagina
    // anadiendo obligatoriamente el parametro zinicios!!!

  for (zcontador=0; zcontador < zintervalo; zcontador++) {
    String  ziniciointervalo = String.valueOf(1 + zcontador*zventana);
    int zfinintervalo2 = zcontador*zventana + zventana;
    String zfinintervalo = String.valueOf(zcontador*zventana + zventana);
      if (zfinintervalo2 > zcount) {
      zfinintervalo = String.valueOf(zcontador*zventana + zresto);
    }
          
    // Cada n vueltas saltamos de fila:
    if(zsalto == zvuelta){
%>
</tr><tr>
<%
      zsalto = 0;
    }
    if (zinicios.equals(ziniciointervalo) == true){
%>
<td class="fuentebarraregistrosanulado"><%=ziniciointervalo%>&nbsp;-&nbsp;<%=zfinintervalo%></td>
<%      
    }
    else{
%>
<td class="fuentebarraregistros"><a href="javascript:javascript:var parametros = new Array('zinicios','estado','zfiltro','zfiltro2','zfiltro3','WUt','zfiltro4','JOBt','zfiltro5','LOCt');var valores = new Array('<%=ziniciointervalo%>','<%=zestado%>',m4valor('Filtro','Nombre','','get'),m4valor('Filtro','Apellido','','get'),m4select(m4objeto('WU','Filtro'),'value'),m4select(m4objeto('WU','Filtro'),'text'),m4select(m4objeto('filtro_job','Filtro'),'value'),m4select(m4objeto('filtro_job','Filtro'),'text'),m4select(m4objeto('filtro_loc','Filtro'),'value'),m4select(m4objeto('filtro_loc','Filtro'),'text'));m4navegar('<%=zdireccion%>',parametros,valores);"  title="Ver otros datos"><%=ziniciointervalo%>&nbsp;-&nbsp;<%=zfinintervalo%></a></td>

<%
    }
    zsalto = zsalto + 1;
  }
%>
</tr>
</table> 
<%}else{%>
<div class="fuentenodatos"><%=Mss_cr.getProperty("msscr.Tabla107")%></div>
<%}%>
</body>
<m4:endpage/>