/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: m4gen_adv_functions.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */


 var sAlfanumChar = "a-zA-Z0-9.,‡ËÏÚ˘¿»Ã“Ÿ‚ÍÓÙ˚¬ Œ‘€·ÈÌÛ˙¡…Õ”⁄‹¸Ò—Á«™∫ø?@%,_,\\-,:,\\,,\(,\),\',&,^,`,¥,\",/,Ä,£,#";
 var sAlfanumRegExpString= "[ " + sAlfanumChar + "]";
 var sAlfNumRegExpPlusBarraSemicolon = "[ " + sAlfanumChar + ",|,;" + "]" ; //Contiene la barra vertical y el punto y com
 var sAlfNumRegExpPlusSemicolon = "[ " + sAlfanumChar + ",;" + "]";
 
 //Expresion regular de las tuplas: Cadena con tuplas separadas por ||
 var zolistregexp = new  RegExp("(" +sAlfNumRegExpPlusSemicolon + "*)[|][|](" +sAlfNumRegExpPlusBarraSemicolon+"*)");

 //expression regular de cada tuplas : Id;;Nombre
 var zotuplaregexp = new  RegExp("(" + sAlfanumRegExpString + "*)[;][;](" + sAlfanumRegExpString +"*)");
  //expression regular de cada tuplas : Id;;Nombre;;Valor
 var zotuplaregexp2 = new  RegExp("(" + sAlfanumRegExpString + "*)[;][;](" + sAlfanumRegExpString +"*)[;][;](" +sAlfanumRegExpString +"*)"); 
 
function m4createselect(zslistinfo,zsidselect,zstabindex,zsclass){
try{
  if (m4createselect.arguments.length <2) throw (new m4class_numparametrosincorrecto("m4createselect", m4createselect.arguments.length,2));
  if (typeof(zstabindex) == "undefined"){zstabindex="1";}  
  zsclass =(typeof(zsclass) != "undefined")?" class='" + zsclass + "' " :"";
  zsselect = "<select " + zsclass + "id= '" + zsidselect + "' tabIndex = '" + zstabindex + "' name= '" + zsidselect +"' > ";
  zarrlist = zolistregexp.exec(zslistinfo);
     while  (zarrlist != null){
   		zstupla = zarrlist[1];
   		zssResto = zarrlist[2];
   		//Tratamiento de la tupla
        zarrtuplainfo =zotuplaregexp.exec(zstupla); 
                
        if (zarrtuplainfo != null){
   			zsid = zarrtuplainfo[1];
   			zsname = zarrtuplainfo[2];
   			if (zarrtuplainfo.length > 3){
   				zsvalue = zarrtuplainfo[3];
   			}
   			else{zsvalue = zsid;}
   		    zsselect = zsselect +  "<option id= " + zsid + " value= " + zsvalue + ">" + zsname + "</option> ";
        }
   		zarrlist = zolistregexp.exec(zssResto);		
  }  
  zsselect = zsselect + "</select>"; 
  document.write(zsselect);
}catch (excepcion) {m4err_gen(excepcion);};
}
//Crear radio buttons de forma din·mica a partir de una lista con la forma
//Las tuplas pueden veni con valor o sin el. Si no tienen valor se usa el ID para esta propiedad.
// a)ID1;;NAME1;;VALUE1||..||IDn;;NAMEn;;VALUEn||
// b)ID1;;NAME1||..||IDn;;NAMEn||
function m4createoptions(zslistinfo,zsidradio,zstabindex){
try{
 if (m4createoptions.arguments.length <2) throw (new m4class_numparametrosincorrecto("m4createoptions", m4createoptions.arguments.length,2));
 if (typeof(zstabindex) == "undefined"){zstabindex="1";}  
 zradioString = "";
 zarrlist = zolistregexp.exec(zslistinfo);
     while  (zarrlist != null){
   		zstupla = zarrlist[1];
   		zssResto = zarrlist[2];   		
   		//Tratamiento de la tupla
        zarrtuplainfo =zotuplaregexp.exec(zstupla);                 
        if (zarrtuplainfo != null){
   			zsid = zarrtuplainfo[1];
   			zsname = zarrtuplainfo[2];
   			if (zarrtuplainfo.length > 3){
   				zsvalue = zarrtuplainfo[3];
   			}
   			else{zsvalue = zsid;}
   		    zradioString  = zradioString + "<td class='campo'> &nbsp;<input tabindex='"+ zstabindex +"' type='radio' id='"+ zsidradio + "' name='" + zsidradio + "' value='"+ zsvalue + "' onclick='' \>&nbsp;" + zsname + "</td>";
   		    zstabindex = m4parseInt(zstabindex) +1;
   		}    
   		zarrlist = zolistregexp.exec(zssResto);
  }
  document.write(zradioString);;
 }catch (excepcion) {m4err_gen(excepcion);};
}
//De los radio button identificados por sidobjeto, deshabilitar aquellos cuyo valor estÈ en  la lista
//el resto se habilitan
//zslistinfo = VAL1||..||VALn||
function m4lockoptions(sidform,sidobjeto,zslistinfo){
try{
	if (m4lockoptions.arguments.length <3) throw (new m4class_numparametrosincorrecto("m4lockoptions", m4lockoptions.arguments.length,3));
	if (typeof(document.forms[sidform]) == "undefined" || typeof(document.forms[sidform].elements[sidobjeto]) == "undefined") throw (new m4class_noexisteelemento("m4lockoptions",sidform,sidobjeto));
	//** Primero habilito todas las opciones
	var oobjeto = document.forms[sidform].elements[sidobjeto];		
	var i = 0;
	for (i=0; i<oobjeto.length; i++) {m4lockradio(sidform,sidobjeto,oobjeto[i].value,"UNLOCK");} 
	//** Controlar que termina en || cuando hay datos
	if (zslistinfo != ""){if (zslistinfo.substr((zslistinfo.length -2),2) !="||"){ zslistinfo += "||";}}
	//** Se desahabilitan los radio cuyo valor viene en la lista	   
    zarrlistinfo = zolistregexp.exec(zslistinfo);	
	while  (zarrlistinfo != null){
	    zsRadioVal = zarrlistinfo[1];
	    zssResto = zarrlistinfo[2];	    
	    m4lockradio(sidform,sidobjeto,zsRadioVal,"LOCK");   		   		
   		zarrlistinfo = zolistregexp.exec(zssResto);
  }
 }catch (excepcion) {m4err_gen(excepcion);};
}

//Habilitar/deshabilitar un radio button, de los identificados con siobject el que tiene como valor vvalor
function m4lockradio(sidform,sidobjeto,vvalor,smodolockunlock){
try{
	if (m4lockradio.arguments.length < 4) throw (new m4class_numparametrosincorrecto("m4lockradio", m4lockradio.arguments.length,4));
	if (typeof(document.forms[sidform]) == "undefined" || typeof(document.forms[sidform].elements[sidobjeto]) == "undefined") throw (new m4class_noexisteelemento("m4disableradio",sidform,sidobjeto));
	if (smodolockunlock.toUpperCase()!= "LOCK" && smodolockunlock.toUpperCase()!= "UNLOCK")  throw (new m4class_modonodefinido("m4lockradio",smodolockunlock));
	var oobjeto = document.forms[sidform].elements[sidobjeto];
	if (oobjeto.length >0){
	    var i =0; 
		for (i=0; i<oobjeto.length; i++) {		  
   		  if (oobjeto[i].value == vvalor){
   		     var slockvalue = (smodolockunlock.toUpperCase()== "LOCK")? true :"";   		         
	         satributo ='disabled';
	         eval("oobjeto[i]."+ satributo+ "="+ "'" + slockvalue + "';"); 
			 break;		  
	      }		
   		} 
	}	
}catch (excepcion) {m4err_gen(excepcion);};
}

function m4changeSelectContent(sIdForm,sIdSelect,sNewContentInfo){
try{
  if (m4changeSelectContent.arguments.length < 3) throw (new m4class_numparametrosincorrecto("m4changeSelectContent",m4changeSelectContent.arguments.length,3));

  //Vaciar las opciones actuales
  var oSelectToChange = m4objeto (sIdForm,sIdSelect);
  while (oSelectToChange.options.length >0) {
     oSelectToChange.options[0]=null;
  }
  //Rellenar con las nuevas opciones
  zarrlist = zolistregexp.exec(sNewContentInfo);
  
     while  (zarrlist != null){
   		zstupla = zarrlist[1];
   		zssResto = zarrlist[2];
   		
   		//Tratamiento de la tupla
        zarrtuplainfo =zotuplaregexp2.exec(zstupla); 
                
        if (zarrtuplainfo != null){
   			zsid = zarrtuplainfo[1];
   			zsname = zarrtuplainfo[2];
   			if (zarrtuplainfo.length > 2){
   				zsvalue = zarrtuplainfo[3];
   			}
   			else{zsvalue = zsid;}
			m4genoption(oSelectToChange,zsid,zsvalue,zsname);
        }
   		zarrlist = zolistregexp.exec(zssResto);
  }
}catch(excepcion){m4err_gen(excepcion);}
}

function m4copySelectContent(sidform,sSelectFrom,sSelectTo){
try{   
  if (m4copySelectContent.arguments.length < 2) throw (new m4class_numparametrosincorrecto("m4copySelectContent",m4copySelectContent.arguments.length,2)); 	
  var oselectFrom = m4objeto (sidform,sSelectFrom);
  var oselectTo = m4objeto (sidform,sSelectTo);
  //Vacio la primera	    
  oselectTo.options.length = 0;
  oselectTo.selectedIndex = -1;
  for (var i =0; i< oselectFrom.options.length;i++){
    m4genoption(oselectTo,oselectFrom.options[i].id,oselectFrom.options[i].value,oselectFrom.options[i].text)
   }
}catch(excepcion){m4err_gen(excepcion);}  
}
function m4searchoption2(oselect,soption,smodo){
try{
    
	if (m4searchoption2.arguments.length < 2) throw (new m4class_numparametrosincorrecto("m4searchoption2",m4searchoption2.arguments.length,2)); 
	if (typeof(oselect) != "object") throw (new m4class_noexisteobjeto("m4genoption"));
	if (oselect.tagName != "SELECT") throw (new m4class_objetotipoincorrecto("m4searchoption2",oselect.id));
	if (typeof(smodo) == "undefined"){smodo="id";} 
	if (smodo!="text" && smodo!="value" && smodo!="id" && smodo!="index") throw (new m4class_modonodefinido("m4searchoption2",smodo));
	var bFound = false;
	if (smodo =="index"){
		oselect.selectedIndex = soption;
	}else{
	    var ni = 0;
		while (bFound == false && ni< oselect.options.length){
     	   switch(smodo){
     		case "text" :
     			if (oselect.options[ni].text == soption){bFound= true;}
				break;
     		case "value" :
     			if (oselect.options[ni].value == soption){bFound= true;}
				break;
     		case "id" :
     			if (oselect.options[ni].id == soption){bFound= true;}
				break;
     		default : 
     		}    
			ni++;
     	}
   		if (bFound == true){
		   oselect.selectedIndex = ni-1;
		}else{
		   oselect.selectedIndex = 0;
		}
	}	
}
catch(excepcion){m4err_gen(excepcion);}
}

function m4checkDeleteCache(){
      //Si estamos en proceso de grabacion o ejecucion mandar que se borren las caches
	  //se invoca desde el mÈtodo de validaciÛn de cada paso
	  var sSaveProcess =  m4valor ('NombreFormulario','SAVE_PROCESS','','get');
	  var sExecuteProcess = m4valor ('NombreFormulario','EXECUTE_PROCESS','','get');
	  if (sSaveProcess == '1' || sExecuteProcess == '1'){  
	   m4valor ('NombreFormulario','DELETE_CACHE','1','set');
	  } 
}
