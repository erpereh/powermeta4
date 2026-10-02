/* [=====================================================]   
             
	@(#)FileVersion: 811.000.008       
	@(#)FileDescription: JavaScript library with dom utilities  
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: dom_1.js    
	@(#)Date: 25/09/2001      

[=====================================================] */
// Funciones generadoras de colecciones y de acceso a elementos

function m4textodentrotd(objtd,poner,valor){
	if (poner==true){
		if (objtd.hasChildNodes() == true){ 
			if (objtd.childNodes.item(0).nodeType == 3){
				var nodotexto = document.createTextNode(valor);
				objtd.removeChild(objtd.firstChild);
				objtd.appendChild(nodotexto);
			}
		}
		else{
				var nodotexto = document.createTextNode(valor);
				objtd.appendChild(nodotexto);
		}
	
	}
	else{
		if (objtd.hasChildNodes() == true){ 
			if (objtd.childNodes.item(0).nodeType == 3){
				//alert(objtd.childNodes.item(0).nodeValue);
				return objtd.childNodes.item(0).nodeValue;
			}
		}
	}
}

function m4elemento(idelem){
	//alert(idelem);
	var objeto = document.getElementById(idelem);
	return objeto; //si objeto no existe devuelve null
	
}
function m4elementodentrodiv(capa,name){
    //alert(typeof(objetobusqueda));
	if (typeof(objetobusqueda) != "object"){
	objetobusqueda = new fragdocument();
	}
	objetobusqueda.fragmento(m4elemento(capa),name);
	//alert(objetobusqueda.ok);
	if (objetobusqueda.ok == true) {
	return objetobusqueda.objresultado;
	}
}
	
//Clase fragdocument

function fragdocument(){
	this.generado = false;
	this.fragmento = fragmento;
	this.numero = 0;
	this.objresultado = new Object();
	this.ok = false;
}
function fragmento(nodo,name){
	this.numero = this.numero +1;
	this.ok = false;
	//alert("Number of calls to fragment = " + this.numero + " where name = " + name);
	//alert(nodo.childNodes.length);
	for (var i = 0; i < nodo.childNodes.length; i++){
	var nodosig = nodo.childNodes.item(i);
	//alert(i+"\nType: "+ nodosig.nodeType+"\nName: "+nodosig.nodeName+"\nValue: "+nodosig.nodeValue);
		if ((nodosig.nodeType == 1) && (nodosig.getAttribute('name') == name)){
			this.objresultado = nodosig;
			this.ok = true;
			break;
		}
		if ((nodosig.nodeType == 1) && (nodosig.hasChildNodes() == true) && (this.ok == false)){
			this.fragmento(nodosig,name);
		}
	}
}
