/* =========================================================
	@(#) FileVersion: 822.003.008
	@(#) FileDescription: tc_wz_change_pass.vue.js
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2025
	@(#) ProductName: Peoplenet
========================================================= */

/**
 * Reset password page component
 * @param {Object} myDomElements - DOM elements to interact into the component
 * @param {Object} myVuetify - Vue UI Library instance (Optional Parameter)
 * @returns {Object} Vue Component
 */
function changePasswordPageReset(myDomElements, myVuetify) {

	const { createApp } = Vue;	
	const vuetify = myVuetify || m4Vuetify.vuetify;

	const changePasswordVue = createApp({
		template: `
		<v-app class="cds-bg">
			<div class="cds-bg-login"></div>
			<v-main class="d-flex align-center">
				<v-container class="cds-container-box-login" height-fill-available>
					<div class="height-fill-available d-flex">
						<v-card :elevation="$vuetify.display.smAndDown ? 0 : 6"
							:class="$vuetify.display.smAndDown ? 'pa-8 transparent cds-width-100 d-flex flex-column justify-center' : 'py-5 px-9 cds-box-login'">
		
							<div :class="['d-flex align-center cds-logo-title', $vuetify.display.smAndDown ? 'mt-16 mb-auto' : '']"
								data-cy="divLogoTitle">
								<v-img class="logo-cegid mr-2" max-height="26" max-width="62" src="/images/cegid/cegid.svg" alt="Cegid Logo"
									data-cy="logoCegid">
								</v-img>
								<span id="_titleProduct" class="text-h4" data-cy="titleProduct">{{ titleProduct }}</span>
							</div>
		
							<div class="mb-auto pt-6 text-left">
								<h1 id="_formTitle"
									:class="[$vuetify.display.smAndDown ? 'text-subtitle-1' : 'text-h5', 'mb-6 font-weight-black text--secondary']"
									data-cy="formTitle">{{ formTitle }}</h1>
								<p id="_formInfo" :class="[$vuetify.display.smAndDown ? 'text-body-2' : 'text-body-1']"
									data-cy="formInfo">{{ formInfo }}</p>
		
								<v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit" :class="$vuetify.display.mobile ? 'mt-4' : 'mt-12'">
		
									<v-text-field v-model="passwordNew" :append-icon="showPassNew ? 'mdi-eye' : 'mdi-eye-off'"
										:rules="[rules.requiredpass]" :type="showPassNew ? 'text' : 'password'"
										:label="formNewPasswd" outlined background-color="white" :aria-label="formNewPasswd"
										class="rounded-cds mb-6" @click:append="showPassNew = !showPassNew"
										data-cy="passwordNew"></v-text-field>
		
									<v-text-field id="_passwordNewConfirm" v-model="passwordNewConfirm"
										:append-icon="showPassNewConfirm ? 'mdi-eye' : 'mdi-eye-off'"
										:rules="[rules.requiredpassrepite, rules.samenewpass]"
										:type="showPassNewConfirm ? 'text' : 'password'" name="input-10-2"
										:label="formReNewPasswd" outlined background-color="white" class="rounded-cds mb-6" :aria-label="formReNewPasswd"
										@click:append="showPassNewConfirm = !showPassNewConfirm" data-cy="passwordNewConfirm">
									</v-text-field>
		
									<!-- <div class="d-flex align-center mb-4" :class="$vuetify.display.smAndDown && 'flex-wrap'">
										<v-btn id="_btnBack" type="submit" color="primary" text class="flex-grow-1 rounded-cds"
											data-cy="buttonback" href="/">
											{{ buttonback }}
										</v-btn>
									</div> -->
		
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
				valid: false,
				titleProduct: "",
				buttonsend: "",
				formTitle: "",
				formInfo: "",
				formNewPasswd: "",
				formReNewPasswd: "",
				showPassNew: false,
				showPassNewConfirm: false,
				error_login_NewIPass: "",
				error_login_NewIRPass: "",
				error_NewPasswordDoesNotMatchRetypePassword: "",
				passwordNew: "",
				passwordNewConfirm: "",
				rules: {
					requiredpass: (value) => !!value || this.error_login_NewIPass,
					requiredpassrepite: (value) => !!value || this.error_login_NewIRPass,
					samenewpass: (value) => value === this.passwordNew || this.error_NewPasswordDoesNotMatchRetypePassword
				}
			};
		},
		methods: {
			validate() {
				this.$refs.form.validate();
			},
			resetValidation () {
				this.$refs.form.resetValidation();
			},
			changePassNew() {
				this.domElements.passwordNew.value = this.passwordNew;
			},
			changePassNewConfirm() {
				this.domElements.passwordNewConfirm.value = this.passwordNewConfirm;
			},
			submit() {
				this.domElements.sendButton.click();
			}
		},
		watch: {
			passwordNew() {
				this.$nextTick(() => {
					this.changePassNew();
					this.validate();
				});
			},
			passwordNewConfirm() {
				this.$nextTick(() => {
					this.changePassNewConfirm();
					this.validate();
				});
			},
		},
		mounted() {
			this.resetValidation();
		}
	}).use(vuetify).mount("#app");

	return changePasswordVue;
}
