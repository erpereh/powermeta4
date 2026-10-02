<%@ page contentType="text/html; charset=utf-8" %>
<%@ page language="java" pageEncoding="utf-8"%>

<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>

<%
response.setHeader("Pragma", "no-cache"); 
response.setHeader("Cache-Control", "no-store"); 
response.setDateHeader("Expires", -1); 

String unidad = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"unidad");
String nombreunidad = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombreunidad");
String tipo = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tipo");
String version = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"version");
%>

<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">
	<title>Organigrama</title>
	<link rel="stylesheet" href="/QOrg/css/Treant.css">
    <link rel="stylesheet" href="/QOrg/css/basic-example.css">     
    <link rel="stylesheet" href="/QOrg/css/QOrg.css">   
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
	
	String vDATOS = "";
%>
 
<m4:startpage m4task="<%=zsubsesion%>"/>

<m4:beginjob/>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>		
	<%	
		try {
			M4Operations m 	= new M4Operations(request);				
			m.setItem(zsubsesion,zsubsesion,"","CSP_P_UNIDAD",unidad);					
			m.setItem(zsubsesion,zsubsesion,"","CSP_P_TIPO",tipo);				
			m.setItem(zsubsesion,zsubsesion,"","CSP_P_VERSION",version);					
			
		} catch(Exception e) {}
	%>
	<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="ARG_TIPO" value="<%=ztipocarga%>"/></m4:exec>
	<m4:outputdef m4alias="<%=nodoArbol%>" > <m4:param name="m4name0" value="<%=zoutputdefArbol%>"/> </m4:outputdef>	
<m4:endjob/>

<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveArbol%>"/>  </m4:move>

<body> 

	<%		
		try {
			M4Operations m 	= new M4Operations(request);				
			vDATOS 	 = m.getItem(nodoArbol,zmeta4object,nodoArbol,"","VDATOS");
			//out.println(vDATOS);
		} catch(Exception e) {}
	%>

	<div id="divcarga" class="divcarga" style="display:none;"><img class="cargandorotate" src="/QOrg/img/carga.png"></div>

    <div id="menu">
        <h1><%=nombreunidad%></h1>
	    <input class="gen-fle" id="inbusq" name="inbusq" type="text" value="" data-cont="0">
	    <a class="gen-fle flecha-izq" id="inbusqmenos" href="#"> </a>  
	    <a class="gen-fle flecha-dere" id="inbusqmas" href="#"> </a>   

	    <a class="gen-fle flecha-menos" href="#" onclick="zoomea(null,'-');"> </a>
	    <a class="gen-fle flecha-mas" href="#" onclick="zoomea(null,'+');"> </a>      
	    <a class="gen-fle flecha-guardar" href="#" onclick="window.print();"> </a>     

	    <a class="gen-fle flecha-down" href="#"> </a>  
	    <a class="gen-fle flecha-right" href="#"> </a>  
	    <a class="gen-fle flecha-up" href="#"> </a>  
	    <a class="gen-fle flecha-left" href="#"> </a>  

	    <a class="gen-fle flecha-inicio" href="#"> </a>   
    </div>

    <div class="chart" id="basic-example"></div>

	<script src="/QOrg/js/jquery.min.js"></script>
    <script src="/QOrg/js/raphael.js"></script>        
    <script src="/QOrg/js/Treant.js"></script>

	<script>
		console.log("<%=vDATOS%>");
		var config = {
	        container: "#basic-example",
	        nodeAlign: "BOTTOM",
	        animateOnInit: true,
	        animation: {
	            nodeAnimation: "easeOutBounce",
	            nodeSpeed: 700,
	            connectorsAnimation: "bounce",
	            connectorsSpeed: 700
	        },
	        connectors: {
	            type: 'step'
	        },
	        node: {
	            collapsable: true,
	            HTMLclass: 'nodeExample1'
	        }
	    }, <% out.println(vDATOS); %>
		var organi = new Treant( chart_config );
			
	</script>

	<script src="/QOrg/js/QOrg.js"></script>


</body>

</html>

 	

 		
 		 
 	
 		 