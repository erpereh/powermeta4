<%@ include file="/m4trans/m4custom/IBER/sse_generico/0-sgco_params_login.jsp" %>
<html>
  <head>
    <title></title>
  </head>
  <body>
    <form name=ESSlogin action='/sse_generico/generico_login_cyc.jsp' method='post'>
       <input type='hidden' name='lang' value='es'>
       <input type='hidden' name='params' value='<%=sParams%>'>
    <form>
  </body>
</html>
<script type="text/javascript">
  ESSlogin.submit();
</script>
