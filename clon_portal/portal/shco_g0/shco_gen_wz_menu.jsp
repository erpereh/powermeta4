<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_wz_menu.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%
request.setAttribute("zIndexWizardREQ",Integer.toString(zIndexWizard));
request.setAttribute("znodocomREQ",znodocom);
request.setAttribute("zm4objectREQ",zm4object);
request.setAttribute("zcssuserREQ",zcssuser);

%>
<jsp:include page="/shco_g0/shco_gen_wz_menu_inc.jsp" flush="false" />
<%
int countStep = Integer.parseInt((String)request.getAttribute("countStepREQ"));
String links[] = new String[countStep];
links = (String[])request.getAttribute("linksREQ");
String loadtype[] = new String[countStep];
loadtype = (String[])request.getAttribute("loadtypeREQ");
String steps[] = new String[countStep];
steps = (String[])request.getAttribute("stepsREQ");
String path = (String)request.getAttribute("pathREQ");
if ((path==null)||(path.equals(""))){path = "";}%>

<%
int count_butt  = 2;
int zRistError = Integer.parseInt((String)request.getAttribute("zRistErrorREQ"));
String numStep  = (String)request.getAttribute("numStepREQ");
String info_steps = (String)request.getAttribute("info_stepsREQ");
String obligatory_steps = (String)request.getAttribute("obligatory_stepsREQ");
String temp_table = (String)request.getAttribute("temp_tableREQ");
String stt_buttons = (String)request.getAttribute("stt_buttonsREQ");
String nodesvis = (String)request.getAttribute("nodesvisREQ");
String jsppath = (String)request.getAttribute("jsppathREQ");
String aux=(String)request.getAttribute("auxREQ");
String strloadtyp=(String)request.getAttribute("strloadtypREQ");
String strregtype=(String)request.getAttribute("strregtypeREQ");
String retpage = (String)request.getAttribute("retpageREQ");
int aceptar = Integer.parseInt((String)request.getAttribute("aceptarREQ"));
int cancelar = Integer.parseInt((String)request.getAttribute("cancelarREQ"));
int enabled = Integer.parseInt((String)request.getAttribute("enabledREQ"));
int state_step = Integer.parseInt((String)request.getAttribute("state_stepREQ"));
int numinf  = Integer.parseInt((String)request.getAttribute("numinfREQ"));
int tmp = Integer.parseInt((String)request.getAttribute("tmpREQ"));
String titles[] = new String[countStep];
titles = (String[])request.getAttribute("titlesREQ");
String obligatory_step[] = new String[countStep];
obligatory_step = (String[])request.getAttribute("obligatory_stepREQ");
String typereg[] = new String[countStep];
typereg = (String[])request.getAttribute("typeregREQ");
String butts[] = new String[count_butt];
butts = (String[])request.getAttribute("buttsREQ");
String butts_link[] = new String[count_butt];
butts_link = (String[])request.getAttribute("butts_linkREQ");
String alttitle[] = new String[count_butt];
alttitle = (String[])request.getAttribute("alttitleREQ");
String buttsnav[] = new String[3];   
buttsnav = (String[])request.getAttribute("buttsnavREQ");
String buttslnk[] = new String[3];   
buttslnk = (String[])request.getAttribute("buttslnkREQ");
String buttsalt[] = new String[3]; 
buttsalt = (String[])request.getAttribute("buttsaltREQ");
String buttload[] = new String[3];   
buttload = (String[])request.getAttribute("buttloadREQ");
%>



