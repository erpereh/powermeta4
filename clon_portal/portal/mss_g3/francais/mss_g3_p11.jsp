<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<title>&Eacute;valuation des formations</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>	
<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>	
<%  
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
String zfiltro = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro");
String znombre = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znombre");
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((zfiltro==null)|| (""==zfiltro)){zfiltro = "ALL";}
if ((znombre==null)|| (""==znombre)){znombre = "Todos";}

%>
<script type="text/javascript">
function filtrar(){
var valor =m4select("filtro","prueba","value");
var nombre =m4select("filtro","prueba","text");
m4valor("oculto","zfiltro",valor,"set");
m4valor("oculto","znombre",nombre,"set");
m4submit("oculto");
}
</script>
</head>
<body>
<%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
   String zsubsesion = "SSM_EVENT_EVAL_ANSWER";
   String zmeta4object = "SSM_EVENT_EVAL_ANSWER";
   String znodo = "SSM_EVENT_EVAL_ANSWER";
   String znodo2 = "SSM_TRAINING_ACTIONS_SESION";
   
   String ztipocarga = " ";
   String zventanas = "30";
   int zvuelta = 5;
   String zdireccion = "/mss_g3/mss_g3_p11.jsp";
   String zestado="31";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
   
   String zoutputdef2= zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   String zSCOIDDEVACTION2 = zcomun2+ "SCO_ID_DEV_SUBACTION";
   String zSCONMDEVACTION2 = zcomun2+ "SCO_NM_DEV_SUBACTION";
   
   String znodoprincipal = "SSM_PRINCIPAL";
   String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";
   String zpos="";  
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request);
	    m.setItem(zsubsesion,znodoprincipal,"","SSE_ID_DEV_ACTION",zfiltro);
	} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>" ><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>

<%
	int  zcounti  = 0;	
	int zcount = 0;
	int  zcounti2  = 0;	
	int  zcount2  = 0;
	try {
		M4Operations m = new M4Operations(request);
		zcount = m.getCount(znodo,zsubsesion,znodo);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
		zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcountv2 = String.valueOf(zcounti2);
%>
<%
String sFiltroNameL=Tran.getProperty("Label.All");

%>
<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2">&Eacute;valuation des formations</td></tr>
<tr>
	<td><img alt="&Eacute;valuation des formations" title="&Eacute;valuation des formations"src="/iconos/noname_competencias_puesto_82_100.gif" width="82" height="100" /></td>
	<td>
	<div class="descripcionfuncional">Consultez les &eacute;valuations des formations suivies.</div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" tabindex="1" title="Atteindre Emplois" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?.jsp?estado=3">Emplois</a></li>
	</ul>
	</td>
</tr>
</table>
<form name="prueba" id="prueba" action=" ">
<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo">Filtre</td></tr>
<tr>
	<td class="fuentecampofiltro">&nbsp;Formation&nbsp;:&nbsp;
	<select id="filtro" class="fuenteapartados"  onchange="filtrar()"title="S&eacute;lectionnez un stage">
	<option value="ALL"><%=sFiltroNameL%></option>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSCOIDDEVACTION2%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCONMDEVACTION2%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	</td>
	<script type="text/javascript" language="Javascript1.5">
      if ('<%=zfiltro%>'!= "ALL"){
        m4searchoptioness('prueba','filtro','<%=zfiltro%>');
      }
	 </script>
</tr>	
</table>
</form>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p11.jsp?estado=31" method="post" name="oculto" id="oculto">
<input type="hidden" id="zinicios" name="zinicios" value="" />
<input type="hidden" id="zfiltro" name="zfiltro" value="<%=zfiltro%>" />
<input type="hidden" id="znombre" name="znombre"  value="<%=znombre%>" />
</form>
<% if (zcounti > 0) { %>	
<table width="100%" cellspacing="0">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Stage</td>
	<td class="tablaestadosceldatitulo">&nbsp;Question </td>
	<td class="tablaestadosceldatitulo" colspan="2">&nbsp;Pourcentage&nbsp;R&eacute;ponse</td>
</tr>	
<%  
try {
	M4Operations t = new M4Operations(request);
	int i = 0;
	String zSCONMDEVACTION="";
	String zSCONMANSWERVALUE="";
	String zSCONMSQUESTION="";
	String zSSEPORCENTAJE="";
	String znombreant="";
	String znombrenuevo="";
	String zprenueva="";
	String zpreant ="";
	String zIdType ="";
	int a=0;
	for (i =zregistroinicial; i < zregistrofinal+1; i++){
		String id = String.valueOf(i);
		t.moveData(znodo,zmeta4object,znodo,id);
		znombrenuevo = t.getItem(znodo,zmeta4object,znodo,"","SCO_NM_DEV_SUBACTION"); 
		zSCONMANSWERVALUE = t.getItem(znodo,zmeta4object,znodo,"","SCO_NM_ANSWER_VALUE");
		zprenueva = t.getItem(znodo,zmeta4object,znodo,"","SCO_NM_S_QUESTION");
		zSSEPORCENTAJE = t.getItem(znodo,zmeta4object,znodo,"","SSE_PORCENTAJE");
		zIdType = t.getItem(znodo,zmeta4object,znodo,"","SCO_ID_ANSWER_VALUE"); 
		
		if ((znombrenuevo==znombreant)|| znombrenuevo.equals(znombreant)){
				znombrenuevo="";	
				if ((zprenueva==zpreant)|| zprenueva.equals(zpreant)){
					zprenueva="";	
				}else{
					zpreant=zprenueva;	
				}
				
		}else{
			znombreant=znombrenuevo;	
		} 
		if (i ==zregistroinicial){zpreant=zprenueva;}
		  a=i%2;
		 zpos="";if (a==0){zpos="2";}
%>

<tr>
	<td class="fuentevalor<%=zpos%>">&nbsp;<%=znombrenuevo%></td>
	<td class="fuentevalor<%=zpos%>">&nbsp;<%=zprenueva%></td>
	<td class="fuentevalor<%=zpos%>">&nbsp;<%=zSSEPORCENTAJE%>&nbsp;%</td>
	<%if (zIdType.equals("00")){%>
	<td class="fuentevalor<%=zpos%>">&nbsp;Autres&nbsp;/&nbsp;<%=zSCONMANSWERVALUE%> </td>
	<%}else{%>
	<td class="fuentevalor<%=zpos%>">&nbsp;<%=zSCONMANSWERVALUE%></td>
	<%}%>
</tr>

<%
	}
} catch(Exception e) {}
%>	 
</table>
<%@include file="../../sse_generico/francais/generico_ventanas_post.jsp"%>
<%}else{%>
<div class="fuentenodatos">Aucune &eacute;valuation ne figure actuellement pour cette formation.</div>
<br /><br />
<%}%>
<%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>


