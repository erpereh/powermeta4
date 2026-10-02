<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<!-- GTA view and solve anomalies for employees in MSS: mss_g4_gta_view_alerts.jsp -->	
<!-- Librerias Java. Obligatorio -->
<head><%@ page import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.savparams.*" %>
      <%@ page import="com.meta4.valuetables.basic.*, com.meta4.utilities.*,com.meta4.configuration.*,com.meta4.taglib.util.*" %>
<!-- Hoja de Estilo general. Obligatorio-->
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<!-- Librerias JavaScript. Obligatorio -->
<script type="text/javaScript">var sformatofechas;</script>
<%
	M4SessionCl zsesionTAl = M4Context.getM4SessionCl(request);
	String sLangAl = zsesionTAl.getBagEntries("lang");

	if ((sLangAl==null)||(sLangAl.equals(""))){sLangAl="fr";
	} else {
		if (sLangAl.equals("in")) { sLangAl="en";
		} else if (sLangAl.equals("es")) {sLangAl="es";
		} else if (sLangAl.equals("fr")) {sLangAl="fr";
		} else if (sLangAl.equals("pt")) {sLangAl="pt";
		}
	} 
%><script type="text/javascript" src="/translations/m4err_ess_<%=sLangAl%>.js"></script>
<script type="text/javascript" src="/library/m4gen_excep.js"></script>

<script type="text/javascript" src="/libreria/mootools-1.2.4.2-bis.js"></script> <%  //  The version 1.3 has a bug http://weblog.scanyours.com/2010/10/29/howto-backwards-compatibility-for-request-json-in-mootools-1-3/%>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/funciones_filter.js"></script>
<script type="text/javascript" src="/libreria/sco_incidences_link.js"></script>
<script type="text/javascript" src="/library/m4gen.js"></script>
<script type="text/javascript" src="/libreria/meta4ajax.js"></script>
<script type="text/javascript" src="/libreria/meta4list.js"></script>

<script type="text/javascript" src="/libreria/raphael-min.js"></script>
<script type="text/javascript" src="/libreria/g.raphael-min.js"></script>
<script type="text/javascript" src="/libreria/g.bar-min.bis.js"></script>

<!-- Style for this page: modal window-->
<style type="text/css"> 
.black_overlay{	display: none;	position: absolute;	top: 0%;	left: 0%;	width: 100%;	height: 100%;
	background-color: black;	z-index:1001;	-moz-opacity: 0.4;	opacity:.40;	filter: alpha(opacity=40);
}
.white_content{ display: none;	position: absolute;	top: 10%;	left: 25%;	
	background-color: white;	z-index:1002;	overflow: auto;		padding: 5px;	border: 5px solid #365a7c;
}
</style>

<!-- Recuperacion de parametros. -->
<!-- estado:	Determina la barra de localizacion. -->
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
if ((estado==null)||(estado.equals(""))){estado="0";}
%>
<%@ include file="../../shco_g0/shco_gen_formats.jsp" %>
<!-- Encabezado y barra izquierda -->
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>

<!-- Meta4Object Load -->
<%	//Variables to load the M4O

	String sChannelID   	= "SCO_GTA_VIEW_ALERTS"; 
	String sLoadMainMethod 	= sChannelID + "!SHCO_GN_ROOT.SSM_LOAD_MAIN";
	String sLabelNode 		= "SHCO_GN_LABEL";
	String sOutDefLabel		= sChannelID + "!" + sLabelNode + "[*]";	
	String sLogNode 		= "SHCO_GN_LOGS";
	String sOutDefLog		= sChannelID + "!" + sLogNode + "[*]";	
	String sRootNode 		= "SHCO_GN_ROOT";
	String sOutDefRoot		= sChannelID + "!" + sRootNode + "[*]";		
	
	String sWUNode 			= "SSM_INC_VAL_WU";
	String sOutDefWU		= sChannelID + "!" + sWUNode + "[*]";			
	String sComunWU 		= sWUNode + ":" + sChannelID + "!" + sWUNode + "[&VAR.m4lix]" + ".";
	String sIdWu 			= sComunWU + "STD_ID_WORK_UNIT";
	String sNmWu 			= sComunWU + "STD_N_WORK_UNIT";	

	String sMainNode 		= "SCO_GTA_VIEW_ALERTS";
	String sMainDefRoot		= sChannelID + "!" + sMainNode + "[*]";	
	String sComunMain 		= sMainNode + ":" + sChannelID + "!" + sMainNode + "[&VAR.m4lix]" + ".";
	String sComunMainNode	= sMainNode + ":" + sChannelID + "!" + sMainNode + "[0]" + ".";	
	String sDtStart 		= sComunMainNode + "DT_START_P";
	String sDtEnd	 		= sComunMainNode + "DT_END_P";	
	String sReloadAfterChg 	= sComunMainNode + "SCO_RELOAD_AFTER_CHG";		
	String sIdIncToCreate 	= sComunMainNode + "SCO_ID_INCIDENCE_TO_CREATE";	

	String sViewNmEmpl= sComunMainNode + "SCO_VIEW_GB_NAME";
	String sViewComment= sComunMainNode + "SCO_VIEW_COMMENT";
	String sViewIdRefMod= sComunMainNode + "SCO_VIEW_ID_REF_MOD";
	String sViewIdWeekModel= sComunMainNode + "SCO_VIEW_ID_WEEK_MDL";
	String sViewIdDayType= sComunMainNode + "SCO_VIEW_ID_DAY_TYPE";
	String sViewTheorTS= sComunMainNode + "SCO_VIEW_TRANSLATED_TIMESLOT_P";
	String sViewWorkTheo= sComunMainNode + "SCO_VIEW_WORK_THEO";
	String sViewAbsCal= sComunMainNode + "SCO_VIEW_ABS_CAL";
	String sViewAbs= sComunMainNode + "SCO_VIEW_ABS";
	String sViewSup= sComunMainNode + "SCO_VIEW_SUP";
	String sViewGrosClock= sComunMainNode + "SCO_VIEW_GROSS_CLOCK_DEC_HOURS";
	String sViewClockTS= sComunMainNode + "SCO_VIEW_TRANS_TS_GROSS_CLOCK";
	String sViewReal= sComunMainNode + "SCO_VIEW_REAL_WORK";
	String sViewRealTS= sComunMainNode + "SCO_VIEW_TRANS_TS_REAL";
	String sViewIDAlert= sComunMainNode + "SCO_VIEW_ID_ALERT";
	String sViewNMProp= sComunMainNode + "SCO_VIEW_NM_PROPERTY";
	String sViewHide= sComunMainNode + "SCO_VIEW_HIDE";
	String sViewCommentAlert= sComunMainNode + "SCO_VIEW_COMMENT_ALERT";
	String sViewHasRequestInc= sComunMainNode + "SCO_VIEW_HAS_REQUEST_INCIDENCE";
	String sViewAlertClasification= sComunMainNode + "SCO_VIEW_ID_DISPLAY_CLASIFICAT";

	String sListLevelColor= sComunMainNode + "SCO_LIST_LEVEL_COLOR";	
	String sListLevelNames= sComunMainNode + "SCO_LIST_LEVEL_NM";	
	String sLblChar= sComunMainNode + "SCO_LBL_CHART_1";	
	
	String sAlSevLevelNode 			= "SSM_X_VE_AL_SEV_LEVEL";
	String sOutDefAlSevLevel		= sChannelID + "!" + sAlSevLevelNode + "[*]";			
	String sComunAlSevLevel 		= sAlSevLevelNode + ":" + sChannelID + "!" + sAlSevLevelNode + "[&VAR.m4lix]" + ".";
	String sIdAlSevLevel 			= sComunAlSevLevel + "SCO_ID_ALERT_SEVERITY_LEVEL";
	String sNmAlSevLevel 			= sComunAlSevLevel + "SCO_NM_ALERT_SEVERITY_LEVEL";		
	
	String incidenceEncripted = "";

	%>
<m4:startpage m4task="<%=sChannelID%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=sChannelID%>" m4name="<%=sChannelID%>"/>
<m4:exec m4method="<%=sLoadMainMethod%>"></m4:exec>	
<m4:outputdef m4alias="<%=sLabelNode%>"><m4:param name="m4name0" value="<%=sOutDefLabel%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=sLogNode%>">  <m4:param name="m4name0" value="<%=sOutDefLog%>"/>  </m4:outputdef>
<m4:outputdef m4alias="<%=sRootNode%>">  <m4:param name="m4name0" value="<%=sOutDefRoot%>"/>  </m4:outputdef>
<m4:outputdef m4alias="<%=sMainNode%>">  <m4:param name="m4name0" value="<%=sMainDefRoot%>"/>  </m4:outputdef>
<m4:outputdef m4alias="<%=sWUNode%>">  <m4:param name="m4name0" value="<%=sOutDefWU%>"/>  </m4:outputdef>
<m4:outputdef m4alias="<%=sAlSevLevelNode%>">  <m4:param name="m4name0" value="<%=sOutDefAlSevLevel%>"/>  </m4:outputdef>
<m4:endjob/>
<%

	//we get the logs, labels and counter in java format
    M4Operations Oper = new M4Operations(request);
    AbstractFormater oFmt = new DefaultFormater(request); // new SimpleFormater(null, null, null); //
    OperationsIterator cLogs = new OperationsIterator(Oper, oFmt, sLogNode, sChannelID, sLogNode);
    OperationsIterator cLabels = new OperationsIterator(Oper, oFmt, sLabelNode, sChannelID, sLabelNode);
    OperationsIterator cRoot = new OperationsIterator(Oper, oFmt, sRootNode, sChannelID, sRootNode);	
    OperationsIterator cMain = new OperationsIterator(Oper, oFmt, sMainNode, sChannelID, sMainNode);	
    OperationsData oLabelValues = cLabels.get();
    OperationsData oRootValues = cRoot.get();
	OperationsData oMainValues = cMain.get();
		
    int nCountWU = Oper.getCount(sWUNode,sChannelID,sWUNode);
	String	sCountWU = String.valueOf(nCountWU);	
	
    int nCountAlSevLevel = Oper.getCount(sAlSevLevelNode,sChannelID,sAlSevLevelNode);
	String	sCountAlSevLevel = String.valueOf(nCountAlSevLevel);		
		
	//Name of the responsability type and WU visibility option
	String sRespTpNm = Oper.getItem(sRootNode,sChannelID,sRootNode,"0","SSM_RESP_TP_NAME");
	String sWuVisibility = Oper.getItem(sRootNode,sChannelID,sRootNode,"0","SSM_VISIBILITY_BY_WU");
	
	//Constant that mean that we load all the WU
	String sAllWU = "__ALL__";
	
	//Translations
	String zlanguser = zlanguser = zsesion.getBagEntries("lang");
	if ((zlanguser==null)||(zlanguser.equals(""))){zlanguser = "es";}
	if (zlanguser.equals("in")) { zlanguser="en";}
	java.util.Properties Tran_mss_g4_inc_val = new Properties();
	Tran_mss_g4_inc_val.load(application.getResourceAsStream("/translations/mss_g4_gta_2_"+zlanguser+".properties"));
	
	
	//Encript the type constants for the details screen
	String sTypeAll   = "MSS_DET_ALL";
	String sTypeTheo  = "MSS_DET_THEO";
	String sTypeClock = "MSS_DET_CLOCK";
	sTypeAll	= com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sTypeAll);
	sTypeTheo	= com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sTypeTheo);
	sTypeClock	= com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "incidencePlan", sTypeClock);
	
	
	
%>
<!-- End of: Meta4Object Load -->

<!-- javascript functions -->
<script type="text/javascript">

	//global variables
	var numRegInWindow = 20;
	var sNumTotCurReg = 0;

	
	//configuration
	var sReloadAfterChg 	= "<m4:item m4name="<%=sReloadAfterChg%>"/>";

	<m4:item m4name="<%=sIdIncToCreate%>"  var="incidenceEncripted" />
	<%
		if ((incidenceEncripted==null)){incidenceEncripted="";}
		if (!incidenceEncripted.equals("")) {
		incidenceEncripted = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request,"incidencePlan", incidenceEncripted);
		  }
	%>
	var sIdIncToCreate 		= "<%=incidenceEncripted%>";		
	
	var sViewNmEmpl			= "<m4:item m4name="<%=sViewNmEmpl%>"/>";
	var sViewComment		= "<m4:item m4name="<%=sViewComment%>"/>";
	var sViewIdRefMod		= "<m4:item m4name="<%=sViewIdRefMod%>"/>";
	var sViewIdWeekModel	= "<m4:item m4name="<%=sViewIdWeekModel%>"/>";
	var sViewIdDayType		= "<m4:item m4name="<%=sViewIdDayType%>"/>";
	var sViewTheorTS		= "<m4:item m4name="<%=sViewTheorTS%>"/>";
	var sViewWorkTheo		= "<m4:item m4name="<%=sViewWorkTheo%>"/>";
	var sViewAbsCal			= "<m4:item m4name="<%=sViewAbsCal%>"/>";
	var sViewAbs			= "<m4:item m4name="<%=sViewAbs%>"/>";
	var sViewSup			= "<m4:item m4name="<%=sViewSup%>"/>";
	var sViewGrosClock		= "<m4:item m4name="<%=sViewGrosClock%>"/>";
	var sViewClockTS		= "<m4:item m4name="<%=sViewClockTS%>"/>";
	var sViewReal			= "<m4:item m4name="<%=sViewReal%>"/>";
	var sViewRealTS			= "<m4:item m4name="<%=sViewRealTS%>"/>";
	var sViewIDAlert		= "<m4:item m4name="<%=sViewIDAlert%>"/>";
	var sViewNMProp			= "<m4:item m4name="<%=sViewNMProp%>"/>";
	var sViewHide			= "<m4:item m4name="<%=sViewHide%>"/>";
	var sViewCommentAlert	= "<m4:item m4name="<%=sViewCommentAlert%>"/>";
	var sViewHasRequestInc	= "<m4:item m4name="<%=sViewHasRequestInc%>"/>";
	var sViewAlertClasification	= "<m4:item m4name="<%=sViewAlertClasification%>"/>";
	
	var aRowsLoaded = new Array(); 
	var mypageInitialWidth = 0;
	
	//to hidde/show
	var showMode = 'table-cell';
	//var showMode = 'block';
	if (document.all) showMode='block';	 // However, IE5 at least does not render table cells correctly using the style 'table-cell', but does when the style 'block' is used, so handle this
	
	//number of register selected
	var nNumRegSelected = 0;

	//autocompletion lists
	window.addEvent('domready', function () {

		var oListEmpl = new M4List({//Initialize Employee list
			meta4Object: 'SRCO_PA_TR_HR_PERIOD',
			nodeQBF: 'SRCO_PA_QBF_HR_PERIOD',
			nodeTR: 'SRCO_PA_TR_HR_PERIOD',
			listMethod: 'LIST',
			eventAttributesChanged: 'onChangedEmpl',
			secondaryTI: '',
			appStart: 'dDtStart',
			appEnd: 'dDtEnd',					
			listMethodArguments: 'ARG_STD_ID_HR,ARG_STD_OR_HR_PERIOD',
			resultItems: 'SCO_GB_NAME,STD_ID_HR,STD_OR_HR_PERIOD',
			mainFilterElement: 'SRCO_PA_QBF_HR_PERIOD.SCO_GB_NAME',
			secondaryFilterElements: undefined,
			maxRecords: 5,
			labelHelp: "<%=Tran_mss_g4_inc_val.getProperty("list.HelpEmpl")%>",
			labelLoading: "<%=Tran_mss_g4_inc_val.getProperty("list.Loading")%>",
			labelAndMore: "AND MORE",
			labelNoMatch: "<%=Tran_mss_g4_inc_val.getProperty("list.NoMatchEmpl")%>"
		});
	
	  var txtIdEMPLOYEE_filterPrev = "";
	  $('SRCO_PA_QBF_HR_PERIOD.SCO_GB_NAME').addEvent(
	   'onChangedEmpl', 
		 function() {
			$('txtIdEMPLOYEE_filter').set('value',this.get('m4STD_ID_HR'));
			$('txtOrEMPLOYEE_filter').set('value',this.get('m4STD_OR_HR_PERIOD')); 
			if ($('txtIdEMPLOYEE_filter').value!="" || txtIdEMPLOYEE_filterPrev != $('txtIdEMPLOYEE_filter').value) {createChart();}
			txtIdEMPLOYEE_filterPrev = $('txtIdEMPLOYEE_filter').value;			
		 }
	  );		
	  
		var oListAlert = new M4List({//Initialize Alert list
			meta4Object: 'SCO_GTA_MT_VE_PROP_4_ALERTS',
			nodeQBF: 'SCO_GTA_QBF_VE_PROP_4_ALERTS',
			nodeTR: 'SCO_GTA_MT_VE_PROP_4_ALERTS',
			listMethod: 'LIST',
			eventAttributesChanged: 'onChangedAlert',
			secondaryTI: '',
			listMethodArguments: 'ARG_SCO_ID_PROPERTY',
			resultItems: 'SCO_NM_PROPERTY,SCO_ID_PROPERTY',
			mainFilterElement: 'SCO_GTA_QBF_VE_PROP_4_ALERTS.SCO_NM_PROPERTY',
			secondaryFilterElements: undefined,
			maxRecords: 5,
			labelHelp: "<%=Tran_mss_g4_inc_val.getProperty("list.HelpAlert")%>",
			labelLoading: "<%=Tran_mss_g4_inc_val.getProperty("list.Loading")%>",
			labelAndMore: "AND MORE",
			labelNoMatch: "<%=Tran_mss_g4_inc_val.getProperty("list.NoMatchAlert")%>"
		});
	
	  var txtID_ALERT_filterPrev = "";
	  $('SCO_GTA_QBF_VE_PROP_4_ALERTS.SCO_NM_PROPERTY').addEvent(
	   'onChangedAlert', 
		 function() {
			$('txtID_ALERT_filter').set('value',this.get('m4SCO_ID_PROPERTY'));
			if ($('txtID_ALERT_filter').value!="" || txtID_ALERT_filterPrev != $('txtID_ALERT_filter').value) {createChart();}		
			txtID_ALERT_filterPrev = $('txtID_ALERT_filter').value;			
		 }
	  );		  

		var oListAlertClassif = new M4List({//Initialize Alert Classification list
			meta4Object: 'SRCO_TK_MT_VE_DISPLAY_C',
			nodeQBF: 'SRCO_TK_QBF_VE_DISPLAY_C',
			nodeTR: 'SRCO_TK_MT_VE_DISPLAY_C',
			listMethod: 'LIST',
			eventAttributesChanged: 'onChangedAlertClassif',
			secondaryTI: '',
			listMethodArguments: 'ARG_SCO_ID_DISPLAY_CLASIFICATI',
			resultItems: 'SCO_NM_DISPLAY_DLASIFICATION,SCO_ID_DISPLAY_CLASIFICATION',
			mainFilterElement: 'SRCO_TK_QBF_VE_DISPLAY_C.SCO_NM_DISPLAY_DLASIFICATION',
			secondaryFilterElements: undefined,
			maxRecords: 5,
			labelHelp: "<%=Tran_mss_g4_inc_val.getProperty("list.HelpAlertClassif")%>",
			labelLoading: "<%=Tran_mss_g4_inc_val.getProperty("list.Loading")%>",
			labelAndMore: "AND MORE",
			labelNoMatch: "<%=Tran_mss_g4_inc_val.getProperty("list.NoMatchAlertClassif")%>"
		});
	
	  var txtID_DISPLAY_CLASIFICATION_filterPrev = "";
	  $('SRCO_TK_QBF_VE_DISPLAY_C.SCO_NM_DISPLAY_DLASIFICATION').addEvent(
	   'onChangedAlertClassif', 
		 function() {
			$('txtID_DISPLAY_CLASIFICATION_filter').set('value',this.get('m4SCO_ID_DISPLAY_CLASIFICATION'));
			if ($('txtID_DISPLAY_CLASIFICATION_filter').value!="" || txtID_DISPLAY_CLASIFICATION_filterPrev != $('txtID_DISPLAY_CLASIFICATION_filter').value) {createChart();}		
			txtID_DISPLAY_CLASIFICATION_filterPrev = $('txtID_DISPLAY_CLASIFICATION_filter').value;						
		 }
	  );		  


	  
  });		

	var sChartNames = "<m4:item m4name="<%=sListLevelColor%>"/>", sChartColors ="<m4:item m4name="<%=sListLevelNames%>"/>";
	var aChartData = new Array(), aChartNames = new  Array(), aChartColors = new  Array(), sChartText = "<m4:item m4name="<%=sLblChar%>"/>", r;
	aChartColors = sChartNames.split(',');
	aChartNames = sChartColors.split(',');

	function createChart(){
	
		//ajax call
		jsonActions("6","","");
		
	}
	
	function _createChart(){
		//called when the ajax call returns the data for the chart
		
		$('divChar').innerHTML = "";
		if(r){ 
			r.remove(); 
		}		
		r = Raphael("divChar");
				
		var iChartWith = 280, iChartHeight = 150, iXpos = 20,
			fin = function () {
                //this.flag = r.popup(this.bar.x, this.bar.y, aChartNames[aChartColors.indexOf(this.bar.attrs.fill)]+' : '+this.bar.value || "0").attr(txtattrFlag).insertBefore(this);
            },
			fout = function () {
                //this.flag.animate({opacity: 0}, 300, function () {this.remove();});
            }
			txtattrFlag = { font: '10px Verdana, sans-serif'},
			txtattr = { font: '10px Verdana, sans-serif', fill: '#235298'},
			txtattrTotal = { font: '11px Verdana, sans-serif', fill: '#235298', "font-weight": 800},
		//iXpos = $('btSentAnchor').getPosition().x-(iCharWith/2); //centered with OK button
		iXpos = $('selIdWu').getPosition().x; //aligned with text boxes
		//Chart
		r.barchart(iXpos, 10, iChartWith, iChartHeight, aChartData,{colors:aChartColors}).hover(fin, fout).label(aChartNames,true,txtattr).label(aChartData,false,txtattr);

		//total count
		var nTotCount = 0;
		for (var i=0;i<aChartData.length;i++)
		{ 
			nTotCount += parseInt(aChartData[i]);
		}
				
		//Text
		var sChartText1 = sChartText.substr(0,sChartText.indexOf('.')+1);
		r.text(iXpos+(iChartWith/2), iChartHeight+30, sChartText1).attr(txtattr);	
		var sChartText2 = sChartText.substr(sChartText.indexOf('.')+1,sChartText.length);
		sChartText2 += nTotCount;
		r.text(iXpos+(iChartWith/2), iChartHeight+50, sChartText2).attr(txtattrTotal);	
		//r.text(iXpos+(iChartWith/2), iChartHeight+10, sChartText+nTotCount).attr(txtattr);	
		
		//resize canvas
		r.setSize(2*iXpos+2*iChartWith + 30, iChartHeight + 70);

		//resize page
		if (parent.$('pageBodyFrame')){
			//var bOldNullHeight = parent.$('pageBodyFrame').contentWindow.bNullHeight;
			parent.$('pageBodyFrame').contentWindow.bNullHeight = true;
			parent.$('pageBodyFrame').contentWindow.fireEvent('resize');
		
			//parent.$('pageBodyFrame').contentWindow.bNullHeight = bOldNullHeight;
		}
		
		//Spinner position: over the chart
		$('imgCharSpinner').setPosition({x: iXpos+(iChartWith/2), y: $('divChar').getPosition().y+iChartHeight/2});

	
	}	
	
	
	function init(){
		//executed when load the page
				
		hideShowColumns();
		enableDisableRadioFilter();
		
		var nCountWU = <%=sCountWU%>; 
		//If there are no WU, we disabled all
		if (nCountWU == 0){
		
			alert("<%=Tran_mss_g4_inc_val.getProperty("desc.noWU")%>");
			$('btSentAnchor').set('href', 'javascript:');
			$('btSentImg').set('style', 'opacity:0.4;filter:alpha(opacity=40)');
		}
		
		$('dDtStart').focus();

		if (parent.$('pageBodyFrame')){
			mypageInitialWidth = parent.$('pageBodyFrame').contentWindow.document.body.scrollWidth;
		}
	}	
	
	function enableDisableRadioFilter(){
		//enable or disable the filter fields depending in the radio buttons
		if ($('rALERT_TYPE1').checked) {
			// disable anomalie list, levels combos and classificacion list
			disableAnomalieList();		
			disableLevelsAndClassif();
		} else if ($('rALERT_TYPE2').checked){
			// enable anomalie list, disable levels combos and classificacion list
			enableAnomalieList();
			disableLevelsAndClassif();
		} else {
			// disable anomalie list, enable levels combos and classificacion list
			disableAnomalieList();
			enableLevelsAndClassif();
		}		
		createChart();
	}	
	
	function clickselAlSevLevel1(){
		//when we choose one value in the first Level select, we must modify the second select to be able only to choose greater or equal levels 
		
		//first, we copie the current value en 1 and teh reater levels to the 2
		var j=0;
		for(var i=$('selAlSevLevel1').options.selectedIndex; i<$('selAlSevLevel1').options.length; i++) {
			$('selAlSevLevel2').options[j] = new Option($('selAlSevLevel1').options[i].text,$('selAlSevLevel1').options[i].value);
			j++;
		}
		//second, we delete the rest of the values en 2
		for (var i=$('selAlSevLevel2').length-1;i>=j;i--){
			$('selAlSevLevel2').remove(i);
		}
		//an last, we select the greatest in 2
		$('selAlSevLevel2').selectedIndex = $('selAlSevLevel2').options.length-1;
		
		createChart();
	}

	function enableLevelsAndClassif(){	
		$('selAlSevLevel1').set('disabled','');
		$('selAlSevLevel2').set('disabled','');
		$('SRCO_TK_QBF_VE_DISPLAY_C.SCO_NM_DISPLAY_DLASIFICATION').set('class', 'fuenteformulario');
		$('SRCO_TK_QBF_VE_DISPLAY_C.SCO_NM_DISPLAY_DLASIFICATION').set('readonly','');
		$('SRCO_TK_QBF_VE_DISPLAY_C.SCO_NM_DISPLAY_DLASIFICATION').set('disabled','');	
	}
	function disableLevelsAndClassif(){	
		$('selAlSevLevel1').set('disabled','disabled');
		$('selAlSevLevel1').value = "";
		$('selAlSevLevel2').set('disabled','disabled');
		$('selAlSevLevel2').value = "";
		$('SRCO_TK_QBF_VE_DISPLAY_C.SCO_NM_DISPLAY_DLASIFICATION').set('class', 'fuentecampo');
		$('SRCO_TK_QBF_VE_DISPLAY_C.SCO_NM_DISPLAY_DLASIFICATION').set('readonly','readonly');
		$('SRCO_TK_QBF_VE_DISPLAY_C.SCO_NM_DISPLAY_DLASIFICATION').set('disabled','disabled');	
		$('SRCO_TK_QBF_VE_DISPLAY_C.SCO_NM_DISPLAY_DLASIFICATION').value = "";
		$('txtID_DISPLAY_CLASIFICATION_filter').value = "";		
	}	
	function enableAnomalieList(){	
		$('SCO_GTA_QBF_VE_PROP_4_ALERTS.SCO_NM_PROPERTY').set('class', 'fuenteformulario');
		$('SCO_GTA_QBF_VE_PROP_4_ALERTS.SCO_NM_PROPERTY').set('readonly','');
		$('SCO_GTA_QBF_VE_PROP_4_ALERTS.SCO_NM_PROPERTY').set('disabled','');		
	}
	function disableAnomalieList(){	
		$('SCO_GTA_QBF_VE_PROP_4_ALERTS.SCO_NM_PROPERTY').set('class', 'fuentecampo');
		$('SCO_GTA_QBF_VE_PROP_4_ALERTS.SCO_NM_PROPERTY').set('readonly','readonly');
		$('SCO_GTA_QBF_VE_PROP_4_ALERTS.SCO_NM_PROPERTY').set('disabled','disabled');
		$('SCO_GTA_QBF_VE_PROP_4_ALERTS.SCO_NM_PROPERTY').value = "";
		$('txtID_ALERT_filter').value = "";		
	}	
	
	
	function listClassif(formname, sufixfield){
		//to list the alert
		
		//the list: with filter by name if is filled and by dates
		var sListURL = 'mss_generico/shco_gta_list_ve_display_clasification.jsp?ztipocarga='+ genFilterString(new Array("SCO_NM_DISPLAY_DLASIFICATION"),new Array("400"),new Array(m4valor(formname, 'txtDISPLAY_CLASIFICATION_'+sufixfield, '', 'get')));
		//the function that we want to execute after of the user choose a value of the list
		var callBackFunction = '';		
		//the call
		m4filtrocallback(sListURL,callBackFunction,'txtID_DISPLAY_CLASIFICATION_'+sufixfield,'txtDISPLAY_CLASIFICATION_'+sufixfield);		
	}	

	function valClassif(formname, sufixfield, bCallList,sNewValue,bFromKey){
		var sCallBackFunction='';
		var sListFunction = (bCallList)?"listClassif('"+formname+"','"+sufixfield+"')":null;
		valGeneric('mss_generico/shco_json_ve_display_clasification.jsp',sListFunction,'NombreFormulario',new Array('txtDISPLAY_CLASIFICATION_'+sufixfield), new Array('txtID_DISPLAY_CLASIFICATION_'+sufixfield,'txtDISPLAY_CLASIFICATION_'+sufixfield),1,sCallBackFunction,"",bFromKey);
	}	

	function viewDetails(nType,sNumCurReg){
		//link to the details screen

		//eval("var sIdHR = $('hSTD_ID_HR_"+sNumCurReg+"').value");	
		eval("var sIdHR = $('hSTD_ID_HR_hinc_"+sNumCurReg+"').value");	
		eval("var sOrPer = $('hSTD_OR_PER_hinc_"+sNumCurReg+"').value");	
		eval("var sDateUF = $('hDT_START_" +sNumCurReg+"').value");
		eval("var sDateFF = $('hDT_START_Fix_" +sNumCurReg+"').value");

		var sType = "";
		if (nType==1) {sType = "<%=sTypeAll%>";} else if (nType==2) {sType = "<%=sTypeTheo%>";} else if (nType==3) {sType = "<%=sTypeClock%>";}
		
		//window.open('/servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_day_details_redirection.jsp?sIdHr='+sIdHR+'&sOrPer='+sOrPer+'&sDate='+sDateFF+'&sType='+sType,'popUp','toolbar=no,location=no,status=yes,directories=no,menubar=no,scrollbars=yes,resizable=yes,width=830,height=600,top='+(screen.height-600)/2.5+',left='+(screen.width-830)/2.5);		
		window.open('/servlet/CheckSecurity/JSP/sse_generico/sse_generico_gta_manager_day_details_redirection.jsp?sIdHr='+sIdHR+'&sOrPer='+sOrPer+'&date_to_load_detail='+sDateFF+'&sType='+sType,'popUp','toolbar=no,location=no,status=yes,directories=no,menubar=no,scrollbars=yes,resizable=yes,width=830,height=600,top='+(screen.height-600)/2.5+',left='+(screen.width-830)/2.5);		
	
	}
	
	function returnToFilter(){
		
		$('filterString').innerHTML = "";
		$('divResult').style.display = 'none'; 		
		
		//in order to use the autocompletion, we need to set height to auto (not 0), so we need to do a transition to 0 and after set auto (this is not numeric)
		// to do this we need to use the chain method in the Fx.Tween object
		var myFx = new Fx.Tween('filterFormFields', {property: 'height'});
		myFx.start(0).chain(
			function(){ $('filterFormFields').style.height = 'auto'; }
		);			

		//similar with divDescription, not related with autocompletion but with Firefox
		var myFx = new Fx.Tween('divDescription', {property: 'height'});
		myFx.start(0).chain(
			function(){ $('divDescription').style.height = 'auto';}
		);		

		//for put the good with
		var myFx = new Fx.Tween('filterFormFields', {property: 'width'});
		myFx.start(0).chain(
			function(){ $('filterFormFields').style.width = 'auto'; }
		);	
		var myFx = new Fx.Tween('divDescription', {property: 'width'});
		myFx.start(0).chain(
			function(){ $('divDescription').style.width = 'auto'; }
		);	
		var myFx = new Fx.Tween('tableFilterForm', {property: 'width'});
		myFx.start(0).chain(
			function(){ $('tableFilterForm').style.width = '100%'; createChart();}
		);		
		
		

		//parent.$('pageBodyFrame').contentWindow.fireEvent('resize');
		//mypageWidth = parent.$('pageBodyFrame').contentWindow.document.body.scrollWidth;		
		//parent.$('pageBodyFrame').contentWindow.document.body.style.width = mypageInitialWidth + 'px';
	}	
	
	
	function checkSelected(index){
		
		var check = eval("$('chkSCO_SELECTED_"+index+"').checked");
		var numRegClock = parseInt(eval("$('hNumRegClock_"+index+"').value"));
		if (check) {
			nNumRegSelected++ ;
			sNumTotCurReg += numRegClock; 
		}else{
			nNumRegSelected-- ; 
			sNumTotCurReg -= numRegClock; 
		}
		setSelectedText(nNumRegSelected);
	}		
	
	function selectUnselectAll(bSelect){

		var aRows = new Array();  var	nNumRow = 0; 
		for (jnum=1;jnum<$('AlertsTable').rows.length;jnum++){
			eval("var isChecked = $('chkSCO_SELECTED_"+jnum+"').checked");
			if (isChecked != bSelect){
				eval("$('chkSCO_SELECTED_"+jnum+"').checked = bSelect");
				checkSelected(jnum);
			}
			nNumRow++;
		}		
	}

	function setSelectedText(nNumRegSelected){
		
		var sText = "<%=Tran_mss_g4_inc_val.getProperty("bt.selected")%>";
		$('tdNumRegSelected').innerHTML = sText.replace("XX",nNumRegSelected).replace("YY",aRowsLoaded.ret.length);		
	}		
	
	function startAction(sActionTp){

		if (sActionTp!="6"){
			$('btSentImg').src = "/iconos/spinner.gif";
			$('imgbtCopyTheoAll').style.display = 'none';
			$('tdbtCopyTheoAllFiltered').style.display = 'none';
			$('imgbtSaveAlerts').style.display = 'none';
			$('imgbtConfiguration').style.display = 'none';
			$('imgbtReturnToFilter').src = "/iconos/spinner.gif";
		}else{
			$('imgCharSpinner').style.display = "inline";;
		}
	}	
	
	function endAction(sActionTp){

		if (sActionTp!="6"){
			$('btSentImg').src = "/iconos/js_filtrar.gif";
			$('imgbtCopyTheoAll').src = "/iconos/ic_menu_work_time.gif";
			$('imgbtCopyTheoAll').style.display = "inline";
			//$('tdbtCopyTheoAllFiltered').style.backgroundImage = "url('/iconos/ic_menu_work_time.gif')";
			$('imgbtCopyTheoAllFiltered').style.display = "inline";
			$('imgbtCopyTheoAllFiltered').src = "/iconos/ic_menu_work_time.gif";
			$('imgbtSaveAlerts').src = "/iconos/grabar.gif";
			$('imgbtSaveAlerts').style.display = "inline";
			$('imgbtConfiguration').src = "/iconos/ic_menu_my_tools.gif";
			$('imgbtConfiguration').style.display = "inline";
			$('imgbtReturnToFilter').src = "/iconos/icono_anterior_36_36.gif";		
			$('imgbtReturnToFilter').style.display = "inline";
		}else{
			$('imgCharSpinner').style.display = "none";
		}		
	}	
	
	
	function showConfModalDialog(){
	
		(sReloadAfterChg=="1") ? $('sReloadAfterChg').checked = true : $('sReloadAfterChg').checked = false;
		//sIdIncToCreate 		
		(sViewNmEmpl=="1") ? $('sViewNmEmpl').checked = true : $('sViewNmEmpl').checked = false;
		(sViewComment=="1") ? $('sViewComment').checked = true : $('sViewComment').checked = false;
		(sViewIdRefMod=="1") ? $('sViewIdRefMod').checked = true : $('sViewIdRefMod').checked = false;
		(sViewIdWeekModel=="1") ? $('sViewIdWeekModel').checked = true : $('sViewIdWeekModel').checked = false;
		(sViewIdDayType=="1") ? $('sViewIdDayType').checked = true : $('sViewIdDayType').checked = false;
		(sViewTheorTS=="1") ? $('sViewTheorTS').checked = true : $('sViewTheorTS').checked = false;
		(sViewWorkTheo=="1") ? $('sViewWorkTheo').checked = true : $('sViewWorkTheo').checked = false;
		(sViewAbsCal=="1") ? $('sViewAbsCal').checked = true : $('sViewAbsCal').checked = false;
		(sViewAbs=="1") ? $('sViewAbs').checked = true : $('sViewAbs').checked = false;
		(sViewSup=="1") ? $('sViewSup').checked = true : $('sViewSup').checked = false;		
		(sViewGrosClock=="1") ? $('sViewGrosClock').checked = true : $('sViewGrosClock').checked = false;		
		(sViewClockTS=="1") ? $('sViewClockTS').checked = true : $('sViewClockTS').checked = false;		
		(sViewReal=="1") ? $('sViewReal').checked = true : $('sViewReal').checked = false;		
		(sViewRealTS=="1") ? $('sViewRealTS').checked = true : $('sViewRealTS').checked = false;		
		(sViewIDAlert=="1") ? $('sViewIDAlert').checked = true : $('sViewIDAlert').checked = false;		
		(sViewNMProp=="1") ? $('sViewNMProp').checked = true : $('sViewNMProp').checked = false;		
		(sViewHide=="1") ? $('sViewHide').checked = true : $('sViewHide').checked = false;		
		(sViewCommentAlert=="1") ? $('sViewCommentAlert').checked = true : $('sViewCommentAlert').checked = false;		
		(sViewHasRequestInc=="1") ? $('sViewHasRequestInc').checked = true : $('sViewHasRequestInc').checked = false;	
		(sViewAlertClasification=="1") ? $('sViewAlertClasification').checked = true : $('sViewAlertClasification').checked = false;	
	
		$('divConf').style.display='block';
		$('fade').style.display='block';
		
		//we put the Conf Dialog in the x position of the Conf button		
		$('divConf').setPosition({x: $('btConfiguration').getPosition().x, y: $('divConf').getPosition().y});
		
		if (parent.$('pageBodyFrame')){
			//var bOldNullHeight = parent.$('pageBodyFrame').contentWindow.bNullHeight;
			parent.$('pageBodyFrame').contentWindow.bNullHeight = true;
			parent.$('pageBodyFrame').contentWindow.fireEvent('resize');
		
			//parent.$('pageBodyFrame').contentWindow.bNullHeight = bOldNullHeight;

			/*
			//change the heigth of the iframe where this page is inserted		
			mypageHeight = parent.$('pageBodyFrame').contentWindow.document.body.scrollHeight;
			confModalDialogTop = $('divConf').getCoordinates().top;
			confModalDialogHeight = $('divConf').getCoordinates().height;
			maxBoth = Math.max(mypageHeight,confModalDialogTop+confModalDialogHeight+10);
			pageBodyFrameHeight = parent.$('pageBodyFrame').getStyle('height').toInt();
			if (parent.$('pageBodyFrame') && maxBoth > pageBodyFrameHeight){
				parent.$('pageBodyFrame').style.height = maxBoth + 'px'; 	
			}		
			*/		
			
		}
		
	}

	
	function saveAndCloseConfModalDialog(){

		closeConfModalDialog();
		jsonActions(5,0,'');		
	}
	function closeConfModalDialog(){
		$('divConf').style.display='none';
		$('fade').style.display='none';
		

		($('sReloadAfterChg').checked = true) ? sReloadAfterChg = "1" : sReloadAfterChg = "0";
		//sIdIncToCreate 		
		($('sViewNmEmpl').checked == true) ? sViewNmEmpl = "1" : sViewNmEmpl = "0";
		($('sViewComment').checked == true) ? sViewComment = "1" : sViewComment = "0";	
		($('sViewIdRefMod').checked == true) ? sViewIdRefMod = "1" : sViewIdRefMod = "0";
		($('sViewIdWeekModel').checked == true) ? sViewIdWeekModel = "1" : sViewIdWeekModel = "0";
		($('sViewIdDayType').checked == true) ? sViewIdDayType = "1" : sViewIdDayType = "0";
		($('sViewTheorTS').checked == true) ? sViewTheorTS = "1" : sViewTheorTS = "0";
		($('sViewWorkTheo').checked == true) ? sViewWorkTheo = "1" : sViewWorkTheo = "0";
		($('sViewAbsCal').checked == true) ? sViewAbsCal = "1" : sViewAbsCal = "0";
		($('sViewAbs').checked == true) ? sViewAbs = "1" : sViewAbs = "0";
		($('sViewSup').checked == true) ? sViewSup = "1" : sViewSup = "0";
		($('sViewGrosClock').checked == true) ? sViewGrosClock = "1" : sViewGrosClock = "0";
		($('sViewClockTS').checked == true) ? sViewClockTS = "1" : sViewClockTS = "0";
		($('sViewReal').checked == true) ? sViewReal = "1" : sViewReal = "0";
		($('sViewRealTS').checked == true) ? sViewRealTS = "1" : sViewRealTS = "0";
		($('sViewIDAlert').checked == true) ? sViewIDAlert = "1" : sViewIDAlert = "0";
		($('sViewNMProp').checked == true) ? sViewNMProp = "1" : sViewNMProp = "0";
		($('sViewHide').checked == true) ? sViewHide = "1" : sViewHide = "0";
		($('sViewCommentAlert').checked == true) ? sViewCommentAlert = "1" : sViewCommentAlert = "0";
		($('sViewHasRequestInc').checked == true) ? sViewHasRequestInc = "1" : sViewHasRequestInc = "0";
		($('sViewAlertClasification').checked == true) ? sViewAlertClasification = "1" : sViewAlertClasification = "0";

		hideShowColumns();
		putSameWidth();
	}			
	
	
	function openInc(action, numReg){

		//eval("var sIdHR = $('hSTD_ID_HR_"+numReg+"').value");	
		eval("var sIdHR = $('hSTD_ID_HR_hinc_"+numReg+"').value");	
		eval("var sOrPer = $('hSTD_OR_PER_"+numReg+"').value");	
		eval("var sDateUF = $('hDT_START_" +numReg+"').value");
		eval("var sDateFF = $('hDT_START_Fix_" +numReg+"').value");
		var sDefInc = sIdIncToCreate;
		openIncidencePageGTA(action,sIdHR,sDateUF,sDateFF,sDefInc,sOrPer); //this function is in the file sco_incidences_link.js
	
	}
	
	function filtrewu(){
		//this function is called by the incidences page after a change => we have to reload the table
		load();
	}
	

	function putSameWidth(){
		//put the same Width for all the elements

		//first we put auto
		$('filterFormFields').style.width = 'auto';
		$('divDescription').style.width = 'auto';
		$('tableFilterForm').style.width = '100%';
		$('divResult').style.width = 'auto';
		$('filterString').style.width = 'auto';
		
		var nAlertTableWidth = $('AlertsTable').getSize().x,
			ndivResultWidth = $('divResult').getSize().x,
			nfilterStringWidth = $('filterString').getSize().x,
			nfilterFormFieldsWidth = $('filterFormFields').getSize().x,
			ndivDescriptionWidth = $('divDescription').getSize().x;

//alert(nAlertTableWidth+':'+ndivResultWidth+':'+nfilterStringWidth+':'+nfilterFormFieldsWidth+':'+ndivDescriptionWidth);			

		//then we must put the max, because the nAlertTableWidth can change
		var nMax = Math.max(nAlertTableWidth,ndivResultWidth,nfilterStringWidth,nfilterFormFieldsWidth,ndivDescriptionWidth);
		
		if (nMax != nAlertTableWidth ){ $('AlertsTable').setStyle('width', nMax);}						
		if (nMax != ndivResultWidth ){ $('divResult').setStyle('width', nMax);}
		if (nMax != nfilterStringWidth ){ $('filterString').setStyle('width', nMax);}
		if (nMax != nfilterFormFieldsWidth ){ $('filterFormFields').setStyle('width', nMax);}
		if (nMax != ndivDescriptionWidth ){ $('divDescription').setStyle('width', nMax);}
		
		/*
		if (Math.max(nAlertTableWidth,$('divResult').getSize().x) != $('divResult').getSize().x ){ $('divResult').setStyle('width', Math.max(nAlertTableWidth,$('divResult').getSize().x));}
		if (Math.max(nAlertTableWidth,$('filterString').getSize().x) != $('filterString').getSize().x ){ $('filterString').setStyle('width', Math.max(nAlertTableWidth,$('filterString').getSize().x));}						
		if (Math.max(nAlertTableWidth,$('filterFormFields').getSize().x) != $('filterFormFields').getSize().x ){ $('filterFormFields').setStyle('width', Math.max(nAlertTableWidth,$('filterFormFields').getSize().x));}						
		if (Math.max(nAlertTableWidth,$('divDescription').getSize().x) != $('divDescription').getSize().x ){ $('divDescription').setStyle('width', Math.max(nAlertTableWidth,$('divDescription').getSize().x));}
		*/
		//$('filterString').setStyle('width', Math.max(nAlertTableWidth,$('filterString').getSize().x));
		//$('filterFormFields').setStyle('width', Math.max(nAlertTableWidth,$('filterFormFields').getSize().x));
		//$('divDescription').setStyle('width', Math.max(nAlertTableWidth,$('divDescription').getSize().x));	
	
	}

	function createFilterString(){
		var sCode = "";
		
		sCode += "<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("DT_START_P"))%> = ".bold() ;
		sCode += $('dDtStart').value ;

		sCode += ", "+"<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("DT_END_P"))%> = ".bold() ;
		sCode += $('dDtEnd').value ;		

		if ($('rALERT_TYPE1').checked) {
			sCode += ", "+"<%=oLabelValues.getLabel("SHCO_LB_ALL")%>".bold();
		} else if ($('rALERT_TYPE2').checked){
			sCode += ", "+"<%=oLabelValues.getLabel("SSM_LB_ALERT")%> = ".bold() + $('SCO_GTA_QBF_VE_PROP_4_ALERTS.SCO_NM_PROPERTY').value;
		} else {
			($('txtID_DISPLAY_CLASIFICATION_filter').value!="")? sCode += ", "+"<%=oLabelValues.getLabel("SSM_LB_CLASSIF")%> = ".bold() + $('SRCO_TK_QBF_VE_DISPLAY_C.SCO_NM_DISPLAY_DLASIFICATION').value:"";
			if ($('selAlSevLevel1').options[$('selAlSevLevel1').selectedIndex].value!=""&&$('selAlSevLevel2').options[$('selAlSevLevel2').selectedIndex].value!=""){
				sCode += ", "+"<%=oLabelValues.getLabel("SSM_LB_AND_LEVEL_B")%> = ".bold() + $('selAlSevLevel1').options[$('selAlSevLevel1').selectedIndex].text + " <%=oLabelValues.getLabel("SSM_LB_AND")%> " + $('selAlSevLevel2').options[$('selAlSevLevel2').selectedIndex].text;
			}
		}
		
		sCode += ($('chkHIDDEN_ALERTS').checked==true)?", "+"<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("HIDDEN_ALERTS"))%>".bold():"";
		sCode += (!($('txtIdEMPLOYEE_filter').value=="" || $('txtIdEMPLOYEE_filter').value=="null"))?", "+"<%=oLabelValues.getLabel("SSM_LB_EMPLOYEE")%> = ".bold()+$('SRCO_PA_QBF_HR_PERIOD.SCO_GB_NAME').value :"";
		sCode += ($('selIdWu').options[$('selIdWu').selectedIndex].value!="__ALL__")?", "+"<%=oLabelValues.getLabel("SSM_LB_WU")%> = ".bold()+$('selIdWu').options[$('selIdWu').selectedIndex].innerHTML :""
		sCode += "</br></br></br>"
		return sCode
	}		
	
	function load(){
		//load the alerts that match the filter
		if ($('dDtStart').value!=""){
			$('divResult').style.display = showMode; 
			jsonActions("1","","");
		}
	}
	
	function copyTheoForOne(sNumCurReg){
		//copy the theoretical into the clock
		var numRegClock = eval("$('hNumRegClock_"+sNumCurReg+"').value");
		var bExec = true;
		if (numRegClock>0){
			var sText = m4getmessage("_gta_37");
			var r=confirm(sText);
			//var r=confirm('<%=Tran_mss_g4_inc_val.getProperty("bt.copyTheo.confirmation")%>');
			if (r==true){ bExec = true;}else{bExec = false;}
		}
		
		if (bExec) {jsonActions("3",sReloadAfterChg,sNumCurReg);}
	}
	
	function copyTheoAll(){
		//copy the theoretical into the clock for all the registers selected
		var bExec = true;
		if (nNumRegSelected>0){
			if (sNumTotCurReg>0){
				//var sText = "<%=Tran_mss_g4_inc_val.getProperty("bt.copyTheoAllconf")%>";
				var sText = m4getmessage("_gta_33");
				var r=confirm(sText.replace('XXXX',nNumRegSelected));
				if (r==true){bExec = true;}else{bExec = false;}
			}else{
				//var sText = "<%=Tran_mss_g4_inc_val.getProperty("bt.copyTheoAllconf2")%>";
				var sText = m4getmessage("_gta_34");
				var r=confirm(sText.replace('XXXX',nNumRegSelected));
				if (r==true){bExec = true;}else{bExec = false;}
			}
			if (bExec) {jsonActions("2",sReloadAfterChg,"1");}		
		}
	}
	
	function copyTheoAllFiltered(){
		//copy the theoretical into the clock for all the registers selected
		var bExec = true;
		if (nNumRegSelected>0){

			if (sNumTotCurReg>0){
				//var sText = "<%=Tran_mss_g4_inc_val.getProperty("bt.copyTheoAllFiltered.confirmation")%>";
				var sText = m4getmessage("_gta_35");
				var r=confirm(sText.replace('XXXX',aRowsLoaded.ret.length));
				if (r==true){bExec = true;}else{bExec = false;}
			}else{
				//var sText = "<%=Tran_mss_g4_inc_val.getProperty("bt.copyTheoAllFiltered.confirmation2")%>";
				var sText = m4getmessage("_gta_36");
				var r=confirm(sText.replace('XXXX',aRowsLoaded.ret.length));
				if (r==true){bExec = true;}else{bExec = false;}
			}
			
			if (bExec) {jsonActions("2",sReloadAfterChg,"");}
		}
	}		
	
	function saveAlerts(){
		//save the hide/comment changes for all the registers selected
		if (nNumRegSelected>0){ jsonActions("4",sReloadAfterChg,"1"); }
	}			

	
	function jsonActions(sActionTp,sReload,sNumCurReg){
		//make all the json actions in the page
		
		// sActionTp:
		// 1: Load the alerts that match the filter
		// 2: Copy the theoretical for all the alerts selected and realod the alerts (optional)
		// 3: Copy the theoretical for one alert and realod the alerts (optional)
		// 4: Save the changes in hidde and/or alert comment for all the alerts selected and realod the alerts (optional)	
		// 5: Save the configuration parameters (here we never reload)		
		// 6: Load the count of the alerts that match the filter (and the chart data)

		//efects
		if(sActionTp!="6"){
			$('filterFormFields').tween('height', 18);
			$('divDescription').tween('height', 20);
			$('filterString').innerHTML = createFilterString();
		}

		//parameters of the call
		var sAlertType = "";
		if ($('rALERT_TYPE1').checked) {sAlertType="1"} else if ($('rALERT_TYPE2').checked){sAlertType="2"} else {sAlertType="3"} ;
		var sHiddenAlerts = "";
		if ($('chkHIDDEN_ALERTS').checked) {sHiddenAlerts="1"} else {sHiddenAlerts="0"};		

		var sUrl = "/servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_view_alerts_actions_json.jsp";
		var sParams = "ActionTp="+sActionTp +"&Reload=" + sReload ;
		if (sNumCurReg.length > 0){sParams += "&NumCurReg=" + eval("$('hNumReg_"+sNumCurReg+"').value");}	
		sParams += "&DtStart="+$('dDtStart').value + "&DtEnd="+$('dDtEnd').value ;
		sParams += "&ALERT_TYPE="+sAlertType + "&ID_ALERT="+$('txtID_ALERT_filter').value ;
		sParams += "&AlSevLevel1="+$('selAlSevLevel1').options[$('selAlSevLevel1').selectedIndex].value + "&AlSevLevel2="+$('selAlSevLevel2').options[$('selAlSevLevel2').selectedIndex].value ;
		sParams += "&ID_DISPLAY_CLASIFICATION="+$('txtID_DISPLAY_CLASIFICATION_filter').value + "&HIDDEN_ALERTS="+sHiddenAlerts ;
		sParams += "&ID_HR="+$('txtIdEMPLOYEE_filter').value + "&OR_PER="+$('txtOrEMPLOYEE_filter').value + "&IdWu="+$('selIdWu').options[$('selIdWu').selectedIndex].value ;	

		//for gobal actions, we must take the registers selected
		if(sActionTp=="2"||sActionTp=="4"){
			var aRows = new Array();  var	nNumRow = 0; 
			for (jnum=1;jnum<$('AlertsTable').rows.length;jnum++){
				eval("var isChecked = $('chkSCO_SELECTED_"+jnum+"').checked");
				eval("var isCheckedHide = $('SCO_HIDE_"+jnum+"').checked");
				eval("var sCommentAlert = $('SCO_COMMENT_ALERT_"+jnum+"').value");
				aRows[nNumRow]=isChecked+"|"+isCheckedHide+"|"+sCommentAlert;
				nNumRow++;
			}						
			var sJsonToSend = JSON.encode(aRows);
			sParams += "&aRows="+sJsonToSend
		}else if (sActionTp=="5"){
			var aRows = new Array();
			aRows[0]=sReloadAfterChg ;
			aRows[1]=sViewNmEmpl;
			aRows[2]=sViewComment;
			aRows[3]=sViewIdRefMod;
			aRows[4]=sViewIdWeekModel;
			aRows[5]=sViewIdDayType;
			aRows[6]=sViewTheorTS;
			aRows[7]=sViewWorkTheo;
			aRows[8]=sViewAbsCal;
			aRows[9]=sViewAbs;
			aRows[10]=sViewSup;
			aRows[11]=sViewReal;
			aRows[12]=sViewGrosClock;
			aRows[13]=sViewHide;
			aRows[14]=sViewIDAlert;
			aRows[15]=sViewNMProp;
			aRows[16]=sViewClockTS;
			aRows[17]=sViewRealTS;
			aRows[18]=sViewCommentAlert;
			aRows[19]=sViewHasRequestInc;			
			aRows[20]=sViewAlertClasification;			
			
			var sJsonToSend = JSON.encode(aRows);
			sParams += "&aRows="+sJsonToSend;
			sParams += "&DefInc="+sIdIncToCreate;
		}
		
		//prompt("url to send ",sUrl + '?' + sParams); //descoment this line to capure the parameters and debug the destination page		

		var jsonRequest = new Request.JSON({
			url: sUrl,
			data: sParams, 
			onCancel: function(jsonObj) {
				alert('Error: jsonActions: Request.JSON oncancel');
				endAction(sActionTp);
			},
			onSuccess: function(jsonObj) {

				if (jsonObj!=null){
					if(jsonObj.sLogErrorMsg!=""){
						alert("<%=oLabelValues.getLabel("SHCO_LB_TIT_ERROR")%> : "+jsonObj.sLogErrorMsg);
					}
					
					//if we have to load/reload
					if (sActionTp=="1"||sReload=="1"){
					
						aRowsLoaded = jsonObj;
						putRegistersInTable(0);						
					
						//change the heigth of the iframe where this page is inserted, only to increase the size
						if (parent.$('pageBodyFrame') && parent.$('pageBodyFrame').contentWindow.document.body.scrollHeight > parent.$('pageBodyFrame').getStyle('height').toInt()){
							parent.$('pageBodyFrame').style.height = parent.$('pageBodyFrame').contentWindow.document.body.scrollHeight + 'px'; 
						}
						
						putSameWidth();						
						
					}if (sActionTp=="6"){
						//chart data
						aChartData = jsonObj.aChartData.split(",");
						_createChart();
					}
					
				}else{
					alert('Error: loadEmployees: onSuccess. Return object is null');
				}			
				
				endAction(sActionTp);
			},
			onFailure: function(jsonObj) {
				alert('Error: jsonActions: Request.JSON onFailure' + jsonObj.responseText + '|' +jsonObj.status + '|' +jsonObj.statusText);
				endAction(sActionTp);
			},
			onException: function(jsonObj) {
				alert('Error: jsonActions: Request.JSON onException');
				endAction(sActionTp);
			}			
		});
		jsonRequest.post();
		startAction(sActionTp);
		
	}
	
	function putRegistersInTable(nWindow){
		//put the registers loaded into the table
		//argument: nWindow the number of the window to load, from 0 to n-1

		//first we clean the table
		cleanAlertTable();		
		
		var indexIni = nWindow * numRegInWindow;
		var indexFin = Math.min((nWindow+1) * numRegInWindow,aRowsLoaded.ret.length);
		
		//num registers selected
		nNumRegSelected = indexFin-indexIni;
		setSelectedText(nNumRegSelected);
		
		sNumTotCurReg = 0;
		//we loop the result array and put each result in a row
		for (i=indexIni;i<indexFin;i++){

			$('hNumReg_XXXX').value = i;
			sNumTotCurReg += parseInt(aRowsLoaded.ret[i].sNumRegClock);	
			$('hNumRegClock_XXXX').value = aRowsLoaded.ret[i].sNumRegClock;			
			//$('STD_ID_HR_XXXX').innerHTML =  aRowsLoaded.ret[i].sIdHR + "-" + aRowsLoaded.ret[i].nOrHrPer;
			$('hSTD_ID_HR_XXXX').value = aRowsLoaded.ret[i].sIdHR;
			$('hSTD_ID_HR_hinc_XXXX').value = aRowsLoaded.ret[i].sIdHRhinc;
			$('hSTD_OR_PER_XXXX').value = aRowsLoaded.ret[i].nOrHrPer;
			$('hSTD_OR_PER_hinc_XXXX').value = aRowsLoaded.ret[i].sOrHrPerhinc;
			$('SCO_GB_NAME_XXXX').innerHTML =  aRowsLoaded.ret[i].sNmEmpl;
			$('DT_START_XXXX').innerHTML =  aRowsLoaded.ret[i].sDtStart;
			$('hDT_START_XXXX').value =  aRowsLoaded.ret[i].sDtStart;
			$('hDT_START_Fix_XXXX').value =  aRowsLoaded.ret[i].sDtStartFix;
			$('SCO_COMMENT_XXXX').innerHTML =  aRowsLoaded.ret[i].sComment;
			$('SCO_ID_REF_MOD_XXXX').innerHTML =  aRowsLoaded.ret[i].sIdRefMod;
			$('SCO_ID_WEEK_MDL_XXXX').innerHTML =  aRowsLoaded.ret[i].sIdWeekModel;
			$('SCO_ID_DAY_TYPE_XXXX').innerHTML =  aRowsLoaded.ret[i].sIdDayType;
			$('SCO_TRANSLATED_TIMESLOT_PER_VW_XXXX').innerHTML =  aRowsLoaded.ret[i].sTheorTS.replace(/,/gi,'</br>');
			$('SCO_WORK_THEO_XXXX').innerHTML =  aRowsLoaded.ret[i].sWorkTheo + "&nbsp;" +aRowsLoaded.ret[i].sWorkTheoString;
			$('SCO_ABS_CAL_XXXX').innerHTML =  aRowsLoaded.ret[i].sAbsCal + "&nbsp;" +aRowsLoaded.ret[i].sAbsCalString;
			$('SCO_ABS_XXXX').innerHTML =  aRowsLoaded.ret[i].sAbs + "&nbsp;" +aRowsLoaded.ret[i].sAbsString;
			$('SCO_SUP_XXXX').innerHTML =  aRowsLoaded.ret[i].sSup + "&nbsp;" +aRowsLoaded.ret[i].sSupString;
			$('SCO_GROSS_CLOCK_DEC_HOURS_XXXX').innerHTML =  aRowsLoaded.ret[i].sGrosClock;
			$('SCO_TRANSLATED_TS_GROSS_CLOCK_XXXX').innerHTML =  aRowsLoaded.ret[i].sClockTS.replace(/,/gi,'</br>');
			$('SCO_REAL_WORK_XXXX').innerHTML =  aRowsLoaded.ret[i].sReal + "&nbsp;" +aRowsLoaded.ret[i].sRealString;
			$('SCO_TRANSLATED_TS_REAL_XXXX').innerHTML =  aRowsLoaded.ret[i].sRealTS.replace(/,/gi,'</br>');
			$('SCO_ID_ALERT_XXXX').innerHTML =  aRowsLoaded.ret[i].sIDAlert;
			$('SCO_NM_PROPERTY_XXXX').innerHTML =  aRowsLoaded.ret[i].sNMProp;
			$('SCO_NM_DISPLAY_DLASIFICATION_XXXX').innerHTML =  aRowsLoaded.ret[i].sAlertClasification;
			$('SCO_NM_ALERT_SEVERITY_LEVEL_XXXX').innerHTML =  aRowsLoaded.ret[i].sNmAlSevLevel+"&nbsp;&nbsp;";
			$('SCO_NM_ALERT_SEVERITY_LEVEL_XXXX').style.backgroundImage = "url('/iconos/"+ aRowsLoaded.ret[i].sAlertIcon + ".png')";
			$('SCO_NM_ALERT_SEVERITY_LEVEL_XXXX').style.backgroundRepeat = "no-repeat";
			$('SCO_NM_ALERT_SEVERITY_LEVEL_XXXX').style.backgroundPosition = "top right";
			$('SCO_COMMENT_ALERT_XXXX').value =  aRowsLoaded.ret[i].sCommentAlert;		
			$('SCO_TEXT_XXXX').innerHTML =  splitTextIntoTwoLines(aRowsLoaded.ret[i].sText); //text in two lines
			//checks
			(aRowsLoaded.ret[i].sHasRequestInc=="1") ? $('SCO_HAS_REQUEST_INCIDENCE_XXXX').checked = true : $('SCO_HAS_REQUEST_INCIDENCE_XXXX').checked = false ;							
			(aRowsLoaded.ret[i].sHide=="1") ? $('SCO_HIDE_XXXX').checked = true : $('SCO_HIDE_XXXX').checked = false ;							
			//absence buttons
			(aRowsLoaded.ret[i].sHasRequestInc=="1") ? $('anchorRequestAbsence_XXXX').style.display = 'inline' : $('anchorRequestAbsence_XXXX').style.display = 'none';
			(aRowsLoaded.ret[i].sAbs=="0.00"||aRowsLoaded.ret[i].sAbs=="00:00") ? $('anchorCancelAbs_XXXX').style.display = 'none' : $('anchorCancelAbs_XXXX').style.display = 'inline';
			(aRowsLoaded.ret[i].sSup=="0.00"||aRowsLoaded.ret[i].sSup=="00:00") ? $('anchorCancelPres_XXXX').style.display = 'none' : $('anchorCancelPres_XXXX').style.display = 'inline';
			
			//clock button
			if (aRowsLoaded.ret[i].sIsClockChangeable!="1") {
				$('anchormodifClock_XXXX').set('href', 'javascript:');
				$('imganchormodifClock_XXXX').set('style', 'opacity:0.4;filter:alpha(opacity=40)');
			}else{
				$('anchormodifClock_XXXX').set('href', 'javascript:viewDetails(3,XXXX);');
				$('imganchormodifClock_XXXX').set('style', '');			
			}
					
			addRowToAlertTable();
			
		}
		paintWindowsTable(nWindow);
		hideShowColumns();
		if (aRowsLoaded.ret.length > 0) { $('chkSCO_SELECTED_1').focus() ; }
		
		var mode = ( (aRowsLoaded.ret.length > numRegInWindow) ? 'inline' : 'none');//``
		$('tdbtCopyTheoAllFiltered').style.display = mode;
		
	}	
	
	function paintWindowsTable(nWindow){
		//argument: nWindow the number of the window to load, from 0 to n-1
		
		var nInterval = Math.ceil(aRowsLoaded.ret.length/numRegInWindow);
		var rowCount = $('windowsTable').rows.length;
		var row = $('windowsTable').insertRow(rowCount);		
		var sHTML = ""; var sCode = "";
		var nStartInterval = 0; var nEndInterval = 0; 
		
		for (i=0; i< nInterval; i++){
		
			nStartInterval = (i * numRegInWindow) + 1;
			nEndInterval = Math.min(((i+1) * numRegInWindow),aRowsLoaded.ret.length);
			
			var newcell = row.insertCell(i);
			
			if(i==nWindow){
				newcell.className = "fuentebarraregistrosanulado";
				sCode = nStartInterval+'&nbsp;-&nbsp;'+nEndInterval;
				newcell.innerHTML = sCode;	
			}else{
				newcell.className = "fuentebarraregistros";
				sCode = "<a href='javascript:putRegistersInTable("+i+");' title='Afficher autres données'>";
				sCode += nStartInterval+'&nbsp;-&nbsp;'+nEndInterval;
				newcell.innerHTML = sCode;					
			}
		}		
	}
	
	
	function cleanAlertTable(){
		//Delete all the rows in the alert table, except the header, and all the registers in the window table
		
		var nNumRows = $('AlertsTable').rows.length;
		for (i=nNumRows-1;i>0;i--){
			$('AlertsTable').deleteRow(i);
		}

		nNumRows = $('windowsTable').rows.length;
		for (j=nNumRows-1;j>=0;j--){
			$('windowsTable').deleteRow(j);
		}
	}	
	
	
	function splitTextIntoTwoLines(sText){
		//split a word into two lines taking into account complete words.
	
		var sRet = ""; 
		var newnPosToSplit; 
		var nPosToSplit = Math.round(sText.length/2);
		
		//if the position to split is a word character we take the position of the next not word caracter
		if  (  sText.charAt(nPosToSplit).match(/[^  ¡!¿?,:;._-]/gim) != null  ) {
			newnPosToSplit = sText.substr(nPosToSplit).search(/[  ¡!¿?,:;._-]/gim);
			if (newnPosToSplit!=-1){nPosToSplit =  nPosToSplit + newnPosToSplit;}
		} ;
		
		sRet = sText.substr(0,nPosToSplit)+"</br>" + sText.substr(nPosToSplit);
		return sRet;
	}
	
	function addRowToAlertTable(){
	
		var tableOrig = $('HiddenAlertsTable');
		var tableDest = $('AlertsTable');
		
		var rowCount = tableDest.rows.length;
		var row = tableDest.insertRow(rowCount);
		
		//row.className = "tablaestadosceldatitulo"
		var colCount = tableOrig.rows[0].cells.length;
		var code;

		for (var i=0; i<colCount; i++) {
			var newcell = row.insertCell(i);
			newcell.id = tableOrig.rows[0].cells[i].id;
			
			if (tableOrig.rows[0].cells[i].name != undefined){
				//IE
				newcell.name = tableOrig.rows[0].cells[i].name;
			}else{
				//firefox
				newcell.set('name', tableOrig.rows[0].cells[i].id);
			}			
			newcell.display = tableOrig.rows[0].cells[i].display;
			newcell.value = tableOrig.rows[0].cells[i].value;
			newcell.className = "fuentevalor";
			newcell.style.whiteSpace ="nowrap";
			newcell.style.textAlign = "center";
			code = tableOrig.rows[0].cells[i].innerHTML;

			if (tableOrig.rows[0].cells[i].id =="col_SCO_COMMENT_ALERT"){
				code = '<input type="text" id="SCO_COMMENT_ALERT_XXXX" value="'+$('SCO_COMMENT_ALERT_XXXX').value+'" />';
			}else if(tableOrig.rows[0].cells[i].id =="col_SCO_HIDE" && $('SCO_HIDE_XXXX').checked){
				code = code.replace("type","checked type");
				//code = '<input type="checkbox" id="SCO_HIDE_XXXX" checked />';	
			}else if(tableOrig.rows[0].cells[i].id =="col_SCO_HAS_REQUEST_INCIDENCE" && $('SCO_HAS_REQUEST_INCIDENCE_XXXX').checked){
				code = code.replace("type","checked type");			
				//code = '<input type="checkbox" id="SCO_HAS_REQUEST_INCIDENCE_XXXX" checked />';	
			}
			
			code = code.replace(/XXXX/g,tableDest.rows.length-1);	
			newcell.innerHTML = code;
			
		}
	}
		
	function hideShowColumns(){
		//Hide and show the columns depending in the configuration	
		hideShowOneColumn("col_SCO_GB_NAME",sViewNmEmpl);
		hideShowOneColumn("col_SCO_COMMENT",sViewComment);	
		hideShowOneColumn("col_SCO_ID_REF_MOD",sViewIdRefMod);
		hideShowOneColumn("col_SCO_ID_WEEK_MDL",sViewIdWeekModel);
		hideShowOneColumn("col_SCO_ID_DAY_TYPE",sViewIdDayType);
		hideShowOneColumn("col_SCO_TRANSLATED_TIMESLOT_PER_VW",sViewTheorTS);
		hideShowOneColumn("col_SCO_WORK_THEO",sViewWorkTheo);
		hideShowOneColumn("col_SCO_ABS_CAL",sViewAbsCal);
		hideShowOneColumn("col_SCO_ABS",sViewAbs);
		hideShowOneColumn("col_SCO_SUP",sViewSup);
		hideShowOneColumn("col_SCO_GROSS_CLOCK_DEC_HOURS",sViewGrosClock);
		hideShowOneColumn("col_SCO_TRANSLATED_TS_GROSS_CLOCK",sViewClockTS);
		hideShowOneColumn("col_SCO_REAL_WORK",sViewReal);
		hideShowOneColumn("col_SCO_TRANSLATED_TS_REAL",sViewRealTS);
		hideShowOneColumn("col_SCO_ID_ALERT",sViewIDAlert);
		hideShowOneColumn("col_SCO_NM_PROPERTY",sViewNMProp);
		hideShowOneColumn("col_SCO_COMMENT_ALERT",sViewCommentAlert);		
		hideShowOneColumn("col_SCO_HIDE",sViewHide);
		hideShowOneColumn("col_SCO_HAS_REQUEST_INCIDENCE",sViewHasRequestInc);		
		hideShowOneColumn("col_SCO_NM_DISPLAY_DLASIFICATION",sViewAlertClasification);		
		
		
		hideShowOneColumn("col_createInc","1");		
		
		if (sViewHide=="1" || sViewCommentAlert=="1") {
			$('btSaveAlerts').style.display = 'inline' ;
			$('imgbtSaveAlerts').style.display = 'inline' ;
		}
		else { 
			$('btSaveAlerts').style.display = 'none';
			$('imgbtSaveAlerts').style.display = 'none' ;
		}

	}

	function hideShowOneColumn(column,hidde_or_show){
		//Hide or show the column by parameter
	
		var cells = document.getElementsByName(column);
		mode = ( (hidde_or_show=="1") ? showMode : 'none');
		
//		if (column=="col_SCO_ID_REF_MOD") {alert(column+","+hidde_or_show+","+cells.length+","+mode);}
		// Apply the style to the CSS display property for the cells
		for(j = 0; j < cells.length; j++) 
		{cells[j].style.display = mode;}
	}
	
	
	function nextPrevWeek(next){
		//move the start date to one week after or before of the current start date
		// and put end date one week after of the finnal start date
		sDtStart = $('dDtStart').value;
		if (sDtStart!=""){
			$('dDtStart').value = (next==1) ? m4AddDays(sDtStart,7) : m4AddDays(sDtStart,-7);	
			$('dDtEnd').value = m4AddDays($('dDtStart').value,6);
			createChart();
		}
	}	
	
</script>

<title><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oLabelValues.getLabel("SHCO_LB_PAGE_TITLE"))%></title>

</head>
<body id="ViewAlertBody" onload="init()">

<!-- Tabla de Descripcion. Obligatoria. Siempre una 3*2: un titulo de la pagina + un icono + una descripcion + opciones -->
<div id="divDescription" style="overflow:hidden" >
<table width="100%">
	<tr>
		<!-- Titulo funcional de la pagina -->
		<td class="titulofuncional" colspan="2"><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oLabelValues.getLabel("SHCO_LB_PAGE_TITLE"))%></td>
	</tr>
	<tr>
		<td><img src="/iconos/noname_busqueda_59_100.gif"  alt="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oLabelValues.getLabel("SHCO_LB_PAGE_TITLE"))%>" /></td>
		<td>
			<!-- Description -->			
			<div class="descripcionfuncional">
				<%=Tran_mss_g4_inc_val.getProperty("desc.line1")%> "<%=sRespTpNm%>"
				<%if (sWuVisibility.equals("1")){%> <%=Tran_mss_g4_inc_val.getProperty("desc.line2")%> <%}%>
				<br/>

			</div>
		</td>	
	</tr>
</table>
</div>
<!-- Fin de Tabla de descripcion. -->

<!-- Filter (filterForm) -->
<form action="" method="post" name="NombreFormulario" id="NombreFormulario" >

<div id="filterFormFields" style="overflow:hidden" >
	<table id="tableFilterForm" class = "tablaestados" width="100%" cellspacing="0" border="0" >
		<tr class = "tablaestadosceldatitulo">
			<td><%=oLabelValues.getLabel("SSM_FILTER")%></td>
			<td ></td>			
			<td ></td>
		</tr>

		<tr>
			<td class="fuentecampo">*&nbsp;<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("DT_START_P"))%></td>
			<td class="fuentecampo">			
				<input class="fuenteformulario" type="text" name="dDtStart" id="dDtStart" onchange="createChart();" maxlength="10" size="10" value="<m4:item m4name="<%=sDtStart%>"/>" title="<%=oLabelValues.getLabel("SHCO_LB_WRITE")%> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("DT_START_P"))%>" />&nbsp;
				<a href="javascript:m4calendario(m4objeto('NombreFormulario','dDtStart'));createChart();" title="<%=oLabelValues.getLabel("SHCO_LB_WRITE")%> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("DT_START_P"))%>"><img src="/iconos/icono_calendario_14_18.gif" alt="<%=oLabelValues.getLabel("SHCO_LB_WRITE")%> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("DT_START_P"))%>" /></a>
			
				&nbsp;&nbsp;*&nbsp;<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("DT_END_P"))%>&nbsp;&nbsp;
				<input class="fuenteformulario" type="text" name="dDtEnd" id="dDtEnd"  onchange="createChart();" maxlength="10" size="10" value="<m4:item m4name="<%=sDtEnd%>"/>"  title="<%=oLabelValues.getLabel("SHCO_LB_WRITE")%> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("DT_END_P"))%>" />&nbsp;
				<a  href="javascript:m4calendario(m4objeto('NombreFormulario','dDtEnd'));createChart();" title="<%=oLabelValues.getLabel("SHCO_LB_WRITE")%> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("DT_END_P"))%>"><img src="/iconos/icono_calendario_14_18.gif" alt="<%=oLabelValues.getLabel("SHCO_LB_WRITE")%> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("DT_END_P"))%>" /></a>
				
				&nbsp;&nbsp;&nbsp;&nbsp;
				<a  href="javascript:nextPrevWeek(0)" title="<%=oLabelValues.getLabel("SSM_LB_PREV_WEEK")%>"><img src="/iconos/icono_formacion_eliminar_11_12.gif" alt="<%=oLabelValues.getLabel("SSM_LB_PREV_WEEK")%>" /></a>
				&nbsp;&nbsp;
				<a  href="javascript:nextPrevWeek(1)" title="<%=oLabelValues.getLabel("SSM_LB_NEXT_WEEK")%>"><img src="/iconos/icono_formacion_anadir_11_12.gif" alt="<%=oLabelValues.getLabel("SSM_LB_NEXT_WEEK")%>" /></a>				
			</td>		
		</tr>		
		
		<tr><td class="fuentecampo"></td><td class="fuentecampo">&nbsp;</td></tr>
		
		<tr>
			<td class="fuentecampo"> <input type="radio" id="rALERT_TYPE1" name="rALERT_TYPE" value="1" checked="checked"  onclick="javascript:enableDisableRadioFilter()" /> <%=oLabelValues.getLabel("SHCO_LB_ALL")%></td>
			<td class="fuentecampo"></td>
		</tr>
		<tr>
			<td class="fuentecampo"> <input type="radio" id="rALERT_TYPE2" name="rALERT_TYPE" value="2" onclick="javascript:enableDisableRadioFilter()" /> <%=oLabelValues.getLabel("SHCO_LB_SEL_ONE")%></td>
			<td class="fuentecampo"> <input class="fuenteformulario"  id="SCO_GTA_QBF_VE_PROP_4_ALERTS.SCO_NM_PROPERTY" type="text" maxlength="80" size="80" />
				<input class="fuentecampo" tabindex="-1" id="txtID_ALERT_filter" type="hidden" maxlength="30" size="30"  value="" readonly="readonly"  />
			</td>
		</tr>		
		<tr>
			<td class="fuentecampo"> <input type="radio" id="rALERT_TYPE3" name="rALERT_TYPE" value="3" onclick="javascript:enableDisableRadioFilter()" /> <%=oLabelValues.getLabel("SSM_LB_AND_LEVEL_B")%>  </td>
			<td class="fuentecampo">
				<select id="selAlSevLevel1"  class="fuenteapartados" name="selAlSevLevel1" onchange="javascript:clickselAlSevLevel1()" title="<%=oLabelValues.getLabel("SHCO_LB_LIST")%> <%=oLabelValues.getLabel("SSM_LB_ALERT_SEV_LEVEL")%>">
					<option value=""></option>
					<m4:loop from="0" to="<%=new Integer(new Integer(sCountAlSevLevel).intValue()-1).toString()%>">
						<option value="<m4:item m4name="<%=sIdAlSevLevel%>"/>"><m4:item m4name="<%=sNmAlSevLevel%>"/></option>
					</m4:loop>
				</select>	
				<%=oLabelValues.getLabel("SSM_LB_AND")%> 
				<select id="selAlSevLevel2"  class="fuenteapartados" name="selAlSevLevel2" onchange="createChart()" title="<%=oLabelValues.getLabel("SHCO_LB_LIST")%> <%=oLabelValues.getLabel("SSM_LB_ALERT_SEV_LEVEL")%>">
					<option value=""></option>
					<m4:loop from="0" to="<%=new Integer(new Integer(sCountAlSevLevel).intValue()-1).toString()%>">
						<option value="<m4:item m4name="<%=sIdAlSevLevel%>"/>"><m4:item m4name="<%=sNmAlSevLevel%>"/></option>
					</m4:loop>
				</select>					
			</td>
		</tr>		
		<tr>
			<td class="fuentecampo"><%=oLabelValues.getLabel("SSM_LB_AND_CLASSIF")%>  </td>
			<td class="fuentecampo">
				<input class="fuenteformulario" id="SRCO_TK_QBF_VE_DISPLAY_C.SCO_NM_DISPLAY_DLASIFICATION" tabindex="9" type="text" maxlength="60" size="60" />
				<input class="fuentecampo" tabindex="-1" id="txtID_DISPLAY_CLASIFICATION_filter" type="hidden" maxlength="10" size="10"  value="" readonly="readonly"  />			
			</td>
		</tr>
		
		
		<tr>
			<td class="fuentecampo"> <input type="checkbox" name="chkHIDDEN_ALERTS" id="chkHIDDEN_ALERTS" value="" onclick="createChart()"/> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("HIDDEN_ALERTS"))%></td>
			<td class="fuentecampo"></td>			
		</tr>	

		<tr><td class="fuentecampo"></td><td class="fuentecampo">&nbsp;</td></tr>

		<tr>
			<td class="fuentecampo">&nbsp;&nbsp;&nbsp;<%=oLabelValues.getLabel("SSM_LB_EMPLOYEE")%></td>
			<td class="fuentecampo">
				<input class="fuenteformulario" id="SRCO_PA_QBF_HR_PERIOD.SCO_GB_NAME" type="text"  maxlength="54" size="36"  value="" />				
				<input class="fuentecampo" tabindex="-1" id="txtIdEMPLOYEE_filter" type="hidden" maxlength="10" size="10"  value="" readonly="readonly"  />
				<input class="fuentecampo" tabindex="-1" id="txtOrEMPLOYEE_filter" type="hidden" maxlength="3" size="3"  value="" readonly="readonly"  />
			</td>

		</tr>

		<tr><td class="fuentecampo">&nbsp;&nbsp;&nbsp;<%=oLabelValues.getLabel("SSM_LB_WU")%></td>
			<td class="fuentecampo">		

			<select id="selIdWu" class="fuenteapartados" name="idWu" onchange="createChart()" title="<%=oLabelValues.getLabel("SHCO_LB_LIST")%> <%=oLabelValues.getLabel("SSM_LB_WU")%>">
				<option value="<%=sAllWU%>"><%=oLabelValues.getLabel("SHCO_LB_ALL_WU")%></option>
				<m4:loop from="0" to="<%=new Integer(new Integer(sCountWU).intValue()-1).toString()%>">
					<option value="<m4:item m4name="<%=sIdWu%>"/>"><m4:item m4name="<%=sNmWu%>"/></option>
				</m4:loop>
			</select>	
		</td></tr>		

		<tr>
			<td class="fuentecampo"></td>
			<td class="fuentecampo"></td>
			<td class="fuentecampo"></td>
		</tr>

		<tr>
			<td class="fuenteboton" colspan="2">&nbsp;
 			 <a id="btSentAnchor"  title="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oLabelValues.getLabel("SSM_LB_LOAD"))%>"href="javascript:void load();" ><img id="btSentImg"  alt="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oLabelValues.getLabel("SSM_LB_LOAD"))%>" src="/iconos/js_filtrar.gif"  width="36" height="36" /></a>
			 <b id="WarningLoad" class="fuentecampo" style="float:right"></b>
			</td>
		</tr>

		<tr>
			<td class="fuentecampo" colspan="2">
				<div id="divChar" >	</div>
				<img id="imgCharSpinner" src="/iconos/spinner.gif" style="position: absolute; top: 10%;	left: 25%;	z-index:1002;	overflow: auto; display:none" />	
			</td>
		</tr>

		
	</table>
</div>	
<div id="filterString" style="overflow:hidden" class="fuentecampo"></div>

<!-- End Filter. -->


<!-- Result div-->
<div id="divResult" class="fuentecampo" style="display:none">

	<table id="tableButtons"><tr>
		<td id="tdNumRegSelected" class="fuentecampo"></td>
		<td>&nbsp;<a id="btCopyTheoAll" title="<%=Tran_mss_g4_inc_val.getProperty("bt.copyAll")%>" href="javascript:void copyTheoAll();" ><img id="imgbtCopyTheoAll"  alt="<%=Tran_mss_g4_inc_val.getProperty("bt.copyAll")%>" src="/iconos/ic_menu_work_time.gif"   /></a></td>
		
		<td>&nbsp;<a id="tdbtCopyTheoAllFiltered" title="<%=Tran_mss_g4_inc_val.getProperty("bt.copyAllFiltered")%>" href="javascript:void copyTheoAllFiltered();" >
			<img id="imgbtCopyTheoAllFiltered"  alt="<%=Tran_mss_g4_inc_val.getProperty("bt.copyAllFiltered")%>" src="/iconos/ic_menu_work_time.gif"   />
		</a></td>
		
		<td>&nbsp;<a id="btSaveAlerts" title="<%=Tran_mss_g4_inc_val.getProperty("bt.saveAlert")%>" href="javascript:void saveAlerts();" ><img id="imgbtSaveAlerts"  alt="<%=Tran_mss_g4_inc_val.getProperty("bt.saveAlert")%>" src="/iconos/icono_guardar_36_36.gif"  /></a></td>
		<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
		<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
		<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
		<td>&nbsp;<a id="btConfiguration" title="<%=Tran_mss_g4_inc_val.getProperty("bt.conf")%>" href="javascript:void showConfModalDialog();" ><img id="imgbtConfiguration"  alt="<%=Tran_mss_g4_inc_val.getProperty("bt.conf")%>" src="/iconos/ic_menu_my_tools.gif"   /></a></td>
		<td>&nbsp;<a id="btReturnToFilter" title="<%=Tran_mss_g4_inc_val.getProperty("bt.returnToFilter")%>" href="javascript:void returnToFilter();" ><img id="imgbtReturnToFilter"  alt="<%=Tran_mss_g4_inc_val.getProperty("bt.returnToFilter")%>" src="/iconos/icono_anterior_36_36.gif"   /></a></td>
		<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
		<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
		<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>		
		<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
		<td>&nbsp;<a id="btSelectAll" title="<%=Tran_mss_g4_inc_val.getProperty("bt.selectAll")%>" href="javascript:void selectUnselectAll(true);" ><img id="imgbtselectAll"  alt="<%=Tran_mss_g4_inc_val.getProperty("bt.selectAll")%>" src="/iconos//icono_aceptar_todas_36_36.gif"   /></a></td>
		<td>&nbsp;<a id="btUnSelectAll" title="<%=Tran_mss_g4_inc_val.getProperty("bt.unSelectAll")%>" href="javascript:void selectUnselectAll(false);" ><img id="imgbtunSelectAll"  alt="<%=Tran_mss_g4_inc_val.getProperty("bt.unSelectAll")%>" src="/iconos/icono_cancelar_todas_mss_36_36.gif"   /></a></td>
	</tr></table>
	
	</br>

<!-- Alerts table (ValuesTableForm): only the header, the rows will be generated dinamically by function addRowToAlertTable() -->
	<table id="AlertsTable" class="tablaestados" border="0" cellspacing="0"  cellpadding="3" >
		<!-- Header -->
		<tr class = "tablaestadosceldatitulo" style="text-align:center;white-space:nowrap">
			<td id="col_SCO_SELECTED" 	name="col_SCO_SELECTED" ><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_SELECTED"))%> </td>
			<td id="col_STD_ID_HR" 		name="col_STD_ID_HR" style="display:none"	><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("STD_ID_HR"))%></td>			
			<td id="col_SCO_GB_NAME" 	name = "col_SCO_GB_NAME"><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_GB_NAME"))%></td>
			<td id="col_DT_START" 		name="col_DT_START" 	><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("DT_START"))%></td>	
			<td id="col_SCO_COMMENT" 	name="col_SCO_COMMENT" 	><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_COMMENT"))%></td>	
			<td id="col_SCO_ID_REF_MOD" name="col_SCO_ID_REF_MOD" ><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_ID_REF_MOD"))%></td>	
			<td id="col_SCO_ID_WEEK_MDL" name="col_SCO_ID_WEEK_MDL" ><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_ID_WEEK_MDL"))%></td>	
			<td id="col_SCO_ID_DAY_TYPE" name="col_SCO_ID_DAY_TYPE" ><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_ID_DAY_TYPE"))%></td>	
			<td id="col_SCO_TRANSLATED_TIMESLOT_PER_VW" name="col_SCO_TRANSLATED_TIMESLOT_PER_VW" ><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_TRANSLATED_TIMESLOT_PER_VW"))%></td>	
			<td id="col_SCO_WORK_THEO" 	name="col_SCO_WORK_THEO"><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_WORK_THEO"))%></td>	
			<td id="col_SCO_ABS_CAL" 	name="col_SCO_ABS_CAL" 	><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_ABS_CAL"))%></td>	
			<td id="col_SCO_ABS" 		name="col_SCO_ABS" 		><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_ABS"))%></td>	
			<td id="col_SCO_SUP" 		name="col_SCO_SUP" 		><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_SUP"))%></td>	
			<td id="col_SCO_HAS_REQUEST_INCIDENCE" name="col_SCO_HAS_REQUEST_INCIDENCE"><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_HAS_REQUEST_INCIDENCES"))%></td>				
			<td id="col_SCO_GROSS_CLOCK_DEC_HOURS" name="col_SCO_GROSS_CLOCK_DEC_HOURS" ><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_GROSS_CLOCK_DEC_HOURS"))%></td>	
			<td id="col_SCO_TRANSLATED_TS_GROSS_CLOCK" name="col_SCO_TRANSLATED_TS_GROSS_CLOCK"><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_TRANSLATED_TS_GROSS_CLOCK"))%></td>	
			<td id="col_SCO_REAL_WORK" 	name="col_SCO_REAL_WORK"><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_REAL_WORK"))%></td>	
			<td id="col_SCO_TRANSLATED_TS_REAL" name="col_SCO_TRANSLATED_TS_REAL"><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_TRANSLATED_TS_REAL"))%></td>	
			<td id="col_SCO_ID_ALERT" 	name="col_SCO_ID_ALERT"	><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_ID_ALERT"))%></td>	
			<td id="col_SCO_NM_PROPERTY" name="col_SCO_NM_PROPERTY" ><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_NM_PROPERTY"))%></td>	
			<td id="col_SCO_NM_DISPLAY_DLASIFICATION" name="col_SCO_NM_DISPLAY_DLASIFICATION" ><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_NM_DISPLAY_DLASIFICATION"))%></td>	
			<td id="col_SCO_NM_ALERT_SEVERITY_LEVEL" name="col_SCO_NM_ALERT_SEVERITY_LEVEL" ><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_NM_ALERT_SEVERITY_LEVEL"))%></td>	
			<td id="col_SCO_TEXT" 		name="col_SCO_TEXT" 	><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_TEXT"))%></td>	
			<td id="col_SCO_HIDE" 		name="col_SCO_HIDE" 	><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_HIDE"))%></td>	
			<td id="col_SCO_COMMENT_ALERT" name="col_SCO_COMMENT_ALERT" ><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_COMMENT_ALERT"))%></td>	
			<td id="col_ViewDetails"  	name="col_ViewDetails">&nbsp;&nbsp;</td>	
			<% // We have to hide this button, because this funtionality is out of scope in Detail screen %>
			<% // <td id="col_modifTheo" 		name="col_modifTheo">&nbsp;&nbsp;</td>	%>
			
			<td id="col_modifClock" 	name="col_modifClock" >&nbsp;&nbsp;</td>	
			<td id="col_copyTheo" 		name="col_copyTheo">&nbsp;&nbsp;</td>	
			<td id="col_createInc" 		name="col_createInc">&nbsp;&nbsp;</td>

		</tr>		
	</table>

	<% //  Table for windows (we dont paint all the registers loaded) %>	
	<table id="windowsTable" class = "tablanavegacion" border="1" width="100%" cellspacing="0" >
	</table>


<% // Hidden Values table: with a row that will be used like a template %>
<% // The string XXXX will be replace by the row number %>
<table id="HiddenAlertsTable" style="display:none">
	<% // Template row %>
	<tr class = "tablaestadosceldatitulo">
			<td id="col_SCO_SELECTED" name="">
				<input type="hidden" id="hNumReg_XXXX"  />
				<input type="hidden" id="hNumRegClock_XXXX"  />				
				<input type="checkbox" id="chkSCO_SELECTED_XXXX" checked="checked" onclick="checkSelected('XXXX')" />
				<input type="hidden" id="hSTD_ID_HR_XXXX"  />
				<input type="hidden" id="hSTD_ID_HR_hinc_XXXX"  />
				<input type="hidden" id="hSTD_OR_PER_XXXX"  />
				<input type="hidden" id="hSTD_OR_PER_hinc_XXXX"  />				
			</td>
			<% // We have to hide this field, because now we don't want to show the ID in ESS
			// <td id="col_STD_ID_HR" name="col_STD_ID_HR" style="display:none" >
			//	<p id="STD_ID_HR_XXXX" style="display:none" ></p>
			//</td>	%>		
			<td id="col_SCO_GB_NAME" name="col_SCO_GB_NAME"><p id="SCO_GB_NAME_XXXX"></p></td>
			<td id="col_DT_START" name="col_DT_START">
				<p id="DT_START_XXXX"></p>
				<input type="hidden" id="hDT_START_XXXX"  />
				<input type="hidden" id="hDT_START_Fix_XXXX"  />
			</td>	
			<td id="col_SCO_COMMENT" name="col_SCO_COMMENT"><p id="SCO_COMMENT_XXXX"></p></td>	
			<td id="col_SCO_ID_REF_MOD" name="col_SCO_ID_REF_MOD"><p id="SCO_ID_REF_MOD_XXXX"></p></td>	
			<td id="col_SCO_ID_WEEK_MDL" name="col_SCO_ID_WEEK_MDL"><p id="SCO_ID_WEEK_MDL_XXXX"></p></td>	
			<td id="col_SCO_ID_DAY_TYPE" name="col_SCO_ID_DAY_TYPE"><p id="SCO_ID_DAY_TYPE_XXXX"></p></td>	
			<td id="col_SCO_TRANSLATED_TIMESLOT_PER_VW" name="col_SCO_TRANSLATED_TIMESLOT_PER_VW"><p id="SCO_TRANSLATED_TIMESLOT_PER_VW_XXXX"></p></td>	
			<td id="col_SCO_WORK_THEO" name="col_SCO_WORK_THEO"><p id="SCO_WORK_THEO_XXXX"></p></td>	
			<td id="col_SCO_ABS_CAL" name="col_SCO_ABS_CAL"><p id="SCO_ABS_CAL_XXXX"></p></td>	
			<td id="col_SCO_ABS" name="col_SCO_ABS"><p id="SCO_ABS_XXXX"></p></td>	
			<td id="col_SCO_SUP" name="col_SCO_SUP"><p id="SCO_SUP_XXXX"></p></td>	
			<td id="col_SCO_HAS_REQUEST_INCIDENCE" name="col_SCO_HAS_REQUEST_INCIDENCE"><input type="checkbox" id="SCO_HAS_REQUEST_INCIDENCE_XXXX"  disabled="disabled" readonly="readonly" /></td>				
			<td id="col_SCO_GROSS_CLOCK_DEC_HOURS" name="col_SCO_GROSS_CLOCK_DEC_HOURS"><p id="SCO_GROSS_CLOCK_DEC_HOURS_XXXX"></p></td>	
			<td id="col_SCO_TRANSLATED_TS_GROSS_CLOCK" name="col_SCO_TRANSLATED_TS_GROSS_CLOCK"><p id="SCO_TRANSLATED_TS_GROSS_CLOCK_XXXX"></p></td>	
			<td id="col_SCO_REAL_WORK" name="col_SCO_REAL_WORK"><p id="SCO_REAL_WORK_XXXX"></p></td>	
			<td id="col_SCO_TRANSLATED_TS_REAL" name="col_SCO_TRANSLATED_TS_REAL"><p id="SCO_TRANSLATED_TS_REAL_XXXX"></p></td>	
			<td id="col_SCO_ID_ALERT" name="col_SCO_ID_ALERT"><p id="SCO_ID_ALERT_XXXX"></p></td>	
			<td id="col_SCO_NM_PROPERTY" name="col_SCO_NM_PROPERTY"><p id="SCO_NM_PROPERTY_XXXX"></p></td>	
			<td id="col_SCO_NM_DISPLAY_DLASIFICATION" name="col_SCO_NM_DISPLAY_DLASIFICATION"><p id="SCO_NM_DISPLAY_DLASIFICATION_XXXX"></p></td>	
			<td id="col_SCO_NM_ALERT_SEVERITY_LEVEL" name="col_SCO_NM_ALERT_SEVERITY_LEVEL">
				<p id="SCO_NM_ALERT_SEVERITY_LEVEL_XXXX"></p>
			</td>	
			<td id="col_SCO_TEXT" name="col_SCO_TEXT"><p id="SCO_TEXT_XXXX"></p></td>	
			<td id="col_SCO_HIDE" name="col_SCO_HIDE"><input type="checkbox" id="SCO_HIDE_XXXX"  /></td>	
			<td id="col_SCO_COMMENT_ALERT" name="">
				<input type="text" id="SCO_COMMENT_ALERT_XXXX" />
			</td>
			<td id="col_ViewDetails" name="col_ViewDetails">&nbsp;
				<a  id="anchorViewDetails_XXXX" href="javascript:viewDetails(1,XXXX);" tabindex="-1" >
					<img src="/iconos/icono_editar_mss_11_9.gif"  title="<%=Tran_mss_g4_inc_val.getProperty("bt.details")%>">
				</a>
			</td>	
			<% // We have to hide this button, because this funtionality is out of scope in Detail screen
				//<td id="col_modifTheo" name="col_modifTheo">&nbsp;
				//	<a  id="anchormodifThe_XXXX" href="javascript:viewDetails(2,XXXX);" tabindex="-1" >		
				//		<img src="/iconos/ic_details_16_16.gif"  title="Tran_mss_g4_inc_val.getProperty("bt.theo")">
				//	</a>
				//</td>	
			 %>
			<td id="col_modifClock" name="col_modifClock">&nbsp;
				<a  id="anchormodifClock_XXXX" href="javascript:viewDetails(3,XXXX);" tabindex="-1" >					
					<img id="imganchormodifClock_XXXX" src="/iconos/icono_finished_task_16_16.gif"  width="16" height="16" title="<%=Tran_mss_g4_inc_val.getProperty("bt.clock")%>">
				</a>
			</td>	
			<td id="col_copyTheo" name="col_copyTheo">&nbsp;
				<a  id="anchorcopyTheo_XXXX" href="javascript:copyTheoForOne('XXXX');" tabindex="-1" >
					<img id="imgcopyTheo_XXXX" src="/iconos/ImageExecuteAction.gif" width="16" height="16"  title="<%=Tran_mss_g4_inc_val.getProperty("bt.copyTheo")%>">
				</a>
			</td>	
			<td id="col_createInc" name="col_createInc">&nbsp;
				<a  id="anchorCreateInc_XXXX" href="javascript:openInc(4,XXXX);" tabindex="-1" >		
					<img id="imgCreateInc_XXXX" src="/iconos/lu_nor_more_12.png"  title="<%=Tran_mss_g4_inc_val.getProperty("bt.createInc")%>">
				</a>
				<a  id="anchorCancelAbs_XXXX" href="javascript:openInc(2,XXXX);" tabindex="-1" >		
					<img id="imgCancelAbs_XXXX" src="/iconos/icon_eliminar_mss_11_12.gif"  title="<%=Tran_mss_g4_inc_val.getProperty("bt.cancelAbs")%>">
				</a>				
				<a  id="anchorCancelPres_XXXX" href="javascript:openInc(3,XXXX);" tabindex="-1" >		
					<img id="imgCancelPres_XXXX" src="/iconos/icon_eliminar_mss_11_12.gif"  title="<%=Tran_mss_g4_inc_val.getProperty("bt.cancelPres")%>">
				</a>				

				<a  id="anchorRequestAbsence_XXXX" href="javascript:openInc(0,XXXX);" tabindex="-1" >		
					<img id="imgRequestAbsence_XXXX" src="/iconos/gtaChoice.png"  title="<%=Tran_mss_g4_inc_val.getProperty("bt.reqAbs")%>">
				</a>	
				<a  id="anchorRequestPresence_XXXX" href="javascript:openInc(1,XXXX);" tabindex="-1" style="display:none" >		
					<img id="imgRequestPresence_XXXX" src="/iconos/gtaChoice.png"  title="<%=Tran_mss_g4_inc_val.getProperty("bt.reqPres")%>">
				</a>					
			</td>

	</tr>
</table>	

</div>
</form>

<!-- Modal dialog div, for configuration -->
<div id="divConf" class="white_content"  style="width:570px;height:380px;" >
	<form action="" name="confForm" id="confForm">
	
	<div style="float:right;width:10px;" >
		<a id="btConfCancel2" title="<%=Tran_mss_g4_inc_val.getProperty("conf.close")%>"href="javascript: closeConfModalDialog();" >
		<img id="btConfCancelImg2" alt="<%=Tran_mss_g4_inc_val.getProperty("conf.close")%>"src="/iconos/js_eliminar_peq.gif"  width="16" height="16" />
		</a>
	</div>
	
	<table class = "tablaestados"  width="100%" cellspacing="0" border="0" >
	<tr><td colspan="2">
		<!-- Description -->			
		<div class="descripcionfuncional">
			<%=Tran_mss_g4_inc_val.getProperty("conf.desc")%>
			<br/><br/>
		</div>
	</tr></td>			
	<tr>
		<td class="fuentecampo" colspan="2"><input type="checkbox" name="sReloadAfterChg" id="sReloadAfterChg" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_RELOAD_AFTER_CHG"))%></td>
	</tr>
	<tr>&nbsp;</tr>
	<tr>
		<td class="fuentecampo"><input type="checkbox" name="sViewNmEmpl" id="sViewNmEmpl" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_VIEW_GB_NAME"))%></td>
		<td class="fuentecampo"><input type="checkbox" name="sViewHasRequestInc" id="sViewHasRequestInc" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_VIEW_HAS_REQUEST_INCIDENCE"))%> </td>		
	</tr>
	<tr>
		<td class="fuentecampo"><input type="checkbox" name="sViewComment" id="sViewComment" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_VIEW_COMMENT"))%></td>
		<td class="fuentecampo"><input type="checkbox" name="sViewGrosClock" id="sViewGrosClock" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_VIEW_GROSS_CLOCK_DEC_HOURS"))%> </td>		
	</tr>
	<tr>
		<td class="fuentecampo"><input type="checkbox" name="sViewIdRefMod" id="sViewIdRefMod" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_VIEW_ID_REF_MOD"))%></td>
		<td class="fuentecampo"><input type="checkbox" name="sViewClockTS" id="sViewClockTS" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_VIEW_TRANS_TS_GROSS_CLOCK"))%> </td>		
	</tr>
	<tr>
		<td class="fuentecampo"><input type="checkbox" name="sViewIdWeekModel" id="sViewIdWeekModel" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_VIEW_ID_WEEK_MDL"))%></td>
		<td class="fuentecampo"><input type="checkbox" name="sViewReal" id="sViewReal" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_VIEW_REAL_WORK"))%> </td>		
	</tr>
	<tr>
		<td class="fuentecampo"><input type="checkbox" name="sViewIdDayType" id="sViewIdDayType" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_VIEW_ID_DAY_TYPE"))%></td>
		<td class="fuentecampo"><input type="checkbox" name="sViewRealTS" id="sViewRealTS" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_VIEW_TRANS_TS_REAL"))%> </td>		
	</tr>
	<tr>
		<td class="fuentecampo"><input type="checkbox" name="sViewTheorTS" id="sViewTheorTS" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_VIEW_TRANSLATED_TIMESLOT_P"))%></td>
		<td class="fuentecampo"><input type="checkbox" name="sViewIDAlert" id="sViewIDAlert" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_VIEW_ID_ALERT"))%> </td>		
	</tr>
	<tr>
		<td class="fuentecampo"><input type="checkbox" name="sViewWorkTheo" id="sViewWorkTheo" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_VIEW_WORK_THEO"))%></td>
		<td class="fuentecampo"><input type="checkbox" name="sViewNMProp" id="sViewNMProp" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_VIEW_NM_PROPERTY"))%> </td>		
	</tr>	
	<tr>
		<td class="fuentecampo"><input type="checkbox" name="sViewAbsCal" id="sViewAbsCal" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_VIEW_ABS_CAL"))%></td>
		<td class="fuentecampo"><input type="checkbox" name="sViewAlertClasification" id="sViewAlertClasification" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_VIEW_ID_DISPLAY_CLASIFICAT"))%> </td>		
	</tr>	
	<tr>
		<td class="fuentecampo"><input type="checkbox" name="sViewAbs" id="sViewAbs" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_VIEW_ABS"))%></td>
		<td class="fuentecampo"><input type="checkbox" name="sViewHide" id="sViewHide" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_VIEW_HIDE"))%> </td>		
	</tr>	
	<tr>
		<td class="fuentecampo"><input type="checkbox" name="sViewSup" id="sViewSup" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_VIEW_SUP"))%></td>
		<td class="fuentecampo"><input type="checkbox" name="sViewCommentAlert" id="sViewCommentAlert" value="" /> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_VIEW_COMMENT_ALERT"))%> </td>		
	</tr>	

	
	<tr><td class="fuenteboton" colspan="2">
		<br/>
		&nbsp;
		<a id="btConfSave" title="<%=Tran_mss_g4_inc_val.getProperty("conf.saveAndClose")%>" href="javascript: saveAndCloseConfModalDialog();" >
		<img id="imgbtConfSave" alt="<%=Tran_mss_g4_inc_val.getProperty("conf.saveAndClose")%>" src="/iconos/icono_aceptar_mss_36_36.gif"  width="36" height="36" />
		</a>
		&nbsp;&nbsp;
		<a id="btConfClose" title="<%=Tran_mss_g4_inc_val.getProperty("conf.close")%>"href="javascript: closeConfModalDialog();" >
		<img id="imgbtConfClose" alt="<%=Tran_mss_g4_inc_val.getProperty("conf.close")%>"src="/iconos/icono_deshacer_mss_36_36.gif"  width="36" height="36" />
		</a>
		<br/>
		
	</td></tr>
	</table>
	</form>
</div>

<!-- Modal dialog div, for working image -->
<div id="divLightWorking" class="white_content">
	<img id="imgWorking" alt="Working"src="/iconos/spinner.gif"  width="36" height="36" />	
</div>
<!-- For all the modal dialog div, the black overlay -->
<div id="fade" class="black_overlay"></div>

<!-- Pie de pagina -->	


</body>
<m4:endpage/>
</html>