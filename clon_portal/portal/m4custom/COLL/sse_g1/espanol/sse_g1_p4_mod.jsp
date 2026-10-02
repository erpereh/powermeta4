<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html >
<html>
<head><%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<%@ include file="../../sse_g1/sse_g1_trans.jsp" %>
<script	src="../../../../library/jquery-2.1.3.min.js"></script>
<title><%=sse_g1Ess.getProperty("Title.sse_g1_p4_mod")%></title>
<%
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
	if ((estado==null)||(estado.equals(""))){estado="0";}
	if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
	String zPos = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPos");
	
%>
<script type="text/javascript">
function comprobar(){
var ncontac = new m4objvalidacion('_alfanum','1','62','','',false);
var oalfanum = new m4objvalidacion('_alfanum','1','11','',false);	
var num = new m4objvalidacion('_num','1','99','',false);	
var error = 0;
var texto =m4getmessage("_sl_co_gn_1")+"\n";
ncontac.m4validar(m4objeto("STD_N_CONTACT","NombreFormulario"));
oalfanum.m4validar(m4objeto("STD_PHONE_NUMBER_1","NombreFormulario"));
num.m4validar(m4objeto("SCO_ICE","NombreFormulario"));
if (ncontac.resultado == false){
	texto = texto + m4getmessage("_sl_co_g1_1")+"\n";
	error = 1;
}
if (oalfanum.resultado == false){
	texto = texto + m4getmessage("_sl_co_g1_2")+"\n";
	error = 1;
}
if (num.resultado == false){
	texto = texto + m4getmessage("_sl_co_g1_3")+"\n";
	error = 1;
}	
if (error == 1){
	alert(texto);
	return;
}else {
	m4submit("NombreFormulario") ;
}
}

function mod(ord){
m4valor("ocult","zPos",ord,"set")
m4submit("ocult");
}

function pendientes(ord){
var parametros = new Array("TAG","REC","ACC","NOD");
var valores = new Array("SSE_HR_CONTACT",ord,"BORRAR","SSE_HR_CONTACT");
m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
}
</script>
</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_HR_CONTACT";
   String zmeta4object = "SSE_HR_CONTACT";
   String znodo = "SSE_HR_CONTACT";
   String znodo1 = "M4T_HR_CONTACT";
   String ztipocarga = "SSE";
   
   String zventanas = "10";
   int zvuelta = 5;
   String zdireccion = "sse_g1/sse_g1_p4_mod.jsp";
   String zestado = "11";

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
      String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
   String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>" ><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>"  value="<%=zmove%>"/></m4:move>
<%
	int  zcount  = 0;
	int  zcounti  = 0;
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);

	} catch(Exception e) {}
	String zSTD_OR_CONTACT="";
	String zSTD_N_CONTACT="";
	String zSTD_PHONE_NUMBER1="";
	String zSTDINTCOUNTRYCODE1="";
	String zSTDINTREGIONCODE1="";
	String zSTDNATREGIONCODE1="";
	String zSCO_ICE="";
	if ((zPos==null)||(zPos.equals(""))){zPos = "NA";}else{
	 String zmove1 = znodo1 + ":" +znodo1 + "[" + zPos + "]";
	%>
	<m4:move><m4:param name="<%=zsubsesion%>"  value="<%=zmove1%>"/></m4:move>
	<m4:item var="zSTD_OR_CONTACT" item="STD_OR_CONTACT" htmlsafe="true" outputdef="<%=znodo1%>"/>
	<m4:item var="zSTD_N_CONTACT" item="STD_N_CONTACT" htmlsafe="true" outputdef="<%=znodo1%>"/>
	<m4:item var="zSTDINTCOUNTRYCODE1" item="STD_INT_COUNTRY_CODE_1" htmlsafe="true" outputdef="<%=znodo1%>"/>
	<m4:item var="zSTDINTREGIONCODE1" item="STD_INT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo1%>"/>
	<m4:item var="zSTDNATREGIONCODE1" item="STD_NAT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo1%>"/>	
	<m4:item var="zSTD_PHONE_NUMBER1" item="STD_PHONE_NUMBER_1" htmlsafe="true" outputdef="<%=znodo1%>"/>
	<m4:item var="zSCO_ICE" item="SCO_ICE" htmlsafe="true" outputdef="<%=znodo1%>"/>
<%}%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Title.sse_g1_p4_modDes")%></td></tr>
<tr>
	<td><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p4_modDes")%>" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p4_modDes")%>"src="/iconos/noname_telefono_ess_107_100.gif" width="107" height="100" /></td>
	<td>
	<div class="descripcionfuncional"><%=sse_g1Ess.getProperty("Label.sse_g1_p4_modDes")%></div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p4")%>" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11"><%=sse_g1Ess.getProperty("Title.sse_g1_p4")%></a></li>
	</ul>
	</td>
</tr>
</table>
<!-- <div align="right"><button onclick="location.href=''" class	="enterlogin" style	="	background-color: #DC0028;
							background-repeat: no-repeat;
							border: 1px solid #DC0028;
							border-radius: 4px;
							color: #FFFFFF;
							margin: 10px;
							max-width: 150px;
							min-height: 20px;
							min-width: 110px;">
				Limpiar filtros</button></div> -->
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario" onsubmit="javascript:comprobar();">
<input type="hidden" id="TAG" name="TAG" value="SSE_HR_CONTACT" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_HR_CONTACT" />
<input type="hidden" id="STD_OR_CONTACT" name="STD_OR_CONTACT" value="<%=zSTD_OR_CONTACT%>" />
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr class = "tablaestadosceldatitulo">
	<td colspan="5"><%=sse_g1Ess.getProperty("Label.sse_g1_p4_modData")%></td>
	<td class="tablamenuright"><a title="<%=sse_g1Ess.getProperty("Title.sse_g1_p4")%>"href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11"><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p4")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>			
</tr>
<tr>
	<td class="fuentecampo">*&nbsp;<m4:label  item="STD_N_CONTACT" htmlsafe="true" outputdef="<%=znodo%>"/>
	<td class="fuentevalor"colspan="5"><input class="fuenteformulario" type="text" id="STD_N_CONTACT" name="STD_N_CONTACT" size="15" maxlength="62" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="STD_N_CONTACT" htmlsafe="true" outputdef="<%=znodo%>"/>"tabindex="1"  value="<%=zSTD_N_CONTACT%>"/></td>
	</td>
</tr>
<tr>
	
	<td class="fuentecampo"><m4:label  item="STD_INT_COUNTRY_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/>
	<td class="fuentevalor"><input class="fuenteformulario" type="text" id="STD_INT_COUNTRY_CODE_1" name="STD_INT_COUNTRY_CODE_1" size="2" maxlength="5" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="STD_INT_COUNTRY_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/>"tabindex="2"value="<%=zSTDINTCOUNTRYCODE1%>" /></td>
	</td>
	<td class="fuentecampo"><m4:label  item="STD_INT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/>
	<td class="fuentevalor"><input class="fuenteformulario" type="text" id="STD_INT_REGION_CODE_1" name="STD_INT_REGION_CODE_1" size="2" maxlength="5" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="STD_INT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/>"tabindex="2"value="<%=zSTDINTREGIONCODE1%>" /></td>
	</td>
	<td class="fuentecampo">&nbsp;<m4:label  item="STD_NAT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/>
	<td class="fuentevalor"><input class="fuenteformulario" type="text" id="STD_NAT_REGION_CODE_1" name="STD_NAT_REGION_CODE_1" size="2" maxlength="5" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="STD_NAT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/>"tabindex="2"value="<%=zSTDNATREGIONCODE1%>" /></td>
	</td>	
</tr>
</tr>
	<td class="fuentecampo">*&nbsp;<m4:label  item="STD_PHONE_NUMBER_1" htmlsafe="true" outputdef="<%=znodo%>"/>
	<td class="fuentevalor"><input class="fuenteformulario" type="text" id="STD_PHONE_NUMBER_1" name="STD_PHONE_NUMBER_1" size="15" maxlength="62" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="STD_PHONE_NUMBER_1" htmlsafe="true" outputdef="<%=znodo%>"/>"tabindex="2"value="<%=zSTD_PHONE_NUMBER1%>" /></td>
	</td>
	<td class="fuentecampo">*&nbsp;<m4:label  item="SCO_ICE" htmlsafe="true" outputdef="<%=znodo%>"/>
	<td class="fuentevalor" colspan="3"><input class="fuenteformulario" type="number" id="SCO_ICE" name="SCO_ICE" size="2" maxlength="2" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SCO_ICE" htmlsafe="true" outputdef="<%=znodo%>"/>" tabindex="3" value="<%=zSCO_ICE%>" />
		<!-- <select id="pos" name="pos">
			
		</select> -->
	</td>
	</td>
</tr>
<tr><td class="fuenteboton" colspan="6"><a title="<%=Tran.getProperty("Button.Send")%>"href="javascript:comprobar();" tabindex="4"><img alt="<%=Tran.getProperty("Button.Send")%>" src="/iconos/icono_enviar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td></tr>
</table>
</form>
<% 
 if (zcounti > 0){ 
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
	String zPaint="";
	%>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;</td>
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label  item="STD_N_CONTACT" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label  item="STD_INT_COUNTRY_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label  item="STD_INT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label  item="STD_NAT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>	
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label  item="STD_PHONE_NUMBER_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="tablaestadosceldatitulo" colspan="2">&nbsp;<m4:label  item="SCO_ICE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>

<m4:dataloop outputdef="<%=znodo%>">
	<m4:current m4varname="current" outputdef="<%=znodo%>"/>
<%	zposicions = current;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
%>
<%if (zcontrol==0){zPaint="";}else{zPaint="2";}%>
<tr>
	<td class="fuentecampoaccion<%=zPaint%>">&nbsp;<m4:item  item="N_ACCION" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor<%=zPaint%>" >&nbsp;<m4:item  item="STD_N_CONTACT" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor<%=zPaint%>">&nbsp;<m4:item  item="STD_INT_COUNTRY_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor<%=zPaint%>">&nbsp;<m4:item  item="STD_INT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor<%=zPaint%>">&nbsp;<m4:item  item="STD_NAT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>	
	<td class="fuentevalor<%=zPaint%>" >&nbsp;<m4:item  item="STD_PHONE_NUMBER_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor<%=zPaint%>">&nbsp;<m4:item  item="SCO_ICE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentebotonright<%=zPaint%>"><a title="<%=Tran.getProperty("Button.Delete2")%>"href="javascript:pendientes('<m4:item  item="ORDINAL" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true"/>');"><img class="tablamenuright" alt="<%=Tran.getProperty("Button.Delete2")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)"  /></a></td>
</tr>
	</m4:dataloop>
</table>
<%@include file="../../sse_generico/espanol/generico_ventanas.jsp"%>
<%}%>	
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
<script type="text/javascript">	m4focus("NombreFormulario","STD_N_CONTACT");</script>
<m4:endpage/>
<%
   String zsubsesion10 = "SSE_HR_CONTACT";
   String zmeta4object10 = "SSE_HR_CONTACT";
   String znodo10 = "M4T_HR_CONTACT";
   String ztipocarga10 = "M4T";     
   String zoutputdef10 = zsubsesion10 + "!" + znodo10 + "[*]";
   String zmetodocarga10 = "CARGA:" + zsubsesion10 + "!SSE_PRINCIPAL.CARGA_CV";      				
%>
<m4:startpage m4task="<%=zsubsesion10%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object10%>" m4name="<%=zsubsesion10%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion10,"SSE_PRINCIPAL","","NIVEL","0");
} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga10%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga10%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo10%>" ><m4:param name="m4name0" value="<%=zoutputdef10%>"/></m4:outputdef>
<m4:endjob/>
<%
int  zcount10  = 0;int  zcounti10  = 0;	int aux =0;
try {
    M4Operations m = new M4Operations(request);
    zcount10 = m.getCount(znodo10,zsubsesion10,znodo10);
    zcounti10 = m.getCountInClient(znodo10,zsubsesion10,znodo10);
} catch(Exception e) {}
String	zcountv10 = String.valueOf(zcounti10);
%>
<form action="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp" method="post" name="ocult" id="ocult">
<input type="hidden" name="estado" id="estado" value="11" />
<input type="hidden" name="zPos" id="zPos" value="" />
</form>
<% if (zcounti10 > 0){String zposicions10 = "0";int zcontrol10 = 0;	String zPaint10="";int zposicion10 =0; %>
<table class = "tablaestados" cellspacing="0" width="100%" style="padding-top: 50px;">
<tr class="tablaestadosceldatitulo">
<td class = "tablaestadosceldatitulo"> <m4:label  item="STD_N_CONTACT" htmlsafe="true" outputdef="<%=znodo10%>"/></td>
<td  class = "tablaestadosceldatitulo"> <m4:label  item="STD_INT_COUNTRY_CODE_1" htmlsafe="true" outputdef="<%=znodo10%>"/></td> 
<td  class = "tablaestadosceldatitulo"> <m4:label  item="STD_INT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo10%>"/></td> 
<td  class = "tablaestadosceldatitulo"> <m4:label  item="STD_NAT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo10%>"/></td> 
<td  class = "tablaestadosceldatitulo"> <m4:label  item="STD_PHONE_NUMBER_1" htmlsafe="true" outputdef="<%=znodo10%>"/></td> 
<td   class = "tablaestadosceldatitulo" > <m4:label  item="SCO_ICE" htmlsafe="true" outputdef="<%=znodo10%>"/></td>
</tr>
<m4:dataloop outputdef="<%=znodo10%>">
<m4:current m4varname="current" outputdef="<%=znodo10%>"/>
<%zposicion10 = Integer.valueOf(current).intValue();zcontrol10 = zposicion10%2;%>
<%if (zcontrol10==0){zPaint10="";}else{zPaint10="2";}aux += 1;%>
<tr>
<td  class="fuentevalor<%=zPaint10%>"><a  title="<%=Tran.getProperty("Button.Modify")%>"alt="<%=Tran.getProperty("Button.Modify")%>" href="javascript:mod('<%=current%>');"><m4:item  item="STD_N_CONTACT" htmlsafe="true" outputdef="<%=znodo10%>"/></a></td>
<td  class="fuentevalor<%=zPaint10%>"><m4:item  item="STD_INT_COUNTRY_CODE_1" htmlsafe="true" outputdef="<%=znodo10%>"/></td>
<td  class="fuentevalor<%=zPaint10%>"><m4:item  item="STD_INT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo10%>"/></td>
<td  class="fuentevalor<%=zPaint10%>"><m4:item  item="STD_NAT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo10%>"/></td>
<td  class="fuentevalor<%=zPaint10%>"><m4:item  item="STD_PHONE_NUMBER_1" htmlsafe="true" outputdef="<%=znodo10%>"/></td>
<td  class="fuentevalor<%=zPaint10%>" ><m4:item  item="SCO_ICE" htmlsafe="true" outputdef="<%=znodo10%>"/></td>
</tr> 
</m4:dataloop>
</table>
<br />
<%} else {%>	
<div class="fuentenodatos"><%=sse_g1Ess.getProperty("Label.sse_g1_p4NoData")%></div>
<%}	%>		
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
<script type="text/javascript">
	/*var cont =  parseInt("<%=aux%>");
	var se = document.getElementById("pos");
	var opcion = se.options;
	for (var x = 0; x<=cont-1; x++) {
		var opt = document.createElement("option");
		opt.value = x.toString();
		opt.textContent = x.toString();
		se.options.add(opt);
		if (x.toString() == $('#SCO_ICE').val()) {
			opcion[x].setAttribute("selected", "selected");
		}
	}
	$(document).on('change', '#pos', function(event) {
	     $('#SCO_ICE').val($("#pos option:selected").text());
	});*/

</script>

<script type="text/javascript">
  
  function cambiaono(){
    var dato = false; 
    $('.tablaestados tr[class!="tablaestadosceldatitulo"]').each(function(indi){
      if(indi>3){
        if($(this).find('td').get(5).innerHTML==0){
          dato=true;     
        }
      }
    });
    return dato;
  }

  function cambato(){
    $('.tablaestados tr[class!="tablaestadosceldatitulo"]').each(function(indi){
      if(indi>3){
        $(this).find('td').get(5).innerHTML = new Number($(this).find('td').get(5).innerHTML)+1;
      }
    });
  }

  $( document ).ready(function() {
    if( cambiaono() ) { cambato(); }
  });

</script>


<script type="text/javascript">
	
	var ele = document.getElementById('SCO_ICE');
	ele.addEventListener('keyup', function(e) {
	    if(this.value=='0'){
	        this.value = '1';
	    }
	    //console.log(this.value);
	});

</script>


<m4:endpage/>
</body>
</html>


