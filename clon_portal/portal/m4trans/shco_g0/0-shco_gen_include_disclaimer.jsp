<%-- =========================================================
	@(#) FileVersion: 816.000.001
	@(#) FileDescription: shco_gen_include_disclaimer.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2018
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="/m4trans/shco_g0/0-shco_gen_taglib.jsp" %>
<%
  // Valores por defecto: 
  //Modo1: Se carga cada vez que se utiliza el disclaimer
  //String zTranslationsPath ="/translations/";
  //java.util.Properties Tran_shco_g0 = new Properties();
  //Tran_shco_g0.load(application.getResourceAsStream(zTranslationsPath + "shco_g0_" +zlanguser + ".properties"));
  
  //Modo2: Se lee del request, en la generación del menú se debe haber hecho un setAtrribute
  //java.util.Properties Tran_shco_g0 = (java.util.Properties)request.getAttribute("Tran_shco_g0");

  //Modo3: como se hace en esta página, a traves de la acción <jsp:useBean> 
  M4SessionManager zsessionmanager = M4Context.getSession(request);
  int iLang = zsessionmanager.getLanguageID(); // 2, 3, 4.... 8  
  String zLangFolder= CheckConfig.checkFolderLanguage(new Long(iLang).intValue(), CheckConfig.THCL);
  String zhelp = (String)request.getAttribute("zsLocalizeHelp");
  String zsLocalizeHelp = zhelp;
  String z_gHelpFolder = (String)request.getAttribute("zsHelpFolder");
  String zappprod = (String) zsessionmanager.getProductID().toLowerCase();
 %>
 

<jsp:useBean id="Tran_shco_g0" scope="session" class="com.meta4.redirect.M4PropertiesRedirect" />

<%String zSHCOLBHELP_val = Tran_shco_g0.getProperty("Menu.Help");%>
	
<br/>
<table width="100%" class="disclaimer">
<tr><td class="disclaimer">
    
	<% //No generar disclaimer si no se han generado los ficheros de los menus 
	if (M4FileURIChecker.exists("/shco_g0_" + zappprod + "/shco_gen_menusup.jsp",pageContext)== false){%>
	   <script type="text/javascript">	generate_disclaimer(mnames_disc,mlinks_disc);</script>
	<%}%>	
	
	<%-- Gestión de localización por producto. --%>
	<%pageContext.setAttribute("zProdFileURI","/shco_g0_" + zappprod + "/shco_gen_help.jsp" );
    if (M4FileURIChecker.exists((String)pageContext.getAttribute("zProdFileURI"),pageContext)== true){    
       request.setAttribute("zsLocalizeHelp",zsLocalizeHelp);
       request.setAttribute("zsHelpFolder",z_gHelpFolder);
       request.setAttribute("zhelp",zhelp );
       request.setAttribute("zLangFolder",zLangFolder);
       %>
       <jsp:include page='<%=com.meta4.redirect.M4Customizer.checkTranslation(((String)pageContext.getAttribute("zProdFileURI")), request, pageContext.getServletContext())%>' flush="false" />
	<%}else{%>   		
	    <%@ include file="/m4trans/shco_g0/0-shco_gen_help_link.jsp" %>[<%=Tran_shco_g0.getProperty("Menu.Help")%>]</a>
    <%}%>		
			  
	<a title="<%=Tran_shco_g0.getProperty("Menu.Top")%>" href="#Top">[<%=Tran_shco_g0.getProperty("Menu.Top")%>]</a> 
	</td>
</tr>
<tr><td class="disclaimer" align="center">&#169; <a title="Meta4" href="http://www.meta4.com/">Meta4 Spain, S.A.</a><br /><%=Tran_shco_g0.getProperty("Msg.Disclaimer")%></td>
</tr></table>
