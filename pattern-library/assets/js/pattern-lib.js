//Libs
import $ from "jquery";
window.jQuery = $;
window.$ = $;

let PL = PL || {};
window.PL = PL;

const helpers = require('./global/helpers');
const accordion = require('./global/accordion');
const slider = require('./../../patterns/01-components/slider/_slider');

PL.init = () => {
    PL.slider.init();
};

$(document).ready(() => {
    PL.init();
});
