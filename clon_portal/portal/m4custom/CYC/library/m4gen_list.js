/*
	@(#)FileVersion: 811.000.008
	@(#)FileDescription: Funciones genericas para las listas
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: m4gen_list.js
	@(#)Date: 23/03/2002 
*/
function m4buscar(lista,sublista,sel){
	var mtemp = new Array();
	var patron = m4select(m4objeto("FormularioFiltro",lista),"value");
	var k=0;
	var h=0;
	for (var i=0; i < mlist3.length; i++){
		var strlist3i = new String (mlist3[i]);
		var strlist3ivalue = strlist3i.substr(0,m4buscarcadena(strlist3i));
		strlist3i= strlist3i.substr(m4buscarcadena(strlist3i)+1,strlist3i.length); 
		var strlist3itext = strlist3i.substr(0,m4buscarcadena(strlist3i));
		var strlist3iid = strlist3i.substr(m4buscarcadena(strlist3i)+1,strlist3i.length);
		if (strlist3ivalue == patron){
			var msubtemp = [strlist3ivalue,strlist3itext,strlist3iid];
			mtemp[k++] = msubtemp;
		}
	}
	
	var subselectfinal = document.forms["FormularioFiltro"].elements[sublista];
	subselectfinal.options.length= mtemp.length;
	for (var j=0; j < subselectfinal.options.length; j++){
		var strtemp = new String (mtemp[j]);
		var a=j;
		subselectfinal.options[a].value = strtemp.substr(0,m4buscarcadena(strtemp));
		strtemp= strtemp.substr(m4buscarcadena(strtemp)+1,strtemp.length); 
		subselectfinal.options[a].text = strtemp.substr(0,m4buscarcadena(strtemp));
		subselectfinal.options[a].id = strtemp.substr(m4buscarcadena(strtemp)+1,strtemp.length);						
	}
	if (sel!= ""){m4searchoption(m4objeto('FormularioFiltro',sublista),sel);}


}

function m4filtrar(){
	
    var diveasyfilter = document.getElementById('easyfilter');	

    if (diveasyfilter.style.display != ""){
       m4applydynfilter(); 
    }else{
       m4applyeasyfilter();
    }
}

function m4applydynfilter(){

    var sTipoCarga="DYNFILTER";
    var sSeparatorDyn = "##";
    var sApisql = m4valor("NombreFormulario","ARG_API_SQL","","get");

    var sNatLanguage = m4valor("NombreFormulario","ARG_LANGUAGE","","get");
    var sIdSentence = m4valor("NombreFormulario","ARG_ID_SENTENCE","","get"); 
    var sIdScenario = m4select(m4objeto("NombreFormulario","ARG_ID_SCENARIO"),"id");

    sTipoCarga = sTipoCarga + sSeparatorDyn + sApisql + sSeparatorDyn + sNatLanguage + sSeparatorDyn + sIdSentence + sSeparatorDyn + sIdScenario ;


    m4valor("oculto","zisdynfilter", "1", "set");		
    m4valor("oculto","ztipocarga", sTipoCarga, "set");
    valores();	
}


function m4applyeasyfilter(){

	var param="";
	var funciones="";
	var err=1;
	for(i=1;i<3;i++){
		var campofo="VALOR"+i;
		var par="PARTE"+i;
		var lis="list"+i;
		var lisc="list"+(i+2);
		var val=m4valor("FormularioFiltro",campofo,"","get");
		if (val != ""){
			var lis1=  m4select(m4objeto("FormularioFiltro",lis),"value");
			var listext1=  m4select(m4objeto("FormularioFiltro",lis),"text");
			if (lis1 == 0){
				if (funciones!=""){funciones=funciones+"*";}
			
				//m4valinput('_alfanum','FormularioFiltro','" + campofo + "',1,'nombre0')
				funciones = funciones + "m4valinput('_alfanum','FormularioFiltro','" + campofo + "',1,'" + listext1 + "')";		
			}else if (lis1 == 1){
				if (funciones!=""){funciones=funciones+"*";}
				funciones = funciones + "m4valinput('_num','FormularioFiltro','" + campofo + "',1,'" + listext1 + "')";
			}else if (lis1 == 2){
				if (funciones!=""){funciones=funciones+"*";}
				funciones = funciones + "m4valinput('_date','FormularioFiltro','" + campofo + "',0,'" + listext1 + "','"+sformatofechas+"')";			
			}	
		}
		param= param+ m4select(m4objeto("FormularioFiltro",lis),"id");
		param= param+ "*"+m4select(m4objeto("FormularioFiltro",lisc),"id")+ "*"+val+"{";
	}
	if (funciones!=""){err=m4valform(funciones);}
	if (err == 1){
	    m4valor("oculto","zisdynfilter", "0", "set");
		m4valor("oculto","ztipocarga",param,"set");
		valores();
		
	}
}

function m4pasar(){

	var aval=new Array();
	aval[0]=sIdPk;
	aval[1]=sNPk;
	m4returnvalues(aval,"oculto2");
}

function m4ordenar(sCampo){
	if (scampoant==sCampo){
		if (sOrd==0){
			sOrd=1;
		}else if (sOrd==1){
			sOrd=2;
		}else{sOrd=1;}
	}else{sOrd=1;}
	m4valor("oculto","zOrden",sOrd,"set");
	m4valor("oculto","zOrdenCampo",sCampo,"set");
	valores();	
}

function m4buscarcadena(cadena){

	var re = /,/;         
	var r = cadena.search(re);          
	return(r);                 
}

function valores(){
    
    sIsDynfilter = m4valor("oculto","zisdynfilter", "", "get")					
															
    if ( sIsDynfilter == "1"){
        m4valor("oculto","ARG_LANGUAGE", m4valor("NombreFormulario","ARG_LANGUAGE","","get"), "set");
        m4valor("oculto","ARG_API_SQL", m4valor("NombreFormulario","ARG_API_SQL","","get"), "set");
        m4valor("oculto","ARG_ID_SENTENCE", m4valor("NombreFormulario","ARG_ID_SENTENCE","","get"), "set");
        m4valor("oculto","ARG_ID_SCENARIO", m4select(m4objeto("NombreFormulario","ARG_ID_SCENARIO"),"id") , "set");
    }else{
        m4valor("oculto","zf1id",m4select(m4objeto("FormularioFiltro","list1"),"id"),"set");
        m4valor("oculto","zf3id",m4select(m4objeto("FormularioFiltro","list3"),"id"),"set");
        m4valor("oculto","zv1",m4valor("FormularioFiltro","VALOR1","","get"),"set");

        m4valor("oculto","zf2id",m4select(m4objeto("FormularioFiltro","list2"),"id"),"set");
        m4valor("oculto","zf4id",m4select(m4objeto("FormularioFiltro","list4"),"id"),"set");
        m4valor("oculto","zv2",m4valor("FormularioFiltro","VALOR2","","get"),"set");        
    }	
	
    m4submit("oculto");	
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
