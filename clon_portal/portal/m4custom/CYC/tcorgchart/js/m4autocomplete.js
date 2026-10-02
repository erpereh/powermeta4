/**
	@(#)FileVersion: 812.000.042
	@(#)FileDescription:File Javascript that lets search with autocomplete
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: autocomplete.js
	@(#)Date: 03/03/2015
*/

//Variables for autocomplete
var outp;
var oldins;
var posi = -1;
var input;
var key;
var maxAutoComplete = 5;
var elementAutoComplete = 0;
var totalAutoComplete = 9;
var idNodo = "";

var ObjSearch = function(id, nameSearch, nameObj, typeSearch, categorySearch) {
	this.id = id;
	this.nameSearch = nameSearch;
	this.nameObj = nameObj;
	this.typeSearch = typeSearch;
	this.categorySearch = categorySearch;
};

var CategorySearch = function(nameCategory) {
	this.nameCategory = nameCategory;
	this.listCategory = new Array();
};

var ListSearch;
var ListCategory;

/**
 * Function to change the visibility of the autocomplete
 * 
 * @param visi,
 *            indicates whether visible or not
 */
function setVisible(visi) {
	var x = document.getElementById("shadow");
	x.style.position = 'absolute';
	x.style.display = visi;
	var t = document.getElementById("m4-titleBar-search");
	x.style.left = t.offsetLeft+'px';
	
}

/**
 * Function to init variables
 */
function init() {
	
	outp = document.getElementById("output");
	
	window.setInterval("lookAt()", 100);
	setVisible("none");
	document.onkeydown = keygetter; // needed for Opera...
	document.onkeyup = keyHandler;

}

/**
 * Function that displays the autocomplete
 */
function lookAt() {
	var ins = $jit.id("m4-titleBar-search").value;
	if (oldins == ins)
		return;
	else if (posi > -1)
		;
	else if (ins.length > 0) {
		if (ins.length > 1) {
			hideContextMenu();
			getListSearch(ins);
			if (ListSearch.length > 0) {
				clearOutput();
				elementAutoComplete=0;
				for ( var i = 0; i < ListCategory.length && i < maxAutoComplete; ++i)
					addCategory(ListCategory[i].listCategory,
							ListCategory[i].nameCategory);
				setVisible("block");
				//input = document.getElementsByName("m4-titleBar-search")[0].value;
				input = $jit.id("m4-titleBar-search").value;
			} else {
				
				//if result is empty
				clearOutput();
				elementAutoComplete=0;
				var sp = document.createElement("div");
				var titleAutoComplete = document.createElement("div");			
				var label = document.createElement("label");
				label.className='titleAutocomplete';
				label.innerText = _msgResultSearch;
				label.innerHTML = _msgResultSearch;		
				titleAutoComplete.appendChild(label);
				sp.appendChild(titleAutoComplete);							
				
				elementAutoComplete=1;									
				sp.onmouseover = mouseHandler;
				sp.onmouseout = mouseHandlerOut;
				sp.onclick = mouseClick;
				outp.appendChild(sp);
				setVisible("block");
				//input = document.getElementsByName("m4-titleBar-search")[0].value;
				input= $jit.id("m4-titleBar-search").value;

				//not asociate node
				sp.idNodo = null;
			}
		}
	} else {
		setVisible("none");
		posi = -1;
	}
	oldins = ins;
}

function addCategory(List, nameCategory) {	
	for ( var i = 0; i < List.length && i < maxAutoComplete; ++i) {
		if(totalAutoComplete>elementAutoComplete){
			if (i == 0) {
				var sp = document.createElement("div");
				var titleAutoComplete = document.createElement("div");			
				var label = document.createElement("label");
				label.className='titleAutocomplete';
				label.innerText = getNameCategoryStyle(nameCategory);
				label.innerHTML = getNameCategoryStyle(nameCategory);		
				titleAutoComplete.appendChild(label);
				sp.appendChild(titleAutoComplete);
				outp.appendChild(sp);			
				
				elementAutoComplete++;
				addWord(List[i]);
			} else {
				addWord(List[i]);
			}
		}		
	}
}

/**
 * Function to get name Type style to shown in autocomplete
 * @param type, type of type style
 * @returns name of type style
 */
function getNameCategoryStyle(type) {
	for ( var i in listStyles) {
		if (listStyles[i]._type == type) {
			return listStyles[i]._nameTypeStyle;
		}
	}
}

/**
 * Anyade una opcion a la lista de autocompletado
 * 
 * @param node
 */
function addWord(objSearch) {
	elementAutoComplete++;
	var sp = document.createElement("div");

	var divAuto1 = document.createElement("div");
	var divAuto2 = document.createElement("div");	

	if (objSearch.categorySearch != 'none') {
		var label1 = document.createElement("label");
		
		
		//bugfixing 0244292
		if(objSearch.categorySearch!=""){
			label1.innerHTML=objSearch.categorySearch+ ': ';
			label1.innerText=objSearch.categorySearch+ ': ';				
		}		
		label1.className='AtributteAutoComplete';
		var label2 = document.createElement("label");
		label2.innerHTML=objSearch.nameSearch;
		label2.innerText=objSearch.nameSearch;		
		
		// Write the name of the employee and the department to which it belongs
		divAuto1.appendChild(document.createTextNode(objSearch.nameObj));
		divAuto2.appendChild(label1);
		divAuto2.appendChild(label2);		
	} else {
		var label1 = document.createElement("label");
		label1.id='firstLabel';
		label1.innerHTML=objSearch.nameSearch;
		label1.innerText=objSearch.nameSearch;
		// Write the name of the employee and the department to which it belongs
		divAuto1.appendChild(label1);
		divAuto2.appendChild(document.createTextNode(objSearch.nameObj));
	}

	// Give style to label
	divAuto1.className = 'autocompletadoPrincipal';
	divAuto2.className = 'autocompletadoSecundario';

	// Save id node in variable DIV!!

	sp.idNodo = objSearch.id;

	sp.appendChild(divAuto1);
	sp.appendChild(divAuto2);

	sp.onmouseover = mouseHandler;
	sp.onmouseout = mouseHandlerOut;
	sp.onclick = mouseClick;
	outp.appendChild(sp);
}
/**
 * Function that remove autocomplete
 */
function clearOutput() {
	while (outp.hasChildNodes()) {
		noten = outp.firstChild;
		outp.removeChild(noten);
	}
	posi = -1;
}

/**
 * Gets the matching ListSearch
 * 
 * @param beginning
 * @returns
 */
function getListSearch(text) {

	ListSearch = new Array();
	ListCategory = new Array();
	if (isQueryAdvanced(text)) {
		var pos = text.indexOf(":");
		var key = text.substring(0, pos);
		var value = text.substring(pos + 1, text.lenght);
		getObjectsKeyValue(_st.toJSON('tree'), key, value);
	} else {
		getObjects(_st.toJSON('tree'), text);
	}
	groupByCategory();
}

function isQueryAdvanced(text) {
	var pos = text.indexOf(":");
	if (pos != -1) {
		var key = text.substring(0, pos);
		if (pos < text.length - 1) {
			// check if key belong to some style
			for ( var i in listStyles) {
				for ( var j in listStyles[i]._listItem) {
					var string1 = listStyles[i]._listItem[j]._name
							.toUpperCase();
					string1= normalizeChart(string1);
					var string2 = key.toUpperCase();
					string2= normalizeChart(string2);
					if (string1 == string2) {
						return true;
					}
				}
			}
		}
		return false;
	}
	return false;
}

function groupByCategory() {

	for ( var i=0; i<ListSearch.length;i++) {
		var category = getCategory(ListSearch[i].typeSearch);
		category.listCategory.push(ListSearch[i]);
	}
}

function getCategory(category) {
	for ( var i=0;i<ListCategory.length;i++) {
		if (ListCategory[i].nameCategory == category) {
			return ListCategory[i];
		}
	}
	var newCategory = new CategorySearch(category);
	ListCategory.push(newCategory);
	return newCategory;
}

/**
 * Function to change the color to objects of autocomplete
 */
function setColor(_posi, _color, _forg) {
	outp.childNodes[_posi].style.background = _color;
	// outp.childNodes[_posi].style.color = _forg;
}
/**
 * Get the key pressed
 * 
 * @param event
 */
function keygetter(event) {
	if (!event && window.event)
		event = window.event;
	if (event)
		key = event.keyCode;
	else
		key = event.which;
}

/**
 * Function for change color when select item
 * 
 * @param event
 */
function keyHandler(event) {
	if (document.getElementById("shadow").style.display == "block") {
		//var textfield = document.getElementsByName("m4-titleBar-search")[0];
		var textfield = $jit.id("m4-titleBar-search");
		if (key == 40) { // Key down 
			if (ListSearch.length > 0 && posi <  elementAutoComplete) {
				if (posi >= 0){
					setColor(posi, "#fff", "#23A4FF");					
				}else{
					input = textfield.value;
				}					
				if (posi < elementAutoComplete-1) {
					if(!outp.childNodes[++posi].idNodo){
						++posi;
						setColor(posi, "#d5eaf9", "white");
						if(outp.childNodes[posi].firstChild.innerText){
							textfield.value = outp.childNodes[posi].firstChild.innerText;
						}else{
							//firefox
							textfield.value = outp.childNodes[posi].firstChild.textContent;
						}						
					}else{
						setColor(posi, "#d5eaf9", "white");
						if(outp.childNodes[posi].firstChild.innerText){
							textfield.value = outp.childNodes[posi].firstChild.innerText;
						}else{
							//firefox
							textfield.value = outp.childNodes[posi].firstChild.textContent;
						}						
					}					
				} else {
					textfield.value = input;
					textfield.focus();
				}
			}
		} else if (key == 38) { // Key up
			if ( elementAutoComplete > 0 && posi >= 1) {
				if (posi > 1) {
					setColor(posi, "#fff", "#23A4FF");
					if(!outp.childNodes[--posi].idNodo){
						--posi;										
						setColor(posi, "#d5eaf9", "white");
						if(outp.childNodes[posi].firstChild.innerText){
							textfield.value = outp.childNodes[posi].firstChild.innerText;
						}else{
							//firefox
							textfield.value = outp.childNodes[posi].firstChild.textContent;
						}						
					}else{						
						setColor(posi, "#d5eaf9", "white");
						if(outp.childNodes[posi].firstChild.innerText){
							textfield.value = outp.childNodes[posi].firstChild.innerText;
						}else{
							//firefox
							textfield.value = outp.childNodes[posi].firstChild.textContent;
						}													
					}					
				} else {
					setColor(posi, "#fff", "#23A4FF");
					textfield.value = input;
					textfield.focus();
					posi--;
				}
			}
		} else if (key == 27) { // Esc
			textfield.value = input;
			setVisible("none");
			posi = -1;
			oldins = input;
		} else if (key == 8) { // Backspace
			posi = -1;
			oldins = -1;
		} else if (key == 13) { // Key ENTER
			if(posi!=-1){
				prepareNode(outp.childNodes[posi].idNodo);

				textfield.value = '';
				setVisible("none");
				posi = -1;

			}
		}
	}
}


function buttonSearch(){
	if(posi!=-1){
		prepareNode(outp.childNodes[posi].idNodo);
		//var textfield = document.getElementsByName("m4-titleBar-search")[0];
		var textfield = $jit.id("m4-titleBar-search");

		textfield.value = '';
		setVisible("none");
		posi = -1;

	}
}

/**
 * Function for change color when mouse handler
 */
var mouseHandler = function() {
	this.style.background = "#d5eaf9";
	// this.style.color = "white";
};
/**
 * Function for change color when mouse handler out
 */
var mouseHandlerOut = function() {
	this.style.background = "white";
	// this.style.color = "#23A4FF";
};

function gotoNodeSearch(idNode){

	 
	clickeBug=idNode;
		          
    // click at node       
    _st.onClick(idNode);    
    
}

function prepareNode(idNode) {
		
	hideContextMenu();
	if(idNode!=null){
		var node= _st.graph.getNode(idNode);
		_nodeSearch=node;					
									
		_st.config.levelsToShow=1;
			if (node.type == TYPE_SUBORDINATE) {
					
				 var withoutGroupEmployees = $jit.id('withoutgroupEmployees').checked;
				if(withoutGroupEmployees){
					node.selected=true;
					node.drawn=true;
					node.exist=true;					
					node.m4showEmployees = true;
					var parent = node.getParents();	
					//check tree WU
					var element= $jit.id('li_'+parent[0].id);
					markTreeWUSearch(element);
					markTreeWU(parent[0]);
					gotoNodeSearch(parent[0].id);	
				}else{
					//search node group with employee
					var parent = node.getParents();	
					var nodeGroup=getGroupNodeEmployee(idNode,parent[0]);
					nodeGroup.selected=true;
					nodeGroup.drawn=true;
					nodeGroup.exist=true;					
					nodeGroup.m4showEmployees = true;
					_nodeSearch=nodeGroup;
					//check tree WU
					var element= $jit.id('li_'+parent[0].id);
					markTreeWUSearch(element);
					markTreeWU(parent[0]);
					gotoNodeSearch(parent[0].id);	
				}
											
			}		
			if (node.type == TYPE_VACANCY) {
				
				
				 var withoutgroupVacancies = $jit.id('withoutgroupVacancies').checked;
				 if(withoutgroupVacancies){
					 	node.selected=true;
						node.drawn=true;
						node.exist=true;					
						node.m4showVacancies = true;
						var parent = node.getParents();	
						//check tree WU
						var element= $jit.id('li_'+parent[0].id);
						markTreeWUSearch(element);
						markTreeWU(parent[0]);
						gotoNodeSearch(parent[0].id);
				 }else{
					 	//search node group with employee
						var parent = node.getParents();	
						var nodeGroup=getGroupNodeVacancy(idNode,parent[0]);
						nodeGroup.selected=true;
						nodeGroup.drawn=true;
						nodeGroup.exist=true;					
						nodeGroup.m4showEmployees = true;
						_nodeSearch=nodeGroup;
						//check tree WU
						var element= $jit.id('li_'+parent[0].id);
						markTreeWUSearch(element);
						markTreeWU(parent[0]);
						gotoNodeSearch(parent[0].id);	
				 }									
			}
			if (node.type == TYPE_WU) {	
				
				var parent = node.getParents();	
				//check tree WU
				if(parent[0]){
					var element= $jit.id('li_'+node.id);
					markTreeWUSearch(element);
					markTreeWU(node);
					gotoNodeSearch(parent[0].id);
				}else{
					var element= $jit.id('li_'+node.id);
					markTreeWUSearch(element);
					markTreeWU(node);
					gotoNodeSearch(node.id);
				}
					
			}			
		}						  	  	 
	
}


/**
 * FUnction to show/hide in tree WU
 */
function markTreeWUSearch(element){
		
	//show ul in tree WU
	if(element.parentNode){		
			if(element.nodeName=='LI'){
				markTreeWUSearch(element.parentNode);
			}
			if(element.nodeName=='UL'){
				$(element).show("slow");	
				markTreeWUSearch(element.parentNode);
			}					
	}		
}


/**
 * Function to get node group with employee or vacancy with id =idNode
 * @param idNode
 * @param parent
 */
function getGroupNodeEmployee(idNode,nodeParent){
	
	var showAssistant= $jit.id('showAssistant').checked;
	var groupEmployees = $jit.id('groupEmployees').checked;
	var groupEmployeesByPost = $jit.id('groupEmployeesByPost').checked;
	
	for(var adj in nodeParent.adjacencies){
		var node=nodeParent.adjacencies[adj].nodeFrom;
		if(node.isDescendantOf(nodeParent.id)){
			
			if(showAssistant==false && groupEmployees){
				if(node.data['groupEmployees']){//without post and assistant
					for(var atr in node.data){
						if(node.data[atr]==idNode){
							return node;
						}
					}
				}
			}
			if(showAssistant && groupEmployees){
				if(node.data['groupEmployeesWithAssistant']){//without post with assistant
					for(var atr in node.data){
						if(node.data[atr]==idNode){
							return node;
						}
					}
				}
			}
			if(showAssistant ==false && groupEmployeesByPost){
				if(node.data['groupEmployeesByPost']){//witht post and without assistant
					for(var atr in node.data){
						if(node.data[atr]==idNode){
							return node;
						}
					}
				}
			}
			if(showAssistant  && groupEmployeesByPost){
				if(node.data['groupEmployeesPostWithAssistant']){//with post and assistant
					for(var atr in node.data){
						if(node.data[atr]==idNode){
							return node;
						}
					}
				}
			}
			
		}
	}
	return false;
}


/**
 * Function to get node group with employee or vacancy with id =idNode
 * @param idNode
 * @param parent
 */
function getGroupNodeVacancy(idNode,nodeParent){
		
	for(var adj in nodeParent.adjacencies){
		var node=nodeParent.adjacencies[adj].nodeFrom;
		if(node.isDescendantOf(nodeParent.id)){			
			if(isNodeGroupVacancy(node)){				
				for(var atr in node.data){
					if(node.data[atr]==idNode){
						return node;
					}
				}				
			}					
		}
	}
	return false;
}

/**
 * Method that runs when you click on an item from the autocomplete list
 */
var mouseClick = function() {
	//document.getElementsByName("m4-titleBar-search")[0].value = '';
	$jit.id("m4-titleBar-search").value = "";
	prepareNode(this.idNodo);
	setVisible("none");
	posi = -1;
	oldins = this.firstChild.nodeValue;
};

function getObjects(obj, value) {

	if ((obj.type == TYPE_WU)
			|| (obj.type == TYPE_SUBORDINATE && (!obj.data['groupEmployees'] && !obj.data['groupEmployeesByPost']&& !obj.data['groupEmployeesPostWithAssistant']&& !obj.data['groupEmployeesWithAssistant']))
			|| (obj.type == TYPE_ASSISTANT && !obj.data['groupAssistant'])
			|| (obj.type == TYPE_VACANCY && !obj.data['groupVacancies'])
			|| (obj.type == TYPE_FUNTCIONAL_DEPENDENCY )) {
		var found = false;
		for ( var i in obj.data) {
			if(i!='Photo' && i!='EncryptedID'){
				if (i.charAt(0) != '$' && typeof obj.data[i] == 'string' && !found) {
					if (checkText(obj.data[i], value)) {
						found = true;
						if (obj.type == TYPE_WU && (_configStyle[3]=="1" ||_configStyle[3]=="2")) {
							var search = new ObjSearch(obj.id, obj.data[i],
									obj.data['NameWU'], obj.type, getNameKey(
											obj.type, i));
							ListSearch.push(search);
						} else if (obj.type == TYPE_WU && _configStyle[3]=="3") {//POSITION ORGCHART
							var search = new ObjSearch(obj.id, obj.data[i],
									obj.data['VacancyName'], obj.type, getNameKey(
											obj.type, i));
							ListSearch.push(search);
						} else if (obj.type == TYPE_VACANCY) {
							var search = new ObjSearch(obj.id, obj.data[i],
									obj.data['VacancyName'], obj.type, getNameKey(
											obj.type, i));
							ListSearch.push(search);
						} else if (obj.type == TYPE_FUNTCIONAL_DEPENDENCY) {
							var search = new ObjSearch(obj.idParent, obj.data[i],
									obj.data['Name'], obj.type, getNameKey(
											obj.type, i));
							ListSearch.push(search);
						}else {
							var search = new ObjSearch(obj.id, obj.data[i],
									obj.data['Name'], obj.type, getNameKey(
											obj.type, i));
							ListSearch.push(search);
						}
					}
				}
			}			
		}
		
		//search in dependencies
		if(typeof obj.dependenciFuncional == 'object'){
			obj.dependenciFuncional['idParent']=obj.id;
			getObjects(obj.dependenciFuncional, value);
		}
		
	}

	var n= _st.graph.getNode(obj.id);
	if(n != undefined){
		if (n.type == TYPE_WU && ! n.m4lockedNode){
			for ( var i in obj.children) {
				getObjects(obj.children[i], value);
			}
		}
	}
}

function getObjectsKeyValue(obj, nameKey, value) {

	if ((obj.type == TYPE_WU)
			|| (obj.type == TYPE_SUBORDINATE && (!obj.data['groupEmployees'] && !obj.data['groupEmployeesByPost']&& !obj.data['groupEmployeesPostWithAssistant']&& !obj.data['groupEmployeesWithAssistant']))			
			|| (obj.type == TYPE_ASSISTANT && !obj.data['groupAssistant'])
			|| (obj.type == TYPE_VACANCY && !obj.data['groupVacancies'])
			|| (obj.type == TYPE_FUNTCIONAL_DEPENDENCY )) {

		var idKey = getIdKey(obj.type, nameKey);		
			if (obj.data[idKey]) {
				if(idKey!='Photo'){
					if (checkText(obj.data[idKey], value)) {
						
						//bugfixing 0244291						
						if (obj.type == TYPE_WU && (_configStyle[3]=="1" ||_configStyle[3]=="2")) {//normal orgchart
							var search = new ObjSearch(obj.id, obj.data[idKey],
									obj.data['NameWU'], obj.type, 'none');
							ListSearch.push(search);
						} else if (obj.type == TYPE_WU && _configStyle[3]=="3") {//position orgchart
							var search = new ObjSearch(obj.id, obj.data[idKey],
									obj.data['VacancyName'], obj.type, 'none');
							ListSearch.push(search);
						} else if (obj.type == TYPE_VACANCY) {
							var search = new ObjSearch(obj.id, obj.data[idKey],
									obj.data['VacancyName'], obj.type, 'none');
							ListSearch.push(search);
						} else if (obj.type == TYPE_FUNTCIONAL_DEPENDENCY) {
							var search = new ObjSearch(obj.idParent, obj.data[i],
									obj.data['Name'], obj.type, getNameKey(
											obj.type, i));
							ListSearch.push(search);
						}else {
							var search = new ObjSearch(obj.id, obj.data[idKey],
									obj.data['Name'], obj.type, 'none');
							ListSearch.push(search);
						}
					}
				}
				
			}	
			
			//search in dependencies
			if(typeof obj.dependenciFuncional == 'object'){
				obj.dependenciFuncional['idParent']=obj.id;
				getObjects(obj.dependenciFuncional, value);
			}
	}

	for ( var i in obj.children) {
		getObjectsKeyValue(obj.children[i], nameKey, value);
	}

}

/**
 * Function that return id of item give his name
 * 
 * @param type
 * @param nameKey
 * @returns id item
 */
function getIdKey(type, nameKey) {

	for ( var i in listStyles) {
		if (listStyles[i]._type == type) {
			for ( var j in listStyles[i]._listItem) {
				var string1 = listStyles[i]._listItem[j]._name.toUpperCase();
				var string2 = nameKey.toUpperCase();
				if (string1 == string2) {
					return listStyles[i]._listItem[j]._item;
				}
			}
		}
	}
	return null;
}

/**
 * Function that return name of item give his name
 * 
 * @param type
 * @param nameKey
 * @returns id item
 */
function getNameKey(type, idKey) {

	for ( var i in listStyles) {
		if (listStyles[i]._type == type) {
			for ( var j in listStyles[i]._listItem) {
				if (listStyles[i]._listItem[j]._item == idKey) {
					if(idKey=="KeyPosition"){
						//bugfixing 0244292						
						return "";					
					}else{
						return listStyles[i]._listItem[j]._name;	
					}					
				}
			}
		}
	}
}

/**
 * Function that check if strin1 belongs string2
 * 
 * @param string1
 * @param cadena2
 * @returns {Boolean}
 */
function checkText(string1, string2) {
	string1 = string1.toUpperCase();
	string1= normalizeChart(string1);
	string2 = string2.toUpperCase();
	string2= normalizeChart(string2);
	if (string1.indexOf(string2) != -1) {
		return true;
	} else {
		return false;
	}
}


/**
 * Function to delete character 
 */
var normalizeChart = (function() {
	  var from = 'ÃƒÆ’Ãƒâ‚¬ÃƒÃƒâ€žÃƒâ€šÃƒË†Ãƒâ€°Ãƒâ€¹ÃƒÅ ÃƒÅ’ÃƒÃƒÃƒÅ½Ãƒâ€™Ãƒâ€œÃƒâ€“Ãƒâ€�Ãƒâ„¢ÃƒÅ¡ÃƒÅ“Ãƒâ€ºÃƒÂ£ÃƒÂ ÃƒÂ¡ÃƒÂ¤ÃƒÂ¢ÃƒÂ¨ÃƒÂ©ÃƒÂ«ÃƒÂªÃƒÂ¬ÃƒÂ­ÃƒÂ¯ÃƒÂ®ÃƒÂ²ÃƒÂ³ÃƒÂ¶ÃƒÂ´ÃƒÂ¹ÃƒÂºÃƒÂ¼ÃƒÂ»Ãƒâ€˜ÃƒÂ±Ãƒâ€¡ÃƒÂ§',
	      to   = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc',
	      mapping = {};
	 
	  for(var i = 0, j = from.length; i < j; i++ )
	      mapping[ from.charAt( i ) ] = to.charAt( i );
	 
	  return function( str ) {
	      var ret = [];
	      for( var i = 0, j = str.length; i < j; i++ ) {
	          var c = str.charAt( i );
	          if( mapping.hasOwnProperty( str.charAt( i ) ) )
	              ret.push( mapping[ c ] );
	          else
	              ret.push( c );
	      }
	      return ret.join( '' );
	  }
	 
	})();
