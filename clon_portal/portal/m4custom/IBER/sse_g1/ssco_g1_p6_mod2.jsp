<%
String znombregrupo=Tran.getProperty("Label.All");
String z1=Tran.getProperty("Label.ssco_1");
String z0=Tran.getProperty("Label.ssco_0");
String zT = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zT");
if ((zT==null)||(zT.equals(""))){zT="0";}

%>
<script type="text/javascript">
function nav_evaluate (id_hr,ord,swhere) {
m4valor("oculto3","id",id_hr,"set");
m4valor("oculto3","ord",ord,"set");
m4submit("oculto3");  
}

function filtrar(){
m4submit("oculto");
}
function add_new(type,zfiltrogro,zT)
{
var dir="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p6_mod.jsp?zvis=1&ztype="+type+"&zfiltrogroup="+zfiltrogro+"&zT="+zT;

window.open(dir,'Vis','width=650;height=40,top=50,resizable,scrollbars');
}

</script>
</head>
<body>
<%
String zsubsesion = "SSCO_HR_DOC_CHECK";
String zmeta4object = "SSCO_HR_DOC_CHECK";
String znodo = "SSCO_HR_DOC_FILTER";
String znodo1 = "SSCO_TP_DOC_GROUP";

String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";

String zdireccion = "sse_g1/ssco_g1_p6_mod2.jsp";
String zventanas = "40";
int zvuelta = 5;
String zestado = "31";

int zregistroinicial = Integer.valueOf(zinicios).intValue();
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;
String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";


String znodogroup = "SSCO_DOC_GROUP";
String zoutputdefgroup = zsubsesion + "!" + znodogroup + "[*]";
String zmovegroup = znodogroup + ":" + znodogroup + "[FIRST]";
String zcomungroup = znodogroup + ":" + zsubsesion + "!" + znodogroup + "[&VAR.m4lix]" + ".";


String zmetodocarga = "CARGA:" + zsubsesion + "!SSCO_TP_DOC_GROUP.SSCO_LOAD";
%>
<% 
String scount1="";


%>

<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<% try {
      M4Operations m = new M4Operations(request); 
      m.setItem(zsubsesion,"SSCO_TP_DOC_GROUP","","GROUP_FILTER",zfiltrogroup);
        
    } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
<m4:exec node="<%=znodo1%>" alias="counttipos" method="COUNT" m4object="<%=zsubsesion%>"/>
<m4:endjob/>
<m4:beginjob/>

<m4:outputexec var="scount1" alias="counttipos"/>
<m4:outputdef m4alias="<%=znodogroup%>" ><m4:param name="m4name0" value="<%=zoutputdefgroup%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>" ><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>

<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>

<%
int itipoHr=0;
String zmoveso=znodo1 + ":" + znodo1 ;
String zalias1="";
int hb = 0;
  try {
    itipoHr = Integer.parseInt(scount1); 
    for (hb = 0; hb < itipoHr; hb++){
      zmoveso=znodo1 + ":" + znodo1 +"["+String.valueOf(hb)+"]";
      zalias1="SSCO_HR_DOC_FILTER"+String.valueOf(hb);
    %>
      <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveso%>"/></m4:move>
      <m4:outputdef m4alias="<%=zalias1%>"><m4:param name="m4name0" value="SSCO_HR_DOC_CHECK!SSCO_HR_DOC_FILTER[*]"/></m4:outputdef>
      <%
    }
  } catch(Exception e) {}
%>


<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovegroup%>"/></m4:move>
<%
  int  zcount  = 0;
  int  zcounti  = 0;  
  int  zcounti1  = 0; 
  try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
      zcounti1 = m.getCountInClient(znodo1,zsubsesion,znodo1);
  
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
  
%>

<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Link.ssco_g1_p6check")%></td></tr>
<tr>
  <td><img alt="<%=sse_g1Ess.getProperty("Title.ssco_g1_p6Des")%>" title="<%=sse_g1Ess.getProperty("Title.ssco_g1_p6Des")%>" src="/iconos/family_123_100.gif" width="100" height="100" /></td>
  <td><div class="descripcionfuncional"><%=sse_g1Ess.getProperty("Label.ssco_g1_p6checkDes")%><br/><br/></div>
  <ul class="listaenlace"><li><a class="enlacefuncional" tabindex="1" title="<%=sse_g1Ess.getProperty("Title.ssco_g1_p6Des")%>" href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p6.jsp?estado=11"><%=sse_g1Ess.getProperty("Title.ssco_g1_p6")%><i></i></a></li></ul>
  </td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p6_mod2.jsp" method="post" name="oculto" id="oculto">
<input type="hidden" id="zinicios" name="zinicios"  value="" />
<input type="hidden" id="zT" name="zT"  value="<%=zT%>" />
<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo" colspan="6"><%=Tran.getProperty("Label.Filter")%></td></tr>
<tr>
<td class="fuentecampofiltro" ><m4:label  item="SCO_NM_GROUP" htmlsafe="true" outputdef="<%=znodogroup%>"/>
  <select title="<%=sse_g1Ess.getProperty("Label.ssco_g1_p6selgrp")%>"id="zfiltrogroup" name="zfiltrogroup" class="fuenteformulario200" onchange="javascript:filtrar();" >
  <option value=""><%=znombregrupo%></option>
  <m4:dataloop outputdef="<%=znodogroup%>">
  <option id ="<m4:item  item="SCO_ID_GROUP" htmlsafe="true" outputdef="<%=znodogroup%>"/>"value="<m4:item  item="SCO_ID_GROUP" htmlsafe="true" outputdef="<%=znodogroup%>"/>"><m4:item  item="SCO_NM_GROUP" htmlsafe="true" outputdef="<%=znodogroup%>"/></option>
  </m4:dataloop>
  </select>
  <script type="text/javascript" language="Javascript1.5"><!--
    if ('<%=zfiltrogroup%>'!= ""){
      m4searchoptioness('oculto','zfiltrogroup','<%=zfiltrogroup%>');
      if ('<%=zT%>'=="1"){oculto.zfiltrogroup.disabled = true;}
    }
  --></script>
</td>
</tr> 
</table>
</form>
<form action="/servlet/CheckSecurity/JSP/sse_g3/ssco_g1_p6_mod2.jsp" method="post" name="oculto3" id="oculto3">
<input type="hidden" id="id" name="id"  value="" />
<input type="hidden" id="ord" name="ord"  value="" />
</form>
<%@ include file="../tc_docs/tc_doc_initialize_include.jsp" %>
<% if (zcounti1 > 0){String znodoaux="";String zmoveaux="";String zIdGroupAnt="";String zPaint="";int zcontrol = 0;%>
<%
//0:modo formulario 1:modo tabla
sgtc_zShowMode = "1";
//0:modo readonly 1:modo readwrite
sgtc_zReadWrite = "0";

%>   
<table class = "tablaestados" cellspacing="0" width="100%" >
<tr class="tablaestadosceldatitulo">
<td class = "tablaestadosceldatitulo"> <m4:label  item="SCO_NM_GROUP" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
<td class = "tablaestadosceldatitulo"> <m4:label  item="SCO_NM_DOC_TYPE" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
<td class = "tablaestadosceldatitulo"><m4:label  item="SCO_COMPULSORY" htmlsafe="true" outputdef="<%=znodo1%>"/></td> 
<td class = "tablaestadosceldatitulo"><m4:label  item="SCO_ID_DOC" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class = "tablaestadosceldatitulo"> <m4:label  item="SCO_NM_DOC_STATE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class = "tablaestadosceldatitulo"><m4:label  item="SCO_DT_EMISSION" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class = "tablaestadosceldatitulo" colspan="2"> <m4:label  item="SCO_DT_VALID" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class = "tablaestadosceldatitulo"> </td>
</tr>
<m4:dataloop outputdef="<%=znodo1%>">
<m4:item m4varname="zSCO_ID_GROUP" item="SCO_ID_GROUP" htmlsafe="true" outputdef="<%=znodo1%>" />
<m4:item m4varname="zSCO_ID_DOC_TYPE" item="SCO_ID_DOC_TYPE" htmlsafe="true" outputdef="<%=znodo1%>" />
<m4:item m4varname="zSCO_COMPULSORY" item="SCO_COMPULSORY" htmlsafe="true" outputdef="<%=znodo1%>" />
<m4:current m4varname="current" outputdef="<%=znodo1%>"/>
<%zcontrol=zcontrol+1;zcontrol = zcontrol%2;if (zcontrol==0){zPaint="";}else{zPaint="2";}%>
<%znodoaux="SSCO_HR_DOC_FILTER"+current; zmoveaux =znodoaux+ ":" + "SSCO_HR_DOC_FILTER" + "[FIRST]";%>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveaux%>"/></m4:move>
<m4:count m4varname="zcountAux" m4place="remote" outputdef="<%=znodoaux%>"/>
<tr>
<td  class="fuentevalor<%=zPaint%>">
<%if (!(zSCO_ID_GROUP.equals(zIdGroupAnt))){zIdGroupAnt=zSCO_ID_GROUP;%>
<m4:item  item="SCO_NM_GROUP" htmlsafe="true" outputdef="<%=znodo1%>"/>
<%}%>
</td>
<td  class="fuentevalor<%=zPaint%>"><m4:item  item="SCO_NM_DOC_TYPE" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
<td  class="fuentevalor<%=zPaint%>"><%if (zSCO_COMPULSORY.equals("0")){%> <%=z0%><% }else{%><%=z1%> <% }%></td>
<%if (!(zcountAux.equals("0"))){%>
<m4:dataloop outputdef="<%=znodoaux%>">
  <m4:current m4varname="currentaux" outputdef="<%=znodoaux%>"/>
  <m4:item item="<%=sgtc_zIDInputIDDOC%>" var="sgtc_zIDDOC" htmlsafe="true" outputdef="<%=znodoaux%>"/>
  <%if (!sgtc_zIDDOC.equals("")) {sgtc_zIDDOC = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "tc_docs", sgtc_zIDDOC);}%>
  <m4:item item="<%=sgtc_zIDInputTITLEDOC%>" var="sgtc_zTITLEDOC" htmlsafe="true" outputdef="<%=znodoaux%>"/>
  <%sgtc_zNMInputIDDOC = sgtc_zIDInputIDDOC + "_" + current;%>
  <%sgtc_zIDCSSRow = "fuentevalor"+zPaint;%>
  <%if (!(currentaux.equals("0"))){%>
<%if (zcontrol==0){zPaint="";}else{zPaint="2";}%>
<tr>
<td  class="fuentevalor<%=zPaint%>" colspan="3"></td>
<% }%>

<td  class="fuentevalor<%=zPaint%>"><input type="hidden" id="<%=sgtc_zNMInputIDDOC%>" name="<%=sgtc_zNMInputIDDOC%>" value="<%=sgtc_zIDDOC%>"/>
<%@ include file="../tc_docs/tc_doc_include.jsp" %></td>
<td  class="fuentevalor<%=zPaint%>"><m4:item  item="SCO_NM_DOC_STATE" htmlsafe="true" outputdef="<%=znodoaux%>"/></td>
<td  class="fuentevalor<%=zPaint%>"><m4:item  item="SCO_DT_EMISSION" htmlsafe="true" outputdef="<%=znodoaux%>"/></td>
<td  class="fuentevalor<%=zPaint%>"><m4:item  item="SCO_DT_VALID" htmlsafe="true" outputdef="<%=znodoaux%>"/></td>
<%if (!(currentaux.equals("0"))){%>
<td class="fuentevalor<%=zPaint%>" colspan="1"><a title = "<%=Tran.getProperty("Button.Delete")%>" href="javascript:borrar('<m4:item  item="SCO_ID_GROUP" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true"/>','<m4:item  item="SCO_ID_DOC_TYPE" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true"/>','<m4:item  item="SCO_COMPULSORY" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true"/>','<m4:item  item="SCO_ID_DOC" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true"/>','<m4:item  item="SCO_OR_HR_DOC" jsafe="true" outputdef="<%=znodo%>" htmlsafe="true"/>','<m4:item  item="SCO_DT_EMISSION" jsafe="true" outputdef="<%=znodo%>" htmlsafe="true"/>','<m4:item  item="SCO_ID_DOC_STATE" jsafe="true" outputdef="<%=znodo%>" htmlsafe="true"/>','<m4:item  item="SCO_DT_VALID" jsafe="true" outputdef="<%=znodo%>" htmlsafe="true"/>');"><img alt="<%=Tran.getProperty("Button.Delete")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" align="right"/></a></td>
<% }%>
</tr>
</m4:dataloop>
<% }else{%>
<td  class="fuentevalor<%=zPaint%>" ><%=sse_g1Ess.getProperty("Label.ssco_g1_p6_NoDoc")%></td>
<td colspan="5"class="fuentebotonright<%=zPaint%>"><a title="<%=sse_g1Ess.getProperty("Link.ssco_g1_p6new")%>"href="javascript:add_new('<%=zSCO_ID_DOC_TYPE%>','<%=zfiltrogroup%>','<%=zT%>');"><img  alt="<%=sse_g1Ess.getProperty("Link.ssco_g1_p6new")%>" src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /></a></td>
</tr> 
</td>
 <% }%>
</tr>
</m4:dataloop>
</table>
<%} else {%>  
<div class="fuentenodatos"><%=sse_g1Ess.getProperty("Label.ssco_g1_p6NoData")%></div>
<%} %>  