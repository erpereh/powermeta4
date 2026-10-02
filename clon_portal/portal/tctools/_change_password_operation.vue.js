/* =========================================================
	@(#) FileVersion: 821.001.041
	@(#) FileDescription: _change_password_operation.vue.js
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2024
	@(#) ProductName: Peoplenet
========================================================= */

/**
 * Change password success|error page component
 * @param {Object} myVuetify - Vue UI Library instance (Optional Parameter)
 * @returns {Object} Vue Component
 */

function changePasswordPage(myVuetify) {
	const { createApp } = Vue;	
	const vuetify = myVuetify || m4Vuetify.vuetify;
	const passwordVue = createApp({
    template: `
        <v-app class="cds-bg">
            <div class="cds-bg-generic-error"></div>
            <v-main class="d-flex align-start">
                <v-container class="cds-container-box-login height-fill-available">
                    <div class="height-fill-available d-flex justify-center">
                      <div :class="[$vuetify.display.smAndDown ? 'px-10' : 'px-16', 'text-center']">
                          <h1 id="_changePasswordSuccessTitle" class="font-weight-semibold text-h1 mt-9 mb-10 cds-text-center text--primary" data-cy="changePasswordSuccessTitle">{{ changePasswordSuccessTitle }}</h1>
                          <p id="_changePasswordSuccessDescription" class="text-body-1 mb-10 cds-text-center"
                              data-cy="changePasswordSuccessDescription">{{ changePasswordSuccessDescription }}
                          </p>
                          <v-btn v-if="changePasswordSuccessButton !== ''" id="_changePasswordSuccessButton" type="submit" color="primary" elevation="1"
                              @click="clickLocation()" data-cy="changePasswordSuccessButton">
                              {{ changePasswordSuccessButton }}
                          </v-btn>
                      </div>
                    </div>
                </v-container>
            </v-main>
        </v-app>
        `,
    data() {
      return {
        changePasswordSuccessButton: "",
        changePasswordSuccessTitle: "",
        changePasswordSuccessDescription: "",
        locationURL: "",
        unframe: false,
      };
    },
    methods: {
      clickLocation()	{
        // only unframe for successful operations. 
        if (window.parent && window.parent != window && this.unframe && this.unframe === 'true') 
          {
            top.location.href = this.locationURL; 
          } else {  
            location.href = this.locationURL;
        }
   
      },
    },
	}).use(vuetify).mount("#app");

  return passwordVue;
}
