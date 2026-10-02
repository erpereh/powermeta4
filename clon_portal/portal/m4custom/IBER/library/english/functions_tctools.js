/* [=====================================================]   
             
	@(#)FileVersion: 811.000.008       
	@(#)FileDescription: JavaScript library for the tctools
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: functions_tctools.js    
	@(#)Date: 25/09/2001      

[=====================================================] */


function m4setlog(stipoval,aargmen){
	var balert = false;
	if (typeof(aargmen) != "object"){
		var am = new Array();
		for (nj= 1; nj < m4setlog.arguments.length; nj ++){
			am[nj-1] = m4setlog.arguments[nj];
		}
		balert = true; 
		aargmen = am;
	}
	var sm = "";
	var ore1 = /&/; 
	var ore2 = /%/;
	var ocadena = new String(stipoval);
	var atrozos = ocadena.split(ore1); 
	for (var ni=0; ni < atrozos.length; ni++){
		if (atrozos[ni].match(ore2) == "%"){
			var sindice = atrozos[ni].slice(1);
			sm += aargmen[sindice];
		}else{
			sm += atrozos[ni]; 
		}
	}
	
	if (balert == true) alert(sm)
	
	return (sm + "\n");
} 
