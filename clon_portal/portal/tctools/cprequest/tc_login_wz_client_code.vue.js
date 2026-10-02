/* =========================================================
	@(#) FileVersion: 822.003.008
	@(#) FileDescription: tc_login_wz_client_code.vue.js
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2025
	@(#) ProductName: Peoplenet
========================================================= */

/**
 * Client code page component
 * @param {Object} myDomElements - DOM elements to interact into the component 
 * @param {Object} myVuetify - Vue UI Library instance (Optional Parameter)
 * @returns {Object} Vue Component
 */
function clientCodePage(myDomElements, myVuetify) {
	const { createApp } = Vue;	
	const vuetify = myVuetify || m4Vuetify.vuetify;
	const clientCodeVue = createApp({
		 template: `
		<v-app class="cds-bg">
			<div class="cds-bg-login"></div>
			<v-main class="d-flex align-center">
				<v-container class="cds-container-box-login" height-fill-available>
					<div class="height-fill-available d-flex"> 
						<v-card :elevation="$vuetify.display.smAndDown ? 0 : 6"
							:class="$vuetify.display.smAndDown ? 'pa-8 transparent cds-width-100 d-flex flex-column justify-center' : 'py-5 px-9 cds-box-login'">

							<div :class="['d-flex align-center cds-logo-title', $vuetify.display.smAndDown ? 'mt-16 mb-auto' : '']" data-cy="divLogoTitle">
								<v-img class="logo-cegid mr-2" max-height="26" max-width="62" src="/images/cegid/cegid.svg" alt="Cegid Logo"
									data-cy="logoCegid">
								</v-img>
								<span id="_titleProduct" class="text-h4" data-cy="titleProduct">{{ titleProduct }}</span>
							</div>
								
							<div class="mb-auto pt-6 text-left">
								<h1 id="_formTitle" :class="[$vuetify.display.smAndDown ? 'text-subtitle-1' : 'text-h5', 'mb-6 font-weight-black text--secondary']" data-cy="formTitle" :aria-label="labelClientCode">{{ formTitle }}</h1>
								<p id="_formDescription" :class="[$vuetify.display.smAndDown ? 'text-body-2' : 'text-body-1']" data-cy="formDescription">{{ formDescription }}</p>

								<v-form ref="form" v-model="valid" @submit.prevent="submit" :class="$vuetify.display.mobile ? 'mt-4' : 'mt-12'">

									<v-text-field id="_clientCode" ref="clientCode" v-model="clientCode" @change="changeClientCode()" :label="labelClientCode"
										outlined background-color="white" class="rounded-cds mb-6" data-cy="clientCode" :rules="[rules.required]">
									</v-text-field>

									<div class="d-flex align-center mb-4" :class="$vuetify.display.smAndDown && 'flex-wrap'">
										<v-btn id="_btnBack" color="primary" text class="flex-grow-1 rounded-cds"
											data-cy="buttonback" @click="go_back()">
											{{ buttonback }}
										</v-btn>
									</div>

									<div class="d-flex align-center" :class="$vuetify.display.smAndDown && 'flex-wrap mb-6'">
										<v-btn id="_btnSubmit" type="submit" color="primary" class="flex-grow-1 rounded-cds"
											elevation="1" :disabled="!valid" data-cy="buttonsend" @click="validate()">
											{{ buttonsend }}
										</v-btn>
										</div>

								</v-form>

							</div>
						</v-card>
					</div>
				</v-container>
			</v-main>
		</v-app>
		`,
		data() {
			return {
				domElements: myDomElements,
				valid: true,
				titleProduct: "",
				formTitle: "Cegid",
				formDescription: "",
				formDescriptionMessage: "",
				buttonsend: "",
				buttonback: "",
				labelClientCode: "",
				clientCode: "",
				idsociedad: "",
				url: "", 
				required: "",
				rules: {
					required: (value) => !!value || this.required
				}
			};
		},
		methods: {
			changeClientCode() {
				this.domElements.idsociedad.value = this.clientCode;
			},
			validate() {
				this.$refs.form.validate();
			},
			submit() {
				url = "/tctools/cprequest/tc_login_wz_person_data.jsp?SOC_C=" + this.clientCode;
				document.location.href = url;
			},
			go_back() {
				window.location = '/';
			}
		},
	}).use(vuetify).mount("#app");
	
	return clientCodeVue;
}
