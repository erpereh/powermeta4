/* =========================================================
	@(#) FileVersion: 818.005.015
	@(#) FileDescription: shco_show_error_paint.vue_renhash_9a124039eb148fa05675c455d446d9b0_l3_dl_oCYC_v1.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= */

/**
 * Error page component
 * @param {Object} myDomElements - DOM elements to interact into the component
 * @param {Object} myVuetify - Vue UI Library instance (Optional Parameter)
 * @returns {Object} Vue Component 
 */
function errorPage(myDomElements, myVuetify) {
    var errorVue ={
      el: '#app',
      template: `
	  <v-app class="cds-bg">
	  	<div class="cds-bg-generic-error"></div>
	  		<v-main class="d-flex align-center">
		  		<v-container class="cds-container-box-login height-fill-available">
			  		<div class="height-fill-available d-flex justify-center">
					  <div :class="[$vuetify.breakpoint.smAndDown ? 'px-10' : 'px-16', 'text-center']">
						  <h1 id="_titleError" :class="[$vuetify.breakpoint.smAndDown ? 'text-h2' : 'text-h1', 'font-weight-semibold mt-9 mb-10 cds-text-center text--primary']" data-cy="titleError">{{ paint_msgTitle }}</h1>
						  <p id="_errorMessage" :class="[$vuetify.breakpoint.smAndDown ? 'text-body-2' : 'text-body-1', 'mb-10 cds-text-center']"
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
  	  	</v-app>`,
	  vuetify: myVuetify?myVuetify:new Vuetify(),
		data () {
			return {
				domElements: myDomElements,
				paint_msgError: "", // //-> msg to show
				paint_titleRedirect: "", //-> msg ob button
				paint_msgTitle: "" // title of message
			}
		},
		methods: {
			fireClick () {
			// document.querySelector('[cds-ref="send-button"]').click();
			this.domElements.sendButton.click();

			},
		},
	};

	return errorVue;
}