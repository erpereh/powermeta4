<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<!-- GTA view timesheet for employees in MSS: mss_g4_gta_timesheet.jsp -->
<!-- Librerias Java. Obligatorio -->
<head><%@ page import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.savparams.*" %>
      <%@ page import="com.meta4.valuetables.basic.*, com.meta4.utilities.*,com.meta4.configuration.*,com.meta4.taglib.util.*" %>
<!-- Hoja de Estilo general. Obligatorio-->
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<!-- Librerias JavaScript. Obligatorio -->
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/funciones_filter.js"></script>
<script type="text/javascript" src="/libreria/mootools-1.2.4.2-bis.js"></script> <%  //  The version 1.3 has a bug http://weblog.scanyours.com/2010/10/29/howto-backwards-compatibility-for-request-json-in-mootools-1-3/%>
<script type="text/javascript" src="/libreria/sco_incidences_link.js"></script>
<script type="text/javascript" src="/library/m4valdata.js"></script>
<script type="text/javascript" src="/library/m4val.js"></script>
<script type="text/javascript" src="/library/m4gen.js"></script>
<script type="text/javascript" src="/library/m4gen_mt.js"></script>
<script type="text/javascript" src="/libreria/meta4ajax.js"></script>
<script type="text/javascript" src="/libreria/meta4list.js"></script>

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
	String sChannelID   	= "SCO_GTA_GENERATE_EV"; 
	String sLoadMainMethod 	= sChannelID + "!SHCO_GN_ROOT.SSM_LOAD_DEFAULT";
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

	String sMainNode 		= "SCO_GTA_GENERATE_EV";
	String sMainDefRoot		= sChannelID + "!" + sMainNode + "[*]";	
	String sComunMain 		= sMainNode + ":" + sChannelID + "!" + sMainNode + "[&VAR.m4lix]" + ".";
	String sComunMainNode	= sMainNode + ":" + sChannelID + "!" + sMainNode + "[0]" + ".";	
	String sDtStart 		= sComunMainNode + "DT_START_P";
	
	String sTimeSheetStatusNode		= "SSM_X_STATUS_TIMESHEET";
	String sOutDefTimeSheetStatus	= sChannelID + "!" + sTimeSheetStatusNode + "[*]";			
	String sComunTimeSheetStatus	= sTimeSheetStatusNode + ":" + sChannelID + "!" + sTimeSheetStatusNode + "[&VAR.m4lix]" + ".";
	String sIdTimeSheetStatus		= sComunTimeSheetStatus + "SCO_ID_STATUS_TIMESHEET";
	String sNmTimeSheetStatus		= sComunTimeSheetStatus + "SCO_NM_STATUS_TIMESHEET";		
	
	

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
<m4:outputdef m4alias="<%=sTimeSheetStatusNode%>">  <m4:param name="m4name0" value="<%=sOutDefTimeSheetStatus%>"/>  </m4:outputdef>
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
	
    int nCountTimeSheetStatus = Oper.getCount(sTimeSheetStatusNode,sChannelID,sTimeSheetStatusNode);
	String	sCountTimeSheetStatus = String.valueOf(nCountTimeSheetStatus);		
		
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
	
%>
<!-- End of: Meta4Object Load -->

<!-- javascript functions -->
<script type="text/javascript">

	//global variables
	var numRegInWindow = 20;
		
	var aRowsLoaded = new Array(); 
	
	//to hidde/show
	var showMode = 'table-cell';
	if (document.all) showMode='block';	 // However, IE5 at least does not render table cells correctly using the style 'table-cell', but does when the style 'block' is used, so handle this
	
	//number of register selected
	var nNumRegSelected = 0;
	
	function init(){
		//executed when load the page
				
		var nCountWU = <%=sCountWU%>; 
		//If there are no WU, we disabled all
		if (nCountWU == 0){
		
			alert("<%=Tran_mss_g4_inc_val.getProperty("desc.noWU")%>");
			$('btSentAnchor').set('href', 'javascript:');
			$('btSentImg').set('style', 'opacity:0.4;filter:alpha(opacity=40)');			
		}
		
		$('dDtStart').focus();
		
	}	
	
	//autocompletion lists
	window.addEvent('domready', function () {

		var oListEmpl = new M4List({//Initialize Employee list
			meta4Object: 'SRCO_PA_TR_HR_PERIOD',
			nodeQBF: 'SRCO_PA_QBF_HR_PERIOD',
			nodeTR: 'SRCO_PA_TR_HR_PERIOD',
			listMethod: 'LIST',
			initValue: '',
			eventAttributesChanged: 'onChangedEmpl',
			secondaryTI: '',
			appStart: 'dDtStart',
			appEnd: 'dDtStart',			
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
		
	  $('SRCO_PA_QBF_HR_PERIOD.SCO_GB_NAME').addEvent(
	   'onChangedEmpl', 
		 function() {
			$('txtIdEMPLOYEE_filter').value = this.get('m4STD_ID_HR');
			$('txtOrEMPLOYEE_filter').value = this.get('m4STD_OR_HR_PERIOD');
		 }
	  );		
		
  });	
	
	
	function viewTimesheet(sNumCurReg){
		//link to the details screen

		eval("var sIdHR = $('hSTD_ID_HR_hinc_"+sNumCurReg+"').value");	
		eval("var sOrPer = $('hSTD_OR_PER_hinc_"+sNumCurReg+"').value");	
		eval("var sDateFF = $('hDT_START_P_Fixed_"+sNumCurReg+"').value");
	
		window.open('/servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_timesheet_employee.jsp?SCO_GTA_ARG_DATE_TO_STUDY='+sDateFF+'&sIdHr='+sIdHR+'&sOrPer='+sOrPer,'popUpForm','toolbar=no,location=no,status=yes,directories=no,menubar=no,scrollbars=yes,resizable=yes,width=830,height=600,top='+(screen.height-600)/2.5+',left='+(screen.width-830)/2.5);		
	
	}
	
	function returnToFilter(){

		$('filterString').innerHTML = "";
		$('filterString').style.display = 'none';
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
			function(){ $('divDescription').style.height = 'auto'; }
		);		
		
	}	
	
	
	function checkSelected(index){
		
		(eval("$('chkSCO_SELECTED_"+index+"').checked == true")) ? nNumRegSelected++ : nNumRegSelected-- ; 
		setSelectedText(nNumRegSelected);
	}		
	
	function selectUnselectAll(bSelect){

		var aRows = new Array();  var	nNumRow = 0; 
		for (jnum=1;jnum<$('TimesheetTable').rows.length;jnum++){
			eval("var isChecked = $('chkSCO_SELECTED_"+jnum+"').checked");
			eval("var isdisabled = $('chkSCO_SELECTED_"+jnum+"').disabled");
			if (isChecked != bSelect && isdisabled==false){
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
	
	function startAction(){
		$('btSentImg').style.display = 'none';
		$('imgbtSendEmailAll').style.display = 'none';
		$('imgbtReturnToFilter').src = "/iconos/cargando.gif";
	}	
	
	function endAction(){
		$('btSentImg').src = "/iconos/js_filtrar.gif";
		$('btSentImg').style.display = "inline";
		$('imgbtSendEmailAll').src = "/iconos/js_email.gif";
		$('imgbtSendEmailAll').style.display = "inline";
		$('imgbtReturnToFilter').src = "/iconos/icono_anterior_36_36.gif";		
	}	
	

	function createFilterString(){
		var sCode = "";
		sCode += "<%=oLabelValues.getLabel("SSM_LB_DATE")%> = ".bold() ;
		sCode += $('dDtStart').value ;

		if ($('selTimeSheetStatus').options[$('selTimeSheetStatus').selectedIndex].value!=""){
			sCode += ", "+"<%=oLabelValues.getLabel("SHCO_LB_ID_STATUS_TIMESHEET")%> = ".bold();
			sCode += $('selTimeSheetStatus').options[$('selTimeSheetStatus').selectedIndex].text;
		}

		sCode += (!($('txtIdEMPLOYEE_filter').value=="" || $('txtIdEMPLOYEE_filter').value=="null"))?", "+"<%=oLabelValues.getLabel("SSM_LB_EMPLOYEE")%> = ".bold()+$('SRCO_PA_QBF_HR_PERIOD.SCO_GB_NAME').value :"";
		sCode += ($('selIdWu').options[$('selIdWu').selectedIndex].value!="__ALL__")?", "+"<%=oLabelValues.getLabel("SSM_LB_WU")%> = ".bold()+$('selIdWu').options[$('selIdWu').selectedIndex].innerHTML :""

		sCode += "</br></br></br>"
		return sCode
	}		
	
	function load(){
		//load the Timesheet that match the filter
		$('divResult').style.display = showMode; 
		jsonActions("1","");
	}
	
	function sendEmail(sNumCurReg){
		//send email for an employee
		jsonActions("2",sNumCurReg);
	}

	function sendEmailAll(){
		//send email for all the employees selected
		jsonActions("3","");
	}

	function jsonActions(sActionTp,sNumCurReg){
		//make all the json actions in the page
		
		// sActionTp:
		// 1: Load the timesheet that match the filter
		// 2: Send an email for an employee
		// 3: Send an email for all the employees selected
		
		//efects
		$('divDescription').tween('height', 20);
		$('filterString').innerHTML = createFilterString();
		$('filterString').style.display = 'inline';
		$('filterFormFields').tween('height', 18);		
		//$('filterFormFields').style.height = 18;		
			
		//parameters of the call
		var sUrl = "/servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_timesheet_json_actions.jsp";
		var sParams = "ActionTp="+sActionTp ;
		if (sNumCurReg.length > 0){sParams += "&NumCurReg=" + eval("$('hNumReg_"+sNumCurReg+"').value");}	
		sParams += "&DtStart="+$('dDtStart').value ;
		sParams += "&ID_STATUS="+$('selTimeSheetStatus').options[$('selTimeSheetStatus').selectedIndex].value ;
		sParams += "&ID_HR="+$('txtIdEMPLOYEE_filter').value + "&OR_PER="+$('txtOrEMPLOYEE_filter').value + "&IdWu="+$('selIdWu').options[$('selIdWu').selectedIndex].value ;	
		
		//for gobal action, we must take the registers selected
		if(sActionTp=="3"){
			var aRows = new Array();  var	nNumRow = 0; 
			for (jnum=1;jnum<$('TimesheetTable').rows.length;jnum++){
				eval("var isChecked = $('chkSCO_SELECTED_"+jnum+"').checked");
				aRows[nNumRow]=isChecked;
				nNumRow++;
			}						
			var sJsonToSend = JSON.encode(aRows);
			sParams += "&aRows="+sJsonToSend
		}
		
		//prompt("url to send ",sUrl + '?' + sParams); //descoment this line to capure the parameters and debug the destination page		

		var jsonRequest = new Request.JSON({
			url: sUrl,
			data: sParams,
			onCancel: function(jsonObj) {
				alert('Error: findValueForEmployeeAndConcept: Request.JSON oncancel');
				endAction();
			},
			onSuccess: function(jsonObj) {

				if (jsonObj!=null){
					if(jsonObj.sLogErrorMsg!=""){
						alert("<%=oLabelValues.getLabel("SHCO_LB_TIT_ERROR")%> : "+jsonObj.sLogErrorMsg);
					}
					
					//if we have to load
					if (sActionTp=="1"){
					
						aRowsLoaded = jsonObj;
						putRegistersInTable(0);						
					
						//change the heigth of the iframe where this page is inserted, only to increase the size
						//alert(parent.$('pageBodyFrame').getStyle('height').toInt() +" vs " + parent.$('pageBodyFrame').contentWindow.document.body.scrollHeight)					
						if (parent.$('pageBodyFrame') && parent.$('pageBodyFrame').contentWindow.document.body.scrollHeight > parent.$('pageBodyFrame').getStyle('height').toInt()){
							parent.$('pageBodyFrame').style.height = parent.$('pageBodyFrame').contentWindow.document.body.scrollHeight + 'px'; 
						}
					}
					
				}else{
					alert('Error: jsonActions: onSuccess. Return object is null');
				}			
				
				endAction();
			},
			onFailure: function(xhr) {
				alert('Error: jsonActions: Request.JSON onFailure' + xhr.responseText);
				endAction();
			},
			onException: function(jsonObj) {
				alert('Error: jsonActions: Request.JSON onException');
				endAction();
			}			
		});
		jsonRequest.post();
		startAction();
		
	}
	
	function putRegistersInTable(nWindow){
		//put the registers loaded into the table
		//argument: nWindow the number of the window to load, from 0 to n-1

		//first we clean the table
		cleanTimesheetTable();		
		
		var indexIni = nWindow * numRegInWindow;
		var indexFin = Math.min((nWindow+1) * numRegInWindow,aRowsLoaded.ret.length);
		
		//num registers selected
		////nNumRegSelected = indexFin-indexIni;
		nNumRegSelected = 0;
		
		//we loop the result array and put each result in a row
		for (i=indexIni;i<indexFin;i++){

			$('hNumReg_XXXX').value = i;
			//$('STD_ID_HR_XXXX').innerHTML =  aRowsLoaded.ret[i].sIdHR + "-" + aRowsLoaded.ret[i].nOrHrPer;
			$('hSTD_ID_HR_XXXX').value = aRowsLoaded.ret[i].sIdHR;
			$('hSTD_ID_HR_hinc_XXXX').value = aRowsLoaded.ret[i].sIdHRhinc;
			$('hSTD_OR_PER_XXXX').value = aRowsLoaded.ret[i].nOrHrPer;
			$('hSTD_OR_PER_hinc_XXXX').value = aRowsLoaded.ret[i].sOrHrPerhinc;
			$('hDT_START_P_Fixed_XXXX').value = aRowsLoaded.ret[i].sDtStartFilFix;
		
			$('SCO_GB_NAME_XXXX').innerHTML =  aRowsLoaded.ret[i].sNmEmpl;
			$('SCO_ID_REF_MOD_XXXX').innerHTML =  aRowsLoaded.ret[i].sIdRefMod;
			$('SCO_NM_STATUS_TIMESHEET_XXXX').innerHTML =  aRowsLoaded.ret[i].sNMStatus;

			//mail buttons
			if (aRowsLoaded.ret[i].sIDStatus!=="00"&&aRowsLoaded.ret[i].sIDStatus!=="01") {
				$('anchorsendEmail_XXXX').set('href', 'javascript:');
				$('chkSCO_SELECTED_XXXX').set('disabled','disabled');
				$('chkSCO_SELECTED_XXXX').checked = false;
				$('imgsendEmail_XXXX').set('style', 'opacity:0.4;filter:alpha(opacity=40)');					
				////nNumRegSelected--;
			}else{
				$('anchorsendEmail_XXXX').set('href', "javascript:sendEmail('XXXX')");
				$('chkSCO_SELECTED_XXXX').checked = true;	
				$('imgsendEmail_XXXX').set('style', '');		
				$('chkSCO_SELECTED_XXXX').set('disabled','');
			}
			
			addRowToTimesheetTable();
			
		}
		setSelectedText(nNumRegSelected);
		paintWindowsTable(nWindow);
		selectUnselectAll(true);
		if (aRowsLoaded.ret.length > 0 && $('chkSCO_SELECTED_1').get('disabled')==false) { $('chkSCO_SELECTED_1').focus() ; }
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
	
	
	function cleanTimesheetTable(){
		//Delete all the rows in the Timesheet table, except the header, and all the registers in the window table
		
		var nNumRows = $('TimesheetTable').rows.length;
		for (i=nNumRows-1;i>0;i--){
			$('TimesheetTable').deleteRow(i);
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
	
	function addRowToTimesheetTable(){
	
		var tableOrig = $('HiddenTimesheetTable');
		var tableDest = $('TimesheetTable');
		
		var rowCount = tableDest.rows.length;
		var row = tableDest.insertRow(rowCount);
		
		//row.className = "tablaestadosceldatitulo"
		var colCount = tableOrig.rows[0].cells.length;
		var code;

		for (var i=0; i<colCount; i++) {
			var newcell = row.insertCell(i);
			newcell.id = tableOrig.rows[0].cells[i].id;
			newcell.name = tableOrig.rows[0].cells[i].name;
			newcell.display = tableOrig.rows[0].cells[i].display;
			newcell.className = "fuentevalor";
			newcell.style.whiteSpace ="nowrap";
			newcell.style.textAlign = "center";
			//newcell.checked = tableOrig.rows[0].cells[i].checked;
			code = tableOrig.rows[0].cells[i].innerHTML;
			code = code.replace(/XXXX/g,tableDest.rows.length-1);	
			newcell.innerHTML = code;

		}
	}
		
	function nextPrevWeek(next){
		//move the start date to one week after or before of the current start date
		// and put end date one week after of the finnal start date
		sDtStart = $('dDtStart').value;
		if (sDtStart!=""){
			$('dDtStart').value = (next==1) ? m4AddDays(sDtStart,7) : m4AddDays(sDtStart,-7);	
		}
	
	}
	
</script>

<title><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oLabelValues.getLabel("SHCO_LB_PAGE_TITLE"))%></title>

</head>
<body onload="init()">

<!-- Tabla de Descripcion. Obligatoria. Siempre una 3*2: un titulo de la pagina + un icono + una descripcion + opciones -->
<div id="divDescription" style="overflow:hidden; height:auto" >
<table width="100%">
	<tr>
		<!-- Titulo funcional de la pagina -->
		<td class="titulofuncional" colspan="2"><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oLabelValues.getLabel("SHCO_LB_PAGE_TITLE"))%></td>
	</tr>
	<tr>
		<td><img src="/iconos/noname_listado_110_125.gif"  alt="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oLabelValues.getLabel("SHCO_LB_PAGE_TITLE"))%>" /></td>
		<td>
			<!-- Description -->			
			<div class="descripcionfuncional">
				<%=Tran_mss_g4_inc_val.getProperty("ts.desc.line1")%> "<%=sRespTpNm%>"
				<%if (sWuVisibility.equals("1")){%> <%=Tran_mss_g4_inc_val.getProperty("ts.desc.line2")%> <%}%>
				<br/>

			</div>
		</td>	
	</tr>
</table>
</div>
<!-- Fin de Tabla de descripcion. -->

<!-- Filter (filterForm) -->
<form action="" method="post" name="NombreFormulario" id="NombreFormulario" >

<div id="filterFormFields" style="overflow:hidden; height:auto" >
	<table id="tableFilterForm" class = "tablaestados" width="100%" cellspacing="0" border="0" >
		<tr class = "tablaestadosceldatitulo">
			<td><%=oLabelValues.getLabel("SSM_FILTER")%></td>
			<td ></td>			
			<td ></td>
		</tr>

		<tr>
			<td class="fuentecampo">*&nbsp;<%=oLabelValues.getLabel("SSM_LB_DATE")%></td>
			<td class="fuentecampo">			
				<input class="fuenteformulario" type="text" name="dDtStart" id="dDtStart" title="<%=oLabelValues.getLabel("SHCO_LB_WRITE")%> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("DT_START_P"))%>" maxlength="10" size="10" value="<m4:item m4name="<%=sDtStart%>"/>"  />&nbsp;
				<a href="javascript:m4calendario(m4objeto('NombreFormulario','dDtStart'))" title="<%=oLabelValues.getLabel("SHCO_LB_WRITE")%> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("DT_START_P"))%>"><img src="/iconos/icono_calendario_14_18.gif" alt="<%=oLabelValues.getLabel("SHCO_LB_WRITE")%> <%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("DT_START_P"))%>" /></a>
							
				&nbsp;&nbsp;&nbsp;&nbsp;
				<a  href="javascript:nextPrevWeek(0)" title="<%=oLabelValues.getLabel("SSM_LB_PREV_WEEK")%>"><img src="/iconos/icono_formacion_eliminar_11_12.gif" alt="<%=oLabelValues.getLabel("SSM_LB_PREV_WEEK")%>" /></a>
				&nbsp;&nbsp;
				<a  href="javascript:nextPrevWeek(1)" title="<%=oLabelValues.getLabel("SSM_LB_NEXT_WEEK")%>"><img src="/iconos/icono_formacion_anadir_11_12.gif" alt="<%=oLabelValues.getLabel("SSM_LB_NEXT_WEEK")%>" /></a>				
			</td>		
		</tr>		
		
		<tr><td class="fuentecampo"></td><td class="fuentecampo">&nbsp;</td></tr>
		
		<tr>
			<td class="fuentecampo">&nbsp;&nbsp;&nbsp;<%=oLabelValues.getLabel("SHCO_LB_ID_STATUS_TIMESHEET")%></td>			
			<td class="fuentecampo">
				<select id="selTimeSheetStatus"  class="fuenteapartados" name="selTimeSheetStatus" title="<%=oLabelValues.getLabel("SHCO_LB_LIST")%> <%=oLabelValues.getLabel("SHCO_LB_ID_STATUS_TIMESHEET")%>">
					<option value=""></option>
					<m4:loop from="0" to="<%=new Integer(new Integer(sCountTimeSheetStatus).intValue()-1).toString()%>">
						<option value="<m4:item m4name="<%=sIdTimeSheetStatus%>"/>"><m4:item m4name="<%=sNmTimeSheetStatus%>"/></option>
					</m4:loop>
				</select>	
			</td>
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

			<select id="selIdWu" class="fuenteapartados" name="idWu"  title="<%=oLabelValues.getLabel("SHCO_LB_LIST")%> <%=oLabelValues.getLabel("SSM_LB_WU")%>">
				<option value="<%=sAllWU%>"><%=oLabelValues.getLabel("SHCO_LB_ALL_WU")%></option>
				<m4:loop from="0" to="<%=new Integer(new Integer(sCountWU).intValue()-1).toString()%>">
					<option value="<m4:item m4name="<%=sIdWu%>"/>"><m4:item m4name="<%=sNmWu%>"/></option>
				</m4:loop>
			</select>	
		</td><tr>		

		<tr>
			<td class="fuentecampo"></td>
			<td class="fuentecampo"></td>
		</tr>

		<tr>
			<td class="fuenteboton" colspan="2">&nbsp;
 			 <a id="btSentAnchor"  title="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oLabelValues.getLabel("SSM_LB_LOAD"))%>"href="javascript:void load();" ><img id="btSentImg"  alt="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oLabelValues.getLabel("SSM_LB_LOAD"))%>" src="/iconos/js_filtrar.gif"  width="36" height="36" /></a>
			 <b id="WarningLoad" class="fuentecampo" style="float:right"></b>
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
		<td>&nbsp;<a id="btSendEmailAll" title="<%=Tran_mss_g4_inc_val.getProperty("ts.bt.senEmailAll")%>" href="javascript:void sendEmailAll();" ><img id="imgbtSendEmailAll"  alt="<%=Tran_mss_g4_inc_val.getProperty("ts.bt.senEmailAll")%>" src="/iconos/js_email.gif"  width="36" height="36" /></a></td>
		<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
		<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
		<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
		<td>&nbsp;<a id="btReturnToFilter" title="<%=Tran_mss_g4_inc_val.getProperty("bt.returnToFilter")%>" href="javascript:void returnToFilter();" ><img id="imgbtReturnToFilter"  alt="<%=Tran_mss_g4_inc_val.getProperty("bt.returnToFilter")%>" src="/iconos/icono_anterior_36_36.gif"   /></a></td>
		<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
		<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
		<td>&nbsp;<a id="btSelectAll" title="<%=Tran_mss_g4_inc_val.getProperty("bt.selectAll")%>" href="javascript:void selectUnselectAll(true);" ><img id="imgbtselectAll"  alt="<%=Tran_mss_g4_inc_val.getProperty("bt.selectAll")%>" src="/iconos//icono_aceptar_todas_36_36.gif"   /></a></td>
		<td>&nbsp;<a id="btUnSelectAll" title="<%=Tran_mss_g4_inc_val.getProperty("bt.unSelectAll")%>" href="javascript:void selectUnselectAll(false);" ><img id="imgbtunSelectAll"  alt="<%=Tran_mss_g4_inc_val.getProperty("bt.unSelectAll")%>" src="/iconos/icono_cancelar_todas_mss_36_36.gif"   /></a></td>		
	</tr></table>
	
	</br>

<!-- Timesheet table: only the header, the rows will be generated dinamically by function addRowToTimesheetTable() -->
	<table id="TimesheetTable" class="tablaestados" border="0" cellspacing="0"  cellpadding="3" >
		<!-- Header -->
		<tr class = "tablaestadosceldatitulo" style="text-align:center;white-space:nowrap">
			<td id="col_SCO_SELECTED" ><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("CALCULATED"))%> </td>
			<td id="col_STD_ID_HR" style="display:none" ><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("STD_ID_HR"))%></td>			
			<td id="col_SCO_GB_NAME" name = "col_SCO_GB_NAME" ><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_GB_NAME"))%></td>
			<td id="col_SCO_ID_REF_MOD" ><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_ID_REF_MOD"))%></td>	
			<td id="col_SCO_NM_STATUS_TIMESHEET" name="col_SCO_NM_STATUS_TIMESHEET" ><%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oMainValues.getLabel("SCO_NM_STATUS_TIMESHEET"))%></td>	
			<td id="col_ViewTimesheet"  >&nbsp;&nbsp;</td>	
			<td id="col_sendEmail" >&nbsp;&nbsp;</td>	
		</tr>		
	</table>

	<!-- Table for windows (we don't paint all the registers loaded)-->	
	<table id="windowsTable" class = "tablanavegacion" border="1" width="100%" cellspacing="0" >
	</table>
	
	
</form>


<!-- Hidden Values table: with a row that will be used like a template -->
<!-- The string XXXX will be replace by the row number-->
<table id="HiddenTimesheetTable" style="display:none">
	<!-- Template row -->
	<tr class = "tablaestadosceldatitulo">
	
			<td id="col_SCO_SELECTED" name="">
				<input type="hidden" id="hNumReg_XXXX"  />
				<input type="checkbox" id="chkSCO_SELECTED_XXXX"  onclick="checkSelected('XXXX')" />
				<input type="hidden" id="hSTD_ID_HR_XXXX"  />
				<input type="hidden" id="hSTD_ID_HR_hinc_XXXX"  />
				<input type="hidden" id="hSTD_OR_PER_XXXX"  />
				<input type="hidden" id="hSTD_OR_PER_hinc_XXXX"  />
				<input type="hidden" id="hSTD_OR_PER_hinc_XXXX"  />
				<input type="hidden" id="hDT_START_P_Fixed_XXXX"  />

			</td>
			<% // We have to hide this field, because now we don't want to show the ID in ESS
			// <td id="col_STD_ID_HR" name="col_STD_ID_HR">
			//	<p id="STD_ID_HR_XXXX"></p>
			//</td>			
			%>
			<td id="col_SCO_GB_NAME" name="col_SCO_GB_NAME"><p id="SCO_GB_NAME_XXXX"></p></td>
			<td id="col_SCO_ID_REF_MOD" name="col_SCO_ID_REF_MOD"><p id="SCO_ID_REF_MOD_XXXX"></p></td>
			<td id="col_SCO_NM_STATUS_TIMESHEET" name="col_SCO_NM_STATUS_TIMESHEET"><p id="SCO_NM_STATUS_TIMESHEET_XXXX"></p></td>	
			<td id="col_ViewTimesheet" name="col_ViewTimesheet">&nbsp;
				<a  id="anchorViewDetails_XXXX" href="javascript:viewTimesheet(XXXX);" tabindex="-1" >
					<img src="/iconos/icono_editar_mss_11_9.gif"  title="<%=Tran_mss_g4_inc_val.getProperty("ts.bt.timesheet")%>">
				</a>
			</td>	
			<td id="col_sendEmail" name="col_sendEmail">&nbsp;
				<a  id="anchorsendEmail_XXXX" href="javascript:sendEmail('XXXX');" tabindex="-1" >		
					<img id="imgsendEmail_XXXX" src="/iconos/js_email.gif"  width="16" height="16" title="<%=Tran_mss_g4_inc_val.getProperty("ts.bt.sendEmail")%>">
				</a>
			</td>	

	</tr>
</table>	

</div>

<!-- Pie de pagina -->	


</body>
<m4:endpage/>


