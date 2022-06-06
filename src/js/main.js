import "./slider";

import show_modal from "./modules/modals";
import tabs from "./modules/tabs";
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};

    changeModalState(modalState);
    show_modal(modalState);
    tabs();
    forms(modalState);

    
    
});


