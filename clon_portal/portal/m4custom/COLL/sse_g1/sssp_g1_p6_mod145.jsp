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
   String zsubsesion = "SRSP_GENERAR_MOD_145";
   String zmeta4object = "SRSP_GENERAR_MOD_145";
   String znodo = "SRSP_GEN_145_HR_DOC";
   String znodo1 = "SRSP_GENERAR_MOD_145";

   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
   String zmetodocarga = "CARGA:" + zsubsesion + "!SRSP_GENERAR_MOD_145.SRSP_LOAD_FROM_ESS";      				
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
<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>" ><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:endjob/>
<%
int  zcount  = 0;int  zcounti  = 0;	
int  zcount1  = 0;int  zcounti1  = 0;	
String zHAY_ERROR = "";
String zN_ERROR = "";
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zcounti1 = m.getCountInClient(znodo1,zsubsesion,znodo1);
    zHAY_ERROR = m.getItem(znodo1,zmeta4object,znodo1,"","HAY_ERROR");
    zN_ERROR = m.getItem(znodo1,zmeta4object,znodo1,"","N_ERROR");
} catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);
String	zcountv1 = String.valueOf(zcounti1);
%>

</script>
</head>
<body>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Title.sssp_g1_p6_004")%></td></tr>
<tr>
<td><img alt="<%=sse_g1Ess.getProperty("Title.sssp_g1_p6_004")%><"title="<%=sse_g1Ess.getProperty("Title.sssp_g1_p6_004")%><" src="/iconos/family_123_100.gif" width="100" height="100" /></td>
<td>
	<div class="descripcionfuncional"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_004_001")%></div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional"title="<%=sse_g1Ess.getProperty("Link.sssp_g1_p6_001_l001")%>"tabindex="1" href="/servlet/CheckSecurity/JSP/sse_g1/sssp_g1_p6_sit.jsp?estado=11"><%=sse_g1Ess.getProperty("Link.sssp_g1_p6_001_l001")%></a></li>
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
<% if (zcounti > 0){String zposicions = "0";int zcontrol = 0;	String zPaint="";int zposicion =0; %>
<table class = "tablaestados" cellspacing="0" width="100%">
<tr class="tablaestadosceldatitulo">
<td class = "tablaestadosceldatitulo"><m4:label  item="SCO_ID_DOC" htmlsafe="true" outputdef="<%=znodo%>"/></td> 
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
<m4:item item="<%=sgtc_zIDInputIDDOC%>" var="sgtc_zIDDOC" htmlsafe="true" outputdef="<%=znodo%>"/>
<m4:item item="<%=sgtc_zIDInputTITLEDOC%>" var="sgtc_zTITLEDOC" htmlsafe="true" outputdef="<%=znodo%>"/>
<%if (!sgtc_zIDDOC.equals("")) {sgtc_zIDDOC = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "tc_docs", sgtc_zIDDOC);}%>
<%sgtc_zNMInputIDDOC = sgtc_zIDInputIDDOC + "_" + zposicion;%>
<%sgtc_zIDCSSRow = "fuentevalor" + zPaint;%>
<td  class="fuentevalor<%=zPaint%>"><input type="hidden" id="<%=sgtc_zNMInputIDDOC%>" name="<%=sgtc_zNMInputIDDOC%>" value="<%=sgtc_zIDDOC%>"/>
<%@ include file="../tc_docs/tc_doc_include.jsp" %></td>

</tr> 
</m4:dataloop>
<div class="fuentenodatos"><m4:item  item="N_ERROR" htmlsafe="true" outputdef="<%=znodo1%>"/></div>
</table>