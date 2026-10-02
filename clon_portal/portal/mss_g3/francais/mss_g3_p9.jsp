<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<title>Comp&eacute;tences des emplois</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>  
<%
//--------------------------------------------------------  
String empleado = (String)request.getAttribute("empleado");
String periodo = (String)request.getAttribute("periodo");
String role = (String)request.getAttribute("role");
String zVis = (String)request.getAttribute("zVis");
String nombre_empleado = (String)request.getAttribute("nombre_empleado");

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
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado = zobjtabla.m4paramvalor("estado");
String zinicios =zobjtabla.m4paramvalor("zinicios");
String zfiltro = zobjtabla.m4paramvalor("zfiltro");
String znombre = zobjtabla.m4paramvalor("znombre");
String zfiltroemp = zobjtabla.m4paramvalor("zfiltroemp");
String znombreemp = zobjtabla.m4paramvalor("znombreemp");
String zfiltrocono = zobjtabla.m4paramvalor("zfiltrocono");
String znombrecono =zobjtabla.m4paramvalor("znombrecono");
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((zfiltro==null)|| (""==zfiltro)){zfiltro = "ALL";}
if ((znombre==null)|| (""==znombre)){znombre = "Todos";}

if (zVis.equals("1")){
  if ((zfiltroemp==null)|| (""==zfiltroemp)){
    zfiltroemp = "ALL";
  } else {
    zfiltroemp = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zfiltroemp);
  }
}else{
  zfiltroemp = zSMCO_ID_HR;
}

if ((znombreemp==null)|| (""==znombreemp)){znombreemp = "Todos";}
if ((zfiltrocono==null)|| (""==zfiltrocono)){zfiltrocono = "ALL";} 
if ((znombrecono==null)|| (""==znombrecono)){znombrecono = "Todos";}
%>
<script type="text/javascript">
function filtrar(num){
var valor =m4select("filtro","prueba","value");
var nombre =m4select("filtro","prueba","text");
var valoremp =m4select("filtroemp","prueba","value");
var nombreemp =m4select("filtroemp","prueba","text");
var valorcono =m4select("filtrocono","prueba","value");
var nombrecono =m4select("filtrocono","prueba","text");
m4valor("oculto","zfiltro",valor,"set");
m4valor("oculto","znombre",nombre,"set");
m4valor("oculto","zfiltroemp",valoremp,"set");
m4valor("oculto","znombreemp",nombreemp,"set");
if (num=="2"){
valorcono="ALL";
nombrecono="Todos";
}
m4valor("oculto","zfiltrocono",valorcono,"set");
m4valor("oculto","znombrecono",nombrecono,"set");
m4submit("oculto");
}
function formacion (extd,lev){
m4valor("oculto2","zextd",extd,"set");
m4valor("oculto2","zlevel",lev,"set");
m4submit("oculto2");}
</script>
</head>
<body>
<% if (zVis.equals("1")){ %>
<%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%}%>
<%

   String zsubsesion = "SSM_R_JOB_COMP";
   String zmeta4object = "SSM_R_JOB_COMP";
   String znodo = "SMCO_DATA_FINAL";
   String znodolista = "SSM_X_GROUP";
   String znodoempleados = "SSM_EMPLEADOS";
   String znodo2 = "SSM_KNOW_MAP";
   
   String ztipocarga = " ";
      String zventanas = "";
   if (zVis.equals("1")){
     zventanas = "30";
   }else{
       zventanas = "3000";
   }

   int zvuelta = 5;
   String zdireccion = "/mss_g3/mss_g3_p9.jsp";
   String zestado="31";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   
   String zoutputdef2= zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   String zSCOIDEXTDKN2 = zcomun2+ "SCO_ID_EXTD_KN";
   String zSCONMEXTDKN2 = zcomun2+ "SCO_NM_EXTD_KN";
   
   String zoutputdefempleados = zsubsesion + "!" + znodoempleados + "[*]";
   String zmoveempleados = znodoempleados + ":" + znodoempleados + "[FIRST]";
   String zcomunemp = znodoempleados + ":" + zsubsesion + "!" + znodoempleados + "[&VAR.m4lix]" + ".";
   String zSTDIDPERSONemp = zcomunemp + "STD_ID_PERSON";
   String zSTDNFAMILYNAME1emp = zcomunemp + "STD_N_FAMILY_NAME_1";
   String zSTDNFIRSTNAMEemp = zcomunemp + "STD_N_FIRST_NAME";
   String zSCOGBNAMEemp = zcomunemp + "SCO_GB_NAME";   
   String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";
   String zmovelista = znodolista + ":" + znodolista + "[FIRST]";
   String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&VAR.m4lix]" + ".";
   String zSCOIDGROUP = zcomunlista + "SCO_ID_GROUP";
   String zSCOGROUPNAME = zcomunlista + "SCO_GROUP_NAME";
   
   String znodoprincipal = "SSM_PRINCIPAL";
   String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";
   String zmetodocargaDossier = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".SMCO_LOAD_FROM_EMP_DOSSIER";
   String zoutputdefg= zsubsesion + "!" + znodo + "[*]";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request);
      m.setItem(zsubsesion,znodoempleados,"","FILTRO_GRUPO",zfiltro);


  } catch(Exception e) {}


if (zVis.equals("0")){
%>
  <m4:exec m4method="<%=zmetodocargaDossier%>"><m4:param name="ARG_EMP_TO_LOAD" value="<%=zSMCO_ID_HR%>"/></m4:exec>
<%}else{%>
  <m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<%}%>
<m4:outputdef m4alias="prueba" ><m4:param name="m4name0" value="<%=zoutputdefg%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>" ><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodolista%>"><m4:param name="m4name0" value="<%=zoutputdeflista%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodoempleados%>" ><m4:param name="m4name0" value="<%=zoutputdefempleados%>"/></m4:outputdef>
<m4:removefilter m4name="SSM_R_JOB_COMP!SMCO_DATA_FINAL.Filter1"/>
<%
String zFilterperson="";
String zAddPerson="";
if (zfiltroemp.equals("ALL")){zAddPerson="";}else{zAddPerson="STD_ID_HR=\""+zfiltroemp+"\"";}
if (zfiltro.equals("ALL")){ 
}else{
  if (zAddPerson.equals("")){
    zAddPerson="SCO_ID_GROUP=\""+zfiltro+"\"";
  }else{
    zAddPerson=zAddPerson+" AND SCO_ID_GROUP=\""+zfiltro+"\"";
  }
}
if (zfiltrocono.equals("ALL")){ 

}else{
  if (zAddPerson.equals("")){
    zAddPerson="SCO_ID_EXTD_KN=\""+zfiltrocono+"\"";
  }else{
    zAddPerson=zAddPerson+" AND SCO_ID_EXTD_KN=\""+zfiltrocono+"\"";
  }
}
if (zAddPerson.equals("")){
zFilterperson="";
%>

<%
}else{
zFilterperson="If "+zAddPerson +"then return(1)";
%>
<m4:filter m4name="SSM_R_JOB_COMP!SMCO_DATA_FINAL.Filter1"  m4filter="<%=zFilterperson%>" />
<%}%>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovelista%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveempleados%>"/></m4:move>
<%
  int  zcounti  = 0;  
  int  zcount  = 0;
  int  zcountiemp  = 0; 
  int  zcountemp  = 0;
  int  zcountilista  = 0; 
  int  zcountlista  = 0;
  int  zcounti2  = 0; 
  int  zcount2  = 0;
  
  try {
    M4Operations m = new M4Operations(request);
    if (zAddPerson.equals("")){
    zcount = m.getCount(znodo,zsubsesion,znodo);
}else{
    zcount = m.getCountInClient(znodo,zsubsesion,znodo);
    }
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zcountemp = m.getCount(znodoempleados,zsubsesion,znodoempleados);
    zcountiemp = m.getCountInClient(znodoempleados,zsubsesion,znodoempleados);
    zcountlista = m.getCount(znodolista,zsubsesion,znodolista);
    zcountilista = m.getCountInClient(znodolista,zsubsesion,znodolista);
    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
    zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);
    
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
  String  zcountvemp = String.valueOf(zcountiemp);
  String  zcountvlista = String.valueOf(zcountilista);
  String  zcountv2 = String.valueOf(zcounti2);
%>
<%
String sFiltroNameL=Tran.getProperty("Label.All");

%>
<% if (zVis.equals("1")){ %>
<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2">Comp&eacute;tences des emplois</td></tr>
<tr>
  <td><img alt="Comp&eacute;tences d'un emploi" title="Comp&eacute;tences des emploi"src="/iconos/noname_competencias_puesto_82_100.gif" width="82" height="100" /></td>
  <td>
    <div class="descripcionfuncional">Consultez les comp&eacute;tences par collaborateur et par emploi.</div>
    <ul class="listaenlace">
    <li><a class="enlacefuncional" tabindex="1" title="Atteindre Emplois" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?.jsp?estado=3">Emplois</a></li>
    </ul>
  </td>
</tr>
</table>
<%}%>
<% if (zVis.equals("1")){ %>
<form name="prueba" id="prueba" action=" ">
<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo" colspan="4">Filtre</td></tr>
<tr>
    <td class="fuentecampofiltro" colspan="4">&nbsp;Empleado:&nbsp;
      <%zfiltroemp = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zfiltroemp);%>
      <select id="filtroemp" class="fuenteapartados"  onchange="filtrar(1)"title="Escoge un empleado">
      <option value="ALL"><%=sFiltroNameL%></option>
      <m4:loop from="0" to="<%=new Integer(new Integer(zcountvemp).intValue()-1).toString()%>">
        <m4:item m4name="<%=zSTDIDPERSONemp%>" htmlsafe = "true" m4varname="sIdEmp"/>
        <%sIdEmp = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdEmp);%>
        <option value="<%=sIdEmp%>"><m4:item m4name="<%=zSCOGBNAMEemp%>" htmlsafe="true"/></option>
      </m4:loop>
      </select>
    </td>
    <script type="text/javascript" language="Javascript1.5">
      if ('<%=zfiltroemp%>'!= "ALL"){
        m4searchoptioness('prueba','filtroemp','<%=zfiltroemp%>');
      }
    </script> 
</tr> 
<tr>
  <td class="fuentecampofiltro" colspan="2">&nbsp;Groupe&nbsp;:&nbsp;
  <select id="filtro" class="fuenteapartados" onchange="filtrar(2)" title="S&eacute;lectionnez un groupe de comp&eacute;tences">  

    <option value="ALL"><%=sFiltroNameL%></option>
  <m4:loop from="0" to="<%=new Integer(new Integer(zcountvlista).intValue()-1).toString()%>">
  <option value="<m4:item m4name="<%=zSCOIDGROUP%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCOGROUPNAME%>" htmlsafe="true"/></option>
  </m4:loop>
  </select>
  </td>
    <script type="text/javascript" language="Javascript1.5">
         if ('<%=zfiltroemp%>'!= "ALL"){
           m4searchoptioness('prueba','filtro','<%=zfiltro%>');
         }
         </script>
  <td class="fuentecampofiltro" colspan="2">&nbsp;Comp&eacute;tence&nbsp;:&nbsp;
  <select id="filtrocono" class="fuenteapartados" onchange="filtrar(3)"title="S&eacute;lectionnez une comp&eacute;tence"> 

    <option value="ALL"><%=sFiltroNameL%></option>
  <m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
  <option value="<m4:item m4name="<%=zSCOIDEXTDKN2%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCONMEXTDKN2%>" htmlsafe="true"/></option>
  </m4:loop>
  </select>
  </td>
    <script type="text/javascript" language="Javascript1.5">
         if ('<%=zfiltrocono%>'!= "ALL"){
           m4searchoptioness('prueba','filtrocono','<%=zfiltrocono%>');
         }
         </script>
</tr>   
</table>
</form>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p9.jsp?estado=31" method="post" name="oculto" id="oculto">
<input type="hidden" id="zfiltro" name="zfiltro" value="<%=zfiltro%>" />
<input type="hidden" id="znombre" name="znombre"  value="<%=znombre%>" />
<input type="hidden" id="zfiltroemp" name="zfiltroemp"  value="<%=zfiltroemp%>" />
<input type="hidden" id="znombreemp" name="znombreemp"  value="<%=znombreemp%>" />
<input type="hidden" id="zfiltrocono" name="zfiltrocono"  value="<%=zfiltrocono%>" />
<input type="hidden" id="znombrecono" name="znombrecono"  value="<%=znombrecono%>" />
<input type="hidden" id="zinicios" name="zinicios" value="" />
</form>
<%}%>

<% if (zVis.equals("1")){ %>
  <table width="100%" cellspacing="0">
<%}else{%>
  <table class="barraregistros" width="100%" cellspacing="0">
<%}%>

<% if (zcounti > 0) { %>  
<table width="100%" cellspacing="0">
<tr>
<% if (zVis.equals("1")){ %>
  <td class="tablaestadosceldatitulo">&nbsp;Collaborateur</td>
<%}%>
  <td class="tablaestadosceldatitulo" colspan="2">&nbsp;Comp&eacute;tence </td>
  <td class="tablaestadosceldatitulo">&nbsp;Actuelle</td>
  <td class="tablaestadosceldatitulo">&nbsp;Emploi</td>
  <td class="tablaestadosceldatitulo">&nbsp;Prochain emploi</td>
</tr> 
<%  
  try {
    M4Operations t = new M4Operations(request);
    int i = 0;
    String zSTDNFAMILYNAME1="";
    String zSCONMEXTDKN="";
    String zSCONMLEVEL="";
    String zSCONMLEVELJOB ="";
    String zSTDNFIRSTNAME="";
    String zSCONMLEVELJOBNEXT="";
    String znombreant="";
    String znombrenuevo="";
    String zextd = "";
    String zleveljob = "";    
    String zleveljobnext = "";
    String zSCOGBNAME="";   
    for (i =zregistroinicial; i < zregistrofinal+1; i++){
        String id = String.valueOf(i);
        t.moveData(znodo,zmeta4object,znodo,id);
        zSTDNFAMILYNAME1 = t.getItem(znodo,zmeta4object,znodo,"","STD_N_FAMILY_NAME_1"); 
        zSTDNFIRSTNAME = t.getItem(znodo,zmeta4object,znodo,"","STD_N_FIRST_NAME");
        zSCONMEXTDKN = t.getItem(znodo,zmeta4object,znodo,"","SCO_NM_EXTD_KN"); 
        zSCONMLEVEL= t.getItem(znodo,zmeta4object,znodo,"","SCO_NM_LEVEL"); 
        zSCONMLEVELJOB= t.getItem(znodo,zmeta4object,znodo,"","SCO_NM_LEVEL_JOB");
        zSCONMLEVELJOBNEXT= t.getItem(znodo,zmeta4object,znodo,"","SCO_NM_LEVEL_JOB_NEXT");
        zextd= t.getItem(znodo,zmeta4object,znodo,"","SCO_ID_EXTD_KN");
        zleveljob= t.getItem(znodo,zmeta4object,znodo,"","LEVEL_JOB");
        zleveljobnext= t.getItem(znodo,zmeta4object,znodo,"","LEVEL_JOB_NEXT"); 
        zSCOGBNAME = t.getItem(znodo,zmeta4object,znodo,"","SCO_GB_NAME");              
        znombrenuevo=zSCOGBNAME;
        if ((znombrenuevo==znombreant)|| znombrenuevo.equals(znombreant)){
        znombrenuevo="";  
        }else{
        znombreant=znombrenuevo;  
        
        }
        if ((zSCONMLEVELJOBNEXT==null)|| zSCONMLEVELJOBNEXT.equals("")){
          zSCONMLEVELJOBNEXT="Non &eacute;valu&eacute;";
        }
        if ((zSCONMLEVELJOB==null)|| zSCONMLEVELJOB.equals("")){
          zSCONMLEVELJOB="Non &eacute;valu&eacute;";
        }
            if ((zSCONMLEVEL==null)|| zSCONMLEVEL.equals("")){
          zSCONMLEVEL="Non &eacute;valu&eacute;";
        }
%>  
<tr>
<% if (zVis.equals("1")){ %>
  <td class="fuentevalor">&nbsp;<%=znombrenuevo%></td>
<%}%>
  <td class="fuentevalor" colspan="2">&nbsp;<%=zSCONMEXTDKN%></td>
  <td class="fuentevalor">&nbsp;<%=zSCONMLEVEL%></td>
<%if(zSCONMLEVELJOB=="Non &eacute;valu&eacute;"){%><td class="fuentevalor">&nbsp;<%=zSCONMLEVELJOB%></td>
<%}else{%><td class="fuentevalor"><a href="javascript:formacion('<%=zextd%>','<%=zleveljob%>');" title="Formations disponibles"><img alt="Formations disponibles" title="Formations disponibles"src="/iconos/ic_next_edit_16_16_0.gif" /></a>&nbsp;<%=zSCONMLEVELJOB%></td><%}%>

<%if(zSCONMLEVELJOBNEXT=="Non &eacute;valu&eacute;"){%><td class="fuentevalor">&nbsp;<%=zSCONMLEVELJOBNEXT%></td>
<%}else{%><td class="fuentevalor"><a href="javascript:formacion('<%=zextd%>','<%=zleveljobnext%>');" title="Formations disponibles"><img alt="Formations disponibles" title="Formations disponibles"src="/iconos/ic_next_edit_16_16_0.gif" /></a>&nbsp;<%=zSCONMLEVELJOBNEXT%></td><%}%>
</tr>
<%
    }
  } catch(Exception e) {}
%>   
<%}else{%>
    <tr><td colspan="10" class="tablaestadosceldatitulo">Aucune donn&eacute;e n'est disponible actuellement.</td></tr>
<%}%>

</table>

<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc2.jsp?estado=31" method="post" name="oculto2" id="oculto2">
  <input type="hidden" id="zextd" name="zextd" value="" />
  <input type="hidden" id="zlevel" name="zlevel"value="" />
  <% if (zVis.equals("0")){%>
    <input type="hidden" id="empleado" name="empleado" value="<%=empleado%>"/>
    <input type="hidden" id="periodo" name="periodo" value="<%=periodo%>"/>
    <input type="hidden" id="nombre_empleado" name="nombre_empleado" value="<%=nombre_empleado%>"/>
    <input type="hidden" id="zVis" name="zVis" value="<%=zVis%>"/>
  <%}%>

</form> 

<% if (zVis.equals("1")){ %>
  <%@include file="../../sse_generico/francais/generico_ventanas_post.jsp"%>
  <%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>
<br /><br />
<%}%>
<m4:endpage/>
</body>
</html>


