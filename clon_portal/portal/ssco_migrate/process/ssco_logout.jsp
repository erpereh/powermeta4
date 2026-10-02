<!--
  It is necesary to disconnect from meta4 Peoplenet
-->

<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>

<m4:clearbag/>
<m4:logout/>

<script language="JavaScript">
  location.href="/ssco_migrate/process/login.jsp?lang="+m4migrate.lang;
</script>