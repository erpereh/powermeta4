<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_taglib.jsp" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="/m4trans/sse_generico/0-sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_filter.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
<script type="text/javascript" language="Javascript1.2"src="/libreria/func_eval.js"></script>
<script type="text/javascript" src="/libreria/mootools.js"></script>
<script type="text/javascript" src="/libreria/functions_eval.js"></script>
<script type="text/javascript" src="/libreria/meta4ajax.js"></script>

<link href="/css/style_eval.css" type="text/css" rel="stylesheet" />
<link href="/css/bootstrap/css/bootstrap.min.css" type="text/css" rel="stylesheet" />

<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-menu_ess.jsp" %> 
<%@ include file="/m4trans/sse_g3/0-sse_ev_trans.jsp"%> 
<% 
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String guardar = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"guardar");
String zcount30 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zcount30");
if(zcount30==null){zcount30 ="";}
String zcount10 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zcount10");
if(zcount10==null){zcount10 ="";}
String zcount40 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zcount40");
if(zcount40==null){zcount40 ="";}
if ((estado==null)||(estado.equals(""))){estado="31";}
String ztitle =TranEss.getProperty("ev_ess.Eval");
String zpathVerComentario = "/sse_g3/espanol/ssco_viewcomment.jsp?comment=";
%>
<title><%=ztitle%></title>
</head>
<body>
<%if(guardar!=null){
	%>
	<script type="text/javascript">
		function m4select(select,idform,modo){
			if (m4select.arguments.length == 3){
			 var oselect = document.forms[idform].elements[select];
			}
			else {
			 var oselect = select;
			 modo = m4select.arguments[1];
			 
			}	
			if (typeof(oselect) == "object"){		
				switch(modo)
				{
				case "value" :
					return getRadioValue(idform, oselect);
				default :
					alert("Modo no valido en m4select");
					return "vacio";
				}
			}
		}
		function comprobar(t,j,x,temporal,zCkNotes){	

			  	cono = "Análisis y Toma de decisiones|$|EST_DIR_6|$|undefined|$|undefined|$||$|Objeto no definido Objeto.value no definido|$|01|$|";
			  	cono = cono + "Efectividad del Equipo|$|EST_DIR_3|$|undefined|$|undefined|$||$|Objeto no definido Objeto.value no definido|$|01|$|";
				cono = cono + "Estilos de Dirección|$|EST_DIR_2|$|undefined|$|undefined|$||$|Objeto no definido Objeto.value no definido|$|01|$|";
				cono = cono + "Gestión del Orden y la Planificación|$|EST_DIR10|$|undefined|$|undefined|$||$|Objeto no definido Objeto.value no definido|$|01|$|";
				cono = cono + "Gestión del Tiempo|$|EST_DIR_5|$|undefined|$|undefined|$||$|Objeto no definido Objeto.value no definido|$|01|$|";
				cono = cono + "Influencia en la Negociación|$|EST_DIR|$|undefined|$|undefined|$||$|Objeto no definido Objeto.value no definido|$|01|$|";
				cono = cono + "Nivel de Estrés|$|EST_DIR_4|$|undefined|$|undefined|$||$|Objeto no definido Objeto.value no definido|$|01|$|";

				m4valor("nombreformulario","SSCO_CONOCIMIENTOS",cono,"set");
				m4valor("nombreformulario","SSCO_OBJETIVOS","","set");
				m4valor("nombreformulario","SSCO_OBJETIVOS_CUAL","","set");    
				m4valor("nombreformulario","SSE_TEMPORAL",0,"set");
				m4submit("nombreformulario");       
			    
			  
			}
	</script>
	<div class="row" style="background: #DC0028; color: white;">
		<div class="col-md-offset-3 col-md-6">
			<center><h5>Esta seguro que quiere realizar el guardado definitivo, no se podra volver a realizar los cuestionarios</h5></center>
			<center><a style="color: white;" href="javascript:comprobar1(<%=zcount30%>,<%=zcount10%>,<%=zcount40%>,0,0);">Aceptar</a></center>
		</div>
	</div>
	
	<%
}%>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_menusup.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_links.jsp" %>
<%@ include file="/m4trans/sse_g3/0-ssco_evaluator_body.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_disclaimer.jsp" %>

<script type="text/javascript">
	function comprobar1(a,b,c,d,e) {
		var cad =['EST_DIR', 'EST_DIR_2', 'EST_DIR_3', 'EST_DIR_4', 'EST_DIR_5', 'EST_DIR_6', 'EST_DIR10'];
		if(document.getElementById("CSP_MENSAJES").value!="completa;completa;completa;completa;completa;completa;completa;"){
			var cuestionarios = document.getElementById("CSP_MENSAJES").value;
			var nombres = cuestionarios.split(";");
			var cuestionariosTerminados = document.getElementById("CSP_VISITADOS").value;
			var terminados = cuestionariosTerminados.split(";");
			var mensaje ="";
			var aux= "";
			for (var i = 0; i < nombres.length ; i++) {
				if(nombres[i]=="completa"){
					aux = "completa";
					break;
				}else{
					for (var j = 0; j < 7; j++) {
						if(document.getElementById("ocultos"+j).value == nombres[i]){
							mensaje = mensaje + "El cuestionario " + document.getElementById("ocu"+j).value + " esta incompleto.\n";
							break;
						}
					}
				}
				
			}
			var aux2="";
			if(aux=="completa"){
				for (var j = 0; j < cad.length; j++) {
					if(cuestionariosTerminados.search(cad[j])==-1){
						for (var x = 0; x < 7; x++) {
							if(document.getElementById("ocultos"+x).value == cad[j]){
								mensaje = mensaje + "El cuestionario " + document.getElementById("ocu"+x).value + " esta incompleto.\n";
							}
						}
					}
				}
			}
			
			if (mensaje=="") {
				mensaje = "Los cuestionarios están vacios.";
			}
			alert(mensaje);
			location.href='/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator.jsp';
		}else{
			comprobar(a,b,c,d,e);
		}
	}

</script>
</div>
</body>
<m4:endpage/> 
</html>


