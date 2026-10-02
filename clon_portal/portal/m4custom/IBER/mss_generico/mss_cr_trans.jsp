<%--
	@(#)FileDescription: Include genérico para páginas del submódulo Compensación
--%>

<%
	M4SessionCl zsesionT = M4Context.getM4SessionCl(request);
	String sLang = zsesionT.getBagEntries("lang");

	if ((sLang==null)||(sLang.equals(""))){sLang="fr";
	} else {
		if (sLang.equals("in")) { sLang="en";
		} else if (sLang.equals("es")) {sLang="es";
		} else if (sLang.equals("fr")) {sLang="fr";
		} else if (sLang.equals("pt")) {sLang="pt";
		}
	} 
	com.meta4.redirect.M4PropertiesRedirect Mss_cr = new com.meta4.redirect.M4PropertiesRedirect();
	Mss_cr.load(pageContext, "/traducciones/mss_cr_" +sLang + ".properties");
%>

