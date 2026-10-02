<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>

<base target="_self"> 
<%@ include file="../../mss_generico/english/menu_mss.jsp" %>
<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	

<title><%=Tran.getProperty("Label.LblListEmployee")%></title>

<script type="text/javascript">

function filtrar(){
	m4submit("NombreFormulario");
}

function escoger(Id,nombreyapellido,periodo,periodo_encr){
	var parametros = new Array(Id,nombreyapellido,periodo,periodo_encr);
	window.returnValue = parametros
	window.close()
}

</script>


<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	


<%
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
	String idPerson = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"FILTRO_ID_PERSON");
	String famName = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"FILTRO_N_FAMILY_NAME_1");
	String name = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"FILTRO_N_FIRST_NAME");


	if ((estado==null)||(estado.equals(""))){estado="0";}
	if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
	if ((idPerson==null)||(idPerson.equals(""))){idPerson = "";}
	if ((famName==null)||(famName.equals(""))){famName = "";}
	if ((name==null)||(name.equals(""))){name = "";}
%>
</head>
<body>


<%
   String zsubsesion = "SSE_EMPLOYEE";
   String zmeta4object = "SSE_EMPLOYEE";
   String znodo = "M4T_EMPLOYEE";

   String zventanas = "20";
   int zvuelta = 5;
   String zdireccion = "mss_generico/generico_employee.jsp";
   String zestado = "11";

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   String zSTD_ID_PERSON = zcomun + "STD_ID_PERSON";
   String zSTD_N_FAMILY_NAME_1 = zcomun + "STD_N_FAMILY_NAME_1";
   String zSTD_N_FIRST_NAME = zcomun + "STD_N_FIRST_NAME";
   String zSTD_OR_HR_PERIOD = zcomun + "STD_OR_HR_PERIOD";
   String zSCO_GB_NAME = zcomun + "SCO_GB_NAME";   
   String zSTD_DT_START = zcomun + "STD_DT_START";

   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
   String ztipocarga = "M4T";
%>

<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,znodo,"","FILTRO_ID_PERSON",idPerson);
		m.setItem(zsubsesion,znodo,"","FILTRO_N_FAMILY_NAME_1",famName);
		m.setItem(zsubsesion,znodo,"","FILTRO_N_FIRST_NAME",name);
		} catch(Exception e) {}
%>


<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
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
	String	zcountv = String.valueOf(zcounti);
	
%>
<br>
<table border="0" width="98%" height="98%"  border=1>
<tr>
<form action="/servlet/CheckSecurity/JSP/mss_generico/generico_employee.jsp" method="post" name="NombreFormulario" id="NombreFormulario" >
<input type="hidden" id="zinicios" name="zinicios"> </input>
<input type="hidden" id="estado" name="estado"> </input>

<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr class = "tablaestadosceldatitulo">
	<td colspan="6"><%=Tran.getProperty("Label.Filter")%> </td>
</tr>
<tr>
	<td class="fuentecampo" colspan="2"><m4:label m4name="<%=zSTD_ID_PERSON%>" htmlsafe = "true"/></td>
	<td class="fuentecampo" colspan="2"><input class="fuenteformulario" type="text" id="FILTRO_ID_PERSON" name="FILTRO_ID_PERSON" size="9" maxlength="9" title="<%=Tran.getProperty("Label.LblIDRH")%>"tabindex="1" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(idPerson)%>"/>
	</td>
</tr>
<tr>
	<td class="fuentecampo" colspan="2"><m4:label m4name="<%=zSTD_N_FIRST_NAME%>" htmlsafe = "true"/></td>
	<td class="fuentecampo" colspan="2"><input class="fuenteformulario" type="text" id="FILTRO_N_FIRST_NAME" name="FILTRO_N_FIRST_NAME" size="30" maxlength="50" title="<%=Tran.getProperty("Label.LblNombre")%>"tabindex="1" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(name)%>"/>
	</td>
</tr>
<tr>
	<td class="fuentecampo" colspan="2"><m4:label m4name="<%=zSTD_N_FAMILY_NAME_1%>" htmlsafe = "true"/></td>
	<td class="fuentecampo" colspan="2"><input class="fuenteformulario" type="text" id="FILTRO_N_FAMILY_NAME_1" name="FILTRO_N_FAMILY_NAME_1" size="30" maxlength="50" title="<%=Tran.getProperty("Label.LblApellido")%>"tabindex="1" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(famName)%>" />
	</td>
</tr>

<tr>
	<td class="fuenteboton" colspan="6">	&nbsp;
	<a title="<%=Tran.getProperty("Label.LblApellido")%>"href="javascript:filtrar();" tabindex="2"><img alt="<%=Tran.getProperty("Label.LblApellido")%>"border="0" src="/iconos/icono_filtrar_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
	</td>
</tr>
</table>
</form>
<% 
if (zcount > 0) {
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
%>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr>
	<td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSTD_ID_PERSON%>" htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSTD_OR_HR_PERIOD%>" htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSTD_DT_START%>" htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCO_GB_NAME%>" htmlsafe = "true"/></td>
	
</tr>
<%String aux = "";%>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;

if (zcontrol==0){
	aux = "2" ;
} else {
	aux = "";
}
	%>
<tr>
    <m4:item m4varname="sIdHr" m4name="<%=zSTD_ID_PERSON%>" htmlsafe = "true" jsafe= "true"/>
	<%String sIdHr_Encr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdHr);%>
	<m4:item m4varname="sOrHr" m4name="<%=zSTD_OR_HR_PERIOD%>" htmlsafe = "true" jsafe= "true"/>
	<%String sOrHr_Encr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sOrHr);%>
	<td class="fuentevalor<%=aux%>" ><a title="<%=Tran.getProperty("Label.LblEmployee")%>" href="javascript:escoger('<%=sIdHr_Encr%>','<m4:item m4name="<%=zSCO_GB_NAME%>" htmlsafe = "true" jsafe= "true"/>','<%=sOrHr%>','<%=sOrHr_Encr%>');">&nbsp;<m4:item m4name="<%=zSTD_ID_PERSON%>" htmlsafe = "true" jsafe= "true"/></a></td>
	<td class="fuentevalor<%=aux%>">&nbsp;<m4:item m4name="<%=zSTD_OR_HR_PERIOD%>" htmlsafe = "true" jsafe= "true"/></td>
	<td class="fuentevalor<%=aux%>">&nbsp;<m4:item m4name="<%=zSTD_DT_START%>" htmlsafe = "true" jsafe= "true"/></td>
	<td class="fuentevalor<%=aux%>" >&nbsp;<m4:item m4name="<%=zSCO_GB_NAME%>" htmlsafe = "true" jsafe= "true"/></td>
</m4:loop>
</table>
<%@include file="../../mss_generico/english/generico_ventanas_modal.jsp"%>
<%} else { %>
	<div class="fuentenodatos"><%=Tran.getProperty("Label.NoDataFound10")%></div>
<% } %>	

</div>
</tr>
</table>
<m4:endpage/>

</body>
</html>


