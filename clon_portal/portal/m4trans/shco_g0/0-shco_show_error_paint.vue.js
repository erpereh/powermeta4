/* =========================================================
	@(#) FileVersion: 821.001.041
	@(#) FileDescription: shco_show_error_paint.vue.js
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2024
	@(#) ProductName: Peoplenet
========================================================= */

/**
 * Error page component
 * @param {Object} myDomElements - DOM elements to interact into the component
 * @param {Object} myVuetify - Vue UI Library instance (Optional Parameter)
 * @returns {Object} Vue Component
 */
function errorPage(myDomElements, myVuetify) {
	const { createApp } = Vue;	
	const vuetify = myVuetify || m4Vuetify.vuetify;
	const errorVue = createApp({
		template: `
	  	<v-app class="cds-bg">
			<div class="cds-bg-generic-error"></div>
			<v-main class="d-flex align-start">
				<v-container class="cds-container-box-login height-fill-available">
					<div class="height-fill-available d-flex justify-center">
						<div :class="[$vuetify.display.smAndDown ? 'px-10' : 'px-16', 'text-center']">
							<h1 id="_titleError" :class="[$vuetify.display.smAndDown ? 'text-h2' : 'text-h1', 'font-weight-semibold mt-9 mb-10 cds-text-center text--primary']" data-cy="titleError">{{ paint_msgTitle }}</h1>
							<p id="_errorMessage" :class="[$vuetify.display.smAndDown ? 'text-body-2' : 'text-body-1', 'mb-10 cds-text-center']"
								data-cy="errorMessage">{{ paint_msgError }}
							</p>
							<v-btn 
								v-if="paint_titleRedirect !== 'RemoteOriginMessage'"
								id="_buttonError"
								data-cy="buttonError"
								type="submit"
								color="primary"
								elevation="1"
								@click="fireClick"
								>
								{{ paint_titleRedirect }}
							</v-btn>
						</div>
					</div>
				</v-container>
			</v-main>
		</v-app>
		`,
		data() {
			return {
				domElements: myDomElements,
				paint_msgError: "", // //-> msg to show
				paint_titleRedirect: "", //-> msg ob button
				paint_msgTitle: "" // title of message
			};
		},
		methods: {
			fireClick() {
				this.domElements.sendButton.click();

			}
		}
	}).use(vuetify).mount("#app");

	return errorVue;
}
