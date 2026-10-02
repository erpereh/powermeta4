<%@ include file="../sgco_params_login.jsp" %>
<html>
  <head>
    <title></title>
  </head>
  <body>
    <form name=ESSlogin action='/sse_generico/generico_login.jsp' method='post'>
       <input type='hidden' name='lang' value='en'>
       <input type='hidden' name='params' value='<%=sParams%>'>
    <form>
  </body>
</html>
<script type="text/javascript">
  ESSlogin.submit();
</script>