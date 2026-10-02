/*
	@(#)FileVersion: 814.002.013
	@(#)FileDescription: help caller
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2017
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP4
	@(#)InternalName: m4help.js
	@(#)Date: 23/09/2002  	
*/

function openWinHelpPres(pagina){
	var popup = null;
	var sParamUnion = pagina.indexOf("?")>0? "&" : "?" ;
	pagina = pagina + sParamUnion + "m4locale=" + slanguser;
	popup = window.open(pagina,'helpPress','width=765,height=500,resizable=no,toolbar=no,scrollbars=yes,copyhistory=no,directories=no,status=yes');
}
