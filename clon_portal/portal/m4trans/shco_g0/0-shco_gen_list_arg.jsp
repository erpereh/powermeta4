<%--
	@(#)FileVersion: 814.000.014
	@(#)FileDescription: argumentos genéricos de las listas
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2017
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP4
	@(#)InternalName: shco_gen_list_arg.jsp
	@(#)Date: 16/01/2017
--%>



<%@ include file="/m4trans/shco_g0/0-shco_gen_arg.jsp" %><%

String zvent = getRequestValueBlack(request, "zvent", "0");		
String zOrdenCampo =  getRequestValueBlack(request, "zOrdenCampo", "");
String zOrden = getRequestValueBlack(request, "zOrden", "");

// Para los filtros
String zf1id = getRequestValueBlack(request, "zf1id", "");
String zf1val = getRequestValueBlack(request, "zf1val", "");
String zf1txt = getRequestValueBlack(request, "zf1txt", "");
String zf2id = getRequestValueBlack(request, "zf2id", "");
String zf2val = getRequestValueBlack(request, "zf2val", "");
String zf2txt = getRequestValueBlack(request, "zf2txt", "");
String zf3id = getRequestValueBlack(request, "zf3id", "");
String zf4id = getRequestValueBlack(request, "zf4id", "");

String zv1 = getRequestValueBlack(request, "zv1", "");
String zv2 = getRequestValueBlack(request, "zv2", "");

// Parámetros del filtro dinámico
String zIdSentenceItem = "ARG_ID_SENTENCE";
String zApiSqlItem= "ARG_API_SQL";
String zFilterLangItem = "ARG_LANGUAGE";
String zIdScenarioItem = "ARG_ID_SCENARIO";

String zidsentence = getRequestValueBlack(request, zIdSentenceItem, "");
String zapisql = getRequestValueBlack(request,zApiSqlItem, "");
String znatlanguage = getRequestValueBlack(request, zFilterLangItem, "");
String zidscenario = getRequestValueBlack(request,zIdScenarioItem, "");

// Estilos aplicables a los div que contienen el filtro sencillo y el filtro avanzado
String zdinfilterstyle;
String zeasyfilterstyle;

// flag que indica si hay que mostrar el filtro avanzado o no (el sencillo)
String zisdynfilter = getRequestValueBlack(request, "zisdynfilter", "");
if ((zisdynfilter==null)||(zisdynfilter.equals(""))){zisdynfilter = "";}

if ("1".equals(zisdynfilter)){
   zdinfilterstyle = "";
   zeasyfilterstyle = "display=none";
}else{
   zeasyfilterstyle = "";
   zdinfilterstyle = "display=none";
}

//Si zpag está relleno, significa que a la lista se le llama en modo carril
// ya desde la lista se va a navegar a zpag. Para este caso hay que mantener
// los últimos datos cargados en el Meta4Object.
String zpagaux = getRequestValueBlack(request, "zpag", "");
//Bugfixed : 114147 
if (!((zpagaux==null)||("".equals(zpagaux))||("0".equals(zpagaux)))){
   if ("NORMAL".equals(ztipocarga)){
      ztipocarga ="KEEPDATA";
   }
}

//Meter más campos para posibles filtros extra
String zfilter_1 =  getRequestValueBlack(request, "zfilter_1", "");
String zfilter_2 =  getRequestValueBlack(request, "zfilter_2", "");

%>

