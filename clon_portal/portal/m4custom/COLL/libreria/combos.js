
	var zsoc;
	var zdir;
	var zarea;
	var zuni;
	var zser;

	function tildes_unicode(str){
		str = str.replace('á','\u00e1');
		str = str.replace('é','\u00e9');
		str = str.replace('í','\u00ed');
		str = str.replace('ó','\u00f3');
		str = str.replace('ú','\u00fa');

		str = str.replace('Á','\u00c1');
		str = str.replace('É','\u00c9');
		str = str.replace('Í','\u00cd');
		str = str.replace('Ó','\u00d3');
		str = str.replace('Ú','\u00da');

		str = str.replace('ñ','\u00f1');
		str = str.replace('Ñ','\u00d1');
		return str;
	}

	function parsear(soc,dir,area,uni,ser){
		zsoc = JSON.parse(soc);
		zdir = JSON.parse(dir);
		zarea = JSON.parse(area);
		zuni = JSON.parse(uni);
		zser = JSON.parse(ser);
	}

	function cargaInicial(s,d,a,u,se) {
		if(s=="0"){
			var soci = document.getElementById("sociedad23");
			/*var opt = document.createElement("option");
				opt.value = "00";
				opt.textContent = tildes_unicode("Selecione Sociedad");
				soci.options.add(opt);*/

			s=document.getElementById("sociedad23").dataset.def;

			for(var i = 0; i < zsoc.sociedad.length; i++ ){
				var opt = document.createElement("option");
				opt.value = zsoc.sociedad[i].ID;
				opt.textContent = zsoc.sociedad[i].VALOR;
				soci.options.add(opt);
				if(i!=zsoc.sociedad.length){
					if (zsoc.sociedad[i].ID==s){
						soci.selectedIndex = i;
					}
				}else{
					soci.selectedIndex = "0";
				}
			}
		}
		if(d=="0"){
			var dire = document.getElementById("DIR");
			var opt = document.createElement("option");
				opt.value = "00";
				opt.textContent = tildes_unicode("Selecione Dirección");
				dire.options.add(opt);
			for(var i = 0; i < zdir.direccion.length; i++ ){
		    	opt = document.createElement("option");
				opt.value = zdir.direccion[i].ID;
				opt.textContent = zdir.direccion[i].VALOR;
				dire.options.add(opt);
				if(i!=zdir.direccion.length){
					if (zdir.direccion[i].ID==d){
						dire.selectedIndex = i+1;
					}
				}else{
					dire.selectedIndex = "0";
				}
			}
		}
		if(a=="0"){
			var areai = document.getElementById("ARE");
			var opt = document.createElement("option");
				opt.value = "00";
				opt.textContent = tildes_unicode("Selecione Área");
				areai.options.add(opt);
			for(var i = 0; i < zarea.area.length; i++ ){
		    	opt = document.createElement("option");
				opt.value = zarea.area[i].ID;
				opt.textContent = zarea.area[i].VALOR;
				areai.options.add(opt);
				if(i!=zarea.area.length){
					if (zarea.area[i].ID==a){
						areai.selectedIndex = i+1;
					}
				}else{
					areai.selectedIndex = "0";
				}
			}
		}

		if(u=="0"){
			var unii = document.getElementById("UNI");
			var opt = document.createElement("option");
				opt.value = "00";
				opt.textContent = tildes_unicode("Selecione Unidad");
				unii.options.add(opt);
			for(var i = 0; i < zuni.unidad.length; i++ ){
		    	opt = document.createElement("option");
				opt.value = zuni.unidad[i].ID;
				opt.textContent = zuni.unidad[i].VALOR;
				unii.options.add(opt);
				if(i!=zuni.unidad.length){
					if (zuni.unidad[i].ID==u){
						unii.selectedIndex = i+1;
					}
				}else{
					unii.selectedIndex = "0";
				}
				
			}
		}
		var seri = document.getElementById("SER");
		var opt = document.createElement("option");
			opt.value = "00";
			opt.textContent = tildes_unicode("Selecione Servicio");
			seri.options.add(opt);
		for(var i = 0; i < zser.servicio.length; i++ ){
	    	opt = document.createElement("option");
			opt.value = zser.servicio[i].ID;
			opt.textContent = zser.servicio[i].VALOR;
			seri.options.add(opt);
			if(i!=zser.servicio.length){
				if (zser.servicio[i].ID==se){
					seri.selectedIndex = i+1;
				}
			}else{
				seri.selectedIndex = "0";
			}
			
		}
	}
	
	function eliminarNoSelSoc() {

	    var soci = document.getElementById("sociedad23").value;
    	//document.getElementById("sociedad23").options.length = 0;
	    document.getElementById("DIR").options.length = 0;
		document.getElementById("ARE").options.length = 0;
		document.getElementById("UNI").options.length = 0;
		document.getElementById("SER").options.length = 0;
	    if(soci!="00"){ 
			cargaInicial(soci,0,0,0,0);
		    var aux = 0;
		    var dire = document.getElementById("DIR");
			for(var i = zdir.direccion.length - 1; i >= 0; i--){
	    	
	    		if (zdir.direccion[i].TAG!=soci) {
		    		dire.remove(i+1);
		    	}
			}
			var aux = 1;
			var areai = document.getElementById("ARE");
			for(var i = zarea.area.length- 1; i >= 0; i-- ){
				for (var j = zarea.area[i].TAG.length - 1; j >= 0; j--) {
					if (zarea.area[i].TAG[j]==soci) {
			    		aux=0;
			    	}
				}
				if(aux==1){
					areai.remove(i+1);
				}
				aux =1;
			}
			aux = 1;
			var unii = document.getElementById("UNI");
			for(var i = zuni.unidad.length- 1; i >= 0; i-- ){
				for (var j = zuni.unidad[i].TAG.length - 1; j >= 0; j--) {
					if (zuni.unidad[i].TAG[j]==soci) {
			    		aux=0;
			    	}
				}
				if(aux==1){
					unii.remove(i+1);
				}
				aux =1;
			}
			aux = 1;
			var seri = document.getElementById("SER");
			for(var i = zser.servicio.length- 1; i >= 0; i-- ){
				for (var j = zser.servicio[i].TAG.length - 1; j >= 0; j--) {
					if (zser.servicio[i].TAG[j]==soci) {
			    		aux=0;
			    	}
				}
				if(aux==1){
					seri.remove(i+1);
				}
				aux =1;
			}
		}else{
			document.getElementById("sociedad23").options.length = 0;
			cargaInicial('0','0','0','0','0');
		}
	}

	function eliminarNoSelDir() {
		var soci = document.getElementById("sociedad23").value;
	    var dire = document.getElementById("DIR").value;
		//document.getElementById("DIR").options.length = 0;
		document.getElementById("ARE").options.length = 0;
		document.getElementById("UNI").options.length = 0;
		document.getElementById("SER").options.length = 0;
	    if(dire!="00"){ 
			cargaInicial(soci,dire,'0','0','0');
			var aux = 1;
			var areai = document.getElementById("ARE");
			for(var i = zarea.area.length- 1; i >= 0; i-- ){
				for (var j = zarea.area[i].TAG.length - 1; j >= 0; j--) {
					if (zarea.area[i].TAG[j]==dire) {
			    		aux=0;
			    	}
				}
				if(aux==1){
					areai.remove(i+1);
				}
				aux =1;
			}
			aux = 1;
			var unii = document.getElementById("UNI");
			for(var i = zuni.unidad.length- 1; i >= 0; i-- ){
				for (var j = zuni.unidad[i].TAG.length - 1; j >= 0; j--) {
					if (zuni.unidad[i].TAG[j]==dire) {
			    		aux=0;
			    	}
				}
				if(aux==1){
					unii.remove(i+1);
				}
				aux =1;
			}
			aux = 1;
			var seri = document.getElementById("SER");
			for(var i = zser.servicio.length- 1; i >= 0; i-- ){
				for (var j = zser.servicio[i].TAG.length - 1; j >= 0; j--) {
					if (zser.servicio[i].TAG[j]==dire) {
			    		aux=0;
			    	}
				}
				if(aux==1){
					seri.remove(i+1);
				}
				aux =1;
			}
		}else{
			document.getElementById("DIR").options.length = 0;
			cargaInicial(soci,'0','0','0','0');
		}
	}

	function eliminarNoSelAre() {
		var soci = document.getElementById("sociedad23").value;
	    var dire = document.getElementById("DIR").value;
	    var areai = document.getElementById("ARE").value;
    	//document.getElementById("ARE").options.length = 0;
		document.getElementById("UNI").options.length = 0;
		document.getElementById("SER").options.length = 0;
	    if(areai!="00"){ 
			cargaInicial(soci,dire,areai,'0','0');
			var aux = 1;
			var unii = document.getElementById("UNI");
			for(var i = zuni.unidad.length- 1; i >= 0; i-- ){
				for (var j = zuni.unidad[i].TAG.length - 1; j >= 0; j--) {
					if (zuni.unidad[i].TAG[j]==areai) {
			    		aux=0;
			    	}
				}
				if(aux==1){
					unii.remove(i+1);
				}
				aux =1;
			}
			aux = 1;
			var seri = document.getElementById("SER");
			for(var i = zser.servicio.length- 1; i >= 0; i-- ){
				for (var j = zser.servicio[i].TAG.length - 1; j >= 0; j--) {
					if (zser.servicio[i].TAG[j]==areai) {
			    		aux=0;
			    	}
				}
				if(aux==1){
					seri.remove(i+1);
				}
				aux =1;
			}
		}else{
			document.getElementById("ARE").options.length = 0;
			cargaInicial(soci,dire,'0','0','0');
		}
	}

	function eliminarNoSelUni() {
		var soci = document.getElementById("sociedad23").value;
	    var dire = document.getElementById("DIR").value;
	    var areai = document.getElementById("ARE").value;
	    var unii = document.getElementById("UNI").value;
	    //document.getElementById("UNI").options.length = 0;
		document.getElementById("SER").options.length = 0;
	    if(unii!="00"){
			cargaInicial(soci,dire,areai,unii,'0');
			var aux = 1;
			var seri = document.getElementById("SER");
			for(var i = zser.servicio.length- 1; i >= 0; i-- ){
				for (var j = zser.servicio[i].TAG.length - 1; j >= 0; j--) {
					if (zser.servicio[i].TAG[j]==unii) {
			    		aux=0;
			    	}
				}
				if(aux==1){
					seri.remove(i+1);
				}
				aux =1;
			}
		}else{
			document.getElementById("UNI").options.length = 0;
			cargaInicial(soci,dire,areai,'0','0');
		}
	}