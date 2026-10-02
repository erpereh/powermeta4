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
			M4SessionManager zsessionmanager = M4Context.getSession(request);

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

		<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_trans.jsp" %>
		<%@	include file="/sse_g3/sse_ev_trans.jsp" %>
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
			var formu="";
			var rad = "";
			function guard(j){
				var idselect="";var fo="";var comen= "";var id_ques="";var cono="", pooo="";
				for (var p=0;p<j;p++){
					idselect="SSCO_SV_ANSWER_TP_VALUE" + p;
					fo = "a"+p;
					id_ques="id_ques"+p;
					comen = "comment"+p;
					if(p==(j-1)){
						var asd = document.forms[fo].elements[idselect];
						if(pooo!=""){
							asd[0].checked=true;
						}else{
							asd[1].checked=true;
						}
					}
					if(m4select(idselect,fo,"value")==""){
						if(p>24&&document.getElementById("SSE_CONOCIMIENTO_TEMP").value=="EST_DIR_6"){
							pooo=pooo +"Pregunta Toma de Decisiones " + (p-25+1)+", ";
						}else{
							pooo=pooo +"Pregunta " + (p+1)+", ";
						}
					}
					cono=cono+m4valor(fo,id_ques,"","get")+"|$|"+m4select(idselect,fo,"value")+"|$|"+m4valor(fo,comen,"","get") + "|$|";
				}	
				m4valor("nombreformulario","SSE_CONO_QUESTION",cono,"set");
				
				if(pooo!=""){
					var auxpo = pooo.length-2;
					alert("No ha respondido a todas las preguntas \nFaltan: "+pooo.substr(0,auxpo));
				}
				m4submit("nombreformulario");
			}

			function AddComent(objeto){
				var path = "/mss_g3/espanol/comentario.jsp?comment=" + objeto.value
				comentario = showModalDialog(path, objeto.value,'dialogWidth=330pt;dialogHeight=212pt;maximize=no;minimize=no;border=thin;center=yes;help=no;');
			   	objeto.value = comentario;
			}

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

			function getRadioValue(form, radioName) {
				for (var i = 0; i < radioName.length-1; i++) {
		            //if (document.getElementsByName(radioName)[i].checked) {
		            if (radioName[i].checked) {
		                return radioName[i].value;   
		            }
		        }
		        return "";
			}
			
		</script>
		<%
			String zsubsesion = "SSCO_H_EVALUTE";
			String zmeta4object = "SSCO_H_EVALUTE"; 

			String znodo1 = "SSCO_EVAL_CAPAB";
			String znodo2 = "SSCO_EV_CAPAB_QUESTIONS";
			String znodo3 = "SSCO_SV_ANSWER_TP_VALUE"; 
			String znodo4 = "CSP_CARGA_RESPUESTA";

			String zventanas = "6";
			int zvuelta = 3;
			String zestado = "31";

			String zoutputdef1 = zsubsesion + "!" + znodo1 + "["+spos+"]";
			String zmove1 = znodo1 + ":" + znodo1 + "["+spos+"]";
			String zraiz1 =  znodo1 + ":" + zsubsesion  + "!"+ znodo1+"." ; 

			String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
			String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
			String zcomun2 = znodo2 + ":" + zmeta4object + "!" + znodo2 + "[&VAR.m4lix]" + ".";

			String znamenodo  = znodo2 + ":" + zsubsesion  + "!" + znodo2;
			String zSCO_NM_EXTD_KN = zraiz1 + "SCO_NM_EXTD_KN";
			String zmetodocarga = zsubsesion + "!SSCO_EVAL_CAPAB.LOAD_QUESTIONS";

			String scountquestion="";
			String zmetododestroyblock = zsubsesion + "!CSP_CARGA_RESPUESTA.zmetododestroyblock";
			String zload = zsubsesion + "!CSP_CARGA_RESPUESTA.CSP_CARGA";
			String zusertempuri = zsessionmanager.getUserTempURI(); 
			String ztest = request.getParameter("id_cap"); 
		%>	
		<m4:startpage m4task="<%=zsubsesion%>"/>
			
		<m4:beginjob/><m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
		<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="ARG_SCO_ID_CAPABILITY" value="<%=id_cap%>"/></m4:exec>
		<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
		<m4:exec node="<%=znodo2%>" alias="countquestion" method="COUNT" m4object="<%=zsubsesion%>"/>
		<m4:endjob/>
		<m4:beginjob/>	
		<m4:outputexec var="scountquestion" alias="countquestion"/>
		<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
		<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
		<% 
			int icountquestion=0;
			String zmoves=znodo2 + ":" + znodo2 ;
			String zalias="";
			int h = 0;
				try {
					icountquestion = Integer.parseInt(scountquestion); 
					for (h = 0; h < icountquestion; h++){
						zmoves=znodo2 + ":" + znodo2 +"["+String.valueOf(h)+"]";
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
				zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
			} catch(Exception e) {}
			
		%>
		<form action="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_questions_act.jsp" method="post" name="nombreformulario" id="nombreformulario">
			<input type="hidden" id="SSE_CONOCIMIENTO_TEMP" name="SSE_CONOCIMIENTO_TEMP" value="<%=id_cap%>" />
			<input type="hidden" id="spos" name="spos" value="<%=spos%>" />
			<input type="hidden" id="mss" name="mss" value="<%=mss%>" />
			<input type="hidden" id="SSE_CONO_QUESTION" name="SSE_CONO_QUESTION" value="" />
			<input type="hidden" id="SSE_CAL_QUESTION" name="SSE_CAL_QUESTION" value="0" />
			<input type="hidden" id="SCO_EVALUATOR_COMM" name="SCO_EVALUATOR_COMM" value="0" />
			<input type="hidden" id="term" name="term" value="0" />
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
					<h1><strong>Cuestionario: <m4:item  item="SCO_NM_EXTD_KN" htmlsafe="true" outputdef="<%=znodo1%>"/></strong></h1>
					<input type="hidden" id="cues" value="<m4:item  item='SCO_NM_EXTD_KN' htmlsafe='true' outputdef='<%=znodo1%>'/>">
				</div>
			</div>
		</div>

		<% if (zcount2 > 0) { 
			String znodoaux="";
			String zmoveaux="";
			String zidgroupant="";
			String zidsubgroupant="";
		%>
		
		<div class="container" id="instrucciones">
			<div class="row">
				<div class="destacado-4">
					<div class="titulo">INSTRUCCIONES DEL CUESTIONARIO</div>
					<div class="contenido continf" id="contenido">
						<p>Piense en cómo actúa o actuaría (si los tuviera) con sus subordinados.</p>
						<p>Se le plantean 36 pares de afirmaciones que pueden describir su actuación en su trabajo. Para cada pareja de afirmaciones, elija aquella que mejor se adapte a usted.</p>
						<p>Debe responder a todas las preguntas. En algunas, puede que le resulte difícil elegir una de las dos afirmaciones, bien porque le parece que ambas son adecuadas, o bien porque ninguna de las dos le parece apropiada. En cualquier caso, debe elegir aquella de las dos que le parece que describe mejor su actuación en el trabajo.</p>			
						<p>Por favor, asegúrese de haber marcado la opción correspondiente a la frase que ha elegido en cada caso.</p>
					</div>
					<div class="contenido continf" id="contenido2">
						<p>En este cuestionario que consta de 72 preguntas, es una prueba de "autoevaluación" en el que debe reflejar su forma de ser y su forma de actuar cuando se relaciona con los demás. Nos definirá cómo actúa usted realmente ante una negociación, sea de alto nivel o normal. Lo esencial para que este Cuestionario le pueda ayudar, es que usted conteste como es, no cómo quisiera ser. Base sus respuestas en sus acciones diarias típicas en el ámbito profesional. Por favor sea lo más sincero posible, ya que este Cuestionario tendrá poco o ningún valor si usted no proporciona una descripción objetiva y real de su comportamiento.</p>
						<p>La sistemática que utiliza este Cuestionario, está basada en el Modelo Harvard de Negociación, dividido en "cinco familias" de variables, que "miden":</p>
						<ul>
							<li>Persuasión con dos sub variables (Proponer y Razonar).</li>
							<li>Firmeza con tres sub variables (Exponer expectativas, Evaluar e Incentivar - presionar).</li>
							<li>Conciliación con tres sub variables (Implicar - apoyar, Escuchar y Estar abierto).</li>		
							<li>Captación con dos sub variables (Revelar una "visión" y Buscar puntos en común).</li>
							<li>Evasión con dos sub variables (Evadir y Evitar)</li>
						</ul>			
						<p>Con este conjunto de variables, obtenemos el "perfil de estilos de influencia" en la negociación, a nivel personal.</p>													
						<p>Para cada una de las 72 preguntas, deberá elegir usted cual es la baremación más adecuada entre:</p>								
						<ol>
							<li>Si usted casi nunca o nunca actúa de la forma que se describe en la pregunta.</li>
							<li>Si usted actúa alguna vez de la forma que se describe en la pregunta.</li>
							<li>Si usted actúa de forma similar a la forma en que se describe en la pregunta.</li>
							<li>Si usted actúa con frecuencia de la forma que se describe en la pregunta.</li>
							<li>Si usted actúa siempre o casi siempre de la forma que se describe en la pregunta.</li>
						</ol>
						<p>Por favor, asegúrese de haber contestado las 72 preguntas.</p>
					</div>
					<div class="contenido continf" id="contenido3">
						<p>Para cada una de las siguientes 40 frases, por favor indique en qué medida caracteriza a su equipo de trabajo en este mismo momento. Fíjese que la escala va desde el "0" (comportamiento nada característico) hasta el "7" (muy característico).</p>
					</div>
					<div class="contenido continf" id="contenido4">
						<p>La actitud que tomamos en cualquier situación de nuestra vida diaria puede ser un buen indicador del nivel de estrés y de tensión que vamos acumulando. Este Cuestionario nos puede ayudar a averiguar si somos personas estresadas o no. Responda a las siguientes afirmaciones, eligiendo sólo una de las dos afirmaciones, que más se asemeje a su comportamiento actual:</p>
					</div>
					<div class="contenido continf" id="contenido5">
						<p>Responda a las siguientes afirmaciones, eligiendo la opción de las cinco que más se asemeje a su comportamiento actual:</p>
						<ol>
							<li>Totalmente falso</li>
							<li>Más bien falso</li>
							<li>Sin opinión formada</li>
							<li>Más bien cierto</li>
							<li>Totalmente cierto</li>
						</ol>
					</div>
					<div class="contenido continf" id="contenido6">
						<p>En este cuestionario que consta de dos partes de 25 preguntas cada una, analizamos nuestra capacidad para analizar problemas y toma de decisiones en tiempo reducido. Responda tal como es usted, no como quisiera ser, ya que se trata de analizar cómo actúa ante el análisis de problemas y en la toma de decisiones.</p>
						<p>La primera parte de 25 frases  tiene que ver con su capacidad analítica. La segunda  parte cuenta  igualmente  con 25 frases, que tiene que ver con su capacidad de toma de decisiones.</p>
						<p>En cada pregunta usted deberá puntuar, según crea si la frase está de acuerdo a como actúa o no. Deberá contestar a todas, ya que si no el cuestionario mostraría su forma de actuar de forma sesgada y la valoración  no sería efectiva.</p>
						<p>Le recordamos que lo esencial es que refleje en las contestaciones de este cuestionario, cómo actúa usted realmente, no cómo le gustaría actuar o ser.</p>
					</div>
					<div class="contenido continf" id="contenido7">
						<ol>
							<li>En los cuatro primeros cuadros defina en % el tiempo REAL dedicado a cada una de las preguntas, en su actual responsabilidad. La suma de las cuatro casillas debe dar el 100 %.</li>
							<li>En los cuatro ultimos cuadros defina en % el tiempo IDEAL que le dedicaría a cada una de las preguntas, en su actual responsabilidad. La suma de las cuatro casillas debe dar el 100 %.</li>
						</ol>
					</div>
					<div class="contenido continf" id="contenido8">
						<p>En este ejercicio le pedimos que analice el tiempo que dedica a comunicarse con los demás, dentro del entorno de trabajo, desde el punto de vista de CUATRO grupos de posibles interlocutores, que recogemos en la siguiente tabla (colaterales, colaboradores, superiores y "otros"). Este último grupo puede ser lo amplio que usted crea conveniente, aunque en general está formado por la comunicación externa a la compañía (clientes, proveedores, competencia, administración pública...). Le pedimos que haga inicialmente le análisis desde el punto de vista REAL. El siguiente paso será el analizarlo desde el punto de vista que usted crea IDEAL.</p>
					</div>
					<div class="contenido continf" id="contenido9">
						<p>En este ejercicio le pedimos que defina qué es lo que más le hace "perder tiempo" en su trabajo diario. Le rogamos que nos clasifique de mayor a menor los acontecimientos, interferencias, causas e interrupciones que le hacen. "perder su tiempo" en el trabajo.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-md-12 col-lg-12 col-xs-12">
					<m4:dataloop outputdef="<%=znodo2%>">
						<m4:current m4varname="current" outputdef="<%=znodo2%>"/>
						<%
							if(current.equals("0")&&ztest.equals("EST_DIR_6")){
						%>
							<div class="destacado-2" style="margin-bottom: 30px;margin-top: 50px;">
								<div class="titulo">Análisis de Problemas</div>
							</div>
						<%
							}else if(current.equals("25")&&ztest.equals("EST_DIR_6")){
						%>
							<div class="destacado-2" style="margin-bottom: 30px;margin-top: 50px;">
								<div class="titulo">Toma de Decisiones</div>
							</div>
						<%
							}
						%>
						<form name="a<%=current%>" id="a<%=current%>" action=" ">
							<%
								znodoaux="SSCO_SV_ANSWER_TP_VALUE"+current;
								zmoveaux =znodoaux+ ":" + "SSCO_SV_ANSWER_TP_VALUE" + "[FIRST]";
							%>
							<m4:item m4varname="id_groupshow" item="SCO_IND_SHOW_GROUP" htmlsafe="true" outputdef="<%=znodo2%>"/>
							<m4:item m4varname="zidgroup" item="SCO_NM_QUESTION_GROUP" htmlsafe="true" outputdef="<%=znodo2%>"/>
							<m4:item m4varname="zidsubgroup" item="SCO_NM_QUESTION_SUBGROUP" htmlsafe="true" outputdef="<%=znodo2%>"/>
							<m4:item m4varname="id_subgroupgroupshow" item="SCO_IND_SHOW_SGROUP" htmlsafe="true" outputdef="<%=znodo2%>"/>
							<%if (id_groupshow.equals("1")){
								if ((zidgroupant=="")||(!zidgroupant.equals(zidgroup))){
							%>
							<m4:item  item="SCO_NM_QUESTION_GROUP" htmlsafe="true" outputdef="<%=znodo2%>"/>
							<%
									zidgroupant=zidgroup;
								}
							}if (id_subgroupgroupshow.equals("1")){
								if ((zidsubgroupant=="")||(!zidsubgroupant.equals(zidsubgroup))){
									int no = Integer.parseInt(current) ;
									int auxno = Integer.parseInt(current)-25; 
							%>
							<div class="destacado-2">
								<input type="hidden" id="p<%=no +1%>" value="<m4:item  item='SCO_QUESTION' htmlsafe='true' outputdef='<%=znodo2%>'/>">
								<%
										if(no>24&&ztest.equals("EST_DIR_6")){
								%>
								<div class="titulo">Pregunta <%=auxno +1%>&nbsp;<m4:item  item="SCO_NM_QUESTION_SUBGROUP" htmlsafe="true" outputdef="<%=znodo2%>"/></div>
								<%
										}else{
								%>
								<div class="titulo">Pregunta <%=no +1%>&nbsp;<m4:item  item="SCO_NM_QUESTION_SUBGROUP" htmlsafe="true" outputdef="<%=znodo2%>"/></div>
								<%
										}
										zidsubgroupant=zidsubgroup;
									}
								}
								if ((id_groupshow.equals("0")) || (id_subgroupgroupshow.equals("0"))){
								%>	
								<m4:item  item="SCO_NM_QUESTION" htmlsafe="true" outputdef="<%=znodo2%>"/>
								<%}%>
								<input id="id_ques<%=current%>" name="id_ques<%=current%>" type="hidden" value="<m4:item  item='SCO_ID_QUESTION' htmlsafe='true' outputdef='<%=znodo2%>'/>" />
								<input id="comment<%=current%>" name="comment<%=current%>" type="hidden" value="<m4:item  item='SCO_EVALUATOR_COMM_TEMP' htmlsafe='true' outputdef='<%=znodo2%>'/>" />
								<div class="contenido">
									<div>
										<span id="pregunta<m4:item  item='CSP_CONTADOR' htmlsafe='true' outputdef='<%=znodo2%>'/>"><strong><m4:item  item="SCO_QUESTION" htmlsafe="true" outputdef="<%=znodo2%>"/></strong></span>
										<input type="hidden" id="tipo<m4:item  item='CSP_CONTADOR' htmlsafe='true' outputdef='<%=znodo2%>'/>" value="<m4:item  item='SCO_BEHAVIOR' htmlsafe='true' outputdef='<%=znodo2%>'/>">
									</div>
									<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveaux%>"/></m4:move>
									<m4:dataloop outputdef="<%=znodoaux%>">
									<%
										if(ztest.equals("EST_DIR_3")){
									%>
										<span class="pl-2" style="padding-left: 40px;">
										  	<label>
										  		<m4:item  item="SCO_NM_ANSWER_VAL" htmlsafe="true" outputdef="<%=znodoaux%>"/>
								             	<input type="radio" name="<%=znodoaux%>" id="<m4:item  item='SCO_ID_ANSWER_VAL' htmlsafe='true' outputdef='<%=znodoaux%>'/>" value="<m4:item item='SCO_ID_ANSWER_VAL' htmlsafe='true' outputdef='<%=znodoaux%>'/>" >
										    	
										  	</label>
										</span>
									<%
										}else{
									%>
										<div class="radio pl-2">
										  	<label>
								             	<input type="radio" name="<%=znodoaux%>" id="<m4:item  item='SCO_ID_ANSWER_VAL' htmlsafe='true' outputdef='<%=znodoaux%>'/>" value="<m4:item item='SCO_ID_ANSWER_VAL' htmlsafe='true' outputdef='<%=znodoaux%>'/>" >
										    	<m4:item  item="SCO_NM_ANSWER_VAL" htmlsafe="true" outputdef="<%=znodoaux%>"/>
										  	</label>
										</div>
									<%
										}
									%>
										
									</m4:dataloop>
									<script type="text/javascript" language="Javascript1.5">
									 	if ('<m4:item  item="SCO_ID_ANSWER_VAL_TEMP" htmlsafe="true" outputdef="<%=znodo2%>" jsafe="true"/>'!= ""){
									    	res = document.getElementsByName("SSCO_SV_ANSWER_TP_VALUE"+<%=current%>);
											for(var i=0; i< res.length; i++){ 
												if (res[i].value == '<m4:item  item="SCO_ID_ANSWER_VAL_TEMP" htmlsafe="true" outputdef="<%=znodo2%>" jsafe="true"/>'){
													res[i].checked = true;
												}
											}	
									 	}
									</script>
									<div class="radio pl-2" id="tipo_text<m4:item  item='CSP_CONTADOR' htmlsafe='true' outputdef='<%=znodo2%>'/>" style="display: none;">
									  	<label>
									    	<input type="text" name="<%=znodoaux%>" class="form-control">
									  	</label>
									</div>
								</div>
							</div>
						</form>
					</m4:dataloop>
					<input type="hidden" id="cont" value="<%=zcount2%>">
					<script type="text/javascript">
						

						for (var i = 0; i < document.getElementById("cont").value; i++) {
					      	if(document.getElementById("id_ques"+i).value==999){
					      		document.getElementById("a"+i).style.display = "none";
					      	}
						}

						for (var i = 0; i < document.getElementById("cont").value; i++) {
					      	if(document.getElementById("tipo"+i).value == "3"){
					      		document.getElementById("tipo_text"+i).style.display = "block";
							}else if(document.getElementById("tipo"+i).value == "2"){
								<%=znodoaux%>.setAttribute("type", "checkbox");
							}
						}
						if (document.getElementById("cues").value=="Estilos de Dirección") {
							document.getElementById("contenido").style.display = "block";
							for (var i = 0; i < document.getElementById("cont").value; i++) {
					      		document.getElementById("pregunta"+i).style.display = "none";
						    }
						} else if(document.getElementById("cues").value=="Influencia en la Negociación"){
							document.getElementById("contenido2").style.display = "block";
						} else if(document.getElementById("cues").value=="Efectividad del Equipo"){
							document.getElementById("contenido3").style.display = "block";
						} else if(document.getElementById("cues").value=="Nivel de Estrés"){
							document.getElementById("contenido4").style.display = "block";
						} else if(document.getElementById("cues").value=="Gestión del Tiempo"){
							document.getElementById("contenido5").style.display = "block";
						} else if(document.getElementById("cues").value=="Análisis y Toma de decisiones"){
							document.getElementById("contenido6").style.display = "block";
						} else if(document.getElementById("cues").value=="Gestión del Orden y la Planificación"){
							location.href="ssco_evaluator_questions_gest_plan.jsp?id_cap=EST_DIR10&spos=3&mss=0";
						}
						
					</script>
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-12 col-lg-12 col-xs-12">
					<center>
						<a title="<%=Save%>" href="javascript:guard('<%=zcount2%>');">	
							<img alt="<%=Save%>"  src="/iconos/icono_guardar_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  />
						</a>
					</center>
				</div>
			</div>
		</div>
	 	<%} else {%>
		<div class="fuentenodatos"><%=zNodata%></div>
	 	<%}%>
		<div class="container">
			<div class="row">
				<div id="pie" class="col-md-12">
					<img src="/images/barra_pie1.png">
				</div>
			</div>
		</div>
		<script type="text/javascript" language="Javascript1.5">
				
				if ('<%=sResult%>'== "1"){
					var vmensaje=m4getmessage("_sl_co_ess_ev_5",'<m4:item  item="SCO_VALUE_RAT_QUE" htmlsafe="true" outputdef="<%=znodo1%>" jsafe="true"/>','<m4:item  item="SCO_NM_LVL_QUE" htmlsafe="true" outputdef="<%=znodo1%>" jsafe="true"/>');
				    if ( confirm(vmensaje) == true){
						var aval=new Array();

						aval[0]='<m4:item  item="SCO_VALUE_RAT_QUE" htmlsafe="true" outputdef="<%=znodo1%>" jsafe="true"/>';
						//alert(aval[0]);
						aval[1]='<m4:item  item="SCO_ID_LVL_QUE" htmlsafe="true" outputdef="<%=znodo1%>" jsafe="true"/>';
						//alert(aval[1]);
				    }
				}

			</script>
	</body>
<m4:endpage/>	
</html>