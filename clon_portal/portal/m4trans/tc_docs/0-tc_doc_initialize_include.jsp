<%--
	@(#)FileVersion: 812.002.059
	
	Este include debe aparecer una unica vez por página y antes de cualquier include tc_doc_include.jsp
--%> 
	
<%							 
//variable para contener el identificador del campo que corresponde al identificador del documento
String sgtc_zIDInputIDDOC = "SCO_ID_DOC";  

//variable para contener el identificador del campo que corresponde al título del documento
String sgtc_zIDInputTITLEDOC = "SCO_TITLE_DOC";  	

// Variable con el identificador del campo donde se indica si el documento debe encriptarse.
String sgtc_zIDInputDOENCRYPT = "SCO_ENCRYPTED";

//variable para contener el valor del identificador del documento
String sgtc_zIDDOC = "";

//variable para contener el valor del título del documento
String sgtc_zTITLEDOC = "";

// Variable con el valor de si debe encriptarse el documento.
String sgtc_zDOENCRYPT = "";

//variable para contener la sesión donde se graba el formulario funcional que contiene el include
String sgtc_zsubsesionsave = "";

//0:modo formulario 1:modo tabla
String sgtc_zShowMode = "0";

//0:modo readonly 1:modo readwrite
String sgtc_zReadWrite = "1";

//variable para contener la página de estilo a utilizar
String sgtc_zstylesheet = "/css/estilo_sse.css";	 		

//variable para generar los nombres de los input, por ejemplo: SCO_ID_DOC_1,SCO_ID_DOC_2,...  			     
String sgtc_zNMInputIDDOC = "SCO_ID_DOC";

//variable para contener el identificador del estilo para la fila a pintar (solo para modo tabla)
String sgtc_zIDCSSRow = "fuenteformulario";

String ztcsubsesionmanage = "SRTC_MANAGE_DOCUMENT";
String ztcmeta4objectmanage = "SRTC_MANAGE_DOCUMENT";  
String ztcnodemanage = "SCO_MANAGE_DOCUMENT";
String ztcmetodomanage = "TITLE:" + ztcmeta4objectmanage + "!" + ztcnodemanage + ".SCO_GET_TITLE_DOCUMENT";

String sgtc_zText_Title = "";
String sgtc_zButt_Attach = "";
String sgtc_zButt_View = "";
String sgtc_zButt_Delete = "";
String sgtc_zButt_Info = "";
String sgtc_zText_DoEncr = "";

String zlanguser = M4Locale.takeLocale(new String().valueOf(M4Context.getSession(request).getLanguageID())).toString();
%>    
<%-- begin: taken from /shco_g0/shco_gen_taglib.jsp" --%>
      <%-- Java: imports   --%>
      <%@ page import="java.io.*, java.util.*, java.net.*" %>
      <%@ page import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
      <%@ page import="com.meta4.configuration.*,com.meta4.taglib.util.*,com.meta4.savparams.*" %>
      <%-- Cache: No Cache   --%>
      <% response.setHeader("Pragma", "no-cache"); %>
      <% response.setHeader("Cache-Control", "no-store"); %>
      <% response.setDateHeader("Expires", -1); %>
      <%-- Encoding --%>
      <% String sEncoding = M4RequestEncoding.getAppEncoding(); 
      response.setContentType ("text/html; charset="+sEncoding+"");
      %> 
      <%-- XHTML 1.0. Load Once   --%>
      <% if (request.getAttribute("taglib_Loaded")== null)
      { 
            request.setAttribute("taglib_Loaded","1");
      %>
      <? xml version="1.0" encoding="<%=sEncoding%>" ?>
      <%-- For CSS compatibility with IE previous to 6 remove the DTD line below --%>
   	  	 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">   	  	 
      <%}%>   
      <%@ include file="/m4trans/shco_g0/0-shco_gen_functions.jsp" %>
<%-- end: taken from /shco_g0/shco_gen_taglib.jsp" --%>

<script type="text/javascript" language="Javascript1.2" src="/library/m4doc_include.js"></script>

<%@ include file="/m4trans/tc_docs/0-tc_doc_trans.jsp" %> 	
