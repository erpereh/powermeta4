/*
	@(#)FileVersion: 811.000.008
	@(#)FileDescription: Funciones de validacion de formularios
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: m4val.js
	@(#)Date: 23/03/2002 
*/


//Definicion de la clase m4class_val
function m4class_val(stipoval,vcar1,vcar2,vcar3){
this.m4prop_stipoval = stipoval;
this.m4prop_vcar1 = vcar1;
this.m4prop_vcar2 = vcar2;
this.m4prop_vcar3 = vcar3;
this.m4prop_bresultval = false;
this.m4prop_narginisetlognames = 3; // Posición donde comienza los arg. que se usa para mensaje de error
this.m4prop_bm4valinputarg3 = false;
this.m4prop_sepdecimal = g_ssepdecimal;
this.m4prop_sepdig = g_ssepdig;
this.m4prop_trailingzeros = g_strailingzeros;
this.m4prop_formatdata = true; // formateo de datos tras validación correcta (sep digitos, quitar 0 no significativos, espacios blanco)
this.m4met_val = m4met_val;
this.m4met_com = m4met_com;
this.m4met_conversion = m4met_conversion;
this.m4met_valnif = m4met_valnif;
this.m4met_valinterval = m4met_valinterval;
this.m4met_valinteger = m4met_valinteger;
this.m4met_valdecimal = m4met_valdecimal;
this.m4met_getdecimalexample = m4met_getdecimalexample;
}	 

function m4met_val(oinput){
var defecto = true;
if (this.m4prop_stipoval == "_date_oblig" || this.m4prop_stipoval == "_date" ){
		if (this.m4prop_bm4valinputarg3 == true) this.m4prop_narginisetlognames = 4; //Compatibilidad hacia atrás
		var defecto = false;
		var acdate = new Array();
		acdate[1] = new Array();
		acdate[2] = new Array(); 
		acdate[3] = new Array(); 
		acdate[1][1] =  "(0[1-9]{1}\|[12]{1}\\d{1}\|30\|31)";
		acdate[1][2] =  "(0[13578]{1}\|1[02]{1})";
	    //acdate[1][3] =  "\\d{4}";
        acdate[1][3] =  "(1[89]{1}\\d{2}|4000|[23]{1}\\d{3})";
		acdate[2][1] =  "(0[1-9]{1}\|[12]{1}\\d{1}\|30)";
		acdate[2][2] =  "(0[469]{1}\|11)";
		//acdate[2][3] =  "\\d{4}";
        acdate[2][3] =  "(1[89]{1}\\d{2}|4000|[23]{1}\\d{3})";
		acdate[3][1] =  "(0[1-9]{1}\|1[0-9]{1}\|2[0-9]{1})";
		acdate[3][2] =  "02";
		//acdate[3][3] =  "\\d{4}";
        acdate[3][3] =  "(1[89]{1}\\d{2}|4000|[23]{1}\\d{3})";
		var scaracterinicial = sformatofechas.substring(0,1);
		var oreM = /M/i;
		var oreD = /D/i;
		var ssepfechareg="\\"+g_ssepfechas;

		if (scaracterinicial =="D" || scaracterinicial =="d"){
			if (sformatofechas.search(oreM) == 3){
			eval("var objeto = /(^" + acdate[1][1] + ssepfechareg + acdate[1][2] + ssepfechareg+ acdate[1][3] + "$)|(^" + acdate[2][1] + ssepfechareg + acdate[2][2] + ssepfechareg+ acdate[2][3] + "$)|(^" + acdate[3][1] + ssepfechareg+ acdate[3][2] + ssepfechareg+ acdate[3][3] + "$)/");
			}
			else{
			eval("var objeto = /(^" + acdate[1][1] + ssepfechareg+ acdate[1][3] + ssepfechareg+ acdate[1][2] + "$)|(^" + acdate[2][1] + ssepfechareg + acdate[2][3] + ssepfechareg+ acdate[2][2] + "$)|(^" + acdate[3][1] + ssepfechareg+ acdate[3][3] + ssepfechareg+ acdate[3][2] + "$)/");
			}
		}
		if (scaracterinicial =="M" || scaracterinicial =="m"){
			if (sformatofechas.search(oreD) == 3){
			eval("var objeto = /(^" + acdate[1][2] + ssepfechareg + acdate[1][1] + ssepfechareg + acdate[1][3] + "$)|(^" + acdate[2][2] + ssepfechareg + acdate[2][1] + ssepfechareg+ acdate[2][3] + "$)|(^" + acdate[3][2] + ssepfechareg+ acdate[3][1] + ssepfechareg+ acdate[3][3] + "$)/");
			}
			else{
			eval("var objeto = /(^" + acdate[1][2] + ssepfechareg + acdate[1][3] + ssepfechareg + acdate[1][1] + "$)|(^" + acdate[2][2] + ssepfechareg + acdate[2][3] + ssepfechareg+ acdate[2][1] + "$)|(^" + acdate[3][2] + ssepfechareg+ acdate[3][3] + ssepfechareg+ acdate[3][1] + "$)/");
			}
		}
		if (scaracterinicial =="Y" || scaracterinicial =="y"){
			if (sformatofechas.search(oreD) == 5){
			eval("var objeto = /(^" + acdate[1][3] + ssepfechareg + acdate[1][1] + ssepfechareg + acdate[1][2] + "$)|(^" + acdate[2][3] + ssepfechareg + acdate[2][1] + ssepfechareg+ acdate[2][2] + "$)|(^" + acdate[3][3] + ssepfechareg+ acdate[3][1] + ssepfechareg+ acdate[3][2] + "$)/");
			}
			else{
			eval("var objeto = /(^" + acdate[1][3] + ssepfechareg + acdate[1][2] + ssepfechareg + acdate[1][1] + "$)|(^" + acdate[2][3] + ssepfechareg + acdate[2][2] + ssepfechareg+ acdate[2][1] + "$)|(^" + acdate[3][3] + ssepfechareg+ acdate[3][2] + ssepfechareg+ acdate[3][1] + "$)/");
			}
		}
		//var objeto = /(^\d{4}-(0[13578]{1}|1[02]{1})-(0[1-9]{1}|[12]{1}\d{1}|30|31)$)|(^\d{4}-(0[469]{1}|11)-(0[1-9]{1}|[12]{1}\d{1}|30)$)|(^\d{4}-02-(0[1-9]{1}|1[0-9]{1}|2[0-8]{1})$)/;
		var svaltotest = m4trim(oinput.value);
		if (this.m4prop_stipoval == "_date"){this.m4prop_bresultval = (svaltotest == "") ?  true : objeto.test(svaltotest);}
		else{this.m4prop_bresultval = (svaltotest == "") ?  false : objeto.test(svaltotest);}	
		if(	this.m4prop_bresultval == true && svaltotest != ""){
 		    var adateinfo = new Array(3);
		    m4splitdate(svaltotest, adateinfo);
			if (adateinfo[0] == "29" && adateinfo[1] == "02"){
			    var year = parseInt(adateinfo[2],10);
				if (((0 != year % 4) || (0 == (year % 100)))&& (0 != year % 400)){this.m4prop_bresultval = false;} 				
			}
			if(	this.m4prop_bresultval == true){oinput.value=svaltotest;}
		}
}
if (this.m4prop_stipoval == "_time_oblig" || this.m4prop_stipoval == "_time" ){
        if (this.m4prop_bm4valinputarg3 == true) this.m4prop_narginisetlognames = 4; //Compatibilidad hacia atrás
		var defecto = false;
		var atime = new Array();
		atime[1] =  "([0-9]{1}\|0[0-9]{1}\|[1]{1}[0-9]{1}|[2]{1}[0-3]{1})";
		atime[2] =  "([0-9]{1}\|0[0-9]{1}\|[1-5]{1}[0-9]{1})";
		eval("var oregularexp = /(^" + atime[1]+ "$)|(^" + atime[1]+ "[:\,\.]" + atime[2] + "$)/");
		var svaltotest = m4trim(oinput.value);
	    if (this.m4prop_stipoval == "_time"){this.m4prop_bresultval = (svaltotest == "") ?  true : oregularexp.test(svaltotest);}
		else{this.m4prop_bresultval = (svaltotest == "") ?  false : oregularexp.test(svaltotest);}
		if(	this.m4prop_bresultval == true){oinput.value=svaltotest;}
}
if (this.m4prop_stipoval == "_time_sec_oblig" || this.m4prop_stipoval == "_time_sec" ){
        if (this.m4prop_bm4valinputarg3 == true) this.m4prop_narginisetlognames = 4; //Compatibilidad hacia atrás
		var defecto = false;
		var atime = new Array();
		atime[1] =  "([0-9]{1}\|0[0-9]{1}\|[1]{1}[0-9]{1}|[2]{1}[0-3]{1})";
		atime[2] =  "([0-9]{1}\|0[0-9]{1}\|[1-5]{1}[0-9]{1})";
		eval("var oregularexp = /(^" + atime[1]+ "$)|(^" + atime[1]+ "[:\,\.]" + atime[2] + "$)|(^" + atime[1]+ "[:\,\.]" + atime[2] + "[:\,\.]" + atime[2] +"$)/");
		var svaltotest = m4trim(oinput.value);
	    if (this.m4prop_stipoval == "_time_sec"){this.m4prop_bresultval = (svaltotest == "") ?  true : oregularexp.test(svaltotest);}
		else{this.m4prop_bresultval = (svaltotest == "") ?  false : oregularexp.test(svaltotest);}
		if(	this.m4prop_bresultval == true){oinput.value=svaltotest;}
}
if (this.m4prop_stipoval == "_email_oblig" || this.m4prop_stipoval == "_email"){
		if (this.m4prop_bm4valinputarg3 == true) this.m4prop_narginisetlognames = 4; //Compatibilidad hacia atrás
		var defecto = false;
		var objeto = /^[a-z0-9]([a-z0-9_\-\.]*)@([a-z0-9_\-\.]*)(\.[a-z]{2,3}(\.[a-z]{2}){0,2})$/i;
		var svaltotest = m4trim(oinput.value);
		if (this.m4prop_stipoval == "_email"){this.m4prop_bresultval = (svaltotest == "") ?  true : objeto.test(svaltotest);}
		else{this.m4prop_bresultval = (svaltotest == "") ?  false : objeto.test(svaltotest);}
		if(	this.m4prop_bresultval == true){oinput.value=svaltotest;}
}
if (this.m4prop_stipoval == "_cp_oblig" || this.m4prop_stipoval == "_cp"){
		if (this.m4prop_bm4valinputarg3 == true) this.m4prop_narginisetlognames = 4; //Compatibilidad hacia atrás
		var defecto = false;
		var objeto = /^\d{5}$/;
		var svaltotest = m4trim(oinput.value);
		if (this.m4prop_stipoval == "_cp"){this.m4prop_bresultval = (svaltotest == "") ?  true : objeto.test(svaltotest);}
		else{this.m4prop_bresultval = (svaltotest == "") ?  false : objeto.test(svaltotest);}
		if(	this.m4prop_bresultval == true){oinput.value=svaltotest;}			
}
if (this.m4prop_stipoval == "_nif_oblig" || this.m4prop_stipoval == "_nif"){
		if (this.m4prop_bm4valinputarg3 == true) this.m4prop_narginisetlognames = 4; //Compatibilidad hacia atrás
		var defecto = false;
		var objeto = /^\d{1,8}[a-zA-Z]{1}$/;
		var svaltotest = m4trim(oinput.value);
		if (this.m4prop_stipoval == "_nif"){this.m4prop_bresultval = (svaltotest == "") ?  true : this.m4met_valnif(oinput);}
		//else{this.m4prop_bresultval = (oinput.value == "") ?  false : objeto.test(oinput.value);}			
		else{this.m4prop_bresultval = (svaltotest == "") ?  false : this.m4met_valnif(oinput);}
		if(	this.m4prop_bresultval == true){oinput.value=svaltotest;}
}
if (this.m4prop_stipoval == "_interval"){
		var defecto = false;
		this.m4prop_narginisetlognames = 6;
		var svaltotest = m4trim(oinput.value);
		if (this.m4prop_stipoval == "_interval"){this.m4prop_bresultval = (svaltotest == "") ?  true : this.m4met_valinterval(oinput);}
		else{this.m4prop_bresultval = (svaltotest == "") ?  false : this.m4met_valinterval(oinput);}
		if(	this.m4prop_bresultval == true){oinput.value=svaltotest;}
}
if (this.m4prop_stipoval == "_str_oblig" || this.m4prop_stipoval == "_str"){
		var defecto = false;
		this.m4prop_narginisetlognames = 4;
		var oregularexp = /^[0-9]+$/;
		if (oregularexp.test(this.m4prop_vcar1) != false){
		var srepetition = "";
		this.m4prop_vcar1 == 0 ? srepetition = "*" : srepetition = "{" + this.m4prop_vcar1 + ",}";
		var objeto = new RegExp("^[ a-zA-Z.,ãÃõÕàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛáéíóúÁÉÍÓÚäëïöüÄËÏÖÜæÆœŒñÑçÇªº@%ŠšŸƒÅÏÐÖ×ØÝÞßåðøýþÿ‰¢,_,\\-,:,\\,,\(,\),\',&,^,`,´,\",/,\$,€,£,\\\\]" + srepetition + "$");
		
		  
		
		var svaltotest = m4trim(oinput.value);
		if (this.m4prop_stipoval == "_str"){this.m4prop_bresultval = (svaltotest == "") ?  true : objeto.test(svaltotest);}
		else{this.m4prop_bresultval = (svaltotest == "") ?  false : objeto.test(svaltotest);}
		if(	this.m4prop_bresultval == true){oinput.value=svaltotest;}	
		}
		else {
		throw (new m4class_parametronodefinido("m4met_val (m4valinput)","vcar1"));
		}		
}
if (this.m4prop_stipoval == "_num_oblig" || this.m4prop_stipoval == "_num"){
		var defecto = false;
		this.m4prop_narginisetlognames = 4;
		var svaltotest = m4trim(oinput.value);
		var oregularexp = /^[0-9]+$/;
		iNumMaxDig =  parseInt(this.m4prop_vcar1,10);
	    if (oregularexp.test(this.m4prop_vcar1) == false){ throw (new m4class_parametronodefinido("m4met_val (m4valinput)","vcar1"));}
        if (svaltotest == ""){ this.m4prop_bresultval =	(this.m4prop_stipoval == "_num") ? true : false;
		}else{this.m4prop_bresultval = this.m4met_valinteger(svaltotest,parseInt(this.m4prop_vcar1,10),false,true);}
		if(this.m4prop_bresultval == true){
   		 if(this.m4prop_bresultval == true){oinput.value = (this.m4prop_formatdata == true && (this.m4prop_sepdig != "" || this.m4prop_trailingzeros > 0))? m4formatNum(svaltotest,true):svaltotest}
		}else{if ( iNumMaxDig > 0){this.m4prop_stipoval = this.m4prop_stipoval  + "with_min_digit";}}
						
}
if (this.m4prop_stipoval == "_int_oblig" || this.m4prop_stipoval == "_int"){
		var defecto = false;
		this.m4prop_narginisetlognames = 4;
		var svaltotest = m4trim(oinput.value);
		var oregularexp = /^[0-9]+$/;
	    if (oregularexp.test(this.m4prop_vcar1) == false){ throw (new m4class_parametronodefinido("m4met_val (m4valinput)","vcar1"));}
        if (svaltotest == ""){ this.m4prop_bresultval =	(this.m4prop_stipoval == "_int")?true:false;
		}else{this.m4prop_bresultval = this.m4met_valinteger(svaltotest,parseInt(this.m4prop_vcar1,10),true,true);}		
		if(this.m4prop_bresultval == true){oinput.value = (this.m4prop_formatdata == true && (this.m4prop_sepdig != "" || this.m4prop_trailingzeros > 0))? m4formatNum(svaltotest,true):svaltotest}	
}
if (this.m4prop_stipoval == "_alfanum_oblig" || this.m4prop_stipoval == "_alfanum"){
		var defecto = false;
		this.m4prop_narginisetlognames = 4;
		var oregularexp = /^[0-9]+$/;
		if (oregularexp.test(this.m4prop_vcar1) != false){
		var srepetition = "";
		this.m4prop_vcar1 == 0 ? srepetition = "*" : srepetition = "{" + this.m4prop_vcar1 + ",}";		
		var objeto = new RegExp("^[ a-zA-Z0-9.,ãÃõÕàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛáéíóúÁÉÍÓÚäëïöüÄËÏÖÜæÆœŒñÑçÇªº@%ŠšŸƒÅÏÐÖ×ØÝÞßåðøýþÿ‰¢,_,\\-,:,\\,,\(,\),\',&,^,`,´,\",/,\$,€,£,\\\\]" + srepetition + "$");
		var svaltotest = m4trim(oinput.value);
		if (this.m4prop_stipoval == "_alfanum"){this.m4prop_bresultval = (svaltotest == "") ?  true : objeto.test(svaltotest);}
		else{this.m4prop_bresultval = (svaltotest == "") ?  false : objeto.test(svaltotest);}
		if(	this.m4prop_bresultval == true){oinput.value=svaltotest;}
		}
		else {
		throw (new m4class_parametronodefinido("m4met_val (m4valinput)","vcar1"));
		}		
}

if (this.m4prop_stipoval == "_comentario"){
		var defecto = false;
		this.m4prop_narginisetlognames = 4;
		var oregularexp = /^[0-9]+$/;
		if ((oregularexp.test(this.m4prop_vcar1) != false) && (this.m4prop_vcar1 != 0)){
		var objeto = new RegExp("^[ a-zA-Z0-9.,ãÃõÕàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛáéíóúÁÉÍÓÚäëïöüÄËÏÖÜæÆœŒñÑçÇªº@%ŠšŸƒÅÏÐÖ×ØÝÞßåðøýþÿ‰¢,_,\\-,:,\\,,\(,\),\',&,^,`,´,\r,\n,\",/,\$,€,£,\\\\]{0," + this.m4prop_vcar1 +"}$");
		this.m4prop_bresultval = objeto.test(oinput.value);
		}
		else if (this.m4prop_vcar1 == 0){
		oinput.value == "" ? this.m4prop_bresultval = true : this.m4prop_bresultval == false; 	
		}else{
		throw (new m4class_parametronodefinido("m4met_val (m4valinput)","vcar1"));
		}		
}
if (this.m4prop_stipoval == "_currency_oblig" || this.m4prop_stipoval == "_currency"){
        var defecto = false;
		this.m4prop_narginisetlognames = 4;
		this.m4prop_sepdig =g_ssepdig_cur;
		this.m4prop_sepdecimal =g_ssepdecimal_cur;
		this.m4prop_trailingzeros = g_strailingzeros_cur;
		var oregularexp = /^[0-9]+$/;
		var svaltotest = m4trim(oinput.value);
		if (oregularexp.test(this.m4prop_vcar1) == false){throw (new m4class_parametronodefinido("m4met_val (m4valinput)","vcar1"));}
		if (svaltotest == ""){this.m4prop_stipoval == "_currency"? this.m4prop_bresultval = true : this.m4prop_bresultval = false;}
		else{this.m4prop_vcar3 = this.m4prop_vcar2; //Pasar el nombre del campo
		this.m4prop_vcar2 = this.m4prop_vcar1; // Pasar los decimales a vcar2
		this.m4prop_vcar1 = "12" 
		this.m4prop_bresultval = this.m4met_valdecimal(svaltotest,parseInt(this.m4prop_vcar1,10),parseInt(this.m4prop_vcar2,10));}	
		if(this.m4prop_bresultval == true){oinput.value = (this.m4prop_formatdata == true && (this.m4prop_sepdig != "" || this.m4prop_trailingzeros > 0))? m4formatNum(svaltotest,true,true,this.m4prop_vcar2):svaltotest}
}
if (this.m4prop_stipoval == "_decimal_oblig" || this.m4prop_stipoval == "_decimal"){
        var defecto = false;
		this.m4prop_narginisetlognames = 5;
		var oregularexp = /^[0-9]+$/;
		var svaltotest = m4trim(oinput.value);
		if (oregularexp.test(this.m4prop_vcar1) == false){throw (new m4class_parametronodefinido("m4met_val (m4valinput)","vcar1"));}
  	    if (oregularexp.test(this.m4prop_vcar2) == false){throw (new m4class_parametronodefinido("m4met_val (m4valinput)","vcar2"));}		
		if (svaltotest == ""){this.m4prop_bresultval = (this.m4prop_stipoval == "_decimal")? true:false;
		}else{this.m4prop_bresultval = this.m4met_valdecimal(svaltotest,parseInt(this.m4prop_vcar1,10),parseInt(this.m4prop_vcar2,10));}	
		if(this.m4prop_bresultval == true){oinput.value = (this.m4prop_formatdata == true && (this.m4prop_sepdig != "" || this.m4prop_trailingzeros > 0))? m4formatNum(svaltotest,true):svaltotest}
}
if (this.m4prop_stipoval == "_int_decimal_oblig" || this.m4prop_stipoval == "_int_decimal"){
		var defecto = false;
		this.m4prop_narginisetlognames = 5;
		var oregularexp = /^[0-9]+$/;
		var svaltotest = m4trim(oinput.value);
		if (oregularexp.test(this.m4prop_vcar1) == false){throw (new m4class_parametronodefinido("m4met_val (m4valinput)","vcar1"));}
  	    if (oregularexp.test(this.m4prop_vcar2) == false){throw (new m4class_parametronodefinido("m4met_val (m4valinput)","vcar2"));}
		if (svaltotest == ""){this.m4prop_bresultval = (this.m4prop_stipoval == "_int_decimal")? true:false;}
		else{this.m4prop_bresultval = this.m4met_valdecimal(svaltotest,parseInt(this.m4prop_vcar1,10),parseInt(this.m4prop_vcar2,10),true);}	
		if(this.m4prop_bresultval == true){oinput.value = (this.m4prop_formatdata == true && (this.m4prop_sepdig != "" || this.m4prop_trailingzeros > 0))? m4formatNum(svaltotest,true):svaltotest}
}


if (this.m4prop_stipoval == "_telef_oblig" || this.m4prop_stipoval == "_telef"){
		if (this.m4prop_bm4valinputarg3 == true) this.m4prop_narginisetlognames = 4; //Compatibilidad hacia atrás
		var defecto = false;
		var objeto = /^[0-9\(\)-\\+\/ ]{9,16}$/;
		var svaltotest = m4trim(oinput.value);
		if (this.m4prop_stipoval == "_telef"){this.m4prop_bresultval = (svaltotest == "") ?  true : objeto.test(svaltotest);}
		else{this.m4prop_bresultval = (svaltotest == "") ?  false : objeto.test(svaltotest);}
		if(	this.m4prop_bresultval == true){oinput.value=svaltotest;}		
}
if (this.m4prop_stipoval == "_id_oblig" || this.m4prop_stipoval == "_id"){
		if (this.m4prop_bm4valinputarg3 == true) this.m4prop_narginisetlognames = 4; //Compatibilidad hacia atrás
		var defecto = false;
		var objeto = /^[A-Z0-9]*$/;
		var svaltotest = m4trim(oinput.value);
		if (this.m4prop_stipoval == "_id"){this.m4prop_bresultval = (svaltotest == "") ?  true : objeto.test(svaltotest);}
		else{this.m4prop_bresultval = (svaltotest == "") ?  false : objeto.test(svaltotest);}
		if(	this.m4prop_bresultval == true){oinput.value=svaltotest;}		
}
if (this.m4prop_stipoval == "_oblig"){
		if (this.m4prop_bm4valinputarg3 == true) this.m4prop_narginisetlognames = 4; //Compatibilidad hacia atrás
		var defecto = false;
		var svaltotest = m4trim(oinput.value);
		this.m4prop_bresultval = (svaltotest == "") ?  false : true;
		if(	this.m4prop_bresultval == true){oinput.value=svaltotest;}
}

if (defecto == true){
throw (new m4class_modonodefinido("m4met_val",this.m4prop_stipoval));
return;
}
}
function m4met_com(sinput1,sinput2,stipocom,stipoval){
var bresult = false;
var svalue1 = sinput1;
var svalue2 = sinput2;
if ((svalue1 != "") && (svalue2 != "")){
var ore = /-/g;
if (stipocom != "==" && stipocom != "!=" && stipocom != "<" && stipocom != ">" && stipocom != "<=" && stipocom != ">=") throw (new m4class_modonodefinido("m4valinput",stipocom));
	switch (stipoval)
	{
			case  "_date"  :
				bresult = eval(this.m4met_conversion(svalue1) + stipocom + this.m4met_conversion(svalue2));
				return bresult;
			case  "_date_oblig"  :
				bresult = eval(this.m4met_conversion(svalue1) + stipocom + this.m4met_conversion(svalue2));
				return bresult;
			case "_num" : 
				bresult = eval(svalue1 + stipocom + svalue2);
				return bresult;
			case "_num_oblig" : 
				bresult = eval(svalue1 + stipocom + svalue2);
				return bresult;
			case "_decimal" :
				bresult = eval(svalue1 + stipocom + svalue2);
				return bresult;
			case "_decimal_oblig" :
				bresult = eval(svalue1 + stipocom + svalue2);
				return bresult;
			default :
				bresult = eval("'" + svalue1 + "'" + stipocom + "'" +svalue2 + "'");
				return bresult;
	}
}else{return true;}
}			
function m4met_conversion(sdate){
var oreM = /M/i;var oreD = /D/i;var oreY = /Y/i;var oresep = g_ssepfechas;  
var ap= new Array();
var ny = sformatofechas.search(oreY);
var nm = sformatofechas.search(oreM);
var nd = sformatofechas.search(oreD);
ap[ny] = "Y";ap[nm] = "M";ap[nd] = "D";
var max = Math.max(Math.max(ny,nm),nd);
if (max == ny) {var med= Math.max(nm,nd);var min=Math.min(nm,nd);}
if (max == nm) {var med= Math.max(ny,nd);var min=Math.min(ny,nd);}
if (max == nd) {var med= Math.max(ny,nm);var min=Math.min(ny,nm);}  
var ocadena = new String(sdate);
var atrozos = ocadena.split(oresep);
if (ap[min] == "Y"){
	if (ap[med] == "M"){var nnum=parseInt(atrozos[0].toString() + atrozos[1].toString() + atrozos[2].toString(),10);}
	if (ap[med] == "D"){var nnum=parseInt(atrozos[0].toString() + atrozos[2].toString() + atrozos[1].toString(),10);} 
}
if (ap[min] == "M"){
	if (ap[med] == "D"){var nnum=parseInt(atrozos[2].toString() + atrozos[0].toString() + atrozos[1].toString(),10);}
	if (ap[med] == "Y"){var nnum=parseInt(atrozos[1].toString() + atrozos[0].toString() + atrozos[2].toString(),10);} 
} 
if (ap[min] == "D"){
	if (ap[med] == "Y"){var nnum=parseInt(atrozos[1].toString() + atrozos[2].toString() + atrozos[0].toString(),10);}
	if (ap[med] == "M"){var nnum=parseInt(atrozos[2].toString() + atrozos[1].toString() + atrozos[0].toString(),10);} 
}
return nnum;
}
function m4met_valinterval(vinput){
	var breturn = false;
	if (this.m4prop_vcar1 == "_num_oblig" || this.m4prop_vcar1  == "_decimal_oblig") {
		if (this.m4prop_vcar2 == "") this.m4prop_vcar2 = -Infinity;
		if (this.m4prop_vcar3 == "") this.m4prop_vcar3 = Infinity;	  
		var buno = false;var bdos = false;
	    var sval = m4parseFloat(vinput.value);		
	    if (sval >= this.m4prop_vcar2) buno = true;
	    if (sval <= this.m4prop_vcar3) bdos = true;
	    breturn = buno*bdos;
	}else{ if (this.m4prop_vcar1  == "_date_oblig"){
   		this.m4prop_stipoval = this.m4prop_vcar1;
   		this.m4met_val(vinput);
   		if (this.m4prop_bresultval == false){
   			breturn = false;
   		}else{ 
   			var buno = false;var bdos = false;var btres = false;var bcuatro = false;
   			var ninicio = 0;var nfin = 0;
   			if (this.m4prop_vcar2 == ""){ ninicio = 0; btres = true;}
   			if (this.m4prop_vcar3 == ""){ nfin = Infinity; bcuatro = true;}
   			if (this.m4prop_vcar2 != ""){
   			oobjectdummy = {value: this.m4prop_vcar2};
   			this.m4met_val(oobjectdummy);
   			btres = this.m4prop_bresultval;
   			delete oobjectdummy;
   			}
   			if (this.m4prop_vcar3 != ""){
   			oobjectdummy = {value: this.m4prop_vcar3};
   			this.m4met_val(oobjectdummy);
   			bcuatro = this.m4prop_bresultval;
   			delete oobjectdummy;
   			}
   			if (btres == true && this.m4prop_vcar2 != "") ninicio = this.m4met_conversion(this.m4prop_vcar2);
   			if (bcuatro == true && this.m4prop_vcar3 != "") nfin = this.m4met_conversion(this.m4prop_vcar3);
   				
   			if (btres*bcuatro == true){	
   				if (this.m4met_conversion(vinput.value) >= ninicio) buno = true;
   				if (this.m4met_conversion(vinput.value) <= nfin) bdos = true;
   			}
			breturn = buno*bdos*btres*bcuatro;
		  }
		}else{
		throw (new m4class_modonodefinido("m4met_valinterval",this.m4prop_vcar1));
		}
	}
return breturn;
}
function m4met_valnif(oinput) {
	var svaltotest = m4trim(oinput.value);
	var sCadenaNif = svaltotest;
	var sNumNif;
	var nNumNif;
	var sBlanco = "";
	var nLetraNif;
	var sLetraNif;
	var sLetraNifCalc;	
	var expRegInicioCero = /^0+/;
	var expRegFinNum = /[0-9]$/;
	var mLetras = new Array("T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E");
	sCadenaNif = sCadenaNif.replace(expRegInicioCero,sBlanco);
	sNumNif = sCadenaNif;
	sLetraNif = sNumNif.substr(sNumNif.length-1,sNumNif.length);

	if (sNumNif.match(expRegFinNum) == null){
		//Termina con letra. Selecciono el número.
		sLetraNif = sNumNif.substr(sNumNif.length-1,sNumNif.length);
		sNumNif = sNumNif.substr(0,sNumNif.length-1);
		nLongitud = sNumNif.length-1;
	}

	nLongitud = sNumNif.length;
	var expRegNum = new RegExp("^\\d{" + nLongitud +",}$");
	
	if (!expRegNum.test(sNumNif)) {
		//Es letra el digito insertado--> Error.
		//alert("Error: Formato NIF incorrecto.");
		return false;
	}
	
	nNumNif = parseInt(sNumNif,10);	
	nLetraNif = sNumNif - (23 * Math.floor(nNumNif/23));
	sLetraNifCalc = mLetras[nLetraNif];	
	sLetraNif = sLetraNif.toUpperCase();	
	if (sLetraNif != sLetraNifCalc) {
		alert("Error: La letra o el número es incorrecto. Para ese numero la letra es " + sLetraNifCalc);
		return false;
	}	
	oinput.value = sNumNif + sLetraNifCalc;
	return true;
}

function m4met_valinteger(sval,idignumber,bLetNegative,bMinLength){
   var oregularexp = /^[0-9]$/;  var sReg="";
   if (typeof(bLetNegative)=="undefined"){bLetNegative=false;}
   if (typeof(bMinLength)=="undefined"){bMinLength=false;}
   var sRegNeg =(bLetNegative==true)? "[-]{0,1}" : ""; 
   if (this.m4prop_sepdig != ""){
        if (sval.substr(0,1) == this.m4prop_sepdig){return false;} // starts by group digit symbol
		else{sval = sval.replace(new RegExp("\\"+this.m4prop_sepdig,"g"),'');}//take out group digit symbol
   }
   if (idignumber == 0){ 
      sReg = "(^" + sRegNeg + "\\d*$)";
   }else if (bMinLength == true){ // Numero con longitud mínima de idignumber dígitos
      sReg = "(^" + sRegNeg + "\\d{" + idignumber + ",}" + "$)";
   } else{sReg = "(^" + sRegNeg + "\\d{1," + idignumber + "}" + "$)";}	 
   var objeto = new RegExp(sReg);			
   return(objeto.test(sval));
}
function m4met_valdecimal(sval,idignumber,idecnumber,bLetNegative){    
    if (typeof(bLetNegative)=="undefined"){bLetNegative=false;}
	var atrozos = sval.split(this.m4prop_sepdecimal);
	var sEnt = atrozos[0];
	var sDec="";
  	if ((atrozos.length > 2) || (atrozos.length == 2 && atrozos[1]=="")) {return false;}
	if (atrozos.length > 1){sDec=atrozos[1];}
	if (idecnumber==0 && sDec!=""){ return false;}
    var bResult = this.m4met_valinteger(sEnt,idignumber,bLetNegative);
	if ((bResult==true) && (sDec!="")){ 					
   	   var sReg = (idecnumber == 0)? "": "(^\\d{1," + idecnumber + "}$)";
   	   var objeto = new RegExp(sReg);			
   	   bResult=objeto.test(sDec);
	}   
	return (bResult);
}

function m4met_getdecimalexample(){
		var sdecimalejemplo = "";
		var sintejemplo = "";
		for (i = 0; i< m4parseInt(this.m4prop_vcar2,10); i++){sdecimalejemplo = sdecimalejemplo + "d";}
		for (i = 0; i< m4parseInt(this.m4prop_vcar1,10); i++){sintejemplo = sintejemplo + "d";}
		if (sdecimalejemplo != "") {sintejemplo = sintejemplo + this.m4prop_sepdecimal;}
		return(sintejemplo+sdecimalejemplo);    
}


//*********************funciones de validacion de un formulario*******************************//

//Inicializacion de los arrays

var am4objetos = new Array();
var am4validaciones = new Array();
var am4argmensajes = new Array();
var g_M4_NO_FORMAT = "M4_NO_FORMAT";

//Definicion de las funciones
function m4valinput(stipoval,sidform,sidinput,vcar1,vidinput2){
var nsalida = 0;
var bretorno = false;
var narginisetlognames = 3;
if (m4valinput.arguments[0] != "_com"){
    
	if (m4valinput.arguments.length < 3) throw (new m4class_numparametrosincorrecto("m4valinput",m4valinput.arguments.length,3)); 
	if (typeof(document.forms[sidform]) == "undefined" || typeof(document.forms[sidform].elements[sidinput]) == "undefined") throw (new m4class_noexisteelemento("m4valinput",sidform,sidinput));
	var oregularexp = /^[0-9]{1,}$/;
	var bresultvcar1 = oregularexp.test(vcar1);
	eval("var " + "oobj" + stipoval + " = new m4class_val('" + stipoval + "','" + vcar1 + "','" + vidinput2 + "','"+ m4valinput.arguments[5] + "');");
	eval("oobj" + stipoval + ".m4prop_bm4valinputarg3 = " + bresultvcar1 + ";");
	if (m4valinput.arguments[m4valinput.arguments.length-1] == g_M4_NO_FORMAT){
	   eval("oobj" + stipoval + ".m4prop_formatdata = " + false + ";");}
	eval("oobj" + stipoval + ".m4met_val(document.forms[sidform].elements[sidinput])");
	bretorno = eval("oobj" + stipoval + ".m4prop_bresultval");
	narginisetlognames = eval("oobj" + stipoval + ".m4prop_narginisetlognames");
	if ((stipoval == "_currency" || stipoval == "_currency_oblig")&& bretorno==false){
   	   if (m4valinput.arguments[m4valinput.arguments.length-1] != g_M4_NO_FORMAT){ m4valinput.arguments.length = m4valinput.arguments.length+1;}
	   m4valinput.arguments[m4valinput.arguments.length -1] =eval("oobj" + stipoval + ".m4met_getdecimalexample()");		   
	}else if ( bretorno==false && (stipoval == "_num" || stipoval == "_num_oblig")||(stipoval == "_int" || stipoval == "_int_oblig")){
	   var smin_dig_message ="";
	   if (parseInt(vcar1,10) > 1){
	      smin_dig_message = m4getmessage("_oblig_min_digit", vcar1);
	   }else if (parseInt(vcar1,10) == 1){
	      smin_dig_message = m4getmessage("_oblig_min_1digit", vcar1);
	   } 	  	   
	   if (m4valinput.arguments[m4valinput.arguments.length-1] != g_M4_NO_FORMAT){ m4valinput.arguments.length = m4valinput.arguments.length+1;}
	   m4valinput.arguments[m4valinput.arguments.length -1] =smin_dig_message;		   
	}
	eval("delete "+ "oobj" + stipoval);
	
}else{
	if (m4valinput.arguments.length < 8) throw (new m4class_numparametrosincorrecto("m4valinput",m4valinput.arguments.length,8));
	if (typeof(document.forms[sidform]) == "undefined" || typeof(document.forms[sidform].elements[sidinput]) == "undefined") throw (new m4class_noexisteelemento("m4valinput",sidform,sidinput));
	if (typeof(document.forms[vcar1]) == "undefined" || typeof(document.forms[vcar1].elements[vidinput2]) == "undefined") throw (new m4class_noexisteelemento("m4valinput",vcar1,vidinput2));
	var oinput1 = document.forms[sidform].elements[sidinput];
	var oinput2 = document.forms[vcar1].elements[vidinput2];
	var stipocominputs = m4valinput.arguments[5];
	eval("var " + "oobj" + stipoval + " = new m4class_val('" + m4valinput.arguments[6] + "',m4valinput.arguments[7]);");
	eval("oobj" + stipoval + ".m4met_val(oinput1)");
	var bretorno1 = eval("oobj" + stipoval + ".m4prop_bresultval");
	eval("oobj" + stipoval + ".m4met_val(oinput2)");
	var bretorno2 = eval("oobj" + stipoval + ".m4prop_bresultval");
	//alert(bretorno1*bretorno2);
	if ((bretorno1*bretorno2) == 0){
	eval("delete "+ "oobj" + stipoval);
	var oinputerror = "";
	if (bretorno1 == 0) oinputerror =  oinput1;
	if (bretorno2 == 0) oinputerror =  oinput2;
	am4objetos[0] = oinputerror;
	m4oexcepcion_val = {m4prop_id: "val_error_com", m4prop_am4objetos: am4objetos, m4prop_stipoval: m4valinput.arguments[6]};
	throw m4oexcepcion_val;
	}else{
	bretorno = eval("oobj" + stipoval + ".m4met_com('"+ oinput1.value+"','"+oinput2.value+"','"+stipocominputs+"','"+m4valinput.arguments[6]+"')");
	}
	eval("delete "+ "oobj" + stipoval);
}
if (bretorno == true) nsalida = 1;
if (nsalida ==0){
var aargmen = new Array();
if (m4valinput.arguments[0] != "_com"){var ninicio = narginisetlognames;}else{var ninicio = 8;}
for (var ni = ninicio; ni < m4valinput.arguments.length; ni++){
aargmen[aargmen.length] = m4valinput.arguments[ni];
}
am4objetos[am4objetos.length] = document.forms[sidform].elements[sidinput];
am4validaciones[am4validaciones.length] = stipoval;
am4argmensajes[am4argmensajes.length] = aargmen;
}
return nsalida;
}

function m4borrado(){
for (var ni=0; ni < am4objetos.length; ni++){
am4objetos[ni].style.background = "#FFFFFF";
}
am4objetos = new Array();
}
function m4valform(sfunciones){
try{
	m4borrado();
    sfunciones = m4EscFunct(sfunciones);

	var ntotal = eval(sfunciones);
	if (ntotal == 0) {m4oexcepcion_val = {m4prop_id: "val_error", m4prop_am4objetos: am4objetos, m4prop_am4validaciones: am4validaciones, m4prop_am4argmensajes: am4argmensajes};
	am4validaciones = new Array();
	am4argmensajes = new Array();
	throw m4oexcepcion_val;
	}
	return ntotal;
}catch(excepcion) {if (excepcion.m4prop_id == "val_error" || excepcion.m4prop_id == "val_error_com"){m4err_val(excepcion);return ntotal;}else{m4err_gen(excepcion);}}
}
function m4EscFunct(sfunctions){
  //sfunctions = "m4valinput('_currency_oblig','NombreFormulario','cantidad',m4select('NombreFormulario','idmoneda','value'),'Va\'lor')";
  var sresult =""
  var sargs = "";

 if (sfunctions != ""){
  arrFuncts = sfunctions.split(/\*/); // Separar por el asterisco
  for (var i=0; i<arrFuncts.length; i++) {
     arrArgs=arrFuncts[i].split(/\(/); //Separar por el parentesis de abrir
     sFunctName = arrArgs[0];         // Tomo el nombre de la funcion
     //Recojo la informacion de los argumentos, los uno todos por si hay ( como argumento
     for (var j=1; j<arrArgs.length; j++) {
        if (j>1){ sargs =sargs +  "(" + arrArgs[j]; } else{ sargs =arrArgs[j]; }
     }
     sargs = sargs.substr(0,sargs.length-1);  //Quitar el parentesis del final
     sresult = sresult + sFunctName  + "(" + m4EscAllArgs(sargs)  + ")" + "*" ;
   }
  sresult = sresult.substr(0,sresult.length-1);   //quitar el ultimo asterisco
 }else {sresult = sfunctions;}

 return sresult;
}
function m4EscAllArgs(sargs){

   //solo se escapan el contenido de los argumentos que van entre comilla simple. Tener en cuenta
   // que podemos tener argumentos que sean a la vez invocaciones a javascript m4select('..','').. y estas
   // comillas no hay que escaparlas
  //sargs = "'a'a','b','c'";
  var sresult = "";

  if (sargs != ""){
     var argArr = sargs.split(/\,/);  // cuidado que puede venir la coma como contenido
     for (var i=0; i<argArr.length; i++) {
        // Si empieza en comilla y no termina en comilla hay que concatenarlo con el siguiente
		//Quitar los posibles blancos de por delante y por detras antes de tratarlo bug:0088708
       sarg = argArr[i];
	   sarg = m4trim(sarg)
       sfirstcar = sarg.substr(0,1) ;
       slastcar = sarg.substr(sarg.length-1,1) ;
       while(sfirstcar == "'" && slastcar!="'"){
          i++;
          sarg= sarg + "," + argArr[i];
          slastcar = sarg.substr(sarg.length-1,1) ;
       } 
       //El numero de parentesis de abrir deber ser igual a los de cerrar.Anidacion de funciones.
       while( m4EqualOpenCloseBrackets(sarg) == false){
          i++;
          sarg= sarg + "," + argArr[i];
       }     
   
       if (sfirstcar == "'"){
          sargresult= "'" + m4EscArg(sarg.substr(1,sarg.length-2)) + "'"; 
          if (sargresult != sarg) sargresult = "escape(" + sargresult + ")";
       }
       else{ sargresult=  sarg;} 

       sresult  = sresult + sargresult + ",";
     }
     sresult = sresult.substr(0,sresult.length-1);      //quitar la ultima coma

  }
  return sresult;
}


function m4EscArg(sarg){
  var sresult = sarg;
  
  sresult = sresult.replace(/'/gi, "\\'");
  sresult = sresult.replace(/"/gi, '\\"');
  sresult = sresult.replace(/\n/gi, "\\n");
  sresult = sresult.replace(/\r/gi, "\\r");

  return sresult;
}

function m4EqualOpenCloseBrackets(sString){
  //Comprobar que hay el mismo numero de parentesis abiertos que cerrados
  var iOpenBracketsNum = 0;
  var iCloseBracketsNum = 0;
  var sStringToFindIn = sString; 
  rExpOpenBrackets = /\(/g;
  rExpCloseBrackets= /\)/g;
  results = sStringToFindIn.search(rExpOpenBrackets)
  while (results != -1){
     iOpenBracketsNum = iOpenBracketsNum +1;
     sStringToFindIn = sStringToFindIn.substr(results+1,sStringToFindIn.length-1);
     results = sStringToFindIn.search(rExpOpenBrackets)
  } 
  results = sStringToFindIn.search(rExpCloseBrackets)
  while (results != -1){
     iCloseBracketsNum = iCloseBracketsNum +1;
     sStringToFindIn = sStringToFindIn.substr(results+1,sStringToFindIn.length-1);
     results = sStringToFindIn.search(rExpCloseBrackets)
  } 
 
  return ( iOpenBracketsNum == iCloseBracketsNum);

}
function m4ltrim (s){
if (m4ltrim.arguments.length < 1) throw (new m4class_numparametrosincorrecto("m4ltrim",m4ltrim.arguments.length1));
 return s.replace( /^\s*/,"");}
function m4rtrim (s){
if (m4rtrim.arguments.length < 1) throw (new m4class_numparametrosincorrecto("m4rtrim",m4rtrim.arguments.length1));
return s.replace( /\s*$/,"");}
function m4trim (s){
if (m4trim.arguments.length < 1) throw (new m4class_numparametrosincorrecto("m4trim",m4trim.arguments.length1));
return m4rtrim(m4ltrim(s));}

function m4val_oblig_array (scampos,slabels,form){
	var slastarg = m4val_oblig_array.arguments.length;
	var vFor="NombreFormulario";
	if (slastarg=="3"){vFor=m4val_oblig_array.arguments[2];}
	var saCampos = m4val_oblig_array.arguments[0];
	var saLabels = m4val_oblig_array.arguments[1];
	var s1=saCampos.length;
	vCon = "0";
	vValor = "1";
	var vMessage="";
	for (var i=0;i < s1; i++){
			zc = saCampos[i];
			var zcVal=m4valor(vFor,zc,"","get");
			zcVal=m4ltrim(zcVal);
			if (zcVal==""){
				if (vCon=="1"){ 
					vMessage=vMessage+ m4getmessage("_oblig",saLabels[i])+"\n";
					m4markobject(m4objeto(vFor,zc));
					vValor="0";
				}
			}else{
				if (vCon=="0"){vMessage=m4getmessage("_oblig_opcional",saLabels[i]);}
				vCon="1";
			}
		}
	if 	(vValor=="0"){alert(vMessage);}
	return(vValor);
}
function m4check_acc_number(scampo,sEnvironment,sform){
	var slastarg = m4check_acc_number.arguments.length;
	var vFor="NombreFormulario";
	if (slastarg=="3"){vFor=m4check_acc_number.arguments[2];}
	var vlceros = 10;
	if (sEnvironment == "FR"){vlceros = 11;}
	var vCampo =m4check_acc_number.arguments[0];
	var zeros_fill = "";
	acc_number = m4valor(vFor,vCampo,"","get");
	acc_number_length = acc_number.length;
	if (acc_number_length < vlceros){
		number_zeros = vlceros - acc_number_length;
		for (i=1; i<=number_zeros; i++){zeros_fill = zeros_fill + "0";}
			old_acc_number = acc_number;
			acc_number = zeros_fill + acc_number;	
			if (acc_number_length < 8){m4setlog("_acc_number",old_acc_number,acc_number,vlceros);}
	
	}
	acc_number=acc_number.toUpperCase();
	m4valor(vFor,vCampo,acc_number,"set");
}
function m4check_dc(scampo,sEnvironment,sform){
	if (sEnvironment=="FR"){
		var slastarg = m4check_dc.arguments.length;
		var vFor="NombreFormulario";
		if (slastarg=="3"){vFor=m4check_dc.arguments[2];}
		var vcampos=m4check_dc.arguments[0];
		
		var vvalor1=m4ltrim(m4valor(vFor,vcampos[0],"","get"));
		var vvalor2=m4ltrim(m4valor(vFor,vcampos[1],"","get"));
		var vvalor3=m4ltrim(m4valor(vFor,vcampos[2],"","get"));
		var vvalor4=m4ltrim(m4valor(vFor,vcampos[3],"","get"));
		if ((vvalor1=="")||(vvalor2=="")||(vvalor3=="")||(vvalor4=="")){return;}
		if (vvalor1.length !=5){m4setlog("_dc_long",vcampos[4],"5");m4markobject(m4objeto(vFor,vcampos[0]));return 0;}
		if (vvalor2.length !=5){m4setlog("_dc_long",vcampos[5],"5");m4markobject(m4objeto(vFor,vcampos[1]));return 0;}
		var vTarAccN="";
		var vAccKey =vvalor4;
		if (vAccKey=="??"){vAccKey="99"}
		var vTmpAccNo = vvalor1+vvalor2;
		vTmpAccNo = vTmpAccNo+vvalor3;
		vTmpAccNo=vTmpAccNo+vAccKey;
		var vTmpAccNol=vTmpAccNo.length;
		if (vTmpAccNol>0){
			if ((vAccKey.length>0)&&(vAccKey!="00")){
				for (var i=0;i < vTmpAccNol; i++){
					var vTmpNVal=0;		
					var vtexto=vTmpAccNo.charCodeAt(i);
					if ((vtexto>=65)&&(vtexto<=82)){
						vTmpNVal =(vtexto% 9) -1
						if (vTmpNVal==-1){vTmpNVal=8;}
						if (vTmpNVal==0){vTmpNVal=9;}				
						vTarAccN = vTarAccN + vTmpNVal.toString();
					}else if ((vtexto>=83)&&(vtexto<=90)){
						vTmpNVal =(vtexto% 9) 
						if (vTmpNVal==-1){vTmpNVal=8;}
						if (vTmpNVal==0){vTmpNVal=9;}
						vTarAccN = vTarAccN + vTmpNVal.toString();
					}else{
						vTarAccN = vTarAccN + vTmpAccNo.charAt(i);
					}
				}
				var a = m4parseInt(vTarAccN.substring(0,7));
				var b = m4parseInt(vTarAccN.substring(7,14));
				var c = m4parseInt(vTarAccN.substring(14,21));		
				var vTot=97-((62*a+34*b+3*c)%97);
				vTot = "00" + vTot.toString();
				var vClerib =vTot.substring((vTot.length-2),vTot.length); 
				if (vAccKey !=vClerib){
					vAccKey = vvalor4;
					if (vAccKey=="??"){
						m4valor(vFor,vcampos[3],vClerib,"set");
						return 1;
					}else{
						m4setlog("_dc_long_error",vcampos[6]);
						m4markobject(m4objeto(vFor,vcampos[3]));
						return 0;
					}
				}
			}else{
				m4setlog("_dc_long_error",vcampos[6]);
				m4markobject(m4objeto(vFor,vcampos[3]));
				return 0;
			}
		}	
	}
	return 1;
}
