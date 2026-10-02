<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_taglib.jsp" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<%@ include file="/m4trans/sse_generico/0-sse_generico_taglib_2.jsp" %>
		<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sgco_gen_inc.jsp" %>
		<link href="/css/estilo_sse_lucas.css" type="text/css" rel="stylesheet" />
		<link href="/css/bootstrap/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
		<link href="/css/estilo_cyc.css" type="text/css" rel="stylesheet" />
		<%    
			String id_cap = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_cap");  
			if ((id_cap==null)||(id_cap.equals(""))){id_cap = "";}
			String spos = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos");  
			if ((spos==null)||(spos.equals(""))){spos = "";}
			String sResult = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sResult");  
			if ((sResult==null)||(sResult.equals(""))){sResult = "0";}
			String mss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss");  
			if ((mss==null)||(mss.equals(""))){mss = "0";}
			String  zTit="";
			String zNodata ="";
			String Save = "";
			String zSaveTempCalc="";
		
			if (mss.equals("0")==true){
		%>   

		<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_trans.jsp"%>
		<%@	include file="/sse_g3/sse_ev_trans.jsp"%>
		<%
				zNodata =Tran.getProperty("Label.NoDataFound");
				Save = Tran.getProperty("Button.SaveTemp");
				zTit=TranEss.getProperty("ev_ess.TitQuestion");
				zSaveTempCalc= Tran.getProperty("Button.SaveTempCalc");
			}else{
		%>
		<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
		<%@ include file="/m4trans/m4custom/CYC/mss_generico/0-mss_generico_trans.jsp" %>
		<%@	include file="/mss_g3/mss_ev_trans.jsp"%>
		<%
				zNodata =Tran.getProperty("Label.NoDataFound");
				zTit=TranMss.getProperty("ev_ess.TitQuestion");
				Save = Tran.getProperty("Button.SaveTemp");
				zSaveTempCalc= Tran.getProperty("Button.SaveTempCalc");
			}
		%>
		<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
		<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
		<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
		<title><%=zTit%></title>
	</head>
	<body>
		<script type="text/javascript">
			var vpos='<%=spos%>';
			function guard(j){
				var idselect="";var fo="";var comen= "";var id_ques="";var cono="";
				var k=1, pooo="";
				for (var p=0;p<j;p++){
					idselect="SSCO_SV_ANSWER_TP_VALUE" + p;
					fo = "a"+k;
					k++;
					id_ques="id_ques"+p;
					if(p==(j-1)){
						var asd = document.forms[fo].elements[idselect];
						if(pooo!=""){
							asd[0].checked=true;
						}else{
							asd[1].checked=true;
						}
						comprobarMT();
					}
					if(p<16){
						if(document.getElementById(idselect).value==""){
							pooo=pooo +"Pregunta " + (p+1)+", ";
						}
					}
					
					if(p==(j-1)){
						cono=cono+m4valor(fo,id_ques,"","get")+"|$|"+m4select(idselect,fo,"value")+"|$|"+ "" + "|$|";
					}else{
						cono=cono+m4valor(fo,id_ques,"","get")+"|$|"+document.getElementById(idselect).value+"|$|"+ "" + "|$|";
					}
				}	
				m4valor("nombreformulario","SSE_CONO_QUESTION",cono,"set");
				if(pooo!=""){
					var auxpo = pooo.length-2;
					alert("No ha respondido a todas las preguntas \nFaltan: "+pooo.substr(0,auxpo));
				}

				if(validate_importe(document.getElementById("SSCO_SV_ANSWER_TP_VALUE0").value, 0)&&validate_importe(document.getElementById("SSCO_SV_ANSWER_TP_VALUE1").value, 0)&&validate_importe(document.getElementById("SSCO_SV_ANSWER_TP_VALUE2").value, 0)&&
					validate_importe(document.getElementById("SSCO_SV_ANSWER_TP_VALUE3").value, 0)&&validate_importe(document.getElementById("SSCO_SV_ANSWER_TP_VALUE4").value, 0)&&validate_importe(document.getElementById("SSCO_SV_ANSWER_TP_VALUE5").value, 0)&&
					validate_importe(document.getElementById("SSCO_SV_ANSWER_TP_VALUE6").value, 0)&&validate_importe(document.getElementById("SSCO_SV_ANSWER_TP_VALUE7").value, 0)&&validate_importe(document.getElementById("SSCO_SV_ANSWER_TP_VALUE8").value, 0)&&
					validate_importe(document.getElementById("SSCO_SV_ANSWER_TP_VALUE9").value, 0)&&validate_importe(document.getElementById("SSCO_SV_ANSWER_TP_VALUE10").value, 0)&&validate_importe(document.getElementById("SSCO_SV_ANSWER_TP_VALUE11").value, 0)&&
					validate_importe(document.getElementById("SSCO_SV_ANSWER_TP_VALUE12").value, 0)&&validate_importe(document.getElementById("SSCO_SV_ANSWER_TP_VALUE13").value, 0)&&validate_importe(document.getElementById("SSCO_SV_ANSWER_TP_VALUE14").value, 0)&&
					validate_importe(document.getElementById("SSCO_SV_ANSWER_TP_VALUE15").value, 0)){
					m4submit("nombreformulario");
				}else{
					alert("Ha introducido un valor no valido en un campo numerico");
				}
			}

			function comprobarMT() {
				sumarR();
				sumarI();
				sumarTR();
				sumarTI();
				if(document.getElementById("porR").innerHTML!=100){
					alert("El valor del cuestionario SITUACIÓN REAL no es 100%");
					var asd = document.forms["a25"].elements["SSCO_SV_ANSWER_TP_VALUE24"];
					asd[0].checked=true;
				}
				if(document.getElementById("porI").innerHTML!=100){
					alert("El valor del cuestionario SITUACIÓN IDEAL no es 100%");
					var asd = document.forms["a25"].elements["SSCO_SV_ANSWER_TP_VALUE24"];
					asd[0].checked=true;
				}
				if(document.getElementById("porTR").innerHTML!=100){
					alert("El valor del cuestionario COMUNICACIÓN REAL no es 100%");
					var asd = document.forms["a25"].elements["SSCO_SV_ANSWER_TP_VALUE24"];
					asd[0].checked=true;
				}
				if(document.getElementById("porTI").innerHTML!=100){
					alert("El valor del cuestionario COMUNICACIÓN IDEAL no es 100%");
					var asd = document.forms["a25"].elements["SSCO_SV_ANSWER_TP_VALUE24"];
					asd[0].checked=true;
				}
			}

			function m4select(select,idform,modo){
				if (m4select.arguments.length == 3){
				 	var oselect = document.forms[idform].elements[select];
				} else {
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

			function getRadioValue(form, radioName) {
				for (var i = 0; i < 2; i++) {
		            if (radioName[i].checked) {
		                return radioName[i].value;   
		            }
		        }
		        return "";
			}

			function AddComent(objeto){
				var path = "/mss_g3/espanol/comentario.jsp?comment=" + objeto.value
				comentario = showModalDialog(path, objeto.value,'dialogWidth=330pt;dialogHeight=212pt;maximize=no;minimize=no;border=thin;center=yes;help=no;');
			   	objeto.value = comentario;
			}

			function returnvalues(ar){
				if (typeof(opener.oventana) == "object"){
					for (var i=0; i < opener.oventana.m4prop_areturnedValue.length; i++){

					  	if (typeof(ar[i]) != "undefined"){
					   		opener.oventana.m4prop_areturnedValue[i].value =  ar[i];
					  	}
					}	
				}
				if (typeof(opener.oventana) == "object"){   
			   		if (opener.oventana.m4prop_afterclosewindowmet != ""){ 
			   			eval('opener.'+opener.oventana.m4prop_afterclosewindowmet);
			   		}
			   		opener.oventana = "";
				}
				window.opener.mod(vpos); 
				window.close();
			}

			function pulsar(e) {
			  tecla = (document.all) ? e.keyCode :e.which;
  				return (tecla!=13); 
			}


		</script>
		<%
			String zsubsesion = "SSCO_H_EVALUTE";
			String zmeta4object = "SSCO_H_EVALUTE";

			String znodo4 = "SSCO_EVAL_CAPAB";
			String znodo5 = "SSCO_EV_CAPAB_QUESTIONS";
			String znodo6 = "SSCO_SV_ANSWER_TP_VALUE"; 

			String zventanas = "6";
			int zvuelta = 3;
			String zestado = "31";

			String zoutputdef1 = zsubsesion + "!" + znodo4 + "["+spos+"]";
			String zmove1 = znodo4 + ":" + znodo4 + "["+spos+"]";
			String zraiz1 =  znodo4 + ":" + zsubsesion  + "!"+ znodo4+"." ; 

			String zoutputdef2 = zsubsesion + "!" + znodo5 + "[*]";
			String zmove2 = znodo5 + ":" + znodo5 + "[FIRST]";
			String zcomun2 = znodo5 + ":" + zmeta4object + "!" + znodo5 + "[&VAR.m4lix]" + ".";

			String znamenodo  = znodo5 + ":" + zsubsesion  + "!" + znodo5;
			String zSCO_NM_EXTD_KN = zraiz1 + "SCO_NM_EXTD_KN";
			String zmetodocarga = zsubsesion + "!SSCO_EVAL_CAPAB.LOAD_QUESTIONS";

			String scountquestion="";
		%>	
		<m4:startpage m4task="<%=zsubsesion%>"/>
		<m4:beginjob/><m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
		<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="ARG_SCO_ID_CAPABILITY" value="<%=id_cap%>"/></m4:exec>
		<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
		<m4:exec node="<%=znodo5%>" alias="countquestion" method="COUNT" m4object="<%=zsubsesion%>"/>
		<m4:endjob/>
		<m4:beginjob/>	
		<m4:outputexec var="scountquestion" alias="countquestion"/>
		<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
		<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
		<% 
			int icountquestion=0;
			String zmoves=znodo5 + ":" + znodo5 ;
			String zalias="";
			int h = 0;
				try {
					icountquestion = Integer.parseInt(scountquestion); 
					for (h = 0; h < icountquestion; h++){
						zmoves=znodo5 + ":" + znodo5 +"["+String.valueOf(h)+"]";
						zalias="SSCO_SV_ANSWER_TP_VALUE"+String.valueOf(h);
		%>
		<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoves%>"/></m4:move>
		<m4:outputdef m4alias="<%=zalias%>"><m4:param name="m4name0" value="SSCO_H_EVALUTE!SSCO_SV_ANSWER_TP_VALUE[*]"/></m4:outputdef>
		<%
					}
				} catch(Exception e) {}
		%>
		<m4:endjob/>
		<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
		<%
			int  zcount2  = 0;
			String vsResultado="";
			try {
				M4Operations m = new M4Operations(request);
				zcount2 = m.getCount(znodo5,zsubsesion,znodo5);
			} catch(Exception e) {}
			
		%>
		<form action="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_questions_act.jsp" method="post" name="nombreformulario" id="nombreformulario">
			<input type="hidden" id="SSE_CONOCIMIENTO_TEMP" name="SSE_CONOCIMIENTO_TEMP" value="<%=id_cap%>" />
			<input type="hidden" id="spos" name="spos" value="<%=spos%>" />
			<input type="hidden" id="mss" name="mss" value="<%=mss%>" />
			<input type="hidden" id="SSE_CONO_QUESTION" name="SSE_CONO_QUESTION" value="" />
			<input type="hidden" id="SSE_CAL_QUESTION" name="SSE_CAL_QUESTION" value="0" />
		</form>

		<div class="container">
			<div class="row">
				<div class="col-md-12 col-lg-12 col-xs-12">
					<div class="logo"> 
						<a id="idHome" href=""> 
							<img src="/iconos/logo_cyc.jpg" class="imglogocyc">
						</a>
				    </div>
				</div>
				<div class="col-md-12 col-lg-12 col-xs-12 text-center">
					<h1><strong>Cuestionario: <m4:item  item="SCO_NM_EXTD_KN" htmlsafe="true" outputdef="<%=znodo4%>"/></strong></h1>
					<input type="hidden" id="cues" value="<m4:item  item='SCO_NM_EXTD_KN' htmlsafe='true' outputdef='<%=znodo4%>'/>">
				</div>
			</div>
		</div>

		<div class="container" id="instrucciones">
			<div class="row">
				<div class="destacado-4">
					<div class="titulo">INSTRUCCIONES DEL CUESTIONARIO</div>
					<div class="contenido" id="contenido">
						<ol>
							<li>En el primer cuadro defina en % el tiempo REAL dedicado a cada una de las casillas de la matriz, en su actual responsabilidad. La suma de las cuatro casillas debe dar el 100 %.</li>
							<li>En el segundo cuadro defina en % el tiempo IDEAL que le dedicaría a cada una de las casillas de la matriz, en su actual responsabilidad. La suma de las cuatro casillas debe dar el 100 %</li>
							<li>Asegúrese de que las puntuaciones de cada cuadro también aquí suman 100</li>
						</ol>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row" style="margin-bottom: 40px;">
				<div class="col-md-5 col-md-offset-1 col-lg-6 col-xs-12">
					<table border="1">
					    <caption>SITUACIÓN REAL</caption>
				        <colgroup>
				           <col />
				           <col />
				           <col />
				        </colgroup>
				        <thead>
				           <tr>
				             <th scope="col" class="text-center" id="PR"><span id="porR"></span>%</th>
				             <th scope="col" class="text-center">URGENTE</th>
				             <th scope="col" class="text-center">NO URGENTE</th>
				           </tr>
				        </thead>
				        <tfoot>
				           <tr>
				             	<th scope="row" class="text-center">NO IMPORTANTE</th>
								<form name="a1" id="a1" action="">
									<input id="id_ques0" name="id_ques0" type="hidden" value="253" />
				             		<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE2" id="SSCO_SV_ANSWER_TP_VALUE2" class="tabl_in_Org" value="0" onchange="sumarR();" tabindex=3></td>
				             	</form>
				             	<form name="a2" id="a2" action="">
					             	<input id="id_ques1" name="id_ques1" type="hidden" value="254" />
					             	<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE3" id="SSCO_SV_ANSWER_TP_VALUE3" class="tabl_in_Org" value="0" onchange="sumarR();" tabindex=4></td>
				             	</form>
				           </tr>
				        </tfoot>
				        <tbody>
				           <tr>
				             <th scope="row" class="text-center">IMPORTANTE</th>
				             <form name="a3" id="a3" action="">
				             	<input id="id_ques2" name="id_ques2" type="hidden" value="251" />
				             	<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE0" id="SSCO_SV_ANSWER_TP_VALUE0" class="tabl_in_Org" value="0" onchange="sumarR();" tabindex=1></td>
				             </form>
				             <form name="a4" id="a4" action="">
				             	<input id="id_ques3" name="id_ques3" type="hidden" value="252" />
				             	<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE1" id="SSCO_SV_ANSWER_TP_VALUE1" class="tabl_in_Org" value="0" onchange="sumarR();" tabindex=2></td>
				             </form>
				           </tr>
				        </tbody>
					</table> 
				</div>
				<div class="col-md-5 col-md-offset-1 col-lg-6 col-xs-12">
					<table border="1" class="text-center">
					    <caption>SITUACIÓN IDEAL</caption>
				        <colgroup>
				           <col />
				           <col />
				           <col />
				        </colgroup>
				        <thead>
				           <tr>
				             <th scope="col" class="text-center" id="PI"><span id="porI"></span>%</th>
				             <th scope="col" class="text-center">URGENTE</th>
				             <th scope="col" class="text-center">NO URGENTE</th>
				           </tr>
				        </thead>
				        <tfoot>
				           <tr>
				             <th scope="row" class="text-center">NO IMPORTANTE</th>
		             		 <form name="a5" id="a5" action="">
		             		 	<input id="id_ques4" name="id_ques4" type="hidden" value="257" />
				             	<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE6" id="SSCO_SV_ANSWER_TP_VALUE6" class="tabl_in_Org" value="0" onchange="sumarI();" tabindex=7></td>
				             </form>
				             <form name="a6" id="a6" action="">
				             	<input id="id_ques5" name="id_ques5" type="hidden" value="258" />
				             	<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE7" id="SSCO_SV_ANSWER_TP_VALUE7" class="tabl_in_Org" value="0" onchange="sumarI();" tabindex=8></td>
				             </form>
				           </tr>
				        </tfoot>
				        <tbody>
				           <tr>
				             <th scope="row" class="text-center">IMPORTANTE</th>
				             <form name="a7" id="a7" action="">
				             	<input id="id_ques6" name="id_ques6" type="hidden" value="255" />
				             	<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE4" id="SSCO_SV_ANSWER_TP_VALUE4" class="tabl_in_Org" value="0" onchange="sumarI();" tabindex=5></td>
				             </form>
				             <form name="a8" id="a8" action="">
				             	<input id="id_ques7" name="id_ques7" type="hidden" value="256" />
				             	<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE5" id="SSCO_SV_ANSWER_TP_VALUE5" class="tabl_in_Org" value="0" onchange="sumarI();" tabindex=6></td>
				             </form>
				           </tr>
				        </tbody>
					</table> 
				</div>
			</div>
		</div>

		<div class="container" id="instrucciones">
			<div class="row">
				<div class="destacado-4">
					<div class="titulo">INSTRUCCIONES DEL CUESTIONARIO</div>
					<div class="contenido" id="contenido">
						<p>En este ejercicio le pedimos que analice el tiempo que dedica a comunicarse con los demás, dentro del entorno de trabajo, desde el punto de vista de CUATRO grupos de posibles interlocutores, que recogemos en la siguiente tabla (colaterales, colaboradores, superiores y "otros"). Este último grupo puede ser lo amplio que usted crea conveniente, aunque en general está formado por la comunicación externa a la compañía (clientes, proveedores, competencia, administración pública...). Le pedimos que haga inicialmente el análisis desde el punto de vista REAL. El siguiente paso será el analizarlo desde el punto de vista que usted crea IDEAL.</p>
						<p>Asegúrese de que las puntuaciones de cada cuadro también aquí suman 100</p>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row" style="margin-bottom: 40px;">
				<div class="col-md-10 col-md-offset-1 col-lg-offset-1 col-lg-10 col-xs-12">
					<table border="1">
						<caption>COMUNICACIÓN</caption>
				        <colgroup>
				           <col />
				           <col />
				           <col />
				           <col />
				           <col />
				        </colgroup>
				        <thead>
				           <tr>
				             <th scope="col" class="text-center" id="TR"><span id="porTR"></span>%</th>
				             <th scope="col" class="text-center">COLATERALES</th>
				             <th scope="col" class="text-center">COLABORADORES</th>
				             <th scope="col" class="text-center">SUPERIORES</th>
				             <th scope="col" class="text-center">OTROS</th>
				           </tr>
				        </thead>
				        <tbody>
				           <tr>
				             <th scope="row">TIEMPO REAL</th>
				             <form name="a9" id="a9" action="">
				             	<input id="id_ques8" name="id_ques8" type="hidden" value="259" />
				             	<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE8" id="SSCO_SV_ANSWER_TP_VALUE8" onchange="sumarTR();" value="0" tabindex=9></td>
				             </form>
				             <form name="a10" id="a10" action="">
				             	<input id="id_ques9" name="id_ques9" type="hidden" value="260" />
				             	<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE9" id="SSCO_SV_ANSWER_TP_VALUE9" onchange="sumarTR();" value="0" tabindex=10></td>
				             </form>
				             <form name="a11" id="a11" action="">
				             	<input id="id_ques10" name="id_ques10" type="hidden" value="261" />
				             	<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE10" id="SSCO_SV_ANSWER_TP_VALUE10" onchange="sumarTR();" value="0" tabindex=11></td>
				             </form>
				             <form name="a12" id="a12" action="">
				             	<input id="id_ques11" name="id_ques11" type="hidden" value="262" />
				             	<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE11" id="SSCO_SV_ANSWER_TP_VALUE11" onchange="sumarTR();" value="0" tabindex=12></td>
				             </form>
				           </tr>
				        </tbody>
					</table>
				
					<table border="1">
						<caption>COMUNICACIÓN</caption>
				        <colgroup>
				           <col />
				           <col />
				           <col />
				           <col />
				           <col />
				        </colgroup>
				        <thead>
				           <tr>
				             <th scope="col" class="text-center" id="TI"><span id="porTI"></span>%</th>
				             <th scope="col" class="text-center">COLATERALES</th>
				             <th scope="col" class="text-center">COLABORADORES</th>
				             <th scope="col" class="text-center">SUPERIORES</th>
				             <th scope="col" class="text-center">OTROS</th>
				           </tr>
				        </thead>
				        <tbody>
				           <tr>
				             <th scope="row">TIEMPO IDEAL</th>
				             <form name="a13" id="a13" action="">
				             	<input id="id_ques12" name="id_ques12" type="hidden" value="263" />
				             	<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE12" id="SSCO_SV_ANSWER_TP_VALUE12" onchange="sumarTI();" value="0" tabindex=13></td>
				             </form>
				             <form name="a14" id="a14" action="">
				             	<input id="id_ques13" name="id_ques13" type="hidden" value="264" />
				             	<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE13" id="SSCO_SV_ANSWER_TP_VALUE13" onchange="sumarTI();" value="0" tabindex=14></td>
				             </form>
				             <form name="a15" id="a15" action="">
				             	<input id="id_ques14" name="id_ques14" type="hidden" value="265" />
				             	<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE14" id="SSCO_SV_ANSWER_TP_VALUE14" onchange="sumarTI();" value="0" tabindex=15></td>
				             </form>
				             <form name="a16" id="a16" action="">
				             	<input id="id_ques15" name="id_ques15" type="hidden" value="266" />
				             	<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE15" id="SSCO_SV_ANSWER_TP_VALUE15" onchange="sumarTI();" value="0" tabindex=16></td>
				             </form>
				           </tr>
				        </tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="container" id="instrucciones">
			<div class="row">
				<div class="destacado-4">
					<div class="titulo">INSTRUCCIONES DEL CUESTIONARIO</div>
					<div class="contenido" id="contenido">
						<p>En este ejercicio le pedimos que defina qué es lo que más le hace "perder tiempo" en su trabajo diario. Le rogamos que nos clasifique de mayor a menor los acontecimientos, interferencias, causas e interrupciones que le hacen "perder su tiempo" en el trabajo.</p>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row" style="margin-bottom: 40px;">
				<div class="col-md-offset-3 col-md-4 col-lg-offset-3 col-lg-4 col-xs-12">
					<table border="1">
						<caption>LADRONES DE TIEMPO</caption>
				        <tbody>
				           	<tr>
				             	<th scope="row">1...</th>
				             	<form name="a17" id="a17" action="">
				             		<input id="id_ques16" name="id_ques16" type="hidden" value="267" />
				             		<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE16" id="SSCO_SV_ANSWER_TP_VALUE16" class="tabl_in_Org2" tabindex=17></td>
				             	</form>
				           	</tr>
				           	<tr>
				             	<th scope="row">2...</th>
				             	<form name="a18" id="a18" action="">
				             		<input id="id_ques17" name="id_ques17" type="hidden" value="268" />
				             		<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE17" id="SSCO_SV_ANSWER_TP_VALUE17" class="tabl_in_Org2" tabindex=18></td>
				             	</form>
				           	</tr>
				           	<tr>
				             	<th scope="row">3...</th>
				             	<form name="a19" id="a19" action="">
				             		<input id="id_ques18" name="id_ques18" type="hidden" value="269" />
				             		<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE18" id="SSCO_SV_ANSWER_TP_VALUE18" class="tabl_in_Org2" tabindex=19></td>
				             	</form>
				           	</tr>
				           	<tr>
				             	<th scope="row">4...</th>
				             	<form name="a20" id="a20" action="">
				             		<input id="id_ques19" name="id_ques19" type="hidden" value="270" />
				             		<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE19" id="SSCO_SV_ANSWER_TP_VALUE19" class="tabl_in_Org2" tabindex=20></td>
				             	</form>
				           	</tr>
				           	<tr>
				             	<th scope="row">5...</th>
				             	<form name="a21" id="a21" action="">
				             		<input id="id_ques20" name="id_ques20" type="hidden" value="271" />
				             		<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE20" id="SSCO_SV_ANSWER_TP_VALUE20" class="tabl_in_Org2" tabindex=21></td>
				             	</form>
				           	</tr>
				           	<tr>
				             	<th scope="row">6...</th>
				             	<form name="a22" id="a22" action="">
				             		<input id="id_ques21" name="id_ques21" type="hidden" value="272" />
				             		<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE21" id="SSCO_SV_ANSWER_TP_VALUE21" class="tabl_in_Org2" tabindex=22></td>
				             	</form>
				           	</tr>
				           	<tr>
				             	<th scope="row">7...</th>
				             	<form name="a23" id="a23" action="">
				             		<input id="id_ques22" name="id_ques22" type="hidden" value="273" />
				             		<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE22" id="SSCO_SV_ANSWER_TP_VALUE22" class="tabl_in_Org2" tabindex=23></td>
				             	</form>
				           	</tr>
				           	<tr>
				             	<th scope="row">8...</th>
				             	<form name="a24" id="a24" action="">
				             		<input id="id_ques23" name="id_ques23" type="hidden" value="274" />
				             		<td><input type="text"  onkeypress="return pulsar(event)" name="SSCO_SV_ANSWER_TP_VALUE23" id="SSCO_SV_ANSWER_TP_VALUE23" class="tabl_in_Org2" tabindex=24></td>
				             	</form>
				           	</tr>
				        </tbody>
					</table>
				</div>
			</div>
		</div>
		<div>
         	<form name="a25" id="a25" action=" " style="display: none;">
				<div class="destacado-2">
					<input id="p25" value="terminado" type="hidden">
					
					<div class="titulo">Pregunta 26&nbsp;</div>
					
					<input id="id_ques24" name="id_ques24" value="999" type="hidden">
					<div class="contenido">						
							<div class="radio pl-2">
							  	<label>
					             	<input name="SSCO_SV_ANSWER_TP_VALUE24" id="SSCO_SV_ANSWER_TP_VALUE24" value="0" type="radio">
							    	No
							  	</label>
							</div>
							<div class="radio pl-2">
							  	<label>
					             	<input name="SSCO_SV_ANSWER_TP_VALUE24" id="SSCO_SV_ANSWER_TP_VALUE24" value="1" type="radio">
							    	Si
							  	</label>
							</div>
					</div>
				</div>
			</form>	
		</div>
		<m4:dataloop outputdef="<%=znodo5%>">
			<script type="text/javascript" language="Javascript1.5">
			 	if ('<m4:item  item="SCO_ID_ANSWER_VAL_TEMP" htmlsafe="true" outputdef="<%=znodo5%>" jsafe="true"/>'!= ""){
					for(var i=0; i< 24; i++){ 
						res = document.getElementById("SSCO_SV_ANSWER_TP_VALUE"+i);
						pre = document.getElementById("id_ques"+i);
						if (pre.value == '<m4:item  item="SCO_ID_QUESTION" htmlsafe="true" outputdef="<%=znodo5%>" jsafe="true"/>'){
							res.value = '<m4:item  item="SCO_ID_ANSWER_VAL_TEMP" outputdef="<%=znodo5%>" jsafe="true"/>';
						}
					}	
			 	}
			</script>
		</m4:dataloop>
		<script type="text/javascript">
			function sumarR () {		        

		        var valor1=verificar("SSCO_SV_ANSWER_TP_VALUE2");

		        var valor2=verificar("SSCO_SV_ANSWER_TP_VALUE3");

		        var valor3=verificar("SSCO_SV_ANSWER_TP_VALUE0");

		        var valor4=verificar("SSCO_SV_ANSWER_TP_VALUE1");

		        document.getElementById("porR").innerHTML = parseFloat(valor1)+parseFloat(valor2)+parseFloat(valor3)+parseFloat(valor4);

		    }
			function sumarI () {
			    var total2 = 0;	
			    
		        var valor1=verificar("SSCO_SV_ANSWER_TP_VALUE6");

		        var valor2=verificar("SSCO_SV_ANSWER_TP_VALUE7");

		        var valor3=verificar("SSCO_SV_ANSWER_TP_VALUE4");

		        var valor4=verificar("SSCO_SV_ANSWER_TP_VALUE5");

		        document.getElementById("porI").innerHTML = parseFloat(valor1)+parseFloat(valor2)+parseFloat(valor3)+parseFloat(valor4);
			}
			function sumarTR () {
			    
		        var valor1=verificar("SSCO_SV_ANSWER_TP_VALUE10");

		        var valor2=verificar("SSCO_SV_ANSWER_TP_VALUE11");

		        var valor3=verificar("SSCO_SV_ANSWER_TP_VALUE8");

		        var valor4=verificar("SSCO_SV_ANSWER_TP_VALUE9");

		        document.getElementById("porTR").innerHTML = parseFloat(valor1)+parseFloat(valor2)+parseFloat(valor3)+parseFloat(valor4);
			}
			function sumarTI () {
			    
		        var valor1=verificar("SSCO_SV_ANSWER_TP_VALUE14");

		        var valor2=verificar("SSCO_SV_ANSWER_TP_VALUE15");

		        var valor3=verificar("SSCO_SV_ANSWER_TP_VALUE12");

		        var valor4=verificar("SSCO_SV_ANSWER_TP_VALUE13");

		        document.getElementById("porTI").innerHTML = parseFloat(valor1)+parseFloat(valor2)+parseFloat(valor3)+parseFloat(valor4);
			}


		    function verificar(id){

		        var obj=document.getElementById(id);

		        if(obj.value==""){
		        	value="0";
		        }else{
		        	value=obj.value;
		        }
		        if(validate_importe(value,1)) {

		            obj.style.borderColor="black";
		            return value;
		        }else{
		            obj.style.borderColor="#f00";
		            return 0;
		        }

		    }

		    function validate_importe(value,decimal){

		        if(decimal==undefined){
		        	decimal=0;
		        }
		        if(decimal==1){
		            var patron=new RegExp("^[0-9]+((,|\.)[0-9]{1,2})?$");
		        }else{
		            var patron=new RegExp("^([0-9])*$")
		        }

		        if(value && value.search(patron)==0){
		            return true;
		        }
		        return false;
		    }

		</script>
		<div class="container">
			<div class="row">
				<div class="col-md-12 col-lg-12 col-xs-12">
					<center>
						<a title="<%=Save%>" href="javascript:guard(25);">	
							<img alt="<%=Save%>" src="/iconos/icono_guardar_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  />
						</a>
					</center>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div id="pie" class="col-md-12">
					<img src="/images/barra_pie1.png">
				</div>
			</div>
		</div>
	</body>
<m4:endpage/>	
</html>