/* =========================================================
	@(#) FileVersion: 822.003.008
	@(#) FileDescription: _change_password_include.vue.js
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2025
	@(#) ProductName: Peoplenet
========================================================= */

/**
 * Change password page component
 * @param {Object} myDomElements - DOM elements to interact into the component
 * @param {Object} myVuetify - Vue UI Library instance (Optional Parameter)
 * @returns {Object} Vue Component
 */
function passwordPage(myDomElements, myVuetify) {
	const { createApp } = Vue;	
	const vuetify = myVuetify || m4Vuetify.vuetify;
	const passwordVue = createApp({
		template: `
		<v-app class="cds-bg">
			<div class="cds-bg-login"></div>
			<v-main class="d-flex align-center">
				<v-container class="cds-container-box-login height-fill-available">
					<div class="height-fill-available d-flex">
						<v-card :elevation="$vuetify.display.smAndDown ? 0 : 6"
							:class="$vuetify.display.smAndDown ? 'pa-8 transparent cds-width-100 d-flex flex-column justify-center' : 'py-5 px-9 cds-box-login'">

							<div :class="['d-flex align-center cds-logo-title', $vuetify.display.smAndDown ? 'mt-16 mb-auto' : '']" data-cy="divLogoTitle">
								<v-img class="logo-cegid mr-2" max-height="26" max-width="62" src="/iconos/cegid/cegid.svg" alt="Cegid Logo"
									data-cy="logoCegid">
								</v-img>
							<h2 id="_titleProduct" class="sr-only" data-cy="titleProduct">{{ titleProduct }}</h2>
							</div>

							<div class="mb-auto pt-6 text-left">
								<h3 id="_formTitle" :class="[$vuetify.display.smAndDown ? 'text-subtitle-1' : 'text-h5', 'mb-6 font-weight-black text--secondary']" data-cy="formTitle">{{ formTitle }}</h3>
								<p 
									v-if="formDescriptionMessage !== 'null'" 
									id="_formDescriptionMessage" 
									:class="[$vuetify.display.smAndDown ? 'text-body-2' : 'text-body-1']" 
									data-cy="formDescriptionMessage"
								>{{ formDescriptionMessage }}</p>
								<p id="_formDescription" :class="[$vuetify.display.smAndDown ? 'text-body-2' : 'text-body-1']" data-cy="formDescription">{{ formDescription }}</p>

								<v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit" :class="$vuetify.display.mobile ? 'mt-4' : 'mt-12'">
									<v-text-field id="_password" ref="password" v-model="password" outlined
										background-color="white" :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
										:rules="[rules.requiredpass]" :type="showPass ? 'text' : 'password'"
										:label="formCurrentPassword" class="rounded-cds mb-6" :aria-label="formCurrentPassword"
										name="password" data-cy="password" @click:append="showPass = !showPass"
										@change="changePass()"></v-text-field>
									<v-text-field id="_passwordNew" ref="passwordNew" v-model="passwordNew" outlined
										background-color="white" :append-icon="showPassNew ? 'mdi-eye' : 'mdi-eye-off'"
										:rules="[rules.requiredpassNew, rules.samenewpass]" :type="showPassNew ? 'text' : 'password'"
										:label="formCurrentNewPasswd" class="rounded-cds mb-6" :aria-label="formCurrentNewPasswd"
										name="passwordNew" data-cy="passwordNew" @click:append="showPassNew = !showPassNew">
									</v-text-field>
									<v-text-field id="_passwordNewConfirm" ref="passwordNewConfirm" v-model="passwordNewConfirm"
										outlined background-color="white"
										:append-icon="showPassNewConfirm ? 'mdi-eye' : 'mdi-eye-off'"
										:rules="[rules.requiredpassNew, rules.samenewpass, rules.samenewpassRep]"
										:type="showPassNewConfirm ? 'text' : 'password'" :label="formCurrentReNewPasswd"
										class="rounded-cds mb-6" name="passwordNewConfirm"  :aria-label="formCurrentReNewPasswd"
										data-cy="passwordNewConfirm" @click:append="showPassNewConfirm = !showPassNewConfirm">
									</v-text-field>

									<div class="d-flex align-center mb-4" :class="$vuetify.display.smAndDown && 'flex-wrap'">
										<v-btn id="_btnBack" v-if="visibleback" color="primary" text class="flex-grow-1 rounded-cds" data-cy="buttonback" @click=exit()>
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
				valid: false,
				buttonsend: "",
				buttonback: "",
				visibleback: false, 
				password: "",
				passwordNew: "",
				passwordNewConfirm: "",
				showPass: false,
				showPassNew: false,
				showPassNewConfirm: false,
				requiredpass: "",
				requiredpassNew: "",
				samenewpass: "",
				samenewpassRep: "",
				formTitle: "",
				formDescriptionMessage: "",
				formDescription: "",
				formCurrentPassword: "",
				formCurrentNewPasswd: "",
				formCurrentReNewPasswd: "",
				titleProduct: "Peoplenet",
				exitcode: "/",
				rules: {
					requiredpass: (value) => !!value || this.requiredpass,
					requiredpassNew: (value) => !!value || this.requiredpassNew,
					samenewpass: (value) => value !== this.password || this.samenewpass,
					samenewpassRep: (value) =>
						value === this.passwordNew || this.samenewpassRep,
				},
			};
		},
		methods: {
			validate() {
				this.$refs.form.validate();
			},
			resetValidation() {
				this.$refs.form.resetValidation();
			},
			changePass() {
				this.domElements.password.value = this.password;
			},
			changePassNew() {
				this.domElements.passwordNew.value = this.passwordNew;
			},
			changePassNewConfirm() {
				this.domElements.passwordNewConfirm.value = this.passwordNewConfirm;
			},
			submit() {
				this.domElements.sendButton.click();
			},
			exit() {
					this.domElements.backButton.click();
			},
		},
		watch: {
			password() {
				this.$nextTick(() => {
					this.changePass();
					this.validate();
				});
			},
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

	return passwordVue;
}
