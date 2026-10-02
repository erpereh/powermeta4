/*jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "ord-pt-cyc-pre": function ( data ) {
        var letras = ['a','e','i','o','u','c'];
        var special_letters = {
            "Á": letras[0], "á": letras[0], "Ã": letras[0], "ã": letras[0], "À": letras[0], "à": letras[0],
            "É": letras[1], "é": letras[1], "Ê": letras[1], "ê": letras[1],
            "Í": letras[2], "í": letras[2], "Î": letras[2], "î": letras[2],
            "Ó": letras[3], "ó": letras[3], "Õ": letras[3], "õ": letras[3], "Ô": letras[3], "ô": letras[3],
            "Ú": letras[4], "ú": letras[4], "Ü": letras[4], "ü": letras[4],
            "ç": letras[5], "Ç": letras[5]
        };
        for (var val in special_letters)
           data = data.split(val).join(special_letters[val]).toLowerCase();
        return data;
    },
    "ord-pt-cyc-asc": function ( a, b ) { return ((a < b) ? -1 : ((a > b) ? 1 : 0)); },
    "ord-pt-cyc-desc": function ( a, b ) { return ((a < b) ? 1 : ((a > b) ? -1 : 0)); }
} );*/

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "ord-pt-cyc-pre": function ( data ) {
        var letras = ['a','e','i','o','u','c'];
        var special_letters = {
            "\u00C1": letras[0], "\u00E1": letras[0], "\u00C3": letras[0], "\u00E3": letras[0], "\u00C0": letras[0], "\u00E0": letras[0],
            "\u00C9": letras[1], "\u00E9": letras[1], "\u00CA": letras[1], "\u00EA": letras[1],
            "\u00CD": letras[2], "\u00ED": letras[2], "\u00CE": letras[2], "\u00EE": letras[2],
            "\u00D3": letras[3], "\u00F3": letras[3], "\u00D5": letras[3], "\u00F5": letras[3], "\u00D4": letras[3], "\u00F4": letras[3],
            "\u00DA": letras[4], "\u00FA": letras[4], "\u00DC": letras[4], "\u00FC": letras[4],
            "\u00E7": letras[5], "\u00C7": letras[5]
        };
        for (var val in special_letters)
           data = data.split(val).join(special_letters[val]).toLowerCase();
        return data;
    },
    "ord-pt-cyc-asc": function ( a, b ) { return ((a < b) ? -1 : ((a > b) ? 1 : 0)); },
    "ord-pt-cyc-desc": function ( a, b ) { return ((a < b) ? 1 : ((a > b) ? -1 : 0)); }
} );

