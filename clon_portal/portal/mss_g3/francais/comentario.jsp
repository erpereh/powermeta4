<html>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>  
<%@ include file="/mss_g3/mss_ev_trans.jsp"%> 
<% String sComment = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"comment"); %>
  <head>
    <title><%=Tran.getProperty("Label.Comment")%></title>
    <link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
    <script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
    <script type="text/javascript"  language="Javascript1.2" src="/libreria/dom1.js"></script>
    <script type="text/javascript" language="Javascript1.2">

    function AddComment() {
      window.close();
    }
        
    </script>
  </head>

   <body onunload="window.returnValue = document.forms['miform'].elements['SCO_DESCRIPTION'].value;">
  <form id="miform" name="miform" action="">
    <table border="0" width="100%">
    <tr>
      <td class="fuentecampo" colspan="1" ><%=Tran.getProperty("Label.Comment")%></td>  
      <td class="fuentecampo" colspan="3"> <textarea rows="6" cols="40" id="SCO_DESCRIPTION" name="SCO_DESCRIPTION" title="Commentaires" tabindex="1" ><%=sComment%></textarea></td>
    </tr> 
    </table>
  </form>
  <table width="100%">
      <tr>
      <td align="center">
        <a onclick="javascript:AddComment();"><img alt="<%=Tran.getProperty("Button.Ok")%>" title="<%=Tran.getProperty("Button.Ok")%>" src="/iconos/icono_aceptar_mss_36_36.gif" height="36" width="36"></img></a>
      </td>  
      </tr>
  </table>
  </body>
</html>



