/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: m4treeview.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */


function showHideLayer(ai_sThisId) {
var thiselement = document.getElementById(ai_sThisId);

	thiselement.style.display = (thiselement.style.display == "") ? "none" : "";				
}  

var n_RootNode = true;

function showHide(ai_sThisId) {
var thiselement = document.getElementById(ai_sThisId);
var allblinds;
var sNewState;

	thiselement.style.display = (thiselement.style.display == "") ? "none" : "";
	if (ai_sThisId == "divTreeView")
		if (thiselement.style.display == "") {
			thiselement.width = "50%";
			allblinds = document.getElementsByName("divImgTreeDetails");
			sNewState = "";
		} else {
			thiselement.width = "100%";
			allblinds = document.getElementsByName("divImgTreeDetails");
			sNewState = "none";
		}	
	else		
		if (thiselement.style.display == "") {
			thiselement.width = "50%";
			allblinds = document.getElementsByName("divImgTreeView");
			sNewState = "";
		} else {
			thiselement.width = "100%";
			allblinds = document.getElementsByName("divImgTreeView");
			sNewState = "none";
		}	

    for (var i = 0; i < allblinds.length; i++) {
        allblinds[i].style.display = sNewState;
    }
}

function getDetailsWU(sId1,sIdWU,sId2,sDtStart,sId3,sWuType,sId4,sBvalue,sId5,sObj,sId6,sDesc,sId7,sPVideo){
	var vIdCell=[sId1,sId2,sId3,sId4,sId5,sId6,sId7];
	var vValue=[sIdWU,sDtStart,sWuType,sBvalue,sObj,sDesc,sPVideo];
	
	showDetails(vIdCell,vValue);
}

function getDetailsWL(sId1,sIdWL,sId2,sDtStart,sId3,sWlType,sId4,sWlIntType){
	var vIdCell=[sId1,sId2,sId3,sId4];
	var vValue=[sIdWL,sDtStart,sWlType,sWlIntType];
	
	showDetails(vIdCell,vValue);
}

function getDetailsPos(sId1,sIdPos,sId2,sStatus,sId3,sDtStart,sId4,sJobCode,sId5,sIdWU,sId6,sBvalue,sId7,sIdWL,sId8,sDesc){
	var vIdCell=[sId1,sId2,sId3,sId4,sId5,sId6,sId7,sId8];
	var vValue=[sIdPos,sStatus,sDtStart,sJobCode,sIdWU,sBvalue,sIdWL,sDesc];
	
	showDetails(vIdCell,vValue);
}

function showDetails(vCells,vValues) {
	var l = vCells.length;
	var i;
	var sIdCell;
	var sValue;
	
	for (i=0; i<l; i++){
		sIdCell = vCells[i];
		sValue = vValues[i];
		m4rewritecell(sIdCell,sValue);
	}
	n_RootNode = false;
}

var m_bToolBarActive = true;

function showFilter() {
	if (m_bToolBarActive) {
		showHideLayer('FILTRO');
		m_bToolBarActive = false;
	}
}

function hideFilter() {
	showHideLayer('FILTRO');
	m_bToolBarActive = true;
}

function executeFilter() {
	if (document.forms['NombreFormulario'].IdRootNode.value != "") {
		showHideLayer('FILTRO');
		document.forms['NombreFormulario'].NodeId.value = document.forms['NombreFormulario'].IdRootNode.value;
		m_bToolBarActive = true;
		m4submit('NombreFormulario');			
	}
}

function showSearch() {
	if (m_bToolBarActive) {
		showHideLayer('BUSQUEDA');
		m_bToolBarActive = false;
	}
}

function hideSearch() {
	showHideLayer('BUSQUEDA');
	m_bToolBarActive = true;
}

function executeSearch() {

	if (document.forms['NombreFormulario'].SearchKey.value != "") {
		showHideLayer('BUSQUEDA');
		clearFrmTreeView();
		document.forms['frmTreeView'].Option.value = "5";
		document.forms['frmTreeView'].NodeToSearchKey.value = document.forms['NombreFormulario'].SearchKey.value;
		document.forms['frmTreeView'].IdNodeToSearchLoad.value = document.forms['NombreFormulario'].SearchKey.value;
		m_bToolBarActive = true;
		m4submit('frmTreeView');			
	}
}

function executeRefresh(tree) {
	if (m_bToolBarActive) {
		document.location.href = tree;
	}	
}