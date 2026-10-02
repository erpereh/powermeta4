<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %>
<%@ include file="/mss_g2/mss_bft_trans.jsp"%>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title><%=TranMss.getProperty("bft_mss.BenefitsSal")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>

<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
</head>
<body>
<%@ include file="../../mss_generico/portugues/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%
   String zsubsesion = "SSM_H_SAL_DATA";
   String zmeta4object = "SSM_H_SAL_DATA";  
   String zmetodocarga = zsubsesion + "!SSM_PRINCIPAL.CARGA";
   String znodo = "SSM_H_SAL_DATA";
   
   String zventanas = "20";
   int zvuelta = 5;
   String zdireccion = "mss_g2/mss_g2_p10.jsp";
   String zestado = "21";
       
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   String ztipocarga = "M4T";

      String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove =znodo + ":" +znodo + "[" + zregistroinicial + "]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   
    // Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
   String zSCOGBNAME= zcomun + "SCO_GB_NAME";
   String zSCOFIXSALARY = zcomun + "SCO_FIX_SALARY";
   String zSCOVARSALARY = zcomun + "SCO_VAR_SALARY";
   String zSCOVARSALARYPER = zcomun + "SCO_VAR_SALARY_PER";
   String zSCOBNFTLEGENT = zcomun + "SCO_BNFT_LEG_ENT";
   String zSALTOTAL = zcomun + "SCO_SAL_TOTAL";
   String zMONEDA = zcomun + "ID_CURRENCY";
   String zFULL = zcomun + "SMCO_FULL_TIME";
   String zISFULL = zcomun + "SMCO_IS_FULLTIME";
   String zHOURS = zcomun + "SMCO_WORKING_HOURS";
   String zSCOFIXSALARYREAL = zcomun + "SCO_FIX_SALARY_REAL";
   String zSCOVARSALARYREAL = zcomun + "SCO_VAR_SALARY_REAL";
   String zSALTOTALREAL = zcomun + "SCO_SAL_TOTAL_REAL";
   String zPERCENTAGE = zcomun + "SMCO_PERCENT_PERIOD";

%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
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
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=TranMss.getProperty("bft_mss.BenefitsSal")%></td></tr>
<tr>
  <td><img alt="Dados salariais" src="/iconos/noname_banco_79_100.gif" width="100" height="100" /></td>
  <td><div class="descripcionfuncional"><%=TranMss.getProperty("bft_mss.DescBenefitsSal")%></div></td>
</tr>
</table>

<% if (zcounti>0) {
  String zregistroinicials = String.valueOf(zregistroinicial);
  String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
  String zposicions = "0";
  int zcontrol = 0;
  int zposicion =0;
  String zPaint = "0";
%>

<table class="tablaestados" width="100%" cellspacing="0">
    <tr>
      <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCOGBNAME%>" htmlsafe = "true"/></td>
      <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCOFIXSALARY%>" htmlsafe = "true"/></td>
      <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCOVARSALARY%>" htmlsafe = "true"/></td>
      <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zFULL%>" htmlsafe = "true"/></td>
      <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zHOURS%>" htmlsafe = "true"/></td>
      <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCOBNFTLEGENT%>" htmlsafe = "true"/></td>
      <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSALTOTAL%>" htmlsafe = "true"/></td>
    </tr>
    <m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">

    <m4:item m4varname="FULL_TIME" m4name="<%=zISFULL%>"/>
<%zposicions = m4lix;
  zposicion = Integer.valueOf(zposicions).intValue();
  zcontrol = zposicion%2;
   if (zcontrol==0){zPaint="";}else{zPaint="2";}
%>
    <tr>
      <td class = "fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCOGBNAME%>" htmlsafe = "true"/></td>
    <% if(FULL_TIME.equals("0")) { %>
      <td class = "fuentevalor<%=zPaint%>"><b><%=TranMss.getProperty("bft_mss.Teorico")%>:</b>&nbsp;<m4:item m4name="<%=zSCOFIXSALARY%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zMONEDA%>" htmlsafe = "true"/><BR/>
      <b><%=TranMss.getProperty("bft_mss.Real")%>:</b>&nbsp;<m4:item m4name="<%=zSCOFIXSALARYREAL%>"/>&nbsp;<m4:item m4name="<%=zMONEDA%>" htmlsafe = "true"/>&nbsp</td>
    <%}else{%>
      <td class = "fuentevalor<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCOFIXSALARY%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zMONEDA%>" htmlsafe = "true"/></td>
    <%}%>
    <% if(FULL_TIME.equals("0")) { %>
      <td class = "fuentevalor<%=zPaint%>"><b><%=TranMss.getProperty("bft_mss.Teorico")%>:</b>&nbsp;<m4:item m4name="<%=zSCOVARSALARY%>"  htmlsafe="true" />&nbsp;<m4:item m4name="<%=zMONEDA%>"  htmlsafe = "true" /><BR/><b><%=TranMss.getProperty("bft_mss.Real")%>:</b>&nbsp;<m4:item m4name="<%=zSCOVARSALARYREAL%>" />&nbsp;<m4:item m4name="<%=zMONEDA%>" htmlsafe = "true" /></td>
    <%}else{%>
      <td class = "fuentevalor<%=zPaint%>">&nbsp;<m4:item m4name="<%=zSCOVARSALARY%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zMONEDA%>" htmlsafe = "true"/></td>
    <%}%>

      <td class = "fuentevalor<%=zPaint%>"><m4:item m4name="<%=zFULL%>"/></td>
      <td class = "fuentevalor<%=zPaint%>"><m4:item m4name="<%=zHOURS%>"/>&nbsp;(<m4:item m4name="<%=zPERCENTAGE%>" htmlsafe = "true"/>%)</td>
      <td class = "fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCOBNFTLEGENT%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zMONEDA%>" htmlsafe = "true"/></td>
      <td class = "fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSALTOTAL%>"/>&nbsp;
      <% if(FULL_TIME.equals("0")) { %>
        -&nbsp;<m4:item m4name="<%=zSALTOTALREAL%>"/>
      <%}%>
        <m4:item m4name="<%=zMONEDA%>" htmlsafe = "true" /></td>

    </tr>
      </m4:loop>
          
          
</table>
<%@include file="../../sse_generico/portugues/generico_ventanas.jsp"%>
<%
}else{%>
<div class="fuentenodatos"><%=TranMss.getProperty("bft_mss.DescNoDataFound")%></div>
<%}%> 
<%@ include file="../../mss_generico/portugues/mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>



