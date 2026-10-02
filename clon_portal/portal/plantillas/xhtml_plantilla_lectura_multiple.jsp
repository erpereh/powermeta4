<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Strict//EN""DTD/xhtml1-strict.dtd">
<html>
<head>
<title>Titulo</title><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<%
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");

	// Requerido por funcionalidad: VENTANA DE NAVEGACION
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
	// Fin del Requerido
	
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
	
	// Requerido por funcionalidad: VENTANA DE NAVEGACION
	if ((zinicios==null)||(zinicios.equals(""))){
	   zinicios = "1";
	}
	// Fin del Requerido
%>
</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
// Requerido para el acceso a un Meta4Object:

	// ID de la subsesion:
	String zsubsesion = "ID...";
	// ID de la subsesion:
	String zmeta4object = "ID...";
	// ID del nodo:
	String znodo = "ID...";
	// ID del método de carga:
	String zmetodocarga = zsubsesion + "!" + znodo + "." + "ID...";

// Fin del Requerido para el acceso a un Meta4Object:	

// Requerido para funcionalidad: VENTANA DE NAVEGACION
	
	//Número máximo de registros en pantalla:
	String zventanas = "20";
	//Número máximo de ventanas en cada fila:
	int zvuelta = 5;
	//Dirección de la página JSP (sin la parte común tecnológica)
	String zdireccion = "directorio/pagina.jsp";
	//Estado de la página JSP (para añadir en la barra de localizacion)
	String zestado = "Número...";
	
	// No se modifica.--->
	int zregistroinicial = Integer.valueOf(zinicios).intValue();
	zregistroinicial = zregistroinicial - 1;
	int zventana  = Integer.valueOf(zventanas).intValue();
	int zregistrofinal = zregistroinicial + zventana - 1;

// Fin del Requerido para funcionalidad: VENTANA DE NAVEGACION

// Requerido para el acceso a un Meta4Object:

	// Requerido para funcionalidad: VENTANA DE NAVEGACION
	
		// Tamaño de la ventana de datos disponible en la página:
		// Posibles valores:
			//	* (implica todo el conjunto de datos)			Utilizado en listas o en lectura simple
			// Un intervalo (zregistroinicial-zregistrofinal)	Utilizado en lecturas múltiples con ventana
		String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
		// Posicionamiento dentro de la ventana de datos anterior:
		// Posibles valores:
			// BEGIN				Se posiciona al inicio del conjunto de datos. Utilizado en listas o en lectura simple
			// zregistroinicial		Se posiciona al inicio de la ventana. Utilizado en lecturas múltiples con ventana
		String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
	// Fin del Requerido para funcionalidad: VENTANA DE NAVEGACION

	//ID del tipo de carga:
	//Valores habituales: SSE,M4T,ALL... dependiendo de la pantalla
	String ztipocarga = "SSE";

// Items que vamos a utilizar (visualizar o requeridos en una acción):
  
	// No modificable:
	String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
	// ID del item:
	String zID... = zcomun + "ID...";
%>
<!-- **************************************************************************-->
<!-- No se modifica en general -->
<!-- Seguridad -->
<m4:startpage m4task="<%=zsubsesion%>"/>
<!-- Comienza la transaccion -->
<m4:beginjob/>
<!-- Instanciaciónd del m4object -->
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<!-- Ejecución de la carga del m4object -->
<m4:exec m4method="<%=zmetodocarga%>"/>
<!-- Salida de datos -->
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<!-- Fin de la transaccion -->
<!-- **************************************************************************-->
<!-- Posicionamiento -->
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
// Requerido para funcionalidad: VENTANA DE NAVEGACION
// Realizamos el count del nodo y de la ventana actual para ese nodo (client)
int  zcount  = 0;
int  zcounti  = 0;	
try {
	M4Operations m = new M4Operations(request);
	zcount = m.getCount(znodo,zsubsesion,znodo);
	zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
} catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);
// Fin del Requerido para funcionalidad: VENTANA DE NAVEGACION
%>
<table width="100%">
<tr>
	<td class="titulofuncional" colspan="2">Titulo</td>
</tr>
<tr>
	<td><img alt="" src="/iconos/nombre.gif" width="" height="" /></td>
	<td>
		<div class="descripcionfuncional">Texto</div>
		<ul class="listaenlace"><li><a class="enlacefuncional" title="" tabindex="1" href="/servlet/CheckSecurity/JSP/pagina.jsp?estado=4">Enlace</a></li></ul>
	</td>
</tr>
</table>
<!-- Comprobamos si hay registros. Si no hay ninguno aparece un mensaje -->
<%if (zcounti > 0) {%>
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
	<td>&nbsp;Nombre Campo</td>
</tr>
<%
// Requerido para una iteracion de registros:
// No se modifica
// Iteracion de una tabla
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
String zposicions = "0";
int zcontrol = 0;
int zposicion =0;
%><m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>"><%
	zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
// Fin de Requerido para una iteracion de registros:
// Campos pares:
if (zcontrol==0){%>
 <tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zID...%>" htmlsafe="true"/></td>
</tr>
<%
// Campos impares:
}else{%>
<tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zID...%>" htmlsafe="true"/></td>
</tr>
 <%}%>
</m4:loop>
</table>
<%@include file="../../sse_generico/espanol/generico_ventanas.jsp"%>	
<%}else{%>
<div class="fuentenodatos">No tienes datos...</div>
<%}%>
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
</body>


