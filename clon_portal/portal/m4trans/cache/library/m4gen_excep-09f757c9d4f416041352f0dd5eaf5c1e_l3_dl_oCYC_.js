/*
	@(#)FileVersion: 811.000.008
	@(#)FileDescription: excepciones de javascript
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: m4gen_excep_renhash_cbe301e2b6843c7376c12ddc345323a5_l3_dl_oCYC_v1.js
	@(#)Date: 23/03/2002 
*/
var sMSG_ERROR_ID = new String("&&MSG_ERR&&");
function m4class_excepcion(sfuncion){
this.m4prop_sfuncion =  sfuncion || "Unknown Function";
this.m4met_gen = m4met_gen;
}
function m4met_gen(scadena){
alert(scadena);
}
function m4class_noexisteelemento(sfuncion,sidform,sidinput){
this.base = m4class_excepcion;
this.base(sfuncion);
this.m4prop_sidinput = sidinput || null;
this.m4prop_sidform = sidform || null;
this.m4prop_sidexcepcion = "noexisteelemento";
}
m4class_noexisteelemento.prototype = new m4class_excepcion;
function m4class_elementoduplicado(sfuncion,sidform,sidinput){
this.base = m4class_excepcion;
this.base(sfuncion);
this.m4prop_sidinput = sidinput || null;
this.m4prop_sidform = sidform || null;
this.m4prop_sidexcepcion = "elementoduplicado";
}
m4class_elementoduplicado.prototype = new m4class_excepcion;
function m4class_noexisteobjeto(sfuncion){
this.base = m4class_excepcion;
this.base(sfuncion);
this.m4prop_sidexcepcion = "noexisteobjeto";
}
m4class_noexisteobjeto.prototype = new m4class_excepcion;

function m4class_indicefuerarango(sfuncion){
this.base = m4class_excepcion;
this.base(sfuncion);
this.m4prop_sidexcepcion = "indicefuerarango";
}
m4class_indicefuerarango.prototype = new m4class_excepcion;
function m4class_tipoerroneo(sfuncion,svar,stipo,stipocorrecto){
this.base = m4class_excepcion;
this.base(sfuncion);
this.m4prop_sidexcepcion = "tipoerroneo";
this.m4prop_svar = svar || null;
this.m4prop_stipo = stipo || null;
this.m4prop_stipocorrecto = stipocorrecto || null;
}
m4class_tipoerroneo.prototype = new m4class_excepcion;
function m4class_modonodefinido(sfuncion,smodo){
this.base = m4class_excepcion;
this.base(sfuncion);
this.m4prop_sidexcepcion = "modonodefinido";
this.m4prop_smodo = smodo || null;
}
m4class_modonodefinido.prototype = new m4class_excepcion;
function m4class_numparametrosincorrecto(sfuncion,nnumparam,nnumparamcorrecto){
this.base = m4class_excepcion;
this.base(sfuncion);
this.m4prop_sidexcepcion = "numparametrosincorrecto";
this.m4prop_nnumparam = nnumparam;
this.m4prop_nnumparamcorrecto = nnumparamcorrecto;
}
m4class_numparametrosincorrecto.prototype = new m4class_excepcion;
function m4class_constanteindefinida(sfuncion,snombreconstante){
this.base = m4class_excepcion;
this.base(sfuncion);
this.m4prop_sidexcepcion = "constanteindefinida";
this.m4prop_snombreconstante = snombreconstante || null;
}
m4class_constanteindefinida.prototype = new m4class_excepcion;
function m4class_atributonodefinido(sfuncion,sidobjeto,satributo){
this.base = m4class_excepcion;
this.base(sfuncion);
this.m4prop_sidexcepcion = "atributonodefinido";
this.m4prop_sidobjeto = sidobjeto || null;
this.m4prop_satributo = satributo || null;
}
m4class_atributonodefinido.prototype = new m4class_excepcion;
function m4class_parametronodefinido(sfuncion,sparametro){
this.base = m4class_excepcion;
this.base(sfuncion);
this.m4prop_sidexcepcion = "parametronodefinido";
this.m4prop_sparametro = sparametro || null;
}
m4class_parametronodefinido.prototype = new m4class_excepcion;

function m4class_objetotipoincorrecto(sfuncion,sidobjeto){
this.base = m4class_excepcion;
this.base(sfuncion);
this.m4prop_sidobjeto = sidobjeto || null;
m4prop_sidfunction =sfuncion || null;
this.m4prop_sidexcepcion = "objetotipoincorrecto";
}
m4class_objetotipoincorrecto.prototype = new m4class_excepcion;

function m4err_gen(excepcion){
//typeof(excepcion.m4prop_sidexcepcion) == "string"
if (!(excepcion instanceof Error)){
var s1 = "M4Exception\nFunction : ";
var s2 = "\nException type: ";
switch(excepcion.m4prop_sidexcepcion)
		{
		case "noexisteelemento" :
			m4setlog("_dev_noexisteelemento",excepcion.m4prop_sfuncion,excepcion.m4prop_sidexcepcion,excepcion.m4prop_sidform,excepcion.m4prop_sidinput);
			break;
		case "elementoduplicado":
			m4setlog("_dev_elementoduplicado",excepcion.m4prop_sfuncion,excepcion.m4prop_sidexcepcion,excepcion.m4prop_sidform,excepcion.m4prop_sidinput);
			break;
		case "noexisteobjeto" :
			m4setlog("_dev_gen_err",excepcion.m4prop_sfuncion,excepcion.m4prop_sidexcepcion);
			break;
		case "indicefuerarango" :
			m4setlog("_dev_gen_err",excepcion.m4prop_sfuncion,excepcion.m4prop_sidexcepcion);
			break;
		case "tipoerroneo" :
		    m4setlog("_dev_tipoerroneo",excepcion.m4prop_sfuncion,excepcion.m4prop_sidexcepcion,excepcion.m4prop_svar,excepcion.m4prop_stipo,excepcion.m4prop_stipocorrecto);
			break;
		case "modonodefinido" :
			if (excepcion.m4prop_smodo!=null){
				m4setlog("_dev_modonodefinido1",excepcion.m4prop_sfuncion,excepcion.m4prop_sidexcepcion,excepcion.m4prop_smodo);
			}else{
				m4setlog("_dev_modonodefinido2",excepcion.m4prop_sfuncion,excepcion.m4prop_sidexcepcion);
			}
			break;
		case "numparametrosincorrecto" :
			m4setlog("_dev_numparametrosincorrecto",excepcion.m4prop_sfuncion,excepcion.m4prop_sidexcepcion,excepcion.m4prop_nnumparam,excepcion.m4prop_nnumparamcorrecto);
			break;
		case "constanteindefinida" :
			m4setlog("_dev_constantenodefinida",excepcion.m4prop_sfuncion,excepcion.m4prop_sidexcepcion,excepcion.m4prop_snombreconstante);
			break;
		case "atributonodefinido" :
			m4setlog("_dev_atributonodefinido",excepcion.m4prop_sfuncion,excepcion.m4prop_sidexcepcion,excepcion.m4prop_sidobjeto,excepcion.m4prop_satributo);
			break;
		case "parametronodefinido" :
			m4setlog("_dev_parametronodefinido", excepcion.m4prop_sfuncion,excepcion.m4prop_sidexcepcion,excepcion.m4prop_sparametro);
			break;
		case "numparampar" :
			m4setlog("_dev_numparampar",excepcion.m4prop_sfuncion,excepcion.m4prop_sidexcepcion,excepcion.m4prop_nnumparam);
			break;
		case "objetotipoincorrecto":
			m4setlog("_dev_objetotipoincorrecto",excepcion.m4prop_sfuncion,excepcion.m4prop_sidexcepcion,excepcion.m4prop_sidobjeto);
			break;
		}
}

else{
var nexceptionnumber = excepcion.number & 0xFFFF;
if (document.all){
m4setlog("_system_excepcion",excepcion.name,nexceptionnumber,excepcion.description);}
else{m4setlog("_system_excepcion2",nexceptionnumber,excepcion.message);}
}
}
function m4getmessage(sidmessage,aargmen){
var smessage = "";

try{
	if (m4getmessage.arguments.length == 1){
		smessage =  eval(sidmessage);
    } else{
		var sm = "";
		var ore1 = /&/; 
		var ore2 = /%/;
		var ocadena = new String(eval(sidmessage));

        //comprobar si los argumentos vienen en array o por separado
 	    if ((typeof(aargmen) != "object") && (typeof(aargmen) != "undefined")){
			var am = new Array();
			for (nj= 1; nj < m4getmessage.arguments.length; nj ++){
				am[nj-1] = m4getmessage.arguments[nj];
			}
			aargmen = am;		
		}	
		
		
		//Insertar los argumentos
		var atrozos = ocadena.split(ore1); 
		for (var ni=0; ni < atrozos.length; ni++){
			if (atrozos[ni].match(ore2) == "%"){
				var sindice = atrozos[ni].slice(1);
				sm += unescape(aargmen[sindice]);
			}else{
				sm += atrozos[ni]; 
			}
		}		
		smessage = sm;
	}
}catch(e){
	var nerror =  e.number & 0xFFFF;
	try{
		if (nerror == 5009) throw (new m4class_constanteindefinida("m4getmessage",sidmessage)); 
	}catch(excepcion){m4err_gen(excepcion);}
}
return smessage;

}

function m4showmessage(stipoval,aargmen){
    if ((typeof(aargmen) != "object") && (typeof(aargmen) != "undefined")){
		var am = new Array();
		for (nj= 1; nj < m4showmessage.arguments.length; nj ++){
			am[nj-1] = m4showmessage.arguments[nj];
		}
		balert = true; 
		aargmen = am;		
	}
	alert( m4getmessage(stipoval,aargmen));
}

function m4setlog(stipoval,aargmen){
	var sGenErrMsg = new String(eval("_gen_error_msg"));
	balert = false; 

    if ((typeof(aargmen) != "object") && (typeof(aargmen) != "undefined")){
		var am = new Array();
		for (nj= 1; nj < m4setlog.arguments.length; nj ++){
			am[nj-1] = m4setlog.arguments[nj];
		}
		balert = true; 
		aargmen = am;		
	}
    var smessage = m4getmessage(stipoval,aargmen);
	if (m4setlog.arguments.length == 1){
		alert(sGenErrMsg + smessage);
	}else{
		if (balert == true){
			alert(sGenErrMsg + smessage); 
		}	
		return (smessage + "\n");
	}
} 

function m4err_val(excepcion){

var sGenErrMsg = new String(eval("_gen_error_msg"));
if (excepcion.m4prop_id != "val_error_com"){
	var bmsgthrow = true;
	var smensaje = "";
	for (var ni=0; ni < excepcion.m4prop_am4objetos.length; ni++){
		excepcion.m4prop_am4objetos[ni].style.background = "yellow";
		var aargmen = excepcion.m4prop_am4argmensajes[ni];
		var sIdMsgError = excepcion.m4prop_am4validaciones[ni];
		if (aargmen.length > 0){
			//Comprobar si el primer argumento es el identificador del mensaje de error
			var sFirstArg = new String(aargmen[0]);
			if (sFirstArg.substr(0,sMSG_ERROR_ID.length) ==sMSG_ERROR_ID){
				sIdMsgError =sFirstArg.substr(sMSG_ERROR_ID.length) ;
				for (nj= 1; nj < aargmen.length; nj ++){
					aargmen[nj-1] = aargmen[nj];
				}	
			}
		}
		var smensajeactual = m4setlog(sIdMsgError,aargmen);
		if (typeof(smensajeactual) == "undefined")  bmsgthrow = false;
		smensaje += smensajeactual;
	}      
	try{  
		excepcion.m4prop_am4objetos[0].focus();
	}catch(e){}
	if (bmsgthrow != false) alert(sGenErrMsg + smensaje);
}else{
	try{
		excepcion.m4prop_am4objetos[0].focus();
	}catch(e){}
	excepcion.m4prop_am4objetos[0].style.background = "yellow";
	m4setlog("_comp_error_msg","m4valinput","m4oexcepcion_val",excepcion.m4prop_stipoval);
	
}
delete excepcion;
}
