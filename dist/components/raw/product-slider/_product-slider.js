'use strict';

const slick = require('slick-carousel-browserify');

MF.productSlider = {
    init: () => {
        const haveProductSlider = $('.product-slider').length;

        if(haveProductSlider){
            slick($('.product-slider'), {
                dots: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<button class="prev">Previous Slide</button>',
                nextArrow: '<button class="next">Next Slide</button>'
            });
        }
    }
};

module.exports = MF.productSlider;
