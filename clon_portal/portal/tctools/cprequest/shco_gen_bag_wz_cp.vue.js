/* =========================================================
	@(#) FileVersion: 821.001.038
	@(#) FileDescription: shco_gen_bag_wz_cp.vue.js
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2024
	@(#) ProductName: Peoplenet
========================================================= */

/**
 * Person data page component
 * @param {Object} myDomElements - DOM elements to interact into the component
 * @param {Object} myVuetify - Vue UI Library instance (Optional Parameter)
 * @returns {Object} Vue Component
 */
function personDataPage(myDomElements, myVuetify) {
  const { createApp } = Vue;	
	const vuetify = myVuetify || m4Vuetify.vuetify;
	const personDataPage = createApp({
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
                                <v-img class="logo-cegid mr-2" max-height="26" max-width="62" src="/iconos/cegid/cegid.svg"
                                    data-cy="logoCegid">
                                </v-img>
                                <h2 id="_titleProduct" class="text-h4" data-cy="titleProduct">
                                    {{ titleProduct }}
                                </h2>
                            </div>

                            <div class="mb-auto">
                                <h5 class="text-h5 mb-6 font-weight-black text--secondary" id="_loginChangePassLine1" data-cy="loginChangePassLine1">{{ loginChangePassLine1 }}</h5>
                                <p class="text-body-2" id="_loginChangePassLine2" data-cy="loginChangePassLine2">{{ loginChangePassLine2 }}</p>
                                <p class="text-body-2" id="_loginChangePassLine3" data-cy="loginChangePassLine3">{{ loginChangePassLine3 }}</p>
                                <p class="text-body-2" id="_loginChangePassEmailLabel" data-cy="loginChangePassEmailLabel">{{ loginChangePassEmailLabel }}</p>

                                <v-form ref="form" v-model="valid" @submit.prevent="submit" class="pt-2">
                                    <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y
                                        min-width="auto">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field id="_birthDate" ref="birthDate" v-model="birthDate" outlined background-color="white"
                                                class="rounded-cds" :label="birthDateLabel" append-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"
                                                :hint="birthDateHint" data-cy="birthDate"></v-text-field>
                                        </template>
                                        <v-date-picker v-model="birthDate" no-title @input="menu = false"></v-date-picker>
                                    </v-menu>

                                    <v-text-field id="_familyName" ref="familyName" v-model="familyName" outlined background-color="white"
                                        class="rounded-cds" :label="familyNameLabel" :rules="[rules.familyName]" data-cy="familyName">
                                    </v-text-field>
                                    <v-text-field id="_firstName" ref="firstName" v-model="firstName" outlined background-color="white"
                                        class="rounded-cds" :label="firstNameLabel" :rules="[rules.firstName]" data-cy="firstName">
                                    </v-text-field>

                                    <div class="d-flex align-center mb-4" :class="$vuetify.display.smAndDown && 'flex-wrap'">
                                    <v-btn id="_btnBack" type="submit" color="primary" text class="flex-grow-1 rounded-cds"
                                      data-cy="buttonback" href="/"> <!-- todo: go back one --> 
                                      {{ buttonback }}
                                    </v-btn>
                                  </div>

                                    <div class="d-flex align-center" :class="$vuetify.display.smAndDown && 'flex-wrap'">
                                    <v-btn type="submit" color="primary" class="flex-grow-1 rounded-cds" elevation="1"
                                            :disabled="!valid" data-cy="buttonenter" @click="validate()">
                                            {{ buttonenter }}
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
        isEXP: false,
        valid: false,
        titleProduct: "",
        loginChangePassLine1: null,
        loginChangePassLine2: null,
        loginChangePassLine3: null,
        loginChangePassEmailLabel: null,
        familyNameLabel: null,
        firstNameLabel: null,
        birthDateLabel: null,
        birthDateHint: null,
        buttonenter: null,
        buttonback: null,
        familyName: null,
        firstName: null,
        birthDate: null,
        menu: false,
        birthDatewrong: "",
        familyNamewrong: "",
        firstNamewrong: "",
        rules: {
          birthDate: (value) => !!value || this.birthDatewrong,
          familyName: (value) => !!value || this.familyNamewrong,
          firstName: (value) => !!value || this.firstNamewrong,
        },
      };
    },
    methods: {
      changeBirthDate() {
        this.domElements.birthDate.value = this.birthDate;
      },
      changeFamilyName() {
        this.domElements.familyName.value = this.familyName;
      },
      changeFirstName() {
        this.domElements.firstName.value = this.firstName;
      },
      validate(from) {
        this.$refs.form.validate();
      },
      submit() {
          this.changeBirthDate();
          this.changeFamilyName();
          this.changeFirstName();
          this.domElements.sendButton.click();
      },
    },
	}).use(vuetify).mount("#app");

  return personDataPage;
}

// familyName: document.querySelector("#STD_N_FAMILY_NAME_1"),
// firstName: document.querySelector("#STD_N_FIRST_NAME"),
// sendButton: document.querySelector('[cds-ref="send-button"]')
