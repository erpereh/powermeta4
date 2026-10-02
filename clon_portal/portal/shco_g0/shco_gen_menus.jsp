<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_menus.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%-- Página marcada como expirada. Al pedirla se ejecutará mientras que el botón de back usuará el caché --%>
<% response.setDateHeader("Expires", -1); %>
<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.util.*" %>
<%@ page import="com.meta4.session.*" %>
<%@ page import="com.meta4.m4operations.*" %> 
<%@ page import="com.meta4.taglib.util.*" %>

<%  // Valores por defecto:
  String zbarbot = "1111";
  String zTranslationsPath ="/translations/"; 
  M4SessionCl zsesion = M4Context.getM4SessionCl(request);
  String zlanguser = zsesion.getBagEntries("lang");
  if ((zlanguser==null)||(zlanguser.equals(""))){zlanguser = "en";}
  String zcssuser = zsesion.getBagEntries("SHCO_CSS");
  if ((zcssuser==null)||(zcssuser.equals(""))){zcssuser = "1";}	
  M4SessionManager zsessionmanager = M4Context.getSession(request);
  String zusertempuri = zsessionmanager.getUserTempURI();  
   // Parameter to surf to the track
  String zcarril = (String)request.getAttribute("TRACK");
  if ((zcarril==null)||(zcarril.equals(""))){zcarril = "";}
  // menu level
  String znivelmenu = (String)request.getAttribute("MENULEVEL");
  if ((znivelmenu==null)||(znivelmenu.equals(""))){znivelmenu = "1";}
  String zNavrc  = (String)request.getAttribute("NAV_RC");
  if ((zNavrc==null)||(zNavrc.equals(""))){zNavrc ="0";}
%>
<jsp:useBean id="Tran_shco_g0" scope="session" class="java.util.Properties" />	
<%// For testing the css%>
<%//@ include file="shco_gen_css.jsp"%>
<script type="text/javascript" language="Javascript1.5" src="/library/m4menu.js"></script>
<%if (!(zusertempuri.equals(""))){	
   if (request.getAttribute("menus_Loaded")== null){
      request.setAttribute("menus_Loaded","1");%>
	  <script type="text/javascript" language="Javascript1.5" src="<%=zusertempuri%>/shco_menu_<%=znivelmenu%>.js"></script>
   <%}%>	  
   <%@ include file="shco_gen_topmenu.jsp" %>
<%}%>
