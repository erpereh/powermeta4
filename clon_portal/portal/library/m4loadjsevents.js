/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: m4loadjsevents.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */


function m4loadjsevents() {

	// delays the load
	if (window._m4LoadM4JSEvents == false || window._m4JSEvents) {
		return;
	}
	
	window._m4JSEvents = true;

	// add the returned content to a newly created script tag
	var se = document.createElement('script');
	se.type = "text/javascript";
	se.src = "/m4jsevents/m4jsevents.nocache.js";
	if (document.getElementsByTagName('head')) {
		document.getElementsByTagName('head')[0].appendChild(se);
	}
	else if (document.getElementsByTagName('body')) {
		document.getElementsByTagName('body')[0].appendChild(se);
	}
}

// try to load

m4loadjsevents();
