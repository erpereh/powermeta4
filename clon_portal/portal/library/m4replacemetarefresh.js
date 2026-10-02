/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: m4replacemetarefresh.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */

if (!window.meta4) {
	window.meta4 = new Object();
}

window.meta4.M4ExecuteMetaRefresh = function(delay, url) {

	if (delay) {
		delay *= 1000;
	}

	// ------------------
	if (!delay) {
		delay = 100;
	}
	else {
		if (delay < 100) {
			delay = 100;
		}
	}
	// -------------------

	redirector = function(url) {
		if (!url) {
			// just reload
			location.reload();
		}
		else {
			window.location.href=url;
		}
	};
	
	if (!delay) {
		redirector(url);
	}
	else {
		setTimeout(redirector, delay, url);
	}
};
