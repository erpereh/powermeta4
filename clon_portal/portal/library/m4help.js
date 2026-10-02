/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: m4help.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */


function openWinHelpPres(pagina){
	var popup = null;
	var sParamUnion = pagina.indexOf("?")>0? "&" : "?" ;
	pagina = pagina + sParamUnion + "m4locale=" + slanguser;
	popup = window.open(pagina,'helpPress','width=765,height=500,resizable=no,toolbar=no,scrollbars=yes,copyhistory=no,directories=no,status=yes');
}