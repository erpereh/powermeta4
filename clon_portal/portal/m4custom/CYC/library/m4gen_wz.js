/*
	@(#)FileVersion: 811.000.008
	@(#)FileDescription: Funciones genericas de wizards
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: m4gen_wz.js
	@(#)Date: 23/03/2002 
*/
function m4wzeliminar(sid){
try{
	var na = m4wzeliminar.arguments.length;
	if ((na % 2) != 0){
	m4oexcepcion_numparampar = {m4prop_sid: "numparampar", m4prop_sfunction: "m4wzeliminar", m4prop_nnumparam: na};
	throw m4oexcepcion_numparampar;
	}
	var msg = m4getmessage("_setlog_temp_borrar");
	if ( confirm(msg) == true){
		m4valor("NombreFormulario","ACC","02","set");
		for (i=0; i < na ; i=i+2){
			m4valor("NombreFormulario", m4wzeliminar.arguments[i],m4wzeliminar.arguments[i+1],"set");
		}

		m4valor('NombreFormulario','LOADTYPE',obuttload[1],'set');
		m4valor('NombreFormulario','WZINDEX',ozIndexWizard,'set');
		document.forms.NombreFormulario.action = opath + obuttslnk[1] ;
		m4submit("NombreFormulario");
	}
	
}catch(excepcion){m4excep_mt(excepcion);}	
}

function m4navwz(i){
if (snivelwizzard==1){
	if (i=="0"){
		msg = m4getmessage('_sl_co_gn_14');
	}else{
		msg = m4getmessage('_sl_co_gn_17');
	}
	if ( confirm(msg) == false){return;}
}	
var parametros=['LOADTYPE','WZINDEX'];
var valores=[obuttload[i],ozIndexWizard+(i-1)];
m4navegar(obuttslnk[i],parametros,valores);
}

function m4navl(){
if (snivelwizzard==1){
	msg = m4getmessage('_sl_co_gn_18');
	if ( confirm(msg) == false){return 0;}
}
return 1;	
}


function m4wzins(i){
m4valor('NombreFormulario','LOADTYPE',obuttload[i],'set');
m4valor('NombreFormulario','WZINDEX',ozIndexWizard+(i-1),'set');
document.forms.NombreFormulario.action = opath + obuttslnk[i] ;
val();
}

function m4comwz(){
	var mu=m4valor("NombreFormulario","ACC","","get");
	var vControl="0";
	if (mu=="02"){
		m4valor("NombreFormulario","ACC","01","set");
		mu="01";
	}	
	if (mu=="ACT"){
		var pk=m4valor("oculto","zPkA","","get")
		arrFuncts = pk.split(/\{/); 
		for (var i=0; i<arrFuncts.length; i++) {
			arrArgs=arrFuncts[i].split(/\=/);
			var vin=m4valor("NombreFormulario",arrArgs[0],"","get");
			if 	(vin==arrArgs[1]){
				//continuamos
			}else{
				vControl="1";
			}
		}
		if (vControl=="1"){
			msg = m4getmessage("_setlog_pk_modificada");
			if ( confirm(msg) == true){
				m4valor("NombreFormulario","ACC","INS","set");
				return 1;
			}else{
				return 0;
			}
		}
	}
	return 1;
}

function m4cambioestado(vcambio){
if(vcambio=="1"){var msg = m4getmessage("_setlog_new_wz");}else{var msg = m4getmessage("_setlog_act_wz");}
msg=msg+ stit;
m4rewritecell('m4tit',msg);
m4cambiofondo(vcambio);
}

function m4limwz(){
m4valor("NombreFormulario","ACC","01","set");
m4cambioestado("1");
if (typeof(document.forms["oculto"]) == "undefined" ){return ;}
m4valor("oculto","zPkA","","set");

}

function m4editwz(){
	m4valor("NombreFormulario","ACC","ACT","set");
	var celementos = document.forms["NombreFormulario"].elements;
	var vpk="";
	for (var ni = 0; ni < celementos.length; ni++){
		sidelement =  celementos[ni].id;
		sidelement1 = sidelement.substr(0,1);
		if (sidelement1=="X"){
			vpk=vpk + sidelement+"="+m4valor("NombreFormulario",sidelement,"","get")+"{";
		}
	}
	m4valor("oculto","zPkA",vpk,"set");
	m4cambioestado("0");
}

function m4setm4titwz(){
if (typeof(document.forms["NombreFormulario"]) == "undefined" ){return ;}
var acc = m4valor("NombreFormulario","ACC","","get");
if (acc=="02"){
	m4valor("NombreFormulario","ACC","01","set");
	acc="01";
}
if (acc=="01"){m4cambioestado("1");}else{m4cambioestado("0");}
}
function m4setstatus(){
	if (vnum>0){
		m4valor('NombreFormulario','ACC','ACT','set');
		var msg = m4getmessage("_setlog_act_wz");
	
	}else{
		m4valor('NombreFormulario','ACC','01','set');
		var msg = m4getmessage("_setlog_new_wz");
	}
	msg=msg+ stit;
	m4rewritecell('m4tit',msg);

}
