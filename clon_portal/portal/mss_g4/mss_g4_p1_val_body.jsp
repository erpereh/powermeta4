<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado = zobjtabla.m4paramvalor("estado");
String zfiltro =zobjtabla.m4paramvalor("zfiltro");
String zfiltroFecha =zobjtabla.m4paramvalor("zfiltroFecha");
String zinicios =zobjtabla.m4paramvalor("zinicios");	
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zfiltro==null)|| (""==zfiltro)){zfiltro = "ALL";} 
if ((zfiltroFecha==null)|| (""==zfiltroFecha)){zfiltroFecha = "ALL";} 
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

String znivel =zobjtabla.m4paramvalor("znivel");
if ((znivel==null)||(znivel.equals(""))){
znivel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znivel");
if ((znivel==null)||(znivel.equals(""))) znivel = "1";
}
%>


<script type="text/javascript">
function filtrar(){
var valor =m4select("filtro","prueba","value");
var nivel =m4select("nivel","prueba","value");
m4valor("oculto","zfiltro",valor,"set");
m4valor("oculto","znivel",nivel,"set");
m4submit("oculto");
}
function m4enviar(){
var cadena="";
var URL = "{TAG=SSE_HOLYDAYS";
if (typeof(document.forms['a0']) != "undefined"){
var numregistros = parseInt(document.forms['a0'].elements[1].name);
cadena = cadena + URL;
for (var i = 0; i < numregistros; i++){
	var formulario = "b" + i;
	if (document.forms[formulario].elements[0].checked == true){
		var formulario1 = "a" + i;
		cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=ACEPTAR";
		cadena = cadena + document.forms[formulario1].elements[0].value;
		} 
	if (document.forms[formulario].elements[1].checked == true){
		var formulario1 = "a" + i;
		cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=CANCELAR";
		cadena = cadena + document.forms[formulario1].elements[0].value;
		var formulario2 = "c" + i;
		cadena = cadena + "{" +document.forms[formulario1].elements[1].value + "*" + "MOTIVO_ACCION=" + document.forms[formulario2].elements[0].value;
		}
}
document.forms["envio"].elements["param"].value=cadena;
document.forms["envio"].elements["TAG"].value="SSE_HOLYDAYS";
document.forms["envio"].submit();
}
}
function m4buscaroption(oselect,sidoption){
var l=oselect.options.length;
for(var ni=0; ni< l; ni++){  
if (oselect.options[ni].value == sidoption){
	oselect.selectedIndex = ni; 
	break;
	}
}
}
</script>
<%
   String zsubsesion = "SSE_HOLYDAYS";
   String zmeta4object = "SSE_HOLYDAYS";
   String znodo = "SSE_REAL_TIME_PRD";
   String ztipocarga = "SSE";
   
   String zventanas = "20";
   int zvuelta = 2;
   String zdireccion = "/mss_g4/mss_g4_p1_val.jsp";
   String zestado="11";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove =znodo + ":" +  znodo + "[" + zregistroinicial + "]";
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   
   String znodolista = znodo + "_VAL";
   String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";
   String zmovelista = znodolista + ":" + znodolista + "[FIRST]";
    String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&VAR.m4lix]" + ".";
   String znodocom = "SSE_COMUNICACION";
   String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";
   
   String znodoprincipal = "SSE_PRINCIPAL";
   String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";
   
   String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";
   String zORDINAL = zcomun+ "ORDINAL";
   String zNACCION =zcomun+  "N_ACCION";   
   String zNOMBREEMPLEADO = zcomun+"NOMBRE_EMPLEADO";
    String zSSE_DT_START = zcomun+ "SSE_DT_START";
   String zSCO_NM_INCIDENCE = zcomun+ "SCO_NM_INCIDENCE";
   String zSSE_DT_END =  zcomun+"SSE_DT_END";
   String zSCO_UNITS = zcomun +"SCO_UNITS";
   
   String zNOMBREEMPLEADOlista = zcomunlista+ "NOMBRE_EMPLEADO";
   String zSTDIDPERSON = zcomunlista+"STD_ID_PERSON";   
   String idPersonEncripted = "";
   String zfiltroItem = "";   
   
 %>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<% 	try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,znodoprincipal,"","NIVEL",znivel);
		if (zfiltro=="ALL" || zfiltro.equals("ALL")){
			zfiltroItem = zfiltro;
		} else {
			zfiltroItem = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan", zfiltro);
		}
	    m.setItem(zsubsesion,znodo,"","ID_PERSON",zfiltroItem);
		
		m.setItem(zsubsesion,znodo,"","SCO_DT_FILTER",zfiltroFecha);

		m.setItem(zsubsesion,"SSE_REAL_TIME_PRD","","SCO_GTA_USER_TYPE","VALIDATION");
		
	} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodolista%>"><m4:param name="m4name0" value="<%=zoutputdeflista%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefcom%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovelista%>"/></m4:move>
<%
	int  zcounti  = 0;
	int  zcountilista  = 0;
	int  zcount  = 0;	
	try {
		M4Operations m = new M4Operations(request);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		zcountilista = m.getCountInClient(znodolista,zsubsesion,znodolista);
		zcount = m.getCount(znodo,zsubsesion,znodo);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcountvlista = String.valueOf(zcountilista);
%>
<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2"><%=Tran.getProperty("GTA_78")%></td></tr>
<tr>
	<td><img src="/iconos/noname_valida_vacaciones_61_100.gif" width="100" height="100" alt="<%=Tran.getProperty("GTA_78")%>" border="0"></td>
	<td><div class="descripcionfuncional"><%=Tran.getProperty("GTA_79")%>&nbsp;<a class="enlacefuncional" tabindex="1" title="<%=Tran.getProperty("GTA_80")%>" href=""	onclick="window.open('/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p1_val2.jsp?estado=41','Vis','width=700;height=400,resizable,scrollbars');return false;"><%=Tran.getProperty("GTA_81")%>.</a></div>
	<ul class="listaenlace"><li><a class="enlacefuncional" title="<%=Tran.getProperty("GTA_82")%>" href="/servlet/CheckSecurity/JSP/mss_g4/smco_ab_vacation_filter.jsp"><%=Tran.getProperty("GTA_82")%></a></li></ul>
	</td>
</tr>
</table>
<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo" colspan="6">&nbsp;<%=Tran.getProperty("Label.Filter")%></td></tr>
<form name="prueba" id="prueba" action="">
<tr>
	<td class="fuentecampofiltro" colspan="3">&nbsp;<%=Tran.getProperty("GTA_59")%>&nbsp;
	<select id="filtro" class="fuenteformulario200" onchange="filtrar()"title="<%=Tran.getProperty("GTA_77")%>">
	<option value="ALL"><%=Tran.getProperty("Label.All")%></option>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountvlista).intValue()-1).toString()%>">
		<m4:item item="STD_ID_PERSON" record="<%=m4lix%>" var="idPersonEncripted" htmlsafe="true" outputdef="<%=znodolista%>"/>
		<%
			if ((idPersonEncripted==null)){idPersonEncripted="";}
			if (!idPersonEncripted.equals("")) {
				idPersonEncripted = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request,"incidencePlan", idPersonEncripted);
			}
		%>	
		<option value="<%=idPersonEncripted%>">&nbsp;<m4:item m4name="<%=zNOMBREEMPLEADOlista%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	</td>
	
	<td class="fuentecampofiltro" colspan="3">&nbsp;<%=Tran.getProperty("Label.Nivel")%>
	<select id="nivel" class="fuenteapartados" onchange="filtrar()"title="<%=Tran.getProperty("Label.NivelSelec")%>">

<%
String zmaxnivel = "";
int i = 0;
try {
	M4Operations calculo = new M4Operations(request);
	zmaxnivel = calculo.getItem(znodocom,zmeta4object,znodocom,"","MAX_NIVELES");
	int zmaxnivelnum = Integer.valueOf(zmaxnivel).intValue();
	for (i = 1; i <= zmaxnivelnum; i++){
%>
	<option value="<%=i%>"><%=i%></option>
<%
	}
} catch(Exception e) {}
%>
	</select>
	</td>
	<script type="text/javascript" language="Javascript1.5">
			     if ('<%=znivel%>'!='0'){


           m4searchoptioness('prueba','nivel','<%=znivel%>');
       }
         </script>	
</tr>	
</form>
<tr>
	<td class="fuentecampo" colspan="3">
	<form id="motivo" name="motivo" action="">	
	&nbsp;<%=Tran.getProperty("Button.CancelReason")%>
	<input title="<%=Tran.getProperty("Button.CancelReasonLarge")%>" size="35" id="motivog" name="motivog" type="text" maxlength="40" onkeyup="m4sincro()" />
	</form>
	</td>
	<td class="fuenteboton"><a href="javascript:m4marcaraceptar();" title="<%=Tran.getProperty("Label.AceptarReg")%>"><img src="/iconos/icono_aceptar_todas_36_36.gif" width="36" height="36" alt="<%=Tran.getProperty("Label.AceptarReg")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
	<td class="fuenteboton"><a href="javascript:m4marcarcancelar();" title="<%=Tran.getProperty("Label.CancelarReg")%>"><img src="/iconos/icono_cancelar_todas_mss_36_36.gif" width="36" height="36" alt="<%=Tran.getProperty("Label.CancelarReg")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
	<td class="fuenteboton"><a href="javascript:m4desmarcar();" title="<%=Tran.getProperty("Label.Deshacer")%>"><img src="/iconos/icono_deshacer_mss_36_36.gif" width="36" height="36" alt="<%=Tran.getProperty("Label.Deshacer")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>

</tr>
<tr>
	<td class="fuenteboton" colspan="6"><a href="javascript:m4enviar();" title="Enviar"><img src="/iconos/icono_enviar_mss_36_36.gif" width="36" height="36" alt="<%=Tran.getProperty("Button.Send")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</table>
</form><br />
<form action="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p1_val.jsp?estado=41" method="post" name="oculto" id="oculto">
<input type="hidden" id="zfiltro" name="zfiltro"  value="<%=zfiltro%>" />
<input type="hidden" id="zfiltroFecha" name="zfiltroFecha"  value="<%=zfiltroFecha%>" />
<input type="hidden" id="zfiltroemp" name="znivel"  value="<%=znivel%>" />
<input type="hidden" id="zinicios" name="zinicios"  value="" />
</form>
<script type="text/javascript" language="Javascript1.2">

m4buscaroption(m4objeto('filtro','prueba'),'<%=zfiltro%>')
</script>
<% if (zcounti > 0) {
String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1); %>	
<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo" colspan="2"><%=Tran.getProperty("Label.TableVal")%></td></tr>
<%
int zposicion = 0;
String zposicions = "0";
%>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%  zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zposicion = zposicion - zregistroinicial;
%>
<tr>
	<td class="fuentecampo">
	<table cellspacing="0" width="100%">
	<tr><td class="fuentecamponombre" colspan="4">&nbsp;<m4:item m4name="<%=zNOMBREEMPLEADO%>" htmlsafe="true"/>&nbsp;<%=Tran.getProperty("Label.solicita")%>&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td></tr>
	<tr><td class="fuentecamponombre" colspan="4"><br /></td></tr>
	<tr>
		<td class="fuentecampo">&nbsp;<%=Tran.getProperty("GTA_60")%></td>
		<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_NM_INCIDENCE%>" htmlsafe="true"/></td>
		<td class="fuentecampo">&nbsp;<%=Tran.getProperty("GTA_84")%></td>
		<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSSE_DT_START%>" htmlsafe="true"/></td>
		<td class="fuentecampo"><%=Tran.getProperty("GTA_85")%></td>
		<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSSE_DT_END%>" htmlsafe="true"/></td>
	</tr>
	<tr>
		<td class="fuentecampo">
		<form name="a<%=zposicion%>" id="a<%=zposicion%>" action=" ">
		<input id="ocultos<%=zposicion%>" name="ocultos<%=zposicion%>" type="hidden" value="{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*REC=<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NOD=SSE_REAL_TIME_PRD{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NIVEL_ACEPTADO=<%=znivel%>" />
		<input id="ocul<%=zposicion%>" name="<%=zcountv%>" type="hidden" value="<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>" />
		</form>
		</td>
	</tr>
	</table>					
	</td>
	<td class="fuentecampo">
	<form name="b<%=zposicion%>" id="b<%=zposicion%>" action=" ">
	<table cellspacing="0" class="fuentecampo">	
	<tr>
		<td class="fuentecampo">
		<input title="<%=Tran.getProperty("Labelmss.Aceptarlabel")%>" id="ac<%=zposicion%>" name="ac<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ca<%=zposicion%>)" />
		<%=Tran.getProperty("Button.Ok")%>
		</td>
	</tr>
	<tr>
		<td class="fuentecampo">
		<input title="<%=Tran.getProperty("Labelmss.Cancelarlabel")%>" id="ca<%=zposicion%>" name="ca<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ac<%=zposicion%>)" />
		<%=Tran.getProperty("Label.Cancelar")%>
		</td>
	</tr>
	</table>
	</form>
	</td>	
</tr>
<tr>
	<td class="fuentecampo" colspan="2">
	<form name="c<%=zposicion%>" id="c<%=zposicion%>" action=" ">&nbsp;<%=Tran.getProperty("Button.CancelReason")%>&nbsp;
	<input size="48" title="<%=Tran.getProperty("Button.CancelReasonLarge")%>" id="mo<%=zposicion%>" name="mo<%=zposicion%>" type="text" maxlength="60" />
	</form>
	</td>
</tr>
<tr><td class="separadorlinea" colspan="2">	<hr /></td></tr>
</m4:loop>
</table>