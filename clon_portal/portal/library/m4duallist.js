/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: m4duallist.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */



function m4moveoption(oselectfrom,oselectto,bmoveall) {
if (m4moveoption.arguments.length <2) throw (new m4class_numparametrosincorrecto("m4moveoption",m4moveoption.arguments.length,2));
if (typeof(oselectfrom) != "object") throw (new m4class_noexisteobjeto("m4moveoption"));
if (typeof(oselectto) != "object") throw (new m4class_noexisteobjeto("m4moveoption"));
if (oselectfrom.tagName != "SELECT") throw (new m4class_objetotipoincorrecto("m4moveoption",oselectfrom.id));
if (oselectto.tagName != "SELECT") throw (new m4class_objetotipoincorrecto("m4moveoption",oselectto.id));
if (typeof(m4moveoption.arguments[2]) != "undefined"){var bmovealloptions = bmoveall;}
else {var bmovealloptions = false;}
  //si hay alguno seleccionado procedemos  
  if (oselectfrom.selectedIndex != -1 || bmoveall == true){
    var bfirst = true;
    var iNextSelectedIndex = -1;
	for(var i=0; i< oselectfrom.options.length; i++) {
		if ((oselectfrom.options[i].selected && oselectfrom.options[i].value != "") || (bmovealloptions == true)) {
		    if (bfirst==true) oselectto.selectedIndex=-1;
		    var onewoption = new Option();
		    onewoption.value = oselectfrom.options[i].value;
			onewoption.text = oselectfrom.options[i].text;
			onewoption.id = oselectfrom.options[i].id;
			oselectto.options.length++;
			oselectto.options[oselectto.options.length-1] = onewoption;
			//seleccionarla despues de añadirla porque sino no funciona en Netscape
			oselectto.options[oselectto.options.length-1].selected = true;
			oselectfrom.options[i]=null;
			if (bfirst==true) {
				iNextSelectedIndex = i;
				bfirst = false;					
			}
			i = i-1;
		}
	}
	//Si he borrado el ultimo quedarse con el anterior.
	if (iNextSelectedIndex >= oselectfrom.options.length){
		iNextSelectedIndex = oselectfrom.options.length -1;
	}
	oselectfrom.selectedIndex = iNextSelectedIndex;
  }	
}


function m4updownoption(oselect,smode){
try{
    if ( m4updownoption.arguments.length <2) throw (new m4class_numparametrosincorrecto(" m4updownoption", m4updownoption.arguments.length,2));
	if (typeof(oselect) != "object") throw (new m4class_noexisteobjeto("m4updownoption"));
	if (oselect.tagName != "SELECT") throw (new m4class_objetotipoincorrecto("m4updownoption",oselect.id));
	smode = smode.toUpperCase();
	if ((smode != "UP") && (smode != "DOWN")) throw (new m4class_modonodefinido("m4updownoption",smode));	
	
	if (oselect.selectedIndex != -1){
		var actualtext = oselect.options[oselect.selectedIndex].text;
		var actualvalue = oselect.options[oselect.selectedIndex].value;
		var actualid = oselect.options[oselect.selectedIndex].id;

		if (smode == "UP") var otroindice = oselect.selectedIndex - 1;
		if (smode == "DOWN") var otroindice = oselect.selectedIndex + 1;

		if ((otroindice < oselect.options.length) && (otroindice >= 0)) {
			oselect.options[oselect.selectedIndex].text = oselect.options[otroindice].text;
			oselect.options[oselect.selectedIndex].value = oselect.options[otroindice].value;
			oselect.options[oselect.selectedIndex].id = oselect.options[otroindice].id;
			oselect.options[oselect.selectedIndex].selected = false;
			oselect.options[otroindice].text = actualtext;
			oselect.options[otroindice].value = actualvalue;
			oselect.options[otroindice].id = actualid;
			oselect.options[otroindice].selected = true;
		}
	}
}catch(excepcion){m4err_gen(excepcion);}
}

//Función a aplicar sobre los seleccionados
function m4funoptionselected(oselect,soptionprop,sfunction){
try{
    if ( m4funoptionselected.arguments.length <3) throw (new m4class_numparametrosincorrecto(" m4funoptionselected", m4funoptionselected.arguments.length,3));
	if (typeof(oselect) != "object") throw (new m4class_noexisteobjeto("m4funoptionselected"));
	if (oselect.tagName != "SELECT") throw (new m4class_objetotipoincorrecto("m4funoptionselected",oselect.id));
	if (soptionprop!="text" && soptionprop!="value" && soptionprop!="id") throw (new m4class_modonodefinido("m4funoptionselected",soptionprop));	
	if (oselect.selectedIndex != -1){
		
		var sarguments = ""
		for (var z=3; z< m4funoptionselected.arguments.length; z++) {
		 sarguments += ","+ "'" + m4funoptionselected.arguments[z] + "'";
		}
		for(var i=0; i< oselect.options.length; i++) {
			if(oselect.options[i].selected == true){
			
			switch(soptionprop){
				case "text" :
					oselect.options[i].text = eval(sfunction + " ('" + oselect.options[i].text + "'" + sarguments +");");
					break;
				case "value" :
					oselect.options[i].value = eval(sfunction + " ('" + oselect.options[i].value + "'" + sarguments +");");
					break;
				case "id" :
				     oselect.options[i].id = eval(sfunction + " ('" + oselect.options[i].id + "'" + sarguments +");");
				     break;
			default : 
			}
			oselect.options[i].selected = true;
				
		 }	
		}//for
	 }
}catch(excepcion){m4err_gen(excepcion);}
}