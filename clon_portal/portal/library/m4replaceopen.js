/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: m4replaceopen.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */

// replaces the global window.open function
window.open = function (open) {

	// skips override if it is local execution
	if (window.M4Object_GetMetadata) {
		return open;
	}
	
	// computes a new open function
    return function (url, name, features) {
        name = name || "m4targetnewwindow";
		var wnd = open.call(window, "", name, features);
		var link = document.getElementById("m4callreplaceopen");
		if (!link) {
			var link = document.createElement('a');
			link.id = "m4callreplaceopen";
			link.href = "javascript:void(0)";
			link.style = "visibility:hidden;position:absolute;"
			if (!document.body) {
				var body = document.createElement("body");
				document.body = body;
			}
			document.body.appendChild(link);			
		}
		link.target = name;
		link.href = url;
		link.click();
        return wnd;
    };
	
}(window.open);
