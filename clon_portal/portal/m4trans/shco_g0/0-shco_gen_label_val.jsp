<%--
	@(#)FileVersion: 812.000.021
	@(#)FileDescription: variables con los valores de las etiquetas genéricas
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: shco_gen_label_val.jsp
	@(#)Date: 21/02/2002
--%>
<%
if (Tran_shco_g0 == null){
   Tran_shco_g0 = new com.meta4.redirect.M4PropertiesRedirect();
   Tran_shco_g0.load(application.getResourceAsStream(zTranslationsPath + "shco_g0_" +zlanguser + ".properties"));
}
if ( Tran_shco_g0.isEmpty() ){
   Tran_shco_g0 = new com.meta4.redirect.M4PropertiesRedirect();
   Tran_shco_g0.load(application.getResourceAsStream(zTranslationsPath + "shco_g0_" +zlanguser + ".properties"));
   }
String zSHCOLBCLEAN_val = new String(Tran_shco_g0.getProperty("Label.lbClean"));
String zSHCOLBDEL_val = new String(Tran_shco_g0.getProperty("Label.lbDel"));
String zSHCOLBEDIT_val = new String(Tran_shco_g0.getProperty("Label.lbEdit"));
String zSHCOLBINSERT_val = new String(Tran_shco_g0.getProperty("Label.lbInsert"));
String zSHCOLBLIST_val = new String(Tran_shco_g0.getProperty("Label.lbList"));
String zSHCOLBNEXT_val = new String(Tran_shco_g0.getProperty("Label.lbNext"));
String zSHCOLBORD_val = new String(Tran_shco_g0.getProperty("Label.lbOrd"));
String zSHCOLBPREV_val = new String(Tran_shco_g0.getProperty("Label.lbPrev"));
String zSHCOLBREFRESH_val = new String(Tran_shco_g0.getProperty("Label.lbRefresh"));
String zSHCOLBSEND_val = new String(Tran_shco_g0.getProperty("Label.lbSend"));
String zSHCOLBWRITE_val = new String(Tran_shco_g0.getProperty("Label.lbWrite"));
String zSHCOLBNOHELP_val = new String(Tran_shco_g0.getProperty("Label.lbNoHelp"));
String zSHCOLBHELP_val = new String(Tran_shco_g0.getProperty("Label.lbHelp"));
String zSHCOLBCAB_val = new String(Tran_shco_g0.getProperty("Label.lbCab"));
String zSHCOLBTITERROR_val = new String(Tran_shco_g0.getProperty("Label.lbTitError"));
String zSHCOLBBACK_val = new String(Tran_shco_g0.getProperty("Label.lbBack"));
String zSHCO_LB_REM_val = new String(Tran_shco_g0.getProperty("Label.lbRem"));

%>

