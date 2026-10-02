<%@ page  import="com.meta4.session.*" %>
<%

	M4SessionCl zsesionTEss = M4Context.getM4SessionCl(request);
	String sLangEss = zsesionTEss.getBagEntries("lang");


	if ((sLangEss==null)||(sLangEss.equals(""))){sLangEss="es";
	} else {
		if (sLangEss.equals("in")) { sLangEss="en";
		} else if (sLangEss.equals("es")) {sLangEss="es";
		} else if (sLangEss.equals("fr")) {sLangEss="fr";
		} else if (sLangEss.equals("pt")) {sLangEss="pt";
		}
	} 

	%>


