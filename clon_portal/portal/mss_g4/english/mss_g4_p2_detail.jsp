<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
  <%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
  <%
    Generatablaparametros zobjtabla = new Generatablaparametros(request);
    String estado = (String) zobjtabla.m4paramvalor("estado");
    String zparamyear = (String) zobjtabla.m4paramvalor("zparamyear");
    String zincidence = (String) zobjtabla.m4paramvalor("zincidence");
    String zperson = (String) zobjtabla.m4paramvalor("zperson");
    zperson = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "mss_g4_emp", zperson);
    String znmincidence = (String) zobjtabla.m4paramvalor("znmincidence");
    String zempleado = (String) zobjtabla.m4paramvalor("zempleado");
    String zin= zincidence;
            
    if ((estado==null)||(estado.equals(""))){
      estado="41";
    }
    if ((zparamyear==null)||(zparamyear.equals(""))){
      Calendar ahora = Calendar.getInstance();
      int ano = ahora.get(ahora.YEAR);
      String strano = String.valueOf(ano);
      zparamyear = strano;
    }
    if ((zincidence=="0")||(zincidence.equals("0"))){
      zin= "";
    }

    // translatable strings

    String titulo = "Absences";
    String tfuncional = "Absences";
    String efuncional = "Yearly summary of your employees' absences.";
    String dfuncional = "View the absences for the employee  ";
    dfuncional = dfuncional + zempleado + ".";
    String dfuncional2 = "Viwe the  ";
    dfuncional2 = dfuncional2 + znmincidence + " type absences for the employee ";
    dfuncional2 = dfuncional2 + zempleado + ".";
    String etiqueta = "Absence Type";
    String etiqueta2 = "Start Date";
    String etiqueta3 = "End Date";
    String etiqueta4 = "Duration";
    String etiqueta5 = "There are currently no absences registered for your employees.";

%>
  <title><%=titulo%></title>
  <link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
  <script type="text/javascript" src="/libreria/funciones_sse.js"></script>
  <%@ include file="../../mss_generico/english/menu_mss.jsp" %>
</head>
<body>
  <%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
  <%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%
   String zsubsesion = "SSM_ABSENCES_DYN";
   String zmeta4object = "SSM_ABSENCES_DYN";
   String zmetodocarga = zsubsesion + "!SSM_PRINCIPAL.CARGA";
   String znodo = "SSM_ABSENCE_DETAIL";
   String zraiz = zsubsesion + "!" + znodo + ".";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

        // Normally not modified.

   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   String zmove = znodo + ":" + znodo + "[FIRST]";   
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String ztipocarga = "DETAIL";

  
// Items to be loaded. You must add all of the ones that you want to view.

  String zSCOIDINCIDENCE = zcomun + "SCO_ID_INCIDENCE";
  String zSCOIDTIMEUNIT = zcomun + "SCO_ID_TIME_UNIT";
  String zSCOUNITS = zcomun + "SCO_UNITS";
  String zSTARTDATE = zcomun + "START_DATE";
  String zENDDATE = zcomun + "END_DATE";
  String zSCONMINCIDENCE = zcomun + "SCO_NM_INCIDENCE";
  String zSCONMTIMEUNIT = zcomun + "SCO_NM_TIME_UNIT";  
  String zSCONMTIMEUNIT1 = zcomun + "SCO_NM_TIME_UNIT_1"; 
  String zTOTAL = zcomun + "TOTAL"; 

%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request);
      m.setItem(zsubsesion,znodo,"","ID_INCIDENCE",zin);
      m.setItem(zsubsesion,znodo,"","ID_PERSON",zperson);
      m.setItem(zsubsesion,znodo,"","YEAR",zparamyear);
    } catch(Exception e) {}
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
    } catch(Exception e) {}
    try {
      M4Operations m = new M4Operations(request);
      zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    } catch(Exception e) {}
    String  zcountv = String.valueOf(zcounti);
    
%>
     <!-- Description table. Required. Always 3*2: a page title + an icon + a description + options -->
    <table border="0" width="100%">
      <tr>
        <!-- Functional Page Title -->
        <td class="titulofuncional" colspan="2"><%=tfuncional%></td>
      </tr>
      <tr>
        <td><img alt="<%=tfuncional%>" src="/iconos/noname_ausencias_dch_52_100.gif" width="100" height="100"/></td>
        <td>
          <div class="descripcionfuncional">
              <%
              if ((zincidence == "0")||(zincidence.equals("0"))){
              %>
                  <%=dfuncional%>
              <% } else { %>
                  <%=dfuncional2%>
              <%
              }
              %>
            </div>
            <ul class="listaenlace">
            <li><a class="enlacefuncional" title="<%=efuncional%>" href="mss_g4_p2_val.jsp?estado=41"><%=efuncional%></a></li>
            </ul>           
        </td>
      </tr>
    </table>

  <!-- ********************************************************************* -->
  
<form action="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_val.jsp?estado=41" method="post" name="oculto" id="oculto">
  <input type="hidden" id="zinicios" name="zinicios" value="" />
</form>
  
<% 
  if (zcounti > 0) {
%>  
    <table class = "tablaestados" width="100%" cellspacing="0">
    <tr class = "tablaestadosceldatitulo">
    <%
        if ((zincidence == "0")||(zincidence.equals("0"))){
    %>
      <td ><%=etiqueta%></td >
    <%
    }
    %>    
      <td  ><%=etiqueta2%></td>   
      <td  ><%=etiqueta3%></td>   
      <td  ><%=etiqueta4%></td>   
    </tr>
    <%
      String zposicions = "0";
      int zcontrol = 0;
      int zposicion =0;
    %>
    <m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
    <%
      zposicions = m4lix;
      zposicion = Integer.valueOf(zposicions).intValue();
      zcontrol = zposicion%2;
    %>
    <%if (zcontrol==0){%>
      <tr>
        <%
          if ((zincidence == "0")||(zincidence.equals("0"))){
        %>
          <td class="fuentevalor">
            <m4:item m4name="<%=zSCONMINCIDENCE%>" htmlsafe="true"/>
          </td>
        <%
        }
        %>    
        <td class="fuentevalor"  ><m4:item m4name="<%=zSTARTDATE%>" htmlsafe="true"/></td>
        <td class="fuentevalor"  ><m4:item m4name="<%=zENDDATE%>" htmlsafe="true"/></td>

<!--	Modificaciones mejora 0242258 -->
<!--        <td class="fuentevalor"  ><m4:item m4name="<%=zTOTAL%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSCONMTIMEUNIT%>" htmlsafe="true"/></td>-->
        <td class="fuentevalor"  ><m4:item m4name="<%=zSCOUNITS%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSCONMTIMEUNIT1%>" htmlsafe="true"/></td>


      </tr>
    <% } else { %>
      <tr>
        <%
          if ((zincidence == "0")||(zincidence.equals("0"))){
        %>
          <td class="fuentevalor2"  >
            <m4:item m4name="<%=zSCONMINCIDENCE%>" htmlsafe="true"/>
          </td>
        <%
        }
        %>    
        <td class="fuentevalor2"  ><m4:item m4name="<%=zSTARTDATE%>" htmlsafe="true"/></td>
        <td class="fuentevalor2"  ><m4:item m4name="<%=zENDDATE%>" htmlsafe="true"/></td>
<!--        <td class="fuentevalor2"  ><m4:item m4name="<%=zTOTAL%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSCONMTIMEUNIT%>" htmlsafe="true"/></td> -->
        <td class="fuentevalor2"  ><m4:item m4name="<%=zSCOUNITS%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSCONMTIMEUNIT1%>" htmlsafe="true"/></td>

      </tr>
    <%}%>
    </m4:loop>    
  </table>  
  <%
  }
  else{%>
    <div class="fuentenodatos"><%=etiqueta5%></div>
    <%
    }
  %>
<br>
<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>


