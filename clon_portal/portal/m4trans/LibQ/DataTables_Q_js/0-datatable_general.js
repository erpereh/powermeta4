
///////////////////////////////////////////////////////////////////
// PARA PINTAR LOS LOS FILTROS Y COLOCAR SUS EVENTOS DE BUSQUEDA //
///////////////////////////////////////////////////////////////////

/*// CUANDO SE USA EL TFOOT HAY Q USAR EL ind = 1 en las acciones de BUSQUEDA
function colocaFiltros_tfoot(tablarefres){
  $('#'+tablarefres+' tfoot th').each( function (indi,elem) {
    var title = $(this).text();
    if($(this)[0].dataset.tipo=="text"){
      $(this).html( '<input type="text" style="width:100%;" placeholder="Buscar '+title+'" id="buss'+indi+'" name="buss'+indi+'" data-index="'+indi+'" onblur="$(\'#'+tablarefres+'\').DataTable().draw();" onkeyup="$(\'#'+tablarefres+'\').DataTable().draw();"  />' );
    }else if($(this)[0].dataset.tipo=="select"){
      var eleoptions = '<select style="width:100%" id="buss'+indi+'" name="buss'+indi+'" data-index="'+indi+'" onchange="$(\'#'+tablarefres+'\').DataTable().draw();">';
      eleoptions+='<option value="">Buscar '+title+'</option>';
      $(window[$(this)[0].dataset.funci]($(this)[0].dataset.origen,indi,$(this)[0].dataset.separa,$(this)[0].dataset.posicion)).each( function(indice, ele){
        eleoptions+='<option value="'+ele+'">'+ele+'</option>';
      });
      eleoptions+='</select>';
      $(this).html(eleoptions);
    } 
  } );
}*/

// CUANDO SE USA EL TFOOT HAY Q USAR EL ind = 0 en las acciones de BUSQUEDA
function colocaFiltros_thead(tablarefres){
  $(tablarefres+' thead:first th').each( function (indi,elem) {
    var title = $(this).text();
    if($(this)[0].dataset.tipo=="text"){
      $(this).html( '<input type="text" style="width:100%;" placeholder="Buscar '+title+'" id="buss'+indi+'" name="buss'+indi+'" data-index="'+indi+'" onblur="$(\''+tablarefres+'\').DataTable().draw();" onkeyup="$(\''+tablarefres+'\').DataTable().draw();"  />' );
    }else if($(this)[0].dataset.tipo=="select"){
      var eleoptions = '<select style="width:100%" id="buss'+indi+'" name="buss'+indi+'" data-index="'+indi+'" onchange="$(\''+tablarefres+'\').DataTable().draw();">';
      eleoptions+='<option value="">Buscar '+title+'</option>';
      $(window[$(this)[0].dataset.funci]($(this)[0].dataset.origen,indi,$(this)[0].dataset.separa,$(this)[0].dataset.posicion)).each( function(indice, ele){
        eleoptions+='<option value="'+ele+'">'+ele+'</option>';
      });
      eleoptions+='</select>';
      $(this).html(eleoptions);
    } 
  } );
}

function cargaFunBusqueda_thead(tabla){
  $(tabla+' thead tr th[data-tipo]').each(function(indi,ele){ 
    if(this.dataset.funbus){          
      $.fn.dataTable.ext.search.push( function( settings, data, dataIndex, rowData, counter ) { return window[ele.dataset.funbus](data, indi); });
    } 
  });
}

/////////////////////////////////////////////////////////////////////////
// FIN - PARA PINTAR LOS LOS FILTROS Y COLOCAR SUS EVENTOS DE BUSQUEDA //
/////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////
// PARA PINTAR LOS SELECTS DE LOS FILTROS A PARTIR DE UNA COLUMNA //
////////////////////////////////////////////////////////////////////
function valoresColmnUnicos(idtabla,columna){
  var arra = [];
  $('#'+idtabla+' tbody tr').each( function(indice, ele){
    var esta = false;
    var valor = $(this).find('td')[columna].innerHTML;
    $(arra).each(function(ind,el){
      if(el==valor){ esta = true; } 
    });
    if(!esta){ if(valor!=null){ arra.push(valor); } }
  });
  return arra;
}

function valoresColmnUnicosFechaOnlyYear(idtabla,columna,separa,posicion){
  var arra = [];
  $('#'+idtabla+' tbody tr').each( function(indice, ele){
    var esta = false;
    var valor = $(this).find('td')[columna].innerHTML.split(separa)[posicion]; 
    $(arra).each(function(ind,el){
      if(el==valor){ esta = true; } 
    });
    if(!esta && valor!=null){ arra.push(valor); }
  });
  return arra;
}
//////////////////////////////////////////////////////////////////////////
// FIN - PARA PINTAR LOS SELECTS DE LOS FILTROS A PARTIR DE UNA COLUMNA //
//////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////
// PARA LOS LAS ACCIONES DE BUSQUEDA DE LOS FILTROS //
//////////////////////////////////////////////////////

/// PARA BUSCAR FECHA CONCRETA FORMATEADA
function busfeconform(data,ele){

	var ind = 0;
	
    if (typeof($('#buss'+ele).val()) === "undefined") {
      return true;
    }else{

      if ( $('#buss'+ele).val() == '' ) {
        return true;
      }else{  

        var arr_date = data[$($('#buss'+ele)[ind]).data('index')].split("/");

        var buqueda = new Date($('#buss'+ele).val()).getTime();
        var datete = new Date(arr_date[2]+'-'+arr_date[1]+'-'+arr_date[0]).getTime();

        if ( buqueda===datete ){
            return true;
        }
        return false;

      }   

    }
}
//$.fn.dataTable.ext.search.push( function( settings, data, dataIndex, rowData, counter ) { return busfeconform(data,14); } );


/// PARA BUSCAR QUE CONTENGA UNA CADENA
function buscaqcontencade(data, ele){
	var ind = 0;
	if(typeof($($('[name="buss'+ele+'"]')[ind]).val()) === "undefined") { return true; }
    if($($('[name="buss'+ele+'"]')[ind]).val() == '') { return true; }       
    if(data[ele].toLowerCase().indexOf( $($('[name="buss'+ele+'"]')[ind]).val().toLowerCase() ) > -1){ return true; }
    return false;
}
//$.fn.dataTable.ext.search.push( function( settings, data, dataIndex, rowData, counter ) { return buscaqcontencade(data, 0); });


/// PARA FILTRAR POR RANGO DE NUMEROS
function filrannum(data, ele){

    var min = parseFloat( $('#min'+ele).val() );
    var max = parseFloat( $('#max'+ele).val() );
    var age = parseFloat( data[ele] ) || 0; // aqui se le dice el nº de columna

    if ( ( isNaN( min ) && isNaN( max ) ) ||
         ( isNaN( min ) && age <= max ) ||
         ( min <= age   && isNaN( max ) ) ||
         ( min <= age   && age <= max ) )
    {
        return true;
    }
    return false;
    
}
//$.fn.dataTable.ext.search.push( function( settings, data, dataIndex, rowData, counter ) { return filrannum(data, 13); } );


/// PARA FILTRAR POR RANGO DE FECHAS
function filporranfe(data, ind) {

    if ((typeof($('#min'+ind).val()) === "undefined") || (typeof($('#max'+ind).val()) === "undefined")){
      return true;
    }else{
       
      if ( ($('#min'+ind).val() == '' && $('#max'+ind).val() == '') ){
        return true;
      }

      if ($('#min'+ind).val() != '' || $('#max'+ind).val() != '') {

        var iMin_temp = $('#min'+ind).val();

        if (iMin_temp == '') {
          iMin_temp = '1900-01-01';
        }
       
        var iMax_temp = $('#max'+ind).val();

        if (iMax_temp == '') {
          iMax_temp = '4000-01-01';
        }

        var arr_date = data[ind].split("/"); // aqui se le dice el nº de columna

        var iMin = new Date(iMin_temp);
        var iMax = new Date(iMax_temp); // Date('aa-mm-dd') Date('aa/mm/dd') Date('mm-dd-aa') Date('mm/dd/aa')
        var iDate = new Date(arr_date[2]+'-'+arr_date[1]+'-'+arr_date[0]);

         
        if (iMin=="" && iMax == ""){
          return true;
        }
        else if (iMin=="" && iDate<iMax){
          return true;
        }
        else if (iMin<=iDate && ""==iMax){
          return true;
        }
        else if (iMin<=iDate && iDate<=iMax){
          return true;
        }                                 
        return false;
      }

    }

}
//$.fn.dataTable.ext.search.push( function( settings, data, dataIndex ) { return filporranfe(data, 14); } );

////////////////////////////////////////////////////////////
// FIN - PARA LOS LAS ACCIONES DE BUSQUEDA DE LOS FILTROS //
////////////////////////////////////////////////////////////