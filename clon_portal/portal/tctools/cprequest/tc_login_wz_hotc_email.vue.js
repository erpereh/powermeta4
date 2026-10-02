/* =========================================================
	@(#) FileVersion: 822.003.008
	@(#) FileDescription: tc_login_wz_hotc_email.vue.js
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2025
	@(#) ProductName: Peoplenet
========================================================= */

/**
 * Generic forgot username/password page component
 * @param {Object} myDomElements - DOM elements to interact into the component
 * @param {Object} myVuetify - Vue UI Library instance (Optional Parameter)
 * @returns {Object} Vue Component
 */
function forgotPage(myDomElements, myVuetify) {

	const { createApp } = Vue;	
	const vuetify = myVuetify || m4Vuetify.vuetify;
	const forgotVue = createApp({
		template: `
		<v-app class="cds-bg">
			<div class="cds-bg-login"></div>
			<v-main class="d-flex align-center">
				<v-container class="cds-container-box-login height-fill-available">
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
								<h1 id="_formTitle" :class="[$vuetify.display.smAndDown ? 'text-subtitle-1' : 'text-h5', 'mb-6 font-weight-black text--secondary']" data-cy="formTitle">
									{{ formTitle }}</h1>
								<p id="_formInfo" :class="[$vuetify.display.smAndDown ? 'text-body-2' : 'text-body-1']" data-cy="formInfo">{{ formInfo }}</p>

								<v-form ref="form" v-model="valid" @submit.prevent="submit" :class="$vuetify.display.mobile ? 'mt-4' : 'mt-12'">

									<v-text-field id="_email" v-model="email" :label="labelEmail" :rules="[rules.required]" aria-label="Email"
										outlined background-color="white" class="rounded-cds" data-cy="email" @change="changeEmail()" autocomplete="off">
									</v-text-field>

									<div v-if="requireCaptcha" id="_divCaptcha" data-cy="divCaptcha">
										<p v-if="dataRetyped" :class="[$vuetify.display.smAndDown ? 'text-body-2' : 'text-body-1']" data-cy="labelRetypeCaptcha">
											{{labelRetypeCaptcha}}</p>
										<p v-else :class="[$vuetify.display.smAndDown ? 'text-body-2' : 'text-body-1']" data-cy="labelRequireCaptcha">
											{{labelRequireCaptcha}}</p>

										<div class="text-center"><img src="/images/kaptcha.jpg" class="mb-3" data-cy="imgKaptcha" alt="captcha"/></div>

										<v-text-field v-model="captcha" :label="labelCaptcha" :rules="[rules.required]" aria-label="Captcha"
											autocomplete="off" outlined background-color="white" class="rounded-cds" data-cy="changeCaptcha" @change="changeCaptcha"></v-text-field>
									</div>

									<div class="d-flex align-center mb-4" :class="$vuetify.display.smAndDown && 'flex-wrap'">
										<v-btn id="_btnBack" type="submit" color="primary" text class="flex-grow-1 rounded-cds"
											data-cy="buttonback" href="/">
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

								<div class="mt-6 mb-6 text-center">
									<a :class="[$vuetify.display.smAndDown ? 'text-caption' : 'text-body-2']" href="/tctools/cprequest/tc_login_wz_client_code.jsp"
										data-cy="withoutEmail">{{labelWithoutEmail}}</a>
								</div>
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
				formTitle: "",
				formInfo: "",
				email: "",
				labelEmail: "",
				requireCaptcha: false,
				retypeCaptcha: false,
				dataRetyped: "",
				labelRetypeCaptcha: "",
				labelRequireCaptcha: "",
				labelCaptcha: "",
				captcha: null,
				buttonsend: null,
				buttonback: "",
				labelWithoutEmail: "",
				required: "",
				rules: {
					required: (value) => !!value || this.required
				}
			};
		},
		methods: {
			changeEmail() {
				this.domElements.email.value = this.email;
			},
			changeCaptcha() {
				this.domElements.captcha.value = this.captcha;
			},
			validate() {
				this.$refs.form.validate();
			},
			submit() {
				this.domElements.sendButton.click();
			}
		}
	}).use(vuetify).mount("#app");

	return forgotVue;
}
