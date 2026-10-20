/** Browser-only appearance preference, independent of product/workspace data. */
export const DEVELOPMENT_TEXT_STORAGE_KEY = "powermeta4-hide-development-text";
export const DEVELOPMENT_TEXT_ATTRIBUTE = "data-hide-development-text";
export const DEFAULT_HIDE_DEVELOPMENT_TEXT = true;

export const DEVELOPMENT_TEXT_INIT_SCRIPT = `(function(){var h=true;try{h=localStorage.getItem(${JSON.stringify(DEVELOPMENT_TEXT_STORAGE_KEY)})!=="false";}catch(e){}document.documentElement.setAttribute(${JSON.stringify(DEVELOPMENT_TEXT_ATTRIBUTE)},String(h));})();`;
