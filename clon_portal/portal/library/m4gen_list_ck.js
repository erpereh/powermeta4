/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: m4gen_list_ck.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */

function m4aceptall(num){
for (var i=1;i <= num; i++){
		m4valor('oculto2','CK'+i,1,'set');
		m4prop('oculto2','CK'+i,'checked','checked','set');
	}
}
function m4cancelall(num){
for (var i=1;i <= num; i++){
		m4valor('oculto2','CK'+i,0,'set');
		m4prop('oculto2','CK'+i,'checked','','set');
	}
}

function m4retorno(num,zid){
var valor="";
var ccamp="0";
for (var i=1;i <= num; i++){
		//ccamp=m4valor('oculto2','CK'+i,'','get');
		ccamp=m4prop('oculto2','CK'+i,'checked','','get');
		
		if (ccamp==true){
			if (valor==''){
				valor=m4valor('oculto2',zid+i,'','get');		
			}else{
				valor=valor+','+m4valor('oculto2',zid+i,'','get');
			}
		}	
		
	}
	
return(valor);
}