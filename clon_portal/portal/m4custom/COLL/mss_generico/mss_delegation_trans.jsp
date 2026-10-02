<%--
	@(#)FileDescription: Include genérico para páginas de la delegación
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

  java.util.Properties mssDelegation = new Properties();
  mssDelegation.load(application.getResourceAsStream("/translations/mss_delegation_" + sLang + ".properties"));
%>
