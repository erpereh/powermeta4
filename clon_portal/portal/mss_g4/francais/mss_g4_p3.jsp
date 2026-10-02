<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Consultez les cong&eacute;s approuv&eacute;s</title>
	<!-- Hoja de Estilo general. Obligatorio -->
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	<!-- Librerias JavaScript. Obligatorio -->
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/francais/sse_lang_in.jsp" %>
	<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>
	<script type="text/javascript" src="/libreria/dom1.js"></script>
	<script type="text/javascript" src="/libreria/clasecalendariomss.js" language="Javascript1.2"></script>
	<!-- Librerias Java. Obligatorio -->
	<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
	<!-- Recuperacion de parametros. -->
	<!-- estado:	Determina la barra de localizacion. -->
<%
	 String z1 = "";
	 String z2 = "";
	 String z3 = "";
	 Calendar ahora = Calendar.getInstance();
     int mes = ahora.get(ahora.MONTH);
     int ano = ahora.get(ahora.YEAR);
     int anomasuno = ano + 1;
    
     String strmes = String.valueOf(mes);
     String strano = String.valueOf(ano);
     
    String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	  if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
	
	String zmes = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zmes");
	if (zmes==null){zmes = strmes;}
	int intzmes = Integer.parseInt(zmes);
	int intzmesmasuno = intzmes +1;
	String strmesmasuno = String.valueOf(intzmesmasuno);
	
	String zano = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zano");
	if (zano==null){zano = strano;}
	int intzano = Integer.parseInt(zano);
	
	String zSCO_ID_INCIDENCE = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_INCIDENCE");
	
	if ((zSCO_ID_INCIDENCE==null)||(zSCO_ID_INCIDENCE.equals(""))){
		zSCO_ID_INCIDENCE="ALL";
	}
%>
<script type="text/javascript">
var mes = "<%=zmes%>";
var ano = "<%=zano%>";
var months = new Array("Janvier", "F&eacute;vrier", "Mars",
            "Avril", "Mai", "Juin", "Juillet", "Ao&ucirc;t", "Septembre",
            "Octobre", "Novembre", "D&eacute;cembre");
function filtrar(){
 var mesfiltrado = m4select(m4objeto("month","formselect"),"value");
 var anofiltrado = m4select(m4objeto("year","formselect"),"value");
  var inci = m4select(m4objeto("SCO_ID_INCIDENCE","formselect"),"value");
 var URL = "/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p3.jsp?estado=41";
 URL=URL +  "&zmes=" + mesfiltrado + "&zano=" + anofiltrado; 
  URL=URL +  "&SCO_ID_INCIDENCE=" + inci ; 
 location.href =URL;
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
</head>
<body>
<!-- Encabezado -->
	<%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
	<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<!--Cargar un Meta4Object -->
<!--El nombre de la Tarea deberia ser el mismo nombre que el del meta4object que se carga...o si se carga mas de uno el del principal -->

 <%
   String zsubsesion = "SSM_HOLYDAYS";
   String zmeta4object = "SSM_HOLYDAYS";
   String znodoprincipal = "SSM_PRINCIPAL";
   String zlectura = zsubsesion + "!" + znodoprincipal;
   String zraiz = zsubsesion + "!" + znodoprincipal + ".";
   String zmetodocarga = zsubsesion + "!SSM_PRINCIPAL.CARGA";
   String zoutputdef = zsubsesion + "!" + znodoprincipal + "[*]";
   String znodossm = "SSM_REAL_TIME_PRD";
   String zoutputdefssm = zsubsesion + "!" + znodossm + "[*]";
   String ztipocarga = "ALL";
   
   String znodo3 = "SSE_INCIDENCE";
   
   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
   String zSCOIDINCIDENCE = zcomun3 + "SCO_ID_INCIDENCE";
   String zSCONMINCIDENCE = zcomun3 + "SCO_NM_INCIDENCE";
   
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<!-- Comienza la transaccion -->
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<%
try {
	 M4Operations m = new M4Operations(request);
	 m.setItem(zsubsesion,znodossm,"","ANO_CARGA_VAL",zano);
	 m.setItem(zsubsesion,znodossm,"","MES_CARGA_VAL",strmesmasuno);
	 m.setItem(zsubsesion,znodossm,"","SSE_INCIDENCE",zSCO_ID_INCIDENCE);
	 } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>	
<m4:outputdef m4alias="<%=znodossm%>"><m4:param name="m4name0" value="<%=zoutputdefssm%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
<%
	int  zcount3  = 0;
	try {
	    M4Operations m = new M4Operations(request);
	    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);

	} catch(Exception e) {}
	String	zcountv3 = String.valueOf(zcount3);
	
%>
<%
	String parametro = "HOLA";
	String codigo = "";

	try {
	  M4Operations m = new M4Operations(request);	
	  parametro = m.getItem(znodossm,zmeta4object,znodossm,"","SSM_PARAMETRO_CARGA"); 
	  z1 = m.getItem(znodossm,zmeta4object,znodossm,"","ANO_CARGA_VAL");
	  z2 = m.getItem(znodossm,zmeta4object,znodossm,"","MES_CARGA_VAL");
	  z3 = m.getItem(znodossm,zmeta4object,znodossm,"","FILTRO_SELECT");
	} catch(Exception e) {}

     parametro = com.meta4.taglib.util.M4PresentationUtilTaglib.escape(parametro);

	 Parametrocanal p1 = new Parametrocanal(parametro,intzmes,intzano,235);
	 codigo = p1.generarcodigo();

 %>

		<!-- Tabla de Descripcion. Obligatoria. Siempre una 3*2: un titulo de la pagina + un icono + una descripcion + opciones -->
			<table border="0" width="100%" cellspacing = "0">
				<tr><td class="titulofuncional" colspan="2">Cong&eacute;s approuv&eacute;s</td>
	            </tr>
				<tr>
					<td>
						<img src="/iconos/noname_valida_vacaciones_61_100.gif" width="100" height="100" alt="Validez les demandes de cong&eacute;s" border="0">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					</td>
					<td>
						<!-- Descripcion -->			
						<div class="descripcionfuncional">
							<br/>
							Consultez les cong&eacute;s appouv&eacute;s pour vos collaborateurs, pour le mois en cours ou le mois de votre choix, &agrave; l'aide de la l&eacute;gende suivante&nbsp;: 
						</div>
						<ul>
							<li class="acep">
								<div class="enlacefuncional">
									Jours accept&eacute;s
								</div>
							</li>
						    <li class="fest">
								<div class="enlacefuncional">
									Jours f&eacute;ri&eacute;s
								</div>
							</li>
						</ul>
						<br/>
					</td>	
				</tr>
				<tr>
					<td class="fuentecampofiltro" colspan="3">
					<form id="formselect" name="formselect" action="">
								&nbsp;Type de cong&eacute;&nbsp;
	<select id="SCO_ID_INCIDENCE" class="fuenteapartados" name="SCO_ID_INCIDENCE" title="S&eacute;lectionnez un type de cong&eacute;" onchange="javacript:filtrar();">
	<option value="ALL">Toutes</option>
	
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSCOIDINCIDENCE%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCONMINCIDENCE%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
					    &nbsp;Mois&nbsp;:&nbsp;
				        <select id="month" class="fuenteapartados" onchange="filtrar()">
							<script type="text/javascript">
								for (var intLoop =0; intLoop < months.length; intLoop++) document.write("<option value='" + intLoop + "'" + (<%=zmes%> == intLoop ? "Selected" : "") + ">" +  months[intLoop]);
							</script>
						</select>
						&nbsp;Ann&eacute;e&nbsp;:&nbsp;
				        <select id="year" class="fuenteapartados" onchange="filtrar()">
							<script type="text/javascript">
								for (var intLoop =<%=ano%>; intLoop <= <%=anomasuno%>; intLoop++) document.write("<option value='" + intLoop + "'" + (<%=intzano%> == intLoop ? "Selected" : "") + ">" +  intLoop);
							</script>
						</select>
					</form>
					</td>
				</tr>		
			</table>
			<!-- Fin de Tabla de descripcion. -->
<script type="text/javascript" language="Javascript1.2">
<%=codigo%>



m4buscaroption(m4objeto('SCO_ID_INCIDENCE','formselect'),'<%=zSCO_ID_INCIDENCE%>');
</script>
</div>

</body>
</html>
<m4:endpage/>
