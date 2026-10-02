/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: m4listfiltertypes.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */


function FilterType(idfilter, name, type) {
    this.idfilter = idfilter;
    this.name = name;
    this.type = type;
}
function setNewFilterType(sForm, sIndex) {
    var stype = document.forms[sForm].elements["filteritem" + sIndex].value.substring(0,1);
    var selectfilters = document.forms[sForm].elements["filterop" + sIndex];
    while (selectfilters.length > 0) {
        selectfilters.options[0] = null;
    }
    for (var i = 0; i < aFilterTypes.length; i++) {
        if (stype == aFilterTypes[i].type) {
            var newoption = new Option(aFilterTypes[i].name, aFilterTypes[i].idfilter);
            selectfilters.options[selectfilters.length] = newoption;
        }
    } 
}
function setFilterSelected(sForm, sIndex, sItem) {
    var selectitem = document.forms[sForm].elements["filteritem" + sIndex];
    for (var i = 0; i < selectitem.length; i++) {
        if (sItem == selectitem.options[i].value.substring(1)) {
            selectitem.options[i].selected = true;
            setNewFilterType(sForm, sIndex);
            return;
        }
    }
}
function validateFilter(sForm) {
    var vForm = document.forms[sForm];
    var sFunctions = "";
    var index = 0;
    while (vForm.elements["filteritem" + index]){
        var selectitem = vForm.elements["filteritem" + index];
        var stype = selectitem.value.substring(0,1);
        var sname = selectitem.options[selectitem.selectedIndex].text;
        if (sFunctions.length > 0) sFunctions += "*";         
        switch (stype) {
        case "0": sFunctions += "m4valinput('_alfanum', '" + sForm + "', 'filterval" + index + "', 1, '" + sname + "')"; break;
        case "1": sFunctions += "m4valinput('_num', '" + sForm + "', 'filterval" + index + "', 1, '" + sname + "')"; break;
        case "2": sFunctions += "m4valinput('_date', '" + sForm + "', 'filterval" + index + "', 0, '" + sname + "')"; break;
        }
        index ++;
    }
    return m4valform(sFunctions);
}
var aFilterTypes = new Array();