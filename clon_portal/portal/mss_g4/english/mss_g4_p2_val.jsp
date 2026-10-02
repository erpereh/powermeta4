<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
<%
// translatable strings
String titulo = "Absences";
String tfuncional = "Absences";
String dfuncional = "Yearly summary of your employees' absences. You can select the year that you want to view.";
String ttabla = "Year";
String ttabla2 = "Employee";
String ttabla3 = "Total";
String etiqueta = "View Details";
String etiqueta2 = "There are no absences registered for your employees during the selected year.";
%>
  <title><%=titulo%></title>
  <link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
  <script type="text/javascript" src="/libreria/funciones_sse.js"></script>
  <%@ include file="../../mss_generico/english/menu_mss.jsp" %>
  <%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
  <%
    Generatablaparametros zobjtabla = new Generatablaparametros(request);
    String estado = (String) zobjtabla.m4paramvalor("estado");
    String zparamyear = (String) zobjtabla.m4paramvalor("zparamyear");
    if ((estado==null)||(estado.equals(""))){estado="41";}
    if ((zparamyear==null)||(zparamyear.equals(""))){
     Calendar ahora = Calendar.getInstance();
       int ano = ahora.get(ahora.YEAR);
       String strano = String.valueOf(ano);
       zparamyear = strano;
    }
  %>
<script type="text/javascript">
    
  function asignar(gb){
  m4valor("detalle","zempleado",gb,"set");
  }
  function filtrar(){
    var valor =m4select("filtroanios","anios","value");
    m4valor("oculto","zparamyear",valor,"set");
    m4submit("oculto");
  }
  function navegaremp(per){
    m4valor("detalle","zperson",per,"set");
    m4valor("detalle","zincidence","0","set");
    m4submit("detalle");
  }
  function navegartipo(per,inc,nmi){
    m4valor("detalle","zperson",per,"set");
    m4valor("detalle","zincidence",inc,"set");
    m4valor("detalle","znmincidence",nmi,"set");
    m4submit("detalle");
  }
</script> 
</head>
<body>
  <%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
  <%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%
   String zsubsesion = "SSM_ABSENCES_DYN";
   String zmeta4object = "SSM_ABSENCES_DYN";
   
   String znodo = "SSM_ABSENCES_CROSS";
   String znodoemp = "SSM_EMPLEADOS";
   String znodoanios = "M4T_YEARS_LIST";
   String znodooverview = "SSM_ABSENCE_OVERVIEW";
   String znodoincid = "M4T_INCIDENCES";
   
   String zmetodocarga = zsubsesion + "!SSM_PRINCIPAL.CARGA";
   String ztipocarga = "OVERVIEW";

   String zraiz = zsubsesion + "!" + znodo + ".";
   String zmove = znodo + ":" + znodo + "[FIRST]";   
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   
   String zmoveanios = znodoanios + ":" + znodoanios + "[FIRST]";   
   String zoutputdefanios = zsubsesion + "!" + znodoanios + "[*]";
   String zcomunanios = znodoanios + ":" + zsubsesion + "!" + znodoanios + "[&VAR.m4lix]" + ".";
   
   String zmoveincid = znodoincid + ":" + znodoincid + "[FIRST]";   
   String zoutputdefincid = zsubsesion + "!" + znodoincid + "[*]";
   String zcomunincid = znodoincid + ":" + zsubsesion + "!" + znodoincid + "[&VAR.m4lix]" + ".";

   String zmoveemp = znodoemp + ":" + znodoemp + "[FIRST]";   
   String zoutputdefemp = zsubsesion + "!" + znodoemp + "[*]";
   
   String zYEAR = zcomunanios +"YEAR";
   String zSCOIDINCIDENCE = zcomunincid + "SCO_ID_INCIDENCE";
   String zSCONMINCIDENCE = zcomunincid + "SCO_NM_INCIDENCE";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<% try {
      M4Operations m = new M4Operations(request);
      m.setItem(zsubsesion,znodooverview,"","YEAR",zparamyear);       
    } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec> 
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodoanios%>"><m4:param name="m4name0" value="<%=zoutputdefanios%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodoincid%>"><m4:param name="m4name0" value="<%=zoutputdefincid%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodoemp%>"><m4:param name="m4name0" value="<%=zoutputdefemp%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveanios%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveincid%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveemp%>"/></m4:move>
<%
    int  zcount  = 0;
    int  zcounti  = 0;  
    int  zcountempi  = 0; 
    int  zcountincidi  = 0; 
    int  zcountaniosi  = 0; 
    try {
      M4Operations m = new M4Operations(request);
      zcount = m.getCount(znodo,zsubsesion,znodo);
      zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
      zcountempi = m.getCountInClient(znodoemp,zsubsesion,znodoemp);
      zcountincidi = m.getCountInClient(znodoincid,zsubsesion,znodoincid);
      zcountaniosi = m.getCountInClient(znodoanios,zsubsesion,znodoanios);
    } catch(Exception e) {}
    String  zcountv = String.valueOf(zcounti);
    String  zcountempv = String.valueOf(zcountempi);
    String  zcountincidv = String.valueOf(zcountincidi);
    String  zcountaniosv = String.valueOf(zcountaniosi);
%>
<form action="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_val.jsp?estado=41" method="post" name="oculto" id="oculto">
  <input type="hidden" id="zparamyear" name="zparamyear" value="" />
</form>
<form action="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_detail.jsp?estado=41" method="post" name="detalle" id="detalle">
  <input type="hidden" id="zparamyear" name="zparamyear" value="<%=zparamyear%>" />
  <input type="hidden" id="zperson" name="zperson" value="" />
  <input type="hidden" id="zincidence" name="zincidence" value="" />
  <input type="hidden" id="znmincidence" name="znmincidence" value="" />
  <input type="hidden" id="zempleado" name="zempleado" value="" />
</form>


<table border="0" width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2"><%=tfuncional%></td></tr>
<tr>
  <td valign="top"><img src="/iconos/noname_ausencias_dch_52_100.gif" width="100" height="100" alt="Validate Holidays" border="0"></td>
  <td><div class="descripcionfuncional"><%=dfuncional%>
<br><br>

  <%
    String zposicions = "0";
    int zposicion =0;
  %>
  <m4:loop from="0" to="<%=new Integer(new Integer(zcountincidv).intValue()-1).toString()%>">
  <%
    zposicions = m4lix;
    zposicion = Integer.valueOf(zposicions).intValue();
  %>
  <%=zposicion%>-<m4:item m4name="<%=zSCONMINCIDENCE%>" htmlsafe="true"/><br>
  </m4:loop>


  </div></td>
</tr>
</table>



<br>
<table class = "tablaestados" width="100%" cellspacing="0">
  <form name="anios" id="anios" action="">
  <tr> 
    <td class = "tablaestadosceldatitulo">&nbsp;<%=ttabla%>&nbsp;</td>
  </tr>
  <tr>
    <td class="fuentecampofiltro" colspan="<%=2+zcountincidi%>">&nbsp;<%=ttabla%>&nbsp;
    <select id="filtroanios" class="fuenteapartados" onchange="filtrar()" >

    <m4:loop from="0" to="<%=new Integer(new Integer(zcountaniosv).intValue()-1).toString()%>">
      <option value="<m4:item m4name="<%=zYEAR%>" htmlsafe="true"/>">&nbsp;<m4:item m4name="<%=zYEAR%>" htmlsafe="true"/></option>
    </m4:loop>
    </select>
    </td>
    <script type="text/javascript" language="Javascript1.5">
        m4searchoptioness('anios','filtroanios','<%=zparamyear%>');
   </script>
  </tr>
  </form>
</table>

<% if (zcounti > 0) { %>  
<table class = "tablaestados" width="100%" cellspacing="0">
  <tr class = "tablaestadosceldatitulo"><td ><%=ttabla2%></td >
  <%  
    try {
      M4Operations t = new M4Operations(request);
      int regincid = 0;
      for (regincid =0; regincid < zcountincidi; regincid++){
        String regincids = String.valueOf(regincid);
  %>
  <td><%=regincids%></td>   
  <%
      }
  } catch(Exception e) {}
  %>
  <td><%=ttabla3%></td>
  </tr>
  <%  
  try {
    M4Operations u = new M4Operations(request);
    int regemp = 0;
  // Items to be loaded. You must add all of the ones that you want to view.
    String zEMPLEADO = "";
    String zSTDIDPERSON = "";
    String zSNOMBRE = "";
    String zSGBNAME = "";
    String zSGBNAMEjs = "";
    String zSAPELLIDOS = "";
    String zIDINCIDENCE = "";
    String zNMINCIDENCE = "";
    String zTOTAL2 = "";
    int zTOTAL = 0;

    String zTOTALEMP2 = "";
    int zTOTALEMP = 0;
    int zcontrol = 0;
    
    for (regemp =0; regemp < zcountempi; regemp++){
      String regemps = String.valueOf(regemp);
      u.moveData(znodoemp,zmeta4object,znodoemp,regemps);
      zSTDIDPERSON = u.getItem(znodoemp,zmeta4object,znodoemp,"","STD_ID_PERSON");
      zSTDIDPERSON = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "mss_g4_emp", zSTDIDPERSON);
      zSAPELLIDOS = u.getItem(znodoemp,zmeta4object,znodoemp,"","STD_N_FAMILY_NAME_1");
      zSNOMBRE = u.getItem(znodoemp,zmeta4object,znodoemp,"","STD_N_FIRST_NAME");
      zSGBNAME = u.getItem(znodoemp,zmeta4object,znodoemp,"","SCO_GB_NAME");
      zSGBNAMEjs = com.meta4.taglib.util.M4PresentationUtilTaglib.escape(zSGBNAME);
      zEMPLEADO = zSGBNAME ;
      zcontrol = regemp%2;
  %>
  <% if (zcontrol == 0){%>
  <tr>
    <td class="fuentevalor"><a title="<%=etiqueta%>" onclick="javascript:asignar('<%=zSGBNAMEjs%>');" href="javascript:navegaremp('<%=zSTDIDPERSON%>');" ><%=zSGBNAME%></a></td>
    <%
    int regcross = 0;
    int pointcross = 0;
    for (regcross =0; regcross < zcountincidi; regcross++){

      pointcross = (regcross + (regemp*zcountincidi));
      String pointcrosss = String.valueOf(pointcross);
      u.moveData(znodo,zmeta4object,znodo,pointcrosss);
      zIDINCIDENCE = u.getItem(znodo,zmeta4object,znodo,"","SCO_ID_INCIDENCE");
	  zTOTAL2 = u.getItem(znodo,zmeta4object,znodo,"","TOTAL");
	  String code = zTOTAL2.substring(zTOTAL2.indexOf(".") + 1,4);

      zTOTAL = Integer.parseInt(code);       
	  if (zTOTAL == 0) {
		  zTOTAL2 = zTOTAL2.substring(0,zTOTAL2.indexOf("."));
	  }else{
		  zTOTAL2 = zTOTAL2.substring(0,zTOTAL2.indexOf(".")+4);
	  }


      String regcrosss = String.valueOf(regcross);
      u.moveData(znodoincid,zmeta4object,znodoincid,regcrosss);
      zNMINCIDENCE = u.getItem(znodoincid,zmeta4object,znodoincid,"","SCO_NM_INCIDENCE");
      
      if (!(zTOTAL2.equals("0"))) {%>
      <td class="fuentevalor"><a title="<%=etiqueta%>" onclick="javascript:asignar('<%=zSGBNAMEjs%>');" href="javascript:navegartipo('<%=zSTDIDPERSON%>','<%=zIDINCIDENCE%>','<%=zNMINCIDENCE%>');"><%=zTOTAL2%></a></td>
      <% } else { %>
      <td class="fuentevalor"><%=zTOTAL2%></td>
      <%}%>
    <%
    }
      zTOTALEMP2 = u.getItem(znodo,zmeta4object,znodo,"","TOTAL_EMP");
	  String code = zTOTALEMP2.substring(zTOTALEMP2.indexOf(".") + 1,4);
      zTOTAL = Integer.parseInt(code);       
	  if (zTOTAL == 0) {
		  zTOTALEMP2 = zTOTALEMP2.substring(0,zTOTALEMP2.indexOf("."));
	  }else{
		  zTOTALEMP2 = zTOTALEMP2.substring(0,zTOTALEMP2.indexOf(".")+4);
	  }
      
    %>
    <td class="fuentevalor"><%=zTOTALEMP2%></td> 
  </tr>
  <% } else { %>
  <tr>
    <td class="fuentevalor2"><a title="<%=etiqueta%>" onclick="javascript:asignar('<%=zSGBNAMEjs%>');" href="javascript:navegaremp('<%=zSTDIDPERSON%>');" ><%=zSGBNAME%></a></td>
    <%
    int regcross = 0;
    int pointcross = 0;
    for (regcross =0; regcross < zcountincidi; regcross++){

      pointcross = (regcross + (regemp*zcountincidi));
      String pointcrosss = String.valueOf(pointcross);
      u.moveData(znodo,zmeta4object,znodo,pointcrosss);
      zIDINCIDENCE = u.getItem(znodo,zmeta4object,znodo,"","SCO_ID_INCIDENCE");
	  zTOTAL2 = u.getItem(znodo,zmeta4object,znodo,"","TOTAL");
	  String code = zTOTAL2.substring(zTOTAL2.indexOf(".") + 1,4);

      zTOTAL = Integer.parseInt(code);       
	  if (zTOTAL == 0) {
		  zTOTAL2 = zTOTAL2.substring(0,zTOTAL2.indexOf("."));
	  }else{
		  zTOTAL2 = zTOTAL2.substring(0,zTOTAL2.indexOf(".")+4);
	  }


      String regcrosss = String.valueOf(regcross);
      u.moveData(znodoincid,zmeta4object,znodoincid,regcrosss);
      zNMINCIDENCE = u.getItem(znodoincid,zmeta4object,znodoincid,"","SCO_NM_INCIDENCE");
      
      if (!(zTOTAL2.equals("0"))) {%>
      <td class="fuentevalor2"><a title="<%=etiqueta%>" onclick="javascript:asignar('<%=zSGBNAMEjs%>');" href="javascript:navegartipo('<%=zSTDIDPERSON%>','<%=zIDINCIDENCE%>','<%=zNMINCIDENCE%>');"><%=zTOTAL2%></a></td>
      <% } else { %>
      <td class="fuentevalor2"><%=zTOTAL2%></td>
      <%}%>
    <%
    }

      zTOTALEMP2 = u.getItem(znodo,zmeta4object,znodo,"","TOTAL_EMP");
	  String code = zTOTALEMP2.substring(zTOTALEMP2.indexOf(".") + 1,4);
      zTOTAL = Integer.parseInt(code);       
	  if (zTOTAL == 0) {
		  zTOTALEMP2 = zTOTALEMP2.substring(0,zTOTALEMP2.indexOf("."));
	  }else{
		  zTOTALEMP2 = zTOTALEMP2.substring(0,zTOTALEMP2.indexOf(".")+4);
	  }
      
    %>
    <td class="fuentevalor2"><%=zTOTALEMP2%></td>  
  </tr>
<%}%>
  <%
    }
  } catch(Exception e) {}
  %>      
</table>  
  <%
  }
  else{%>
    <div class="fuentenodatos" >
    <br>
      <%=etiqueta2%>
    </div>
  <%
    }
  %>
  <br>
<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>


