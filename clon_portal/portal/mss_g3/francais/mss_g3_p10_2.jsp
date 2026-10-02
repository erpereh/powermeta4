<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
	<title>Formations suivies</title>
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>		
	<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
	<%
	Generatablaparametros zobjtabla = new Generatablaparametros(request);
	String estado = zobjtabla.m4paramvalor("estado");
	String zinicios = zobjtabla.m4paramvalor("zinicios");
	String zfiltroemp = zobjtabla.m4paramvalor("zfiltroemp");
	String znombreemp = zobjtabla.m4paramvalor("znombreemp");
	if ((zfiltroemp==null)|| (""==zfiltroemp)){zfiltroemp = "ALL";} 
	if ((znombreemp==null)|| (""==znombreemp)){znombreemp = "Todos";}
	if ((estado==null)||(estado.equals(""))){estado="0";}
	if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
	%>
<script type="text/javascript">
function filtrar(num){
var valoremp =m4select("filtroemp","prueba","value");
var nombreemp =m4select("filtroemp","prueba","text");
m4valor("oculto","zfiltroemp",valoremp,"set");
m4valor("oculto","znombreemp",nombreemp,"set");
m4submit("oculto");}
function verdesc(id){
m4valor("oculto5","zidtrtb",id,"set");
m4submit("oculto5");}
</script>
</head>
<body>
  <%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
  <%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
    String zsubsesion = "SSM_ENROLLMENT_OVERVIEW";
	String zmeta4object = "SSM_ENROLLMENT_OVERVIEW";  
	String znodo = "M4T_ENROLLMENT";
	String znodo1 = "SSM_EMPLEADOS";
	
	String ztipocarga = "ES2";
    String zdireccion = "/mss_g3/mss_g3_p10.jsp";
	String zventanas = "20";
	int zvuelta = 5;

	// No se modifica en general.
	
	int zregistroinicial = Integer.valueOf(zinicios).intValue();
	zregistroinicial = zregistroinicial - 1;
	int zventana  = Integer.valueOf(zventanas).intValue();
	int zregistrofinal = zregistroinicial + zventana - 1;
	
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
   String zlectura = zsubsesion + "!" + znodo;
   String zraiz = zsubsesion + "!" + znodo + ".";
   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
	
   String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
   String zmove1 = znodo1 + "[FIRST]";
   String zlectura1 = zsubsesion + "!" + znodo1;
   String zraiz1 = zsubsesion + "!" + znodo1 + ".";
   String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
   
	String znodoprincipal = "SSM_PRINCIPAL";	
	String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";		
			
	// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
	
	String zSTDNFIRSTNAME = zraiz + "STD_N_FIRST_NAME";
	String zSTDNFAMILYNAME1 = zraiz + "STD_N_FAMILY_NAME_1";
	String zSCODATE = zraiz + "SCO_DATE";
	String zSCODATE1 = zraiz + "SCO_DATE_1";
	String zSCONMEVENT = zraiz + "SCO_NM_EVENT";
	String zSCONMSESSION = zraiz + "SCO_NM_SESSION";
	String zSCONMPRODUCTTYPE = zraiz + "SCO_NM_PRODUCT_TYPE";
	String zSCONMTRAININGPROV = zraiz + "SCO_NM_TRAINING_PROV";

	String STDIDPERSON = zcomun1 + "STD_ID_PERSON";
	String STDNFAMILYNAME1 = zcomun1 + "STD_N_FAMILY_NAME_1";
	String STDNFIRSTNAME = zcomun1 + "STD_N_FIRST_NAME";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations s = new M4Operations(request);
	    s.setItem(zsubsesion,znodoprincipal,"","SSM_ID_PERSON",zfiltroemp); 
		} catch(Exception e) {}	
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>" ><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>

<%
	int  zcounti  = 0;	
	try {
		M4Operations m = new M4Operations(request);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	int zcount = 0;
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	} catch(Exception e) {}
	int  zcount1  = 0;
	int  zcount1i  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
	    zcount1i = m.getCountInClient(znodo1,zsubsesion,znodo1);
	} catch(Exception e) {}
	String	zcount1v = String.valueOf(zcount1);
%>
<%
String sFiltroNameL=Tran.getProperty("Label.All");

%>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
	<table width="100%" cellspacing="0">
	<tr>
		<td class="titulofuncional" colspan="2">Formations suivies</td>
	</tr>
	<tr>
		<td><img src="/iconos/noname_catalogo_99_100.gif" width="99" height="100" alt="Programme des sessions de formation" ></td>
		<td><div class="descripcionfuncional">Consultez la liste des actions de formation auxquelles vos collaborateurs ont particip&eacute;. Connaissez &agrave; l'aide du filtre l'assistance &agrave; la formation d'un collaborateur de votre choix.</div>
	</tr>
	</table>
<form name="prueba" id="prueba" action="">
<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo" colspan="4">Filtre</td></tr>
<tr>
	<td class="fuentecampofiltro" colspan="4">&nbsp;Collaborateur&nbsp;:&nbsp;
	<select id="filtroemp" class="fuenteapartados"  onchange="filtrar()">

	<option value="ALL"><%=sFiltroNameL%></option>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcount1v).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=STDIDPERSON%>" htmlsafe="true"/>"><m4:item m4name="<%=STDNFAMILYNAME1%>" htmlsafe="true"/>,&nbsp;<m4:item m4name="<%=STDNFIRSTNAME%>" htmlsafe="true"/></option>
	</m4:loop>
	</td>
	<script type="text/javascript" language="Javascript1.5">
      if ('<%=zfiltroemp%>'!= "ALL"){
        m4searchoptioness('prueba','filtroemp','<%=zfiltroemp%>');
      }
	 </script>
</tr>	
</table>
</form>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p10_2.jsp?estado=31" method="post" name="oculto" id="oculto">
<input type="hidden" id="zfiltroemp" name="zfiltroemp"  value="<%=zfiltroemp%>" />
<input type="hidden" id="znombreemp" name="znombreemp"  value="<%=znombreemp%>" />
<input type="hidden" id="zinicios" name="zinicios" value="" />
</form>	
<% if (zcount > 0) {%>	
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc4.jsp?estado=31" method="post" name="oculto5" id="oculto5">
<input type="hidden" id="zidtrtb" name="zidtrtb"  />
</form>	
<table class="tablaestados" cellspacing="0" width="100%">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Formation</td>
	<td class="tablaestadosceldatitulo">&nbsp;Type</td>
	<td class="tablaestadosceldatitulo">&nbsp;Date de d&eacute;but</td>
	<td class="tablaestadosceldatitulo">&nbsp;Date de fin</td>
	<td class="tablaestadosceldatitulo">&nbsp;Collaborateur</td>
</tr>
<%  
	try {
		M4Operations t = new M4Operations(request);
		int i = 0;
		String znombreant="";
		String znombrenuevo="";
		String zpersona="";
		String zproveedor="";
		String ztipo="";
	 String z1 = "";
	 String z2 = "";
	 String z3 = "";
 	 String x1 = "";
	 String x2 = "";
	 String x3 = "";
	 String zinicio =  "";
	 String zfin =  "";
	 String zIDTRTB = "";
	 int a=0;
	 for (i =zregistroinicial; i < zregistrofinal + 1; i++){
		String id = String.valueOf(i);
		t.moveData(znodo,zmeta4object,znodo,id);
		zSTDNFAMILYNAME1 = t.getItem(znodo,zmeta4object,znodo,"","STD_N_FAMILY_NAME_1"); 
		zSTDNFIRSTNAME = t.getItem(znodo,zmeta4object,znodo,"","STD_N_FIRST_NAME");
		zSCONMPRODUCTTYPE = t.getItem(znodo,zmeta4object,znodo,"","SCO_NM_PRODUCT_TYPE"); 
		zSCONMTRAININGPROV= t.getItem(znodo,zmeta4object,znodo,"","SCO_NM_TRAINING_PROV"); 
		zSCONMEVENT= t.getItem(znodo,zmeta4object,znodo,"","SCO_NM_EVENT");
		zIDTRTB= t.getItem(znodo,zmeta4object,znodo,"","SCO_ID_TRTBREQ");
		zSCONMSESSION= t.getItem(znodo,zmeta4object,znodo,"","SCO_NM_SESSION");
		zSCODATE1= t.getItem(znodo,zmeta4object,znodo,"","SCO_DATE");
		z1 = zSCODATE1.substring(0,4);
		z2 = zSCODATE1.substring(5,7);
		z3 = zSCODATE1.substring(8,10);
		zSCODATE= t.getItem(znodo,zmeta4object,znodo,"","SCO_DATE_1");
		x1 = zSCODATE.substring(0,4);
		x2 = zSCODATE.substring(5,7);
		x3 = zSCODATE.substring(8,10);
		znombrenuevo=zSCONMEVENT+zSCONMSESSION;
		zpersona = zSTDNFIRSTNAME+" "+zSTDNFAMILYNAME1;
		ztipo = zSCONMPRODUCTTYPE;
		zproveedor = zSCONMTRAININGPROV;
		zinicio = x3+"-"+x2+"-"+ x1;
		zfin = z3 + "-" + z2 + "-" + z1;
		if ((znombrenuevo==znombreant)|| znombrenuevo.equals(znombreant)){
			znombrenuevo="";
			zproveedor = "";
			ztipo = "";
			zinicio = "";
			zfin = "";
		}else{
			znombreant=znombrenuevo;
		}
		a=i%2;
		
%>	
<% if (a==0){%>	
<tr>
	<td class="fuentevalor" ><a href="javascript:verdesc('<%=zIDTRTB%>/>');" title="D&eacute;tail du produit">&nbsp;<%=znombrenuevo%></a></td>
	<td class="fuentevalor" >&nbsp;<%=ztipo%></td>
	<td class="fuentevalor" >&nbsp;<%=zinicio%></td>
	<td class="fuentevalor" >&nbsp;<%=zfin%></td>
	<td class="fuentevalor" >&nbsp;<%=zpersona%></td>
</tr>
<%}else{%>
<tr>
	<td class="fuentevalor2" ><a href="javascript:verdesc('<%=zIDTRTB%>/>');" title="D&eacute;tail du produit">&nbsp;<%=znombrenuevo%></a></td>
	<td class="fuentevalor2" >&nbsp;<%=ztipo%></td>
	<td class="fuentevalor2" >&nbsp;<%=zinicio%></td>
	<td class="fuentevalor2" >&nbsp;<%=zfin%></td>
	<td class="fuentevalor2" >&nbsp;<%=zpersona%></td>
</tr>
<%}}		} catch(Exception e) {}
%>	 	

<%@include file="../../sse_generico/francais/generico_ventanas_post.jsp"%>
<%}else{%>
<div class="fuentenodatos">
Aucune donn&eacute;e n'est disponible actuellement.

<%}%>
<%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>


