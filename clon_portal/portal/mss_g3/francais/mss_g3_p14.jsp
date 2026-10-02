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
    if (zfiltroEncr == null || zfiltroEncr.equals("")) {zfiltro="";}
    else {zfiltro = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zfiltroEncr);}
	String zNomfiltro = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNomfiltro");
	String zTLoad = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTLoad");
	

	if ((zTLoad==null)|| (""==zTLoad)){zTLoad = "EC";}
	if ((zfiltro==null)|| (""==zfiltro)){zfiltro = "ALL";} 
	if ((zNomfiltro==null)|| (""==zNomfiltro)){zNomfiltro = "Tous";}
	if ((estado==null)||(estado.equals(""))){estado="0";}
	if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
	%>

<% if (zTLoad=="EC" || zTLoad.equals("EC")) { %>
<title>Programme des sessions de formation</title>
<%}else{%>
<title>Formations suivies</title>
<% } %>
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>		
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
  <%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
  <%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
    String zsubsesion = "SSM_TRAINING_ENROLLMENT";
	String zmeta4object = "SSM_TRAINING_ENROLLMENT";  
	String znodo = "SSM_ENROLLMENT_SUBACTION";
	String znodo1 = "SSM_EMPLEADOS";
	String znodomain = "SSM_PRINCIPAL";
	
	
	String ztipocarga = zTLoad;
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
   
    String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
    String zlectura1 = zsubsesion + "!" + znodo1;
	String zraiz1 =  znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
	String zmove1 =znodo1 + ":" +  znodo1 + "[FIRST]";
	String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;
      
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";		
			
	// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
	
   String zSCO_GB_NAMEEMP = zraiz + "SCO_GB_NAME";
   String zNOMBREEMP = zraiz + "NOMBRE_EMP";
   String zidSubProduct = zraiz + "SCO_ID_DEV_SUBPRODUCT";
   String zNOMBREFORM = zraiz + "SCO_NM_DEV_SUBPRODUCT";
   String zidSubAction = zraiz + "SCO_ID_DEV_SUBACTION";
   String zNOMBRESESION = zraiz + "SCO_NM_DEV_SUBACTION";
   String zDTSTART = zraiz + "DT_START";
   String zFECHAFIN = zraiz + "DT_END";
   
   String zSTDNFAMILYNAME1 = zraiz1 + "STD_N_FAMILY_NAME_1";
   String zSTDNFIRSTNAME = zraiz1 + "STD_N_FIRST_NAME";
   String zSTDIDPERSON = zraiz1 + "STD_ID_PERSON";
     String zSCO_GB_NAME = zraiz1 + "SCO_GB_NAME";
  String sSortNode = zmeta4object + "!" + znodo + ".Sort";
   	
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,znodomain,"","SSM_ID_PERSON",zfiltro);
		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:sortitems m4name="<%=sSortNode%>">
	<m4:param name="DT_START" value="DESC"/>
</m4:sortitems>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:endjob/>

<%
	int  zcounti  = 0;	
	int zcount = 0;
	int  zcount1  = 0;
	int  zcount1i  = 0;
	try {
		M4Operations m = new M4Operations(request);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
	    zcount1i = m.getCountInClient(znodo1,zsubsesion,znodo1);
		} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcount1v = String.valueOf(zcount1);
	
%>
<%
String sFiltroNameL=Tran.getProperty("Label.All");

%>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<table width="100%" cellspacing="0">
<% if (ztipocarga=="EC" || ztipocarga.equals("EC")) { %>
<tr><td class="titulofuncional" colspan="2">Programme des sessions de formation</td></tr>
<tr>
	<td><img src="/iconos/noname_puesto_144_100.gif" width="99" height="100" alt="Programme des sessions de formation" ></td>
	<td><div class="descripcionfuncional">Consultez le programme des sessions de formation ainsi que les collaborateurs convoqu&eacute;s à celles-ci. Connaissez, &agrave; l'aide du filtre, les inscriptions du collaborateur de votre choix.</div>
		<ul class="listaenlace"><li><a class="enlacefuncional" title="Formations suivies" href="mss_g3_p14.jsp?estado=31&zTLoad=FR">Formations suivies</a></li></ul>
	</td>
</tr>
<%}else{%>
<tr><td class="titulofuncional" colspan="2">Formations suivies</td></tr>
<tr>
	<td><img src="/iconos/noname_puesto_144_100.gif" width="99" height="100" alt="Programme des sessions de formation" ></td>
	<td><div class="descripcionfuncional">Consultez la liste des actions de formation auxquelles vos collaborateurs ont particip&eacute;. Connaissez &agrave; l'aide du filtre l'assistance &agrave; la formation d'un collaborateur de votre choix.</div>
		<ul class="listaenlace">
		<li><a class="enlacefuncional" title="Programme des sessions de formation" href="mss_g3_p14.jsp?estado=31&zTLoad=EC">Programme des sessions de formation</a></li>
		<li><a class="enlacefuncional" title="Plan de d&eacute;veloppement professionnel" href="smco_g3_dev_plan_filter.jsp">Plan de d&eacute;veloppement professionnel</a></li>
		</ul>
	</td>	
</tr>
<% } %>
</table>
<form name="formfiltro" id="formfiltro" action="">
<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo" colspan="5">Filtre</td></tr>
<tr>
	<td class="fuentecampofiltro" colspan="5">&nbsp;Collaborateur&nbsp;
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
	<td class="tablaestadosceldatitulo" >Collaborateur</td>
	<td class="tablaestadosceldatitulo" >Formation</td>
	<td class="tablaestadosceldatitulo" >Session</td>
	<td class="tablaestadosceldatitulo" >Date de d&eacute;but</td>
	<td class="tablaestadosceldatitulo" >Date de fin</td>
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

	<td class="fuentevalor" >&nbsp;<a href="javascript:verdescdevtraining('0','<m4:item m4name="<%=zidSubProduct%>" jsafe="true" htmlsafe="true"/>');" title="Détail de la formation"><m4:item m4name="<%=zNOMBREFORM%>" htmlsafe="true"/></a></td>

	<td class="fuentevalor" >&nbsp;<a href="javascript:verdescdevtraining('1','<m4:item m4name="<%=zidSubAction%>" jsafe="true" htmlsafe="true"/>');" title="Détail de la session"><m4:item m4name="<%=zNOMBRESESION%>" htmlsafe="true"/></a></td>

	<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zDTSTART%>" htmlsafe="true"/></td>
	<td class="fuentevalor" >&nbsp;<m4:item m4name="<%=zFECHAFIN%>" htmlsafe="true"/></td>
</tr>
</m4:loop>
 <%}else{%>
</table>
<br></br>
<% if (ztipocarga=="EC" || ztipocarga.equals("EC")) { %>
<div class="fuentenodatos">Aucune session n'est programm&eacute;e pour l'instant.</div>
<%}else{%>
<div class="fuentenodatos">Aucune formation n'est actuellement suivie.</div>
<% }} %>
</form>

<% if (ztipocarga=="EC" || ztipocarga.equals("EC")) { %>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&zTLoad=EC" method="post" name="oculto" id="oculto">
<%}else{%>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&zTLoad=FR" method="post" name="oculto" id="oculto">
<% } %>
<input type="hidden" id="zfiltro" name="zfiltro"  value="<%=zfiltroEncr%>" />
<input type="hidden" id="zNomfiltro" name="zNomfiltro"  value="<%=zNomfiltro%>" />
<input type="hidden" id="zinicios" name="zinicios" value="" />
</form>	

<%@include file="../../sse_generico/francais/generico_ventanas_post.jsp"%>
<%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>



