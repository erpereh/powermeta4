<script type="text/javascript">
function navegar (ord) {
var parametros = new Array("estado","ord");
var valores = new Array(31,ord);
m4navegar("sse_g3/sse_g3_p5_open_vis.jsp",parametros,valores);
}
</script>
<%
  String zsubsesion = "SSE_H_EVALUATOR_OPEN";
  String zmeta4object = "SSE_H_EVALUATOR_OPEN";
  String znodo = "SSE_H_EVALUATOR_OPEN";
  
  String zoutputdef = zsubsesion + "!" + znodo + "[*]";
  String zmove = znodo + ":" + znodo + "[FIRST]";
  String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
  
  String zSCONMEVALPROC = zcomun + "SCO_NM_EVAL_PROC"; 
  String zSCODTSTEVPER = zcomun + "SCO_DT_ST_EV_PER"; 
  String zSCODTENDEVPER = zcomun + "SCO_DT_END_EV_PER"; 
  String zSTDNJOBCODE = zcomun + "STD_N_JOB_CODE";
  String zSCOIDDOCAPP = zcomun + "SCO_ID_DOC_APP"; 

  String zSSEDEF = zcomun+ "SSE_DEF";
  
  String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_H_EVALUATOR_OPEN.SSE_LOAD";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"/>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

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

<form action=" " method="post" name="oculto" id="oculto">
<input type="hidden" id="SCO_ID_DOC_APP" name="SCO_ID_DOC_APP" value="" />
</form>

<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=TranEss.getProperty("ev_ess.LinkHistEvOpen")%></td></tr>
<tr>
  <td><img alt="<%=TranEss.getProperty("ev_ess.LinkHistEvOpen")%>" src="/iconos/noname_historial_evaluaciones_ess_93_100.gif" width="93" height="100"  /></td>
  <td>
  <div class="descripcionfuncional"><%=TranEss.getProperty("ev_ess.DescrHistEvOpen")%></div>
  <ul class="listaenlace">
  <li><a class="enlacefuncional" tabindex="1" title="<%=TranEss.getProperty("ev_ess.LblHistEv")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=3"><%=TranEss.getProperty("ev_ess.LinkHistEv3")%></a></li>
  </ul>
  </td>
</tr>
</table>

<%if (zcount > 0) {
  String zposicions = "0";
  int zcontrol = 0;
  int zposicion =0;
  String  zPaint="";
%>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo " >
<td ><m4:label m4name="<%=zSCONMEVALPROC%>" htmlsafe = "true"/> </td>
<td><m4:label m4name="<%=zSCODTSTEVPER%>" htmlsafe = "true"/></td>
<td><m4:label m4name="<%=zSCODTENDEVPER%>" htmlsafe = "true"/></td>
<td><m4:label m4name="<%=zSTDNJOBCODE%>" htmlsafe = "true"/></td>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
<m4:item m4name="<%=zSSEDEF%>" htmlsafe = "true" m4varname="zSSEDEFVal"/>
<m4:item m4name="<%=zSCOIDDOCAPP%>" htmlsafe = "true" m4varname="zIDDOC"/>
<%if (!zIDDOC.equals("")) {zIDDOC = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIDDOC);}%>

<%zposicions = m4lix;
  zposicion = Integer.valueOf(zposicions).intValue();
  zcontrol = zposicion%2;
if (zcontrol==0){zPaint="";}else{zPaint="2";}%>
<tr>
  <td class="fuentevalor<%=zPaint%>">
  <%if (zSSEDEFVal.equals("1")){%>
  <a title="<%=Tran.getProperty("Label.VerDet")%>" href="javascript:navegar ('<%=zposicions%>');"><m4:item m4name="<%=zSCONMEVALPROC%>" htmlsafe = "true" /></a>&nbsp;&nbsp 
  <%if (!zIDDOC.equals("")) {%>
    <a href="javascript:m4valor('oculto','SCO_ID_DOC_APP','<%=zIDDOC%>','set');ssco_manage_document('view','oculto','SCO_ID_DOC_APP');"> <img alt="<%=Tran.getProperty("Label.VerDoc")%>" src="/iconos/book_16.gif" width="14" height="14" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
  <%}%> 
  <%}else{%>
  <m4:item m4name="<%=zSCONMEVALPROC%>" htmlsafe = "true"/>&nbsp;&nbsp 
  <%if (!zIDDOC.equals("")) {%>
    <a href="javascript:m4valor('oculto','SCO_ID_DOC_APP','<%=zIDDOC%>','set');ssco_manage_document('view','oculto','SCO_ID_DOC_APP');"> <img alt="<%=Tran.getProperty("Label.VerDoc")%>" src="/iconos/book_16.gif" width="14" height="14" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
  <%}%>
  <%}%>
  </td>
  <td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCODTSTEVPER%>" htmlsafe = "true"/></td>
  <td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCODTENDEVPER%>" htmlsafe = "true"/></td>
  <td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSTDNJOBCODE%>" htmlsafe = "true"/></td>
</tr> 

</m4:loop>
</table>
<%}else{%>
 <div class="fuentenodatos"><%=TranEss.getProperty("ev_ess.LblHistOpenNodata")%></div>
 <br/> <br/><br/> <br/>
<%}%>




