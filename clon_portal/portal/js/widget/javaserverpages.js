/*
 @(#)FileVersion: 811.000.025
 @(#)FileDescription: 
 @(#)CompanyName: Meta4 Spain, S.A.
 @(#)LegalCopyright: (c)2014
 @(#)ProductName: PeopleNet KSystem
 @(#)ProductVersion: 8.1SP1
 @(#)InternalName: jsp.js
 @(#)Date: 01/01/2014
 */

//@ sourceURL=meta4.widget.jsp.js

var meta4 = meta4 || {};

meta4.widget = meta4.widget || {};

meta4.widget.javaserverpages = ( function() {'use strict';

    var checkSecurity = '/servlet/CheckSecurity/JSP/';

    return {    
        uniqueParams : checkSecurity + 'sse_generico/psco_get_unique_params.jsp',
        launchReport : checkSecurity + 'sse_generico/psco_get_unique_params_file.jsp',
        logout : '/shco_g0/shco_gen_logout.jsp'
    };

}());
