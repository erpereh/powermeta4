/* =========================================================
	@(#) FileVersion: 822.004.045
	@(#) FileDescription: swagger-initializer.js
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2025
	@(#) ProductName: Peoplenet
========================================================= */

window.onload = function () {
	fetch(`./modules/index.json?nocache=${Date.now()}`, {
		method: 'GET',
		headers: {
			'Cache-Control': 'no-store, no-cache, must-revalidate',
			'Expires': '0',
			'Pragma': 'no-cache'
		},
		cache: 'no-store'
	}).then(response => {
		if (!response.ok) {
			throw new Error('Error loading modules.json');
		}
		return response.json();
	}).then(modules => {
		render(modules.urls);
	}).catch(error => {
		render(null);
	});
};

function render(urls) {
	window.ui = SwaggerUIBundle({
		urls: urls,
		dom_id: '#swagger-ui',
		deepLinking: true,
		validatorUrl: null,
		presets: [
			SwaggerUIBundle.presets.apis,
			SwaggerUIStandalonePreset
		],
		plugins: [
			SwaggerUIBundle.plugins.DownloadUrl
		],
		layout: 'StandaloneLayout',
		requestInterceptor: requestObj => {
			var headers = requestObj.headers || {};
			headers['Cache-Control'] = 'no-store, no-cache, must-revalidate';
			headers['Expires'] = '0';
			headers['Pragma'] = 'no-cache';
			requestObj.url = requestObj.url + (requestObj.url.includes('?') ? '&' : '?') + `nocache=${Date.now()}`;
			requestObj.cache = 'no-store';
			return requestObj;
		}
	});
}