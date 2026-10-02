/* =========================================================
	@(#) FileVersion: 821.001.038
	@(#) FileDescription: common.vue.js
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2024
	@(#) ProductName: Peoplenet
========================================================= */

let m4Vuetify = {};

m4Vuetify.vuetifyConst = {
    primaryColor: "#0046fe",
    secondaryColor: "#ff5c35",
    background: "#F0F6FE"
};

m4Vuetify.vuetifyTheme = {
    theme: {
        themes: {
            light: {
                colors: {
                    primary: m4Vuetify.vuetifyConst.primaryColor,
                    "primary-lighten-5": "#f7f9fe",
                    "primary-lighten-4": "#e5edff",
                    "primary-lighten-3": "#ccdaff",
                    "primary-lighten-2": "#99b5ff",
                    "primary-lighten-1": "#6690ff",
                    "primary-darken-1": "#0038cc",
                    "primary-darken-2": "#002eaa",
                    "primary-darken-3": "#001c66",
                    "primary-darken-4": "#000e33",

                    secondary: m4Vuetify.vuetifyConst.secondaryColor,
                    "secondary-lighten-5": "#FCF7F6",
                    "secondary-lighten-4": "#FBF2F0",
                    "secondary-lighten-3": "#FEEAE5",
                    "secondary-lighten-2": "#FED6CC",
                    "secondary-lighten-1": "#FEAE99",
                    "secondary-darken-1": "#E6502C",
                    "secondary-darken-2": "#CC492A",
                    "secondary-darken-3": "#B13F24",
                    "secondary-darken-4": "#88301C",

                    neutral: "#002c52",
                    "neutral-lighten-5": "#f7f8f9",
                    "neutral-lighten-4": "#e6eaee",
                    "neutral-lighten-3": "#ccd4dc",
                    "neutral-lighten-2": "#b3c0cb",
                    "neutral-lighten-1": "#8095a8",
                    "neutral-darken-1": "#4d6b86",
                    "neutral-darken-2": "#335674",
                    "neutral-darken-3": "#1a4163",
                    "neutral-darken-4": "#001d36",

                    info: "#155AC1",
                    "info-lighten-5": "#fefbff",
                    "info-lighten-4": "#edf0ff",
                    "info-lighten-3": "#d9e2ff",
                    "info-lighten-2": "#afc6ff",
                    "info-lighten-1": "#84aaff",
                    "info-darken-1": "#3b73dc",
                    "info-darken-2": "#004299",
                    "info-darken-3": "#002d6d",
                    "info-darken-4": "#001944",

                    success: "#376A1F",
                    "success-lighten-5": "#f7ffec",
                    "success-lighten-4": "#cdffb0",
                    "success-lighten-3": "#b7f396",
                    "success-lighten-2": "#9cd67d",
                    "success-lighten-1": "#81ba64",
                    "success-darken-1": "#4f8436",
                    "success-darken-2": "#1f5106",
                    "success-darken-3": "#103900",
                    "success-darken-4": "#072100",

                    warning: "#8B5000",
                    "warning-lighten-5": "#fffbff",
                    "warning-lighten-4": "#ffeee1",
                    "warning-lighten-3": "#ffdcbe",
                    "warning-lighten-2": "#ffb870",
                    "warning-lighten-1": "#f79300",
                    "warning-darken-1": "#ae6600",
                    "warning-darken-2": "#693c00",
                    "warning-darken-3": "#4a2800",
                    "warning-darken-4": "#2c1600",

                    error: "#BC0E2E",
                    "error-lighten-5": "#fffbff",
                    "error-lighten-4": "#ffedec",
                    "error-lighten-3": "#ffdad9",
                    "error-lighten-2": "#ffb3b2",
                    "error-lighten-1": "#ff8889",
                    "error-darken-1": "#e03043",
                    "error-darken-2": "#92001f",
                    "error-darken-3": "#680013",
                    "error-darken-4": "#410008",

                    neutralbg: m4Vuetify.vuetifyConst.background,

                    background: m4Vuetify.vuetifyConst.background,
                    "on-surface": "#002c52",
                    "on-background": "#002c52"
                },
                variables: {
                    "border-opacity": 0.2,
                    "high-emphasis-opacity": 0.64,
                }
            }
        }
    }
};

const { createVuetify } = Vuetify;

m4Vuetify.vuetify = createVuetify({
    theme: m4Vuetify.vuetifyTheme.theme
});
