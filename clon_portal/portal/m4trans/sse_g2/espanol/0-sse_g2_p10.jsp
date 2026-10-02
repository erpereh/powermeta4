<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %> 

<%

//--------------------------------------------------------  
String empleado = (String)request.getAttribute("empleado");
String periodo = (String)request.getAttribute("periodo");
String role = (String)request.getAttribute("role");
String zVis = (String)request.getAttribute("zVis");

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
if (zVis.equals("1")){

%>
  <link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<%}else{%>
  <link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<%}%>
<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>  
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-menu_ess.jsp" %>
<%@ include file="/m4trans/sse_g2/0-sse_bft_trans.jsp"%>
<%@ include file="/m4trans/mss_g2/0-mss_bft_trans.jsp"%>
<title>
<%if (zVis.equals("1")){%>
  <%=TranEss.getProperty("bft_ess.BenefitsSal")%>
<%}else{%>
  <%=TranEss.getProperty("bft_ess.SalDataHist")%>
<%}%>

</title>
<%    
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  

if ((estado==null)||(estado.equals(""))){
estado="0";
}
if ((zinicios==null)||(zinicios.equals(""))){
zinicios = "1";
}
%>

</head>
<body>

<%if (zVis.equals("1")){%>
  <%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_menusup.jsp" %>
  <%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_links.jsp" %>
<%}%>

<%
   String zsubsesion = "SSE_H_SAL_DATA";
   String zmeta4object = "SSE_H_SAL_DATA";  
   String znodo = "SSE_H_SAL_DATA";
   String zmetodocarga = zsubsesion + "!SSE_H_SAL_DATA.SMCO_MAIN_LOAD_PROCESS";

   String zventanas = "20";
   
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zmove = znodo + ":" + znodo + "[FIRST]"; 
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
  // String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_H_SAL_DATA.CARGA";

      
   
   // Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zSTDDTSTART = zcomun + "SCO_DT_START";
   String zSTDDTEND = zcomun + "SCO_DT_END";
   String zSCOFIXSALARY = zcomun + "SCO_FIX_SALARY";
   String zSCOVARSALARY = zcomun + "SCO_VAR_SALARY";
   String zSCOVARSALARYPER = zcomun + "SCO_VAR_SALARY_PER";
   String zSCOBNFTLEGENT = zcomun + "SCO_BNFT_LEG_ENT";
  // String zSCOBNFTLEGPER = zcomun + "SCO_BNFT_LEG_PER";
   String zSALTOTAL = zcomun + "SCO_SAL_TOTAL";
   String zMONEDA = zcomun + "ID_CURRENCY";
   String zFULL = zcomun + "SMCO_FULL_TIME";
   String zHOURS = zcomun + "SMCO_WORKING_HOURS";
   String zSCOFIXSALARYREAL = zcomun + "SCO_FIX_SALARY_REAL";
   String zSCOVARSALARYREAL = zcomun + "SCO_VAR_SALARY_REAL";
   String zSALTOTALREAL = zcomun + "SCO_SAL_TOTAL_REAL";
   String zPERCENTAGE = zcomun + "SMCO_PERCENT_PERIOD";
   String zISFULL = zcomun + "SMCO_IS_FULLTIME";
  
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="SMCO_ARG_HR_TO_LOAD" value="<%=zSMCO_ID_HR%>"/> </m4:exec>


<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/>
</m4:outputdef>
<m4:endjob/><m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%

  int  zcounti  = 0;  
  try {
      M4Operations m = new M4Operations(request);
     
      zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
%>

<%if (zVis.equals("1")){%>
<table width="100%">
<tr><td class="titulofuncional" colspan="2"><%=TranEss.getProperty("bft_ess.BenefitsSal")%></td></tr>
<tr>
  <td><img src="/iconos/noname_recibos_57_100.gif" width="100" height="100"</td>
  <td>
  <div class="fuentedescripcion"><%=TranEss.getProperty("bft_ess.DescBenefitsSal")%> 
  <br><%=TranEss.getProperty("bft_ess.DescBenefitsSal2")%> <A href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6.jsp?estado=21"><b><u><%=TranEss.getProperty("bft_ess.BenefitsAct")%></b></u></A>.
  
  </td>
</tr>
</table>
<%}%>

<%if (zVis.equals("1")){%>
  <table class="tablaestados" cellspacing="0" width="100%">
<%}else{%>
  <table class="barraregistros" cellspacing="0" width="100%">
<%}%>

<% if (zcounti > 0){%>  
    <tr>
      <td colspan="8" class="tablaestadosceldatitulo">
      <%if (zVis.equals("1")){
      %>
        &nbsp;<%=TranEss.getProperty("bft_ess.SalDataHist")%>
      <%}%>
      </td> 
    </tr>
    <tr>
      <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSTDDTSTART%>" htmlsafe = "true"/>&nbsp;&nbsp;</td>
      <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSTDDTEND%>" htmlsafe = "true"/>&nbsp;&nbsp;</td>
      <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCOFIXSALARY%>" htmlsafe = "true"/>&nbsp;&nbsp;</td>
      <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCOVARSALARY%>" htmlsafe = "true"/>&nbsp;&nbsp;</td>
      <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zFULL%>" htmlsafe = "true"/>&nbsp;&nbsp;</td>
      <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zHOURS%>" htmlsafe = "true"/>&nbsp;&nbsp;</td>
      <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCOBNFTLEGENT%>" htmlsafe = "true"/>&nbsp;&nbsp;</td>
      <td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSALTOTAL%>" htmlsafe = "true"/>&nbsp;&nbsp;</td>
    </tr>
      <m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">

    <m4:item m4varname="FULL_TIME" m4name="<%=zISFULL%>"/>
  
    <tr>
      <td class = "fuentevalor"><m4:item m4name="<%=zSTDDTSTART%>" htmlsafe = "true" /></td>
      <td class = "fuentevalor"><m4:item m4name="<%=zSTDDTEND%>" htmlsafe = "true" /></td>

    <% if(FULL_TIME.equals("0")) { %>
      <td class = "fuentevalor"><b><%=TranMss.getProperty("bft_mss.Teorico")%>:</b>&nbsp;<m4:item m4name="<%=zSCOFIXSALARY%>" />&nbsp;<m4:item m4name="<%=zMONEDA%>" htmlsafe = "true" /><BR/><b><%=TranMss.getProperty("bft_mss.Real")%>:</b>&nbsp;<m4:item m4name="<%=zSCOFIXSALARYREAL%>" />&nbsp;<m4:item m4name="<%=zMONEDA%>" htmlsafe = "true" /></td>
    <%}else{%>
      <td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSCOFIXSALARY%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zMONEDA%>" htmlsafe = "true"/></td>
    <%}%>
    <% if(FULL_TIME.equals("0")) { %>
      <td class = "fuentevalor"><b><%=TranMss.getProperty("bft_mss.Teorico")%>:</b>&nbsp;<m4:item m4name="<%=zSCOVARSALARY%>" />&nbsp;<m4:item m4name="<%=zMONEDA%>" htmlsafe = "true" /><BR/><b><%=TranMss.getProperty("bft_mss.Real")%>:</b>&nbsp;<m4:item m4name="<%=zSCOVARSALARYREAL%>" />&nbsp;<m4:item m4name="<%=zMONEDA%>" htmlsafe = "true" /></td>
    <%}else{%>
      <td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSCOVARSALARY%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zMONEDA%>" htmlsafe = "true"/></td>
    <%}%>


      <td class = "fuentevalor"><m4:item m4name="<%=zFULL%>"/></td>
      <td class = "fuentevalor"><m4:item m4name="<%=zHOURS%>" />&nbsp;(<m4:item m4name="<%=zPERCENTAGE%>" htmlsafe = "true" />%)</td>
      <td class = "fuentevalor"><m4:item m4name="<%=zSCOBNFTLEGENT%>" />&nbsp;<m4:item m4name="<%=zMONEDA%>" htmlsafe = "true" /></td>
      <td class = "fuentevalor"><m4:item m4name="<%=zSALTOTAL%>"/>&nbsp;
      <% if(FULL_TIME.equals("0")) { %>
        -&nbsp;<m4:item m4name="<%=zSALTOTALREAL%>"/>
      <%}%>
        <m4:item m4name="<%=zMONEDA%>" htmlsafe = "true" /></td>

    </tr>
    
    </m4:loop>
<%}else{%>

    <tr>
      <td colspan="8" class="tablaestadosceldatitulo">
        <%=TranEss.getProperty("bft_ess.NoDatos")%>
      </td> 
    </tr>

<%}%>
</table>  
 <%if (zVis.equals("1")){%>
<div> 
  <br/>
  <table>         
    <tr>
      <td colspan="2">
        <br></br>
        <%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_disclaimer.jsp" %>
      </td>
    </tr> 
  </table>
<%}%>
<m4:endpage/>
 <%if (zVis.equals("1")){%>
  </div>
  </div>
<%}%>
</body>
</html>
