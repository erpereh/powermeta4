<%
  M4SessionCl zsesionTLoad = M4Context.getM4SessionCl(request);
  String sLangLoad = zsesionTLoad.getBagEntries("lang");

  if ((sLangLoad==null)||(sLangLoad.equals(""))){sLangLoad="fr";
  } else {
    if (sLangLoad.equals("in")) { sLangLoad="en";
    } else if (sLangLoad.equals("es")) {sLangLoad="es";
    } else if (sLangLoad.equals("fr")) {sLangLoad="fr";
    } else if (sLangLoad.equals("pt")) {sLangLoad="pt";
    }
  } 

  java.util.Properties Transgco_gen= new Properties();
  Transgco_gen.load(application.getResourceAsStream("/translations/sgco_gen_" + sLangLoad + ".properties"));
%>
