<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<%@ include file="../../sse_g1/sse_g1_trans.jsp" %>
<title><%=sse_g1Ess.getProperty("Title.sse_g1_p5")%></title>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="11";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
<script type="text/javascript">  
function mod(ord){
m4valor("ocult","zPos",ord,"set")
m4submit("ocult");
}

function borrar(ord,name,dbirth,id_tyep){
m4valor("oculto","STD_OR_DEP_NB",ord,"set");
m4valor("oculto","SCO_GB_NAME",name,"set");
m4valor("oculto","STD_DT_BIRTH",dbirth,"set");
m4valor("oculto","STD_ID_DEP_TYPE",id_tyep,"set");


m4submit("oculto");
}
</script>
</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_FAMILY";
   String zmeta4object = "SSE_FAMILY";
   String znodo = "M4T_FAMILY";
   ;
   String ztipocarga = "M4T";     
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";      				
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
int  zcount  = 0;int  zcounti  = 0;	
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
} catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Title.sse_g1_p5Des")%></td></tr>
<tr>
<td><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p5Des")%><"title="<%=sse_g1Ess.getProperty("Title.sse_g1_p5Des")%><" src="/iconos/family_123_100.gif" width="100" height="100" /></td>
<td>
	<div class="descripcionfuncional"><%=sse_g1Ess.getProperty("Label.sse_g1_p5Des")%></div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional"title="<%=sse_g1Ess.getProperty("Link.sse_g1_p5new")%>"tabindex="1" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p5_mod.jsp?estado=11"><%=sse_g1Ess.getProperty("Link.sse_g1_p5new")%></a></li>
	</ul>
	</td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="oculto" id="oculto">
<input type="hidden" id="TAG" name="TAG" value="SSE_FAMILY" />
<input type="hidden" id="REC" name="REC" value="" />
<input type="hidden" id="ACC" name="ACC" value="ANULAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_FAMILY" />
<input type="hidden" id="STD_OR_DEP_NB" name="STD_OR_DEP_NB"value=""/>
<input type="hidden" id="SCO_GB_NAME" name="SCO_GB_NAME"value=""/>
<input type="hidden" id="STD_DT_BIRTH" name="STD_DT_BIRTH"value=""/>
<input type="hidden" id="STD_ID_DEP_TYPE" name="STD_ID_DEP_TYPE"value=""/>
</form>
<form action="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p5_mod.jsp" method="post" name="ocult" id="ocult">
<input type="hidden" name="estado" id="estado" value="11" />
<input type="hidden" name="zPos" id="zPos" value="" />
</form>
<% if (zcounti > 0){String zposicions = "0";int zcontrol = 0;	String zPaint="";int zposicion =0; %>
<table class = "tablaestados" cellspacing="0" width="100%">
<tr class="tablaestadosceldatitulo">
<td class = "tablaestadosceldatitulo"> <m4:label  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class = "tablaestadosceldatitulo"> <m4:label  item="STD_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/></td> 
<td class = "tablaestadosceldatitulo"> <m4:label  item="STD_DT_END" htmlsafe="true" outputdef="<%=znodo%>"/></td> 
<td class = "tablaestadosceldatitulo" > <m4:label  item="STD_N_DEP_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class = "tablaestadosceldatitulo" > <m4:label  item="STD_DT_BIRTH" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class = "tablaestadosceldatitulo" > </td>
</tr>
<m4:dataloop outputdef="<%=znodo%>">
<m4:current m4varname="current" outputdef="<%=znodo%>"/>
<%zposicion = Integer.valueOf(current).intValue();zcontrol = zposicion%2;%>
<%if (zcontrol==0){zPaint="";}else{zPaint="2";}%>
<tr>
<td  class="fuentevalor<%=zPaint%>"><a  title="<%=Tran.getProperty("Button.Modify")%>"alt="<%=Tran.getProperty("Button.Modify")%>" href="javascript:mod('<%=current%>');"><m4:item  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo%>"/></a></td>
<td  class="fuentevalor<%=zPaint%>"><m4:item  item="STD_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td  class="fuentevalor<%=zPaint%>"><m4:item  item="STD_DT_END" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td  class="fuentevalor<%=zPaint%>" ><m4:item  item="STD_N_DEP_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td  class="fuentevalor<%=zPaint%>" ><m4:item  item="STD_DT_BIRTH" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class="fuentevalor<%=zPaint%>"><a title = "<%=Tran.getProperty("Button.Delete")%>" href="javascript:borrar('<m4:item  item="STD_OR_DEP_NB" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true"/>','<m4:item  item="SCO_GB_NAME" jsafe="true" outputdef="<%=znodo%>" htmlsafe="true"/>','<m4:item  item="STD_DT_BIRTH" jsafe="true" outputdef="<%=znodo%>" htmlsafe="true"/>','<m4:item  item="STD_ID_DEP_TYPE" jsafe="true" outputdef="<%=znodo%>" htmlsafe="true"/>');"><img alt="<%=Tran.getProperty("Button.Delete")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" align="right"/></a></td>
</tr> 
</m4:dataloop>
</table>
<br />
<%} else {%>	
<div class="fuentenodatos"><%=sse_g1Ess.getProperty("Label.sse_g1_p5NoData")%></div>
<%}	%>		
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>


