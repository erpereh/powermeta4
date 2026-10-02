<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>

<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">




<%
  //--------------------------------------------------------  
  String empleado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado");   
  String periodo = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo");   
  periodo = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", periodo);
  String zVis = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis");   

  if ((zVis==null)||(zVis.equals(""))){
    zVis = "1";
  }
  //-------------------------------------------------------- 

   String zurl="";
   if (zVis.equals("1")){
     zurl="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31";
   }else{
      zurl="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp?estado=11&person=" + empleado + "&person_ord=" + periodo;
   }

%>
<head>
  <meta http-equiv='refresh' content="0; URL=<%=zurl%>" />
  <title>Solicite necessidades de forma&ccedil;&atilde;o</title>
  <!-- Hoja de Estilo general. Obligatorio-->
  <link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
  <!-- Librerias JavaScript. Obligatorio -->
  <script type="text/javascript" src="/libreria/funciones_sse.js"></script>
  <%@ include file="../../mss_generico/portugues/menu_mss.jsp" %>   
  <script type="text/javascript" src="/libreria/menuintercambio.js"></script>   
<script type="text/javascript">
</script>

  <%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>

<%      

    
    String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
    String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
    String zidtrtb = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb");
  String zempleados = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zempleados");
  String zfechaini = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfechaini");
  String zfechafin = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfechafin");
  String zidioma = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidioma");
  String znplazas = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znplazas");
  String zDev = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDev");
  String zTipo = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTipo");
  String zDescription = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDescription");
  if ((estado==null)||(estado.equals(""))){estado = "0";  
  if ((zTipo==null)||(zTipo.equals(""))){ zTipo = "1";}
  }%>
</head>
<body>
<%
  String zsubsesion = "SSM_TRAINING_REQUEST";
  String zMeta4Object = "SSM_TRAINING_REQUEST";  
  String znodo1 = "M4T_TRAINING_REQUEST";
  String zventanas = "20";
  String zMETODOCARGA = "CARGA:" + zsubsesion + "!M4T_TRAINING_REQUEST.INSERT_REQUEST";   
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%= zMeta4Object %>" m4name="<%=zsubsesion%>"/>
<% 
try {
  M4Operations m = new M4Operations(request);
  m.setItem(zsubsesion,znodo1,"","IDTRTB",zidtrtb);
  m.setItem(zsubsesion,znodo1,"","SSM_EMPLEADOS",zempleados);
  m.setItem(zsubsesion,znodo1,"","NPLAZAS",znplazas);
  m.setItem(zsubsesion,znodo1,"","ID_LANGUAGE",zidioma);
  m.setItem(zsubsesion,znodo1,"","SD_PREF",zfechaini);
  m.setItem(zsubsesion,znodo1,"","ED_PREF",zfechafin);
  m.setItem(zsubsesion,znodo1,"","ID_DEV",zDev);
  m.setItem(zsubsesion,znodo1,"","TIPO",zTipo);
  m.setItem(zsubsesion,znodo1,"","DESCRIPTION",zDescription);
  
  
  }catch(Exception e){}
  %>
<m4:exec m4method="<%=zMETODOCARGA%>"></m4:exec>
<m4:endjob/>

<br / ><br / ><br / ><br / ><br / ><br / ><br / >
<table align="center" cellpadding="0" cellspacing="0">
<tr>
  <td class="fuenteactualizar">Processando dados</td>
</tr>
<tr>
  <td class="fuenteactualizar2">Por favor, aguarde um momento.</td>
</tr>
</table>
</body>
<m4:endpage/>
