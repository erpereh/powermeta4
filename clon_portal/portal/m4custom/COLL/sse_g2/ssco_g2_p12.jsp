
<%
String zsubsesion = "SSE_LAST_HR_PAY_DOCS";
String zmeta4object = "SSE_LAST_HR_PAY_DOCS";
String zmetodocarga = zsubsesion + "!SSE_LAST_HR_PAY_DOCS.CARGA";
String znodo = "SSE_LAST_HR_PAY_DOCS";

String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";   
 
String zventanas = "20000";
int zvuelta = 5;
String zdireccion = "sse_g2/ssco_g2_p12.jsp";
String zestado = "21";

// No se modifica en general.

int zregistroinicial = Integer.valueOf(zinicios).intValue();
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;
//String ztipocarga = "M4T";
String ztipocarga = "MOD";
  
String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
String zmove = znodo + ":" + znodo + "[zregistroinicial]";   
String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";

 // Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar 
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zSCO_DT_PAYMENT = zcomun + "SCO_DT_PAYMENT";
String zSCO_NM_DOC_GENERATED = zcomun + "SCO_NM_DOC_GENERATED";
//-----------------
	String zLIQUIDO = zcomun + "SSP_LIQUIDO";
	String zLIQUIDOEURO = zcomun + "SSP_LIQUIDO";
	String zSCO_NET = zcomun + "SCO_NET";
	String zSCO_SEL_PAY_P = zcomun + "SCO_SEL_PAY_P";
//-----------------
String zID_CURRENCY = zcomun + "ID_CURRENCY";
String zSCO_PAY_FREQ_PAYM = zcomun + "SCO_PAY_FREQ_PAYM";
String zSTD_OR_HR_PERIOD = zcomun + "STD_OR_HR_PERIOD";
String zSCO_PAY_DOC = zcomun + "SCO_PAY_DOC";
String zSTD_DT_START = zcomun + "STD_DT_START";

String zSSCO_COMES_FROM_OLD_DEVELOPMNT = zcomun + "SSCO_COMES_FROM_OLD_DEVELOPMNT";
String zSSCO_RETROACTIVITY_PAYS_FLAG = zcomun + "SSCO_RETROACTIVITY_PAYS_FLAG";
String zNMPAY = zcomun + "SCO_NM_PAY";

%>

<m4:startpage m4task="<%=zsubsesion%>"/>
    <m4:beginjob/>
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
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
} catch(Exception e) {}
String  zcountv = String.valueOf(zcounti);%>

<script type="text/javascript">
function recibo(dIdPaga,sRevision,dPayFreq,sNmPay,sOrPeriod){
dIdPaga = m4date_back(dIdPaga);
//var dir="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_rec.jsp?SCO_DT_ACCRUED_P=" + dIdPaga + "&SCO_SEL_PAY_P=" + sRevision + "&SCO_ID_PAY_FREQ_AC_P=" + dPayFreq + "&SCO_NM_PAY=" + sNmPay + "&SCO_OR_HR_PERIOD=" + sOrPeriod + "&NUM_REG=1&TYPELOAD=0";
var dir="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_rec.jsp?z_paga=" + dIdPaga + "&zrevision=" + sRevision + "&zmoneda=EUR" + "&znmpay=" + sNmPay;
//window.open(dir,'Vis','width=1024;height=768,left=0,top=50,resizable,scrollbars');
window.open(dir,'Vis','width=1024;height=768,left=0,top=50,resizable=yes,scrollbars=yes');
}


</script>
</head>
<body>
<%
if (zcounti > 0) {
    String zregistroinicials = String.valueOf(zregistroinicial);
    String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
    String zposicions = "0";
    int zcontrol = 0;
    int zposicion =0;
    int zLastPeriod =0;
    int zThisPeriod =0;
    String zOr_Period = "";

    String zoldDevelopment = "";
    String zoldDevRetroactivity = "";
		String zSelPayP = "";	//Tipo de paga

    String zparidad = "2";%>
 <!-- NUEVA FORMA DE VISUALIZAR LOS RECIBOS -->
<table width="100%">
  <tr>
    <td class="titulofuncional" colspan="2"><m4:label m4name="<%=ziterator%>" htmlsafe="true"/></td></tr>
  <tr>
    <td width="100" height="100"><img src="/iconos/noname_recibos_57_100.gif" width="100" height="100"</td>
    <td><div class="descripcionfuncional" > Consulta tus recibos de n&oacute;mina</td>
</tr>  
  <tr>
	<td colspan="2">
		<script> 
			var anio = "";
			var anioAct = "";
			var contador = 0;
			var selinicial = "";			
			var fecha = "";
			var tabla = "";
			var divanterior = "";
			var pieDePagina = "";

			
			function ocultarDivs() {				
				var divs = document.getElementsByTagName('div');
					for(var i=0; i<divs.length; i++) {
						if (divs[i].id.substring(0,7) == 'recibos'){
							divs[i].style.display = 'none';
						}
					}
			}
			
			function mostrardivoculto(id) {			
					
				div 		= document.getElementById(id);
				div.style.display = "";				
			}
			
			function mostrarRecibo(recibo){
				//window.open(recibo,'XXXXX','width=900,height=625, menubar=0, toolbar=0, directories=0, location=0, scrollbars=0, status=0');				
				window.open(encodeURI(recibo,'XXXXX',''));				
			}
			
			function seleccionarOpcion (valor,desplegable) {

				//alert("Buscamos opcion seleccionada : " + valor);
				var elDireccion = document.getElementById(desplegable);
				var options = elDireccion.options;
				for (var i = 0; i < options.length; i++) {
					if (options[i].value == valor) {
						options[i].setAttribute("selected", "selected");
					}
				}

			}
		</script>
		<div id="divprincipal" class="descripcionfuncional"> Seleccione el a&ntilde;o a consultar : &nbsp;
		<select id="anios" onchange="ocultarDivs();mostrardivoculto(this.value);" name="anios">
		<m4:loop from="0" to="<%=zregistrofinals%>">
		<script>
			fecha 	=  '<m4:item m4name="<%=zSCO_DT_PAYMENT%>" htmlsafe="true"/>';
			anioAct 	= fecha.substring(6,10);
			
			if (contador == 0) {
				anio = anioAct;
				divanterior = anioAct;				
				selinicial =  '<option value="recibos' + anioAct + '"> ' + anioAct +' - (';
				tabla += '<div id="recibos' + anioAct + '" style="">' + '\n'
				tabla += '<table class="tablaestados" cellspacing="0" width="100%" >' + '\n';	
				tabla += '<tr class="tablaestadosceldatitulo">' + '\n';
				tabla += '<td><m4:label m4name="<%=zSCO_NM_DOC_GENERATED%>" htmlsafe="true"/></td>' + '\n';
				tabla += '<td><m4:label m4name="<%=zSCO_DT_PAYMENT%>" htmlsafe="true"/></td>' + '\n';
				tabla += '<td><m4:label m4name="<%=zSCO_PAY_DOC%>" htmlsafe="true"/></td>' + '\n';
				tabla += ' </tr>' + '\n';	
			}				
			
			if (anio != anioAct) {
				selinicial = selinicial + contador +') </option>'
				document.write(selinicial);
				selinicial ='<option value="recibos' + anioAct + '"> ' + anioAct +' - (';
				tabla += '</tr>' + '\n';
				tabla += '<tr> <td colspan="3"> &nbsp; </td> </tr>' + '\n';
				tabla += '<tr> <td colspan="3"> &nbsp; </td> </tr>' + '\n';
				tabla += '<tr> <td colspan="3"> &nbsp; </td> </tr>' + '\n';
				tabla += '<tr> <td colspan="3"> <p> <b>Impresi&oacute;n de recibos : Para imprimir los recibos presiona sobre <img src="/iconos/lu_zoom_16.png"/> para visualizarlo y las teclas Ctrl + P para imprimirlo, también puedes seleccionar la opci&oacute;n imprimir de Internet Explorer.</b></p> ' + '\n';
			    //tabla += '<center> <img src="/iconos/OpcionImprimirIE.png"></center> </td> </tr>' + '\n';
				tabla += '</td> </tr>' + '\n';				
				tabla += '</table>' + '\n'			
				tabla += '</div>' + '\n'				
				tabla += '<div id="recibos' + anioAct + '" style="display:none;">' + '\n'
				tabla += '<table class="tablaestados" cellspacing="0" width="100%" >' + '\n';
				tabla += '<tr class="tablaestadosceldatitulo">' + '\n';
				tabla += '<td><m4:label m4name="<%=zSCO_NM_DOC_GENERATED%>" htmlsafe="true"/></td>' + '\n';
				tabla += '<td><m4:label m4name="<%=zSCO_DT_PAYMENT%>" htmlsafe="true"/></td>' + '\n';
				tabla += '<td><m4:label m4name="<%=zSCO_PAY_DOC%>" htmlsafe="true"/></td>' + '\n';
				tabla += ' </tr>' + '\n';
				anio = anioAct;
				contador = 0;
			}
			
			tabla += '<tr class="fuentevalor<%=zparidad%>">' + '\n';
			tabla += '<td>' + '\n';
			tabla += '&nbsp;<m4:item m4name="<%=zSCO_NM_DOC_GENERATED%>" htmlsafe="true"/>' + '\n';
			tabla += '</td>' + '\n';
			tabla += '<td>' + '\n';
			tabla += '&nbsp;<m4:item m4name="<%=zSCO_DT_PAYMENT%>" htmlsafe="true"/>' + '\n';
			tabla += '</td>' + '\n';
			tabla += '<td class="fuentevalor' + '<%=zparidad%>' + 'e"> ' + '\n';			
			tabla += '&nbsp;<a href="/servlet/download_blob?task=' + '<%=zsubsesion%>' + '&item=SSE_LAST_HR_PAY_DOCS!SSE_LAST_HR_PAY_DOCS[' + '<%=m4lix%>' + '].SCO_PAY_DOC" onclick="mostrarRecibo(this.href);return false" ><img src="/iconos/lu_zoom_16.png"/></a>' + '\n';		
			tabla += '</td>' + '\n';		
			
			contador = contador + 1;
			
		</script>
		</m4:loop>
		<script> 
			document.write('<option value="recibos' + anioAct + '"> ' + anioAct +' - (' + contador +') </option>');
			/*
			pieDePagina += '</table>';
			pieDePagina += '<br>';
			pieDePagina += '<br>';
			pieDePagina += '<p> <b>Impresi&oacute;n de recibos : Para imprimir los recibos puedes presionar las teclas Ctrl + P o seleccionar la opci&oacute;n imprimir de Internet Explorer.</b></p>';                            
			pieDePagina +=	'<center> <img src="/iconos/OpcionImprimirIE.png"></center>';

			tabla += pieDePagina;*/
		</script>
		</div>
	</td>
  </tr> 
</table>	

<script> 

tabla += '</tr>' + '\n';
tabla += '<tr> <td colspan="3"> &nbsp; </td> </tr>' + '\n';
tabla += '<tr> <td colspan="3"> &nbsp; </td> </tr>' + '\n';
tabla += '<tr> <td colspan="3"> &nbsp; </td> </tr>' + '\n';
tabla += '<tr> <td colspan="3"> <p> <b>Impresi&oacute;n de recibos : Para imprimir los recibos presiona sobre <img src="/iconos/lu_zoom_16.png"/> para visualizarlo y las teclas Ctrl + P para imprimirlo, tambi&eacute;n puedes seleccionar la opci&oacute;n imprimir de Internet Explorer.</b></p> ' + '\n';
//tabla += '<center> <img src="/iconos/OpcionImprimirIE.png"></center> </td> </tr>' + '\n';
tabla += '</td> </tr>' + '\n';				
				
tabla += '</table>' + '\n'

document.write(tabla);
//ocultarDivs();
var f=new Date();
mostrardivoculto('recibos'+ f.getFullYear());
seleccionarOpcion (f.getFullYear(),'anios');

</script>

<br>


<script>
/*
var pieDePagina = "";
pieDePagina += '<br>'
pieDePagina += '<br>'
pieDePagina += '<div id="footer">';
pieDePagina += '<p> <b>Impresi&oacute;n de recibos : Para imprimir los recibos puedes presionar las teclas Ctrl + P o seleccionar la opci`&oacute;n imprimir de Internet Explorer.</b></p>';                            
pieDePagina +=	'<center> <img src="/iconos/OpcionImprimirIE.png"></center>';
pieDePagina += '</div>';
document.write(pieDePagina);
*/
</script>

</body>

</html>	
  