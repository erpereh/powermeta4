<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Course Evaluation</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript"  language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/english/0-menu_ess.jsp" %>
<script type="text/javaScript">
function Enviarcurso( pk2, pk3, pk4,  curso){

	m4valor("Cursos", "PK2", pk2, "set");
	m4valor("Cursos", "PK3", pk3, "set");
	m4valor("Cursos", "PK4", pk4, "set");

	m4valor("Cursos", "COU", curso, "set");
	m4valor("Cursos", "EST", "31", "set");
	m4submit("Cursos");
}
</script>
<%
        String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
		String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
		if ((estado==null)||(estado.equals(""))){
			estado="0";
		}
		if ((zinicios==null)||(zinicios.equals(""))){
			zinicios = "1";
			}
%>
</head>
<body>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/english/0-generico_menusup.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/english/0-generico_links.jsp" %>
<%
	String zsubsesion = "SSE_TRAINING_EVAL";
	String zmeta4object = "SSE_TRAINING_EVAL";
	String zmetodocarga = zsubsesion + "!SSE_EVEN_EVAL_SHEET.CARGA";
	String znodo = "SSE_EVEN_EVAL_SHEET";
	

	String zventanas = "20";
	int zvuelta = 5;
	String zdireccion = "sse_g1/sse_g1_p8.jsp";
	String zestado = "31";


	// Normally not modified.
	
	int zregistroinicial = Integer.valueOf(zinicios).intValue();
	zregistroinicial = zregistroinicial - 1;
	int zventana  = Integer.valueOf(zventanas).intValue();
	int zregistrofinal = zregistroinicial + zventana - 1;
	
	String zmove = znodo + ":" + znodo + "[zregistroinicial]";   
	String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
	String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
	
	
	String ztipocarga = "M4T";
	
	// Items to be loaded. You must add all of the ones that you want to view.

	String zSCOURSE = zcomun + "SCO_NM_DEV_SUBACTION";
	String zSCO_NM_DEV_ACT_TYPE = zcomun + "SCO_NM_DEV_ACT_TYPE";
	String zSSTART = zcomun + "DT_START";
	String zSEND = zcomun + "DT_END";
	String zpk1 = zcomun + "ID_ORGANIZATION";
	String zpk2 = zcomun + "SCO_ID_DEV_SUBACTION";
	String zpk3 = zcomun + "SCO_ID_FORM";
	String zpk4 = zcomun + "SCO_OR_STUDENT";

	String zSCOMINDATE = zcomun + "SCO_MIN_DATE";

%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<%
		int  zcount  = 0;
		int  zcounti  = 0;	
		try {
			M4Operations m = new M4Operations(request);
			zcount = m.getCount(znodo,zsubsesion,znodo);
		} catch(Exception e) {}
		try {
			M4Operations m = new M4Operations(request);
			zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		} catch(Exception e) {}
		String	zcountv = String.valueOf(zcounti);
		String zto = new Integer(new Integer(zcountv).intValue()-1).toString();		
%>	
<table width="100%">
			<tr>
				<!-- Functional Page Title -->
				<td class="titulofuncional" colspan="2">
					Course Evaluation
				</td>
			</tr>
			<tr>
				<td>
					<!-- When you insert the icon, do not forget to indicate its exact size. -->			
					<img alt="Course Evaluation" src="/iconos/noname_evalua_cursos_74_100.gif" width="100" height="100" />
				</td>
				<td>
					<!-- Description -->			
					<div class="descripcionfuncional">
						Evaluate the courses in which you have participated. To do so, select the name of each one.
					</div>
				</td>
			</tr>
			<tr>
				<td>
				<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8_desc.jsp" method="post" name="Cursos" id="Cursos">
					<input type="hidden" id="PK1" name="PK1" value="" />
					<input type="hidden" id="PK2" name="PK2" value="" />
					<input type="hidden" id="PK3" name="PK3" value="" />
					<input type="hidden" id="PK4" name="PK4" value="" />
					<input type="hidden" id="PK5" name="PK5" value="" />
					<input type="hidden" id="COU" name="COU" value="" />
					<input type="hidden" id="EST" name="EST" value="" />
				</form>			
				</td>
			</tr>	
		</table>

	<!-- ********************************************************************* -->
<% 
	if (zcounti > 0) {
%>	
		<table class = "tablaestados" width="100%" cellspacing="0">
		<tr class = "tablaestadosceldatitulo">
			<td colspan="4">
				Courses Pending Evaluation
			</td>		
		</tr>
		<m4:loop from="0" to="<%=zto%>">
		<tr>
			<td class="fuentevalor">
				<a class="enlacefuncional" title = "Course to Evaluate"  href="javascript:Enviarcurso('<m4:item m4name="<%=zpk2%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zpk3%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zpk4%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSCOURSE%>" jsafe="true" htmlsafe="true"/>');">
					<m4:item m4name="<%=zSCOURSE%>" htmlsafe="true"/>
				</a>&nbsp;(&nbsp;<m4:item m4name="<%=zSCO_NM_DEV_ACT_TYPE%>" htmlsafe="true"/>&nbsp;)&nbsp;
			</td>	
			<td class = "fuentecampo" colspan="1">
				taken on:	
			</td>
			<td  class = "fuentevalor" colspan="1"  >
				<m4:item m4name="<%=zSCOMINDATE%>" htmlsafe="true"/>
			</td>
			<td  class = "fuentevalor" colspan="1"  >
				<m4:item m4name="<%=zSEND%>" htmlsafe="true"/>
			</td>
		</tr>
		</m4:loop>
		</table>
		
	<%@include file="/m4trans/m4custom/CYC/sse_generico/english/0-generico_ventanas.jsp"%>
			
	<%
	}
	else{%>
		<div class="fuentenodatos" align="center">
			 You currently have no course to evaluate.
		</div>
		<br / ><br / ><br / ><br / ><br / ><br / ><br / >
	<%
		}
	%>	
	<%@ include file="/m4trans/m4custom/CYC/sse_generico/english/0-generico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>


