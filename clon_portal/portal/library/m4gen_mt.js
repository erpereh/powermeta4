/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: m4gen_mt.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */

function m4remonte(spage){
try{	

	if (m4remonte.arguments.length < 1) throw (new m4class_numparametrosincorrecto("m4remonte",m4remonte.arguments.length,1)); 
	var slastarg = m4remonte.arguments[m4remonte.arguments.length - 1];
		var ni=m4remonte.arguments.length; 
		var sident="";
		var zc = "";
		var zch = "";
	if (slastarg != "M4NEWMODE"){
		for (var i=1;i < ni; i++){
			zc = m4remonte.arguments[i];
			zch  = zc.substring(0,1);
			if (zch=="X"){
				sident = sident + zc.substring(1,zc.length)+ "=" + m4valor("NombreFormulario",zc,"","get")+"{";
			}else{ 
				sident = sident+ zc +"="+ m4valor("NombreFormulario",zc,"","get")+"{";
			}
		}
	}else{
		if ((m4remonte.arguments.length -3) % 2 != 0){
			m4oexcepcion_numparampar = {m4prop_sidexcepcion: "numparampar", m4prop_sfuncion: "m4remonte", m4prop_nnumparam: (m4remonte.arguments.length -3)};
			throw m4oexcepcion_numparampar;
		}
		ni = m4remonte.arguments.length - 1;
		for (var i=2;i < ni; i+=2){
			zc = m4remonte.arguments[i];
			zcmas1 = m4remonte.arguments[i+1];
			sident = sident+ zcmas1 +"="+ m4valor(m4remonte.arguments[1],zc,"","get")+"{";
		}
	}	
var snave = "/servlet/CheckSecurity/JSP/"+spage + "?ztipocarga="+sident;
m4window(spage,snave,"","",700,500);
}catch(excepcion){m4err_gen(excepcion);}
}

function m4filtro(spage){
if (m4filtro.arguments.length < 1) throw (new m4class_numparametrosincorrecto("m4filtro",m4filtro.arguments.length,1));
var sfil = "/servlet/CheckSecurity/JSP/"+spage;
var ni = m4filtro.arguments.length; 
var oarfil=new Array;
for(t=0;t < ni-1;t++){
	oarfil[t]=m4filtro.arguments[t+1];
}
m4window(spage,sfil,oarfil,"NombreFormulario",700,500);
}

function m4filtrocallback(spage,sfunction){
if (m4filtrocallback.arguments.length < 2) throw (new m4class_numparametrosincorrecto("m4filtrocallback",m4filtrocallback.arguments.length,2));
if (spage.charAt(0) =="/") {
	var sfil = "/servlet/CheckSecurity/JSP"+spage;
}else{var sfil = "/servlet/CheckSecurity/JSP/"+spage;}
var ni = m4filtrocallback.arguments.length; 
var oarfil=new Array;
for(t=0;t < ni-2;t++){
	oarfil[t]=m4filtrocallback.arguments[t+2];
}
m4windowcallback(spage,sfil,oarfil,"NombreFormulario",sfunction,700,500);
}
function m4ordenar(sCampo){
if (m4ordenar.arguments.length < 1) throw (new m4class_numparametrosincorrecto("m4ordenar",m4ordenar.arguments.length,1));
if (scampoant==sCampo){if (sOrd==0){sOrd=1;}else if (sOrd==1){sOrd=2;}else{sOrd=1;}
}else{sOrd=1;}
m4valor("oculto","zOrden",sOrd,"set");
m4valor("oculto","zOrdenCampo",sCampo,"set");
valores();	
}

function m4eliminar(sid){
try{
	var na = m4eliminar.arguments.length;
	if ((na % 2) != 0){
	m4oexcepcion_numparampar = {m4prop_sidexcepcion: "numparampar", m4prop_sfuncion: "m4eliminar", m4prop_nnumparam: na};
	throw m4oexcepcion_numparampar;
	}
	msg = m4getmessage("_setlog_temp_borrar");
	if ( confirm(msg) == true){
	 
		m4valor("NombreFormulario","ACC","BORRAR","set");
		for (i=0; i < na ; i=i+2){
			m4valor("NombreFormulario", m4eliminar.arguments[i],m4eliminar.arguments[i+1],"set");
		}
		m4submit("NombreFormulario");
	}
	
}catch(excepcion){m4err_gen(excepcion);}	
}

function m4setPKA(){ //recoger los valores de los campos PK
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
}

function m4setm4tit(){
var acc = m4valor("NombreFormulario","ACC","","get");
if (acc=="INSERTAR"){
	var msg = m4getmessage("_setlog_new");
	m4rewritecell('m4tit',msg);
	m4cambiofondo("1");
}else{
	var msg = m4getmessage("_setlog_act");
	m4rewritecell('m4tit',msg);
	m4cambiofondo("0");
	//si no esta relleno el campo de las PK lo relleno (Para los remontes) Bug:
	if (m4valor("oculto","zPkA","","get")==""){
	 m4setPKA();
	}
}
}

function m4lim(){
m4valor("NombreFormulario","ACC","INSERTAR","set")
m4valor("oculto","zPkA","","set");
var msg = m4getmessage("_setlog_new");
m4rewritecell('m4tit',msg);
m4cambiofondo("1");
}
function m4com2(){
	var mu=m4valor("NombreFormulario","ACC","","get");
	var vControl="0";
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

function m4edit(){
	m4valor("NombreFormulario","ACC","ACT","set");
	m4setPKA();
	m4cambiofondo("0");
	var msg = m4getmessage("_setlog_act");
	m4rewritecell('m4tit',msg);
}
function m4cambiofondo(cam){
 	if (m4cambiofondo.arguments.length < 1) throw (new m4class_numparametrosincorrecto("m4cambiofondo",m4cambiofondo.arguments.length,1));
	var celementos = document.forms["NombreFormulario"].elements;
	if (cam=="0"){cam="insert"}else{cam="form"}
	for (var ni = 0; ni < celementos.length; ni++){
		sidelement =  celementos[ni].id;
		sidelement1 = sidelement.substr(0,1);
		if (sidelement1=="X"){
   		    sDisabled = m4prop('NombreFormulario',sidelement,'disabled','','get');
			sReadOnly = m4prop('NombreFormulario',sidelement,'readOnly','','get');
			if (sDisabled == false && sReadOnly == false){
						m4prop('NombreFormulario',sidelement,'className',cam,'set',false);
			}
			
		}
		
	}
}
function m4filtro_wargs(spage){
if (m4filtro_wargs.arguments.length < 1) throw (new m4class_numparametrosincorrecto("m4filtro_wargs",m4filtro_wargs.arguments.length,1));
var sfil = "/servlet/CheckSecurity/JSP/"+spage;
var ni = m4filtro_wargs.arguments.length; 
var oarfil=new Array;
for(t=2;t < ni-1;t++){
	oarfil[t-2]=m4filtro_wargs.arguments[t+1];
}
var sfilMulti="";
var sfilParam="";
if (m4filtro_wargs.arguments[1]!=""){
	var idArgMulti = m4valor('NombreFormulario',m4filtro_wargs.arguments[1],'','get')
	if ((idArgMulti!="")&&(idArgMulti!=null)){
		sfilMulti = "?ztipocarga=ASTD_ID_COUNTRY*A4*"+idArgMulti+"{";
		sfilParam = "&zv1="+idArgMulti+"&zf1id=ASTD_ID_COUNTRY&zf3id=A4";
	}
}
if (m4filtro_wargs.arguments[2]!=""){
	var idArgMulti = m4valor('NombreFormulario',m4filtro_wargs.arguments[2],'','get')
	if ((idArgMulti!="")&&(idArgMulti!=null)){
		if (sfilMulti==""){sfilMulti = "?ztipocarga=";}
		sfilMulti = sfilMulti + "BSTD_ID_GEO_DIV*A4*"+idArgMulti+"{";
		sfilParam = sfilParam + "&zv2="+idArgMulti+"&zf2id=BSTD_ID_GEO_DIV&zf4id=A4";
	}
}
sfil = sfil +sfilMulti+sfilParam;
m4window(spage,sfil,oarfil,"NombreFormulario",700,500);
}