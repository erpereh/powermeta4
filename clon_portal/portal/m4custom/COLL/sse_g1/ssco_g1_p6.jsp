<script type="text/javascript">  
function mod(ord){
  m4valor("ocult","zPos",ord,"set")
  m4submit("ocult");
}

function borrar(ordoc,iddoc,idtype,dtemiss,docstat,dtval){
  m4valor("oculto","SCO_OR_HR_DOC",ordoc,"set");
  m4valor("oculto","SCO_ID_DOC",iddoc,"set");
  m4valor("oculto","SCO_ID_DOC_TYPE",idtype,"set");
  m4valor("oculto","SCO_DT_EMISSION",dtemiss,"set");
  m4valor("oculto","SCO_ID_DOC_STATE",docstat,"set");
  m4valor("oculto","SCO_DT_VALID",dtval,"set");
  m4submit("oculto");
}
</script>
<%
   String zsubsesion = "SSCO_HR_DOCUMENTS";
   String zmeta4object = "SSCO_HR_DOCUMENTS";
   String znodo = "M4T_HR_DOC";
   String ztipocarga = "M4T";     
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";     
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";  
   
 
  String zventanas = "20";
  int zvuelta = 5;
  String zdireccion = "sse_g1/ssco_g1_p6.jsp";
  String zestado = "21";

// No se modifica en general.

int zregistroinicial = Integer.valueOf(zinicios).intValue();
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;
      
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request); 
      m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
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
</script>
</head>
<body>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Title.ssco_g1_p6Des")%></td></tr>
<tr>
<td><img alt="<%=sse_g1Ess.getProperty("Title.ssco_g1_p6Des")%><"title="<%=sse_g1Ess.getProperty("Title.ssco_g1_p6Des")%><" src="/iconos/family_123_100.gif" width="100" height="100" /></td>
<td>
  <div class="descripcionfuncional"><%=sse_g1Ess.getProperty("Label.ssco_g1_p6Des")%></div>
  <ul class="listaenlace">
    <li><a class="enlacefuncional"title="<%=sse_g1Ess.getProperty("Link.ssco_g1_p6new")%>"tabindex="1" href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p6_mod.jsp?estado=11"><%=sse_g1Ess.getProperty("Link.ssco_g1_p6new")%></a></li>
    <li><a class="enlacefuncional"title="<%=sse_g1Ess.getProperty("Link.ssco_g1_p6check")%>"tabindex="1" href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p6_mod2.jsp?estado=11"><%=sse_g1Ess.getProperty("Link.ssco_g1_p6check")%></a></li>
  </ul>
  </td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="oculto" id="oculto">
  <input type="hidden" id="TAG" name="TAG" value="SSCO_HR_DOCUMENTS" />
  <input type="hidden" id="REC" name="REC" value="" />
  <input type="hidden" id="ACC" name="ACC" value="ANULAR" />
  <input type="hidden" id="NOD" name="NOD" value="SSE_HR_DOC" />
  <input type="hidden" id="SCO_OR_HR_DOC" name="SCO_OR_HR_DOC"value=""/>
  <input type="hidden" id="SCO_ID_DOC_TYPE" name="SCO_ID_DOC_TYPE"value=""/>
  <input type="hidden" id="SCO_DT_EMISSION" name="SCO_DT_EMISSION"value=""/>
  <input type="hidden" id="SCO_ID_DOC_STATE" name="SCO_ID_DOC_STATE"value=""/>
  <input type="hidden" id="SCO_DT_VALID" name="SCO_DT_VALID"value=""/>
  <input type="hidden" id="SCO_ID_DOC" name="SCO_ID_DOC"value=""/>
</form>
<form action="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p6_mod.jsp" method="post" name="ocult" id="ocult">
<input type="hidden" name="estado" id="estado" value="11" />
<input type="hidden" name="zPos" id="zPos" value="" />
</form>
<% if (zcounti > 0){String zposicions = "0";int zcontrol = 0; String zPaint="";int zposicion =0; %>
<table class = "tablaestados" cellspacing="0" width="100%">
<tr class="tablaestadosceldatitulo">
<td class = "tablaestadosceldatitulo"> <m4:label item="SCO_NM_DOC_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class = "tablaestadosceldatitulo"><m4:label item="SCO_ID_DOC" htmlsafe="true" outputdef="<%=znodo%>"/></td> 
<td class = "tablaestadosceldatitulo"> <m4:label item="SCO_NM_DOC_STATE" htmlsafe="true" outputdef="<%=znodo%>"/></td> 
<td class = "tablaestadosceldatitulo"> <m4:label item="SCO_DT_EMISSION" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class = "tablaestadosceldatitulo"> <m4:label  item="SCO_DT_VALID" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class = "tablaestadosceldatitulo"> </td>
</tr>
<%@ include file="../tc_docs/tc_doc_initialize_include.jsp" %>
<%
//0:modo formulario 1:modo tabla
sgtc_zShowMode = "1";
//0:modo readonly 1:modo readwrite
sgtc_zReadWrite = "0";
%>   

<m4:dataloop outputdef="<%=znodo%>">
<m4:current m4varname="current" outputdef="<%=znodo%>"/>
<%zposicion = Integer.valueOf(current).intValue();zcontrol = zposicion%2;%>
<%if (zcontrol==0){zPaint="";}else{zPaint="2";}%>
<tr>
<td  class="fuentevalor<%=zPaint%>"><m4:item  item="SCO_NM_DOC_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<m4:item item="<%=sgtc_zIDInputIDDOC%>" var="sgtc_zIDDOC" htmlsafe="true" outputdef="<%=znodo%>"/>
<m4:item m4varname="sIdDocEncr" item="SCO_ID_DOC" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true"/>
<m4:item item="<%=sgtc_zIDInputTITLEDOC%>" var="sgtc_zTITLEDOC" htmlsafe="true" outputdef="<%=znodo%>"/>
<%sIdDocEncr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdDocEncr);
if (!sgtc_zIDDOC.equals("")) {sgtc_zIDDOC = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "tc_docs", sgtc_zIDDOC);}%>
<%sgtc_zNMInputIDDOC = sgtc_zIDInputIDDOC + "_" + zposicion;%>
<%sgtc_zIDCSSRow = "fuentevalor" + zPaint;%>
<td  class="fuentevalor<%=zPaint%>"><input type="hidden" id="<%=sgtc_zNMInputIDDOC%>" name="<%=sgtc_zNMInputIDDOC%>" value="<%=sgtc_zIDDOC%>"/>
<%@ include file="../tc_docs/tc_doc_include.jsp" %></td>
<td class="fuentevalor<%=zPaint%>" ><m4:item  item="SCO_NM_DOC_STATE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class="fuentevalor<%=zPaint%>"><m4:item  item="SCO_DT_EMISSION" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class="fuentevalor<%=zPaint%>"><m4:item  item="SCO_DT_VALID" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class="fuentevalor<%=zPaint%>"><a title = "<%=Tran.getProperty("Button.Delete")%>" href="javascript:borrar('<m4:item  item="SCO_OR_HR_DOC" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true"/>','<%=sIdDocEncr%>','<m4:item  item="SCO_ID_DOC_TYPE" jsafe="true" outputdef="<%=znodo%>" htmlsafe="true"/>','<m4:item  item="SCO_DT_EMISSION" jsafe="true" outputdef="<%=znodo%>" htmlsafe="true"/>','<m4:item  item="SCO_ID_DOC_STATE" jsafe="true" outputdef="<%=znodo%>" htmlsafe="true"/>','<m4:item  item="SCO_DT_VALID" jsafe="true" outputdef="<%=znodo%>" htmlsafe="true"/>');"><img alt="<%=Tran.getProperty("Button.Delete")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" align="right"/></a></td>

</tr> 
</m4:dataloop>
</table>