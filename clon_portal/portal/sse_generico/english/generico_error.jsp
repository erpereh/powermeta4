<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
<title>Error</title>
  <!-- General Style Sheet. Required-->
  <link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
  <!-- JavaScript libraries. Required-->
  <script type="text/javascript" src="/libreria/funciones_sse.js"></script>
  
  <!-- Java libraries. Required-->
  <%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %> 

  <!-- Parameter retrieval. -->
<%
    M4SessionManager  session    = M4Context.getSession(trequest);
    String zError = (String)trequest.getAttribute("error"); 
    if ((zError==null)||(zError.equals(""))){   
    zError = "error desconocido";
    }
%>
</head>
<body>
<!-- Header -->
<div id="capa_menu" style="position:absolute; left:1%; top:1%; width:100%; height:20%; z-index:3">
     <!--include file="..\sse_generico\english\generico_menusup.jsp"-->
</div>
<div id="capa_link" style="position:absolute; left:1%; top:26%; width:20%; height:0%; z-index:1">
    <!--include file="..\sse_generico\english\generico_links.jsp"-->
</div>
<div id="capa_cuerpo" style="position:relative; left:20%; top:22%; width:80%; height:0%; z-index:2">

  <!-- Description table. Required. Always 3*2: a page title + an icon + a description + options -->
  <table border="1">
  <tr>
    <!-- Functional Page Title -->
    <td class="" colspan="2">
      Error Message
    </td>
    <td>
      <!-- Back button. Required-->
      <a href="" onclick="history.back();">
        <img alt="Back" src="/iconos/noname_volver_52_44.gif" height="44" width="52" onmouseover="m4luz(this)" onmouseout="m4oscuridad(this)" />
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <!-- When you insert the icon, do not forget to indicate its exact size. -->      
      <img alt="Name" src="/iconos/*.gif" width="20" height="60" />
    </td>
    <td>
      <!-- Description -->      
      <div>
        `zError`
      </div>
      <ul>
        <li>
          <a style="CURSOR: hand" href="">Option1</a>
        </li>
      </ul>
    </td>
  </tr>
  </table>
  <!-- End Description Table. -->

  <!-- Page Footer -->  
  <!--include file="..\sse_generico\english\generico_disclaimer.jsp"--> 
</div>
</body>
</html>
