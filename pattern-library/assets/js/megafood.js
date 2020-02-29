//Libs
import 'picturefill/dist/picturefill.min';
import 'track-focus';
import $ from "jquery";
window.jQuery = $;
window.$ = $;

let MF = MF || {};
window.MF = MF;

const helpers = require('./global/helpers');
const accordion = require('./global/accordion');

const sideNav = require('./../../patterns/01-components/side-nav/_side-nav');
const productSlider = require('./../../patterns/01-components/product-slider/_product-slider');
const productRecommendations = require('./../../patterns/01-components/product-recommendations/_product-recommendations');

MF.init = () => {
    MF.helpers.init();
    MF.sideNav.init();
    MF.productSlider.init();
    MF.productRecommendations.init();
};

$(document).ready(() => {    
    MF.init();
});
