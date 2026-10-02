<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Strict//EN""DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<meta http-equiv="Content-Type" content="text/html">
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %> 
<%@ include file="/sse_g2/sse_bft_trans.jsp"%>
<%@ include file="/sse_g0/sgco_gen_trans.jsp"%>
<%
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String vista = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"vista");
  String SSE_P_LIST_POSITION = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSE_P_LIST_POSITION");
  if ((estado==null)||(estado.equals(""))){
    estado="0";
  }
%>
<title><%=TranEss.getProperty("bft_ess.SimulBenef")%></title>
</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
  String zsubsesion = "SSE_BFT_EE_BNFT_ELEC";
  String zmeta4object = "SSE_BFT_EE_BNFT_ELEC";
  String znodo = "M4T_EE_BNFT_ELEC";
  String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodo + ".SSE_M_PAY_SIMULATION";

  String zoutputdef = zsubsesion + "!" + znodo + "[*]";
  String zmove = znodo + ":" + znodo + "[FIRST]";
  String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

  String zSSE_XLS_GB_NAME = zcomun + "SSE_XLS_GB_NAME";
  String zSSE_XLS_DT_PAYMENT = zcomun + "SSE_XLS_DT_PAYMENT";
  String zSSE_XLS_COT_HRP_CON = zcomun + "SSE_XLS_COT_HRP_CON";
  String zSSE_XLS_TOT_EARNINGS = zcomun + "SSE_XLS_TOT_EARNINGS";
  String zSSE_XLS_TOT_BNFT_HR_PRE = zcomun + "SSE_XLS_TOT_BNFT_HR_PRE";
  String zSSE_XLS_TOT_PRE = zcomun + "SSE_XLS_TOT_PRE"; 
  String zSSE_XLS_PCT_COT_HRP_CON = zcomun + "SSE_XLS_PCT_COT_HRP_CON";
  String zSSE_XLS_NET = zcomun + "SSE_XLS_NET";
  String zSSE_XLS_CURRENCY = zcomun + "SSE_XLS_CURRENCY";
	String zSSE_XLS_BASE_IRPF = zcomun + "SSE_XLS_BASE_IRPF";

  String zSUS_N_PLAN = zcomun + "SUS_N_PLAN";
  String zSUS_PRICE = zcomun + "SSE_XLS_PRICE"; 
  String zSUS_ER_CONTR = zcomun + "SSE_XLS_ER_CONTR";
  String zSUS_TAX = zcomun + "SUS_TAX";
  String zSUS_TAX_ELCT_D = zcomun + "SUS_TAX_ELCT_D";
  String zSUS_FLEX_PLAN = zcomun + "SUS_FLEX_PLAN";

%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="ARG_LIST_BENEFIT" value="<%=SSE_P_LIST_POSITION%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>


<%
  int  zcount  = 0;
  try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcount-1);
  String zposicions = "";
%>

<%if (zcount > 0) {%>
  <m4:loop from="0" to="<%=zcountv%>">  
  <%zposicions = m4lix;%>
  
  <form name="oculto<%=zposicions%>" id="oculto<%=zposicions%>" action = " ">   
    <input id="SUS_N_PLAN<%=zposicions%>" name="SUS_N_PLAN<%=zposicions%>" type="hidden" value="<m4:item m4name="<%=zSUS_N_PLAN%>" htmlsafe="true"/>" />
    <input id="SUS_PRICE<%=zposicions%>" name="SUS_PRICE<%=zposicions%>" type="hidden" value="<m4:item m4name="<%=zSUS_PRICE%>" htmlsafe="true"/>" />
    <input id="SUS_ER_CONTR<%=zposicions%>" name="SUS_ER_CONTR<%=zposicions%>" type="hidden" value="<m4:item m4name="<%=zSUS_ER_CONTR%>" htmlsafe="true"/>" />
    <input id="SUS_FLEX_PLAN<%=zposicions%>" name="SUS_FLEX_PLAN<%=zposicions%>" type="hidden" value="<m4:item m4name="<%=zSUS_FLEX_PLAN%>" htmlsafe="true"/>" />
    <input id="SUS_TAX<%=zposicions%>" name="SUS_TAX<%=zposicions%>" type="hidden" value="<m4:item m4name="<%=zSUS_TAX%>" htmlsafe="true"/>" />
    <input id="SUS_TAX_ELCT_D<%=zposicions%>" name="SUS_TAX_ELCT_D<%=zposicions%>" type="hidden" value="<m4:item m4name="<%=zSUS_TAX_ELCT_D%>" htmlsafe="true"/>" />      
  </form>
  </m4:loop>
<%}%>

<m4:getapplparam section="PORTAL_PARAM" key="TEMPLATES_DIR" output="jsp"/>
<%
String sWebServerName = "";
String sWebServerPort = "";
String sProtocol      = "http";
String sURLxlsTpltData    = "";
String zusertempurit1 = "";
String zusertempurit2 = "";

//Obtenemos la ruta del temp del servidor web (c:/program files/meta4/m4ws/usuario/temp/sesion
//aunque por ahora no la usamos pero sospecho que la vamos a usar
//Además obtenemos solo la parte temp/sesion que tampoco usamos por ahora
M4SessionManager zsessionmanager2 = M4Context.getSession(request);
zusertempurit1 = (String) zsessionmanager2.getPathTempMapping();
zusertempurit2 = zsessionmanager2.getUserTempURI(); 


//Obtenemos el servidor web y el puerto
try{
  sWebServerName = request.getServerName( );
  sWebServerPort = new Integer( request.getServerPort() ).toString( );
  if ( request.isSecure() ) 
    sProtocol = "https" ;
} catch(Exception e) {};



//Armamos todo el path para levantar la plantilla
sURLxlsTpltData = sProtocol + "://" + sWebServerName + ":" + sWebServerPort + "/plantillas/espanol/benefit_simulation.xls";

%>


<script>

function verDocumento(urlLista){

  var fs, strTemp ; 
  
  //Obtenemos el temp del cliente (c:/documents and setting/etc..)
  //fs = new ActiveXObject("Scripting.FileSystemObject");
  //strTemp = fs.GetSpecialFolder(2) ;
  if (!navigator.appMinorVersion) {
    msg = m4getmessage("_sl_co_ex_5");
    alert(msg);
    window.close();
  } else {

try{

  //Creamos el objeto excel
  var oExcel = new ActiveXObject("Excel.Application"); 

  //Abrimos la plantilla
  oExcel.Workbooks.Open("<%=sURLxlsTpltData%>");

  //Nos posicionamos en la hoja 1 y llenamos los datos fijos
  var exWbook = oExcel.Workbooks(1).Worksheets(1);
  exWbook.range("C3").Value = "<m4:item m4name="<%=zSSE_XLS_GB_NAME%>" htmlsafe = "false" jsafe="true"/>";
  exWbook.range("C4").Value = "<m4:item m4name="<%=zSSE_XLS_DT_PAYMENT%>" htmlsafe = "true" jsafe="true"/>";
  exWbook.range("C15").Value = "<m4:item m4name="<%=zSSE_XLS_TOT_EARNINGS%>" htmlsafe = "true" jsafe="true"/>";
	exWbook.range("E15").Value = "<m4:item m4name="<%=zSSE_XLS_COT_HRP_CON%>" htmlsafe = "true" jsafe="true"/>";
	exWbook.range("C16").Value = "<m4:item m4name="<%=zSSE_XLS_BASE_IRPF%>" htmlsafe = "true" jsafe="true"/>";
	exWbook.range("E16").Value = "<m4:item m4name="<%=zSSE_XLS_PCT_COT_HRP_CON%>" htmlsafe = "true" jsafe="true"/>";
	exWbook.range("D29").Value = "<m4:item m4name="<%=zSSE_XLS_CURRENCY%>" htmlsafe = "true" jsafe="true"/>";
  
  //Ahora, a partir de la ristra de planes seleccionados
  //vamos agregando los planes
  var row = 8;  
  var ristra =  "<%=SSE_P_LIST_POSITION%>" ;
  var posic = "";
  
  while (ristra.length>0){
    var posic = ristra.substring(0,ristra.indexOf(";"));
    ristra = ristra.substring(ristra.indexOf(";")+1,ristra.length);
    
    auxFlex = m4valor("oculto"+posic,"SUS_FLEX_PLAN"+posic,"","get");
    //Así se muetran los beneficios flexibles
    //if (auxFlex == "Y"){ 
      aux = m4valor("oculto"+posic,"SUS_N_PLAN"+posic,"","get");
      exWbook.cells(row,2).Value = aux;

      auxTax = m4valor("oculto"+posic,"SUS_TAX"+posic,"","get");
      if (auxTax == "I"){ 
        auxTax = m4valor("oculto"+posic,"SUS_TAX_ELCT_D"+posic,"","get");
      }
      if (auxTax == "A"){ 
        aux = m4valor("oculto"+posic,"SUS_PRICE"+posic,"","get");
        exWbook.cells(row,4).Value = aux; 
      }
      else
      {
        aux = m4valor("oculto"+posic,"SUS_PRICE"+posic,"","get");
        exWbook.cells(row,3).Value = aux;
      }

      aux = m4valor("oculto"+posic,"SUS_ER_CONTR"+posic,"","get");
      exWbook.cells(row,5).Value = aux;     
    
      exWbook.rows(row+1).insert;   
      row = row + 1;
    //}         
  }

  //Grabamos el excel generado en la pc del usuario
  //No hace falta, cuando cierre la ventana le va a pedir
  //guardar y va a poner por defecto la carpeta MisDocumentos
  //var oSaveAs = oExcel.ActiveWorkbook.SaveAs(strTemp+"/simulacion.xls");
  
  //Mostramos el excel
  oExcel.Visible = true;

  //Cerramos el excel
  //oExcel.quit(); 
}catch(e){
  if (oExcel == null) {
    var msg =  m4getmessage("_sl_co_ex_1");
    msg = msg+"\n"+ m4getmessage("_sl_co_ex_2");

    alert(msg);
    window.close();
  
  }else if (exWbook == null) {
    var msg =  m4getmessage("_sl_co_ex_1");
    msg = msg+"\n"+ m4getmessage("_sl_co_ex_3");
    msg = msg+ m4getmessage("_sl_co_ex_4");
    alert(msg);
    window.close();
  }else{

    window.close();
  }
}
}
}

function verdocumentoAnterior(urlLista){
  window.open(urlLista,"","top=20,left=20,toolbar=no,scrollbars=yes,directories=no,status=no,menubar=no,resizable=yes,width=675,height=450");
}
</script>
<table width="100%">
  <tr>
    <td class="titulofuncional" colspan="2"><%=TranEss.getProperty("bft_ess.SimulBenef")%></td>
  </tr>
  <tr valign="top">
    <td>
      <img src="/iconos/noname_pregunta_47_125.gif" width="100" height="100" border="0">
    <td>
      <div class="descripcionfuncional"><%=TranEss.getProperty("bft_ess.DescSimulBenef")%></div>
    <ul class="listaenlace">
      <li><a class="enlacefuncional" tabindex="1" title="<%=TranEss.getProperty("bft_ess.SolicBenef")%>" href="javascript:history.back(-1);"><%=TranEss.getProperty("bft_ess.SolicBenef")%></a></li>
    </ul>
    </td>

  </tr>
</table>
<table width="100%" cellspacing="0" border="0">
  <tr align="center">
    <td>
      <img src="/iconos/ic_executed_items_36_36_100.gif" width="36" height="36" border="0">
      <a title= "<%=TranEss.getProperty("bft_ess.OpenExcel")%>" href="javascript:verDocumento();"><%=TranEss.getProperty("bft_ess.OpenExcel")%></a>
    <td>
  </tr>
</table>
<br>
<br>
<br>
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
<m4:endpage/>
<script>

  verDocumento();
  history.back(-1);
</script> 
</body>
</html>
