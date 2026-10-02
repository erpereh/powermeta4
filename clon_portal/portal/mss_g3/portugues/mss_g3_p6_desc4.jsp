<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
	<head>
	<title>	Inscri&ccedil;&atilde;o em curso	</title>
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %>	
	<script type="text/javascript">
    </script>
		
		<!-- Librerias Java. Obligatorio-->
		<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>


	<%      
	Generatablaparametros zobjtabla = new Generatablaparametros(request);
	String estado =zobjtabla.m4paramvalor("estado");
	String zidtrtb = zobjtabla.m4paramvalor("zidtrtb");
	if ((estado==null)||(estado.equals(""))){
		estado = "0";
		}
	%>
</head>
<body>
   <%@ include file="../../mss_generico/portugues/mssgenerico_menusup.jsp" %>
  <%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<table>
<td class="titulofuncional" colspan="2">&nbsp;</td>
</table>
	<!-- **************************************************************************-->
	<!-- Carga del Meta4Object. El nombre de la Tarea deberia ser el mismo nombre que el del meta4object que se carga...o si se carga mas de uno el del principal. Antes de nada se insertan las importacion de clases -->
	<!-- Definicion del Meta4Object -->
	
	
	<%
		   String zsubsesion = "SSM_ENROLLMENT_OVERVIEW";
		   String zMeta4Object = "SSM_ENROLLMENT_OVERVIEW";
	
			String znodo = "M4T_IDTRTB";
			String znodo1 = "M4T_DC";
			String znodo2 = "M4T_DM";
	
			String ztipocarga = "M4T";
		
	        int zregistroinicial = 0;
	        //zregistroinicial = zregistroinicial - 1;
			int zventana  = 0;
		    int zregistrofinal = zregistroinicial + zventana - 1;
		// No se modifica en general.

   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zraiz = zsubsesion + "!" + znodo + ".";			

   String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
   String zraiz1 = zsubsesion + "!" + znodo1 + ".";
   	   
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zraiz2 = zsubsesion + "!" + znodo2 + ".";
   
		// Metodo de carga del Meta4Object generico

	String zMETODOCARGA = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";		
			  

				
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%= zMeta4Object %>" m4name="<%=zsubsesion%>"/>
<% 
	try {
	M4Operations m = new M4Operations(request);
	m.setItem(zsubsesion,znodo,"","IDTRTB",zidtrtb);
	} catch(Exception e) {}
%>
<m4:exec m4method="<%=zMETODOCARGA%>">
<m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:endjob/>

<%
	int  zcount1  = 0;
	int  zcount1i  = 0;	
	int  zcount2  = 0;
	int  zcount2i  = 0;	
	
	String zDAYS = "";
	String zHOURS = "";
	String zHOURSOTW = "";
	String zNBMAX = "";
	String zNBMIN = "";
	String zNMCOURSE = "";
	String HTTPPATH1 = "";
	String EDUCATOBJ1 = "";
	String NMPT1 = "";
	String NMDEV1 = "";
	
	
	String zNMMULTIMEDIA = "";
	String zAUTHOR = "";
	String zCDDATE = "";
	String zESTIMATEDDAYS = "";
	String zESTIMATEDHOURS = "";
	String zNUMBER = "";
	String EDUCATOBJ2 = "";
	String NMPT2 = "";
	String NMDEV2 = "";
	String HTTPPATH2 = "";
	 String z1 = "";
	 String z2 = "";
	 String z3 = "";
	try {
	    
	    M4Operations m = new M4Operations(request);
	    zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
	    zcount1i = m.getCountInClient(znodo1,zsubsesion,znodo1);
	    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
	    zcount2i = m.getCountInClient(znodo2,zsubsesion,znodo2);
	
	
	 zDAYS = m.getItem(znodo1,zMeta4Object,znodo1,"","SCO_DAYS");
	 zDAYS = zDAYS.substring(0,zDAYS.indexOf("."));
	  
 	 zHOURS = m.getItem(znodo1,zMeta4Object,znodo1,"","SCO_HOURS");
	 zHOURS = zHOURS.substring(0,zHOURS.indexOf("."));
	  	 
	 zHOURSOTW = m.getItem(znodo1,zMeta4Object,znodo1,"","SCO_HOURS_OTW");
	 zHOURSOTW = zHOURSOTW.substring(0,zHOURSOTW.indexOf("."));
	 	 
	 zNBMAX = m.getItem(znodo1,zMeta4Object,znodo1,"","SCO_NB_MAX");
	 zNBMAX = zNBMAX.substring(0,zNBMAX.indexOf("."));
	 
	 zNBMIN = m.getItem(znodo1,zMeta4Object,znodo1,"","SCO_NB_MIN");
	 zNBMIN = zNBMIN.substring(0,zNBMIN.indexOf("."));
	 	 
	 zNMCOURSE = m.getItem(znodo1,zMeta4Object,znodo1,"","SCO_NM_COURSE");
	 HTTPPATH1 = m.getItem(znodo1,zMeta4Object,znodo1,"","SCO_HTTP_PATH");
	 EDUCATOBJ1 = m.getItem(znodo1,zMeta4Object,znodo1,"","SCO_EDUCAT_OBJ");
	 NMPT1 = m.getItem(znodo1,zMeta4Object,znodo1,"","SCO_NM_PRODUCT_TYPE");
	 NMDEV1 = m.getItem(znodo1,zMeta4Object,znodo1,"","SCO_NM_DEV_PRODUCT");
    	} catch(Exception e) {}

     try {
	 M4Operations m = new M4Operations(request);
	
	 zNMMULTIMEDIA = m.getItem(znodo2,zMeta4Object,znodo2,"","SCO_NM_MULTIMEDIA");
	 zAUTHOR = m.getItem(znodo2,zMeta4Object,znodo2,"","SCO_AUTHOR");
	 zCDDATE = m.getItem(znodo2,zMeta4Object,znodo2,"","SCO_CD_DATE");
	 		z1 = zCDDATE.substring(0,4);
			z2 = zCDDATE.substring(5,7);
			z3 = zCDDATE.substring(8,10);
	 zCDDATE	= z3 + "-" + z2 + "-" + z1;
	 
	 EDUCATOBJ2 = m.getItem(znodo2,zMeta4Object,znodo2,"","SCO_EDUCAT_OBJ");
	 NMPT2 = m.getItem(znodo2,zMeta4Object,znodo2,"","SCO_NM_PRODUCT_TYPE");
	 NMDEV2 = m.getItem(znodo2,zMeta4Object,znodo2,"","SCO_NM_DEV_PRODUCT");
	 HTTPPATH2 = m.getItem(znodo2,zMeta4Object,znodo2,"","SCO_HTTP_PATH");

	 zNUMBER = m.getItem(znodo2,zMeta4Object,znodo2,"","SCO_NUMBER_OF_UNITS");
	 zNUMBER = zNUMBER.substring(0,zNUMBER.indexOf("."));

	 zESTIMATEDDAYS = m.getItem(znodo2,zMeta4Object,znodo2,"","SCO_ESTIMATED_DAYS");
	 zESTIMATEDDAYS = zESTIMATEDDAYS.substring(0,zESTIMATEDDAYS.indexOf("."));

	 zESTIMATEDHOURS = m.getItem(znodo2,zMeta4Object,znodo2,"","SCO_ESTIMATED_HOURS");
	 zESTIMATEDHOURS = zESTIMATEDHOURS.substring(0,zESTIMATEDHOURS.indexOf("."));
	 
	 
    	} catch(Exception e) {}
%>
		<% 
		if (zcount1i != 0) {
		%>
	<table border="0" width="100%" cellspacing = "0">
	<tr>
	<!-- Titulo funcional de la pagina -->
	<td class="titulofuncional" colspan="2">Descri&ccedil;&atilde;o do curso de forma&ccedil;&atilde;o
	</tr>
	<tr>
	<td>
		<img src="/iconos/noname_incripciones_formacion_99_100.gif" width="99"  height="100" alt="Inscri&ccedil;&atilde;o em curso" border="0">
	 </td>
	<td>
	<div class="descripcionfuncional">
	Nome do curso:&nbsp;<%=zNMCOURSE%>
	</div>
	 <ul class="listaenlace"><li><a class="enlacefuncional" title = "Eventos actuais convocados." href="mss_g3_p10.jsp?estado=31">Eventos actuais convocados.</a></li></ul>
	</td>
	</tr>
	</table>
<!-- **************************************************************************-->
<!-- Fin de Tabla de descripcion. -->
<!-- ********************************************************************* -->

	<table class = "TablaEstados" cellspacing = "0" width="100%">
	<tr class = "tablaestadosceldatitulo">
		<td colspan="3" align="center">	Descri&ccedil;&atilde;o do curso de forma&ccedil;&atilde;o</td>
	</tr>				
	<tr class = "tablaestadosceldatitulo"></tr>
	<tr>
	<td class = "fuentecampo" colspan="2">Produto tipo de forma&ccedil;&atilde;o:	</td>
	<td class = "fuentevalor" > &nbsp;<%=NMPT1%>	</td>
	</tr>
	<tr>
	<td class = "fuentecampo" colspan="2">Produto de forma&ccedil;&atilde;o:</td>
	<td class = "fuentevalor" > &nbsp;<%=NMDEV1%></td>
	</tr>
	</table>
	<table class = "TablaEstados" cellspacing = "0" width="100%">
	<tr>
	<td class = "fuentecampo" width="7%">Dias:	</td>
	<td class = "fuentevalor" width="17%" align="left"><%=zDAYS%></td>
	<td class = "fuentecampo" width="25%">N&uacute;mero de horas:</td>
	<td class = "fuentevalor" width="5%" align="left"><%=zHOURS%></td>
	<td class = "fuentecampo" width="30%" >	N&uacute;mero de horas extra: </td>
	<td class = "fuentevalor" width="15%" align="left"> <%=zHOURSOTW%></td>
	</tr>
	</table>
	<table class = "TablaEstados" cellspacing = "0" width="100%">
	<tr>	
	<td class = "fuentecampo" width="35%">N&uacute;mero m&iacute;nimo de participantes: </td>
	<td class = "fuentevalor" width="15%" align="left"> &nbsp;<%=zNBMIN%></td>
	<td class = "fuentecampo" width="35%">N&uacute;mero m&aacute;ximo de participantes: 	</td>
	<td class = "fuentevalor" width="15%" align="left"> &nbsp;<%=zNBMAX%></td>
	</tr>
	</table>
	<table class = "TablaEstados" cellspacing = "0" width="100%">
	<tr>	
	<td class = "fuentecampo" width="25%">Objectivo da forma&ccedil;&atilde;o: </td>
	<td class = "fuentevalor" width="75%">&nbsp;<%=EDUCATOBJ1%></td>
	</tr>
	<tr>	
	<td class = "fuentecampo" width="25%">P&aacute;gina na Internet: </td>
	<td class = "fuentevalor" width="75%"> &nbsp;<a href ="<%=HTTPPATH1%>"><%=HTTPPATH1%></td>
	</tr>
	</table>
	<% 
	 } 
	%>


		<% 
		if (zcount2i!= 0 ) {
		%>
<table border="0" width="100%" cellspacing = "0">
	<tr>
	<!-- Titulo funcional de la pagina -->
	<td class="titulofuncional" colspan="2">Descri&ccedil;&atilde;o do conte&uacute;do multim&eacute;dia						
	</tr>
	<tr>
	<td>
		<img src="/iconos/noname_incripciones_formacion_99_100.gif" width="99"  height="100" alt="Inscri&ccedil;&atilde;o em curso" border="0">
	 </td>
	<td>
	<div class="descripcionfuncional">
	Nome do conte&uacute;do multim&eacute;dia:&nbsp;	<%=zNMMULTIMEDIA%>
	</div>
	 <ul class="listaenlace"><li><a class="enlacefuncional" title = "Inscri&ccedil;&otilde;es na ac&ccedil;&atilde;o de forma&ccedil;&atilde;o" href="sse_g3_p7.jsp?estado=31">Inscri&ccedil;&otilde;es na ac&ccedil;&atilde;o de forma&ccedil;&atilde;o</a></li></ul>
	</td>
	</tr>
	</table>
<!-- **************************************************************************-->
<!-- Fin de Tabla de descripcion. -->
<!-- ********************************************************************* -->
	<table class="TablaEstados" cellspacing="0" width="100%">
	<tr class = "tablaestadosceldatitulo">
	<td colspan="3" align="center">	Descri&ccedil;&atilde;o do conte&uacute;do da forma&ccedil;&atilde;o multim&eacute;dia	</td>
	</tr>				
	<tr class = "tablaestadosceldatitulo">	</tr>
	<tr>
	<td class = "fuentecampo" colspan="2">Produto tipo de forma&ccedil;&atilde;o:</td>
	<td class = "fuentevalor">&nbsp;<%=NMPT2%></td>
	</tr>
	<tr>
	<td class = "fuentecampo" colspan="2">Produto de forma&ccedil;&atilde;o:</td>
	<td class = "fuentevalor">&nbsp;<%=NMDEV2%></td>
	</tr>
	</table>
	<table class = "TablaEstados" cellspacing = "0" width="100%">
	<tr>
	<td class = "fuentecampo" colspan="2">Autor:</td>
	<td class = "fuentevalor">&nbsp;<%=zAUTHOR%></td>
	<td class = "fuentecampo" colspan="2">Data do CD: </td>
	<td class = "fuentevalor">&nbsp;<%=zCDDATE%></td>
	</tr>
	</table>
	<table class = "TablaEstados" cellspacing = "0" width="100%">
	<tr>	
	<td class = "fuentecampo" colspan="2">Dias previstos: </td>
	<td class = "fuentevalor" align="right">&nbsp;<%=zESTIMATEDDAYS%></td>
	<td class = "fuentecampo" colspan="2" >Horas previstas: </td>
	<td class = "fuentevalor" align="right">&nbsp;<%=zESTIMATEDHOURS%></td>
	<td class = "fuentecampo" colspan="2">Unidades dispon&iacute;veis: </td>
	<td class = "fuentevalor" align="right">&nbsp;<%=zNUMBER%></td>
	</tr>
	</table>
	<table class = "TablaEstados" cellspacing = "0" width="100%">
	<tr>	
	<td class = "fuentecampo" width="25%">Objectivo da forma&ccedil;&atilde;o: </td>
	<td class = "fuentevalor" width="75%">&nbsp;<%=EDUCATOBJ2%></td>
	</tr>
	<tr>	
	<td class = "fuentecampo" width="25%">P&aacute;gina na Internet: </td>
	<td class = "fuentevalor" width="75%">&nbsp;<a href ="<%=HTTPPATH2%>"><%=HTTPPATH2%></td>
	</tr>
	</table>
<% 
 } 
%>
<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
</div>
	<m4:endpage/>
	</body>
</html>
