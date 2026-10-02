/* =========================================================
	@(#) FileVersion: 822.003.008
	@(#) FileDescription: _user_message_page.vue.js
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2025
	@(#) ProductName: Peoplenet
========================================================= */

/**
 * User Message success|error page component
 * @param {Object} myVuetify - Vue UI Library instance (Optional Parameter)
 * @returns {Object} Vue Component
 */
 function userMessagePage(myVuetify) {

	const { createApp } = Vue;	
	const vuetify = myVuetify || m4Vuetify.vuetify;
	const userMessage = createApp({
		template: `
		<v-app class="cds-bg">
			<div class="cds-bg-generic-error"></div>
			<v-main class="d-flex align-start">
				<v-container class="cds-container-box-login height-fill-available">
					<div class="height-fill-available d-flex justify-center">
						<div :class="[$vuetify.display.smAndDown ? 'px-10' : 'px-16', 'text-center']">
							<h1 class="sr-only" data-cy="alertTitle">{{ alertTitle }}</h1>
							<p id="_alertText" :class="[$vuetify.display.smAndDown ? 'text-body-2' : 'text-body-1', 'mt-16 mb-10 cds-text-center']" data-cy="alertText">{{ alertText }}</p>
							<v-btn
								id="_confirmButton"
								color="primary"
								elevation="1"
								data-cy="confirmButton"
								:href="url"
							>
								{{ confirmButton }}
							</v-btn>
						</div>
					</div>
				</v-container>
			</v-main>
		</v-app>
		`,
		data() {
			return {
				confirmButton: "",
				alertText: "",
				url: "/"
			};
		}
	}).use(vuetify).mount("#app");

	return userMessage;
}
