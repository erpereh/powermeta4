<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<%@ page contentType="text/html; charset=UTF-8"  import="com.meta4.session.*, com.meta4.m4operations.*" %>

<%
//no cache
response.setHeader("Pragma", "no-cache"); 
response.setHeader("Cache-Control", "no-store"); 
response.setDateHeader("Expires", -1); 

String unidad = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"unidad");
String nombreunidad = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombreunidad");
String tipo = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tipo");
//M4GONZALO: Añadimos una variable para la versión del navegador
String version = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"version");

%>

<html xmlns="http://www.w3.org/1999/xhtml">

 <head>
		<!--<title>Organigrama Cr&eacute;dito y Cauci&oacute;n </title>-->
		<title>Organigrama </title>
		<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />		
		
		<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />		
		<script type="text/javascript" src="/library/jquery.js"></script>				
		<script type="text/javascript" language="Javascript1.2" src="/libreria/orgchart.js"></script>
		<link href="/css/orgchart.css" rel="stylesheet" type="text/css"/>
				
		 <style>
        .container { max-width:960px; margin:150px auto;}
        </style>
		<script type="text/javascript">
			nav = "";
			function navegador(){
		      var agente = window.navigator.userAgent;
		      var navegadores = ["Chrome", "Firefox", "Trident"];
		      for(var i in navegadores){
		          if(agente.indexOf( navegadores[i]) != -1 ){
		              return navegadores[i];
		          }
		      }
		  	}
		  
		  nav = navegador();
			if (nav == "Firefox") { 
			    document.write("<style>.paddNA{padding: 0 3px 0 2px;}.margenNA{margin-bottom:  -23px!important;}</style>"); 
			} else{  
			    document.write("<style>.paddNA{padding: 0 3px 0 2px;}.margenNA{margin-bottom:  -10px!important;}</style>"); 
			}//else if (nav == "Chrome"){ 
			//    document.write("<style>.paddNA{padding: 0 6px 0 6px!important;}.margenNA{}</style>"); 
			//} else{
			//	document.write("<style>.paddNA{padding: 0 6px 0 6px!important;}.margenNA{}</style>"); 
			}
		</script>	
				
 </head>
 <%
	String zsubsesion 		= "CSP_ORGANIGRAMA";
	String zmeta4object 	= "CSP_ORGANIGRAMA";
	String nodoArbol		= "CSP_ARBOL_ORGANIGRAMA";
	String znodoResultado 	= "CSP_RESULTADO";
	
	String zoutputdefArbol	= zsubsesion + "!" + nodoArbol 	+ "[*]";
	String zmoveArbol		= nodoArbol 	 + ":" + nodoArbol 	+ "[FIRST]";
	
	String ztipocarga = "1";    
	String zmetodocarga 	= zsubsesion + "!CSP_ORGANIGRAMA.CSP_CARGA";
	
	String arbol = "";
	String jQuery = "";
	String divs = "";
	String imagenes = "";
	
 %>
 
 <m4:startpage m4task="<%=zsubsesion%>"/>

	<m4:beginjob/>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
	
	<%		try {
				M4Operations m 	= new M4Operations(request);
				
				m.setItem(zsubsesion,zsubsesion,"","CSP_P_UNIDAD",unidad);					
				m.setItem(zsubsesion,zsubsesion,"","CSP_P_TIPO",tipo);				
				//M4GONZALO: Pasamos al navegador la versión del explorador
				m.setItem(zsubsesion,zsubsesion,"","CSP_P_VERSION",version);					
				
			} catch(Exception e) {}
	%>
	<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="ARG_TIPO" value="<%=ztipocarga%>"/></m4:exec>
	
	<m4:outputdef m4alias="<%=nodoArbol%>" > <m4:param name="m4name0" value="<%=zoutputdefArbol%>"/> </m4:outputdef>	

<m4:endjob/>

<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveArbol%>"/>  </m4:move>

 
<body onload="contraerExpandir('1')"> 

<h1> Organigrama  (<%=nombreunidad%>)  </h1>
<a href="javascript:contraerExpandir('1');"><img src = "/images/horizontal.gif" alt="Expandir Organigrama"/></a>

<%		try {
				M4Operations m 	= new M4Operations(request);				
				arbol 	 = m.getItem(nodoArbol,zmeta4object,nodoArbol,"","CSP_ARBOL_HTML");
				divs  	 = m.getItem(nodoArbol,zmeta4object,nodoArbol,"","CSP_DIVS_DEPENDIENTES");
				imagenes = m.getItem(nodoArbol,zmeta4object,nodoArbol,"","CSP_DIVS_IMAGENES");
				
				out.println(imagenes);
				out.println(divs);
				out.println(arbol);				
			
			} catch(Exception e) {}
	%>




<script>
		
		$(document).ready(function () {			
			// create a tree
			$("#tree-data").jOrgChart({
				chartElement: $("#tree-view"), 
				nodeClicked: nodeClicked
			});
			
			// lighting a node in the selection
			function nodeClicked(node, type) {
				node = node || $(this);
				$('.jOrgChart .selected').removeClass('selected');
				node.addClass('selected');
			}
		});
		
</script>


</body>

</html>

 	

 		
 		 
 	
 		 