<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE >
<html>
<head><%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <link rel="stylesheet" href="/calendario/jquery-ui.css">
  <script src="/calendario/jquery-1.12.4.js"></script>
  <script src="/calendario/jquery-ui.js"></script>
  <script>

  $( function() {
    $( "#STD_DT_BIRTH" ).datepicker({
      closeText: 'Cerrar',
      prevText: '< Ant',
      nextText: 'Sig >',
      currentText: 'Hoy',
      dayNames: ['Domingo', 'Lunes', 'Martes', 'Mi&eacute;rcoles', 'Jueves', 'Viernes', 'S&aacute;bado'],
      dayNamesShort: ['Dom','Lun','Mar','Mi&eacute;','Juv','Vie','S&aacute;b'],
      dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','S&aacute;'],
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
      firstDay: 1,
      dateFormat: "dd-mm-yy", 
      changeMonth: true, 
      changeYear: true, 
      yearRange : 'c-120:c'});
  } );
  $( function() {
    $( "#STD_DT_START" ).datepicker({
      closeText: 'Cerrar',
      prevText: '< Ant',
      nextText: 'Sig >',
      currentText: 'Hoy',
      dayNames: ['Domingo', 'Lunes', 'Martes', 'Mi&eacute;rcoles', 'Jueves', 'Viernes', 'S&aacute;bado'],
      dayNamesShort: ['Dom','Lun','Mar','Mi&eacute;','Juv','Vie','S&aacute;b'],
      dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','S&aacute;'],
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
      firstDay: 1,
      dateFormat: "dd-mm-yy",      
      minDate: 0, 
      changeMonth: true, 
      changeYear: true, 
      yearRange : 'c:c+10'});
  } );
  $( function() {
    $( "#STD_DT_END" ).datepicker({dateFormat: "dd-mm-yy", changeMonth: true, changeYear: true, yearRange : 'c-120:c+10'});
  } );
  </script>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<%@ include file="../../sse_g1/sse_g1_trans.jsp" %>
<title><%=sse_g1Ess.getProperty("Title.sse_g1_p5_mod")%></title>
<%
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
	if ((estado==null)||(estado.equals(""))){estado="0";}
	if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
	String zPos = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPos");
	
%>

</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%@ include file="../sse_g1_p5_mod.jsp" %>
<%@include file="../../sse_generico/espanol/generico_ventanas.jsp"%>
<%}%>	
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>


