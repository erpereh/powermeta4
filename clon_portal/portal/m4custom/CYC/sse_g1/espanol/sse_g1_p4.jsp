<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html >
<html>
<head><%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../../../../library/jquery-2.1.3.min.js"></script> 
<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>  
<%@ include file="../../sse_g1/sse_g1_trans.jsp" %>
<title><%=sse_g1Ess.getProperty("Title.sse_g1_p4")%></title>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
<script type="text/javascript">  
function mod(ord){
m4valor("ocult","zPos",ord,"set")
m4submit("ocult");
}

function borrar(ord,name,phone,ice){
m4valor("oculto","STD_OR_CONTACT",ord,"set");
m4valor("oculto","STD_N_CONTACT",name,"set");
m4valor("oculto","STD_PHONE_NUMBER_1",phone,"set");
m4valor("oculto","SCO_ICE",ice,"set");
m4submit("oculto");
}
</script>
</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_HR_CONTACT";
   String zmeta4object = "SSE_HR_CONTACT";
   String znodo = "M4T_HR_CONTACT";
   String ztipocarga = "M4T";     
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV";             
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
String  zcountv = String.valueOf(zcounti);
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Title.sse_g1_p4Des")%></td></tr>
<tr>
<td><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p4Des")%><"title="<%=sse_g1Ess.getProperty("Title.sse_g1_p4Des")%><" src="/iconos/noname_mujer_53_100.gif" width="100" height="100" /></td>
<td>
  <div class="descripcionfuncional"><%=sse_g1Ess.getProperty("Label.sse_g1_p4Des")%> (In Case of Emergency)</div>
  <ul class="listaenlace">
  <li><a class="enlacefuncional"title="<%=sse_g1Ess.getProperty("Link.sse_g1_p4new")%>"tabindex="1" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp?estado=11"><%=sse_g1Ess.getProperty("Link.sse_g1_p4new")%></a></li>
  </ul>
  </td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="oculto" id="oculto">
<input type="hidden" id="TAG" name="TAG" value="SSE_HR_CONTACT" />
<input type="hidden" id="REC" name="REC" value="" />
<input type="hidden" id="ACC" name="ACC" value="ANULAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_HR_CONTACT" />
<input type="hidden" id="STD_OR_CONTACT" name="STD_OR_CONTACT"value=""/>
<input type="hidden" id="STD_N_CONTACT" name="STD_N_CONTACT"value=""/>
<input type="hidden" id="STD_INT_COUNTRY_CODE_1" name="STD_INT_COUNTRY_CODE_1"value=""/>
<input type="hidden" id="STD_INT_REGION_CODE_1" name="STD_INT_REGION_CODE_1"value=""/>
<input type="hidden" id="STD_NAT_REGION_CODE_1" name="STD_NAT_REGION_CODE_1"value=""/>
<input type="hidden" id="STD_PHONE_NUMBER_1" name="STD_PHONE_NUMBER_1"value=""/>
<input type="hidden" id="SCO_ICE" name="SCO_ICE"value=""/>
</form>
<form action="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp" method="post" name="ocult" id="ocult">
<input type="hidden" name="estado" id="estado" value="11" />
<input type="hidden" name="zPos" id="zPos" value="" />
</form>
<% if (zcounti > 0){String zposicions = "0";int zcontrol = 0; String zPaint="";int zposicion =0; %>
<table class = "tablaestados" cellspacing="0" width="100%">
<tr class="tablaestadosceldatitulo">
<td class = "tablaestadosceldatitulo"> <m4:label  item="STD_N_CONTACT" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td  class = "tablaestadosceldatitulo"> <m4:label  item="STD_INT_COUNTRY_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td> 
<td  class = "tablaestadosceldatitulo"> <m4:label  item="STD_INT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td> 
<td  class = "tablaestadosceldatitulo"> <m4:label  item="STD_NAT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td> 
<td  class = "tablaestadosceldatitulo"> <m4:label  item="STD_PHONE_NUMBER_1" htmlsafe="true" outputdef="<%=znodo%>"/></td> 
<td   class = "tablaestadosceldatitulo" > <m4:label  item="SCO_ICE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td   class = "tablaestadosceldatitulo" > </td>
</tr>
<m4:dataloop outputdef="<%=znodo%>">
<m4:current m4varname="current" outputdef="<%=znodo%>"/>
<%zposicion = Integer.valueOf(current).intValue();zcontrol = zposicion%2;%>
<%if (zcontrol==0){zPaint="";}else{zPaint="2";}%>
<tr>
<td  class="fuentevalor<%=zPaint%>"><a  title="<%=Tran.getProperty("Button.Modify")%>"alt="<%=Tran.getProperty("Button.Modify")%>" href="javascript:mod('<%=current%>');"><m4:item  item="STD_N_CONTACT" htmlsafe="true" outputdef="<%=znodo%>"/></a></td>
<td  class="fuentevalor<%=zPaint%>"><m4:item  item="STD_INT_COUNTRY_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td  class="fuentevalor<%=zPaint%>"><m4:item  item="STD_INT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td  class="fuentevalor<%=zPaint%>"><m4:item  item="STD_NAT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td  class="fuentevalor<%=zPaint%>"><m4:item  item="STD_PHONE_NUMBER_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td  class="fuentevalor<%=zPaint%>" ><m4:item  item="SCO_ICE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class="fuentevalor<%=zPaint%>"><a title = "<%=Tran.getProperty("Button.Delete")%>" href="javascript:borrar('<m4:item  item="STD_OR_CONTACT" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true"/>','<m4:item  item="STD_N_CONTACT" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true"/>','<m4:item  item="STD_PHONE_NUMBER_1" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true"/>','<m4:item  item="SCO_ICE" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true"/>');"><img alt="<%=Tran.getProperty("Button.Delete")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" /></a></td>
</tr> 
</m4:dataloop>
</table>
<br />
<%} else {%>  
<div class="fuentenodatos"><%=sse_g1Ess.getProperty("Label.sse_g1_p4NoData")%></div>
<%} %>    
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>

<script type="text/javascript">
  
  function cambiaono(){
    var dato = false; 
    $('.tablaestados tr[class!="tablaestadosceldatitulo"]').each(function(indi){
      if($(this).find('td').get(5).innerHTML==0){
        dato=true;     
      }
    });
    return dato;
  }

  function cambato(){
    $('.tablaestados tr[class!="tablaestadosceldatitulo"]').each(function(indi){
      $(this).find('td').get(5).innerHTML = new Number($(this).find('td').get(5).innerHTML)+1;
    });
  }

  $(document).ready(function() {
    if( cambiaono() ) { cambato(); }
  });

</script>

</body>
</html>


