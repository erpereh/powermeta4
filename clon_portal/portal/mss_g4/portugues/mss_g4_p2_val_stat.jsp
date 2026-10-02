<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
	<title>Faltas</title>
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %>
	<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>	
	<%
	
		Generatablaparametros zobjtabla = new Generatablaparametros(request);
		Hashtable zhash = zobjtabla.getTablaHash();
		String estado = (String) zhash.get("estado");
		String zinicios =(String) zhash.get("zinicios");
		String zparamyear = (String) zhash.get("zparamyear");
		if ((estado==null)||(estado.equals(""))){estado="41";}
		if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
		if ((zparamyear==null)||(zparamyear.equals(""))){
		 Calendar ahora = Calendar.getInstance();
	     int ano = ahora.get(ahora.YEAR);
	     String strano = String.valueOf(ano);
	     zparamyear = strano;
		}

	
	%>
	
	<script type="text/javascript">
	function filtrar(){
		var valor =m4select("filtroanios","anios","value");
		m4valor("oculto","zparamyear",valor,"set");
		oculto.submit();
	}
	</script>	
	
</head>
<body>
<div id="capa_menu" style="position:absolute; left:1%; top:1%; width:100%; height:20%; z-index:3">
	<%@ include file="../../mss_generico/portugues/mssgenerico_menusup.jsp" %>
</div>
<div id="capa_link" style="position:absolute; left:1%; top:26%; width:20%; height:0%; z-index:1">
	<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
</div>
<%
   String zsubsesion = "SSM_ABSENCES";
   String zmeta4object = "SSM_ABSENCES";
   String zmetodocarga = zsubsesion + "!SSM_PRINCIPAL.CARGA";
   String znodo = "SSM_EMPLEADOS";
   String znodoanios = "M4T_YEARS_LIST";
   String znodooverview = "SSM_ABSENCE_OVERVIEW";
   String zraiz = zsubsesion + "!" + znodo + ".";
   String zraizanios = zsubsesion + "!" + znodoanios + ".";

   String zventanas = "20";
   int zvuelta = 5;
   String zdireccion = "/mss_g4/mss_g4_p2_val.jsp";
   
      	// No se modifica en general.

   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   String zmove = znodo + ":" + znodo + "["+zregistroinicial+"]";   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";

   String ziteratoranios = znodoanios + ":" + zsubsesion + "!" + znodoanios;
   String zmoveanios = znodoanios + ":" + znodoanios + "[FIRST]";
   String zoutputdefanios = zsubsesion + "!" + znodoanios + "[*]";


   String ztipocarga = "OVERVIEW";
   
   String zYEAR = zraizanios +"YEAR";


%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<% try {
	    M4Operations m = new M4Operations(request);
	    m.setItem(zsubsesion,znodooverview,"","YEAR",zparamyear);	      
		} catch(Exception e) {}
%>


<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodoanios%>"><m4:param name="m4name0" value="<%=zoutputdefanios%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveanios%>"/></m4:move>
<%
		int  zcount  = 0;
		int  zcounti  = 0;	
		try{
			M4Operations m = new M4Operations(request);
			zcount = m.getCount(znodo,zsubsesion,znodo);
		} catch(Exception e) {}
		try{
			M4Operations m = new M4Operations(request);
			zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		} catch(Exception e) {}
		String	zcountv = String.valueOf(zcounti);
		
%>
<div id="capa_cuerpo" style="position:relative; left:20%; top:22%; width:80%; height:0%; z-index:2">
     <!-- Tabla de Descripcion. Obligatoria. Siempre una 3*2: un titulo de la pagina + un icono + una descripcion + opciones -->
		<table border="0" width="100%">
			<tr>
				<!-- Titulo funcional de la pagina -->
				<td class="titulofuncional" colspan="2">
					Faltas 
				</td>
			</tr>
			<tr>
				<td>
					<!-- Al insertar el icono no olvides anadir su tamano exacto -->			
						<img alt="Faltas" src="/iconos/noname_incidencias_pequenio_mss_52_100.gif" width="100" height="100" onmouseover="m4luztotal(this)" onmouseout="m4oscuridad(this)" />	
				</td>
				<td>
					<!-- Descripcion -->			
					<div class="descripcionfuncional">
					<table border="0" width="100%">
						<tr>
								Neste ecr&atilde; pode consultar as faltas dos trabalhadores.
						</tr>
						<br>
						<tr>
						<div class="enlacefuncional">
							1-Acidente
						</div>
						</tr>
						<tr>
						<div class="enlacefuncional">
							2-N&atilde;o justificada
						</div>
						</tr>
						<tr>
						<div class="enlacefuncional">
							3-Doen&ccedil;a
						</div>
						</tr>
						<tr>
						<div class="enlacefuncional">
							4-Greve
						</div>
						</tr>
						<tr>
						<div class="enlacefuncional">
							5-Maternidade
						</div>
						</tr>
						<tr>
						<div class="enlacefuncional">
							6-Risco durante a gravidez
						</div>
						</tr>
						<tr>
						<div class="enlacefuncional">
							7-F&eacute;rias
						</div>
						</tr>
					</table>
					</div>
				</td>
			</tr>
		</table>

	<!-- ********************************************************************* -->
	
<form action="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_val.jsp?estado=41" method="post" name="oculto" id="oculto">
	<input type="hidden" id="zinicios" name="zinicios" value="" />
	<input type="hidden" id="zparamyear" name="zparamyear" value="" />
</form>
<form action="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_detail.jsp?estado=41" method="post" name="detalle" id="detalle">
<input type="hidden" id="zinicios" name="zinicios" value="" />
<input type="hidden" id="zparamyear" name="zparamyear" value="<%=zparamyear%>" />
<input type="hidden" id="zperson" name="zperson" value="" />
<input type="hidden" id="zincidence" name="zincidence" value="" />
<input type="hidden" id="znmincidence" name="znmincidence" value="" />
<input type="hidden" id="zempleado" name="zempleado" value="" />
</form>

<% 
	if (zcounti > 0) {
%>	
<table class = "tablaestados" width="100%" cellspacing="0">
	<form name="anios" id="anios" action="">
	<tr>
		<td class="fuentecampofiltro" colspan="9">&nbsp;Ano&nbsp;
		<select id="filtroanios" class="fuenteapartados" onchange="filtrar()" >
		<option value="<%=zparamyear%>">&nbsp;<%=zparamyear%></option>			
		<m4:iterator m4rows="*" m4node="<%=ziteratoranios%>">
		<m4:param name="m4item0" value="<%=zYEAR%>"/>
		<option value="$M4ITEM0$">&nbsp;$M4ITEM0$</option>
		</m4:iterator>
		</select>
		</td>
	</tr>	
	</form>
	<tr class = "tablaestadosceldatitulo">
		<td>
			Trabalhador
		</td>		
		<td>
			1
		</td>		
		<td>
			2
		</td>		
		<td>
			3
		</td>		
		<td>
			4
		</td>		
		<td>
			5
		</td>		
		<td>
			6
		</td>		
		<td>
			7
		</td>		
		<td>
			Total
		</td>		
	</tr>
<%  
	try{
		M4Operations t = new M4Operations(request);
		int i = 0;
	// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
		String zEMPLEADO="";
		String zSNOMBRE="";
		String zSAPELLIDOS="";
		String zSTDIDPERSON="";
		
		int zACCIDENTE=0;
		int zNOJUSTIFICADA =0;
		int zENFERMEDAD=0;
		int zHUELGA=0;
		int zMATERNIDAD=0;
		int zRIESGOENEMBARAZO=0;
		int zVACACIONES=0;
		int zTOTALEMP=0;
		String zACCIDENTE2="";
		String zACCIDENTEAUX="";
		String zNOJUSTIFICADA2 ="";
		String zENFERMEDAD2="";
		String zHUELGA2="";
		String zMATERNIDAD2="";
		String zRIESGOENEMBARAZO2="";
		String zVACACIONES2="";
		String zTOTALEMP2="";
						
		for (i =zregistroinicial; i < zregistrofinal; i++){
				String id = String.valueOf(i);
				t.moveData(znodo,zmeta4object,znodo,id);
				zSTDIDPERSON = t.getItem(znodo,zmeta4object,znodo,"","STD_ID_PERSON");
				zSNOMBRE = t.getItem(znodo,zmeta4object,znodo,"","STD_N_FIRST_NAME");
				zSAPELLIDOS = t.getItem(znodo,zmeta4object,znodo,"","STD_N_FAMILY_NAME_1");
				zEMPLEADO = zSNOMBRE + " " + zSAPELLIDOS;
				zACCIDENTE2 = t.getItem(znodo,zmeta4object,znodo,"","INCIDENCE2");
				zACCIDENTE2 = zACCIDENTE2.substring(0, zACCIDENTE2.indexOf("."));
				zACCIDENTE = Integer.parseInt(zACCIDENTE2);
				zNOJUSTIFICADA2= t.getItem(znodo,zmeta4object,znodo,"","INCIDENCE7");
				zNOJUSTIFICADA2 = zNOJUSTIFICADA2.substring(0, zNOJUSTIFICADA2.indexOf("."));
				zNOJUSTIFICADA = Integer.parseInt(zNOJUSTIFICADA2);
				zENFERMEDAD2= t.getItem(znodo,zmeta4object,znodo,"","INCIDENCE1");
				zENFERMEDAD2 = zENFERMEDAD2.substring(0, zENFERMEDAD2.indexOf("."));
				zENFERMEDAD = Integer.parseInt(zENFERMEDAD2);
				zHUELGA2= t.getItem(znodo,zmeta4object,znodo,"","INCIDENCE8");
				zHUELGA2 = zHUELGA2.substring(0, zHUELGA2.indexOf("."));
				zHUELGA = Integer.parseInt(zHUELGA2);
				zMATERNIDAD2= t.getItem(znodo,zmeta4object,znodo,"","INCIDENCE3");
				zMATERNIDAD2 = zMATERNIDAD2.substring(0, zMATERNIDAD2.indexOf("."));
				zMATERNIDAD = Integer.parseInt(zMATERNIDAD2);
				zRIESGOENEMBARAZO2= t.getItem(znodo,zmeta4object,znodo,"","INCIDENCE10");
				zRIESGOENEMBARAZO2 = zRIESGOENEMBARAZO2.substring(0, zRIESGOENEMBARAZO2.indexOf("."));
				zRIESGOENEMBARAZO = Integer.parseInt(zRIESGOENEMBARAZO2);
				zVACACIONES2= t.getItem(znodo,zmeta4object,znodo,"","INCIDENCE9");
				zVACACIONES2 = zVACACIONES2.substring(0, zVACACIONES2.indexOf("."));
				zVACACIONES = Integer.parseInt(zVACACIONES2);
				zTOTALEMP2= t.getItem(znodo,zmeta4object,znodo,"","TOTAL_EMP");								
				zTOTALEMP2 = zTOTALEMP2.substring(0, zTOTALEMP2.indexOf("."));
				zTOTALEMP = Integer.parseInt(zTOTALEMP2);				
				
%>	
	<tr>
		<td class="fuentevalor">
				<a title="Ver informa&ccedil;&atilde;o detalhada" href="javascript:m4valor('detalle','zperson','<%=zSTDIDPERSON%>','set');m4valor('detalle','zempleado','<%=zEMPLEADO%>','set');m4valor('detalle','zincidence','0','set');detalle.submit();"><%=zSAPELLIDOS%>,&nbsp;<%=zSNOMBRE%></a>
		</td>

		<%if (zACCIDENTE > 0){%>
		<td class="fuentevalor"><a title="Ver informa&ccedil;&atilde;o detalhada" href="javascript:m4valor('detalle','zperson','<%=zSTDIDPERSON%>','set');m4valor('detalle','zempleado','<%=zEMPLEADO%>','set');m4valor('detalle','zincidence','2','set');m4valor('detalle','znmincidence','Accidente','set');detalle.submit();"><%=zACCIDENTE%></a></td>
		<% } else { %>
		<td class="fuentevalor"><%=zACCIDENTE%></td>
		<%}%>

		<%if (zNOJUSTIFICADA > 0){%>
		<td class="fuentevalor"><a title="Ver informa&ccedil;&atilde;o detalhada" href="javascript:m4valor('detalle','zperson','<%=zSTDIDPERSON%>','set');m4valor('detalle','zempleado','<%=zEMPLEADO%>','set');m4valor('detalle','zincidence','7','set');m4valor('detalle','znmincidence','No Justificada','set');detalle.submit();"><%=zNOJUSTIFICADA%></a></td>
		<% } else { %>
		<td class="fuentevalor"><%=zNOJUSTIFICADA%></td>
		<%}%>

		<%if (zENFERMEDAD > 0){%>
		<td class="fuentevalor"><a title="Ver informa&ccedil;&atilde;o detalhada" href="javascript:m4valor('detalle','zperson','<%=zSTDIDPERSON%>','set');m4valor('detalle','zempleado','<%=zEMPLEADO%>','set');m4valor('detalle','zincidence','1','set');m4valor('detalle','znmincidence','Enfermedad','set');detalle.submit();"><%=zENFERMEDAD%></a></td>
		<% } else { %>
		<td class="fuentevalor"><%=zENFERMEDAD%></td>
		<%}%>

		<%if (zHUELGA > 0){%>
		<td class="fuentevalor"><a title="Ver informa&ccedil;&atilde;o detalhada" href="javascript:m4valor('detalle','zperson','<%=zSTDIDPERSON%>','set');m4valor('detalle','zempleado','<%=zEMPLEADO%>','set');m4valor('detalle','zincidence','8','set');m4valor('detalle','znmincidence','Huelga','set');detalle.submit();"><%=zHUELGA%></a></td>
		<% } else { %>
		<td class="fuentevalor"><%=zHUELGA%></td>
		<%}%>

		<%if (zMATERNIDAD > 0){%>
		<td class="fuentevalor"><a title="Ver informa&ccedil;&atilde;o detalhada" href="javascript:m4valor('detalle','zperson','<%=zSTDIDPERSON%>','set');m4valor('detalle','zempleado','<%=zEMPLEADO%>','set');m4valor('detalle','zincidence','3','set');m4valor('detalle','znmincidence','Maternidad','set');detalle.submit();"><%=zMATERNIDAD%></a></td>
		<% } else { %>
		<td class="fuentevalor"><%=zMATERNIDAD%></td>
		<%}%>

		<%if (zRIESGOENEMBARAZO > 0){%>
		<td class="fuentevalor"><a title="Ver informa&ccedil;&atilde;o detalhada" href="javascript:m4valor('detalle','zperson','<%=zSTDIDPERSON%>','set');m4valor('detalle','zempleado','<%=zEMPLEADO%>','set');m4valor('detalle','zincidence','10','set');m4valor('detalle','znmincidence','Riesgo durante el Embarazo','set');detalle.submit();"><%=zRIESGOENEMBARAZO%></a></td>
		<% } else { %>
		<td class="fuentevalor"><%=zRIESGOENEMBARAZO%></td>
		<%}%>

		<%if (zVACACIONES > 0){%>
		<td class="fuentevalor"><a title="Ver informa&ccedil;&atilde;o detalhada" href="javascript:m4valor('detalle','zperson','<%=zSTDIDPERSON%>','set');m4valor('detalle','zempleado','<%=zEMPLEADO%>','set');m4valor('detalle','zincidence','9','set');m4valor('detalle','znmincidence','Vacaciones','set');detalle.submit();"><%=zVACACIONES%></a></td>
		<% } else { %>
		<td class="fuentevalor"><%=zVACACIONES%></td>
		<%}%>

		<td class="fuentevalor"><%=zTOTALEMP%></td>

	</tr>
<%
			}
		} catch(Exception e) {}
%>	 	

</table>	
	<%@include file="../../sse_generico/portugues/generico_ventanas_post.jsp"%>

	<%
	}
	else{%>
		<div class="fuentenodatos" >
			 Actualmente n&atilde;o existem faltas registadas para os trabalhadores.
		</div>
		<br / ><br / ><br / ><br / ><br / ><br / ><br / >
	<%
		}
	%>	
</div>
<div id="capa_disclaimer" style="position:relative; left:1%; top:25%; width:100%; height:100%; z-index:3">
	<!-- Pie de pagina -->	
	<%@ include file="../../mss_generico/portugues/mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>
