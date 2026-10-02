/*
	@(#)FileVersion: 811.000.008
	@(#)FileDescription: Funciones de validacion de códigos de formularios
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: m4valdata.js
	@(#)Date:  
*/

function getHTTPObject() {

    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("MSXML2.XMLHTTP");
    } catch (e1) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e2) {
            try {
                xmlhttp = new XMLHttpRequest();
            } catch (e3) {
                xmlhttp = false;
            }
        }
    }
    return xmlhttp;
}

function getDOMObject(strXML) {

    var objDOM;
    try {
        objDOM = new ActiveXObject("MSXML2.DOMDocument");
        objDOM.loadXML(strXML);
    } catch (e1) {
        try {
            objDOM = new ActiveXObject("Microsoft.XmlDom"); 
            objDOM.loadXML(strXML);
        } catch (e2) {
            try {
                var objDOMParser = new DOMParser();
                objDOM = objDOMParser.parseFromString(strXML, "text/xml");
            } catch (e3) {
                objDOM = false;
            }
        }
    }
    return objDOM;
}

function getHTTPDOMObject(objHTTP) {

    var objDOM;
    try {
        objDOM = objHTTP.responseXML;
    } catch (e1) {
        try {
            var objDOMParser = new DOMParser();
            objDOM = objDOMParser.parseFromString(objHTTP.responseText, "text/xml");
        } catch (e2) {
            objDOM = false;
        }
    }
    return objDOM;
}

function isXMLRecord(rec, index, aIn) {

    for (var i = 0; i < aIn.length; i ++) {
        var item = rec[i][index];
        if (m4valor("NombreFormulario", aIn[i], "", "get") != getXMLItemValue(item)) {
            return false;
        }   
    }
    return true;
}

function writeXMLRecord(rec, index, aIn, aOut) {

    for (var i = 0; i < aOut.length; i ++) {
        var item = rec[i + aIn.length][index];
        m4valor("NombreFormulario", aOut[i], getXMLItemValue(item), "set");      
    }
}

function getXMLItemValue(item) {

    for (var i = 0; i < item.childNodes.length; i++) {
        if (item.childNodes[i].nodeName == "item") {
            return item.childNodes[i].attributes.getNamedItem("value").nodeValue;
        }
    }
    return "";
}

function clearRecord(aOut) {

    for (var i = 0; i < aOut.length; i ++) {
        m4valor("NombreFormulario", aOut[i], "", "set");
    }
}

function m4translate(sPageVal, fPageList, aIn, aOut, bServerFilter) {

    // borro los campos auxiliares
    clearRecord(aOut);

    // Construyo la querystring para los parametros y miro si estamos validando blanco
    var sParams = "";
    var bInValuesNotNull = false;
    for (var i = 0; i < aIn.length; i++) {
        var sValue = m4valor("NombreFormulario", aIn[i], "", "get");
        sParams += (i == 0 ? "?" : "&") + aIn[i] + "=" + sValue;
        if (sValue.length > 0) {
            bInValuesNotNull = true;
        }
    }

    // La traducción de blanco es blanco
    if (bInValuesNotNull) {

        var xmlhttp = getHTTPObject();

        try {
            xmlhttp.open("GET", "/servlet/CheckSecurity/JSP/" + sPageVal + (bServerFilter ? sParams : ""), true);
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4) {

                    // tomo el documento
                    var oo = getHTTPDOMObject(xmlhttp).documentElement;
                    if (oo == null) {
                        // otra forma de analizar xml
                        oo = getDOMObject(xmlhttp.responseText).documentElement;
                    }

                    // tomo los registros
                    // en recs están primero los de entrada y después los de salida
                    // var recs = oo.getElementsByTagName("register"); 
                    var items = oo.getElementsByTagName("data");
                    var recs = new Array(); 
                    for (var i = 0; i < items.length; i++){
                        recs[i] = items[i].getElementsByTagName("register");
                    }

                    // itero por todos los registros buscando el mío...
                    var bList = true;
                    for (var i = 0; i < recs[0].length; i ++) {
                        // compruebo la igualdad
                        if (isXMLRecord(recs, i, aIn)) {
                            writeXMLRecord(recs, i, aIn, aOut);
                            bList = false;
                            break;
                        }
                    }

                    // si no ha validado llamar la lista...
                    if (bList) {
                        if (typeof(fPageList) == "function") {
                            fPageList();
                        } else if (typeof(fPageList) == "string") {
                            var sFunc = "m4filtro(\"" + fPageList + "\"";
                            for (var i = 0; i < aIn.length; i++) {
                                sFunc += ", \"" + aIn[i] + "\"";
                            }
                            for (var i = 0; i < aOut.length; i++) {
                                sFunc += ", \"" + aOut[i] + "\"";
                            }
                            sFunc += ");";
                            eval(sFunc);    
                        }
                    }
                }
            };
            xmlhttp.send(null);
        } catch (e) {
        }
    }
}

function m4translatelist(sPageVal, fPageList, aIn, aOut) {
    m4translate(sPageVal, fPageList, aIn, aOut, false);
}
function m4translatepick(sPageVal, fPageList, aIn, aOut) {
    m4translate(sPageVal, fPageList, aIn, aOut, true);
}
