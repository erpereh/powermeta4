/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: m4listconcepts.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */


function component_write(doc, index) {

    doc.write("<tr>");
    doc.write("<td id=\"row" + index + "\" onclick=\"parent.setSelected(" + index + ")\" class=\"tablerow\" onmouseover=\"parent.rowmouseover(this)\" onmouseout=\"parent.rowmouseout(this)\">");

    doc.write("<a name=\"anchor" + index + "\"></a>");
    switch (this.type) {
    case 1: doc.write("<img src=\"/images/ic_compvar_16_16_0.gif\"/>"); break;
    case 2: doc.write("<img src=\"/images/ic_compcpt_16_16_0.gif\"/>"); break;
    case 3: doc.write("<img src=\"/images/ic_comptotal_16_16_0.gif\"/>"); break;
    default: doc.write("<img src=\"/images/ic_compprop_16_16_0.gif\"/>"); break;
    }
    doc.write("&nbsp;" + this.idsyn + " - " + this.ndmd);

    doc.write("</td></tr>");
}
function Component(idsyn, iddmd, ndmd, m4type, type) {
    this.idsyn = idsyn;
    this.iddmd = iddmd;
    this.ndmd = ndmd;
    this.m4type = m4type;
    this.type = type;
    this.write = component_write;
}
function writeSrc() {
    var vdoc = window.frames["myIframe"].document;
    vdoc.open();
    vdoc.write("<html><head>");
    vdoc.write("<link href=\"/style/shco_gen0.css\" type=\"text/css\" rel=\"stylesheet\"/>");
    vdoc.write("</head><body>\n");

    vdoc.write("<table class=\"tablelist\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\">");
    for (var i = 0; i < pg_aComponents.length; i++) {
        pg_aComponents[i].write(vdoc, i);
        vdoc.write("\n");
    }
    vdoc.write("</table>\n");

    vdoc.write("</body></html>\n");
    vdoc.close();
    pg_iComponentSel = -1;
}
function setSelected(index) {
    if (index >= 0 && index < pg_aComponents.length) {
        if (pg_iComponentSel >= 0) {
            window.frames["myIframe"].document.getElementById("row" + pg_iComponentSel).className="tablerow";
        }
        pg_iComponentSel = index;
        window.frames["myIframe"].document.getElementById("row" + pg_iComponentSel).className="tablerowselected";
    }
}
function deleteAll() {
    pg_aComponents = new Array();
    writeSrc();
}
function deleteSelected() {
    if (pg_iComponentSel >= 0) {
        for (var i = pg_iComponentSel + 1; i < pg_aComponents.length; i++) {
            pg_aComponents[i - 1] = pg_aComponents[i];
        }
        pg_aComponents.length = pg_aComponents.length - 1;
        var newindex;
        if (pg_iComponentSel >= pg_aComponents.length) {
            newindex = pg_aComponents.length - 1;
        } else {
            newindex = pg_iComponentSel;
        }
        writeSrc();
        if (newindex >= 0) {
            setSelected(newindex);
            window.frames["myIframe"].navigate("#anchor" + newindex);   
        }
    }
}
function upSelected() {
    if (pg_iComponentSel > 0) {
        var temp = pg_aComponents[pg_iComponentSel];
        pg_aComponents[pg_iComponentSel] = pg_aComponents[pg_iComponentSel - 1];
        pg_aComponents[pg_iComponentSel - 1] = temp;
        var newindex = pg_iComponentSel - 1;
        writeSrc();
        setSelected(newindex);
        window.frames["myIframe"].navigate("#anchor" + newindex);   
    }
}
function downSelected() {
    if (pg_iComponentSel >= 0 && pg_iComponentSel < pg_aComponents.length - 1) {
        var temp = pg_aComponents[pg_iComponentSel];
        pg_aComponents[pg_iComponentSel] = pg_aComponents[pg_iComponentSel + 1];
        pg_aComponents[pg_iComponentSel + 1] = temp;
        var newindex = pg_iComponentSel + 1;
        writeSrc();
        setSelected(newindex);
        window.frames["myIframe"].navigate("#anchor" + newindex);   
    }
}
function addElement(idsyn, iddmd, ndmd, m4type, type) {
    // comprobar que no existe
    for (var i = 0; i < pg_aComponents.length; i++) {
        if (pg_aComponents[i].idsyn == idsyn) {
            alert(_sl_co_py_9);
            return;
        }
    }
    pg_aComponents[pg_aComponents.length] = new Component(idsyn, iddmd, ndmd, m4type, type);
    writeSrc();
    setSelected(pg_aComponents.length - 1);
    window.frames["myIframe"].navigate("#anchor" + (pg_aComponents.length - 1));   
}
var pg_iComponentSel = -1;
var pg_aComponents = new Array();

function rowmouseover(elemrow) {
    if (elemrow.className.indexOf("selected") >= 0) {
        elemrow.className="tablerowselectedhover"
    }else {
        elemrow.className="tablerowhover"
    }  
}
function rowmouseout(elemrow) {
    if (elemrow.className.indexOf("selected") >= 0) {
        elemrow.className="tablerowselected"
    }else {
        elemrow.className="tablerow"
    }  
}

function Subclassif(idclassif, idsubclassif, nsubclassif) {
    this.idclassif = idclassif;
    this.idsubclassif = idsubclassif;
    this.nsubclassif = nsubclassif;
}
function setNewClassif() {
    var selectsubclassif = document.forms.filter.subclassif;
    while (selectsubclassif.length > 0) {
        selectsubclassif.options[0] = null;
    }
    var subclassif = document.forms["filter"].elements["subclassif"];
    var sidclassif = document.forms["filter"].elements["classif"].value;
    var newoption = new Option("", "");
    subclassif.options[subclassif.length] = newoption;
    if (sidclassif != "") {
        for (var i = 0; i < asubclassif.length; i++) {
            if (sidclassif == asubclassif[i].idclassif) {
                newoption = new Option(asubclassif[i].nsubclassif, asubclassif[i].idsubclassif);
                subclassif.options[subclassif.length] = newoption;
            }
        } 
    }
}
var asubclassif = new Array();

function setViewType(sValue) {
    document.getElementById("shco_list_iframe_fpi").className = "tablerow";
    document.getElementById("shco_list_iframe_variables").className = "tablerow";
    document.getElementById("shco_list_iframe_totals").className = "tablerow";

    switch (sValue) {
    case "1" :
        document.getElementById("shco_list_iframe_fpi").className = "tablerowselected";
        break;
    case "2" :
        document.getElementById("shco_list_iframe_variables").className = "tablerowselected";
        break;
    case "3" :
        document.getElementById("shco_list_iframe_totals").className = "tablerowselected";
        break;
    }

    document.forms["filter"].elements["viewtype"].value = sValue;

}
function submitFilter(scommand) {
    var vFormFilter = document.forms["filter"];
    switch (vFormFilter.elements["viewtype"].value) {
    case "1" :
        vFormFilter.action = "shco_list_iframe_fpi.jsp";
        break;
    case "2" :
        vFormFilter.action = "shco_list_iframe_variables.jsp";
        break;
    case "3" :
        vFormFilter.action = "shco_list_iframe_totals.jsp";
        break;
    }
    vFormFilter.elements["command"].value = scommand;
    vFormFilter.target = "myItree";
    vFormFilter.submit();
}

function submitSelected() {
	var sParam = "";
	for(var i = 0; i < pg_aComponents.length; i++)  {
		sParam = sParam + "ID_SYNONYM=" + pg_aComponents[i].idsyn + "@";		
		sParam = sParam + "ID_DMD_COMPONENT=" + pg_aComponents[i].iddmd + "@";
		sParam = sParam + "ID_M4_TYPE=" + pg_aComponents[i].m4type + "@";
		sParam = sParam + "ID_TRANSLATED_ITEM=" + pg_aComponents[i].ndmd + "@";
		sParam = sParam + "ID_CONCEPT_TYPE=" + pg_aComponents[i].type + ";";
	}
    var aval = new Array();
    aval[0] = sParam;
    m4returnvalues(aval);
    opener.submitFilter();
}

