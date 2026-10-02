<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
<title>Erro</title>
  <!-- Hoja de Estilo general. Obli gatorio-->
  <link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
  <!-- Librerias JavaScript. Obligatorio-->
  <script type="text/javascript" src="/libreria/funciones_sse.js"></script>

  <!-- Librerias Java. Obligatorio-->
  <%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %> 

  <!-- Recuperacion de parametros. -->
<%
    M4SessionManager  session    = M4Context.getSession(trequest);
    String zError = (String)trequest.getAttribute("error");
    if ((zError==null)||(zError.equals(""))){   
    zError = "error desconocido";
    }
%>
</head>
<body>
<!-- Encabezado -->
<div id="capa_menu" style="position:absolute; left:1%; top:1%; width:100%; height:20%; z-index:3">
     <!--include file="..\sse_generico\portugues\generico_menusup.jsp"-->
</div>
<div id="capa_link" style="position:absolute; left:1%; top:26%; width:20%; height:0%; z-index:1">
    <!--include file="..\sse_generico\portugues\generico_links.jsp"-->
</div>
<div id="capa_cuerpo" style="position:relative; left:20%; top:22%; width:80%; height:0%; z-index:2">

  <!-- Tabla de Descripcion. Obligatoria. Siempre una 3*2: un titulo de la pagina + un icono + una descripcion + opciones -->
  <table border="1">
  <tr>
    <!-- Titulo funcional de la pagina -->
    <td class="" colspan="2">
      Mensagem de erro
    </td>
    <td>
      <!-- Boton de vuelta atras. Obligatorio-->
      <a href="" onclick="history.back();">
        <img alt="Voltar" src="/iconos/noname_volver_52_44.gif" height="44" width="52" onmouseover="m4luz(this)" onmouseout="m4oscuridad(this)" />
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <!-- Al insertar el icono no olvides anadir su tamano exacto -->      
      <img alt="Nome" src="/iconos/*.gif" width="20" height="60" />
    </td>
    <td>
      <!-- Descripcion -->      
      <div>
        `zError`
      </div>
      <ul>
        <li>
          <a style="CURSOR: hand" href="">Op&ccedil;&atilde;o1</a>
        </li>
      </ul>
    </td>
  </tr>
  </table>
  <!-- Fin de Tabla de descripcion. -->

  <!-- Pie de pagina -->  
  <!--include file="..\sse_generico\portugues\generico_disclaimer.jsp"--> 
</div>
</body>
</html>
