jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "fecha-es-cyc-pre": function ( date ) {
        date = date.replace(" ", "");             
        if ( ! date ) { return 0; }
        var eu_date = date.split(/[\.\-\/]/);
        var year = ( eu_date[2] ) ? eu_date[2] : 0 ;
        var month = ( eu_date[1].length == 1 ) ? 0+eu_date[1] : eu_date[1];
        var day = ( eu_date[0].length == 1 ) ? 0+eu_date[0] : eu_date[0];    
        return (year + month + day) * 1;
    },     
    "fecha-es-cyc-asc": function ( a, b ) { return ((a < b) ? -1 : ((a > b) ? 1 : 0)); },     
    "fecha-es-cyc-desc": function ( a, b ) { return ((a < b) ? 1 : ((a > b) ? -1 : 0)); }
} );