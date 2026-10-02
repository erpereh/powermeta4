<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
	<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
	<%
	Generatablaparametros zobjtabla = new Generatablaparametros(request);
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
    String zfiltro = "";
    String zfiltroEncr = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltro");
    if (zfiltroEncr == null || zfiltroEncr.equals("")) {
		String sIdHREncr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", "ALL");
		zfiltroEncr=sIdHREncr;
		zfiltro="";
	}
    else {zfiltro = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zfiltroEncr);}
	String zNomfiltro = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNomfiltro");
	
	

	
	if ((zfiltro==null)|| (""==zfiltro)){zfiltro = "ALL";} 
	if ((zNomfiltro==null)|| (""==zNomfiltro)){zNomfiltro = "Todos";}
	if ((estado==null)||(estado.equals(""))){estado="0";}
	if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
	%>

<title>Formaci&oacute;n no completada</title>
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="/m4trans/m4custom/IBER/mss_generico/espanol/0-menu_mss.jsp" %>		

<script type="text/javascript">
function filtrar(){
var valorfiltro =  m4select("filtroformacion","formfiltro","value");
var nombrefiltro = m4select("filtroformacion","formfiltro","text");
m4valor("oculto","zfiltro",valorfiltro,"set");
m4valor("oculto","zNomfiltro",nombrefiltro,"set");
m4submit("oculto");}

function verdescdevtraining(typeDev,id){
	var dir = "";
	
	if (typeDev == 0){
		dir = "/servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subproduct.jsp?estado=11"
		dir = dir + "&zidSubProduct=" + id;
	}
	else {
		dir = "/servlet/CheckSecurity/JSP/sse_generico/sgco_desc_dev_subaction.jsp?estado=11"
		dir = dir + "&zidSubAction=" + id;
	}
	dir = dir + "&zidCost=" + "0";
	window.open(dir,'Vis','width=800,height=300,left=50,top=50,resizable,scrollbars,fullscreen=no');
}

</script>
</head>
<body style="overflow-x:hidden;overflow-y:hidden;">
  <%@ include file="/m4trans/m4custom/IBER/mss_generico/espanol/0-mssgenerico_menusup.jsp" %>
  <%@ include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_links.jsp" %>
<%
    String zsubsesion = "CSP_FORM_NO_REALIZADA";
	String zmeta4object = "CSP_FORM_NO_REALIZADA";  
	String znodo = "CSP_FORM_NO_REALIZADA";
	
	
	
	
	 String zventanas = "20";
	int zvuelta = 5;
	int zregistroinicial = Integer.valueOf(zinicios).intValue();
	zregistroinicial = zregistroinicial - 1;
	int zventana  = Integer.valueOf(zventanas).intValue();
	int zregistrofinal = zregistroinicial + zventana - 1;
	
    String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
    String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
    String zlectura = zsubsesion + "!" + znodo;
    String zraiz = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
    String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
     
   String zmetodocarga = "CARGA:" + zsubsesion + "!CSP_FORM_NO_REALIZADA.CSP_CARGA";		
			
	// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
	
   String zSCO_GB_NAMEEMP = zraiz + "SCO_GB_NAME";
   String zidSubProduct = zraiz + "SCO_ID_DEV_SUBPRODUCT";
   String zNOMBREFORM = zraiz + "SCO_NM_DEV_SUBPRODUCT";
   String zidSubAction = zraiz + "SCO_ID_DEV_SUBACTION";
   String zNOMBRESESION = zraiz + "SCO_NM_DEV_SUBACTION";
   String zDTSTART = zraiz + "DT_START";
   String zFECHAFIN = zraiz + "DT_END";
   String zSCO_NM_NON_ATT_REASON = zraiz + "SCO_NM_NON_ATT_REASON";  
   String zSSP_PORC_TOTAL = zraiz + "SSP_PORC_TOTAL";
        	
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,znodo,"","P_ID_PERSON",zfiltro);
		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>

<%
	int  zcounti  = 0;	
	int  zcount  = 0;
	
	try {
		M4Operations m = new M4Operations(request);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		zcount = m.getCount(znodo,zsubsesion,znodo);
	    } catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	
	
%>
<%
String sFiltroNameL=Tran.getProperty("Label.All");

%>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2">Formaci&oacute;n no completada</td></tr>
<tr>
	<td><img src="/iconos/noname_puesto_144_100.gif" width="99" height="100" alt="Eventos actuales convocados" ></td>
	<td><div class="descripcionfuncional">Consulta la Formaci&oacute;n cancelada de tus empleados, y/o aquella en la que no han realizado un aprovechamiento &oacute;ptimo en cuanto a su asistencia. A trav&eacute;s del filtro puedes ver las inscripciones a cursos de un empleado.</div>
		<ul class="listaenlace">
		<li><a class="enlacefuncional" title="Eventos actuales convocados" href="mss_g3_p14.jsp?estado=31&zTLoad=EC">Eventos actuales convocados</a></li>
		<!--<li><a class="enlacefuncional" title="Plan de desarrollo" href="smco_g3_dev_plan_filter.jsp">Plan de desarrollo</a></li>-->
		</ul>
	</td>	
</tr>

</table>


<form name="formfiltro" id="formfiltro" action="">
<table width="100%" cellspacing="0">
  <tr><td class="tablaestadosceldatitulo" colspan="6">Filtro</td></tr>
  <tr>
    <td class="fuentecampofiltro" colspan="6">&nbsp;Empleado&nbsp;
      <select id="filtroformacion" name="filtroformacion" class="fuenteapartados" onchange="javascript:filtrar()">
        <%String sIdHREncr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", "ALL");%>
        <option value="<%=sIdHREncr%>"><%=sFiltroNameL%></option>
          <m4:dataloop outputdef="<%=znodo%>">
            <m4:item var="sIdHREncr" item="STD_ID_PERSON" htmlsafe="true" outputdef="<%=znodo%>"/>
            <%sIdHREncr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdHREncr);%>
            <option value="<%=sIdHREncr%>"><m4:item  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo%>"/></option>
        </m4:dataloop>
      </select>
    </td>
    <script type="text/javascript" language="Javascript1.5">
      if ('<%=zfiltro%>'!= "ALL"){
        m4searchoptioness('formfiltro','filtroformacion','<%=zfiltroEncr%>');
      }
    </script>  
  </tr>	
<% if (zcounti > 0) { %>
<tr>
	<td class="tablaestadosceldatitulo" >Empleado</td>
	<td class="tablaestadosceldatitulo" >Formaci&oacute;n</td>
	<td class="tablaestadosceldatitulo" >Sesi&oacute;n</td>
	<td class="tablaestadosceldatitulo" >Inicio</td>
	<td class="tablaestadosceldatitulo" >&#37; Asistencia</td>
	<td class="tablaestadosceldatitulo" >Motivo de cancelaci&oacute;n</td>
	 
</tr>
<%
	String zposicions2 = "0";
	int zcontrol2 = 0;
	int zposicion2 =0;
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
%>

<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
 <tr>
	<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_GB_NAMEEMP%>" htmlsafe="true"/></td>

	<td class="fuentevalor" >&nbsp;<a href="javascript:verdescdevtraining('0','<m4:item m4name="<%=zidSubProduct%>" jsafe="true" htmlsafe="true"/>');" title="Detalle de la formaci&oacute;n"><m4:item m4name="<%=zNOMBREFORM%>" htmlsafe="true"/></a></td>

	<td class="fuentevalor" >&nbsp;<a href="javascript:verdescdevtraining('1','<m4:item m4name="<%=zidSubAction%>" jsafe="true" htmlsafe="true"/>');" title="Detalle de la sesi&oacute;n"><m4:item m4name="<%=zNOMBRESESION%>" htmlsafe="true"/></a></td>

	<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zDTSTART%>" htmlsafe="true"/></td>
	<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSSP_PORC_TOTAL%>" htmlsafe="true"/></td>
	<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zSCO_NM_NON_ATT_REASON%>" htmlsafe="true"/></td>
</tr>
</m4:loop>
 <%}else{%>
</table>
<br></br>
<div class="fuentenodatos"></div>
<%}%>
</form>


<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p24.jsp?estado=31&zTLoad=FR" method="post" name="oculto" id="oculto">

<input type="hidden" id="zfiltro" name="zfiltro"  value="<%=zfiltroEncr%>" />
<input type="hidden" id="zNomfiltro" name="zNomfiltro"  value="<%=zNomfiltro%>" />
<input type="hidden" id="zinicios" name="zinicios"  value="" />
</form>	

<%@include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_ventanas_post.jsp"%>
<%@ include file="/m4trans/m4custom/IBER/mss_generico/espanol/0-mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>


