import "./slider";

import show_modal from "./modules/modals";
import tabs from "./modules/tabs";
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};
    let deadline = '2022-06-13';


    changeModalState(modalState);
    show_modal(modalState);
    tabs();
    forms(modalState);
    timer('.container1', deadline);
    images();
    
});


